import{a as G}from"./chunk-UTN4MJGA.js";import{j as J,u as b,v as K,w as Z}from"./chunk-5EJLWTDY.js";import{k as U,m as X,t as y}from"./chunk-UDI6KFO4.js";import{$a as S,Bb as N,Cb as w,Fa as o,Fb as W,Ga as V,Gb as R,L as B,N as O,S as D,T as z,Tb as L,Xa as C,Z as f,Za as c,ca as v,f as E,fb as s,gb as l,la as _,lb as Q,ma as x,ob as m,pb as M,qb as j,rb as $,sb as q,ta as T,tb as H,ua as k,ub as P,v as F,vb as I,wb as A,xb as p,yb as Y,zb as g}from"./chunk-5CDLLB3L.js";var u=(()=>{let n=class n{init(e){return this._parentInstance=e}getParent(){return this._parentInstance}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=z({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var te=(()=>{let n=class n{onSelect(e){e.preventDefault(),e.stopPropagation(),this._parentInstance?.onSelect(this)}constructor(e){this.selectService=e,this.label="",this._parentInstance=this.selectService.getParent()}};n.\u0275fac=function(r){return new(r||n)(V(u))},n.\u0275cmp=v({type:n,selectors:[["tmf-option"]],hostBindings:function(r,t){r&1&&m("click",function(h){return t.onSelect(h)})},inputs:{label:"label",value:"value"},standalone:!0,features:[w],decls:2,vars:1,consts:[[1,"break-words"]],template:function(r,t){r&1&&(s(0,"div",0),p(1),l()),r&2&&(o(),g(" ",t.label," "))},dependencies:[y],styles:["[_nghost-%COMP%]{position:relative;display:block;height:auto;width:100%;cursor:pointer;--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity))}[_nghost-%COMP%]:hover{--tw-text-opacity: 1;color:rgb(243 105 35 / var(--tw-text-opacity))}[_nghost-%COMP%]{padding-left:16px;padding-right:16px;padding-top:.75rem;padding-bottom:.75rem}@media (min-width: 768px){[_nghost-%COMP%]{padding-left:20px;padding-right:20px}}@media (min-width: 1024px){[_nghost-%COMP%]{padding-left:24px;padding-right:24px}}[_nghost-%COMP%]{font-size:.875rem;line-height:1.25rem}@media (min-width: 768px){[_nghost-%COMP%]{font-size:1rem;line-height:1.5rem}}[_nghost-%COMP%]{transition:all .15s ease}[_nghost-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(254 239 231 / var(--tw-bg-opacity))}"],changeDetection:0});let i=n;return i})();var ie=["*"],re=(i,n,d)=>({"select-open":i,"bg-tmf-orange-4":n,"select-disabled":d}),oe=(i,n,d)=>({"text-tmf-gray-2":i,"text-tmf-gray-3":n,"text-red-500":d}),ae=(i,n)=>({"rotate-180 text-tmf-orange-1":i,"text-tmf-gray-4":n});function se(i,n){if(i&1&&(s(0,"span",8),p(1),l()),i&2){let d=M();o(),Y(d.label)}}function le(i,n){i&1&&(s(0,"span",9),p(1,"*"),l())}function ce(i,n){if(i&1&&(s(0,"span",10),p(1),l()),i&2){let d=M();o(),g(" ",d.icon," ")}}function pe(i,n){i&1&&(s(0,"div",11),$(1),l())}var Pe=(()=>{let n=class n{get panelOpen(){return this._panelOpen}get selectedOption(){return this._selectedOption}get displayOption(){return this._displayOption}get disabled(){return this._disabled}constructor(){this.viewportRuler=f(J),this.cdr=f(L),this.selectService=f(u),this.placeholder="\u8ACB\u9078\u64C7",this.label="",this.invalid=!1,this.isRequired=!1,this.icon="",this.selectChange=new k,this.tmfBlur=new k,this.listOfContainerItemMap={},this._displayOption="",this._panelOpen=!1,this._disabled=!1,this.destory$=new E,this.onChange=e=>{},this.onTouched=()=>{},this.selectService.init(this)}ngOnInit(){this.viewportRuler.change().pipe(O(this.destory$)).subscribe(()=>{this.panelOpen&&(this.originRect=this.originElement.nativeElement.getBoundingClientRect(),this.cdr.detectChanges())})}ngAfterContentInit(){F(this.optionComponents.changes).pipe(B(!0),O(this.destory$)).subscribe(()=>{this.optionComponents.toArray().forEach(e=>{this.listOfContainerItemMap[`${e.value}`]=`${e.label}`}),this.cdr.markForCheck()})}ngOnDestroy(){this.destory$.next(),this.destory$.complete()}updateRect(){this.originRect=this.originElement.nativeElement.getBoundingClientRect()}onSelect(e){this._selectedOption=e,this.value=e.value,this.onChange(e.value),this.selectChange.emit(e.value),this.closePanel(),this.cdr.markForCheck()}open(){this.disabled||(this.updateRect(),this._panelOpen=!this._panelOpen)}closePanel(){this._panelOpen&&(this._panelOpen=!1,this.tmfBlur.emit(),this.cdr.markForCheck())}writeValue(e){this.value!==e&&(this.value=e,this.cdr.markForCheck())}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._disabled=e,e&&(this._panelOpen=!1),this.cdr.markForCheck()}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=v({type:n,selectors:[["tmf-select"]],contentQueries:function(r,t,a){if(r&1&&q(a,te,5),r&2){let h;P(h=I())&&(t.optionComponents=h)}},viewQuery:function(r,t){if(r&1&&H(b,7,T),r&2){let a;P(a=I())&&(t.originElement=a.first)}},hostVars:4,hostBindings:function(r,t){r&2&&S("inline-block",!0)("w-full",!0)},inputs:{placeholder:"placeholder",label:"label",invalid:"invalid",isRequired:"isRequired",icon:"icon"},outputs:{selectChange:"selectChange",tmfBlur:"tmfBlur"},standalone:!0,features:[N([{provide:G,useExisting:D(()=>n),multi:!0},u]),w],ngContentSelectors:ie,decls:10,vars:23,consts:[["origin","cdkOverlayOrigin"],["class","select-label",4,"ngIf"],["class","text-red-500",4,"ngIf"],["cdkOverlayOrigin","",1,"select",3,"click","ngClass"],["class","material-symbols-outlined select-icon",4,"ngIf"],[1,"select-text",3,"ngClass"],[1,"material-symbols-outlined","select-chevron",3,"ngClass"],["cdkConnectedOverlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"overlayOutsideClick","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayWidth"],[1,"select-label"],[1,"text-red-500"],[1,"material-symbols-outlined","select-icon"],[1,"option-container"]],template:function(r,t){if(r&1){let a=Q();j(),C(0,se,2,1,"span",1)(1,le,2,0,"span",2),s(2,"div",3,0),m("click",function(){return _(a),x(t.open())}),C(4,ce,2,1,"span",4),s(5,"span",5),p(6),l(),s(7,"span",6),p(8," keyboard_arrow_down "),l()(),C(9,pe,2,0,"ng-template",7),m("overlayOutsideClick",function(){return _(a),x(t.closePanel())})}if(r&2){let a=A(3);c("ngIf",t.label),o(),c("ngIf",t.isRequired),o(),S("fc-invalid",t.invalid),c("ngClass",R(12,re,t.panelOpen,t.panelOpen&&t.value,t.disabled)),o(2),c("ngIf",t.icon),o(),c("ngClass",R(16,oe,t.value&&!t.disabled,!t.value||t.disabled,t.invalid)),o(),g(" ",t.value?t.listOfContainerItemMap[t.value]:t.placeholder," "),o(),c("ngClass",W(20,ae,t.panelOpen,t.disabled)),o(2),c("cdkConnectedOverlayOrigin",a)("cdkConnectedOverlayOpen",t.panelOpen)("cdkConnectedOverlayWidth",t.originRect==null?null:t.originRect.width)}},dependencies:[y,U,X,Z,K,b],styles:["[_nghost-%COMP%]{display:block}.select[_ngcontent-%COMP%]{display:flex;height:36px;cursor:pointer;align-items:center;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(159 159 159 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:.75rem;padding-right:.75rem}@media (min-width: 768px){.select[_ngcontent-%COMP%]{height:38px}}@media (min-width: 1024px){.select[_ngcontent-%COMP%]{height:40px}}.select-label[_ngcontent-%COMP%]{margin-bottom:.25rem;margin-left:.25rem;display:inline-block;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity))}@media (min-width: 768px){.select-label[_ngcontent-%COMP%]{font-size:15px;line-height:1.5rem}}.select-icon[_ngcontent-%COMP%]{margin-right:3px;flex-shrink:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));font-size:22px;--tw-text-opacity: 1;color:rgb(243 105 35 / var(--tw-text-opacity));transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@media (min-width: 768px){.select-icon[_ngcontent-%COMP%]{font-size:24px}}.select-chevron[_ngcontent-%COMP%]{flex-shrink:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));font-size:18px;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@media (min-width: 768px){.select-chevron[_ngcontent-%COMP%]{font-size:20px}}.select-open[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(243 105 35 / var(--tw-border-opacity))}.select-disabled[_ngcontent-%COMP%]{cursor:not-allowed!important;--tw-bg-opacity: 1;background-color:rgb(212 212 212 / var(--tw-bg-opacity))}.select-invalid[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.select-text[_ngcontent-%COMP%]{flex-grow:1;overflow:hidden;text-overflow:ellipsis;font-size:14px;line-height:1.25rem}@media (min-width: 768px){.select-text[_ngcontent-%COMP%]{font-size:16px;line-height:1.5rem}}.option-container[_ngcontent-%COMP%]{margin-top:10px;max-height:300px;width:100%;overflow-y:auto;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:.75rem;padding-bottom:.75rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);width:calc(100% - 40px)}"],changeDetection:0});let i=n;return i})();export{te as a,Pe as b};
