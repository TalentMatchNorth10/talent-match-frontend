import{V as h}from"./chunk-M2XE62KH.js";var l=(()=>{let e=class e{constructor(){this._listeners=[]}notify(t,s){for(let n of this._listeners)n(t,s)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(s=>t!==s)}}ngOnDestroy(){this._listeners=[]}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{l as a};