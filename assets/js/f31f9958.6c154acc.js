"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6002],{5119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(5893),r=n(1151);n(4866),n(5162);const s={title:"Token Basketing",sidebar_position:10,slug:"/6c6d144f-f315-43f7-8fe7-289d98890a69"},o=void 0,i={id:"Stack/SEKAI--Backend/Modules/Token-Basketing/index",title:"Token Basketing",description:"Through the functionality of this module users can bundle same-denomination tokens, such as KIRA\u2019s staking derivatives, into a single derivative token, simplifying trades and exchanges within the ecosystem. With the module's fixed weight system, the list of tokens in a basket can change over time, serving not as an exchange but as a risk management tool.",source:"@site/tabs/Docs/Stack/SEKAI--Backend/Modules/Token-Basketing/index.mdx",sourceDirName:"Stack/SEKAI--Backend/Modules/Token-Basketing",slug:"/6c6d144f-f315-43f7-8fe7-289d98890a69",permalink:"/docs.kira.network/6c6d144f-f315-43f7-8fe7-289d98890a69",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Token Basketing",sidebar_position:10,slug:"/6c6d144f-f315-43f7-8fe7-289d98890a69"},sidebar:"defaultSidebar",previous:{title:"Governance-regulated Foreign Token Transfers",permalink:"/docs.kira.network/34367cb0-ee71-418f-9dc5-bcc8823b71e5"},next:{title:"Token Basketing Module",permalink:"/docs.kira.network/3aa15c97-02e9-4d62-a84a-cc99b8a90f86"}},u={},l=[];function c(e){const t={a:"a",code:"code",hr:"hr",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Through the functionality of this module users can bundle same-denomination tokens, such as KIRA\u2019s staking derivatives, into a single derivative token, simplifying trades and exchanges within the ecosystem. With the module's fixed weight system, the list of tokens in a basket can change over time, serving not as an exchange but as a risk management tool."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/KiraCore/sekai/tree/master/x/basket",children:(0,a.jsx)(t.code,{children:"x/basket"})})}),"\n",(0,a.jsx)(t.hr,{})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6905);const r={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7294),r=n(6905),s=n(2466),o=n(6550),i=n(469),u=n(1980),l=n(7392),c=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=f(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,d]=m({queryString:n,groupId:r}),[b,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),k=(()=>{const e=l??b;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==a&&(l(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",k.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function w(e){const t=(0,p.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(7294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);