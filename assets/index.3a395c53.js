var ue=Object.defineProperty;var U=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))ce.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))pe.call(t,o)&&H(e,o,t[o]);return e};import{d as A,u as de,r as h,o as K,a as Y,b as v,c as G,w as c,e as u,f as i,N as me,g as fe,h as ge,z as he,i as ve,j as _e,k as Z,l as ke,m as ye,n as we,p as xe,q as Ee,s as k,t as Ne,v as be,x as Ie,y as x,A as C,B as Le,C as $e,D as $,E as Ae,F as y,G as Ce,H as Pe,I as P,L as Se,J as q,K as Fe,M as Oe,O as De,P as Te,Q as Be,R as Re,S as je,T as Ve,U as X,V as Me,W as ze,X as Je,Y as Ue,Z as He,_ as We,$ as Ke,a0 as Ye,a1 as Ge,a2 as Ze,a3 as qe}from"./vendor.543e95fd.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};Xe();const Qe=A({setup(e){return window.$message=de(),(t,o)=>null}}),et=["https://diii.tk","https://api-pikpak.tjsky.cf","https://api-pikpak.tjsky-1.cf","https://cc123.cf","https://cf-api.xswd.cf","https://wkr.btstream.net","https://dns.firmant.me","https://pikpak.yang-s.online","https://pikpak.520936.xyz","https://pikpak-api.go-back.cf"],tt=A({setup(e){const t=h({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(et))}),(o,a)=>{const s=Y("router-view");return v(),G(i(_e),{locale:i(he),"date-locale":i(ve),"theme-overrides":t.value},{default:c(()=>[u(i(ge),null,{default:c(()=>[u(i(me),null,{default:c(()=>[u(i(fe),null,{default:c(()=>[u(Qe),u(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),ot="modulepreload",Q={},st="/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${st}${a}`,a in Q)return;Q[a]=!0;const s=a.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":ot,s||(r.as="script",r.crossOrigin=""),r.href=a,document.head.appendChild(r),s)return new Promise((I,f)=>{r.addEventListener("load",I),r.addEventListener("error",f)})})).then(()=>t())};var at="/assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const a=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(a.length>0){const s=Math.floor(Math.random()*a.length);e.url=a[s]+"/"+e.url}}return e});let E=!1;m.interceptors.response.use(e=>e,e=>{var a;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:console.log(1);const s=window.localStorage.getItem("pikpakLoginData"),n=s?JSON.parse(s):{};return n.username&&n.password&&!E?(console.log("wait",o.url),E=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},n)).then(r=>(r.data&&r.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(r.data)),E=!1,m(o))).catch(()=>(N.push("/login"),!1))):n.username&&n.password&&E?new Promise((r,I)=>{const f=setInterval(()=>{E||(clearInterval(f),r(m(o)))},100)}):(N.push("/login?redirect="+N.currentRoute.value.fullPath),Promise.reject(e));default:window.$message.error(((a=t==null?void 0:t.data)==null?void 0:a.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const it=Z.create({});it.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const ee=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let a=Math.floor(o/10);return e=e/Math.pow(2,10*a),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[a]};const nt=y("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[y("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),y("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},lt=x("\u4F1A\u5458\u7801"),ut={class:"bottom-user-info"},ct={key:0,src:at,class:"user-info-avatar"},pt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},dt={class:"user-info-name"},mt={key:0},ft={class:"action"},gt=x(" \u9000\u51FA\u767B\u5F55 "),ht=x("\u6DFB\u52A0"),vt=A({setup(e){const t=h(!1),o=l=>()=>X(P,null,{default:()=>X(l)}),a=ke(),s=ye(),n=h([{label:"\u6587\u4EF6",key:"list",icon:o(We)},{label:"\u89C6\u9891",key:"video",icon:o(Me)},{label:"\u56FE\u7247",key:"image",icon:o(ze)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Je)},{label:"\u9080\u8BF7",key:"invited",icon:o(Ue)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(He)}]),r=h(),I=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),r.value=l.data}).catch(l=>{console.log(l)})},f=h(),S=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{f.value=l.data}).catch(l=>{console.log(l)})},_=h(),te=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var p;_.value=(p=l.data)==null?void 0:p.data})},oe=(l,p)=>{console.log(p),a.push("/"+p.key)};K(()=>{I(),S(),te()});const L=h(),w=h(!1),se=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:L.value,data:{}}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),S()}).catch(l=>{console.log(l)}).finally(()=>{w.value=!1})},F=h(!1),ae=l=>{F.value=l<800,t.value||(t.value=l<800)};we(s,()=>{F.value&&(t.value=!0)});const ie=xe(),ne=()=>{ie.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),a.push("/login")}).catch(l=>{console.log(l)})}})};return(l,p)=>{const re=Y("router-view"),le=Ee("resize");return v(),k(Ve,null,[Ne(u(i(q),{"has-sider":"",onResize:ae},{default:c(()=>[u(i(be),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=g=>t.value=!0),onExpand:p[2]||(p[2]=g=>t.value=!1),bordered:""},{default:c(()=>{var g,O,D,T,B,R,j,V,M,z,J;return[nt,u(i(Ie),{options:n.value,value:String(i(s).name),"onUpdate:value":oe},null,8,["options","value"]),t.value?$("",!0):(v(),k("div",rt,[x(C(i(ee)((g=f.value)==null?void 0:g.quota.usage))+" / "+C(i(ee)((O=f.value)==null?void 0:O.quota.limit))+" ",1),u(i(Le),{type:"primary",onClick:p[0]||(p[0]=yt=>w.value=!0)},{default:c(()=>[lt]),_:1}),((D=f.value)==null?void 0:D.quota)?(v(),G(i($e),{key:0,type:"line",percentage:Number((((T=f.value)==null?void 0:T.quota.usage)/((B=f.value)==null?void 0:B.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=_.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):$("",!0)])),t.value?$("",!0):(v(),k("div",{key:1,class:Ae(["sider-bottom",{vip:((j=_.value)==null?void 0:j.status)==="ok"}])},[y("div",ut,[((V=_.value)==null?void 0:V.status)==="ok"?(v(),k("img",ct)):(v(),k("img",pt)),y("div",dt,[x(C((M=r.value)==null?void 0:M.name)+" ",1),((z=_.value)==null?void 0:z.status)==="ok"&&((J=_.value)==null?void 0:J.expire)?(v(),k("div",mt,[u(i(Ce),{time:new Date(_.value.expire),type:"datetime"},null,8,["time"])])):$("",!0)]),y("div",ft,[u(i(Pe),null,{trigger:c(()=>[u(i(P),{onClick:ne},{default:c(()=>[u(i(Se))]),_:1})]),default:c(()=>[gt]),_:1})])])],2))]}),_:1},8,["collapsed"]),u(i(q),null,{default:c(()=>[u(i(Fe),{style:{height:"100vh"}},{default:c(()=>[u(i(Oe),{style:{"max-height":"100vh"}},{default:c(()=>[u(re)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),u(i(je),{show:w.value,"onUpdate:show":p[5]||(p[5]=g=>w.value=g)},{default:c(()=>[u(i(De),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[u(i(P),{onClick:p[3]||(p[3]=g=>w.value=!1)},{default:c(()=>[u(i(Te))]),_:1})]),action:c(()=>[u(i(Be),{block:!0,type:"primary",disabled:!L.value,onClick:se},{default:c(()=>[ht]),_:1},8,["disabled"])]),default:c(()=>[u(i(Re),{placeholder:"\u4F1A\u5458\u7801",value:L.value,"onUpdate:value":p[4]||(p[4]=g=>L.value=g)},null,8,["value"])]),_:1})]),_:1},8,["show"])],64)}}}),_t=[{path:"/",name:"home",component:vt,redirect:"/list",beforeEnter:(e,t,o)=>{const a=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!a||!a.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.dfbcde7c.js"),["assets/list.dfbcde7c.js","assets/list.764e0448.css","assets/vendor.543e95fd.js","assets/clipboard.489eb491.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.dfbcde7c.js"),["assets/list.dfbcde7c.js","assets/list.764e0448.css","assets/vendor.543e95fd.js","assets/clipboard.489eb491.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.dfbcde7c.js"),["assets/list.dfbcde7c.js","assets/list.764e0448.css","assets/vendor.543e95fd.js","assets/clipboard.489eb491.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.041af0c7.js"),["assets/trash.041af0c7.js","assets/trash.99a3677d.css","assets/vendor.543e95fd.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.1245ab49.js"),["assets/setting.1245ab49.js","assets/setting.f947579c.css","assets/vendor.543e95fd.js"])},{path:"invited",name:"invited",component:()=>d(()=>import("./invited.269ef97f.js"),["assets/invited.269ef97f.js","assets/invited.74b24e1e.css","assets/clipboard.489eb491.js","assets/vendor.543e95fd.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.383e7339.js"),["assets/test.383e7339.js","assets/vendor.543e95fd.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.3c5f2bd0.js"),["assets/shareInfo.3c5f2bd0.js","assets/shareInfo.678356c6.css","assets/vendor.543e95fd.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.85ce6008.js"),["assets/login.85ce6008.js","assets/login.a8b45006.css","assets/vendor.543e95fd.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.0c59e3f2.js"),["assets/sms.0c59e3f2.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.543e95fd.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.b750116a.js"),["assets/register.b750116a.js","assets/register.5588ce76.css","assets/vendor.543e95fd.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.3546b27d.js"),["assets/testtest.3546b27d.js","assets/vendor.543e95fd.js"])}],kt=Ke({history:Ye(),routes:_t});var N=kt;const b=Ge(tt);b.directive("resize",{mounted(e,t,o){e.$$erd=Ze({strategy:"scroll"}),e.$$erd.listenTo({},e,a=>{let s=a.offsetWidth,n=a.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var r;(r=o.props)==null||r.onResize(s,n)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});b.config.globalProperties.$http=m;b.use(N);b.use(qe,{router:N,siteIdList:[1280680983]});b.mount("#app");export{ee as b,m as i,et as p};
