# Helm

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
  repository: "https://github.com/regiocloud/example-website"
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
