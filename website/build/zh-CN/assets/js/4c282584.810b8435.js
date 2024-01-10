"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4535],{58960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(85893),i=n(11151);const r={id:"enumeration",title:"Enumeration",sidebar_label:"Enumeration"},s=void 0,a={id:"tutorials/nfts/enumeration",title:"Enumeration",description:"In the previous tutorials, you looked at ways to integrate the minting functionality into a skeleton smart contract. In order to get your NFTs to show in the wallet, you also had to deploy a patch fix that implemented one of the enumeration methods. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the standard Now you'll extend the NFT smart contract and add a couple of enumeration methods that can be used to return the contract's state.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/3-enumeration.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/enumeration",permalink:"/zh-CN/tutorials/nfts/enumeration",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/3-enumeration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"enumeration",title:"Enumeration",sidebar_label:"Enumeration"},sidebar:"contracts",previous:{title:"Upgrade a Contract",permalink:"/zh-CN/tutorials/nfts/upgrade-contract"},next:{title:"Core",permalink:"/zh-CN/tutorials/nfts/core"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Enumerating tokens",id:"enumerating-tokens",level:2},{value:"NFT tokens",id:"nft-tokens",level:3},{value:"Tokens by owner",id:"tokens-by-owner",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["In the previous tutorials, you looked at ways to integrate the minting functionality into a skeleton smart contract. In order to get your NFTs to show in the wallet, you also had to deploy a patch fix that implemented one of the enumeration methods. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"standard"})," Now you'll extend the NFT smart contract and add a couple of enumeration methods that can be used to return the contract's state."]}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["As mentioned in the ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/upgrade-contract/",children:"Upgrade a Contract"})," tutorial, you can deploy patches and fixes to smart contracts. This time, you'll use that knowledge to implement the ",(0,o.jsx)(t.code,{children:"nft_total_supply"}),", ",(0,o.jsx)(t.code,{children:"nft_tokens"})," and ",(0,o.jsx)(t.code,{children:"nft_supply_for_owner"})," enumeration functions."]}),"\n",(0,o.jsxs)(t.p,{children:["To get started, either switch to the ",(0,o.jsx)(t.code,{children:"2.minting"})," branch from our ",(0,o.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial/",children:"GitHub repository"}),", or continue your work from the previous tutorials. If you haven't cloned it yet, refer to the ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/skeleton#building-the-skeleton",children:"Contract Architecture"})," to check out the repository."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git checkout 2.minting\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["If you wish to see the finished code for this ",(0,o.jsx)(t.em,{children:"Enumeration"})," tutorial, you can find it on the ",(0,o.jsx)(t.code,{children:"3.enumeration"})," branch. :::"]}),(0,o.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),(0,o.jsxs)(t.p,{children:["Let's start by opening the  ",(0,o.jsx)(t.code,{children:"src/enumeration.rs"})," file and locating the empty ",(0,o.jsx)(t.code,{children:"nft_total_supply"})," function."]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"nft_total_supply"})}),(0,o.jsxs)(t.p,{children:["This function should return the total number of NFTs stored on the contract. You can easily achieve this functionality by simply returning the length of the ",(0,o.jsx)(t.code,{children:"nft_metadata_by_id"})," data structure."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/3.enumeration/nft-contract/src/enumeration.rs#L5-L9\n"})}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"nft_token"})}),(0,o.jsxs)(t.p,{children:["This function should return a paginated list of ",(0,o.jsx)(t.code,{children:"JsonTokens"})," that are stored on the contract regardless of their owners. If the user provides a ",(0,o.jsx)(t.code,{children:"from_index"})," parameter, you should use that as the starting point for which to start iterating through tokens; otherwise it should start from the beginning. Likewise, if the user provides a ",(0,o.jsx)(t.code,{children:"limit"})," parameter, the function shall stop after reaching either the limit or the end of the list."]}),(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["Rust has useful methods for pagination, allowing you to skip to a starting index and taking the first ",(0,o.jsx)(t.code,{children:"n"})," elements of an iterator. :::"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/3.enumeration/nft-contract/src/enumeration.rs#L11-L27\n"})}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"nft_supply_for_owner"})}),(0,o.jsxs)(t.p,{children:["This function should look for all the non-fungible tokens for a user-defined owner, and return the length of the resulting set. If there isn't a set of tokens for the provided ",(0,o.jsx)(t.code,{children:"AccountID"}),", then the function shall return ",(0,o.jsx)(t.code,{children:"0"}),"."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/3.enumeration/nft-contract/src/enumeration.rs#L28-L43\n"})}),(0,o.jsx)(t.p,{children:"Next, you can use the CLI to query these new methods and validate that they work correctly."}),(0,o.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploying the contract"}),(0,o.jsxs)(t.p,{children:["Now that you've implemented the necessary logic for ",(0,o.jsx)(t.code,{children:"nft_tokens_for_owner"}),", it's time to build and re-deploy the contract to your account. Using the build script, deploy the contract as you did in the previous tutorials:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile out/main.wasm --accountId $NFT_CONTRACT_ID\n"})}),(0,o.jsxs)(t.p,{children:["This should output a warning saying that the account has a deployed contract and will ask if you'd like to proceed. Simply type ",(0,o.jsx)(t.code,{children:"y"})," and hit enter."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),(0,o.jsx)(t.h2,{id:"enumerating-tokens",children:"Enumerating tokens"}),(0,o.jsx)(t.p,{children:"Once the updated contract has been redeployed, you can test and see if these new functions work as expected."}),(0,o.jsx)(t.h3,{id:"nft-tokens",children:"NFT tokens"}),(0,o.jsx)(t.p,{children:"Let's query for a list of non-fungible tokens on the contract. Use the following command to query for the information of up to 50 NFTs starting from the 10th item:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_tokens \'{"from_index": "10", "limit": 50}\'\n'})}),(0,o.jsx)(t.p,{children:"This command should return an output similar to the following:"}),(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Example response: "}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:"[]\n"})})})]}),(0,o.jsx)(t.h3,{id:"tokens-by-owner",children:"Tokens by owner"}),(0,o.jsxs)(t.p,{children:["To get the total supply of NFTs owned by the ",(0,o.jsx)(t.code,{children:"goteam.testnet"})," account, call the ",(0,o.jsx)(t.code,{children:"nft_supply_for_owner"})," function and set the ",(0,o.jsx)(t.code,{children:"account_id"})," parameter:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_supply_for_owner \'{"account_id": "goteam.testnet"}\'\n'})}),(0,o.jsx)(t.p,{children:"This should return an output similar to the following:"}),(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Example response: "}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:"0\n"})})})]}),(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),(0,o.jsxs)(t.p,{children:["In this tutorial, you have added two ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/enumeration#modifications-to-the-contract",children:"new enumeration functions"}),", and now you have a basic NFT smart contract with minting and enumeration methods in place. After implementing these modifications, you redeployed the smart contract and tested the functions using the CLI."]}),(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/core",children:"next tutorial"}),", you'll implement the core functions needed to allow users to transfer the minted tokens."]}),(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["Remember If you want to see the finished code from this tutorial, you can checkout the ",(0,o.jsx)(t.code,{children:"3.enumeration"})," branch. :::"]}),(0,o.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,o.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["near-cli: ",(0,o.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,o.jsxs)(t.li,{children:["NFT standard: ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,o.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,o.jsxs)(t.li,{children:["Enumeration standard: ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,o.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(67294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);