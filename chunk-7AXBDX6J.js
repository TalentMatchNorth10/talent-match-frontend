import{a as R}from"./chunk-UDETA2XY.js";import{c as z,d as Q}from"./chunk-CTPH3CYC.js";import{f as O}from"./chunk-C7JF7AYC.js";import{v as j}from"./chunk-CMTOSVCB.js";import{$ as M,Bb as k,Cb as E,Db as S,Fb as c,Gb as I,Hb as w,Ia as f,Ma as l,Na as C,Ob as D,Ya as V,cb as P,ea as y,eb as v,fb as b,ib as T,nb as n,oa as s,ob as r,pa as d,pb as x,tb as h,wb as u,xb as _}from"./chunk-M2XE62KH.js";var U=["videoPlayer"];function q(m,a){if(m&1){let g=h();n(0,"div",21),u("click",function(t){s(g);let e=_();return d(e.setProgress(t))}),x(1,"div",22),r()}if(m&2){let g=_();l(),b("width",g.progress,"%")}}var A=(()=>{let a=class a{constructor(i,t,e){this.dialogRef=i,this.router=t,this.data=e,this.isPlaying=V(!1),this.progress=0}ngAfterViewInit(){this.videoPlayer.nativeElement.play(),this.isPlaying.set(!0)}initializeVideo(){this.progress=0}updateProgress(){let i=this.videoPlayer.nativeElement;this.progress=i.currentTime/i.duration*100}setProgress(i){let t=i.currentTarget,e=i.offsetX/t.offsetWidth*this.videoPlayer.nativeElement.duration;this.videoPlayer.nativeElement.currentTime=e}close(){this.dialogRef.close()}navigateToCoursePage(i){this.router.navigate([`course-detail/${i.course_id}`]),this.close()}navigateToTeacherPage(i){this.router.navigate([`teacher-detail/${i.teacher_id}`]),this.close()}};a.\u0275fac=function(t){return new(t||a)(C(z),C(O),C(Q))},a.\u0275cmp=y({type:a,selectors:[["tmf-video-dialog"]],viewQuery:function(t,e){if(t&1&&k(U,5),t&2){let o;E(o=S())&&(e.videoPlayer=o.first)}},standalone:!0,features:[D],decls:31,vars:7,consts:[["videoPlayer",""],[1,"relative","w-[375px]","h-screen","flex","justify-between","items-center","xl:w-[472px]","xl:h-[712px]"],[1,"relative","w-full","h-full","overflow-hidden","shadow-2xl","cursor-pointer","xl:w-[25rem]","xl:rounded-xl"],[1,"text-sm","font-bold","bg-tmf-gray-1","text-tmf-yellow-1","px-3","py-1","rounded-lg","absolute","top-3","left-3"],[1,"w-full","h-full","object-cover",3,"timeupdate","loadedmetadata","src"],[1,"absolute","bottom-0","w-full","h-[168px]","mask"],[1,"h-full","flex","items-end"],[1,"w-full","flex","flex-col","gap-4","px-4","pb-6"],[1,"flex","items-center","gap-2"],["alt","",1,"w-6","h-6","rounded-full","border","border-tmf-gray-6",3,"src"],[1,"text-base","font-medium","text-white"],[1,"text-base","text-white"],[1,"progress-container"],[1,"absolute","bottom-0","right-0","h-full"],[1,"flex","flex-col","justify-between","items-end","h-full"],[1,"text-4xl","leading-9","text-white","material-icons","cursor-pointer","xl:text-[2.5rem]","xl:leading-[2.5rem]",3,"click"],[1,"flex","flex-col","gap-6","pb-[88px]","pr-1","xl:p-0"],[1,"flex","justify-center","items-center","w-10","h-10","rounded-full","bg-white","text-tmf-orange-1","cursor-pointer","xl:w-12","xl:h-12",3,"click"],[1,"text-xl","leading-5","material-symbols-outlined","xl:text-[24px]","xl:leading-6"],[1,"flex","justify-center","items-center","w-10","h-10","rounded-full","bg-white","text-tmf-orange-1","cursor-pointer","xl:w-12","xl:h-12"],["alt","",1,"w-10","h-10","rounded-full","border","bg-tmf-gray-6","xl:w-12","xl:h-12",3,"click","src"],[1,"progress-container",3,"click"],[1,"h-full","w-0","bg-tmf-orange-1"]],template:function(t,e){if(t&1){let o=h();n(0,"div",1)(1,"div",2)(2,"div",3),c(3),r(),n(4,"video",4,0),u("timeupdate",function(){return s(o),d(e.updateProgress())})("loadedmetadata",function(){return s(o),d(e.initializeVideo())}),r(),n(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8),x(10,"img",9),n(11,"p",10),c(12),r()(),n(13,"p",11),c(14),r()()(),P(15,q,2,2,"div",12),r()(),n(16,"div",13)(17,"div",14)(18,"span",15),u("click",function(){return s(o),d(e.close())}),c(19,"close"),r(),n(20,"div",16)(21,"div",17),u("click",function(){return s(o),d(e.navigateToTeacherPage(e.data))}),n(22,"span",18),c(23," arrow_right_alt "),r()(),n(24,"div",19)(25,"span",18),c(26," share "),r()(),n(27,"img",20),u("click",function(){return s(o),d(e.navigateToTeacherPage(e.data))}),r(),n(28,"div",19)(29,"span",18),c(30," bookmark "),r()()()()()()}t&2&&(l(3),w(" ",e.data.category," "),l(),v("src",e.data.url,f),l(6),v("src",e.data.teacher_avatar_url,f),l(2),I(e.data.teacher_name),l(2),w(" ",e.data.intro," "),l(),T(15,e.isPlaying()?15:-1),l(12),v("src",e.data.teacher_avatar_url,f))},styles:[".video-container[_ngcontent-%COMP%]{position:relative;width:100%;height:auto}.video[_ngcontent-%COMP%]{width:100%;height:auto}.progress-container[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;height:4px;cursor:pointer}.mask[_ngcontent-%COMP%]{background:linear-gradient(180deg,#0000 -.01%,#0009 74.25%)}"]});let m=a;return m})();var W=["videoPlayer"];function X(m,a){if(m&1){let g=h();n(0,"div",8),u("click",function(t){s(g);let e=_();return d(e.setProgress(t))}),x(1,"div",9),r()}if(m&2){let g=_();l(),b("width",g.progress,"%")}}var oe=(()=>{let a=class a{constructor(){this.dialogService=M(R),this.isPlaying=V(!1),this.progress=0}togglePlay(i){let t=this.videoPlayer.nativeElement;i?(this.isPlaying.set(!0),t.play().catch(()=>this.isPlaying.set(!1)),t.muted=!0):(this.isPlaying.set(!1),t.pause(),this.progress=0,t.currentTime=0)}initializeVideo(){this.progress=0}updateProgress(){let i=this.videoPlayer.nativeElement;this.progress=i.currentTime/i.duration*100}setProgress(i){let t=i.currentTarget,e=i.offsetX/t.offsetWidth*this.videoPlayer.nativeElement.duration;this.videoPlayer.nativeElement.currentTime=e}openVideoDialog(){this.dialogService.openVideoDialog(A,this.data),this.videoPlayer.nativeElement.pause(),this.isPlaying.set(!1)}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=y({type:a,selectors:[["tmf-video-card"]],viewQuery:function(t,e){if(t&1&&k(W,7),t&2){let o;E(o=S())&&(e.videoPlayer=o.first)}},inputs:{data:"data"},standalone:!0,features:[D],decls:10,vars:4,consts:[["videoPlayer",""],[1,"relative","md:h-[537px]","md:w-[302px]","h-[298px]","w-[168px]","cursor-pointer","overflow-hidden","rounded-xl","border","border-tmf-gray-6","shadow-lg","xl:h-[33.75rem]","xl:w-[18.875rem]",3,"mouseenter","mouseleave","click"],[1,"absolute","left-3","top-3","rounded-lg","bg-tmf-gray-1","px-3","py-1","text-sm","font-bold","text-tmf-yellow-1"],["preload","auto","muted","",1,"h-full","w-full","object-cover",3,"timeupdate","loadedmetadata","src"],[1,"mask","absolute","bottom-0","h-[140px]","w-full"],[1,"flex","h-full","w-full","items-end"],[1,"px-3","pb-3","text-sm","text-white","xl:px-4","xl:pb-6","xl:text-base"],[1,"progress-container"],[1,"progress-container",3,"click"],[1,"h-full","w-0","bg-tmf-orange-1"]],template:function(t,e){if(t&1){let o=h();n(0,"div",1),u("mouseenter",function(){return s(o),d(e.togglePlay(!0))})("mouseleave",function(){return s(o),d(e.togglePlay(!1))})("click",function(){return s(o),d(e.openVideoDialog())}),n(1,"div",2),c(2),r(),n(3,"video",3,0),u("timeupdate",function(){return s(o),d(e.updateProgress())})("loadedmetadata",function(){return s(o),d(e.initializeVideo())}),r(),n(5,"div",4)(6,"div",5)(7,"p",6),c(8),r()(),P(9,X,2,2,"div",7),r()()}t&2&&(l(2),w(" ",e.data.category," "),l(),v("src",e.data.url,f),l(5),w(" ",e.data.intro," "),l(),T(9,e.isPlaying()?9:-1))},dependencies:[j],styles:[".video-container[_ngcontent-%COMP%]{position:relative;width:100%;height:auto}.video[_ngcontent-%COMP%]{width:100%;height:auto}.progress-container[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;height:4px;cursor:pointer}.mask[_ngcontent-%COMP%]{background:linear-gradient(180deg,#0000 -.01%,#0009 74.25%)}"]});let m=a;return m})();export{oe as a};
