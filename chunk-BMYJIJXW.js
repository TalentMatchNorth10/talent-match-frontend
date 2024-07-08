import{k as O,l as V,v as F}from"./chunk-CMTOSVCB.js";import{Aa as w,Fb as P,Hb as k,Ma as c,Ob as M,Qb as d,cb as y,db as v,ea as x,eb as u,gb as b,ib as f,nb as r,oa as g,ob as l,pa as p,tb as h,wb as m,xb as s}from"./chunk-M2XE62KH.js";var C=a=>({disabled:a});function B(a,o){if(a&1){let i=h();r(0,"li",2)(1,"a",4),m("click",function(t){g(i);let e=s();return p(e.firstPage(t))}),r(2,"span",5),P(3," keyboard_double_arrow_left "),l()()()}if(a&2){let i=s();u("ngClass",d(1,C,i.currentPage===1))}}function S(a,o){if(a&1){let i=h();r(0,"li",2)(1,"a",4),m("click",function(t){g(i);let e=s();return p(e.previousPage(t))}),r(2,"span",5),P(3," chevron_left "),l()()()}if(a&2){let i=s();u("ngClass",d(1,C,i.currentPage===1))}}function T(a,o){if(a&1){let i=h();r(0,"li",6)(1,"a",4),m("click",function(t){let e=g(i).$implicit,_=s();return p(_.selectPage(t,e))}),P(2),l()()}if(a&2){let i=o.$implicit,n=s();b("active",i===n.currentPage),c(),v("aria-label",i==="..."?"More pages":"Page "+i),c(),k(" ",i," ")}}function D(a,o){if(a&1){let i=h();r(0,"li",2)(1,"a",4),m("click",function(t){g(i);let e=s();return p(e.nextPage(t))}),r(2,"span",5),P(3," chevron_right "),l()()()}if(a&2){let i=s();u("ngClass",d(1,C,i.currentPage===i.totalPages))}}function E(a,o){if(a&1){let i=h();r(0,"li",2)(1,"a",4),m("click",function(t){g(i);let e=s();return p(e.lastPage(t))}),r(2,"span",5),P(3," keyboard_double_arrow_right "),l()()()}if(a&2){let i=s();u("ngClass",d(1,C,i.currentPage===i.totalPages))}}var A=(()=>{let o=class o{constructor(){this.config={totalItems:0,itemsPerPage:0,currentPage:1,maxPageDisplay:5,showFirstButton:!0,showLastButton:!0,showPrevButton:!0,showNextButton:!0},this.pageChange=new w,this.pages=[]}ngOnInit(){this.currentPage=this.config.currentPage||1,this.totalPages=Math.ceil(this.config.totalItems/this.config.itemsPerPage),this.calculatePages()}calculatePages(){this.pages=[];let n=this.config.maxPageDisplay||5;if(this.totalPages<=n)for(let t=1;t<=this.totalPages;t++)this.pages.push(t);else{let t=Math.max(1,this.currentPage-Math.floor(n/2)),e=Math.min(t+n-1,this.totalPages);e>=this.totalPages&&(e=this.totalPages,t=Math.max(1,e-n+1)),t>1&&(this.pages.push(1),t>2&&this.pages.push("..."));for(let _=t;_<=e;_++)this.pages.push(_);e<this.totalPages&&(e<this.totalPages-1&&this.pages.push("..."),this.pages.push(this.totalPages))}}selectPage(n,t){n.preventDefault(),typeof t=="number"&&t!==this.currentPage&&(this.currentPage=t,this.pageChange.emit(this.currentPage),this.calculatePages())}nextPage(n){n.preventDefault(),this.currentPage<this.totalPages&&(this.currentPage++,this.pageChange.emit(this.currentPage),this.calculatePages())}previousPage(n){n.preventDefault(),this.currentPage>1&&(this.currentPage--,this.pageChange.emit(this.currentPage),this.calculatePages())}firstPage(n){n.preventDefault(),this.currentPage=1,this.pageChange.emit(this.currentPage),this.calculatePages()}lastPage(n){n.preventDefault(),this.currentPage=this.totalPages,this.pageChange.emit(this.currentPage),this.calculatePages()}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=x({type:o,selectors:[["tmf-pagination"]],inputs:{config:"config"},outputs:{pageChange:"pageChange"},standalone:!0,features:[M],decls:7,vars:5,consts:[["aria-label","Page navigation example"],[1,"page-list"],[1,"page-item",3,"ngClass"],["class","page-item",3,"active",4,"ngFor","ngForOf"],["href","#",1,"page-link",3,"click"],[1,"material-symbols-outlined"],[1,"page-item"]],template:function(t,e){t&1&&(r(0,"nav",0)(1,"ul",1),y(2,B,4,3,"li",2)(3,S,4,3,"li",2)(4,T,3,4,"li",3)(5,D,4,3,"li",2)(6,E,4,3,"li",2),l()()),t&2&&(c(2),f(2,e.config.showFirstButton||e.config.showFirstButton===void 0?2:-1),c(),f(3,e.config.showPrevButton||e.config.showPrevButton===void 0?3:-1),c(),u("ngForOf",e.pages),c(),f(5,e.config.showNextButton||e.config.showNextButton===void 0?5:-1),c(),f(6,e.config.showLastButton||e.config.showLastButton===void 0?6:-1))},dependencies:[F,O,V],styles:["[_nghost-%COMP%]{display:block}.page-list[_ngcontent-%COMP%]{display:flex;list-style-type:none;column-gap:.5rem;padding:0}.page-item[_ngcontent-%COMP%]{height:32px;width:32px;border-radius:.5rem}@media (min-width: 1024px){.page-item[_ngcontent-%COMP%]{height:48px;width:48px}}.page-item[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{display:flex;height:100%;width:100%;align-items:center;justify-content:center;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(212 212 212 / var(--tw-border-opacity));font-weight:500;--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity))}.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{border-style:none;--tw-bg-opacity: 1;background-color:rgb(243 105 35 / var(--tw-bg-opacity));font-family:Inter,sans-serif;font-size:16px;line-height:1.5rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{cursor:default;border-style:none;--tw-bg-opacity: 1;background-color:rgb(233 233 233 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(159 159 159 / var(--tw-text-opacity))}"]});let a=o;return a})();export{A as a};
