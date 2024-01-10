"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7085],{68343:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=r(85893),a=r(11151);r(74866),r(85162);const o={id:"near-cli",title:"NEAR CLI",hide_table_of_contents:!1},i=void 0,s={id:"primitives/dao/interacting/near-cli",title:"NEAR CLI",description:"This section describes how to create or interact with DAO from your shell using near-cli.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/dao/interacting/near-cli.md",sourceDirName:"7.primitives/dao/interacting",slug:"/primitives/dao/interacting/near-cli",permalink:"/zh-CN/primitives/dao/interacting/near-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dao/interacting/near-cli.md",tags:[],version:"current",frontMatter:{id:"near-cli",title:"NEAR CLI",hide_table_of_contents:!1},sidebar:"primitives",previous:{title:"Smart Contract",permalink:"/zh-CN/primitives/dao/interacting/smart-contract"},next:{title:"Introduction",permalink:"/zh-CN/primitives/linkdrop/introduction"}},l={},u=[{value:"List of DAOs",id:"list-of-daos",level:2},{value:"List of proposals",id:"list-of-proposals",level:2},{value:"Create DAO",id:"create-dao",level:2},{value:"Create proposal",id:"create-proposal",level:2},{value:"Vote for proposal",id:"vote-for-proposal",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This section describes how to create or interact with DAO from your shell using ",(0,t.jsx)(n.a,{href:"/zh-CN/tools/near-cli",children:(0,t.jsx)(n.code,{children:"near-cli"})}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"list-of-daos",children:"List of DAOs"}),"\n",(0,t.jsx)(n.p,{children:"This snippet will enable you to query list of DAOs."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near view sputnik-dao.near get_dao_list '{}'\n"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example response"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[\n  'ref-finance.sputnik-dao.near'\n  'gaming-dao.sputnik-dao.near',\n  ...\n]\n"})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"list-of-proposals",children:"List of proposals"}),"\n",(0,t.jsx)(n.p,{children:"This snippet will enable you to query list of proposals for a particular DAO."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near view nearweek-news-contribution.sputnik-dao.near get_proposals \'{"from_index": 9262, "limit": 2}\'\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example response"}),(0,t.jsx)("p",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[\n  {\n    id: 9262,\n    proposer: 'pasternag.near',\n    description: 'NEAR, a top non-EVM blockchain, has gone live on Router\u2019s Testnet Mandara. With Router Nitro, our flagship dApp, users in the NEAR ecosystem can now transfer test tokens to and from NEAR onto other supported chains. $$$$https://twitter.com/routerprotocol/status/1727732303491961232',\n    kind: {\n      Transfer: {\n        token_id: '',\n        receiver_id: 'pasternag.near',\n        amount: '500000000000000000000000',\n        msg: null\n      }\n    },\n    status: 'Approved',\n    vote_counts: { council: [ 1, 0, 0 ] },\n    votes: { 'brzk-93444.near': 'Approve' },\n    submission_time: '1700828277659425683'\n  },\n  {\n    id: 9263,\n    proposer: 'fittedn.near',\n    description: 'How to deploy BOS component$$$$https://twitter.com/BitkubAcademy/status/1728003163318563025?t=PiN6pwS380T1N4JuQXSONA&s=19',\n    kind: {\n      Transfer: {\n        token_id: '',\n        receiver_id: 'fittedn.near',\n        amount: '500000000000000000000000',\n        msg: null\n      }\n    },\n    status: 'InProgress',\n    vote_counts: { 'Whitelisted Members': [ 1, 0, 0 ] },\n    votes: { 'trendheo.near': 'Approve' },\n    submission_time: '1700832601849419123'\n  }\n]\n"})})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"create-dao",children:"Create DAO"}),"\n",(0,t.jsx)(n.p,{children:"This snippet will enable you to create a DAO."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'\nexport COUNCIL=\'["bob.near"]\'\nexport ARGS=`echo \'{"config": {"name": "Primitives", "purpose": "Building primitives on NEAR", "metadata":""}, "policy": \'$COUNCIL\'}\' | base64`\n\nnear call sputnikv2.testnet create "{\\"name\\": \\"primitives\\", \\"args\\": \\"$ARGS\\"}" --accountId bob.near --amount 6 --gas 150000000000000\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The full list of roles and permissions you can find ",(0,t.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#roles-and-permissions",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"create-proposal",children:"Create proposal"}),"\n",(0,t.jsx)(n.p,{children:"This snippet will enable you to create a proposal for a particular DAO."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call primitives.sputnik-dao.near add_proposal \'{"proposal": {"description": "My first proposal$$$$https://docs.near.org/", "kind": { "Transfer": {"token_id": "", "receiver_id": "bob.near", "amount": "10000000000000000000000000"}}}}\'  --deposit 0.1 --gas 300000000000000 --accountId bob.near\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"vote-for-proposal",children:"Vote for proposal"}),"\n",(0,t.jsx)(n.p,{children:"This snippet will enable you to cast a vote for proposal of a particular DAO."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call primitives.sputnik-dao.near act_proposal \'{"id": 0, "action": "VoteApprove"}\' --gas 300000000000000 --accountId bob.near\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Available vote options: ",(0,t.jsx)(n.code,{children:"VoteApprove"}),", ",(0,t.jsx)(n.code,{children:"VoteReject"}),", ",(0,t.jsx)(n.code,{children:"VoteRemove"}),"."]})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var o=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),a=r(36905),o=r(12466),i=r(16550),s=r(20469),l=r(91980),u=r(67392),c=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function p(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,o=(0,i.k6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,l._X)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(o.location.search);n.set(s,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[s,o])]}function m(e){var n,r,a,o,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,m=p(e),v=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),b=v[0],g=v[1],x=f({queryString:u,groupId:d}),j=x[0],y=x[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(n),a=r[0],o=r[1],[a,(0,t.useCallback)((function(e){n&&o.set(e)}),[n,o])]),k=w[0],N=w[1],A=function(){var e=null!=j?j:k;return h({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){A&&g(A)}),[A]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),N(e)}),[y,N,m]),tabValues:m}}var v=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function x(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],u=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=l.indexOf(n),a=s[r].value;a!==t&&(u(n),i(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;r=null!=(o=l[i])?o:l[l.length-1]}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},o,{className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function j(e){var n=e.lazy,r=e.children,a=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function w(e){var n=(0,v.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(67294);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);