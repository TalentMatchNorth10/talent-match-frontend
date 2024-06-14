import{a as A}from"./chunk-TDLAVAK3.js";import{c as x}from"./chunk-CWG5O4B2.js";import{d as S,f as C}from"./chunk-46LA73KG.js";import{c as p,e as R,f as v,i as b,j as y,k as F,l as M}from"./chunk-L6N5YTFF.js";import"./chunk-CYY5G2DS.js";import"./chunk-FAIBOK5A.js";import"./chunk-FRTGBFSG.js";import{t as P}from"./chunk-PEBBI2ND.js";import{Cb as w,Fa as m,Z as i,Za as n,ca as c,fb as d,gb as u,hb as h,ob as g,xb as l}from"./chunk-P6ATHD64.js";import{a as f}from"./chunk-TMC7WMLO.js";var a=function(t){return t.PASSWORD="password",t.CONFIRM_PASSWORD="confirm_password",t}(a||{});var G=(()=>{let o=class o{constructor(){this.fb=i(F),this.authService=i(A),this.route=i(S),this.router=i(C),this.resetPasswordToken=null,this.form=this.fb.group({[a.PASSWORD]:this.fb.control("",[p.required]),[a.CONFIRM_PASSWORD]:this.fb.control("",[p.required])}),this.ResetPasswordFormKey=a}getErrorMessage(s){return this.form.get(s)?.hasError("required")?"\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B":""}ngOnInit(){this.resetPasswordToken=this.route.snapshot.queryParams.token}resetPassword(){let{password:s,confirm_password:r}=this.form.getRawValue();s&&r&&this.authService.apiAuthResetPasswordUpdatePost({resetPasswordUpdateRequestModel:f({password:s,confirm_password:r},this.resetPasswordToken?{token:this.resetPasswordToken}:{})}).subscribe({next:()=>{this.router.navigate(["/login"])},error:e=>{console.error(e)}})}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=c({type:o,selectors:[["app-reset-password"]],standalone:!0,features:[w],decls:9,vars:6,consts:[[1,"flex","h-[100vh]","w-full","items-center","justify-center",3,"formGroup"],[1,"flex","flex-col","items-center","rounded-md","p-10","shadow-[5px_5px_10px_10px_#F7F7F7]"],[1,"mb-5","text-[32px]","font-semibold","text-tmf-orange-1"],[1,"mb-6","flex","w-[350px]","flex-col","items-center","gap-y-1"],["placeholder","\u5BC6\u78BC",1,"w-[250px]",3,"errorMessage","formControlName"],["placeholder","\u78BA\u8A8D\u5BC6\u78BC",1,"w-[250px]",3,"errorMessage","formControlName"],[1,"mb-6","w-[200px]","rounded-md","bg-tmf-orange-2","py-3","text-center","font-semibold","text-white","duration-100","hover:bg-tmf-orange-1","disabled:bg-tmf-gray-5",3,"click","disabled"]],template:function(r,e){r&1&&(d(0,"div",0)(1,"div",1)(2,"h1",2),l(3," \u5FD8\u8A18\u5BC6\u78BC "),u(),d(4,"div",3),h(5,"tmf-input",4)(6,"tmf-input",5),u(),d(7,"button",6),g("click",function(){return e.resetPassword()}),l(8," \u767C\u9001 "),u()()()),r&2&&(n("formGroup",e.form),m(5),n("errorMessage",e.getErrorMessage(e.ResetPasswordFormKey.PASSWORD))("formControlName",e.ResetPasswordFormKey.PASSWORD),m(),n("errorMessage",e.getErrorMessage(e.ResetPasswordFormKey.CONFIRM_PASSWORD))("formControlName",e.ResetPasswordFormKey.CONFIRM_PASSWORD),m(),n("disabled",e.form.invalid))},dependencies:[P,M,R,v,b,y,x],styles:["[_nghost-%COMP%]{display:block}"]});let t=o;return t})();export{G as ResetPasswordComponent};
