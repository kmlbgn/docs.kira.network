"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8328],{1621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(5893),a=r(1151);r(4866),r(5162);const o={title:"Auth",sidebar_position:17,slug:"/cb04c86c-93bc-47bd-8a40-510e60bd7115"},s=void 0,u={id:"KIRA\u2019s-stack/SEKAI/Modules/Auth/index",title:"Auth",description:"cosmos.sdk/x/auth",source:"@site/docs/KIRA\u2019s-stack/SEKAI/Modules/Auth/index.mdx",sourceDirName:"KIRA\u2019s-stack/SEKAI/Modules/Auth",slug:"/cb04c86c-93bc-47bd-8a40-510e60bd7115",permalink:"/docs.kira.network/docs/cb04c86c-93bc-47bd-8a40-510e60bd7115",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"Auth",sidebar_position:17,slug:"/cb04c86c-93bc-47bd-8a40-510e60bd7115"},sidebar:"defaultSidebar",previous:{title:"Bank",permalink:"/docs.kira.network/docs/04e8b755-d259-40f9-b66c-ddf5223c66fa"},next:{title:"Transaction validation & processing",permalink:"/docs.kira.network/docs/f7f02009-1f78-426b-8915-f503cdda9671"}},l={},c=[];function i(e){const t={code:"code",p:"p",...(0,a.a)(),...e.components};return(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"cosmos.sdk/x/auth"})})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var n=r(6905);const a={tabItem:"tabItem_Ymn6"};var o=r(5893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6905),o=r(2466),s=r(6550),u=r(469),l=r(1980),c=r(7392),i=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=b(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,d]=p({queryString:r,groupId:a}),[h,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=c??h;return f({value:e,tabValues:o})?e:null})();(0,u.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=r(5893);function g(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),i=e=>{const t=e.currentTarget,r=l.indexOf(t),a=u[r].value;a!==n&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:u.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:i,...o,className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=h(e);return(0,k.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,k.jsx)(g,{...e,...t}),(0,k.jsx)(x,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,k.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>s});var n=r(7294);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);