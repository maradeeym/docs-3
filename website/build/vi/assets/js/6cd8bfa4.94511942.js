"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8183],{96351:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var c=s(85893),t=s(11151);const o={id:"access-keys",title:"C\xe1c RPC Endpoint"},i=void 0,a={id:"concepts/basics/accounts/access-keys",title:"C\xe1c RPC Endpoint",description:"In blockchain, using an account refers to using a private key to sign transactions.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/basics/accounts/access-keys.md",sourceDirName:"1.concepts/basics/accounts",slug:"/concepts/basics/accounts/access-keys",permalink:"/vi/concepts/basics/accounts/access-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/accounts/access-keys.md",tags:[],version:"current",frontMatter:{id:"access-keys",title:"C\xe1c RPC Endpoint"},sidebar:"concepts",previous:{title:"Address (Account ID)",permalink:"/vi/concepts/basics/accounts/account-id"},next:{title:"Smart Contract",permalink:"/vi/concepts/basics/accounts/smartcontract"}},r={},l=[{value:"Benefits of Access Keys",id:"benefits-of-access-keys",level:2},{value:"Using An App Safely",id:"using-an-app-safely",level:4},{value:"Replacing Keys",id:"replacing-keys",level:4},{value:"Implementing Key Recovery",id:"implementing-key-recovery",level:4},{value:"Key Types",id:"key-types",level:2},{value:"C\xe1c Full Access Key",id:"full-access-keys",level:3},{value:"C\xe1c Function Call Key",id:"function-call-keys",level:3},{value:"Locked Accounts",id:"locked-accounts",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["In blockchain, using an account refers to using a ",(0,c.jsx)(n.code,{children:"private key"})," to sign ",(0,c.jsx)(n.a,{href:"/vi/concepts/basics/transactions/overview",children:"transactions"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["NEAR Accounts have the unique feature of holding multiple ",(0,c.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Public-key_cryptography",children:"public/private key pairs"}),", called Access Keys, each with its ",(0,c.jsx)(n.strong,{children:"own set of permissions"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Access Keys are similar to ",(0,c.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/OAuth",children:"OAuths"}),", enabling you to grant ",(0,c.jsx)(n.strong,{children:"limited access"})," over your account to third-parties."]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"benefits-of-access-keys",children:"Benefits of Access Keys"}),"\n",(0,c.jsx)(n.p,{children:"Since the concept of Access Keys is unique to NEAR it is worth understanding why and how they can be used."}),"\n",(0,c.jsx)(n.h4,{id:"using-an-app-safely",children:"Using An App Safely"}),"\n",(0,c.jsxs)(n.p,{children:["Imagine that you want to play a web3 game consisting of a web-app and a smart contract. You can create a key that only allows you to ",(0,c.jsx)(n.strong,{children:"call specific methods"})," in the game's contract."]}),"\n",(0,c.jsxs)(n.p,{children:["You can safely give the key to the game, so it can sign ",(0,c.jsx)(n.strong,{children:"game-related transactions"})," for you without needing to interrupt the gameplay on each transaction."]}),"\n",(0,c.jsx)(n.h4,{id:"replacing-keys",children:"Replacing Keys"}),"\n",(0,c.jsx)(n.p,{children:"If you think any of your keys could be compromised, you can simply remove them or swap them with a new one. Just as how you can change your password on any website."}),"\n",(0,c.jsx)(n.h4,{id:"implementing-key-recovery",children:"Implementing Key Recovery"}),"\n",(0,c.jsxs)(n.p,{children:["You could implement a key-recovery ",(0,c.jsx)(n.a,{href:"/vi/concepts/basics/accounts/smartcontract",children:"contract"}),' in your account, and create a "recovery key" for someone you trust. Such a key could only be used to start the recovery.']}),"\n",(0,c.jsx)(n.p,{children:"When needed, that third-party component could trigger the recovery process, helping to create a new master for you."}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"key-types",children:"Key Types"}),"\n",(0,c.jsxs)(n.p,{children:["NEAR implements two types of access keys: ",(0,c.jsx)(n.code,{children:"FullAccess"})," keys and ",(0,c.jsx)(n.code,{children:"FunctionCall"})," keys."]}),"\n",(0,c.jsx)("hr",{class:"subsection"}),"\n",(0,c.jsx)(n.h3,{id:"full-access-keys",children:"C\xe1c Full Access Key"}),"\n",(0,c.jsxs)(n.p,{children:["As the name suggests, ",(0,c.jsx)(n.code,{children:"FullAccess"})," keys have full control of an account, similar to having administrator privileges on your operating system."]}),"\n",(0,c.jsxs)(n.p,{children:["Particularly, Full Access keys can be used to sign transactions doing ",(0,c.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Actions",children:"any action"})," in your account's behalf:"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["Create immediate ",(0,c.jsx)(n.a,{href:"/vi/concepts/basics/accounts/account-id#rules-for-creating-named-accounts",children:"sub-accounts"})," and ",(0,c.jsx)(n.a,{href:"/vi/concepts/basics/accounts/account-id#named-accounts",children:"top-level accounts"})," if the account ID's length is at least 32 characters."]}),"\n",(0,c.jsxs)(n.li,{children:["Delete your account (but ",(0,c.jsx)(n.strong,{children:"not"})," sub-accounts, since they have their keys)."]}),"\n",(0,c.jsx)(n.li,{children:"Add or remove Access Keys."}),"\n",(0,c.jsx)(n.li,{children:"Deploy a smart contract in the account."}),"\n",(0,c.jsx)(n.li,{children:"Call methods on any contract (yours or others)."}),"\n",(0,c.jsx)(n.li,{children:"Transfer NEAR \u24c3."}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["If you hand a ",(0,c.jsx)(n.code,{children:"FullAccess"})," to someone, they will have ",(0,c.jsx)(n.strong,{children:"total control over the account"}),"."]}),"\n",(0,c.jsxs)(n.admonition,{type:"tip",children:[(0,c.jsxs)(n.mdxAdmonitionTitle,{children:["You ",(0,c.jsx)(n.strong,{children:"add the first"})," Full Access Key of the account when ",(0,c.jsx)(n.a,{href:"/vi/concepts/basics/accounts/creating-accounts",children:"the account is created"}),". :::"]}),(0,c.jsx)("hr",{class:"subsection"}),(0,c.jsx)(n.h3,{id:"function-call-keys",children:"C\xe1c Function Call Key"}),(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"FunctionCall"})," keys only have permission to call specific methods on a contract (potentially all methods) but do ",(0,c.jsx)(n.strong,{children:"NOT allow to attach NEAR \u24c3"})," to the call."]}),(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"FunctionCall"})," keys are defined by three attributes:"]}),(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"receiver_id"}),": The ",(0,c.jsx)(n.strong,{children:"contract"})," which the key allows to call. No other contract can be called using this key."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"method_names"})," (Optional): The contract's ",(0,c.jsx)(n.strong,{children:"methods"})," the key allows to call. If omitted, all methods can be called."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"allowance"})," (Optional): The ",(0,c.jsx)(n.strong,{children:"amount of \u24c3"})," allowed to spend on ",(0,c.jsx)(n.a,{href:"/vi/concepts/basics/transactions/gas",children:"gas"}),". If omitted, the key can consume ",(0,c.jsx)(n.strong,{children:"UNLIMITED"})," \u24c3 as gas."]}),"\n"]}),(0,c.jsx)(n.p,{children:"Function Call keys main purpose is to be handed to apps, so they can make contract calls in your name."}),(0,c.jsxs)(n.p,{children:["NEAR simplifies creating and giving ",(0,c.jsx)(n.code,{children:"FunctionCall"})," keys to dApps by implementing a ",(0,c.jsx)(n.a,{href:"/vi/develop/integrate/frontend#user-sign-in",children:(0,c.jsx)(n.strong,{children:"sign-in"})})," process. Briefly, dApps can ask you to sign-in using the ",(0,c.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"wallet"}),", which automatically creates and gives a ",(0,c.jsx)(n.code,{children:"FunctionCall"})," key to the dApp."]}),(0,c.jsxs)(n.p,{children:["With the ",(0,c.jsx)(n.code,{children:"FunctionCall"})," key, the dApp will then be able to call specific methods ",(0,c.jsx)(n.strong,{children:"in your account's behalf"}),", with a default allowance of 0.25\u24c3 for gas."]}),(0,c.jsxs)(n.p,{children:["If the dApps requests to transfer ",(0,c.jsx)(n.strong,{children:"any amount of tokens"})," with the ",(0,c.jsx)(n.code,{children:"FunctionCall"})," key, the user will be prompted once more by the wallet to ",(0,c.jsx)(n.strong,{children:"authorize the transaction"}),"."]}),(0,c.jsx)(n.hr,{}),(0,c.jsx)(n.h2,{id:"locked-accounts",children:"Locked Accounts"}),(0,c.jsxs)(n.p,{children:["If you remove all keys from an account, then the account will become ",(0,c.jsx)(n.strong,{children:"locked"}),", meaning that no external actor can perform transactions in the account's name."]}),(0,c.jsx)(n.p,{children:"In practice, this means that only the account's smart contract can transfer assets, create sub-accounts, or update its code."}),(0,c.jsx)(n.p,{children:"Locking an account is very useful when one wants to deploy a contract, and let the community be assured that only the contract is in control of the account."})]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var c=s(67294);const t={},o=c.createContext(t);function i(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);