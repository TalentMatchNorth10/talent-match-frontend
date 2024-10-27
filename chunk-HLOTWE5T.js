import"./chunk-S5ANE635.js";import{a as P,d as B}from"./chunk-46HT5QY7.js";import{h as O,n as j}from"./chunk-AUKVP5L6.js";import"./chunk-BYHWVNAL.js";import{e as G,f as M,l as k,o as N,q as V,s as D}from"./chunk-KTACAWYW.js";import"./chunk-VO67VGZ7.js";import"./chunk-ZTPLRKJ3.js";import"./chunk-Z6HWY7KV.js";import"./chunk-5WI6KTPY.js";import{k as E,v as F}from"./chunk-5R5JJKFA.js";import{Gb as m,Ja as S,Na as a,P as C,Pb as T,Rb as w,Za as I,aa as _,db as v,fa as b,fb as u,jb as h,l as y,ob as l,pa as d,pb as o,qa as c,qb as x,ub as g,xb as f,yb as s}from"./chunk-J7CIAQUA.js";import"./chunk-MON7YFGF.js";var U=t=>({"cursor-pointer":t});function A(t,r){if(t&1){let p=g();l(0,"div",3)(1,"button",13),f("click",function(){d(p);let n=s();return c(n.updateStudentInfo())}),m(2," \u5132\u5B58 "),o(),l(3,"button",14),f("click",function(){d(p);let n=s();return c(n.cancelEditMode())}),m(4," \u53D6\u6D88 "),o()()}}function q(t,r){if(t&1){let p=g();l(0,"button",15),f("click",function(){d(p);let n=s();return c(n.openEditMode())}),l(1,"span",16),m(2," edit_square "),o(),m(3," \u7DE8\u8F2F "),o()}}function R(t,r){if(t&1&&x(0,"img",6),t&2){let p=s();u("src",p.formGroup.controls.avator_image.value,S)}}function z(t,r){t&1&&(l(0,"div",17)(1,"p"),m(2,"\u4F7F\u7528\u8005\u982D\u50CF"),o(),l(3,"div",18)(4,"span",16),m(5," photo_camera "),o()()())}function H(t,r){if(t&1){let p=g();l(0,"input",19),f("change",function(n){d(p);let i=s();return c(i.uploadImage(n))}),o()}}var oe=(()=>{let r=class r{constructor(){this.isEditMode=I(!1),this.fb=_(V),this.studentInfoService=_(O),this.uploadService=_(j),this.InputType=P,this.formGroup=this.fb.group({avator_image:this.fb.control(null),name:this.fb.control(null),nick_name:this.fb.control(null),birthday:this.fb.control(null),contact_phone:this.fb.control(null),email:this.fb.control(null)})}ngOnInit(){this.studentInfoService.apiStudentInfoBasicInfoGet().subscribe(e=>{e.status&&(this.studentInfo=e.data,this.updateFormControls(this.studentInfo),this.formGroup.disable())})}updateStudentInfo(){this.studentInfoService.apiStudentInfoBasicInfoPatch({updateStudentInfoRequestModel:{avator_image:this.formGroup.controls.avator_image.value,name:this.formGroup.controls.name.value,nick_name:this.formGroup.controls.nick_name.value,birthday:this.formGroup.controls.birthday.value,contact_phone:this.formGroup.controls.contact_phone.value,email:this.formGroup.controls.email.value}}).pipe(C(e=>e.status?this.studentInfoService.apiStudentInfoBasicInfoGet():y(()=>new Error("Failed to update student info")))).subscribe({next:e=>{e.status&&(this.studentInfo=e.data,this.updateFormControls(this.studentInfo),this.isEditMode.set(!1))}})}uploadImage(e){this.uploadService.apiUploadFilePost({fileType:"image",path:"user",file:e.target.files[0]}).subscribe(n=>{this.formGroup.controls.avator_image.setValue(n.fileUrl)})}openEditMode(){this.isEditMode.set(!0),this.formGroup.enable()}cancelEditMode(){this.isEditMode.set(!1),this.formGroup.disable(),this.formGroup.controls.avator_image.setValue(this.studentInfo.avator_image)}updateFormControls(e){this.formGroup.setValue({avator_image:e.avator_image,name:e.name,nick_name:e.nick_name,birthday:new Date(e.birthday).toISOString().split("T")[0],contact_phone:e.contact_phone,email:e.email})}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=b({type:r,selectors:[["app-student-info-page"]],standalone:!0,features:[T],decls:16,vars:17,consts:[[1,"flex","flex-col","items-center","justify-center"],[1,"mb-5","flex","w-full","justify-between"],[1,"text-[22px]","md:text-[26px]","lg:text-[30px]","font-bold","leading-9"],[1,"flex","gap-2"],[1,"mb-4","flex","w-full","flex-col","gap-2",3,"formGroup"],["for","avator_image",1,"flex","items-center","overflow-hidden","rounded-full",3,"ngClass"],["alt","",1,"h-[160px]","w-[160px]","md:h-[180px]","md:w-[180px]","lg:h-[200px]","lg:w-[200px]","rounded-full",3,"src"],["id","avator_image","type","file","name","",1,"hidden"],["label","\u59D3\u540D",3,"formControlName","inputType"],["label","\u66B1\u7A31",3,"formControlName","inputType"],["label","\u751F\u65E5","placeholder","yyyy-mm-dd",3,"formControlName","inputType"],["label","\u806F\u7D61\u96FB\u8A71",3,"formControlName","inputType"],["label","\u96FB\u5B50\u90F5\u4EF6",3,"formControlName","inputType"],[1,"rounded-md","bg-tmf-orange-1","px-5","py-2","text-white",3,"click"],[1,"rounded-md","bg-tmf-gray-3","px-5","py-2","text-white",3,"click"],[1,"flex","items-center","gap-2","rounded-md","bg-tmf-orange-1","px-3","py-2","text-white",3,"click"],[1,"material-symbols-outlined"],[1,"relative","flex","h-[200px]","w-[200px]","items-center","justify-center","rounded-full","border","border-tmf-gray-2","bg-tmf-gray-5"],[1,"absolute","bottom-[10px]","right-[10px]","flex","h-[40px]","w-[40px]","items-center","justify-center","rounded-full","border","border-tmf-gray-5","bg-white","cursor-pointer"],["id","avator_image","type","file","name","",1,"hidden",3,"change"]],template:function(n,i){n&1&&(l(0,"div",0)(1,"div",1)(2,"h1",2),m(3,"\u57FA\u672C\u8CC7\u6599"),o(),v(4,A,5,0,"div",3)(5,q,4,0),o(),l(6,"div",4)(7,"label",5),v(8,R,1,1,"img",6)(9,z,6,0)(10,H,1,0,"input",7),o(),x(11,"tmf-input",8)(12,"tmf-input",9)(13,"tmf-input",10)(14,"tmf-input",11)(15,"tmf-input",12),o()()),n&2&&(a(4),h(4,i.isEditMode()?4:5),a(2),u("formGroup",i.formGroup),a(),u("ngClass",w(15,U,i.isEditMode())),a(),h(8,i.formGroup.controls.avator_image.value?8:9),a(2),h(10,i.isEditMode()?10:-1),a(),u("formControlName","name")("inputType",i.InputType.Outline),a(),u("formControlName","nick_name")("inputType",i.InputType.Outline),a(),u("formControlName","birthday")("inputType",i.InputType.Outline),a(),u("formControlName","contact_phone")("inputType",i.InputType.Outline),a(),u("formControlName","email")("inputType",i.InputType.Outline))},dependencies:[F,E,B,D,G,M,k,N]});let t=r;return t})();export{oe as default};
