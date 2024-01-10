"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4427],{8843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(85893),o=n(11151);const a={id:"index-functions",title:"Indexing Functions",sidebar_label:"Indexing Functions"},s=void 0,r={id:"bos/queryapi/index-functions",title:"Indexing Functions",description:"QueryAPI is a fully managed service that allows you to create and manage indexers on-chain seamlessly.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/queryapi/index-function.md",sourceDirName:"bos/queryapi",slug:"/bos/queryapi/index-functions",permalink:"/ko/bos/queryapi/index-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/queryapi/index-function.md",tags:[],version:"current",frontMatter:{id:"index-functions",title:"Indexing Functions",sidebar_label:"Indexing Functions"},sidebar:"indexers",previous:{title:"Best Practices",permalink:"/ko/bos/queryapi/best-practices"},next:{title:"Context object",permalink:"/ko/bos/queryapi/context-object"}},c={},l=[{value:"Indexing",id:"indexing",level:2},{value:"Contract filters",id:"contract-filters",level:2},{value:"Single contract filter",id:"single-contract-filter",level:4},{value:"Multiple contracts filter",id:"multiple-contracts-filter",level:4},{value:"Feed-indexer logic",id:"feed-indexer-logic",level:2},{value:"Mutations in GraphQL",id:"mutations-in-graphql",level:2},{value:"Create a NEAR component from query",id:"create-a-near-component-from-query",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"QueryAPI is a fully managed service that allows you to create and manage indexers on-chain seamlessly."})}),"\n",(0,i.jsx)(t.h2,{id:"indexing",children:"Indexing"}),"\n",(0,i.jsxs)(t.p,{children:["Let's review a ",(0,i.jsx)(t.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=roshaan.near/demo-indexer",children:"very simple indexer"}),", which will help you to understand how the indexer's indexing logic works."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:"title=indexingLogic.js",children:'import { Block } from "@near-lake/primitives";\n\n/**\n * getBlock(block, context) applies your custom logic to a Block on Near and commits the data to a database.\n *\n * @param {block} Block - A Near Protocol Block\n * @param {context} - A set of helper methods to retrieve and commit state\n */\nasync function getBlock(block: Block, context) {\n  const h = block.header().height;\n  await context.set("height", h);\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"getBlock()"})," function, you're given a block, which is a block on the Near blockchain, as well as a ",(0,i.jsx)(t.code,{children:"context"})," object, which gives you a set of helper methods to be able to commit what you want to the database that QueryAPI has provisioned for you."]}),"\n",(0,i.jsxs)(t.p,{children:["The code is going into the header of the ",(0,i.jsx)(t.code,{children:"block"})," and getting the block's ",(0,i.jsx)(t.code,{children:"height"}),", and then is using the ",(0,i.jsx)(t.code,{children:"context"})," object to set a key value store."]}),"\n",(0,i.jsx)(t.p,{children:"Next, if you check out the database schema:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",metastring:"title=schema.sql",children:'CREATE TABLE\n  "indexer_storage" (\n    "function_name" TEXT NOT NULL,\n    "key_name" TEXT NOT NULL,\n    "value" TEXT NOT NULL,\n    PRIMARY KEY ("function_name", "key_name")\n  )\n'})}),"\n",(0,i.jsxs)(t.p,{children:["It's a very simple schema where you can store the ",(0,i.jsx)(t.code,{children:"function_name"}),", ",(0,i.jsx)(t.code,{children:"key_name"}),", and ",(0,i.jsx)(t.code,{children:"value"}),"."]}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["That's all this indexer function is doing: it sets the ",(0,i.jsx)(t.code,{children:"height"})," value equal to the current block's height. :::## Local Debug Mode"]}),(0,i.jsxs)(t.p,{children:["While you're iterating on your indexer development, it's critical to have some type of debugging functionality to be able to test with, and the ",(0,i.jsx)(t.em,{children:"Debug Mode"})," is very helpful for that."]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"QueryAPI Dashboard",src:n(99223).Z+"",width:"2692",height:"956"})}),(0,i.jsxs)(t.p,{children:["For example, if you want to test the ",(0,i.jsx)(t.a,{href:"#indexing",children:"simple indexer"})," explained in the previous section using the local debugging mode:"]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Enable ",(0,i.jsx)("kbd",{children:"Debug Mode"})," on the ",(0,i.jsx)(t.strong,{children:"Indexer Editor"})]}),"\n",(0,i.jsxs)(t.li,{children:["Add a block to your debug list (e.g., ",(0,i.jsx)(t.code,{children:"97779559"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"Go into your web browser's Console"}),"\n",(0,i.jsxs)(t.li,{children:["Finally, click ",(0,i.jsx)("kbd",{children:"Play"}),"."]}),"\n"]}),(0,i.jsxs)(t.p,{children:["On your browser's Console, you should see the indexer's debug execution where it sets the ",(0,i.jsx)(t.code,{children:"height"})," key to ",(0,i.jsx)(t.code,{children:"97779559"}),":"]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"QueryAPI Indexer Dashboard",src:n(16147).Z+"",width:"1590",height:"384"})}),(0,i.jsx)(t.admonition,{title:"Local tests",type:"info",children:(0,i.jsxs)(t.p,{children:["All debug mode tests are happening ",(0,i.jsx)(t.strong,{children:"locally"}),", so they do not reach the database. All your queries and mutations will return empty objects."]})})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["You can also click ",(0,i.jsx)("kbd",{children:"Follow the Network"})," and it will show how your indexer logic works throughout."]})}),"\n",(0,i.jsx)(t.h2,{id:"contract-filters",children:"Contract filters"}),"\n",(0,i.jsx)(t.p,{children:"A contract filter is used by QueryAPI to do backend optimizations to help do historical indexing faster. While creating an indexer, when you define a contract filter, QueryAPI will send any single transaction event that passes this filter to your indexer function so you can index it."}),"\n",(0,i.jsxs)(t.p,{children:["If you only want to index events from a single contract, simply define the contract name on the ",(0,i.jsx)(t.strong,{children:"Contract Filter"})," text box. In some cases you might want to either support indexing on multiple contracts, or simply support every single contract that exists on the Near blockchain."]}),"\n",(0,i.jsx)(t.h4,{id:"single-contract-filter",children:"Single contract filter"}),"\n",(0,i.jsxs)(t.p,{children:["For example, if you check out the ",(0,i.jsx)(t.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=roshaan.near/demo-indexer",children:"simple indexer"}),", you'll see that in this case you have a ",(0,i.jsx)(t.code,{children:"social.near"})," contract filter. In this example, the indexer is only concerned on indexing events from ",(0,i.jsx)(t.code,{children:"social.near"}),"'s contract."]}),"\n",(0,i.jsx)(t.h4,{id:"multiple-contracts-filter",children:"Multiple contracts filter"}),"\n",(0,i.jsxs)(t.p,{children:["For example, if you want to index all the contracts from AstroDAO, where there is an account created for each and every different DAO, you should define ",(0,i.jsx)(t.code,{children:"*.sputnik-dao.near"})," as the contract filter. Likewise, if you want to get events from every contract on the blockchain, simply define ",(0,i.jsx)(t.code,{children:"*"})," as the filter."]}),"\n",(0,i.jsx)(t.h2,{id:"feed-indexer-logic",children:"Feed-indexer logic"}),"\n",(0,i.jsx)(t.p,{children:"Then we call context.graphql, which allows us to make arbitrary mutations and queries to our database that we provision for you. If you're interested in how to create GraphQL queries, there's a whole bunch of resources online. In this case, we are passing in our mutation data, which has a post object, and it's inserting it inside Postgres, I mean, inside of Postgres using GraphQL. But it's very easy to create these mutations."}),"\n",(0,i.jsx)(t.h2,{id:"mutations-in-graphql",children:"Mutations in GraphQL"}),"\n",(0,i.jsx)(t.p,{children:"If you go to the GraphiQL tab, you can access the GraphiQL Explorer that provides a user friendly GraphQL playground, where you can view and create queries and mutations based on the DB schema that you defined for the indexer."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"QueryAPI Indexer Dashboard",src:n(47455).Z+"",width:"2100",height:"940"})}),"\n",(0,i.jsx)(t.p,{children:"You can easily set some fields and select the returning data that you want, and the tool will build a query on the mutation panel on the right. Then you can copy the resulting query, either in your JavaScript code so that you pass actual data manually, or you pass in the mutation data object as a second parameter."}),"\n",(0,i.jsxs)(t.p,{children:["For example, if you go and add a new mutation, click ",(0,i.jsx)("kbd",{children:"+"}),", then you can do a bunch of actions here, such as creating, deleting, or inserting posts into your table."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Playground",src:n(54356).Z+"",width:"2560",height:"1374"})}),"\n",(0,i.jsxs)(t.p,{children:["If you want to test your mutation, using ",(0,i.jsx)(t.a,{href:"#local-debug-mode",children:"Debug Mode"})," you can add a specific block to the list, and then play it to see how it works. Based on the indexer logic you defined, you'll get a call to the GraphQL mutation with the object and data passed into it."]}),"\n",(0,i.jsx)(t.admonition,{title:"Video Walkthrough",type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Tip:"})," watch the video on how to ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=VwO6spk8D58&t=781s",children:"create mutations in GraphQL"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"create-a-near-component-from-query",children:"Create a NEAR component from query"}),"\n",(0,i.jsx)(t.p,{children:"Creating a NEAR component from a GraphQL query is simple when using the GraphQL Playground. Just follow these steps:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"go to the GraphiQL tab"}),"\n",(0,i.jsx)(t.li,{children:"select the query that you want to use"}),"\n",(0,i.jsxs)(t.li,{children:["click on the ",(0,i.jsx)("kbd",{children:"Show GraphiQL Code Exporter"})," button"]}),"\n",(0,i.jsx)(t.li,{children:"get some default code here, copy it,"}),"\n",(0,i.jsx)(t.li,{children:"go to the NEAR sandbox, paste it."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This will set up some boilerplate code to execute the GraphQL query, add the query that you had in your playground and then call that query, extract the data and render it using the render data function."}),"\n",(0,i.jsxs)(t.p,{children:["Once you have the NEAR component code, you can test it out by going to ",(0,i.jsx)(t.a,{href:"https://near.org/sandbox",children:"the sandbox"}),", pasting the generated code, and then selecting ",(0,i.jsx)("kbd",{children:"Component Preview"}),". Next, you can create a nice UI over this boilerplate code, and publish your new NEAR component."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},54356:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/QAPIScreen-03cb0756572d56815b027f3ed320ab00.gif"},99223:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/QAPIdebug-3b3feca48be98705da3a6a8a2622cce2.png"},16147:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/QAPIdebuglog-cf19b914898beae84ead0c8784849fe5.png"},47455:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/QAPIgraphiql-18e6ea0aaae4a46fc6a84c7020f54397.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(67294);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);