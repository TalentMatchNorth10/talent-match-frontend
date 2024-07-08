import{a as y,b as j,c as p}from"./chunk-N3OWITBZ.js";import{a as m,b as A,c as C,d as b}from"./chunk-HJ4SDTSQ.js";import{V as g,_ as h}from"./chunk-M2XE62KH.js";var S=(()=>{let s=class s{constructor(t,e,r){this.httpClient=t,this.basePath="http://localhost:8080",this.defaultHeaders=new m,this.configuration=new p,r&&(this.configuration=r),typeof this.configuration.basePath!="string"&&(Array.isArray(e)&&e.length>0&&(e=e[0]),typeof e!="string"&&(e=this.basePath),this.configuration.basePath=e),this.encoder=this.configuration.encoder||new y}addToHttpParams(t,e,r){return typeof e=="object"&&!(e instanceof Date)?t=this.addToHttpParamsRecursive(t,e):t=this.addToHttpParamsRecursive(t,e,r),t}addToHttpParamsRecursive(t,e,r){if(e==null)return t;if(typeof e=="object")if(Array.isArray(e))e.forEach(i=>t=this.addToHttpParamsRecursive(t,i,r));else if(e instanceof Date)if(r!=null)t=t.append(r,e.toISOString().substring(0,10));else throw Error("key may not be null if value is Date");else Object.keys(e).forEach(i=>t=this.addToHttpParamsRecursive(t,e[i],r!=null?`${r}.${i}`:i));else if(r!=null)t=t.append(r,e);else throw Error("key may not be null if value is not object or array");return t}apiStudentCalendarGet(t,e="body",r=!1,i){let c=t.date,n=new A({encoder:this.encoder});c!=null&&(n=this.addToHttpParams(n,c,"date"));let o=this.defaultHeaders,l;l=this.configuration.lookupCredential("bearerAuth"),l&&(o=o.set("Authorization","Bearer "+l));let a=i&&i.httpHeaderAccept;if(a===void 0){let V=["application/json","application/xml"];a=this.configuration.selectHeaderAccept(V)}a!==void 0&&(o=o.set("Accept",a));let d=i&&i.context;d===void 0&&(d=new C);let f=i&&i.transferCache;f===void 0&&(f=!0);let u="json";return a&&(a.startsWith("text")?u="text":this.configuration.isJsonMime(a)?u="json":u="blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/student/calendar`,{context:d,params:n,responseType:u,withCredentials:this.configuration.withCredentials,headers:o,observe:e,transferCache:f,reportProgress:r})}apiStudentPurchasedCoursesGet(t="body",e=!1,r){let i=this.defaultHeaders,c;c=this.configuration.lookupCredential("bearerAuth"),c&&(i=i.set("Authorization","Bearer "+c));let n=r&&r.httpHeaderAccept;if(n===void 0){let f=["application/json","application/xml"];n=this.configuration.selectHeaderAccept(f)}n!==void 0&&(i=i.set("Accept",n));let o=r&&r.context;o===void 0&&(o=new C);let l=r&&r.transferCache;l===void 0&&(l=!0);let a="json";return n&&(n.startsWith("text")?a="text":this.configuration.isJsonMime(n)?a="json":a="blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/student/purchased_courses`,{context:o,responseType:a,withCredentials:this.configuration.withCredentials,headers:i,observe:t,transferCache:l,reportProgress:e})}};s.\u0275fac=function(e){return new(e||s)(h(b),h(j,8),h(p,8))},s.\u0275prov=g({token:s,factory:s.\u0275fac,providedIn:"root"});let H=s;return H})();export{S as a};
