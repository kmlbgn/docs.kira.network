"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[9151],{3991:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(5893),r=t(1151);t(4866),t(5162);const s={title:"Installation",sidebar_position:4,slug:"/cf419aea-20dc-4421-951b-2579c3026e6b"},l="Dependencies {#907b3fae8582494eaf2438c80ad63660}",o={id:"KIRA\u2019s-stack/INTERX/Installation",title:"Installation",description:"907b3fae8582494eaf2438c80ad63660}",source:"@site/docs/KIRA\u2019s-stack/INTERX/Installation.mdx",sourceDirName:"KIRA\u2019s-stack/INTERX",slug:"/cf419aea-20dc-4421-951b-2579c3026e6b",permalink:"/kira/docs/cf419aea-20dc-4421-951b-2579c3026e6b",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Installation",sidebar_position:4,slug:"/cf419aea-20dc-4421-951b-2579c3026e6b"},sidebar:"defaultSidebar",previous:{title:"Endpoints",permalink:"/kira/docs/27ca73f9-ea33-4ca3-994a-cba651a2c896"},next:{title:"Command Line Interface",permalink:"/kira/docs/39242b54-c86a-4406-82f9-49cad4ed7c5a"}},i={},c=[{value:"Deb package manager",id:"8af945d2feb64dc49258460f34799b47",level:3},{value:"Docker",id:"d826dd6a316240048c0401d557958ef5",level:3},{value:"Others",id:"e725f60cb46e47149abeb9fcf9ad5211",level:3}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"907b3fae8582494eaf2438c80ad63660",children:"Dependencies"}),"\n",(0,n.jsx)(a.h3,{id:"8af945d2feb64dc49258460f34799b47",children:"Deb package manager"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"echo 'deb [trusted=yes] https://repo.goreleaser.com/apt/ /' | tee /etc/apt/sources.list.d/goreleaser.list && apt-get update -y && \\\napt install nfpm\n"})}),"\n",(0,n.jsx)(a.h3,{id:"d826dd6a316240048c0401d557958ef5",children:"Docker"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'apt-get update -y && \\\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && \\\nadd-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" && \\\napt-get update -y && apt-get install docker-ce docker-ce-cli containerd.io -y && \\\ndocker version\n'})}),"\n",(0,n.jsx)(a.h3,{id:"e725f60cb46e47149abeb9fcf9ad5211",children:"Others"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"apt-get install -y curl && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && apt-get update -y && \\\napt-get install -y --allow-unauthenticated --allow-downgrades --allow-remove-essential --allow-change-held-packages \\\nfile build-essential hashdeep make tar unzip zip p7zip-full curl iputils-ping nano jq python python3 python3-pip \\\nbash lsof bc dnsutils psmisc netcat coreutils binutils\n"})}),"\n",(0,n.jsx)(a.h1,{id:"ddebded562ee4a1e95e8aa1bb6dcbd22",children:"INTERX installation"}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["INTERX Repo is accessible ",(0,n.jsx)(a.a,{href:"https://github.com/KiraCore/interx",children:"here"}),"."]})}),"\n",(0,n.jsx)(a.p,{children:"Assume root permissions"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"sudo -s\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Set desired INTERX release version and binaries repo as env variables within ",(0,n.jsx)(a.code,{children:"/etc/profile"}),", with ",(0,n.jsx)(a.a,{href:"/c9443dd6-5f97-45fe-a3f1-48caa3bed0dc",children:"Bash-utils"})," or manually. Sourcing ",(0,n.jsx)(a.code,{children:"/etc/profile"})," is necessary."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'setGlobEnv INTERX_VERSION "v0.4.34" && \\\nsetGlobEnv INTERX_REPO "$HOME/interx" && \\\nloadGlobEnvs\n'})}),"\n",(0,n.jsx)(a.p,{children:"Clone repository and install"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'rm -fr $INTERX_REPO && rm -fr $GOBIN/interx && mkdir $INTERX_REPO && cd $INTERX_REPO && \\\ngit clone https://github.com/KiraCore/interx.git -b $INTERX_VERSION $INTERX_REPO && \\\nchmod -R 777 ./scripts && make install && \\\necho "SUCCESS installed interx $(interx version)" || echo "FAILED"\n'})})]})}function d(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5162:(e,a,t)=>{t.d(a,{Z:()=>l});t(7294);var n=t(6905);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function l(e){let{children:a,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:t,children:a})}},4866:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(7294),r=t(6905),s=t(2466),l=t(6550),o=t(469),i=t(1980),c=t(7392),u=t(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const r=(0,l.k6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[c,d]=b({queryString:t,groupId:r}),[f,m]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,u.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function x(e){let{className:a,block:t,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const a=e.currentTarget,t=i.indexOf(a),r=o[t].value;r!==n&&(c(a),l(r))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;a=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=i[t]??i[i.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function k(e){let{lazy:a,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function I(e){const a=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...a}),(0,v.jsx)(k,{...e,...a})]})}function y(e){const a=(0,m.Z)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(a))}},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>l});var n=t(7294);const r={},s=n.createContext(r);function l(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);