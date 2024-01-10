"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6313],{25262:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=i(85893),t=i(11151),r=i(42352);const o={id:"ipfs",title:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub354"},a=void 0,d={id:"bos/components/ipfs",title:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub354",description:"IpfsImageUpload\ub294 \uc0ac\uc6a9\uc790\uac00 \uc774\ubbf8\uc9c0\ub97c IPFS(InterPlanetary File System)\uc5d0 \uc9c1\uc811 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud558\ub294 \uae30\ubcf8 \uc81c\uacf5 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/components/ipfsimageupload.md",sourceDirName:"bos/components",slug:"/bos/components/ipfs",permalink:"/ko/bos/components/ipfs",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/components/ipfsimageupload.md",tags:[],version:"current",frontMatter:{id:"ipfs",title:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub354"},sidebar:"integrate",previous:{title:"\uc704\uc82f",permalink:"/ko/bos/components/widgets"},next:{title:"\ud30c\uc77c",permalink:"/ko/bos/components/files"}},c={},l=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3}];function p(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"IpfsImageUpload"}),"\ub294 \uc0ac\uc6a9\uc790\uac00 \uc774\ubbf8\uc9c0\ub97c IPFS(InterPlanetary File System)\uc5d0 \uc9c1\uc811 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud558\ub294 \uae30\ubcf8 \uc81c\uacf5 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,s.jsx)(r.W,{id:"1",height:"200px",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"State.init({\n  img: null,\n});\n  <div className='container row'>\n    <div>\n      Image upload: <br />\n      <IpfsImageUpload image={state.img} />\n    </div>\n    <div>\n      Raw State:\n      <pre>{JSON.stringify(state)}</pre>\n    </div>\n    <div className='mt-2'>\n      {state.img.cid && (\n        <img\n          src={`https://ipfs.near.social/ipfs/${state.img.cid}`}\n          alt='uploaded'\n        />\n      )}\n    </div>\n  </div>\n);\n"})})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},42352:(e,n,i)=>{i.d(n,{W:()=>a});var s=i(67294),t=i(16729),r=i(91262),o=i(85893);function a(e){var n=e.children,a=e.id,d=void 0===a?1:a,c=e.height,l=void 0===c?"160px":c;return(0,o.jsx)(r.Z,{fallback:(0,o.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(v){}var r=i(58613),a=r.Widget,c=r.useInitNear,p=i(2302).ZP,h=(0,s.useState)(e),m=h[0],u=h[1],g=c().initNear,f=(0,t.O)().selector;return(0,s.useEffect)((function(){g&&f&&g({networkId:"mainnet",selector:f})}),[g,f]),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{class:"monaco",children:(0,o.jsx)(p,{height:l,value:m,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return u(e)}})}),(0,o.jsxs)("div",{class:"code_iframe",children:[(0,o.jsxs)("h4",{style:{fontWeight:0},children:[" Preview ",(0,o.jsx)("small",{children:" - Edit the code above! "})," "]}),(0,o.jsx)("hr",{class:"preview-border"}),(0,o.jsx)("div",{class:"bootstrap-scope",children:(0,o.jsx)("div",{class:"vm-widget",children:(0,o.jsx)(a,{code:m},d)})})]})]})}})}}}]);