import{a as he}from"./chunk-7K5HTQN7.js";import{a as me}from"./chunk-UXYCZJ7K.js";import{d as de}from"./chunk-EM2JKLY3.js";import"./chunk-A333B47I.js";import"./chunk-KTGNIIQT.js";import{a as pe,d as ce}from"./chunk-K4X6AKXN.js";import{f as _e,o as ge}from"./chunk-T2S3BQ7X.js";import"./chunk-DCCBA6JN.js";import"./chunk-A6ZGQ5H3.js";import{a as ue,b as se}from"./chunk-GEWNISP5.js";import{f as K}from"./chunk-HDY35ZES.js";import{c as v,e as X,f as Z,i as ee,k as te,l as ie,m as ne,n as oe,o as re,q as ae,s as le}from"./chunk-J7X6Y7TH.js";import"./chunk-5AZTXUOI.js";import"./chunk-PDG62EJG.js";import{a as fe}from"./chunk-WALOVNFW.js";import"./chunk-ZYSDU26P.js";import{k as H,l as J,m as L,v as U}from"./chunk-QWUFOH72.js";import{A as O,Fb as D,Gb as u,Ib as E,Na as r,Ob as Y,P as k,Qb as b,Rb as z,S as R,Sb as W,aa as x,db as s,fa as $,fb as o,gb as G,hb as N,jb as S,k as I,l as B,lb as j,mb as M,nb as Q,o as V,ob as l,pa as h,pb as c,qa as y,qb as d,rb as F,sb as w,u as P,ub as T,xb as g,y as q,yb as _}from"./chunk-NYBVSAW5.js";import"./chunk-MON7YFGF.js";var xe=(n,p)=>({"bg-tmf-orange-1":n,"bg-tmf-orange-2":p}),ve=(n,p,t)=>({"text-gray-900":n,"text-gray-300":p,"font-bold":t}),A=n=>({hidden:n});function Ce(n,p){if(n&1&&(F(0),l(1,"div",13)(2,"div",14),d(3,"div",15),c(),l(4,"div",16),u(5),c()(),w()),n&2){let t=p.$implicit,a=p.index,e=_();r(3),o("ngClass",z(3,xe,a<=e.currentStepIndex,a>e.currentStepIndex)),r(),o("ngClass",W(6,ve,a<=e.currentStepIndex,a>e.currentStepIndex,a===e.currentStepIndex)),r(),E(" ",t.name," ")}}function be(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function Se(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit,a=_(2);N("selected",a.topicControl.value==null?null:a.topicControl.value.includes(t.value)),o("value",t.value)("label",t.main_category)}}function Fe(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit,a=_().$implicit;N("selected",a.controls.sub_categories.value==null?null:a.controls.sub_categories.value.includes(t)),o("value",t)("label",t)}}function we(n,p){if(n&1&&(F(0),l(1,"tmf-select",54),s(2,Fe,1,4,"tmf-option",24),c(),w()),n&2){let t=p.$implicit,a=_(2);r(),o("label",a.getCategoryLabel(t.controls.category_id.value))("multiSelect",!0)("maxSelected",3)("isRequired",!0)("formControl",t.controls.sub_categories),r(),o("ngForOf",a.getSubCategoryOptions(t.controls.category_id.value))}}function Te(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function Ee(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function Ae(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function Oe(n,p){n&1&&(l(0,"span",39),u(1,"*"),c())}function ke(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function Ne(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function De(n,p){if(n&1){let t=T();l(0,"div",31)(1,"div",25)(2,"div",55)(3,"tmf-checkbox",56),g("checkedChange",function(e){let i=h(t).$index,m=_(2);return y(m.handleIsWorkingChange(e,i))}),c(),l(4,"button",57),g("click",function(){let e=h(t).$index,i=_(2);return y(i.removeGroup("work_experience",e))}),l(5,"span",58),u(6,"close"),c()()(),d(7,"tmf-input",59)(8,"tmf-input",44),l(9,"tmf-select",60),s(10,Te,1,2,"tmf-option",22),c(),d(11,"tmf-input",44),l(12,"div",61)(13,"div",38)(14,"div"),u(15,"\u958B\u59CB\u6642\u9593"),l(16,"span",39),u(17,"*"),c()(),l(18,"div",40)(19,"tmf-select",41),s(20,Ee,1,2,"tmf-option",22),c(),l(21,"tmf-select",42),s(22,Ae,1,2,"tmf-option",22),c()()(),l(23,"div",38)(24,"div"),u(25," \u7D50\u675F\u6642\u9593 "),s(26,Oe,2,0,"span",39),c(),l(27,"div",40)(28,"tmf-select",41),s(29,ke,1,2,"tmf-option",22),c(),l(30,"tmf-select",42),s(31,Ne,1,2,"tmf-option",22),c()()()()()()}if(n&2){let t,a=p.$implicit,e=p.$index,i=_(2);o("formGroupName",e),r(7),o("isRequired",!0)("inputType",i.InputType.Outline)("formControlName","company_name"),r(),o("label","\u5DE5\u4F5C\u5730\u9EDE")("isRequired",!0)("inputType",i.InputType.Outline)("formControlName","workplace"),r(),o("isRequired",!0)("multiSelect",!1)("formControlName","job_category"),r(),o("ngForOf",i.jobCategoryOptions),r(),o("label","\u8077\u4F4D\u540D\u7A31")("isRequired",!0)("inputType",i.InputType.Outline)("formControlName","job_title"),r(8),o("multiSelect",!1)("formControlName","start_year"),r(),o("ngForOf",i.yearOptions),r(),o("multiSelect",!1)("formControlName","start_month"),r(),o("ngForOf",i.monthOptions),r(4),S(26,(t=a.get("is_working"))!=null&&t.value?-1:26),r(2),o("multiSelect",!1)("formControlName","end_year"),r(),o("ngForOf",i.yearOptions),r(),o("multiSelect",!1)("formControlName","end_month"),r(),o("ngForOf",i.monthOptions)}}function Ie(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function Be(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function Ve(n,p){n&1&&(l(0,"span",39),u(1,"*"),c())}function Pe(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function qe(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function Re(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function $e(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.label)}}function Ge(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t.value)("label",t.main_category)}}function je(n,p){if(n&1&&d(0,"tmf-option",53),n&2){let t=p.$implicit;o("value",t)("label",t)}}function Me(n,p){if(n&1&&(l(0,"tmf-select",64),s(1,je,1,2,"tmf-option",22),c()),n&2){let t,a=_().index,e=_(2);o("multiSelect",!1)("formControlName","subject")("isRequired",!0),r(),o("ngForOf",e.getSubCategoryOptions((t=e.teaching_certificates.controls[a].get("category_id"))==null?null:t.value))}}function Qe(n,p){if(n&1){let t=T();F(0),l(1,"div",31)(2,"div",46)(3,"div",62)(4,"button",57),g("click",function(){let e=h(t).index,i=_(2);return y(i.removeGroup("teaching_certificate",e))}),l(5,"span",58),u(6,"close"),c()()(),l(7,"tmf-select",63),s(8,Ge,1,2,"tmf-option",22),c(),s(9,Me,2,4,"tmf-select",64),d(10,"tmf-input",44)(11,"tmf-input",44)(12,"tmf-input",44)(13,"tmf-input",44),l(14,"div",46)(15,"span",47),u(16,"\u4E0A\u50B3\u8B49\u7167"),l(17,"span",39),u(18,"*"),c()(),l(19,"input",48,1),g("change",function(e){let i=h(t).$implicit,m=_(2);return y(m.handleFileChange(e,i.controls.file,"certificate"))}),c(),l(21,"button",49),g("click",function(){h(t);let e=D(20);return y(e.click())}),u(22),c()()()(),w()}if(n&2){let t,a,e=p.$implicit,i=p.index,m=_(2);r(),o("formGroupName",i),r(6),o("multiSelect",!1)("formControlName","category_id")("isRequired",!0),r(),o("ngForOf",m.tagOptions),r(),S(9,(t=m.teaching_certificates.controls[i].get("category_id"))!=null&&t.value?9:-1),r(),o("label","\u8A8D\u8B49\u6A5F\u69CB")("isRequired",!0)("inputType",m.InputType.Outline)("formControlName","verifying_institution"),r(),o("label","\u8B49\u7167\u540D\u7A31")("isRequired",!0)("inputType",m.InputType.Outline)("formControlName","license_name"),r(),o("label","\u8B49\u7167\u7533\u8ACB\u59D3\u540D")("isRequired",!0)("inputType",m.InputType.Outline)("formControlName","name"),r(),o("label","\u8B49\u7167\u5E8F\u865F(\u9650\u8F38\u5165\u82F1\u6578)")("isRequired",!0)("inputType",m.InputType.Outline)("formControlName","license_number"),r(9),E(" ",(a=e.get("file"))!=null&&a.value?"\u5DF2\u4E0A\u50B3":"\u9078\u64C7\u6A94\u6848"," ")}}function Ye(n,p){if(n&1){let t=T();l(0,"form",17)(1,"div",18)(2,"section",19)(3,"div",20),u(4,"\u57FA\u672C\u8CC7\u6599"),c(),l(5,"tmf-select",21),s(6,be,1,2,"tmf-option",22),c(),l(7,"tmf-select",23),g("selectChange",function(e){h(t);let i=_();return y(i.handleCategoryChange(e))}),s(8,Se,1,4,"tmf-option",24),c(),l(9,"div",25)(10,"span",26),u(11,"\u6559\u5B78\u5C08\u9577"),c(),l(12,"span",27),u(13,"*\u76E1\u53EF\u80FD\u9078\u64C7\u71B1\u9580\u5C08\u9577\uFF0C\u4EE5\u7372\u5F97\u66F4\u591A\u62DB\u751F\u6A5F\u6703(3\u9805/\u79D1\u76EE)\u3002"),c()(),s(14,we,3,6,"ng-container",7),c(),l(15,"section",28)(16,"div",29),u(17,"\u5DE5\u4F5C\u7D93\u9A57"),c(),l(18,"div",30),M(19,De,32,29,"div",31,j),l(21,"span",32),g("click",function(){h(t);let e=_();return y(e.addGroup("work_experience"))}),l(22,"span",33),u(23,"add"),c(),u(24,"\u65B0\u589E\u5DE5\u4F5C\u7D93\u6B77"),c()()(),l(25,"section",28)(26,"div",29),u(27,"\u5B78\u6B77\u80CC\u666F"),c(),l(28,"div",34)(29,"div",35)(30,"tmf-checkbox",36),g("checkedChange",function(e){h(t);let i=_();return y(i.handleIsInSchoolChange(e))}),c()(),l(31,"div",37)(32,"div",38)(33,"div"),u(34,"\u958B\u59CB\u6642\u9593"),l(35,"span",39),u(36,"*"),c()(),l(37,"div",40)(38,"tmf-select",41),s(39,Ie,1,2,"tmf-option",22),c(),l(40,"tmf-select",42),s(41,Be,1,2,"tmf-option",22),c()()(),l(42,"div",38)(43,"div"),u(44," \u7D50\u675F\u6642\u9593 "),s(45,Ve,2,0,"span",39),c(),l(46,"div",40)(47,"tmf-select",41),s(48,Pe,1,2,"tmf-option",22),c(),l(49,"tmf-select",42),s(50,qe,1,2,"tmf-option",22),c()()()(),l(51,"tmf-select",43),s(52,Re,1,2,"tmf-option",22),c(),d(53,"tmf-input",44)(54,"tmf-input",44),l(55,"tmf-select",45),s(56,$e,1,2,"tmf-option",22),c(),l(57,"div",46)(58,"span",47),u(59,"\u4E0A\u50B3\u5B78\u4F4D\u8B49\u66F8"),l(60,"span",39),u(61,"*"),c()(),l(62,"input",48,0),g("change",function(e){h(t);let i=_();return y(i.handleFileChange(e,i.learning_experience.controls.file,"degree"))}),c(),l(64,"button",49),g("click",function(){h(t);let e=D(63);return y(e.click())}),u(65),c()()()(),l(66,"section",28)(67,"div",50),u(68," \u6559\u5B78\u8B49\u7167 "),l(69,"p",51),u(70," < \u975E\u5FC5\u586B > \u82E5\u60A8\u7121\u6559\u5B78\u8B49\u7167\uFF0C\u8ACB\u76F4\u63A5\u9EDE\u9078\u300C\u5B8C\u6210\u300D "),c()(),l(71,"div",52),s(72,Qe,23,23,"ng-container",7),c(),l(73,"span",32),g("click",function(){h(t);let e=_();return y(e.addGroup("teaching_certificate"))}),l(74,"span",33),u(75,"add"),c(),u(76,"\u65B0\u589E\u6559\u5B78\u8B49\u7167"),c()()()()}if(n&2){let t,a,e=_();o("formGroup",e.teacherForm),r(2),o("ngClass",b(47,A,e.currentStepIndex!==0)),r(3),o("isRequired",!0)("multiSelect",!1),r(),o("ngForOf",e.nationOptions),r(),o("formControl",e.topicControl)("isRequired",!0)("multiSelect",!0)("maxSelected",3),r(),o("ngForOf",e.tagOptions),r(6),o("ngForOf",e.categoriesFormArray.controls),r(),o("ngClass",b(49,A,e.currentStepIndex!==1)),r(4),Q(e.work_experiences.controls),r(6),o("ngClass",b(51,A,e.currentStepIndex!==2)),r(3),o("formGroupName","learning_experience"),r(2),o("formControlName","is_in_school"),r(8),o("multiSelect",!1)("formControlName","start_year"),r(),o("ngForOf",e.yearOptions),r(),o("multiSelect",!1)("formControlName","start_month"),r(),o("ngForOf",e.monthOptions),r(4),S(45,(t=e.learning_experience.get("is_in_school"))!=null&&t.value?-1:45),r(2),o("multiSelect",!1)("formControlName","end_year"),r(),o("ngForOf",e.yearOptions),r(),o("multiSelect",!1)("formControlName","end_month"),r(),o("ngForOf",e.monthOptions),r(),o("isRequired",!0)("multiSelect",!1)("formControlName","region"),r(),o("ngForOf",e.regionOptions),r(),o("label","\u5B78\u6821\u540D\u7A31")("isRequired",!0)("inputType",e.InputType.Outline)("formControlName","name"),r(),o("label","\u79D1\u7CFB\u540D\u7A31")("isRequired",!0)("inputType",e.InputType.Outline)("formControlName","department"),r(),o("isRequired",!0)("multiSelect",!1)("formControlName","degree"),r(),o("ngForOf",e.degreeOptions),r(9),E(" ",(a=e.learning_experience.get("file"))!=null&&a.value?"\u5DF2\u4E0A\u50B3":"\u9078\u64C7\u6A94\u6848"," "),r(),o("ngClass",b(53,A,e.currentStepIndex!==3)),r(6),o("ngForOf",e.teaching_certificates.controls)}}var ot=(()=>{let p=class p{constructor(){this.fb=x(ae),this.teacherFormService=x(he),this.commonService=x(fe),this.uploadService=x(ge),this.homeService=x(_e),this.dialogService=x(de),this.router=x(K),this.InputType=pe,this.tagOptions=[],this.nationOptions=[],this.jobCategoryOptions=[],this.yearOptions=[],this.monthOptions=[],this.degreeOptions=[],this.regionOptions=[{label:"\u53F0\u7063",value:!0},{label:"\u6D77\u5916",value:!1}],this.topicControl=this.fb.control([]),this.uploadQueue=[],this.steps=[{name:"\u57FA\u672C\u8CC7\u6599"},{name:"\u5C65\u6B77"},{name:"\u5B78\u6B77\u80CC\u666F"},{name:"\u6559\u5B78\u8B49\u7167"}],this.currentStepIndex=0}get categoriesFormArray(){return this.teacherForm.controls.categories}get work_experiences(){return this.teacherForm.get("work_experiences")}get learning_experience(){return this.teacherForm.get("learning_experience")}get teaching_certificates(){return this.teacherForm.get("teaching_certificates")}ngOnInit(){this.teacherForm=this.teacherFormService.createTeacherForm("apply"),this.getOptions()}getOptions(){this.commonService.apiCommonTagGet().subscribe(e=>{this.tagOptions=e.data.map(i=>({value:i._id,main_category:i.main_category,sub_category:i.sub_category}))}),this.commonService.apiCommonOptionsNationGet().subscribe(e=>{this.nationOptions=e.data}),this.commonService.apiCommonOptionsJobCategoryGet().subscribe(e=>{this.jobCategoryOptions=e.data});let a=new Date().getFullYear();this.yearOptions=Array.from({length:16},(e,i)=>{let m=a-i;return{label:`${m}`,value:`${m}`}}),this.monthOptions=Array.from({length:12},(e,i)=>{let m=i+1;return{label:`${m}`,value:`${m}`}}),this.commonService.apiCommonOptionsDegreeGet().subscribe(e=>{this.degreeOptions=e.data})}nextStep(){let e=[{controls:["nationality","categories"],errorTitle:"\u586B\u5BEB\u932F\u8AA4",errorContent:"\u57FA\u672C\u8CC7\u6599\u672A\u586B\u5BEB\u5B8C\u6210"},{controls:["work_experiences"],errorTitle:"\u586B\u5BEB\u932F\u8AA4",errorContent:"\u5C65\u6B77\u672A\u586B\u5BEB\u5B8C\u6210"},{controls:["learning_experience"],errorTitle:"\u586B\u5BEB\u932F\u8AA4",errorContent:"\u5B78\u6B77\u80CC\u666F\u672A\u586B\u5BEB\u5B8C\u6210"},{controls:["teaching_certificates"],errorTitle:"\u586B\u5BEB\u932F\u8AA4",errorContent:"\u6559\u5B78\u8B49\u7167\u672A\u586B\u5BEB\u5B8C\u6210"}][this.currentStepIndex];if(e&&e.controls.filter(m=>this.teacherForm.get(m)?.invalid).length>0){this.dialogService.openAlertDialog({title:e.errorTitle,content:e.errorContent});return}this.currentStepIndex<this.steps.length-1&&this.currentStepIndex++}prevStep(){this.currentStepIndex>0&&this.currentStepIndex--}onSubmit(){let a=i=>this.uploadService.apiUploadFilePost({fileType:"file",path:i.type,file:i.file}),e=this.uploadQueue.map(i=>a(i).pipe(R(({fileUrl:m})=>i.control.setValue(m||"")),V(()=>({type:i.type,error:!1})),O(()=>(i.control.setValue(null),I({type:i.type,error:!0})))));this.teacherForm.valid?this.dialogService.openConfirmDialog({title:"\u63D0\u4EA4\u7533\u8ACB",content:"\u78BA\u5B9A\u8981\u63D0\u4EA4\u7533\u8ACB\u55CE\uFF1F"}).pipe(q(i=>i),k(()=>P(e))).subscribe(i=>{let m=i.filter(f=>f.error);if(m.length>0){let f=m.some(C=>C.type==="degree");this.dialogService.openAlertDialog({title:"\u4E0A\u50B3\u5931\u6557",content:f?"\u5B78\u4F4D\u8B49\u660E\u4E0A\u50B3\u5931\u6557":"\u8B49\u7167\u4E0A\u50B3\u5931\u6557"}).closed.subscribe(()=>f?this.currentStepIndex=2:this.currentStepIndex=3)}else this.homeService.apiHomeTeacherApplyPost({postTeacherInfoRequestModel:this.teacherForm.getRawValue()}).pipe(O(f=>(this.dialogService.openAlertDialog({title:"\u63D0\u4EA4\u5931\u6557",content:"\u7533\u8ACB\u63D0\u4EA4\u5931\u6557\uFF0C\u8ACB\u91CD\u65B0\u63D0\u4EA4"}),B(()=>f))),k(()=>this.dialogService.openAlertDialog({title:"\u63D0\u4EA4\u6210\u529F",content:"\u7533\u8ACB\u5DF2\u63D0\u4EA4\u6210\u529F"}).closed)).subscribe(()=>{this.router.navigate(["/home"])})}):this.dialogService.openAlertDialog({title:"\u586B\u5BEB\u932F\u8AA4",content:"\u8ACB\u586B\u5BEB\u5B8C\u6574\u8CC7\u6599"}).closed.subscribe()}addGroup(a){switch(a){case"work_experience":this.work_experiences.push(this.teacherFormService.createWorkExperience("apply"));break;case"teaching_certificate":this.teaching_certificates.push(this.teacherFormService.createTeachingCertificate("apply"));break}}removeGroup(a,e){switch(a){case"work_experience":this.work_experiences.removeAt(e);break;case"teaching_certificate":this.teaching_certificates.removeAt(e);break}}getCategoryLabel(a){return this.tagOptions.find(i=>i.value===a)?.main_category||""}getSubCategoryOptions(a){return this.tagOptions.find(i=>i.value===a)?.sub_category||[]}handleCategoryChange(a){let e=this.teacherForm.controls.categories,i=new Set(a);for(let m=e.controls.length-1;m>=0;m--){let f=e.controls[m];i.has(f.controls.category_id.value)||e.removeAt(m)}a.forEach(m=>{e.controls.some(C=>C.controls.category_id.value===m)||e.push(this.fb.group({category_id:this.fb.control(m,[v.required]),sub_categories:this.fb.control([],[v.required])}))})}handleIsWorkingChange(a,e){let i=this.work_experiences.controls[e],m=i.get("end_year"),f=i.get("end_month");a?(m?.reset(),f?.reset(),m?.disable(),f?.disable(),m?.setValidators(null),f?.setValidators(null)):(m?.enable(),f?.enable(),m?.setValidators([v.required]),f?.setValidators([v.required])),m?.updateValueAndValidity()}handleIsInSchoolChange(a){let e=this.learning_experience,i=e.get("end_year"),m=e.get("end_month");a?(i?.reset(),m?.reset(),i?.disable(),m?.disable(),i?.setValidators(null),m?.setValidators(null)):(i?.enable(),m?.enable(),i?.setValidators([v.required]),m?.setValidators([v.required])),i?.updateValueAndValidity()}handleFileChange(a,e,i){let f=a.target.files?.[0];if(!f)return;e.setValue("hasFile");let C=this.uploadQueue.find(ye=>ye.control===e);C?C.file=f:this.uploadQueue.push({file:f,type:i,control:e})}};p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=$({type:p,selectors:[["app-teacher-apply-page"]],standalone:!0,features:[Y],decls:14,vars:8,consts:[["learningExperienceFile",""],["certificateFile",""],[1,"flex","w-full","flex-col","items-center","px-6","py-8","md:px-[100px]","lg:px-[200px]"],[1,"w-full"],[1,"relative","mb-[80px]","flex","w-full","items-center","justify-between"],[1,"absolute","left-0","top-1/2","h-0.5","w-full","-translate-y-[1px]","bg-tmf-orange-2"],[1,"absolute","left-0","top-1/2","h-0.5","w-full","-translate-y-[1px]","bg-tmf-orange-1","transition-all","duration-500"],[4,"ngFor","ngForOf"],[3,"formGroup",4,"ngIf"],[1,"mt-16","flex","justify-end","gap-6"],["type","button",1,"select-none","rounded-lg","bg-tmf-orange-1","px-6","py-3","text-center","align-middle","font-sans","text-xs","font-bold","uppercase","text-white","shadow-md","shadow-tmf-orange-1/10","transition-all","hover:shadow-lg","hover:shadow-tmf-orange-1/20","focus:opacity-[0.85]","focus:shadow-none","active:opacity-[0.85]","active:shadow-none","disabled:pointer-events-none","disabled:opacity-50","disabled:shadow-none",3,"click","disabled"],["type","button",1,"select-none","rounded-lg","bg-tmf-orange-1","px-6","py-3","text-center","align-middle","font-sans","text-xs","font-bold","uppercase","text-white","shadow-md","shadow-tmf-orange-1/10","transition-all","hover:shadow-lg","hover:shadow-tmf-orange-1/20","focus:opacity-[0.85]","focus:shadow-none","active:opacity-[0.85]","active:shadow-none","disabled:pointer-events-none","disabled:opacity-50","disabled:shadow-none",3,"click","disabled","hidden"],["type","button",1,"select-none","rounded-lg","bg-tmf-orange-1","px-6","py-3","text-center","align-middle","font-sans","text-xs","font-bold","uppercase","text-white","shadow-md","shadow-tmf-orange-1/10","transition-all","hover:shadow-lg","hover:shadow-tmf-orange-1/20","focus:opacity-[0.85]","focus:shadow-none","active:opacity-[0.85]","active:shadow-none","disabled:pointer-events-none","disabled:opacity-50","disabled:shadow-none",3,"click","hidden"],[1,"flex","translate-y-1/4","flex-col","items-center"],[1,"flex","h-12","items-center","pb-6"],[1,"relative","z-10","grid","h-4","w-4","place-items-center","rounded-full","font-bold","transition-all","duration-300",3,"ngClass"],[1,"absolute","bottom-0","flex","items-center","whitespace-nowrap","text-[12px]","md:text-[14px]","lg:text-[16px]",3,"ngClass"],[3,"formGroup"],[1,"w-full","md:px-6","md:py-4"],[1,"flex","flex-col","gap-4","transition-all",3,"ngClass"],[1,"text-xl","font-bold"],["label","\u570B\u5BB6","formControlName","nationality",1,"bg-white","text-gray-700",3,"isRequired","multiSelect"],[3,"value","label",4,"ngFor","ngForOf"],["label","\u6559\u6388\u79D1\u76EE","info","*\u60A8\u6700\u591A\u53EA\u80FD\u6559\u6388\u4E09\u7A2E\u79D1\u76EE",1,"bg-white","text-gray-700",3,"selectChange","formControl","isRequired","multiSelect","maxSelected"],[3,"selected","value","label",4,"ngFor","ngForOf"],[1,"flex","flex-col"],[1,"mb-1","ml-1","inline-block","text-sm","font-medium","text-tmf-gray-2","md:text-[15px]","md:leading-6"],[1,"mb-2","ml-1","text-sm","text-gray-500"],[1,"flex","flex-col","gap-4",3,"ngClass"],[1,"to-gray-500","text-xl","font-bold"],["formArrayName","work_experiences",1,"flex","flex-col","gap-y-5"],[1,"rounded-lg","border","p-4",3,"formGroupName"],[1,"flex","cursor-pointer","items-center","text-tmf-orange-1",3,"click"],[1,"material-icons-outlined"],[3,"formGroupName"],[1,"mb-6","flex"],["label","\u6211\u662F\u5728\u6821\u751F\uFF0C\u76EE\u524D\u5C31\u8B80\u4E2D","direct","horizontal",3,"checkedChange","formControlName"],[1,"mb-6","flex","flex-col","justify-between","gap-6","md:flex-row"],[1,"flex","flex-1","flex-col","gap-2"],[1,"text-red-500"],[1,"flex","flex-col","justify-between","gap-4","md:flex-row"],["placeholder","\u5E74\u4EFD",1,"bg-white","text-gray-700",3,"multiSelect","formControlName"],["placeholder","\u6708\u4EFD",1,"bg-white","text-gray-700",3,"multiSelect","formControlName"],["label","\u5730\u9EDE",1,"mb-6","bg-white","text-gray-700",3,"isRequired","multiSelect","formControlName"],[1,"w-full",3,"label","isRequired","inputType","formControlName"],["label","\u5B78\u4F4D",1,"mb-6","bg-white","text-gray-700",3,"isRequired","multiSelect","formControlName"],[1,"flex","flex-col","gap-2"],[1,"inline-block","text-sm","font-medium","text-tmf-gray-2","md:text-[15px]","md:leading-6"],["type","file","hidden","",3,"change"],["type","button",1,"shadow-white-1/10","hover:shadow-white-1/20","select-none","rounded-lg","border","bg-white","px-6","py-3","text-center","align-middle","font-sans","text-xs","font-bold","uppercase","text-black","shadow-md","transition-all","hover:shadow-lg","focus:opacity-[0.85]","focus:shadow-none","active:opacity-[0.85]","active:shadow-none","disabled:pointer-events-none","disabled:opacity-50","disabled:shadow-none",3,"click"],[1,"flex","flex-wrap","gap-1","to-gray-500","text-xl","font-bold"],[1,"ml-2","inline-block","text-sm","text-gray-300"],["formArrayName","teaching_certificates"],[3,"value","label"],[1,"bg-white","text-gray-700",3,"label","multiSelect","maxSelected","isRequired","formControl"],[1,"mb-6","flex","justify-between"],["formControlName","is_working","label","\u662F\u5426\u5728\u8077\u4E2D","direct","horizontal",3,"checkedChange"],[1,"h-6","w-6","rounded-full","bg-red-500","hover:bg-red-700",3,"click"],[1,"material-icons-outlined","text-white"],["label","\u516C\u53F8\u540D\u7A31",1,"w-full",3,"isRequired","inputType","formControlName"],["label","\u8077\u52D9\u985E\u5225",1,"mb-6","bg-white","text-gray-700",3,"isRequired","multiSelect","formControlName"],[1,"flex","flex-col","justify-between","gap-3","md:flex-row"],[1,"flex","justify-end"],["label","\u8B49\u7167\u79D1\u76EE",1,"mb-6","bg-white","text-gray-700",3,"multiSelect","formControlName","isRequired"],["label","\u8B49\u7167\u985E\u5225",1,"mb-6","bg-white","text-gray-700",3,"multiSelect","formControlName","isRequired"]],template:function(e,i){e&1&&(l(0,"div",2)(1,"div",3)(2,"div",4),d(3,"div",5)(4,"div",6),s(5,Ce,6,10,"ng-container",7),c(),s(6,Ye,77,55,"form",8),l(7,"div",9)(8,"button",10),g("click",function(){return i.prevStep()}),u(9," \u4E0A\u4E00\u6B65 "),c(),l(10,"button",11),g("click",function(){return i.nextStep()}),u(11," \u4E0B\u4E00\u6B65 "),c(),l(12,"button",12),g("click",function(){return i.onSubmit()}),u(13," \u5B8C\u6210 "),c()()()()),e&2&&(r(4),G("width",i.currentStepIndex/(i.steps.length-1)*100,"%"),r(),o("ngForOf",i.steps),r(),o("ngIf",i.teacherForm),r(2),o("disabled",i.currentStepIndex===0),r(2),o("disabled",i.currentStepIndex===i.steps.length-1)("hidden",i.currentStepIndex===i.steps.length-1),r(2),o("hidden",i.currentStepIndex!==i.steps.length-1))},dependencies:[U,H,J,L,le,ee,X,Z,te,ie,re,ne,oe,se,ue,ce,me]});let n=p;return n})();export{ot as default};
