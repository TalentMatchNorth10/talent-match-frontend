import{W as a,aa as n,g as i}from"./chunk-Y52VWUQN.js";var c=(()=>{let t=class t{getItem(e,r){let o=e.getItem(r);try{return o?JSON.parse(o):null}catch{return o}}setItem(e,r,o){try{e.setItem(r,JSON.stringify(o))}catch{}}removeItem(e,r){try{e.removeItem(r)}catch{}}getSessionItem(e){return this.getItem(sessionStorage,e)}setSessionItem(e,r){this.setItem(sessionStorage,e,r)}removeSessionItem(e){this.removeItem(sessionStorage,e)}getLocalItem(e){return this.getItem(localStorage,e)}setLocalItem(e,r){this.setItem(localStorage,e,r)}removeLocalItem(e){this.removeItem(localStorage,e)}clearSessionStorage(){try{sessionStorage.clear()}catch{}}clearLocalStorage(){try{localStorage.clear()}catch{}}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var f=(()=>{let t=class t{constructor(){this.storageService=n(c),this.loggedInStatus=new i(!1)}setLoginStatus(e){this.storageService.setSessionItem("access_token",e.access_token),this.storageService.setSessionItem("refresh_token",e.refresh_token),this.loggedInStatus.next(!0)}checkLoginStatus(){let e=this.storageService.getSessionItem("access_token"),r=this.storageService.getSessionItem("refresh_token");e&&r&&this.loggedInStatus.next(!0)}getLoginStatus(){return this.loggedInStatus.value}loginStatus$(){return this.loggedInStatus.asObservable()}logout(){this.storageService.removeSessionItem("access_token"),this.storageService.removeSessionItem("refresh_token"),this.loggedInStatus.next(!1)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();export{c as a,f as b};