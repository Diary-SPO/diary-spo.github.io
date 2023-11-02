import{_ as t,u as e,a as n,o as r,E as a,b as s,G as i,H as o,P as c,L as u,d as l}from"./index-716dd2fc.js";import{h as d,p as h,T as f,M as m,L as g,N as $,P as y,Q as p}from"./@vkontakte/icons-d137ec12.js";import{B as S}from"./Button-9144f7df.js";import{V as D}from"./View-23bfed7f.js";import{P as v}from"./Panel-eb4ddde2.js";import{B as w}from"./ButtonGroup-80014e6a.js";import{I as M}from"./IconButton-634e1b68.js";import{g as k,P as O}from"./getPerformance-26cf533a.js";import{c as _,g as b}from"./_commonjsHelpers-02d3be64.js";import{m as C,h as I}from"./makeRequest-d3f44c26.js";import{P as N}from"./PanelHeaderWithBack-cc3484e7.js";import{u as j}from"./useRateLimitExceeded-dd92afa7.js";import{u as L}from"./useSnackbar-8d09d7d9.js";import"./Snackbar-3177c796.js";var J={exports:{}};const x=b(J.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",a="second",s="minute",i="hour",o="day",c="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,u),s=n-a<0,i=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-a)/(s?a-i:i-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:c,d:o,D:h,h:i,m:s,s:a,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},S="en",D={};D[S]=$;var v="$isDayjsObject",w=function(t){return t instanceof _||!(!t||!t[v])},M=function t(e,n,r){var a;if(!e)return S;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(a=s),n&&(D[s]=n,a=s);var i=e.split("-");if(!a&&i.length>1)return t(i[0])}else{var o=e.name;D[o]=e,a=o}return!r&&a&&(S=a),a||!r&&S},k=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=p;O.l=M,O.i=w,O.w=function(t,e){return k(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function $(t){this.$L=M(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[v]=!0}var y=$.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var a=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=k(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return k(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<k(t)},y.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!O.u(e)||e,l=O.p(t),f=function(t,e){var a=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?a:a.endOf(o)},m=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,$=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(l){case d:return r?f(1,0):f(31,11);case u:return r?f(1,$):f(0,$+1);case c:var S=this.$locale().weekStart||0,D=(g<S?g+7:g)-S;return f(r?y-D:y+(6-D),$);case o:case h:return m(p+"Hours",0);case i:return m(p+"Minutes",1);case s:return m(p+"Seconds",2);case a:return m(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,c=O.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[h]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[i]=l+"Hours",n[s]=l+"Minutes",n[a]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===d){var g=this.clone().set(h,1);g.$d[f](m),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[O.p(t)]()},y.add=function(r,l){var h,f=this;r=Number(r);var m=O.p(l),g=function(t){var e=k(f);return O.w(e.date(e.date()+Math.round(t*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===o)return g(1);if(m===c)return g(7);var $=(h={},h[s]=e,h[i]=n,h[a]=t,h)[m]||1,y=this.$d.getTime()+r*$;return O.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=O.z(this),s=this.$H,i=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=n.meridiem,d=function(t,n,a,s){return t&&(t[n]||t(e,r))||a[n].slice(0,s)},h=function(t){return O.s(s%12||12,t,"0")},m=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return O.s(e.$y,4,"0");case"M":return o+1;case"MM":return O.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,u,3);case"MMMM":return d(u,o);case"D":return e.$D;case"DD":return O.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,c,2);case"ddd":return d(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(s);case"HH":return O.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(s,i,!0);case"A":return m(s,i,!1);case"m":return String(i);case"mm":return O.s(i,2,"0");case"s":return String(e.$s);case"ss":return O.s(e.$s,2,"0");case"SSS":return O.s(e.$ms,3,"0");case"Z":return a}return null}(t)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var m,g=this,$=O.p(h),y=k(r),p=(y.utcOffset()-this.utcOffset())*e,S=this-y,D=function(){return O.m(g,y)};switch($){case d:m=D()/12;break;case u:m=D();break;case l:m=D()/3;break;case c:m=(S-p)/6048e5;break;case o:m=(S-p)/864e5;break;case i:m=S/n;break;case s:m=S/e;break;case a:m=S/t;break;default:m=S}return f?m:O.a(m)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return D[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},$}(),b=_.prototype;return k.prototype=b,[["$ms",r],["$s",a],["$m",s],["$H",i],["$W",o],["$M",u],["$y",d],["$D",h]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),k.extend=function(t,e){return t.$i||(t(e,_,k),t.$i=!0),k},k.locale=M,k.isDayjs=w,k.unix=function(t){return k(1e3*t)},k.en=D[S],k.Ls=D,k.p={},k}()),T=t=>`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`;function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e%=7;var n=x(t),r=n.day(),a=(r<e?7:0)+r-e;return n.date(n.date()-a).toDate()}function Y(t){var e=x(H(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0));return e.date(e.date()+6).toDate()}const A=async(t,e)=>{const n=localStorage.getItem("id");if(!n)return 418;t||(t=new Date),e||(e=new Date).setDate(e.getDate()+7);const r=T(t),a=T(e);return C(`/lessons/${n}/${r}/${a}`)},P=m((()=>t((()=>import("./index-19bbbfe6.js")),["assets/index-19bbbfe6.js","assets/index-716dd2fc.js","assets/@vkontakte/icons-d137ec12.js","assets/index-349a8e69.css","assets/HorizontalScroll-dc2cd0e8.js","assets/HorizontalScroll-a3414450.css","assets/Avatar-fa3f7afc.js","assets/Avatar-0ff334b4.css","assets/Caption-ba308cb2.js","assets/Caption-355cf4fe.css","assets/index-ee6d91f4.css"]))),B=m((()=>t((()=>import("./index-716dd2fc.js").then((t=>t.aY))),["assets/index-716dd2fc.js","assets/@vkontakte/icons-d137ec12.js","assets/index-349a8e69.css"]))),W=({id:t})=>{const u=new Date,l=(()=>{const[t,e]=d(0),n=()=>{const t=window.scrollY;e(t)};return h((()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[]),t})()>700,{panel:m,panelsHistory:y}=e(),_=n(),[b,C]=d(),[J,T]=d(H(u)),[W,V]=d(Y(u)),[z,F]=d(!1),[q,U]=d(!1),[Z,G]=d(null),[Q,K]=d(!1),[X,tt]=j(),[et,nt]=L(),rt=f((async(t,e)=>{const n=await A(t,e);return I(n,(()=>{F(!1),K(!1)}),tt,F,nt),n}),[J]),at=t=>{const e=t&&t.length>0?new Date(t[0].date):J,n=t&&t.length>0?new Date(t[t.length-1].date):W;T(H(e)),V(Y(n))},[st,it]=d((()=>{const t=localStorage.getItem("isCurrent");return!t||Boolean(JSON.parse(t))})),ot=f((async()=>{F(!0),K(!0),U(!1),it(!0),localStorage.setItem("isCurrent",JSON.stringify(!0));const t=new Date(W);t.setDate(t.getDate()+7);try{const e=await A(J,t),n=await k();I(e,(()=>{K(!1)}),tt,F,nt),I(n,(()=>{K(!1)}),tt,F,nt),G(n),C(e),at(e),localStorage.setItem("savedLessons",JSON.stringify(e)),localStorage.setItem("savedMarks",JSON.stringify(n))}catch(t){U(!0),nt({title:"Ошибка при попытке получить новые данные",action:"Повторить",onActionClick:ot})}finally{F(!1),K(!1)}}),[J,W]),ct=()=>nt({title:"Ошибка при попытке получить расписание",action:"Повторить",onActionClick:ot});h((()=>{const t=localStorage.getItem("savedLessons"),e=localStorage.getItem("lastRequestTime"),n=Date.now(),r=e?parseInt(e,10):0,a=n-r;if(t){C(JSON.parse(t));const e=JSON.parse(t)[0]?new Date(JSON.parse(t)[0].date):J,n=JSON.parse(t)[JSON.parse(t).length-1]?new Date(JSON.parse(t)[JSON.parse(t).length-1].date):W;T(H(e)),V(Y(n))}(async()=>{if(F(!0),U(!1),t||a<3e4)return nt({layout:"vertical",action:"Загрузить новые",onActionClick:ot,title:"Данные взяты из кеша"}),void F(!1);try{const t=await rt(J,W);C(t),localStorage.setItem("lastRequestTime",n.toString()),at(t)}catch(t){U(!0),ct()}finally{F(!1)}})()}),[]),h((()=>{const t=localStorage.getItem("savedMarks");t&&(G(JSON.parse(t)),K(!1));const e=async()=>{if(K(!0),t)K(!1);else try{const t=await k();I(t,(()=>{F(!1),K(!1)}),tt,F,nt),"number"!=typeof t&&(G(t),localStorage.setItem("savedMarks",JSON.stringify(t)))}catch(t){nt({title:"Ошибка при попытке получить оценки",action:"Повторить",icon:r(p,{}),onActionClick:e})}finally{K(!1)}};e()}),[]);const ut=async(t,e)=>{F(!0),it(!1);const n=await rt(t,e);C(n),localStorage.setItem("savedLessons",JSON.stringify(n)),F(!1)},lt=async()=>{const t=H(u),e=H(J),n=(r=Y(u),a=7,x(r).add(a,"day").toDate());var r,a;if(t.toLocaleString("default",{month:"short",day:"numeric",year:"numeric"})===e.toLocaleString("default",{month:"short",day:"numeric",year:"numeric"}))return nt({title:"Вы уже на текущей неделе"}),localStorage.setItem("isCurrent",JSON.stringify(!0)),void it(!0);F(!0);try{const e=await rt(t,n);C(e),T(t),V(n),localStorage.setItem("isCurrent",JSON.stringify(!0)),it(!0)}catch(t){ct()}finally{F(!1)}},dt=((t,e,n,r,a)=>{const[s,i]=d(0),[o,c]=d(null),u=f(((o,c)=>{localStorage.setItem("isCurrent",JSON.stringify(!1)),n(!1);const u=new Date(t),l=new Date(e);if(s>0){const t=7*s;u.setDate(u.getDate()+t),l.setDate(l.getDate()+t),i(0)}else"prev"===o?(u.setDate(u.getDate()-7),l.setDate(l.getDate()-7)):"next"===o&&(u.setDate(u.getDate()+7),l.setDate(l.getDate()+7));c(u,l),r(u),a(l)}),[s,t,e,n,r,a]);return{handleButtonClick:(t,e)=>{i((t=>t+1)),o&&clearTimeout(o);const n=setTimeout((()=>{u(t,e),i(0)}),500);c(n)}}})(J,W,it,T,V),{handleButtonClick:ht}=dt,ft=r(w,{style:{alignItems:"center",position:"relative",color:"var(--vkui--color_stroke_accent_themed)"},gap:"s",children:[r(M,{"aria-label":"Prev",onClick:()=>ht("prev",ut),children:r(g,{})}),r(S,{size:"s",mode:"secondary",onClick:()=>lt(),disabled:st,children:r(a,{tooltipContent:"Вернёт вас на текущую неделю",text:"Домой"})}),r(M,{"aria-label":"Next",onClick:()=>ht("next",ut),children:r($,{})})]}),mt=`\n  ${J.getDate()}\n  ${J.toLocaleString("default",{month:"long"}).slice(0,3)}\n    -\n    ${W.getDate()}\n    ${W.toLocaleString("default",{month:"long"}).slice(0,3)}`;return r(D,{id:t,history:y,activePanel:m,onSwipeBack:()=>_.back(),children:r(v,{nav:t,children:[r(N,{title:"Главная"}),r(O,{onRefresh:ot,isFetching:z,children:[r(s,{id:"MarksByDay",children:r(i,{header:r(o,{mode:"secondary",children:"Недавние оценки"}),children:Q?r(c,{}):r(P,{performanceData:Z})})}),r(s,{id:"ScheduleGroup",mode:"screen",children:r(i,{header:r(o,{aside:ft,mode:"secondary",style:"align-items: center",children:mt}),children:z?r(c,{size:"regular"}):r(B,{lessonsState:b})})}),q&&r(E,{onClick:ot}),l&&r(R,{}),et,X]})]})})},E=({onClick:t})=>r(l,{header:"Ошибка при загрузке",action:r(w,{mode:"vertical",align:"center",children:[r(S,{size:"s",onClick:()=>t(),children:"Попробовать снова"}),r(u,{href:"https://vk.me/dnevnik_spo",target:"_blank",children:"Сообщить о проблеме"})]})}),R=()=>r(M,{"aria-label":"scroll top",style:{position:"fixed",left:5,bottom:60},onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:r(y,{style:{transform:"rotate(-90deg)",color:"var(--vkui--color_background_accent_themed)"}})});export{W as default};
