"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6874],{93120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151),s=n(74866),i=n(85162);const o={sidebar_position:5},l="Serialization Protocols",c={id:"sdk/rust/contract-interface/serialization-interface",title:"Serialization Protocols",description:"Serialization formats within the SDK define how data structures are translated into bytes which are needed for passing data into methods of the smart contract or storing data in state. For the case of method parameters, JSON (default) and Borsh are supported with the SDK and for storing data on-chain Borsh is used.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/sdk/rust/contract-interface/serialization-interface.md",sourceDirName:"sdk/rust/contract-interface",slug:"/sdk/rust/contract-interface/serialization-interface",permalink:"/vi/sdk/rust/contract-interface/serialization-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-interface/serialization-interface.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tools",previous:{title:"Payable Methods",permalink:"/vi/sdk/rust/contract-interface/payable-methods"},next:{title:"C\xe1c Callback",permalink:"/vi/sdk/rust/cross-contract/callbacks"}},u={},d=[{value:"Overriding Serialization Protocol Default",id:"overriding-serialization-protocol-default",level:3},{value:"D\u01b0\u1edbi \u0111\xe2y l\xe0 danh s\xe1ch \u0111\u1ea7y \u0111\u1ee7 c\xe1c error variant c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 theo lo\u1ea1i request <code>view_access_key_list</code>",id:"d\u01b0\u1edbi-\u0111\xe2y-l\xe0-danh-s\xe1ch-\u0111\u1ea7y-\u0111\u1ee7-c\xe1c-error-variant-c\xf3-th\u1ec3-\u0111\u01b0\u1ee3c-tr\u1ea3-v\u1ec1-theo-lo\u1ea1i-request-view_access_key_list",level:4},{value:"JSON wrapper types",id:"json-wrapper-types",level:3},{value:"Base64VecU8",id:"base64vecu8",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"serialization-protocols",children:"Serialization Protocols"}),"\n",(0,r.jsxs)(t.p,{children:["Serialization formats within the SDK define how data structures are translated into bytes which are needed for passing data into methods of the smart contract or storing data in state. For the case of method parameters, ",(0,r.jsx)(t.a,{href:"https://www.json.org/json-en.html",children:"JSON"})," (default) and ",(0,r.jsx)(t.a,{href:"https://borsh.io/",children:"Borsh"})," are supported with the SDK and for storing data on-chain Borsh is used."]}),"\n",(0,r.jsx)(t.p,{children:"The qualities of JSON and Borsh are as follows:"}),"\n",(0,r.jsx)(t.p,{children:"JSON:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Human-readable"}),"\n",(0,r.jsx)(t.li,{children:"Self-describing format (don't need to know the underlying type)"}),"\n",(0,r.jsx)(t.li,{children:"Easy interop with JavaScript"}),"\n",(0,r.jsx)(t.li,{children:"Less efficient size and (de)serialization"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Borsh:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Compact, binary format that's efficient for serialized data size"}),"\n",(0,r.jsx)(t.li,{children:"Need to know data format or have a schema to deserialize data"}),"\n",(0,r.jsx)(t.li,{children:"Strict and canonical binary representation"}),"\n",(0,r.jsx)(t.li,{children:"Fast and less overhead in most cases"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"In general, JSON will be used for contract calls and cross-contract calls for a better DevX, where Borsh can be used to optimize using less gas by having smaller parameter serialization and less deserialization computation within the contract."}),"\n",(0,r.jsx)(t.h3,{id:"overriding-serialization-protocol-default",children:"Overriding Serialization Protocol Default"}),"\n",(0,r.jsx)(t.p,{children:"The result and parameter serialization can be opted into separately, but all parameters must be of the same format (can't serialize some parameters as borsh and others as JSON). An example of switching both the result and parameters to borsh is as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[result_serializer(borsh)]\npub fn sum_borsh(#[serializer(borsh)] a: u32, #[serializer(borsh)] b: u32) -> u32 {\n    a + b\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Where the ",(0,r.jsx)(t.code,{children:"result_serializer(borsh)"})," annotation will override the default result serialization protocol from JSON to borsh and the ",(0,r.jsx)(t.code,{children:"serializer(borsh)"})," annotations will override the parameter serialization."]}),"\n",(0,r.jsxs)(t.h4,{id:"d\u01b0\u1edbi-\u0111\xe2y-l\xe0-danh-s\xe1ch-\u0111\u1ea7y-\u0111\u1ee7-c\xe1c-error-variant-c\xf3-th\u1ec3-\u0111\u01b0\u1ee3c-tr\u1ea3-v\u1ec1-theo-lo\u1ea1i-request-view_access_key_list",children:["D\u01b0\u1edbi \u0111\xe2y l\xe0 danh s\xe1ch \u0111\u1ea7y \u0111\u1ee7 c\xe1c error variant c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 theo lo\u1ea1i request ",(0,r.jsx)(t.code,{children:"view_access_key_list"})]}),"\n",(0,r.jsxs)(t.p,{children:["A simple demonstration of getting a ",(0,r.jsx)(t.a,{href:"https://borsh.io",children:"Borsh-serialized"}),", base64-encoded value from a unit test:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs#L93-L104\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The following snippet shows a simple function that takes this value from a frontend or CLI. Note: this method doesn't have a return value, so the ",(0,r.jsx)(t.code,{children:"#[result_serializer(borsh)]"})," isn't needed."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs#L40-L42\n"})}),"\n",(0,r.jsx)(t.p,{children:"Note that this is using this simple struct:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/mikedotexe/rust-status-message/blob/b83c5126fdbe0f19bc904e547fda0bb12c2ea133/src/lib.rs#L13-L17\n"})}),"\n",(0,r.jsx)(t.p,{children:"To call this with NEAR CLI, use a command similar to this:"}),"\n",(0,r.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(i.Z,{value:"near-cli",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"near call rust-status-message.demo.testnet set_status_borsh --base64 'DAAAAEFsb2hhIGhvbnVhIQ==' --accountId demo.testnet\n"})})}),(0,r.jsx)(i.Z,{value:"near-cli-rs",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"near contract call-function as-transaction rust-status-message.demo.testnet set_status_borsh base64-args 'DAAAAEFsb2hhIGhvbnVhIQ==' prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as demo.testnet network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["See more details in ",(0,r.jsx)(t.a,{href:"https://gist.github.com/mfornet/d8a94af333a68d67affd8cb78464c7c0",children:"this GitHub gist"})," from ",(0,r.jsx)(t.a,{href:"https://gist.github.com/mfornet",children:"Marcelo"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"json-wrapper-types",children:"JSON wrapper types"}),"\n",(0,r.jsxs)(t.p,{children:["To help with serializing certain types to JSON which have unexpected or inefficient default formats, there are some wrapper types in ",(0,r.jsx)(t.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/json_types/index.html",children:(0,r.jsx)(t.code,{children:"near_sdk::json_types"})})," that can be used."]}),"\n",(0,r.jsxs)(t.p,{children:["Because JavaScript only supports integers to value ",(0,r.jsx)(t.code,{children:"2^53 - 1"}),", you will lose precision if deserializing the JSON integer is above this range. To counteract this, you can use the ",(0,r.jsx)(t.code,{children:"I64"}),", ",(0,r.jsx)(t.code,{children:"U64"}),", ",(0,r.jsx)(t.code,{children:"I128"}),", and ",(0,r.jsx)(t.code,{children:"U128"})," in place of the native types for these parameters or result to serialize the value as a string. By default, all integer types will serialize as an integer in JSON."]}),"\n",(0,r.jsxs)(t.p,{children:["You can convert from ",(0,r.jsx)(t.code,{children:"U64"})," to ",(0,r.jsx)(t.code,{children:"u64"})," and back using ",(0,r.jsx)(t.code,{children:"std::convert::Into"}),", e.g."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn mult(&self, a: U64, b: U64) -> U128 {\n        let a: u64 = a.into();\n        let b: u64 = b.into();\n        let product = u128::from(a) * u128::from(b);\n        product.into()\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can also access inner values and using ",(0,r.jsx)(t.code,{children:".0"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:" #[near_bindgen]\n impl Contract {\n     pub fn mult(&self, a: U64, b: U64) -> U128 {\n-        let a: u64 = a.into();\n+        let a = a.0;\n-        let b: u64 = b.into();\n+        let b = b.0;\n         let product = u128::from(a) * u128::from(b);\n         product.into()\n     }\n }\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And you can cast the lower-case ",(0,r.jsx)(t.code,{children:"u"})," variants to upper-case ",(0,r.jsx)(t.code,{children:"U"})," variants using ",(0,r.jsx)(t.code,{children:"U64(...)"})," and ",(0,r.jsx)(t.code,{children:"U128(...)"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:" #[near_bindgen]\n impl Contract {\n     pub fn mult(&self, a: U64, b: U64) -> U128 {\n         let a = a.0;\n         let b = b.0;\n         let product = u128::from(a) * u128::from(b);\n-        product.into()\n+        U128(product)\n     }\n }\n"})}),"\n",(0,r.jsx)(t.p,{children:"Combining it all:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn mult(&self, a: U64, b: U64) -> U128 {\n        U128(u128::from(a.0) * u128::from(b.0))\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Although there are these JSON wrapper types included with the SDK, any custom type can be used, as long as it implements ",(0,r.jsx)(t.a,{href:"https://serde.rs/",children:(0,r.jsx)(t.code,{children:"serde"})})," serialize and deserialize respectively. All of these types just override the JSON format and will have a consistent ",(0,r.jsx)(t.code,{children:"borsh"})," serialization and deserialization as the inner types."]}),"\n",(0,r.jsx)(t.h3,{id:"base64vecu8",children:"Base64VecU8"}),"\n",(0,r.jsxs)(t.p,{children:["Another example of a type you may want to override the default serialization of is ",(0,r.jsx)(t.code,{children:"Vec<u8>"})," which represents bytes in Rust. By default, this will serialize as an array of integers, which is not compact and very hard to use. There is a wrapper type ",(0,r.jsx)(t.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/json_types/struct.Base64VecU8.html",children:(0,r.jsx)(t.code,{children:"Base64VecU8"})})," which serializes and deserializes to a ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Base64",children:"Base-64"})," string for more compact JSON serialization."]}),"\n",(0,r.jsx)(t.p,{children:"Example here:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    // Notice, internally we store `Vec<u8>` \n    pub data: Vec<u8>,\n}\n#[near_bindgen]\nimpl Contract {\n    #[init]\n    pub fn new(data: Base64VecU8) -> Self {\n        Self {\n            data: data.into(),\n        }\n    }\n    pub fn get_data(self) -> Base64VecU8 {\n        self.data.into()\n    }\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),s=n(12466),i=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function b(e){var t,n,a,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,b=h(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:b})})),v=m[0],g=m[1],x=f({queryString:c,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),z=w[0],k=w[1],S=function(){var e=null!=j?j:z;return p({value:e,tabValues:b})?e:null}();return(0,o.Z)((function(){S&&g(S)}),[S]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),k(e)}),[y,k,b]),tabValues:b}}var m=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),i(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;n=null!=(s=l[i])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,Object.assign({},e,t)),(0,g.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,m.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(67294);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);