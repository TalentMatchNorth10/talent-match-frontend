import{d as Q}from"./chunk-GF23IXSY.js";import{c as z,d as O}from"./chunk-EFXHSPSL.js";import{f as j}from"./chunk-M6PVZGW2.js";import{v as I}from"./chunk-3PMTIMLI.js";import{Cb as k,Db as E,Eb as S,Gb as c,Ib as f,Ja as v,Na as l,Oa as C,Ob as D,Za as V,aa as M,db as P,fa as y,fb as h,gb as b,jb as T,ob as r,pa as s,pb as n,qa as d,qb as x,ub as _,xb as p,yb as w}from"./chunk-3A66ECCW.js";var F=["videoPlayer"];function U(m,a){if(m&1){let g=_();r(0,"div",21),p("click",function(t){s(g);let e=w();return d(e.setProgress(t))}),x(1,"div",22),n()}if(m&2){let g=w();l(),b("width",g.progress,"%")}}var R=(()=>{let a=class a{constructor(i,t,e){this.dialogRef=i,this.router=t,this.data=e,this.isPlaying=V(!1),this.progress=0}ngAfterViewInit(){this.videoPlayer.nativeElement.play(),this.isPlaying.set(!0)}initializeVideo(){this.progress=0}updateProgress(){let i=this.videoPlayer.nativeElement;this.progress=i.currentTime/i.duration*100}setProgress(i){let t=i.currentTarget,e=i.offsetX/t.offsetWidth*this.videoPlayer.nativeElement.duration;this.videoPlayer.nativeElement.currentTime=e}close(){this.dialogRef.close()}navigateToCoursePage(i){this.router.navigate([`course-detail/${i.course_id}`]),this.close()}navigateToTeacherPage(i){this.router.navigate([`detail-teacher/${i.teacher_id}`]),this.close()}};a.\u0275fac=function(t){return new(t||a)(C(z),C(j),C(O))},a.\u0275cmp=y({type:a,selectors:[["tmf-video-dialog"]],viewQuery:function(t,e){if(t&1&&k(F,5),t&2){let o;E(o=S())&&(e.videoPlayer=o.first)}},standalone:!0,features:[D],decls:31,vars:7,consts:[["videoPlayer",""],[1,"relative","flex","h-screen","w-full","max-w-[375px]","items-center","justify-between","xl:h-[712px]","xl:w-[472px]"],[1,"relative","h-full","w-full","cursor-pointer","overflow-hidden","shadow-2xl","xl:w-[25rem]","xl:rounded-xl"],[1,"absolute","left-3","top-3","rounded-lg","bg-tmf-gray-1","px-3","py-1","text-sm","font-bold","text-tmf-yellow-1"],[1,"h-full","w-full","object-cover",3,"timeupdate","loadedmetadata","src"],[1,"mask","absolute","bottom-0","h-[168px]","w-full"],[1,"flex","h-full","items-end"],[1,"flex","w-full","flex-col","gap-4","px-4","pb-6"],[1,"flex","items-center","gap-2"],["alt","",1,"h-6","w-6","rounded-full","border","border-tmf-gray-6",3,"src"],[1,"text-base","font-medium","text-white"],[1,"pr-10","text-base","text-white"],[1,"progress-container"],[1,"absolute","bottom-0","right-0","h-full"],[1,"flex","h-full","flex-col","items-end","justify-between"],[1,"material-icons","mr-1","mt-1","cursor-pointer","text-4xl","leading-9","text-white","xl:text-[2.5rem]","xl:leading-[2.5rem]",3,"click"],[1,"relative","z-10","flex","flex-col","gap-6","pb-[60px]","pr-2","xl:pb-2","xl:pr-2"],[1,"flex","h-10","w-10","cursor-pointer","items-center","justify-center","rounded-full","bg-white","text-tmf-orange-1","xl:h-12","xl:w-12",3,"click"],[1,"material-symbols-outlined","text-xl","leading-5","xl:text-[24px]","xl:leading-6"],[1,"flex","h-10","w-10","cursor-pointer","items-center","justify-center","rounded-full","bg-white","text-tmf-orange-1","xl:h-12","xl:w-12"],["alt","",1,"h-10","w-10","rounded-full","border","bg-tmf-gray-6","xl:h-12","xl:w-12",3,"click","src"],[1,"progress-container",3,"click"],[1,"h-full","w-0","bg-tmf-orange-1"]],template:function(t,e){if(t&1){let o=_();r(0,"div",1)(1,"div",2)(2,"div",3),c(3),n(),r(4,"video",4,0),p("timeupdate",function(){return s(o),d(e.updateProgress())})("loadedmetadata",function(){return s(o),d(e.initializeVideo())}),n(),r(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8),x(10,"img",9),r(11,"p",10),c(12),n()(),r(13,"p",11),c(14),n()()(),P(15,U,2,2,"div",12),n()(),r(16,"div",13)(17,"div",14)(18,"span",15),p("click",function(){return s(o),d(e.close())}),c(19,"close"),n(),r(20,"div",16)(21,"div",17),p("click",function(){return s(o),d(e.navigateToTeacherPage(e.data))}),r(22,"span",18),c(23," arrow_right_alt "),n()(),r(24,"div",19)(25,"span",18),c(26," share "),n()(),r(27,"img",20),p("click",function(){return s(o),d(e.navigateToTeacherPage(e.data))}),n(),r(28,"div",19)(29,"span",18),c(30," bookmark "),n()()()()()()}t&2&&(l(3),f(" ",e.data.category," "),l(),h("src",e.data.url,v),l(6),h("src",e.data.teacher_avatar_url,v),l(2),f(" ",e.data.teacher_name," "),l(2),f(" ",e.data.intro," "),l(),T(15,e.isPlaying()?15:-1),l(12),h("src",e.data.teacher_avatar_url,v))},styles:[".video-container[_ngcontent-%COMP%]{position:relative;width:100%;height:auto}.video[_ngcontent-%COMP%]{width:100%;height:auto}.progress-container[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;height:4px;cursor:pointer}.mask[_ngcontent-%COMP%]{background:linear-gradient(180deg,#0000 -.01%,#0009 74.25%)}"]});let m=a;return m})();var q=["videoPlayer"];function W(m,a){if(m&1){let g=_();r(0,"div",8),p("click",function(t){s(g);let e=w();return d(e.setProgress(t))}),x(1,"div",9),n()}if(m&2){let g=w();l(),b("width",g.progress,"%")}}var ne=(()=>{let a=class a{constructor(){this.dialogService=M(Q),this.isPlaying=V(!1),this.progress=0}togglePlay(i){let t=this.videoPlayer.nativeElement;i?(this.isPlaying.set(!0),t.play().catch(()=>this.isPlaying.set(!1)),t.muted=!0):(this.isPlaying.set(!1),t.pause(),this.progress=0,t.currentTime=0)}initializeVideo(){this.progress=0}updateProgress(){let i=this.videoPlayer.nativeElement;this.progress=i.currentTime/i.duration*100}setProgress(i){let t=i.currentTarget,e=i.offsetX/t.offsetWidth*this.videoPlayer.nativeElement.duration;this.videoPlayer.nativeElement.currentTime=e}openVideoDialog(){this.dialogService.openVideoDialog(R,this.data),this.videoPlayer.nativeElement.pause(),this.isPlaying.set(!1)}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=y({type:a,selectors:[["tmf-video-card"]],viewQuery:function(t,e){if(t&1&&k(q,7),t&2){let o;E(o=S())&&(e.videoPlayer=o.first)}},inputs:{data:"data"},standalone:!0,features:[D],decls:10,vars:5,consts:[["videoPlayer",""],[1,"relative","h-[298px]","w-[168px]","cursor-pointer","overflow-hidden","rounded-xl","border","border-tmf-gray-6","shadow-lg","md:h-[537px]","md:w-[302px]","xl:h-[33.75rem]","xl:w-[18.875rem]",3,"mouseenter","mouseleave","click"],[1,"absolute","left-3","top-3","rounded-lg","bg-tmf-gray-1","px-3","py-1","text-sm","font-bold","text-tmf-yellow-1"],["preload","auto","muted","",1,"h-full","w-full","object-cover",3,"timeupdate","loadedmetadata","src","preload"],[1,"mask","absolute","bottom-0","h-[140px]","w-full"],[1,"flex","h-full","w-full","items-end"],[1,"px-3","pb-3","text-sm","text-white","xl:px-4","xl:pb-6","xl:text-base","line-clamp-3"],[1,"progress-container"],[1,"progress-container",3,"click"],[1,"h-full","w-0","bg-tmf-orange-1"]],template:function(t,e){if(t&1){let o=_();r(0,"div",1),p("mouseenter",function(){return s(o),d(e.togglePlay(!0))})("mouseleave",function(){return s(o),d(e.togglePlay(!1))})("click",function(){return s(o),d(e.openVideoDialog())}),r(1,"div",2),c(2),n(),r(3,"video",3,0),p("timeupdate",function(){return s(o),d(e.updateProgress())})("loadedmetadata",function(){return s(o),d(e.initializeVideo())}),n(),r(5,"div",4)(6,"div",5)(7,"p",6),c(8),n()(),P(9,W,2,2,"div",7),n()()}t&2&&(l(2),f(" ",e.data.category," "),l(),h("src",e.data.url,v)("preload",!0),l(5),f(" ",e.data.intro," "),l(),T(9,e.isPlaying()?9:-1))},dependencies:[I],styles:[".video-container[_ngcontent-%COMP%]{position:relative;width:100%;height:auto}.video[_ngcontent-%COMP%]{width:100%;height:auto}.progress-container[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;height:4px;cursor:pointer}.mask[_ngcontent-%COMP%]{background:linear-gradient(180deg,#0000 -.01%,#0009 74.25%)}"]});let m=a;return m})();export{ne as a};