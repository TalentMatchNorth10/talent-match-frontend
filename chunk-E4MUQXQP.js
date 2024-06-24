import{a as G}from"./chunk-7HIXMG7Y.js";import{i as J,t as b,u as K,v as Z}from"./chunk-N3AA6LB4.js";import{k as U,m as X,u as O}from"./chunk-GOW2LTFQ.js";import{$a as p,Ab as E,Bb as u,Gb as N,Ha as r,Hb as y,Ia as Q,Kb as W,Lb as R,M as D,O as _,T as z,U as T,Za as m,_ as v,_b as L,bb as M,da as C,f as F,hb as a,ib as s,ma as x,na as k,nb as V,qb as g,rb as w,sb as $,tb as q,ua as j,ub as H,va as S,vb as A,w as B,wb as P,xb as I,yb as Y,zb as d}from"./chunk-EN3TI6TH.js";var f=(()=>{let i=class i{init(t){return this._parentInstance=t}getParent(){return this._parentInstance}};i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();var te=(()=>{let i=class i{onSelect(t){t.preventDefault(),t.stopPropagation(),this._parentInstance?.onSelect(this)}constructor(t){this.selectService=t,this.label="",this._parentInstance=this.selectService.getParent()}};i.\u0275fac=function(o){return new(o||i)(Q(f))},i.\u0275cmp=C({type:i,selectors:[["tmf-option"]],hostBindings:function(o,e){o&1&&g("click",function(h){return e.onSelect(h)})},inputs:{label:"label",value:"value"},standalone:!0,features:[y],decls:2,vars:1,consts:[[1,"break-words"]],template:function(o,e){o&1&&(a(0,"div",0),d(1),s()),o&2&&(r(),u(" ",e.label," "))},dependencies:[O],styles:["[_nghost-%COMP%]{position:relative;display:block;height:auto;width:100%;cursor:pointer;--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity))}[_nghost-%COMP%]:hover{--tw-text-opacity: 1;color:rgb(243 105 35 / var(--tw-text-opacity))}[_nghost-%COMP%]{padding-left:16px;padding-right:16px;padding-top:.75rem;padding-bottom:.75rem}@media (min-width: 768px){[_nghost-%COMP%]{padding-left:20px;padding-right:20px}}@media (min-width: 1024px){[_nghost-%COMP%]{padding-left:24px;padding-right:24px}}[_nghost-%COMP%]{font-size:.875rem;line-height:1.25rem}@media (min-width: 768px){[_nghost-%COMP%]{font-size:1rem;line-height:1.5rem}}[_nghost-%COMP%]{transition:all .15s ease}[_nghost-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(254 239 231 / var(--tw-bg-opacity))}"],changeDetection:0});let n=i;return n})();var ne=["*"],oe=(n,i,c)=>({"select-open":n,"bg-tmf-orange-4":i,"select-disabled":c}),re=(n,i,c)=>({"text-tmf-gray-2":n,"text-tmf-gray-3":i,"text-red-500":c}),ae=(n,i)=>({"rotate-180 text-tmf-orange-1":n,"text-tmf-gray-4":i});function se(n,i){if(n&1&&(a(0,"span",10),d(1),s()),n&2){let c=w();r(),E(c.label)}}function le(n,i){n&1&&(a(0,"span",11),d(1,"*"),s())}function ce(n,i){if(n&1&&(a(0,"span",12),d(1),s()),n&2){let c=w();r(),E(c.info)}}function pe(n,i){if(n&1&&(a(0,"span",13),d(1),s()),n&2){let c=w();r(),u(" ",c.icon," ")}}function de(n,i){n&1&&(a(0,"div",14),q(1),s())}var Ie=(()=>{let i=class i{get panelOpen(){return this._panelOpen}get selectedOptions(){return this._selectedOptions}get displayOptions(){return this.multiSelect?this._selectedOptions.map(t=>this.listOfContainerItemMap[t.value]).join(", "):this.listOfContainerItemMap[this.value]}get disabled(){return this._disabled}constructor(){this.viewportRuler=v(J),this.cdr=v(L),this.selectService=v(f),this.placeholder="\u8ACB\u9078\u64C7",this.label="",this.info="",this.invalid=!1,this.isRequired=!1,this.icon="",this.multiSelect=!1,this.selectChange=new S,this.tmfBlur=new S,this.listOfContainerItemMap={},this._selectedOptions=[],this._panelOpen=!1,this._disabled=!1,this.destory$=new F,this.onChange=t=>{},this.onTouched=()=>{},this.selectService.init(this)}ngOnInit(){this.viewportRuler.change().pipe(_(this.destory$)).subscribe(()=>{this.panelOpen&&(this.originRect=this.originElement.nativeElement.getBoundingClientRect(),this.cdr.detectChanges())})}ngAfterContentInit(){B(this.optionComponents.changes).pipe(D(!0),_(this.destory$)).subscribe(()=>{this.optionComponents.toArray().forEach(t=>{this.listOfContainerItemMap[`${t.value}`]=`${t.label}`}),this.cdr.markForCheck()})}ngOnDestroy(){this.destory$.next(),this.destory$.complete()}updateRect(){this.originRect=this.originElement.nativeElement.getBoundingClientRect()}onSelect(t){if(this.multiSelect){let o=this._selectedOptions.indexOf(t);o===-1?this._selectedOptions.push(t):this._selectedOptions.splice(o,1),this.value=this._selectedOptions.map(e=>e.value)}else this._selectedOptions=[t],this.value=t.value,this.closePanel();this.onChange(this.value),this.selectChange.emit(this.value),this.cdr.markForCheck()}open(){this.disabled||(this.updateRect(),this._panelOpen=!this._panelOpen)}closePanel(){this._panelOpen&&(this._panelOpen=!1,this.tmfBlur.emit(),this.cdr.markForCheck())}writeValue(t){this.value!==t&&this.optionComponents&&(this.value=t,this.multiSelect?this._selectedOptions=this.optionComponents.filter(o=>t.includes(o.value)):this._selectedOptions=this.optionComponents.filter(o=>o.value===t),this.cdr.markForCheck())}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._disabled=t,t&&(this._panelOpen=!1),this.cdr.markForCheck()}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=C({type:i,selectors:[["tmf-select"]],contentQueries:function(o,e,l){if(o&1&&H(l,te,5),o&2){let h;P(h=I())&&(e.optionComponents=h)}},viewQuery:function(o,e){if(o&1&&A(b,7,j),o&2){let l;P(l=I())&&(e.originElement=l.first)}},hostVars:4,hostBindings:function(o,e){o&2&&M("inline-block",!0)("w-full",!0)},inputs:{placeholder:"placeholder",label:"label",info:"info",invalid:"invalid",isRequired:"isRequired",icon:"icon",multiSelect:"multiSelect"},outputs:{selectChange:"selectChange",tmfBlur:"tmfBlur"},standalone:!0,features:[N([{provide:G,useExisting:z(()=>i),multi:!0},f]),y],ngContentSelectors:ne,decls:13,vars:24,consts:[["origin","cdkOverlayOrigin"],[1,"flex","flex-col"],["class","select-label",4,"ngIf"],["class","text-red-500",4,"ngIf"],["class","mb-2 ml-2 text-gray-500 text-sm",4,"ngIf"],["cdkOverlayOrigin","",1,"select",3,"click","ngClass"],["class","material-symbols-outlined select-icon",4,"ngIf"],[1,"select-text",3,"ngClass"],[1,"material-symbols-outlined","select-chevron",3,"ngClass"],["cdkConnectedOverlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"overlayOutsideClick","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayWidth"],[1,"select-label"],[1,"text-red-500"],[1,"mb-2","ml-2","text-gray-500","text-sm"],[1,"material-symbols-outlined","select-icon"],[1,"option-container"]],template:function(o,e){if(o&1){let l=V();$(),a(0,"span",1)(1,"span"),m(2,se,2,1,"span",2)(3,le,2,0,"span",3),s(),m(4,ce,2,1,"span",4),s(),a(5,"div",5,0),g("click",function(){return x(l),k(e.open())}),m(7,pe,2,1,"span",6),a(8,"span",7),d(9),s(),a(10,"span",8),d(11," keyboard_arrow_down "),s()(),m(12,de,2,0,"ng-template",9),g("overlayOutsideClick",function(){return x(l),k(e.closePanel())})}if(o&2){let l=Y(6);r(2),p("ngIf",e.label),r(),p("ngIf",e.isRequired),r(),p("ngIf",e.info),r(),M("fc-invalid",e.invalid),p("ngClass",R(13,oe,e.panelOpen,e.panelOpen&&(e.multiSelect?e.value&&e.value.length>0:e.value),e.disabled)),r(2),p("ngIf",e.icon),r(),p("ngClass",R(17,re,(e.multiSelect?e.value&&e.value.length>0:e.value)&&!e.disabled,(e.multiSelect?!(e.value&&e.value.length>0):!e.value)||e.disabled,e.invalid)),r(),u(" ",e.multiSelect?e.value&&e.value.length>0?e.displayOptions:e.placeholder:e.listOfContainerItemMap[e.value]?e.displayOptions:e.placeholder," "),r(),p("ngClass",W(21,ae,e.panelOpen,e.disabled)),r(2),p("cdkConnectedOverlayOrigin",l)("cdkConnectedOverlayOpen",e.panelOpen)("cdkConnectedOverlayWidth",e.originRect==null?null:e.originRect.width)}},dependencies:[O,U,X,Z,K,b],styles:["[_nghost-%COMP%]{display:block}.select[_ngcontent-%COMP%]{display:flex;height:36px;cursor:pointer;align-items:center;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(159 159 159 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:.75rem;padding-right:.75rem}@media (min-width: 768px){.select[_ngcontent-%COMP%]{height:38px}}@media (min-width: 1024px){.select[_ngcontent-%COMP%]{height:40px}}.select-label[_ngcontent-%COMP%]{margin-bottom:.25rem;margin-left:.25rem;display:inline-block;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity))}@media (min-width: 768px){.select-label[_ngcontent-%COMP%]{font-size:15px;line-height:1.5rem}}.select-icon[_ngcontent-%COMP%]{margin-right:3px;flex-shrink:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));font-size:22px;--tw-text-opacity: 1;color:rgb(243 105 35 / var(--tw-text-opacity));transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@media (min-width: 768px){.select-icon[_ngcontent-%COMP%]{font-size:24px}}.select-chevron[_ngcontent-%COMP%]{flex-shrink:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));font-size:18px;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@media (min-width: 768px){.select-chevron[_ngcontent-%COMP%]{font-size:20px}}.select-open[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(243 105 35 / var(--tw-border-opacity))}.select-disabled[_ngcontent-%COMP%]{cursor:not-allowed!important;--tw-bg-opacity: 1;background-color:rgb(212 212 212 / var(--tw-bg-opacity))}.select-invalid[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(239 68 68 / var(--tw-border-opacity))}.select-text[_ngcontent-%COMP%]{flex-grow:1;overflow:hidden;text-overflow:ellipsis;font-size:14px;line-height:1.25rem}@media (min-width: 768px){.select-text[_ngcontent-%COMP%]{font-size:16px;line-height:1.5rem}}.option-container[_ngcontent-%COMP%]{margin-top:10px;max-height:300px;width:100%;overflow-y:auto;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:.75rem;padding-bottom:.75rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);width:calc(100% - 40px)}"],changeDetection:0});let n=i;return n})();export{te as a,Ie as b};
