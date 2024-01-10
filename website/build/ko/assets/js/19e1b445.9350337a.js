"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3956],{74724:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=s(85893),c=s(11151);const r={id:"setup",title:"\uc124\uc815"},t=void 0,d={id:"api/rpc/setup",title:"\uc124\uc815",description:"RPC API\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \uc62c\ubc14\ub978 RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/5.api/rpc/setup.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/setup",permalink:"/ko/api/rpc/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/setup.md",tags:[],version:"current",frontMatter:{id:"setup",title:"\uc124\uc815"},sidebar:"api",previous:{title:"RPC \uc81c\uacf5\uc790",permalink:"/ko/api/rpc/providers"},next:{title:"\uc561\uc138\uc2a4 \ud0a4",permalink:"/ko/api/rpc/access-keys"}},l={},a=[{value:"RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc124\uc815",id:"rpc-\uc5d4\ub4dc\ud3ec\uc778\ud2b8-\uc124\uc815",level:2},{value:"\ud55c\ub3c4",id:"\ud55c\ub3c4",level:3},{value:"\uacfc\uac70 \ub370\uc774\ud130 \ucffc\ub9ac",id:"\uacfc\uac70-\ub370\uc774\ud130-\ucffc\ub9ac",level:2},{value:"\ud55c\ub3c4",id:"\ud55c\ub3c4-1",level:3},{value:"Postman \uc124\uc815",id:"postman-setup",level:2},{value:"JavaScript \uc124\uc815",id:"javascript-setup",level:2},{value:"HTTPie \uc124\uc815",id:"httpie-setup",level:2},{value:"\ub9e4\uac1c\ubcc0\uc218 <code>block_id</code> \uc0ac\uc6a9",id:"using-block_id-param",level:2},{value:"<code>finality</code> \ub9e4\uac1c\ubcc0\uc218 \uc0ac\uc6a9",id:"using-finality-param",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"RPC API\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \uc62c\ubc14\ub978 RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h2,{id:"rpc-\uc5d4\ub4dc\ud3ec\uc778\ud2b8-\uc124\uc815",children:"RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc124\uc815"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"POST"})," (\ubaa8\ub4e0 \uba54\uc11c\ub4dc\uc5d0 \ub300\ud574)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"JSON RPC 2.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'id: "dontcare"'})}),"\n",(0,i.jsxs)(n.li,{children:["\uc5d4\ub4dc\ud3ec\uc778\ud2b8 URL\uc740 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["mainnet ",(0,i.jsx)(n.code,{children:"https://rpc.mainnet.near.org"})]}),"\n",(0,i.jsxs)(n.li,{children:["testnet ",(0,i.jsx)(n.code,{children:"https://rpc.testnet.near.org"})]}),"\n",(0,i.jsxs)(n.li,{children:["betanet ",(0,i.jsx)(n.code,{children:"https://rpc.betanet.near.org"})," ",(0,i.jsx)(n.em,{children:"(\ubd88\uc548\uc815\ud560 \uc218 \uc788\uc74c)"})]}),"\n",(0,i.jsxs)(n.li,{children:["localnet ",(0,i.jsx)(n.code,{children:"http://localhost:3030"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\ud55c\ub3c4",children:"\ud55c\ub3c4"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IP\ub2f9 \ucd5c\ub300 \uc694\uccad \uc218: 600 req/min"}),"\n"]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h2,{id:"\uacfc\uac70-\ub370\uc774\ud130-\ucffc\ub9ac",children:"\uacfc\uac70 \ub370\uc774\ud130 \ucffc\ub9ac"}),"\n",(0,i.jsxs)(n.p,{children:["\uc774\uc804 \ub370\uc774\ud130(5 ",(0,i.jsx)(n.a,{href:"/ko/concepts/basics/epoch",children:"\uc5d0\ud3ec\ud06c"})," \ub610\ub294 ~2.5\uc77c\ubcf4\ub2e4 \uc624\ub798\ub41c)\ub97c \ucffc\ub9ac\ud558\uba74 \ub370\uc774\ud130\ub97c \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4\ub294 \uc751\ub2f5\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \uc544\uce74\uc774\ube0c RPC \ub178\ub4dc\uac00 \ud574\uacb0\ucc45\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["mainnet ",(0,i.jsx)(n.code,{children:"https://archival-rpc.mainnet.near.org"})]}),"\n",(0,i.jsxs)(n.li,{children:["testnet ",(0,i.jsx)(n.code,{children:"https://archival-rpc.testnet.near.org"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/near/nearcore/blob/bf9ae4ce8c680d3408db1935ebd0ca24c4960884/chain/jsonrpc/client/src/lib.rs#L181",children:"\uc5ec\uae30"}),"\uc5d0\uc11c, ",(0,i.jsx)(n.code,{children:"nearcore"}),"\uc5d0 \uc815\uc758\ub41c \uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h3,{id:"\ud55c\ub3c4-1",children:"\ud55c\ub3c4"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"IP\ub2f9 \ucd5c\ub300 \uc694\uccad \uc218: 600 req/min"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"postman-setup",children:"Postman \uc124\uc815"}),"\n",(0,i.jsxs)(n.p,{children:["\uc774 \ubb38\uc11c \ud398\uc774\uc9c0\uc5d0\uc11c \ucffc\ub9ac\ub97c \ud14c\uc2a4\ud2b8\ud558\ub294 \uc26c\uc6b4 \ubc29\ubc95\uc740 ",(0,i.jsx)(n.a,{href:"https://www.postman.com/",children:"Postman"}),"\uacfc \uac19\uc740 API \uc694\uccad \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ub2e4\uc74c \ub450 \uac00\uc9c0\ub9cc \uad6c\uc131\ud558\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\ud0a4\ub85c\ub294 ",(0,i.jsx)(n.code,{children:"Content-Type"}),", \uac12\uc73c\ub85c\ub294 ",(0,i.jsx)(n.code,{children:"application/json"})," \uac00\uc9c4 \ud5e4\ub354\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,i.jsx)(n.img,{alt:"postman-setup-header",src:s(99916).Z+"",width:"1064",height:"299"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\uadf8\ub7f0 \ub2e4\uc74c ",(0,i.jsx)(n.code,{children:"Body"})," \ud0ed\uc744 \uc120\ud0dd\ud558\uace0, ",(0,i.jsx)(n.code,{children:"raw"})," \ub77c\ub514\uc624 \ubc84\ud2bc\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. ",(0,i.jsx)(n.code,{children:"JSON"}),"\uc774 \uc120\ud0dd\ud55c \ud615\uc2dd\uc778\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. ",(0,i.jsx)(n.img,{alt:"postman-setup-header",src:s(2121).Z+"",width:"1052",height:"324"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\uc124\uc815\ud55c \ud6c4, Postman \uc694\uccad\uc758 ",(0,i.jsx)(n.code,{children:"body"})," \uc544\ub798 ",(0,i.jsx)(n.code,{children:"JSON object"})," \uc608\uc81c \uc2a4\ub2c8\ud3ab\uc744 \ubcf5\uc0ac/\ubd99\uc5ec\ub123\uae30\ud558\uace0, ",(0,i.jsx)(n.code,{children:"send"}),"\uc744 \ud074\ub9ad\ud558\uc138\uc694."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"javascript-setup",children:"JavaScript \uc124\uc815"}),"\n",(0,i.jsxs)(n.p,{children:["\uc774 \ubb38\uc11c \ud398\uc774\uc9c0\uc5d0 \ub098\uc5f4\ub41c \ubaa8\ub4e0 \ucffc\ub9ac\ub294 ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-api-js",children:(0,i.jsx)(n.code,{children:"near-api-js"})}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"near-api-js"})," \uc124\uce58 \ubc0f \uc124\uc815\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,i.jsx)(n.a,{href:"/tools/near-api-js/quick-reference",children:"\ube60\ub978 \ucc38\uc870 \ubb38\uc11c"}),"\ub97c \ucc38\uc870\ud558\uc138\uc694."]}),"\n",(0,i.jsxs)(n.li,{children:["\ubaa8\ub4e0 JavaScript \ucf54\ub4dc \uc2a4\ub2c8\ud3ab\uc5d0\ub294 ",(0,i.jsx)(n.code,{children:"near"})," \uac1d\uccb4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc778\uc2a4\ud134\uc2a4\ud654 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc608\ub97c \ubcf4\ub824\uba74 ",(0,i.jsx)(n.a,{href:"/tools/near-api-js/quick-reference#connect",children:"\uc5ec\uae30"}),"\ub97c \ud074\ub9ad\ud558\uc138\uc694."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"httpie-setup",children:"HTTPie \uc124\uc815"}),"\n",(0,i.jsxs)(n.p,{children:["\uba85\ub839\uc904 \uc778\ud130\ud398\uc774\uc2a4 \uc0ac\uc6a9\uc744 \uc120\ud638\ud558\ub294 \uacbd\uc6b0, ",(0,i.jsx)(n.a,{href:"https://httpie.org/",children:"HTTPie"}),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 RPC \uc608\uc81c\ub97c \uc81c\uacf5\ud588\uc2b5\ub2c8\ub2e4. \ub9e4\uac1c\ubcc0\uc218\ub85c\ub294 \uac1d\uccb4 \ub610\ub294 \ubb38\uc790\uc5f4\ub85c \uc804\ub2ec\ub41c \ubc30\uc5f4\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=network_info params:='[]'\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"using-block_id-param",children:["\ub9e4\uac1c\ubcc0\uc218 ",(0,i.jsx)(n.code,{children:"block_id"})," \uc0ac\uc6a9"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"block_id"})," \ub9e4\uac1c\ubcc0\uc218\ub294 \ube14\ub85d \ubc88\ud638(\uc608: ",(0,i.jsx)(n.code,{children:"27912554"}),") \ub610\ub294 \ube14\ub85d \ud574\uc2dc(\uc608: ",(0,i.jsx)(n.code,{children:"'3Xz2wM9rigMXzA2c5vgCP8wTgFBaePucgUmVYPkMqhRL'"}),")\ub97c \uc778\uc790\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("a",{href:"https://explorer.testnet.near.org",children:"NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec"}),"\uc5d0 \ud45c\uc2dc\ub418\ub294 \ud2b8\ub79c\uc7ad\uc158\uc758 \ube14\ub85d ID\uac00 \ubc18\ub4dc\uc2dc \uc2e4\ud589\ub41c \ud2b8\ub79c\uc7ad\uc158\uc758 \ube14\ub85d ID\ub294 \uc544\ub2d9\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc740 \uae30\ub85d\ub41c \ud6c4 \ud55c\ub450 \ube14\ub85d\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc73c\uba70, \uacbd\uc6b0\uc5d0 \ub530\ub77c \uc5ec\ub7ec \ube14\ub85d\uc5d0 \uac78\uccd0 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \ucffc\ub9ac\ub41c \ud2b8\ub79c\uc7ad\uc158\uacfc \uad00\ub828\ub41c \ubaa8\ub4e0 \uacb0\uacfc\uac00 \ubc1c\uacac\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 \ud6c4\uc18d \ube14\ub85d\uc744 \ud655\uc778\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"using-finality-param",children:[(0,i.jsx)(n.code,{children:"finality"})," \ub9e4\uac1c\ubcc0\uc218 \uc0ac\uc6a9"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"finality"})," \ub9e4\uac1c\ubcc0\uc218\uc5d0\ub294 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4: ",(0,i.jsx)(n.code,{children:"optimistic"}),"\uacfc ",(0,i.jsx)(n.code,{children:"final"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"optimistic"})," uses the latest block recorded on the node that responded to your query ",(0,i.jsx)(n.em,{children:"(< 1 second delay after the transaction is submitted)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"final"}),"\ub294 \ub124\ud2b8\uc6cc\ud06c \ub178\ub4dc\uc758 \ucd5c\uc18c 66%\uc5d0\uc11c \uac80\uc99d\ub41c \ube14\ub85d\uc6a9\uc785\ub2c8\ub2e4 ",(0,i.jsx)(n.em,{children:"(\ubcf4\ud1b5 2\ube14\ub85d \uc18c\uc694/\uc57d 2\ucd08 \uc9c0\uc5f0)"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},2121:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/postman-setup-body-93fd45785b0fee57caa83bc9ee772d45.png"},99916:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/postman-setup-headers-54e021bfa8af3fb5992db0f4281ae948.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var i=s(67294);const c={},r=i.createContext(c);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);