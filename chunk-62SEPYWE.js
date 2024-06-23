import{a as V}from"./chunk-3Y6VJORS.js";import"./chunk-3ZWJFNE4.js";import"./chunk-5O5RF25A.js";import{b as L,c as P}from"./chunk-BHWYIDWO.js";import{a as U}from"./chunk-P4S4X4XT.js";import"./chunk-PLIWHK66.js";import{f as D}from"./chunk-ZPBWYX2V.js";import{b as I,c as p,e as R,f as B,k as O,n as k,o as z,q as K}from"./chunk-2VLN7OJM.js";import"./chunk-BZOCPD4V.js";import"./chunk-TZEJHNIY.js";import"./chunk-Q2VNOGUK.js";import"./chunk-TBULRH7S.js";import"./chunk-LU4VRBQR.js";import{u as w}from"./chunk-FRGUZCQL.js";import{Ab as F,Ga as l,Gb as N,Rb as b,Ya as v,_ as f,_a as s,bb as E,da as A,gb as n,hb as u,ib as M,ma as C,mb as y,na as _,pb as x,qb as h,yb as m}from"./chunk-KLKJB66F.js";import"./chunk-CWTPBX7D.js";var a=function(t){return t.NICK_NAME="nick_name",t.EMAIL="email",t.PASSWORD="password",t.CONFIRM_PASSWORD="confirm_password",t}(a||{});var g=function(t){return t.NotMatch="notMatch",t}(g||{});function T(t,i){return d=>{let o=d.get(t),r=d.get(i);return!o||!r||r.errors&&!r.errors[g.NotMatch]||(o.value!==r.value?r.setErrors({[g.NotMatch]:!0}):r.setErrors(null)),null}}var W={match:T};function q(t,i){if(t&1&&(n(0,"p",17),m(1),u()),t&2){let d=h().data,o=h();l(),F(" ",o.getErrorMessage(d.key)," ")}}function G(t,i){if(t&1&&(n(0,"div",15),M(1,"input",16),v(2,q,2,1,"p",17),u()),t&2){let d,o=i.data,r=h();l(),s("type",o.type)("placeholder",o.placeholder)("formControlName",o.key),l(),E(2,(d=r.getFormControl(o.key))!=null&&d.touched?2:-1)}}var me=(()=>{let i=class i{constructor(){this.fb=f(z),this.router=f(D),this.authService=f(U),this.dialogService=f(V),this.form=this.fb.group({[a.NICK_NAME]:this.fb.control("",[p.required]),[a.EMAIL]:this.fb.control("",[p.required,p.email]),[a.PASSWORD]:this.fb.control("",[p.required,p.minLength(8)]),[a.CONFIRM_PASSWORD]:this.fb.control("",[p.required,p.minLength(8)])},{validators:[W.match(a.PASSWORD,a.CONFIRM_PASSWORD)]}),this.SignUpFormKey=a,this.InputSize=L}get nickNameControl(){return this.form.controls[a.NICK_NAME]}getFormControl(o){return this.form.get(o)}getErrorMessage(o){let r=this.form.get(o);return r?.hasError("required")?"\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B":r?.hasError("email")?"\u4FE1\u7BB1\u683C\u5F0F\u4E0D\u6B63\u78BA":r?.hasError("minlength")?"\u5BC6\u78BC\u81F3\u5C11\u516B\u500B\u5B57\u5143":r?.hasError(g.NotMatch)?"\u5BC6\u78BC\u4E0D\u4E00\u81F4":""}register(){let{nick_name:o,email:r,password:e,confirm_password:S}=this.form.getRawValue();this.authService.apiAuthRegisterPost({registerRequestModel:{nick_name:o,email:r,password:e,confirm_password:S}}).subscribe({next:c=>{this.dialogService.openAlertDialog({title:"\u8A3B\u518A\u6210\u529F",content:c.data.message}).closed.subscribe(()=>{this.router.navigate(["/login"])})},error:c=>{this.dialogService.openAlertDialog({title:"\u8A3B\u518A\u5931\u6557",content:c.error.message})}})}navigateToLogin(){this.router.navigate(["/login"])}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=A({type:i,selectors:[["app-sign-up"]],standalone:!0,features:[N],decls:22,vars:14,consts:[["input",""],[1,"flex","h-[100vh]","w-full","items-center","justify-center",3,"formGroup"],[1,"flex","w-[80%]","min-w-[260px]","flex-col","items-center","rounded-md","p-10","shadow-[5px_5px_10px_10px_#F7F7F7]","md:w-auto"],[1,"mb-5","text-[26px]","font-semibold","text-tmf-orange-1","md:text-[32px]"],[1,"mb-6","flex","w-full","flex-col","gap-y-1","md:w-[500px]"],["placeholder","\u66B1\u7A31",3,"errorMessage","formControlName","inputSize"],["placeholder","\u4FE1\u7BB1",3,"errorMessage","formControlName","inputSize"],["placeholder","\u5BC6\u78BC(\u81F3\u5C11\u516B\u500B\u5B57\u5143)","type","password",3,"errorMessage","formControlName","inputSize"],["placeholder","\u78BA\u8A8D\u5BC6\u78BC","type","password",3,"errorMessage","formControlName","inputSize"],[1,"mb-6","w-[200px]","rounded-md","bg-tmf-orange-2","py-3","text-center","font-semibold","text-white","duration-100","hover:bg-tmf-orange-1","disabled:bg-tmf-gray-5",3,"click","disabled"],[1,"flex","w-[240px]","flex-col","gap-y-2","text-center"],[1,"text-[12px]","leading-4","text-tmf-gray-3"],[1,"cursor-pointer","underline"],[1,"text-[14px]","leading-4","text-tmf-gray-3"],[1,"cursor-pointer","font-semibold",3,"click"],[1,"relative","pb-6"],[1,"w-full","border-b-2","py-3","outline-none","duration-75","focus:border-tmf-orange-1",3,"type","placeholder","formControlName"],[1,"absolute","bottom-0","text-[14px]","text-red-500"]],template:function(r,e){if(r&1){let S=y();n(0,"div",1)(1,"div",2)(2,"h1",3),m(3," \u8A3B\u518A "),u(),n(4,"div",4),M(5,"tmf-input",5)(6,"tmf-input",6)(7,"tmf-input",7)(8,"tmf-input",8),u(),n(9,"button",9),x("click",function(){return C(S),_(e.register())}),m(10," \u8A3B\u518A "),u(),n(11,"div",10)(12,"p",11),m(13," \u9EDE\u64CA\u300C\u8A3B\u518A\u300D\u5373\u4EE3\u8868\u60A8\u540C\u610F\u6211\u5011\u7684\u4F7F\u7528"),n(14,"span",12),m(15,"\u689D\u6B3E\u53CA\u96B1\u79C1\u653F\u7B56"),u()(),n(16,"a",13),m(17,"\u5DF2\u7D93\u8A3B\u518A\uFF1F"),n(18,"span",14),x("click",function(){return C(S),_(e.navigateToLogin())}),m(19,"\u767B\u5165"),u()()()(),v(20,G,3,4,"ng-template",null,0,b),u()}r&2&&(s("formGroup",e.form),l(5),s("errorMessage",e.getErrorMessage(e.SignUpFormKey.NICK_NAME))("formControlName",e.SignUpFormKey.NICK_NAME)("inputSize",e.InputSize.Large),l(),s("errorMessage",e.getErrorMessage(e.SignUpFormKey.EMAIL))("formControlName",e.SignUpFormKey.EMAIL)("inputSize",e.InputSize.Large),l(),s("errorMessage",e.getErrorMessage(e.SignUpFormKey.PASSWORD))("formControlName",e.SignUpFormKey.PASSWORD)("inputSize",e.InputSize.Large),l(),s("errorMessage",e.getErrorMessage(e.SignUpFormKey.CONFIRM_PASSWORD))("formControlName",e.SignUpFormKey.CONFIRM_PASSWORD)("inputSize",e.InputSize.Large),l(),s("disabled",e.form.invalid))},dependencies:[w,K,I,R,B,O,k,P],styles:["[_nghost-%COMP%]{display:block}"]});let t=i;return t})();export{me as SignUpComponent};
