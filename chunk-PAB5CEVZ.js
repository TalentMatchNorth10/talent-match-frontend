import{r as i}from"./chunk-H32CEN7X.js";import{W as o,aa as n,g as s}from"./chunk-VREVKPXB.js";var p=(()=>{let e=class e{constructor(){this.userService=n(i),this.userInfo=new s(null)}get userInfo$(){return this.userInfo.asObservable()}reFetchUserInfo(){this.userService.apiUserUserInfoGet().subscribe(r=>{this.userInfo.next(r.data)})}updateUserInfo(r){this.userInfo.next(r)}getCurrentUserInfo(){return this.userInfo.value}};e.\u0275fac=function(u){return new(u||e)},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{p as a};
