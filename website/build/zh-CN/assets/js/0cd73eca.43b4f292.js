"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7549],{98176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(85893),a=n(11151);const o={id:"queryapi-websockets",title:"WebSocket-enabled Components with QueryAPI",sidebar_label:"WebSockets & QueryAPI"},c=void 0,s={id:"bos/tutorial/queryapi-websockets",title:"WebSocket-enabled Components with QueryAPI",description:"In this article you'll learn how to create a NEAR component that gathers information from a QueryAPI indexer using WebSockets. In this example, the QueryAPI indexer monitors the widget activity on the blockchain, and the NEAR component gets that information using WebSockets.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/bos/tutorial/queryapi-ws.md",sourceDirName:"bos/tutorial",slug:"/bos/tutorial/queryapi-websockets",permalink:"/zh-CN/bos/tutorial/queryapi-websockets",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/tutorial/queryapi-ws.md",tags:[],version:"current",frontMatter:{id:"queryapi-websockets",title:"WebSocket-enabled Components with QueryAPI",sidebar_label:"WebSockets & QueryAPI"},sidebar:"integrate",previous:{title:"Push Notifications",permalink:"/zh-CN/bos/tutorial/push-notifications"},next:{title:"NEAR for Ethereum developers",permalink:"/zh-CN/bos/tutorial/ethers-js"}},r={},d=[{value:"QueryAPI indexer",id:"queryapi-indexer",level:2},{value:"DB schema",id:"db-schema",level:3},{value:"Indexer logic",id:"indexer-logic",level:3},{value:"Using WebSockets",id:"using-websockets",level:2},{value:"Setup",id:"setup",level:3},{value:"Processing",id:"processing",level:3},{value:"Rendering",id:"rendering",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In this article you'll learn how to create a NEAR component that gathers information from a ",(0,i.jsx)(t.a,{href:"/zh-CN/bos/queryapi/intro",children:"QueryAPI indexer"})," using WebSockets. In this example, the QueryAPI indexer monitors the widget activity on the blockchain, and the NEAR component gets that information using WebSockets."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/zh-CN/bos/queryapi/intro",children:"QueryAPI"})," is a fully managed solution to build indexer functions, extract on-chain data, store it in a database, and be able to query it using GraphQL endpoints."]})}),"\n",(0,i.jsx)(t.h2,{id:"queryapi-indexer",children:"QueryAPI indexer"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=roshaan.near/widget-activity-feed",children:"Widget Activity indexer"})," keeps track of any widget activity on the ",(0,i.jsx)(t.code,{children:"social.near"})," smart contract. Whenever a Widget transaction is found, the data is stored in a Postgres database."]}),"\n",(0,i.jsx)(t.h3,{id:"db-schema",children:"DB schema"}),"\n",(0,i.jsx)(t.p,{children:"The schema for the indexer's database is pretty simple:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",metastring:"title=schema.sql",children:'CREATE TABLE\n  "widget_activity" (\n    "id" SERIAL NOT NULL,\n    "account_id" VARCHAR NOT NULL,\n    "widget_name" VARCHAR NOT NULL,\n    "block_height" DECIMAL(58, 0) NOT NULL,\n    "receipt_id" VARCHAR NOT NULL,\n    "block_timestamp" DECIMAL(20, 0) NOT NULL,\n    CONSTRAINT "widgets_pkey" PRIMARY KEY ("id")\n  );\n\nCREATE INDEX\n  idx_widget_activity_block_timestamp ON widget_activity (block_timestamp);\n'})}),"\n",(0,i.jsx)(t.h3,{id:"indexer-logic",children:"Indexer logic"}),"\n",(0,i.jsxs)(t.p,{children:["In the following code snippet, you can find the simple indexer logic that filters widget transactions from the ",(0,i.jsx)(t.code,{children:"social.near"})," smart contract, and if it finds widget development activity, then it adds a record to the ",(0,i.jsx)(t.code,{children:"widget_activity"})," table defined previously."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["To learn more, check the complete source code of the ",(0,i.jsx)(t.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=roshaan.near/widget-activity-feed",children:"Widget Activity indexer"}),"."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:"title=indexerLogic.js",children:'  // Add your code here\n  const SOCIAL_DB = "social.near";\n\n  const nearSocialWidgetTxs = block\n    .actions()\n    .filter((action) => action.receiverId === SOCIAL_DB)\n    .flatMap((action) =>\n      action.operations\n        .map((operation) => operation["FunctionCall"])\n        .filter((operation) => operation?.methodName === "set")\n        .map((functionCallOperation) => ({\n          ...functionCallOperation,\n          args: base64decode(functionCallOperation.args),\n          receiptId: action.receiptId, // providing receiptId as we need it\n        }))\n        .filter((functionCall) => {\n          const accountId = Object.keys(functionCall.args.data)[0];\n          return Object.keys(functionCall.args.data[accountId]).includes(\n            "widget"\n          );\n        })\n    );\n\n  if (nearSocialWidgetTxs.length > 0) {\n    console.log("Found NEAR Widget Development Activity...");\n    const blockHeight = block.blockHeight;\n    const blockTimestamp = block.header().timestampNanosec;\n    console.log(nearSocialWidgetTxs);\n    await Promise.all(\n      nearSocialWidgetTxs.map(async (widgetEditTx) => {\n        const accountId = Object.keys(widgetEditTx.args.data)[0];\n        const widgetName = Object.keys(\n          widgetEditTx.args.data[accountId]["widget"]\n        )[0];\n\n        console.log(`ACCOUNT_ID: ${accountId}`);\n        console.log(widgetName);\n        await handleWidgetTx(\n          accountId,\n          widgetName,\n          blockHeight,\n          blockTimestamp,\n          widgetEditTx.receiptId\n        );\n        console.log(widgetEditTx);\n      })\n    );\n  }\n}\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["This is the JS function that calls the GraphQL mutation ",(0,i.jsx)(t.code,{children:"InsertWidgetActivity"})," and adds a record to the ",(0,i.jsx)(t.code,{children:"widget_activity"})," table:"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Learn more about ",(0,i.jsx)(t.a,{href:"/zh-CN/bos/queryapi/index-functions",children:"QueryAPI indexing functions"})," and how to build your own indexers."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:"title=indexerLogic.js",children:"  async function handleWidgetTx(\n    accountId,\n    widgetName,\n    blockHeight,\n    blockTimestamp,\n    receiptId\n  ) {\n    console.log(accountId, blockHeight, blockTimestamp, receiptId);\n    try {\n      const mutationData = {\n        activity: {\n          account_id: accountId,\n          widget_name: widgetName,\n          block_height: blockHeight,\n          block_timestamp: blockTimestamp,\n          receipt_id: receiptId,\n        },\n      };\n      await context.graphql(\n        `mutation InsertWidgetActivity($activity: roshaan_near_widget_activity_feed_widget_activity_insert_input = {}) {\n  insert_roshaan_near_widget_activity_feed_widget_activity_one(object: $activity) {\n    id\n  }\n}`,\n        mutationData\n      );\n    } catch (e) {\n      console.log(`Could not add widget activity to DB, ${e}`);\n    }\n  }\n"})}),"\n",(0,i.jsx)(t.h2,{id:"using-websockets",children:"Using WebSockets"}),"\n",(0,i.jsxs)(t.p,{children:["Once you have a QueryAPI indexer running, you can use WebSockets to get the data in your NEAR Component. You only need to create a ",(0,i.jsx)(t.code,{children:"WebSocket"})," object pointing to the QueryAPI's GraphQL endpoint."]}),"\n",(0,i.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t.p,{children:["Here's a code snippet from the NEAR component that subscribes and processes any activity from the ",(0,i.jsx)(t.a,{href:"#queryapi-indexer",children:"Widget Activity indexer"}),":"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["The code below is only a snippet. If you want the full source code to play around with the component, you can fork the ",(0,i.jsx)(t.a,{href:"https://near.org#/near/widget/ComponentDetailsPage?src=roshaan.near/widget/query-api-widget-feed",children:"Widget Activity Feed source code"})," and build your own NEAR component."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'const GRAPHQL_ENDPOINT = "near-queryapi.api.pagoda.co";\n\nconst LIMIT = 10;\nconst accountId = props.accountId || "roshaan.near" || context.accountId;\n\nState.init({\n  widgetActivities: [],\n  widgetActivityCount: 0,\n  startWebSocketWidgetActivity: null,\n  initialFetch: false,\n  soundEffect:\n    "https://bafybeic7uvzmhuwjficgctpleov5i43rteavwmktyyjrauwi346ntgja4a.ipfs.nftstorage.link/",\n});\n\nconst widgetActivitySubscription = `\n  subscription IndexerQuery {\n    roshaan_near_widget_activity_feed_widget_activity(\n      order_by: {block_timestamp: desc}\n      limit: ${LIMIT}\n    ) {\n      account_id\n      block_height\n      block_timestamp\n      id\n      receipt_id\n      widget_name\n    }\n  }\n`;\n\nconst subscriptionWidgetActivity = {\n  type: "start",\n  id: "widgetActivity", // You can use any unique identifier\n  payload: {\n    operationName: "IndexerQuery",\n    query: widgetActivitySubscription,\n    variables: {},\n  },\n};\nfunction processWidgetActivity(activity) {\n  return { ...activity };\n}\nfunction startWebSocketWidgetActivity(processWidgetActivities) {\n  let ws = State.get().ws_widgetActivity;\n\n  if (ws) {\n    ws.close();\n    return;\n  }\n\n  ws = new WebSocket(`wss://${GRAPHQL_ENDPOINT}/v1/graphql`, "graphql-ws");\n\n  ws.onopen = () => {\n    console.log(`Connection to WS has been established`);\n    ws.send(\n      JSON.stringify({\n        type: "connection_init",\n        payload: {\n          headers: {\n            "Content-Type": "application/json",\n            "Hasura-Client-Name": "hasura-console",\n            "x-hasura-role": "roshaan_near",\n          },\n          lazy: true,\n        },\n      })\n    );\n\n    setTimeout(() => ws.send(JSON.stringify(subscriptionWidgetActivity)), 50);\n  };\n\n  ws.onclose = () => {\n    State.update({ ws_widgetActivity: null });\n    console.log(`WS Connection has been closed`);\n  };\n\n  ws.onmessage = (e) => {\n    const data = JSON.parse(e.data);\n    console.log("received data", data);\n    if (data.type === "data" && data.id === "widgetActivity") {\n      processWidgetActivities(data.payload.data);\n    }\n  };\n\n  ws.onerror = (err) => {\n    State.update({ ws_widgetActivity: null });\n    console.log("WebSocket error", err);\n  };\n\n  State.update({ ws_widgetActivity: ws });\n}\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Pay attention to the ",(0,i.jsx)(t.code,{children:"subscriptionWidgetActivity"})," JSON payload."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"processing",children:"Processing"}),"\n",(0,i.jsx)(t.p,{children:"This is the JS function that process the incoming widget activities generated by the QueryAPI indexer, allowing the NEAR component to create a feed based on the blockchain's widget activity:"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["You can fork the ",(0,i.jsx)(t.a,{href:"https://near.org#/near/widget/ComponentDetailsPage?src=roshaan.near/widget/query-api-widget-feed",children:"Widget Activity Feed source code"})," and build your own NEAR component."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"function processWidgetActivities(incoming_data) {\n  let incoming_widgetActivities =\n    incoming_data.roshaan_near_widget_activity_feed_widget_activity.flatMap(\n      processWidgetActivity\n    );\n  const newActivities = [\n    ...incoming_widgetActivities.filter((activity) => {\n      return (\n        state.widgetActivities.length == 0 ||\n        activity.block_timestamp > state.widgetActivities[0].block_timestamp\n      );\n    }),\n  ];\n  const prevActivities = state.prevActivities || [];\n  State.update({ widgetActivities: [...newActivities, ...prevActivities] });\n}\n\nif (state.ws_widgetActivity === undefined) {\n  State.update({\n    startWebSocketWidgetActivity: startWebSocketWidgetActivity,\n  });\n  state.startWebSocketWidgetActivity(processWidgetActivities);\n}\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"rendering",children:"Rendering"}),"\n",(0,i.jsxs)(t.p,{children:["Finally, rendering the activity feed on the NEAR component is straight-forward, by iterating through the ",(0,i.jsx)(t.code,{children:"state.widgetActivities"})," map:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'return (\n  <div>\n    <Title>\n      Widget Activity Feed{" "}\n      <TextLink href="https://near.org/dataplatform.near/widget/QueryApi.App">\n        {" "}\n        Powered By QueryAPI{" "}\n      </TextLink>\n    </Title>\n    <RowContainer>\n      {state.widgetActivities.map((activity, i) => (\n        <Card>\n          <div>\n            <Widget\n              src="mob.near/widget/TimeAgo"\n              props={{ blockHeight: activity.block_height }}\n            />{" "}\n            ago\n          </div>\n          <CardBody>\n            <div key={i}>\n              <Text bold>Widget Name: {activity.widget_name}</Text>\n              <Text bold>Account ID: {activity.account_id}</Text>\n            </div>\n          </CardBody>\n          <CardFooter>\n            <TextLink\n              href={`/#/near/widget/ComponentDetailsPage?src=${activity.account_id}/widget/${activity.widget_name}`}\n            >\n              View\n            </TextLink>\n          </CardFooter>\n        </Card>\n      ))}\n    </RowContainer>\n  </div>\n);\n'})}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var i=n(67294);const a={},o=i.createContext(a);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);