(this["webpackJsonpaa-frontend"]=this["webpackJsonpaa-frontend"]||[]).push([[0],{21:function(e,t,n){e.exports=n(45)},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),u=n.n(c),l=n(10),o=n(1),i=n.n(o),s=n(3),p=n(4),f=n(5),m=n(9),d=function(e){var t=e.addPlayer,n={id:null,name:"",club:"",important:!1},c=Object(a.useState)(n),u=Object(p.a)(c,2),l=u[0],o=u[1],i=function(e){var t=e.target,n=t.name,a=t.value;o(Object(m.a)({},l,Object(f.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.name&&l.club&&(t(l),o(n))}},r.a.createElement("h2",null,"Add player"),r.a.createElement("input",{placeholder:"Enter name",onChange:i,name:"name",value:l.name}),r.a.createElement("input",{placeholder:"Enter club",onChange:i,name:"club",value:l.club}),r.a.createElement("button",null,"Add player"))},b=function(e){var t=e.players,n=e.deletePlayer,c=e.whichPlayer,u=e.toggle,l=Object(a.useState)(0),o=Object(p.a)(l,2),i=o[0],s=o[1],f=t.map((function(e){return r.a.createElement("tr",{style:e.important?{backgroundColor:"orange"}:{backgroundColor:"transparent"}},r.a.createElement("td",null,e.id),r.a.createElement("td",null,r.a.createElement("span",{style:{fontWeight:"bolder"}},e.name)),r.a.createElement("td",null,e.club),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return u(e.id,e)}},e.important?"Not important":"Important")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return c(e)}},"Edit")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(e.id)}},"Delete")))}));return Object(a.useEffect)((function(){s(t.length)}),[t]),r.a.createElement("div",null,r.a.createElement("h2",null,"All players (",i,")"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"NAME"),r.a.createElement("th",null,"CLUB"),r.a.createElement("th",null,"IMPORTANT"),r.a.createElement("th",null,"EDIT"),r.a.createElement("th",null,"DELETE")),f))},E=function(e){var t=e.setEditing,n=e.playerToEdit,c=e.editPlayer,u=Object(a.useState)(n),l=Object(p.a)(u,2),o=l[0],i=l[1],s=function(e){var t=e.target,n=t.name,a=t.value;i(Object(m.a)({},o,Object(f.a)({},n,a)))};return Object(a.useEffect)((function(){i(n)}),[n]),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o.name&&o.club&&c(o.id,o)}},r.a.createElement("h2",null,"Edit player"),r.a.createElement("input",{placeholder:"Enter name",name:"name",value:o.name,onChange:s}),r.a.createElement("input",{placeholder:"Enter club",name:"club",value:o.club,onChange:s}),r.a.createElement("button",null,"Edit player"),r.a.createElement("button",{onClick:function(){return t(!1)}},"Cancel"))},v=n(6),h=n.n(v),y={getService:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/players");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createService:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/players",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteService:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat("/players","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),editService:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat("/players","/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),toggleService:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.patch("".concat("/players","/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},O=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),o=Object(p.a)(u,2),f=o[0],m=o[1],v=Object(a.useState)([]),h=Object(p.a)(v,2),O=h[0],j=h[1],g=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.createService(t);case 2:n=e.sent,j(O.concat(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(l.a)(O),e.next=3,y.deleteService(t);case 3:j(n.filter((function(e){return e.id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(l.a)(O),e.next=3,y.editService(t,n);case 3:r=e.sent,j(a.map((function(e){return e.id===t?r:e}))),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(l.a)(O),e.next=3,y.toggleService(t,n);case 3:r=e.sent,j(a.map((function(e){return e.id===t?r:e})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y.getService().then((function(e){j(e)}))}),[]),r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Practicing"),r.a.createElement("hr",null),n?r.a.createElement(E,{setEditing:c,playerToEdit:f,editPlayer:x}):r.a.createElement(d,{addPlayer:g}),r.a.createElement(b,{players:O,deletePlayer:w,whichPlayer:function(e){c(!0),m(e)},toggle:S}))};n(44);u.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8abc8854.chunk.js.map