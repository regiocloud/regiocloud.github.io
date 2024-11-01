"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[9194],{2387:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=s(5893),t=s(1151);const r={},a="Kubectl",l={id:"kubernetes/beispiele/kubectl",title:"Kubectl",description:"Ein essenzieller Teil eines Kubernetes-Clusters ist die Erreichbarkeit von au\xdfen. Um dies zu erreichen muss ein",source:"@site/docs/kubernetes/beispiele/kubectl.md",sourceDirName:"kubernetes/beispiele",slug:"/kubernetes/beispiele/kubectl",permalink:"/docs/kubernetes/beispiele/kubectl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Kubeapps",permalink:"/docs/kubernetes/beispiele/kubeapps"},next:{title:"API",permalink:"/docs/api"}},c={},d=[];function o(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"kubectl",children:"Kubectl"}),"\n",(0,i.jsxs)(n.p,{children:["Ein essenzieller Teil eines Kubernetes-Clusters ist die Erreichbarkeit von au\xdfen. Um dies zu erreichen muss ein\n",(0,i.jsx)(n.code,{children:"Service"})," sowie ",(0,i.jsx)(n.code,{children:"Ingress"})," erstellt werden."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl create namespace nginx\nnamespace/nginx created\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="nginx-svc.yaml"',children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\n  namespace: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - port: 80\n      targetPort: 80\n  type: LoadBalancer\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f nginx-svc.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.code,{children:"External-IP"})," des Loadbalancers kann \xfcber ",(0,i.jsx)(n.code,{children:"kubectl get svc nginx-service -n nginx"})," in Erfahrung gebracht werden."]}),"\n",(0,i.jsx)(n.p,{children:"Der Ingress dient dabei als Vermittler zwischen dem eingehenden Traffic und dem Service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="nginx-ingress.yaml"',children:"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: nginx-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/proxy-body-size: 4G\nspec:\n  ingressClassName: nginx\n  rules:\n  - http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: nginx\n            port:\n              number: 80\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f nginx-ingress.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"Um nginx selbst auszurollen, muss ein Deployment erstellt werden:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="nginx-deployment.yaml"',children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  selector:\n    matchLabels:\n      app: nginx\n  replicas: 2 # tells deployment to run 2 pods matching the template\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f nginx-deployment.yaml --namespace nginx\n"})}),"\n",(0,i.jsx)(n.p,{children:"Um alles wieder abzurei\xdfen, kann folgender Befehl benutzt werden:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ kubectl delete all --all --namespace nginx\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var i=s(7294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);