"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[7757],{5234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=t(5893),a=t(1151),i=t(4866),r=t(5162);const o={title:"Evidence module",sidebar_position:2,slug:"/bd4cce67-2cee-4d9f-9b81-e5643d130438"},l=void 0,c={id:"KIRA\u2019s-stack/SEKAI/Modules/Evidence/Evidence-module",title:"Evidence module",description:"Concept",source:"@site/docs/KIRA\u2019s-stack/SEKAI/Modules/Evidence/Evidence-module.mdx",sourceDirName:"KIRA\u2019s-stack/SEKAI/Modules/Evidence",slug:"/bd4cce67-2cee-4d9f-9b81-e5643d130438",permalink:"/kira/docs/bd4cce67-2cee-4d9f-9b81-e5643d130438",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Evidence module",sidebar_position:2,slug:"/bd4cce67-2cee-4d9f-9b81-e5643d130438"},sidebar:"defaultSidebar",previous:{title:"Evidence",permalink:"/kira/docs/6a318dbd-2d44-4f1f-9729-5e608286289f"},next:{title:"Keys & accounts",permalink:"/kira/docs/31613d97-abfb-4911-b17a-0c83cdba58a7"}},d={},u=[{value:"Concept",id:"9da6c82434ad47c5908a9dd18371ae39",level:2},{value:"List All Submitted Evidence (Paginated)",id:"list-all-submitted-evidence-paginated",level:3},{value:"Query Specific Evidence by Its Hash",id:"query-specific-evidence-by-its-hash",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"9da6c82434ad47c5908a9dd18371ae39",children:"Concept"}),"\n",(0,s.jsx)(n.p,{children:"The Evidence module, extended from the Cosmos SDK's, enhances existing evidence handling that relies on the underlying consensus engine to automatically submit evidence upon discovery. It achieves this by implementing abstractions and interfaces that enable developers to define custom evidence messages and methods for penalizing misbehaving consensus nodes. Tendermint detects double-signing by consensus nodes and reports this to the Evidence module, which then manages the verification process and determines the appropriate penalty for the offending consensus nodes. Penalties may include slashing a portion of their stake and removing them from the active consensus node set."}),"\n",(0,s.jsxs)(n.p,{children:["In KIRA, the only misbehavior that is handled is double signing. In this case the consensus node is automatically jailed upon detection but not automatically slashed. Instead, the slashing process is managed by governance through the slashing module. ",(0,s.jsx)(n.a,{href:"/d6fee8b3-1948-493e-bbdd-796bcc996c2b",children:"Jailing & slashing"})," provides all the necessary information regarding how this process works."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// https://github.com/KiraCore/sekai/blob/master/x/evidence/keeper/infraction.go\n// (...)\n\nif !validator.IsJailed() {\n    k.slashingKeeper.Jail(ctx, consAddr)\n}\nk.slashingKeeper.JailUntil(ctx, consAddr, ctx.BlockTime())\nk.SetEvidence(ctx, evidence)\n"})}),"\n",(0,s.jsx)(n.h1,{id:"f2eddfbd285d437cab18755acfd6fab9",children:"CLI syntax & examples"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,s.jsx)(n.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,s.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,s.jsx)(n.em,{children:"documentation for more details."})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"$SIGNER"})})," ",(0,s.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,s.jsx)(n.em,{children:"and"})," ",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,s.jsx)(n.em,{children:"section"})]})}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(r.Z,{value:"transactions ",label:"Transactions ",children:(0,s.jsx)(n.p,{children:"There is no transactions for this sub-module."})}),(0,s.jsxs)(r.Z,{value:"queries",label:"Queries",children:[(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.code,{children:"evidence"})}),(0,s.jsx)(n.th,{children:"List all submitted evidence in a paginated format."})]})})}),(0,s.jsx)(n.h3,{id:"list-all-submitted-evidence-paginated",children:"List All Submitted Evidence (Paginated)"}),(0,s.jsxs)(n.p,{children:["This command lists all submitted evidence in a paginated format. Replace ",(0,s.jsx)(n.code,{children:"<page_number>"})," with the desired page number and ",(0,s.jsx)(n.code,{children:"<page_size>"})," with the number of items per page. Default values will be used if these are not provided."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sekaid query evidence $FLAGS_QR --page=<page_number> --limit=<page_size> | jq\n"})}),(0,s.jsx)(n.h3,{id:"query-specific-evidence-by-its-hash",children:"Query Specific Evidence by Its Hash"}),(0,s.jsx)(n.p,{children:"To query a specific piece of evidence by its hash, use the following command."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sekaid query evidence $HASH $FLAGS_QR | jq\n"})})]}),(0,s.jsx)(r.Z,{value:"governance",label:"Governance",children:(0,s.jsx)(n.p,{children:"There is no governance proposal for this sub-module."})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var s=t(6905);const a={tabItem:"tabItem_Ymn6"};var i=t(5893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,r),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var s=t(7294),a=t(6905),i=t(2466),r=t(6550),o=t(469),l=t(1980),c=t(7392),d=t(12);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,u]=p({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Nk)(t);return[a,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),v=(()=>{const e=c??b;return m({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function x(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==s&&(c(n),r(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);