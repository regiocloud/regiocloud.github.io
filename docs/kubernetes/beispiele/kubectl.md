# Kubectl

Ein essenzieller Teil eines Kubernetes-Clusters ist die Erreichbarkeit von außen. Um dies zu erreichen muss ein
`Service` sowie `Ingress` erstellt werden.

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
