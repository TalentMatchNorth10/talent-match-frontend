import{a as de}from"./chunk-N5CY2WPP.js";import{c as z,d as F,f as B,g as j,h as H,l as ge}from"./chunk-5IR5ON2N.js";import{b as ue}from"./chunk-Z7ZMNZBZ.js";import{a as oe,d as ae}from"./chunk-6TH77JN7.js";import{f as pe,k as me}from"./chunk-3JOZWKYR.js";import{a as le,b as se}from"./chunk-4KLAN3XO.js";import{c as L,e as Z,f as $,g as J,h as K,j as Q}from"./chunk-IFNMD2XS.js";import{e as Y,g as ee,h as te,k as ie,q as ne,r as re}from"./chunk-MIFECOC4.js";import"./chunk-TGEFNR3I.js";import"./chunk-O2MZCC7V.js";import{d as ce}from"./chunk-7REWYPIF.js";import"./chunk-7PEPFG7H.js";import{k as X,v as V}from"./chunk-OU7DBEEA.js";import{$ as C,Bb as s,Cb as k,Db as u,Ea as M,Gb as P,Hb as W,Ia as l,Ib as G,Kb as I,Lb as O,Mb as T,Nb as q,_a as _,ab as m,ea as E,eb as h,fb as N,gb as w,hb as v,hc as D,ib as b,jb as i,kb as n,lb as g,na as x,oa as f,pb as y,sb as d,tb as p,x as R}from"./chunk-ZYASN54F.js";import"./chunk-CWTPBX7D.js";var U={backdropAnimation:z("fade",[j("fade-out",B({opacity:0,visibility:"hidden"})),j("fade-in",B({opacity:.7,visibility:"visible"})),H("fade-out => fade-in",F("200ms")),H("fade-in => fade-out",F("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))]),sidenavAnimation:z("transform",[j("open, open-instant",B({transform:"none",visibility:"visible"})),j("void",B({transform:"translateX(-100%)","box-shadow":"none",visibility:"hidden"})),H("void => open-instant",F("0ms")),H("void <=> open, open-instant => void",F("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])};var ve=e=>({"w-[360px]":e}),be=(e,o)=>({"invisible -z-10":e,"z-20":o}),ye=e=>({"bg-tmf-orange-3":e}),fe=e=>({"-rotate-90":e}),Ce=e=>({"mb-2 border-b border-tmf-gray-5":e}),we=e=>({"bg-tmf-orange-1 text-white":e});function Se(e,o){if(e&1&&(i(0,"p",5),s(1),n()),e&2){let t=p();l(),u(" ",t.selectCity.label," ")}}function ke(e,o){if(e&1){let t=y();i(0,"li",45),d("click",function(){let c=x(t).$implicit,a=p();return f(a.searchCity(c.value))}),i(1,"p"),s(2),n()()}if(e&2){let t=o.$implicit;l(2),k(t.label)}}function Te(e,o){if(e&1){let t=y();i(0,"li",51),d("click",function(){let c=x(t).$implicit,a=p(3);return f(a.searchTag(c))}),s(1),n()}if(e&2){let t=o.$implicit;l(),u(" ",t," ")}}function Ee(e,o){if(e&1&&(i(0,"div",48)(1,"ul",49),v(2,Te,2,1,"li",50,w),n()()),e&2){let t=p(2);l(2),b(t.selectTag.sub_category)}}function Ie(e,o){if(e&1){let t=y();i(0,"li",13)(1,"p",46),d("click",function(){let c=x(t).$implicit,a=p();return f(a.selectTag=c)}),s(2),i(3,"span",47),s(4,"expand_more"),n()(),_(5,Ee,4,0,"div",48),n()}if(e&2){let t=o.$implicit,r=p();l(),m("ngClass",T(4,ye,r.selectTag===t)),l(),u(" ",t.main_category," "),l(),m("ngClass",T(6,fe,r.selectTag===t)),l(2),h(5,r.selectTag?5:-1)}}function Fe(e,o){if(e&1){let t=y();i(0,"tmf-input",52),G("ngModelChange",function(c){x(t);let a=p();return W(a.searchInputControl,c)||(a.searchInputControl=c),f(c)}),d("clickSearch",function(c){x(t);let a=p();return f(a.search(c))}),n()}if(e&2){let t=p();m("inputType",t.InputType.Search),P("ngModel",t.searchInputControl)}}function Be(e,o){if(e&1&&(i(0,"div",26),s(1),n()),e&2){let t=p();l(),u(" ",t.cartList.length," ")}}function je(e,o){if(e&1&&g(0,"img",55),e&2){let t=p().$implicit;m("src",t.image,M)}}function He(e,o){if(e&1){let t=y();i(0,"li",53),d("click",function(){let c=x(t).$implicit,a=p();return f(a.redirect("/course-detail/"+c.course_id))}),i(1,"div",54),_(2,je,1,1,"img",55),n(),i(3,"div",56)(4,"div",57)(5,"div",58),s(6),n(),i(7,"div",58),s(8),n()(),i(9,"p",59),s(10),n(),i(11,"div",60)(12,"p",61),s(13),n(),i(14,"p",62),s(15),n()()()()}if(e&2){let t=o.$implicit;l(2),h(2,t.image?2:-1),l(4),u(" ",t.main_category," "),l(2),u(" ",t.sub_category," "),l(2),u(" ",t.name," "),l(3),u(" ",t.quantity,"\u5802\u8AB2\u7A0B "),l(2),u("NT$\uFF1A",t.price,"")}}function Ve(e,o){if(e&1){let t=y();i(0,"div",34)(1,"button",63)(2,"span",64),s(3,"handshake"),n(),s(4," \u6211\u8981\u958B\u8AB2 "),n(),i(5,"button",65),d("click",function(){x(t);let c=p();return f(c.redirect("/login"))}),i(6,"span",64),s(7,"handshake"),n(),s(8," \u767B\u5165/\u8A3B\u518A "),n()()}}function Le(e,o){if(e&1&&g(0,"img",68),e&2){let t=p(2);m("src",t.user.avator_image,M)}}function $e(e,o){if(e&1){let t=y();i(0,"li",73),d("click",function(){let c=x(t).$implicit,a=p(3);return f(a.handleMenuClick(c))}),i(1,"span",74),s(2),n(),i(3,"p"),s(4),n()()}if(e&2){let t=o.$implicit,r=o.$index,c=o.$count,a=p(),S=a.$index,A=a.$count;m("ngClass",T(3,Ce,r===c-1&&S!==A-1)),l(2),k(t.icon),l(2),k(t.label)}}function Ae(e,o){if(e&1&&v(0,$e,5,5,"li",72,w),e&2){let t=o.$implicit;b(t)}}function Me(e,o){if(e&1&&(i(0,"div",66)(1,"div",67),_(2,Le,1,1,"img",68),n(),i(3,"p",69),s(4),n(),i(5,"div",70)(6,"ul",71),v(7,Ae,2,0,null,null,w),n()()()),e&2){let t=p();l(2),h(2,t.user.avator_image?2:-1),l(2),u(" ",t.user.nick_name," "),l(3),b(t.userMenuList)}}function Oe(e,o){if(e&1&&g(0,"tmf-option",42),e&2){let t=o.$implicit;m("value",t.value)("label",t.label)}}function De(e,o){if(e&1){let t=y();i(0,"li",78),d("click",function(){let c=x(t).$implicit,a=p(3);return a.searchTag(c),f(a.toggleSidenav())}),s(1),n()}if(e&2){let t=o.$implicit,r=p(3);m("ngClass",T(2,we,r.currentTag===t)),l(),u(" ",t," ")}}function ze(e,o){if(e&1&&(i(0,"ul",76),v(1,De,2,4,"li",77,w),n()),e&2){let t=p().$implicit;l(),b(t.sub_category)}}function Ue(e,o){if(e&1){let t=y();i(0,"li",75),d("click",function(){let c=x(t).$implicit,a=p();return f(a.toggleSelectTag(c))}),s(1),i(2,"span",47),s(3,"expand_more"),n()(),_(4,ze,3,0,"ul",76)}if(e&2){let t=o.$implicit,r=p();l(),u(" ",t.main_category," "),l(),m("ngClass",T(3,fe,r.selectTag===t)),l(2),h(4,r.selectTag===t?4:-1)}}function Re(e,o){if(e&1){let t=y();i(0,"div",44)(1,"button",79)(2,"span",64),s(3,"handshake"),n(),s(4," \u6211\u8981\u958B\u8AB2 "),n(),i(5,"button",80),d("click",function(){x(t);let c=p();return f(c.redirect("/login"))}),i(6,"span",64),s(7,"handshake"),n(),s(8," \u767B\u5165/\u8A3B\u518A "),n()()}}var _e=(()=>{let o=class o{constructor(){this.userService=C(me),this.router=C($),this.authStatusService=C(ue),this.shopService=C(pe),this.commonService=C(ce),this.cartService=C(de),this.user=null,this.cityOptions=[],this.selectCityControl=new ee,this.tagOptions=[],this.currentTag="",this.isIndex=!1,this.isOpen=!1,this.userMenuList=[[{icon:"face",label:"\u57FA\u672C\u8CC7\u8A0A\u7BA1\u7406"},{icon:"favorite",label:"\u6536\u85CF\u8AB2\u7A0B"},{icon:"calendar_today",label:"\u884C\u4E8B\u66C6"},{icon:"book",label:"\u5DF2\u8CFC\u8CB7\u8AB2\u7A0B"},{icon:"account_balance_wallet",label:"\u4EA4\u6613\u7D00\u9304"},{icon:"favorite_border",label:"\u559C\u597D\u985E\u5225"}],[{icon:"question_answer",label:"\u8A0A\u606F"},{icon:"notifications",label:"\u516C\u544A"}],[{icon:"logout",label:"\u767B\u51FA"}]],this.cartList=[],this.cartTotal={courseCount:0,total:0},this.searchInputControl="",this.InputType=oe}ngOnInit(){this.getOptions(),this.authStatusService.loginStatus$().subscribe(r=>{r?(this.getUserInfo(),this.getCartList()):this.user=null}),this.setIsIndex(window.location.pathname),this.router.events.subscribe(r=>{r instanceof L&&this.setIsIndex(r.url)}),this.cartService.cartChange$.subscribe(()=>{this.getCartList()})}setIsIndex(r){this.isIndex=r==="/home"}getOptions(){this.commonService.apiCommonOptionsCityPost({cityRequestModel:{is_oversea:!1}}).subscribe(r=>{this.cityOptions=[{label:"\u63A2\u7D22\u5168\u90E8",value:"all"},...r.data],this.toggleSelectCity(this.cityOptions[0])}),this.commonService.apiCommonTagGet().subscribe(r=>{this.tagOptions=r.data})}getUserInfo(){this.userService.apiUserUserInfoGet().subscribe({next:r=>{this.user=r.data},error:r=>{console.error(r)}})}getCartList(){this.shopService.apiShopCartGet().subscribe(r=>{this.cartList=[...r.data],this.cartTotal={courseCount:r.data.length,total:r.data.reduce((c,a)=>c+a.price,0)}})}toggleSidenav(){this.isOpen=!this.isOpen}toggleSelectCity(r){if(r.value===this.selectCityControl.value){this.selectCityControl.setValue(null),this.selectCity=null;return}this.selectCityControl.setValue(r.value),this.selectCity=r}toggleSelectTag(r){if(r===this.selectTag){this.selectTag=null;return}this.selectTag=r}redirect(r){this.router.navigate([r])}handleMenuClick(r){switch(r.label){case"\u57FA\u672C\u8CC7\u8A0A\u7BA1\u7406":this.router.navigate(["/student/info"]);break;case"\u6536\u85CF\u8AB2\u7A0B":this.router.navigate(["/student/favorites"]);break;case"\u884C\u4E8B\u66C6":this.router.navigate(["/student/calendar"]);break;case"\u5DF2\u8CFC\u8CB7\u8AB2\u7A0B":this.router.navigate(["/student/courses"]);break;case"\u4EA4\u6613\u7D00\u9304":this.router.navigate(["/student/record"]);break;case"\u559C\u597D\u985E\u5225":this.router.navigate(["/student/preference"]);break;case"\u767B\u51FA":this.authStatusService.logout(),this.router.navigate(["/login"]);break;default:break}}search(r){let c=r.value.trim();c?this.router.navigateByUrl(`/result-keyword?keyword=${c}`):this.router.navigateByUrl("/result-tag")}searchCity(r){if(r==="all"){this.router.navigateByUrl("/result-tag");return}this.router.navigateByUrl(`/result-tag?cityId=${r}`)}searchTag(r){this.router.navigateByUrl(`/result-tag?mainCategory=${this.selectTag?.main_category}&subCategory=${r}`)}};o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=E({type:o,selectors:[["app-header"]],standalone:!0,features:[I],decls:68,vars:18,consts:[[1,"relative","z-10","flex","justify-center","border-b","border-tmf-gray-5"],[1,"relative","flex","h-[64px]","w-full","items-center","justify-between","px-6","md:px-[32px]","lg:h-[80px]","lg:max-w-[1280px]"],[1,"relative","hidden","h-full","items-center","justify-center","gap-x-6","lg:flex"],[1,"group","flex","h-full","items-center","gap-x-[2px]"],[1,"material-icons-outlined","text-[20px]","text-tmf-orange-1"],[1,"text-[16px]","leading-6"],[1,"absolute","right-0","top-full","hidden","w-[120px]","rounded-b-[12px]","border-t","border-tmf-purple","bg-white","py-3","pt-[8px]","shadow-lg","group-hover:block","lg:left-0","lg:pt-[16px]"],[1,"h-[240px]","overflow-y-auto","rounded-b-[12px]","bg-white"],[1,"flex","w-full","cursor-pointer","items-start","justify-start","gap-x-3","bg-white","px-[16px]","py-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2"],[1,"group","relative","flex","h-full","items-center","gap-x-[2px]"],[1,"material-icons-outlined","text-[20px]","text-tmf-gray-4","duration-100","group-hover:-rotate-90"],[1,"absolute","left-0","top-full","hidden","h-[240px]","overflow-hidden","rounded-b-lg","border-t","border-tmf-purple","bg-white","py-3","shadow-lg","group-hover:block",3,"ngClass"],[1,"h-full","w-[150px]","overflow-y-auto","rounded-b-[12px]","bg-white"],[1,"flex","w-full","cursor-pointer","items-start","justify-center","gap-x-3","bg-white","duration-100"],["placeholder","\u5FEB\u901F\u641C\u5C0B",1,"invisible","w-[200px]","xl:visible",3,"inputType","ngModel"],[1,"flex","cursor-pointer","lg:hidden",3,"click"],[1,"material-icons-outlined","text-[24px]","text-tmf-gray-4"],["src","assets/images/logo.svg","alt","logo",1,"h-[33px]","cursor-pointer","lg:absolute","lg:left-[50%]","lg:h-[54px]","lg:-translate-x-[50%]",3,"click"],[1,"flex","items-center","justify-end","gap-x-10"],[1,"mt-2","flex","justify-center","gap-x-4"],[1,"relative","cursor-pointer"],[1,"flex","h-[40px]","w-[48px]","cursor-pointer","items-center","justify-center","rounded-lg","p-2","duration-100","hover:bg-tmf-gray-6","active:bg-tmf-gray-5"],[1,"material-icons-outlined"],[1,"absolute","right-2","top-2","h-[6px]","w-[6px]","rounded-full","bg-tmf-orange-1"],[1,"group","relative"],[1,"material-icons-outlined","cursor-pointer"],[1,"absolute","right-2","top-1","flex","h-4","w-4","items-center","justify-center","rounded-full","border-2","border-white","bg-tmf-orange-1","text-[10px]","font-semibold","text-white"],[1,"absolute","right-0","top-full","hidden","bg-white","pt-[8px]","group-hover:block","lg:left-0","lg:pt-[16px]"],[1,"w-[320px]","rounded-b-[12px]","border-t","border-tmf-purple","bg-white","py-3","shadow-lg"],[1,"flex","min-h-[92px]","w-full","cursor-pointer","items-start","justify-start","gap-x-3","border-b","border-tmf-gray-5","bg-white","px-[16px]","py-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2"],[1,"flex","min-h-[84px]","w-full","flex-col","items-start","bg-white","px-[16px]","py-3"],[1,"text-[14px]","leading-5","text-tmf-gray-3"],[1,"flex","w-full","items-center","justify-between","self-end","text-[16px]","leading-6"],[1,"cursor-pointer","rounded-lg","bg-tmf-orange-1","px-4","py-2","font-bold","text-white",3,"click"],[1,"hidden","items-center","justify-center","gap-x-4","lg:flex"],[1,"fixed","left-0","top-0","h-screen","w-full",3,"ngClass"],[1,"h-full","w-full","bg-tmf-gray-5","duration-100",3,"click"],[1,"absolute","left-0","top-0","flex","h-full","w-[320px]","flex-col","overflow-auto","bg-white","px-6","py-8","!opacity-100"],[1,"material-icons-outlined","mb-5","cursor-pointer","text-[24px]","text-tmf-gray-2",3,"click"],[1,"mb-5","flex","items-center","gap-4"],[1,"whitespace-nowrap","text-[16px]","font-bold","leading-6"],[1,"!w-full","max-w-[180px]",3,"selectChange","formControl","icon"],[3,"value","label"],[1,"mb-[40px]","flex","flex-grow","flex-col"],[1,"flex","flex-col","items-center","justify-center","gap-4"],[1,"flex","w-full","cursor-pointer","items-start","justify-start","gap-x-3","bg-white","px-[16px]","py-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"click"],[1,"flex","items-center","gap-2","px-[16px]","py-3","active:bg-tmf-orange-2",3,"click","ngClass"],[1,"material-icons-outlined","text-tmf-gray-4","duration-100",3,"ngClass"],[1,"absolute","right-0","top-0","h-[240px]","w-[200px]","overflow-y-auto","bg-white","py-3"],[1,"grid","grid-cols-2"],[1,"relative","col-span-1","flex","h-fit","justify-center","px-[16px]","py-3","text-center","hover:bg-tmf-orange-3","active:bg-tmf-orange-2"],[1,"relative","col-span-1","flex","h-fit","justify-center","px-[16px]","py-3","text-center","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"click"],["placeholder","\u5FEB\u901F\u641C\u5C0B",1,"invisible","w-[200px]","xl:visible",3,"ngModelChange","clickSearch","inputType","ngModel"],[1,"flex","min-h-[92px]","w-full","cursor-pointer","items-start","justify-start","gap-x-3","border-b","border-tmf-gray-5","bg-white","px-[16px]","py-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"click"],[1,"h-[48px]","w-[84px]","bg-tmf-gray-3"],["alt","",1,"h-full","w-full",3,"src"],[1,"flex","flex-grow","flex-col"],[1,"mb-1","flex","flex-wrap","gap-2"],[1,"flex","h-[24px]","items-center","justify-center","rounded","bg-tmf-gray-5","p-1","text-[12px]","leading-4"],[1,"mb-2","text-[14px]","font-bold","leading-5"],[1,"flex","items-center","justify-between","text-[14px]","leading-5"],[1,"text-tmf-gray-3"],[1,"font-medium"],[1,"flex","h-[40px]","w-[120px]","items-center","justify-center","gap-x-1","rounded-lg","border-2","border-tmf-orange-1","text-tmf-orange-1","duration-100","hover:bg-tmf-orange-1","hover:text-white","active:bg-tmf-orange-2","active:text-white"],[1,"material-icons-outlined","!text-[18px]"],[1,"flex","h-[40px]","w-[120px]","items-center","justify-center","gap-x-1","rounded-lg","bg-tmf-orange-1","text-white","duration-100","hover:bg-tmf-orange-2","active:bg-tmf-orange-1",3,"click"],[1,"group","relative","flex","items-center","justify-center","gap-x-2"],[1,"h-[44px]","w-[44px]","shrink-0","overflow-hidden","rounded-full","bg-tmf-gray-5"],["alt","avator_image",3,"src"],[1,"hidden","text-[18px]","font-medium","leading-7","lg:block"],[1,"absolute","right-0","top-full","hidden","pt-[10px]","group-hover:block","lg:left-0","lg:pt-[18px]"],[1,"w-[200px]","rounded-b-[12px]","border-t","border-tmf-purple","bg-white","py-3","shadow-lg"],[1,"flex","h-[48px]","w-full","cursor-pointer","items-center","justify-start","gap-x-2","px-[26px]","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"ngClass"],[1,"flex","h-[48px]","w-full","cursor-pointer","items-center","justify-start","gap-x-2","px-[26px]","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"click","ngClass"],[1,"material-icons-outlined","text-tmf-gray-4"],[1,"flex","h-[48px]","flex-shrink-0","items-center","justify-between","border-b","border-tmf-gray-6",3,"click"],[1,"max-h-[300px]","overflow-auto"],[1,"flex","h-[48px]","items-center","justify-between","border-b","border-tmf-gray-6","px-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"ngClass"],[1,"flex","h-[48px]","items-center","justify-between","border-b","border-tmf-gray-6","px-2","duration-100","hover:bg-tmf-orange-3","active:bg-tmf-orange-2",3,"click","ngClass"],[1,"flex","h-[50px]","w-full","items-center","justify-center","gap-x-1","rounded-lg","border-2","border-tmf-orange-1","text-tmf-orange-1","duration-100","hover:bg-tmf-orange-1","hover:text-white","active:bg-tmf-orange-2","active:text-white"],[1,"flex","h-[50px]","w-full","items-center","justify-center","gap-x-1","rounded-lg","bg-tmf-orange-1","text-white","duration-100","hover:bg-tmf-orange-2","active:bg-tmf-orange-1",3,"click"]],template:function(c,a){c&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),s(5,"pin_drop"),n(),_(6,Se,2,1,"p",5),i(7,"div",6)(8,"ul",7),v(9,ke,3,1,"li",8,w),n()()(),i(11,"span"),s(12," | "),n(),i(13,"div",9)(14,"span",10),s(15,"expand_more"),n(),i(16,"p",5),s(17,"\u63A2\u7D22"),n(),i(18,"div",11)(19,"ul",12),v(20,Ie,6,8,"li",13,w),n()()(),_(22,Fe,1,2,"tmf-input",14),n(),i(23,"button",15),d("click",function(){return a.toggleSidenav()}),i(24,"span",16),s(25,"menu"),n()(),i(26,"img",17),d("click",function(){return a.redirect("/home")}),n(),i(27,"div",18)(28,"div",19)(29,"div",20)(30,"button",21)(31,"span",22),s(32,"notifications"),n(),g(33,"div",23),n()(),i(34,"div",24)(35,"button",21)(36,"span",25),s(37,"shopping_cart"),n(),_(38,Be,2,1,"div",26),n(),i(39,"div",27)(40,"ul",28),v(41,He,16,6,"li",29,w),i(43,"li",30)(44,"p",31),s(45),n(),i(46,"div",32)(47,"p"),s(48),n(),i(49,"button",33),d("click",function(){return a.redirect("/cart")}),s(50," \u524D\u5F80\u7D50\u5E33 "),n()()()()()()(),_(51,Ve,9,0,"div",34)(52,Me,9,2),n()()(),i(53,"div",35)(54,"div",36),d("click",function(){return a.toggleSidenav()}),n(),i(55,"div",37)(56,"span",38),d("click",function(){return a.toggleSidenav()}),s(57,"close"),n(),i(58,"div",39)(59,"p",40),s(60," \u9078\u64C7\u5730\u5340 "),n(),i(61,"tmf-select",41),d("selectChange",function(A){return a.searchCity(A),a.toggleSidenav()}),v(62,Oe,1,2,"tmf-option",42,w),n()(),i(64,"ul",43),v(65,Ue,5,5,null,null,w),n(),_(67,Re,9,0,"div",44),n()()),c&2&&(l(6),h(6,a.selectCity?6:-1),l(3),b(a.cityOptions),l(9),m("ngClass",T(13,ve,a.selectTag)),l(2),b(a.tagOptions),l(2),h(22,a.isIndex?-1:22),l(16),h(38,a.cartList&&a.cartList.length>0?38:-1),l(3),b(a.cartList),l(4),u(" \u5171\u8A08 ",a.cartTotal.courseCount," \u9805\u8AB2\u7A0B "),l(3),u("\u7E3D\u8A08 NT$ ",a.cartTotal.total,""),l(3),h(51,a.user?52:51),l(2),m("ngClass",q(15,be,!a.isOpen,a.isOpen)),l(),m("@fade",a.isOpen?"fade-in":"fade-out"),l(),m("@transform",a.isOpen?"open":"void"),l(6),m("formControl",a.selectCityControl)("icon","pin_drop"),l(),b(a.cityOptions),l(3),b(a.tagOptions),l(2),h(67,a.user?-1:67))},dependencies:[V,X,re,Y,ie,se,le,ae,ne,te],styles:["[_nghost-%COMP%]{display:block}"],data:{animation:[U.sidenavAnimation,U.backdropAnimation]}});let e=o;return e})();var he=(()=>{let o=class o{};o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=E({type:o,selectors:[["app-footer"]],standalone:!0,features:[I],decls:25,vars:0,consts:[[1,"bg_image","flex","h-[372px]","items-center","justify-center","bg-tmf-gray-1","px-5","lg:h-[248px]"],[1,"w-full","max-w-[1280px]"],[1,"mb-[48px]","flex","flex-col","items-center","lg:mb-3","lg:flex-row","lg:items-end","lg:justify-between"],["src","/assets/images/footer-logo.svg","alt","",1,"mb-[29px]","w-[200px]","lg:mb-0"],[1,"flex","flex-wrap","justify-center","gap-x-8","gap-y-5","text-[14px]","leading-5","text-white"],[1,"cursor-pointer"],[1,"flex","flex-col","items-center","gap-y-4","lg:flex-row","lg:items-end","lg:justify-between"],[1,"order-2","text-center","text-[14px]","leading-5","text-white","lg:order-1"],[1,"order-1","flex","gap-x-4","lg:order-2"],[1,"flex","h-[40px]","w-[40px]","cursor-pointer","items-center","justify-center","rounded-full","border","border-tmf-orange-2"],["src","assets/images/line.png","alt","line"],["src","assets/images/youtube.png","alt","youtube"],["src","assets/images/facebook.png","alt","facebook"]],template:function(c,a){c&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),g(3,"img",3),i(4,"ul",4)(5,"li",5),s(6,"\u6559\u5E2B\u62DB\u52DF"),n(),i(7,"li",5),s(8,"\u670D\u52D9\u689D\u6B3E"),n(),i(9,"li",5),s(10,"\u95DC\u65BC\u6211\u5011"),n(),i(11,"li",5),s(12,"\u96B1\u79C1\u6B0A\u653F\u7B56"),n(),i(13,"li",5),s(14,"\u4F7F\u7528\u8005\u689D\u6B3E"),n()()(),i(15,"div",6)(16,"p",7),s(17," copyright \xA9 2024 Zhong Feng Lin Fiber Technology Co.,Ltd "),n(),i(18,"ul",8)(19,"li",9),g(20,"img",10),n(),i(21,"li",9),g(22,"img",11),n(),i(23,"li",9),g(24,"img",12),n()()()()())},dependencies:[V],styles:["[_nghost-%COMP%]{display:block}.bg_image[_ngcontent-%COMP%]{background-image:url(/assets/images/footer-bg.png);background-size:auto 210px;background-repeat:no-repeat;background-position:bottom left}@media (max-width: 1024px){.bg_image[_ngcontent-%COMP%]{background-size:auto 100%;background-position:bottom center}}"]});let e=o;return e})();var Ne=()=>["bg-tmf-orange-1","!text-white"],Pe=()=>({exact:!0});function We(e,o){e&1&&(i(0,"main",2),g(1,"router-outlet"),n())}function Ge(e,o){if(e&1&&(i(0,"li",10)(1,"a",15)(2,"span",12),s(3),n(),i(4,"p",13),s(5),n()()()),e&2){let t=o.$implicit;m("routerLinkActive",O(5,Ne))("routerLinkActiveOptions",O(6,Pe)),l(),m("routerLink",t.path),l(2),k(t.icon),l(2),k(t.title)}}function qe(e,o){if(e&1&&(i(0,"main",4)(1,"div",5)(2,"div",6)(3,"p",7),s(4,"\u500B\u4EBA\u7BA1\u7406"),n(),i(5,"div",8),s(6),n()(),i(7,"ul",9),v(8,Ge,6,7,"li",10,N),n(),i(10,"a",11)(11,"span",12),s(12,"restart_alt"),n(),i(13,"p",13),s(14),n()()(),i(15,"div",14),g(16,"router-outlet"),n()()),e&2){let t=p();l(6),u(" ",t.identityText()," "),l(2),b(t.menuList()),l(2),m("routerLink",t.changeIdentity().path),l(4),u("\u5207\u63DB\u70BA",t.changeIdentity().text,"")}}var vt=(()=>{let o=class o{constructor(){this.router=C($),this.menuService=C(ge),this.state=null,this.menuList=this.menuService.menuListSig,this.identity=this.menuService.identitySig,this.identityText=D(()=>this.identity()==="student"?"\u5B78\u751F":"\u8001\u5E2B"),this.changeIdentity=D(()=>({text:this.identity()==="student"?"\u8001\u5E2B":"\u5B78\u751F",path:this.identity()==="student"?"/teacher":"/student"})),this.router.events.pipe(R(r=>r instanceof L)).subscribe(r=>{let c=r.url;c.startsWith("/student")?this.menuService.updateMenuList("student"):c.startsWith("/teacher/")?this.menuService.updateMenuList("teacher"):this.menuService.updateMenuList("default")})}};o.\u0275fac=function(c){return new(c||o)},o.\u0275cmp=E({type:o,selectors:[["app-layout"]],standalone:!0,features:[I],decls:5,vars:1,consts:[[1,"flex","min-h-[100vh]","flex-col"],[1,"relative","z-50"],[1,"relative","z-40","flex-grow"],[1,"relative","z-30"],[1,"container","flex-grow","relative","z-40","mx-auto","mb-12","mt-6","gap-6","sm:flex","xl:max-w-screen-xl"],[1,"max-h-[768px]","hidden","rounded-xl","bg-white","p-6","shadow-lg","sm:block","sm:min-w-[13.25rem]","xl:min-w-[18.875rem]"],[1,"mb-6","flex","items-center","justify-between"],[1,"text-xl","font-bold"],[1,"rounded","bg-tmf-gray-7","px-2","py-1","text-base","font-bold","text-tmf-orange-1"],[1,"mb-6","flex","min-h-[36.5rem]","flex-col","gap-1"],[1,"cursor-pointer","rounded-xl","text-tmf-gray-2","hover:bg-tmf-orange-1","hover:text-white",3,"routerLinkActive","routerLinkActiveOptions"],[1,"flex","cursor-pointer","items-center","justify-between","gap-3","rounded-xl","p-4","text-tmf-gray-2","hover:bg-tmf-orange-1","hover:text-white",3,"routerLink"],[1,"material-icons-outlined"],[1,"grow"],[1,"mx-3","rounded-2xl","bg-white","px-5","py-6","shadow-lg","sm:mx-0","sm:w-full"],[1,"flex","items-center","justify-between","gap-3","p-4",3,"routerLink"]],template:function(c,a){c&1&&(i(0,"div",0),g(1,"app-header",1),_(2,We,2,0,"main",2)(3,qe,17,3),g(4,"app-footer",3),n()),c&2&&(l(2),h(2,a.identity()==="default"?2:3))},dependencies:[Q,Z,J,K,_e,he]});let e=o;return e})();export{vt as default};
