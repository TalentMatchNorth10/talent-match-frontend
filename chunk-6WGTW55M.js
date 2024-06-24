import"./chunk-QGAZUIWH.js";import{a as P,d as B}from"./chunk-6TH77JN7.js";import{h as O,j}from"./chunk-3JOZWKYR.js";import{e as G,f as M,l as k,o as N,p as V,r as D}from"./chunk-MIFECOC4.js";import"./chunk-TGEFNR3I.js";import"./chunk-O2MZCC7V.js";import"./chunk-7REWYPIF.js";import"./chunk-7PEPFG7H.js";import{k as E,v as F}from"./chunk-OU7DBEEA.js";import{$ as _,Bb as p,Ea as S,Ia as a,Kb as T,Mb as w,O as b,Ua as I,_a as v,ab as u,ea as x,eb as h,jb as l,kb as i,l as y,lb as C,na as d,oa as c,pb as g,sb as f,tb as s}from"./chunk-ZYASN54F.js";import"./chunk-CWTPBX7D.js";var U=t=>({"cursor-pointer":t});function A(t,r){if(t&1){let m=g();l(0,"div",3)(1,"button",13),f("click",function(){d(m);let n=s();return c(n.updateStudentInfo())}),p(2," \u5132\u5B58 "),i(),l(3,"button",14),f("click",function(){d(m);let n=s();return c(n.cancelEditMode())}),p(4," \u53D6\u6D88 "),i()()}}function q(t,r){if(t&1){let m=g();l(0,"button",15),f("click",function(){d(m);let n=s();return c(n.openEditMode())}),l(1,"span",16),p(2," edit_square "),i(),p(3," \u7DE8\u8F2F "),i()}}function R(t,r){if(t&1&&C(0,"img",6),t&2){let m=s();u("src",m.formGroup.controls.avator_image.value,S)}}function z(t,r){t&1&&(l(0,"div",17)(1,"p"),p(2,"\u4F7F\u7528\u8005\u982D\u50CF"),i(),l(3,"div",18)(4,"span",16),p(5," photo_camera "),i()()())}function H(t,r){if(t&1){let m=g();l(0,"input",19),f("change",function(n){d(m);let o=s();return c(o.uploadImage(n))}),i()}}var ie=(()=>{let r=class r{constructor(){this.isEditMode=I(!1),this.fb=_(V),this.studentInfoService=_(O),this.uploadService=_(j),this.InputType=P,this.formGroup=this.fb.group({avator_image:this.fb.control(null),name:this.fb.control(null),nick_name:this.fb.control(null),birthday:this.fb.control(null),contact_phone:this.fb.control(null),email:this.fb.control(null)})}ngOnInit(){this.studentInfoService.apiStudentInfoBasicInfoGet().subscribe({next:e=>{e.status?(this.studentInfo=e.data,this.updateFormControls(this.studentInfo),this.formGroup.disable()):console.error(e)},error:e=>{console.error(e)}})}updateStudentInfo(){this.studentInfoService.apiStudentInfoBasicInfoPatch({updateStudentInfoRequestModel:{avator_image:this.formGroup.controls.avator_image.value,name:this.formGroup.controls.name.value,nick_name:this.formGroup.controls.nick_name.value,birthday:this.formGroup.controls.birthday.value,contact_phone:this.formGroup.controls.contact_phone.value,email:this.formGroup.controls.email.value}}).pipe(b(e=>e.status?this.studentInfoService.apiStudentInfoBasicInfoGet():y(()=>new Error("Failed to update student info")))).subscribe({next:e=>{e.status&&(this.studentInfo=e.data,console.log(this.studentInfo),this.updateFormControls(this.studentInfo),this.isEditMode.set(!1))}})}uploadImage(e){console.log(e),this.uploadService.apiUploadFilePost({file:e.target.files[0],path:"user"}).subscribe({next:n=>{this.formGroup.controls.avator_image.setValue(n.fileUrl)},error:n=>{console.error(n)}})}openEditMode(){this.isEditMode.set(!0),this.formGroup.enable()}cancelEditMode(){this.isEditMode.set(!1),this.formGroup.disable(),this.formGroup.controls.avator_image.setValue(this.studentInfo.avator_image)}updateFormControls(e){this.formGroup.setValue({avator_image:e.avator_image,name:e.name,nick_name:e.nick_name,birthday:new Date(e.birthday).toISOString().split("T")[0],contact_phone:e.contact_phone,email:e.email})}};r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=x({type:r,selectors:[["app-student-info-page"]],standalone:!0,features:[T],decls:16,vars:17,consts:[[1,"flex","flex-col","items-center","justify-center"],[1,"mb-5","flex","w-full","justify-between"],[1,"text-[30px]","font-bold","leading-9"],[1,"flex","gap-2"],[1,"mb-4","flex","w-full","flex-col","gap-2",3,"formGroup"],["for","avator_image",1,"flex","items-center","overflow-hidden","rounded-full",3,"ngClass"],["alt","",1,"h-[200px]","w-[200px]","rounded-full",3,"src"],["id","avator_image","type","file","name","",1,"hidden"],["label","\u59D3\u540D",3,"formControlName","inputType"],["label","\u66B1\u7A31",3,"formControlName","inputType"],["label","\u751F\u65E5","placeholder","yyyy-mm-dd",3,"formControlName","inputType"],["label","\u806F\u7D61\u96FB\u8A71",3,"formControlName","inputType"],["label","\u96FB\u5B50\u90F5\u4EF6",3,"formControlName","inputType"],[1,"rounded-md","bg-tmf-orange-1","px-5","py-2","text-white",3,"click"],[1,"rounded-md","bg-tmf-gray-3","px-5","py-2","text-white",3,"click"],[1,"flex","items-center","gap-2","rounded-md","bg-tmf-orange-1","px-3","py-2","text-white",3,"click"],[1,"material-symbols-outlined"],[1,"relative","flex","h-[200px]","w-[200px]","items-center","justify-center","rounded-full","border","border-tmf-gray-2","bg-tmf-gray-5"],[1,"absolute","bottom-[10px]","right-[10px]","flex","h-[40px]","w-[40px]","items-center","justify-center","rounded-full","border","border-tmf-gray-5","bg-white","cursor-pointer"],["id","avator_image","type","file","name","",1,"hidden",3,"change"]],template:function(n,o){n&1&&(l(0,"div",0)(1,"div",1)(2,"h1",2),p(3,"\u57FA\u672C\u8CC7\u6599"),i(),v(4,A,5,0,"div",3)(5,q,4,0),i(),l(6,"div",4)(7,"label",5),v(8,R,1,1,"img",6)(9,z,6,0)(10,H,1,0,"input",7),i(),C(11,"tmf-input",8)(12,"tmf-input",9)(13,"tmf-input",10)(14,"tmf-input",11)(15,"tmf-input",12),i()()),n&2&&(a(4),h(4,o.isEditMode()?4:5),a(2),u("formGroup",o.formGroup),a(),u("ngClass",w(15,U,o.isEditMode())),a(),h(8,o.formGroup.controls.avator_image.value?8:9),a(2),h(10,o.isEditMode()?10:-1),a(),u("formControlName","name")("inputType",o.InputType.Outline),a(),u("formControlName","nick_name")("inputType",o.InputType.Outline),a(),u("formControlName","birthday")("inputType",o.InputType.Outline),a(),u("formControlName","contact_phone")("inputType",o.InputType.Outline),a(),u("formControlName","email")("inputType",o.InputType.Outline))},dependencies:[F,E,B,D,G,M,k,N]});let t=r;return t})();export{ie as default};
