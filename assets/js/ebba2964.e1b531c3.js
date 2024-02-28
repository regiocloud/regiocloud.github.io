"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[8628],{1402:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var i=s(5893),a=s(1151);const r={},l="Beispiele",t={id:"kubernetes/beispiele",title:"Beispiele",description:"Diverse Dienste bzw. Applikationen k\xf6nnen mit Hilfe von kubectl oder",source:"@site/docs/kubernetes/beispiele.md",sourceDirName:"kubernetes",slug:"/kubernetes/beispiele",permalink:"/docs/kubernetes/beispiele",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Kubernetes",permalink:"/docs/kubernetes/"},next:{title:"API",permalink:"/docs/api"}},c={},d=[{value:"Kubectl",id:"kubectl",level:2},{value:"Helm",id:"helm",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"beispiele",children:"Beispiele"}),"\n",(0,i.jsxs)(n.p,{children:["Diverse Dienste bzw. Applikationen k\xf6nnen mit Hilfe von ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"kubectl"})," oder\nbeispielsweise ",(0,i.jsx)(n.a,{href:"https://helm.sh/docs/helm/helm_install/",children:"helm"})," installiert werden."]}),"\n",(0,i.jsx)(n.h2,{id:"kubectl",children:"Kubectl"}),"\n",(0,i.jsxs)(n.p,{children:["Ein essenzieller Teil eines Kubernetes-Clusters ist die Erreichbarkeit von au\xdfen. Um dies zu erreichen muss ein\n",(0,i.jsx)(n.code,{children:"Service"})," sowie ",(0,i.jsx)(n.code,{children:"Ingress"})," erstellt werden."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl create namespace nginx\nnamespace/nginx created\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="nginx-svc.yaml"',children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\n  namespace: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - port: 80\n      targetPort: 80\n  type: LoadBalancer\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f nginx-svc.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.code,{children:"External-IP"})," des Loadbalancers kann \xfcber ",(0,i.jsx)(n.code,{children:"kubectl get svc nginx-service -n nginx"})," in Erfahrung gebracht werden."]}),"\n",(0,i.jsx)(n.p,{children:"Der Ingress dient dabei als Vermittler zwischen dem eingehenden Traffic und dem Service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="nginx-ingress.yaml"',children:"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: nginx-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/proxy-body-size: 4G\nspec:\n  ingressClassName: nginx\n  rules:\n  - http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: nginx\n            port:\n              number: 80\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f nginx-ingress.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"Um nginx selbst auszurollen, muss ein Deployment erstellt werden:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="nginx-deployment.yaml"',children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 2 # tells deployment to run 2 pods matching the template\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f nginx-deployment.yaml --namespace nginx\n"})}),"\n",(0,i.jsx)(n.p,{children:"Um alles wieder abzurei\xdfen, kann folgender Befehl benutzt werden:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl delete all --all --namespace nginx\n"})}),"\n",(0,i.jsx)(n.h2,{id:"helm",children:"Helm"}),"\n",(0,i.jsxs)(n.p,{children:["Einfacher geht das ganze noch, wenn Helm benutzt wird. Dabei wird automatisch ein Service f\xfcr den Dienst erstellt.\nAusserdem kann, in den meisten F\xe4llen, innerhalb der ",(0,i.jsx)(n.code,{children:"Values"})," ein ",(0,i.jsx)(n.code,{children:"Ingress"})," konfiguriert werden. Zuvor muss jedoch,\nebenfalls per Helm, ein Ingress mit dem Type ",(0,i.jsx)(n.code,{children:"Loadbalancer"})," erstellt werden, damit eine \xf6ffentliche IP Adresse f\xfcr den\nnachfolgenden Dienst existiert."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="ingress-values.yaml"',children:'controller:\n  allowSnippetAnnotations: true\n  podLabels:\n    app: nginx-ingress\n    component: controller\n  extraArgs:\n    enable-ssl-passthrough: ""\n  config:\n    use-http2: true\n  service:\n    type: "LoadBalancer"\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\n$ helm repo update\n$ helm upgrade -i ingress-nginx -f ingress-values.yaml --create-namespace -n ingress-nginx ingress-nginx/ingress-nginx\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="nginx-values.yaml"',children:'cloneStaticSiteFromGit:\n  enabled: true\n  repository: "https://github.com/regiocloud/sample-website"\n  branch: "main"\n  interval: 3600\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ helm upgrade -i nginx -f nginx-values.yaml --create-namespace -n nginx oci://registry-1.docker.io/bitnamicharts/nginx\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Die Values in ",(0,i.jsx)(n.code,{children:"nginx-values.yaml"})," dienen nur als Beispiel. Hier wird eine statische Website ausgeliefert. Alle m\xf6glichen\nValues f\xfcr das Helm Chart finden sich in der ",(0,i.jsx)(n.a,{href:"https://github.com/bitnami/charts/blob/main/bitnami/nginx/values.yaml",children:"values.yaml"}),"\ndes Helm Charts selbst."]}),"\n",(0,i.jsxs)(n.p,{children:["Die Erstellung des Loadbalancers nimmt einige Zeit in Anspruch. Mit dem nachfolgendem Kommando kann darauf gewartet werden.\nSobald der Loadbalancer verf\xfcgbar ist wird in der Spalte ",(0,i.jsx)(n.code,{children:"EXTERNAL-IP"})," die \xf6ffentlich erreichbare IP Adresse des Loadbalancers\nhinterlegt. Das Kommand kann dann mit ",(0,i.jsx)(n.code,{children:"STRG+C"})," beendet werden."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl get svc --namespace nginx -w nginx\nNAME    TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE\nnginx   LoadBalancer   100.90.239.115   <pending>     80:31627/TCP   58s\nnginx   LoadBalancer   100.90.239.115   <pending>     80:31627/TCP   2m12s\nnginx   LoadBalancer   100.90.239.115   81.163.193.251   80:31627/TCP   2m12s\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Die Beispiel Website ist dann \xfcber die IP Adresse in der Spalte ",(0,i.jsx)(n.code,{children:"EXTERNAL-IP"})," \xfcber einen beliebigen Browser aufrufbar."]}),"\n",(0,i.jsx)(n.p,{children:"Zum Abrei\xdfen des Charts, kann folgender Befehl benutzt werden:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ helm uninstall nginx -n nginx\nrelease "nginx" uninstalled\n'})}),"\n",(0,i.jsx)(n.p,{children:"Der Loadbalancer kann wie folgt entfernt werden:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ helm uninstall ingress-nginx -n ingress-nginx\nrelease "ingress-nginx" uninstalled\n'})})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>l});var i=s(7294);const a={},r=i.createContext(a);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);