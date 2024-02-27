"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[364],{3197:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=n(5893),r=n(1151),i=n(4866),l=n(5162);const c={title:"Polls",sidebar_position:5,slug:"/f5e18e49-927a-4a4f-ae70-bb9fc5606243"},o=void 0,d={id:"Stack/SEKAI--Backend/Modules/Governance/Polls",title:"Polls",description:"Concept",source:"@site/tabs/Docs/Stack/SEKAI--Backend/Modules/Governance/Polls.mdx",sourceDirName:"Stack/SEKAI--Backend/Modules/Governance",slug:"/f5e18e49-927a-4a4f-ae70-bb9fc5606243",permalink:"/docs.kira.network/f5e18e49-927a-4a4f-ae70-bb9fc5606243",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Polls",sidebar_position:5,slug:"/f5e18e49-927a-4a4f-ae70-bb9fc5606243"},sidebar:"defaultSidebar",previous:{title:"Roles & Permissions",permalink:"/docs.kira.network/980ceb2f-9bc1-4133-aad0-bfb8a5c55536"},next:{title:"Network Properties",permalink:"/docs.kira.network/b9b95792-b936-4603-8a46-15566f24e3c0"}},a={},h=[{value:"Concept",id:"4a059df6e57742028ba3441c9e5b0abd",level:2},{value:"Proposing &amp; voting rights",id:"5cba6ad7964f4ecca8e5dcf67be3762b",level:3},{value:"Decision-making process",id:"25e477b20c7d417eb03cec979abace5d",level:3},{value:"Other relevant network properties",id:"d0c478a7d18c4ce690d835ed6fba620c",level:3},{value:"Parameters",id:"2ae4e0f3094f431793822d60f251dae8",level:2},{value:"Polls parameters",id:"b19d8cba68b0462d8abb0101f2a4e6c1",level:4},{value:"Vote options id",id:"b71c02cda9824b75b833f01a0c7a9fae",level:4},{value:"Polls status",id:"c197e6b006d4495ab3c54944f65fc395",level:4},{value:"Cli syntax &amp; examples",id:"ee6d816aadcd4d328734d41b24214a77",level:2},{value:"Transactions",id:"53e6aec0ccce4df5b49416ddff3cbf1b",level:2},{value:"Create poll",id:"0f28f81a42fa40e6b898566730538466",level:4},{value:"Vote on a poll",id:"72a9d254517a43acb3d4d27d8f743430",level:4},{value:"Queries",id:"0d0d943855964c4ea064602fe4917551",level:2},{value:"Query polls by address",id:"2226e5df59e041e5aee56dd9a328cdb0",level:4},{value:"Query poll votes by id",id:"000ea9f1328542fb90c9c18599dfe9c8",level:4},{value:"Governance",id:"83525905e45340f3b595111c93181b71",level:2}];function x(e){const s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",math:"math",mfrac:"mfrac",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"4a059df6e57742028ba3441c9e5b0abd",children:"Concept"}),"\n",(0,t.jsx)(s.p,{children:"Signaling proposals are a typical practice in blockchain governance activities. They provide a means for the community to gauge sentiment or reach consensus on a particular issue or suggestion without necessitating changes to the blockchain's state. However, these proposals simplify multifaceted issues into binary 'yes/no' votes, potentially distorting the accurate representation of varied community perspectives on complex issues. Additionally, they may slow down decision-making and introduce inefficiency to the overall governance process. Such potential drawbacks have led some projects, such as Ethereum and Celestia, to favor off-chain governance, a shift that arguably contradicts the decentralization principle."}),"\n",(0,t.jsxs)(s.p,{children:["Because of KIRA network's ",(0,t.jsx)(s.a,{href:"/d6f8543a-3b76-44a8-8fab-eeafcef56c8e",children:"unique governance ranking system"}),", the inclusion of signaling proposals adds another layer of complexity, potentially skewing the decision-making process as votes could be influenced more by score preservation than by authentic opinions. To circumvent these challenges, KIRA network introduces the Poll module, which offers a more inclusive and flexible mechanism for consensus. Unlike traditional signaling proposals, a Poll Proposal allows a select group of individuals to either present their own voting options or vote on pre-existing ones. This approach caters to a wide array of use cases and fosters a more accurate reflection of the diverse interests across various scenarios, such as agreeing on upgrade timeframes, selecting group administrators, or deciding on future changes to the network properties registrar."]}),"\n",(0,t.jsx)(s.h3,{id:"5cba6ad7964f4ecca8e5dcf67be3762b",children:"Proposing & voting rights"}),"\n",(0,t.jsxs)(s.p,{children:["For any users to initiate a Poll, the necessary permission, represented by the ",(0,t.jsx)(s.strong,{children:"[Problem Internal Link]"}),", must be directly assigned to their account or embedded within a Role associated with their account. This permission is automatically granted to ",(0,t.jsx)(s.a,{href:"/d6f8543a-3b76-44a8-8fab-eeafcef56c8e",children:"Councilors"})," upon claiming their Councillor Seat. Contrary to KIRA ",(0,t.jsx)(s.a,{href:"/25d26925-50ce-4a4f-836b-fc8486ef8b05",children:"Proposals"}),", Polls do not have a corresponding voting permission. Rather, the user submitting the proposal determines which ",(0,t.jsx)(s.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:"roles"})," can vote on the particular Poll by setting up a whitelist."]}),"\n",(0,t.jsx)(s.h3,{id:"25e477b20c7d417eb03cec979abace5d",children:"Decision-making process"}),"\n",(0,t.jsxs)(s.p,{children:["The decision-making process for the Poll module operates in line with the principles established by the ",(0,t.jsx)(s.a,{href:"/25d26925-50ce-4a4f-836b-fc8486ef8b05",children:"Proposals logic"}),", while accommodating the unique requirements of this module. This process is guided by the following key points:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Voting Eligibility:"})," All whitelisted roles can cast a vote per poll. This vote can be changed later on by sending another voting transaction."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Vote Options:"})," A single vote can correspond to one or many voting options, as outlined by the ",(0,t.jsx)(s.code,{children:"options.choices"})," variable."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Custom Choices:"})," Voters are permitted to cast custom choices if the ",(0,t.jsx)(s.code,{children:"options.count"})," exceeds the ",(0,t.jsx)(s.code,{children:"options.values.length"}),". Such custom choices are subsequently added to ",(0,t.jsx)(s.code,{children:"options.values"}),", enabling other users to vote on them. However, each voter can only cast a vote for a specific option once."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Abstain and Veto:"})," Regardless of the defined ",(0,t.jsx)(s.code,{children:"options.values"}),", voters are allowed to vote ",(0,t.jsx)(s.code,{children:"abstain"})," or ",(0,t.jsx)(s.code,{children:"veto"}),". These are reserved values and don't have to match the ",(0,t.jsx)(s.code,{children:"options.type"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Proposal Timeline:"})," Poll proposals do not have an enactment time. A proposal can neither pass, be rejected, nor vetoed before its ",(0,t.jsx)(s.code,{children:"voting_end_time"})," time has elapsed, unless all eligible voters have cast their votes and the result is decisive."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Quorum Requirement:"})," A poll necessitates a minimum number of votes, or a quorum, to be considered valid. The quorum is essential for ensuring adequate participation and representation in the decision-making process."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["The poll minimum quorum percentage is the same as the proposal quorum, 33% by default and is configurable by governance via the ",(0,t.jsx)(s.code,{children:"vote_quorum"})," ",(0,t.jsx)(s.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network property"}),"."]})}),"\n",(0,t.jsx)(s.p,{children:"The outcome of a Poll proposal is determined based on the following rules:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Outcome"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Condition"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Passed"})}),(0,t.jsxs)(s.td,{children:["If quorum is reached and more than ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsxs)(s.mfrac,{children:[(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mn,{children:"2"})]})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"1\\over 2"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,t.jsx)(s.span,{className:"mfrac",children:(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsxs)(s.span,{className:"vlist",style:{height:"0.8451em"},children:[(0,t.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"2"})})})]}),(0,t.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,t.jsxs)(s.span,{style:{top:"-3.394em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"1"})})})]})]}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.345em"},children:(0,t.jsx)(s.span,{})})})]})}),(0,t.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})})]})," (>50%) of all votes are for any ",(0,t.jsx)(s.code,{children:"Custom"})," options or ",(0,t.jsx)(s.code,{children:"Abstain"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Rejected"})}),(0,t.jsxs)(s.td,{children:["If quorum is reached and there is a tie for the highest vote count between two or more options (indicating an indecisive result), or if the sum of ",(0,t.jsx)(s.code,{children:"Abstain"})," and ",(0,t.jsx)(s.code,{children:"NoWithVeto"})," votes is more than or equal to ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsxs)(s.mfrac,{children:[(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mn,{children:"2"})]})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"1\\over 2"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,t.jsx)(s.span,{className:"mfrac",children:(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsxs)(s.span,{className:"vlist",style:{height:"0.8451em"},children:[(0,t.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"2"})})})]}),(0,t.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,t.jsxs)(s.span,{style:{top:"-3.394em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"1"})})})]})]}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.345em"},children:(0,t.jsx)(s.span,{})})})]})}),(0,t.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})})]})," (>=50%) of all votes."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"RejectedWithVeto"})}),(0,t.jsxs)(s.td,{children:["More than or equal to ",(0,t.jsx)(s.code,{children:"veto_threshold"})," percentage of votes are veto."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"QuorumNotReached"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"vote_quorum"})," was not reached before the end of the poll."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"d0c478a7d18c4ce690d835ed6fba620c",children:"Other relevant network properties"}),"\n",(0,t.jsxs)(s.p,{children:["The following ",(0,t.jsx)(s.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network properties"})," establish limits over some of the Poll parameters:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"max_proposal_poll_option_size"})," denotes the maximum character size of an individual Poll option and is set at ",(0,t.jsx)(s.code,{children:"64"})," by default."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"max_proposal_poll_option_count"})," sets the maximum number of custom options a Poll can have and is set at ",(0,t.jsx)(s.code,{children:"128"})," by default."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"max_proposal_reference_size"})," is used to indicate the maximum reference size in the poll and has a default value set at ",(0,t.jsx)(s.code,{children:"512"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"max_proposal_checksum_size"})," represents the maximum checksum size in the poll and is set to default at ",(0,t.jsx)(s.code,{children:"128"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"2ae4e0f3094f431793822d60f251dae8",children:"Parameters"}),"\n",(0,t.jsx)(s.h4,{id:"b19d8cba68b0462d8abb0101f2a4e6c1",children:"Polls parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"NAME"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"TYPE"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"EXAMPLE"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"poll_id"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"uint64"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"1"})}),(0,t.jsx)(s.td,{children:"The unique identifier of the poll."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"creator"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"cosmos-sdk/types.AccAddress"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"kira1d52r..."})}),(0,t.jsx)(s.td,{children:"The account address of the poll's creator."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"title"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"some title"})}),(0,t.jsxs)(s.td,{children:["The title of the poll, limited to 128 characters by default as defined by the ",(0,t.jsx)(s.code,{children:"max_proposal_title_size"})," network property."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"description"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"Are you the boss of me now?"})}),(0,t.jsxs)(s.td,{children:["The description of the poll, limited to 1024 characters by default as defined by the ",(0,t.jsx)(s.code,{children:"max_proposal_description_size"})," network property."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"reference"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"bafybeifiixdxq4cli6qxib5zfiky7rilb6k66f336nymj4jty6tdsiixre"})}),(0,t.jsxs)(s.td,{children:["Reference to the subject matter of the poll, potentially an IPFS CID or URL. Limited to 512 characters by default, by the ",(0,t.jsx)(s.code,{children:"max_proposal_reference_size"})," network property."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"checksum"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"f5aca3b1fafffdcf22a30aafd3392e473592944da28515ae0a06afbc71c27b09"})}),(0,t.jsxs)(s.td,{children:["Checksum for the poll, ensuring data integrity. Limited to 128 characters by default, by the ",(0,t.jsx)(s.code,{children:"max_proposal_checksum_size"})," network property."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"roles"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"[]uint64"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"[1,2,...]"})}),(0,t.jsx)(s.td,{children:"The roles that are eligible to participate in the poll."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"options"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"PollOptions"})}),(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:"The list of available voting options in the poll."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"voting_end_time"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"google.protobuf.Timestamp"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"1678386530"})}),(0,t.jsx)(s.td,{children:"The timestamp indicating the end of the voting period for the poll."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"result"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_RESULT_PASSED (1)"})}),(0,t.jsx)(s.td,{children:"The result of the poll, updated after the voting period ends."})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"PollOptions type"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"NAME"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"TYPE"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"EXAMPLE"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"values"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"[]string"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'["yes","no","maybe","I dont know", "can you repeat the question?"]'})}),(0,t.jsxs)(s.td,{children:["The list of available voting options in the poll, each item limited to 64 characters as defined by the ",(0,t.jsx)(s.code,{children:"max_proposal_poll_option_size"})," network property."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"count"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"int"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"5"})}),(0,t.jsxs)(s.td,{children:["The maximum number of voting options that a poll can have, as defined by the ",(0,t.jsx)(s.code,{children:"max_proposal_poll_option_count"})," network property."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"type"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsxs)(s.td,{children:["The type of the options, all user supplied or predefined options must match this type. Possible types: ",(0,t.jsx)(s.code,{children:"string"}),", ",(0,t.jsx)(s.code,{children:"uint"}),", ",(0,t.jsx)(s.code,{children:"int"}),", ",(0,t.jsx)(s.code,{children:"float"}),", ",(0,t.jsx)(s.code,{children:"bool"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"choices"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"int"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"1"})}),(0,t.jsx)(s.td,{children:"The maximum number of choices that a voter can select, default is 1."})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"b71c02cda9824b75b833f01a0c7a9fae",children:"Vote options id"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"VOTE OPTION"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_VOTE_OPTION_UNSPECIFIED (0)"})}),(0,t.jsx)(s.td,{children:"No-op vote option."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_OPTION_ABSTAIN (1)"})}),(0,t.jsx)(s.td,{children:"Councilor has no strong opinion on the proposal, but wants to signify that they took note of it."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_OPTION_CUSTOM (2)"})}),(0,t.jsx)(s.td,{children:"Councilor has voted one or several custom option provided by the proposal."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_OPTION_NO_WITH_VETO (3)"})}),(0,t.jsx)(s.td,{children:"Councilor strongly disagrees with the poll and wants to prevent it from passing successfully, bypassing the majority vote requirements due to concerns highly impacting network operations or safety."})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"c197e6b006d4495ab3c54944f65fc395",children:"Polls status"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"STATUS"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_RESULT_UNKNOWN (0)"})}),(0,t.jsx)(s.td,{children:"Result of the proposal is not yet known/defined."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_RESULT_PASSED (1)"})}),(0,t.jsx)(s.td,{children:"Poll reached quorum with one of the options having majority votes and passed successfully."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_RESULT_REJECTED (2)"})}),(0,t.jsxs)(s.td,{children:["Proposal was rejected because abstain votes have majority or more than one ",(0,t.jsx)(s.code,{children:"options.values"})," have the highest and same number of votes (indecisive result)."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_RESULT_REJECTED_WITH_VETO (3)"})}),(0,t.jsxs)(s.td,{children:["Poll reached quorum but did not pass due to ",(0,t.jsx)(s.code,{children:"veto_threshold"})," being reached."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_PENDING (4)"})}),(0,t.jsx)(s.td,{children:"Poll is not finalized yet and is still awaiting votes."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"POLL_RESULT_QUORUM_NOT_REACHED (5)"})}),(0,t.jsxs)(s.td,{children:["Poll was rejected because it failed to reach ",(0,t.jsx)(s.code,{children:"vote_quorum"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"ee6d816aadcd4d328734d41b24214a77",children:"Cli syntax & examples"}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,t.jsx)(s.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,t.jsx)(s.em,{children:"Roles & Permissions"})})," ",(0,t.jsx)(s.em,{children:"documentation for more details."})," ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.code,{children:"$SIGNER"})})," ",(0,t.jsx)(s.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.code,{children:"$FLAGS_TX"})})," ",(0,t.jsx)(s.em,{children:"and"})," ",(0,t.jsxs)(s.em,{children:[(0,t.jsx)(s.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,t.jsx)(s.em,{children:"section"})]})}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(l.Z,{value:"transactions",label:"Transactions",children:[(0,t.jsx)(s.h2,{id:"53e6aec0ccce4df5b49416ddff3cbf1b",children:"Transactions"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.code,{children:"poll create"})}),(0,t.jsx)(s.th,{children:"Initiates the creation of a new poll."})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"poll vote"})}),(0,t.jsx)(s.td,{children:"Cast a vote on an existing poll."})]})})]}),(0,t.jsx)(s.h4,{id:"0f28f81a42fa40e6b898566730538466",children:"Create poll"}),(0,t.jsxs)(s.p,{children:["Create a new poll using the ",(0,t.jsx)(s.code,{children:"create"})," command."]}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Flags"})}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$TITLE"}),": The title of the poll."]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$DESCRIPTION"}),": The description of the poll, it can be a URL, text, etc."]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$REFERENCE"}),": IPFS CID or URL reference to file describing the poll and voting options in depth."]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$CHECKSUM"}),": Reference checksum."]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$OPTIONS"}),": The options for the poll in the format variant1, variant2, ..."]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$ROLES"}),": List of roles allowed to take part in the poll vote in the format role1, role2, ..."]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$COUNT"}),": Maximum number of voting options that a poll can have."]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$TYPE"}),": Type of the options, all user supplied or predefined options must match its type."]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$CHOICES"}),": Define the maximum number of choices a voter can select."]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$DURATION"}),": The duration of the poll."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sekaid tx customgov poll create \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION --reference=$REFERENCE --checksum=$CHECKSUM \\\n--options=$OPTIONS --roles=$ROLES --count=$COUNT --type=$TYPE \\\n--choices=$CHOICES --duration=$DURATION\n"})}),(0,t.jsx)(s.h4,{id:"72a9d254517a43acb3d4d27d8f743430",children:"Vote on a poll"}),(0,t.jsxs)(s.p,{children:["Cast a vote on an existing poll using the ",(0,t.jsx)(s.code,{children:"vote"})," command."]}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Args"})}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$POLL_ID"}),": The ID of the poll you wish to vote on."]}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$POLL_OPTION"}),": The option ID you are voting for."]}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Flags"})}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$CUSTOM_VALUE"}),": The custom poll value."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sekaid tx customgov poll vote $POLL_ID $POLL_OPTION \\\n--from=$SIGNER $FLAGS_TX \\\n--custom-value=$CUSTOM_VALUE\n"})})]}),(0,t.jsxs)(l.Z,{value:"queries",label:"Queries",children:[(0,t.jsx)(s.h2,{id:"0d0d943855964c4ea064602fe4917551",children:"Queries"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.code,{children:"query polls"})}),(0,t.jsx)(s.th,{children:"Lists polls created by a specific address."})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"query poll-votes"})}),(0,t.jsx)(s.td,{children:"Lists all votes of a specific poll using its ID."})]})})]}),(0,t.jsx)(s.h4,{id:"2226e5df59e041e5aee56dd9a328cdb0",children:"Query polls by address"}),(0,t.jsx)(s.p,{children:"Retrieve polls created by a specific address."}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Args"})}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$ADDRESS"}),": The account address."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sekaid query polls $ADDRESS $FLAGS_QR | jq\n"})}),(0,t.jsx)(s.h4,{id:"000ea9f1328542fb90c9c18599dfe9c8",children:"Query poll votes by id"}),(0,t.jsx)(s.p,{children:"Lists all votes for a specific poll using the poll\u2019s ID."}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Args"})}),(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$POLL_ID"}),": The unique identifier of the poll."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sekaid query poll-votes $POLL_ID $FLAGS_QR | jq\n"})})]}),(0,t.jsxs)(l.Z,{value:"governance",label:"Governance",children:[(0,t.jsx)(s.h2,{id:"83525905e45340f3b595111c93181b71",children:"Governance"}),(0,t.jsxs)(s.p,{children:["The duration of polls, which is determined by the ",(0,t.jsx)(s.code,{children:"voting_end_time"})," parameter, is shared with proposals. As a result, it can be adjusted using the ",(0,t.jsx)(s.code,{children:"set-proposal-durations-proposal"})," CLI found the ",(0,t.jsx)(s.a,{href:"/25d26925-50ce-4a4f-836b-fc8486ef8b05",children:"proposal sub-module"}),"."]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},5162:(e,s,n)=>{n.d(s,{Z:()=>l});n(7294);var t=n(6905);const r={tabItem:"tabItem_Ymn6"};var i=n(5893);function l(e){let{children:s,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:n,children:s})}},4866:(e,s,n)=>{n.d(s,{Z:()=>T});var t=n(7294),r=n(6905),i=n(2466),l=n(6550),c=n(469),o=n(1980),d=n(7392),a=n(12);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,d.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function j(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:n}=e;const r=(0,l.k6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(r.location.search);s.set(i,e),r.replace({...r.location,search:s.toString()})}),[i,r])]}function u(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,i=x(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!j({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:i}))),[d,h]=p({queryString:n,groupId:r}),[u,m]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,i]=(0,a.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),f=(()=>{const e=d??u;return j({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function g(e){let{className:s,block:n,selectedValue:t,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),a=e=>{const s=e.currentTarget,n=o.indexOf(s),r=c[n].value;r!==t&&(d(s),l(r))},h=e=>{let s=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:c.map((e=>{let{value:s,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>o.push(e),onKeyDown:h,onClick:a,...i,className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=u(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...e,...s}),(0,b.jsx)(v,{...e,...s})]})}function T(e){const s=(0,m.Z)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(s))}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>l});var t=n(7294);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);