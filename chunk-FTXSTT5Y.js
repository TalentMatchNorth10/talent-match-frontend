import{a as W,b as G,d as X,e as H,g as K,j as J,q as Z}from"./chunk-7HIXMG7Y.js";import{i as ee,t as x,u as te,v as ne}from"./chunk-N3AA6LB4.js";import{k as Y,u as L}from"./chunk-GOW2LTFQ.js";import{$a as d,Ab as A,Bb as w,Gb as N,Ha as a,Hb as U,Jb as g,Nb as Q,O as k,T as S,Za as c,_ as b,cb as m,da as I,db as R,f as T,fb as z,gb as F,hb as p,ib as l,jb as B,la as M,ma as C,na as _,nb as v,qb as h,rb as s,sa as E,ua as V,va as P,vb as D,wb as $,xb as j,yb as q,zb as u}from"./chunk-EN3TI6TH.js";var f=function(e){return e.Outline="outline",e.Underline="underline",e.Search="search",e.SearchByType="searchByType",e}(f||{}),O=function(e){return e.Default="default",e.Large="large",e}(O||{}),oe=function(e){return e.KEYWORD="1",e.CATEGORY="2",e}(oe||{});var re=e=>({"pb-6":e}),ae=(e,o,i,n,r,t,y,ie)=>({"cursor-not-allowed !bg-tmf-gray-5":e,"border-b placeholder:text-tmf-gray-3":o,"placeholder:text-tmf-gray-3":i,"!placeholder:text-tmf-gray-5 !border-tmf-gray-5":n,"rounded-lg border":r,"!pr-[38px]":t,"h-[44px] md:h-[48px] lg:h-[52px]":y,"h-[36px] md:h-[38px] lg:h-[40px]":ie}),pe=e=>({"cursor-not-allowed bg-tmf-gray-5":e}),le=e=>({"rotate-180 text-tmf-orange-1":e}),se=e=>({"text-tmf-gray-3":e}),ce=e=>({"!cursor-not-allowed !text-tmf-gray-4":e});function de(e,o){e&1&&(p(0,"span",7),u(1,"*"),l())}function ue(e,o){if(e&1&&(p(0,"span",6),u(1),l(),c(2,de,2,0,"span",7)),e&2){let i=s();a(),A(i.label),a(),m(2,i.isRequired?2:-1)}}function me(e,o){if(e&1&&(p(0,"p",9),u(1),l()),e&2){let i=s(2);d("ngClass",g(2,se,i.disabled)),a(),w(" ",i.selectedOption.label," ")}}function he(e,o){if(e&1){let i=v();p(0,"li",14),h("click",function(){let r=C(i).$implicit,t=s(3);return t.selectedOption=r,_(t.closePanel())}),u(1),l()}if(e&2){let i=o.$implicit;a(),w(" ",i.label," ")}}function ge(e,o){if(e&1&&(p(0,"ul",12),z(1,he,2,1,"li",13,R),l()),e&2){let i=s(2);a(),F(i.options)}}function ye(e,o){if(e&1){let i=v();p(0,"div",8,0),h("click",function(){C(i);let r=s();return _(r.open())}),c(2,me,2,4,"p",9),p(3,"span",10),u(4," keyboard_arrow_down "),l()(),c(5,ge,3,0,"ng-template",11),h("overlayOutsideClick",function(){C(i);let r=s();return _(r.closePanel())})}if(e&2){let i=q(1),n=s();a(2),m(2,n.selectedOption.label?2:-1),a(),d("ngClass",g(7,le,n.panelOpen)),a(2),d("cdkConnectedOverlayOrigin",i)("cdkConnectedOverlayOpen",n.panelOpen)("cdkConnectedOverlayMinWidth","100px")("cdkConnectedOverlayOffsetY",20)("cdkConnectedOverlayOffsetX",-14)}}function Ce(e,o){if(e&1){let i=v();p(0,"span",15),h("click",function(){C(i);let r=s();return _(r.search())}),u(1," search "),l()}if(e&2){let i=s();d("ngClass",g(1,ce,i.disabled))}}function _e(e,o){if(e&1&&(p(0,"p",5),u(1),l()),e&2){let i=s();a(),w(" ",i.errorMessage," ")}}var ze=(()=>{let o=class o{constructor(){this.inj=b(E),this.viewportRuler=b(ee),this.control=new K(null),this.panelOpen=!1,this.destory$=new T,this._disabled=!1,this.onChange=()=>{},this.onTouched=()=>{},this.placeholder="\u8ACB\u8F38\u5165",this.inputType=f.Underline,this.inputSize=O.Default,this.type="text",this.isRequired=!1,this.label="",this.errorMessage="",this.clickSearch=new P,this.InputType=f,this.InputSize=O}get disabled(){return this._disabled}ngOnChanges(n){n.options&&this.options&&this.options.length>0&&(this.selectedOption=this.options[0])}ngOnInit(){this.ngControl=this.inj.get(X),this.viewportRuler.change().pipe(k(this.destory$)).subscribe(()=>{this.panelOpen&&this.updateRect()})}ngAfterViewInit(){this.control.valueChanges.subscribe(n=>{this.noticeValueChange(n)})}ngOnDestroy(){this.destory$.next(),this.destory$.complete()}search(){this.clickSearch.emit({type:this.inputType===f.SearchByType?this.selectedOption?.value:null,value:this.control.value??""})}open(){this.updateRect(),this.panelOpen=!this.panelOpen}closePanel(){this.panelOpen&&(this.panelOpen=!1)}updateRect(){this.originRect=this.originElement.nativeElement.getBoundingClientRect()}noticeValueChange(n){this.onChange&&n!==this.ngControl.control?.value&&this.onChange(n)}writeValue(n){n!==this.control.value&&this.control.setValue(n)}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this._disabled=n,n&&(this.panelOpen=!1)}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=I({type:o,selectors:[["tmf-input"]],viewQuery:function(r,t){if(r&1&&D(x,5,V),r&2){let y;$(y=j())&&(t.originElement=y.first)}},inputs:{placeholder:"placeholder",inputType:"inputType",inputSize:"inputSize",type:"type",isRequired:"isRequired",label:"label",errorMessage:"errorMessage",options:"options"},outputs:{clickSearch:"clickSearch"},standalone:!0,features:[N([{provide:W,useExisting:S(()=>o),multi:!0}]),M,U],decls:7,vars:23,consts:[["origin","cdkOverlayOrigin"],[1,"relative",3,"ngClass"],[1,"input-container",3,"keyup.enter","ngClass"],[1,"input",3,"ngClass","formControl","type","placeholder"],[1,"material-symbols-outlined","input-search-icon",3,"ngClass"],[1,"error-message"],[1,"input-label"],[1,"text-red-500"],["id","searchType","cdkOverlayOrigin","",1,"mr-4","flex","items-center",3,"click"],[1,"mr-1","whitespace-nowrap",3,"ngClass"],[1,"material-symbols-outlined","input-selectType-icon",3,"ngClass"],["cdkConnectedOverlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"overlayOutsideClick","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayMinWidth","cdkConnectedOverlayOffsetY","cdkConnectedOverlayOffsetX"],[1,"input-selectType-list"],[1,"input-selectType-item"],[1,"input-selectType-item",3,"click"],[1,"material-symbols-outlined","input-search-icon",3,"click","ngClass"]],template:function(r,t){r&1&&(c(0,ue,3,2),p(1,"div",1)(2,"div",2),h("keyup.enter",function(){return t.search()}),c(3,ye,6,9),B(4,"input",3),c(5,Ce,2,3,"span",4),l(),c(6,_e,2,1,"p",5),l()),r&2&&(m(0,t.label?0:-1),a(),d("ngClass",g(10,re,t.inputType!==t.InputType.Search)),a(),d("ngClass",Q(12,ae,t.disabled,t.inputType===t.InputType.Underline,t.inputType===t.InputType.Outline,t.inputType===t.InputType.Search,t.inputType===t.InputType.Outline||t.inputType===t.InputType.Search||t.inputType===t.InputType.SearchByType,t.inputType===t.InputType.Search||t.inputType===t.InputType.SearchByType,t.inputSize===t.InputSize.Large,t.inputSize===t.InputSize.Default)),a(),m(3,t.inputType===t.InputType.SearchByType&&t.selectedOption?3:-1),a(),d("ngClass",g(21,pe,t.disabled))("formControl",t.control)("type",t.type)("placeholder",t.placeholder),a(),m(5,t.inputType===t.InputType.Search||t.inputType===t.InputType.SearchByType?5:-1),a(),m(6,t.control.touched&&(t.ngControl.control!=null&&t.ngControl.control.errors)&&t.errorMessage?6:-1))},dependencies:[L,Y,Z,G,H,J,ne,te,x],styles:["[_nghost-%COMP%]{display:block}.input-container[_ngcontent-%COMP%]{position:relative;display:flex;width:100%;align-items:center;--tw-border-opacity: 1;border-color:rgb(159 159 159 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:.75rem;padding-right:.75rem;transition-duration:75ms}.input-container[_ngcontent-%COMP%]:focus-within{--tw-border-opacity: 1;border-color:rgb(243 105 35 / var(--tw-border-opacity))}.input[_ngcontent-%COMP%]{flex-grow:1;overflow:hidden;text-overflow:ellipsis;font-size:14px;line-height:1.25rem;outline:2px solid transparent;outline-offset:2px}@media (min-width: 768px){.input[_ngcontent-%COMP%]{font-size:16px;line-height:1.5rem}}.input-selectType-icon[_ngcontent-%COMP%]{font-size:20px;--tw-text-opacity: 1;color:rgb(159 159 159 / var(--tw-text-opacity));transition-duration:.1s}@media (min-width: 768px){.input-selectType-icon[_ngcontent-%COMP%]{font-size:22px}}.input-selectType-list[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-top:.75rem;padding-bottom:.75rem;--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.input-selectType-item[_ngcontent-%COMP%]{padding:.75rem 1.5rem;--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity))}.input-selectType-item[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(254 239 231 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(243 105 35 / var(--tw-text-opacity))}.input-label[_ngcontent-%COMP%]{margin-bottom:.25rem;margin-left:.25rem;display:inline-block;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity))}@media (min-width: 768px){.input-label[_ngcontent-%COMP%]{font-size:15px;line-height:1.5rem}}.input-search-icon[_ngcontent-%COMP%]{position:absolute;right:0;top:.5rem;margin-right:.75rem;cursor:pointer;font-size:22px;--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity))}@media (min-width: 768px){.input-search-icon[_ngcontent-%COMP%]{top:6px;font-size:24px}}.error-message[_ngcontent-%COMP%]{position:absolute;bottom:0;font-size:14px;--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}"]});let e=o;return e})();export{f as a,O as b,oe as c,ze as d};
