(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/leoayala_resume.a9db0573.pdf"},32:function(e,a,t){e.exports=t(47)},37:function(e,a,t){},38:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),i=t.n(r),c=(t(37),t(38),t(9));var o=function(e){return l.a.createElement("ul",{className:"nav nav-tabs"},["About","Portfolio","Resume","Contact"].map((function(a){return l.a.createElement("li",{className:"nav-item",key:a},l.a.createElement("a",{href:"#"+a.toLowerCase(),onClick:function(){return e.handlePageChange(a)},className:e.currentPage===a?"nav-link active":"nav-link"},a))})))},u=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"A few things about myself"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Aspiring Web Developer"),l.a.createElement("li",null,"Health and Weightlifting Enthusiast "),l.a.createElement("li",null,"UCF Alumni"),l.a.createElement("li",null,"Based in Central Florida")))),l.a.createElement("p",null,"Shortly after graduating with my Bachelors degree in Sports and Exercise Science, I decided to embark on the path of becoming a web developer. While on this journey, I will be attempting to combine the best of brains and brawns. My goal wil be to successfully create applications that are easy to use and understand by a common person but also high-level enough for athletes of different experiences to enjoy."))},m=t(20),s=t(21),d=t(31),f=t(30),E=t(22),b=t.n(E),h=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("a",{href:b.a,target:"_blank"},"Click here for my resume!"))}}]),t}(n.Component),g=t(11),p=t(16);var v=function(){var e=Object(n.useState)({name:"",email:"",message:""}),a=Object(c.a)(e,2),t=a[0],r=a[1],i=t.name,o=t.email,u=t.message,m=Object(n.useState)(""),s=Object(c.a)(m,2),d=s[0],f=s[1];function E(e){if("email"===e.target.name){var a=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(a),f(a?"":"Your email is invalid.")}d||r(Object(p.a)(Object(p.a)({},t),{},Object(g.a)({},e.target.name,e.target.value)))}return l.a.createElement("section",null,l.a.createElement("h1",null,"Contact me"),l.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault()}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Name:"),l.a.createElement("input",{type:"text",defaultValue:i,onChange:E,name:"name"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"email"},"Email address:"),l.a.createElement("input",{type:"email",defaultValue:o,onChange:E,name:"email"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"message"},"Message:"),l.a.createElement("textarea",{name:"message",defaultValue:u,onChange:E,rows:"5"})),l.a.createElement("button",{type:"submit"},"Submit")))},y=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome to my Portfolio"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus."))};var w=function(){var e=Object(n.useState)("Home"),a=Object(c.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement(o,{currentPage:t,handlePageChange:r}),l.a.createElement("div",{className:"render"},function(){switch(t){case"About":return l.a.createElement(u,null);case"Portfolio":return l.a.createElement(y,null);case"Resume":return l.a.createElement(h,null);case"Contact":return l.a.createElement(v,null);default:return l.a.createElement(u,null)}}()))},C=t(28),j=t(29),k=t(49),N=t(50),O=t(51);t(39);var S=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(k.a,null,l.a.createElement(N.a,null,l.a.createElement(O.a,{className:"navbar fixed-bottom d-flex justify-content-center p=0 md=3"},l.a.createElement("a",{className:"p=10",href:"https://www.linkedin.com/in/leo-ayala-36b333l58/",target:"_blank"},l.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),l.a.createElement("a",{className:"p=10",href:"https://github.com/leo-ayala",target:"_blank"},l.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})),l.a.createElement("a",{className:"p=10",href:"mailto:leo.ayala.dev@gmail.com",target:"_blank"},l.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}))))))};var x=function(){return l.a.createElement("div",null,l.a.createElement(C.a,{className:"nav justify-content-center",bg:"transparent",expand:"lg"},l.a.createElement("h1",null,"Leo Ayala")),l.a.createElement(j.a,null,l.a.createElement(w,null)),l.a.createElement("main",null),l.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(46);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.15b080bf.chunk.js.map