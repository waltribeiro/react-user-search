(this["webpackJsonpreact-user-search"]=this["webpackJsonpreact-user-search"]||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),s=a.n(l),c=(a(22),a(23),a(24),a(2)),o=a(3),i=a(4),m=a(5),u=a(16),d=a.n(u),h=function(){return d.a.get("https://randomuser.me/api/?results=10&nat=us")};var g=function(e){var t=e.users;return r.a.createElement("tbody",null,void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,a=e.name,n=e.picture,l=e.phone,s=e.email,c=e.dob;return r.a.createElement("tr",{key:t.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+a.first+" "+a.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},a.first," ",a.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+s,target:"__blank"},s)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}(c.date)))})):r.a.createElement(r.a.Fragment,null))};var f=function(e){var t=e.headings,a=e.users;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){var t=e.name;return r.a.createElement("th",{key:t},t)})))),r.a.createElement(g,{users:a})))},p=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={users:[{}],headings:[{name:"images"},{name:"name"},{name:"phone"},{name:"email"},{name:"dob"}]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().then((function(t){console.log(t),console.log(t.data.results[0]),e.setState({users:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{headings:this.state.headings,users:this.state.users}))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null))}}]),a}(n.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.bdc5be32.chunk.js.map