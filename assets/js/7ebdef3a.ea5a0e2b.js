"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6631],{7517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(5893),r=t(1151);t(4866),t(5162);const o={title:"Configuration",sidebar_position:4,slug:"/b85c7808-d42e-474f-a9b6-0f87d1f59e25"},i=void 0,s={id:"Stack/SEKAI--Backend/Configuration",title:"Configuration",description:"SEKAI is a blockchain network that allows users to query its state via RPC (Remote Procedure Call) and GRPC (gRPC Remote Procedure Call) protocols, as well as propagate blocks through the P2P (Peer-to-Peer) protocol. It is also possible to monitor SEKAI through a dedicated Prometheus port.",source:"@site/tabs/Docs/Stack/SEKAI--Backend/Configuration.mdx",sourceDirName:"Stack/SEKAI--Backend",slug:"/b85c7808-d42e-474f-a9b6-0f87d1f59e25",permalink:"/docs.kira.network/b85c7808-d42e-474f-a9b6-0f87d1f59e25",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Configuration",sidebar_position:4,slug:"/b85c7808-d42e-474f-a9b6-0f87d1f59e25"},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/docs.kira.network/a026f2da-ef09-4092-af96-aad8db6baf66"},next:{title:"Command Line Interface",permalink:"/docs.kira.network/d98b0e99-34c0-4267-a51a-0ec9dab606b9"}},l={},c=[{value:"Repository",id:"fbd1c90fa73e4371a1acd39772b84100",level:3},{value:"Default ports",id:"0418932ac4a142c684e702ced8579f8d",level:3},{value:"Node configuration files and directory",id:"87c245337c464ea183434303aebfe46b",level:3},{value:"Client configuration",id:"3d228313019c4d5e86a4d08816eeaeca",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"SEKAI is a blockchain network that allows users to query its state via RPC (Remote Procedure Call) and GRPC (gRPC Remote Procedure Call) protocols, as well as propagate blocks through the P2P (Peer-to-Peer) protocol. It is also possible to monitor SEKAI through a dedicated Prometheus port."}),"\n",(0,a.jsx)(n.h3,{id:"fbd1c90fa73e4371a1acd39772b84100",children:"Repository"}),"\n",(0,a.jsxs)(n.p,{children:["The Github repository for SEKAI can be found ",(0,a.jsx)(n.a,{href:"https://github.com/kiracore/sekai",children:(0,a.jsx)(n.strong,{children:"here"})}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"0418932ac4a142c684e702ced8579f8d",children:"Default ports"}),"\n",(0,a.jsx)(n.p,{children:"SEKAI exposes a metadata endpoint to help communicate with the blockchain application via RPC. This endpoint provides information on the types of transactions that can be sent on-chain."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Transaction types metadata RPC endpoint:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"<IP>:26657/metadata"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Tendermint RPC native endpoints:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.tendermint.com/v0.34/rpc/",children:(0,a.jsx)(n.strong,{children:"Documentation Reference"})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In addition to the RPC and P2P ports, SEKAI also has a dedicated Prometheus port for monitoring purposes.\nThe specific port number for this port is not provided in the given information."}),"\n",(0,a.jsx)(n.h3,{id:"87c245337c464ea183434303aebfe46b",children:"Node configuration files and directory"}),"\n",(0,a.jsxs)(n.p,{children:["By default, config and data files are stored in the folder located at the\xa0",(0,a.jsx)(n.code,{children:"~/.sekaid"}),"\xa0directory which can be changed by using the\xa0",(0,a.jsx)(n.code,{children:"--home"}),"\xa0flag. It is possible to have multiple home directories that each represent a different blockchain."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:".# ~/.sekaid\n  \u251c\u2500\u2500 data/# Contains the databases used by the node.\n  \u2514\u2500\u2500 config/\n      \u251c\u2500\u2500 app.toml# Application-related configuration file.\n      \u251c\u2500\u2500 config.toml# Tendermint-related configuration file.\n\t    \u251c\u2500\u2500 client.toml# Client-related configuration file.\n      \u251c\u2500\u2500 genesis.json# The genesis file.\n      \u251c\u2500\u2500 node_key.json# Private key to use for node authentication in the p2p protocol.\n      \u2514\u2500\u2500 priv_validator_key.json# Private key to use as a validator in the consensus protocol.\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The Cosmos SDK automatically generates two configuration files inside\xa0",(0,a.jsx)(n.code,{children:"~/.sekaid/config"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"config.toml"}),": This file contains the configuration for the Tendermint consensus engine, including the node's validator address, the minimum gas prices, and the node's peers. In addition, the config.toml file also specifies the location of the data and log directories, as well as the p2p and rpc listen addresses. It may also contain configuration options for the Tendermint WebSocket (WS) server and the ABCI application."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"app.toml"}),": This file contains the configuration for the SEKAI blockchain application such as state pruning strategies, telemetry, gRPC and REST servers configuration, state sync..."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"3d228313019c4d5e86a4d08816eeaeca",children:"Client configuration"}),"\n",(0,a.jsxs)(n.p,{children:["We can view the default client config setting by using the ",(0,a.jsx)(n.code,{children:"sekaid config"})," command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'sekaid config\n{\n"chain-id": "",\n"keyring-backend": "os",\n"output": "text",\n"node": "tcp://localhost:26657",\n"broadcast-mode": "sync"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Changes to the default settings can be made according to users preferences. For example, the chain identifier can be changed from a blank name by using:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'sekaid config "chain-id" sekai_1\nsekaid config\n{\n"chain-id": "sekai_1",\n"keyring-backend": "os",\n"output": "text",\n"node": "tcp://localhost:26657",\n"broadcast-mode": "sync"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Other values can be changed in the same manner."}),"\n",(0,a.jsx)(n.p,{children:"Alternatively, modification can be made directly on in the client.toml."})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var a=t(6905);const r={tabItem:"tabItem_Ymn6"};var o=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(7294),r=t(6905),o=t(2466),i=t(6550),s=t(469),l=t(1980),c=t(7392),d=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=c??m;return f({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(k,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,v.jsx)(j,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(7294);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);