"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6235],{1979:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var t=s(5893),r=s(1151),a=s(4866),i=s(5162);const o={title:"Consensus nodes & staking pools",sidebar_position:2,slug:"/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b"},c="Concept {#119370e041bd4a63a2a2649b70fb2e2e}",d={id:"KIRA\u2019s-stack/SEKAI/Modules/Multistaking/Consensus-nodes-&-staking-pools",title:"Consensus nodes & staking pools",description:"119370e041bd4a63a2a2649b70fb2e2e}",source:"@site/docs/KIRA\u2019s-stack/SEKAI/Modules/Multistaking/Consensus-nodes-&-staking-pools.mdx",sourceDirName:"KIRA\u2019s-stack/SEKAI/Modules/Multistaking",slug:"/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b",permalink:"/docs.kira.network/docs/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Consensus nodes & staking pools",sidebar_position:2,slug:"/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b"},sidebar:"defaultSidebar",previous:{title:"Multistaking",permalink:"/docs.kira.network/docs/64eb7e84-ab20-454d-953f-57b1cf457790"},next:{title:"Delegators",permalink:"/docs.kira.network/docs/94e4d0a6-8e45-469c-89a5-8ec65ca16381"}},l={},h=[{value:"<strong>Claiming a validator seat</strong>",id:"6441658f447b4a418784ab7b0ce4ec34",level:2},{value:"Staking <strong>pools status &amp; commissions</strong>",id:"df95ed895a6b45968a254d7751bebfe9",level:2},{value:"Performance-based rewards",id:"9884c804414347b9ba608c8c9c006564",level:2},{value:"Consensus nodes ranks and statuses",id:"4d738a03dfa44aa2bc1482fe5e6114a4",level:2},{value:"Consensus node FAQ",id:"326c9ccbe2aa4040adb5182e269872b2",level:2},{value:"<strong>Claiming a Consensus Node Seat</strong>",id:"claiming-a-consensus-node-seat",level:3},{value:"<strong>Creating/Editing a Staking Pool</strong>",id:"creatingediting-a-staking-pool",level:3},{value:"<strong>Consensus Node Information</strong>",id:"consensus-node-information",level:3},{value:"<strong>Staking Pool Information</strong>",id:"staking-pool-information",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"119370e041bd4a63a2a2649b70fb2e2e",children:"Concept"}),"\n",(0,t.jsx)(n.p,{children:'The problem of improving the probabilistic finality of PoW consensuses has been treated by a variety of committee-based PoS consensuses such as Tendermint. However, unlike in the former mechanism, where all consensus nodes ("miners") are able to propose a block and one of them is chosen probabilistically, in a committee-based blockchain, blocks are cooperatively created through a voting mechanism. Therefore, the consensus over the "valid" state of the blockchain depends on the voting behavior of all its consensus nodes.'}),"\n",(0,t.jsx)(n.p,{children:"However, since permissionless settings inherently exhibit Sybil vulnerability, assessing nodes' rational behavior becomes impossible. As a result, the prevalent solution has been to apply a weighted voting power rule, where both consensus and governance votes are weighted by their respective stakes. In this paradigm, a block (or a governance proposal) is considered valid when it accumulates at least two-thirds of the total voting power from the consensus nodes set. Regrettably, this approach has often led to the centralization of power in the hands of a few large token holders, as exemplified by Cosmos, where more than two-thirds of voting power of most chains is concentrated in just 5 to 7 entities. And this system, in fact, still does not guarantee that their intentions align with the best interests of the network in the long term."}),"\n",(0,t.jsxs)(n.p,{children:["KIRA builds upon ",(0,t.jsx)(n.a,{href:"https://tendermint.com/",children:"Tendermint"})," as its consensus engine and introduces fundamental adjustments to the block proposer role, transforming the system into a governance-permissioned one that unlocks powerful features:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The Committee, a.k.a Consensus node set or \u201cValidator\u201d set, is no longer fixed and determined by stake eligibility. Instead, network governance controls who can join and leave the committee, and can set requirements such as proof of individuality (through the ",(0,t.jsx)(n.a,{href:"/d482180d-165a-4c09-8c32-167f061ceb92",children:"Identity Registrar"})," for instance and which doesn't have to be KYC), community involvement (such as joining consensus node standups), or adherence to the Code of Conduct in the ",(0,t.jsx)(n.a,{href:"/1a3a9dbd-3c24-454b-b353-ee6a1c2c7a5c",children:"Data Registry"})," to increase sybil resistance."]}),"\n",(0,t.jsxs)(n.li,{children:["The block proposer role rotates according to an equal probability round robin mechanism, meaning that all consensus nodes have an equal chance of proposing new blocks. This also means that they are rewarded equally, rather than proportionally to their stake. More information on rewards distribution can be found in the ",(0,t.jsx)(n.a,{href:"/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:"Rewards Distributor"})," module."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"6441658f447b4a418784ab7b0ce4ec34",children:(0,t.jsx)(n.strong,{children:"Claiming a validator seat"})}),"\n",(0,t.jsxs)(n.p,{children:['Before any Consensus node can participate in network validation, they must first "claim" their Validator Seat, a process parallel to how governance members claim their Councilor Seat. This action acknowledges the network ',(0,t.jsx)(n.a,{href:"/1a3a9dbd-3c24-454b-b353-ee6a1c2c7a5c",children:(0,t.jsx)(n.strong,{children:"Code of Conduct"})})," and allows the integration of the node in the consensus registrar. To submit a ",(0,t.jsx)(n.code,{children:"MsgClaimValidator"})," transaction, the account must have permission ",(0,t.jsx)(n.strong,{children:"[Problem Internal Link]"})," , which is assigned either through governance (mainnet) or granted by the sudo account (testnet). In addition, this transaction requires the node's globally unique ",(0,t.jsx)(n.code,{children:"moniker"})," identifier as a parameter. This moniker is a friendly name with minimum 4 non-whitespace characters that can be set in advance by the account via the ",(0,t.jsx)(n.a,{href:"/d482180d-165a-4c09-8c32-167f061ceb92",children:"Identity Registrar"})," module, or directly when submitting the transaction via the ",(0,t.jsx)(n.code,{children:"claim-validator-seat"})," CLI if it has not been assigned a value yet. If a different value than the existing one is provided, the transaction will fail. This process ensures the unique identity of each consensus node in the network."]}),"\n",(0,t.jsxs)(n.h2,{id:"df95ed895a6b45968a254d7751bebfe9",children:["Staking ",(0,t.jsx)(n.strong,{children:"pools status & commissions"})]}),"\n",(0,t.jsxs)(n.p,{children:["Each consensus node operates its own staking pool where delegators can stake their assets. Each staking pool has a unique ID that is linked to the consensus node's address. The consensus node has the ability to ",(0,t.jsx)(n.code,{children:"enable"})," or ",(0,t.jsx)(n.code,{children:"disable"})," the staking pool, as well as set the commission rate on block rewards. Staking pools play a crucial role in reward distribution on KIRA network. All rewards are managed and distributed through these pools, which helps to streamline the process given the network's diverse range of staking tokens."]}),"\n",(0,t.jsxs)(n.p,{children:["Before the block\u2019s and fee rewards of a given block are distributed to proposer staking pool\u2019s delegators, the proposer takes a percentage of both types of rewards as commissions. Regarding block rewards, subsidized by KEX inflation, each consensus node setup their own staking pool\u2019s ",(0,t.jsx)(n.code,{children:"commission"})," rate. The ",(0,t.jsx)(n.code,{children:"commission"})," rate is a decimal value that cannot be set above ",(0,t.jsx)(n.code,{children:"0.5"})," (50%) and under ",(0,t.jsx)(n.code,{children:"0.01"})," (1%) to prevent them from over-charging delegators or undercharging them in order to make ",(0,t.jsx)(n.em,{children:"smaller"})," consensus nodes unprofitable. Commissions over fee rewards from ",(0,t.jsx)(n.a,{href:"/184c11ed-4849-4ec5-acd0-f795b7abf467",children:"execution fees"}),", however, are homogeneous to all staking pools and defined by a governance managed ",(0,t.jsx)(n.code,{children:"validators_fee_share"})," network property. Likewise, ",(0,t.jsx)(n.code,{children:"validators_fee_share"})," is capped at ",(0,t.jsx)(n.code,{children:"0.5"})," (50%) but can be set to 0."]}),"\n",(0,t.jsx)(n.h2,{id:"9884c804414347b9ba608c8c9c006564",children:"Performance-based rewards"}),"\n",(0,t.jsx)(n.p,{children:"Consensus nodes are subject to a performance evaluation and the amount of rewards they will actually receive from their commission is pro-rata to their participation in the consensus. If they fail to sign consecutive blocks during a given period, some of those rewards are cut off and sent to the community treasury.  Outstanding block and fee rewards are then sent to the consensus node\u2019s staking pool and become claimable by their respective delegators in proportion to the derivative tokens they have. Notice in particular that consensus nodes can be rewarded twice: once through both previous commissions they take as consensus nodes for their service, and once more as delegator if they delegate some assets."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"For more information regarding network rewards distribution mechanisms please refer to the"})," ",(0,t.jsx)(n.a,{href:"/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:(0,t.jsx)(n.em,{children:"Fees and staking rewards distribution"})})," ",(0,t.jsx)(n.em,{children:"module.\nFor more information regarding KIRA\u2019s economics, please refer to the"})," ",(0,t.jsx)(n.em,{children:"***"})," ",(0,t.jsx)(n.em,{children:"section."})]}),"\n",(0,t.jsx)(n.h2,{id:"4d738a03dfa44aa2bc1482fe5e6114a4",children:"Consensus nodes ranks and statuses"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The status of a consensus node and the status of its staking pool are two distinct things. Consensus nodes that have not created a staking pool or have disabled it can still participate in the consensus process and produce blocks, but they will not be eligible for any rewards."})}),"\n",(0,t.jsxs)(n.p,{children:["KIRA network uses a ",(0,t.jsx)(n.a,{href:"/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:"ranking system"})," to incentivize consensus nodes to stay online, or ",(0,t.jsx)(n.code,{children:"active"}),", and create a friendly, competitive environment. The ranking is based on the number of blocks a consensus node produces and the number of missed blocks. If a consensus node signs a block, their rank increases. If a consensus node consecutively fails to sign a block for a certain number of times, they are deemed offline, or ",(0,t.jsx)(n.code,{children:"inactive"}),", and their rank decreases. The ranking system also includes a mechanism for consensus nodes to temporarily pause their node without affecting their rank, and for the governance to reset all ranks periodically. Inactive consensus nodes are removed from the consensus node set, cannot produce blocks and are unable to perform some actions such as editing their staking pool until they signal they are ready to be active again. If a consensus node is inactive, delegators cannot delegate any tokens; they can only undelegate their stake."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"For more information regarding consensus nodes ranking system please refer to the"})," ",(0,t.jsx)(n.a,{href:"/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:(0,t.jsx)(n.em,{children:"Consensus nodes ranks & statuses"})})," ",(0,t.jsx)(n.em,{children:"section of KIRA\u2019s slashing module."})]}),"\n",(0,t.jsx)(n.h2,{id:"326c9ccbe2aa4040adb5182e269872b2",children:"Consensus node FAQ"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://hub.cosmos.network/main/validators/validator-faq.html",children:"Cosmos Validator FAQ"})," provides a wealth of information about being a consensus node for anyone interested in learning more about this role."]}),"\n",(0,t.jsx)(n.h1,{id:"0ebbc1da2a434d80be94371717737f36",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Staking pool properties"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"NAME"})}),(0,t.jsx)(n.th,{children:"TYPE"}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsx)(n.td,{children:"Pool\u2019s ID"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"commission"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsxs)(n.td,{children:["Defines the staking pool\u2019s commission rate over block rewards (cf. ",(0,t.jsx)(n.a,{href:"/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:"Untitled"}),")"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"enabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"boolean"})})}),(0,t.jsxs)(n.td,{children:["Defines if the pool is enabled or disabled. If set to ",(0,t.jsx)(n.code,{children:"false"})," the pool doesn\u2019t accumulate any reward and delegators are only able to unstake."]})]})]})]}),"\n",(0,t.jsx)(n.h1,{id:"b3d08c63c9754edd925df694e86eeeee",children:"CLI syntax & examples"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,t.jsx)(n.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,t.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,t.jsx)(n.em,{children:"documentation for more details."})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$SIGNER"})})," ",(0,t.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,t.jsx)(n.em,{children:"and"})," ",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,t.jsx)(n.em,{children:"section"})]})}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(i.Z,{value:"tab",label:"Tab",children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"claim-validator-seat"})}),(0,t.jsx)(n.th,{children:"Submit a transaction to claim a consensus node seat in KIRA\u2019s consensus node set."})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"upsert-staking-pool"})}),(0,t.jsx)(n.td,{children:"Submit a transaction to create or edit a staking pool as a consensus node."})]})})]}),(0,t.jsx)(n.h3,{id:"claiming-a-consensus-node-seat",children:(0,t.jsx)(n.strong,{children:"Claiming a Consensus Node Seat"})}),(0,t.jsxs)(n.p,{children:["To claim a seat in the consensus node set, use the ",(0,t.jsx)(n.code,{children:"claim-validator-seat"})," CLI command. This requires a ",(0,t.jsx)(n.code,{children:"2"})," permission, obtainable through governance (mainnet) or a sudo account (testnet). Ensure your node's unique moniker identifier is pre-set, via the ",(0,t.jsx)(n.a,{href:"/d482180d-165a-4c09-8c32-167f061ceb92",children:"Identity Registrar"})," module, or provide it directly in the CLI command."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flags"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$MONIKER"}),": Moniker identifier of the account claiming a consensus node seat."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$PUBKEY"}),": Public key of the account claiming a consensus node seat."]}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid tx customstaking claim-validator-seat \\\n--from=$SIGNER $FLAGS_TX \\\n--moniker=$MONIKER [ --pubkey=$PUBKEY ]\n"})}),(0,t.jsxs)(n.p,{children:["To confirm a successful claim, use the ",(0,t.jsx)(n.a,{href:"/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b",children:(0,t.jsx)(n.code,{children:"validator"})})," query which should return the following:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "val_key": "kiravaloper1q0fkns62jl4mfxavxug4rvsp7d4770mfkzupzp",\n  "pub_key": {\n    "@type": "/cosmos.crypto.ed25519.PubKey",\n    "key": "YMPiwZecoXe2m7UrO3hJtl51lYrMCGS+rlGuN1I7dpA="\n  },\n  "status": "ACTIVE",\n  "rank": "49",\n  "streak": "49"\n}\n'})}),(0,t.jsx)(n.h3,{id:"creatingediting-a-staking-pool",children:(0,t.jsx)(n.strong,{children:"Creating/Editing a Staking Pool"})}),(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:(0,t.jsx)(n.code,{children:"active"})})," consensus node can use the ",(0,t.jsx)(n.code,{children:"upsert-staking-pool"})," transaction to create or edit its staking pool. The commission rate must be within ",(0,t.jsx)(n.code,{children:"0.01"})," (1%) to ",(0,t.jsx)(n.code,{children:"0.5"})," (50%)."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Args"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$VAL"}),": Address of the consensus node (",(0,t.jsx)(n.code,{children:"kiravaloper..."}),")."]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flags"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$COMMISSION"}),": Commission rate of the staking pool."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$ENABLED"}),": Status of the staking pool (default=",(0,t.jsx)(n.code,{children:"true"}),")."]}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid tx multistaking upsert-staking-pool \\\n--from=$SIGNER $FLAGS_TX \\\n--commission=$COMMISSION --enabled=$ENABLED \\\n$VAL\n"})})]}),(0,t.jsxs)(i.Z,{value:"queries",label:"Queries",children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"validator"})}),(0,t.jsxs)(n.th,{children:["Query an active consensus node\u2019s information ",(0,t.jsx)(n.em,{children:"(val key"}),", ",(0,t.jsx)(n.em,{children:"rank, active status, streak)"})," using filters."]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"validators"})}),(0,t.jsx)(n.td,{children:"Query all existing consensus nodes using specific filters."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pools"})}),(0,t.jsxs)(n.td,{children:["Query all existing staking pools and return their respective parameters (",(0,t.jsx)(n.em,{children:"enabled, commission)"})," and current metrics (",(0,t.jsx)(n.em,{children:"total staked tokens"}),", ",(0,t.jsx)(n.em,{children:"total accumulated rewards"}),", \u2026)."]})]})]})]}),(0,t.jsx)(n.h3,{id:"consensus-node-information",children:(0,t.jsx)(n.strong,{children:"Consensus Node Information"})}),(0,t.jsx)(n.p,{children:"Retrieve information about all consensus nodes, including their address, status, streak, and rank, with the following queries."}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flags"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$ADDR"}),": Account address."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$VAL"}),": Node address."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$MONIKER"}),": Moniker identifier."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$STATUS"}),": Node status."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$PKEY"}),": Public key."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$PROP"}),": Proposer."]}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid query customstaking validators [--addr=$ADDR || --val-addr=$VAL || --moniker=$MONIKER || --status=$STATUS || --pubkey=$PKEY || --proposer=$PROP] $FLAGS_QR | jq\n"})}),(0,t.jsx)(n.p,{children:"Query a specific consensus node\u2019s information using either its account address, its node address or its moniker."}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flags"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$ADDR"}),": Account address."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$VAL"}),": Node address."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$MONIKER"}),": Moniker identifier."]}),"\n"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid query customstaking validator [--addr=$ADDR || --val-addr=$VAL || --moniker=$MONIKER] $FLAGS_QR | jq\n"})}),(0,t.jsx)(n.h3,{id:"staking-pool-information",children:(0,t.jsx)(n.strong,{children:"Staking Pool Information"})}),(0,t.jsx)(n.p,{children:"Query real-time metrics and parameters of all existing staking pools."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sekaid query multistaking pools $FLAGS_QR | jq\n"})})]}),(0,t.jsx)(i.Z,{value:"governance",label:"Governance",children:(0,t.jsx)(n.p,{children:"There is no governance proposal for this sub-module."})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>i});s(7294);var t=s(6905);const r={tabItem:"tabItem_Ymn6"};var a=s(5893);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>y});var t=s(7294),r=s(6905),a=s(2466),i=s(6550),o=s(469),c=s(1980),d=s(7392),l=s(12);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=u(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[d,h]=f({queryString:s,groupId:r}),[b,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,l.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),x=(()=>{const e=d??b;return m({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),p(e)}),[h,p,a]),tabValues:a}}var p=s(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(5893);function j(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),l=e=>{const n=e.currentTarget,s=c.indexOf(n),r=o[s].value;r!==t&&(d(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:l,...a,className:(0,r.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function k(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(k,{...e,...n})]})}function y(e){const n=(0,p.Z)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(7294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);