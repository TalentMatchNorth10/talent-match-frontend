import{d as w}from"./chunk-VNQ7656W.js";import"./chunk-7HPKGXFV.js";import"./chunk-ZUQEKNDW.js";import{b as C,d as M}from"./chunk-LJPA54CT.js";import{b as A}from"./chunk-UCUMTS2Y.js";import"./chunk-INKIBVR7.js";import"./chunk-WATD7KOW.js";import{c as S,e as v,f as b,l as E,o as x,q as y,s as F}from"./chunk-BJV7KTFY.js";import"./chunk-JA5JV2TR.js";import"./chunk-GTN2YQGD.js";import"./chunk-SFQLGEEG.js";import"./chunk-AII6RJAH.js";import{v as h}from"./chunk-GONTSOGY.js";import{Gb as p,Na as d,Ob as g,aa as n,fa as u,fb as m,ob as a,pb as s,qb as f,xb as c}from"./chunk-Y7HHJWJT.js";import"./chunk-MON7YFGF.js";var l=function(r){return r.EMAIL="email",r}(l||{});var q=(()=>{let o=class o{constructor(){this.fb=n(y),this.authService=n(A),this.dialogService=n(w),this.form=this.fb.group({[l.EMAIL]:this.fb.control("",[S.required])}),this.SendEmailFormKey=l,this.InputSize=C}getErrorMessage(i){return this.form.get(i)?.hasError("required")?"\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B":""}sendEmail(){let{email:i}=this.form.getRawValue();i&&this.authService.apiAuthResetPasswordSendEmailPost({resetPasswordSendEmailRequestModel:{email:i}}).subscribe({next:e=>{this.dialogService.openAlertDialog({title:"\u767C\u9001\u6210\u529F",content:e.data.message})},error:e=>{this.dialogService.openAlertDialog({title:"\u767C\u9001\u5931\u6557",content:e.error.message})}})}};o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=u({type:o,selectors:[["app-send-email"]],standalone:!0,features:[g],decls:8,vars:5,consts:[[1,"flex","h-[100vh]","w-full","items-center","justify-center",3,"formGroup"],[1,"flex","w-[80%]","min-w-[260px]","flex-col","items-center","rounded-md","p-10","shadow-[5px_5px_10px_10px_#F7F7F7]","md:w-auto"],[1,"mb-3","text-[26px]","font-semibold","text-tmf-orange-1","md:mb-5","md:text-[32px]"],[1,"mb-6","flex","flex-col","items-center","gap-y-1","md:w-[350px]"],["placeholder","\u4FE1\u7BB1",1,"w-[250px]",3,"errorMessage","formControlName","inputSize"],[1,"mb-6","w-[200px]","rounded-md","bg-tmf-orange-2","py-3","text-center","font-semibold","text-white","duration-100","hover:bg-tmf-orange-1","disabled:bg-tmf-gray-5",3,"click","disabled"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),p(3," \u5FD8\u8A18\u5BC6\u78BC "),s(),a(4,"div",3),f(5,"tmf-input",4),s(),a(6,"button",5),c("click",function(){return t.sendEmail()}),p(7," \u767C\u9001 "),s()()()),e&2&&(m("formGroup",t.form),d(5),m("errorMessage",t.getErrorMessage(t.SendEmailFormKey.EMAIL))("formControlName",t.SendEmailFormKey.EMAIL)("inputSize",t.InputSize.Large),d(),m("disabled",t.form.invalid))},dependencies:[h,F,v,b,E,x,M],styles:["[_nghost-%COMP%]{display:block}"]});let r=o;return r})();export{q as SendEmailComponent};
