import{a as g,b as A,c as h}from"./chunk-LENADYWN.js";import{a as T,b as S,c as m,d as w}from"./chunk-QFHTBAPR.js";import{U as y,Z as x}from"./chunk-MURYLCTF.js";var $=(()=>{let f=class f{constructor(t,e,i){this.httpClient=t,this.basePath="http://localhost:8080",this.defaultHeaders=new T,this.configuration=new h,i&&(this.configuration=i),typeof this.configuration.basePath!="string"&&(Array.isArray(e)&&e.length>0&&(e=e[0]),typeof e!="string"&&(e=this.basePath),this.configuration.basePath=e),this.encoder=this.configuration.encoder||new g}addToHttpParams(t,e,i){return typeof e=="object"&&!(e instanceof Date)?t=this.addToHttpParamsRecursive(t,e):t=this.addToHttpParamsRecursive(t,e,i),t}addToHttpParamsRecursive(t,e,i){if(e==null)return t;if(typeof e=="object")if(Array.isArray(e))e.forEach(r=>t=this.addToHttpParamsRecursive(t,r,i));else if(e instanceof Date)if(i!=null)t=t.append(i,e.toISOString().substring(0,10));else throw Error("key may not be null if value is Date");else Object.keys(e).forEach(r=>t=this.addToHttpParamsRecursive(t,e[r],i!=null?`${i}.${r}`:r));else if(i!=null)t=t.append(i,e);else throw Error("key may not be null if value is not object or array");return t}apiAuthGoogleCallbackGet(t="body",e=!1,i){let r=this.defaultHeaders,s=i&&i.httpHeaderAccept;if(s===void 0){let l=["application/json","application/xml"];s=this.configuration.selectHeaderAccept(l)}s!==void 0&&(r=r.set("Accept",s));let o=i&&i.context;o===void 0&&(o=new m);let a=i&&i.transferCache;a===void 0&&(a=!0);let n="json";return s&&(s.startsWith("text")?n="text":this.configuration.isJsonMime(s)?n="json":n="blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/auth/google/callback`,{context:o,responseType:n,withCredentials:this.configuration.withCredentials,headers:r,observe:t,transferCache:a,reportProgress:e})}apiAuthGoogleGet(t="body",e=!1,i){let r=this.defaultHeaders,s=i&&i.httpHeaderAccept;if(s===void 0){let l=["application/json","application/xml"];s=this.configuration.selectHeaderAccept(l)}s!==void 0&&(r=r.set("Accept",s));let o=i&&i.context;o===void 0&&(o=new m);let a=i&&i.transferCache;a===void 0&&(a=!0);let n="json";return s&&(s.startsWith("text")?n="text":this.configuration.isJsonMime(s)?n="json":n="blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/auth/google`,{context:o,responseType:n,withCredentials:this.configuration.withCredentials,headers:r,observe:t,transferCache:a,reportProgress:e})}apiAuthLoginPost(t,e="body",i=!1,r){let s=t.loginRequestModel;if(s==null)throw new Error("Required parameter loginRequestModel was null or undefined when calling apiAuthLoginPost.");let o=this.defaultHeaders,a=r&&r.httpHeaderAccept;if(a===void 0){let b=["application/json","application/xml"];a=this.configuration.selectHeaderAccept(b)}a!==void 0&&(o=o.set("Accept",a));let n=r&&r.context;n===void 0&&(n=new m);let c=r&&r.transferCache;c===void 0&&(c=!0);let l=["application/json"],d=this.configuration.selectHeaderContentType(l);d!==void 0&&(o=o.set("Content-Type",d));let p="json";return a&&(a.startsWith("text")?p="text":this.configuration.isJsonMime(a)?p="json":p="blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/auth/login`,{context:n,body:s,responseType:p,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:c,reportProgress:i})}apiAuthRefreshPost(t,e="body",i=!1,r){let s=t.refreshRequestModel;if(s==null)throw new Error("Required parameter refreshRequestModel was null or undefined when calling apiAuthRefreshPost.");let o=this.defaultHeaders,a=r&&r.httpHeaderAccept;if(a===void 0){let b=["application/json","application/xml"];a=this.configuration.selectHeaderAccept(b)}a!==void 0&&(o=o.set("Accept",a));let n=r&&r.context;n===void 0&&(n=new m);let c=r&&r.transferCache;c===void 0&&(c=!0);let l=["application/json"],d=this.configuration.selectHeaderContentType(l);d!==void 0&&(o=o.set("Content-Type",d));let p="json";return a&&(a.startsWith("text")?p="text":this.configuration.isJsonMime(a)?p="json":p="blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/auth/refresh`,{context:n,body:s,responseType:p,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:c,reportProgress:i})}apiAuthRegisterPost(t,e="body",i=!1,r){let s=t.registerRequestModel;if(s==null)throw new Error("Required parameter registerRequestModel was null or undefined when calling apiAuthRegisterPost.");let o=this.defaultHeaders,a=r&&r.httpHeaderAccept;if(a===void 0){let b=["application/json","application/xml"];a=this.configuration.selectHeaderAccept(b)}a!==void 0&&(o=o.set("Accept",a));let n=r&&r.context;n===void 0&&(n=new m);let c=r&&r.transferCache;c===void 0&&(c=!0);let l=["application/json"],d=this.configuration.selectHeaderContentType(l);d!==void 0&&(o=o.set("Content-Type",d));let p="json";return a&&(a.startsWith("text")?p="text":this.configuration.isJsonMime(a)?p="json":p="blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/auth/register`,{context:n,body:s,responseType:p,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:c,reportProgress:i})}apiAuthResetPasswordSendEmailPost(t,e="body",i=!1,r){let s=t.resetPasswordSendEmailRequestModel;if(s==null)throw new Error("Required parameter resetPasswordSendEmailRequestModel was null or undefined when calling apiAuthResetPasswordSendEmailPost.");let o=this.defaultHeaders,a=r&&r.httpHeaderAccept;if(a===void 0){let b=["application/json","application/xml"];a=this.configuration.selectHeaderAccept(b)}a!==void 0&&(o=o.set("Accept",a));let n=r&&r.context;n===void 0&&(n=new m);let c=r&&r.transferCache;c===void 0&&(c=!0);let l=["application/json"],d=this.configuration.selectHeaderContentType(l);d!==void 0&&(o=o.set("Content-Type",d));let p="json";return a&&(a.startsWith("text")?p="text":this.configuration.isJsonMime(a)?p="json":p="blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/auth/reset_password/send_email`,{context:n,body:s,responseType:p,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:c,reportProgress:i})}apiAuthResetPasswordUpdatePost(t,e="body",i=!1,r){let s=t.resetPasswordUpdateRequestModel;if(s==null)throw new Error("Required parameter resetPasswordUpdateRequestModel was null or undefined when calling apiAuthResetPasswordUpdatePost.");let o=t.authorization,a=this.defaultHeaders;o!=null&&(a=a.set("authorization",String(o)));let n=r&&r.httpHeaderAccept;if(n===void 0){let H=["application/json","application/xml"];n=this.configuration.selectHeaderAccept(H)}n!==void 0&&(a=a.set("Accept",n));let c=r&&r.context;c===void 0&&(c=new m);let l=r&&r.transferCache;l===void 0&&(l=!0);let d=["application/json"],p=this.configuration.selectHeaderContentType(d);p!==void 0&&(a=a.set("Content-Type",p));let u="json";return n&&(n.startsWith("text")?u="text":this.configuration.isJsonMime(n)?u="json":u="blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/auth/reset_password/update`,{context:c,body:s,responseType:u,withCredentials:this.configuration.withCredentials,headers:a,observe:e,transferCache:l,reportProgress:i})}};f.\u0275fac=function(e){return new(e||f)(x(w),x(A,8),x(h,8))},f.\u0275prov=y({token:f,factory:f.\u0275fac,providedIn:"root"});let C=f;return C})();var E=(()=>{let f=class f{constructor(t,e,i){this.httpClient=t,this.basePath="http://localhost:8080",this.defaultHeaders=new T,this.configuration=new h,i&&(this.configuration=i),typeof this.configuration.basePath!="string"&&(Array.isArray(e)&&e.length>0&&(e=e[0]),typeof e!="string"&&(e=this.basePath),this.configuration.basePath=e),this.encoder=this.configuration.encoder||new g}addToHttpParams(t,e,i){return typeof e=="object"&&!(e instanceof Date)?t=this.addToHttpParamsRecursive(t,e):t=this.addToHttpParamsRecursive(t,e,i),t}addToHttpParamsRecursive(t,e,i){if(e==null)return t;if(typeof e=="object")if(Array.isArray(e))e.forEach(r=>t=this.addToHttpParamsRecursive(t,r,i));else if(e instanceof Date)if(i!=null)t=t.append(i,e.toISOString().substring(0,10));else throw Error("key may not be null if value is Date");else Object.keys(e).forEach(r=>t=this.addToHttpParamsRecursive(t,e[r],i!=null?`${i}.${r}`:r));else if(i!=null)t=t.append(i,e);else throw Error("key may not be null if value is not object or array");return t}apiFavoritesDelete(t,e="body",i=!1,r){let s=t.favoriteRequestModel;if(s==null)throw new Error("Required parameter favoriteRequestModel was null or undefined when calling apiFavoritesDelete.");let o=this.defaultHeaders,a;a=this.configuration.lookupCredential("bearerAuth"),a&&(o=o.set("Authorization","Bearer "+a));let n=r&&r.httpHeaderAccept;if(n===void 0){let H=["application/json","application/xml"];n=this.configuration.selectHeaderAccept(H)}n!==void 0&&(o=o.set("Accept",n));let c=r&&r.context;c===void 0&&(c=new m);let l=r&&r.transferCache;l===void 0&&(l=!0);let d=["application/json"],p=this.configuration.selectHeaderContentType(d);p!==void 0&&(o=o.set("Content-Type",p));let u="json";return n&&(n.startsWith("text")?u="text":this.configuration.isJsonMime(n)?u="json":u="blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/favorites/`,{context:c,body:s,responseType:u,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:l,reportProgress:i})}apiFavoritesGet(t="body",e=!1,i){let r=this.defaultHeaders,s;s=this.configuration.lookupCredential("bearerAuth"),s&&(r=r.set("Authorization","Bearer "+s));let o=i&&i.httpHeaderAccept;if(o===void 0){let d=["application/json","application/xml"];o=this.configuration.selectHeaderAccept(d)}o!==void 0&&(r=r.set("Accept",o));let a=i&&i.context;a===void 0&&(a=new m);let n=i&&i.transferCache;n===void 0&&(n=!0);let c="json";return o&&(o.startsWith("text")?c="text":this.configuration.isJsonMime(o)?c="json":c="blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/favorites/`,{context:a,responseType:c,withCredentials:this.configuration.withCredentials,headers:r,observe:t,transferCache:n,reportProgress:e})}apiFavoritesPost(t,e="body",i=!1,r){let s=t.favoriteRequestModel;if(s==null)throw new Error("Required parameter favoriteRequestModel was null or undefined when calling apiFavoritesPost.");let o=this.defaultHeaders,a;a=this.configuration.lookupCredential("bearerAuth"),a&&(o=o.set("Authorization","Bearer "+a));let n=r&&r.httpHeaderAccept;if(n===void 0){let H=["application/json","application/xml"];n=this.configuration.selectHeaderAccept(H)}n!==void 0&&(o=o.set("Accept",n));let c=r&&r.context;c===void 0&&(c=new m);let l=r&&r.transferCache;l===void 0&&(l=!0);let d=["application/json"],p=this.configuration.selectHeaderContentType(d);p!==void 0&&(o=o.set("Content-Type",p));let u="json";return n&&(n.startsWith("text")?u="text":this.configuration.isJsonMime(n)?u="json":u="blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/favorites/`,{context:c,body:s,responseType:u,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:l,reportProgress:i})}};f.\u0275fac=function(e){return new(e||f)(x(w),x(A,8),x(h,8))},f.\u0275prov=y({token:f,factory:f.\u0275fac,providedIn:"root"});let C=f;return C})();var v=(()=>{let f=class f{constructor(t,e,i){this.httpClient=t,this.basePath="http://localhost:8080",this.defaultHeaders=new T,this.configuration=new h,i&&(this.configuration=i),typeof this.configuration.basePath!="string"&&(Array.isArray(e)&&e.length>0&&(e=e[0]),typeof e!="string"&&(e=this.basePath),this.configuration.basePath=e),this.encoder=this.configuration.encoder||new g}addToHttpParams(t,e,i){return typeof e=="object"&&!(e instanceof Date)?t=this.addToHttpParamsRecursive(t,e):t=this.addToHttpParamsRecursive(t,e,i),t}addToHttpParamsRecursive(t,e,i){if(e==null)return t;if(typeof e=="object")if(Array.isArray(e))e.forEach(r=>t=this.addToHttpParamsRecursive(t,r,i));else if(e instanceof Date)if(i!=null)t=t.append(i,e.toISOString().substring(0,10));else throw Error("key may not be null if value is Date");else Object.keys(e).forEach(r=>t=this.addToHttpParamsRecursive(t,e[r],i!=null?`${i}.${r}`:r));else if(i!=null)t=t.append(i,e);else throw Error("key may not be null if value is not object or array");return t}apiShopCartGet(t="body",e=!1,i){let r=this.defaultHeaders,s;s=this.configuration.lookupCredential("bearerAuth"),s&&(r=r.set("Authorization","Bearer "+s));let o=i&&i.httpHeaderAccept;if(o===void 0){let d=["application/json","application/xml"];o=this.configuration.selectHeaderAccept(d)}o!==void 0&&(r=r.set("Accept",o));let a=i&&i.context;a===void 0&&(a=new m);let n=i&&i.transferCache;n===void 0&&(n=!0);let c="json";return o&&(o.startsWith("text")?c="text":this.configuration.isJsonMime(o)?c="json":c="blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/shop/cart`,{context:a,responseType:c,withCredentials:this.configuration.withCredentials,headers:r,observe:t,transferCache:n,reportProgress:e})}apiShopCartIdDelete(t,e="body",i=!1,r){let s=t.id;if(s==null)throw new Error("Required parameter id was null or undefined when calling apiShopCartIdDelete.");let o=this.defaultHeaders,a;a=this.configuration.lookupCredential("bearerAuth"),a&&(o=o.set("Authorization","Bearer "+a));let n=r&&r.httpHeaderAccept;if(n===void 0){let u=["application/json","application/xml"];n=this.configuration.selectHeaderAccept(u)}n!==void 0&&(o=o.set("Accept",n));let c=r&&r.context;c===void 0&&(c=new m);let l=r&&r.transferCache;l===void 0&&(l=!0);let d="json";n&&(n.startsWith("text")?d="text":this.configuration.isJsonMime(n)?d="json":d="blob");let p=`/api/shop/cart/${this.configuration.encodeParam({name:"id",value:s,in:"path",style:"simple",explode:!1,dataType:"string",dataFormat:void 0})}`;return this.httpClient.request("delete",`${this.configuration.basePath}${p}`,{context:c,responseType:d,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:l,reportProgress:i})}apiShopCartPost(t,e="body",i=!1,r){let s=t.addCartItemRequestModel;if(s==null)throw new Error("Required parameter addCartItemRequestModel was null or undefined when calling apiShopCartPost.");let o=this.defaultHeaders,a;a=this.configuration.lookupCredential("bearerAuth"),a&&(o=o.set("Authorization","Bearer "+a));let n=r&&r.httpHeaderAccept;if(n===void 0){let H=["application/json","application/xml"];n=this.configuration.selectHeaderAccept(H)}n!==void 0&&(o=o.set("Accept",n));let c=r&&r.context;c===void 0&&(c=new m);let l=r&&r.transferCache;l===void 0&&(l=!0);let d=["application/json"],p=this.configuration.selectHeaderContentType(d);p!==void 0&&(o=o.set("Content-Type",p));let u="json";return n&&(n.startsWith("text")?u="text":this.configuration.isJsonMime(n)?u="json":u="blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/shop/cart`,{context:c,body:s,responseType:u,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:l,reportProgress:i})}apiShopOrderIdGet(t,e="body",i=!1,r){let s=t.id;if(s==null)throw new Error("Required parameter id was null or undefined when calling apiShopOrderIdGet.");let o=this.defaultHeaders,a;a=this.configuration.lookupCredential("bearerAuth"),a&&(o=o.set("Authorization","Bearer "+a));let n=r&&r.httpHeaderAccept;if(n===void 0){let u=["application/json","application/xml"];n=this.configuration.selectHeaderAccept(u)}n!==void 0&&(o=o.set("Accept",n));let c=r&&r.context;c===void 0&&(c=new m);let l=r&&r.transferCache;l===void 0&&(l=!0);let d="json";n&&(n.startsWith("text")?d="text":this.configuration.isJsonMime(n)?d="json":d="blob");let p=`/api/shop/order/${this.configuration.encodeParam({name:"id",value:s,in:"path",style:"simple",explode:!1,dataType:"string",dataFormat:void 0})}`;return this.httpClient.request("get",`${this.configuration.basePath}${p}`,{context:c,responseType:d,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:l,reportProgress:i})}apiShopPaymentCreatePost(t,e="body",i=!1,r){let s=t.paymentCreateRequestModel;if(s==null)throw new Error("Required parameter paymentCreateRequestModel was null or undefined when calling apiShopPaymentCreatePost.");let o=this.defaultHeaders,a;a=this.configuration.lookupCredential("bearerAuth"),a&&(o=o.set("Authorization","Bearer "+a));let n=r&&r.httpHeaderAccept;if(n===void 0){let H=["application/json","application/xml"];n=this.configuration.selectHeaderAccept(H)}n!==void 0&&(o=o.set("Accept",n));let c=r&&r.context;c===void 0&&(c=new m);let l=r&&r.transferCache;l===void 0&&(l=!0);let d=["application/json"],p=this.configuration.selectHeaderContentType(d);p!==void 0&&(o=o.set("Content-Type",p));let u="json";return n&&(n.startsWith("text")?u="text":this.configuration.isJsonMime(n)?u="json":u="blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/shop/payment_create`,{context:c,body:s,responseType:u,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:l,reportProgress:i})}};f.\u0275fac=function(e){return new(e||f)(x(w),x(A,8),x(h,8))},f.\u0275prov=y({token:f,factory:f.\u0275fac,providedIn:"root"});let C=f;return C})();var B=(()=>{let f=class f{constructor(t,e,i){this.httpClient=t,this.basePath="http://localhost:8080",this.defaultHeaders=new T,this.configuration=new h,i&&(this.configuration=i),typeof this.configuration.basePath!="string"&&(Array.isArray(e)&&e.length>0&&(e=e[0]),typeof e!="string"&&(e=this.basePath),this.configuration.basePath=e),this.encoder=this.configuration.encoder||new g}addToHttpParams(t,e,i){return typeof e=="object"&&!(e instanceof Date)?t=this.addToHttpParamsRecursive(t,e):t=this.addToHttpParamsRecursive(t,e,i),t}addToHttpParamsRecursive(t,e,i){if(e==null)return t;if(typeof e=="object")if(Array.isArray(e))e.forEach(r=>t=this.addToHttpParamsRecursive(t,r,i));else if(e instanceof Date)if(i!=null)t=t.append(i,e.toISOString().substring(0,10));else throw Error("key may not be null if value is Date");else Object.keys(e).forEach(r=>t=this.addToHttpParamsRecursive(t,e[r],i!=null?`${i}.${r}`:r));else if(i!=null)t=t.append(i,e);else throw Error("key may not be null if value is not object or array");return t}apiStudentPurchasedCoursesGet(t="body",e=!1,i){let r=this.defaultHeaders,s;s=this.configuration.lookupCredential("bearerAuth"),s&&(r=r.set("Authorization","Bearer "+s));let o=i&&i.httpHeaderAccept;if(o===void 0){let d=["application/json","application/xml"];o=this.configuration.selectHeaderAccept(d)}o!==void 0&&(r=r.set("Accept",o));let a=i&&i.context;a===void 0&&(a=new m);let n=i&&i.transferCache;n===void 0&&(n=!0);let c="json";return o&&(o.startsWith("text")?c="text":this.configuration.isJsonMime(o)?c="json":c="blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/student/purchased_courses`,{context:a,responseType:c,withCredentials:this.configuration.withCredentials,headers:r,observe:t,transferCache:n,reportProgress:e})}};f.\u0275fac=function(e){return new(e||f)(x(w),x(A,8),x(h,8))},f.\u0275prov=y({token:f,factory:f.\u0275fac,providedIn:"root"});let C=f;return C})();var W=(()=>{let f=class f{constructor(t,e,i){this.httpClient=t,this.basePath="http://localhost:8080",this.defaultHeaders=new T,this.configuration=new h,i&&(this.configuration=i),typeof this.configuration.basePath!="string"&&(Array.isArray(e)&&e.length>0&&(e=e[0]),typeof e!="string"&&(e=this.basePath),this.configuration.basePath=e),this.encoder=this.configuration.encoder||new g}addToHttpParams(t,e,i){return typeof e=="object"&&!(e instanceof Date)?t=this.addToHttpParamsRecursive(t,e):t=this.addToHttpParamsRecursive(t,e,i),t}addToHttpParamsRecursive(t,e,i){if(e==null)return t;if(typeof e=="object")if(Array.isArray(e))e.forEach(r=>t=this.addToHttpParamsRecursive(t,r,i));else if(e instanceof Date)if(i!=null)t=t.append(i,e.toISOString().substring(0,10));else throw Error("key may not be null if value is Date");else Object.keys(e).forEach(r=>t=this.addToHttpParamsRecursive(t,e[r],i!=null?`${i}.${r}`:r));else if(i!=null)t=t.append(i,e);else throw Error("key may not be null if value is not object or array");return t}apiStudentInfoBasicInfoGet(t="body",e=!1,i){let r=this.defaultHeaders,s;s=this.configuration.lookupCredential("bearerAuth"),s&&(r=r.set("Authorization","Bearer "+s));let o=i&&i.httpHeaderAccept;if(o===void 0){let d=["application/json","application/xml"];o=this.configuration.selectHeaderAccept(d)}o!==void 0&&(r=r.set("Accept",o));let a=i&&i.context;a===void 0&&(a=new m);let n=i&&i.transferCache;n===void 0&&(n=!0);let c="json";return o&&(o.startsWith("text")?c="text":this.configuration.isJsonMime(o)?c="json":c="blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/student_info/basic_info`,{context:a,responseType:c,withCredentials:this.configuration.withCredentials,headers:r,observe:t,transferCache:n,reportProgress:e})}apiStudentInfoBasicInfoPatch(t,e="body",i=!1,r){let s=t.updateStudentInfoRequestModel;if(s==null)throw new Error("Required parameter updateStudentInfoRequestModel was null or undefined when calling apiStudentInfoBasicInfoPatch.");let o=this.defaultHeaders,a;a=this.configuration.lookupCredential("bearerAuth"),a&&(o=o.set("Authorization","Bearer "+a));let n=r&&r.httpHeaderAccept;if(n===void 0){let H=["application/json","application/xml"];n=this.configuration.selectHeaderAccept(H)}n!==void 0&&(o=o.set("Accept",n));let c=r&&r.context;c===void 0&&(c=new m);let l=r&&r.transferCache;l===void 0&&(l=!0);let d=["application/json","application/xml"],p=this.configuration.selectHeaderContentType(d);p!==void 0&&(o=o.set("Content-Type",p));let u="json";return n&&(n.startsWith("text")?u="text":this.configuration.isJsonMime(n)?u="json":u="blob"),this.httpClient.request("patch",`${this.configuration.basePath}/api/student_info/basic_info`,{context:c,body:s,responseType:u,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:l,reportProgress:i})}};f.\u0275fac=function(e){return new(e||f)(x(w),x(A,8),x(h,8))},f.\u0275prov=y({token:f,factory:f.\u0275fac,providedIn:"root"});let C=f;return C})();var D=(()=>{let f=class f{constructor(t,e,i){this.httpClient=t,this.basePath="http://localhost:8080",this.defaultHeaders=new T,this.configuration=new h,i&&(this.configuration=i),typeof this.configuration.basePath!="string"&&(Array.isArray(e)&&e.length>0&&(e=e[0]),typeof e!="string"&&(e=this.basePath),this.configuration.basePath=e),this.encoder=this.configuration.encoder||new g}canConsumeForm(t){let e="multipart/form-data";for(let i of t)if(e===i)return!0;return!1}addToHttpParams(t,e,i){return typeof e=="object"&&!(e instanceof Date)?t=this.addToHttpParamsRecursive(t,e):t=this.addToHttpParamsRecursive(t,e,i),t}addToHttpParamsRecursive(t,e,i){if(e==null)return t;if(typeof e=="object")if(Array.isArray(e))e.forEach(r=>t=this.addToHttpParamsRecursive(t,r,i));else if(e instanceof Date)if(i!=null)t=t.append(i,e.toISOString().substring(0,10));else throw Error("key may not be null if value is Date");else Object.keys(e).forEach(r=>t=this.addToHttpParamsRecursive(t,e[r],i!=null?`${i}.${r}`:r));else if(i!=null)t=t.append(i,e);else throw Error("key may not be null if value is not object or array");return t}apiUploadFilePost(t,e="body",i=!1,r){let s=t.fileType,o=t.path,a=t.file,n=this.defaultHeaders,c;c=this.configuration.lookupCredential("bearerAuth"),c&&(n=n.set("Authorization","Bearer "+c));let l=r&&r.httpHeaderAccept;if(l===void 0){let M=[];l=this.configuration.selectHeaderAccept(M)}l!==void 0&&(n=n.set("Accept",l));let d=r&&r.context;d===void 0&&(d=new m);let p=r&&r.transferCache;p===void 0&&(p=!0);let u=["multipart/form-data"],b=this.canConsumeForm(u),H,I=!1,q=!1;I=b,I?H=new FormData:H=new S({encoder:this.encoder}),s!==void 0&&(H=H.append("fileType",s)||H),o!==void 0&&(H=H.append("path",o)||H),a!==void 0&&(H=H.append("file",a)||H);let P="json";return l&&(l.startsWith("text")?P="text":this.configuration.isJsonMime(l)?P="json":P="blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/upload/file`,{context:d,body:q?H.toString():H,responseType:P,withCredentials:this.configuration.withCredentials,headers:n,observe:e,transferCache:p,reportProgress:i})}};f.\u0275fac=function(e){return new(e||f)(x(w),x(A,8),x(h,8))},f.\u0275prov=y({token:f,factory:f.\u0275fac,providedIn:"root"});let C=f;return C})();var _=(()=>{let f=class f{constructor(t,e,i){this.httpClient=t,this.basePath="http://localhost:8080",this.defaultHeaders=new T,this.configuration=new h,i&&(this.configuration=i),typeof this.configuration.basePath!="string"&&(Array.isArray(e)&&e.length>0&&(e=e[0]),typeof e!="string"&&(e=this.basePath),this.configuration.basePath=e),this.encoder=this.configuration.encoder||new g}addToHttpParams(t,e,i){return typeof e=="object"&&!(e instanceof Date)?t=this.addToHttpParamsRecursive(t,e):t=this.addToHttpParamsRecursive(t,e,i),t}addToHttpParamsRecursive(t,e,i){if(e==null)return t;if(typeof e=="object")if(Array.isArray(e))e.forEach(r=>t=this.addToHttpParamsRecursive(t,r,i));else if(e instanceof Date)if(i!=null)t=t.append(i,e.toISOString().substring(0,10));else throw Error("key may not be null if value is Date");else Object.keys(e).forEach(r=>t=this.addToHttpParamsRecursive(t,e[r],i!=null?`${i}.${r}`:r));else if(i!=null)t=t.append(i,e);else throw Error("key may not be null if value is not object or array");return t}apiUserUserInfoGet(t="body",e=!1,i){let r=this.defaultHeaders,s;s=this.configuration.lookupCredential("bearerAuth"),s&&(r=r.set("Authorization","Bearer "+s));let o=i&&i.httpHeaderAccept;if(o===void 0){let d=["application/json","application/xml"];o=this.configuration.selectHeaderAccept(d)}o!==void 0&&(r=r.set("Accept",o));let a=i&&i.context;a===void 0&&(a=new m);let n=i&&i.transferCache;n===void 0&&(n=!0);let c="json";return o&&(o.startsWith("text")?c="text":this.configuration.isJsonMime(o)?c="json":c="blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/user/user_info`,{context:a,responseType:c,withCredentials:this.configuration.withCredentials,headers:r,observe:t,transferCache:n,reportProgress:e})}};f.\u0275fac=function(e){return new(e||f)(x(w),x(A,8),x(h,8))},f.\u0275prov=y({token:f,factory:f.\u0275fac,providedIn:"root"});let C=f;return C})();export{$ as a,E as b,v as c,B as d,W as e,D as f,_ as g};
