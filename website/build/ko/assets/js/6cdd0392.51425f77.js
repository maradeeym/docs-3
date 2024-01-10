"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9527],{25933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var s=n(85893),r=n(11151);const a={id:"get-started"},c="\uc2dc\uc791\ud558\uae30",o={id:"sdk/rust/get-started",title:"\uc2dc\uc791\ud558\uae30",description:"Rust \ubc0f Wasm \ud234\uccb4\uc778 \uc124\uce58",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/rust/intro.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/get-started",permalink:"/ko/sdk/rust/get-started",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/intro.md",tags:[],version:"current",frontMatter:{id:"get-started"},sidebar:"tools",previous:{title:"Rust SDK\uc5d0 \ub300\ud574",permalink:"/ko/sdk/rust/introduction"},next:{title:"near_bindgen",permalink:"/ko/sdk/rust/contract-structure/near-bindgen"}},d={},i=[{value:"Rust \ubc0f Wasm \ud234\uccb4\uc778 \uc124\uce58",id:"rust-\ubc0f-wasm-\ud234\uccb4\uc778-\uc124\uce58",level:2},{value:"\uc0c8 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",id:"\uc0c8-\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\uc2dc\uc791\ud558\uae30",children:"\uc2dc\uc791\ud558\uae30"}),"\n",(0,s.jsx)(t.h2,{id:"rust-\ubc0f-wasm-\ud234\uccb4\uc778-\uc124\uce58",children:"Rust \ubc0f Wasm \ud234\uccb4\uc778 \uc124\uce58"}),"\n",(0,s.jsxs)(t.p,{children:["Rust\ub97c \uc124\uc815\ud558\ub824\uba74 ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/book/ch01-01-installation.html",children:"\ub2e4\uc74c \uc9c0\uce68"}),"\uc744 \ub530\ub974\uc138\uc694."]}),"\n",(0,s.jsx)(t.p,{children:"Linux \ub610\ub294 MacOS\uc5d0 Rust\ub97c \uc124\uce58\ud558\ub824\uba74 \ub2e4\uc74c \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh\n\nsource $HOME/.cargo/env\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\uadf8\ub7f0 \ub2e4\uc74c ",(0,s.jsx)(t.code,{children:"wasm32-unknown-unknown"})," \ud234\uccb4\uc778\uc744 \ucd94\uac00\ud558\uc138\uc694. \uc774 \ud234\uccb4\uc778\uc740 \uc6b0\ub9ac\uac00 \uad6c\ucd95\ud560 \ucee8\ud2b8\ub799\ud2b8\ub97c NEAR \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uc2e4\ud589\ub418\ub3c4\ub85d ",(0,s.jsx)(t.a,{href:"https://webassembly.org/",children:"Wasm"}),"\uc73c\ub85c \ucef4\ud30c\uc77c\ud558\uae30 \ub54c\ubb38\uc5d0 \ud544\uc694\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"rustup target add wasm32-unknown-unknown\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\uc0c8-\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",children:"\uc0c8 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"}),"\n",(0,s.jsxs)(t.p,{children:["\ud504\ub860\ud2b8\uc5d4\ub4dc\uc640 \uc5f0\uacb0\ub41c \uc0c8 NEAR \uc571\uc744 \ub9cc\ub4dc\ub294 \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95\uc740 ",(0,s.jsx)(t.a,{href:"https://github.com/near/create-near-app",children:"create-near-app"}),"\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\ub97c \ucd08\uae30\ud654\ud560 \ub54c Rust SDK\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,s.jsx)(t.code,{children:"--contract=rust"})," \ud50c\ub798\uadf8\ub97c \ubc18\ub4dc\uc2dc \ud3ec\ud568\ud574\uc57c \ud569\ub2c8\ub2e4. React\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,s.jsx)(t.code,{children:"--frontend=react"}),"\ub97c \ucd94\uac00\ud558\uc138\uc694. \uae30\ubcf8\uac12\uc740 \ubc14\ub2d0\ub77c HTML\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx create-near-app my-project --contract rust --frontend none --tests rust\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Rust \ucee8\ud2b8\ub799\ud2b8\ub9cc \uac1c\ubc1c\ud558\uace0 \ubc30\ud3ec\ud558\ub824\ub294 \uacbd\uc6b0, ",(0,s.jsx)(t.a,{href:"https://github.com/near-examples/rust-status-message",children:"\uc0c1\ud0dc \uba54\uc2dc\uc9c0 \uc608\uc81c"}),"\ub97c \ud15c\ud50c\ub9bf\uc73c\ub85c \uc0ac\uc6a9\ud558\uac70\ub098, ",(0,s.jsx)(t.a,{href:"https://github.com/cargo-generate/cargo-generate",children:"cargo-generate"}),"\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"cargo-generate"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c8 \ud504\ub85c\uc81d\ud2b8\ub97c \ucd08\uae30\ud654\ud558\ub824\uba74, \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cargo install cargo-generate --features vendored-openssl\n\ncargo generate --git https://github.com/near-examples/rust-status-message --name my-project\ncd my-project\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"cargo new --lib <crate-name>"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c8 \ud06c\ub808\uc774\ud2b8\ub97c \uc218\ub3d9\uc73c\ub85c \uc0dd\uc131\ud558\ub824\uba74, \uc0dd\uc131\ub41c ",(0,s.jsx)(t.code,{children:"Cargo.toml"})," \ud30c\uc77c\uc5d0 \ub2e4\uc74c \uad6c\uc131\uc744 \ud3ec\ud568\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'[dependencies]\nnear-sdk = "4.0.0"\n\n[lib]\ncrate-type = ["cdylib"]\n\n[profile.release]\ncodegen-units = 1\n# Tell `rustc` to optimize for small code size.\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\n# Opt into extra safety checks on arithmetic operations https://stackoverflow.com/a/64136471/249801\noverflow-checks = true\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var s=n(67294);const r={},a=s.createContext(r);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);