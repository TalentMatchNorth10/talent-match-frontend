import{b as M}from"./chunk-HZ4ZDLGZ.js";import{f as D}from"./chunk-IAFX7S52.js";import{c as $,f as A}from"./chunk-C4LVW4G6.js";import{h as B,p as C}from"./chunk-7LXBRU32.js";import{Cb as i,Db as y,Eb as d,Hb as w,Ja as F,Jb as I,Oa as l,Z as p,aa as g,ab as f,cb as j,fb as b,hb as h,ib as _,ja as E,jb as v,ka as k,kb as e,lb as t,mb as c,qb as T,tb as x,ub as u}from"./chunk-YBTHCYRO.js";var Z=(()=>{let r=class r{};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=g({type:r,selectors:[["app-footer"]],standalone:!0,features:[w],decls:25,vars:0,consts:[[1,"bg_image","flex","h-[372px]","items-center","justify-center","bg-tmf-gray-1","px-5","lg:h-[248px]"],[1,"w-full","max-w-[1280px]"],[1,"mb-[48px]","flex","flex-col","items-center","lg:mb-3","lg:flex-row","lg:items-end","lg:justify-between"],["src","/assets/images/footer-logo.svg","alt","",1,"mb-[29px]","w-[200px]","lg:mb-0"],[1,"flex","flex-wrap","justify-center","gap-x-8","gap-y-5","text-[14px]","leading-5","text-white"],[1,"cursor-pointer"],[1,"flex","flex-col","items-center","gap-y-4","lg:flex-row","lg:items-end","lg:justify-between"],[1,"order-2","text-center","text-[14px]","leading-5","text-white","lg:order-1"],[1,"order-1","flex","gap-x-4","lg:order-2"],[1,"flex","h-[40px]","w-[40px]","cursor-pointer","items-center","justify-center","rounded-full","border","border-tmf-orange-2"],["src","assets/images/line.png","alt","line"],["src","assets/images/youtube.png","alt","youtube"],["src","assets/images/facebook.png","alt","facebook"]],template:function(s,m){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),c(3,"img",3),e(4,"ul",4)(5,"li",5),i(6,"\u6559\u5E2B\u62DB\u52DF"),t(),e(7,"li",5),i(8,"\u670D\u52D9\u689D\u6B3E"),t(),e(9,"li",5),i(10,"\u95DC\u65BC\u6211\u5011"),t(),e(11,"li",5),i(12,"\u96B1\u79C1\u6B0A\u653F\u7B56"),t(),e(13,"li",5),i(14,"\u4F7F\u7528\u8005\u689D\u6B3E"),t()()(),e(15,"div",6)(16,"p",7),i(17," copyright \xA9 2024 Zhong Feng Lin Fiber Technology Co.,Ltd "),t(),e(18,"ul",8)(19,"li",9),c(20,"img",10),t(),e(21,"li",9),c(22,"img",11),t(),e(23,"li",9),c(24,"img",12),t()()()()())},dependencies:[C],styles:["[_nghost-%COMP%]{display:block}.bg_image[_ngcontent-%COMP%]{background-image:url(/assets/images/footer-bg.png);background-size:auto 210px;background-repeat:no-repeat;background-position:bottom left}@media (max-width: 1024px){.bg_image[_ngcontent-%COMP%]{background-size:auto 100%;background-position:bottom center}}"]});let n=r;return n})();var U=n=>({"mb-2 border-b border-tmf-gray-5 pb-2":n});function V(n,r){n&1&&c(0,"img",28)}function O(n,r){if(n&1&&(e(0,"li",21)(1,"div",27),f(2,V,1,0,"img",28),t(),e(3,"div",29)(4,"div",30)(5,"div",31),i(6),t(),e(7,"div",31),i(8),t()(),e(9,"p",32),i(10),t(),e(11,"div",33)(12,"p",34),i(13),t(),e(14,"p",35),i(15),t()()()()),n&2){let a=r.$implicit;l(2),b(2,a.image?2:-1),l(4),d(" ",a.main_category," "),l(2),d(" ",a.sub_category," "),l(2),d(" ",a.name," "),l(3),d(" ",a.quantity,"\u5802\u8AB2\u7A0B "),l(2),d("NT$\uFF1A",a.price,"")}}function P(n,r){if(n&1){let a=T();e(0,"div",26)(1,"button",36)(2,"span",37),i(3,"handshake"),t(),i(4," \u6211\u8981\u958B\u8AB2 "),t(),e(5,"button",38),x("click",function(){E(a);let s=u();return k(s.redirect("/login"))}),e(6,"span",37),i(7,"handshake"),t(),i(8," \u767B\u5165/\u8A3B\u518A "),t()()}}function z(n,r){if(n&1&&c(0,"img",41),n&2){let a=u(2);j("src",a.user.avator_image,F)}}function G(n,r){if(n&1){let a=T();e(0,"li",46),x("click",function(){let s=E(a).$implicit,m=u(3);return k(m.handleMenuClick(s))}),e(1,"span",47),i(2),t(),e(3,"p"),i(4),t()()}if(n&2){let a=r.$implicit,o=r.$index,s=r.$count,m=u(),S=m.$index,H=m.$count;j("ngClass",I(3,U,o===s-1&&S!==H-1)),l(2),y(a.icon),l(2),y(a.label)}}function N(n,r){if(n&1&&_(0,G,5,5,"li",45,h),n&2){let a=r.$implicit;v(a)}}function q(n,r){if(n&1&&(e(0,"div",39)(1,"div",40),f(2,z,1,1,"img",41),t(),e(3,"p",42),i(4),t(),e(5,"div",43)(6,"ul",44),_(7,N,2,0,null,null,h),t()()()),n&2){let a=u();l(2),b(2,a.user.avator_image?2:-1),l(2),d(" ",a.user.nick_name," "),l(3),v(a.userMenuList)}}var ie=(()=>{let r=class r{constructor(){this.userService=p(A),this.router=p(D),this.authStatusService=p(M),this.shopService=p($),this.user=null,this.selectCity="\u53F0\u5317\u5E02",this.userMenuList=[[{icon:"face",label:"\u5B78\u751F\u500B\u4EBA\u7BA1\u7406"},{icon:"face",label:"\u6559\u5E2B\u8CC7\u8A0A\u7BA1\u7406"},{icon:"smart_display",label:"\u5F71\u7247\u7BA1\u7406"},{icon:"edit_calendar",label:"\u884C\u4E8B\u66C6\u7BA1\u7406"},{icon:"description",label:"\u8AB2\u7A0B\u7BA1\u7406"},{icon:"account_balance_wallet",label:"\u4EA4\u6613\u7D00\u9304"},{icon:"settings",label:"\u5E33\u6236\u7BA1\u7406"}],[{icon:"question_answer",label:"\u8A0A\u606F"},{icon:"notifications",label:"\u516C\u544A"}],[{icon:"logout",label:"\u767B\u51FA"}]],this.cartList=[],this.cartTotal={courseCount:0,total:0}}ngOnInit(){this.authStatusService.loginStatus$().subscribe(o=>{o?(this.getUserInfo(),this.getCartList()):this.user=null})}getUserInfo(){this.userService.apiUserUserInfoGet().subscribe({next:o=>{this.user=o.data},error:o=>{console.error(o)}})}getCartList(){this.shopService.apiShopCartGet().subscribe(o=>{this.cartList=o.data,this.cartTotal={courseCount:o.data.length,total:o.data.reduce((s,m)=>s+m.price,0)}})}redirect(o){this.router.navigate([o])}handleMenuClick(o){switch(o.label){case"\u5B78\u751F\u500B\u4EBA\u7BA1\u7406":this.router.navigate(["/layout2/student"]);break;case"\u767B\u51FA":this.authStatusService.logout(),this.router.navigate(["/login"]);break;default:break}}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=g({type:r,selectors:[["app-header"]],standalone:!0,features:[w],decls:46,vars:4,consts:[[1,"flex","justify-center","border-b","border-tmf-gray-5"],[1,"relative","flex","h-[64px]","w-full","items-center","justify-between","px-6","md:px-[32px]","lg:h-[80px]","lg:max-w-[1280px]"],[1,"hidden","justify-center","gap-x-6","lg:flex"],[1,"flex","items-center","gap-x-[2px]"],[1,"material-icons-outlined","text-[20px]","text-tmf-orange-1"],[1,"text-[16px]","leading-6"],[1,"material-icons-outlined","text-[20px]","text-tmf-gray-4"],[1,"flex","cursor-pointer","lg:hidden"],[1,"material-icons-outlined","text-[24px]","text-tmf-gray-4"],["src","assets/images/logo.svg","alt","logo",1,"h-[33px]","cursor-pointer","lg:absolute","lg:left-[50%]","lg:h-[54px]","lg:-translate-x-[50%]",3,"click"],[1,"flex","items-center","justify-end","gap-x-10"],[1,"mt-2","flex","justify-center","gap-x-4"],[1,"relative","cursor-pointer"],[1,"flex","h-[40px]","w-[48px]","cursor-pointer","items-center","justify-center","rounded-lg","p-2","duration-100","hover:bg-tmf-gray-6","active:bg-tmf-gray-5"],[1,"material-icons-outlined"],[1,"absolute","right-2","top-2","h-[6px]","w-[6px]","rounded-full","bg-tmf-orange-1"],[1,"group","relative"],[1,"material-icons-outlined","cursor-pointer"],[1,"absolute","right-2","top-1","flex","h-4","w-4","items-center","justify-center","rounded-full","border-2","border-white","bg-tmf-orange-1","text-[10px]","font-semibold","text-white"],[1,"absolute","right-0","top-full","hidden","bg-white","pt-[8px]","group-hover:block","lg:left-0","lg:pt-[16px]"],[1,"w-[320px]","rounded-b-[12px]","border-t","border-tmf-purple","bg-white","py-3","shadow-lg"],[1,"flex","min-h-[92px]","w-full","cursor-pointer","items-start","justify-start","gap-x-3","border-b","border-tmf-gray-5","bg-white","px-[16px]","py-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2"],[1,"flex","min-h-[84px]","w-full","flex-col","items-start","bg-white","px-[16px]","py-3"],[1,"text-[14px]","leading-5","text-tmf-gray-3"],[1,"flex","w-full","items-center","justify-between","text-[16px]","leading-6"],[1,"cursor-pointer","rounded-lg","bg-tmf-orange-1","px-4","py-2","font-bold","text-white",3,"click"],[1,"hidden","items-center","justify-center","gap-x-4","lg:flex"],[1,"h-[48px]","w-[84px]","bg-tmf-gray-3"],["src","","alt","",1,"h-full","w-full"],[1,"flex","flex-col"],[1,"mb-1","flex","flex-wrap","gap-2"],[1,"flex","h-[24px]","items-center","justify-center","rounded","bg-tmf-gray-5","p-1","text-[12px]","leading-4"],[1,"mb-2","text-[14px]","font-bold","leading-5"],[1,"flex","items-center","justify-between","text-[14px]","leading-5"],[1,"text-tmf-gray-3"],[1,"font-medium"],[1,"flex","h-[40px]","w-[120px]","items-center","justify-center","gap-x-1","rounded-lg","border-2","border-tmf-orange-1","text-tmf-orange-1","duration-100","hover:bg-tmf-orange-1","hover:text-white","active:bg-tmf-orange-2","active:text-white"],[1,"material-icons-outlined","!text-[18px]"],[1,"flex","h-[40px]","w-[120px]","items-center","justify-center","gap-x-1","rounded-lg","bg-tmf-orange-1","text-white","duration-100","hover:bg-tmf-orange-2","active:bg-tmf-orange-1",3,"click"],[1,"group","relative","flex","items-center","justify-center","gap-x-2"],[1,"h-[44px]","w-[44px]","shrink-0","overflow-hidden","rounded-full","bg-tmf-gray-5"],["alt","avator_image",3,"src"],[1,"hidden","text-[18px]","font-medium","leading-7","lg:block"],[1,"absolute","right-0","top-full","hidden","bg-white","pt-[10px]","group-hover:block","lg:left-0","lg:pt-[18px]"],[1,"w-[200px]","rounded-b-[12px]","border-t","border-tmf-purple","bg-white","py-3","shadow-lg"],[1,"flex","h-[48px]","w-full","cursor-pointer","items-center","justify-start","gap-x-2","px-[26px]","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"ngClass"],[1,"flex","h-[48px]","w-full","cursor-pointer","items-center","justify-start","gap-x-2","px-[26px]","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"click","ngClass"],[1,"material-icons-outlined","text-tmf-gray-4"]],template:function(s,m){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),i(5,"pin_drop"),t(),e(6,"p",5),i(7),t()(),e(8,"span"),i(9," | "),t(),e(10,"div",3)(11,"span",6),i(12,"expand_more"),t(),e(13,"p",5),i(14,"\u63A2\u7D22"),t()()(),e(15,"button",7)(16,"span",8),i(17,"menu"),t()(),e(18,"img",9),x("click",function(){return m.redirect("/home")}),t(),e(19,"div",10)(20,"div",11)(21,"div",12)(22,"button",13)(23,"span",14),i(24,"notifications"),t(),c(25,"div",15),t()(),e(26,"div",16)(27,"button",13)(28,"span",17),i(29,"shopping_cart"),t(),e(30,"div",18),i(31," 1 "),t()(),e(32,"div",19)(33,"ul",20),_(34,O,16,6,"li",21,h),e(36,"li",22)(37,"p",23),i(38),t(),e(39,"div",24)(40,"p"),i(41),t(),e(42,"button",25),x("click",function(){return m.redirect("/cart")}),i(43," \u524D\u5F80\u7D50\u5E33 "),t()()()()()()(),f(44,P,9,0,"div",26)(45,q,9,2),t()()()),s&2&&(l(7),y(m.selectCity),l(27),v(m.cartList),l(4),d(" \u5171\u8A08 ",m.cartTotal.courseCount," \u9805\u8AB2\u7A0B "),l(3),d("\u7E3D\u8A08 NT$ ",m.cartTotal.total,""),l(3),b(44,m.user?45:44))},dependencies:[C,B],styles:["[_nghost-%COMP%]{display:block}"]});let n=r;return n})();export{Z as a,ie as b};