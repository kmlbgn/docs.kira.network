"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6703],{7008:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=r(5893),s=r(1151),d=r(4866),i=r(5162);const a={title:"Upgrade Module",sidebar_position:2,slug:"/b87fd14e-b3d8-4a25-b0d2-0cda6bdc6478"},l=void 0,c={id:"Stack/SEKAI--Backend/Modules/Upgrade/Upgrade-Module",title:"Upgrade Module",description:"Concept",source:"@site/tabs/Docs/Stack/SEKAI--Backend/Modules/Upgrade/Upgrade-Module.mdx",sourceDirName:"Stack/SEKAI--Backend/Modules/Upgrade",slug:"/b87fd14e-b3d8-4a25-b0d2-0cda6bdc6478",permalink:"/docs.kira.network/b87fd14e-b3d8-4a25-b0d2-0cda6bdc6478",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Upgrade Module",sidebar_position:2,slug:"/b87fd14e-b3d8-4a25-b0d2-0cda6bdc6478"},sidebar:"defaultSidebar",previous:{title:"Upgrade",permalink:"/docs.kira.network/dd144b3a-8f4e-45cb-8133-b6ccda5f7722"},next:{title:"Fee processing",permalink:"/docs.kira.network/184c11ed-4849-4ec5-acd0-f795b7abf467"}},o={},h=[{value:"Concept",id:"6ba6105bbb57434085533c9c0e0497e0",level:3},{value:"Parameters",id:"3e04b070eb15440fb32be7705a85fbdc",level:3},{value:"Upgrade configuration examples",id:"26a1fdae5da44a1087d2e19c99f98566",level:4},{value:"Upgrade plan example",id:"0cff5a2dae1b4f039c904237df25449e",level:4},{value:"Upgrade process",id:"8576cd2745b74f64bd2df866b9ebc5cf",level:3},{value:"Manual hard fork",id:"e101effdd1aa446eac7633d2a4475c77",level:4},{value:"Cli syntax &amp; examples",id:"e33d542c95414e01b67b21abf61aa961",level:2},{value:"Transactions",id:"d5522dd8578142d582074acef31f2b66",level:2},{value:"Queries",id:"4e0e5ff7b7394ac5ba2ce2b33bd0550c",level:2},{value:"Display the current plan",id:"75bbe2df40cf4062b80245ade1980630",level:4},{value:"Display the next plan",id:"d84065dd1cd5451f84968808880db451",level:4},{value:"Governance",id:"a2174efb55d24eb48f3b046437db2148",level:2},{value:"Set network upgrade plan proposal",id:"776b14b4fa314e0ca4387826d49a9346",level:4},{value:"Cancel network upgrade plan proposal",id:"6afe9d8499b640ad960d44e4e210bebd",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"6ba6105bbb57434085533c9c0e0497e0",children:"Concept"}),"\n",(0,t.jsx)(n.p,{children:'The Upgrade Module plays a crucial role in ensuring seamless transitions between different versions of the KIRA Network while preserving the current chain state. KIRA\'s governance is responsible for managing the upgrade process with permissions to propose and vote on the "Upgrade Plan". The Upgrade Plan is a set of JSON-formatted instructions hosted on-chain that details how and when validators should proceed with the upgrade. Additionally, the Upgrade Module offers a unique feature that informs new network participants about the necessary software resources to join the network, thereby ensuring the process of acquiring essential references and checksums is entirely trustless.'}),"\n",(0,t.jsx)(n.p,{children:"Upgrades can occur as either Hard Forks or Soft Forks. Hard Forks are executed when the new blockchain application is incompatible with the current chain state storage, requiring launching from a new genesis with a new chain ID to prevent double signing. On the other hand, Soft Forks are executed when no impact on the chain-state is expected, allowing the network to continue with the same chain ID without exporting and generating a new genesis file."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If a consensus node casts a negative vote on an upgrade proposal that is later approved, it will automatically be ",(0,t.jsx)(n.a,{href:"/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:(0,t.jsx)(n.code,{children:"paused"})})," at the beginning of the upgrade."]})}),"\n",(0,t.jsx)(n.h3,{id:"3e04b070eb15440fb32be7705a85fbdc",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Example"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"upgrade-118"})}),(0,t.jsx)(n.td,{children:"Name of the plan"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"max_enrolment_duration"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"integer"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"90"})}),(0,t.jsx)(n.td,{children:"Expected duration of upgrade in seconds"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"new_chain_id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"testnet-9"})}),(0,t.jsx)(n.td,{children:"Identifier of the new chain"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"old_chain_id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"testnet-8"})}),(0,t.jsx)(n.td,{children:"Identifier of the current chain"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"proposalID"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"668"})}),(0,t.jsx)(n.td,{children:"ID of the update proposal. It is set automatically."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"reboot_required"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsx)(n.td,{children:"Defines if nodes require OS reboot"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"resources"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"array"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'{"version": "testnet-9","url":https://github.com/KiraCore/kira","id": "kira"},'})}),(0,t.jsxs)(n.td,{children:["A list of resources to be used in the pipeline, such as images or external dependencies. Includes: ",(0,t.jsx)(n.code,{children:"url"}),", ",(0,t.jsx)(n.code,{children:"checksum"}),", ",(0,t.jsx)(n.code,{children:"version"}),", ",(0,t.jsx)(n.code,{children:"id"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rollback_checksum"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"upgrade-118-roll"})}),(0,t.jsx)(n.td,{children:"Checksum to use when rolling back the chain"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"skip_handler"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsxs)(n.td,{children:["Defines if ",(0,t.jsx)(n.code,{children:"sekaid"})," on-chain handlers of the upgrade process should be skipped. If ",(0,t.jsx)(n.code,{children:"true"}),", ",(0,t.jsx)(n.code,{children:"sekaid"})," version changes will be omitted and the network will continue running. If ",(0,t.jsx)(n.code,{children:"false"}),", the network will halt at the ",(0,t.jsx)(n.code,{children:"upgrade_time"})," and remain stopped until ",(0,t.jsx)(n.code,{children:"sekaid"})," binary is upgraded"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"instate_upgrade"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsxs)(n.td,{children:["Defines if database state should be deleted or persisted. If set to ",(0,t.jsx)(n.code,{children:"true"})," then a Hard Fork will be executed and the ",(0,t.jsx)(n.code,{children:"new_chain_id"})," and ",(0,t.jsx)(n.code,{children:"old_chain_id"})," must be different. If set to ",(0,t.jsx)(n.code,{children:"false"})," , a Soft Fork will be executed and the database does not have to be erased."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"upgrade_time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"integer"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1641573000"})}),(0,t.jsx)(n.td,{children:"Unix timestamp of the exact time the update should be executed"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"26a1fdae5da44a1087d2e19c99f98566",children:"Upgrade configuration examples"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Hard Fork with no change made in ",(0,t.jsx)(n.code,{children:"sekaid"})," binary - used to upgrade other binaries such as INTERX or infrastructure manager, and wiping old database state (e.g. to save disk space)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"instate_upgrade"})," - ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"skip_handler"})," - ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"new_chain_id"})," - MUST be different then ",(0,t.jsx)(n.code,{children:"old_chain_id"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Hard Fork with changes in ",(0,t.jsx)(n.code,{children:"sekaid"})," binary - used to upgrade network in the case where old database state is incompatible with new release","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"instate_upgrade"})," - ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"skip_handler"})," - ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"new_chain_id"})," - MUST be different then ",(0,t.jsx)(n.code,{children:"old_chain_id"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Soft Fork without changes in ",(0,t.jsx)(n.code,{children:"sekaid"})," binary  - used to upgrade other binaries, but preserve old database state","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"instate_upgrade"})," - TBD"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"skip_handler"})," - TBD"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"new_chain_id"})," - MUST be the same as ",(0,t.jsx)(n.code,{children:"old_chain_id"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"0cff5a2dae1b4f039c904237df25449e",children:"Upgrade plan example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\t"plan": {\n\t\t"max_enrolment_duration": "90",\n\t\t"name": "upgrade-118",\n\t\t"new_chain_id": "testnet-9",\n\t\t"old_chain_id": "testnet-8",\n\t\t"proposalID": "668",\n\t\t"reboot_required": true,\n\t\t"resources": [\n\t\t\t{\n\t\t\t"checkout": "testnet-9",\n\t\t\t"git": "https://github.com/KiraCore/kira",\n\t\t\t"id": "kira"\n\t\t\t},\n\t\t\t{\n\t\t\t"checkout": "testnet-9",\n\t\t\t"git": "https://github.com/KiraCore/sekai",\n\t\t\t"id": "sekai"\n\t\t\t},\n\t\t\t{\n\t\t\t"checkout": "testnet-9",\n\t\t\t"git": "https://github.com/KiraCore/sekai",\n\t\t\t"id": "interx"\n\t\t\t}\n\t\t],\n\t\t"rollback_checksum": "upgrade-118-roll",\n\t\t"skip_handler": true,\n\t\t"upgrade_time": "1641573000"\n\t\t}\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"8576cd2745b74f64bd2df866b9ebc5cf",children:"Upgrade process"}),"\n",(0,t.jsx)(n.p,{children:"The KIRA network can be upgraded through an off-chain mechanism executed by the daemon service of the KIRA Manager (KM). However, it is not mandatory to use KM to upgrade the network, and node operators can set up their own dedicated CD/CI pipeline tools, such as Jenkins or Teamcity."}),"\n",(0,t.jsx)(n.p,{children:"To keep up-to-date with upcoming upgrades, operators can obtain information from two INTERX endpoints:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://testnet-rpc.kira.network/api/kira/upgrade/current_plan",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/<ip>:11000/api/kira/upgrade/current_plan"})})}),": The \u201ccurrent\u201d plan contains information and resources regarding the current release."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://testnet-rpc.kira.network/api/kira/upgrade/next_plan",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/<ip>:11000/api/kira/upgrade/next_plan"})})}),": The \u201cnext\u201d plan contains information and resources regarding the upcoming release. Nodes can also obtain resource references, such as GitHub links and branches, specified in the \u201ccurrent\u201d plan endpoint of a trusted node while joining the network for the very first time."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"e101effdd1aa446eac7633d2a4475c77",children:"Manual hard fork"}),"\n",(0,t.jsxs)(n.p,{children:["If a new genesis file is required for a hard fork, and KM is not used, node operators must create it by first exporting genesis at the block height where the network stopped (node daemon should be shut down), and then passing it through a dedicated ",(0,t.jsx)(n.code,{children:"new-genesis-from-exported"})," command. It should be noted that the ",(0,t.jsx)(n.code,{children:"sekaid"})," application must be upgraded prior to executing the ",(0,t.jsx)(n.code,{children:"new-genesis-from-exported"})," command. Otherwise, it might not be able to interpret and convert the old genesis to the new."]}),"\n",(0,t.jsx)(n.p,{children:"Node operators can execute the following steps to manually hard fork the network:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'SEKAI="/home/go/src/github.com/kiracore/sekai"\nEXPORTED_GENESIS="/tmp/exported-genesis.json"\nNEW_GENESIS="/tmp/new-genesis.json"\n\n# Cleanup old files\nrm -fv $EXPORTED_GENESIS $NEW_GENESIS\n\n# Ensure sekaid process is killed gracefully\npkill -15 sekaid || echoWarn "WARNING: Failed to kill sekaid, process might already be dead"\n\n# Export current genesis\nsekaid export --home=$SEKAID_HOME > $EXPORTED_GENESIS\n\n# Update repository\ncd $SEKAI\ngit fetch --all\ngit checkout $BRANCH_TO_CHECKOUT\nmake install\n\n# Convert exported genesis to a new compatible version\nsekaid new-genesis-from-exported $EXPORTED_GENESIS $NEW_GENESIS\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"e33d542c95414e01b67b21abf61aa961",children:"Cli syntax & examples"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,t.jsx)(n.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,t.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,t.jsx)(n.em,{children:"documentation for more details."})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$SIGNER"})})," ",(0,t.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,t.jsx)(n.em,{children:"and"})," ",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,t.jsx)(n.em,{children:"section"})]})}),"\n",(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(i.Z,{value:"transactions",label:"Transactions",children:[(0,t.jsx)(n.h2,{id:"d5522dd8578142d582074acef31f2b66",children:"Transactions"}),(0,t.jsx)(n.p,{children:"There is no transactions other than the governance proposals for this sub-module."})]}),(0,t.jsxs)(i.Z,{value:"queries",label:"Queries",children:[(0,t.jsx)(n.h2,{id:"4e0e5ff7b7394ac5ba2ce2b33bd0550c",children:"Queries"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"current-plan"})}),(0,t.jsx)(n.th,{children:"Query the current network upgrade plan."})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"next-plan"})}),(0,t.jsx)(n.td,{children:"Query the next network upgrade plan."})]})})]}),(0,t.jsx)(n.h4,{id:"75bbe2df40cf4062b80245ade1980630",children:"Display the current plan"}),(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"current-plan"})," command to retrieve the current network upgrade plan."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid query upgrade current-plan $FLAGS_QR | jq\n"})}),(0,t.jsx)(n.h4,{id:"d84065dd1cd5451f84968808880db451",children:"Display the next plan"}),(0,t.jsxs)(n.p,{children:["To query the next network upgrade plan, use the ",(0,t.jsx)(n.code,{children:"next-plan"})," command."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid query upgrade next-plan $FLAGS_QR | jq\n"})})]}),(0,t.jsxs)(i.Z,{value:"governance",label:"Governance",children:[(0,t.jsx)(n.h2,{id:"a2174efb55d24eb48f3b046437db2148",children:"Governance"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"proposal-set-plan"})}),(0,t.jsx)(n.th,{children:"Create a proposal to set a network upgrade plan."})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"proposal-cancel-plan"})}),(0,t.jsx)(n.td,{children:"Create a proposal to cancel an existing upgrade plan."})]})})]}),(0,t.jsx)(n.h4,{id:"776b14b4fa314e0ca4387826d49a9346",children:"Set network upgrade plan proposal"}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If a consensus node casts a negative vote on an upgrade proposal that is later approved, it will automatically be ",(0,t.jsx)(n.a,{href:"/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:(0,t.jsx)(n.code,{children:"paused"})})," at the beginning of the upgrade."]})}),(0,t.jsxs)(n.p,{children:["The CLI command, ",(0,t.jsx)(n.code,{children:"proposal-set-plan"}),", is used to create a proposal to set an upgrade plan for the network. If voted, the upgrade plan is saved and will be overwritten by any subsequent proposals voted before the ",(0,t.jsx)(n.code,{children:"$MIN_UPGRADE_TIME"}),". The command accepts the following flags:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flags"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$TITLE"}),": Title of the proposal."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$DESCRIPTION"}),": Description of the proposal."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$UPGRADEMEMO"}),": Upgrade proposal memo."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$NAME"}),": Upgrade name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$INSTATEUPGRADE"}),": Boolean indicating instate upgrade (true for hard fork with new genesis file/soft fork)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$SKIPHANDLER"}),": Boolean indicating if handler should be skipped (true if change in sekaid version)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$OLDCHAINID"}),": Old chain id."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$NEWCHAINID"}),": New chain id."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$MINUPGRADETIME"}),": Unix timestamp of the exact time the update should be executed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$RESOURCES"}),": List of resources to be used in the pipeline."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$ROLLBACKMEMO"}),": Checksum to use when rolling back the chain."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$MAXENROLLMENTDURATION"}),": Expected duration of upgrade in seconds."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$REBOOTREQUIRED"}),": Node reboot requirement (true if required)."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx customgov proposal-set-plan \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n--name=$NAME --resources=$RESOURCES \\\n--min-upgrade-time=$MIN_UPGRADE_TIME \\\n--old-chain-id=$OLD_CHAIN_ID \\\n--new-chain-id=$NEW_CHAIN_ID \\\n--rollback-memo=$ROLLBACK_MEMO \\\n--max-enrollment-duration=$MAX_ENROLLMENT_DURATION \\\n--upgrade-memo=$UPGRADE_MEMO \\\n--instate-upgrade=$INSTATE_UPGRADE \\\n--reboot-required=$REBOOT_REQUIRED \\\n--skip-handler=$SKIP_HANDLER\n"})}),(0,t.jsx)(n.h4,{id:"6afe9d8499b640ad960d44e4e210bebd",children:"Cancel network upgrade plan proposal"}),(0,t.jsxs)(n.p,{children:["The CLI command, ",(0,t.jsx)(n.code,{children:"proposal-cancel-plan"}),", is used to create a proposal to cancel an existing upgrade plan for the network. This proposal is not necessary if the goal is the replace an upgrade plan as the ",(0,t.jsx)(n.code,{children:"proposal-set-plan"})," command overwrite any existing upgrade plan. The command accepts the following flags:"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flags"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$TITLE"}),": The title of the proposal."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$NAME"}),": The name of the upgrade plan to be cancelled."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx customgov proposal-cancel-plan \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n--name=$NAME\n"})})]})]}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>i});r(7294);var t=r(6905);const s={tabItem:"tabItem_Ymn6"};var d=r(5893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,i),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(7294),s=r(6905),d=r(2466),i=r(6550),a=r(469),l=r(1980),c=r(7392),o=r(12);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.k6)(),d=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(d),(0,t.useCallback)((e=>{if(!d)return;const n=new URLSearchParams(s.location.search);n.set(d,e),s.replace({...s.location,search:n.toString()})}),[d,s])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,d=u(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:d}))),[c,h]=x({queryString:r,groupId:s}),[j,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,d]=(0,o.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:s}),b=(()=>{const e=c??j;return p({value:e,tabValues:d})?e:null})();(0,a.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,d]),tabValues:d}}var f=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function m(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.o5)(),o=e=>{const n=e.currentTarget,r=l.indexOf(n),s=a[r].value;s!==t&&(c(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:d}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:o,...d,className:(0,s.Z)("tabs__item",b.tabItem,d?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function k(e){let{lazy:n,children:r,selectedValue:s}=e;const d=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(m,{...e,...n}),(0,g.jsx)(k,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var t=r(7294);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);