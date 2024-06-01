import{h as B,l as j}from"./chunk-BX4K4IJ6.js";import{Bb as h,Eb as Y,Gb as D,Hb as $,Jb as I,Na as c,Va as x,Xb as M,aa as P,bb as f,fb as S,hb as C,ib as y,ja as b,jb as e,ka as E,kb as t,lb as V,pb as w,qb as m,rb as p,zb as n}from"./chunk-OQO4KDA7.js";import"./chunk-2XJVAMHT.js";var O=(l,o)=>({"bg-tmf-orange-1 cursor-pointer":l,"cursor-not-allowed bg-tmf-gray-5 ":o}),R=(l,o,a,i)=>({"text-tmf-gray-3":l,"bg-tmf-orange-1 text-white":o,"text-tmf-gray-5 cursor-not-allowed":a,"hover:bg-tmf-orange-1 rounded-md hover:text-white":i}),k=l=>({"bg-tmf-orange-1 text-white":l});function z(l,o){if(l&1){let a=w();e(0,"div",33),m("click",function(){let r=b(a).$implicit,s=p();return E(s.selectDate(r))}),e(1,"div",34),n(2),t()()}if(l&2){let a,i=o.$implicit,r=p();c(),f("ngClass",I(2,R,!i.currentMonth,i.year===((a=r.currentDate())==null?null:a.year)&&i.month===((a=r.currentDate())==null?null:a.month)&&i.date===((a=r.currentDate())==null?null:a.date),i.disabled,!i.disabled)),c(),h(" ",i.date," ")}}function q(l,o){if(l&1){let a=w();e(0,"div",35),m("click",function(){let r=b(a).$implicit,s=p();return E(s.selectTime(r))}),n(1),t()}if(l&2){let a=o.$implicit,i=p();f("ngClass",D(2,k,a===i.currentTime())),c(),h(" ",a," ")}}function G(l,o){if(l&1){let a=w();e(0,"div",35),m("click",function(){let r=b(a).$implicit,s=p();return E(s.selectTime(r))}),n(1),t()}if(l&2){let a=o.$implicit,i=p();f("ngClass",D(2,k,a===i.currentTime())),c(),h(" ",a," ")}}function H(l,o){if(l&1){let a=w();e(0,"div",35),m("click",function(){let r=b(a).$implicit,s=p();return E(s.selectTime(r))}),n(1),t()}if(l&2){let a=o.$implicit,i=p();f("ngClass",D(2,k,a===i.currentTime())),c(),h(" ",a," ")}}var W=(()=>{let o=class o{constructor(){this.currentYear=x(new Date().getFullYear()),this.currentMonth=x(new Date().getMonth()),this.days=x([]),this.currentDate=x(null),this.currentTime=x(null),this.morningTimes=["09:00","10:00","11:00"],this.afternoonTimes=["12:00","13:00","14:00","15:00","16:00","17:00"],this.eveningTimes=["18:00","19:00","20:00","21:00"],this.selectedReseveTime=M(()=>{if(this.currentDate()){let i=r=>String(r).padStart(2,"0");return`${this.currentDate().year}-${i(this.currentDate().month+1)}-${i(this.currentDate().date)}T${this.currentTime()}:00`}else return""}),this.btnDisabled=M(()=>!this.currentDate()||!this.currentTime()),this.courses=[{title:"\u897F\u9EDE\u88FD\u4F5C",category:"\u5EDA\u85DD",location:"\u9AD8\u96C4",instructor:"\u738B\u592A\u90CE",remainingClasses:3,isExpanded:!1,sessions:[{date:"4/5 20:00~21:00",status:"\u5DF2\u9810\u7D04",statusClass:"text-green-500"},{date:"3/28 20:00~21:00",status:"\u5DF2\u5B8C\u8AB2",statusClass:"text-gray-500",action:"\u5B8C\u6210\u8AB2\u7A0B"},{date:"3/27 20:00~21:00",status:"\u5DF2\u5B8C\u8AB2",statusClass:"text-gray-500",action:"\u7D66\u4E88\u8A55\u50F9"},{date:"3/26 20:00~21:00",status:"\u5DF2\u5B8C\u8AB2",statusClass:"text-gray-500",action:"\u5DF2\u8A55\u50F9"}]},{title:"\u5C08\u696D\u5200\u5DE5\u6559\u5B78",category:"\u5EDA\u85DD",location:"\u9AD8\u96C4",instructor:"\u738B\u592A\u90CE",isExpanded:!1,sessions:[]}]}ngOnInit(){this.generateDays(this.currentYear(),this.currentMonth())}generateDays(i,r){let s=new Date,v=new Date(i,r,1).getDay(),A=new Date(i,r+1,0).getDate(),F=new Date(i,r,0).getDate(),_=[];for(let d=v-1;d>=0;d--){let u=r-1,g=i;u<0&&(u=11,g--);let T=new Date(g,u,F-d);_.push({year:g,month:u,date:F-d,currentMonth:!1,disabled:T<s})}for(let d=1;d<=A;d++){let u=new Date(i,r,d);_.push({year:i,month:r,date:d,currentMonth:!0,disabled:u<s})}let N=42-_.length;for(let d=1;d<=N;d++){let u=r+1,g=i;u>11&&(u=0,g++);let T=new Date(g,u,d);_.push({year:g,month:u,date:d,currentMonth:!1,disabled:T<s})}this.days.set(_)}previousMonth(){this.currentMonth()>0?this.currentMonth.set(this.currentMonth()-1):(this.currentMonth.set(11),this.currentYear.set(this.currentYear()-1)),this.generateDays(this.currentYear(),this.currentMonth())}nextMonth(){this.currentMonth()<11?this.currentMonth.set(this.currentMonth()+1):(this.currentMonth.set(0),this.currentYear.set(this.currentYear()+1)),this.generateDays(this.currentYear(),this.currentMonth())}selectDate(i){i.disabled||(this.currentDate.set(i),i.currentMonth||(i.date<15?this.nextMonth():this.previousMonth()))}selectTime(i){this.currentTime.set(i)}reset(){this.currentDate.set(null),this.currentTime.set(null)}bookNow(){console.log(this.selectedReseveTime())}toggleExpand(i){i.isExpanded=!i.isExpanded}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=P({type:o,selectors:[["app-student-courses-page"]],standalone:!0,features:[Y],decls:129,vars:6,consts:[[1,"w-80","bg-white","shadow-lg","rounded-lg"],[1,"flex","justify-between","items-center","p-4","border-b"],[1,"material-icons-outlined","text-lg","text-tmf-gray-1","cursor-pointer",3,"click"],[1,"text-lg","font-bold"],[1,"p-4"],[1,"grid","grid-cols-7","text-center","text-gray-700","mb-4"],[1,"grid","grid-cols-7","text-center","text-tmf-gray-1"],[1,"p-4","border-t"],[1,"grid","grid-cols-3","text-center","text-gray-700","mb-4"],[1,"grid","grid-cols-3","text-center","text-gray-700"],[1,"flex","flex-col","gap-2"],[1,"cursor-pointer","rounded-md","hover:bg-tmf-orange-1","hover:text-white","p-1",3,"ngClass"],[1,"p-4","flex","gap-4","justify-center","items-center"],[1,"bg-tmf-gray-5","text-white","px-4","py-2","rounded-lg",3,"click"],[1,"text-white","px-4","py-2","rounded-lg",3,"click","ngClass","disabled"],[1,"w-[821px]","border","border-tmf-orange-1","bg-tmf-orange-4","grid","grid-cols-[67px,1fr,1fr,1fr,1fr,1fr,1fr,1fr]","place-items-center"],[1,"w-full","h-full","bg-tmf-orange-4","col-span-1","border-b","border-b-tmf-orange-1"],[1,"w-full","bg-tmf-orange-4","col-span-1","text-center","border-b","border-b-tmf-orange-1"],[1,"py-2"],[1,"text-lg","font-bold","text-tmf-gray-1"],[1,"text-sm","font-bold","text-tmf-gray-4"],[1,"w-full","col-span-1","text-center","border-b","border-b-tmf-orange-1"],[1,"w-full","h-full","col-span-1","text-center","content-center","border-b","border-dashed","border-b-tmf-orange-1"],[1,"text-base","font-bold"],[1,"text-sm","font-bold","text-tmf-orange-1"],[1,"w-full","h-full","bg-white","border-b","border-dashed","border-b-tmf-orange-1","p-2","col-span-1"],[1,"flex","justify-center","items-center","py-3","px-8","bg-tmf-gray-4","rounded-lg"],[1,"text-white","material-icons-outlined"],[1,"flex","justify-center","items-center","py-3","px-8","bg-tmf-gray-7","rounded-lg"],[1,"text-tmf-gray-1","material-icons-outlined"],[1,"flex","justify-center","items-center","gap-1","py-3.5","bg-tmf-purple","text-white","rounded-lg"],[1,"text-xl","leading-[20px]","material-icons-outlined"],[1,"text-sm","font-bold"],[3,"click"],[1,"cursor-pointer","p-1","rounded-md",3,"ngClass"],[1,"cursor-pointer","rounded-md","hover:bg-tmf-orange-1","hover:text-white","p-1",3,"click","ngClass"]],template:function(r,s){r&1&&(e(0,"div",0)(1,"div",1)(2,"span",2),m("click",function(){return s.previousMonth()}),n(3," arrow_back"),t(),e(4,"div",3),n(5),t(),e(6,"span",2),m("click",function(){return s.nextMonth()}),n(7," arrow_forward"),t()(),e(8,"div",4)(9,"div",5)(10,"div"),n(11,"\u9031\u65E5"),t(),e(12,"div"),n(13,"\u9031\u4E00"),t(),e(14,"div"),n(15,"\u9031\u4E8C"),t(),e(16,"div"),n(17,"\u9031\u4E09"),t(),e(18,"div"),n(19,"\u9031\u56DB"),t(),e(20,"div"),n(21,"\u9031\u4E94"),t(),e(22,"div"),n(23,"\u9031\u516D"),t()(),e(24,"div",6),C(25,z,3,7,"div",null,S),t()(),e(27,"div",7)(28,"div",8)(29,"div"),n(30,"\u65E9\u4E0A"),t(),e(31,"div"),n(32,"\u4E0B\u5348"),t(),e(33,"div"),n(34,"\u665A\u4E0A"),t()(),e(35,"div",9)(36,"div",10),C(37,q,2,4,"div",11,S),t(),e(39,"div",10),C(40,G,2,4,"div",11,S),t(),e(42,"div",10),C(43,H,2,4,"div",11,S),t()()(),e(45,"div",12)(46,"button",13),m("click",function(){return s.reset()}),n(47," \u91CD\u8A2D "),t(),e(48,"button",14),m("click",function(){return s.bookNow()}),n(49," \u7ACB\u5373\u9810\u7D04 "),t()()(),e(50,"div",15),V(51,"div",16),e(52,"div",17)(53,"div",18)(54,"p",19),n(55,"\u9031\u65E5"),t(),e(56,"p",20),n(57,"03/31"),t()()(),e(58,"div",21)(59,"div",18)(60,"p",19),n(61,"\u9031\u4E00"),t(),e(62,"p",20),n(63,"04/01"),t()()(),e(64,"div",21)(65,"div",18)(66,"p",19),n(67,"\u9031\u4E8C"),t(),e(68,"p",20),n(69,"04/02"),t()()(),e(70,"div",21)(71,"div",18)(72,"p",19),n(73,"\u9031\u4E09"),t(),e(74,"p",20),n(75,"04/03"),t()()(),e(76,"div",21)(77,"div",18)(78,"p",19),n(79,"\u9031\u56DB"),t(),e(80,"p",20),n(81,"04/04"),t()()(),e(82,"div",21)(83,"div",18)(84,"p",19),n(85,"\u9031\u4E94"),t(),e(86,"p",20),n(87,"04/05"),t()()(),e(88,"div",21)(89,"div",18)(90,"p",19),n(91,"\u9031\u516D"),t(),e(92,"p",20),n(93,"04/06"),t()()(),e(94,"div",22)(95,"p",23),n(96,"1"),t(),e(97,"p",24),n(98,"09:00"),t()(),e(99,"div",25)(100,"div",26)(101,"span",27),n(102," do_not_disturb_on "),t()()(),e(103,"div",25)(104,"div",28)(105,"span",29),n(106," add "),t()()(),e(107,"div",25)(108,"div",28)(109,"span",29),n(110," add "),t()()(),e(111,"div",25)(112,"div",28)(113,"span",29),n(114," add "),t()()(),e(115,"div",25)(116,"div",28)(117,"span",29),n(118," add "),t()()(),e(119,"div",25)(120,"div",28)(121,"span",29),n(122," add "),t()()(),e(123,"div",25)(124,"div",30)(125,"span",31),n(126," beenhere "),t(),e(127,"p",32),n(128,"\u5DF2\u9810\u7D04"),t()()()()),r&2&&(c(5),h(" ",s.currentYear()+" \u5E74 "+(s.currentMonth()+1)+" \u6708 "," "),c(20),y(s.days()),c(12),y(s.morningTimes),c(3),y(s.afternoonTimes),c(3),y(s.eveningTimes),c(5),f("ngClass",$(3,O,!s.btnDisabled(),s.btnDisabled()))("disabled",s.btnDisabled()))},dependencies:[j,B],styles:[".grid-cols-custom[_ngcontent-%COMP%]{grid-template-columns:50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr}"]});let l=o;return l})();export{W as default};
