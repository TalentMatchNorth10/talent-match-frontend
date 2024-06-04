import{a as O,b as ee}from"./chunk-CTQS6VQU.js";import{a as J,b as Y}from"./chunk-ZI5WURB2.js";import{a as Z,b as f,c as K,d as X,e as Q}from"./chunk-T3ZUGKS6.js";import{b as M,f as q}from"./chunk-IAFX7S52.js";import"./chunk-5XPWWNTO.js";import{c as N,g as G}from"./chunk-6XDFEL3K.js";import"./chunk-A7YCUJUK.js";import{h as L,i as R,k,l as D,m as W,o as $,p as S}from"./chunk-7LXBRU32.js";import{Cb as u,Db as V,Eb as h,Hb as C,Ja as w,Ka as T,Kb as U,Nb as z,Oa as n,Pa as _,Pb as B,aa as y,ab as g,cb as r,ja as P,ka as j,kb as i,la as b,lb as a,ma as E,mb as p,nb as m,ob as d,qb as A,tb as x,ub as v}from"./chunk-YBTHCYRO.js";import"./chunk-2XJVAMHT.js";function oe(e,t){if(e&1&&(m(0),p(1,"video",17),d()),e&2){let o=v();n(),r("src",o.videoUrl,w)}}function re(e,t){if(e&1&&(m(0),p(1,"iframe",18),d()),e&2){let o=v();n(),r("src",o.videoUrl,T)}}var te=(()=>{let t=class t{constructor(s,c,l,F){this.sanitizer=s,this.dialogRef=c,this.router=l,this.data=F}close(){this.dialogRef.close()}get videoUrl(){return this.data.video_type==="storage"?this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url):this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.getYoutubeVideoId(this.data.url)}`)}getYoutubeVideoId(s){let c=/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,l=s.match(c);return l?l[1]:null}navigateToCoursePage(s){this.router.navigate([`course-detail/${s.course_id}`]),this.close()}};t.\u0275fac=function(c){return new(c||t)(_(M),_(K),_(q),_(X))},t.\u0275cmp=y({type:t,selectors:[["tmf-video"]],standalone:!0,features:[C],decls:21,vars:6,consts:[[1,"flex","justify-between","gap-4"],[1,"max-w-xs","w-[320px]","h-[514px]","rounded","overflow-hidden","shadow-lg","bg-white"],[1,"relative","w-full","h-full","pb-16x9"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"absolute","left-2","top-2","p-3","rounded","bg-black","text-yellow-600"],[1,"absolute","w-full","bottom-2","p-3","rounded","text-white"],[1,"flex","flex-col","justify-between"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","text-white","hover:text-gray-900",3,"click"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18L18 6M6 6l12 12"],[1,"flex","flex-col","gap-3"],["alt","Avatar",1,"w-10","h-10","rounded-full",3,"click","src"],[1,"p-2","bg-white","rounded-full","text-orange-500",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M17 8l4 4m0 0l-4 4m4-4H3"],[1,"p-2","bg-white","rounded-full","text-orange-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M5 3v16l7-7 7 7V3a2 2 0 00-2-2H7a2 2 0 00-2 2z"],["autoplay","",1,"absolute","top-0","left-0","w-full","h-full","object-cover",3,"src"],["title","video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","referrerpolicy","strict-origin-when-cross-origin","allowfullscreen","",1,"absolute","top-0","left-0","w-full","h-full",3,"src"]],template:function(c,l){c&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),m(3,3),g(4,oe,2,1,"ng-container",4)(5,re,2,1,"ng-container",4),d(),i(6,"div",5),u(7),a(),i(8,"div",6),u(9),a()()(),i(10,"div",7),b(),i(11,"svg",8),x("click",function(){return l.close()}),p(12,"path",9),a(),E(),i(13,"div",10)(14,"img",11),x("click",function(){return l.navigateToCoursePage(l.data)}),a(),i(15,"button",12),x("click",function(){return l.navigateToCoursePage(l.data)}),b(),i(16,"svg",13),p(17,"path",14),a()(),E(),i(18,"button",15),b(),i(19,"svg",13),p(20,"path",16),a()()()()()),c&2&&(n(3),r("ngSwitch",l.data.video_type),n(),r("ngSwitchCase","storage"),n(),r("ngSwitchCase","youtube"),n(2),h(" ",l.data.category," "),n(2),h(" ",l.data.intro," "),n(5),r("src","https://dummyimage.com/636x651",w))},dependencies:[S,k,D]});let e=t;return e})();function le(e,t){if(e&1&&(m(0),p(1,"video",6),d()),e&2){let o=v();n(),r("src",o.videoUrl,w)}}function ce(e,t){if(e&1&&(m(0),p(1,"iframe",7),d()),e&2){let o=v();n(),r("src",o.videoUrl,T)}}var ie=(()=>{let t=class t{constructor(s,c){this.sanitizer=s,this.dialogService=c}get videoUrl(){return this.data.video_type==="storage"?this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url):this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.getYoutubeVideoId(this.data.url)}`)}ngOnInit(){}getYoutubeVideoId(s){let c=/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,l=s.match(c);return l?l[1]:null}openVideoDialog(){this.dialogService.open(te,this.data)}};t.\u0275fac=function(c){return new(c||t)(_(M),_(Q))},t.\u0275cmp=y({type:t,selectors:[["app-short-video-card"]],inputs:{data:"data"},standalone:!0,features:[C],decls:9,vars:5,consts:[[1,"max-w-xs","w-full","h-full","rounded","overflow-hidden","shadow-lg","bg-white","m-auto",3,"click"],[1,"relative","w-full","h-full","pb-16x9"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"absolute","left-2","top-2","p-3","rounded","bg-black","text-yellow-600"],[1,"absolute","w-full","bottom-2","p-3","rounded","text-white"],[1,"absolute","top-0","left-0","w-full","h-full","object-cover",3,"src"],["title","video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","referrerpolicy","strict-origin-when-cross-origin","allowfullscreen","",1,"absolute","top-0","left-0","w-full","h-full",3,"src"]],template:function(c,l){c&1&&(i(0,"div",0),x("click",function(){return l.openVideoDialog()}),i(1,"div",1),m(2,2),g(3,le,2,1,"ng-container",3)(4,ce,2,1,"ng-container",3),d(),i(5,"div",4),u(6),a(),i(7,"div",5),u(8),a()()()),c&2&&(n(2),r("ngSwitch",l.data.video_type),n(),r("ngSwitchCase","storage"),n(),r("ngSwitchCase","youtube"),n(2),h(" ",l.data.category," "),n(2),h(" ",l.data.intro," "))},dependencies:[S,k,D],styles:["iframe[_ngcontent-%COMP%]{aspect-ratio:16/9;width:100%;height:100%}"]});let e=t;return e})();var ne=(()=>{let t=class t{constructor(){}ngOnInit(){}};t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=y({type:t,selectors:[["app-review-card"]],inputs:{data:"data"},standalone:!0,features:[C],decls:19,vars:12,consts:[[1,"max-w-xs","lg:min-w-[18rem]","min-w-[75vw]","w-full","h-full","rounded","overflow-hidden","shadow-lg","bg-white"],[1,"py-6","px-4","min-h-[200px]"],[1,"flex","flex-col","justify-between","min-h-[180px]"],[1,"flex"],[1,"flex","items-center","gap-2"],["alt","Avatar",1,"w-8","h-8","rounded-full",3,"src"],[1,"flex","flex-col"],[3,"rating"],[1,"text-gray-400","invisible"],[1,"text-gray-500","my-4"],[1,"text-gray-400","lg:invisible"]],template:function(c,l){c&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"div",4),p(6,"img",5),i(7,"div",6)(8,"div"),u(9),a(),p(10,"tmf-star-rating",7),a()(),i(11,"div",8),u(12),z(13,"date"),a()(),i(14,"div",9),u(15),a()(),i(16,"div",10),u(17),z(18,"date"),a()()()()),c&2&&(n(6),r("src",l.data.avator_image,w),n(3),V(l.data.nick_name),n(),r("rating",l.data.rate),n(2),h(" ",B(13,6,l.data.create_datetime,"yyyy-MM-dd")," "),n(3),h(" ",l.data.comment," "),n(2),h(" ",B(18,9,l.data.create_datetime,"yyyy-MM-dd")," "))},dependencies:[S,$,O]});let e=t;return e})();var se=(e,t)=>({"bg-orange-600 text-white":e,"border bg-white":t});function me(e,t){if(e&1&&p(0,"tmf-option",36),e&2){let o=t.$implicit;r("value",o.value)("label",o.label)}}function de(e,t){if(e&1){let o=A();i(0,"button",37),x("click",function(){let c=P(o).$implicit,l=v();return j(l.selectSubjectOption(c))}),u(1),a()}if(e&2){let o=t.$implicit,s=v();r("ngClass",U(2,se,s.selectedSubjectOption===o,s.selectedSubjectOption!==o)),n(),h(" ",o," ")}}function pe(e,t){if(e&1&&(m(0),i(1,"swiper-slide")(2,"div",39),p(3,"app-short-video-card",40),a()(),d()),e&2){let o=t.$implicit;n(3),r("data",o)}}function ue(e,t){if(e&1&&(m(0),i(1,"swiper-container",38),g(2,pe,4,1,"ng-container",35),a(),d()),e&2){let o=v();n(2),r("ngForOf",o.videoDataSource)}}function ge(e,t){if(e&1&&(m(0),i(1,"swiper-slide")(2,"div",39),p(3,"app-short-video-card",40),a()(),d()),e&2){let o=t.$implicit;n(3),r("data",o)}}function ve(e,t){if(e&1&&(m(0),i(1,"swiper-container",41),g(2,ge,4,1,"ng-container",35),a(),d()),e&2){let o=v();n(2),r("ngForOf",o.videoDataSource)}}function fe(e,t){if(e&1&&(m(0),i(1,"swiper-slide")(2,"div",39),p(3,"app-short-video-card",40),a()(),d()),e&2){let o=t.$implicit;n(3),r("data",o)}}function he(e,t){if(e&1&&(m(0),i(1,"swiper-container",42),g(2,fe,4,1,"ng-container",35),a(),d()),e&2){let o=v();n(2),r("ngForOf",o.videoDataSource)}}function _e(e,t){if(e&1&&(m(0),i(1,"swiper-slide")(2,"div",43)(3,"div",44),p(4,"tmf-card",45),a()()(),d()),e&2){let o=t.$implicit;n(4),r("data",o)("hoverEffect",!1)}}function we(e,t){if(e&1&&(m(0),i(1,"swiper-container",38),g(2,_e,5,2,"ng-container",35),a(),d()),e&2){let o=v();n(2),r("ngForOf",o.courseDataSource)}}function ye(e,t){if(e&1&&(m(0),i(1,"swiper-slide")(2,"div",43)(3,"div",44),p(4,"tmf-card",45),a()()(),d()),e&2){let o=t.$implicit;n(4),r("data",o)("hoverEffect",!1)}}function xe(e,t){if(e&1&&(m(0),i(1,"swiper-container",41),g(2,ye,5,2,"ng-container",35),a(),d()),e&2){let o=v();n(2),r("ngForOf",o.courseDataSource)}}function Ce(e,t){if(e&1&&(m(0),i(1,"swiper-slide")(2,"div",43)(3,"div",44),p(4,"tmf-card",45),a()()(),d()),e&2){let o=t.$implicit;n(4),r("data",o)("hoverEffect",!1)}}function Se(e,t){if(e&1&&(m(0),i(1,"swiper-container",42),g(2,Ce,5,2,"ng-container",35),a(),d()),e&2){let o=v();n(2),r("ngForOf",o.courseDataSource)}}function be(e,t){if(e&1&&(m(0),i(1,"swiper-slide")(2,"div",44),p(3,"app-review-card",40),a()(),d()),e&2){let o=t.$implicit;n(3),r("data",o)}}function Ee(e,t){if(e&1&&(m(0),i(1,"div",46)(2,"swiper-container",47),g(3,be,4,1,"ng-container",35),a()(),d()),e&2){let o=v();n(3),r("ngForOf",o.reviewDataSource)}}function ke(e,t){if(e&1&&(m(0),i(1,"div",49),p(2,"app-review-card",40),a(),d()),e&2){let o=t.$implicit;n(2),r("data",o)}}function De(e,t){if(e&1&&(m(0),i(1,"div",48)(2,"div",49)(3,"div",50)(4,"div",51)(5,"div",52)(6,"div",53),u(7,"\u4F7F\u7528\u597D\u8A55\u9AD8\u9054"),a(),i(8,"div",54),u(9,"4.7"),a(),p(10,"tmf-star-rating",55),a()()()(),g(11,ke,3,1,"ng-container",35),a(),d()),e&2){let o=v();n(10),r("rating",4.7)("starSize","1.5rem"),n(),r("ngForOf",o.reviewDataSource)}}function Fe(e,t){if(e&1&&(m(0),i(1,"div"),p(2,"img",56),a(),d()),e&2){let o=t.$implicit;n(2),r("src",o,w)}}var Ke=(()=>{let t=class t{selectSubjectOption(s){this.selectedSubjectOption=s}constructor(s){this.breakpointObserver=s,this.shortsSubjectOptions=["\u5168\u90E8","\u70F9\u98EA\u6599\u7406","\u7406\u8CA1\u6295\u8CC7","\u85DD\u8853\u5275\u4F5C","\u624B\u4F5C\u5DE5\u85DD"],this.selectedSubjectOption=null,this.videoDataSource=[],this.courseDataSource=[],this.reviewDataSource=[],this.howToUseStepImages=["./../../../assets/images/home-page/how-to-use/how-to-use-step-1.svg","./../../../assets/images/home-page/how-to-use/how-to-use-step-2.svg","./../../../assets/images/home-page/how-to-use/how-to-use-step-3.svg"],this.currentWindowSize="",this.control=new G(!1,[N.required]),this.items=[{label:"\u4F9D\u95DC\u9375\u5B57",value:1},{label:"\u4F9D\u985E\u5225",value:2}]}ngOnInit(){this.videoDataSource=Te,this.courseDataSource=Me,this.reviewDataSource=Oe,this.breakpointObserver.observe([f.Handset,f.Tablet,f.Web]).subscribe(s=>{let c={[f.Handset]:window.matchMedia(f.Handset).matches,[f.Tablet]:window.matchMedia(f.Tablet).matches,[f.Web]:window.matchMedia(f.Web).matches};this.updateValueBasedOnBreakpoints(c)})}updateValueBasedOnBreakpoints(s){s[f.Handset]?this.currentWindowSize="Handset":s[f.Tablet]?this.currentWindowSize="Tablet":s[f.Web]&&(this.currentWindowSize="Web"),console.log(this.currentWindowSize)}};t.\u0275fac=function(c){return new(c||t)(_(Z))},t.\u0275cmp=y({type:t,selectors:[["app-home-page"]],standalone:!0,features:[C],decls:56,vars:12,consts:[[1,"flex","h-full","w-full","flex-col"],[1,"relative","h-[80vh]","bg-[url('./assets/images/home-page/home-page-banner-mobile.svg')]","bg-auto","bg-top","bg-no-repeat","md:bg-[url('./assets/images/home-page/home-page-banner.svg')]","lg:bg-[url('./assets/images/home-page/home-page-banner.svg')]",2,"-webkit-mask","linear-gradient(180deg, #000 90%, transparent)"],[1,"absolute","left-1/2","top-1/4","w-10/12","-translate-x-1/2","-translate-y-1/2","lg:left-[30%]","lg:top-1/2","lg:w-[26%]","lg:-translate-y-1/2"],[1,"mb-6"],[1,"mb-2","text-4xl","font-bold","text-gray-900","lg:text-6xl"],[1,"font-bold","text-purple-800"],[1,"text-4xl","font-bold","text-gray-900","lg:text-6xl"],[1,"mb-6","text-gray-900","lg:text-lg"],[1,"search-box-container","flex","w-full","max-w-lg","overflow-hidden","rounded","border","border-gray-300"],[1,"bg-white","text-gray-700",3,"formControl"],[3,"value","label",4,"ngFor","ngForOf"],["type","text","placeholder","\u6E96\u5099\u597D\u555F\u7A0B\u4E86\u55CE\uFF1F",1,"flex-grow","border-r-0","bg-white","px-4","py-2","text-gray-700","focus:border-gray-500","focus:bg-white","focus:outline-none"],[1,"bg-white","px-4","py-2","text-black"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",1,"h-4","w-4","fill-current"],["d","M12.9 14.32a8 8 0 1 1 1.41-1.41l4.57 4.57-1.41 1.41-4.57-4.57zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"],[1,"my-5","flex","flex-col","gap-4"],[1,"w-full","bg-top","bg-no-repeat","pt-[1.5rem]","text-center","text-4xl",2,"background-image","url('./assets/images/home-page/orange-80-decorate.svg')"],[1,"w-full"],[1,"flex","flex-wrap","justify-center","gap-2"],["class","rounded px-4 py-2 hover:bg-orange-600 hover:text-white focus:outline-none",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"rounded","border","px-4","py-2","hover:bg-orange-600","hover:text-white","focus:outline-none"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"h-[24px]","w-[24px]","fill-black","hover:fill-white"],["d","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"],[1,"flex","h-[530px]","w-full","justify-center"],[1,"lg:w-9:12","w-10/12"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"mt-5","bg-orange-100","py-10","lg:skew-y-1"],[1,"lg:-skew-y-1"],[1,"mt-8","py-8"],[1,"flex","w-full","justify-center"],[1,"-mt-5","mb-5","bg-gray-50","bg-[url('./assets/images/home-page/section-bg-decorate.svg')]","bg-center","py-12"],[1,"my-8","flex","w-full","flex-col","items-center","gap-6"],[1,"flex","w-full","flex-col","items-center"],[4,"ngFor","ngForOf"],[3,"value","label"],[1,"rounded","px-4","py-2","hover:bg-orange-600","hover:text-white","focus:outline-none",3,"click","ngClass"],["slides-per-view","1","navigation","true"],[1,"m-auto","h-[530px]","w-full","p-2"],[3,"data"],["slides-per-view","3","navigation","true"],["slides-per-view","4","navigation","true"],[1,"m-auto","h-[530px]","w-full","flex-shrink-0","p-2"],[1,"w-full","flex-shrink-0","p-2","md:w-1/3","lg:w-1/4"],[3,"data","hoverEffect"],[1,"relative","w-4/5","overflow-hidden"],["slides-per-view","1"],[1,"flex","w-9/12","flex-wrap","justify-center","gap-3"],[1,"basis-1/4"],[1,"h-full","w-full","max-w-xs","overflow-hidden","rounded","bg-gray-400/25","shadow-lg"],[1,"p-6"],[1,"flex","flex-col","items-center","gap-2"],[1,"text-2xl"],[1,"text-7xl"],[3,"rating","starSize"],["alt","",3,"src"]],template:function(c,l){c&1&&(i(0,"div",0)(1,"section")(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"span",5),u(7,"\u9023\u7D50"),a(),u(8,"\u7121\u9650\u53EF\u80FD "),a(),i(9,"div",6),u(10," \u70BA\u4F60\u958B\u555F\u6A5F\u9047\u4E4B\u9580 "),a()(),i(11,"div",7),u(12," \u6BCF\u500B\u4EBA\u90FD\u64C1\u6709\u7368\u7279\u7684\u624D\u85DD\u8207\u5275\u9020\u529B\u3002\u56E0\u6B64\uFF0C\u6211\u5011\u63D0\u4F9B\u4E00\u500B\u5C08\u696D\u4E14\u591A\u5143\u5E73\u53F0\uFF0C\u8B93\u71B1\u611B\u85DD\u8853\u3001\u97F3\u6A02\u3001\u624B\u5DE5\u85DD\u4EE5\u53CA\u5275\u65B0\u6280\u8853\u7684\u4F60\uFF0C\u5230\u5FD7\u540C\u9053\u5408\u7684\u5925\u4F34\u53CA\u5C08\u696D\u5C0E\u5E2B\u3002 "),a(),i(13,"div",8)(14,"tmf-select",9),g(15,me,1,2,"tmf-option",10),a(),p(16,"input",11),i(17,"button",12),b(),i(18,"svg",13),p(19,"path",14),a()()()()()(),E(),i(20,"section",15)(21,"div",16),u(22," \u8AB2\u7A0B\u77ED\u5F71\u97F3 "),a(),i(23,"div",17)(24,"div",18),g(25,de,2,5,"button",19),i(26,"button",20),b(),i(27,"svg",21),p(28,"path",22),a()()()(),E(),i(29,"div",23)(30,"div",24),m(31,25),g(32,ue,3,1,"ng-container",26)(33,ve,3,1,"ng-container",26)(34,he,3,1,"ng-container",27),d(),a()()(),i(35,"section",28)(36,"div",29)(37,"div",16),u(38," \u63A8\u85A6\u8AB2\u7A0B "),a(),i(39,"div",30)(40,"div",31)(41,"div",24),m(42,25),g(43,we,3,1,"ng-container",26)(44,xe,3,1,"ng-container",26)(45,Se,3,1,"ng-container",27),d(),a()()()()(),i(46,"section",32)(47,"div",16),u(48," \u5B78\u54E1\u5C0E\u5E2B\u597D\u8A55\u63A8\u85A6 "),a(),i(49,"div",33),m(50,25),g(51,Ee,4,1,"ng-container",26)(52,De,12,3,"ng-container",27),d(),a()(),i(53,"section")(54,"div",34),g(55,Fe,3,1,"ng-container",35),a()()()),c&2&&(n(14),r("formControl",l.control),n(),r("ngForOf",l.items),n(10),r("ngForOf",l.shortsSubjectOptions),n(6),r("ngSwitch",l.currentWindowSize),n(),r("ngSwitchCase","Handset"),n(),r("ngSwitchCase","Tablet"),n(9),r("ngSwitch",l.currentWindowSize),n(),r("ngSwitchCase","Handset"),n(),r("ngSwitchCase","Tablet"),n(6),r("ngSwitch",l.currentWindowSize),n(),r("ngSwitchCase","Handset"),n(4),r("ngForOf",l.howToUseStepImages))},dependencies:[S,L,R,k,D,W,ie,ee,O,ne,Y,J],styles:['@charset "UTF-8";.card-container[_ngcontent-%COMP%]{display:flex;overflow:hidden;width:100%}.card[_ngcontent-%COMP%]{transition:transform .3s ease-in-out}.search-box-container[_ngcontent-%COMP%]:focus-within{border-color:#f97316;box-shadow:0 0 0 3px #f973164d}.parallax-bg[_ngcontent-%COMP%]{position:absolute;inset:0;background-attachment:fixed;background-size:cover;background-position:center;z-index:-1}.card[_ngcontent-%COMP%]{width:300px;height:200px;transition:transform .5s;cursor:pointer}.card[_ngcontent-%COMP%]:hover{transform:scale(1.1)}swiper-container[_ngcontent-%COMP%]{width:100%;height:100%}swiper-slide[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}']});let e=t;return e})();var Te=[{video_id:"1",name:"Introduction to JavaScript",category:"Programming",intro:"Learn the basics of JavaScript programming language.",video_type:"youtube",url:"https://youtu.be/bjCjJW_aAUk?si=zO58J-33XKrAGHjR",teacher_id:"t-1",course_id:"c-1"},{video_id:"2",name:"Cooking Italian Pasta",category:"Cooking",intro:"Master the art of making authentic Italian pasta dishes.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",teacher_id:"t-2",course_id:"c-2"},{video_id:"3",name:"Yoga for Beginners",category:"Fitness",intro:"Start your yoga journey with these beginner-friendly poses.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",teacher_id:"t-3",course_id:"c-3"},{video_id:"4",name:"Introduction to Astrophysics",category:"Science",intro:"Explore the wonders of the universe with basic astrophysics concepts.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",teacher_id:"t-4",course_id:"c-4"},{video_id:"5",name:"Abstract Oil Painting Techniques",category:"Art",intro:"Discover unique techniques for creating abstract oil paintings.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",teacher_id:"t-5",course_id:"c-5"},{video_id:"6",name:"Healthy Smoothie Recipes",category:"Cooking",intro:"Learn how to make delicious and nutritious smoothies at home.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",teacher_id:"t-6",course_id:"c-6"},{video_id:"7",name:"Introduction to Machine Learning",category:"Technology",intro:"Get started with machine learning algorithms and applications.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",teacher_id:"t-7",course_id:"c-7"},{video_id:"8",name:"Beginner's Guide to Meditation",category:"Wellness",intro:"Start your meditation practice with these simple techniques.",video_type:"storage",url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",teacher_id:"t-8",course_id:"c-8"}],Me=[{course_id:"1",mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A311",content:"\u8AB2\u7A0B\u5167\u5BB91",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A311",price:1e3,quantity:1,main_category:"\u4E3B\u5206\u985E1",sub_category:"\u6B21\u5206\u985E1",rating:4.5,ratingCount:100},{course_id:"2",mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100},{course_id:"3",mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100},{course_id:"4",mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100},{course_id:"5",mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100}],Oe=[{nick_name:"andersonlisa",avator_image:"https://dummyimage.com/636x651",rate:4.8,comment:"Start small myself teacher set.",create_datetime:new Date("2024-05-27T08:22:50")},{nick_name:"garzakara",avator_image:"https://dummyimage.com/636x651",rate:4.9,comment:"Hard body reason partner treatment.",create_datetime:new Date("2024-02-11T19:41:12")},{nick_name:"kellerkimberly",avator_image:"https://dummyimage.com/636x651",rate:5,comment:"Marriage someone society how new family individual.",create_datetime:new Date("2024-02-21T01:07:07")},{nick_name:"zstanley",avator_image:"https://dummyimage.com/636x651",rate:4.8,comment:"Upon never suggest institution I professor wish.",create_datetime:new Date("2024-01-06T09:10:48")},{nick_name:"garzajessica",avator_image:"https://dummyimage.com/21x441",rate:5,comment:"Move drop create discover seat become.",create_datetime:new Date("2024-05-27T18:11:08")},{nick_name:"jgarza",avator_image:"https://dummyimage.com/636x651",rate:4.9,comment:"Left order talk management condition receive.",create_datetime:new Date("2024-04-06T23:52:02")},{nick_name:"scott59",avator_image:"https://dummyimage.com/636x651",rate:4.7,comment:"Hundred want room begin box raise.",create_datetime:new Date("2024-04-16T23:52:28")},{nick_name:"martinezlaura",avator_image:"https://dummyimage.com/636x651",rate:4.8,comment:"Option price suddenly.",create_datetime:new Date("2024-01-15T20:49:07")}];export{Ke as default};