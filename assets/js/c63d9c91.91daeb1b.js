"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3698],{3086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(5893),i=a(1151);a(4866),a(5162);const s={title:"Unified Liquid Staking",sidebar_position:4,slug:"/492e443f-5703-4d95-8508-a101405efde3"},r=void 0,o={id:"KIRA\u2019s-Economics/Unified-Liquid-Staking",title:"Unified Liquid Staking",description:"KIRA allows validators to stake any combination of multiple whitelisted assets through its MBPoS (Multiple Bonded Proof of Stake) mechanism. Depositors are automatically issued redeemable receipt tokens representing their staked assets, making them LSDs by default.",source:"@site/tabs/Learn/KIRA\u2019s-Economics/Unified-Liquid-Staking.mdx",sourceDirName:"KIRA\u2019s-Economics",slug:"/492e443f-5703-4d95-8508-a101405efde3",permalink:"/docs.kira.network/learn/492e443f-5703-4d95-8508-a101405efde3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Unified Liquid Staking",sidebar_position:4,slug:"/492e443f-5703-4d95-8508-a101405efde3"},sidebar:"defaultSidebar",previous:{title:"Initial Liquidity Offering",permalink:"/docs.kira.network/learn/a6a660a6-3e5c-4a53-9ec3-14aa07f00351"},next:{title:"Glossary",permalink:"/docs.kira.network/learn/22c36797-10c8-40e4-9457-d8f1b6b4563b"}},l={},u=[];function c(e){const t={img:"img",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"KIRA allows validators to stake any combination of multiple whitelisted assets through its MBPoS (Multiple Bonded Proof of Stake) mechanism. Depositors are automatically issued redeemable receipt tokens representing their staked assets, making them LSDs by default."}),"\n",(0,n.jsx)(t.p,{children:"Liquid staking has multiple pain points in the current DeFi landscape. Due to competition within the LSD sector, LSD liquidity is fragmented across DeFi. Furthermore, each LSD must be integrated individually for use within DeFi protocols, which introduces coordination overhead, additional attack vectors, and value leaks."}),"\n",(0,n.jsx)(t.p,{children:"KIRA's Token Basketing module solves for the friction associated with liquid staking by aggregating users' receipt tokens by their liquidity denominations, into cohesive fungible assets."}),"\n",(0,n.jsx)(t.p,{children:"The Token Basketing module's AMM is self-rebalancing and offers swaps without price impact."}),"\n",(0,n.jsx)(t.p,{children:"A crucial aspect of the swap mechanism is that the sum of products of individual token amounts and their weights remain constant before and after the swap. This is expressed mathematically as:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(3377).Z+"",width:"794",height:"127"})}),"\n",(0,n.jsx)(t.p,{children:"This means that the cumulative value of the tokens in the basket remain unchanged (or slightly larger due to rounding errors). Any additional tokens due to the applied slippage is accounted for in the surplus, while the swap fee is be paid to the network as a fee reward. This ensures that the value of the basket remains constant, providing stability to the system."}),"\n",(0,n.jsx)(t.p,{children:"Assets within the pool are weighted according to their underlying staked value - these predetermined weights dictate the fixed price ratios at which incoming swaps are filled."}),"\n",(0,n.jsx)(t.p,{children:"Governance must ensure that the weights of each token in the basket are properly configured to maintain the value of the issued basket tokens. Should the governance decide to re-configure one or many of the weight properties of the basket (for example due to peg changes), it is important to ensure that the sum of the products of the weight and amount of each token in the basket must be greater than or equal to the amount of issued basket tokens B<id> otherwise there will not be enough tokens in the basket to redeem. For example, if the basket B<id> includes tokens A, B, and C, the governance must ensure that"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(7053).Z+"",width:"1019",height:"32"})}),"\n",(0,n.jsx)(t.p,{children:"If the weights are not correctly configured, the governance proposal to update the basket weights will fail."}),"\n",(0,n.jsx)(t.p,{children:"To protect against depegging scenarios, each token has a configurable maximum limit within its basket. In the event that an incoming swap would disbalance the composition of a particular basket, dynamic fees are adjusted to return it to equilibrium, incentivizing swaps rebalancing the basket over swaps that do not."}),"\n",(0,n.jsx)(t.p,{children:"As token baskets are built into the base layer, this same weighting system adjusts automatically for changes in underlying staked value. Staking rewards and slashing penalties are automatically accounted for, without dependence on any third-party oracle."}),"\n",(0,n.jsx)(t.p,{children:"Should intervention be required from onchain governance, multiple failsafe mechanisms exist. Validators can vote to include or exclude tokens from baskets. In the event of an ongoing emergency, swaps can be halted by governance until the situation is resolved. Additionally, swap fees accumulate toward a surplus which functions like an insurance fund controlled by chain governance. In the unlikely event that an asset does become depegged within its basket, governance can mobilize these surplus funds toward the asset\u2019s peg restoration."})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>r});a(7294);var n=a(6905);const i={tabItem:"tabItem_Ymn6"};var s=a(5893);function r(e){let{children:t,hidden:a,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,r),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7294),i=a(6905),s=a(2466),r=a(6550),o=a(469),l=a(1980),u=a(7392),c=a(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const i=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,s=h(e),[r,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:a,groupId:i}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Nk)(a);return[i,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:i}),b=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=a(5893);function v(e){let{className:t,block:a,selectedValue:n,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),i=o[a].value;i!==n&&(u(t),r(i))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,i.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:i}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=m(e);return(0,k.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,k.jsx)(v,{...e,...t}),(0,k.jsx)(w,{...e,...t})]})}function x(e){const t=(0,g.Z)();return(0,k.jsx)(y,{...e,children:d(e.children)},String(t))}},7053:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1122915707-5d5933932e7843c11e61078f5eca0bcf.png"},3377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/265237334-6aa20cf34a4508ce6283c95952055ad4.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(7294);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);