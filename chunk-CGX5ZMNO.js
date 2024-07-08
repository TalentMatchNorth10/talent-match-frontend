import{a as A}from"./chunk-UDETA2XY.js";import"./chunk-CTPH3CYC.js";import"./chunk-25ATFR5N.js";import{d as x}from"./chunk-55ARK6UQ.js";import{b as D}from"./chunk-A36UBSVA.js";import"./chunk-GFMMYVLQ.js";import"./chunk-FSSOUDTV.js";import{d as P,f as v}from"./chunk-C7JF7AYC.js";import{c as u,e as C,f as R,l as b,o as y,p as F,r as M}from"./chunk-5MOKPG3X.js";import"./chunk-43B26ZPG.js";import"./chunk-LGYEZ2WK.js";import"./chunk-OVB2NPSI.js";import"./chunk-N3OWITBZ.js";import"./chunk-HJ4SDTSQ.js";import{v as S}from"./chunk-CMTOSVCB.js";import{$ as i,Fb as p,Ma as m,Ob as w,ea as c,eb as n,nb as d,ob as l,pb as h,wb as g}from"./chunk-M2XE62KH.js";import{a as f}from"./chunk-CWTPBX7D.js";var a=function(t){return t.PASSWORD="password",t.CONFIRM_PASSWORD="confirm_password",t}(a||{});var U=(()=>{let o=class o{constructor(){this.fb=i(F),this.authService=i(D),this.route=i(P),this.router=i(v),this.dialogService=i(A),this.resetPasswordToken=null,this.form=this.fb.group({[a.PASSWORD]:this.fb.control("",[u.required]),[a.CONFIRM_PASSWORD]:this.fb.control("",[u.required])}),this.ResetPasswordFormKey=a}getErrorMessage(s){return this.form.get(s)?.hasError("required")?"\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B":""}ngOnInit(){this.resetPasswordToken=this.route.snapshot.queryParams.token}resetPassword(){let{password:s,confirm_password:r}=this.form.getRawValue();s&&r&&this.authService.apiAuthResetPasswordUpdatePost({resetPasswordUpdateRequestModel:f({password:s,confirm_password:r},this.resetPasswordToken?{token:this.resetPasswordToken}:{})}).subscribe({next:()=>{this.router.navigate(["/login"])},error:e=>{this.dialogService.openAlertDialog({title:"\u91CD\u8A2D\u5BC6\u78BC\u5931\u6557",content:e.error.message})}})}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=c({type:o,selectors:[["app-reset-password"]],standalone:!0,features:[w],decls:9,vars:6,consts:[[1,"flex","h-[100vh]","w-full","items-center","justify-center",3,"formGroup"],[1,"flex","flex-col","items-center","rounded-md","p-10","shadow-[5px_5px_10px_10px_#F7F7F7]"],[1,"mb-5","text-[32px]","font-semibold","text-tmf-orange-1"],[1,"mb-6","flex","w-[350px]","flex-col","items-center","gap-y-1"],["placeholder","\u5BC6\u78BC",1,"w-[250px]",3,"errorMessage","formControlName"],["placeholder","\u78BA\u8A8D\u5BC6\u78BC",1,"w-[250px]",3,"errorMessage","formControlName"],[1,"mb-6","w-[200px]","rounded-md","bg-tmf-orange-2","py-3","text-center","font-semibold","text-white","duration-100","hover:bg-tmf-orange-1","disabled:bg-tmf-gray-5",3,"click","disabled"]],template:function(r,e){r&1&&(d(0,"div",0)(1,"div",1)(2,"h1",2),p(3," \u5FD8\u8A18\u5BC6\u78BC "),l(),d(4,"div",3),h(5,"tmf-input",4)(6,"tmf-input",5),l(),d(7,"button",6),g("click",function(){return e.resetPassword()}),p(8," \u767C\u9001 "),l()()()),r&2&&(n("formGroup",e.form),m(5),n("errorMessage",e.getErrorMessage(e.ResetPasswordFormKey.PASSWORD))("formControlName",e.ResetPasswordFormKey.PASSWORD),m(),n("errorMessage",e.getErrorMessage(e.ResetPasswordFormKey.CONFIRM_PASSWORD))("formControlName",e.ResetPasswordFormKey.CONFIRM_PASSWORD),m(),n("disabled",e.form.invalid))},dependencies:[S,M,C,R,b,y,x],styles:["[_nghost-%COMP%]{display:block}"]});let t=o;return t})();export{U as ResetPasswordComponent};
