import{a as k}from"./chunk-UDETA2XY.js";import"./chunk-CTPH3CYC.js";import"./chunk-25ATFR5N.js";import{d as B}from"./chunk-A36UBSVA.js";import"./chunk-GFMMYVLQ.js";import{a as L}from"./chunk-FDNG4XCH.js";import"./chunk-FSSOUDTV.js";import{f as T}from"./chunk-2D7U6VKW.js";import"./chunk-43B26ZPG.js";import"./chunk-LGYEZ2WK.js";import"./chunk-OVB2NPSI.js";import"./chunk-N3OWITBZ.js";import"./chunk-HJ4SDTSQ.js";import{v as w}from"./chunk-CMTOSVCB.js";import{$ as c,Fb as v,Ma as d,Ob as b,cb as g,ea as f,eb as h,ib as C,kb as x,lb as F,mb as y,nb as o,oa as l,ob as a,pa as u,pb as S,tb as p,wb as _,xb as s}from"./chunk-M2XE62KH.js";import"./chunk-CWTPBX7D.js";function D(t,i){if(t&1){let r=p();o(0,"tmf-card",3),_("hoverButtonClick",function(e){l(r);let m=s(2);return u(m.handleHoverButtonClicked(e))}),a()}if(t&2){let r=i.$implicit;h("data",r)}}function V(t,i){if(t&1&&(o(0,"div",1),F(1,D,1,1,"tmf-card",2,x),a()),t&2){let r=s();d(),y(r.favoriteList)}}function q(t,i){if(t&1){let r=p();o(0,"div",4)(1,"div",5),S(2,"img",6),a(),o(3,"button",7),_("click",function(){l(r);let e=s();return u(e.navigateToHome())}),v(4," \u524D\u5F80\u6536\u85CF\u8AB2\u7A0B "),a()()}}var G=(()=>{let i=class i{constructor(){this.FavoritesService=c(B),this.router=c(T),this.dialogService=c(k),this.favoriteList=[]}ngOnInit(){this.getFavoriteList()}getFavoriteList(){this.FavoritesService.apiFavoritesGet().subscribe(n=>{this.favoriteList=n.data?.favorites?.map(e=>({course_id:e.course_id||"",main_image:e.main_image||"",title:e.name||"",content:e.content||"",avatar:e.teacher_avatar||"",name:e.teacher_name||"",price:e.price_quantity[0].price||0,quantity:e.price_quantity[0].quantity||0,main_category:e.main_category||"",sub_category:e.sub_category||"",rate:e.rate||0,ratingCount:e.review_count||0}))||[]})}handleHoverButtonClicked(n){switch(n.eventType){case"view":this.router.navigate(["/course-detail",n.data.course_id]);break;case"remove":this.dialogService.openConfirmDialog({title:"\u522A\u9664\u8AB2\u7A0B",content:"\u662F\u5426\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u8AB2\u7A0B\uFF1F",confirmBtnText:"\u78BA\u5B9A",btnType:"danger"}).subscribe(e=>{e&&this.FavoritesService.apiFavoritesDelete({favoriteRequestModel:{course_id:n.data.course_id}}).subscribe(()=>{this.getFavoriteList()})});break}}navigateToHome(){this.router.navigate(["/home"])}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f({type:i,selectors:[["app-student-favorites-page"]],standalone:!0,features:[b],decls:4,vars:1,consts:[[1,"text-[30px]","font-bold","leading-9","mb-10"],[1,"flex","flex-wrap","gap-5"],[3,"data"],[3,"hoverButtonClick","data"],[1,"flex","h-full","flex-col","items-center","justify-center","gap-5"],[1,"h-[160px]","md:h-[240px]"],["src","assets/images/favorite-cart.png","alt","favorite-cart",1,"h-full"],[1,"flex","h-[48px]","w-[260px]","md:w-[300px]","items-center","justify-center","rounded-lg","bg-tmf-orange-1","px-4","text-white",3,"click"]],template:function(e,m){e&1&&(o(0,"h1",0),v(1,"\u6536\u85CF\u8AB2\u7A0B"),a(),g(2,V,3,0,"div",1)(3,q,5,0)),e&2&&(d(2),C(2,m.favoriteList.length!==0?2:3))},dependencies:[w,L]});let t=i;return t})();export{G as default};