"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3822],{1407:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(85893),a=i(11151);const r={id:"optimism",title:"Container diagram for optimism",sidebar_label:"Optimism"},o=void 0,s={id:"data-availability/optimism",title:"Container diagram for optimism",description:"We have integrated with the Optimism OP stack. Utilizing the Batcher for submissions to NEAR and the proposer for submitting NEAR commitment data to Ethereum.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-availability/optimism.md",sourceDirName:"data-availability",slug:"/data-availability/optimism",permalink:"/zh-CN/data-availability/optimism",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/data-availability/optimism.md",tags:[],version:"current",frontMatter:{id:"optimism",title:"Container diagram for optimism",sidebar_label:"Optimism"},sidebar:"data-availability",previous:{title:"Integrations",permalink:"/zh-CN/data-availability/integrations"},next:{title:"CDK Stack",permalink:"/zh-CN/data-availability/cdk-integration"}},m={},c=[{value:"Diagram for Optimism",id:"diagram-for-optimism",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We have integrated with the Optimism OP stack. Utilizing the ",(0,n.jsx)(t.code,{children:"Batcher"})," for submissions to NEAR and the ",(0,n.jsx)(t.code,{children:"proposer"})," for submitting NEAR commitment data to Ethereum."]}),"\n",(0,n.jsxs)(t.p,{children:["The folder ",(0,n.jsx)(t.a,{href:"https://github.com/near/rollup-data-availability/tree/main/op-stack",children:(0,n.jsx)(t.code,{children:"./op-stack"})})," in our repo contains a few projects:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"optimism"}),": Sequencer, Batcher, Proposer, etc. This is the rollup node."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"da-rpc-go"}),": Formerly ",(0,n.jsx)(t.code,{children:"da-rpc"}),". This is the go package for integrating with ",(0,n.jsx)(t.code,{children:"da-rpc-sys"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"diagram-for-optimism",children:"Diagram for Optimism"}),"\n",(0,n.jsx)(t.mermaid,{value:'C4Container\n    title NEAR Data Availability System Containers for Optimism\n    \n    Enterprise_Boundary(b3, "NEAR") {\n        System_Ext(SystemNear, "NEAR")     \n    }\n\n    Enterprise_Boundary(b1, "Ethereum") {\n        Component(L2Output, "L2 Output Oracle")        \n    }     \n\n    \n    Container_Boundary(b2, "Rollup") {\n        Component(DaClient, "NEAR DA Client", "Submits/Gets blob data, creates commitments")\n\n        Container(Proposer, "Proposer", "Propose L2 outputs and DA commitments")\n        Container(Batcher, "Batcher", "Create frame channels and send batches")\n        Container(Sequencer, "Sequencer", "Derives blocks, execute transactions")\n\n    }\n        \n    Rel_U(DaClient, SystemNear, "Submit/Get blob data")\n    Rel(Batcher, DaClient, "Post batches")\n    Rel(Sequencer, DaClient, "Retrieve Blobs")\n    BiRel(Batcher, Sequencer, "Write FrameRef")\n\n    Rel(Proposer, Sequencer, "Reads L2 outputs and FrameRef")\n    Rel_D(Proposer, L2Output, "FrameRef") \n    \n    UpdateLayoutConfig($c4ShapeInRow="2", $c4BoundaryInRow="2")\n\n    System_Ext(FraudProofs, "Fraud proving mechanism")'})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>o});var n=i(67294);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);