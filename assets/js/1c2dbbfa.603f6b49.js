"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6230],{1384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=a(5893),r=a(1151);a(4866),a(5162);const o={title:"MIRO",sidebar_position:3,slug:"/b5d02b0a-e94b-4253-baf2-6f1a8c0040c9"},s="MIRO {#72526372563b49a6a4f7341623bac78f}",l={id:"KIRA\u2019s-stack/MIRO/index",title:"MIRO",description:"72526372563b49a6a4f7341623bac78f}",source:"@site/docs/KIRA\u2019s-stack/MIRO/index.mdx",sourceDirName:"KIRA\u2019s-stack/MIRO",slug:"/b5d02b0a-e94b-4253-baf2-6f1a8c0040c9",permalink:"/docs.kira.network/docs/b5d02b0a-e94b-4253-baf2-6f1a8c0040c9",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"MIRO",sidebar_position:3,slug:"/b5d02b0a-e94b-4253-baf2-6f1a8c0040c9"},sidebar:"defaultSidebar",previous:{title:"Command Line Interface",permalink:"/docs.kira.network/docs/39242b54-c86a-4406-82f9-49cad4ed7c5a"},next:{title:"Installation",permalink:"/docs.kira.network/docs/f0dd6c48-d9bd-44d5-809c-b2f6069b1051"}},u={},i=[];function c(e){const t={a:"a",h1:"h1",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"72526372563b49a6a4f7341623bac78f",children:"MIRO"}),"\n",(0,n.jsx)(t.p,{children:"MIRO \u770b (\u898b\u308b) - is a KIRA network frontend application and web wallet that allows users to interact with the KIRA blockchain through the decentralized API, INTERX. It provides an easy-to-use interface for managing KIRA accounts and assets, making it accessible to a wide range of users. MIRO web application is static and fully self-contained. This means that once the page is loaded into your browser all actions you take occur locally on your computer. There is no need for any hosting servers or access to the internet beyond the IP of any local or public INTERX node."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/KiraCore/miro",children:(0,n.jsx)(t.strong,{children:"MIRO | Source code"})})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var n=a(6905);const r={tabItem:"tabItem_Ymn6"};var o=a(5893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7294),r=a(6905),o=a(2466),s=a(6550),l=a(469),u=a(1980),i=a(7392),c=a(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=b(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,d]=h({queryString:a,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),v=(()=>{const e=i??p;return f({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(5893);function I(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(i(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(I,{...e,...t}),(0,g.jsx)(k,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>s});var n=a(7294);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);