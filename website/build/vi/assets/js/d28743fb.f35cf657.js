"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2044],{23560:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=r(85893),a=r(11151);const t={sidebar_label:"JS basic tutorial"},i="NEAR Lake indexer basic tutorial",l={id:"tutorials/indexer/js-lake-indexer",title:"NEAR Lake indexer basic tutorial",description:"near-examples/near-lake-raw-printer-js: source code for the tutorial on how to create an indexer that prints block height and number of shards",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/indexer/js-lake-indexer.md",sourceDirName:"3.tutorials/indexer",slug:"/tutorials/indexer/js-lake-indexer",permalink:"/vi/tutorials/indexer/js-lake-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/indexer/js-lake-indexer.md",tags:[],version:"current",frontMatter:{sidebar_label:"JS basic tutorial"},sidebar:"indexers",previous:{title:"Lake Primitive Types",permalink:"/vi/develop/lake/primitives"},next:{title:"Python tutorial",permalink:"/vi/tutorials/indexer/python-lake-indexer"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Create a project",id:"create-a-project",level:2},{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Setup TypeScript",id:"setup-typescript",level:2},{value:"Import <code>near-lake-framework</code>",id:"import-near-lake-framework",level:2},{value:"Create a config",id:"create-a-config",level:2},{value:"Create indexer handler",id:"create-indexer-handler",level:2},{value:"Starting the stream",id:"starting-the-stream",level:2},{value:"Compile and run",id:"compile-and-run",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"near-lake-indexer-basic-tutorial",children:"NEAR Lake indexer basic tutorial"}),"\n",(0,s.jsx)(n.admonition,{title:"Source code for the tutorial",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/near-examples/near-lake-raw-printer-js",children:(0,s.jsx)(n.code,{children:"near-examples/near-lake-raw-printer-js"})}),": source code for the tutorial on how to create an indexer that prints block height and number of shards"]})}),"\n",(0,s.jsxs)(n.p,{children:["Recently we have ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/near-lake-framework",children:"published a JavaScript version of the NEAR Lake Framework"})," on npmjs.org"]}),"\n",(0,s.jsx)(n.p,{children:"We want to empower you with a basic tutorial on how to use the JavaScript Library. Let's get started!"}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Before we get started, please, ensure you have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"nodejs"})," installed"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,s.jsx)(n.p,{children:"Create an indexer project:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir near-lake-raw-printer-js && cd near-lake-raw-printer-js\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now we're going to call ",(0,s.jsx)(n.code,{children:"npm init"}),", we can continue with the default values pressing Enter on every question in the interactive mode:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm init\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'version: (1.0.0)\ndescription:\nentry point: (index.js)\ntest command:\ngit repository:\nkeywords:\nauthor:\nlicense: (ISC)\nAbout to write to /Users/near/projects/near-lake-raw-printer-js/package.json:\n\n{\n  "name": "near-lake-raw-printer-js",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}\n\n\nIs this OK? (yes)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"package.json"})," is ready. Let's install ",(0,s.jsx)(n.code,{children:"near-lake-framework"})]}),"\n",(0,s.jsx)(n.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"near-lake-framework"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install near-lake-framework --save\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"typescript"})," as dev dependency"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install typescript --save-dev\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup-typescript",children:"Setup TypeScript"}),"\n",(0,s.jsxs)(n.p,{children:["Now we can create ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," for TypeScript settings:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"touch tsconfig.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"Paste the content to the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"title=tsconfig.json",children:'{\n  "compilerOptions": {\n    "lib": [\n      "ES2018",\n      "dom"\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now let's add the ",(0,s.jsx)(n.code,{children:"scripts"})," section to the ",(0,s.jsx)(n.code,{children:"package.json"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"scripts": {\n  "start": "tsc && node index.js"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After that your ",(0,s.jsx)(n.code,{children:"package.json"})," should look similar to:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"title=package.json",children:'{\n  "name": "near-lake-raw-printer",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "start": "tsc && node index.js"\n  },\n  "dependencies": {\n    "near-lake-framework": "^1.0.1"\n  },\n  "devDependencies": {\n    "typescript": "^4.6.4"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now let's create ",(0,s.jsx)(n.code,{children:"index.ts"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"touch index.ts\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"index.ts"})," in your favorite editor to start coding."]}),"\n",(0,s.jsxs)(n.h2,{id:"import-near-lake-framework",children:["Import ",(0,s.jsx)(n.code,{children:"near-lake-framework"})]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"index.ts"})," file let's import the necessary dependencies:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { startStream, types } from 'near-lake-framework';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We've imported the main function ",(0,s.jsx)(n.code,{children:"startStream"})," which will be called to actually run the indexer, and ",(0,s.jsx)(n.code,{children:"types"})," that hold the ",(0,s.jsx)(n.code,{children:"LakeConfig"})," type we need to contruct."]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-config",children:"Create a config"}),"\n",(0,s.jsxs)(n.p,{children:["To get indexer running we need to start it with a config. We need to create an instance of ",(0,s.jsx)(n.code,{children:"LakeConfig"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const lakeConfig: types.LakeConfig = {\n    s3BucketName: "near-lake-data-mainnet",\n    s3RegionName: "eu-central-1",\n    startBlockHeight: 63804051,\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"create-indexer-handler",children:"Create indexer handler"}),"\n",(0,s.jsxs)(n.p,{children:["Indexer will be streaming the ",(0,s.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/toc",children:(0,s.jsx)(n.code,{children:"StreamerMessage"})})," instances we need to handle according to our needs."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"near-lake-framework"})," JS library the handler have to be presented as a callback function. This function have to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"be asynchronous"}),"\n",(0,s.jsxs)(n.li,{children:["accept an argument of type ",(0,s.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/toc",children:(0,s.jsx)(n.code,{children:"StreamerMessage"})})]}),"\n",(0,s.jsxs)(n.li,{children:["return nothing (",(0,s.jsx)(n.code,{children:"void"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Creating the callback:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"async function handleStreamerMessage(streamerMessage: types.StreamerMessage): Promise<void> {\n    //\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"For this tutorial our requirement is to log the block height and the numer of shards. That's simple:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"async function handleStreamerMessage(streamerMessage: types.StreamerMessage): Promise<void> {\n    console.log(`\n        Block #${streamerMessage.block.header.height}\n        Shards: ${streamerMessage.shards.length}\n    `);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"starting-the-stream",children:"Starting the stream"}),"\n",(0,s.jsxs)(n.p,{children:["And the last thing to write is the call to ",(0,s.jsx)(n.code,{children:"startStream"})," with the config and pass the callback function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"(async () => {\n    await startStream(lakeConfig, handleStreamerMessage);\n})();\n"})}),"\n",(0,s.jsx)(n.p,{children:"That's it. Now we can compile the code and run it"}),"\n",(0,s.jsx)(n.h2,{id:"compile-and-run",children:"Compile and run"}),"\n",(0,s.jsx)(n.admonition,{title:"Credentials",type:"danger",children:(0,s.jsxs)(n.p,{children:["To be able to access the data from ",(0,s.jsx)(n.a,{href:"/tools/realtime#near-lake-indexer",children:"NEAR Lake"})," you need to provide credentials. Please, see the ",(0,s.jsx)(n.a,{href:"/vi/tutorials/indexer/credentials",children:"Credentials"})," article"]})}),"\n",(0,s.jsxs)(n.p,{children:["We've added the ",(0,s.jsx)(n.code,{children:"start"})," command to the ",(0,s.jsx)(n.code,{children:"scripts"}),", so the compilation and run should as easy as"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see something like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Block #63804051 Shards: 4\nBlock #63804052 Shards: 4\nBlock #63804053 Shards: 4\nBlock #63804054 Shards: 4\nBlock #63804055 Shards: 4\nBlock #63804056 Shards: 4\nBlock #63804057 Shards: 4\nBlock #63804058 Shards: 4\nBlock #63804059 Shards: 4\nBlock #63804060 Shards: 4\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can stop the indexer by pressing CTRL+C"}),"\n",(0,s.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,s.jsxs)(n.p,{children:["You can play around and change the content of the callback function ",(0,s.jsx)(n.a,{href:"#create-indexer-handler",children:(0,s.jsx)(n.code,{children:"handleStreamerMessage"})})," to handle the data differently."]}),"\n",(0,s.jsxs)(n.p,{children:["You can find the ",(0,s.jsx)(n.a,{href:"https://github.com/near-examples/near-lake-raw-printer-js",children:"source code for this tutorial on the GitHub"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var s=r(67294);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);