import{a as V,b as W}from"./chunk-VSQ77Z3L.js";import"./chunk-CN4SOMML.js";import"./chunk-N2SME4JU.js";import"./chunk-6OHNUCWJ.js";import"./chunk-LF66F6OX.js";import"./chunk-QZANICO5.js";import{d as P}from"./chunk-GF23IXSY.js";import"./chunk-EFXHSPSL.js";import"./chunk-FDJYYR2J.js";import"./chunk-5M4XPVVL.js";import{b as K,d as L}from"./chunk-T3Y2OTFZ.js";import{b as U}from"./chunk-7RH4UJE5.js";import"./chunk-N764XXSV.js";import"./chunk-46I6UZOM.js";import"./chunk-UXLL4RDX.js";import{f as w}from"./chunk-M6PVZGW2.js";import{b as D,c as p,e as I,f as R,l as B,o as O,q as k,s as z}from"./chunk-VOBGA6RN.js";import"./chunk-P2WCFEXO.js";import"./chunk-TCRDAKVE.js";import"./chunk-3E6NSQOV.js";import"./chunk-5GUPSS47.js";import{v as N}from"./chunk-3PMTIMLI.js";import{Gb as u,Ib as x,Na as l,Ob as F,Zb as b,aa as g,db as _,fa as y,fb as s,jb as E,ob as i,pa as C,pb as m,qa as h,qb as A,ub as M,xb as v,yb as S}from"./chunk-3A66ECCW.js";import"./chunk-MON7YFGF.js";var n=function(t){return t.NICK_NAME="nick_name",t.EMAIL="email",t.PASSWORD="password",t.CONFIRM_PASSWORD="confirm_password",t}(n||{});function T(t,a){if(t&1&&(i(0,"p",17),u(1),m()),t&2){let f=S().data,r=S();l(),x(" ",r.getErrorMessage(f.key)," ")}}function q(t,a){if(t&1&&(i(0,"div",15),A(1,"input",16),_(2,T,2,1,"p",17),m()),t&2){let f,r=a.data,o=S();l(),s("type",r.type)("placeholder",r.placeholder)("formControlName",r.key),l(),E(2,(f=o.getFormControl(r.key))!=null&&f.touched?2:-1)}}var ie=(()=>{let a=class a{constructor(){this.fb=g(k),this.router=g(w),this.authService=g(U),this.dialogService=g(P),this.form=this.fb.group({[n.NICK_NAME]:this.fb.control("",[p.required]),[n.EMAIL]:this.fb.control("",[p.required,p.email]),[n.PASSWORD]:this.fb.control("",[p.required,p.minLength(8)]),[n.CONFIRM_PASSWORD]:this.fb.control("",[p.required,p.minLength(8)])},{validators:[W.match(n.PASSWORD,n.CONFIRM_PASSWORD)]}),this.SignUpFormKey=n,this.InputSize=K}get nickNameControl(){return this.form.controls[n.NICK_NAME]}getFormControl(r){return this.form.get(r)}getErrorMessage(r){let o=this.form.get(r);return o?.hasError("required")?"\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B":o?.hasError("email")?"\u4FE1\u7BB1\u683C\u5F0F\u4E0D\u6B63\u78BA":o?.hasError("minlength")?"\u5BC6\u78BC\u81F3\u5C11\u516B\u500B\u5B57\u5143":o?.hasError(V.NotMatch)?"\u5BC6\u78BC\u4E0D\u4E00\u81F4":""}register(){let{nick_name:r,email:o,password:e,confirm_password:c}=this.form.getRawValue();this.authService.apiAuthRegisterPost({registerRequestModel:{nick_name:r,email:o,password:e,confirm_password:c}}).subscribe({next:d=>{this.dialogService.openAlertDialog({title:"\u8A3B\u518A\u6210\u529F",content:d.data.message}).closed.subscribe(()=>{this.router.navigate(["/login"])})},error:d=>{this.dialogService.openAlertDialog({title:"\u8A3B\u518A\u5931\u6557",content:d.error.message})}})}navigateToLogin(){this.router.navigate(["/login"])}};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=y({type:a,selectors:[["app-sign-up"]],standalone:!0,features:[F],decls:22,vars:14,consts:[["input",""],[1,"flex","h-[100vh]","w-full","items-center","justify-center",3,"formGroup"],[1,"flex","w-[80%]","min-w-[260px]","flex-col","items-center","rounded-md","p-10","shadow-[5px_5px_10px_10px_#F7F7F7]","md:w-auto"],[1,"mb-5","text-[26px]","font-semibold","text-tmf-orange-1","md:text-[32px]"],[1,"mb-6","flex","w-full","flex-col","gap-y-1","md:w-[500px]"],["placeholder","\u66B1\u7A31",3,"errorMessage","formControlName","inputSize"],["placeholder","\u4FE1\u7BB1",3,"errorMessage","formControlName","inputSize"],["placeholder","\u5BC6\u78BC(\u81F3\u5C11\u516B\u500B\u5B57\u5143)","type","password",3,"errorMessage","formControlName","inputSize"],["placeholder","\u78BA\u8A8D\u5BC6\u78BC","type","password",3,"errorMessage","formControlName","inputSize"],[1,"mb-6","w-[200px]","rounded-md","bg-tmf-orange-2","py-3","text-center","font-semibold","text-white","duration-100","hover:bg-tmf-orange-1","disabled:bg-tmf-gray-5",3,"click","disabled"],[1,"flex","w-[240px]","flex-col","gap-y-2","text-center"],[1,"text-[12px]","leading-4","text-tmf-gray-3"],[1,"cursor-pointer","underline"],[1,"text-[14px]","leading-4","text-tmf-gray-3"],[1,"cursor-pointer","font-semibold",3,"click"],[1,"relative","pb-6"],[1,"w-full","border-b-2","py-3","outline-none","duration-75","focus:border-tmf-orange-1",3,"type","placeholder","formControlName"],[1,"absolute","bottom-0","text-[14px]","text-red-500"]],template:function(o,e){if(o&1){let c=M();i(0,"div",1)(1,"div",2)(2,"h1",3),u(3," \u8A3B\u518A "),m(),i(4,"div",4),A(5,"tmf-input",5)(6,"tmf-input",6)(7,"tmf-input",7)(8,"tmf-input",8),m(),i(9,"button",9),v("click",function(){return C(c),h(e.register())}),u(10," \u8A3B\u518A "),m(),i(11,"div",10)(12,"p",11),u(13," \u9EDE\u64CA\u300C\u8A3B\u518A\u300D\u5373\u4EE3\u8868\u60A8\u540C\u610F\u6211\u5011\u7684\u4F7F\u7528"),i(14,"span",12),u(15,"\u689D\u6B3E\u53CA\u96B1\u79C1\u653F\u7B56"),m()(),i(16,"a",13),u(17,"\u5DF2\u7D93\u8A3B\u518A\uFF1F"),i(18,"span",14),v("click",function(){return C(c),h(e.navigateToLogin())}),u(19,"\u767B\u5165"),m()()()(),_(20,q,3,4,"ng-template",null,0,b),m()}o&2&&(s("formGroup",e.form),l(5),s("errorMessage",e.getErrorMessage(e.SignUpFormKey.NICK_NAME))("formControlName",e.SignUpFormKey.NICK_NAME)("inputSize",e.InputSize.Large),l(),s("errorMessage",e.getErrorMessage(e.SignUpFormKey.EMAIL))("formControlName",e.SignUpFormKey.EMAIL)("inputSize",e.InputSize.Large),l(),s("errorMessage",e.getErrorMessage(e.SignUpFormKey.PASSWORD))("formControlName",e.SignUpFormKey.PASSWORD)("inputSize",e.InputSize.Large),l(),s("errorMessage",e.getErrorMessage(e.SignUpFormKey.CONFIRM_PASSWORD))("formControlName",e.SignUpFormKey.CONFIRM_PASSWORD)("inputSize",e.InputSize.Large),l(),s("disabled",e.form.invalid))},dependencies:[N,z,D,I,R,B,O,L],styles:["[_nghost-%COMP%]{display:block}"]});let t=a;return t})();export{ie as SignUpComponent};
