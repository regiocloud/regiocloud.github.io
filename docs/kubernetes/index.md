---
sidebar_label: Kubernetes
sidebar_position: 200
---

# Kubernetes

## Erstellung von einem Kubernetes Cluster

<img
  src={require('./images/gardener-create-cluster-1.png').default}
  width="100%"
/>

<img
  src={require('./images/gardener-create-cluster-2.png').default}
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
