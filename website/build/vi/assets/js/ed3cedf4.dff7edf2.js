"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4095],{40388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(85893),o=n(11151);const s={sidebar_position:4},r="Deploying Contract",c={id:"sdk/rust/promises/deploy-contract",title:"Deploying Contract",description:"You might want your smart contract to deploy subsequent smart contract code for a few reasons:",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/sdk/rust/promises/deploy-contract.md",sourceDirName:"sdk/rust/promises",slug:"/sdk/rust/promises/deploy-contract",permalink:"/vi/sdk/rust/promises/deploy-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/promises/deploy-contract.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"T\u1ea1o m\u1ed9t NEAR Account",permalink:"/vi/sdk/rust/promises/create-account"},next:{title:"Basic Instructions",permalink:"/vi/sdk/rust/building/basics"}},i={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"deploying-contract",children:"Deploying Contract"}),"\n",(0,a.jsx)(t.p,{children:"You might want your smart contract to deploy subsequent smart contract code for a few reasons:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The contract acts as a Factory, a pattern where a parent contract creates many child contracts (",(0,a.jsx)(t.a,{href:"https://www.mintbase.io/",children:"Mintbase"})," does this to create a new NFT store for ",(0,a.jsx)(t.a,{href:"https://docs.mintbase.io/creating/store/deploy-fee",children:"anyone who wants one"}),"; ",(0,a.jsx)(t.a,{href:"https://near.org/bridge/",children:"Rainbow Bridge"})," does this to deploy separate Fungible Token contracts for ",(0,a.jsx)(t.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/ce7640da144f000e0a93b6d9373bbc2514e37f3b/bridge-token-factory/src/lib.rs#L311-L341",children:"each bridged token"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["The contract ",(0,a.jsx)(t.a,{href:"/vi/develop/upgrade#programmatic-update",children:"updates its own code"})," (calls ",(0,a.jsx)(t.code,{children:"deploy"})," on itself)."]}),"\n",(0,a.jsxs)(t.li,{children:['You could implement a "contract per user" system that creates app-specific subaccounts for users (',(0,a.jsx)(t.code,{children:"your-app.user1.near"}),", ",(0,a.jsx)(t.code,{children:"your-app.user2.near"}),", etc) and deploys the same contract to each. This is currently prohibitively expensive due to NEAR's ",(0,a.jsx)(t.a,{href:"https://docs.near.org/concepts/storage/storage-staking",children:"storage fees"}),', but that may be optimized in the future. If it is, this sort of "sharded app design" may become the more scalable, user-centric approach to contract standards and app mechanics. An early experiment with this paradigm was called ',(0,a.jsx)(t.a,{href:"https://github.com/metanear",children:"Meta NEAR"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"If your goal is to deploy to a subaccount of your main contract like Mintbase or the Rainbow Bridge, you will also need to create the account. So, combining concepts from the last few pages, here's what you need:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'const CODE: &[u8] = include_bytes!("./path/to/compiled.wasm");\n\nPromise::new("subaccount.example.near".parse().unwrap())\n    .create_account()\n    .add_full_access_key(env::signer_account_pk())\n    .transfer(3_000_000_000_000_000_000_000_000) // 3e24yN, 3N\n    .deploy_contract(CODE.to_vec())\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Here's what a full contract might look like, showing a na\xefve way to pass ",(0,a.jsx)(t.code,{children:"code"})," as an argument rather than hard-coding it with ",(0,a.jsx)(t.code,{children:"include_bytes!"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'use near_sdk::{env, near_bindgen, AccountId, Balance, Promise};\n\nconst INITIAL_BALANCE: Balance = 3_000_000_000_000_000_000_000_000; // 3e24yN, 3N\n\n#[near_bindgen]\npub struct Contract {}\n\n#[near_bindgen]\nimpl Contract {\n    #[private]\n    pub fn create_child_contract(prefix: AccountId, code: Vec<u8>) -> Promise {\n        let subaccount_id = AccountId::new_unchecked(\n          format!("{}.{}", prefix, env::current_account_id())\n        );\n        Promise::new(subaccount_id)\n            .create_account()\n            .add_full_access_key(env::signer_account_pk())\n            .transfer(INITIAL_BALANCE)\n            .deploy_contract(code)\n    }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Why is this a na\xefve approach? It could run into issues because of the 4MB transaction size limit \u2013 the function above would deserialize and heap-allocate a whole contract. For many situations, the ",(0,a.jsx)(t.code,{children:"include_bytes!"})," approach is preferable. If you really need to attach compiled Wasm as an argument, you might be able to copy the approach ",(0,a.jsx)(t.a,{href:"https://github.com/near-daos/sputnik-dao-contract/blob/a8fc9a8c1cbde37610e56e1efda8e5971e79b845/sputnikdao2/src/types.rs#L74-L142",children:"used by Sputnik DAO v2"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var a=n(67294);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);