(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={button:"ContactListItem_button__22wLV",list:"ContactListItem_list__W6jNB",item:"ContactListItem_item__2THQn",span:"ContactListItem_span__3G7oz"}},19:function(e,t,n){e.exports={container:"Filter_container__oISjJ",title:"Filter_title__mtLuE",input:"Filter_input__2DoVp"}},32:function(e,t,n){e.exports={list:"ContactList_list__2T7aG"}},38:function(e,t,n){},39:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),u=n.n(c),i=(n(38),n(39),n(22)),s=n(5),o=n.n(s),b=n(8),l=n.n(b),j=n(7),d=function(e){return e.contacts},f=function(e){return e.filterReducer},p=function(e){var t=d(e),n=f(e),r=n.toLowerCase();return n.length>0?t.filter((function(e){return e.name.toLowerCase().includes(r)})):t},m=n(9),O=n.n(m),h=n(18),v=n(2),x=n(12),_=n.n(x);_.a.defaults.baseURL="https://619b80902782760017445631.mockapi.io/api/v1";var C=Object(v.c)("getContact",function(){var e=Object(h.a)(O.a.mark((function e(t,n){var r,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,_.a.get("/contacts");case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),g=Object(v.c)("addContact",function(){var e=Object(h.a)(O.a.mark((function e(t,n){var r,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,_.a.post("/contacts",t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),y=Object(v.c)("deleteContact",function(){var e=Object(h.a)(O.a.mark((function e(t,n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,_.a.delete("/contacts/".concat(t));case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),N=n(1);function w(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),u=Object(i.a)(c,2),s=u[0],o=u[1],b=Object(j.c)(d),f=Object(j.b)(),p=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":o(r)}},m=function(){a(""),o("")};return Object(N.jsxs)("form",{className:l.a.form,onSubmit:function(e){e.preventDefault();var t={name:n,number:s};b.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):f(g(t)),m()},children:[Object(N.jsxs)("label",{className:l.a.label,children:["Name",Object(N.jsx)("input",{className:l.a.input,type:"text",name:"name",value:n,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(N.jsxs)("label",{className:l.a.label,children:["Number",Object(N.jsx)("input",{className:l.a.input,type:"tel",name:"number",value:s,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(N.jsx)("button",{className:l.a.button,type:"submit",children:"Add contact"})]})}w.PropType={onSubmit:o.a.func.isRequired};var R=n(19),q=n.n(R),k=(Object(v.b)("getContactsRequest"),Object(v.b)("getContactsSuccess"),Object(v.b)("getContactsError"),Object(v.b)("addContactRequest"),Object(v.b)("addContactSuccess"),Object(v.b)("addContactError"),Object(v.b)("deleteContactRequest"),Object(v.b)("deleteContactSuccess"),Object(v.b)("deleteContactError"),Object(v.b)("phonebookHandleFilter"));function S(){var e=Object(j.b)(),t=Object(j.c)(f);return Object(N.jsxs)("div",{className:q.a.container,children:[Object(N.jsx)("h3",{className:q.a.title,children:"Find contacts by name:"}),Object(N.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){return e(k(t.target.value))},className:q.a.input})]})}S.PropsType={value:o.a.string,onChange:o.a.func.isRequired};var L=n(32),A=n.n(L),F=n(13),E=n.n(F);function T(e){var t=e.id,n=e.name,r=e.number,a=Object(j.b)();return Object(N.jsxs)("li",{className:E.a.list,children:[Object(N.jsxs)("p",{className:E.a.item,children:[n,":",Object(N.jsx)("span",{className:E.a.span,children:r})]}),Object(N.jsx)("button",{type:"submit",onClick:function(){return a(y(t))},className:E.a.button,children:"Delete"})]})}function z(){var e=Object(j.c)(p),t=Object(j.b)();return Object(r.useEffect)((function(){t(C())}),[t]),Object(N.jsx)("ul",{className:A.a.list,children:e.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(N.jsx)(T,{id:t,name:n,number:r},t)}))})}function I(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("h2",{className:"title",children:"Phonebook"}),Object(N.jsx)(w,{}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"title",children:"Contacts"}),Object(N.jsx)(S,{}),Object(N.jsx)(z,{})]})]})})}T.PropsTypes={id:o.a.number.isRequired,name:o.a.string.isRequired,number:o.a.number.isRequired,onDeleteContact:o.a.func.isRequired},z.PropsType={id:o.a.number.isRequired,name:o.a.string.isRequired,number:o.a.number.isRequired};var P,V,D,J=n(4),W=n(3),B=n(33),M=Object(v.d)([],(P={},Object(W.a)(P,C.fulfilled,(function(e,t){return t.payload})),Object(W.a)(P,g.fulfilled,(function(e,t){return[].concat(Object(B.a)(e),[t.payload])})),Object(W.a)(P,y.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),P)),Z=Object(v.d)(!1,(V={},Object(W.a)(V,C.pending,(function(){return!0})),Object(W.a)(V,C.fulfilled,(function(){return!1})),Object(W.a)(V,C.rejected,(function(){return!1})),Object(W.a)(V,g.pending,(function(){return!0})),Object(W.a)(V,g.fulfilled,(function(){return!1})),Object(W.a)(V,g.rejected,(function(){return!1})),Object(W.a)(V,y.pending,(function(){return!0})),Object(W.a)(V,y.fulfilled,(function(){return!1})),Object(W.a)(V,y.rejected,(function(){return!1})),V)),G=Object(v.d)(null,(D={},Object(W.a)(D,C.rejected,(function(e,t){return t.payload})),Object(W.a)(D,g.rejected,(function(e,t){return t.payload})),Object(W.a)(D,y.rejected,(function(e,t){return t.payload})),D)),H=Object(v.d)("",Object(W.a)({},k,(function(e,t){return t.payload}))),Q=n(10),U=Object(J.b)({contacts:M,loading:Z,error:G,filterReducer:H}),$=Object(v.a)({reducer:U,middleware:function(e){return e({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}})}});u.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(j.a,{store:$,children:Object(N.jsx)(I,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",button:"Form_button__243jh"}}},[[65,1,2]]]);
//# sourceMappingURL=main.9f133e3d.chunk.js.map