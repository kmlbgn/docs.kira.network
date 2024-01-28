"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4244],{1496:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var r=s(5893),i=s(1151),t=s(4866),o=s(5162);const d={title:"Universal Basic Income",sidebar_position:2,slug:"/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e"},c=void 0,a={id:"KIRA\u2019s-stack/SEKAI/Modules/Universal-Basic-Income/Universal-Basic-Income",title:"Universal Basic Income",description:"Concept",source:"@site/docs/KIRA\u2019s-stack/SEKAI/Modules/Universal-Basic-Income/Universal-Basic-Income.mdx",sourceDirName:"KIRA\u2019s-stack/SEKAI/Modules/Universal-Basic-Income",slug:"/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e",permalink:"/docs.kira.network/docs/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Universal Basic Income",sidebar_position:2,slug:"/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e"},sidebar:"defaultSidebar",previous:{title:"Staking Collectives",permalink:"/docs.kira.network/docs/3997e5c8-f744-4e83-9e22-f6845cc6c3ee"},next:{title:"Universal Basic Income",permalink:"/docs.kira.network/docs/865cb42c-7ed4-4607-a446-c7ef3882056e"}},l={},h=[{value:"Concept",id:"7ffc9017e29c48478adefa4f1f84dd92",level:2},{value:"Dynamic mode",id:"2737f72a27dc4d3cab060bdbe4055e83",level:3},{value:"Parameters",id:"f028bb65c4b0422bb3b62ccd2e0a52c5",level:2},{value:"List All Existing UBI Records",id:"list-all-existing-ubi-records",level:3},{value:"Query a Specific UBI Record",id:"query-a-specific-ubi-record",level:3},{value:"Upsert UBI Proposal",id:"upsert-ubi-proposal",level:3},{value:"Remove UBI Proposal",id:"remove-ubi-proposal",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"7ffc9017e29c48478adefa4f1f84dd92",children:"Concept"}),"\n",(0,r.jsxs)(n.p,{children:["The Universal Basic Income (UBI) module in the KIRA network is designed to incentivize non-sybil network participants, such as validators and governance members, through the distribution of a fixed amount of the native KEX token on a regular basis. This helps to ensure the long-term maintenance of network operations and enables these actors to perform their roles effectively. The UBI module uses ",(0,r.jsx)(n.a,{href:"/812fdf31-d225-4daf-a4cd-4501cbc00d95",children:"Spending Pools"})," to distribute the funds to eligible beneficiaries, who can then claim their allotted tokens. The supply of KEX tokens is inflated by a fixed amount at regular intervals, and these tokens are deposited into the designated spending pool(s) for distribution."]}),"\n",(0,r.jsxs)(n.p,{children:["To prevent potential abuse or faults, a ",(0,r.jsx)(n.code,{children:"ubi-hard-cap"})," is set in the ",(0,r.jsx)(n.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network properties"}),", limiting the maximum amount of additional KEX that can be created per year (",(0,r.jsx)(n.code,{children:"6000000"})," KEX by default). Governance members are not allowed to create or modify UBI records in a way that would exceed this hard cap."]}),"\n",(0,r.jsx)(n.h3,{id:"2737f72a27dc4d3cab060bdbe4055e83",children:"Dynamic mode"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to the spending pool, the UBI module provides two modes: dynamic and static, which use the dynamic field. In dynamic mode, the total amount distributed per period decreases by the amount left in the pool. In other words, if some users don't claim their UBI during a particular period, the unclaimed tokens are lost and redistributed in the next period. This is done to limit token inflation and ensure that users are actively claiming their tokens.  If the ",(0,r.jsx)(n.code,{children:"dynamic"})," parameter is set to ",(0,r.jsx)(n.code,{children:"false"}),", the spending pool operates in static mode and distributes a fixed amount of tokens every time period. This way, users can be sure of the amount of tokens they will receive during each period, provided they still respect the target spending pool\u2019s ",(0,r.jsx)(n.code,{children:"claim-expiry"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"f028bb65c4b0422bb3b62ccd2e0a52c5",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"NAME"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"TYPE"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"EXAMPLE"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"KEX-UBI"})}),(0,r.jsx)(n.td,{children:"The name of the UBI contract."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"distribution_start"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1643577600"})}),(0,r.jsx)(n.td,{children:"Unix timestamp of the start of the distribution period."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"distribution_end"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1675113600"})}),(0,r.jsx)(n.td,{children:"Unix timestamp of the end of the distribution period."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"distribution_last"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1651401600"})}),(0,r.jsx)(n.td,{children:"Unix timestamp of the last distribution."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pool"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"community"'})}),(0,r.jsx)(n.td,{children:"The spending pool name where the exact amount of KEX should be deposited."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"amount"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1000"})}),(0,r.jsxs)(n.td,{children:["The amount of KEX tokens to be minted and distributed every period into ",(0,r.jsx)(n.code,{children:"pool"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"period"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"86400"})}),(0,r.jsx)(n.td,{children:"Time in seconds that must elapse since distribution_last for the funds to be distributed automatically into the pool."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"dynamic"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bool"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsxs)(n.td,{children:["A boolean field that defines if UBI is dynamic ",(0,r.jsx)(n.code,{children:"true"})," or static ",(0,r.jsx)(n.code,{children:"false"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h1,{id:"b3dc078c85c4427c95c52958d0ca5ab6",children:"CLI syntax & examples"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,r.jsx)(n.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,r.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,r.jsx)(n.em,{children:"documentation for more details."})," ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"$SIGNER"})})," ",(0,r.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,r.jsx)(n.em,{children:"and"})," ",(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,r.jsx)(n.em,{children:"section"})]})}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(o.Z,{value:"transactions",label:"Transactions",children:(0,r.jsx)(n.p,{children:"There is no transactions other than the governance proposals for this sub-module."})}),(0,r.jsxs)(o.Z,{value:"queries",label:"Queries",children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"ubi-records"})}),(0,r.jsx)(n.th,{children:"List all existing UBI records."})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ubi-record-by-name"})}),(0,r.jsx)(n.td,{children:"Query a specific UBI record by its name."})]})})]}),(0,r.jsx)(n.h3,{id:"list-all-existing-ubi-records",children:"List All Existing UBI Records"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid query ubi ubi-records $FLAGS_QR | jq\n"})}),(0,r.jsx)(n.h3,{id:"query-a-specific-ubi-record",children:"Query a Specific UBI Record"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Args"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$NAME"}),": The name of the UBI record."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid query ubi ubi-record-by-name $NAME $FLAGS_QR | jq\n"})})]}),(0,r.jsxs)(o.Z,{value:"governance",label:"Governance",children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"proposal-upsert-ubi"})}),(0,r.jsx)(n.th,{children:"Create a proposal to insert or update a Universal Basic Income (UBI) distribution."})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"proposal-remove-ubi"})}),(0,r.jsx)(n.td,{children:"Create a proposal to remove a Universal Basic Income (UBI) distribution."})]})})]}),(0,r.jsx)(n.h3,{id:"upsert-ubi-proposal",children:"Upsert UBI Proposal"}),(0,r.jsxs)(n.p,{children:["The CLI command, ",(0,r.jsx)(n.code,{children:"proposal-upsert-ubi"}),", creates a proposal to upsert (insert or update) a Universal Basic Income (UBI) distribution."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$TITLE"}),": The title of a proposal."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal, which can be a URL, text, etc."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$NAME"}),": Name of the UBI record (e.g., ",(0,r.jsx)(n.code,{children:"ValidatorPerMinuteIncome"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$POOLNAME"}),": Name of the associated spending pool registry for depositing ",(0,r.jsx)(n.code,{children:"$AMOUNT"})," of KEX (e.g., ",(0,r.jsx)(n.code,{children:"ValidatorBasicRewardsPool"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$DISTRIBUTIONSTART"}),": The exact starting time of the UBI, in Unix timestamps."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$DISTRIBUTIONEND"}),": The exact ending time of the UBI, in Unix timestamps."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$PERIOD"}),": Period in seconds for the KEX supply inflation by ",(0,r.jsx)(n.code,{children:"$AMOUNT"})," and deposit in the UBI pool."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$AMOUNT"}),": The amount of KEX tokens to be minted and distributed per ",(0,r.jsx)(n.code,{children:"$PERIOD"})," into the pool."]}),"\n"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sekaid tx customgov proposal-upsert-ubi \\\n--from=$SIGNER $FLAGS_TX \\\n--name=$NAME \\\n--distribution-start=$DISTRIBUTION_START \\\n--distribution-end=$DISTRIBUTION_END \\\n--amount=$AMOUNT \\\n--period=$PERIOD \\\n--pool-name=$POOL_NAME \\\n--title=$TITLE --description=$DESCRIPTION\n"})}),(0,r.jsx)(n.h3,{id:"remove-ubi-proposal",children:"Remove UBI Proposal"}),(0,r.jsxs)(n.p,{children:["The CLI command, ",(0,r.jsx)(n.code,{children:"proposal-remove-ubi"}),", creates a proposal to remove a Universal Basic Income (UBI) distribution."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$NAME"}),": The name of the UBI."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$TITLE"}),": The title of the proposal."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal."]}),"\n"]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sekaid tx customgov proposal-remove-ubi \\\n--from=$SIGNER $FLAGS_TX \\\n--name=$NAME \\\n--title=$TITLE --description=$DESCRIPTION\n"})})]})]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>o});s(7294);var r=s(6905);const i={tabItem:"tabItem_Ymn6"};var t=s(5893);function o(e){let{children:n,hidden:s,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>T});var r=s(7294),i=s(6905),t=s(2466),o=s(6550),d=s(469),c=s(1980),a=s(7392),l=s(12);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const i=(0,o.k6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._X)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,t=u(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[a,h]=p({queryString:s,groupId:i}),[j,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,l.Nk)(s);return[i,(0,r.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:i}),b=(()=>{const e=a??j;return x({value:e,tabValues:t})?e:null})();(0,d.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,t]),tabValues:t}}var m=s(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(5893);function v(e){let{className:n,block:s,selectedValue:r,selectValue:o,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,t.o5)(),l=e=>{const n=e.currentTarget,s=c.indexOf(n),i=d[s].value;i!==r&&(a(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:d.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:l,...t,className:(0,i.Z)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function I(e){let{lazy:n,children:s,selectedValue:i}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function g(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(I,{...e,...n})]})}function T(e){const n=(0,m.Z)();return(0,f.jsx)(g,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var r=s(7294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);