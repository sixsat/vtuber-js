(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var Vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yg(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var t=r.default;if(typeof t=="function"){var n=function s(){var o=!1;try{o=this instanceof s}catch{}return o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var o=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(n,s,o.get?o:{enumerable:!0,get:function(){return r[s]}})}),n}var Zf={exports:{}},ru={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function bg(){if(Hd)return ru;Hd=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,l){var c=null;if(l!==void 0&&(c=""+l),o.key!==void 0&&(c=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:r,type:s,key:c,ref:o!==void 0?o:null,props:l}}return ru.Fragment=t,ru.jsx=n,ru.jsxs=n,ru}var Gd;function vg(){return Gd||(Gd=1,Zf.exports=bg()),Zf.exports}var wr=vg(),Jf={exports:{}},Xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Sg(){if(qd)return Xt;qd=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function N(H){return H===null||typeof H!="object"?null:(H=v&&H[v]||H["@@iterator"],typeof H=="function"?H:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,B={};function C(H,ht,At){this.props=H,this.context=ht,this.refs=B,this.updater=At||A}C.prototype.isReactComponent={},C.prototype.setState=function(H,ht){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,ht,"setState")},C.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function V(){}V.prototype=C.prototype;function lt(H,ht,At){this.props=H,this.context=ht,this.refs=B,this.updater=At||A}var rt=lt.prototype=new V;rt.constructor=lt,$(rt,C.prototype),rt.isPureReactComponent=!0;var Q=Array.isArray,tt={H:null,A:null,T:null,S:null,V:null},it=Object.prototype.hasOwnProperty;function bt(H,ht,At,_t,zt,ae){return At=ae.ref,{$$typeof:r,type:H,key:ht,ref:At!==void 0?At:null,props:ae}}function Tt(H,ht){return bt(H.type,ht,void 0,void 0,void 0,H.props)}function mt(H){return typeof H=="object"&&H!==null&&H.$$typeof===r}function Et(H){var ht={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(At){return ht[At]})}var Ct=/\/+/g;function Vt(H,ht){return typeof H=="object"&&H!==null&&H.key!=null?Et(""+H.key):ht.toString(36)}function $t(){}function ue(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then($t,$t):(H.status="pending",H.then(function(ht){H.status==="pending"&&(H.status="fulfilled",H.value=ht)},function(ht){H.status==="pending"&&(H.status="rejected",H.reason=ht)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function re(H,ht,At,_t,zt){var ae=typeof H;(ae==="undefined"||ae==="boolean")&&(H=null);var Bt=!1;if(H===null)Bt=!0;else switch(ae){case"bigint":case"string":case"number":Bt=!0;break;case"object":switch(H.$$typeof){case r:case t:Bt=!0;break;case y:return Bt=H._init,re(Bt(H._payload),ht,At,_t,zt)}}if(Bt)return zt=zt(H),Bt=_t===""?"."+Vt(H,0):_t,Q(zt)?(At="",Bt!=null&&(At=Bt.replace(Ct,"$&/")+"/"),re(zt,ht,At,"",function(qe){return qe})):zt!=null&&(mt(zt)&&(zt=Tt(zt,At+(zt.key==null||H&&H.key===zt.key?"":(""+zt.key).replace(Ct,"$&/")+"/")+Bt)),ht.push(zt)),1;Bt=0;var en=_t===""?".":_t+":";if(Q(H))for(var he=0;he<H.length;he++)_t=H[he],ae=en+Vt(_t,he),Bt+=re(_t,ht,At,ae,zt);else if(he=N(H),typeof he=="function")for(H=he.call(H),he=0;!(_t=H.next()).done;)_t=_t.value,ae=en+Vt(_t,he++),Bt+=re(_t,ht,At,ae,zt);else if(ae==="object"){if(typeof H.then=="function")return re(ue(H),ht,At,_t,zt);throw ht=String(H),Error("Objects are not valid as a React child (found: "+(ht==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":ht)+"). If you meant to render a collection of children, use an array instead.")}return Bt}function nt(H,ht,At){if(H==null)return H;var _t=[],zt=0;return re(H,_t,"","",function(ae){return ht.call(At,ae,zt++)}),_t}function vt(H){if(H._status===-1){var ht=H._result;ht=ht(),ht.then(function(At){(H._status===0||H._status===-1)&&(H._status=1,H._result=At)},function(At){(H._status===0||H._status===-1)&&(H._status=2,H._result=At)}),H._status===-1&&(H._status=0,H._result=ht)}if(H._status===1)return H._result.default;throw H._result}var Dt=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ht=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(ht))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function Qt(){}return Xt.Children={map:nt,forEach:function(H,ht,At){nt(H,function(){ht.apply(this,arguments)},At)},count:function(H){var ht=0;return nt(H,function(){ht++}),ht},toArray:function(H){return nt(H,function(ht){return ht})||[]},only:function(H){if(!mt(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},Xt.Component=C,Xt.Fragment=n,Xt.Profiler=o,Xt.PureComponent=lt,Xt.StrictMode=s,Xt.Suspense=p,Xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt,Xt.__COMPILER_RUNTIME={__proto__:null,c:function(H){return tt.H.useMemoCache(H)}},Xt.cache=function(H){return function(){return H.apply(null,arguments)}},Xt.cloneElement=function(H,ht,At){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var _t=$({},H.props),zt=H.key,ae=void 0;if(ht!=null)for(Bt in ht.ref!==void 0&&(ae=void 0),ht.key!==void 0&&(zt=""+ht.key),ht)!it.call(ht,Bt)||Bt==="key"||Bt==="__self"||Bt==="__source"||Bt==="ref"&&ht.ref===void 0||(_t[Bt]=ht[Bt]);var Bt=arguments.length-2;if(Bt===1)_t.children=At;else if(1<Bt){for(var en=Array(Bt),he=0;he<Bt;he++)en[he]=arguments[he+2];_t.children=en}return bt(H.type,zt,void 0,void 0,ae,_t)},Xt.createContext=function(H){return H={$$typeof:c,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:l,_context:H},H},Xt.createElement=function(H,ht,At){var _t,zt={},ae=null;if(ht!=null)for(_t in ht.key!==void 0&&(ae=""+ht.key),ht)it.call(ht,_t)&&_t!=="key"&&_t!=="__self"&&_t!=="__source"&&(zt[_t]=ht[_t]);var Bt=arguments.length-2;if(Bt===1)zt.children=At;else if(1<Bt){for(var en=Array(Bt),he=0;he<Bt;he++)en[he]=arguments[he+2];zt.children=en}if(H&&H.defaultProps)for(_t in Bt=H.defaultProps,Bt)zt[_t]===void 0&&(zt[_t]=Bt[_t]);return bt(H,ae,void 0,void 0,null,zt)},Xt.createRef=function(){return{current:null}},Xt.forwardRef=function(H){return{$$typeof:f,render:H}},Xt.isValidElement=mt,Xt.lazy=function(H){return{$$typeof:y,_payload:{_status:-1,_result:H},_init:vt}},Xt.memo=function(H,ht){return{$$typeof:d,type:H,compare:ht===void 0?null:ht}},Xt.startTransition=function(H){var ht=tt.T,At={};tt.T=At;try{var _t=H(),zt=tt.S;zt!==null&&zt(At,_t),typeof _t=="object"&&_t!==null&&typeof _t.then=="function"&&_t.then(Qt,Dt)}catch(ae){Dt(ae)}finally{tt.T=ht}},Xt.unstable_useCacheRefresh=function(){return tt.H.useCacheRefresh()},Xt.use=function(H){return tt.H.use(H)},Xt.useActionState=function(H,ht,At){return tt.H.useActionState(H,ht,At)},Xt.useCallback=function(H,ht){return tt.H.useCallback(H,ht)},Xt.useContext=function(H){return tt.H.useContext(H)},Xt.useDebugValue=function(){},Xt.useDeferredValue=function(H,ht){return tt.H.useDeferredValue(H,ht)},Xt.useEffect=function(H,ht,At){var _t=tt.H;if(typeof At=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return _t.useEffect(H,ht)},Xt.useId=function(){return tt.H.useId()},Xt.useImperativeHandle=function(H,ht,At){return tt.H.useImperativeHandle(H,ht,At)},Xt.useInsertionEffect=function(H,ht){return tt.H.useInsertionEffect(H,ht)},Xt.useLayoutEffect=function(H,ht){return tt.H.useLayoutEffect(H,ht)},Xt.useMemo=function(H,ht){return tt.H.useMemo(H,ht)},Xt.useOptimistic=function(H,ht){return tt.H.useOptimistic(H,ht)},Xt.useReducer=function(H,ht,At){return tt.H.useReducer(H,ht,At)},Xt.useRef=function(H){return tt.H.useRef(H)},Xt.useState=function(H){return tt.H.useState(H)},Xt.useSyncExternalStore=function(H,ht,At){return tt.H.useSyncExternalStore(H,ht,At)},Xt.useTransition=function(){return tt.H.useTransition()},Xt.version="19.1.0",Xt}var Kd;function Jh(){return Kd||(Kd=1,Jf.exports=Sg()),Jf.exports}var Mr=Jh(),th={exports:{}},au={},eh={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function wg(){return Yd||(Yd=1,function(r){function t(nt,vt){var Dt=nt.length;nt.push(vt);t:for(;0<Dt;){var Qt=Dt-1>>>1,H=nt[Qt];if(0<o(H,vt))nt[Qt]=vt,nt[Dt]=H,Dt=Qt;else break t}}function n(nt){return nt.length===0?null:nt[0]}function s(nt){if(nt.length===0)return null;var vt=nt[0],Dt=nt.pop();if(Dt!==vt){nt[0]=Dt;t:for(var Qt=0,H=nt.length,ht=H>>>1;Qt<ht;){var At=2*(Qt+1)-1,_t=nt[At],zt=At+1,ae=nt[zt];if(0>o(_t,Dt))zt<H&&0>o(ae,_t)?(nt[Qt]=ae,nt[zt]=Dt,Qt=zt):(nt[Qt]=_t,nt[At]=Dt,Qt=At);else if(zt<H&&0>o(ae,Dt))nt[Qt]=ae,nt[zt]=Dt,Qt=zt;else break t}}return vt}function o(nt,vt){var Dt=nt.sortIndex-vt.sortIndex;return Dt!==0?Dt:nt.id-vt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],d=[],y=1,v=null,N=3,A=!1,$=!1,B=!1,C=!1,V=typeof setTimeout=="function"?setTimeout:null,lt=typeof clearTimeout=="function"?clearTimeout:null,rt=typeof setImmediate<"u"?setImmediate:null;function Q(nt){for(var vt=n(d);vt!==null;){if(vt.callback===null)s(d);else if(vt.startTime<=nt)s(d),vt.sortIndex=vt.expirationTime,t(p,vt);else break;vt=n(d)}}function tt(nt){if(B=!1,Q(nt),!$)if(n(p)!==null)$=!0,it||(it=!0,Vt());else{var vt=n(d);vt!==null&&re(tt,vt.startTime-nt)}}var it=!1,bt=-1,Tt=5,mt=-1;function Et(){return C?!0:!(r.unstable_now()-mt<Tt)}function Ct(){if(C=!1,it){var nt=r.unstable_now();mt=nt;var vt=!0;try{t:{$=!1,B&&(B=!1,lt(bt),bt=-1),A=!0;var Dt=N;try{e:{for(Q(nt),v=n(p);v!==null&&!(v.expirationTime>nt&&Et());){var Qt=v.callback;if(typeof Qt=="function"){v.callback=null,N=v.priorityLevel;var H=Qt(v.expirationTime<=nt);if(nt=r.unstable_now(),typeof H=="function"){v.callback=H,Q(nt),vt=!0;break e}v===n(p)&&s(p),Q(nt)}else s(p);v=n(p)}if(v!==null)vt=!0;else{var ht=n(d);ht!==null&&re(tt,ht.startTime-nt),vt=!1}}break t}finally{v=null,N=Dt,A=!1}vt=void 0}}finally{vt?Vt():it=!1}}}var Vt;if(typeof rt=="function")Vt=function(){rt(Ct)};else if(typeof MessageChannel<"u"){var $t=new MessageChannel,ue=$t.port2;$t.port1.onmessage=Ct,Vt=function(){ue.postMessage(null)}}else Vt=function(){V(Ct,0)};function re(nt,vt){bt=V(function(){nt(r.unstable_now())},vt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(nt){nt.callback=null},r.unstable_forceFrameRate=function(nt){0>nt||125<nt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Tt=0<nt?Math.floor(1e3/nt):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_next=function(nt){switch(N){case 1:case 2:case 3:var vt=3;break;default:vt=N}var Dt=N;N=vt;try{return nt()}finally{N=Dt}},r.unstable_requestPaint=function(){C=!0},r.unstable_runWithPriority=function(nt,vt){switch(nt){case 1:case 2:case 3:case 4:case 5:break;default:nt=3}var Dt=N;N=nt;try{return vt()}finally{N=Dt}},r.unstable_scheduleCallback=function(nt,vt,Dt){var Qt=r.unstable_now();switch(typeof Dt=="object"&&Dt!==null?(Dt=Dt.delay,Dt=typeof Dt=="number"&&0<Dt?Qt+Dt:Qt):Dt=Qt,nt){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=Dt+H,nt={id:y++,callback:vt,priorityLevel:nt,startTime:Dt,expirationTime:H,sortIndex:-1},Dt>Qt?(nt.sortIndex=Dt,t(d,nt),n(p)===null&&nt===n(d)&&(B?(lt(bt),bt=-1):B=!0,re(tt,Dt-Qt))):(nt.sortIndex=H,t(p,nt),$||A||($=!0,it||(it=!0,Vt()))),nt},r.unstable_shouldYield=Et,r.unstable_wrapCallback=function(nt){var vt=N;return function(){var Dt=N;N=vt;try{return nt.apply(this,arguments)}finally{N=Dt}}}}(nh)),nh}var Xd;function Tg(){return Xd||(Xd=1,eh.exports=wg()),eh.exports}var rh={exports:{}},$n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function Ng(){if(Pd)return $n;Pd=1;var r=Jh();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)d+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,d,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:y}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$n.createPortal=function(p,d){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,y)},$n.flushSync=function(p){var d=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=d,s.p=y,s.d.f()}},$n.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(p,d))},$n.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},$n.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var y=d.as,v=f(y,d.crossOrigin),N=typeof d.integrity=="string"?d.integrity:void 0,A=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;y==="style"?s.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:N,fetchPriority:A}):y==="script"&&s.d.X(p,{crossOrigin:v,integrity:N,fetchPriority:A,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},$n.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var y=f(d.as,d.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(p)},$n.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var y=d.as,v=f(y,d.crossOrigin);s.d.L(p,y,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},$n.preloadModule=function(p,d){if(typeof p=="string")if(d){var y=f(d.as,d.crossOrigin);s.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(p)},$n.requestFormReset=function(p){s.d.r(p)},$n.unstable_batchedUpdates=function(p,d){return p(d)},$n.useFormState=function(p,d,y){return c.H.useFormState(p,d,y)},$n.useFormStatus=function(){return c.H.useHostTransitionStatus()},$n.version="19.1.0",$n}var Wd;function Eg(){if(Wd)return rh.exports;Wd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),rh.exports=Ng(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function _g(){if(Qd)return au;Qd=1;var r=Tg(),t=Jh(),n=Eg();function s(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)a+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var a=e,i=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(i=a.return),e=a.return;while(e)}return a.tag===3?i:null}function c(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var a=e.alternate;if(!a){if(a=l(e),a===null)throw Error(s(188));return a!==e?null:e}for(var i=e,u=a;;){var h=i.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){i=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===i)return f(h),e;if(m===u)return f(h),a;m=m.sibling}throw Error(s(188))}if(i.return!==u.return)i=h,u=m;else{for(var _=!1,O=h.child;O;){if(O===i){_=!0,i=h,u=m;break}if(O===u){_=!0,u=h,i=m;break}O=O.sibling}if(!_){for(O=m.child;O;){if(O===i){_=!0,i=m,u=h;break}if(O===u){_=!0,u=m,i=h;break}O=O.sibling}if(!_)throw Error(s(189))}}if(i.alternate!==u)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:a}function d(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=d(e),a!==null)return a;e=e.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),lt=Symbol.for("react.consumer"),rt=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),bt=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),mt=Symbol.for("react.activity"),Et=Symbol.for("react.memo_cache_sentinel"),Ct=Symbol.iterator;function Vt(e){return e===null||typeof e!="object"?null:(e=Ct&&e[Ct]||e["@@iterator"],typeof e=="function"?e:null)}var $t=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$t?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case C:return"Profiler";case B:return"StrictMode";case tt:return"Suspense";case it:return"SuspenseList";case mt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case rt:return(e.displayName||"Context")+".Provider";case lt:return(e._context.displayName||"Context")+".Consumer";case Q:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bt:return a=e.displayName||null,a!==null?a:ue(e.type)||"Memo";case Tt:a=e._payload,e=e._init;try{return ue(e(a))}catch{}}return null}var re=Array.isArray,nt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Dt={pending:!1,data:null,method:null,action:null},Qt=[],H=-1;function ht(e){return{current:e}}function At(e){0>H||(e.current=Qt[H],Qt[H]=null,H--)}function _t(e,a){H++,Qt[H]=e.current,e.current=a}var zt=ht(null),ae=ht(null),Bt=ht(null),en=ht(null);function he(e,a){switch(_t(Bt,a),_t(ae,e),_t(zt,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?gd(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=gd(a),e=yd(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}At(zt),_t(zt,e)}function qe(){At(zt),At(ae),At(Bt)}function En(e){e.memoizedState!==null&&_t(en,e);var a=zt.current,i=yd(a,e.type);a!==i&&(_t(ae,e),_t(zt,i))}function _e(e){ae.current===e&&(At(zt),At(ae)),en.current===e&&(At(en),Zo._currentValue=Dt)}var sr=Object.prototype.hasOwnProperty,_r=r.unstable_scheduleCallback,jr=r.unstable_cancelCallback,In=r.unstable_shouldYield,Yn=r.unstable_requestPaint,nn=r.unstable_now,_n=r.unstable_getCurrentPriorityLevel,jn=r.unstable_ImmediatePriority,aa=r.unstable_UserBlockingPriority,Re=r.unstable_NormalPriority,sa=r.unstable_LowPriority,ja=r.unstable_IdlePriority,ks=r.log,xr=r.unstable_setDisableYieldValue,ln=null,Ke=null;function Be(e){if(typeof ks=="function"&&xr(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(ln,e)}catch{}}var Ye=Math.clz32?Math.clz32:Si,Ds=Math.log,$s=Math.LN2;function Si(e){return e>>>=0,e===0?32:31-(Ds(e)/$s|0)|0}var ia=256,Fe=4194304;function de(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ae(e,a,i){var u=e.pendingLanes;if(u===0)return 0;var h=0,m=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var O=u&134217727;return O!==0?(u=O&~m,u!==0?h=de(u):(_&=O,_!==0?h=de(_):i||(i=O&~e,i!==0&&(h=de(i))))):(O=u&~m,O!==0?h=de(O):_!==0?h=de(_):i||(i=u&~e,i!==0&&(h=de(i)))),h===0?0:a!==0&&a!==h&&(a&m)===0&&(m=h&-h,i=a&-a,m>=i||m===32&&(i&4194048)!==0)?a:h}function Xe(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function oa(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function me(){var e=ia;return ia<<=1,(ia&4194048)===0&&(ia=256),e}function Fr(){var e=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),e}function ua(e){for(var a=[],i=0;31>i;i++)a.push(e);return a}function xn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Cn(e,a,i,u,h,m){var _=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var O=e.entanglements,I=e.expirationTimes,W=e.hiddenUpdates;for(i=_&~i;0<i;){var ut=31-Ye(i),dt=1<<ut;O[ut]=0,I[ut]=-1;var J=W[ut];if(J!==null)for(W[ut]=null,ut=0;ut<J.length;ut++){var et=J[ut];et!==null&&(et.lane&=-536870913)}i&=~dt}u!==0&&Yt(e,u,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(_&~a))}function Yt(e,a,i){e.pendingLanes|=a,e.suspendedLanes&=~a;var u=31-Ye(a);e.entangledLanes|=a,e.entanglements[u]=e.entanglements[u]|1073741824|i&4194090}function Rs(e,a){var i=e.entangledLanes|=a;for(e=e.entanglements;i;){var u=31-Ye(i),h=1<<u;h&a|e[u]&a&&(e[u]|=a),i&=~h}}function Vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ar(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hr(){var e=vt.p;return e!==0?e:(e=window.event,e===void 0?32:Bd(e.type))}function ir(e,a){var i=vt.p;try{return vt.p=e,a()}finally{vt.p=i}}var zn=Math.random().toString(36).slice(2),ge="__reactFiber$"+zn,$e="__reactProps$"+zn,Or="__reactContainer$"+zn,Cs="__reactEvents$"+zn,Ze="__reactListeners$"+zn,or="__reactHandles$"+zn,zs="__reactResources$"+zn,ur="__reactMarker$"+zn;function Fa(e){delete e[ge],delete e[$e],delete e[Cs],delete e[Ze],delete e[or]}function Mn(e){var a=e[ge];if(a)return a;for(var i=e.parentNode;i;){if(a=i[Or]||i[ge]){if(i=a.alternate,a.child!==null||i!==null&&i.child!==null)for(e=wd(e);e!==null;){if(i=e[ge])return i;e=wd(e)}return a}e=i,i=e.parentNode}return null}function Gr(e){if(e=e[ge]||e[Or]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function qr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(s(33))}function kr(e){var a=e[zs];return a||(a=e[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Le(e){e[ur]=!0}var la=new Set,lr={};function Dr(e,a){Kr(e,a),Kr(e+"Capture",a)}function Kr(e,a){for(lr[e]=a,e=0;e<a.length;e++)la.add(a[e])}var Va=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ms={},Ha={};function Bs(e){return sr.call(Ha,e)?!0:sr.call(Ms,e)?!1:Va.test(e)?Ha[e]=!0:(Ms[e]=!0,!1)}function Yr(e,a,i){if(Bs(a))if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+i)}}function cr(e,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+i)}}function cn(e,a,i,u){if(u===null)e.removeAttribute(i);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(a,i,""+u)}}var yn,wi;function Xr(e){if(yn===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);yn=a&&a[1]||"",wi=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yn+e+wi}var Ga=!1;function ca(e,a){if(!e||Ga)return"";Ga=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(et){var J=et}Reflect.construct(e,[],dt)}else{try{dt.call()}catch(et){J=et}e.call(dt.prototype)}}else{try{throw Error()}catch(et){J=et}(dt=e())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(et){if(et&&J&&typeof et.stack=="string")return[et.stack,J.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),_=m[0],O=m[1];if(_&&O){var I=_.split(`
`),W=O.split(`
`);for(h=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;h<W.length&&!W[h].includes("DetermineComponentFrameRoot");)h++;if(u===I.length||h===W.length)for(u=I.length-1,h=W.length-1;1<=u&&0<=h&&I[u]!==W[h];)h--;for(;1<=u&&0<=h;u--,h--)if(I[u]!==W[h]){if(u!==1||h!==1)do if(u--,h--,0>h||I[u]!==W[h]){var ut=`
`+I[u].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=u&&0<=h);break}}}finally{Ga=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Xr(i):""}function An(e){switch(e.tag){case 26:case 27:case 5:return Xr(e.type);case 16:return Xr("Lazy");case 13:return Xr("Suspense");case 19:return Xr("SuspenseList");case 0:case 15:return ca(e.type,!1);case 11:return ca(e.type.render,!1);case 1:return ca(e.type,!0);case 31:return Xr("Activity");default:return""}}function Ls(e){try{var a="";do a+=An(e),e=e.return;while(e);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}function Ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Us(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Is(e){var a=Us(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),u=""+e[a];if(!e.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var h=i.get,m=i.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return h.call(this)},set:function(_){u=""+_,m.call(this,_)}}),Object.defineProperty(e,a,{enumerable:i.enumerable}),{getValue:function(){return u},setValue:function(_){u=""+_},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function qa(e){e._valueTracker||(e._valueTracker=Is(e))}function Ti(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var i=a.getValue(),u="";return e&&(u=Us(e)?e.checked?"true":"false":e.value),e=u,e!==i?(a.setValue(e),!0):!1}function Xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ni=/[\n"\\]/g;function bn(e){return e.replace(Ni,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function js(e,a,i,u,h,m,_,O){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),a!=null?_==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ve(a)):e.value!==""+Ve(a)&&(e.value=""+Ve(a)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),a!=null?fa(e,_,Ve(a)):i!=null?fa(e,_,Ve(i)):u!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?e.name=""+Ve(O):e.removeAttribute("name")}function Ei(e,a,i,u,h,m,_,O){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),a!=null||i!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;i=i!=null?""+Ve(i):"",a=a!=null?""+Ve(a):i,O||a===e.value||(e.value=a),e.defaultValue=a}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=O?e.checked:!!u,e.defaultChecked=!!u,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function fa(e,a,i){a==="number"&&Xn(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function fr(e,a,i,u){if(e=e.options,a){a={};for(var h=0;h<i.length;h++)a["$"+i[h]]=!0;for(i=0;i<e.length;i++)h=a.hasOwnProperty("$"+e[i].value),e[i].selected!==h&&(e[i].selected=h),h&&u&&(e[i].defaultSelected=!0)}else{for(i=""+Ve(i),a=null,h=0;h<e.length;h++){if(e[h].value===i){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}a!==null||e[h].disabled||(a=e[h])}a!==null&&(a.selected=!0)}}function Ka(e,a,i){if(a!=null&&(a=""+Ve(a),a!==e.value&&(e.value=a),i==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=i!=null?""+Ve(i):""}function Ya(e,a,i,u){if(a==null){if(u!=null){if(i!=null)throw Error(s(92));if(re(u)){if(1<u.length)throw Error(s(93));u=u[0]}i=u}i==null&&(i=""),a=i}i=Ve(a),e.defaultValue=i,u=e.textContent,u===i&&u!==""&&u!==null&&(e.value=u)}function hr(e,a){if(a){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=a;return}}e.textContent=a}var Fs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xa(e,a,i){var u=a.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?u?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":u?e.setProperty(a,i):typeof i!="number"||i===0||Fs.has(a)?a==="float"?e.cssFloat=i:e[a]=(""+i).trim():e[a]=i+"px"}function Vs(e,a,i){if(a!=null&&typeof a!="object")throw Error(s(62));if(e=e.style,i!=null){for(var u in i)!i.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in a)u=a[h],a.hasOwnProperty(h)&&i[h]!==u&&Xa(e,h,u)}else for(var m in a)a.hasOwnProperty(m)&&Xa(e,m,a[m])}function Pa(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var b=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),w=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function E(e){return w.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var U=null;function Y(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var at=null,P=null;function ot(e){var a=Gr(e);if(a&&(e=a.stateNode)){var i=e[$e]||null;t:switch(e=a.stateNode,a.type){case"input":if(js(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),a=i.name,i.type==="radio"&&a!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+bn(""+a)+'"][type="radio"]'),a=0;a<i.length;a++){var u=i[a];if(u!==e&&u.form===e.form){var h=u[$e]||null;if(!h)throw Error(s(90));js(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<i.length;a++)u=i[a],u.form===e.form&&Ti(u)}break t;case"textarea":Ka(e,i.value,i.defaultValue);break t;case"select":a=i.value,a!=null&&fr(e,!!i.multiple,a,!1)}}}var gt=!1;function xt(e,a,i){if(gt)return e(a,i);gt=!0;try{var u=e(a);return u}finally{if(gt=!1,(at!==null||P!==null)&&(el(),at&&(a=at,e=P,P=at=null,ot(a),e)))for(a=0;a<e.length;a++)ot(e[a])}}function Lt(e,a){var i=e.stateNode;if(i===null)return null;var u=i[$e]||null;if(u===null)return null;i=u[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,a,typeof i));return i}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qt=!1;if(Gt)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){qt=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch{qt=!1}var Ot=null,g=null,T=null;function x(){if(T)return T;var e,a=g,i=a.length,u,h="value"in Ot?Ot.value:Ot.textContent,m=h.length;for(e=0;e<i&&a[e]===h[e];e++);var _=i-e;for(u=1;u<=_&&a[i-u]===h[m-u];u++);return T=h.slice(e,1<u?1-u:void 0)}function k(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function M(){return!0}function R(){return!1}function z(e){function a(i,u,h,m,_){this._reactName=i,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var O in e)e.hasOwnProperty(O)&&(i=e[O],this[O]=i?i(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?M:R,this.isPropagationStopped=R,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=M)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=M)},persist:function(){},isPersistent:M}),a}var F={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Z=z(F),st=y({},F,{view:0,detail:0}),pt=z(st),yt,St,Nt,It=y({},st,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nt&&(Nt&&e.type==="mousemove"?(yt=e.screenX-Nt.screenX,St=e.screenY-Nt.screenY):St=yt=0,Nt=e),yt)},movementY:function(e){return"movementY"in e?e.movementY:St}}),Kt=z(It),ye=y({},It,{dataTransfer:0}),we=z(ye),vn=y({},st,{relatedTarget:0}),On=z(vn),kn=y({},F,{animationName:0,elapsedTime:0,pseudoElement:0}),ce=z(kn),rn=y({},F,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pr=z(rn),ha=y({},F,{data:0}),ho=z(ha),Wa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},po={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=po[e])?!!a[e]:!1}function sc(){return k0}var D0=y({},st,{key:function(e){if(e.key){var a=Wa[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=k(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_i[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(e){return e.type==="keypress"?k(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?k(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$0=z(D0),R0=y({},It,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E1=z(R0),C0=y({},st,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),z0=z(C0),M0=y({},F,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=z(M0),L0=y({},It,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=z(L0),I0=y({},F,{newState:0,oldState:0}),j0=z(I0),F0=[9,13,27,32],ic=Gt&&"CompositionEvent"in window,mo=null;Gt&&"documentMode"in document&&(mo=document.documentMode);var V0=Gt&&"TextEvent"in window&&!mo,_1=Gt&&(!ic||mo&&8<mo&&11>=mo),x1=" ",A1=!1;function O1(e,a){switch(e){case"keyup":return F0.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xi=!1;function H0(e,a){switch(e){case"compositionend":return k1(a);case"keypress":return a.which!==32?null:(A1=!0,x1);case"textInput":return e=a.data,e===x1&&A1?null:e;default:return null}}function G0(e,a){if(xi)return e==="compositionend"||!ic&&O1(e,a)?(e=x(),T=g=Ot=null,xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return _1&&a.locale!=="ko"?null:a.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function D1(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!q0[e.type]:a==="textarea"}function $1(e,a,i,u){at?P?P.push(u):P=[u]:at=u,a=ol(a,"onChange"),0<a.length&&(i=new Z("onChange","change",null,i,u),e.push({event:i,listeners:a}))}var go=null,yo=null;function K0(e){fd(e,0)}function Tu(e){var a=qr(e);if(Ti(a))return e}function R1(e,a){if(e==="change")return a}var C1=!1;if(Gt){var oc;if(Gt){var uc="oninput"in document;if(!uc){var z1=document.createElement("div");z1.setAttribute("oninput","return;"),uc=typeof z1.oninput=="function"}oc=uc}else oc=!1;C1=oc&&(!document.documentMode||9<document.documentMode)}function M1(){go&&(go.detachEvent("onpropertychange",B1),yo=go=null)}function B1(e){if(e.propertyName==="value"&&Tu(yo)){var a=[];$1(a,yo,e,Y(e)),xt(K0,a)}}function Y0(e,a,i){e==="focusin"?(M1(),go=a,yo=i,go.attachEvent("onpropertychange",B1)):e==="focusout"&&M1()}function X0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tu(yo)}function P0(e,a){if(e==="click")return Tu(a)}function W0(e,a){if(e==="input"||e==="change")return Tu(a)}function Q0(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Pn=typeof Object.is=="function"?Object.is:Q0;function bo(e,a){if(Pn(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var i=Object.keys(e),u=Object.keys(a);if(i.length!==u.length)return!1;for(u=0;u<i.length;u++){var h=i[u];if(!sr.call(a,h)||!Pn(e[h],a[h]))return!1}return!0}function L1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function U1(e,a){var i=L1(e);e=0;for(var u;i;){if(i.nodeType===3){if(u=e+i.textContent.length,e<=a&&u>=a)return{node:i,offset:a-e};e=u}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=L1(i)}}function I1(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?I1(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function j1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Xn(e.document);a instanceof e.HTMLIFrameElement;){try{var i=typeof a.contentWindow.location.href=="string"}catch{i=!1}if(i)e=a.contentWindow;else break;a=Xn(e.document)}return a}function lc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Z0=Gt&&"documentMode"in document&&11>=document.documentMode,Ai=null,cc=null,vo=null,fc=!1;function F1(e,a,i){var u=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;fc||Ai==null||Ai!==Xn(u)||(u=Ai,"selectionStart"in u&&lc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),vo&&bo(vo,u)||(vo=u,u=ol(cc,"onSelect"),0<u.length&&(a=new Z("onSelect","select",null,a,i),e.push({event:a,listeners:u}),a.target=Ai)))}function Hs(e,a){var i={};return i[e.toLowerCase()]=a.toLowerCase(),i["Webkit"+e]="webkit"+a,i["Moz"+e]="moz"+a,i}var Oi={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},hc={},V1={};Gt&&(V1=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function Gs(e){if(hc[e])return hc[e];if(!Oi[e])return e;var a=Oi[e],i;for(i in a)if(a.hasOwnProperty(i)&&i in V1)return hc[e]=a[i];return e}var H1=Gs("animationend"),G1=Gs("animationiteration"),q1=Gs("animationstart"),J0=Gs("transitionrun"),t4=Gs("transitionstart"),e4=Gs("transitioncancel"),K1=Gs("transitionend"),Y1=new Map,pc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pc.push("scrollEnd");function $r(e,a){Y1.set(e,a),Dr(a,[e])}var X1=new WeakMap;function pr(e,a){if(typeof e=="object"&&e!==null){var i=X1.get(e);return i!==void 0?i:(a={value:e,source:a,stack:Ls(a)},X1.set(e,a),a)}return{value:e,source:a,stack:Ls(a)}}var dr=[],ki=0,dc=0;function Nu(){for(var e=ki,a=dc=ki=0;a<e;){var i=dr[a];dr[a++]=null;var u=dr[a];dr[a++]=null;var h=dr[a];dr[a++]=null;var m=dr[a];if(dr[a++]=null,u!==null&&h!==null){var _=u.pending;_===null?h.next=h:(h.next=_.next,_.next=h),u.pending=h}m!==0&&P1(i,h,m)}}function Eu(e,a,i,u){dr[ki++]=e,dr[ki++]=a,dr[ki++]=i,dr[ki++]=u,dc|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function mc(e,a,i,u){return Eu(e,a,i,u),_u(e)}function Di(e,a){return Eu(e,null,null,a),_u(e)}function P1(e,a,i){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i);for(var h=!1,m=e.return;m!==null;)m.childLanes|=i,u=m.alternate,u!==null&&(u.childLanes|=i),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&a!==null&&(h=31-Ye(i),e=m.hiddenUpdates,u=e[h],u===null?e[h]=[a]:u.push(a),a.lane=i|536870912),m):null}function _u(e){if(50<Go)throw Go=0,Tf=null,Error(s(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var $i={};function n4(e,a,i,u){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,a,i,u){return new n4(e,a,i,u)}function gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pa(e,a){var i=e.alternate;return i===null?(i=Wn(e.tag,a,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=a,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,a=e.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function W1(e,a){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,a=i.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function xu(e,a,i,u,h,m){var _=0;if(u=e,typeof e=="function")gc(e)&&(_=1);else if(typeof e=="string")_=ag(e,i,zt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case mt:return e=Wn(31,i,a,h),e.elementType=mt,e.lanes=m,e;case $:return qs(i.children,h,m,a);case B:_=8,h|=24;break;case C:return e=Wn(12,i,a,h|2),e.elementType=C,e.lanes=m,e;case tt:return e=Wn(13,i,a,h),e.elementType=tt,e.lanes=m,e;case it:return e=Wn(19,i,a,h),e.elementType=it,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case rt:_=10;break t;case lt:_=9;break t;case Q:_=11;break t;case bt:_=14;break t;case Tt:_=16,u=null;break t}_=29,i=Error(s(130,e===null?"null":typeof e,"")),u=null}return a=Wn(_,i,a,h),a.elementType=e,a.type=u,a.lanes=m,a}function qs(e,a,i,u){return e=Wn(7,e,u,a),e.lanes=i,e}function yc(e,a,i){return e=Wn(6,e,null,a),e.lanes=i,e}function bc(e,a,i){return a=Wn(4,e.children!==null?e.children:[],e.key,a),a.lanes=i,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Ri=[],Ci=0,Au=null,Ou=0,mr=[],gr=0,Ks=null,da=1,ma="";function Ys(e,a){Ri[Ci++]=Ou,Ri[Ci++]=Au,Au=e,Ou=a}function Q1(e,a,i){mr[gr++]=da,mr[gr++]=ma,mr[gr++]=Ks,Ks=e;var u=da;e=ma;var h=32-Ye(u)-1;u&=~(1<<h),i+=1;var m=32-Ye(a)+h;if(30<m){var _=h-h%5;m=(u&(1<<_)-1).toString(32),u>>=_,h-=_,da=1<<32-Ye(a)+h|i<<h|u,ma=m+e}else da=1<<m|i<<h|u,ma=e}function vc(e){e.return!==null&&(Ys(e,1),Q1(e,1,0))}function Sc(e){for(;e===Au;)Au=Ri[--Ci],Ri[Ci]=null,Ou=Ri[--Ci],Ri[Ci]=null;for(;e===Ks;)Ks=mr[--gr],mr[gr]=null,ma=mr[--gr],mr[gr]=null,da=mr[--gr],mr[gr]=null}var Bn=null,He=null,pe=!1,Xs=null,Wr=!1,wc=Error(s(519));function Ps(e){var a=Error(s(418,""));throw To(pr(a,e)),wc}function Z1(e){var a=e.stateNode,i=e.type,u=e.memoizedProps;switch(a[ge]=e,a[$e]=u,i){case"dialog":ie("cancel",a),ie("close",a);break;case"iframe":case"object":case"embed":ie("load",a);break;case"video":case"audio":for(i=0;i<Ko.length;i++)ie(Ko[i],a);break;case"source":ie("error",a);break;case"img":case"image":case"link":ie("error",a),ie("load",a);break;case"details":ie("toggle",a);break;case"input":ie("invalid",a),Ei(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),qa(a);break;case"select":ie("invalid",a);break;case"textarea":ie("invalid",a),Ya(a,u.value,u.defaultValue,u.children),qa(a)}i=u.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||a.textContent===""+i||u.suppressHydrationWarning===!0||md(a.textContent,i)?(u.popover!=null&&(ie("beforetoggle",a),ie("toggle",a)),u.onScroll!=null&&ie("scroll",a),u.onScrollEnd!=null&&ie("scrollend",a),u.onClick!=null&&(a.onclick=ul),a=!0):a=!1,a||Ps(e)}function J1(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 13:Wr=!1;return;case 27:case 3:Wr=!0;return;default:Bn=Bn.return}}function So(e){if(e!==Bn)return!1;if(!pe)return J1(e),pe=!0,!1;var a=e.tag,i;if((i=a!==3&&a!==27)&&((i=a===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Uf(e.type,e.memoizedProps)),i=!i),i&&He&&Ps(e),J1(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(i=e.data,i==="/$"){if(a===0){He=Cr(e.nextSibling);break t}a--}else i!=="$"&&i!=="$!"&&i!=="$?"||a++;e=e.nextSibling}He=null}}else a===27?(a=He,hs(e.type)?(e=Vf,Vf=null,He=e):He=a):He=Bn?Cr(e.stateNode.nextSibling):null;return!0}function wo(){He=Bn=null,pe=!1}function t2(){var e=Xs;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),Xs=null),e}function To(e){Xs===null?Xs=[e]:Xs.push(e)}var Tc=ht(null),Ws=null,ga=null;function Qa(e,a,i){_t(Tc,a._currentValue),a._currentValue=i}function ya(e){e._currentValue=Tc.current,At(Tc)}function Nc(e,a,i){for(;e!==null;){var u=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),e===i)break;e=e.return}}function Ec(e,a,i,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var _=h.child;m=m.firstContext;t:for(;m!==null;){var O=m;m=h;for(var I=0;I<a.length;I++)if(O.context===a[I]){m.lanes|=i,O=m.alternate,O!==null&&(O.lanes|=i),Nc(m.return,i,e),u||(_=null);break t}m=O.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=i,m=_.alternate,m!==null&&(m.lanes|=i),Nc(_,i,e),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===e){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function No(e,a,i,u){e=null;for(var h=a,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var O=h.type;Pn(h.pendingProps.value,_.value)||(e!==null?e.push(O):e=[O])}}else if(h===en.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Zo):e=[Zo])}h=h.return}e!==null&&Ec(a,e,i,u),a.flags|=262144}function ku(e){for(e=e.firstContext;e!==null;){if(!Pn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qs(e){Ws=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return e2(Ws,e)}function Du(e,a){return Ws===null&&Qs(e),e2(e,a)}function e2(e,a){var i=a._currentValue;if(a={context:a,memoizedValue:i,next:null},ga===null){if(e===null)throw Error(s(308));ga=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else ga=ga.next=a;return i}var r4=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(i,u){e.push(u)}};this.abort=function(){a.aborted=!0,e.forEach(function(i){return i()})}},a4=r.unstable_scheduleCallback,s4=r.unstable_NormalPriority,an={$$typeof:rt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _c(){return{controller:new r4,data:new Map,refCount:0}}function Eo(e){e.refCount--,e.refCount===0&&a4(s4,function(){e.controller.abort()})}var _o=null,xc=0,zi=0,Mi=null;function i4(e,a){if(_o===null){var i=_o=[];xc=0,zi=kf(),Mi={status:"pending",value:void 0,then:function(u){i.push(u)}}}return xc++,a.then(n2,n2),a}function n2(){if(--xc===0&&_o!==null){Mi!==null&&(Mi.status="fulfilled");var e=_o;_o=null,zi=0,Mi=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function o4(e,a){var i=[],u={status:"pending",value:null,reason:null,then:function(h){i.push(h)}};return e.then(function(){u.status="fulfilled",u.value=a;for(var h=0;h<i.length;h++)(0,i[h])(a)},function(h){for(u.status="rejected",u.reason=h,h=0;h<i.length;h++)(0,i[h])(void 0)}),u}var r2=nt.S;nt.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&i4(e,a),r2!==null&&r2(e,a)};var Zs=ht(null);function Ac(){var e=Zs.current;return e!==null?e:Oe.pooledCache}function $u(e,a){a===null?_t(Zs,Zs.current):_t(Zs,a.pool)}function a2(){var e=Ac();return e===null?null:{parent:an._currentValue,pool:e}}var xo=Error(s(460)),s2=Error(s(474)),Ru=Error(s(542)),Oc={then:function(){}};function i2(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cu(){}function o2(e,a,i){switch(i=e[i],i===void 0?e.push(a):i!==a&&(a.then(Cu,Cu),a=i),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,l2(e),e;default:if(typeof a.status=="string")a.then(Cu,Cu);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=a,e.status="pending",e.then(function(u){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=u}},function(u){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,l2(e),e}throw Ao=a,xo}}var Ao=null;function u2(){if(Ao===null)throw Error(s(459));var e=Ao;return Ao=null,e}function l2(e){if(e===xo||e===Ru)throw Error(s(483))}var Za=!1;function kc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ts(e,a,i){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(be&2)!==0){var h=u.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a,a=_u(e),P1(e,null,i),a}return Eu(e,u,a,i),_u(e)}function Oo(e,a,i){if(a=a.updateQueue,a!==null&&(a=a.shared,(i&4194048)!==0)){var u=a.lanes;u&=e.pendingLanes,i|=u,a.lanes=i,Rs(e,i)}}function $c(e,a){var i=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,i===u)){var h=null,m=null;if(i=i.firstBaseUpdate,i!==null){do{var _={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};m===null?h=m=_:m=m.next=_,i=i.next}while(i!==null);m===null?h=m=a:m=m.next=a}else h=m=a;i={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=a:e.next=a,i.lastBaseUpdate=a}var Rc=!1;function ko(){if(Rc){var e=Mi;if(e!==null)throw e}}function Do(e,a,i,u){Rc=!1;var h=e.updateQueue;Za=!1;var m=h.firstBaseUpdate,_=h.lastBaseUpdate,O=h.shared.pending;if(O!==null){h.shared.pending=null;var I=O,W=I.next;I.next=null,_===null?m=W:_.next=W,_=I;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,O=ut.lastBaseUpdate,O!==_&&(O===null?ut.firstBaseUpdate=W:O.next=W,ut.lastBaseUpdate=I))}if(m!==null){var dt=h.baseState;_=0,ut=W=I=null,O=m;do{var J=O.lane&-536870913,et=J!==O.lane;if(et?(le&J)===J:(u&J)===J){J!==0&&J===zi&&(Rc=!0),ut!==null&&(ut=ut.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});t:{var Ht=e,jt=O;J=a;var Ee=i;switch(jt.tag){case 1:if(Ht=jt.payload,typeof Ht=="function"){dt=Ht.call(Ee,dt,J);break t}dt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=jt.payload,J=typeof Ht=="function"?Ht.call(Ee,dt,J):Ht,J==null)break t;dt=y({},dt,J);break t;case 2:Za=!0}}J=O.callback,J!==null&&(e.flags|=64,et&&(e.flags|=8192),et=h.callbacks,et===null?h.callbacks=[J]:et.push(J))}else et={lane:J,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ut===null?(W=ut=et,I=dt):ut=ut.next=et,_|=J;if(O=O.next,O===null){if(O=h.shared.pending,O===null)break;et=O,O=et.next,et.next=null,h.lastBaseUpdate=et,h.shared.pending=null}}while(!0);ut===null&&(I=dt),h.baseState=I,h.firstBaseUpdate=W,h.lastBaseUpdate=ut,m===null&&(h.shared.lanes=0),us|=_,e.lanes=_,e.memoizedState=dt}}function c2(e,a){if(typeof e!="function")throw Error(s(191,e));e.call(a)}function f2(e,a){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)c2(i[e],a)}var Bi=ht(null),zu=ht(0);function h2(e,a){e=Ea,_t(zu,e),_t(Bi,a),Ea=e|a.baseLanes}function Cc(){_t(zu,Ea),_t(Bi,Bi.current)}function zc(){Ea=zu.current,At(Bi),At(zu)}var es=0,Jt=null,Te=null,Je=null,Mu=!1,Li=!1,Js=!1,Bu=0,$o=0,Ui=null,u4=0;function Pe(){throw Error(s(321))}function Mc(e,a){if(a===null)return!1;for(var i=0;i<a.length&&i<e.length;i++)if(!Pn(e[i],a[i]))return!1;return!0}function Bc(e,a,i,u,h,m){return es=m,Jt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,nt.H=e===null||e.memoizedState===null?P2:W2,Js=!1,m=i(u,h),Js=!1,Li&&(m=d2(a,i,u,h)),p2(e),m}function p2(e){nt.H=Vu;var a=Te!==null&&Te.next!==null;if(es=0,Je=Te=Jt=null,Mu=!1,$o=0,Ui=null,a)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&ku(e)&&(fn=!0))}function d2(e,a,i,u){Jt=e;var h=0;do{if(Li&&(Ui=null),$o=0,Li=!1,25<=h)throw Error(s(301));if(h+=1,Je=Te=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}nt.H=m4,m=a(i,u)}while(Li);return m}function l4(){var e=nt.H,a=e.useState()[0];return a=typeof a.then=="function"?Ro(a):a,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(Jt.flags|=1024),a}function Lc(){var e=Bu!==0;return Bu=0,e}function Uc(e,a,i){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~i}function Ic(e){if(Mu){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Mu=!1}es=0,Je=Te=Jt=null,Li=!1,$o=Bu=0,Ui=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Jt.memoizedState=Je=e:Je=Je.next=e,Je}function tn(){if(Te===null){var e=Jt.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var a=Je===null?Jt.memoizedState:Je.next;if(a!==null)Je=a,Te=e;else{if(e===null)throw Jt.alternate===null?Error(s(467)):Error(s(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Je===null?Jt.memoizedState=Je=e:Je=Je.next=e}return Je}function jc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var a=$o;return $o+=1,Ui===null&&(Ui=[]),e=o2(Ui,e,a),a=Jt,(Je===null?a.memoizedState:Je.next)===null&&(a=a.alternate,nt.H=a===null||a.memoizedState===null?P2:W2),e}function Lu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ro(e);if(e.$$typeof===rt)return Dn(e)}throw Error(s(438,String(e)))}function Fc(e){var a=null,i=Jt.updateQueue;if(i!==null&&(a=i.memoCache),a==null){var u=Jt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),i===null&&(i=jc(),Jt.updateQueue=i),i.memoCache=a,i=a.data[a.index],i===void 0)for(i=a.data[a.index]=Array(e),u=0;u<e;u++)i[u]=Et;return a.index++,i}function ba(e,a){return typeof a=="function"?a(e):a}function Uu(e){var a=tn();return Vc(a,Te,e)}function Vc(e,a,i){var u=e.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=i;var h=e.baseQueue,m=u.pending;if(m!==null){if(h!==null){var _=h.next;h.next=m.next,m.next=_}a.baseQueue=h=m,u.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{a=h.next;var O=_=null,I=null,W=a,ut=!1;do{var dt=W.lane&-536870913;if(dt!==W.lane?(le&dt)===dt:(es&dt)===dt){var J=W.revertLane;if(J===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),dt===zi&&(ut=!0);else if((es&J)===J){W=W.next,J===zi&&(ut=!0);continue}else dt={lane:0,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},I===null?(O=I=dt,_=m):I=I.next=dt,Jt.lanes|=J,us|=J;dt=W.action,Js&&i(m,dt),m=W.hasEagerState?W.eagerState:i(m,dt)}else J={lane:dt,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},I===null?(O=I=J,_=m):I=I.next=J,Jt.lanes|=dt,us|=dt;W=W.next}while(W!==null&&W!==a);if(I===null?_=m:I.next=O,!Pn(m,e.memoizedState)&&(fn=!0,ut&&(i=Mi,i!==null)))throw i;e.memoizedState=m,e.baseState=_,e.baseQueue=I,u.lastRenderedState=m}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function Hc(e){var a=tn(),i=a.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var u=i.dispatch,h=i.pending,m=a.memoizedState;if(h!==null){i.pending=null;var _=h=h.next;do m=e(m,_.action),_=_.next;while(_!==h);Pn(m,a.memoizedState)||(fn=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),i.lastRenderedState=m}return[m,u]}function m2(e,a,i){var u=Jt,h=tn(),m=pe;if(m){if(i===void 0)throw Error(s(407));i=i()}else i=a();var _=!Pn((Te||h).memoizedState,i);_&&(h.memoizedState=i,fn=!0),h=h.queue;var O=b2.bind(null,u,h,e);if(Co(2048,8,O,[e]),h.getSnapshot!==a||_||Je!==null&&Je.memoizedState.tag&1){if(u.flags|=2048,Ii(9,Iu(),y2.bind(null,u,h,i,a),null),Oe===null)throw Error(s(349));m||(es&124)!==0||g2(u,a,i)}return i}function g2(e,a,i){e.flags|=16384,e={getSnapshot:a,value:i},a=Jt.updateQueue,a===null?(a=jc(),Jt.updateQueue=a,a.stores=[e]):(i=a.stores,i===null?a.stores=[e]:i.push(e))}function y2(e,a,i,u){a.value=i,a.getSnapshot=u,v2(a)&&S2(e)}function b2(e,a,i){return i(function(){v2(a)&&S2(e)})}function v2(e){var a=e.getSnapshot;e=e.value;try{var i=a();return!Pn(e,i)}catch{return!0}}function S2(e){var a=Di(e,2);a!==null&&er(a,e,2)}function Gc(e){var a=Fn();if(typeof e=="function"){var i=e;if(e=i(),Js){Be(!0);try{i()}finally{Be(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},a}function w2(e,a,i,u){return e.baseState=i,Vc(e,Te,typeof u=="function"?u:ba)}function c4(e,a,i,u,h){if(Fu(e))throw Error(s(485));if(e=a.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){m.listeners.push(_)}};nt.T!==null?i(!0):m.isTransition=!1,u(m),i=a.pending,i===null?(m.next=a.pending=m,T2(a,m)):(m.next=i.next,a.pending=i.next=m)}}function T2(e,a){var i=a.action,u=a.payload,h=e.state;if(a.isTransition){var m=nt.T,_={};nt.T=_;try{var O=i(h,u),I=nt.S;I!==null&&I(_,O),N2(e,a,O)}catch(W){qc(e,a,W)}finally{nt.T=m}}else try{m=i(h,u),N2(e,a,m)}catch(W){qc(e,a,W)}}function N2(e,a,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(u){E2(e,a,u)},function(u){return qc(e,a,u)}):E2(e,a,i)}function E2(e,a,i){a.status="fulfilled",a.value=i,_2(a),e.state=i,a=e.pending,a!==null&&(i=a.next,i===a?e.pending=null:(i=i.next,a.next=i,T2(e,i)))}function qc(e,a,i){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=i,_2(a),a=a.next;while(a!==u)}e.action=null}function _2(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function x2(e,a){return a}function A2(e,a){if(pe){var i=Oe.formState;if(i!==null){t:{var u=Jt;if(pe){if(He){e:{for(var h=He,m=Wr;h.nodeType!==8;){if(!m){h=null;break e}if(h=Cr(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){He=Cr(h.nextSibling),u=h.data==="F!";break t}}Ps(u)}u=!1}u&&(a=i[0])}}return i=Fn(),i.memoizedState=i.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:x2,lastRenderedState:a},i.queue=u,i=K2.bind(null,Jt,u),u.dispatch=i,u=Gc(!1),m=Wc.bind(null,Jt,!1,u.queue),u=Fn(),h={state:a,dispatch:null,action:e,pending:null},u.queue=h,i=c4.bind(null,Jt,h,m,i),h.dispatch=i,u.memoizedState=e,[a,i,!1]}function O2(e){var a=tn();return k2(a,Te,e)}function k2(e,a,i){if(a=Vc(e,a,x2)[0],e=Uu(ba)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=Ro(a)}catch(_){throw _===xo?Ru:_}else u=a;a=tn();var h=a.queue,m=h.dispatch;return i!==a.memoizedState&&(Jt.flags|=2048,Ii(9,Iu(),f4.bind(null,h,i),null)),[u,m,e]}function f4(e,a){e.action=a}function D2(e){var a=tn(),i=Te;if(i!==null)return k2(a,i,e);tn(),a=a.memoizedState,i=tn();var u=i.queue.dispatch;return i.memoizedState=e,[a,u,!1]}function Ii(e,a,i,u){return e={tag:e,create:i,deps:u,inst:a,next:null},a=Jt.updateQueue,a===null&&(a=jc(),Jt.updateQueue=a),i=a.lastEffect,i===null?a.lastEffect=e.next=e:(u=i.next,i.next=e,e.next=u,a.lastEffect=e),e}function Iu(){return{destroy:void 0,resource:void 0}}function $2(){return tn().memoizedState}function ju(e,a,i,u){var h=Fn();u=u===void 0?null:u,Jt.flags|=e,h.memoizedState=Ii(1|a,Iu(),i,u)}function Co(e,a,i,u){var h=tn();u=u===void 0?null:u;var m=h.memoizedState.inst;Te!==null&&u!==null&&Mc(u,Te.memoizedState.deps)?h.memoizedState=Ii(a,m,i,u):(Jt.flags|=e,h.memoizedState=Ii(1|a,m,i,u))}function R2(e,a){ju(8390656,8,e,a)}function C2(e,a){Co(2048,8,e,a)}function z2(e,a){return Co(4,2,e,a)}function M2(e,a){return Co(4,4,e,a)}function B2(e,a){if(typeof a=="function"){e=e();var i=a(e);return function(){typeof i=="function"?i():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function L2(e,a,i){i=i!=null?i.concat([e]):null,Co(4,4,B2.bind(null,a,e),i)}function Kc(){}function U2(e,a){var i=tn();a=a===void 0?null:a;var u=i.memoizedState;return a!==null&&Mc(a,u[1])?u[0]:(i.memoizedState=[e,a],e)}function I2(e,a){var i=tn();a=a===void 0?null:a;var u=i.memoizedState;if(a!==null&&Mc(a,u[1]))return u[0];if(u=e(),Js){Be(!0);try{e()}finally{Be(!1)}}return i.memoizedState=[u,a],u}function Yc(e,a,i){return i===void 0||(es&1073741824)!==0?e.memoizedState=a:(e.memoizedState=i,e=Vp(),Jt.lanes|=e,us|=e,i)}function j2(e,a,i,u){return Pn(i,a)?i:Bi.current!==null?(e=Yc(e,i,u),Pn(e,a)||(fn=!0),e):(es&42)===0?(fn=!0,e.memoizedState=i):(e=Vp(),Jt.lanes|=e,us|=e,a)}function F2(e,a,i,u,h){var m=vt.p;vt.p=m!==0&&8>m?m:8;var _=nt.T,O={};nt.T=O,Wc(e,!1,a,i);try{var I=h(),W=nt.S;if(W!==null&&W(O,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ut=o4(I,u);zo(e,a,ut,tr(e))}else zo(e,a,u,tr(e))}catch(dt){zo(e,a,{then:function(){},status:"rejected",reason:dt},tr())}finally{vt.p=m,nt.T=_}}function h4(){}function Xc(e,a,i,u){if(e.tag!==5)throw Error(s(476));var h=V2(e).queue;F2(e,h,a,Dt,i===null?h4:function(){return H2(e),i(u)})}function V2(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:Dt,baseState:Dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:Dt},next:null};var i={};return a.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:i},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function H2(e){var a=V2(e).next.queue;zo(e,a,{},tr())}function Pc(){return Dn(Zo)}function G2(){return tn().memoizedState}function q2(){return tn().memoizedState}function p4(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var i=tr();e=Ja(i);var u=ts(a,e,i);u!==null&&(er(u,a,i),Oo(u,a,i)),a={cache:_c()},e.payload=a;return}a=a.return}}function d4(e,a,i){var u=tr();i={lane:u,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null},Fu(e)?Y2(a,i):(i=mc(e,a,i,u),i!==null&&(er(i,e,u),X2(i,a,u)))}function K2(e,a,i){var u=tr();zo(e,a,i,u)}function zo(e,a,i,u){var h={lane:u,revertLane:0,action:i,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Y2(a,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var _=a.lastRenderedState,O=m(_,i);if(h.hasEagerState=!0,h.eagerState=O,Pn(O,_))return Eu(e,a,h,0),Oe===null&&Nu(),!1}catch{}finally{}if(i=mc(e,a,h,u),i!==null)return er(i,e,u),X2(i,a,u),!0}return!1}function Wc(e,a,i,u){if(u={lane:2,revertLane:kf(),action:u,hasEagerState:!1,eagerState:null,next:null},Fu(e)){if(a)throw Error(s(479))}else a=mc(e,i,u,2),a!==null&&er(a,e,2)}function Fu(e){var a=e.alternate;return e===Jt||a!==null&&a===Jt}function Y2(e,a){Li=Mu=!0;var i=e.pending;i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a}function X2(e,a,i){if((i&4194048)!==0){var u=a.lanes;u&=e.pendingLanes,i|=u,a.lanes=i,Rs(e,i)}}var Vu={readContext:Dn,use:Lu,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe},P2={readContext:Dn,use:Lu,useCallback:function(e,a){return Fn().memoizedState=[e,a===void 0?null:a],e},useContext:Dn,useEffect:R2,useImperativeHandle:function(e,a,i){i=i!=null?i.concat([e]):null,ju(4194308,4,B2.bind(null,a,e),i)},useLayoutEffect:function(e,a){return ju(4194308,4,e,a)},useInsertionEffect:function(e,a){ju(4,2,e,a)},useMemo:function(e,a){var i=Fn();a=a===void 0?null:a;var u=e();if(Js){Be(!0);try{e()}finally{Be(!1)}}return i.memoizedState=[u,a],u},useReducer:function(e,a,i){var u=Fn();if(i!==void 0){var h=i(a);if(Js){Be(!0);try{i(a)}finally{Be(!1)}}}else h=a;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=d4.bind(null,Jt,e),[u.memoizedState,e]},useRef:function(e){var a=Fn();return e={current:e},a.memoizedState=e},useState:function(e){e=Gc(e);var a=e.queue,i=K2.bind(null,Jt,a);return a.dispatch=i,[e.memoizedState,i]},useDebugValue:Kc,useDeferredValue:function(e,a){var i=Fn();return Yc(i,e,a)},useTransition:function(){var e=Gc(!1);return e=F2.bind(null,Jt,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,i){var u=Jt,h=Fn();if(pe){if(i===void 0)throw Error(s(407));i=i()}else{if(i=a(),Oe===null)throw Error(s(349));(le&124)!==0||g2(u,a,i)}h.memoizedState=i;var m={value:i,getSnapshot:a};return h.queue=m,R2(b2.bind(null,u,m,e),[e]),u.flags|=2048,Ii(9,Iu(),y2.bind(null,u,m,i,a),null),i},useId:function(){var e=Fn(),a=Oe.identifierPrefix;if(pe){var i=ma,u=da;i=(u&~(1<<32-Ye(u)-1)).toString(32)+i,a="«"+a+"R"+i,i=Bu++,0<i&&(a+="H"+i.toString(32)),a+="»"}else i=u4++,a="«"+a+"r"+i.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:Pc,useFormState:A2,useActionState:A2,useOptimistic:function(e){var a=Fn();a.memoizedState=a.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=i,a=Wc.bind(null,Jt,!0,i),i.dispatch=a,[e,a]},useMemoCache:Fc,useCacheRefresh:function(){return Fn().memoizedState=p4.bind(null,Jt)}},W2={readContext:Dn,use:Lu,useCallback:U2,useContext:Dn,useEffect:C2,useImperativeHandle:L2,useInsertionEffect:z2,useLayoutEffect:M2,useMemo:I2,useReducer:Uu,useRef:$2,useState:function(){return Uu(ba)},useDebugValue:Kc,useDeferredValue:function(e,a){var i=tn();return j2(i,Te.memoizedState,e,a)},useTransition:function(){var e=Uu(ba)[0],a=tn().memoizedState;return[typeof e=="boolean"?e:Ro(e),a]},useSyncExternalStore:m2,useId:G2,useHostTransitionStatus:Pc,useFormState:O2,useActionState:O2,useOptimistic:function(e,a){var i=tn();return w2(i,Te,e,a)},useMemoCache:Fc,useCacheRefresh:q2},m4={readContext:Dn,use:Lu,useCallback:U2,useContext:Dn,useEffect:C2,useImperativeHandle:L2,useInsertionEffect:z2,useLayoutEffect:M2,useMemo:I2,useReducer:Hc,useRef:$2,useState:function(){return Hc(ba)},useDebugValue:Kc,useDeferredValue:function(e,a){var i=tn();return Te===null?Yc(i,e,a):j2(i,Te.memoizedState,e,a)},useTransition:function(){var e=Hc(ba)[0],a=tn().memoizedState;return[typeof e=="boolean"?e:Ro(e),a]},useSyncExternalStore:m2,useId:G2,useHostTransitionStatus:Pc,useFormState:D2,useActionState:D2,useOptimistic:function(e,a){var i=tn();return Te!==null?w2(i,Te,e,a):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Fc,useCacheRefresh:q2},ji=null,Mo=0;function Hu(e){var a=Mo;return Mo+=1,ji===null&&(ji=[]),o2(ji,e,a)}function Bo(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Gu(e,a){throw a.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(a),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Q2(e){var a=e._init;return a(e._payload)}function Z2(e){function a(K,q){if(e){var X=K.deletions;X===null?(K.deletions=[q],K.flags|=16):X.push(q)}}function i(K,q){if(!e)return null;for(;q!==null;)a(K,q),q=q.sibling;return null}function u(K){for(var q=new Map;K!==null;)K.key!==null?q.set(K.key,K):q.set(K.index,K),K=K.sibling;return q}function h(K,q){return K=pa(K,q),K.index=0,K.sibling=null,K}function m(K,q,X){return K.index=X,e?(X=K.alternate,X!==null?(X=X.index,X<q?(K.flags|=67108866,q):X):(K.flags|=67108866,q)):(K.flags|=1048576,q)}function _(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function O(K,q,X,ft){return q===null||q.tag!==6?(q=yc(X,K.mode,ft),q.return=K,q):(q=h(q,X),q.return=K,q)}function I(K,q,X,ft){var kt=X.type;return kt===$?ut(K,q,X.props.children,ft,X.key):q!==null&&(q.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===Tt&&Q2(kt)===q.type)?(q=h(q,X.props),Bo(q,X),q.return=K,q):(q=xu(X.type,X.key,X.props,null,K.mode,ft),Bo(q,X),q.return=K,q)}function W(K,q,X,ft){return q===null||q.tag!==4||q.stateNode.containerInfo!==X.containerInfo||q.stateNode.implementation!==X.implementation?(q=bc(X,K.mode,ft),q.return=K,q):(q=h(q,X.children||[]),q.return=K,q)}function ut(K,q,X,ft,kt){return q===null||q.tag!==7?(q=qs(X,K.mode,ft,kt),q.return=K,q):(q=h(q,X),q.return=K,q)}function dt(K,q,X){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=yc(""+q,K.mode,X),q.return=K,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case N:return X=xu(q.type,q.key,q.props,null,K.mode,X),Bo(X,q),X.return=K,X;case A:return q=bc(q,K.mode,X),q.return=K,q;case Tt:var ft=q._init;return q=ft(q._payload),dt(K,q,X)}if(re(q)||Vt(q))return q=qs(q,K.mode,X,null),q.return=K,q;if(typeof q.then=="function")return dt(K,Hu(q),X);if(q.$$typeof===rt)return dt(K,Du(K,q),X);Gu(K,q)}return null}function J(K,q,X,ft){var kt=q!==null?q.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return kt!==null?null:O(K,q,""+X,ft);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case N:return X.key===kt?I(K,q,X,ft):null;case A:return X.key===kt?W(K,q,X,ft):null;case Tt:return kt=X._init,X=kt(X._payload),J(K,q,X,ft)}if(re(X)||Vt(X))return kt!==null?null:ut(K,q,X,ft,null);if(typeof X.then=="function")return J(K,q,Hu(X),ft);if(X.$$typeof===rt)return J(K,q,Du(K,X),ft);Gu(K,X)}return null}function et(K,q,X,ft,kt){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return K=K.get(X)||null,O(q,K,""+ft,kt);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case N:return K=K.get(ft.key===null?X:ft.key)||null,I(q,K,ft,kt);case A:return K=K.get(ft.key===null?X:ft.key)||null,W(q,K,ft,kt);case Tt:var te=ft._init;return ft=te(ft._payload),et(K,q,X,ft,kt)}if(re(ft)||Vt(ft))return K=K.get(X)||null,ut(q,K,ft,kt,null);if(typeof ft.then=="function")return et(K,q,X,Hu(ft),kt);if(ft.$$typeof===rt)return et(K,q,X,Du(q,ft),kt);Gu(q,ft)}return null}function Ht(K,q,X,ft){for(var kt=null,te=null,Rt=q,Ft=q=0,pn=null;Rt!==null&&Ft<X.length;Ft++){Rt.index>Ft?(pn=Rt,Rt=null):pn=Rt.sibling;var fe=J(K,Rt,X[Ft],ft);if(fe===null){Rt===null&&(Rt=pn);break}e&&Rt&&fe.alternate===null&&a(K,Rt),q=m(fe,q,Ft),te===null?kt=fe:te.sibling=fe,te=fe,Rt=pn}if(Ft===X.length)return i(K,Rt),pe&&Ys(K,Ft),kt;if(Rt===null){for(;Ft<X.length;Ft++)Rt=dt(K,X[Ft],ft),Rt!==null&&(q=m(Rt,q,Ft),te===null?kt=Rt:te.sibling=Rt,te=Rt);return pe&&Ys(K,Ft),kt}for(Rt=u(Rt);Ft<X.length;Ft++)pn=et(Rt,K,Ft,X[Ft],ft),pn!==null&&(e&&pn.alternate!==null&&Rt.delete(pn.key===null?Ft:pn.key),q=m(pn,q,Ft),te===null?kt=pn:te.sibling=pn,te=pn);return e&&Rt.forEach(function(ys){return a(K,ys)}),pe&&Ys(K,Ft),kt}function jt(K,q,X,ft){if(X==null)throw Error(s(151));for(var kt=null,te=null,Rt=q,Ft=q=0,pn=null,fe=X.next();Rt!==null&&!fe.done;Ft++,fe=X.next()){Rt.index>Ft?(pn=Rt,Rt=null):pn=Rt.sibling;var ys=J(K,Rt,fe.value,ft);if(ys===null){Rt===null&&(Rt=pn);break}e&&Rt&&ys.alternate===null&&a(K,Rt),q=m(ys,q,Ft),te===null?kt=ys:te.sibling=ys,te=ys,Rt=pn}if(fe.done)return i(K,Rt),pe&&Ys(K,Ft),kt;if(Rt===null){for(;!fe.done;Ft++,fe=X.next())fe=dt(K,fe.value,ft),fe!==null&&(q=m(fe,q,Ft),te===null?kt=fe:te.sibling=fe,te=fe);return pe&&Ys(K,Ft),kt}for(Rt=u(Rt);!fe.done;Ft++,fe=X.next())fe=et(Rt,K,Ft,fe.value,ft),fe!==null&&(e&&fe.alternate!==null&&Rt.delete(fe.key===null?Ft:fe.key),q=m(fe,q,Ft),te===null?kt=fe:te.sibling=fe,te=fe);return e&&Rt.forEach(function(gg){return a(K,gg)}),pe&&Ys(K,Ft),kt}function Ee(K,q,X,ft){if(typeof X=="object"&&X!==null&&X.type===$&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case N:t:{for(var kt=X.key;q!==null;){if(q.key===kt){if(kt=X.type,kt===$){if(q.tag===7){i(K,q.sibling),ft=h(q,X.props.children),ft.return=K,K=ft;break t}}else if(q.elementType===kt||typeof kt=="object"&&kt!==null&&kt.$$typeof===Tt&&Q2(kt)===q.type){i(K,q.sibling),ft=h(q,X.props),Bo(ft,X),ft.return=K,K=ft;break t}i(K,q);break}else a(K,q);q=q.sibling}X.type===$?(ft=qs(X.props.children,K.mode,ft,X.key),ft.return=K,K=ft):(ft=xu(X.type,X.key,X.props,null,K.mode,ft),Bo(ft,X),ft.return=K,K=ft)}return _(K);case A:t:{for(kt=X.key;q!==null;){if(q.key===kt)if(q.tag===4&&q.stateNode.containerInfo===X.containerInfo&&q.stateNode.implementation===X.implementation){i(K,q.sibling),ft=h(q,X.children||[]),ft.return=K,K=ft;break t}else{i(K,q);break}else a(K,q);q=q.sibling}ft=bc(X,K.mode,ft),ft.return=K,K=ft}return _(K);case Tt:return kt=X._init,X=kt(X._payload),Ee(K,q,X,ft)}if(re(X))return Ht(K,q,X,ft);if(Vt(X)){if(kt=Vt(X),typeof kt!="function")throw Error(s(150));return X=kt.call(X),jt(K,q,X,ft)}if(typeof X.then=="function")return Ee(K,q,Hu(X),ft);if(X.$$typeof===rt)return Ee(K,q,Du(K,X),ft);Gu(K,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,q!==null&&q.tag===6?(i(K,q.sibling),ft=h(q,X),ft.return=K,K=ft):(i(K,q),ft=yc(X,K.mode,ft),ft.return=K,K=ft),_(K)):i(K,q)}return function(K,q,X,ft){try{Mo=0;var kt=Ee(K,q,X,ft);return ji=null,kt}catch(Rt){if(Rt===xo||Rt===Ru)throw Rt;var te=Wn(29,Rt,null,K.mode);return te.lanes=ft,te.return=K,te}finally{}}}var Fi=Z2(!0),J2=Z2(!1),yr=ht(null),Qr=null;function ns(e){var a=e.alternate;_t(sn,sn.current&1),_t(yr,e),Qr===null&&(a===null||Bi.current!==null||a.memoizedState!==null)&&(Qr=e)}function tp(e){if(e.tag===22){if(_t(sn,sn.current),_t(yr,e),Qr===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(Qr=e)}}else rs()}function rs(){_t(sn,sn.current),_t(yr,yr.current)}function va(e){At(yr),Qr===e&&(Qr=null),At(sn)}var sn=ht(0);function qu(e){for(var a=e;a!==null;){if(a.tag===13){var i=a.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||Ff(i)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Qc(e,a,i,u){a=e.memoizedState,i=i(u,a),i=i==null?a:y({},a,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Zc={enqueueSetState:function(e,a,i){e=e._reactInternals;var u=tr(),h=Ja(u);h.payload=a,i!=null&&(h.callback=i),a=ts(e,h,u),a!==null&&(er(a,e,u),Oo(a,e,u))},enqueueReplaceState:function(e,a,i){e=e._reactInternals;var u=tr(),h=Ja(u);h.tag=1,h.payload=a,i!=null&&(h.callback=i),a=ts(e,h,u),a!==null&&(er(a,e,u),Oo(a,e,u))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var i=tr(),u=Ja(i);u.tag=2,a!=null&&(u.callback=a),a=ts(e,u,i),a!==null&&(er(a,e,i),Oo(a,e,i))}};function ep(e,a,i,u,h,m,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,_):a.prototype&&a.prototype.isPureReactComponent?!bo(i,u)||!bo(h,m):!0}function np(e,a,i,u){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(i,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(i,u),a.state!==e&&Zc.enqueueReplaceState(a,a.state,null)}function ti(e,a){var i=a;if("ref"in a){i={};for(var u in a)u!=="ref"&&(i[u]=a[u])}if(e=e.defaultProps){i===a&&(i=y({},i));for(var h in e)i[h]===void 0&&(i[h]=e[h])}return i}var Ku=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function rp(e){Ku(e)}function ap(e){console.error(e)}function sp(e){Ku(e)}function Yu(e,a){try{var i=e.onUncaughtError;i(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function ip(e,a,i){try{var u=e.onCaughtError;u(i.value,{componentStack:i.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Jc(e,a,i){return i=Ja(i),i.tag=3,i.payload={element:null},i.callback=function(){Yu(e,a)},i}function op(e){return e=Ja(e),e.tag=3,e}function up(e,a,i,u){var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;e.payload=function(){return h(m)},e.callback=function(){ip(a,i,u)}}var _=i.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){ip(a,i,u),typeof h!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var O=u.stack;this.componentDidCatch(u.value,{componentStack:O!==null?O:""})})}function g4(e,a,i,u,h){if(i.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=i.alternate,a!==null&&No(a,i,h,!0),i=yr.current,i!==null){switch(i.tag){case 13:return Qr===null?Ef():i.alternate===null&&Ge===0&&(Ge=3),i.flags&=-257,i.flags|=65536,i.lanes=h,u===Oc?i.flags|=16384:(a=i.updateQueue,a===null?i.updateQueue=new Set([u]):a.add(u),xf(e,u,h)),!1;case 22:return i.flags|=65536,u===Oc?i.flags|=16384:(a=i.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},i.updateQueue=a):(i=a.retryQueue,i===null?a.retryQueue=new Set([u]):i.add(u)),xf(e,u,h)),!1}throw Error(s(435,i.tag))}return xf(e,u,h),Ef(),!1}if(pe)return a=yr.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,u!==wc&&(e=Error(s(422),{cause:u}),To(pr(e,i)))):(u!==wc&&(a=Error(s(423),{cause:u}),To(pr(a,i))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=pr(u,i),h=Jc(e.stateNode,u,h),$c(e,h),Ge!==4&&(Ge=2)),!1;var m=Error(s(520),{cause:u});if(m=pr(m,i),Ho===null?Ho=[m]:Ho.push(m),Ge!==4&&(Ge=2),a===null)return!0;u=pr(u,i),i=a;do{switch(i.tag){case 3:return i.flags|=65536,e=h&-h,i.lanes|=e,e=Jc(i.stateNode,u,e),$c(i,e),!1;case 1:if(a=i.type,m=i.stateNode,(i.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ls===null||!ls.has(m))))return i.flags|=65536,h&=-h,i.lanes|=h,h=op(h),up(h,e,i,u),$c(i,h),!1}i=i.return}while(i!==null);return!1}var lp=Error(s(461)),fn=!1;function Sn(e,a,i,u){a.child=e===null?J2(a,null,i,u):Fi(a,e.child,i,u)}function cp(e,a,i,u,h){i=i.render;var m=a.ref;if("ref"in u){var _={};for(var O in u)O!=="ref"&&(_[O]=u[O])}else _=u;return Qs(a),u=Bc(e,a,i,_,m,h),O=Lc(),e!==null&&!fn?(Uc(e,a,h),Sa(e,a,h)):(pe&&O&&vc(a),a.flags|=1,Sn(e,a,u,h),a.child)}function fp(e,a,i,u,h){if(e===null){var m=i.type;return typeof m=="function"&&!gc(m)&&m.defaultProps===void 0&&i.compare===null?(a.tag=15,a.type=m,hp(e,a,m,u,h)):(e=xu(i.type,null,u,a,a.mode,h),e.ref=a.ref,e.return=a,a.child=e)}if(m=e.child,!uf(e,h)){var _=m.memoizedProps;if(i=i.compare,i=i!==null?i:bo,i(_,u)&&e.ref===a.ref)return Sa(e,a,h)}return a.flags|=1,e=pa(m,u),e.ref=a.ref,e.return=a,a.child=e}function hp(e,a,i,u,h){if(e!==null){var m=e.memoizedProps;if(bo(m,u)&&e.ref===a.ref)if(fn=!1,a.pendingProps=u=m,uf(e,h))(e.flags&131072)!==0&&(fn=!0);else return a.lanes=e.lanes,Sa(e,a,h)}return tf(e,a,i,u,h)}function pp(e,a,i){var u=a.pendingProps,h=u.children,m=e!==null?e.memoizedState:null;if(u.mode==="hidden"){if((a.flags&128)!==0){if(u=m!==null?m.baseLanes|i:i,e!==null){for(h=a.child=e.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;a.childLanes=m&~u}else a.childLanes=0,a.child=null;return dp(e,a,u,i)}if((i&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&$u(a,m!==null?m.cachePool:null),m!==null?h2(a,m):Cc(),tp(a);else return a.lanes=a.childLanes=536870912,dp(e,a,m!==null?m.baseLanes|i:i,i)}else m!==null?($u(a,m.cachePool),h2(a,m),rs(),a.memoizedState=null):(e!==null&&$u(a,null),Cc(),rs());return Sn(e,a,h,i),a.child}function dp(e,a,i,u){var h=Ac();return h=h===null?null:{parent:an._currentValue,pool:h},a.memoizedState={baseLanes:i,cachePool:h},e!==null&&$u(a,null),Cc(),tp(a),e!==null&&No(e,a,u,!0),null}function Xu(e,a){var i=a.ref;if(i===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(e===null||e.ref!==i)&&(a.flags|=4194816)}}function tf(e,a,i,u,h){return Qs(a),i=Bc(e,a,i,u,void 0,h),u=Lc(),e!==null&&!fn?(Uc(e,a,h),Sa(e,a,h)):(pe&&u&&vc(a),a.flags|=1,Sn(e,a,i,h),a.child)}function mp(e,a,i,u,h,m){return Qs(a),a.updateQueue=null,i=d2(a,u,i,h),p2(e),u=Lc(),e!==null&&!fn?(Uc(e,a,m),Sa(e,a,m)):(pe&&u&&vc(a),a.flags|=1,Sn(e,a,i,m),a.child)}function gp(e,a,i,u,h){if(Qs(a),a.stateNode===null){var m=$i,_=i.contextType;typeof _=="object"&&_!==null&&(m=Dn(_)),m=new i(u,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Zc,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=u,m.state=a.memoizedState,m.refs={},kc(a),_=i.contextType,m.context=typeof _=="object"&&_!==null?Dn(_):$i,m.state=a.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(Qc(a,i,_,u),m.state=a.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(_=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),_!==m.state&&Zc.enqueueReplaceState(m,m.state,null),Do(a,u,m,h),ko(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(e===null){m=a.stateNode;var O=a.memoizedProps,I=ti(i,O);m.props=I;var W=m.context,ut=i.contextType;_=$i,typeof ut=="object"&&ut!==null&&(_=Dn(ut));var dt=i.getDerivedStateFromProps;ut=typeof dt=="function"||typeof m.getSnapshotBeforeUpdate=="function",O=a.pendingProps!==O,ut||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(O||W!==_)&&np(a,m,u,_),Za=!1;var J=a.memoizedState;m.state=J,Do(a,u,m,h),ko(),W=a.memoizedState,O||J!==W||Za?(typeof dt=="function"&&(Qc(a,i,dt,u),W=a.memoizedState),(I=Za||ep(a,i,I,u,J,W,_))?(ut||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=W),m.props=u,m.state=W,m.context=_,u=I):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{m=a.stateNode,Dc(e,a),_=a.memoizedProps,ut=ti(i,_),m.props=ut,dt=a.pendingProps,J=m.context,W=i.contextType,I=$i,typeof W=="object"&&W!==null&&(I=Dn(W)),O=i.getDerivedStateFromProps,(W=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(_!==dt||J!==I)&&np(a,m,u,I),Za=!1,J=a.memoizedState,m.state=J,Do(a,u,m,h),ko();var et=a.memoizedState;_!==dt||J!==et||Za||e!==null&&e.dependencies!==null&&ku(e.dependencies)?(typeof O=="function"&&(Qc(a,i,O,u),et=a.memoizedState),(ut=Za||ep(a,i,ut,u,J,et,I)||e!==null&&e.dependencies!==null&&ku(e.dependencies))?(W||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,et,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,et,I)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||_===e.memoizedProps&&J===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&J===e.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=et),m.props=u,m.state=et,m.context=I,u=ut):(typeof m.componentDidUpdate!="function"||_===e.memoizedProps&&J===e.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&J===e.memoizedState||(a.flags|=1024),u=!1)}return m=u,Xu(e,a),u=(a.flags&128)!==0,m||u?(m=a.stateNode,i=u&&typeof i.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,e!==null&&u?(a.child=Fi(a,e.child,null,h),a.child=Fi(a,null,i,h)):Sn(e,a,i,h),a.memoizedState=m.state,e=a.child):e=Sa(e,a,h),e}function yp(e,a,i,u){return wo(),a.flags|=256,Sn(e,a,i,u),a.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:a2()}}function rf(e,a,i){return e=e!==null?e.childLanes&~i:0,a&&(e|=br),e}function bp(e,a,i){var u=a.pendingProps,h=!1,m=(a.flags&128)!==0,_;if((_=m)||(_=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),_&&(h=!0,a.flags&=-129),_=(a.flags&32)!==0,a.flags&=-33,e===null){if(pe){if(h?ns(a):rs(),pe){var O=He,I;if(I=O){t:{for(I=O,O=Wr;I.nodeType!==8;){if(!O){O=null;break t}if(I=Cr(I.nextSibling),I===null){O=null;break t}}O=I}O!==null?(a.memoizedState={dehydrated:O,treeContext:Ks!==null?{id:da,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},I=Wn(18,null,null,0),I.stateNode=O,I.return=a,a.child=I,Bn=a,He=null,I=!0):I=!1}I||Ps(a)}if(O=a.memoizedState,O!==null&&(O=O.dehydrated,O!==null))return Ff(O)?a.lanes=32:a.lanes=536870912,null;va(a)}return O=u.children,u=u.fallback,h?(rs(),h=a.mode,O=Pu({mode:"hidden",children:O},h),u=qs(u,h,i,null),O.return=a,u.return=a,O.sibling=u,a.child=O,h=a.child,h.memoizedState=nf(i),h.childLanes=rf(e,_,i),a.memoizedState=ef,u):(ns(a),af(a,O))}if(I=e.memoizedState,I!==null&&(O=I.dehydrated,O!==null)){if(m)a.flags&256?(ns(a),a.flags&=-257,a=sf(e,a,i)):a.memoizedState!==null?(rs(),a.child=e.child,a.flags|=128,a=null):(rs(),h=u.fallback,O=a.mode,u=Pu({mode:"visible",children:u.children},O),h=qs(h,O,i,null),h.flags|=2,u.return=a,h.return=a,u.sibling=h,a.child=u,Fi(a,e.child,null,i),u=a.child,u.memoizedState=nf(i),u.childLanes=rf(e,_,i),a.memoizedState=ef,a=h);else if(ns(a),Ff(O)){if(_=O.nextSibling&&O.nextSibling.dataset,_)var W=_.dgst;_=W,u=Error(s(419)),u.stack="",u.digest=_,To({value:u,source:null,stack:null}),a=sf(e,a,i)}else if(fn||No(e,a,i,!1),_=(i&e.childLanes)!==0,fn||_){if(_=Oe,_!==null&&(u=i&-i,u=(u&42)!==0?1:Vr(u),u=(u&(_.suspendedLanes|i))!==0?0:u,u!==0&&u!==I.retryLane))throw I.retryLane=u,Di(e,u),er(_,e,u),lp;O.data==="$?"||Ef(),a=sf(e,a,i)}else O.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=I.treeContext,He=Cr(O.nextSibling),Bn=a,pe=!0,Xs=null,Wr=!1,e!==null&&(mr[gr++]=da,mr[gr++]=ma,mr[gr++]=Ks,da=e.id,ma=e.overflow,Ks=a),a=af(a,u.children),a.flags|=4096);return a}return h?(rs(),h=u.fallback,O=a.mode,I=e.child,W=I.sibling,u=pa(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&65011712,W!==null?h=pa(W,h):(h=qs(h,O,i,null),h.flags|=2),h.return=a,u.return=a,u.sibling=h,a.child=u,u=h,h=a.child,O=e.child.memoizedState,O===null?O=nf(i):(I=O.cachePool,I!==null?(W=an._currentValue,I=I.parent!==W?{parent:W,pool:W}:I):I=a2(),O={baseLanes:O.baseLanes|i,cachePool:I}),h.memoizedState=O,h.childLanes=rf(e,_,i),a.memoizedState=ef,u):(ns(a),i=e.child,e=i.sibling,i=pa(i,{mode:"visible",children:u.children}),i.return=a,i.sibling=null,e!==null&&(_=a.deletions,_===null?(a.deletions=[e],a.flags|=16):_.push(e)),a.child=i,a.memoizedState=null,i)}function af(e,a){return a=Pu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Pu(e,a){return e=Wn(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sf(e,a,i){return Fi(a,e.child,null,i),e=af(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function vp(e,a,i){e.lanes|=a;var u=e.alternate;u!==null&&(u.lanes|=a),Nc(e.return,a,i)}function of(e,a,i,u,h){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:i,tailMode:h}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=i,m.tailMode=h)}function Sp(e,a,i){var u=a.pendingProps,h=u.revealOrder,m=u.tail;if(Sn(e,a,u.children,i),u=sn.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vp(e,i,a);else if(e.tag===19)vp(e,i,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break t;for(;e.sibling===null;){if(e.return===null||e.return===a)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}switch(_t(sn,u),h){case"forwards":for(i=a.child,h=null;i!==null;)e=i.alternate,e!==null&&qu(e)===null&&(h=i),i=i.sibling;i=h,i===null?(h=a.child,a.child=null):(h=i.sibling,i.sibling=null),of(a,!1,h,i,m);break;case"backwards":for(i=null,h=a.child,a.child=null;h!==null;){if(e=h.alternate,e!==null&&qu(e)===null){a.child=h;break}e=h.sibling,h.sibling=i,i=h,h=e}of(a,!0,i,null,m);break;case"together":of(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Sa(e,a,i){if(e!==null&&(a.dependencies=e.dependencies),us|=a.lanes,(i&a.childLanes)===0)if(e!==null){if(No(e,a,i,!1),(i&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(s(153));if(a.child!==null){for(e=a.child,i=pa(e,e.pendingProps),a.child=i,i.return=a;e.sibling!==null;)e=e.sibling,i=i.sibling=pa(e,e.pendingProps),i.return=a;i.sibling=null}return a.child}function uf(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&ku(e)))}function y4(e,a,i){switch(a.tag){case 3:he(a,a.stateNode.containerInfo),Qa(a,an,e.memoizedState.cache),wo();break;case 27:case 5:En(a);break;case 4:he(a,a.stateNode.containerInfo);break;case 10:Qa(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(ns(a),a.flags|=128,null):(i&a.child.childLanes)!==0?bp(e,a,i):(ns(a),e=Sa(e,a,i),e!==null?e.sibling:null);ns(a);break;case 19:var h=(e.flags&128)!==0;if(u=(i&a.childLanes)!==0,u||(No(e,a,i,!1),u=(i&a.childLanes)!==0),h){if(u)return Sp(e,a,i);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),_t(sn,sn.current),u)break;return null;case 22:case 23:return a.lanes=0,pp(e,a,i);case 24:Qa(a,an,e.memoizedState.cache)}return Sa(e,a,i)}function wp(e,a,i){if(e!==null)if(e.memoizedProps!==a.pendingProps)fn=!0;else{if(!uf(e,i)&&(a.flags&128)===0)return fn=!1,y4(e,a,i);fn=(e.flags&131072)!==0}else fn=!1,pe&&(a.flags&1048576)!==0&&Q1(a,Ou,a.index);switch(a.lanes=0,a.tag){case 16:t:{e=a.pendingProps;var u=a.elementType,h=u._init;if(u=h(u._payload),a.type=u,typeof u=="function")gc(u)?(e=ti(u,e),a.tag=1,a=gp(null,a,u,e,i)):(a.tag=0,a=tf(null,a,u,e,i));else{if(u!=null){if(h=u.$$typeof,h===Q){a.tag=11,a=cp(null,a,u,e,i);break t}else if(h===bt){a.tag=14,a=fp(null,a,u,e,i);break t}}throw a=ue(u)||u,Error(s(306,a,""))}}return a;case 0:return tf(e,a,a.type,a.pendingProps,i);case 1:return u=a.type,h=ti(u,a.pendingProps),gp(e,a,u,h,i);case 3:t:{if(he(a,a.stateNode.containerInfo),e===null)throw Error(s(387));u=a.pendingProps;var m=a.memoizedState;h=m.element,Dc(e,a),Do(a,u,null,i);var _=a.memoizedState;if(u=_.cache,Qa(a,an,u),u!==m.cache&&Ec(a,[an],i,!0),ko(),u=_.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:_.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=yp(e,a,u,i);break t}else if(u!==h){h=pr(Error(s(424)),a),To(h),a=yp(e,a,u,i);break t}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=Cr(e.firstChild),Bn=a,pe=!0,Xs=null,Wr=!0,i=J2(a,null,u,i),a.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(wo(),u===h){a=Sa(e,a,i);break t}Sn(e,a,u,i)}a=a.child}return a;case 26:return Xu(e,a),e===null?(i=_d(a.type,null,a.pendingProps,null))?a.memoizedState=i:pe||(i=a.type,e=a.pendingProps,u=ll(Bt.current).createElement(i),u[ge]=a,u[$e]=e,Tn(u,i,e),Le(u),a.stateNode=u):a.memoizedState=_d(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return En(a),e===null&&pe&&(u=a.stateNode=Td(a.type,a.pendingProps,Bt.current),Bn=a,Wr=!0,h=He,hs(a.type)?(Vf=h,He=Cr(u.firstChild)):He=h),Sn(e,a,a.pendingProps.children,i),Xu(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&pe&&((h=u=He)&&(u=q4(u,a.type,a.pendingProps,Wr),u!==null?(a.stateNode=u,Bn=a,He=Cr(u.firstChild),Wr=!1,h=!0):h=!1),h||Ps(a)),En(a),h=a.type,m=a.pendingProps,_=e!==null?e.memoizedProps:null,u=m.children,Uf(h,m)?u=null:_!==null&&Uf(h,_)&&(a.flags|=32),a.memoizedState!==null&&(h=Bc(e,a,l4,null,null,i),Zo._currentValue=h),Xu(e,a),Sn(e,a,u,i),a.child;case 6:return e===null&&pe&&((e=i=He)&&(i=K4(i,a.pendingProps,Wr),i!==null?(a.stateNode=i,Bn=a,He=null,e=!0):e=!1),e||Ps(a)),null;case 13:return bp(e,a,i);case 4:return he(a,a.stateNode.containerInfo),u=a.pendingProps,e===null?a.child=Fi(a,null,u,i):Sn(e,a,u,i),a.child;case 11:return cp(e,a,a.type,a.pendingProps,i);case 7:return Sn(e,a,a.pendingProps,i),a.child;case 8:return Sn(e,a,a.pendingProps.children,i),a.child;case 12:return Sn(e,a,a.pendingProps.children,i),a.child;case 10:return u=a.pendingProps,Qa(a,a.type,u.value),Sn(e,a,u.children,i),a.child;case 9:return h=a.type._context,u=a.pendingProps.children,Qs(a),h=Dn(h),u=u(h),a.flags|=1,Sn(e,a,u,i),a.child;case 14:return fp(e,a,a.type,a.pendingProps,i);case 15:return hp(e,a,a.type,a.pendingProps,i);case 19:return Sp(e,a,i);case 31:return u=a.pendingProps,i=a.mode,u={mode:u.mode,children:u.children},e===null?(i=Pu(u,i),i.ref=a.ref,a.child=i,i.return=a,a=i):(i=pa(e.child,u),i.ref=a.ref,a.child=i,i.return=a,a=i),a;case 22:return pp(e,a,i);case 24:return Qs(a),u=Dn(an),e===null?(h=Ac(),h===null&&(h=Oe,m=_c(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=i),h=m),a.memoizedState={parent:u,cache:h},kc(a),Qa(a,an,h)):((e.lanes&i)!==0&&(Dc(e,a),Do(a,null,null,i),ko()),h=e.memoizedState,m=a.memoizedState,h.parent!==u?(h={parent:u,cache:u},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),Qa(a,an,u)):(u=m.cache,Qa(a,an,u),u!==h.cache&&Ec(a,[an],i,!0))),Sn(e,a,a.pendingProps.children,i),a.child;case 29:throw a.pendingProps}throw Error(s(156,a.tag))}function wa(e){e.flags|=4}function Tp(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dd(a)){if(a=yr.current,a!==null&&((le&4194048)===le?Qr!==null:(le&62914560)!==le&&(le&536870912)===0||a!==Qr))throw Ao=Oc,s2;e.flags|=8192}}function Wu(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Fr():536870912,e.lanes|=a,qi|=a)}function Lo(e,a){if(!pe)switch(e.tailMode){case"hidden":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var u=null;i!==null;)i.alternate!==null&&(u=i),i=i.sibling;u===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Ue(e){var a=e.alternate!==null&&e.alternate.child===e.child,i=0,u=0;if(a)for(var h=e.child;h!==null;)i|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)i|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=i,a}function b4(e,a,i){var u=a.pendingProps;switch(Sc(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(a),null;case 1:return Ue(a),null;case 3:return i=a.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),ya(an),qe(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(So(a)?wa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,t2())),Ue(a),null;case 26:return i=a.memoizedState,e===null?(wa(a),i!==null?(Ue(a),Tp(a,i)):(Ue(a),a.flags&=-16777217)):i?i!==e.memoizedState?(wa(a),Ue(a),Tp(a,i)):(Ue(a),a.flags&=-16777217):(e.memoizedProps!==u&&wa(a),Ue(a),a.flags&=-16777217),null;case 27:_e(a),i=Bt.current;var h=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==u&&wa(a);else{if(!u){if(a.stateNode===null)throw Error(s(166));return Ue(a),null}e=zt.current,So(a)?Z1(a):(e=Td(h,u,i),a.stateNode=e,wa(a))}return Ue(a),null;case 5:if(_e(a),i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==u&&wa(a);else{if(!u){if(a.stateNode===null)throw Error(s(166));return Ue(a),null}if(e=zt.current,So(a))Z1(a);else{switch(h=ll(Bt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?e.multiple=!0:u.size&&(e.size=u.size);break;default:e=typeof u.is=="string"?h.createElement(i,{is:u.is}):h.createElement(i)}}e[ge]=a,e[$e]=u;t:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break t;for(;h.sibling===null;){if(h.return===null||h.return===a)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=e;t:switch(Tn(e,i,u),i){case"button":case"input":case"select":case"textarea":e=!!u.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&wa(a)}}return Ue(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==u&&wa(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(s(166));if(e=Bt.current,So(a)){if(e=a.stateNode,i=a.memoizedProps,u=null,h=Bn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[ge]=a,e=!!(e.nodeValue===i||u!==null&&u.suppressHydrationWarning===!0||md(e.nodeValue,i)),e||Ps(a)}else e=ll(e).createTextNode(u),e[ge]=a,a.stateNode=e}return Ue(a),null;case 13:if(u=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=So(a),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[ge]=a}else wo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ue(a),h=!1}else h=t2(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(va(a),a):(va(a),null)}if(va(a),(a.flags&128)!==0)return a.lanes=i,a;if(i=u!==null,e=e!==null&&e.memoizedState!==null,i){u=a.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)}return i!==e&&i&&(a.child.flags|=8192),Wu(a,a.updateQueue),Ue(a),null;case 4:return qe(),e===null&&Cf(a.stateNode.containerInfo),Ue(a),null;case 10:return ya(a.type),Ue(a),null;case 19:if(At(sn),h=a.memoizedState,h===null)return Ue(a),null;if(u=(a.flags&128)!==0,m=h.rendering,m===null)if(u)Lo(h,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(m=qu(e),m!==null){for(a.flags|=128,Lo(h,!1),e=m.updateQueue,a.updateQueue=e,Wu(a,e),a.subtreeFlags=0,e=i,i=a.child;i!==null;)W1(i,e),i=i.sibling;return _t(sn,sn.current&1|2),a.child}e=e.sibling}h.tail!==null&&nn()>Ju&&(a.flags|=128,u=!0,Lo(h,!1),a.lanes=4194304)}else{if(!u)if(e=qu(m),e!==null){if(a.flags|=128,u=!0,e=e.updateQueue,a.updateQueue=e,Wu(a,e),Lo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!pe)return Ue(a),null}else 2*nn()-h.renderingStartTime>Ju&&i!==536870912&&(a.flags|=128,u=!0,Lo(h,!1),a.lanes=4194304);h.isBackwards?(m.sibling=a.child,a.child=m):(e=h.last,e!==null?e.sibling=m:a.child=m,h.last=m)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=nn(),a.sibling=null,e=sn.current,_t(sn,u?e&1|2:e&1),a):(Ue(a),null);case 22:case 23:return va(a),zc(),u=a.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(i&536870912)!==0&&(a.flags&128)===0&&(Ue(a),a.subtreeFlags&6&&(a.flags|=8192)):Ue(a),i=a.updateQueue,i!==null&&Wu(a,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==i&&(a.flags|=2048),e!==null&&At(Zs),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),ya(an),Ue(a),null;case 25:return null;case 30:return null}throw Error(s(156,a.tag))}function v4(e,a){switch(Sc(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return ya(an),qe(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return _e(a),null;case 13:if(va(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(s(340));wo()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return At(sn),null;case 4:return qe(),null;case 10:return ya(a.type),null;case 22:case 23:return va(a),zc(),e!==null&&At(Zs),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return ya(an),null;case 25:return null;default:return null}}function Np(e,a){switch(Sc(a),a.tag){case 3:ya(an),qe();break;case 26:case 27:case 5:_e(a);break;case 4:qe();break;case 13:va(a);break;case 19:At(sn);break;case 10:ya(a.type);break;case 22:case 23:va(a),zc(),e!==null&&At(Zs);break;case 24:ya(an)}}function Uo(e,a){try{var i=a.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var h=u.next;i=h;do{if((i.tag&e)===e){u=void 0;var m=i.create,_=i.inst;u=m(),_.destroy=u}i=i.next}while(i!==h)}}catch(O){xe(a,a.return,O)}}function as(e,a,i){try{var u=a.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&e)===e){var _=u.inst,O=_.destroy;if(O!==void 0){_.destroy=void 0,h=a;var I=i,W=O;try{W()}catch(ut){xe(h,I,ut)}}}u=u.next}while(u!==m)}}catch(ut){xe(a,a.return,ut)}}function Ep(e){var a=e.updateQueue;if(a!==null){var i=e.stateNode;try{f2(a,i)}catch(u){xe(e,e.return,u)}}}function _p(e,a,i){i.props=ti(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(u){xe(e,a,u)}}function Io(e,a){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof i=="function"?e.refCleanup=i(u):i.current=u}}catch(h){xe(e,a,h)}}function Zr(e,a){var i=e.ref,u=e.refCleanup;if(i!==null)if(typeof u=="function")try{u()}catch(h){xe(e,a,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(h){xe(e,a,h)}else i.current=null}function xp(e){var a=e.type,i=e.memoizedProps,u=e.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":i.autoFocus&&u.focus();break t;case"img":i.src?u.src=i.src:i.srcSet&&(u.srcset=i.srcSet)}}catch(h){xe(e,e.return,h)}}function lf(e,a,i){try{var u=e.stateNode;j4(u,e.type,i,a),u[$e]=a}catch(h){xe(e,e.return,h)}}function Ap(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hs(e.type)||e.tag===4}function cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,a,i){var u=e.tag;if(u===5||u===6)e=e.stateNode,a?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,a):(a=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,a.appendChild(e),i=i._reactRootContainer,i!=null||a.onclick!==null||(a.onclick=ul));else if(u!==4&&(u===27&&hs(e.type)&&(i=e.stateNode,a=null),e=e.child,e!==null))for(ff(e,a,i),e=e.sibling;e!==null;)ff(e,a,i),e=e.sibling}function Qu(e,a,i){var u=e.tag;if(u===5||u===6)e=e.stateNode,a?i.insertBefore(e,a):i.appendChild(e);else if(u!==4&&(u===27&&hs(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Qu(e,a,i),e=e.sibling;e!==null;)Qu(e,a,i),e=e.sibling}function Op(e){var a=e.stateNode,i=e.memoizedProps;try{for(var u=e.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);Tn(a,u,i),a[ge]=e,a[$e]=i}catch(m){xe(e,e.return,m)}}var Ta=!1,We=!1,hf=!1,kp=typeof WeakSet=="function"?WeakSet:Set,hn=null;function S4(e,a){if(e=e.containerInfo,Bf=ml,e=j1(e),lc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var u=i.getSelection&&i.getSelection();if(u&&u.rangeCount!==0){i=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{i.nodeType,m.nodeType}catch{i=null;break t}var _=0,O=-1,I=-1,W=0,ut=0,dt=e,J=null;e:for(;;){for(var et;dt!==i||h!==0&&dt.nodeType!==3||(O=_+h),dt!==m||u!==0&&dt.nodeType!==3||(I=_+u),dt.nodeType===3&&(_+=dt.nodeValue.length),(et=dt.firstChild)!==null;)J=dt,dt=et;for(;;){if(dt===e)break e;if(J===i&&++W===h&&(O=_),J===m&&++ut===u&&(I=_),(et=dt.nextSibling)!==null)break;dt=J,J=dt.parentNode}dt=et}i=O===-1||I===-1?null:{start:O,end:I}}else i=null}i=i||{start:0,end:0}}else i=null;for(Lf={focusedElem:e,selectionRange:i},ml=!1,hn=a;hn!==null;)if(a=hn,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,hn=e;else for(;hn!==null;){switch(a=hn,m=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,i=a,h=m.memoizedProps,m=m.memoizedState,u=i.stateNode;try{var Ht=ti(i.type,h,i.elementType===i.type);e=u.getSnapshotBeforeUpdate(Ht,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(jt){xe(i,i.return,jt)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,i=e.nodeType,i===9)jf(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=a.sibling,e!==null){e.return=a.return,hn=e;break}hn=a.return}}function Dp(e,a,i){var u=i.flags;switch(i.tag){case 0:case 11:case 15:ss(e,i),u&4&&Uo(5,i);break;case 1:if(ss(e,i),u&4)if(e=i.stateNode,a===null)try{e.componentDidMount()}catch(_){xe(i,i.return,_)}else{var h=ti(i.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(h,a,e.__reactInternalSnapshotBeforeUpdate)}catch(_){xe(i,i.return,_)}}u&64&&Ep(i),u&512&&Io(i,i.return);break;case 3:if(ss(e,i),u&64&&(e=i.updateQueue,e!==null)){if(a=null,i.child!==null)switch(i.child.tag){case 27:case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}try{f2(e,a)}catch(_){xe(i,i.return,_)}}break;case 27:a===null&&u&4&&Op(i);case 26:case 5:ss(e,i),a===null&&u&4&&xp(i),u&512&&Io(i,i.return);break;case 12:ss(e,i);break;case 13:ss(e,i),u&4&&Cp(e,i),u&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=k4.bind(null,i),Y4(e,i))));break;case 22:if(u=i.memoizedState!==null||Ta,!u){a=a!==null&&a.memoizedState!==null||We,h=Ta;var m=We;Ta=u,(We=a)&&!m?is(e,i,(i.subtreeFlags&8772)!==0):ss(e,i),Ta=h,We=m}break;case 30:break;default:ss(e,i)}}function $p(e){var a=e.alternate;a!==null&&(e.alternate=null,$p(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Fa(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,Vn=!1;function Na(e,a,i){for(i=i.child;i!==null;)Rp(e,a,i),i=i.sibling}function Rp(e,a,i){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(ln,i)}catch{}switch(i.tag){case 26:We||Zr(i,a),Na(e,a,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:We||Zr(i,a);var u=Ce,h=Vn;hs(i.type)&&(Ce=i.stateNode,Vn=!1),Na(e,a,i),Xo(i.stateNode),Ce=u,Vn=h;break;case 5:We||Zr(i,a);case 6:if(u=Ce,h=Vn,Ce=null,Na(e,a,i),Ce=u,Vn=h,Ce!==null)if(Vn)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(i.stateNode)}catch(m){xe(i,a,m)}else try{Ce.removeChild(i.stateNode)}catch(m){xe(i,a,m)}break;case 18:Ce!==null&&(Vn?(e=Ce,Sd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),nu(e)):Sd(Ce,i.stateNode));break;case 4:u=Ce,h=Vn,Ce=i.stateNode.containerInfo,Vn=!0,Na(e,a,i),Ce=u,Vn=h;break;case 0:case 11:case 14:case 15:We||as(2,i,a),We||as(4,i,a),Na(e,a,i);break;case 1:We||(Zr(i,a),u=i.stateNode,typeof u.componentWillUnmount=="function"&&_p(i,a,u)),Na(e,a,i);break;case 21:Na(e,a,i);break;case 22:We=(u=We)||i.memoizedState!==null,Na(e,a,i),We=u;break;default:Na(e,a,i)}}function Cp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nu(e)}catch(i){xe(a,a.return,i)}}function w4(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new kp),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new kp),a;default:throw Error(s(435,e.tag))}}function pf(e,a){var i=w4(e);a.forEach(function(u){var h=D4.bind(null,e,u);i.has(u)||(i.add(u),u.then(h,h))})}function Qn(e,a){var i=a.deletions;if(i!==null)for(var u=0;u<i.length;u++){var h=i[u],m=e,_=a,O=_;t:for(;O!==null;){switch(O.tag){case 27:if(hs(O.type)){Ce=O.stateNode,Vn=!1;break t}break;case 5:Ce=O.stateNode,Vn=!1;break t;case 3:case 4:Ce=O.stateNode.containerInfo,Vn=!0;break t}O=O.return}if(Ce===null)throw Error(s(160));Rp(m,_,h),Ce=null,Vn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)zp(a,e),a=a.sibling}var Rr=null;function zp(e,a){var i=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(a,e),Zn(e),u&4&&(as(3,e,e.return),Uo(3,e),as(5,e,e.return));break;case 1:Qn(a,e),Zn(e),u&512&&(We||i===null||Zr(i,i.return)),u&64&&Ta&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?u:i.concat(u))));break;case 26:var h=Rr;if(Qn(a,e),Zn(e),u&512&&(We||i===null||Zr(i,i.return)),u&4){var m=i!==null?i.memoizedState:null;if(u=e.memoizedState,i===null)if(u===null)if(e.stateNode===null){t:{u=e.type,i=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[ur]||m[ge]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),Tn(m,u,i),m[ge]=e,Le(m),u=m;break t;case"link":var _=Od("link","href",h).get(u+(i.href||""));if(_){for(var O=0;O<_.length;O++)if(m=_[O],m.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&m.getAttribute("rel")===(i.rel==null?null:i.rel)&&m.getAttribute("title")===(i.title==null?null:i.title)&&m.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){_.splice(O,1);break e}}m=h.createElement(u),Tn(m,u,i),h.head.appendChild(m);break;case"meta":if(_=Od("meta","content",h).get(u+(i.content||""))){for(O=0;O<_.length;O++)if(m=_[O],m.getAttribute("content")===(i.content==null?null:""+i.content)&&m.getAttribute("name")===(i.name==null?null:i.name)&&m.getAttribute("property")===(i.property==null?null:i.property)&&m.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&m.getAttribute("charset")===(i.charSet==null?null:i.charSet)){_.splice(O,1);break e}}m=h.createElement(u),Tn(m,u,i),h.head.appendChild(m);break;default:throw Error(s(468,u))}m[ge]=e,Le(m),u=m}e.stateNode=u}else kd(h,e.type,e.stateNode);else e.stateNode=Ad(h,u,e.memoizedProps);else m!==u?(m===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):m.count--,u===null?kd(h,e.type,e.stateNode):Ad(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&lf(e,e.memoizedProps,i.memoizedProps)}break;case 27:Qn(a,e),Zn(e),u&512&&(We||i===null||Zr(i,i.return)),i!==null&&u&4&&lf(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Qn(a,e),Zn(e),u&512&&(We||i===null||Zr(i,i.return)),e.flags&32){h=e.stateNode;try{hr(h,"")}catch(et){xe(e,e.return,et)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,lf(e,h,i!==null?i.memoizedProps:h)),u&1024&&(hf=!0);break;case 6:if(Qn(a,e),Zn(e),u&4){if(e.stateNode===null)throw Error(s(162));u=e.memoizedProps,i=e.stateNode;try{i.nodeValue=u}catch(et){xe(e,e.return,et)}}break;case 3:if(hl=null,h=Rr,Rr=cl(a.containerInfo),Qn(a,e),Rr=h,Zn(e),u&4&&i!==null&&i.memoizedState.isDehydrated)try{nu(a.containerInfo)}catch(et){xe(e,e.return,et)}hf&&(hf=!1,Mp(e));break;case 4:u=Rr,Rr=cl(e.stateNode.containerInfo),Qn(a,e),Zn(e),Rr=u;break;case 12:Qn(a,e),Zn(e);break;case 13:Qn(a,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(vf=nn()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,pf(e,u)));break;case 22:h=e.memoizedState!==null;var I=i!==null&&i.memoizedState!==null,W=Ta,ut=We;if(Ta=W||h,We=ut||I,Qn(a,e),We=ut,Ta=W,Zn(e),u&8192)t:for(a=e.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(i===null||I||Ta||We||ei(e)),i=null,a=e;;){if(a.tag===5||a.tag===26){if(i===null){I=i=a;try{if(m=I.stateNode,h)_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{O=I.stateNode;var dt=I.memoizedProps.style,J=dt!=null&&dt.hasOwnProperty("display")?dt.display:null;O.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(et){xe(I,I.return,et)}}}else if(a.tag===6){if(i===null){I=a;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(et){xe(I,I.return,et)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break t;for(;a.sibling===null;){if(a.return===null||a.return===e)break t;i===a&&(i=null),a=a.return}i===a&&(i=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=e.updateQueue,u!==null&&(i=u.retryQueue,i!==null&&(u.retryQueue=null,pf(e,i))));break;case 19:Qn(a,e),Zn(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,pf(e,u)));break;case 30:break;case 21:break;default:Qn(a,e),Zn(e)}}function Zn(e){var a=e.flags;if(a&2){try{for(var i,u=e.return;u!==null;){if(Ap(u)){i=u;break}u=u.return}if(i==null)throw Error(s(160));switch(i.tag){case 27:var h=i.stateNode,m=cf(e);Qu(e,m,h);break;case 5:var _=i.stateNode;i.flags&32&&(hr(_,""),i.flags&=-33);var O=cf(e);Qu(e,O,_);break;case 3:case 4:var I=i.stateNode.containerInfo,W=cf(e);ff(e,W,I);break;default:throw Error(s(161))}}catch(ut){xe(e,e.return,ut)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Mp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Mp(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function ss(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Dp(e,a.alternate,a),a=a.sibling}function ei(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:as(4,a,a.return),ei(a);break;case 1:Zr(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&_p(a,a.return,i),ei(a);break;case 27:Xo(a.stateNode);case 26:case 5:Zr(a,a.return),ei(a);break;case 22:a.memoizedState===null&&ei(a);break;case 30:ei(a);break;default:ei(a)}e=e.sibling}}function is(e,a,i){for(i=i&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,h=e,m=a,_=m.flags;switch(m.tag){case 0:case 11:case 15:is(h,m,i),Uo(4,m);break;case 1:if(is(h,m,i),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(W){xe(u,u.return,W)}if(u=m,h=u.updateQueue,h!==null){var O=u.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)c2(I[h],O)}catch(W){xe(u,u.return,W)}}i&&_&64&&Ep(m),Io(m,m.return);break;case 27:Op(m);case 26:case 5:is(h,m,i),i&&u===null&&_&4&&xp(m),Io(m,m.return);break;case 12:is(h,m,i);break;case 13:is(h,m,i),i&&_&4&&Cp(h,m);break;case 22:m.memoizedState===null&&is(h,m,i),Io(m,m.return);break;case 30:break;default:is(h,m,i)}a=a.sibling}}function df(e,a){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Eo(i))}function mf(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Eo(e))}function Jr(e,a,i,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Bp(e,a,i,u),a=a.sibling}function Bp(e,a,i,u){var h=a.flags;switch(a.tag){case 0:case 11:case 15:Jr(e,a,i,u),h&2048&&Uo(9,a);break;case 1:Jr(e,a,i,u);break;case 3:Jr(e,a,i,u),h&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Eo(e)));break;case 12:if(h&2048){Jr(e,a,i,u),e=a.stateNode;try{var m=a.memoizedProps,_=m.id,O=m.onPostCommit;typeof O=="function"&&O(_,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){xe(a,a.return,I)}}else Jr(e,a,i,u);break;case 13:Jr(e,a,i,u);break;case 23:break;case 22:m=a.stateNode,_=a.alternate,a.memoizedState!==null?m._visibility&2?Jr(e,a,i,u):jo(e,a):m._visibility&2?Jr(e,a,i,u):(m._visibility|=2,Vi(e,a,i,u,(a.subtreeFlags&10256)!==0)),h&2048&&df(_,a);break;case 24:Jr(e,a,i,u),h&2048&&mf(a.alternate,a);break;default:Jr(e,a,i,u)}}function Vi(e,a,i,u,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=e,_=a,O=i,I=u,W=_.flags;switch(_.tag){case 0:case 11:case 15:Vi(m,_,O,I,h),Uo(8,_);break;case 23:break;case 22:var ut=_.stateNode;_.memoizedState!==null?ut._visibility&2?Vi(m,_,O,I,h):jo(m,_):(ut._visibility|=2,Vi(m,_,O,I,h)),h&&W&2048&&df(_.alternate,_);break;case 24:Vi(m,_,O,I,h),h&&W&2048&&mf(_.alternate,_);break;default:Vi(m,_,O,I,h)}a=a.sibling}}function jo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var i=e,u=a,h=u.flags;switch(u.tag){case 22:jo(i,u),h&2048&&df(u.alternate,u);break;case 24:jo(i,u),h&2048&&mf(u.alternate,u);break;default:jo(i,u)}a=a.sibling}}var Fo=8192;function Hi(e){if(e.subtreeFlags&Fo)for(e=e.child;e!==null;)Lp(e),e=e.sibling}function Lp(e){switch(e.tag){case 26:Hi(e),e.flags&Fo&&e.memoizedState!==null&&ig(Rr,e.memoizedState,e.memoizedProps);break;case 5:Hi(e);break;case 3:case 4:var a=Rr;Rr=cl(e.stateNode.containerInfo),Hi(e),Rr=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Fo,Fo=16777216,Hi(e),Fo=a):Hi(e));break;default:Hi(e)}}function Up(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Vo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var u=a[i];hn=u,jp(u,e)}Up(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ip(e),e=e.sibling}function Ip(e){switch(e.tag){case 0:case 11:case 15:Vo(e),e.flags&2048&&as(9,e,e.return);break;case 3:Vo(e);break;case 12:Vo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Zu(e)):Vo(e);break;default:Vo(e)}}function Zu(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var u=a[i];hn=u,jp(u,e)}Up(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:as(8,a,a.return),Zu(a);break;case 22:i=a.stateNode,i._visibility&2&&(i._visibility&=-3,Zu(a));break;default:Zu(a)}e=e.sibling}}function jp(e,a){for(;hn!==null;){var i=hn;switch(i.tag){case 0:case 11:case 15:as(8,i,a);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var u=i.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Eo(i.memoizedState.cache)}if(u=i.child,u!==null)u.return=i,hn=u;else t:for(i=e;hn!==null;){u=hn;var h=u.sibling,m=u.return;if($p(u),u===i){hn=null;break t}if(h!==null){h.return=m,hn=h;break t}hn=m}}}var T4={getCacheForType:function(e){var a=Dn(an),i=a.data.get(e);return i===void 0&&(i=e(),a.data.set(e,i)),i}},N4=typeof WeakMap=="function"?WeakMap:Map,be=0,Oe=null,se=null,le=0,ve=0,Jn=null,os=!1,Gi=!1,gf=!1,Ea=0,Ge=0,us=0,ni=0,yf=0,br=0,qi=0,Ho=null,Hn=null,bf=!1,vf=0,Ju=1/0,tl=null,ls=null,wn=0,cs=null,Ki=null,Yi=0,Sf=0,wf=null,Fp=null,Go=0,Tf=null;function tr(){if((be&2)!==0&&le!==0)return le&-le;if(nt.T!==null){var e=zi;return e!==0?e:kf()}return Hr()}function Vp(){br===0&&(br=(le&536870912)===0||pe?me():536870912);var e=yr.current;return e!==null&&(e.flags|=32),br}function er(e,a,i){(e===Oe&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Xi(e,0),fs(e,le,br,!1)),xn(e,i),((be&2)===0||e!==Oe)&&(e===Oe&&((be&2)===0&&(ni|=i),Ge===4&&fs(e,le,br,!1)),ta(e))}function Hp(e,a,i){if((be&6)!==0)throw Error(s(327));var u=!i&&(a&124)===0&&(a&e.expiredLanes)===0||Xe(e,a),h=u?x4(e,a):_f(e,a,!0),m=u;do{if(h===0){Gi&&!u&&fs(e,a,0,!1);break}else{if(i=e.current.alternate,m&&!E4(i)){h=_f(e,a,!1),m=!1;continue}if(h===2){if(m=a,e.errorRecoveryDisabledLanes&m)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){a=_;t:{var O=e;h=Ho;var I=O.current.memoizedState.isDehydrated;if(I&&(Xi(O,_).flags|=256),_=_f(O,_,!1),_!==2){if(gf&&!I){O.errorRecoveryDisabledLanes|=m,ni|=m,h=4;break t}m=Hn,Hn=h,m!==null&&(Hn===null?Hn=m:Hn.push.apply(Hn,m))}h=_}if(m=!1,h!==2)continue}}if(h===1){Xi(e,0),fs(e,a,0,!0);break}t:{switch(u=e,m=h,m){case 0:case 1:throw Error(s(345));case 4:if((a&4194048)!==a)break;case 6:fs(u,a,br,!os);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((a&62914560)===a&&(h=vf+300-nn(),10<h)){if(fs(u,a,br,!os),Ae(u,0,!0)!==0)break t;u.timeoutHandle=bd(Gp.bind(null,u,i,Hn,tl,bf,a,br,ni,qi,os,m,2,-0,0),h);break t}Gp(u,i,Hn,tl,bf,a,br,ni,qi,os,m,0,-0,0)}}break}while(!0);ta(e)}function Gp(e,a,i,u,h,m,_,O,I,W,ut,dt,J,et){if(e.timeoutHandle=-1,dt=a.subtreeFlags,(dt&8192||(dt&16785408)===16785408)&&(Qo={stylesheets:null,count:0,unsuspend:sg},Lp(a),dt=og(),dt!==null)){e.cancelPendingCommit=dt(Qp.bind(null,e,a,m,i,u,h,_,O,I,ut,1,J,et)),fs(e,m,_,!W);return}Qp(e,a,m,i,u,h,_,O,I)}function E4(e){for(var a=e;;){var i=a.tag;if((i===0||i===11||i===15)&&a.flags&16384&&(i=a.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var u=0;u<i.length;u++){var h=i[u],m=h.getSnapshot;h=h.value;try{if(!Pn(m(),h))return!1}catch{return!1}}if(i=a.child,a.subtreeFlags&16384&&i!==null)i.return=a,a=i;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function fs(e,a,i,u){a&=~yf,a&=~ni,e.suspendedLanes|=a,e.pingedLanes&=~a,u&&(e.warmLanes|=a),u=e.expirationTimes;for(var h=a;0<h;){var m=31-Ye(h),_=1<<m;u[m]=-1,h&=~_}i!==0&&Yt(e,i,a)}function el(){return(be&6)===0?(qo(0),!1):!0}function Nf(){if(se!==null){if(ve===0)var e=se.return;else e=se,ga=Ws=null,Ic(e),ji=null,Mo=0,e=se;for(;e!==null;)Np(e.alternate,e),e=e.return;se=null}}function Xi(e,a){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,V4(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Nf(),Oe=e,se=i=pa(e.current,null),le=a,ve=0,Jn=null,os=!1,Gi=Xe(e,a),gf=!1,qi=br=yf=ni=us=Ge=0,Hn=Ho=null,bf=!1,(a&8)!==0&&(a|=a&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=a;0<u;){var h=31-Ye(u),m=1<<h;a|=e[h],u&=~m}return Ea=a,Nu(),i}function qp(e,a){Jt=null,nt.H=Vu,a===xo||a===Ru?(a=u2(),ve=3):a===s2?(a=u2(),ve=4):ve=a===lp?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Jn=a,se===null&&(Ge=1,Yu(e,pr(a,e.current)))}function Kp(){var e=nt.H;return nt.H=Vu,e===null?Vu:e}function Yp(){var e=nt.A;return nt.A=T4,e}function Ef(){Ge=4,os||(le&4194048)!==le&&yr.current!==null||(Gi=!0),(us&134217727)===0&&(ni&134217727)===0||Oe===null||fs(Oe,le,br,!1)}function _f(e,a,i){var u=be;be|=2;var h=Kp(),m=Yp();(Oe!==e||le!==a)&&(tl=null,Xi(e,a)),a=!1;var _=Ge;t:do try{if(ve!==0&&se!==null){var O=se,I=Jn;switch(ve){case 8:Nf(),_=6;break t;case 3:case 2:case 9:case 6:yr.current===null&&(a=!0);var W=ve;if(ve=0,Jn=null,Pi(e,O,I,W),i&&Gi){_=0;break t}break;default:W=ve,ve=0,Jn=null,Pi(e,O,I,W)}}_4(),_=Ge;break}catch(ut){qp(e,ut)}while(!0);return a&&e.shellSuspendCounter++,ga=Ws=null,be=u,nt.H=h,nt.A=m,se===null&&(Oe=null,le=0,Nu()),_}function _4(){for(;se!==null;)Xp(se)}function x4(e,a){var i=be;be|=2;var u=Kp(),h=Yp();Oe!==e||le!==a?(tl=null,Ju=nn()+500,Xi(e,a)):Gi=Xe(e,a);t:do try{if(ve!==0&&se!==null){a=se;var m=Jn;e:switch(ve){case 1:ve=0,Jn=null,Pi(e,a,m,1);break;case 2:case 9:if(i2(m)){ve=0,Jn=null,Pp(a);break}a=function(){ve!==2&&ve!==9||Oe!==e||(ve=7),ta(e)},m.then(a,a);break t;case 3:ve=7;break t;case 4:ve=5;break t;case 7:i2(m)?(ve=0,Jn=null,Pp(a)):(ve=0,Jn=null,Pi(e,a,m,7));break;case 5:var _=null;switch(se.tag){case 26:_=se.memoizedState;case 5:case 27:var O=se;if(!_||Dd(_)){ve=0,Jn=null;var I=O.sibling;if(I!==null)se=I;else{var W=O.return;W!==null?(se=W,nl(W)):se=null}break e}}ve=0,Jn=null,Pi(e,a,m,5);break;case 6:ve=0,Jn=null,Pi(e,a,m,6);break;case 8:Nf(),Ge=6;break t;default:throw Error(s(462))}}A4();break}catch(ut){qp(e,ut)}while(!0);return ga=Ws=null,nt.H=u,nt.A=h,be=i,se!==null?0:(Oe=null,le=0,Nu(),Ge)}function A4(){for(;se!==null&&!In();)Xp(se)}function Xp(e){var a=wp(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,a===null?nl(e):se=a}function Pp(e){var a=e,i=a.alternate;switch(a.tag){case 15:case 0:a=mp(i,a,a.pendingProps,a.type,void 0,le);break;case 11:a=mp(i,a,a.pendingProps,a.type.render,a.ref,le);break;case 5:Ic(a);default:Np(i,a),a=se=W1(a,Ea),a=wp(i,a,Ea)}e.memoizedProps=e.pendingProps,a===null?nl(e):se=a}function Pi(e,a,i,u){ga=Ws=null,Ic(a),ji=null,Mo=0;var h=a.return;try{if(g4(e,h,a,i,le)){Ge=1,Yu(e,pr(i,e.current)),se=null;return}}catch(m){if(h!==null)throw se=h,m;Ge=1,Yu(e,pr(i,e.current)),se=null;return}a.flags&32768?(pe||u===1?e=!0:Gi||(le&536870912)!==0?e=!1:(os=e=!0,(u===2||u===9||u===3||u===6)&&(u=yr.current,u!==null&&u.tag===13&&(u.flags|=16384))),Wp(a,e)):nl(a)}function nl(e){var a=e;do{if((a.flags&32768)!==0){Wp(a,os);return}e=a.return;var i=b4(a.alternate,a,Ea);if(i!==null){se=i;return}if(a=a.sibling,a!==null){se=a;return}se=a=e}while(a!==null);Ge===0&&(Ge=5)}function Wp(e,a){do{var i=v4(e.alternate,e);if(i!==null){i.flags&=32767,se=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!a&&(e=e.sibling,e!==null)){se=e;return}se=e=i}while(e!==null);Ge=6,se=null}function Qp(e,a,i,u,h,m,_,O,I){e.cancelPendingCommit=null;do rl();while(wn!==0);if((be&6)!==0)throw Error(s(327));if(a!==null){if(a===e.current)throw Error(s(177));if(m=a.lanes|a.childLanes,m|=dc,Cn(e,i,m,_,O,I),e===Oe&&(se=Oe=null,le=0),Ki=a,cs=e,Yi=i,Sf=m,wf=h,Fp=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$4(Re,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=nt.T,nt.T=null,h=vt.p,vt.p=2,_=be,be|=4;try{S4(e,a,i)}finally{be=_,vt.p=h,nt.T=u}}wn=1,Zp(),Jp(),td()}}function Zp(){if(wn===1){wn=0;var e=cs,a=Ki,i=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||i){i=nt.T,nt.T=null;var u=vt.p;vt.p=2;var h=be;be|=4;try{zp(a,e);var m=Lf,_=j1(e.containerInfo),O=m.focusedElem,I=m.selectionRange;if(_!==O&&O&&O.ownerDocument&&I1(O.ownerDocument.documentElement,O)){if(I!==null&&lc(O)){var W=I.start,ut=I.end;if(ut===void 0&&(ut=W),"selectionStart"in O)O.selectionStart=W,O.selectionEnd=Math.min(ut,O.value.length);else{var dt=O.ownerDocument||document,J=dt&&dt.defaultView||window;if(J.getSelection){var et=J.getSelection(),Ht=O.textContent.length,jt=Math.min(I.start,Ht),Ee=I.end===void 0?jt:Math.min(I.end,Ht);!et.extend&&jt>Ee&&(_=Ee,Ee=jt,jt=_);var K=U1(O,jt),q=U1(O,Ee);if(K&&q&&(et.rangeCount!==1||et.anchorNode!==K.node||et.anchorOffset!==K.offset||et.focusNode!==q.node||et.focusOffset!==q.offset)){var X=dt.createRange();X.setStart(K.node,K.offset),et.removeAllRanges(),jt>Ee?(et.addRange(X),et.extend(q.node,q.offset)):(X.setEnd(q.node,q.offset),et.addRange(X))}}}}for(dt=[],et=O;et=et.parentNode;)et.nodeType===1&&dt.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<dt.length;O++){var ft=dt[O];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}ml=!!Bf,Lf=Bf=null}finally{be=h,vt.p=u,nt.T=i}}e.current=a,wn=2}}function Jp(){if(wn===2){wn=0;var e=cs,a=Ki,i=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||i){i=nt.T,nt.T=null;var u=vt.p;vt.p=2;var h=be;be|=4;try{Dp(e,a.alternate,a)}finally{be=h,vt.p=u,nt.T=i}}wn=3}}function td(){if(wn===4||wn===3){wn=0,Yn();var e=cs,a=Ki,i=Yi,u=Fp;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?wn=5:(wn=0,Ki=cs=null,ed(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(ls=null),Ar(i),a=a.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(ln,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=nt.T,h=vt.p,vt.p=2,nt.T=null;try{for(var m=e.onRecoverableError,_=0;_<u.length;_++){var O=u[_];m(O.value,{componentStack:O.stack})}}finally{nt.T=a,vt.p=h}}(Yi&3)!==0&&rl(),ta(e),h=e.pendingLanes,(i&4194090)!==0&&(h&42)!==0?e===Tf?Go++:(Go=0,Tf=e):Go=0,qo(0)}}function ed(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Eo(a)))}function rl(e){return Zp(),Jp(),td(),nd()}function nd(){if(wn!==5)return!1;var e=cs,a=Sf;Sf=0;var i=Ar(Yi),u=nt.T,h=vt.p;try{vt.p=32>i?32:i,nt.T=null,i=wf,wf=null;var m=cs,_=Yi;if(wn=0,Ki=cs=null,Yi=0,(be&6)!==0)throw Error(s(331));var O=be;if(be|=4,Ip(m.current),Bp(m,m.current,_,i),be=O,qo(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(ln,m)}catch{}return!0}finally{vt.p=h,nt.T=u,ed(e,a)}}function rd(e,a,i){a=pr(i,a),a=Jc(e.stateNode,a,2),e=ts(e,a,2),e!==null&&(xn(e,2),ta(e))}function xe(e,a,i){if(e.tag===3)rd(e,e,i);else for(;a!==null;){if(a.tag===3){rd(a,e,i);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ls===null||!ls.has(u))){e=pr(i,e),i=op(2),u=ts(a,i,2),u!==null&&(up(i,u,a,e),xn(u,2),ta(u));break}}a=a.return}}function xf(e,a,i){var u=e.pingCache;if(u===null){u=e.pingCache=new N4;var h=new Set;u.set(a,h)}else h=u.get(a),h===void 0&&(h=new Set,u.set(a,h));h.has(i)||(gf=!0,h.add(i),e=O4.bind(null,e,a,i),a.then(e,e))}function O4(e,a,i){var u=e.pingCache;u!==null&&u.delete(a),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Oe===e&&(le&i)===i&&(Ge===4||Ge===3&&(le&62914560)===le&&300>nn()-vf?(be&2)===0&&Xi(e,0):yf|=i,qi===le&&(qi=0)),ta(e)}function ad(e,a){a===0&&(a=Fr()),e=Di(e,a),e!==null&&(xn(e,a),ta(e))}function k4(e){var a=e.memoizedState,i=0;a!==null&&(i=a.retryLane),ad(e,i)}function D4(e,a){var i=0;switch(e.tag){case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(i=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(a),ad(e,i)}function $4(e,a){return _r(e,a)}var al=null,Wi=null,Af=!1,sl=!1,Of=!1,ri=0;function ta(e){e!==Wi&&e.next===null&&(Wi===null?al=Wi=e:Wi=Wi.next=e),sl=!0,Af||(Af=!0,C4())}function qo(e,a){if(!Of&&sl){Of=!0;do for(var i=!1,u=al;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var _=u.suspendedLanes,O=u.pingedLanes;m=(1<<31-Ye(42|e)+1)-1,m&=h&~(_&~O),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(i=!0,ud(u,m))}else m=le,m=Ae(u,u===Oe?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Xe(u,m)||(i=!0,ud(u,m));u=u.next}while(i);Of=!1}}function R4(){sd()}function sd(){sl=Af=!1;var e=0;ri!==0&&(F4()&&(e=ri),ri=0);for(var a=nn(),i=null,u=al;u!==null;){var h=u.next,m=id(u,a);m===0?(u.next=null,i===null?al=h:i.next=h,h===null&&(Wi=i)):(i=u,(e!==0||(m&3)!==0)&&(sl=!0)),u=h}qo(e)}function id(e,a){for(var i=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var _=31-Ye(m),O=1<<_,I=h[_];I===-1?((O&i)===0||(O&u)!==0)&&(h[_]=oa(O,a)):I<=a&&(e.expiredLanes|=O),m&=~O}if(a=Oe,i=le,i=Ae(e,e===a?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,i===0||e===a&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&jr(u),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Xe(e,i)){if(a=i&-i,a===e.callbackPriority)return a;switch(u!==null&&jr(u),Ar(i)){case 2:case 8:i=aa;break;case 32:i=Re;break;case 268435456:i=ja;break;default:i=Re}return u=od.bind(null,e),i=_r(i,u),e.callbackPriority=a,e.callbackNode=i,a}return u!==null&&u!==null&&jr(u),e.callbackPriority=2,e.callbackNode=null,2}function od(e,a){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(rl()&&e.callbackNode!==i)return null;var u=le;return u=Ae(e,e===Oe?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(Hp(e,u,a),id(e,nn()),e.callbackNode!=null&&e.callbackNode===i?od.bind(null,e):null)}function ud(e,a){if(rl())return null;Hp(e,a,!0)}function C4(){H4(function(){(be&6)!==0?_r(jn,R4):sd()})}function kf(){return ri===0&&(ri=me()),ri}function ld(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:E(""+e)}function cd(e,a){var i=a.ownerDocument.createElement("input");return i.name=a.name,i.value=a.value,e.id&&i.setAttribute("form",e.id),a.parentNode.insertBefore(i,a),e=new FormData(e),i.parentNode.removeChild(i),e}function z4(e,a,i,u,h){if(a==="submit"&&i&&i.stateNode===h){var m=ld((h[$e]||null).action),_=u.submitter;_&&(a=(a=_[$e]||null)?ld(a.formAction):_.getAttribute("formAction"),a!==null&&(m=a,_=null));var O=new Z("action","action",null,u,h);e.push({event:O,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ri!==0){var I=_?cd(h,_):new FormData(h);Xc(i,{pending:!0,data:I,method:h.method,action:m},null,I)}}else typeof m=="function"&&(O.preventDefault(),I=_?cd(h,_):new FormData(h),Xc(i,{pending:!0,data:I,method:h.method,action:m},m,I))},currentTarget:h}]})}}for(var Df=0;Df<pc.length;Df++){var $f=pc[Df],M4=$f.toLowerCase(),B4=$f[0].toUpperCase()+$f.slice(1);$r(M4,"on"+B4)}$r(H1,"onAnimationEnd"),$r(G1,"onAnimationIteration"),$r(q1,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(J0,"onTransitionRun"),$r(t4,"onTransitionStart"),$r(e4,"onTransitionCancel"),$r(K1,"onTransitionEnd"),Kr("onMouseEnter",["mouseout","mouseover"]),Kr("onMouseLeave",["mouseout","mouseover"]),Kr("onPointerEnter",["pointerout","pointerover"]),Kr("onPointerLeave",["pointerout","pointerover"]),Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function fd(e,a){a=(a&4)!==0;for(var i=0;i<e.length;i++){var u=e[i],h=u.event;u=u.listeners;t:{var m=void 0;if(a)for(var _=u.length-1;0<=_;_--){var O=u[_],I=O.instance,W=O.currentTarget;if(O=O.listener,I!==m&&h.isPropagationStopped())break t;m=O,h.currentTarget=W;try{m(h)}catch(ut){Ku(ut)}h.currentTarget=null,m=I}else for(_=0;_<u.length;_++){if(O=u[_],I=O.instance,W=O.currentTarget,O=O.listener,I!==m&&h.isPropagationStopped())break t;m=O,h.currentTarget=W;try{m(h)}catch(ut){Ku(ut)}h.currentTarget=null,m=I}}}}function ie(e,a){var i=a[Cs];i===void 0&&(i=a[Cs]=new Set);var u=e+"__bubble";i.has(u)||(hd(a,e,2,!1),i.add(u))}function Rf(e,a,i){var u=0;a&&(u|=4),hd(i,e,u,a)}var il="_reactListening"+Math.random().toString(36).slice(2);function Cf(e){if(!e[il]){e[il]=!0,la.forEach(function(i){i!=="selectionchange"&&(L4.has(i)||Rf(i,!1,e),Rf(i,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[il]||(a[il]=!0,Rf("selectionchange",!1,a))}}function hd(e,a,i,u){switch(Bd(a)){case 2:var h=cg;break;case 8:h=fg;break;default:h=Yf}i=h.bind(null,a,i,e),h=void 0,!qt||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(a,i,{capture:!0,passive:h}):e.addEventListener(a,i,!0):h!==void 0?e.addEventListener(a,i,{passive:h}):e.addEventListener(a,i,!1)}function zf(e,a,i,u,h){var m=u;if((a&1)===0&&(a&2)===0&&u!==null)t:for(;;){if(u===null)return;var _=u.tag;if(_===3||_===4){var O=u.stateNode.containerInfo;if(O===h)break;if(_===4)for(_=u.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;O!==null;){if(_=Mn(O),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){u=m=_;continue t}O=O.parentNode}}u=u.return}xt(function(){var W=m,ut=Y(i),dt=[];t:{var J=Y1.get(e);if(J!==void 0){var et=Z,Ht=e;switch(e){case"keypress":if(k(i)===0)break t;case"keydown":case"keyup":et=$0;break;case"focusin":Ht="focus",et=On;break;case"focusout":Ht="blur",et=On;break;case"beforeblur":case"afterblur":et=On;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Kt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=we;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=z0;break;case H1:case G1:case q1:et=ce;break;case K1:et=B0;break;case"scroll":case"scrollend":et=pt;break;case"wheel":et=U0;break;case"copy":case"cut":case"paste":et=Pr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=E1;break;case"toggle":case"beforetoggle":et=j0}var jt=(a&4)!==0,Ee=!jt&&(e==="scroll"||e==="scrollend"),K=jt?J!==null?J+"Capture":null:J;jt=[];for(var q=W,X;q!==null;){var ft=q;if(X=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||X===null||K===null||(ft=Lt(q,K),ft!=null&&jt.push(Yo(q,ft,X))),Ee)break;q=q.return}0<jt.length&&(J=new et(J,Ht,null,i,ut),dt.push({event:J,listeners:jt}))}}if((a&7)===0){t:{if(J=e==="mouseover"||e==="pointerover",et=e==="mouseout"||e==="pointerout",J&&i!==U&&(Ht=i.relatedTarget||i.fromElement)&&(Mn(Ht)||Ht[Or]))break t;if((et||J)&&(J=ut.window===ut?ut:(J=ut.ownerDocument)?J.defaultView||J.parentWindow:window,et?(Ht=i.relatedTarget||i.toElement,et=W,Ht=Ht?Mn(Ht):null,Ht!==null&&(Ee=l(Ht),jt=Ht.tag,Ht!==Ee||jt!==5&&jt!==27&&jt!==6)&&(Ht=null)):(et=null,Ht=W),et!==Ht)){if(jt=Kt,ft="onMouseLeave",K="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(jt=E1,ft="onPointerLeave",K="onPointerEnter",q="pointer"),Ee=et==null?J:qr(et),X=Ht==null?J:qr(Ht),J=new jt(ft,q+"leave",et,i,ut),J.target=Ee,J.relatedTarget=X,ft=null,Mn(ut)===W&&(jt=new jt(K,q+"enter",Ht,i,ut),jt.target=X,jt.relatedTarget=Ee,ft=jt),Ee=ft,et&&Ht)e:{for(jt=et,K=Ht,q=0,X=jt;X;X=Qi(X))q++;for(X=0,ft=K;ft;ft=Qi(ft))X++;for(;0<q-X;)jt=Qi(jt),q--;for(;0<X-q;)K=Qi(K),X--;for(;q--;){if(jt===K||K!==null&&jt===K.alternate)break e;jt=Qi(jt),K=Qi(K)}jt=null}else jt=null;et!==null&&pd(dt,J,et,jt,!1),Ht!==null&&Ee!==null&&pd(dt,Ee,Ht,jt,!0)}}t:{if(J=W?qr(W):window,et=J.nodeName&&J.nodeName.toLowerCase(),et==="select"||et==="input"&&J.type==="file")var kt=R1;else if(D1(J))if(C1)kt=W0;else{kt=X0;var te=Y0}else et=J.nodeName,!et||et.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?W&&Pa(W.elementType)&&(kt=R1):kt=P0;if(kt&&(kt=kt(e,W))){$1(dt,kt,i,ut);break t}te&&te(e,J,W),e==="focusout"&&W&&J.type==="number"&&W.memoizedProps.value!=null&&fa(J,"number",J.value)}switch(te=W?qr(W):window,e){case"focusin":(D1(te)||te.contentEditable==="true")&&(Ai=te,cc=W,vo=null);break;case"focusout":vo=cc=Ai=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,F1(dt,i,ut);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":F1(dt,i,ut)}var Rt;if(ic)t:{switch(e){case"compositionstart":var Ft="onCompositionStart";break t;case"compositionend":Ft="onCompositionEnd";break t;case"compositionupdate":Ft="onCompositionUpdate";break t}Ft=void 0}else xi?O1(e,i)&&(Ft="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Ft="onCompositionStart");Ft&&(_1&&i.locale!=="ko"&&(xi||Ft!=="onCompositionStart"?Ft==="onCompositionEnd"&&xi&&(Rt=x()):(Ot=ut,g="value"in Ot?Ot.value:Ot.textContent,xi=!0)),te=ol(W,Ft),0<te.length&&(Ft=new ho(Ft,e,null,i,ut),dt.push({event:Ft,listeners:te}),Rt?Ft.data=Rt:(Rt=k1(i),Rt!==null&&(Ft.data=Rt)))),(Rt=V0?H0(e,i):G0(e,i))&&(Ft=ol(W,"onBeforeInput"),0<Ft.length&&(te=new ho("onBeforeInput","beforeinput",null,i,ut),dt.push({event:te,listeners:Ft}),te.data=Rt)),z4(dt,e,W,i,ut)}fd(dt,a)})}function Yo(e,a,i){return{instance:e,listener:a,currentTarget:i}}function ol(e,a){for(var i=a+"Capture",u=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Lt(e,i),h!=null&&u.unshift(Yo(e,h,m)),h=Lt(e,a),h!=null&&u.push(Yo(e,h,m))),e.tag===3)return u;e=e.return}return[]}function Qi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pd(e,a,i,u,h){for(var m=a._reactName,_=[];i!==null&&i!==u;){var O=i,I=O.alternate,W=O.stateNode;if(O=O.tag,I!==null&&I===u)break;O!==5&&O!==26&&O!==27||W===null||(I=W,h?(W=Lt(i,m),W!=null&&_.unshift(Yo(i,W,I))):h||(W=Lt(i,m),W!=null&&_.push(Yo(i,W,I)))),i=i.return}_.length!==0&&e.push({event:a,listeners:_})}var U4=/\r\n?/g,I4=/\u0000|\uFFFD/g;function dd(e){return(typeof e=="string"?e:""+e).replace(U4,`
`).replace(I4,"")}function md(e,a){return a=dd(a),dd(e)===a}function ul(){}function Ne(e,a,i,u,h,m){switch(i){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||hr(e,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&hr(e,""+u);break;case"className":cr(e,"class",u);break;case"tabIndex":cr(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":cr(e,i,u);break;case"style":Vs(e,u,m);break;case"data":if(a!=="object"){cr(e,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||i!=="href")){e.removeAttribute(i);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(i);break}u=E(""+u),e.setAttribute(i,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(i==="formAction"?(a!=="input"&&Ne(e,a,"name",h.name,h,null),Ne(e,a,"formEncType",h.formEncType,h,null),Ne(e,a,"formMethod",h.formMethod,h,null),Ne(e,a,"formTarget",h.formTarget,h,null)):(Ne(e,a,"encType",h.encType,h,null),Ne(e,a,"method",h.method,h,null),Ne(e,a,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(i);break}u=E(""+u),e.setAttribute(i,u);break;case"onClick":u!=null&&(e.onclick=ul);break;case"onScroll":u!=null&&ie("scroll",e);break;case"onScrollEnd":u!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(i=u.__html,i!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=i}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}i=E(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(i,""+u):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":u===!0?e.setAttribute(i,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(i,u):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(i,u):e.removeAttribute(i);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(i):e.setAttribute(i,u);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Yr(e,"popover",u);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Yr(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=b.get(i)||i,Yr(e,i,u))}}function Mf(e,a,i,u,h,m){switch(i){case"style":Vs(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(i=u.__html,i!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=i}}break;case"children":typeof u=="string"?hr(e,u):(typeof u=="number"||typeof u=="bigint")&&hr(e,""+u);break;case"onScroll":u!=null&&ie("scroll",e);break;case"onScrollEnd":u!=null&&ie("scrollend",e);break;case"onClick":u!=null&&(e.onclick=ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lr.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(h=i.endsWith("Capture"),a=i.slice(2,h?i.length-7:void 0),m=e[$e]||null,m=m!=null?m[i]:null,typeof m=="function"&&e.removeEventListener(a,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(a,u,h);break t}i in e?e[i]=u:u===!0?e.setAttribute(i,""):Yr(e,i,u)}}}function Tn(e,a,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var u=!1,h=!1,m;for(m in i)if(i.hasOwnProperty(m)){var _=i[m];if(_!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Ne(e,a,m,_,i,null)}}h&&Ne(e,a,"srcSet",i.srcSet,i,null),u&&Ne(e,a,"src",i.src,i,null);return;case"input":ie("invalid",e);var O=m=_=h=null,I=null,W=null;for(u in i)if(i.hasOwnProperty(u)){var ut=i[u];if(ut!=null)switch(u){case"name":h=ut;break;case"type":_=ut;break;case"checked":I=ut;break;case"defaultChecked":W=ut;break;case"value":m=ut;break;case"defaultValue":O=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,a));break;default:Ne(e,a,u,ut,i,null)}}Ei(e,m,O,I,W,_,h,!1),qa(e);return;case"select":ie("invalid",e),u=_=m=null;for(h in i)if(i.hasOwnProperty(h)&&(O=i[h],O!=null))switch(h){case"value":m=O;break;case"defaultValue":_=O;break;case"multiple":u=O;default:Ne(e,a,h,O,i,null)}a=m,i=_,e.multiple=!!u,a!=null?fr(e,!!u,a,!1):i!=null&&fr(e,!!u,i,!0);return;case"textarea":ie("invalid",e),m=h=u=null;for(_ in i)if(i.hasOwnProperty(_)&&(O=i[_],O!=null))switch(_){case"value":u=O;break;case"defaultValue":h=O;break;case"children":m=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(91));break;default:Ne(e,a,_,O,i,null)}Ya(e,u,h,m),qa(e);return;case"option":for(I in i)if(i.hasOwnProperty(I)&&(u=i[I],u!=null))switch(I){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Ne(e,a,I,u,i,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(u=0;u<Ko.length;u++)ie(Ko[u],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in i)if(i.hasOwnProperty(W)&&(u=i[W],u!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,a));default:Ne(e,a,W,u,i,null)}return;default:if(Pa(a)){for(ut in i)i.hasOwnProperty(ut)&&(u=i[ut],u!==void 0&&Mf(e,a,ut,u,i,void 0));return}}for(O in i)i.hasOwnProperty(O)&&(u=i[O],u!=null&&Ne(e,a,O,u,i,null))}function j4(e,a,i,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,_=null,O=null,I=null,W=null,ut=null;for(et in i){var dt=i[et];if(i.hasOwnProperty(et)&&dt!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":I=dt;default:u.hasOwnProperty(et)||Ne(e,a,et,null,u,dt)}}for(var J in u){var et=u[J];if(dt=i[J],u.hasOwnProperty(J)&&(et!=null||dt!=null))switch(J){case"type":m=et;break;case"name":h=et;break;case"checked":W=et;break;case"defaultChecked":ut=et;break;case"value":_=et;break;case"defaultValue":O=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,a));break;default:et!==dt&&Ne(e,a,J,et,u,dt)}}js(e,_,O,I,W,ut,m,h);return;case"select":et=_=O=J=null;for(m in i)if(I=i[m],i.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":et=I;default:u.hasOwnProperty(m)||Ne(e,a,m,null,u,I)}for(h in u)if(m=u[h],I=i[h],u.hasOwnProperty(h)&&(m!=null||I!=null))switch(h){case"value":J=m;break;case"defaultValue":O=m;break;case"multiple":_=m;default:m!==I&&Ne(e,a,h,m,u,I)}a=O,i=_,u=et,J!=null?fr(e,!!i,J,!1):!!u!=!!i&&(a!=null?fr(e,!!i,a,!0):fr(e,!!i,i?[]:"",!1));return;case"textarea":et=J=null;for(O in i)if(h=i[O],i.hasOwnProperty(O)&&h!=null&&!u.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:Ne(e,a,O,null,u,h)}for(_ in u)if(h=u[_],m=i[_],u.hasOwnProperty(_)&&(h!=null||m!=null))switch(_){case"value":J=h;break;case"defaultValue":et=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==m&&Ne(e,a,_,h,u,m)}Ka(e,J,et);return;case"option":for(var Ht in i)if(J=i[Ht],i.hasOwnProperty(Ht)&&J!=null&&!u.hasOwnProperty(Ht))switch(Ht){case"selected":e.selected=!1;break;default:Ne(e,a,Ht,null,u,J)}for(I in u)if(J=u[I],et=i[I],u.hasOwnProperty(I)&&J!==et&&(J!=null||et!=null))switch(I){case"selected":e.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:Ne(e,a,I,J,u,et)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in i)J=i[jt],i.hasOwnProperty(jt)&&J!=null&&!u.hasOwnProperty(jt)&&Ne(e,a,jt,null,u,J);for(W in u)if(J=u[W],et=i[W],u.hasOwnProperty(W)&&J!==et&&(J!=null||et!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(s(137,a));break;default:Ne(e,a,W,J,u,et)}return;default:if(Pa(a)){for(var Ee in i)J=i[Ee],i.hasOwnProperty(Ee)&&J!==void 0&&!u.hasOwnProperty(Ee)&&Mf(e,a,Ee,void 0,u,J);for(ut in u)J=u[ut],et=i[ut],!u.hasOwnProperty(ut)||J===et||J===void 0&&et===void 0||Mf(e,a,ut,J,u,et);return}}for(var K in i)J=i[K],i.hasOwnProperty(K)&&J!=null&&!u.hasOwnProperty(K)&&Ne(e,a,K,null,u,J);for(dt in u)J=u[dt],et=i[dt],!u.hasOwnProperty(dt)||J===et||J==null&&et==null||Ne(e,a,dt,J,u,et)}var Bf=null,Lf=null;function ll(e){return e.nodeType===9?e:e.ownerDocument}function gd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yd(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Uf(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var If=null;function F4(){var e=window.event;return e&&e.type==="popstate"?e===If?!1:(If=e,!0):(If=null,!1)}var bd=typeof setTimeout=="function"?setTimeout:void 0,V4=typeof clearTimeout=="function"?clearTimeout:void 0,vd=typeof Promise=="function"?Promise:void 0,H4=typeof queueMicrotask=="function"?queueMicrotask:typeof vd<"u"?function(e){return vd.resolve(null).then(e).catch(G4)}:bd;function G4(e){setTimeout(function(){throw e})}function hs(e){return e==="head"}function Sd(e,a){var i=a,u=0,h=0;do{var m=i.nextSibling;if(e.removeChild(i),m&&m.nodeType===8)if(i=m.data,i==="/$"){if(0<u&&8>u){i=u;var _=e.ownerDocument;if(i&1&&Xo(_.documentElement),i&2&&Xo(_.body),i&4)for(i=_.head,Xo(i),_=i.firstChild;_;){var O=_.nextSibling,I=_.nodeName;_[ur]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&_.rel.toLowerCase()==="stylesheet"||i.removeChild(_),_=O}}if(h===0){e.removeChild(m),nu(a);return}h--}else i==="$"||i==="$?"||i==="$!"?h++:u=i.charCodeAt(0)-48;else u=0;i=m}while(i);nu(a)}function jf(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var i=a;switch(a=a.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":jf(i),Fa(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function q4(e,a,i,u){for(;e.nodeType===1;){var h=i;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[ur])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Cr(e.nextSibling),e===null)break}return null}function K4(e,a,i){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Cr(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Y4(e,a){var i=e.ownerDocument;if(e.data!=="$?"||i.readyState==="complete")a();else{var u=function(){a(),i.removeEventListener("DOMContentLoaded",u)};i.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Cr(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var Vf=null;function wd(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(a===0)return e;a--}else i==="/$"&&a++}e=e.previousSibling}return null}function Td(e,a,i){switch(a=ll(i),e){case"html":if(e=a.documentElement,!e)throw Error(s(452));return e;case"head":if(e=a.head,!e)throw Error(s(453));return e;case"body":if(e=a.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Xo(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Fa(e)}var vr=new Map,Nd=new Set;function cl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=vt.d;vt.d={f:X4,r:P4,D:W4,C:Q4,L:Z4,m:J4,X:eg,S:tg,M:ng};function X4(){var e=_a.f(),a=el();return e||a}function P4(e){var a=Gr(e);a!==null&&a.tag===5&&a.type==="form"?H2(a):_a.r(e)}var Zi=typeof document>"u"?null:document;function Ed(e,a,i){var u=Zi;if(u&&typeof a=="string"&&a){var h=bn(a);h='link[rel="'+e+'"][href="'+h+'"]',typeof i=="string"&&(h+='[crossorigin="'+i+'"]'),Nd.has(h)||(Nd.add(h),e={rel:e,crossOrigin:i,href:a},u.querySelector(h)===null&&(a=u.createElement("link"),Tn(a,"link",e),Le(a),u.head.appendChild(a)))}}function W4(e){_a.D(e),Ed("dns-prefetch",e,null)}function Q4(e,a){_a.C(e,a),Ed("preconnect",e,a)}function Z4(e,a,i){_a.L(e,a,i);var u=Zi;if(u&&e&&a){var h='link[rel="preload"][as="'+bn(a)+'"]';a==="image"&&i&&i.imageSrcSet?(h+='[imagesrcset="'+bn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(h+='[imagesizes="'+bn(i.imageSizes)+'"]')):h+='[href="'+bn(e)+'"]';var m=h;switch(a){case"style":m=Ji(e);break;case"script":m=to(e)}vr.has(m)||(e=y({rel:"preload",href:a==="image"&&i&&i.imageSrcSet?void 0:e,as:a},i),vr.set(m,e),u.querySelector(h)!==null||a==="style"&&u.querySelector(Po(m))||a==="script"&&u.querySelector(Wo(m))||(a=u.createElement("link"),Tn(a,"link",e),Le(a),u.head.appendChild(a)))}}function J4(e,a){_a.m(e,a);var i=Zi;if(i&&e){var u=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+bn(u)+'"][href="'+bn(e)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=to(e)}if(!vr.has(m)&&(e=y({rel:"modulepreload",href:e},a),vr.set(m,e),i.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Wo(m)))return}u=i.createElement("link"),Tn(u,"link",e),Le(u),i.head.appendChild(u)}}}function tg(e,a,i){_a.S(e,a,i);var u=Zi;if(u&&e){var h=kr(u).hoistableStyles,m=Ji(e);a=a||"default";var _=h.get(m);if(!_){var O={loading:0,preload:null};if(_=u.querySelector(Po(m)))O.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":a},i),(i=vr.get(m))&&Hf(e,i);var I=_=u.createElement("link");Le(I),Tn(I,"link",e),I._p=new Promise(function(W,ut){I.onload=W,I.onerror=ut}),I.addEventListener("load",function(){O.loading|=1}),I.addEventListener("error",function(){O.loading|=2}),O.loading|=4,fl(_,a,u)}_={type:"stylesheet",instance:_,count:1,state:O},h.set(m,_)}}}function eg(e,a){_a.X(e,a);var i=Zi;if(i&&e){var u=kr(i).hoistableScripts,h=to(e),m=u.get(h);m||(m=i.querySelector(Wo(h)),m||(e=y({src:e,async:!0},a),(a=vr.get(h))&&Gf(e,a),m=i.createElement("script"),Le(m),Tn(m,"link",e),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function ng(e,a){_a.M(e,a);var i=Zi;if(i&&e){var u=kr(i).hoistableScripts,h=to(e),m=u.get(h);m||(m=i.querySelector(Wo(h)),m||(e=y({src:e,async:!0,type:"module"},a),(a=vr.get(h))&&Gf(e,a),m=i.createElement("script"),Le(m),Tn(m,"link",e),i.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function _d(e,a,i,u){var h=(h=Bt.current)?cl(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(a=Ji(i.href),i=kr(h).hoistableStyles,u=i.get(a),u||(u={type:"style",instance:null,count:0,state:null},i.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Ji(i.href);var m=kr(h).hoistableStyles,_=m.get(e);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,_),(m=h.querySelector(Po(e)))&&!m._p&&(_.instance=m,_.state.loading=5),vr.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},vr.set(e,i),m||rg(h,e,i,_.state))),a&&u===null)throw Error(s(528,""));return _}if(a&&u!==null)throw Error(s(529,""));return null;case"script":return a=i.async,i=i.src,typeof i=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=to(i),i=kr(h).hoistableScripts,u=i.get(a),u||(u={type:"script",instance:null,count:0,state:null},i.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ji(e){return'href="'+bn(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function xd(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function rg(e,a,i,u){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=e.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),Tn(a,"link",i),Le(a),e.head.appendChild(a))}function to(e){return'[src="'+bn(e)+'"]'}function Wo(e){return"script[async]"+e}function Ad(e,a,i){if(a.count++,a.instance===null)switch(a.type){case"style":var u=e.querySelector('style[data-href~="'+bn(i.href)+'"]');if(u)return a.instance=u,Le(u),u;var h=y({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),Le(u),Tn(u,"style",h),fl(u,i.precedence,e),a.instance=u;case"stylesheet":h=Ji(i.href);var m=e.querySelector(Po(h));if(m)return a.state.loading|=4,a.instance=m,Le(m),m;u=xd(i),(h=vr.get(h))&&Hf(u,h),m=(e.ownerDocument||e).createElement("link"),Le(m);var _=m;return _._p=new Promise(function(O,I){_.onload=O,_.onerror=I}),Tn(m,"link",u),a.state.loading|=4,fl(m,i.precedence,e),a.instance=m;case"script":return m=to(i.src),(h=e.querySelector(Wo(m)))?(a.instance=h,Le(h),h):(u=i,(h=vr.get(m))&&(u=y({},i),Gf(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),Le(h),Tn(h,"link",u),e.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(s(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,fl(u,i.precedence,e));return a.instance}function fl(e,a,i){for(var u=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,_=0;_<u.length;_++){var O=u[_];if(O.dataset.precedence===a)m=O;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(a=i.nodeType===9?i.head:i,a.insertBefore(e,a.firstChild))}function Hf(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Gf(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var hl=null;function Od(e,a,i){if(hl===null){var u=new Map,h=hl=new Map;h.set(i,u)}else h=hl,u=h.get(i),u||(u=new Map,h.set(i,u));if(u.has(e))return u;for(u.set(e,null),i=i.getElementsByTagName(e),h=0;h<i.length;h++){var m=i[h];if(!(m[ur]||m[ge]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var _=m.getAttribute(a)||"";_=e+_;var O=u.get(_);O?O.push(m):u.set(_,[m])}}return u}function kd(e,a,i){e=e.ownerDocument||e,e.head.insertBefore(i,a==="title"?e.querySelector("head > title"):null)}function ag(e,a,i){if(i===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Dd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Qo=null;function sg(){}function ig(e,a,i){if(Qo===null)throw Error(s(475));var u=Qo;if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Ji(i.href),m=e.querySelector(Po(h));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(u.count++,u=pl.bind(u),e.then(u,u)),a.state.loading|=4,a.instance=m,Le(m);return}m=e.ownerDocument||e,i=xd(i),(h=vr.get(h))&&Hf(i,h),m=m.createElement("link"),Le(m);var _=m;_._p=new Promise(function(O,I){_.onload=O,_.onerror=I}),Tn(m,"link",i),a.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=pl.bind(u),e.addEventListener("load",a),e.addEventListener("error",a))}}function og(){if(Qo===null)throw Error(s(475));var e=Qo;return e.stylesheets&&e.count===0&&qf(e,e.stylesheets),0<e.count?function(a){var i=setTimeout(function(){if(e.stylesheets&&qf(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i)}}:null}function pl(){if(this.count--,this.count===0){if(this.stylesheets)qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dl=null;function qf(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dl=new Map,a.forEach(ug,e),dl=null,pl.call(e))}function ug(e,a){if(!(a.state.loading&4)){var i=dl.get(e);if(i)var u=i.get(null);else{i=new Map,dl.set(e,i);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var _=h[m];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(i.set(_.dataset.precedence,_),u=_)}u&&i.set(null,u)}h=a.instance,_=h.getAttribute("data-precedence"),m=i.get(_)||u,m===u&&i.set(null,h),i.set(_,h),this.count++,u=pl.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),a.state.loading|=4}}var Zo={$$typeof:rt,Provider:null,Consumer:null,_currentValue:Dt,_currentValue2:Dt,_threadCount:0};function lg(e,a,i,u,h,m,_,O){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ua(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.hiddenUpdates=ua(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function $d(e,a,i,u,h,m,_,O,I,W,ut,dt){return e=new lg(e,a,i,_,O,I,W,dt),a=1,m===!0&&(a|=24),m=Wn(3,null,null,a),e.current=m,m.stateNode=e,a=_c(),a.refCount++,e.pooledCache=a,a.refCount++,m.memoizedState={element:u,isDehydrated:i,cache:a},kc(m),e}function Rd(e){return e?(e=$i,e):$i}function Cd(e,a,i,u,h,m){h=Rd(h),u.context===null?u.context=h:u.pendingContext=h,u=Ja(a),u.payload={element:i},m=m===void 0?null:m,m!==null&&(u.callback=m),i=ts(e,u,a),i!==null&&(er(i,e,a),Oo(i,e,a))}function zd(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<a?i:a}}function Kf(e,a){zd(e,a),(e=e.alternate)&&zd(e,a)}function Md(e){if(e.tag===13){var a=Di(e,67108864);a!==null&&er(a,e,67108864),Kf(e,67108864)}}var ml=!0;function cg(e,a,i,u){var h=nt.T;nt.T=null;var m=vt.p;try{vt.p=2,Yf(e,a,i,u)}finally{vt.p=m,nt.T=h}}function fg(e,a,i,u){var h=nt.T;nt.T=null;var m=vt.p;try{vt.p=8,Yf(e,a,i,u)}finally{vt.p=m,nt.T=h}}function Yf(e,a,i,u){if(ml){var h=Xf(u);if(h===null)zf(e,a,u,gl,i),Ld(e,u);else if(pg(h,e,a,i,u))u.stopPropagation();else if(Ld(e,u),a&4&&-1<hg.indexOf(e)){for(;h!==null;){var m=Gr(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var _=de(m.pendingLanes);if(_!==0){var O=m;for(O.pendingLanes|=2,O.entangledLanes|=2;_;){var I=1<<31-Ye(_);O.entanglements[1]|=I,_&=~I}ta(m),(be&6)===0&&(Ju=nn()+500,qo(0))}}break;case 13:O=Di(m,2),O!==null&&er(O,m,2),el(),Kf(m,2)}if(m=Xf(u),m===null&&zf(e,a,u,gl,i),m===h)break;h=m}h!==null&&u.stopPropagation()}else zf(e,a,u,null,i)}}function Xf(e){return e=Y(e),Pf(e)}var gl=null;function Pf(e){if(gl=null,e=Mn(e),e!==null){var a=l(e);if(a===null)e=null;else{var i=a.tag;if(i===13){if(e=c(a),e!==null)return e;e=null}else if(i===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return gl=e,null}function Bd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_n()){case jn:return 2;case aa:return 8;case Re:case sa:return 32;case ja:return 268435456;default:return 32}default:return 32}}var Wf=!1,ps=null,ds=null,ms=null,Jo=new Map,tu=new Map,gs=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ld(e,a){switch(e){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":ds=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":Jo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":tu.delete(a.pointerId)}}function eu(e,a,i,u,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:a,domEventName:i,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},a!==null&&(a=Gr(a),a!==null&&Md(a)),e):(e.eventSystemFlags|=u,a=e.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),e)}function pg(e,a,i,u,h){switch(a){case"focusin":return ps=eu(ps,e,a,i,u,h),!0;case"dragenter":return ds=eu(ds,e,a,i,u,h),!0;case"mouseover":return ms=eu(ms,e,a,i,u,h),!0;case"pointerover":var m=h.pointerId;return Jo.set(m,eu(Jo.get(m)||null,e,a,i,u,h)),!0;case"gotpointercapture":return m=h.pointerId,tu.set(m,eu(tu.get(m)||null,e,a,i,u,h)),!0}return!1}function Ud(e){var a=Mn(e.target);if(a!==null){var i=l(a);if(i!==null){if(a=i.tag,a===13){if(a=c(i),a!==null){e.blockedOn=a,ir(e.priority,function(){if(i.tag===13){var u=tr();u=Vr(u);var h=Di(i,u);h!==null&&er(h,i,u),Kf(i,u)}});return}}else if(a===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yl(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var i=Xf(e.nativeEvent);if(i===null){i=e.nativeEvent;var u=new i.constructor(i.type,i);U=u,i.target.dispatchEvent(u),U=null}else return a=Gr(i),a!==null&&Md(a),e.blockedOn=i,!1;a.shift()}return!0}function Id(e,a,i){yl(e)&&i.delete(a)}function dg(){Wf=!1,ps!==null&&yl(ps)&&(ps=null),ds!==null&&yl(ds)&&(ds=null),ms!==null&&yl(ms)&&(ms=null),Jo.forEach(Id),tu.forEach(Id)}function bl(e,a){e.blockedOn===a&&(e.blockedOn=null,Wf||(Wf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,dg)))}var vl=null;function jd(e){vl!==e&&(vl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vl===e&&(vl=null);for(var a=0;a<e.length;a+=3){var i=e[a],u=e[a+1],h=e[a+2];if(typeof u!="function"){if(Pf(u||i)===null)continue;break}var m=Gr(i);m!==null&&(e.splice(a,3),a-=3,Xc(m,{pending:!0,data:h,method:i.method,action:u},u,h))}}))}function nu(e){function a(I){return bl(I,e)}ps!==null&&bl(ps,e),ds!==null&&bl(ds,e),ms!==null&&bl(ms,e),Jo.forEach(a),tu.forEach(a);for(var i=0;i<gs.length;i++){var u=gs[i];u.blockedOn===e&&(u.blockedOn=null)}for(;0<gs.length&&(i=gs[0],i.blockedOn===null);)Ud(i),i.blockedOn===null&&gs.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(u=0;u<i.length;u+=3){var h=i[u],m=i[u+1],_=h[$e]||null;if(typeof m=="function")_||jd(i);else if(_){var O=null;if(m&&m.hasAttribute("formAction")){if(h=m,_=m[$e]||null)O=_.formAction;else if(Pf(h)!==null)continue}else O=_.action;typeof O=="function"?i[u+1]=O:(i.splice(u,3),u-=3),jd(i)}}}function Qf(e){this._internalRoot=e}Sl.prototype.render=Qf.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(s(409));var i=a.current,u=tr();Cd(i,u,e,a,null,null)},Sl.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Cd(e.current,2,null,e,null,null),el(),a[Or]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var a=Hr();e={blockedOn:null,target:e,priority:a};for(var i=0;i<gs.length&&a!==0&&a<gs[i].priority;i++);gs.splice(i,0,e),i===0&&Ud(e)}};var Fd=t.version;if(Fd!=="19.1.0")throw Error(s(527,Fd,"19.1.0"));vt.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(a),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var mg={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:nt,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{ln=wl.inject(mg),Ke=wl}catch{}}return au.createRoot=function(e,a){if(!o(e))throw Error(s(299));var i=!1,u="",h=rp,m=ap,_=sp,O=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(_=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks)),a=$d(e,1,!1,null,null,i,u,h,m,_,O,null),e[Or]=a.current,Cf(e),new Qf(a)},au.hydrateRoot=function(e,a,i){if(!o(e))throw Error(s(299));var u=!1,h="",m=rp,_=ap,O=sp,I=null,W=null;return i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onUncaughtError!==void 0&&(m=i.onUncaughtError),i.onCaughtError!==void 0&&(_=i.onCaughtError),i.onRecoverableError!==void 0&&(O=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(I=i.unstable_transitionCallbacks),i.formState!==void 0&&(W=i.formState)),a=$d(e,1,!0,a,i??null,u,h,m,_,O,I,W),a.context=Rd(null),i=a.current,u=tr(),u=Vr(u),h=Ja(u),h.callback=null,ts(i,h,u),i=u,a.current.lanes=i,xn(a,i),ta(a),e[Or]=a.current,Cf(e),new Sl(a)},au.version="19.1.0",au}var Zd;function xg(){if(Zd)return th.exports;Zd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),th.exports=_g(),th.exports}var Ag=xg(),ah={},Jd;function Og(){return Jd||(Jd=1,(function(){var r;function t(b){var w=0;return function(){return w<b.length?{done:!1,value:b[w++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(b,w,E){return b==Array.prototype||b==Object.prototype||(b[w]=E.value),b};function s(b){b=[typeof globalThis=="object"&&globalThis,b,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vd=="object"&&Vd];for(var w=0;w<b.length;++w){var E=b[w];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var o=s(this);function l(b,w){if(w)t:{var E=o;b=b.split(".");for(var U=0;U<b.length-1;U++){var Y=b[U];if(!(Y in E))break t;E=E[Y]}b=b[b.length-1],U=E[b],w=w(U),w!=U&&w!=null&&n(E,b,{configurable:!0,writable:!0,value:w})}}l("Symbol",function(b){function w(at){if(this instanceof w)throw new TypeError("Symbol is not a constructor");return new E(U+(at||"")+"_"+Y++,at)}function E(at,P){this.g=at,n(this,"description",{configurable:!0,writable:!0,value:P})}if(b)return b;E.prototype.toString=function(){return this.g};var U="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",Y=0;return w}),l("Symbol.iterator",function(b){if(b)return b;b=Symbol("Symbol.iterator");for(var w="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),E=0;E<w.length;E++){var U=o[w[E]];typeof U=="function"&&typeof U.prototype[b]!="function"&&n(U.prototype,b,{configurable:!0,writable:!0,value:function(){return c(t(this))}})}return b});function c(b){return b={next:b},b[Symbol.iterator]=function(){return this},b}function f(b){var w=typeof Symbol<"u"&&Symbol.iterator&&b[Symbol.iterator];return w?w.call(b):{next:t(b)}}function p(b){if(!(b instanceof Array)){b=f(b);for(var w,E=[];!(w=b.next()).done;)E.push(w.value);b=E}return b}var d=typeof Object.create=="function"?Object.create:function(b){function w(){}return w.prototype=b,new w},y;if(typeof Object.setPrototypeOf=="function")y=Object.setPrototypeOf;else{var v;t:{var N={a:!0},A={};try{A.__proto__=N,v=A.a;break t}catch{}v=!1}y=v?function(b,w){if(b.__proto__=w,b.__proto__!==w)throw new TypeError(b+" is not extensible");return b}:null}var $=y;function B(b,w){if(b.prototype=d(w.prototype),b.prototype.constructor=b,$)$(b,w);else for(var E in w)if(E!="prototype")if(Object.defineProperties){var U=Object.getOwnPropertyDescriptor(w,E);U&&Object.defineProperty(b,E,U)}else b[E]=w[E];b.ea=w.prototype}function C(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function V(b){if(b.l)throw new TypeError("Generator is already running");b.l=!0}C.prototype.o=function(b){this.h=b};function lt(b,w){b.j={U:w,V:!0},b.g=b.m||b.s}C.prototype.return=function(b){this.j={return:b},this.g=this.s};function rt(b,w,E){return b.g=E,{value:w}}function Q(b){this.g=new C,this.h=b}function tt(b,w){V(b.g);var E=b.g.i;return E?it(b,"return"in E?E.return:function(U){return{value:U,done:!0}},w,b.g.return):(b.g.return(w),bt(b))}function it(b,w,E,U){try{var Y=w.call(b.g.i,E);if(!(Y instanceof Object))throw new TypeError("Iterator result "+Y+" is not an object");if(!Y.done)return b.g.l=!1,Y;var at=Y.value}catch(P){return b.g.i=null,lt(b.g,P),bt(b)}return b.g.i=null,U.call(b.g,at),bt(b)}function bt(b){for(;b.g.g;)try{var w=b.h(b.g);if(w)return b.g.l=!1,{value:w.value,done:!1}}catch(E){b.g.h=void 0,lt(b.g,E)}if(b.g.l=!1,b.g.j){if(w=b.g.j,b.g.j=null,w.V)throw w.U;return{value:w.return,done:!0}}return{value:void 0,done:!0}}function Tt(b){this.next=function(w){return V(b.g),b.g.i?w=it(b,b.g.i.next,w,b.g.o):(b.g.o(w),w=bt(b)),w},this.throw=function(w){return V(b.g),b.g.i?w=it(b,b.g.i.throw,w,b.g.o):(lt(b.g,w),w=bt(b)),w},this.return=function(w){return tt(b,w)},this[Symbol.iterator]=function(){return this}}function mt(b,w){return w=new Tt(new Q(w)),$&&b.prototype&&$(w,b.prototype),w}function Et(b,w){b instanceof String&&(b+="");var E=0,U=!1,Y={next:function(){if(!U&&E<b.length){var at=E++;return{value:w(at,b[at]),done:!1}}return U=!0,{done:!0,value:void 0}}};return Y[Symbol.iterator]=function(){return Y},Y}var Ct=typeof Object.assign=="function"?Object.assign:function(b,w){for(var E=1;E<arguments.length;E++){var U=arguments[E];if(U)for(var Y in U)Object.prototype.hasOwnProperty.call(U,Y)&&(b[Y]=U[Y])}return b};l("Object.assign",function(b){return b||Ct}),l("Promise",function(b){function w(P){this.h=0,this.i=void 0,this.g=[],this.o=!1;var ot=this.j();try{P(ot.resolve,ot.reject)}catch(gt){ot.reject(gt)}}function E(){this.g=null}function U(P){return P instanceof w?P:new w(function(ot){ot(P)})}if(b)return b;E.prototype.h=function(P){if(this.g==null){this.g=[];var ot=this;this.i(function(){ot.l()})}this.g.push(P)};var Y=o.setTimeout;E.prototype.i=function(P){Y(P,0)},E.prototype.l=function(){for(;this.g&&this.g.length;){var P=this.g;this.g=[];for(var ot=0;ot<P.length;++ot){var gt=P[ot];P[ot]=null;try{gt()}catch(xt){this.j(xt)}}}this.g=null},E.prototype.j=function(P){this.i(function(){throw P})},w.prototype.j=function(){function P(xt){return function(Lt){gt||(gt=!0,xt.call(ot,Lt))}}var ot=this,gt=!1;return{resolve:P(this.C),reject:P(this.l)}},w.prototype.C=function(P){if(P===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(P instanceof w)this.F(P);else{t:switch(typeof P){case"object":var ot=P!=null;break t;case"function":ot=!0;break t;default:ot=!1}ot?this.u(P):this.m(P)}},w.prototype.u=function(P){var ot=void 0;try{ot=P.then}catch(gt){this.l(gt);return}typeof ot=="function"?this.G(ot,P):this.m(P)},w.prototype.l=function(P){this.s(2,P)},w.prototype.m=function(P){this.s(1,P)},w.prototype.s=function(P,ot){if(this.h!=0)throw Error("Cannot settle("+P+", "+ot+"): Promise already settled in state"+this.h);this.h=P,this.i=ot,this.h===2&&this.D(),this.A()},w.prototype.D=function(){var P=this;Y(function(){if(P.B()){var ot=o.console;typeof ot<"u"&&ot.error(P.i)}},1)},w.prototype.B=function(){if(this.o)return!1;var P=o.CustomEvent,ot=o.Event,gt=o.dispatchEvent;return typeof gt>"u"?!0:(typeof P=="function"?P=new P("unhandledrejection",{cancelable:!0}):typeof ot=="function"?P=new ot("unhandledrejection",{cancelable:!0}):(P=o.document.createEvent("CustomEvent"),P.initCustomEvent("unhandledrejection",!1,!0,P)),P.promise=this,P.reason=this.i,gt(P))},w.prototype.A=function(){if(this.g!=null){for(var P=0;P<this.g.length;++P)at.h(this.g[P]);this.g=null}};var at=new E;return w.prototype.F=function(P){var ot=this.j();P.J(ot.resolve,ot.reject)},w.prototype.G=function(P,ot){var gt=this.j();try{P.call(ot,gt.resolve,gt.reject)}catch(xt){gt.reject(xt)}},w.prototype.then=function(P,ot){function gt(qt,Ut){return typeof qt=="function"?function(Ot){try{xt(qt(Ot))}catch(g){Lt(g)}}:Ut}var xt,Lt,Gt=new w(function(qt,Ut){xt=qt,Lt=Ut});return this.J(gt(P,xt),gt(ot,Lt)),Gt},w.prototype.catch=function(P){return this.then(void 0,P)},w.prototype.J=function(P,ot){function gt(){switch(xt.h){case 1:P(xt.i);break;case 2:ot(xt.i);break;default:throw Error("Unexpected state: "+xt.h)}}var xt=this;this.g==null?at.h(gt):this.g.push(gt),this.o=!0},w.resolve=U,w.reject=function(P){return new w(function(ot,gt){gt(P)})},w.race=function(P){return new w(function(ot,gt){for(var xt=f(P),Lt=xt.next();!Lt.done;Lt=xt.next())U(Lt.value).J(ot,gt)})},w.all=function(P){var ot=f(P),gt=ot.next();return gt.done?U([]):new w(function(xt,Lt){function Gt(Ot){return function(g){qt[Ot]=g,Ut--,Ut==0&&xt(qt)}}var qt=[],Ut=0;do qt.push(void 0),Ut++,U(gt.value).J(Gt(qt.length-1),Lt),gt=ot.next();while(!gt.done)})},w}),l("Object.is",function(b){return b||function(w,E){return w===E?w!==0||1/w===1/E:w!==w&&E!==E}}),l("Array.prototype.includes",function(b){return b||function(w,E){var U=this;U instanceof String&&(U=String(U));var Y=U.length;for(E=E||0,0>E&&(E=Math.max(E+Y,0));E<Y;E++){var at=U[E];if(at===w||Object.is(at,w))return!0}return!1}}),l("String.prototype.includes",function(b){return b||function(w,E){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(w instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(w,E||0)!==-1}}),l("Array.prototype.keys",function(b){return b||function(){return Et(this,function(w){return w})}});var Vt=this||self;function $t(b,w){b=b.split(".");var E=Vt;b[0]in E||typeof E.execScript>"u"||E.execScript("var "+b[0]);for(var U;b.length&&(U=b.shift());)b.length||w===void 0?E[U]&&E[U]!==Object.prototype[U]?E=E[U]:E=E[U]={}:E[U]=w}function ue(b,w){return w=String.fromCharCode.apply(null,w),b==null?w:b+w}var re,nt=typeof TextDecoder<"u",vt,Dt=typeof TextEncoder<"u";function Qt(b){if(Dt)b=(vt||(vt=new TextEncoder)).encode(b);else{var w=void 0;w=w===void 0?!1:w;for(var E=0,U=new Uint8Array(3*b.length),Y=0;Y<b.length;Y++){var at=b.charCodeAt(Y);if(128>at)U[E++]=at;else{if(2048>at)U[E++]=at>>6|192;else{if(55296<=at&&57343>=at){if(56319>=at&&Y<b.length){var P=b.charCodeAt(++Y);if(56320<=P&&57343>=P){at=1024*(at-55296)+P-56320+65536,U[E++]=at>>18|240,U[E++]=at>>12&63|128,U[E++]=at>>6&63|128,U[E++]=at&63|128;continue}else Y--}if(w)throw Error("Found an unpaired surrogate");at=65533}U[E++]=at>>12|224,U[E++]=at>>6&63|128}U[E++]=at&63|128}}b=U.subarray(0,E)}return b}var H={},ht=null;function At(b,w){w===void 0&&(w=0),ae(),w=H[w];for(var E=Array(Math.floor(b.length/3)),U=w[64]||"",Y=0,at=0;Y<b.length-2;Y+=3){var P=b[Y],ot=b[Y+1],gt=b[Y+2],xt=w[P>>2];P=w[(P&3)<<4|ot>>4],ot=w[(ot&15)<<2|gt>>6],gt=w[gt&63],E[at++]=xt+P+ot+gt}switch(xt=0,gt=U,b.length-Y){case 2:xt=b[Y+1],gt=w[(xt&15)<<2]||U;case 1:b=b[Y],E[at]=w[b>>2]+w[(b&3)<<4|xt>>4]+gt+U}return E.join("")}function _t(b){var w=b.length,E=3*w/4;E%3?E=Math.floor(E):"=.".indexOf(b[w-1])!=-1&&(E="=.".indexOf(b[w-2])!=-1?E-2:E-1);var U=new Uint8Array(E),Y=0;return zt(b,function(at){U[Y++]=at}),U.subarray(0,Y)}function zt(b,w){function E(gt){for(;U<b.length;){var xt=b.charAt(U++),Lt=ht[xt];if(Lt!=null)return Lt;if(!/^[\s\xa0]*$/.test(xt))throw Error("Unknown base64 encoding at char: "+xt)}return gt}ae();for(var U=0;;){var Y=E(-1),at=E(0),P=E(64),ot=E(64);if(ot===64&&Y===-1)break;w(Y<<2|at>>4),P!=64&&(w(at<<4&240|P>>2),ot!=64&&w(P<<6&192|ot))}}function ae(){if(!ht){ht={};for(var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),w=["+/=","+/","-_=","-_.","-_"],E=0;5>E;E++){var U=b.concat(w[E].split(""));H[E]=U;for(var Y=0;Y<U.length;Y++){var at=U[Y];ht[at]===void 0&&(ht[at]=Y)}}}}var Bt=typeof Uint8Array.prototype.slice=="function",en;function he(b,w,E){return w===E?en||(en=new Uint8Array(0)):Bt?b.slice(w,E):new Uint8Array(b.subarray(w,E))}var qe=0,En=0;function _e(b,w){w=w===void 0?{}:w,w=w.v===void 0?!1:w.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=w,b&&sr(this,b)}function sr(b,w){w=w.constructor===Uint8Array?w:w.constructor===ArrayBuffer?new Uint8Array(w):w.constructor===Array?new Uint8Array(w):w.constructor===String?_t(w):w instanceof Uint8Array?new Uint8Array(w.buffer,w.byteOffset,w.byteLength):new Uint8Array(0),b.h=w,b.l=0,b.j=b.h.length,b.g=b.l}_e.prototype.reset=function(){this.g=this.l};function _r(b){for(var w=128,E=0,U=0,Y=0;4>Y&&128<=w;Y++)w=b.h[b.g++],E|=(w&127)<<7*Y;if(128<=w&&(w=b.h[b.g++],E|=(w&127)<<28,U|=(w&127)>>4),128<=w)for(Y=0;5>Y&&128<=w;Y++)w=b.h[b.g++],U|=(w&127)<<7*Y+3;if(128>w)return b=E>>>0,w=U>>>0,(U=w&2147483648)&&(b=~b+1>>>0,w=~w>>>0,b==0&&(w=w+1>>>0)),b=4294967296*w+(b>>>0),U?-b:b;b.m=!0}_e.prototype.i=function(){var b=this.h,w=b[this.g],E=w&127;return 128>w?(this.g+=1,E):(w=b[this.g+1],E|=(w&127)<<7,128>w?(this.g+=2,E):(w=b[this.g+2],E|=(w&127)<<14,128>w?(this.g+=3,E):(w=b[this.g+3],E|=(w&127)<<21,128>w?(this.g+=4,E):(w=b[this.g+4],E|=(w&15)<<28,128>w?(this.g+=5,E>>>0):(this.g+=5,128<=b[this.g++]&&128<=b[this.g++]&&128<=b[this.g++]&&128<=b[this.g++]&&this.g++,E)))))},_e.prototype.o=function(){var b=this.h[this.g],w=this.h[this.g+1],E=this.h[this.g+2],U=this.h[this.g+3];return this.g+=4,E=(b<<0|w<<8|E<<16|U<<24)>>>0,b=2*(E>>31)+1,w=E>>>23&255,E&=8388607,w==255?E?NaN:1/0*b:w==0?b*Math.pow(2,-149)*E:b*Math.pow(2,w-150)*(E+Math.pow(2,23))};var jr=[];function In(){this.g=new Uint8Array(64),this.h=0}In.prototype.push=function(b){if(!(this.h+1<this.g.length)){var w=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(w)}this.g[this.h++]=b},In.prototype.length=function(){return this.h},In.prototype.end=function(){var b=this.g,w=this.h;return this.h=0,he(b,0,w)};function Yn(b,w){for(;127<w;)b.push(w&127|128),w>>>=7;b.push(w)}function nn(b){var w={},E=w.N===void 0?!1:w.N;this.o={v:w.v===void 0?!1:w.v},this.N=E,w=this.o,jr.length?(E=jr.pop(),w&&(E.v=w.v),b&&sr(E,b),b=E):b=new _e(b,w),this.g=b,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}nn.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function _n(b){var w=b.g;if((w=w.g==w.j)||(w=b.j)||(w=b.g,w=w.m||0>w.g||w.g>w.j),w)return!1;b.m=b.g.g,w=b.g.i();var E=w&7;return E!=0&&E!=5&&E!=1&&E!=2&&E!=3&&E!=4?(b.j=!0,!1):(b.i=w,b.l=w>>>3,b.h=E,!0)}function jn(b){switch(b.h){case 0:if(b.h!=0)jn(b);else{for(b=b.g;b.h[b.g]&128;)b.g++;b.g++}break;case 1:b.h!=1?jn(b):(b=b.g,b.g+=8);break;case 2:if(b.h!=2)jn(b);else{var w=b.g.i();b=b.g,b.g+=w}break;case 5:b.h!=5?jn(b):(b=b.g,b.g+=4);break;case 3:w=b.l;do{if(!_n(b)){b.j=!0;break}if(b.h==4){b.l!=w&&(b.j=!0);break}jn(b)}while(!0);break;default:b.j=!0}}function aa(b,w,E){var U=b.g.j,Y=b.g.i(),at=b.g.g+Y;if(b.g.j=at,E(w,b),E=at-b.g.g,E!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+Y+" bytes, instead read "+(Y-E)+" bytes, either the data ended unexpectedly or the message misreported its own length");return b.g.g=at,b.g.j=U,w}function Re(b){return b.g.o()}function sa(b){var w=b.g.i();b=b.g;var E=b.g;b.g+=w,b=b.h;var U;if(nt)(U=re)||(U=re=new TextDecoder("utf-8",{fatal:!1})),U=U.decode(b.subarray(E,E+w));else{w=E+w;for(var Y=[],at=null,P,ot,gt;E<w;)P=b[E++],128>P?Y.push(P):224>P?E>=w?Y.push(65533):(ot=b[E++],194>P||(ot&192)!==128?(E--,Y.push(65533)):Y.push((P&31)<<6|ot&63)):240>P?E>=w-1?Y.push(65533):(ot=b[E++],(ot&192)!==128||P===224&&160>ot||P===237&&160<=ot||((U=b[E++])&192)!==128?(E--,Y.push(65533)):Y.push((P&15)<<12|(ot&63)<<6|U&63)):244>=P?E>=w-2?Y.push(65533):(ot=b[E++],(ot&192)!==128||(P<<28)+(ot-144)>>30!==0||((U=b[E++])&192)!==128||((gt=b[E++])&192)!==128?(E--,Y.push(65533)):(P=(P&7)<<18|(ot&63)<<12|(U&63)<<6|gt&63,P-=65536,Y.push((P>>10&1023)+55296,(P&1023)+56320))):Y.push(65533),8192<=Y.length&&(at=ue(at,Y),Y.length=0);U=ue(at,Y)}return U}function ja(b,w,E){var U=b.g.i();for(U=b.g.g+U;b.g.g<U;)E.push(w.call(b.g))}function ks(b,w){b.h==2?ja(b,_e.prototype.o,w):w.push(Re(b))}function xr(){this.h=[],this.i=0,this.g=new In}function ln(b,w){w.length!==0&&(b.h.push(w),b.i+=w.length)}function Ke(b){var w=b.i+b.g.length();if(w===0)return new Uint8Array(0);w=new Uint8Array(w);for(var E=b.h,U=E.length,Y=0,at=0;at<U;at++){var P=E[at];P.length!==0&&(w.set(P,Y),Y+=P.length)}return E=b.g,U=E.h,U!==0&&(w.set(E.g.subarray(0,U),Y),E.h=0),b.h=[w],w}function Be(b,w,E){if(E!=null){Yn(b.g,8*w+5),b=b.g;var U=E;U=(E=0>U?1:0)?-U:U,U===0?0<1/U?qe=En=0:(En=0,qe=2147483648):isNaN(U)?(En=0,qe=2147483647):34028234663852886e22<U?(En=0,qe=(E<<31|2139095040)>>>0):11754943508222875e-54>U?(U=Math.round(U/Math.pow(2,-149)),En=0,qe=(E<<31|U)>>>0):(w=Math.floor(Math.log(U)/Math.LN2),U*=Math.pow(2,-w),U=Math.round(8388608*U),16777216<=U&&++w,En=0,qe=(E<<31|w+127<<23|U&8388607)>>>0),E=qe,b.push(E>>>0&255),b.push(E>>>8&255),b.push(E>>>16&255),b.push(E>>>24&255)}}var Ye=typeof Uint8Array=="function";function Ds(b,w,E){if(b!=null)return typeof b=="object"?Ye&&b instanceof Uint8Array?E(b):$s(b,w,E):w(b)}function $s(b,w,E){if(Array.isArray(b)){for(var U=Array(b.length),Y=0;Y<b.length;Y++)U[Y]=Ds(b[Y],w,E);return Array.isArray(b)&&b.W&&Fe(U),U}U={};for(Y in b)U[Y]=Ds(b[Y],w,E);return U}function Si(b){return typeof b=="number"?isFinite(b)?b:String(b):b}var ia={W:{value:!0,configurable:!0}};function Fe(b){return Array.isArray(b)&&!Object.isFrozen(b)&&Object.defineProperties(b,ia),b}var de;function Ae(b,w,E){var U=de;de=null,b||(b=U),U=this.constructor.ca,b||(b=U?[U]:[]),this.j=U?0:-1,this.m=this.g=null,this.h=b;t:{if(U=this.h.length,b=U-1,U&&(U=this.h[b],!(U===null||typeof U!="object"||Array.isArray(U)||Ye&&U instanceof Uint8Array))){this.l=b-this.j,this.i=U;break t}w!==void 0&&-1<w?(this.l=Math.max(w,b+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(E)for(w=0;w<E.length;w++)b=E[w],b<this.l?(b+=this.j,(U=this.h[b])?Fe(U):this.h[b]=Xe):(oa(this),(U=this.i[b])?Fe(U):this.i[b]=Xe)}var Xe=Object.freeze(Fe([]));function oa(b){var w=b.l+b.j;b.h[w]||(b.i=b.h[w]={})}function me(b,w,E){return w===-1?null:E!==void 0&&E||w>=b.l?b.i?b.i[w]:void 0:b.h[w+b.j]}function Fr(b,w){var E=E===void 0?!1:E,U=me(b,w,E);return U==null&&(U=Xe),U===Xe&&(U=Fe([]),Yt(b,w,U,E)),U}function ua(b){var w=Fr(b,3);if(b.m||(b.m={}),!b.m[3]){for(var E=0;E<w.length;E++)w[E]=+w[E];b.m[3]=!0}return w}function xn(b,w,E){return b=me(b,w),b??E}function Cn(b,w,E){return b=me(b,w),b=b==null?b:+b,b??(E===void 0?0:E)}function Yt(b,w,E,U){U!==void 0&&U||w>=b.l?(oa(b),b.i[w]=E):b.h[w+b.j]=E}function Rs(b,w,E){if(E===-1)return null;if(b.g||(b.g={}),!b.g[E]){var U=me(b,E,!1);U&&(b.g[E]=new w(U))}return b.g[E]}function Vr(b,w){b.g||(b.g={});var E=b.g[1];if(!E){var U=Fr(b,1);E=[];for(var Y=0;Y<U.length;Y++)E[Y]=new w(U[Y]);b.g[1]=E}return E}function Ar(b,w,E){var U=U===void 0?!1:U;b.g||(b.g={});var Y=E&&ir(E);b.g[w]=E,Yt(b,w,Y,U)}function Hr(b,w,E,U){var Y=Vr(b,E);w=w||new E,b=Fr(b,1),U!=null?(Y.splice(U,0,w),b.splice(U,0,ir(w))):(Y.push(w),b.push(ir(w)))}Ae.prototype.toJSON=function(){var b=ir(this);return $s(b,Si,At)};function ir(b,w){if(b.g)for(var E in b.g){var U=b.g[E];if(Array.isArray(U))for(var Y=0;Y<U.length;Y++)U[Y]&&ir(U[Y]);else U&&ir(U)}return b.h}Ae.prototype.toString=function(){return ir(this).toString()};function zn(b,w){if(b=b.o){ln(w,w.g.end());for(var E=0;E<b.length;E++)ln(w,b[E])}}function ge(b,w){if(w.h==4)return!1;var E=w.m;return jn(w),w.N||(w=he(w.g.h,E,w.g.g),(E=b.o)?E.push(w):b.o=[w]),!0}function $e(b){Ae.call(this,b,-1,Cs)}B($e,Ae),$e.prototype.getRows=function(){return me(this,1)},$e.prototype.getCols=function(){return me(this,2)},$e.prototype.getPackedDataList=function(){return ua(this)},$e.prototype.getLayout=function(){return xn(this,4,0)};function Or(b,w){for(;_n(w);)switch(w.i){case 8:var E=w.g.i();Yt(b,1,E);break;case 16:E=w.g.i(),Yt(b,2,E);break;case 29:case 26:ks(w,b.getPackedDataList());break;case 32:E=_r(w.g),Yt(b,4,E);break;default:if(!ge(b,w))return b}return b}var Cs=[3];function Ze(b,w){var E=void 0;return new(E||(E=Promise))(function(U,Y){function at(gt){try{ot(w.next(gt))}catch(xt){Y(xt)}}function P(gt){try{ot(w.throw(gt))}catch(xt){Y(xt)}}function ot(gt){gt.done?U(gt.value):new E(function(xt){xt(gt.value)}).then(at,P)}ot((w=w.apply(b,void 0)).next())})}function or(b){Ae.call(this,b)}B(or,Ae);function zs(b,w){for(;_n(w);)switch(w.i){case 8:var E=w.g.i();Yt(b,1,E);break;case 21:E=Re(w),Yt(b,2,E);break;case 26:E=sa(w),Yt(b,3,E);break;case 34:E=sa(w),Yt(b,4,E);break;default:if(!ge(b,w))return b}return b}function ur(b){Ae.call(this,b,-1,Fa)}B(ur,Ae),ur.prototype.addClassification=function(b,w){return Hr(this,b,or,w),this};var Fa=[1];function Mn(b){Ae.call(this,b)}B(Mn,Ae);function Gr(b,w){for(;_n(w);)switch(w.i){case 13:var E=Re(w);Yt(b,1,E);break;case 21:E=Re(w),Yt(b,2,E);break;case 29:E=Re(w),Yt(b,3,E);break;case 37:E=Re(w),Yt(b,4,E);break;case 45:E=Re(w),Yt(b,5,E);break;default:if(!ge(b,w))return b}return b}function qr(b){Ae.call(this,b,-1,Le)}B(qr,Ae);function kr(b){t:{var w=new qr;for(b=new nn(b);_n(b);)switch(b.i){case 10:var E=aa(b,new Mn,Gr);Hr(w,E,Mn,void 0);break;default:if(!ge(w,b))break t}}return w}var Le=[1];function la(b){Ae.call(this,b)}B(la,Ae);function lr(b){Ae.call(this,b,-1,Kr)}B(lr,Ae),lr.prototype.getVertexType=function(){return xn(this,1,0)},lr.prototype.getPrimitiveType=function(){return xn(this,2,0)},lr.prototype.getVertexBufferList=function(){return ua(this)},lr.prototype.getIndexBufferList=function(){return Fr(this,4)};function Dr(b,w){for(;_n(w);)switch(w.i){case 8:var E=_r(w.g);Yt(b,1,E);break;case 16:E=_r(w.g),Yt(b,2,E);break;case 29:case 26:ks(w,b.getVertexBufferList());break;case 32:case 34:E=w;var U=b.getIndexBufferList();E.h==2?ja(E,_e.prototype.i,U):U.push(E.g.i());break;default:if(!ge(b,w))return b}return b}var Kr=[3,4];function Va(b){Ae.call(this,b)}B(Va,Ae),Va.prototype.getMesh=function(){return Rs(this,lr,1)},Va.prototype.getPoseTransformMatrix=function(){return Rs(this,$e,2)};function Ms(b){t:{var w=new Va;for(b=new nn(b);_n(b);)switch(b.i){case 10:var E=aa(b,new lr,Dr);Ar(w,1,E);break;case 18:E=aa(b,new $e,Or),Ar(w,2,E);break;default:if(!ge(w,b))break t}}return w}function Ha(b,w,E){if(E=b.createShader(E===0?b.VERTEX_SHADER:b.FRAGMENT_SHADER),b.shaderSource(E,w),b.compileShader(E),!b.getShaderParameter(E,b.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+b.getShaderInfoLog(E));return E}function Bs(b){return Vr(b,or).map(function(w){return{index:xn(w,1,0),Y:Cn(w,2),label:me(w,3)!=null?xn(w,3,""):void 0,displayName:me(w,4)!=null?xn(w,4,""):void 0}})}function Yr(b){return{x:Cn(b,1),y:Cn(b,2),z:Cn(b,3),visibility:me(b,4)!=null?Cn(b,4):void 0}}function cr(b,w){this.h=b,this.g=w,this.l=0}function cn(b,w,E){return yn(b,w),typeof b.g.canvas.transferToImageBitmap=="function"?Promise.resolve(b.g.canvas.transferToImageBitmap()):E?Promise.resolve(b.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(b.g.canvas):(b.i===void 0&&(b.i=document.createElement("canvas")),new Promise(function(U){b.i.height=b.g.canvas.height,b.i.width=b.g.canvas.width,b.i.getContext("2d",{}).drawImage(b.g.canvas,0,0,b.g.canvas.width,b.g.canvas.height),U(b.i)}))}function yn(b,w){var E=b.g;if(b.m===void 0){var U=Ha(E,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),Y=Ha(E,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),at=E.createProgram();if(E.attachShader(at,U),E.attachShader(at,Y),E.linkProgram(at),!E.getProgramParameter(at,E.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+E.getProgramInfoLog(at));U=b.m=at,E.useProgram(U),Y=E.getUniformLocation(U,"sampler0"),b.j={I:E.getAttribLocation(U,"aVertex"),H:E.getAttribLocation(U,"aTex"),da:Y},b.s=E.createBuffer(),E.bindBuffer(E.ARRAY_BUFFER,b.s),E.enableVertexAttribArray(b.j.I),E.vertexAttribPointer(b.j.I,2,E.FLOAT,!1,0,0),E.bufferData(E.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),E.STATIC_DRAW),E.bindBuffer(E.ARRAY_BUFFER,null),b.o=E.createBuffer(),E.bindBuffer(E.ARRAY_BUFFER,b.o),E.enableVertexAttribArray(b.j.H),E.vertexAttribPointer(b.j.H,2,E.FLOAT,!1,0,0),E.bufferData(E.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),E.STATIC_DRAW),E.bindBuffer(E.ARRAY_BUFFER,null),E.uniform1i(Y,0)}U=b.j,E.useProgram(b.m),E.canvas.width=w.width,E.canvas.height=w.height,E.viewport(0,0,w.width,w.height),E.activeTexture(E.TEXTURE0),b.h.bindTexture2d(w.glName),E.enableVertexAttribArray(U.I),E.bindBuffer(E.ARRAY_BUFFER,b.s),E.vertexAttribPointer(U.I,2,E.FLOAT,!1,0,0),E.enableVertexAttribArray(U.H),E.bindBuffer(E.ARRAY_BUFFER,b.o),E.vertexAttribPointer(U.H,2,E.FLOAT,!1,0,0),E.bindFramebuffer(E.DRAW_FRAMEBUFFER?E.DRAW_FRAMEBUFFER:E.FRAMEBUFFER,null),E.clearColor(0,0,0,0),E.clear(E.COLOR_BUFFER_BIT),E.colorMask(!0,!0,!0,!0),E.drawArrays(E.TRIANGLE_FAN,0,4),E.disableVertexAttribArray(U.I),E.disableVertexAttribArray(U.H),E.bindBuffer(E.ARRAY_BUFFER,null),b.h.bindTexture2d(0)}function wi(b){this.g=b}var Xr=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Ga(b,w){return w+b}function ca(b,w){window[b]=w}function An(b){var w=document.createElement("script");return w.setAttribute("src",b),w.setAttribute("crossorigin","anonymous"),new Promise(function(E){w.addEventListener("load",function(){E()},!1),w.addEventListener("error",function(){E()},!1),document.body.appendChild(w)})}function Ls(){return Ze(this,function b(){return mt(b,function(w){switch(w.g){case 1:return w.m=2,rt(w,WebAssembly.instantiate(Xr),4);case 4:w.g=3,w.m=0;break;case 2:return w.m=0,w.j=null,w.return(!1);case 3:return w.return(!0)}})})}function Ve(b){if(this.g=b,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=b&&b.locateFile||Ga,typeof window=="object")var w=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")w=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=w,b.options){w=f(Object.keys(b.options));for(var E=w.next();!E.done;E=w.next()){E=E.value;var U=b.options[E].default;U!==void 0&&(this.j[E]=typeof U=="function"?U():U)}}}r=Ve.prototype,r.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function Us(b,w){return b.g.files===void 0?[]:typeof b.g.files=="function"?b.g.files(w):b.g.files}function Is(b){return Ze(b,function w(){var E=this,U,Y,at,P,ot,gt,xt,Lt,Gt,qt,Ut;return mt(w,function(Ot){switch(Ot.g){case 1:return U=E,E.R?(Y=Us(E,E.j),rt(Ot,Ls(),2)):Ot.return();case 2:if(at=Ot.h,typeof window=="object")return ca("createMediapipeSolutionsWasm",{locateFile:E.locateFile}),ca("createMediapipeSolutionsPackedAssets",{locateFile:E.locateFile}),gt=Y.filter(function(g){return g.data!==void 0}),xt=Y.filter(function(g){return g.data===void 0}),Lt=Promise.all(gt.map(function(g){var T=Xn(U,g.url);if(g.path!==void 0){var x=g.path;T=T.then(function(k){return U.overrideFile(x,k),Promise.resolve(k)})}return T})),Gt=Promise.all(xt.map(function(g){return g.simd===void 0||g.simd&&at||!g.simd&&!at?An(U.locateFile(g.url,U.S)):Promise.resolve()})).then(function(){return Ze(U,function g(){var T,x,k=this;return mt(g,function(M){if(M.g==1)return T=window.createMediapipeSolutionsWasm,x=window.createMediapipeSolutionsPackedAssets,rt(M,T(x),2);k.h=M.h,M.g=0})})}),qt=function(){return Ze(U,function g(){var T=this;return mt(g,function(x){return T.g.graph&&T.g.graph.url?x=rt(x,Xn(T,T.g.graph.url),0):(x.g=0,x=void 0),x})})}(),rt(Ot,Promise.all([Gt,Lt,qt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return P=Y.filter(function(g){return g.simd===void 0||g.simd&&at||!g.simd&&!at}).map(function(g){return U.locateFile(g.url,U.S)}),importScripts.apply(null,p(P)),rt(Ot,createMediapipeSolutionsWasm(Module),6);case 6:E.h=Ot.h,E.l=new OffscreenCanvas(1,1),E.h.canvas=E.l,ot=E.h.GL.createContext(E.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),E.h.GL.makeContextCurrent(ot),Ot.g=4;break;case 7:if(E.l=document.createElement("canvas"),Ut=E.l.getContext("webgl2",{}),!Ut&&(Ut=E.l.getContext("webgl",{}),!Ut))return alert("Failed to create WebGL canvas context when passing video frame."),Ot.return();E.D=Ut,E.h.canvas=E.l,E.h.createContext(E.l,!0,!0,{});case 4:E.i=new E.h.SolutionWasm,E.R=!1,Ot.g=0}})})}function qa(b){return Ze(b,function w(){var E=this,U,Y,at,P,ot,gt,xt,Lt;return mt(w,function(Gt){if(Gt.g==1){if(E.g.graph&&E.g.graph.url&&E.P===E.g.graph.url)return Gt.return();if(E.o=!0,!E.g.graph||!E.g.graph.url){Gt.g=2;return}return E.P=E.g.graph.url,rt(Gt,Xn(E,E.g.graph.url),3)}for(Gt.g!=2&&(U=Gt.h,E.i.loadGraph(U)),Y=f(Object.keys(E.B)),at=Y.next();!at.done;at=Y.next())P=at.value,E.i.overrideFile(P,E.B[P]);if(E.B={},E.g.listeners)for(ot=f(E.g.listeners),gt=ot.next();!gt.done;gt=ot.next())xt=gt.value,js(E,xt);Lt=E.j,E.j={},E.setOptions(Lt),Gt.g=0})})}r.reset=function(){return Ze(this,function b(){var w=this;return mt(b,function(E){w.i&&(w.i.reset(),w.m={},w.s={}),E.g=0})})},r.setOptions=function(b,w){var E=this;if(w=w||this.g.options){for(var U=[],Y=[],at={},P=f(Object.keys(b)),ot=P.next();!ot.done;at={K:at.K,L:at.L},ot=P.next()){var gt=ot.value;gt in this.j&&this.j[gt]===b[gt]||(this.j[gt]=b[gt],ot=w[gt],ot!==void 0&&(ot.onChange&&(at.K=ot.onChange,at.L=b[gt],U.push(function(xt){return function(){return Ze(E,function Lt(){var Gt,qt=this;return mt(Lt,function(Ut){if(Ut.g==1)return rt(Ut,xt.K(xt.L),2);Gt=Ut.h,Gt===!0&&(qt.o=!0),Ut.g=0})})}}(at))),ot.graphOptionXref&&(gt={valueNumber:ot.type===1?b[gt]:0,valueBoolean:ot.type===0?b[gt]:!1,valueString:ot.type===2?b[gt]:""},ot=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),ot.graphOptionXref),gt),Y.push(ot))))}(U.length!==0||Y.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(Y),this.u=(this.u===void 0?[]:this.u).concat(U))}};function Ti(b){return Ze(b,function w(){var E=this,U,Y,at,P,ot,gt,xt;return mt(w,function(Lt){switch(Lt.g){case 1:if(!E.o)return Lt.return();if(!E.u){Lt.g=2;break}U=f(E.u),Y=U.next();case 3:if(Y.done){Lt.g=5;break}return at=Y.value,rt(Lt,at(),4);case 4:Y=U.next(),Lt.g=3;break;case 5:E.u=void 0;case 2:if(E.A){for(P=new E.h.GraphOptionChangeRequestList,ot=f(E.A),gt=ot.next();!gt.done;gt=ot.next())xt=gt.value,P.push_back(xt);E.i.changeOptions(P),P.delete(),E.A=void 0}E.o=!1,Lt.g=0}})})}r.initialize=function(){return Ze(this,function b(){var w=this;return mt(b,function(E){return E.g==1?rt(E,Is(w),2):E.g!=3?rt(E,qa(w),3):rt(E,Ti(w),0)})})};function Xn(b,w){return Ze(b,function E(){var U=this,Y,at;return mt(E,function(P){return w in U.F?P.return(U.F[w]):(Y=U.locateFile(w,""),at=fetch(Y).then(function(ot){return ot.arrayBuffer()}),U.F[w]=at,P.return(at))})})}r.overrideFile=function(b,w){this.i?this.i.overrideFile(b,w):this.B[b]=w},r.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},r.send=function(b,w){return Ze(this,function E(){var U=this,Y,at,P,ot,gt,xt,Lt,Gt,qt;return mt(E,function(Ut){switch(Ut.g){case 1:return U.g.inputs?(Y=1e3*(w??performance.now()),rt(Ut,U.C,2)):Ut.return();case 2:return rt(Ut,U.initialize(),3);case 3:for(at=new U.h.PacketDataList,P=f(Object.keys(b)),ot=P.next();!ot.done;ot=P.next())if(gt=ot.value,xt=U.g.inputs[gt]){t:{var Ot=U,g=b[gt];switch(xt.type){case"video":var T=Ot.m[xt.stream];if(T||(T=new cr(Ot.h,Ot.D),Ot.m[xt.stream]=T),Ot=T,Ot.l===0&&(Ot.l=Ot.h.createTexture()),typeof HTMLVideoElement<"u"&&g instanceof HTMLVideoElement){var x=g.videoWidth;T=g.videoHeight}else typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement?(x=g.naturalWidth,T=g.naturalHeight):(x=g.width,T=g.height);T={glName:Ot.l,width:x,height:T},x=Ot.g,x.canvas.width=T.width,x.canvas.height=T.height,x.activeTexture(x.TEXTURE0),Ot.h.bindTexture2d(Ot.l),x.texImage2D(x.TEXTURE_2D,0,x.RGBA,x.RGBA,x.UNSIGNED_BYTE,g),Ot.h.bindTexture2d(0),Ot=T;break t;case"detections":for(T=Ot.m[xt.stream],T||(T=new wi(Ot.h),Ot.m[xt.stream]=T),Ot=T,Ot.data||(Ot.data=new Ot.g.DetectionListData),Ot.data.reset(g.length),T=0;T<g.length;++T){x=g[T];var k=Ot.data,M=k.setBoundingBox,R=T,z=x.T,F=new la;Yt(F,1,z.Z),Yt(F,2,z.$),Yt(F,3,z.height),Yt(F,4,z.width),Yt(F,5,z.rotation),Yt(F,6,z.X);var Z=z=new xr;Be(Z,1,me(F,1)),Be(Z,2,me(F,2)),Be(Z,3,me(F,3)),Be(Z,4,me(F,4)),Be(Z,5,me(F,5));var st=me(F,6);if(st!=null&&st!=null){Yn(Z.g,48);var pt=Z.g,yt=st;st=0>yt,yt=Math.abs(yt);var St=yt>>>0;for(yt=Math.floor((yt-St)/4294967296),yt>>>=0,st&&(yt=~yt>>>0,St=(~St>>>0)+1,4294967295<St&&(St=0,yt++,4294967295<yt&&(yt=0))),qe=St,En=yt,st=qe,St=En;0<St||127<st;)pt.push(st&127|128),st=(st>>>7|St<<25)>>>0,St>>>=7;pt.push(st)}if(zn(F,Z),z=Ke(z),M.call(k,R,z),x.O)for(k=0;k<x.O.length;++k)F=x.O[k],Z=!!F.visibility,M=Ot.data,R=M.addNormalizedLandmark,z=T,F=Object.assign(Object.assign({},F),{visibility:Z?F.visibility:0}),Z=new Mn,Yt(Z,1,F.x),Yt(Z,2,F.y),Yt(Z,3,F.z),F.visibility&&Yt(Z,4,F.visibility),pt=F=new xr,Be(pt,1,me(Z,1)),Be(pt,2,me(Z,2)),Be(pt,3,me(Z,3)),Be(pt,4,me(Z,4)),Be(pt,5,me(Z,5)),zn(Z,pt),F=Ke(F),R.call(M,z,F);if(x.M)for(k=0;k<x.M.length;++k){if(M=Ot.data,R=M.addClassification,z=T,F=x.M[k],Z=new or,Yt(Z,2,F.Y),F.index&&Yt(Z,1,F.index),F.label&&Yt(Z,3,F.label),F.displayName&&Yt(Z,4,F.displayName),pt=F=new xr,St=me(Z,1),St!=null&&St!=null)if(Yn(pt.g,8),st=pt.g,0<=St)Yn(st,St);else{for(yt=0;9>yt;yt++)st.push(St&127|128),St>>=7;st.push(1)}Be(pt,2,me(Z,2)),st=me(Z,3),st!=null&&(st=Qt(st),Yn(pt.g,26),Yn(pt.g,st.length),ln(pt,pt.g.end()),ln(pt,st)),st=me(Z,4),st!=null&&(st=Qt(st),Yn(pt.g,34),Yn(pt.g,st.length),ln(pt,pt.g.end()),ln(pt,st)),zn(Z,pt),F=Ke(F),R.call(M,z,F)}}Ot=Ot.data;break t;default:Ot={}}}switch(Lt=Ot,Gt=xt.stream,xt.type){case"video":at.pushTexture2d(Object.assign(Object.assign({},Lt),{stream:Gt,timestamp:Y}));break;case"detections":qt=Lt,qt.stream=Gt,qt.timestamp=Y,at.pushDetectionList(qt);break;default:throw Error("Unknown input config type: '"+xt.type+"'")}}return U.i.send(at),rt(Ut,U.C,4);case 4:at.delete(),Ut.g=0}})})};function Ni(b,w,E){return Ze(b,function U(){var Y,at,P,ot,gt,xt,Lt=this,Gt,qt,Ut,Ot,g,T,x,k;return mt(U,function(M){switch(M.g){case 1:if(!E)return M.return(w);for(Y={},at=0,P=f(Object.keys(E)),ot=P.next();!ot.done;ot=P.next())gt=ot.value,xt=E[gt],typeof xt!="string"&&xt.type==="texture"&&w[xt.stream]!==void 0&&++at;1<at&&(Lt.G=!1),Gt=f(Object.keys(E)),ot=Gt.next();case 2:if(ot.done){M.g=4;break}if(qt=ot.value,Ut=E[qt],typeof Ut=="string")return x=Y,k=qt,rt(M,bn(Lt,qt,w[Ut]),14);if(Ot=w[Ut.stream],Ut.type==="detection_list"){if(Ot){for(var R=Ot.getRectList(),z=Ot.getLandmarksList(),F=Ot.getClassificationsList(),Z=[],st=0;st<R.size();++st){var pt=R.get(st);t:{var yt=new la;for(pt=new nn(pt);_n(pt);)switch(pt.i){case 13:var St=Re(pt);Yt(yt,1,St);break;case 21:St=Re(pt),Yt(yt,2,St);break;case 29:St=Re(pt),Yt(yt,3,St);break;case 37:St=Re(pt),Yt(yt,4,St);break;case 45:St=Re(pt),Yt(yt,5,St);break;case 48:St=_r(pt.g),Yt(yt,6,St);break;default:if(!ge(yt,pt))break t}}yt={Z:Cn(yt,1),$:Cn(yt,2),height:Cn(yt,3),width:Cn(yt,4),rotation:Cn(yt,5,0),X:xn(yt,6,0)},pt=Vr(kr(z.get(st)),Mn).map(Yr);var Nt=F.get(st);t:for(St=new ur,Nt=new nn(Nt);_n(Nt);)switch(Nt.i){case 10:St.addClassification(aa(Nt,new or,zs));break;default:if(!ge(St,Nt))break t}yt={T:yt,O:pt,M:Bs(St)},Z.push(yt)}R=Z}else R=[];Y[qt]=R,M.g=7;break}if(Ut.type==="proto_list"){if(Ot){for(R=Array(Ot.size()),z=0;z<Ot.size();z++)R[z]=Ot.get(z);Ot.delete()}else R=[];Y[qt]=R,M.g=7;break}if(Ot===void 0){M.g=3;break}if(Ut.type==="float_list"){Y[qt]=Ot,M.g=7;break}if(Ut.type==="proto"){Y[qt]=Ot,M.g=7;break}if(Ut.type!=="texture")throw Error("Unknown output config type: '"+Ut.type+"'");return g=Lt.s[qt],g||(g=new cr(Lt.h,Lt.D),Lt.s[qt]=g),rt(M,cn(g,Ot,Lt.G),13);case 13:T=M.h,Y[qt]=T;case 7:Ut.transform&&Y[qt]&&(Y[qt]=Ut.transform(Y[qt])),M.g=3;break;case 14:x[k]=M.h;case 3:ot=Gt.next(),M.g=2;break;case 4:return M.return(Y)}})})}function bn(b,w,E){return Ze(b,function U(){var Y=this,at;return mt(U,function(P){return typeof E=="number"||E instanceof Uint8Array||E instanceof Y.h.Uint8BlobList?P.return(E):E instanceof Y.h.Texture2dDataOut?(at=Y.s[w],at||(at=new cr(Y.h,Y.D),Y.s[w]=at),P.return(cn(at,E,Y.G))):P.return(void 0)})})}function js(b,w){for(var E=w.name||"$",U=[].concat(p(w.wants)),Y=new b.h.StringList,at=f(w.wants),P=at.next();!P.done;P=at.next())Y.push_back(P.value);at=b.h.PacketListener.implement({onResults:function(ot){for(var gt={},xt=0;xt<w.wants.length;++xt)gt[U[xt]]=ot.get(xt);var Lt=b.listeners[E];Lt&&(b.C=Ni(b,gt,w.outs).then(function(Gt){Gt=Lt(Gt);for(var qt=0;qt<w.wants.length;++qt){var Ut=gt[U[qt]];typeof Ut=="object"&&Ut.hasOwnProperty&&Ut.hasOwnProperty("delete")&&Ut.delete()}Gt&&(b.C=Gt)}))}}),b.i.attachMultiListener(Y,at),Y.delete()}r.onResults=function(b,w){this.listeners[w||"$"]=b},$t("Solution",Ve),$t("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ei(b){b=Ms(b);var w=b.getMesh();if(!w)return b;var E=new Float32Array(w.getVertexBufferList());w.getVertexBufferList=function(){return E};var U=new Uint32Array(w.getIndexBufferList());return w.getIndexBufferList=function(){return U},b}var fa={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(b){return b.map(Ei)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(b){return b.map(function(w){return Vr(kr(w),Mn).map(Yr)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},fr=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Ka=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],Ya=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],hr=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Fs=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Xa=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Vs=[].concat(p(fr),p(Ka),p(Ya),p(hr),p(Fs),p(Xa));function Pa(b){b=b||{},b=Object.assign(Object.assign({},fa),b),this.g=new Ve(b)}r=Pa.prototype,r.close=function(){return this.g.close(),Promise.resolve()},r.onResults=function(b){this.g.onResults(b)},r.initialize=function(){return Ze(this,function b(){var w=this;return mt(b,function(E){return rt(E,w.g.initialize(),0)})})},r.reset=function(){this.g.reset()},r.send=function(b){return Ze(this,function w(){var E=this;return mt(w,function(U){return rt(U,E.g.send(b),0)})})},r.setOptions=function(b){this.g.setOptions(b)},$t("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),$t("FaceMesh",Pa),$t("FACEMESH_LIPS",fr),$t("FACEMESH_LEFT_EYE",Ka),$t("FACEMESH_LEFT_EYEBROW",Ya),$t("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),$t("FACEMESH_RIGHT_EYE",hr),$t("FACEMESH_RIGHT_EYEBROW",Fs),$t("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),$t("FACEMESH_FACE_OVAL",Xa),$t("FACEMESH_CONTOURS",Vs),$t("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),$t("matrixDataToMatrix",function(b){for(var w=b.getCols(),E=b.getRows(),U=b.getPackedDataList(),Y=[],at=0;at<E;at++)Y.push(Array(w));for(at=0;at<E;at++)for(var P=0;P<w;P++){var ot=b.getLayout()===1?at*w+P:P*E+at;Y[at][P]=U[ot]}return Y}),$t("VERSION","0.4.1633559619")}).call(ah)),ah}var kg=Og();/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dg=1e-7,$g=1e-4;class Rg{refCount(t){return Gn("refCount")}incRef(t){return Gn("incRef")}timerAvailable(){return!0}time(t){return Gn("time")}read(t){return Gn("read")}readSync(t){return Gn("readSync")}readToGPU(t,n){return Gn("readToGPU")}numDataIds(){return Gn("numDataIds")}disposeData(t,n){return Gn("disposeData")}write(t,n,s){return Gn("write")}move(t,n,s,o,l){return Gn("move")}createTensorFromGPUData(t,n,s){return Gn("createTensorFromGPUData")}memory(){return Gn("memory")}floatPrecision(){return Gn("floatPrecision")}epsilon(){return this.floatPrecision()===32?Dg:$g}dispose(){return Gn("dispose")}}function Gn(r){throw new Error(`'${r}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function Er(r,t,n=""){L($a(r,t),()=>n+` Shapes ${r} and ${t} must match`)}function lo(r){L(r!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Qe(r){if(r.length===0)return 1;let t=r[0];for(let n=1;n<r.length;n++)t*=r[n];return t}function Cg(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(let n=0;n<r.length;n++)if(r[n]!==null&&t[n]!==null&&r[n]!==t[n])return!1;return!0}function $a(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(let n=0;n<r.length;n++)if(r[n]!==t[n])return!1;return!0}function fu(r){return r%1===0}function _l(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function Wl(r,t){const n=t.length;return r=r==null?t.map((s,o)=>o):[].concat(r),L(r.every(s=>s>=-n&&s<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${r}`),L(r.every(s=>fu(s)),()=>`All values in axis param must be integers but got axis ${r}`),r.map(s=>s<0?n+s:s)}function zg(r,t){const n=[],s=[],o=t!=null&&Array.isArray(t)&&t.length===0,l=t==null||o?null:Wl(t,r).sort();let c=0;for(let f=0;f<r.length;++f){if(l!=null){if(l[c]===f&&r[f]!==1)throw new Error(`Can't squeeze axis ${f} since its dim '${r[f]}' is not 1`);(l[c]==null||l[c]>f)&&r[f]===1&&(n.push(r[f]),s.push(f)),l[c]<=f&&c++}r[f]!==1&&(n.push(r[f]),s.push(f))}return{newShape:n,keptDims:s}}function Mg(r,t){return Ym(r,t)}function Ym(r,t){let n=null;if(r==null||r==="float32")n=new Float32Array(t);else if(r==="int32")n=new Int32Array(t);else if(r==="bool")n=new Uint8Array(t);else if(r==="string")n=new Array(t);else throw new Error(`Unknown data type ${r}`);return n}function Bg(r,t){for(let n=0;n<r.length;n++){const s=r[n];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function Lg(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function Th(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error(`Unknown dtype ${r}`)}function Ug(r){if(r==null)return 0;let t=0;return r.forEach(n=>t+=n.length),t}function t1(r){return typeof r=="string"||r instanceof String}function Ig(r){return typeof r=="boolean"}function jg(r){return typeof r=="number"}function Ql(r){return Array.isArray(r)?Ql(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray?"int32":jg(r)?"float32":t1(r)?"string":Ig(r)?"bool":"float32"}function Nh(r){return!!(r&&r.constructor&&r.call&&r.apply)}function e1(r){const t=r.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=r[t-1];for(let s=t-3;s>=0;--s)n[s]=n[s+1]*r[s+1];return n}function Xm(r,t,n,s=!1){const o=new Array;if(t.length===1){const l=t[0]*(s?2:1);for(let c=0;c<l;c++)o[c]=n[r+c]}else{const l=t[0],c=t.slice(1),f=c.reduce((p,d)=>p*d)*(s?2:1);for(let p=0;p<l;p++)o[p]=Xm(r+p*f,c,n,s)}return o}function Eh(r,t,n=!1){if(r.length===0)return t[0];const s=r.reduce((o,l)=>o*l)*(n?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${r}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return Xm(0,r,t,n)}function Pm(r,t){const n=n1(r,t);for(let s=0;s<n.length;s++)n[s]=1;return n}function n1(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error(`Unknown data type ${t}`)}function ar(r){r.forEach(t=>{L(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${r}].`)})}function fi(r){return r&&r.then&&typeof r.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tm="tfjsflags";class Fg{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Vg,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(ne().getBool("IS_TEST")||ne().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,s){if(this.flagRegistry[t]={evaluationFn:n,setHook:s},this.urlFlags[t]!=null){const o=this.urlFlags[t];ne().getBool("IS_TEST")||ne().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${o}.`),this.set(t,o)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(fi(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);tm in t&&t[tm].split(",").forEach(s=>{const[o,l]=s.split(":");this.urlFlags[o]=Gg(o,l)})}}function Vg(r){const t={};return r.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...s)=>(Hg(t,s[0],s[1]),s.join("="))),t}function Hg(r,t,n){r[decodeURIComponent(t)]=decodeURIComponent(n||"")}function Gg(r,t){const n=t.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:t}function ne(){return Wm}let Wm=null;function qg(r){Wm=r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let sh;function Qm(){if(sh==null){let r;if(typeof window<"u")r=window;else if(typeof global<"u")r=global;else if(typeof process<"u")r=process;else if(typeof self<"u")r=self;else throw new Error("Could not find a global object");sh=r}return sh}function Kg(){const r=Qm();return r._tfGlobals==null&&(r._tfGlobals=new Map),r._tfGlobals}function r1(r,t){const n=Kg();if(n.has(r))return n.get(r);{const s=t();return n.set(r,s),n.get(r)}}const Yg="Abs",Xg="Acos",Pg="Acosh",Zm="Add",Wg="AddN",Qg="All",Zg="Any",Jg="ArgMax",ty="ArgMin",ey="Asin",ny="Asinh",ry="Atan",ay="Atanh",sy="Atan2",iy="AvgPool",oy="AvgPool3D",uy="BatchMatMul",ly="BatchToSpaceND",cy="Bincount",fy="BitwiseAnd",hy="BroadcastArgs",Jm="Cast",py="Ceil",dy="ClipByValue",my="Complex",gy="ComplexAbs",yy="Concat",by="Conv2D",vy="Conv2DBackpropFilter",Sy="Conv2DBackpropInput",wy="Conv3D",Ty="Conv3DBackpropInputV2",Ny="Cos",Ey="Cosh",_y="Cumprod",xy="Cumsum",Ay="CropAndResize",Oy="DenseBincount",ky="DepthToSpace",Dy="DepthwiseConv2dNative",$y="DepthwiseConv2dNativeBackpropFilter",Ry="DepthwiseConv2dNativeBackpropInput",Cy="Diag",zy="Dilation2D",My="RealDiv",By="Einsum",Ly="Elu",Uy="Erf",Iy="Equal",jy="Exp",Fy="ExpandDims",Vy="Expm1",Hy="FFT",Gy="Fill",qy="FlipLeftRight",Ky="Floor",Yy="FloorDiv",Xy="FusedBatchNorm",Py="GatherV2",Wy="GatherNd",Qy="Greater",Zy="GreaterEqual",t3="Identity",Jy="IFFT",t6="Imag",e6="IsFinite",n6="IsInf",r6="IsNan",a6="LeakyRelu",s6="Less",i6="LessEqual",o6="LinSpace",u6="Log",l6="Log1p",c6="LogicalAnd",f6="LogicalNot",h6="LogicalOr",p6="LRN",d6="Max",m6="Maximum",g6="MaxPool",y6="MaxPool3D",b6="MaxPoolWithArgmax",v6="Mean",S6="Min",w6="Minimum",T6="MirrorPad",N6="Mod",E6="Multinomial",_6="Multiply",x6="Neg",A6="NotEqual",O6="NonMaxSuppressionV3",k6="NonMaxSuppressionV4",D6="NonMaxSuppressionV5",$6="OnesLike",R6="OneHot",C6="Pack",z6="PadV2",M6="Pow",B6="Prelu",L6="Prod",U6="RaggedGather",I6="RaggedRange",j6="RaggedTensorToTensor",F6="Range",V6="Real",H6="Reciprocal",G6="Relu",q6="Reshape",K6="ResizeNearestNeighbor",Y6="ResizeBilinear",X6="Relu6",P6="Reverse",W6="Round",Q6="Rsqrt",Z6="ScatterNd",J6="TensorScatterUpdate",tb="SearchSorted",eb="Select",nb="Selu",rb="Slice",ab="Sin",sb="Sinh",ib="Sign",ob="Sigmoid",ub="Softplus",lb="Sqrt",cb="Sum",fb="SpaceToBatchND",hb="SplitV",pb="Softmax",db="SparseFillEmptyRows",mb="SparseReshape",gb="SparseSegmentMean",yb="SparseSegmentSum",bb="SparseToDense",vb="SquaredDifference",Sb="StaticRegexReplace",wb="StridedSlice",Tb="StringNGrams",Nb="StringSplit",Eb="StringToHashBucketFast",_b="Sub",xb="Tan",Ab="Tanh",e3="Tile",Ob="TopK",kb="Transform",ih="Transpose",Db="Unique",$b="Unpack",Rb="UnsortedSegmentSum",Cb="ZerosLike",zb="Step",em="FromPixels",Mb="RotateWithOffset",nm="_FusedMatMul",rm="FusedConv2D",am="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function su(...r){ne().getBool("IS_TEST")||ne().getBool("PROD")||console.warn(...r)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n3=r1("kernelRegistry",()=>new Map),Bb=r1("gradRegistry",()=>new Map);function _h(r,t){const n=Lb(r,t);return n3.get(n)}function sm(r){return Bb.get(r)}function im(r){const t=n3.entries(),n=[];for(;;){const{done:s,value:o}=t.next();if(s)break;const[l,c]=o,[f]=l.split("_");f===r&&n.push(c)}return n}function Lb(r,t){return`${t}_${r}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r3(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ub(r,t){return r instanceof Float32Array&&t==="float32"||r instanceof Int32Array&&t==="int32"||r instanceof Uint8Array&&t==="bool"}function a3(r,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=hu(r)),ne().getBool("DEBUG")&&Bg(r,t),Ub(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){const n=new Uint8Array(r.length);for(let s=0;s<n.length;++s)Math.round(r[s])!==0&&(n[s]=1);return n}else throw new Error(`Unknown data type ${t}`)}function Ll(){return ne().platform.now()}function Ib(r,t="utf-8"){return t=t||"utf-8",ne().platform.encode(r,t)}function om(r,t="utf-8"){return t=t||"utf-8",ne().platform.decode(r,t)}function Nr(r){return ne().platform.isTypedArray!=null?ne().platform.isTypedArray(r):r3(r)}function hu(r,t=[],n=!1){if(t==null&&(t=[]),typeof r=="boolean"||typeof r=="number"||typeof r=="string"||fi(r)||r==null||Nr(r)&&n)t.push(r);else if(Array.isArray(r)||Nr(r))for(let s=0;s<r.length;++s)hu(r[s],t,n);else{let s=-1;for(const o of Object.keys(r))/^([1-9]+[0-9]*|0)$/.test(o)&&(s=Math.max(s,Number(o)));for(let o=0;o<=s;o++)hu(r[o],t,n)}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jb{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new Vb)}profileKernel(t,n,s){let o;const l=()=>{o=s()};let c;const f=Ll();if(this.backendTimer.timerAvailable())c=this.backendTimer.time(l);else{l();for(const d of o)d.dataSync();c=Promise.resolve({kernelMs:Ll()-f})}if(ne().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let d=0;d<o.length;d++){const y=o[d];y.data().then(v=>{Fb(v,y.dtype,t)})}return{kernelName:t,outputs:o,inputs:n,timeMs:c.then(d=>d.kernelMs),extraInfo:c.then(d=>d.getExtraProfileInfo!=null?d.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:s,timeMs:o,inputs:l,extraInfo:c}=t;s.forEach(f=>{Promise.all([f.data(),o,c]).then(p=>{this.logger.logKernelProfile(n,f,p[0],p[1],l,p[2])})})}}function Fb(r,t,n){if(t!=="float32")return!1;for(let s=0;s<r.length;s++){const o=r[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${n}'`),!0}return!1}class Vb{logKernelProfile(t,n,s,o,l,c){const f=typeof o=="number"?_l(`${o}ms`,9):o.error,p=_l(t,25),d=n.rank,y=n.size,v=_l(n.shape.toString(),14);let N="";for(const A in l){const $=l[A];if($!=null){const B=$.shape||n.shape,C=B.length;N+=`${A}: ${C}D ${C>0?B:""} `}}console.log(`%c${p}	%c${f}	%c${d}D ${v}	%c${y}	%c${N}	%c${c}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hb(r,t,n){const s={},o={};for(let p=0;p<t.length;p++)s[t[p].id]=!0;for(let p=0;p<r.length;p++){const d=r[p],y=d.inputs;for(const v in y){const N=y[v];let A=!1;for(let $=0;$<t.length;$++)if(s[N.id]){d.outputs.forEach(B=>s[B.id]=!0),A=!0,o[d.id]=!0;break}if(A)break}}const l={};l[n.id]=!0;const c={};for(let p=r.length-1;p>=0;p--){const d=r[p],y=d.inputs;for(let v=0;v<d.outputs.length;v++)if(l[d.outputs[v].id]){for(const N in y)l[y[N].id]=!0,c[d.id]=!0;break}}const f=[];for(let p=0;p<r.length;p++){const d=r[p];if(o[d.id]&&c[d.id]){const y={};for(const N in d.inputs){const A=d.inputs[N];s[A.id]&&(y[N]=A)}const v=Object.assign({},d);v.inputs=y,v.outputs=d.outputs,f.push(v)}}return f}function Gb(r,t,n,s){for(let o=t.length-1;o>=0;o--){const l=t[o],c=[];if(l.outputs.forEach(p=>{const d=r[p.id];d!=null?c.push(d):c.push(null)}),l.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${l.kernelName}.`);const f=l.gradient(c);for(const p in l.inputs){if(!(p in f))throw new Error(`Cannot backprop through input ${p}. Available gradients found: ${Object.keys(f)}.`);const d=n(()=>f[p]());if(d.dtype!=="float32")throw new Error(`Error in gradient for op ${l.kernelName}. The gradient of input ${p} must have 'float32' dtype, but has '${d.dtype}'`);const y=l.inputs[p];if(!$a(d.shape,y.shape))throw new Error(`Error in gradient for op ${l.kernelName}. The gradient of input '${p}' has shape '${d.shape}', which does not match the shape of the input '${y.shape}'`);if(r[y.id]==null)r[y.id]=d;else{const v=r[y.id];r[y.id]=s(v,d),v.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const um=20,iu=3,oh=7;function qb(r,t,n,s){const o=e1(t),l=Kb(r,t,n,o),c=t.length,f=xl(r,t,n,o,l),p=["Tensor"];return s&&(p.push(`  dtype: ${n}`),p.push(`  rank: ${c}`),p.push(`  shape: [${t}]`),p.push("  values:")),p.push(f.map(d=>"    "+d).join(`
`)),p.join(`
`)}function Kb(r,t,n,s){const o=Qe(t),l=s[s.length-1],c=new Array(l).fill(0),f=t.length,p=n==="complex64"?lu(r):r;if(f>1)for(let d=0;d<o/l;d++){const y=d*l;for(let v=0;v<l;v++)c[v]=Math.max(c[v],uu(p[y+v],0,n).length)}return c}function uu(r,t,n){let s;return Array.isArray(r)?s=`${parseFloat(r[0].toFixed(oh))} + ${parseFloat(r[1].toFixed(oh))}j`:t1(r)?s=`'${r}'`:n==="bool"?s=s3(r):s=parseFloat(r.toFixed(oh)).toString(),_l(s,t)}function s3(r){return r===0?"false":"true"}function xl(r,t,n,s,o,l=!0){const c=n==="complex64"?2:1,f=t[0],p=t.length;if(p===0){if(n==="complex64"){const B=lu(r);return[uu(B[0],0,n)]}return n==="bool"?[s3(r[0])]:[r[0].toString()]}if(p===1){if(f>um){const C=iu*c;let V=Array.from(r.slice(0,C)),lt=Array.from(r.slice((f-iu)*c,f*c));return n==="complex64"&&(V=lu(V),lt=lu(lt)),["["+V.map((rt,Q)=>uu(rt,o[Q],n)).join(", ")+", ..., "+lt.map((rt,Q)=>uu(rt,o[f-iu+Q],n)).join(", ")+"]"]}return["["+(n==="complex64"?lu(r):Array.from(r)).map((C,V)=>uu(C,o[V],n)).join(", ")+"]"]}const d=t.slice(1),y=s.slice(1),v=s[0]*c,N=[];if(f>um){for(let B=0;B<iu;B++){const C=B*v,V=C+v;N.push(...xl(r.slice(C,V),d,n,y,o,!1))}N.push("...");for(let B=f-iu;B<f;B++){const C=B*v,V=C+v;N.push(...xl(r.slice(C,V),d,n,y,o,B===f-1))}}else for(let B=0;B<f;B++){const C=B*v,V=C+v;N.push(...xl(r.slice(C,V),d,n,y,o,B===f-1))}const A=p===2?",":"";N[0]="["+(f>0?N[0]+A:"");for(let B=1;B<N.length-1;B++)N[B]=" "+N[B]+A;let $=`,
`;for(let B=2;B<p;B++)$+=`
`;return N[N.length-1]=" "+N[N.length-1]+"]"+(l?"":$),N}function lu(r){const t=[];for(let n=0;n<r.length;n+=2)t.push([r[n],r[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xh{constructor(t,n,s){if(this.dtype=n,this.shape=t.slice(),this.size=Qe(t),s!=null){const o=s.length;L(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||Ym(n,this.size),this.strides=e1(t)}set(t,...n){n.length===0&&(n=[0]),L(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const s=this.locToIndex(n);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const o of t){if(o<0||o>=this.shape[n]){const l=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(l)}n++}let s=t[t.length-1];for(let o=0;o<t.length-1;++o)s+=this.strides[o]*t[o];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let s=0;s<t.length-1;++s)n+=this.strides[s]*t[s];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let s=0;s<n.length-1;++s)n[s]=Math.floor(t/this.strides[s]),t-=n[s]*this.strides[s];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return zr().makeTensor(this.values,this.shape,this.dtype)}}let zr=null,eo=null;function Yb(r){zr=r}function Xb(r){eo=r}class Ie{constructor(t,n,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=Qe(t),this.strides=e1(t),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return eo.buffer(this.shape,this.dtype,t)}bufferSync(){return eo.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return Eh(this.shape,t,this.dtype==="complex64")}arraySync(){return Eh(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=zr().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(s=>om(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),zr().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=zr().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>om(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await zr().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),zr().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return eo.print(this,t)}clone(){return this.throwIfDisposed(),eo.clone(this)}toString(t=!1){const n=this.dataSync();return qb(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),eo.cast(this,t)}variable(t=!0,n,s){return this.throwIfDisposed(),zr().makeVariable(this,t,n,s)}}Object.defineProperty(Ie,Symbol.hasInstance,{value:r=>!!r&&r.data!=null&&r.dataSync!=null&&r.throwIfDisposed!=null});function i3(){return r1("Tensor",()=>Ie)}i3();class Ul extends Ie{constructor(t,n,s,o){super(t.shape,t.dtype,t.dataId,o),this.trainable=n,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!$a(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);zr().disposeTensor(this),this.dataId=t.dataId,zr().incRef(this,null)}dispose(){zr().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Ul,Symbol.hasInstance,{value:r=>r instanceof Ie&&r.assign!=null&&r.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var lm;(function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"})(lm||(lm={}));var Ah;(function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"})(Ah||(Ah={}));var Oh;(function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"})(Oh||(Oh={}));var kh;(function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"})(kh||(kh={}));var Dh;(function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"})(Dh||(Dh={}));const Pb={float32:kh,int32:Ah,bool:Oh,complex64:Dh};function Wb(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${r} with ${t}`)}return Pb[r][t]}function o3(r){return r!=null&&typeof r=="object"&&"texture"in r&&r.texture instanceof WebGLTexture}function u3(r){return typeof GPUBuffer<"u"&&r!=null&&typeof r=="object"&&"buffer"in r&&r.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function je(r,t){if(r.dtype===t.dtype)return[r,t];const n=Wb(r.dtype,t.dtype);return[r.cast(n),t.cast(n)]}function Qb(r,t){L(r.dtype===t.dtype,()=>`The dtypes of the first(${r.dtype}) and second(${t.dtype}) input must match`)}function l3(r){const t=[];return c3(r,t,new Set),t}function c3(r,t,n){if(r==null)return;if(r instanceof Ie){t.push(r);return}if(!Zb(r))return;const s=r;for(const o in s){const l=s[o];n.has(l)||(n.add(l),c3(l,t,n))}}function Zb(r){return Array.isArray(r)||typeof r=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uh(r){return r.kernelName!=null}class cm{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class io{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new cm}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,s=1){return t in this.registryFactory?(su(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:s}=this.initializeBackend(t);if(!(s?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new jb(this.backendInstance),!0}setupRegisteredKernels(){im(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){im(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=n.factory();if(s&&!(s instanceof Rg)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,l=s.then(c=>o<this.pendingBackendInitId?!1:(this.registry[t]=c,this.pendingBackendInit=null,!0)).catch(c=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,su(`Initialization of backend ${t} failed`),su(c.stack||c.message)),!1));return this.pendingBackendInit=l,{success:l,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return su(`Initialization of backend ${t} failed`),su(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n],{success:o,asyncInit:l}=this.initializeBackend(s);if(l||o)return{name:s,asyncInit:l}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const s=this.state.tensorInfo.get(n),o=s.backend,l=this.readSync(n),c=o.refCount(n);o.disposeData(n,!0),s.backend=t,t.move(n,l,s.shape,s.dtype,c),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let s=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=n(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(t,n,s){t();try{const o=s();return n(),o}catch(o){throw n(),o}}nextTensorId(){return io.nextTensorId++}nextVariableId(){return io.nextVariableId++}clone(t){const n=G.runKernel(t3,{x:t}),s={x:t},o=c=>({x:()=>{const f="float32",p={x:c},d={dtype:f};return G.runKernel(Jm,p,d)}}),l=[];return this.addTapeNode(this.state.activeScope.name,s,[n],o,l,{}),n}runKernel(t,n,s){if(this.backendName==null&&this.backend,!(_h(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,s){const o=this.backend.numDataIds();let l=0;s.forEach(p=>{l+=p.dtype==="complex64"?3:1});const c=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],f=o-n-l-c;if(f>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${f} data ids) after running '${t}'`)}runKernelFunc(t){let n,s=[];const o=this.isTapeOn(),l=this.state.numBytes,c=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let f;this.backendName==null&&this.backend;let p;const d=uh(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(uh(t)){const{kernelName:$,inputs:B,attrs:C}=t;this.backendName==null&&this.backend;const V=_h($,this.backendName);L(V!=null,()=>`Cannot find registered kernel '${$}' for backend '${this.backendName}'`),f=()=>{const lt=this.backend.numDataIds();p=V.kernelFunc({inputs:B,attrs:C,backend:this.backend});const rt=Array.isArray(p)?p:[p];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak($,lt,rt);const Q=rt.map(tt=>tt.rank!=null?tt:this.makeTensorFromTensorInfo(tt));if(o){const tt=this.getTensorsForGradient($,B,Q);s=this.saveTensorsForBackwardMode(tt)}return Q}}else{const{forwardFunc:$}=t,B=C=>{o&&(s=C.map(V=>this.keep(this.clone(V))))};f=()=>{const C=this.backend.numDataIds();p=this.tidy(()=>$(this.backend,B));const V=Array.isArray(p)?p:[p];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(d,C,V),V}}const{inputs:y,attrs:v}=t,N=uh(t)?null:t.backwardsFunc;let A;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=f():(A=this.profiler.profileKernel(d,y,()=>f()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(A),n=A.outputs)}),o&&this.addTapeNode(d,y,n,N,s,v),this.state.profiling&&this.state.activeProfile.kernels.push({name:d,bytesAdded:this.state.numBytes-l,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-c,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(y).map($=>y[$]!=null?y[$].shape:null),outputShapes:n.map($=>$.shape),kernelTimeMs:A.timeMs,extraInfo:A.extraInfo}),Array.isArray(p)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,n,s){const o=sm(t);if(o!=null){const l=o.inputsToSave||[],c=o.outputsToSave||[];let f;o.saveAllInputs?(L(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),f=Object.keys(n).map(d=>n[d])):f=l.map(d=>n[d]);const p=s.filter((d,y)=>c[y]);return f.concat(p)}return[]}makeTensor(t,n,s,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let l=t;s==="string"&&t1(t[0])&&(l=t.map(p=>Ib(p)));const c=o.write(l,n,s),f=new Ie(n,s,c,this.nextTensorId());if(this.trackTensor(f,o),s==="string"){const p=this.state.tensorInfo.get(c),d=Ug(l);this.state.numBytes+=d-p.bytes,p.bytes=d}return f}makeTensorFromDataId(t,n,s,o){s=s||"float32";const l={dataId:t,shape:n,dtype:s};return this.makeTensorFromTensorInfo(l,o)}makeTensorFromTensorInfo(t,n){const{dataId:s,shape:o,dtype:l}=t,c=new Ie(o,l,s,this.nextTensorId());return this.trackTensor(c,n),c}makeVariable(t,n=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.cast(o));const l=new Ul(t,n,s,this.nextTensorId());if(this.state.registeredVariables[l.name]!=null)throw new Error(`Variable with name ${l.name} was already registered`);return this.state.registeredVariables[l.name]=l,this.incRef(l,this.backend),l}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*Th(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof Ul||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*Th(t.dtype);this.state.numBytes-=s}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,s,o,l,c){const f={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:s,saved:l},p=sm(t);p!=null&&(o=p.gradFunc),o!=null&&(f.gradient=d=>(d=d.map((y,v)=>{if(y==null){const N=s[v],A=n1(N.size,N.dtype);return this.makeTensor(A,N.shape,N.dtype)}return y}),o(d.length>1?d:d[0],l,c))),this.state.activeTape.push(f)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=l3(t),s=new Set(n.map(l=>l.id));for(let l=0;l<this.state.activeScope.track.length;l++){const c=this.state.activeScope.track[l];!c.kept&&!s.has(c.id)&&c.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(l=>{!l.kept&&l.scopeId===o.id&&this.track(l)})}gradients(t,n,s,o=!1){if(L(n.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const l=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));L(l instanceof Ie,()=>"The result y returned by f() must be a tensor.");const c=Hb(this.state.activeTape,n,l);if(!o&&c.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const f={};f[l.id]=s??Jb(l.shape),Gb(f,c,d=>this.tidy(d),tv);const p=n.map(d=>f[d.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(d=>{for(const y of d.saved)y.dispose()}),this.state.activeTape=null),{value:l,grads:p}})}customGrad(t){return L(Nh(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{L(n.every(f=>f instanceof Ie),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};n.forEach((f,p)=>{o[p]=f});const l=(f,p)=>(s=t(...n,p),L(s.value instanceof Ie,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),L(Nh(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),c=(f,p)=>{const d=s.gradFunc(f,p),y=Array.isArray(d)?d:[d];L(y.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),L(y.every(N=>N instanceof Ie),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const v={};return y.forEach((N,A)=>{v[A]=()=>N}),v};return this.runKernelFunc({forwardFunc:l,backwardsFunc:c,inputs:o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=Ll(),s=await this.backend.time(t);return s.wallMs=Ll()-n,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new cm;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}io.nextTensorId=0;io.nextVariableId=0;function Jb(r){const t=Pm(Qe(r),"float32");return G.makeTensor(t,r,"float32")}function f3(){const r=Qm();if(r._tfengine==null){const t=new Fg(r);r._tfengine=new io(t)}return qg(r._tfengine.ENV),Yb(()=>r._tfengine),r._tfengine}const G=f3();function tv(r,t){const n={a:r,b:t};return G.runKernel(Zm,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ev(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Un=ne();Un.registerFlag("DEBUG",()=>!1,r=>{r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Un.registerFlag("IS_BROWSER",()=>ev());Un.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Un.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Un.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Un.registerFlag("PROD",()=>!1);Un.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Un.getBool("DEBUG"));Un.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Un.registerFlag("IS_TEST",()=>!1);Un.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Un.getBool("DEBUG"));Un.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Un.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Un.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xs(r,t){let n=r;if(Nr(r))return t==="string"?[]:[r.length];if(o3(r)){const o=r.channels||"RGBA";return[r.height,r.width*o.length]}else if(u3(r))return[r.buffer.size/(t==null?4:Th(t))];if(!Array.isArray(r))return[];const s=[];for(;Array.isArray(n)||Nr(n)&&t!=="string";)s.push(n.length),n=n[0];return Array.isArray(r)&&ne().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&h3(r,s,[]),s}function h3(r,t,n){if(n=n||[],!Array.isArray(r)&&!Nr(r)){L(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}L(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${r.length} elements`),L(r.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${r.length} elements`);const s=t.slice(1);for(let o=0;o<r.length;++o)h3(r[o],s,n.concat(o))}function fm(r,t,n,s){if(r!=="string_or_numeric"){if(r==null)throw new Error("Expected dtype cannot be null.");if(r!=="numeric"&&r!==t||r==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${s}' must be ${r} tensor, but got ${t} tensor`)}}function D(r,t,n,s="numeric"){if(r instanceof i3())return fm(s,r.dtype,t,n),r;let o=Ql(r);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),fm(s,o,t,n),r==null||!Nr(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){const p=r==null?"null":r.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${p}'`)}const l=xs(r,o);!Nr(r)&&!Array.isArray(r)&&(r=[r]);const f=o!=="string"?a3(r,o):hu(r,[],!0);return G.makeTensor(f,l,o)}function Il(r,t,n,s="numeric"){if(!Array.isArray(r))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return r.map((l,c)=>D(l,`${t}[${c}]`,n,s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p3="__op";function j(r){const t=Object.keys(r);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const s=r[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+p3;const o=(...l)=>{G.startScope(n);try{const c=s(...l);return fi(c)&&console.error("Cannot return a Promise inside of tidy."),G.endScope(c),c}catch(c){throw G.endScope(null),c}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nv(r,t){const n=D(r,"real","complex"),s=D(t,"imag","complex");Er(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:n,imag:s};return G.runKernel(my,o)}const Ns=j({complex_:nv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function As(r,t,n,s){if(s==null)s=Ql(r);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(u3(r)||o3(r)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return G.backend.createTensorFromGPUData(r,t||n,s)}if(!Nr(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){ar(t);const o=Qe(t),l=Qe(n);L(o===l,()=>`Based on the provided shape, [${t}], the tensor should have ${o} values but has ${l}`);for(let c=0;c<n.length;++c){const f=n[c],p=c===n.length-1?f!==Qe(t.slice(c)):!0;L(n[c]===t[c]||!p,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!Nr(r)&&!Array.isArray(r)&&(r=[r]),t=t||n,r=s!=="string"?a3(r,s):hu(r,[],!0),G.makeTensor(r,t,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function na(r,t,n){const s=xs(r,n);return As(r,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hi={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Ur{static join(t){return new Ur(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>Nr(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let n=0;for(let s=0;s<t.length;s++){const o=t[s];s!==t.length-1&&o.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const l=n+o.byteLength;this.shards.push({buffer:o,start:n,end:l}),n=l}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,n=isNaN(Number(n))?0:n,t=Math.max(0,t),n=Math.min(this.byteLength,n),n<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const o=n-t,l=new ArrayBuffer(o),c=new Uint8Array(l);let f=0;for(let p=s;p<this.shards.length;p++){const d=this.shards[p],v=t+f-d.start,N=f,$=Math.min(n,d.end)-d.start,B=new Uint8Array(d.buffer,v,$-v);if(c.set(B,N),f+=B.length,n<d.end)break}return l}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function n(o){return t<o.start?-1:t>=o.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=rv(this.shards,n);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function rv(r,t){let n=0,s=r.length;for(;n<=s;){const o=Math.floor((s-n)/2)+n,l=t(r[o]);if(l===0)return o;l<0?s=o:n=o+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zt(r,t){return G.tidy(r,t)}function Me(r){l3(r).forEach(n=>n.dispose())}function ea(r){return G.keep(r)}function av(){return G.backendName}function sv(){return G.backend}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Es=4;async function iv(r,t){const n=[],s=[],o=Array.isArray(r)?r.map(c=>c.name):Object.keys(r);for(let c=0;c<o.length;++c){const f=o[c],p=Array.isArray(r)?r[c].tensor:r[f];if(p.dtype!=="float32"&&p.dtype!=="int32"&&p.dtype!=="bool"&&p.dtype!=="string"&&p.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${f}': ${p.dtype}`);const d={name:f,shape:p.shape,dtype:p.dtype};if(p.dtype==="string"){const y=new Promise(async v=>{const N=await p.bytes(),A=N.reduce((C,V)=>C+V.length,0)+Es*N.length,$=new Uint8Array(A);let B=0;for(let C=0;C<N.length;C++){const V=N[C],lt=new Uint8Array(new Uint32Array([V.length]).buffer);$.set(lt,B),B+=Es,$.set(V,B),B+=V.length}v($)});s.push(y)}else s.push(p.data());t!=null&&(d.group=t),n.push(d)}const l=await Promise.all(s);return{data:lv(l),specs:n}}function d3(r,t){const n=new Ur(r),s={};let o=0;for(const l of t){const c=ov(l,(f,p)=>n.slice(o+f,o+p));s[l.name]=m3(l,n.slice(o,o+c)),o+=c}return s}function ov(r,t){const n=Qe(r.shape);let s;if("quantization"in r){const o=r.quantization;s=hi[o.dtype]}else if(r.dtype==="string"){let o=0;for(let l=0;l<n;l++)o+=Es+new Uint32Array(t(o,o+Es))[0];return o}else s=hi[r.dtype];return n*s}async function uv(r,t){const n=Qe(r.shape);let s;if("quantization"in r){const o=r.quantization;s=hi[o.dtype]}else if(r.dtype==="string"){let o=0;for(let l=0;l<n;l++)o+=Es+new Uint32Array(await t(o,o+Es))[0];return o}else s=hi[r.dtype];return n*s}function m3(r,t){const n=r.name,s=r.dtype,o=r.shape,l=Qe(o);let c,f=0;if("quantization"in r){const p=r.quantization;if(p.dtype==="uint8"||p.dtype==="uint16"){if(!("min"in p&&"scale"in p))throw new Error(`Weight ${r.name} with quantization ${p.dtype} doesn't have corresponding metadata min and scale.`)}else if(p.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${r.name} is quantized with ${p.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${r.name} has unknown quantization dtype ${p.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const d=hi[p.dtype],y=p.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(s==="float32")if(p.dtype==="uint8"||p.dtype==="uint16"){c=new Float32Array(y.length);for(let v=0;v<y.length;v++){const N=y[v];c[v]=N*p.scale+p.min}}else if(p.dtype==="float16")c=gv()(y);else throw new Error(`Unsupported quantization type ${p.dtype} for weight type float32.`);else if(s==="int32"){if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error(`Unsupported quantization type ${p.dtype} for weight type int32.`);c=new Int32Array(y.length);for(let v=0;v<y.length;v++){const N=y[v];c[v]=Math.round(N*p.scale+p.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);f+=l*d}else if(s==="string"){const p=Qe(r.shape);c=[];for(let d=0;d<p;d++){const y=new Uint32Array(t.slice(f,f+Es))[0];f+=Es;const v=new Uint8Array(t.slice(f,f+y));c.push(v),f+=y}}else{const p=hi[s];if(s==="float32")c=new Float32Array(t);else if(s==="int32")c=new Int32Array(t);else if(s==="bool")c=new Uint8Array(t);else if(s==="complex64"){c=new Float32Array(t);const d=new Float32Array(c.length/2),y=new Float32Array(c.length/2);for(let $=0;$<d.length;$++)d[$]=c[$*2],y[$]=c[$*2+1];const v=na(d,o,"float32"),N=na(y,o,"float32"),A=Ns(v,N);return v.dispose(),N.dispose(),A}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);f+=l*p}return na(c,o,s)}async function hm(r,t,n){let s=new Uint8Array(t);for(;s.byteLength<n;){const{done:o,value:l}=await r.read();if(o&&l==null){const f=n-s.byteLength;throw new Error(`Reader is done but ${f} bytes are still expected`)}const c=new Uint8Array(s.length+l.byteLength);c.set(s,0),c.set(new Uint8Array(l),s.length),s=c}return s.buffer}async function g3(r,t){const n={},s=r.getReader();let o=new ArrayBuffer(0);for(const l of t){const c=await uv(l,async(d,y)=>(o=await hm(s,o,y),o.slice(d,y)));o=await hm(s,o,c);const f=o.slice(0,c);o=o.slice(c);const p=m3(l,f);if(n[l.name]=p,av()==="webgpu"){const d=sv();"uploadToGPU"in d&&Qe(p.shape)>=ne().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&d.uploadToGPU(p.dataId)}}return n}function lv(r){if(r===null)throw new Error(`Invalid input value: ${JSON.stringify(r)}`);let t=0;const n=[];r.forEach(l=>{if(t+=l.byteLength,n.push(l.byteLength===l.buffer.byteLength?l:new l.constructor(l)),!(l instanceof Float32Array||l instanceof Int32Array||l instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${l.constructor.name}`)});const s=new Uint8Array(t);let o=0;return n.forEach(l=>{s.set(new Uint8Array(l.buffer),o),o+=l.byteLength}),s.buffer}const a1=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function pm(r){return a1?Buffer.byteLength(r,"utf8"):new Blob([r]).size}function cv(r){if(a1)return Buffer.from(r).toString("base64");const t=new Uint8Array(r);let n="";for(let s=0,o=t.length;s<o;s++)n+=String.fromCharCode(t[s]);return btoa(n)}function fv(r){if(a1){const s=Buffer.from(r,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(r),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n.set([t.charCodeAt(s)],s);return n.buffer}function hv(r){return Ur.join(r)}function dm(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);const n=r.split("/");return n[n.length-1]}function y3(r,t){const n={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy,weightsManifest:t};return r.signature!=null&&(n.signature=r.signature),r.userDefinedMetadata!=null&&(n.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(n.modelInitializer=r.modelInitializer),r.initializerSignature!=null&&(n.initializerSignature=r.initializerSignature),r.trainingConfig!=null&&(n.trainingConfig=r.trainingConfig),n}function b3(r,t,n){const s={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy};if(r.trainingConfig!=null&&(s.trainingConfig=r.trainingConfig),r.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=n}return r.signature!=null&&(s.signature=r.signature),r.userDefinedMetadata!=null&&(s.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(s.modelInitializer=r.modelInitializer),r.initializerSignature!=null&&(s.initializerSignature=r.initializerSignature),s}async function s1(r,t){let n,s;return r.weightsManifest!=null&&([n,s]=await t(r.weightsManifest)),b3(r,n,s)}function vu(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:pm(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:pm(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:new Ur(r.weightData).byteLength}}function $h(r){const t=[];for(const n of r)t.push(...n.weights);return t}function pv(){const r=n=>{let s=n<<13,o=0;for(;(s&8388608)===0;)o-=8388608,s<<=1;return s&=-8388609,o+=947912704,s|o},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=r(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function dv(){const r=new Uint32Array(64);r[0]=0,r[31]=1199570944,r[32]=2147483648,r[63]=3347054592;for(let t=1;t<31;t++)r[t]=t<<23;for(let t=33;t<63;t++)r[t]=2147483648+(t-32<<23);return r}function mv(){const r=new Uint32Array(64);for(let t=0;t<64;t++)r[t]=1024;return r[0]=r[32]=0,r}function gv(){const r=pv(),t=dv(),n=mv();return s=>{const o=new ArrayBuffer(4*s.length),l=new Uint32Array(o);for(let c=0;c<s.length;c++){const f=s[c],p=r[n[f>>10]+(f&1023)]+t[f>>10];l[c]=p}return new Float32Array(o)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ze{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return ze.instance==null&&(ze.instance=new ze),ze.instance}static registerSaveRouter(t){ze.getInstance().saveRouters.push(t)}static registerLoadRouter(t){ze.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return ze.getHandlers(t,"save")}static getLoadHandlers(t,n){return ze.getHandlers(t,"load",n)}static getHandlers(t,n,s){const o=[];return(n==="load"?ze.getInstance().loadRouters:ze.getInstance().saveRouters).forEach(c=>{const f=c(t,s);f!==null&&o.push(f)}),o}}const yv=r=>ze.registerSaveRouter(r),bv=r=>ze.registerLoadRouter(r),vv=r=>ze.getSaveHandlers(r),Sv=(r,t)=>ze.getLoadHandlers(r,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rh="tensorflowjs",Ch=1,ui="models_store",vs="model_info_store";function v3(){if(!ne().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const r=typeof window>"u"?self:window,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function zh(r){const t=r.result;t.createObjectStore(ui,{keyPath:"modelPath"}),t.createObjectStore(vs,{keyPath:"modelPath"})}class pi{constructor(t){if(this.indexedDB=v3(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((s,o)=>{const l=this.indexedDB.open(Rh,Ch);l.onupgradeneeded=()=>zh(l),l.onsuccess=()=>{const c=l.result;if(n==null){const f=c.transaction(ui,"readonly"),d=f.objectStore(ui).get(this.modelPath);d.onsuccess=()=>{if(d.result==null)return c.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(d.result.modelArtifacts)},d.onerror=y=>(c.close(),o(d.error)),f.oncomplete=()=>c.close()}else{n.weightData=Ur.join(n.weightData);const f=vu(n),p=c.transaction(vs,"readwrite");let d=p.objectStore(vs),y;try{y=d.put({modelPath:this.modelPath,modelArtifactsInfo:f})}catch(N){return o(N)}let v;y.onsuccess=()=>{v=c.transaction(ui,"readwrite");const N=v.objectStore(ui);let A;try{A=N.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:f})}catch($){return o($)}A.onsuccess=()=>s({modelArtifactsInfo:f}),A.onerror=$=>{d=p.objectStore(vs);const B=d.delete(this.modelPath);B.onsuccess=()=>(c.close(),o(A.error)),B.onerror=C=>(c.close(),o(A.error))}},y.onerror=N=>(c.close(),o(y.error)),p.oncomplete=()=>{v==null?c.close():v.oncomplete=()=>c.close()}}},l.onerror=c=>o(l.error)})}}pi.URL_SCHEME="indexeddb://";const S3=r=>ne().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(pi.URL_SCHEME)?wv(r.slice(pi.URL_SCHEME.length)):null;ze.registerSaveRouter(S3);ze.registerLoadRouter(S3);function wv(r){return new pi(r)}function Tv(r){return r.startsWith(pi.URL_SCHEME)?r.slice(pi.URL_SCHEME.length):r}class Nv{constructor(){this.indexedDB=v3()}async listModels(){return new Promise((t,n)=>{const s=this.indexedDB.open(Rh,Ch);s.onupgradeneeded=()=>zh(s),s.onsuccess=()=>{const o=s.result,l=o.transaction(vs,"readonly"),f=l.objectStore(vs).getAll();f.onsuccess=()=>{const p={};for(const d of f.result)p[d.modelPath]=d.modelArtifactsInfo;t(p)},f.onerror=p=>(o.close(),n(f.error)),l.oncomplete=()=>o.close()},s.onerror=o=>n(s.error)})}async removeModel(t){return t=Tv(t),new Promise((n,s)=>{const o=this.indexedDB.open(Rh,Ch);o.onupgradeneeded=()=>zh(o),o.onsuccess=()=>{const l=o.result,c=l.transaction(vs,"readwrite"),f=c.objectStore(vs),p=f.get(t);let d;p.onsuccess=()=>{if(p.result==null)return l.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const y=f.delete(t),v=()=>{d=l.transaction(ui,"readwrite");const A=d.objectStore(ui).delete(t);A.onsuccess=()=>n(p.result.modelArtifactsInfo),A.onerror=$=>s(p.error)};y.onsuccess=v,y.onerror=N=>(v(),l.close(),s(p.error))}},p.onerror=y=>(l.close(),s(p.error)),c.oncomplete=()=>{d==null?l.close():d.oncomplete=()=>l.close()}},o.onerror=l=>s(o.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oa="/",no="tensorflowjs_models",w3="info",Ev="model_topology",_v="weight_specs",xv="weight_data",Av="model_metadata";function T3(r){return{info:[no,r,w3].join(Oa),topology:[no,r,Ev].join(Oa),weightSpecs:[no,r,_v].join(Oa),weightData:[no,r,xv].join(Oa),modelMetadata:[no,r,Av].join(Oa)}}function N3(r){for(const t of Object.values(r))window.localStorage.removeItem(t)}function Ov(r){const t=r.split(Oa);if(t.length<3)throw new Error(`Invalid key format: ${r}`);return t.slice(1,t.length-1).join(Oa)}function kv(r){return r.startsWith(di.URL_SCHEME)?r.slice(di.URL_SCHEME.length):r}class di{constructor(t){if(!ne().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=T3(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),o=vu(t),l=Ur.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,cv(l));const c={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(c)),{modelArtifactsInfo:o}}catch{throw N3(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=o;const l=this.LS.getItem(this.keys.modelMetadata);if(l!=null){const f=JSON.parse(l);n.format=f.format,n.generatedBy=f.generatedBy,n.convertedBy=f.convertedBy,f.signature!=null&&(n.signature=f.signature),f.userDefinedMetadata!=null&&(n.userDefinedMetadata=f.userDefinedMetadata),f.modelInitializer!=null&&(n.modelInitializer=f.modelInitializer),f.initializerSignature!=null&&(n.initializerSignature=f.initializerSignature),f.trainingConfig!=null&&(n.trainingConfig=f.trainingConfig)}const c=this.LS.getItem(this.keys.weightData);if(c==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=fv(c),n}}di.URL_SCHEME="localstorage://";const E3=r=>ne().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(di.URL_SCHEME)?Dv(r.slice(di.URL_SCHEME.length)):null;ze.registerSaveRouter(E3);ze.registerLoadRouter(E3);function Dv(r){return new di(r)}class $v{constructor(){L(ne().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),L(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=no+Oa,s=Oa+w3;for(let o=0;o<this.LS.length;++o){const l=this.LS.key(o);if(l.startsWith(n)&&l.endsWith(s)){const c=Ov(l);t[c]=JSON.parse(this.LS.getItem(l))}}return t}async removeModel(t){t=kv(t);const n=T3(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(n.info));return N3(n),s}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ao="://";class Rn{constructor(){this.managers={}}static getInstance(){return Rn.instance==null&&(Rn.instance=new Rn),Rn.instance}static registerManager(t,n){L(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(ao)&&(t=t.slice(0,t.indexOf(ao))),L(t.length>0,()=>"scheme must not be an empty string.");const s=Rn.getInstance();L(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=n}static getManager(t){const n=Rn.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(Rn.getInstance().managers)}}function Al(r){if(r.indexOf(ao)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Rn.getSchemes().join(",")}`);return{scheme:r.split(ao)[0],path:r.split(ao)[1]}}async function _3(r,t,n=!1){L(r!==t,()=>`Old path and new path are the same: '${r}'`);const s=ze.getLoadHandlers(r);L(s.length>0,()=>`Copying failed because no load handler is found for source URL ${r}.`),L(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${r}.`);const o=s[0],l=ze.getSaveHandlers(t);L(l.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),L(l.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${t}.`);const c=l[0],f=Al(r).scheme,p=Al(r).path,d=f===Al(r).scheme,y=await o.load();n&&d&&await Rn.getManager(f).removeModel(p);const v=await c.save(y);return n&&!d&&await Rn.getManager(f).removeModel(p),v.modelArtifactsInfo}async function Rv(){const r=Rn.getSchemes(),t={};for(const n of r){const s=await Rn.getManager(n).listModels();for(const o in s){const l=n+ao+o;t[l]=s[o]}}return t}async function Cv(r){const t=Al(r);return Rn.getManager(t.scheme).removeModel(t.path)}async function zv(r,t){return _3(r,t,!1)}async function Mv(r,t){return _3(r,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bv{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!ne().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return r3(t)}}if(ne().get("IS_BROWSER")){ne().setPlatform("browser",new Bv);try{Rn.registerManager(di.URL_SCHEME,new $v)}catch{}try{Rn.registerManager(pi.URL_SCHEME,new Nv)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lv={importFetch:()=>require("node-fetch")};let lh;class Uv{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return ne().global.fetch!=null?ne().global.fetch(t,n):(lh==null&&(lh=Lv.importFetch()),lh(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}ne().get("IS_NODE")&&!ne().get("IS_BROWSER")&&ne().setPlatform("node",new Uv);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ra(r,t="float32",n){return t=t||"float32",ar(r),new xh(r,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iv(r,t){const n=D(r,"x","cast");if(!Lg(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:n},o={dtype:t};return G.runKernel(Jm,s,o)}const De=j({cast_:Iv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jv(r){const n={x:D(r,"x","clone","string_or_numeric")};return G.runKernel(t3,n)}const Ss=j({clone_:jv});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x3(r,t=!1){console.log(r.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */f3();const Fv={buffer:Ra,cast:De,clone:Ss,print:x3};Xb(Fv);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vv(r,t){let n=D(r,"a","add"),s=D(t,"b","add");[n,s]=je(n,s);const o={a:n,b:s};return G.runKernel(Zm,o)}const Mt=j({add_:Vv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hv(r,t){let n=D(r,"a","floorDiv"),s=D(t,"b","floorDiv");[n,s]=je(n,s);const o={a:n,b:s};return G.runKernel(Yy,o)}const A3=j({floorDiv_:Hv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gv(r,t){let n=D(r,"a","div"),s=D(t,"b","div");if([n,s]=je(n,s),n.dtype==="int32"&&s.dtype==="int32")return A3(n,s);const o={a:n,b:s},l={};return G.runKernel(My,o,l)}const ee=j({div_:Gv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qv(r,t){let n=D(r,"a","mul"),s=D(t,"b","mul");[n,s]=je(n,s);const o={a:n,b:s};return G.runKernel(_6,o)}const wt=j({mul_:qv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kv(r){const t=D(r,"x","abs");if(t.dtype==="complex64"){const n={x:t};return G.runKernel(gy,n)}else{const n={x:t};return G.runKernel(Yg,n)}}const nr=j({abs_:Kv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yv(r){const n={x:D(r,"x","acos")};return G.runKernel(Xg,n)}const Xv=j({acos_:Yv});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pv(r){const n={x:D(r,"x","acosh")};return G.runKernel(Pg,n)}const Wv=j({acosh_:Pv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qv(r){L(Array.isArray(r),()=>"The argument passed to tf.addN() must be a list of tensors"),L(r.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${r.length}`);const t=r.map((o,l)=>D(o,`tensors${l}`,"addN")),n=t[0];t.forEach(o=>{if(o.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(o=>{if(!$a(o.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const s=t;return G.runKernel(Wg,s)}const Zv=j({addN_:Qv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jv(r,t=null,n=!1){const o={x:D(r,"x","all","bool")},l={axis:t,keepDims:n};return G.runKernel(Qg,o,l)}const t5=j({all_:Jv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e5(r,t=null,n=!1){const o={x:D(r,"x","any","bool")},l={axis:t,keepDims:n};return G.runKernel(Zg,o,l)}const n5=j({any_:e5});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r5(r,t=0){const s={x:D(r,"x","argMax")},o={axis:t};return G.runKernel(Jg,s,o)}const a5=j({argMax_:r5});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s5(r,t=0){const s={x:D(r,"x","argMin")},o={axis:t};return G.runKernel(ty,s,o)}const i5=j({argMin_:s5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o5(r){const n={x:D(r,"x","asin")};return G.runKernel(ey,n)}const u5=j({asin_:o5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l5(r){const n={x:D(r,"x","asinh")};return G.runKernel(ny,n)}const c5=j({asinh_:l5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f5(r){const n={x:D(r,"x","atan")};return G.runKernel(ry,n)}const h5=j({atan_:f5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p5(r,t){let n=D(r,"a","atan2"),s=D(t,"b","atan2");[n,s]=je(n,s);const o={a:n,b:s};return G.runKernel(sy,o)}const d5=j({atan2_:p5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m5(r){const n={x:D(r,"x","atanh")};return G.runKernel(ay,n)}const g5=j({atanh_:m5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y5(r,t,n,s,o,l,c="channelsLast"){const[f,p]=pu(t);let d;if(c==="channelsLast")d=[f,p,r[3],r[3]];else if(c==="channelsFirst")d=[f,p,r[1],r[1]];else throw new Error(`Unknown dataFormat ${c}`);return i1(r,d,n,s,o,l,!1,c)}function i1(r,t,n,s,o,l,c=!1,f="channelsLast"){let[p,d,y,v]=[-1,-1,-1,-1];if(f==="channelsLast")[p,d,y,v]=r;else if(f==="channelsFirst")[p,v,d,y]=r;else throw new Error(`Unknown dataFormat ${f}`);const[N,A,,$]=t,[B,C]=pu(n),[V,lt]=pu(s),rt=Mh(N,V),Q=Mh(A,lt),{padInfo:tt,outHeight:it,outWidth:bt}=S5(o,d,y,B,C,rt,Q,l,f),Tt=c?$*v:$;let mt;return f==="channelsFirst"?mt=[p,Tt,it,bt]:f==="channelsLast"&&(mt=[p,it,bt,Tt]),{batchSize:p,dataFormat:f,inHeight:d,inWidth:y,inChannels:v,outHeight:it,outWidth:bt,outChannels:Tt,padInfo:tt,strideHeight:B,strideWidth:C,filterHeight:N,filterWidth:A,effectiveFilterHeight:rt,effectiveFilterWidth:Q,dilationHeight:V,dilationWidth:lt,inShape:r,outShape:mt,filterShape:t}}function b5(r,t,n,s,o){s==null&&(s=v5(r,t,n));const l=r[0],c=r[1],f=jl((l-t+2*s)/n+1,o),p=jl((c-t+2*s)/n+1,o);return[f,p]}function v5(r,t,n,s=1){const o=Mh(t,s);return Math.floor((r[0]*(n-1)-n+o)/2)}function pu(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Mh(r,t){return t<=1?r:r+(r-1)*(t-1)}function S5(r,t,n,s,o,l,c,f,p){let d,y,v;if(typeof r=="number"){d={top:r,bottom:r,left:r,right:r,type:r===0?"VALID":"NUMBER"};const A=b5([t,n],l,s,r,f);y=A[0],v=A[1]}else if(r==="same"){y=Math.ceil(t/s),v=Math.ceil(n/o);const N=Math.max(0,(y-1)*s+l-t),A=Math.max(0,(v-1)*o+c-n),$=Math.floor(N/2),B=N-$,C=Math.floor(A/2),V=A-C;d={top:$,bottom:B,left:C,right:V,type:"SAME"}}else if(r==="valid")d={top:0,bottom:0,left:0,right:0,type:"VALID"},y=Math.ceil((t-l+1)/s),v=Math.ceil((n-c+1)/o);else if(typeof r=="object"){const N=p==="channelsLast"?r[1][0]:r[2][0],A=p==="channelsLast"?r[1][1]:r[2][1],$=p==="channelsLast"?r[2][0]:r[3][0],B=p==="channelsLast"?r[2][1]:r[3][1];d={top:N,bottom:A,left:$,right:B,type:N===0&&A===0&&$===0&&B===0?"VALID":"EXPLICIT"},y=jl((t-l+N+A)/s+1,f),v=jl((n-c+$+B)/o+1,f)}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:d,outHeight:y,outWidth:v}}function jl(r,t){if(!t)return Math.trunc(r);switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error(`Unknown roundingMode ${t}`)}}function Fl(r){const[t,n,s]=pu(r);return t===1&&n===1&&s===1}function Os(r,t){return Fl(r)||Fl(t)}function oo(r){return pu(r).every(t=>t>0)}function Ir(r,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${r}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")L(fu(t),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(o=>{L(fu(o),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${n} but got pad ${o}.`)})});else throw Error(`Error in ${r}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w5(r,t){const s={x:D(r,"x","reshape","string_or_numeric")},o={shape:t};return G.runKernel(q6,s,o)}const ct=j({reshape_:w5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T5(r,t,n,s,o){const l=D(r,"x","avgPool","float32"),c=1;L(Os(n,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${c}'`);let f=l,p=!1;l.rank===3&&(p=!0,f=ct(l,[1,l.shape[0],l.shape[1],l.shape[2]])),L(f.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${f.rank}.`),Ir("avgPool",s,o);const d={x:f},y={filterSize:t,strides:n,pad:s,dimRoundingMode:o};let v=G.runKernel(iy,d,y);return v=De(v,l.dtype),p?ct(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const O3=j({avgPool_:T5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N5(r,t,n,s,o,l="NDHWC"){const c=D(r,"x","avgPool3d","float32");let f=c,p=!1;c.rank===4&&(p=!0,f=ct(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),L(f.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${f.rank}.`),L(l==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${l}`),L(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),Ir("avgPool3d",s,o);const d={x:f},y={filterSize:t,strides:n,pad:s,dimRoundingMode:o,dataFormat:l};let v=G.runKernel(oy,d,y);return v=De(v,f.dtype),p?ct(v,[v.shape[1],v.shape[2],v.shape[3],v.shape[4]]):v}const E5=j({avgPool3d_:N5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _5(r,t=0){L(r.length>=1,()=>"Pass at least one tensor to concat");const n=Il(r,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(l=>{if(l.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${l.dtype}. `)}),n.length===1)return Ss(n[0]);const s=n,o={axis:t};return G.runKernel(yy,s,o)}const mn=j({concat_:_5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x5(r,t,n=!1,s=!1){let o=D(r,"a","matMul"),l=D(t,"b","matMul");[o,l]=je(o,l);const c={a:o,b:l},f={transposeA:n,transposeB:s};return G.runKernel(uy,c,f)}const Se=j({matMul_:x5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A5(r){const n={x:D(r,"x","sigmoid","float32")};return G.runKernel(ob,n)}const ci=j({sigmoid_:A5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O5(r,t,n){const s=D(r,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const o={x:s},l={begin:t,size:n};return G.runKernel(rb,o,l)}const Pt=j({slice_:O5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k5(r){const n={x:D(r,"x","tanh","float32")};return G.runKernel(Ab,n)}const Bh=j({tanh_:k5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D5(r,t,n,s,o,l){const c=D(r,"forgetBias","basicLSTMCell"),f=D(t,"lstmKernel","basicLSTMCell"),p=D(n,"lstmBias","basicLSTMCell"),d=D(s,"data","basicLSTMCell"),y=D(o,"c","basicLSTMCell"),v=D(l,"h","basicLSTMCell"),N=mn([d,v],1),A=Se(N,f),$=Mt(A,p),B=$.shape[0],C=$.shape[1]/4,V=[B,C],lt=Pt($,[0,0],V),rt=Pt($,[0,C],V),Q=Pt($,[0,C*2],V),tt=Pt($,[0,C*3],V),it=Mt(wt(ci(lt),Bh(rt)),wt(y,ci(Mt(c,Q)))),bt=wt(Bh(it),ci(tt));return[it,bt]}const $5=j({basicLSTMCell_:D5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R5(r,t,n){const s=D(r,"x","batchToSpaceND"),o=t.reduce((f,p)=>f*p);L(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),L(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),L(s.shape[0]%o===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${o}`);const l={x:s},c={blockShape:t,crops:n};return G.runKernel(ly,l,c)}const k3=j({batchToSpaceND_:R5});function C5(r){let t;return r.rank===0||r.rank===1?t=ct(r,[1,1,1,r.size]):r.rank===2?t=ct(r,[1,1,r.shape[0],r.shape[1]]):r.rank===3?t=ct(r,[1,r.shape[0],r.shape[1],r.shape[2]]):t=r,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z5(r,t,n,s,o,l){l==null&&(l=.001);const c=D(r,"x","batchNorm"),f=D(t,"mean","batchNorm"),p=D(n,"variance","batchNorm");let d;o!=null&&(d=D(o,"scale","batchNorm"));let y;s!=null&&(y=D(s,"offset","batchNorm")),L(f.rank===p.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),L(y==null||f.rank===y.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),L(d==null||f.rank===d.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const N={x:C5(c),scale:d,offset:y,mean:f,variance:p},A={varianceEpsilon:l},$=G.runKernel(Xy,N,A);return ct($,c.shape)}const Zl=j({batchNorm_:z5});function M5(r,t,n,s,o,l){const c=D(r,"x","batchNorm"),f=D(t,"mean","batchNorm"),p=D(n,"variance","batchNorm");let d;o!=null&&(d=D(o,"scale","batchNorm"));let y;return s!=null&&(y=D(s,"offset","batchNorm")),L(c.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${c.rank}.`),L(f.rank===2||f.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${f.rank}.`),L(p.rank===2||p.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${p.rank}.`),d!=null&&L(d.rank===2||d.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${d.rank}.`),y!=null&&L(y.rank===2||y.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${y.rank}.`),Zl(c,f,p,y,d,l)}const B5=j({batchNorm2d_:M5});function L5(r,t,n,s,o,l){const c=D(r,"x","batchNorm"),f=D(t,"mean","batchNorm"),p=D(n,"variance","batchNorm");let d;o!=null&&(d=D(o,"scale","batchNorm"));let y;return s!=null&&(y=D(s,"offset","batchNorm")),L(c.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${c.rank}.`),L(f.rank===3||f.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${f.rank}.`),L(p.rank===3||p.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${p.rank}.`),d!=null&&L(d.rank===3||d.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${d.rank}.`),y!=null&&L(y.rank===3||y.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${y.rank}.`),Zl(c,f,p,y,d,l)}const U5=j({batchNorm3d_:L5});function I5(r,t,n,s,o,l){const c=D(r,"x","batchNorm"),f=D(t,"mean","batchNorm"),p=D(n,"variance","batchNorm");let d;o!=null&&(d=D(o,"scale","batchNorm"));let y;return s!=null&&(y=D(s,"offset","batchNorm")),L(c.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${c.rank}.`),L(f.rank===4||f.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${f.rank}.`),L(p.rank===4||p.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${p.rank}.`),d!=null&&L(d.rank===4||d.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${d.rank}.`),y!=null&&L(y.rank===4||y.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${y.rank}.`),Zl(c,f,p,y,d,l)}const j5=j({batchNorm4d_:I5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F5(r,t,n){const s=D(r,"x","bincount"),o=D(t,"weights","bincount");L(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),L(n>=0,()=>`size must be non-negative, but got ${n}.`),L(o.size===s.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${o.shape}.`);const l={x:s,weights:o},c={size:n};return G.runKernel(cy,l,c)}const D3=j({bincount_:F5});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V5(r,t){const n=D(r,"x","bitwiseAnd"),s=D(t,"y","bitwiseAnd");if(!$a(n.shape,s.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${s.shape}`);if(n.dtype!=="int32"||s.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${s.dtype}`);const o={a:n,b:s};return G.runKernel(fy,o)}const H5=j({bitwiseAnd_:V5});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G5(r,t){const n=D(r,"s0","broadcastArgs","int32"),s=D(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(s.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${s.rank}`);const o={s0:n,s1:s};return G.runKernel(hy,o)}const q5=j({broadcastArgs_:G5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K5(r,t){let n=D(r,"broadcastTo","x");const s=n.shape;if(ar(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const d=n.shape.slice();for(;d.length<t.length;)d.unshift(1);n=ct(n,d)}const o=n.shape,l=Array.from(t);for(let d=t.length-1;d>=0;d--)if(o[d]===t[d])l[d]=1;else if(n.shape[d]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(l.map((d,y)=>d>1?y:-1).filter(d=>d>=0).length===0)return Ss(n);const f={x:n},p={reps:l};return G.runKernel(e3,f,p)}const Ol=j({broadcastTo_:K5});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y5(r){const n={x:D(r,"x","ceil","float32")};return G.runKernel(py,n)}const X5=j({ceil_:Y5});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Su(r,t,n){ar(r),n=n||Ql(t);const s={shape:r,value:t,dtype:n};return G.runKernel(Gy,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P5(r,t,n){const s=D(r,"x","clipByValue");if(L(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return Su(s.shape,t,s.dtype);const o={x:s},l={clipValueMin:t,clipValueMax:n};return G.runKernel(dy,o,l)}const $3=j({clipByValue_:P5});function W5(r){return mn(r,0)}const Q5=j({concat1d_:W5});function Z5(r,t){return mn(r,t)}const J5=j({concat2d_:Z5});function t8(r,t){return mn(r,t)}const e8=j({concat3d_:t8});function n8(r,t){return mn(r,t)}const r8=j({concat4d_:n8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a8(r,t,n,s,o="NHWC",l=[1,1],c){const f=D(r,"x","conv2d","float32"),p=D(t,"filter","conv2d","float32");let d=f,y=!1;f.rank===3&&(y=!0,d=ct(f,[1,f.shape[0],f.shape[1],f.shape[2]])),L(d.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${d.rank}.`),L(p.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${p.rank}.`),Ir("conv2d",s,c);const v=o==="NHWC"?d.shape[3]:d.shape[1];L(v===p.shape[2],()=>`Error in conv2d: depth of input (${v}) must match input depth for filter ${p.shape[2]}.`),L(Os(n,l),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`),L(oo(l),()=>"Error in conv2D: Dilated rates should be larger than 0."),L(oo(n),()=>"Error in conv2D: Strides should be larger than 0.");const N={x:d,filter:p},A={strides:n,pad:s,dataFormat:o,dilations:l,dimRoundingMode:c},$=G.runKernel(by,N,A);return y?ct($,[$.shape[1],$.shape[2],$.shape[3]]):$}const Jl=j({conv2d_:a8});function s8(r,t,n,s,o="NWC",l=1,c){const f=D(r,"x","conv1d"),p=D(t,"filter","conv1d");let d=f,y=!1;f.rank===2&&(y=!0,d=ct(f,[1,f.shape[0],f.shape[1]])),L(d.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${d.rank}.`),L(p.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${p.rank}.`),Ir("conv1d",s,c),L(d.shape[2]===p.shape[1],()=>`Error in conv1d: depth of input (${d.shape[2]}) must match input depth for filter ${p.shape[1]}.`),L(Os(n,l),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${l}'`),L(oo(l),()=>"Error in conv1D: Dilated rates should be larger than 0."),L(oo(n),()=>"Error in conv1D: Stride should be larger than 0."),L(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);const v=ct(p,[1,p.shape[0],p.shape[1],p.shape[2]]),N=ct(d,[d.shape[0],1,d.shape[1],d.shape[2]]),C=Jl(N,v,[1,n],s,"NHWC",[1,l],c);return y?ct(C,[C.shape[2],C.shape[3]]):ct(C,[C.shape[0],C.shape[2],C.shape[3]])}const i8=j({conv1d_:s8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o8(r,t,n,s,o,l="NHWC",c){L(r.length===t.rank,()=>`Length of inShape (${r.length}) and rank of dy (${t.rank}) must match`);let f=r,p=t,d=!1;t.rank===3&&(d=!0,p=ct(t,[1,t.shape[0],t.shape[1],t.shape[2]]),f=[1,r[0],r[1],r[2]]),L(f.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${f.length}.`),L(p.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${p.rank}`),L(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const y=l==="NHWC"?f[3]:f[1],v=l==="NHWC"?p.shape[3]:p.shape[1];L(y===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${y}) must match input depth for filter ${n.shape[2]}.`),L(v===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${v}) must match output depth for filter ${n.shape[3]}.`),Ir("conv2dDerInput",o,c);const N={dy:p,filter:n},A={strides:s,pad:o,dataFormat:l,dimRoundingMode:c,inputShape:f},$=G.runKernel(Sy,N,A);return d?ct($,[$.shape[1],$.shape[2],$.shape[3]]):$}const R3=j({conv2DBackpropInput_:o8});function u8(r,t,n,s,o,l){const c=D(r,"x","conv2dTranspose"),f=D(t,"filter","conv2dTranspose");return R3(n,c,f,s,o,"NHWC",l)}const l8=j({conv2dTranspose_:u8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c8(r,t,n,s,o="NDHWC",l=[1,1,1]){const c=D(r,"x","conv3d"),f=D(t,"filter","conv3d");let p=c,d=!1;c.rank===4&&(d=!0,p=ct(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),L(p.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${p.rank}.`),L(f.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${f.rank}.`),L(p.shape[4]===f.shape[3],()=>`Error in conv3d: depth of input (${p.shape[4]}) must match input depth for filter ${f.shape[3]}.`),L(Os(n,l),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`),L(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`),L(oo(l),()=>"Error in conv3D: Dilated rates should be larger than 0."),L(oo(n),()=>"Error in conv3D: Strides should be larger than 0.");const y={x:p,filter:f},v={strides:n,pad:s,dataFormat:o,dilations:l},N=G.runKernel(wy,y,v);return d?ct(N,[N.shape[1],N.shape[2],N.shape[3],N.shape[4]]):N}const f8=j({conv3d_:c8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h8(r,t,n,s,o){L(r.length===t.rank,()=>`Length of inShape (${r.length}) and rank of dy (${t.rank}) must match`);let l=r,c=t,f=!1;t.rank===4&&(f=!0,c=ct(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),l=[1,r[0],r[1],r[2],r[3]]);const p=l[4],d=c.shape[4];L(l.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${l.length}.`),L(c.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${c.rank}`),L(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),L(p===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${p}) must match input depth for filter ${n.shape[3]}.`),L(d===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${d}) must match output depth for filter ${n.shape[4]}.`);const y={dy:c,filter:n},v={pad:o,strides:s,inputShape:l},N=G.runKernel(Ty,y,v);return f?ct(N,[N.shape[1],N.shape[2],N.shape[3],N.shape[4]]):N}const p8=j({conv3DBackpropInput_:h8});function d8(r,t,n,s,o){const l=D(r,"x","conv3dTranspose"),c=D(t,"filter","conv3dTranspose");return p8(n,l,c,s,o)}const m8=j({conv3dTranspose_:d8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g8(r){const n={x:D(r,"x","cos","float32")};return G.runKernel(Ny,n)}const y8=j({cos_:g8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b8(r){const n={x:D(r,"x","cosh","float32")};return G.runKernel(Ey,n)}const v8=j({cosh_:b8});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S8(r,t=0,n=!1,s=!1){const l={x:D(r,"x","cumprod")},c={axis:t,exclusive:n,reverse:s};return G.runKernel(_y,l,c)}const w8=j({cumprod_:S8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T8(r,t=0,n=!1,s=!1){const l={x:D(r,"x","cumsum")},c={axis:t,exclusive:n,reverse:s};return G.runKernel(xy,l,c)}const N8=j({cumsum_:T8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E8(r,t,n,s=!1){const o=D(r,"x","denseBincount"),l=D(t,"weights","denseBincount");L(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),L(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),L(n>=0,()=>`size must be non-negative, but got ${n}.`),L(l.size===o.size||l.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${l.shape}.`);const c={x:o,weights:l},f={size:n,binaryOutput:s};return G.runKernel(Oy,c,f)}const _8=j({denseBincount_:E8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x8(r,t,n="NHWC"){const s=D(r,"x","depthToSpace","float32"),o=n==="NHWC"?s.shape[1]:s.shape[2],l=n==="NHWC"?s.shape[2]:s.shape[3],c=n==="NHWC"?s.shape[3]:s.shape[1];L(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),L(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t}  for depthToSpace with input shape
    ${s.shape}`),L(l*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${l} and ${t} for depthToSpace with input shape
        ${s.shape}`),L(c%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${c} for depthToSpace with input shape ${s.shape}`);const f={x:s},p={blockSize:t,dataFormat:n};return G.runKernel(ky,f,p)}const A8=j({depthToSpace_:x8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O8(r,t,n,s,o="NHWC",l=[1,1],c){const f=D(r,"x","depthwiseConv2d","float32"),p=D(t,"filter","depthwiseConv2d","float32");let d=f,y=!1;f.rank===3&&(y=!0,d=ct(f,[1,f.shape[0],f.shape[1],f.shape[2]])),L(d.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),L(p.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${p.rank}.`);const v=o==="NHWC"?d.shape[3]:d.shape[1];L(v===p.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${v}) must match the inChannels dimension in filter ${p.shape[2]}.`),Ir("depthwiseConv2d",s,c);const N={x:d,filter:p},A={strides:n,pad:s,dataFormat:o,dilations:l,dimRoundingMode:c},$=G.runKernel(Dy,N,A);return y?ct($,[$.shape[1],$.shape[2],$.shape[3]]):$}const o1=j({depthwiseConv2d_:O8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k8(r){const n={x:D(r,"x","diag")};return G.runKernel(Cy,n)}const D8=j({diag_:k8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $8(r,t,n,s,o=[1,1],l="NHWC"){const c=D(r,"x","dilation2d"),f=D(t,"filter","dilation2d");L(c.rank===3||c.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${c.rank}.`),L(f.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${f.rank}.`),L(l==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${l}`);let p=c,d=!1;c.rank===3&&(p=ct(c,[1,c.shape[0],c.shape[1],c.shape[2]]),d=!0),L(p.shape[3]===f.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${p.shape[3]} vs ${f.shape[2]}`);const y={x:p,filter:f},v={strides:n,pad:s,dilations:o},N=G.runKernel(zy,y,v);return d?ct(N,[N.shape[1],N.shape[2],N.shape[3]]):N}const R8=j({dilation2d_:$8});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C8(r,t){const n=[];for(let s=0;s<t.length;s++){const o=r[r.length-s-1],l=t.length-s-1,c=t[l];(o==null||o===1&&c>1)&&n.unshift(l)}return n}function un(r,t){const n=Math.max(r.length,t.length),s=new Array(n);for(let o=0;o<n;o++){let l=r[r.length-o-1];l==null&&(l=1);let c=t[t.length-o-1];if(c==null&&(c=1),l===1)s[n-o-1]=c;else if(c===1)s[n-o-1]=l;else if(l!==c){const f=`Operands could not be broadcast together with shapes ${r} and ${t}.`;throw Error(f)}else s[n-o-1]=l}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z8(r,t){let n=D(r,"a","equal","string_or_numeric"),s=D(t,"b","equal","string_or_numeric");[n,s]=je(n,s),un(n.shape,s.shape);const o={a:n,b:s};return G.runKernel(Iy,o)}const C3=j({equal_:z8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M8(r,t,n){const s=D(t,"a","where"),o=D(n,"b","where"),l=D(r,"condition","where","bool"),c=un(un(l.shape,s.shape),o.shape),f=Ol(l,c),p=Ol(s,c),d=Ol(o,c),y={condition:f,t:p,e:d};return G.runKernel(eb,y)}const ws=j({where_:M8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B8(r){const n={x:D(r,"x","zerosLike")};return G.runKernel(Cb,n)}const rr=j({zerosLike_:B8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L8(r,t){let n=D(r,"a","div"),s=D(t,"b","div");[n,s]=je(n,s);const o=ee(n,s),l=rr(o),c=C3(s,l);return ws(c,l,o)}const U8=j({divNoNan_:L8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I8(r,t){const n=D(r,"t1","dot"),s=D(t,"t2","dot");L((n.rank===1||n.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${s.rank}.`);const o=n.rank===1?n.size:n.shape[1],l=s.rank===1?s.size:s.shape[0];if(L(o===l,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${l}.`),n.rank===1&&s.rank===1){const c=ct(n,[1,-1]),f=ct(s,[-1,1]),p=Se(c,f);return ct(p,[])}else if(n.rank===1&&s.rank===2){const c=ct(n,[1,-1]),f=ct(s,[s.shape[0],s.shape[1]]),p=Se(c,f);return ct(p,[p.size])}else if(n.rank===2&&s.rank===1){const c=ct(s,[-1,1]),f=Se(n,c);return ct(f,[f.size])}else{const c=ct(s,[s.shape[0],s.shape[1]]);return Se(n,c)}}const j8=j({dot_:I8});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F8(r,...t){const n=t.map((o,l)=>D(o,`tensors${l}`,"einsum")),s={equation:r};return G.runKernel(By,n,s)}const ro=j({einsum_:F8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V8(r){const n={x:D(r,"x","elu","float32")};return G.runKernel(Ly,n)}const z3=j({elu_:V8});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H8(r,t){const n=D(r,"x","ensureShape","string_or_numeric");if(!Cg(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return r}const G8=j({ensureShape_:H8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q8(r){let t=D(r,"x","erf");L(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=De(t,"float32"));const n={x:t};return G.runKernel(Uy,n)}const K8=j({erf_:q8});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y8(r,t,n){const s=r.length+t.length,o=[];let l=0,c=0;for(let f=0;f<s;f++)n.indexOf(f)===-1?o.push(r[l++]):o.push(t[c++]);return o}function tc(r,t){const n=t.map(s=>1);return Y8(r,n,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X8(r,t=null,n=!1){const o={x:D(r,"x","max")},l={reductionIndices:t,keepDims:n};return G.runKernel(d6,o,l)}const so=j({max_:X8});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P8(r,t=null,n=!1){const o={x:D(r,"x","min")},l={axis:t,keepDims:n};return G.runKernel(S6,o,l)}const Lh=j({min_:P8});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W8(r,t){let n=D(r,"base","pow"),s=D(t,"exp","pow");[n,s]=je(n,s);const o={a:n,b:s};return G.runKernel(M6,o)}const du=j({pow_:W8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oe(r,t){if((Nr(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Nr(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return As(r,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q8(r){const n={x:D(r,"x","sqrt","float32")};return G.runKernel(lb,n)}const Ca=j({sqrt_:Q8});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z8(r){const t=D(r,"x","square"),n={};return G.runKernel("Square",{x:t},n)}const Br=j({square_:Z8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J8(r,t=null,n=!1){let s=D(r,"x","sum");s.dtype==="bool"&&(s=De(s,"int32"));const o={x:s},l={axis:t,keepDims:n};return G.runKernel(cb,o,l)}const ke=j({sum_:J8});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t7(r,t="euclidean",n=null,s=!1){r=D(r,"x","norm");const o=M3(r,t,n);let l=o.shape;if(s){const c=Wl(n,r.shape);l=tc(o.shape,c)}return ct(o,l)}function M3(r,t,n=null){if(r.rank===0)return nr(r);if(r.rank!==1&&n===null)return M3(ct(r,[-1]),t,n);if(r.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return ke(nr(r),n);if(t===1/0)return so(nr(r),n);if(t===-1/0)return Lh(nr(r),n);if(t==="euclidean"||t===2)return Ca(ke(du(nr(r),oe(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return so(ke(nr(r),n[0]),n[1]-1);if(t===1/0)return so(ke(nr(r),n[1]),n[0]);if(t===-1/0)return Lh(ke(nr(r),n[1]),n[0]);if(t==="fro"||t==="euclidean")return Ca(ke(Br(r),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const ec=j({norm_:t7});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e7(r,t=null,n=!1){return ec(r,"euclidean",t,n)}const n7=j({euclideanNorm_:e7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r7(r){const n={x:D(r,"x","exp")};return G.runKernel(jy,n)}const za=j({exp_:r7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a7(r,t=0){const n=D(r,"x","expandDims","string_or_numeric");L(t<=n.rank,()=>"Axis must be <= rank of the tensor");const s={input:n},o={dim:t};return G.runKernel(Fy,s,o)}const Tr=j({expandDims_:a7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s7(r){const n={x:D(r,"x","expm1")};return G.runKernel(Vy,n)}const i7=j({expm1_:s7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o7(r,t){const n=D(r,"x","tile","string_or_numeric");L(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const s={x:n},o={reps:t};return G.runKernel(e3,s,o)}const cu=j({tile_:o7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u7(r,t,n,s="float32"){t==null&&(t=r);const o=Ra([r,t],s),l=r<=t?r:t;for(let f=0;f<l;++f)o.set(1,f,f);const c=ct(o.toTensor(),[r,t]);if(n==null)return c;if(n.length===1)return cu(Tr(c,0),[n[0],1,1]);if(n.length===2)return cu(Tr(Tr(c,0),0),[n[0],n[1],1,1]);if(n.length===3)return cu(Tr(Tr(Tr(c,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const B3=j({eye_:u7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l7(r){const n={x:D(r,"x","floor","float32")};return G.runKernel(Ky,n)}const L3=j({floor_:l7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c7(r,t,n=0,s=0){const o=D(r,"x","gather"),l=D(t,"indices","gather","int32"),c={x:o,indices:l},f={axis:n,batchDims:s};return G.runKernel(Py,c,f)}const U3=j({gather_:c7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f7(r,t){let n=D(r,"a","greater","string_or_numeric"),s=D(t,"b","greater","string_or_numeric");[n,s]=je(n,s),un(n.shape,s.shape);const o={a:n,b:s};return G.runKernel(Qy,o)}const nc=j({greater_:f7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h7(r,t){let n=D(r,"a","greaterEqual","string_or_numeric"),s=D(t,"b","greaterEqual","string_or_numeric");[n,s]=je(n,s),un(n.shape,s.shape);const o={a:n,b:s};return G.runKernel(Zy,o)}const I3=j({greaterEqual_:h7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p7(r){const n={input:D(r,"input","imag")};return G.runKernel(t6,n)}const rc=j({imag_:p7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d7(r){const n={x:D(r,"x","isFinite")};return G.runKernel(e6,n)}const m7=j({isFinite_:d7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g7(r){const n={x:D(r,"x","isInf")};return G.runKernel(n6,n)}const y7=j({isInf_:g7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b7(r){const n={x:D(r,"x","isNaN")};return G.runKernel(r6,n)}const v7=j({isNaN_:b7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S7(r,t=.2){const s={x:D(r,"x","leakyRelu")},o={alpha:t};return G.runKernel(a6,s,o)}const j3=j({leakyRelu_:S7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w7(r,t){let n=D(r,"a","less","string_or_numeric"),s=D(t,"b","less","string_or_numeric");[n,s]=je(n,s),un(n.shape,s.shape);const o={a:n,b:s};return G.runKernel(s6,o)}const Uh=j({less_:w7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T7(r,t){let n=D(r,"a","lessEqual","string_or_numeric"),s=D(t,"b","lessEqual","string_or_numeric");[n,s]=je(n,s),un(n.shape,s.shape);const o={a:n,b:s};return G.runKernel(i6,o)}const u1=j({lessEqual_:T7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N7(r,t,n){if(n<=0)throw new Error("The number of values should be positive.");const s={start:r,stop:t,num:n};return G.runKernel(o6,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E7(r,t=5,n=1,s=1,o=.5){const l=D(r,"x","localResponseNormalization");L(l.rank===4||l.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${l.rank}.`),L(fu(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let c=l,f=!1;l.rank===3&&(f=!0,c=ct(l,[1,l.shape[0],l.shape[1],l.shape[2]]));const p={x:c},d={depthRadius:t,bias:n,alpha:s,beta:o},y=G.runKernel(p6,p,d);return f?ct(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const _7=j({localResponseNormalization_:E7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x7(r){const n={x:D(r,"x","log","float32")};return G.runKernel(u6,n)}const mu=j({log_:x7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A7(r){const n={x:D(r,"x","log1p")};return G.runKernel(l6,n)}const F3=j({log1p_:A7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O7(r,t){L(Nh(r),()=>"The f passed in variableGrads(f) must be a function"),L(t==null||Array.isArray(t)&&t.every(d=>d instanceof Ul),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const d in G.registeredVariables)t.push(G.registeredVariables[d])}const s=n?t.filter(d=>!d.trainable):null,o=t.length;t=t.filter(d=>d.trainable),L(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const l=!0,{value:c,grads:f}=G.gradients(r,t,null,l);L(f.some(d=>d!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),L(c.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${c.rank} tensor`);const p={};return t.forEach((d,y)=>{f[y]!=null&&(p[d.name]=f[y])}),s?.forEach(d=>p[d.name]=null),{value:c,grads:p}}function Ma(r){return G.customGrad(r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k7(r){const n={x:D(r,"x","neg")};return G.runKernel(x6,n)}const ra=j({neg_:k7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D7(r){const n={x:D(r,"x","softplus")};return G.runKernel(ub,n)}const V3=j({softplus_:D7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $7(r){const t=D(r,"x","logSigmoid");return Ma(s=>({value:ra(V3(ra(s))),gradFunc:c=>wt(c,ci(ra(s)))}))(t)}const R7=j({logSigmoid_:$7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C7(r,t){let n=D(r,"a","sub"),s=D(t,"b","sub");[n,s]=je(n,s);const o={a:n,b:s};return G.runKernel(_b,o)}const Wt=j({sub_:C7});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z7(r,t=-1){const n=D(r,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Ma((o,l)=>{const f=so(o,t,!0),p=Wt(o,f),d=Wt(De(p,"float32"),mu(ke(za(p),t,!0)));return l([d]),{value:d,gradFunc:(v,N)=>{const[A]=N,$=!0,B=za(A);return Wt(v,wt(ke(v,t,$),B))}}})(n)}const M7=j({logSoftmax_:z7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B7(r,t=null,n=!1){const s=D(r,"x","logSumExp"),o=Wl(t,s.shape),l=so(s,o,!0),c=Wt(s,l),f=za(c),p=ke(f,o),d=mu(p),y=Mt(ct(l,d.shape),d);if(n){const v=tc(y.shape,o);return ct(y,v)}return y}const H3=j({logSumExp_:B7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L7(r,t){const n=D(r,"a","logicalAnd","bool"),s=D(t,"b","logicalAnd","bool");un(n.shape,s.shape);const o={a:n,b:s};return G.runKernel(c6,o)}const Vl=j({logicalAnd_:L7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U7(r){const n={x:D(r,"x","logicalNot","bool")};return G.runKernel(f6,n)}const G3=j({logicalNot_:U7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I7(r,t){const n=D(r,"a","logicalOr","bool"),s=D(t,"b","logicalOr","bool");un(n.shape,s.shape);const o={a:n,b:s};return G.runKernel(h6,o)}const q3=j({logicalOr_:I7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j7(r,t){const n=D(r,"a","logicalXor","bool"),s=D(t,"b","logicalXor","bool");return un(n.shape,s.shape),Vl(q3(r,t),G3(Vl(r,t)))}const F7=j({logicalXor_:j7});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tl=2147483648;function V7(r,t,n="left"){const s=D(r,"sortedSequence","searchSorted"),o=D(t,"values","searchSorted"),l=s.shape[s.shape.length-1],c=o.shape[o.shape.length-1],f=ct(s,[-1,l]),p=ct(o,[-1,c]);if(f.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(f.shape[0]!==p.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Qe(p.shape)>=Tl)throw new Error(`values tensor size must less than ${Tl}`);if(f.shape[1]>=Tl)throw new Error(`trailing dim_size must less than ${Tl} for int32 output type, was ${f.shape[1]}`);const d={sortedSequence:f,values:p},y={side:n};return G.runKernel(tb,d,y)}const l1=j({searchSorted_:V7});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H7(r,t){return l1(r,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G7(r,t,n,s,o){const l=D(r,"x","maxPool"),c=1;let f=l,p=!1;l.rank===3&&(p=!0,f=ct(l,[1,l.shape[0],l.shape[1],l.shape[2]])),L(f.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${f.rank}.`),L(Os(n,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${c}'`),Ir("maxPool",s,o);const d={x:f},y={filterSize:t,strides:n,pad:s,dimRoundingMode:o},v=G.runKernel(g6,d,y);return p?ct(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const K3=j({maxPool_:G7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q7(r,t=[1,1,1],n,s,o,l="NDHWC"){const c=D(r,"x","maxPool3d");let f=c,p=!1;c.rank===4&&(p=!0,f=ct(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),L(f.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${f.rank}.`),L(l==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${l}`),Ir("maxPool3d",s,o);const d={x:f},y={filterSize:t,strides:n,pad:s,dimRoundingMode:o,dataFormat:l},v=G.runKernel(y6,d,y);return p?ct(v,[v.shape[1],v.shape[2],v.shape[3],v.shape[4]]):v}const K7=j({maxPool3d_:q7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y7(r,t,n,s,o=!1){const c={x:D(r,"x","maxPoolWithArgmax")},f={filterSize:t,strides:n,pad:s,includeBatchInIndex:o},p=G.runKernel(b6,c,f);return{result:p[0],indexes:p[1]}}const X7=j({maxPoolWithArgmax_:Y7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P7(r,t){let n=D(r,"a","maximum"),s=D(t,"b","maximum");[n,s]=je(n,s),n.dtype==="bool"&&(n=De(n,"int32"),s=De(s,"int32")),un(n.shape,s.shape);const o={a:n,b:s};return G.runKernel(m6,o)}const Y3=j({maximum_:P7});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W7(r,t=null,n=!1){const o={x:D(r,"x","mean")},l={axis:t,keepDims:n};return G.runKernel(v6,o,l)}const Hl=j({mean_:W7});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uo(r,t="float32"){if(ar(r),t==="complex64"){const s=uo(r,"float32"),o=uo(r,"float32");return Ns(s,o)}const n=n1(Qe(r),t);return G.makeTensor(n,r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function li(r,t="float32"){if(ar(r),t==="complex64"){const s=li(r,"float32"),o=uo(r,"float32");return Ns(s,o)}const n=Pm(Qe(r),t);return G.makeTensor(n,r,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q7(r,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(r===void 0)return[];let s=D(r,"x","meshgrid",r instanceof Ie?r.dtype:"float32");if(t===void 0)return[s];let o=D(t,"y","meshgrid",t instanceof Ie?t.dtype:"float32");const l=Qe(s.shape),c=Qe(o.shape);return n==="xy"?(s=ct(s,[1,-1]),o=ct(o,[-1,1]),[Se(li([c,1],s.dtype),s),Se(o,li([1,l],o.dtype))]):(s=ct(s,[-1,1]),o=ct(o,[1,-1]),[Se(s,li([1,c],s.dtype)),Se(li([l,1],o.dtype),o)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z7(r,t){let n=D(r,"a","minimum"),s=D(t,"b","minimum");[n,s]=je(n,s),n.dtype==="bool"&&(n=De(n,"int32"),s=De(s,"int32")),un(n.shape,s.shape);const o={a:n,b:s};return G.runKernel(w6,o)}const Gl=j({minimum_:Z7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J7(r,t,n){L(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const s=D(r,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");L(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const o=n==="reflect"?1:0;for(let f=0;f<s.rank;f++)L(t[f].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),L(t[f][0]>=0&&t[f][0]<=s.shape[f]-o&&t[f][1]>=0&&t[f][1]<=s.shape[f]-o,()=>`Padding in dimension ${f} cannot be greater than or equal to ${s.shape[f]-o} or less than 0 for input of shape ${s.shape}`);const l={paddings:t,mode:n},c={x:s};return G.runKernel(T6,c,l)}const t9=j({mirrorPad_:J7});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e9(r,t){let n=D(r,"a","mod"),s=D(t,"b","mod");[n,s]=je(n,s);const o={a:n,b:s};return G.runKernel(N6,o)}const n9=j({mod_:e9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r9(r,t=null,n=!1){r=D(r,"x","moments");const s=Wl(t,r.shape),o=Hl(r,s,n);let l=o.shape;n||(l=tc(o.shape,s));const c=Br(Wt(De(r,"float32"),ct(o,l))),f=Hl(c,s,n);return{mean:o,variance:f}}const a9=j({moments_:r9});function s9(r,t,n,s){const o=D(t,"data","multiRNNCell"),l=Il(n,"c","multiRNNCell"),c=Il(s,"h","multiRNNCell");let f=o;const p=[];for(let v=0;v<r.length;v++){const N=r[v](f,l[v],c[v]);p.push(N[0]),p.push(N[1]),f=N[1]}const d=[],y=[];for(let v=0;v<p.length;v+=2)d.push(p[v]),y.push(p[v+1]);return[d,y]}const i9=j({multiRNNCell_:s9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o9(r,t,n,s=!1){const o=D(r,"logits","multinomial"),l=o.size,c=o.rank;if(l<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${l}.`);if(c>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${c}`);n=n||Math.random();const p={logits:c===1?ct(o,[1,-1]):o},d={numSamples:t,seed:n,normalized:s},y=G.runKernel(E6,p,d);return c===1?ct(y,[y.size]):y}const u9=j({multinomial_:o9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l9(r,t){let n=D(r,"a","notEqual","string_or_numeric"),s=D(t,"b","notEqual","string_or_numeric");[n,s]=je(n,s),un(n.shape,s.shape);const o={a:n,b:s};return G.runKernel(A6,o)}const X3=j({notEqual_:l9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c9(r,t,n=1,s=0,o="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const c={indices:D(r,"indices","oneHot","int32")},f={dtype:o,depth:t,onValue:n,offValue:s};return G.runKernel(R6,c,f)}const f9=j({oneHot_:c9});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h9(r){const n={x:D(r,"x","onesLike")};return G.runKernel($6,n)}const p9=j({onesLike_:h9});function d9(r,t){const n=D(r,"v1","outerProduct"),s=D(t,"v2","outerProduct");L(n.rank===1&&s.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${s.rank}.`);const o=ct(n,[-1,1]),l=ct(s,[1,-1]);return Se(o,l)}const m9=j({outerProduct_:d9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g9(r,t,n=0){const s=D(r,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:t,constantValue:n},l={x:s};return G.runKernel(z6,l,o)}const wu=j({pad_:g9});function y9(r,t,n=0){return L(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),wu(r,[t],n)}const b9=j({pad1d_:y9});function v9(r,t,n=0){return L(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),wu(r,t,n)}const S9=j({pad2d_:v9});function w9(r,t,n=0){return L(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),wu(r,t,n)}const T9=j({pad3d_:w9});function N9(r,t,n=0){return L(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),wu(r,t,n)}const E9=j({pad4d_:N9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _9(r,t,n){const s=D(r,"x","spaceToBatchND");L(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),L(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),L(s.shape.reduce((c,f,p)=>p>0&&p<=t.length?c&&(f+n[p-1][0]+n[p-1][1])%t[p-1]===0:c,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const o={x:s},l={blockShape:t,paddings:n};return G.runKernel(fb,o,l)}const P3=j({spaceToBatchND_:_9});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x9(r,t,n,s,o,l,c){o==null&&(o=[1,1]),l==null&&(l=1),s===0&&(s="valid");const f=D(r,"x","maxPool");let p=f,d=!1;f.rank===3&&(d=!0,p=ct(f,[1,f.shape[0],f.shape[1],f.shape[2]])),L(Os(l,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${l} and dilations '${o}'`);const y=y5(p.shape,t,l,o,s),v=[y.dilationHeight,y.dilationWidth];let N;s==="same"?N=O9([y.filterHeight,y.filterWidth],v):N=[[0,0],[0,0]];const A=v[0]===1&&v[1]===1,[$,B]=A9([y.inHeight,y.inWidth],v,N),C=A?s:"valid",V=A?p:P3(p,v,$),rt=(n==="avg"?()=>O3(V,t,l,C,c):()=>K3(V,t,l,C,c))(),Q=A?rt:k3(rt,v,B);return d?ct(Q,[Q.shape[1],Q.shape[2],Q.shape[3]]):Q}function A9(r,t,n){const s=n.map(y=>y[0]),o=n.map(y=>y[1]),l=r.concat(s,o),c=t.map((y,v)=>(y-l[v]%y)%y),f=o.map((y,v)=>y+c[v]),p=t.map((y,v)=>[s[v],f[v]]),d=t.map((y,v)=>[0,c[v]]);return[p,d]}function O9(r,t){const s=r.map((c,f)=>c+(c-1)*(t[f]-1)).map(c=>c-1),o=s.map(c=>Math.floor(c/2)),l=s.map((c,f)=>c-o[f]);return s.map((c,f)=>[o[f],l[f]])}const k9=j({pool_:x9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D9(r,t){const n=D(r,"x","prelu"),s=D(t,"alpha","prelu"),o={x:n,alpha:s};return G.runKernel(B6,o)}const W3=j({prelu_:D9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $9(r,t=null,n=!1){let s=D(r,"x","prod");s.dtype==="bool"&&(s=De(s,"int32"));const o={x:s},l={axis:t,keepDims:n};return G.runKernel(L6,o,l)}const R9=j({prod_:$9});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C9(r,t,n,s){const o=r.map((y,v)=>D(y,`tensors${v}`,"raggedGather","int32")),l=D(t,"paramsDenseValues","raggedGather"),c=D(n,"indices","raggedGather","int32"),f={paramsNestedSplits:o,paramsDenseValues:l,indices:c},p={outputRaggedRank:s},d=G.runKernel(U6,f,p);return{outputNestedSplits:d.slice(0,d.length-1),outputDenseValues:d[d.length-1]}}const z9=j({raggedGather_:C9});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function M9(r,t,n){const s=D(r,"starts","raggedRange"),o=D(t,"limits","raggedRange",s.dtype),l=D(n,"deltas","raggedRange",s.dtype),c={starts:s,limits:o,deltas:l},f=G.runKernel(I6,c);return{rtNestedSplits:f[0],rtDenseValues:f[1]}}const B9=j({raggedRange_:M9});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L9(r,t,n,s,o){const l=D(r,"shape","raggedTensorToTensor","int32"),c=D(t,"values","raggedTensorToTensor"),f=D(n,"defaultValue","raggedTensorToTensor",c.dtype),p=s.map((v,N)=>D(v,`tensors${N}`,"raggedTensorToTensor","int32")),d={shape:l,values:c,defaultValue:f,rowPartitionTensors:p},y={rowPartitionTypes:o};return G.runKernel(j6,d,y)}const U9=j({raggedTensorToTensor_:L9});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I9(r,t,n){ar(r);const s=Qe(r);let o=null;if(n==null||n==="float32")o=new Float32Array(s);else if(n==="int32")o=new Int32Array(s);else if(n==="bool")o=new Uint8Array(s);else throw new Error(`Unknown data type ${n}`);for(let l=0;l<s;l++)o[l]=t();return G.makeTensor(o,r,n)}const j9=j({rand_:I9});var kl={exports:{}},F9=kl.exports,mm;function V9(){return mm||(mm=1,function(r){(function(t,n,s){function o(p){var d=this,y=f();d.next=function(){var v=2091639*d.s0+d.c*23283064365386963e-26;return d.s0=d.s1,d.s1=d.s2,d.s2=v-(d.c=v|0)},d.c=1,d.s0=y(" "),d.s1=y(" "),d.s2=y(" "),d.s0-=y(p),d.s0<0&&(d.s0+=1),d.s1-=y(p),d.s1<0&&(d.s1+=1),d.s2-=y(p),d.s2<0&&(d.s2+=1),y=null}function l(p,d){return d.c=p.c,d.s0=p.s0,d.s1=p.s1,d.s2=p.s2,d}function c(p,d){var y=new o(p),v=d&&d.state,N=y.next;return N.int32=function(){return y.next()*4294967296|0},N.double=function(){return N()+(N()*2097152|0)*11102230246251565e-32},N.quick=N,v&&(typeof v=="object"&&l(v,y),N.state=function(){return l(y,{})}),N}function f(){var p=4022871197,d=function(y){y=String(y);for(var v=0;v<y.length;v++){p+=y.charCodeAt(v);var N=.02519603282416938*p;p=N>>>0,N-=p,N*=p,p=N>>>0,N-=p,p+=N*4294967296}return(p>>>0)*23283064365386963e-26};return d}n&&n.exports?n.exports=c:this.alea=c})(F9,r)}(kl)),kl.exports}var Dl={exports:{}},H9=Dl.exports,gm;function G9(){return gm||(gm=1,function(r){(function(t,n,s){function o(f){var p=this,d="";p.x=0,p.y=0,p.z=0,p.w=0,p.next=function(){var v=p.x^p.x<<11;return p.x=p.y,p.y=p.z,p.z=p.w,p.w^=p.w>>>19^v^v>>>8},f===(f|0)?p.x=f:d+=f;for(var y=0;y<d.length+64;y++)p.x^=d.charCodeAt(y)|0,p.next()}function l(f,p){return p.x=f.x,p.y=f.y,p.z=f.z,p.w=f.w,p}function c(f,p){var d=new o(f),y=p&&p.state,v=function(){return(d.next()>>>0)/4294967296};return v.double=function(){do var N=d.next()>>>11,A=(d.next()>>>0)/4294967296,$=(N+A)/(1<<21);while($===0);return $},v.int32=d.next,v.quick=v,y&&(typeof y=="object"&&l(y,d),v.state=function(){return l(d,{})}),v}n&&n.exports?n.exports=c:this.xor128=c})(H9,r)}(Dl)),Dl.exports}var $l={exports:{}},q9=$l.exports,ym;function K9(){return ym||(ym=1,function(r){(function(t,n,s){function o(f){var p=this,d="";p.next=function(){var v=p.x^p.x>>>2;return p.x=p.y,p.y=p.z,p.z=p.w,p.w=p.v,(p.d=p.d+362437|0)+(p.v=p.v^p.v<<4^(v^v<<1))|0},p.x=0,p.y=0,p.z=0,p.w=0,p.v=0,f===(f|0)?p.x=f:d+=f;for(var y=0;y<d.length+64;y++)p.x^=d.charCodeAt(y)|0,y==d.length&&(p.d=p.x<<10^p.x>>>4),p.next()}function l(f,p){return p.x=f.x,p.y=f.y,p.z=f.z,p.w=f.w,p.v=f.v,p.d=f.d,p}function c(f,p){var d=new o(f),y=p&&p.state,v=function(){return(d.next()>>>0)/4294967296};return v.double=function(){do var N=d.next()>>>11,A=(d.next()>>>0)/4294967296,$=(N+A)/(1<<21);while($===0);return $},v.int32=d.next,v.quick=v,y&&(typeof y=="object"&&l(y,d),v.state=function(){return l(d,{})}),v}n&&n.exports?n.exports=c:this.xorwow=c})(q9,r)}($l)),$l.exports}var Rl={exports:{}},Y9=Rl.exports,bm;function X9(){return bm||(bm=1,function(r){(function(t,n,s){function o(f){var p=this;p.next=function(){var y=p.x,v=p.i,N,A;return N=y[v],N^=N>>>7,A=N^N<<24,N=y[v+1&7],A^=N^N>>>10,N=y[v+3&7],A^=N^N>>>3,N=y[v+4&7],A^=N^N<<7,N=y[v+7&7],N=N^N<<13,A^=N^N<<9,y[v]=A,p.i=v+1&7,A};function d(y,v){var N,A=[];if(v===(v|0))A[0]=v;else for(v=""+v,N=0;N<v.length;++N)A[N&7]=A[N&7]<<15^v.charCodeAt(N)+A[N+1&7]<<13;for(;A.length<8;)A.push(0);for(N=0;N<8&&A[N]===0;++N);for(N==8?A[7]=-1:A[N],y.x=A,y.i=0,N=256;N>0;--N)y.next()}d(p,f)}function l(f,p){return p.x=f.x.slice(),p.i=f.i,p}function c(f,p){f==null&&(f=+new Date);var d=new o(f),y=p&&p.state,v=function(){return(d.next()>>>0)/4294967296};return v.double=function(){do var N=d.next()>>>11,A=(d.next()>>>0)/4294967296,$=(N+A)/(1<<21);while($===0);return $},v.int32=d.next,v.quick=v,y&&(y.x&&l(y,d),v.state=function(){return l(d,{})}),v}n&&n.exports?n.exports=c:this.xorshift7=c})(Y9,r)}(Rl)),Rl.exports}var Cl={exports:{}},P9=Cl.exports,vm;function W9(){return vm||(vm=1,function(r){(function(t,n,s){function o(f){var p=this;p.next=function(){var y=p.w,v=p.X,N=p.i,A,$;return p.w=y=y+1640531527|0,$=v[N+34&127],A=v[N=N+1&127],$^=$<<13,A^=A<<17,$^=$>>>15,A^=A>>>12,$=v[N]=$^A,p.i=N,$+(y^y>>>16)|0};function d(y,v){var N,A,$,B,C,V=[],lt=128;for(v===(v|0)?(A=v,v=null):(v=v+"\0",A=0,lt=Math.max(lt,v.length)),$=0,B=-32;B<lt;++B)v&&(A^=v.charCodeAt((B+32)%v.length)),B===0&&(C=A),A^=A<<10,A^=A>>>15,A^=A<<4,A^=A>>>13,B>=0&&(C=C+1640531527|0,N=V[B&127]^=A+C,$=N==0?$+1:0);for($>=128&&(V[(v&&v.length||0)&127]=-1),$=127,B=512;B>0;--B)A=V[$+34&127],N=V[$=$+1&127],A^=A<<13,N^=N<<17,A^=A>>>15,N^=N>>>12,V[$]=A^N;y.w=C,y.X=V,y.i=$}d(p,f)}function l(f,p){return p.i=f.i,p.w=f.w,p.X=f.X.slice(),p}function c(f,p){f==null&&(f=+new Date);var d=new o(f),y=p&&p.state,v=function(){return(d.next()>>>0)/4294967296};return v.double=function(){do var N=d.next()>>>11,A=(d.next()>>>0)/4294967296,$=(N+A)/(1<<21);while($===0);return $},v.int32=d.next,v.quick=v,y&&(y.X&&l(y,d),v.state=function(){return l(d,{})}),v}n&&n.exports?n.exports=c:this.xor4096=c})(P9,r)}(Cl)),Cl.exports}var zl={exports:{}},Q9=zl.exports,Sm;function Z9(){return Sm||(Sm=1,function(r){(function(t,n,s){function o(f){var p=this,d="";p.next=function(){var v=p.b,N=p.c,A=p.d,$=p.a;return v=v<<25^v>>>7^N,N=N-A|0,A=A<<24^A>>>8^$,$=$-v|0,p.b=v=v<<20^v>>>12^N,p.c=N=N-A|0,p.d=A<<16^N>>>16^$,p.a=$-v|0},p.a=0,p.b=0,p.c=-1640531527,p.d=1367130551,f===Math.floor(f)?(p.a=f/4294967296|0,p.b=f|0):d+=f;for(var y=0;y<d.length+20;y++)p.b^=d.charCodeAt(y)|0,p.next()}function l(f,p){return p.a=f.a,p.b=f.b,p.c=f.c,p.d=f.d,p}function c(f,p){var d=new o(f),y=p&&p.state,v=function(){return(d.next()>>>0)/4294967296};return v.double=function(){do var N=d.next()>>>11,A=(d.next()>>>0)/4294967296,$=(N+A)/(1<<21);while($===0);return $},v.int32=d.next,v.quick=v,y&&(typeof y=="object"&&l(y,d),v.state=function(){return l(d,{})}),v}n&&n.exports?n.exports=c:this.tychei=c})(Q9,r)}(zl)),zl.exports}var Ml={exports:{}};const J9={},tS=Object.freeze(Object.defineProperty({__proto__:null,default:J9},Symbol.toStringTag,{value:"Module"})),eS=yg(tS);var nS=Ml.exports,wm;function rS(){return wm||(wm=1,function(r){(function(t,n,s){var o=256,l=6,c=52,f="random",p=s.pow(o,l),d=s.pow(2,c),y=d*2,v=o-1,N;function A(Q,tt,it){var bt=[];tt=tt==!0?{entropy:!0}:tt||{};var Tt=V(C(tt.entropy?[Q,rt(n)]:Q??lt(),3),bt),mt=new $(bt),Et=function(){for(var Ct=mt.g(l),Vt=p,$t=0;Ct<d;)Ct=(Ct+$t)*o,Vt*=o,$t=mt.g(1);for(;Ct>=y;)Ct/=2,Vt/=2,$t>>>=1;return(Ct+$t)/Vt};return Et.int32=function(){return mt.g(4)|0},Et.quick=function(){return mt.g(4)/4294967296},Et.double=Et,V(rt(mt.S),n),(tt.pass||it||function(Ct,Vt,$t,ue){return ue&&(ue.S&&B(ue,mt),Ct.state=function(){return B(mt,{})}),$t?(s[f]=Ct,Vt):Ct})(Et,Tt,"global"in tt?tt.global:this==s,tt.state)}function $(Q){var tt,it=Q.length,bt=this,Tt=0,mt=bt.i=bt.j=0,Et=bt.S=[];for(it||(Q=[it++]);Tt<o;)Et[Tt]=Tt++;for(Tt=0;Tt<o;Tt++)Et[Tt]=Et[mt=v&mt+Q[Tt%it]+(tt=Et[Tt])],Et[mt]=tt;(bt.g=function(Ct){for(var Vt,$t=0,ue=bt.i,re=bt.j,nt=bt.S;Ct--;)Vt=nt[ue=v&ue+1],$t=$t*o+nt[v&(nt[ue]=nt[re=v&re+Vt])+(nt[re]=Vt)];return bt.i=ue,bt.j=re,$t})(o)}function B(Q,tt){return tt.i=Q.i,tt.j=Q.j,tt.S=Q.S.slice(),tt}function C(Q,tt){var it=[],bt=typeof Q,Tt;if(tt&&bt=="object")for(Tt in Q)try{it.push(C(Q[Tt],tt-1))}catch{}return it.length?it:bt=="string"?Q:Q+"\0"}function V(Q,tt){for(var it=Q+"",bt,Tt=0;Tt<it.length;)tt[v&Tt]=v&(bt^=tt[v&Tt]*19)+it.charCodeAt(Tt++);return rt(tt)}function lt(){try{var Q;return N&&(Q=N.randomBytes)?Q=Q(o):(Q=new Uint8Array(o),(t.crypto||t.msCrypto).getRandomValues(Q)),rt(Q)}catch{var tt=t.navigator,it=tt&&tt.plugins;return[+new Date,t,it,t.screen,rt(n)]}}function rt(Q){return String.fromCharCode.apply(0,Q)}if(V(s.random(),n),r.exports){r.exports=A;try{N=eS}catch{}}else s["seed"+f]=A})(typeof self<"u"?self:nS,[],Math)}(Ml)),Ml.exports}var ch,Tm;function aS(){if(Tm)return ch;Tm=1;var r=V9(),t=G9(),n=K9(),s=X9(),o=W9(),l=Z9(),c=rS();return c.alea=r,c.xor128=t,c.xorwow=n,c.xorshift7=s,c.xor4096=o,c.tychei=l,ch=c,ch}var c1=aS();/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class f1{constructor(t,n,s,o,l){this.mean=t,this.stdDev=n,this.dtype=s,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const c=l||Math.random();this.random=c1.alea(c.toString())}nextValue(){if(!isNaN(this.nextVal)){const o=this.nextVal;return this.nextVal=NaN,o}let t,n,s=!1;for(;!s;){let o,l,c;do o=2*this.random()-1,l=2*this.random()-1,c=o*o+l*l;while(c>=1||c===0);const f=Math.sqrt(-2*Math.log(c)/c);t=this.mean+this.stdDev*o*f,n=this.mean+this.stdDev*l*f,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class sS{constructor(t,n,s,o){this.alpha=t,this.beta=1/n,this.dtype=s;const l=o||Math.random();this.randu=c1.alea(l.toString()),this.randn=new f1(0,1,s,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,s,o,l,c;for(;;){do o=this.randn.nextValue(),c=1+this.c*o;while(c<=0);if(c*=c*c,t=o*o,n=1-.331*t*t,s=.5*t+this.d*(1-c+Math.log(c)),l=this.randu(),l<n||Math.log(l)<s)break}return c=1/this.beta*this.d*c,this.alpha<1&&(c*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(c)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class iS{constructor(t=0,n=1,s,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=s,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=c1.alea(o)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oS(r,t,n=1,s="float32",o){if(ar(r),n==null&&(n=1),s==null&&(s="float32"),s!=="float32"&&s!=="int32")throw new Error(`Unsupported data type ${s}`);const l=new sS(t,n,s,o),c=Ra(r,s);for(let f=0;f<c.values.length;f++)c.values[f]=l.nextValue();return c.toTensor()}const uS=j({randomGamma_:oS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lS(r,t=0,n=1,s,o){if(ar(r),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const l=new f1(t,n,s,!1,o),c=Ra(r,s);for(let f=0;f<c.values.length;f++)c.values[f]=l.nextValue();return c.toTensor()}const Q3=j({randomNormal_:lS});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cS(r,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return Q3(r,0,1,t,n)}const fS=j({randomStandardNormal_:cS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hS(r,t=0,n=1,s="float32",o){ar(r);const l=Ra(r,s),c=new iS(t,n,null,o);for(let f=0;f<l.values.length;f++)l.values[f]=c.nextValue();return l.toTensor()}const h1=j({randomUniform_:hS});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pS(r,t,n,s){return h1(r,t,n,"int32",s)}const dS=j({randomUniformInt_:pS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gu(r,t,n=1,s="float32"){if(n===0)throw new Error("Cannot have a step of zero");const o={start:r,stop:t,step:n,dtype:s};return G.runKernel(F6,{},o)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mS(r){const n={input:D(r,"input","real")};return G.runKernel(V6,n)}const yu=j({real_:mS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gS(r){const n={x:D(r,"x","reciprocal")};return G.runKernel(H6,n)}const yS=j({reciprocal_:gS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bS(r){const n={x:D(r,"x","relu")};return G.runKernel(G6,n)}const ac=j({relu_:bS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vS(r){const n={x:D(r,"x","relu6")};return G.runKernel(X6,n)}const Z3=j({relu6_:vS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function SS(r,t){const s={x:D(r,"x","reverse")},o={dims:t};return G.runKernel(P6,s,o)}const mi=j({reverse_:SS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wS(r){const t=D(r,"x","reverse");return L(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),mi(t,0)}const TS=j({reverse1d_:wS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function NS(r,t){const n=D(r,"x","reverse");return L(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),mi(n,t)}const ES=j({reverse2d_:NS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _S(r,t){const n=D(r,"x","reverse");return L(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),mi(n,t)}const xS=j({reverse3d_:_S});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AS(r,t){const n=D(r,"x","reverse");return L(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),mi(n,t)}const OS=j({reverse4d_:AS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kS(r){const n={x:D(r,"x","round")};return G.runKernel(W6,n)}const J3=j({round_:kS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DS(r){const n={x:D(r,"x","rsqrt","float32")};return G.runKernel(Q6,n)}const $S=j({rsqrt_:DS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function RS(r){const n={x:D(r,"x","selu")};return G.runKernel(nb,n)}const CS=j({selu_:RS});function zS(r,t,n,s,o,l=[1,1],c="NHWC"){const f=D(r,"x","separableConv2d"),p=D(t,"depthwiseFilter","separableConv2d"),d=D(n,"pointwiseFilter","separableConv2d");let y=f,v=!1;if(f.rank===3&&(v=!0,y=ct(f,[1,f.shape[0],f.shape[1],f.shape[2]])),c==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");L(y.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${y.rank}.`),L(p.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${p.rank}.`),L(d.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${p.rank}.`),L(d.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${d.shape[0]}.`),L(d.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${d.shape[1]}.`);const N=p.shape[2],A=p.shape[3];L(d.shape[2]===N*A,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${N*A}, but got ${d.shape[2]}.`);const $=o1(y,p,s,o,c,l),C=Jl($,d,1,"valid",c);return v?ct(C,[C.shape[1],C.shape[2],C.shape[3]]):C}const MS=j({separableConv2d_:zS});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function BS(r,t){const n=D(r,"x","setdiff1d"),s=D(t,"y","setdiff1d");L(n.dtype===s.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${s.dtype}).`),L(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),L(s.rank===1,()=>`y should be 1D tensor, but got y (${s.shape}).`);const o=await n.data(),l=await s.data(),c=new Set(l);let f=0;for(let y=0;y<o.length;y++)c.has(o[y])||f++;const p=new xh([f],n.dtype),d=new xh([f],"int32");for(let y=0,v=0;y<o.length;y++)c.has(o[y])||(p.values[v]=o[y],d.values[v]=y,v++);return[p.toTensor(),d.toTensor()]}const LS=BS;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function US(r){const n={x:D(r,"x","sign")};return G.runKernel(ib,n)}const IS=j({sign_:US});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jS(r){const n={x:D(r,"x","sin","float32")};return G.runKernel(ab,n)}const FS=j({sin_:jS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function VS(r){const n={x:D(r,"x","sinh")};return G.runKernel(sb,n)}const HS=j({sinh_:VS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function GS(r,t,n){const s=D(r,"x","slice1d");return L(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),Pt(s,[t],[n])}const qS=j({slice1d_:GS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KS(r,t,n){const s=D(r,"x","slice2d");return L(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),Pt(s,t,n)}const YS=j({slice2d_:KS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XS(r,t,n){const s=D(r,"x","slice3d");return L(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),Pt(s,t,n)}const PS=j({slice3d_:XS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function WS(r,t,n){const s=D(r,"x","slice4d");return L(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),Pt(s,t,n)}const QS=j({slice4d_:WS});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZS(r,t=-1){const n=D(r,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const s={logits:n},o={dim:t};return G.runKernel(pb,s,o)}const JS=j({softmax_:ZS});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tw(r){L(r.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${r.dtype}.`);const t={input:r};return G.runKernel(Hy,t)}const p1=j({fft_:tw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ew(r){L(r.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${r.dtype}.`);const t={input:r};return G.runKernel(Jy,t)}const ql=j({ifft_:ew});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nw(r){const t=r.shape[r.shape.length-1],n=r.size/t;let s;if(t<=2){const o=ct(r,[n,t]);s=ql(o)}else{const o=[n,2*(t-1)],l=ct(yu(r),[n,t]),c=ct(rc(r),[n,t]),f=mi(Pt(l,[0,1],[n,t-2]),1),p=wt(mi(Pt(c,[0,1],[n,t-2]),1),oe(-1)),d=mn([l,f],1),y=mn([c,p],1),v=ct(Ns(d,y),[o[0],o[1]]);s=ql(v)}if(s=yu(s),r.rank===3&&r.shape[0]!==0){const o=s,l=r.shape[0];s=ct(s,[l,s.shape[0]/l,s.shape[1]]),o.dispose()}return s}const t0=j({irfft_:nw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rw(r,t,n=0){const o={x:D(r,"x","split")},l={numOrSizeSplits:t,axis:n};return G.runKernel(hb,o,l)}const bu=j({split_:rw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aw(r,t){L(r.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${r.dtype}`);let n=r.shape[r.shape.length-1];const s=r.size/n;let o;if(t!=null&&t<n){const $=r.shape.map(C=>0),B=r.shape.map(C=>C);B[r.shape.length-1]=t,o=Pt(r,$,B),n=t}else if(t!=null&&t>n){const $=r.shape.map(B=>B);$[r.shape.length-1]=t-n,o=mn([r,uo($)],r.shape.length-1),n=t}else o=r;const l=rr(o),c=ct(Ns(o,l),[s,n]),f=p1(c),p=Math.floor(n/2)+1,d=yu(f),y=rc(f),v=bu(d,[p,n-p],d.shape.length-1),N=bu(y,[p,n-p],y.shape.length-1),A=o.shape.slice();return A[o.shape.length-1]=p,ct(Ns(v[0],N[0]),A)}const d1=j({rfft_:aw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(r,t){let n=D(r,"a","squaredDifference"),s=D(t,"b","squaredDifference");[n,s]=je(n,s),un(n.shape,s.shape);const o={a:n,b:s},l={};return G.runKernel(vb,o,l)}const e0=j({squaredDifference_:sw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iw(r,t){const n=D(r,"x","squeeze","string_or_numeric");return ct(n,zg(n.shape,t).newShape)}const on=j({squeeze_:iw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ow(r,t=0){const n=Il(r,"tensors","stack","string_or_numeric");L(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&L(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const s=n,o={axis:t};return G.runKernel(C6,s,o)}const Ba=j({stack_:ow});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uw(r,t=0){const s={x:D(r,"x","step")},o={alpha:t};return G.runKernel(zb,s,o)}const n0=j({step_:uw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lw(r,t,n,s,o=0,l=0,c=0,f=0,p=0){const y={x:D(r,"x","stridedSlice","string_or_numeric")},v={begin:t,end:n,strides:s,beginMask:o,endMask:l,ellipsisMask:c,newAxisMask:f,shrinkAxisMask:p};return G.runKernel(wb,y,v)}const cw=j({stridedSlice_:lw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fw(r){const n={x:D(r,"x","tan","float32")};return G.runKernel(xb,n)}const hw=j({tan_:fw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nn(r,t){lo(r);const n=xs(r,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return As(r,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ts(r,t,n){if(lo(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=xs(r,n);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return As(r,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r0(r,t,n){if(lo(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const s=xs(r,n);if(s.length!==3&&s.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return As(r,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pw(r,t,n){if(lo(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const s=xs(r,n);if(s.length!==4&&s.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return As(r,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dw(r,t,n){if(lo(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const s=xs(r,n);if(s.length!==5&&s.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return As(r,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mw(r,t,n){if(lo(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const s=xs(r,n);if(s.length!==6&&s.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||s,As(r,t,s,n)}function gw(r,t,n){const s=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,l=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${r}, sliceDim: ${s}, and batchDim: ${o}.`;if(n.rank<o)throw new Error(l+` update.rank < ${o}. `);if(r.length<s+(n.rank-o))throw new Error(l+` Output shape length < ${s+(n.rank-o)}`);if(n.rank!==o+r.length-s)throw new Error(l+` update.rank != ${o+r.length-s}`);for(let c=0;c<o;++c)if(n.shape[c]!==t.shape[c])throw new Error(l+` updates.shape[${c}] (${n.shape[c]}) != indices.shape[${c}] (${t.shape[c]}).`);for(let c=0;c<n.rank-o;++c)if(n.shape[c+o]!==r[c+s])throw new Error(l+` updates.shape[${c+o}] (${n.shape[c+o]}) != shape[${c+o}] (${r[c+o]})`)}function a0(r,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(r.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${r.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(r.size===0)throw new Error(`Updates specified for empty output. updates shape: ${r.shape}`)}gw(n,t,r)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yw(r,t,n){const s=D(r,"tensor","tensorScatterupdate"),o=D(t,"indices","tensorScatterupdate","int32"),l=D(n,"updates","tensorScatterupdate");if(a0(l,o,s.shape),s.dtype!==l.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${s.dtype} and ${l.dtype}.`);const c={tensor:s,indices:o,updates:l},f={};return G.runKernel(J6,c,f)}const bw=j({tensorScatterUpdate_:yw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vw(r,t=1,n=!0){const s=D(r,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const o=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${t}`);const l={x:s},c={k:t,sorted:n},[f,p]=G.runKernel(Ob,l,c);return{values:f,indices:p}}const Sw=j({topk_:vw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ww(r,t=0,n=1,s,o){if(ar(r),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const l=new f1(t,n,s,!0,o),c=Ra(r,s);for(let f=0;f<c.values.length;f++)c.values[f]=l.nextValue();return c.toTensor()}const Tw=j({truncatedNormal_:ww});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nw(r,t=0){const n=D(r,"x","unique","string_or_numeric");L(n.rank>0,()=>"The input tensor must be at least 1D");const s={x:n},o={axis:t},[l,c]=G.runKernel(Db,s,o);return{values:l,indices:c}}const Ew=j({unique_:Nw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _w(r,t,n){const s=D(r,"x","unsortedSegmentSum"),o=D(t,"segmentIds","unsortedSegmentSum","int32");L(fu(n),()=>"numSegments must be of dtype int");const l={x:s,segmentIds:o},c={numSegments:n};return G.runKernel(Rb,l,c)}const xw=j({unsortedSegmentSum_:_w});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Aw(r,t=0){const n=D(r,"x","unstack","string_or_numeric");L(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const s={value:n},o={axis:t};return G.runKernel($b,s,o)}const bi=j({unstack_:Aw});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ow(r,t){return l1(r,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kw(r,t=!0,n,s){return G.makeVariable(r,t,n,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dw(r,t){const n=[];for(let l=0;l<t.length;l++)t[l]&&n.push(l);const s=Ra(r,"int32"),o=Ra([n.length,r.length],"int32");for(let l=0;l<n.length;l++){const c=s.indexToLoc(n[l]),f=l*r.length;o.values.set(c,f)}return o.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function $w(r){const t=D(r,"condition","whereAsync","bool"),n=await t.data(),s=Dw(t.shape,n);return r!==t&&t.dispose(),s}const s0=$w;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Rw(r,t,n){const s=D(r,"tensor","boolMask"),o=D(t,"mask","boolMask","bool"),l=n??0,c=o.rank,f=s.shape;L(c>0,()=>"mask cannot be scalar"),Er(f.slice(l,l+c),o.shape,"mask's shape must match the first K dimensions of tensor's shape,");let p=1;for(let B=l;B<l+c;B++)p*=f[B];const d=f.slice(0,l).concat([p],f.slice(l+c)),y=ct(s,d),v=ct(o,[-1]),N=await s0(v),A=on(N,[1]),$=U3(y,A,l);return r!==s&&s.dispose(),t!==o&&o.dispose(),A.dispose(),y.dispose(),v.dispose(),N.dispose(),$}const Cw=Rw;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zw(r,t,n){const s=D(r,"x","transpose");if(t==null&&(t=s.shape.map((c,f)=>f).reverse()),L(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(c=>{L(c>=0&&c<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const o={x:s},l={perm:t};return s.dtype==="complex64"?Zt(()=>{let c=yu(s),f=rc(s);return c=G.runKernel(ih,{x:c},l),f=G.runKernel(ih,{x:f},l),n&&(f=ra(f)),Ns(c,f)}):G.runKernel(ih,o,l)}const Ih=j({transpose_:zw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mw(r,t,n,s,o=!0){const l=D(r,"v","movingAverage"),c=D(t,"x","movingAverage"),f=D(n,"decay","movingAverage");Qb(l,c),L($a(l.shape,c.shape),()=>"Shape mismatch in v and x");const p=oe(1),d=Wt(p,f);let y=wt(Wt(c,l),d);if(o){L(s!=null,()=>"When using zeroDebias: true, step is required.");const v=D(s,"step","movingAverage");y=ee(y,Wt(p,du(f,v)))}return Mt(l,y)}const Bw=j({movingAverage_:Mw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lw(r,t,n){ar(n);const s=D(r,"indices","scatterND","int32"),o=D(t,"updates","scatterND");a0(o,s,n);const l={indices:s,updates:o},c={shape:n};return G.runKernel(Z6,l,c)}const Uw=j({scatterND_:Lw});function Iw(r,t,n,s){if(r.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${r.dtype}.`);if(r.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${r.shape}.`);const o=r.rank>0?r.shape[0]:1,l=r.rank>1?r.shape[1]:1;if(n.length!==l)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${l}.`);const c=t.size;if(!(t.rank===0||t.rank===1&&c===o))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${o}]`);if(t.dtype!==s.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jw(r,t,n,s=0){ar(n);const o=D(r,"sparseIndices","sparseToDense","int32"),l=D(t,"sparseValues","sparseToDense","string_or_numeric"),c=D(s,"defaultValue","sparseToDense",l.dtype);Iw(o,l,n,c);const f={sparseIndices:o,sparseValues:l,defaultValue:c},p={outputShape:n};return G.runKernel(bb,f,p)}const Fw=j({sparseToDense_:jw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vw(r,t){const n=D(t,"indices","gatherND","int32"),o={params:D(r,"x","gatherND","string_or_numeric"),indices:n};return G.runKernel(Wy,o)}const Hw=j({gatherND_:Vw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gw(r,t){if(t==null)return r.shape.slice();if($a(r.shape,t))return t;if(r.shape.length===t.length){const n=[];for(let s=0;s<r.shape.length;s++)t[s]==null&&r.shape[s]!=null?n.push(r.shape[s]):n.push(t[s]);return n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qw(r,t,n,s){const o=D(r,"x","dropout");if(L(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),L(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return r instanceof Ie?o.clone():o;const l=Gw(o,n),c=1-t,f=ee(L3(Mt(h1(l,0,1,"float32",s),c)),c);return wt(o,f)}const Kw=j({dropout_:qw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i0(r){return Math.floor(Math.pow(2,Math.ceil(Math.log(r)/Math.log(2))))}function m1(r,t,n){const s=1-r%2,o=new Float32Array(r);for(let l=0;l<r;++l){const c=2*Math.PI*l/(r+s-1);o[l]=t-n*Math.cos(c)}return Nn(o,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Yw(r,t,n=1){const s=D(r,"predictions","inTopK"),o=D(t,"targets","inTopK");L(s.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${s.rank}`),L(s.rank-1===o.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${s.rank} and targets rank ${o.rank}`),Er(s.shape.slice(0,s.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const l=s.shape[s.shape.length-1];L(n>0&&n<=l,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${l}), but got ${n}`);const c=await s.data(),f=await o.data(),[p,d]=[c.length/l,l],y=Mg("bool",p);for(let v=0;v<p;v++){const N=v*d,A=c.subarray(N,N+d),$=[];for(let B=0;B<A.length;B++)$.push({value:A[B],index:B});$.sort((B,C)=>C.value-B.value),y[v]=0;for(let B=0;B<n;B++)if($[B].index===f[v]){y[v]=1;break}}return r!==s&&s.dispose(),t!==o&&o.dispose(),na(y,o.shape,"bool")}const Xw=Yw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pw(r,t,n,s,o,l="NHWC",c){let f=r;r.rank===3&&(f=ct(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let p=t;p.rank===3&&(p=ct(t,[1,t.shape[0],t.shape[1],t.shape[2]])),L(f.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${f.shape}.`),L(p.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${p.shape}.`),L(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const d=l==="NHWC"?f.shape[3]:f.shape[1],y=l==="NHWC"?p.shape[3]:p.shape[1];L(d===n[2],()=>`Error in conv2dDerFilter: depth of input ${d}) must match input depth in filter (${n[2]}.`),L(y===n[3],()=>`Error in conv2dDerFilter: depth of dy (${y}) must match output depth for filter (${n[3]}).`),Ir("conv2dDerFilter",o,c);const v={x:f,dy:p},N={strides:s,pad:o,dataFormat:l,dimRoundingMode:c,filterShape:n};return G.runKernel(vy,v,N)}const Ww=j({conv2DBackpropFilter_:Pw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g1(r,t,n){if(n==null||n==="linear")return r;if(n==="relu")return wt(r,n0(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function y1(r,t){let n=t;const s=C8(r.shape,t.shape);return s.length>0&&(n=ke(n,s)),ct(n,r.shape)}function b1(r,t,n,s){if(t==="linear")return r;if(t==="relu")return ac(r);if(t==="elu")return z3(r);if(t==="relu6")return Z3(r);if(t==="prelu")return W3(r,n);if(t==="leakyrelu")return j3(r,s);if(t==="sigmoid")return ci(r);throw new Error(`Unknown fused activation ${t}.`)}const v1=(r,t)=>!(r>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qw({x:r,filter:t,strides:n,pad:s,dataFormat:o="NHWC",dilations:l=[1,1],dimRoundingMode:c,bias:f,activation:p="linear",preluActivationWeights:d,leakyreluAlpha:y}){if(p=p||"linear",v1(G.state.gradientDepth,p)===!1){L(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let it=Jl(r,t,n,s,o,l,c);return f!=null&&(it=Mt(it,f)),b1(it,p,d,y)}const v=D(r,"x","conv2d","float32"),N=D(t,"filter","conv2d","float32");let A=v,$=!1;v.rank===3&&($=!0,A=ct(v,[1,v.shape[0],v.shape[1],v.shape[2]])),L(A.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${A.rank}.`),L(N.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${N.rank}.`),Ir("fused conv2d",s,c);const B=o==="NHWC"?A.shape[3]:A.shape[1];L(N.shape[2]===B,()=>`Error in conv2d: depth of input (${B}) must match input depth for filter ${N.shape[2]}.`),L(Os(n,l),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`);const C=i1(A.shape,N.shape,n,l,s,c);let V;f!=null&&(V=D(f,"bias","fused conv2d"),[V]=je(V,v),o==="NHWC"?un(C.outShape,V.shape):(L(V.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${V.shape.length}.`),L(V.shape.length===0||V.shape[0]===C.outChannels||V.shape[0]===1,()=>`Error in fused conv2d: bias shape (${V.shape}) is not compatible with the number of output channels (${C.outChannels})`)));let lt;if(d!=null){const it=d.shape;if(L(it.length<=1||it.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${it.length}.`),it.length===1)L(it[0]===1||it[0]===C.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${it}) is not compatible with the number of output channels (${C.outChannels}).`);else if(it.length===3)try{un(it,C.outShape)}catch{const Tt=`Error in fused conv2d: PReLU activation weights (${it}) is not compatible with the output shape of the conv2d (${C.outShape}).`;throw Error(Tt)}lt=D(d,"prelu weights","fused conv2d")}const rt=(it,bt)=>{L(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);const[Tt,mt,Et,Ct]=bt,Vt=g1(it,Et,p);L(Fl(l),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${l}'`);const $t=R3(mt.shape,Vt,Tt,n,s),ue=Ww(mt,Vt,Tt.shape,n,s),re=[$t,ue];if(Ct!=null){const nt=y1(Ct,Vt);re.push(nt)}return re},Q={x:A,filter:N,bias:V,preluActivationWeights:lt},tt={strides:n,pad:s,dataFormat:o,dilations:l,dimRoundingMode:c,activation:p,leakyreluAlpha:y};return f==null?Ma((bt,Tt,mt)=>{let Et=G.runKernel(rm,Q,tt);return mt([Tt,bt,Et]),$&&(Et=ct(Et,[Et.shape[1],Et.shape[2],Et.shape[3]])),{value:Et,gradFunc:rt}})(A,N):Ma((bt,Tt,mt,Et)=>{let Ct=G.runKernel(rm,Q,tt);return Et([Tt,bt,Ct,mt]),$&&(Ct=ct(Ct,[Ct.shape[1],Ct.shape[2],Ct.shape[3]])),{value:Ct,gradFunc:rt}})(A,N,V)}const Zw=j({fusedConv2d_:Qw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jw(r,t,n,s,o,l=[1,1],c){let f=r;r.rank===3&&(f=ct(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let p=t;p.rank===3&&(p=ct(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const d={x:f,dy:p},y={strides:s,pad:o,dimRoundingMode:c,dilations:l,filterShape:n};return G.runKernel($y,d,y)}const tT=j({depthwiseConv2dNativeBackpropFilter_:Jw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eT(r,t,n,s,o,l=[1,1],c){let f=t,p=!1;t.rank===3&&(p=!0,f=ct(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const d={dy:f,filter:n},y={strides:s,pad:o,dimRoundingMode:c,dilations:l,inputShape:r},v=G.runKernel(Ry,d,y);return p?ct(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const nT=j({depthwiseConv2dNativeBackpropInput_:eT});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rT({x:r,filter:t,strides:n,pad:s,dataFormat:o="NHWC",dilations:l=[1,1],dimRoundingMode:c,bias:f,activation:p="linear",preluActivationWeights:d,leakyreluAlpha:y}){if(v1(G.state.gradientDepth,p)===!1){let tt=o1(r,t,n,s,o,l,c);return f!=null&&(tt=Mt(tt,f)),b1(tt,p,d,y)}const v=D(r,"x","depthwiseConv2d","float32"),N=D(t,"filter","depthwiseConv2d","float32");let A=v,$=!1;v.rank===3&&($=!0,A=ct(v,[1,v.shape[0],v.shape[1],v.shape[2]])),L(A.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${A.rank}.`),L(N.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${N.rank}.`),L(A.shape[3]===N.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${A.shape[3]}) must match the inChannels dimension in filter ${N.shape[2]}.`),l==null&&(l=[1,1]),L(Os(n,l),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`),Ir("fused depthwiseConv2d",s,c);const B=i1(A.shape,N.shape,n,l,s,c,!0);let C;f!=null&&(C=D(f,"bias","fused conv2d"),[C]=je(C,v),un(B.outShape,C.shape));let V;d!=null&&(V=D(d,"prelu weights","fused depthwiseConv2d"));const lt=(tt,it)=>{L(Fl(l),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${l}'`);const[bt,Tt,mt,Et]=it,Ct=g1(tt,mt,p),Vt=nT(Tt.shape,Ct,bt,n,s,l,c),$t=tT(Tt,Ct,bt.shape,n,s,l,c);if(Et!=null){const ue=y1(C,Ct);return[Vt,$t,ue]}return[Vt,$t]},rt={x:A,filter:N,bias:C,preluActivationWeights:V},Q={strides:n,pad:s,dataFormat:o,dilations:l,dimRoundingMode:c,activation:p,leakyreluAlpha:y};return f==null?Ma((it,bt,Tt)=>{let mt=G.runKernel(am,rt,Q);return Tt([bt,it,mt]),$&&(mt=ct(mt,[mt.shape[1],mt.shape[2],mt.shape[3]])),{value:mt,gradFunc:lt}})(A,N):Ma((it,bt,Tt,mt)=>{let Et=G.runKernel(am,rt,Q);return mt([bt,it,Et,Tt]),$&&(Et=ct(Et,[Et.shape[1],Et.shape[2],Et.shape[3]])),{value:Et,gradFunc:lt}})(A,N,C)}const aT=j({fusedDepthwiseConv2d_:rT});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sT({a:r,b:t,transposeA:n=!1,transposeB:s=!1,bias:o,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:f=.2}){if(v1(G.state.gradientDepth,l)===!1){let Ct=Se(r,t,n,s);return o!=null&&(Ct=Mt(Ct,o)),b1(Ct,l,c,f)}let p=D(r,"a","fused matMul"),d=D(t,"b","fused matMul");[p,d]=je(p,d);const y=n?p.shape[p.rank-2]:p.shape[p.rank-1],v=s?d.shape[d.rank-1]:d.shape[d.rank-2],N=n?p.shape[p.rank-1]:p.shape[p.rank-2],A=s?d.shape[d.rank-2]:d.shape[d.rank-1],$=p.shape.slice(0,-2),B=d.shape.slice(0,-2),C=Qe($),V=Qe(B);L(y===v,()=>`Error in fused matMul: inner shapes (${y}) and (${v}) of Tensors with shapes ${p.shape} and ${d.shape} and transposeA=${n} and transposeB=${s} must match.`);const rt=un(p.shape.slice(0,-2),d.shape.slice(0,-2)).concat([N,A]),Q=n?ct(p,[C,y,N]):ct(p,[C,N,y]),tt=s?ct(d,[V,A,v]):ct(d,[V,v,A]);let it;o!=null&&(it=D(o,"bias","fused matMul"),[it]=je(it,p),un(rt,it.shape));let bt;c!=null&&(bt=D(c,"prelu weights","fused matMul"));const Tt=(Ct,Vt)=>{const[$t,ue,re,nt]=Vt,vt=g1(ct(Ct,re.shape),re,l);let Dt,Qt;if(!n&&!s?(Dt=Se(vt,ue,!1,!0),Qt=Se($t,vt,!0,!1)):!n&&s?(Dt=Se(vt,ue,!1,!1),Qt=Se(vt,$t,!0,!1)):n&&!s?(Dt=Se(ue,vt,!1,!0),Qt=Se($t,vt,!1,!1)):(Dt=Se(ue,vt,!0,!0),Qt=Se(vt,$t,!0,!0)),o!=null){const H=y1(nt,vt);return[Dt,Qt,H]}else return[Dt,Qt]},mt={a:Q,b:tt,bias:it,preluActivationWeights:bt},Et={transposeA:n,transposeB:s,activation:l,leakyreluAlpha:f};return o==null?Ma((Vt,$t,ue)=>{const re=G.runKernel(nm,mt,Et);return ue([Vt,$t,re]),{value:ct(re,rt),gradFunc:Tt}})(Q,tt):Ma((Vt,$t,ue,re)=>{const nt=G.runKernel(nm,mt,Et);return re([Vt,$t,nt,ue]),{value:ct(nt,rt),gradFunc:Tt}})(Q,tt,it)}const iT=j({fusedMatMul_:sT});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oT=Object.freeze(Object.defineProperty({__proto__:null,conv2d:Zw,depthwiseConv2d:aT,matMul:iT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uT(r){return m1(r,.54,.46)}const lT=j({hammingWindow_:uT});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cT(r){return m1(r,.5,.5)}const o0=j({hannWindow_:cT});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fT(r,t,n,s=!1,o=0){let l=0;const c=[];for(;l+t<=r.size;)c.push(Pt(r,l,t)),l+=n;if(s)for(;l<r.size;){const f=l+t-r.size,p=mn([Pt(r,l,t-f),Su([f],o)]);c.push(p),l+=n}return c.length===0?Ts([],[0,t]):ct(mn(c),[c.length,t])}const u0=j({frame_:fT});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hT(r,t,n,s,o=o0){s==null&&(s=i0(t));const l=u0(r,t,n),c=wt(l,o(t));return d1(c,s)}const pT=j({stft_:hT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dT(r,t,n,s,o="bilinear",l=0){const c=D(r,"image","cropAndResize"),f=D(t,"boxes","cropAndResize","float32"),p=D(n,"boxInd","cropAndResize","int32"),d=f.shape[0];L(c.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${c.rank}.`),L(f.rank===2&&f.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${d},4] but had shape ${f.shape}.`),L(p.rank===1&&p.shape[0]===d,()=>`Error in cropAndResize: boxInd must be have size [${d}] but had shape ${f.shape}.`),L(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),L(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),L(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);const y={image:c,boxes:f,boxInd:p},v={method:o,extrapolationValue:l,cropSize:s};return G.runKernel(Ay,y,v)}const mT=j({cropAndResize_:dT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gT(r){const t=D(r,"image","flipLeftRight","float32");L(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return G.runKernel(qy,n,{})}const yT=j({flipLeftRight_:gT});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bT(r){const t=D(r,"image","grayscaleToRGB"),n=t.rank-1,s=t.shape[n];L(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),L(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const o=new Array(t.rank);return o.fill(1,0,n),o[n]=3,cu(t,o)}const vT=j({grayscaleToRGB_:bT});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ST(r){const t=D(r,"image","RGBToGrayscale"),n=t.rank-1,s=t.shape[n];L(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),L(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const o=t.dtype,l=De(t,"float32"),c=Nn([.2989,.587,.114]);let f;switch(t.rank){case 2:f=ro("ij,j->i",l,c);break;case 3:f=ro("ijk,k->ij",l,c);break;case 4:f=ro("ijkl,l->ijk",l,c);break;case 5:f=ro("ijklm,m->ijkl",l,c);break;case 6:f=ro("ijklmn,n->ijklm",l,c);break;default:throw new Error("Not a valid tensor rank.")}return f=Tr(f,-1),De(f,o)}const wT=j({rgbToGrayscale_:ST});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TT(r,t,n=0,s=.5){const o=D(r,"image","rotateWithOffset","float32");L(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);const l={image:o},c={radians:t,fillValue:n,center:s};return G.runKernel(Mb,l,c)}const NT=j({rotateWithOffset_:TT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function co(r,t,n,s,o,l){s==null&&(s=.5),o==null&&(o=Number.NEGATIVE_INFINITY),l==null&&(l=0);const c=r.shape[0];return n=Math.min(n,c),L(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),L(r.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${r.rank}'`),L(r.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${r.shape[1]}`),L(t.rank===1,()=>"scores must be a 1D tensor"),L(t.shape[0]===c,()=>`scores has incompatible shape with boxes. Expected ${c}, but was ${t.shape[0]}`),L(0<=l&&l<=1,()=>`softNmsSigma must be in [0, 1], but was '${l}'`),{maxOutputSize:n,iouThreshold:s,scoreThreshold:o,softNmsSigma:l}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ET(r,t,n,s=.5,o=Number.NEGATIVE_INFINITY){const l=D(r,"boxes","nonMaxSuppression","float32"),c=D(t,"scores","nonMaxSuppression","float32"),f=co(l,c,n,s,o);n=f.maxOutputSize,s=f.iouThreshold,o=f.scoreThreshold;const p={maxOutputSize:n,iouThreshold:s,scoreThreshold:o};return G.runKernel(O6,{boxes:l,scores:c},p)}const _T=j({nonMaxSuppression_:ET});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xT(r,t,n){const s=AT(r,t,n),o=s<0?-(s+1):s;r.splice(o,0,t)}function AT(r,t,n){return kT(r,t,n||OT)}function OT(r,t){return r>t?1:r<t?-1:0}function kT(r,t,n){let s=0,o=r.length,l=0,c=!1;for(;s<o;){l=s+(o-s>>>1);const f=n(t,r[l]);f>0?s=l+1:(o=l,c=!f)}return c?s:-s-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DT(r,t,n,s,o){return S1(r,t,n,s,o,0)}function $T(r,t,n,s,o,l){return S1(r,t,n,s,o,0,!1,l,!0)}function RT(r,t,n,s,o,l){return S1(r,t,n,s,o,l,!0)}function S1(r,t,n,s,o,l,c=!1,f=!1,p=!1){const d=[];for(let C=0;C<t.length;C++)t[C]>o&&d.push({score:t[C],boxIndex:C,suppressBeginIndex:0});d.sort(Nm);const y=l>0?-.5/l:0,v=[],N=[];for(;v.length<n&&d.length>0;){const C=d.pop(),{score:V,boxIndex:lt,suppressBeginIndex:rt}=C;if(V<o)break;let Q=!1;for(let tt=v.length-1;tt>=rt;--tt){const it=CT(r,lt,v[tt]);if(it>=s){Q=!0;break}if(C.score=C.score*zT(s,y,it),C.score<=o)break}C.suppressBeginIndex=v.length,Q||(C.score===V?(v.push(lt),N.push(C.score)):C.score>o&&xT(d,C,Nm))}const A=v.length,$=n-A;f&&$>0&&(v.push(...new Array($).fill(0)),N.push(...new Array($).fill(0)));const B={selectedIndices:v};return c&&(B.selectedScores=N),p&&(B.validOutputs=A),B}function CT(r,t,n){const s=r.subarray(t*4,t*4+4),o=r.subarray(n*4,n*4+4),l=Math.min(s[0],s[2]),c=Math.min(s[1],s[3]),f=Math.max(s[0],s[2]),p=Math.max(s[1],s[3]),d=Math.min(o[0],o[2]),y=Math.min(o[1],o[3]),v=Math.max(o[0],o[2]),N=Math.max(o[1],o[3]),A=(f-l)*(p-c),$=(v-d)*(N-y);if(A<=0||$<=0)return 0;const B=Math.max(l,d),C=Math.max(c,y),V=Math.min(f,v),lt=Math.min(p,N),rt=Math.max(V-B,0)*Math.max(lt-C,0);return rt/(A+$-rt)}function zT(r,t,n){const s=Math.exp(t*n*n);return n<=r?s:0}function Nm(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function MT(r,t,n,s=.5,o=Number.NEGATIVE_INFINITY){const l=D(r,"boxes","nonMaxSuppressionAsync"),c=D(t,"scores","nonMaxSuppressionAsync"),f=co(l,c,n,s,o);n=f.maxOutputSize,s=f.iouThreshold,o=f.scoreThreshold;const p=await Promise.all([l.data(),c.data()]),d=p[0],y=p[1],{selectedIndices:v}=DT(d,y,n,s,o);return l!==r&&l.dispose(),c!==t&&c.dispose(),Nn(v,"int32")}const BT=MT;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LT(r,t,n,s=.5,o=Number.NEGATIVE_INFINITY,l=0){const c=D(r,"boxes","nonMaxSuppression"),f=D(t,"scores","nonMaxSuppression"),p=co(c,f,n,s,o,l);n=p.maxOutputSize,s=p.iouThreshold,o=p.scoreThreshold,l=p.softNmsSigma;const d={boxes:c,scores:f},y={maxOutputSize:n,iouThreshold:s,scoreThreshold:o,softNmsSigma:l},v=G.runKernel(D6,d,y);return{selectedIndices:v[0],selectedScores:v[1]}}const UT=j({nonMaxSuppressionWithScore_:LT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function IT(r,t,n,s=.5,o=Number.NEGATIVE_INFINITY,l=0){const c=D(r,"boxes","nonMaxSuppressionAsync"),f=D(t,"scores","nonMaxSuppressionAsync"),p=co(c,f,n,s,o,l);n=p.maxOutputSize,s=p.iouThreshold,o=p.scoreThreshold,l=p.softNmsSigma;const d=await Promise.all([c.data(),f.data()]),y=d[0],v=d[1],{selectedIndices:N,selectedScores:A}=RT(y,v,n,s,o,l);return c!==r&&c.dispose(),f!==t&&f.dispose(),{selectedIndices:Nn(N,"int32"),selectedScores:Nn(A)}}const jT=IT;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FT(r,t,n,s=.5,o=Number.NEGATIVE_INFINITY,l=!1){const c=D(r,"boxes","nonMaxSuppression"),f=D(t,"scores","nonMaxSuppression"),p=co(c,f,n,s,o,null),d=p.maxOutputSize,y=p.iouThreshold,v=p.scoreThreshold,N={boxes:c,scores:f},A={maxOutputSize:d,iouThreshold:y,scoreThreshold:v,padToMaxOutputSize:l},$=G.runKernel(k6,N,A);return{selectedIndices:$[0],validOutputs:$[1]}}const VT=j({nonMaxSuppressionPadded_:FT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function HT(r,t,n,s=.5,o=Number.NEGATIVE_INFINITY,l=!1){const c=D(r,"boxes","nonMaxSuppressionAsync"),f=D(t,"scores","nonMaxSuppressionAsync"),p=co(c,f,n,s,o,null),d=p.maxOutputSize,y=p.iouThreshold,v=p.scoreThreshold,[N,A]=await Promise.all([c.data(),f.data()]),{selectedIndices:$,validOutputs:B}=$T(N,A,d,y,v,l);return c!==r&&c.dispose(),f!==t&&f.dispose(),{selectedIndices:Nn($,"int32"),validOutputs:oe(B,"int32")}}const GT=HT;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qT(r,t,n=!1,s=!1){const o=D(r,"images","resizeBilinear");L(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),L(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),L(s===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let l=o,c=!1;o.rank===3&&(c=!0,l=ct(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const f={images:l},p={alignCorners:n,halfPixelCenters:s,size:t},d=G.runKernel(Y6,f,p);return c?ct(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const KT=j({resizeBilinear_:qT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function YT(r,t,n=!1,s=!1){const o=D(r,"images","resizeNearestNeighbor");L(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),L(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),L(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),L(s===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let l=o,c=!1;o.rank===3&&(c=!0,l=ct(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const f={images:l},p={alignCorners:n,halfPixelCenters:s,size:t},d=G.runKernel(K6,f,p);return c?ct(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const XT=j({resizeNearestNeighbor_:YT});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function PT(r,t="binary",n=!1,s=.5){const o=D(r,"image","threshold"),l=.2989,c=.587,f=.114,p=o.shape[0]*o.shape[1];let d=wt(Nn([s]),255),y,v,N,A;if(L(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),L(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),L(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),L(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),o.shape[2]===3){[y,v,N]=bu(o,[1,1,1],-1);const C=wt(y,l),V=wt(v,c),lt=wt(N,f);A=Mt(Mt(C,V),lt)}else A=r;if(t==="otsu"){const C=D3(De(J3(A),"int32"),na([]),256);d=WT(C,p)}const $=n?u1(A,d):nc(A,d);return De(wt($,255),"int32")}function WT(r,t){let n=Nn([-1]),s=Nn([0]),o=Nn([0]),l,c,f,p,d,y;for(let v=0;v<r.size-1;v++){l=Pt(r,0,v+1),c=Pt(r,v+1),d=ee(ke(l),t),y=ee(ke(c),t);const N=ke(wt(l,gu(0,l.size)));f=ee(N,ke(l));const A=Su(c.shape,l.size),$=Mt(gu(0,c.size),A),B=wt(c,$);p=ee(ke(B),ke(c));const C=Wt(f,p),V=Wt(f,p),lt=wt(d,y);o=wt(wt(lt,C),V);const rt=nc(o,s);s=ws(rt,o,s),n=ws(rt,Nn([v]),n)}return n}const QT=j({threshold_:PT});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZT(r,t,n="nearest",s="constant",o=0,l){const c=D(r,"image","transform","float32"),f=D(t,"transforms","transform","float32");L(c.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${c.rank}.`),L(f.rank===2&&(f.shape[0]===c.shape[0]||f.shape[0]===1)&&f.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),L(l==null||l.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${l}.`);const p={image:c,transforms:f},d={interpolation:n,fillMode:s,fillValue:o,outputShape:l};return G.runKernel(kb,p,d)}const JT=j({transform_:ZT});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tN(r,t,n){const s=D(r,"a","bandPart");L(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const o=s.shape,[l,c]=s.shape.slice(-2);let f,p;typeof t=="number"?(L(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),L(t<=l,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${l}).`),f=D(t<0?l:t,"numLower","bandPart")):(L(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),f=ws(Uh(t,0),l,Gl(t,l))),typeof n=="number"?(L(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),L(n<=c,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${c}).`),p=D(n<0?c:n,"numUpper","bandPart")):(L(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),p=ws(Uh(n,0),c,Gl(n,c)));const d=ct(gu(0,l,1,"int32"),[-1,1]),y=gu(0,c,1,"int32"),v=Wt(d,y),N=Vl(u1(v,f),I3(v,ra(p))),A=uo([l,c],s.dtype);return ct(Ba(bi(ct(s,[-1,l,c])).map($=>ws(N,$,A))),o)}const eN=j({bandPart_:tN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nN(r){let t;if(Array.isArray(r)){t=!1,L(r!=null&&r.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const o=r[0].shape[0];for(let l=1;l<r.length;++l)L(r[l].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${r[l].shape[0]} vs. ${o})`)}else t=!0,r=bu(r,r.shape[0],0).map(o=>on(o,[0]));L(r.length<=r[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${r.length}) exceeds number of dimensions (${r[0].shape[0]}).`);const n=[],s=r;for(let o=0;o<r.length;++o)n.push(G.tidy(()=>{let l=s[o];if(o>0)for(let c=0;c<o;++c){const f=wt(ke(wt(n[c],l)),n[c]);l=Wt(l,f)}return ee(l,ec(l,"euclidean"))}));return t?Ba(n,0):n}const rN=j({gramSchmidt_:nN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aN(r,t=!1){if(L(r.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${r.rank}`),r.rank===2)return Em(r,t);{const n=r.shape.slice(0,r.shape.length-2).reduce((p,d)=>p*d),s=bi(ct(r,[n,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],l=[];s.forEach(p=>{const[d,y]=Em(p,t);o.push(d),l.push(y)});const c=ct(Ba(o,0),r.shape),f=ct(Ba(l,0),r.shape);return[c,f]}}function Em(r,t=!1){return G.tidy(()=>{L(r.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${r.shape.length}D Tensor.`);const n=r.shape[0],s=r.shape[1];let o=B3(n),l=Ss(r);const c=Ts([[1]],[1,1]);let f=Ss(c);const p=n>=s?s:n;for(let d=0;d<p;++d){const y=l,v=f,N=o;[f,l,o]=G.tidy(()=>{const A=Pt(l,[d,d],[n-d,1]),$=ec(A),B=Pt(l,[d,d],[1,1]),C=ws(nc(B,0),Ts([[-1]]),Ts([[1]])),V=Wt(B,wt(C,$)),lt=ee(A,V);lt.shape[0]===1?f=Ss(c):f=mn([c,Pt(lt,[1,0],[lt.shape[0]-1,lt.shape[1]])],0);const rt=ra(ee(Se(C,V),$)),Q=Pt(l,[d,0],[n-d,s]),tt=wt(rt,f),it=Ih(f);if(d===0)l=Wt(Q,Se(tt,Se(it,Q)));else{const mt=Wt(Q,Se(tt,Se(it,Q)));l=mn([Pt(l,[0,0],[d,s]),mt],0)}const bt=Ih(tt),Tt=Pt(o,[0,d],[n,o.shape[1]-d]);if(d===0)o=Wt(Tt,Se(Se(Tt,f),bt));else{const mt=Wt(Tt,Se(Se(Tt,f),bt));o=mn([Pt(o,[0,0],[n,d]),mt],1)}return[f,l,o]}),Me([y,v,N])}return!t&&n>s&&(o=Pt(o,[0,0],[n,s]),l=Pt(l,[0,0],[s,s])),[o,l]})}const sN=j({qr_:aN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ln;(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ln||(Ln={}));function iN(r,t,n=Ln.SUM_BY_NONZERO_WEIGHTS){const s=D(r,"losses","computeWeightedLoss");let o=null;t!=null&&(o=D(t,"weights","computeWeightedLoss"));const l=o==null?s:wt(s,o);if(n===Ln.NONE)return l;if(n===Ln.SUM)return ke(l);if(n===Ln.MEAN){if(o==null)return Hl(l);{const c=s.size/o.size,f=ee(ke(l),ke(o));return c>1?ee(f,oe(c)):f}}if(n===Ln.SUM_BY_NONZERO_WEIGHTS){if(o==null)return ee(ke(l),oe(s.size));{const c=wt(o,li(s.shape)),f=De(ke(X3(c,oe(0))),"float32");return ee(ke(l),f)}}throw Error(`Unknown reduction: ${n}`)}const Ia=j({computeWeightedLoss_:iN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oN(r,t,n,s=Ln.SUM_BY_NONZERO_WEIGHTS){const o=D(r,"labels","absoluteDifference"),l=D(t,"predictions","absoluteDifference");let c=null;n!=null&&(c=D(n,"weights","absoluteDifference")),Er(o.shape,l.shape,"Error in absoluteDifference: ");const f=nr(Wt(o,l));return Ia(f,c,s)}const uN=j({absoluteDifference_:oN});function lN(r,t,n,s,o=Ln.SUM_BY_NONZERO_WEIGHTS){const l=D(r,"labels","cosineDistance"),c=D(t,"predictions","cosineDistance");let f=null;s!=null&&(f=D(s,"weights","cosineDistance")),Er(l.shape,c.shape,"Error in cosineDistance: ");const p=oe(1),d=Wt(p,ke(wt(l,c),n,!0));return Ia(d,f,o)}const cN=j({cosineDistance_:lN});function fN(r,t,n,s=Ln.SUM_BY_NONZERO_WEIGHTS){let o=D(r,"labels","hingeLoss");const l=D(t,"predictions","hingeLoss");let c=null;n!=null&&(c=D(n,"weights","hingeLoss")),Er(o.shape,l.shape,"Error in hingeLoss: ");const f=oe(1);o=Wt(wt(oe(2),o),f);const p=ac(Wt(f,wt(o,l)));return Ia(p,c,s)}const hN=j({hingeLoss_:fN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pN(r,t,n,s=1,o=Ln.SUM_BY_NONZERO_WEIGHTS){const l=D(r,"labels","huberLoss"),c=D(t,"predictions","huberLoss");let f=null;n!=null&&(f=D(n,"weights","huberLoss")),Er(l.shape,c.shape,"Error in huberLoss: ");const p=oe(s),d=nr(Wt(c,l)),y=Gl(d,p),v=Wt(d,y),N=Mt(wt(oe(.5),Br(y)),wt(p,v));return Ia(N,f,o)}const dN=j({huberLoss_:pN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mN(r,t,n,s=1e-7,o=Ln.SUM_BY_NONZERO_WEIGHTS){const l=D(r,"labels","logLoss"),c=D(t,"predictions","logLoss");let f=null;n!=null&&(f=D(n,"weights","logLoss")),Er(l.shape,c.shape,"Error in logLoss: ");const p=oe(1),d=oe(s),y=ra(wt(l,mu(Mt(c,d)))),v=wt(Wt(p,l),mu(Mt(Wt(p,c),d))),N=Wt(y,v);return Ia(N,f,o)}const gN=j({logLoss_:mN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yN(r,t,n,s=Ln.SUM_BY_NONZERO_WEIGHTS){const o=D(r,"labels","meanSquaredError"),l=D(t,"predictions","meanSquaredError");let c=null;n!=null&&(c=D(n,"weights","meanSquaredError")),Er(o.shape,l.shape,"Error in meanSquaredError: ");const f=e0(o,l);return Ia(f,c,s)}const bN=j({meanSquaredError_:yN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vN(r,t){const n=D(r,"labels","sigmoidCrossEntropyWithLogits"),s=D(t,"logits","sigmoidCrossEntropyWithLogits");Er(n.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const o=ac(s),l=wt(s,n),c=F3(za(ra(nr(s))));return Mt(Wt(o,l),c)}function SN(r,t,n,s=0,o=Ln.SUM_BY_NONZERO_WEIGHTS){let l=D(r,"multiClassLabels","sigmoidCrossEntropy");const c=D(t,"logits","sigmoidCrossEntropy");let f=null;if(n!=null&&(f=D(n,"weights","sigmoidCrossEntropy")),Er(l.shape,c.shape,"Error in sigmoidCrossEntropy: "),s>0){const d=oe(s),y=oe(1),v=oe(.5);l=Mt(wt(l,Wt(y,d)),wt(v,d))}const p=vN(l,c);return Ia(p,f,o)}const wN=j({sigmoidCrossEntropy_:SN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function TN(r,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return Ma((o,l,c)=>{const p=H3(l,[n],!0),d=Wt(De(l,"float32"),p);c([o,d]);const y=ra(wt(d,o));return{value:ke(y,[n]),gradFunc:(A,$)=>{const[B,C]=$,V=tc(A.shape,[n]);return[wt(ct(A,V),Wt(De(B,"float32"),za(C))),wt(ct(A,V),Wt(za(C),De(B,"float32")))]}}})(r,t)}function NN(r,t,n,s=0,o=Ln.SUM_BY_NONZERO_WEIGHTS){let l=D(r,"onehotLabels","softmaxCrossEntropy");const c=D(t,"logits","softmaxCrossEntropy");let f=null;if(n!=null&&(f=D(n,"weights","softmaxCrossEntropy")),Er(l.shape,c.shape,"Error in softmaxCrossEntropy: "),s>0){const d=oe(s),y=oe(1),v=oe(l.shape[1]);l=Mt(wt(l,Wt(y,d)),ee(d,v))}const p=TN(l,c);return Ia(p,f,o)}const EN=j({softmaxCrossEntropy_:NN});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _N(r,t,n,s){const o=D(r,"indices","sparseFillEmptyRows","int32"),l=D(t,"values","sparseFillEmptyRows"),c=D(n,"denseShape","sparseFillEmptyRows","int32"),f=D(s,"defaultValue","sparseFillEmptyRows",l.dtype);if(o.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${o.shape}`);if(l.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${l.shape}`);if(c.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${c.shape}`);if(f.rank!==0)throw new Error(`Default value should be a scalar but received shape ${f.shape}`);const p={indices:o,values:l,denseShape:c,defaultValue:f},d=G.runKernel(db,p);return{outputIndices:d[0],outputValues:d[1],emptyRowIndicator:d[2],reverseIndexMap:d[3]}}const xN=j({sparseFillEmptyRows_:_N});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function AN(r,t,n){const s=D(r,"inputIndices","sparseReshape","int32"),o=D(t,"inputShape","sparseReshape","int32"),l=D(n,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(o.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${o.shape}`);if(l.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${l.shape}`);const c={inputIndices:s,inputShape:o,newShape:l},f=G.runKernel(mb,c);return{outputIndices:f[0],outputShape:f[1]}}const ON=j({sparseReshape_:AN});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kN(r,t,n){const s=D(r,"data","sparseSegmentMean"),o=D(t,"indices","sparseSegmentMean","int32"),l=D(n,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${o.shape}`);if(l.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${l.shape}`);const c={data:s,indices:o,segmentIds:l};return G.runKernel(gb,c)}const DN=j({sparseSegmentMean_:kN});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $N(r,t,n){const s=D(r,"data","sparseSegmentSum"),o=D(t,"indices","sparseSegmentSum","int32"),l=D(n,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${o.shape}`);if(l.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${l.shape}`);const c={data:s,indices:o,segmentIds:l};return G.runKernel(yb,c)}const RN=j({sparseSegmentSum_:$N});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CN(r,t,n,s,o,l,c,f){const p=D(r,"data","stringNGrams","string");if(p.dtype!=="string")throw new Error("Data must be of datatype string");if(p.shape.length!==1)throw new Error(`Data must be a vector, saw: ${p.shape}`);const d=D(t,"dataSplits","stringNGrams");if(d.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const y={separator:n,nGramWidths:s,leftPad:o,rightPad:l,padWidth:c,preserveShortSequences:f},v={data:p,dataSplits:d},N=G.runKernel(Tb,v,y);return{nGrams:N[0],nGramsSplits:N[1]}}const zN=j({stringNGrams_:CN});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function MN(r,t,n=!0){const s=D(r,"input","stringSplit","string"),o=D(t,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(o.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${o.shape}`);const l={skipEmpty:n},c={input:s,delimiter:o},f=G.runKernel(Nb,c,l);return{indices:f[0],values:f[1],shape:f[2]}}const BN=j({stringSplit_:MN});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function LN(r,t){const n=D(r,"input","stringToHashBucketFast","string"),s={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const o={input:n};return G.runKernel(Eb,o,s)}const UN=j({stringToHashBucketFast_:LN});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function IN(r,t,n,s=!0){const o=D(r,"input","staticRegexReplace","string"),l={pattern:t,rewrite:n,replaceGlobal:s};return G.runKernel(Sb,{x:o},l)}const jN=j({staticRegexReplace_:IN});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const FN={fft:p1,ifft:ql,rfft:d1,irfft:t0},VN={hammingWindow:lT,hannWindow:o0,frame:u0,stft:pT},fo={flipLeftRight:yT,grayscaleToRGB:vT,resizeNearestNeighbor:XT,resizeBilinear:KT,rgbToGrayscale:wT,rotateWithOffset:NT,cropAndResize:mT,nonMaxSuppression:_T,nonMaxSuppressionAsync:BT,nonMaxSuppressionWithScore:UT,nonMaxSuppressionWithScoreAsync:jT,nonMaxSuppressionPadded:VT,nonMaxSuppressionPaddedAsync:GT,threshold:QT,transform:JT},HN={bandPart:eN,gramSchmidt:rN,qr:sN},GN={absoluteDifference:uN,computeWeightedLoss:Ia,cosineDistance:cN,hingeLoss:hN,huberLoss:dN,logLoss:gN,meanSquaredError:bN,sigmoidCrossEntropy:wN,softmaxCrossEntropy:EN},qN={sparseFillEmptyRows:xN,sparseReshape:ON,sparseSegmentMean:DN,sparseSegmentSum:RN},KN={stringNGrams:zN,stringSplit:BN,stringToHashBucketFast:UN,staticRegexReplace:jN};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const YN=new Map,XN=new Map;class PN{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class ii{constructor(){this.classNameMap={}}static getMap(){return ii.instance==null&&(ii.instance=new ii),ii.instance}static register(t){ii.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function WN(r,t,n){L(r.className!=null,()=>"Class being registered does not have the static className property defined."),L(typeof r.className=="string",()=>"className is required to be a string, but got type "+typeof r.className),L(r.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof n>"u"&&(n=r.className);const s=n,o=t+">"+s;return ii.register(r),YN.set(o,r),XN.set(r,o),r}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vi extends PN{minimize(t,n=!1,s){const{value:o,grads:l}=this.computeGradients(t,s);if(s!=null){const c=s.map(f=>({name:f.name,tensor:l[f.name]}));this.applyGradients(c)}else this.applyGradients(l);return Me(l),n?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return O7(t,n)}dispose(){this.iterations_!=null&&Me(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:oe(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(vi,Symbol.hasInstance,{value:r=>r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class QN extends vi{static get className(){return"Adadelta"}constructor(t,n,s=null){super(),this.learningRate=t,this.rho=n,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=G.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const l=G.registeredVariables[s],c=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accum_grad`,variable:Zt(()=>rr(l).variable(c))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${s}/accum_var`,variable:Zt(()=>rr(l).variable(c))});const f=Array.isArray(t)?t[o].tensor:t[s];if(f==null)return;const p=this.accumulatedGrads[o].variable,d=this.accumulatedUpdates[o].variable;Zt(()=>{const y=Mt(wt(p,this.rho),wt(Br(f),1-this.rho)),v=wt(ee(Ca(Mt(d,this.epsilon)),Ca(Mt(p,this.epsilon))),f),N=Mt(wt(d,this.rho),wt(Br(v),1-this.rho));p.assign(y),d.assign(N);const A=Mt(wt(v,-this.learningRate),l);l.assign(A)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Me(this.accumulatedGrads.map(t=>t.variable)),Me(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,n).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedUpdates=t.slice(n,n*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ZN extends vi{static get className(){return"Adagrad"}constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const l=G.registeredVariables[s];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accumulator`,variable:Zt(()=>Su(l.shape,this.initialAccumulatorValue).variable(!1))});const c=Array.isArray(t)?t[o].tensor:t[s];if(c==null)return;const f=this.accumulatedGrads[o].variable;Zt(()=>{const p=Mt(f,Br(c));f.assign(p);const d=Mt(wt(ee(c,Ca(Mt(p,G.backend.epsilon()))),-this.learningRate),l);l.assign(d)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Me(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class JN extends vi{static get className(){return"Adam"}constructor(t,n,s,o=null){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],Zt(()=>{this.accBeta1=oe(n).variable(),this.accBeta2=oe(s).variable()}),o==null&&(this.epsilon=G.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);Zt(()=>{const s=Wt(1,this.accBeta1),o=Wt(1,this.accBeta2);n.forEach((l,c)=>{const f=G.registeredVariables[l],p=!1;this.accumulatedFirstMoment[c]==null&&(this.accumulatedFirstMoment[c]={originalName:`${l}/m`,variable:Zt(()=>rr(f).variable(p))}),this.accumulatedSecondMoment[c]==null&&(this.accumulatedSecondMoment[c]={originalName:`${l}/v`,variable:Zt(()=>rr(f).variable(p))});const d=Array.isArray(t)?t[c].tensor:t[l];if(d==null)return;const y=this.accumulatedFirstMoment[c].variable,v=this.accumulatedSecondMoment[c].variable,N=Mt(wt(y,this.beta1),wt(d,1-this.beta1)),A=Mt(wt(v,this.beta2),wt(Br(d),1-this.beta2)),$=ee(N,s),B=ee(A,o);y.assign(N),v.assign(A);const C=Mt(wt(ee($,Mt(Ca(B),this.epsilon)),-this.learningRate),f);f.assign(C)}),this.accBeta1.assign(wt(this.accBeta1,this.beta1)),this.accBeta2.assign(wt(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Me(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&Me(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),Zt(()=>{this.accBeta1.assign(du(this.beta1,this.iterations_+1)),this.accBeta2.assign(du(this.beta2,this.iterations_+1))});const n=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,n).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class tE extends vi{static get className(){return"Adamax"}constructor(t,n,s,o=null,l=0){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=o,this.decay=l,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],Zt(()=>{this.iteration=oe(0).variable(),this.accBeta1=oe(n).variable()}),o==null&&(this.epsilon=G.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);Zt(()=>{const s=Wt(1,this.accBeta1),o=ee(-this.learningRate,Mt(wt(this.iteration,this.decay),1));n.forEach((l,c)=>{const f=G.registeredVariables[l],p=!1;this.accumulatedFirstMoment[c]==null&&(this.accumulatedFirstMoment[c]={originalName:`${l}/m`,variable:rr(f).variable(p)}),this.accumulatedWeightedInfNorm[c]==null&&(this.accumulatedWeightedInfNorm[c]={originalName:`${l}/v`,variable:rr(f).variable(p)});const d=Array.isArray(t)?t[c].tensor:t[l];if(d==null)return;const y=this.accumulatedFirstMoment[c].variable,v=this.accumulatedWeightedInfNorm[c].variable,N=Mt(wt(y,this.beta1),wt(d,1-this.beta1)),A=wt(v,this.beta2),$=nr(d),B=Y3(A,$);y.assign(N),v.assign(B);const C=Mt(wt(ee(o,s),ee(N,Mt(B,this.epsilon))),f);f.assign(C)}),this.iteration.assign(Mt(this.iteration,1)),this.accBeta1.assign(wt(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Me(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&Me(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class l0 extends vi{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const l=Array.isArray(t)?t[o].tensor:t[s];if(l==null)return;const c=G.registeredVariables[s];Zt(()=>{const f=Mt(wt(this.c,l),c);c.assign(f)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=ea(oe(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class eE extends l0{static get className(){return"Momentum"}constructor(t,n,s=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=s,this.accumulations=[],this.m=oe(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const l=G.registeredVariables[s];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${s}/momentum`,variable:Zt(()=>rr(l).variable(!1))});const c=this.accumulations[o].variable,f=Array.isArray(t)?t[o].tensor:t[s];f!=null&&Zt(()=>{let p;const d=Mt(wt(this.m,c),f);this.useNesterov?p=Mt(wt(this.c,Mt(f,wt(d,this.m))),l):p=Mt(wt(this.c,d),l),c.assign(d),l.assign(p)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Me(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nE extends vi{static get className(){return"RMSProp"}constructor(t,n=.9,s=0,o=null,l=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=s,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=l,o==null&&(this.epsilon=G.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const l=G.registeredVariables[s],c=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${s}/rms`,variable:Zt(()=>rr(l).variable(c))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${s}/momentum`,variable:Zt(()=>rr(l).variable(c))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${s}/mg`,variable:Zt(()=>rr(l).variable(c))});const f=Array.isArray(t)?t[o].tensor:t[s];if(f==null)return;const p=this.accumulatedMeanSquares[o].variable,d=this.accumulatedMoments[o].variable;Zt(()=>{const y=Mt(wt(p,this.decay),wt(Br(f),1-this.decay));if(this.centered){const v=this.accumulatedMeanGrads[o].variable,N=Mt(wt(v,this.decay),wt(f,1-this.decay)),A=ee(wt(f,this.learningRate),Ca(Wt(y,Mt(Br(N),this.epsilon)))),$=Mt(wt(d,this.momentum),A);p.assign(y),v.assign(N),d.assign($);const B=Wt(l,$);l.assign(B)}else{const v=Mt(wt(p,this.decay),wt(Br(f),1-this.decay)),N=Mt(wt(d,this.momentum),ee(wt(f,this.learningRate),Ca(Mt(v,this.epsilon))));p.assign(v),d.assign(N);const A=Wt(l,N);l.assign(A)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Me(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Me(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&Me(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,n).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedMoments=t.slice(n,n*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rE=[QN,ZN,JN,tE,eE,nE,l0];function aE(){for(const r of rE)WN(r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sE="model",iE=".json",oE=".weights.bin";function _m(r){return new Promise(t=>setTimeout(t)).then(r)}class gi{constructor(t){if(!ne().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(gi.URL_SCHEME)&&(t=t.slice(gi.URL_SCHEME.length)),(t==null||t.length===0)&&(t=sE),this.modelJsonFileName=t+iE,this.weightDataFileName=t+oE}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=Ur.join(t.weightData),s=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const o=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],l=y3(t,o),c=window.URL.createObjectURL(new Blob([JSON.stringify(l)],{type:"application/json"})),f=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(f.download=this.modelJsonFileName,f.href=c,await _m(()=>f.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const p=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;p.download=this.weightDataFileName,p.href=s,await _m(()=>p.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:vu(t)}}}}gi.URL_SCHEME="downloads://";class uE{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const s=new FileReader;s.onload=o=>{const l=JSON.parse(o.target.result),c=l.modelTopology;if(c==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(l.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:c});return}const p=s1(l,d=>this.loadWeights(d));t(p)},s.onerror=o=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})}loadWeights(t){const n=[],s=[];for(const c of t)n.push(...c.weights),s.push(...c.paths);const o=this.checkManifestAndWeightFiles(t),l=s.map(c=>this.loadWeightsFile(c,o[c]));return Promise.all(l).then(c=>[n,c])}loadWeightsFile(t,n){return new Promise((s,o)=>{const l=new FileReader;l.onload=c=>{const f=c.target.result;s(f)},l.onerror=c=>o(`Failed to weights data from file of path '${t}'.`),l.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],s=this.weightsFiles.map(l=>dm(l.name)),o={};for(const l of t)l.paths.forEach(c=>{const f=dm(c);if(n.indexOf(f)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${f}'`);if(n.push(f),s.indexOf(f)===-1)throw new Error(`Weight file with basename '${f}' is not provided.`);o[c]=this.weightsFiles[s.indexOf(f)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return o}}const lE=r=>ne().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(gi.URL_SCHEME)?cE(r.slice(gi.URL_SCHEME.length)):null;ze.registerSaveRouter(lE);function cE(r="model"){return new gi(r)}function fE(r){return new uE(r)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(r,t,n,s){c(r),n=n??0,s=s??1,f(n,s);let o=0;const l=p=>(p.then(d=>{const y=n+ ++o/r.length*(s-n);return t(y),d}),p);function c(p){L(p!=null&&Array.isArray(p)&&p.length>0,()=>"promises must be a none empty array")}function f(p,d){L(p>=0&&p<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${p}`),L(d>=0&&d<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${d}`),L(d>=p,()=>`startFraction must be no more than endFraction, but got startFraction ${p} and endFraction ${d}`)}return Promise.all(r.map(l))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function c0(r,t){t==null&&(t={});const n=t.fetchFunc==null?ne().platform.fetch:t.fetchFunc,s=r.map(v=>n(v,t.requestInit,{isBinary:!0})),f=(t.onProgress==null?await Promise.all(s):await xm(s,t.onProgress,0,.5)).map(v=>v.arrayBuffer());return t.onProgress==null?await Promise.all(f):await xm(f,t.onProgress,.5,1)}function hE(r,t){var n;const s=t.fetchFunc==null?ne().platform.fetch:t.fetchFunc;let o=0,l;return(n=t.onProgress)===null||n===void 0||n.call(t,0),new ReadableStream({pull:async c=>{for(var f;o<r.length;){l||(l=(await s(r[o],t.requestInit,{isBinary:!0})).body.getReader());const{done:p,value:d}=await l.read();if(p){o++,l=void 0,(f=t.onProgress)===null||f===void 0||f.call(t,o/r.length);continue}c.enqueue(d);return}c.close()}})}async function pE(r,t="",n,s){return f0(c=>c0(c,{requestInit:s}))(r,t,n)}function f0(r){return async(t,n="",s)=>{const o=t.map(()=>!1),l={},c=s!=null?s.map(()=>!1):[],f=[];if(t.forEach((A,$)=>{let B=0;A.weights.forEach(C=>{const V="quantization"in C?C.quantization.dtype:C.dtype,lt=hi[V]*Qe(C.shape),rt=()=>{o[$]=!0,l[$]==null&&(l[$]=[]),l[$].push({manifestEntry:C,groupOffset:B,sizeBytes:lt})};s!=null?s.forEach((Q,tt)=>{Q===C.name&&(rt(),c[tt]=!0)}):rt(),f.push(C.name),B+=lt})}),!c.every(A=>A)){const A=s.filter(($,B)=>!c[B]);throw new Error(`Could not find weights in manifest with names: ${A.join(", ")}. 
Manifest JSON has weights with names: ${f.join(", ")}.`)}const p=o.reduce((A,$,B)=>($&&A.push(B),A),[]),d=[];p.forEach(A=>{t[A].paths.forEach($=>{const B=n+(n.endsWith("/")?"":"/")+$;d.push(B)})});const y=await r(d),v={};let N=0;return p.forEach(A=>{const $=t[A].paths.length,B=new Ur(y.slice(N,N+$));l[A].forEach(V=>{const lt=B.slice(V.groupOffset,V.groupOffset+V.sizeBytes),rt=d3(lt,[V.manifestEntry]);for(const Q in rt)v[Q]=rt[Q]}),N+=$}),v}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dE="application/octet-stream",mE="application/json";class w1{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(L(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=ne().platform.fetch,L(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&L(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o=y3(t,s);if(n.body.append("model.json",new Blob([JSON.stringify(o)],{type:mE}),"model.json"),t.weightData!=null){const c=Ur.join(t.weightData);n.body.append("model.weights.bin",new Blob([c],{type:dE}),"model.weights.bin")}const l=await this.fetch(this.path,n);if(l.ok)return{modelArtifactsInfo:vu(t),responses:[l]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${l.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let c=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?c+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":c+=" Please make sure the server is serving valid JSON for this request.",new Error(c)}const s=n.modelTopology,o=n.weightsManifest;if(s==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return s1(t,n=>this.loadWeights(n))}async loadStream(){const t=await this.loadModelJSON(),n=await this.getWeightUrls(t.weightsManifest),s=$h(t.weightsManifest),o=()=>hE(n,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:o})}async getWeightUrls(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[s,o]=gE(n),l=this.weightPathPrefix||s,c=[],f=[];for(const p of t)for(const d of p.paths)this.weightUrlConverter!=null?f.push(this.weightUrlConverter(d)):c.push(l+d+o);return this.weightUrlConverter&&c.push(...await Promise.all(f)),c}async loadWeights(t){const n=await this.getWeightUrls(t),s=$h(t),o=await c0(n,this.loadOptions);return[s,o]}}w1.URL_SCHEME_REGEX=/^https?:\/\//;function gE(r){const t=r.lastIndexOf("/"),n=r.lastIndexOf("?"),s=r.substring(0,t),o=n>t?r.substring(n):"";return[s+"/",o]}function jh(r){return r.match(w1.URL_SCHEME_REGEX)!=null}const h0=(r,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(r)?n=r.every(s=>jh(s)):n=jh(r),n)return T1(r,t)}return null};ze.registerSaveRouter(h0);ze.registerLoadRouter(h0);function T1(r,t){return new w1(r,t)}function yE(r,t){return T1(r,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fh{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class p0{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class bE{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function vE(r,t,n,s){const o=arguments;return new bE(d0(...o))}function d0(r,t,n,s){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new fh(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new fh({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new fh({modelTopology:r,weightSpecs:t,weightData:n,trainingConfig:s}))}function SE(r){return new p0(r)}function wE(r){return new p0(r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m0=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:Ur,browserFiles:fE,browserHTTPRequest:yE,concatenateArrayBuffers:hv,copyModel:zv,decodeWeights:d3,decodeWeightsStream:g3,encodeWeights:iv,fromMemory:vE,fromMemorySync:d0,getLoadHandlers:Sv,getModelArtifactsForJSON:s1,getModelArtifactsForJSONSync:b3,getModelArtifactsInfoForJSON:vu,getSaveHandlers:vv,getWeightSpecs:$h,http:T1,isHTTPScheme:jh,listModels:Rv,loadWeights:pE,moveModel:Mv,registerLoadRouter:bv,registerSaveRouter:yv,removeModel:Cv,weightsLoaderFactory:f0,withSaveHandler:SE,withSaveHandlerSync:wE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ai;function TE(r,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,s=!1,o=!1,l=!1,c=!1,f=!1;if(r.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)s=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)l=!0;else if(r.getContext!=null)c=!0;else if(typeof ImageBitmap<"u"&&r instanceof ImageBitmap)f=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${r.constructor.name}`);if(_h(em,G.backendName)!=null){const $={pixels:r},B={numChannels:t};return G.runKernel(em,$,B)}const[d,y]=o?[r.videoWidth,r.videoHeight]:[r.width,r.height];let v;if(c)v=r.getContext("2d").getImageData(0,0,d,y).data;else if(s||n)v=r.data;else if(l||o||f){if(ai==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")ai=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else ai=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});ai.canvas.width=d,ai.canvas.height=y,ai.drawImage(r,0,0,d,y),v=ai.getImageData(0,0,d,y).data}let N;if(t===4)N=new Int32Array(v);else{const $=d*y;N=new Int32Array($*t);for(let B=0;B<$;B++)for(let C=0;C<t;++C)N[B*t+C]=v[B*4+C]}return r0(N,[y,d,t],"int32")}function NE(r){if(r.rank!==2&&r.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${r.rank}.`);const t=r.rank===2?1:r.shape[2];if(t>4||t===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if(r.dtype!=="float32"&&r.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${r.dtype}. Please use float32 or int32 tensors.`)}async function g0(r,t){let n=D(r,"img","toPixels");if(!(r instanceof Ie)){const d=n;n=De(d,"int32"),d.dispose()}NE(n);const[s,o]=n.shape.slice(0,2),l=n.rank===2?1:n.shape[2],c=await n.data(),f=n.dtype==="float32"?255:1,p=new Uint8ClampedArray(o*s*4);for(let d=0;d<s*o;++d){const y=[0,0,0,255];for(let N=0;N<l;N++){const A=c[d*l+N];if(n.dtype==="float32"){if(A<0||A>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${A}.`)}else if(n.dtype==="int32"&&(A<0||A>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${A}.`);l===1?(y[0]=A*f,y[1]=A*f,y[2]=A*f):y[N]=A*f}const v=d*4;p[v+0]=Math.round(y[0]),p[v+1]=Math.round(y[1]),p[v+2]=Math.round(y[2]),p[v+3]=Math.round(y[3])}return n!==r&&n.dispose(),p}const y0=j({fromPixels_:TE});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */aE();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const EE=ne();EE.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,r=>{r&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var qn;(function(r){r[r.DT_INVALID=0]="DT_INVALID",r[r.DT_FLOAT=1]="DT_FLOAT",r[r.DT_DOUBLE=2]="DT_DOUBLE",r[r.DT_INT32=3]="DT_INT32",r[r.DT_UINT8=4]="DT_UINT8",r[r.DT_INT16=5]="DT_INT16",r[r.DT_INT8=6]="DT_INT8",r[r.DT_STRING=7]="DT_STRING",r[r.DT_COMPLEX64=8]="DT_COMPLEX64",r[r.DT_INT64=9]="DT_INT64",r[r.DT_BOOL=10]="DT_BOOL",r[r.DT_QINT8=11]="DT_QINT8",r[r.DT_QUINT8=12]="DT_QUINT8",r[r.DT_QINT32=13]="DT_QINT32",r[r.DT_BFLOAT16=14]="DT_BFLOAT16",r[r.DT_QINT16=15]="DT_QINT16",r[r.DT_QUINT16=16]="DT_QUINT16",r[r.DT_UINT16=17]="DT_UINT16",r[r.DT_COMPLEX128=18]="DT_COMPLEX128",r[r.DT_HALF=19]="DT_HALF",r[r.DT_RESOURCE=20]="DT_RESOURCE",r[r.DT_VARIANT=21]="DT_VARIANT",r[r.DT_UINT32=22]="DT_UINT32",r[r.DT_UINT64=23]="DT_UINT64",r[r.DT_FLOAT_REF=101]="DT_FLOAT_REF",r[r.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",r[r.DT_INT32_REF=103]="DT_INT32_REF",r[r.DT_UINT8_REF=104]="DT_UINT8_REF",r[r.DT_INT16_REF=105]="DT_INT16_REF",r[r.DT_INT8_REF=106]="DT_INT8_REF",r[r.DT_STRING_REF=107]="DT_STRING_REF",r[r.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",r[r.DT_INT64_REF=109]="DT_INT64_REF",r[r.DT_BOOL_REF=110]="DT_BOOL_REF",r[r.DT_QINT8_REF=111]="DT_QINT8_REF",r[r.DT_QUINT8_REF=112]="DT_QUINT8_REF",r[r.DT_QINT32_REF=113]="DT_QINT32_REF",r[r.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",r[r.DT_QINT16_REF=115]="DT_QINT16_REF",r[r.DT_QUINT16_REF=116]="DT_QUINT16_REF",r[r.DT_UINT16_REF=117]="DT_UINT16_REF",r[r.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",r[r.DT_HALF_REF=119]="DT_HALF_REF",r[r.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",r[r.DT_VARIANT_REF=121]="DT_VARIANT_REF",r[r.DT_UINT32_REF=122]="DT_UINT32_REF",r[r.DT_UINT64_REF=123]="DT_UINT64_REF"})(qn||(qn={}));var Am;(function(r){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(r.CheckpointFormatVersion||(r.CheckpointFormatVersion={}))})(Am||(Am={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _E={};function b0(r){return _E[r]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function S(r,t,n,s,o){const l=t.inputParams[r];if(l&&l.inputIndexStart!==void 0){const f=l.inputIndexStart,p=l.inputIndexEnd===0?void 0:l.inputIndexEnd===void 0?f+1:l.inputIndexEnd,d=f<0?t.inputNames.length+f:f;if(l.type==="tensor")return dn(t.inputNames[d],n,s,o);if(l.type==="tensors"){const N=t.inputs.slice(f,p);return t.inputNames.slice(f,p).filter(($,B)=>{var C;return((C=N[B])===null||C===void 0?void 0:C.op)!=="NoOp"}).map($=>dn($,n,s,o))}const y=dn(t.inputNames[d],n,s,o),v=y.dataSync();return l.type==="number"?v[0]:Eh(y.shape,v)}const c=t.attrParams[r];return c&&c.value}function dn(r,t,n,s){const[o,l]=Kn(r,n);if(s!=null){const f=s.getHashTableHandleByName(o);if(f!=null)return f}const c=n.currentContextIds.find(f=>!!t[Kl(o,f)]);return c!==void 0?t[Kl(o,c)][l]:void 0}function Om(r,t,n){return t[Kl(r,n.currentContextId)]}function xa(r,t){const[n,s,o]=Kn(r,t);return[Kl(n,t&&t.currentContextId),s,o]}function Kl(r,t){return t?`${r}-${t}`:r}function Kn(r,t){if(r==="")return["",0,void 0];const n=t!=null&&t.parseNodeNameCache!=null;if(n){const l=t.parseNodeNameCache.get(r);if(l!=null)return l}const s=r.split(":");let o;if(s.length===1)o=[r,0,void 0];else{const l=s[0],c=s.length===3?s[1]:void 0,f=Number(s[s.length-1]);o=[l,f,c]}return n&&t.parseNodeNameCache.set(r,o),o}function Bl(r,t,n){let s=S("pad",r,t,n);if(s==="explicit"){s=S("explicitPaddings",r,t,n);const o=[[0,0],[0,0],[0,0],[0,0]];for(let l=0;l<4;l++)o[l][0]=s[l*2],o[l][1]=s[l*2+1];return o}return s}function Aa(r){return r.kept?r:Ss(r)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xE=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],AE=Object.freeze(Object.defineProperty({__proto__:null,json:xE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const OE=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],kE=Object.freeze(Object.defineProperty({__proto__:null,json:OE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const DE=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],$E=Object.freeze(Object.defineProperty({__proto__:null,json:DE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const RE=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],CE=Object.freeze(Object.defineProperty({__proto__:null,json:RE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zE=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],ME=Object.freeze(Object.defineProperty({__proto__:null,json:zE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const BE=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],LE=Object.freeze(Object.defineProperty({__proto__:null,json:BE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const UE=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],IE=Object.freeze(Object.defineProperty({__proto__:null,json:UE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jE=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],FE=Object.freeze(Object.defineProperty({__proto__:null,json:jE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const VE=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],HE=Object.freeze(Object.defineProperty({__proto__:null,json:VE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const GE=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],qE=Object.freeze(Object.defineProperty({__proto__:null,json:GE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const KE=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],YE=Object.freeze(Object.defineProperty({__proto__:null,json:KE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const XE=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],PE=Object.freeze(Object.defineProperty({__proto__:null,json:XE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const WE=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],QE=Object.freeze(Object.defineProperty({__proto__:null,json:WE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ZE=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],JE=Object.freeze(Object.defineProperty({__proto__:null,json:ZE},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t_=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],e_=Object.freeze(Object.defineProperty({__proto__:null,json:t_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n_=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],r_=Object.freeze(Object.defineProperty({__proto__:null,json:n_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const a_=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],s_=Object.freeze(Object.defineProperty({__proto__:null,json:a_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i_=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],o_=Object.freeze(Object.defineProperty({__proto__:null,json:i_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const u_=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],l_=Object.freeze(Object.defineProperty({__proto__:null,json:u_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class km{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[AE,kE,$E,CE,ME,LE,IE,FE,HE,qE,YE,PE,QE,JE,e_,r_,s_,o_,l_],n=[].concat(...t.map(s=>s.json));this.opMappers=n.reduce((s,o)=>(s[o.tfOpName]=o,s),{})}transformGraph(t,n={}){const s=t.node,o=[],l=[],c=[],f=s.reduce((B,C)=>(B[C.name]=this.mapNode(C),C.op.startsWith("Placeholder")?o.push(B[C.name]):C.op==="Const"?l.push(B[C.name]):(C.input==null||C.input.length===0)&&c.push(B[C.name]),B),{});let p=[];const d=[];let y={},v={};n!=null&&(y=this.mapSignatureEntries(n.inputs),v=this.mapSignatureEntries(n.outputs));const N=Object.keys(f);N.forEach(B=>{const C=f[B];C.inputNames.forEach((V,lt)=>{const[rt,,Q]=xa(V),tt=f[rt];if(tt.outputs!=null){const it=tt.outputs.indexOf(Q);if(it!==-1){const bt=`${rt}:${it}`;C.inputNames[lt]=bt}}C.inputs.push(tt),tt.children.push(C)})}),Object.keys(v).length===0?N.forEach(B=>{const C=f[B];C.children.length===0&&d.push(C)}):Object.keys(v).forEach(B=>{const[C]=xa(B),V=f[C];V!=null&&(V.signatureKey=v[B],d.push(V))}),Object.keys(y).length>0?Object.keys(y).forEach(B=>{const[C]=xa(B),V=f[C];V&&(V.signatureKey=y[B],p.push(V))}):p=o;let A={};t.library!=null&&t.library.function!=null&&(A=t.library.function.reduce((B,C)=>(B[C.signature.name]=this.mapFunction(C),B),{}));const $={nodes:f,inputs:p,outputs:d,weights:l,placeholders:o,signature:n,functions:A};return c.length>0&&($.initNodes=c),$}mapSignatureEntries(t){return Object.keys(t||{}).reduce((n,s)=>(n[t[s].name]=s,n),{})}mapNode(t){const n=b0(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const s={name:t.name,op:t.op,category:n.category,inputNames:(t.input||[]).map(o=>o.startsWith("^")?o.slice(1):o),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:n.outputs};return n.inputs!=null&&(s.inputParams=n.inputs.reduce((o,l)=>(o[l.name]={type:l.type,inputIndexStart:l.start,inputIndexEnd:l.end},o),{})),n.attrs!=null&&(s.attrParams=n.attrs.reduce((o,l)=>{const c=l.type;let f;switch(l.type){case"string":f=Fh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Fh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"string[]":f=Xh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Xh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"number":f=Hh(t.attr,l.tfName,l.defaultValue||0),f===void 0&&l.tfDeprecatedName&&(f=Hh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"number[]":f=Yh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Yh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"bool":f=Vh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Vh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"bool[]":f=Wh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Wh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"shape":f=Kh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Kh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"shape[]":f=Ph(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Ph(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"dtype":f=Gh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Gh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"dtype[]":f=qh(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=qh(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"func":f=Dm(t.attr,l.tfName,l.defaultValue),f===void 0&&l.tfDeprecatedName&&(f=Dm(t.attr,l.tfDeprecatedName,l.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${l.type} for op: ${t.op}`)}return o[l.name]={value:f,type:c},o},{})),s}mapFunction(t){const n=t.nodeDef,s=[],o=[];let l={};n!=null&&(l=n.reduce((v,N)=>(v[N.name]=this.mapNode(N),N.op==="Const"&&o.push(v[N.name]),v),{}));const c=[],f=[];t.signature.inputArg.forEach(v=>{const[N]=xa(v.name),A={name:N,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:N1(v.type),type:"dtype"}},children:[]};A.signatureKey=v.name,c.push(A),l[N]=A}),Object.keys(l).forEach(v=>{const N=l[v];N.inputNames.forEach((A,$)=>{const[B,,C]=xa(A),V=l[B];if(V.outputs!=null){const lt=V.outputs.indexOf(C);if(lt!==-1){const rt=`${B}:${lt}`;N.inputNames[$]=rt}}N.inputs.push(V),V.children.push(N)})});const d=t.ret;t.signature.outputArg.forEach(v=>{const[N,A]=xa(d[v.name]),$=l[N];$!=null&&($.defaultOutput=A,f.push($))});const y=this.mapArgsToSignature(t);return{nodes:l,inputs:c,outputs:f,weights:o,placeholders:s,signature:y}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((n,s)=>(n[s.name]=this.mapArgToTensorInfo(s),n),{}),outputs:t.signature.outputArg.reduce((n,s)=>(n[s.name]=this.mapArgToTensorInfo(s,t.ret),n),{})}}mapArgToTensorInfo(t,n){let s=t.name;return n!=null&&(s=n[s]),{name:s,dtype:t.type}}}function c_(r){const t=ne().global;if(typeof t.atob<"u")return t.atob(r);if(typeof Buffer<"u")return new Buffer(r,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function v0(r,t){const n=Array.isArray(r)?String.fromCharCode.apply(null,r):c_(r);return t?n:n.toLowerCase()}function Fh(r,t,n,s=!1){const o=r[t];return o!=null?v0(o.s,s):n}function Vh(r,t,n){const s=r[t];return s?s.b:n}function Hh(r,t,n){const s=r[t]||{},o=s.i!=null?s.i:s.f!=null?s.f:n;return typeof o=="number"?o:parseInt(o,10)}function N1(r){switch(typeof r=="string"&&(r=qn[r]),r){case qn.DT_FLOAT:case qn.DT_HALF:return"float32";case qn.DT_INT32:case qn.DT_INT64:case qn.DT_INT8:case qn.DT_UINT8:return"int32";case qn.DT_BOOL:return"bool";case qn.DT_DOUBLE:return"float32";case qn.DT_STRING:return"string";case qn.DT_COMPLEX64:case qn.DT_COMPLEX128:return"complex64";default:return null}}function Dm(r,t,n){const s=r[t];return s&&s.func?s.func.name:n}function Gh(r,t,n){const s=r[t];return s&&s.type?N1(s.type):n}function qh(r,t,n){const s=r[t];return s&&s.list&&s.list.type?s.list.type.map(o=>N1(o)):n}function S0(r){if(!r.unknownRank)return r.dim!=null?r.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function Kh(r,t,n){const s=r[t];return s&&s.shape?S0(s.shape):n}function Yh(r,t,n){const s=r[t];return s?((s.list.f&&s.list.f.length?s.list.f:s.list.i)||[]).map(o=>typeof o=="number"?o:parseInt(o,10)):n}function Xh(r,t,n,s=!1){const o=r[t];return o&&o.list&&o.list.s?o.list.s.map(l=>v0(l,s)):n}function Ph(r,t,n){const s=r[t];return s&&s.list&&s.list.shape?s.list.shape.map(o=>S0(o)):n}function Wh(r,t,n){const s=r[t];return s&&s.list&&s.list.b?s.list.b:n}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class f_{constructor(t,n,s){this.node=t,this.tensorMap=n,this.context=s,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(o=>this.getInput(o)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((o,l)=>(o[l]=this.getAttr(l),o),{}))}getInput(t){return dn(t,this.tensorMap,this.context)}getAttr(t,n){const s=this.node.rawAttrs[t];if(s.tensor!=null)return dn(t,this.tensorMap,this.context);if(s.i!=null||s.f!=null)return Hh(this.node.rawAttrs,t,n);if(s.s!=null)return Fh(this.node.rawAttrs,t,n);if(s.b!=null)return Vh(this.node.rawAttrs,t,n);if(s.shape!=null)return Kh(this.node.rawAttrs,t,n);if(s.type!=null)return Gh(this.node.rawAttrs,t,n);if(s.list!=null){if(s.list.i!=null||s.list.f!=null)return Yh(this.node.rawAttrs,t,n);if(s.list.s!=null)return Xh(this.node.rawAttrs,t,n);if(s.list.shape!=null)return Ph(this.node.rawAttrs,t,n);if(s.list.b!=null)return Wh(this.node.rawAttrs,t,n);if(s.list.type!=null)return qh(this.node.rawAttrs,t,n)}return n}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gn=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:p3,abs:nr,acos:Xv,acosh:Wv,add:Mt,addN:Zv,all:t5,any:n5,argMax:a5,argMin:i5,asin:u5,asinh:c5,atan:h5,atan2:d5,atanh:g5,avgPool:O3,avgPool3d:E5,basicLSTMCell:$5,batchNorm:Zl,batchNorm2d:B5,batchNorm3d:U5,batchNorm4d:j5,batchToSpaceND:k3,bincount:D3,bitwiseAnd:H5,booleanMaskAsync:Cw,broadcastArgs:q5,broadcastTo:Ol,buffer:Ra,cast:De,ceil:X5,clipByValue:$3,clone:Ss,complex:Ns,concat:mn,concat1d:Q5,concat2d:J5,concat3d:e8,concat4d:r8,conv1d:i8,conv2d:Jl,conv2dTranspose:l8,conv3d:f8,conv3dTranspose:m8,cos:y8,cosh:v8,cosineWindow:m1,cumprod:w8,cumsum:N8,denseBincount:_8,depthToSpace:A8,depthwiseConv2d:o1,diag:D8,dilation2d:R8,div:ee,divNoNan:U8,dot:j8,dropout:Kw,einsum:ro,elu:z3,enclosingPowerOfTwo:i0,ensureShape:G8,equal:C3,erf:K8,euclideanNorm:n7,exp:za,expandDims:Tr,expm1:i7,eye:B3,fft:p1,fill:Su,floor:L3,floorDiv:A3,fused:oT,gather:U3,gatherND:Hw,greater:nc,greaterEqual:I3,ifft:ql,imag:rc,image:fo,inTopKAsync:Xw,irfft:t0,isFinite:m7,isInf:y7,isNaN:v7,leakyRelu:j3,less:Uh,lessEqual:u1,linalg:HN,linspace:N7,localResponseNormalization:_7,log:mu,log1p:F3,logSigmoid:R7,logSoftmax:M7,logSumExp:H3,logicalAnd:Vl,logicalNot:G3,logicalOr:q3,logicalXor:F7,losses:GN,lowerBound:H7,matMul:Se,max:so,maxPool:K3,maxPool3d:K7,maxPoolWithArgmax:X7,maximum:Y3,mean:Hl,meshgrid:Q7,min:Lh,minimum:Gl,mirrorPad:t9,mod:n9,moments:a9,movingAverage:Bw,mul:wt,multiRNNCell:i9,multinomial:u9,neg:ra,norm:ec,notEqual:X3,oneHot:f9,ones:li,onesLike:p9,op:j,outerProduct:m9,pad:wu,pad1d:b9,pad2d:S9,pad3d:T9,pad4d:E9,pool:k9,pow:du,prelu:W3,print:x3,prod:R9,raggedGather:z9,raggedRange:B9,raggedTensorToTensor:U9,rand:j9,randomGamma:uS,randomNormal:Q3,randomStandardNormal:fS,randomUniform:h1,randomUniformInt:dS,range:gu,real:yu,reciprocal:yS,relu:ac,relu6:Z3,reshape:ct,reverse:mi,reverse1d:TS,reverse2d:ES,reverse3d:xS,reverse4d:OS,rfft:d1,round:J3,rsqrt:$S,scalar:oe,scatterND:Uw,searchSorted:l1,selu:CS,separableConv2d:MS,setdiff1dAsync:LS,sigmoid:ci,sign:IS,signal:VN,sin:FS,sinh:HS,slice:Pt,slice1d:qS,slice2d:YS,slice3d:PS,slice4d:QS,softmax:JS,softplus:V3,spaceToBatchND:P3,sparse:qN,sparseToDense:Fw,spectral:FN,split:bu,sqrt:Ca,square:Br,squaredDifference:e0,squeeze:on,stack:Ba,step:n0,stridedSlice:cw,string:KN,sub:Wt,sum:ke,tan:hw,tanh:Bh,tensor:na,tensor1d:Nn,tensor2d:Ts,tensor3d:r0,tensor4d:pw,tensor5d:dw,tensor6d:mw,tensorScatterUpdate:bw,tile:cu,topk:Sw,transpose:Ih,truncatedNormal:Tw,unique:Ew,unsortedSegmentSum:xw,unstack:bi,upperBound:Ow,variable:kw,where:ws,whereAsync:s0,zeros:uo,zerosLike:rr},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h_=(r,t,n,s=gn)=>{switch(r.op){case"BiasAdd":case"AddV2":case"Add":return[s.add(S("a",r,t,n),S("b",r,t,n))];case"AddN":return[s.addN(S("tensors",r,t,n))];case"FloorMod":case"Mod":return[s.mod(S("a",r,t,n),S("b",r,t,n))];case"Mul":return[s.mul(S("a",r,t,n),S("b",r,t,n))];case"RealDiv":case"Div":return[s.div(S("a",r,t,n),S("b",r,t,n))];case"DivNoNan":return[s.divNoNan(S("a",r,t,n),S("b",r,t,n))];case"FloorDiv":return[s.floorDiv(S("a",r,t,n),S("b",r,t,n))];case"Sub":return[s.sub(S("a",r,t,n),S("b",r,t,n))];case"Minimum":return[s.minimum(S("a",r,t,n),S("b",r,t,n))];case"Maximum":return[s.maximum(S("a",r,t,n),S("b",r,t,n))];case"Pow":return[s.pow(S("a",r,t,n),S("b",r,t,n))];case"SquaredDifference":return[s.squaredDifference(S("a",r,t,n),S("b",r,t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p_=(r,t,n,s=gn)=>{switch(r.op){case"Abs":case"ComplexAbs":return[s.abs(S("x",r,t,n))];case"Acos":return[s.acos(S("x",r,t,n))];case"Acosh":return[s.acosh(S("x",r,t,n))];case"Asin":return[s.asin(S("x",r,t,n))];case"Asinh":return[s.asinh(S("x",r,t,n))];case"Atan":return[s.atan(S("x",r,t,n))];case"Atan2":return[s.atan2(S("x",r,t,n),S("y",r,t,n))];case"Atanh":return[s.atanh(S("x",r,t,n))];case"Ceil":return[s.ceil(S("x",r,t,n))];case"Complex":return[s.complex(S("real",r,t,n),S("imag",r,t,n))];case"Cos":return[s.cos(S("x",r,t,n))];case"Cosh":return[s.cosh(S("x",r,t,n))];case"Elu":return[s.elu(S("x",r,t,n))];case"Erf":return[s.erf(S("x",r,t,n))];case"Exp":return[s.exp(S("x",r,t,n))];case"Expm1":return[s.expm1(S("x",r,t,n))];case"Floor":return[s.floor(S("x",r,t,n))];case"Log":return[s.log(S("x",r,t,n))];case"Log1p":return[s.log1p(S("x",r,t,n))];case"Imag":return[s.imag(S("x",r,t,n))];case"Neg":return[s.neg(S("x",r,t,n))];case"Reciprocal":return[s.reciprocal(S("x",r,t,n))];case"Real":return[s.real(S("x",r,t,n))];case"Relu":return[s.relu(S("x",r,t,n))];case"Round":return[s.round(S("x",r,t,n))];case"Selu":return[s.selu(S("x",r,t,n))];case"Sigmoid":return[s.sigmoid(S("x",r,t,n))];case"Sin":return[s.sin(S("x",r,t,n))];case"Sign":return[s.sign(S("x",r,t,n))];case"Sinh":return[s.sinh(S("x",r,t,n))];case"Softplus":return[s.softplus(S("x",r,t,n))];case"Sqrt":return[s.sqrt(S("x",r,t,n))];case"Square":return[s.square(S("x",r,t,n))];case"Tanh":return[s.tanh(S("x",r,t,n))];case"Tan":return[s.tan(S("x",r,t,n))];case"ClipByValue":return[s.clipByValue(S("x",r,t,n),S("clipValueMin",r,t,n),S("clipValueMax",r,t,n))];case"Relu6":return[s.relu6(S("x",r,t,n))];case"Rsqrt":return[s.rsqrt(dn(r.inputNames[0],t,n))];case"LeakyRelu":return[s.leakyRelu(S("x",r,t,n),S("alpha",r,t,n))];case"Prelu":return[s.prelu(S("x",r,t,n),S("alpha",r,t,n))];case"IsNan":return[s.isNaN(dn(r.inputNames[0],t,n))];case"IsInf":return[s.isInf(dn(r.inputNames[0],t,n))];case"IsFinite":return[s.isFinite(dn(r.inputNames[0],t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sr(r,t,n=""){if(!(typeof r=="number"||typeof t=="number")){L(r.length===t.length,()=>n+` Shapes ${r} and ${t} must match`);for(let s=0;s<r.length;s++){const o=r[s],l=t[s];L(o<0||l<0||o===l,()=>n+` Shapes ${r} and ${t} must match`)}}}function $m(r){return!(typeof r=="number"||r.some(t=>t<0))}function ou(r,t,n){let s=Qh(r,n);const o=!$m(s);if(o&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${s}`);if(o&&t.forEach(l=>{s=Qh(l.shape,s)}),!$m(s))throw new Error(`Non-fully-defined elementShape: ${s}`);return s}function Qh(r,t){if(typeof r=="number")return t;if(typeof t=="number")return r;if(r.length!==t.length)throw new Error(`Incompatible ranks during merge: ${r} vs. ${t}`);const n=[];for(let s=0;s<r.length;++s){const o=r[s],l=t[s];if(o>=0&&l>=0&&o!==l)throw new Error(`Incompatible shape during merge: ${r} vs. ${t}`);n[s]=o>=0?o:l}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class d_{constructor(t,n,s,o,l,c,f){this.name=t,this.dtype=n,this.maxSize=s,this.elementShape=o,this.identicalElementShapes=l,this.dynamicSize=c,this.clearAfterRead=f,this.tensors=[],this.closed_=!1,this.idTensor=oe(0),ea(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const n=this.tensors[t];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(t){return t.map(n=>this.read(n))}write(t,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const s=this.tensors[t]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),Sr(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),s.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(s.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);s.tensor=n,ea(n),s.written=!0,this.tensors[t]=s}writeMany(t,n){if(t.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${n.length}.`);t.forEach((s,o)=>this.write(s,n[o]))}gather(t,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(t)t=t.slice(0,this.size());else{t=[];for(let o=0;o<this.size();o++)t.push(o)}if(t.length===0)return na([],[0].concat(this.elementShape));const s=this.readMany(t);return Sr(this.elementShape,s[0].shape,"TensorArray shape mismatch: "),Ba(s,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return na([],[0].concat(this.elementShape));const n=[];for(let o=0;o<this.size();o++)n.push(o);const s=this.readMany(n);return Sr(this.elementShape,s[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${s[0].shape})`),mn(s,0)}scatter(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(t.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${n.shape[0]}`);const s=Math.max(...t);if(!this.dynamicSize&&s>=this.maxSize)throw new Error(`Max index must be < array size (${s}  vs. ${this.maxSize})`);this.writeMany(t,bi(n,0))}split(t,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let s=0;const o=t.map(p=>(s+=p,s));if(s!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${s}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const l=s===0?0:n.size/s,c=[];Zt(()=>{n=ct(n,[1,s,l]);for(let p=0;p<t.length;++p){const y=[0,p===0?0:o[p-1],0],v=[1,t[p],l];c[p]=ct(Pt(n,y,v),this.elementShape)}return c});const f=[];for(let p=0;p<t.length;p++)f[p]=p;this.writeMany(f,c)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yi{get id(){return this.idTensor.id}constructor(t,n,s,o=-1){this.tensors=t,this.elementShape=n,this.elementDtype=s,t?.forEach(l=>{if(s!==l.dtype)throw new Error(`Invalid data types; op elements ${s}, but list elements ${l.dtype}`);Sr(n,l.shape,"TensorList shape mismatch: "),ea(l)}),this.idTensor=oe(0),this.maxNumElements=o,ea(this.idTensor)}copy(){return new yi([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(n=>{(t==null||!t.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,n,s=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(s!==-1&&this.tensors.length!==s)throw new Error(`Operation expected a list with ${s} elements but got a list with ${this.tensors.length} elements.`);Sr(t,this.elementShape,"TensorList shape mismatch: ");const o=ou(this.elementShape,this.tensors,t);return Zt(()=>{const l=this.tensors.map(c=>ct(c,o));return Ba(l,0)})}popBack(t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const s=ou(this.elementShape,this.tensors,t),o=this.tensors.pop();return o.kept=!1,Sr(o.shape,t,"TensorList shape mismatch: "),ct(o,s)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(Sr(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");ea(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const n=new yi([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=t;for(let s=0;s<Math.min(this.tensors.length,t);++s)n.tensors[s]=this.tensors[s];return n}getItem(t,n,s){if(s!==this.elementDtype)throw new Error(`Invalid data types; op elements ${s}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);Sr(this.tensors[t].shape,n,"TensorList shape mismatch: ");const o=ou(this.elementShape,this.tensors,n);return ct(this.tensors[t],o)}setItem(t,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);Sr(this.elementShape,n.shape,"TensorList shape mismatch: "),ea(n),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=n}gather(t,n,s){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);Sr(this.elementShape,s,"TensorList shape mismatch: "),t=t.slice(0,this.size());const o=ou(this.elementShape,this.tensors,s);return t.length===0?na([],[0].concat(o)):Zt(()=>{const l=t.map(c=>ct(this.tensors[c],o));return Ba(l,0)})}concat(t,n){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);Sr(this.elementShape,n,"TensorList shape mismatch: ");const s=ou(this.elementShape,this.tensors,n);return this.size()===0?na([],[0].concat(s)):Zt(()=>{const o=this.tensors.map(l=>ct(l,s));return mn(o,0)})}}function m_(r,t,n){const s=r.dtype;if(r.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${r.shape}`);if(r.dtype!==n)throw new Error(`Invalid data types; op elements ${r.dtype}, but list elements ${n}`);const o=r.shape.slice(1);Sr(o,t,"TensorList shape mismatch: ");const l=bi(r);return new yi(l,t,s)}function g_(r,t,n,s){return new yi([],r,t,s)}function y_(r,t,n,s){if(t.length!==r.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${r.shape[0]}`);const o=Math.max(...t);if(s!=null&&s!==-1&&o>=s)throw new Error(`Max index must be < array size (${o}  vs. ${s})`);const l=new yi([],n,r.dtype,s),c=bi(r,0);return t.forEach((f,p)=>{l.setItem(f,c[p])}),l}function b_(r,t,n){let s=0;const o=t.map(y=>(s+=y,s));if(s!==r.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${s}, and tensor's shape is: ${r.shape}`);const l=r.shape.slice(1),c=Qh(l,n),f=s===0?0:r.size/s,p=Zt(()=>{const y=[];r=ct(r,[1,s,f]);for(let v=0;v<t.length;++v){const A=[0,v===0?0:o[v-1],0],$=[1,t[v],f];y[v]=ct(Pt(r,A,$),c)}return r.dispose(),y}),d=new yi([],n,r.dtype,t.length);for(let y=0;y<p.length;y++)d.setItem(y,p[y]);return d}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const v_=async(r,t,n)=>{switch(r.op){case"If":case"StatelessIf":{const s=S("thenBranch",r,t,n),o=S("elseBranch",r,t,n),l=S("cond",r,t,n),c=S("args",r,t,n);return(await l.data())[0]?n.functionMap[s].executeFunctionAsync(c,n.tensorArrayMap,n.tensorListMap):n.functionMap[o].executeFunctionAsync(c,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const s=S("body",r,t,n),o=S("cond",r,t,n),l=S("args",r,t,n),c=await n.functionMap[o].executeFunctionAsync(l,n.tensorArrayMap,n.tensorListMap),f=l.map(y=>y.id);let p=await c[0].data();c.forEach(y=>{!y.kept&&f.indexOf(y.id)===-1&&y.dispose()});let d=l;for(;p[0];){const y=d;d=await n.functionMap[s].executeFunctionAsync(d,n.tensorArrayMap,n.tensorListMap);const v=d.map(A=>A.id);y.forEach(A=>{!A.kept&&f.indexOf(A.id)===-1&&v.indexOf(A.id)===-1&&A.dispose()});const N=await n.functionMap[o].executeFunctionAsync(d,n.tensorArrayMap,n.tensorListMap);p=await N[0].data(),N.forEach(A=>{!A.kept&&f.indexOf(A.id)===-1&&v.indexOf(A.id)===-1&&A.dispose()})}return d}case"LoopCond":{const s=S("pred",r,t,n);return[Aa(s)]}case"Switch":{const s=S("pred",r,t,n);let o=S("data",r,t,n);return o.kept||(o=Aa(o)),(await s.data())[0]?[void 0,o]:[o,void 0]}case"Merge":{const s=r.inputNames.find(o=>dn(o,t,n)!==void 0);if(s){const o=dn(s,t,n);return[Aa(o)]}return}case"Enter":{const s=S("frameName",r,t,n),o=S("tensor",r,t,n);return n.enterFrame(s),[Aa(o)]}case"Exit":{const s=S("tensor",r,t,n);return n.exitFrame(),[Aa(s)]}case"NextIteration":{const s=S("tensor",r,t,n);return n.nextIteration(),[Aa(s)]}case"TensorArrayV3":{const s=S("size",r,t,n),o=S("dtype",r,t,n),l=S("elementShape",r,t,n),c=S("dynamicSize",r,t,n),f=S("clearAfterRead",r,t,n),p=S("identicalElementShapes",r,t,n),d=S("name",r,t,n),y=new d_(d,o,s,l,p,c,f);return n.addTensorArray(y),[y.idTensor,oe(1)]}case"TensorArrayWriteV3":{const s=S("tensorArrayId",r,t,n),o=S("index",r,t,n),l=S("tensor",r,t,n),c=n.getTensorArray(s.id);return c.write(o,l),[c.idTensor]}case"TensorArrayReadV3":{const s=S("tensorArrayId",r,t,n),o=S("index",r,t,n);return[n.getTensorArray(s.id).read(o)]}case"TensorArrayGatherV3":{const s=S("tensorArrayId",r,t,n),o=S("indices",r,t,n),l=S("dtype",r,t,n);return[n.getTensorArray(s.id).gather(o,l)]}case"TensorArrayScatterV3":{const s=S("tensorArrayId",r,t,n),o=S("indices",r,t,n),l=S("tensor",r,t,n),c=n.getTensorArray(s.id);return c.scatter(o,l),[c.idTensor]}case"TensorArrayConcatV3":{const s=S("tensorArrayId",r,t,n),o=n.getTensorArray(s.id),l=S("dtype",r,t,n);return[o.concat(l)]}case"TensorArraySplitV3":{const s=S("tensorArrayId",r,t,n),o=S("tensor",r,t,n),l=S("lengths",r,t,n),c=n.getTensorArray(s.id);return c.split(l,o),[c.idTensor]}case"TensorArraySizeV3":{const s=S("tensorArrayId",r,t,n),o=n.getTensorArray(s.id);return[oe(o.size(),"int32")]}case"TensorArrayCloseV3":{const s=S("tensorArrayId",r,t,n),o=n.getTensorArray(s.id);return o.clearAndClose(),[o.idTensor]}case"TensorListSetItem":{const s=S("tensorListId",r,t,n),o=S("index",r,t,n),l=S("tensor",r,t,n),c=n.getTensorList(s.id);return c.setItem(o,l),[c.idTensor]}case"TensorListGetItem":{const s=S("tensorListId",r,t,n),o=S("index",r,t,n),l=S("elementShape",r,t,n),c=S("elementDType",r,t,n);return[n.getTensorList(s.id).getItem(o,l,c)]}case"TensorListScatterV2":case"TensorListScatter":{const s=S("indices",r,t,n),o=S("tensor",r,t,n),l=S("elementShape",r,t,n),c=S("numElements",r,t,n),f=y_(o,s,l,c);return n.addTensorList(f),[f.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const s=S("elementShape",r,t,n),o=S("elementDType",r,t,n);let l;r.op==="TensorListReserve"?l="numElements":l="maxNumElements";const c=S(l,r,t,n),f=r.op==="TensorListReserve"?-1:c,p=g_(s,o,c,f);return n.addTensorList(p),[p.idTensor]}case"TensorListGather":{const s=S("tensorListId",r,t,n),o=S("indices",r,t,n),l=S("elementShape",r,t,n),c=S("elementDType",r,t,n);return[n.getTensorList(s.id).gather(o,c,l)]}case"TensorListStack":{const s=S("tensorListId",r,t,n),o=S("elementShape",r,t,n),l=S("elementDType",r,t,n),c=S("numElements",r,t,n);return[n.getTensorList(s.id).stack(o,l,c)]}case"TensorListFromTensor":{const s=S("tensor",r,t,n),o=S("elementShape",r,t,n),l=S("elementDType",r,t,n),c=m_(s,o,l);return n.addTensorList(c),[c.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const s=S("tensorListId",r,t,n),o=n.getTensorList(s.id),l=S("dtype",r,t,n),c=S("elementShape",r,t,n);return[o.concat(l,c)]}case"TensorListPushBack":{const s=S("tensorListId",r,t,n),o=S("tensor",r,t,n),l=n.getTensorList(s.id);return l.pushBack(o),[l.idTensor]}case"TensorListPopBack":{const s=S("tensorListId",r,t,n),o=S("elementShape",r,t,n),l=S("elementDType",r,t,n);return[n.getTensorList(s.id).popBack(o,l)]}case"TensorListSplit":{const s=S("tensor",r,t,n),o=S("elementShape",r,t,n),l=S("lengths",r,t,n),c=b_(s,l,o);return n.addTensorList(c),[c.idTensor]}case"TensorListLength":{const s=S("tensorListId",r,t,n),o=n.getTensorList(s.id);return[oe(o.size(),"int32")]}case"TensorListResize":{const s=S("tensorListId",r,t,n),o=S("size",r,t,n),c=n.getTensorList(s.id).resize(o);return n.addTensorList(c),[c.idTensor]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rm(r,t,n){const[s,o]=S("fusedOps",r,t,n),l=s==="biasadd",c=!l,f=o==="prelu",p=s==="fusedbatchnorm",d=S("numArgs",r,t,n);if(l){if(f&&d!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!f&&l&&d!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(p)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const y=S("strides",r,t,n),v=Bl(r,t,n),N=S("dataFormat",r,t,n).toUpperCase(),A=S("dilations",r,t,n);let[$,B]=S("args",r,t,n);c&&(B=$,$=void 0);const C=S("leakyreluAlpha",r,t,n);return{stride:y,pad:v,dataFormat:N,dilations:A,biasArg:$,preluArg:B,activationFunc:o,leakyreluAlpha:C}}const S_=(r,t,n,s=gn)=>{switch(r.op){case"Conv1D":{const o=S("stride",r,t,n),l=S("pad",r,t,n),c=S("dataFormat",r,t,n).toUpperCase(),f=S("dilation",r,t,n);return[s.conv1d(S("x",r,t,n),S("filter",r,t,n),o,l,c,f)]}case"Conv2D":{const o=S("strides",r,t,n),l=Bl(r,t,n),c=S("dataFormat",r,t,n).toUpperCase(),f=S("dilations",r,t,n);return[s.conv2d(S("x",r,t,n),S("filter",r,t,n),[o[1],o[2]],l,c,[f[1],f[2]])]}case"_FusedConv2D":{const{stride:o,pad:l,dataFormat:c,dilations:f,biasArg:p,preluArg:d,activationFunc:y,leakyreluAlpha:v}=Rm(r,t,n);return[s.fused.conv2d({x:S("x",r,t,n),filter:S("filter",r,t,n),strides:[o[1],o[2]],pad:l,dataFormat:c,dilations:[f[1],f[2]],bias:p,activation:y,preluActivationWeights:d,leakyreluAlpha:v})]}case"FusedDepthwiseConv2dNative":{const{stride:o,pad:l,dataFormat:c,dilations:f,biasArg:p,preluArg:d,activationFunc:y,leakyreluAlpha:v}=Rm(r,t,n);return[s.fused.depthwiseConv2d({x:S("x",r,t,n),filter:S("filter",r,t,n),strides:[o[1],o[2]],pad:l,dataFormat:c,dilations:[f[1],f[2]],bias:p,activation:y,preluActivationWeights:d,leakyreluAlpha:v})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const o=S("outputShape",r,t,n),l=S("strides",r,t,n),c=Bl(r,t,n);return[s.conv2dTranspose(S("x",r,t,n),S("filter",r,t,n),o,[l[1],l[2]],c)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const o=S("strides",r,t,n),l=Bl(r,t,n),c=S("dilations",r,t,n),f=S("dataFormat",r,t,n).toUpperCase();return[s.depthwiseConv2d(S("input",r,t,n),S("filter",r,t,n),[o[1],o[2]],l,f,[c[1],c[2]])]}case"Conv3D":{const o=S("strides",r,t,n),l=S("pad",r,t,n),c=S("dataFormat",r,t,n).toUpperCase(),f=S("dilations",r,t,n);return[s.conv3d(S("x",r,t,n),S("filter",r,t,n),[o[1],o[2],o[3]],l,c,[f[1],f[2],f[3]])]}case"AvgPool":{const o=S("strides",r,t,n),l=S("pad",r,t,n),c=S("kernelSize",r,t,n);return[s.avgPool(S("x",r,t,n),[c[1],c[2]],[o[1],o[2]],l)]}case"MaxPool":{const o=S("strides",r,t,n),l=S("pad",r,t,n),c=S("kernelSize",r,t,n);return[s.maxPool(S("x",r,t,n),[c[1],c[2]],[o[1],o[2]],l)]}case"MaxPoolWithArgmax":{const o=S("strides",r,t,n),l=S("pad",r,t,n),c=S("kernelSize",r,t,n),f=S("includeBatchInIndex",r,t,n),{result:p,indexes:d}=s.maxPoolWithArgmax(S("x",r,t,n),[c[1],c[2]],[o[1],o[2]],l,f);return[p,d]}case"AvgPool3D":{const o=S("strides",r,t,n),l=S("pad",r,t,n),c=S("kernelSize",r,t,n);return[s.avgPool3d(S("x",r,t,n),[c[1],c[2],c[3]],[o[1],o[2],o[3]],l)]}case"MaxPool3D":{const o=S("strides",r,t,n),l=S("pad",r,t,n),c=S("kernelSize",r,t,n);return[s.maxPool3d(S("x",r,t,n),[c[1],c[2],c[3]],[o[1],o[2],o[3]],l)]}case"Dilation2D":{const o=S("strides",r,t,n),l=S("pad",r,t,n),c=S("dilations",r,t,n),f=o[1],p=o[2],d=c[1],y=c[2];return[s.dilation2d(S("x",r,t,n),S("filter",r,t,n),[f,p],l,[d,y],"NHWC")]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const w_=(r,t,n,s=gn)=>{switch(r.op){case"Fill":{const o=S("shape",r,t,n),l=S("dtype",r,t,n),c=S("value",r,t,n);return[s.fill(o,c,l)]}case"LinSpace":{const o=S("start",r,t,n),l=S("stop",r,t,n),c=S("num",r,t,n);return[s.linspace(o,l,c)]}case"Multinomial":{const o=S("logits",r,t,n),l=S("numSamples",r,t,n),c=S("seed",r,t,n);return[s.multinomial(o,l,c)]}case"OneHot":{const o=S("indices",r,t,n),l=S("depth",r,t,n),c=S("onValue",r,t,n),f=S("offValue",r,t,n),p=S("dtype",r,t,n);return[s.oneHot(o,l,c,f,p)]}case"Ones":return[s.ones(S("shape",r,t,n),S("dtype",r,t,n))];case"OnesLike":return[s.onesLike(S("x",r,t,n))];case"RandomStandardNormal":return[s.randomStandardNormal(S("shape",r,t,n),S("dtype",r,t,n),S("seed",r,t,n))];case"RandomUniform":return[s.randomUniform(S("shape",r,t,n),S("minval",r,t,n),S("maxval",r,t,n),S("dtype",r,t,n))];case"RandomUniformInt":return[s.randomUniformInt(S("shape",r,t,n),S("minval",r,t,n),S("maxval",r,t,n),S("seed",r,t,n))];case"Range":{const o=S("start",r,t,n),l=S("stop",r,t,n),c=S("step",r,t,n);return[s.range(o,l,c,S("dtype",r,t,n))]}case"TruncatedNormal":{const o=S("shape",r,t,n),l=S("mean",r,t,n),c=S("stdDev",r,t,n),f=S("seed",r,t,n);return[s.truncatedNormal(o,l,c,S("dtype",r,t,n),f)]}case"Zeros":return[s.zeros(S("shape",r,t,n),S("dtype",r,t,n))];case"ZerosLike":return[s.zerosLike(S("x",r,t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hh(r,t,n){const s=S("boxes",r,t,n),o=S("scores",r,t,n),l=S("maxOutputSize",r,t,n),c=S("iouThreshold",r,t,n),f=S("scoreThreshold",r,t,n),p=S("softNmsSigma",r,t,n);return{boxes:s,scores:o,maxOutputSize:l,iouThreshold:c,scoreThreshold:f,softNmsSigma:p}}const T_=async(r,t,n,s,o=gn)=>{switch(r.op){case"NonMaxSuppressionV5":{const{boxes:l,scores:c,maxOutputSize:f,iouThreshold:p,scoreThreshold:d,softNmsSigma:y}=hh(r,t,n),v=await o.image.nonMaxSuppressionWithScoreAsync(l,c,f,p,d,y);return[v.selectedIndices,v.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:l,scores:c,maxOutputSize:f,iouThreshold:p,scoreThreshold:d}=hh(r,t,n),y=S("padToMaxOutputSize",r,t,n),v=await o.image.nonMaxSuppressionPaddedAsync(l,c,f,p,d,y);return[v.selectedIndices,v.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:l,scores:c,maxOutputSize:f,iouThreshold:p,scoreThreshold:d}=hh(r,t,n);return[await o.image.nonMaxSuppressionAsync(l,c,f,p,d)]}case"Where":{const l=o.cast(S("condition",r,t,n),"bool"),c=[await o.whereAsync(l)];return l.dispose(),c}case"ListDiff":return o.setdiff1dAsync(S("x",r,t,n),S("y",r,t,n));default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N_=(r,t,n,s=gn)=>{switch(r.op){case"LowerBound":{const o=S("sortedSequence",r,t,n),l=S("values",r,t,n);return[s.lowerBound(o,l)]}case"TopKV2":{const o=S("x",r,t,n),l=S("k",r,t,n),c=S("sorted",r,t,n),f=s.topk(o,l,c);return[f.values,f.indices]}case"UpperBound":{const o=S("sortedSequence",r,t,n),l=S("values",r,t,n);return[s.upperBound(o,l)]}case"Unique":{const o=S("x",r,t,n),l=s.unique(o);return[l.values,l.indices]}case"UniqueV2":{const o=S("x",r,t,n),l=S("axis",r,t,n),c=s.unique(o,l);return[c.values,c.indices]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E_=(r,t,n,s=gn)=>{switch(r.op){case"Const":return t[r.name];case"PlaceholderWithDefault":const o=S("default",r,t,n);return[dn(r.name,t,n)||o];case"Placeholder":return[dn(r.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const y=S("x",r,t,n);return[Aa(y)]}case"IdentityN":return S("x",r,t,n).map(y=>Aa(y));case"Snapshot":const l=S("x",r,t,n);return[Aa(l)];case"Shape":return[s.tensor1d(S("x",r,t,n).shape,"int32")];case"ShapeN":return S("x",r,t,n).map(y=>s.tensor1d(y.shape));case"Size":return[s.scalar(S("x",r,t,n).size,"int32")];case"Rank":return[s.scalar(S("x",r,t,n).rank,"int32")];case"NoOp":return[s.scalar(1)];case"Print":const c=S("x",r,t,n),f=S("data",r,t,n),p=S("message",r,t,n),d=S("summarize",r,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(p);for(let y=0;y<f.length;y++)console.log(Array.prototype.slice.call(f[y].dataSync()).slice(0,d));return[c];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class __{get id(){return this.handle.id}constructor(t,n){this.keyDType=t,this.valueDType=n,this.handle=oe(0),this.tensorMap=new Map,ea(this.handle)}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return oe(this.size(),"int32")}async import(t,n){this.checkKeyAndValueTensor(t,n);const s=await t.data();return this.tensorMap.forEach(o=>o.dispose()),this.tensorMap.clear(),Zt(()=>{const o=bi(n),l=s.length,c=o.length;L(l===c,()=>`The number of elements doesn't match, keys has ${l} elements, the values has ${c} elements.`);for(let f=0;f<l;f++){const p=s[f],d=o[f];ea(d),this.tensorMap.set(p,d)}return this.handle})}async find(t,n){this.checkKeyAndValueTensor(t,n);const s=await t.data();return Zt(()=>{const o=[];for(let l=0;l<s.length;l++){const c=s[l],f=this.findWithDefault(c,n);o.push(f)}return Ba(o)})}findWithDefault(t,n){const s=this.tensorMap.get(t);return s??n}checkKeyAndValueTensor(t,n){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x_=async(r,t,n,s)=>{switch(r.op){case"HashTable":case"HashTableV2":{const o=s.getHashTableHandleByName(r.name);if(o!=null)return[o];{const l=S("keyDType",r,t,n),c=S("valueDType",r,t,n),f=new __(l,c);return s.addHashTable(r.name,f),[f.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const o=S("tableHandle",r,t,n,s),l=S("keys",r,t,n),c=S("values",r,t,n);return[await s.getHashTableById(o.id).import(l,c)]}case"LookupTableFind":case"LookupTableFindV2":{const o=S("tableHandle",r,t,n,s),l=S("keys",r,t,n),c=S("defaultValue",r,t,n);return[await s.getHashTableById(o.id).find(l,c)]}case"LookupTableSize":case"LookupTableSizeV2":{const o=S("tableHandle",r,t,n,s);return[s.getHashTableById(o.id).tensorSize()]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A_=(r,t,n,s=gn)=>{switch(r.op){case"ResizeBilinear":{const o=S("images",r,t,n),l=S("size",r,t,n),c=S("alignCorners",r,t,n),f=S("halfPixelCenters",r,t,n);return[s.image.resizeBilinear(o,[l[0],l[1]],c,f)]}case"ResizeNearestNeighbor":{const o=S("images",r,t,n),l=S("size",r,t,n),c=S("alignCorners",r,t,n),f=S("halfPixelCenters",r,t,n);return[s.image.resizeNearestNeighbor(o,[l[0],l[1]],c,f)]}case"CropAndResize":{const o=S("image",r,t,n),l=S("boxes",r,t,n),c=S("boxInd",r,t,n),f=S("cropSize",r,t,n),p=S("method",r,t,n),d=S("extrapolationValue",r,t,n);return[s.image.cropAndResize(o,l,c,f,p,d)]}case"ImageProjectiveTransformV3":{const o=S("images",r,t,n),l=S("transforms",r,t,n),c=S("outputShape",r,t,n),f=S("fillValue",r,t,n),p=S("interpolation",r,t,n),d=S("fillMode",r,t,n);return[s.image.transform(o,l,p.toLowerCase(),d.toLowerCase(),f,c)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O_=(r,t,n,s=gn)=>{switch(r.op){case"Equal":return[s.equal(S("a",r,t,n),S("b",r,t,n))];case"NotEqual":return[s.notEqual(S("a",r,t,n),S("b",r,t,n))];case"Greater":return[s.greater(S("a",r,t,n),S("b",r,t,n))];case"GreaterEqual":return[s.greaterEqual(S("a",r,t,n),S("b",r,t,n))];case"Less":return[s.less(S("a",r,t,n),S("b",r,t,n))];case"LessEqual":return[s.lessEqual(S("a",r,t,n),S("b",r,t,n))];case"LogicalAnd":return[s.logicalAnd(S("a",r,t,n),S("b",r,t,n))];case"LogicalNot":return[s.logicalNot(S("a",r,t,n))];case"LogicalOr":return[s.logicalOr(S("a",r,t,n),S("b",r,t,n))];case"Select":case"SelectV2":return[s.where(S("condition",r,t,n),S("a",r,t,n),S("b",r,t,n))];case"BitwiseAnd":return[s.bitwiseAnd(S("a",r,t,n),S("b",r,t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const k_=(r,t,n,s=gn)=>{switch(r.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[s.matMul(S("a",r,t,n),S("b",r,t,n),S("transposeA",r,t,n),S("transposeB",r,t,n))];case"Einsum":return[s.einsum(S("equation",r,t,n),...S("tensors",r,t,n))];case"Transpose":return[s.transpose(S("x",r,t,n),S("perm",r,t,n))];case"_FusedMatMul":const[o,l]=S("fusedOps",r,t,n),c=o==="biasadd",f=l==="prelu",p=S("numArgs",r,t,n),d=S("leakyreluAlpha",r,t,n);if(c){if(f&&p!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!f&&p!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[y,v]=S("args",r,t,n);return[s.fused.matMul({a:S("a",r,t,n),b:S("b",r,t,n),transposeA:S("transposeA",r,t,n),transposeB:S("transposeB",r,t,n),bias:y,activation:l,preluActivationWeights:v,leakyreluAlpha:d})];case"MatrixBandPart":return[s.linalg.bandPart(S("a",r,t,n),S("numLower",r,t,n),S("numUpper",r,t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D_=(r,t,n,s=gn)=>{switch(r.op){case"EuclideanNorm":return[s.euclideanNorm(S("x",r,t,n),S("axis",r,t,n),S("keepDims",r,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[s.batchNorm(S("x",r,t,n),S("mean",r,t,n),S("variance",r,t,n),S("offset",r,t,n),S("scale",r,t,n),S("epsilon",r,t,n))];case"FusedBatchNormV3":return[s.batchNorm(S("x",r,t,n),S("mean",r,t,n),S("variance",r,t,n),S("offset",r,t,n),S("scale",r,t,n),S("epsilon",r,t,n))];case"LRN":return[s.localResponseNormalization(S("x",r,t,n),S("radius",r,t,n),S("bias",r,t,n),S("alpha",r,t,n),S("beta",r,t,n))];case"Softmax":return[s.softmax(S("x",r,t,n))];case"LogSoftmax":return[s.logSoftmax(S("x",r,t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $_=(r,t,n,s=gn)=>{switch(r.op){case"RaggedGather":{const{outputNestedSplits:o,outputDenseValues:l}=s.raggedGather(S("paramsNestedSplits",r,t,n),S("paramsDenseValues",r,t,n),S("indices",r,t,n),S("outputRaggedRank",r,t,n));return o.concat(l)}case"RaggedRange":{const{rtNestedSplits:o,rtDenseValues:l}=s.raggedRange(S("starts",r,t,n),S("limits",r,t,n),S("splits",r,t,n));return[o,l]}case"RaggedTensorToTensor":return[s.raggedTensorToTensor(S("shape",r,t,n),S("values",r,t,n),S("defaultValue",r,t,n),S("rowPartitionTensors",r,t,n),S("rowPartitionTypes",r,t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const R_=(r,t,n,s=gn)=>{switch(r.op){case"Max":{const f=S("axis",r,t,n),p=S("keepDims",r,t,n);return[s.max(S("x",r,t,n),f,p)]}case"Mean":{const f=S("axis",r,t,n),p=S("keepDims",r,t,n);return[s.mean(S("x",r,t,n),f,p)]}case"Min":{const f=S("axis",r,t,n),p=S("keepDims",r,t,n);return[s.min(S("x",r,t,n),f,p)]}case"Sum":{const f=S("axis",r,t,n),p=S("keepDims",r,t,n);return[s.sum(S("x",r,t,n),f,p)]}case"All":{const f=S("axis",r,t,n),p=S("keepDims",r,t,n);return[s.all(S("x",r,t,n),f,p)]}case"Any":{const f=S("axis",r,t,n),p=S("keepDims",r,t,n);return[s.any(S("x",r,t,n),f,p)]}case"ArgMax":{const f=S("axis",r,t,n);return[s.argMax(S("x",r,t,n),f)]}case"ArgMin":{const f=S("axis",r,t,n);return[s.argMin(S("x",r,t,n),f)]}case"Prod":{const f=S("axis",r,t,n),p=S("keepDims",r,t,n);return[s.prod(S("x",r,t,n),f,p)]}case"Cumprod":{const f=S("axis",r,t,n),p=S("exclusive",r,t,n),d=S("reverse",r,t,n);return[s.cumprod(S("x",r,t,n),f,p,d)]}case"Cumsum":{const f=S("axis",r,t,n),p=S("exclusive",r,t,n),d=S("reverse",r,t,n);return[s.cumsum(S("x",r,t,n),f,p,d)]}case"Bincount":const o=S("x",r,t,n),l=S("weights",r,t,n),c=S("size",r,t,n);return[s.bincount(o,l,c)];case"DenseBincount":{const f=S("x",r,t,n),p=S("weights",r,t,n),d=S("size",r,t,n),y=S("binaryOutput",r,t,n);return[s.denseBincount(f,p,d,y)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const C_=(r,t,n,s=gn)=>{switch(r.op){case"ConcatV2":case"Concat":{const o=S("n",r,t,n),l=S("axis",r,t,n);let c=S("tensors",r,t,n);return c=c.slice(0,o),[s.concat(c,l)]}case"Gather":{const o=S("x",r,t,n),l=S("indices",r,t,n);return[s.gather(o,s.cast(l,"int32"),0)]}case"GatherV2":{const o=S("axis",r,t,n),l=S("batchDims",r,t,n),c=S("x",r,t,n),f=S("indices",r,t,n);return[s.gather(c,s.cast(f,"int32"),o,l)]}case"Reverse":{const o=S("dims",r,t,n),l=[];for(let f=0;f<o.length;f++)o[f]&&l.push(f);const c=S("x",r,t,n);return[s.reverse(c,l)]}case"ReverseV2":{const o=S("axis",r,t,n),l=S("x",r,t,n);return[s.reverse(l,o)]}case"Slice":{const o=S("begin",r,t,n),l=S("size",r,t,n);return[s.slice(S("x",r,t,n),o,l)]}case"StridedSlice":{const o=S("begin",r,t,n),l=S("end",r,t,n),c=S("strides",r,t,n),f=S("beginMask",r,t,n),p=S("endMask",r,t,n),d=S("ellipsisMask",r,t,n),y=S("newAxisMask",r,t,n),v=S("shrinkAxisMask",r,t,n),N=S("x",r,t,n);return[s.stridedSlice(N,o,l,c,f,p,d,y,v)]}case"Pack":return Zt(()=>{const o=S("axis",r,t,n),l=S("tensors",r,t,n),c=l[0].shape,f=s.squeeze(l[0]).shape,p=l.map(d=>{const y=$a(d.shape,c);if(!y&&!$a(s.squeeze(d).shape,f))throw new Error("the input tensors shape does not match");return y?d:s.reshape(d,c)});return[s.stack(p,o)]});case"Unpack":{const o=S("axis",r,t,n),l=S("tensor",r,t,n);return s.unstack(l,o)}case"Tile":{const o=S("reps",r,t,n);return[s.tile(S("x",r,t,n),o)]}case"Split":case"SplitV":{const o=S("axis",r,t,n),l=S("numOrSizeSplits",r,t,n),c=S("x",r,t,n);return s.split(c,l,o)}case"ScatterNd":{const o=S("indices",r,t,n),l=S("values",r,t,n),c=S("shape",r,t,n);return[s.scatterND(o,l,c)]}case"GatherNd":{const o=S("x",r,t,n),l=S("indices",r,t,n);return[s.gatherND(o,l)]}case"SparseToDense":{const o=S("sparseIndices",r,t,n),l=S("outputShape",r,t,n),c=S("sparseValues",r,t,n),f=S("defaultValue",r,t,n);return[s.sparseToDense(o,c,l,c.dtype===f.dtype?f:s.cast(f,c.dtype))]}case"TensorScatterUpdate":{const o=S("indices",r,t,n),l=S("values",r,t,n),c=S("tensor",r,t,n);return[s.tensorScatterUpdate(c,o,l)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z_=(r,t,n,s=gn)=>{switch(r.op){case"SparseFillEmptyRows":{const{outputIndices:o,outputValues:l,emptyRowIndicator:c,reverseIndexMap:f}=s.sparse.sparseFillEmptyRows(S("indices",r,t,n),S("values",r,t,n),S("denseShape",r,t,n),S("defaultValue",r,t,n));return[o,l,c,f]}case"SparseReshape":{const{outputIndices:o,outputShape:l}=s.sparse.sparseReshape(S("inputIndices",r,t,n),S("inputShape",r,t,n),S("newShape",r,t,n));return[o,l]}case"SparseSegmentMean":return[s.sparse.sparseSegmentMean(S("data",r,t,n),S("indices",r,t,n),S("segmentIds",r,t,n))];case"SparseSegmentSum":return[s.sparse.sparseSegmentSum(S("data",r,t,n),S("indices",r,t,n),S("segmentIds",r,t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M_=(r,t,n,s=gn)=>{switch(r.op){case"FFT":return[s.fft(S("x",r,t,n))];case"IFFT":return[s.ifft(S("x",r,t,n))];case"RFFT":return[s.rfft(S("x",r,t,n))];case"IRFFT":return[s.irfft(S("x",r,t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B_=(r,t,n,s=gn)=>{switch(r.op){case"StaticRegexReplace":return[s.string.staticRegexReplace(S("input",r,t,n),S("pattern",r,t,n),S("rewrite",r,t,n),S("replaceGlobal",r,t,n))];case"StringNGrams":{const{nGrams:o,nGramsSplits:l}=s.string.stringNGrams(S("data",r,t,n),S("dataSplits",r,t,n),S("separator",r,t,n),S("nGramWidths",r,t,n),S("leftPad",r,t,n),S("rightPad",r,t,n),S("padWidth",r,t,n),S("preserveShortSequences",r,t,n));return[o,l]}case"StringSplit":{const{indices:o,values:l,shape:c}=s.string.stringSplit(S("input",r,t,n),S("delimiter",r,t,n),S("skipEmpty",r,t,n));return[o,l,c]}case"StringToHashBucketFast":return[s.string.stringToHashBucketFast(S("input",r,t,n),S("numBuckets",r,t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const L_=(r,t,n,s=gn)=>{switch(r.op){case"Cast":return[s.cast(S("x",r,t,n),S("dtype",r,t,n))];case"ExpandDims":{const o=S("axis",r,t,n);return[s.expandDims(S("x",r,t,n),o)]}case"Squeeze":{const o=S("axis",r,t,n);return[s.squeeze(S("x",r,t,n),o)]}case"Reshape":return[s.reshape(S("x",r,t,n),S("shape",r,t,n))];case"EnsureShape":return[s.ensureShape(S("x",r,t,n),S("shape",r,t,n))];case"MirrorPad":return[s.mirrorPad(S("x",r,t,n),S("padding",r,t,n),S("mode",r,t,n))];case"PadV2":case"Pad":return[s.pad(S("x",r,t,n),S("padding",r,t,n),S("constantValue",r,t,n))];case"SpaceToBatchND":{const o=S("blockShape",r,t,n),l=S("paddings",r,t,n);return[s.spaceToBatchND(S("x",r,t,n),o,l)]}case"BatchToSpaceND":{const o=S("blockShape",r,t,n),l=S("crops",r,t,n);return[s.batchToSpaceND(S("x",r,t,n),o,l)]}case"DepthToSpace":{const o=S("blockSize",r,t,n),l=S("dataFormat",r,t,n).toUpperCase();return[s.depthToSpace(S("x",r,t,n),o,l)]}case"BroadcastTo":return[s.broadcastTo(S("x",r,t,n),S("shape",r,t,n))];case"BroadcastArgs":return[s.broadcastArgs(S("s0",r,t,n),S("s1",r,t,n))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cm(r,t,n,s,o=Zt){const l=((c,f,p)=>{switch(c.category){case"arithmetic":return o(()=>h_(c,f,p));case"basic_math":return o(()=>p_(c,f,p));case"control":return v_(c,f,p);case"convolution":return o(()=>S_(c,f,p));case"creation":return o(()=>w_(c,f,p));case"dynamic":return T_(c,f,p);case"evaluation":return o(()=>N_(c,f,p));case"image":return o(()=>A_(c,f,p));case"graph":return o(()=>E_(c,f,p));case"logical":return o(()=>O_(c,f,p));case"matrices":return o(()=>k_(c,f,p));case"normalization":return o(()=>D_(c,f,p));case"ragged":return o(()=>$_(c,f,p));case"reduction":return o(()=>R_(c,f,p));case"slice_join":return o(()=>C_(c,f,p));case"sparse":return o(()=>z_(c,f,p));case"spectral":return o(()=>M_(c,f,p));case"string":return o(()=>B_(c,f,p));case"transformation":return o(()=>L_(c,f,p));case"hash_table":return x_(c,f,p,s);case"custom":const d=b0(c.op);if(d&&d.customExecutor)return d.customExecutor(new f_(c,f,p));throw TypeError(`Custom op ${c.op} is not registered.`);default:throw TypeError(`Unknown op '${c.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(r,t,n);return fi(l)?l.then(c=>[].concat(c)):[].concat(l)}class zm{constructor(t={},n={},s={},o={},l){this.weightMap=t,this.tensorArrayMap=n,this.tensorListMap=s,this.functionMap=o,this.parseNodeNameCache=l,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,n){return{id:t,frameName:n,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let n=0;n<this.contexts.length-1;n++){const s=this.contexts.slice(0,this.contexts.length-n);t.push(this.contextIdforContexts(s))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(t);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(t)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mm(r,t,n,s){const o=new Set,l=[];let c=null,f=null;const p=new Set,d=new Set(Object.keys(r).map(N=>Kn(N)[0]));s=s||[];const y=new Set(s.map(N=>Kn(N.name)[0])),v=[...t];for(;v.length>0;){const N=v.pop();if((oi(N)||q_(N)||K_(N))&&c==null&&(c=N,f=c.children.map(A=>A.name).filter(A=>o.has(A))),o.add(N.name),n[N.name]==null&&!d.has(N.name)&&!y.has(N.name)){if(N.inputs.length===0){l.push(N.name);continue}N.inputs.forEach(A=>{p.has(A.name)||(p.add(A.name),v.push(A))})}}return{inputs:r,outputs:t,usedNodes:o,missingInputs:l,dynamicNode:c,syncInputs:f}}function U_(r,t){const{usedNodes:n,inputs:s}=t,o=Object.keys(s).map(C=>Kn(C)[0]).map(C=>r.nodes[C]),l=r.initNodes||[],c=C=>n.has(typeof C=="string"?C:C.name);function f(C){return[...new Map(C.map(V=>[V.name,V])).values()]}const p=f([...o,...r.weights,...l]).filter(c),d=f([...p,...Object.values(r.nodes)]).filter(c),y=new Map(d.map(C=>[C.name,C])),v={};for(const C of d){v[C.name]=v[C.name]||0;for(const V of C.children)c(V)||(v[V.name]=Number.POSITIVE_INFINITY),v[V.name]=(v[V.name]||0)+1}const N=Object.entries(v).filter(([,C])=>C===0).map(([C])=>C),A=[...N];for(;N.length>0;){const C=N.pop(),V=y.get(C);for(const lt of V.children.filter(c))--v[lt.name]===0&&(A.push(lt.name),N.push(lt.name))}const $=A.map(C=>y.get(C)),B=I_($,p);return j_(B,p),B}function I_(r,t){const n=new Map(r.map(c=>[c.name,c])),s=t.map(c=>c.name),o=new Set(s);for(;s.length>0;){const c=s.pop(),f=n.get(c);for(const p of f.children)!n.has(p.name)||o.has(p.name)||(o.add(p.name),s.push(p.name))}return r.filter(c=>o.has(c.name))}class Nl extends Error{constructor(t){super(`NodesExecutionOrderError: ${t}`)}}function j_(r,t){const n=new Map(r.map((f,p)=>[f.name,p])),s=new Set(t.map(f=>f.name)),o=f=>s.has(typeof f=="string"?f:f.name),l=new Set(r.map(f=>f.name)),c=f=>l.has(typeof f=="string"?f:f.name);for(const f of r){for(const p of f.children.filter(c)){if(!n.has(p.name))throw new Nl(`Child ${p.name} of node ${f.name} is unreachable.`);if(n.get(f.name)>n.get(p.name))throw new Nl(`Node ${f.name} is scheduled to run after its child ${p.name}.`)}if(!o(f))for(const p of f.inputs){if(!n.has(p.name))throw new Nl(`Input ${p.name} of node ${f.name} is unreachable.`);if(n.get(p.name)>n.get(f.name))throw new Nl(`Node ${f.name} is scheduled to run before its input ${p.name}.`)}}}function F_(r){const t=new Map(r.map((f,p)=>[f.name,p])),n=Number.MAX_SAFE_INTEGER,s=r.map((f,p)=>oi(f)?n:p),o=f=>{const p=s[t.get(f.name)];return p??-1},l=r.map((f,p)=>f.children.map(o).reduce((d,y)=>Math.max(d,y),s[p])),c=new Map;for(let f=0;f<r.length;++f){const p=l[f];if(p===n)continue;const d=r[f],y=r[p];c.has(y.name)||c.set(y.name,[]),c.get(y.name).push(d)}return c}const V_=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),H_=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),G_=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function oi(r){return V_.has(r.op)}function q_(r){return H_.has(r.op)}function K_(r){return G_.has(r.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yl{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const n=Object.keys(t).map(s=>t[s].map(o=>o.id));this._weightIds=[].concat(...n),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const n=t.signatureKey||t.name;return t.defaultOutput?`${n}:${t.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((t,n)=>(t[n]=this._functions[n].signature,t),{})}constructor(t,n){this.graph=t,this.parent=n,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(s=>{this._functionExecutorMap[s]=new Yl(t.functions[s],this)})}getCompilationKey(t,n){const s=t.map(l=>l.name).sort(),o=n.map(l=>l.name).sort();return s.join(this.SEPARATOR)+"--"+o.join(this.SEPARATOR)}compile(t,n){const s=Mm(t,n,this.weightMap,this._initNodes),{missingInputs:o,dynamicNode:l,syncInputs:c}=s;if(l!=null)throw new Error(`This execution contains the node '${l.name}', which has the dynamic op '${l.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${c}]`);if(o.length>0){const d=n.map(v=>v.name),y=Object.keys(t);throw new Error(`Cannot compute the outputs [${d}] from the provided inputs [${y}]. Missing the following inputs: [${o}]`)}const f=U_(this.graph,s),p=F_(f);return{orderedNodes:f,nodeLiveUntilMap:p}}cloneAndKeepTensor(t){if(t==null)return null;const n=t.clone();return ea(n),n}cloneTensorList(t){return t?t.map(s=>this.cloneAndKeepTensor(s)):null}cloneTensorMap(t){return Object.fromEntries(Object.entries(t).map(([n,s])=>[n,this.cloneTensorList(s)]))}execute(t,n){this.disposeIntermediateTensors(),t=this.mapInputs(t);const s=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n);const o=s.map(N=>this.graph.nodes[Kn(N)[0]]),l=n.map(N=>Kn(N)[0]),c=new Set(l);let f=l.map(N=>this.graph.nodes[N]);f.length===0&&(f=this._outputs);const p=this.getCompilationKey(o,f);let d=this.compiledMap.get(p);d==null&&(d=this.compile(t,f),this.compiledMap.set(p,d));try{this.keepIntermediateTensors=ne().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(N){this.keepIntermediateTensors=!1,console.warn(N.message)}const y={},v={};return Zt(()=>{const N=new zm(this.weightMap,y,v,this.functionExecutorMap,this.parseNodeNameCache),A=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(t).forEach(V=>{const[lt,rt]=Kn(V,N),Q=[];Q[rt]=t[V],A[lt]=Q,this.keepIntermediateTensors&&(this.clonedTensorsMap[lt]=this.cloneTensorList(Q))});const $=this.getFrozenTensorIds(A),{orderedNodes:B,nodeLiveUntilMap:C}=d;for(const V of B){if(A[V.name])continue;const lt=Cm(V,A,N,this._resourceManager);if(fi(lt))throw new Error(`The execution of the op '${V.op}' returned a promise. Please use model.executeAsync() instead.`);A[V.name]=lt,this.keepIntermediateTensors&&(this.clonedTensorsMap[V.name]=this.cloneTensorList(lt)),this.checkTensorForDisposalWithNodeLiveUntilInfo(V,A,N,$,c,C.get(V.name))}return this.parent==null&&N.dispose($),n.map(V=>dn(V,A,N))})}getFrozenTensorIds(t){const n=[].concat.apply([],Object.keys(t).map(s=>t[s]).map(s=>s.map(o=>o.id)));return new Set(n)}checkTensorForDisposal(t,n,s,o,l,c,f){if(!(oi(n)||c.has(t))){for(const p of s[t])p!=null&&(f[p.id]=(f[p.id]||0)+n.children.length);for(const p of n.inputs){if(oi(p))continue;const d=Om(p.name,s,o);if(d!=null)for(const y of d){if(!y||y.kept||l.has(y.id))continue;const v=f[y.id];v===1?(y.dispose(),delete f[y.id]):v!=null&&f[y.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(t,n,s,o,l,c){function f(p){return oi(p)||l.has(p.name)}if(!(oi(t)||c==null))for(const p of c){if(f(p))continue;const d=Om(p.name,n,s);for(const y of d)!y||y.kept||o.has(y.id)||y.dispose()}}async executeAsync(t,n){return this._executeAsync(t,n)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(t=>{for(const n of t)n&&!n.isDisposed&&n.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(t,n,s=!1,o={},l={}){this.disposeIntermediateTensors(),s||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepIntermediateTensors=ne().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(N){this.keepIntermediateTensors=!1,console.warn(N.message)}const c=new zm(this.weightMap,o,l,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const f=await this.executeWithControlFlow(t,c,n,s),p=n.map(N=>dn(N,f,c)),d=p.map(N=>N.id),y=Object.keys(t).map(N=>t[N].id),v=new Set([...d,...y,...this.weightIds]);return Object.values(f).forEach(N=>{N.forEach(A=>{A&&!A.isDisposed&&!v.has(A.id)&&A.dispose()})}),this.parent==null&&c.dispose(v),p}async executeFunctionAsync(t,n,s){const o=t.reduce((l,c,f)=>(l[this.inputs[f].name]=c,l),{});return this._executeAsync(o,this.outputNodes,!0,n,s)}async executeWithControlFlow(t,n,s,o){const l=Object.keys(t),c=l.map(Q=>this.graph.nodes[Kn(Q)[0]]),f=s.map(Q=>Kn(Q)[0]),p=new Set(f);let d=f.map(Q=>this.graph.nodes[Q]);d.length===0&&(d=this._outputs);const{usedNodes:y,missingInputs:v,dynamicNode:N,syncInputs:A}=Mm(t,d,this.weightMap,this._initNodes),$=[...c,...this.graph.weights,...this._initNodes||[]].map(Q=>({node:Q,contexts:n.currentContext})),B=Object.assign({},this.weightMap);Object.keys(t).forEach(Q=>{const[tt,it]=Kn(Q),bt=[];bt[it]=t[Q],B[tt]=bt});const C={},V=this.getFrozenTensorIds(B),lt={};for(;$.length>0;){const Q=this.processStack(c,$,n,B,lt,V,p,C,y);await Promise.all(Q)}N==null&&!o&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const rt=d.filter(Q=>!oi(Q)&&!dn(Q.name,B,n)).map(Q=>Q.name);if(rt.length>0){let Q="";throw N!=null&&(Q=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${A}]`),new Error(`Cannot compute the outputs [${rt}] from the provided inputs [${l}]. Consider providing the following inputs: [${v}]. ${Q}`)}return B}processStack(t,n,s,o,l,c,f,p,d){const y=[];for(;n.length>0;){const v=n.pop();s.currentContext=v.contexts;let N="";if(v.node.op==="Enter"&&S("isConstant",v.node,o,s)&&([N]=xa(v.node.name,s)),o[v.node.name]==null){const A=Cm(v.node,o,s,this._resourceManager);N||([N]=xa(v.node.name,s));const $=s.currentContext;fi(A)?y.push(A.then(B=>(o[N]=B,this.keepIntermediateTensors&&(this.clonedTensorsMap[N]=this.cloneTensorList(B)),s.currentContext=$,this.checkTensorForDisposal(N,v.node,o,s,c,f,p),this.processChildNodes(v.node,n,s,o,l,d),B))):(o[N]=A,this.keepIntermediateTensors&&(this.clonedTensorsMap[N]=this.cloneTensorList(A)),this.checkTensorForDisposal(N,v.node,o,s,c,f,p),this.processChildNodes(v.node,n,s,o,l,d))}else this.processChildNodes(v.node,n,s,o,l,d)}return y}processChildNodes(t,n,s,o,l,c){t.children.forEach(f=>{const[p]=xa(f.name,s);l[p]||!c.has(f.name)||(f.op==="Merge"?f.inputNames.some(d=>!!dn(d,o,s))&&(l[p]=!0,n.push({contexts:s.currentContext,node:f})):f.inputNames.every(d=>!!dn(d,o,s))&&(l[p]=!0,n.push({contexts:s.currentContext,node:f})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(n=>n.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(n=>{const s=t[n],[o]=Kn(n),l=this.graph.nodes[o];if(l.attrParams.shape&&l.attrParams.shape.value){const c=l.attrParams.shape.value,f=c.length===s.shape.length&&s.shape.every((p,d)=>c[d]===-1||c[d]===p);L(f,()=>`The shape of dict['${l.name}'] provided in model.execute(dict) must be [${c}], but was [${s.shape}]`)}l.attrParams.dtype&&l.attrParams.dtype.value&&L(s.dtype===l.attrParams.dtype.value,()=>`The dtype of dict['${l.name}'] provided in model.execute(dict) must be ${l.attrParams.dtype.value}, but was ${s.dtype}`)})}mapInputs(t){var n,s;const o={};for(const l in t){const c=(s=(n=this._signature)===null||n===void 0?void 0:n.inputs)===null||s===void 0?void 0:s[l];c!=null?o[c.name]=t[l]:o[l]=t[l]}return o}checkInputs(t){const n=Object.keys(t).filter(s=>{const[o]=Kn(s);return this.graph.nodes[o]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(t){return t.map(n=>{var s,o;const l=(o=(s=this._signature)===null||s===void 0?void 0:s.outputs)===null||o===void 0?void 0:o[n];return l!=null?l.name:n},{})}checkOutputs(t){t.forEach(n=>{const[s]=Kn(n);if(!this.graph.nodes[s])throw new Error(`The output '${n}' is not found in the graph`)})}}class Y_{constructor(t={},n={}){this.hashTableNameToHandle=t,this.hashTableMap=n}addHashTable(t,n){this.hashTableNameToHandle[t]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X_="?tfjs-format=file",P_="model.json";class W_{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(t,n={},s=m0){this.modelUrl=t,this.loadOptions=n,this.version="n/a",this.io=s,n==null&&(this.loadOptions={}),this.resourceManager=new Y_}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const n=this.io.getLoadHandlers(t,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[t]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return fi(t)?t.then(n=>n.getWeightStream==null?this.loadSync(n):this.loadStreaming(n)):this.loadSync(t)}loadSync(t){const n=this.io.decodeWeights(t.weightData,t.weightSpecs);return this.loadWithWeightMap(t,n)}async loadStreaming(t){if(t.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const n=await g3(t.getWeightStream(),t.weightSpecs);return this.loadWithWeightMap(t,n)}loadWithWeightMap(t,n){this.artifacts=t;const s=this.artifacts.modelTopology;let o=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const l=this.artifacts.userDefinedMetadata;l.signature!=null&&(o=l.signature),l.structuredOutputKeys!=null&&(this.structuredOutputKeys=l.structuredOutputKeys)}if(this.signature=o,this.version=`${s.versions.producer}.${s.versions.minConsumer}`,this.executor=new Yl(km.Instance.transformGraph(s,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const l=km.Instance.transformGraph(t.modelInitializer);this.initializer=new Yl(l),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=t.initializerSignature}return!0}async save(t,n){if(typeof t=="string"){const s=this.io.getSaveHandlers(t);if(s.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(s.length>1)throw new Error(`Found more than one (${s.length}) save handlers for URL '${t}'`);t=s[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}addStructuredOutputNames(t){if(this.structuredOutputKeys){const n=t instanceof Ie?[t]:t,s={};return n.forEach((o,l)=>s[this.structuredOutputKeys[l]]=o),s}return t}predict(t,n){const s=this.execute(t,this.outputNodes);return this.addStructuredOutputNames(s)}async predictAsync(t,n){const s=await this.executeAsync(t,this.outputNodes);return this.addStructuredOutputNames(s)}normalizeInputs(t){var n;if(!(t instanceof Ie)&&!Array.isArray(t)){const l=(n=this.signature)===null||n===void 0?void 0:n.inputs;if(l!=null)for(const c in l){const f=l[c];f.resourceId!=null&&(t[c]=this.resourceIdToCapturedInput[f.resourceId])}return t}t=Array.isArray(t)?t:[t];const s=Object.keys(this.resourceIdToCapturedInput).length;if(t.length+s!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-s} non-resource placeholders, while there are ${t.length} input tensors provided.`);let o=0;return this.inputNodes.reduce((l,c)=>{var f,p,d;const y=(d=(p=(f=this.signature)===null||f===void 0?void 0:f.inputs)===null||p===void 0?void 0:p[c])===null||d===void 0?void 0:d.resourceId;return y!=null?l[c]=this.resourceIdToCapturedInput[y]:l[c]=t[o++],l},{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(t){if(this.resourceIdToCapturedInput={},this.initializerSignature){const n=this.initializerSignature.outputs,s=Object.keys(n);for(let o=0;o<s.length;o++){const l=s[o],c=n[l];this.resourceIdToCapturedInput[c.resourceId]=t[o]}}}execute(t,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const s=this.executor.execute(t,n);return s.length>1?s:s[0]}async executeAsync(t,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const s=await this.executor.executeAsync(t,n);return s.length>1?s:s[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((n,s)=>(n[s]=[t[s]],n),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Me(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function w0(r,t={},n=m0){if(r==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof r=="string"&&(r=Q_(r));const s=new W_(r,t,n);return await s.load(),s}function Q_(r){return r.endsWith("/")||(r=r+"/"),`${r}${P_}${X_}`}/**
    * @license
    * Copyright 2024 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var Lr=function(){return Lr=Object.assign||function(r){for(var t,n=1,s=arguments.length;n<s;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r},Lr.apply(this,arguments)};function ka(r,t,n,s){return new(n||(n=Promise))(function(o,l){function c(d){try{p(s.next(d))}catch(y){l(y)}}function f(d){try{p(s.throw(d))}catch(y){l(y)}}function p(d){var y;d.done?o(d.value):(y=d.value,y instanceof n?y:new n(function(v){v(y)})).then(c,f)}p((s=s.apply(r,[])).next())})}function Da(r,t){var n,s,o,l,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function f(p){return function(d){return function(y){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,s&&(o=2&y[0]?s.return:y[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,y[1])).done)return o;switch(s=0,o&&(y=[2&y[0],o.value]),y[0]){case 0:case 1:o=y;break;case 4:return c.label++,{value:y[1],done:!1};case 5:c.label++,s=y[1],y=[0];continue;case 7:y=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!((o=o.length>0&&o[o.length-1])||y[0]!==6&&y[0]!==2)){c=0;continue}if(y[0]===3&&(!o||y[1]>o[0]&&y[1]<o[3])){c.label=y[1];break}if(y[0]===6&&c.label<o[1]){c.label=o[1],o=y;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(y);break}o[2]&&c.ops.pop(),c.trys.pop();continue}y=t.call(r,c)}catch(v){y=[6,v],s=0}finally{n=o=0}if(5&y[0])throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}([p,d])}}}function bs(r){var t=r.map(function(n){return n[0]});return t.push(r[r.length-1][1]),t}var Z_={lips:bs([[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]]),leftEye:bs([[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]]),leftEyebrow:bs([[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]]),leftIris:bs([[474,475],[475,476],[476,477],[477,474]]),rightEye:bs([[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]]),rightEyebrow:bs([[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]]),rightIris:bs([[469,470],[470,471],[471,472],[472,469]]),faceOval:bs([[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]])},J_=Object.entries(Z_).map(function(r){var t=r[0];return r[1].map(function(n){return[n,t]})}).flat(),T0=new Map(J_);function Zh(r){for(var t={locationData:{relativeKeypoints:[]}},n=Number.MAX_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER,l=Number.MIN_SAFE_INTEGER,c=0;c<r.length;++c){var f=r[c];n=Math.min(n,f.x),s=Math.max(s,f.x),o=Math.min(o,f.y),l=Math.max(l,f.y),t.locationData.relativeKeypoints.push({x:f.x,y:f.y})}return t.locationData.relativeBoundingBox={xMin:n,yMin:o,xMax:s,yMax:l,width:s-n,height:l-o},t}var ph={runtime:"mediapipe",maxFaces:1,refineLandmarks:!1},tx=function(){function r(t){var n=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceMeshSolution=new kg.FaceMesh({locateFile:function(s,o){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+s:o+"/"+s}}),this.faceMeshSolution.setOptions({refineLandmarks:t.refineLandmarks,selfieMode:this.selfieMode,maxNumFaces:t.maxFaces}),this.faceMeshSolution.onResults(function(s){if(n.height=s.image.height,n.width=s.image.width,n.faces=[],s.multiFaceLandmarks!==null)for(var o=s.multiFaceLandmarks,l=0;l<o.length;l++){var c=n.translateOutput(o[l]);n.faces.push({keypoints:c,box:Zh(c).locationData.relativeBoundingBox})}})}return r.prototype.translateOutput=function(t){var n=this;return t.map(function(s,o){var l={x:s.x*n.width,y:s.y*n.height,z:s.z*n.width},c=T0.get(o);return c!=null&&(l.name=c),l})},r.prototype.estimateFaces=function(t,n){return ka(this,void 0,void 0,function(){var s,o;return Da(this,function(l){switch(l.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.faceMeshSolution.setOptions({selfieMode:this.selfieMode})),t instanceof Ie?(o=ImageData.bind,[4,g0(t)]):[3,2];case 1:return s=new(o.apply(ImageData,[void 0,l.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:s=t,l.label=3;case 3:return t=s,[4,this.faceMeshSolution.send({image:t})];case 4:return l.sent(),[2,this.faces]}})})},r.prototype.dispose=function(){this.faceMeshSolution.close()},r.prototype.reset=function(){this.faceMeshSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},r.prototype.initialize=function(){return this.faceMeshSolution.initialize()},r}();function ex(r){return ka(this,void 0,void 0,function(){var t,n;return Da(this,function(s){switch(s.label){case 0:return t=function(o){if(o==null)return Lr({},ph);var l=Lr({},o);return l.runtime="mediapipe",l.maxFaces==null&&(l.maxFaces=ph.maxFaces),l.refineLandmarks==null&&(l.refineLandmarks=ph.refineLandmarks),l}(r),[4,(n=new tx(t)).initialize()];case 1:return s.sent(),[2,n]}})})}var dh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nx={};(function(){var r;function t(g){var T=0;return function(){return T<g.length?{done:!1,value:g[T++]}:{done:!0}}}var n=typeof Object.defineProperties=="function"?Object.defineProperty:function(g,T,x){return g==Array.prototype||g==Object.prototype||(g[T]=x.value),g},s=function(g){g=[typeof globalThis=="object"&&globalThis,g,typeof window=="object"&&window,typeof self=="object"&&self,typeof dh=="object"&&dh];for(var T=0;T<g.length;++T){var x=g[T];if(x&&x.Math==Math)return x}throw Error("Cannot find global object")}(this);function o(g,T){if(T)t:{var x=s;g=g.split(".");for(var k=0;k<g.length-1;k++){var M=g[k];if(!(M in x))break t;x=x[M]}(T=T(k=x[g=g[g.length-1]]))!=k&&T!=null&&n(x,g,{configurable:!0,writable:!0,value:T})}}function l(g){return(g={next:g})[Symbol.iterator]=function(){return this},g}function c(g){var T=typeof Symbol<"u"&&Symbol.iterator&&g[Symbol.iterator];return T?T.call(g):{next:t(g)}}function f(g){if(!(g instanceof Array)){g=c(g);for(var T,x=[];!(T=g.next()).done;)x.push(T.value);g=x}return g}o("Symbol",function(g){function T(M,R){this.g=M,n(this,"description",{configurable:!0,writable:!0,value:R})}if(g)return g;T.prototype.toString=function(){return this.g};var x="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",k=0;return function M(R){if(this instanceof M)throw new TypeError("Symbol is not a constructor");return new T(x+(R||"")+"_"+k++,R)}}),o("Symbol.iterator",function(g){if(g)return g;g=Symbol("Symbol.iterator");for(var T="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),x=0;x<T.length;x++){var k=s[T[x]];typeof k=="function"&&typeof k.prototype[g]!="function"&&n(k.prototype,g,{configurable:!0,writable:!0,value:function(){return l(t(this))}})}return g});var p,d=typeof Object.create=="function"?Object.create:function(g){function T(){}return T.prototype=g,new T};if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var y;t:{var v={};try{v.__proto__={a:!0},y=v.a;break t}catch{}y=!1}p=y?function(g,T){if(g.__proto__=T,g.__proto__!==T)throw new TypeError(g+" is not extensible");return g}:null}var N=p;function A(g,T){if(g.prototype=d(T.prototype),g.prototype.constructor=g,N)N(g,T);else for(var x in T)if(x!="prototype")if(Object.defineProperties){var k=Object.getOwnPropertyDescriptor(T,x);k&&Object.defineProperty(g,x,k)}else g[x]=T[x];g.na=T.prototype}function $(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function B(g){if(g.l)throw new TypeError("Generator is already running");g.l=!0}function C(g,T){g.j={da:T,ea:!0},g.g=g.o||g.u}function V(g,T,x){return g.g=x,{value:T}}function lt(g){this.g=new $,this.h=g}function rt(g,T,x,k){try{var M=T.call(g.g.i,x);if(!(M instanceof Object))throw new TypeError("Iterator result "+M+" is not an object");if(!M.done)return g.g.l=!1,M;var R=M.value}catch(z){return g.g.i=null,C(g.g,z),Q(g)}return g.g.i=null,k.call(g.g,R),Q(g)}function Q(g){for(;g.g.g;)try{var T=g.h(g.g);if(T)return g.g.l=!1,{value:T.value,done:!1}}catch(x){g.g.h=void 0,C(g.g,x)}if(g.g.l=!1,g.g.j){if(T=g.g.j,g.g.j=null,T.ea)throw T.da;return{value:T.return,done:!0}}return{value:void 0,done:!0}}function tt(g){this.next=function(T){return B(g.g),g.g.i?T=rt(g,g.g.i.next,T,g.g.s):(g.g.s(T),T=Q(g)),T},this.throw=function(T){return B(g.g),g.g.i?T=rt(g,g.g.i.throw,T,g.g.s):(C(g.g,T),T=Q(g)),T},this.return=function(T){return function(x,k){B(x.g);var M=x.g.i;return M?rt(x,"return"in M?M.return:function(R){return{value:R,done:!0}},k,x.g.return):(x.g.return(k),Q(x))}(g,T)},this[Symbol.iterator]=function(){return this}}function it(g){return function(T){function x(M){return T.next(M)}function k(M){return T.throw(M)}return new Promise(function(M,R){(function z(F){F.done?M(F.value):Promise.resolve(F.value).then(x,k).then(z,R)})(T.next())})}(new tt(new lt(g)))}$.prototype.s=function(g){this.h=g},$.prototype.return=function(g){this.j={return:g},this.g=this.u},o("Promise",function(g){function T(z){this.h=0,this.i=void 0,this.g=[],this.s=!1;var F=this.j();try{z(F.resolve,F.reject)}catch(Z){F.reject(Z)}}function x(){this.g=null}function k(z){return z instanceof T?z:new T(function(F){F(z)})}if(g)return g;x.prototype.h=function(z){if(this.g==null){this.g=[];var F=this;this.i(function(){F.l()})}this.g.push(z)};var M=s.setTimeout;x.prototype.i=function(z){M(z,0)},x.prototype.l=function(){for(;this.g&&this.g.length;){var z=this.g;this.g=[];for(var F=0;F<z.length;++F){var Z=z[F];z[F]=null;try{Z()}catch(st){this.j(st)}}}this.g=null},x.prototype.j=function(z){this.i(function(){throw z})},T.prototype.j=function(){function z(st){return function(pt){Z||(Z=!0,st.call(F,pt))}}var F=this,Z=!1;return{resolve:z(this.D),reject:z(this.l)}},T.prototype.D=function(z){if(z===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(z instanceof T)this.H(z);else{t:switch(typeof z){case"object":var F=z!=null;break t;case"function":F=!0;break t;default:F=!1}F?this.A(z):this.o(z)}},T.prototype.A=function(z){var F=void 0;try{F=z.then}catch(Z){return void this.l(Z)}typeof F=="function"?this.I(F,z):this.o(z)},T.prototype.l=function(z){this.u(2,z)},T.prototype.o=function(z){this.u(1,z)},T.prototype.u=function(z,F){if(this.h!=0)throw Error("Cannot settle("+z+", "+F+"): Promise already settled in state"+this.h);this.h=z,this.i=F,this.h===2&&this.G(),this.B()},T.prototype.G=function(){var z=this;M(function(){if(z.C()){var F=s.console;F!==void 0&&F.error(z.i)}},1)},T.prototype.C=function(){if(this.s)return!1;var z=s.CustomEvent,F=s.Event,Z=s.dispatchEvent;return Z===void 0||(typeof z=="function"?z=new z("unhandledrejection",{cancelable:!0}):typeof F=="function"?z=new F("unhandledrejection",{cancelable:!0}):(z=s.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,z),z.promise=this,z.reason=this.i,Z(z))},T.prototype.B=function(){if(this.g!=null){for(var z=0;z<this.g.length;++z)R.h(this.g[z]);this.g=null}};var R=new x;return T.prototype.H=function(z){var F=this.j();z.M(F.resolve,F.reject)},T.prototype.I=function(z,F){var Z=this.j();try{z.call(F,Z.resolve,Z.reject)}catch(st){Z.reject(st)}},T.prototype.then=function(z,F){function Z(St,Nt){return typeof St=="function"?function(It){try{st(St(It))}catch(Kt){pt(Kt)}}:Nt}var st,pt,yt=new T(function(St,Nt){st=St,pt=Nt});return this.M(Z(z,st),Z(F,pt)),yt},T.prototype.catch=function(z){return this.then(void 0,z)},T.prototype.M=function(z,F){function Z(){switch(st.h){case 1:z(st.i);break;case 2:F(st.i);break;default:throw Error("Unexpected state: "+st.h)}}var st=this;this.g==null?R.h(Z):this.g.push(Z),this.s=!0},T.resolve=k,T.reject=function(z){return new T(function(F,Z){Z(z)})},T.race=function(z){return new T(function(F,Z){for(var st=c(z),pt=st.next();!pt.done;pt=st.next())k(pt.value).M(F,Z)})},T.all=function(z){var F=c(z),Z=F.next();return Z.done?k([]):new T(function(st,pt){function yt(It){return function(Kt){St[It]=Kt,--Nt==0&&st(St)}}var St=[],Nt=0;do St.push(void 0),Nt++,k(Z.value).M(yt(St.length-1),pt),Z=F.next();while(!Z.done)})},T});var bt=typeof Object.assign=="function"?Object.assign:function(g,T){for(var x=1;x<arguments.length;x++){var k=arguments[x];if(k)for(var M in k)Object.prototype.hasOwnProperty.call(k,M)&&(g[M]=k[M])}return g};o("Object.assign",function(g){return g||bt}),o("Object.is",function(g){return g||function(T,x){return T===x?T!==0||1/T==1/x:T!=T&&x!=x}}),o("Array.prototype.includes",function(g){return g||function(T,x){var k=this;k instanceof String&&(k=String(k));var M=k.length;for(0>(x=x||0)&&(x=Math.max(x+M,0));x<M;x++){var R=k[x];if(R===T||Object.is(R,T))return!0}return!1}}),o("String.prototype.includes",function(g){return g||function(T,x){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(T instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(T,x||0)!==-1}}),o("Array.prototype.keys",function(g){return g||function(){return function(T,x){T instanceof String&&(T+="");var k=0,M=!1,R={next:function(){if(!M&&k<T.length){var z=k++;return{value:x(z,T[z]),done:!1}}return M=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}(this,function(T){return T})}});var Tt=this||self;function mt(g,T){g=g.split(".");var x,k=Tt;for((g[0]in k)||k.execScript===void 0||k.execScript("var "+g[0]);g.length&&(x=g.shift());)g.length||T===void 0?k=k[x]&&k[x]!==Object.prototype[x]?k[x]:k[x]={}:k[x]=T}function Et(){throw Error("Invalid UTF8")}function Ct(g,T){return T=String.fromCharCode.apply(null,T),g==null?T:g+T}var Vt,$t,ue=typeof TextDecoder<"u",re=typeof TextEncoder<"u",nt={},vt=null;function Dt(g){var T;T===void 0&&(T=0),H(),T=nt[T];for(var x=Array(Math.floor(g.length/3)),k=T[64]||"",M=0,R=0;M<g.length-2;M+=3){var z=g[M],F=g[M+1],Z=g[M+2],st=T[z>>2];z=T[(3&z)<<4|F>>4],F=T[(15&F)<<2|Z>>6],Z=T[63&Z],x[R++]=st+z+F+Z}switch(st=0,Z=k,g.length-M){case 2:Z=T[(15&(st=g[M+1]))<<2]||k;case 1:g=g[M],x[R]=T[g>>2]+T[(3&g)<<4|st>>4]+Z+k}return x.join("")}function Qt(g){var T=g.length,x=3*T/4;x%3?x=Math.floor(x):"=.".indexOf(g[T-1])!=-1&&(x="=.".indexOf(g[T-2])!=-1?x-2:x-1);var k=new Uint8Array(x),M=0;return function(R,z){function F(Nt){for(;Z<R.length;){var It=R.charAt(Z++),Kt=vt[It];if(Kt!=null)return Kt;if(!/^[\s\xa0]*$/.test(It))throw Error("Unknown base64 encoding at char: "+It)}return Nt}H();for(var Z=0;;){var st=F(-1),pt=F(0),yt=F(64),St=F(64);if(St===64&&st===-1)break;z(st<<2|pt>>4),yt!=64&&(z(pt<<4&240|yt>>2),St!=64&&z(yt<<6&192|St))}}(g,function(R){k[M++]=R}),M!==x?k.subarray(0,M):k}function H(){if(!vt){vt={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),T=["+/=","+/","-_=","-_.","-_"],x=0;5>x;x++){var k=g.concat(T[x].split(""));nt[x]=k;for(var M=0;M<k.length;M++){var R=k[M];vt[R]===void 0&&(vt[R]=M)}}}}var ht,At=typeof Uint8Array=="function";function _t(g){return At&&g!=null&&g instanceof Uint8Array}function zt(g){if(this.L=g,g!==null&&g.length===0)throw Error("ByteString should be constructed with non-empty values")}var ae=typeof Uint8Array.prototype.slice=="function",Bt=0;function en(g,T){return Error("Invalid wire type: "+g+" (at position "+T+")")}function he(){return Error("Failed to read varint, encoding is invalid.")}function qe(g,T){T=(T=T===void 0?{}:T).v!==void 0&&T.v,this.h=null,this.g=this.i=this.j=0,this.v=T,g&&En(this,g)}function En(g,T){g.h=function(x,k){if(x.constructor===Uint8Array)return x;if(x.constructor===ArrayBuffer)return new Uint8Array(x);if(x.constructor===Array)return new Uint8Array(x);if(x.constructor===String)return Qt(x);if(x.constructor===zt)return!k&&(k=x.L)&&k.constructor===Uint8Array?k:(k=(k=x.L)==null||_t(k)?k:typeof k=="string"?Qt(k):null,(x=x.L=k)?new Uint8Array(x):ht||(ht=new Uint8Array(0)));if(x instanceof Uint8Array)return new Uint8Array(x.buffer,x.byteOffset,x.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}(T,g.v),g.j=0,g.i=g.h.length,g.g=g.j}function _e(g){if(g.g>g.i)throw Error("Tried to read past the end of the data "+g.g+" > "+g.i)}function sr(g){var T=g.h,x=T[g.g],k=127&x;if(128>x)return g.g+=1,_e(g),k;if(k|=(127&(x=T[g.g+1]))<<7,128>x)return g.g+=2,_e(g),k;if(k|=(127&(x=T[g.g+2]))<<14,128>x)return g.g+=3,_e(g),k;if(k|=(127&(x=T[g.g+3]))<<21,128>x)return g.g+=4,_e(g),k;if(x=T[g.g+4],g.g+=5,k|=(15&x)<<28,128>x)return _e(g),k;if(128<=T[g.g++]&&128<=T[g.g++]&&128<=T[g.g++]&&128<=T[g.g++]&&128<=T[g.g++])throw he();return _e(g),k}qe.prototype.reset=function(){this.g=this.j};var _r=[];function jr(){this.g=[]}function In(g,T){for(;127<T;)g.g.push(127&T|128),T>>>=7;g.g.push(T)}function Yn(g){var T={},x=T.W!==void 0&&T.W;this.l={v:T.v!==void 0&&T.v},this.W=x,T=this.l,_r.length?(x=_r.pop(),T&&(x.v=T.v),g&&En(x,g),g=x):g=new qe(g,T),this.g=g,this.j=this.g.g,this.h=this.i=-1}function nn(g){var T=g.g;if(T.g==T.i)return!1;g.j=g.g.g;var x=sr(g.g)>>>0;if(T=x>>>3,!(0<=(x&=7)&&5>=x))throw en(x,g.j);if(1>T)throw Error("Invalid field number: "+T+" (at position "+g.j+")");return g.i=T,g.h=x,!0}function _n(g){switch(g.h){case 0:if(g.h!=0)_n(g);else t:{for(var T=(g=g.g).g,x=T+10;T<x;)if((128&g.h[T++])==0){g.g=T,_e(g);break t}throw he()}break;case 1:(g=g.g).g+=8,_e(g);break;case 2:g.h!=2?_n(g):(T=sr(g.g)>>>0,(g=g.g).g+=T,_e(g));break;case 5:(g=g.g).g+=4,_e(g);break;case 3:for(T=g.i;;){if(!nn(g))throw Error("Unmatched start-group tag: stream EOF");if(g.h==4){if(g.i!=T)throw Error("Unmatched end-group tag");break}_n(g)}break;default:throw en(g.h,g.j)}}jr.prototype.length=function(){return this.g.length},jr.prototype.end=function(){var g=this.g;return this.g=[],g},Yn.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var jn=[];function aa(){this.i=[],this.h=0,this.g=new jr}function Re(g,T){T.length!==0&&(g.i.push(T),g.h+=T.length)}var sa=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function ja(g,T){Object.isFrozen(g)||(sa?g[sa]|=T:g.N!==void 0?g.N|=T:Object.defineProperties(g,{N:{value:T,configurable:!0,writable:!0,enumerable:!1}}))}function ks(g){var T;return(T=sa?g[sa]:g.N)==null?0:T}function xr(g){return ja(g,1),g}function ln(g){return!!Array.isArray(g)&&!!(2&ks(g))}function Ke(g){if(!Array.isArray(g))throw Error("cannot mark non-array as immutable");ja(g,2)}function Be(g){return g!==null&&typeof g=="object"&&!Array.isArray(g)&&g.constructor===Object}var Ye=Object.freeze(xr([]));function Ds(g){if(ln(g.m))throw Error("Cannot mutate an immutable Message")}var $s,Si=typeof Symbol<"u"&&Symbol.hasInstance!==void 0;function ia(g){return{value:g,configurable:!1,writable:!1,enumerable:!1}}function Fe(g,T,x){return T===-1?null:T>=g.i?g.g?g.g[T]:void 0:x!==void 0&&x&&g.g&&(x=g.g[T])!=null?x:g.m[T+g.h]}function de(g,T,x,k){k=k!==void 0&&k,Ds(g),T<g.i&&!k?g.m[T+g.h]=x:(g.g||(g.g=g.m[g.i+g.h]={}))[T]=x}function Ae(g,T,x,k){x=x===void 0||x;var M=Fe(g,T,k=k!==void 0&&k);return M==null&&(M=Ye),ln(g.m)?x&&(Ke(M),Object.freeze(M)):(M===Ye||ln(M))&&de(g,T,M=xr(M.slice()),k),M}function Xe(g,T,x){return(g=(g=Fe(g,T))==null?g:+g)==null?x===void 0?0:x:g}function oa(g,T,x,k){g.j||(g.j={});var M=ln(g.m),R=g.j[x];if(!R){k=Ae(g,x,!0,k!==void 0&&k),R=[],M=M||ln(k);for(var z=0;z<k.length;z++)R[z]=new T(k[z]),M&&Ke(R[z].m);M&&(Ke(R),Object.freeze(R)),g.j[x]=R}return R}function me(g,T,x,k,M){var R=R!==void 0&&R;return Ds(g),R=oa(g,x,T,R),x=k||new x,g=Ae(g,T),M!=null?(R.splice(M,0,x),g.splice(M,0,x.m)):(R.push(x),g.push(x.m)),x}function Fr(g,T){return(g=Fe(g,T))==null?0:g}function ua(g,T){return(g=Fe(g,T))==null?"":g}function xn(g){var T=Rs;return Yt(g,T=T===void 0?Vr:T)}function Cn(g,T){if(g!=null){if(Array.isArray(g))g=Yt(g,T);else if(Be(g)){var x,k={};for(x in g)k[x]=Cn(g[x],T);g=k}else g=T(g);return g}}function Yt(g,T){for(var x=g.slice(),k=0;k<x.length;k++)x[k]=Cn(x[k],T);return Array.isArray(g)&&1&ks(g)&&xr(x),x}function Rs(g){return g&&typeof g=="object"&&g.toJSON?g.toJSON():(g=function(T){switch(typeof T){case"number":return isFinite(T)?T:String(T);case"object":if(T&&!Array.isArray(T)){if(_t(T))return Dt(T);if(T instanceof zt){var x=T.L;return x=x==null||typeof x=="string"?x:At&&x instanceof Uint8Array?Dt(x):null,(T.L=x)||""}}}return T}(g),Array.isArray(g)?xn(g):g)}function Vr(g){return _t(g)?new Uint8Array(g):g}function Ar(g,T,x){g||(g=$s),$s=null;var k=this.constructor.h;if(g||(g=k?[k]:[]),this.h=(k?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=g,g=(k=this.m.length)-1,k&&Be(k=this.m[g])?(this.i=g-this.h,this.g=k):T!==void 0&&-1<T?(this.i=Math.max(T,g+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,x)for(T=0;T<x.length;T++)if((g=x[T])<this.i)g+=this.h,(k=this.m[g])?Array.isArray(k)&&xr(k):this.m[g]=Ye;else{var M=(k=this.g||(this.g=this.m[this.i+this.h]={}))[g];M?Array.isArray(M)&&xr(M):k[g]=Ye}}function Hr(){Ar.apply(this,arguments)}if(Ar.prototype.toJSON=function(){return xn(this.m)},Ar.prototype.toString=function(){return this.m.toString()},A(Hr,Ar),Si){var ir={};Object.defineProperties(Hr,(ir[Symbol.hasInstance]=ia(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),ir))}function zn(g,T,x){if(x){var k,M={};for(k in x){var R=x[k],z=R.ha;z||(M.F=R.la||R.fa.P,R.aa?(M.U=zs(R.aa),z=function(F){return function(Z,st,pt){return F.F(Z,st,pt,F.U)}}(M)):R.ca?(M.T=ur(R.X.g,R.ca),z=function(F){return function(Z,st,pt){return F.F(Z,st,pt,F.T)}}(M)):z=M.F,R.ha=z),z(T,g,R.X),M={F:M.F,U:M.U,T:M.T}}}(function(F,Z){if(Z=Z.ba){Re(F,F.g.end());for(var st=0;st<Z.length;st++)Re(F,Z[st])}})(T,g)}var ge=Symbol();function $e(g,T,x){return g[ge]||(g[ge]=function(k,M){return T(k,M,x)})}function Or(g){var T=g[ge];if(!T){var x=Ms(g);T=function(k,M){return Ha(k,M,x)},g[ge]=T}return T}function Cs(g){var T=function(M){var R=M.aa;return R?Or(R):(R=M.ka)?$e(M.X.g,R,M.ca):void 0}(g),x=g.X,k=g.fa.O;return T?function(M,R){return k(M,R,x,T)}:function(M,R){return k(M,R,x)}}function Ze(g,T,x,k,M,R){var z=0;for((g=g()).length&&typeof g[0]!="number"&&(x(T,g[0]),z++);z<g.length;){x=g[z++];for(var F=z+1;F<g.length&&typeof g[F]!="number";)F++;var Z=g[z++];switch(F-=z){case 0:k(T,x,Z);break;case 1:k(T,x,Z,g[z++]);break;case 2:M(T,x,Z,g[z++],g[z++]);break;case 3:F=g[z++];var st=g[z++],pt=g[z++];Array.isArray(pt)?M(T,x,Z,F,st,pt):R(T,x,Z,F,st,pt);break;case 4:R(T,x,Z,g[z++],g[z++],g[z++],g[z++]);break;default:throw Error("unexpected number of binary field arguments: "+F)}}return T}var or=Symbol();function zs(g){var T=g[or];if(!T){var x=Le(g);T=function(k,M){return Yr(k,M,x)},g[or]=T}return T}function ur(g,T){var x=g[or];return x||(x=function(k,M){return zn(k,M,T)},g[or]=x),x}var Fa=Symbol();function Mn(g,T){g.push(T)}function Gr(g,T,x){g.push(T,x.P)}function qr(g,T,x,k,M){var R=zs(M),z=x.P;g.push(T,function(F,Z,st){return z(F,Z,st,k,R)})}function kr(g,T,x,k,M,R){var z=ur(k,R),F=x.P;g.push(T,function(Z,st,pt){return F(Z,st,pt,k,z)})}function Le(g){var T=g[Fa];return T||Ze(g,g[Fa]=[],Mn,Gr,qr,kr)}var la=Symbol();function lr(g,T){g[0]=T}function Dr(g,T,x,k){var M=x.O;g[T]=k?function(R,z,F){return M(R,z,F,k)}:M}function Kr(g,T,x,k,M,R){var z=x.O,F=Or(M);g[T]=function(Z,st,pt){return z(Z,st,pt,k,F,R)}}function Va(g,T,x,k,M,R,z){var F=x.O,Z=$e(k,M,R);g[T]=function(st,pt,yt){return F(st,pt,yt,k,Z,z)}}function Ms(g){var T=g[la];return T||Ze(g,g[la]={},lr,Dr,Kr,Va)}function Ha(g,T,x){for(;nn(T)&&T.h!=4;){var k=T.i,M=x[k];if(!M){var R=x[0];R&&(R=R[k])&&(M=x[k]=Cs(R))}if(!(M&&M(T,g,k)||(M=T,k=g,R=M.j,_n(M),M.W))){var z=M.g.h;M=R===(M=M.g.g)?ht||(ht=new Uint8Array(0)):ae?z.slice(R,M):new Uint8Array(z.subarray(R,M)),(R=k.ba)?R.push(M):k.ba=[M]}}return g}function Bs(g,T,x){if(jn.length){var k=jn.pop();g&&(En(k.g,g),k.i=-1,k.h=-1),g=k}else g=new Yn(g);try{return Ha(new T,g,Ms(x))}finally{(T=g.g).h=null,T.j=0,T.i=0,T.g=0,T.v=!1,g.i=-1,g.h=-1,100>jn.length&&jn.push(g)}}function Yr(g,T,x){for(var k=x.length,M=k%2==1,R=M?1:0;R<k;R+=2)(0,x[R+1])(T,g,x[R]);zn(g,T,M?x[0]:void 0)}function cr(g,T){var x=new aa;Yr(g,x,Le(T)),Re(x,x.g.end()),g=new Uint8Array(x.h);for(var k=(T=x.i).length,M=0,R=0;R<k;R++){var z=T[R];g.set(z,M),M+=z.length}return x.i=[g],g}function cn(g,T){return{O:g,P:T}}var yn=cn(function(g,T,x){if(g.h!==5)return!1;var k=(g=g.g).h[g.g],M=g.h[g.g+1],R=g.h[g.g+2],z=g.h[g.g+3];return g.g+=4,_e(g),g=2*((M=(k<<0|M<<8|R<<16|z<<24)>>>0)>>31)+1,k=M>>>23&255,M&=8388607,de(T,x,k==255?M?NaN:1/0*g:k==0?g*Math.pow(2,-149)*M:g*Math.pow(2,k-150)*(M+Math.pow(2,23))),!0},function(g,T,x){if((T=Fe(T,x))!=null){In(g.g,8*x+5),g=g.g;var k=T;(k=(x=0>k?1:0)?-k:k)===0?0<1/k?Bt=0:Bt=2147483648:isNaN(k)?Bt=2147483647:34028234663852886e22<k?Bt=(x<<31|2139095040)>>>0:11754943508222875e-54>k?(k=Math.round(k/Math.pow(2,-149)),Bt=(x<<31|k)>>>0):(T=Math.floor(Math.log(k)/Math.LN2),k*=Math.pow(2,-T),16777216<=(k=Math.round(8388608*k))&&++T,Bt=(x<<31|T+127<<23|8388607&k)>>>0),x=Bt,g.g.push(x>>>0&255),g.g.push(x>>>8&255),g.g.push(x>>>16&255),g.g.push(x>>>24&255)}}),wi=cn(function(g,T,x){if(g.h!==0)return!1;for(var k=g.g,M=128,R=0,z=g=0;4>z&&128<=M;z++)M=k.h[k.g++],_e(k),R|=(127&M)<<7*z;if(128<=M&&(M=k.h[k.g++],_e(k),R|=(127&M)<<28,g|=(127&M)>>4),128<=M)for(z=0;5>z&&128<=M;z++)M=k.h[k.g++],_e(k),g|=(127&M)<<7*z+3;if(!(128>M))throw he();return k=R>>>0,(g=2147483648&(M=g>>>0))&&(M=~M>>>0,(k=1+~k>>>0)==0&&(M=M+1>>>0)),k=4294967296*M+(k>>>0),de(T,x,g?-k:k),!0},function(g,T,x){if((T=Fe(T,x))!=null&&T!=null){In(g.g,8*x),g=g.g;var k=T;for(x=0>k,T=(k=Math.abs(k))>>>0,k=Math.floor((k-T)/4294967296),k>>>=0,x&&(k=~k>>>0,4294967295<(T=1+(~T>>>0))&&(T=0,4294967295<++k&&(k=0))),x=Bt=T,T=k;0<T||127<x;)g.g.push(127&x|128),x=(x>>>7|T<<25)>>>0,T>>>=7;g.g.push(x)}}),Xr=cn(function(g,T,x){return g.h===0&&(de(T,x,sr(g.g)),!0)},function(g,T,x){if((T=Fe(T,x))!=null&&T!=null)if(In(g.g,8*x),g=g.g,0<=(x=T))In(g,x);else{for(T=0;9>T;T++)g.g.push(127&x|128),x>>=7;g.g.push(1)}}),Ga=cn(function(g,T,x){if(g.h!==2)return!1;var k,M=sr(g.g)>>>0,R=(g=g.g).g;if(g.g+=M,_e(g),g=g.h,ue)(k=Vt)||(k=Vt=new TextDecoder("utf-8",{fatal:!0})),k=k.decode(g.subarray(R,R+M));else{M=R+M;for(var z,F,Z,st=[],pt=null;R<M;)128>(z=g[R++])?st.push(z):224>z?R>=M?Et():(F=g[R++],194>z||(192&F)!=128?(R--,Et()):st.push((31&z)<<6|63&F)):240>z?R>=M-1?Et():(192&(F=g[R++]))!=128||z===224&&160>F||z===237&&160<=F||(192&(k=g[R++]))!=128?(R--,Et()):st.push((15&z)<<12|(63&F)<<6|63&k):244>=z?R>=M-2?Et():(192&(F=g[R++]))!=128||F-144+(z<<28)>>30!=0||(192&(k=g[R++]))!=128||(192&(Z=g[R++]))!=128?(R--,Et()):(z=(7&z)<<18|(63&F)<<12|(63&k)<<6|63&Z,z-=65536,st.push(55296+(z>>10&1023),56320+(1023&z))):Et(),8192<=st.length&&(pt=Ct(pt,st),st.length=0);k=Ct(pt,st)}return de(T,x,k),!0},function(g,T,x){if((T=Fe(T,x))!=null){var k=!1;if(k=k!==void 0&&k,re){if(k&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(T))throw Error("Found an unpaired surrogate");T=($t||($t=new TextEncoder)).encode(T)}else{for(var M=0,R=new Uint8Array(3*T.length),z=0;z<T.length;z++){var F=T.charCodeAt(z);if(128>F)R[M++]=F;else{if(2048>F)R[M++]=F>>6|192;else{if(55296<=F&&57343>=F){if(56319>=F&&z<T.length){var Z=T.charCodeAt(++z);if(56320<=Z&&57343>=Z){F=1024*(F-55296)+Z-56320+65536,R[M++]=F>>18|240,R[M++]=F>>12&63|128,R[M++]=F>>6&63|128,R[M++]=63&F|128;continue}z--}if(k)throw Error("Found an unpaired surrogate");F=65533}R[M++]=F>>12|224,R[M++]=F>>6&63|128}R[M++]=63&F|128}}T=R.subarray(0,M)}In(g.g,8*x+2),In(g.g,T.length),Re(g,g.g.end()),Re(g,T)}}),ca=cn(function(g,T,x,k,M){if(g.h!==2)return!1;T=me(T,x,k),x=g.g.i,k=sr(g.g)>>>0;var R=g.g.g+k,z=R-x;if(0>=z&&(g.g.i=R,M(T,g),z=R-g.g.g),z)throw Error("Message parsing ended unexpectedly. Expected to read "+k+" bytes, instead read "+(k-z)+" bytes, either the data ended unexpectedly or the message misreported its own length");return g.g.g=R,g.g.i=x,!0},function(g,T,x,k,M){if((T=oa(T,k,x))!=null)for(k=0;k<T.length;k++){var R=g;In(R.g,8*x+2);var z=R.g.end();Re(R,z),z.push(R.h),R=z,M(T[k],g),z=g;var F=R.pop();for(F=z.h+z.g.length()-F;127<F;)R.push(127&F|128),F>>>=7,z.h++;R.push(F),z.h++}});function An(){Hr.apply(this,arguments)}if(A(An,Hr),Si){var Ls={};Object.defineProperties(An,(Ls[Symbol.hasInstance]=ia(Object[Symbol.hasInstance]),Ls))}function Ve(g){An.call(this,g)}function Us(){return[1,Xr,2,yn,3,Ga,4,Ga]}function Is(g){An.call(this,g,-1,Ti)}function qa(){return[1,ca,Ve,Us]}A(Ve,An),A(Is,An),Is.prototype.addClassification=function(g,T){return me(this,1,Ve,g,T),this};var Ti=[1];function Xn(g){An.call(this,g)}function Ni(){return[1,yn,2,yn,3,yn,4,yn,5,yn]}function bn(g){An.call(this,g,-1,Ei)}function js(){return[1,ca,Xn,Ni]}A(Xn,An),A(bn,An);var Ei=[1];function fa(g){An.call(this,g)}function fr(){return[1,yn,2,yn,3,yn,4,yn,5,yn,6,wi]}A(fa,An);var Ka=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],Ya=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],hr=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Fs=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],Xa=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Vs=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Pa=[].concat(f(Ka),f(Ya),f(hr),f(Fs),f(Xa),f(Vs));function b(g,T,x){if(x=g.createShader(x===0?g.VERTEX_SHADER:g.FRAGMENT_SHADER),g.shaderSource(x,T),g.compileShader(x),!g.getShaderParameter(x,g.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+g.getShaderInfoLog(x));return x}function w(g){return oa(g,Ve,1).map(function(T){return{index:Fr(T,1),ga:Xe(T,2),label:Fe(T,3)!=null?ua(T,3):void 0,displayName:Fe(T,4)!=null?ua(T,4):void 0}})}function E(g){return{x:Xe(g,1),y:Xe(g,2),z:Xe(g,3),visibility:Fe(g,4)!=null?Xe(g,4):void 0}}function U(g,T){this.h=g,this.g=T,this.l=0}function Y(g,T,x){return function(k,M){var R=k.g;if(k.o===void 0){var z=b(R,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),F=b(R,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),Z=R.createProgram();if(R.attachShader(Z,z),R.attachShader(Z,F),R.linkProgram(Z),!R.getProgramParameter(Z,R.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+R.getProgramInfoLog(Z));z=k.o=Z,R.useProgram(z),F=R.getUniformLocation(z,"sampler0"),k.j={K:R.getAttribLocation(z,"aVertex"),J:R.getAttribLocation(z,"aTex"),ma:F},k.u=R.createBuffer(),R.bindBuffer(R.ARRAY_BUFFER,k.u),R.enableVertexAttribArray(k.j.K),R.vertexAttribPointer(k.j.K,2,R.FLOAT,!1,0,0),R.bufferData(R.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),R.STATIC_DRAW),R.bindBuffer(R.ARRAY_BUFFER,null),k.s=R.createBuffer(),R.bindBuffer(R.ARRAY_BUFFER,k.s),R.enableVertexAttribArray(k.j.J),R.vertexAttribPointer(k.j.J,2,R.FLOAT,!1,0,0),R.bufferData(R.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),R.STATIC_DRAW),R.bindBuffer(R.ARRAY_BUFFER,null),R.uniform1i(F,0)}z=k.j,R.useProgram(k.o),R.canvas.width=M.width,R.canvas.height=M.height,R.viewport(0,0,M.width,M.height),R.activeTexture(R.TEXTURE0),k.h.bindTexture2d(M.glName),R.enableVertexAttribArray(z.K),R.bindBuffer(R.ARRAY_BUFFER,k.u),R.vertexAttribPointer(z.K,2,R.FLOAT,!1,0,0),R.enableVertexAttribArray(z.J),R.bindBuffer(R.ARRAY_BUFFER,k.s),R.vertexAttribPointer(z.J,2,R.FLOAT,!1,0,0),R.bindFramebuffer(R.DRAW_FRAMEBUFFER?R.DRAW_FRAMEBUFFER:R.FRAMEBUFFER,null),R.clearColor(0,0,0,0),R.clear(R.COLOR_BUFFER_BIT),R.colorMask(!0,!0,!0,!0),R.drawArrays(R.TRIANGLE_FAN,0,4),R.disableVertexAttribArray(z.K),R.disableVertexAttribArray(z.J),R.bindBuffer(R.ARRAY_BUFFER,null),k.h.bindTexture2d(0)}(g,T),typeof g.g.canvas.transferToImageBitmap=="function"?Promise.resolve(g.g.canvas.transferToImageBitmap()):x?Promise.resolve(g.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(g.g.canvas):(g.i===void 0&&(g.i=document.createElement("canvas")),new Promise(function(k){g.i.height=g.g.canvas.height,g.i.width=g.g.canvas.width,g.i.getContext("2d",{}).drawImage(g.g.canvas,0,0,g.g.canvas.width,g.g.canvas.height),k(g.i)}))}function at(g){this.g=g}var P=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function ot(g,T){return T+g}function gt(g,T){window[g]=T}function xt(g){if(this.g=g,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=g&&g.locateFile||ot,typeof window=="object")var T=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if(typeof location>"u")throw Error("solutions can only be loaded on a web page or in a web worker");T=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.$=T,g.options)for(var x=(T=c(Object.keys(g.options))).next();!x.done;x=T.next()){x=x.value;var k=g.options[x].default;k!==void 0&&(this.j[x]=typeof k=="function"?k():k)}}function Lt(g){var T,x,k,M,R,z,F,Z,st,pt,yt;return it(function(St){switch(St.g){case 1:return g.Z?(T=g.g.files===void 0?[]:typeof g.g.files=="function"?g.g.files(g.j):g.g.files,V(St,it(function(Nt){switch(Nt.g){case 1:return Nt.o=2,V(Nt,WebAssembly.instantiate(P),4);case 4:Nt.g=3,Nt.o=0;break;case 2:return Nt.o=0,Nt.j=null,Nt.return(!1);case 3:return Nt.return(!0)}}),2)):St.return();case 2:if(x=St.h,typeof window=="object")return gt("createMediapipeSolutionsWasm",{locateFile:g.locateFile}),gt("createMediapipeSolutionsPackedAssets",{locateFile:g.locateFile}),z=T.filter(function(Nt){return Nt.data!==void 0}),F=T.filter(function(Nt){return Nt.data===void 0}),Z=Promise.all(z.map(function(Nt){var It=Gt(g,Nt.url);if(Nt.path!==void 0){var Kt=Nt.path;It=It.then(function(ye){return g.overrideFile(Kt,ye),Promise.resolve(ye)})}return It})),st=Promise.all(F.map(function(Nt){return Nt.simd===void 0||Nt.simd&&x||!Nt.simd&&!x?function(It){var Kt=document.createElement("script");return Kt.setAttribute("src",It),Kt.setAttribute("crossorigin","anonymous"),new Promise(function(ye){Kt.addEventListener("load",function(){ye()},!1),Kt.addEventListener("error",function(){ye()},!1),document.body.appendChild(Kt)})}(g.locateFile(Nt.url,g.$)):Promise.resolve()})).then(function(){var Nt,It,Kt;return it(function(ye){if(ye.g==1)return Nt=window.createMediapipeSolutionsWasm,It=window.createMediapipeSolutionsPackedAssets,Kt=g,V(ye,Nt(It),2);Kt.h=ye.h,ye.g=0})}),pt=it(function(Nt){return g.g.graph&&g.g.graph.url?Nt=V(Nt,Gt(g,g.g.graph.url),0):(Nt.g=0,Nt=void 0),Nt}),V(St,Promise.all([st,Z,pt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return k=T.filter(function(Nt){return Nt.simd===void 0||Nt.simd&&x||!Nt.simd&&!x}).map(function(Nt){return g.locateFile(Nt.url,g.$)}),importScripts.apply(null,f(k)),M=g,V(St,createMediapipeSolutionsWasm(Module),6);case 6:M.h=St.h,g.l=new OffscreenCanvas(1,1),g.h.canvas=g.l,R=g.h.GL.createContext(g.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),g.h.GL.makeContextCurrent(R),St.g=4;break;case 7:if(g.l=document.createElement("canvas"),!(yt=g.l.getContext("webgl2",{}))&&!(yt=g.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),St.return();g.G=yt,g.h.canvas=g.l,g.h.createContext(g.l,!0,!0,{});case 4:g.i=new g.h.SolutionWasm,g.Z=!1,St.g=0}})}function Gt(g,T){var x,k;return it(function(M){return T in g.H?M.return(g.H[T]):(x=g.locateFile(T,""),k=fetch(x).then(function(R){return R.arrayBuffer()}),g.H[T]=k,M.return(k))})}function qt(g,T,x){var k,M,R,z,F,Z,st,pt,yt,St,Nt,It,Kt,ye;return it(function(we){switch(we.g){case 1:if(!x)return we.return(T);for(k={},M=0,R=c(Object.keys(x)),z=R.next();!z.done;z=R.next())F=z.value,typeof(Z=x[F])!="string"&&Z.type==="texture"&&T[Z.stream]!==void 0&&++M;1<M&&(g.I=!1),st=c(Object.keys(x)),z=st.next();case 2:if(z.done){we.g=4;break}if(pt=z.value,typeof(yt=x[pt])=="string")return Kt=k,ye=pt,V(we,function(ha,ho,Wa){var _i;return it(function(po){return typeof Wa=="number"||Wa instanceof Uint8Array||Wa instanceof ha.h.Uint8BlobList?po.return(Wa):Wa instanceof ha.h.Texture2dDataOut?((_i=ha.u[ho])||(_i=new U(ha.h,ha.G),ha.u[ho]=_i),po.return(Y(_i,Wa,ha.I))):po.return(void 0)})}(g,pt,T[yt]),14);if(St=T[yt.stream],yt.type==="detection_list"){if(St){for(var vn=St.getRectList(),On=St.getLandmarksList(),kn=St.getClassificationsList(),ce=[],rn=0;rn<vn.size();++rn){var Pr=Bs(vn.get(rn),fa,fr);Pr={boundingBox:{xCenter:Xe(Pr,1),yCenter:Xe(Pr,2),height:Xe(Pr,3),width:Xe(Pr,4),rotation:Xe(Pr,5,0),rectId:Fr(Pr,6)},landmarks:oa(Bs(On.get(rn),bn,js),Xn,1).map(E),V:w(Bs(kn.get(rn),Is,qa))},ce.push(Pr)}vn=ce}else vn=[];k[pt]=vn,we.g=7;break}if(yt.type==="proto_list"){if(St){for(vn=Array(St.size()),On=0;On<St.size();On++)vn[On]=St.get(On);St.delete()}else vn=[];k[pt]=vn,we.g=7;break}if(St===void 0){we.g=3;break}if(yt.type==="float_list"){k[pt]=St,we.g=7;break}if(yt.type==="proto"){k[pt]=St,we.g=7;break}if(yt.type!=="texture")throw Error("Unknown output config type: '"+yt.type+"'");return(Nt=g.u[pt])||(Nt=new U(g.h,g.G),g.u[pt]=Nt),V(we,Y(Nt,St,g.I),13);case 13:It=we.h,k[pt]=It;case 7:yt.transform&&k[pt]&&(k[pt]=yt.transform(k[pt])),we.g=3;break;case 14:Kt[ye]=we.h;case 3:z=st.next(),we.g=2;break;case 4:return we.return(k)}})}function Ut(g,T){for(var x=T.name||"$",k=[].concat(f(T.wants)),M=new g.h.StringList,R=c(T.wants),z=R.next();!z.done;z=R.next())M.push_back(z.value);R=g.h.PacketListener.implement({onResults:function(F){for(var Z={},st=0;st<T.wants.length;++st)Z[k[st]]=F.get(st);var pt=g.listeners[x];pt&&(g.D=qt(g,Z,T.outs).then(function(yt){yt=pt(yt);for(var St=0;St<T.wants.length;++St){var Nt=Z[k[St]];typeof Nt=="object"&&Nt.hasOwnProperty&&Nt.hasOwnProperty("delete")&&Nt.delete()}yt&&(g.D=yt)}))}}),g.i.attachMultiListener(M,R),M.delete()}function Ot(g){var T=this;g=g||{};var x={url:"face_detection_short.binarypb"},k={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new xt({locateFile:g.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:x,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window=="object"&&window.navigator!==void 0&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function(M){var R,z,F,Z,st;return it(function(pt){switch(pt.g){case 1:R=c(M==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"]),z=R.next();case 2:if(z.done){pt.g=4;break}return F=z.value,Z="third_party/mediapipe/modules/face_detection/"+F,V(pt,Gt(T.g,F),5);case 5:st=pt.h,T.g.overrideFile(Z,st),z=R.next(),pt.g=2;break;case 4:return x.url=M==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",k.graphOptionXref.calculatorName=M==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",pt.return(!0)}})}},minDetectionConfidence:k}})}(r=xt.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},r.reset=function(){var g=this;return it(function(T){g.i&&(g.i.reset(),g.o={},g.u={}),T.g=0})},r.setOptions=function(g,T){var x=this;if(T=T||this.g.options){for(var k=[],M=[],R={},z=c(Object.keys(g)),F=z.next();!F.done;R={R:R.R,S:R.S},F=z.next()){var Z=F.value;Z in this.j&&this.j[Z]===g[Z]||(this.j[Z]=g[Z],(F=T[Z])!==void 0&&(F.onChange&&(R.R=F.onChange,R.S=g[Z],k.push(function(st){return function(){return it(function(pt){if(pt.g==1)return V(pt,st.R(st.S),2);pt.h===!0&&(x.s=!0),pt.g=0})}}(R))),F.graphOptionXref&&(Z={valueNumber:F.type===1?g[Z]:0,valueBoolean:F.type===0&&g[Z],valueString:F.type===2?g[Z]:""},F=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),F.graphOptionXref),Z),M.push(F))))}k.length===0&&M.length===0||(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(M),this.A=(this.A===void 0?[]:this.A).concat(k))}},r.initialize=function(){var g=this;return it(function(T){return T.g==1?V(T,Lt(g),2):T.g!=3?V(T,function(x){var k,M,R,z,F,Z,st,pt;return it(function(yt){if(yt.g==1)return x.g.graph&&x.g.graph.url&&x.Y===x.g.graph.url?yt.return():(x.s=!0,x.g.graph&&x.g.graph.url?(x.Y=x.g.graph.url,V(yt,Gt(x,x.g.graph.url),3)):void(yt.g=2));for(yt.g!=2&&(k=yt.h,x.i.loadGraph(k)),M=c(Object.keys(x.C)),R=M.next();!R.done;R=M.next())z=R.value,x.i.overrideFile(z,x.C[z]);if(x.C={},x.g.listeners)for(F=c(x.g.listeners),Z=F.next();!Z.done;Z=F.next())st=Z.value,Ut(x,st);pt=x.j,x.j={},x.setOptions(pt),yt.g=0})}(g),3):V(T,function(x){var k,M,R,z,F,Z;return it(function(st){switch(st.g){case 1:if(!x.s)return st.return();if(!x.A){st.g=2;break}k=c(x.A),M=k.next();case 3:if(M.done){st.g=5;break}return V(st,(0,M.value)(),4);case 4:M=k.next(),st.g=3;break;case 5:x.A=void 0;case 2:if(x.B){for(R=new x.h.GraphOptionChangeRequestList,z=c(x.B),F=z.next();!F.done;F=z.next())Z=F.value,R.push_back(Z);x.i.changeOptions(R),R.delete(),x.B=void 0}x.s=!1,st.g=0}})}(g),0)})},r.overrideFile=function(g,T){this.i?this.i.overrideFile(g,T):this.C[g]=T},r.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},r.send=function(g,T){var x,k,M,R,z,F,Z,st,pt,yt=this;return it(function(St){switch(St.g){case 1:return yt.g.inputs?(x=1e3*(T??performance.now()),V(St,yt.D,2)):St.return();case 2:return V(St,yt.initialize(),3);case 3:for(k=new yt.h.PacketDataList,M=c(Object.keys(g)),R=M.next();!R.done;R=M.next())if(z=R.value,F=yt.g.inputs[z]){t:{var Nt=g[z];switch(F.type){case"video":var It=yt.o[F.stream];if(It||(It=new U(yt.h,yt.G),yt.o[F.stream]=It),It.l===0&&(It.l=It.h.createTexture()),typeof HTMLVideoElement<"u"&&Nt instanceof HTMLVideoElement)var Kt=Nt.videoWidth,ye=Nt.videoHeight;else typeof HTMLImageElement<"u"&&Nt instanceof HTMLImageElement?(Kt=Nt.naturalWidth,ye=Nt.naturalHeight):(Kt=Nt.width,ye=Nt.height);ye={glName:It.l,width:Kt,height:ye},(Kt=It.g).canvas.width=ye.width,Kt.canvas.height=ye.height,Kt.activeTexture(Kt.TEXTURE0),It.h.bindTexture2d(It.l),Kt.texImage2D(Kt.TEXTURE_2D,0,Kt.RGBA,Kt.RGBA,Kt.UNSIGNED_BYTE,Nt),It.h.bindTexture2d(0),It=ye;break t;case"detections":for((It=yt.o[F.stream])||(It=new at(yt.h),yt.o[F.stream]=It),It.data||(It.data=new It.g.DetectionListData),It.data.reset(Nt.length),ye=0;ye<Nt.length;++ye){Kt=Nt[ye];var we=It.data,vn=we.setBoundingBox,On=ye,kn=Kt.boundingBox,ce=new fa;if(de(ce,1,kn.xCenter),de(ce,2,kn.yCenter),de(ce,3,kn.height),de(ce,4,kn.width),de(ce,5,kn.rotation),de(ce,6,kn.rectId),kn=cr(ce,fr),vn.call(we,On,kn),Kt.landmarks)for(we=0;we<Kt.landmarks.length;++we){var rn=!!(ce=Kt.landmarks[we]).visibility;On=(vn=It.data).addNormalizedLandmark,kn=ye,ce=Object.assign(Object.assign({},ce),{visibility:rn?ce.visibility:0}),de(rn=new Xn,1,ce.x),de(rn,2,ce.y),de(rn,3,ce.z),ce.visibility&&de(rn,4,ce.visibility),ce=cr(rn,Ni),On.call(vn,kn,ce)}if(Kt.V)for(we=0;we<Kt.V.length;++we)On=(vn=It.data).addClassification,kn=ye,ce=Kt.V[we],de(rn=new Ve,2,ce.ga),ce.index&&de(rn,1,ce.index),ce.label&&de(rn,3,ce.label),ce.displayName&&de(rn,4,ce.displayName),ce=cr(rn,Us),On.call(vn,kn,ce)}It=It.data;break t;default:It={}}}switch(Z=It,st=F.stream,F.type){case"video":k.pushTexture2d(Object.assign(Object.assign({},Z),{stream:st,timestamp:x}));break;case"detections":(pt=Z).stream=st,pt.timestamp=x,k.pushDetectionList(pt);break;default:throw Error("Unknown input config type: '"+F.type+"'")}}return yt.i.send(k),V(St,yt.D,4);case 4:k.delete(),St.g=0}})},r.onResults=function(g,T){this.listeners[T||"$"]=g},mt("Solution",xt),mt("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(r=Ot.prototype).close=function(){return this.g.close(),Promise.resolve()},r.onResults=function(g){this.g.onResults(g)},r.initialize=function(){var g=this;return it(function(T){return V(T,g.g.initialize(),0)})},r.reset=function(){this.g.reset()},r.send=function(g){var T=this;return it(function(x){return V(x,T.g.send(g),0)})},r.setOptions=function(g){this.g.setOptions(g)},mt("FaceDetection",Ot),mt("FACEDETECTION_LIPS",Ka),mt("FACEDETECTION_LEFT_EYE",Ya),mt("FACEDETECTION_LEFT_EYEBROW",hr),mt("FACEDETECTION_RIGHT_EYE",Fs),mt("FACEDETECTION_RIGHT_EYEBROW",Xa),mt("FACEDETECTION_FACE_OVAL",Vs),mt("FACEDETECTION_CONTOURS",Pa),mt("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),mt("VERSION","0.4.1646425229")}).call(dh);var _s=function(){return _s=Object.assign||function(r){for(var t,n=1,s=arguments.length;n<s;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r},_s.apply(this,arguments)};function La(r,t,n,s){return new(n||(n=Promise))(function(o,l){function c(d){try{p(s.next(d))}catch(y){l(y)}}function f(d){try{p(s.throw(d))}catch(y){l(y)}}function p(d){var y;d.done?o(d.value):(y=d.value,y instanceof n?y:new n(function(v){v(y)})).then(c,f)}p((s=s.apply(r,[])).next())})}function Ua(r,t){var n,s,o,l,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function f(p){return function(d){return function(y){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,s&&(o=2&y[0]?s.return:y[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,y[1])).done)return o;switch(s=0,o&&(y=[2&y[0],o.value]),y[0]){case 0:case 1:o=y;break;case 4:return c.label++,{value:y[1],done:!1};case 5:c.label++,s=y[1],y=[0];continue;case 7:y=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||y[0]!==6&&y[0]!==2)){c=0;continue}if(y[0]===3&&(!o||y[1]>o[0]&&y[1]<o[3])){c.label=y[1];break}if(y[0]===6&&c.label<o[1]){c.label=o[1],o=y;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(y);break}o[2]&&c.ops.pop(),c.trys.pop();continue}y=t.call(r,c)}catch(v){y=[6,v],s=0}finally{n=o=0}if(5&y[0])throw y[1];return{value:y[0]?y[1]:void 0,done:!0}}([p,d])}}}var N0=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],mh={modelType:"short",runtime:"mediapipe",maxFaces:1},rx=function(){function r(t){var n=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new nx.FaceDetection({locateFile:function(s,o){if(t.solutionPath){var l=t.solutionPath.replace(/\/+$/,"");return"".concat(l,"/").concat(s)}return"".concat(o,"/").concat(s)}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:t.modelType}),this.faceDetectorSolution.onResults(function(s){if(n.height=s.image.height,n.width=s.image.width,n.faces=[],s.detections!==null)for(var o=0,l=s.detections;o<l.length;o++){var c=l[o];n.faces.push(n.normalizedToAbsolute(c.landmarks,{xMin:p=(f=c.boundingBox).xCenter-f.width/2,xMax:p+f.width,yMin:d=f.yCenter-f.height/2,yMax:d+f.height,width:f.width,height:f.height}))}var f,p,d})}return r.prototype.normalizedToAbsolute=function(t,n){var s=this;return{keypoints:t.map(function(o,l){return{x:o.x*s.width,y:o.y*s.height,name:N0[l]}}),box:{xMin:n.xMin*this.width,yMin:n.yMin*this.height,xMax:n.xMax*this.width,yMax:n.yMax*this.height,width:n.width*this.width,height:n.height*this.height}}},r.prototype.estimateFaces=function(t,n){return La(this,void 0,void 0,function(){var s,o;return Ua(this,function(l){switch(l.label){case 0:return n&&n.flipHorizontal&&n.flipHorizontal!==this.selfieMode&&(this.selfieMode=n.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),t instanceof Ie?(o=ImageData.bind,[4,g0(t)]):[3,2];case 1:return s=new(o.apply(ImageData,[void 0,l.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:s=t,l.label=3;case 3:return t=s,[4,this.faceDetectorSolution.send({image:t})];case 4:return l.sent(),[2,this.faces]}})})},r.prototype.dispose=function(){this.faceDetectorSolution.close()},r.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},r.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},r}();function ax(r){return La(this,void 0,void 0,function(){var t,n;return Ua(this,function(s){switch(s.label){case 0:return t=function(o){if(o==null)return _s({},mh);var l=_s({},o);return l.runtime="mediapipe",l.modelType==null&&(l.modelType=mh.modelType),l.maxFaces==null&&(l.maxFaces=mh.maxFaces),l}(r),[4,(n=new rx(t)).initialize()];case 1:return s.sent(),[2,n]}})})}function E0(r){return r instanceof Ie?{height:r.shape[0],width:r.shape[1]}:{height:r.height,width:r.width}}function _0(r){return r instanceof Ie?r:y0(r)}function gh(r,t){L(r.width!==0,function(){return"".concat(t," width cannot be 0.")}),L(r.height!==0,function(){return"".concat(t," height cannot be 0.")})}function sx(r,t,n){var s=t.outputTensorSize,o=t.keepAspectRatio,l=t.borderMode,c=t.outputTensorFloatRange,f=E0(r),p=function(N,A){return{xCenter:.5*N.width,yCenter:.5*N.height,width:N.width,height:N.height,rotation:0}}(f),d=function(N,A,$){if($===void 0&&($=!1),!$)return{top:0,left:0,right:0,bottom:0};var B=A.height,C=A.width;gh(A,"targetSize"),gh(N,"roi");var V,lt,rt=B/C,Q=N.height/N.width,tt=0,it=0;return rt>Q?(V=N.width,lt=N.width*rt,it=(1-Q/rt)/2):(V=N.height/rt,lt=N.height,tt=(1-rt/Q)/2),N.width=V,N.height=lt,{top:it,left:tt,right:tt,bottom:it}}(p,s,o),y=function(N,A,$,B){var C=N.width,V=N.height,lt=1,rt=Math.cos(N.rotation),Q=Math.sin(N.rotation),tt=N.xCenter,it=N.yCenter,bt=1/A,Tt=1/$,mt=new Array(16);return mt[0]=C*rt*lt*bt,mt[1]=-V*Q*bt,mt[2]=0,mt[3]=(-.5*C*rt*lt+.5*V*Q+tt)*bt,mt[4]=C*Q*lt*Tt,mt[5]=V*rt*Tt,mt[6]=0,mt[7]=(-.5*V*rt-.5*C*Q*lt+it)*Tt,mt[8]=0,mt[9]=0,mt[10]=C*bt,mt[11]=0,mt[12]=0,mt[13]=0,mt[14]=0,mt[15]=1,function(Et){if(Et.length!==16)throw new Error("Array length must be 16 but got ".concat(Et.length));return[[Et[0],Et[1],Et[2],Et[3]],[Et[4],Et[5],Et[6],Et[7]],[Et[8],Et[9],Et[10],Et[11]],[Et[12],Et[13],Et[14],Et[15]]]}(mt)}(p,f.width,f.height),v=Zt(function(){var N=_0(r),A=Ts(function(C,V,lt){return gh(lt,"inputResolution"),[1/lt.width*C[0][0]*V.width,1/lt.height*C[0][1]*V.width,C[0][3]*V.width,1/lt.width*C[1][0]*V.height,1/lt.height*C[1][1]*V.height,C[1][3]*V.height,0,0]}(y,f,s),[1,8]),$=l==="zero"?"constant":"nearest",B=fo.transform(Tr(De(N,"float32")),A,"bilinear",$,0,[s.height,s.width]);return c!=null?function(C,V){var lt=function(rt,Q,tt,it){var bt=(it-tt)/255;return{scale:bt,offset:tt-0*bt}}(0,0,V[0],V[1]);return Zt(function(){return Mt(wt(C,lt.scale),lt.offset)})}(B,c):B});return{imageTensor:v,padding:d,transformationMatrix:y}}function Bm(r){r.reduceBoxesInLowestLayer==null&&(r.reduceBoxesInLowestLayer=!1),r.interpolatedScaleAspectRatio==null&&(r.interpolatedScaleAspectRatio=1),r.fixedAnchorSize==null&&(r.fixedAnchorSize=!1);for(var t=[],n=0;n<r.numLayers;){for(var s=[],o=[],l=[],c=[],f=n;f<r.strides.length&&r.strides[f]===r.strides[n];){var p=Lm(r.minScale,r.maxScale,f,r.strides.length);if(f===0&&r.reduceBoxesInLowestLayer)l.push(1),l.push(2),l.push(.5),c.push(.1),c.push(p),c.push(p);else{for(var d=0;d<r.aspectRatios.length;++d)l.push(r.aspectRatios[d]),c.push(p);if(r.interpolatedScaleAspectRatio>0){var y=f===r.strides.length-1?1:Lm(r.minScale,r.maxScale,f+1,r.strides.length);c.push(Math.sqrt(p*y)),l.push(r.interpolatedScaleAspectRatio)}}f++}for(var v=0;v<l.length;++v){var N=Math.sqrt(l[v]);s.push(c[v]/N),o.push(c[v]*N)}var A=0,$=0;if(r.featureMapHeight.length>0)A=r.featureMapHeight[n],$=r.featureMapWidth[n];else{var B=r.strides[n];A=Math.ceil(r.inputSizeHeight/B),$=Math.ceil(r.inputSizeWidth/B)}for(var C=0;C<A;++C)for(var V=0;V<$;++V)for(var lt=0;lt<s.length;++lt){var rt={xCenter:(V+r.anchorOffsetX)/$,yCenter:(C+r.anchorOffsetY)/A,width:0,height:0};r.fixedAnchorSize?(rt.width=1,rt.height=1):(rt.width=o[lt],rt.height=s[lt]),t.push(rt)}n=f}return t}function Lm(r,t,n,s){return s===1?.5*(r+t):r+(t-r)*n/(s-1)}function Um(r,t){var n=t[0],s=t[1];return[n*r[0]+s*r[1]+r[3],n*r[4]+s*r[5]+r[7]]}function ix(r,t,n,s){return La(this,void 0,void 0,function(){var o,l,c,f,p;return Ua(this,function(d){switch(d.label){case 0:return r.sort(function(y,v){return Math.max.apply(Math,v.score)-Math.max.apply(Math,y.score)}),o=Ts(r.map(function(y){return[y.locationData.relativeBoundingBox.yMin,y.locationData.relativeBoundingBox.xMin,y.locationData.relativeBoundingBox.yMax,y.locationData.relativeBoundingBox.xMax]})),l=Nn(r.map(function(y){return y.score[0]})),[4,fo.nonMaxSuppressionAsync(o,l,t,n)];case 1:return[4,(c=d.sent()).array()];case 2:return f=d.sent(),p=r.filter(function(y,v){return f.indexOf(v)>-1}),Me([o,l,c]),[2,p]}})})}function ox(r,t,n){return La(this,void 0,void 0,function(){var s,o,l,c,f;return Ua(this,function(p){switch(p.label){case 0:return s=r[0],o=r[1],l=function(d,y,v){return Zt(function(){var N,A,$,B;v.reverseOutputOrder?(A=on(Pt(d,[0,v.boxCoordOffset+0],[-1,1])),N=on(Pt(d,[0,v.boxCoordOffset+1],[-1,1])),B=on(Pt(d,[0,v.boxCoordOffset+2],[-1,1])),$=on(Pt(d,[0,v.boxCoordOffset+3],[-1,1]))):(N=on(Pt(d,[0,v.boxCoordOffset+0],[-1,1])),A=on(Pt(d,[0,v.boxCoordOffset+1],[-1,1])),$=on(Pt(d,[0,v.boxCoordOffset+2],[-1,1])),B=on(Pt(d,[0,v.boxCoordOffset+3],[-1,1]))),A=Mt(wt(ee(A,v.xScale),y.w),y.x),N=Mt(wt(ee(N,v.yScale),y.h),y.y),v.applyExponentialOnBoxSize?($=wt(za(ee($,v.hScale)),y.h),B=wt(za(ee(B,v.wScale)),y.w)):($=wt(ee($,v.hScale),y.h),B=wt(ee(B,v.wScale),y.h));var C=Wt(N,ee($,2)),V=Wt(A,ee(B,2)),lt=Mt(N,ee($,2)),rt=Mt(A,ee(B,2)),Q=mn([ct(C,[v.numBoxes,1]),ct(V,[v.numBoxes,1]),ct(lt,[v.numBoxes,1]),ct(rt,[v.numBoxes,1])],1);if(v.numKeypoints)for(var tt=0;tt<v.numKeypoints;++tt){var it=v.keypointCoordOffset+tt*v.numValuesPerKeypoint,bt=void 0,Tt=void 0;v.reverseOutputOrder?(bt=on(Pt(d,[0,it],[-1,1])),Tt=on(Pt(d,[0,it+1],[-1,1]))):(Tt=on(Pt(d,[0,it],[-1,1])),bt=on(Pt(d,[0,it+1],[-1,1])));var mt=Mt(wt(ee(bt,v.xScale),y.w),y.x),Et=Mt(wt(ee(Tt,v.yScale),y.h),y.y);Q=mn([Q,ct(mt,[v.numBoxes,1]),ct(Et,[v.numBoxes,1])],1)}return Q})}(o,t,n),c=Zt(function(){var d=s;return n.sigmoidScore?(n.scoreClippingThresh!=null&&(d=$3(s,-n.scoreClippingThresh,n.scoreClippingThresh)),d=ci(d)):d}),[4,ux(l,c,n)];case 1:return f=p.sent(),Me([l,c]),[2,f]}})})}function ux(r,t,n){return La(this,void 0,void 0,function(){var s,o,l,c,f,p,d,y,v,N,A,$;return Ua(this,function(B){switch(B.label){case 0:return s=[],[4,r.data()];case 1:return o=B.sent(),[4,t.data()];case 2:for(l=B.sent(),c=0;c<n.numBoxes;++c)if(!(n.minScoreThresh!=null&&l[c]<n.minScoreThresh||(f=c*n.numCoords,p=lx(o[f+0],o[f+1],o[f+2],o[f+3],l[c],n.flipVertically,c),(d=p.locationData.relativeBoundingBox).width<0||d.height<0))){if(n.numKeypoints>0)for((y=p.locationData).relativeKeypoints=[],v=n.numKeypoints*n.numValuesPerKeypoint,N=0;N<v;N+=n.numValuesPerKeypoint)A=f+n.keypointCoordOffset+N,$={x:o[A+0],y:n.flipVertically?1-o[A+1]:o[A+1]},y.relativeKeypoints.push($);s.push(p)}return[2,s]}})})}function lx(r,t,n,s,o,l,c){return{score:[o],ind:c,locationData:{relativeBoundingBox:{xMin:t,yMin:l?1-n:r,xMax:s,yMax:l?1-r:n,width:s-t,height:n-r}}}}var Xl,cx={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},fx={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},yh={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},hx={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},px={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},dx={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},mx={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},gx=function(){function r(t,n,s){this.detectorModel=n,this.maxFaces=s,t==="full"?(this.imageToTensorConfig=mx,this.tensorsToDetectionConfig=px,this.anchors=Bm(fx)):(this.imageToTensorConfig=dx,this.tensorsToDetectionConfig=hx,this.anchors=Bm(cx));var o=Nn(this.anchors.map(function(p){return p.width})),l=Nn(this.anchors.map(function(p){return p.height})),c=Nn(this.anchors.map(function(p){return p.xCenter})),f=Nn(this.anchors.map(function(p){return p.yCenter}));this.anchorTensor={x:c,y:f,w:o,h:l}}return r.prototype.dispose=function(){this.detectorModel.dispose(),Me([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},r.prototype.reset=function(){},r.prototype.detectFaces=function(t,n){return n===void 0&&(n=!1),La(this,void 0,void 0,function(){var s,o,l,c,f,p,d,y,v,N,A;return Ua(this,function($){switch($.label){case 0:return t==null?(this.reset(),[2,[]]):(s=Zt(function(){var B=De(_0(t),"float32");return n&&(B=on(fo.flipLeftRight(Tr(B,0)),[0])),B}),o=sx(s,this.imageToTensorConfig),l=o.imageTensor,c=o.transformationMatrix,f=this.detectorModel.execute(l,"Identity:0"),p=function(B){return Zt(function(){var C=function(rt){return Zt(function(){return[Pt(rt,[0,0,0],[1,-1,1]),Pt(rt,[0,0,1],[1,-1,-1])]})}(B),V=C[0],lt=C[1];return{boxes:on(lt),logits:on(V)}})}(f),d=p.boxes,[4,ox([y=p.logits,d],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(v=$.sent()).length===0?(Me([s,l,f,y,d]),[2,v]):[4,ix(v,this.maxFaces,.3)];case 2:return N=$.sent(),A=function(B,C){B===void 0&&(B=[]);var V,lt=(V=C,[].concat.apply([],V));return B.forEach(function(rt){var Q=rt.locationData;Q.relativeKeypoints.forEach(function(Et){var Ct=Um(lt,[Et.x,Et.y]),Vt=Ct[0],$t=Ct[1];Et.x=Vt,Et.y=$t});var tt=Q.relativeBoundingBox,it=Number.MAX_VALUE,bt=Number.MAX_VALUE,Tt=Number.MIN_VALUE,mt=Number.MIN_VALUE;[[tt.xMin,tt.yMin],[tt.xMin+tt.width,tt.yMin],[tt.xMin+tt.width,tt.yMin+tt.height],[tt.xMin,tt.yMin+tt.height]].forEach(function(Et){var Ct=Um(lt,Et),Vt=Ct[0],$t=Ct[1];it=Math.min(it,Vt),Tt=Math.max(Tt,Vt),bt=Math.min(bt,$t),mt=Math.max(mt,$t)}),Q.relativeBoundingBox={xMin:it,xMax:Tt,yMin:bt,yMax:mt,width:Tt-it,height:mt-bt}}),B}(N,c),Me([s,l,f,y,d]),[2,A]}})})},r.prototype.estimateFaces=function(t,n){return La(this,void 0,void 0,function(){var s,o;return Ua(this,function(l){return s=E0(t),o=!!n&&n.flipHorizontal,[2,this.detectFaces(t,o).then(function(c){return c.map(function(f){for(var p=f.locationData.relativeKeypoints.map(function($,B){return _s(_s({},$),{x:$.x*s.width,y:$.y*s.height,name:N0[B]})}),d=f.locationData.relativeBoundingBox,y=0,v=["width","xMax","xMin"];y<v.length;y++)d[v[y]]*=s.width;for(var N=0,A=["height","yMax","yMin"];N<A.length;N++)d[A[N]]*=s.height;return{keypoints:p,box:d}})})]})})},r}();function yx(r){return La(this,void 0,void 0,function(){var t,n,s;return Ua(this,function(o){switch(o.label){case 0:return t=function(l){if(l==null)return _s({},yh);var c=_s({},l);return c.modelType==null&&(c.modelType=yh.modelType),c.maxFaces==null&&(c.maxFaces=yh.maxFaces),c.detectorModelUrl==null&&(c.modelType==="full"?c.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":c.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),c}(r),n=typeof t.detectorModelUrl=="string"&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,w0(t.detectorModelUrl,{fromTFHub:n})];case 1:return s=o.sent(),[2,new gx(t.modelType,s,t.maxFaces)]}})})}function bx(r,t){return La(this,void 0,void 0,function(){var n,s;return Ua(this,function(o){if(r===Xl.MediaPipeFaceDetector){if(s=void 0,(n=t)!=null){if(n.runtime==="tfjs")return[2,yx(n)];if(n.runtime==="mediapipe")return[2,ax(n)];s=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' "+"or 'mediapipe', but got ".concat(s))}throw new Error("".concat(r," is not a supported model name."))})})}function bh(r){return r.width*r.height}function Im(r){var t=r.xCenter-r.width/2,n=t+r.width,s=r.yCenter-r.height/2;return{xMin:t,xMax:n,yMin:s,yMax:s+r.height,width:r.width,height:r.height}}function vx(r,t){var n=Im(r),s=Im(t);if(!function(c,f){return!(c.xMax<f.xMin||f.xMax<c.xMin||c.yMax<f.yMin||f.yMax<c.yMin)}(n,s))return 0;var o=bh(function(c,f){var p=Math.max(c.xMin,f.xMin),d=Math.min(c.xMax,f.xMax),y=Math.max(c.yMin,f.yMin),v=Math.min(c.yMax,f.yMax);return{xMin:p,xMax:d,yMin:y,yMax:v,width:Math.max(d-p,0),height:Math.max(v-y,0)}}(n,s)),l=bh(n)+bh(s)-o;return l>0?o/l:0}function Sx(r,t,n,s){var o=r.width,l=r.height,c=1,f=Math.cos(r.rotation),p=Math.sin(r.rotation),d=r.xCenter,y=r.yCenter,v=1/t,N=1/n,A=new Array(16);return A[0]=o*f*c*v,A[1]=-l*p*v,A[2]=0,A[3]=(-.5*o*f*c+.5*l*p+d)*v,A[4]=o*p*c*N,A[5]=l*f*N,A[6]=0,A[7]=(-.5*l*f-.5*o*p*c+y)*N,A[8]=0,A[9]=0,A[10]=o*v,A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,function($){if($.length!==16)throw new Error("Array length must be 16 but got "+$.length);return[[$[0],$[1],$[2],$[3]],[$[4],$[5],$[6],$[7]],[$[8],$[9],$[10],$[11]],[$[12],$[13],$[14],$[15]]]}(A)}function x0(r){return r instanceof Ie?{height:r.shape[0],width:r.shape[1]}:{height:r.height,width:r.width}}function A0(r){return r-2*Math.PI*Math.floor((r+Math.PI)/(2*Math.PI))}function O0(r){return r instanceof Ie?r:y0(r)}function vh(r,t){L(r.width!==0,function(){return t+" width cannot be 0."}),L(r.height!==0,function(){return t+" height cannot be 0."})}function wx(r,t){var n=function(s,o,l,c){var f=o-s,p=c-l,d=p/f;return{scale:d,offset:l-s*d}}(0,255,t[0],t[1]);return Zt(function(){return Mt(wt(r,n.scale),n.offset)})}function Tx(r,t,n){var s=t.outputTensorSize,o=t.keepAspectRatio,l=t.outputTensorFloatRange,c=x0(r),f=function(v,N){return N?{xCenter:N.xCenter*v.width,yCenter:N.yCenter*v.height,width:N.width*v.width,height:N.height*v.height,rotation:N.rotation}:{xCenter:.5*v.width,yCenter:.5*v.height,width:v.width,height:v.height,rotation:0}}(c,n),p=function(v,N,A){if(A===void 0&&(A=!1),!A)return{top:0,left:0,right:0,bottom:0};var $=N.height,B=N.width;vh(N,"targetSize"),vh(v,"roi");var C,V,lt=$/B,rt=v.height/v.width,Q=0,tt=0;return lt>rt?(C=v.width,V=v.width*lt,tt=(1-rt/lt)/2):(C=v.height/lt,V=v.height,Q=(1-lt/rt)/2),v.width=C,v.height=V,{top:tt,left:Q,right:Q,bottom:tt}}(f,s,o),d=Sx(f,c.width,c.height),y=Zt(function(){var v=O0(r),N=Ts(function(B,C,V){return vh(V,"inputResolution"),[1/V.width*B[0][0]*C.width,1/V.height*B[0][1]*C.width,B[0][3]*C.width,1/V.width*B[1][0]*C.height,1/V.height*B[1][1]*C.height,B[1][3]*C.height,0,0]}(d,c,s),[1,8]),A="nearest",$=fo.transform(Tr(De(v,"float32")),N,"bilinear",A,0,[s.height,s.width]);return l!=null?wx($,l):$});return{imageTensor:y,padding:p,transformationMatrix:d}}function jm(r){return{xCenter:r.xMin+r.width/2,yCenter:r.yMin+r.height/2,width:r.width,height:r.height}}function Nx(r){var t=r.relativeKeypoints;if(t.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var n=Number.MAX_VALUE,s=Number.MAX_VALUE,o=Number.MIN_VALUE,l=Number.MIN_VALUE;return t.forEach(function(c){n=Math.min(n,c.x),o=Math.max(o,c.x),s=Math.min(s,c.y),l=Math.max(l,c.y)}),{xCenter:(n+o)/2,yCenter:(s+l)/2,width:o-n,height:l-s}}function Fm(r,t,n,s,o){var l=n==="rect"?function(c,f,p){var d,y=c.locationData;return d=jm(y.boundingBox),d}(r):function(c,f){var p=c.locationData;return f==="boundingbox"?jm(p.relativeBoundingBox):Nx(p)}(r,t);return o&&(l.rotation=function(c,f,p){var d,y=c.locationData,v=p.rotationVectorStartKeypointIndex,N=p.rotationVectorEndKeypointIndex;d=p.rotationVectorTargetAngle?p.rotationVectorTargetAngle:Math.PI*p.rotationVectorTargetAngleDegree/180;var A=y.relativeKeypoints[v].x*f.width,$=y.relativeKeypoints[v].y*f.height,B=y.relativeKeypoints[N].x*f.width,C=y.relativeKeypoints[N].y*f.height;return A0(d-Math.atan2(-(C-$),B-A))}(r,s,o)),l}function Ex(r,t,n){for(var s=0;s<t.length;++s){var o=t[s],l=n[r[s]];l.x=o.x,l.y=o.y}}function _x(r,t,n,s){if(typeof t=="string"){if(t==="copy")for(var o=0;o<n.length;++o)s[r[o]].z=n[o].z}else{var l=function(c,f){for(var p=0,d=0;d<f.length;++d)p+=c[f[d]].z;return p/f.length}(s,t);for(o=0;o<r.length;++o)s[r[o]].z=l}}function xx(r,t){for(var n=function(f){var p=[].concat.apply([],f.map(function(A){return A.indexesMapping}));if(p.length===0)throw new Error("There should be at least one landmark in indexes mapping");var d=p[0],y=p[0],v=new Set(p);v.forEach(function(A){d=Math.min(d,A),y=Math.max(y,A)});var N=v.size;if(d!==0)throw new Error("Indexes are expected to start with 0 instead of "+d);if(y+1!==N)throw new Error("Indexes should have no gaps but "+(y-N+1)+" indexes are missing");return N}(t),s=new Array(n).fill(null).map(Object),o=0;o<r.length;++o){var l=r[o],c=t[o];if(l.length!==c.indexesMapping.length)throw new Error("There are "+l.length+" refinement landmarks while mapping has "+c.indexesMapping.length);Ex(c.indexesMapping,l,s),_x(c.indexesMapping,c.zRefinement,l,s)}return s}function Ax(r,t){return r.map(function(n){var s=Lr(Lr({},n),{x:n.x*t.width,y:n.y*t.height});return n.z!=null&&(s.z=n.z*t.width),s})}function Ox(r,t){return r==="none"?t:function(n){return 1/(1+Math.exp(-n))}(t)}function si(r,t,n,s){return ka(this,void 0,void 0,function(){var o,l,c,f,p,d,y,v;return Da(this,function(N){switch(N.label){case 0:return n=n||t.flipHorizontally||!1,s=s||t.flipVertically||!1,o=r.size,l=o/t.numLandmarks,[4,r.data()];case 1:for(c=N.sent(),f=[],p=0;p<t.numLandmarks;++p)d=p*l,(v={x:0,y:0}).x=n?t.inputImageWidth-c[d]:c[d],l>1&&(v.y=s?t.inputImageHeight-c[d+1]:c[d+1]),l>2&&(v.z=c[d+2]),l>3&&(v.score=Ox(t.visibilityActivation,c[d+3])),f.push(v);for(y=0;y<f.length;++y)(v=f[y]).x=v.x/t.inputImageWidth,v.y=v.y/t.inputImageHeight,v.z=v.z/t.inputImageWidth/(t.normalizeZ||1);return[2,f]}})})}function Vm(r,t,n){var s=r.width,o=r.height,l=r.rotation;if(n.rotation==null&&n.rotationDegree==null||(l=function(d,y){return y.rotation!=null?d+=y.rotation:y.rotationDegree!=null&&(d+=Math.PI*y.rotationDegree/180),A0(d)}(l,n)),l===0)r.xCenter=r.xCenter+s*n.shiftX,r.yCenter=r.yCenter+o*n.shiftY;else{var c=(t.width*s*n.shiftX*Math.cos(l)-t.height*o*n.shiftY*Math.sin(l))/t.width,f=(t.width*s*n.shiftX*Math.sin(l)+t.height*o*n.shiftY*Math.cos(l))/t.height;r.xCenter=r.xCenter+c,r.yCenter=r.yCenter+f}{var p=Math.max(s*t.width,o*t.height);s=p/t.width,o=p/t.height}return r.width=s*n.scaleX,r.height=o*n.scaleY,r}(Xl||(Xl={})).MediaPipeFaceDetector="MediaPipeFaceDetector";var Sh={runtime:"tfjs",maxFaces:1,refineLandmarks:!1,landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"},wh={flipHorizontal:!1,staticImageMode:!1},Hm={shiftX:0,shiftY:0,scaleX:1.5,scaleY:1.5},kx={outputTensorSize:{width:192,height:192},outputTensorFloatRange:[0,1]},Gm={numLandmarks:468,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Dx={numLandmarks:80,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},qm={numLandmarks:71,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Km={numLandmarks:5,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},$x={indexesMapping:Array.from(Array(468).keys()),zRefinement:"copy"},Rx={indexesMapping:[61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407],zRefinement:"none"},Cx={indexesMapping:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173,130,25,110,24,23,22,26,112,243,247,30,29,27,28,56,190,226,31,228,229,230,231,232,233,244,113,225,224,223,222,221,189,35,124,46,53,52,65,143,111,117,118,119,120,121,128,245,156,70,63,105,66,107,55,193],zRefinement:"none"},zx={indexesMapping:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398,359,255,339,254,253,252,256,341,463,467,260,259,257,258,286,414,446,261,448,449,450,451,452,453,464,342,445,444,443,442,441,413,265,353,276,283,282,295,372,340,346,347,348,349,350,357,465,383,300,293,334,296,336,285,417],zRefinement:"none"},Mx={indexesMapping:[468,469,470,471,472],zRefinement:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173]},Bx={indexesMapping:[473,474,475,476,477],zRefinement:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398]},Pl,Lx=function(){function r(t,n,s,o){this.detector=t,this.landmarkModel=n,this.maxFaces=s,this.withAttention=o,this.prevFaceRectsFromLandmarks=null}return r.prototype.estimateFaces=function(t,n){return ka(this,void 0,void 0,function(){var s,o,l,c,f,p,d,y,v,N,A,$,B,C=this;return Da(this,function(V){switch(V.label){case 0:return s=function(Q){if(Q==null)return Lr({},wh);var tt=Lr({},Q);return tt.flipHorizontal==null&&(tt.flipHorizontal=wh.flipHorizontal),tt.staticImageMode==null&&(tt.staticImageMode=wh.staticImageMode),tt}(n),t==null?(this.reset(),[2,[]]):(o=x0(t),l=Zt(function(){var Q=De(O0(t),"float32");return s.flipHorizontal&&(Q=on(fo.flipLeftRight(Tr(Q,0)),[0])),Q}),c=this.prevFaceRectsFromLandmarks,s.staticImageMode||c==null||c.length<this.maxFaces?[4,this.detector.detectFaces(l,!1)]:[3,2]);case 1:return(p=V.sent()).length===0?(this.reset(),l.dispose(),[2,[]]):(f=p.map(function(Q){return C.faceDetectionFrontDetectionToRoi(Q,o)}),[3,3]);case 2:f=[],V.label=3;case 3:return lt=.5,rt=[],[f,c||[]].forEach(function(Q){return Q.forEach(function(tt){(rt=rt.filter(function(it){return vx(tt,it)<=lt})).push(tt)})}),d=rt,[4,Promise.all(d.map(function(Q){return C.faceLandmark(Q,l)}))];case 4:for(y=V.sent(),v=[],this.prevFaceRectsFromLandmarks=[],N=0;N<y.length;++N)(A=y[N])!=null&&(this.prevFaceRectsFromLandmarks.push(this.faceLandmarksToRoi(A,o)),($=Ax(A,o))!=null&&$.forEach(function(Q,tt){var it=T0.get(tt);it!=null&&(Q.name=it)}),B=Zh($),v.push({keypoints:$,box:B.locationData.relativeBoundingBox}));return l.dispose(),[2,v]}var lt,rt})})},r.prototype.dispose=function(){this.detector.dispose(),this.landmarkModel.dispose()},r.prototype.reset=function(){this.detector.reset(),this.prevFaceRectsFromLandmarks=null},r.prototype.faceDetectionFrontDetectionToRoi=function(t,n){return Vm(Fm(t,"boundingbox","normRect",n,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:0}),n,Hm)},r.prototype.faceLandmark=function(t,n){return ka(this,void 0,void 0,function(){var s,o,l,c,f,p,d;return Da(this,function(y){switch(y.label){case 0:return s=Tx(n,kx,t).imageTensor,o=["output_faceflag"].concat(this.withAttention?["output_mesh_identity","output_lips","Identity_6:0","Identity_1:0","Identity_2:0","Identity_5:0"]:["output_mesh"]),l=this.landmarkModel.execute(s,o),c=l[0],f=l.slice(1),[4,c.data()];case 1:return y.sent()[0]<.5?(Me(l),Me(s),[2,null]):this.withAttention?[4,this.tensorsToFaceLandmarksWithAttention(f)]:[3,3];case 2:return p=y.sent(),[3,5];case 3:return[4,this.tensorsToFaceLandmarks(f)];case 4:p=y.sent(),y.label=5;case 5:return d=function(v,N,A){A===void 0&&(A={ignoreRotation:!1});for(var $=[],B=0,C=v;B<C.length;B++){var V=C[B],lt=V.x-.5,rt=V.y-.5,Q=A.ignoreRotation?0:N.rotation,tt=Math.cos(Q)*lt-Math.sin(Q)*rt,it=Math.sin(Q)*lt+Math.cos(Q)*rt;tt=tt*N.width+N.xCenter,it=it*N.height+N.yCenter;var bt=V.z*N.width,Tt=Lr({},V);Tt.x=tt,Tt.y=it,Tt.z=bt,$.push(Tt)}return $}(p,t),Me(l),Me(s),[2,d]}})})},r.prototype.tensorsToFaceLandmarks=function(t){return ka(this,void 0,void 0,function(){return Da(this,function(n){return[2,si(t[0],Gm)]})})},r.prototype.tensorsToFaceLandmarksWithAttention=function(t){return ka(this,void 0,void 0,function(){var n,s,o,l,c,f;return Da(this,function(p){switch(p.label){case 0:return[4,si(t[0],Gm)];case 1:return n=p.sent(),[4,si(t[1],Dx)];case 2:return s=p.sent(),[4,si(t[3],qm)];case 3:return o=p.sent(),[4,si(t[5],qm)];case 4:return l=p.sent(),[4,si(t[4],Km)];case 5:return c=p.sent(),[4,si(t[2],Km)];case 6:return f=p.sent(),[2,xx([n,s,o,l,c,f],[$x,Rx,Cx,zx,Mx,Bx])]}})})},r.prototype.faceLandmarksToRoi=function(t,n){return Vm(Fm(Zh(t),"boundingbox","normRect",n,{rotationVectorStartKeypointIndex:33,rotationVectorEndKeypointIndex:263,rotationVectorTargetAngleDegree:0}),n,Hm)},r}();function Ux(r){return ka(this,void 0,void 0,function(){var t,n,s,o;return Da(this,function(l){switch(l.label){case 0:return t=function(c){if(c==null)return Lr({},Sh);var f=Lr({},c);return f.runtime="tfjs",f.maxFaces==null&&(f.maxFaces=Sh.maxFaces),f.refineLandmarks==null&&(f.refineLandmarks=Sh.refineLandmarks),f.landmarkModelUrl==null&&(f.landmarkModelUrl=f.refineLandmarks?"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/attention_mesh/1":"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"),f}(r),n=typeof t.landmarkModelUrl=="string"&&t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,w0(t.landmarkModelUrl,{fromTFHub:n})];case 1:return s=l.sent(),[4,bx(Xl.MediaPipeFaceDetector,{modelType:"short",maxFaces:t.maxFaces,detectorModelUrl:t.detectorModelUrl,runtime:t.runtime})];case 2:return o=l.sent(),[2,new Lx(o,s,t.maxFaces,t.refineLandmarks)]}})})}function Ix(r,t){return ka(this,void 0,void 0,function(){var n,s;return Da(this,function(o){if(r===Pl.MediaPipeFaceMesh){if(s=void 0,(n=t)!=null){if(n.runtime==="tfjs")return[2,Ux(n)];if(n.runtime==="mediapipe")return[2,ex(n)];s=n.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+s)}throw new Error(r+" is not a supported model name.")})})}(function(r){r.MediaPipeFaceMesh="MediaPipeFaceMesh"})(Pl||(Pl={}));function jx(r){const[t,n]=Mr.useState(null),[s,o]=Mr.useState("");return Mr.useEffect(()=>{if(!r){n(null);return}(async()=>{try{const c=await Ix(Pl.MediaPipeFaceMesh,{runtime:"mediapipe",solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh",maxFaces:1});n(c),o("")}catch(c){o("Failed to load face mesh model"),console.error(c)}})()},[r]),{model:t,errMsg:s,setErrMsg:o}}function Fx(r,t,n,s){return{startCamera:async()=>{try{const c=await navigator.mediaDevices.getUserMedia({video:!0});if(r.current){t(!1),r.current.srcObject=c;const f=()=>{t(!0),r.current.removeEventListener("playing",f)};r.current.addEventListener("playing",f)}n("")}catch(c){c.name==="NotAllowedError"?n("Permission denied: Please allow camera access."):c.name==="NotFoundError"?n("No camera device found."):n("Error accessing webcam"),console.error(c)}},stopCamera:()=>{r.current&&r.current.srcObject&&(r.current.srcObject.getTracks().forEach(c=>c.stop()),r.current.srcObject=null),s?.current&&s.current.getContext("2d").clearRect(0,0,s.current.width,s.current.height)}}}const El={current:null};function Vx(r,t){for(const n of t)r.beginPath(),r.arc(n.x,n.y,2,0,2*Math.PI),r.fillStyle="green",r.fill()}function Hx(r,t,n,s,o=!1){const l=Mr.useRef(null),c=Mr.useCallback(async()=>{if(!(!r||!t.current||!s||t.current.readyState!==4)){try{const f=await r.estimateFaces(t.current),p=n.current,d=p.getContext("2d");if(d.clearRect(0,0,p.width,p.height),f.length>0)if(El.current=f[0].keypoints,o)Vx(d,El.current);else for(const y of El.current)d.beginPath(),d.arc(y.x,y.y,2,0,2*Math.PI),d.fillStyle="lime",d.fill();else El.current=null}catch(f){console.error("Face detection failed:",f)}l.current=requestAnimationFrame(c)}},[r,s,o,t,n]);Mr.useEffect(()=>(r&&s?l.current=requestAnimationFrame(c):l.current!==null&&(cancelAnimationFrame(l.current),l.current=null),()=>{l.current!==null&&(cancelAnimationFrame(l.current),l.current=null)}),[r,s,c])}function Gx(){const r=Mr.useRef(null),t=Mr.useRef(null),[n,s]=Mr.useState(!1),[o,l]=Mr.useState(!1),{model:c,errMsg:f,setErrMsg:p}=jx(n),{startCamera:d,stopCamera:y}=Fx(r,l,p,t);Hx(c,r,t,o,!0);const v=()=>{n?(y(),s(!1),l(!1)):(d(),s(!0))};return wr.jsxs("div",{className:"face-tracker",children:[wr.jsxs("div",{style:{width:640,height:480,border:"1px solid #ccc",borderRadius:"8px",backgroundImage:o?"none":'url("/placeholder.jpg")',backgroundSize:"cover",backgroundPosition:"center",position:"relative"},children:[wr.jsx("video",{ref:r,autoPlay:!0,muted:!0,playsInline:!0,width:640,height:480,className:"webcam",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}}),wr.jsx("canvas",{ref:t,width:640,height:480,style:{position:"absolute",top:0,left:0,pointerEvents:"none"}})]}),f&&wr.jsx("p",{className:"error-msg",style:{color:"red"},children:f}),wr.jsx("div",{style:{color:c?"green":"red",fontWeight:"bold"},children:c?"Face Mesh Model Loaded":"Model not loaded"}),wr.jsx("button",{onClick:v,style:{margin:"10px",marginBottom:"10px"},children:n?"Stop Camera":"Start Camera"})]})}function qx(){return wr.jsxs("div",{children:[wr.jsx("h1",{children:"Face Tracker Demo"}),wr.jsx(Gx,{})]})}Ag.createRoot(document.getElementById("root")).render(wr.jsx(Mr.StrictMode,{children:wr.jsx(qx,{})}));
