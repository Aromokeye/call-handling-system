(this["webpackJsonpcall-handling-system"]=this["webpackJsonpcall-handling-system"]||[]).push([[0],{222:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),l=c(87),i=c.n(l),n=(c(97),c(98),c(26)),r=c(4),o=(c(99),c(14)),d=c.n(o),j=function(e,t,c){d()("https://techtestcalllogapi.azurewebsites.net/api/".concat(e)).then((function(e){204===e.status&&c("No data exist for this request");var s=e.data;t(s),c(""),console.log(e.status)})).catch((function(e){c("Aww aww, there's an issue getting data")}))},h=function(e,t){e(t)},b=c(3),u=c(0);function m(e){var t=Object(b.f)(),c=e.customers,s=e.setCustomerId,a=e.getCustomerId,l=e.asyncErr;return Object(u.jsx)("div",{className:"h-50 pa3 flex justify-center flex-column br4",children:c.length>0?c.map((function(e,c){return Object(u.jsxs)("div",{className:"customer flex flex-column justify-center h-75 pointer",onClick:function(){a(s,e.id),t.push("/statistics")},children:[Object(u.jsxs)("div",{className:"flex id",children:[Object(u.jsx)("div",{className:"f5 measure lh-copy ttu",children:"Customer ID:"}),Object(u.jsx)("div",{className:"measure f5 lh-copy",children:e.id})]}),Object(u.jsx)("div",{className:"measure f4 lh-solid name",children:e.name})]},c)})):Object(u.jsx)("div",{children:l})})}function p(){return Object(u.jsxs)("div",{className:"w-80 flex justify-center items-center flex-column hero",children:[Object(u.jsx)("div",{className:"f2 textalt measure b lh-copy",children:"Welcome!"}),Object(u.jsx)("h1",{className:"f-headline",children:"Call Handling System"}),Object(u.jsx)("p",{className:"f4 textalt measure b lh-copy",children:"Click on customer name to view and edit records"})]})}var x=Object(s.createContext)({id:0,data:[]}),f=c(7),O=c(13),v=c(42),N=c(18);function g(e){var t={name:"",description:"",hasSupportContract:!1,customerId:Object(s.useContext)(x).id},c=Object(v.a)({enableReinitialize:!0,initialValues:t,validationSchema:N.b({name:N.c().max(15,"Too long").required("Name Required"),description:N.c().max(40,"Maximum of 40 characters allowed").required("Description Required"),customerId:N.a().required("Required")}),onSubmit:function(t,c){var s,a;s=e.route,a=t,d.a.post("https://techtestcalllogapi.azurewebsites.net/api/".concat(s),a).then((function(e){return console.log(e.status)})).catch((function(e){return console.log(e)})),e.clickEvent(),c.resetForm()}});return Object(u.jsxs)("form",{onSubmit:c.handleSubmit,className:"w-75 flex flex-column justify-around h-75 b appform",children:[Object(u.jsx)("label",{htmlFor:"Name",children:"Name"}),Object(u.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"The installed application",className:"",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.name}),c.touched.name&&c.errors.name?Object(u.jsx)("div",{className:"highlight b f6",children:c.errors.name}):null,Object(u.jsx)("label",{htmlFor:"description",children:"Description"}),Object(u.jsx)("input",{type:"text",id:"description",placeholder:"A description of the application",name:"description",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.description}),c.touched.description&&c.errors.description?Object(u.jsx)("div",{className:"highlight b f6",children:c.errors.description}):null,Object(u.jsxs)("label",{className:"",children:[Object(u.jsx)("input",{type:"checkbox",className:"w1 h1 mr1 mv1",name:"hasSupportContract",checked:c.values.hasSupportContract,onChange:c.handleChange,onBlur:c.handleBlur}),"Has Support Contract?"]}),Object(u.jsx)("label",{htmlFor:"customerId",children:"Customer Id"}),Object(u.jsx)("input",{type:"number",id:"customerId",name:"customerId",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.customerId}),c.touched.customerId&&c.errors.customerId?Object(u.jsx)("div",{className:"highlight b f6",children:c.errors.customerId}):null,Object(u.jsx)("button",{type:"submit",className:"mt1",children:"Submit"})]})}function w(e){var t=e.route,c={applicationId:e.id,appName:e.name,appHasSupportContract:e.support,appDescription:e.describe},s=Object(v.a)({enableReinitialize:!0,initialValues:c,validationSchema:N.b({applicationId:N.a().required("Application ID Required"),appName:N.c().max(15,"Too long").required("Application name required"),appDescription:N.c().max(40,"Too long").required("Description Required")}),onSubmit:function(c,s){!function(e,t){var c={applicationId:t.applicationId,name:t.appName,description:t.appDescription,hasSupportContract:t.appHasSupportContract};d.a.put("https://techtestcalllogapi.azurewebsites.net/api/".concat(e),c).then((function(e){return console.log(e.status)})).catch((function(e){return console.log(e)}))}(t,c),e.clickEvent(),s.resetForm()}});return Object(u.jsxs)("form",{onSubmit:s.handleSubmit,className:"w-75 b flex flex-column justify-around h-75 b editform",children:[Object(u.jsx)("label",{htmlFor:"applicationId",children:"Application Id"}),Object(u.jsx)("input",{type:"number",id:"applicationId",name:"applicationId",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.applicationId}),s.touched.applicationId&&s.errors.applicationId?Object(u.jsx)("div",{className:"highlight b f6",children:s.errors.applicationId}):null,Object(u.jsx)("label",{htmlFor:"name",children:"Application Name"}),Object(u.jsx)("input",{type:"text",id:"appName",name:"appName",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.appName}),s.touched.appName&&s.errors.appName?Object(u.jsx)("div",{className:"highlight b f6",children:s.errors.appName}):null,Object(u.jsxs)("label",{className:"",children:[Object(u.jsx)("input",{type:"checkbox",className:"w1 h1 mr1 mv1",name:"appHasSupportContract",checked:s.values.appHasSupportContract,onChange:s.handleChange,onBlur:s.handleBlur}),"Has Support Contract?"]}),Object(u.jsx)("label",{htmlFor:"appDescription",children:"Description"}),Object(u.jsx)("input",{type:"text",id:"appDescription",placeholder:"A description of the application",name:"appDescription",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.appDescription}),s.touched.appDescription&&s.errors.appDescription?Object(u.jsx)("div",{className:"highlight b f6",children:s.errors.appDescription}):null,Object(u.jsx)("button",{type:"submit",className:"mt1",children:"Submit"})]})}function y(e){var t=e.needed,c=Object(v.a)({enableReinitialize:!0,initialValues:{select:t.status.description},onSubmit:function(e){var c={callId:t.id,status:0};"Open"===e.select?c.status=101:"Closed"===e.select?c.status=102:"Re-Opened"===e.select?c.status=103:"AwaitingCustomer"===e.select&&(c.status=104),function(e){d.a.patch("https://techtestcalllogapi.azurewebsites.net/api/Call",e).then((function(e){return console.log(e.status)})).catch((function(e){return console.log(e)}))}(c)}});return Object(u.jsxs)("form",{onSubmit:c.handleSubmit,className:"formselect flex justify-start",children:[Object(u.jsxs)("select",{value:c.values.select,onChange:c.handleChange,onBlur:c.handleBlur,className:"h2 ".concat("Open"===t.status.description?"sel2":"Closed"===t.status.description?"sel1":"Re-Opened"===t.status.description?"sel3":"AwaitingCustomer"===t.status.description?"sel4":void 0),name:"select",children:[Object(u.jsx)("option",{children:"Open"}),Object(u.jsx)("option",{children:"Closed"}),Object(u.jsx)("option",{children:"Re-Opened"}),Object(u.jsx)("option",{children:"AwaitingCustomer"})]}),Object(u.jsx)("button",{type:"submit",className:"w2 h2 br-100 flex flex-row bn justify-center items-center iconsbg ml1 pointer",children:Object(u.jsx)(O.a,{icon:f.a})})]})}function C(e){var t=e.service,c=e.className,a=e.icons,l=Object(s.useState)(!1),i=Object(r.a)(l,2),n=i[0],o=i[1],d=Object(s.useState)(""),h=Object(r.a)(d,2),b=h[0],m=h[1],p=Object(s.useState)([]),f=Object(r.a)(p,2),v=f[0],N=f[1],y=Object(s.useState)([]),C=Object(r.a)(y,2),S=C[0],I=C[1],k=Object(s.useState)(!1),A=Object(r.a)(k,2),D=A[0],B=A[1],R=Object(s.useState)({id:0,name:"",describe:"",support:!1}),z=Object(r.a)(R,2),E=z[0],F=z[1];Object(s.useEffect)((function(){j(t,N,m)}),[t]);var T=Object(s.useContext)(x);Object(s.useEffect)((function(){v.length>0&&I(v.filter((function(e){return e.customer.id===T.id})))}),[v,T.id]);var q=function(){o(!n),B(!1)},M=E.id,H=E.name,P=E.describe,V=E.support;return Object(u.jsxs)("div",{className:"".concat(c," ").concat(n&&""),children:[S.length>0&&"Application"===t?Object(u.jsx)("h1",{className:"customername f3 lh-title",children:S[0].customer.name}):null,Object(u.jsxs)("div",{className:"block1inner relative w-100 h-100 shadow-4 br4 ".concat(n&&"rotate"),children:[Object(u.jsxs)("div",{className:"front",children:[Object(u.jsxs)("div",{className:"absolute top-1 left-1 flex items-center b highlight verticaltext",children:[Object(u.jsx)(O.a,{icon:a.header,size:"2x"}),Object(u.jsx)("div",{className:"f6 measure lh-title mt2 text flex",children:t})]}),Object(u.jsx)("div",{className:"".concat(n?"dn":"flex w-100 flex-wrap center justify-center items-start pa3 overflow-y-auto scroll"),children:S.length>0&&"Application"===t?S.map((function(e,t){return Object(u.jsxs)("div",{className:"w-30 textaltbg pa3 ma2 f5 measure b br3 relative",children:[Object(u.jsx)("div",{className:"flex justify-around absolute top-1 right-1 highlight",children:Object(u.jsx)("button",{className:"iconsbg h2 w2 br-100 flex justify-center items-center mh1 bn highlight pointer",onClick:function(){return function(e,t,c,s){B(!0),o(!n),F({id:e,name:t,describe:c,support:s})}(e.id,e.name,e.description,e.hasSupportContract)},children:Object(u.jsx)(O.a,{icon:a.edit})})}),Object(u.jsxs)("div",{className:"blockid f6 measure lh-copy",children:["Application ID: ",e.id]}),Object(u.jsx)("div",{className:"f5 measure lh-copy",children:e.name}),Object(u.jsx)("div",{className:"f6 measure lh-copy",children:e.description}),Object(u.jsxs)("div",{className:"f6 measure lh-copy",children:["Installed: ",e.installationDate.substring(0,10)]}),Object(u.jsxs)("div",{className:"f6 measure lh-copy",children:["Has Support Contract: ",e.hasSupportContract?"Yes":"No"]})]},t)})):Object(u.jsxs)("div",{children:["Customer has no records for ",t]})||Object(u.jsx)("div",{children:b})}),Object(u.jsxs)("button",{className:"flex items-center flex-column absolute shadow-3 highlightbg text iconsbg\r bottom-1 left-1 b pa1 grow-large w3 h3 br-100 ba bw1 pointer",onClick:q,children:[Object(u.jsx)("div",{className:" \r flex justify-center items-center",children:Object(u.jsx)(O.a,{icon:a.create,size:"1x"})}),Object(u.jsx)("div",{className:"f7 measure mt1",children:"Add Record"})]})]}),Object(u.jsx)("div",{className:"back h-100 flex justify-center items-center mt0",children:D?Object(u.jsx)(w,{clickEvent:q,route:t,id:M,name:H,describe:P,support:V}):Object(u.jsx)(g,{clickEvent:q,route:t})})]})]})}function S(e){var t=e.icons,c=Object(s.useState)(""),a=Object(r.a)(c,2),l=a[0],i=a[1],n=Object(s.useState)([]),o=Object(r.a)(n,2),d=o[0],h=o[1],b=Object(s.useState)([]),m=Object(r.a)(b,2),p=m[0],f=m[1],v=Object(s.useState)(""),N=Object(r.a)(v,2),g=N[0],w=N[1];Object(s.useEffect)((function(){j("Call",f,i)}),[]);var C=Object(s.useContext)(x);Object(s.useEffect)((function(){p.length>0&&""!==g?h(p.filter((function(e){return e.customer.id===C.id&&e.status.description===g}))):p.length>0&&h(p.filter((function(e){return e.customer.id===C.id})))}),[p,C.id,g]);var S=function(e){w(e)};return Object(u.jsxs)("div",{className:"block2 w-90 flex justify-center items-center relative shadow-4 mt3 br4",children:[d.length>0?Object(u.jsx)("h1",{className:"customername f3 lh-title",children:d[0].customer.name}):null,Object(u.jsx)("div",{className:"block1inner relative w-100 h-100 shadow-4 br4 ",children:Object(u.jsxs)("div",{className:"front2",children:[Object(u.jsxs)("div",{className:"absolute top-1 left-1 flex items-center b highlight verticaltext",children:[Object(u.jsx)(O.a,{icon:t.header,size:"2x"}),Object(u.jsx)("div",{className:"f6 measure lh-title mt2 textalt flex",children:"Call Log"})]}),Object(u.jsx)("div",{className:"relative flex w-100 flex-column items-start pa3 calllist overflow-y-auto scroll scroll2",children:Object(u.jsxs)("ul",{className:"w-100",children:[Object(u.jsxs)("li",{className:"flex justify-between items-center  ma1 pa1 w-100 h3 b f5 lh-title stick top--1 iconsbg text",children:[Object(u.jsx)("div",{className:"tablecol1",children:"Application"}),Object(u.jsx)("div",{className:"tablecol2",children:"Issues"}),Object(u.jsx)("div",{className:"tablecol3",children:"Call Status"})]}),d.length>0&&d.map((function(e,t){return Object(u.jsxs)("li",{className:"flex justify-between items-center ma1 pa1 w-100 shadow-1 h3 b",children:[Object(u.jsx)("div",{className:"tablecol1 f5 lh-copy",children:e.application.name}),Object(u.jsx)("div",{className:"tablecol2 f5 lh-copy",children:e.description}),Object(u.jsx)("div",{className:"tablecol3",children:Object(u.jsx)(y,{needed:e})})]},3*t)})),console.log(l)]})}),Object(u.jsxs)("div",{className:"flex flex-row justify-center center w-60  h-50",children:[Object(u.jsx)("h1",{className:"f3 mr2",children:"Filter:"}),Object(u.jsx)("div",{className:"sel2 br3 f5 lh-copy items-center flex justify-center w4 pa2 ma1 tc b pointer",onClick:function(){return S("Open")},children:"Open"}),Object(u.jsx)("div",{className:"sel1 br3 f6 lh-copy items-center flex justify-center w4 pa2 ma1 tc b pointer",onClick:function(){return S("Closed")},children:"Close"}),Object(u.jsx)("div",{className:"sel3 br3 f6 lh-copy items-center flex justify-center w4 pa2 ma1 tc b pointer",onClick:function(){return S("Re-Opened")},children:"Re-Opened"}),Object(u.jsx)("div",{className:"sel4 br3 f6 lh-copy items-center flex justify-center w4 pa2 ma1 tc b pointer",onClick:function(){return S("AwaitingCustomer")},children:"AwaitingCustomer"}),Object(u.jsx)("div",{className:"br3 f6 lh-copy iconsbg text items-center flex justify-center w4 pa2 ma1 tc b pointer",onClick:function(){return S("")},children:"Remove Filter"})]})]})})]})}var I=c.p+"static/media/customer.54015d28.svg",k={id:0,openCalls:{totalCalls:0,responded:0,awaitingResponse:0},closedCalls:{totalCalls:0,satisfactory:0,unsatisfactory:0},lastThreeMonths:{month1:0,month2:0,month3:0},customer:{id:0,name:""}};function A(){var e,t,c,a,l=Object(s.useContext)(x),i=Object(s.useState)(""),n=Object(r.a)(i,2),o=n[0],j=n[1],h=Object(s.useState)(k),m=Object(r.a)(h,2),p=m[0],v=m[1];Object(s.useEffect)((function(){var e,t,c;e=l.id,t=v,c=j,d.a.get("https://techtestcalllogapi.azurewebsites.net/api/Statistics/".concat(e)).then((function(e){return t(e.data)})).catch((function(e){return c(e)}))}),[l.id]);var N=Object(b.f)();return Object(u.jsxs)("div",{className:"block3 w-90 flex justify-around flex-row  relative shadow-4 mt3 br4 relative",children:[Object(u.jsxs)("div",{className:"w-30 flex-column",children:[(null===p||void 0===p||null===(e=p.customer)||void 0===e?void 0:e.id)>0&&Object(u.jsxs)("div",{className:"br4 w-30 vh-25 flex flex-row justify-between items-center textbg pa2 absolute top-0 left-0 ma1",children:[Object(u.jsxs)("div",{className:"flex flex-column justify-center items-start w-50",children:[Object(u.jsxs)("div",{className:"f6 b",children:["ID: ",p.customer.id]}),Object(u.jsx)("h1",{className:"f3",children:p.customer.name})]}),Object(u.jsx)("div",{className:"flex flex-column w-50",children:Object(u.jsx)("img",{src:I,alt:"customer",className:""})})]}),Object(u.jsxs)("div",{className:"w-30 flex flex-column justify-center items-center h-50 br4 ma1 mt4 ba absolute left-0 bottom-1",children:[Object(u.jsxs)("div",{className:"flex flex-row items-center ba pa2 br4 iconsbg text w-90 mb1 pointer",onClick:function(){return N.push("/calls")},children:[Object(u.jsx)("div",{className:"highlight mr1",children:Object(u.jsx)(O.a,{icon:f.e,size:"3x"})}),Object(u.jsx)("div",{className:"f4 b lh-copy",children:"View Call Records"})]}),Object(u.jsxs)("div",{className:"flex flex-row items-center ba pa2 br4 iconsbg text w-90 pointer",onClick:function(){return N.push("/applications")},children:[Object(u.jsx)("div",{className:"highlight mr1",children:Object(u.jsx)(O.a,{icon:f.b,size:"3x"})}),Object(u.jsx)("div",{className:"f4 b lh-copy",children:"View Installed Applications"})]})]})]}),Object(u.jsxs)("div",{className:"flex flex-column justify-around h-100 w-70 ml4 pa3",children:[Object(u.jsx)("div",{className:"w-90 ma1",children:(null===p||void 0===p||null===(t=p.customer)||void 0===t?void 0:t.id)>0&&Object(u.jsxs)("div",{className:"flex flex-column justify-center blockId br4 ba bw1 w-90 pa1  vh-25 callsh",children:[Object(u.jsx)("h1",{className:"f3",children:"Open Calls"}),Object(u.jsxs)("div",{className:"flex flex-row justify-between call w-80",children:[Object(u.jsxs)("div",{className:"flex flex-column h-100 justify-center textalt ba pa1 br3 bw1",children:[Object(u.jsx)("div",{className:"b f4",children:"Total calls"}),Object(u.jsx)("div",{className:"highlight f3 b",children:p.openCalls.totalCalls})]}),Object(u.jsxs)("div",{className:"flex flex-column h-100 justify-center textalt ba pa1 br3 bw1",children:[Object(u.jsx)("div",{className:"b f4",children:"Responded"}),Object(u.jsx)("div",{className:"highlight f3 b",children:p.openCalls.responded})]}),Object(u.jsxs)("div",{className:"flex flex-column h-100 justify-center textalt ba pa1 br3 bw1",children:[Object(u.jsx)("div",{className:"b f4",children:"Awaiting Response"}),Object(u.jsx)("div",{className:"highlight f3 b",children:p.openCalls.awaitingResponse})]})]})]})}),Object(u.jsx)("div",{className:"w-90 ma1",children:(null===p||void 0===p||null===(c=p.customer)||void 0===c?void 0:c.id)>0&&Object(u.jsxs)("div",{className:"flex flex-column justify-center blockId br4 ba bw1 w-90 vh-25 pa1 callsh",children:[Object(u.jsx)("h1",{className:"f3",children:"Closed Calls"}),Object(u.jsxs)("div",{className:"flex flex-row justify-between call w-80",children:[Object(u.jsxs)("div",{className:"flex flex-column h-100 justify-center textalt ba pa1 br3 bw1",children:[Object(u.jsx)("div",{className:"b f4",children:"Total calls"}),Object(u.jsx)("div",{className:"highlight f3 b",children:p.closedCalls.totalCalls})]}),Object(u.jsxs)("div",{className:"flex flex-column h-100 justify-center textalt ba pa1 br3 bw1",children:[Object(u.jsx)("div",{className:"b f4",children:"Satisfactory"}),Object(u.jsx)("div",{className:"highlight f3 b",children:p.closedCalls.satisfactory})]}),Object(u.jsxs)("div",{className:"flex flex-column h-100 justify-center textalt ba pa1 br3 bw1",children:[Object(u.jsx)("div",{className:"b f4",children:"Unsatisfactory"}),Object(u.jsx)("div",{className:"highlight f3 b",children:p.closedCalls.unsatisfactory})]})]})]})}),console.log(o),Object(u.jsx)("div",{className:"w-90 ma1",children:(null===p||void 0===p||null===(a=p.customer)||void 0===a?void 0:a.id)>0&&Object(u.jsxs)("div",{className:"flex flex-column justify-center blockId br4 ba bw1 w-90 vh-25 pa1 callsh",children:[Object(u.jsx)("h1",{className:"f3",children:"Calls in Last Three Months"}),Object(u.jsxs)("div",{className:"flex flex-row justify-between call w-80",children:[Object(u.jsxs)("div",{className:"flex flex-column h-100 justify-center textalt ba pa1 br3 bw1",children:[Object(u.jsx)("div",{className:"b f4",children:"Month 1"}),Object(u.jsx)("div",{className:"highlight f3 b",children:p.lastThreeMonths.month1})]}),Object(u.jsxs)("div",{className:"flex flex-column h-100 justify-center textalt ba pa1 br3 bw1",children:[Object(u.jsx)("div",{className:"b f4",children:"Month 2"}),Object(u.jsx)("div",{className:"highlight f3 b",children:p.lastThreeMonths.month2})]}),Object(u.jsxs)("div",{className:"flex flex-column h-100 justify-center textalt ba pa1 br3 bw1",children:[Object(u.jsx)("div",{className:"b f4",children:"Month 3"}),Object(u.jsx)("div",{className:"highlight f3 b",children:p.lastThreeMonths.month3})]})]})]})})]})]})}var D=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],l=Object(s.useState)(""),i=Object(r.a)(l,2),o=i[0],O=i[1],v=Object(s.useState)(0),N=Object(r.a)(v,2),g=N[0],w=N[1],y=Object(s.useState)({id:0,data:[]}),I=Object(r.a)(y,2),k=I[0],D=I[1];Object(s.useEffect)((function(){j("Customer",a,O)}),[]),Object(s.useEffect)((function(){g&&function(e,t,c){try{Promise.all([d.a.get("https://techtestcalllogapi.azurewebsites.net/api/Application/".concat(e)),d.a.get("https://techtestcalllogapi.azurewebsites.net/api/Call/".concat(e)),d.a.get("https://techtestcalllogapi.azurewebsites.net/api/Statistics/".concat(e)),d.a.get("https://techtestcalllogapi.azurewebsites.net/api/Status/".concat(e))]).then((function(s){var a=s[0].data,l=s[1].data,i=s[2].data,n=s[3].data;t({id:e,data:[a,l,i,n]}),c("")}))}catch(s){c("There seems to be a problem getting data for this customer")}}(g,D,O)}),[g]);var B=Object(b.g)();return Object(u.jsxs)("div",{className:"w-100 vh-100 flex flex-row",children:[Object(u.jsx)("aside",{className:"w-25 flex justify-center items-center relative",children:Object(u.jsx)("div",{className:"absolute aside w-100 ml3 br4 flex justify-center items-center",children:Object(u.jsx)(m,{customers:c,setCustomerId:w,getCustomerId:h,asyncErr:o})})}),Object(u.jsxs)("main",{className:"w-75 flex flex-column items-center mt2",children:[g>0&&Object(u.jsxs)("div",{className:"flex flex-column w-90",children:[Object(u.jsx)("h1",{className:"f2 lh-title",children:"Main Dashboard"}),Object(u.jsxs)("div",{className:"flex flex-row justify-between w-34 ",children:[Object(u.jsx)("div",{className:"".concat("/statistics"===B.pathname?"a":null),children:Object(u.jsx)(n.b,{to:"/statistics",children:"Statistics"})}),Object(u.jsx)("div",{className:"".concat("/calls"===B.pathname?"a":null),children:Object(u.jsx)(n.b,{to:"/calls",children:"Calls"})}),Object(u.jsx)("div",{className:"".concat("/applications"===B.pathname?"a":null),children:Object(u.jsx)(n.b,{to:"/applications",children:"Applications"})})]})]}),Object(u.jsx)(x.Provider,{value:k,children:Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",children:Object(u.jsx)(p,{})}),g>0?Object(u.jsx)(b.a,{path:"/applications",children:Object(u.jsx)(C,{service:"Application",icons:{header:f.b,edit:f.c,delete:f.f,create:f.d},className:"block1 w-90 flex justify-center items-center relative shadow-4 mt3 br4"})}):Object(u.jsx)("div",{className:"flex justify-center items-center f3 textalt h-100 b",children:"Please click on a customer to view records"}),g>0?Object(u.jsx)(b.a,{path:"/statistics",children:Object(u.jsx)(A,{})}):Object(u.jsx)("div",{className:"flex justify-center items-center f3 textalt h-100 b",children:"Please click on a customer to view records"}),g>0?Object(u.jsx)(b.a,{path:"/calls",children:Object(u.jsx)(S,{icons:{header:f.e,edit:f.c,delete:f.f,create:f.d}})}):Object(u.jsx)("div",{className:"flex justify-center items-center f3 textalt h-100 b",children:"Please click on a customer to view records"})]})})]})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,223)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),l(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(n.a,{children:Object(u.jsx)(D,{})})}),document.getElementById("root")),B()},97:function(e,t,c){},99:function(e,t,c){}},[[222,1,2]]]);
//# sourceMappingURL=main.19490050.chunk.js.map