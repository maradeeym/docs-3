"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4856],{6203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=t(85893),i=t(11151);const r=t.p+"assets/images/logging-in-2fae41d7bd3bfaa9509e199426ef897e.png",o=t.p+"assets/images/chapter-2-explorer-transfer-620c7e86d643ecdf5f6a609731a6574a.jpg",c={sidebar_position:6,sidebar_label:"\uc561\uc138\uc2a4 \ud0a4 \ubc0f \ub85c\uadf8\uc778 2/2",title:"\ub85c\uadf8\uc778 \ubc84\ud2bc \uad6c\ud604"},a="\ub85c\uadf8\uc778 \uae30\ub2a5 \ucd94\uac00",l={id:"tutorials/crosswords/beginner/logging-in-implementation",title:"\ub85c\uadf8\uc778 \ubc84\ud2bc \uad6c\ud604",description:"\uacc4\ud68d",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/02-beginner/06-logging-in-implementation.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/logging-in-implementation",permalink:"/ko/tutorials/crosswords/beginner/logging-in-implementation",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/06-logging-in-implementation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"\uc561\uc138\uc2a4 \ud0a4 \ubc0f \ub85c\uadf8\uc778 2/2",title:"\ub85c\uadf8\uc778 \ubc84\ud2bc \uad6c\ud604"},sidebar:"contracts",previous:{title:"\uc561\uc138\uc2a4 \ud0a4 \ubc0f \ub85c\uadf8\uc778 1/2",permalink:"/ko/tutorials/crosswords/beginner/logging-in"},next:{title:"\uac1c\uc694",permalink:"/ko/tutorials/crosswords/intermediate/overview"}},d={},h=[{value:"\uacc4\ud68d",id:"\uacc4\ud68d",level:2},{value:"\ubc84\ud2bc \ucd94\uac00",id:"\ubc84\ud2bc-\ucd94\uac00",level:2},{value:"JavaScript\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8 \ud568\uc218 \ud638\ucd9c",id:"javascript\uc5d0\uc11c-\ucee8\ud2b8\ub799\ud2b8-\ud568\uc218-\ud638\ucd9c",level:2},{value:"\ud37c\uc990 \uac00\uc838\uc624\uae30, \ub9c8\ubb34\ub9ac",id:"\ud37c\uc990-\uac00\uc838\uc624\uae30-\ub9c8\ubb34\ub9ac",level:2},{value:"React \uc571 \uc791\ub3d9",id:"react-\uc571-\uc791\ub3d9",level:2},{value:"\uc7ac\ubbf8\ub97c \uc704\ud574",id:"\uc7ac\ubbf8\ub97c-\uc704\ud574",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\ub85c\uadf8\uc778-\uae30\ub2a5-\ucd94\uac00",children:"\ub85c\uadf8\uc778 \uae30\ub2a5 \ucd94\uac00"}),"\n",(0,s.jsx)(n.h2,{id:"\uacc4\ud68d",children:"\uacc4\ud68d"}),"\n",(0,s.jsxs)(n.p,{children:["NEAR\ub85c \ub85c\uadf8\uc778\ud560 \ub54c, ",(0,s.jsx)(n.code,{children:"near-api-js"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ub85c\uadf8\uc778 \ubc84\ud2bc\uc744 \ucd94\uac00\ud560 \uc608\uc815\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\ub2e4\uc74c\uc740 \ub85c\uadf8\uc778 \uc6cc\ud06c\ud50c\ub85c\uc6b0\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)("img",{src:r,alt:"\ub85c\uadf8\uc778\ud558\uae30 \uc704\ud55c \uc138 \ub2e8\uacc4. 1. \ub85c\uadf8\uc778 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. 2. \ube0c\ub77c\uc6b0\uc800 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uac1c\uc778 \ud0a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. 3. \uc11c\uba85\ud558\ub294 NEAR Wallet\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub418\uc5b4 \uc0c8 \ud0a4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"near-api-js"}),"\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uac1c\uc778 \ud0a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:["\uacf5\uc6a9 \ud0a4\ub97c \uc804\ub2ec\ud558\ub294 NEAR Wallet\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub429\ub2c8\ub2e4. NEAR Wallet\uc5d0\ub294 ",(0,s.jsx)(n.code,{children:"AddKey"})," Action\uc774 \uac00\ub2a5\ud55c \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uc774\ub97c \ub530\ub77c \uad81\uadf9\uc801\uc73c\ub85c \uc0c8 \ud0a4 \uc0dd\uc131\uc744 \uc2b9\uc778\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ubc84\ud2bc-\ucd94\uac00",children:"\ubc84\ud2bc \ucd94\uac00"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"src"})," \ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \ub2e4\uc74c\uc744 \ud655\uc778\ud560 \uac83\uc785\ub2c8\ub2e4:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"index.js"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"App.js"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\uc6b0\ub9ac\ub294 \ubaa8\ub4e0 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uac80\ud1a0\ud558\uc9c0 \uc54a\uace0 \ub300\uc2e0 \uc0c8\ub85c\uc6b4 \ub85c\uc9c1\uc744 \uc791\uc131\ud560 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.p,{children:["\uba3c\uc800 JavaScript \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c ",(0,s.jsx)(n.code,{children:"WalletConnection"})," \uac1d\uccb4\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/1d64bf29c3376a18c71e5c5a075e29824d7a55f5/src/index.js#L12-L20\n"})}),"\n",(0,s.jsx)(n.p,{children:"\uadf8\ub7f0 \ub2e4\uc74c \uc774\ub294 React\uc5d0\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const signIn = () => {\n  walletConnection.requestSignIn(\n    nearConfig.contractName,\n    '', // title. Optional, by the way\n    '', // successUrl. Optional, by the way\n    '', // failureUrl. Optional, by the way\n  );\n};\n\nconst signOut = () => {\n  walletConnection.signOut();\n  \u2026\n};\n\n\u2026\n\nreturn (\n  <div id=\"page\">\n    <h1>NEAR Crossword Puzzle</h1>\n    <div id=\"crossword-wrapper\">\n      <div id=\"login\">\n        { currentUser\n          ? <button onClick={signOut}>Log out</button>\n          : <button onClick={signIn}>Log in</button>\n        }\n      </div>\n      \u2026\n    </div>\n  </div>\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\ub85c\uadf8\uc778\ud558\uba74 \ud574\ub2f9 ",(0,s.jsx)(n.code,{children:"WalletConnection"})," \uac1d\uccb4\ub294 \ub85c\uadf8\uc778\ud55c \uc0ac\uc6a9\uc790\uc640 \uc5f0\uacb0\ub418\uba70, \ud574\ub2f9 \ud0a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\uace0 \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.admonition,{title:"NEAR \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub418\ub294 \ud2b8\ub79c\uc7ad\uc158 \uac1c\uc120\ub41c \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc5d0 \ub85c\uadf8\uc778\ud55c \uc0ac\uc6a9\uc790\uc758 \ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\ub294 \uc815\ub2f5\uc744 \uc81c\ucd9c\ud558\uae30 \uc704\ud574 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub294 \ub370\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.",type:"info",children:[(0,s.jsx)(n.p,{children:"\uadf8\ub7ec\ub098, NEAR \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\uace0 \uadf8\ub807\uc9c0 \uc54a\uc740 \uacbd\uc6b0\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),(0,s.jsxs)(n.p,{children:["\uc774\ub294 \uc6b0\ub9ac\uac00 \uc5b8\uae09\ud55c \uc774\uc804 \uaddc\uce59\uc73c\ub85c \ub418\ub3cc\uc544\uac11\ub2c8\ub2e4: \ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\ub294 NEAR\ub97c \uc804\uc1a1\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uadf8\ub4e4\uc740 ",(0,s.jsx)(n.code,{children:"Transfer"})," Action\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."]}),(0,s.jsx)(n.p,{children:"\ud568\uc218 \ud638\ucd9c\uc5d0 1 yoctoNEAR\ub77c\ub3c4 \ud544\uc694\ud55c \uacbd\uc6b0, \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub824\uba74 NEAR \uc9c0\uac11(\ub610\ub294 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \ud3ec\ud568\ub41c \ub2e4\ub978 \uc9c0\uac11)\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. :::"}),(0,s.jsx)(n.h2,{id:"javascript\uc5d0\uc11c-\ucee8\ud2b8\ub799\ud2b8-\ud568\uc218-\ud638\ucd9c",children:"JavaScript\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8 \ud568\uc218 \ud638\ucd9c"}),(0,s.jsxs)(n.p,{children:["\ud504\ub860\ud2b8\uc5d4\ub4dc \ucf54\ub4dc\uc5d0\ub294 \uc0ac\uc6a9\uc790\uac00 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc744 \uc131\uacf5\uc801\uc73c\ub85c \uc644\ub8cc\ud588\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac80\uc0ac\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,s.jsx)(n.code,{children:"submit_solution"})," \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ub85c\uc9c1\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Send the 5 NEAR prize to the logged-in winner\nlet functionCallResult = await walletConnection.account().functionCall({\n  contractId: nearConfig.contractName,\n  methodName: 'submit_solution',\n  args: {solution: seedPhrase, memo: \"Yay I won!\"},\n  gas: DEFAULT_FUNCTION_CALL_GAS, // optional param, by the way\n  attachedDeposit: 0,\n  walletMeta: '', // optional param, by the way\n  walletCallbackUrl: '' // optional param, by the way\n});\n\nif (functionCallResult && functionCallResult.transaction && functionCallResult.transaction.hash) {\n  // Display a link the NEAR Explorer\n  console.log('Transaction hash for explorer', functionCallResult.transaction.hash)\n}\n"})}),(0,s.jsxs)(n.admonition,{title:"TRY\u2026CATCH \ube14\ub85d \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc624\ub958\ub97c \uc801\uc808\ud558\uac8c \ucc98\ub9ac\ud558\uae30 \uc704\ud574 \uc774\ub7ec\ud55c \uc720\ud615\uc758 \ud638\ucd9c\uc744 try\u2026catch \ube14\ub85d\uc73c\ub85c \ub798\ud551\ud558\ub294 \uac83\uc740 \ub098\uc05c \uc0dd\uac01\uc774 \uc544\ub2d9\ub2c8\ub2e4.",type:"tip",children:[(0,s.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \uc624\ub958\ub294 \uac1c\ubc1c\uc790\uc640 \ucd5c\uc885 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub9e4\uc6b0 \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. :::"}),(0,s.jsx)(n.h2,{id:"\ud37c\uc990-\uac00\uc838\uc624\uae30-\ub9c8\ubb34\ub9ac",children:"\ud37c\uc990 \uac00\uc838\uc624\uae30, \ub9c8\ubb34\ub9ac"}),(0,s.jsx)(n.p,{children:"\uc774\uc804 \ucc55\ud130\uc5d0\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc\ub294 \uac04\ub2e8\ud55c \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc758 \ub2e8\uc11c\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \ud3ec\ud568\ub41c \ud558\ub4dc\ucf54\ub529\ub41c \ud30c\uc77c\uc744 \uac00\uc9c0\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774 \ucc55\ud130\uc5d0\uc11c \ub2e8\uc11c\uc5d0 \ub300\ud55c \uc88c\ud45c\uc640 \uc138\ubd80 \uc815\ubcf4\ub97c \uc81c\uacf5\ud588\uc9c0\ub9cc, \ud504\ub860\ud2b8\uc5d4\ub4dc\ub294 \uc774 \uc815\ubcf4\ub97c \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4."}),(0,s.jsxs)(n.p,{children:["\uc774\uc81c \ucee8\ud2b8\ub799\ud2b8 \ub0b4 ",(0,s.jsx)(n.code,{children:"get_unsolved_puzzles"}),"\uc5d0 \ub300\ud55c \ubcf4\uae30 \uc804\uc6a9 \ud638\ucd9c\uc744 \ub458\ub7ec\uc2fc \ub85c\uc9c1\uc744 \uc218\uc815\ud560 \uac83\uc785\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub294 \ub2e8\uc11c \uc815\ubcf4\ub97c \ubc18\ud658\ud558\ubbc0\ub85c, React\uac00 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc744 \uad6c\uc131\ud560 \uc218 \uc788\ub3c4\ub85d \uc801\uc808\ud55c \ud615\uc2dd\uc73c\ub85c \uc785\ub825\uac12\uc744 \ubc1b\ub294 \ud568\uc218\ub97c \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4."]}),(0,s.jsxs)(n.p,{children:["\uc774\uac83\uc740 Rust \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc5d0 \ub300\ud55c \ud29c\ud1a0\ub9ac\uc5bc\uc774\ubbc0\ub85c, \uc774\uc5d0 \ub300\ud55c \uc138\ubd80 \uc0ac\ud56d\uc5d0 \ucd08\uc810\uc744 \ub9de\ucd94\uc9c0 \uc54a\uaca0\uc9c0\ub9cc, ",(0,s.jsx)(n.code,{children:"mungeBlockchainCrossword"})," \ud568\uc218\ub97c \ucd94\uac00\ud588\uc74c\uc744 \uc54c\uc544\ub450\ub3c4\ub85d \ud558\uc138\uc694. \uc774\ub97c \ud1b5\ud574 \ub9de\ucda4\ud615 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc744 \uacc4\uc18d \ucd94\uac00\ud558\uace0, \ud504\ub860\ud2b8\uc5d4\ub4dc\ub97c \ub3d9\uc801\uc73c\ub85c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsx)(n.p,{children:"\ub610\ud55c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud37c\uc990\uc774 \uc5c6\uc744 \ub54c\ub97c \uc704\ud55c \ud398\uc774\uc9c0\ub97c \ucd94\uac00\ud558\uace0, \ub85c\ub529 \ud654\uba74\uc744 \ucd94\uac00\ud558\ub294 \uac83\uacfc \uac19\uc740 \ub2e4\ub978 \uc0ac\uc18c\ud55c \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc801\uc6a9\ud560 \uac83\uc785\ub2c8\ub2e4."}),(0,s.jsx)(n.h2,{id:"react-\uc571-\uc791\ub3d9",children:"React \uc571 \uc791\ub3d9"}),(0,s.jsx)(n.p,{children:"\uc774 \uac00\uc774\ub4dc\ub97c \uc798 \ub530\ub790\ub2e4\uba74, \ub2e4\uc74c\uacfc \uac19\uc774 React \uc571\uc744 \uc2dc\uc791\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4."}),(0,s.jsx)(n.p,{children:"env CONTRACT_NAME=crossword.friend.testnet npm run start"}),(0,s.jsx)(n.p,{children:"\ub3c4\uc6c0\uc744 \ub4dc\ub9ac\uae30 \uc704\ud574 \ub2e4\uc2dc \uc774\uc57c\uae30\ud558\uc790\uba74, \uc544\ub798\uc5d0\ub294 \ud558\uc704 \uacc4\uc815(sub-account)\uc744 \ub2e4\uc2dc \ub9cc\ub4e4\uace0, \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uace0, \ud558\uc704 \uacc4\uc815\uc744 \ubc30\ud3ec\ud558\uba70, \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ub370 \ud544\uc694\ud55c \ub2e8\uacc4\uac00 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Go into the directory containing the Rust smart contract we\'ve been working on\ncd contract\n\n# Build (for Windows it\'s build.bat)\n./build.sh\n\n# Create fresh account if you wish, which is good practice\nnear delete crossword.friend.testnet friend.testnet\nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n\n# Deploy\nnear deploy crossword.friend.testnet --wasmFile res/crossword_tutorial_chapter_2.wasm --initFunction new --initArgs \'{"owner_id": "crossword.friend.testnet"}\'\n# Add the crossword puzzle\nnear call crossword.friend.testnet new_puzzle \'{"solution_hash":"d1a5cf9ad1adefe0528f7d31866cf901e665745ff172b96892693769ad284010","answers":[{"num": 1,"start": {"x": 1,"y": 1},"direction": "Down","length": 5,"clue": "NFT market on NEAR that specializes in cards and comics."},{"num": 2,"start": {"x": 0,"y": 2},"direction": "Across","length": 13,"clue": "You can move assets between NEAR and different chains, including Ethereum, by visiting ______.app"},{"num": 3,"start": {"x": 9,"y": 1},"direction": "Down","length": 8,"clue": "NFT market on NEAR with art, physical items, tickets, and more."},{"num": 4,"start": {"x": 3,"y": 8},"direction": "Across","length": 9,"clue": "The smallest denomination of the native token on NEAR."},{"num": 5,"start": {"x": 5,"y": 8},"direction": "Down","length": 3,"clue": "You typically deploy a smart contract with the NEAR ___ tool."}]}\' --accountId crossword.friend.testnet\n\n# Return to the project root and start the React app\ncd ..\nenv CONTRACT_NAME=crossword.friend.testnet npm run start\n'})}),(0,s.jsx)(n.h2,{id:"\uc7ac\ubbf8\ub97c-\uc704\ud574",children:"\uc7ac\ubbf8\ub97c \uc704\ud574"}),(0,s.jsx)(n.p,{children:"\uc7ac\ubbf8\ub85c React \ud504\ub860\ud2b8\uc5d4\ub4dc \ubc0f CLI\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud574 \ubcf4\uc138\uc694. CLI\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud37c\uc990\uc758 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uace0 \ud504\ub860\ud2b8\uc5d4\ub4dc\ub85c \ud37c\uc990\uc744 \ud47c \ub2e4\uc74c \uc0c1\ud0dc\ub97c \ub2e4\uc2dc \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,s.jsx)(n.p,{children:"\ud37c\uc990\uc744 \ud480\uae30 \uc804\ud6c4\uc5d0 \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'    near view crossword.friend.testnet get_puzzle_status \'{"solution_hash": "d1a5cf9ad1adefe0528f7d31866cf901e665745ff172b96892693769ad284010"}\'\n'})}),(0,s.jsxs)(n.p,{children:["\uc774\ub294 \uc6b0\ub9ac\uc758 \uc5f4\uac70\ud615(Enums) ",(0,s.jsx)(n.code,{children:"PuzzleStatus"}),"\uc744 \ubc18\ud658\ud560 \uac83\uc785\ub2c8\ub2e4. \ud37c\uc990\uc744 \ud480\uae30 \uc804\uc5d0\ub294, \ub2e4\uc74c\uc744 \ucd9c\ub825\ud574\uc57c \ud569\ub2c8\ub2e4."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"    'Unsolved'\n"})}),(0,s.jsx)(n.p,{children:"\uadf8\ub9ac\uace0 \ud47c \ub2e4\uc74c\uc5d0\ub294:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"    { Solved: { memo: 'Yay I won!' } }\n"})}),(0,s.jsxs)(n.p,{children:["\uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc744 \ud480\uace0 \ub098\uba74, NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec\uc5d0 \ub300\ud55c \ub9c1\ud06c\uac00 \ud3ec\ud568\ub41c \ud654\uba74\uc774 \ud45c\uc2dc\ub418\uc5b4 \ud2b8\ub79c\uc7ad\uc158 \uc138\ubd80 \uc815\ubcf4\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac70\uae30\uc5d0 ",(0,s.jsx)(n.code,{children:"Transfer"})," Action\uc774 \uc788\uc74c\uc744 \uc8fc\ubaa9\ud558\uc138\uc694:"]}),(0,s.jsx)("figure",{children:(0,s.jsx)("img",{src:o,alt:"\ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c 5 NEAR\uac00 mike.testnet\uc73c\ub85c \uc804\uc1a1\ub418\ub294 \uc704\uce58\ub97c \uac15\uc870 \ud45c\uc2dc\ud558\ub294 NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec\uc758 \uc2a4\ud06c\ub9b0\uc0f7\n"})}),(0,s.jsx)("br",{}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.p,{children:"\uc774\ubc88 \ucc55\ud130\ub294 \uc5ec\uae30\uae4c\uc9c0\uc785\ub2c8\ub2e4! \ucc38\uace0\ub85c, \uc804\uccb4 \ucf54\ub4dc\ub294 \ub2e4\uc74c\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-2",children:"https://github.com/near-examples/crossword-tutorial-chapter-2"})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);