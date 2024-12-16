import{a as le,b as ce,c as de,d as ue}from"./chunk-G4TBXKCH.js";import{c as Q}from"./chunk-ICY3H276.js";import"./chunk-6CFFCDSB.js";import"./chunk-EFXHSPSL.js";import"./chunk-FDJYYR2J.js";import{m as T}from"./chunk-IXL4YB3E.js";import"./chunk-N764XXSV.js";import{a as q}from"./chunk-F2WJFKAP.js";import"./chunk-UXLL4RDX.js";import{a as N,b as A}from"./chunk-5IRIJ7EB.js";import{b as se,e as I,f as B,j as ae,l as V,o as $,q as G,s as j}from"./chunk-VOBGA6RN.js";import"./chunk-P2WCFEXO.js";import"./chunk-TCRDAKVE.js";import"./chunk-3E6NSQOV.js";import"./chunk-5GUPSS47.js";import{k as D,v as O}from"./chunk-3PMTIMLI.js";import{Gb as c,Hb as P,Ib as E,Jb as K,Na as l,Ob as R,Qb as re,Rb as M,S as U,T as te,Tb as oe,Za as p,aa as v,db as b,ea as z,fa as S,fb as d,jb as y,kb as k,lc as L,mb as x,na as ne,nb as C,ob as a,pa as g,pb as s,qa as _,qb as m,ub as w,xa as Y,xb as h,ya as ie,yb as u,za as J}from"./chunk-3A66ECCW.js";import"./chunk-MON7YFGF.js";var Re=e=>({"cursor-pointer":e}),Ee=(e,t)=>({"bg-tmf-purple":e,"bg-tmf-blue-2":t});function Te(e,t){if(e&1&&(a(0,"p",3),c(1),s()),e&2){let r=u();d("ngClass",M(2,Ee,r.reserve.teacher_status==="reserved"&&r.reserve.student_status==="reserved",r.reserve.teacher_status==="completed"&&r.reserve.student_status==="reserved")),l(),E(" ",r.reserve.teacher_status==="reserved"&&r.reserve.student_status==="reserved"?"\u5F85\u5B8C\u6210":"\u5F85\u78BA\u8A8D"," ")}}function Fe(e,t){e&1&&(a(0,"p",9),c(1," \u5DF2\u9810\u7D04 "),s())}var X=(()=>{let t=class t{constructor(){this.expired=!1}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=S({type:t,selectors:[["tmf-reserve-card"]],inputs:{reserve:"reserve",expired:"expired"},standalone:!0,features:[R],decls:37,vars:12,consts:[[1,"w-[280px]","rounded-md","p-6","shadow-md",3,"ngClass"],[1,"flex","items-center","justify-between","border-b","pb-2"],[1,"text","text-base","font-bold"],[1,"min-w-[74px]","rounded-xl","px-4","py-1","text-sm","text-white",3,"ngClass"],[1,"flex","flex-col","gap-4","pt-2"],[1,"flex","items-center","gap-2"],[1,"material-icons","text-2xl","leading-6","text-tmf-gray-2"],[1,"material-icons-outlined","text-2xl","leading-6","text-tmf-gray-2"],[1,"overflow-hidden","text-ellipsis","whitespace-nowrap"],[1,"min-w-[74px]","rounded-xl","bg-green-500","px-4","py-1","text-sm","text-white"]],template:function(n,o){n&1&&(a(0,"div",0)(1,"div",1)(2,"p",2),c(3),s(),b(4,Te,2,5,"p",3)(5,Fe,2,0),s(),a(6,"div",4)(7,"div",5)(8,"span",6),c(9,"person"),s(),a(10,"p"),c(11),s()(),a(12,"div",5)(13,"span",6),c(14,"library_books"),s(),a(15,"p"),c(16),s()(),a(17,"div",5)(18,"span",6),c(19,"calendar_month"),s(),a(20,"p"),c(21),s()(),a(22,"div",5)(23,"span",7),c(24,"timer"),s(),a(25,"p"),c(26),s()(),a(27,"div",5)(28,"span",7),c(29,"mail"),s(),a(30,"p",8),c(31),s()(),a(32,"div",5)(33,"span",7),c(34,"smartphone"),s(),a(35,"p",8),c(36),s()()()()),n&2&&(d("ngClass",re(10,Re,o.reserve.teacher_status==="reserved"&&o.reserve.student_status==="reserved")),l(3),E(" ",o.reserve.course_name," "),l(),y(4,o.expired?4:5),l(7),E("\u5B78\u751F\uFF1A",(o.reserve.student==null?null:o.reserve.student.nick_name)||(o.reserve.student==null?null:o.reserve.student.name),""),l(5),K("\u5802\u6B21\uFF1A",o.reserve.reserved_amount,"/",o.reserve.total,""),l(5),E("\u65E5\u671F\uFF1A",o.reserve.reserve_date,""),l(5),E("\u6642\u9593\uFF1A",o.reserve.reserve_time,""),l(5),E(" \u4FE1\u7BB1\uFF1A",o.reserve.student==null?null:o.reserve.student.email," "),l(5),E(" \u96FB\u8A71\uFF1A",o.reserve.student!=null&&o.reserve.student.contact_phone?o.reserve.student==null?null:o.reserve.student.contact_phone:"-"," "))},dependencies:[D]});let e=t;return e})();function F(e,t){let r=!t?.manualCleanup;r&&!t?.injector&&ne(F);let i=r?t?.injector?.get(Y)??v(Y):null,n;t?.requireSync?n=p({kind:0}):n=p({kind:1,value:t?.initialValue});let o=e.subscribe({next:f=>n.set({kind:1,value:f}),error:f=>{if(t?.rejectErrors)throw f;n.set({kind:2,error:f})}});return i?.onDestroy(o.unsubscribe.bind(o)),L(()=>{let f=n();switch(f.kind){case 1:return f.value;case 2:throw f.error;case 0:throw new te(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var me=(e,t)=>t._id,Me=(e,t)=>({itemsPerPage:6,totalItems:e,currentPage:t,showFirstButton:!1,showLastButton:!1});function Pe(e,t){if(e&1&&m(0,"tmf-option",4),e&2){let r=t.$implicit;d("label",r.name)("value",r._id)}}function ke(e,t){if(e&1&&m(0,"tmf-option",4),e&2){let r=t.$implicit;d("label",r.nick_name)("value",r._id)}}function Le(e,t){if(e&1){let r=w();a(0,"tmf-reserve-card",11),h("click",function(){let n=g(r).$implicit,o=u(3);return _(o.completeReserve(n))}),s()}if(e&2){let r=t.$implicit;d("reserve",r)("expired",!0)}}function De(e,t){if(e&1){let r=w();a(0,"div",7),x(1,Le,1,2,"tmf-reserve-card",8,k),s(),a(3,"div",9)(4,"tmf-pagination",10),h("pageChange",function(n){g(r);let o=u(2);return _(o.pageChange(n))}),s()()}if(e&2){let r=u(2);l(),C(r.expired_reserves()),l(3),d("config",M(1,Me,r.totalCount(),r.currentPage()))}}function Oe(e,t){if(e&1&&b(0,De,5,4),e&2){let r=u();y(0,r.totalCount()>0?0:-1)}}function Ie(e,t){e&1&&(a(0,"div",12)(1,"div",13),m(2,"div",14),s()())}var fe=(()=>{let t=class t{constructor(){this.teacherReserveService=v(T),this.fb=v(G),this.dialogService=v(Q),this.courseList=[],this.studentList=[],this.expired_reserves=p([]),this.fg=this.fb.group({course:[""],student:[""]}),this.totalCount=p(0),this.currentPage=p(1),this.courseSig=F(this.fg.controls.course.valueChanges.pipe(U(()=>this.fg.controls.student.setValue("")))),this.studentSig=F(this.fg.controls.student.valueChanges),this.filterStudentList=L(()=>{let i=this.courseSig();return this.studentList.find(o=>o.course_id===i)?.students||[]}),this.isLoading=p(!1)}ngOnInit(){this.fetchExpiredReserves()}pageChange(i){this.currentPage.set(i),this.fetchExpiredReserves()}searchReserves(){this.currentPage.set(1),this.fetchExpiredReserves()}fetchExpiredReserves(){this.isLoading.set(!0),this.teacherReserveService.apiTeacherReservesExpiredReservesGet({page:this.currentPage(),courseId:this.courseSig()==="all"?"":this.courseSig(),studentId:this.studentSig()==="all"?"":this.studentSig()}).subscribe({next:i=>{this.expired_reserves.set(i.data?.expired_reserves||[]),this.totalCount.set(i.data?.totalCount||0)},complete:()=>{this.isLoading.set(!1)}})}completeReserve(i){i.teacher_status!=="completed"&&this.dialogService.openConfirmDialog({title:"\u5B8C\u6210\u8AB2\u7A0B",content:"\u78BA\u8A8D\u5B8C\u6210\u9810\u7D04\uFF1F",confirmBtnText:"\u78BA\u8A8D",btnType:"primary"}).subscribe(o=>{o&&this.teacherReserveService.apiTeacherReservesReservesPatch({updateReserveRequestModel:{reserve_id:i._id}}).subscribe(()=>{this.fetchExpiredReserves()})})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=S({type:t,selectors:[["tmf-expired-reserve"]],inputs:{courseList:"courseList",studentList:"studentList"},standalone:!0,features:[R],decls:16,vars:6,consts:[[1,"rounded-lg","border","border-tmf-gray-2","p-4","shadow-md"],[1,"mb-4","flex","items-center","gap-4",3,"formGroup"],[1,"text-2xl","font-bold"],["formControlName","course",1,"!w-[250px]"],[3,"label","value"],["formControlName","student",1,"!w-[250px]"],[1,"box-border","rounded-md","border","border-tmf-gray-2","bg-white","px-4","py-[7px]","text-center","text-tmf-gray-2",3,"click"],[1,"mb-5","flex","flex-wrap","gap-5","min-h-[654px]"],[3,"reserve","expired"],[1,"flex","justify-center"],[1,"mx-auto",3,"pageChange","config"],[3,"click","reserve","expired"],[1,"flex","items-center","justify-center","space-x-2","h-[722px]"],[1,"relative"],[1,"spin","h-20","w-20","rounded-full","border-[10px]","border-solid","border-tmf-orange-1"]],template:function(n,o){n&1&&(a(0,"div",0)(1,"div",1)(2,"h2",2),c(3,"\u5DF2\u903E\u671F\u9810\u7D04"),s(),a(4,"tmf-select",3),m(5,"tmf-option",4),x(6,Pe,1,2,"tmf-option",4,me),s(),a(8,"tmf-select",5),m(9,"tmf-option",4),x(10,ke,1,2,"tmf-option",4,me),s(),a(12,"button",6),h("click",function(){return o.searchReserves()}),c(13," \u67E5\u8A62 "),s()(),b(14,Oe,1,1)(15,Ie,3,0),s()),n&2&&(l(),d("formGroup",o.fg),l(4),d("label","\u5168\u90E8")("value","all"),l(),C(o.courseList),l(3),d("label","\u5168\u90E8")("value","all"),l(),C(o.filterStudentList()),l(4),y(14,o.isLoading()?15:14))},dependencies:[O,j,I,B,V,$,A,N,q,X],styles:["@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;border-top-color:transparent}.afterimage[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;opacity:.5;border-top-color:transparent}"]});let e=t;return e})();var ve=(e,t)=>t._id,Be=(e,t)=>({itemsPerPage:6,totalItems:e,currentPage:t,showFirstButton:!1,showLastButton:!1});function Ve(e,t){if(e&1&&m(0,"tmf-option",4),e&2){let r=t.$implicit;d("label",r.name)("value",r._id)}}function $e(e,t){if(e&1&&m(0,"tmf-reserve-card",8),e&2){let r=t.$implicit;d("reserve",r)}}function Ge(e,t){if(e&1){let r=w();a(0,"div",7),x(1,$e,1,1,"tmf-reserve-card",8,ve),s(),a(3,"div",9)(4,"tmf-pagination",10),h("pageChange",function(n){g(r);let o=u(2);return _(o.pageChange(n))}),s()()}if(e&2){let r=u(2);l(),C(r.reserves()),l(3),d("config",M(1,Be,r.totalCount(),r.currentPage()))}}function je(e,t){if(e&1&&b(0,Ge,5,4),e&2){let r=u();y(0,r.totalCount()>0?0:-1)}}function Ne(e,t){e&1&&(a(0,"div",11)(1,"div",12),m(2,"div",13),s()())}var ge=(()=>{let t=class t{constructor(){this.teacherReserveService=v(T),this.fb=v(G),this.courseList=[],this.fg=this.fb.group({range:["twoDays"],course:[""]}),this.totalCount=p(0),this.rangeSig=F(this.fg.controls.range.valueChanges),this.courseSig=F(this.fg.controls.course.valueChanges),this.currentPage=p(1),this.isLoading=p(!1),this.reserves=p([])}ngOnInit(){this.fetchReserves()}pageChange(i){this.currentPage.set(i),this.fetchReserves()}searchReserves(){this.currentPage.set(1),this.fetchReserves()}fetchReserves(){this.isLoading.set(!0),this.teacherReserveService.apiTeacherReservesReservesGet({courseId:this.courseSig()==="all"?"":this.courseSig(),range:this.rangeSig(),page:this.currentPage()}).subscribe({next:i=>{this.reserves.set(i.data?.reserves||[]),this.totalCount.set(i.data?.totalCount||0)},complete:()=>{this.isLoading.set(!1)}})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=S({type:t,selectors:[["tmf-recent-reserve"]],inputs:{courseList:"courseList"},standalone:!0,features:[R],decls:16,vars:10,consts:[[1,"rounded-lg","border","border-tmf-gray-2","p-4","shadow-md"],[1,"mb-4","flex","items-center","gap-4",3,"formGroup"],[1,"text-2xl","font-bold"],["formControlName","range",1,"!w-[180px]"],[3,"label","value"],["formControlName","course",1,"!w-[250px]"],[1,"box-border","rounded-md","border","border-tmf-gray-2","bg-white","px-4","py-[7px]","text-center","text-tmf-gray-2",3,"click"],[1,"mb-5","flex","flex-wrap","gap-5","min-h-[654px]"],[3,"reserve"],[1,"flex","justify-center"],[1,"mx-auto",3,"pageChange","config"],[1,"flex","items-center","justify-center","space-x-2","h-[722px]"],[1,"relative"],[1,"spin","h-20","w-20","rounded-full","border-[10px]","border-solid","border-tmf-orange-1"]],template:function(n,o){n&1&&(a(0,"div",0)(1,"div",1)(2,"h2",2),c(3,"\u8FD1\u671F\u9810\u7D04"),s(),a(4,"tmf-select",3),m(5,"tmf-option",4)(6,"tmf-option",4)(7,"tmf-option",4),s(),a(8,"tmf-select",5),m(9,"tmf-option",4),x(10,Ve,1,2,"tmf-option",4,ve),s(),a(12,"button",6),h("click",function(){return o.searchReserves()}),c(13," \u67E5\u8A62 "),s()(),b(14,je,1,1)(15,Ne,3,0),s()),n&2&&(l(),d("formGroup",o.fg),l(4),d("label","\u8FD1\u5169\u5929")("value","twoDays"),l(),d("label","\u8FD1\u4E00\u9031")("value","week"),l(),d("label","\u8FD1\u4E00\u500B\u6708")("value","month"),l(2),d("label","\u5168\u90E8")("value","all"),l(),C(o.courseList),l(4),y(14,o.isLoading()?15:14))},dependencies:[O,j,I,B,V,$,A,N,q,X],styles:["@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;border-top-color:transparent}.afterimage[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;opacity:.5;border-top-color:transparent}"]});let e=t;return e})();var Ae=(e,t)=>({itemsPerPage:5,totalItems:e,currentPage:t,showFirstButton:!1,showLastButton:!1}),qe=(e,t)=>({"bg-white":e,"bg-tmf-gray-7":t});function We(e,t){if(e&1&&(a(0,"tr",4)(1,"td"),c(2),s(),a(3,"td"),c(4),s(),a(5,"td"),c(6),s(),a(7,"td"),c(8),s(),a(9,"td"),c(10),s(),a(11,"td"),c(12),s()()),e&2){let r=t.$implicit,i=t.$index;d("ngClass",M(8,qe,i%2===0,i%2!==0)),l(2),P(r.course_name),l(2),P(r.student==null?null:r.student.nick_name),l(2),K("",r.reserved_amount,"/",r.total,""),l(2),P(r.reserve_date),l(2),P(r.reserve_time),l(2),P(r.student==null?null:r.student.email)}}function He(e,t){if(e&1){let r=w();a(0,"div",0)(1,"table",1)(2,"thead",2)(3,"tr")(4,"th"),c(5,"\u8AB2\u7A0B"),s(),a(6,"th"),c(7,"\u5B78\u751F"),s(),a(8,"th"),c(9,"\u9810\u7D04\u5802\u6B21"),s(),a(10,"th"),c(11,"\u65E5\u671F"),s(),a(12,"th"),c(13,"\u6642\u9593"),s(),a(14,"th"),c(15,"\u5B78\u751F\u806F\u7D61\u8CC7\u6599"),s()()(),a(16,"tbody",3),x(17,We,13,11,"tr",4,k),s()()(),a(19,"div",5)(20,"tmf-pagination",6),h("pageChange",function(n){g(r);let o=u();return _(o.pageChange(n))}),s()()}if(e&2){let r=u();l(17),C(r.tableReserves()),l(3),d("config",M(1,Ae,r.totalCount(),r.currentPage()))}}function Ue(e,t){e&1&&m(0,"div",7)}var _e=(()=>{let t=class t{constructor(){this.isLoading=J.required(),this.totalCount=J.required(),this.tableReserves=J.required(),this.currentPage=p(1),this.changePageEvent=ie()}ngOnInit(){}pageChange(i){this.currentPage.set(i),this.changePageEvent.emit(i)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=S({type:t,selectors:[["tmf-reserve-table"]],inputs:{isLoading:[z.SignalBased,"isLoading"],totalCount:[z.SignalBased,"totalCount"],tableReserves:[z.SignalBased,"tableReserves"]},outputs:{changePageEvent:"changePageEvent"},standalone:!0,features:[R],decls:2,vars:1,consts:[[1,"mb-5","h-[286px]"],[1,"reserved_table","w-full"],[1,"border-b","border-tmf-gray-5","text-base","font-normal","text-tmf-gray-2"],[1,"text-center"],[1,"border-b","border-tmf-gray-5",3,"ngClass"],[1,"flex","justify-center"],[1,"mx-auto",3,"pageChange","config"],[1,"flex","h-[354px]","items-center","justify-center","space-x-2"]],template:function(n,o){n&1&&b(0,He,21,4)(1,Ue,1,0),n&2&&y(0,!o.isLoading()&&o.totalCount()>0?0:1)},dependencies:[D,q],styles:["table.reserved_table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{padding:.5rem .75rem}table.reserved_table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{padding:.75rem}table.reserved_table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:first-child, table.reserved_table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:first-child{padding-left:.75rem}table.reserved_table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:last-child, table.reserved_table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:last-child{padding-right:.75rem}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;border-top-color:transparent}.afterimage[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 1s linear infinite;opacity:.5;border-top-color:transparent}"]});let e=t;return e})();var he=(e,t)=>t._id;function ze(e,t){if(e&1&&m(0,"tmf-option",9),e&2){let r=t.$implicit;d("label",r.name)("value",r._id)}}function Je(e,t){if(e&1&&m(0,"tmf-option",9),e&2){let r=t.$implicit;d("label",r.nick_name)("value",r._id)}}function Ke(e,t){if(e&1){let r=w();a(0,"div",3)(1,"tmf-select",8),m(2,"tmf-option",9),x(3,ze,1,2,"tmf-option",9,he),s(),a(5,"tmf-select",10),m(6,"tmf-option",9),x(7,Je,1,2,"tmf-option",9,he),s(),a(9,"button",11),h("click",function(){g(r);let n=u();return _(n.fetchReserveTable())}),c(10," \u67E5\u8A62 "),s()()}if(e&2){let r=u();d("formGroup",r.fg),l(2),d("label","\u5168\u90E8")("value","all"),l(),C(r.courseList),l(3),d("label","\u5168\u90E8")("value","all"),l(),C(r.filterStudentList())}}function Qe(e,t){if(e&1){let r=w();a(0,"tmf-reserve-table",12),h("changePageEvent",function(n){g(r);let o=u();return _(o.changeTablePage(n))}),s()}if(e&2){let r=u();d("isLoading",r.isLoading())("totalCount",r.tableCount())("tableReserves",r.tableReserves())}}function Xe(e,t){if(e&1&&m(0,"full-calendar",13),e&2){let r=u();d("options",r.calendarOptions)}}var xe=(()=>{let t=class t{constructor(){this.teacherReserveService=v(T),this.fb=v(G),this.courseList=[],this.studentList=[],this.tableReserves=p([]),this.tableCount=p(0),this.fg=this.fb.group({course:[""],student:[""],viewMode:["table"]}),this.courseSig=F(this.fg.controls.course.valueChanges.pipe(U(()=>this.fg.controls.student.setValue("")))),this.studentSig=F(this.fg.controls.student.valueChanges),this.isLoading=p(!1),this.filterStudentList=L(()=>{let i=this.courseSig();return this.studentList.find(o=>o.course_id===i)?.students||[]})}ngOnInit(){this.fetchReserveTable(),this.calendarOptions={initialView:"dayGridMonth",plugins:[de,ue],headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek"},locale:"zh-tw",showNonCurrentDates:!0,weekends:!0,selectable:!0,allDaySlot:!1,eventContent:function(i){let[n,o]=i.event.title.split(" "),f=i.event.start?.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1}),H=i.event.end?.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!1});return{html:`
              <div style="display: flex; flex-direction: column;">
                <p class="">${f} - ${H}</p>
                <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${n}</div>
                <div>${o}</div>
              </div>
            `}},dayMaxEventRows:!0,dayMaxEvents:2,views:{timeGrid:{dayMaxEventRows:1,dayMaxEvents:1}},moreLinkContent:function(i){return"+"+i.num+" \u7B46\u9810\u7D04"},windowResize:({view:i})=>{window.innerWidth<=1024&&i.calendar.changeView("dayGridMonth"),this.handleWindowResize(i)},datesSet:({view:i})=>{let n=i.calendar.getDate().toLocaleDateString().split("/").join("-").slice(0,6);this.handleDatesSet(n)}},this.fg.controls.viewMode.valueChanges.subscribe(i=>{i==="table"&&(this.fg.controls.course.setValue(""),this.fg.controls.student.setValue(""),this.fetchReserveTable())})}fetchReserveTable(i=1){this.isLoading.set(!0),this.teacherReserveService.apiTeacherReservesListGet({studentId:this.studentSig()==="all"?"":this.studentSig(),courseId:this.courseSig()==="all"?"":this.courseSig(),page:i}).subscribe(n=>{let{reserves:o,totalCount:f}=n.data;this.tableReserves.set(o),this.tableCount.set(f),this.isLoading.set(!1)})}changeTablePage(i){this.fetchReserveTable(i)}handleDatesSet(i){this.teacherReserveService.apiTeacherReservesCalendarGet({date:i}).subscribe(n=>{let o=this.transformDataToEvents(n.data);this.calendarOptions.events=o})}getHeaderToolbar(){return window.innerWidth<=1024?{left:"dayGridMonth",center:"title",right:"prev,next"}:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek"}}handleWindowResize(i){this.calendarOptions.headerToolbar=this.getHeaderToolbar()}transformDataToEvents(i){let n=[];return i.calendar.forEach(o=>{let f=o.date;o.courses.forEach(H=>{let be=H.courseName;H.students.forEach(Z=>{let ye=Z.studentName,Se=Z.time,ee=`${f}T${Se}`,we=`${f}T${this.calculateEndTime(ee)}`;n.push({title:`${be} ${ye}`,start:ee,end:we})})})}),n}calculateEndTime(i){let n=new Date(i);return n.setHours(n.getHours()+1),n.toLocaleTimeString("en-US",{hour12:!1}).slice(0,5)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=S({type:t,selectors:[["tmf-reserved-block"]],inputs:{courseList:"courseList",studentList:"studentList"},standalone:!0,features:[R],decls:14,vars:3,consts:[[1,"pb-8"],[1,"mb-4","flex","items-center","justify-between"],[1,"text-2xl","font-bold"],[1,"flex","items-center","gap-4",3,"formGroup"],[1,"flex","items-center","gap-2",3,"formGroup"],[1,"custom-radio"],["type","radio","name","viewMode","formControlName","viewMode","value","table","checked","",1,"hidden"],["type","radio","name","viewMode","formControlName","viewMode","value","calendar",1,"hidden"],["formControlName","course",1,"!w-[250px]"],[3,"label","value"],["formControlName","student",1,"!w-[200px]"],[1,"box-border","rounded-md","border","border-tmf-gray-2","bg-white","px-4","py-[7px]","text-center","text-tmf-gray-2",3,"click"],[3,"changePageEvent","isLoading","totalCount","tableReserves"],[3,"options"]],template:function(n,o){if(n&1&&(a(0,"div",0)(1,"div",1)(2,"h2",2),c(3,"\u5DF2\u9810\u7D04\u6642\u6BB5"),s(),b(4,Ke,11,5,"div",3),a(5,"div",4)(6,"label",5),m(7,"input",6),c(8," \u5217\u8868 "),s(),a(9,"label",5),m(10,"input",7),c(11," \u65E5\u66C6 "),s()()(),b(12,Qe,1,3)(13,Xe,1,1),s()),n&2){let f;l(4),y(4,o.fg.controls.viewMode.value==="table"?4:-1),l(),d("formGroup",o.fg),l(7),y(12,(f=o.fg.controls.viewMode.value)==="table"?12:f==="calendar"?13:-1)}},dependencies:[A,N,j,se,ae,I,B,V,$,ce,le,_e],styles:[".custom-radio[_ngcontent-%COMP%]{display:flex;cursor:pointer;align-items:center;justify-content:space-between;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:7px;padding-bottom:7px}.custom-radio[_ngcontent-%COMP%]:has(input[type=radio]:checked){--tw-border-opacity: 1;border-color:rgb(255 255 255 / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgb(243 105 35 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}"]});let e=t;return e})();var Ye=(e,t)=>t.time,Ze=(e,t,r,i)=>({"bg-tmf-gray-4":e,"bg-green-300":t,"cursor-pointer":r,"cursor-not-allowed":i});function et(e,t){if(e&1){let r=w();a(0,"button",8),h("click",function(){g(r);let n=u();return _(n.toggleEditMode())}),c(1," \u7DE8\u8F2F "),s()}}function tt(e,t){if(e&1){let r=w();a(0,"div",9)(1,"button",8),h("click",function(){g(r);let n=u();return _(n.toggleEditMode())}),c(2," \u53D6\u6D88 "),s(),a(3,"button",10),h("click",function(){g(r);let n=u();return _(n.saveCanReserveTime())}),c(4," \u5132\u5B58 "),s()()}}function nt(e,t){if(e&1&&(a(0,"th",6),c(1),s()),e&2){let r=t.$implicit;l(),E(" ",r," ")}}function it(e,t){if(e&1){let r=w();a(0,"td",14)(1,"div",15),h("mousedown",function(){let n=g(r).$implicit,o=u(2);return _(o.startSelection(n.day,n))})("mouseover",function(){let n=g(r).$implicit,o=u(2);return _(o.continueSelection(n.day,n))})("mouseup",function(){let n=g(r).$implicit,o=u(2);return _(o.endSelection(n.day,n))}),a(2,"span",16),c(3),s()()()}if(e&2){let r=t.$implicit,i=u(2);l(),d("ngClass",oe(2,Ze,!r.status,r.status,i.isEditMode(),!i.isEditMode())),l(2),E(" ",r.status?"done":"do_not_disturb_on"," ")}}function rt(e,t){if(e&1&&(a(0,"tr",7)(1,"td",11)(2,"p",12),c(3),s(),a(4,"p",13),c(5),s()(),x(6,it,4,7,"td",14,k),s()),e&2){let r=t.$implicit,i=t.$index;l(3),P(i+1),l(2),E(" ",r.time," "),l(),C(r.statues)}}var Ce=(()=>{let t=class t{constructor(){this.teacherReserveService=v(T),this.dialogService=v(Q),this.isEditMode=p(!1),this.days=["\u9031\u65E5","\u9031\u4E00","\u9031\u4E8C","\u9031\u4E09","\u9031\u56DB","\u9031\u4E94","\u9031\u516D"],this.hours=[9,10,11,13,14,15,16,17,19,20],this.can_reserve_week=p({mon:[],tue:[],wed:[],thu:[],fri:[],sat:[],sun:[]}),this.can_reserve_time=[],this.isSelecting=p(!1),this.startSelect=p(null)}ngOnInit(){this.teacherReserveService.apiTeacherReservesCanReserveWeekGet().subscribe(i=>{let[n]=i.data?.can_reserve_week||[];this.can_reserve_week.set(n),this.generateReservationStatus()})}generateReservationStatus(){this.can_reserve_time=this.hours.map(i=>{let n=this.formatHour(i),o=["sun","mon","tue","wed","thu","fri","sat"].map(f=>({day:f,status:!!this.can_reserve_week()[f].includes(i)}));return{time:n,statues:o}})}formatHour(i){return`${i.toString().padStart(2,"0")}:00`}startSelection(i,n){this.isEditMode()&&(this.isSelecting.set(!0),n.status?(n.status=!1,this.startSelect.set({week:i,hour:n.time,toggleTo:!1})):(n.status=!0,this.startSelect.set({week:i,hour:n.time,toggleTo:!0})))}continueSelection(i,n){this.isSelecting()&&this.startSelect().week===i&&(n.status=this.startSelect().toggleTo)}endSelection(i,n){this.isSelecting.set(!1),this.startSelect.set(null)}toggleEditMode(){this.isEditMode.set(!this.isEditMode())}saveCanReserveTime(){let i={mon:[],tue:[],wed:[],thu:[],fri:[],sat:[],sun:[]};this.can_reserve_time.forEach(n=>{n.statues.forEach(o=>{o.status&&i[o.day].push(parseInt(n.time.split(":")[0]))})}),this.teacherReserveService.apiTeacherReservesCanReserveWeekPatch({updateCanReserveWeekRequestModel:{can_reserve_week:[i]}}).subscribe(n=>{this.dialogService.openAlertDialog({title:"\u6210\u529F",content:n.data?.message||"\u66F4\u65B0\u6210\u529F"}),this.isEditMode.set(!1)})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=S({type:t,selectors:[["tmf-can-reserve-time"]],standalone:!0,features:[R],decls:15,vars:1,consts:[[1,"mb-4","flex","items-center","justify-between","gap-4"],[1,"text-2xl","font-bold"],[1,"box-border","rounded-md","border","border-tmf-gray-2","bg-white","px-4","py-[7px]","text-center","text-tmf-gray-2"],[1,"w-full","overflow-x-auto"],[1,"w-full","select-none","border","border-tmf-orange-1"],[1,"w-[60px]","bg-tmf-orange-4","px-3","py-2"],[1,"bg-tmf-orange-4","px-3","py-2"],[1,"text-center"],[1,"box-border","rounded-md","border","border-tmf-gray-2","bg-white","px-4","py-[7px]","text-center","text-tmf-gray-2",3,"click"],[1,"flex","items-center","gap-2"],[1,"box-border","rounded-md","border","border-tmf-orange-1","bg-tmf-orange-1","px-4","py-[7px]","text-center","text-white",3,"click"],[1,"bg-tmf-orange-4","py-2.5"],[1,"text-base","font-bold"],[1,"text-sm","font-bold","text-tmf-orange-1"],[1,"p-2"],[1,"flex","items-center","justify-center","rounded-lg","py-3","xl:px-3",3,"mousedown","mouseover","mouseup","ngClass"],[1,"material-icons-outlined","text-base","leading-4","text-white","xl:text-[24px]","xl:leading-6"]],template:function(n,o){n&1&&(a(0,"div",0)(1,"h2",1),c(2,"\u53EF\u9810\u7D04\u6642\u6BB5"),s(),b(3,et,2,0,"button",2)(4,tt,5,0),s(),a(5,"div",3)(6,"table",4)(7,"thead")(8,"tr"),m(9,"th",5),x(10,nt,2,1,"th",6,k),s()(),a(12,"tbody"),x(13,rt,8,2,"tr",7,Ye),s()()()),n&2&&(l(3),y(3,o.isEditMode()?4:3),l(7),C(o.days),l(3),C(o.can_reserve_time))},dependencies:[D]});let e=t;return e})();var gn=(()=>{let t=class t{constructor(){this.teacherReserveService=v(T),this.courseList=[],this.studentList=[]}ngOnInit(){this.teacherReserveService.apiTeacherReservesCourseListGet().subscribe(i=>{this.courseList=i.data?.courseList||[],this.studentList=i.data?.studentList||[]})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=S({type:t,selectors:[["app-teacher-calendar-page"]],standalone:!0,features:[R],decls:8,vars:5,consts:[[1,"mb-6","text-3xl","font-bold","text-tmf-gray-1"],[1,"flex","flex-col","gap-3"],[3,"courseList"],[3,"courseList","studentList"],[1,"rounded-lg","border","border-tmf-gray-2","p-4","shadow-md"]],template:function(n,o){n&1&&(a(0,"h1",0),c(1,"\u8AB2\u7A0B\u9810\u7D04\u7BA1\u7406"),s(),a(2,"div",1),m(3,"tmf-recent-reserve",2)(4,"tmf-expired-reserve",3),a(5,"div",4),m(6,"tmf-reserved-block",3)(7,"tmf-can-reserve-time"),s()()),n&2&&(l(3),d("courseList",o.courseList),l(),d("courseList",o.courseList)("studentList",o.studentList),l(2),d("courseList",o.courseList)("studentList",o.studentList))},dependencies:[O,ge,fe,xe,Ce]});let e=t;return e})();export{gn as default};
