"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7573],{72047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(85893),i=n(11151),u=n(74866),a=n(85162);const o={id:"execution-outcome",sidebar_position:6,sidebar_label:"ExecutionOutcome"},s="ExecutionOutcome Structure",c={id:"develop/lake/structures/execution-outcome",title:"ExecutionOutcome Structure",description:"Definition",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/lake/structures/execution_outcome.mdx",sourceDirName:"2.develop/lake/structures",slug:"/develop/lake/structures/execution-outcome",permalink:"/ko/develop/lake/structures/execution-outcome",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/lake/structures/execution_outcome.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"execution-outcome",sidebar_position:6,sidebar_label:"ExecutionOutcome"},sidebar:"indexers",previous:{title:"Receipt",permalink:"/ko/develop/lake/structures/receipt"},next:{title:"StateChange",permalink:"/ko/develop/lake/structures/state-change"}},l={},d=[{value:"Definition",id:"definition",level:2},{value:"<code>ExecutionOutcomeWithIdView</code>",id:"executionoutcomewithidview",level:2},{value:"<code>ExecutionOutcomeView</code>",id:"executionoutcomeview",level:2},{value:"<code>ExecutionStatusView</code>",id:"executionstatusview",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"executionoutcome-structure",children:[(0,r.jsx)(t.code,{children:"ExecutionOutcome"})," Structure"]}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(t.p,{children:["ExecutionOutcome is the result of execution of ",(0,r.jsx)(t.a,{href:"/ko/develop/lake/structures/transaction",children:"Transaction"})," or ",(0,r.jsx)(t.a,{href:"/ko/develop/lake/structures/receipt",children:"Receipt"})]}),"\n",(0,r.jsx)(t.admonition,{title:"Transaction's ExecutionOutcome",type:"info",children:(0,r.jsx)(t.p,{children:"In the result of the Transaction execution will always be a Receipt."})}),"\n",(0,r.jsx)(t.h2,{id:"executionoutcomewithidview",children:(0,r.jsx)(t.code,{children:"ExecutionOutcomeWithIdView"})}),"\n",(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(a.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"links=1",children:"pub struct ExecutionOutcomeWithIdView {\n    pub proof: MerklePath,\n    pub block_hash: CryptoHash,\n    pub id: CryptoHash,\n    pub outcome: ExecutionOutcomeView,\n}\n"})})}),(0,r.jsx)(a.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"links=1",children:"export type ExecutionOutcomeWithReceipt = {\n  executionOutcome: {\n    blockHash: string;\n    id: string;\n    outcome: {\n      executorId: string,\n      gasBurnt: number,\n      logs: string[],\n      metadata: {\n        gasProfile: string | null;\n        version: number;\n      };\n      receiptIds: string[],\n      status: ExecutionStatus,\n      tokensBurnt: string\n    };\n    proof: ExecutionProof[];\n  };\n  receipt: Receipt | null;\n};\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"executionoutcomeview",children:(0,r.jsx)(t.code,{children:"ExecutionOutcomeView"})}),"\n",(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(a.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"links=1",children:'pub struct ExecutionOutcomeView {\n    /// Logs from this transaction or receipt.\n    pub logs: Vec<String>,\n    /// Receipt IDs generated by this transaction or receipt.\n    pub receipt_ids: Vec<CryptoHash>,\n    /// The amount of the gas burnt by the given transaction or receipt.\n    pub gas_burnt: Gas,\n    /// The amount of tokens burnt corresponding to the burnt gas amount.\n    /// This value doesn\'t always equal to the `gas_burnt` multiplied by the gas price, because\n    /// the prepaid gas price might be lower than the actual gas price and it creates a deficit.\n    #[serde(with = "u128_dec_format")]\n    pub tokens_burnt: Balance,\n    /// The id of the account on which the execution happens. For transaction this is signer_id,\n    /// for receipt this is receiver_id.\n    pub executor_id: AccountId,\n    /// Execution status. Contains the result in case of successful execution.\n    pub status: ExecutionStatusView,\n    /// Execution metadata, versioned\n    #[serde(default)]\n    pub metadata: ExecutionMetadataView,\n}\n'})})}),(0,r.jsx)(a.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"#executionoutcomewithidview",children:"ExecutionOutcomeWithIdView TypeScript"})," defines this structure already an nested"]})})]}),"\n",(0,r.jsx)(t.h2,{id:"executionstatusview",children:(0,r.jsx)(t.code,{children:"ExecutionStatusView"})}),"\n",(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(a.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"links=1",children:"pub enum ExecutionStatusView {\n    /// The execution is pending or unknown.\n    Unknown,\n    /// The execution has failed.\n    Failure(TxExecutionError),\n    /// The final action succeeded and returned some value or an empty vec encoded in base64.\n    SuccessValue(String),\n    /// The final action of the receipt returned a promise or the signed transaction was converted\n    /// to a receipt. Contains the receipt_id of the generated receipt.\n    SuccessReceiptId(CryptoHash),\n}\n"})})}),(0,r.jsx)(a.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"links=1",children:"export type ExecutionStatus =\n  | { Unknown: unknown }\n  | { Failure: unknown }\n  | { SuccessValue: string }\n  | { SuccessReceiptId: string };\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>a});n(67294);var r=n(36905);const i={tabItem:"tabItem_Ymn6"};var u=n(85893);function a(e){var t=e.children,n=e.hidden,a=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),i=n(36905),u=n(12466),a=n(16550),o=n(20469),s=n(91980),c=n(67392),l=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId,u=(0,a.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:i});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(u.location.search);t.set(o,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[o,u])]}function f(e){var t,n,i,u,a=e.defaultValue,s=e.queryString,c=void 0!==s&&s,d=e.groupId,f=p(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:a,tabValues:f})})),b=v[0],x=v[1],g=m({queryString:c,groupId:d}),w=g[0],j=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,l.Nk)(t),i=n[0],u=n[1],[i,(0,r.useCallback)((function(e){t&&u.set(e)}),[t,u])]),y=k[0],E=k[1],V=function(){var e=null!=w?w:y;return h({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){V&&x(V)}),[V]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),j(e),E(e)}),[j,E,f]),tabValues:f}}var v=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function g(e){var t=e.className,n=e.block,r=e.selectedValue,a=e.selectValue,o=e.tabValues,s=[],c=(0,u.o5)().blockElementScrollPositionUntilNextRender,l=function(e){var t=e.currentTarget,n=s.indexOf(t),i=o[n].value;i!==r&&(c(t),a(i))},d=function(e){var t,n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":var r,i=s.indexOf(e.currentTarget)+1;n=null!=(r=s[i])?r:s[0];break;case"ArrowLeft":var u,a=s.indexOf(e.currentTarget)-1;n=null!=(u=s[a])?u:s[s.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,u=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:l},u,{className:(0,i.Z)("tabs__item",b.tabItem,null==u?void 0:u.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,i=e.selectedValue,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var a=u.find((function(e){return e.props.value===i}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:u.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function j(e){var t=f(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(g,Object.assign({},e,t)),(0,x.jsx)(w,Object.assign({},e,t))]})}function k(e){var t=(0,v.Z)();return(0,x.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(67294);const i={},u=r.createContext(i);function a(e){const t=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(u.Provider,{value:t},e.children)}}}]);