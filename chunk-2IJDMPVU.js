import{a as A}from"./chunk-GOFVRWUW.js";import"./chunk-A36UBSVA.js";import"./chunk-GFMMYVLQ.js";import{e as P,k as V,p as M,r as T}from"./chunk-5MOKPG3X.js";import{a as D}from"./chunk-OVB2NPSI.js";import"./chunk-N3OWITBZ.js";import"./chunk-HJ4SDTSQ.js";import{v as F}from"./chunk-CMTOSVCB.js";import{$ as _,Fb as g,Ma as p,Ob as E,Pb as w,Ya as x,cb as b,ea as C,eb as h,ib as y,kb as S,lb as k,mb as v,nb as c,oa as d,ob as s,pa as m,tb as f,wb as u,xb as l}from"./chunk-M2XE62KH.js";import"./chunk-CWTPBX7D.js";var $=()=>[];function B(r,i){if(r&1){let o=f();c(0,"div",2)(1,"button",4),u("click",function(){d(o);let e=l();return m(e.updatePreference())}),g(2," \u5132\u5B58 "),s(),c(3,"button",5),u("click",function(){d(o);let e=l();return m(e.cancelEditMode())}),g(4," \u53D6\u6D88 "),s()()}}function O(r,i){if(r&1){let o=f();c(0,"button",6),u("click",function(){d(o);let e=l();return m(e.openEditMode())}),c(1,"span",7),g(2," edit_square "),s(),g(3," \u7DE8\u8F2F "),s()}}function j(r,i){if(r&1){let o=f();c(0,"div",3)(1,"tmf-checkbox",8),u("checkedChange",function(e){let n=d(o).$index,a=l();return m(a.handleMainCategoryChange(e,n))}),s(),c(2,"div",9)(3,"tmf-checkbox",10),u("checkedChange",function(e){let n=d(o).$index,a=l();return m(a.handleSubCategoryChange(e,n))}),s()()()}if(r&2){let o,t,e=i.$implicit,n=i.$index,a=l();p(),h("label",(o=e.main_category)!==null&&o!==void 0?o:"")("direct","horizontal")("formControl",a.tagsFormArray.at(n).controls.main_category),p(2),h("formControl",a.tagsFormArray.at(n).controls.sub_category)("single",!1)("options",a.getSubTagOptions((t=e.sub_category)!==null&&t!==void 0?t:w(6,$)))}}var K=(()=>{let i=class i{constructor(){this.commonService=_(D),this.fb=_(M),this.tags=[],this.tagsFormArray=this.fb.array([]),this.isEditMode=x(!1)}ngOnInit(){this.commonService.apiCommonTagGet().subscribe(t=>{this.tags=t.data,this.tags.forEach(e=>{this.tagsFormArray.push(this.fb.group({main_category:this.fb.control(!1),sub_category:this.fb.control([])}))}),this.cancelEditMode()})}openEditMode(){this.isEditMode.set(!0),this.tagsFormArray.enable()}cancelEditMode(){this.isEditMode.set(!1),this.tagsFormArray.disable()}updatePreference(){}getSubTagOptions(t){return t.map(e=>({label:e,value:e}))}handleMainCategoryChange(t,e){let n=this.tagsFormArray.controls[e].get("sub_category");t?n?.setValue(this.tags[e].sub_category.map(a=>a)):n?.setValue([])}handleSubCategoryChange(t,e){let n=this.tagsFormArray.controls[e].get("main_category");t.length===this.tags[e].sub_category?.length?n?.setValue(!0):n?.setValue(!1)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=C({type:i,selectors:[["app-student-preference-page"]],standalone:!0,features:[E],decls:7,vars:1,consts:[[1,"mb-5","flex","w-full","justify-between"],[1,"text-[30px]","font-bold","leading-9"],[1,"flex","gap-2"],[1,"mb-5","flex","flex-col","items-start","gap-3"],[1,"rounded-md","bg-tmf-orange-1","px-5","py-2","text-white",3,"click"],[1,"rounded-md","bg-tmf-gray-3","px-5","py-2","text-white",3,"click"],[1,"flex","items-center","gap-2","rounded-md","bg-tmf-orange-1","px-3","py-2","text-white",3,"click"],[1,"material-symbols-outlined"],[3,"checkedChange","label","direct","formControl"],[1,"rounded-lg","bg-tmf-gray-6","p-3"],[3,"checkedChange","formControl","single","options"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"h1",1),g(2,"\u559C\u597D\u985E\u5225"),s(),b(3,B,5,0,"div",2)(4,O,4,0),s(),k(5,j,4,7,"div",3,S)),e&2&&(p(3),y(3,n.isEditMode()?3:4),p(2),v(n.tags))},dependencies:[F,T,P,V,A]});let r=i;return r})();export{K as default};