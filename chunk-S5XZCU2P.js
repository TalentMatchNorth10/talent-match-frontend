import{c as h,d as v,e as k}from"./chunk-HPXGWISH.js";import{k as j}from"./chunk-WO4Z2PLK.js";import{Ab as s,Ga as r,Gb as g,Ha as d,Jb as T,U as I,Ya as f,Z as _,_a as D,bb as x,da as p,gb as a,hb as l,pb as m,qb as u,yb as c}from"./chunk-EVVXAZT2.js";var R=(n,t)=>({"bg-tmf-orange-1":n,"bg-[#FF0000]":t});function B(n,t){if(n&1&&(a(0,"span",3),c(1),l()),n&2){let b=u();r(),s(" ",b.data.icon," ")}}var E=(()=>{let t=class t{constructor(i,e){this.dialogRef=i,this.data=e}onConfirm(){this.dialogRef.close(!0)}onCancel(){this.dialogRef.close(!1)}};t.\u0275fac=function(e){return new(e||t)(d(h),d(v))},t.\u0275cmp=p({type:t,selectors:[["tmf-confirm"]],standalone:!0,features:[g],decls:13,vars:8,consts:[[1,"px-10","py-8","flex","justify-center","bg-white","w-[360px]","md:w-[400px]","lg:w-[440px]","xl:w-[480px]","rounded-xl","shadow-lg"],[1,"flex","flex-col","gap-6"],[1,"flex","justify-center","items-center","gap-2"],[1,"text-2xl","leading-6","text-tmf-orange-1","material-icons"],[1,"text-lg","text-center","text-tmf-gray-1","font-bold"],[1,"text-sm","text-center","text-tmf-gray-1"],[1,"inline-flex","justify-center","items-center","gap-4"],[1,"px-4","py-[0.4375rem]","bg-white","box-border","border","border-tmf-gray-4","text-tmf-gray-4","text-sm","leading-6","rounded-lg",3,"click"],[1,"px-4","py-2","text-sm","leading-6","rounded-lg","text-white",3,"click","ngClass"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),f(3,B,2,1,"span",3),a(4,"p",4),c(5),l()(),a(6,"p",5),c(7),l(),a(8,"div",6)(9,"button",7),m("click",function(){return o.onCancel()}),c(10," \u53D6\u6D88 "),l(),a(11,"button",8),m("click",function(){return o.onConfirm()}),c(12),l()()()()),e&2&&(r(3),x(3,o.data.icon?3:-1),r(2),s(" ",o.data.title," "),r(2),s(" ",o.data.content," "),r(4),D("ngClass",T(5,R,o.data.btnType==="primary",o.data.btnType==="danger")),r(),s(" ",o.data.confirmBtnText?o.data.confirmBtnText:"\u78BA\u8A8D"," "))},dependencies:[j],encapsulation:2});let n=t;return n})();function M(n,t){if(n&1&&(a(0,"span",3),c(1),l()),n&2){let b=u();r(),s(" ",b.data.icon," ")}}var F=(()=>{let t=class t{constructor(i,e){this.dialogRef=i,this.data=e}close(){this.dialogRef.close()}};t.\u0275fac=function(e){return new(e||t)(d(h),d(v))},t.\u0275cmp=p({type:t,selectors:[["tmf-alert"]],standalone:!0,features:[g],decls:11,vars:3,consts:[[1,"px-10","py-8","flex","justify-center","bg-white","w-[360px]","md:w-[400px]","lg:w-[440px]","xl:w-[480px]","rounded-xl","shadow-lg"],[1,"flex","flex-col","gap-6"],[1,"flex","justify-center","items-center","gap-2"],[1,"text-2xl","leading-6","text-tmf-orange-1","material-icons"],[1,"text-lg","text-center","text-tmf-gray-1","font-bold"],[1,"text-sm","text-center","text-tmf-gray-1"],[1,"inline-flex","justify-center"],[1,"px-4","py-2","bg-tmf-orange-1","text-white","text-sm","leading-6","rounded-lg",3,"click"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),f(3,M,2,1,"span",3),a(4,"p",4),c(5),l()(),a(6,"p",5),c(7),l(),a(8,"div",6)(9,"button",7),m("click",function(){return o.close()}),c(10," \u95DC\u9589 "),l()()()()),e&2&&(r(3),x(3,o.data.icon?3:-1),r(2),s(" ",o.data.title," "),r(2),s(" ",o.data.content," "))},encapsulation:2});let n=t;return n})();var y=class{constructor(t){this.icon=t?.icon||"error",this.title=t?.title||"\u63D0\u9192",this.content=t?.content||"\u767C\u751F\u932F\u8AA4"}},C=class{constructor(t){this.icon=t?.icon||"",this.title=t?.title||"\u78BA\u8A8D",this.content=t?.content||"\u78BA\u8A8D\u57F7\u884C\u6B64\u64CD\u4F5C",this.showCancel=t?.showCancel||!0,this.confirmBtnText=t?.confirmBtnText||"\u78BA\u8A8D",this.btnType=t?.btnType||"primary"}};var K=(()=>{let t=class t{constructor(i){this.dialog=i}open(i,e){return this.dialog.open(i,{data:e})}openAlertDialog(i){let e=i||new y;return this.dialog.open(F,{data:e})}openConfirmDialog(i){let e=i||new C;return this.dialog.open(E,{data:e}).closed}openVideoDialog(i,e){return this.dialog.open(i,{autoFocus:"none",backdropClass:"video-mask",data:e})}};t.\u0275fac=function(e){return new(e||t)(_(k))},t.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();export{K as a};