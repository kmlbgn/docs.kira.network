"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8399],{4443:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(5893),n=a(1151);a(4866),a(5162);const o={title:"Layer 2",sidebar_position:3,slug:"/8aad2626-40b5-42d6-9504-0c1287216a73"},s=void 0,i={id:"KIRA\u2019s-stack/SEKAI/Modules/Layer-2/index",title:"Layer 2",description:"KIRA's Layer 2, termed Pessimistic Rolldowns, optimizes computational efficiency and transaction bundling. Our unique Virtual Finality Gadget expedites the verification of computation results, fostering a versatile platform that caters to both 'code is law' and judgment-based applications. This is more than a platform\u2014it's a launchpad for developers to define their own rules and easily iterate on diverse applications.",source:"@site/docs/KIRA\u2019s-stack/SEKAI/Modules/Layer-2/index.mdx",sourceDirName:"KIRA\u2019s-stack/SEKAI/Modules/Layer-2",slug:"/8aad2626-40b5-42d6-9504-0c1287216a73",permalink:"/kira/docs/8aad2626-40b5-42d6-9504-0c1287216a73",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Layer 2",sidebar_position:3,slug:"/8aad2626-40b5-42d6-9504-0c1287216a73"},sidebar:"defaultSidebar",previous:{title:"Poor Network Conditions",permalink:"/kira/docs/65e3e6fe-040a-4716-b13b-9e27def6ff9d"},next:{title:"Distributor",permalink:"/kira/docs/ba4d5a3e-3caa-431e-940e-87187fbc3bae"}},l={},u=[];function c(e){const t={a:"a",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"KIRA's Layer 2, termed Pessimistic Rolldowns, optimizes computational efficiency and transaction bundling. Our unique Virtual Finality Gadget expedites the verification of computation results, fostering a versatile platform that caters to both 'code is law' and judgment-based applications. This is more than a platform\u2014it's a launchpad for developers to define their own rules and easily iterate on diverse applications."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/KiraCore/sekai/tree/master/x/layer2",children:(0,r.jsx)(t.code,{children:"x/layer2"})})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var r=a(6905);const n={tabItem:"tabItem_Ymn6"};var o=a(5893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,s),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7294),n=a(6905),o=a(2466),s=a(6550),i=a(469),l=a(1980),u=a(7392),c=a(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=f(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=b({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),v=(()=>{const e=u??m;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(5893);function y(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),n=i[a].value;n!==r&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function w(e){const t=(0,h.Z)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var r=a(7294);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);