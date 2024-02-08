"use strict";(self.webpackChunkosism=self.webpackChunkosism||[]).push([[5136],{5639:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var r=s(5893),i=s(1151);const l={sidebar_label:"Kubernetes",sidebar_position:200},a="Kubernetes",t={id:"kubernetes",title:"Kubernetes",description:"Erstellung von einem Kubernetes Cluster",source:"@site/docs/kubernetes.md",sourceDirName:".",slug:"/kubernetes",permalink:"/docs/kubernetes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_label:"Kubernetes",sidebar_position:200},sidebar:"docSidebar",previous:{title:"DNS",permalink:"/docs/dns"},next:{title:"API",permalink:"/docs/api"}},d={},c=[{value:"Erstellung von einem Kubernetes Cluster",id:"erstellung-von-einem-kubernetes-cluster",level:2},{value:"Nutzung von einem Kubernetes Cluster",id:"nutzung-von-einem-kubernetes-cluster",level:2},{value:"Web Terminal",id:"web-terminal",level:3},{value:"Kubeconfig",id:"kubeconfig",level:3},{value:"Ausrollen von Diensten (Beispiele)",id:"ausrollen-von-diensten-beispiele",level:3},{value:"Kubectl",id:"kubectl",level:4},{value:"Helm",id:"helm",level:4}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,r.jsx)(n.h2,{id:"erstellung-von-einem-kubernetes-cluster",children:"Erstellung von einem Kubernetes Cluster"}),"\n",(0,r.jsx)("img",{src:s(1680).Z,width:"100%"}),"\n",(0,r.jsx)("img",{src:s(4259).Z,width:"100%"}),"\n",(0,r.jsx)(n.h2,{id:"nutzung-von-einem-kubernetes-cluster",children:"Nutzung von einem Kubernetes Cluster"}),"\n",(0,r.jsx)(n.h3,{id:"web-terminal",children:"Web Terminal"}),"\n",(0,r.jsx)(n.h3,{id:"kubeconfig",children:"Kubeconfig"}),"\n",(0,r.jsxs)(n.p,{children:["Das Credential Plugin ",(0,r.jsx)(n.a,{href:"https://github.com/gardener/gardenlogin#installation",children:"gardenlogin"}),"\nsowie die ",(0,r.jsx)(n.a,{href:"https://github.com/gardener/gardenctl-v2/#install-using-package-managers",children:"CLI f\xfcr Gardener"}),"\nmuss vorab installiert werden."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Homebrew (macOS and Linux)\nbrew install gardener/tap/gardenctl-v2\nbrew install gardener/tap/gardenlogin\n\n# Chocolatey (Windows)\nchoco install gardenctl-v2\nchoco install gardenlogin\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Eine personalisierte Kubeconfig f\xfcr ein Projekt ",(0,r.jsx)(n.code,{children:"PROJECT"})," kann von\n",(0,r.jsx)(n.a,{href:"https://dashboard.okeanos.tech/account?namespace=garden-PROJECT",children:"https://dashboard.okeanos.tech/account?namespace=garden-PROJECT"})," herunterladen und in einer lokalen Datei\nabgelegt werden. Zum Beispiel in ",(0,r.jsx)(n.code,{children:"~/.kube/garden-PROJECT"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ gardenctl config set-garden okeanos --kubeconfig "~/.kube/garden-PROJECT"\nSuccessfully configured garden "okeanos"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Das vorherige Kommando erstellt die Datei ",(0,r.jsx)(n.code,{children:"~/.garden/gardenctl-v2.yaml"})," mit folgendem Inhalt:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"gardens:\n- identity: okeanos\n  kubeconfig: ~/.kube/garden-PROJECT\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Die Kubeconfig f\xfcr ein Kubernetes Cluster ",(0,r.jsx)(n.code,{children:"CLUSTER"})," in einem Projekt ",(0,r.jsx)(n.code,{children:"PROJECT"})," ist unter ",(0,r.jsx)(n.code,{children:"Access"})," bei\n",(0,r.jsx)(n.code,{children:"Kubeconfig - Gardenlogin"})," abgelegt. Diese Kubeconfig herunterladen und in einer lokalen Datei\nablegen. Zum Beispiel in ",(0,r.jsx)(n.code,{children:"~/.kube/config-CLUSTER"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Anschliessend kann z.B. ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/kubectl/",children:"kubectl"})," wie gewohnt verwendet werden."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ export KUBECONFIG=~/.kube/config-CLUSTER\n$ kubectl get nodes\nNAME                                                        STATUS   ROLES    AGE   VERSION\nshoot--PROJECT--CLUSTER-worker-g096a-z1-758bb-rmdfh   Ready    <none>   77m   v1.27.9\nshoot--PROJECT--CLUSTER-worker-iaz3a-z1-6c9cd-jx84f   Ready    <none>   87m   v1.27.9\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ausrollen-von-diensten-beispiele",children:"Ausrollen von Diensten (Beispiele)"}),"\n",(0,r.jsxs)(n.p,{children:["Diverse Dienste bzw. Applikationen k\xf6nnen mit Hilfe von ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/#kubectl",children:"kubectl"})," oder beispielsweise ",(0,r.jsx)(n.a,{href:"https://helm.sh/docs/helm/helm_install/",children:"helm"})," installiert werden."]}),"\n",(0,r.jsx)(n.h4,{id:"kubectl",children:"Kubectl"}),"\n",(0,r.jsxs)(n.p,{children:["Ein essenzieller Teil eines Kubernetes-Clusters ist die Erreichbarkeit von au\xdfen. Um dies zu erreichen muss ein ",(0,r.jsx)(n.code,{children:"Service"})," sowie ",(0,r.jsx)(n.code,{children:"Ingress"})," erstellt werden."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"nextcloud-svc.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: nextcloud-service\n  namespace: nextcloud\nspec:\n  selector:\n    app: nextcloud\n  ports:\n    - port: 80\n      targetPort: 8080\n  type: LoadBalancer\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f nextcloud-svc.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Der Ingress dient dabei als Vermittler zwischen dem eingehenden Traffic und dem Service"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"nextcloud-ingress.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: nextcloud-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/proxy-body-size: 4G\n    cert-manager.io/cluster-issuer: letsencrypt-prod\nspec:\n  ingressClassName: nginx\n  rules:\n  - http:\n      paths:\n      - path: /\n        pathType: Prefix\n        backend:\n          service:\n            name: nextcloud\n            port:\n              number: 8080\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f nextcloud-ingress.yaml\n"})}),"\n",(0,r.jsx)(n.h4,{id:"helm",children:"Helm"}),"\n",(0,r.jsxs)(n.p,{children:["Einfacher geht das ganze noch, wenn Helm benutzt wird. Dabei wird automatisch ein Service f\xfcr den Dienst erstellt. Ausserdem kann, in den meisten F\xe4llen, innerhalb der ",(0,r.jsx)(n.code,{children:"Values"})," ein ",(0,r.jsx)(n.code,{children:"Ingress"})," konfiguriert werden. Zuvor muss jedoch, ebenfalls per Helm, ein Ingress mit dem ",(0,r.jsx)(n.code,{children:'type: "Loadbalancer"'})," erstellt werden, damit eine externe IP f\xfcr den nachfolgenden Dienst existiert."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ingress-values.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'controller:\n  allowSnippetAnnotations: true\n  podLabels:\n    app: nginx-ingress\n    component: controller\n  extraArgs:\n    enable-ssl-passthrough: ""\n  config:\n    use-http2: true\n  service:\n    type: "LoadBalancer"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\n$ helm upgrade -i ingress-nginx -f ingress-values.yaml --create-namespace -n ingress-nginx ingress-nginx/ingress-nginx\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"nextcloud-values.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"ingress:\n  enabled: true\n  className: nginx\n  annotations:\n    nginx.ingress.kubernetes.io/proxy-body-size: 4G\n    cert-manager.io/cluster-issuer: letsencrypt-prod\n  tls:\n    - secretName: nextcloud-tls\n      hosts:\n        - nextcloud.example.org\n  path: /\n  pathType: Prefix\nnextcloud:\n  host: nextcloud.example.org\n  username: admin\n  password: pa$$w0rd\ninternalDatabase:\n  enabled: false\nexternalDatabase:\n  enabled: true\n  host: nextcloud-mariadb\n  password: pa$$w0rd\nmariadb:\n  enabled: true\n  auth:\n    database: nextcloud\n    username: nextcloud\n    password: pa$$w0rd\nredis:\n  enabled: true\n  architecture: standalone\n  auth:\n    enabled: true\n    password: pa$$w0rd\ncronjob:\n  enabled: true\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ helm repo add nextcloud https://nextcloud.github.io/helm/\n$ helm upgrade -i nextcloud -f nextcloud-values.yaml --create-namespace -n nextcloud nextcloud/nextcloud\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1680:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/gardener-create-cluster-1-0a3557ab9e7f5c7d66a58378eb7b9c3d.png"},4259:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/gardener-create-cluster-2-56f352ecc5585d6c7aba8ab2240e98d3.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>a});var r=s(7294);const i={},l=r.createContext(i);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);