import{c as P,h as te,a as re,b as Y,g as ae,Q as E}from"./QBtn.691f0b72.js";import{r as y,j as U,o as I,k as W,n as oe,l as G,h as w,g as $,m as A,i as ne,p as T,q as K,c as h,w as x,s as le,t as se,u as F,a as ue,_ as ce,v as de,x as fe,y as M,z as ve,A as L,d as S,B as v,C as Q,D as f,E as k,R as b,G as he,H as ge}from"./index.c10b1f5c.js";function Ce(){const e=y(!U.value);return e.value===!1&&I(()=>{e.value=!0}),e}const ie=typeof ResizeObserver!="undefined",J=ie===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var D=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let l=null,t,n={width:-1,height:-1};function u(s){s===!0||e.debounce===0||e.debounce==="0"?c():l===null&&(l=setTimeout(c,e.debounce))}function c(){if(l!==null&&(clearTimeout(l),l=null),t){const{offsetWidth:s,offsetHeight:r}=t;(s!==n.width||r!==n.height)&&(n={width:s,height:r},a("resize",n))}}const{proxy:p}=$();if(ie===!0){let s;const r=g=>{t=p.$el.parentNode,t?(s=new ResizeObserver(u),s.observe(t),c()):g!==!0&&G(()=>{r(!0)})};return I(()=>{r()}),W(()=>{l!==null&&clearTimeout(l),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),oe}else{let g=function(){l!==null&&(clearTimeout(l),l=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",u,A.passive),r=void 0)},m=function(){g(),t&&t.contentDocument&&(r=t.contentDocument.defaultView,r.addEventListener("resize",u,A.passive),c())};const s=Ce();let r;return I(()=>{G(()=>{t=p.$el,t&&m()})}),W(g),p.trigger=u,()=>{if(s.value===!0)return w("object",{style:J.style,tabindex:-1,type:"text/html",data:J.url,"aria-hidden":"true",onLoad:m})}}}}),pe=P({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:l}){const{proxy:{$q:t}}=$(),n=ne(K,T);if(n===T)return console.error("QFooter needs to be child of QLayout"),T;const u=y(parseInt(e.heightHint,10)),c=y(!0),p=y(U.value===!0||n.isContainer.value===!0?0:window.innerHeight),s=h(()=>e.reveal===!0||n.view.value.indexOf("F")>-1||t.platform.is.ios&&n.isContainer.value===!0),r=h(()=>n.isContainer.value===!0?n.containerHeight.value:p.value),g=h(()=>{if(e.modelValue!==!0)return 0;if(s.value===!0)return c.value===!0?u.value:0;const o=n.scroll.value.position+r.value+u.value-n.height.value;return o>0?o:0}),m=h(()=>e.modelValue!==!0||s.value===!0&&c.value!==!0),z=h(()=>e.modelValue===!0&&m.value===!0&&e.reveal===!0),C=h(()=>"q-footer q-layout__section--marginal "+(s.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(m.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(s.value!==!0?" hidden":""):"")),q=h(()=>{const o=n.rows.value.bottom,d={};return o[0]==="l"&&n.left.space===!0&&(d[t.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),o[2]==="r"&&n.right.space===!0&&(d[t.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),d});function _(o,d){n.update("footer",o,d)}function H(o,d){o.value!==d&&(o.value=d)}function O({height:o}){H(u,o),_("size",o)}function V(){if(e.reveal!==!0)return;const{direction:o,position:d,inflectionPoint:R}=n.scroll.value;H(c,o==="up"||d-R<100||n.height.value-r.value-d-u.value<300)}function B(o){z.value===!0&&H(c,!0),l("focusin",o)}x(()=>e.modelValue,o=>{_("space",o),H(c,!0),n.animate()}),x(g,o=>{_("offset",o)}),x(()=>e.reveal,o=>{o===!1&&H(c,e.modelValue)}),x(c,o=>{n.animate(),l("reveal",o)}),x([u,n.scroll,n.height],V),x(()=>t.screen.height,o=>{n.isContainer.value!==!0&&H(p,o)});const i={};return n.instances.footer=i,e.modelValue===!0&&_("size",u.value),_("space",e.modelValue),_("offset",g.value),W(()=>{n.instances.footer===i&&(n.instances.footer=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const o=te(a.default,[w(D,{debounce:0,onResize:O})]);return e.elevated===!0&&o.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:C.value,style:q.value,onFocusin:B},o)}}}),me=P({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:l}}=$(),t=ne(K,T);if(t===T)return console.error("QPageContainer needs to be child of QLayout"),T;le(se,!0);const n=h(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>w("div",{class:"q-page-container",style:n.value},re(a.default))}});const we=[null,document,document.body,document.scrollingElement,document.documentElement];function _e(e,a){let l=ae(a);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return we.includes(l)?window:l}function ye(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function be(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let Z;function N(){if(Z!==void 0)return Z;const e=document.createElement("p"),a=document.createElement("div");Y(e,{width:"100%",height:"200px"}),Y(a,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),a.appendChild(e),document.body.appendChild(a);const l=e.offsetWidth;a.style.overflow="scroll";let t=e.offsetWidth;return l===t&&(t=a.clientWidth),a.remove(),Z=l-t,Z}const{passive:ee}=A,xe=["both","horizontal","vertical"];var ze=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>xe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:a}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,n,u;x(()=>e.scrollTarget,()=>{s(),p()});function c(){t!==null&&t();const m=Math.max(0,ye(n)),z=be(n),C={top:m-l.position.top,left:z-l.position.left};if(e.axis==="vertical"&&C.top===0||e.axis==="horizontal"&&C.left===0)return;const q=Math.abs(C.top)>=Math.abs(C.left)?C.top<0?"up":"down":C.left<0?"left":"right";l.position={top:m,left:z},l.directionChanged=l.direction!==q,l.delta=C,l.directionChanged===!0&&(l.direction=q,l.inflectionPoint=l.position),a("scroll",{...l})}function p(){n=_e(u,e.scrollTarget),n.addEventListener("scroll",r,ee),r(!0)}function s(){n!==void 0&&(n.removeEventListener("scroll",r,ee),n=void 0)}function r(m){if(m===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[z,C]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{C(z),t=null}}}const{proxy:g}=$();return x(()=>g.$q.lang.rtl,c),I(()=>{u=g.$el.parentNode,p()}),W(()=>{t!==null&&t(),s()}),Object.assign(g,{trigger:r,getPosition:()=>l}),oe}}),He=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:l}){const{proxy:{$q:t}}=$(),n=y(null),u=y(t.screen.height),c=y(e.container===!0?0:t.screen.width),p=y({position:0,direction:"down",inflectionPoint:0}),s=y(0),r=y(U.value===!0?0:N()),g=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),m=h(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=h(()=>r.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),C=h(()=>r.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function q(i){if(e.container===!0||document.qScrollPrevented!==!0){const o={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};p.value=o,e.onScroll!==void 0&&l("scroll",o)}}function _(i){const{height:o,width:d}=i;let R=!1;u.value!==o&&(R=!0,u.value=o,e.onScrollHeight!==void 0&&l("scrollHeight",o),O()),c.value!==d&&(R=!0,c.value=d),R===!0&&e.onResize!==void 0&&l("resize",i)}function H({height:i}){s.value!==i&&(s.value=i,O())}function O(){if(e.container===!0){const i=u.value>s.value?N():0;r.value!==i&&(r.value=i)}}let V=null;const B={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:n,height:u,containerHeight:s,scrollbarWidth:r,totalWidth:h(()=>c.value+r.value),rows:h(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:F({size:0,offset:0,space:!1}),right:F({size:300,offset:0,space:!1}),footer:F({size:0,offset:0,space:!1}),left:F({size:300,offset:0,space:!1}),scroll:p,animate(){V!==null?clearTimeout(V):document.body.classList.add("q-body--layout-animate"),V=setTimeout(()=>{V=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,o,d){B[i][o]=d}};if(le(K,B),N()>0){let d=function(){i=null,o.classList.remove("hide-scrollbar")},R=function(){if(i===null){if(o.scrollHeight>t.screen.height)return;o.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(d,300)},j=function(X){i!==null&&X==="remove"&&(clearTimeout(i),d()),window[`${X}EventListener`]("resize",R)},i=null;const o=document.body;x(()=>e.container!==!0?"add":"remove",j),e.container!==!0&&j("add"),ue(()=>{j("remove")})}return()=>{const i=te(a.default,[w(ze,{onScroll:q}),w(D,{onResize:_})]),o=w("div",{class:g.value,style:m.value,ref:e.container===!0?void 0:n,tabindex:-1},i);return e.container===!0?w("div",{class:"q-layout-container overflow-hidden",ref:n},[w(D,{onResize:H}),w("div",{class:"absolute-full",style:z.value},[w("div",{class:"scroll",style:C.value},[o])])]):o}}});const Le=e=>(he("data-v-1a568d40"),e=e(),ge(),e),Se={class:"column"},Re={width:"36",height:"36",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},qe=["fill"],Ve={class:"column"},Te={width:"36",height:"36",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ee=["fill"],Me=Le(()=>v("div",null,[v("svg",{class:"absolute-center",width:"44",height:"44",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[v("path",{d:"M62.5 62.5L87.5 87.5M41.6667 70.8333C25.5584 70.8333 12.5 57.775 12.5 41.6667C12.5 25.5584 25.5584 12.5 41.6667 12.5C57.775 12.5 70.8333 25.5584 70.8333 41.6667C70.8333 57.775 57.775 70.8333 41.6667 70.8333Z",stroke:"var(--q-accent)","stroke-width":"8","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),Pe={class:"column"},$e={width:"36",height:"36",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Oe=["fill"],Be={class:"column"},Fe={width:"36",height:"36",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Qe=["fill"],ke=["fill"],Ze={__name:"MainLayout",setup(e){const a=de();return(l,t)=>{const n=fe("router-view");return M(),ve(He,{view:"lhr Lpr fFf"},{default:L(()=>[S(pe,{bordered:"",class:"row justify-around q-pt-sm q-pb-md"},{default:L(()=>[S(E,{flat:"","no-caps":"",to:"/home"},{default:L(()=>[v("div",Se,[(M(),Q("svg",Re,[v("path",{fill:f(a).currentRoute._value.path===f(b).HOME?"var(--q-accent)":"var(--q-secondary)","fill-rule":"evenodd","clip-rule":"evenodd",d:"M58.3048 14.3078C53.5685 10.0979 46.4318 10.0979 41.6956 14.3078L9.73205 42.72C8.01209 44.2487 7.85717 46.8825 9.38601 48.6025C10.9148 50.322 13.5485 50.477 15.2684 48.9483L16.6669 47.7054V71.1083C16.6667 74.802 16.6665 77.9845 17.0091 80.5333C17.3763 83.2645 18.2045 85.8829 20.328 88.0062C22.4516 90.13 25.0698 90.9579 27.8011 91.3254C30.3497 91.6679 33.5322 91.6675 37.2259 91.6675H62.7743C66.4681 91.6675 69.6506 91.6679 72.1993 91.3254C74.9306 90.9579 77.5489 90.13 79.6722 88.0062C81.796 85.8829 82.6239 83.2645 82.9914 80.5333C83.3339 77.9845 83.3339 74.802 83.3335 71.1087V47.7054L84.7318 48.9483C86.4518 50.477 89.0856 50.322 90.6143 48.6025C92.1431 46.8825 91.9885 44.2487 90.2685 42.72L58.3048 14.3078ZM50.0002 66.6675C47.6989 66.6675 45.8335 68.5329 45.8335 70.8341V79.1675C45.8335 81.4687 43.9681 83.3341 41.6668 83.3341C39.3657 83.3341 37.5002 81.4687 37.5002 79.1675V70.8341C37.5002 63.9304 43.0964 58.3341 50.0002 58.3341C56.9039 58.3341 62.5002 63.9304 62.5002 70.8341V79.1675C62.5002 81.4687 60.6348 83.3341 58.3335 83.3341C56.0323 83.3341 54.1668 81.4687 54.1668 79.1675V70.8341C54.1668 68.5329 52.3014 66.6675 50.0002 66.6675Z"},null,8,qe)])),v("span",{class:k(f(a).currentRoute._value.path===f(b).HOME?"text-accent":"text-secondary")},"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",2)])]),_:1}),S(E,{flat:"","no-caps":"",to:"/chats"},{default:L(()=>[v("div",Ve,[(M(),Q("svg",Te,[v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M29.1668 41.6673C29.1668 39.3662 31.0323 37.5007 33.3335 37.5007H33.3752C35.6763 37.5007 37.5418 39.3662 37.5418 41.6673C37.5418 43.9686 35.6763 45.834 33.3752 45.834H33.3335C31.0323 45.834 29.1668 43.9686 29.1668 41.6673ZM45.8335 41.6673C45.8335 39.3662 47.6989 37.5007 50.0002 37.5007H50.0418C52.3431 37.5007 54.2085 39.3662 54.2085 41.6673C54.2085 43.9686 52.3431 45.834 50.0418 45.834H50.0002C47.6989 45.834 45.8335 43.9686 45.8335 41.6673ZM66.6668 37.5007C64.3656 37.5007 62.5002 39.3662 62.5002 41.6673C62.5002 43.9686 64.3656 45.834 66.6668 45.834H66.7085C69.0098 45.834 70.8752 43.9686 70.8752 41.6673C70.8752 39.3662 69.0098 37.5007 66.7085 37.5007H66.6668ZM28.8925 8.33399C28.9837 8.33399 29.0751 8.33399 29.1668 8.33399H71.1077C74.8014 8.33379 77.9839 8.33362 80.5327 8.67629C83.2639 9.04349 85.8822 9.87158 88.0056 11.9952C90.1293 14.1188 90.9573 16.7369 91.3248 19.4682C91.6673 22.0168 91.6673 25.1994 91.6668 28.8932V54.4415C91.6673 58.1352 91.6673 61.3177 91.3248 63.8665C90.9573 66.5977 90.1293 69.2161 88.0056 71.3394C85.8822 73.4632 83.2639 74.2911 80.5327 74.6586C77.9839 75.0011 74.8014 75.0011 71.1077 75.0007H58.3335C57.8602 75.0007 57.3989 75.1507 57.016 75.429L38.6488 88.7869C34.7026 91.6569 29.1668 88.8382 29.1668 83.9586V75.0007C25.942 75.0007 22.6718 75.0894 19.4677 74.6586C16.7364 74.2911 14.1183 73.4632 11.9947 71.3394C9.87109 69.2161 9.04301 66.5977 8.6758 63.8665C8.33313 61.3177 8.3333 58.1352 8.33351 54.4415V29.1673C8.33351 29.0756 8.33351 28.9842 8.33351 28.893C8.3333 25.1994 8.33313 22.0168 8.6758 19.4682C9.04301 16.7369 9.87109 14.1188 11.9947 11.9952C14.1183 9.87158 16.7364 9.04349 19.4677 8.67629C22.0163 8.33362 25.1989 8.33379 28.8925 8.33399Z",fill:f(a).currentRoute._value.path===f(b).CHATS?"var(--q-accent)":"var(--q-secondary)"},null,8,Ee)])),v("span",{class:k(f(a).currentRoute._value.path===f(b).CHATS?"text-accent":"text-secondary")},"\u0427\u0430\u0442\u044B",2)])]),_:1}),S(E,{round:"",flat:"",class:"search_btn"},{default:L(()=>[Me]),_:1}),S(E,{flat:"","no-caps":"",to:"/check-ups"},{default:L(()=>[v("div",Pe,[(M(),Q("svg",$e,[v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.8335 12.5007V18.1135C18.1291 18.9187 15.735 20.1698 13.7855 22.1193C11.4255 24.4793 10.089 27.4908 9.32791 30.9156C8.57733 34.2931 8.3335 38.3155 8.3335 42.9673V65.3673C8.3335 70.019 8.57733 74.0415 9.32791 77.419C10.089 80.844 11.4255 83.8552 13.7855 86.2152C16.1455 88.5752 19.157 89.9119 22.5818 90.6727C25.9592 91.4236 29.9817 91.6673 34.6335 91.6673H65.3668C70.0185 91.6673 74.041 91.4236 77.4185 90.6727C80.8435 89.9119 83.8547 88.5752 86.2147 86.2152C88.5747 83.8552 89.9114 80.844 90.6722 77.419C91.4231 74.0415 91.6668 70.019 91.6668 65.3673V42.9673C91.6668 38.3155 91.4231 34.2931 90.6722 30.9156C89.9114 27.4908 88.5747 24.4793 86.2147 22.1193C84.2652 20.1698 81.8714 18.9187 79.1668 18.1135V12.5007C79.1668 10.1995 77.3014 8.33398 75.0002 8.33398C72.6989 8.33398 70.8335 10.1995 70.8335 12.5007V16.8122C69.1206 16.7093 67.2981 16.6673 65.3668 16.6673H34.6335C32.7025 16.6673 30.8799 16.7093 29.1668 16.8122V12.5007C29.1668 10.1995 27.3013 8.33398 25.0002 8.33398C22.699 8.33398 20.8335 10.1995 20.8335 12.5007ZM25.0002 37.5007C25.0002 35.1995 26.8657 33.334 29.1668 33.334H70.8335C73.1347 33.334 75.0002 35.1995 75.0002 37.5007C75.0002 39.8018 73.1347 41.6673 70.8335 41.6673H29.1668C26.8657 41.6673 25.0002 39.8018 25.0002 37.5007Z",fill:f(a).currentRoute._value.path===f(b).CHECKUPS?"var(--q-accent)":"var(--q-secondary)"},null,8,Oe)])),v("span",{class:k(f(a).currentRoute._value.path===f(b).CHECKUPS?"text-accent":"text-secondary")},"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0438",2)])]),_:1}),S(E,{flat:"","no-caps":"",to:"/profile"},{default:L(()=>[v("div",Be,[(M(),Q("svg",Fe,[v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M25 33.334C25 19.5269 36.1929 8.33398 50 8.33398C63.8071 8.33398 75 19.5269 75 33.334C75 47.1411 63.8071 58.334 50 58.334C36.1929 58.334 25 47.1411 25 33.334Z",fill:f(a).currentRoute._value.path===f(b).PROFILE?"var(--q-accent)":"var(--q-secondary)"},null,8,Qe),v("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.6289 70.4284C29.3994 67.5901 38.4304 66.668 50 66.668C61.5458 66.668 70.5629 67.5863 77.3275 70.4101C84.5883 73.4409 89.045 78.5901 91.4208 86.0792C92.3033 88.8626 90.2158 91.668 87.33 91.668H12.6441C9.77007 91.668 7.69494 88.875 8.5704 86.1071C10.939 78.6184 15.3799 73.4671 22.6289 70.4284Z",fill:f(a).currentRoute._value.path===f(b).PROFILE?"var(--q-accent)":"var(--q-secondary)"},null,8,ke)])),v("span",{class:k(f(a).currentRoute._value.path===f(b).PROFILE?"text-accent":"text-secondary")},"\u041F\u0440\u043E\u0444\u0438\u043B\u044C",2)])]),_:1})]),_:1}),S(me,null,{default:L(()=>[S(n)]),_:1})]),_:1})}}};var je=ce(Ze,[["__scopeId","data-v-1a568d40"]]);export{je as default};
