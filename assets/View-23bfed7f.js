var e=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(n,i,a)=>i in n?e(n,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[i]=a;import{y as s,G as l,q as c,h as _,b as p,p as v,O as u,T as w}from"./@vkontakte/icons-d137ec12.js";import{ai as d,aS as f,aT as m,a8 as h,n as V,m as k,aU as b,aV as g,l as y,p as S,q as x,s as O,K as T,r as B,ah as E,v as W,c as P,aK as N,aW as j}from"./index-716dd2fc.js";import{N as X}from"./Panel-eb4ddde2.js";const I=l({entering:!1}),$=({children:e,entering:n})=>{const i=c(I),a=d({entering:i.entering||n});return s(I.Provider,{value:a},e)},C=l(void 0),A=({children:e,isBack:n})=>{const i=c(C),a=void 0!==n?n:i,[r]=_(a);return s(C.Provider,{value:r},e)};const K=(e,n,i)=>({swipedToOpposite:n<0,swipeBackTriggered:n>=10,viewportStartEdgeTouched:e<=20,viewportEndEdgeTouched:e>=i-20}),M={View:"_View_9hasv_1","View--animated":"_View--animated_9hasv_8","View--swiping-back":"_View--swiping-back_9hasv_9",View__panel:"_View__panel_9hasv_13",View__header:"_View__header_9hasv_14",View__panels:"_View__panels_9hasv_20","View__panel-in":"_View__panel-in_9hasv_33","View__panel-overlay":"_View__panel-overlay_9hasv_45","View--ios":"_View--ios_9hasv_61","View__panel--swipe-back-prev":"_View__panel--swipe-back-prev_9hasv_61","View__panel--swipe-back-success":"_View__panel--swipe-back-success_9hasv_61","View__panel--swipe-back-next":"_View__panel--swipe-back-next_9hasv_66","View__panel--swipe-back-failed":"_View__panel--swipe-back-failed_9hasv_71","View__panel--next":"_View__panel--next_9hasv_94","View__panel--prev":"_View__panel--prev_9hasv_94","animation-view-prev-back":"_animation-view-prev-back_9hasv_1","animation-view-next-forward":"_animation-view-next-forward_9hasv_1","View--no-motion":"_View--no-motion_9hasv_102","animation-ios-prev-forward":"_animation-ios-prev-forward_9hasv_1","animation-ios-next-back":"_animation-ios-next-back_9hasv_1","animation-ios-next-forward":"_animation-ios-next-forward_9hasv_1","animation-ios-prev-back":"_animation-ios-prev-back_9hasv_1","animation-ios-fade-in":"_animation-ios-fade-in_9hasv_1","animation-ios-fade-out":"_animation-ios-fade-out_9hasv_1","View__panel--active":"_View__panel--active_9hasv_173"};var L,q;(q=L||(L={}))[q.fail=1]="fail",q[q.success=2]="success";let D={};const F=e=>{var l=e,{activePanel:c,history:d,nav:I,onTransition:C,onSwipeBack:L,onSwipeBackStart:q,onSwipeBackCancel:F,children:U,className:z}=l,G=((e,n)=>{var i={};for(var o in e)r.call(e,o)&&n.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&a)for(var o of a(e))n.indexOf(o)<0&&t.call(e,o)&&(i[o]=e[o]);return i})(l,["activePanel","history","nav","onTransition","onSwipeBack","onSwipeBackStart","onSwipeBackCancel","children","className"]);const H=m({nav:I,id:G.id}),J=p(D[H]||{}),Q=p(h);v((()=>()=>{H&&(D[H]=J.current)}));const R=p({}),{window:Y,document:Z}=V(),ee=k(),ne=b(),ie=g(),ae=y(),[re,te]=_(!1),[oe,se]=_([c]),[le,ce]=_(c),[_e,pe]=_(void 0),[ve,ue]=_(null),[we,de]=_(null),fe=p(!1),[me,he]=_(void 0),[Ve,ke]=_(0),[be,ge]=_(0),[ye,Se]=_(null),[xe,Oe]=_(null),[Te,Be]=_(null),[Ee,We]=_(!1),Pe=S(c),Ne=S(me),je=S(Ee),Xe=S(Te),Ie=S(xe),$e=S(C),Ce=u.toArray(U).filter((e=>{const n=m(e.props);return void 0!==n&&oe.includes(n)||n===xe||n===ye})),Ae=!ne.transitionMotionEnabled||!ie.animate||ae===x.VKCOM,Ke=!Ae&&ae===x.IOS&&ne.isWebView&&Boolean(L),Me=e=>null===e?null:R.current[e],Le=w(((e,n)=>{n&&(J.current[e]=0),ue(null),de(null),se([c]),ce(c),te(!1),pe(n),Q.current=()=>{null==ee||ee.scrollTo(0,n?J.current[c]:0),C&&C({isBack:n,from:e,to:c})}}),[c,C,ee]);O((()=>{Q.current(),Q.current=h}),[Q.current]);const qe=w((e=>{e&&![M["animation-ios-next-forward"],M["animation-ios-prev-back"],M["animation-view-next-forward"],M["animation-view-prev-back"]].includes(e.animationName)||null===ve||Le(ve,Boolean(_e))}),[Le,_e,ve]),{waitTransitionFinish:De}=T(),Fe=B(qe,ae===x.IOS?600:300),Ue=w((()=>{L&&L()}),[L]),ze=w((()=>{F&&F(),Oe(null),Se(null),he(!1),Be(null),ke(0),ge(0)}),[F]),Ge=w((e=>{if(!e||(null==e?void 0:e.propertyName.includes("transform"))&&(null==e?void 0:e.target)===Me(ye))switch(Te){case 1:ze();break;case 2:Ue()}}),[ze,Ue,ye,Te]),He=e=>{if(!N||!Y)return{};const n=e===xe,i=e===ye;if(!n&&!i||Te)return{};let a=`${be}px`,r=100*be/Y.innerWidth/2-50+"%";return i?{transform:`translate3d(${r}, 0, 0)`,WebkitTransform:`translate3d(${r}, 0, 0)`}:n?{transform:`translate3d(${a}, 0, 0)`,WebkitTransform:`translate3d(${a}, 0, 0)`}:{}},Je=e=>{if(!N||!Y)return{};if(!(e===ye))return{};const n=1-be/Y.innerWidth,i=2===Te?0:1===Te?1:null;return{display:"block",opacity:null===i?n:i}};return v((()=>{if(Pe&&Pe!==c&&!Ne&&!je){const e=u.toArray(U).map((e=>m(e.props))).find((e=>e===Pe||e===c))===c;J.current[Pe]=null==ee?void 0:ee.getScroll().y,Ae?Le(Pe,e):(E(Z),se([Pe,c]),ue(Pe),de(c),ce(null),te(!0),pe(e),j.supported||Fe.set())}if(Pe&&Pe!==c&&Ne){const e=c,n=Pe;Ie&&(J.current[Ie]=0),Oe(null),Se(null),he(!1),Be(null),ke(0),ge(0),ce(e),se([e]),pe(!0),Q.current=()=>{null!==e&&(null==ee||ee.scrollTo(0,J.current[e])),$e&&$e({isBack:!0,from:n,to:e})}}!Xe&&Te&&De(Me(ye),Ge,ae===x.IOS?600:300),1!==Xe||Te||null===le||null==ee||ee.scrollTo(0,J.current[le]),Pe!==c&&Ee&&(We(!1),de(null),ue(null),te(!1),se([c]),ce(c))}),[c,le,Fe,Ee,U,Ae,Z,Le,ae,Pe,je,$e,Ie,Xe,Ne,ee,ye,Te,Ge,De]),s(X.Provider,{value:H},s(W,(Qe=((e,n)=>{for(var i in n||(n={}))r.call(n,i)&&o(e,i,n[i]);if(a)for(var i of a(n))t.call(n,i)&&o(e,i,n[i]);return e})({Component:"section"},G),Re={className:P(M.View,ae===x.IOS&&P(M["View--ios"],"vkuiInternalView--ios"),!Ae&&re&&M["View--animated"],!Ae&&me&&M["View--swiping-back"],Ae&&M["View--no-motion"],z),onMoveX:Ke?e=>{if(fe.current||function(e){var n;const i=e.originalEvent.target;return Boolean(null==(n=null==i?void 0:i.closest)?void 0:n.call(i,"input, textarea, [data-vkui-swipe-back=false]"))}(e))return;const{swipedToOpposite:n,swipeBackTriggered:i,viewportStartEdgeTouched:a}=K(e.startX,e.shiftX,Y.innerWidth);if(!re||!i){if(!me&&d&&d.length>1){if(n)return void(fe.current=!0);if(!i)return;if(!a&&(r=e.originalEvent.target,f(r).some((e=>"scrollLeft"in e&&e.scrollLeft>0))))return void(fe.current=!0);if(q&&"prevent"===q(le))return void(fe.current=!0);null!==le&&(E(Z),J.current[le]=null==ee?void 0:ee.getScroll().y),he(!0),ke(e.startX),Oe(le),Se(d.slice(-2)[0])}var r;me&&(e.shiftX<0?ge(0):e.shiftX>Y.innerWidth-Ve?ge(Y.innerWidth):ge(e.shiftX))}}:ae===x.IOS?e=>{if(Ee)return;const{swipeBackTriggered:n,viewportStartEdgeTouched:i,viewportEndEdgeTouched:a}=K(e.startX,e.shiftX,Y.innerWidth);(i||a)&&n&&We(!0)}:void 0,onEnd:Ke?e=>{var n;if(fe.current=!1,me){const i=be/e.duration*1e3;0===be?ze():be>=(null!=(n=Y.innerWidth)?n:0)?Ue():i>250||be>=Y.innerWidth/2?Be(2):Be(1)}}:void 0},n(Qe,i(Re))),s("div",{className:M.View__panels},Ce.map((e=>{var n;const i=m(e.props),a=re&&i===(_e?ve:we),r=i===ve||i===xe||i===ye||i===we&&_e;return s("div",{className:P(M.View__panel,i===le&&M["View__panel--active"],i===ve&&M["View__panel--prev"],i===we&&M["View__panel--next"],i===xe&&M["View__panel--swipe-back-prev"],i===ye&&M["View__panel--swipe-back-next"],2===Te&&M["View__panel--swipe-back-success"],1===Te&&M["View__panel--swipe-back-failed"]),onAnimationEnd:a?qe:void 0,ref:e=>void 0!==i&&(R.current[i]=e),style:He(i),key:i},ae===x.IOS&&s("div",{className:M["View__panel-overlay"],style:Je(i)}),s("div",{className:M["View__panel-in"],style:{marginTop:r?-(null!=(n=J.current[i])?n:0):void 0}},s(A,{isBack:me||_e},s($,{entering:i===we||i===ye},e))))})))));var Qe,Re};export{F as V};
