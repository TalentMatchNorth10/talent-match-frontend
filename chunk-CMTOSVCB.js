import{$ as B,$b as _e,Aa as Se,Ea as be,La as ve,Na as h,Pa as T,S as Fe,T as Ce,Ta as x,V as w,W as Ee,Xa as O,Y as R,_ as I,ac as Ie,da as ye,fa as we,fc as Me,ga as A,gc as J,ha as N,hc as Le,ic as Be,mc as ee,na as Ae,ub as F,vb as D,za as $}from"./chunk-M2XE62KH.js";var Ue=null;function te(){return Ue}function un(t){Ue??=t}var Re=class{};var he=new R(""),fe=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=w({token:e,factory:()=>B(Ye),providedIn:"platform"});let t=e;return t})(),an=new R(""),Ye=(()=>{let e=class e extends fe{constructor(){super(),this._doc=B(he),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return te().getBaseHref(this._doc)}onPopState(n){let i=te().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=te().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,r){this._history.pushState(n,i,r)}replaceState(n,i,r){this._history.replaceState(n,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=w({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function De(t,e){if(t.length==0)return e;if(e.length==0)return t;let s=0;return t.endsWith("/")&&s++,e.startsWith("/")&&s++,s==2?t+e.substring(1):s==1?t+e:t+"/"+e}function Oe(t){let e=t.match(/#|\?|$/),s=e&&e.index||t.length,n=s-(t[s-1]==="/"?1:0);return t.slice(0,n)+t.slice(s)}function b(t){return t&&t[0]!=="?"?"?"+t:t}var q=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=w({token:e,factory:()=>B(We),providedIn:"root"});let t=e;return t})(),ze=new R(""),We=(()=>{let e=class e extends q{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??B(he).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return De(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+b(this._platformLocation.search),r=this._platformLocation.hash;return r&&n?`${i}${r}`:i}pushState(n,i,r,o){let u=this.prepareExternalUrl(r+b(o));this._platformLocation.pushState(n,i,u)}replaceState(n,i,r,o){let u=this.prepareExternalUrl(r+b(o));this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(I(fe),I(ze,8))},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),cn=(()=>{let e=class e extends q{constructor(n,i){super(),this._platformLocation=n,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}path(n=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(n){let i=De(this._baseHref,n);return i.length>0?"#"+i:i}pushState(n,i,r,o){let u=this.prepareExternalUrl(r+b(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(n,i,u)}replaceState(n,i,r,o){let u=this.prepareExternalUrl(r+b(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(n,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(I(fe),I(ze,8))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let t=e;return t})(),Ze=(()=>{let e=class e{constructor(n){this._subject=new Se,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=Xe(Oe(Te(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+b(i))}normalize(n){return e.stripTrailingSlash(qe(this._basePath,Te(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",r=null){this._locationStrategy.pushState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+b(i)),r)}replaceState(n,i="",r=null){this._locationStrategy.replaceState(r,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+b(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(r=>r(n,i))}subscribe(n,i,r){return this._subject.subscribe({next:n,error:i,complete:r})}};e.normalizeQueryParams=b,e.joinWithSlash=De,e.stripTrailingSlash=Oe,e.\u0275fac=function(i){return new(i||e)(I(q))},e.\u0275prov=w({token:e,factory:()=>Ke(),providedIn:"root"});let t=e;return t})();function Ke(){return new Ze(I(q))}function qe(t,e){if(!t||!e.startsWith(t))return e;let s=e.substring(t.length);return s===""||["/",";","?","#"].includes(s[0])?s:e}function Te(t){return t.replace(/\/index.html$/,"")}function Xe(t){if(new RegExp("^(https?:)?//").test(t)){let[,s]=t.split(/\/\/[^\/]+/);return s}return t}var p=function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t}(p||{}),d=function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t}(d||{}),m=function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t}(m||{}),M={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Qe(t){return F(t)[D.LocaleId]}function Je(t,e,s){let n=F(t),i=[n[D.DayPeriodsFormat],n[D.DayPeriodsStandalone]],r=C(i,e);return C(r,s)}function et(t,e,s){let n=F(t),i=[n[D.DaysFormat],n[D.DaysStandalone]],r=C(i,e);return C(r,s)}function tt(t,e,s){let n=F(t),i=[n[D.MonthsFormat],n[D.MonthsStandalone]],r=C(i,e);return C(r,s)}function nt(t,e){let n=F(t)[D.Eras];return C(n,e)}function U(t,e){let s=F(t);return C(s[D.DateFormat],e)}function z(t,e){let s=F(t);return C(s[D.TimeFormat],e)}function V(t,e){let n=F(t)[D.DateTimeFormat];return C(n,e)}function X(t,e){let s=F(t),n=s[D.NumberSymbols][e];if(typeof n>"u"){if(e===M.CurrencyDecimal)return s[D.NumberSymbols][M.Decimal];if(e===M.CurrencyGroup)return s[D.NumberSymbols][M.Group]}return n}function Ve(t){if(!t[D.ExtraData])throw new Error(`Missing extra locale data for the locale "${t[D.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function it(t){let e=F(t);return Ve(e),(e[D.ExtraData][2]||[]).map(n=>typeof n=="string"?ne(n):[ne(n[0]),ne(n[1])])}function rt(t,e,s){let n=F(t);Ve(n);let i=[n[D.ExtraData][0],n[D.ExtraData][1]],r=C(i,e)||[];return C(r,s)||[]}function C(t,e){for(let s=e;s>-1;s--)if(typeof t[s]<"u")return t[s];throw new Error("Locale data API: locale data undefined")}function ne(t){let[e,s]=t.split(":");return{hours:+e,minutes:+s}}var st=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,j={},ot=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,v=function(t){return t[t.Short=0]="Short",t[t.ShortGMT=1]="ShortGMT",t[t.Long=2]="Long",t[t.Extended=3]="Extended",t}(v||{}),c=function(t){return t[t.FullYear=0]="FullYear",t[t.Month=1]="Month",t[t.Date=2]="Date",t[t.Hours=3]="Hours",t[t.Minutes=4]="Minutes",t[t.Seconds=5]="Seconds",t[t.FractionalSeconds=6]="FractionalSeconds",t[t.Day=7]="Day",t}(c||{}),a=function(t){return t[t.DayPeriods=0]="DayPeriods",t[t.Days=1]="Days",t[t.Months=2]="Months",t[t.Eras=3]="Eras",t}(a||{});function ut(t,e,s,n){let i=pt(t);e=S(s,e)||e;let o=[],u;for(;e;)if(u=ot.exec(e),u){o=o.concat(u.slice(1));let y=o.pop();if(!y)break;e=y}else{o.push(e);break}let f=i.getTimezoneOffset();n&&(f=Ge(n,f),i=gt(i,n,!0));let _="";return o.forEach(y=>{let L=ft(y);_+=L?L(i,s,f):y==="''"?"'":y.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),_}function Z(t,e,s){let n=new Date(0);return n.setFullYear(t,e,s),n.setHours(0,0,0),n}function S(t,e){let s=Qe(t);if(j[s]??={},j[s][e])return j[s][e];let n="";switch(e){case"shortDate":n=U(t,m.Short);break;case"mediumDate":n=U(t,m.Medium);break;case"longDate":n=U(t,m.Long);break;case"fullDate":n=U(t,m.Full);break;case"shortTime":n=z(t,m.Short);break;case"mediumTime":n=z(t,m.Medium);break;case"longTime":n=z(t,m.Long);break;case"fullTime":n=z(t,m.Full);break;case"short":let i=S(t,"shortTime"),r=S(t,"shortDate");n=G(V(t,m.Short),[i,r]);break;case"medium":let o=S(t,"mediumTime"),u=S(t,"mediumDate");n=G(V(t,m.Medium),[o,u]);break;case"long":let f=S(t,"longTime"),_=S(t,"longDate");n=G(V(t,m.Long),[f,_]);break;case"full":let y=S(t,"fullTime"),L=S(t,"fullDate");n=G(V(t,m.Full),[y,L]);break}return n&&(j[s][e]=n),n}function G(t,e){return e&&(t=t.replace(/\{([^}]+)}/g,function(s,n){return e!=null&&n in e?e[n]:s})),t}function E(t,e,s="-",n,i){let r="";(t<0||i&&t<=0)&&(i?t=-t+1:(t=-t,r=s));let o=String(t);for(;o.length<e;)o="0"+o;return n&&(o=o.slice(o.length-e)),r+o}function at(t,e){return E(t,3).substring(0,e)}function g(t,e,s=0,n=!1,i=!1){return function(r,o){let u=ct(t,r);if((s>0||u>-s)&&(u+=s),t===c.Hours)u===0&&s===-12&&(u=12);else if(t===c.FractionalSeconds)return at(u,e);let f=X(o,M.MinusSign);return E(u,e,f,n,i)}}function ct(t,e){switch(t){case c.FullYear:return e.getFullYear();case c.Month:return e.getMonth();case c.Date:return e.getDate();case c.Hours:return e.getHours();case c.Minutes:return e.getMinutes();case c.Seconds:return e.getSeconds();case c.FractionalSeconds:return e.getMilliseconds();case c.Day:return e.getDay();default:throw new Error(`Unknown DateType value "${t}".`)}}function l(t,e,s=p.Format,n=!1){return function(i,r){return dt(i,r,t,e,s,n)}}function dt(t,e,s,n,i,r){switch(s){case a.Months:return tt(e,i,n)[t.getMonth()];case a.Days:return et(e,i,n)[t.getDay()];case a.DayPeriods:let o=t.getHours(),u=t.getMinutes();if(r){let _=it(e),y=rt(e,i,n),L=_.findIndex(P=>{if(Array.isArray(P)){let[Q,k]=P,pe=o>=Q.hours&&u>=Q.minutes,me=o<k.hours||o===k.hours&&u<k.minutes;if(Q.hours<k.hours){if(pe&&me)return!0}else if(pe||me)return!0}else if(P.hours===o&&P.minutes===u)return!0;return!1});if(L!==-1)return y[L]}return Je(e,i,n)[o<12?0:1];case a.Eras:return nt(e,n)[t.getFullYear()<=0?0:1];default:let f=s;throw new Error(`unexpected translation type ${f}`)}}function H(t){return function(e,s,n){let i=-1*n,r=X(s,M.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case v.Short:return(i>=0?"+":"")+E(o,2,r)+E(Math.abs(i%60),2,r);case v.ShortGMT:return"GMT"+(i>=0?"+":"")+E(o,1,r);case v.Long:return"GMT"+(i>=0?"+":"")+E(o,2,r)+":"+E(Math.abs(i%60),2,r);case v.Extended:return n===0?"Z":(i>=0?"+":"")+E(o,2,r)+":"+E(Math.abs(i%60),2,r);default:throw new Error(`Unknown zone width "${t}"`)}}}var lt=0,W=4;function ht(t){let e=Z(t,lt,1).getDay();return Z(t,0,1+(e<=W?W:W+7)-e)}function je(t){let e=t.getDay(),s=e===0?-3:W-e;return Z(t.getFullYear(),t.getMonth(),t.getDate()+s)}function ie(t,e=!1){return function(s,n){let i;if(e){let r=new Date(s.getFullYear(),s.getMonth(),1).getDay()-1,o=s.getDate();i=1+Math.floor((o+r)/7)}else{let r=je(s),o=ht(r.getFullYear()),u=r.getTime()-o.getTime();i=1+Math.round(u/6048e5)}return E(i,t,X(n,M.MinusSign))}}function Y(t,e=!1){return function(s,n){let r=je(s).getFullYear();return E(r,t,X(n,M.MinusSign),e)}}var re={};function ft(t){if(re[t])return re[t];let e;switch(t){case"G":case"GG":case"GGG":e=l(a.Eras,d.Abbreviated);break;case"GGGG":e=l(a.Eras,d.Wide);break;case"GGGGG":e=l(a.Eras,d.Narrow);break;case"y":e=g(c.FullYear,1,0,!1,!0);break;case"yy":e=g(c.FullYear,2,0,!0,!0);break;case"yyy":e=g(c.FullYear,3,0,!1,!0);break;case"yyyy":e=g(c.FullYear,4,0,!1,!0);break;case"Y":e=Y(1);break;case"YY":e=Y(2,!0);break;case"YYY":e=Y(3);break;case"YYYY":e=Y(4);break;case"M":case"L":e=g(c.Month,1,1);break;case"MM":case"LL":e=g(c.Month,2,1);break;case"MMM":e=l(a.Months,d.Abbreviated);break;case"MMMM":e=l(a.Months,d.Wide);break;case"MMMMM":e=l(a.Months,d.Narrow);break;case"LLL":e=l(a.Months,d.Abbreviated,p.Standalone);break;case"LLLL":e=l(a.Months,d.Wide,p.Standalone);break;case"LLLLL":e=l(a.Months,d.Narrow,p.Standalone);break;case"w":e=ie(1);break;case"ww":e=ie(2);break;case"W":e=ie(1,!0);break;case"d":e=g(c.Date,1);break;case"dd":e=g(c.Date,2);break;case"c":case"cc":e=g(c.Day,1);break;case"ccc":e=l(a.Days,d.Abbreviated,p.Standalone);break;case"cccc":e=l(a.Days,d.Wide,p.Standalone);break;case"ccccc":e=l(a.Days,d.Narrow,p.Standalone);break;case"cccccc":e=l(a.Days,d.Short,p.Standalone);break;case"E":case"EE":case"EEE":e=l(a.Days,d.Abbreviated);break;case"EEEE":e=l(a.Days,d.Wide);break;case"EEEEE":e=l(a.Days,d.Narrow);break;case"EEEEEE":e=l(a.Days,d.Short);break;case"a":case"aa":case"aaa":e=l(a.DayPeriods,d.Abbreviated);break;case"aaaa":e=l(a.DayPeriods,d.Wide);break;case"aaaaa":e=l(a.DayPeriods,d.Narrow);break;case"b":case"bb":case"bbb":e=l(a.DayPeriods,d.Abbreviated,p.Standalone,!0);break;case"bbbb":e=l(a.DayPeriods,d.Wide,p.Standalone,!0);break;case"bbbbb":e=l(a.DayPeriods,d.Narrow,p.Standalone,!0);break;case"B":case"BB":case"BBB":e=l(a.DayPeriods,d.Abbreviated,p.Format,!0);break;case"BBBB":e=l(a.DayPeriods,d.Wide,p.Format,!0);break;case"BBBBB":e=l(a.DayPeriods,d.Narrow,p.Format,!0);break;case"h":e=g(c.Hours,1,-12);break;case"hh":e=g(c.Hours,2,-12);break;case"H":e=g(c.Hours,1);break;case"HH":e=g(c.Hours,2);break;case"m":e=g(c.Minutes,1);break;case"mm":e=g(c.Minutes,2);break;case"s":e=g(c.Seconds,1);break;case"ss":e=g(c.Seconds,2);break;case"S":e=g(c.FractionalSeconds,1);break;case"SS":e=g(c.FractionalSeconds,2);break;case"SSS":e=g(c.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":e=H(v.Short);break;case"ZZZZZ":e=H(v.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=H(v.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":e=H(v.Long);break;default:return null}return re[t]=e,e}function Ge(t,e){t=t.replace(/:/g,"");let s=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(s)?e:s}function Dt(t,e){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+e),t}function gt(t,e,s){let n=s?-1:1,i=t.getTimezoneOffset(),r=Ge(e,i);return Dt(t,n*(r-i))}function pt(t){if(Pe(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[i,r=1,o=1]=t.split("-").map(u=>+u);return Z(i,r-1,o)}let s=parseFloat(t);if(!isNaN(t-s))return new Date(s);let n;if(n=t.match(st))return mt(n)}let e=new Date(t);if(!Pe(e))throw new Error(`Unable to convert "${t}" into a date`);return e}function mt(t){let e=new Date(0),s=0,n=0,i=t[8]?e.setUTCFullYear:e.setFullYear,r=t[8]?e.setUTCHours:e.setHours;t[9]&&(s=Number(t[9]+t[10]),n=Number(t[9]+t[11])),i.call(e,Number(t[1]),Number(t[2])-1,Number(t[3]));let o=Number(t[4]||0)-s,u=Number(t[5]||0)-n,f=Number(t[6]||0),_=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return r.call(e,o,u,f,_),e}function Pe(t){return t instanceof Date&&!isNaN(t.valueOf())}function dn(t,e){e=encodeURIComponent(e);for(let s of t.split(";")){let n=s.indexOf("="),[i,r]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(i.trim()===e)return decodeURIComponent(r)}return null}var se=/\s+/,ke=[],ln=(()=>{let e=class e{constructor(n,i){this._ngEl=n,this._renderer=i,this.initialClasses=ke,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(se):ke}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(se):n}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let i of n)this._updateState(i,!0);else if(n!=null)for(let i of Object.keys(n))this._updateState(i,!!n[i]);this._applyStateDiff()}_updateState(n,i){let r=this.stateMap.get(n);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(n,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let i=n[0],r=n[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(n,i){n=n.trim(),n.length>0&&n.split(se).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};e.\u0275fac=function(i){return new(i||e)(h($),h(x))},e.\u0275dir=A({type:e,selectors:[["","ngClass",""]],inputs:{klass:[ye.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let t=e;return t})();var oe=class{constructor(e,s,n,i){this.$implicit=e,this.ngForOf=s,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},hn=(()=>{let e=class e{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,i,r){this._viewContainer=n,this._template=i,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let i=this._viewContainer;n.forEachOperation((r,o,u)=>{if(r.previousIndex==null)i.createEmbeddedView(this._template,new oe(r.item,this._ngForOf,-1,-1),u===null?void 0:u);else if(u==null)i.remove(o===null?void 0:o);else if(o!==null){let f=i.get(o);i.move(f,u),Ne(f,r)}});for(let r=0,o=i.length;r<o;r++){let f=i.get(r).context;f.index=r,f.count=o,f.ngForOf=this._ngForOf}n.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);Ne(o,r)})}static ngTemplateContextGuard(n,i){return!0}};e.\u0275fac=function(i){return new(i||e)(h(O),h(T),h(Le))},e.\u0275dir=A({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let t=e;return t})();function Ne(t,e){t.context.$implicit=e.item}var fn=(()=>{let e=class e{constructor(n,i){this._viewContainer=n,this._context=new ue,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=i}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){$e("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){$e("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,i){return!0}};e.\u0275fac=function(i){return new(i||e)(h(O),h(T))},e.\u0275dir=A({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let t=e;return t})(),ue=class{constructor(){this.$implicit=null,this.ngIf=null}};function $e(t,e){if(!!!(!e||e.createEmbeddedView))throw new Error(`${t} must be a TemplateRef, but received '${Ce(e)}'.`)}var Ft=!0,K=class{constructor(e,s){this._viewContainerRef=e,this._templateRef=s,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}},He=(()=>{let e=class e{constructor(){this._defaultViews=[],this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(n){this._ngSwitch=n,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(n){this._defaultViews.push(n)}_matchCase(n){let i=Ft?n===this._ngSwitch:n==this._ngSwitch;return this._lastCasesMatched||=i,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),i}_updateDefaultCases(n){if(this._defaultViews.length>0&&n!==this._defaultUsed){this._defaultUsed=n;for(let i of this._defaultViews)i.enforceState(n)}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=A({type:e,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"},standalone:!0});let t=e;return t})(),Dn=(()=>{let e=class e{constructor(n,i,r){this.ngSwitch=r,r._addCase(),this._view=new K(n,i)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}};e.\u0275fac=function(i){return new(i||e)(h(O),h(T),h(He,9))},e.\u0275dir=A({type:e,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"},standalone:!0});let t=e;return t})(),gn=(()=>{let e=class e{constructor(n,i,r){r._addDefault(new K(n,i))}};e.\u0275fac=function(i){return new(i||e)(h(O),h(T),h(He,9))},e.\u0275dir=A({type:e,selectors:[["","ngSwitchDefault",""]],standalone:!0});let t=e;return t})();var pn=(()=>{let e=class e{constructor(n,i,r){this._ngEl=n,this._differs=i,this._renderer=r,this._ngStyle=null,this._differ=null}set ngStyle(n){this._ngStyle=n,!this._differ&&n&&(this._differ=this._differs.find(n).create())}ngDoCheck(){if(this._differ){let n=this._differ.diff(this._ngStyle);n&&this._applyChanges(n)}}_setStyle(n,i){let[r,o]=n.split("."),u=r.indexOf("-")===-1?void 0:ve.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,u):this._renderer.removeStyle(this._ngEl.nativeElement,r,u)}_applyChanges(n){n.forEachRemovedItem(i=>this._setStyle(i.key,null)),n.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),n.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}};e.\u0275fac=function(i){return new(i||e)(h($),h(Be),h(x))},e.\u0275dir=A({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});let t=e;return t})(),mn=(()=>{let e=class e{constructor(n){this._viewContainerRef=n,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(n){if(this._shouldRecreateView(n)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(n){return!!n.ngTemplateOutlet||!!n.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(n,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(n,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}};e.\u0275fac=function(i){return new(i||e)(h(O))},e.\u0275dir=A({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[Ae]});let t=e;return t})();function ge(t,e){return new Fe(2100,!1)}var ae=class{createSubscription(e,s){return ee(()=>e.subscribe({next:s,error:n=>{throw n}}))}dispose(e){ee(()=>e.unsubscribe())}},ce=class{createSubscription(e,s){return e.then(s,n=>{throw n})}dispose(e){}},Ct=new ce,Et=new ae,Fn=(()=>{let e=class e{constructor(n){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){if(!this._obj){if(n)try{this.markForCheckOnValueUpdate=!1,this._subscribe(n)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,i=>this._updateLatestValue(n,i))}_selectStrategy(n){if(_e(n))return Ct;if(Ie(n))return Et;throw ge(e,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,i){n===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}};e.\u0275fac=function(i){return new(i||e)(h(J,16))},e.\u0275pipe=N({name:"async",type:e,pure:!1,standalone:!0});let t=e;return t})();var yt="mediumDate",wt=new R(""),At=new R(""),Cn=(()=>{let e=class e{constructor(n,i,r){this.locale=n,this.defaultTimezone=i,this.defaultOptions=r}transform(n,i,r,o){if(n==null||n===""||n!==n)return null;try{let u=i??this.defaultOptions?.dateFormat??yt,f=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return ut(n,u,o||this.locale,f)}catch(u){throw ge(e,u.message)}}};e.\u0275fac=function(i){return new(i||e)(h(Me,16),h(wt,24),h(At,24))},e.\u0275pipe=N({name:"date",type:e,pure:!0,standalone:!0});let t=e;return t})();var En=(()=>{let e=class e{transform(n,i,r){if(n==null)return null;if(!this.supports(n))throw ge(e,n);return n.slice(i,r)}supports(n){return typeof n=="string"||Array.isArray(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=N({name:"slice",type:e,pure:!1,standalone:!0});let t=e;return t})();var yn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=we({type:e}),e.\u0275inj=Ee({});let t=e;return t})(),St="browser",bt="server";function vt(t){return t===St}function wn(t){return t===bt}var An=(()=>{let e=class e{};e.\u0275prov=w({token:e,providedIn:"root",factory:()=>vt(B(be))?new de(B(he),window):new le});let t=e;return t})(),de=class{constructor(e,s){this.document=e,this.window=s,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let s=_t(this.document,e);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let s=e.getBoundingClientRect(),n=s.left+this.window.pageXOffset,i=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(n-r[0],i-r[1])}};function _t(t,e){let s=t.getElementById(e)||t.getElementsByName(e)[0];if(s)return s;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let r=i.shadowRoot;if(r){let o=r.getElementById(e)||r.querySelector(`[name="${e}"]`);if(o)return o}i=n.nextNode()}}return null}var le=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},xe=class{};export{te as a,un as b,Re as c,he as d,an as e,q as f,We as g,cn as h,Ze as i,dn as j,ln as k,hn as l,fn as m,He as n,Dn as o,gn as p,pn as q,mn as r,Fn as s,Cn as t,En as u,yn as v,St as w,vt as x,wn as y,An as z,xe as A};