"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[5882],{9170:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var t=s(5893),i=s(1151),r=s(4866),a=s(5162);const c={title:"Consensus nodes ranks & statuses",sidebar_position:3,slug:"/9f763be9-fbd3-452f-8c6e-6e418f34856f"},d="Concept {#f34eaf6c97424f8fbb0d31fc614016a3}",o={id:"KIRA\u2019s-stack/SEKAI/Modules/Slashing/Consensus-nodes-ranks-&-statuses",title:"Consensus nodes ranks & statuses",description:"f34eaf6c97424f8fbb0d31fc614016a3}",source:"@site/docs/KIRA\u2019s-stack/SEKAI/Modules/Slashing/Consensus-nodes-ranks-&-statuses.mdx",sourceDirName:"KIRA\u2019s-stack/SEKAI/Modules/Slashing",slug:"/9f763be9-fbd3-452f-8c6e-6e418f34856f",permalink:"/kira/docs/9f763be9-fbd3-452f-8c6e-6e418f34856f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Consensus nodes ranks & statuses",sidebar_position:3,slug:"/9f763be9-fbd3-452f-8c6e-6e418f34856f"},sidebar:"defaultSidebar",previous:{title:"Jailing & slashing",permalink:"/kira/docs/d6fee8b3-1948-493e-bbdd-796bcc996c2b"},next:{title:"Governance",permalink:"/kira/docs/58e7de4a-1887-48be-b4d0-93c9f9ecb8ef"}},l={},h=[{value:"Ranking system",id:"729611044b78402fbb895dd8d0689f8a",level:2},{value:"<strong>Ranking Reset</strong>",id:"859920756f1c4be2a75ab4cdbb9e07b4",level:3},{value:"Node statuses",id:"d8558d49b23249b192b6fa0e826d0b63",level:2},{value:"Pausing node",id:"7c60dcc14b8b4b8cbfdfaae7337efff6",level:3},{value:"Initial <strong>Framework for determining optimal ranking system values</strong>",id:"97a5346b720741029b9847fab7461550",level:2},{value:"Validator Signing Info",id:"036395957b234988b35849522764489c",level:3},{value:"Consensus nodes rank",id:"dc9234b0f7b04e8fac5bf3b6ec2e909b",level:3},{value:"<strong>Pause Validator</strong>",id:"pause-validator",level:3},{value:"<strong>Unpause Validator</strong>",id:"unpause-validator",level:3},{value:"<strong>Activating an inactive node</strong>",id:"activating-an-inactive-node",level:3},{value:"<strong>Active Staking Pools</strong>",id:"active-staking-pools",level:3},{value:"<strong>Inactive Staking Pools</strong>",id:"inactive-staking-pools",level:3},{value:"Reset All Validators Ranks",id:"reset-all-validators-ranks",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"f34eaf6c97424f8fbb0d31fc614016a3",children:"Concept"}),"\n",(0,t.jsxs)(n.p,{children:["The KIRA network encourages consensus nodes uptime (i.e maintain an ",(0,t.jsx)(n.code,{children:"active"})," status) by implementing a ranking system that fosters a dynamic and competitive environment to collectively promote network robustness and high participation levels. KIRA network utilizes the ",(0,t.jsx)(n.a,{href:"https://tendermint.com/",children:"Tendermint"})," consensus protocol, which ensures liveness by requiring a minimum of 2/3 + 1 of the consensus node set's total voting power to sign a block. While KIRA doesn't employ weighted voting and considers each node as having a single vote, the principle remains that it is not guaranteed for every node to sign every block as up to 1/3 of nodes can miss a block at any given time. This can be due to various factors, such as the random distribution of nodes around the world, limited networking connectivity between them, and the limited time that nodes have to wait for consensus votes. Accordingly, KIRA network's ranking system is designed to adapt to these variables. The system's parameters are fine-tuned by KIRA network governance to align individual node performance with the broader network health. This approach ensures high levels of participation while upholding the robustness of the network."]}),"\n",(0,t.jsx)(n.h2,{id:"729611044b78402fbb895dd8d0689f8a",children:"Ranking system"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The rank value is a measure of a node's performance and is used to inform the governance system about the node's activity. It does not affect the operation or future revenue of the node, but it may impact the visibility of the node in the public ranking system on the frontend application."})}),"\n",(0,t.jsxs)(n.p,{children:["KIRA network's consensus nodes ranking system and the associated node statuses operates on block production and missed blocks counter and is measured through two performance indicators, ",(0,t.jsx)(n.code,{children:"streak"})," and ",(0,t.jsx)(n.code,{children:"rank"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"streak"})," functions like a short-term performance indicator, showing the sequential number of successful block proposals by a consensus node in real time. This is akin to kill-streaks in video games. A failure to propose a single block resets the ",(0,t.jsx)(n.code,{children:"streak"})," to zero and increases the node\u2019s ",(0,t.jsx)(n.code,{children:"mischance_confidence"})," counter."]}),"\n",(0,t.jsxs)(n.li,{children:["In contrast, the ",(0,t.jsx)(n.code,{children:"rank"})," acts as a long-term performance indicator, reflecting the maximum ",(0,t.jsx)(n.code,{children:"streak"})," a validator has ever achieved. It is the main performance indicator."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["While a node's ",(0,t.jsx)(n.code,{children:"rank"})," may decrease due to missed blocks, the ranking system accommodates for the unpredictability of block production chances and waits until a node misses a ",(0,t.jsx)(n.code,{children:"mischance_confidence"})," number of blocks before considering the node ",(0,t.jsx)(n.code,{children:"offline"}),". When a node\u2019s status becomes ",(0,t.jsx)(n.code,{children:"offline"}),", each subsequent missed block, or ",(0,t.jsx)(n.code,{children:"mischance"})," counter, decreases the node's ",(0,t.jsx)(n.code,{children:"rank"})," by a constant amount, ",(0,t.jsx)(n.code,{children:"mischance_rank_decrease_amount"})," (set to 10 by default). However, if a node's status remains ",(0,t.jsx)(n.code,{children:"offline"})," and their ",(0,t.jsx)(n.code,{children:"mischance"})," score surpasses the ",(0,t.jsx)(n.code,{children:"max_mischance"})," value, defined in the ",(0,t.jsx)(n.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network properties"}),", the system will categorize the node as ",(0,t.jsx)(n.code,{children:"inactive"}),". An ",(0,t.jsx)(n.code,{children:"inactive"})," status triggers a decrease in the node's ",(0,t.jsx)(n.code,{children:"rank"})," by a percentage amount, defined by ",(0,t.jsx)(n.code,{children:"inactive_rank_decrease_percent"})," (set to 50% by default)."]}),"\n",(0,t.jsxs)(n.p,{children:["Consequently, ",(0,t.jsx)(n.code,{children:"inactive"})," consensus nodes get removed from the consensus node set and are barred from producing blocks. They can return to active status only when their operators signal readiness to produce blocks again, having resolved their internal issues, by using the ",(0,t.jsx)(n.code,{children:"activate"})," CLI. The governance can adjust all these ",(0,t.jsx)(n.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network properties"})," to ensure a probabilistically fair decrease in a node's rank."]}),"\n",(0,t.jsx)(n.h3,{id:"859920756f1c4be2a75ab4cdbb9e07b4",children:(0,t.jsx)(n.strong,{children:"Ranking Reset"})}),"\n",(0,t.jsx)(n.p,{children:"It may be useful for the governance to have the ability to reset all ranks simultaneously (e.g., incentivized games, etc.). For this purpose, the governance module has a dedicated proposal and corresponding voting permission."}),"\n",(0,t.jsx)(n.h2,{id:"d8558d49b23249b192b6fa0e826d0b63",children:"Node statuses"}),"\n",(0,t.jsx)(n.p,{children:"Depending on it\u2019s performance and activity, a consensus node can have one of the following statuses:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"STATUS"}),(0,t.jsx)(n.th,{children:"DESCRIPTION"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"active"})}),(0,t.jsxs)(n.td,{children:["Validator is actively participating in consensus, proposing and signing blocks. Every produced block increases validator rank by ",(0,t.jsx)(n.code,{children:"1"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"inactive"})}),(0,t.jsx)(n.td,{children:"Validator stopped producing blocks and didn't signal to the network any planned maintenance. As the result his rank got slashed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"paused"})}),(0,t.jsx)(n.td,{children:"Validator node entered maintenance node and is not producing blocks. The rank is not impacted."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jailed"})}),(0,t.jsxs)(n.td,{children:["Validator is jailed (permanently) due to double signing fault. Governance must investigate reason for the fault and unjail node via ",(0,t.jsx)(n.a,{href:"/d6fee8b3-1948-493e-bbdd-796bcc996c2b",children:"proposal"}),"."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"7c60dcc14b8b4b8cbfdfaae7337efff6",children:"Pausing node"}),"\n",(0,t.jsxs)(n.p,{children:["For planned maintenance where a consensus node must be offline, it can use the ",(0,t.jsx)(n.code,{children:"pause"})," CLI to remove itself from the consensus node set. This will prevent the its rank from being impacted and the node will not be inactivated. When it is back online, the consensus node can use the ",(0,t.jsx)(n.code,{children:"unpause"})," CLI to signal to the network that it is ready to rejoin the consensus node set."]}),"\n",(0,t.jsxs)(n.h2,{id:"97a5346b720741029b9847fab7461550",children:["Initial ",(0,t.jsx)(n.strong,{children:"Framework for determining optimal ranking system values"})]}),"\n",(0,t.jsxs)(n.p,{children:["Determining the optimal values for ",(0,t.jsx)(n.code,{children:"max_mischance"})," and ",(0,t.jsx)(n.code,{children:"inactive_rank_decrease_percent"})," depends on various factors, including the specific network conditions, the desired level of decentralization, average time for automatic recovery and the overall network performance. Based on the average block production rate, expected node uptime, and network latency of existing Cosmos ecosystem chains, the following initial values are proposed."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mischance_confidence"}),": In the Cosmos ecosystem, the average block time is around 5-7 seconds. To give a node a reasonable amount of time to recover from temporary issues, ",(0,t.jsx)(n.code,{children:"mischance_confidence"})," could be set to a value equivalent to 10 minutes, such as 120 blocks (assuming a 5-second block time). This would allow nodes to recover from short-term issues without being unfairly penalized."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"max_mischance"}),": Assuming an expected node uptime of 99% per day (i.e 14.4min of allowed downtime per day) and considering network latency, we can initially set ",(0,t.jsx)(n.code,{children:"max_mischance"})," to 60 blocks (5min) . This means that, after missing 120 blocks, if a node misses another 60 consecutive blocks, its status will change to being ",(0,t.jsx)(n.code,{children:"inactive"})," and its rank will be slashed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"inactive_rank_decrease_percent"}),": To create a competitive environment that encourages node operators to maintain high performance, we can set the ",(0,t.jsx)(n.code,{children:"inactive_rank_decrease_percent"})," to 20%. This value is significant enough to incentivize operators to address any issues leading to downtime quickly, without being overly punitive for temporary issues."]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"ec9a31c9c0864679b173c41bd2f6e9b8",children:"Parameters"}),"\n",(0,t.jsx)(n.h3,{id:"036395957b234988b35849522764489c",children:"Validator Signing Info"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"NAME"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"TYPE"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"EXAMPLE"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"address"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"kira1yq8l"}),"..."]}),(0,t.jsx)(n.td,{children:"The address of the consensus node."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"start_height"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1500"})}),(0,t.jsx)(n.td,{children:"The height at which the consensus node was first a candidate OR was activated."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"inactive_until"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"google.protobuf.Timestamp"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2023-05-09T00:00:00Z"})}),(0,t.jsx)(n.td,{children:"The timestamp consensus node cannot be activated until."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"missed_blocks_counter"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0"})}),(0,t.jsx)(n.td,{children:"Total missed blocks counter."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"produced_blocks_counter"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"4500"})}),(0,t.jsx)(n.td,{children:"Total produced blocks counter."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"mischance_confidence"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0"})}),(0,t.jsxs)(n.td,{children:["Mischance confidence counter - counts when node is in ",(0,t.jsx)(n.code,{children:"active"})," status."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"mischance"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0"})}),(0,t.jsxs)(n.td,{children:["Missed blocks counter - counts after ",(0,t.jsx)(n.code,{children:"mischance_confidence"})," is reached and if node is in ",(0,t.jsx)(n.code,{children:"active"})," status."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"last_present_block"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1575648"})}),(0,t.jsx)(n.td,{children:"The last block height signed by the consensus node."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"dc9234b0f7b04e8fac5bf3b6ec2e909b",children:"Consensus nodes rank"}),"\n",(0,t.jsxs)(n.p,{children:["Nodes rank and statuses are stored in the ",(0,t.jsx)(n.code,{children:"x/staking"})," module and can be queried using ",(0,t.jsx)(n.a,{href:"/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b",children:"Consensus nodes & staking pools"})," CLI."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"NAME"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"TYPE"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"EXAMPLE"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"val_key"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sdk.ValAddress"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"kiravaloper1yq8lg..."})}),(0,t.jsxs)(n.td,{children:["The validator key, casted to a Cosmos SDK ",(0,t.jsx)(n.code,{children:"ValAddress"})," type."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pub_key"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sdk.PubKey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"kiravalconspub1zcjduepqw..."})}),(0,t.jsxs)(n.td,{children:["The public key of the validator, accepted as a ",(0,t.jsx)(n.code,{children:"cosmos.crypto.PubKey"})," interface."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"status"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"active"})}),(0,t.jsx)(n.td,{children:"The current status of the validator."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rank"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"112"})}),(0,t.jsx)(n.td,{children:"A long-term statistic implying the longest streak that a validator ever achieved. This helps to judge real-life performance and reliability of validators."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"streak"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"10"})}),(0,t.jsx)(n.td,{children:"The consecutive number of times that a given validator successfully proposed a block (since the last time they failed) that was accepted into the blockchain state. Similar to kill-streaks in video games, this implies short-term performance."})]})]})]}),"\n",(0,t.jsx)(n.h1,{id:"f6aa9bcf8b9548e08851342e55526bfa",children:"CLI syntax & examples"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,t.jsx)(n.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,t.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,t.jsx)(n.em,{children:"documentation for more details."})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$SIGNER"})})," ",(0,t.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,t.jsx)(n.em,{children:"and"})," ",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,t.jsx)(n.em,{children:"section"})]})}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(a.Z,{value:"transactions",label:"Transactions",children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"pause"})}),(0,t.jsx)(n.th,{children:"Pause a consensus node."})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"unpause"})}),(0,t.jsx)(n.td,{children:"Unpause a consensus node."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"activate"})}),(0,t.jsx)(n.td,{children:"Activate a consensus node previously inactivated for downtime"})]})]})]}),(0,t.jsx)(n.h3,{id:"pause-validator",children:(0,t.jsx)(n.strong,{children:"Pause Validator"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid tx customslashing pause \\\n--from=$SIGNER $FLAGS_TX\n"})}),(0,t.jsx)(n.h3,{id:"unpause-validator",children:(0,t.jsx)(n.strong,{children:"Unpause Validator"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid tx customslashing unpause \\\n--from=$SIGNER $FLAGS_TX\n"})}),(0,t.jsx)(n.h3,{id:"activating-an-inactive-node",children:(0,t.jsx)(n.strong,{children:"Activating an inactive node"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid tx customslashing activate \\\n--from=$SIGNER $FLAGS_TX\n"})})]}),(0,t.jsxs)(a.Z,{value:"queries",label:"Queries",children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"active-staking-pools"})})}),(0,t.jsx)(n.th,{children:"Query active staking pools."})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"inactive-staking-pools"})})}),(0,t.jsx)(n.td,{children:"Query inactive staking pools."})]})})]}),(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Nodes rank and statuses can be queried using the ",(0,t.jsx)(n.a,{href:"/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b",children:"Consensus node\u2019s dedicated queries"}),"."]})}),(0,t.jsx)(n.h3,{id:"active-staking-pools",children:(0,t.jsx)(n.strong,{children:"Active Staking Pools"})}),(0,t.jsx)(n.p,{children:"List all staking pools currently active and accepting delegations."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing active-staking-pools $FLAGS_QR | jq\n"})}),(0,t.jsx)(n.h3,{id:"inactive-staking-pools",children:(0,t.jsx)(n.strong,{children:"Inactive Staking Pools"})}),(0,t.jsx)(n.p,{children:"List staking pools that are inactive and cannot accept delegations."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing inactive-staking-pools $FLAGS_QR | jq\n"})})]}),(0,t.jsxs)(a.Z,{value:"governance",label:"Governance",children:[(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"proposal-reset-whole-validator-rank"})}),(0,t.jsx)(n.th,{children:"Proposes to reset the ranking of all validators"})]})})}),(0,t.jsx)(n.h3,{id:"reset-all-validators-ranks",children:"Reset All Validators Ranks"}),(0,t.jsxs)(n.p,{children:["The CLI command, ",(0,t.jsx)(n.code,{children:"proposal-reset-whole-validator-rank"}),", is utilized to raise a governance proposal for resetting the whole validator rank."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flags"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$TITLE"}),": The title of the proposal."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal."]}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid tx custom proposal-reset-whole-validator-rank \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION\n"})})]})]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>a});s(7294);var t=s(6905);const i={tabItem:"tabItem_Ymn6"};var r=s(5893);function a(e){let{children:n,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,a),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>y});var t=s(7294),i=s(6905),r=s(2466),a=s(6550),c=s(469),d=s(1980),o=s(7392),l=s(12);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const i=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,r=u(e),[a,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,h]=j({queryString:s,groupId:i}),[b,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,l.Nk)(s);return[i,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:i}),m=(()=>{const e=o??b;return x({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=s(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=s(5893);function g(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),l=e=>{const n=e.currentTarget,s=d.indexOf(n),i=c[s].value;i!==t&&(o(n),a(i))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:l,...r,className:(0,i.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=b(e);return(0,p.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,p.jsx)(g,{...e,...n}),(0,p.jsx)(v,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,p.jsx)(k,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var t=s(7294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);