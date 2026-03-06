(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var th={exports:{}},Yo={};var j_;function JM(){if(j_)return Yo;j_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Yo.Fragment=t,Yo.jsx=n,Yo.jsxs=n,Yo}var Z_;function $M(){return Z_||(Z_=1,th.exports=JM()),th.exports}var xt=$M(),eh={exports:{}},se={};var K_;function t1(){if(K_)return se;K_=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function S(P,j,_t){this.props=P,this.context=j,this.refs=M,this.updater=_t||b}S.prototype.isReactComponent={},S.prototype.setState=function(P,j){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,j,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=S.prototype;function N(P,j,_t){this.props=P,this.context=j,this.refs=M,this.updater=_t||b}var U=N.prototype=new w;U.constructor=N,A(U,S.prototype),U.isPureReactComponent=!0;var H=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(P,j,_t){var Rt=_t.ref;return{$$typeof:a,type:P,key:j,ref:Rt!==void 0?Rt:null,props:_t}}function ut(P,j){return D(P.type,j,P.props)}function B(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function V(P){var j={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_t){return j[_t]})}var K=/\/+/g;function at(P,j){return typeof P=="object"&&P!==null&&P.key!=null?V(""+P.key):j.toString(36)}function Q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(I,I):(P.status="pending",P.then(function(j){P.status==="pending"&&(P.status="fulfilled",P.value=j)},function(j){P.status==="pending"&&(P.status="rejected",P.reason=j)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function L(P,j,_t,Rt,zt){var nt=typeof P;(nt==="undefined"||nt==="boolean")&&(P=null);var vt=!1;if(P===null)vt=!0;else switch(nt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(P.$$typeof){case a:case t:vt=!0;break;case _:return vt=P._init,L(vt(P._payload),j,_t,Rt,zt)}}if(vt)return zt=zt(P),vt=Rt===""?"."+at(P,0):Rt,H(zt)?(_t="",vt!=null&&(_t=vt.replace(K,"$&/")+"/"),L(zt,j,_t,"",function(Kt){return Kt})):zt!=null&&(B(zt)&&(zt=ut(zt,_t+(zt.key==null||P&&P.key===zt.key?"":(""+zt.key).replace(K,"$&/")+"/")+vt)),j.push(zt)),1;vt=0;var Tt=Rt===""?".":Rt+":";if(H(P))for(var kt=0;kt<P.length;kt++)Rt=P[kt],nt=Tt+at(Rt,kt),vt+=L(Rt,j,_t,nt,zt);else if(kt=x(P),typeof kt=="function")for(P=kt.call(P),kt=0;!(Rt=P.next()).done;)Rt=Rt.value,nt=Tt+at(Rt,kt++),vt+=L(Rt,j,_t,nt,zt);else if(nt==="object"){if(typeof P.then=="function")return L(Q(P),j,_t,Rt,zt);throw j=String(P),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return vt}function F(P,j,_t){if(P==null)return P;var Rt=[],zt=0;return L(P,Rt,"","",function(nt){return j.call(_t,nt,zt++)}),Rt}function st(P){if(P._status===-1){var j=P._result;j=j(),j.then(function(_t){(P._status===0||P._status===-1)&&(P._status=1,P._result=_t)},function(_t){(P._status===0||P._status===-1)&&(P._status=2,P._result=_t)}),P._status===-1&&(P._status=0,P._result=j)}if(P._status===1)return P._result.default;throw P._result}var ft=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},yt={map:F,forEach:function(P,j,_t){F(P,function(){j.apply(this,arguments)},_t)},count:function(P){var j=0;return F(P,function(){j++}),j},toArray:function(P){return F(P,function(j){return j})||[]},only:function(P){if(!B(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return se.Activity=v,se.Children=yt,se.Component=S,se.Fragment=n,se.Profiler=o,se.PureComponent=N,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,se.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},se.cache=function(P){return function(){return P.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(P,j,_t){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Rt=A({},P.props),zt=P.key;if(j!=null)for(nt in j.key!==void 0&&(zt=""+j.key),j)!T.call(j,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&j.ref===void 0||(Rt[nt]=j[nt]);var nt=arguments.length-2;if(nt===1)Rt.children=_t;else if(1<nt){for(var vt=Array(nt),Tt=0;Tt<nt;Tt++)vt[Tt]=arguments[Tt+2];Rt.children=vt}return D(P.type,zt,Rt)},se.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},se.createElement=function(P,j,_t){var Rt,zt={},nt=null;if(j!=null)for(Rt in j.key!==void 0&&(nt=""+j.key),j)T.call(j,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(zt[Rt]=j[Rt]);var vt=arguments.length-2;if(vt===1)zt.children=_t;else if(1<vt){for(var Tt=Array(vt),kt=0;kt<vt;kt++)Tt[kt]=arguments[kt+2];zt.children=Tt}if(P&&P.defaultProps)for(Rt in vt=P.defaultProps,vt)zt[Rt]===void 0&&(zt[Rt]=vt[Rt]);return D(P,nt,zt)},se.createRef=function(){return{current:null}},se.forwardRef=function(P){return{$$typeof:p,render:P}},se.isValidElement=B,se.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:st}},se.memo=function(P,j){return{$$typeof:h,type:P,compare:j===void 0?null:j}},se.startTransition=function(P){var j=z.T,_t={};z.T=_t;try{var Rt=P(),zt=z.S;zt!==null&&zt(_t,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(I,ft)}catch(nt){ft(nt)}finally{j!==null&&_t.types!==null&&(j.types=_t.types),z.T=j}},se.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},se.use=function(P){return z.H.use(P)},se.useActionState=function(P,j,_t){return z.H.useActionState(P,j,_t)},se.useCallback=function(P,j){return z.H.useCallback(P,j)},se.useContext=function(P){return z.H.useContext(P)},se.useDebugValue=function(){},se.useDeferredValue=function(P,j){return z.H.useDeferredValue(P,j)},se.useEffect=function(P,j){return z.H.useEffect(P,j)},se.useEffectEvent=function(P){return z.H.useEffectEvent(P)},se.useId=function(){return z.H.useId()},se.useImperativeHandle=function(P,j,_t){return z.H.useImperativeHandle(P,j,_t)},se.useInsertionEffect=function(P,j){return z.H.useInsertionEffect(P,j)},se.useLayoutEffect=function(P,j){return z.H.useLayoutEffect(P,j)},se.useMemo=function(P,j){return z.H.useMemo(P,j)},se.useOptimistic=function(P,j){return z.H.useOptimistic(P,j)},se.useReducer=function(P,j,_t){return z.H.useReducer(P,j,_t)},se.useRef=function(P){return z.H.useRef(P)},se.useState=function(P){return z.H.useState(P)},se.useSyncExternalStore=function(P,j,_t){return z.H.useSyncExternalStore(P,j,_t)},se.useTransition=function(){return z.H.useTransition()},se.version="19.2.4",se}var Q_;function Yp(){return Q_||(Q_=1,eh.exports=t1()),eh.exports}var Ge=Yp(),nh={exports:{}},jo={},ih={exports:{}},ah={};var J_;function e1(){return J_||(J_=1,(function(a){function t(L,F){var st=L.length;L.push(F);t:for(;0<st;){var ft=st-1>>>1,yt=L[ft];if(0<o(yt,F))L[ft]=F,L[st]=yt,st=ft;else break t}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var F=L[0],st=L.pop();if(st!==F){L[0]=st;t:for(var ft=0,yt=L.length,P=yt>>>1;ft<P;){var j=2*(ft+1)-1,_t=L[j],Rt=j+1,zt=L[Rt];if(0>o(_t,st))Rt<yt&&0>o(zt,_t)?(L[ft]=zt,L[Rt]=st,ft=Rt):(L[ft]=_t,L[j]=st,ft=j);else if(Rt<yt&&0>o(zt,st))L[ft]=zt,L[Rt]=st,ft=Rt;else break t}}return F}function o(L,F){var st=L.sortIndex-F.sortIndex;return st!==0?st:L.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,p=u.now();a.unstable_now=function(){return u.now()-p}}var m=[],h=[],_=1,v=null,g=3,x=!1,b=!1,A=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var F=n(h);F!==null;){if(F.callback===null)r(h);else if(F.startTime<=L)r(h),F.sortIndex=F.expirationTime,t(m,F);else break;F=n(h)}}function H(L){if(A=!1,U(L),!b)if(n(m)!==null)b=!0,I||(I=!0,V());else{var F=n(h);F!==null&&Q(H,F.startTime-L)}}var I=!1,z=-1,T=5,D=-1;function ut(){return M?!0:!(a.unstable_now()-D<T)}function B(){if(M=!1,I){var L=a.unstable_now();D=L;var F=!0;try{t:{b=!1,A&&(A=!1,w(z),z=-1),x=!0;var st=g;try{e:{for(U(L),v=n(m);v!==null&&!(v.expirationTime>L&&ut());){var ft=v.callback;if(typeof ft=="function"){v.callback=null,g=v.priorityLevel;var yt=ft(v.expirationTime<=L);if(L=a.unstable_now(),typeof yt=="function"){v.callback=yt,U(L),F=!0;break e}v===n(m)&&r(m),U(L)}else r(m);v=n(m)}if(v!==null)F=!0;else{var P=n(h);P!==null&&Q(H,P.startTime-L),F=!1}}break t}finally{v=null,g=st,x=!1}F=void 0}}finally{F?V():I=!1}}}var V;if(typeof N=="function")V=function(){N(B)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,at=K.port2;K.port1.onmessage=B,V=function(){at.postMessage(null)}}else V=function(){S(B,0)};function Q(L,F){z=S(function(){L(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(L){L.callback=null},a.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(L){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var st=g;g=F;try{return L()}finally{g=st}},a.unstable_requestPaint=function(){M=!0},a.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var st=g;g=L;try{return F()}finally{g=st}},a.unstable_scheduleCallback=function(L,F,st){var ft=a.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?ft+st:ft):st=ft,L){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=st+yt,L={id:_++,callback:F,priorityLevel:L,startTime:st,expirationTime:yt,sortIndex:-1},st>ft?(L.sortIndex=st,t(h,L),n(m)===null&&L===n(h)&&(A?(w(z),z=-1):A=!0,Q(H,st-ft))):(L.sortIndex=yt,t(m,L),b||x||(b=!0,I||(I=!0,V()))),L},a.unstable_shouldYield=ut,a.unstable_wrapCallback=function(L){var F=g;return function(){var st=g;g=F;try{return L.apply(this,arguments)}finally{g=st}}}})(ah)),ah}var $_;function n1(){return $_||($_=1,ih.exports=e1()),ih.exports}var rh={exports:{}},Tn={};var tv;function i1(){if(tv)return Tn;tv=1;var a=Yp();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:h,implementation:_}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,_)},Tn.flushSync=function(m){var h=u.T,_=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=h,r.p=_,r.d.f()}},Tn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,v=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Tn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Tn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,v=p(_,h.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Tn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,h){return m(h)},Tn.useFormState=function(m,h,_){return u.H.useFormState(m,h,_)},Tn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var ev;function a1(){if(ev)return rh.exports;ev=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),rh.exports=i1(),rh.exports}var nv;function r1(){if(nv)return jo;nv=1;var a=n1(),t=Yp(),n=a1();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function h(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(r(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),e;if(d===l)return m(f),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=d;else{for(var y=!1,R=f.child;R;){if(R===s){y=!0,s=f,l=d;break}if(R===l){y=!0,l=f,s=d;break}R=R.sibling}if(!y){for(R=d.child;R;){if(R===s){y=!0,s=d,l=f;break}if(R===l){y=!0,l=d,s=f;break}R=R.sibling}if(!y)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),ut=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var K=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case U:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:at(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return at(e(i))}catch{}}return null}var Q=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},ft=[],yt=-1;function P(e){return{current:e}}function j(e){0>yt||(e.current=ft[yt],ft[yt]=null,yt--)}function _t(e,i){yt++,ft[yt]=e.current,e.current=i}var Rt=P(null),zt=P(null),nt=P(null),vt=P(null);function Tt(e,i){switch(_t(nt,i),_t(zt,e),_t(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?__(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=__(i),e=v_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Rt),_t(Rt,e)}function kt(){j(Rt),j(zt),j(nt)}function Kt(e){e.memoizedState!==null&&_t(vt,e);var i=Rt.current,s=v_(i,e.type);i!==s&&(_t(zt,e),_t(Rt,s))}function $t(e){zt.current===e&&(j(Rt),j(zt)),vt.current===e&&(j(vt),ko._currentValue=st)}var Qe,_e;function pe(e){if(Qe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Qe=i&&i[1]||"",_e=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+_e}var De=!1;function oe(e,i){if(!e||De)return"";De=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var rt=lt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(lt){rt=lt}e.call(gt.prototype)}}else{try{throw Error()}catch(lt){rt=lt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&rt&&typeof lt.stack=="string")return[lt.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],R=d[1];if(y&&R){var G=y.split(`
`),tt=R.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<tt.length&&!tt[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===tt.length)for(l=G.length-1,f=tt.length-1;1<=l&&0<=f&&G[l]!==tt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==tt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==tt[f]){var ht=`
`+G[l].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=l&&0<=f);break}}}finally{De=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?pe(s):""}function Ke(e,i){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==i&&i!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return pe("Activity");default:return""}}function k(e){try{var i="",s=null;do i+=Ke(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var qe=Object.prototype.hasOwnProperty,be=a.unstable_scheduleCallback,Ne=a.unstable_cancelCallback,qt=a.unstable_shouldYield,O=a.unstable_requestPaint,E=a.unstable_now,Y=a.unstable_getCurrentPriorityLevel,pt=a.unstable_ImmediatePriority,St=a.unstable_UserBlockingPriority,dt=a.unstable_NormalPriority,Xt=a.unstable_LowPriority,wt=a.unstable_IdlePriority,Zt=a.log,te=a.unstable_setDisableYieldValue,Et=null,Mt=null;function Ot(e){if(typeof Zt=="function"&&te(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(Et,e)}catch{}}var Lt=Math.clz32?Math.clz32:q,Pt=Math.log,ce=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Pt(e)/ce|0)|0}var Ct=256,At=262144,Ft=4194304;function bt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=l&134217727;return R!==0?(l=R&~d,l!==0?f=bt(l):(y&=R,y!==0?f=bt(y):s||(s=R&~e,s!==0&&(f=bt(s))))):(R=l&~d,R!==0?f=bt(R):y!==0?f=bt(y):s||(s=l&~e,s!==0&&(f=bt(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function It(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ne(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Ee(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function wn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xi(e,i,s,l,f,d){var y=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,tt=e.hiddenUpdates;for(s=y&~s;0<s;){var ht=31-Lt(s),gt=1<<ht;R[ht]=0,G[ht]=-1;var rt=tt[ht];if(rt!==null)for(tt[ht]=null,ht=0;ht<rt.length;ht++){var lt=rt[ht];lt!==null&&(lt.lane&=-536870913)}s&=~gt}l!==0&&io(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~i))}function io(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Lt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function Wr(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Lt(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function bl(e,i){var s=i&-i;return s=(s&42)!==0?1:qr(s),(s&(e.suspendedLanes|i))!==0?0:s}function qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oi(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:G_(e.type))}function jr(e,i){var s=F.p;try{return F.p=e,i()}finally{F.p=s}}var yi=Math.random().toString(36).slice(2),rn="__reactFiber$"+yi,hn="__reactProps$"+yi,Ki="__reactContainer$"+yi,Da="__reactEvents$"+yi,El="__reactListeners$"+yi,Tl="__reactHandles$"+yi,Al="__reactResources$"+yi,fr="__reactMarker$"+yi;function ao(e){delete e[rn],delete e[hn],delete e[Da],delete e[El],delete e[Tl]}function Ua(e){var i=e[rn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Ki]||s[rn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=T_(e);e!==null;){if(s=e[rn])return s;e=T_(e)}return i}e=s,s=e.parentNode}return null}function Na(e){if(e=e[rn]||e[Ki]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function dr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function C(e){var i=e[Al];return i||(i=e[Al]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function W(e){e[fr]=!0}var ot=new Set,et={};function J(e,i){Dt(e,i),Dt(e+"Capture",i)}function Dt(e,i){for(et[e]=i,e=0;e<i.length;e++)ot.add(i[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ut={},Wt={};function jt(e){return qe.call(Wt,e)?!0:qe.call(Ut,e)?!1:Bt.test(e)?Wt[e]=!0:(Ut[e]=!0,!1)}function ee(e,i,s){if(jt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function re(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Ht(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function ue(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ye(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,d.call(this,y)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ae(e){if(!e._valueTracker){var i=Ye(e)?"checked":"value";e._valueTracker=je(e,i,""+e[i])}}function pn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Ye(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function Vt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function ae(e){return e.replace(Dn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Un(e,i,s,l,f,d,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ue(i)):e.value!==""+ue(i)&&(e.value=""+ue(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?Si(e,y,ue(i)):s!=null?Si(e,y,ue(s)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ue(R):e.removeAttribute("name")}function jn(e,i,s,l,f,d,y,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ae(e);return}s=s!=null?""+ue(s):"",i=i!=null?""+ue(i):s,R||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=R?e.checked:!!l,e.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Ae(e)}function Si(e,i,s){i==="number"&&Vt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Zn(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ue(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Le(e,i,s){if(i!=null&&(i=""+ue(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+ue(s):""}function sn(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(Q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ue(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Ae(e)}function Nn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var on=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||on.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Qi(e,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Mi(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Mi(e,d,i[d])}function Zr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(e){return Zy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var Ku=null;function Qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kr=null,Qr=null;function gm(e){var i=Na(e);if(i&&(e=i.stateNode)){var s=e[hn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Un(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ae(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[hn]||null;if(!f)throw Error(r(90));Un(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&pn(l)}break t;case"textarea":Le(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Zn(e,!!s.multiple,i,!1)}}}var Ju=!1;function _m(e,i,s){if(Ju)return e(i,s);Ju=!0;try{var l=e(i);return l}finally{if(Ju=!1,(Kr!==null||Qr!==null)&&(pc(),Kr&&(i=Kr,e=Qr,Qr=Kr=null,gm(i),e)))for(i=0;i<e.length;i++)gm(e[i])}}function ro(e,i){var s=e.stateNode;if(s===null)return null;var l=s[hn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=!1;if($i)try{var so={};Object.defineProperty(so,"passive",{get:function(){$u=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{$u=!1}var La=null,tf=null,Cl=null;function vm(){if(Cl)return Cl;var e,i=tf,s=i.length,l,f="value"in La?La.value:La.textContent,d=f.length;for(e=0;e<s&&i[e]===f[e];e++);var y=s-e;for(l=1;l<=y&&i[s-l]===f[d-l];l++);return Cl=f.slice(e,1<l?1-l:void 0)}function wl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Dl(){return!0}function xm(){return!1}function Bn(e){function i(s,l,f,d,y){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(s=e[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Dl:xm,this.isPropagationStopped=xm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),i}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Bn(hr),oo=v({},hr,{view:0,detail:0}),Ky=Bn(oo),ef,nf,lo,Nl=v({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(ef=e.screenX-lo.screenX,nf=e.screenY-lo.screenY):nf=ef=0,lo=e),ef)},movementY:function(e){return"movementY"in e?e.movementY:nf}}),ym=Bn(Nl),Qy=v({},Nl,{dataTransfer:0}),Jy=Bn(Qy),$y=v({},oo,{relatedTarget:0}),af=Bn($y),tS=v({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),eS=Bn(tS),nS=v({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iS=Bn(nS),aS=v({},hr,{data:0}),Sm=Bn(aS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=oS[e])?!!i[e]:!1}function rf(){return lS}var cS=v({},oo,{key:function(e){if(e.key){var i=rS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uS=Bn(cS),fS=v({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mm=Bn(fS),dS=v({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),hS=Bn(dS),pS=v({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=Bn(pS),gS=v({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_S=Bn(gS),vS=v({},hr,{newState:0,oldState:0}),xS=Bn(vS),yS=[9,13,27,32],sf=$i&&"CompositionEvent"in window,co=null;$i&&"documentMode"in document&&(co=document.documentMode);var SS=$i&&"TextEvent"in window&&!co,bm=$i&&(!sf||co&&8<co&&11>=co),Em=" ",Tm=!1;function Am(e,i){switch(e){case"keyup":return yS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function MS(e,i){switch(e){case"compositionend":return Rm(i);case"keypress":return i.which!==32?null:(Tm=!0,Em);case"textInput":return e=i.data,e===Em&&Tm?null:e;default:return null}}function bS(e,i){if(Jr)return e==="compositionend"||!sf&&Am(e,i)?(e=vm(),Cl=tf=La=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bm&&i.locale!=="ko"?null:i.data;default:return null}}var ES={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!ES[e.type]:i==="textarea"}function wm(e,i,s,l){Kr?Qr?Qr.push(l):Qr=[l]:Kr=l,i=Sc(i,"onChange"),0<i.length&&(s=new Ul("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var uo=null,fo=null;function TS(e){f_(e,0)}function Ll(e){var i=dr(e);if(pn(i))return e}function Dm(e,i){if(e==="change")return i}var Um=!1;if($i){var of;if($i){var lf="oninput"in document;if(!lf){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),lf=typeof Nm.oninput=="function"}of=lf}else of=!1;Um=of&&(!document.documentMode||9<document.documentMode)}function Lm(){uo&&(uo.detachEvent("onpropertychange",Om),fo=uo=null)}function Om(e){if(e.propertyName==="value"&&Ll(fo)){var i=[];wm(i,fo,e,Qu(e)),_m(TS,i)}}function AS(e,i,s){e==="focusin"?(Lm(),uo=i,fo=s,uo.attachEvent("onpropertychange",Om)):e==="focusout"&&Lm()}function RS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(fo)}function CS(e,i){if(e==="click")return Ll(i)}function wS(e,i){if(e==="input"||e==="change")return Ll(i)}function DS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Kn=typeof Object.is=="function"?Object.is:DS;function ho(e,i){if(Kn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!qe.call(i,f)||!Kn(e[f],i[f]))return!1}return!0}function Pm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fm(e,i){var s=Pm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Pm(s)}}function zm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?zm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Bm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Vt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Vt(e.document)}return i}function cf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var US=$i&&"documentMode"in document&&11>=document.documentMode,$r=null,uf=null,po=null,ff=!1;function Im(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ff||$r==null||$r!==Vt(l)||(l=$r,"selectionStart"in l&&cf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),po&&ho(po,l)||(po=l,l=Sc(uf,"onSelect"),0<l.length&&(i=new Ul("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=$r)))}function pr(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var ts={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},df={},Hm={};$i&&(Hm=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function mr(e){if(df[e])return df[e];if(!ts[e])return e;var i=ts[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Hm)return df[e]=i[s];return e}var Gm=mr("animationend"),Vm=mr("animationiteration"),km=mr("animationstart"),NS=mr("transitionrun"),LS=mr("transitionstart"),OS=mr("transitioncancel"),Xm=mr("transitionend"),Wm=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function bi(e,i){Wm.set(e,i),J(i,[e])}var Ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],es=0,pf=0;function Pl(){for(var e=es,i=pf=es=0;i<e;){var s=si[i];si[i++]=null;var l=si[i];si[i++]=null;var f=si[i];si[i++]=null;var d=si[i];if(si[i++]=null,l!==null&&f!==null){var y=l.pending;y===null?f.next=f:(f.next=y.next,y.next=f),l.pending=f}d!==0&&qm(s,f,d)}}function Fl(e,i,s,l){si[es++]=e,si[es++]=i,si[es++]=s,si[es++]=l,pf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function mf(e,i,s,l){return Fl(e,i,s,l),zl(e)}function gr(e,i){return Fl(e,null,null,i),zl(e)}function qm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-Lt(s),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function zl(e){if(50<Fo)throw Fo=0,Ed=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ns={};function PS(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,i,s,l){return new PS(e,i,s,l)}function gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,i){var s=e.alternate;return s===null?(s=Qn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Ym(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Bl(e,i,s,l,f,d){var y=0;if(l=e,typeof e=="function")gf(e)&&(y=1);else if(typeof e=="string")y=HM(e,s,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Qn(31,s,i,f),e.elementType=D,e.lanes=d,e;case A:return _r(s.children,f,d,i);case M:y=8,f|=24;break;case S:return e=Qn(12,s,i,f|2),e.elementType=S,e.lanes=d,e;case H:return e=Qn(13,s,i,f),e.elementType=H,e.lanes=d,e;case I:return e=Qn(19,s,i,f),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:y=10;break t;case w:y=9;break t;case U:y=11;break t;case z:y=14;break t;case T:y=16,l=null;break t}y=29,s=Error(r(130,e===null?"null":typeof e,"")),l=null}return i=Qn(y,s,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function _r(e,i,s,l){return e=Qn(7,e,l,i),e.lanes=s,e}function _f(e,i,s){return e=Qn(6,e,null,i),e.lanes=s,e}function jm(e){var i=Qn(18,null,null,0);return i.stateNode=e,i}function vf(e,i,s){return i=Qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Zm=new WeakMap;function oi(e,i){if(typeof e=="object"&&e!==null){var s=Zm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:k(i)},Zm.set(e,i),i)}return{value:e,source:i,stack:k(i)}}var is=[],as=0,Il=null,mo=0,li=[],ci=0,Oa=null,Pi=1,Fi="";function ea(e,i){is[as++]=mo,is[as++]=Il,Il=e,mo=i}function Km(e,i,s){li[ci++]=Pi,li[ci++]=Fi,li[ci++]=Oa,Oa=e;var l=Pi;e=Fi;var f=32-Lt(l)-1;l&=~(1<<f),s+=1;var d=32-Lt(i)+f;if(30<d){var y=f-f%5;d=(l&(1<<y)-1).toString(32),l>>=y,f-=y,Pi=1<<32-Lt(i)+f|s<<f|l,Fi=d+e}else Pi=1<<d|s<<f|l,Fi=e}function xf(e){e.return!==null&&(ea(e,1),Km(e,1,0))}function yf(e){for(;e===Il;)Il=is[--as],is[as]=null,mo=is[--as],is[as]=null;for(;e===Oa;)Oa=li[--ci],li[ci]=null,Fi=li[--ci],li[ci]=null,Pi=li[--ci],li[ci]=null}function Qm(e,i){li[ci++]=Pi,li[ci++]=Fi,li[ci++]=Oa,Pi=i.id,Fi=i.overflow,Oa=e}var yn=null,Xe=null,ye=!1,Pa=null,ui=!1,Sf=Error(r(519));function Fa(e){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(oi(i,e)),Sf}function Jm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[rn]=e,i[hn]=l,s){case"dialog":ge("cancel",i),ge("close",i);break;case"iframe":case"object":case"embed":ge("load",i);break;case"video":case"audio":for(s=0;s<Bo.length;s++)ge(Bo[s],i);break;case"source":ge("error",i);break;case"img":case"image":case"link":ge("error",i),ge("load",i);break;case"details":ge("toggle",i);break;case"input":ge("invalid",i),jn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",i);break;case"textarea":ge("invalid",i),sn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||m_(i.textContent,s)?(l.popover!=null&&(ge("beforetoggle",i),ge("toggle",i)),l.onScroll!=null&&ge("scroll",i),l.onScrollEnd!=null&&ge("scrollend",i),l.onClick!=null&&(i.onclick=Ji),i=!0):i=!1,i||Fa(e,!0)}function $m(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:yn=yn.return}}function rs(e){if(e!==yn)return!1;if(!ye)return $m(e),ye=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Id(e.type,e.memoizedProps)),s=!s),s&&Xe&&Fa(e),$m(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xe=E_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xe=E_(e)}else i===27?(i=Xe,Ka(e.type)?(e=Xd,Xd=null,Xe=e):Xe=i):Xe=yn?di(e.stateNode.nextSibling):null;return!0}function vr(){Xe=yn=null,ye=!1}function Mf(){var e=Pa;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Pa=null),e}function go(e){Pa===null?Pa=[e]:Pa.push(e)}var bf=P(null),xr=null,na=null;function za(e,i,s){_t(bf,i._currentValue),i._currentValue=s}function ia(e){e._currentValue=bf.current,j(bf)}function Ef(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Tf(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var y=f.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=f;for(var G=0;G<i.length;G++)if(R.context===i[G]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),Ef(d.return,s,e),l||(y=null);break t}d=R.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(r(341));y.lanes|=s,d=y.alternate,d!==null&&(d.lanes|=s),Ef(y,s,e),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===e){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function ss(e,i,s,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var R=f.type;Kn(f.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(f===vt.current){if(y=f.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ko):e=[ko])}f=f.return}e!==null&&Tf(i,e,s,l),i.flags|=262144}function Hl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yr(e){xr=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return t0(xr,e)}function Gl(e,i){return xr===null&&yr(e),t0(e,i)}function t0(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},na===null){if(e===null)throw Error(r(308));na=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else na=na.next=i;return s}var FS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},zS=a.unstable_scheduleCallback,BS=a.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Af(){return{controller:new FS,data:new Map,refCount:0}}function _o(e){e.refCount--,e.refCount===0&&zS(BS,function(){e.controller.abort()})}var vo=null,Rf=0,os=0,ls=null;function IS(e,i){if(vo===null){var s=vo=[];Rf=0,os=Dd(),ls={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Rf++,i.then(e0,e0),i}function e0(){if(--Rf===0&&vo!==null){ls!==null&&(ls.status="fulfilled");var e=vo;vo=null,os=0,ls=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function HS(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var n0=L.S;L.S=function(e,i){Ig=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&IS(e,i),n0!==null&&n0(e,i)};var Sr=P(null);function Cf(){var e=Sr.current;return e!==null?e:ke.pooledCache}function Vl(e,i){i===null?_t(Sr,Sr.current):_t(Sr,i.pool)}function i0(){var e=Cf();return e===null?null:{parent:ln._currentValue,pool:e}}var cs=Error(r(460)),wf=Error(r(474)),kl=Error(r(542)),Xl={then:function(){}};function a0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function r0(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Ji,Ji),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,o0(e),e;default:if(typeof i.status=="string")i.then(Ji,Ji);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,o0(e),e}throw br=i,cs}}function Mr(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(br=s,cs):s}}var br=null;function s0(){if(br===null)throw Error(r(459));var e=br;return br=null,e}function o0(e){if(e===cs||e===kl)throw Error(r(483))}var us=null,xo=0;function Wl(e){var i=xo;return xo+=1,us===null&&(us=[]),r0(us,e,i)}function yo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ql(e,i){throw i.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function l0(e){function i(Z,X){if(e){var $=Z.deletions;$===null?(Z.deletions=[X],Z.flags|=16):$.push(X)}}function s(Z,X){if(!e)return null;for(;X!==null;)i(Z,X),X=X.sibling;return null}function l(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function f(Z,X){return Z=ta(Z,X),Z.index=0,Z.sibling=null,Z}function d(Z,X,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<X?(Z.flags|=67108866,X):$):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function y(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,X,$,mt){return X===null||X.tag!==6?(X=_f($,Z.mode,mt),X.return=Z,X):(X=f(X,$),X.return=Z,X)}function G(Z,X,$,mt){var Qt=$.type;return Qt===A?ht(Z,X,$.props.children,mt,$.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&Mr(Qt)===X.type)?(X=f(X,$.props),yo(X,$),X.return=Z,X):(X=Bl($.type,$.key,$.props,null,Z.mode,mt),yo(X,$),X.return=Z,X)}function tt(Z,X,$,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=vf($,Z.mode,mt),X.return=Z,X):(X=f(X,$.children||[]),X.return=Z,X)}function ht(Z,X,$,mt,Qt){return X===null||X.tag!==7?(X=_r($,Z.mode,mt,Qt),X.return=Z,X):(X=f(X,$),X.return=Z,X)}function gt(Z,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=_f(""+X,Z.mode,$),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case x:return $=Bl(X.type,X.key,X.props,null,Z.mode,$),yo($,X),$.return=Z,$;case b:return X=vf(X,Z.mode,$),X.return=Z,X;case T:return X=Mr(X),gt(Z,X,$)}if(Q(X)||V(X))return X=_r(X,Z.mode,$,null),X.return=Z,X;if(typeof X.then=="function")return gt(Z,Wl(X),$);if(X.$$typeof===N)return gt(Z,Gl(Z,X),$);ql(Z,X)}return null}function rt(Z,X,$,mt){var Qt=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qt!==null?null:R(Z,X,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Qt?G(Z,X,$,mt):null;case b:return $.key===Qt?tt(Z,X,$,mt):null;case T:return $=Mr($),rt(Z,X,$,mt)}if(Q($)||V($))return Qt!==null?null:ht(Z,X,$,mt,null);if(typeof $.then=="function")return rt(Z,X,Wl($),mt);if($.$$typeof===N)return rt(Z,X,Gl(Z,$),mt);ql(Z,$)}return null}function lt(Z,X,$,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get($)||null,R(X,Z,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return Z=Z.get(mt.key===null?$:mt.key)||null,G(X,Z,mt,Qt);case b:return Z=Z.get(mt.key===null?$:mt.key)||null,tt(X,Z,mt,Qt);case T:return mt=Mr(mt),lt(Z,X,$,mt,Qt)}if(Q(mt)||V(mt))return Z=Z.get($)||null,ht(X,Z,mt,Qt,null);if(typeof mt.then=="function")return lt(Z,X,$,Wl(mt),Qt);if(mt.$$typeof===N)return lt(Z,X,$,Gl(X,mt),Qt);ql(X,mt)}return null}function Gt(Z,X,$,mt){for(var Qt=null,Re=null,Yt=X,fe=X=0,xe=null;Yt!==null&&fe<$.length;fe++){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var Ce=rt(Z,Yt,$[fe],mt);if(Ce===null){Yt===null&&(Yt=xe);break}e&&Yt&&Ce.alternate===null&&i(Z,Yt),X=d(Ce,X,fe),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce,Yt=xe}if(fe===$.length)return s(Z,Yt),ye&&ea(Z,fe),Qt;if(Yt===null){for(;fe<$.length;fe++)Yt=gt(Z,$[fe],mt),Yt!==null&&(X=d(Yt,X,fe),Re===null?Qt=Yt:Re.sibling=Yt,Re=Yt);return ye&&ea(Z,fe),Qt}for(Yt=l(Yt);fe<$.length;fe++)xe=lt(Yt,Z,fe,$[fe],mt),xe!==null&&(e&&xe.alternate!==null&&Yt.delete(xe.key===null?fe:xe.key),X=d(xe,X,fe),Re===null?Qt=xe:Re.sibling=xe,Re=xe);return e&&Yt.forEach(function(er){return i(Z,er)}),ye&&ea(Z,fe),Qt}function Jt(Z,X,$,mt){if($==null)throw Error(r(151));for(var Qt=null,Re=null,Yt=X,fe=X=0,xe=null,Ce=$.next();Yt!==null&&!Ce.done;fe++,Ce=$.next()){Yt.index>fe?(xe=Yt,Yt=null):xe=Yt.sibling;var er=rt(Z,Yt,Ce.value,mt);if(er===null){Yt===null&&(Yt=xe);break}e&&Yt&&er.alternate===null&&i(Z,Yt),X=d(er,X,fe),Re===null?Qt=er:Re.sibling=er,Re=er,Yt=xe}if(Ce.done)return s(Z,Yt),ye&&ea(Z,fe),Qt;if(Yt===null){for(;!Ce.done;fe++,Ce=$.next())Ce=gt(Z,Ce.value,mt),Ce!==null&&(X=d(Ce,X,fe),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return ye&&ea(Z,fe),Qt}for(Yt=l(Yt);!Ce.done;fe++,Ce=$.next())Ce=lt(Yt,Z,fe,Ce.value,mt),Ce!==null&&(e&&Ce.alternate!==null&&Yt.delete(Ce.key===null?fe:Ce.key),X=d(Ce,X,fe),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return e&&Yt.forEach(function(QM){return i(Z,QM)}),ye&&ea(Z,fe),Qt}function He(Z,X,$,mt){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Qt=$.key;X!==null;){if(X.key===Qt){if(Qt=$.type,Qt===A){if(X.tag===7){s(Z,X.sibling),mt=f(X,$.props.children),mt.return=Z,Z=mt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&Mr(Qt)===X.type){s(Z,X.sibling),mt=f(X,$.props),yo(mt,$),mt.return=Z,Z=mt;break t}s(Z,X);break}else i(Z,X);X=X.sibling}$.type===A?(mt=_r($.props.children,Z.mode,mt,$.key),mt.return=Z,Z=mt):(mt=Bl($.type,$.key,$.props,null,Z.mode,mt),yo(mt,$),mt.return=Z,Z=mt)}return y(Z);case b:t:{for(Qt=$.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){s(Z,X.sibling),mt=f(X,$.children||[]),mt.return=Z,Z=mt;break t}else{s(Z,X);break}else i(Z,X);X=X.sibling}mt=vf($,Z.mode,mt),mt.return=Z,Z=mt}return y(Z);case T:return $=Mr($),He(Z,X,$,mt)}if(Q($))return Gt(Z,X,$,mt);if(V($)){if(Qt=V($),typeof Qt!="function")throw Error(r(150));return $=Qt.call($),Jt(Z,X,$,mt)}if(typeof $.then=="function")return He(Z,X,Wl($),mt);if($.$$typeof===N)return He(Z,X,Gl(Z,$),mt);ql(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(s(Z,X.sibling),mt=f(X,$),mt.return=Z,Z=mt):(s(Z,X),mt=_f($,Z.mode,mt),mt.return=Z,Z=mt),y(Z)):s(Z,X)}return function(Z,X,$,mt){try{xo=0;var Qt=He(Z,X,$,mt);return us=null,Qt}catch(Yt){if(Yt===cs||Yt===kl)throw Yt;var Re=Qn(29,Yt,null,Z.mode);return Re.lanes=mt,Re.return=Z,Re}}}var Er=l0(!0),c0=l0(!1),Ba=!1;function Df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=zl(e),qm(e,null,s),i}return Fl(e,l,i,s),zl(e)}function So(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Wr(e,s)}}function Nf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=y:d=d.next=y,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Lf=!1;function Mo(){if(Lf){var e=ls;if(e!==null)throw e}}function bo(e,i,s,l){Lf=!1;var f=e.updateQueue;Ba=!1;var d=f.firstBaseUpdate,y=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var G=R,tt=G.next;G.next=null,y===null?d=tt:y.next=tt,y=G;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,R=ht.lastBaseUpdate,R!==y&&(R===null?ht.firstBaseUpdate=tt:R.next=tt,ht.lastBaseUpdate=G))}if(d!==null){var gt=f.baseState;y=0,ht=tt=G=null,R=d;do{var rt=R.lane&-536870913,lt=rt!==R.lane;if(lt?(ve&rt)===rt:(l&rt)===rt){rt!==0&&rt===os&&(Lf=!0),ht!==null&&(ht=ht.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Gt=e,Jt=R;rt=i;var He=s;switch(Jt.tag){case 1:if(Gt=Jt.payload,typeof Gt=="function"){gt=Gt.call(He,gt,rt);break t}gt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=Jt.payload,rt=typeof Gt=="function"?Gt.call(He,gt,rt):Gt,rt==null)break t;gt=v({},gt,rt);break t;case 2:Ba=!0}}rt=R.callback,rt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[rt]:lt.push(rt))}else lt={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ht===null?(tt=ht=lt,G=gt):ht=ht.next=lt,y|=rt;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);ht===null&&(G=gt),f.baseState=G,f.firstBaseUpdate=tt,f.lastBaseUpdate=ht,d===null&&(f.shared.lanes=0),Wa|=y,e.lanes=y,e.memoizedState=gt}}function u0(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function f0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)u0(s[e],i)}var fs=P(null),Yl=P(0);function d0(e,i){e=da,_t(Yl,e),_t(fs,i),da=e|i.baseLanes}function Of(){_t(Yl,da),_t(fs,fs.current)}function Pf(){da=Yl.current,j(fs),j(Yl)}var Jn=P(null),fi=null;function Ga(e){var i=e.alternate;_t(en,en.current&1),_t(Jn,e),fi===null&&(i===null||fs.current!==null||i.memoizedState!==null)&&(fi=e)}function Ff(e){_t(en,en.current),_t(Jn,e),fi===null&&(fi=e)}function h0(e){e.tag===22?(_t(en,en.current),_t(Jn,e),fi===null&&(fi=e)):Va()}function Va(){_t(en,en.current),_t(Jn,Jn.current)}function $n(e){j(Jn),fi===e&&(fi=null),j(en)}var en=P(0);function jl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Vd(s)||kd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var aa=0,le=null,Be=null,cn=null,Zl=!1,ds=!1,Tr=!1,Kl=0,Eo=0,hs=null,GS=0;function Je(){throw Error(r(321))}function zf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Kn(e[s],i[s]))return!1;return!0}function Bf(e,i,s,l,f,d){return aa=d,le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=e===null||e.memoizedState===null?K0:$f,Tr=!1,d=s(l,f),Tr=!1,ds&&(d=m0(i,s,l,f)),p0(e),d}function p0(e){L.H=Ro;var i=Be!==null&&Be.next!==null;if(aa=0,cn=Be=le=null,Zl=!1,Eo=0,hs=null,i)throw Error(r(300));e===null||un||(e=e.dependencies,e!==null&&Hl(e)&&(un=!0))}function m0(e,i,s,l){le=e;var f=0;do{if(ds&&(hs=null),Eo=0,ds=!1,25<=f)throw Error(r(301));if(f+=1,cn=Be=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=Q0,d=i(s,l)}while(ds);return d}function VS(){var e=L.H,i=e.useState()[0];return i=typeof i.then=="function"?To(i):i,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(le.flags|=1024),i}function If(){var e=Kl!==0;return Kl=0,e}function Hf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Gf(e){if(Zl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Zl=!1}aa=0,cn=Be=le=null,ds=!1,Eo=Kl=0,hs=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?le.memoizedState=cn=e:cn=cn.next=e,cn}function nn(){if(Be===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var i=cn===null?le.memoizedState:cn.next;if(i!==null)cn=i,Be=e;else{if(e===null)throw le.alternate===null?Error(r(467)):Error(r(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},cn===null?le.memoizedState=cn=e:cn=cn.next=e}return cn}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var i=Eo;return Eo+=1,hs===null&&(hs=[]),e=r0(hs,e,i),i=le,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?K0:$f),e}function Jl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===N)return Sn(e)}throw Error(r(438,String(e)))}function Vf(e){var i=null,s=le.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Ql(),le.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=ut;return i.index++,s}function ra(e,i){return typeof i=="function"?i(e):i}function $l(e){var i=nn();return kf(i,Be,e)}function kf(e,i,s){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var y=f.next;f.next=d.next,d.next=y}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var R=y=null,G=null,tt=i,ht=!1;do{var gt=tt.lane&-536870913;if(gt!==tt.lane?(ve&gt)===gt:(aa&gt)===gt){var rt=tt.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),gt===os&&(ht=!0);else if((aa&rt)===rt){tt=tt.next,rt===os&&(ht=!0);continue}else gt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},G===null?(R=G=gt,y=d):G=G.next=gt,le.lanes|=rt,Wa|=rt;gt=tt.action,Tr&&s(d,gt),d=tt.hasEagerState?tt.eagerState:s(d,gt)}else rt={lane:gt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},G===null?(R=G=rt,y=d):G=G.next=rt,le.lanes|=gt,Wa|=gt;tt=tt.next}while(tt!==null&&tt!==i);if(G===null?y=d:G.next=R,!Kn(d,e.memoizedState)&&(un=!0,ht&&(s=ls,s!==null)))throw s;e.memoizedState=d,e.baseState=y,e.baseQueue=G,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xf(e){var i=nn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var y=f=f.next;do d=e(d,y.action),y=y.next;while(y!==f);Kn(d,i.memoizedState)||(un=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function g0(e,i,s){var l=le,f=nn(),d=ye;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var y=!Kn((Be||f).memoizedState,s);if(y&&(f.memoizedState=s,un=!0),f=f.queue,Yf(x0.bind(null,l,f,e),[e]),f.getSnapshot!==i||y||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,ps(9,{destroy:void 0},v0.bind(null,l,f,s,i),null),ke===null)throw Error(r(349));d||(aa&127)!==0||_0(l,i,s)}return s}function _0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=le.updateQueue,i===null?(i=Ql(),le.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function v0(e,i,s,l){i.value=s,i.getSnapshot=l,y0(i)&&S0(e)}function x0(e,i,s){return s(function(){y0(i)&&S0(e)})}function y0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Kn(e,s)}catch{return!0}}function S0(e){var i=gr(e,2);i!==null&&kn(i,e,2)}function Wf(e){var i=Ln();if(typeof e=="function"){var s=e;if(e=s(),Tr){Ot(!0);try{s()}finally{Ot(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},i}function M0(e,i,s,l){return e.baseState=s,kf(e,Be,typeof l=="function"?l:ra)}function kS(e,i,s,l,f){if(nc(e))throw Error(r(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};L.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,b0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function b0(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=L.T,y={};L.T=y;try{var R=s(f,l),G=L.S;G!==null&&G(y,R),E0(e,i,R)}catch(tt){qf(e,i,tt)}finally{d!==null&&y.types!==null&&(d.types=y.types),L.T=d}}else try{d=s(f,l),E0(e,i,d)}catch(tt){qf(e,i,tt)}}function E0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){T0(e,i,l)},function(l){return qf(e,i,l)}):T0(e,i,s)}function T0(e,i,s){i.status="fulfilled",i.value=s,A0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,b0(e,s)))}function qf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,A0(i),i=i.next;while(i!==l)}e.action=null}function A0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function R0(e,i){return i}function C0(e,i){if(ye){var s=ke.formState;if(s!==null){t:{var l=le;if(ye){if(Xe){e:{for(var f=Xe,d=ui;f.nodeType!==8;){if(!d){f=null;break e}if(f=di(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Xe=di(f.nextSibling),l=f.data==="F!";break t}}Fa(l)}l=!1}l&&(i=s[0])}}return s=Ln(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R0,lastRenderedState:i},s.queue=l,s=Y0.bind(null,le,l),l.dispatch=s,l=Wf(!1),d=Jf.bind(null,le,!1,l.queue),l=Ln(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=kS.bind(null,le,f,d,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function w0(e){var i=nn();return D0(i,Be,e)}function D0(e,i,s){if(i=kf(e,i,R0)[0],e=$l(ra)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=To(i)}catch(y){throw y===cs?kl:y}else l=i;i=nn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(le.flags|=2048,ps(9,{destroy:void 0},XS.bind(null,f,s),null)),[l,d,e]}function XS(e,i){e.action=i}function U0(e){var i=nn(),s=Be;if(s!==null)return D0(i,s,e);nn(),i=i.memoizedState,s=nn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function ps(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=le.updateQueue,i===null&&(i=Ql(),le.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function N0(){return nn().memoizedState}function tc(e,i,s,l){var f=Ln();le.flags|=e,f.memoizedState=ps(1|i,{destroy:void 0},s,l===void 0?null:l)}function ec(e,i,s,l){var f=nn();l=l===void 0?null:l;var d=f.memoizedState.inst;Be!==null&&l!==null&&zf(l,Be.memoizedState.deps)?f.memoizedState=ps(i,d,s,l):(le.flags|=e,f.memoizedState=ps(1|i,d,s,l))}function L0(e,i){tc(8390656,8,e,i)}function Yf(e,i){ec(2048,8,e,i)}function WS(e){le.flags|=4;var i=le.updateQueue;if(i===null)i=Ql(),le.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function O0(e){var i=nn().memoizedState;return WS({ref:i,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function P0(e,i){return ec(4,2,e,i)}function F0(e,i){return ec(4,4,e,i)}function z0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function B0(e,i,s){s=s!=null?s.concat([e]):null,ec(4,4,z0.bind(null,i,e),s)}function jf(){}function I0(e,i){var s=nn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&zf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function H0(e,i){var s=nn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&zf(i,l[1]))return l[0];if(l=e(),Tr){Ot(!0);try{e()}finally{Ot(!1)}}return s.memoizedState=[l,i],l}function Zf(e,i,s){return s===void 0||(aa&1073741824)!==0&&(ve&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=Gg(),le.lanes|=e,Wa|=e,s)}function G0(e,i,s,l){return Kn(s,i)?s:fs.current!==null?(e=Zf(e,s,l),Kn(e,i)||(un=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(ve&261930)===0?(un=!0,e.memoizedState=s):(e=Gg(),le.lanes|=e,Wa|=e,i)}function V0(e,i,s,l,f){var d=F.p;F.p=d!==0&&8>d?d:8;var y=L.T,R={};L.T=R,Jf(e,!1,i,s);try{var G=f(),tt=L.S;if(tt!==null&&tt(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ht=HS(G,l);Ao(e,i,ht,ni(e))}else Ao(e,i,l,ni(e))}catch(gt){Ao(e,i,{then:function(){},status:"rejected",reason:gt},ni())}finally{F.p=d,y!==null&&R.types!==null&&(y.types=R.types),L.T=y}}function qS(){}function Kf(e,i,s,l){if(e.tag!==5)throw Error(r(476));var f=k0(e).queue;V0(e,f,i,st,s===null?qS:function(){return X0(e),s(l)})}function k0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:st},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function X0(e){var i=k0(e);i.next===null&&(i=e.alternate.memoizedState),Ao(e,i.next.queue,{},ni())}function Qf(){return Sn(ko)}function W0(){return nn().memoizedState}function q0(){return nn().memoizedState}function YS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ni();e=Ia(s);var l=Ha(i,e,s);l!==null&&(kn(l,i,s),So(l,i,s)),i={cache:Af()},e.payload=i;return}i=i.return}}function jS(e,i,s){var l=ni();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},nc(e)?j0(i,s):(s=mf(e,i,s,l),s!==null&&(kn(s,e,l),Z0(s,i,l)))}function Y0(e,i,s){var l=ni();Ao(e,i,s,l)}function Ao(e,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(nc(e))j0(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,R=d(y,s);if(f.hasEagerState=!0,f.eagerState=R,Kn(R,y))return Fl(e,i,f,0),ke===null&&Pl(),!1}catch{}if(s=mf(e,i,f,l),s!==null)return kn(s,e,l),Z0(s,i,l),!0}return!1}function Jf(e,i,s,l){if(l={lane:2,revertLane:Dd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},nc(e)){if(i)throw Error(r(479))}else i=mf(e,s,l,2),i!==null&&kn(i,e,2)}function nc(e){var i=e.alternate;return e===le||i!==null&&i===le}function j0(e,i){ds=Zl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Z0(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,Wr(e,s)}}var Ro={readContext:Sn,use:Jl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};Ro.useEffectEvent=Je;var K0={readContext:Sn,use:Jl,useCallback:function(e,i){return Ln().memoizedState=[e,i===void 0?null:i],e},useContext:Sn,useEffect:L0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,tc(4194308,4,z0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return tc(4194308,4,e,i)},useInsertionEffect:function(e,i){tc(4,2,e,i)},useMemo:function(e,i){var s=Ln();i=i===void 0?null:i;var l=e();if(Tr){Ot(!0);try{e()}finally{Ot(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Ln();if(s!==void 0){var f=s(i);if(Tr){Ot(!0);try{s(i)}finally{Ot(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=jS.bind(null,le,e),[l.memoizedState,e]},useRef:function(e){var i=Ln();return e={current:e},i.memoizedState=e},useState:function(e){e=Wf(e);var i=e.queue,s=Y0.bind(null,le,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:jf,useDeferredValue:function(e,i){var s=Ln();return Zf(s,e,i)},useTransition:function(){var e=Wf(!1);return e=V0.bind(null,le,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=le,f=Ln();if(ye){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),ke===null)throw Error(r(349));(ve&127)!==0||_0(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,L0(x0.bind(null,l,d,e),[e]),l.flags|=2048,ps(9,{destroy:void 0},v0.bind(null,l,d,s,i),null),s},useId:function(){var e=Ln(),i=ke.identifierPrefix;if(ye){var s=Fi,l=Pi;s=(l&~(1<<32-Lt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Kl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=GS++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Qf,useFormState:C0,useActionState:C0,useOptimistic:function(e){var i=Ln();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Jf.bind(null,le,!0,s),s.dispatch=i,[e,i]},useMemoCache:Vf,useCacheRefresh:function(){return Ln().memoizedState=YS.bind(null,le)},useEffectEvent:function(e){var i=Ln(),s={impl:e};return i.memoizedState=s,function(){if((Ue&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},$f={readContext:Sn,use:Jl,useCallback:I0,useContext:Sn,useEffect:Yf,useImperativeHandle:B0,useInsertionEffect:P0,useLayoutEffect:F0,useMemo:H0,useReducer:$l,useRef:N0,useState:function(){return $l(ra)},useDebugValue:jf,useDeferredValue:function(e,i){var s=nn();return G0(s,Be.memoizedState,e,i)},useTransition:function(){var e=$l(ra)[0],i=nn().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:g0,useId:W0,useHostTransitionStatus:Qf,useFormState:w0,useActionState:w0,useOptimistic:function(e,i){var s=nn();return M0(s,Be,e,i)},useMemoCache:Vf,useCacheRefresh:q0};$f.useEffectEvent=O0;var Q0={readContext:Sn,use:Jl,useCallback:I0,useContext:Sn,useEffect:Yf,useImperativeHandle:B0,useInsertionEffect:P0,useLayoutEffect:F0,useMemo:H0,useReducer:Xf,useRef:N0,useState:function(){return Xf(ra)},useDebugValue:jf,useDeferredValue:function(e,i){var s=nn();return Be===null?Zf(s,e,i):G0(s,Be.memoizedState,e,i)},useTransition:function(){var e=Xf(ra)[0],i=nn().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:g0,useId:W0,useHostTransitionStatus:Qf,useFormState:U0,useActionState:U0,useOptimistic:function(e,i){var s=nn();return Be!==null?M0(s,Be,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Vf,useCacheRefresh:q0};Q0.useEffectEvent=O0;function td(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var ed={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=ni(),f=Ia(l);f.payload=i,s!=null&&(f.callback=s),i=Ha(e,f,l),i!==null&&(kn(i,e,l),So(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=ni(),f=Ia(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ha(e,f,l),i!==null&&(kn(i,e,l),So(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ni(),l=Ia(s);l.tag=2,i!=null&&(l.callback=i),i=Ha(e,l,s),i!==null&&(kn(i,e,s),So(i,e,s))}};function J0(e,i,s,l,f,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!ho(s,l)||!ho(f,d):!0}function $0(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&ed.enqueueReplaceState(i,i.state,null)}function Ar(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=v({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function tg(e){Ol(e)}function eg(e){console.error(e)}function ng(e){Ol(e)}function ic(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function ig(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function nd(e,i,s){return s=Ia(s),s.tag=3,s.payload={element:null},s.callback=function(){ic(e,i)},s}function ag(e){return e=Ia(e),e.tag=3,e}function rg(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){ig(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){ig(i,s,l),typeof f!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function ZS(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&ss(i,s,f,!0),s=Jn.current,s!==null){switch(s.tag){case 31:case 13:return fi===null?mc():s.alternate===null&&$e===0&&($e=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Xl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Rd(e,l,f)),!1;case 22:return s.flags|=65536,l===Xl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Rd(e,l,f)),!1}throw Error(r(435,s.tag))}return Rd(e,l,f),mc(),!1}if(ye)return i=Jn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Sf&&(e=Error(r(422),{cause:l}),go(oi(e,s)))):(l!==Sf&&(i=Error(r(423),{cause:l}),go(oi(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=oi(l,s),f=nd(e.stateNode,l,f),Nf(e,f),$e!==4&&($e=2)),!1;var d=Error(r(520),{cause:l});if(d=oi(d,s),Po===null?Po=[d]:Po.push(d),$e!==4&&($e=2),i===null)return!0;l=oi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=nd(s.stateNode,l,e),Nf(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(qa===null||!qa.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=ag(f),rg(f,e,s,l),Nf(s,f),!1}s=s.return}while(s!==null);return!1}var id=Error(r(461)),un=!1;function Mn(e,i,s,l){i.child=e===null?c0(i,null,s,l):Er(i,e.child,s,l)}function sg(e,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var y={};for(var R in l)R!=="ref"&&(y[R]=l[R])}else y=l;return yr(i),l=Bf(e,i,s,y,d,f),R=If(),e!==null&&!un?(Hf(e,i,f),sa(e,i,f)):(ye&&R&&xf(i),i.flags|=1,Mn(e,i,l,f),i.child)}function og(e,i,s,l,f){if(e===null){var d=s.type;return typeof d=="function"&&!gf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,lg(e,i,d,l,f)):(e=Bl(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!fd(e,f)){var y=d.memoizedProps;if(s=s.compare,s=s!==null?s:ho,s(y,l)&&e.ref===i.ref)return sa(e,i,f)}return i.flags|=1,e=ta(d,l),e.ref=i.ref,e.return=i,i.child=e}function lg(e,i,s,l,f){if(e!==null){var d=e.memoizedProps;if(ho(d,l)&&e.ref===i.ref)if(un=!1,i.pendingProps=l=d,fd(e,f))(e.flags&131072)!==0&&(un=!0);else return i.lanes=e.lanes,sa(e,i,f)}return ad(e,i,s,l,f)}function cg(e,i,s,l){var f=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return ug(e,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vl(i,d!==null?d.cachePool:null),d!==null?d0(i,d):Of(),h0(i);else return l=i.lanes=536870912,ug(e,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Vl(i,d.cachePool),d0(i,d),Va(),i.memoizedState=null):(e!==null&&Vl(i,null),Of(),Va());return Mn(e,i,f,s),i.child}function Co(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function ug(e,i,s,l,f){var d=Cf();return d=d===null?null:{parent:ln._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},e!==null&&Vl(i,null),Of(),h0(i),e!==null&&ss(e,i,l,!0),i.childLanes=f,null}function ac(e,i){return i=sc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function fg(e,i,s){return Er(i,e.child,null,s),e=ac(i,i.pendingProps),e.flags|=2,$n(i),i.memoizedState=null,e}function KS(e,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(ye){if(l.mode==="hidden")return e=ac(i,l),i.lanes=536870912,Co(null,e);if(Ff(i),(e=Xe)?(e=b_(e,ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Pi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},s=jm(e),s.return=i,i.child=s,yn=i,Xe=null)):e=null,e===null)throw Fa(i);return i.lanes=536870912,null}return ac(i,l)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(Ff(i),f)if(i.flags&256)i.flags&=-257,i=fg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(r(558));else if(un||ss(e,i,s,!1),f=(s&e.childLanes)!==0,un||f){if(l=ke,l!==null&&(y=bl(l,s),y!==0&&y!==d.retryLane))throw d.retryLane=y,gr(e,y),kn(l,e,y),id;mc(),i=fg(e,i,s)}else e=d.treeContext,Xe=di(y.nextSibling),yn=i,ye=!0,Pa=null,ui=!1,e!==null&&Qm(i,e),i=ac(i,l),i.flags|=4096;return i}return e=ta(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function rc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function ad(e,i,s,l,f){return yr(i),s=Bf(e,i,s,l,void 0,f),l=If(),e!==null&&!un?(Hf(e,i,f),sa(e,i,f)):(ye&&l&&xf(i),i.flags|=1,Mn(e,i,s,f),i.child)}function dg(e,i,s,l,f,d){return yr(i),i.updateQueue=null,s=m0(i,l,s,f),p0(e),l=If(),e!==null&&!un?(Hf(e,i,d),sa(e,i,d)):(ye&&l&&xf(i),i.flags|=1,Mn(e,i,s,d),i.child)}function hg(e,i,s,l,f){if(yr(i),i.stateNode===null){var d=ns,y=s.contextType;typeof y=="object"&&y!==null&&(d=Sn(y)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ed,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Df(i),y=s.contextType,d.context=typeof y=="object"&&y!==null?Sn(y):ns,d.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(td(i,s,y,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&ed.enqueueReplaceState(d,d.state,null),bo(i,l,d,f),Mo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var R=i.memoizedProps,G=Ar(s,R);d.props=G;var tt=d.context,ht=s.contextType;y=ns,typeof ht=="object"&&ht!==null&&(y=Sn(ht));var gt=s.getDerivedStateFromProps;ht=typeof gt=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ht||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||tt!==y)&&$0(i,d,l,y),Ba=!1;var rt=i.memoizedState;d.state=rt,bo(i,l,d,f),Mo(),tt=i.memoizedState,R||rt!==tt||Ba?(typeof gt=="function"&&(td(i,s,gt,l),tt=i.memoizedState),(G=Ba||J0(i,s,G,l,rt,tt,y))?(ht||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=tt),d.props=l,d.state=tt,d.context=y,l=G):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Uf(e,i),y=i.memoizedProps,ht=Ar(s,y),d.props=ht,gt=i.pendingProps,rt=d.context,tt=s.contextType,G=ns,typeof tt=="object"&&tt!==null&&(G=Sn(tt)),R=s.getDerivedStateFromProps,(tt=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==gt||rt!==G)&&$0(i,d,l,G),Ba=!1,rt=i.memoizedState,d.state=rt,bo(i,l,d,f),Mo();var lt=i.memoizedState;y!==gt||rt!==lt||Ba||e!==null&&e.dependencies!==null&&Hl(e.dependencies)?(typeof R=="function"&&(td(i,s,R,l),lt=i.memoizedState),(ht=Ba||J0(i,s,ht,l,rt,lt,G)||e!==null&&e.dependencies!==null&&Hl(e.dependencies))?(tt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,lt,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,lt,G)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=lt),d.props=l,d.state=lt,d.context=G,l=ht):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,rc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Er(i,e.child,null,f),i.child=Er(i,null,s,f)):Mn(e,i,s,f),i.memoizedState=d.state,e=i.child):e=sa(e,i,f),e}function pg(e,i,s,l){return vr(),i.flags|=256,Mn(e,i,s,l),i.child}var rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sd(e){return{baseLanes:e,cachePool:i0()}}function od(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ei),e}function mg(e,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(ye){if(f?Ga(i):Va(),(e=Xe)?(e=b_(e,ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Pi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},s=jm(e),s.return=i,i.child=s,yn=i,Xe=null)):e=null,e===null)throw Fa(i);return kd(e)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Va(),f=i.mode,R=sc({mode:"hidden",children:R},f),l=_r(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=sd(s),l.childLanes=od(e,y,s),i.memoizedState=rd,Co(null,l)):(Ga(i),ld(i,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(d)i.flags&256?(Ga(i),i.flags&=-257,i=cd(e,i,s)):i.memoizedState!==null?(Va(),i.child=e.child,i.flags|=128,i=null):(Va(),R=l.fallback,f=i.mode,l=sc({mode:"visible",children:l.children},f),R=_r(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Er(i,e.child,null,s),l=i.child,l.memoizedState=sd(s),l.childLanes=od(e,y,s),i.memoizedState=rd,i=Co(null,l));else if(Ga(i),kd(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var tt=y.dgst;y=tt,l=Error(r(419)),l.stack="",l.digest=y,go({value:l,source:null,stack:null}),i=cd(e,i,s)}else if(un||ss(e,i,s,!1),y=(s&e.childLanes)!==0,un||y){if(y=ke,y!==null&&(l=bl(y,s),l!==0&&l!==G.retryLane))throw G.retryLane=l,gr(e,l),kn(y,e,l),id;Vd(R)||mc(),i=cd(e,i,s)}else Vd(R)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,Xe=di(R.nextSibling),yn=i,ye=!0,Pa=null,ui=!1,e!==null&&Qm(i,e),i=ld(i,l.children),i.flags|=4096);return i}return f?(Va(),R=l.fallback,f=i.mode,G=e.child,tt=G.sibling,l=ta(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,tt!==null?R=ta(tt,R):(R=_r(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,Co(null,l),l=i.child,R=e.child.memoizedState,R===null?R=sd(s):(f=R.cachePool,f!==null?(G=ln._currentValue,f=f.parent!==G?{parent:G,pool:G}:f):f=i0(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=od(e,y,s),i.memoizedState=rd,Co(e.child,l)):(Ga(i),s=e.child,e=s.sibling,s=ta(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=s,i.memoizedState=null,s)}function ld(e,i){return i=sc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function sc(e,i){return e=Qn(22,e,null,i),e.lanes=0,e}function cd(e,i,s){return Er(i,e.child,null,s),e=ld(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function gg(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Ef(e.return,i,s)}function ud(e,i,s,l,f,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=f,y.treeForkCount=d)}function _g(e,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var y=en.current,R=(y&2)!==0;if(R?(y=y&1|2,i.flags|=128):y&=1,_t(en,y),Mn(e,i,l,s),l=ye?mo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gg(e,s,i);else if(e.tag===19)gg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&jl(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),ud(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&jl(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}ud(i,!0,s,null,d,l);break;case"together":ud(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function sa(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Wa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(ss(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,s=ta(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ta(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function fd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Hl(e)))}function QS(e,i,s){switch(i.tag){case 3:Tt(i,i.stateNode.containerInfo),za(i,ln,e.memoizedState.cache),vr();break;case 27:case 5:Kt(i);break;case 4:Tt(i,i.stateNode.containerInfo);break;case 10:za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Ff(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ga(i),i.flags|=128,null):(s&i.child.childLanes)!==0?mg(e,i,s):(Ga(i),e=sa(e,i,s),e!==null?e.sibling:null);Ga(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(ss(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return _g(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),_t(en,en.current),l)break;return null;case 22:return i.lanes=0,cg(e,i,s,i.pendingProps);case 24:za(i,ln,e.memoizedState.cache)}return sa(e,i,s)}function vg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)un=!0;else{if(!fd(e,s)&&(i.flags&128)===0)return un=!1,QS(e,i,s);un=(e.flags&131072)!==0}else un=!1,ye&&(i.flags&1048576)!==0&&Km(i,mo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Mr(i.elementType),i.type=e,typeof e=="function")gf(e)?(l=Ar(e,l),i.tag=1,i=hg(null,i,e,l,s)):(i.tag=0,i=ad(null,i,e,l,s));else{if(e!=null){var f=e.$$typeof;if(f===U){i.tag=11,i=sg(null,i,e,l,s);break t}else if(f===z){i.tag=14,i=og(null,i,e,l,s);break t}}throw i=at(e)||e,Error(r(306,i,""))}}return i;case 0:return ad(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Ar(l,i.pendingProps),hg(e,i,l,f,s);case 3:t:{if(Tt(i,i.stateNode.containerInfo),e===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Uf(e,i),bo(i,l,null,s);var y=i.memoizedState;if(l=y.cache,za(i,ln,l),l!==d.cache&&Tf(i,[ln],s,!0),Mo(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=pg(e,i,l,s);break t}else if(l!==f){f=oi(Error(r(424)),i),go(f),i=pg(e,i,l,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Xe=di(e.firstChild),yn=i,ye=!0,Pa=null,ui=!0,s=c0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(vr(),l===f){i=sa(e,i,s);break t}Mn(e,i,l,s)}i=i.child}return i;case 26:return rc(e,i),e===null?(s=w_(i.type,null,i.pendingProps,null))?i.memoizedState=s:ye||(s=i.type,e=i.pendingProps,l=Mc(nt.current).createElement(s),l[rn]=i,l[hn]=e,bn(l,s,e),W(l),i.stateNode=l):i.memoizedState=w_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Kt(i),e===null&&ye&&(l=i.stateNode=A_(i.type,i.pendingProps,nt.current),yn=i,ui=!0,f=Xe,Ka(i.type)?(Xd=f,Xe=di(l.firstChild)):Xe=f),Mn(e,i,i.pendingProps.children,s),rc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&ye&&((f=l=Xe)&&(l=RM(l,i.type,i.pendingProps,ui),l!==null?(i.stateNode=l,yn=i,Xe=di(l.firstChild),ui=!1,f=!0):f=!1),f||Fa(i)),Kt(i),f=i.type,d=i.pendingProps,y=e!==null?e.memoizedProps:null,l=d.children,Id(f,d)?l=null:y!==null&&Id(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=Bf(e,i,VS,null,null,s),ko._currentValue=f),rc(e,i),Mn(e,i,l,s),i.child;case 6:return e===null&&ye&&((e=s=Xe)&&(s=CM(s,i.pendingProps,ui),s!==null?(i.stateNode=s,yn=i,Xe=null,e=!0):e=!1),e||Fa(i)),null;case 13:return mg(e,i,s);case 4:return Tt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Er(i,null,l,s):Mn(e,i,l,s),i.child;case 11:return sg(e,i,i.type,i.pendingProps,s);case 7:return Mn(e,i,i.pendingProps,s),i.child;case 8:return Mn(e,i,i.pendingProps.children,s),i.child;case 12:return Mn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,za(i,i.type,l.value),Mn(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,yr(i),f=Sn(f),l=l(f),i.flags|=1,Mn(e,i,l,s),i.child;case 14:return og(e,i,i.type,i.pendingProps,s);case 15:return lg(e,i,i.type,i.pendingProps,s);case 19:return _g(e,i,s);case 31:return KS(e,i,s);case 22:return cg(e,i,s,i.pendingProps);case 24:return yr(i),l=Sn(ln),e===null?(f=Cf(),f===null&&(f=ke,d=Af(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},Df(i),za(i,ln,f)):((e.lanes&s)!==0&&(Uf(e,i),bo(i,null,null,s),Mo()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),za(i,ln,l)):(l=d.cache,za(i,ln,l),l!==f.cache&&Tf(i,[ln],s,!0))),Mn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function oa(e){e.flags|=4}function dd(e,i,s,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Wg())e.flags|=8192;else throw br=Xl,wf}else e.flags&=-16777217}function xg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!O_(i))if(Wg())e.flags|=8192;else throw br=Xl,wf}function oc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Oe():536870912,e.lanes|=i,vs|=i)}function wo(e,i){if(!ye)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function We(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function JS(e,i,s){var l=i.pendingProps;switch(yf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(i),null;case 1:return We(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ia(ln),kt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(rs(i)?oa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mf())),We(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(oa(i),d!==null?(We(i),xg(i,d)):(We(i),dd(i,f,null,l,s))):d?d!==e.memoizedState?(oa(i),We(i),xg(i,d)):(We(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&oa(i),We(i),dd(i,f,e,l,s)),null;case 27:if($t(i),s=nt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return We(i),null}e=Rt.current,rs(i)?Jm(i):(e=A_(f,l,s),i.stateNode=e,oa(i))}return We(i),null;case 5:if($t(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&oa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return We(i),null}if(d=Rt.current,rs(i))Jm(i);else{var y=Mc(nt.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(f,{is:l.is}):y.createElement(f)}}d[rn]=i,d[hn]=l;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;t:switch(bn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&oa(i)}}return We(i),dd(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&oa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(e=nt.current,rs(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=yn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[rn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||m_(e.nodeValue,s)),e||Fa(i,!0)}else e=Mc(e).createTextNode(l),e[rn]=i,i.stateNode=e}return We(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=rs(i),s!==null){if(e===null){if(!l)throw Error(r(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=i}else vr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;We(i),e=!1}else s=Mf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?($n(i),i):($n(i),null);if((i.flags&128)!==0)throw Error(r(558))}return We(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=rs(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[rn]=i}else vr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;We(i),f=!1}else f=Mf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?($n(i),i):($n(i),null)}return $n(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),oc(i,i.updateQueue),We(i),null);case 4:return kt(),e===null&&Od(i.stateNode.containerInfo),We(i),null;case 10:return ia(i.type),We(i),null;case 19:if(j(en),l=i.memoizedState,l===null)return We(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)wo(l,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=jl(e),d!==null){for(i.flags|=128,wo(l,!1),e=d.updateQueue,i.updateQueue=e,oc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Ym(s,e),s=s.sibling;return _t(en,en.current&1|2),ye&&ea(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&E()>dc&&(i.flags|=128,f=!0,wo(l,!1),i.lanes=4194304)}else{if(!f)if(e=jl(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,oc(i,e),wo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!ye)return We(i),null}else 2*E()-l.renderingStartTime>dc&&s!==536870912&&(i.flags|=128,f=!0,wo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=E(),e.sibling=null,s=en.current,_t(en,f?s&1|2:s&1),ye&&ea(i,l.treeForkCount),e):(We(i),null);case 22:case 23:return $n(i),Pf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(We(i),i.subtreeFlags&6&&(i.flags|=8192)):We(i),s=i.updateQueue,s!==null&&oc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&j(Sr),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ia(ln),We(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function $S(e,i){switch(yf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ia(ln),kt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return $t(i),null;case 31:if(i.memoizedState!==null){if($n(i),i.alternate===null)throw Error(r(340));vr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if($n(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));vr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return j(en),null;case 4:return kt(),null;case 10:return ia(i.type),null;case 22:case 23:return $n(i),Pf(),e!==null&&j(Sr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ia(ln),null;case 25:return null;default:return null}}function yg(e,i){switch(yf(i),i.tag){case 3:ia(ln),kt();break;case 26:case 27:case 5:$t(i);break;case 4:kt();break;case 31:i.memoizedState!==null&&$n(i);break;case 13:$n(i);break;case 19:j(en);break;case 10:ia(i.type);break;case 22:case 23:$n(i),Pf(),e!==null&&j(Sr);break;case 24:ia(ln)}}function Do(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var d=s.create,y=s.inst;l=d(),y.destroy=l}s=s.next}while(s!==f)}}catch(R){Fe(i,i.return,R)}}function ka(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var y=l.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,f=i;var G=s,tt=R;try{tt()}catch(ht){Fe(f,G,ht)}}}l=l.next}while(l!==d)}}catch(ht){Fe(i,i.return,ht)}}function Sg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{f0(i,s)}catch(l){Fe(e,e.return,l)}}}function Mg(e,i,s){s.props=Ar(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Fe(e,i,l)}}function Uo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){Fe(e,i,f)}}function zi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Fe(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Fe(e,i,f)}else s.current=null}function bg(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Fe(e,e.return,f)}}function hd(e,i,s){try{var l=e.stateNode;SM(l,e.type,s,i),l[hn]=i}catch(f){Fe(e,e.return,f)}}function Eg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ka(e.type)||e.tag===4}function pd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Eg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function md(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ji));else if(l!==4&&(l===27&&Ka(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(md(e,i,s),e=e.sibling;e!==null;)md(e,i,s),e=e.sibling}function lc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Ka(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(lc(e,i,s),e=e.sibling;e!==null;)lc(e,i,s),e=e.sibling}function Tg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);bn(i,l,s),i[rn]=e,i[hn]=s}catch(d){Fe(e,e.return,d)}}var la=!1,fn=!1,gd=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,vn=null;function tM(e,i){if(e=e.containerInfo,zd=wc,e=Bm(e),cf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var y=0,R=-1,G=-1,tt=0,ht=0,gt=e,rt=null;e:for(;;){for(var lt;gt!==s||f!==0&&gt.nodeType!==3||(R=y+f),gt!==d||l!==0&&gt.nodeType!==3||(G=y+l),gt.nodeType===3&&(y+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)rt=gt,gt=lt;for(;;){if(gt===e)break e;if(rt===s&&++tt===f&&(R=y),rt===d&&++ht===l&&(G=y),(lt=gt.nextSibling)!==null)break;gt=rt,rt=gt.parentNode}gt=lt}s=R===-1||G===-1?null:{start:R,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bd={focusedElem:e,selectionRange:s},wc=!1,vn=i;vn!==null;)if(i=vn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,vn=e;else for(;vn!==null;){switch(i=vn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Gt=Ar(s.type,f);e=l.getSnapshotBeforeUpdate(Gt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Fe(s,s.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Gd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,vn=e;break}vn=i.return}}function Rg(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ua(e,s),l&4&&Do(5,s);break;case 1:if(ua(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(y){Fe(s,s.return,y)}else{var f=Ar(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Fe(s,s.return,y)}}l&64&&Sg(s),l&512&&Uo(s,s.return);break;case 3:if(ua(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{f0(e,i)}catch(y){Fe(s,s.return,y)}}break;case 27:i===null&&l&4&&Tg(s);case 26:case 5:ua(e,s),i===null&&l&4&&bg(s),l&512&&Uo(s,s.return);break;case 12:ua(e,s);break;case 31:ua(e,s),l&4&&Dg(e,s);break;case 13:ua(e,s),l&4&&Ug(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=cM.bind(null,s),wM(e,s))));break;case 22:if(l=s.memoizedState!==null||la,!l){i=i!==null&&i.memoizedState!==null||fn,f=la;var d=fn;la=l,(fn=i)&&!d?fa(e,s,(s.subtreeFlags&8772)!==0):ua(e,s),la=f,fn=d}break;case 30:break;default:ua(e,s)}}function Cg(e){var i=e.alternate;i!==null&&(e.alternate=null,Cg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ao(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,In=!1;function ca(e,i,s){for(s=s.child;s!==null;)wg(e,i,s),s=s.sibling}function wg(e,i,s){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Et,s)}catch{}switch(s.tag){case 26:fn||zi(s,i),ca(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:fn||zi(s,i);var l=Ze,f=In;Ka(s.type)&&(Ze=s.stateNode,In=!1),ca(e,i,s),Ho(s.stateNode),Ze=l,In=f;break;case 5:fn||zi(s,i);case 6:if(l=Ze,f=In,Ze=null,ca(e,i,s),Ze=l,In=f,Ze!==null)if(In)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(d){Fe(s,i,d)}else try{Ze.removeChild(s.stateNode)}catch(d){Fe(s,i,d)}break;case 18:Ze!==null&&(In?(e=Ze,S_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),As(e)):S_(Ze,s.stateNode));break;case 4:l=Ze,f=In,Ze=s.stateNode.containerInfo,In=!0,ca(e,i,s),Ze=l,In=f;break;case 0:case 11:case 14:case 15:ka(2,s,i),fn||ka(4,s,i),ca(e,i,s);break;case 1:fn||(zi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Mg(s,i,l)),ca(e,i,s);break;case 21:ca(e,i,s);break;case 22:fn=(l=fn)||s.memoizedState!==null,ca(e,i,s),fn=l;break;default:ca(e,i,s)}}function Dg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{As(e)}catch(s){Fe(i,i.return,s)}}}function Ug(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{As(e)}catch(s){Fe(i,i.return,s)}}function eM(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ag),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ag),i;default:throw Error(r(435,e.tag))}}function cc(e,i){var s=eM(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=uM.bind(null,e,l);l.then(f,f)}})}function Hn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=e,y=i,R=y;t:for(;R!==null;){switch(R.tag){case 27:if(Ka(R.type)){Ze=R.stateNode,In=!1;break t}break;case 5:Ze=R.stateNode,In=!1;break t;case 3:case 4:Ze=R.stateNode.containerInfo,In=!0;break t}R=R.return}if(Ze===null)throw Error(r(160));wg(d,y,f),Ze=null,In=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Ng(i,e),i=i.sibling}var Ei=null;function Ng(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(i,e),Gn(e),l&4&&(ka(3,e,e.return),Do(3,e),ka(5,e,e.return));break;case 1:Hn(i,e),Gn(e),l&512&&(fn||s===null||zi(s,s.return)),l&64&&la&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ei;if(Hn(i,e),Gn(e),l&512&&(fn||s===null||zi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[fr]||d[rn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),bn(d,l,s),d[rn]=e,W(d),l=d;break t;case"link":var y=N_("link","href",f).get(l+(s.href||""));if(y){for(var R=0;R<y.length;R++)if(d=y[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(R,1);break e}}d=f.createElement(l),bn(d,l,s),f.head.appendChild(d);break;case"meta":if(y=N_("meta","content",f).get(l+(s.content||""))){for(R=0;R<y.length;R++)if(d=y[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(R,1);break e}}d=f.createElement(l),bn(d,l,s),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[rn]=e,W(d),l=d}e.stateNode=l}else L_(f,e.type,e.stateNode);else e.stateNode=U_(f,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?L_(f,e.type,e.stateNode):U_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&hd(e,e.memoizedProps,s.memoizedProps)}break;case 27:Hn(i,e),Gn(e),l&512&&(fn||s===null||zi(s,s.return)),s!==null&&l&4&&hd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Hn(i,e),Gn(e),l&512&&(fn||s===null||zi(s,s.return)),e.flags&32){f=e.stateNode;try{Nn(f,"")}catch(Gt){Fe(e,e.return,Gt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,hd(e,f,s!==null?s.memoizedProps:f)),l&1024&&(gd=!0);break;case 6:if(Hn(i,e),Gn(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Gt){Fe(e,e.return,Gt)}}break;case 3:if(Tc=null,f=Ei,Ei=bc(i.containerInfo),Hn(i,e),Ei=f,Gn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{As(i.containerInfo)}catch(Gt){Fe(e,e.return,Gt)}gd&&(gd=!1,Lg(e));break;case 4:l=Ei,Ei=bc(e.stateNode.containerInfo),Hn(i,e),Gn(e),Ei=l;break;case 12:Hn(i,e),Gn(e);break;case 31:Hn(i,e),Gn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cc(e,l)));break;case 13:Hn(i,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(fc=E()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cc(e,l)));break;case 22:f=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,tt=la,ht=fn;if(la=tt||f,fn=ht||G,Hn(i,e),fn=ht,la=tt,Gn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||G||la||fn||Rr(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(d=G.stateNode,f)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=G.stateNode;var gt=G.memoizedProps.style,rt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Gt){Fe(G,G.return,Gt)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(Gt){Fe(G,G.return,Gt)}}}else if(i.tag===18){if(s===null){G=i;try{var lt=G.stateNode;f?M_(lt,!0):M_(G.stateNode,!1)}catch(Gt){Fe(G,G.return,Gt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,cc(e,s))));break;case 19:Hn(i,e),Gn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,cc(e,l)));break;case 30:break;case 21:break;default:Hn(i,e),Gn(e)}}function Gn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(Eg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=pd(e);lc(e,d,f);break;case 5:var y=s.stateNode;s.flags&32&&(Nn(y,""),s.flags&=-33);var R=pd(e);lc(e,R,y);break;case 3:case 4:var G=s.stateNode.containerInfo,tt=pd(e);md(e,tt,G);break;default:throw Error(r(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Lg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Lg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ua(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Rg(e,i.alternate,i),i=i.sibling}function Rr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ka(4,i,i.return),Rr(i);break;case 1:zi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Mg(i,i.return,s),Rr(i);break;case 27:Ho(i.stateNode);case 26:case 5:zi(i,i.return),Rr(i);break;case 22:i.memoizedState===null&&Rr(i);break;case 30:Rr(i);break;default:Rr(i)}e=e.sibling}}function fa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:fa(f,d,s),Do(4,d);break;case 1:if(fa(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(tt){Fe(l,l.return,tt)}if(l=d,f=l.updateQueue,f!==null){var R=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)u0(G[f],R)}catch(tt){Fe(l,l.return,tt)}}s&&y&64&&Sg(d),Uo(d,d.return);break;case 27:Tg(d);case 26:case 5:fa(f,d,s),s&&l===null&&y&4&&bg(d),Uo(d,d.return);break;case 12:fa(f,d,s);break;case 31:fa(f,d,s),s&&y&4&&Dg(f,d);break;case 13:fa(f,d,s),s&&y&4&&Ug(f,d);break;case 22:d.memoizedState===null&&fa(f,d,s),Uo(d,d.return);break;case 30:break;default:fa(f,d,s)}i=i.sibling}}function _d(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&_o(s))}function vd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&_o(e))}function Ti(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Og(e,i,s,l),i=i.sibling}function Og(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ti(e,i,s,l),f&2048&&Do(9,i);break;case 1:Ti(e,i,s,l);break;case 3:Ti(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&_o(e)));break;case 12:if(f&2048){Ti(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,y=d.id,R=d.onPostCommit;typeof R=="function"&&R(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Fe(i,i.return,G)}}else Ti(e,i,s,l);break;case 31:Ti(e,i,s,l);break;case 13:Ti(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Ti(e,i,s,l):No(e,i):d._visibility&2?Ti(e,i,s,l):(d._visibility|=2,ms(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&_d(y,i);break;case 24:Ti(e,i,s,l),f&2048&&vd(i.alternate,i);break;default:Ti(e,i,s,l)}}function ms(e,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,y=i,R=s,G=l,tt=y.flags;switch(y.tag){case 0:case 11:case 15:ms(d,y,R,G,f),Do(8,y);break;case 23:break;case 22:var ht=y.stateNode;y.memoizedState!==null?ht._visibility&2?ms(d,y,R,G,f):No(d,y):(ht._visibility|=2,ms(d,y,R,G,f)),f&&tt&2048&&_d(y.alternate,y);break;case 24:ms(d,y,R,G,f),f&&tt&2048&&vd(y.alternate,y);break;default:ms(d,y,R,G,f)}i=i.sibling}}function No(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:No(s,l),f&2048&&_d(l.alternate,l);break;case 24:No(s,l),f&2048&&vd(l.alternate,l);break;default:No(s,l)}i=i.sibling}}var Lo=8192;function gs(e,i,s){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)Pg(e,i,s),e=e.sibling}function Pg(e,i,s){switch(e.tag){case 26:gs(e,i,s),e.flags&Lo&&e.memoizedState!==null&&GM(s,Ei,e.memoizedState,e.memoizedProps);break;case 5:gs(e,i,s);break;case 3:case 4:var l=Ei;Ei=bc(e.stateNode.containerInfo),gs(e,i,s),Ei=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Lo,Lo=16777216,gs(e,i,s),Lo=l):gs(e,i,s));break;default:gs(e,i,s)}}function Fg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Oo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,Bg(l,e)}Fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zg(e),e=e.sibling}function zg(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&ka(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,uc(e)):Oo(e);break;default:Oo(e)}}function uc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];vn=l,Bg(l,e)}Fg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ka(8,i,i.return),uc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,uc(i));break;default:uc(i)}e=e.sibling}}function Bg(e,i){for(;vn!==null;){var s=vn;switch(s.tag){case 0:case 11:case 15:ka(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:_o(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,vn=l;else t:for(s=e;vn!==null;){l=vn;var f=l.sibling,d=l.return;if(Cg(l),l===s){vn=null;break t}if(f!==null){f.return=d,vn=f;break t}vn=d}}}var nM={getCacheForType:function(e){var i=Sn(ln),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Sn(ln).controller.signal}},iM=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,me=null,ve=0,Pe=0,ti=null,Xa=!1,_s=!1,xd=!1,da=0,$e=0,Wa=0,Cr=0,yd=0,ei=0,vs=0,Po=null,Vn=null,Sd=!1,fc=0,Ig=0,dc=1/0,hc=null,qa=null,mn=0,Ya=null,xs=null,ha=0,Md=0,bd=null,Hg=null,Fo=0,Ed=null;function ni(){return(Ue&2)!==0&&ve!==0?ve&-ve:L.T!==null?Dd():Oi()}function Gg(){if(ei===0)if((ve&536870912)===0||ye){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function kn(e,i,s){(e===ke&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(ys(e,0),ja(e,ve,ei,!1)),wn(e,s),((Ue&2)===0||e!==ke)&&(e===ke&&((Ue&2)===0&&(Cr|=s),$e===4&&ja(e,ve,ei,!1)),Bi(e))}function Vg(e,i,s){if((Ue&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||It(e,i),f=l?sM(e,i):Ad(e,i,!0),d=l;do{if(f===0){_s&&!l&&ja(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!aM(s)){f=Ad(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var R=e;f=Po;var G=R.current.memoizedState.isDehydrated;if(G&&(ys(R,y).flags|=256),y=Ad(R,y,!1),y!==2){if(xd&&!G){R.errorRecoveryDisabledLanes|=d,Cr|=d,f=4;break t}d=Vn,Vn=f,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}f=y}if(d=!1,f!==2)continue}}if(f===1){ys(e,0),ja(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ja(l,i,ei,!Xa);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=fc+300-E(),10<f)){if(ja(l,i,ei,!Xa),ct(l,0,!0)!==0)break t;ha=i,l.timeoutHandle=x_(kg.bind(null,l,s,Vn,hc,Sd,i,ei,Cr,vs,Xa,d,"Throttled",-0,0),f);break t}kg(l,s,Vn,hc,Sd,i,ei,Cr,vs,Xa,d,null,-0,0)}}break}while(!0);Bi(e)}function kg(e,i,s,l,f,d,y,R,G,tt,ht,gt,rt,lt){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},Pg(i,d,gt);var Gt=(d&62914560)===d?fc-E():(d&4194048)===d?Ig-E():0;if(Gt=VM(gt,Gt),Gt!==null){ha=d,e.cancelPendingCommit=Gt(Qg.bind(null,e,i,d,s,l,f,y,R,G,ht,gt,null,rt,lt)),ja(e,d,y,!tt);return}}Qg(e,i,d,s,l,f,y,R,G)}function aM(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!Kn(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ja(e,i,s,l){i&=~yd,i&=~Cr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-Lt(f),y=1<<d;l[d]=-1,f&=~y}s!==0&&io(e,s,i)}function pc(){return(Ue&6)===0?(zo(0),!1):!0}function Td(){if(me!==null){if(Pe===0)var e=me.return;else e=me,na=xr=null,Gf(e),us=null,xo=0,e=me;for(;e!==null;)yg(e.alternate,e),e=e.return;me=null}}function ys(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,EM(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ha=0,Td(),ke=e,me=s=ta(e.current,null),ve=i,Pe=0,ti=null,Xa=!1,_s=It(e,i),xd=!1,vs=ei=yd=Cr=Wa=$e=0,Vn=Po=null,Sd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Lt(l),d=1<<f;i|=e[f],l&=~d}return da=i,Pl(),s}function Xg(e,i){le=null,L.H=Ro,i===cs||i===kl?(i=s0(),Pe=3):i===wf?(i=s0(),Pe=4):Pe=i===id?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,me===null&&($e=1,ic(e,oi(i,e.current)))}function Wg(){var e=Jn.current;return e===null?!0:(ve&4194048)===ve?fi===null:(ve&62914560)===ve||(ve&536870912)!==0?e===fi:!1}function qg(){var e=L.H;return L.H=Ro,e===null?Ro:e}function Yg(){var e=L.A;return L.A=nM,e}function mc(){$e=4,Xa||(ve&4194048)!==ve&&Jn.current!==null||(_s=!0),(Wa&134217727)===0&&(Cr&134217727)===0||ke===null||ja(ke,ve,ei,!1)}function Ad(e,i,s){var l=Ue;Ue|=2;var f=qg(),d=Yg();(ke!==e||ve!==i)&&(hc=null,ys(e,i)),i=!1;var y=$e;t:do try{if(Pe!==0&&me!==null){var R=me,G=ti;switch(Pe){case 8:Td(),y=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(i=!0);var tt=Pe;if(Pe=0,ti=null,Ss(e,R,G,tt),s&&_s){y=0;break t}break;default:tt=Pe,Pe=0,ti=null,Ss(e,R,G,tt)}}rM(),y=$e;break}catch(ht){Xg(e,ht)}while(!0);return i&&e.shellSuspendCounter++,na=xr=null,Ue=l,L.H=f,L.A=d,me===null&&(ke=null,ve=0,Pl()),y}function rM(){for(;me!==null;)jg(me)}function sM(e,i){var s=Ue;Ue|=2;var l=qg(),f=Yg();ke!==e||ve!==i?(hc=null,dc=E()+500,ys(e,i)):_s=It(e,i);t:do try{if(Pe!==0&&me!==null){i=me;var d=ti;e:switch(Pe){case 1:Pe=0,ti=null,Ss(e,i,d,1);break;case 2:case 9:if(a0(d)){Pe=0,ti=null,Zg(i);break}i=function(){Pe!==2&&Pe!==9||ke!==e||(Pe=7),Bi(e)},d.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:a0(d)?(Pe=0,ti=null,Zg(i)):(Pe=0,ti=null,Ss(e,i,d,7));break;case 5:var y=null;switch(me.tag){case 26:y=me.memoizedState;case 5:case 27:var R=me;if(y?O_(y):R.stateNode.complete){Pe=0,ti=null;var G=R.sibling;if(G!==null)me=G;else{var tt=R.return;tt!==null?(me=tt,gc(tt)):me=null}break e}}Pe=0,ti=null,Ss(e,i,d,5);break;case 6:Pe=0,ti=null,Ss(e,i,d,6);break;case 8:Td(),$e=6;break t;default:throw Error(r(462))}}oM();break}catch(ht){Xg(e,ht)}while(!0);return na=xr=null,L.H=l,L.A=f,Ue=s,me!==null?0:(ke=null,ve=0,Pl(),$e)}function oM(){for(;me!==null&&!qt();)jg(me)}function jg(e){var i=vg(e.alternate,e,da);e.memoizedProps=e.pendingProps,i===null?gc(e):me=i}function Zg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=dg(s,i,i.pendingProps,i.type,void 0,ve);break;case 11:i=dg(s,i,i.pendingProps,i.type.render,i.ref,ve);break;case 5:Gf(i);default:yg(s,i),i=me=Ym(i,da),i=vg(s,i,da)}e.memoizedProps=e.pendingProps,i===null?gc(e):me=i}function Ss(e,i,s,l){na=xr=null,Gf(i),us=null,xo=0;var f=i.return;try{if(ZS(e,f,i,s,ve)){$e=1,ic(e,oi(s,e.current)),me=null;return}}catch(d){if(f!==null)throw me=f,d;$e=1,ic(e,oi(s,e.current)),me=null;return}i.flags&32768?(ye||l===1?e=!0:_s||(ve&536870912)!==0?e=!1:(Xa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Jn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Kg(i,e)):gc(i)}function gc(e){var i=e;do{if((i.flags&32768)!==0){Kg(i,Xa);return}e=i.return;var s=JS(i.alternate,i,da);if(s!==null){me=s;return}if(i=i.sibling,i!==null){me=i;return}me=i=e}while(i!==null);$e===0&&($e=5)}function Kg(e,i){do{var s=$S(e.alternate,e);if(s!==null){s.flags&=32767,me=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){me=e;return}me=e=s}while(e!==null);$e=6,me=null}function Qg(e,i,s,l,f,d,y,R,G){e.cancelPendingCommit=null;do _c();while(mn!==0);if((Ue&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=pf,xi(e,s,d,y,R,G),e===ke&&(me=ke=null,ve=0),xs=i,Ya=e,ha=s,Md=d,bd=f,Hg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fM(dt,function(){return n_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,f=F.p,F.p=2,y=Ue,Ue|=4;try{tM(e,i,s)}finally{Ue=y,F.p=f,L.T=l}}mn=1,Jg(),$g(),t_()}}function Jg(){if(mn===1){mn=0;var e=Ya,i=xs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=L.T,L.T=null;var l=F.p;F.p=2;var f=Ue;Ue|=4;try{Ng(i,e);var d=Bd,y=Bm(e.containerInfo),R=d.focusedElem,G=d.selectionRange;if(y!==R&&R&&R.ownerDocument&&zm(R.ownerDocument.documentElement,R)){if(G!==null&&cf(R)){var tt=G.start,ht=G.end;if(ht===void 0&&(ht=tt),"selectionStart"in R)R.selectionStart=tt,R.selectionEnd=Math.min(ht,R.value.length);else{var gt=R.ownerDocument||document,rt=gt&&gt.defaultView||window;if(rt.getSelection){var lt=rt.getSelection(),Gt=R.textContent.length,Jt=Math.min(G.start,Gt),He=G.end===void 0?Jt:Math.min(G.end,Gt);!lt.extend&&Jt>He&&(y=He,He=Jt,Jt=y);var Z=Fm(R,Jt),X=Fm(R,He);if(Z&&X&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var $=gt.createRange();$.setStart(Z.node,Z.offset),lt.removeAllRanges(),Jt>He?(lt.addRange($),lt.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),lt.addRange($))}}}}for(gt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&gt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<gt.length;R++){var mt=gt[R];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}wc=!!zd,Bd=zd=null}finally{Ue=f,F.p=l,L.T=s}}e.current=i,mn=2}}function $g(){if(mn===2){mn=0;var e=Ya,i=xs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=L.T,L.T=null;var l=F.p;F.p=2;var f=Ue;Ue|=4;try{Rg(e,i.alternate,i)}finally{Ue=f,F.p=l,L.T=s}}mn=3}}function t_(){if(mn===4||mn===3){mn=0,O();var e=Ya,i=xs,s=ha,l=Hg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?mn=5:(mn=0,xs=Ya=null,e_(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(qa=null),Yr(s),i=i.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=L.T,f=F.p,F.p=2,L.T=null;try{for(var d=e.onRecoverableError,y=0;y<l.length;y++){var R=l[y];d(R.value,{componentStack:R.stack})}}finally{L.T=i,F.p=f}}(ha&3)!==0&&_c(),Bi(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===Ed?Fo++:(Fo=0,Ed=e):Fo=0,zo(0)}}function e_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,_o(i)))}function _c(){return Jg(),$g(),t_(),n_()}function n_(){if(mn!==5)return!1;var e=Ya,i=Md;Md=0;var s=Yr(ha),l=L.T,f=F.p;try{F.p=32>s?32:s,L.T=null,s=bd,bd=null;var d=Ya,y=ha;if(mn=0,xs=Ya=null,ha=0,(Ue&6)!==0)throw Error(r(331));var R=Ue;if(Ue|=4,zg(d.current),Og(d,d.current,y,s),Ue=R,zo(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Et,d)}catch{}return!0}finally{F.p=f,L.T=l,e_(e,i)}}function i_(e,i,s){i=oi(s,i),i=nd(e.stateNode,i,2),e=Ha(e,i,2),e!==null&&(wn(e,2),Bi(e))}function Fe(e,i,s){if(e.tag===3)i_(e,e,s);else for(;i!==null;){if(i.tag===3){i_(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qa===null||!qa.has(l))){e=oi(s,e),s=ag(2),l=Ha(i,s,2),l!==null&&(rg(s,l,i,e),wn(l,2),Bi(l));break}}i=i.return}}function Rd(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new iM;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(xd=!0,f.add(s),e=lM.bind(null,e,i,s),i.then(e,e))}function lM(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,ke===e&&(ve&s)===s&&($e===4||$e===3&&(ve&62914560)===ve&&300>E()-fc?(Ue&2)===0&&ys(e,0):yd|=s,vs===ve&&(vs=0)),Bi(e)}function a_(e,i){i===0&&(i=Oe()),e=gr(e,i),e!==null&&(wn(e,i),Bi(e))}function cM(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),a_(e,s)}function uM(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),a_(e,s)}function fM(e,i){return be(e,i)}var vc=null,Ms=null,Cd=!1,xc=!1,wd=!1,Za=0;function Bi(e){e!==Ms&&e.next===null&&(Ms===null?vc=Ms=e:Ms=Ms.next=e),xc=!0,Cd||(Cd=!0,hM())}function zo(e,i){if(!wd&&xc){wd=!0;do for(var s=!1,l=vc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var y=l.suspendedLanes,R=l.pingedLanes;d=(1<<31-Lt(42|e)+1)-1,d&=f&~(y&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,l_(l,d))}else d=ve,d=ct(l,l===ke?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||It(l,d)||(s=!0,l_(l,d));l=l.next}while(s);wd=!1}}function dM(){r_()}function r_(){xc=Cd=!1;var e=0;Za!==0&&bM()&&(e=Za);for(var i=E(),s=null,l=vc;l!==null;){var f=l.next,d=s_(l,i);d===0?(l.next=null,s===null?vc=f:s.next=f,f===null&&(Ms=s)):(s=l,(e!==0||(d&3)!==0)&&(xc=!0)),l=f}mn!==0&&mn!==5||zo(e),Za!==0&&(Za=0)}function s_(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-Lt(d),R=1<<y,G=f[y];G===-1?((R&s)===0||(R&l)!==0)&&(f[y]=ne(R,i)):G<=i&&(e.expiredLanes|=R),d&=~R}if(i=ke,s=ve,s=ct(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ne(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||It(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&Ne(l),Yr(s)){case 2:case 8:s=St;break;case 32:s=dt;break;case 268435456:s=wt;break;default:s=dt}return l=o_.bind(null,e),s=be(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&Ne(l),e.callbackPriority=2,e.callbackNode=null,2}function o_(e,i){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(_c()&&e.callbackNode!==s)return null;var l=ve;return l=ct(e,e===ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vg(e,l,i),s_(e,E()),e.callbackNode!=null&&e.callbackNode===s?o_.bind(null,e):null)}function l_(e,i){if(_c())return null;Vg(e,i,!0)}function hM(){TM(function(){(Ue&6)!==0?be(pt,dM):r_()})}function Dd(){if(Za===0){var e=os;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Za=e}return Za}function c_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rl(""+e)}function u_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function pM(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=c_((f[hn]||null).action),y=l.submitter;y&&(i=(i=y[hn]||null)?c_(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var R=new Ul("action","action",null,l,f);e.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Za!==0){var G=y?u_(f,y):new FormData(f);Kf(s,{pending:!0,data:G,method:f.method,action:d},null,G)}}else typeof d=="function"&&(R.preventDefault(),G=y?u_(f,y):new FormData(f),Kf(s,{pending:!0,data:G,method:f.method,action:d},d,G))},currentTarget:f}]})}}for(var Ud=0;Ud<hf.length;Ud++){var Nd=hf[Ud],mM=Nd.toLowerCase(),gM=Nd[0].toUpperCase()+Nd.slice(1);bi(mM,"on"+gM)}bi(Gm,"onAnimationEnd"),bi(Vm,"onAnimationIteration"),bi(km,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(NS,"onTransitionRun"),bi(LS,"onTransitionStart"),bi(OS,"onTransitionCancel"),bi(Xm,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_M=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function f_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var R=l[y],G=R.instance,tt=R.currentTarget;if(R=R.listener,G!==d&&f.isPropagationStopped())break t;d=R,f.currentTarget=tt;try{d(f)}catch(ht){Ol(ht)}f.currentTarget=null,d=G}else for(y=0;y<l.length;y++){if(R=l[y],G=R.instance,tt=R.currentTarget,R=R.listener,G!==d&&f.isPropagationStopped())break t;d=R,f.currentTarget=tt;try{d(f)}catch(ht){Ol(ht)}f.currentTarget=null,d=G}}}}function ge(e,i){var s=i[Da];s===void 0&&(s=i[Da]=new Set);var l=e+"__bubble";s.has(l)||(d_(i,e,2,!1),s.add(l))}function Ld(e,i,s){var l=0;i&&(l|=4),d_(s,e,l,i)}var yc="_reactListening"+Math.random().toString(36).slice(2);function Od(e){if(!e[yc]){e[yc]=!0,ot.forEach(function(s){s!=="selectionchange"&&(_M.has(s)||Ld(s,!1,e),Ld(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[yc]||(i[yc]=!0,Ld("selectionchange",!1,i))}}function d_(e,i,s,l){switch(G_(i)){case 2:var f=WM;break;case 8:f=qM;break;default:f=Zd}s=f.bind(null,i,s,e),f=void 0,!$u||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function Pd(e,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var R=l.stateNode.containerInfo;if(R===f)break;if(y===4)for(y=l.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;R!==null;){if(y=Ua(R),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){l=d=y;continue t}R=R.parentNode}}l=l.return}_m(function(){var tt=d,ht=Qu(s),gt=[];t:{var rt=Wm.get(e);if(rt!==void 0){var lt=Ul,Gt=e;switch(e){case"keypress":if(wl(s)===0)break t;case"keydown":case"keyup":lt=uS;break;case"focusin":Gt="focus",lt=af;break;case"focusout":Gt="blur",lt=af;break;case"beforeblur":case"afterblur":lt=af;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=hS;break;case Gm:case Vm:case km:lt=eS;break;case Xm:lt=mS;break;case"scroll":case"scrollend":lt=Ky;break;case"wheel":lt=_S;break;case"copy":case"cut":case"paste":lt=iS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Mm;break;case"toggle":case"beforetoggle":lt=xS}var Jt=(i&4)!==0,He=!Jt&&(e==="scroll"||e==="scrollend"),Z=Jt?rt!==null?rt+"Capture":null:rt;Jt=[];for(var X=tt,$;X!==null;){var mt=X;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||Z===null||(mt=ro(X,Z),mt!=null&&Jt.push(Io(X,mt,$))),He)break;X=X.return}0<Jt.length&&(rt=new lt(rt,Gt,null,s,ht),gt.push({event:rt,listeners:Jt}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",rt&&s!==Ku&&(Gt=s.relatedTarget||s.fromElement)&&(Ua(Gt)||Gt[Ki]))break t;if((lt||rt)&&(rt=ht.window===ht?ht:(rt=ht.ownerDocument)?rt.defaultView||rt.parentWindow:window,lt?(Gt=s.relatedTarget||s.toElement,lt=tt,Gt=Gt?Ua(Gt):null,Gt!==null&&(He=c(Gt),Jt=Gt.tag,Gt!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(Gt=null)):(lt=null,Gt=tt),lt!==Gt)){if(Jt=ym,mt="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=Mm,mt="onPointerLeave",Z="onPointerEnter",X="pointer"),He=lt==null?rt:dr(lt),$=Gt==null?rt:dr(Gt),rt=new Jt(mt,X+"leave",lt,s,ht),rt.target=He,rt.relatedTarget=$,mt=null,Ua(ht)===tt&&(Jt=new Jt(Z,X+"enter",Gt,s,ht),Jt.target=$,Jt.relatedTarget=He,mt=Jt),He=mt,lt&&Gt)e:{for(Jt=vM,Z=lt,X=Gt,$=0,mt=Z;mt;mt=Jt(mt))$++;mt=0;for(var Qt=X;Qt;Qt=Jt(Qt))mt++;for(;0<$-mt;)Z=Jt(Z),$--;for(;0<mt-$;)X=Jt(X),mt--;for(;$--;){if(Z===X||X!==null&&Z===X.alternate){Jt=Z;break e}Z=Jt(Z),X=Jt(X)}Jt=null}else Jt=null;lt!==null&&h_(gt,rt,lt,Jt,!1),Gt!==null&&He!==null&&h_(gt,He,Gt,Jt,!0)}}t:{if(rt=tt?dr(tt):window,lt=rt.nodeName&&rt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&rt.type==="file")var Re=Dm;else if(Cm(rt))if(Um)Re=wS;else{Re=RS;var Yt=AS}else lt=rt.nodeName,!lt||lt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?tt&&Zr(tt.elementType)&&(Re=Dm):Re=CS;if(Re&&(Re=Re(e,tt))){wm(gt,Re,s,ht);break t}Yt&&Yt(e,rt,tt),e==="focusout"&&tt&&rt.type==="number"&&tt.memoizedProps.value!=null&&Si(rt,"number",rt.value)}switch(Yt=tt?dr(tt):window,e){case"focusin":(Cm(Yt)||Yt.contentEditable==="true")&&($r=Yt,uf=tt,po=null);break;case"focusout":po=uf=$r=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,Im(gt,s,ht);break;case"selectionchange":if(US)break;case"keydown":case"keyup":Im(gt,s,ht)}var fe;if(sf)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Jr?Am(e,s)&&(xe="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(xe="onCompositionStart");xe&&(bm&&s.locale!=="ko"&&(Jr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Jr&&(fe=vm()):(La=ht,tf="value"in La?La.value:La.textContent,Jr=!0)),Yt=Sc(tt,xe),0<Yt.length&&(xe=new Sm(xe,e,null,s,ht),gt.push({event:xe,listeners:Yt}),fe?xe.data=fe:(fe=Rm(s),fe!==null&&(xe.data=fe)))),(fe=SS?MS(e,s):bS(e,s))&&(xe=Sc(tt,"onBeforeInput"),0<xe.length&&(Yt=new Sm("onBeforeInput","beforeinput",null,s,ht),gt.push({event:Yt,listeners:xe}),Yt.data=fe)),pM(gt,e,tt,s,ht)}f_(gt,i)})}function Io(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Sc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=ro(e,s),f!=null&&l.unshift(Io(e,f,d)),f=ro(e,i),f!=null&&l.push(Io(e,f,d))),e.tag===3)return l;e=e.return}return[]}function vM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function h_(e,i,s,l,f){for(var d=i._reactName,y=[];s!==null&&s!==l;){var R=s,G=R.alternate,tt=R.stateNode;if(R=R.tag,G!==null&&G===l)break;R!==5&&R!==26&&R!==27||tt===null||(G=tt,f?(tt=ro(s,d),tt!=null&&y.unshift(Io(s,tt,G))):f||(tt=ro(s,d),tt!=null&&y.push(Io(s,tt,G)))),s=s.return}y.length!==0&&e.push({event:i,listeners:y})}var xM=/\r\n?/g,yM=/\u0000|\uFFFD/g;function p_(e){return(typeof e=="string"?e:""+e).replace(xM,`
`).replace(yM,"")}function m_(e,i){return i=p_(i),p_(e)===i}function Ie(e,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Nn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Nn(e,""+l);break;case"className":re(e,"class",l);break;case"tabIndex":re(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":re(e,s,l);break;case"style":Qi(e,l,d);break;case"data":if(i!=="object"){re(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Rl(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Ie(e,i,"name",f.name,f,null),Ie(e,i,"formEncType",f.formEncType,f,null),Ie(e,i,"formMethod",f.formMethod,f,null),Ie(e,i,"formTarget",f.formTarget,f,null)):(Ie(e,i,"encType",f.encType,f,null),Ie(e,i,"method",f.method,f,null),Ie(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Rl(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Ji);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Rl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ee(e,"popover",l);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ee(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=jy.get(s)||s,ee(e,s,l))}}function Fd(e,i,s,l,f,d){switch(s){case"style":Qi(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Nn(e,l):(typeof l=="number"||typeof l=="bigint")&&Nn(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!et.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=e[hn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):ee(e,s,l)}}}function bn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var y=s[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ie(e,i,d,y,s,null)}}f&&Ie(e,i,"srcSet",s.srcSet,s,null),l&&Ie(e,i,"src",s.src,s,null);return;case"input":ge("invalid",e);var R=d=y=f=null,G=null,tt=null;for(l in s)if(s.hasOwnProperty(l)){var ht=s[l];if(ht!=null)switch(l){case"name":f=ht;break;case"type":y=ht;break;case"checked":G=ht;break;case"defaultChecked":tt=ht;break;case"value":d=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,i));break;default:Ie(e,i,l,ht,s,null)}}jn(e,d,R,G,tt,y,f,!1);return;case"select":ge("invalid",e),l=y=d=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":y=R;break;case"multiple":l=R;default:Ie(e,i,f,R,s,null)}i=d,s=y,e.multiple=!!l,i!=null?Zn(e,!!l,i,!1):s!=null&&Zn(e,!!l,s,!0);return;case"textarea":ge("invalid",e),d=f=l=null;for(y in s)if(s.hasOwnProperty(y)&&(R=s[y],R!=null))switch(y){case"value":l=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ie(e,i,y,R,s,null)}sn(e,l,f,d);return;case"option":for(G in s)s.hasOwnProperty(G)&&(l=s[G],l!=null)&&(G==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ie(e,i,G,l,s,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<Bo.length;l++)ge(Bo[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in s)if(s.hasOwnProperty(tt)&&(l=s[tt],l!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ie(e,i,tt,l,s,null)}return;default:if(Zr(i)){for(ht in s)s.hasOwnProperty(ht)&&(l=s[ht],l!==void 0&&Fd(e,i,ht,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Ie(e,i,R,l,s,null))}function SM(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,y=null,R=null,G=null,tt=null,ht=null;for(lt in s){var gt=s[lt];if(s.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":G=gt;default:l.hasOwnProperty(lt)||Ie(e,i,lt,null,l,gt)}}for(var rt in l){var lt=l[rt];if(gt=s[rt],l.hasOwnProperty(rt)&&(lt!=null||gt!=null))switch(rt){case"type":d=lt;break;case"name":f=lt;break;case"checked":tt=lt;break;case"defaultChecked":ht=lt;break;case"value":y=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,i));break;default:lt!==gt&&Ie(e,i,rt,lt,l,gt)}}Un(e,y,R,G,tt,ht,d,f);return;case"select":lt=y=R=rt=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":lt=G;default:l.hasOwnProperty(d)||Ie(e,i,d,null,l,G)}for(f in l)if(d=l[f],G=s[f],l.hasOwnProperty(f)&&(d!=null||G!=null))switch(f){case"value":rt=d;break;case"defaultValue":R=d;break;case"multiple":y=d;default:d!==G&&Ie(e,i,f,d,l,G)}i=R,s=y,l=lt,rt!=null?Zn(e,!!s,rt,!1):!!l!=!!s&&(i!=null?Zn(e,!!s,i,!0):Zn(e,!!s,s?[]:"",!1));return;case"textarea":lt=rt=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ie(e,i,R,null,l,f)}for(y in l)if(f=l[y],d=s[y],l.hasOwnProperty(y)&&(f!=null||d!=null))switch(y){case"value":rt=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Ie(e,i,y,f,l,d)}Le(e,rt,lt);return;case"option":for(var Gt in s)rt=s[Gt],s.hasOwnProperty(Gt)&&rt!=null&&!l.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:Ie(e,i,Gt,null,l,rt));for(G in l)rt=l[G],lt=s[G],l.hasOwnProperty(G)&&rt!==lt&&(rt!=null||lt!=null)&&(G==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":Ie(e,i,G,rt,l,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in s)rt=s[Jt],s.hasOwnProperty(Jt)&&rt!=null&&!l.hasOwnProperty(Jt)&&Ie(e,i,Jt,null,l,rt);for(tt in l)if(rt=l[tt],lt=s[tt],l.hasOwnProperty(tt)&&rt!==lt&&(rt!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,i));break;default:Ie(e,i,tt,rt,l,lt)}return;default:if(Zr(i)){for(var He in s)rt=s[He],s.hasOwnProperty(He)&&rt!==void 0&&!l.hasOwnProperty(He)&&Fd(e,i,He,void 0,l,rt);for(ht in l)rt=l[ht],lt=s[ht],!l.hasOwnProperty(ht)||rt===lt||rt===void 0&&lt===void 0||Fd(e,i,ht,rt,l,lt);return}}for(var Z in s)rt=s[Z],s.hasOwnProperty(Z)&&rt!=null&&!l.hasOwnProperty(Z)&&Ie(e,i,Z,null,l,rt);for(gt in l)rt=l[gt],lt=s[gt],!l.hasOwnProperty(gt)||rt===lt||rt==null&&lt==null||Ie(e,i,gt,rt,l,lt)}function g_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,y=f.initiatorType,R=f.duration;if(d&&R&&g_(y)){for(y=0,R=f.responseEnd,l+=1;l<s.length;l++){var G=s[l],tt=G.startTime;if(tt>R)break;var ht=G.transferSize,gt=G.initiatorType;ht&&g_(gt)&&(G=G.responseEnd,y+=ht*(G<R?1:(R-tt)/(G-tt)))}if(--l,i+=8*(d+y)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zd=null,Bd=null;function Mc(e){return e.nodeType===9?e:e.ownerDocument}function __(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Id(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Hd=null;function bM(){var e=window.event;return e&&e.type==="popstate"?e===Hd?!1:(Hd=e,!0):(Hd=null,!1)}var x_=typeof setTimeout=="function"?setTimeout:void 0,EM=typeof clearTimeout=="function"?clearTimeout:void 0,y_=typeof Promise=="function"?Promise:void 0,TM=typeof queueMicrotask=="function"?queueMicrotask:typeof y_<"u"?function(e){return y_.resolve(null).then(e).catch(AM)}:x_;function AM(e){setTimeout(function(){throw e})}function Ka(e){return e==="head"}function S_(e,i){var s=i,l=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(f),As(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Ho(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Ho(s);for(var d=s.firstChild;d;){var y=d.nextSibling,R=d.nodeName;d[fr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=y}}else s==="body"&&Ho(e.ownerDocument.body);s=f}while(s);As(i)}function M_(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Gd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Gd(s),ao(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function RM(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[fr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function CM(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=di(e.nextSibling),e===null))return null;return e}function b_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=di(e.nextSibling),e===null))return null;return e}function Vd(e){return e.data==="$?"||e.data==="$~"}function kd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wM(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function di(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Xd=null;function E_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return di(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function T_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function A_(e,i,s){switch(i=Mc(s),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ho(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ao(e)}var hi=new Map,R_=new Set;function bc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=F.d;F.d={f:DM,r:UM,D:NM,C:LM,L:OM,m:PM,X:zM,S:FM,M:BM};function DM(){var e=pa.f(),i=pc();return e||i}function UM(e){var i=Na(e);i!==null&&i.tag===5&&i.type==="form"?X0(i):pa.r(e)}var bs=typeof document>"u"?null:document;function C_(e,i,s){var l=bs;if(l&&typeof i=="string"&&i){var f=ae(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),R_.has(f)||(R_.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),bn(i,"link",e),W(i),l.head.appendChild(i)))}}function NM(e){pa.D(e),C_("dns-prefetch",e,null)}function LM(e,i){pa.C(e,i),C_("preconnect",e,i)}function OM(e,i,s){pa.L(e,i,s);var l=bs;if(l&&e&&i){var f='link[rel="preload"][as="'+ae(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ae(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ae(s.imageSizes)+'"]')):f+='[href="'+ae(e)+'"]';var d=f;switch(i){case"style":d=Es(e);break;case"script":d=Ts(e)}hi.has(d)||(e=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),hi.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(Go(d))||i==="script"&&l.querySelector(Vo(d))||(i=l.createElement("link"),bn(i,"link",e),W(i),l.head.appendChild(i)))}}function PM(e,i){pa.m(e,i);var s=bs;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ae(l)+'"][href="'+ae(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ts(e)}if(!hi.has(d)&&(e=v({rel:"modulepreload",href:e},i),hi.set(d,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Vo(d)))return}l=s.createElement("link"),bn(l,"link",e),W(l),s.head.appendChild(l)}}}function FM(e,i,s){pa.S(e,i,s);var l=bs;if(l&&e){var f=C(l).hoistableStyles,d=Es(e);i=i||"default";var y=f.get(d);if(!y){var R={loading:0,preload:null};if(y=l.querySelector(Go(d)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},s),(s=hi.get(d))&&Wd(e,s);var G=y=l.createElement("link");W(G),bn(G,"link",e),G._p=new Promise(function(tt,ht){G.onload=tt,G.onerror=ht}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Ec(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:R},f.set(d,y)}}}function zM(e,i){pa.X(e,i);var s=bs;if(s&&e){var l=C(s).hoistableScripts,f=Ts(e),d=l.get(f);d||(d=s.querySelector(Vo(f)),d||(e=v({src:e,async:!0},i),(i=hi.get(f))&&qd(e,i),d=s.createElement("script"),W(d),bn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function BM(e,i){pa.M(e,i);var s=bs;if(s&&e){var l=C(s).hoistableScripts,f=Ts(e),d=l.get(f);d||(d=s.querySelector(Vo(f)),d||(e=v({src:e,async:!0,type:"module"},i),(i=hi.get(f))&&qd(e,i),d=s.createElement("script"),W(d),bn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function w_(e,i,s,l){var f=(f=nt.current)?bc(f):null;if(!f)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Es(s.href),s=C(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Es(s.href);var d=C(f).hoistableStyles,y=d.get(e);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=f.querySelector(Go(e)))&&!d._p&&(y.instance=d,y.state.loading=5),hi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},hi.set(e,s),d||IM(f,e,s,y.state))),i&&l===null)throw Error(r(528,""));return y}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ts(s),s=C(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Es(e){return'href="'+ae(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function D_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function IM(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),bn(i,"link",s),W(i),e.head.appendChild(i))}function Ts(e){return'[src="'+ae(e)+'"]'}function Vo(e){return"script[async]"+e}function U_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ae(s.href)+'"]');if(l)return i.instance=l,W(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),W(l),bn(l,"style",f),Ec(l,s.precedence,e),i.instance=l;case"stylesheet":f=Es(s.href);var d=e.querySelector(Go(f));if(d)return i.state.loading|=4,i.instance=d,W(d),d;l=D_(s),(f=hi.get(f))&&Wd(l,f),d=(e.ownerDocument||e).createElement("link"),W(d);var y=d;return y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),bn(d,"link",l),i.state.loading|=4,Ec(d,s.precedence,e),i.instance=d;case"script":return d=Ts(s.src),(f=e.querySelector(Vo(d)))?(i.instance=f,W(f),f):(l=s,(f=hi.get(d))&&(l=v({},s),qd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),W(f),bn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ec(l,s.precedence,e));return i.instance}function Ec(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,y=0;y<l.length;y++){var R=l[y];if(R.dataset.precedence===i)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Wd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function qd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Tc=null;function N_(e,i,s){if(Tc===null){var l=new Map,f=Tc=new Map;f.set(s,l)}else f=Tc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var d=s[f];if(!(d[fr]||d[rn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=e+y;var R=l.get(y);R?R.push(d):l.set(y,[d])}}return l}function L_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function HM(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function O_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function GM(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Es(l.href),d=i.querySelector(Go(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Ac.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=d,W(d);return}d=i.ownerDocument||i,l=D_(l),(f=hi.get(f))&&Wd(l,f),d=d.createElement("link"),W(d);var y=d;y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),bn(d,"link",l),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Ac.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Yd=0;function VM(e,i){return e.stylesheets&&e.count===0&&Cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&Cc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Yd===0&&(Yd=62500*MM());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Cc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Yd?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Rc=null;function Cc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rc=new Map,i.forEach(kM,e),Rc=null,Ac.call(e))}function kM(e,i){if(!(i.state.loading&4)){var s=Rc.get(e);if(s)var l=s.get(null);else{s=new Map,Rc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var y=f[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}f=i.instance,y=f.getAttribute("data-precedence"),d=s.get(y)||l,d===l&&s.set(null,f),s.set(y,f),this.count++,l=Ac.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var ko={$$typeof:N,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function XM(e,i,s,l,f,d,y,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function P_(e,i,s,l,f,d,y,R,G,tt,ht,gt){return e=new XM(e,i,s,y,G,tt,ht,gt,R),i=1,d===!0&&(i|=24),d=Qn(3,null,null,i),e.current=d,d.stateNode=e,i=Af(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Df(d),e}function F_(e){return e?(e=ns,e):ns}function z_(e,i,s,l,f,d){f=F_(f),l.context===null?l.context=f:l.pendingContext=f,l=Ia(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ha(e,l,i),s!==null&&(kn(s,e,i),So(s,e,i))}function B_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function jd(e,i){B_(e,i),(e=e.alternate)&&B_(e,i)}function I_(e){if(e.tag===13||e.tag===31){var i=gr(e,67108864);i!==null&&kn(i,e,67108864),jd(e,67108864)}}function H_(e){if(e.tag===13||e.tag===31){var i=ni();i=qr(i);var s=gr(e,i);s!==null&&kn(s,e,i),jd(e,i)}}var wc=!0;function WM(e,i,s,l){var f=L.T;L.T=null;var d=F.p;try{F.p=2,Zd(e,i,s,l)}finally{F.p=d,L.T=f}}function qM(e,i,s,l){var f=L.T;L.T=null;var d=F.p;try{F.p=8,Zd(e,i,s,l)}finally{F.p=d,L.T=f}}function Zd(e,i,s,l){if(wc){var f=Kd(l);if(f===null)Pd(e,i,l,Dc,s),V_(e,l);else if(jM(f,e,i,s,l))l.stopPropagation();else if(V_(e,l),i&4&&-1<YM.indexOf(e)){for(;f!==null;){var d=Na(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=bt(d.pendingLanes);if(y!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var G=1<<31-Lt(y);R.entanglements[1]|=G,y&=~G}Bi(d),(Ue&6)===0&&(dc=E()+500,zo(0))}}break;case 31:case 13:R=gr(d,2),R!==null&&kn(R,d,2),pc(),jd(d,2)}if(d=Kd(l),d===null&&Pd(e,i,l,Dc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else Pd(e,i,l,null,s)}}function Kd(e){return e=Qu(e),Qd(e)}var Dc=null;function Qd(e){if(Dc=null,e=Ua(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=p(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Dc=e,null}function G_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case pt:return 2;case St:return 8;case dt:case Xt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Jd=!1,Qa=null,Ja=null,$a=null,Xo=new Map,Wo=new Map,tr=[],YM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V_(e,i){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Xo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(i.pointerId)}}function qo(e,i,s,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Na(i),i!==null&&I_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function jM(e,i,s,l,f){switch(i){case"focusin":return Qa=qo(Qa,e,i,s,l,f),!0;case"dragenter":return Ja=qo(Ja,e,i,s,l,f),!0;case"mouseover":return $a=qo($a,e,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return Xo.set(d,qo(Xo.get(d)||null,e,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Wo.set(d,qo(Wo.get(d)||null,e,i,s,l,f)),!0}return!1}function k_(e){var i=Ua(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,jr(e.priority,function(){H_(s)});return}}else if(i===31){if(i=p(s),i!==null){e.blockedOn=i,jr(e.priority,function(){H_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Kd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Ku=l,s.target.dispatchEvent(l),Ku=null}else return i=Na(s),i!==null&&I_(i),e.blockedOn=s,!1;i.shift()}return!0}function X_(e,i,s){Uc(e)&&s.delete(i)}function ZM(){Jd=!1,Qa!==null&&Uc(Qa)&&(Qa=null),Ja!==null&&Uc(Ja)&&(Ja=null),$a!==null&&Uc($a)&&($a=null),Xo.forEach(X_),Wo.forEach(X_)}function Nc(e,i){e.blockedOn===i&&(e.blockedOn=null,Jd||(Jd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,ZM)))}var Lc=null;function W_(e){Lc!==e&&(Lc=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Lc===e&&(Lc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(Qd(l||s)===null)continue;break}var d=Na(s);d!==null&&(e.splice(i,3),i-=3,Kf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function As(e){function i(G){return Nc(G,e)}Qa!==null&&Nc(Qa,e),Ja!==null&&Nc(Ja,e),$a!==null&&Nc($a,e),Xo.forEach(i),Wo.forEach(i);for(var s=0;s<tr.length;s++){var l=tr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<tr.length&&(s=tr[0],s.blockedOn===null);)k_(s),s.blockedOn===null&&tr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],y=f[hn]||null;if(typeof d=="function")y||W_(s);else if(y){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,y=d[hn]||null)R=y.formAction;else if(Qd(f)!==null)continue}else R=y.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),W_(s)}}}function q_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function $d(e){this._internalRoot=e}Oc.prototype.render=$d.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=ni();z_(s,l,e,i,null,null)},Oc.prototype.unmount=$d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;z_(e.current,2,null,e,null,null),pc(),i[Ki]=null}};function Oc(e){this._internalRoot=e}Oc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Oi();e={blockedOn:null,target:e,priority:i};for(var s=0;s<tr.length&&i!==0&&i<tr[s].priority;s++);tr.splice(s,0,e),s===0&&k_(e)}};var Y_=t.version;if(Y_!=="19.2.4")throw Error(r(527,Y_,"19.2.4"));F.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var KM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{Et=Pc.inject(KM),Mt=Pc}catch{}}return jo.createRoot=function(e,i){if(!o(e))throw Error(r(299));var s=!1,l="",f=tg,d=eg,y=ng;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=P_(e,1,!1,null,null,s,l,null,f,d,y,q_),e[Ki]=i.current,Od(e),new $d(i)},jo.hydrateRoot=function(e,i,s){if(!o(e))throw Error(r(299));var l=!1,f="",d=tg,y=eg,R=ng,G=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=P_(e,1,!0,i,s??null,l,f,G,d,y,R,q_),i.context=F_(null),s=i.current,l=ni(),l=qr(l),f=Ia(l),f.callback=null,Ha(s,f,l),s=l,i.current.lanes=s,wn(i,s),Bi(i),e[Ki]=i.current,Od(e),new Oc(i)},jo.version="19.2.4",jo}var iv;function s1(){if(iv)return nh.exports;iv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),nh.exports=r1(),nh.exports}var o1=s1();const jp="183",l1=0,av=1,c1=2,hu=1,u1=2,al=3,ur=0,qn=1,Sa=2,ba=0,Vs=1,rv=2,sv=3,ov=4,f1=5,Fr=100,d1=101,h1=102,p1=103,m1=104,g1=200,_1=201,v1=202,x1=203,Xh=204,Wh=205,y1=206,S1=207,M1=208,b1=209,E1=210,T1=211,A1=212,R1=213,C1=214,qh=0,Yh=1,jh=2,Ws=3,Zh=4,Kh=5,Qh=6,Jh=7,Rx=0,w1=1,D1=2,Xi=0,Cx=1,wx=2,Dx=3,Ux=4,Nx=5,Lx=6,Ox=7,Px=300,Vr=301,qs=302,sh=303,oh=304,Gu=306,$h=1e3,Ma=1001,tp=1002,En=1003,U1=1004,Fc=1005,Cn=1006,lh=1007,Br=1008,_i=1009,Fx=1010,zx=1011,fl=1012,Zp=1013,Yi=1014,Vi=1015,Ta=1016,Kp=1017,Qp=1018,dl=1020,Bx=35902,Ix=35899,Hx=1021,Gx=1022,Ni=1023,Aa=1026,Ir=1027,Vx=1028,Jp=1029,Ys=1030,$p=1031,tm=1033,pu=33776,mu=33777,gu=33778,_u=33779,ep=35840,np=35841,ip=35842,ap=35843,rp=36196,sp=37492,op=37496,lp=37488,cp=37489,up=37490,fp=37491,dp=37808,hp=37809,pp=37810,mp=37811,gp=37812,_p=37813,vp=37814,xp=37815,yp=37816,Sp=37817,Mp=37818,bp=37819,Ep=37820,Tp=37821,Ap=36492,Rp=36494,Cp=36495,wp=36283,Dp=36284,Up=36285,Np=36286,N1=3200,L1=0,O1=1,lr="",mi="srgb",js="srgb-linear",bu="linear",ze="srgb",Rs=7680,lv=519,P1=512,F1=513,z1=514,em=515,B1=516,I1=517,nm=518,H1=519,cv=35044,uv="300 es",ki=2e3,Eu=2001;function G1(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Tu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function V1(){const a=Tu("canvas");return a.style.display="block",a}const fv={};function dv(...a){const t="THREE."+a.shift();console.log(t,...a)}function kx(a){const t=a[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ie(...a){a=kx(a);const t="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...a)}}function we(...a){a=kx(a);const t="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...a)}}function Au(...a){const t=a.join(" ");t in fv||(fv[t]=!0,ie(...a))}function k1(a,t,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const X1={[qh]:Yh,[jh]:Qh,[Zh]:Jh,[Ws]:Kh,[Yh]:qh,[Qh]:jh,[Jh]:Zh,[Kh]:Ws};class $s{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=Math.PI/180,Lp=180/Math.PI;function _l(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[a&255]+An[a>>8&255]+An[a>>16&255]+An[a>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[n&63|128]+An[n>>8&255]+"-"+An[n>>16&255]+An[n>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Se(a,t,n){return Math.max(t,Math.min(n,a))}function W1(a,t){return(a%t+t)%t}function uh(a,t,n){return(1-n)*a+n*t}function Zo(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Xn(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(t=0,n=0){Ve.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*r-u*o+t.x,this.y=c*o+u*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class to{constructor(t=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=o}static slerpFlat(t,n,r,o,c,u,p){let m=r[o+0],h=r[o+1],_=r[o+2],v=r[o+3],g=c[u+0],x=c[u+1],b=c[u+2],A=c[u+3];if(v!==A||m!==g||h!==x||_!==b){let M=m*g+h*x+_*b+v*A;M<0&&(g=-g,x=-x,b=-b,A=-A,M=-M);let S=1-p;if(M<.9995){const w=Math.acos(M),N=Math.sin(w);S=Math.sin(S*w)/N,p=Math.sin(p*w)/N,m=m*S+g*p,h=h*S+x*p,_=_*S+b*p,v=v*S+A*p}else{m=m*S+g*p,h=h*S+x*p,_=_*S+b*p,v=v*S+A*p;const w=1/Math.sqrt(m*m+h*h+_*_+v*v);m*=w,h*=w,_*=w,v*=w}}t[n]=m,t[n+1]=h,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,r,o,c,u){const p=r[o],m=r[o+1],h=r[o+2],_=r[o+3],v=c[u],g=c[u+1],x=c[u+2],b=c[u+3];return t[n]=p*b+_*v+m*x-h*g,t[n+1]=m*b+_*g+h*v-p*x,t[n+2]=h*b+_*x+p*g-m*v,t[n+3]=_*b-p*v-m*g-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,o){return this._x=t,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,o=t._y,c=t._z,u=t._order,p=Math.cos,m=Math.sin,h=p(r/2),_=p(o/2),v=p(c/2),g=m(r/2),x=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=g*_*v+h*x*b,this._y=h*x*v-g*_*b,this._z=h*_*b+g*x*v,this._w=h*_*v-g*x*b;break;case"YXZ":this._x=g*_*v+h*x*b,this._y=h*x*v-g*_*b,this._z=h*_*b-g*x*v,this._w=h*_*v+g*x*b;break;case"ZXY":this._x=g*_*v-h*x*b,this._y=h*x*v+g*_*b,this._z=h*_*b+g*x*v,this._w=h*_*v-g*x*b;break;case"ZYX":this._x=g*_*v-h*x*b,this._y=h*x*v+g*_*b,this._z=h*_*b-g*x*v,this._w=h*_*v+g*x*b;break;case"YZX":this._x=g*_*v+h*x*b,this._y=h*x*v+g*_*b,this._z=h*_*b-g*x*v,this._w=h*_*v-g*x*b;break;case"XZY":this._x=g*_*v-h*x*b,this._y=h*x*v-g*_*b,this._z=h*_*b+g*x*v,this._w=h*_*v+g*x*b;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],o=n[4],c=n[8],u=n[1],p=n[5],m=n[9],h=n[2],_=n[6],v=n[10],g=r+p+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-m)*x,this._y=(c-h)*x,this._z=(u-o)*x}else if(r>p&&r>v){const x=2*Math.sqrt(1+r-p-v);this._w=(_-m)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+h)/x}else if(p>v){const x=2*Math.sqrt(1+p-r-v);this._w=(c-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(m+_)/x}else{const x=2*Math.sqrt(1+v-r-p);this._w=(u-o)/x,this._x=(c+h)/x,this._y=(m+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,o=t._y,c=t._z,u=t._w,p=n._x,m=n._y,h=n._z,_=n._w;return this._x=r*_+u*p+o*h-c*m,this._y=o*_+u*m+c*p-r*h,this._z=c*_+u*h+r*m-o*p,this._w=u*_-r*p-o*m-c*h,this._onChangeCallback(),this}slerp(t,n){let r=t._x,o=t._y,c=t._z,u=t._w,p=this.dot(t);p<0&&(r=-r,o=-o,c=-c,u=-u,p=-p);let m=1-n;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,n=Math.sin(n*h)/_,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,n=0,r=0){it.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(hv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(hv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,r=this.y,o=this.z,c=t.x,u=t.y,p=t.z,m=t.w,h=2*(u*o-p*r),_=2*(p*n-c*o),v=2*(c*r-u*n);return this.x=n+m*h+u*v-p*_,this.y=r+m*_+p*h-c*v,this.z=o+m*v+c*_-u*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,o=t.y,c=t.z,u=n.x,p=n.y,m=n.z;return this.x=o*m-c*p,this.y=c*u-r*m,this.z=r*p-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return n*n+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const o=Math.sin(n)*t;return this.x=o*Math.sin(r),this.y=Math.cos(n)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new it,hv=new to;class de{constructor(t,n,r,o,c,u,p,m,h){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,o,c,u,p,m,h)}set(t,n,r,o,c,u,p,m,h){const _=this.elements;return _[0]=t,_[1]=o,_[2]=p,_[3]=n,_[4]=c,_[5]=m,_[6]=r,_[7]=u,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,c=this.elements,u=r[0],p=r[3],m=r[6],h=r[1],_=r[4],v=r[7],g=r[2],x=r[5],b=r[8],A=o[0],M=o[3],S=o[6],w=o[1],N=o[4],U=o[7],H=o[2],I=o[5],z=o[8];return c[0]=u*A+p*w+m*H,c[3]=u*M+p*N+m*I,c[6]=u*S+p*U+m*z,c[1]=h*A+_*w+v*H,c[4]=h*M+_*N+v*I,c[7]=h*S+_*U+v*z,c[2]=g*A+x*w+b*H,c[5]=g*M+x*N+b*I,c[8]=g*S+x*U+b*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],u=t[4],p=t[5],m=t[6],h=t[7],_=t[8];return n*u*_-n*p*h-r*c*_+r*p*m+o*c*h-o*u*m}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],u=t[4],p=t[5],m=t[6],h=t[7],_=t[8],v=_*u-p*h,g=p*m-_*c,x=h*c-u*m,b=n*v+r*g+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=v*A,t[1]=(o*h-_*r)*A,t[2]=(p*r-o*u)*A,t[3]=g*A,t[4]=(_*n-o*m)*A,t[5]=(o*c-p*n)*A,t[6]=x*A,t[7]=(r*m-h*n)*A,t[8]=(u*n-r*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,o,c,u,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*u+h*p)+u+t,-o*h,o*m,-o*(-h*u+m*p)+p+n,0,0,1),this}scale(t,n){return this.premultiply(dh.makeScale(t,n)),this}rotate(t){return this.premultiply(dh.makeRotation(-t)),this}translate(t,n){return this.premultiply(dh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new de,pv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q1(){const a={enabled:!0,workingColorSpace:js,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===ze&&(o.r=Ea(o.r),o.g=Ea(o.g),o.b=Ea(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===ze&&(o.r=ks(o.r),o.g=ks(o.g),o.b=ks(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===lr?bu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Au("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Au("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[js]:{primaries:t,whitePoint:r,transfer:bu,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),a}const Te=q1();function Ea(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ks(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Cs;class Y1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Cs===void 0&&(Cs=Tu("canvas")),Cs.width=t.width,Cs.height=t.height;const o=Cs.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=Cs}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Tu("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ea(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ea(n[r]/255)*255):n[r]=Ea(n[r]);return{data:n,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let j1=0;class im{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=_l(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,p=o.length;u<p;u++)o[u].isDataTexture?c.push(hh(o[u].image)):c.push(hh(o[u]))}else c=hh(o);r.url=c}return n||(t.images[this.uuid]=r),r}}function hh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Y1.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let Z1=0;const ph=new it;class Pn extends $s{constructor(t=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=Ma,o=Ma,c=Cn,u=Br,p=Ni,m=_i,h=Pn.DEFAULT_ANISOTROPY,_=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=_l(),this.name="",this.source=new im(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const r=t[n];if(r===void 0){ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ie(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Px)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $h:t.x=t.x-Math.floor(t.x);break;case Ma:t.x=t.x<0?0:1;break;case tp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $h:t.y=t.y-Math.floor(t.y);break;case Ma:t.y=t.y<0?0:1;break;case tp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Px;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,n=0,r=0,o=1){an.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,o){return this.x=t,this.y=n,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,o,c;const m=t.elements,h=m[0],_=m[4],v=m[8],g=m[1],x=m[5],b=m[9],A=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+A)<.1&&Math.abs(b+M)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(h+1)/2,U=(x+1)/2,H=(S+1)/2,I=(_+g)/4,z=(v+A)/4,T=(b+M)/4;return N>U&&N>H?N<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(N),o=I/r,c=z/r):U>H?U<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),r=I/o,c=T/o):H<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(H),r=z/c,o=T/c),this.set(r,o,c,n),this}let w=Math.sqrt((M-b)*(M-b)+(v-A)*(v-A)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(M-b)/w,this.y=(v-A)/w,this.z=(g-_)/w,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this.w=Se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this.w=Se(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K1 extends $s{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new an(0,0,t,n),this.scissorTest=!1,this.viewport=new an(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:r.depth},c=new Pn(o),u=r.count;for(let p=0;p<u;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const n={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new im(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends K1{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class Xx extends Pn{constructor(t=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=En,this.minFilter=En,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q1 extends Pn{constructor(t=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=En,this.minFilter=En,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(t,n,r,o,c,u,p,m,h,_,v,g,x,b,A,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,o,c,u,p,m,h,_,v,g,x,b,A,M)}set(t,n,r,o,c,u,p,m,h,_,v,g,x,b,A,M){const S=this.elements;return S[0]=t,S[4]=n,S[8]=r,S[12]=o,S[1]=c,S[5]=u,S[9]=p,S[13]=m,S[2]=h,S[6]=_,S[10]=v,S[14]=g,S[3]=x,S[7]=b,S[11]=A,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,r=t.elements,o=1/ws.setFromMatrixColumn(t,0).length(),c=1/ws.setFromMatrixColumn(t,1).length(),u=1/ws.setFromMatrixColumn(t,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,o=t.y,c=t.z,u=Math.cos(r),p=Math.sin(r),m=Math.cos(o),h=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=u*_,x=u*v,b=p*_,A=p*v;n[0]=m*_,n[4]=-m*v,n[8]=h,n[1]=x+b*h,n[5]=g-A*h,n[9]=-p*m,n[2]=A-g*h,n[6]=b+x*h,n[10]=u*m}else if(t.order==="YXZ"){const g=m*_,x=m*v,b=h*_,A=h*v;n[0]=g+A*p,n[4]=b*p-x,n[8]=u*h,n[1]=u*v,n[5]=u*_,n[9]=-p,n[2]=x*p-b,n[6]=A+g*p,n[10]=u*m}else if(t.order==="ZXY"){const g=m*_,x=m*v,b=h*_,A=h*v;n[0]=g-A*p,n[4]=-u*v,n[8]=b+x*p,n[1]=x+b*p,n[5]=u*_,n[9]=A-g*p,n[2]=-u*h,n[6]=p,n[10]=u*m}else if(t.order==="ZYX"){const g=u*_,x=u*v,b=p*_,A=p*v;n[0]=m*_,n[4]=b*h-x,n[8]=g*h+A,n[1]=m*v,n[5]=A*h+g,n[9]=x*h-b,n[2]=-h,n[6]=p*m,n[10]=u*m}else if(t.order==="YZX"){const g=u*m,x=u*h,b=p*m,A=p*h;n[0]=m*_,n[4]=A-g*v,n[8]=b*v+x,n[1]=v,n[5]=u*_,n[9]=-p*_,n[2]=-h*_,n[6]=x*v+b,n[10]=g-A*v}else if(t.order==="XZY"){const g=u*m,x=u*h,b=p*m,A=p*h;n[0]=m*_,n[4]=-v,n[8]=h*_,n[1]=g*v+A,n[5]=u*_,n[9]=x*v-b,n[2]=b*v-x,n[6]=p*_,n[10]=A*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(J1,t,$1)}lookAt(t,n,r){const o=this.elements;return ii.subVectors(t,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),nr.crossVectors(r,ii),nr.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),nr.crossVectors(r,ii)),nr.normalize(),zc.crossVectors(ii,nr),o[0]=nr.x,o[4]=zc.x,o[8]=ii.x,o[1]=nr.y,o[5]=zc.y,o[9]=ii.y,o[2]=nr.z,o[6]=zc.z,o[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,c=this.elements,u=r[0],p=r[4],m=r[8],h=r[12],_=r[1],v=r[5],g=r[9],x=r[13],b=r[2],A=r[6],M=r[10],S=r[14],w=r[3],N=r[7],U=r[11],H=r[15],I=o[0],z=o[4],T=o[8],D=o[12],ut=o[1],B=o[5],V=o[9],K=o[13],at=o[2],Q=o[6],L=o[10],F=o[14],st=o[3],ft=o[7],yt=o[11],P=o[15];return c[0]=u*I+p*ut+m*at+h*st,c[4]=u*z+p*B+m*Q+h*ft,c[8]=u*T+p*V+m*L+h*yt,c[12]=u*D+p*K+m*F+h*P,c[1]=_*I+v*ut+g*at+x*st,c[5]=_*z+v*B+g*Q+x*ft,c[9]=_*T+v*V+g*L+x*yt,c[13]=_*D+v*K+g*F+x*P,c[2]=b*I+A*ut+M*at+S*st,c[6]=b*z+A*B+M*Q+S*ft,c[10]=b*T+A*V+M*L+S*yt,c[14]=b*D+A*K+M*F+S*P,c[3]=w*I+N*ut+U*at+H*st,c[7]=w*z+N*B+U*Q+H*ft,c[11]=w*T+N*V+U*L+H*yt,c[15]=w*D+N*K+U*F+H*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],o=t[8],c=t[12],u=t[1],p=t[5],m=t[9],h=t[13],_=t[2],v=t[6],g=t[10],x=t[14],b=t[3],A=t[7],M=t[11],S=t[15],w=m*x-h*g,N=p*x-h*v,U=p*g-m*v,H=u*x-h*_,I=u*g-m*_,z=u*v-p*_;return n*(A*w-M*N+S*U)-r*(b*w-M*H+S*I)+o*(b*N-A*H+S*z)-c*(b*U-A*I+M*z)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],c=t[3],u=t[4],p=t[5],m=t[6],h=t[7],_=t[8],v=t[9],g=t[10],x=t[11],b=t[12],A=t[13],M=t[14],S=t[15],w=n*p-r*u,N=n*m-o*u,U=n*h-c*u,H=r*m-o*p,I=r*h-c*p,z=o*h-c*m,T=_*A-v*b,D=_*M-g*b,ut=_*S-x*b,B=v*M-g*A,V=v*S-x*A,K=g*S-x*M,at=w*K-N*V+U*B+H*ut-I*D+z*T;if(at===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/at;return t[0]=(p*K-m*V+h*B)*Q,t[1]=(o*V-r*K-c*B)*Q,t[2]=(A*z-M*I+S*H)*Q,t[3]=(g*I-v*z-x*H)*Q,t[4]=(m*ut-u*K-h*D)*Q,t[5]=(n*K-o*ut+c*D)*Q,t[6]=(M*U-b*z-S*N)*Q,t[7]=(_*z-g*U+x*N)*Q,t[8]=(u*V-p*ut+h*T)*Q,t[9]=(r*ut-n*V-c*T)*Q,t[10]=(b*I-A*U+S*w)*Q,t[11]=(v*U-_*I-x*w)*Q,t[12]=(p*D-u*B-m*T)*Q,t[13]=(n*B-r*D+o*T)*Q,t[14]=(A*N-b*H-M*w)*Q,t[15]=(_*H-v*N+g*w)*Q,this}scale(t){const n=this.elements,r=t.x,o=t.y,c=t.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=t.x,p=t.y,m=t.z,h=c*u,_=c*p;return this.set(h*u+r,h*p-o*m,h*m+o*p,0,h*p+o*m,_*p+r,_*m-o*u,0,h*m-o*p,_*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,o,c,u){return this.set(1,r,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,r){const o=this.elements,c=n._x,u=n._y,p=n._z,m=n._w,h=c+c,_=u+u,v=p+p,g=c*h,x=c*_,b=c*v,A=u*_,M=u*v,S=p*v,w=m*h,N=m*_,U=m*v,H=r.x,I=r.y,z=r.z;return o[0]=(1-(A+S))*H,o[1]=(x+U)*H,o[2]=(b-N)*H,o[3]=0,o[4]=(x-U)*I,o[5]=(1-(g+S))*I,o[6]=(M+w)*I,o[7]=0,o[8]=(b+N)*z,o[9]=(M-w)*z,o[10]=(1-(g+A))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,r){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinant();if(c===0)return r.set(1,1,1),n.identity(),this;let u=ws.set(o[0],o[1],o[2]).length();const p=ws.set(o[4],o[5],o[6]).length(),m=ws.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Ai.copy(this);const h=1/u,_=1/p,v=1/m;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,n.setFromRotationMatrix(Ai),r.x=u,r.y=p,r.z=m,this}makePerspective(t,n,r,o,c,u,p=ki,m=!1){const h=this.elements,_=2*c/(n-t),v=2*c/(r-o),g=(n+t)/(n-t),x=(r+o)/(r-o);let b,A;if(m)b=c/(u-c),A=u*c/(u-c);else if(p===ki)b=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(p===Eu)b=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,r,o,c,u,p=ki,m=!1){const h=this.elements,_=2/(n-t),v=2/(r-o),g=-(n+t)/(n-t),x=-(r+o)/(r-o);let b,A;if(m)b=1/(u-c),A=u/(u-c);else if(p===ki)b=-2/(u-c),A=-(u+c)/(u-c);else if(p===Eu)b=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=b,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const ws=new it,Ai=new tn,J1=new it(0,0,0),$1=new it(1,1,1),nr=new it,zc=new it,ii=new it,gv=new tn,_v=new to;class Ra{constructor(t=0,n=0,r=0,o=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,o=this._order){return this._x=t,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const o=t.elements,c=o[0],u=o[4],p=o[8],m=o[1],h=o[5],_=o[9],v=o[2],g=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,x),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,x));break;case"XZY":this._z=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return gv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gv,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return _v.setFromEuler(this),this.setFromQuaternion(_v,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class Wx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tb=0;const vv=new it,Ds=new to,ma=new tn,Bc=new it,Ko=new it,eb=new it,nb=new to,xv=new it(1,0,0),yv=new it(0,1,0),Sv=new it(0,0,1),Mv={type:"added"},ib={type:"removed"},Us={type:"childadded",child:null},mh={type:"childremoved",child:null};class Fn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=_l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new it,n=new Ra,r=new to,o=new it(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new de}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ds.setFromAxisAngle(t,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,n){return Ds.setFromAxisAngle(t,n),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(xv,t)}rotateY(t){return this.rotateOnAxis(yv,t)}rotateZ(t){return this.rotateOnAxis(Sv,t)}translateOnAxis(t,n){return vv.copy(t).applyQuaternion(this.quaternion),this.position.add(vv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(xv,t)}translateY(t){return this.translateOnAxis(yv,t)}translateZ(t){return this.translateOnAxis(Sv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Bc.copy(t):Bc.set(t,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Ko,Bc,this.up):ma.lookAt(Bc,Ko,this.up),this.quaternion.setFromRotationMatrix(ma),o&&(ma.extractRotation(o.matrixWorld),Ds.setFromRotationMatrix(ma),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mv),Us.child=t,this.dispatchEvent(Us),Us.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ib),mh.child=t,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mv),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,eb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,nb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,r=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const v=m[h];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));o.material=p}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];o.animations.push(c(t.animations,m))}}if(n){const p=u(t.geometries),m=u(t.materials),h=u(t.textures),_=u(t.images),v=u(t.shapes),g=u(t.skeletons),x=u(t.animations),b=u(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new it(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ic extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let o=null,c=null,u=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){u=!0;for(const A of t.hand.values()){const M=n.getJointPose(A,r),S=this._getHandJoint(h,A);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,b=.005;h.inputState.pinching&&g>x+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=x-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(o=n.getPose(t.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return p!==null&&(p.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new Ic;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}const qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Hc={h:0,s:0,l:0};function _h(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}let Me=class{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,n),this}setRGB(t,n,r,o=Te.workingColorSpace){return this.r=t,this.g=n,this.b=r,Te.colorSpaceToWorking(this,o),this}setHSL(t,n,r,o=Te.workingColorSpace){if(t=W1(t,1),n=Se(n,0,1),r=Se(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=_h(u,c,t+1/3),this.g=_h(u,c,t),this.b=_h(u,c,t-1/3)}return Te.colorSpaceToWorking(this,o),this}setStyle(t,n=mi){function r(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],p=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ie("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=mi){const r=qx[t.toLowerCase()];return r!==void 0?this.setHex(r,n):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return Te.workingToColorSpace(Rn.copy(this),t),Math.round(Se(Rn.r*255,0,255))*65536+Math.round(Se(Rn.g*255,0,255))*256+Math.round(Se(Rn.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Te.workingColorSpace){Te.workingToColorSpace(Rn.copy(this),n);const r=Rn.r,o=Rn.g,c=Rn.b,u=Math.max(r,o,c),p=Math.min(r,o,c);let m,h;const _=(p+u)/2;if(p===u)m=0,h=0;else{const v=u-p;switch(h=_<=.5?v/(u+p):v/(2-u-p),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return t.h=m,t.s=h,t.l=_,t}getRGB(t,n=Te.workingColorSpace){return Te.workingToColorSpace(Rn.copy(this),n),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=mi){Te.workingToColorSpace(Rn.copy(this),t);const n=Rn.r,r=Rn.g,o=Rn.b;return t!==mi?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,n,r){return this.getHSL(ir),this.setHSL(ir.h+t,ir.s+n,ir.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(ir),t.getHSL(Hc);const r=uh(ir.h,Hc.h,n),o=uh(ir.s,Hc.s,n),c=uh(ir.l,Hc.l,n);return this.setHSL(r,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Rn=new Me;Me.NAMES=qx;class rb extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ri=new it,ga=new it,vh=new it,_a=new it,Ns=new it,Ls=new it,bv=new it,xh=new it,yh=new it,Sh=new it,Mh=new an,bh=new an,Eh=new an;class Di{constructor(t=new it,n=new it,r=new it){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,o){o.subVectors(r,n),Ri.subVectors(t,n),o.cross(Ri);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,r,o,c){Ri.subVectors(o,n),ga.subVectors(r,n),vh.subVectors(t,n);const u=Ri.dot(Ri),p=Ri.dot(ga),m=Ri.dot(vh),h=ga.dot(ga),_=ga.dot(vh),v=u*h-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,x=(h*m-p*_)*g,b=(u*_-p*m)*g;return c.set(1-x-b,b,x)}static containsPoint(t,n,r,o){return this.getBarycoord(t,n,r,o,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,n,r,o,c,u,p,m){return this.getBarycoord(t,n,r,o,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(u,_a.y),m.addScaledVector(p,_a.z),m)}static getInterpolatedAttribute(t,n,r,o,c,u){return Mh.setScalar(0),bh.setScalar(0),Eh.setScalar(0),Mh.fromBufferAttribute(t,n),bh.fromBufferAttribute(t,r),Eh.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Mh,c.x),u.addScaledVector(bh,c.y),u.addScaledVector(Eh,c.z),u}static isFrontFacing(t,n,r,o){return Ri.subVectors(r,n),ga.subVectors(t,n),Ri.cross(ga).dot(o)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,o){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,r,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ri.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Di.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,o,c){return Di.getInterpolation(t,this.a,this.b,this.c,n,r,o,c)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,o=this.b,c=this.c;let u,p;Ns.subVectors(o,r),Ls.subVectors(c,r),xh.subVectors(t,r);const m=Ns.dot(xh),h=Ls.dot(xh);if(m<=0&&h<=0)return n.copy(r);yh.subVectors(t,o);const _=Ns.dot(yh),v=Ls.dot(yh);if(_>=0&&v<=_)return n.copy(o);const g=m*v-_*h;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(r).addScaledVector(Ns,u);Sh.subVectors(t,c);const x=Ns.dot(Sh),b=Ls.dot(Sh);if(b>=0&&x<=b)return n.copy(c);const A=x*h-m*b;if(A<=0&&h>=0&&b<=0)return p=h/(h-b),n.copy(r).addScaledVector(Ls,p);const M=_*b-x*v;if(M<=0&&v-_>=0&&x-b>=0)return bv.subVectors(c,o),p=(v-_)/(v-_+(x-b)),n.copy(o).addScaledVector(bv,p);const S=1/(M+A+g);return u=A*S,p=g*S,n.copy(r).addScaledVector(Ns,u).addScaledVector(Ls,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class vl{constructor(t=new it(1/0,1/0,1/0),n=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=Ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,p=c.count;u<p;u++)t.isMesh===!0?t.getVertexPosition(u,Ci):Ci.fromBufferAttribute(c,u),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Gc.copy(r.boundingBox)),Gc.applyMatrix4(t.matrixWorld),this.union(Gc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Vc.subVectors(this.max,Qo),Os.subVectors(t.a,Qo),Ps.subVectors(t.b,Qo),Fs.subVectors(t.c,Qo),ar.subVectors(Ps,Os),rr.subVectors(Fs,Ps),wr.subVectors(Os,Fs);let n=[0,-ar.z,ar.y,0,-rr.z,rr.y,0,-wr.z,wr.y,ar.z,0,-ar.x,rr.z,0,-rr.x,wr.z,0,-wr.x,-ar.y,ar.x,0,-rr.y,rr.x,0,-wr.y,wr.x,0];return!Th(n,Os,Ps,Fs,Vc)||(n=[1,0,0,0,1,0,0,0,1],!Th(n,Os,Ps,Fs,Vc))?!1:(kc.crossVectors(ar,rr),n=[kc.x,kc.y,kc.z],Th(n,Os,Ps,Fs,Vc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const va=[new it,new it,new it,new it,new it,new it,new it,new it],Ci=new it,Gc=new vl,Os=new it,Ps=new it,Fs=new it,ar=new it,rr=new it,wr=new it,Qo=new it,Vc=new it,kc=new it,Dr=new it;function Th(a,t,n,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){Dr.fromArray(a,c);const p=o.x*Math.abs(Dr.x)+o.y*Math.abs(Dr.y)+o.z*Math.abs(Dr.z),m=t.dot(Dr),h=n.dot(Dr),_=r.dot(Dr);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const dn=new it,Xc=new Ve;let sb=0;class vi{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=cv,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Xc.fromBufferAttribute(this,n),Xc.applyMatrix3(t),this.setXY(n,Xc.x,Xc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Zo(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Zo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Zo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Zo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Zo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),r=Xn(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,o){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),r=Xn(r,this.array),o=Xn(o,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,n,r,o,c){return t*=this.itemSize,this.normalized&&(n=Xn(n,this.array),r=Xn(r,this.array),o=Xn(o,this.array),c=Xn(c,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cv&&(t.usage=this.usage),t}}class Yx extends vi{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class jx extends vi{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class zn extends vi{constructor(t,n,r){super(new Float32Array(t),n,r)}}const ob=new vl,Jo=new it,Ah=new it;class xl{constructor(t=new it,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):ob.setFromPoints(t).getCenter(r);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const n=Jo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Jo,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add(Ah)),this.expandByPoint(Jo.copy(t.center).sub(Ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let lb=0;const pi=new tn,Rh=new Fn,zs=new it,ai=new vl,$o=new vl,xn=new it;class Yn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=_l(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(G1(t)?jx:Yx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new de().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,n,r){return pi.makeTranslation(t,n,r),this.applyMatrix4(pi),this}scale(t,n,r){return pi.makeScale(t,n,r),this.applyMatrix4(pi),this}lookAt(t){return Rh.lookAt(t),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new zn(r,3))}else{const r=Math.min(t.length,n.count);for(let o=0;o<r;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const p=n[c];$o.setFromBufferAttribute(p),this.morphTargetsRelative?(xn.addVectors(ai.min,$o.min),ai.expandByPoint(xn),xn.addVectors(ai.max,$o.max),ai.expandByPoint(xn)):(ai.expandByPoint($o.min),ai.expandByPoint($o.max))}ai.getCenter(r);let o=0;for(let c=0,u=t.count;c<u;c++)xn.fromBufferAttribute(t,c),o=Math.max(o,r.distanceToSquared(xn));if(n)for(let c=0,u=n.length;c<u;c++){const p=n[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)xn.fromBufferAttribute(p,h),m&&(zs.fromBufferAttribute(t,h),xn.add(zs)),o=Math.max(o,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new it,m[T]=new it;const h=new it,_=new it,v=new it,g=new Ve,x=new Ve,b=new Ve,A=new it,M=new it;function S(T,D,ut){h.fromBufferAttribute(r,T),_.fromBufferAttribute(r,D),v.fromBufferAttribute(r,ut),g.fromBufferAttribute(c,T),x.fromBufferAttribute(c,D),b.fromBufferAttribute(c,ut),_.sub(h),v.sub(h),x.sub(g),b.sub(g);const B=1/(x.x*b.y-b.x*x.y);isFinite(B)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(v,-x.y).multiplyScalar(B),M.copy(v).multiplyScalar(x.x).addScaledVector(_,-b.x).multiplyScalar(B),p[T].add(A),p[D].add(A),p[ut].add(A),m[T].add(M),m[D].add(M),m[ut].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,D=w.length;T<D;++T){const ut=w[T],B=ut.start,V=ut.count;for(let K=B,at=B+V;K<at;K+=3)S(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const N=new it,U=new it,H=new it,I=new it;function z(T){H.fromBufferAttribute(o,T),I.copy(H);const D=p[T];N.copy(D),N.sub(H.multiplyScalar(H.dot(D))).normalize(),U.crossVectors(I,D);const B=U.dot(m[T])<0?-1:1;u.setXYZW(T,N.x,N.y,N.z,B)}for(let T=0,D=w.length;T<D;++T){const ut=w[T],B=ut.start,V=ut.count;for(let K=B,at=B+V;K<at;K+=3)z(t.getX(K+0)),z(t.getX(K+1)),z(t.getX(K+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const o=new it,c=new it,u=new it,p=new it,m=new it,h=new it,_=new it,v=new it;if(t)for(let g=0,x=t.count;g<x;g+=3){const b=t.getX(g+0),A=t.getX(g+1),M=t.getX(g+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),h.fromBufferAttribute(r,M),p.add(_),m.add(_),h.add(_),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,x=n.count;g<x;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(p,m){const h=p.array,_=p.itemSize,v=p.normalized,g=new h.constructor(m.length*_);let x=0,b=0;for(let A=0,M=m.length;A<M;A++){p.isInterleavedBufferAttribute?x=m[A]*p.data.stride+p.offset:x=m[A]*_;for(let S=0;S<_;S++)g[b++]=h[x++]}return new vi(g,_,v)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yn,r=this.index.array,o=this.attributes;for(const p in o){const m=o[p],h=t(m,r);n.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,v=h.length;_<v;_++){const g=h[_],x=t(g,r);m.push(x)}n.morphAttributes[p]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let p=0,m=u.length;p<m;p++){const h=u[p];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];t.data.attributes[m]=h.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let v=0,g=h.length;v<g;v++){const x=h[v];_.push(x.toJSON(t.data))}_.length>0&&(o[m]=_,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const h in o){const _=o[h];this.setAttribute(h,_.clone(n))}const c=t.morphAttributes;for(const h in c){const _=[],v=c[h];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(n));this.morphAttributes[h]=_}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let h=0,_=u.length;h<_;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cb=0;class eo extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=_l(),this.name="",this.type="Material",this.blending=Vs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=Wh,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){ie(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==ur&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Wh&&(r.blendDst=this.blendDst),this.blendEquation!==Fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const p in c){const m=c[p];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const xa=new it,Ch=new it,Wc=new it,sr=new it,wh=new it,qc=new it,Dh=new it;class am{constructor(t=new it,n=new it(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=xa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(xa.copy(this.origin).addScaledVector(this.direction,n),xa.distanceToSquared(t))}distanceSqToSegment(t,n,r,o){Ch.copy(t).add(n).multiplyScalar(.5),Wc.copy(n).sub(t).normalize(),sr.copy(this.origin).sub(Ch);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Wc),p=sr.dot(this.direction),m=-sr.dot(Wc),h=sr.lengthSq(),_=Math.abs(1-u*u);let v,g,x,b;if(_>0)if(v=u*m-p,g=u*p-m,b=c*_,v>=0)if(g>=-b)if(g<=b){const A=1/_;v*=A,g*=A,x=v*(v+u*g+2*p)+g*(u*v+g+2*m)+h}else g=c,v=Math.max(0,-(u*g+p)),x=-v*v+g*(g+2*m)+h;else g=-c,v=Math.max(0,-(u*g+p)),x=-v*v+g*(g+2*m)+h;else g<=-b?(v=Math.max(0,-(-u*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),x=-v*v+g*(g+2*m)+h):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),x=g*(g+2*m)+h):(v=Math.max(0,-(u*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),x=-v*v+g*(g+2*m)+h);else g=u>0?-c:c,v=Math.max(0,-(u*g+p)),x=-v*v+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ch).addScaledVector(Wc,g),x}intersectSphere(t,n){xa.subVectors(t.center,this.origin);const r=xa.dot(this.direction),o=xa.dot(xa)-r*r,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),p=r-u,m=r+u;return m<0?null:p<0?this.at(m,n):this.at(p,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,o,c,u,p,m;const h=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(t.min.x-g.x)*h,o=(t.max.x-g.x)*h):(r=(t.max.x-g.x)*h,o=(t.min.x-g.x)*h),_>=0?(c=(t.min.y-g.y)*_,u=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,u=(t.min.y-g.y)*_),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(p=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(p=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),r>m||p>o)||((p>r||r!==r)&&(r=p),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(t){return this.intersectBox(t,xa)!==null}intersectTriangle(t,n,r,o,c){wh.subVectors(n,t),qc.subVectors(r,t),Dh.crossVectors(wh,qc);let u=this.direction.dot(Dh),p;if(u>0){if(o)return null;p=1}else if(u<0)p=-1,u=-u;else return null;sr.subVectors(this.origin,t);const m=p*this.direction.dot(qc.crossVectors(sr,qc));if(m<0)return null;const h=p*this.direction.dot(wh.cross(sr));if(h<0||m+h>u)return null;const _=-p*sr.dot(Dh);return _<0?null:this.at(_/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zx extends eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=Rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ev=new tn,Ur=new am,Yc=new xl,Tv=new it,jc=new it,Zc=new it,Kc=new it,Uh=new it,Qc=new it,Av=new it,Jc=new it;class Ca extends Fn{constructor(t=new Yn,n=new Zx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,t);const p=this.morphTargetInfluences;if(c&&p){Qc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],v=c[m];_!==0&&(Uh.fromBufferAttribute(v,t),u?Qc.addScaledVector(Uh,_):Qc.addScaledVector(Uh.sub(n),_))}n.add(Qc)}return n}raycast(t,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Yc.copy(r.boundingSphere),Yc.applyMatrix4(c),Ur.copy(t.ray).recast(t.near),!(Yc.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Yc,Tv)===null||Ur.origin.distanceToSquared(Tv)>(t.far-t.near)**2))&&(Ev.copy(c).invert(),Ur.copy(t.ray).applyMatrix4(Ev),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Ur)))}_computeIntersections(t,n,r){let o;const c=this.geometry,u=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,x=c.drawRange;if(p!==null)if(Array.isArray(u))for(let b=0,A=g.length;b<A;b++){const M=g[b],S=u[M.materialIndex],w=Math.max(M.start,x.start),N=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let U=w,H=N;U<H;U+=3){const I=p.getX(U),z=p.getX(U+1),T=p.getX(U+2);o=$c(this,S,t,r,h,_,v,I,z,T),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let M=b,S=A;M<S;M+=3){const w=p.getX(M),N=p.getX(M+1),U=p.getX(M+2);o=$c(this,u,t,r,h,_,v,w,N,U),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,A=g.length;b<A;b++){const M=g[b],S=u[M.materialIndex],w=Math.max(M.start,x.start),N=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let U=w,H=N;U<H;U+=3){const I=U,z=U+1,T=U+2;o=$c(this,S,t,r,h,_,v,I,z,T),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),A=Math.min(m.count,x.start+x.count);for(let M=b,S=A;M<S;M+=3){const w=M,N=M+1,U=M+2;o=$c(this,u,t,r,h,_,v,w,N,U),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function ub(a,t,n,r,o,c,u,p){let m;if(t.side===qn?m=r.intersectTriangle(u,c,o,!0,p):m=r.intersectTriangle(o,c,u,t.side===ur,p),m===null)return null;Jc.copy(p),Jc.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo(Jc);return h<n.near||h>n.far?null:{distance:h,point:Jc.clone(),object:a}}function $c(a,t,n,r,o,c,u,p,m,h){a.getVertexPosition(p,jc),a.getVertexPosition(m,Zc),a.getVertexPosition(h,Kc);const _=ub(a,t,n,r,jc,Zc,Kc,Av);if(_){const v=new it;Di.getBarycoord(Av,jc,Zc,Kc,v),o&&(_.uv=Di.getInterpolatedAttribute(o,p,m,h,v,new Ve)),c&&(_.uv1=Di.getInterpolatedAttribute(c,p,m,h,v,new Ve)),u&&(_.normal=Di.getInterpolatedAttribute(u,p,m,h,v,new it),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new it,materialIndex:0};Di.getNormal(jc,Zc,Kc,g.normal),_.face=g,_.barycoord=v}return _}class fb extends Pn{constructor(t=null,n=1,r=1,o,c,u,p,m,h=En,_=En,v,g){super(null,u,p,m,h,_,o,c,v,g),this.isDataTexture=!0,this.image={data:t,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nh=new it,db=new it,hb=new de;class Pr{constructor(t=new it(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,o){return this.normal.set(t,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const o=Nh.subVectors(r,n).cross(db.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(Nh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||hb.getNormalMatrix(t),o=this.coplanarPoint(Nh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new xl,pb=new Ve(.5,.5),tu=new it;class Kx{constructor(t=new Pr,n=new Pr,r=new Pr,o=new Pr,c=new Pr,u=new Pr){this.planes=[t,n,r,o,c,u]}set(t,n,r,o,c,u){const p=this.planes;return p[0].copy(t),p[1].copy(n),p[2].copy(r),p[3].copy(o),p[4].copy(c),p[5].copy(u),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=ki,r=!1){const o=this.planes,c=t.elements,u=c[0],p=c[1],m=c[2],h=c[3],_=c[4],v=c[5],g=c[6],x=c[7],b=c[8],A=c[9],M=c[10],S=c[11],w=c[12],N=c[13],U=c[14],H=c[15];if(o[0].setComponents(h-u,x-_,S-b,H-w).normalize(),o[1].setComponents(h+u,x+_,S+b,H+w).normalize(),o[2].setComponents(h+p,x+v,S+A,H+N).normalize(),o[3].setComponents(h-p,x-v,S-A,H-N).normalize(),r)o[4].setComponents(m,g,M,U).normalize(),o[5].setComponents(h-m,x-g,S-M,H-U).normalize();else if(o[4].setComponents(h-m,x-g,S-M,H-U).normalize(),n===ki)o[5].setComponents(h+m,x+g,S+M,H+U).normalize();else if(n===Eu)o[5].setComponents(m,g,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(t){Nr.center.set(0,0,0);const n=pb.distanceTo(t.center);return Nr.radius=.7071067811865476+n,Nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(t){const n=this.planes,r=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(tu.x=o.normal.x>0?t.max.x:t.min.x,tu.y=o.normal.y>0?t.max.y:t.min.y,tu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(tu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rm extends eo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ru=new it,Cu=new it,Rv=new tn,tl=new am,eu=new xl,Lh=new it,Cv=new it;class mb extends Fn{constructor(t=new Yn,n=new rm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Ru.fromBufferAttribute(n,o-1),Cu.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Ru.distanceTo(Cu);t.setAttribute("lineDistance",new zn(r,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const r=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),eu.copy(r.boundingSphere),eu.applyMatrix4(o),eu.radius+=c,t.ray.intersectsSphere(eu)===!1)return;Rv.copy(o).invert(),tl.copy(t.ray).applyMatrix4(Rv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const x=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let A=x,M=b-1;A<M;A+=h){const S=_.getX(A),w=_.getX(A+1),N=nu(this,t,tl,m,S,w,A);N&&n.push(N)}if(this.isLineLoop){const A=_.getX(b-1),M=_.getX(x),S=nu(this,t,tl,m,A,M,b-1);S&&n.push(S)}}else{const x=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let A=x,M=b-1;A<M;A+=h){const S=nu(this,t,tl,m,A,A+1,A);S&&n.push(S)}if(this.isLineLoop){const A=nu(this,t,tl,m,b-1,x,b-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function nu(a,t,n,r,o,c,u){const p=a.geometry.attributes.position;if(Ru.fromBufferAttribute(p,o),Cu.fromBufferAttribute(p,c),n.distanceSqToSegment(Ru,Cu,Lh,Cv)>r)return;Lh.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(Lh);if(!(h<t.near||h>t.far))return{distance:h,point:Cv.clone().applyMatrix4(a.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:a}}const wv=new it,Dv=new it;class Qx extends mb{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,r=[];for(let o=0,c=n.count;o<c;o+=2)wv.fromBufferAttribute(n,o),Dv.fromBufferAttribute(n,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+wv.distanceTo(Dv);t.setAttribute("lineDistance",new zn(r,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jx extends eo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Uv=new tn,Op=new am,iu=new xl,au=new it;class gb extends Fn{constructor(t=new Yn,n=new Jx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const r=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),iu.copy(r.boundingSphere),iu.applyMatrix4(o),iu.radius+=c,t.ray.intersectsSphere(iu)===!1)return;Uv.copy(o).invert(),Op.copy(t.ray).applyMatrix4(Uv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=r.index,v=r.attributes.position;if(h!==null){const g=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let b=g,A=x;b<A;b++){const M=h.getX(b);au.fromBufferAttribute(v,M),Nv(au,M,m,o,t,n,this)}}else{const g=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let b=g,A=x;b<A;b++)au.fromBufferAttribute(v,b),Nv(au,b,m,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const p=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Nv(a,t,n,r,o,c,u){const p=Op.distanceSqToPoint(a);if(p<n){const m=new it;Op.closestPointToPoint(a,m),m.applyMatrix4(r);const h=o.ray.origin.distanceTo(m);if(h<o.near||h>o.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class $x extends Pn{constructor(t=[],n=Vr,r,o,c,u,p,m,h,_){super(t,n,r,o,c,u,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hl extends Pn{constructor(t,n,r=Yi,o,c,u,p=En,m=En,h,_=Aa,v=1){if(_!==Aa&&_!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:v};super(g,o,c,u,p,m,_,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new im(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _b extends hl{constructor(t,n=Yi,r=Vr,o,c,u=En,p=En,m,h=Aa){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,n,r,o,c,u,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ty extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class yl extends Yn{constructor(t=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const p=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],_=[],v=[];let g=0,x=0;b("z","y","x",-1,-1,r,n,t,u,c,0),b("z","y","x",1,-1,r,n,-t,u,c,1),b("x","z","y",1,1,t,r,n,o,u,2),b("x","z","y",1,-1,t,r,-n,o,u,3),b("x","y","z",1,-1,t,n,r,o,c,4),b("x","y","z",-1,-1,t,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new zn(h,3)),this.setAttribute("normal",new zn(_,3)),this.setAttribute("uv",new zn(v,2));function b(A,M,S,w,N,U,H,I,z,T,D){const ut=U/z,B=H/T,V=U/2,K=H/2,at=I/2,Q=z+1,L=T+1;let F=0,st=0;const ft=new it;for(let yt=0;yt<L;yt++){const P=yt*B-K;for(let j=0;j<Q;j++){const _t=j*ut-V;ft[A]=_t*w,ft[M]=P*N,ft[S]=at,h.push(ft.x,ft.y,ft.z),ft[A]=0,ft[M]=0,ft[S]=I>0?1:-1,_.push(ft.x,ft.y,ft.z),v.push(j/z),v.push(1-yt/T),F+=1}}for(let yt=0;yt<T;yt++)for(let P=0;P<z;P++){const j=g+P+Q*yt,_t=g+P+Q*(yt+1),Rt=g+(P+1)+Q*(yt+1),zt=g+(P+1)+Q*yt;m.push(j,_t,zt),m.push(_t,Rt,zt),st+=6}p.addGroup(x,st,D),x+=st,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Vu extends Yn{constructor(t=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:o};const c=t/2,u=n/2,p=Math.floor(r),m=Math.floor(o),h=p+1,_=m+1,v=t/p,g=n/m,x=[],b=[],A=[],M=[];for(let S=0;S<_;S++){const w=S*g-u;for(let N=0;N<h;N++){const U=N*v-c;b.push(U,-w,0),A.push(0,0,1),M.push(N/p),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<p;w++){const N=w+h*S,U=w+h*(S+1),H=w+1+h*(S+1),I=w+1+h*S;x.push(N,U,I),x.push(U,H,I)}this.setIndex(x),this.setAttribute("position",new zn(b,3)),this.setAttribute("normal",new zn(A,3)),this.setAttribute("uv",new zn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vu(t.width,t.height,t.widthSegments,t.heightSegments)}}function Zs(a){const t={};for(const n in a){t[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=o.clone():Array.isArray(o)?t[n][r]=o.slice():t[n][r]=o}}return t}function On(a){const t={};for(let n=0;n<a.length;n++){const r=Zs(a[n]);for(const o in r)t[o]=r[o]}return t}function vb(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function ey(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const xb={clone:Zs,merge:On};var yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yb,this.fragmentShader=Sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=vb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Mb extends ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bb extends eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Eb extends eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ru=new it,su=new to,Ii=new it;class ny extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ru,su,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,su,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(ru,su,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,su,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const or=new it,Lv=new Ve,Ov=new Ve;class gi extends ny{constructor(t=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Lp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ch*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(ch*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-t/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(or.x,or.y).multiplyScalar(-t/or.z)}getViewSize(t,n){return this.getViewBounds(t,Lv,Ov),n.subVectors(Ov,Lv)}setViewOffset(t,n,r,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ch*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*r/h,o*=u.width/m,r*=u.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class iy extends ny{constructor(t=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-t,u=r+t,p=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Bs=-90,Is=1;class Tb extends Fn{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gi(Bs,Is,t,n);o.layers=this.layers,this.add(o);const c=new gi(Bs,Is,t,n);c.layers=this.layers,this.add(c);const u=new gi(Bs,Is,t,n);u.layers=this.layers,this.add(u);const p=new gi(Bs,Is,t,n);p.layers=this.layers,this.add(p);const m=new gi(Bs,Is,t,n);m.layers=this.layers,this.add(m);const h=new gi(Bs,Is,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,p,m]=n;for(const h of n)this.remove(h);if(t===ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Eu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,p,m,h,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(r,0,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(r,1,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(r,2,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(r,3,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(r,4,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,o),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(v,g,x),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Ab extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Rb extends Qx{constructor(t=10,n=10,r=4473924,o=8947848){r=new Me(r),o=new Me(o);const c=n/2,u=t/n,p=t/2,m=[],h=[];for(let g=0,x=0,b=-p;g<=n;g++,b+=u){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const A=g===c?r:o;A.toArray(h,x),x+=3,A.toArray(h,x),x+=3,A.toArray(h,x),x+=3,A.toArray(h,x),x+=3}const _=new Yn;_.setAttribute("position",new zn(m,3)),_.setAttribute("color",new zn(h,3));const v=new rm({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Pv(a,t,n,r){const o=Cb(r);switch(n){case Hx:return a*t;case Vx:return a*t/o.components*o.byteLength;case Jp:return a*t/o.components*o.byteLength;case Ys:return a*t*2/o.components*o.byteLength;case $p:return a*t*2/o.components*o.byteLength;case Gx:return a*t*3/o.components*o.byteLength;case Ni:return a*t*4/o.components*o.byteLength;case tm:return a*t*4/o.components*o.byteLength;case pu:case mu:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case gu:case _u:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case np:case ap:return Math.max(a,16)*Math.max(t,8)/4;case ep:case ip:return Math.max(a,8)*Math.max(t,8)/2;case rp:case sp:case lp:case cp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case op:case up:case fp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case dp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case hp:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case pp:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case mp:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case gp:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case _p:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case vp:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case xp:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case yp:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case Sp:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case Mp:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case bp:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case Ep:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case Tp:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case Ap:case Rp:case Cp:return Math.ceil(a/4)*Math.ceil(t/4)*16;case wp:case Dp:return Math.ceil(a/4)*Math.ceil(t/4)*8;case Up:case Np:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Cb(a){switch(a){case _i:case Fx:return{byteLength:1,components:1};case fl:case zx:case Ta:return{byteLength:2,components:1};case Kp:case Qp:return{byteLength:2,components:4};case Yi:case Zp:case Vi:return{byteLength:4,components:1};case Bx:case Ix:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jp}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jp);function ay(){let a=null,t=!1,n=null,r=null;function o(c,u){n(c,u),r=a.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(r=a.requestAnimationFrame(o),t=!0)},stop:function(){a.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function wb(a){const t=new WeakMap;function n(p,m){const h=p.array,_=p.usage,v=h.byteLength,g=a.createBuffer();a.bindBuffer(m,g),a.bufferData(m,h,_),p.onUploadCallback();let x;if(h instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=a.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=a.SHORT;else if(h instanceof Uint32Array)x=a.UNSIGNED_INT;else if(h instanceof Int32Array)x=a.INT;else if(h instanceof Int8Array)x=a.BYTE;else if(h instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,m,h){const _=m.array,v=m.updateRanges;if(a.bindBuffer(h,p),v.length===0)a.bufferSubData(h,0,_);else{v.sort((x,b)=>x.start-b.start);let g=0;for(let x=1;x<v.length;x++){const b=v[g],A=v[x];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++g,v[g]=A)}v.length=g+1;for(let x=0,b=v.length;x<b;x++){const A=v[x];a.bufferSubData(h,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(a.deleteBuffer(m.buffer),t.delete(p))}function u(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,n(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:o,remove:c,update:u}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$b=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sE="gl_FragColor = linearToOutputTexel( gl_FragColor );",oE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_E=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ME=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ST=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ET=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:Db,alphahash_pars_fragment:Ub,alphamap_fragment:Nb,alphamap_pars_fragment:Lb,alphatest_fragment:Ob,alphatest_pars_fragment:Pb,aomap_fragment:Fb,aomap_pars_fragment:zb,batching_pars_vertex:Bb,batching_vertex:Ib,begin_vertex:Hb,beginnormal_vertex:Gb,bsdfs:Vb,iridescence_fragment:kb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:Wb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:Yb,clipping_planes_vertex:jb,color_fragment:Zb,color_pars_fragment:Kb,color_pars_vertex:Qb,color_vertex:Jb,common:$b,cube_uv_reflection_fragment:tE,defaultnormal_vertex:eE,displacementmap_pars_vertex:nE,displacementmap_vertex:iE,emissivemap_fragment:aE,emissivemap_pars_fragment:rE,colorspace_fragment:sE,colorspace_pars_fragment:oE,envmap_fragment:lE,envmap_common_pars_fragment:cE,envmap_pars_fragment:uE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:ME,envmap_vertex:dE,fog_vertex:hE,fog_pars_vertex:pE,fog_fragment:mE,fog_pars_fragment:gE,gradientmap_pars_fragment:_E,lightmap_pars_fragment:vE,lights_lambert_fragment:xE,lights_lambert_pars_fragment:yE,lights_pars_begin:SE,lights_toon_fragment:bE,lights_toon_pars_fragment:EE,lights_phong_fragment:TE,lights_phong_pars_fragment:AE,lights_physical_fragment:RE,lights_physical_pars_fragment:CE,lights_fragment_begin:wE,lights_fragment_maps:DE,lights_fragment_end:UE,logdepthbuf_fragment:NE,logdepthbuf_pars_fragment:LE,logdepthbuf_pars_vertex:OE,logdepthbuf_vertex:PE,map_fragment:FE,map_pars_fragment:zE,map_particle_fragment:BE,map_particle_pars_fragment:IE,metalnessmap_fragment:HE,metalnessmap_pars_fragment:GE,morphinstance_vertex:VE,morphcolor_vertex:kE,morphnormal_vertex:XE,morphtarget_pars_vertex:WE,morphtarget_vertex:qE,normal_fragment_begin:YE,normal_fragment_maps:jE,normal_pars_fragment:ZE,normal_pars_vertex:KE,normal_vertex:QE,normalmap_pars_fragment:JE,clearcoat_normal_fragment_begin:$E,clearcoat_normal_fragment_maps:tT,clearcoat_pars_fragment:eT,iridescence_pars_fragment:nT,opaque_fragment:iT,packing:aT,premultiplied_alpha_fragment:rT,project_vertex:sT,dithering_fragment:oT,dithering_pars_fragment:lT,roughnessmap_fragment:cT,roughnessmap_pars_fragment:uT,shadowmap_pars_fragment:fT,shadowmap_pars_vertex:dT,shadowmap_vertex:hT,shadowmask_pars_fragment:pT,skinbase_vertex:mT,skinning_pars_vertex:gT,skinning_vertex:_T,skinnormal_vertex:vT,specularmap_fragment:xT,specularmap_pars_fragment:yT,tonemapping_fragment:ST,tonemapping_pars_fragment:MT,transmission_fragment:bT,transmission_pars_fragment:ET,uv_pars_fragment:TT,uv_pars_vertex:AT,uv_vertex:RT,worldpos_vertex:CT,background_vert:wT,background_frag:DT,backgroundCube_vert:UT,backgroundCube_frag:NT,cube_vert:LT,cube_frag:OT,depth_vert:PT,depth_frag:FT,distance_vert:zT,distance_frag:BT,equirect_vert:IT,equirect_frag:HT,linedashed_vert:GT,linedashed_frag:VT,meshbasic_vert:kT,meshbasic_frag:XT,meshlambert_vert:WT,meshlambert_frag:qT,meshmatcap_vert:YT,meshmatcap_frag:jT,meshnormal_vert:ZT,meshnormal_frag:KT,meshphong_vert:QT,meshphong_frag:JT,meshphysical_vert:$T,meshphysical_frag:tA,meshtoon_vert:eA,meshtoon_frag:nA,points_vert:iA,points_frag:aA,shadow_vert:rA,shadow_frag:sA,sprite_vert:oA,sprite_frag:lA},Nt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Gi={basic:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:On([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:On([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Me(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:On([Nt.points,Nt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:On([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:On([Nt.common,Nt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:On([Nt.sprite,Nt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:On([Nt.common,Nt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:On([Nt.lights,Nt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Gi.physical={uniforms:On([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const ou={r:0,b:0,g:0},Lr=new Ra,cA=new tn;function uA(a,t,n,r,o,c){const u=new Me(0);let p=o===!0?0:1,m,h,_=null,v=0,g=null;function x(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const U=w.backgroundBlurriness>0;N=t.get(N,U)}return N}function b(w){let N=!1;const U=x(w);U===null?M(u,p):U&&U.isColor&&(M(U,1),N=!0);const H=a.xr.getEnvironmentBlendMode();H==="additive"?n.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function A(w,N){const U=x(N);U&&(U.isCubeTexture||U.mapping===Gu)?(h===void 0&&(h=new Ca(new yl(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Zs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Lr.copy(N.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cA.makeRotationFromEuler(Lr)),h.material.toneMapped=Te.getTransfer(U.colorSpace)!==ze,(_!==U||v!==U.version||g!==a.toneMapping)&&(h.material.needsUpdate=!0,_=U,v=U.version,g=a.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Ca(new Vu(2,2),new ji({name:"BackgroundMaterial",uniforms:Zs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Te.getTransfer(U.colorSpace)!==ze,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||v!==U.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=U,v=U.version,g=a.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,N){w.getRGB(ou,ey(a)),n.buffers.color.setClear(ou.r,ou.g,ou.b,N,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,N=1){u.set(w),p=N,M(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,M(u,p)},render:b,addToRenderList:A,dispose:S}}function fA(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,u=!1;function p(B,V,K,at,Q){let L=!1;const F=v(B,at,K,V);c!==F&&(c=F,h(c.object)),L=x(B,at,K,Q),L&&b(B,at,K,Q),Q!==null&&t.update(Q,a.ELEMENT_ARRAY_BUFFER),(L||u)&&(u=!1,U(B,V,K,at),Q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return a.createVertexArray()}function h(B){return a.bindVertexArray(B)}function _(B){return a.deleteVertexArray(B)}function v(B,V,K,at){const Q=at.wireframe===!0;let L=r[V.id];L===void 0&&(L={},r[V.id]=L);const F=B.isInstancedMesh===!0?B.id:0;let st=L[F];st===void 0&&(st={},L[F]=st);let ft=st[K.id];ft===void 0&&(ft={},st[K.id]=ft);let yt=ft[Q];return yt===void 0&&(yt=g(m()),ft[Q]=yt),yt}function g(B){const V=[],K=[],at=[];for(let Q=0;Q<n;Q++)V[Q]=0,K[Q]=0,at[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:at,object:B,attributes:{},index:null}}function x(B,V,K,at){const Q=c.attributes,L=V.attributes;let F=0;const st=K.getAttributes();for(const ft in st)if(st[ft].location>=0){const P=Q[ft];let j=L[ft];if(j===void 0&&(ft==="instanceMatrix"&&B.instanceMatrix&&(j=B.instanceMatrix),ft==="instanceColor"&&B.instanceColor&&(j=B.instanceColor)),P===void 0||P.attribute!==j||j&&P.data!==j.data)return!0;F++}return c.attributesNum!==F||c.index!==at}function b(B,V,K,at){const Q={},L=V.attributes;let F=0;const st=K.getAttributes();for(const ft in st)if(st[ft].location>=0){let P=L[ft];P===void 0&&(ft==="instanceMatrix"&&B.instanceMatrix&&(P=B.instanceMatrix),ft==="instanceColor"&&B.instanceColor&&(P=B.instanceColor));const j={};j.attribute=P,P&&P.data&&(j.data=P.data),Q[ft]=j,F++}c.attributes=Q,c.attributesNum=F,c.index=at}function A(){const B=c.newAttributes;for(let V=0,K=B.length;V<K;V++)B[V]=0}function M(B){S(B,0)}function S(B,V){const K=c.newAttributes,at=c.enabledAttributes,Q=c.attributeDivisors;K[B]=1,at[B]===0&&(a.enableVertexAttribArray(B),at[B]=1),Q[B]!==V&&(a.vertexAttribDivisor(B,V),Q[B]=V)}function w(){const B=c.newAttributes,V=c.enabledAttributes;for(let K=0,at=V.length;K<at;K++)V[K]!==B[K]&&(a.disableVertexAttribArray(K),V[K]=0)}function N(B,V,K,at,Q,L,F){F===!0?a.vertexAttribIPointer(B,V,K,Q,L):a.vertexAttribPointer(B,V,K,at,Q,L)}function U(B,V,K,at){A();const Q=at.attributes,L=K.getAttributes(),F=V.defaultAttributeValues;for(const st in L){const ft=L[st];if(ft.location>=0){let yt=Q[st];if(yt===void 0&&(st==="instanceMatrix"&&B.instanceMatrix&&(yt=B.instanceMatrix),st==="instanceColor"&&B.instanceColor&&(yt=B.instanceColor)),yt!==void 0){const P=yt.normalized,j=yt.itemSize,_t=t.get(yt);if(_t===void 0)continue;const Rt=_t.buffer,zt=_t.type,nt=_t.bytesPerElement,vt=zt===a.INT||zt===a.UNSIGNED_INT||yt.gpuType===Zp;if(yt.isInterleavedBufferAttribute){const Tt=yt.data,kt=Tt.stride,Kt=yt.offset;if(Tt.isInstancedInterleavedBuffer){for(let $t=0;$t<ft.locationSize;$t++)S(ft.location+$t,Tt.meshPerAttribute);B.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let $t=0;$t<ft.locationSize;$t++)M(ft.location+$t);a.bindBuffer(a.ARRAY_BUFFER,Rt);for(let $t=0;$t<ft.locationSize;$t++)N(ft.location+$t,j/ft.locationSize,zt,P,kt*nt,(Kt+j/ft.locationSize*$t)*nt,vt)}else{if(yt.isInstancedBufferAttribute){for(let Tt=0;Tt<ft.locationSize;Tt++)S(ft.location+Tt,yt.meshPerAttribute);B.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Tt=0;Tt<ft.locationSize;Tt++)M(ft.location+Tt);a.bindBuffer(a.ARRAY_BUFFER,Rt);for(let Tt=0;Tt<ft.locationSize;Tt++)N(ft.location+Tt,j/ft.locationSize,zt,P,j*nt,j/ft.locationSize*Tt*nt,vt)}}else if(F!==void 0){const P=F[st];if(P!==void 0)switch(P.length){case 2:a.vertexAttrib2fv(ft.location,P);break;case 3:a.vertexAttrib3fv(ft.location,P);break;case 4:a.vertexAttrib4fv(ft.location,P);break;default:a.vertexAttrib1fv(ft.location,P)}}}}w()}function H(){D();for(const B in r){const V=r[B];for(const K in V){const at=V[K];for(const Q in at){const L=at[Q];for(const F in L)_(L[F].object),delete L[F];delete at[Q]}}delete r[B]}}function I(B){if(r[B.id]===void 0)return;const V=r[B.id];for(const K in V){const at=V[K];for(const Q in at){const L=at[Q];for(const F in L)_(L[F].object),delete L[F];delete at[Q]}}delete r[B.id]}function z(B){for(const V in r){const K=r[V];for(const at in K){const Q=K[at];if(Q[B.id]===void 0)continue;const L=Q[B.id];for(const F in L)_(L[F].object),delete L[F];delete Q[B.id]}}}function T(B){for(const V in r){const K=r[V],at=B.isInstancedMesh===!0?B.id:0,Q=K[at];if(Q!==void 0){for(const L in Q){const F=Q[L];for(const st in F)_(F[st].object),delete F[st];delete Q[L]}delete K[at],Object.keys(K).length===0&&delete r[V]}}}function D(){ut(),u=!0,c!==o&&(c=o,h(c.object))}function ut(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:D,resetDefaultState:ut,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:M,disableUnusedAttributes:w}}function dA(a,t,n){let r;function o(h){r=h}function c(h,_){a.drawArrays(r,h,_),n.update(_,r,1)}function u(h,_,v){v!==0&&(a.drawArraysInstanced(r,h,_,v),n.update(_,r,v))}function p(h,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,_,0,v);let x=0;for(let b=0;b<v;b++)x+=_[b];n.update(x,r,1)}function m(h,_,v,g){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<h.length;b++)u(h[b],_[b],g[b]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,_,0,g,0,v);let b=0;for(let A=0;A<v;A++)b+=_[A]*g[A];n.update(b,r,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function hA(a,t,n,r){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==Ni&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===Ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==_i&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Vi&&!T)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const _=m(h);_!==h&&(ie("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),M=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),w=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),N=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),H=a.getParameter(a.MAX_SAMPLES),I=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:U,maxSamples:H,samples:I}}function pA(a){const t=this;let n=null,r=0,o=!1,c=!1;const u=new Pr,p=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||r!==0||o;return o=g,r=v.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,x){const b=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,S=a.get(v);if(!o||b===null||b.length===0||c&&!M)c?_(null):h();else{const w=c?0:r,N=w*4;let U=S.clippingState||null;m.value=U,U=_(b,g,N,x);for(let H=0;H!==N;++H)U[H]=n[H];S.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(v,g,x,b){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const S=x+A*4,w=g.matrixWorldInverse;p.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,U=x;N!==A;++N,U+=4)u.copy(v[N]).applyMatrix4(w,p),u.normal.toArray(M,U),M[U+3]=u.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}const cr=4,Fv=[.125,.215,.35,.446,.526,.582],zr=20,mA=256,el=new iy,zv=new Me;let Oh=null,Ph=0,Fh=0,zh=!1;const gA=new it;class Bv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,r=.1,o=100,c={}){const{size:u=256,position:p=gA}=c;Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,o,m,p),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Oh,Ph,Fh),this._renderer.xr.enabled=zh,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Vr||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ta,format:Ni,colorSpace:js,depthBuffer:!1},o=Iv(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(t,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_A(c)),this._blurMaterial=xA(c,t,n),this._ggxMaterial=vA(c,t,n)}return o}_compileMaterial(t){const n=new Ca(new Yn,t);this._renderer.compile(n,el)}_sceneToCubeUV(t,n,r,o,c){const m=new gi(90,1,n,r),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(zv),v.toneMapping=Xi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ca(new yl,new Zx({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let S=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,S=!0):(M.color.copy(zv),S=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):U===1?(m.up.set(0,0,h[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const H=this._cubeSize;Hs(o,U*H,N>2?H:0,H,H),v.setRenderTarget(o),S&&v.render(A,m),v.render(t,m)}v.toneMapping=x,v.autoClear=g,t.background=w}_textureToCubeUV(t,n){const r=this._renderer,o=t.mapping===Vr||t.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Hs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,el)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=r}_applyGGXFilter(t,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,p=this._lodMeshes[r];p.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(h*h-_*_),g=0+h*1.25,x=v*g,{_lodMax:b}=this,A=this._sizeLods[r],M=3*A*(r>b-cr?r-b+cr:0),S=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=b-n,Hs(c,M,S,3*A,2*A),o.setRenderTarget(c),o.render(p,el),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Hs(t,M,S,3*A,2*A),o.setRenderTarget(t),o.render(p,el)}_blur(t,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,r,o,"latitudinal",c),this._halfBlur(u,t,r,r,o,"longitudinal",c)}_halfBlur(t,n,r,o,c,u,p){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=h;const g=h.uniforms,x=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*zr-1),A=c/b,M=isFinite(c)?1+Math.floor(_*A):zr;M>zr&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${zr}`);const S=[];let w=0;for(let z=0;z<zr;++z){const T=z/A,D=Math.exp(-T*T/2);S.push(D),z===0?w+=D:z<M&&(w+=2*D)}for(let z=0;z<S.length;z++)S[z]=S[z]/w;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=u==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=b,g.mipInt.value=N-r;const U=this._sizeLods[o],H=3*U*(o>N-cr?o-N+cr:0),I=4*(this._cubeSize-U);Hs(n,H,I,3*U,2*U),m.setRenderTarget(n),m.render(v,el)}}function _A(a){const t=[],n=[],r=[];let o=a;const c=a-cr+1+Fv.length;for(let u=0;u<c;u++){const p=Math.pow(2,o);t.push(p);let m=1/p;u>a-cr?m=Fv[u-a+cr-1]:u===0&&(m=0),n.push(m);const h=1/(p-2),_=-h,v=1+h,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,b=6,A=3,M=2,S=1,w=new Float32Array(A*b*x),N=new Float32Array(M*b*x),U=new Float32Array(S*b*x);for(let I=0;I<x;I++){const z=I%3*2/3-1,T=I>2?0:-1,D=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];w.set(D,A*b*I),N.set(g,M*b*I);const ut=[I,I,I,I,I,I];U.set(ut,S*b*I)}const H=new Yn;H.setAttribute("position",new vi(w,A)),H.setAttribute("uv",new vi(N,M)),H.setAttribute("faceIndex",new vi(U,S)),r.push(new Ca(H,null)),o>cr&&o--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Iv(a,t,n){const r=new Wi(a,t,n);return r.texture.mapping=Gu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hs(a,t,n,r,o){a.viewport.set(t,n,r,o),a.scissor.set(t,n,r,o)}function vA(a,t,n){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function xA(a,t,n){const r=new Float32Array(zr),o=new it(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function Hv(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function Gv(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ry extends Wi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new $x(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new yl(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:ba});c.uniforms.tEquirect.value=n;const u=new Ca(o,c),p=n.minFilter;return n.minFilter===Br&&(n.minFilter=Cn),new Tb(1,10,this).update(t,u),n.minFilter=p,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,r=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,r,o);t.setRenderTarget(c)}}function yA(a){let t=new WeakMap,n=new WeakMap,r=null;function o(g,x=!1){return g==null?null:x?u(g):c(g)}function c(g){if(g&&g.isTexture){const x=g.mapping;if(x===sh||x===oh)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const A=new ry(b.height);return A.fromEquirectangularTexture(a,g),t.set(g,A),g.addEventListener("dispose",h),p(A.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const x=g.mapping,b=x===sh||x===oh,A=x===Vr||x===qs;if(b||A){let M=n.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new Bv(a)),M=b?r.fromEquirectangular(g,M):r.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),M.texture;if(M!==void 0)return M.texture;{const w=g.image;return b&&w&&w.height>0||A&&w&&m(w)?(r===null&&(r=new Bv(a)),M=b?r.fromEquirectangular(g):r.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function p(g,x){return x===sh?g.mapping=Vr:x===oh&&(g.mapping=qs),g}function m(g){let x=0;const b=6;for(let A=0;A<b;A++)g[A]!==void 0&&x++;return x===b}function h(g){const x=g.target;x.removeEventListener("dispose",h);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function v(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function SA(a){const t={};function n(r){if(t[r]!==void 0)return t[r];const o=a.getExtension(r);return t[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Au("WebGLRenderer: "+r+" extension not supported."),o}}}function MA(a,t,n,r){const o={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",u),delete o[g.id];const x=c.get(g);x&&(t.remove(x),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function p(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const x in g)t.update(g[x],a.ARRAY_BUFFER)}function h(v){const g=[],x=v.index,b=v.attributes.position;let A=0;if(b===void 0)return;if(x!==null){const w=x.array;A=x.version;for(let N=0,U=w.length;N<U;N+=3){const H=w[N+0],I=w[N+1],z=w[N+2];g.push(H,I,I,z,z,H)}}else{const w=b.array;A=b.version;for(let N=0,U=w.length/3-1;N<U;N+=3){const H=N+0,I=N+1,z=N+2;g.push(H,I,I,z,z,H)}}const M=new(b.count>=65535?jx:Yx)(g,1);M.version=A;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:_}}function bA(a,t,n){let r;function o(g){r=g}let c,u;function p(g){c=g.type,u=g.bytesPerElement}function m(g,x){a.drawElements(r,x,c,g*u),n.update(x,r,1)}function h(g,x,b){b!==0&&(a.drawElementsInstanced(r,x,c,g*u,b),n.update(x,r,b))}function _(g,x,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,g,0,b);let M=0;for(let S=0;S<b;S++)M+=x[S];n.update(M,r,1)}function v(g,x,b,A){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<g.length;S++)h(g[S]/u,x[S],A[S]);else{M.multiDrawElementsInstancedWEBGL(r,x,0,c,g,0,A,0,b);let S=0;for(let w=0;w<b;w++)S+=x[w]*A[w];n.update(S,r,1)}}this.setMode=o,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function EA(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,p){switch(n.calls++,u){case a.TRIANGLES:n.triangles+=p*(c/3);break;case a.LINES:n.lines+=p*(c/2);break;case a.LINE_STRIP:n.lines+=p*(c-1);break;case a.LINE_LOOP:n.lines+=p*c;break;case a.POINTS:n.points+=p*c;break;default:we("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:r}}function TA(a,t,n){const r=new WeakMap,o=new an;function c(u,p,m){const h=u.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(p);if(g===void 0||g.count!==v){let ut=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",ut)};var x=ut;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let U=0;b===!0&&(U=1),A===!0&&(U=2),M===!0&&(U=3);let H=p.attributes.position.count*U,I=1;H>t.maxTextureSize&&(I=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const z=new Float32Array(H*I*4*v),T=new Xx(z,H,I,v);T.type=Vi,T.needsUpdate=!0;const D=U*4;for(let B=0;B<v;B++){const V=S[B],K=w[B],at=N[B],Q=H*I*4*B;for(let L=0;L<V.count;L++){const F=L*D;b===!0&&(o.fromBufferAttribute(V,L),z[Q+F+0]=o.x,z[Q+F+1]=o.y,z[Q+F+2]=o.z,z[Q+F+3]=0),A===!0&&(o.fromBufferAttribute(K,L),z[Q+F+4]=o.x,z[Q+F+5]=o.y,z[Q+F+6]=o.z,z[Q+F+7]=0),M===!0&&(o.fromBufferAttribute(at,L),z[Q+F+8]=o.x,z[Q+F+9]=o.y,z[Q+F+10]=o.z,z[Q+F+11]=at.itemSize===4?o.w:1)}}g={count:v,texture:T,size:new Ve(H,I)},r.set(p,g),p.addEventListener("dispose",ut)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<h.length;M++)b+=h[M];const A=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",A),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function AA(a,t,n,r,o){let c=new WeakMap;function u(h){const _=o.render.frame,v=h.geometry,g=t.get(h,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(n.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const x=h.skeleton;c.get(x)!==_&&(x.update(),c.set(x,_))}return g}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:p}}const RA={[Cx]:"LINEAR_TONE_MAPPING",[wx]:"REINHARD_TONE_MAPPING",[Dx]:"CINEON_TONE_MAPPING",[Ux]:"ACES_FILMIC_TONE_MAPPING",[Lx]:"AGX_TONE_MAPPING",[Ox]:"NEUTRAL_TONE_MAPPING",[Nx]:"CUSTOM_TONE_MAPPING"};function CA(a,t,n,r,o){const c=new Wi(t,n,{type:a,depthBuffer:r,stencilBuffer:o}),u=new Wi(t,n,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),p=new Yn;p.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new zn([0,2,0,0,2,0],2));const m=new Mb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ca(p,m),_=new iy(-1,1,1,-1,0,1);let v=null,g=null,x=!1,b,A=null,M=[],S=!1;this.setSize=function(w,N){c.setSize(w,N),u.setSize(w,N);for(let U=0;U<M.length;U++){const H=M[U];H.setSize&&H.setSize(w,N)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const N=c.width,U=c.height;for(let H=0;H<M.length;H++){const I=M[H];I.setSize&&I.setSize(N,U)}},this.begin=function(w,N){if(x||w.toneMapping===Xi&&M.length===0)return!1;if(A=N,N!==null){const U=N.width,H=N.height;(c.width!==U||c.height!==H)&&this.setSize(U,H)}return S===!1&&w.setRenderTarget(c),b=w.toneMapping,w.toneMapping=Xi,!0},this.hasRenderPass=function(){return S},this.end=function(w,N){w.toneMapping=b,x=!0;let U=c,H=u;for(let I=0;I<M.length;I++){const z=M[I];if(z.enabled!==!1&&(z.render(w,H,U,N),z.needsSwap!==!1)){const T=U;U=H,H=T}}if(v!==w.outputColorSpace||g!==w.toneMapping){v=w.outputColorSpace,g=w.toneMapping,m.defines={},Te.getTransfer(v)===ze&&(m.defines.SRGB_TRANSFER="");const I=RA[g];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(A),w.render(h,_),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.dispose(),u.dispose(),p.dispose(),m.dispose()}}const sy=new Pn,Pp=new hl(1,1),oy=new Xx,ly=new Q1,cy=new $x,Vv=[],kv=[],Xv=new Float32Array(16),Wv=new Float32Array(9),qv=new Float32Array(4);function no(a,t,n){const r=a[0];if(r<=0||r>0)return a;const o=t*n;let c=Vv[o];if(c===void 0&&(c=new Float32Array(o),Vv[o]=c),t!==0){r.toArray(c,0);for(let u=1,p=0;u!==t;++u)p+=n,a[u].toArray(c,p)}return c}function gn(a,t){if(a.length!==t.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==t[n])return!1;return!0}function _n(a,t){for(let n=0,r=t.length;n<r;n++)a[n]=t[n]}function Xu(a,t){let n=kv[t];n===void 0&&(n=new Int32Array(t),kv[t]=n);for(let r=0;r!==t;++r)n[r]=a.allocateTextureUnit();return n}function wA(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function DA(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;a.uniform2fv(this.addr,t),_n(n,t)}}function UA(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gn(n,t))return;a.uniform3fv(this.addr,t),_n(n,t)}}function NA(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;a.uniform4fv(this.addr,t),_n(n,t)}}function LA(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(gn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,r))return;qv.set(r),a.uniformMatrix2fv(this.addr,!1,qv),_n(n,r)}}function OA(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(gn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,r))return;Wv.set(r),a.uniformMatrix3fv(this.addr,!1,Wv),_n(n,r)}}function PA(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(gn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),_n(n,t)}else{if(gn(n,r))return;Xv.set(r),a.uniformMatrix4fv(this.addr,!1,Xv),_n(n,r)}}function FA(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function zA(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;a.uniform2iv(this.addr,t),_n(n,t)}}function BA(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;a.uniform3iv(this.addr,t),_n(n,t)}}function IA(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;a.uniform4iv(this.addr,t),_n(n,t)}}function HA(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function GA(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;a.uniform2uiv(this.addr,t),_n(n,t)}}function VA(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;a.uniform3uiv(this.addr,t),_n(n,t)}}function kA(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;a.uniform4uiv(this.addr,t),_n(n,t)}}function XA(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Pp.compareFunction=n.isReversedDepthBuffer()?nm:em,c=Pp):c=sy,n.setTexture2D(t||c,o)}function WA(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(t||ly,o)}function qA(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(t||cy,o)}function YA(a,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(t||oy,o)}function jA(a){switch(a){case 5126:return wA;case 35664:return DA;case 35665:return UA;case 35666:return NA;case 35674:return LA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return FA;case 35667:case 35671:return zA;case 35668:case 35672:return BA;case 35669:case 35673:return IA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return YA}}function ZA(a,t){a.uniform1fv(this.addr,t)}function KA(a,t){const n=no(t,this.size,2);a.uniform2fv(this.addr,n)}function QA(a,t){const n=no(t,this.size,3);a.uniform3fv(this.addr,n)}function JA(a,t){const n=no(t,this.size,4);a.uniform4fv(this.addr,n)}function $A(a,t){const n=no(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function t2(a,t){const n=no(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function e2(a,t){const n=no(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function n2(a,t){a.uniform1iv(this.addr,t)}function i2(a,t){a.uniform2iv(this.addr,t)}function a2(a,t){a.uniform3iv(this.addr,t)}function r2(a,t){a.uniform4iv(this.addr,t)}function s2(a,t){a.uniform1uiv(this.addr,t)}function o2(a,t){a.uniform2uiv(this.addr,t)}function l2(a,t){a.uniform3uiv(this.addr,t)}function c2(a,t){a.uniform4uiv(this.addr,t)}function u2(a,t,n){const r=this.cache,o=t.length,c=Xu(n,o);gn(r,c)||(a.uniform1iv(this.addr,c),_n(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Pp:u=sy;for(let p=0;p!==o;++p)n.setTexture2D(t[p]||u,c[p])}function f2(a,t,n){const r=this.cache,o=t.length,c=Xu(n,o);gn(r,c)||(a.uniform1iv(this.addr,c),_n(r,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||ly,c[u])}function d2(a,t,n){const r=this.cache,o=t.length,c=Xu(n,o);gn(r,c)||(a.uniform1iv(this.addr,c),_n(r,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||cy,c[u])}function h2(a,t,n){const r=this.cache,o=t.length,c=Xu(n,o);gn(r,c)||(a.uniform1iv(this.addr,c),_n(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||oy,c[u])}function p2(a){switch(a){case 5126:return ZA;case 35664:return KA;case 35665:return QA;case 35666:return JA;case 35674:return $A;case 35675:return t2;case 35676:return e2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return a2;case 35669:case 35673:return r2;case 5125:return s2;case 36294:return o2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return h2}}class m2{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=jA(n.type)}}class g2{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=p2(n.type)}}class _2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const p=o[c];p.setValue(t,n[p.id],r)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function Yv(a,t){a.seq.push(t),a.map[t.id]=t}function v2(a,t,n){const r=a.name,o=r.length;for(Bh.lastIndex=0;;){const c=Bh.exec(r),u=Bh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&u+2===o){Yv(n,h===void 0?new m2(p,a,t):new g2(p,a,t));break}else{let v=n.map[p];v===void 0&&(v=new _2(p),Yv(n,v)),n=v}}}class vu{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const p=t.getActiveUniform(n,u),m=t.getUniformLocation(n,p.name);v2(p,m,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(t,r,o)}setOptional(t,n,r){const o=n[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,n,r,o){for(let c=0,u=n.length;c!==u;++c){const p=n[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,o)}}static seqWithValue(t,n){const r=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&r.push(u)}return r}}function jv(a,t,n){const r=a.createShader(t);return a.shaderSource(r,n),a.compileShader(r),r}const x2=37297;let y2=0;function S2(a,t){const n=a.split(`
`),r=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const p=u+1;r.push(`${p===t?">":" "} ${p}: ${n[u]}`)}return r.join(`
`)}const Zv=new de;function M2(a){Te._getMatrix(Zv,Te.workingColorSpace,a);const t=`mat3( ${Zv.elements.map(n=>n.toFixed(4))} )`;switch(Te.getTransfer(a)){case bu:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function Kv(a,t,n){const r=a.getShaderParameter(t,a.COMPILE_STATUS),c=(a.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const p=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+S2(a.getShaderSource(t),p)}else return c}function b2(a,t){const n=M2(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const E2={[Cx]:"Linear",[wx]:"Reinhard",[Dx]:"Cineon",[Ux]:"ACESFilmic",[Lx]:"AgX",[Ox]:"Neutral",[Nx]:"Custom"};function T2(a,t){const n=E2[t];return n===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const lu=new it;function A2(){Te.getLuminanceCoefficients(lu);const a=lu.x.toFixed(4),t=lu.y.toFixed(4),n=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function C2(a){const t=[];for(const n in a){const r=a[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function w2(a,t){const n={},r=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(t,o),u=c.name;let p=1;c.type===a.FLOAT_MAT2&&(p=2),c.type===a.FLOAT_MAT3&&(p=3),c.type===a.FLOAT_MAT4&&(p=4),n[u]={type:c.type,location:a.getAttribLocation(t,u),locationSize:p}}return n}function rl(a){return a!==""}function Qv(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jv(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const D2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(a){return a.replace(D2,N2)}const U2=new Map;function N2(a,t){let n=he[t];if(n===void 0){const r=U2.get(t);if(r!==void 0)n=he[r],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Fp(n)}const L2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(a){return a.replace(L2,O2)}function O2(a,t,n,r){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function tx(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const P2={[hu]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function F2(a){return P2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const z2={[Vr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Gu]:"ENVMAP_TYPE_CUBE_UV"};function B2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":z2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const I2={[qs]:"ENVMAP_MODE_REFRACTION"};function H2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":I2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const G2={[Rx]:"ENVMAP_BLENDING_MULTIPLY",[w1]:"ENVMAP_BLENDING_MIX",[D1]:"ENVMAP_BLENDING_ADD"};function V2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":G2[a.combine]||"ENVMAP_BLENDING_NONE"}function k2(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function X2(a,t,n,r){const o=a.getContext(),c=n.defines;let u=n.vertexShader,p=n.fragmentShader;const m=F2(n),h=B2(n),_=H2(n),v=V2(n),g=k2(n),x=R2(n),b=C2(c),A=o.createProgram();let M,S,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(rl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(rl).join(`
`),S.length>0&&(S+=`
`)):(M=[tx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),S=[tx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?he.tonemapping_pars_fragment:"",n.toneMapping!==Xi?T2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,b2("linearToOutputTexel",n.outputColorSpace),A2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rl).join(`
`)),u=Fp(u),u=Qv(u,n),u=Jv(u,n),p=Fp(p),p=Qv(p,n),p=Jv(p,n),u=$v(u),p=$v(p),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",n.glslVersion===uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=w+M+u,U=w+S+p,H=jv(o,o.VERTEX_SHADER,N),I=jv(o,o.FRAGMENT_SHADER,U);o.attachShader(A,H),o.attachShader(A,I),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function z(B){if(a.debug.checkShaderErrors){const V=o.getProgramInfoLog(A)||"",K=o.getShaderInfoLog(H)||"",at=o.getShaderInfoLog(I)||"",Q=V.trim(),L=K.trim(),F=at.trim();let st=!0,ft=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(st=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,A,H,I);else{const yt=Kv(o,H,"vertex"),P=Kv(o,I,"fragment");we("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Q+`
`+yt+`
`+P)}else Q!==""?ie("WebGLProgram: Program Info Log:",Q):(L===""||F==="")&&(ft=!1);ft&&(B.diagnostics={runnable:st,programLog:Q,vertexShader:{log:L,prefix:M},fragmentShader:{log:F,prefix:S}})}o.deleteShader(H),o.deleteShader(I),T=new vu(o,A),D=w2(o,A)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let ut=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ut===!1&&(ut=o.getProgramParameter(A,x2)),ut},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=y2++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=I,this}let W2=0;class q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new Y2(t),n.set(t,r)),r}}class Y2{constructor(t){this.id=W2++,this.code=t,this.usedTimes=0}}function j2(a,t,n,r,o,c){const u=new Wx,p=new q2,m=new Set,h=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,D,ut,B,V){const K=B.fog,at=V.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,F=t.get(T.envMap||Q,L),st=F&&F.mapping===Gu?F.image.height:null,ft=x[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ie("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const yt=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,P=yt!==void 0?yt.length:0;let j=0;at.morphAttributes.position!==void 0&&(j=1),at.morphAttributes.normal!==void 0&&(j=2),at.morphAttributes.color!==void 0&&(j=3);let _t,Rt,zt,nt;if(ft){const Ee=Gi[ft];_t=Ee.vertexShader,Rt=Ee.fragmentShader}else _t=T.vertexShader,Rt=T.fragmentShader,p.update(T),zt=p.getVertexShaderID(T),nt=p.getFragmentShaderID(T);const vt=a.getRenderTarget(),Tt=a.state.buffers.depth.getReversed(),kt=V.isInstancedMesh===!0,Kt=V.isBatchedMesh===!0,$t=!!T.map,Qe=!!T.matcap,_e=!!F,pe=!!T.aoMap,De=!!T.lightMap,oe=!!T.bumpMap,Ke=!!T.normalMap,k=!!T.displacementMap,qe=!!T.emissiveMap,be=!!T.metalnessMap,Ne=!!T.roughnessMap,qt=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,Y=T.iridescence>0,pt=T.sheen>0,St=T.transmission>0,dt=qt&&!!T.anisotropyMap,Xt=O&&!!T.clearcoatMap,wt=O&&!!T.clearcoatNormalMap,Zt=O&&!!T.clearcoatRoughnessMap,te=Y&&!!T.iridescenceMap,Et=Y&&!!T.iridescenceThicknessMap,Mt=pt&&!!T.sheenColorMap,Ot=pt&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Pt=!!T.specularColorMap,ce=!!T.specularIntensityMap,q=St&&!!T.transmissionMap,Ct=St&&!!T.thicknessMap,At=!!T.gradientMap,Ft=!!T.alphaMap,bt=T.alphaTest>0,ct=!!T.alphaHash,It=!!T.extensions;let ne=Xi;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ne=a.toneMapping);const Oe={shaderID:ft,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:Rt,defines:T.defines,customVertexShaderID:zt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Kt,batchingColor:Kt&&V._colorsTexture!==null,instancing:kt,instancingColor:kt&&V.instanceColor!==null,instancingMorph:kt&&V.morphTexture!==null,outputColorSpace:vt===null?a.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:js,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:Qe,envMap:_e,envMapMode:_e&&F.mapping,envMapCubeUVHeight:st,aoMap:pe,lightMap:De,bumpMap:oe,normalMap:Ke,displacementMap:k,emissiveMap:qe,normalMapObjectSpace:Ke&&T.normalMapType===O1,normalMapTangentSpace:Ke&&T.normalMapType===L1,metalnessMap:be,roughnessMap:Ne,anisotropy:qt,anisotropyMap:dt,clearcoat:O,clearcoatMap:Xt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Zt,dispersion:E,iridescence:Y,iridescenceMap:te,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:Mt,sheenRoughnessMap:Ot,specularMap:Lt,specularColorMap:Pt,specularIntensityMap:ce,transmission:St,transmissionMap:q,thicknessMap:Ct,gradientMap:At,opaque:T.transparent===!1&&T.blending===Vs&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:bt,alphaHash:ct,combine:T.combine,mapUv:$t&&b(T.map.channel),aoMapUv:pe&&b(T.aoMap.channel),lightMapUv:De&&b(T.lightMap.channel),bumpMapUv:oe&&b(T.bumpMap.channel),normalMapUv:Ke&&b(T.normalMap.channel),displacementMapUv:k&&b(T.displacementMap.channel),emissiveMapUv:qe&&b(T.emissiveMap.channel),metalnessMapUv:be&&b(T.metalnessMap.channel),roughnessMapUv:Ne&&b(T.roughnessMap.channel),anisotropyMapUv:dt&&b(T.anisotropyMap.channel),clearcoatMapUv:Xt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Pt&&b(T.specularColorMap.channel),specularIntensityMapUv:ce&&b(T.specularIntensityMap.channel),transmissionMapUv:q&&b(T.transmissionMap.channel),thicknessMapUv:Ct&&b(T.thicknessMap.channel),alphaMapUv:Ft&&b(T.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Ke||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!at.attributes.uv&&($t||Ft),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||at.attributes.normal===void 0&&Ke===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:V.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:j,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&ut.length>0,shadowMapType:a.shadowMap.type,toneMapping:ne,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&Te.getTransfer(T.map.colorSpace)===ze,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&Te.getTransfer(T.emissiveMap.colorSpace)===ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sa,flipSided:T.side===qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Oe.vertexUv1s=m.has(1),Oe.vertexUv2s=m.has(2),Oe.vertexUv3s=m.has(3),m.clear(),Oe}function M(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ut in T.defines)D.push(ut),D.push(T.defines[ut]);return T.isRawShaderMaterial===!1&&(S(D,T),w(D,T),D.push(a.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function S(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function w(T,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),T.push(u.mask)}function N(T){const D=x[T.type];let ut;if(D){const B=Gi[D];ut=xb.clone(B.uniforms)}else ut=T.uniforms;return ut}function U(T,D){let ut=_.get(D);return ut!==void 0?++ut.usedTimes:(ut=new X2(a,D,T,o),h.push(ut),_.set(D,ut)),ut}function H(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function I(T){p.remove(T)}function z(){p.dispose()}return{getParameters:A,getProgramCacheKey:M,getUniforms:N,acquireProgram:U,releaseProgram:H,releaseShaderCache:I,programs:h,dispose:z}}function Z2(){let a=new WeakMap;function t(u){return a.has(u)}function n(u){let p=a.get(u);return p===void 0&&(p={},a.set(u,p)),p}function r(u){a.delete(u)}function o(u,p,m){a.get(u)[p]=m}function c(){a=new WeakMap}return{has:t,get:n,remove:r,update:o,dispose:c}}function K2(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.materialVariant!==t.materialVariant?a.materialVariant-t.materialVariant:a.z!==t.z?a.z-t.z:a.id-t.id}function ex(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function nx(){const a=[];let t=0;const n=[],r=[],o=[];function c(){t=0,n.length=0,r.length=0,o.length=0}function u(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function p(g,x,b,A,M,S){let w=a[t];return w===void 0?(w={id:g.id,object:g,geometry:x,material:b,materialVariant:u(g),groupOrder:A,renderOrder:g.renderOrder,z:M,group:S},a[t]=w):(w.id=g.id,w.object=g,w.geometry=x,w.material=b,w.materialVariant=u(g),w.groupOrder=A,w.renderOrder=g.renderOrder,w.z=M,w.group=S),t++,w}function m(g,x,b,A,M,S){const w=p(g,x,b,A,M,S);b.transmission>0?r.push(w):b.transparent===!0?o.push(w):n.push(w)}function h(g,x,b,A,M,S){const w=p(g,x,b,A,M,S);b.transmission>0?r.unshift(w):b.transparent===!0?o.unshift(w):n.unshift(w)}function _(g,x){n.length>1&&n.sort(g||K2),r.length>1&&r.sort(x||ex),o.length>1&&o.sort(x||ex)}function v(){for(let g=t,x=a.length;g<x;g++){const b=a[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:v,sort:_}}function Q2(){let a=new WeakMap;function t(r,o){const c=a.get(r);let u;return c===void 0?(u=new nx,a.set(r,[u])):o>=c.length?(u=new nx,c.push(u)):u=c[o],u}function n(){a=new WeakMap}return{get:t,dispose:n}}function J2(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new it,color:new Me};break;case"SpotLight":n={position:new it,direction:new it,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new it,color:new Me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new it,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":n={color:new Me,position:new it,halfWidth:new it,halfHeight:new it};break}return a[t.id]=n,n}}}function $2(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let t3=0;function e3(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function n3(a){const t=new J2,n=$2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new it);const o=new it,c=new tn,u=new tn;function p(h){let _=0,v=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let x=0,b=0,A=0,M=0,S=0,w=0,N=0,U=0,H=0,I=0,z=0;h.sort(e3);for(let D=0,ut=h.length;D<ut;D++){const B=h[D],V=B.color,K=B.intensity,at=B.distance;let Q=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ys?Q=B.shadow.map.texture:Q=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)_+=V.r*K,v+=V.g*K,g+=V.b*K;else if(B.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(B.sh.coefficients[L],K);z++}else if(B.isDirectionalLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const F=B.shadow,st=n.get(B);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,r.directionalShadow[x]=st,r.directionalShadowMap[x]=Q,r.directionalShadowMatrix[x]=B.shadow.matrix,w++}r.directional[x]=L,x++}else if(B.isSpotLight){const L=t.get(B);L.position.setFromMatrixPosition(B.matrixWorld),L.color.copy(V).multiplyScalar(K),L.distance=at,L.coneCos=Math.cos(B.angle),L.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),L.decay=B.decay,r.spot[A]=L;const F=B.shadow;if(B.map&&(r.spotLightMap[H]=B.map,H++,F.updateMatrices(B),B.castShadow&&I++),r.spotLightMatrix[A]=F.matrix,B.castShadow){const st=n.get(B);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,r.spotShadow[A]=st,r.spotShadowMap[A]=Q,U++}A++}else if(B.isRectAreaLight){const L=t.get(B);L.color.copy(V).multiplyScalar(K),L.halfWidth.set(B.width*.5,0,0),L.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=L,M++}else if(B.isPointLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),L.distance=B.distance,L.decay=B.decay,B.castShadow){const F=B.shadow,st=n.get(B);st.shadowIntensity=F.intensity,st.shadowBias=F.bias,st.shadowNormalBias=F.normalBias,st.shadowRadius=F.radius,st.shadowMapSize=F.mapSize,st.shadowCameraNear=F.camera.near,st.shadowCameraFar=F.camera.far,r.pointShadow[b]=st,r.pointShadowMap[b]=Q,r.pointShadowMatrix[b]=B.shadow.matrix,N++}r.point[b]=L,b++}else if(B.isHemisphereLight){const L=t.get(B);L.skyColor.copy(B.color).multiplyScalar(K),L.groundColor.copy(B.groundColor).multiplyScalar(K),r.hemi[S]=L,S++}}M>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==A||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==N||T.numSpotShadows!==U||T.numSpotMaps!==H||T.numLightProbes!==z)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=M,r.point.length=b,r.hemi.length=S,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,T.directionalLength=x,T.pointLength=b,T.spotLength=A,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=N,T.numSpotShadows=U,T.numSpotMaps=H,T.numLightProbes=z,r.version=t3++)}function m(h,_){let v=0,g=0,x=0,b=0,A=0;const M=_.matrixWorldInverse;for(let S=0,w=h.length;S<w;S++){const N=h[S];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(M),v++}else if(N.isSpotLight){const U=r.spot[x];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(M),x++}else if(N.isRectAreaLight){const U=r.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),u.identity(),c.copy(N.matrixWorld),c.premultiply(M),u.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),b++}else if(N.isPointLight){const U=r.point[g];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),g++}else if(N.isHemisphereLight){const U=r.hemi[A];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),A++}}}return{setup:p,setupView:m,state:r}}function ix(a){const t=new n3(a),n=[],r=[];function o(_){h.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function u(_){r.push(_)}function p(){t.setup(n)}function m(_){t.setupView(n,_)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:u}}function i3(a){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let p;return u===void 0?(p=new ix(a),t.set(o,[p])):c>=u.length?(p=new ix(a),u.push(p)):p=u[c],p}function r(){t=new WeakMap}return{get:n,dispose:r}}const a3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,s3=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],o3=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],ax=new tn,nl=new it,Ih=new it;function l3(a,t,n){let r=new Kx;const o=new Ve,c=new Ve,u=new an,p=new bb,m=new Eb,h={},_=n.maxTextureSize,v={[ur]:qn,[qn]:ur,[Sa]:Sa},g=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:a3,fragmentShader:r3}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const b=new Yn;b.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ca(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let S=this.type;this.render=function(I,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;this.type===u1&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hu);const D=a.getRenderTarget(),ut=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),V=a.state;V.setBlending(ba),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const K=S!==this.type;K&&z.traverse(function(at){at.material&&(Array.isArray(at.material)?at.material.forEach(Q=>Q.needsUpdate=!0):at.material.needsUpdate=!0)});for(let at=0,Q=I.length;at<Q;at++){const L=I[at],F=L.shadow;if(F===void 0){ie("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const st=F.getFrameExtents();o.multiply(st),c.copy(F.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/st.x),o.x=c.x*st.x,F.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/st.y),o.y=c.y*st.y,F.mapSize.y=c.y));const ft=a.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ft,F.map===null||K===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===al){if(L.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Wi(o.x,o.y,{format:Ys,type:Ta,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new hl(o.x,o.y,Vi),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=Aa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En}else L.isPointLight?(F.map=new ry(o.x),F.map.depthTexture=new _b(o.x,Yi)):(F.map=new Wi(o.x,o.y),F.map.depthTexture=new hl(o.x,o.y,Yi)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=Aa,this.type===hu?(F.map.depthTexture.compareFunction=ft?nm:em,F.map.depthTexture.minFilter=Cn,F.map.depthTexture.magFilter=Cn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En);F.camera.updateProjectionMatrix()}const yt=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<yt;P++){if(F.map.isWebGLCubeRenderTarget)a.setRenderTarget(F.map,P),a.clear();else{P===0&&(a.setRenderTarget(F.map),a.clear());const j=F.getViewport(P);u.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),V.viewport(u)}if(L.isPointLight){const j=F.camera,_t=F.matrix,Rt=L.distance||j.far;Rt!==j.far&&(j.far=Rt,j.updateProjectionMatrix()),nl.setFromMatrixPosition(L.matrixWorld),j.position.copy(nl),Ih.copy(j.position),Ih.add(s3[P]),j.up.copy(o3[P]),j.lookAt(Ih),j.updateMatrixWorld(),_t.makeTranslation(-nl.x,-nl.y,-nl.z),ax.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ax,j.coordinateSystem,j.reversedDepth)}else F.updateMatrices(L);r=F.getFrustum(),U(z,T,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===al&&w(F,T),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,a.setRenderTarget(D,ut,B)};function w(I,z){const T=t.update(A);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Wi(o.x,o.y,{format:Ys,type:Ta})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,a.setRenderTarget(I.mapPass),a.clear(),a.renderBufferDirect(z,null,T,g,A,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,a.setRenderTarget(I.map),a.clear(),a.renderBufferDirect(z,null,T,x,A,null)}function N(I,z,T,D){let ut=null;const B=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)ut=B;else if(ut=T.isPointLight===!0?m:p,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const V=ut.uuid,K=z.uuid;let at=h[V];at===void 0&&(at={},h[V]=at);let Q=at[K];Q===void 0&&(Q=ut.clone(),at[K]=Q,z.addEventListener("dispose",H)),ut=Q}if(ut.visible=z.visible,ut.wireframe=z.wireframe,D===al?ut.side=z.shadowSide!==null?z.shadowSide:z.side:ut.side=z.shadowSide!==null?z.shadowSide:v[z.side],ut.alphaMap=z.alphaMap,ut.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,ut.map=z.map,ut.clipShadows=z.clipShadows,ut.clippingPlanes=z.clippingPlanes,ut.clipIntersection=z.clipIntersection,ut.displacementMap=z.displacementMap,ut.displacementScale=z.displacementScale,ut.displacementBias=z.displacementBias,ut.wireframeLinewidth=z.wireframeLinewidth,ut.linewidth=z.linewidth,T.isPointLight===!0&&ut.isMeshDistanceMaterial===!0){const V=a.properties.get(ut);V.light=T}return ut}function U(I,z,T,D,ut){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&ut===al)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const K=t.update(I),at=I.material;if(Array.isArray(at)){const Q=K.groups;for(let L=0,F=Q.length;L<F;L++){const st=Q[L],ft=at[st.materialIndex];if(ft&&ft.visible){const yt=N(I,ft,D,ut);I.onBeforeShadow(a,I,z,T,K,yt,st),a.renderBufferDirect(T,null,K,yt,I,st),I.onAfterShadow(a,I,z,T,K,yt,st)}}}else if(at.visible){const Q=N(I,at,D,ut);I.onBeforeShadow(a,I,z,T,K,Q,null),a.renderBufferDirect(T,null,K,Q,I,null),I.onAfterShadow(a,I,z,T,K,Q,null)}}const V=I.children;for(let K=0,at=V.length;K<at;K++)U(V[K],z,T,D,ut)}function H(I){I.target.removeEventListener("dispose",H);for(const T in h){const D=h[T],ut=I.target.uuid;ut in D&&(D[ut].dispose(),delete D[ut])}}}function c3(a,t){function n(){let q=!1;const Ct=new an;let At=null;const Ft=new an(0,0,0,0);return{setMask:function(bt){At!==bt&&!q&&(a.colorMask(bt,bt,bt,bt),At=bt)},setLocked:function(bt){q=bt},setClear:function(bt,ct,It,ne,Oe){Oe===!0&&(bt*=ne,ct*=ne,It*=ne),Ct.set(bt,ct,It,ne),Ft.equals(Ct)===!1&&(a.clearColor(bt,ct,It,ne),Ft.copy(Ct))},reset:function(){q=!1,At=null,Ft.set(-1,0,0,0)}}}function r(){let q=!1,Ct=!1,At=null,Ft=null,bt=null;return{setReversed:function(ct){if(Ct!==ct){const It=t.get("EXT_clip_control");ct?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ct=ct;const ne=bt;bt=null,this.setClear(ne)}},getReversed:function(){return Ct},setTest:function(ct){ct?vt(a.DEPTH_TEST):Tt(a.DEPTH_TEST)},setMask:function(ct){At!==ct&&!q&&(a.depthMask(ct),At=ct)},setFunc:function(ct){if(Ct&&(ct=X1[ct]),Ft!==ct){switch(ct){case qh:a.depthFunc(a.NEVER);break;case Yh:a.depthFunc(a.ALWAYS);break;case jh:a.depthFunc(a.LESS);break;case Ws:a.depthFunc(a.LEQUAL);break;case Zh:a.depthFunc(a.EQUAL);break;case Kh:a.depthFunc(a.GEQUAL);break;case Qh:a.depthFunc(a.GREATER);break;case Jh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ft=ct}},setLocked:function(ct){q=ct},setClear:function(ct){bt!==ct&&(bt=ct,Ct&&(ct=1-ct),a.clearDepth(ct))},reset:function(){q=!1,At=null,Ft=null,bt=null,Ct=!1}}}function o(){let q=!1,Ct=null,At=null,Ft=null,bt=null,ct=null,It=null,ne=null,Oe=null;return{setTest:function(Ee){q||(Ee?vt(a.STENCIL_TEST):Tt(a.STENCIL_TEST))},setMask:function(Ee){Ct!==Ee&&!q&&(a.stencilMask(Ee),Ct=Ee)},setFunc:function(Ee,wn,xi){(At!==Ee||Ft!==wn||bt!==xi)&&(a.stencilFunc(Ee,wn,xi),At=Ee,Ft=wn,bt=xi)},setOp:function(Ee,wn,xi){(ct!==Ee||It!==wn||ne!==xi)&&(a.stencilOp(Ee,wn,xi),ct=Ee,It=wn,ne=xi)},setLocked:function(Ee){q=Ee},setClear:function(Ee){Oe!==Ee&&(a.clearStencil(Ee),Oe=Ee)},reset:function(){q=!1,Ct=null,At=null,Ft=null,bt=null,ct=null,It=null,ne=null,Oe=null}}}const c=new n,u=new r,p=new o,m=new WeakMap,h=new WeakMap;let _={},v={},g=new WeakMap,x=[],b=null,A=!1,M=null,S=null,w=null,N=null,U=null,H=null,I=null,z=new Me(0,0,0),T=0,D=!1,ut=null,B=null,V=null,K=null,at=null;const Q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const st=a.getParameter(a.VERSION);st.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(st)[1]),L=F>=1):st.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),L=F>=2);let ft=null,yt={};const P=a.getParameter(a.SCISSOR_BOX),j=a.getParameter(a.VIEWPORT),_t=new an().fromArray(P),Rt=new an().fromArray(j);function zt(q,Ct,At,Ft){const bt=new Uint8Array(4),ct=a.createTexture();a.bindTexture(q,ct),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let It=0;It<At;It++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Ct,0,a.RGBA,1,1,Ft,0,a.RGBA,a.UNSIGNED_BYTE,bt):a.texImage2D(Ct+It,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,bt);return ct}const nt={};nt[a.TEXTURE_2D]=zt(a.TEXTURE_2D,a.TEXTURE_2D,1),nt[a.TEXTURE_CUBE_MAP]=zt(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[a.TEXTURE_2D_ARRAY]=zt(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),nt[a.TEXTURE_3D]=zt(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),p.setClear(0),vt(a.DEPTH_TEST),u.setFunc(Ws),oe(!1),Ke(av),vt(a.CULL_FACE),pe(ba);function vt(q){_[q]!==!0&&(a.enable(q),_[q]=!0)}function Tt(q){_[q]!==!1&&(a.disable(q),_[q]=!1)}function kt(q,Ct){return v[q]!==Ct?(a.bindFramebuffer(q,Ct),v[q]=Ct,q===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ct),q===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Kt(q,Ct){let At=x,Ft=!1;if(q){At=g.get(Ct),At===void 0&&(At=[],g.set(Ct,At));const bt=q.textures;if(At.length!==bt.length||At[0]!==a.COLOR_ATTACHMENT0){for(let ct=0,It=bt.length;ct<It;ct++)At[ct]=a.COLOR_ATTACHMENT0+ct;At.length=bt.length,Ft=!0}}else At[0]!==a.BACK&&(At[0]=a.BACK,Ft=!0);Ft&&a.drawBuffers(At)}function $t(q){return b!==q?(a.useProgram(q),b=q,!0):!1}const Qe={[Fr]:a.FUNC_ADD,[d1]:a.FUNC_SUBTRACT,[h1]:a.FUNC_REVERSE_SUBTRACT};Qe[p1]=a.MIN,Qe[m1]=a.MAX;const _e={[g1]:a.ZERO,[_1]:a.ONE,[v1]:a.SRC_COLOR,[Xh]:a.SRC_ALPHA,[E1]:a.SRC_ALPHA_SATURATE,[M1]:a.DST_COLOR,[y1]:a.DST_ALPHA,[x1]:a.ONE_MINUS_SRC_COLOR,[Wh]:a.ONE_MINUS_SRC_ALPHA,[b1]:a.ONE_MINUS_DST_COLOR,[S1]:a.ONE_MINUS_DST_ALPHA,[T1]:a.CONSTANT_COLOR,[A1]:a.ONE_MINUS_CONSTANT_COLOR,[R1]:a.CONSTANT_ALPHA,[C1]:a.ONE_MINUS_CONSTANT_ALPHA};function pe(q,Ct,At,Ft,bt,ct,It,ne,Oe,Ee){if(q===ba){A===!0&&(Tt(a.BLEND),A=!1);return}if(A===!1&&(vt(a.BLEND),A=!0),q!==f1){if(q!==M||Ee!==D){if((S!==Fr||U!==Fr)&&(a.blendEquation(a.FUNC_ADD),S=Fr,U=Fr),Ee)switch(q){case Vs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case rv:a.blendFunc(a.ONE,a.ONE);break;case sv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case ov:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:we("WebGLState: Invalid blending: ",q);break}else switch(q){case Vs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case rv:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case sv:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ov:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",q);break}w=null,N=null,H=null,I=null,z.set(0,0,0),T=0,M=q,D=Ee}return}bt=bt||Ct,ct=ct||At,It=It||Ft,(Ct!==S||bt!==U)&&(a.blendEquationSeparate(Qe[Ct],Qe[bt]),S=Ct,U=bt),(At!==w||Ft!==N||ct!==H||It!==I)&&(a.blendFuncSeparate(_e[At],_e[Ft],_e[ct],_e[It]),w=At,N=Ft,H=ct,I=It),(ne.equals(z)===!1||Oe!==T)&&(a.blendColor(ne.r,ne.g,ne.b,Oe),z.copy(ne),T=Oe),M=q,D=!1}function De(q,Ct){q.side===Sa?Tt(a.CULL_FACE):vt(a.CULL_FACE);let At=q.side===qn;Ct&&(At=!At),oe(At),q.blending===Vs&&q.transparent===!1?pe(ba):pe(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ft=q.stencilWrite;p.setTest(Ft),Ft&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),qe(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?vt(a.SAMPLE_ALPHA_TO_COVERAGE):Tt(a.SAMPLE_ALPHA_TO_COVERAGE)}function oe(q){ut!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),ut=q)}function Ke(q){q!==l1?(vt(a.CULL_FACE),q!==B&&(q===av?a.cullFace(a.BACK):q===c1?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Tt(a.CULL_FACE),B=q}function k(q){q!==V&&(L&&a.lineWidth(q),V=q)}function qe(q,Ct,At){q?(vt(a.POLYGON_OFFSET_FILL),(K!==Ct||at!==At)&&(K=Ct,at=At,u.getReversed()&&(Ct=-Ct),a.polygonOffset(Ct,At))):Tt(a.POLYGON_OFFSET_FILL)}function be(q){q?vt(a.SCISSOR_TEST):Tt(a.SCISSOR_TEST)}function Ne(q){q===void 0&&(q=a.TEXTURE0+Q-1),ft!==q&&(a.activeTexture(q),ft=q)}function qt(q,Ct,At){At===void 0&&(ft===null?At=a.TEXTURE0+Q-1:At=ft);let Ft=yt[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},yt[At]=Ft),(Ft.type!==q||Ft.texture!==Ct)&&(ft!==At&&(a.activeTexture(At),ft=At),a.bindTexture(q,Ct||nt[q]),Ft.type=q,Ft.texture=Ct)}function O(){const q=yt[ft];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{a.compressedTexImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function Y(){try{a.compressedTexImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function pt(){try{a.texSubImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function St(){try{a.texSubImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function dt(){try{a.compressedTexSubImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function Xt(){try{a.compressedTexSubImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function wt(){try{a.texStorage2D(...arguments)}catch(q){we("WebGLState:",q)}}function Zt(){try{a.texStorage3D(...arguments)}catch(q){we("WebGLState:",q)}}function te(){try{a.texImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function Et(){try{a.texImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function Mt(q){_t.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),_t.copy(q))}function Ot(q){Rt.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Rt.copy(q))}function Lt(q,Ct){let At=h.get(Ct);At===void 0&&(At=new WeakMap,h.set(Ct,At));let Ft=At.get(q);Ft===void 0&&(Ft=a.getUniformBlockIndex(Ct,q.name),At.set(q,Ft))}function Pt(q,Ct){const Ft=h.get(Ct).get(q);m.get(Ct)!==Ft&&(a.uniformBlockBinding(Ct,Ft,q.__bindingPointIndex),m.set(Ct,Ft))}function ce(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),_={},ft=null,yt={},v={},g=new WeakMap,x=[],b=null,A=!1,M=null,S=null,w=null,N=null,U=null,H=null,I=null,z=new Me(0,0,0),T=0,D=!1,ut=null,B=null,V=null,K=null,at=null,_t.set(0,0,a.canvas.width,a.canvas.height),Rt.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),p.reset()}return{buffers:{color:c,depth:u,stencil:p},enable:vt,disable:Tt,bindFramebuffer:kt,drawBuffers:Kt,useProgram:$t,setBlending:pe,setMaterial:De,setFlipSided:oe,setCullFace:Ke,setLineWidth:k,setPolygonOffset:qe,setScissorTest:be,activeTexture:Ne,bindTexture:qt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:te,texImage3D:Et,updateUBOMapping:Lt,uniformBlockBinding:Pt,texStorage2D:wt,texStorage3D:Zt,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:dt,compressedTexSubImage3D:Xt,scissor:Mt,viewport:Ot,reset:ce}}function u3(a,t,n,r,o,c,u){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ve,_=new WeakMap;let v;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return x?new OffscreenCanvas(O,E):Tu("canvas")}function A(O,E,Y){let pt=1;const St=qt(O);if((St.width>Y||St.height>Y)&&(pt=Y/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const dt=Math.floor(pt*St.width),Xt=Math.floor(pt*St.height);v===void 0&&(v=b(dt,Xt));const wt=E?b(dt,Xt):v;return wt.width=dt,wt.height=Xt,wt.getContext("2d").drawImage(O,0,0,dt,Xt),ie("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+dt+"x"+Xt+")."),wt}else return"data"in O&&ie("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function M(O){return O.generateMipmaps}function S(O){a.generateMipmap(O)}function w(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function N(O,E,Y,pt,St=!1){if(O!==null){if(a[O]!==void 0)return a[O];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let dt=E;if(E===a.RED&&(Y===a.FLOAT&&(dt=a.R32F),Y===a.HALF_FLOAT&&(dt=a.R16F),Y===a.UNSIGNED_BYTE&&(dt=a.R8)),E===a.RED_INTEGER&&(Y===a.UNSIGNED_BYTE&&(dt=a.R8UI),Y===a.UNSIGNED_SHORT&&(dt=a.R16UI),Y===a.UNSIGNED_INT&&(dt=a.R32UI),Y===a.BYTE&&(dt=a.R8I),Y===a.SHORT&&(dt=a.R16I),Y===a.INT&&(dt=a.R32I)),E===a.RG&&(Y===a.FLOAT&&(dt=a.RG32F),Y===a.HALF_FLOAT&&(dt=a.RG16F),Y===a.UNSIGNED_BYTE&&(dt=a.RG8)),E===a.RG_INTEGER&&(Y===a.UNSIGNED_BYTE&&(dt=a.RG8UI),Y===a.UNSIGNED_SHORT&&(dt=a.RG16UI),Y===a.UNSIGNED_INT&&(dt=a.RG32UI),Y===a.BYTE&&(dt=a.RG8I),Y===a.SHORT&&(dt=a.RG16I),Y===a.INT&&(dt=a.RG32I)),E===a.RGB_INTEGER&&(Y===a.UNSIGNED_BYTE&&(dt=a.RGB8UI),Y===a.UNSIGNED_SHORT&&(dt=a.RGB16UI),Y===a.UNSIGNED_INT&&(dt=a.RGB32UI),Y===a.BYTE&&(dt=a.RGB8I),Y===a.SHORT&&(dt=a.RGB16I),Y===a.INT&&(dt=a.RGB32I)),E===a.RGBA_INTEGER&&(Y===a.UNSIGNED_BYTE&&(dt=a.RGBA8UI),Y===a.UNSIGNED_SHORT&&(dt=a.RGBA16UI),Y===a.UNSIGNED_INT&&(dt=a.RGBA32UI),Y===a.BYTE&&(dt=a.RGBA8I),Y===a.SHORT&&(dt=a.RGBA16I),Y===a.INT&&(dt=a.RGBA32I)),E===a.RGB&&(Y===a.UNSIGNED_INT_5_9_9_9_REV&&(dt=a.RGB9_E5),Y===a.UNSIGNED_INT_10F_11F_11F_REV&&(dt=a.R11F_G11F_B10F)),E===a.RGBA){const Xt=St?bu:Te.getTransfer(pt);Y===a.FLOAT&&(dt=a.RGBA32F),Y===a.HALF_FLOAT&&(dt=a.RGBA16F),Y===a.UNSIGNED_BYTE&&(dt=Xt===ze?a.SRGB8_ALPHA8:a.RGBA8),Y===a.UNSIGNED_SHORT_4_4_4_4&&(dt=a.RGBA4),Y===a.UNSIGNED_SHORT_5_5_5_1&&(dt=a.RGB5_A1)}return(dt===a.R16F||dt===a.R32F||dt===a.RG16F||dt===a.RG32F||dt===a.RGBA16F||dt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function U(O,E){let Y;return O?E===null||E===Yi||E===dl?Y=a.DEPTH24_STENCIL8:E===Vi?Y=a.DEPTH32F_STENCIL8:E===fl&&(Y=a.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===dl?Y=a.DEPTH_COMPONENT24:E===Vi?Y=a.DEPTH_COMPONENT32F:E===fl&&(Y=a.DEPTH_COMPONENT16),Y}function H(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==En&&O.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function I(O){const E=O.target;E.removeEventListener("dispose",I),T(E),E.isVideoTexture&&_.delete(E)}function z(O){const E=O.target;E.removeEventListener("dispose",z),ut(E)}function T(O){const E=r.get(O);if(E.__webglInit===void 0)return;const Y=O.source,pt=g.get(Y);if(pt){const St=pt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&D(O),Object.keys(pt).length===0&&g.delete(Y)}r.remove(O)}function D(O){const E=r.get(O);a.deleteTexture(E.__webglTexture);const Y=O.source,pt=g.get(Y);delete pt[E.__cacheKey],u.memory.textures--}function ut(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let St=0;St<E.__webglFramebuffer[pt].length;St++)a.deleteFramebuffer(E.__webglFramebuffer[pt][St]);else a.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)a.deleteFramebuffer(E.__webglFramebuffer[pt]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=O.textures;for(let pt=0,St=Y.length;pt<St;pt++){const dt=r.get(Y[pt]);dt.__webglTexture&&(a.deleteTexture(dt.__webglTexture),u.memory.textures--),r.remove(Y[pt])}r.remove(O)}let B=0;function V(){B=0}function K(){const O=B;return O>=o.maxTextures&&ie("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),B+=1,O}function at(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Q(O,E){const Y=r.get(O);if(O.isVideoTexture&&be(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){const pt=O.image;if(pt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Y,O,E);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,Y.__webglTexture,a.TEXTURE0+E)}function L(O,E){const Y=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){nt(Y,O,E);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,Y.__webglTexture,a.TEXTURE0+E)}function F(O,E){const Y=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){nt(Y,O,E);return}n.bindTexture(a.TEXTURE_3D,Y.__webglTexture,a.TEXTURE0+E)}function st(O,E){const Y=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){vt(Y,O,E);return}n.bindTexture(a.TEXTURE_CUBE_MAP,Y.__webglTexture,a.TEXTURE0+E)}const ft={[$h]:a.REPEAT,[Ma]:a.CLAMP_TO_EDGE,[tp]:a.MIRRORED_REPEAT},yt={[En]:a.NEAREST,[U1]:a.NEAREST_MIPMAP_NEAREST,[Fc]:a.NEAREST_MIPMAP_LINEAR,[Cn]:a.LINEAR,[lh]:a.LINEAR_MIPMAP_NEAREST,[Br]:a.LINEAR_MIPMAP_LINEAR},P={[P1]:a.NEVER,[H1]:a.ALWAYS,[F1]:a.LESS,[em]:a.LEQUAL,[z1]:a.EQUAL,[nm]:a.GEQUAL,[B1]:a.GREATER,[I1]:a.NOTEQUAL};function j(O,E){if(E.type===Vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===lh||E.magFilter===Fc||E.magFilter===Br||E.minFilter===Cn||E.minFilter===lh||E.minFilter===Fc||E.minFilter===Br)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,ft[E.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,ft[E.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,ft[E.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,yt[E.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==Fc&&E.minFilter!==Br||E.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");a.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function _t(O,E){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",I));const pt=E.source;let St=g.get(pt);St===void 0&&(St={},g.set(pt,St));const dt=at(E);if(dt!==O.__cacheKey){St[dt]===void 0&&(St[dt]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),St[dt].usedTimes++;const Xt=St[O.__cacheKey];Xt!==void 0&&(St[O.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(E)),O.__cacheKey=dt,O.__webglTexture=St[dt].texture}return Y}function Rt(O,E,Y){return Math.floor(Math.floor(O/Y)/E)}function zt(O,E,Y,pt){const dt=O.updateRanges;if(dt.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,Y,pt,E.data);else{dt.sort((Et,Mt)=>Et.start-Mt.start);let Xt=0;for(let Et=1;Et<dt.length;Et++){const Mt=dt[Xt],Ot=dt[Et],Lt=Mt.start+Mt.count,Pt=Rt(Ot.start,E.width,4),ce=Rt(Mt.start,E.width,4);Ot.start<=Lt+1&&Pt===ce&&Rt(Ot.start+Ot.count-1,E.width,4)===Pt?Mt.count=Math.max(Mt.count,Ot.start+Ot.count-Mt.start):(++Xt,dt[Xt]=Ot)}dt.length=Xt+1;const wt=a.getParameter(a.UNPACK_ROW_LENGTH),Zt=a.getParameter(a.UNPACK_SKIP_PIXELS),te=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Mt=dt.length;Et<Mt;Et++){const Ot=dt[Et],Lt=Math.floor(Ot.start/4),Pt=Math.ceil(Ot.count/4),ce=Lt%E.width,q=Math.floor(Lt/E.width),Ct=Pt,At=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ce),a.pixelStorei(a.UNPACK_SKIP_ROWS,q),n.texSubImage2D(a.TEXTURE_2D,0,ce,q,Ct,At,Y,pt,E.data)}O.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,wt),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Zt),a.pixelStorei(a.UNPACK_SKIP_ROWS,te)}}function nt(O,E,Y){let pt=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=a.TEXTURE_3D);const St=_t(O,E),dt=E.source;n.bindTexture(pt,O.__webglTexture,a.TEXTURE0+Y);const Xt=r.get(dt);if(dt.version!==Xt.__version||St===!0){n.activeTexture(a.TEXTURE0+Y);const wt=Te.getPrimaries(Te.workingColorSpace),Zt=E.colorSpace===lr?null:Te.getPrimaries(E.colorSpace),te=E.colorSpace===lr||wt===Zt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Et=A(E.image,!1,o.maxTextureSize);Et=Ne(E,Et);const Mt=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type);let Lt=N(E.internalFormat,Mt,Ot,E.colorSpace,E.isVideoTexture);j(pt,E);let Pt;const ce=E.mipmaps,q=E.isVideoTexture!==!0,Ct=Xt.__version===void 0||St===!0,At=dt.dataReady,Ft=H(E,Et);if(E.isDepthTexture)Lt=U(E.format===Ir,E.type),Ct&&(q?n.texStorage2D(a.TEXTURE_2D,1,Lt,Et.width,Et.height):n.texImage2D(a.TEXTURE_2D,0,Lt,Et.width,Et.height,0,Mt,Ot,null));else if(E.isDataTexture)if(ce.length>0){q&&Ct&&n.texStorage2D(a.TEXTURE_2D,Ft,Lt,ce[0].width,ce[0].height);for(let bt=0,ct=ce.length;bt<ct;bt++)Pt=ce[bt],q?At&&n.texSubImage2D(a.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Mt,Ot,Pt.data):n.texImage2D(a.TEXTURE_2D,bt,Lt,Pt.width,Pt.height,0,Mt,Ot,Pt.data);E.generateMipmaps=!1}else q?(Ct&&n.texStorage2D(a.TEXTURE_2D,Ft,Lt,Et.width,Et.height),At&&zt(E,Et,Mt,Ot)):n.texImage2D(a.TEXTURE_2D,0,Lt,Et.width,Et.height,0,Mt,Ot,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&Ct&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ft,Lt,ce[0].width,ce[0].height,Et.depth);for(let bt=0,ct=ce.length;bt<ct;bt++)if(Pt=ce[bt],E.format!==Ni)if(Mt!==null)if(q){if(At)if(E.layerUpdates.size>0){const It=Pv(Pt.width,Pt.height,E.format,E.type);for(const ne of E.layerUpdates){const Oe=Pt.data.subarray(ne*It/Pt.data.BYTES_PER_ELEMENT,(ne+1)*It/Pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,bt,0,0,ne,Pt.width,Pt.height,1,Mt,Oe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,bt,0,0,0,Pt.width,Pt.height,Et.depth,Mt,Pt.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,bt,Lt,Pt.width,Pt.height,Et.depth,0,Pt.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?At&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,bt,0,0,0,Pt.width,Pt.height,Et.depth,Mt,Ot,Pt.data):n.texImage3D(a.TEXTURE_2D_ARRAY,bt,Lt,Pt.width,Pt.height,Et.depth,0,Mt,Ot,Pt.data)}else{q&&Ct&&n.texStorage2D(a.TEXTURE_2D,Ft,Lt,ce[0].width,ce[0].height);for(let bt=0,ct=ce.length;bt<ct;bt++)Pt=ce[bt],E.format!==Ni?Mt!==null?q?At&&n.compressedTexSubImage2D(a.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Mt,Pt.data):n.compressedTexImage2D(a.TEXTURE_2D,bt,Lt,Pt.width,Pt.height,0,Pt.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?At&&n.texSubImage2D(a.TEXTURE_2D,bt,0,0,Pt.width,Pt.height,Mt,Ot,Pt.data):n.texImage2D(a.TEXTURE_2D,bt,Lt,Pt.width,Pt.height,0,Mt,Ot,Pt.data)}else if(E.isDataArrayTexture)if(q){if(Ct&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ft,Lt,Et.width,Et.height,Et.depth),At)if(E.layerUpdates.size>0){const bt=Pv(Et.width,Et.height,E.format,E.type);for(const ct of E.layerUpdates){const It=Et.data.subarray(ct*bt/Et.data.BYTES_PER_ELEMENT,(ct+1)*bt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ct,Et.width,Et.height,1,Mt,Ot,It)}E.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Mt,Ot,Et.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Lt,Et.width,Et.height,Et.depth,0,Mt,Ot,Et.data);else if(E.isData3DTexture)q?(Ct&&n.texStorage3D(a.TEXTURE_3D,Ft,Lt,Et.width,Et.height,Et.depth),At&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Mt,Ot,Et.data)):n.texImage3D(a.TEXTURE_3D,0,Lt,Et.width,Et.height,Et.depth,0,Mt,Ot,Et.data);else if(E.isFramebufferTexture){if(Ct)if(q)n.texStorage2D(a.TEXTURE_2D,Ft,Lt,Et.width,Et.height);else{let bt=Et.width,ct=Et.height;for(let It=0;It<Ft;It++)n.texImage2D(a.TEXTURE_2D,It,Lt,bt,ct,0,Mt,Ot,null),bt>>=1,ct>>=1}}else if(ce.length>0){if(q&&Ct){const bt=qt(ce[0]);n.texStorage2D(a.TEXTURE_2D,Ft,Lt,bt.width,bt.height)}for(let bt=0,ct=ce.length;bt<ct;bt++)Pt=ce[bt],q?At&&n.texSubImage2D(a.TEXTURE_2D,bt,0,0,Mt,Ot,Pt):n.texImage2D(a.TEXTURE_2D,bt,Lt,Mt,Ot,Pt);E.generateMipmaps=!1}else if(q){if(Ct){const bt=qt(Et);n.texStorage2D(a.TEXTURE_2D,Ft,Lt,bt.width,bt.height)}At&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Mt,Ot,Et)}else n.texImage2D(a.TEXTURE_2D,0,Lt,Mt,Ot,Et);M(E)&&S(pt),Xt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function vt(O,E,Y){if(E.image.length!==6)return;const pt=_t(O,E),St=E.source;n.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+Y);const dt=r.get(St);if(St.version!==dt.__version||pt===!0){n.activeTexture(a.TEXTURE0+Y);const Xt=Te.getPrimaries(Te.workingColorSpace),wt=E.colorSpace===lr?null:Te.getPrimaries(E.colorSpace),Zt=E.colorSpace===lr||Xt===wt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let ct=0;ct<6;ct++)!te&&!Et?Mt[ct]=A(E.image[ct],!0,o.maxCubemapSize):Mt[ct]=Et?E.image[ct].image:E.image[ct],Mt[ct]=Ne(E,Mt[ct]);const Ot=Mt[0],Lt=c.convert(E.format,E.colorSpace),Pt=c.convert(E.type),ce=N(E.internalFormat,Lt,Pt,E.colorSpace),q=E.isVideoTexture!==!0,Ct=dt.__version===void 0||pt===!0,At=St.dataReady;let Ft=H(E,Ot);j(a.TEXTURE_CUBE_MAP,E);let bt;if(te){q&&Ct&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ft,ce,Ot.width,Ot.height);for(let ct=0;ct<6;ct++){bt=Mt[ct].mipmaps;for(let It=0;It<bt.length;It++){const ne=bt[It];E.format!==Ni?Lt!==null?q?At&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,0,0,ne.width,ne.height,Lt,ne.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,ce,ne.width,ne.height,0,ne.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?At&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,0,0,ne.width,ne.height,Lt,Pt,ne.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It,ce,ne.width,ne.height,0,Lt,Pt,ne.data)}}}else{if(bt=E.mipmaps,q&&Ct){bt.length>0&&Ft++;const ct=qt(Mt[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ft,ce,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Et){q?At&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Mt[ct].width,Mt[ct].height,Lt,Pt,Mt[ct].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,Mt[ct].width,Mt[ct].height,0,Lt,Pt,Mt[ct].data);for(let It=0;It<bt.length;It++){const Oe=bt[It].image[ct].image;q?At&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,0,0,Oe.width,Oe.height,Lt,Pt,Oe.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,ce,Oe.width,Oe.height,0,Lt,Pt,Oe.data)}}else{q?At&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt,Pt,Mt[ct]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ce,Lt,Pt,Mt[ct]);for(let It=0;It<bt.length;It++){const ne=bt[It];q?At&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,0,0,Lt,Pt,ne.image[ct]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ct,It+1,ce,Lt,Pt,ne.image[ct])}}}M(E)&&S(a.TEXTURE_CUBE_MAP),dt.__version=St.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Tt(O,E,Y,pt,St,dt){const Xt=c.convert(Y.format,Y.colorSpace),wt=c.convert(Y.type),Zt=N(Y.internalFormat,Xt,wt,Y.colorSpace),te=r.get(E),Et=r.get(Y);if(Et.__renderTarget=E,!te.__hasExternalTextures){const Mt=Math.max(1,E.width>>dt),Ot=Math.max(1,E.height>>dt);St===a.TEXTURE_3D||St===a.TEXTURE_2D_ARRAY?n.texImage3D(St,dt,Zt,Mt,Ot,E.depth,0,Xt,wt,null):n.texImage2D(St,dt,Zt,Mt,Ot,0,Xt,wt,null)}n.bindFramebuffer(a.FRAMEBUFFER,O),qe(E)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pt,St,Et.__webglTexture,0,k(E)):(St===a.TEXTURE_2D||St>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,pt,St,Et.__webglTexture,dt),n.bindFramebuffer(a.FRAMEBUFFER,null)}function kt(O,E,Y){if(a.bindRenderbuffer(a.RENDERBUFFER,O),E.depthBuffer){const pt=E.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,dt=U(E.stencilBuffer,St),Xt=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;qe(E)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,k(E),dt,E.width,E.height):Y?a.renderbufferStorageMultisample(a.RENDERBUFFER,k(E),dt,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,dt,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Xt,a.RENDERBUFFER,O)}else{const pt=E.textures;for(let St=0;St<pt.length;St++){const dt=pt[St],Xt=c.convert(dt.format,dt.colorSpace),wt=c.convert(dt.type),Zt=N(dt.internalFormat,Xt,wt,dt.colorSpace);qe(E)?p.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,k(E),Zt,E.width,E.height):Y?a.renderbufferStorageMultisample(a.RENDERBUFFER,k(E),Zt,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Zt,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Kt(O,E,Y){const pt=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=r.get(E.depthTexture);if(St.__renderTarget=E,(!St.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt){if(St.__webglInit===void 0&&(St.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),St.__webglTexture===void 0){St.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,St.__webglTexture),j(a.TEXTURE_CUBE_MAP,E.depthTexture);const te=c.convert(E.depthTexture.format),Et=c.convert(E.depthTexture.type);let Mt;E.depthTexture.format===Aa?Mt=a.DEPTH_COMPONENT24:E.depthTexture.format===Ir&&(Mt=a.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Mt,E.width,E.height,0,te,Et,null)}}else Q(E.depthTexture,0);const dt=St.__webglTexture,Xt=k(E),wt=pt?a.TEXTURE_CUBE_MAP_POSITIVE_X+Y:a.TEXTURE_2D,Zt=E.depthTexture.format===Ir?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===Aa)qe(E)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Zt,wt,dt,0,Xt):a.framebufferTexture2D(a.FRAMEBUFFER,Zt,wt,dt,0);else if(E.depthTexture.format===Ir)qe(E)?p.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Zt,wt,dt,0,Xt):a.framebufferTexture2D(a.FRAMEBUFFER,Zt,wt,dt,0);else throw new Error("Unknown depthTexture format")}function $t(O){const E=r.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=pt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let pt=0;pt<6;pt++)Kt(E.__webglFramebuffer[pt],O,pt);else{const pt=O.texture.mipmaps;pt&&pt.length>0?Kt(E.__webglFramebuffer[0],O,0):Kt(E.__webglFramebuffer,O,0)}else if(Y){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=a.createRenderbuffer(),kt(E.__webglDepthbuffer[pt],O,!1);else{const St=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[pt];a.bindRenderbuffer(a.RENDERBUFFER,dt),a.framebufferRenderbuffer(a.FRAMEBUFFER,St,a.RENDERBUFFER,dt)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),kt(E.__webglDepthbuffer,O,!1);else{const St=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,dt),a.framebufferRenderbuffer(a.FRAMEBUFFER,St,a.RENDERBUFFER,dt)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function Qe(O,E,Y){const pt=r.get(O);E!==void 0&&Tt(pt.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Y!==void 0&&$t(O)}function _e(O){const E=O.texture,Y=r.get(O),pt=r.get(E);O.addEventListener("dispose",z);const St=O.textures,dt=O.isWebGLCubeRenderTarget===!0,Xt=St.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=a.createTexture()),pt.__version=E.version,u.memory.textures++),dt){Y.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[wt]=[];for(let Zt=0;Zt<E.mipmaps.length;Zt++)Y.__webglFramebuffer[wt][Zt]=a.createFramebuffer()}else Y.__webglFramebuffer[wt]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)Y.__webglFramebuffer[wt]=a.createFramebuffer()}else Y.__webglFramebuffer=a.createFramebuffer();if(Xt)for(let wt=0,Zt=St.length;wt<Zt;wt++){const te=r.get(St[wt]);te.__webglTexture===void 0&&(te.__webglTexture=a.createTexture(),u.memory.textures++)}if(O.samples>0&&qe(O)===!1){Y.__webglMultisampledFramebuffer=a.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const Zt=St[wt];Y.__webglColorRenderbuffer[wt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Y.__webglColorRenderbuffer[wt]);const te=c.convert(Zt.format,Zt.colorSpace),Et=c.convert(Zt.type),Mt=N(Zt.internalFormat,te,Et,Zt.colorSpace,O.isXRRenderTarget===!0),Ot=k(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot,Mt,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+wt,a.RENDERBUFFER,Y.__webglColorRenderbuffer[wt])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=a.createRenderbuffer(),kt(Y.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(dt){n.bindTexture(a.TEXTURE_CUBE_MAP,pt.__webglTexture),j(a.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Zt=0;Zt<E.mipmaps.length;Zt++)Tt(Y.__webglFramebuffer[wt][Zt],O,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Zt);else Tt(Y.__webglFramebuffer[wt],O,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(E)&&S(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xt){for(let wt=0,Zt=St.length;wt<Zt;wt++){const te=St[wt],Et=r.get(te);let Mt=a.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Mt=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Mt,Et.__webglTexture),j(Mt,te),Tt(Y.__webglFramebuffer,O,te,a.COLOR_ATTACHMENT0+wt,Mt,0),M(te)&&S(Mt)}n.unbindTexture()}else{let wt=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(wt,pt.__webglTexture),j(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Zt=0;Zt<E.mipmaps.length;Zt++)Tt(Y.__webglFramebuffer[Zt],O,E,a.COLOR_ATTACHMENT0,wt,Zt);else Tt(Y.__webglFramebuffer,O,E,a.COLOR_ATTACHMENT0,wt,0);M(E)&&S(wt),n.unbindTexture()}O.depthBuffer&&$t(O)}function pe(O){const E=O.textures;for(let Y=0,pt=E.length;Y<pt;Y++){const St=E[Y];if(M(St)){const dt=w(O),Xt=r.get(St).__webglTexture;n.bindTexture(dt,Xt),S(dt),n.unbindTexture()}}}const De=[],oe=[];function Ke(O){if(O.samples>0){if(qe(O)===!1){const E=O.textures,Y=O.width,pt=O.height;let St=a.COLOR_BUFFER_BIT;const dt=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Xt=r.get(O),wt=E.length>1;if(wt)for(let te=0;te<E.length;te++)n.bindFramebuffer(a.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+te,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Xt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+te,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Zt=O.texture.mipmaps;Zt&&Zt.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let te=0;te<E.length;te++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=a.STENCIL_BUFFER_BIT)),wt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const Et=r.get(E[te]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Et,0)}a.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,St,a.NEAREST),m===!0&&(De.length=0,oe.length=0,De.push(a.COLOR_ATTACHMENT0+te),O.depthBuffer&&O.resolveDepthBuffer===!1&&(De.push(dt),oe.push(dt),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,oe)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),wt)for(let te=0;te<E.length;te++){n.bindFramebuffer(a.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+te,a.RENDERBUFFER,Xt.__webglColorRenderbuffer[te]);const Et=r.get(E[te]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Xt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+te,a.TEXTURE_2D,Et,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function k(O){return Math.min(o.maxSamples,O.samples)}function qe(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(O){const E=u.render.frame;_.get(O)!==E&&(_.set(O,E),O.update())}function Ne(O,E){const Y=O.colorSpace,pt=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==js&&Y!==lr&&(Te.getTransfer(Y)===ze?(pt!==Ni||St!==_i)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",Y)),E}function qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=st,this.rebindTextures=Qe,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function f3(a,t){function n(r,o=lr){let c;const u=Te.getTransfer(o);if(r===_i)return a.UNSIGNED_BYTE;if(r===Kp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Qp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Bx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Ix)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Fx)return a.BYTE;if(r===zx)return a.SHORT;if(r===fl)return a.UNSIGNED_SHORT;if(r===Zp)return a.INT;if(r===Yi)return a.UNSIGNED_INT;if(r===Vi)return a.FLOAT;if(r===Ta)return a.HALF_FLOAT;if(r===Hx)return a.ALPHA;if(r===Gx)return a.RGB;if(r===Ni)return a.RGBA;if(r===Aa)return a.DEPTH_COMPONENT;if(r===Ir)return a.DEPTH_STENCIL;if(r===Vx)return a.RED;if(r===Jp)return a.RED_INTEGER;if(r===Ys)return a.RG;if(r===$p)return a.RG_INTEGER;if(r===tm)return a.RGBA_INTEGER;if(r===pu||r===mu||r===gu||r===_u)if(u===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ep||r===np||r===ip||r===ap)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ep)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===np)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ip)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ap)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rp||r===sp||r===op||r===lp||r===cp||r===up||r===fp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===rp||r===sp)return u===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===op)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===lp)return c.COMPRESSED_R11_EAC;if(r===cp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===up)return c.COMPRESSED_RG11_EAC;if(r===fp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp||r===xp||r===yp||r===Sp||r===Mp||r===bp||r===Ep||r===Tp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===dp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_p)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ep)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tp)return u===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ap||r===Rp||r===Cp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Ap)return u===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wp||r===Dp||r===Up||r===Np)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===wp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Dp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Up)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const d3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const r=new ty(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new ji({vertexShader:d3,fragmentShader:h3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ca(new Vu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m3 extends $s{constructor(t,n){super();const r=this;let o=null,c=1,u=null,p="local-floor",m=1,h=null,_=null,v=null,g=null,x=null,b=null;const A=typeof XRWebGLBinding<"u",M=new p3,S={},w=n.getContextAttributes();let N=null,U=null;const H=[],I=[],z=new Ve;let T=null;const D=new gi;D.viewport=new an;const ut=new gi;ut.viewport=new an;const B=[D,ut],V=new Ab;let K=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let vt=H[nt];return vt===void 0&&(vt=new gh,H[nt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(nt){let vt=H[nt];return vt===void 0&&(vt=new gh,H[nt]=vt),vt.getGripSpace()},this.getHand=function(nt){let vt=H[nt];return vt===void 0&&(vt=new gh,H[nt]=vt),vt.getHandSpace()};function Q(nt){const vt=I.indexOf(nt.inputSource);if(vt===-1)return;const Tt=H[vt];Tt!==void 0&&(Tt.update(nt.inputSource,nt.frame,h||u),Tt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function L(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",L),o.removeEventListener("inputsourceschange",F);for(let nt=0;nt<H.length;nt++){const vt=I[nt];vt!==null&&(I[nt]=null,H[nt].disconnect(vt))}K=null,at=null,M.reset();for(const nt in S)delete S[nt];t.setRenderTarget(N),x=null,g=null,v=null,o=null,U=null,zt.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,r.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){p=nt,r.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(nt){if(o=nt,o!==null){if(N=t.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",L),o.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,kt=null,Kt=null;w.depth&&(Kt=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Tt=w.stencil?Ir:Aa,kt=w.stencil?dl:Yi);const $t={colorFormat:n.RGBA8,depthFormat:Kt,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer($t),o.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new Wi(g.textureWidth,g.textureHeight,{format:Ni,type:_i,depthTexture:new hl(g.textureWidth,g.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Tt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),U=new Wi(x.framebufferWidth,x.framebufferHeight,{format:Ni,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(p),zt.setContext(o),zt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(nt){for(let vt=0;vt<nt.removed.length;vt++){const Tt=nt.removed[vt],kt=I.indexOf(Tt);kt>=0&&(I[kt]=null,H[kt].disconnect(Tt))}for(let vt=0;vt<nt.added.length;vt++){const Tt=nt.added[vt];let kt=I.indexOf(Tt);if(kt===-1){for(let $t=0;$t<H.length;$t++)if($t>=I.length){I.push(Tt),kt=$t;break}else if(I[$t]===null){I[$t]=Tt,kt=$t;break}if(kt===-1)break}const Kt=H[kt];Kt&&Kt.connect(Tt)}}const st=new it,ft=new it;function yt(nt,vt,Tt){st.setFromMatrixPosition(vt.matrixWorld),ft.setFromMatrixPosition(Tt.matrixWorld);const kt=st.distanceTo(ft),Kt=vt.projectionMatrix.elements,$t=Tt.projectionMatrix.elements,Qe=Kt[14]/(Kt[10]-1),_e=Kt[14]/(Kt[10]+1),pe=(Kt[9]+1)/Kt[5],De=(Kt[9]-1)/Kt[5],oe=(Kt[8]-1)/Kt[0],Ke=($t[8]+1)/$t[0],k=Qe*oe,qe=Qe*Ke,be=kt/(-oe+Ke),Ne=be*-oe;if(vt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ne),nt.translateZ(be),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Kt[10]===-1)nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const qt=Qe+be,O=_e+be,E=k-Ne,Y=qe+(kt-Ne),pt=pe*_e/O*qt,St=De*_e/O*qt;nt.projectionMatrix.makePerspective(E,Y,pt,St,qt,O),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function P(nt,vt){vt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(vt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(o===null)return;let vt=nt.near,Tt=nt.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),V.near=ut.near=D.near=vt,V.far=ut.far=D.far=Tt,(K!==V.near||at!==V.far)&&(o.updateRenderState({depthNear:V.near,depthFar:V.far}),K=V.near,at=V.far),V.layers.mask=nt.layers.mask|6,D.layers.mask=V.layers.mask&-5,ut.layers.mask=V.layers.mask&-3;const kt=nt.parent,Kt=V.cameras;P(V,kt);for(let $t=0;$t<Kt.length;$t++)P(Kt[$t],kt);Kt.length===2?yt(V,D,ut):V.projectionMatrix.copy(D.projectionMatrix),j(nt,V,kt)};function j(nt,vt,Tt){Tt===null?nt.matrix.copy(vt.matrixWorld):(nt.matrix.copy(Tt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(vt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(vt.projectionMatrix),nt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Lp*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(g===null&&x===null))return m},this.setFoveation=function(nt){m=nt,g!==null&&(g.fixedFoveation=nt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(V)},this.getCameraTexture=function(nt){return S[nt]};let _t=null;function Rt(nt,vt){if(_=vt.getViewerPose(h||u),b=vt,_!==null){const Tt=_.views;x!==null&&(t.setRenderTargetFramebuffer(U,x.framebuffer),t.setRenderTarget(U));let kt=!1;Tt.length!==V.cameras.length&&(V.cameras.length=0,kt=!0);for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e];let De=null;if(x!==null)De=x.getViewport(pe);else{const Ke=v.getViewSubImage(g,pe);De=Ke.viewport,_e===0&&(t.setRenderTargetTextures(U,Ke.colorTexture,Ke.depthStencilTexture),t.setRenderTarget(U))}let oe=B[_e];oe===void 0&&(oe=new gi,oe.layers.enable(_e),oe.viewport=new an,B[_e]=oe),oe.matrix.fromArray(pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(De.x,De.y,De.width,De.height),_e===0&&(V.matrix.copy(oe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),kt===!0&&V.cameras.push(oe)}const Kt=o.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const _e=v.getDepthInformation(Tt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,o.renderState)}if(Kt&&Kt.includes("camera-access")&&A){t.state.unbindTexture(),v=r.getBinding();for(let _e=0;_e<Tt.length;_e++){const pe=Tt[_e].camera;if(pe){let De=S[pe];De||(De=new ty,S[pe]=De);const oe=v.getCameraImage(pe);De.sourceTexture=oe}}}}for(let Tt=0;Tt<H.length;Tt++){const kt=I[Tt],Kt=H[Tt];kt!==null&&Kt!==void 0&&Kt.update(kt,vt,h||u)}_t&&_t(nt,vt),vt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:vt}),b=null}const zt=new ay;zt.setAnimationLoop(Rt),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}}const Or=new Ra,g3=new tn;function _3(a,t){function n(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,ey(a)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function o(M,S,w,N,U){S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&x(M,S,U)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),A(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(u(M,S),S.isLineDashedMaterial&&p(M,S)):S.isPointsMaterial?m(M,S,w,N):S.isSpriteMaterial?h(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,n(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,n(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,n(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,n(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=t.get(S),N=w.envMap,U=w.envMapRotation;N&&(M.envMap.value=N,Or.copy(U),Or.x*=-1,Or.y*=-1,Or.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),M.envMapRotation.value.setFromMatrix4(g3.makeRotationFromEuler(Or)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,M.aoMapTransform))}function u(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform))}function p(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,w,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=N*.5,S.map&&(M.map.value=S.map,n(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function A(M,S){const w=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function v3(a,t,n,r){let o={},c={},u=[];const p=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const U=N.program;r.uniformBlockBinding(w,U)}function h(w,N){let U=o[w.id];U===void 0&&(b(w),U=_(w),o[w.id]=U,w.addEventListener("dispose",M));const H=N.program;r.updateUBOMapping(w,H);const I=t.render.frame;c[w.id]!==I&&(g(w),c[w.id]=I)}function _(w){const N=v();w.__bindingPointIndex=N;const U=a.createBuffer(),H=w.__size,I=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,H,I),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,N,U),U}function v(){for(let w=0;w<p;w++)if(u.indexOf(w)===-1)return u.push(w),w;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const N=o[w.id],U=w.uniforms,H=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,N);for(let I=0,z=U.length;I<z;I++){const T=Array.isArray(U[I])?U[I]:[U[I]];for(let D=0,ut=T.length;D<ut;D++){const B=T[D];if(x(B,I,D,H)===!0){const V=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let at=0;for(let Q=0;Q<K.length;Q++){const L=K[Q],F=A(L);typeof L=="number"||typeof L=="boolean"?(B.__data[0]=L,a.bufferSubData(a.UNIFORM_BUFFER,V+at,B.__data)):L.isMatrix3?(B.__data[0]=L.elements[0],B.__data[1]=L.elements[1],B.__data[2]=L.elements[2],B.__data[3]=0,B.__data[4]=L.elements[3],B.__data[5]=L.elements[4],B.__data[6]=L.elements[5],B.__data[7]=0,B.__data[8]=L.elements[6],B.__data[9]=L.elements[7],B.__data[10]=L.elements[8],B.__data[11]=0):(L.toArray(B.__data,at),at+=F.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,V,B.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(w,N,U,H){const I=w.value,z=N+"_"+U;if(H[z]===void 0)return typeof I=="number"||typeof I=="boolean"?H[z]=I:H[z]=I.clone(),!0;{const T=H[z];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return H[z]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function b(w){const N=w.uniforms;let U=0;const H=16;for(let z=0,T=N.length;z<T;z++){const D=Array.isArray(N[z])?N[z]:[N[z]];for(let ut=0,B=D.length;ut<B;ut++){const V=D[ut],K=Array.isArray(V.value)?V.value:[V.value];for(let at=0,Q=K.length;at<Q;at++){const L=K[at],F=A(L),st=U%H,ft=st%F.boundary,yt=st+ft;U+=ft,yt!==0&&H-yt<F.storage&&(U+=H-yt),V.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=U,U+=F.storage}}}const I=U%H;return I>0&&(U+=H-I),w.__size=U,w.__cache={},this}function A(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",w),N}function M(w){const N=w.target;N.removeEventListener("dispose",M);const U=u.indexOf(N.__bindingPointIndex);u.splice(U,1),a.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function S(){for(const w in o)a.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:m,update:h,dispose:S}}const x3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function y3(){return Hi===null&&(Hi=new fb(x3,16,16,Ys,Ta),Hi.name="DFG_LUT",Hi.minFilter=Cn,Hi.magFilter=Cn,Hi.wrapS=Ma,Hi.wrapT=Ma,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class S3{constructor(t={}){const{canvas:n=V1(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=_i}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const A=x,M=new Set([tm,$p,Jp]),S=new Set([_i,Yi,fl,dl,Kp,Qp]),w=new Uint32Array(4),N=new Int32Array(4);let U=null,H=null;const I=[],z=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let ut=!1;this._outputColorSpace=mi;let B=0,V=0,K=null,at=-1,Q=null;const L=new an,F=new an;let st=null;const ft=new Me(0);let yt=0,P=n.width,j=n.height,_t=1,Rt=null,zt=null;const nt=new an(0,0,P,j),vt=new an(0,0,P,j);let Tt=!1;const kt=new Kx;let Kt=!1,$t=!1;const Qe=new tn,_e=new it,pe=new an,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ke(){return K===null?_t:1}let k=r;function qe(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:o,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jp}`),n.addEventListener("webglcontextlost",It,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),k===null){const W="webgl2";if(k=qe(W,C),k===null)throw qe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw we("WebGLRenderer: "+C.message),C}let be,Ne,qt,O,E,Y,pt,St,dt,Xt,wt,Zt,te,Et,Mt,Ot,Lt,Pt,ce,q,Ct,At,Ft;function bt(){be=new SA(k),be.init(),Ct=new f3(k,be),Ne=new hA(k,be,t,Ct),qt=new c3(k,be),Ne.reversedDepthBuffer&&g&&qt.buffers.depth.setReversed(!0),O=new EA(k),E=new Z2,Y=new u3(k,be,qt,E,Ne,Ct,O),pt=new yA(D),St=new wb(k),At=new fA(k,St),dt=new MA(k,St,O,At),Xt=new AA(k,dt,St,At,O),Pt=new TA(k,Ne,Y),Mt=new pA(E),wt=new j2(D,pt,be,Ne,At,Mt),Zt=new _3(D,E),te=new Q2,Et=new i3(be),Lt=new uA(D,pt,qt,Xt,b,m),Ot=new l3(D,Xt,Ne),Ft=new v3(k,O,Ne,qt),ce=new dA(k,be,O),q=new bA(k,be,O),O.programs=wt.programs,D.capabilities=Ne,D.extensions=be,D.properties=E,D.renderLists=te,D.shadowMap=Ot,D.state=qt,D.info=O}bt(),A!==_i&&(T=new CA(A,n.width,n.height,o,c));const ct=new m3(D,k);this.xr=ct,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(C){C!==void 0&&(_t=C,this.setSize(P,j,!1))},this.getSize=function(C){return C.set(P,j)},this.setSize=function(C,W,ot=!0){if(ct.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,j=W,n.width=Math.floor(C*_t),n.height=Math.floor(W*_t),ot===!0&&(n.style.width=C+"px",n.style.height=W+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(P*_t,j*_t).floor()},this.setDrawingBufferSize=function(C,W,ot){P=C,j=W,_t=ot,n.width=Math.floor(C*ot),n.height=Math.floor(W*ot),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(A===_i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,W,ot,et){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,W,ot,et),qt.viewport(L.copy(nt).multiplyScalar(_t).round())},this.getScissor=function(C){return C.copy(vt)},this.setScissor=function(C,W,ot,et){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,W,ot,et),qt.scissor(F.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(C){qt.setScissorTest(Tt=C)},this.setOpaqueSort=function(C){Rt=C},this.setTransparentSort=function(C){zt=C},this.getClearColor=function(C){return C.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,ot=!0){let et=0;if(C){let J=!1;if(K!==null){const Dt=K.texture.format;J=M.has(Dt)}if(J){const Dt=K.texture.type,Bt=S.has(Dt),Ut=Lt.getClearColor(),Wt=Lt.getClearAlpha(),jt=Ut.r,ee=Ut.g,re=Ut.b;Bt?(w[0]=jt,w[1]=ee,w[2]=re,w[3]=Wt,k.clearBufferuiv(k.COLOR,0,w)):(N[0]=jt,N[1]=ee,N[2]=re,N[3]=Wt,k.clearBufferiv(k.COLOR,0,N))}else et|=k.COLOR_BUFFER_BIT}W&&(et|=k.DEPTH_BUFFER_BIT),ot&&(et|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&k.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",It,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),Lt.dispose(),te.dispose(),Et.dispose(),E.dispose(),pt.dispose(),Xt.dispose(),At.dispose(),Ft.dispose(),wt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",qr),ct.removeEventListener("sessionend",Yr),Oi.stop()};function It(C){C.preventDefault(),dv("WebGLRenderer: Context Lost."),ut=!0}function ne(){dv("WebGLRenderer: Context Restored."),ut=!1;const C=O.autoReset,W=Ot.enabled,ot=Ot.autoUpdate,et=Ot.needsUpdate,J=Ot.type;bt(),O.autoReset=C,Ot.enabled=W,Ot.autoUpdate=ot,Ot.needsUpdate=et,Ot.type=J}function Oe(C){we("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ee(C){const W=C.target;W.removeEventListener("dispose",Ee),wn(W)}function wn(C){xi(C),E.remove(C)}function xi(C){const W=E.get(C).programs;W!==void 0&&(W.forEach(function(ot){wt.releaseProgram(ot)}),C.isShaderMaterial&&wt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ot,et,J,Dt){W===null&&(W=De);const Bt=J.isMesh&&J.matrixWorld.determinant()<0,Ut=Al(C,W,ot,et,J);qt.setMaterial(et,Bt);let Wt=ot.index,jt=1;if(et.wireframe===!0){if(Wt=dt.getWireframeAttribute(ot),Wt===void 0)return;jt=2}const ee=ot.drawRange,re=ot.attributes.position;let Ht=ee.start*jt,ue=(ee.start+ee.count)*jt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*jt),ue=Math.min(ue,(Dt.start+Dt.count)*jt)),Wt!==null?(Ht=Math.max(Ht,0),ue=Math.min(ue,Wt.count)):re!=null&&(Ht=Math.max(Ht,0),ue=Math.min(ue,re.count));const Ye=ue-Ht;if(Ye<0||Ye===1/0)return;At.setup(J,et,Ut,ot,Wt);let je,Ae=ce;if(Wt!==null&&(je=St.get(Wt),Ae=q,Ae.setIndex(je)),J.isMesh)et.wireframe===!0?(qt.setLineWidth(et.wireframeLinewidth*Ke()),Ae.setMode(k.LINES)):Ae.setMode(k.TRIANGLES);else if(J.isLine){let pn=et.linewidth;pn===void 0&&(pn=1),qt.setLineWidth(pn*Ke()),J.isLineSegments?Ae.setMode(k.LINES):J.isLineLoop?Ae.setMode(k.LINE_LOOP):Ae.setMode(k.LINE_STRIP)}else J.isPoints?Ae.setMode(k.POINTS):J.isSprite&&Ae.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Au("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Ae.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const pn=J._multiDrawStarts,Vt=J._multiDrawCounts,Dn=J._multiDrawCount,ae=Wt?St.get(Wt).bytesPerElement:1,Un=E.get(et).currentProgram.getUniforms();for(let jn=0;jn<Dn;jn++)Un.setValue(k,"_gl_DrawID",jn),Ae.render(pn[jn]/ae,Vt[jn])}else if(J.isInstancedMesh)Ae.renderInstances(Ht,Ye,J.count);else if(ot.isInstancedBufferGeometry){const pn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Vt=Math.min(ot.instanceCount,pn);Ae.renderInstances(Ht,Ye,Vt)}else Ae.render(Ht,Ye)};function io(C,W,ot){C.transparent===!0&&C.side===Sa&&C.forceSinglePass===!1?(C.side=qn,C.needsUpdate=!0,Da(C,W,ot),C.side=ur,C.needsUpdate=!0,Da(C,W,ot),C.side=Sa):Da(C,W,ot)}this.compile=function(C,W,ot=null){ot===null&&(ot=C),H=Et.get(ot),H.init(W),z.push(H),ot.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(H.pushLight(J),J.castShadow&&H.pushShadow(J))}),C!==ot&&C.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(H.pushLight(J),J.castShadow&&H.pushShadow(J))}),H.setupLights();const et=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Dt=J.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){const Ut=Dt[Bt];io(Ut,ot,J),et.add(Ut)}else io(Dt,ot,J),et.add(Dt)}),H=z.pop(),et},this.compileAsync=function(C,W,ot=null){const et=this.compile(C,W,ot);return new Promise(J=>{function Dt(){if(et.forEach(function(Bt){E.get(Bt).currentProgram.isReady()&&et.delete(Bt)}),et.size===0){J(C);return}setTimeout(Dt,10)}be.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Wr=null;function bl(C){Wr&&Wr(C)}function qr(){Oi.stop()}function Yr(){Oi.start()}const Oi=new ay;Oi.setAnimationLoop(bl),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){Wr=C,ct.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},ct.addEventListener("sessionstart",qr),ct.addEventListener("sessionend",Yr),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ut===!0)return;const ot=ct.enabled===!0&&ct.isPresenting===!0,et=T!==null&&(K===null||ot)&&T.begin(D,K);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(W),W=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,W,K),H=Et.get(C,z.length),H.init(W),z.push(H),Qe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),kt.setFromProjectionMatrix(Qe,ki,W.reversedDepth),$t=this.localClippingEnabled,Kt=Mt.init(this.clippingPlanes,$t),U=te.get(C,I.length),U.init(),I.push(U),ct.enabled===!0&&ct.isPresenting===!0){const Bt=D.xr.getDepthSensingMesh();Bt!==null&&jr(Bt,W,-1/0,D.sortObjects)}jr(C,W,0,D.sortObjects),U.finish(),D.sortObjects===!0&&U.sort(Rt,zt),oe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,oe&&Lt.addToRenderList(U,C),this.info.render.frame++,Kt===!0&&Mt.beginShadows();const J=H.state.shadowsArray;if(Ot.render(J,C,W),Kt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&T.hasRenderPass())===!1){const Bt=U.opaque,Ut=U.transmissive;if(H.setupLights(),W.isArrayCamera){const Wt=W.cameras;if(Ut.length>0)for(let jt=0,ee=Wt.length;jt<ee;jt++){const re=Wt[jt];rn(Bt,Ut,C,re)}oe&&Lt.render(C);for(let jt=0,ee=Wt.length;jt<ee;jt++){const re=Wt[jt];yi(U,C,re,re.viewport)}}else Ut.length>0&&rn(Bt,Ut,C,W),oe&&Lt.render(C),yi(U,C,W)}K!==null&&V===0&&(Y.updateMultisampleRenderTarget(K),Y.updateRenderTargetMipmap(K)),et&&T.end(D),C.isScene===!0&&C.onAfterRender(D,C,W),At.resetDefaultState(),at=-1,Q=null,z.pop(),z.length>0?(H=z[z.length-1],Kt===!0&&Mt.setGlobalState(D.clippingPlanes,H.state.camera)):H=null,I.pop(),I.length>0?U=I[I.length-1]:U=null};function jr(C,W,ot,et){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)H.pushLight(C),C.castShadow&&H.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||kt.intersectsSprite(C)){et&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Qe);const Bt=Xt.update(C),Ut=C.material;Ut.visible&&U.push(C,Bt,Ut,ot,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||kt.intersectsObject(C))){const Bt=Xt.update(C),Ut=C.material;if(et&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),pe.copy(Bt.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(Qe)),Array.isArray(Ut)){const Wt=Bt.groups;for(let jt=0,ee=Wt.length;jt<ee;jt++){const re=Wt[jt],Ht=Ut[re.materialIndex];Ht&&Ht.visible&&U.push(C,Bt,Ht,ot,pe.z,re)}}else Ut.visible&&U.push(C,Bt,Ut,ot,pe.z,null)}}const Dt=C.children;for(let Bt=0,Ut=Dt.length;Bt<Ut;Bt++)jr(Dt[Bt],W,ot,et)}function yi(C,W,ot,et){const{opaque:J,transmissive:Dt,transparent:Bt}=C;H.setupLightsView(ot),Kt===!0&&Mt.setGlobalState(D.clippingPlanes,ot),et&&qt.viewport(L.copy(et)),J.length>0&&hn(J,W,ot),Dt.length>0&&hn(Dt,W,ot),Bt.length>0&&hn(Bt,W,ot),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function rn(C,W,ot,et){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[et.id]===void 0){const Ht=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[et.id]=new Wi(1,1,{generateMipmaps:!0,type:Ht?Ta:_i,minFilter:Br,samples:Math.max(4,Ne.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Dt=H.state.transmissionRenderTarget[et.id],Bt=et.viewport||L;Dt.setSize(Bt.z*D.transmissionResolutionScale,Bt.w*D.transmissionResolutionScale);const Ut=D.getRenderTarget(),Wt=D.getActiveCubeFace(),jt=D.getActiveMipmapLevel();D.setRenderTarget(Dt),D.getClearColor(ft),yt=D.getClearAlpha(),yt<1&&D.setClearColor(16777215,.5),D.clear(),oe&&Lt.render(ot);const ee=D.toneMapping;D.toneMapping=Xi;const re=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),H.setupLightsView(et),Kt===!0&&Mt.setGlobalState(D.clippingPlanes,et),hn(C,ot,et),Y.updateMultisampleRenderTarget(Dt),Y.updateRenderTargetMipmap(Dt),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ue=0,Ye=W.length;ue<Ye;ue++){const je=W[ue],{object:Ae,geometry:pn,material:Vt,group:Dn}=je;if(Vt.side===Sa&&Ae.layers.test(et.layers)){const ae=Vt.side;Vt.side=qn,Vt.needsUpdate=!0,Ki(Ae,ot,et,pn,Vt,Dn),Vt.side=ae,Vt.needsUpdate=!0,Ht=!0}}Ht===!0&&(Y.updateMultisampleRenderTarget(Dt),Y.updateRenderTargetMipmap(Dt))}D.setRenderTarget(Ut,Wt,jt),D.setClearColor(ft,yt),re!==void 0&&(et.viewport=re),D.toneMapping=ee}function hn(C,W,ot){const et=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Dt=C.length;J<Dt;J++){const Bt=C[J],{object:Ut,geometry:Wt,group:jt}=Bt;let ee=Bt.material;ee.allowOverride===!0&&et!==null&&(ee=et),Ut.layers.test(ot.layers)&&Ki(Ut,W,ot,Wt,ee,jt)}}function Ki(C,W,ot,et,J,Dt){C.onBeforeRender(D,W,ot,et,J,Dt),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(D,W,ot,et,C,Dt),J.transparent===!0&&J.side===Sa&&J.forceSinglePass===!1?(J.side=qn,J.needsUpdate=!0,D.renderBufferDirect(ot,W,et,J,C,Dt),J.side=ur,J.needsUpdate=!0,D.renderBufferDirect(ot,W,et,J,C,Dt),J.side=Sa):D.renderBufferDirect(ot,W,et,J,C,Dt),C.onAfterRender(D,W,ot,et,J,Dt)}function Da(C,W,ot){W.isScene!==!0&&(W=De);const et=E.get(C),J=H.state.lights,Dt=H.state.shadowsArray,Bt=J.state.version,Ut=wt.getParameters(C,J.state,Dt,W,ot),Wt=wt.getProgramCacheKey(Ut);let jt=et.programs;et.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,et.fog=W.fog;const ee=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;et.envMap=pt.get(C.envMap||et.environment,ee),et.envMapRotation=et.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",Ee),jt=new Map,et.programs=jt);let re=jt.get(Wt);if(re!==void 0){if(et.currentProgram===re&&et.lightsStateVersion===Bt)return Tl(C,Ut),re}else Ut.uniforms=wt.getUniforms(C),C.onBeforeCompile(Ut,D),re=wt.acquireProgram(Ut,Wt),jt.set(Wt,re),et.uniforms=Ut.uniforms;const Ht=et.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ht.clippingPlanes=Mt.uniform),Tl(C,Ut),et.needsLights=ao(C),et.lightsStateVersion=Bt,et.needsLights&&(Ht.ambientLightColor.value=J.state.ambient,Ht.lightProbe.value=J.state.probe,Ht.directionalLights.value=J.state.directional,Ht.directionalLightShadows.value=J.state.directionalShadow,Ht.spotLights.value=J.state.spot,Ht.spotLightShadows.value=J.state.spotShadow,Ht.rectAreaLights.value=J.state.rectArea,Ht.ltc_1.value=J.state.rectAreaLTC1,Ht.ltc_2.value=J.state.rectAreaLTC2,Ht.pointLights.value=J.state.point,Ht.pointLightShadows.value=J.state.pointShadow,Ht.hemisphereLights.value=J.state.hemi,Ht.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ht.spotLightMatrix.value=J.state.spotLightMatrix,Ht.spotLightMap.value=J.state.spotLightMap,Ht.pointShadowMatrix.value=J.state.pointShadowMatrix),et.currentProgram=re,et.uniformsList=null,re}function El(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=vu.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Tl(C,W){const ot=E.get(C);ot.outputColorSpace=W.outputColorSpace,ot.batching=W.batching,ot.batchingColor=W.batchingColor,ot.instancing=W.instancing,ot.instancingColor=W.instancingColor,ot.instancingMorph=W.instancingMorph,ot.skinning=W.skinning,ot.morphTargets=W.morphTargets,ot.morphNormals=W.morphNormals,ot.morphColors=W.morphColors,ot.morphTargetsCount=W.morphTargetsCount,ot.numClippingPlanes=W.numClippingPlanes,ot.numIntersection=W.numClipIntersection,ot.vertexAlphas=W.vertexAlphas,ot.vertexTangents=W.vertexTangents,ot.toneMapping=W.toneMapping}function Al(C,W,ot,et,J){W.isScene!==!0&&(W=De),Y.resetTextureUnits();const Dt=W.fog,Bt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?W.environment:null,Ut=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:js,Wt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,jt=pt.get(et.envMap||Bt,Wt),ee=et.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ht=!!ot.morphAttributes.position,ue=!!ot.morphAttributes.normal,Ye=!!ot.morphAttributes.color;let je=Xi;et.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(je=D.toneMapping);const Ae=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,pn=Ae!==void 0?Ae.length:0,Vt=E.get(et),Dn=H.state.lights;if(Kt===!0&&($t===!0||C!==Q)){const on=C===Q&&et.id===at;Mt.setState(et,C,on)}let ae=!1;et.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Dn.state.version||Vt.outputColorSpace!==Ut||J.isBatchedMesh&&Vt.batching===!1||!J.isBatchedMesh&&Vt.batching===!0||J.isBatchedMesh&&Vt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Vt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Vt.instancing===!1||!J.isInstancedMesh&&Vt.instancing===!0||J.isSkinnedMesh&&Vt.skinning===!1||!J.isSkinnedMesh&&Vt.skinning===!0||J.isInstancedMesh&&Vt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Vt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Vt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Vt.instancingMorph===!1&&J.morphTexture!==null||Vt.envMap!==jt||et.fog===!0&&Vt.fog!==Dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Mt.numPlanes||Vt.numIntersection!==Mt.numIntersection)||Vt.vertexAlphas!==ee||Vt.vertexTangents!==re||Vt.morphTargets!==Ht||Vt.morphNormals!==ue||Vt.morphColors!==Ye||Vt.toneMapping!==je||Vt.morphTargetsCount!==pn)&&(ae=!0):(ae=!0,Vt.__version=et.version);let Un=Vt.currentProgram;ae===!0&&(Un=Da(et,W,J));let jn=!1,Si=!1,Zn=!1;const Le=Un.getUniforms(),sn=Vt.uniforms;if(qt.useProgram(Un.program)&&(jn=!0,Si=!0,Zn=!0),et.id!==at&&(at=et.id,Si=!0),jn||Q!==C){qt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Le.setValue(k,"projectionMatrix",C.projectionMatrix),Le.setValue(k,"viewMatrix",C.matrixWorldInverse);const Mi=Le.map.cameraPosition;Mi!==void 0&&Mi.setValue(k,_e.setFromMatrixPosition(C.matrixWorld)),Ne.logarithmicDepthBuffer&&Le.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Le.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),Q!==C&&(Q=C,Si=!0,Zn=!0)}if(Vt.needsLights&&(Dn.state.directionalShadowMap.length>0&&Le.setValue(k,"directionalShadowMap",Dn.state.directionalShadowMap,Y),Dn.state.spotShadowMap.length>0&&Le.setValue(k,"spotShadowMap",Dn.state.spotShadowMap,Y),Dn.state.pointShadowMap.length>0&&Le.setValue(k,"pointShadowMap",Dn.state.pointShadowMap,Y)),J.isSkinnedMesh){Le.setOptional(k,J,"bindMatrix"),Le.setOptional(k,J,"bindMatrixInverse");const on=J.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Le.setValue(k,"boneTexture",on.boneTexture,Y))}J.isBatchedMesh&&(Le.setOptional(k,J,"batchingTexture"),Le.setValue(k,"batchingTexture",J._matricesTexture,Y),Le.setOptional(k,J,"batchingIdTexture"),Le.setValue(k,"batchingIdTexture",J._indirectTexture,Y),Le.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&Le.setValue(k,"batchingColorTexture",J._colorsTexture,Y));const Nn=ot.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Pt.update(J,ot,Un),(Si||Vt.receiveShadow!==J.receiveShadow)&&(Vt.receiveShadow=J.receiveShadow,Le.setValue(k,"receiveShadow",J.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&W.environment!==null&&(sn.envMapIntensity.value=W.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=y3()),Si&&(Le.setValue(k,"toneMappingExposure",D.toneMappingExposure),Vt.needsLights&&fr(sn,Zn),Dt&&et.fog===!0&&Zt.refreshFogUniforms(sn,Dt),Zt.refreshMaterialUniforms(sn,et,_t,j,H.state.transmissionRenderTarget[C.id]),vu.upload(k,El(Vt),sn,Y)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(vu.upload(k,El(Vt),sn,Y),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Le.setValue(k,"center",J.center),Le.setValue(k,"modelViewMatrix",J.modelViewMatrix),Le.setValue(k,"normalMatrix",J.normalMatrix),Le.setValue(k,"modelMatrix",J.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const on=et.uniformsGroups;for(let Mi=0,Qi=on.length;Mi<Qi;Mi++){const Zr=on[Mi];Ft.update(Zr,Un),Ft.bind(Zr,Un)}}return Un}function fr(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function ao(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(C,W,ot){const et=E.get(C);et.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=W,E.get(C.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:ot,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const ot=E.get(C);ot.__webglFramebuffer=W,ot.__useDefaultFramebuffer=W===void 0};const Ua=k.createFramebuffer();this.setRenderTarget=function(C,W=0,ot=0){K=C,B=W,V=ot;let et=null,J=!1,Dt=!1;if(C){const Ut=E.get(C);if(Ut.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(k.FRAMEBUFFER,Ut.__webglFramebuffer),L.copy(C.viewport),F.copy(C.scissor),st=C.scissorTest,qt.viewport(L),qt.scissor(F),qt.setScissorTest(st),at=-1;return}else if(Ut.__webglFramebuffer===void 0)Y.setupRenderTarget(C);else if(Ut.__hasExternalTextures)Y.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ee=C.depthTexture;if(Ut.__boundDepthTexture!==ee){if(ee!==null&&E.has(ee)&&(C.width!==ee.image.width||C.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(C)}}const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);const jt=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?et=jt[W][ot]:et=jt[W],J=!0):C.samples>0&&Y.useMultisampledRTT(C)===!1?et=E.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?et=jt[ot]:et=jt,L.copy(C.viewport),F.copy(C.scissor),st=C.scissorTest}else L.copy(nt).multiplyScalar(_t).floor(),F.copy(vt).multiplyScalar(_t).floor(),st=Tt;if(ot!==0&&(et=Ua),qt.bindFramebuffer(k.FRAMEBUFFER,et)&&qt.drawBuffers(C,et),qt.viewport(L),qt.scissor(F),qt.setScissorTest(st),J){const Ut=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,ot)}else if(Dt){const Ut=W;for(let Wt=0;Wt<C.textures.length;Wt++){const jt=E.get(C.textures[Wt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Wt,jt.__webglTexture,ot,Ut)}}else if(C!==null&&ot!==0){const Ut=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ut.__webglTexture,ot)}at=-1},this.readRenderTargetPixels=function(C,W,ot,et,J,Dt,Bt,Ut=0){if(!(C&&C.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt){qt.bindFramebuffer(k.FRAMEBUFFER,Wt);try{const jt=C.textures[Ut],ee=jt.format,re=jt.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ut),!Ne.textureFormatReadable(ee)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(re)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-et&&ot>=0&&ot<=C.height-J&&k.readPixels(W,ot,et,J,Ct.convert(ee),Ct.convert(re),Dt)}finally{const jt=K!==null?E.get(K).__webglFramebuffer:null;qt.bindFramebuffer(k.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(C,W,ot,et,J,Dt,Bt,Ut=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt)if(W>=0&&W<=C.width-et&&ot>=0&&ot<=C.height-J){qt.bindFramebuffer(k.FRAMEBUFFER,Wt);const jt=C.textures[Ut],ee=jt.format,re=jt.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ut),!Ne.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ht),k.bufferData(k.PIXEL_PACK_BUFFER,Dt.byteLength,k.STREAM_READ),k.readPixels(W,ot,et,J,Ct.convert(ee),Ct.convert(re),0);const ue=K!==null?E.get(K).__webglFramebuffer:null;qt.bindFramebuffer(k.FRAMEBUFFER,ue);const Ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await k1(k,Ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ht),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Dt),k.deleteBuffer(Ht),k.deleteSync(Ye),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,ot=0){const et=Math.pow(2,-ot),J=Math.floor(C.image.width*et),Dt=Math.floor(C.image.height*et),Bt=W!==null?W.x:0,Ut=W!==null?W.y:0;Y.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ot,0,0,Bt,Ut,J,Dt),qt.unbindTexture()};const Na=k.createFramebuffer(),dr=k.createFramebuffer();this.copyTextureToTexture=function(C,W,ot=null,et=null,J=0,Dt=0){let Bt,Ut,Wt,jt,ee,re,Ht,ue,Ye;const je=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(ot!==null)Bt=ot.max.x-ot.min.x,Ut=ot.max.y-ot.min.y,Wt=ot.isBox3?ot.max.z-ot.min.z:1,jt=ot.min.x,ee=ot.min.y,re=ot.isBox3?ot.min.z:0;else{const sn=Math.pow(2,-J);Bt=Math.floor(je.width*sn),Ut=Math.floor(je.height*sn),C.isDataArrayTexture?Wt=je.depth:C.isData3DTexture?Wt=Math.floor(je.depth*sn):Wt=1,jt=0,ee=0,re=0}et!==null?(Ht=et.x,ue=et.y,Ye=et.z):(Ht=0,ue=0,Ye=0);const Ae=Ct.convert(W.format),pn=Ct.convert(W.type);let Vt;W.isData3DTexture?(Y.setTexture3D(W,0),Vt=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Y.setTexture2DArray(W,0),Vt=k.TEXTURE_2D_ARRAY):(Y.setTexture2D(W,0),Vt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Dn=k.getParameter(k.UNPACK_ROW_LENGTH),ae=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Un=k.getParameter(k.UNPACK_SKIP_PIXELS),jn=k.getParameter(k.UNPACK_SKIP_ROWS),Si=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,je.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,je.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ee),k.pixelStorei(k.UNPACK_SKIP_IMAGES,re);const Zn=C.isDataArrayTexture||C.isData3DTexture,Le=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const sn=E.get(C),Nn=E.get(W),on=E.get(sn.__renderTarget),Mi=E.get(Nn.__renderTarget);qt.bindFramebuffer(k.READ_FRAMEBUFFER,on.__webglFramebuffer),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Qi=0;Qi<Wt;Qi++)Zn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(C).__webglTexture,J,re+Qi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(W).__webglTexture,Dt,Ye+Qi)),k.blitFramebuffer(jt,ee,Bt,Ut,Ht,ue,Bt,Ut,k.DEPTH_BUFFER_BIT,k.NEAREST);qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||E.has(C)){const sn=E.get(C),Nn=E.get(W);qt.bindFramebuffer(k.READ_FRAMEBUFFER,Na),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,dr);for(let on=0;on<Wt;on++)Zn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,J,re+on):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,J),Le?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Nn.__webglTexture,Dt,Ye+on):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Nn.__webglTexture,Dt),J!==0?k.blitFramebuffer(jt,ee,Bt,Ut,Ht,ue,Bt,Ut,k.COLOR_BUFFER_BIT,k.NEAREST):Le?k.copyTexSubImage3D(Vt,Dt,Ht,ue,Ye+on,jt,ee,Bt,Ut):k.copyTexSubImage2D(Vt,Dt,Ht,ue,jt,ee,Bt,Ut);qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Le?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Vt,Dt,Ht,ue,Ye,Bt,Ut,Wt,Ae,pn,je.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Vt,Dt,Ht,ue,Ye,Bt,Ut,Wt,Ae,je.data):k.texSubImage3D(Vt,Dt,Ht,ue,Ye,Bt,Ut,Wt,Ae,pn,je):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Dt,Ht,ue,Bt,Ut,Ae,pn,je.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Dt,Ht,ue,je.width,je.height,Ae,je.data):k.texSubImage2D(k.TEXTURE_2D,Dt,Ht,ue,Bt,Ut,Ae,pn,je);k.pixelStorei(k.UNPACK_ROW_LENGTH,Dn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ae),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Un),k.pixelStorei(k.UNPACK_SKIP_ROWS,jn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Si),Dt===0&&W.generateMipmaps&&k.generateMipmap(Vt),qt.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&Y.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Y.setTextureCube(C,0):C.isData3DTexture?Y.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Y.setTexture2DArray(C,0):Y.setTexture2D(C,0),qt.unbindTexture()},this.resetState=function(){B=0,V=0,K=null,qt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),n.unpackColorSpace=Te._getUnpackColorSpace()}}function xu(a,t){return a==null||t==null?NaN:a<t?-1:a>t?1:a>=t?0:NaN}function M3(a,t){return a==null||t==null?NaN:t<a?-1:t>a?1:t>=a?0:NaN}function uy(a){let t,n,r;a.length!==2?(t=xu,n=(p,m)=>xu(a(p),m),r=(p,m)=>a(p)-m):(t=a===xu||a===M3?a:b3,n=a,r=a);function o(p,m,h=0,_=p.length){if(h<_){if(t(m,m)!==0)return _;do{const v=h+_>>>1;n(p[v],m)<0?h=v+1:_=v}while(h<_)}return h}function c(p,m,h=0,_=p.length){if(h<_){if(t(m,m)!==0)return _;do{const v=h+_>>>1;n(p[v],m)<=0?h=v+1:_=v}while(h<_)}return h}function u(p,m,h=0,_=p.length){const v=o(p,m,h,_-1);return v>h&&r(p[v-1],m)>-r(p[v],m)?v-1:v}return{left:o,center:u,right:c}}function b3(){return 0}function E3(a){return a===null?NaN:+a}const T3=uy(xu),A3=T3.right;uy(E3).center;const R3=Math.sqrt(50),C3=Math.sqrt(10),w3=Math.sqrt(2);function wu(a,t,n){const r=(t-a)/Math.max(0,n),o=Math.floor(Math.log10(r)),c=r/Math.pow(10,o),u=c>=R3?10:c>=C3?5:c>=w3?2:1;let p,m,h;return o<0?(h=Math.pow(10,-o)/u,p=Math.round(a*h),m=Math.round(t*h),p/h<a&&++p,m/h>t&&--m,h=-h):(h=Math.pow(10,o)*u,p=Math.round(a/h),m=Math.round(t/h),p*h<a&&++p,m*h>t&&--m),m<p&&.5<=n&&n<2?wu(a,t,n*2):[p,m,h]}function D3(a,t,n){if(t=+t,a=+a,n=+n,!(n>0))return[];if(a===t)return[a];const r=t<a,[o,c,u]=r?wu(t,a,n):wu(a,t,n);if(!(c>=o))return[];const p=c-o+1,m=new Array(p);if(r)if(u<0)for(let h=0;h<p;++h)m[h]=(c-h)/-u;else for(let h=0;h<p;++h)m[h]=(c-h)*u;else if(u<0)for(let h=0;h<p;++h)m[h]=(o+h)/-u;else for(let h=0;h<p;++h)m[h]=(o+h)*u;return m}function zp(a,t,n){return t=+t,a=+a,n=+n,wu(a,t,n)[2]}function U3(a,t,n){t=+t,a=+a,n=+n;const r=t<a,o=r?zp(t,a,n):zp(a,t,n);return(r?-1:1)*(o<0?1/-o:o)}function fy(a,t){let n;if(t===void 0)for(const r of a)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let o of a)(o=t(o,++r,a))!=null&&(n<o||n===void 0&&o>=o)&&(n=o)}return n}function N3(a){return a}var Hh=1,Gh=2,Bp=3,sl=4,rx=1e-6;function L3(a){return"translate("+a+",0)"}function O3(a){return"translate(0,"+a+")"}function P3(a){return t=>+a(t)}function F3(a,t){return t=Math.max(0,a.bandwidth()-t*2)/2,a.round()&&(t=Math.round(t)),n=>+a(n)+t}function z3(){return!this.__axis}function dy(a,t){var n=[],r=null,o=null,c=6,u=6,p=3,m=typeof window<"u"&&window.devicePixelRatio>1?0:.5,h=a===Hh||a===sl?-1:1,_=a===sl||a===Gh?"x":"y",v=a===Hh||a===Bp?L3:O3;function g(x){var b=r??(t.ticks?t.ticks.apply(t,n):t.domain()),A=o??(t.tickFormat?t.tickFormat.apply(t,n):N3),M=Math.max(c,0)+p,S=t.range(),w=+S[0]+m,N=+S[S.length-1]+m,U=(t.bandwidth?F3:P3)(t.copy(),m),H=x.selection?x.selection():x,I=H.selectAll(".domain").data([null]),z=H.selectAll(".tick").data(b,t).order(),T=z.exit(),D=z.enter().append("g").attr("class","tick"),ut=z.select("line"),B=z.select("text");I=I.merge(I.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),z=z.merge(D),ut=ut.merge(D.append("line").attr("stroke","currentColor").attr(_+"2",h*c)),B=B.merge(D.append("text").attr("fill","currentColor").attr(_,h*M).attr("dy",a===Hh?"0em":a===Bp?"0.71em":"0.32em")),x!==H&&(I=I.transition(x),z=z.transition(x),ut=ut.transition(x),B=B.transition(x),T=T.transition(x).attr("opacity",rx).attr("transform",function(V){return isFinite(V=U(V))?v(V+m):this.getAttribute("transform")}),D.attr("opacity",rx).attr("transform",function(V){var K=this.parentNode.__axis;return v((K&&isFinite(K=K(V))?K:U(V))+m)})),T.remove(),I.attr("d",a===sl||a===Gh?u?"M"+h*u+","+w+"H"+m+"V"+N+"H"+h*u:"M"+m+","+w+"V"+N:u?"M"+w+","+h*u+"V"+m+"H"+N+"V"+h*u:"M"+w+","+m+"H"+N),z.attr("opacity",1).attr("transform",function(V){return v(U(V)+m)}),ut.attr(_+"2",h*c),B.attr(_,h*M).text(A),H.filter(z3).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",a===Gh?"start":a===sl?"end":"middle"),H.each(function(){this.__axis=U})}return g.scale=function(x){return arguments.length?(t=x,g):t},g.ticks=function(){return n=Array.from(arguments),g},g.tickArguments=function(x){return arguments.length?(n=x==null?[]:Array.from(x),g):n.slice()},g.tickValues=function(x){return arguments.length?(r=x==null?null:Array.from(x),g):r&&r.slice()},g.tickFormat=function(x){return arguments.length?(o=x,g):o},g.tickSize=function(x){return arguments.length?(c=u=+x,g):c},g.tickSizeInner=function(x){return arguments.length?(c=+x,g):c},g.tickSizeOuter=function(x){return arguments.length?(u=+x,g):u},g.tickPadding=function(x){return arguments.length?(p=+x,g):p},g.offset=function(x){return arguments.length?(m=+x,g):m},g}function hy(a){return dy(Bp,a)}function B3(a){return dy(sl,a)}var I3={value:()=>{}};function py(){for(var a=0,t=arguments.length,n={},r;a<t;++a){if(!(r=arguments[a]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new yu(n)}function yu(a){this._=a}function H3(a,t){return a.trim().split(/^|\s+/).map(function(n){var r="",o=n.indexOf(".");if(o>=0&&(r=n.slice(o+1),n=n.slice(0,o)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}yu.prototype=py.prototype={constructor:yu,on:function(a,t){var n=this._,r=H3(a+"",n),o,c=-1,u=r.length;if(arguments.length<2){for(;++c<u;)if((o=(a=r[c]).type)&&(o=G3(n[o],a.name)))return o;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++c<u;)if(o=(a=r[c]).type)n[o]=sx(n[o],a.name,t);else if(t==null)for(o in n)n[o]=sx(n[o],a.name,null);return this},copy:function(){var a={},t=this._;for(var n in t)a[n]=t[n].slice();return new yu(a)},call:function(a,t){if((o=arguments.length-2)>0)for(var n=new Array(o),r=0,o,c;r<o;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(a))throw new Error("unknown type: "+a);for(c=this._[a],r=0,o=c.length;r<o;++r)c[r].value.apply(t,n)},apply:function(a,t,n){if(!this._.hasOwnProperty(a))throw new Error("unknown type: "+a);for(var r=this._[a],o=0,c=r.length;o<c;++o)r[o].value.apply(t,n)}};function G3(a,t){for(var n=0,r=a.length,o;n<r;++n)if((o=a[n]).name===t)return o.value}function sx(a,t,n){for(var r=0,o=a.length;r<o;++r)if(a[r].name===t){a[r]=I3,a=a.slice(0,r).concat(a.slice(r+1));break}return n!=null&&a.push({name:t,value:n}),a}var Ip="http://www.w3.org/1999/xhtml";const ox={svg:"http://www.w3.org/2000/svg",xhtml:Ip,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Wu(a){var t=a+="",n=t.indexOf(":");return n>=0&&(t=a.slice(0,n))!=="xmlns"&&(a=a.slice(n+1)),ox.hasOwnProperty(t)?{space:ox[t],local:a}:a}function V3(a){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Ip&&t.documentElement.namespaceURI===Ip?t.createElement(a):t.createElementNS(n,a)}}function k3(a){return function(){return this.ownerDocument.createElementNS(a.space,a.local)}}function my(a){var t=Wu(a);return(t.local?k3:V3)(t)}function X3(){}function sm(a){return a==null?X3:function(){return this.querySelector(a)}}function W3(a){typeof a!="function"&&(a=sm(a));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var c=t[o],u=c.length,p=r[o]=new Array(u),m,h,_=0;_<u;++_)(m=c[_])&&(h=a.call(m,m.__data__,_,c))&&("__data__"in m&&(h.__data__=m.__data__),p[_]=h);return new ri(r,this._parents)}function q3(a){return a==null?[]:Array.isArray(a)?a:Array.from(a)}function Y3(){return[]}function gy(a){return a==null?Y3:function(){return this.querySelectorAll(a)}}function j3(a){return function(){return q3(a.apply(this,arguments))}}function Z3(a){typeof a=="function"?a=j3(a):a=gy(a);for(var t=this._groups,n=t.length,r=[],o=[],c=0;c<n;++c)for(var u=t[c],p=u.length,m,h=0;h<p;++h)(m=u[h])&&(r.push(a.call(m,m.__data__,h,u)),o.push(m));return new ri(r,o)}function _y(a){return function(){return this.matches(a)}}function vy(a){return function(t){return t.matches(a)}}var K3=Array.prototype.find;function Q3(a){return function(){return K3.call(this.children,a)}}function J3(){return this.firstElementChild}function $3(a){return this.select(a==null?J3:Q3(typeof a=="function"?a:vy(a)))}var tR=Array.prototype.filter;function eR(){return Array.from(this.children)}function nR(a){return function(){return tR.call(this.children,a)}}function iR(a){return this.selectAll(a==null?eR:nR(typeof a=="function"?a:vy(a)))}function aR(a){typeof a!="function"&&(a=_y(a));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var c=t[o],u=c.length,p=r[o]=[],m,h=0;h<u;++h)(m=c[h])&&a.call(m,m.__data__,h,c)&&p.push(m);return new ri(r,this._parents)}function xy(a){return new Array(a.length)}function rR(){return new ri(this._enter||this._groups.map(xy),this._parents)}function Du(a,t){this.ownerDocument=a.ownerDocument,this.namespaceURI=a.namespaceURI,this._next=null,this._parent=a,this.__data__=t}Du.prototype={constructor:Du,appendChild:function(a){return this._parent.insertBefore(a,this._next)},insertBefore:function(a,t){return this._parent.insertBefore(a,t)},querySelector:function(a){return this._parent.querySelector(a)},querySelectorAll:function(a){return this._parent.querySelectorAll(a)}};function sR(a){return function(){return a}}function oR(a,t,n,r,o,c){for(var u=0,p,m=t.length,h=c.length;u<h;++u)(p=t[u])?(p.__data__=c[u],r[u]=p):n[u]=new Du(a,c[u]);for(;u<m;++u)(p=t[u])&&(o[u]=p)}function lR(a,t,n,r,o,c,u){var p,m,h=new Map,_=t.length,v=c.length,g=new Array(_),x;for(p=0;p<_;++p)(m=t[p])&&(g[p]=x=u.call(m,m.__data__,p,t)+"",h.has(x)?o[p]=m:h.set(x,m));for(p=0;p<v;++p)x=u.call(a,c[p],p,c)+"",(m=h.get(x))?(r[p]=m,m.__data__=c[p],h.delete(x)):n[p]=new Du(a,c[p]);for(p=0;p<_;++p)(m=t[p])&&h.get(g[p])===m&&(o[p]=m)}function cR(a){return a.__data__}function uR(a,t){if(!arguments.length)return Array.from(this,cR);var n=t?lR:oR,r=this._parents,o=this._groups;typeof a!="function"&&(a=sR(a));for(var c=o.length,u=new Array(c),p=new Array(c),m=new Array(c),h=0;h<c;++h){var _=r[h],v=o[h],g=v.length,x=fR(a.call(_,_&&_.__data__,h,r)),b=x.length,A=p[h]=new Array(b),M=u[h]=new Array(b),S=m[h]=new Array(g);n(_,v,A,M,S,x,t);for(var w=0,N=0,U,H;w<b;++w)if(U=A[w]){for(w>=N&&(N=w+1);!(H=M[N])&&++N<b;);U._next=H||null}}return u=new ri(u,r),u._enter=p,u._exit=m,u}function fR(a){return typeof a=="object"&&"length"in a?a:Array.from(a)}function dR(){return new ri(this._exit||this._groups.map(xy),this._parents)}function hR(a,t,n){var r=this.enter(),o=this,c=this.exit();return typeof a=="function"?(r=a(r),r&&(r=r.selection())):r=r.append(a+""),t!=null&&(o=t(o),o&&(o=o.selection())),n==null?c.remove():n(c),r&&o?r.merge(o).order():o}function pR(a){for(var t=a.selection?a.selection():a,n=this._groups,r=t._groups,o=n.length,c=r.length,u=Math.min(o,c),p=new Array(o),m=0;m<u;++m)for(var h=n[m],_=r[m],v=h.length,g=p[m]=new Array(v),x,b=0;b<v;++b)(x=h[b]||_[b])&&(g[b]=x);for(;m<o;++m)p[m]=n[m];return new ri(p,this._parents)}function mR(){for(var a=this._groups,t=-1,n=a.length;++t<n;)for(var r=a[t],o=r.length-1,c=r[o],u;--o>=0;)(u=r[o])&&(c&&u.compareDocumentPosition(c)^4&&c.parentNode.insertBefore(u,c),c=u);return this}function gR(a){a||(a=_R);function t(v,g){return v&&g?a(v.__data__,g.__data__):!v-!g}for(var n=this._groups,r=n.length,o=new Array(r),c=0;c<r;++c){for(var u=n[c],p=u.length,m=o[c]=new Array(p),h,_=0;_<p;++_)(h=u[_])&&(m[_]=h);m.sort(t)}return new ri(o,this._parents).order()}function _R(a,t){return a<t?-1:a>t?1:a>=t?0:NaN}function vR(){var a=arguments[0];return arguments[0]=this,a.apply(null,arguments),this}function xR(){return Array.from(this)}function yR(){for(var a=this._groups,t=0,n=a.length;t<n;++t)for(var r=a[t],o=0,c=r.length;o<c;++o){var u=r[o];if(u)return u}return null}function SR(){let a=0;for(const t of this)++a;return a}function MR(){return!this.node()}function bR(a){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var o=t[n],c=0,u=o.length,p;c<u;++c)(p=o[c])&&a.call(p,p.__data__,c,o);return this}function ER(a){return function(){this.removeAttribute(a)}}function TR(a){return function(){this.removeAttributeNS(a.space,a.local)}}function AR(a,t){return function(){this.setAttribute(a,t)}}function RR(a,t){return function(){this.setAttributeNS(a.space,a.local,t)}}function CR(a,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(a):this.setAttribute(a,n)}}function wR(a,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(a.space,a.local):this.setAttributeNS(a.space,a.local,n)}}function DR(a,t){var n=Wu(a);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?TR:ER:typeof t=="function"?n.local?wR:CR:n.local?RR:AR)(n,t))}function yy(a){return a.ownerDocument&&a.ownerDocument.defaultView||a.document&&a||a.defaultView}function UR(a){return function(){this.style.removeProperty(a)}}function NR(a,t,n){return function(){this.style.setProperty(a,t,n)}}function LR(a,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(a):this.style.setProperty(a,r,n)}}function OR(a,t,n){return arguments.length>1?this.each((t==null?UR:typeof t=="function"?LR:NR)(a,t,n??"")):Ks(this.node(),a)}function Ks(a,t){return a.style.getPropertyValue(t)||yy(a).getComputedStyle(a,null).getPropertyValue(t)}function PR(a){return function(){delete this[a]}}function FR(a,t){return function(){this[a]=t}}function zR(a,t){return function(){var n=t.apply(this,arguments);n==null?delete this[a]:this[a]=n}}function BR(a,t){return arguments.length>1?this.each((t==null?PR:typeof t=="function"?zR:FR)(a,t)):this.node()[a]}function Sy(a){return a.trim().split(/^|\s+/)}function om(a){return a.classList||new My(a)}function My(a){this._node=a,this._names=Sy(a.getAttribute("class")||"")}My.prototype={add:function(a){var t=this._names.indexOf(a);t<0&&(this._names.push(a),this._node.setAttribute("class",this._names.join(" ")))},remove:function(a){var t=this._names.indexOf(a);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(a){return this._names.indexOf(a)>=0}};function by(a,t){for(var n=om(a),r=-1,o=t.length;++r<o;)n.add(t[r])}function Ey(a,t){for(var n=om(a),r=-1,o=t.length;++r<o;)n.remove(t[r])}function IR(a){return function(){by(this,a)}}function HR(a){return function(){Ey(this,a)}}function GR(a,t){return function(){(t.apply(this,arguments)?by:Ey)(this,a)}}function VR(a,t){var n=Sy(a+"");if(arguments.length<2){for(var r=om(this.node()),o=-1,c=n.length;++o<c;)if(!r.contains(n[o]))return!1;return!0}return this.each((typeof t=="function"?GR:t?IR:HR)(n,t))}function kR(){this.textContent=""}function XR(a){return function(){this.textContent=a}}function WR(a){return function(){var t=a.apply(this,arguments);this.textContent=t??""}}function qR(a){return arguments.length?this.each(a==null?kR:(typeof a=="function"?WR:XR)(a)):this.node().textContent}function YR(){this.innerHTML=""}function jR(a){return function(){this.innerHTML=a}}function ZR(a){return function(){var t=a.apply(this,arguments);this.innerHTML=t??""}}function KR(a){return arguments.length?this.each(a==null?YR:(typeof a=="function"?ZR:jR)(a)):this.node().innerHTML}function QR(){this.nextSibling&&this.parentNode.appendChild(this)}function JR(){return this.each(QR)}function $R(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function tC(){return this.each($R)}function eC(a){var t=typeof a=="function"?a:my(a);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function nC(){return null}function iC(a,t){var n=typeof a=="function"?a:my(a),r=t==null?nC:typeof t=="function"?t:sm(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function aC(){var a=this.parentNode;a&&a.removeChild(this)}function rC(){return this.each(aC)}function sC(){var a=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(a,this.nextSibling):a}function oC(){var a=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(a,this.nextSibling):a}function lC(a){return this.select(a?oC:sC)}function cC(a){return arguments.length?this.property("__data__",a):this.node().__data__}function uC(a){return function(t){a.call(this,t,this.__data__)}}function fC(a){return a.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function dC(a){return function(){var t=this.__on;if(t){for(var n=0,r=-1,o=t.length,c;n<o;++n)c=t[n],(!a.type||c.type===a.type)&&c.name===a.name?this.removeEventListener(c.type,c.listener,c.options):t[++r]=c;++r?t.length=r:delete this.__on}}}function hC(a,t,n){return function(){var r=this.__on,o,c=uC(t);if(r){for(var u=0,p=r.length;u<p;++u)if((o=r[u]).type===a.type&&o.name===a.name){this.removeEventListener(o.type,o.listener,o.options),this.addEventListener(o.type,o.listener=c,o.options=n),o.value=t;return}}this.addEventListener(a.type,c,n),o={type:a.type,name:a.name,value:t,listener:c,options:n},r?r.push(o):this.__on=[o]}}function pC(a,t,n){var r=fC(a+""),o,c=r.length,u;if(arguments.length<2){var p=this.node().__on;if(p){for(var m=0,h=p.length,_;m<h;++m)for(o=0,_=p[m];o<c;++o)if((u=r[o]).type===_.type&&u.name===_.name)return _.value}return}for(p=t?hC:dC,o=0;o<c;++o)this.each(p(r[o],t,n));return this}function Ty(a,t,n){var r=yy(a),o=r.CustomEvent;typeof o=="function"?o=new o(t,n):(o=r.document.createEvent("Event"),n?(o.initEvent(t,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(t,!1,!1)),a.dispatchEvent(o)}function mC(a,t){return function(){return Ty(this,a,t)}}function gC(a,t){return function(){return Ty(this,a,t.apply(this,arguments))}}function _C(a,t){return this.each((typeof t=="function"?gC:mC)(a,t))}function*vC(){for(var a=this._groups,t=0,n=a.length;t<n;++t)for(var r=a[t],o=0,c=r.length,u;o<c;++o)(u=r[o])&&(yield u)}var Ay=[null];function ri(a,t){this._groups=a,this._parents=t}function Sl(){return new ri([[document.documentElement]],Ay)}function xC(){return this}ri.prototype=Sl.prototype={constructor:ri,select:W3,selectAll:Z3,selectChild:$3,selectChildren:iR,filter:aR,data:uR,enter:rR,exit:dR,join:hR,merge:pR,selection:xC,order:mR,sort:gR,call:vR,nodes:xR,node:yR,size:SR,empty:MR,each:bR,attr:DR,style:OR,property:BR,classed:VR,text:qR,html:KR,raise:JR,lower:tC,append:eC,insert:iC,remove:rC,clone:lC,datum:cC,on:pC,dispatch:_C,[Symbol.iterator]:vC};function lm(a){return typeof a=="string"?new ri([[document.querySelector(a)]],[document.documentElement]):new ri([[a]],Ay)}function cm(a,t,n){a.prototype=t.prototype=n,n.constructor=a}function Ry(a,t){var n=Object.create(a.prototype);for(var r in t)n[r]=t[r];return n}function Ml(){}var pl=.7,Uu=1/pl,Xs="\\s*([+-]?\\d+)\\s*",ml="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",qi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",yC=/^#([0-9a-f]{3,8})$/,SC=new RegExp(`^rgb\\(${Xs},${Xs},${Xs}\\)$`),MC=new RegExp(`^rgb\\(${qi},${qi},${qi}\\)$`),bC=new RegExp(`^rgba\\(${Xs},${Xs},${Xs},${ml}\\)$`),EC=new RegExp(`^rgba\\(${qi},${qi},${qi},${ml}\\)$`),TC=new RegExp(`^hsl\\(${ml},${qi},${qi}\\)$`),AC=new RegExp(`^hsla\\(${ml},${qi},${qi},${ml}\\)$`),lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};cm(Ml,kr,{copy(a){return Object.assign(new this.constructor,this,a)},displayable(){return this.rgb().displayable()},hex:cx,formatHex:cx,formatHex8:RC,formatHsl:CC,formatRgb:ux,toString:ux});function cx(){return this.rgb().formatHex()}function RC(){return this.rgb().formatHex8()}function CC(){return Cy(this).formatHsl()}function ux(){return this.rgb().formatRgb()}function kr(a){var t,n;return a=(a+"").trim().toLowerCase(),(t=yC.exec(a))?(n=t[1].length,t=parseInt(t[1],16),n===6?fx(t):n===3?new Wn(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?cu(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?cu(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=SC.exec(a))?new Wn(t[1],t[2],t[3],1):(t=MC.exec(a))?new Wn(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=bC.exec(a))?cu(t[1],t[2],t[3],t[4]):(t=EC.exec(a))?cu(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=TC.exec(a))?px(t[1],t[2]/100,t[3]/100,1):(t=AC.exec(a))?px(t[1],t[2]/100,t[3]/100,t[4]):lx.hasOwnProperty(a)?fx(lx[a]):a==="transparent"?new Wn(NaN,NaN,NaN,0):null}function fx(a){return new Wn(a>>16&255,a>>8&255,a&255,1)}function cu(a,t,n,r){return r<=0&&(a=t=n=NaN),new Wn(a,t,n,r)}function wC(a){return a instanceof Ml||(a=kr(a)),a?(a=a.rgb(),new Wn(a.r,a.g,a.b,a.opacity)):new Wn}function Hp(a,t,n,r){return arguments.length===1?wC(a):new Wn(a,t,n,r??1)}function Wn(a,t,n,r){this.r=+a,this.g=+t,this.b=+n,this.opacity=+r}cm(Wn,Hp,Ry(Ml,{brighter(a){return a=a==null?Uu:Math.pow(Uu,a),new Wn(this.r*a,this.g*a,this.b*a,this.opacity)},darker(a){return a=a==null?pl:Math.pow(pl,a),new Wn(this.r*a,this.g*a,this.b*a,this.opacity)},rgb(){return this},clamp(){return new Wn(Gr(this.r),Gr(this.g),Gr(this.b),Nu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:dx,formatHex:dx,formatHex8:DC,formatRgb:hx,toString:hx}));function dx(){return`#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}`}function DC(){return`#${Hr(this.r)}${Hr(this.g)}${Hr(this.b)}${Hr((isNaN(this.opacity)?1:this.opacity)*255)}`}function hx(){const a=Nu(this.opacity);return`${a===1?"rgb(":"rgba("}${Gr(this.r)}, ${Gr(this.g)}, ${Gr(this.b)}${a===1?")":`, ${a})`}`}function Nu(a){return isNaN(a)?1:Math.max(0,Math.min(1,a))}function Gr(a){return Math.max(0,Math.min(255,Math.round(a)||0))}function Hr(a){return a=Gr(a),(a<16?"0":"")+a.toString(16)}function px(a,t,n,r){return r<=0?a=t=n=NaN:n<=0||n>=1?a=t=NaN:t<=0&&(a=NaN),new Ui(a,t,n,r)}function Cy(a){if(a instanceof Ui)return new Ui(a.h,a.s,a.l,a.opacity);if(a instanceof Ml||(a=kr(a)),!a)return new Ui;if(a instanceof Ui)return a;a=a.rgb();var t=a.r/255,n=a.g/255,r=a.b/255,o=Math.min(t,n,r),c=Math.max(t,n,r),u=NaN,p=c-o,m=(c+o)/2;return p?(t===c?u=(n-r)/p+(n<r)*6:n===c?u=(r-t)/p+2:u=(t-n)/p+4,p/=m<.5?c+o:2-c-o,u*=60):p=m>0&&m<1?0:u,new Ui(u,p,m,a.opacity)}function UC(a,t,n,r){return arguments.length===1?Cy(a):new Ui(a,t,n,r??1)}function Ui(a,t,n,r){this.h=+a,this.s=+t,this.l=+n,this.opacity=+r}cm(Ui,UC,Ry(Ml,{brighter(a){return a=a==null?Uu:Math.pow(Uu,a),new Ui(this.h,this.s,this.l*a,this.opacity)},darker(a){return a=a==null?pl:Math.pow(pl,a),new Ui(this.h,this.s,this.l*a,this.opacity)},rgb(){var a=this.h%360+(this.h<0)*360,t=isNaN(a)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,o=2*n-r;return new Wn(Vh(a>=240?a-240:a+120,o,r),Vh(a,o,r),Vh(a<120?a+240:a-120,o,r),this.opacity)},clamp(){return new Ui(mx(this.h),uu(this.s),uu(this.l),Nu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const a=Nu(this.opacity);return`${a===1?"hsl(":"hsla("}${mx(this.h)}, ${uu(this.s)*100}%, ${uu(this.l)*100}%${a===1?")":`, ${a})`}`}}));function mx(a){return a=(a||0)%360,a<0?a+360:a}function uu(a){return Math.max(0,Math.min(1,a||0))}function Vh(a,t,n){return(a<60?t+(n-t)*a/60:a<180?n:a<240?t+(n-t)*(240-a)/60:t)*255}const um=a=>()=>a;function NC(a,t){return function(n){return a+n*t}}function LC(a,t,n){return a=Math.pow(a,n),t=Math.pow(t,n)-a,n=1/n,function(r){return Math.pow(a+r*t,n)}}function OC(a){return(a=+a)==1?wy:function(t,n){return n-t?LC(t,n,a):um(isNaN(t)?n:t)}}function wy(a,t){var n=t-a;return n?NC(a,n):um(isNaN(a)?t:a)}const Lu=(function a(t){var n=OC(t);function r(o,c){var u=n((o=Hp(o)).r,(c=Hp(c)).r),p=n(o.g,c.g),m=n(o.b,c.b),h=wy(o.opacity,c.opacity);return function(_){return o.r=u(_),o.g=p(_),o.b=m(_),o.opacity=h(_),o+""}}return r.gamma=a,r})(1);function PC(a,t){t||(t=[]);var n=a?Math.min(t.length,a.length):0,r=t.slice(),o;return function(c){for(o=0;o<n;++o)r[o]=a[o]*(1-c)+t[o]*c;return r}}function FC(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function zC(a,t){var n=t?t.length:0,r=a?Math.min(n,a.length):0,o=new Array(r),c=new Array(n),u;for(u=0;u<r;++u)o[u]=fm(a[u],t[u]);for(;u<n;++u)c[u]=t[u];return function(p){for(u=0;u<r;++u)c[u]=o[u](p);return c}}function BC(a,t){var n=new Date;return a=+a,t=+t,function(r){return n.setTime(a*(1-r)+t*r),n}}function wi(a,t){return a=+a,t=+t,function(n){return a*(1-n)+t*n}}function IC(a,t){var n={},r={},o;(a===null||typeof a!="object")&&(a={}),(t===null||typeof t!="object")&&(t={});for(o in t)o in a?n[o]=fm(a[o],t[o]):r[o]=t[o];return function(c){for(o in n)r[o]=n[o](c);return r}}var Gp=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,kh=new RegExp(Gp.source,"g");function HC(a){return function(){return a}}function GC(a){return function(t){return a(t)+""}}function Dy(a,t){var n=Gp.lastIndex=kh.lastIndex=0,r,o,c,u=-1,p=[],m=[];for(a=a+"",t=t+"";(r=Gp.exec(a))&&(o=kh.exec(t));)(c=o.index)>n&&(c=t.slice(n,c),p[u]?p[u]+=c:p[++u]=c),(r=r[0])===(o=o[0])?p[u]?p[u]+=o:p[++u]=o:(p[++u]=null,m.push({i:u,x:wi(r,o)})),n=kh.lastIndex;return n<t.length&&(c=t.slice(n),p[u]?p[u]+=c:p[++u]=c),p.length<2?m[0]?GC(m[0].x):HC(t):(t=m.length,function(h){for(var _=0,v;_<t;++_)p[(v=m[_]).i]=v.x(h);return p.join("")})}function fm(a,t){var n=typeof t,r;return t==null||n==="boolean"?um(t):(n==="number"?wi:n==="string"?(r=kr(t))?(t=r,Lu):Dy:t instanceof kr?Lu:t instanceof Date?BC:FC(t)?PC:Array.isArray(t)?zC:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?IC:wi)(a,t)}function VC(a,t){return a=+a,t=+t,function(n){return Math.round(a*(1-n)+t*n)}}var gx=180/Math.PI,Vp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Uy(a,t,n,r,o,c){var u,p,m;return(u=Math.sqrt(a*a+t*t))&&(a/=u,t/=u),(m=a*n+t*r)&&(n-=a*m,r-=t*m),(p=Math.sqrt(n*n+r*r))&&(n/=p,r/=p,m/=p),a*r<t*n&&(a=-a,t=-t,m=-m,u=-u),{translateX:o,translateY:c,rotate:Math.atan2(t,a)*gx,skewX:Math.atan(m)*gx,scaleX:u,scaleY:p}}var fu;function kC(a){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(a+"");return t.isIdentity?Vp:Uy(t.a,t.b,t.c,t.d,t.e,t.f)}function XC(a){return a==null||(fu||(fu=document.createElementNS("http://www.w3.org/2000/svg","g")),fu.setAttribute("transform",a),!(a=fu.transform.baseVal.consolidate()))?Vp:(a=a.matrix,Uy(a.a,a.b,a.c,a.d,a.e,a.f))}function Ny(a,t,n,r){function o(h){return h.length?h.pop()+" ":""}function c(h,_,v,g,x,b){if(h!==v||_!==g){var A=x.push("translate(",null,t,null,n);b.push({i:A-4,x:wi(h,v)},{i:A-2,x:wi(_,g)})}else(v||g)&&x.push("translate("+v+t+g+n)}function u(h,_,v,g){h!==_?(h-_>180?_+=360:_-h>180&&(h+=360),g.push({i:v.push(o(v)+"rotate(",null,r)-2,x:wi(h,_)})):_&&v.push(o(v)+"rotate("+_+r)}function p(h,_,v,g){h!==_?g.push({i:v.push(o(v)+"skewX(",null,r)-2,x:wi(h,_)}):_&&v.push(o(v)+"skewX("+_+r)}function m(h,_,v,g,x,b){if(h!==v||_!==g){var A=x.push(o(x)+"scale(",null,",",null,")");b.push({i:A-4,x:wi(h,v)},{i:A-2,x:wi(_,g)})}else(v!==1||g!==1)&&x.push(o(x)+"scale("+v+","+g+")")}return function(h,_){var v=[],g=[];return h=a(h),_=a(_),c(h.translateX,h.translateY,_.translateX,_.translateY,v,g),u(h.rotate,_.rotate,v,g),p(h.skewX,_.skewX,v,g),m(h.scaleX,h.scaleY,_.scaleX,_.scaleY,v,g),h=_=null,function(x){for(var b=-1,A=g.length,M;++b<A;)v[(M=g[b]).i]=M.x(x);return v.join("")}}}var WC=Ny(kC,"px, ","px)","deg)"),qC=Ny(XC,", ",")",")"),Qs=0,ol=0,il=0,Ly=1e3,Ou,ll,Pu=0,Xr=0,qu=0,gl=typeof performance=="object"&&performance.now?performance:Date,Oy=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(a){setTimeout(a,17)};function dm(){return Xr||(Oy(YC),Xr=gl.now()+qu)}function YC(){Xr=0}function Fu(){this._call=this._time=this._next=null}Fu.prototype=Py.prototype={constructor:Fu,restart:function(a,t,n){if(typeof a!="function")throw new TypeError("callback is not a function");n=(n==null?dm():+n)+(t==null?0:+t),!this._next&&ll!==this&&(ll?ll._next=this:Ou=this,ll=this),this._call=a,this._time=n,kp()},stop:function(){this._call&&(this._call=null,this._time=1/0,kp())}};function Py(a,t,n){var r=new Fu;return r.restart(a,t,n),r}function jC(){dm(),++Qs;for(var a=Ou,t;a;)(t=Xr-a._time)>=0&&a._call.call(void 0,t),a=a._next;--Qs}function _x(){Xr=(Pu=gl.now())+qu,Qs=ol=0;try{jC()}finally{Qs=0,KC(),Xr=0}}function ZC(){var a=gl.now(),t=a-Pu;t>Ly&&(qu-=t,Pu=a)}function KC(){for(var a,t=Ou,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),a=t,t=t._next):(n=t._next,t._next=null,t=a?a._next=n:Ou=n);ll=a,kp(r)}function kp(a){if(!Qs){ol&&(ol=clearTimeout(ol));var t=a-Xr;t>24?(a<1/0&&(ol=setTimeout(_x,a-gl.now()-qu)),il&&(il=clearInterval(il))):(il||(Pu=gl.now(),il=setInterval(ZC,Ly)),Qs=1,Oy(_x))}}function vx(a,t,n){var r=new Fu;return t=t==null?0:+t,r.restart(o=>{r.stop(),a(o+t)},t,n),r}var QC=py("start","end","cancel","interrupt"),JC=[],Fy=0,xx=1,Xp=2,Su=3,yx=4,Wp=5,Mu=6;function Yu(a,t,n,r,o,c){var u=a.__transition;if(!u)a.__transition={};else if(n in u)return;$C(a,n,{name:t,index:r,group:o,on:QC,tween:JC,time:c.time,delay:c.delay,duration:c.duration,ease:c.ease,timer:null,state:Fy})}function hm(a,t){var n=Li(a,t);if(n.state>Fy)throw new Error("too late; already scheduled");return n}function Zi(a,t){var n=Li(a,t);if(n.state>Su)throw new Error("too late; already running");return n}function Li(a,t){var n=a.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function $C(a,t,n){var r=a.__transition,o;r[t]=n,n.timer=Py(c,0,n.time);function c(h){n.state=xx,n.timer.restart(u,n.delay,n.time),n.delay<=h&&u(h-n.delay)}function u(h){var _,v,g,x;if(n.state!==xx)return m();for(_ in r)if(x=r[_],x.name===n.name){if(x.state===Su)return vx(u);x.state===yx?(x.state=Mu,x.timer.stop(),x.on.call("interrupt",a,a.__data__,x.index,x.group),delete r[_]):+_<t&&(x.state=Mu,x.timer.stop(),x.on.call("cancel",a,a.__data__,x.index,x.group),delete r[_])}if(vx(function(){n.state===Su&&(n.state=yx,n.timer.restart(p,n.delay,n.time),p(h))}),n.state=Xp,n.on.call("start",a,a.__data__,n.index,n.group),n.state===Xp){for(n.state=Su,o=new Array(g=n.tween.length),_=0,v=-1;_<g;++_)(x=n.tween[_].value.call(a,a.__data__,n.index,n.group))&&(o[++v]=x);o.length=v+1}}function p(h){for(var _=h<n.duration?n.ease.call(null,h/n.duration):(n.timer.restart(m),n.state=Wp,1),v=-1,g=o.length;++v<g;)o[v].call(a,_);n.state===Wp&&(n.on.call("end",a,a.__data__,n.index,n.group),m())}function m(){n.state=Mu,n.timer.stop(),delete r[t];for(var h in r)return;delete a.__transition}}function tw(a,t){var n=a.__transition,r,o,c=!0,u;if(n){t=t==null?null:t+"";for(u in n){if((r=n[u]).name!==t){c=!1;continue}o=r.state>Xp&&r.state<Wp,r.state=Mu,r.timer.stop(),r.on.call(o?"interrupt":"cancel",a,a.__data__,r.index,r.group),delete n[u]}c&&delete a.__transition}}function ew(a){return this.each(function(){tw(this,a)})}function nw(a,t){var n,r;return function(){var o=Zi(this,a),c=o.tween;if(c!==n){r=n=c;for(var u=0,p=r.length;u<p;++u)if(r[u].name===t){r=r.slice(),r.splice(u,1);break}}o.tween=r}}function iw(a,t,n){var r,o;if(typeof n!="function")throw new Error;return function(){var c=Zi(this,a),u=c.tween;if(u!==r){o=(r=u).slice();for(var p={name:t,value:n},m=0,h=o.length;m<h;++m)if(o[m].name===t){o[m]=p;break}m===h&&o.push(p)}c.tween=o}}function aw(a,t){var n=this._id;if(a+="",arguments.length<2){for(var r=Li(this.node(),n).tween,o=0,c=r.length,u;o<c;++o)if((u=r[o]).name===a)return u.value;return null}return this.each((t==null?nw:iw)(n,a,t))}function pm(a,t,n){var r=a._id;return a.each(function(){var o=Zi(this,r);(o.value||(o.value={}))[t]=n.apply(this,arguments)}),function(o){return Li(o,r).value[t]}}function zy(a,t){var n;return(typeof t=="number"?wi:t instanceof kr?Lu:(n=kr(t))?(t=n,Lu):Dy)(a,t)}function rw(a){return function(){this.removeAttribute(a)}}function sw(a){return function(){this.removeAttributeNS(a.space,a.local)}}function ow(a,t,n){var r,o=n+"",c;return function(){var u=this.getAttribute(a);return u===o?null:u===r?c:c=t(r=u,n)}}function lw(a,t,n){var r,o=n+"",c;return function(){var u=this.getAttributeNS(a.space,a.local);return u===o?null:u===r?c:c=t(r=u,n)}}function cw(a,t,n){var r,o,c;return function(){var u,p=n(this),m;return p==null?void this.removeAttribute(a):(u=this.getAttribute(a),m=p+"",u===m?null:u===r&&m===o?c:(o=m,c=t(r=u,p)))}}function uw(a,t,n){var r,o,c;return function(){var u,p=n(this),m;return p==null?void this.removeAttributeNS(a.space,a.local):(u=this.getAttributeNS(a.space,a.local),m=p+"",u===m?null:u===r&&m===o?c:(o=m,c=t(r=u,p)))}}function fw(a,t){var n=Wu(a),r=n==="transform"?qC:zy;return this.attrTween(a,typeof t=="function"?(n.local?uw:cw)(n,r,pm(this,"attr."+a,t)):t==null?(n.local?sw:rw)(n):(n.local?lw:ow)(n,r,t))}function dw(a,t){return function(n){this.setAttribute(a,t.call(this,n))}}function hw(a,t){return function(n){this.setAttributeNS(a.space,a.local,t.call(this,n))}}function pw(a,t){var n,r;function o(){var c=t.apply(this,arguments);return c!==r&&(n=(r=c)&&hw(a,c)),n}return o._value=t,o}function mw(a,t){var n,r;function o(){var c=t.apply(this,arguments);return c!==r&&(n=(r=c)&&dw(a,c)),n}return o._value=t,o}function gw(a,t){var n="attr."+a;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=Wu(a);return this.tween(n,(r.local?pw:mw)(r,t))}function _w(a,t){return function(){hm(this,a).delay=+t.apply(this,arguments)}}function vw(a,t){return t=+t,function(){hm(this,a).delay=t}}function xw(a){var t=this._id;return arguments.length?this.each((typeof a=="function"?_w:vw)(t,a)):Li(this.node(),t).delay}function yw(a,t){return function(){Zi(this,a).duration=+t.apply(this,arguments)}}function Sw(a,t){return t=+t,function(){Zi(this,a).duration=t}}function Mw(a){var t=this._id;return arguments.length?this.each((typeof a=="function"?yw:Sw)(t,a)):Li(this.node(),t).duration}function bw(a,t){if(typeof t!="function")throw new Error;return function(){Zi(this,a).ease=t}}function Ew(a){var t=this._id;return arguments.length?this.each(bw(t,a)):Li(this.node(),t).ease}function Tw(a,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Zi(this,a).ease=n}}function Aw(a){if(typeof a!="function")throw new Error;return this.each(Tw(this._id,a))}function Rw(a){typeof a!="function"&&(a=_y(a));for(var t=this._groups,n=t.length,r=new Array(n),o=0;o<n;++o)for(var c=t[o],u=c.length,p=r[o]=[],m,h=0;h<u;++h)(m=c[h])&&a.call(m,m.__data__,h,c)&&p.push(m);return new wa(r,this._parents,this._name,this._id)}function Cw(a){if(a._id!==this._id)throw new Error;for(var t=this._groups,n=a._groups,r=t.length,o=n.length,c=Math.min(r,o),u=new Array(r),p=0;p<c;++p)for(var m=t[p],h=n[p],_=m.length,v=u[p]=new Array(_),g,x=0;x<_;++x)(g=m[x]||h[x])&&(v[x]=g);for(;p<r;++p)u[p]=t[p];return new wa(u,this._parents,this._name,this._id)}function ww(a){return(a+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function Dw(a,t,n){var r,o,c=ww(t)?hm:Zi;return function(){var u=c(this,a),p=u.on;p!==r&&(o=(r=p).copy()).on(t,n),u.on=o}}function Uw(a,t){var n=this._id;return arguments.length<2?Li(this.node(),n).on.on(a):this.each(Dw(n,a,t))}function Nw(a){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==a)return;t&&t.removeChild(this)}}function Lw(){return this.on("end.remove",Nw(this._id))}function Ow(a){var t=this._name,n=this._id;typeof a!="function"&&(a=sm(a));for(var r=this._groups,o=r.length,c=new Array(o),u=0;u<o;++u)for(var p=r[u],m=p.length,h=c[u]=new Array(m),_,v,g=0;g<m;++g)(_=p[g])&&(v=a.call(_,_.__data__,g,p))&&("__data__"in _&&(v.__data__=_.__data__),h[g]=v,Yu(h[g],t,n,g,h,Li(_,n)));return new wa(c,this._parents,t,n)}function Pw(a){var t=this._name,n=this._id;typeof a!="function"&&(a=gy(a));for(var r=this._groups,o=r.length,c=[],u=[],p=0;p<o;++p)for(var m=r[p],h=m.length,_,v=0;v<h;++v)if(_=m[v]){for(var g=a.call(_,_.__data__,v,m),x,b=Li(_,n),A=0,M=g.length;A<M;++A)(x=g[A])&&Yu(x,t,n,A,g,b);c.push(g),u.push(_)}return new wa(c,u,t,n)}var Fw=Sl.prototype.constructor;function zw(){return new Fw(this._groups,this._parents)}function Bw(a,t){var n,r,o;return function(){var c=Ks(this,a),u=(this.style.removeProperty(a),Ks(this,a));return c===u?null:c===n&&u===r?o:o=t(n=c,r=u)}}function By(a){return function(){this.style.removeProperty(a)}}function Iw(a,t,n){var r,o=n+"",c;return function(){var u=Ks(this,a);return u===o?null:u===r?c:c=t(r=u,n)}}function Hw(a,t,n){var r,o,c;return function(){var u=Ks(this,a),p=n(this),m=p+"";return p==null&&(m=p=(this.style.removeProperty(a),Ks(this,a))),u===m?null:u===r&&m===o?c:(o=m,c=t(r=u,p))}}function Gw(a,t){var n,r,o,c="style."+t,u="end."+c,p;return function(){var m=Zi(this,a),h=m.on,_=m.value[c]==null?p||(p=By(t)):void 0;(h!==n||o!==_)&&(r=(n=h).copy()).on(u,o=_),m.on=r}}function Vw(a,t,n){var r=(a+="")=="transform"?WC:zy;return t==null?this.styleTween(a,Bw(a,r)).on("end.style."+a,By(a)):typeof t=="function"?this.styleTween(a,Hw(a,r,pm(this,"style."+a,t))).each(Gw(this._id,a)):this.styleTween(a,Iw(a,r,t),n).on("end.style."+a,null)}function kw(a,t,n){return function(r){this.style.setProperty(a,t.call(this,r),n)}}function Xw(a,t,n){var r,o;function c(){var u=t.apply(this,arguments);return u!==o&&(r=(o=u)&&kw(a,u,n)),r}return c._value=t,c}function Ww(a,t,n){var r="style."+(a+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,Xw(a,t,n??""))}function qw(a){return function(){this.textContent=a}}function Yw(a){return function(){var t=a(this);this.textContent=t??""}}function jw(a){return this.tween("text",typeof a=="function"?Yw(pm(this,"text",a)):qw(a==null?"":a+""))}function Zw(a){return function(t){this.textContent=a.call(this,t)}}function Kw(a){var t,n;function r(){var o=a.apply(this,arguments);return o!==n&&(t=(n=o)&&Zw(o)),t}return r._value=a,r}function Qw(a){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(a==null)return this.tween(t,null);if(typeof a!="function")throw new Error;return this.tween(t,Kw(a))}function Jw(){for(var a=this._name,t=this._id,n=Iy(),r=this._groups,o=r.length,c=0;c<o;++c)for(var u=r[c],p=u.length,m,h=0;h<p;++h)if(m=u[h]){var _=Li(m,t);Yu(m,a,n,h,u,{time:_.time+_.delay+_.duration,delay:0,duration:_.duration,ease:_.ease})}return new wa(r,this._parents,a,n)}function $w(){var a,t,n=this,r=n._id,o=n.size();return new Promise(function(c,u){var p={value:u},m={value:function(){--o===0&&c()}};n.each(function(){var h=Zi(this,r),_=h.on;_!==a&&(t=(a=_).copy(),t._.cancel.push(p),t._.interrupt.push(p),t._.end.push(m)),h.on=t}),o===0&&c()})}var tD=0;function wa(a,t,n,r){this._groups=a,this._parents=t,this._name=n,this._id=r}function Iy(){return++tD}var ya=Sl.prototype;wa.prototype={constructor:wa,select:Ow,selectAll:Pw,selectChild:ya.selectChild,selectChildren:ya.selectChildren,filter:Rw,merge:Cw,selection:zw,transition:Jw,call:ya.call,nodes:ya.nodes,node:ya.node,size:ya.size,empty:ya.empty,each:ya.each,on:Uw,attr:fw,attrTween:gw,style:Vw,styleTween:Ww,text:jw,textTween:Qw,remove:Lw,tween:aw,delay:xw,duration:Mw,ease:Ew,easeVarying:Aw,end:$w,[Symbol.iterator]:ya[Symbol.iterator]};function eD(a){return((a*=2)<=1?a*a*a:(a-=2)*a*a+2)/2}var nD={time:null,delay:0,duration:250,ease:eD};function iD(a,t){for(var n;!(n=a.__transition)||!(n=n[t]);)if(!(a=a.parentNode))throw new Error(`transition ${t} not found`);return n}function aD(a){var t,n;a instanceof wa?(t=a._id,a=a._name):(t=Iy(),(n=nD).time=dm(),a=a==null?null:a+"");for(var r=this._groups,o=r.length,c=0;c<o;++c)for(var u=r[c],p=u.length,m,h=0;h<p;++h)(m=u[h])&&Yu(m,a,t,h,u,n||iD(m,t));return new wa(r,this._parents,a,t)}Sl.prototype.interrupt=ew;Sl.prototype.transition=aD;function rD(a){return Math.abs(a=Math.round(a))>=1e21?a.toLocaleString("en").replace(/,/g,""):a.toString(10)}function zu(a,t){if(!isFinite(a)||a===0)return null;var n=(a=t?a.toExponential(t-1):a.toExponential()).indexOf("e"),r=a.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+a.slice(n+1)]}function Js(a){return a=zu(Math.abs(a)),a?a[1]:NaN}function sD(a,t){return function(n,r){for(var o=n.length,c=[],u=0,p=a[0],m=0;o>0&&p>0&&(m+p+1>r&&(p=Math.max(1,r-m)),c.push(n.substring(o-=p,o+p)),!((m+=p+1)>r));)p=a[u=(u+1)%a.length];return c.reverse().join(t)}}function oD(a){return function(t){return t.replace(/[0-9]/g,function(n){return a[+n]})}}var lD=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Bu(a){if(!(t=lD.exec(a)))throw new Error("invalid format: "+a);var t;return new mm({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Bu.prototype=mm.prototype;function mm(a){this.fill=a.fill===void 0?" ":a.fill+"",this.align=a.align===void 0?">":a.align+"",this.sign=a.sign===void 0?"-":a.sign+"",this.symbol=a.symbol===void 0?"":a.symbol+"",this.zero=!!a.zero,this.width=a.width===void 0?void 0:+a.width,this.comma=!!a.comma,this.precision=a.precision===void 0?void 0:+a.precision,this.trim=!!a.trim,this.type=a.type===void 0?"":a.type+""}mm.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function cD(a){t:for(var t=a.length,n=1,r=-1,o;n<t;++n)switch(a[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+a[n])break t;r>0&&(r=0);break}return r>0?a.slice(0,r)+a.slice(o+1):a}var Iu;function uD(a,t){var n=zu(a,t);if(!n)return Iu=void 0,a.toPrecision(t);var r=n[0],o=n[1],c=o-(Iu=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,u=r.length;return c===u?r:c>u?r+new Array(c-u+1).join("0"):c>0?r.slice(0,c)+"."+r.slice(c):"0."+new Array(1-c).join("0")+zu(a,Math.max(0,t+c-1))[0]}function Sx(a,t){var n=zu(a,t);if(!n)return a+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const Mx={"%":(a,t)=>(a*100).toFixed(t),b:a=>Math.round(a).toString(2),c:a=>a+"",d:rD,e:(a,t)=>a.toExponential(t),f:(a,t)=>a.toFixed(t),g:(a,t)=>a.toPrecision(t),o:a=>Math.round(a).toString(8),p:(a,t)=>Sx(a*100,t),r:Sx,s:uD,X:a=>Math.round(a).toString(16).toUpperCase(),x:a=>Math.round(a).toString(16)};function bx(a){return a}var Ex=Array.prototype.map,Tx=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function fD(a){var t=a.grouping===void 0||a.thousands===void 0?bx:sD(Ex.call(a.grouping,Number),a.thousands+""),n=a.currency===void 0?"":a.currency[0]+"",r=a.currency===void 0?"":a.currency[1]+"",o=a.decimal===void 0?".":a.decimal+"",c=a.numerals===void 0?bx:oD(Ex.call(a.numerals,String)),u=a.percent===void 0?"%":a.percent+"",p=a.minus===void 0?"−":a.minus+"",m=a.nan===void 0?"NaN":a.nan+"";function h(v,g){v=Bu(v);var x=v.fill,b=v.align,A=v.sign,M=v.symbol,S=v.zero,w=v.width,N=v.comma,U=v.precision,H=v.trim,I=v.type;I==="n"?(N=!0,I="g"):Mx[I]||(U===void 0&&(U=12),H=!0,I="g"),(S||x==="0"&&b==="=")&&(S=!0,x="0",b="=");var z=(g&&g.prefix!==void 0?g.prefix:"")+(M==="$"?n:M==="#"&&/[boxX]/.test(I)?"0"+I.toLowerCase():""),T=(M==="$"?r:/[%p]/.test(I)?u:"")+(g&&g.suffix!==void 0?g.suffix:""),D=Mx[I],ut=/[defgprs%]/.test(I);U=U===void 0?6:/[gprs]/.test(I)?Math.max(1,Math.min(21,U)):Math.max(0,Math.min(20,U));function B(V){var K=z,at=T,Q,L,F;if(I==="c")at=D(V)+at,V="";else{V=+V;var st=V<0||1/V<0;if(V=isNaN(V)?m:D(Math.abs(V),U),H&&(V=cD(V)),st&&+V==0&&A!=="+"&&(st=!1),K=(st?A==="("?A:p:A==="-"||A==="("?"":A)+K,at=(I==="s"&&!isNaN(V)&&Iu!==void 0?Tx[8+Iu/3]:"")+at+(st&&A==="("?")":""),ut){for(Q=-1,L=V.length;++Q<L;)if(F=V.charCodeAt(Q),48>F||F>57){at=(F===46?o+V.slice(Q+1):V.slice(Q))+at,V=V.slice(0,Q);break}}}N&&!S&&(V=t(V,1/0));var ft=K.length+V.length+at.length,yt=ft<w?new Array(w-ft+1).join(x):"";switch(N&&S&&(V=t(yt+V,yt.length?w-at.length:1/0),yt=""),b){case"<":V=K+V+at+yt;break;case"=":V=K+yt+V+at;break;case"^":V=yt.slice(0,ft=yt.length>>1)+K+V+at+yt.slice(ft);break;default:V=yt+K+V+at;break}return c(V)}return B.toString=function(){return v+""},B}function _(v,g){var x=Math.max(-8,Math.min(8,Math.floor(Js(g)/3)))*3,b=Math.pow(10,-x),A=h((v=Bu(v),v.type="f",v),{suffix:Tx[8+x/3]});return function(M){return A(b*M)}}return{format:h,formatPrefix:_}}var du,Hy,Gy;dD({thousands:",",grouping:[3],currency:["$",""]});function dD(a){return du=fD(a),Hy=du.format,Gy=du.formatPrefix,du}function hD(a){return Math.max(0,-Js(Math.abs(a)))}function pD(a,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Js(t)/3)))*3-Js(Math.abs(a)))}function mD(a,t){return a=Math.abs(a),t=Math.abs(t)-a,Math.max(0,Js(t)-Js(a))+1}function gD(a,t){switch(arguments.length){case 0:break;case 1:this.range(a);break;default:this.range(t).domain(a);break}return this}function _D(a){return function(){return a}}function vD(a){return+a}var Ax=[0,1];function Gs(a){return a}function qp(a,t){return(t-=a=+a)?function(n){return(n-a)/t}:_D(isNaN(t)?NaN:.5)}function xD(a,t){var n;return a>t&&(n=a,a=t,t=n),function(r){return Math.max(a,Math.min(t,r))}}function yD(a,t,n){var r=a[0],o=a[1],c=t[0],u=t[1];return o<r?(r=qp(o,r),c=n(u,c)):(r=qp(r,o),c=n(c,u)),function(p){return c(r(p))}}function SD(a,t,n){var r=Math.min(a.length,t.length)-1,o=new Array(r),c=new Array(r),u=-1;for(a[r]<a[0]&&(a=a.slice().reverse(),t=t.slice().reverse());++u<r;)o[u]=qp(a[u],a[u+1]),c[u]=n(t[u],t[u+1]);return function(p){var m=A3(a,p,1,r)-1;return c[m](o[m](p))}}function MD(a,t){return t.domain(a.domain()).range(a.range()).interpolate(a.interpolate()).clamp(a.clamp()).unknown(a.unknown())}function bD(){var a=Ax,t=Ax,n=fm,r,o,c,u=Gs,p,m,h;function _(){var g=Math.min(a.length,t.length);return u!==Gs&&(u=xD(a[0],a[g-1])),p=g>2?SD:yD,m=h=null,v}function v(g){return g==null||isNaN(g=+g)?c:(m||(m=p(a.map(r),t,n)))(r(u(g)))}return v.invert=function(g){return u(o((h||(h=p(t,a.map(r),wi)))(g)))},v.domain=function(g){return arguments.length?(a=Array.from(g,vD),_()):a.slice()},v.range=function(g){return arguments.length?(t=Array.from(g),_()):t.slice()},v.rangeRound=function(g){return t=Array.from(g),n=VC,_()},v.clamp=function(g){return arguments.length?(u=g?!0:Gs,_()):u!==Gs},v.interpolate=function(g){return arguments.length?(n=g,_()):n},v.unknown=function(g){return arguments.length?(c=g,v):c},function(g,x){return r=g,o=x,_()}}function ED(){return bD()(Gs,Gs)}function TD(a,t,n,r){var o=U3(a,t,n),c;switch(r=Bu(r??",f"),r.type){case"s":{var u=Math.max(Math.abs(a),Math.abs(t));return r.precision==null&&!isNaN(c=pD(o,u))&&(r.precision=c),Gy(r,u)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(c=mD(o,Math.max(Math.abs(a),Math.abs(t))))&&(r.precision=c-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(c=hD(o))&&(r.precision=c-(r.type==="%")*2);break}}return Hy(r)}function AD(a){var t=a.domain;return a.ticks=function(n){var r=t();return D3(r[0],r[r.length-1],n??10)},a.tickFormat=function(n,r){var o=t();return TD(o[0],o[o.length-1],n??10,r)},a.nice=function(n){n==null&&(n=10);var r=t(),o=0,c=r.length-1,u=r[o],p=r[c],m,h,_=10;for(p<u&&(h=u,u=p,p=h,h=o,o=c,c=h);_-- >0;){if(h=zp(u,p,n),h===m)return r[o]=u,r[c]=p,t(r);if(h>0)u=Math.floor(u/h)*h,p=Math.ceil(p/h)*h;else if(h<0)u=Math.ceil(u*h)/h,p=Math.floor(p*h)/h;else break;m=h}return a},a}function Hu(){var a=ED();return a.copy=function(){return MD(a,Hu())},gD.apply(a,arguments),AD(a)}function ju(a){for(var t=a.length/6|0,n=new Array(t),r=0;r<t;)n[r]="#"+a.slice(r*6,++r*6);return n}function Zu(a){var t=a.length;return function(n){return a[Math.max(0,Math.min(t-1,Math.floor(n*t)))]}}const RD=Zu(ju("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));Zu(ju("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));Zu(ju("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));Zu(ju("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function cl(a,t,n){this.k=a,this.x=t,this.y=n}cl.prototype={constructor:cl,scale:function(a){return a===1?this:new cl(this.k*a,this.x,this.y)},translate:function(a,t){return a===0&t===0?this:new cl(this.k,this.x+this.k*a,this.y+this.k*t)},apply:function(a){return[a[0]*this.k+this.x,a[1]*this.k+this.y]},applyX:function(a){return a*this.k+this.x},applyY:function(a){return a*this.k+this.y},invert:function(a){return[(a[0]-this.x)/this.k,(a[1]-this.y)/this.k]},invertX:function(a){return(a-this.x)/this.k},invertY:function(a){return(a-this.y)/this.k},rescaleX:function(a){return a.copy().domain(a.range().map(this.invertX,this).map(a.invert,a))},rescaleY:function(a){return a.copy().domain(a.range().map(this.invertY,this).map(a.invert,a))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};cl.prototype;function Vy(a=800,t=.08){const n=[];for(let r=0;r<a;r++){const o=r/a*Math.PI*2;n.push([Math.cos(o)+(Math.random()-.5)*t,Math.sin(o)+(Math.random()-.5)*t,(Math.random()-.5)*t*.5])}return n}function ky(a=1200,t=.06,n=2,r=.8){const o=[];for(let c=0;c<a;c++){const u=Math.random()*Math.PI*2,p=Math.random()*Math.PI*2;o.push([(n+r*Math.cos(p))*Math.cos(u)+(Math.random()-.5)*t,(n+r*Math.cos(p))*Math.sin(u)+(Math.random()-.5)*t,r*Math.sin(p)+(Math.random()-.5)*t])}return o}function Xy(a=1200,t=.06){const n=[];for(let r=0;r<a;r++){const o=Math.random()*Math.PI*2,c=Math.random()*Math.PI*2,u=2,p=1;let m,h,_;o<Math.PI?(m=(u+p*Math.cos(c))*Math.cos(o),h=(u+p*Math.cos(c))*Math.sin(o),_=p*Math.sin(c)):(m=(u+p*Math.cos(c))*Math.cos(o),h=(u+p*Math.cos(c))*Math.sin(o),_=-p*Math.sin(c)*Math.cos(o-Math.PI)),n.push([m+(Math.random()-.5)*t,h+(Math.random()-.5)*t,_+(Math.random()-.5)*t])}return n}function Wy(a=1e3,t=.06){const n=[];for(let r=0;r<a;r++){const o=Math.acos(2*Math.random()-1),c=Math.random()*Math.PI*2,u=1.5;n.push([u*Math.sin(o)*Math.cos(c)+(Math.random()-.5)*t,u*Math.sin(o)*Math.sin(c)+(Math.random()-.5)*t,u*Math.cos(o)+(Math.random()-.5)*t])}return n}function qy(a=1e3,t=.7){const n=[];let r=0,o=0;for(let c=0;c<a;c++)r+=.05+(Math.random()-.5)*.02,o+=.08+t*Math.sin(r-o)*.03+(Math.random()-.5)*.02,n.push([Math.cos(r),Math.sin(r),Math.cos(o),Math.sin(o)]);return n.map(c=>[c[0],c[1],c[2]])}function Yy(a=1e3){const t=[];for(let n=0;n<a;n++){const r=Math.random();if(r<.4){const o=Math.random()*Math.PI*2;t.push([Math.cos(o)*1.5,Math.sin(o)*1.5,-1+(Math.random()-.5)*.1])}else if(r<.7){const o=Math.random()*Math.PI*2,c=Math.random()*.8;t.push([Math.cos(o)*c,Math.sin(o)*c,0+(Math.random()-.5)*.1])}else t.push([(Math.random()-.5)*3,(Math.random()-.5)*3,1+(Math.random()-.5)*.3])}return t}const ul={circle:{fn:Vy,label:"S¹ Circle",betti:[1,1,0],desc:"Head direction ring"},torus:{fn:ky,label:"T² Torus",betti:[1,2,1],desc:"Grid cell manifold"},klein:{fn:Xy,label:"Klein Bottle",betti:[1,1,0],desc:"Non-orientable surface"},sphere:{fn:Wy,label:"S² Sphere",betti:[1,0,1],desc:"Closed surface"},coupled:{fn:qy,label:"Coupled Oscillators",betti:[1,1,0],desc:"Phase-locked systems"},stratified:{fn:Yy,label:"Stratified Space",betti:[1,1,0],desc:"Multi-dimensional strata"}};function CD(a){const n=ul[a].betti,r=[];for(let o=0;o<5+Math.floor(Math.random()*3);o++){const c=Math.random()*.1,u=o===0?1/0:c+.05+Math.random()*.2;r.push({dim:0,birth:c,death:u===1/0?2.5:u,persistent:o===0})}for(let o=0;o<n[1]+Math.floor(Math.random()*3);o++){const c=.1+Math.random()*.15,u=o<n[1]?1.8+Math.random()*.7:c+.1+Math.random()*.3;r.push({dim:1,birth:c,death:u,persistent:o<n[1]})}for(let o=0;o<n[2]+Math.floor(Math.random()*2);o++){const c=.2+Math.random()*.2,u=o<n[2]?1.5+Math.random()*.8:c+.1+Math.random()*.2;r.push({dim:2,birth:c,death:u,persistent:o<n[2]})}return r}function wD(a,t){const r=ul[a].betti,o=[];return r[1]>=1?o.push({text:`${r[1]} persistent 1-cycle${r[1]>1?"s":""} detected`,status:"confirmed",confidence:.92+Math.random()*.06}):o.push({text:"No persistent 1-cycles",status:"confirmed",confidence:.95}),a==="torus"?(o.push({text:"Toroidal manifold supported",status:"strong",confidence:.85+Math.random()*.1}),o.push({text:"Orientability: orientable",status:"confirmed",confidence:.9})):a==="klein"?(o.push({text:"Non-orientable surface detected",status:"strong",confidence:.78+Math.random()*.1}),o.push({text:"Z₂ vs Z₃ coefficient sensitivity flagged",status:"investigating",confidence:.65})):a==="circle"?(o.push({text:"Circular manifold (S¹) supported",status:"strong",confidence:.88+Math.random()*.1}),o.push({text:"Orientability: trivially orientable",status:"confirmed",confidence:.95})):a==="sphere"?(o.push({text:"Closed surface (S²) supported",status:"strong",confidence:.82+Math.random()*.1}),o.push({text:"Orientability: orientable",status:"confirmed",confidence:.9})):a==="coupled"?(o.push({text:"Coupled circular structure detected",status:"strong",confidence:.75+Math.random()*.1}),o.push({text:"Geometric coupling: under investigation",status:"investigating",confidence:.6})):a==="stratified"&&(o.push({text:"Multiple strata detected",status:"strong",confidence:.7+Math.random()*.1}),o.push({text:"Local dimension variation confirmed",status:"confirmed",confidence:.82})),o.push({text:"Dynamical chirality: unresolved",status:"unresolved",confidence:.4+Math.random()*.2}),o}function DD({points:a,manifoldType:t,colorMode:n}){const r=Ge.useRef(null),o=Ge.useRef({}),c=Ge.useRef(0),u=Ge.useRef(!1),p=Ge.useRef({x:0,y:0}),m=Ge.useRef({x:.3,y:0});return Ge.useEffect(()=>{const h=r.current;if(!h)return;const _=h.clientWidth,v=h.clientHeight,g=new rb,x=new gi(50,_/v,.1,100);x.position.set(0,0,6);const b=new S3({antialias:!0,alpha:!0});b.setSize(_,v),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),b.setClearColor(0,0),h.appendChild(b.domElement),o.current={scene:g,camera:x,renderer:b};const A=N=>{u.current=!0;const U=N.touches?N.touches[0].clientX:N.clientX,H=N.touches?N.touches[0].clientY:N.clientY;p.current={x:U,y:H}},M=N=>{if(!u.current)return;const U=N.touches?N.touches[0].clientX:N.clientX,H=N.touches?N.touches[0].clientY:N.clientY;m.current.y+=(U-p.current.x)*.005,m.current.x+=(H-p.current.y)*.005,p.current={x:U,y:H}},S=()=>{u.current=!1};b.domElement.addEventListener("mousedown",A),b.domElement.addEventListener("mousemove",M),window.addEventListener("mouseup",S),b.domElement.addEventListener("touchstart",A,{passive:!0}),b.domElement.addEventListener("touchmove",M,{passive:!0}),window.addEventListener("touchend",S);const w=()=>{c.current=requestAnimationFrame(w),u.current||(m.current.y+=.003),g.rotation.x=m.current.x,g.rotation.y=m.current.y,b.render(g,x)};return w(),()=>{cancelAnimationFrame(c.current),b.domElement.removeEventListener("mousedown",A),b.domElement.removeEventListener("mousemove",M),window.removeEventListener("mouseup",S),b.domElement.removeEventListener("touchstart",A),b.domElement.removeEventListener("touchmove",M),window.removeEventListener("touchend",S),b.dispose(),h.removeChild(b.domElement)}},[]),Ge.useEffect(()=>{const{scene:h}=o.current;if(!h)return;for(;h.children.length>0;)h.remove(h.children[0]);const _=new Rb(8,16,1714762,858669);if(_.position.y=-2.5,_.material.opacity=.3,_.material.transparent=!0,h.add(_),!a||a.length===0)return;let v=1/0,g=-1/0,x=1/0,b=-1/0,A=1/0,M=-1/0;a.forEach(B=>{v=Math.min(v,B[0]),g=Math.max(g,B[0]),x=Math.min(x,B[1]),b=Math.max(b,B[1]),A=Math.min(A,B[2]),M=Math.max(M,B[2])});const S=(v+g)/2,w=(x+b)/2,N=(A+M)/2,U=2.5/Math.max(g-v,b-x,M-A,.01),H={topology:(B,V)=>{const at=(Math.atan2(V[1]-w,V[0]-S)/(Math.PI*2)+1)%1;return new Me().setHSL(at*.8+.55,.85,.55)},time:(B,V)=>{const K=B/a.length;return new Me().setHSL(.55+K*.35,.8,.45+K*.2)},height:(B,V)=>{const K=(V[2]-A)/(M-A+.001);return new Me().setHSL(0+K*.15,.9,.4+K*.25)}},I=H[n]||H.topology,z=new Yn,T=new Float32Array(a.length*3),D=new Float32Array(a.length*3);a.forEach((B,V)=>{T[V*3]=(B[0]-S)*U,T[V*3+1]=(B[1]-w)*U,T[V*3+2]=(B[2]-N)*U;const K=I(V,B);D[V*3]=K.r,D[V*3+1]=K.g,D[V*3+2]=K.b}),z.setAttribute("position",new vi(T,3)),z.setAttribute("color",new vi(D,3));const ut=new Jx({size:.04,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0});if(h.add(new gb(z,ut)),a.length<2e3){const B=new Yn,V=[],K=[],at=[...a].sort((L,F)=>{const st=Math.atan2(L[1],L[0]),ft=Math.atan2(F[1],F[0]);return st-ft}),Q=Math.max(1,Math.floor(at.length/300));for(let L=0;L<at.length-Q;L+=Q){const F=at[L],st=at[L+Q];if(Math.sqrt((F[0]-st[0])**2+(F[1]-st[1])**2+(F[2]-st[2])**2)<(g-v)*.25){V.push((F[0]-S)*U,(F[1]-w)*U,(F[2]-N)*U,(st[0]-S)*U,(st[1]-w)*U,(st[2]-N)*U);const yt=I(L,F),P=I(L+Q,st);K.push(yt.r,yt.g,yt.b,P.r,P.g,P.b)}}if(V.length>0){B.setAttribute("position",new zn(V,3)),B.setAttribute("color",new zn(K,3));const L=new rm({vertexColors:!0,transparent:!0,opacity:.2});h.add(new Qx(B,L))}}},[a,n]),xt.jsx("div",{ref:r,style:{width:"100%",height:"100%",cursor:"grab"}})}function UD({bars:a,width:t=320,height:n=160}){const r=Ge.useRef(null);return Ge.useEffect(()=>{if(!r.current||!a.length)return;const o=lm(r.current);o.selectAll("*").remove();const c={top:12,right:16,bottom:24,left:36},u=t-c.left-c.right,p=n-c.top-c.bottom,m=o.append("g").attr("transform",`translate(${c.left},${c.top})`),h=fy(a,A=>A.death)||2.5,_=Hu().domain([0,h]).range([0,u]),v=[0,1,2],g=["#4a90d9","#e85d5d","#8b5cf6"],x=["β₀","β₁","β₂"];v.forEach((A,M)=>{const S=a.filter(U=>U.dim===A),w=M*(p/3)+4,N=Math.min(12,(p/3-8)/Math.max(S.length,1));m.append("text").attr("x",-8).attr("y",w+S.length*N/2+4).attr("text-anchor","end").attr("fill",g[M]).attr("font-size","11px").attr("font-family","'JetBrains Mono', monospace").attr("font-weight","600").text(x[M]),S.forEach((U,H)=>{m.append("rect").attr("x",_(U.birth)).attr("y",w+H*N).attr("width",_(U.death)-_(U.birth)).attr("height",Math.max(N-2,2)).attr("fill",g[M]).attr("opacity",U.persistent?.9:.3).attr("rx",1)})});const b=hy(_).ticks(5).tickSize(3);m.append("g").attr("transform",`translate(0,${p})`).call(b).selectAll("text").attr("fill","#6b7d99").attr("font-size","9px"),m.selectAll(".domain").attr("stroke","#2a3a54"),m.selectAll(".tick line").attr("stroke","#2a3a54"),m.append("text").attr("x",u/2).attr("y",p+20).attr("text-anchor","middle").attr("fill","#4a6080").attr("font-size","9px").text("filtration radius ε")},[a,t,n]),xt.jsx("svg",{ref:r,width:t,height:n})}function ND({bars:a,width:t=200,height:n=200}){const r=Ge.useRef(null);return Ge.useEffect(()=>{if(!r.current||!a.length)return;const o=lm(r.current);o.selectAll("*").remove();const c={top:12,right:12,bottom:28,left:32},u=t-c.left-c.right,p=n-c.top-c.bottom,m=o.append("g").attr("transform",`translate(${c.left},${c.top})`),h=fy(a,x=>x.death)||2.5,_=Hu().domain([0,h]).range([0,u]),v=Hu().domain([0,h]).range([p,0]);m.append("line").attr("x1",0).attr("y1",p).attr("x2",u).attr("y2",0).attr("stroke","#2a3a54").attr("stroke-dasharray","3,3");const g=["#4a90d9","#e85d5d","#8b5cf6"];a.forEach(x=>{m.append("circle").attr("cx",_(x.birth)).attr("cy",v(x.death)).attr("r",x.persistent?5:3).attr("fill",g[x.dim]).attr("opacity",x.persistent?.9:.35).attr("stroke",x.persistent?"#fff":"none").attr("stroke-width",x.persistent?1:0)}),m.append("g").attr("transform",`translate(0,${p})`).call(hy(_).ticks(4).tickSize(3)).selectAll("text").attr("fill","#6b7d99").attr("font-size","8px"),m.append("g").call(B3(v).ticks(4).tickSize(3)).selectAll("text").attr("fill","#6b7d99").attr("font-size","8px"),m.selectAll(".domain").attr("stroke","#2a3a54"),m.selectAll(".tick line").attr("stroke","#2a3a54"),m.append("text").attr("x",u/2).attr("y",p+22).attr("text-anchor","middle").attr("fill","#4a6080").attr("font-size","9px").text("birth"),m.append("text").attr("x",-20).attr("y",p/2).attr("text-anchor","middle").attr("fill","#4a6080").attr("font-size","9px").attr("transform",`rotate(-90,-20,${p/2})`).text("death")},[a,t,n]),xt.jsx("svg",{ref:r,width:t,height:n})}function LD({points:a,manifoldType:t,width:n=200,height:r=200}){const o=Ge.useRef(null);return Ge.useEffect(()=>{if(!o.current||!a.length)return;const c=lm(o.current);c.selectAll("*").remove();const u={top:12,right:12,bottom:12,left:12},p=n-u.left-u.right,m=r-u.top-u.bottom,h=c.append("g").attr("transform",`translate(${u.left+p/2},${u.top+m/2})`),_=Math.min(p,m)/2-10,v=a.filter((g,x)=>x%Math.max(1,Math.floor(a.length/150))===0);h.append("circle").attr("r",_).attr("fill","none").attr("stroke","#1a2a44").attr("stroke-width",1),h.append("circle").attr("r",_*.5).attr("fill","none").attr("stroke","#1a2a44").attr("stroke-width",.5).attr("stroke-dasharray","2,3"),v.forEach((g,x)=>{const b=Math.atan2(g[1],g[0]),S=Math.sqrt(g[0]**2+g[1]**2+(g[2]||0)**2)/3.5*_;h.append("circle").attr("cx",S*Math.cos(b)).attr("cy",S*Math.sin(b)).attr("r",2.5).attr("fill",RD((b/(Math.PI*2)+1)%1)).attr("opacity",.7)})},[a,t,n,r]),xt.jsx("svg",{ref:o,width:n,height:r})}function OD({betti:a}){const t=["#4a90d9","#e85d5d","#8b5cf6"],n=["β₀","β₁","β₂"];return xt.jsx("div",{style:{display:"flex",gap:16,padding:"6px 0"},children:a.map((r,o)=>xt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[xt.jsx("span",{style:{color:t[o],fontFamily:"'JetBrains Mono', monospace",fontSize:13,fontWeight:700},children:n[o]}),xt.jsx("span",{style:{color:"#c0d0e8",fontFamily:"'JetBrains Mono', monospace",fontSize:15,fontWeight:400},children:r})]},o))})}const PD=[{id:"explore",label:"State Space",icon:"◇"},{id:"topology",label:"Topology",icon:"◎"},{id:"dynamics",label:"Dynamics",icon:"↻"},{id:"coupling",label:"Coupling",icon:"⇋"}];function FD(){const[a,t]=Ge.useState("torus"),[n,r]=Ge.useState(.06),[o,c]=Ge.useState(1200),[u,p]=Ge.useState("topology"),[m,h]=Ge.useState("explore"),[_,v]=Ge.useState(!1),[g,x]=Ge.useState(0),[b,A]=Ge.useState(null),M=Ge.useMemo(()=>{const T=ul[a];return a==="torus"?ky(o,n):a==="circle"?Vy(o,n):a==="klein"?Xy(o,n):a==="sphere"?Wy(o,n):a==="coupled"?qy(o):a==="stratified"?Yy(o):T.fn(o,n)},[a,n,o]),S=Ge.useMemo(()=>CD(a),[a,_]),w=Ge.useMemo(()=>wD(a),[a,S,_]),N=Ge.useCallback(()=>{v(T=>!T),x(0)},[]),U=Ge.useCallback(T=>{A(T),setTimeout(()=>{x(D=>Math.min(D+1,4)),A(null)},1500)},[]),H=ul[a],I={confirmed:"#22c55e",strong:"#3b82f6",investigating:"#f59e0b",unresolved:"#6b7280"},z=["Topological screening","Geometry estimation","Orientability resolved","Dynamical characterization","Full geometric claim"];return xt.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",background:"linear-gradient(145deg, #060b14 0%, #0a1628 40%, #0d1b30 100%)",fontFamily:"'Söhne', 'Helvetica Neue', sans-serif",color:"#c0d0e8",display:"flex",flexDirection:"column"},children:[xt.jsx("link",{href:"https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap",rel:"stylesheet"}),xt.jsxs("header",{style:{height:52,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",borderBottom:"1px solid rgba(74, 144, 217, 0.15)",background:"rgba(6, 11, 20, 0.8)",backdropFilter:"blur(12px)"},children:[xt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[xt.jsx("div",{style:{width:28,height:28,borderRadius:6,background:"linear-gradient(135deg, #4a90d9, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,color:"#fff"},children:"◎"}),xt.jsx("span",{style:{fontSize:16,fontWeight:600,letterSpacing:"0.04em",fontFamily:"'DM Sans', sans-serif",background:"linear-gradient(90deg, #c0d0e8, #8baac8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"CogGeometry Studio"}),xt.jsx("span",{style:{fontSize:10,color:"#4a6080",fontFamily:"'JetBrains Mono', monospace",marginLeft:4},children:"v0.1 prototype"})]}),xt.jsx("div",{style:{display:"flex",gap:2},children:PD.map(T=>xt.jsxs("button",{onClick:()=>h(T.id),style:{padding:"6px 14px",border:"none",borderRadius:6,cursor:"pointer",fontFamily:"'DM Sans', sans-serif",fontSize:12,fontWeight:500,background:m===T.id?"rgba(74, 144, 217, 0.15)":"transparent",color:m===T.id?"#8bb8e0":"#4a6080",transition:"all 0.2s"},children:[xt.jsx("span",{style:{marginRight:5},children:T.icon}),T.label]},T.id))}),xt.jsx("div",{style:{fontSize:10,color:"#3a5070",fontFamily:"'JetBrains Mono', monospace"},children:"Geometric Cognition Programme"})]}),xt.jsxs("div",{style:{flex:1,display:"flex",overflow:"hidden"},children:[xt.jsxs("div",{style:{width:380,flexShrink:0,display:"flex",flexDirection:"column",borderRight:"1px solid rgba(74, 144, 217, 0.1)",background:"rgba(10, 18, 32, 0.5)"},children:[xt.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid rgba(74, 144, 217, 0.08)"},children:[xt.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#5a7a9a",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:10,fontFamily:"'DM Sans', sans-serif"},children:"◇ State Space Explorer"}),xt.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4,marginBottom:12},children:Object.entries(ul).map(([T,D])=>xt.jsx("button",{onClick:()=>{t(T),x(0)},style:{padding:"7px 4px",border:"1px solid",borderColor:a===T?"rgba(74, 144, 217, 0.5)":"rgba(42, 58, 84, 0.5)",borderRadius:5,cursor:"pointer",background:a===T?"rgba(74, 144, 217, 0.12)":"rgba(15, 25, 40, 0.5)",color:a===T?"#8bb8e0":"#5a7090",fontSize:10,fontFamily:"'DM Sans', sans-serif",fontWeight:500,transition:"all 0.2s"},children:D.label},T))}),xt.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[xt.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[xt.jsx("span",{style:{fontSize:10,color:"#4a6080",fontFamily:"'JetBrains Mono', monospace"},children:"noise σ"}),xt.jsx("input",{type:"range",min:"0",max:"0.3",step:"0.01",value:n,onChange:T=>r(+T.target.value),style:{width:120,accentColor:"#4a90d9"}}),xt.jsx("span",{style:{fontSize:10,color:"#8bb8e0",fontFamily:"'JetBrains Mono', monospace",width:36,textAlign:"right"},children:n.toFixed(2)})]}),xt.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[xt.jsx("span",{style:{fontSize:10,color:"#4a6080",fontFamily:"'JetBrains Mono', monospace"},children:"points"}),xt.jsx("input",{type:"range",min:"200",max:"3000",step:"100",value:o,onChange:T=>c(+T.target.value),style:{width:120,accentColor:"#4a90d9"}}),xt.jsx("span",{style:{fontSize:10,color:"#8bb8e0",fontFamily:"'JetBrains Mono', monospace",width:36,textAlign:"right"},children:o})]})]}),xt.jsx("div",{style:{display:"flex",gap:4,marginTop:10},children:["topology","time","height"].map(T=>xt.jsx("button",{onClick:()=>p(T),style:{padding:"4px 10px",border:"1px solid",borderColor:u===T?"rgba(74, 144, 217, 0.4)":"rgba(42, 58, 84, 0.3)",borderRadius:4,cursor:"pointer",background:u===T?"rgba(74, 144, 217, 0.1)":"transparent",color:u===T?"#8bb8e0":"#4a6080",fontSize:9,fontFamily:"'JetBrains Mono', monospace",textTransform:"uppercase"},children:T},T))})]}),xt.jsxs("div",{style:{flex:1,position:"relative"},children:[xt.jsx(DD,{points:M,manifoldType:a,colorMode:u}),xt.jsxs("div",{style:{position:"absolute",bottom:12,left:12,background:"rgba(6, 11, 20, 0.85)",backdropFilter:"blur(8px)",borderRadius:6,padding:"6px 10px",border:"1px solid rgba(74, 144, 217, 0.1)",display:"flex",gap:14},children:[xt.jsxs("span",{style:{fontSize:9,color:"#4a6080",fontFamily:"'JetBrains Mono', monospace"},children:["dim: ",xt.jsx("span",{style:{color:"#8bb8e0"},children:a==="stratified"?"1–2":a==="circle"?"1":"2"})]}),xt.jsxs("span",{style:{fontSize:9,color:"#4a6080",fontFamily:"'JetBrains Mono', monospace"},children:["n: ",xt.jsx("span",{style:{color:"#8bb8e0"},children:M.length.toLocaleString()})]}),xt.jsxs("span",{style:{fontSize:9,color:"#4a6080",fontFamily:"'JetBrains Mono', monospace"},children:["σ: ",xt.jsx("span",{style:{color:"#8bb8e0"},children:n.toFixed(2)})]})]}),xt.jsx("div",{style:{position:"absolute",top:12,right:12,background:"rgba(6, 11, 20, 0.8)",borderRadius:6,padding:"5px 9px",border:"1px solid rgba(74, 144, 217, 0.1)",fontSize:9,color:"#5a7a9a",fontFamily:"'JetBrains Mono', monospace"},children:"drag to rotate"})]}),xt.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid rgba(74, 144, 217, 0.08)",fontSize:11,color:"#5a7a9a",fontFamily:"'DM Sans', sans-serif"},children:[xt.jsx("span",{style:{color:"#8bb8e0",fontWeight:600},children:H.label})," — ",H.desc]})]}),xt.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",background:"rgba(8, 15, 28, 0.3)",overflow:"auto"},children:[xt.jsxs("div",{style:{padding:"14px 20px",borderBottom:"1px solid rgba(74, 144, 217, 0.08)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[xt.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#5a7a9a",textTransform:"uppercase",letterSpacing:"0.08em",fontFamily:"'DM Sans', sans-serif"},children:"◎ Topology Inspector"}),xt.jsx("button",{onClick:N,style:{padding:"5px 14px",border:"1px solid rgba(74, 144, 217, 0.4)",borderRadius:5,cursor:"pointer",background:"rgba(74, 144, 217, 0.12)",color:"#8bb8e0",fontSize:10,fontFamily:"'DM Sans', sans-serif",fontWeight:600,transition:"all 0.2s"},children:"Run Persistence"})]}),xt.jsxs("div",{style:{padding:"12px 20px",flex:1},children:[xt.jsxs("div",{style:{display:"flex",gap:8,marginBottom:14},children:[xt.jsx("div",{style:{padding:"4px 10px",borderRadius:4,background:"rgba(74, 144, 217, 0.12)",border:"1px solid rgba(74, 144, 217, 0.3)",fontSize:10,color:"#8bb8e0",fontFamily:"'JetBrains Mono', monospace"},children:"VR filtration"}),xt.jsx("div",{style:{padding:"4px 10px",borderRadius:4,background:"rgba(30, 40, 60, 0.5)",border:"1px solid rgba(42, 58, 84, 0.3)",fontSize:10,color:"#5a7090",fontFamily:"'JetBrains Mono', monospace"},children:"Z₂"}),xt.jsx("div",{style:{padding:"4px 10px",borderRadius:4,background:"rgba(30, 40, 60, 0.5)",border:"1px solid rgba(42, 58, 84, 0.3)",fontSize:10,color:"#5a7090",fontFamily:"'JetBrains Mono', monospace"},children:"Z₃"})]}),xt.jsxs("div",{style:{padding:"8px 12px",borderRadius:6,marginBottom:14,background:"rgba(15, 25, 40, 0.5)",border:"1px solid rgba(42, 58, 84, 0.3)"},children:[xt.jsx("div",{style:{fontSize:9,color:"#4a6080",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:4,fontFamily:"'JetBrains Mono', monospace"},children:"Betti Numbers (persistent)"}),xt.jsx(OD,{betti:H.betti})]}),xt.jsxs("div",{style:{padding:"10px",borderRadius:6,marginBottom:14,background:"rgba(10, 18, 32, 0.6)",border:"1px solid rgba(42, 58, 84, 0.2)"},children:[xt.jsx("div",{style:{fontSize:9,color:"#4a6080",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6,fontFamily:"'JetBrains Mono', monospace"},children:"Persistence Barcode"}),xt.jsx(UD,{bars:S,width:380,height:150})]}),xt.jsxs("div",{style:{display:"flex",gap:12},children:[xt.jsxs("div",{style:{flex:1,padding:"10px",borderRadius:6,background:"rgba(10, 18, 32, 0.6)",border:"1px solid rgba(42, 58, 84, 0.2)"},children:[xt.jsx("div",{style:{fontSize:9,color:"#4a6080",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:4,fontFamily:"'JetBrains Mono', monospace"},children:"Persistence Diagram"}),xt.jsx(ND,{bars:S,width:200,height:200})]}),xt.jsxs("div",{style:{flex:1,padding:"10px",borderRadius:6,background:"rgba(10, 18, 32, 0.6)",border:"1px solid rgba(42, 58, 84, 0.2)"},children:[xt.jsx("div",{style:{fontSize:9,color:"#4a6080",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:4,fontFamily:"'JetBrains Mono', monospace"},children:"Cohomology Coordinates"}),xt.jsx(LD,{points:M,manifoldType:a,width:200,height:200})]})]}),a==="coupled"&&xt.jsxs("div",{style:{marginTop:14,padding:"10px 12px",borderRadius:6,background:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)"},children:[xt.jsx("div",{style:{fontSize:9,color:"#8b5cf6",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6,fontFamily:"'JetBrains Mono', monospace"},children:"Künneth Deviation Test"}),xt.jsxs("div",{style:{display:"flex",gap:16},children:[xt.jsxs("div",{style:{fontSize:11,fontFamily:"'JetBrains Mono', monospace"},children:[xt.jsx("span",{style:{color:"#6b7d99"},children:"Δ₀ = "}),xt.jsx("span",{style:{color:"#22c55e"},children:"0"})]}),xt.jsxs("div",{style:{fontSize:11,fontFamily:"'JetBrains Mono', monospace"},children:[xt.jsx("span",{style:{color:"#6b7d99"},children:"Δ₁ = "}),xt.jsx("span",{style:{color:"#f59e0b"},children:"1"})]}),xt.jsxs("div",{style:{fontSize:11,fontFamily:"'JetBrains Mono', monospace"},children:[xt.jsx("span",{style:{color:"#6b7d99"},children:"Δ₂ = "}),xt.jsx("span",{style:{color:"#22c55e"},children:"0"})]})]}),xt.jsx("div",{style:{fontSize:10,color:"#8b5cf6",marginTop:6,fontFamily:"'DM Sans', sans-serif"},children:"Non-product topology detected — geometric coupling supported"})]})]})]}),xt.jsxs("div",{style:{width:300,flexShrink:0,display:"flex",flexDirection:"column",borderLeft:"1px solid rgba(74, 144, 217, 0.1)",background:"rgba(10, 18, 32, 0.5)"},children:[xt.jsx("div",{style:{padding:"14px 16px",borderBottom:"1px solid rgba(74, 144, 217, 0.08)"},children:xt.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#5a7a9a",textTransform:"uppercase",letterSpacing:"0.08em",fontFamily:"'DM Sans', sans-serif"},children:"⊙ Claim Builder"})}),xt.jsxs("div",{style:{padding:"12px 16px",flex:1,overflow:"auto"},children:[xt.jsxs("div",{style:{padding:"12px",borderRadius:8,marginBottom:14,background:"rgba(15, 25, 40, 0.6)",border:"1px solid rgba(42, 58, 84, 0.3)"},children:[xt.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#8baac8",marginBottom:10,fontFamily:"'DM Sans', sans-serif"},children:"Current Hypothesis"}),w.map((T,D)=>xt.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:8},children:[xt.jsx("div",{style:{width:7,height:7,borderRadius:"50%",marginTop:4,flexShrink:0,background:I[T.status],boxShadow:`0 0 6px ${I[T.status]}50`}}),xt.jsxs("div",{children:[xt.jsx("div",{style:{fontSize:11,color:"#c0d0e8",fontFamily:"'DM Sans', sans-serif",lineHeight:1.4},children:T.text}),xt.jsxs("div",{style:{fontSize:9,color:"#4a6080",fontFamily:"'JetBrains Mono', monospace",marginTop:2},children:["confidence: ",(T.confidence*100).toFixed(0),"%"]})]})]},D))]}),xt.jsxs("div",{style:{padding:"10px 12px",borderRadius:8,marginBottom:14,background:"rgba(15, 25, 40, 0.4)",border:"1px solid rgba(42, 58, 84, 0.2)"},children:[xt.jsx("div",{style:{fontSize:9,color:"#4a6080",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8,fontFamily:"'JetBrains Mono', monospace"},children:"Inference Ladder"}),z.map((T,D)=>xt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6,opacity:D<=g?1:.35},children:[xt.jsx("div",{style:{width:16,height:16,borderRadius:3,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${D<=g?"#4a90d9":"#2a3a54"}`,background:D<g?"rgba(74, 144, 217, 0.2)":"transparent",fontSize:9,color:D<g?"#4a90d9":"#3a5070"},children:D<g?"✓":D+1}),xt.jsx("span",{style:{fontSize:10,fontFamily:"'DM Sans', sans-serif",color:D<=g?"#8bb8e0":"#3a5070",fontWeight:D===g?600:400},children:T})]},D))]}),xt.jsxs("div",{style:{padding:"12px",borderRadius:8,background:"rgba(15, 25, 40, 0.4)",border:"1px solid rgba(42, 58, 84, 0.2)"},children:[xt.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#8baac8",marginBottom:10,fontFamily:"'DM Sans', sans-serif"},children:"Escalate Study"}),[{id:"curvature",label:"Test Curvature",available:g>=0},{id:"dynamics",label:"Analyze Dynamics",available:g>=1},{id:"orientability",label:"Check Orientability",available:g>=0},{id:"holonomy",label:"Estimate Holonomy",available:g>=2},{id:"coupling",label:"Test Coupling",available:g>=1}].map(T=>xt.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:6,opacity:T.available?1:.3},children:[xt.jsxs("span",{style:{fontSize:10,color:"#7a9ab8",fontFamily:"'DM Sans', sans-serif"},children:["▸ ",T.label]}),xt.jsx("button",{onClick:()=>T.available&&U(T.id),disabled:!T.available||b!==null,style:{padding:"3px 10px",border:"1px solid rgba(74, 144, 217, 0.3)",borderRadius:4,cursor:T.available?"pointer":"default",background:b===T.id?"rgba(74, 144, 217, 0.3)":"rgba(74, 144, 217, 0.08)",color:"#8bb8e0",fontSize:9,fontFamily:"'JetBrains Mono', monospace",transition:"all 0.2s"},children:b===T.id?"running...":"Run"})]},T.id))]}),xt.jsxs("div",{style:{marginTop:14,padding:"12px",borderRadius:8,background:"linear-gradient(135deg, rgba(74, 144, 217, 0.08), rgba(139, 92, 246, 0.08))",border:"1px solid rgba(74, 144, 217, 0.15)"},children:[xt.jsx("div",{style:{fontSize:9,color:"#4a6080",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6,fontFamily:"'JetBrains Mono', monospace"},children:"Strongest Defensible Claim"}),xt.jsxs("div",{style:{fontSize:12,color:"#c0d0e8",fontFamily:"'DM Sans', sans-serif",lineHeight:1.5},children:[a==="torus"&&"Toroidal latent manifold with two persistent 1-cycles. Orientable. Dynamics uncharacterized.",a==="circle"&&"Circular manifold (S¹) with one persistent 1-cycle. Consistent with ring attractor dynamics.",a==="klein"&&"Non-orientable surface candidate. Z₂/Z₃ coefficient divergence detected. Requires further investigation.",a==="sphere"&&"Closed orientable surface (S²) with persistent 2-cycle. No 1-cycles. Spherical topology supported.",a==="coupled"&&"Coupled circular systems with Künneth deviation Δ₁ = 1. Non-product joint topology. Geometric coupling supported.",a==="stratified"&&"Multi-stratum state space with local dimension variation. Stratified structure candidate. Not a smooth manifold."]})]}),xt.jsxs("div",{style:{marginTop:14,padding:"10px 12px",borderRadius:6,border:"1px solid rgba(42, 58, 84, 0.15)"},children:[xt.jsx("div",{style:{fontSize:9,color:"#3a5070",fontStyle:"italic",fontFamily:"'DM Sans', sans-serif",lineHeight:1.5},children:'"Report at the strongest defensible level, not the most exciting one."'}),xt.jsx("div",{style:{fontSize:8,color:"#2a3a54",marginTop:4,fontFamily:"'JetBrains Mono', monospace"},children:"— Conservative Claim Ladder, §9"})]})]})]})]})]})}function zD(){return xt.jsx(FD,{})}o1.createRoot(document.getElementById("root")).render(xt.jsx(Ge.StrictMode,{children:xt.jsx(zD,{})}));
