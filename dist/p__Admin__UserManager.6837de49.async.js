(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[978],{32070:function(){},27488:function($,S,e){"use strict";e.r(S),e.d(S,{default:function(){return J},waitTime:function(){return A},waitTimePromise:function(){return M}});var p=e(11849),j=e(12968),D=e(20352),m=e(39428),x=e(3182),O=e(28991),o=e(81253),Z=e(59250),y=e(13013),i=e(57663),c=e(71577),B=e(30887),E=e(18515),N=e(84305),f=e(39559),w=e(57254),g=e(44545),T=e(94184),b=e.n(T),s=e(67294),X=e(32070),L=["key","name"],F=function(n){var t=n.children,a=n.menus,r=n.onSelect,l=n.className,u=n.style,I=(0,s.useContext)(f.ZP.ConfigContext),d=I.getPrefixCls,K=d("pro-table-dropdown"),R=s.createElement(E.Z,{onClick:function(C){return r&&r(C.key)}},a==null?void 0:a.map(function(P){return s.createElement(E.Z.Item,{key:P.key},P.name)}));return s.createElement(y.Z,{overlay:R,className:b()(K,l)},s.createElement(c.Z,{style:u},t," ",s.createElement(w.Z,null)))},k=function(n){var t=n.className,a=n.style,r=n.onSelect,l=n.menus,u=l===void 0?[]:l,I=n.children,d=(0,s.useContext)(f.ZP.ConfigContext),K=d.getPrefixCls,R=K("pro-table-dropdown"),P=s.createElement(E.Z,{onClick:function(U){r==null||r(U.key)},items:u.map(function(C){var U=C.key,Q=C.name,W=(0,o.Z)(C,L);return(0,O.Z)((0,O.Z)({key:U},W),{},{title:W.title,label:Q})})});return s.createElement(y.Z,{overlay:P,className:b()(R,t)},s.createElement("a",{style:a},I||s.createElement(g.Z,null)))};k.Button=F;var z=k,G=e(93760),H=e(93387),h=e(85893),M=function(){var v=(0,x.Z)((0,m.Z)().mark(function n(){var t,a=arguments;return(0,m.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:100,l.abrupt("return",new Promise(function(u){setTimeout(function(){u(!0)},t)}));case 2:case"end":return l.stop()}},n)}));return function(){return v.apply(this,arguments)}}(),A=function(){var v=(0,x.Z)((0,m.Z)().mark(function n(){var t,a=arguments;return(0,m.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:100,l.next=3,M(t);case 3:case"end":return l.stop()}},n)}));return function(){return v.apply(this,arguments)}}(),V=[{dataIndex:"id",valueType:"indexBorder",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",copyable:!0},{title:"\u5934\u50CF",dataIndex:"avatarUrl",render:function(n,t){return(0,h.jsx)("div",{children:(0,h.jsx)(D.Z,{src:t.avatarUrl,width:50})})},copyable:!0},{title:"\u7535\u8BDD",dataIndex:"phone",copyable:!0},{title:"\u90AE\u7BB1",dataIndex:"email",copyable:!0},{title:"\u72B6\u6001",dataIndex:"userStatus",copyable:!0},{title:"\u661F\u7403\u7F16\u53F7",dataIndex:"planetCode",copyable:!0},{title:"\u89D2\u8272",dataIndex:"userRole",copyable:!0,valueType:"select",valueEnum:{all:{text:"\u8D85\u957F".repeat(50)},0:{text:"\u666E\u901A\u7528\u6237",status:"Default"},1:{text:"\u7BA1\u7406\u5458",status:"Success",disabled:!0}}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",valueType:"dateTime",copyable:!0},{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(n,t,a,r){return[(0,h.jsx)("a",{onClick:function(){var u;r==null||(u=r.startEditable)===null||u===void 0||u.call(r,t.id)},children:"\u7F16\u8F91"},"editable"),(0,h.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view"),(0,h.jsx)(z,{onSelect:function(){return r==null?void 0:r.reload()},menus:[{key:"copy",name:"\u590D\u5236"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}],J=function(){var v=(0,s.useRef)();return(0,h.jsx)(G.Z,{columns:V,actionRef:v,cardBordered:!0,request:function(){var n=(0,x.Z)((0,m.Z)().mark(function t(a,r,l){var u;return(0,m.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log(r,l),d.next=3,A(2e3);case 3:return d.next=5,(0,H.qz)();case 5:return u=d.sent,d.abrupt("return",{data:u});case 7:case"end":return d.stop()}},t)}));return function(t,a,r){return n.apply(this,arguments)}}(),editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",defaultValue:{option:{fixed:"right",disable:!0}},onChange:function(t){console.log("value: ",t)}},rowKey:"id",search:{labelWidth:"auto"},options:{setting:{listsHeight:400}},form:{syncToUrl:function(t,a){return a==="get"?(0,p.Z)((0,p.Z)({},t),{},{created_at:[t.startTime,t.endTime]}):t}},pagination:{pageSize:5,onChange:function(t){return console.log(t)}},dateFormatter:"string",headerTitle:"\u9AD8\u7EA7\u8868\u683C"})}},34952:function($,S,e){"use strict";var p=e(22122),j=e(15105),D=e(67294),m=function(o,Z){var y={};for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&Z.indexOf(i)<0&&(y[i]=o[i]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(o);c<i.length;c++)Z.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(o,i[c])&&(y[i[c]]=o[i[c]]);return y},x={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},O=D.forwardRef(function(o,Z){var y=function(g){var T=g.keyCode;T===j.Z.ENTER&&g.preventDefault()},i=function(g){var T=g.keyCode,b=o.onClick;T===j.Z.ENTER&&b&&b()},c=o.style,B=o.noStyle,E=o.disabled,N=m(o,["style","noStyle","disabled"]),f={};return B||(f=(0,p.Z)({},x)),E&&(f.pointerEvents="none"),f=(0,p.Z)((0,p.Z)({},f),c),D.createElement("div",(0,p.Z)({role:"button",tabIndex:0,ref:Z},N,{onKeyDown:y,onKeyUp:i,style:f}))});S.Z=O}}]);
