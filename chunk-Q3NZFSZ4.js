import{a as D}from"./chunk-XIR4PVUX.js";import{b as I}from"./chunk-V7HIYLVS.js";import{a as B}from"./chunk-3Y6VJORS.js";import"./chunk-3ZWJFNE4.js";import"./chunk-5O5RF25A.js";import{b as E,c as k}from"./chunk-BHWYIDWO.js";import{a as z}from"./chunk-P4S4X4XT.js";import"./chunk-PLIWHK66.js";import{d as b,f as _}from"./chunk-ZPBWYX2V.js";import{c as g,e as w,f as y,k as F,n as L,o as M,q as A}from"./chunk-2VLN7OJM.js";import"./chunk-BZOCPD4V.js";import"./chunk-TZEJHNIY.js";import"./chunk-Q2VNOGUK.js";import"./chunk-TBULRH7S.js";import"./chunk-LU4VRBQR.js";import{u as C}from"./chunk-FRGUZCQL.js";import{Ga as u,Gb as x,_ as l,_a as p,da as S,gb as i,hb as r,ib as f,oa as h,pa as v,pb as s,yb as n}from"./chunk-KLKJB66F.js";import"./chunk-CWTPBX7D.js";var d=function(a){return a.EMAIL="email",a.PASSWORD="password",a}(d||{});var J=(()=>{let m=class m{constructor(){this.fb=l(M),this.router=l(_),this.route=l(b),this.authService=l(z),this.authStatusService=l(I),this.dialogService=l(B),this.form=this.fb.group({[d.EMAIL]:this.fb.control(null,[g.required,g.email]),[d.PASSWORD]:this.fb.control(null,[g.required])}),this.LoginFormKey=d,this.InputSize=E}getErrorMessage(o){let t=this.form.get(o);return t?.hasError("required")?"\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B":t?.hasError("email")?"\u4FE1\u7BB1\u683C\u5F0F\u4E0D\u6B63\u78BA":""}ngOnInit(){let{access_token:o,refresh_token:t}=this.route.snapshot.queryParams;o&&t&&(this.authStatusService.setLoginStatus({access_token:o,refresh_token:t}),this.router.navigate(["/home"]))}login(){let{email:o,password:t}=this.form.getRawValue();o&&t&&this.authService.apiAuthLoginPost({loginRequestModel:{email:o,password:t}}).subscribe({next:e=>{this.authStatusService.setLoginStatus(e.data),this.router.navigate(["/home"])},error:e=>{this.dialogService.openAlertDialog({title:"\u767B\u5165\u5931\u6557",content:e.error.message})}})}googleLogin(){location.href=`${D.apiUrl}/api/auth/google`}navigateToSignUp(){this.router.navigate(["/sign-up"])}forgetPassword(){this.router.navigate(["/send-email"])}};m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=S({type:m,selectors:[["app-login"]],standalone:!0,features:[x],decls:31,vars:8,consts:[[1,"flex","h-[100vh]","w-full","items-center","justify-center"],[1,"flex","w-[80%]","min-w-[260px]","flex-col","items-center","rounded-md","p-8","shadow-[5px_5px_10px_10px_#F7F7F7]","md:w-auto","md:p-10"],[1,"mb-5","text-[26px]","font-semibold","text-tmf-orange-1","md:text-[32px]"],[1,"flex","w-full","gap-x-10"],[1,"relative","hidden","h-[60px]","w-[300px]","justify-center","rounded-md","border-2","py-4","duration-100","hover:border-tmf-orange-2","hover:text-tmf-orange-1","md:flex",3,"click"],["xmlns","http://www.w3.org/2000/svg","x","0px","y","0px","width","100","height","100","viewBox","0 0 48 48",1,"absolute","left-0","top-[50%]","ml-4","h-8","w-8","-translate-y-[50%]"],["fill","#FFC107","d","M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"],["fill","#FF3D00","d","M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"],["fill","#4CAF50","d","M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"],["fill","#1976D2","d","M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"],[1,"flex","w-full","flex-col","items-center","md:w-auto"],[1,"flex","w-full","flex-col","gap-y-2",3,"formGroup"],["placeholder","\u4FE1\u7BB1",3,"formControlName","errorMessage","inputSize"],["placeholder","\u5BC6\u78BC","type","password",3,"formControlName","errorMessage","inputSize"],[1,"mb-5","cursor-pointer","self-end","text-[14px]","leading-4","text-tmf-gray-3","duration-[200ms]","hover:text-tmf-gray-2",3,"click"],[1,"mb-2","w-full","rounded-md","bg-tmf-orange-2","py-3","text-center","font-semibold","text-white","duration-100","hover:bg-tmf-orange-1","disabled:bg-tmf-gray-5","md:mb-6",3,"click","disabled"],[1,"relative","mb-6","flex","h-[48px]","w-full","items-center","justify-center","rounded-md","border-2","duration-100","hover:border-tmf-orange-2","hover:text-tmf-orange-1","md:hidden",3,"click"],[1,"text-[14px]","leading-4","text-tmf-gray-3",3,"click"],[1,"cursor-pointer","font-semibold"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),n(3," \u767B\u5165 "),r(),i(4,"div",3)(5,"button",4),s("click",function(){return e.googleLogin()}),h(),i(6,"svg",5),f(7,"path",6)(8,"path",7)(9,"path",8)(10,"path",9),r(),n(11," Google \u767B\u5165 "),r(),v(),i(12,"div",10)(13,"div",11),f(14,"tmf-input",12)(15,"tmf-input",13),r(),i(16,"a",14),s("click",function(){return e.forgetPassword()}),n(17,"\u5FD8\u8A18\u5BC6\u78BC"),r(),i(18,"button",15),s("click",function(){return e.login()}),n(19," \u767B\u5165 "),r(),i(20,"button",16),s("click",function(){return e.googleLogin()}),h(),i(21,"svg",5),f(22,"path",6)(23,"path",7)(24,"path",8)(25,"path",9),r(),n(26," Google \u767B\u5165 "),r(),v(),i(27,"a",17),s("click",function(){return e.navigateToSignUp()}),n(28,"\u5C1A\u672A\u8A3B\u518A\uFF1F"),i(29,"span",18),n(30,"\u8A3B\u518A"),r()()()()()()),t&2&&(u(13),p("formGroup",e.form),u(),p("formControlName",e.LoginFormKey.EMAIL)("errorMessage",e.getErrorMessage(e.LoginFormKey.EMAIL))("inputSize",e.InputSize.Large),u(),p("formControlName",e.LoginFormKey.PASSWORD)("errorMessage",e.getErrorMessage(e.LoginFormKey.PASSWORD))("inputSize",e.InputSize.Large),u(3),p("disabled",e.form.invalid))},dependencies:[C,A,w,y,F,L,k],styles:["[_nghost-%COMP%]{display:block}"]});let a=m;return a})();export{J as LoginComponent};
