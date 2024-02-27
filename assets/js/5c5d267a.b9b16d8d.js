"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[5448],{7649:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var t=a(5893),s=a(1151),r=a(4866),i=a(5162);const c={title:"Evidence module",sidebar_position:2,slug:"/bd4cce67-2cee-4d9f-9b81-e5643d130438"},l=void 0,o={id:"Stack/SEKAI--Backend/Modules/Evidence/Evidence-module",title:"Evidence module",description:"Concept",source:"@site/tabs/docs/Stack/SEKAI--Backend/Modules/Evidence/Evidence-module.mdx",sourceDirName:"Stack/SEKAI--Backend/Modules/Evidence",slug:"/bd4cce67-2cee-4d9f-9b81-e5643d130438",permalink:"/docs.kira.network/bd4cce67-2cee-4d9f-9b81-e5643d130438",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Evidence module",sidebar_position:2,slug:"/bd4cce67-2cee-4d9f-9b81-e5643d130438"},sidebar:"defaultSidebar",previous:{title:"Evidence",permalink:"/docs.kira.network/6a318dbd-2d44-4f1f-9729-5e608286289f"},next:{title:"Keys & accounts",permalink:"/docs.kira.network/31613d97-abfb-4911-b17a-0c83cdba58a7"}},d={},u=[{value:"Concept",id:"9da6c82434ad47c5908a9dd18371ae39",level:3},{value:"Cli syntax &amp; examples",id:"f2eddfbd285d437cab18755acfd6fab9",level:2},{value:"Transactions",id:"723e137d9712400c842928f221446573",level:2},{value:"Queries",id:"fce8b27770f04b908c78f06bd198ef57",level:2},{value:"List all submitted evidence (paginated)",id:"3f5710a330774094b495f67a3c3ab6f4",level:4},{value:"Query specific evidence by its hash",id:"a4fd48a0733f4fce8bd47809d8a6dedc",level:4},{value:"Governance",id:"9a2dbce1f8ac4af589baf48fa108385f",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"9da6c82434ad47c5908a9dd18371ae39",children:"Concept"}),"\n",(0,t.jsx)(n.p,{children:"The Evidence module, extended from the Cosmos SDK's, enhances existing evidence handling that relies on the underlying consensus engine to automatically submit evidence upon discovery. It achieves this by implementing abstractions and interfaces that enable developers to define custom evidence messages and methods for penalizing misbehaving consensus nodes. Tendermint detects double-signing by consensus nodes and reports this to the Evidence module, which then manages the verification process and determines the appropriate penalty for the offending consensus nodes. Penalties may include slashing a portion of their stake and removing them from the active consensus node set."}),"\n",(0,t.jsxs)(n.p,{children:["In KIRA, the only misbehavior that is handled is double signing. In this case the consensus node is automatically jailed upon detection but not automatically slashed. Instead, the slashing process is managed by governance through the slashing module. ",(0,t.jsx)(n.a,{href:"/d6fee8b3-1948-493e-bbdd-796bcc996c2b",children:"Jailing & slashing"})," provides all the necessary information regarding how this process works."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// https://github.com/KiraCore/sekai/blob/master/x/evidence/keeper/infraction.go\n// (...)\n\nif !validator.IsJailed() {\n    k.slashingKeeper.Jail(ctx, consAddr)\n}\nk.slashingKeeper.JailUntil(ctx, consAddr, ctx.BlockTime())\nk.SetEvidence(ctx, evidence)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"f2eddfbd285d437cab18755acfd6fab9",children:"Cli syntax & examples"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,t.jsx)(n.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,t.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,t.jsx)(n.em,{children:"documentation for more details."})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$SIGNER"})})," ",(0,t.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,t.jsx)(n.em,{children:"and"})," ",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,t.jsx)(n.em,{children:"section"})]})}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(i.Z,{value:"transactions ",label:"Transactions ",children:[(0,t.jsx)(n.h2,{id:"723e137d9712400c842928f221446573",children:"Transactions"}),(0,t.jsx)(n.p,{children:"There is no transactions for this sub-module."})]}),(0,t.jsxs)(i.Z,{value:"queries",label:"Queries",children:[(0,t.jsx)(n.h2,{id:"fce8b27770f04b908c78f06bd198ef57",children:"Queries"}),(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"evidence"})}),(0,t.jsx)(n.th,{children:"List all submitted evidence in a paginated format."})]})})}),(0,t.jsx)(n.h4,{id:"3f5710a330774094b495f67a3c3ab6f4",children:"List all submitted evidence (paginated)"}),(0,t.jsxs)(n.p,{children:["This command lists all submitted evidence in a paginated format. Replace ",(0,t.jsx)(n.code,{children:"<page_number>"})," with the desired page number and ",(0,t.jsx)(n.code,{children:"<page_size>"})," with the number of items per page. Default values will be used if these are not provided."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid query evidence $FLAGS_QR --page=<page_number> --limit=<page_size> | jq\n"})}),(0,t.jsx)(n.h4,{id:"a4fd48a0733f4fce8bd47809d8a6dedc",children:"Query specific evidence by its hash"}),(0,t.jsx)(n.p,{children:"To query a specific piece of evidence by its hash, use the following command."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid query evidence $HASH $FLAGS_QR | jq\n"})})]}),(0,t.jsxs)(i.Z,{value:"governance",label:"Governance",children:[(0,t.jsx)(n.h2,{id:"9a2dbce1f8ac4af589baf48fa108385f",children:"Governance"}),(0,t.jsx)(n.p,{children:"There is no governance proposal for this sub-module."})]})]})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>i});a(7294);var t=a(6905);const s={tabItem:"tabItem_Ymn6"};var r=a(5893);function i(e){let{children:n,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,i),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>k});var t=a(7294),s=a(6905),r=a(2466),i=a(6550),c=a(469),l=a(1980),o=a(7392),d=a(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function f(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const s=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,u]=b({queryString:a,groupId:s}),[m,p]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Nk)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),v=(()=>{const e=o??m;return f({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,r]),tabValues:r}}var p=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(5893);function x(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),s=c[a].value;s!==t&&(o(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function k(e){const n=(0,p.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>i});var t=a(7294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);