(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){},56:function(e,t,n){e.exports=n(57)},57:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(21),c=n(15),u=n(8),s=n(13),o=n(31),l=n(0),m=n.n(l),f=n(55);n(132);function g(){var e=new s.GiphyFetch("325xH8P9NlRD19vhJqeFs182GlZcHYmV"),t=Object(l.useState)(null),n=Object(u.a)(t,2),a=n[0],f=n[1],g=Object(l.useState)([]),d=Object(u.a)(g,2),p=d[0],b=d[1],v=Object(l.useState)("empty"),h=Object(u.a)(v,2),S=h[0],j=h[1],w=Object(l.useState)([]),O=Object(u.a)(w,2),y=O[0],E=O[1],x=Object(l.useState)(""),k=Object(u.a)(x,2),N=k[0],D=k[1],L=Object(l.useRef)(null),G=Object(l.useRef)(null),A=Object(l.useState)(!1),R=Object(u.a)(A,2),T=R[0],C=R[1],F=new RegExp(/^\/gif\s+([A-Za-z\u0430-\u044f\u0451\u0410-\u042f\u04010-9_\s]+)/),J=function(e){e.preventDefault(),"gif"===S?B():"random gif"===S?z():"empty"!==S&&H(N),Z()},H=function(e){var t=String((new Date).toLocaleTimeString()),n={id:String(Date.now()),text:String(e),time:t,author:"\u0415\u0432\u0433\u0435\u043d\u0438\u044f",gif:null};E([].concat(Object(c.a)(y),[n]))},Z=function(){D("")};function q(){return(q=Object(i.a)(r.a.mark(function t(){var n,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.trending({limit:20});case 2:n=t.sent,a=n.data,b(a);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(l.useEffect)(function(){T&&function(){q.apply(this,arguments)}()},[1==T]);var z=function(){var t=Object(i.a)(r.a.mark(function t(){var n,a,i,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.random();case 2:n=t.sent,a=n.data,i=String((new Date).toLocaleTimeString()),u={id:String(Date.now()),text:String(""),time:i,author:"\u0415\u0432\u0433\u0435\u043d\u0438\u044f",gif:a},E([].concat(Object(c.a)(y),[u]));case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),B=function(){var e=String((new Date).toLocaleTimeString()),t={id:String(Date.now()),text:String(""),time:e,author:"\u0415\u0432\u0433\u0435\u043d\u0438\u044f",gif:a};E([].concat(Object(c.a)(y),[t]))},I=function(){var t=Object(i.a)(r.a.mark(function t(n){var a,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.search(n,{limit:20});case 2:a=t.sent,i=a.data,f(i[0]),b(i);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();Object(l.useEffect)(function(){if(!0===/^\/gif\s*/.test(N))if(G.current&&(G.current.style.display="block"),C(!0),!0===/^\/gif\s*$/.test(N))j("random gif");else{var e=F.exec(N)[1];I(e),j("gif")}else""===N||""===N.trim()?(G.current&&(G.current.style.display="none"),C(!1),j("empty")):(G.current&&(G.current.style.display="none"),C(!1),j("text"))},[N]);return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"App"},m.a.createElement("div",{className:"user-area"},m.a.createElement("div",{className:"message-area"},y.map(function(e){return null===e.gif?m.a.createElement("div",{key:String(e.id)},m.a.createElement("div",{className:"message"}," ",e.text," "),m.a.createElement("div",{className:"author-time"},e.author,", ",e.time)):m.a.createElement("div",{key:String(e.id)},m.a.createElement(o.Gif,{hideAttribution:!0,noLink:!0,className:"gif",gif:e.gif,width:150}),m.a.createElement("div",{className:"author-time"},e.author,", ",e.time))})),m.a.createElement("hr",null),m.a.createElement("div",{ref:G,className:"gif-area"},m.a.createElement("div",{className:"gif-grid"},p.map(function(e){return m.a.createElement(o.Gif,{hideAttribution:!0,noLink:!0,gif:e,width:110,height:110,key:String(e.id),onGifClick:function(e){return function(e){G.current&&(G.current.style.display="none"),C(!1),Z();var t=String((new Date).toLocaleTimeString()),n={id:String(Date.now()),text:String(""),time:t,author:"\u0415\u0432\u0433\u0435\u043d\u0438\u044f",gif:e};E([].concat(Object(c.a)(y),[n]))}(e)}})}))),m.a.createElement("form",{onSubmit:J,className:"input-area"},m.a.createElement("input",{type:"text",className:"message-input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",ref:L,value:N,onChange:function(e){return D(e.target.value)}}),m.a.createElement("button",{type:"none",onClick:J,className:"message-btn"},"Send")))))}var d=document.getElementById("root");Object(f.render)(m.a.createElement(g,null),d)},77:function(e,t){}},[[56,2,1]]]);
//# sourceMappingURL=main.ead5dec5.chunk.js.map