(this.webpackJsonpsakura=this.webpackJsonpsakura||[]).push([[0],{11:function(e,t,n){e.exports={trTh:"Folder_trTh__3ZRPu",tableA:"Folder_tableA__3CAtA"}},12:function(e,t,n){e.exports={datainfo:"OneDrive_datainfo__32r2b",infobox:"OneDrive_infobox__2fgVs",nav:"OneDrive_nav__d1qUw"}},17:function(e,t,n){e.exports={appId:"2c16b16f-0bb3-41ed-a423-3ae5dfae9b63",redirectUri:"https://ikurum.github.io/sakura/"}},22:function(e,t,n){e.exports={app:"App_app__3J6LF"}},23:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),o=n.n(r),l=(n(30),n(7));var i=function(){var e=this,t=new Headers;this.graph="https://graph.microsoft.com/v1.0",this.init=function(n){var a="Bearer "+n;t.append("Authorization",a),e.opt={method:"GET",headers:t},e.token=n},this.url=function(t,n){switch(n){case"json":return e.token?fetch("".concat(e.graph).concat(t),e.opt).then((function(e){return e.ok?e.json():Promise.reject({ST:"\u83b7\u53d6\u5185\u5bb9\u9519\u8bef ...",status:e.status,statusText:e.statusText})})):Promise.resolve({});case"arrayBuffer":return e.token?fetch("".concat(e.graph).concat(t),e.opt).then((function(e){return e.ok?e.arrayBuffer():Promise.resolve({ST:"\u83b7\u53d6\u5185\u5bb9\u9519\u8bef ...",status:e.status,statusText:e.statusText})})):Promise.resolve({});default:Promise.resolve({})}}},s=n(6),u=n(1);var m=function(){return c.a.createElement(c.a.Fragment,null,"Home",c.a.createElement("div",{style:{height:"100%"}},"Home"))};var f=function(){return c.a.createElement(c.a.Fragment,null,"Profile")};var p=function(){return c.a.createElement(c.a.Fragment,null,"OutLook")},h=Object(a.createContext)(null);function g(e){if(isNaN(e))return"";var t=Math.floor(Math.log(e)/Math.log(2));t<1&&(t=0);var n=Math.floor(t/10);return(e/=Math.pow(2,10*n)).toString().length>e.toFixed(2).toString().length&&(e=e.toFixed(2)),e+" "+["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function d(e){if(e.folder)return"iconfont icon-open_filled";if(e.package&&"oneNote"===e.package.type)return"iconfont icon-microsoftonenote";if(!e.file)return"iconfont icon-geshi_weizhi";switch(e.name.split(".")[e.name.split(".").length-1].toLowerCase()){case"pdf":return"iconfont icon-pdf";case"doc":case"docx":return"iconfont icon-Word";case"ppt":case"pptx":return"iconfont icon-office-pptx";case"xls":case"xlsx":return"iconfont icon-office-excel";case"mp4":case"flv":case"mkv":return"iconfont icon-video";case"mp3":return"iconfont icon-MusicAcc";case"jpeg":case"jpg":case"png":return"iconfont icon-image";case"7z":case"zip":case"gz":case"rar":return"iconfont icon-filezip";case"md":return"iconfont icon-file-markdown";case"exe":return"iconfont icon-exe";case"iso":return"iconfont icon-iso";case"txt":return"iconfont icon-txt";case"apk":return"iconfont icon-apk";default:return"iconfont icon-geshi_weizhi"}}var E=n(11),v=n.n(E);var b=function(e){var t=Object(u.g)().pathname;return c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",{className:v.a.trTh},c.a.createElement("th",null,"\u540d\u79f0"),c.a.createElement("th",null,"\u5927\u5c0f"),c.a.createElement("th",null,"\u6700\u540e\u4fee\u6539\u65f6\u95f4"))),c.a.createElement("tbody",null,c.a.createElement(c.a.Fragment,null,e.value.map((function(e,n){return c.a.createElement("tr",{key:n},c.a.createElement("td",null,e.folder?c.a.createElement(s.b,{to:"".concat(t,"/").concat(e.name)},c.a.createElement("p",{className:v.a.tableA},c.a.createElement("i",{className:d(e),style:{marginRight:"10px"}}),e.name)):c.a.createElement("p",{className:v.a.tableA},c.a.createElement("i",{className:d(e),style:{marginRight:"10px"}}),e.name)),c.a.createElement("td",null,g(e.size)),c.a.createElement("td",null,e.lastModifiedDateTime.slice(0,10)),e.folder?null:c.a.createElement("td",null,c.a.createElement("i",{className:"iconfont icon-xiazai"})))})))))},j=n(12),x=n.n(j);var O=function(){var e=Object(a.useContext)(h),t=e.micro,n=e.change,r=Object(a.useState)({}),o=Object(l.a)(r,2),i=o[0],s=o[1],m=Object(a.useState)([]),f=Object(l.a)(m,2),p=f[0],d=f[1],E=Object(u.g)().pathname,v=Object(u.f)();function j(e){return function(){var t="/"+E.split("/").slice(1,E.split("/").length).slice(0,e).join("/");v.push(t)}}return Object(a.useEffect)((function(){t.url&&(t.url("/me/drive/root".concat(E.substring(9)?":".concat(E.substring(9)):""),"json").then((function(e){n(s,e)})).catch((function(e){alert(e)})),t.url("/me/drive/root".concat(E.substring(9)?":".concat(E.substring(9),":"):"","/children"),"json").then((function(e){n(d,e.value)})).catch((function(e){alert(e)})))}),[t,n,E]),c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:x.a.nav},E.split("/").map((function(e,t){return t?c.a.createElement("span",{key:t,onClick:j(t)},"onedrive"===e?"/":e):null}))),i.fileSystemInfo?c.a.createElement("div",{className:x.a.infobox},c.a.createElement("p",{className:x.a.datainfo},c.a.createElement("span",null,"\u521b\u5efa\u65f6\u95f4\uff1a",i.fileSystemInfo.createdDateTime.slice(0,10)),c.a.createElement("span",null,"\u4e0a\u6b21\u4fee\u6539\u65f6\u95f4\uff1a",i.fileSystemInfo.lastModifiedDateTime.slice(0,10)),c.a.createElement("span",null,"\u5df2\u4f7f\u7528\u7a7a\u95f4\uff1a",g(i.size))),c.a.createElement("hr",null)):c.a.createElement(c.a.Fragment,null,"\u52a0\u8f7d\u4e2d ..."),p.length>0?c.a.createElement(b,{value:p}):c.a.createElement(c.a.Fragment,null,"\u52a0\u8f7d\u4e2d ..."))};var _=function(){var e=Object(u.h)().path;return c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:e},c.a.createElement(O,null)),c.a.createElement(u.a,{path:"".concat(e,"/:folder")},c.a.createElement(O,null)))},k=n(16),N=n.n(k),y=n(21),T=n(39),w=n(17),S=n.n(w),P=new T.a({auth:{clientId:S.a.appId,redirectUri:S.a.redirectUri}}),F={scopes:["user.read"]};function B(){return console.log("login ..."),P.getAccount()?C():function(){return z.apply(this,arguments)}()}function A(){P.logout()}function z(){return(z=Object(y.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return sessionStorage.clear(),e.prev=1,console.log("\u521d\u59cb\u5316 ..."),e.next=5,P.loginPopup();case 5:return console.log(P.getAccount()),e.next=8,C();case 8:e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(1),t={},"string"===typeof e.t0?(n=e.t0.split("|"),t=n.length>1?{message:n[1],debug:n[0]}:{message:e.t0}):t={message:e.t0.message,debug:JSON.stringify(e.t0)},e.abrupt("return",Promise.reject({fn:"loginPopup",err:t}));case 15:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function C(){return P.acquireTokenSilent(F).then((function(e){return e.accessToken})).catch((function(e){if("InteractionRequiredAuthError"===e.name)return P.acquireTokenPopup(F).then((function(e){return e.accessToken})).catch((function(e){console.log(e)}))}))}var M=n(9),H=n.n(M);var I=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),g=i[0],d=i[1],E=Object(a.useContext)(h),v=E.micro,b=E.change,j=Object(a.useRef)(null);return Object(a.useEffect)((function(){v.url&&(v.url("/me?$select=givenName","json").then((function(e){b(r,e)})).catch((function(e){alert(e)})),v.url("/me/photo/$value","arrayBuffer").then((function(e){b(d,function(e){for(var t="",n=new Uint8Array(e),a=n.byteLength,c=0;c<a;c++)t+=String.fromCharCode(n[c]);return window.btoa(t)}(e))})).catch((function(e){alert(e)})))}),[v,b]),c.a.createElement(c.a.Fragment,null,n.givenName?c.a.createElement(s.a,null,c.a.createElement("header",null,c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{src:"data:image/png;base64,".concat(g),ref:j,className:H.a.userPhoto,alt:"user"})),c.a.createElement(s.b,{to:"/profile"},c.a.createElement("p",{className:H.a.userName},n.givenName)),c.a.createElement("ul",null,c.a.createElement(s.b,{to:"/onedrive"},c.a.createElement("li",{className:H.a.nav},c.a.createElement("i",{className:"iconfont icon-jifangguanli"},"OneDrive"))),c.a.createElement(s.b,{to:"/outlook"},c.a.createElement("li",{className:H.a.nav},c.a.createElement("i",{className:"iconfont icon-185078emailmailstreamline"},"OutLook")))),c.a.createElement("p",{className:H.a.logout,onClick:A},"LOGOUT")),c.a.createElement("div",{className:H.a.page},c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/",component:m}),c.a.createElement(u.a,{path:"/profile",component:f}),c.a.createElement(u.a,{path:"/onedrive",component:_}),c.a.createElement(u.a,{path:"/outlook",component:p})))):c.a.createElement(c.a.Fragment,null,"\u52a0\u8f7d\u4e2d ..."))},D=n(22),U=n.n(D);var L=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),u=s[0],m=s[1],f=Object(a.useCallback)((function(e,t){e(t)}),[]),p=Object(a.useCallback)((function(){B().then((function(e){f(r,e)})).catch((function(e){console.log(e)}))}),[f]);return Object(a.useEffect)((function(){sessionStorage.getItem("msal.idtoken")?p():B().then((function(){p()})).catch((function(e){console.log(e)}))}),[p]),Object(a.useEffect)((function(){var e=new i;n&&e.init(n),f(m,e)}),[f,n]),c.a.createElement(h.Provider,{value:{micro:u,change:f}},c.a.createElement("div",{className:U.a.app},c.a.createElement(I,null)))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root"))},9:function(e,t,n){e.exports={page:"Head_page__kWlT5",userPhoto:"Head_userPhoto__3cBOH",userName:"Head_userName__UpgrF",nav:"Head_nav__RgzWw",logout:"Head_logout__3coj4"}}},[[23,1,2]]]);
//# sourceMappingURL=main.63f4860b.chunk.js.map