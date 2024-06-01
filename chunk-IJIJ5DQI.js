import{a as U}from"./chunk-65ED76EP.js";import{a as z,b as m}from"./chunk-XODWDK4X.js";import{c as M}from"./chunk-HNYTLT2O.js";import"./chunk-3XXL3IDN.js";import"./chunk-MIWHYMD4.js";import{h as P,i as T,l as y}from"./chunk-BX4K4IJ6.js";import{$a as v,Bb as f,Eb as w,Fb as O,Hb as j,Ja as p,Ka as k,Na as r,Oa as x,aa as h,bb as o,cb as S,ja as _,jb as e,ka as A,kb as t,la as E,lb as l,ma as C,mb as b,nb as F,pb as I,qb as g,rb as D,zb as i}from"./chunk-OQO4KDA7.js";import"./chunk-2XJVAMHT.js";var H=(()=>{let n=class n{constructor(a){this.sanitizer=a,this.videoId="",this.tag="",this.description=""}get videoUrl(){return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}?modestbranding=1`)}ngOnInit(){}};n.\u0275fac=function(d){return new(d||n)(x(M))},n.\u0275cmp=h({type:n,selectors:[["app-short-video-card"]],inputs:{videoId:"videoId",tag:"tag",description:"description"},standalone:!0,features:[w],decls:7,vars:3,consts:[[1,"max-w-xs","w-full","h-full","rounded","overflow-hidden","shadow-lg","bg-white"],[1,"relative","w-full","h-full","pb-16x9"],["title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","referrerpolicy","strict-origin-when-cross-origin","allowfullscreen","",1,"absolute","top-0","left-0","w-full","h-full",3,"src"],[1,"absolute","left-2","top-2","p-3","rounded","bg-black","text-yellow-600"],[1,"absolute","w-full","bottom-2","p-3","rounded","text-white"]],template:function(d,s){d&1&&(e(0,"div",0)(1,"div",1),l(2,"iframe",2),e(3,"div",3),i(4),t(),e(5,"div",4),i(6),t()()()),d&2&&(r(2),o("src",s.videoUrl,k),r(2),f(" ",s.tag," "),r(2),f(" ",s.description," "))},dependencies:[y]});let u=n;return u})();var V=()=>[],W=(u,n)=>({"bg-orange-600 text-white":u,"bg-white border":n});function $(u,n){if(u&1){let c=I();e(0,"button",57),g("click",function(){let d=_(c).$implicit,s=D();return A(s.selectSubjectOption(d))}),i(1),t()}if(u&2){let c=n.$implicit,a=D();o("ngClass",j(2,W,a.selectedSubjectOption===c,a.selectedSubjectOption!==c)),r(),f(" ",c," ")}}function N(u,n){u&1&&(b(0),e(1,"div",58),l(2,"app-short-video-card",59),t(),F())}function q(u,n){if(u&1&&(b(0),e(1,"div",60),l(2,"tmf-card",61),t(),F()),u&2){let c=n.$implicit;r(2),o("data",c)("hoverEffect",!1)}}function G(u,n){if(u&1&&(b(0),e(1,"div"),l(2,"img",62),t(),F()),u&2){let c=n.$implicit;r(2),o("src",c,p)}}var ne=(()=>{let n=class n{selectSubjectOption(a){this.selectedSubjectOption=a}get shortsTransformStyle(){return`translateX(-${this.shortsCurrentIndex*this.cardWidthPercentage}%)`}constructor(a){this.breakpointObserver=a,this.shortsSubjectOptions=["\u5168\u90E8","\u70F9\u98EA\u6599\u7406","\u7406\u8CA1\u6295\u8CC7","\u85DD\u8853\u5275\u4F5C","\u624B\u4F5C\u5DE5\u85DD"],this.selectedSubjectOption=null,this.courseDataSource=[],this.cards=[{title:"Card 1",content:"Content of Card 1"},{title:"Card 2",content:"Content of Card 2"},{title:"Card 3",content:"Content of Card 3"},{title:"Card 4",content:"Content of Card 4"},{title:"Card 5",content:"Content of Card 5"},{title:"Card 6",content:"Content of Card 6"},{title:"Card 7",content:"Content of Card 7"},{title:"Card 8",content:"Content of Card 8"},{title:"Card 9",content:"Content of Card 9"},{title:"Card 10",content:"Content of Card 10"}],this.visibleCards=4,this.cardWidthPercentage=25,this.shortsCurrentIndex=0,this.coursesCurrentIndex=0,this.howToUseStepImages=["./../../../assets/images/home-page/how-to-use/how-to-use-step-1.svg","./../../../assets/images/home-page/how-to-use/how-to-use-step-2.svg","./../../../assets/images/home-page/how-to-use/how-to-use-step-3.svg"]}ngOnInit(){this.courseDataSource=Q,this.breakpointObserver.observe([m.Handset,m.Tablet,m.Web]).subscribe(d=>{this.updateValueBasedOnBreakpoints(d.breakpoints)});let a={[m.Handset]:window.matchMedia(m.Handset).matches,[m.Tablet]:window.matchMedia(m.Tablet).matches,[m.Web]:window.matchMedia(m.Web).matches};this.updateValueBasedOnBreakpoints(a)}updateValueBasedOnBreakpoints(a){a[m.Handset]?(this.visibleCards=1,this.cardWidthPercentage=100):a[m.Tablet]?(this.visibleCards=2,this.cardWidthPercentage=35):a[m.Web]&&(this.visibleCards=4,this.cardWidthPercentage=25)}shortsPrev(){this.shortsCurrentIndex>0&&this.shortsCurrentIndex--}shortsNext(){this.shortsCurrentIndex<this.cards.length-this.visibleCards&&this.shortsCurrentIndex++}get coursesTransformStyle(){return`translateX(-${this.coursesCurrentIndex*this.cardWidthPercentage}%)`}coursesPrev(){this.coursesCurrentIndex>0&&this.coursesCurrentIndex--}coursesNext(){this.coursesCurrentIndex<this.courseDataSource.length-this.visibleCards&&this.coursesCurrentIndex++}};n.\u0275fac=function(d){return new(d||n)(x(z))},n.\u0275cmp=h({type:n,selectors:[["app-home-page"]],standalone:!0,features:[w],decls:158,vars:15,consts:[[1,"w-full","h-full","flex","flex-col"],[1,"h-[80vh]","bg-auto","bg-no-repeat","lg:bg-[url('./assets/images/home-page/home-page-banner.svg')]","bg-[url('./assets/images/home-page/home-page-banner-mobile.svg')]","bg-top","relative",2,"-webkit-mask","linear-gradient(180deg, #000 90%, transparent)"],[1,"absolute","lg:top-1/2","lg:left-[30%]","lg:w-[26%]","lg:-translate-y-1/2","w-10/12","left-1/2","-translate-x-1/2","lg:top-1/2","top-1/4","-translate-y-1/2"],[1,"mb-6"],[1,"lg:text-6xl","text-4xl","font-bold","mb-2","text-gray-900"],[1,"text-purple-800","font-bold"],[1,"lg:text-6xl","text-4xl","font-bold","text-gray-900"],[1,"lg:text-lg","text-gray-900","mb-6"],[1,"flex","border","border-gray-300","rounded","overflow-hidden","w-full","max-w-lg","search-box-container"],[1,"relative"],[1,"appearance-none","h-full","bg-white","text-gray-700","py-2","pl-3","pr-8","leading-tight","focus:outline-none","focus:bg-white","focus:border-gray-500","border-r-0"],["value","option1"],["value","option2"],[1,"pointer-events-none","absolute","inset-y-0","right-0","flex","items-center","px-2","text-gray-700"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"fill-current","h-4","w-4"],["d","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"],["type","text","placeholder","\u6E96\u5099\u597D\u555F\u7A0B\u4E86\u55CE\uFF1F",1,"bg-white","text-gray-700","py-2","px-4","flex-grow","focus:outline-none","focus:bg-white","focus:border-gray-500","border-r-0"],[1,"bg-white","text-black","py-2","px-4"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",1,"fill-current","h-4","w-4"],["d","M12.9 14.32a8 8 0 1 1 1.41-1.41l4.57 4.57-1.41 1.41-4.57-4.57zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"],[1,"my-5","flex","flex-col","gap-4"],[1,"w-full","text-center","text-4xl","pt-[1.5rem]","bg-no-repeat","bg-top",2,"background-image","url('./assets/images/home-page/orange-80-decorate.svg')"],[1,"w-full"],[1,"flex","justify-center","gap-2","flex-wrap"],["class","px-4 py-2 rounded hover:bg-orange-600 hover:text-white focus:outline-none",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"px-4","py-2","rounded","border","hover:bg-orange-600","hover:text-white","focus:outline-none"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"fill-black","hover:fill-white","w-[24px]","h-[24px]"],["d","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"],[1,"w-full","flex","justify-center"],[1,"relative","w-9/12","overflow-hidden"],[1,"flex","transition-transform","duration-300"],[4,"ngFor","ngForOf"],[1,"absolute","left-0","top-1/2","transform","-translate-y-1/2","bg-gray-800","text-white","p-2","rounded-full",3,"click"],[1,"absolute","right-0","top-1/2","transform","-translate-y-1/2","bg-gray-800","text-white","p-2","rounded-full",3,"click"],[1,"mt-5","py-10","bg-orange-100","lg:skew-y-1"],[1,"lg:-skew-y-1"],[1,"mt-8","py-8"],[1,"-mt-5","mb-5","py-12","bg-gray-50","bg-[url('./assets/images/home-page/section-bg-decorate.svg')]","bg-center"],[1,"my-8","w-full","flex","flex-col","items-center","gap-6"],[1,"w-9/12","flex","justify-start","gap-6"],[1,"max-w-xs","w-full","h-full","rounded","overflow-hidden","shadow-lg","bg-gray-400/25"],[1,"p-8"],[1,"flex","flex-col","items-center","gap-2"],[1,"text-2xl"],[1,"text-7xl"],[1,"max-w-xs","w-full","h-full","rounded","overflow-hidden","shadow-lg","bg-white"],[1,"py-6","px-4"],[1,"flex","justify-between"],[1,"flex","items-center","gap-2"],["alt","Avatar",1,"w-8","h-8","rounded-full",3,"src"],[1,"flex","flex-col"],[1,"text-gray-400"],[1,"font-bold","my-4"],[1,"text-gray-500","my-4"],[1,"w-9/12","flex","justify-center","gap-6"],[1,"w-9/12","flex","justify-end","gap-6"],[1,"w-full","flex","flex-col","items-center"],[1,"px-4","py-2","rounded","hover:bg-orange-600","hover:text-white","focus:outline-none",3,"click","ngClass"],[1,"lg:w-1/4","md:w-1/3","w-full","h-[530px]","p-2","flex-shrink-0"],["videoId","PMfmYUIxV5Q?si=7TiUCmLabml-UrkQ","tag","\u85DD\u8853\u5275\u4F5C","description","\u9019\u662F\u4E00\u5247\u85DD\u8853\u5275\u4F5C\u76F8\u95DC\u7684\u5F71\u7247\uFF0C\u653E\u9B06\u8EAB\u9AD4\uFF0C\u4E00\u5207\u611F\u5B98\u4EA4\u7D66\u756B\u7B46"],[1,"lg:w-1/4","md:w-1/3","w-full","p-2","flex-shrink-0"],[3,"data","hoverEffect"],["alt","",3,"src"]],template:function(d,s){d&1&&(e(0,"div",0)(1,"section")(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"span",5),i(7,"\u9023\u7D50"),t(),i(8,"\u7121\u9650\u53EF\u80FD "),t(),e(9,"div",6),i(10," \u70BA\u4F60\u958B\u555F\u6A5F\u9047\u4E4B\u9580 "),t()(),e(11,"div",7),i(12," \u6BCF\u500B\u4EBA\u90FD\u64C1\u6709\u7368\u7279\u7684\u624D\u85DD\u8207\u5275\u9020\u529B\u3002\u56E0\u6B64\uFF0C\u6211\u5011\u63D0\u4F9B\u4E00\u500B\u5C08\u696D\u4E14\u591A\u5143\u5E73\u53F0\uFF0C\u8B93\u71B1\u611B\u85DD\u8853\u3001\u97F3\u6A02\u3001\u624B\u5DE5\u85DD\u4EE5\u53CA\u5275\u65B0\u6280\u8853\u7684\u4F60\uFF0C\u5230\u5FD7\u540C\u9053\u5408\u7684\u5925\u4F34\u53CA\u5C08\u696D\u5C0E\u5E2B\u3002 "),t(),e(13,"div",8)(14,"div",9)(15,"select",10)(16,"option",11),i(17,"\u4F9D\u8AB2\u7A0B"),t(),e(18,"option",12),i(19,"\u4F9D\u6559\u5E2B"),t()(),e(20,"div",13),E(),e(21,"svg",14),l(22,"path",15),t()()(),C(),l(23,"input",16),e(24,"button",17),E(),e(25,"svg",18),l(26,"path",19),t()()()()()(),C(),e(27,"section",20)(28,"div",21),i(29," \u8AB2\u7A0B\u77ED\u5F71\u97F3 "),t(),e(30,"div",22)(31,"div",23),v(32,$,2,5,"button",24),e(33,"button",25),E(),e(34,"svg",26),l(35,"path",27),t()()()(),C(),e(36,"div",28)(37,"div",29)(38,"div",30),v(39,N,3,0,"ng-container",31),t(),e(40,"button",32),g("click",function(){return s.shortsPrev()}),i(41," \u2190 "),t(),e(42,"button",33),g("click",function(){return s.shortsNext()}),i(43," \u2192 "),t()()()(),e(44,"section",34)(45,"div",35)(46,"div",21),i(47," \u63A8\u85A6\u8AB2\u7A0B "),t(),e(48,"div",36)(49,"div",28)(50,"div",29)(51,"div",30),v(52,q,3,2,"ng-container",31),t(),e(53,"button",32),g("click",function(){return s.coursesPrev()}),i(54," \u2190 "),t(),e(55,"button",33),g("click",function(){return s.coursesNext()}),i(56," \u2192 "),t()()()()()(),e(57,"section",37)(58,"div",21),i(59," \u5B78\u54E1\u5C0E\u5E2B\u597D\u8A55\u63A8\u85A6 "),t(),e(60,"div",38)(61,"div",39)(62,"div",40)(63,"div",41)(64,"div",42)(65,"div",43),i(66,"\u4F7F\u7528\u597D\u8A55\u9AD8\u9054"),t(),e(67,"div",44),i(68,"4.7"),t()()()(),e(69,"div",45)(70,"div",46)(71,"div",47)(72,"div",48),l(73,"img",49),e(74,"div",50)(75,"div"),i(76,"\u55B5\u55B5\u5C0F\u59D0"),t()()(),e(77,"div",51),i(78,"2024-05-16"),t()(),e(79,"div",52),i(80,"\u53EF\u4EE5\u4E00\u5C55\u9577\u624D\u7684\u5E73\u53F0"),t(),e(81,"div",53),i(82," \u53EF\u4EE5\u8A8D\u8B58\u4E0D\u540C\u9818\u57DF\u7684\u9AD8\u624B\uFF0C\u4E26\u4E14\u628A\u559C\u6B61\u7684\u9818\u57DF\u505A\u63A8\u5EE3\uFF0C\u662F\u4E00\u4EF6\u958B\u5FC3\u7684\u4E8B\u3002 "),t()()(),e(83,"div",45)(84,"div",46)(85,"div",47)(86,"div",48),l(87,"img",49),e(88,"div",50)(89,"div"),i(90,"\u55B5\u55B5\u5C0F\u59D0"),t()()(),e(91,"div",51),i(92,"2024-05-16"),t()(),e(93,"div",52),i(94,"\u53EF\u4EE5\u4E00\u5C55\u9577\u624D\u7684\u5E73\u53F0"),t(),e(95,"div",53),i(96," \u53EF\u4EE5\u8A8D\u8B58\u4E0D\u540C\u9818\u57DF\u7684\u9AD8\u624B\uFF0C\u4E26\u4E14\u628A\u559C\u6B61\u7684\u9818\u57DF\u505A\u63A8\u5EE3\uFF0C\u662F\u4E00\u4EF6\u958B\u5FC3\u7684\u4E8B\u3002 "),t()()()(),e(97,"div",54)(98,"div",45)(99,"div",46)(100,"div",47)(101,"div",48),l(102,"img",49),e(103,"div",50)(104,"div"),i(105,"\u55B5\u55B5\u5C0F\u59D0"),t()()(),e(106,"div",51),i(107,"2024-05-16"),t()(),e(108,"div",52),i(109,"\u53EF\u4EE5\u4E00\u5C55\u9577\u624D\u7684\u5E73\u53F0"),t(),e(110,"div",53),i(111," \u53EF\u4EE5\u8A8D\u8B58\u4E0D\u540C\u9818\u57DF\u7684\u9AD8\u624B\uFF0C\u4E26\u4E14\u628A\u559C\u6B61\u7684\u9818\u57DF\u505A\u63A8\u5EE3\uFF0C\u662F\u4E00\u4EF6\u958B\u5FC3\u7684\u4E8B\u3002 "),t()()(),e(112,"div",45)(113,"div",46)(114,"div",47)(115,"div",48),l(116,"img",49),e(117,"div",50)(118,"div"),i(119,"\u55B5\u55B5\u5C0F\u59D0"),t()()(),e(120,"div",51),i(121,"2024-05-16"),t()(),e(122,"div",52),i(123,"\u53EF\u4EE5\u4E00\u5C55\u9577\u624D\u7684\u5E73\u53F0"),t(),e(124,"div",53),i(125," \u53EF\u4EE5\u8A8D\u8B58\u4E0D\u540C\u9818\u57DF\u7684\u9AD8\u624B\uFF0C\u4E26\u4E14\u628A\u559C\u6B61\u7684\u9818\u57DF\u505A\u63A8\u5EE3\uFF0C\u662F\u4E00\u4EF6\u958B\u5FC3\u7684\u4E8B\u3002 "),t()()()(),e(126,"div",55)(127,"div",45)(128,"div",46)(129,"div",47)(130,"div",48),l(131,"img",49),e(132,"div",50)(133,"div"),i(134,"\u55B5\u55B5\u5C0F\u59D0"),t()()(),e(135,"div",51),i(136,"2024-05-16"),t()(),e(137,"div",52),i(138,"\u53EF\u4EE5\u4E00\u5C55\u9577\u624D\u7684\u5E73\u53F0"),t(),e(139,"div",53),i(140," \u53EF\u4EE5\u8A8D\u8B58\u4E0D\u540C\u9818\u57DF\u7684\u9AD8\u624B\uFF0C\u4E26\u4E14\u628A\u559C\u6B61\u7684\u9818\u57DF\u505A\u63A8\u5EE3\uFF0C\u662F\u4E00\u4EF6\u958B\u5FC3\u7684\u4E8B\u3002 "),t()()(),e(141,"div",45)(142,"div",46)(143,"div",47)(144,"div",48),l(145,"img",49),e(146,"div",50)(147,"div"),i(148,"\u55B5\u55B5\u5C0F\u59D0"),t()()(),e(149,"div",51),i(150,"2024-05-16"),t()(),e(151,"div",52),i(152,"\u53EF\u4EE5\u4E00\u5C55\u9577\u624D\u7684\u5E73\u53F0"),t(),e(153,"div",53),i(154," \u53EF\u4EE5\u8A8D\u8B58\u4E0D\u540C\u9818\u57DF\u7684\u9AD8\u624B\uFF0C\u4E26\u4E14\u628A\u559C\u6B61\u7684\u9818\u57DF\u505A\u63A8\u5EE3\uFF0C\u662F\u4E00\u4EF6\u958B\u5FC3\u7684\u4E8B\u3002 "),t()()()()()(),e(155,"section")(156,"div",56),v(157,G,3,1,"ng-container",31),t()()()),d&2&&(r(32),o("ngForOf",s.shortsSubjectOptions),r(6),S("transform",s.shortsTransformStyle),r(),o("ngForOf",O(14,V).constructor(10)),r(12),S("transform",s.coursesTransformStyle),r(),o("ngForOf",s.courseDataSource),r(21),o("src","https://i.imgur.com/gj4buCB.jpeg",p),r(14),o("src","https://i.imgur.com/gj4buCB.jpeg",p),r(15),o("src","https://i.imgur.com/gj4buCB.jpeg",p),r(14),o("src","https://i.imgur.com/gj4buCB.jpeg",p),r(15),o("src","https://i.imgur.com/gj4buCB.jpeg",p),r(14),o("src","https://i.imgur.com/gj4buCB.jpeg",p),r(12),o("ngForOf",s.howToUseStepImages))},dependencies:[y,P,T,H,U],styles:['@charset "UTF-8";.card-container[_ngcontent-%COMP%]{display:flex;overflow:hidden;width:100%}.card[_ngcontent-%COMP%]{transition:transform .3s ease-in-out}.search-box-container[_ngcontent-%COMP%]:focus-within{border-color:#f97316;box-shadow:0 0 0 3px #f973164d}.parallax-bg[_ngcontent-%COMP%]{position:absolute;inset:0;background-attachment:fixed;background-size:cover;background-position:center;z-index:-1}.card[_ngcontent-%COMP%]{width:300px;height:200px;transition:transform .5s;cursor:pointer}.card[_ngcontent-%COMP%]:hover{transform:scale(1.1)}']});let u=n;return u})();var Q=[{mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A311",content:"\u8AB2\u7A0B\u5167\u5BB91",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A311",price:1e3,quantity:1,main_category:"\u4E3B\u5206\u985E1",sub_category:"\u6B21\u5206\u985E1",rating:4.5,ratingCount:100},{mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100},{mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100},{mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100},{mainImg:"https://fakeimg.pl/300/",title:"\u8AB2\u7A0B\u540D\u7A312",content:"\u8AB2\u7A0B\u5167\u5BB92",avatar:"https://fakeimg.pl/300/",name:"\u8001\u5E2B\u540D\u7A312",price:2e3,quantity:2,main_category:"\u4E3B\u5206\u985E2",sub_category:"\u6B21\u5206\u985E2",rating:4.5,ratingCount:100}];export{ne as default};
