(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),a=s(10),c=s.n(a),i=(s(15),s(9),s(4)),o=s(2),u=s(5),l=s(6),p=s.n(l),d=s(7),j=s(3),b=s.n(j),m=s(0),h={password:"",userName:""},O=function(){var e=Object(n.useState)(h),t=Object(i.a)(e,2),s=t[0],r=t[1],a=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"http://localhost:3000/login",n={method:"POST",body:JSON.stringify({values:s}),headers:{"Content-Type":"application/json"},mode:"cors"},e.prev=3,e.next=6,fetch("http://localhost:3000/login",n);case 6:return r=e.sent,e.next=9,r.json();case 9:e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),c=Object(n.useCallback)((function(e){return function(t){r((function(s){return Object(u.a)(Object(u.a)({},s),{},Object(o.a)({},e,null===t||void 0===t?void 0:t.target.value))}))}}),[r]);return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:a,children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("p",{class:"name_input",children:"User name "}),Object(m.jsx)("input",Object(o.a)({type:"username",id:"username",name:"username",value:s.userName,class:"input_form",placeholder:"Enter your User name",onChange:c("userName"),formnovalidate:!0},"placeholder","Enter your User name"))]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("p",{class:"name_input",children:"Password "}),Object(m.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Enter your Password",value:s.password,onChange:c("password"),class:"input_form"})]}),Object(m.jsx)("div",{class:"forgot_password",children:Object(m.jsx)("a",{href:"",class:"forgot",children:"Forgot Password?"})}),Object(m.jsx)("div",{class:"input_submit_1",children:Object(m.jsx)("input",{type:"submit",className:b()({input_submit:!0,input_submit_disabled:""===(s.userName&&s.password)}),value:"Login"})})]})})},x={email:"",password:"",userName:""},f=function(){var e=Object(n.useState)(x),t=Object(i.a)(e,2),s=t[0],r=t[1],a=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"http://localhost:3000/register",n={method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}},e.prev=3,e.next=6,fetch("http://localhost:3000/register",n);case 6:return r=e.sent,e.next=9,r.json();case 9:e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),c=Object(n.useCallback)((function(e){return function(t){r((function(s){return Object(u.a)(Object(u.a)({},s),{},Object(o.a)({},e,null===t||void 0===t?void 0:t.target.value))}))}}),[r]);return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:a,children:[Object(m.jsxs)("p",{children:[Object(m.jsxs)("p",{class:"name_input",children:["Email Address"," "]}),Object(m.jsx)("input",{type:"email",id:"email",name:"email",value:s.email,placeholder:"Enter your Email Address",onChange:c("email"),formnovalidate:!0,class:"input_form"})]}),Object(m.jsxs)("p",{children:[Object(m.jsxs)("p",{class:"name_input",children:["User name"," "]}),Object(m.jsx)("input",{type:"username",id:"username",name:"username",value:s.userName,class:"input_form",onChange:c("userName"),formnovalidate:!0,placeholder:"Enter your User name"})]}),Object(m.jsxs)("p",{children:[Object(m.jsxs)("p",{class:"name_input",children:["Password"," "]}),Object(m.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Enter your Password",value:s.password,onChange:c("password"),class:"input_form"})]}),Object(m.jsx)("div",{class:"input_submit_1",children:Object(m.jsx)("input",{type:"submit",className:b()({input_submit:!0,input_submit_disabled:""===(s.userName&&s.password)}),value:"Register"})})]})})};function v(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),s=t[0],r=t[1];return Object(m.jsxs)("div",{class:"form",children:[Object(m.jsxs)("div",{class:"picture",children:[Object(m.jsx)("p",{class:"tekst_sverhu_kartinki",children:"Lorem Ipsum is simply"}),Object(m.jsx)("p",{class:"text",children:"Lorem Ipsum is simply"})]}),Object(m.jsx)("div",{class:"form_css",children:Object(m.jsxs)("div",{class:"form_display",children:[Object(m.jsx)("p",{class:"welcome",children:"Welcome to lorem..!"}),Object(m.jsxs)("div",{class:"button_group",children:[Object(m.jsx)("button",{className:b()({button_active:s,button_inactive:!s}),onClick:function(){return r(!0)},children:"Login"}),Object(m.jsx)("button",{className:b()({button_active:!s,button_inactive:s}),onClick:function(){return r(!1)},children:"Register"})]}),Object(m.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),s&&Object(m.jsx)(O,{}),!s&&Object(m.jsx)(f,{})]})})]})}var y=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(v,{})})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),r(e),a(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),_()},9:function(e,t,s){}},[[18,1,2]]]);
//# sourceMappingURL=main.97c7d361.chunk.js.map