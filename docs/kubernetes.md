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
und [kubelogin](https://github.com/int128/kubelogin) muss vorab installiert werden.

```bash
# Homebrew (macOS and Linux)
brew install gardener/tap/gardenctl-v2
brew install gardener/tap/gardenlogin
brew install int128/kubelogin/kubelogin

# Chocolatey (Windows)
choco install gardenctl-v2
choco install gardenlogin
choco install kubelogin
```

Eine personalisierte Kubeconfig für ein Projekt `PROJECT` kann von
https://dashboard.okeanos.tech/account?namespace=garden-PROJECT herunterladen und in einer lokalen Datei
abgelegt werden. Zum Beispiel in `~/.kube/garden-okeanos`.

```
$ gardenctl config set-garden okeanos --kubeconfig "~/.kube/garden-okeanos"
Successfully configured garden "okeanos"
```

Das vorherige Kommando erstellt die Datei `~/.garden/gardenctl-v2.yaml` mit folgendem Inhalt:

```yaml
gardens:
- identity: okeanos
  kubeconfig: ~/.kube/garden-okeanos
```

Die Kubeconfig für ein Kubernetes Cluster `CLUSTER` in einem Projekt `PROJECT` ist unter `Access` bei
`Kubeconfig - Gardenlogin` abgelegt. Diese Kubeconfig herunterladen (oder den Inhalt kopieren) und in
einer lokalen Datei ablegen. Zum Beispiel in `~/.kube/config-pfee6i4v2j` wenn der Name des Clusters
`pfee6i4v2j` ist.

Wenn mehrere Projekte genutzt werden und dadurch bedingt mehrere Einträge in `~/.garden/gardenctl-v2.yaml`
vorhanden sind ist es wichtig in dieser Kubeconfig eine Änderung vorzunehmen. Der Eintrag
`gardenClusterIdentity` ist per Default auf `okeanos` gesetzt und muss entsprechend angepasst werden. Wenn z.B.
eine weiterer Eintrag `demo` in `~/.garden/gardenctl-v2.yaml` vorhanden ist und genutzt werden soll dann
wird `gardenClusterIdentity` entsprechend auf `gardenClusterIdentity: demo` geändert.

Anschliessend kann z.B. [kubectl](https://kubernetes.io/docs/reference/kubectl/) wie gewohnt verwendet werden.

```
$ export KUBECONFIG=~/.kube/config-pfee6i4v2j
$ kubectl get nodes
NAME                                                        STATUS   ROLES    AGE   VERSION
shoot--PROJECT--CLUSTER-worker-g096a-z1-758bb-rmdfh   Ready    <none>   77m   v1.27.9
shoot--PROJECT--CLUSTER-worker-iaz3a-z1-6c9cd-jx84f   Ready    <none>   87m   v1.27.9
```

### Ausrollen von Diensten (Beispiele)

Diverse Dienste bzw. Applikationen können mit Hilfe von [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) oder beispielsweise [helm](https://helm.sh/docs/helm/helm_install/) installiert werden.

#### Kubectl

Ein essenzieller Teil eines Kubernetes-Clusters ist die Erreichbarkeit von außen. Um dies zu erreichen muss ein `Service` sowie `Ingress` erstellt werden.

```bash
$ kubectl create namespace nginx
namespace/nginx created
```

```yaml title="nginx-svc.yaml"
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
  namespace: nginx
spec:
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 80
  type: LoadBalancer
```

```bash
$ kubectl apply -f nginx-svc.yaml
```

Die `External-IP` des Loadbalancers kann über `kubectl get svc nginx-service -n nginx` in Erfahrung gebracht werden.

Der Ingress dient dabei als Vermittler zwischen dem eingehenden Traffic und dem Service

```yaml title="nginx-ingress.yaml"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: 4G
spec:
  ingressClassName: nginx
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: nginx
            port:
              number: 80
```

```bash
$ kubectl apply -f nginx-ingress.yaml
```

Um nginx selbst auszurollen, muss ein Deployment erstellt werden:

```yaml title="nginx-deployment.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 2 # tells deployment to run 2 pods matching the template
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```

```bash
$ kubectl apply -f nginx-deployment.yaml --namespace nginx
```

Um alles wieder abzureißen, kann folgender Befehl benutzt werden:

```bash
$ kubectl delete all --all --namespace nginx
```

#### Helm

Einfacher geht das ganze noch, wenn Helm benutzt wird. Dabei wird automatisch ein Service für den Dienst erstellt.
Ausserdem kann, in den meisten Fällen, innerhalb der `Values` ein `Ingress` konfiguriert werden. Zuvor muss jedoch,
ebenfalls per Helm, ein Ingress mit dem Type `Loadbalancer` erstellt werden, damit eine öffentliche IP Adresse für den
nachfolgenden Dienst existiert.

```yaml title="ingress-values.yaml"
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
$ helm repo update
$ helm upgrade -i ingress-nginx -f ingress-values.yaml --create-namespace -n ingress-nginx ingress-nginx/ingress-nginx
```

```yaml title="nginx-values.yaml"
cloneStaticSiteFromGit:
  enabled: true
  repository: "https://github.com/regiocloud/sample-website"
  branch: "main"
  interval: 3600
```

```bash
$ helm upgrade -i nginx -f nginx-values.yaml --create-namespace -n nginx oci://registry-1.docker.io/bitnamicharts/nginx
```

Die Values in `nginx-values.yaml` dienen nur als Beispiel. Hier wird eine statische Website ausgeliefert. Alle möglichen
Values für das Helm Chart finden sich in der [values.yaml](https://github.com/bitnami/charts/blob/main/bitnami/nginx/values.yaml)
des Helm Charts selbst.


Die Erstellung des Loadbalancers nimmt einige Zeit in Anspruch. Mit dem nachfolgendem Kommando kann darauf gewartet werden.
Sobald der Loadbalancer verfügbar ist wird in der Spalte `EXTERNAL-IP` die öffentlich erreichbare IP Adresse des Loadbalancers
hinterlegt. Das Kommand kann dann mit `STRG+C` beendet werden.

```bash
$ kubectl get svc --namespace nginx -w nginx
NAME    TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
nginx   LoadBalancer   100.90.239.115   <pending>     80:31627/TCP   58s
nginx   LoadBalancer   100.90.239.115   <pending>     80:31627/TCP   2m12s
nginx   LoadBalancer   100.90.239.115   81.163.193.251   80:31627/TCP   2m12s
```

Die Beispiel Website ist dann über die IP Adresse in der Spalte `EXTERNAL-IP` über einen beliebigen Browser aufrufbar.

Zum Abreißen des Charts, kann folgender Befehl benutzt werden:

```bash
$ helm uninstall nginx -n nginx
release "nginx" uninstalled
```

Der Loadbalancer kann wie folgt entfernt werden:

```bash
$ helm uninstall ingress-nginx -n ingress-nginx
release "ingress-nginx" uninstalled
```
