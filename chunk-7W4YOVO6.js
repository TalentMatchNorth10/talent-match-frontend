import{a as S,b as V,d as w,e as x,g as D,h as F,l as I}from"./chunk-DYHPRYKH.js";import{k as M}from"./chunk-YAJBSLJZ.js";import{Da as d,Fa as h,Ha as m,L as a,La as l,Ma as s,Na as g,Ra as f,S as c,Ta as C,V as p,Va as v,Xa as y,Ya as b,ha as u,sa as i}from"./chunk-IGM6XWGY.js";function O(n,t){if(n&1&&(l(0,"p",2),C(1),s()),n&2){let E=f();i(),v(" ",E.errorMessage," ")}}var k=(()=>{let t=class t{constructor(){this.inj=c(u),this.control=new D(null),this.onChange=()=>{},this.onTouched=()=>{},this.placeholder="\u8ACB\u8F38\u5165",this.type="text",this.errorMessage=""}ngOnInit(){this.ngControl=this.inj.get(w)}ngAfterViewInit(){this.control.valueChanges.subscribe(e=>{this.noticeValueChange(e)})}noticeValueChange(e){this.onChange&&e!==this.ngControl.control?.value&&this.onChange(e)}writeValue(e){e!==this.control.value&&this.control.setValue(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=p({type:t,selectors:[["tmf-input"]],inputs:{placeholder:"placeholder",type:"type",errorMessage:"errorMessage"},standalone:!0,features:[y([{provide:S,useExisting:a(()=>t),multi:!0}]),b],decls:3,vars:4,consts:[[1,"relative","pb-6"],[1,"border-b-2","outline-none","py-3","focus:border-tmf-orange-1","duration-75","w-full",3,"formControl","type","placeholder"],[1,"text-red-500","absolute","bottom-0","text-[14px]"]],template:function(r,o){r&1&&(l(0,"div",0),g(1,"input",1),d(2,O,2,1,"p",2),s()),r&2&&(i(),h("formControl",o.control)("type",o.type)("placeholder",o.placeholder),i(),m(2,o.control.touched&&(o.ngControl.control!=null&&o.ngControl.control.errors)&&o.errorMessage?2:-1))},dependencies:[M,I,V,x,F],styles:["[_nghost-%COMP%]{display:block}"]});let n=t;return n})();export{k as a};
