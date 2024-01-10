"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1586],{84642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=t(85893),s=t(11151);const c={sidebar_position:4},o="\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",a={id:"sdk/rust/promises/deploy-contract",title:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",description:"\ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc774\uc720\ub85c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud6c4\uc18d \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ubc30\ud3ec\ud558\uae30\ub97c \uc6d0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/rust/promises/deploy-contract.md",sourceDirName:"sdk/rust/promises",slug:"/sdk/rust/promises/deploy-contract",permalink:"/ko/sdk/rust/promises/deploy-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/promises/deploy-contract.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"\uacc4\uc815 \uc0dd\uc131",permalink:"/ko/sdk/rust/promises/create-account"},next:{title:"\uae30\ubcf8 \uc9c0\uce68",permalink:"/ko/sdk/rust/building/basics"}},i={},d=[];function u(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec",children:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),"\n",(0,r.jsx)(n.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc774\uc720\ub85c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud6c4\uc18d \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ubc30\ud3ec\ud558\uae30\ub97c \uc6d0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ucee8\ud2b8\ub799\ud2b8\uac00 \ud329\ud1a0\ub9ac\ucc98\ub7fc \ud589\ub3d9\ud569\ub2c8\ub2e4. \ud329\ud1a0\ub9ac\ub294 \ubd80\ubaa8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ub9ce\uc740 \uc790\uc2dd \ucee8\ud2b8\ub799\ud2b8 (",(0,r.jsx)(n.a,{href:"https://www.mintbase.io/",children:"Mintbase"}),"\uac00 ",(0,r.jsx)(n.a,{href:"https://docs.mintbase.io/creating/store/deploy-fee",children:"\uc6d0\ud558\ub294 \uc0ac\ub78c\uc5d0 \ub300\ud574"})," \uc0c8 NFT \uc2a4\ud1a0\uc5b4\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\uc2dd; ",(0,r.jsx)(n.a,{href:"https://near.org/bridge/",children:"Rainbow Bridge"}),"\uac00 ",(0,r.jsx)(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/ce7640da144f000e0a93b6d9373bbc2514e37f3b/bridge-token-factory/src/lib.rs#L311-L341",children:"\uac01 \ube0c\ub9bf\uc9d5\ub41c \ud1a0\ud070"}),"\uc5d0 \ub300\ud574 \ubcc4\ub3c4\uc758 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(Fungible Token) \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub294 \ubc29\uc2dd)\ub97c \uc0dd\uc131\ud558\ub294 \ud328\ud134\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\ucee8\ud2b8\ub799\ud2b8\uac00 ",(0,r.jsx)(n.a,{href:"/ko/develop/upgrade#programmatic-update",children:"\ucf54\ub4dc\ub97c \uc790\uccb4\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"}),"(",(0,r.jsx)(n.code,{children:"deploy"})," \uc790\uccb4 \ud638\ucd9c)."]}),"\n",(0,r.jsxs)(n.li,{children:["\uc0ac\uc6a9\uc790(",(0,r.jsx)(n.code,{children:"your-app.user1.near"}),", ",(0,r.jsx)(n.code,{children:"your-app.user2.near"}),' \ub4f1)\uc5d0 \ub300\ud55c \uc571\ubcc4 \ud558\uc704 \uacc4\uc815(subaccount)\uc744 \uc0dd\uc131\ud558\uace0, \uac01\uac01\uc5d0 \ub3d9\uc77c\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub294 "\uc0ac\uc6a9\uc790 \ud55c \uba85\ub2f9 \ud558\ub098\uc758 \ucee8\ud2b8\ub799\ud2b8" \uc2dc\uc2a4\ud15c\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 \ud604\uc7ac NEAR\uc758 ',(0,r.jsx)(n.a,{href:"https://docs.near.org/concepts/storage/storage-staking",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc218\uc218\ub8cc"}),'\ub85c \uc778\ud574 \uc5c4\uccad\ub098\uac8c \ube44\uc2f8\uc9c0\ub9cc, \ud5a5\ud6c4 \ucd5c\uc801\ud654\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 \uc774\ub7ec\ud55c \uc885\ub958\uc758 "\uc0e4\ub529\ub41c \uc571 \ub514\uc790\uc778"\uc740 \ucee8\ud2b8\ub799\ud2b8 \ud45c\uc900 \ubc0f \uc571 \uba54\ucee4\ub2c8\uc998\uc5d0 \ub300\ud55c \ubcf4\ub2e4 \ud655\uc7a5 \uac00\ub2a5\ud558\uace0 \uc0ac\uc6a9\uc790 \uc911\uc2ec\uc801\uc778 \uc811\uadfc \ubc29\uc2dd\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud328\ub7ec\ub2e4\uc784\uc5d0 \ub300\ud55c \ucd08\uae30 \uc2e4\ud5d8\uc740 ',(0,r.jsx)(n.a,{href:"https://github.com/metanear",children:"Meta NEAR"}),"\ub77c\uace0 \ubd88\ub9bd\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\ubaa9\ud45c\uac00 Mintbase \ub610\ub294 Rainbow Bridge\uc640 \uac19\uc740 \uae30\ubcf8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ud558\uc704 \uacc4\uc815\uc5d0 \ubc30\ud3ec\ud558\ub294 \uac83\uc774\ub77c\uba74, \uacc4\uc815\ub3c4 \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub9c8\uc9c0\ub9c9 \uba87 \ud398\uc774\uc9c0\uc758 \uac1c\ub150\uc744 \uacb0\ud569\ud558\uba74 \ub2e4\uc74c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'const CODE: &[u8] = include_bytes!("./path/to/compiled.wasm");\n\nPromise::new("subaccount.example.near".parse().unwrap())\n    .create_account()\n    .add_full_access_key(env::signer_account_pk())\n    .transfer(3_000_000_000_000_000_000_000_000) // 3e24yN, 3N\n    .deploy_contract(CODE.to_vec())\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\uc804\uccb4 \ucee8\ud2b8\ub799\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,r.jsx)(n.code,{children:"code"}),"\ub97c ",(0,r.jsx)(n.code,{children:"include_bytes!"}),"\ub85c \ud558\ub4dc\ucf54\ub529\ud558\uc9c0 \uc54a\uace0, \uc778\uc790\ub85c \uc804\ub2ec\ud558\ub294 \ub2e8\uc21c\ud55c \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use near_sdk::{env, near_bindgen, AccountId, Balance, Promise};\n\nconst INITIAL_BALANCE: Balance = 3_000_000_000_000_000_000_000_000; // 3e24yN, 3N\n\n#[near_bindgen]\npub struct Contract {}\n\n#[near_bindgen]\nimpl Contract {\n    #[private]\n    pub fn create_child_contract(prefix: AccountId, code: Vec<u8>) -> Promise {\n        let subaccount_id = AccountId::new_unchecked(\n          format!("{}.{}", prefix, env::current_account_id())\n        );\n        Promise::new(subaccount_id)\n            .create_account()\n            .add_full_access_key(env::signer_account_pk())\n            .transfer(INITIAL_BALANCE)\n            .deploy_contract(code)\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\uc774\uac83\uc774 \ub2e8\uc21c\ud55c \uc811\uadfc \ubc29\uc2dd\uc778 \uc774\uc720\ub294 \ubb34\uc5c7\uc77c\uae4c\uc694? \uc774\ub294 4MB \ud2b8\ub79c\uc7ad\uc158 \ud06c\uae30 \uc81c\ud55c\uc73c\ub85c \uc778\ud574 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc704\uc758 \ud568\uc218\ub294 \uc804\uccb4 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc5ed\uc9c1\ub82c\ud654\ud558\uace0 \ud799 \uc601\uc5ed\uc5d0 \ud560\ub2f9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub9ce\uc740 \uc0c1\ud669\uc5d0\uc11c\ub294 ",(0,r.jsx)(n.code,{children:"include_bytes!"})," \uc811\uadfc \ubc29\uc2dd\uc774 \uc120\ud638\ub429\ub2c8\ub2e4. \ucef4\ud30c\uc77c\ub41c Wasm\uc744 \uc778\uc790\ub85c \ucca8\ubd80\ud574\uc57c \ud558\ub294 \uacbd\uc6b0, ",(0,r.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract/blob/a8fc9a8c1cbde37610e56e1efda8e5971e79b845/sputnikdao2/src/types.rs#L74-L142",children:"Sputnik DAO v2"}),"\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc811\uadfc \ubc29\uc2dd\uc744 \ubcf5\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);