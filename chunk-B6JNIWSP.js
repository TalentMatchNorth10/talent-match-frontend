import{l as d,m as c,w as u}from"./chunk-6355ZLB4.js";import{Ib as l,Oa as s,Qb as g,eb as x,fa as m,gb as o,oa as f,qb as a,rb as r}from"./chunk-Y52VWUQN.js";function h(t,e){t&1&&(a(0,"span",4),l(1," star "),r())}function S(t,e){t&1&&(a(0,"span",4),l(1," star_half "),r())}function y(t,e){t&1&&(a(0,"span",5),l(1," star_border "),r())}var v=(()=>{let e=class e{constructor(){this.rating=0,this.fullStars=[],this.halfStars=0,this.emptyStars=[]}starFontSize(n){return`text-[${n}]`}ngOnChanges(n){n.rating&&this.updateStars()}updateStars(){this.rating<0?this.rating=0:this.rating>5&&(this.rating=5),isNaN(this.rating)&&(this.rating=0);let n=Math.floor(this.rating),i=this.rating-n;this.fullStars=Array(n).fill(0),this.halfStars=i>=.5?1:0,this.emptyStars=Array(5-n-this.halfStars).fill(0)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=m({type:e,selectors:[["tmf-star-rating"]],inputs:{rating:"rating"},standalone:!0,features:[f,g],decls:4,vars:3,consts:[[1,"flex","items-center"],["class","material-icons-outlined text-[12px] text-tmf-yellow-1 md:text-[16px] lg:text-[20px]",4,"ngFor","ngForOf"],["class","material-icons-outlined text-[12px] text-tmf-yellow-1 md:text-[16px] lg:text-[20px]",4,"ngIf"],["class","material-icons-outlined text-[12px] md:text-[16px] lg:text-[20px]",4,"ngFor","ngForOf"],[1,"material-icons-outlined","text-[12px]","text-tmf-yellow-1","md:text-[16px]","lg:text-[20px]"],[1,"material-icons-outlined","text-[12px]","md:text-[16px]","lg:text-[20px]"]],template:function(i,p){i&1&&(a(0,"div",0),x(1,h,2,0,"span",1)(2,S,2,0,"span",2)(3,y,2,0,"span",3),r()),i&2&&(s(),o("ngForOf",p.fullStars),s(),o("ngIf",p.halfStars),s(),o("ngForOf",p.emptyStars))},dependencies:[u,d,c],styles:["[_nghost-%COMP%]{display:block}"]});let t=e;return t})();export{v as a};