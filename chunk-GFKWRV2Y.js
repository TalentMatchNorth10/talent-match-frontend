import{a as W}from"./chunk-6CFFCDSB.js";import{l as Y}from"./chunk-IXL4YB3E.js";import"./chunk-N764XXSV.js";import{a as K,b as U}from"./chunk-5IRIJ7EB.js";import{c as F,e as N,f as H,k as j,l as $,o as z,q as Q,s as J}from"./chunk-VOBGA6RN.js";import"./chunk-P2WCFEXO.js";import"./chunk-TCRDAKVE.js";import{a as X}from"./chunk-3E6NSQOV.js";import"./chunk-5GUPSS47.js";import{l as q,m as R,v as L}from"./chunk-3PMTIMLI.js";import{Gb as o,Hb as b,Ia as D,Na as u,Ob as V,Za as I,aa as C,db as s,fa as w,fb as d,hb as _,jb as E,kb as k,mb as O,nb as A,ob as t,pa as S,pb as e,qa as y,qb as f,ra as v,rb as M,sa as x,sb as G,ub as T,xb as g,yb as p}from"./chunk-3A66ECCW.js";import{a as B,b as P}from"./chunk-MON7YFGF.js";function ee(i,r){if(i&1&&(t(0,"span"),o(1),e()),i&2){let n=p(2);u(),b(n.baseInfo().nationality)}}function te(i,r){if(i&1&&f(0,"tmf-option",19),i&2){let n=r.$implicit;d("value",n.value)("label",n.label)}}function ie(i,r){if(i&1&&(t(0,"tmf-select",17),s(1,te,1,2,"tmf-option",18),e()),i&2){let n=p(2);d("isRequired",!0)("multiSelect",!1),u(),d("ngForOf",n.nationOptions)}}function ne(i,r){if(i&1&&(t(0,"div")(1,"span"),o(2),e(),o(3,"\xA0"),t(4,"span"),o(5),e()()),i&2){let n=r.$implicit;u(2),b(n.category),u(3),b(n.sub_categories==null?null:n.sub_categories.join(", "))}}function oe(i,r){if(i&1&&O(0,ne,6,2,"div",null,k),i&2){let n=p(2);A(n.baseInfo().categories)}}function ae(i,r){if(i&1&&f(0,"tmf-option",19),i&2){let n=r.$implicit,a=p(3);_("selected",a.fg.controls.topicControl.value==null?null:a.fg.controls.topicControl.value.includes(n.value)),d("value",n.value)("label",n.main_category)}}function re(i,r){if(i&1&&f(0,"tmf-option",19),i&2){let n=r.$implicit,a=p().$implicit;_("selected",a.controls.sub_categories.value==null?null:a.controls.sub_categories.value.includes(n)),d("value",n)("label",n)}}function le(i,r){if(i&1&&(M(0),t(1,"tmf-select",26),s(2,re,1,4,"tmf-option",21),e(),G()),i&2){let n=r.$implicit,a=p(3);u(),d("label",a.getCategoryLabel(n.controls.category_id.value))("multiSelect",!0)("maxSelected",3)("isRequired",!0)("formControl",n.controls.sub_categories),u(),d("ngForOf",a.getSubCategoryOptions(n.controls.category_id.value))}}function ce(i,r){if(i&1){let n=T();t(0,"div")(1,"tmf-select",20),g("selectChange",function(c){S(n);let l=p(2);return y(l.handleCategoryChange(c))}),s(2,ae,1,4,"tmf-option",21),e(),t(3,"div",22)(4,"span",23),o(5,"\u6559\u5B78\u5C08\u9577"),e(),t(6,"span",24),o(7,"*\u76E1\u53EF\u80FD\u9078\u64C7\u71B1\u9580\u5C08\u9577\uFF0C\u4EE5\u7372\u5F97\u66F4\u591A\u62DB\u751F\u6A5F\u6703(3\u9805/\u79D1\u76EE)\u3002"),e()(),s(8,le,3,6,"ng-container",25),e()}if(i&2){let n=p(2);u(),d("formControl",n.fg.controls.topicControl)("isRequired",!0)("multiSelect",!0)("maxSelected",3),u(),d("ngForOf",n.tagOptions),u(6),d("ngForOf",n.fg.controls.categories.controls)}}function ue(i,r){if(i&1&&f(0,"p",16),i&2){let n=p(2);d("innerHTML",n.baseInfo().introduction,D)}}function de(i,r){if(i&1){let n=T();t(0,"tmf-quill-editor",27),g("contentChangeEvent",function(c){S(n);let l=p(2);return y(l.fg.controls.introduction.setValue(c))}),e()}if(i&2){let n=p(2);d("isRequired",!0)("diabled",!n.editMode().basicInfo)("defaultContent",n.baseInfo().introduction)}}function me(i,r){if(i&1&&(t(0,"div",13)(1,"div",14)(2,"label",15),o(3,"\u570B\u7C4D"),e(),s(4,ee,2,1,"span")(5,ie,2,3),e(),t(6,"div",14)(7,"label",15),o(8,"\u6559\u5B78\u5C08\u9577"),e(),s(9,oe,2,0)(10,ce,9,6),e(),t(11,"div",14)(12,"label",15),o(13,"\u81EA\u6211\u4ECB\u7D39"),e(),s(14,ue,1,1,"p",16)(15,de,1,3),e()()),i&2){let n=p();d("formGroup",n.fg),u(4),E(4,n.editMode().basicInfo?5:4),u(5),E(9,n.editMode().basicInfo?10:9),u(5),E(14,n.editMode().basicInfo?15:14)}}function se(i,r){i&1&&(t(0,"div",14)(1,"div",28)(2,"span"),o(3,"2018 \u5E74 9 \u6708"),e(),t(4,"span"),o(5,"\u81F3"),e(),t(6,"span"),o(7,"2020\u5E746\u6708"),e()(),t(8,"div",29)(9,"div"),o(10,"\u53F0\u5317"),e(),t(11,"div"),o(12,"\u5D07\u97F3\u5275\u85DD\u97F3\u6A02\u5DE5\u4F5C\u5BA4"),e(),t(13,"div"),o(14,"\u97F3\u6A02\u6559\u80B2"),e(),t(15,"div"),o(16,"\u5409\u4ED6\u8B1B\u5E2B"),e()()())}function pe(i,r){i&1&&(t(0,"div",14)(1,"div",28)(2,"span"),o(3,"2018 \u5E74 9 \u6708"),e(),t(4,"span"),o(5,"\u81F3"),e(),t(6,"span"),o(7,"2020\u5E746\u6708"),e()(),t(8,"div",29)(9,"div"),o(10,"\u53F0\u5317"),e(),t(11,"div"),o(12,"\u570B\u7ACB\u53F0\u7063\u85DD\u8853\u5927\u5B78"),e(),t(13,"div"),o(14,"\u97F3\u6A02\u5B78\u7CFB"),e(),t(15,"div"),o(16,"\u5B78\u58EB"),e()()())}function fe(i,r){i&1&&(t(0,"div",14)(1,"label",15),o(2,"\u97F3\u6A02"),e(),t(3,"span"),o(4,"\u5409\u4ED6"),e()())}function ge(i,r){i&1&&f(0,"div",30)}var Te=(()=>{let r=class r{constructor(){this.teacherService=C(Y),this.commonService=C(X),this.tagOptions=[],this.nationOptions=[],this.baseInfo=I({nationality:"",introduction:"",categories:[]}),this.expandedSections={basicInfo:!0,workExperience:!0,education:!0,teaching:!0,video:!0},this.editMode=I({basicInfo:!1,workExperience:!1,education:!1,teaching:!1,video:!1}),this.fb=C(Q),this.fg=this.fb.group({introduction:this.fb.control(""),nationality:this.fb.control(""),topicControl:this.fb.control(["665482f25b0ab5aecf1a93b3"]),categories:this.fb.array([this.fb.group({category_id:this.fb.control("665482f25b0ab5aecf1a93b2"),sub_categories:this.fb.control(["\u7E6A\u756B","\u96D5\u5851","\u651D\u5F71"])})])})}ngOnInit(){this.getOptions(),this.teacherService.apiTeacherInfoGet().subscribe(a=>{console.log(a),this.teacherInfo=a.data,this.baseInfo.set({nationality:this.teacherInfo.nationality,introduction:this.teacherInfo.introduction,categories:this.teacherInfo.categories})})}toggleSection(a){this.expandedSections[a]=!this.expandedSections[a]}getOptions(){this.commonService.apiCommonTagGet().subscribe(a=>{this.tagOptions=a.data.map(c=>({value:c._id,main_category:c.main_category,sub_category:c.sub_category}))}),this.commonService.apiCommonOptionsNationGet().subscribe(a=>{this.nationOptions=a.data})}getCategoryLabel(a){return this.tagOptions.find(l=>l.value===a)?.main_category||""}getSubCategoryOptions(a){return this.tagOptions.find(l=>l.value===a)?.sub_category||[]}handleCategoryChange(a){let c=this.fg.controls.categories,l=new Set(a);for(let m=c.controls.length-1;m>=0;m--){let h=c.controls[m];l.has(h.controls.category_id.value)||c.removeAt(m)}a.forEach(m=>{c.controls.some(Z=>Z.controls.category_id.value===m)||c.push(this.fb.group({category_id:this.fb.control(m,[F.required]),sub_categories:this.fb.control([],[F.required])}))})}handleEditMode(a,c){a.stopPropagation(),this.editMode.set(P(B({},this.editMode()),{[c]:!this.editMode()[c]}))}};r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=w({type:r,selectors:[["app-teacher-info-page"]],standalone:!0,features:[V],decls:53,vars:15,consts:[[1,"mb-6","text-3xl","font-bold","text-tmf-gray-1"],[1,"container","mx-auto","max-w-7xl","px-6"],[1,"mb-6","rounded-lg","bg-white","p-6","shadow-md"],[1,"mb-4","flex","cursor-pointer","items-center","justify-between",3,"click"],[1,"text-lg","font-bold"],[1,"flex","items-center"],[1,"mr-2","rounded","bg-gray-100","px-4","py-2","hover:bg-gray-200",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6","transition-transform","duration-200"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M19 9l-7 7-7-7"],["class","space-y-4",3,"formGroup",4,"ngIf"],[1,"mr-2","rounded","bg-gray-100","px-4","py-2","hover:bg-gray-200"],["class","flex",4,"ngIf"],["class","flex min-h-[200px] items-center justify-center rounded border-2 border-dashed border-gray-300",4,"ngIf"],[1,"space-y-4",3,"formGroup"],[1,"flex"],[1,"min-w-[120px]","font-medium"],[1,"whitespace-pre-line","leading-relaxed",3,"innerHTML"],["label","\u570B\u5BB6","formControlName","nationality",1,"bg-white","text-gray-700",3,"isRequired","multiSelect"],[3,"value","label",4,"ngFor","ngForOf"],[3,"value","label"],["label","\u6559\u6388\u79D1\u76EE","info","*\u60A8\u6700\u591A\u53EA\u80FD\u6559\u6388\u4E09\u7A2E\u79D1\u76EE",1,"bg-white","text-gray-700",3,"selectChange","formControl","isRequired","multiSelect","maxSelected"],[3,"selected","value","label",4,"ngFor","ngForOf"],[1,"flex","flex-col"],[1,"mb-1","ml-1","inline-block","text-sm","font-medium","text-tmf-gray-2","md:text-[15px]","md:leading-6"],[1,"mb-2","ml-1","text-sm","text-gray-500"],[4,"ngFor","ngForOf"],[1,"bg-white","text-gray-700",3,"label","multiSelect","maxSelected","isRequired","formControl"],["label","\u6587\u7AE0\u5167\u6587","height","400px",1,"mb-6",3,"contentChangeEvent","isRequired","diabled","defaultContent"],[1,"min-w-[200px]","space-x-2"],[1,"space-y-2"],[1,"flex","min-h-[200px]","items-center","justify-center","rounded","border-2","border-dashed","border-gray-300"]],template:function(c,l){c&1&&(t(0,"h1",0),o(1,"\u8001\u5E2B\u500B\u4EBA\u8CC7\u8A0A"),e(),t(2,"div",1)(3,"div",2)(4,"div",3),g("click",function(){return l.toggleSection("basicInfo")}),t(5,"h2",4),o(6,"\u57FA\u672C\u8CC7\u6599"),e(),t(7,"div",5)(8,"button",6),g("click",function(h){return l.handleEditMode(h,"basicInfo")}),o(9," \u7DE8\u8F2F "),e(),v(),t(10,"svg",7),f(11,"path",8),e()()(),s(12,me,16,4,"div",9),e(),x(),t(13,"div",2)(14,"div",3),g("click",function(){return l.toggleSection("workExperience")}),t(15,"h2",4),o(16,"\u5DE5\u4F5C\u7D93\u9A57"),e(),t(17,"div",5)(18,"button",10),o(19," \u7DE8\u8F2F "),e(),v(),t(20,"svg",7),f(21,"path",8),e()()(),s(22,se,17,0,"div",11),e(),x(),t(23,"div",2)(24,"div",3),g("click",function(){return l.toggleSection("education")}),t(25,"h2",4),o(26,"\u5B78\u6B77\u80CC\u666F"),e(),t(27,"div",5)(28,"button",10),o(29," \u7DE8\u8F2F "),e(),v(),t(30,"svg",7),f(31,"path",8),e()()(),s(32,pe,17,0,"div",11),e(),x(),t(33,"div",2)(34,"div",3),g("click",function(){return l.toggleSection("teaching")}),t(35,"h2",4),o(36,"\u6559\u5B78\u8B49\u7167"),e(),t(37,"div",5)(38,"button",10),o(39," \u7DE8\u8F2F "),e(),v(),t(40,"svg",7),f(41,"path",8),e()()(),s(42,fe,5,0,"div",11),e(),x(),t(43,"div",2)(44,"div",3),g("click",function(){return l.toggleSection("video")}),t(45,"h2",4),o(46,"\u81EA\u6211\u4ECB\u7D39\u5F71\u7247"),e(),t(47,"div",5)(48,"button",10),o(49," \u7DE8\u8F2F "),e(),v(),t(50,"svg",7),f(51,"path",8),e()()(),s(52,ge,1,0,"div",12),e()()),c&2&&(u(10),_("rotate-180",!l.expandedSections.basicInfo),u(2),d("ngIf",l.expandedSections.basicInfo),u(8),_("rotate-180",!l.expandedSections.workExperience),u(2),d("ngIf",l.expandedSections.workExperience),u(8),_("rotate-180",!l.expandedSections.education),u(2),d("ngIf",l.expandedSections.education),u(8),_("rotate-180",!l.expandedSections.teaching),u(2),d("ngIf",l.expandedSections.teaching),u(8),_("rotate-180",!l.expandedSections.video),u(2),d("ngIf",l.expandedSections.video))},dependencies:[L,q,R,U,K,J,N,H,j,$,z,W],encapsulation:2});let i=r;return i})();export{Te as default};
