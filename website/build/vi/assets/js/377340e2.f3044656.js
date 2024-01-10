"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5376],{37636:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var c=e(85893),i=e(11151);const a={id:"royalty",title:"Royalty",sidebar_label:"Royalty"},o=void 0,r={id:"tutorials/nfts/js/royalty",title:"Royalty",description:"Trong h\u01b0\u1edbng d\u1eabn n\xe0y b\u1ea1n s\u1ebd ti\u1ebfp t\u1ee5c build non-fungible token (NFT) smart contract c\u1ee7a m\xecnh, v\xe0 t\xecm hi\u1ec3u c\xe1ch tri\u1ec3n khai c\xe1c perpetual royalty v\xe0o c\xe1c NFT. Vi\u1ec7c n\xe0y s\u1ebd cho ph\xe9p m\u1ecdi ng\u01b0\u1eddi nh\u1eadn \u0111\u01b0\u1ee3c ph\u1ea7n tr\u0103m c\u1ee7a gi\xe1 mua khi NFT \u0111\u01b0\u1ee3c b\xe1n.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/6-royalty.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/royalty",permalink:"/vi/tutorials/nfts/js/royalty",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/6-royalty.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"royalty",title:"Royalty",sidebar_label:"Royalty"},sidebar:"contracts",previous:{title:"Approval",permalink:"/vi/tutorials/nfts/js/approvals"},next:{title:"Event",permalink:"/vi/tutorials/nfts/js/events"}},h={},s=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"Suy ngh\u0129 v\u1ec1 v\u1ea5n \u0111\u1ec1",id:"suy-ngh\u0129-v\u1ec1-v\u1ea5n-\u0111\u1ec1",level:2},{value:"M\u1edf r\u1ed9ng gi\u1ea3i ph\xe1p hi\u1ec7n t\u1ea1i",id:"m\u1edf-r\u1ed9ng-gi\u1ea3i-ph\xe1p-hi\u1ec7n-t\u1ea1i",level:3},{value:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract",id:"c\xe1c-s\u1eeda-\u0111\u1ed5i-v\u1edbi-contract",level:2},{value:"Internal helper function",id:"internal-helper-function",level:3},{value:"C\xe1c royalty",id:"c\xe1c-royalty",level:3},{value:"C\xe1c perpetual royalty",id:"c\xe1c-perpetual-royalty",level:3},{value:"Th\xeam royalty object v\xe0o c\xe1c tri\u1ec3n khai c\u1ea5u tr\xfac",id:"th\xeam-royalty-object-v\xe0o-c\xe1c-tri\u1ec3n-khai-c\u1ea5u-tr\xfac",level:3},{value:"Deploy contract",id:"redeploying-contract",level:2},{value:"T\u1ea1o m\u1ed9t sub-account",id:"t\u1ea1o-m\u1ed9t-sub-account",level:3},{value:"Kh\u1edfi t\u1ea1o v\xe0 mint",id:"initialization-and-minting",level:3},{value:"NFT payout",id:"nft-payout",level:3},{value:"T\u1ed5ng k\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2}];function l(n){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"Trong h\u01b0\u1edbng d\u1eabn n\xe0y b\u1ea1n s\u1ebd ti\u1ebfp t\u1ee5c build non-fungible token (NFT) smart contract c\u1ee7a m\xecnh, v\xe0 t\xecm hi\u1ec3u c\xe1ch tri\u1ec3n khai c\xe1c perpetual royalty v\xe0o c\xe1c NFT. Vi\u1ec7c n\xe0y s\u1ebd cho ph\xe9p m\u1ecdi ng\u01b0\u1eddi nh\u1eadn \u0111\u01b0\u1ee3c ph\u1ea7n tr\u0103m c\u1ee7a gi\xe1 mua khi NFT \u0111\u01b0\u1ee3c b\xe1n."}),"\n",(0,c.jsx)(t.admonition,{type:"caution",children:(0,c.jsxs)(t.p,{children:["The JS-SDK is currently in ",(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/releases/",children:(0,c.jsx)(t.code,{children:"Alpha"})})}),"."]})}),"\n",(0,c.jsx)(t.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,c.jsxs)(t.p,{children:["B\xe2y gi\u1edd, b\u1ea1n s\u1ebd c\xf3 m\u1ed9t NFT contract ho\xe0n ch\u1ec9nh \u0111\u1ea7y \u0111\u1ee7, ngo\u1ea1i tr\u1eeb vi\u1ec7c h\u1ed7 tr\u1ee3 royalty. \u0110\u1ec3 b\u1eaft \u0111\u1ea7u, h\xe3y chuy\u1ec3n sang branch ",(0,c.jsx)(t.code,{children:"5.approval"})," t\u1eeb ",(0,c.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial-js/",children:"GitHub repository"})," c\u1ee7a ch\xfang t\xf4i, ho\u1eb7c ti\u1ebfp t\u1ee5c c\xf4ng vi\u1ec7c c\u1ee7a b\u1ea1n t\u1eeb c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc."]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"git checkout 5.approval\n"})}),"\n",(0,c.jsxs)(t.admonition,{type:"tip",children:[(0,c.jsxs)(t.mdxAdmonitionTitle,{children:["If you wish to see the finished code for this ",(0,c.jsx)(t.em,{children:"Royalty"})," tutorial, you can find it on the ",(0,c.jsx)(t.code,{children:"6.royalty"})," branch. :::"]}),(0,c.jsx)(t.h2,{id:"suy-ngh\u0129-v\u1ec1-v\u1ea5n-\u0111\u1ec1",children:"Suy ngh\u0129 v\u1ec1 v\u1ea5n \u0111\u1ec1"}),(0,c.jsxs)(t.p,{children:["\u0110\u1ec3 tri\u1ec3n khai t\xednh n\u0103ng n\xe0y, tr\u01b0\u1edbc ti\xean b\u1ea1n c\u1ea7n hi\u1ec3u c\xe1c NFT \u0111\u01b0\u1ee3c b\xe1n nh\u01b0 th\u1ebf n\xe0o. Trong b\xe0i h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc, b\u1ea1n \u0111\xe3 th\u1ea5y c\xe1ch ai \u0111\xf3 c\xf3 m\u1ed9t NFT v\xe0 h\u1ecd c\xf3 th\u1ec3 \u0111\u01b0a n\xf3 l\xean marketplace b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng function ",(0,c.jsx)(t.code,{children:"nft_approve"})," k\xe8m theo m\u1ed9t message c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c gi\u1ea3i m\xe3 \u0111\xfang c\xe1ch. Khi m\u1ed9t user mua NFT c\u1ee7a b\u1ea1n tr\xean marketplace, \u0111i\u1ec1u g\xec s\u1ebd x\u1ea3y ra?"]}),(0,c.jsxs)(t.p,{children:["S\u1eed d\u1ee5ng ki\u1ebfn th\u1ee9c b\u1ea1n \u0111ang c\xf3, m\u1ed9t k\u1ebft lu\u1eadn h\u1ee3p l\xfd s\u1ebd l\xe0 marketplace transfer NFT t\u1edbi ng\u01b0\u1eddi mua b\u1eb1ng c\xe1ch th\u1ef1c hi\u1ec7n m\u1ed9t cross-contract call v\xe0 g\u1ecdi NFT contract c\u1ee7a method ",(0,c.jsx)(t.code,{children:"nft_transfer"}),". Khi function \u0111\xf3 k\u1ebft th\xfac, marketplace s\u1ebd thanh to\xe1n cho ng\u01b0\u1eddi b\xe1n s\u1ed1 ti\u1ec1n \u0111\xfang b\u1eb1ng ng\u01b0\u1eddi mua \u0111\xe3 tr\u1ea3."]}),(0,c.jsx)(t.p,{children:"B\xe2y gi\u1edd h\xe3y ngh\u0129 v\u1ec1 c\xe1ch vi\u1ec7c n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c m\u1edf r\u1ed9ng \u0111\u1ec3 cho ph\xe9p c\u1eaft gi\u1ea3m kho\u1ea3n thanh to\xe1n cho c\xe1c account kh\xe1c kh\xf4ng ch\u1ec9 l\xe0 ng\u01b0\u1eddi b\xe1n."}),(0,c.jsx)(t.h3,{id:"m\u1edf-r\u1ed9ng-gi\u1ea3i-ph\xe1p-hi\u1ec7n-t\u1ea1i",children:"M\u1edf r\u1ed9ng gi\u1ea3i ph\xe1p hi\u1ec7n t\u1ea1i"}),(0,c.jsxs)(t.p,{children:["V\xec c\xe1c perpetual royalty s\u1ebd d\u1ef1a tr\xean c\u01a1 s\u1edf m\u1ed7i token, n\xean c\xf3 th\u1ec3 an to\xe0n khi gi\u1ea3 \u0111\u1ecbnh r\u1eb1ng b\u1ea1n n\xean thay \u0111\u1ed5i c\u1ea5u tr\xfac c\u1ee7a ",(0,c.jsx)(t.code,{children:"Token"})," v\xe0 ",(0,c.jsx)(t.code,{children:"JsonToken"}),". B\u1ea1n c\u1ea7n m\u1ed9t s\u1ed1 c\xe1ch \u0111\u1ec3 theo d\xf5i t\u1ef7 l\u1ec7 ph\u1ea7n tr\u0103m n\xean c\xf3 c\u1ee7a m\u1ed7i t\xe0i kho\u1ea3n v\u1edbi m\u1ed9t royalty. M\u1ed9t m\u1eb9o nh\u1ecf l\xe0 b\u1ea1n c\xf3 th\u1ec3 t\u1ea1o ra m\u1ed9t map c\u1ee7a m\u1ed9t account v\xe0 m\u1ed9t integer."]}),(0,c.jsx)(t.p,{children:"B\xe2y gi\u1edd, b\u1ea1n c\u1ea7n m\u1ed9t v\xe0i c\xe1ch \u0111\u1ec3 chuy\u1ec3n ti\u1ebfp th\xf4ng tin \u0111\xf3 \u0111\u1ebfn marketplace. Ph\u01b0\u01a1ng ph\xe1p n\xe0y s\u1ebd c\xf3 th\u1ec3 transfer NFT ch\xednh x\xe1c nh\u01b0 gi\u1ea3i ph\xe1p c\u0169 nh\u01b0ng v\u1edbi l\u1ee3i \xedch \u0111\u01b0\u1ee3c b\u1ed5 sung l\xe0 th\xf4ng b\xe1o cho marketplace ch\xednh x\xe1c nh\u1eefng account n\xe0o s\u1ebd \u0111\u01b0\u1ee3c thanh to\xe1n s\u1ed1 ti\u1ec1n bao nhi\xeau. N\u1ebfu b\u1ea1n tri\u1ec3n khai m\u1ed9t ph\u01b0\u01a1ng ph\xe1p transfer NFT v\xe0 sau \u0111\xf3 t\xednh to\xe1n ch\xednh x\xe1c account n\xe0o \u0111\u01b0\u1ee3c thanh to\xe1n bao nhi\xeau d\u1ef1a tr\xean s\u1ed1 d\u01b0 \u0111\u01b0\u1ee3c truy\u1ec1n v\xe0o, \u0111\xf3 s\u1ebd l\xe0 m\u1ed9t \u0111i\u1ec1u ty\u1ec7t v\u1eddi."}),(0,c.jsxs)(t.p,{children:["\u0110\xe2y l\xe0 ph\xe1c th\u1ea3o c\u1ee7a ",(0,c.jsx)(t.a,{href:"https://nomicon.io/Standards/NonFungibleToken/Payout",children:"nh\u01b0ng ti\xeau chu\u1ea9n royalty"}),". B\xe2y gi\u1edd h\xe3y ti\u1ebfp t\u1ee5c v\xe0 s\u1eeda \u0111\u1ed5i smart contract c\u1ee7a ch\xfang ta \u0111\u1ec3 th\xeam v\xe0o h\xe0nh vi n\xe0y."]}),(0,c.jsx)(t.h2,{id:"c\xe1c-s\u1eeda-\u0111\u1ed5i-v\u1edbi-contract",children:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract"}),(0,c.jsxs)(t.p,{children:["\u0110i\u1ec1u \u0111\u1ea7u ti\xean b\u1ea1n s\u1ebd mu\u1ed1n l\xe0m l\xe0 th\xeam th\xf4ng tin royalty v\xe0o c\xe1c c\u1ea5u tr\xfac. Open the ",(0,c.jsx)(t.code,{children:"nft-contract/src/metadata.ts"})," file and add ",(0,c.jsx)(t.code,{children:"royalty"})," to the ",(0,c.jsx)(t.code,{children:"Token"})," and ",(0,c.jsx)(t.code,{children:"JsonToken"})," structs:"]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"royalty: { [accountId: string]: number };\n"})}),(0,c.jsxs)(t.p,{children:["Th\u1ee9 hai, b\u1ea1n c\u0169ng s\u1ebd mu\u1ed1n th\xeam ",(0,c.jsx)(t.code,{children:"royalty"})," t\u1edbi ",(0,c.jsx)(t.code,{children:"JsonToken"})," struct:"]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/metadata.ts#L106-L166\n"})}),(0,c.jsx)(t.h3,{id:"internal-helper-function",children:"Internal helper function"}),(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"royaltyToPayout"})}),(0,c.jsxs)(t.p,{children:["To simplify the payout calculation, let's add a helper ",(0,c.jsx)(t.code,{children:"royaltyToPayout"})," function to ",(0,c.jsx)(t.code,{children:"src/internal.ts"}),". \u0110i\u1ec1u n\xe0y s\u1ebd chuy\u1ec3n \u0111\u1ed5i t\u1ef7 l\u1ec7 ph\u1ea7n tr\u0103m th\xe0nh s\u1ed1 ti\u1ec1n th\u1ef1c th\u1ebf c\u1ea7n \u0111\u01b0\u1ee3c thanh to\xe1n. T\u1ef7 l\u1ec7 ph\u1ea7n tr\u0103m l\xe0 m\u1ed9t integer n\xean \u0111\u1ec3 cho ph\xe9p n\xf3 nh\u1ecf h\u01a1n 1%, b\u1ea1n c\xf3 th\u1ec3 quy \u0111\u1ecbnh 100% t\u01b0\u01a1ng \u1ee9ng v\u1edbi gi\xe1 tr\u1ecb ",(0,c.jsx)(t.code,{children:"10,000"}),". \u0110i\u1ec1u n\xe0y c\xf3 ngh\u0129a r\u1eb1ng ph\u1ea7n tr\u0103m t\u1ed1i thi\u1ec3u b\u1ea1n c\xf3 th\u1ec3 \u0111\u01b0a ra l\xe0 0.01% hay ",(0,c.jsx)(t.code,{children:"1"}),". V\xed d\u1ee5, n\u1ebfu b\u1ea1n mu\u1ed1n account ",(0,c.jsx)(t.code,{children:"benji.testnet"})," c\xf3 perpetual royalty l\xe0 20%, b\u1ea1n s\u1ebd ch\xe8n c\u1eb7p ",(0,c.jsx)(t.code,{children:'"benji.testnet": 2000'})," t\u1edbi payout map."]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/internal.ts#L13-L16\n"})}),(0,c.jsxs)(t.p,{children:["If you were to use the ",(0,c.jsx)(t.code,{children:"royaltyToPayout"})," function and pass in ",(0,c.jsx)(t.code,{children:"2000"})," as the ",(0,c.jsx)(t.code,{children:"royaltyPercentage"})," and an ",(0,c.jsx)(t.code,{children:"amountToPay"})," of 1 NEAR, it would return a value of 0.2 NEAR."]}),(0,c.jsx)(t.h3,{id:"c\xe1c-royalty",children:"C\xe1c royalty"}),(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"nft_payout"})}),(0,c.jsxs)(t.p,{children:["B\xe2y gi\u1edd h\xe3y tri\u1ec3n khai m\u1ed9t ph\u01b0\u01a1ng ph\xe1p \u0111\u1ec3 ki\u1ec3m tra xem nh\u1eefng account n\xe0o s\u1ebd \u0111\u01b0\u1ee3c thanh to\xe1n t\u1eeb m\u1ed9t NFT v\u1edbi m\u1ed9t s\u1ed1 ti\u1ec1n ho\u1eb7c m\u1ed9t s\u1ed1 d\u01b0 nh\u1ea5t \u0111\u1ecbnh. Open the ",(0,c.jsx)(t.code,{children:"nft-contract/src/royalty.ts"})," file, and modify the ",(0,c.jsx)(t.code,{children:"internalNftPayout"})," function as shown."]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/royalty.ts#L7-L53\n"})}),(0,c.jsxs)(t.p,{children:["This function will loop through the token's royalty map and take the balance and convert that to a payout using the ",(0,c.jsx)(t.code,{children:"royaltyToPayout"})," function you created earlier. N\xf3 s\u1ebd cung c\u1ea5p cho ch\u1ee7 s\u1edf s\u1eefu token b\u1ea5t c\u1ee9 th\u1ee9 g\xec c\xf2n l\u1ea1i t\u1eeb t\u1ed5ng c\xe1c royalty. V\xed d\u1ee5:"]}),(0,c.jsx)(t.p,{children:"B\u1ea1n c\xf3 m\u1ed9t token v\u1edbi royalty field nh\u01b0 d\u01b0\u1edbi \u0111\xe2y:"}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:'Token {\n    owner_id: "damian",\n    royalty: {\n        "benji": 1000,\n        "josh": 500,\n        "mike": 2000\n    }\n}\n'})}),(0,c.jsxs)(t.p,{children:["N\u1ebfu m\u1ed9t user call ",(0,c.jsx)(t.code,{children:"nft_payout"})," tr\xean token v\xe0 truy\u1ec1n v\xe0o m\u1ed9t s\u1ed1 d\u01b0 l\xe0 1 NEAR, n\xf3 s\u1ebd loop qua royalty field c\u1ee7a token v\xe0 ch\xe8n th\xf4ng tin d\u01b0\u1edbi \u0111\xe2y v\xe0o payout object:"]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:'Payout {\n    payout: {\n        "benji": 0.1 NEAR,\n        "josh": 0.05 NEAR,\n        "mike": 0.2 NEAR\n    }\n}\n'})}),(0,c.jsxs)(t.p,{children:["Cu\u1ed1i c\xf9ng, n\xf3 s\u1ebd ch\xe8n ",(0,c.jsx)(t.code,{children:"damian"})," v\xe0o payout object v\xe0 \u0111\u01b0a cho anh \u1ea5y ",(0,c.jsx)(t.code,{children:"1 NEAR - 0.1 - 0.05 - 0.2 = 0.65 NEAR"}),"."]}),(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"nft_transfer_payout"})}),(0,c.jsx)(t.p,{children:"B\xe2y gi\u1edd th\xec b\u1ea1n \u0111\xe3 bi\u1ebft l\xe0m c\xe1ch n\xe0o \u0111\u1ec3 t\xednh c\xe1c kho\u1ea3n thanh to\xe1n, \u0111\xe3 \u0111\u1ebfn l\xfac t\u1ea1o function s\u1ebd transfer NFT v\xe0 tr\u1ea3 l\u1ea1i kho\u1ea3n thanh to\xe1n cho marketplace."}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/royalty.ts#L55-L121\n"})}),(0,c.jsx)(t.h3,{id:"c\xe1c-perpetual-royalty",children:"C\xe1c perpetual royalty"}),(0,c.jsxs)(t.p,{children:["\u0110\u1ec3 th\xeam t\xednh n\u0103ng h\u1ed7 tr\u1ee3 cho perpetual royalty, h\xe3y ch\u1ec9nh s\u1eeda file ",(0,c.jsx)(t.code,{children:"src/mint.ts"}),". \u0110\u1ea7u ti\xean, th\xeam m\u1ed9t tham s\u1ed1 t\xf9y ch\u1ecdn cho perpetual royalty. \u0110i\u1ec1u n\xe0y s\u1ebd x\xe1c \u0111\u1ecbnh t\u1ef7 l\u1ec7 ph\u1ea7n tr\u0103m s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n v\xe0o c\xe1c account khi NFT \u0111\u01b0\u1ee3c mua. B\u1ea1n c\u0169ng c\u1ea7n t\u1ea1o v\xe0 ch\xe8n royalty v\xe0o trong ",(0,c.jsx)(t.code,{children:"Token"})," object:"]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/mint.ts#L7-L64\n"})}),(0,c.jsx)(t.h3,{id:"th\xeam-royalty-object-v\xe0o-c\xe1c-tri\u1ec3n-khai-c\u1ea5u-tr\xfac",children:"Th\xeam royalty object v\xe0o c\xe1c tri\u1ec3n khai c\u1ea5u tr\xfac"}),(0,c.jsxs)(t.p,{children:["B\u1edfi v\xec b\u1ea1n \u0111\xe3 th\xeam m\u1ed9t filed m\u1edbi v\xe0o c\xe1c struct ",(0,c.jsx)(t.code,{children:"Token"})," v\xe0 ",(0,c.jsx)(t.code,{children:"JsonToken"})," c\u1ee7a m\xecnh, n\xean b\u1ea1n c\u1ea7n ph\u1ea3i ch\u1ec9nh s\u1eeda c\xe1c tri\u1ec3n khai c\u1ee7a m\xecnh cho ph\xf9 h\u1ee3p. Move to the ",(0,c.jsx)(t.code,{children:"nft-contract/src/internal.ts"})," file and edit the part of your ",(0,c.jsx)(t.code,{children:"internalTransfer"})," function that creates the new ",(0,c.jsx)(t.code,{children:"Token"})," object:"]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/internal.ts#L150-L158\n"})}),(0,c.jsxs)(t.p,{children:["Once that's finished, move to the ",(0,c.jsx)(t.code,{children:"nft-contract/src/nft_core.ts"})," file. You need to edit your implementation of ",(0,c.jsx)(t.code,{children:"internalNftToken"})," so that the ",(0,c.jsx)(t.code,{children:"JsonToken"})," sends back the new royalty information."]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/nft_core.ts#L10-L37\n"})}),(0,c.jsxs)(t.p,{children:["Ti\u1ebfp theo, b\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng CLI \u0111\u1ec3 truy v\u1ea5n function m\u1edbi ",(0,c.jsx)(t.code,{children:"nft_payout"})," v\xe0 x\xe1c nh\u1eadn r\u1eb1ng n\xf3 l\xe0m vi\u1ec7c ch\xednh x\xe1c."]}),(0,c.jsx)(t.h2,{id:"redeploying-contract",children:"Deploy contract"}),(0,c.jsx)(t.p,{children:"Gi\u1ed1ng nh\u01b0 b\u1ea1n \u0111\xe3 th\u1ea5y \u1edf b\xe0i h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc, vi\u1ec7c th\xeam c\xe1c thay \u0111\u1ed5i nh\u01b0 th\u1ebf n\xe0y s\u1ebd g\xe2y ra c\xe1c v\u1ea5n \u0111\u1ec1 khi redeploy. V\xec nh\u1eefng thay \u0111\u1ed5i n\xe0y \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn t\u1ea5t c\u1ea3 c\xe1c token kh\xe1c v\xe0 state s\u1ebd kh\xf4ng th\u1ec3 t\u1ef1 \u0111\u1ed9ng \u0111\u01b0\u1ee3c k\u1ebf th\u1eeba t\u1eeb code m\u1edbi, ch\u1ec9 redeploy contract s\u1ebd d\u1eabn \u0111\u1ebfn l\u1ed7i. V\xec l\xfd do n\xe0y, b\u1ea1n s\u1ebd t\u1ea1o m\u1ed9t sub-account m\u1edbi m\u1ed9t l\u1ea7n n\u1eefa."}),(0,c.jsx)(t.h3,{id:"t\u1ea1o-m\u1ed9t-sub-account",children:"T\u1ea1o m\u1ed9t sub-account"}),(0,c.jsxs)(t.p,{children:["Ch\u1ea1y command d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 t\u1ea1o m\u1ed9t sub-account ",(0,c.jsx)(t.code,{children:"royalty"})," cho account ch\xednh c\u1ee7a b\u1ea1n v\u1edbi s\u1ed1 d\u01b0 ban \u0111\u1ea7u l\xe0 25 NEAR, n\xf3 s\u1ebd \u0111\u01b0\u1ee3c transfer t\u1eeb account g\u1ed1c sang account m\u1edbi c\u1ee7a b\u1ea1n."]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"near create-account royalty.$NFT_CONTRACT_ID --masterAccount $NFT_CONTRACT_ID --initialBalance 25\n"})}),(0,c.jsx)(t.p,{children:"Ti\u1ebfp theo, b\u1ea1n s\u1ebd mu\u1ed1n export m\u1ed9t bi\u1ebfn m\xf4i tr\u01b0\u1eddng cho vi\u1ec7c develop \u0111\u01b0\u1ee3c d\u1ec5 d\xe0ng h\u01a1n:"}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"export ROYALTY_NFT_CONTRACT_ID=royalty.$NFT_CONTRACT_ID\n"})}),(0,c.jsx)(t.p,{children:"S\u1eed d\u1ee5ng build script, deploy contract nh\u01b0 b\u1ea1n \u0111\xe3 l\xe0m \u1edf c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc:"}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile build/nft.wasm --accountId $ROYALTY_NFT_CONTRACT_ID\n"})}),(0,c.jsx)(t.h3,{id:"initialization-and-minting",children:"Kh\u1edfi t\u1ea1o v\xe0 mint"}),(0,c.jsx)(t.p,{children:"V\xec \u0111\xe2y l\xe0 m\u1ed9t contract m\u1edbi, b\u1ea1n s\u1ebd c\u1ea7n ph\u1ea3i kh\u1edfi t\u1ea1o v\xe0 mint m\u1ed9t token. S\u1eed d\u1ee5ng command d\u01b0\u1edbi \u0111\xe2y \u0111\u1ec3 kh\u1edfi t\u1ea1o contract:"}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"near call $ROYALTY_NFT_CONTRACT_ID init '{\"owner_id\": \"'$ROYALTY_NFT_CONTRACT_ID'\"}' --accountId $ROYALTY_NFT_CONTRACT_ID\n"})}),(0,c.jsxs)(t.p,{children:["Ti\u1ebfp theo, b\u1ea1n s\u1ebd c\u1ea7n mint m\u1ed9t token. B\u1eb1ng c\xe1ch ch\u1ea1y command n\xe0y, b\u1ea1n s\u1ebd mint m\u1ed9t token v\u1edbi token ID ",(0,c.jsx)(t.code,{children:'"royalty-token"'})," v\xe0 ng\u01b0\u1eddi nh\u1eadn s\u1ebd l\xe0 account m\u1edbi c\u1ee7a b\u1ea1n. Ngo\xe0i ra, b\u1ea1n \u0111ang truy\u1ec1n v\xe0o m\u1ed9t map v\u1edbi hai account s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c perpetual royalty b\u1ea5t c\u1ee9 khi n\xe0o token c\u1ee7a b\u1ea1n \u0111\u01b0\u1ee3c b\xe1n."]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:'near call $ROYALTY_NFT_CONTRACT_ID nft_mint \'{"token_id": "approval-token", "metadata": {"title": "Approval Token", "description": "testing out the new approval extension of the standard", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$ROYALTY_NFT_CONTRACT_ID\'", "perpetual_royalties": {"benjiman.testnet": 2000, "mike.testnet": 1000, "josh.testnet": 500}}\' --accountId $ROYALTY_NFT_CONTRACT_ID --amount 0.1\n'})}),(0,c.jsx)(t.p,{children:"B\u1ea1n c\xf3 th\u1ec3 ki\u1ec3m tra xem m\u1ecdi th\u1ee9 c\xf3 di\u1ec5n ra b\xecnh th\u01b0\u1eddng hay kh\xf4ng b\u1eb1ng c\xe1ch g\u1ecdi m\u1ed9t trong c\xe1c enumeration function:"}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:'near view $ROYALTY_NFT_CONTRACT_ID nft_tokens_for_owner \'{"account_id": "\'$ROYALTY_NFT_CONTRACT_ID\'", "limit": 10}\'\n'})}),(0,c.jsx)(t.p,{children:"N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t output tr\xf4ng gi\u1ed1ng nh\u01b0 sau:"}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "token_id": "approval-token",\n    "owner_id": "royalty.goteam.examples.testnet",\n    "metadata": {\n      "title": "Approval Token",\n      "description": "testing out the new approval extension of the standard",\n      "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"\n    },\n    "approved_account_ids": {},\n    "royalty": {\n      "josh.testnet": 500,\n      "benjiman.testnet": 2000,\n      "mike.testnet": 1000\n    }\n  }\n]\n'})}),(0,c.jsx)(t.p,{children:"L\u01b0u \xfd, b\xe2y gi\u1edd l\xe0m th\u1ebf n\xe0o \u0111\u1ec3 c\xf3 m\u1ed9t royalty field ch\u1ee9a 3 account s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c t\u1ed5ng c\u1ed9ng 35% t\u1ed5ng doanh thu c\u1ee7a NFT n\xe0y? C\xf3 v\u1ebb nh\u01b0 n\xf3 ho\u1ea1t \u0111\u1ed9ng! Ti\u1ebfn l\xean c\xe1c b\u1ea1n :)"}),(0,c.jsx)(t.h3,{id:"nft-payout",children:"NFT payout"}),(0,c.jsxs)(t.p,{children:["H\xe3y t\xednh kho\u1ea3n thanh to\xe1n cho ",(0,c.jsx)(t.code,{children:'"approval-token"'})," NFT, v\u1edbi s\u1ed1 d\u01b0 l\xe0 100 yoctoNEAR. \u0110i\u1ec1u quan tr\u1ecdng c\u1ea7n l\u01b0u \xfd l\xe0 s\u1ed1 d\u01b0 \u0111\u01b0\u1ee3c truy\u1ec1n v\xe0o function ",(0,c.jsx)(t.code,{children:"nft_payout"})," mong mu\u1ed1n t\xednh b\u1eb1ng yoctoNEAR."]}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:'near view $ROYALTY_NFT_CONTRACT_ID nft_payout \'{"token_id": "approval-token", "balance": "100", "max_len_payout": 100}\'\n'})}),(0,c.jsx)(t.p,{children:"C\xe2u l\u1ec7nh n\xe0y s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t ouput ki\u1ec3u nh\u01b0 sau:"}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"{\n  payout: {\n    'josh.testnet': '5',\n    'royalty.goteam.examples.testnet': '65',\n    'mike.testnet': '10',\n    'benjiman.testnet': '20'\n  }\n}\n"})}),(0,c.jsxs)(t.p,{children:["N\u1ebfu NFT \u0111\xe3 \u0111\u01b0\u1ee3c b\xe1n v\u1edbi 100 yoctoNEAR, josh s\u1ebd \u0111\u01b0\u1ee3c 5, benji \u0111\u01b0\u1ee3c 20, mike \u0111\u01b0\u1ee3c 10, v\xe0 ch\u1ee7 s\u1edf h\u1eefu tr\u01b0\u1eddng h\u1ee3p n\xe0y l\xe0 ",(0,c.jsx)(t.code,{children:"royalty.goteam.examples.testnet"})," s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c ph\u1ea7n c\xf2n l\u1ea1i: 65."]}),(0,c.jsx)(t.h2,{id:"t\u1ed5ng-k\u1ebft",children:"T\u1ed5ng k\u1ebft"}),(0,c.jsx)(t.p,{children:"\u1ede th\u1eddi \u0111i\u1ec3m n\xe0y b\u1ea1n \u0111\xe3 c\xf3 m\u1ecdi th\u1ee9 b\u1ea1n c\u1ea7n cho m\u1ed9t NFT contract \u0111\u1ea7y \u0111\u1ee7 t\xednh n\u0103ng \u0111\u1ec3 t\u01b0\u01a1ng t\xe1c v\u1edbi c\xe1c marketplace. Ti\xeau chu\u1ea9n c\xf2n l\u1ea1i cu\u1ed1i c\xf9ng m\xe0 b\u1ea1n c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n l\xe0 c\xe1c ti\xeau chu\u1ea9n event. N\xf3 cho ph\xe9p c\xe1c indexer bi\u1ebft c\xe1c function n\xe0o \u0111ang \u0111\u01b0\u1ee3c call, qua \u0111\xf3 gi\xfap vi\u1ec7c theo d\xf5i th\xf4ng tin \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 hi\u1ec3n th\u1ecb trong collectibles tab \u1edf wallet d\u1ec5 d\xe0ng v\xe0 tin c\u1eady h\u01a1n."}),(0,c.jsxs)(t.admonition,{type:"info",children:[(0,c.jsxs)(t.mdxAdmonitionTitle,{children:["remember N\u1ebfu b\u1ea1n mu\u1ed1n xem code ho\xe0n ch\u1ec9nh c\u1ee7a h\u01b0\u1edbng d\u1eabn n\xe0y, c\xf3 th\u1ec3 checkout branch ",(0,c.jsx)(t.code,{children:"6.royalty"}),". :::"]}),(0,c.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,c.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["near-cli: ",(0,c.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,c.jsxs)(t.li,{children:["NFT standard: ",(0,c.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,c.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,c.jsxs)(t.li,{children:["Enumeration standard: ",(0,c.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,c.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,c.jsxs)(t.li,{children:["Royalties standard: ",(0,c.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Payout",children:"NEP199"}),", version ",(0,c.jsx)(t.code,{children:"2.0.0"})]}),"\n"]})]})]})]})]})}function d(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(l,{...n})}):l(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>r,a:()=>o});var c=e(67294);const i={},a=c.createContext(i);function o(n){const t=c.useContext(a);return c.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),c.createElement(a.Provider,{value:t},n.children)}}}]);