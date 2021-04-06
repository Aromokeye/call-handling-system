(this["webpackJsonpcall-handling-system"]=this["webpackJsonpcall-handling-system"]||[]).push([[0],{211:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(76),i=a.n(s),r=(a(86),a(87),a(4)),l=(a(88),a(12)),o=a.n(l),u=function(e,t,a){o()("https://techtestcalllogapi.azurewebsites.net/api/".concat(e)).then((function(e){204===e.status&&a("No data exist for this request");var c=e.data;t(c),a(""),console.log(e.status)})).catch((function(e){a("Aww aww, there's an issue getting data")}))},d=function(e,t){e(t)},p=a(32),h=a(44),m=Object(c.createContext)({id:0,data:[]}),j=a(9),b=a(1);function x(e){var t={name:"",description:"",hasSupportContract:!1,customerId:Object(c.useContext)(m).id},a=Object(h.a)({enableReinitialize:!0,initialValues:t,validationSchema:j.b({name:j.c().max(15,"Too long").required("Name Required"),description:j.c().max(40,"Maximum of 40 characters allowed").required("Description Required"),customerId:j.a().required("Required")}),onSubmit:function(t,a){var c,n;c=e.route,n=t,o.a.post("https://techtestcalllogapi.azurewebsites.net/api/".concat(c),n).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),e.clickEvent(),a.resetForm()}});return Object(b.jsxs)("form",{onSubmit:a.handleSubmit,className:"w-75 flex flex-column justify-around h-100",children:[Object(b.jsx)("label",{htmlFor:"Name",children:"Name"}),Object(b.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"The installed application",className:"",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.name}),a.touched.name&&a.errors.name?Object(b.jsx)("div",{className:"highlight b f6",children:a.errors.name}):null,Object(b.jsx)("label",{htmlFor:"description",children:"Description"}),Object(b.jsx)("input",{type:"text",id:"description",placeholder:"A description of the application",name:"description",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.description}),a.touched.description&&a.errors.description?Object(b.jsx)("div",{className:"highlight b f6",children:a.errors.description}):null,Object(b.jsxs)("label",{className:"flex items-center",children:[Object(b.jsx)("input",{type:"checkbox",className:"w1 h1 mr1 mv1 textaltbg",name:"hasSupportContract",checked:a.values.hasSupportContract,onChange:a.handleChange,onBlur:a.handleBlur}),"Has Support Contract?"]}),Object(b.jsx)("label",{htmlFor:"customerId",children:"Customer Id"}),Object(b.jsx)("input",{type:"number",id:"customerId",name:"customerId",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.customerId}),a.touched.customerId&&a.errors.customerId?Object(b.jsx)("div",{className:"highlight b f6",children:a.errors.customerId}):null,Object(b.jsx)("button",{type:"submit",className:"mt1",children:"Submit"})]})}function f(e){var t=e.route,a={applicationId:e.id,appName:e.name,appHasSupportContract:e.support,appDescription:e.describe},c=Object(h.a)({enableReinitialize:!0,initialValues:a,validationSchema:j.b({applicationId:j.a().required("Application ID Required"),appName:j.c().max(15,"Too long").required("Application name required"),appDescription:j.c().max(40,"Too long").required("Description Required")}),onSubmit:function(a,c){!function(e,t){var a={applicationId:t.applicationId,name:t.appName,description:t.appDescription,hasSupportContract:t.appHasSupportContract};o.a.put("https://techtestcalllogapi.azurewebsites.net/api/".concat(e),a).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}(t,a),e.clickEvent(),c.resetForm()}});return Object(b.jsxs)("form",{onSubmit:c.handleSubmit,className:"w-75 flex flex-column justify-around h-100 z-999",children:[Object(b.jsx)("label",{htmlFor:"applicationId",children:"Application Id"}),Object(b.jsx)("input",{type:"number",id:"applicationId",name:"applicationId",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.applicationId}),c.touched.applicationId&&c.errors.applicationId?Object(b.jsx)("div",{className:"highlight b f6",children:c.errors.applicationId}):null,Object(b.jsx)("label",{htmlFor:"name",children:"Application Name"}),Object(b.jsx)("input",{type:"text",id:"appName",name:"appName",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.appName}),c.touched.appName&&c.errors.appName?Object(b.jsx)("div",{className:"highlight b f6",children:c.errors.appName}):null,Object(b.jsxs)("label",{className:"flex items-center",children:[Object(b.jsx)("input",{type:"checkbox",className:"w1 h1 mr1 mv1 textaltbg",name:"appHasSupportContract",checked:c.values.appHasSupportContract,onChange:c.handleChange,onBlur:c.handleBlur}),"Has Support Contract?"]}),Object(b.jsx)("label",{htmlFor:"appDescription",children:"Description"}),Object(b.jsx)("input",{type:"text",id:"appDescription",placeholder:"A description of the application",name:"appDescription",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.appDescription}),c.touched.appDescription&&c.errors.appDescription?Object(b.jsx)("div",{className:"highlight b f6",children:c.errors.appDescription}):null,Object(b.jsx)("button",{type:"submit",className:"mt1",children:"Submit"})]})}function O(e){var t=e.service,a=e.className,n=e.icons,s=Object(c.useState)(!1),i=Object(r.a)(s,2),l=i[0],o=i[1],d=Object(c.useState)(""),h=Object(r.a)(d,2),j=h[0],O=h[1],g=Object(c.useState)([]),v=Object(r.a)(g,2),N=v[0],C=v[1],S=Object(c.useState)([]),w=Object(r.a)(S,2),y=w[0],I=w[1],D=Object(c.useState)(!1),B=Object(r.a)(D,2),k=B[0],q=B[1],z=Object(c.useState)({id:0,name:"",describe:"",support:!1}),A=Object(r.a)(z,2),F=A[0],E=A[1];Object(c.useEffect)((function(){u(t,C,O)}),[t]);var R=Object(c.useContext)(m);Object(c.useEffect)((function(){N.length>0&&I(N.filter((function(e){return e.customer.id===R.id})))}),[N,R.id]);var H=function(){o(!l),q(!1)},T=F.id,P=F.name,M=F.describe,J=F.support;return Object(b.jsxs)("div",{className:"".concat(a," ").concat(l&&""),children:[y.length>0&&Object(b.jsx)("h1",{className:"customername f3 lh-title text",children:y[0].customer.name}),Object(b.jsxs)("div",{className:"block1inner relative w-100 h-100 ".concat(l&&"rotate"),children:[Object(b.jsxs)("div",{className:"front",children:[Object(b.jsxs)("div",{className:"absolute top-1 left-1 flex items-center b highlight verticaltext",children:[Object(b.jsx)(p.a,{icon:n.header,size:"2x"}),Object(b.jsx)("div",{className:"f6 measure lh-title mt2 text flex",children:t})]}),Object(b.jsx)("div",{className:"".concat(l?"dn":"flex w-90 h-100 flex-wrap center justify-center items-center pa3 overflow-y-auto"),children:y.length>0&&"Application"===t?y.map((function(e,t){return Object(b.jsxs)("div",{className:"w-30 textaltbg pa3 ma2 f5 measure b br3 relative",children:[Object(b.jsx)("div",{className:"flex justify-around absolute top-1 right-1 highlight",children:Object(b.jsx)("button",{className:"iconsbg h2 w2 br-100 flex justify-center items-center mh1 bn highlight",onClick:function(){return function(e,t,a,c){q(!0),o(!l),E({id:e,name:t,describe:a,support:c})}(e.id,e.name,e.description,e.hasSupportContract)},children:Object(b.jsx)(p.a,{icon:n.edit})})}),Object(b.jsxs)("div",{className:"blockid f6 measure lh-copy",children:["Application ID: ",e.id]}),Object(b.jsx)("div",{className:"f5 measure lh-copy",children:e.name}),Object(b.jsx)("div",{className:"f6 measure lh-copy",children:e.description}),Object(b.jsxs)("div",{className:"f6 measure lh-copy",children:["Installed: ",e.installationDate.substring(0,10)]}),Object(b.jsxs)("div",{className:"f6 measure lh-copy",children:["Has Support Contract: ",e.hasSupportContract?"Yes":"No"]})]},t)})):Object(b.jsxs)("div",{children:["Customer has no records for ",t]})||Object(b.jsx)("div",{children:j})}),Object(b.jsxs)("button",{className:"flex items-center flex-column absolute shadow-3 highlightbg text iconsbg\r bottom-1 left-1 b pa1 grow-large w3 h3 br-100 ba",onClick:H,children:[Object(b.jsx)("div",{className:" \r flex justify-center items-center",children:Object(b.jsx)(p.a,{icon:n.create,size:"1x"})}),Object(b.jsx)("div",{className:"f7 measure mt1",children:"Add Record"})]})]}),Object(b.jsx)("div",{className:"back h-100 flex justify-center items-center mt0",children:k?Object(b.jsx)(f,{clickEvent:H,route:t,id:T,name:P,describe:M,support:J}):Object(b.jsx)(x,{clickEvent:H,route:t})})]})]})}var g=a(22);function v(){return Object(b.jsx)("div",{className:"w-80",children:Object(b.jsx)(O,{service:"Application",icons:{header:g.a,edit:g.b,delete:g.d,create:g.c},className:"block1 flex justify-center items-center relative shadow-4"})})}function N(e){var t=e.customers,a=e.setCustomerId,c=e.getCustomerId,n=e.asyncErr;return Object(b.jsx)("div",{className:"h-50 ma2 flex flex-column justify-between  pa1",children:t.length>0?t.map((function(e,t){return Object(b.jsxs)("div",{className:"customer flex flex-column justify-center h-100 pointer",onClick:function(){return c(a,e.id)},children:[Object(b.jsxs)("div",{className:"flex id",children:[Object(b.jsx)("div",{className:"f5 measure lh-copy ttu",children:"Customer ID:"}),Object(b.jsx)("div",{className:"measure f5 lh-copy",children:e.id})]}),Object(b.jsx)("div",{className:"measure f4 lh-solid name",children:e.name})]},t)})):Object(b.jsx)("div",{children:n})})}var C=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),l=i[0],p=i[1],h=Object(c.useState)(0),j=Object(r.a)(h,2),x=j[0],f=j[1],O=Object(c.useState)({id:0,data:[]}),g=Object(r.a)(O,2),C=g[0],S=g[1];return Object(c.useEffect)((function(){u("Customer",n,p)}),[]),Object(c.useEffect)((function(){x&&function(e,t,a){try{Promise.all([o.a.get("https://techtestcalllogapi.azurewebsites.net/api/Application/".concat(e)),o.a.get("https://techtestcalllogapi.azurewebsites.net/api/Call/".concat(e)),o.a.get("https://techtestcalllogapi.azurewebsites.net/api/Statistics/".concat(e)),o.a.get("https://techtestcalllogapi.azurewebsites.net/api/Status/".concat(e))]).then((function(c){var n=[c[0].data,c[1].data,c[2].data,c[3].data];console.log(n),t({id:e,data:n}),a("")}))}catch(c){a("There seems to be a problem getting data for this customer")}}(x,S,p)}),[x]),Object(b.jsxs)("div",{className:"w-100 vh-100 flex flex-row",children:[Object(b.jsx)("aside",{className:"w-25  mh2 mv2 br4 flex justify-center items-center shadow-1",children:Object(b.jsx)(N,{customers:a,setCustomerId:f,getCustomerId:d,asyncErr:l})}),Object(b.jsxs)("main",{className:"w-75 flex flex-column items-center mt2",children:[Object(b.jsx)("h1",{className:"flex justify- w-75 ma2 f2 lh-title",children:"Main Dashboard"}),Object(b.jsx)(m.Provider,{value:C,children:Object(b.jsx)(v,{})})]})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,212)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),S()},86:function(e,t,a){},88:function(e,t,a){}},[[211,1,2]]]);
//# sourceMappingURL=main.83f6348f.chunk.js.map