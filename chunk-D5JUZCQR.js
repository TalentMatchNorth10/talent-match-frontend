import{c as L,d as I,f as B,g as j,h as H,l as de}from"./chunk-XNGITIFD.js";import{b as ue}from"./chunk-X2WFMUHY.js";import{b as pe,f as me}from"./chunk-JODTFTSB.js";import{a as oe,c as ae}from"./chunk-35WYKW2F.js";import"./chunk-OWR3Y33E.js";import{a as le,b as se}from"./chunk-PDODRQAF.js";import{a as ce}from"./chunk-FQYA2JND.js";import{c as q,d as X,e as Z,f as M,g as J,h as K,j as Q}from"./chunk-4RVITEBT.js";import{e as Y,g as ee,h as te,i as ie,m as ne,n as re}from"./chunk-DREITOGH.js";import"./chunk-HL6YTG4U.js";import"./chunk-3FVGUIDR.js";import{k as G,t as A}from"./chunk-UR6A4M7U.js";import{Ab as u,Ca as z,Cb as U,Db as N,Eb as P,Ga as l,Gb as F,Hb as V,Ib as k,Jb as W,Ya as b,_ as y,_a as m,bb as v,bc as $,cb as R,da as E,db as C,eb as x,fb as f,gb as t,hb as i,ib as d,ma as _,mb as w,na as h,pb as g,qb as p,x as D,yb as a,zb as S}from"./chunk-MBKQLGNW.js";import"./chunk-TMC7WMLO.js";var O={backdropAnimation:L("fade",[j("fade-out",B({opacity:0,visibility:"hidden"})),j("fade-in",B({opacity:.7,visibility:"visible"})),H("fade-out => fade-in",I("200ms")),H("fade-in => fade-out",I("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))]),sidenavAnimation:L("transform",[j("open, open-instant",B({transform:"none",visibility:"visible"})),j("void",B({transform:"translateX(-100%)","box-shadow":"none",visibility:"hidden"})),H("void => open-instant",I("0ms")),H("void <=> open, open-instant => void",I("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])};var be=e=>({"w-[360px]":e}),ve=(e,o)=>({"invisible -z-10":e,"z-20":o}),ye=e=>({"bg-tmf-orange-3":e}),xe=e=>({"-rotate-90":e}),Ce=e=>({"mb-2 border-b border-tmf-gray-5 pb-2":e}),we=e=>({"bg-tmf-orange-1 text-white":e});function Se(e,o){if(e&1&&(t(0,"p",5),a(1),i()),e&2){let n=p();l(),u(" ",n.selectCity.label," ")}}function ke(e,o){if(e&1){let n=w();t(0,"li",45),g("click",function(){let c=_(n).$implicit,s=p();return h(s.searchCity(c.value))}),t(1,"p"),a(2),i()()}if(e&2){let n=o.$implicit;l(2),S(n.label)}}function Te(e,o){if(e&1){let n=w();t(0,"li",51),g("click",function(){let c=_(n).$implicit,s=p(3);return h(s.searchTag(c))}),a(1),i()}if(e&2){let n=o.$implicit;l(),u(" ",n," ")}}function Ee(e,o){if(e&1&&(t(0,"div",48)(1,"ul",49),x(2,Te,2,1,"li",50,C),i()()),e&2){let n=p(2);l(2),f(n.selectTag.sub_category)}}function Fe(e,o){if(e&1){let n=w();t(0,"li",13)(1,"p",46),g("click",function(){let c=_(n).$implicit,s=p();return h(s.selectTag=c)}),a(2),t(3,"span",47),a(4,"expand_more"),i()(),b(5,Ee,4,0,"div",48),i()}if(e&2){let n=o.$implicit,r=p();l(),m("ngClass",k(4,ye,r.selectTag===n)),l(),u(" ",n.main_category," "),l(),m("ngClass",k(6,xe,r.selectTag===n)),l(2),v(5,r.selectTag?5:-1)}}function Ie(e,o){if(e&1){let n=w();t(0,"tmf-input",52),P("ngModelChange",function(c){_(n);let s=p();return N(s.searchInputControl,c)||(s.searchInputControl=c),h(c)}),g("clickSearch",function(c){_(n);let s=p();return h(s.search(c))}),i()}if(e&2){let n=p();m("inputType",n.InputType.Search),U("ngModel",n.searchInputControl)}}function Be(e,o){e&1&&d(0,"img",54)}function je(e,o){if(e&1&&(t(0,"li",29)(1,"div",53),b(2,Be,1,0,"img",54),i(),t(3,"div",55)(4,"div",56)(5,"div",57),a(6),i(),t(7,"div",57),a(8),i()(),t(9,"p",58),a(10),i(),t(11,"div",59)(12,"p",60),a(13),i(),t(14,"p",61),a(15),i()()()()),e&2){let n=o.$implicit;l(2),v(2,n.image?2:-1),l(4),u(" ",n.main_category," "),l(2),u(" ",n.sub_category," "),l(2),u(" ",n.name," "),l(3),u(" ",n.quantity,"\u5802\u8AB2\u7A0B "),l(2),u("NT$\uFF1A",n.price,"")}}function He(e,o){if(e&1){let n=w();t(0,"div",34)(1,"button",62)(2,"span",63),a(3,"handshake"),i(),a(4," \u6211\u8981\u958B\u8AB2 "),i(),t(5,"button",64),g("click",function(){_(n);let c=p();return h(c.redirect("/login"))}),t(6,"span",63),a(7,"handshake"),i(),a(8," \u767B\u5165/\u8A3B\u518A "),i()()}}function Ae(e,o){if(e&1&&d(0,"img",67),e&2){let n=p(2);m("src",n.user.avator_image,z)}}function Me(e,o){if(e&1){let n=w();t(0,"li",72),g("click",function(){let c=_(n).$implicit,s=p(3);return h(s.handleMenuClick(c))}),t(1,"span",73),a(2),i(),t(3,"p"),a(4),i()()}if(e&2){let n=o.$implicit,r=o.$index,c=o.$count,s=p(),T=s.$index,he=s.$count;m("ngClass",k(3,Ce,r===c-1&&T!==he-1)),l(2),S(n.icon),l(2),S(n.label)}}function Ve(e,o){if(e&1&&x(0,Me,5,5,"li",71,C),e&2){let n=o.$implicit;f(n)}}function $e(e,o){if(e&1&&(t(0,"div",65)(1,"div",66),b(2,Ae,1,1,"img",67),i(),t(3,"p",68),a(4),i(),t(5,"div",69)(6,"ul",70),x(7,Ve,2,0,null,null,C),i()()()),e&2){let n=p();l(2),v(2,n.user.avator_image?2:-1),l(2),u(" ",n.user.nick_name," "),l(3),f(n.userMenuList)}}function Le(e,o){if(e&1&&d(0,"tmf-option",42),e&2){let n=o.$implicit;m("value",n.value)("label",n.label)}}function Oe(e,o){if(e&1){let n=w();t(0,"li",77),g("click",function(){let c=_(n).$implicit,s=p(3);return h(s.currentTag=c)}),a(1),i()}if(e&2){let n=o.$implicit,r=p(3);m("ngClass",k(2,we,r.currentTag===n)),l(),u(" ",n," ")}}function De(e,o){if(e&1&&(t(0,"ul",75),x(1,Oe,2,4,"li",76,C),i()),e&2){let n=p().$implicit;l(),f(n.sub_category)}}function ze(e,o){if(e&1){let n=w();t(0,"li",74),g("click",function(){let c=_(n).$implicit,s=p();return h(s.toggleSelectTag(c))}),a(1),t(2,"span",47),a(3,"expand_more"),i()(),b(4,De,3,0,"ul",75)}if(e&2){let n=o.$implicit,r=p();l(),u(" ",n.main_category," "),l(),m("ngClass",k(3,xe,r.selectTag===n)),l(2),v(4,r.selectTag===n?4:-1)}}function Re(e,o){if(e&1){let n=w();t(0,"div",44)(1,"button",78)(2,"span",63),a(3,"handshake"),i(),a(4," \u6211\u8981\u958B\u8AB2 "),i(),t(5,"button",79),g("click",function(){_(n);let c=p();return h(c.redirect("/login"))}),t(6,"span",63),a(7,"handshake"),i(),a(8," \u767B\u5165/\u8A3B\u518A "),i()()}}var fe=(()=>{let o=class o{constructor(){this.userService=y(me),this.router=y(M),this.authStatusService=y(ue),this.shopService=y(pe),this.commonService=y(ce),this.route=y(X),this.user=null,this.cityOptions=[],this.selectCityControl=new ee,this.tagOptions=[],this.currentTag="",this.isIndex=!1,this.isOpen=!1,this.userMenuList=[[{icon:"face",label:"\u5B78\u751F\u500B\u4EBA\u7BA1\u7406"},{icon:"face",label:"\u6559\u5E2B\u8CC7\u8A0A\u7BA1\u7406"},{icon:"smart_display",label:"\u5F71\u7247\u7BA1\u7406"},{icon:"edit_calendar",label:"\u884C\u4E8B\u66C6\u7BA1\u7406"},{icon:"description",label:"\u8AB2\u7A0B\u7BA1\u7406"},{icon:"account_balance_wallet",label:"\u4EA4\u6613\u7D00\u9304"},{icon:"settings",label:"\u5E33\u6236\u7BA1\u7406"}],[{icon:"question_answer",label:"\u8A0A\u606F"},{icon:"notifications",label:"\u516C\u544A"}],[{icon:"logout",label:"\u767B\u51FA"}]],this.cartList=[],this.cartTotal={courseCount:0,total:0},this.searchInputControl="",this.InputType=oe}ngOnInit(){this.getOptions(),this.authStatusService.loginStatus$().subscribe(r=>{r?(this.getUserInfo(),this.getCartList()):this.user=null}),this.route.url.subscribe(()=>{this.isIndex=window.location.pathname==="/home"})}getOptions(){this.commonService.apiCommonOptionsCityPost({cityRequestModel:{is_oversea:!1}}).subscribe(r=>{this.cityOptions=[{label:"\u63A2\u7D22\u5168\u90E8",value:"all"},...r.data],this.toggleSelectCity(this.cityOptions[0])}),this.commonService.apiCommonTagGet().subscribe(r=>{this.tagOptions=r.data})}getUserInfo(){this.userService.apiUserUserInfoGet().subscribe({next:r=>{this.user=r.data},error:r=>{console.error(r)}})}getCartList(){this.shopService.apiShopCartGet().subscribe(r=>{this.cartList=r.data,this.cartTotal={courseCount:r.data.length,total:r.data.reduce((c,s)=>c+s.price,0)}})}toggleSidenav(){this.isOpen=!this.isOpen}toggleSelectCity(r){if(r.value===this.selectCityControl.value){this.selectCityControl.setValue(null),this.selectCity=null;return}this.selectCityControl.setValue(r.value),this.selectCity=r}toggleSelectTag(r){if(r===this.selectTag){this.selectTag=null;return}this.selectTag=r}redirect(r){this.router.navigate([r])}handleMenuClick(r){switch(r.label){case"\u5B78\u751F\u500B\u4EBA\u7BA1\u7406":this.router.navigate(["/student"]);break;case"\u6559\u5E2B\u8CC7\u8A0A\u7BA1\u7406":this.router.navigate(["/teacher"]);break;case"\u767B\u51FA":this.authStatusService.logout(),this.router.navigate(["/login"]);break;default:break}}search(r){this.router.navigateByUrl(`/result-keyword?keyword=${r.value}`)}searchCity(r){this.router.navigateByUrl(`/result-tag?cityId=${r}`)}searchTag(r){this.router.navigateByUrl(`/result-tag?mainCategory=${this.selectTag?.main_category}&subCategory=${r}`)}};o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=E({type:o,selectors:[["app-header"]],standalone:!0,features:[F],decls:69,vars:17,consts:[[1,"relative","z-10","flex","justify-center","border-b","border-tmf-gray-5"],[1,"relative","flex","h-[64px]","w-full","items-center","justify-between","px-6","md:px-[32px]","lg:h-[80px]","lg:max-w-[1280px]"],[1,"relative","hidden","h-full","items-center","justify-center","gap-x-6","lg:flex"],[1,"group","flex","h-full","items-center","gap-x-[2px]"],[1,"material-icons-outlined","text-[20px]","text-tmf-orange-1"],[1,"text-[16px]","leading-6"],[1,"absolute","right-0","top-full","hidden","w-[120px]","rounded-b-[12px]","border-t","border-tmf-purple","bg-white","py-3","pt-[8px]","shadow-lg","group-hover:block","lg:left-0","lg:pt-[16px]"],[1,"h-[240px]","overflow-y-auto","rounded-b-[12px]","bg-white"],[1,"flex","w-full","cursor-pointer","items-start","justify-start","gap-x-3","bg-white","px-[16px]","py-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2"],[1,"group","relative","flex","h-full","items-center","gap-x-[2px]"],[1,"material-icons-outlined","text-[20px]","text-tmf-gray-4","duration-100","group-hover:-rotate-90"],[1,"absolute","left-0","top-full","hidden","h-[240px]","overflow-hidden","rounded-b-lg","border-t","border-tmf-purple","bg-white","py-3","shadow-lg","group-hover:block",3,"ngClass"],[1,"h-full","w-[150px]","overflow-y-auto","rounded-b-[12px]","bg-white"],[1,"flex","w-full","cursor-pointer","items-start","justify-center","gap-x-3","bg-white","duration-100"],["placeholder","\u5FEB\u901F\u641C\u5C0B",3,"inputType","ngModel"],[1,"flex","cursor-pointer","lg:hidden",3,"click"],[1,"material-icons-outlined","text-[24px]","text-tmf-gray-4"],["src","assets/images/logo.svg","alt","logo",1,"h-[33px]","cursor-pointer","lg:absolute","lg:left-[50%]","lg:h-[54px]","lg:-translate-x-[50%]",3,"click"],[1,"flex","items-center","justify-end","gap-x-10"],[1,"mt-2","flex","justify-center","gap-x-4"],[1,"relative","cursor-pointer"],[1,"flex","h-[40px]","w-[48px]","cursor-pointer","items-center","justify-center","rounded-lg","p-2","duration-100","hover:bg-tmf-gray-6","active:bg-tmf-gray-5"],[1,"material-icons-outlined"],[1,"absolute","right-2","top-2","h-[6px]","w-[6px]","rounded-full","bg-tmf-orange-1"],[1,"group","relative"],[1,"material-icons-outlined","cursor-pointer"],[1,"absolute","right-2","top-1","flex","h-4","w-4","items-center","justify-center","rounded-full","border-2","border-white","bg-tmf-orange-1","text-[10px]","font-semibold","text-white"],[1,"absolute","right-0","top-full","hidden","bg-white","pt-[8px]","group-hover:block","lg:left-0","lg:pt-[16px]"],[1,"w-[320px]","rounded-b-[12px]","border-t","border-tmf-purple","bg-white","py-3","shadow-lg"],[1,"flex","min-h-[92px]","w-full","cursor-pointer","items-start","justify-start","gap-x-3","border-b","border-tmf-gray-5","bg-white","px-[16px]","py-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2"],[1,"flex","min-h-[84px]","w-full","flex-col","items-start","bg-white","px-[16px]","py-3"],[1,"text-[14px]","leading-5","text-tmf-gray-3"],[1,"flex","w-full","items-center","justify-between","text-[16px]","leading-6"],[1,"cursor-pointer","rounded-lg","bg-tmf-orange-1","px-4","py-2","font-bold","text-white",3,"click"],[1,"hidden","items-center","justify-center","gap-x-4","lg:flex"],[1,"fixed","left-0","top-0","h-screen","w-full",3,"ngClass"],[1,"h-full","w-full","bg-tmf-gray-5","duration-100",3,"click"],[1,"absolute","left-0","top-0","flex","h-full","w-[320px]","flex-col","overflow-auto","bg-white","px-6","py-8","!opacity-100"],[1,"material-icons-outlined","mb-5","cursor-pointer","text-[24px]","text-tmf-gray-2",3,"click"],[1,"mb-5","flex","items-center","gap-4"],[1,"whitespace-nowrap","text-[16px]","font-bold","leading-6"],[1,"!w-full","max-w-[180px]",3,"formControl","icon"],[3,"value","label"],[1,"mb-[40px]","flex","flex-grow","flex-col"],[1,"flex","flex-col","items-center","justify-center","gap-4"],[1,"flex","w-full","cursor-pointer","items-start","justify-start","gap-x-3","bg-white","px-[16px]","py-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"click"],[1,"flex","items-center","gap-2","px-[16px]","py-3","active:bg-tmf-orange-2",3,"click","ngClass"],[1,"material-icons-outlined","text-tmf-gray-4","duration-100",3,"ngClass"],[1,"absolute","right-0","top-0","h-[240px]","w-[200px]","overflow-y-auto","bg-white","py-3"],[1,"grid","grid-cols-2"],[1,"relative","col-span-1","flex","h-fit","justify-center","px-[16px]","py-3","text-center","hover:bg-tmf-orange-3","active:bg-tmf-orange-2"],[1,"relative","col-span-1","flex","h-fit","justify-center","px-[16px]","py-3","text-center","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"click"],["placeholder","\u5FEB\u901F\u641C\u5C0B",3,"ngModelChange","clickSearch","inputType","ngModel"],[1,"h-[48px]","w-[84px]","bg-tmf-gray-3"],["src","","alt","",1,"h-full","w-full"],[1,"flex","flex-col"],[1,"mb-1","flex","flex-wrap","gap-2"],[1,"flex","h-[24px]","items-center","justify-center","rounded","bg-tmf-gray-5","p-1","text-[12px]","leading-4"],[1,"mb-2","text-[14px]","font-bold","leading-5"],[1,"flex","items-center","justify-between","text-[14px]","leading-5"],[1,"text-tmf-gray-3"],[1,"font-medium"],[1,"flex","h-[40px]","w-[120px]","items-center","justify-center","gap-x-1","rounded-lg","border-2","border-tmf-orange-1","text-tmf-orange-1","duration-100","hover:bg-tmf-orange-1","hover:text-white","active:bg-tmf-orange-2","active:text-white"],[1,"material-icons-outlined","!text-[18px]"],[1,"flex","h-[40px]","w-[120px]","items-center","justify-center","gap-x-1","rounded-lg","bg-tmf-orange-1","text-white","duration-100","hover:bg-tmf-orange-2","active:bg-tmf-orange-1",3,"click"],[1,"group","relative","flex","items-center","justify-center","gap-x-2"],[1,"h-[44px]","w-[44px]","shrink-0","overflow-hidden","rounded-full","bg-tmf-gray-5"],["alt","avator_image",3,"src"],[1,"hidden","text-[18px]","font-medium","leading-7","lg:block"],[1,"absolute","right-0","top-full","hidden","pt-[10px]","group-hover:block","lg:left-0","lg:pt-[18px]"],[1,"w-[200px]","rounded-b-[12px]","border-t","border-tmf-purple","bg-white","py-3","shadow-lg"],[1,"flex","h-[48px]","w-full","cursor-pointer","items-center","justify-start","gap-x-2","px-[26px]","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"ngClass"],[1,"flex","h-[48px]","w-full","cursor-pointer","items-center","justify-start","gap-x-2","px-[26px]","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"click","ngClass"],[1,"material-icons-outlined","text-tmf-gray-4"],[1,"flex","h-[48px]","flex-shrink-0","items-center","justify-between","border-b","border-tmf-gray-6",3,"click"],[1,"max-h-[300px]","overflow-auto"],[1,"flex","h-[48px]","items-center","justify-between","border-b","border-tmf-gray-6","px-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"ngClass"],[1,"flex","h-[48px]","items-center","justify-between","border-b","border-tmf-gray-6","px-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"click","ngClass"],[1,"flex","h-[50px]","w-full","items-center","justify-center","gap-x-1","rounded-lg","border-2","border-tmf-orange-1","text-tmf-orange-1","duration-100","hover:bg-tmf-orange-1","hover:text-white","active:bg-tmf-orange-2","active:text-white"],[1,"flex","h-[50px]","w-full","items-center","justify-center","gap-x-1","rounded-lg","bg-tmf-orange-1","text-white","duration-100","hover:bg-tmf-orange-2","active:bg-tmf-orange-1",3,"click"]],template:function(c,s){c&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),a(5,"pin_drop"),i(),b(6,Se,2,1,"p",5),t(7,"div",6)(8,"ul",7),x(9,ke,3,1,"li",8,C),i()()(),t(11,"span"),a(12," | "),i(),t(13,"div",9)(14,"span",10),a(15,"expand_more"),i(),t(16,"p",5),a(17,"\u63A2\u7D22"),i(),t(18,"div",11)(19,"ul",12),x(20,Fe,6,8,"li",13,C),i()()(),b(22,Ie,1,2,"tmf-input",14),i(),t(23,"button",15),g("click",function(){return s.toggleSidenav()}),t(24,"span",16),a(25,"menu"),i()(),t(26,"img",17),g("click",function(){return s.redirect("/home")}),i(),t(27,"div",18)(28,"div",19)(29,"div",20)(30,"button",21)(31,"span",22),a(32,"notifications"),i(),d(33,"div",23),i()(),t(34,"div",24)(35,"button",21)(36,"span",25),a(37,"shopping_cart"),i(),t(38,"div",26),a(39," 1 "),i()(),t(40,"div",27)(41,"ul",28),x(42,je,16,6,"li",29,C),t(44,"li",30)(45,"p",31),a(46),i(),t(47,"div",32)(48,"p"),a(49),i(),t(50,"button",33),g("click",function(){return s.redirect("/cart")}),a(51," \u524D\u5F80\u7D50\u5E33 "),i()()()()()()(),b(52,He,9,0,"div",34)(53,$e,9,2),i()()(),t(54,"div",35)(55,"div",36),g("click",function(){return s.toggleSidenav()}),i(),t(56,"div",37)(57,"span",38),g("click",function(){return s.toggleSidenav()}),a(58,"close"),i(),t(59,"div",39)(60,"p",40),a(61," \u9078\u64C7\u5730\u5340 "),i(),t(62,"tmf-select",41),x(63,Le,1,2,"tmf-option",42,C),i()(),t(65,"ul",43),x(66,ze,5,5,null,null,C),i(),b(68,Re,9,0,"div",44),i()()),c&2&&(l(6),v(6,s.selectCity?6:-1),l(3),f(s.cityOptions),l(9),m("ngClass",k(12,be,s.selectTag)),l(2),f(s.tagOptions),l(2),v(22,s.isIndex?-1:22),l(20),f(s.cartList),l(4),u(" \u5171\u8A08 ",s.cartTotal.courseCount," \u9805\u8AB2\u7A0B "),l(3),u("\u7E3D\u8A08 NT$ ",s.cartTotal.total,""),l(3),v(52,s.user?53:52),l(2),m("ngClass",W(14,ve,!s.isOpen,s.isOpen)),l(),m("@fade",s.isOpen?"fade-in":"fade-out"),l(),m("@transform",s.isOpen?"open":"void"),l(6),m("formControl",s.selectCityControl)("icon","pin_drop"),l(),f(s.cityOptions),l(3),f(s.tagOptions),l(2),v(68,s.user?-1:68))},dependencies:[A,G,re,Y,ie,se,le,ae,ne,te],styles:["[_nghost-%COMP%]{display:block}"],data:{animation:[O.sidenavAnimation,O.backdropAnimation]}});let e=o;return e})();var _e=(()=>{let o=class o{};o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=E({type:o,selectors:[["app-footer"]],standalone:!0,features:[F],decls:25,vars:0,consts:[[1,"bg_image","flex","h-[372px]","items-center","justify-center","bg-tmf-gray-1","px-5","lg:h-[248px]"],[1,"w-full","max-w-[1280px]"],[1,"mb-[48px]","flex","flex-col","items-center","lg:mb-3","lg:flex-row","lg:items-end","lg:justify-between"],["src","/assets/images/footer-logo.svg","alt","",1,"mb-[29px]","w-[200px]","lg:mb-0"],[1,"flex","flex-wrap","justify-center","gap-x-8","gap-y-5","text-[14px]","leading-5","text-white"],[1,"cursor-pointer"],[1,"flex","flex-col","items-center","gap-y-4","lg:flex-row","lg:items-end","lg:justify-between"],[1,"order-2","text-center","text-[14px]","leading-5","text-white","lg:order-1"],[1,"order-1","flex","gap-x-4","lg:order-2"],[1,"flex","h-[40px]","w-[40px]","cursor-pointer","items-center","justify-center","rounded-full","border","border-tmf-orange-2"],["src","assets/images/line.png","alt","line"],["src","assets/images/youtube.png","alt","youtube"],["src","assets/images/facebook.png","alt","facebook"]],template:function(c,s){c&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),d(3,"img",3),t(4,"ul",4)(5,"li",5),a(6,"\u6559\u5E2B\u62DB\u52DF"),i(),t(7,"li",5),a(8,"\u670D\u52D9\u689D\u6B3E"),i(),t(9,"li",5),a(10,"\u95DC\u65BC\u6211\u5011"),i(),t(11,"li",5),a(12,"\u96B1\u79C1\u6B0A\u653F\u7B56"),i(),t(13,"li",5),a(14,"\u4F7F\u7528\u8005\u689D\u6B3E"),i()()(),t(15,"div",6)(16,"p",7),a(17," copyright \xA9 2024 Zhong Feng Lin Fiber Technology Co.,Ltd "),i(),t(18,"ul",8)(19,"li",9),d(20,"img",10),i(),t(21,"li",9),d(22,"img",11),i(),t(23,"li",9),d(24,"img",12),i()()()()())},dependencies:[A],styles:["[_nghost-%COMP%]{display:block}.bg_image[_ngcontent-%COMP%]{background-image:url(/assets/images/footer-bg.png);background-size:auto 210px;background-repeat:no-repeat;background-position:bottom left}@media (max-width: 1024px){.bg_image[_ngcontent-%COMP%]{background-size:auto 100%;background-position:bottom center}}"]});let e=o;return e})();var Ue=()=>["bg-tmf-orange-1","!text-white"],Ne=()=>({exact:!0});function Pe(e,o){e&1&&(t(0,"main",2),d(1,"router-outlet"),i())}function We(e,o){if(e&1&&(t(0,"li",10)(1,"a",15)(2,"span",12),a(3),i(),t(4,"p",13),a(5),i()()()),e&2){let n=o.$implicit;m("routerLinkActive",V(5,Ue))("routerLinkActiveOptions",V(6,Ne)),l(),m("routerLink",n.path),l(2),S(n.icon),l(2),S(n.title)}}function Ge(e,o){if(e&1&&(t(0,"main",4)(1,"div",5)(2,"div",6)(3,"p",7),a(4,"\u500B\u4EBA\u7BA1\u7406"),i(),t(5,"div",8),a(6),i()(),t(7,"ul",9),x(8,We,6,7,"li",10,R),i(),t(10,"a",11)(11,"span",12),a(12,"restart_alt"),i(),t(13,"p",13),a(14),i()()(),t(15,"div",14),d(16,"router-outlet"),i()()),e&2){let n=p();l(6),u(" ",n.identityText()," "),l(2),f(n.menuList()),l(2),m("routerLink",n.changeIdentity().path),l(4),u("\u5207\u63DB\u70BA",n.changeIdentity().text,"")}}var _t=(()=>{let o=class o{constructor(){this.router=y(M),this.menuService=y(de),this.state=null,this.menuList=this.menuService.menuListSig,this.identity=this.menuService.identitySig,this.identityText=$(()=>this.identity()==="student"?"\u5B78\u751F":"\u8001\u5E2B"),this.changeIdentity=$(()=>({text:this.identity()==="student"?"\u8001\u5E2B":"\u5B78\u751F",path:this.identity()==="student"?"/teacher":"/student"})),this.router.events.pipe(D(r=>r instanceof q)).subscribe(r=>{let c=r.url;c.startsWith("/student")?this.menuService.updateMenuList("student"):c.startsWith("/teacher/")?this.menuService.updateMenuList("teacher"):this.menuService.updateMenuList("default")})}};o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=E({type:o,selectors:[["app-layout"]],standalone:!0,features:[F],decls:5,vars:1,consts:[[1,"flex","min-h-[100vh]","flex-col"],[1,"relative","z-50"],[1,"relative","z-40","flex-grow"],[1,"relative","z-30"],[1,"container","flex-grow","relative","z-40","mx-auto","mb-12","mt-6","gap-6","sm:flex","xl:max-w-screen-xl"],[1,"max-h-[768px]","hidden","rounded-xl","bg-white","p-6","shadow-lg","sm:block","sm:min-w-[13.25rem]","xl:min-w-[18.875rem]"],[1,"mb-6","flex","items-center","justify-between"],[1,"text-xl","font-bold"],[1,"rounded","bg-tmf-gray-7","px-2","py-1","text-base","font-bold","text-tmf-orange-1"],[1,"mb-6","flex","min-h-[36.5rem]","flex-col","gap-1"],[1,"cursor-pointer","rounded-xl","text-tmf-gray-2","hover:bg-tmf-orange-1","hover:text-white",3,"routerLinkActive","routerLinkActiveOptions"],[1,"flex","cursor-pointer","items-center","justify-between","gap-3","rounded-xl","p-4","text-tmf-gray-2","hover:bg-tmf-orange-1","hover:text-white",3,"routerLink"],[1,"material-icons-outlined"],[1,"grow"],[1,"mx-3","rounded-2xl","bg-white","px-3","py-6","shadow-lg","sm:mx-0","sm:w-full"],[1,"flex","items-center","justify-between","gap-3","p-4",3,"routerLink"]],template:function(c,s){c&1&&(t(0,"div",0),d(1,"app-header",1),b(2,Pe,2,0,"main",2)(3,Ge,17,3),d(4,"app-footer",3),i()),c&2&&(l(2),v(2,s.identity()==="default"?2:3))},dependencies:[Q,Z,J,K,fe,_e]});let e=o;return e})();export{_t as default};
