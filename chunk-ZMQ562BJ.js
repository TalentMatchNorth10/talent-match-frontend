import{a as ie}from"./chunk-4NH4DMQN.js";import{a as S,b as te}from"./chunk-NLZFUC57.js";import"./chunk-MVBN2DEU.js";import{a as ee,b as g}from"./chunk-A7MNMKNS.js";import{a as X,c as Z}from"./chunk-OME6KAGV.js";import{f as N}from"./chunk-WXMIW7GV.js";import{c as Q,e as G,g as J,h as Y,l as K}from"./chunk-UTN4MJGA.js";import"./chunk-5EJLWTDY.js";import"./chunk-3P57PEZW.js";import{k as V,l as W,n as q,o as L,p as U,r as R,s as $,t as F}from"./chunk-UDI6KFO4.js";import{Ba as w,Cb as b,Fa as a,Fb as I,Ga as B,Ib as x,Jb as T,Kb as y,Xa as v,Za as r,ca as E,fb as t,gb as e,hb as p,ib as d,jb as c,la as P,lb as H,ma as O,na as z,oa as M,ob as _,pb as f,tb as D,ub as A,vb as k,xb as o,yb as j,zb as C}from"./chunk-5CDLLB3L.js";import"./chunk-TMC7WMLO.js";var ne=(()=>{let n=class n{constructor(){}ngOnInit(){}};n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=E({type:n,selectors:[["app-review-card"]],inputs:{data:"data"},standalone:!0,features:[b],decls:19,vars:12,consts:[[1,"w-[259px]","h-[264px]","md:w-[259px]","md:h-[264px]","lg:w-[411px]","lg:h-[220px]","rounded-xl","overflow-hidden","shadow-lg","bg-white","m-auto"],[1,"py-6","px-4","h-full"],[1,"flex","flex-col","justify-between","h-full"],[1,"flex"],[1,"flex","items-center","gap-2"],["alt","Avatar",1,"w-8","h-8","rounded-full",3,"src"],[1,"flex","flex-col"],[3,"rating"],[1,"text-gray-400","invisible"],[1,"text-gray-500","my-4"],[1,"text-gray-400","lg:invisible"]],template:function(m,l){m&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4),p(6,"img",5),t(7,"div",6)(8,"div"),o(9),e(),p(10,"tmf-star-rating",7),e()(),t(11,"div",8),o(12),x(13,"date"),e()(),t(14,"div",9),o(15),e()(),t(16,"div",10),o(17),x(18,"date"),e()()()()),m&2&&(a(6),r("src",l.data.avator_image,w),a(3),j(l.data.nick_name),a(),r("rating",l.data.rate),a(2),C(" ",T(13,6,l.data.create_datetime,"yyyy-MM-dd")," "),a(3),C(" ",l.data.comment," "),a(2),C(" ",T(18,9,l.data.create_datetime,"yyyy-MM-dd")," "))},dependencies:[F,R,S]});let i=n;return i})();var ue=["swiperElement"],le=["swiperElementCourse"],se=(i,n)=>({"bg-orange-600 text-white":i,"border bg-white":n});function me(i,n){if(i&1){let u=H();t(0,"button",54),_("click",function(){let m=P(u).$implicit,l=f();return O(l.selectSubjectOption(m))}),o(1),e()}if(i&2){let u=n.$implicit,s=f();r("ngClass",I(2,se,s.selectedSubjectOption===u,s.selectedSubjectOption!==u)),a(),C(" ",u," ")}}function pe(i,n){if(i&1&&(d(0),t(1,"swiper-slide")(2,"div",57),p(3,"tmf-video-card",58),e()(),c()),i&2){let u=n.$implicit;a(3),r("data",u)}}function de(i,n){if(i&1&&(d(0),t(1,"swiper-container",55,0),v(3,pe,4,1,"ng-container",56),e(),c()),i&2){let u=f();a(3),r("ngForOf",u.videoDataSource)}}function ce(i,n){if(i&1&&(d(0),t(1,"swiper-slide")(2,"div",57),p(3,"tmf-card",59),e()(),c()),i&2){let u=n.$implicit;a(3),r("data",u)("hoverEffect",!1)}}function ge(i,n){if(i&1&&(d(0),t(1,"swiper-container",55,1),v(3,ce,4,2,"ng-container",56),e(),c()),i&2){let u=f();a(3),r("ngForOf",u.courseDataSource)}}function ve(i,n){if(i&1&&(d(0),t(1,"swiper-slide")(2,"div",68),p(3,"app-review-card",58),e()(),c()),i&2){let u=n.$implicit;a(3),r("data",u)}}function he(i,n){if(i&1&&(d(0),t(1,"div",60)(2,"div",61)(3,"div",62)(4,"div",63),o(5,"\u4F7F\u7528\u597D\u8A55\u9AD8\u9054"),e(),t(6,"div",64),o(7,"4.7"),e(),p(8,"tmf-star-rating",65),e()()(),t(9,"div",66)(10,"swiper-container",67),v(11,ve,4,1,"ng-container",56),e()(),c()),i&2){let u=f();a(8),r("rating",4.7)("starSize","1.5rem"),a(3),r("ngForOf",u.reviewDataSource)}}function fe(i,n){if(i&1&&(d(0),t(1,"swiper-slide")(2,"div",13),p(3,"app-review-card",58),e()(),c()),i&2){let u=n.$implicit;a(3),r("data",u)}}function xe(i,n){if(i&1&&(d(0),t(1,"div",60)(2,"div",61)(3,"div",62)(4,"div",63),o(5,"\u4F7F\u7528\u597D\u8A55\u9AD8\u9054"),e(),t(6,"div",64),o(7,"4.7"),e(),p(8,"tmf-star-rating",65),e()()(),t(9,"div",66)(10,"swiper-container",69),v(11,fe,4,1,"ng-container",56),e()(),c()),i&2){let u=f();a(8),r("rating",4.7)("starSize","1.5rem"),a(3),r("ngForOf",u.reviewDataSource)}}function we(i,n){if(i&1&&(d(0),t(1,"div"),p(2,"app-review-card",58),e(),c()),i&2){let u=n.$implicit;a(2),r("data",u)}}function _e(i,n){if(i&1&&(d(0),t(1,"div"),p(2,"app-review-card",58),e(),c()),i&2){let u=n.$implicit;a(2),r("data",u)}}function Ce(i,n){if(i&1&&(d(0),t(1,"div"),p(2,"app-review-card",58),e(),c()),i&2){let u=n.$implicit;a(2),r("data",u)}}function Ee(i,n){if(i&1&&(d(0),t(1,"div",70)(2,"div",71)(3,"div",72)(4,"div",61)(5,"div",62)(6,"div",73),o(7,"\u4F7F\u7528\u597D\u8A55\u9AD8\u9054"),e(),t(8,"div",74),o(9,"4.7"),e(),p(10,"tmf-star-rating",65),e()()(),v(11,we,3,1,"ng-container",56),x(12,"slice"),e(),t(13,"div",75),v(14,_e,3,1,"ng-container",56),x(15,"slice"),e(),t(16,"div",76),v(17,Ce,3,1,"ng-container",56),x(18,"slice"),e()(),c()),i&2){let u=f();a(10),r("rating",4.7)("starSize","1.5rem"),a(),r("ngForOf",y(12,5,u.reviewDataSource,0,2)),a(3),r("ngForOf",y(15,9,u.reviewDataSource,2,4)),a(3),r("ngForOf",y(18,13,u.reviewDataSource,4,6))}}var Le=(()=>{let n=class n{selectSubjectOption(s){this.selectedSubjectOption=s}constructor(s,m){this.breakpointObserver=s,this.router=m,this.InputType=X,this.shortsSubjectOptions=["\u5168\u90E8","\u70F9\u98EA\u6599\u7406","\u7406\u8CA1\u6295\u8CC7","\u85DD\u8853\u5275\u4F5C","\u624B\u4F5C\u5DE5\u85DD"],this.selectedSubjectOption=null,this.videoDataSource=[],this.courseDataSource=[],this.reviewDataSource=[],this.howToUseStepImages=["./../../../assets/images/home-page/how-to-use/how-to-use-step-1.svg","./../../../assets/images/home-page/how-to-use/how-to-use-step-2.svg","./../../../assets/images/home-page/how-to-use/how-to-use-step-3.svg"],this.currentWindowSize="",this.control=new J("\u6E96\u5099\u597D\u555F\u7A0B\u4E86\u55CE\uFF1F",[Q.required]),this.items=[{label:"\u4F9D\u95DC\u9375\u5B57",value:1},{label:"\u4F9D\u985E\u5225",value:2}],this.swiperConfig={breakpoints:{320:{slidesPerView:2,spaceBetween:10,navigation:{enabled:!1}},768:{slidesPerView:2,spaceBetween:20},1280:{slidesPerView:4,spaceBetween:30}},injectStyles:[`:host .swiper { overflow: visible !important; }
      :host .swiper-button-disabled {
        opacity: 1;
        background-color: #9F9F9F !important;
      }
      :host .swiper-button-prev {
        width: 56px;
        height: 56px;
        border-radius: 15%;
        background-color: #F36923;
      }
      :host .swiper-button-prev svg {
        width: 16px;
        height: 12px;
        color: #fff;
      }
      :host .swiper-button-next {
        width: 56px;
        height: 56px;
        border-radius: 15%;
        background-color: #F36923;
      }
      :host .swiper-button-next svg {
        width: 16px;
        height: 12px;
        color: #fff;
      }
      `]},this.courseSwiperConfig={breakpoints:{320:{slidesPerView:1,spaceBetween:10,navigation:{enabled:!1}},768:{slidesPerView:2,spaceBetween:20},1280:{slidesPerView:4,spaceBetween:30}},injectStyles:[`:host .swiper { overflow: visible !important; }
      :host .swiper-button-disabled {
        opacity: 1;
        background-color: #9F9F9F !important;
      }
      :host .swiper-button-prev {
        width: 56px;
        height: 56px;
        border-radius: 15%;
        background-color: #F36923;
      }
      :host .swiper-button-prev svg {
        width: 16px;
        height: 12px;
        color: #fff;
      }
      :host .swiper-button-next {
        width: 56px;
        height: 56px;
        border-radius: 15%;
        background-color: #F36923;
      }
      :host .swiper-button-next svg {
        width: 16px;
        height: 12px;
        color: #fff;
      }
      `]}}ngOnInit(){this.videoDataSource=be,this.courseDataSource=ye,this.reviewDataSource=Fe,this.breakpointObserver.observe([g.Handset,g.Tablet,g.Web]).subscribe(s=>{let m={[g.Handset]:window.matchMedia(g.Handset).matches,[g.Tablet]:window.matchMedia(g.Tablet).matches,[g.Web]:window.matchMedia(g.Web).matches};this.updateValueBasedOnBreakpoints(m)})}ngAfterViewInit(){this.initSwiper()}initSwiper(){try{Object.assign(this.swiperElement.nativeElement,this.swiperConfig),this.swiperElement.nativeElement.initialize(),Object.assign(this.swiperElementCourse.nativeElement,this.courseSwiperConfig),this.swiperElementCourse.nativeElement.initialize()}catch(s){console.error("Swiper initialization failed",s)}}updateValueBasedOnBreakpoints(s){s[g.Handset]?this.currentWindowSize="Handset":s[g.Tablet]?this.currentWindowSize="Tablet":s[g.Web]&&(this.currentWindowSize="Web")}search(s){console.log(s)}navigateToSignUp(){this.router.navigate(["sign-up"])}navigateToTeacherApply(){this.router.navigate(["teacher-apply"])}};n.\u0275fac=function(m){return new(m||n)(B(ee),B(N))},n.\u0275cmp=E({type:n,selectors:[["app-home-page"]],viewQuery:function(m,l){if(m&1&&(D(ue,5),D(le,5)),m&2){let h;A(h=k())&&(l.swiperElement=h.first),A(h=k())&&(l.swiperElementCourse=h.first)}},standalone:!0,features:[b],decls:97,vars:12,consts:[["swiperElement",""],["swiperElementCourse",""],[1,"flex","h-full","w-full","flex-col"],[1,"relative","h-[80vh]","bg-[url('./assets/images/home-page/home-page-banner-mobile.svg')]","bg-auto","bg-top","bg-no-repeat","md:bg-[url('./assets/images/home-page/home-page-banner.svg')]","lg:bg-[url('./assets/images/home-page/home-page-banner.svg')]",2,"-webkit-mask","linear-gradient(180deg, #000 90%, transparent)"],[1,"absolute","left-1/2","top-1/4","w-10/12","-translate-x-1/2","-translate-y-1/2","lg:left-[30%]","lg:top-1/2","lg:w-[26%]","lg:-translate-y-1/2"],[1,"mb-6"],[1,"mb-2","text-4xl","font-bold","text-gray-900","lg:text-6xl"],[1,"font-bold","text-purple-800"],[1,"text-4xl","font-bold","text-gray-900","lg:text-6xl"],[1,"mb-6","text-gray-900","lg:text-lg"],[3,"clickSearch","formControl","inputType","options"],[1,"my-5","flex","flex-col","gap-4"],[1,"w-full","bg-top","bg-no-repeat","pt-[1.5rem]","text-center","text-4xl",2,"background-image","url('./assets/images/home-page/orange-80-decorate.svg')"],[1,"w-full"],[1,"flex","flex-wrap","justify-center","gap-2"],["class","rounded px-4 py-2 hover:bg-orange-600 hover:text-white focus:outline-none",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"rounded","border","px-4","py-2","hover:bg-orange-600","hover:text-white","focus:outline-none"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"h-[24px]","w-[24px]","fill-black","hover:fill-white"],["d","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"],[1,"flex","h-full","w-full","justify-center","overflow-hidden"],[1,"lg:w-9:12","w-10/12"],[3,"ngSwitch"],[4,"ngSwitchDefault"],[1,"mt-5","bg-orange-100","py-10","lg:skew-y-1"],[1,"lg:-skew-y-1"],[1,"mt-8","py-8"],[1,"h-full","w-full","overflow-hidden"],[1,"lg:w-9:12","m-auto","w-10/12"],[1,"-mt-5","mb-5","bg-gray-50","bg-[url('./assets/images/home-page/section-bg-decorate.svg')]","bg-center","py-12"],[1,"my-8","flex","w-full","flex-col","items-center","gap-6"],[4,"ngSwitchCase"],[1,"mb-12"],[1,"flex","w-full","flex-col","items-center","gap-4"],[1,"lg:w-[1280px]","lg:h-[776px]","md:w-[800px]","md:h-[600px]","h-[440px]","w-[350px]","shadow-md","rounded-lg","px-2","pb-0","pt-8","bg-[#FEEFE7]"],[1,"h-full","flex","flex-col","items-center","justify-between","gap-3"],[1,"rounded-lg","border-2","border-orange-500","px-2","py-1","text-base","font-bold","text-orange-500"],[1,"font-bold","text-2xl","lg:text-3xl"],[1,"text-center","text-sm","lg:text-lg","lg:w-[1040px]","md:w-[500px]"],["alt","",1,"lg:w-[1040px]","lg:h-[560px]","md:h-[320px]",3,"src"],[1,"lg:w-[1280px]","lg:h-[776px]","md:w-[800px]","md:h-[600px]","h-[440px]","w-[350px]","shadow-md","rounded-lg","px-2","pb-0","pt-8","bg-[#F6FEE7]"],[1,"lg:w-[1280px]","lg:h-[776px]","md:w-[800px]","md:h-[600px]","h-[440px]","w-[350px]","shadow-md","rounded-lg","px-2","pb-0","pt-8","bg-[#E7F6FE]"],[1,"-mb-8","h-auto","md:h-[12.5rem]","lg:mb-0","lg:h-[12.5rem]"],[1,"flex","w-full","flex-col","items-center","justify-center","gap-6","md:flex-row","lg:flex-row"],[1,"lg:bg-[size:","100%]","z-[999]","h-[190px]","w-[325px]","rounded-2xl","bg-white","bg-[url('./assets/images/home-page/cta/cta-signup.svg')]","bg-[size:60%]","bg-right-top","bg-no-repeat","shadow-md","lg:h-[225px]","lg:w-[520px]","lg:bg-auto",3,"click"],[1,"h-full","px-5","py-6"],[1,"flex","h-full","flex-col","justify-end","gap-4"],[1,"ld:text-3xl","text-2xl"],[1,"flex","items-center"],[1,"w-4/5","lg:w-11/12"],[1,"flex","h-full","flex-grow","items-center","justify-end"],[1,"material-icons-outlined","text-[20px]","text-tmf-gray-4"],[1,"lg:w-[520px]","lg:h-[225px]","w-[325px]","h-[190px]","rounded-2xl","bg-[url('./assets/images/home-page/cta/cta-teach.svg')]","lg:bg-[size:","100%]","bg-[size:60%]","bg-no-repeat","bg-right-top","shadow-md","bg-white","z-[999]","cursor-pointer",3,"click"],[1,"text-2xl","lg:text-3xl"],[1,"material-icons-outlined","cursor-pointer","text-[20px]","text-tmf-gray-4",3,"click"],[1,"rounded","px-4","py-2","hover:bg-orange-600","hover:text-white","focus:outline-none",3,"click","ngClass"],["init","false","slides-per-view","4","navigation","true"],[4,"ngFor","ngForOf"],[1,"m-auto","h-full","w-full","p-2"],[3,"data"],[3,"data","hoverEffect"],[1,"h-[160px]","w-[351px]","overflow-hidden","rounded-xl","bg-gray-100/30","shadow-lg","backdrop-blur-md"],[1,"p-6"],[1,"flex","flex-col","items-center","gap-2"],[1,"text-xl","lg:text-2xl"],[1,"text-5xl","lg:text-7xl"],[3,"rating","starSize"],[1,"relative","w-4/5","overflow-hidden"],["slides-per-view","1","autoplay","true"],[1,"w-full","flex-shrink-0","p-2","md:w-1/3","lg:w-1/4"],["slides-per-view","2"],[1,"flex","flex-col","gap-6"],[1,"flex","gap-6"],[1,"h-[220px]","w-[302px]","overflow-hidden","rounded-xl","bg-gray-100/30","shadow-lg","backdrop-blur-md"],[1,"text-2xl"],[1,"text-7xl"],[1,"flex","justify-center","gap-6"],[1,"flex","justify-end","gap-6"]],template:function(m,l){m&1&&(t(0,"div",2)(1,"section")(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"span",7),o(7,"\u9023\u7D50"),e(),o(8,"\u7121\u9650\u53EF\u80FD "),e(),t(9,"div",8),o(10," \u70BA\u4F60\u958B\u555F\u6A5F\u9047\u4E4B\u9580 "),e()(),t(11,"div",9),o(12," \u6BCF\u500B\u4EBA\u90FD\u64C1\u6709\u7368\u7279\u7684\u624D\u85DD\u8207\u5275\u9020\u529B\u3002\u56E0\u6B64\uFF0C\u6211\u5011\u63D0\u4F9B\u4E00\u500B\u5C08\u696D\u4E14\u591A\u5143\u5E73\u53F0\uFF0C\u8B93\u71B1\u611B\u85DD\u8853\u3001\u97F3\u6A02\u3001\u624B\u5DE5\u85DD\u4EE5\u53CA\u5275\u65B0\u6280\u8853\u7684\u4F60\uFF0C\u5230\u5FD7\u540C\u9053\u5408\u7684\u5925\u4F34\u53CA\u5C08\u696D\u5C0E\u5E2B\u3002 "),e(),t(13,"tmf-input",10),_("clickSearch",function(ae){return l.search(ae)}),e()()()(),t(14,"section",11)(15,"div",12),o(16," \u8AB2\u7A0B\u77ED\u5F71\u97F3 "),e(),t(17,"div",13)(18,"div",14),v(19,me,2,5,"button",15),t(20,"button",16),z(),t(21,"svg",17),p(22,"path",18),e()()()(),M(),t(23,"div",19)(24,"div",20),d(25,21),v(26,de,4,1,"ng-container",22),c(),e()()(),t(27,"section",23)(28,"div",24)(29,"div",12),o(30," \u63A8\u85A6\u8AB2\u7A0B "),e(),t(31,"div",25)(32,"div",26)(33,"div",27),d(34,21),v(35,ge,4,1,"ng-container",22),c(),e()()()()(),t(36,"section",28)(37,"div",12),o(38," \u5B78\u54E1\u5C0E\u5E2B\u597D\u8A55\u63A8\u85A6 "),e(),t(39,"div",29),d(40,21),v(41,he,12,3,"ng-container",30)(42,xe,12,3,"ng-container",30)(43,Ee,19,17,"ng-container",22),c(),e()(),t(44,"section",31)(45,"div",32)(46,"div",33)(47,"div",34)(48,"span",35),o(49,"STEP 1"),e(),t(50,"span",36),o(51,"\u8A3B\u518A\u5E33\u865F"),e(),t(52,"span",37),o(53,"\u5728\u6211\u5011\u7684\u5E73\u53F0\u4E0A\u8A3B\u518A\u4E00\u500B\u5E33\u865F\uFF0C\u586B\u5BEB\u60A8\u7684\u57FA\u672C\u8CC7\u6599\u4E26\u8A2D\u7F6E\u767B\u5165\u5BC6\u78BC\u3002\u8A3B\u518A\u5B8C\u6210\u5F8C,\u60A8\u5C07\u7372\u5F97\u5168\u9762\u7684\u8A2A\u554F\u6B0A\u9650\uFF0C\u53EF\u4EE5\u958B\u59CB\u700F\u89BD\u548C\u4F7F\u7528\u6211\u5011\u7684\u5404\u9805\u529F\u80FD\u3002"),e(),p(54,"img",38),e()(),t(55,"div",39)(56,"div",34)(57,"span",35),o(58,"STEP 2"),e(),t(59,"span",36),o(60,"\u5C0B\u627E\u624D\u85DD\u6559\u5B78"),e(),t(61,"span",37),o(62,"\u700F\u89BD\u6211\u5011\u5E73\u53F0\u4E0A\u8C50\u5BCC\u7684\u624D\u85DD\u6559\u5B78\u8CC7\u6E90\uFF0C\u60A8\u53EF\u4EE5\u6839\u64DA\u8208\u8DA3\u548C\u9700\u6C42\uFF0C\u5C0B\u627E\u5230\u5408\u9069\u7684\u6559\u5B78\u5167\u5BB9\u3002\u7121\u8AD6\u60A8\u60F3\u8981\u5B78\u7FD2\u97F3\u6A02\u3001\u821E\u8E48\u3001\u7F8E\u8853\u9084\u662F\u5176\u4ED6\u624D\u85DD\uFF0C\u90FD\u80FD\u5728\u9019\u88E1\u627E\u5230\u9069\u5408\u60A8\u7684\u8AB2\u7A0B\u3002"),e(),p(63,"img",38),e()(),t(64,"div",40)(65,"div",34)(66,"span",35),o(67,"STEP 3"),e(),t(68,"span",36),o(69,"\u9810\u7D04\u5B78\u7FD2\u8AB2\u7A0B"),e(),t(70,"span",37),o(71,"\u627E\u5230\u5FC3\u5100\u7684\u6559\u5B78\u5167\u5BB9\u5F8C\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u9810\u7D04\u76F8\u61C9\u7684\u5B78\u7FD2\u8AB2\u7A0B\u3002\u9078\u64C7\u9069\u5408\u60A8\u6642\u9593\u548C\u5730\u9EDE\u7684\u6388\u8AB2\u8001\u5E2B\uFF0C\u4E26\u78BA\u5B9A\u9810\u7D04\u8A73\u60C5\u3002\u5B8C\u6210\u9810\u7D04\u5F8C\uFF0C\u60A8\u5C07\u6536\u5230\u78BA\u8A8D\u90F5\u4EF6\uFF0C\u6E96\u6642\u53C3\u52A0\u8AB2\u7A0B\u5373\u53EF\u3002"),e(),p(72,"img",38),e()()()(),t(73,"section",41)(74,"div",42)(75,"div",43),_("click",function(){return l.navigateToSignUp()}),t(76,"div",44)(77,"div",45)(78,"div",46),o(79,"\u6210\u70BA\u6703\u54E1"),e(),t(80,"div",47)(81,"div",48),o(82," \u4EAB\u6709\u7B2C\u4E00\u6642\u9593\u8AB2\u7A0B\u8CC7\u8A0A\u4E0A\u67B6\u6D88\u606F\uFF0C\u7528\u6700\u512A\u60E0\u7684\u50F9\u683C\u8CFC\u8CB7\u8AB2\u7A0B\uFF0C\u540C\u6642\u80FD\u8207\u8001\u5E2B\u4E00\u5C0D\u4E00\u6559\u5B78\u3002 "),e(),t(83,"div",49)(84,"span",50),o(85," east "),e()()()()()(),t(86,"div",51),_("click",function(){return l.navigateToTeacherApply()}),t(87,"div",44)(88,"div",45)(89,"div",52),o(90,"\u6210\u70BA\u6559\u5E2B"),e(),t(91,"div",47)(92,"div",48),o(93," \u6BCF\u500B\u4EBA\u90FD\u6709\u64C5\u9577\u7684\u77E5\u8B58\u6280\u80FD\uFF0C\u8DB3\u5920\u7684\u71B1\u60C5\u5275\u9020\u66F4\u591A\u9644\u52A0\u50F9\u503C\uFF0C\u4E00\u8D77\u5C07\u9019\u4E9B\u6280\u80FD\u5206\u4EAB\u7D66\u5168\u4E16\u754C\u5427\uFF01 "),e(),t(94,"div",49)(95,"span",53),_("click",function(){return l.navigateToTeacherApply()}),o(96," east "),e()()()()()()()()()),m&2&&(a(13),r("formControl",l.control)("inputType",l.InputType.SearchByType)("options",l.items),a(6),r("ngForOf",l.shortsSubjectOptions),a(6),r("ngSwitch",l.currentWindowSize),a(9),r("ngSwitch",l.currentWindowSize),a(6),r("ngSwitch",l.currentWindowSize),a(),r("ngSwitchCase","Handset"),a(),r("ngSwitchCase","Tablet"),a(12),r("src","./../../../assets/images/home-page/how-to-use/how-to-use-step-1.svg",w),a(9),r("src","./../../../assets/images/home-page/how-to-use/how-to-use-step-2.svg",w),a(9),r("src","./../../../assets/images/home-page/how-to-use/how-to-use-step-3.svg",w))},dependencies:[F,V,W,q,L,U,$,K,G,Y,te,S,ne,Z,ie],styles:['@charset "UTF-8";.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:10px;border-radius:50%}.swiper-button-next[_ngcontent-%COMP%]:hover, .swiper-button-prev[_ngcontent-%COMP%]:hover{background-color:#0056b3}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{top:50%;width:auto;height:auto;margin-top:-22px}swiper-container[_ngcontent-%COMP%]{width:100%;height:100%}swiper-slide[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}']});let i=n;return i})();var be=[{video_id:"2",name:"Cooking Italian Pasta",category:"Cooking",intro:"Master the art of making authentic Italian pasta dishes.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",teacher_id:"t-2",course_id:"c-2"},{video_id:"3",name:"Yoga for Beginners",category:"Fitness",intro:"Start your yoga journey with these beginner-friendly poses.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",teacher_id:"t-3",course_id:"c-3"},{video_id:"4",name:"Introduction to Astrophysics",category:"Science",intro:"Explore the wonders of the universe with basic astrophysics concepts.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",teacher_id:"t-4",course_id:"c-4"},{video_id:"5",name:"Abstract Oil Painting Techniques",category:"Art",intro:"Discover unique techniques for creating abstract oil paintings.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",teacher_id:"t-5",course_id:"c-5"},{video_id:"6",name:"Healthy Smoothie Recipes",category:"Cooking",intro:"Learn how to make delicious and nutritious smoothies at home.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",teacher_id:"t-6",course_id:"c-6"},{video_id:"7",name:"Introduction to Machine Learning",category:"Technology",intro:"Get started with machine learning algorithms and applications.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",teacher_id:"t-7",course_id:"c-7"},{video_id:"8",name:"Beginner's Guide to Meditation",category:"Wellness",intro:"Start your meditation practice with these simple techniques.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",teacher_id:"t-8",course_id:"c-8"}],ye=[{course_id:"1",mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A311",content:"\u8AB2\u7A0B\u5167\u5BB91",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A311",price:1e3,quantity:1,main_category:"\u4E3B\u5206\u985E1",sub_category:"\u6B21\u5206\u985E1",rating:4.5,ratingCount:100},{course_id:"2",mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100},{course_id:"3",mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100},{course_id:"4",mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100},{course_id:"5",mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100}],Fe=[{nick_name:"andersonlisa",avator_image:"https://dummyimage.com/636x651",rate:4.8,comment:"Start small myself teacher set.",create_datetime:new Date("2024-05-27T08:22:50")},{nick_name:"garzakara",avator_image:"https://dummyimage.com/636x651",rate:4.9,comment:"Hard body reason partner treatment.",create_datetime:new Date("2024-02-11T19:41:12")},{nick_name:"kellerkimberly",avator_image:"https://dummyimage.com/636x651",rate:5,comment:"Marriage someone society how new family individual.",create_datetime:new Date("2024-02-21T01:07:07")},{nick_name:"zstanley",avator_image:"https://dummyimage.com/636x651",rate:4.8,comment:"Upon never suggest institution I professor wish.",create_datetime:new Date("2024-01-06T09:10:48")},{nick_name:"garzajessica",avator_image:"https://dummyimage.com/21x441",rate:5,comment:"Move drop create discover seat become.",create_datetime:new Date("2024-05-27T18:11:08")},{nick_name:"jgarza",avator_image:"https://dummyimage.com/636x651",rate:4.9,comment:"Left order talk management condition receive.",create_datetime:new Date("2024-04-06T23:52:02")}];export{Fe as FakeReviewData,Le as default};
