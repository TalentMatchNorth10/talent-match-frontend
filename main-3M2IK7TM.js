import{a as k}from"./chunk-XIR4PVUX.js";import{a as I}from"./chunk-OMK73NXA.js";import{a as m,b as u}from"./chunk-HZ4ZDLGZ.js";import{a as P,c as l,e as w,f as p,i as A}from"./chunk-IAFX7S52.js";import{a as y,b}from"./chunk-C4LVW4G6.js";import{e as h,f as T,g as R}from"./chunk-A7YCUJUK.js";import"./chunk-7LXBRU32.js";import{Hb as E,M as d,P as S,T as a,Y as v,Z as n,aa as g,k as s,mb as C,w as f,y as c}from"./chunk-YBTHCYRO.js";import"./chunk-2XJVAMHT.js";var j=[{path:"login",loadComponent:()=>import("./chunk-DLF3MLNI.js").then(o=>o.LoginComponent)},{path:"sign-up",loadComponent:()=>import("./chunk-6LFEFYYO.js").then(o=>o.SignUpComponent)},{path:"send-email",loadComponent:()=>import("./chunk-KLLNUPJV.js").then(o=>o.SendEmailComponent)},{path:"reset-password",loadComponent:()=>import("./chunk-PSKQTE4G.js").then(o=>o.ResetPasswordComponent)},{path:"layout2",loadComponent:()=>import("./chunk-XFHSL64X.js"),loadChildren:()=>import("./chunk-H2G33JNU.js")},{path:"",loadComponent:()=>import("./chunk-GOIWC3C5.js"),loadChildren:()=>import("./chunk-A3JBFPYE.js")},{path:"not-found",loadComponent:()=>import("./chunk-SII3NFHR.js")},{path:"**",redirectTo:"not-found"}];var M=(()=>{let e=class e{constructor(t){this.storageService=t}intercept(t,r){let i=this.storageService.getSessionItem("access_token");return i&&(t=t.clone({setHeaders:{Authorization:`Bearer ${i}`}})),r.handle(t)}};e.\u0275fac=function(r){return new(r||e)(v(m))},e.\u0275prov=a({token:e,factory:e.\u0275fac});let o=e;return o})();var D=[{pattern:"/api/auth/refresh",methods:["POST"]},{pattern:"/api/shop/cart",methods:["GET","DELETE"]}];var H=(()=>{let e=class e{constructor(){this.authService=n(b),this.storageService=n(m),this.authStatusService=n(u),this.router=n(p)}intercept(t,r){return this.isProtectedRoute(t.url,t.method)?r.handle(t).pipe(c(i=>i.status===401?this.handle401Error(t,r):s(()=>i))):r.handle(t)}isProtectedRoute(t,r){return D.some(i=>new RegExp(i.pattern).test(t)&&i.methods.includes(r))}handle401Error(t,r){let i=this.storageService.getSessionItem("refreshToken");return i?this.authService.apiAuthRefreshPost({refreshRequestModel:{refresh_token:i}}).pipe(S(F=>{this.authStatusService.setLoginStatus(F.data)}),d(()=>r.handle(t.clone())),c(()=>(this.logout(),s(()=>new Error("Session expired, please log in again"))))):(this.logout(),s(()=>new Error("No refresh token available, logging out")))}logout(){this.authStatusService.logout(),this.router.navigate(["/login"])}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac});let o=e;return o})();var L={providers:[A(j),T(R()),{provide:h,useClass:M,multi:!0},{provide:h,useClass:H,multi:!0},{provide:y,useValue:k.basePath}]};var O=(()=>{let e=class e{constructor(){this.authStatusService=n(u),this.menuService=n(I),this.router=n(p)}ngOnInit(){this.authStatusService.checkLoginStatus(),this.router.events.pipe(f(t=>t instanceof l)).subscribe(t=>{if(t instanceof l){let r=t.url;r.startsWith("/layout2/student")?this.menuService.updateMenuList("student"):r.startsWith("/layout2/teacher")&&this.menuService.updateMenuList("teacher")}})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["app-root"]],standalone:!0,features:[E],decls:1,vars:0,template:function(r,i){r&1&&C(0,"router-outlet")},dependencies:[w]});let o=e;return o})();P(O,L).catch(o=>console.error(o));
