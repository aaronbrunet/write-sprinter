(this["webpackJsonpwrite-sprinter"]=this["webpackJsonpwrite-sprinter"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),l=n(4),a=n.n(l),r=(n(9),n(2)),s=n(0);var o=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],i=t[1],l=Object(c.useState)(0),a=Object(r.a)(l,2),o=a[0],u=a[1],d=Object(c.useState)(""),b=Object(r.a)(d,2),j=b[0],f=b[1],m=Object(c.useState)(j.trim().split(" ").length),x=Object(r.a)(m,2),h=x[0],O=x[1],w=Object(c.useState)(!1),p=Object(r.a)(w,2),g=p[0],v=p[1],y=Object(c.useState)(!1),N=Object(r.a)(y,2),S=N[0],C=N[1],k=Object(c.useState)(null),T=Object(r.a)(k,2),E=(T[0],T[1]),M=Object(c.useState)("\ud83d\udcbe Copy"),I=Object(r.a)(M,2),J=I[0],R=I[1],W=function(){navigator.clipboard.writeText(j),R("\u2705 Copied!"),setTimeout((function(){R("\ud83d\udcbe Copy")}),5e3)};return Object(c.useEffect)((function(){O(""===j?0:function(){return j.trim().split(" ").length})}),[j]),Object(c.useEffect)((function(){o>0&&g&&setTimeout((function(){u(o-1)}),1e3),0===o&&g&&(E(!0),v(!1))}),[o,g]),Object(s.jsx)("div",{className:"w-screen h-screen flex items-center justify-center align-middle",children:Object(s.jsxs)("div",{className:"container w-1/2 h-3/4 p-6 m-auto shadow ",children:[Object(s.jsx)("h1",{className:"text-3xl justify-center text-center mb-4",children:"Write Like The Wind"}),g||S?Object(s.jsx)("div",{className:"flex flex-row w-full align-middle justify-center items-center mb-6 h-12",children:(g||S)&&o>0?o>59?"".concat(Math.floor(o/60)<10?"0":"").concat(Math.floor(o/60),":").concat(o%60<10?"0":"").concat(o%60):"00:".concat(o):"00:00"}):Object(s.jsxs)("div",{id:"input-row",className:"flex flex-row w-full align-middle justify-center items-center mb-6 h-12",children:[Object(s.jsx)("input",{onChange:function(e){return i(e.target.value)},type:"number",max:60,value:n,className:"inline-flex input input-bordered w-12 pr-1 mx-2 ".concat((g||S)&&"bg-gray-200"),readOnly:g||S}),Object(s.jsx)("div",{className:"inline-flex align-middle",children:1===parseInt(n)?"minute":"minutes"})]}),Object(s.jsxs)("div",{id:"button-row",className:"flex flex-row w-full align-middle justify-center items-center mb-6",children:[g||S?Object(s.jsx)("button",{onClick:function(){i(0),u(0),v(!1),E(null),C(!1)},className:"inline-flex btn btn-error mx-2",disabled:!(g||S),children:"Stop"}):Object(s.jsx)("button",{onClick:function(){f(""),u(60*n),v(!0),E(!1),C(!1)},className:"inline-flex btn btn-primary mx-2",disabled:0===n,children:"Start"}),Object(s.jsx)("button",{onClick:function(){v((function(){return!g})),C((function(){return!S}))},className:"inline-flex btn btn-primary mx-2",disabled:!(g||S),children:S?"Resume":"Pause"}),Object(s.jsx)("button",{onClick:function(){i(0),u(0),v(!1),E(null),W(),C(!1),O(0),f("")},className:"inline-flex btn btn-outline btn-accent mx-2",children:"Reset"})]}),Object(s.jsx)("div",{id:"status",className:"items-center align-middle justify-center",children:Object(s.jsxs)("div",{className:"flex flex-row w-full items-center align-middle justify-center",children:[Object(s.jsx)("div",{className:"inline-flex",children:"".concat(h," words")}),Object(s.jsx)("button",{onClick:function(){return W()},className:"inline-flex btn btn-ghost mx-1 px-1 py-1",disabled:j.length<=0,children:J})]})}),Object(s.jsx)("div",{id:"editor-row",className:"flex flex-row w-full h-full overflow-hidden",children:Object(s.jsx)("textarea",{onChange:function(e){return f((function(){return e.target.value}))},placeholder:g?"Get started!":"Start the timer to begin writing!",value:j,className:"flex flex-row h-1/2 w-full overflow-y-scroll my-4 shadow-sm textarea textarea-bordered  ".concat(!g&&"bg-gray-200"),readOnly:!g})})]})})};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(o,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.77eca47b.chunk.js.map