---
sidebar_label: Kubernetes
sidebar_position: 200
---

# Kubernetes

## Erstellung von einem Kubernetes Cluster

<img
  src={require('./images/kubernetes/gardener-create-cluster-1.png').default}
  width="100%"
/>

<img
  src={require('./images/kubernetes/gardener-create-cluster-2.png').default}
  width="100%"
/>

## Nutzung von einem Kubernetes Cluster

### Web Terminal

### Kubeconfig

Das Credential Plugin [gardenlogin](https://github.com/gardener/gardenlogin#installation)
sowie die [CLI für Gardener](https://github.com/gardener/gardenctl-v2/#install-using-package-managers)
muss vorab installiert werden.

```bash
# Homebrew (macOS and Linux)
brew install gardener/tap/gardenctl-v2
brew install gardener/tap/gardenlogin

# Chocolatey (Windows)
choco install gardenctl-v2
choco install gardenlogin
```

Eine personalisierte Kubeconfig für ein Projekt `PROJECT` kann von
https://dashboard.okeanos.tech/account?namespace=garden-PROJECT herunterladen und in einer lokalen Datei
abgelegt werden. Zum Beispiel in `~/.kube/garden-PROJECT`.

```
$ gardenctl config set-garden okeanos --kubeconfig "~/.kube/garden-PROJECT"
Successfully configured garden "okeanos"
```

Das vorherige Kommando erstellt die Datei `~/.garden/gardenctl-v2.yaml` mit folgendem Inhalt:

```yaml
gardens:
- identity: okeanos
  kubeconfig: ~/.kube/garden-PROJECT
```

Die Kubeconfig für ein Kubernetes Cluster `CLUSTER` in einem Projekt `PROJECT` ist unter `Access` bei
`Kubeconfig - Gardenlogin` abgelegt. Diese Kubeconfig herunterladen und in einer lokalen Datei
ablegen. Zum Beispiel in `~/.kube/config-CLUSTER`.

Anschliessend kann z.B. [kubectl](https://kubernetes.io/docs/reference/kubectl/) wie gewohnt verwendet werden.

```
$ export KUBECONFIG=~/.kube/config-CLUSTER
$ kubectl get nodes
NAME                                                        STATUS   ROLES    AGE   VERSION
shoot--PROJECT--CLUSTER-worker-g096a-z1-758bb-rmdfh   Ready    <none>   77m   v1.27.9
shoot--PROJECT--CLUSTER-worker-iaz3a-z1-6c9cd-jx84f   Ready    <none>   87m   v1.27.9
```

### Ausrollen von Diensten (Beispiele)

Diverse Dienste bzw. Applikationen können mit Hilfe von [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) oder beispielsweise [helm](https://helm.sh/docs/helm/helm_install/) installiert werden.

#### Kubectl
Ein essenzieller Teil eines Kubernetes-Clusters ist die Erreichbarkeit von außen. Um dies zu erreichen muss ein `Service` sowie `Ingress` erstellt werden.

`nextcloud-svc.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nextcloud-service
  namespace: nextcloud
spec:
  selector:
    app: nextcloud
  ports:
    - port: 80
      targetPort: 8080
  type: LoadBalancer
```

```bash
$ kubectl apply -f nextcloud-svc.yaml
```

Der Ingress dient dabei als Vermittler zwischen dem eingehenden Traffic und dem Service

`nextcloud-ingress.yaml`
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nextcloud-ingress
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: 4G
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nextcloud
            port:
              number: 8080
```

```bash
$ kubectl apply -f nextcloud-ingress.yaml
```

#### Helm
Einfacher geht das ganze noch, wenn Helm benutzt wird. Dabei wird automatisch ein Service für den Dienst erstellt. Ausserdem kann, in den meisten Fällen, innerhalb der `Values` ein `Ingress` konfiguriert werden. Zuvor muss jedoch, ebenfalls per Helm, ein Ingress mit dem `type: "Loadbalancer"` erstellt werden, damit eine externe IP für den nachfolgenden Dienst existiert.

`ingress-values.yaml`
```yaml
controller:
  allowSnippetAnnotations: true
  podLabels:
    app: nginx-ingress
    component: controller
  extraArgs:
    enable-ssl-passthrough: ""
  config:
    use-http2: true
  service:
    type: "LoadBalancer"
```

```bash
$ helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
$ helm upgrade -i ingress-nginx -f ingress-values.yaml --create-namespace -n ingress-nginx ingress-nginx/ingress-nginx
```

`nextcloud-values.yaml`
```yaml
ingress:
  enabled: true
  className: nginx
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: 4G
    cert-manager.io/cluster-issuer: letsencrypt-prod
  tls:
    - secretName: nextcloud-tls
      hosts:
        - nextcloud.example.org
  path: /
  pathType: Prefix
nextcloud:
  host: nextcloud.example.org
  username: admin
  password: pa$$w0rd
internalDatabase:
  enabled: false
externalDatabase:
  enabled: true
  host: nextcloud-mariadb
  password: pa$$w0rd
mariadb:
  enabled: true
  auth:
    database: nextcloud
    username: nextcloud
    password: pa$$w0rd
redis:
  enabled: true
  architecture: standalone
  auth:
    enabled: true
    password: pa$$w0rd
cronjob:
  enabled: true
```

```bash
$ helm repo add nextcloud https://nextcloud.github.io/helm/
$ helm upgrade -i nextcloud -f nextcloud-values.yaml --create-namespace -n nextcloud nextcloud/nextcloud
```
