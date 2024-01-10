"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[839],{97068:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>r});var c=t(85893),i=t(11151);const s={id:"simple-fts",title:"Minting Fungible Tokens"},l=void 0,a={id:"tutorials/fts/simple-fts",title:"Minting Fungible Tokens",description:"Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd h\u1ecdc \u0111\u01b0\u1ee3c c\xe1ch d\u1ec5 d\xe0ng t\u1ea1o ra c\xe1c Fungible Token (FT) c\u1ee7a ri\xeang m\xecnh m\xe0 kh\xf4ng c\u1ea7n d\xf9ng b\u1ea5t c\u1ee9 ph\u1ea7n m\u1ec1m ph\xe1t tri\u1ec3n n\xe0o b\u1eb1ng c\xe1ch ch\u1ec9 s\u1eed d\u1ee5ng m\u1ed9t smart contract \u0111\xe3 c\xf3 s\u1eb5n. This article will show you how to use an existing FT smart contract, and you'll learn how to mint fungible tokens and view them in your Wallet.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/fts/simple-fts.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/simple-fts",permalink:"/vi/tutorials/fts/simple-fts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/simple-fts.md",tags:[],version:"current",frontMatter:{id:"simple-fts",title:"Minting Fungible Tokens"},sidebar:"contracts",previous:{title:"Self Upgrade & State Migration",permalink:"/vi/tutorials/examples/update-contract-migrate-state"},next:{title:"Mint NFT",permalink:"/vi/tutorials/nfts/minting-nfts"}},o={},r=[{value:"\u0110i\u1ec1u ki\u1ec7n c\u1ea7n",id:"\u0111i\u1ec1u-ki\u1ec7n-c\u1ea7n",level:2},{value:"NEAR Wallet",id:"near-wallet",level:3},{value:"S\u1eed d\u1ee5ng FT contract",id:"s\u1eed-d\u1ee5ng-ft-contract",level:2},{value:"Mint c\xe1c FT c\u1ee7a b\u1ea1n",id:"mint-c\xe1c-ft-c\u1ee7a-b\u1ea1n",level:3},{value:"Ki\u1ec3m tra Wallet c\u1ee7a b\u1ea1n",id:"ki\u1ec3m-tra-wallet-c\u1ee7a-b\u1ea1n",level:3},{value:"C\xe1c ch\xfa th\xedch cu\u1ed1i c\xf9ng",id:"c\xe1c-ch\xfa-th\xedch-cu\u1ed1i-c\xf9ng",level:2},{value:"Version cho b\xe0i vi\u1ebft n\xe0y",id:"version-cho-b\xe0i-vi\u1ebft-n\xe0y",level:2}];function h(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components},{Details:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.p,{children:["Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd h\u1ecdc \u0111\u01b0\u1ee3c c\xe1ch d\u1ec5 d\xe0ng t\u1ea1o ra c\xe1c Fungible Token (FT) c\u1ee7a ri\xeang m\xecnh m\xe0 kh\xf4ng c\u1ea7n d\xf9ng b\u1ea5t c\u1ee9 ph\u1ea7n m\u1ec1m ph\xe1t tri\u1ec3n n\xe0o b\u1eb1ng c\xe1ch ch\u1ec9 s\u1eed d\u1ee5ng m\u1ed9t smart contract \u0111\xe3 c\xf3 s\u1eb5n. This article will show you how to use an existing ",(0,c.jsx)(e.a,{href:"/vi/tutorials/fts/predeployed-contract",children:"FT smart contract"}),", and you'll learn ",(0,c.jsx)(e.a,{href:"#minting-your-fts",children:"how to mint"})," fungible tokens and ",(0,c.jsx)(e.a,{href:"#checking-your-wallet",children:"view them"})," in your Wallet."]}),"\n",(0,c.jsx)(e.h2,{id:"\u0111i\u1ec1u-ki\u1ec7n-c\u1ea7n",children:"\u0110i\u1ec1u ki\u1ec7n c\u1ea7n"}),"\n",(0,c.jsx)(e.p,{children:"\u0110\u1ec3 ho\xe0n th\xe0nh \u0111\u01b0\u1ee3c h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd c\u1ea7n:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"#wallet",children:"M\u1ed9t NEAR account"})}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"/docs/tools/near-cli#setup",children:"NEAR command-line interface"})," (",(0,c.jsx)(e.code,{children:"near-cli"}),")"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"near-wallet",children:"NEAR Wallet"}),"\n",(0,c.jsxs)(e.p,{children:["To store your fungible tokens you'll need a ",(0,c.jsx)(e.a,{href:"https://testnet.mynearwallet.com//",children:"NEAR Wallet"}),". If you don't have one yet, you can create one easily by following ",(0,c.jsx)(e.a,{href:"https://testnet.mynearwallet.com/create",children:"these instructions"}),"."]}),"\n",(0,c.jsxs)(e.p,{children:["Once you have your Wallet account, you can click on the ",(0,c.jsx)(e.a,{href:"https://testnet.mynearwallet.com//?tab=balances",children:"Balances Tab"})," where all your Fungible Tokens will be listed:"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"Wallet",src:t(28872).Z+"",width:"1344",height:"1228"})}),"\n",(0,c.jsx)(e.h2,{id:"s\u1eed-d\u1ee5ng-ft-contract",children:"S\u1eed d\u1ee5ng FT contract"}),"\n",(0,c.jsxs)(e.p,{children:["B\xe2y gi\u1edd \u0111\xe3 c\xf3 \u0111\u1ea7y \u0111\u1ee7 c\xe1c c\xf4ng c\u1ee5, b\u1ea1n c\xf3 th\u1ec3 s\u1eb5n s\u1eb1ng b\u1eaft \u0111\u1ea7u s\u1eed d\u1ee5ng FT smart contract \u0111\u1ec3 ",(0,c.jsx)(e.a,{href:"#minting-your-fts",children:"mint c\xe1c FT c\u1ee7a m\xecnh"}),"."]}),"\n",(0,c.jsxs)(e.admonition,{type:"note",children:[(0,c.jsxs)(e.mdxAdmonitionTitle,{children:["N\u1ebfu b\u1ea1n kh\xf4ng c\xf3 command line interface, vui l\xf2ng ",(0,c.jsx)(e.a,{href:"/tools/near-cli#setup",children:"th\u1ef1c hi\u1ec7n c\xe1c b\u01b0\u1edbc n\xe0y"}),". :::"]}),(0,c.jsxs)(e.p,{children:["\u0110\u1ea3m b\u1ea3o b\u1ea1n \u0111\xe3 l\u01b0u \u1edf local c\xe1c th\xf4ng tin x\xe1c th\u1ef1c c\u1ee7a ",(0,c.jsx)(e.code,{children:"testnet"})," account m\xe0 b\u1ea1n s\u1ebd s\u1eed d\u1ee5ng \u0111\u1ec3 mint c\xe1c token b\u1eb1ng c\xe1ch ch\u1ea1y command ",(0,c.jsx)(e.code,{children:"near-cli"})," d\u01b0\u1edbi \u0111\xe2y trong terminal:"]}),(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"near login\n"})}),(0,c.jsxs)(e.p,{children:["\u0110\u1ec3 l\xe0m cho h\u01b0\u1edbng d\u1eabn n\xe0y d\u1ec5 d\xe0ng h\u01a1n v\u1edbi copy/paste, ch\xfang t\xf4i \u0111\xe3 set m\u1ed9t bi\u1ebfn m\xf4i tr\u01b0\u1eddng cho account ID c\u1ee7a b\u1ea1n. Trong command d\u01b0\u1edbi \u0111\xe2y, thay ",(0,c.jsx)(e.code,{children:"YOUR_ACCOUNT_NAME"})," v\u1edbi account name b\u1ea1n v\u1eeba \u0111\u0103ng nh\u1eadp, bao g\u1ed3m ",(0,c.jsx)(e.code,{children:".testnet"}),"):"]}),(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"export ID=YOUR_ACCOUNT_NAME\n"})}),(0,c.jsx)(e.p,{children:"Ki\u1ec3m tra bi\u1ebfn m\xf4i tr\u01b0\u1eddng \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t \u0111\xfang hay ch\u01b0a b\u1eb1ng c\xe1ch ch\u1ea1y:"}),(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"echo $ID\n"})}),(0,c.jsx)(e.h3,{id:"mint-c\xe1c-ft-c\u1ee7a-b\u1ea1n",children:"Mint c\xe1c FT c\u1ee7a b\u1ea1n"}),(0,c.jsxs)(e.p,{children:["NEAR \u0111\xe3 deploy m\u1ed9t contract t\u1edbi account ",(0,c.jsx)(e.code,{children:"ft.examples.testnet"}),", n\xf3 cho ph\xe9p b\u1ea5t c\u1ee9 ai c\xf3 th\u1ec3 mint mi\u1ec5n ph\xed ",(0,c.jsx)(e.code,{children:"c\xe1c TeamToken"}),". \u0110\xe2y l\xe0 account b\u1ea1n s\u1ebd t\u01b0\u01a1ng t\xe1c \u0111\u1ec3 mint c\xe1c fungible token c\u1ee7a m\xecnh."]}),(0,c.jsxs)(e.p,{children:["B\xe2y gi\u1edd, ch\xfang ta h\xe3y mint m\u1ed9t v\xe0i token! Command d\u01b0\u1edbi \u0111\xe2y s\u1ebd mint ",(0,c.jsx)(e.code,{children:"25"})," TeamToken t\u1edbi account c\u1ee7a b\u1ea1n. N\u1ebfu \u0111\u1ec3 \xfd, b\u1ea1n s\u1ebd th\u1ea5y ",(0,c.jsx)(e.code,{children:"receiver_id"})," x\xe1c \u0111\u1ecbnh ch\u1ee7 s\u1edf h\u1eefu m\u1edbi c\u1ee7a c\xe1c token b\u1ea1n \u0111ang mint, trong khi ",(0,c.jsx)(e.code,{children:"--accountId"})," ch\u1ec9 r\xf5 account n\xe0o s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 sign v\xe0 thanh to\xe1n cho transaction n\xe0y. Ngo\xe0i ra, c\xf3 flag l\xe0 ",(0,c.jsx)(e.code,{children:"--deposit"})," \u0111\xednh k\xe8m ",(0,c.jsx)(e.code,{children:".001"})," $NEAR v\xe0o l\u1ec7nh call \u0111\u1ec3 ",(0,c.jsx)(e.a,{href:"/concepts/storage/storage-staking",children:"thanh to\xe1n cho storage"})," tr\xean fungible token contract. S\u1ed1 ti\u1ec1n s\u1eed d\u1ee5ng s\u1ebd \xedt h\u01a1n con s\u1ed1 n\xe0y nh\u01b0ng b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 l\u1ea1i ph\u1ea7n ch\xeanh l\u1ec7ch. (Nh\xecn transaction trong wallet c\u1ee7a b\u1ea1n) S\u1ed1 l\u01b0\u1ee3ng token \u0111\u01b0\u1ee3c mint l\xe0 25 nh\u01b0ng b\u1ea1n c\xf3 th\u1ec3 t\u0103ng con s\u1ed1 n\xe0y l\xean \u0111\u1ebfn 1000."]}),(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:'near call ft.examples.testnet ft_mint \'{"receiver_id": "\'$ID\'", "amount": "25"}\' --deposit 0.1 --accountId $ID\n'})}),(0,c.jsxs)(e.p,{children:["Sau khi mint c\xe1c token, b\u1ea1n c\xf3 th\u1ec3 truy v\u1ea5n contract \u0111\u1ec3 xem s\u1ed1 d\u01b0 t\xe0i kho\u1ea3n c\u1ee7a b\u1ea5t k\u1ef3 accountId n\xe0o. Vi\u1ec7c n\xe0y \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n b\u1eb1ng c\xe1ch th\u1ef1c hi\u1ec7n m\u1ed9t contract ",(0,c.jsx)(e.code,{children:"view"})," call v\xe0 s\u1eed d\u1ee5ng ",(0,c.jsx)(e.code,{children:"ft_balance_of"})," endpoint tr\xean fungible token contract. Ch\u1ea1y l\u1ec7nh d\u01b0\u1edbi \u0111\xe2y trong terminal \u0111\u1ec3 xem s\u1ed1 d\u01b0 t\xe0i kho\u1ea3n:"]}),(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"near view ft.examples.testnet ft_balance_of '{\"account_id\": \"'$ID'\"}'\n"})}),(0,c.jsxs)(s,{children:[(0,c.jsx)("summary",{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c: "}),(0,c.jsx)("p",{children:(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'View call: ft.examples.testnet.ft_balance_of({"account_id": "benji_test.testnet"})\n\'25\'\n'})})})]}),(0,c.jsx)(e.h3,{id:"ki\u1ec3m-tra-wallet-c\u1ee7a-b\u1ea1n",children:"Ki\u1ec3m tra Wallet c\u1ee7a b\u1ea1n"}),(0,c.jsxs)(e.admonition,{type:"tip",children:[(0,c.jsxs)(e.mdxAdmonitionTitle,{children:["After you mint your fungible token you can ",(0,c.jsx)(e.a,{href:"https://testnet.mynearwallet.com/",children:"view it in your NEAR Wallet"}),"! :::"]}),(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)("br",{}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.img,{alt:"Wallet v\u1edbi token",src:t(21242).Z+"",width:"675",height:"703"})," ",(0,c.jsx)("br",{})]}),"\n"]}),(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:(0,c.jsx)(e.em,{children:"Ch\xfac m\u1eebng! B\u1ea1n v\u1eeba m\u1edbi mint Fungible Token \u0111\u1ea7u ti\xean c\u1ee7a m\xecnh tr\xean NEAR blockchain!"})})," \ud83c\udf89"]}),(0,c.jsx)(e.h2,{id:"c\xe1c-ch\xfa-th\xedch-cu\u1ed1i-c\xf9ng",children:"C\xe1c ch\xfa th\xedch cu\u1ed1i c\xf9ng"}),(0,c.jsx)(e.p,{children:"V\xed d\u1ee5 c\u01a1 b\u1ea3n n\xe0y minh h\u1ecda t\u1ea5t c\u1ea3 c\xe1c b\u01b0\u1edbc \u0111\u01b0\u1ee3c y\xeau c\u1ea7u \u0111\u1ec3 call m\u1ed9t FT smart contract tr\xean NEAR v\xe0 b\u1eaft \u0111\u1ea7u mint c\xe1c fungible token cho ri\xeang b\u1ea1n."}),(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:(0,c.jsx)(e.em,{children:"Ch\xfac b\u1ea1n mint th\xe0nh c\xf4ng!"})})," \ud83e\ude99"]}),(0,c.jsx)(e.h2,{id:"version-cho-b\xe0i-vi\u1ebft-n\xe0y",children:"Version cho b\xe0i vi\u1ebft n\xe0y"}),(0,c.jsx)(e.p,{children:"T\u1ea1i th\u1eddi \u0111i\u1ec3m vi\u1ebft b\xe0i, v\xed d\u1ee5 n\xe0y t\u01b0\u01a1ng th\xedch v\u1edbi c\xe1c version d\u01b0\u1edbi \u0111\xe2y:"}),(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["near-cli: ",(0,c.jsx)(e.code,{children:"2.1.1"})]}),"\n"]})]})]})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},28872:(n,e,t)=>{t.d(e,{Z:()=>c});const c=t.p+"assets/images/empty-wallet-ft-tab-584f71775a4272f699eaed7d0d441c10.png"},21242:(n,e,t)=>{t.d(e,{Z:()=>c});const c=t.p+"assets/images/teamtoken-c5302057132cb55093a695e70690b34d.png"},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>l});var c=t(67294);const i={},s=c.createContext(i);function l(n){const e=c.useContext(s);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),c.createElement(s.Provider,{value:e},n.children)}}}]);