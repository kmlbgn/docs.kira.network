"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[5573],{1253:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var t=n(5893),r=n(1151),i=n(4866),o=n(5162);const a={title:"Poor Network Conditions",sidebar_position:9,slug:"/65e3e6fe-040a-4716-b13b-9e27def6ff9d"},d=void 0,l={id:"Stack/SEKAI--Backend/Modules/Governance/Poor-Network-Conditions",title:"Poor Network Conditions",description:"Concept",source:"@site/tabs/Docs/Stack/SEKAI--Backend/Modules/Governance/Poor-Network-Conditions.mdx",sourceDirName:"Stack/SEKAI--Backend/Modules/Governance",slug:"/65e3e6fe-040a-4716-b13b-9e27def6ff9d",permalink:"/docs.kira.network/docs/65e3e6fe-040a-4716-b13b-9e27def6ff9d",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Poor Network Conditions",sidebar_position:9,slug:"/65e3e6fe-040a-4716-b13b-9e27def6ff9d"},sidebar:"defaultSidebar",previous:{title:"Data Registry",permalink:"/docs.kira.network/docs/1a3a9dbd-3c24-454b-b353-ee6a1c2c7a5c"},next:{title:"Layer 2",permalink:"/docs.kira.network/docs/8aad2626-40b5-42d6-9504-0c1287216a73"}},c={},h=[{value:"Concept",id:"e1a58e9de5854012944a7cf97ad0fab4",level:2},{value:"Ensuring Network &amp; Users Safety",id:"b3ef892b6bbc41808a8d360e4608dfda",level:3},{value:"Restricted Transaction Types",id:"95043ba1a6d445d2aeba125aad215bba",level:3},{value:"Parameters",id:"f76721f5b3a845d483bd30cafdb0a488",level:2},{value:"Cli Syntax &amp; Examples",id:"55563826bad845afa3dfea091debbfb2",level:2},{value:"Transactions",id:"8c33550d55ec4863abaa5a6b2030a061",level:2},{value:"Queries",id:"81e1f96b40384b0fa0f8294e1765e57d",level:2},{value:"Query Allowed Messages",id:"5fbfe6c6f9c34359ba2c5c89dd565820",level:4},{value:"Governance",id:"b0d04288f92840e5913b44d432e62d5a",level:2},{value:"Update Poor Network Messages List",id:"45e91f5f88a84e02bb77a00af6bf8ebb",level:4}];function u(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"e1a58e9de5854012944a7cf97ad0fab4",children:"Concept"}),"\n",(0,t.jsxs)(s.p,{children:["The robustness of the KIRA network is maintained by a set of active consensus nodes who ensure the smooth operation and security of the system. However, external factors or unforeseen events can sometimes hinder their ability to maintain the integrity of the network. Such a scenario where the number of active consensus nodes drops below the defined ",(0,t.jsx)(s.code,{children:"min_validators"})," ",(0,t.jsx)(s.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:(0,t.jsx)(s.strong,{children:"network property"})}),' is termed as "Poor Network Conditions".']}),"\n",(0,t.jsx)(s.p,{children:"This condition could be attributed to various potential causes:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Malicious DOS/DDOS attacks targeting consensus nodes not utilizing sentry nodes."}),"\n",(0,t.jsx)(s.li,{children:"Coordinated interference from multiple ISPs used by consensus nodes."}),"\n",(0,t.jsx)(s.li,{children:"Anomalies in DNS servers or incorrect address routing."}),"\n",(0,t.jsx)(s.li,{children:"Failed network upgrades leading to unexpected behaviors."}),"\n",(0,t.jsx)(s.li,{children:'Global political events affecting internet connectivity, like the "Great Firewall 2.0".'}),"\n",(0,t.jsx)(s.li,{children:"Among other unforeseen circumstances..."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"In response to these challenges, this module activates specific protocols and safeguards designed to protect the network and its users. These measures include limiting certain transactions and adjusting network properties to ensure asset safety and network stability until normal conditions are restored."}),"\n",(0,t.jsx)(s.h3,{id:"b3ef892b6bbc41808a8d360e4608dfda",children:"Ensuring Network & Users Safety"}),"\n",(0,t.jsxs)(s.p,{children:["The primary objective during poor network conditions is to safeguard user assets until the network regains its strength. The ",(0,t.jsx)(s.code,{children:"poor_network_max_bank_send"})," ",(0,t.jsx)(s.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:(0,t.jsx)(s.strong,{children:"network property"})})," is instrumental in this context. It dictates the upper limit for asset transfers during compromised network states. By equating this value with the ",(0,t.jsx)(s.code,{children:"max_tx_fee"}),", the network can prevent potential asset misappropriation by malicious entities."]}),"\n",(0,t.jsxs)(s.p,{children:["Furthermore, custodians can monitor the ",(0,t.jsx)(s.code,{children:"min_validators"})," and ",(0,t.jsx)(s.code,{children:"poor_network_max_bank_send"})," to decide whether to accept transfers from a network or a fork, especially if the consensus nodes count dips below the safety threshold. Essentially, these measures deter malicious consensus nodes from gaining undue advantages, such as attempting to sideline honest consensus nodes for their own gain."]}),"\n",(0,t.jsx)(s.h3,{id:"95043ba1a6d445d2aeba125aad215bba",children:"Restricted Transaction Types"}),"\n",(0,t.jsxs)(s.p,{children:["In light of such situations, the network can determine which ",(0,t.jsx)(s.a,{href:"https://github.com/KiraCore/sekai/blob/master/types/Msg.go",children:(0,t.jsx)(s.strong,{children:"Transaction Message Types"})})," are permissible. This proactive approach halts any unexpected network activities until a sufficient number of nodes is available for secure chain operation."]}),"\n",(0,t.jsx)(s.p,{children:"The default set of allowed messages during poor network conditions are:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"MESSAGE TYPE"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeSubmitProposal"})}),(0,t.jsx)(s.td,{children:"Submit a new governance proposal"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeSetNetworkProperties"})}),(0,t.jsx)(s.td,{children:"Update network-level properties/settings"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeVoteProposal"})}),(0,t.jsx)(s.td,{children:"Cast a vote on an existing governance proposal"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeClaimCouncilor"})}),(0,t.jsx)(s.td,{children:"Request to claim a councilor role"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeWhitelistPermissions"})}),(0,t.jsx)(s.td,{children:"Grant certain permissions to an entity"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeBlacklistPermissions"})}),(0,t.jsx)(s.td,{children:"Revoke certain permissions from an entity"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeCreateRole"})}),(0,t.jsx)(s.td,{children:"Create a new network role"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeAssignRole"})}),(0,t.jsx)(s.td,{children:"Assign an existing role to an entity"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeUnassignRole"})}),(0,t.jsx)(s.td,{children:"Remove a role from an entity"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeWhitelistRolePermission"})}),(0,t.jsx)(s.td,{children:"Grant specific permissions to a role"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeBlacklistRolePermission"})}),(0,t.jsx)(s.td,{children:"Revoke specific permissions from a role"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeRemoveWhitelistRolePermission"})}),(0,t.jsx)(s.td,{children:"Remove granted permissions from a role's whitelist"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeRemoveBlacklistRolePermission"})}),(0,t.jsx)(s.td,{children:"Remove permissions from a role's blacklist"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeClaimValidator"})}),(0,t.jsx)(s.td,{children:"Request to claim validator seat"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeActivate"})}),(0,t.jsx)(s.td,{children:"Activate the consensus node that was previously inactivated for downtime"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypePause"})}),(0,t.jsx)(s.td,{children:"Temporarily pause the consensus node"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeUnpause"})}),(0,t.jsx)(s.td,{children:"Resume a previously paused consensus node"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeRegisterIdentityRecords"})}),(0,t.jsx)(s.td,{children:"Register new identity records"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeEditIdentityRecord"})}),(0,t.jsx)(s.td,{children:"Modify an existing identity record"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeRequestIdentityRecordsVerify"})}),(0,t.jsx)(s.td,{children:"Request verification for an identity record"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeHandleIdentityRecordsVerifyRequest"})}),(0,t.jsx)(s.td,{children:"Handle incoming verification requests"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeCancelIdentityRecordsVerifyRequest"})}),(0,t.jsx)(s.td,{children:"Cancel a previously made verification request"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"f76721f5b3a845d483bd30cafdb0a488",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"NAME"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"TYPE"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"EXAMPLE"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"poor_network_messages"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"[]string"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"MsgTypeSubmitProposal,MsgTypeSetNetworkProperties,\u2026"})}),(0,t.jsx)(s.td,{children:"A list defining the type of messages allowed during poor network conditions."})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"55563826bad845afa3dfea091debbfb2",children:"Cli Syntax & Examples"}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,t.jsx)(s.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,t.jsx)(s.em,{children:"Roles & Permissions"})})," ",(0,t.jsx)(s.em,{children:"documentation for more details."})," ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.code,{children:"$SIGNER"})})," ",(0,t.jsx)(s.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.code,{children:"$FLAGS_TX"})})," ",(0,t.jsx)(s.em,{children:"and"})," ",(0,t.jsxs)(s.em,{children:[(0,t.jsx)(s.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,t.jsx)(s.em,{children:"section"})]})}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(o.Z,{value:"transactions ",label:"Transactions ",children:[(0,t.jsx)(s.h2,{id:"8c33550d55ec4863abaa5a6b2030a061",children:"Transactions"}),(0,t.jsx)(s.p,{children:"There is no transactions other than the governance proposals for this sub-module"})]}),(0,t.jsxs)(o.Z,{value:"queries",label:"Queries",children:[(0,t.jsx)(s.h2,{id:"81e1f96b40384b0fa0f8294e1765e57d",children:"Queries"}),(0,t.jsx)(s.table,{children:(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.code,{children:"poor-network-messages"})}),(0,t.jsx)(s.th,{children:"Retrieve a list of allowed transaction message types during poor network conditions."})]})})}),(0,t.jsx)(s.h4,{id:"5fbfe6c6f9c34359ba2c5c89dd565820",children:"Query Allowed Messages"}),(0,t.jsxs)(s.p,{children:["Retrieve a list of allowed transaction message types during poor network conditions using the ",(0,t.jsx)(s.code,{children:"poor-network-messages"})," command."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sekaid query customgov poor-network-messages $FLAGS_QR | jq\n"})})]}),(0,t.jsxs)(o.Z,{value:"governance",label:"Governance",children:[(0,t.jsx)(s.h2,{id:"b0d04288f92840e5913b44d432e62d5a",children:"Governance"}),(0,t.jsx)(s.table,{children:(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.code,{children:"set-poor-network-msgs"})}),(0,t.jsx)(s.th,{children:"Create a proposal for updating allowed transaction message types during poor network conditions."})]})})}),(0,t.jsx)(s.h4,{id:"45e91f5f88a84e02bb77a00af6bf8ebb",children:"Update Poor Network Messages List"}),(0,t.jsxs)(s.p,{children:["The CLI command, ",(0,t.jsx)(s.code,{children:"set-poor-network-msgs"}),", is utilized to create a proposal for updating the allowed transaction message types during poor network conditions. The command accepts the following arguments and flags:"]}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Args"})}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"$MESSAGES"}),": A list of transaction message types that should be allowed during poor network conditions. List of existing messages is vailable ",(0,t.jsx)(s.a,{href:"https://github.com/KiraCore/sekai/blob/master/types/Msg.go",children:"here"}),"."]}),"\n"]}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Flags"})}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"$TITLE"}),': The title of the proposal, defaulting to "Update poor network messages".']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"$DESCRIPTION"}),": The description of the proposal, defaulting to \"Allowing submission of '[$MESSAGES]' during poor network conditions\"."]}),"\n"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sekaid tx customgov proposal set-poor-network-msgs \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n$MESSAGES\n"})})]})]})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5162:(e,s,n)=>{n.d(s,{Z:()=>o});n(7294);var t=n(6905);const r={tabItem:"tabItem_Ymn6"};var i=n(5893);function o(e){let{children:s,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,o),hidden:n,children:s})}},4866:(e,s,n)=>{n.d(s,{Z:()=>w});var t=n(7294),r=n(6905),i=n(2466),o=n(6550),a=n(469),d=n(1980),l=n(7392),c=n(12);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,l.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function x(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,d._X)(i),(0,t.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(r.location.search);s.set(i,e),r.replace({...r.location,search:s.toString()})}),[i,r])]}function j(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,i=u(e),[o,d]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!x({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:i}))),[l,h]=p({queryString:n,groupId:r}),[j,f]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,i]=(0,c.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),m=(()=>{const e=l??j;return x({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=n(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function g(e){let{className:s,block:n,selectedValue:t,selectValue:o,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),c=e=>{const s=e.currentTarget,n=d.indexOf(s),r=a[n].value;r!==t&&(l(s),o(r))},h=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;s=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;s=d[n]??d[d.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:a.map((e=>{let{value:s,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>d.push(e),onKeyDown:h,onClick:c,...i,className:(0,r.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=j(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...s}),(0,b.jsx)(v,{...e,...s})]})}function w(e){const s=(0,f.Z)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(s))}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(7294);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);