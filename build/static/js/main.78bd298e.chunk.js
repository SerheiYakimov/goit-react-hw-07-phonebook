(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={button:"ContactListItem_button__22wLV",list:"ContactListItem_list__W6jNB",item:"ContactListItem_item__2THQn",span:"ContactListItem_span__3G7oz"}},17:function(t,e,n){t.exports={container:"Filter_container__oISjJ",title:"Filter_title__mtLuE",input:"Filter_input__2DoVp"}},30:function(t,e,n){t.exports={list:"ContactList_list__2T7aG"}},36:function(t,e,n){},37:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(15),o=n.n(r),i=(n(36),n(37),n(20)),u=n(5),s=n.n(u),b=n(8),l=n.n(b),j=n(7),d=function(t){return t.contacts},m=function(t){return t.filterReducer},f=function(t){var e=d(t),n=m(t),c=n.toLowerCase();return n.length>0?e.filter((function(t){return t.name.toLowerCase().includes(c)})):e},O=n(11),p=n.n(O),h=n(2),_=Object(h.b)("getContactsRequest"),x=Object(h.b)("getContactsSuccess"),v=Object(h.b)("getContactsError"),C=Object(h.b)("addContactRequest"),g=Object(h.b)("addContactSuccess"),N=Object(h.b)("addContactError"),y=Object(h.b)("deleteContactRequest"),R=Object(h.b)("deleteContactSuccess"),q=Object(h.b)("deleteContactError"),S=Object(h.b)("phonebookhandleFilter");p.a.defaults.baseURL="https://619b80902782760017445631.mockapi.io/api/v1";var k=n(1);function A(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),u=o[0],s=o[1],b=Object(j.c)(d),m=Object(j.b)(),f=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":s(c)}},O=function(){a(""),s("")};return Object(k.jsxs)("form",{className:l.a.form,onSubmit:function(t){t.preventDefault();var e={name:n,number:u};b.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):m(function(t){return function(e){e(C()),p.a.post("/contacts",t).then((function(t){var n=t.data;console.log("operationAdd",n),e(g(n))})).catch((function(t){console.log("operation",t),e(N(t))}))}}(e)),O()},children:[Object(k.jsxs)("label",{className:l.a.label,children:["Name",Object(k.jsx)("input",{className:l.a.input,type:"text",name:"name",value:n,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(k.jsxs)("label",{className:l.a.label,children:["Number",Object(k.jsx)("input",{className:l.a.input,type:"tel",name:"number",value:u,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(k.jsx)("button",{className:l.a.button,type:"submit",children:"Add contact"})]})}A.PropType={onSubmit:s.a.func.isRequired};var L=n(17),w=n.n(L);function F(){var t=Object(j.b)(),e=Object(j.c)(m);return Object(k.jsxs)("div",{className:w.a.container,children:[Object(k.jsx)("h3",{className:w.a.title,children:"Find contacts by name:"}),Object(k.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){return t(S(e.target.value))},className:w.a.input})]})}F.PropsType={value:s.a.string,onChange:s.a.func.isRequired};var E=n(30),T=n.n(E),z=n(12),I=n.n(z);function P(t){var e=t.id,n=t.name,c=t.number,a=Object(j.b)();return Object(k.jsxs)("li",{className:I.a.list,children:[Object(k.jsxs)("p",{className:I.a.item,children:[n,":",Object(k.jsx)("span",{className:I.a.span,children:c})]}),Object(k.jsx)("button",{type:"submit",onClick:function(){return a(function(t){return function(e){e(y()),p.a.delete("/contacts/".concat(t)).then((function(){return e(R(t))})).catch((function(t){return e(q(t))}))}}(e))},className:I.a.button,children:"Delete"})]})}function D(){var t=Object(j.c)(f),e=Object(j.b)();return Object(c.useEffect)((function(){e((function(t){t(_()),p.a.get("/contacts").then((function(e){var n=e.data;console.log("operation",n),t(x(n))})).catch((function(e){console.log("operation",e),t(v(e))}))}))}),[e]),Object(k.jsx)("ul",{className:T.a.list,children:t.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(k.jsx)(P,{id:e,name:n,number:c},e)}))})}function J(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("h2",{className:"title",children:"Phonebook"}),Object(k.jsx)(A,{}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{className:"title",children:"Contacts"}),Object(k.jsx)(F,{}),Object(k.jsx)(D,{})]})]})})}P.PropsTypes={id:s.a.number.isRequired,name:s.a.string.isRequired,number:s.a.number.isRequired,onDeleteContact:s.a.func.isRequired},D.PropsType={id:s.a.number.isRequired,name:s.a.string.isRequired,number:s.a.number.isRequired};var B,M,Z,G=n(4),V=n(3),H=n(31),Q=Object(h.c)([],(B={},Object(V.a)(B,x,(function(t,e){return e.payload})),Object(V.a)(B,g,(function(t,e){return[].concat(Object(H.a)(t),[e.payload])})),Object(V.a)(B,R,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),B)),U=Object(h.c)(!1,(M={},Object(V.a)(M,_,(function(){return!0})),Object(V.a)(M,x,(function(){return!1})),Object(V.a)(M,v,(function(){return!1})),Object(V.a)(M,C,(function(){return!0})),Object(V.a)(M,g,(function(){return!1})),Object(V.a)(M,N,(function(){return!1})),Object(V.a)(M,y,(function(){return!0})),Object(V.a)(M,R,(function(){return!1})),Object(V.a)(M,q,(function(){return!1})),M)),W=Object(h.c)(null,(Z={},Object(V.a)(Z,v,(function(t,e){return e.payload})),Object(V.a)(Z,N,(function(t,e){return e.payload})),Object(V.a)(Z,q,(function(t,e){return e.payload})),Z)),$=Object(h.c)("",Object(V.a)({},S,(function(t,e){return e.payload}))),K=n(9),X=Object(G.b)({contacts:Q,loading:U,error:W,filterReducer:$}),Y=Object(h.a)({reducer:X,middleware:function(t){return t({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})}});o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(j.a,{store:Y,children:Object(k.jsx)(J,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",button:"Form_button__243jh"}}},[[62,1,2]]]);
//# sourceMappingURL=main.78bd298e.chunk.js.map