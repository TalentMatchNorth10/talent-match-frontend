import{d as vt}from"./chunk-2DFVLQU5.js";import"./chunk-ATI53E2T.js";import"./chunk-QMG6QZ2J.js";import"./chunk-U4SJQHLU.js";import"./chunk-VNGFKULG.js";import"./chunk-MEU3TBTC.js";import"./chunk-JEUZITVV.js";import{c as F,d as bt}from"./chunk-S4XAHOAC.js";import"./chunk-MD6RTHOX.js";import{c as Ct,d as _t,e as ft}from"./chunk-2OK5Q4JC.js";import{a as Mt}from"./chunk-PAB5CEVZ.js";import{a as pt,d as ut}from"./chunk-VYDWENZN.js";import{b as q,d as Ot}from"./chunk-H32CEN7X.js";import"./chunk-NQN2KDIR.js";import"./chunk-K3BFTGYZ.js";import"./chunk-4LOOS5GN.js";import{a as ht,b as gt}from"./chunk-L6R3LD7U.js";import"./chunk-5YWPRN7E.js";import{a as ct,b as st,c as k,e as S,f as H,g as lt,i as mt,k as dt,l as V,o as B,q as U,s as v}from"./chunk-I5MD2NP3.js";import"./chunk-2X4GIXVK.js";import"./chunk-MBKEEROQ.js";import"./chunk-XCFTMZOW.js";import"./chunk-SZHRPNOM.js";import{l as N,t as rt,v as M}from"./chunk-T2423WEX.js";import{Aa as W,Ba as z,C as J,Db as K,Eb as tt,Fb as et,G as Q,Hb as l,Ia as E,Ib as O,Ja as $,Jb as nt,Ma as Z,Oa as s,Ob as it,Pb as b,V as X,Wb as ot,Yb as at,aa as u,eb as h,fa as f,gb as m,ib as T,kb as _,mb as I,nb as R,oa as Y,ob as A,pa as w,pb as a,qa as y,qb as r,rb as g,vb as L,yb as d,zb as p}from"./chunk-VREVKPXB.js";import"./chunk-MON7YFGF.js";var j=function(t){return t.CHAT="chat",t.ANNOUNCEMENT="announcement",t}(j||{});function Tt(t,n){t&1&&(a(0,"span",3),l(1," sms "),r())}function It(t,n){t&1&&(a(0,"span",3),l(1," person_add "),r())}function Rt(t,n){if(t&1){let c=L();a(0,"li",6),d("click",function(){let i=w(c).$implicit,o=p(2);return y(o.selectOption(i))}),a(1,"div",7)(2,"p"),l(3),r(),h(4,Tt,2,0,"span",3)(5,It,2,0),r()()}if(t&2){let c=n.$implicit;s(3),O(c.name),s(),_(4,c.joined?4:5)}}function At(t,n){if(t&1&&(a(0,"ul",4),h(1,Rt,6,2,"li",5),r()),t&2){let c=p();s(),m("ngForOf",c.options)}}var wt=(()=>{let n=class n{constructor(){this.elementRef=u(W),this.options=[],this.searchEvent=new z,this.selectEvent=new z,this.control=new lt,this.isOpen=!1,this.onChange=e=>{},this.onTouched=()=>{}}clickout(e){setTimeout(()=>{this.elementRef.nativeElement.contains(e.target)||(this.isOpen=!1)})}ngOnInit(){this.control.valueChanges.pipe(J(200),Q()).subscribe(e=>{this.onChange(e)})}search(){this.searchEvent.emit(this.control.value)}selectOption(e){this.selectEvent.emit(e),this.isOpen=!1}writeValue(e){e!==this.control.value&&this.control.setValue(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=f({type:n,selectors:[["app-search-input"]],hostBindings:function(i,o){i&1&&d("click",function(x){return o.clickout(x)},!1,Z)},inputs:{options:"options"},outputs:{searchEvent:"searchEvent",selectEvent:"selectEvent"},standalone:!0,features:[it([{provide:ct,useExisting:X(()=>n),multi:!0}]),b],decls:6,vars:2,consts:[[1,"relative","flex","w-full","items-center","border"],["type","text","placeholder","\u641C\u5C0B",1,"flex-grow","p-3","pr-0","outline-none","min-w-0",3,"focus","formControl"],[1,"flex","cursor-pointer","items-center","justify-center","bg-tmf-gray-2","p-3","text-white","duration-100","hover:bg-tmf-gray-1",3,"click"],[1,"material-symbols-outlined"],[1,"absolute","top-full","w-full","rounded-sm","border","bg-white","shadow-md","z-10"],["class","cursor-pointer border-b p-3 hover:bg-tmf-gray-6",3,"click",4,"ngFor","ngForOf"],[1,"cursor-pointer","border-b","p-3","hover:bg-tmf-gray-6",3,"click"],[1,"flex","items-center","justify-between"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"input",1),d("focus",function(){return o.isOpen=!0}),r(),a(2,"div",2),d("click",function(){return o.search()}),a(3,"span",3),l(4," search "),r()(),h(5,At,2,1,"ul",4),r()),i&2&&(s(),m("formControl",o.control),s(4),_(5,o.options&&o.options.length&&o.isOpen?5:-1))},dependencies:[M,N,v,st,S,dt],styles:["[_nghost-%COMP%]{display:block}"]});let t=n;return t})();var D=function(t){return t.MESSAGE_RECEIVED="chat:messageReceived",t.READ_STATUS_UPDATED="chat:readStatusUpdated",t.CHAT_LIST_UPDATED="chat:chatListUpdated",t}(D||{}),P=function(t){return t.JOIN_ROOM="joinRoom",t.LEAVE_ROOM="leaveRoom",t.JOIN_PERSONAL_ROOM="joinPersonalRoom",t.LEAVE_PERSONAL_ROOM="leavePersonalRoom",t}(P||{});function Lt(t,n){if(t&1&&g(0,"img",10),t&2){let c=p().$implicit;m("src",c.user.avatar,$)}}function kt(t,n){t&1&&g(0,"div",15)}function Ft(t,n){if(t&1&&(a(0,"div",14)(1,"p"),l(2),r()()),t&2){let c=p().$implicit;s(2),O(c.unreadCount)}}function Dt(t,n){if(t&1){let c=L();a(0,"li",7),d("click",function(){let i=w(c).$implicit,o=p();return y(o.selectChat(i))}),a(1,"div",8)(2,"div",9),h(3,Lt,1,1,"img",10)(4,kt,1,0),r(),a(5,"div",11)(6,"p",12),l(7),r(),g(8,"p",13),r(),h(9,Ft,3,1,"div",14),r()()}if(t&2){let c=n.$implicit;s(3),_(3,c.user.avatar?3:4),s(4),O(c.user.name),s(),m("innerHTML",c.latestMessage?c.latestMessage.text:"",E),s(),_(9,c.unreadCount?9:-1)}}function Nt(t,n){t&1&&(a(0,"div",6)(1,"p"),l(2,"\u5C1A\u672A\u9078\u64C7\u804A\u5929\u5BA4"),r()())}function Ht(t,n){if(t&1&&g(0,"img",10),t&2){let c=p(2);m("src",c.currentChat.user.avatar,$)}}function Vt(t,n){t&1&&g(0,"div",15)}function Bt(t,n){t&1&&(a(0,"div",18)(1,"p"),l(2,"\u5C1A\u672A\u6709\u8A0A\u606F"),r()())}function Ut(t,n){t&1&&(a(0,"p",25),l(1,"\u5DF2\u8B80"),r())}function qt(t,n){if(t&1&&(a(0,"div",23),g(1,"p",24),h(2,Ut,2,0,"p",25),r()),t&2){let c=p().$implicit;s(),m("innerHTML",c.text,E),s(),_(2,c.readBy.includes(c.receiverId)?2:-1)}}function jt(t,n){if(t&1&&(a(0,"div",26),g(1,"p",24),r()),t&2){let c=p().$implicit;s(),m("innerHTML",c.text,E)}}function Gt(t,n){if(t&1&&h(0,qt,3,2,"div",23)(1,jt,2,1),t&2){let c=n.$implicit,e=p(3);_(0,c.senderId===e.userInfo.id?0:1)}}function zt(t,n){if(t&1&&(a(0,"div",22),R(1,Gt,2,1,null,null,I),r()),t&2){let c=p(2);s(),A(c.currentMessages)}}function $t(t,n){if(t&1){let c=L();a(0,"div",16)(1,"div",9),h(2,Ht,1,1,"img",10)(3,Vt,1,0),r(),a(4,"div",17),l(5),r()(),a(6,"div",11),h(7,Bt,3,0,"div",18)(8,zt,3,0),r(),a(9,"div",19)(10,"tmf-quill-editor",20),d("contentChangeEvent",function(i){w(c);let o=p();return y(o.contentChange(i))}),r(),a(11,"button",21),d("click",function(){w(c);let i=p();return y(i.sendMessage())}),l(12,"\u9001\u51FA"),r()()}if(t&2){let c=p();s(2),_(2,c.currentChat.user.avatar?2:3),s(3),O(c.currentChat.user.name),s(2),_(7,c.currentMessages.length===0||!c.currentMessages||!c.userInfo?7:8),s(3),m("height","150px")}}var yt=(()=>{let n=class n{constructor(){this.fb=u(U),this.chatService=u(Ot),this.websocketService=u(vt),this.userInfo=null,this.chatForm=this.fb.group({message:this.fb.control(null),search:this.fb.control(null)}),this.chatUsers=[],this.chatList=[],this.currentChat=null,this.currentMessages=[],this.subscribedEvents=new Set}get message(){return this.chatForm.controls.message}ngOnChanges(e){e.userInfo&&this.initJoinPersonalRoom()}ngOnInit(){this.getUserList(),this.getChatList(),this.initBindEvent()}ngOnDestroy(){this.cleanBindEvent(),this.currentChat&&this.websocketService.emit(P.LEAVE_ROOM,this.currentChat?.id),this.userInfo&&this.websocketService.emit(P.LEAVE_PERSONAL_ROOM,"")}initJoinPersonalRoom(){this.userInfo&&this.websocketService.emit(P.JOIN_PERSONAL_ROOM,"")}initBindEvent(){this.subscribedEvents.add(this.websocketService.onEvent(D.MESSAGE_RECEIVED).subscribe(e=>{this.currentChat&&(this.currentMessages.push(e),this.markRead())})),this.subscribedEvents.add(this.websocketService.onEvent(D.READ_STATUS_UPDATED).subscribe(e=>{this.currentChat&&e.userId!==this.userInfo?.id&&this.getMessageList(this.currentChat.id)})),this.subscribedEvents.add(this.websocketService.onEvent(D.CHAT_LIST_UPDATED).subscribe(e=>{let i=this.chatList.find(o=>o.id===e.id);i&&(i.latestMessage=e.latestMessage,i.unreadCount=e.unreadCount)}))}cleanBindEvent(){this.subscribedEvents.forEach(e=>{e.unsubscribe()})}sendMessage(){this.currentChat&&this.chatService.apiChatMessagePost({chatSendMesssageRequestModel:{chatId:this.currentChat.id,receiverId:this.currentChat.user.id,text:this.chatForm.controls.message.value||"",type:"general"}}).subscribe(()=>{this.chatForm.controls.message.setValue(""),this.quillEditor.updateContent("")})}markRead(){this.currentChat&&this.chatService.apiChatChatIdMarkAsReadPut({chatId:this.currentChat.id,chatReadStatusRequestModel:{userId:this.userInfo.id}}).subscribe()}getUserList(e){this.chatService.apiChatUsersGet({name:e||""}).subscribe(i=>{this.chatUsers=i.data})}getChatList(){this.chatService.apiChatListGet().subscribe(e=>{this.chatList=e.data})}getMessageList(e){this.chatService.apiChatChatIdMessagesGet({chatId:e}).subscribe(i=>{this.currentMessages=i.data})}selectUser(e){if(e.joined){let i=this.chatList.find(o=>o.user.id===e.id);i&&this.selectChat(i)}else this.chatService.apiChatCreatePost({requestBody:[e.id,this.userInfo.id]}).subscribe(()=>{this.getChatList()})}selectChat(e){this.currentChat&&this.websocketService.emit(P.LEAVE_ROOM,this.currentChat?.id),this.currentChat=e,this.websocketService.emit(P.JOIN_ROOM,e.id),this.getMessageList(e.id),this.chatService.apiChatChatIdMarkAsReadPut({chatId:e.id,chatReadStatusRequestModel:{userId:this.userInfo.id}}).subscribe()}contentChange(e){this.chatForm.controls.message.setValue(e)}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=f({type:n,selectors:[["app-chat"]],viewQuery:function(i,o){if(i&1&&K(F,5),i&2){let C;tt(C=et())&&(o.quillEditor=C.first)}},inputs:{userInfo:"userInfo"},standalone:!0,features:[Y,b],decls:9,vars:3,consts:[[1,"chat",3,"formGroup"],[1,"chatListContainer"],["formControlName","search",3,"searchEvent","selectEvent","options"],[1,"chatList"],[1,"chatItem"],[1,"chatRoom"],[1,"emptyChat"],[1,"chatItem",3,"click"],[1,"flex","items-center","pr-[50px]"],[1,"avator"],["alt","avatar",1,"h-10","w-10","rounded-full",3,"src"],[1,"chatContent"],[1,"chatName"],[1,"chatMessage",3,"innerHTML"],[1,"unreadCount"],[1,"h-10","w-10","rounded-full","bg-gray-300"],[1,"chatHeader"],[1,"userName"],[1,"emptyMessage"],[1,"chatInput"],[3,"contentChangeEvent","height"],[1,"sendButton",3,"click"],[1,"messages"],[1,"message","message-right"],[3,"innerHTML"],[1,"messageOnRead"],[1,"message","message-left"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"div",1)(2,"app-search-input",2),d("searchEvent",function(x){return o.getUserList(x)})("selectEvent",function(x){return o.selectUser(x)}),r(),a(3,"ul",3),R(4,Dt,10,4,"li",4,I),r()(),a(6,"div",5),h(7,Nt,3,0,"div",6)(8,$t,13,4),r()()),i&2&&(m("formGroup",o.chatForm),s(2),m("options",o.chatUsers),s(2),A(o.chatList),s(3),_(7,o.currentChat?8:7))},dependencies:[v,S,H,V,B,wt,F],styles:['[_nghost-%COMP%]{display:block;overflow:auto}.chat[_ngcontent-%COMP%]{display:flex;height:800px;width:100%;min-width:768px}.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]{display:flex;width:250px;flex-shrink:0;flex-direction:column}@media (min-width: 768px){.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]{width:400px}}.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]{flex-grow:1;overflow-y:auto;border-width:1px;border-top-width:0px}.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]{position:relative;display:flex;cursor:pointer;align-items:center;border-bottom-width:1px;padding:.5rem}@media (min-width: 768px){.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]{padding:.75rem}}@media (min-width: 1024px){.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]{padding:1rem}}.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]:hover{background-color:#e9e9e9b3}.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]:active{--tw-bg-opacity: 1;background-color:rgb(233 233 233 / var(--tw-bg-opacity))}.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{height:3rem;width:3rem;border-radius:9999px}.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]{margin-left:1rem}.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .chatName[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem;font-weight:600;--tw-text-opacity: 1;color:rgb(29 29 29 / var(--tw-text-opacity))}.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .chatMessage[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(102 102 102 / var(--tw-text-opacity))}@media (min-width: 768px){.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .chatMessage[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem}}.chat[_ngcontent-%COMP%]   .chatListContainer[_ngcontent-%COMP%]   .chatList[_ngcontent-%COMP%]   .chatItem[_ngcontent-%COMP%]   .unreadCount[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;--tw-bg-opacity: 1;background-color:rgb(243 105 35 / var(--tw-bg-opacity));padding:.25rem .5rem;font-size:.75rem;line-height:1rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]{display:flex;height:100%;flex-grow:1;flex-direction:column;border-width:1px;border-left-width:0px}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .emptyChat[_ngcontent-%COMP%]{display:flex;flex-grow:1;align-items:center;justify-content:center;--tw-text-opacity: 1;color:rgb(102 102 102 / var(--tw-text-opacity))}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatHeader[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;gap:.75rem;border-bottom-width:1px;padding:.75rem}@media (min-width: 768px){.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatHeader[_ngcontent-%COMP%]{gap:1.25rem;padding:1rem}}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatHeader[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem;font-weight:600;--tw-text-opacity: 1;color:rgb(29 29 29 / var(--tw-text-opacity))}@media (min-width: 768px){.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatHeader[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem}}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatHeader[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{height:2.5rem;width:2.5rem;border-radius:9999px}@media (min-width: 768px){.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatHeader[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{height:3rem;width:3rem}}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]{display:flex;flex-grow:1;flex-direction:column;overflow-y:auto;border-bottom-width:1px;padding:1rem}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .emptyMessage[_ngcontent-%COMP%]{display:flex;flex-grow:1;align-items:center;justify-content:center;--tw-text-opacity: 1;color:rgb(102 102 102 / var(--tw-text-opacity))}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{position:relative;height:fit-content;width:40%;overflow-wrap:break-word;border-radius:.5rem;padding:10px 15px;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(51 51 51 / var(--tw-text-opacity))}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message.message-left[_ngcontent-%COMP%]{align-self:flex-start;--tw-bg-opacity: 1;background-color:rgb(212 212 212 / var(--tw-bg-opacity))}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message.message-left[_ngcontent-%COMP%]:after{position:absolute;bottom:10px;left:-8px;margin-top:-5px;height:0px;width:0px;border-width:10px;border-left-width:0px;border-color:transparent;--tw-border-opacity: 1;border-right-color:rgb(212 212 212 / var(--tw-border-opacity));--tw-content: "";content:var(--tw-content)}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message.message-left[_ngcontent-%COMP%]   .messageOnRead[_ngcontent-%COMP%]{position:absolute;bottom:10px;right:100%}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message.message-right[_ngcontent-%COMP%]{align-self:flex-end;--tw-bg-opacity: 1;background-color:rgb(243 105 35 / var(--tw-bg-opacity))}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message.message-right[_ngcontent-%COMP%]:after{position:absolute;bottom:10px;right:-8px;margin-top:-5px;height:0px;width:0px;border-width:10px;border-right-width:0px;border-color:transparent;--tw-border-opacity: 1;border-left-color:rgb(243 105 35 / var(--tw-border-opacity));--tw-content: "";content:var(--tw-content)}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatContent[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .message.message-right[_ngcontent-%COMP%]   .messageOnRead[_ngcontent-%COMP%]{position:absolute;bottom:10px;white-space:nowrap;font-size:12px;--tw-text-opacity: 1;color:rgb(102 102 102 / var(--tw-text-opacity));right:calc(100% + 5px)}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatInput[_ngcontent-%COMP%]{display:grid;width:100%;grid-template-columns:repeat(1,minmax(0,1fr));gap:.75rem;padding:1rem}.chat[_ngcontent-%COMP%]   .chatRoom[_ngcontent-%COMP%]   .chatInput[_ngcontent-%COMP%]   .sendButton[_ngcontent-%COMP%]{display:flex;width:100px;cursor:pointer;align-items:center;justify-content:center;justify-self:end;border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgb(243 105 35 / var(--tw-bg-opacity));padding-top:.25rem;padding-bottom:.25rem;font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}']});let t=n;return t})();function Jt(t,n){if(t&1&&g(0,"tmf-option",12),t&2){let c=n.$implicit;m("value",c.value)("label",c.label)}}function Qt(t,n){if(t&1&&g(0,"tmf-option",12),t&2){let c=n.$implicit;m("value",c.value)("label",c.label)}}var Et=(()=>{let n=class n{constructor(){this.fb=u(U),this.announcementService=u(q),this.dialogService=u(bt),this.dialogRef=u(Ct),this.dialogData=u(_t),this.announcementForm=this.fb.group({title:this.fb.control(null,[k.required]),text:this.fb.control(null,[k.required]),courseIds:this.fb.control([],[k.required]),target:this.fb.control(null,[k.required])}),this.InputType=pt}get targetOptions(){return this.dialogData.targetOptions||[]}get courseOptions(){return this.dialogData.courseOptions||[]}contentChange(e){this.announcementForm.controls.text.setValue(e)}submit(){if(this.announcementForm.valid){let{title:e,text:i,courseIds:o,target:C}=this.announcementForm.getRawValue();this.announcementService.apiAnnouncementPost({sendAnnouncementRequestModel:{title:e||"",text:i||"",courseIds:o||[],target:C||"all"}}).subscribe(()=>{this.dialogRef.close()})}else this.dialogService.openAlertDialog({title:"\u932F\u8AA4",content:"\u8ACB\u586B\u5BEB\u5B8C\u6574\u8CC7\u8A0A"}).closed.subscribe()}cancel(){this.dialogRef.close()}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=f({type:n,selectors:[["app-create-announcement-dialog"]],standalone:!0,features:[b],decls:16,vars:12,consts:[[1,"w-[350px]","bg-white","p-5","md:w-[600px]"],[1,"flex","justify-center","py-3"],[1,"text-lg","font-semibold"],[3,"formGroup"],["label","\u6A19\u984C","formControlName","title",3,"inputType","isRequired"],["label","\u767C\u4F48\u5C0D\u8C61","formControlName","target",1,"mb-6",3,"isRequired","multiSelect"],[3,"value","label",4,"ngFor","ngForOf"],["label","\u767C\u4F48\u8AB2\u7A0B","formControlName","courseIds",1,"mb-6",3,"isRequired","multiSelect"],["label","\u5167\u6587",1,"mb-6",3,"contentChangeEvent","isRequired","height"],[1,"flex","justify-center","gap-5"],["type","button",1,"w-[100px]","rounded-md","bg-tmf-orange-1","py-1","text-sm","text-white","disabled:opacity-50","disabled:cursor-not-allowed",3,"click","disabled"],["type","button",1,"w-[100px]","rounded-md","border","py-1","text-tmf-gray-2",3,"click"],[3,"value","label"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"div",1)(2,"p",2),l(3,"\u65B0\u589E\u516C\u544A"),r()(),a(4,"form",3),g(5,"tmf-input",4),a(6,"tmf-select",5),h(7,Jt,1,2,"tmf-option",6),r(),a(8,"tmf-select",7),h(9,Qt,1,2,"tmf-option",6),r(),a(10,"tmf-quill-editor",8),d("contentChangeEvent",function(x){return o.contentChange(x)}),r(),a(11,"div",9)(12,"button",10),d("click",function(){return o.submit()}),l(13," \u78BA\u8A8D "),r(),a(14,"button",11),d("click",function(){return o.cancel()}),l(15," \u53D6\u6D88 "),r()()()()),i&2&&(s(4),m("formGroup",o.announcementForm),s(),m("inputType",o.InputType.Outline)("isRequired",!0),s(),m("isRequired",!0)("multiSelect",!1),s(),m("ngForOf",o.targetOptions),s(),m("isRequired",!0)("multiSelect",!0),s(),m("ngForOf",o.courseOptions),s(),m("isRequired",!0)("height","150px"),s(2),m("disabled",o.announcementForm.invalid))},dependencies:[M,N,v,mt,S,H,V,B,ut,gt,ht,F],styles:["[_nghost-%COMP%]{display:block}"]});let t=n;return t})();function Xt(t,n){if(t&1&&(a(0,"tr")(1,"td",6),l(2),r(),a(3,"td",7),l(4),r(),a(5,"td",8),l(6),ot(7,"date"),r(),a(8,"td"),g(9,"div",9),r()()),t&2){let c=n.$implicit,e=p();s(2),O(c.title),s(2),O(e.getTargetText(c.target)),s(2),nt(" ",at(7,4,c.createdAt,"yyyy/MM/dd HH:MM")," "),s(3),m("innerHTML",c.text,E)}}function Yt(t,n){t&1&&(a(0,"tr",5)(1,"td",10),l(2,"\u5C1A\u7121\u516C\u544A"),r()())}var St=(()=>{let n=class n{constructor(){this.dialog=u(ft),this.announcementService=u(q),this.courseOptions=[],this.targetOptions=[],this.announcementList=[]}ngOnInit(){this.initOptions(),this.getList()}initOptions(){this.announcementService.apiAnnouncementInitGet().subscribe(e=>{this.courseOptions=e.data.courseOptions.map(i=>({label:i.label,value:i.value})),this.targetOptions=e.data.targetOptions.map(i=>({label:i.label||"",value:i.value}))})}getList(){this.announcementService.apiAnnouncementListGet().subscribe(e=>{this.announcementList=e.data})}getTargetText(e){let i=this.targetOptions.find(o=>o.value===e);return i?i.label:""}create(){this.dialog.open(Et,{data:{courseOptions:this.courseOptions,targetOptions:this.targetOptions}}).closed.subscribe(()=>{this.getList()})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=f({type:n,selectors:[["app-announcement"]],standalone:!0,features:[b],decls:21,vars:3,consts:[[1,"announcement"],[1,"mb-5","flex","items-center","justify-end","flex-shrink-0"],[1,"flex","w-fit","items-center","gap-1","whitespace-nowrap","rounded-md","bg-tmf-orange-1","p-2","text-white",3,"click"],[1,"material-symbols-outlined"],[1,"announcementTable"],[1,"h-full"],[1,"text-center","w-[180px]"],[1,"text-center","w-[100px]"],[1,"text-center","w-[200px]"],[3,"innerHTML"],["colspan","4",1,"text-center","h-full"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"div",1)(2,"button",2),d("click",function(){return o.create()}),a(3,"span",3),l(4," add "),r(),l(5," \u767C\u4F48\u65B0\u516C\u544A "),r()(),a(6,"table",4)(7,"thead")(8,"tr")(9,"th"),l(10,"\u6A19\u984C"),r(),a(11,"th"),l(12,"\u767C\u4F48\u5C0D\u8C61"),r(),a(13,"th"),l(14,"\u767C\u4F48\u6642\u9593"),r(),a(15,"th"),l(16,"\u5167\u6587"),r()()(),a(17,"tbody"),R(18,Xt,10,7,"tr",null,I,!1,Yt,3,0,"tr",5),r()()()),i&2&&(s(6),T("flex-grow",!o.announcementList.length),s(12),A(o.announcementList))},dependencies:[M,rt,v],styles:["[_nghost-%COMP%]{display:block;overflow:auto}.announcement[_ngcontent-%COMP%]{display:flex;height:800px;width:100%;min-width:768px;flex-direction:column;border-width:1px;padding:1.25rem}.announcement[_ngcontent-%COMP%]   .announcementTable[_ngcontent-%COMP%]{width:100%}.announcement[_ngcontent-%COMP%]   .announcementTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border-width:1px;--tw-border-opacity: 1;border-color:rgb(243 105 35 / var(--tw-border-opacity))}.announcement[_ngcontent-%COMP%]   .announcementTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 105 35 / var(--tw-bg-opacity))}.announcement[_ngcontent-%COMP%]   .announcementTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-right-width:1px;padding:.5rem;font-size:1.125rem;line-height:1.75rem;font-weight:600;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.announcement[_ngcontent-%COMP%]   .announcementTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{border-right-width:0px}.announcement[_ngcontent-%COMP%]   .announcementTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border-width:1px}.announcement[_ngcontent-%COMP%]   .announcementTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom-width:1px}.announcement[_ngcontent-%COMP%]   .announcementTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-right-width:1px;padding:.5rem}.announcement[_ngcontent-%COMP%]   .announcementTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-right-width:0px}"]});let t=n;return t})();function Wt(t,n){if(t&1&&g(0,"app-chat",3),t&2){let c=p();m("userInfo",c.userInfo)}}function Zt(t,n){t&1&&g(0,"app-announcement")}var $e=(()=>{let n=class n{constructor(){this.userInfoService=u(Mt),this.userInfo=null,this.tab=j.CHAT,this.Tab=j}ngOnInit(){this.userInfoService.userInfo$.subscribe(e=>{this.userInfo=e})}changeTab(e){this.tab=e}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=f({type:n,selectors:[["app-message"]],standalone:!0,features:[b],decls:10,vars:5,consts:[[1,"mx-auto","w-full","py-[50px]","p-10","lg:max-w-[1200px]"],[1,"tabList"],[1,"tabItem",3,"click"],[3,"userInfo"]],template:function(i,o){i&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),d("click",function(){return o.changeTab(o.Tab.CHAT)}),a(3,"p"),l(4,"\u500B\u4EBA\u8A0A\u606F"),r()(),a(5,"div",2),d("click",function(){return o.changeTab(o.Tab.ANNOUNCEMENT)}),a(6,"p"),l(7,"\u516C\u544A\u8A0A\u606F"),r()()(),h(8,Wt,1,1,"app-chat",3)(9,Zt,1,0),r()),i&2&&(s(2),T("active",o.tab===o.Tab.CHAT),s(3),T("active",o.tab===o.Tab.ANNOUNCEMENT),s(3),_(8,o.tab===o.Tab.CHAT?8:9))},dependencies:[M,yt,St],styles:["[_nghost-%COMP%]{display:block}.tabList[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;border-radius:.125rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}@media (min-width: 768px){.tabList[_ngcontent-%COMP%]{width:400px}}.tabList[_ngcontent-%COMP%]   .tabItem[_ngcontent-%COMP%]{display:flex;flex-grow:1;cursor:pointer;justify-content:center;border-top-width:1px;padding:1rem}.tabList[_ngcontent-%COMP%]   .tabItem[_ngcontent-%COMP%]:first-child{border-top-left-radius:.125rem;border-bottom-left-radius:.125rem;border-left-width:1px}.tabList[_ngcontent-%COMP%]   .tabItem[_ngcontent-%COMP%]:last-child{border-top-right-radius:.125rem;border-bottom-right-radius:.125rem;border-right-width:1px}.tabList[_ngcontent-%COMP%]   .tabItem.active[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 105 35 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}"]});let t=n;return t})();export{$e as default};
