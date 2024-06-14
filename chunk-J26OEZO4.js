import{a as Q,b as W,c as q}from"./chunk-QVL3Q6YI.js";import{a as I}from"./chunk-GM4N3GNB.js";import{a as L}from"./chunk-2KSCU7BU.js";import{a as H}from"./chunk-PQD4ILLG.js";import"./chunk-GL75ZD2U.js";import"./chunk-G3VASWH4.js";import{c as N,d as R,f as V,g as $}from"./chunk-46LA73KG.js";import"./chunk-CYY5G2DS.js";import"./chunk-FAIBOK5A.js";import"./chunk-FRTGBFSG.js";import{k as P,l as O,t as M}from"./chunk-PEBBI2ND.js";import{Cb as j,Da as b,Eb as s,Fa as m,Ra as A,Xa as v,Z as E,Za as d,ca as f,db as D,eb as h,fb as e,gb as t,hb as i,ib as y,jb as S,la as C,lb as w,ma as B,ob as g,tb as _,ub as k,vb as T,xb as u}from"./chunk-P6ATHD64.js";import"./chunk-TMC7WMLO.js";var z=["section"],G=(a,o)=>o.title,p=a=>({active:a});function J(a,o){if(a&1&&(y(0),i(1,"tmf-video-card",97),S()),a&2){let c=o.$implicit;m(),d("data",c)}}function K(a,o){if(a&1&&i(0,"tmf-card",96),a&2){let c=o.$implicit;d("hoverEffect",!1)("data",c)}}var de=(()=>{let o=class o{constructor(){this.activeSection=A("sectionA"),this.cardData=W,this.videoData=Q,this.router=E(V),this.route=E(R)}ngOnInit(){this.router.events.subscribe(r=>{if(r instanceof N){let n=this.route.snapshot.fragment;n&&this.scrollToFragment(n)}})}onWindowScroll(r){this.updateActiveSection()}scrollToFragment(r){let n=this.sections.find(l=>l.nativeElement.id===r);n&&n.nativeElement.scrollIntoView({behavior:"smooth",block:"center"})}updateActiveSection(){let r=this.activeSection();this.sections.forEach(n=>{let l=n.nativeElement.getBoundingClientRect().top,x=n.nativeElement.getBoundingClientRect().bottom;l<=window.innerHeight/4&&x>window.innerHeight/4&&(r=n.nativeElement.getAttribute("id")||"")}),this.activeSection.set(r)}navigateToTeacherDetail(r){this.router.navigate([`teacher-detail/${r}`])}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=f({type:o,selectors:[["app-course-detail-page"]],viewQuery:function(n,l){if(n&1&&_(z,5),n&2){let x;k(x=T())&&(l.sections=x)}},hostBindings:function(n,l){n&1&&g("scroll",function(F){return l.onWindowScroll(F)},!1,b)},standalone:!0,features:[j],decls:250,vars:16,consts:[["section",""],[1,"relative"],[1,"relative","w-full","h-[538px]","bg-[url('./assets/images/guitar-course.png')]","bg-center","bg-no-repeat","bg-cover","xl:h-[575px]"],[1,"w-full","h-full","px-3","pt-6","pb-12","bg-[#10101099]","backdrop-blur-[8px]","xl:p-0","xl:flex","xl:items-center"],[1,"flex","flex-col","gap-6","xl:w-[1280px]","xl:container","xl:flex-row","xl:mx-auto","xl:justify-between"],[1,"w-[349px]","h-[196px]","box-content","rounded-xl","overflow-hidden","border","border-tmf-gray-4","shadow-lg","xl:w-[737px]","xl:h-[415px]"],["src","./assets/images/guitar-course.png","alt","",1,"w-full","h-full"],[1,"flex","flex-col","gap-3","xl:flex-grow","xl:py-3"],[1,"flex","items-center","gap-3","xl:pb-6"],[1,"inline-block","p-1","text-tmf-yellow-1","rounded","text-xs","font-bold","bg-[#180000]","xl:p-2","xl:text-sm"],[1,"flex","items-center","gap-2"],["src","https://fakeimg.pl/32/","alt","",1,"w-8","h-8","rounded-full","border","border-tmf-gray-6"],[1,"text-base","font-medium","text-white","cursor-pointer",3,"click"],[1,"text-lg","font-bold","text-white","xl:text-3xl"],[1,"flex","items-center","gap-3"],[1,"flex","justify-center","items-center","gap-1","text-white","xl:pr-[0.6875rem]","xl:border-r","xl:border-tmf-gray-4"],[1,"text-xl","leading-5","material-symbols-outlined"],[1,"flex","justify-center","items-center","h-full","gap-1","text-white","xl:pr-[0.6875rem]","xl:border-r","xl:border-tmf-gray-4"],[3,"rating"],[1,"text-sm","font-medium"],[1,"hidden","items-center","gap-1","text-white","xl:flex"],[1,"flex","justify-start","items-center","gap-1","text-white","xl:hidden"],[1,"flex","items-center","gap-3","pt-6","xl:flex-grow","xl:items-end","xl:pt-0"],[1,"py-2","px-4","gap-1","text-tmf-orange-1","bg-white","rounded-lg","border","border-white"],[1,"flex","justify-center","items-center"],[1,"text-sm"],[1,"py-2","px-4","gap-1","text-white","bg-transparent","rounded-lg","border","border-white"],[1,"w-full","h-0.5","bg-gradient-to-r","from-[#F7F7F7]","via-[#8D0099]","to-[#F7F7F7]"],[1,"sticky","top-0","px-3","pt-3","pb-4","border-b","border-tmf-gray-5","bg-white","z-50"],[1,"flex","items-center","justify-between","gap-[1.875rem]","text-base","text-tmf-gray-3","xl:container","xl:mx-auto","xl:w-[1280px]","xl:justify-start","xl:gap-8"],["routerLink","/course-detail/Test","fragment","sectionA",1,"py-3",3,"ngClass"],["routerLink","/course-detail/Test","fragment","sectionB",1,"py-3",3,"ngClass"],["routerLink","/course-detail/Test","fragment","sectionC",1,"py-3",3,"ngClass"],["routerLink","/course-detail/Test","fragment","sectionD",1,"py-3",3,"ngClass"],[1,"pt-6","pb-12","px-3","flex","flex-col","gap-6","xl:w-[1280px]","xl:container","xl:mx-auto","xl:flex-row","xl:pl-0","xl:pt-10","xl:pb-20"],[1,"flex","flex-col","gap-12","mb-6","xl:w-[845px]","xl:pr-6"],["id","sectionA"],[1,"flex","justify-start","items-center","gap-2","mb-4"],["src","assets/images/cart-collect.png","alt","",1,"w-5","h-5","xl:w-6","xl:h-6"],[1,"text-xl","font-bold","xl:text-2xl"],[1,"text-sm","text-tmf-gray-2","mb-4","xl:text-base"],[1,"flex","gap-[0.9375rem]","justify-between","items-center","w-full","pb-8","overflow-x-auto","custom-scrollbar"],[4,"ngFor","ngForOf"],["id","sectionB"],[1,"w-full","pb-8","overflow-x-auto","custom-scrollbar"],["id","sectionC"],[1,"flex","justify-between","mb-4"],[1,"flex","justify-start","items-center","gap-2","h-7"],[1,"py-[0.4375rem]","pl-4","pr-2","border","border-tmf-orange-1","rounded-lg","bg-white"],[1,"flex","gap-1","items-center","text-tmf-orange-1"],[1,"text-sm","font-normal"],[1,"text-xl","leading-5","material-icons-outlined"],[1,"flex","flex-col","gap-4"],[1,"flex","flex-col","gap-3","border","p-3","border-tmf-gray-5","rounded-xl","bg-white","xl:p-6","xl:gap-6"],[1,"flex","justify-between","items-center"],["src","https://fakeimg.pl/48/","alt","",1,"w-12","h-12","rounded-full","border","border-tmf-gray-6"],[1,"text-base","font-medium","text-tmf-gray-2","mb-1"],[1,"text-sm","font-medium","text-tmf-gray-4","hidden","xl:block","xl:self-start"],[1,"text-lg","font-bold","text-tmf-gray-2","mb-3"],[1,"text-sm","text-tmf-gray-3"],[1,"text-sm","font-medium","text-tmf-gray-4","xl:hidden"],["id","sectionD"],[1,"flex","flex-col","gap-3","p-3","border","rounded-xl","border-tmf-orange-2","bg-white","xl:p-6","xl:gap-6"],[1,"flex","items-center","gap-2","xl:gap-6"],["src","https://fakeimg.pl/64/","alt","",1,"w-16","h-16","rounded-full","border","border-tmf-gray-6","xl:w-20","xl:h-20"],[1,"text-lg","font-medium","text-tmf-gray-2","xl:text-2xl","xl:mb-1"],[1,"text-sm","font-medium","text-tmf-gray-4"],[1,"text-base","text-tmf-gray-2"],[1,"text-xs","text-tmf-gray-4","mb-1","xl:text-sm"],[1,"list-disc","pl-6","text-sm","font-medium","text-tmf-gray-2","xl:text-sm"],[1,"flex","justify-end"],[1,"text-sm","xl:text-base"],[1,"w-full"],[1,"flex","flex-col","gap-3","border","border-tmf-gray-5","rounded-xl","bg-white","p-3","xl:p-6","xl:gap-6","xl:shadow-lg","xl:border-0"],[1,"text-xl","font-bold","text-tmf-gray-2"],[1,"flex","flex-col","gap-3"],[1,"custom-radio"],["type","radio","name","course","id","one",1,"hidden"],[1,"text-sm","font-bold","text-tmf-gray-3","mb-1","xl:mb-2"],[1,"flex","gap-1","text-lg","font-medium","text-tmf-gray-2","xl:text-2xl"],[1,"invisible","text-[32px]","leading-[32px]","text-tmf-orange-1","material-symbols-outlined","xl:text-[32px]","xl:leading-8"],["type","radio","name","course","id","ten",1,"hidden"],[1,"flex","justify-between","items-center","gap-3","pb-6","border-b","border-tmf-gray-5","border-dashed"],[1,"flex-grow","text-base","font-bold","text-white","rounded-lg","py-2.5","bg-tmf-orange-1","xl:py-3","xl:text-lg"],[1,"bg-white","border","border-tmf-orange-1","rounded-lg","px-3","py-[0.6875rem]"],[1,"flex","items-center","text-xl","leading-5","text-tmf-orange-1","material-symbols-outlined","xl:text-[28px]","xl:leading-7"],[1,"text-sm","mb-3","text-tmf-gray-3","xl:text-base"],[1,"w-full","text-base","text-tmf-purple","rounded-lg","py-[0.6875rem]","bg-white","border","border-tmf-purple","xl:text-lg"],[1,"sticky","bottom-0","w-full","h-[92px]","bg-white","rounded-xl","px-4","py-3","custom-shadow","xl:hidden"],[1,"flex","gap-1","text-tmf-gray-3","text-sm"],[1,"flex","gap-1","text-tmf-gray-2","text-2xl","font-medium"],[1,"text-base","text-white","font-bold","bg-tmf-orange-1","px-4","py-3","rounded-lg"],[1,"hidden","bg-tmf-gray-7","pt-10","pb-20","xl:flex","xl:justify-center","xl:items-center"],[1,"xl:container","xl:w-[1280px]"],[1,"flex","justify-start","items-center","gap-2","mb-6"],[1,"flex","gap-6"],[3,"hoverEffect","data"],[3,"data"]],template:function(n,l){if(n&1){let x=w();e(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),i(5,"img",6),t(),e(6,"div",7)(7,"div",8)(8,"div",9),u(9," \u97F3\u6A02 "),t(),e(10,"div",9),u(11," \u5409\u4ED6 "),t()(),e(12,"div",10),i(13,"img",11),e(14,"p",12),g("click",function(){return C(x),B(l.navigateToTeacherDetail("teacherId"))}),u(15," Eric Clapton "),t()(),e(16,"h1",13),u(17," \u5F9E\u96F6\u958B\u59CB\u5B78\u5409\u4ED6\uFF1A\u521D\u5B78\u8005\u5165\u9580\u6307\u5357 "),t(),e(18,"div",14)(19,"div",15)(20,"span",16),u(21," pin_drop "),t(),e(22,"p"),u(23,"\u53F0\u5317\u5E02 \u6C38\u548C\u5340"),t()(),e(24,"div",17),i(25,"tmf-star-rating",18),e(26,"p",19),u(27,"5.0"),t(),e(28,"p",19),u(29,"(23)"),t()(),e(30,"div",20)(31,"span",16),u(32," face "),t(),e(33,"p"),u(34,"120 \u4EBA\u5B78\u7FD2"),t()()(),e(35,"div",21)(36,"span",16),u(37," face "),t(),e(38,"p"),u(39,"120 \u4EBA\u5B78\u7FD2"),t()(),e(40,"div",22)(41,"button",23)(42,"div",24)(43,"span",16),u(44," heart_plus "),t(),e(45,"p",25),u(46,"\u6536\u85CF\u8AB2\u7A0B"),t()()(),e(47,"button",26)(48,"div",24)(49,"span",16),u(50," share "),t(),e(51,"p",25),u(52,"\u5206\u4EAB\u8AB2\u7A0B"),t()()()()()()(),i(53,"div",27),t(),e(54,"nav",28)(55,"ul",29)(56,"li")(57,"a",30),u(58,"\u8AB2\u7A0B\u4ECB\u7D39"),t()(),e(59,"li")(60,"a",31),u(61,"\u6388\u8AB2\u6642\u9593"),t()(),e(62,"li")(63,"a",32),u(64,"\u5B78\u751F\u8A55\u8AD6"),t()(),e(65,"li")(66,"a",33),u(67,"\u6559\u5E2B\u5C65\u6B77"),t()()()(),e(68,"div",34)(69,"div",35)(70,"section",36,0)(72,"div",37),i(73,"img",38),e(74,"h2",39),u(75,"\u8AB2\u7A0B\u4ECB\u7D39"),t()(),e(76,"p",40),u(77," \u9019\u662F\u4E00\u500B\u91DD\u5C0D\u521D\u5B78\u8005\u6216\u6709\u4E00\u5B9A\u57FA\u790E\u7684\u5B78\u751F\u8A2D\u8A08\u7684\u6728\u5409\u4ED6\u5BB6\u6559\u8AB2\u7A0B\u3002\u8AB2\u7A0B\u65E8\u5728\u63D0\u4F9B\u4E00\u500B\u878D\u5408\u7406\u8AD6\u8207\u5BE6\u8E10\u7684\u5B78\u7FD2\u74B0\u5883\uFF0C\u8B93\u5B78\u751F\u80FD\u5920\u5168\u9762\u5730\u638C\u63E1\u6728\u5409\u4ED6\u6F14\u594F\u7684\u57FA\u672C\u6280\u5DE7\u548C\u97F3\u6A02\u77E5\u8B58\u3002"),i(78,"br")(79,"br"),u(80," \u8AB2\u7A0B\u5C07\u5F9E\u57FA\u790E\u958B\u59CB\uFF0C\u4ECB\u7D39\u6728\u5409\u4ED6\u7684\u69CB\u9020\u548C\u529F\u80FD,\u8B93\u5B78\u751F\u4E86\u89E3\u6728\u5409\u4ED6\u7684\u4E0D\u540C\u90E8\u5206\u53CA\u5176\u4F5C\u7528\u3002\u96A8\u5F8C,\u8AB2\u7A0B\u5C07\u91CD\u9EDE\u653E\u5728\u57FA\u672C\u7684\u5F48\u594F\u6280\u5DE7\u4E0A\uFF0C\u5305\u62EC\u624B\u6307\u7684\u59FF\u52E2\u3001\u548C\u5F26\u7684\u5F48\u594F\u548C\u9078\u64C7\u7B49\u3002\u900F\u904E\u7C21\u55AE\u6613\u61C2\u7684\u793A\u7BC4\u548C\u7DF4\u7FD2\uFF0C\u5B78\u751F\u5C07\u9010\u6B65\u57F9\u990A\u51FA\u826F\u597D\u7684\u6F14\u594F\u7FD2\u6163\u548C\u6280\u5DE7\u3002"),i(81,"br")(82,"br"),u(83," \u9664\u4E86\u6280\u5DE7\u8A13\u7DF4\uFF0C\u8AB2\u7A0B\u9084\u5C07\u6CE8\u91CD\u97F3\u6A02\u7406\u8AD6\u7684\u5B78\u7FD2\u3002\u5B78\u751F\u5C07\u5B78\u7FD2\u57FA\u672C\u7684\u6A02\u7406\u77E5\u8B58\uFF0C\u5305\u62EC\u97F3\u968E\u3001\u548C\u5F26\u7D50\u69CB\u3001\u7BC0\u594F\u7B49\uFF0C\u4E26\u5C07\u9019\u4E9B\u77E5\u8B58\u61C9\u7528\u5230\u5BE6\u969B\u7684\u6F14\u594F\u4E2D\u3002\u901A\u904E\u7406\u8AD6\u8207\u5BE6\u8E10\u7684\u7D50\u5408\uFF0C\u5B78\u751F\u5C07\u66F4\u6DF1\u5165\u5730\u7406\u89E3\u97F3\u6A02\uFF0C\u4E26\u80FD\u5920\u66F4\u9748\u6D3B\u5730\u904B\u7528\u5728\u6F14\u594F\u4E2D\u3002"),i(84,"br"),u(85," \u8AB2\u7A0B\u9084\u5C07\u6839\u64DA\u5B78\u751F\u7684\u8208\u8DA3\u548C\u76EE\u6A19,\u91CF\u8EAB\u5B9A\u5236\u6559\u5B78\u5167\u5BB9\u3002\u7121\u8AD6\u662F\u6D41\u884C\u97F3\u6A02\u3001\u53E4\u5178\u97F3\u6A02\u9084\u662F\u7235\u58EB\u6A02\uFF0C\u5B78\u751F\u90FD\u5C07\u6709\u6A5F\u6703\u5B78\u7FD2\u5230\u81EA\u5DF1\u559C\u611B\u7684\u97F3\u6A02\u98A8\u683C\u3002 "),t(),e(86,"div",41),v(87,J,2,1,"ng-container",42),t()(),e(88,"section",43,0)(90,"div",37),i(91,"img",38),e(92,"h2",39),u(93,"\u6388\u8AB2\u6642\u9593"),t()(),e(94,"div",44),i(95,"tmf-weekly-calendar"),t()(),e(96,"section",45,0)(98,"div",46)(99,"div",47),i(100,"img",38),e(101,"h2",39),u(102,"\u5B78\u751F\u8A55\u8AD6"),t()(),e(103,"button",48)(104,"div",49)(105,"span",50),u(106,"\u986F\u793A\u6240\u6709\u8A55\u50F9"),t(),e(107,"span",51),u(108," chevron_right "),t()()()(),e(109,"div",52)(110,"div",53)(111,"div",54)(112,"div",10),i(113,"img",55),e(114,"div")(115,"p",56),u(116,"\u533F\u540D"),t(),i(117,"tmf-star-rating",18),t()(),e(118,"div",57),u(119," 2024-03-01 "),t()(),e(120,"div")(121,"p",58),u(122," \u6E05\u695A\u660E\u767D\uFF01\u503C\u5F97\u8CFC\u8CB7\u7684\u512A\u79C0\u8AB2\u7A0B "),t(),e(123,"p",59),u(124," \u8C50\u5BCC\u7684\u7BC4\u4F8B\uFF0C\u7CBE\u7D30\u7684\u89E3\u8AAA\uFF0C\u5C24\u5176\u8001\u5E2B\u4E0D\u5ACC\u9EBB\u7169\u7DDA\u4E0A\u56DE\u7B54\uFF0C\u5F88\u6709\u7528\u4E14\u7CBE\u5BE6\uFF0C\u6C92\u592A\u591A\u5EE2\u8A71\u3002\u96D6\u7136\u8AB2\u7A0B\u6642\u9593\u4E0D\u9577\uFF0C\u4F46\u6BCF\u500B\u90FD\u662F\u7CBE\u83EF\uFF0C\u9700\u8981\u53CD\u8986\u601D\u8003\uFF01 "),t()(),e(125,"div",60),u(126," 2024-03-01 "),t()(),e(127,"div",53)(128,"div",54)(129,"div",10),i(130,"img",55),e(131,"div")(132,"p",56),u(133," \u738B\u6587\u5247 "),t(),i(134,"tmf-star-rating",18),t()(),e(135,"div",57),u(136," 2024-01-01 "),t()(),e(137,"div")(138,"p",58),u(139,"\u8001\u5E2B\u975E\u5E38\u5C08\u696D"),t(),e(140,"p",59),u(141," \u9019\u4F4D\u5409\u4ED6\u8001\u5E2B\u975E\u5E38\u5C08\u696D,\u6559\u5B78\u65B9\u6CD5\u7C21\u55AE\u6613\u61C2,\u6DF1\u53D7\u5B78\u751F\u6B61\u8FCE\u3002\u4ED6\u64C1\u6709\u8C50\u5BCC\u7684\u97F3\u6A02\u77E5\u8B58\u548C\u6F14\u594F\u6280\u5DE7,\u80FD\u5920\u6709\u6548\u5730\u6307\u5C0E\u5B78\u751F\u63D0\u9AD8\u5409\u4ED6\u6280\u80FD\u3002\u4ED6\u7684\u8010\u5FC3\u548C\u9F13\u52F5\u8B93\u5B78\u7FD2\u904E\u7A0B\u8B8A\u5F97\u8F15\u9B06\u6109\u5FEB,\u8B93\u6211\u5C0D\u5B78\u7FD2\u5409\u4ED6\u5145\u6EFF\u4FE1\u5FC3\u3002 "),t()(),e(142,"div",60),u(143," 2024-01-01 "),t()()()(),e(144,"section",61,0)(146,"div",37),i(147,"img",38),e(148,"h2",39),u(149,"\u6559\u5E2B\u5C65\u6B77"),t()(),e(150,"div",62)(151,"div",63),i(152,"img",64),e(153,"div")(154,"p",65),u(155," Eric Clapton "),t(),e(156,"p",66),u(157," \u7D2F\u7A4D\u5B8C\u6210 120 \u5802\u8AB2\u7A0B "),t()()(),e(158,"p",67),u(159," \u5927\u5BB6\u597D\uFF0C\u6211\u662F\u4E00\u4F4D\u81EA\u8A61\u70BA\u5409\u4ED6\u754C\u7684\u300C\u97F3\u6A02\u9B54\u8853\u5E2B\u300D\u3002\u5F9E\u5C0F\u5C31\u5922\u60F3\u8457\u7528\u5409\u4ED6\u5F81\u670D\u4E16\u754C\uFF0C\u7D50\u679C\u767C\u73FE\u4E16\u754C\u6C92\u90A3\u9EBC\u5BB9\u6613\u5F81\u670D\uFF0C\u65BC\u662F\u6C7A\u5B9A\u5148\u5F9E... "),t(),e(160,"div")(161,"p",68),u(162,"\u5DE5\u4F5C\u7D93\u9A57"),t(),e(163,"ul",69)(164,"li"),u(165,"2024-\u81F3\u4ECA | \u597D\u68D2\u97F3\u6A02\u6709\u9650\u516C\u53F8 | \u6B4C\u66F2\u6F14\u5531\u8868\u6F14\u4EBA\u54E1"),t()()(),e(166,"div")(167,"p",68),u(168,"\u6559\u80B2\u80CC\u666F"),t(),e(169,"ul",69)(170,"li"),u(171,"2018-2022\uFF5C\u570B\u7ACB\u53F0\u7063\u85DD\u8853\u5927\u5B78\uFF0D\u97F3\u6A02\u5B78\u7CFB\uFF5C\u5B78\u58EB"),t(),e(172,"li"),u(173,"2022-2024\uFF5C\u570B\u7ACB\u53F0\u7063\u5E2B\u7BC4\u5927\u5B78\uFF0D\u97F3\u6A02\u5B78\u7CFB\uFF5C\u78A9\u58EB"),t()()(),e(174,"div")(175,"p",68),u(176,"\u8B49\u7167\u8B49\u66F8"),t(),e(177,"ul",69)(178,"li"),u(179,"ISO 9001\u570B\u969B\u54C1\u8CEA\u8A8D\u8B49\u5E03\u62C9\u683C\u97F3\u6A02\u6A5F\u69CB\u6649\u7D1A\u6AA2\u5B9A\u5408\u683C\u8B49\u66F8"),t()()(),e(180,"div",70)(181,"button")(182,"div",49)(183,"p",71),u(184,"\u4E86\u89E3\u66F4\u591A\u6559\u5E2B\u5C65\u6B77"),t(),e(185,"span",51),u(186,"chevron_right"),t()()()()()()(),e(187,"div",72)(188,"div",73)(189,"div",74),u(190,"\u8AB2\u7A0B\u65B9\u6848"),t(),e(191,"div",75)(192,"label",76),i(193,"input",77),e(194,"div")(195,"p",78),u(196," \u55AE\u5802\u8AB2\u7A0B "),t(),e(197,"div",79)(198,"p"),u(199,"NT$"),t(),e(200,"p"),u(201,"1,200"),t()()(),e(202,"span",80),u(203," check "),t()(),e(204,"label",76),i(205,"input",81),e(206,"div")(207,"p",78),u(208," \u5341\u5802\u8AB2\u7A0B "),t(),e(209,"div",79)(210,"p"),u(211,"NT$"),t(),e(212,"p"),u(213,"1,2000"),t()()(),e(214,"span",80),u(215," check "),t()()(),e(216,"div",82)(217,"button",83),u(218," \u7ACB\u5373\u8CFC\u8CB7 "),t(),e(219,"button",84)(220,"span",85),u(221,"shopping_cart"),t()()(),e(222,"div")(223,"p",86),u(224," \u6216\u8A31\u4F60\u60F3\u5728\u4E0A\u8AB2\u524D\u5148\u8AEE\u8A62\u6559\u5E2B "),t(),e(225,"button",87),u(226," \u586B\u5BEB\u8AB2\u524D\u8AEE\u8A62\u554F\u5377 "),t()()()()(),e(227,"div",88)(228,"div",89)(229,"p"),u(230,"\u76EE\u524D\u65B9\u6848\uFF1A"),t(),e(231,"p"),u(232,"\u55AE\u5802\u8AB2\u7A0B"),t()(),e(233,"div",54)(234,"div",90)(235,"p"),u(236,"NT$"),t(),e(237,"p"),u(238,"1,200"),t()(),e(239,"button",91),u(240," \u67E5\u770B\u65B9\u6848 "),t()()(),e(241,"div",92)(242,"div",93)(243,"div",94),i(244,"img",38),e(245,"h2",39),u(246,"\u5176\u4ED6\u63A8\u85A6\u8AB2\u7A0B"),t()(),e(247,"div",95),D(248,K,1,2,"tmf-card",96,G),t()()()()}n&2&&(m(25),d("rating",5),m(32),d("ngClass",s(8,p,l.activeSection()==="sectionA")),m(3),d("ngClass",s(10,p,l.activeSection()==="sectionB")),m(3),d("ngClass",s(12,p,l.activeSection()==="sectionC")),m(3),d("ngClass",s(14,p,l.activeSection()==="sectionD")),m(21),d("ngForOf",l.videoData),m(30),d("rating",5),m(17),d("rating",5),m(114),h(l.cardData))},dependencies:[M,P,O,H,I,q,L,$],styles:[".custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{height:8px}.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{--tw-bg-opacity: 1;background-color:rgb(233 233 233 / var(--tw-bg-opacity));border-radius:50px}.custom-shadow[_ngcontent-%COMP%]{box-shadow:0 -10px 15px -3px #0000001a}.active[_ngcontent-%COMP%]{border-bottom-width:4px;--tw-border-opacity: 1;border-color:rgb(243 105 35 / var(--tw-border-opacity));--tw-text-opacity: 1;color:rgb(243 105 35 / var(--tw-text-opacity))}.custom-radio[_ngcontent-%COMP%]{display:flex;cursor:pointer;align-items:center;justify-content:space-between;border-radius:.75rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:.6875rem 1rem}.custom-radio[_ngcontent-%COMP%]:has(input[type=radio]:checked){--tw-border-opacity: 1;border-color:rgb(243 105 35 / var(--tw-border-opacity))}.custom-radio[_ngcontent-%COMP%]:has(input[type=radio]:checked) > span[_ngcontent-%COMP%]{visibility:visible}"]});let a=o;return a})();export{de as default};
