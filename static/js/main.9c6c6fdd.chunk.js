(this["webpackJsonpreact-user-search"]=this["webpackJsonpreact-user-search"]||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),s=(a(22),a(23),a(24),a(2)),i=a(3),o=a(4),u=a(5),m=a(16),d=a.n(m),h=function(){return d.a.get("https://randomuser.me/api/?results=10&nat=us")};var f=function(e){var t=e.users;return r.a.createElement("tbody",null,void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,a=e.name,n=e.picture,l=e.phone,c=e.email,s=e.dob;return r.a.createElement("tr",{key:t.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+a.first+" "+a.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},a.first," ",a.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}(s.date)))})):r.a.createElement(r.a.Fragment,null))};var p=function(e){var t=e.headings,a=e.users;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){var t=e.name;return r.a.createElement("th",{key:t},t)})))),r.a.createElement(f,{users:a})))},E=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={users:[{}],headings:[{name:"images"},{name:"name"},{name:"phone"},{name:"email"},{name:"dob"}]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().then((function(t){e.setState({users:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{headings:this.state.headings,users:this.state.users}))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null))}}]),a}(n.Component),v=(a(42),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",id:"searchBox",placeholder:"Search"}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{class:"fas fa-search fa-2x"})))}}]),a}(r.a.Component)),b=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("p",{class:"waltHeader2"},"\xa0"),r.a.createElement("h1",{class:"waltHeader2"},"React.js User Search"),r.a.createElement("p",{class:"waltHeader2"},"\xa0"),r.a.createElement("div",{class:"waltHeader2 search-container waltHeader"})))}}]),a}(n.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9c6c6fdd.chunk.js.map