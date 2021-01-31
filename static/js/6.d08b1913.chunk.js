(this.webpackJsonpbudgetapp=this.webpackJsonpbudgetapp||[]).push([[6,8],{173:function(e,n,t){"use strict";var r=t(104),a=t(105);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=a(t(0)),i=(0,r(t(106)).default)(c.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");n.default=i},174:function(e,n,t){"use strict";var r=t(104),a=t(105);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=a(t(0)),i=(0,r(t(106)).default)(c.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarOutline");n.default=i},175:function(e,n,t){"use strict";var r=t(104),a=t(105);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=a(t(0)),i=(0,r(t(106)).default)(c.createElement(c.Fragment,null,c.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),c.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"AccessTime");n.default=i},176:function(e,n,t){"use strict";var r=t(104),a=t(105);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=a(t(0)),i=(0,r(t(106)).default)(c.createElement("path",{d:"M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"}),"DateRangeOutlined");n.default=i},177:function(e,n,t){"use strict";var r=t(1),a=t(3),c=t(0),i=t(4),o=t(164),l=t(148),u=t(167),s=t(68),d=t(47),f=Object(l.a)({refundStyle:{color:"var(--color-secondary)"},contentStyle:{"@media only screen and (max-width: 94em)":{fontSize:"0.9rem"}}}),j=function(e){var n=e.amount,t=e.currency,a=e.isRefund,c=f(),i="".concat(Object(d.a)(n)," ").concat(Object(s.a)(t)),l=Object(r.jsx)(o.a,{color:"textSecondary",variant:"h6",children:i});return a&&(l=Object(r.jsxs)(u.a,{className:c.refundStyle,component:"div",children:[Object(r.jsx)(o.a,{className:c.contentStyle,variant:"h6",children:i}),Object(r.jsx)(o.a,{variant:"body1",children:"Refunded"})]})),l};function m(){var e=Object(a.a)(["\n  width: 13rem;\n  height: 7rem;\n\n  display: flex;\n  flex-direction: column;\n\n  background-color: var(--color-white);\n  padding: 0.8rem;\n  margin: 0.8rem;\n  border-radius: 0.4rem;\n  box-shadow: var(--shadow-light);\n"]);return m=function(){return e},e}function v(){var e=Object(a.a)(["\n  display: flex;\n\n  width: 100%;\n"]);return v=function(){return e},e}var h=i.c.div(v()),b=i.c.div(m()),p=Object(l.a)((function(e){return{titleStyle:{marginBottom:"0.5rem",color:e.palette.grey.A100}}})),O=function(e){var n=e.amount,t=e.currency,a=e.isRefund,c=e.type,i=p();return Object(r.jsxs)(h,{children:[Object(r.jsxs)(b,{children:[Object(r.jsx)(o.a,{className:i.titleStyle,variant:"subtitle2",children:"Amount"}),Object(r.jsx)(j,{amount:n,currency:t,isRefund:a})]}),Object(r.jsxs)(b,{children:[Object(r.jsx)(o.a,{className:i.titleStyle,variant:"subtitle2",children:"Transaction"}),Object(r.jsx)(o.a,{variant:"h6",children:c.toUpperCase()})]})]})},x=t(174),y=t.n(x),g=t(173),w=t.n(g),S=Object(l.a)((function(e){return{iconStyle:{fill:e.palette.grey.A200,"&:hover":{cursor:"pointer"}}}})),z=function(e){var n=e.isStarred,t=e.clicked,a=S();return n?Object(r.jsx)(w.a,{className:a.iconStyle,fontSize:"large",onClick:function(e){return t(e)}}):Object(r.jsx)(y.a,{className:a.iconStyle,fontSize:"large",onClick:function(e){return t(e)}})},k=t(175),M=t.n(k),C=Object(l.a)((function(e){return{iconStyle:{fill:e.palette.grey.A200,marginRight:"0.5rem"}}})),N=function(){var e=C();return Object(r.jsx)(M.a,{className:e.iconStyle})},R=t(176),F=t.n(R),L=Object(l.a)((function(e){return{iconStyle:{fill:e.palette.grey.A200,marginRight:"0.5rem"}}})),_=function(){var e=L();return Object(r.jsx)(F.a,{className:e.iconStyle})};function E(){var e=Object(a.a)(["\n  display: flex;\n  width: 45%;\n"]);return E=function(){return e},e}function A(){var e=Object(a.a)(["\n  display: flex;\n  width: 45%;\n"]);return A=function(){return e},e}function H(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: space-around;\n\n  align-self: flex-start;\n\n  margin-top: 0.5rem;\n  width: 90%;\n"]);return H=function(){return e},e}var P=Object(l.a)((function(e){return{labelStyle:{color:e.palette.grey.A100}}})),J=i.c.div(H()),T=i.c.div(A()),V=i.c.div(E()),I=function(e){var n=e.time,t=e.date,a=P();return Object(r.jsxs)(J,{children:[Object(r.jsxs)(T,{children:[Object(r.jsx)(N,{}),Object(r.jsx)(o.a,{className:a.labelStyle,variant:"subtitle1",children:n})]}),Object(r.jsxs)(V,{children:[Object(r.jsx)(_,{}),Object(r.jsx)(o.a,{className:a.labelStyle,variant:"subtitle1",children:t})]})]})},U=t(48),Y=t(12),B=t(22);function D(){var e=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return D=function(){return e},e}function q(){var e=Object(a.a)(["\n  height: 0.4rem;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: var(--color-secondary);\n"]);return q=function(){return e},e}function G(){var e=Object(a.a)(["\n  width: 100%;\n  max-width: 25rem;\n  min-width: 22rem;\n  max-height: 16rem;\n  min-height: 15rem;\n\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  padding: 1.5rem 2rem;\n  background-color: var(--color-white);\n  border-radius: 1rem;\n  position: relative;\n  overflow: hidden;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return G=function(){return e},e}var K=i.c.div(G()),Q=i.c.div(q()),W=i.c.div(D());n.a=function(e){var n=e.type,t=e.amount,a=e.currency,i=e.isRefund,l=e.company,u=e.time,s=e.date,d=e.id,f=e.isFaved,j=e.onClickFavorite,m=Object(c.useContext)(Y.a),v=Object(r.jsx)(Q,{children:"\xa0"});return Object(r.jsxs)(K,{children:[i&&v,Object(r.jsxs)(W,{children:[Object(r.jsx)(o.a,{variant:"h5",children:Object(U.a)(l)}),Object(r.jsx)(z,{clicked:function(){j(f,{type:n,amount:t,currency:a,isRefund:i,company:l,time:u,date:s,id:d,isFaved:f,onClickFavorite:j})},isStarred:f})]}),Object(r.jsx)(I,{time:u,date:s}),Object(r.jsx)(O,{amount:Object(B.a)(t,a,m.currency,m.currencyRates),currency:m.currency,isRefund:i,type:n})]})}},178:function(e,n,t){"use strict";var r=t(11),a=t(0),c=function(e,n){var t=Object(a.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(r){return n}})),c=Object(r.a)(t,2),i=c[0],o=c[1];return[i,function(n){try{var t=n instanceof Function?n(i):n;o(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(r){throw new Error("error")}}]};n.a=function(){var e=c("favorits",[{}]),n=Object(r.a)(e,2),t=n[0],a=n[1];return[t,function(e,n){var r=t.slice();if(e){var c=r.filter((function(e){return e.id!==n.id}));a(c)}else r.push(n),a(r)}]}},180:function(e,n,t){"use strict";var r=t(1),a=(t(0),t(148)),c=t(181),i=t.n(c),o=Object(a.a)((function(e){return{iconStyle:{fill:e.palette.grey.A200,justifySelf:"start",transition:"0.2s all","&:hover":{transform:"translateY(-0.2rem)",cursor:"pointer"}}}}));n.a=function(e){var n=e.clicked,t=o();return Object(r.jsx)(i.a,{className:t.iconStyle,fontSize:"large",onClick:function(e){return n(e)}})}},181:function(e,n,t){"use strict";var r=t(104),a=t(105);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=a(t(0)),i=(0,r(t(106)).default)(c.createElement("path",{d:"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"HighlightOff");n.default=i},182:function(e,n,t){"use strict";var r=t(3);function a(){var e=Object(r.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: min-content;\n  align-content: start;\n  grid-gap: 1.5rem;\n  grid-row-gap: 2.5rem;\n  align-items: center;\n  max-width: 95%;\n  height: 100%;\n  margin: 0 auto;\n  overflow-y: hidden;\n\n  &:focus,\n  &:active,\n  &:hover {\n    overflow-y: scroll;\n  }\n\n  @media only screen and (max-width: 37.5em) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    grid-gap: 0;\n\n    & > *:not(:last-child) {\n      margin-bottom: 1.5rem;\n    }\n  }\n"]);return a=function(){return e},e}var c=t(4).c.div(a());n.a=c},189:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(11),c=t(0),i=t(9),o=t(177),l=t(21),u=t(74),s=t(180),d=t(182),f=t(178),j=t(72);n.default=function(){var e=Object(i.h)().category,n=Object(i.g)(),t=Object(c.useContext)(l.a).slice(0,40),m=Object(f.a)(),v=Object(a.a)(m,2),h=v[0],b=v[1],p=function(e){return Object(r.jsx)(o.a,{id:e.id,company:e.company,amount:parseFloat(e.amount),currency:e.currency,isRefund:"cancelled"===e.transactionType,type:Object(u.a)(e.transactionType),time:e.time,date:e.date,isFaved:(n=e.id,h.findIndex((function(e){return e.id===n}))>0),onClickFavorite:b},e.id);var n},O=Object(r.jsx)(d.a,{children:null===t||void 0===t?void 0:t.map((function(e){return p(e)}))});if(e){var x=t.filter((function(n){return Object(j.a)(n.category)===e}));O=Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{clicked:function(){n.replace("/categories")}}),Object(r.jsx)(d.a,{children:null===x||void 0===x?void 0:x.map((function(e){return p(e)}))})]})}return O}},230:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(3),c=t(0),i=t(30),o=t(9),l=t(4),u=t(21),s=t(164);function d(){var e=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 25rem;\n  max-height: 16rem;\n  min-height: 13rem;\n  background-color: var(--color-white);\n  padding: 1rem;\n  border-radius: 1rem;\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n    transform: translateY(-10px);\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);\n  }\n\n  @media only screen and (max-width: 37.5em) {\n    min-height: 9rem;\n  }\n"]);return d=function(){return e},e}var f=l.c.div(d()),j=function(e){var n=e.category;return Object(r.jsx)(f,{children:Object(r.jsx)(s.a,{variant:"h6",color:"textSecondary",children:n.toUpperCase()})})},m=t(189),v=t(72);function h(){var e=Object(a.a)(["\n  text-decoration: none;\n\n  &:hover,\n  &:active {\n    cursor: pointer;\n  }\n"]);return h=function(){return e},e}function b(){var e=Object(a.a)([""]);return b=function(){return e},e}function p(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1.7rem;\n  max-width: 95%;\n  margin: 0 auto;\n  height: 100%;\n  overflow-y: hidden;\n  padding: 1rem;\n  list-style: none;\n\n  &:focus,\n  &:active,\n  &:hover {\n    overflow-y: scroll;\n  }\n\n  @media only screen and (max-width: 37.5em) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media only screen and (max-width: 22em) {\n    grid-template-columns: 1fr;\n  }\n"]);return p=function(){return e},e}var O=l.c.ul(p()),x=l.c.li(b()),y=Object(l.c)(i.b)(h());n.default=function(){var e=Object(c.useContext)(u.a).slice(0,40),n=Object(o.i)(),t=n.path,a=n.url,i=[];e.forEach((function(e){i.includes(e.category)||i.push(e.category)}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(o.d,{children:[Object(r.jsx)(o.b,{path:"".concat(t,"/:category"),component:m.default}),Object(r.jsx)(o.b,{path:"",exact:!0,render:function(){return Object(r.jsx)(O,{children:i.map((function(e){return n=e,Object(r.jsx)(x,{children:Object(r.jsx)(y,{to:"".concat(a,"/").concat(Object(v.a)(n)),children:Object(r.jsx)(j,{category:n})})},n);var n}))})}})]})})}}}]);
//# sourceMappingURL=6.d08b1913.chunk.js.map