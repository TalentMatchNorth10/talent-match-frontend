import{a as $,b as X}from"./chunk-I3IM7WQV.js";import{a as W}from"./chunk-HGPSUOX4.js";import{d as K}from"./chunk-JTFASWY2.js";import"./chunk-S3DWSELF.js";import"./chunk-XWKWQVWO.js";import{a as G,d as U}from"./chunk-CEVRVF4S.js";import{q as J,r as Q}from"./chunk-NZ6F5HKN.js";import"./chunk-VDFKJHPG.js";import"./chunk-B6JNIWSP.js";import{a as j,b as H}from"./chunk-WNFPW4WH.js";import"./chunk-HZJNBNRE.js";import"./chunk-YB6BI2XV.js";import"./chunk-ZVABKVX7.js";import{c as v,e as k,f as B,l as L,o as M,q,s as Y}from"./chunk-C7IGGWM4.js";import{a as z}from"./chunk-R5QHB6PJ.js";import"./chunk-TBL6Z3YL.js";import{w as D}from"./chunk-6355ZLB4.js";import{Ab as s,Hb as O,Ib as a,Jb as V,Kb as S,Oa as d,P as A,Qb as N,_a as P,aa as C,eb as T,fa as R,gb as m,lb as y,nb as E,ob as b,pa as p,pb as F,qa as _,qb as n,rb as o,sb as h,wb as g,y as I,zb as f}from"./chunk-Y52VWUQN.js";import{a as w}from"./chunk-MON7YFGF.js";function ne(i,u){if(i&1){let t=g();n(0,"button",6),f("click",function(){p(t);let e=s();return _(e.changeView(e.ViewMode.Create))}),n(1,"span",7),a(2," add "),o(),a(3," \u65B0\u589E\u5F71\u7247 "),o()}}function oe(i,u){if(i&1){let t=g();n(0,"button",8),f("click",function(){p(t);let e=s();return _(e.changeView(e.ViewMode.List))}),n(1,"span",9),a(2," reply "),o(),n(3,"span",10),a(4," \u8FD4\u56DE "),o()(),n(5,"button",8),f("click",function(){p(t);let e=s();return _(e.mode()===e.ViewMode.Create?e.save():e.update())}),n(6,"span",9),a(7),o(),n(8,"span",10),a(9),o()()}if(i&2){let t=s();d(7),S(" ",t.mode()===t.ViewMode.Create?"add":"save"," "),d(2),S(" ",t.mode()===t.ViewMode.Create?"\u5275\u5EFA":"\u5132\u5B58"," ")}}function re(i,u){if(i&1){let t=g();n(0,"div",11)(1,"div",12),h(2,"tmf-video-card",13),n(3,"div",14)(4,"div",15)(5,"button",8),f("click",function(){let e=p(t).$implicit,c=s(2);return _(c.changeView(c.ViewMode.Edit,e))}),n(6,"span",9),a(7," edit_square "),o()(),n(8,"button",8),f("click",function(){let e=p(t).$implicit,c=s(2);return _(c.deleteVideo(e))}),n(9,"span",9),a(10," delete "),o()()(),n(11,"div",5)(12,"p")(13,"span",16),a(14,"\u540D\u7A31\uFF1A"),o(),n(15,"span",17),a(16),o()(),n(17,"p")(18,"span",16),a(19,"\u985E\u5225\uFF1A"),o(),n(20,"span",17),a(21),o()(),n(22,"p")(23,"span",16),a(24,"\u7C21\u4ECB\uFF1A"),o(),n(25,"span",17),a(26),o()()()()()()}if(i&2){let t=u.$implicit;d(2),m("data",t),d(14),V(t.name),d(5),V(t.category),d(5),V(t.intro)}}function ae(i,u){if(i&1&&(n(0,"div",5),b(1,re,27,4,"div",11,E),o()),i&2){let t=s();d(),F(t.videos)}}function le(i,u){if(i&1&&h(0,"tmf-option",21),i&2){let t=u.$implicit;m("value",t.main_category)("label",t.main_category||"")}}function de(i,u){if(i&1&&h(0,"tmf-input",28),i&2){let t=s(2);m("isRequired",!0)("formControlName",t.UploadFormKey.URL)("inputType",t.InputType.Outline)}}function ue(i,u){if(i&1){let t=g();n(0,"p",24)(1,"span",25),a(2,"\u5F71\u7247\u6A94\u6848"),o(),n(3,"span",26),a(4,"*"),o()(),n(5,"div",29)(6,"button",30),f("click",function(){p(t);let e=O(11);return _(e.click())}),a(7," \u4E0A\u50B3\u6A94\u6848 "),o(),n(8,"p"),a(9),o()(),n(10,"input",31,0),f("change",function(e){p(t);let c=s(2);return _(c.hanldeVideoChange(e))}),o()}if(i&2){let t=s(2);d(9),V(t.currentFile==null?null:t.currentFile.name)}}function ce(i,u){if(i&1&&(n(0,"div",18),h(1,"tmf-input",19),n(2,"tmf-select",20),b(3,le,1,2,"tmf-option",21,E),o(),h(5,"tmf-textarea",22),n(6,"div",23)(7,"p",24)(8,"span",25),a(9,"\u5F71\u7247\u70BA\u5916\u90E8\u9023\u7D50"),o(),n(10,"span",26),a(11,"*"),o()(),h(12,"tmf-switch",27),o(),T(13,de,1,3,"tmf-input",28)(14,ue,12,1),o()),i&2){let t=s();m("formGroup",t.uploadForm),d(),m("isRequired",!0)("formControlName",t.UploadFormKey.NAME)("inputType",t.InputType.Outline),d(),m("isRequired",!0)("formControlName",t.UploadFormKey.CATEGORY),d(),F(t.categoryOptions),d(2),m("isRequired",!0)("formControlName",t.UploadFormKey.INTRO),d(7),m("formControlName",t.UploadFormKey.VIDEO_TYPE),d(),y(13,t.videoType.value?13:14)}}var x=function(i){return i.List="list",i.Edit="edit",i.Create="create",i}(x||{}),l=function(i){return i.NAME="name",i.CATEGORY="category",i.INTRO="intro",i.VIDEO_TYPE="video_type",i.URL="url",i.TEACHER_ID="teacher_id",i}(l||{}),ye=(()=>{let u=class u{constructor(){this.teacherVideoService=C(J),this.commonService=C(z),this.uploadService=C(Q),this.fb=C(q),this.dialogService=C(K),this.mode=P(x.List),this.videos=[],this.categoryOptions=[],this.uploadForm=this.fb.group({[l.NAME]:this.fb.control(null,[v.required]),[l.CATEGORY]:this.fb.control(null,[v.required]),[l.INTRO]:this.fb.control(null,[v.required]),[l.VIDEO_TYPE]:this.fb.control(!1,[v.required]),[l.URL]:this.fb.control(null)}),this.currentVideo=null,this.currentFile=null,this.ViewMode=x,this.UploadFormKey=l,this.InputType=G}get videoType(){return this.uploadForm.controls[l.VIDEO_TYPE]}ngOnInit(){this.getVideoList(),this.commonService.apiCommonTagGet().subscribe(r=>this.categoryOptions=r.data)}getVideoList(){this.teacherVideoService.apiTeacherVideoGet().subscribe(r=>{this.videos=r.data.map(e=>w({video_id:e._id,name:e.name,category:e.category,intro:e.intro,video_type:e.video_type,url:e.url,teacher_id:e.teacher_id},e.course_id?{course_id:e.course_id}:{}))})}changeView(r,e){this.mode.set(r),r===x.List?(this.uploadForm.reset(),this.currentFile=null):r===x.Edit&&(this.currentVideo=e||null,this.uploadForm.patchValue({[l.NAME]:e?.name||"",[l.CATEGORY]:e?.category||"",[l.INTRO]:e?.intro||"",[l.VIDEO_TYPE]:e?.video_type==="youtube"||!1,[l.URL]:e?.video_type==="youtube"?e?.url:""}))}deleteVideo(r){this.dialogService.openConfirmDialog({title:"\u662F\u5426\u522A\u9664\u6B64\u5F71\u7247?",content:"\u522A\u9664\u5F8C\u7121\u6CD5\u5FA9\u539F",confirmBtnText:"\u78BA\u5B9A",btnType:"danger"}).pipe(I(e=>e),A(()=>this.teacherVideoService.apiTeacherVideoVideoIdDelete({videoId:r.video_id}))).subscribe(()=>{this.getVideoList()})}save(){let r=()=>{let{name:c,category:Z,intro:ee,url:te,video_type:ie}=this.uploadForm.getRawValue();this.teacherVideoService.apiTeacherVideoPost({addTeacherVideoRequestModel:{name:c,category:Z,intro:ee,url:te,video_type:ie?"youtube":"storage"}}).subscribe(()=>{this.getVideoList(),this.uploadForm.reset(),this.currentFile=null,this.changeView(x.List)})};if(this.uploadForm.controls[l.VIDEO_TYPE].value===!1){if(!this.currentFile)return;this.uploadService.apiUploadFilePost({fileType:"video",path:"user",file:this.currentFile}).subscribe(({fileUrl:c})=>{this.uploadForm.controls[l.URL].setValue(c||""),r()})}else r()}update(){this.currentVideo&&this.currentVideo.video_id&&this.teacherVideoService.apiTeacherVideoVideoIdPost({videoId:this.currentVideo.video_id,updateTeacherVideoRequestModel:{name:this.uploadForm.controls[l.NAME].value||"",category:this.uploadForm.controls[l.CATEGORY].value||"",intro:this.uploadForm.controls[l.INTRO].value||"",url:this.uploadForm.controls[l.URL].value||"",video_type:this.uploadForm.controls[l.VIDEO_TYPE].value?"youtube":"storage"}}).subscribe(()=>{this.getVideoList(),this.uploadForm.reset(),this.currentFile=null,this.currentVideo=null,this.changeView(x.List)})}hanldeVideoChange(r){let e=r.target.files?.[0];e&&(this.currentFile=e)}};u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=R({type:u,selectors:[["app-teacher-videos-page"]],standalone:!0,features:[N],decls:8,vars:2,consts:[["file",""],[1,"mb-5","flex","w-full","justify-between"],[1,"text-[22px]","font-bold","leading-9","md:text-[26px]","lg:text-[30px]"],[1,"flex","items-center","gap-x-2"],[1,"flex","items-center","gap-2","rounded-md","bg-tmf-orange-1","px-3","py-2","text-white"],[1,"flex","flex-col","gap-3"],[1,"flex","items-center","gap-2","rounded-md","bg-tmf-orange-1","px-3","py-2","text-white",3,"click"],[1,"material-symbols-outlined"],[1,"flex","items-center","gap-2","rounded-md","bg-tmf-orange-1","p-1","text-white","md:px-3","md:py-2",3,"click"],[1,"material-symbols-outlined","text-[20px]","md:text-[22px]"],[1,"hidden","lg:block"],[1,"flex","w-full","items-center","gap-3","rounded-lg","border","p-3","md:p-5"],[1,"flex","w-full","flex-col","gap-5","lg:flex-row"],[1,"order-2","lg:order-1",3,"data"],[1,"order-1","flex-grow","lg:order-2"],[1,"mb-3","flex","justify-end","gap-3"],[1,"text-base","text-gray-500","md:text-lg"],[1,"text-sm","md:text-base"],[1,"flex","flex-col","overflow-auto",3,"formGroup"],["label","\u8AB2\u7A0B\u540D\u7A31","placeholder","\u8ACB\u8F38\u5165\u8AB2\u7A0B\u540D\u7A31",3,"isRequired","formControlName","inputType"],["label","\u5F71\u7247\u985E\u5225",1,"mb-6",3,"isRequired","formControlName"],[3,"value","label"],["label","\u5F71\u7247\u7C21\u4ECB","placeholder","\u8ACB\u8F38\u5165\u5F71\u7247\u7C21\u4ECB",3,"isRequired","formControlName"],[1,"mb-6","flex","flex-col"],[1,"mb-1"],[1,"select-label"],[1,"text-red-500"],[3,"formControlName"],["label","\u5F71\u7247\u9023\u7D50","placeholder","\u8ACB\u8F38\u5165\u5F71\u7247\u9023\u7D50",3,"isRequired","formControlName","inputType"],[1,"flex","items-center","gap-1"],[1,"w-[100px]","rounded-md","bg-tmf-orange-1","py-1","text-white",3,"click"],["type","file","hidden","","accept","video/*",3,"change"]],template:function(e,c){e&1&&(n(0,"div",1)(1,"h1",2),a(2," \u5F71\u7247\u7BA1\u7406 "),o(),n(3,"div",3),T(4,ne,4,0,"button",4)(5,oe,10,2),o()(),T(6,ae,3,0,"div",5)(7,ce,15,10)),e&2&&(d(4),y(4,c.mode()===c.ViewMode.List?4:5),d(2),y(6,c.mode()===c.ViewMode.List?6:7))},dependencies:[D,Y,k,B,L,M,W,U,H,j,$,X]});let i=u;return i})();export{x as ViewMode,ye as default};