import{L as p,P as u,W as o,Za as s,g as r,k as c,o as l,w as h}from"./chunk-3A66ECCW.js";var n=function(e){return e.STUDENT="STUDENT",e.TEACHER="TEACHER",e.DEFAULT="DEFAULT",e}(n||{}),b=(()=>{let t=class t{constructor(){this.menuList=s([]),this.identity=s(n.DEFAULT),this.menuListSig=this.menuList.asReadonly(),this.identitySig=this.identity.asReadonly()}updateMenuList(i){switch(this.identity.set(i),i){case n.STUDENT:this.menuList.set([{icon:"face",path:"/student/info",title:"\u57FA\u672C\u8CC7\u8A0A"},{icon:"favorite",path:"/student/favorites",title:"\u6536\u85CF\u8AB2\u7A0B"},{icon:"calendar_today",path:"/student/calendar",title:"\u884C\u4E8B\u66C6"},{icon:"book",path:"/student/courses",title:"\u5DF2\u8CFC\u8CB7\u8AB2\u7A0B"},{icon:"account_balance_wallet",path:"/student/record",title:"\u4EA4\u6613\u7D00\u9304"},{icon:"favorite_border",path:"/student/preference",title:"\u559C\u597D\u985E\u5225"}]);break;case n.TEACHER:this.menuList.set([{icon:"face",path:"/teacher/info",title:"\u8001\u5E2B\u500B\u4EBA\u8CC7\u8A0A"},{icon:"smart_display",path:"/teacher/videos",title:"\u5F71\u7247\u7BA1\u7406"},{icon:"edit_calendar",path:"/teacher/course-reservation",title:"\u8AB2\u7A0B\u9810\u7D04\u7BA1\u7406"},{icon:"description",path:"/teacher/courses",title:"\u8AB2\u7A0B\u7BA1\u7406"},{icon:"account_balance_wallet",path:"/teacher/record",title:"\u8001\u5E2B\u4EA4\u6613\u7D00\u9304"}]);break}}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var T=(()=>{let t=class t{constructor(){this.loadingSubject=new r(!1),this.apiCallCount$=new r(0),this.loading$=this.apiCallCount$.pipe(p((i,a)=>Math.max(i+a,0),0),u(i=>i>0?c(!0):h(300).pipe(l(()=>!1))))}showLoading(){this.apiCallCount$.next(1)}hideLoading(){this.apiCallCount$.next(-1)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{T as a,n as b,b as c};
