(function(){var e={7162:function(e,n,t){"use strict";var r=t(9242),o=t(3396),a=t(4870),u=t(7376),i={__name:"App",setup(e){return(e,n)=>{const t=(0,o.up)("router-view"),r=(0,o.up)("a-config-provider");return(0,o.wg)(),(0,o.j4)(r,{locale:(0,a.SU)(u.Z)},{default:(0,o.w5)((()=>[(0,o.Wm)(t)])),_:1},8,["locale"])}}};const l=i;var c=l,s=t(2483),f=(t(7658),t(7139)),d=t(8896),p=t(2338);let m,h;function v(){const e=[],n=t(9799);return n.keys().forEach((n=>{if(-1!==n.indexOf("./main.js"))return;const r=t(7259)("./main"+n.split(".")[1]);e.push(r.default)})),h=e[0],m=e[0].path,e}const g=e=>((0,o.dD)("data-v-21cbc928"),e=e(),(0,o.Cn)(),e),y={class:"left-menu"},w=g((()=>(0,o._)("div",{class:"logo"},"VUE-THREEJS",-1)));var b={__name:"leftMenu",props:{menus:{type:Array,default:()=>[]}},setup(e){const n=e,t=(0,s.tv)(),r=(0,a.iH)([m]),u=e=>{t.push({path:e.path})};return(e,t)=>{const i=(0,o.up)("a-menu-item"),l=(0,o.up)("a-sub-menu"),c=(0,o.up)("a-menu");return(0,o.wg)(),(0,o.iD)("div",y,[w,(0,o.Wm)(c,{selectedKeys:r.value,"onUpdate:selectedKeys":t[0]||(t[0]=e=>r.value=e),theme:"dark",mode:"inline"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.menus,(e=>((0,o.wg)(),(0,o.iD)(o.HY,null,[1==e.type?((0,o.wg)(),(0,o.j4)(i,{key:e.path,onClick:n=>u(e)},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(d.Z)),(0,o._)("span",null,(0,f.zw)(e.name),1)])),_:2},1032,["onClick"])):((0,o.wg)(),(0,o.j4)(l,{key:e},{title:(0,o.w5)((()=>[(0,o._)("span",null,[(0,o._)("span",null,(0,f.zw)(e.name),1)])])),default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.children,(e=>((0,o.wg)(),(0,o.j4)(i,{key:e.path,onClick:n=>u(e)},{default:(0,o.w5)((()=>[(0,o.Wm)((0,a.SU)(p.Z)),(0,o.Uk)(" "+(0,f.zw)(e.name),1)])),_:2},1032,["onClick"])))),128))])),_:2},1024))],64)))),256))])),_:1},8,["selectedKeys"])])}}},_=t(89);const k=(0,_.Z)(b,[["__scopeId","data-v-21cbc928"]]);var j=k,C=t(3441),O=t(9643),D=t(65);const E={class:"layout-header"};var Z={__name:"layoutHeader",emits:["collapsed"],setup(e,{emit:n}){const t=(0,D.oR)(),r=(0,a.iH)(!1),u=async()=>{r.value=!r.value,n("collapsed",r.value),await(0,o.Y3)(),setTimeout((()=>t.commit("changeCollapsed",r.value)),200)};return(e,n)=>((0,o.wg)(),(0,o.iD)("div",E,[r.value?((0,o.wg)(),(0,o.j4)((0,a.SU)(C.Z),{key:0,class:"trigger",onClick:u})):((0,o.wg)(),(0,o.j4)((0,a.SU)(O.Z),{key:1,class:"trigger",onClick:u}))]))}};const S=Z;var U=S,P={__name:"main",setup(e){const n=(0,a.iH)(!1),t=(0,a.iH)([{name:"风电演示demo",type:1,path:"/main/windDemo"},{name:"萌宠三兄弟",type:1,path:"/main/threeBrother"}]);return(e,r)=>{const a=(0,o.up)("a-layout-sider"),u=(0,o.up)("a-layout-header"),i=(0,o.up)("router-view"),l=(0,o.up)("a-layout-content"),c=(0,o.up)("a-layout");return(0,o.wg)(),(0,o.j4)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(a,{collapsed:n.value,"onUpdate:collapsed":r[0]||(r[0]=e=>n.value=e),trigger:null,collapsible:""},{default:(0,o.w5)((()=>[(0,o.Wm)(j,{menus:t.value},null,8,["menus"])])),_:1},8,["collapsed"]),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{style:{background:"#fff",padding:"0"}},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{onCollapsed:r[1]||(r[1]=e=>n.value=e)})])),_:1}),(0,o.Wm)(l,{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"280px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i)])),_:1})])),_:1})])),_:1})}}};const T=(0,_.Z)(P,[["__scopeId","data-v-6b5a81a2"]]);var x=T;const B=[{path:"/",redirect:"/main"},{path:"/main",name:"main",component:x}],N=(0,s.p7)({history:(0,s.r5)(),routes:B});N.beforeEach((e=>{if("/login"!==e.path&&"/main"===e.path)return h?.path}));var A=N;const H=(0,D.MT)({state:{name:"root",spinning:!1,collapsed:!1},mutations:{changeSpinning(e,n){e.spinning=n},changeCollapsed(e,n){e.collapsed=n}},getters:{},actions:{},modules:{}});var W=H,L=t(7633),M=t(1453),F=t(5632),K=t(1750),Y=t(2450),z=t(9618),I=t(6440),R=t(8510),q=t(8501),J=t(9492);t(5290);const V=[L.ZP,M.Z,F.ZP,K.Z,Y.Z,z.ZP,I.ZP,I.bU,I.Ju,I.NC,R.ZP,q.Z,J.Z];function G(e){for(const n of V)e.component(n.name,n)}var Q=G;function X(e){Q(e)}const $=(0,r.ri)(c);X($);const ee=v();ee.forEach((e=>{A.addRoute("main",e)})),$.use(W).use(A).mount("#app")},9208:function(e,n,t){"use strict";t.r(n);const r=()=>Promise.all([t.e(737),t.e(412)]).then(t.bind(t,9412));n["default"]={path:"/main/threeBrother",name:"threeBrother",component:r,children:[]}},8097:function(e,n,t){"use strict";t.r(n);const r=()=>Promise.all([t.e(737),t.e(311)]).then(t.bind(t,7311));n["default"]={path:"/main/windDemo",name:"windDemo",component:r,children:[]}},9799:function(e,n,t){var r={"./threeBrother/threeBrother.js":9208,"./windDemo/windDemo.js":8097};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=9799},7259:function(e,n,t){var r={"./main/threeBrother/threeBrother":9208,"./main/threeBrother/threeBrother.js":9208,"./main/windDemo/windDemo":8097,"./main/windDemo/windDemo.js":8097};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=7259}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<u&&(u=a));if(i){e.splice(s--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{311:"60ff4c62",412:"4e6682aa",737:"1407a09c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{311:"1a2f8243",412:"ebca4a8a"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-threejs:";t.l=function(r,o,a,u){if(e[r])e[r].push(o);else{var i,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){i=f;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+a),i.src=r),e[r]=[o];var d=function(n,t){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var u=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=u,l.request=i,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var u=t.miniCssF(r),i=t.p+u;if(n(u,i))return o();e(r,i,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={311:1,412:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var u=t.p+t.u(n),i=new Error,l=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};t.l(u,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,u=r[0],i=r[1],l=r[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var s=l(t)}for(n&&n(r);c<u.length;c++)a=u[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},r=self["webpackChunkvue_threejs"]=self["webpackChunkvue_threejs"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7162)}));r=t.O(r)})();
//# sourceMappingURL=app.5b5039a4.js.map