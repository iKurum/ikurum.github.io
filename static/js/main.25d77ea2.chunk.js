(this.webpackJsonpsakura=this.webpackJsonpsakura||[]).push([[0],{13:function(e,t,n){e.exports={App:"App_App__obQeD",page:"App_page__3E-jT",userPhoto:"App_userPhoto__1Py3h",userName:"App_userName__2-qV-",nav:"App_nav__27ePW",logout:"App_logout__3CR6Y"}},144:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(60),o=n.n(r),i=(n(68),n(4)),l=n(8),s=n(1);var u=function(){return c.a.createElement(c.a.Fragment,null,"Home")};var m=function(){return c.a.createElement(c.a.Fragment,null,"Profile")};var f=function(){return c.a.createElement(c.a.Fragment,null,"OutLook")};var p=function(){return c.a.createElement(c.a.Fragment,null,"Article")},d=n(43),h=n.n(d),g=c.a.forwardRef((function(e,t){var n=Object(a.useState)(!0),r=Object(i.a)(n,2),o=r[0],l=r[1];return Object(a.useImperativeHandle)(t,(function(){return{isOk:function(){l(!1)},isNotOk:function(){l(!0)}}})),c.a.createElement("div",{className:h.a.wall,style:{display:o?"block":"none"}},c.a.createElement("div",{className:h.a.loading},"LOADING ..."))}));function E(e){if(e.folder)return"iconfont icon-open_filled";if(e.package&&"oneNote"===e.package.type)return"iconfont icon-microsoftonenote";if(!e.file)return"iconfont icon-geshi_weizhi";switch(e.name.split(".")[e.name.split(".").length-1].toLowerCase()){case"pdf":return"iconfont icon-pdf";case"doc":case"docx":return"iconfont icon-Word";case"ppt":case"pptx":return"iconfont icon-office-pptx";case"xls":case"xlsx":return"iconfont icon-office-excel";case"mp4":case"flv":case"mkv":return"iconfont icon-video";case"mp3":return"iconfont icon-MusicAcc";case"jpeg":case"jpg":case"png":return"iconfont icon-image";case"7z":case"zip":case"gz":case"rar":return"iconfont icon-filezip";case"md":return"iconfont icon-file-markdown";case"exe":return"iconfont icon-exe";case"iso":return"iconfont icon-iso";case"txt":return"iconfont icon-txt";case"apk":return"iconfont icon-apk";default:return"iconfont icon-geshi_weizhi"}}n(69);var v=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if("string"===typeof n){var c={Authorization:"Bearer ".concat(n)};switch(t){case"json":switch(a){case"onedrive":return fetch("/ms/drive/root:/emilia - share".concat(e),{headers:c}).then((function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})}));case"preview":return fetch("/ms/drive/items/".concat(e,"/preview"),{method:"POST",headers:c}).then((function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})}));default:return fetch("/ms".concat(e,"?$select=givenName"),{headers:c}).then((function(e){return e.ok?e.json():Promise.reject({status:e.status,statusText:e.statusText})}))}case"arrayBuffer":return fetch("/ms".concat(e),{headers:c}).then((function(e){return e.ok?e.arrayBuffer():Promise.resolve({status:e.status,statusText:e.statusText})}));default:return Promise.resolve({str:"\u683c\u5f0f\u4e0d\u5339\u914d"})}}return Promise.resolve({str:"\u7b49\u5f85 access_token"})},b=n(30),_=n.n(b),O=c.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),r=Object(i.a)(n,2),o=r[0],l=r[1],s=Object(a.useRef)(),u=Object(a.useRef)();return Object(a.useImperativeHandle)(t,(function(){return{isOk:function(){l(!1)},isNotOk:function(){l(!0)}}})),Object(a.useEffect)((function(){o&&(s.current.attachEvent?s.current.attachEvent("onload",(function(){u.current.isOk()})):s.current.onload=function(){u.current.isOk()})})),c.a.createElement("div",{className:_.a.wall,style:{display:o?"block":"none"}},c.a.createElement(g,{ref:u,cRef:u}),c.a.createElement("div",{className:_.a.ifrBox},c.a.createElement("i",{className:"iconfont icon-guanbi",onClick:function(){l(!1)}}),c.a.createElement("iframe",{title:"preview",src:o?e.src:null,className:_.a.iframe,ref:s,seamless:!0},"\u60a8\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 iframe")))})),j=Object(a.createContext)(null),k=n(31),x=n.n(k);var N=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1],u=Object(s.g)().pathname,m=Object(a.useContext)(j),f=m.change,p=m.token,d=Object(a.useRef)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",{className:x.a.trTh},c.a.createElement("th",null,"\u540d\u79f0"),c.a.createElement("th",null,"\u5927\u5c0f"),c.a.createElement("th",null,"\u6700\u540e\u4fee\u6539\u65f6\u95f4"))),c.a.createElement("tbody",null,e.value.map((function(t,n){return c.a.createElement("tr",{key:n},c.a.createElement("td",null,t.folder?c.a.createElement(l.b,{to:"".concat(u,"/").concat(t.name),onClick:function(){e.loading.current.isNotOk()}},c.a.createElement("p",{className:x.a.tableA},c.a.createElement("i",{className:E(t),style:{marginRight:"10px"}}),t.name)):c.a.createElement("p",{className:x.a.tableA,onClick:function(){var n;n=t.id,e.loading.current.isNotOk(),v(n,"json",p,"preview").then((function(e){f(o,e.getUrl)})).then((function(){e.loading.current.isOk(),d.current.isNotOk()})).catch((function(t){console.log(t),e.loading.current.isOk()}))}},c.a.createElement("i",{className:E(t),style:{marginRight:"10px"}}),t.name)),c.a.createElement("td",null,function(e){if(isNaN(e))return"";var t=Math.floor(Math.log(e)/Math.log(2));t<1&&(t=0);var n=Math.floor(t/10);return(e/=Math.pow(2,10*n)).toString().length>e.toFixed(2).toString().length&&(e=e.toFixed(2)),e+" "+["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}(t.size)),c.a.createElement("td",null,t.lastModifiedDateTime.slice(0,10)),t.folder?null:c.a.createElement("td",null,c.a.createElement("i",{className:"iconfont icon-xiazai",onClick:function(){var e;e=t["@microsoft.graph.downloadUrl"],window.location.href=e}})))})))),c.a.createElement(O,{src:r,ref:d,cRef:d}))},w=n(62),A=n.n(w);var y=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(s.g)().pathname,l=Object(s.f)(),u=Object(a.useRef)(),m=Object(a.useContext)(j),f=m.change,p=m.token;function d(e){return function(){var t="/"+o.split("/").slice(1,o.split("/").length).slice(0,e).join("/");l.push(t)}}return Object(a.useEffect)((function(){p&&(u.current.isNotOk(),v("".concat(o.substring(9)?"".concat(o.substring(9),":"):":","/children"),"json",p,"onedrive").then((function(e){f(r,e.value)})).then((function(){u.current.isOk()})).catch((function(e){console.log(e)})))}),[f,o,p]),c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:A.a.nav},o.split("/").map((function(e,t){return t?c.a.createElement("span",{key:t,onClick:d(t)},"onedrive"===e?"/":e):null}))),c.a.createElement(N,{value:n,loading:u}),c.a.createElement(g,{ref:u,cRef:u}))};var P=function(){var e=Object(s.h)().path;return c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:e},c.a.createElement(y,null)),c.a.createElement(s.a,{path:"".concat(e,"/:folder")},c.a.createElement(y,null)))},T={client_id:"2c16b16f-0bb3-41ed-a423-3ae5dfae9b63",client_secret:"Hlg~Z1~4ymZg-8oAm5ohcTM~_AJwctJnRU",loginURL:"https://login.microsoftonline.com/common/oauth2/v2.0/authorize",redirect_uri:"https://ikurum.github.io",scope:"offline_access user.read mail.read files.read"},R=n(13),B=n.n(R);var S=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)({}),d=Object(i.a)(o,2),h=d[0],E=d[1],b=Object(a.useState)(""),_=Object(i.a)(b,2),O=_[0],k=_[1],x=Object(a.useState)(!0),N=Object(i.a)(x,2),w=N[0],A=N[1],y="".concat(T.loginURL,"?client_id=").concat(T.client_id,"&response_type=code&redirect_uri=").concat(T.redirect_uri,"&response_mode=query&scope=").concat(T.scope,"&state=login"),R=Object(a.useCallback)((function(e,t){e(t)}),[]);return Object(a.useEffect)((function(){var e=function(e){for(var t={},n=e.substring(1,e.length).split("&"),a=0;a<n.length;a++){var c=n[a].split("=");t[c[0]]=c[1]}return t}(window.location.search);"login"===e.state&&fetch("/api/login?code=".concat(e.code,"&state=").concat(e.state)).then((function(e){return e.json()})).then((function(e){console.log(e)})),fetch("/api/token",{method:"POST",body:JSON.stringify({state:"getToken"})}).then((function(e){return e.json()})).then((function(e){200!==e.code?(console.log(e),R(A,!1)):R(E,e.access_token)}))}),[R]),Object(a.useEffect)((function(){v("/photo/$value","arrayBuffer",h).then((function(e){R(k,function(e){for(var t="",n=new Uint8Array(e),a=n.byteLength,c=0;c<a;c++)t+=String.fromCharCode(n[c]);return window.btoa(t)}(e))})),v("/","json",h).then((function(e){R(r,e)}))}),[h,R]),c.a.createElement(j.Provider,{value:{change:R,token:h}},c.a.createElement("div",{className:B.a.App},w?n.givenName?c.a.createElement(l.a,null,c.a.createElement("header",null,c.a.createElement(l.b,{to:"/"},c.a.createElement("img",{src:"data:image/png;base64,".concat(O),className:B.a.userPhoto,alt:"user"})),c.a.createElement(l.b,{to:"/profile"},c.a.createElement("p",{className:B.a.userName},n.givenName)),c.a.createElement("ul",null,c.a.createElement(l.b,{to:"/onedrive"},c.a.createElement("li",{className:B.a.nav},c.a.createElement("i",{className:"iconfont icon-jifangguanli"},"OneDrive"))),c.a.createElement(l.b,{to:"/outlook"},c.a.createElement("li",{className:B.a.nav},c.a.createElement("i",{className:"iconfont icon-185078emailmailstreamline"},"OutLook"))),c.a.createElement(l.b,{to:"/article"},c.a.createElement("li",{className:B.a.nav},c.a.createElement("i",{className:"iconfont icon-article"},"Article"))))),c.a.createElement("div",{className:B.a.page},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:u}),c.a.createElement(s.a,{path:"/profile",component:m}),c.a.createElement(s.a,{path:"/onedrive",component:P}),c.a.createElement(s.a,{path:"/outlook",component:f}),c.a.createElement(s.a,{path:"/article",component:p})))):c.a.createElement(g,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u8bf7\u70b9\u51fb\u4e0b\u65b9\u94fe\u63a5\u767b\u5f55 ..."),c.a.createElement("a",{href:y},y))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root"))},30:function(e,t,n){e.exports={wall:"Iframe_wall__3hzjJ",ifrBox:"Iframe_ifrBox__MbDDo",iframe:"Iframe_iframe__3Xij1"}},31:function(e,t,n){e.exports={trTh:"Folder_trTh__3ZRPu",tableA:"Folder_tableA__3CAtA"}},43:function(e,t,n){e.exports={loading:"Loading_loading__21VZl",maskedAnimation:"Loading_maskedAnimation__2VeTB",wall:"Loading_wall__3fpwO",FilterAnimation:"Loading_FilterAnimation__1P2rA"}},62:function(e,t,n){e.exports={nav:"OneDrive_nav__d1qUw"}},63:function(e,t,n){e.exports=n(144)},68:function(e,t,n){},69:function(e,t,n){var a=n(70).createProxyMiddleware;e.exports=function(e){e.use("/api",a({target:"http://emiliatan.online:5173",pathRewrite:{"^/api":"/"},changeOrigin:!0})),e.use("/ms",a({target:"https://graph.microsoft.com/v1.0/me",pathRewrite:{"^/ms":"/"},changeOrigin:!0}))}},87:function(e,t){},89:function(e,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.25d77ea2.chunk.js.map