import{a as D,b as O}from"./chunk-Z6ZH32Y4.js";import"./chunk-LQP5UQZA.js";import"./chunk-7NIS52KX.js";import"./chunk-E4MUQXQP.js";import"./chunk-XHKEWUII.js";import"./chunk-7HIXMG7Y.js";import"./chunk-N3AA6LB4.js";import"./chunk-JHPBEGIQ.js";import"./chunk-DVJMDPLT.js";import"./chunk-JHHQSJDL.js";import"./chunk-VHDYAPON.js";import{k as $,u as A}from"./chunk-GOW2LTFQ.js";import{$a as u,Ab as T,Bb as M,Da as V,Ha as o,Hb as E,Jb as y,Q as k,Ua as I,Za as b,cb as x,da as R,db as v,fb as f,gb as w,h as q,hb as s,ib as l,jb as h,ma as _,na as d,nb as C,o as F,qa as S,qb as c,rb as g,zb as p}from"./chunk-EN3TI6TH.js";import"./chunk-CWTPBX7D.js";var B=n=>({"main-active":n}),H=n=>({"sub-active":n});function j(n,r){if(n&1){let t=C();s(0,"button",6),c("click",function(){let a=_(t).$implicit,i=g(3);return d(i.mainCategory(a))}),h(1,"img",11),s(2,"span",8),p(3),l()()}if(n&2){let t=r.$implicit,e=g(3);u("ngClass",y(3,B,e.query.mainCategory===t.main_category)),o(),u("src",t.icon_url,V),o(2),T(t.main_category)}}function z(n,r){if(n&1){let t=C();s(0,"button",14),c("click",function(){let a=_(t).$implicit,i=g(4);return d(i.subCategory(a))}),p(1),l()}if(n&2){let t=r.$implicit,e=g(4);u("ngClass",y(2,H,e.query.subCategory===t)),o(),T(t)}}function K(n,r){if(n&1){let t=C();s(0,"button",12),c("click",function(){_(t);let a=g(3);return d(a.subCategory(null))}),p(1),l(),f(2,z,2,4,"button",13,v)}if(n&2){let t=g(3);u("ngClass",y(2,H,!t.query.subCategory)),o(),M("\u6240\u6709",t.currentTag.main_category,""),o(),w(t.currentTag.sub_category)}}function G(n,r){if(n&1){let t=C();s(0,"div",5)(1,"button",6),c("click",function(){_(t);let a=g(2);return d(a.clearMainCategory())}),h(2,"img",7),s(3,"span",8),p(4,"\u63A2\u7D22\u5168\u90E8"),l()(),f(5,j,4,5,"button",9,v),l(),s(7,"div",10),b(8,K,4,4),l()}if(n&2){let t=g(2);o(),u("ngClass",y(2,B,!t.query.mainCategory)),o(4),w(t.tags),o(3),x(8,t.currentTag?8:-1)}}function L(n,r){if(n&1&&(s(0,"div",4),p(1," \u63A2\u7D22\u8AB2\u7A0B "),l(),b(2,G,9,4)),n&2){let t=g();o(2),x(2,t.tags?2:-1)}}var Y=(()=>{let r=class r extends O{constructor(){super(...arguments),this.tags$=new q,this.queryKey=["cityId","mainCategory","subCategory","page","size","sort"]}ngOnInit(){this.route.queryParams.subscribe(e=>{this.query$.next(this.getQuery(e)),this.query.mainCategory&&this.tags$.subscribe(a=>{this.currentTag=this.tags.find(i=>i.main_category===this.query.mainCategory)})}),this.subscribeFetchData(),this.commonService.apiCommonTagGet().pipe(F(e=>e.data),k(e=>this.tags=e)).subscribe(this.tags$)}mainCategory(e){this.currentTag=e,this.router.navigate([],{relativeTo:this.route,queryParams:{mainCategory:e.main_category,subCategory:null,page:1},queryParamsHandling:"merge"})}subCategory(e){this.router.navigate([],{relativeTo:this.route,queryParams:{subCategory:e,page:1},queryParamsHandling:"merge"})}cityId(e){e=e==="all"?null:e,this.router.navigate([],{relativeTo:this.route,queryParams:{cityId:e,page:1},queryParamsHandling:"merge"})}clearMainCategory(){delete this.currentTag,this.router.navigate([],{relativeTo:this.route,queryParams:{mainCategory:null,subCategory:null,page:1},queryParamsHandling:"merge"})}};r.\u0275fac=(()=>{let e;return function(i){return(e||(e=S(r)))(i||r)}})(),r.\u0275cmp=R({type:r,selectors:[["app-result-tag-page"]],standalone:!0,features:[I,E],decls:5,vars:4,consts:[[1,"relative","bg-tmf-gray-7"],[1,"xl:container","mx-auto","px-4","xl:px-0","xl:w-[1280px]","pb-20","pt-10","bg-[url('./assets/images/itemArea_bg.png')]","bg-no-repeat","bg-[right_25px]"],[1,"h-[2px]","bg-gradient-to-r","from-[#F7F7F7]","via-[#8D0099]","to-[#F7F7F7]"],[3,"pageChange","sortChange","cityIdChange","data","query","canCity"],[1,"text-3xl","w-full","bg-left","bg-no-repeat","pt-[1.5rem]","text-left","font-bold","bg-[url('./assets/images/home-page/orange-80-decorate.svg')]"],[1,"py-6","flex","gap-x-6","w-full","overflow-auto"],[1,"w-[120px]","h-[120px]","flex-shrink-0","bg-white","rounded-2xl","flex","flex-col","justify-between","items-center","py-5","shadow-[0_10px_15px_-3px_#0000001A]","hover:bg-tmf-orange-1","group",3,"click","ngClass"],["src","assets/images/tag-icon/action_key.svg","alt","",1,"w-10","h-10","group-hover:brightness-0","group-hover:invert"],[1,"font-bold","text-xl","group-hover:text-white"],[1,"w-[120px]","h-[120px]","flex-shrink-0","bg-white","rounded-2xl","flex","flex-col","justify-between","items-center","py-5","shadow-[0_10px_15px_-3px_#0000001A]","hover:bg-tmf-orange-1","group",3,"ngClass"],[1,"h-[42px]"],["alt","",1,"w-10","h-10","group-hover:brightness-0","group-hover:invert",3,"src"],["type","button",1,"text-base","px-3","py-2","rounded-lg","font-normal","bg-white","border-tmf-gray-4","border","hover:text-white","hover:bg-tmf-orange-1","hover:border-tmf-orange-1",3,"click","ngClass"],["type","button",1,"text-base","px-3","py-2","rounded-lg","font-normal","bg-white","border-tmf-gray-4","border","ml-3","hover:text-white","hover:bg-tmf-orange-1","hover:border-tmf-orange-1",3,"ngClass"],["type","button",1,"text-base","px-3","py-2","rounded-lg","font-normal","bg-white","border-tmf-gray-4","border","ml-3","hover:text-white","hover:bg-tmf-orange-1","hover:border-tmf-orange-1",3,"click","ngClass"]],template:function(a,i){a&1&&(s(0,"div",0)(1,"div",1),b(2,L,3,1),l()(),h(3,"hr",2),s(4,"result-course-list",3),c("pageChange",function(m){return i.page(m)})("sortChange",function(m){return i.sort(m)})("cityIdChange",function(m){return i.cityId(m)}),l()),a&2&&(o(2),x(2,2),o(2),u("data",i.data)("query",i.query)("canCity",!0))},dependencies:[A,$,D],styles:[".main-active[_ngcontent-%COMP%]{cursor:default;--tw-bg-opacity: 1;background-color:rgb(243 105 35 / var(--tw-bg-opacity))}.main-active[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{--tw-brightness: brightness(0);--tw-invert: invert(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.main-active[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{cursor:default;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.sub-active[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(243 105 35 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(243 105 35 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}"]});let n=r;return n})();export{Y as default};
