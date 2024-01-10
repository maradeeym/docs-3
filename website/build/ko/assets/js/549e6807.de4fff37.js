"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2065],{52495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=t(85893),i=t(11151),r=t(42352);const s={id:"tooltip",title:"\ud234\ud301 \ucef4\ud3ec\ub10c\ud2b8",sidebar_label:"\ud234\ud301"},a=void 0,l={id:"bos/components/tooltip",title:"\ud234\ud301 \ucef4\ud3ec\ub10c\ud2b8",description:"\uc774 \ud2b9\uc218 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub9c8\uc6b0\uc2a4\uac00 \ud2b9\uc815 DOM \ud56d\ubaa9\uc744 \uac00\ub9ac\ud0a4\uba74 \uba54\uc2dc\uc9c0\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4. This component was imported into NEAR Social from React-Bootstrap and more info can be found here.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/components/tooltip.md",sourceDirName:"bos/components",slug:"/bos/components/tooltip",permalink:"/ko/bos/components/tooltip",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/components/tooltip.md",tags:[],version:"current",frontMatter:{id:"tooltip",title:"\ud234\ud301 \ucef4\ud3ec\ub10c\ud2b8",sidebar_label:"\ud234\ud301"},sidebar:"integrate",previous:{title:"\uc2a4\ud0c0\uc77c",permalink:"/ko/bos/components/styled"},next:{title:"\uc18c\uac1c",permalink:"/ko/bos/api/home"}},c={},d=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\uc774 \ud2b9\uc218 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub9c8\uc6b0\uc2a4\uac00 \ud2b9\uc815 DOM \ud56d\ubaa9\uc744 \uac00\ub9ac\ud0a4\uba74 \uba54\uc2dc\uc9c0\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4. This component was imported into NEAR Social from ",(0,o.jsx)(n.code,{children:"React-Bootstrap"})," and more info can be ",(0,o.jsx)(n.a,{href:"https://react-bootstrap.netlify.app/docs/components/overlays#tooltips",children:"found here"}),"."]}),"\n",(0,o.jsx)("hr",{class:"subsection"}),"\n",(0,o.jsx)(n.h3,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,o.jsxs)(n.p,{children:["\ucf54\ub4dc\ub294 ",(0,o.jsx)(n.code,{children:"react-bootstrap"})," \ubb38\uc11c \uc0ac\uc774\ud2b8\uc5d0\uc11c \ucc44\ud0dd \ubc0f \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc544\ub798\uc758 \uc2a4\ub2c8\ud3ab\uc740 \ubc84\ud2bc\uc744 \ud1b5\ud574 \uba54\uc2dc\uc9c0\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uacfc \uba54\uc2dc\uc9c0\uc758 \uc704\uce58\ub97c \ubcc0\uacbd\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(r.W,{id:"1",height:"120px",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'return (\n  <>\n    {["top", "right", "bottom", "left"].map((placement) => (\n      <div style={{ margin: "2.5rem 1rem", float: "left" }}>\n        <OverlayTrigger\n          key={placement}\n          placement={placement}\n          overlay={\n            <Tooltip id={`tooltip-${placement}`}>\n              Tooltip on <strong>{placement}</strong>.\n            </Tooltip>\n          }\n        >\n          <button variant="secondary">Tooltip on {placement}</button>\n        </OverlayTrigger>\n      </div>\n    ))}\n  </>\n);\n'})})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},42352:(e,n,t)=>{t.d(n,{W:()=>a});var o=t(67294),i=t(16729),r=t(91262),s=t(85893);function a(e){var n=e.children,a=e.id,l=void 0===a?1:a,c=e.height,d=void 0===c?"160px":c;return(0,s.jsx)(r.Z,{fallback:(0,s.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{e=n.props.children.props.children}catch(g){}var r=t(58613),a=r.Widget,c=r.useInitNear,p=t(2302).ZP,h=(0,o.useState)(e),m=h[0],u=h[1],b=c().initNear,f=(0,i.O)().selector;return(0,o.useEffect)((function(){b&&f&&b({networkId:"mainnet",selector:f})}),[b,f]),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{class:"monaco",children:(0,s.jsx)(p,{height:d,value:m,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return u(e)}})}),(0,s.jsxs)("div",{class:"code_iframe",children:[(0,s.jsxs)("h4",{style:{fontWeight:0},children:[" Preview ",(0,s.jsx)("small",{children:" - Edit the code above! "})," "]}),(0,s.jsx)("hr",{class:"preview-border"}),(0,s.jsx)("div",{class:"bootstrap-scope",children:(0,s.jsx)("div",{class:"vm-widget",children:(0,s.jsx)(a,{code:m},l)})})]})]})}})}}}]);