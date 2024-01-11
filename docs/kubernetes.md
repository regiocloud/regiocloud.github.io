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
