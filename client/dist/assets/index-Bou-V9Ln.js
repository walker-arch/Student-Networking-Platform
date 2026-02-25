(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function u(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(m){if(m.ep)return;m.ep=!0;const h=u(m);fetch(m.href,h)}})();function Sg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var sc={exports:{}},ei={};var Lm;function Ng(){if(Lm)return ei;Lm=1;var s=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(d,m,h){var p=null;if(h!==void 0&&(p=""+h),m.key!==void 0&&(p=""+m.key),"key"in m){h={};for(var b in m)b!=="key"&&(h[b]=m[b])}else h=m;return m=h.ref,{$$typeof:s,type:d,key:p,ref:m!==void 0?m:null,props:h}}return ei.Fragment=o,ei.jsx=u,ei.jsxs=u,ei}var Bm;function wg(){return Bm||(Bm=1,sc.exports=Ng()),sc.exports}var l=wg(),oc={exports:{}},ce={};var Ym;function zg(){if(Ym)return ce;Ym=1;var s=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),q=Symbol.iterator;function H(S){return S===null||typeof S!="object"?null:(S=q&&S[q]||S["@@iterator"],typeof S=="function"?S:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function G(S,L,V){this.props=S,this.context=L,this.refs=M,this.updater=V||O}G.prototype.isReactComponent={},G.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},G.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function X(){}X.prototype=G.prototype;function Z(S,L,V){this.props=S,this.context=L,this.refs=M,this.updater=V||O}var re=Z.prototype=new X;re.constructor=Z,D(re,G.prototype),re.isPureReactComponent=!0;var $=Array.isArray;function se(){}var K={H:null,A:null,T:null,S:null},me=Object.prototype.hasOwnProperty;function Ee(S,L,V){var A=V.ref;return{$$typeof:s,type:S,key:L,ref:A!==void 0?A:null,props:V}}function Ue(S,L){return Ee(S.type,L,S.props)}function Ge(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function Me(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(V){return L[V]})}var Le=/\/+/g;function F(S,L){return typeof S=="object"&&S!==null&&S.key!=null?Me(""+S.key):L.toString(36)}function P(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(se,se):(S.status="pending",S.then(function(L){S.status==="pending"&&(S.status="fulfilled",S.value=L)},function(L){S.status==="pending"&&(S.status="rejected",S.reason=L)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function _(S,L,V,A,J){var ne=typeof S;(ne==="undefined"||ne==="boolean")&&(S=null);var de=!1;if(S===null)de=!0;else switch(ne){case"bigint":case"string":case"number":de=!0;break;case"object":switch(S.$$typeof){case s:case o:de=!0;break;case w:return de=S._init,_(de(S._payload),L,V,A,J)}}if(de)return J=J(S),de=A===""?"."+F(S,0):A,$(J)?(V="",de!=null&&(V=de.replace(Le,"$&/")+"/"),_(J,L,V,"",function(je){return je})):J!=null&&(Ge(J)&&(J=Ue(J,V+(J.key==null||S&&S.key===J.key?"":(""+J.key).replace(Le,"$&/")+"/")+de)),L.push(J)),1;de=0;var te=A===""?".":A+":";if($(S))for(var Y=0;Y<S.length;Y++)A=S[Y],ne=te+F(A,Y),de+=_(A,L,V,ne,J);else if(Y=H(S),typeof Y=="function")for(S=Y.call(S),Y=0;!(A=S.next()).done;)A=A.value,ne=te+F(A,Y++),de+=_(A,L,V,ne,J);else if(ne==="object"){if(typeof S.then=="function")return _(P(S),L,V,A,J);throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return de}function Q(S,L,V){if(S==null)return S;var A=[],J=0;return _(S,A,"","",function(ne){return L.call(V,ne,J++)}),A}function ee(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(V){(S._status===0||S._status===-1)&&(S._status=1,S._result=V)},function(V){(S._status===0||S._status===-1)&&(S._status=2,S._result=V)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var ge=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},xe={map:Q,forEach:function(S,L,V){Q(S,function(){L.apply(this,arguments)},V)},count:function(S){var L=0;return Q(S,function(){L++}),L},toArray:function(S){return Q(S,function(L){return L})||[]},only:function(S){if(!Ge(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ce.Activity=N,ce.Children=xe,ce.Component=G,ce.Fragment=u,ce.Profiler=m,ce.PureComponent=Z,ce.StrictMode=d,ce.Suspense=v,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ce.__COMPILER_RUNTIME={__proto__:null,c:function(S){return K.H.useMemoCache(S)}},ce.cache=function(S){return function(){return S.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(S,L,V){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var A=D({},S.props),J=S.key;if(L!=null)for(ne in L.key!==void 0&&(J=""+L.key),L)!me.call(L,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&L.ref===void 0||(A[ne]=L[ne]);var ne=arguments.length-2;if(ne===1)A.children=V;else if(1<ne){for(var de=Array(ne),te=0;te<ne;te++)de[te]=arguments[te+2];A.children=de}return Ee(S.type,J,A)},ce.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},ce.createElement=function(S,L,V){var A,J={},ne=null;if(L!=null)for(A in L.key!==void 0&&(ne=""+L.key),L)me.call(L,A)&&A!=="key"&&A!=="__self"&&A!=="__source"&&(J[A]=L[A]);var de=arguments.length-2;if(de===1)J.children=V;else if(1<de){for(var te=Array(de),Y=0;Y<de;Y++)te[Y]=arguments[Y+2];J.children=te}if(S&&S.defaultProps)for(A in de=S.defaultProps,de)J[A]===void 0&&(J[A]=de[A]);return Ee(S,ne,J)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(S){return{$$typeof:b,render:S}},ce.isValidElement=Ge,ce.lazy=function(S){return{$$typeof:w,_payload:{_status:-1,_result:S},_init:ee}},ce.memo=function(S,L){return{$$typeof:g,type:S,compare:L===void 0?null:L}},ce.startTransition=function(S){var L=K.T,V={};K.T=V;try{var A=S(),J=K.S;J!==null&&J(V,A),typeof A=="object"&&A!==null&&typeof A.then=="function"&&A.then(se,ge)}catch(ne){ge(ne)}finally{L!==null&&V.types!==null&&(L.types=V.types),K.T=L}},ce.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ce.use=function(S){return K.H.use(S)},ce.useActionState=function(S,L,V){return K.H.useActionState(S,L,V)},ce.useCallback=function(S,L){return K.H.useCallback(S,L)},ce.useContext=function(S){return K.H.useContext(S)},ce.useDebugValue=function(){},ce.useDeferredValue=function(S,L){return K.H.useDeferredValue(S,L)},ce.useEffect=function(S,L){return K.H.useEffect(S,L)},ce.useEffectEvent=function(S){return K.H.useEffectEvent(S)},ce.useId=function(){return K.H.useId()},ce.useImperativeHandle=function(S,L,V){return K.H.useImperativeHandle(S,L,V)},ce.useInsertionEffect=function(S,L){return K.H.useInsertionEffect(S,L)},ce.useLayoutEffect=function(S,L){return K.H.useLayoutEffect(S,L)},ce.useMemo=function(S,L){return K.H.useMemo(S,L)},ce.useOptimistic=function(S,L){return K.H.useOptimistic(S,L)},ce.useReducer=function(S,L,V){return K.H.useReducer(S,L,V)},ce.useRef=function(S){return K.H.useRef(S)},ce.useState=function(S){return K.H.useState(S)},ce.useSyncExternalStore=function(S,L,V){return K.H.useSyncExternalStore(S,L,V)},ce.useTransition=function(){return K.H.useTransition()},ce.version="19.2.3",ce}var Gm;function wc(){return Gm||(Gm=1,oc.exports=zg()),oc.exports}var y=wc();const oh=Sg(y);var cc={exports:{}},ti={},uc={exports:{}},dc={};var Xm;function kg(){return Xm||(Xm=1,(function(s){function o(_,Q){var ee=_.length;_.push(Q);e:for(;0<ee;){var ge=ee-1>>>1,xe=_[ge];if(0<m(xe,Q))_[ge]=Q,_[ee]=xe,ee=ge;else break e}}function u(_){return _.length===0?null:_[0]}function d(_){if(_.length===0)return null;var Q=_[0],ee=_.pop();if(ee!==Q){_[0]=ee;e:for(var ge=0,xe=_.length,S=xe>>>1;ge<S;){var L=2*(ge+1)-1,V=_[L],A=L+1,J=_[A];if(0>m(V,ee))A<xe&&0>m(J,V)?(_[ge]=J,_[A]=ee,ge=A):(_[ge]=V,_[L]=ee,ge=L);else if(A<xe&&0>m(J,ee))_[ge]=J,_[A]=ee,ge=A;else break e}}return Q}function m(_,Q){var ee=_.sortIndex-Q.sortIndex;return ee!==0?ee:_.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var p=Date,b=p.now();s.unstable_now=function(){return p.now()-b}}var v=[],g=[],w=1,N=null,q=3,H=!1,O=!1,D=!1,M=!1,G=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function re(_){for(var Q=u(g);Q!==null;){if(Q.callback===null)d(g);else if(Q.startTime<=_)d(g),Q.sortIndex=Q.expirationTime,o(v,Q);else break;Q=u(g)}}function $(_){if(D=!1,re(_),!O)if(u(v)!==null)O=!0,se||(se=!0,Me());else{var Q=u(g);Q!==null&&P($,Q.startTime-_)}}var se=!1,K=-1,me=5,Ee=-1;function Ue(){return M?!0:!(s.unstable_now()-Ee<me)}function Ge(){if(M=!1,se){var _=s.unstable_now();Ee=_;var Q=!0;try{e:{O=!1,D&&(D=!1,X(K),K=-1),H=!0;var ee=q;try{t:{for(re(_),N=u(v);N!==null&&!(N.expirationTime>_&&Ue());){var ge=N.callback;if(typeof ge=="function"){N.callback=null,q=N.priorityLevel;var xe=ge(N.expirationTime<=_);if(_=s.unstable_now(),typeof xe=="function"){N.callback=xe,re(_),Q=!0;break t}N===u(v)&&d(v),re(_)}else d(v);N=u(v)}if(N!==null)Q=!0;else{var S=u(g);S!==null&&P($,S.startTime-_),Q=!1}}break e}finally{N=null,q=ee,H=!1}Q=void 0}}finally{Q?Me():se=!1}}}var Me;if(typeof Z=="function")Me=function(){Z(Ge)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,F=Le.port2;Le.port1.onmessage=Ge,Me=function(){F.postMessage(null)}}else Me=function(){G(Ge,0)};function P(_,Q){K=G(function(){_(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(_){_.callback=null},s.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<_?Math.floor(1e3/_):5},s.unstable_getCurrentPriorityLevel=function(){return q},s.unstable_next=function(_){switch(q){case 1:case 2:case 3:var Q=3;break;default:Q=q}var ee=q;q=Q;try{return _()}finally{q=ee}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(_,Q){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var ee=q;q=_;try{return Q()}finally{q=ee}},s.unstable_scheduleCallback=function(_,Q,ee){var ge=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ge+ee:ge):ee=ge,_){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ee+xe,_={id:w++,callback:Q,priorityLevel:_,startTime:ee,expirationTime:xe,sortIndex:-1},ee>ge?(_.sortIndex=ee,o(g,_),u(v)===null&&_===u(g)&&(D?(X(K),K=-1):D=!0,P($,ee-ge))):(_.sortIndex=xe,o(v,_),O||H||(O=!0,se||(se=!0,Me()))),_},s.unstable_shouldYield=Ue,s.unstable_wrapCallback=function(_){var Q=q;return function(){var ee=q;q=Q;try{return _.apply(this,arguments)}finally{q=ee}}}})(dc)),dc}var Qm;function Cg(){return Qm||(Qm=1,uc.exports=kg()),uc.exports}var fc={exports:{}},rt={};var Vm;function Eg(){if(Vm)return rt;Vm=1;var s=wc();function o(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)g+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var d={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(v,g,w){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:N==null?null:""+N,children:v,containerInfo:g,implementation:w}}var p=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,rt.createPortal=function(v,g){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return h(v,g,null,w)},rt.flushSync=function(v){var g=p.T,w=d.p;try{if(p.T=null,d.p=2,v)return v()}finally{p.T=g,d.p=w,d.d.f()}},rt.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,d.d.C(v,g))},rt.prefetchDNS=function(v){typeof v=="string"&&d.d.D(v)},rt.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var w=g.as,N=b(w,g.crossOrigin),q=typeof g.integrity=="string"?g.integrity:void 0,H=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;w==="style"?d.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:N,integrity:q,fetchPriority:H}):w==="script"&&d.d.X(v,{crossOrigin:N,integrity:q,fetchPriority:H,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rt.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var w=b(g.as,g.crossOrigin);d.d.M(v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&d.d.M(v)},rt.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var w=g.as,N=b(w,g.crossOrigin);d.d.L(v,w,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rt.preloadModule=function(v,g){if(typeof v=="string")if(g){var w=b(g.as,g.crossOrigin);d.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else d.d.m(v)},rt.requestFormReset=function(v){d.d.r(v)},rt.unstable_batchedUpdates=function(v,g){return v(g)},rt.useFormState=function(v,g,w){return p.H.useFormState(v,g,w)},rt.useFormStatus=function(){return p.H.useHostTransitionStatus()},rt.version="19.2.3",rt}var Zm;function _g(){if(Zm)return fc.exports;Zm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(o){console.error(o)}}return s(),fc.exports=Eg(),fc.exports}var Km;function Tg(){if(Km)return ti;Km=1;var s=Cg(),o=wc(),u=_g();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(d(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return v(i),e;if(r===n)return v(i),t;r=r.sibling}throw Error(d(188))}if(a.return!==n.return)a=i,n=r;else{for(var c=!1,f=i.child;f;){if(f===a){c=!0,a=i,n=r;break}if(f===n){c=!0,n=i,a=r;break}f=f.sibling}if(!c){for(f=r.child;f;){if(f===a){c=!0,a=r,n=i;break}if(f===n){c=!0,n=r,a=i;break}f=f.sibling}if(!c)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,q=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Ue=Symbol.for("react.memo_cache_sentinel"),Ge=Symbol.iterator;function Me(e){return e===null||typeof e!="object"?null:(e=Ge&&e[Ge]||e["@@iterator"],typeof e=="function"?e:null)}var Le=Symbol.for("react.client.reference");function F(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case G:return"Profiler";case M:return"StrictMode";case $:return"Suspense";case se:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case Z:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:F(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return F(e(t))}catch{}}return null}var P=Array.isArray,_=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ge=[],xe=-1;function S(e){return{current:e}}function L(e){0>xe||(e.current=ge[xe],ge[xe]=null,xe--)}function V(e,t){xe++,ge[xe]=e.current,e.current=t}var A=S(null),J=S(null),ne=S(null),de=S(null);function te(e,t){switch(V(ne,t),V(J,e),V(A,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?om(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=om(t),e=cm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(A),V(A,e)}function Y(){L(A),L(J),L(ne)}function je(e){e.memoizedState!==null&&V(de,e);var t=A.current,a=cm(t,e.type);t!==a&&(V(J,e),V(A,a))}function We(e){J.current===e&&(L(A),L(J)),de.current===e&&(L(de),Fl._currentValue=ee)}var Fa,qc;function Wa(e){if(Fa===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Fa=t&&t[1]||"",qc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fa+e+qc}var Xr=!1;function Qr(e,t){if(!e||Xr)return"";Xr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(T){var E=T}Reflect.construct(e,[],B)}else{try{B.call()}catch(T){E=T}e.call(B.prototype)}}else{try{throw Error()}catch(T){E=T}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(T){if(T&&E&&typeof T.stack=="string")return[T.stack,E.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),c=r[0],f=r[1];if(c&&f){var x=c.split(`
`),C=f.split(`
`);for(i=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(n===x.length||i===C.length)for(n=x.length-1,i=C.length-1;1<=n&&0<=i&&x[n]!==C[i];)i--;for(;1<=n&&0<=i;n--,i--)if(x[n]!==C[i]){if(n!==1||i!==1)do if(n--,i--,0>i||x[n]!==C[i]){var R=`
`+x[n].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=n&&0<=i);break}}}finally{Xr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wa(a):""}function Ph(e,t){switch(e.tag){case 26:case 27:case 5:return Wa(e.type);case 16:return Wa("Lazy");case 13:return e.child!==t&&t!==null?Wa("Suspense Fallback"):Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 15:return Qr(e.type,!1);case 11:return Qr(e.type.render,!1);case 1:return Qr(e.type,!0);case 31:return Wa("Activity");default:return""}}function Hc(e){try{var t="",a=null;do t+=Ph(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Vr=Object.prototype.hasOwnProperty,Zr=s.unstable_scheduleCallback,Kr=s.unstable_cancelCallback,ep=s.unstable_shouldYield,tp=s.unstable_requestPaint,gt=s.unstable_now,ap=s.unstable_getCurrentPriorityLevel,Lc=s.unstable_ImmediatePriority,Bc=s.unstable_UserBlockingPriority,ui=s.unstable_NormalPriority,np=s.unstable_LowPriority,Yc=s.unstable_IdlePriority,lp=s.log,ip=s.unstable_setDisableYieldValue,ol=null,yt=null;function Sa(e){if(typeof lp=="function"&&ip(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(ol,e)}catch{}}var vt=Math.clz32?Math.clz32:op,rp=Math.log,sp=Math.LN2;function op(e){return e>>>=0,e===0?32:31-(rp(e)/sp|0)|0}var di=256,fi=262144,mi=4194304;function Ia(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=n&134217727;return f!==0?(n=f&~r,n!==0?i=Ia(n):(c&=f,c!==0?i=Ia(c):a||(a=f&~e,a!==0&&(i=Ia(a))))):(f=n&~r,f!==0?i=Ia(f):c!==0?i=Ia(c):a||(a=n&~e,a!==0&&(i=Ia(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function cl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gc(){var e=mi;return mi<<=1,(mi&62914560)===0&&(mi=4194304),e}function Jr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function up(e,t,a,n,i,r){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,x=e.expirationTimes,C=e.hiddenUpdates;for(a=c&~a;0<a;){var R=31-vt(a),B=1<<R;f[R]=0,x[R]=-1;var E=C[R];if(E!==null)for(C[R]=null,R=0;R<E.length;R++){var T=E[R];T!==null&&(T.lane&=-536870913)}a&=~B}n!==0&&Xc(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(c&~t))}function Xc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-vt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Qc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-vt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Vc(e,t){var a=t&-t;return a=(a&42)!==0?1:$r(a),(a&(e.suspendedLanes|t))!==0?0:a}function $r(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zc(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Mm(e.type))}function Kc(e,t){var a=Q.p;try{return Q.p=e,t()}finally{Q.p=a}}var Na=Math.random().toString(36).slice(2),tt="__reactFiber$"+Na,ot="__reactProps$"+Na,vn="__reactContainer$"+Na,Wr="__reactEvents$"+Na,dp="__reactListeners$"+Na,fp="__reactHandles$"+Na,Jc="__reactResources$"+Na,dl="__reactMarker$"+Na;function Ir(e){delete e[tt],delete e[ot],delete e[Wr],delete e[dp],delete e[fp]}function bn(e){var t=e[tt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[vn]||a[tt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=gm(e);e!==null;){if(a=e[tt])return a;e=gm(e)}return t}e=a,a=e.parentNode}return null}function xn(e){if(e=e[tt]||e[vn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function jn(e){var t=e[Jc];return t||(t=e[Jc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[dl]=!0}var $c=new Set,Fc={};function Pa(e,t){Sn(e,t),Sn(e+"Capture",t)}function Sn(e,t){for(Fc[e]=t,e=0;e<t.length;e++)$c.add(t[e])}var mp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wc={},Ic={};function hp(e){return Vr.call(Ic,e)?!0:Vr.call(Wc,e)?!1:mp.test(e)?Ic[e]=!0:(Wc[e]=!0,!1)}function pi(e,t,a){if(hp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function gi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Pt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pp(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,r.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){if(!e._valueTracker){var t=Pc(e)?"checked":"value";e._valueTracker=pp(e,t,""+e[t])}}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Pc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gp=/[\n"\\]/g;function _t(e){return e.replace(gp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function es(e,t,a,n,i,r,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?ts(e,c,Et(t)):a!=null?ts(e,c,Et(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Et(f):e.removeAttribute("name")}function tu(e,t,a,n,i,r,c,f){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Pr(e);return}a=a!=null?""+Et(a):"",t=t!=null?""+Et(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=f?e.checked:!!n,e.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Pr(e)}function ts(e,t,a){t==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Nn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Et(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function au(e,t,a){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Et(a):""}function nu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if(P(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Et(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Pr(e)}function wn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var yp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||yp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function iu(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&lu(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&lu(e,r,t[r])}function as(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vi(e){return bp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var ns=null;function ls(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zn=null,kn=null;function ru(e){var t=xn(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(es(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[ot]||null;if(!i)throw Error(d(90));es(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&eu(n)}break e;case"textarea":au(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Nn(e,!!a.multiple,t,!1)}}}var is=!1;function su(e,t,a){if(is)return e(t,a);is=!0;try{var n=e(t);return n}finally{if(is=!1,(zn!==null||kn!==null)&&(ir(),zn&&(t=zn,e=kn,kn=zn=null,ru(t),e)))for(t=0;t<e.length;t++)ru(e[t])}}function ml(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ot]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rs=!1;if(ta)try{var hl={};Object.defineProperty(hl,"passive",{get:function(){rs=!0}}),window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,hl)}catch{rs=!1}var wa=null,ss=null,bi=null;function ou(){if(bi)return bi;var e,t=ss,a=t.length,n,i="value"in wa?wa.value:wa.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var c=a-e;for(n=1;n<=c&&t[a-n]===i[r-n];n++);return bi=i.slice(e,1<n?1-n:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function cu(){return!1}function ct(e){function t(a,n,i,r,c){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(r):r[f]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ji:cu,this.isPropagationStopped=cu,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var en={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Si=ct(en),pl=N({},en,{view:0,detail:0}),xp=ct(pl),os,cs,gl,Ni=N({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gl&&(gl&&e.type==="mousemove"?(os=e.screenX-gl.screenX,cs=e.screenY-gl.screenY):cs=os=0,gl=e),os)},movementY:function(e){return"movementY"in e?e.movementY:cs}}),uu=ct(Ni),jp=N({},Ni,{dataTransfer:0}),Sp=ct(jp),Np=N({},pl,{relatedTarget:0}),us=ct(Np),wp=N({},en,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=ct(wp),kp=N({},en,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cp=ct(kp),Ep=N({},en,{data:0}),du=ct(Ep),_p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function ds(){return Mp}var Rp=N({},pl,{key:function(e){if(e.key){var t=_p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Op=ct(Rp),Dp=N({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=ct(Dp),Up=N({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),qp=ct(Up),Hp=N({},en,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lp=ct(Hp),Bp=N({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=ct(Bp),Gp=N({},en,{newState:0,oldState:0}),Xp=ct(Gp),Qp=[9,13,27,32],fs=ta&&"CompositionEvent"in window,yl=null;ta&&"documentMode"in document&&(yl=document.documentMode);var Vp=ta&&"TextEvent"in window&&!yl,mu=ta&&(!fs||yl&&8<yl&&11>=yl),hu=" ",pu=!1;function gu(e,t){switch(e){case"keyup":return Qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function Zp(e,t){switch(e){case"compositionend":return yu(t);case"keypress":return t.which!==32?null:(pu=!0,hu);case"textInput":return e=t.data,e===hu&&pu?null:e;default:return null}}function Kp(e,t){if(Cn)return e==="compositionend"||!fs&&gu(e,t)?(e=ou(),bi=ss=wa=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mu&&t.locale!=="ko"?null:t.data;default:return null}}var Jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jp[e.type]:t==="textarea"}function bu(e,t,a,n){zn?kn?kn.push(n):kn=[n]:zn=n,t=fr(t,"onChange"),0<t.length&&(a=new Si("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var vl=null,bl=null;function $p(e){am(e,0)}function wi(e){var t=fl(e);if(eu(t))return e}function xu(e,t){if(e==="change")return t}var ju=!1;if(ta){var ms;if(ta){var hs="oninput"in document;if(!hs){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),hs=typeof Su.oninput=="function"}ms=hs}else ms=!1;ju=ms&&(!document.documentMode||9<document.documentMode)}function Nu(){vl&&(vl.detachEvent("onpropertychange",wu),bl=vl=null)}function wu(e){if(e.propertyName==="value"&&wi(bl)){var t=[];bu(t,bl,e,ls(e)),su($p,t)}}function Fp(e,t,a){e==="focusin"?(Nu(),vl=t,bl=a,vl.attachEvent("onpropertychange",wu)):e==="focusout"&&Nu()}function Wp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi(bl)}function Ip(e,t){if(e==="click")return wi(t)}function Pp(e,t){if(e==="input"||e==="change")return wi(t)}function e0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:e0;function xl(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Vr.call(t,i)||!bt(e[i],t[i]))return!1}return!0}function zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var a=zu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zu(a)}}function Cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Eu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=yi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=yi(e.document)}return t}function ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var t0=ta&&"documentMode"in document&&11>=document.documentMode,En=null,gs=null,jl=null,ys=!1;function _u(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ys||En==null||En!==yi(n)||(n=En,"selectionStart"in n&&ps(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),jl&&xl(jl,n)||(jl=n,n=fr(gs,"onSelect"),0<n.length&&(t=new Si("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=En)))}function tn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var _n={animationend:tn("Animation","AnimationEnd"),animationiteration:tn("Animation","AnimationIteration"),animationstart:tn("Animation","AnimationStart"),transitionrun:tn("Transition","TransitionRun"),transitionstart:tn("Transition","TransitionStart"),transitioncancel:tn("Transition","TransitionCancel"),transitionend:tn("Transition","TransitionEnd")},vs={},Tu={};ta&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function an(e){if(vs[e])return vs[e];if(!_n[e])return e;var t=_n[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Tu)return vs[e]=t[a];return e}var Au=an("animationend"),Mu=an("animationiteration"),Ru=an("animationstart"),a0=an("transitionrun"),n0=an("transitionstart"),l0=an("transitioncancel"),Ou=an("transitionend"),Du=new Map,bs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bs.push("scrollEnd");function Lt(e,t){Du.set(e,t),Pa(t,[e])}var zi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tt=[],Tn=0,xs=0;function ki(){for(var e=Tn,t=xs=Tn=0;t<e;){var a=Tt[t];Tt[t++]=null;var n=Tt[t];Tt[t++]=null;var i=Tt[t];Tt[t++]=null;var r=Tt[t];if(Tt[t++]=null,n!==null&&i!==null){var c=n.pending;c===null?i.next=i:(i.next=c.next,c.next=i),n.pending=i}r!==0&&Uu(a,i,r)}}function Ci(e,t,a,n){Tt[Tn++]=e,Tt[Tn++]=t,Tt[Tn++]=a,Tt[Tn++]=n,xs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function js(e,t,a,n){return Ci(e,t,a,n),Ei(e)}function nn(e,t){return Ci(e,null,null,t),Ei(e)}function Uu(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-vt(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function Ei(e){if(50<Xl)throw Xl=0,Ao=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var An={};function i0(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,a,n){return new i0(e,t,a,n)}function Ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,t){var a=e.alternate;return a===null?(a=xt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,a,n,i,r){var c=0;if(n=e,typeof e=="function")Ss(e)&&(c=1);else if(typeof e=="string")c=ug(e,a,A.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=xt(31,a,t,i),e.elementType=Ee,e.lanes=r,e;case D:return ln(a.children,i,r,t);case M:c=8,i|=24;break;case G:return e=xt(12,a,t,i|2),e.elementType=G,e.lanes=r,e;case $:return e=xt(13,a,t,i),e.elementType=$,e.lanes=r,e;case se:return e=xt(19,a,t,i),e.elementType=se,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:c=10;break e;case X:c=9;break e;case re:c=11;break e;case K:c=14;break e;case me:c=16,n=null;break e}c=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=xt(c,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function ln(e,t,a,n){return e=xt(7,e,n,t),e.lanes=a,e}function Ns(e,t,a){return e=xt(6,e,null,t),e.lanes=a,e}function Hu(e){var t=xt(18,null,null,0);return t.stateNode=e,t}function ws(e,t,a){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Lu=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var a=Lu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Hc(t)},Lu.set(e,t),t)}return{value:e,source:t,stack:Hc(t)}}var Mn=[],Rn=0,Ti=null,Sl=0,Mt=[],Rt=0,za=null,Zt=1,Kt="";function na(e,t){Mn[Rn++]=Sl,Mn[Rn++]=Ti,Ti=e,Sl=t}function Bu(e,t,a){Mt[Rt++]=Zt,Mt[Rt++]=Kt,Mt[Rt++]=za,za=e;var n=Zt;e=Kt;var i=32-vt(n)-1;n&=~(1<<i),a+=1;var r=32-vt(t)+i;if(30<r){var c=i-i%5;r=(n&(1<<c)-1).toString(32),n>>=c,i-=c,Zt=1<<32-vt(t)+i|a<<i|n,Kt=r+e}else Zt=1<<r|a<<i|n,Kt=e}function zs(e){e.return!==null&&(na(e,1),Bu(e,1,0))}function ks(e){for(;e===Ti;)Ti=Mn[--Rn],Mn[Rn]=null,Sl=Mn[--Rn],Mn[Rn]=null;for(;e===za;)za=Mt[--Rt],Mt[Rt]=null,Kt=Mt[--Rt],Mt[Rt]=null,Zt=Mt[--Rt],Mt[Rt]=null}function Yu(e,t){Mt[Rt++]=Zt,Mt[Rt++]=Kt,Mt[Rt++]=za,Zt=t.id,Kt=t.overflow,za=e}var at=null,Oe=null,be=!1,ka=null,Ot=!1,Cs=Error(d(519));function Ca(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nl(At(t,e)),Cs}function Gu(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[tt]=e,t[ot]=n,a){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(a=0;a<Vl.length;a++)pe(Vl[a],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),tu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),nu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||rm(t.textContent,a)?(n.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),n.onScroll!=null&&pe("scroll",t),n.onScrollEnd!=null&&pe("scrollend",t),n.onClick!=null&&(t.onclick=ea),t=!0):t=!1,t||Ca(e,!0)}function Xu(e){for(at=e.return;at;)switch(at.tag){case 5:case 31:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:at=at.return}}function On(e){if(e!==at)return!1;if(!be)return Xu(e),be=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zo(e.type,e.memoizedProps)),a=!a),a&&Oe&&Ca(e),Xu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Oe=pm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Oe=pm(e)}else t===27?(t=Oe,Ya(e.type)?(e=Wo,Wo=null,Oe=e):Oe=t):Oe=at?Ut(e.stateNode.nextSibling):null;return!0}function rn(){Oe=at=null,be=!1}function Es(){var e=ka;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),ka=null),e}function Nl(e){ka===null?ka=[e]:ka.push(e)}var _s=S(null),sn=null,la=null;function Ea(e,t,a){V(_s,t._currentValue),t._currentValue=a}function ia(e){e._currentValue=_s.current,L(_s)}function Ts(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function As(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var c=i.child;r=r.firstContext;e:for(;r!==null;){var f=r;r=i;for(var x=0;x<t.length;x++)if(f.context===t[x]){r.lanes|=a,f=r.alternate,f!==null&&(f.lanes|=a),Ts(r.return,a,e),n||(c=null);break e}r=f.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(d(341));c.lanes|=a,r=c.alternate,r!==null&&(r.lanes|=a),Ts(c,a,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function Dn(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(d(387));if(c=c.memoizedProps,c!==null){var f=i.type;bt(i.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(i===de.current){if(c=i.alternate,c===null)throw Error(d(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Fl):e=[Fl])}i=i.return}e!==null&&As(t,e,a,n),t.flags|=262144}function Ai(e){for(e=e.firstContext;e!==null;){if(!bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function on(e){sn=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return Qu(sn,e)}function Mi(e,t){return sn===null&&on(e),Qu(e,t)}function Qu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},la===null){if(e===null)throw Error(d(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return a}var r0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},s0=s.unstable_scheduleCallback,o0=s.unstable_NormalPriority,Ve={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ms(){return{controller:new r0,data:new Map,refCount:0}}function wl(e){e.refCount--,e.refCount===0&&s0(o0,function(){e.controller.abort()})}var zl=null,Rs=0,Un=0,qn=null;function c0(e,t){if(zl===null){var a=zl=[];Rs=0,Un=qo(),qn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Rs++,t.then(Vu,Vu),t}function Vu(){if(--Rs===0&&zl!==null){qn!==null&&(qn.status="fulfilled");var e=zl;zl=null,Un=0,qn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function u0(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Zu=_.S;_.S=function(e,t){Tf=gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&c0(e,t),Zu!==null&&Zu(e,t)};var cn=S(null);function Os(){var e=cn.current;return e!==null?e:Re.pooledCache}function Ri(e,t){t===null?V(cn,cn.current):V(cn,t.pool)}function Ku(){var e=Os();return e===null?null:{parent:Ve._currentValue,pool:e}}var Hn=Error(d(460)),Ds=Error(d(474)),Oi=Error(d(542)),Di={then:function(){}};function Ju(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $u(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ea,ea),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wu(e),e;default:if(typeof t.status=="string")t.then(ea,ea);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wu(e),e}throw dn=t,Hn}}function un(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dn=a,Hn):a}}var dn=null;function Fu(){if(dn===null)throw Error(d(459));var e=dn;return dn=null,e}function Wu(e){if(e===Hn||e===Oi)throw Error(d(483))}var Ln=null,kl=0;function Ui(e){var t=kl;return kl+=1,Ln===null&&(Ln=[]),$u(Ln,e,t)}function Cl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function qi(e,t){throw t.$$typeof===q?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Iu(e){function t(z,j){if(e){var k=z.deletions;k===null?(z.deletions=[j],z.flags|=16):k.push(j)}}function a(z,j){if(!e)return null;for(;j!==null;)t(z,j),j=j.sibling;return null}function n(z){for(var j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function i(z,j){return z=aa(z,j),z.index=0,z.sibling=null,z}function r(z,j,k){return z.index=k,e?(k=z.alternate,k!==null?(k=k.index,k<j?(z.flags|=67108866,j):k):(z.flags|=67108866,j)):(z.flags|=1048576,j)}function c(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function f(z,j,k,U){return j===null||j.tag!==6?(j=Ns(k,z.mode,U),j.return=z,j):(j=i(j,k),j.return=z,j)}function x(z,j,k,U){var le=k.type;return le===D?R(z,j,k.props.children,U,k.key):j!==null&&(j.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===me&&un(le)===j.type)?(j=i(j,k.props),Cl(j,k),j.return=z,j):(j=_i(k.type,k.key,k.props,null,z.mode,U),Cl(j,k),j.return=z,j)}function C(z,j,k,U){return j===null||j.tag!==4||j.stateNode.containerInfo!==k.containerInfo||j.stateNode.implementation!==k.implementation?(j=ws(k,z.mode,U),j.return=z,j):(j=i(j,k.children||[]),j.return=z,j)}function R(z,j,k,U,le){return j===null||j.tag!==7?(j=ln(k,z.mode,U,le),j.return=z,j):(j=i(j,k),j.return=z,j)}function B(z,j,k){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Ns(""+j,z.mode,k),j.return=z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case H:return k=_i(j.type,j.key,j.props,null,z.mode,k),Cl(k,j),k.return=z,k;case O:return j=ws(j,z.mode,k),j.return=z,j;case me:return j=un(j),B(z,j,k)}if(P(j)||Me(j))return j=ln(j,z.mode,k,null),j.return=z,j;if(typeof j.then=="function")return B(z,Ui(j),k);if(j.$$typeof===Z)return B(z,Mi(z,j),k);qi(z,j)}return null}function E(z,j,k,U){var le=j!==null?j.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return le!==null?null:f(z,j,""+k,U);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case H:return k.key===le?x(z,j,k,U):null;case O:return k.key===le?C(z,j,k,U):null;case me:return k=un(k),E(z,j,k,U)}if(P(k)||Me(k))return le!==null?null:R(z,j,k,U,null);if(typeof k.then=="function")return E(z,j,Ui(k),U);if(k.$$typeof===Z)return E(z,j,Mi(z,k),U);qi(z,k)}return null}function T(z,j,k,U,le){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return z=z.get(k)||null,f(j,z,""+U,le);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case H:return z=z.get(U.key===null?k:U.key)||null,x(j,z,U,le);case O:return z=z.get(U.key===null?k:U.key)||null,C(j,z,U,le);case me:return U=un(U),T(z,j,k,U,le)}if(P(U)||Me(U))return z=z.get(k)||null,R(j,z,U,le,null);if(typeof U.then=="function")return T(z,j,k,Ui(U),le);if(U.$$typeof===Z)return T(z,j,k,Mi(j,U),le);qi(j,U)}return null}function I(z,j,k,U){for(var le=null,Se=null,ae=j,fe=j=0,ve=null;ae!==null&&fe<k.length;fe++){ae.index>fe?(ve=ae,ae=null):ve=ae.sibling;var Ne=E(z,ae,k[fe],U);if(Ne===null){ae===null&&(ae=ve);break}e&&ae&&Ne.alternate===null&&t(z,ae),j=r(Ne,j,fe),Se===null?le=Ne:Se.sibling=Ne,Se=Ne,ae=ve}if(fe===k.length)return a(z,ae),be&&na(z,fe),le;if(ae===null){for(;fe<k.length;fe++)ae=B(z,k[fe],U),ae!==null&&(j=r(ae,j,fe),Se===null?le=ae:Se.sibling=ae,Se=ae);return be&&na(z,fe),le}for(ae=n(ae);fe<k.length;fe++)ve=T(ae,z,fe,k[fe],U),ve!==null&&(e&&ve.alternate!==null&&ae.delete(ve.key===null?fe:ve.key),j=r(ve,j,fe),Se===null?le=ve:Se.sibling=ve,Se=ve);return e&&ae.forEach(function(Za){return t(z,Za)}),be&&na(z,fe),le}function ie(z,j,k,U){if(k==null)throw Error(d(151));for(var le=null,Se=null,ae=j,fe=j=0,ve=null,Ne=k.next();ae!==null&&!Ne.done;fe++,Ne=k.next()){ae.index>fe?(ve=ae,ae=null):ve=ae.sibling;var Za=E(z,ae,Ne.value,U);if(Za===null){ae===null&&(ae=ve);break}e&&ae&&Za.alternate===null&&t(z,ae),j=r(Za,j,fe),Se===null?le=Za:Se.sibling=Za,Se=Za,ae=ve}if(Ne.done)return a(z,ae),be&&na(z,fe),le;if(ae===null){for(;!Ne.done;fe++,Ne=k.next())Ne=B(z,Ne.value,U),Ne!==null&&(j=r(Ne,j,fe),Se===null?le=Ne:Se.sibling=Ne,Se=Ne);return be&&na(z,fe),le}for(ae=n(ae);!Ne.done;fe++,Ne=k.next())Ne=T(ae,z,fe,Ne.value,U),Ne!==null&&(e&&Ne.alternate!==null&&ae.delete(Ne.key===null?fe:Ne.key),j=r(Ne,j,fe),Se===null?le=Ne:Se.sibling=Ne,Se=Ne);return e&&ae.forEach(function(jg){return t(z,jg)}),be&&na(z,fe),le}function Ae(z,j,k,U){if(typeof k=="object"&&k!==null&&k.type===D&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case H:e:{for(var le=k.key;j!==null;){if(j.key===le){if(le=k.type,le===D){if(j.tag===7){a(z,j.sibling),U=i(j,k.props.children),U.return=z,z=U;break e}}else if(j.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===me&&un(le)===j.type){a(z,j.sibling),U=i(j,k.props),Cl(U,k),U.return=z,z=U;break e}a(z,j);break}else t(z,j);j=j.sibling}k.type===D?(U=ln(k.props.children,z.mode,U,k.key),U.return=z,z=U):(U=_i(k.type,k.key,k.props,null,z.mode,U),Cl(U,k),U.return=z,z=U)}return c(z);case O:e:{for(le=k.key;j!==null;){if(j.key===le)if(j.tag===4&&j.stateNode.containerInfo===k.containerInfo&&j.stateNode.implementation===k.implementation){a(z,j.sibling),U=i(j,k.children||[]),U.return=z,z=U;break e}else{a(z,j);break}else t(z,j);j=j.sibling}U=ws(k,z.mode,U),U.return=z,z=U}return c(z);case me:return k=un(k),Ae(z,j,k,U)}if(P(k))return I(z,j,k,U);if(Me(k)){if(le=Me(k),typeof le!="function")throw Error(d(150));return k=le.call(k),ie(z,j,k,U)}if(typeof k.then=="function")return Ae(z,j,Ui(k),U);if(k.$$typeof===Z)return Ae(z,j,Mi(z,k),U);qi(z,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,j!==null&&j.tag===6?(a(z,j.sibling),U=i(j,k),U.return=z,z=U):(a(z,j),U=Ns(k,z.mode,U),U.return=z,z=U),c(z)):a(z,j)}return function(z,j,k,U){try{kl=0;var le=Ae(z,j,k,U);return Ln=null,le}catch(ae){if(ae===Hn||ae===Oi)throw ae;var Se=xt(29,ae,null,z.mode);return Se.lanes=U,Se.return=z,Se}}}var fn=Iu(!0),Pu=Iu(!1),_a=!1;function Us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(we&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Ei(e),Uu(e,null,a),t}return Ci(e,n,t,a),Ei(e)}function El(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Qc(e,a)}}function Hs(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=c:r=r.next=c,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ls=!1;function _l(){if(Ls){var e=qn;if(e!==null)throw e}}function Tl(e,t,a,n){Ls=!1;var i=e.updateQueue;_a=!1;var r=i.firstBaseUpdate,c=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var x=f,C=x.next;x.next=null,c===null?r=C:c.next=C,c=x;var R=e.alternate;R!==null&&(R=R.updateQueue,f=R.lastBaseUpdate,f!==c&&(f===null?R.firstBaseUpdate=C:f.next=C,R.lastBaseUpdate=x))}if(r!==null){var B=i.baseState;c=0,R=C=x=null,f=r;do{var E=f.lane&-536870913,T=E!==f.lane;if(T?(ye&E)===E:(n&E)===E){E!==0&&E===Un&&(Ls=!0),R!==null&&(R=R.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var I=e,ie=f;E=t;var Ae=a;switch(ie.tag){case 1:if(I=ie.payload,typeof I=="function"){B=I.call(Ae,B,E);break e}B=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=ie.payload,E=typeof I=="function"?I.call(Ae,B,E):I,E==null)break e;B=N({},B,E);break e;case 2:_a=!0}}E=f.callback,E!==null&&(e.flags|=64,T&&(e.flags|=8192),T=i.callbacks,T===null?i.callbacks=[E]:T.push(E))}else T={lane:E,tag:f.tag,payload:f.payload,callback:f.callback,next:null},R===null?(C=R=T,x=B):R=R.next=T,c|=E;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;T=f,f=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);R===null&&(x=B),i.baseState=x,i.firstBaseUpdate=C,i.lastBaseUpdate=R,r===null&&(i.shared.lanes=0),Ua|=c,e.lanes=c,e.memoizedState=B}}function ed(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function td(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ed(a[e],t)}var Bn=S(null),Hi=S(0);function ad(e,t){e=ha,V(Hi,e),V(Bn,t),ha=e|t.baseLanes}function Bs(){V(Hi,ha),V(Bn,Bn.current)}function Ys(){ha=Hi.current,L(Bn),L(Hi)}var jt=S(null),Dt=null;function Ma(e){var t=e.alternate;V(Xe,Xe.current&1),V(jt,e),Dt===null&&(t===null||Bn.current!==null||t.memoizedState!==null)&&(Dt=e)}function Gs(e){V(Xe,Xe.current),V(jt,e),Dt===null&&(Dt=e)}function nd(e){e.tag===22?(V(Xe,Xe.current),V(jt,e),Dt===null&&(Dt=e)):Ra()}function Ra(){V(Xe,Xe.current),V(jt,jt.current)}function St(e){L(jt),Dt===e&&(Dt=null),L(Xe)}var Xe=S(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$o(a)||Fo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=0,ue=null,_e=null,Ze=null,Bi=!1,Yn=!1,mn=!1,Yi=0,Al=0,Gn=null,d0=0;function Be(){throw Error(d(321))}function Xs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!bt(e[a],t[a]))return!1;return!0}function Qs(e,t,a,n,i,r){return ra=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Bd:io,mn=!1,r=a(n,i),mn=!1,Yn&&(r=id(t,a,n,i)),ld(e),r}function ld(e){_.H=Ol;var t=_e!==null&&_e.next!==null;if(ra=0,Ze=_e=ue=null,Bi=!1,Al=0,Gn=null,t)throw Error(d(300));e===null||Ke||(e=e.dependencies,e!==null&&Ai(e)&&(Ke=!0))}function id(e,t,a,n){ue=e;var i=0;do{if(Yn&&(Gn=null),Al=0,Yn=!1,25<=i)throw Error(d(301));if(i+=1,Ze=_e=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}_.H=Yd,r=t(a,n)}while(Yn);return r}function f0(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?Ml(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(ue.flags|=1024),t}function Vs(){var e=Yi!==0;return Yi=0,e}function Zs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ks(e){if(Bi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bi=!1}ra=0,Ze=_e=ue=null,Yn=!1,Al=Yi=0,Gn=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ue.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Qe(){if(_e===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Ze===null?ue.memoizedState:Ze.next;if(t!==null)Ze=t,_e=e;else{if(e===null)throw ue.alternate===null?Error(d(467)):Error(d(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ze===null?ue.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Gi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ml(e){var t=Al;return Al+=1,Gn===null&&(Gn=[]),e=$u(Gn,e,t),t=ue,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Bd:io),e}function Xi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ml(e);if(e.$$typeof===Z)return nt(e)}throw Error(d(438,String(e)))}function Js(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ue.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Gi(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ue;return t.index++,a}function sa(e,t){return typeof t=="function"?t(e):t}function Qi(e){var t=Qe();return $s(t,_e,e)}function $s(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var c=i.next;i.next=r.next,r.next=c}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var f=c=null,x=null,C=t,R=!1;do{var B=C.lane&-536870913;if(B!==C.lane?(ye&B)===B:(ra&B)===B){var E=C.revertLane;if(E===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),B===Un&&(R=!0);else if((ra&E)===E){C=C.next,E===Un&&(R=!0);continue}else B={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(f=x=B,c=r):x=x.next=B,ue.lanes|=E,Ua|=E;B=C.action,mn&&a(r,B),r=C.hasEagerState?C.eagerState:a(r,B)}else E={lane:B,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},x===null?(f=x=E,c=r):x=x.next=E,ue.lanes|=B,Ua|=B;C=C.next}while(C!==null&&C!==t);if(x===null?c=r:x.next=f,!bt(r,e.memoizedState)&&(Ke=!0,R&&(a=qn,a!==null)))throw a;e.memoizedState=r,e.baseState=c,e.baseQueue=x,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Fs(e){var t=Qe(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var c=i=i.next;do r=e(r,c.action),c=c.next;while(c!==i);bt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function rd(e,t,a){var n=ue,i=Qe(),r=be;if(r){if(a===void 0)throw Error(d(407));a=a()}else a=t();var c=!bt((_e||i).memoizedState,a);if(c&&(i.memoizedState=a,Ke=!0),i=i.queue,Ps(cd.bind(null,n,i,e),[e]),i.getSnapshot!==t||c||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Xn(9,{destroy:void 0},od.bind(null,n,i,a,t),null),Re===null)throw Error(d(349));r||(ra&127)!==0||sd(n,t,a)}return a}function sd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=Gi(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function od(e,t,a,n){t.value=a,t.getSnapshot=n,ud(t)&&dd(e)}function cd(e,t,a){return a(function(){ud(t)&&dd(e)})}function ud(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!bt(e,a)}catch{return!0}}function dd(e){var t=nn(e,2);t!==null&&ht(t,e,2)}function Ws(e){var t=st();if(typeof e=="function"){var a=e;if(e=a(),mn){Sa(!0);try{a()}finally{Sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t}function fd(e,t,a,n){return e.baseState=a,$s(e,_e,typeof n=="function"?n:sa)}function m0(e,t,a,n,i){if(Ki(e))throw Error(d(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){r.listeners.push(c)}};_.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,md(t,r)):(r.next=a.next,t.pending=a.next=r)}}function md(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=_.T,c={};_.T=c;try{var f=a(i,n),x=_.S;x!==null&&x(c,f),hd(e,t,f)}catch(C){Is(e,t,C)}finally{r!==null&&c.types!==null&&(r.types=c.types),_.T=r}}else try{r=a(i,n),hd(e,t,r)}catch(C){Is(e,t,C)}}function hd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){pd(e,t,n)},function(n){return Is(e,t,n)}):pd(e,t,a)}function pd(e,t,a){t.status="fulfilled",t.value=a,gd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,md(e,a)))}function Is(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,gd(t),t=t.next;while(t!==n)}e.action=null}function gd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yd(e,t){return t}function vd(e,t){if(be){var a=Re.formState;if(a!==null){e:{var n=ue;if(be){if(Oe){t:{for(var i=Oe,r=Ot;i.nodeType!==8;){if(!r){i=null;break t}if(i=Ut(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Oe=Ut(i.nextSibling),n=i.data==="F!";break e}}Ca(n)}n=!1}n&&(t=a[0])}}return a=st(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yd,lastRenderedState:t},a.queue=n,a=qd.bind(null,ue,n),n.dispatch=a,n=Ws(!1),r=lo.bind(null,ue,!1,n.queue),n=st(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=m0.bind(null,ue,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function bd(e){var t=Qe();return xd(t,_e,e)}function xd(e,t,a){if(t=$s(e,t,yd)[0],e=Qi(sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Ml(t)}catch(c){throw c===Hn?Oi:c}else n=t;t=Qe();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,Xn(9,{destroy:void 0},h0.bind(null,i,a),null)),[n,r,e]}function h0(e,t){e.action=t}function jd(e){var t=Qe(),a=_e;if(a!==null)return xd(t,a,e);Qe(),t=t.memoizedState,a=Qe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Xn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ue.updateQueue,t===null&&(t=Gi(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Sd(){return Qe().memoizedState}function Vi(e,t,a,n){var i=st();ue.flags|=e,i.memoizedState=Xn(1|t,{destroy:void 0},a,n===void 0?null:n)}function Zi(e,t,a,n){var i=Qe();n=n===void 0?null:n;var r=i.memoizedState.inst;_e!==null&&n!==null&&Xs(n,_e.memoizedState.deps)?i.memoizedState=Xn(t,r,a,n):(ue.flags|=e,i.memoizedState=Xn(1|t,r,a,n))}function Nd(e,t){Vi(8390656,8,e,t)}function Ps(e,t){Zi(2048,8,e,t)}function p0(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=Gi(),ue.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function wd(e){var t=Qe().memoizedState;return p0({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function zd(e,t){return Zi(4,2,e,t)}function kd(e,t){return Zi(4,4,e,t)}function Cd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ed(e,t,a){a=a!=null?a.concat([e]):null,Zi(4,4,Cd.bind(null,t,e),a)}function eo(){}function _d(e,t){var a=Qe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Xs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Td(e,t){var a=Qe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Xs(t,n[1]))return n[0];if(n=e(),mn){Sa(!0);try{e()}finally{Sa(!1)}}return a.memoizedState=[n,t],n}function to(e,t,a){return a===void 0||(ra&1073741824)!==0&&(ye&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Mf(),ue.lanes|=e,Ua|=e,a)}function Ad(e,t,a,n){return bt(a,t)?a:Bn.current!==null?(e=to(e,a,n),bt(e,t)||(Ke=!0),e):(ra&42)===0||(ra&1073741824)!==0&&(ye&261930)===0?(Ke=!0,e.memoizedState=a):(e=Mf(),ue.lanes|=e,Ua|=e,t)}function Md(e,t,a,n,i){var r=Q.p;Q.p=r!==0&&8>r?r:8;var c=_.T,f={};_.T=f,lo(e,!1,t,a);try{var x=i(),C=_.S;if(C!==null&&C(f,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var R=u0(x,n);Rl(e,t,R,zt(e))}else Rl(e,t,n,zt(e))}catch(B){Rl(e,t,{then:function(){},status:"rejected",reason:B},zt())}finally{Q.p=r,c!==null&&f.types!==null&&(c.types=f.types),_.T=c}}function g0(){}function ao(e,t,a,n){if(e.tag!==5)throw Error(d(476));var i=Rd(e).queue;Md(e,i,t,ee,a===null?g0:function(){return Od(e),a(n)})}function Rd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:ee},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Od(e){var t=Rd(e);t.next===null&&(t=e.alternate.memoizedState),Rl(e,t.next.queue,{},zt())}function no(){return nt(Fl)}function Dd(){return Qe().memoizedState}function Ud(){return Qe().memoizedState}function y0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=zt();e=Ta(a);var n=Aa(t,e,a);n!==null&&(ht(n,t,a),El(n,t,a)),t={cache:Ms()},e.payload=t;return}t=t.return}}function v0(e,t,a){var n=zt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ki(e)?Hd(t,a):(a=js(e,t,a,n),a!==null&&(ht(a,e,n),Ld(a,t,n)))}function qd(e,t,a){var n=zt();Rl(e,t,a,n)}function Rl(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ki(e))Hd(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var c=t.lastRenderedState,f=r(c,a);if(i.hasEagerState=!0,i.eagerState=f,bt(f,c))return Ci(e,t,i,0),Re===null&&ki(),!1}catch{}if(a=js(e,t,i,n),a!==null)return ht(a,e,n),Ld(a,t,n),!0}return!1}function lo(e,t,a,n){if(n={lane:2,revertLane:qo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ki(e)){if(t)throw Error(d(479))}else t=js(e,a,n,2),t!==null&&ht(t,e,2)}function Ki(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Hd(e,t){Yn=Bi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Ld(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Qc(e,a)}}var Ol={readContext:nt,use:Xi,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be};Ol.useEffectEvent=Be;var Bd={readContext:nt,use:Xi,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Nd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Vi(4194308,4,Cd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){Vi(4,2,e,t)},useMemo:function(e,t){var a=st();t=t===void 0?null:t;var n=e();if(mn){Sa(!0);try{e()}finally{Sa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=st();if(a!==void 0){var i=a(t);if(mn){Sa(!0);try{a(t)}finally{Sa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=v0.bind(null,ue,e),[n.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Ws(e);var t=e.queue,a=qd.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:eo,useDeferredValue:function(e,t){var a=st();return to(a,e,t)},useTransition:function(){var e=Ws(!1);return e=Md.bind(null,ue,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ue,i=st();if(be){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),Re===null)throw Error(d(349));(ye&127)!==0||sd(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,Nd(cd.bind(null,n,r,e),[e]),n.flags|=2048,Xn(9,{destroy:void 0},od.bind(null,n,r,a,t),null),a},useId:function(){var e=st(),t=Re.identifierPrefix;if(be){var a=Kt,n=Zt;a=(n&~(1<<32-vt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Yi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=d0++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:no,useFormState:vd,useActionState:vd,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=lo.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:Js,useCacheRefresh:function(){return st().memoizedState=y0.bind(null,ue)},useEffectEvent:function(e){var t=st(),a={impl:e};return t.memoizedState=a,function(){if((we&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},io={readContext:nt,use:Xi,useCallback:_d,useContext:nt,useEffect:Ps,useImperativeHandle:Ed,useInsertionEffect:zd,useLayoutEffect:kd,useMemo:Td,useReducer:Qi,useRef:Sd,useState:function(){return Qi(sa)},useDebugValue:eo,useDeferredValue:function(e,t){var a=Qe();return Ad(a,_e.memoizedState,e,t)},useTransition:function(){var e=Qi(sa)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Ml(e),t]},useSyncExternalStore:rd,useId:Dd,useHostTransitionStatus:no,useFormState:bd,useActionState:bd,useOptimistic:function(e,t){var a=Qe();return fd(a,_e,e,t)},useMemoCache:Js,useCacheRefresh:Ud};io.useEffectEvent=wd;var Yd={readContext:nt,use:Xi,useCallback:_d,useContext:nt,useEffect:Ps,useImperativeHandle:Ed,useInsertionEffect:zd,useLayoutEffect:kd,useMemo:Td,useReducer:Fs,useRef:Sd,useState:function(){return Fs(sa)},useDebugValue:eo,useDeferredValue:function(e,t){var a=Qe();return _e===null?to(a,e,t):Ad(a,_e.memoizedState,e,t)},useTransition:function(){var e=Fs(sa)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Ml(e),t]},useSyncExternalStore:rd,useId:Dd,useHostTransitionStatus:no,useFormState:jd,useActionState:jd,useOptimistic:function(e,t){var a=Qe();return _e!==null?fd(a,_e,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Js,useCacheRefresh:Ud};Yd.useEffectEvent=wd;function ro(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var so={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=zt(),i=Ta(n);i.payload=t,a!=null&&(i.callback=a),t=Aa(e,i,n),t!==null&&(ht(t,e,n),El(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=zt(),i=Ta(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Aa(e,i,n),t!==null&&(ht(t,e,n),El(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=zt(),n=Ta(a);n.tag=2,t!=null&&(n.callback=t),t=Aa(e,n,a),t!==null&&(ht(t,e,a),El(t,e,a))}};function Gd(e,t,a,n,i,r,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,c):t.prototype&&t.prototype.isPureReactComponent?!xl(a,n)||!xl(i,r):!0}function Xd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function hn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Qd(e){zi(e)}function Vd(e){console.error(e)}function Zd(e){zi(e)}function Ji(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Kd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function oo(e,t,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){Ji(e,t)},a}function Jd(e){return e=Ta(e),e.tag=3,e}function $d(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){Kd(t,a,n)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Kd(t,a,n),typeof i!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function b0(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Dn(t,a,i,!0),a=jt.current,a!==null){switch(a.tag){case 31:case 13:return Dt===null?rr():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Di?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Oo(e,n,i)),!1;case 22:return a.flags|=65536,n===Di?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Oo(e,n,i)),!1}throw Error(d(435,a.tag))}return Oo(e,n,i),rr(),!1}if(be)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Cs&&(e=Error(d(422),{cause:n}),Nl(At(e,a)))):(n!==Cs&&(t=Error(d(423),{cause:n}),Nl(At(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=At(n,a),i=oo(e.stateNode,n,i),Hs(e,i),Ye!==4&&(Ye=2)),!1;var r=Error(d(520),{cause:n});if(r=At(r,a),Gl===null?Gl=[r]:Gl.push(r),Ye!==4&&(Ye=2),t===null)return!0;n=At(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=oo(a.stateNode,n,e),Hs(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(qa===null||!qa.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Jd(i),$d(i,e,a,n),Hs(a,i),!1}a=a.return}while(a!==null);return!1}var co=Error(d(461)),Ke=!1;function lt(e,t,a,n){t.child=e===null?Pu(t,null,a,n):fn(t,e.child,a,n)}function Fd(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var c={};for(var f in n)f!=="ref"&&(c[f]=n[f])}else c=n;return on(t),n=Qs(e,t,a,c,r,i),f=Vs(),e!==null&&!Ke?(Zs(e,t,i),oa(e,t,i)):(be&&f&&zs(t),t.flags|=1,lt(e,t,n,i),t.child)}function Wd(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!Ss(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Id(e,t,r,n,i)):(e=_i(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!vo(e,i)){var c=r.memoizedProps;if(a=a.compare,a=a!==null?a:xl,a(c,n)&&e.ref===t.ref)return oa(e,t,i)}return t.flags|=1,e=aa(r,n),e.ref=t.ref,e.return=t,t.child=e}function Id(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(xl(r,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=r,vo(e,i))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,oa(e,t,i)}return uo(e,t,a,n,i)}function Pd(e,t,a,n){var i=n.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,t.child=null;return ef(e,t,r,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ri(t,r!==null?r.cachePool:null),r!==null?ad(t,r):Bs(),nd(t);else return n=t.lanes=536870912,ef(e,t,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(Ri(t,r.cachePool),ad(t,r),Ra(),t.memoizedState=null):(e!==null&&Ri(t,null),Bs(),Ra());return lt(e,t,i,a),t.child}function Dl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ef(e,t,a,n,i){var r=Os();return r=r===null?null:{parent:Ve._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Ri(t,null),Bs(),nd(t),e!==null&&Dn(e,t,n,!0),t.childLanes=i,null}function $i(e,t){return t=Wi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function tf(e,t,a){return fn(t,e.child,null,a),e=$i(t,t.pendingProps),e.flags|=2,St(t),t.memoizedState=null,e}function x0(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(be){if(n.mode==="hidden")return e=$i(t,n),t.lanes=536870912,Dl(null,e);if(Gs(t),(e=Oe)?(e=hm(e,Ot),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:Zt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},a=Hu(e),a.return=t,t.child=a,at=t,Oe=null)):e=null,e===null)throw Ca(t);return t.lanes=536870912,null}return $i(t,n)}var r=e.memoizedState;if(r!==null){var c=r.dehydrated;if(Gs(t),i)if(t.flags&256)t.flags&=-257,t=tf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Ke||Dn(e,t,a,!1),i=(a&e.childLanes)!==0,Ke||i){if(n=Re,n!==null&&(c=Vc(n,a),c!==0&&c!==r.retryLane))throw r.retryLane=c,nn(e,c),ht(n,e,c),co;rr(),t=tf(e,t,a)}else e=r.treeContext,Oe=Ut(c.nextSibling),at=t,be=!0,ka=null,Ot=!1,e!==null&&Yu(t,e),t=$i(t,n),t.flags|=4096;return t}return e=aa(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function uo(e,t,a,n,i){return on(t),a=Qs(e,t,a,n,void 0,i),n=Vs(),e!==null&&!Ke?(Zs(e,t,i),oa(e,t,i)):(be&&n&&zs(t),t.flags|=1,lt(e,t,a,i),t.child)}function af(e,t,a,n,i,r){return on(t),t.updateQueue=null,a=id(t,n,a,i),ld(e),n=Vs(),e!==null&&!Ke?(Zs(e,t,r),oa(e,t,r)):(be&&n&&zs(t),t.flags|=1,lt(e,t,a,r),t.child)}function nf(e,t,a,n,i){if(on(t),t.stateNode===null){var r=An,c=a.contextType;typeof c=="object"&&c!==null&&(r=nt(c)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=so,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},Us(t),c=a.contextType,r.context=typeof c=="object"&&c!==null?nt(c):An,r.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(ro(t,a,c,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&so.enqueueReplaceState(r,r.state,null),Tl(t,n,r,i),_l(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var f=t.memoizedProps,x=hn(a,f);r.props=x;var C=r.context,R=a.contextType;c=An,typeof R=="object"&&R!==null&&(c=nt(R));var B=a.getDerivedStateFromProps;R=typeof B=="function"||typeof r.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,R||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f||C!==c)&&Xd(t,r,n,c),_a=!1;var E=t.memoizedState;r.state=E,Tl(t,n,r,i),_l(),C=t.memoizedState,f||E!==C||_a?(typeof B=="function"&&(ro(t,a,B,n),C=t.memoizedState),(x=_a||Gd(t,a,x,n,E,C,c))?(R||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=C),r.props=n,r.state=C,r.context=c,n=x):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,qs(e,t),c=t.memoizedProps,R=hn(a,c),r.props=R,B=t.pendingProps,E=r.context,C=a.contextType,x=An,typeof C=="object"&&C!==null&&(x=nt(C)),f=a.getDerivedStateFromProps,(C=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c!==B||E!==x)&&Xd(t,r,n,x),_a=!1,E=t.memoizedState,r.state=E,Tl(t,n,r,i),_l();var T=t.memoizedState;c!==B||E!==T||_a||e!==null&&e.dependencies!==null&&Ai(e.dependencies)?(typeof f=="function"&&(ro(t,a,f,n),T=t.memoizedState),(R=_a||Gd(t,a,R,n,E,T,x)||e!==null&&e.dependencies!==null&&Ai(e.dependencies))?(C||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,T,x),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,T,x)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=T),r.props=n,r.state=T,r.context=x,n=R):(typeof r.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Fi(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=fn(t,e.child,null,i),t.child=fn(t,null,a,i)):lt(e,t,a,i),t.memoizedState=r.state,e=t.child):e=oa(e,t,i),e}function lf(e,t,a,n){return rn(),t.flags|=256,lt(e,t,a,n),t.child}var fo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mo(e){return{baseLanes:e,cachePool:Ku()}}function ho(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=wt),e}function rf(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,c;if((c=r)||(c=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),c&&(i=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(be){if(i?Ma(t):Ra(),(e=Oe)?(e=hm(e,Ot),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:za!==null?{id:Zt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},a=Hu(e),a.return=t,t.child=a,at=t,Oe=null)):e=null,e===null)throw Ca(t);return Fo(e)?t.lanes=32:t.lanes=536870912,null}var f=n.children;return n=n.fallback,i?(Ra(),i=t.mode,f=Wi({mode:"hidden",children:f},i),n=ln(n,i,a,null),f.return=t,n.return=t,f.sibling=n,t.child=f,n=t.child,n.memoizedState=mo(a),n.childLanes=ho(e,c,a),t.memoizedState=fo,Dl(null,n)):(Ma(t),po(t,f))}var x=e.memoizedState;if(x!==null&&(f=x.dehydrated,f!==null)){if(r)t.flags&256?(Ma(t),t.flags&=-257,t=go(e,t,a)):t.memoizedState!==null?(Ra(),t.child=e.child,t.flags|=128,t=null):(Ra(),f=n.fallback,i=t.mode,n=Wi({mode:"visible",children:n.children},i),f=ln(f,i,a,null),f.flags|=2,n.return=t,f.return=t,n.sibling=f,t.child=n,fn(t,e.child,null,a),n=t.child,n.memoizedState=mo(a),n.childLanes=ho(e,c,a),t.memoizedState=fo,t=Dl(null,n));else if(Ma(t),Fo(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var C=c.dgst;c=C,n=Error(d(419)),n.stack="",n.digest=c,Nl({value:n,source:null,stack:null}),t=go(e,t,a)}else if(Ke||Dn(e,t,a,!1),c=(a&e.childLanes)!==0,Ke||c){if(c=Re,c!==null&&(n=Vc(c,a),n!==0&&n!==x.retryLane))throw x.retryLane=n,nn(e,n),ht(c,e,n),co;$o(f)||rr(),t=go(e,t,a)}else $o(f)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Oe=Ut(f.nextSibling),at=t,be=!0,ka=null,Ot=!1,e!==null&&Yu(t,e),t=po(t,n.children),t.flags|=4096);return t}return i?(Ra(),f=n.fallback,i=t.mode,x=e.child,C=x.sibling,n=aa(x,{mode:"hidden",children:n.children}),n.subtreeFlags=x.subtreeFlags&65011712,C!==null?f=aa(C,f):(f=ln(f,i,a,null),f.flags|=2),f.return=t,n.return=t,n.sibling=f,t.child=n,Dl(null,n),n=t.child,f=e.child.memoizedState,f===null?f=mo(a):(i=f.cachePool,i!==null?(x=Ve._currentValue,i=i.parent!==x?{parent:x,pool:x}:i):i=Ku(),f={baseLanes:f.baseLanes|a,cachePool:i}),n.memoizedState=f,n.childLanes=ho(e,c,a),t.memoizedState=fo,Dl(e.child,n)):(Ma(t),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function po(e,t){return t=Wi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Wi(e,t){return e=xt(22,e,null,t),e.lanes=0,e}function go(e,t,a){return fn(t,e.child,null,a),e=po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ts(e.return,t,a)}function yo(e,t,a,n,i,r){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:r}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=a,c.tailMode=i,c.treeForkCount=r)}function of(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var c=Xe.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,V(Xe,c),lt(e,t,n,a),n=be?Sl:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sf(e,a,t);else if(e.tag===19)sf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Li(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),yo(t,!1,i,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Li(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}yo(t,!0,a,null,r,n);break;case"together":yo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function oa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ua|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Dn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=aa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function vo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ai(e)))}function j0(e,t,a){switch(t.tag){case 3:te(t,t.stateNode.containerInfo),Ea(t,Ve,e.memoizedState.cache),rn();break;case 27:case 5:je(t);break;case 4:te(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Gs(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ma(t),t.flags|=128,null):(a&t.child.childLanes)!==0?rf(e,t,a):(Ma(t),e=oa(e,t,a),e!==null?e.sibling:null);Ma(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Dn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return of(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Xe,Xe.current),n)break;return null;case 22:return t.lanes=0,Pd(e,t,a,t.pendingProps);case 24:Ea(t,Ve,e.memoizedState.cache)}return oa(e,t,a)}function cf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!vo(e,a)&&(t.flags&128)===0)return Ke=!1,j0(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,be&&(t.flags&1048576)!==0&&Bu(t,Sl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=un(t.elementType),t.type=e,typeof e=="function")Ss(e)?(n=hn(e,n),t.tag=1,t=nf(null,t,e,n,a)):(t.tag=0,t=uo(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===re){t.tag=11,t=Fd(null,t,e,n,a);break e}else if(i===K){t.tag=14,t=Wd(null,t,e,n,a);break e}}throw t=F(e)||e,Error(d(306,t,""))}}return t;case 0:return uo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=hn(n,t.pendingProps),nf(e,t,n,i,a);case 3:e:{if(te(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,qs(e,t),Tl(t,n,null,a);var c=t.memoizedState;if(n=c.cache,Ea(t,Ve,n),n!==r.cache&&As(t,[Ve],a,!0),_l(),n=c.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=lf(e,t,n,a);break e}else if(n!==i){i=At(Error(d(424)),t),Nl(i),t=lf(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=Ut(e.firstChild),at=t,be=!0,ka=null,Ot=!0,a=Pu(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(rn(),n===i){t=oa(e,t,a);break e}lt(e,t,n,a)}t=t.child}return t;case 26:return Fi(e,t),e===null?(a=xm(t.type,null,t.pendingProps,null))?t.memoizedState=a:be||(a=t.type,e=t.pendingProps,n=mr(ne.current).createElement(a),n[tt]=t,n[ot]=e,it(n,a,e),Ie(n),t.stateNode=n):t.memoizedState=xm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return je(t),e===null&&be&&(n=t.stateNode=ym(t.type,t.pendingProps,ne.current),at=t,Ot=!0,i=Oe,Ya(t.type)?(Wo=i,Oe=Ut(n.firstChild)):Oe=i),lt(e,t,t.pendingProps.children,a),Fi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&be&&((i=n=Oe)&&(n=W0(n,t.type,t.pendingProps,Ot),n!==null?(t.stateNode=n,at=t,Oe=Ut(n.firstChild),Ot=!1,i=!0):i=!1),i||Ca(t)),je(t),i=t.type,r=t.pendingProps,c=e!==null?e.memoizedProps:null,n=r.children,Zo(i,r)?n=null:c!==null&&Zo(i,c)&&(t.flags|=32),t.memoizedState!==null&&(i=Qs(e,t,f0,null,null,a),Fl._currentValue=i),Fi(e,t),lt(e,t,n,a),t.child;case 6:return e===null&&be&&((e=a=Oe)&&(a=I0(a,t.pendingProps,Ot),a!==null?(t.stateNode=a,at=t,Oe=null,e=!0):e=!1),e||Ca(t)),null;case 13:return rf(e,t,a);case 4:return te(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=fn(t,null,n,a):lt(e,t,n,a),t.child;case 11:return Fd(e,t,t.type,t.pendingProps,a);case 7:return lt(e,t,t.pendingProps,a),t.child;case 8:return lt(e,t,t.pendingProps.children,a),t.child;case 12:return lt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ea(t,t.type,n.value),lt(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,on(t),i=nt(i),n=n(i),t.flags|=1,lt(e,t,n,a),t.child;case 14:return Wd(e,t,t.type,t.pendingProps,a);case 15:return Id(e,t,t.type,t.pendingProps,a);case 19:return of(e,t,a);case 31:return x0(e,t,a);case 22:return Pd(e,t,a,t.pendingProps);case 24:return on(t),n=nt(Ve),e===null?(i=Os(),i===null&&(i=Re,r=Ms(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},Us(t),Ea(t,Ve,i)):((e.lanes&a)!==0&&(qs(e,t),Tl(t,null,null,a),_l()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ea(t,Ve,n)):(n=r.cache,Ea(t,Ve,n),n!==i.cache&&As(t,[Ve],a,!0))),lt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function ca(e){e.flags|=4}function bo(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Uf())e.flags|=8192;else throw dn=Di,Ds}else e.flags&=-16777217}function uf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zm(t))if(Uf())e.flags|=8192;else throw dn=Di,Ds}function Ii(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gc():536870912,e.lanes|=t,Kn|=t)}function Ul(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function S0(e,t,a){var n=t.pendingProps;switch(ks(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(Ve),Y(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(On(t)?ca(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Es())),De(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(ca(t),r!==null?(De(t),uf(t,r)):(De(t),bo(t,i,null,n,a))):r?r!==e.memoizedState?(ca(t),De(t),uf(t,r)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&ca(t),De(t),bo(t,i,e,n,a)),null;case 27:if(We(t),a=ne.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ca(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return De(t),null}e=A.current,On(t)?Gu(t):(e=ym(i,n,a),t.stateNode=e,ca(t))}return De(t),null;case 5:if(We(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ca(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return De(t),null}if(r=A.current,On(t))Gu(t);else{var c=mr(ne.current);switch(r){case 1:r=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=c.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?c.createElement("select",{is:n.is}):c.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?c.createElement(i,{is:n.is}):c.createElement(i)}}r[tt]=t,r[ot]=n;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=r;e:switch(it(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ca(t)}}return De(t),bo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ca(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=ne.current,On(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=at,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[tt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||rm(e.nodeValue,a)),e||Ca(t,!0)}else e=mr(e).createTextNode(n),e[tt]=t,t.stateNode=e}return De(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=On(t),a!==null){if(e===null){if(!n)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[tt]=t}else rn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else a=Es(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(St(t),t):(St(t),null);if((t.flags&128)!==0)throw Error(d(558))}return De(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=On(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[tt]=t}else rn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=Es(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(St(t),t):(St(t),null)}return St(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ii(t,t.updateQueue),De(t),null);case 4:return Y(),e===null&&Yo(t.stateNode.containerInfo),De(t),null;case 10:return ia(t.type),De(t),null;case 19:if(L(Xe),n=t.memoizedState,n===null)return De(t),null;if(i=(t.flags&128)!==0,r=n.rendering,r===null)if(i)Ul(n,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Li(e),r!==null){for(t.flags|=128,Ul(n,!1),e=r.updateQueue,t.updateQueue=e,Ii(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)qu(a,e),a=a.sibling;return V(Xe,Xe.current&1|2),be&&na(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&gt()>nr&&(t.flags|=128,i=!0,Ul(n,!1),t.lanes=4194304)}else{if(!i)if(e=Li(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ii(t,e),Ul(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!be)return De(t),null}else 2*gt()-n.renderingStartTime>nr&&a!==536870912&&(t.flags|=128,i=!0,Ul(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=gt(),e.sibling=null,a=Xe.current,V(Xe,i?a&1|2:a&1),be&&na(t,n.treeForkCount),e):(De(t),null);case 22:case 23:return St(t),Ys(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),a=t.updateQueue,a!==null&&Ii(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&L(cn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ia(Ve),De(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function N0(e,t){switch(ks(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(Ve),Y(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return We(t),null;case 31:if(t.memoizedState!==null){if(St(t),t.alternate===null)throw Error(d(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(St(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Xe),null;case 4:return Y(),null;case 10:return ia(t.type),null;case 22:case 23:return St(t),Ys(),e!==null&&L(cn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(Ve),null;case 25:return null;default:return null}}function df(e,t){switch(ks(t),t.tag){case 3:ia(Ve),Y();break;case 26:case 27:case 5:We(t);break;case 4:Y();break;case 31:t.memoizedState!==null&&St(t);break;case 13:St(t);break;case 19:L(Xe);break;case 10:ia(t.type);break;case 22:case 23:St(t),Ys(),e!==null&&L(cn);break;case 24:ia(Ve)}}function ql(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,c=a.inst;n=r(),c.destroy=n}a=a.next}while(a!==i)}}catch(f){Ce(t,t.return,f)}}function Oa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var c=n.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,i=t;var x=a,C=f;try{C()}catch(R){Ce(i,x,R)}}}n=n.next}while(n!==r)}}catch(R){Ce(t,t.return,R)}}function ff(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{td(t,a)}catch(n){Ce(e,e.return,n)}}}function mf(e,t,a){a.props=hn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ce(e,t,n)}}function Hl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Ce(e,t,i)}}function Jt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ce(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ce(e,t,i)}else a.current=null}function hf(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ce(e,e.return,i)}}function xo(e,t,a){try{var n=e.stateNode;V0(n,e.type,a,t),n[ot]=t}catch(i){Ce(e,e.return,i)}}function pf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function jo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function So(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ea));else if(n!==4&&(n===27&&Ya(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(So(e,t,a),e=e.sibling;e!==null;)So(e,t,a),e=e.sibling}function Pi(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pi(e,t,a),e=e.sibling;e!==null;)Pi(e,t,a),e=e.sibling}function gf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);it(t,n,a),t[tt]=e,t[ot]=a}catch(r){Ce(e,e.return,r)}}var ua=!1,Je=!1,No=!1,yf=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function w0(e,t){if(e=e.containerInfo,Qo=xr,e=Eu(e),ps(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var c=0,f=-1,x=-1,C=0,R=0,B=e,E=null;t:for(;;){for(var T;B!==a||i!==0&&B.nodeType!==3||(f=c+i),B!==r||n!==0&&B.nodeType!==3||(x=c+n),B.nodeType===3&&(c+=B.nodeValue.length),(T=B.firstChild)!==null;)E=B,B=T;for(;;){if(B===e)break t;if(E===a&&++C===i&&(f=c),E===r&&++R===n&&(x=c),(T=B.nextSibling)!==null)break;B=E,E=B.parentNode}B=T}a=f===-1||x===-1?null:{start:f,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vo={focusedElem:e,selectionRange:a},xr=!1,Pe=t;Pe!==null;)if(t=Pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Pe=e;else for(;Pe!==null;){switch(t=Pe,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var I=hn(a.type,i);e=n.getSnapshotBeforeUpdate(I,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ce(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Jo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Pe=e;break}Pe=t.return}}function vf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),n&4&&ql(5,a);break;case 1:if(fa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){Ce(a,a.return,c)}else{var i=hn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Ce(a,a.return,c)}}n&64&&ff(a),n&512&&Hl(a,a.return);break;case 3:if(fa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{td(e,t)}catch(c){Ce(a,a.return,c)}}break;case 27:t===null&&n&4&&gf(a);case 26:case 5:fa(e,a),t===null&&n&4&&hf(a),n&512&&Hl(a,a.return);break;case 12:fa(e,a);break;case 31:fa(e,a),n&4&&jf(e,a);break;case 13:fa(e,a),n&4&&Sf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=R0.bind(null,a),P0(e,a))));break;case 22:if(n=a.memoizedState!==null||ua,!n){t=t!==null&&t.memoizedState!==null||Je,i=ua;var r=Je;ua=n,(Je=t)&&!r?ma(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),ua=i,Je=r}break;case 30:break;default:fa(e,a)}}function bf(e){var t=e.alternate;t!==null&&(e.alternate=null,bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ir(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,ut=!1;function da(e,t,a){for(a=a.child;a!==null;)xf(e,t,a),a=a.sibling}function xf(e,t,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(ol,a)}catch{}switch(a.tag){case 26:Je||Jt(a,t),da(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Jt(a,t);var n=qe,i=ut;Ya(a.type)&&(qe=a.stateNode,ut=!1),da(e,t,a),Kl(a.stateNode),qe=n,ut=i;break;case 5:Je||Jt(a,t);case 6:if(n=qe,i=ut,qe=null,da(e,t,a),qe=n,ut=i,qe!==null)if(ut)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(r){Ce(a,t,r)}else try{qe.removeChild(a.stateNode)}catch(r){Ce(a,t,r)}break;case 18:qe!==null&&(ut?(e=qe,fm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),tl(e)):fm(qe,a.stateNode));break;case 4:n=qe,i=ut,qe=a.stateNode.containerInfo,ut=!0,da(e,t,a),qe=n,ut=i;break;case 0:case 11:case 14:case 15:Oa(2,a,t),Je||Oa(4,a,t),da(e,t,a);break;case 1:Je||(Jt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&mf(a,t,n)),da(e,t,a);break;case 21:da(e,t,a);break;case 22:Je=(n=Je)||a.memoizedState!==null,da(e,t,a),Je=n;break;default:da(e,t,a)}}function jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{tl(e)}catch(a){Ce(t,t.return,a)}}}function Sf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tl(e)}catch(a){Ce(t,t.return,a)}}function z0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new yf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new yf),t;default:throw Error(d(435,e.tag))}}function er(e,t){var a=z0(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=O0.bind(null,e,n);n.then(i,i)}})}function dt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(Ya(f.type)){qe=f.stateNode,ut=!1;break e}break;case 5:qe=f.stateNode,ut=!1;break e;case 3:case 4:qe=f.stateNode.containerInfo,ut=!0;break e}f=f.return}if(qe===null)throw Error(d(160));xf(r,c,i),qe=null,ut=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Nf(t,e),t=t.sibling}var Bt=null;function Nf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),ft(e),n&4&&(Oa(3,e,e.return),ql(3,e),Oa(5,e,e.return));break;case 1:dt(t,e),ft(e),n&512&&(Je||a===null||Jt(a,a.return)),n&64&&ua&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Bt;if(dt(t,e),ft(e),n&512&&(Je||a===null||Jt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[dl]||r[tt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),it(r,n,a),r[tt]=e,Ie(r),n=r;break e;case"link":var c=Nm("link","href",i).get(n+(a.href||""));if(c){for(var f=0;f<c.length;f++)if(r=c[f],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(f,1);break t}}r=i.createElement(n),it(r,n,a),i.head.appendChild(r);break;case"meta":if(c=Nm("meta","content",i).get(n+(a.content||""))){for(f=0;f<c.length;f++)if(r=c[f],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(f,1);break t}}r=i.createElement(n),it(r,n,a),i.head.appendChild(r);break;default:throw Error(d(468,n))}r[tt]=e,Ie(r),n=r}e.stateNode=n}else wm(i,e.type,e.stateNode);else e.stateNode=Sm(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?wm(i,e.type,e.stateNode):Sm(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&xo(e,e.memoizedProps,a.memoizedProps)}break;case 27:dt(t,e),ft(e),n&512&&(Je||a===null||Jt(a,a.return)),a!==null&&n&4&&xo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dt(t,e),ft(e),n&512&&(Je||a===null||Jt(a,a.return)),e.flags&32){i=e.stateNode;try{wn(i,"")}catch(I){Ce(e,e.return,I)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,xo(e,i,a!==null?a.memoizedProps:i)),n&1024&&(No=!0);break;case 6:if(dt(t,e),ft(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(I){Ce(e,e.return,I)}}break;case 3:if(gr=null,i=Bt,Bt=hr(t.containerInfo),dt(t,e),Bt=i,ft(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{tl(t.containerInfo)}catch(I){Ce(e,e.return,I)}No&&(No=!1,wf(e));break;case 4:n=Bt,Bt=hr(e.stateNode.containerInfo),dt(t,e),ft(e),Bt=n;break;case 12:dt(t,e),ft(e);break;case 31:dt(t,e),ft(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,er(e,n)));break;case 13:dt(t,e),ft(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ar=gt()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,er(e,n)));break;case 22:i=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,C=ua,R=Je;if(ua=C||i,Je=R||x,dt(t,e),Je=R,ua=C,ft(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||x||ua||Je||pn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(r=x.stateNode,i)c=r.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=x.stateNode;var B=x.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null;f.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(I){Ce(x,x.return,I)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=i?"":x.memoizedProps}catch(I){Ce(x,x.return,I)}}}else if(t.tag===18){if(a===null){x=t;try{var T=x.stateNode;i?mm(T,!0):mm(x.stateNode,!1)}catch(I){Ce(x,x.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,er(e,a))));break;case 19:dt(t,e),ft(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,er(e,n)));break;case 30:break;case 21:break;default:dt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(pf(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var i=a.stateNode,r=jo(e);Pi(e,r,i);break;case 5:var c=a.stateNode;a.flags&32&&(wn(c,""),a.flags&=-33);var f=jo(e);Pi(e,f,c);break;case 3:case 4:var x=a.stateNode.containerInfo,C=jo(e);So(e,C,x);break;default:throw Error(d(161))}}catch(R){Ce(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vf(e,t.alternate,t),t=t.sibling}function pn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Oa(4,t,t.return),pn(t);break;case 1:Jt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&mf(t,t.return,a),pn(t);break;case 27:Kl(t.stateNode);case 26:case 5:Jt(t,t.return),pn(t);break;case 22:t.memoizedState===null&&pn(t);break;case 30:pn(t);break;default:pn(t)}e=e.sibling}}function ma(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,c=r.flags;switch(r.tag){case 0:case 11:case 15:ma(i,r,a),ql(4,r);break;case 1:if(ma(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){Ce(n,n.return,C)}if(n=r,i=n.updateQueue,i!==null){var f=n.stateNode;try{var x=i.shared.hiddenCallbacks;if(x!==null)for(i.shared.hiddenCallbacks=null,i=0;i<x.length;i++)ed(x[i],f)}catch(C){Ce(n,n.return,C)}}a&&c&64&&ff(r),Hl(r,r.return);break;case 27:gf(r);case 26:case 5:ma(i,r,a),a&&n===null&&c&4&&hf(r),Hl(r,r.return);break;case 12:ma(i,r,a);break;case 31:ma(i,r,a),a&&c&4&&jf(i,r);break;case 13:ma(i,r,a),a&&c&4&&Sf(i,r);break;case 22:r.memoizedState===null&&ma(i,r,a),Hl(r,r.return);break;case 30:break;default:ma(i,r,a)}t=t.sibling}}function wo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wl(a))}function zo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e))}function Yt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zf(e,t,a,n),t=t.sibling}function zf(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,a,n),i&2048&&ql(9,t);break;case 1:Yt(e,t,a,n);break;case 3:Yt(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e)));break;case 12:if(i&2048){Yt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,c=r.id,f=r.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){Ce(t,t.return,x)}}else Yt(e,t,a,n);break;case 31:Yt(e,t,a,n);break;case 13:Yt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,c=t.alternate,t.memoizedState!==null?r._visibility&2?Yt(e,t,a,n):Ll(e,t):r._visibility&2?Yt(e,t,a,n):(r._visibility|=2,Qn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&wo(c,t);break;case 24:Yt(e,t,a,n),i&2048&&zo(t.alternate,t);break;default:Yt(e,t,a,n)}}function Qn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,c=t,f=a,x=n,C=c.flags;switch(c.tag){case 0:case 11:case 15:Qn(r,c,f,x,i),ql(8,c);break;case 23:break;case 22:var R=c.stateNode;c.memoizedState!==null?R._visibility&2?Qn(r,c,f,x,i):Ll(r,c):(R._visibility|=2,Qn(r,c,f,x,i)),i&&C&2048&&wo(c.alternate,c);break;case 24:Qn(r,c,f,x,i),i&&C&2048&&zo(c.alternate,c);break;default:Qn(r,c,f,x,i)}t=t.sibling}}function Ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Ll(a,n),i&2048&&wo(n.alternate,n);break;case 24:Ll(a,n),i&2048&&zo(n.alternate,n);break;default:Ll(a,n)}t=t.sibling}}var Bl=8192;function Vn(e,t,a){if(e.subtreeFlags&Bl)for(e=e.child;e!==null;)kf(e,t,a),e=e.sibling}function kf(e,t,a){switch(e.tag){case 26:Vn(e,t,a),e.flags&Bl&&e.memoizedState!==null&&dg(a,Bt,e.memoizedState,e.memoizedProps);break;case 5:Vn(e,t,a);break;case 3:case 4:var n=Bt;Bt=hr(e.stateNode.containerInfo),Vn(e,t,a),Bt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Bl,Bl=16777216,Vn(e,t,a),Bl=n):Vn(e,t,a));break;default:Vn(e,t,a)}}function Cf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Pe=n,_f(n,e)}Cf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ef(e),e=e.sibling}function Ef(e){switch(e.tag){case 0:case 11:case 15:Yl(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:Yl(e);break;case 12:Yl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,tr(e)):Yl(e);break;default:Yl(e)}}function tr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Pe=n,_f(n,e)}Cf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Oa(8,t,t.return),tr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,tr(t));break;default:tr(t)}e=e.sibling}}function _f(e,t){for(;Pe!==null;){var a=Pe;switch(a.tag){case 0:case 11:case 15:Oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:wl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Pe=n;else e:for(a=e;Pe!==null;){n=Pe;var i=n.sibling,r=n.return;if(bf(n),n===a){Pe=null;break e}if(i!==null){i.return=r,Pe=i;break e}Pe=r}}}var k0={getCacheForType:function(e){var t=nt(Ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return nt(Ve).controller.signal}},C0=typeof WeakMap=="function"?WeakMap:Map,we=0,Re=null,he=null,ye=0,ke=0,Nt=null,Da=!1,Zn=!1,ko=!1,ha=0,Ye=0,Ua=0,gn=0,Co=0,wt=0,Kn=0,Gl=null,mt=null,Eo=!1,ar=0,Tf=0,nr=1/0,lr=null,qa=null,$e=0,Ha=null,Jn=null,pa=0,_o=0,To=null,Af=null,Xl=0,Ao=null;function zt(){return(we&2)!==0&&ye!==0?ye&-ye:_.T!==null?qo():Zc()}function Mf(){if(wt===0)if((ye&536870912)===0||be){var e=fi;fi<<=1,(fi&3932160)===0&&(fi=262144),wt=e}else wt=536870912;return e=jt.current,e!==null&&(e.flags|=32),wt}function ht(e,t,a){(e===Re&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&($n(e,0),La(e,ye,wt,!1)),ul(e,a),((we&2)===0||e!==Re)&&(e===Re&&((we&2)===0&&(gn|=a),Ye===4&&La(e,ye,wt,!1)),$t(e))}function Rf(e,t,a){if((we&6)!==0)throw Error(d(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||cl(e,t),i=n?T0(e,t):Ro(e,t,!0),r=n;do{if(i===0){Zn&&!n&&La(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!E0(a)){i=Ro(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;i=Gl;var x=f.current.memoizedState.isDehydrated;if(x&&($n(f,c).flags|=256),c=Ro(f,c,!1),c!==2){if(ko&&!x){f.errorRecoveryDisabledLanes|=r,gn|=r,i=4;break e}r=mt,mt=i,r!==null&&(mt===null?mt=r:mt.push.apply(mt,r))}i=c}if(r=!1,i!==2)continue}}if(i===1){$n(e,0),La(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:La(n,t,wt,!Da);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(i=ar+300-gt(),10<i)){if(La(n,t,wt,!Da),hi(n,0,!0)!==0)break e;pa=t,n.timeoutHandle=um(Of.bind(null,n,a,mt,lr,Eo,t,wt,gn,Kn,Da,r,"Throttled",-0,0),i);break e}Of(n,a,mt,lr,Eo,t,wt,gn,Kn,Da,r,null,-0,0)}}break}while(!0);$t(e)}function Of(e,t,a,n,i,r,c,f,x,C,R,B,E,T){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},kf(t,r,B);var I=(r&62914560)===r?ar-gt():(r&4194048)===r?Tf-gt():0;if(I=fg(B,I),I!==null){pa=r,e.cancelPendingCommit=I(Gf.bind(null,e,t,r,a,n,i,c,f,x,R,B,null,E,T)),La(e,r,c,!C);return}}Gf(e,t,r,a,n,i,c,f,x)}function E0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!bt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function La(e,t,a,n){t&=~Co,t&=~gn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-vt(i),c=1<<r;n[r]=-1,i&=~c}a!==0&&Xc(e,a,t)}function ir(){return(we&6)===0?(Ql(0),!1):!0}function Mo(){if(he!==null){if(ke===0)var e=he.return;else e=he,la=sn=null,Ks(e),Ln=null,kl=0,e=he;for(;e!==null;)df(e.alternate,e),e=e.return;he=null}}function $n(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,J0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),pa=0,Mo(),Re=e,he=a=aa(e.current,null),ye=t,ke=0,Nt=null,Da=!1,Zn=cl(e,t),ko=!1,Kn=wt=Co=gn=Ua=Ye=0,mt=Gl=null,Eo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-vt(n),r=1<<i;t|=e[i],n&=~r}return ha=t,ki(),a}function Df(e,t){ue=null,_.H=Ol,t===Hn||t===Oi?(t=Fu(),ke=3):t===Ds?(t=Fu(),ke=4):ke=t===co?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,he===null&&(Ye=1,Ji(e,At(t,e.current)))}function Uf(){var e=jt.current;return e===null?!0:(ye&4194048)===ye?Dt===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Dt:!1}function qf(){var e=_.H;return _.H=Ol,e===null?Ol:e}function Hf(){var e=_.A;return _.A=k0,e}function rr(){Ye=4,Da||(ye&4194048)!==ye&&jt.current!==null||(Zn=!0),(Ua&134217727)===0&&(gn&134217727)===0||Re===null||La(Re,ye,wt,!1)}function Ro(e,t,a){var n=we;we|=2;var i=qf(),r=Hf();(Re!==e||ye!==t)&&(lr=null,$n(e,t)),t=!1;var c=Ye;e:do try{if(ke!==0&&he!==null){var f=he,x=Nt;switch(ke){case 8:Mo(),c=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var C=ke;if(ke=0,Nt=null,Fn(e,f,x,C),a&&Zn){c=0;break e}break;default:C=ke,ke=0,Nt=null,Fn(e,f,x,C)}}_0(),c=Ye;break}catch(R){Df(e,R)}while(!0);return t&&e.shellSuspendCounter++,la=sn=null,we=n,_.H=i,_.A=r,he===null&&(Re=null,ye=0,ki()),c}function _0(){for(;he!==null;)Lf(he)}function T0(e,t){var a=we;we|=2;var n=qf(),i=Hf();Re!==e||ye!==t?(lr=null,nr=gt()+500,$n(e,t)):Zn=cl(e,t);e:do try{if(ke!==0&&he!==null){t=he;var r=Nt;t:switch(ke){case 1:ke=0,Nt=null,Fn(e,t,r,1);break;case 2:case 9:if(Ju(r)){ke=0,Nt=null,Bf(t);break}t=function(){ke!==2&&ke!==9||Re!==e||(ke=7),$t(e)},r.then(t,t);break e;case 3:ke=7;break e;case 4:ke=5;break e;case 7:Ju(r)?(ke=0,Nt=null,Bf(t)):(ke=0,Nt=null,Fn(e,t,r,7));break;case 5:var c=null;switch(he.tag){case 26:c=he.memoizedState;case 5:case 27:var f=he;if(c?zm(c):f.stateNode.complete){ke=0,Nt=null;var x=f.sibling;if(x!==null)he=x;else{var C=f.return;C!==null?(he=C,sr(C)):he=null}break t}}ke=0,Nt=null,Fn(e,t,r,5);break;case 6:ke=0,Nt=null,Fn(e,t,r,6);break;case 8:Mo(),Ye=6;break e;default:throw Error(d(462))}}A0();break}catch(R){Df(e,R)}while(!0);return la=sn=null,_.H=n,_.A=i,we=a,he!==null?0:(Re=null,ye=0,ki(),Ye)}function A0(){for(;he!==null&&!ep();)Lf(he)}function Lf(e){var t=cf(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?sr(e):he=t}function Bf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=af(a,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=af(a,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Ks(t);default:df(a,t),t=he=qu(t,ha),t=cf(a,t,ha)}e.memoizedProps=e.pendingProps,t===null?sr(e):he=t}function Fn(e,t,a,n){la=sn=null,Ks(t),Ln=null,kl=0;var i=t.return;try{if(b0(e,i,t,a,ye)){Ye=1,Ji(e,At(a,e.current)),he=null;return}}catch(r){if(i!==null)throw he=i,r;Ye=1,Ji(e,At(a,e.current)),he=null;return}t.flags&32768?(be||n===1?e=!0:Zn||(ye&536870912)!==0?e=!1:(Da=e=!0,(n===2||n===9||n===3||n===6)&&(n=jt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Yf(t,e)):sr(t)}function sr(e){var t=e;do{if((t.flags&32768)!==0){Yf(t,Da);return}e=t.return;var a=S0(t.alternate,t,ha);if(a!==null){he=a;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);Ye===0&&(Ye=5)}function Yf(e,t){do{var a=N0(e.alternate,e);if(a!==null){a.flags&=32767,he=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){he=e;return}he=e=a}while(e!==null);Ye=6,he=null}function Gf(e,t,a,n,i,r,c,f,x){e.cancelPendingCommit=null;do or();while($e!==0);if((we&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(r=t.lanes|t.childLanes,r|=xs,up(e,a,r,c,f,x),e===Re&&(he=Re=null,ye=0),Jn=t,Ha=e,pa=a,_o=r,To=i,Af=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,D0(ui,function(){return Kf(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null,i=Q.p,Q.p=2,c=we,we|=4;try{w0(e,t,a)}finally{we=c,Q.p=i,_.T=n}}$e=1,Xf(),Qf(),Vf()}}function Xf(){if($e===1){$e=0;var e=Ha,t=Jn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var n=Q.p;Q.p=2;var i=we;we|=4;try{Nf(t,e);var r=Vo,c=Eu(e.containerInfo),f=r.focusedElem,x=r.selectionRange;if(c!==f&&f&&f.ownerDocument&&Cu(f.ownerDocument.documentElement,f)){if(x!==null&&ps(f)){var C=x.start,R=x.end;if(R===void 0&&(R=C),"selectionStart"in f)f.selectionStart=C,f.selectionEnd=Math.min(R,f.value.length);else{var B=f.ownerDocument||document,E=B&&B.defaultView||window;if(E.getSelection){var T=E.getSelection(),I=f.textContent.length,ie=Math.min(x.start,I),Ae=x.end===void 0?ie:Math.min(x.end,I);!T.extend&&ie>Ae&&(c=Ae,Ae=ie,ie=c);var z=ku(f,ie),j=ku(f,Ae);if(z&&j&&(T.rangeCount!==1||T.anchorNode!==z.node||T.anchorOffset!==z.offset||T.focusNode!==j.node||T.focusOffset!==j.offset)){var k=B.createRange();k.setStart(z.node,z.offset),T.removeAllRanges(),ie>Ae?(T.addRange(k),T.extend(j.node,j.offset)):(k.setEnd(j.node,j.offset),T.addRange(k))}}}}for(B=[],T=f;T=T.parentNode;)T.nodeType===1&&B.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<B.length;f++){var U=B[f];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}xr=!!Qo,Vo=Qo=null}finally{we=i,Q.p=n,_.T=a}}e.current=t,$e=2}}function Qf(){if($e===2){$e=0;var e=Ha,t=Jn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var n=Q.p;Q.p=2;var i=we;we|=4;try{vf(e,t.alternate,t)}finally{we=i,Q.p=n,_.T=a}}$e=3}}function Vf(){if($e===4||$e===3){$e=0,tp();var e=Ha,t=Jn,a=pa,n=Af;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,Jn=Ha=null,Zf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(qa=null),Fr(a),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=_.T,i=Q.p,Q.p=2,_.T=null;try{for(var r=e.onRecoverableError,c=0;c<n.length;c++){var f=n[c];r(f.value,{componentStack:f.stack})}}finally{_.T=t,Q.p=i}}(pa&3)!==0&&or(),$t(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Ao?Xl++:(Xl=0,Ao=e):Xl=0,Ql(0)}}function Zf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wl(t)))}function or(){return Xf(),Qf(),Vf(),Kf()}function Kf(){if($e!==5)return!1;var e=Ha,t=_o;_o=0;var a=Fr(pa),n=_.T,i=Q.p;try{Q.p=32>a?32:a,_.T=null,a=To,To=null;var r=Ha,c=pa;if($e=0,Jn=Ha=null,pa=0,(we&6)!==0)throw Error(d(331));var f=we;if(we|=4,Ef(r.current),zf(r,r.current,c,a),we=f,Ql(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(ol,r)}catch{}return!0}finally{Q.p=i,_.T=n,Zf(e,t)}}function Jf(e,t,a){t=At(a,t),t=oo(e.stateNode,t,2),e=Aa(e,t,2),e!==null&&(ul(e,2),$t(e))}function Ce(e,t,a){if(e.tag===3)Jf(e,e,a);else for(;t!==null;){if(t.tag===3){Jf(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(qa===null||!qa.has(n))){e=At(a,e),a=Jd(2),n=Aa(t,a,2),n!==null&&($d(a,n,t,e),ul(n,2),$t(n));break}}t=t.return}}function Oo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new C0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(ko=!0,i.add(a),e=M0.bind(null,e,t,a),t.then(e,e))}function M0(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Re===e&&(ye&a)===a&&(Ye===4||Ye===3&&(ye&62914560)===ye&&300>gt()-ar?(we&2)===0&&$n(e,0):Co|=a,Kn===ye&&(Kn=0)),$t(e)}function $f(e,t){t===0&&(t=Gc()),e=nn(e,t),e!==null&&(ul(e,t),$t(e))}function R0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),$f(e,a)}function O0(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),$f(e,a)}function D0(e,t){return Zr(e,t)}var cr=null,Wn=null,Do=!1,ur=!1,Uo=!1,Ba=0;function $t(e){e!==Wn&&e.next===null&&(Wn===null?cr=Wn=e:Wn=Wn.next=e),ur=!0,Do||(Do=!0,q0())}function Ql(e,t){if(!Uo&&ur){Uo=!0;do for(var a=!1,n=cr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var c=n.suspendedLanes,f=n.pingedLanes;r=(1<<31-vt(42|e)+1)-1,r&=i&~(c&~f),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Pf(n,r))}else r=ye,r=hi(n,n===Re?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||cl(n,r)||(a=!0,Pf(n,r));n=n.next}while(a);Uo=!1}}function U0(){Ff()}function Ff(){ur=Do=!1;var e=0;Ba!==0&&K0()&&(e=Ba);for(var t=gt(),a=null,n=cr;n!==null;){var i=n.next,r=Wf(n,t);r===0?(n.next=null,a===null?cr=i:a.next=i,i===null&&(Wn=a)):(a=n,(e!==0||(r&3)!==0)&&(ur=!0)),n=i}$e!==0&&$e!==5||Ql(e),Ba!==0&&(Ba=0)}function Wf(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var c=31-vt(r),f=1<<c,x=i[c];x===-1?((f&a)===0||(f&n)!==0)&&(i[c]=cp(f,t)):x<=t&&(e.expiredLanes|=f),r&=~f}if(t=Re,a=ye,a=hi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Kr(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||cl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Kr(n),Fr(a)){case 2:case 8:a=Bc;break;case 32:a=ui;break;case 268435456:a=Yc;break;default:a=ui}return n=If.bind(null,e),a=Zr(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Kr(n),e.callbackPriority=2,e.callbackNode=null,2}function If(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(or()&&e.callbackNode!==a)return null;var n=ye;return n=hi(e,e===Re?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Rf(e,n,t),Wf(e,gt()),e.callbackNode!=null&&e.callbackNode===a?If.bind(null,e):null)}function Pf(e,t){if(or())return null;Rf(e,t,!0)}function q0(){$0(function(){(we&6)!==0?Zr(Lc,U0):Ff()})}function qo(){if(Ba===0){var e=Un;e===0&&(e=di,di<<=1,(di&261888)===0&&(di=256)),Ba=e}return Ba}function em(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vi(""+e)}function tm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function H0(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=em((i[ot]||null).action),c=n.submitter;c&&(t=(t=c[ot]||null)?em(t.formAction):c.getAttribute("formAction"),t!==null&&(r=t,c=null));var f=new Si("action","action",null,n,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ba!==0){var x=c?tm(i,c):new FormData(i);ao(a,{pending:!0,data:x,method:i.method,action:r},null,x)}}else typeof r=="function"&&(f.preventDefault(),x=c?tm(i,c):new FormData(i),ao(a,{pending:!0,data:x,method:i.method,action:r},r,x))},currentTarget:i}]})}}for(var Ho=0;Ho<bs.length;Ho++){var Lo=bs[Ho],L0=Lo.toLowerCase(),B0=Lo[0].toUpperCase()+Lo.slice(1);Lt(L0,"on"+B0)}Lt(Au,"onAnimationEnd"),Lt(Mu,"onAnimationIteration"),Lt(Ru,"onAnimationStart"),Lt("dblclick","onDoubleClick"),Lt("focusin","onFocus"),Lt("focusout","onBlur"),Lt(a0,"onTransitionRun"),Lt(n0,"onTransitionStart"),Lt(l0,"onTransitionCancel"),Lt(Ou,"onTransitionEnd"),Sn("onMouseEnter",["mouseout","mouseover"]),Sn("onMouseLeave",["mouseout","mouseover"]),Sn("onPointerEnter",["pointerout","pointerover"]),Sn("onPointerLeave",["pointerout","pointerover"]),Pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));function am(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var c=n.length-1;0<=c;c--){var f=n[c],x=f.instance,C=f.currentTarget;if(f=f.listener,x!==r&&i.isPropagationStopped())break e;r=f,i.currentTarget=C;try{r(i)}catch(R){zi(R)}i.currentTarget=null,r=x}else for(c=0;c<n.length;c++){if(f=n[c],x=f.instance,C=f.currentTarget,f=f.listener,x!==r&&i.isPropagationStopped())break e;r=f,i.currentTarget=C;try{r(i)}catch(R){zi(R)}i.currentTarget=null,r=x}}}}function pe(e,t){var a=t[Wr];a===void 0&&(a=t[Wr]=new Set);var n=e+"__bubble";a.has(n)||(nm(t,e,2,!1),a.add(n))}function Bo(e,t,a){var n=0;t&&(n|=4),nm(a,e,n,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Yo(e){if(!e[dr]){e[dr]=!0,$c.forEach(function(a){a!=="selectionchange"&&(Y0.has(a)||Bo(a,!1,e),Bo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Bo("selectionchange",!1,t))}}function nm(e,t,a,n){switch(Mm(t)){case 2:var i=pg;break;case 8:i=gg;break;default:i=ac}a=i.bind(null,t,a,e),i=void 0,!rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Go(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var f=n.stateNode.containerInfo;if(f===i)break;if(c===4)for(c=n.return;c!==null;){var x=c.tag;if((x===3||x===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;f!==null;){if(c=bn(f),c===null)return;if(x=c.tag,x===5||x===6||x===26||x===27){n=r=c;continue e}f=f.parentNode}}n=n.return}su(function(){var C=r,R=ls(a),B=[];e:{var E=Du.get(e);if(E!==void 0){var T=Si,I=e;switch(e){case"keypress":if(xi(a)===0)break e;case"keydown":case"keyup":T=Op;break;case"focusin":I="focus",T=us;break;case"focusout":I="blur",T=us;break;case"beforeblur":case"afterblur":T=us;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=qp;break;case Au:case Mu:case Ru:T=zp;break;case Ou:T=Lp;break;case"scroll":case"scrollend":T=xp;break;case"wheel":T=Yp;break;case"copy":case"cut":case"paste":T=Cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=fu;break;case"toggle":case"beforetoggle":T=Xp}var ie=(t&4)!==0,Ae=!ie&&(e==="scroll"||e==="scrollend"),z=ie?E!==null?E+"Capture":null:E;ie=[];for(var j=C,k;j!==null;){var U=j;if(k=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||k===null||z===null||(U=ml(j,z),U!=null&&ie.push(Zl(j,U,k))),Ae)break;j=j.return}0<ie.length&&(E=new T(E,I,null,a,R),B.push({event:E,listeners:ie}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",E&&a!==ns&&(I=a.relatedTarget||a.fromElement)&&(bn(I)||I[vn]))break e;if((T||E)&&(E=R.window===R?R:(E=R.ownerDocument)?E.defaultView||E.parentWindow:window,T?(I=a.relatedTarget||a.toElement,T=C,I=I?bn(I):null,I!==null&&(Ae=h(I),ie=I.tag,I!==Ae||ie!==5&&ie!==27&&ie!==6)&&(I=null)):(T=null,I=C),T!==I)){if(ie=uu,U="onMouseLeave",z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ie=fu,U="onPointerLeave",z="onPointerEnter",j="pointer"),Ae=T==null?E:fl(T),k=I==null?E:fl(I),E=new ie(U,j+"leave",T,a,R),E.target=Ae,E.relatedTarget=k,U=null,bn(R)===C&&(ie=new ie(z,j+"enter",I,a,R),ie.target=k,ie.relatedTarget=Ae,U=ie),Ae=U,T&&I)t:{for(ie=G0,z=T,j=I,k=0,U=z;U;U=ie(U))k++;U=0;for(var le=j;le;le=ie(le))U++;for(;0<k-U;)z=ie(z),k--;for(;0<U-k;)j=ie(j),U--;for(;k--;){if(z===j||j!==null&&z===j.alternate){ie=z;break t}z=ie(z),j=ie(j)}ie=null}else ie=null;T!==null&&lm(B,E,T,ie,!1),I!==null&&Ae!==null&&lm(B,Ae,I,ie,!0)}}e:{if(E=C?fl(C):window,T=E.nodeName&&E.nodeName.toLowerCase(),T==="select"||T==="input"&&E.type==="file")var Se=xu;else if(vu(E))if(ju)Se=Pp;else{Se=Wp;var ae=Fp}else T=E.nodeName,!T||T.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?C&&as(C.elementType)&&(Se=xu):Se=Ip;if(Se&&(Se=Se(e,C))){bu(B,Se,a,R);break e}ae&&ae(e,E,C),e==="focusout"&&C&&E.type==="number"&&C.memoizedProps.value!=null&&ts(E,"number",E.value)}switch(ae=C?fl(C):window,e){case"focusin":(vu(ae)||ae.contentEditable==="true")&&(En=ae,gs=C,jl=null);break;case"focusout":jl=gs=En=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,_u(B,a,R);break;case"selectionchange":if(t0)break;case"keydown":case"keyup":_u(B,a,R)}var fe;if(fs)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Cn?gu(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(mu&&a.locale!=="ko"&&(Cn||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Cn&&(fe=ou()):(wa=R,ss="value"in wa?wa.value:wa.textContent,Cn=!0)),ae=fr(C,ve),0<ae.length&&(ve=new du(ve,e,null,a,R),B.push({event:ve,listeners:ae}),fe?ve.data=fe:(fe=yu(a),fe!==null&&(ve.data=fe)))),(fe=Vp?Zp(e,a):Kp(e,a))&&(ve=fr(C,"onBeforeInput"),0<ve.length&&(ae=new du("onBeforeInput","beforeinput",null,a,R),B.push({event:ae,listeners:ve}),ae.data=fe)),H0(B,e,C,a,R)}am(B,t)})}function Zl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function fr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=ml(e,a),i!=null&&n.unshift(Zl(e,i,r)),i=ml(e,t),i!=null&&n.push(Zl(e,i,r))),e.tag===3)return n;e=e.return}return[]}function G0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lm(e,t,a,n,i){for(var r=t._reactName,c=[];a!==null&&a!==n;){var f=a,x=f.alternate,C=f.stateNode;if(f=f.tag,x!==null&&x===n)break;f!==5&&f!==26&&f!==27||C===null||(x=C,i?(C=ml(a,r),C!=null&&c.unshift(Zl(a,C,x))):i||(C=ml(a,r),C!=null&&c.push(Zl(a,C,x)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var X0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function im(e){return(typeof e=="string"?e:""+e).replace(X0,`
`).replace(Q0,"")}function rm(e,t){return t=im(t),im(e)===t}function Te(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||wn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&wn(e,""+n);break;case"className":gi(e,"class",n);break;case"tabIndex":gi(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":gi(e,a,n);break;case"style":iu(e,n,r);break;case"data":if(t!=="object"){gi(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=vi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Te(e,t,"name",i.name,i,null),Te(e,t,"formEncType",i.formEncType,i,null),Te(e,t,"formMethod",i.formMethod,i,null),Te(e,t,"formTarget",i.formTarget,i,null)):(Te(e,t,"encType",i.encType,i,null),Te(e,t,"method",i.method,i,null),Te(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=vi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ea);break;case"onScroll":n!=null&&pe("scroll",e);break;case"onScrollEnd":n!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=vi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":pe("beforetoggle",e),pe("toggle",e),pi(e,"popover",n);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":pi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vp.get(a)||a,pi(e,a,n))}}function Xo(e,t,a,n,i,r){switch(a){case"style":iu(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?wn(e,n):(typeof n=="number"||typeof n=="bigint")&&wn(e,""+n);break;case"onScroll":n!=null&&pe("scroll",e);break;case"onScrollEnd":n!=null&&pe("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[ot]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):pi(e,a,n)}}}function it(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var c=a[r];if(c!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Te(e,t,r,c,a,null)}}i&&Te(e,t,"srcSet",a.srcSet,a,null),n&&Te(e,t,"src",a.src,a,null);return;case"input":pe("invalid",e);var f=r=c=i=null,x=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var R=a[n];if(R!=null)switch(n){case"name":i=R;break;case"type":c=R;break;case"checked":x=R;break;case"defaultChecked":C=R;break;case"value":r=R;break;case"defaultValue":f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(d(137,t));break;default:Te(e,t,n,R,a,null)}}tu(e,r,f,x,C,c,i,!1);return;case"select":pe("invalid",e),n=c=r=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":r=f;break;case"defaultValue":c=f;break;case"multiple":n=f;default:Te(e,t,i,f,a,null)}t=r,a=c,e.multiple=!!n,t!=null?Nn(e,!!n,t,!1):a!=null&&Nn(e,!!n,a,!0);return;case"textarea":pe("invalid",e),r=i=n=null;for(c in a)if(a.hasOwnProperty(c)&&(f=a[c],f!=null))switch(c){case"value":n=f;break;case"defaultValue":i=f;break;case"children":r=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(d(91));break;default:Te(e,t,c,f,a,null)}nu(e,n,i,r);return;case"option":for(x in a)a.hasOwnProperty(x)&&(n=a[x],n!=null)&&(x==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":Te(e,t,x,n,a,null));return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(n=0;n<Vl.length;n++)pe(Vl[n],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Te(e,t,C,n,a,null)}return;default:if(as(t)){for(R in a)a.hasOwnProperty(R)&&(n=a[R],n!==void 0&&Xo(e,t,R,n,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!=null&&Te(e,t,f,n,a,null))}function V0(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,c=null,f=null,x=null,C=null,R=null;for(T in a){var B=a[T];if(a.hasOwnProperty(T)&&B!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":x=B;default:n.hasOwnProperty(T)||Te(e,t,T,null,n,B)}}for(var E in n){var T=n[E];if(B=a[E],n.hasOwnProperty(E)&&(T!=null||B!=null))switch(E){case"type":r=T;break;case"name":i=T;break;case"checked":C=T;break;case"defaultChecked":R=T;break;case"value":c=T;break;case"defaultValue":f=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(d(137,t));break;default:T!==B&&Te(e,t,E,T,n,B)}}es(e,c,f,x,C,R,r,i);return;case"select":T=c=f=E=null;for(r in a)if(x=a[r],a.hasOwnProperty(r)&&x!=null)switch(r){case"value":break;case"multiple":T=x;default:n.hasOwnProperty(r)||Te(e,t,r,null,n,x)}for(i in n)if(r=n[i],x=a[i],n.hasOwnProperty(i)&&(r!=null||x!=null))switch(i){case"value":E=r;break;case"defaultValue":f=r;break;case"multiple":c=r;default:r!==x&&Te(e,t,i,r,n,x)}t=f,a=c,n=T,E!=null?Nn(e,!!a,E,!1):!!n!=!!a&&(t!=null?Nn(e,!!a,t,!0):Nn(e,!!a,a?[]:"",!1));return;case"textarea":T=E=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Te(e,t,f,null,n,i)}for(c in n)if(i=n[c],r=a[c],n.hasOwnProperty(c)&&(i!=null||r!=null))switch(c){case"value":E=i;break;case"defaultValue":T=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==r&&Te(e,t,c,i,n,r)}au(e,E,T);return;case"option":for(var I in a)E=a[I],a.hasOwnProperty(I)&&E!=null&&!n.hasOwnProperty(I)&&(I==="selected"?e.selected=!1:Te(e,t,I,null,n,E));for(x in n)E=n[x],T=a[x],n.hasOwnProperty(x)&&E!==T&&(E!=null||T!=null)&&(x==="selected"?e.selected=E&&typeof E!="function"&&typeof E!="symbol":Te(e,t,x,E,n,T));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)E=a[ie],a.hasOwnProperty(ie)&&E!=null&&!n.hasOwnProperty(ie)&&Te(e,t,ie,null,n,E);for(C in n)if(E=n[C],T=a[C],n.hasOwnProperty(C)&&E!==T&&(E!=null||T!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(d(137,t));break;default:Te(e,t,C,E,n,T)}return;default:if(as(t)){for(var Ae in a)E=a[Ae],a.hasOwnProperty(Ae)&&E!==void 0&&!n.hasOwnProperty(Ae)&&Xo(e,t,Ae,void 0,n,E);for(R in n)E=n[R],T=a[R],!n.hasOwnProperty(R)||E===T||E===void 0&&T===void 0||Xo(e,t,R,E,n,T);return}}for(var z in a)E=a[z],a.hasOwnProperty(z)&&E!=null&&!n.hasOwnProperty(z)&&Te(e,t,z,null,n,E);for(B in n)E=n[B],T=a[B],!n.hasOwnProperty(B)||E===T||E==null&&T==null||Te(e,t,B,E,n,T)}function sm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Z0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],r=i.transferSize,c=i.initiatorType,f=i.duration;if(r&&f&&sm(c)){for(c=0,f=i.responseEnd,n+=1;n<a.length;n++){var x=a[n],C=x.startTime;if(C>f)break;var R=x.transferSize,B=x.initiatorType;R&&sm(B)&&(x=x.responseEnd,c+=R*(x<f?1:(f-C)/(x-C)))}if(--n,t+=8*(r+c)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qo=null,Vo=null;function mr(e){return e.nodeType===9?e:e.ownerDocument}function om(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ko=null;function K0(){var e=window.event;return e&&e.type==="popstate"?e===Ko?!1:(Ko=e,!0):(Ko=null,!1)}var um=typeof setTimeout=="function"?setTimeout:void 0,J0=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(e){return dm.resolve(null).then(e).catch(F0)}:um;function F0(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function fm(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),tl(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Kl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Kl(a);for(var r=a.firstChild;r;){var c=r.nextSibling,f=r.nodeName;r[dl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=c}}else a==="body"&&Kl(e.ownerDocument.body);a=i}while(a);tl(t)}function mm(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Jo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jo(a),Ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function W0(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[dl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function I0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ut(e.nextSibling),e===null))return null;return e}function hm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ut(e.nextSibling),e===null))return null;return e}function $o(e){return e.data==="$?"||e.data==="$~"}function Fo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function P0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wo=null;function pm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ut(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function gm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function ym(e,t,a){switch(t=mr(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ir(e)}var qt=new Map,vm=new Set;function hr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=Q.d;Q.d={f:eg,r:tg,D:ag,C:ng,L:lg,m:ig,X:sg,S:rg,M:og};function eg(){var e=ga.f(),t=ir();return e||t}function tg(e){var t=xn(e);t!==null&&t.tag===5&&t.type==="form"?Od(t):ga.r(e)}var In=typeof document>"u"?null:document;function bm(e,t,a){var n=In;if(n&&typeof t=="string"&&t){var i=_t(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),vm.has(i)||(vm.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),it(t,"link",e),Ie(t),n.head.appendChild(t)))}}function ag(e){ga.D(e),bm("dns-prefetch",e,null)}function ng(e,t){ga.C(e,t),bm("preconnect",e,t)}function lg(e,t,a){ga.L(e,t,a);var n=In;if(n&&e&&t){var i='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+_t(a.imageSizes)+'"]')):i+='[href="'+_t(e)+'"]';var r=i;switch(t){case"style":r=Pn(e);break;case"script":r=el(e)}qt.has(r)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),qt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Jl(r))||t==="script"&&n.querySelector($l(r))||(t=n.createElement("link"),it(t,"link",e),Ie(t),n.head.appendChild(t)))}}function ig(e,t){ga.m(e,t);var a=In;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+_t(n)+'"][href="'+_t(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=el(e)}if(!qt.has(r)&&(e=N({rel:"modulepreload",href:e},t),qt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($l(r)))return}n=a.createElement("link"),it(n,"link",e),Ie(n),a.head.appendChild(n)}}}function rg(e,t,a){ga.S(e,t,a);var n=In;if(n&&e){var i=jn(n).hoistableStyles,r=Pn(e);t=t||"default";var c=i.get(r);if(!c){var f={loading:0,preload:null};if(c=n.querySelector(Jl(r)))f.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=qt.get(r))&&Io(e,a);var x=c=n.createElement("link");Ie(x),it(x,"link",e),x._p=new Promise(function(C,R){x.onload=C,x.onerror=R}),x.addEventListener("load",function(){f.loading|=1}),x.addEventListener("error",function(){f.loading|=2}),f.loading|=4,pr(c,t,n)}c={type:"stylesheet",instance:c,count:1,state:f},i.set(r,c)}}}function sg(e,t){ga.X(e,t);var a=In;if(a&&e){var n=jn(a).hoistableScripts,i=el(e),r=n.get(i);r||(r=a.querySelector($l(i)),r||(e=N({src:e,async:!0},t),(t=qt.get(i))&&Po(e,t),r=a.createElement("script"),Ie(r),it(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function og(e,t){ga.M(e,t);var a=In;if(a&&e){var n=jn(a).hoistableScripts,i=el(e),r=n.get(i);r||(r=a.querySelector($l(i)),r||(e=N({src:e,async:!0,type:"module"},t),(t=qt.get(i))&&Po(e,t),r=a.createElement("script"),Ie(r),it(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function xm(e,t,a,n){var i=(i=ne.current)?hr(i):null;if(!i)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Pn(a.href),a=jn(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Pn(a.href);var r=jn(i).hoistableStyles,c=r.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,c),(r=i.querySelector(Jl(e)))&&!r._p&&(c.instance=r,c.state.loading=5),qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qt.set(e,a),r||cg(i,e,a,c.state))),t&&n===null)throw Error(d(528,""));return c}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=el(a),a=jn(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Pn(e){return'href="'+_t(e)+'"'}function Jl(e){return'link[rel="stylesheet"]['+e+"]"}function jm(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function cg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),it(t,"link",a),Ie(t),e.head.appendChild(t))}function el(e){return'[src="'+_t(e)+'"]'}function $l(e){return"script[async]"+e}function Sm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+_t(a.href)+'"]');if(n)return t.instance=n,Ie(n),n;var i=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ie(n),it(n,"style",i),pr(n,a.precedence,e),t.instance=n;case"stylesheet":i=Pn(a.href);var r=e.querySelector(Jl(i));if(r)return t.state.loading|=4,t.instance=r,Ie(r),r;n=jm(a),(i=qt.get(i))&&Io(n,i),r=(e.ownerDocument||e).createElement("link"),Ie(r);var c=r;return c._p=new Promise(function(f,x){c.onload=f,c.onerror=x}),it(r,"link",n),t.state.loading|=4,pr(r,a.precedence,e),t.instance=r;case"script":return r=el(a.src),(i=e.querySelector($l(r)))?(t.instance=i,Ie(i),i):(n=a,(i=qt.get(r))&&(n=N({},a),Po(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ie(i),it(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,pr(n,a.precedence,e));return t.instance}function pr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,c=0;c<n.length;c++){var f=n[c];if(f.dataset.precedence===t)r=f;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Po(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var gr=null;function Nm(e,t,a){if(gr===null){var n=new Map,i=gr=new Map;i.set(a,n)}else i=gr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[dl]||r[tt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var c=r.getAttribute(t)||"";c=e+c;var f=n.get(c);f?f.push(r):n.set(c,[r])}}return n}function wm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function ug(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dg(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Pn(n.href),r=t.querySelector(Jl(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=yr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Ie(r);return}r=t.ownerDocument||t,n=jm(n),(i=qt.get(i))&&Io(n,i),r=r.createElement("link"),Ie(r);var c=r;c._p=new Promise(function(f,x){c.onload=f,c.onerror=x}),it(r,"link",n),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=yr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var ec=0;function fg(e,t){return e.stylesheets&&e.count===0&&br(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&br(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&ec===0&&(ec=62500*Z0());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&br(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>ec?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function yr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)br(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vr=null;function br(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vr=new Map,t.forEach(mg,e),vr=null,yr.call(e))}function mg(e,t){if(!(t.state.loading&4)){var a=vr.get(e);if(a)var n=a.get(null);else{a=new Map,vr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var c=i[r];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),n=c)}n&&a.set(null,n)}i=t.instance,c=i.getAttribute("data-precedence"),r=a.get(c)||n,r===n&&a.set(null,i),a.set(c,i),this.count++,n=yr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Fl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function hg(e,t,a,n,i,r,c,f,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.hiddenUpdates=Jr(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function km(e,t,a,n,i,r,c,f,x,C,R,B){return e=new hg(e,t,a,c,x,C,R,B,f),t=1,r===!0&&(t|=24),r=xt(3,null,null,t),e.current=r,r.stateNode=e,t=Ms(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},Us(r),e}function Cm(e){return e?(e=An,e):An}function Em(e,t,a,n,i,r){i=Cm(i),n.context===null?n.context=i:n.pendingContext=i,n=Ta(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Aa(e,n,t),a!==null&&(ht(a,e,t),El(a,e,t))}function _m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function tc(e,t){_m(e,t),(e=e.alternate)&&_m(e,t)}function Tm(e){if(e.tag===13||e.tag===31){var t=nn(e,67108864);t!==null&&ht(t,e,67108864),tc(e,67108864)}}function Am(e){if(e.tag===13||e.tag===31){var t=zt();t=$r(t);var a=nn(e,t);a!==null&&ht(a,e,t),tc(e,t)}}var xr=!0;function pg(e,t,a,n){var i=_.T;_.T=null;var r=Q.p;try{Q.p=2,ac(e,t,a,n)}finally{Q.p=r,_.T=i}}function gg(e,t,a,n){var i=_.T;_.T=null;var r=Q.p;try{Q.p=8,ac(e,t,a,n)}finally{Q.p=r,_.T=i}}function ac(e,t,a,n){if(xr){var i=nc(n);if(i===null)Go(e,t,n,jr,a),Rm(e,n);else if(vg(i,e,t,a,n))n.stopPropagation();else if(Rm(e,n),t&4&&-1<yg.indexOf(e)){for(;i!==null;){var r=xn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var c=Ia(r.pendingLanes);if(c!==0){var f=r;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var x=1<<31-vt(c);f.entanglements[1]|=x,c&=~x}$t(r),(we&6)===0&&(nr=gt()+500,Ql(0))}}break;case 31:case 13:f=nn(r,2),f!==null&&ht(f,r,2),ir(),tc(r,2)}if(r=nc(n),r===null&&Go(e,t,n,jr,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else Go(e,t,n,null,a)}}function nc(e){return e=ls(e),lc(e)}var jr=null;function lc(e){if(jr=null,e=bn(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=p(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return jr=e,null}function Mm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ap()){case Lc:return 2;case Bc:return 8;case ui:case np:return 32;case Yc:return 268435456;default:return 32}default:return 32}}var ic=!1,Ga=null,Xa=null,Qa=null,Wl=new Map,Il=new Map,Va=[],yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rm(e,t){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(t.pointerId)}}function Pl(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=xn(t),t!==null&&Tm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function vg(e,t,a,n,i){switch(t){case"focusin":return Ga=Pl(Ga,e,t,a,n,i),!0;case"dragenter":return Xa=Pl(Xa,e,t,a,n,i),!0;case"mouseover":return Qa=Pl(Qa,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return Wl.set(r,Pl(Wl.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,Il.set(r,Pl(Il.get(r)||null,e,t,a,n,i)),!0}return!1}function Om(e){var t=bn(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=p(a),t!==null){e.blockedOn=t,Kc(e.priority,function(){Am(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,Kc(e.priority,function(){Am(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=nc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);ns=n,a.target.dispatchEvent(n),ns=null}else return t=xn(a),t!==null&&Tm(t),e.blockedOn=a,!1;t.shift()}return!0}function Dm(e,t,a){Sr(e)&&a.delete(t)}function bg(){ic=!1,Ga!==null&&Sr(Ga)&&(Ga=null),Xa!==null&&Sr(Xa)&&(Xa=null),Qa!==null&&Sr(Qa)&&(Qa=null),Wl.forEach(Dm),Il.forEach(Dm)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,ic||(ic=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,bg)))}var wr=null;function Um(e){wr!==e&&(wr=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){wr===e&&(wr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(lc(n||a)===null)continue;break}var r=xn(a);r!==null&&(e.splice(t,3),t-=3,ao(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function tl(e){function t(x){return Nr(x,e)}Ga!==null&&Nr(Ga,e),Xa!==null&&Nr(Xa,e),Qa!==null&&Nr(Qa,e),Wl.forEach(t),Il.forEach(t);for(var a=0;a<Va.length;a++){var n=Va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)Om(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],c=i[ot]||null;if(typeof r=="function")c||Um(a);else if(c){var f=null;if(r&&r.hasAttribute("formAction")){if(i=r,c=r[ot]||null)f=c.formAction;else if(lc(i)!==null)continue}else f=c.action;typeof f=="function"?a[n+1]=f:(a.splice(n,3),n-=3),Um(a)}}}function qm(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function rc(e){this._internalRoot=e}zr.prototype.render=rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=zt();Em(a,n,e,t,null,null)},zr.prototype.unmount=rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Em(e.current,2,null,e,null,null),ir(),t[vn]=null}};function zr(e){this._internalRoot=e}zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Va.length&&t!==0&&t<Va[a].priority;a++);Va.splice(a,0,e),a===0&&Om(e)}};var Hm=o.version;if(Hm!=="19.2.3")throw Error(d(527,Hm,"19.2.3"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=g(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var xg={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{ol=kr.inject(xg),yt=kr}catch{}}return ti.createRoot=function(e,t){if(!m(e))throw Error(d(299));var a=!1,n="",i=Qd,r=Vd,c=Zd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=km(e,1,!1,null,null,a,n,null,i,r,c,qm),e[vn]=t.current,Yo(e),new rc(t)},ti.hydrateRoot=function(e,t,a){if(!m(e))throw Error(d(299));var n=!1,i="",r=Qd,c=Vd,f=Zd,x=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=km(e,1,!0,t,a??null,n,i,x,r,c,f,qm),t.context=Cm(null),a=t.current,n=zt(),n=$r(n),i=Ta(n),i.callback=null,Aa(a,i,n),a=n,t.current.lanes=a,ul(t,a),$t(t),e[vn]=t.current,Yo(e),new zr(t)},ti.version="19.2.3",ti}var Jm;function Ag(){if(Jm)return cc.exports;Jm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(o){console.error(o)}}return s(),cc.exports=Tg(),cc.exports}var Mg=Ag();var $m="popstate";function Rg(s={}){function o(d,m){let{pathname:h,search:p,hash:b}=d.location;return vc("",{pathname:h,search:p,hash:b},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function u(d,m){return typeof m=="string"?m:li(m)}return Dg(o,u,null,s)}function He(s,o){if(s===!1||s===null||typeof s>"u")throw new Error(o)}function kt(s,o){if(!s){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Og(){return Math.random().toString(36).substring(2,10)}function Fm(s,o){return{usr:s.state,key:s.key,idx:o}}function vc(s,o,u=null,d){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof o=="string"?il(o):o,state:u,key:o&&o.key||d||Og()}}function li({pathname:s="/",search:o="",hash:u=""}){return o&&o!=="?"&&(s+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(s+=u.charAt(0)==="#"?u:"#"+u),s}function il(s){let o={};if(s){let u=s.indexOf("#");u>=0&&(o.hash=s.substring(u),s=s.substring(0,u));let d=s.indexOf("?");d>=0&&(o.search=s.substring(d),s=s.substring(0,d)),s&&(o.pathname=s)}return o}function Dg(s,o,u,d={}){let{window:m=document.defaultView,v5Compat:h=!1}=d,p=m.history,b="POP",v=null,g=w();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function w(){return(p.state||{idx:null}).idx}function N(){b="POP";let M=w(),G=M==null?null:M-g;g=M,v&&v({action:b,location:D.location,delta:G})}function q(M,G){b="PUSH";let X=vc(D.location,M,G);g=w()+1;let Z=Fm(X,g),re=D.createHref(X);try{p.pushState(Z,"",re)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;m.location.assign(re)}h&&v&&v({action:b,location:D.location,delta:1})}function H(M,G){b="REPLACE";let X=vc(D.location,M,G);g=w();let Z=Fm(X,g),re=D.createHref(X);p.replaceState(Z,"",re),h&&v&&v({action:b,location:D.location,delta:0})}function O(M){return Ug(M)}let D={get action(){return b},get location(){return s(m,p)},listen(M){if(v)throw new Error("A history only accepts one active listener");return m.addEventListener($m,N),v=M,()=>{m.removeEventListener($m,N),v=null}},createHref(M){return o(m,M)},createURL:O,encodeLocation(M){let G=O(M);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:q,replace:H,go(M){return p.go(M)}};return D}function Ug(s,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),He(u,"No window.location.(origin|href) available to create URL");let d=typeof s=="string"?s:li(s);return d=d.replace(/ $/,"%20"),!o&&d.startsWith("//")&&(d=u+d),new URL(d,u)}function ch(s,o,u="/"){return qg(s,o,u,!1)}function qg(s,o,u,d){let m=typeof o=="string"?il(o):o,h=ba(m.pathname||"/",u);if(h==null)return null;let p=uh(s);Hg(p);let b=null;for(let v=0;b==null&&v<p.length;++v){let g=$g(h);b=Kg(p[v],g,d)}return b}function uh(s,o=[],u=[],d="",m=!1){let h=(p,b,v=m,g)=>{let w={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:b,route:p};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(d)&&v)return;He(w.relativePath.startsWith(d),`Absolute route path "${w.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(d.length)}let N=va([d,w.relativePath]),q=u.concat(w);p.children&&p.children.length>0&&(He(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),uh(p.children,o,q,N,v)),!(p.path==null&&!p.index)&&o.push({path:N,score:Vg(N,p.index),routesMeta:q})};return s.forEach((p,b)=>{if(p.path===""||!p.path?.includes("?"))h(p,b);else for(let v of dh(p.path))h(p,b,!0,v)}),o}function dh(s){let o=s.split("/");if(o.length===0)return[];let[u,...d]=o,m=u.endsWith("?"),h=u.replace(/\?$/,"");if(d.length===0)return m?[h,""]:[h];let p=dh(d.join("/")),b=[];return b.push(...p.map(v=>v===""?h:[h,v].join("/"))),m&&b.push(...p),b.map(v=>s.startsWith("/")&&v===""?"/":v)}function Hg(s){s.sort((o,u)=>o.score!==u.score?u.score-o.score:Zg(o.routesMeta.map(d=>d.childrenIndex),u.routesMeta.map(d=>d.childrenIndex)))}var Lg=/^:[\w-]+$/,Bg=3,Yg=2,Gg=1,Xg=10,Qg=-2,Wm=s=>s==="*";function Vg(s,o){let u=s.split("/"),d=u.length;return u.some(Wm)&&(d+=Qg),o&&(d+=Yg),u.filter(m=>!Wm(m)).reduce((m,h)=>m+(Lg.test(h)?Bg:h===""?Gg:Xg),d)}function Zg(s,o){return s.length===o.length&&s.slice(0,-1).every((d,m)=>d===o[m])?s[s.length-1]-o[o.length-1]:0}function Kg(s,o,u=!1){let{routesMeta:d}=s,m={},h="/",p=[];for(let b=0;b<d.length;++b){let v=d[b],g=b===d.length-1,w=h==="/"?o:o.slice(h.length)||"/",N=Rr({path:v.relativePath,caseSensitive:v.caseSensitive,end:g},w),q=v.route;if(!N&&g&&u&&!d[d.length-1].route.index&&(N=Rr({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},w)),!N)return null;Object.assign(m,N.params),p.push({params:m,pathname:va([h,N.pathname]),pathnameBase:Pg(va([h,N.pathnameBase])),route:q}),N.pathnameBase!=="/"&&(h=va([h,N.pathnameBase]))}return p}function Rr(s,o){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[u,d]=Jg(s.path,s.caseSensitive,s.end),m=o.match(u);if(!m)return null;let h=m[0],p=h.replace(/(.)\/+$/,"$1"),b=m.slice(1);return{params:d.reduce((g,{paramName:w,isOptional:N},q)=>{if(w==="*"){let O=b[q]||"";p=h.slice(0,h.length-O.length).replace(/(.)\/+$/,"$1")}const H=b[q];return N&&!H?g[w]=void 0:g[w]=(H||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:p,pattern:s}}function Jg(s,o=!1,u=!0){kt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let d=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,b,v)=>(d.push({paramName:b,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(d.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,o?void 0:"i"),d]}function $g(s){try{return s.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return kt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),s}}function ba(s,o){if(o==="/")return s;if(!s.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,d=s.charAt(u);return d&&d!=="/"?null:s.slice(u)||"/"}var fh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fg=s=>fh.test(s);function Wg(s,o="/"){let{pathname:u,search:d="",hash:m=""}=typeof s=="string"?il(s):s,h;if(u)if(Fg(u))h=u;else{if(u.includes("//")){let p=u;u=u.replace(/\/\/+/g,"/"),kt(!1,`Pathnames cannot have embedded double slashes - normalizing ${p} -> ${u}`)}u.startsWith("/")?h=Im(u.substring(1),"/"):h=Im(u,o)}else h=o;return{pathname:h,search:ey(d),hash:ty(m)}}function Im(s,o){let u=o.replace(/\/+$/,"").split("/");return s.split("/").forEach(m=>{m===".."?u.length>1&&u.pop():m!=="."&&u.push(m)}),u.length>1?u.join("/"):"/"}function mc(s,o,u,d){return`Cannot include a '${s}' character in a manually specified \`to.${o}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ig(s){return s.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function zc(s){let o=Ig(s);return o.map((u,d)=>d===o.length-1?u.pathname:u.pathnameBase)}function kc(s,o,u,d=!1){let m;typeof s=="string"?m=il(s):(m={...s},He(!m.pathname||!m.pathname.includes("?"),mc("?","pathname","search",m)),He(!m.pathname||!m.pathname.includes("#"),mc("#","pathname","hash",m)),He(!m.search||!m.search.includes("#"),mc("#","search","hash",m)));let h=s===""||m.pathname==="",p=h?"/":m.pathname,b;if(p==null)b=u;else{let N=o.length-1;if(!d&&p.startsWith("..")){let q=p.split("/");for(;q[0]==="..";)q.shift(),N-=1;m.pathname=q.join("/")}b=N>=0?o[N]:"/"}let v=Wg(m,b),g=p&&p!=="/"&&p.endsWith("/"),w=(h||p===".")&&u.endsWith("/");return!v.pathname.endsWith("/")&&(g||w)&&(v.pathname+="/"),v}var va=s=>s.join("/").replace(/\/\/+/g,"/"),Pg=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ey=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ty=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,ay=class{constructor(s,o,u,d=!1){this.status=s,this.statusText=o||"",this.internal=d,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function ny(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function ly(s){return s.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var mh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function hh(s,o){let u=s;if(typeof u!="string"||!fh.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let d=u,m=!1;if(mh)try{let h=new URL(window.location.href),p=u.startsWith("//")?new URL(h.protocol+u):new URL(u),b=ba(p.pathname,o);p.origin===h.origin&&b!=null?u=b+p.search+p.hash:m=!0}catch{kt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:m,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ph=["POST","PUT","PATCH","DELETE"];new Set(ph);var iy=["GET",...ph];new Set(iy);var rl=y.createContext(null);rl.displayName="DataRouter";var qr=y.createContext(null);qr.displayName="DataRouterState";var ry=y.createContext(!1),gh=y.createContext({isTransitioning:!1});gh.displayName="ViewTransition";var sy=y.createContext(new Map);sy.displayName="Fetchers";var oy=y.createContext(null);oy.displayName="Await";var Ct=y.createContext(null);Ct.displayName="Navigation";var si=y.createContext(null);si.displayName="Location";var Ht=y.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var Cc=y.createContext(null);Cc.displayName="RouteError";var yh="REACT_ROUTER_ERROR",cy="REDIRECT",uy="ROUTE_ERROR_RESPONSE";function dy(s){if(s.startsWith(`${yh}:${cy}:{`))try{let o=JSON.parse(s.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function fy(s){if(s.startsWith(`${yh}:${uy}:{`))try{let o=JSON.parse(s.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new ay(o.status,o.statusText,o.data)}catch{}}function my(s,{relative:o}={}){He(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:d}=y.useContext(Ct),{hash:m,pathname:h,search:p}=oi(s,{relative:o}),b=h;return u!=="/"&&(b=h==="/"?u:va([u,h])),d.createHref({pathname:b,search:p,hash:m})}function sl(){return y.useContext(si)!=null}function Qt(){return He(sl(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(si).location}var vh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bh(s){y.useContext(Ct).static||y.useLayoutEffect(s)}function ja(){let{isDataRoute:s}=y.useContext(Ht);return s?Ey():hy()}function hy(){He(sl(),"useNavigate() may be used only in the context of a <Router> component.");let s=y.useContext(rl),{basename:o,navigator:u}=y.useContext(Ct),{matches:d}=y.useContext(Ht),{pathname:m}=Qt(),h=JSON.stringify(zc(d)),p=y.useRef(!1);return bh(()=>{p.current=!0}),y.useCallback((v,g={})=>{if(kt(p.current,vh),!p.current)return;if(typeof v=="number"){u.go(v);return}let w=kc(v,JSON.parse(h),m,g.relative==="path");s==null&&o!=="/"&&(w.pathname=w.pathname==="/"?o:va([o,w.pathname])),(g.replace?u.replace:u.push)(w,g.state,g)},[o,u,h,m,s])}var py=y.createContext(null);function gy(s){let o=y.useContext(Ht).outlet;return y.useMemo(()=>o&&y.createElement(py.Provider,{value:s},o),[o,s])}function xh(){let{matches:s}=y.useContext(Ht),o=s[s.length-1];return o?o.params:{}}function oi(s,{relative:o}={}){let{matches:u}=y.useContext(Ht),{pathname:d}=Qt(),m=JSON.stringify(zc(u));return y.useMemo(()=>kc(s,JSON.parse(m),d,o==="path"),[s,m,d,o])}function yy(s,o){return jh(s,o)}function jh(s,o,u,d,m){He(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=y.useContext(Ct),{matches:p}=y.useContext(Ht),b=p[p.length-1],v=b?b.params:{},g=b?b.pathname:"/",w=b?b.pathnameBase:"/",N=b&&b.route;{let X=N&&N.path||"";Nh(g,!N||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let q=Qt(),H;if(o){let X=typeof o=="string"?il(o):o;He(w==="/"||X.pathname?.startsWith(w),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${X.pathname}" was given in the \`location\` prop.`),H=X}else H=q;let O=H.pathname||"/",D=O;if(w!=="/"){let X=w.replace(/^\//,"").split("/");D="/"+O.replace(/^\//,"").split("/").slice(X.length).join("/")}let M=ch(s,{pathname:D});kt(N||M!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),kt(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Sy(M&&M.map(X=>Object.assign({},X,{params:Object.assign({},v,X.params),pathname:va([w,h.encodeLocation?h.encodeLocation(X.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?w:va([w,h.encodeLocation?h.encodeLocation(X.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathnameBase])})),p,u,d,m);return o&&G?y.createElement(si.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},G):G}function vy(){let s=Cy(),o=ny(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),u=s instanceof Error?s.stack:null,d="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:d},h={padding:"2px 4px",backgroundColor:d},p=null;return console.error("Error handled by React Router default ErrorBoundary:",s),p=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:h},"ErrorBoundary")," or"," ",y.createElement("code",{style:h},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},o),u?y.createElement("pre",{style:m},u):null,p)}var by=y.createElement(vy,null),Sh=class extends y.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,o){return o.location!==s.location||o.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:o.error,location:o.location,revalidation:s.revalidation||o.revalidation}}componentDidCatch(s,o){this.props.onError?this.props.onError(s,o):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const u=fy(s.digest);u&&(s=u)}let o=s!==void 0?y.createElement(Ht.Provider,{value:this.props.routeContext},y.createElement(Cc.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?y.createElement(xy,{error:s},o):o}};Sh.contextType=ry;var hc=new WeakMap;function xy({children:s,error:o}){let{basename:u}=y.useContext(Ct);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let d=dy(o.digest);if(d){let m=hc.get(o);if(m)throw m;let h=hh(d.location,u);if(mh&&!hc.get(o))if(h.isExternal||d.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const p=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:d.replace}));throw hc.set(o,p),p}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return s}function jy({routeContext:s,match:o,children:u}){let d=y.useContext(rl);return d&&d.static&&d.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=o.route.id),y.createElement(Ht.Provider,{value:s},u)}function Sy(s,o=[],u=null,d=null,m=null){if(s==null){if(!u)return null;if(u.errors)s=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)s=u.matches;else return null}let h=s,p=u?.errors;if(p!=null){let w=h.findIndex(N=>N.route.id&&p?.[N.route.id]!==void 0);He(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),h=h.slice(0,Math.min(h.length,w+1))}let b=!1,v=-1;if(u)for(let w=0;w<h.length;w++){let N=h[w];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(v=w),N.route.id){let{loaderData:q,errors:H}=u,O=N.route.loader&&!q.hasOwnProperty(N.route.id)&&(!H||H[N.route.id]===void 0);if(N.route.lazy||O){b=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}let g=u&&d?(w,N)=>{d(w,{location:u.location,params:u.matches?.[0]?.params??{},unstable_pattern:ly(u.matches),errorInfo:N})}:void 0;return h.reduceRight((w,N,q)=>{let H,O=!1,D=null,M=null;u&&(H=p&&N.route.id?p[N.route.id]:void 0,D=N.route.errorElement||by,b&&(v<0&&q===0?(Nh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),O=!0,M=null):v===q&&(O=!0,M=N.route.hydrateFallbackElement||null)));let G=o.concat(h.slice(0,q+1)),X=()=>{let Z;return H?Z=D:O?Z=M:N.route.Component?Z=y.createElement(N.route.Component,null):N.route.element?Z=N.route.element:Z=w,y.createElement(jy,{match:N,routeContext:{outlet:w,matches:G,isDataRoute:u!=null},children:Z})};return u&&(N.route.ErrorBoundary||N.route.errorElement||q===0)?y.createElement(Sh,{location:u.location,revalidation:u.revalidation,component:D,error:H,children:X(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:g}):X()},null)}function Ec(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ny(s){let o=y.useContext(rl);return He(o,Ec(s)),o}function wy(s){let o=y.useContext(qr);return He(o,Ec(s)),o}function zy(s){let o=y.useContext(Ht);return He(o,Ec(s)),o}function _c(s){let o=zy(s),u=o.matches[o.matches.length-1];return He(u.route.id,`${s} can only be used on routes that contain a unique "id"`),u.route.id}function ky(){return _c("useRouteId")}function Cy(){let s=y.useContext(Cc),o=wy("useRouteError"),u=_c("useRouteError");return s!==void 0?s:o.errors?.[u]}function Ey(){let{router:s}=Ny("useNavigate"),o=_c("useNavigate"),u=y.useRef(!1);return bh(()=>{u.current=!0}),y.useCallback(async(m,h={})=>{kt(u.current,vh),u.current&&(typeof m=="number"?await s.navigate(m):await s.navigate(m,{fromRouteId:o,...h}))},[s,o])}var Pm={};function Nh(s,o,u){!o&&!Pm[s]&&(Pm[s]=!0,kt(!1,u))}y.memo(_y);function _y({routes:s,future:o,state:u,onError:d}){return jh(s,void 0,u,d,o)}function Tc({to:s,replace:o,state:u,relative:d}){He(sl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=y.useContext(Ct);kt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=y.useContext(Ht),{pathname:p}=Qt(),b=ja(),v=kc(s,zc(h),p,d==="path"),g=JSON.stringify(v);return y.useEffect(()=>{b(JSON.parse(g),{replace:o,state:u,relative:d})},[b,g,d,o,u]),null}function Ty(s){return gy(s.context)}function et(s){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ay({basename:s="/",children:o=null,location:u,navigationType:d="POP",navigator:m,static:h=!1,unstable_useTransitions:p}){He(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=s.replace(/^\/*/,"/"),v=y.useMemo(()=>({basename:b,navigator:m,static:h,unstable_useTransitions:p,future:{}}),[b,m,h,p]);typeof u=="string"&&(u=il(u));let{pathname:g="/",search:w="",hash:N="",state:q=null,key:H="default"}=u,O=y.useMemo(()=>{let D=ba(g,b);return D==null?null:{location:{pathname:D,search:w,hash:N,state:q,key:H},navigationType:d}},[b,g,w,N,q,H,d]);return kt(O!=null,`<Router basename="${b}"> is not able to match the URL "${g}${w}${N}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:y.createElement(Ct.Provider,{value:v},y.createElement(si.Provider,{children:o,value:O}))}function My({children:s,location:o}){return yy(bc(s),o)}function bc(s,o=[]){let u=[];return y.Children.forEach(s,(d,m)=>{if(!y.isValidElement(d))return;let h=[...o,m];if(d.type===y.Fragment){u.push.apply(u,bc(d.props.children,h));return}He(d.type===et,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!d.props.index||!d.props.children,"An index route cannot have child routes.");let p={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(p.children=bc(d.props.children,h)),u.push(p)}),u}var _r="get",Tr="application/x-www-form-urlencoded";function Hr(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function Ry(s){return Hr(s)&&s.tagName.toLowerCase()==="button"}function Oy(s){return Hr(s)&&s.tagName.toLowerCase()==="form"}function Dy(s){return Hr(s)&&s.tagName.toLowerCase()==="input"}function Uy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function qy(s,o){return s.button===0&&(!o||o==="_self")&&!Uy(s)}function xc(s=""){return new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((o,u)=>{let d=s[u];return o.concat(Array.isArray(d)?d.map(m=>[u,m]):[[u,d]])},[]))}function Hy(s,o){let u=xc(s);return o&&o.forEach((d,m)=>{u.has(m)||o.getAll(m).forEach(h=>{u.append(m,h)})}),u}var Cr=null;function Ly(){if(Cr===null)try{new FormData(document.createElement("form"),0),Cr=!1}catch{Cr=!0}return Cr}var By=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pc(s){return s!=null&&!By.has(s)?(kt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tr}"`),null):s}function Yy(s,o){let u,d,m,h,p;if(Oy(s)){let b=s.getAttribute("action");d=b?ba(b,o):null,u=s.getAttribute("method")||_r,m=pc(s.getAttribute("enctype"))||Tr,h=new FormData(s)}else if(Ry(s)||Dy(s)&&(s.type==="submit"||s.type==="image")){let b=s.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=s.getAttribute("formaction")||b.getAttribute("action");if(d=v?ba(v,o):null,u=s.getAttribute("formmethod")||b.getAttribute("method")||_r,m=pc(s.getAttribute("formenctype"))||pc(b.getAttribute("enctype"))||Tr,h=new FormData(b,s),!Ly()){let{name:g,type:w,value:N}=s;if(w==="image"){let q=g?`${g}.`:"";h.append(`${q}x`,"0"),h.append(`${q}y`,"0")}else g&&h.append(g,N)}}else{if(Hr(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=_r,d=null,m=Tr,p=s}return h&&m==="text/plain"&&(p=h,h=void 0),{action:d,method:u.toLowerCase(),encType:m,formData:h,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ac(s,o){if(s===!1||s===null||typeof s>"u")throw new Error(o)}function Gy(s,o,u,d){let m=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return u?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${d}`:m.pathname=`${m.pathname}.${d}`:m.pathname==="/"?m.pathname=`_root.${d}`:o&&ba(m.pathname,o)==="/"?m.pathname=`${o.replace(/\/$/,"")}/_root.${d}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${d}`,m}async function Xy(s,o){if(s.id in o)return o[s.id];try{let u=await import(s.module);return o[s.id]=u,u}catch(u){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Vy(s,o,u){let d=await Promise.all(s.map(async m=>{let h=o.routes[m.route.id];if(h){let p=await Xy(h,u);return p.links?p.links():[]}return[]}));return $y(d.flat(1).filter(Qy).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function eh(s,o,u,d,m,h){let p=(v,g)=>u[g]?v.route.id!==u[g].route.id:!0,b=(v,g)=>u[g].pathname!==v.pathname||u[g].route.path?.endsWith("*")&&u[g].params["*"]!==v.params["*"];return h==="assets"?o.filter((v,g)=>p(v,g)||b(v,g)):h==="data"?o.filter((v,g)=>{let w=d.routes[v.route.id];if(!w||!w.hasLoader)return!1;if(p(v,g)||b(v,g))return!0;if(v.route.shouldRevalidate){let N=v.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function Zy(s,o,{includeHydrateFallback:u}={}){return Ky(s.map(d=>{let m=o.routes[d.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),u&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function Ky(s){return[...new Set(s)]}function Jy(s){let o={},u=Object.keys(s).sort();for(let d of u)o[d]=s[d];return o}function $y(s,o){let u=new Set;return new Set(o),s.reduce((d,m)=>{let h=JSON.stringify(Jy(m));return u.has(h)||(u.add(h),d.push({key:h,link:m})),d},[])}function wh(){let s=y.useContext(rl);return Ac(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Fy(){let s=y.useContext(qr);return Ac(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Mc=y.createContext(void 0);Mc.displayName="FrameworkContext";function zh(){let s=y.useContext(Mc);return Ac(s,"You must render this element inside a <HydratedRouter> element"),s}function Wy(s,o){let u=y.useContext(Mc),[d,m]=y.useState(!1),[h,p]=y.useState(!1),{onFocus:b,onBlur:v,onMouseEnter:g,onMouseLeave:w,onTouchStart:N}=o,q=y.useRef(null);y.useEffect(()=>{if(s==="render"&&p(!0),s==="viewport"){let D=G=>{G.forEach(X=>{p(X.isIntersecting)})},M=new IntersectionObserver(D,{threshold:.5});return q.current&&M.observe(q.current),()=>{M.disconnect()}}},[s]),y.useEffect(()=>{if(d){let D=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(D)}}},[d]);let H=()=>{m(!0)},O=()=>{m(!1),p(!1)};return u?s!=="intent"?[h,q,{}]:[h,q,{onFocus:ai(b,H),onBlur:ai(v,O),onMouseEnter:ai(g,H),onMouseLeave:ai(w,O),onTouchStart:ai(N,H)}]:[!1,q,{}]}function ai(s,o){return u=>{s&&s(u),u.defaultPrevented||o(u)}}function Iy({page:s,...o}){let{router:u}=wh(),d=y.useMemo(()=>ch(u.routes,s,u.basename),[u.routes,s,u.basename]);return d?y.createElement(e1,{page:s,matches:d,...o}):null}function Py(s){let{manifest:o,routeModules:u}=zh(),[d,m]=y.useState([]);return y.useEffect(()=>{let h=!1;return Vy(s,o,u).then(p=>{h||m(p)}),()=>{h=!0}},[s,o,u]),d}function e1({page:s,matches:o,...u}){let d=Qt(),{future:m,manifest:h,routeModules:p}=zh(),{basename:b}=wh(),{loaderData:v,matches:g}=Fy(),w=y.useMemo(()=>eh(s,o,g,h,d,"data"),[s,o,g,h,d]),N=y.useMemo(()=>eh(s,o,g,h,d,"assets"),[s,o,g,h,d]),q=y.useMemo(()=>{if(s===d.pathname+d.search+d.hash)return[];let D=new Set,M=!1;if(o.forEach(X=>{let Z=h.routes[X.route.id];!Z||!Z.hasLoader||(!w.some(re=>re.route.id===X.route.id)&&X.route.id in v&&p[X.route.id]?.shouldRevalidate||Z.hasClientLoader?M=!0:D.add(X.route.id))}),D.size===0)return[];let G=Gy(s,b,m.unstable_trailingSlashAwareDataRequests,"data");return M&&D.size>0&&G.searchParams.set("_routes",o.filter(X=>D.has(X.route.id)).map(X=>X.route.id).join(",")),[G.pathname+G.search]},[b,m.unstable_trailingSlashAwareDataRequests,v,d,h,w,o,s,p]),H=y.useMemo(()=>Zy(N,h),[N,h]),O=Py(N);return y.createElement(y.Fragment,null,q.map(D=>y.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...u})),H.map(D=>y.createElement("link",{key:D,rel:"modulepreload",href:D,...u})),O.map(({key:D,link:M})=>y.createElement("link",{key:D,nonce:u.nonce,...M})))}function t1(...s){return o=>{s.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var a1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{a1&&(window.__reactRouterVersion="7.12.0")}catch{}function n1({basename:s,children:o,unstable_useTransitions:u,window:d}){let m=y.useRef();m.current==null&&(m.current=Rg({window:d,v5Compat:!0}));let h=m.current,[p,b]=y.useState({action:h.action,location:h.location}),v=y.useCallback(g=>{u===!1?b(g):y.startTransition(()=>b(g))},[u]);return y.useLayoutEffect(()=>h.listen(v),[h,v]),y.createElement(Ay,{basename:s,children:o,location:p.location,navigationType:p.action,navigator:h,unstable_useTransitions:u})}var kh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oe=y.forwardRef(function({onClick:o,discover:u="render",prefetch:d="none",relative:m,reloadDocument:h,replace:p,state:b,target:v,to:g,preventScrollReset:w,viewTransition:N,unstable_defaultShouldRevalidate:q,...H},O){let{basename:D,unstable_useTransitions:M}=y.useContext(Ct),G=typeof g=="string"&&kh.test(g),X=hh(g,D);g=X.to;let Z=my(g,{relative:m}),[re,$,se]=Wy(d,H),K=s1(g,{replace:p,state:b,target:v,preventScrollReset:w,relative:m,viewTransition:N,unstable_defaultShouldRevalidate:q,unstable_useTransitions:M});function me(Ue){o&&o(Ue),Ue.defaultPrevented||K(Ue)}let Ee=y.createElement("a",{...H,...se,href:X.absoluteURL||Z,onClick:X.isExternal||h?o:me,ref:t1(O,$),target:v,"data-discover":!G&&u==="render"?"true":void 0});return re&&!G?y.createElement(y.Fragment,null,Ee,y.createElement(Iy,{page:Z})):Ee});oe.displayName="Link";var l1=y.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:d="",end:m=!1,style:h,to:p,viewTransition:b,children:v,...g},w){let N=oi(p,{relative:g.relative}),q=Qt(),H=y.useContext(qr),{navigator:O,basename:D}=y.useContext(Ct),M=H!=null&&m1(N)&&b===!0,G=O.encodeLocation?O.encodeLocation(N).pathname:N.pathname,X=q.pathname,Z=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;u||(X=X.toLowerCase(),Z=Z?Z.toLowerCase():null,G=G.toLowerCase()),Z&&D&&(Z=ba(Z,D)||Z);const re=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let $=X===G||!m&&X.startsWith(G)&&X.charAt(re)==="/",se=Z!=null&&(Z===G||!m&&Z.startsWith(G)&&Z.charAt(G.length)==="/"),K={isActive:$,isPending:se,isTransitioning:M},me=$?o:void 0,Ee;typeof d=="function"?Ee=d(K):Ee=[d,$?"active":null,se?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let Ue=typeof h=="function"?h(K):h;return y.createElement(oe,{...g,"aria-current":me,className:Ee,ref:w,style:Ue,to:p,viewTransition:b},typeof v=="function"?v(K):v)});l1.displayName="NavLink";var i1=y.forwardRef(({discover:s="render",fetcherKey:o,navigate:u,reloadDocument:d,replace:m,state:h,method:p=_r,action:b,onSubmit:v,relative:g,preventScrollReset:w,viewTransition:N,unstable_defaultShouldRevalidate:q,...H},O)=>{let{unstable_useTransitions:D}=y.useContext(Ct),M=d1(),G=f1(b,{relative:g}),X=p.toLowerCase()==="get"?"get":"post",Z=typeof b=="string"&&kh.test(b),re=$=>{if(v&&v($),$.defaultPrevented)return;$.preventDefault();let se=$.nativeEvent.submitter,K=se?.getAttribute("formmethod")||p,me=()=>M(se||$.currentTarget,{fetcherKey:o,method:K,navigate:u,replace:m,state:h,relative:g,preventScrollReset:w,viewTransition:N,unstable_defaultShouldRevalidate:q});D&&u!==!1?y.startTransition(()=>me()):me()};return y.createElement("form",{ref:O,method:X,action:G,onSubmit:d?v:re,...H,"data-discover":!Z&&s==="render"?"true":void 0})});i1.displayName="Form";function r1(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ch(s){let o=y.useContext(rl);return He(o,r1(s)),o}function s1(s,{target:o,replace:u,state:d,preventScrollReset:m,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:b,unstable_useTransitions:v}={}){let g=ja(),w=Qt(),N=oi(s,{relative:h});return y.useCallback(q=>{if(qy(q,o)){q.preventDefault();let H=u!==void 0?u:li(w)===li(N),O=()=>g(s,{replace:H,state:d,preventScrollReset:m,relative:h,viewTransition:p,unstable_defaultShouldRevalidate:b});v?y.startTransition(()=>O()):O()}},[w,g,N,u,d,o,s,m,h,p,b,v])}function o1(s){kt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let o=y.useRef(xc(s)),u=y.useRef(!1),d=Qt(),m=y.useMemo(()=>Hy(d.search,u.current?null:o.current),[d.search]),h=ja(),p=y.useCallback((b,v)=>{const g=xc(typeof b=="function"?b(new URLSearchParams(m)):b);u.current=!0,h("?"+g,v)},[h,m]);return[m,p]}var c1=0,u1=()=>`__${String(++c1)}__`;function d1(){let{router:s}=Ch("useSubmit"),{basename:o}=y.useContext(Ct),u=ky(),d=s.fetch,m=s.navigate;return y.useCallback(async(h,p={})=>{let{action:b,method:v,encType:g,formData:w,body:N}=Yy(h,o);if(p.navigate===!1){let q=p.fetcherKey||u1();await d(q,u,p.action||b,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:w,body:N,formMethod:p.method||v,formEncType:p.encType||g,flushSync:p.flushSync})}else await m(p.action||b,{unstable_defaultShouldRevalidate:p.unstable_defaultShouldRevalidate,preventScrollReset:p.preventScrollReset,formData:w,body:N,formMethod:p.method||v,formEncType:p.encType||g,replace:p.replace,state:p.state,fromRouteId:u,flushSync:p.flushSync,viewTransition:p.viewTransition})},[d,m,o,u])}function f1(s,{relative:o}={}){let{basename:u}=y.useContext(Ct),d=y.useContext(Ht);He(d,"useFormAction must be used inside a RouteContext");let[m]=d.matches.slice(-1),h={...oi(s||".",{relative:o})},p=Qt();if(s==null){h.search=p.search;let b=new URLSearchParams(h.search),v=b.getAll("index");if(v.some(w=>w==="")){b.delete("index"),v.filter(N=>N).forEach(N=>b.append("index",N));let w=b.toString();h.search=w?`?${w}`:""}}return(!s||s===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(h.pathname=h.pathname==="/"?u:va([u,h.pathname])),li(h)}function m1(s,{relative:o}={}){let u=y.useContext(gh);He(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Ch("useViewTransitionState"),m=oi(s,{relative:o});if(!u.isTransitioning)return!1;let h=ba(u.currentLocation.pathname,d)||u.currentLocation.pathname,p=ba(u.nextLocation.pathname,d)||u.nextLocation.pathname;return Rr(m.pathname,p)!=null||Rr(m.pathname,h)!=null}const Eh=y.createContext(null),Vt=()=>{const s=y.useContext(Eh);if(!s)throw new Error("useAuth must be used within an AuthProvider");return s},h1=({children:s})=>{const[o,u]=y.useState(null),[d,m]=y.useState(localStorage.getItem("token")),[h,p]=y.useState(!0);y.useEffect(()=>{(async()=>{if(d)try{const O=await fetch("/api/users/profile",{headers:{Authorization:`Bearer ${d}`}});if(O.ok){const D=await O.json();u(D)}else w()}catch(O){console.error("Auth initialization failed:",O),w()}p(!1)})()},[d]);const b=async(H,O)=>{const D=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:H,password:O})}),M=await D.text();let G;try{G=M?JSON.parse(M):{}}catch{throw new Error("Server returned an invalid response. Please try again later.")}if(!D.ok)throw new Error(G.message||"Login failed");return G.requiresVerification||(localStorage.setItem("token",G.token),m(G.token),u(G.user)),G},v=async H=>{const O=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)}),D=await O.text();let M;try{M=D?JSON.parse(D):{}}catch{throw new Error("Server returned an invalid response. Please try again later.")}if(!O.ok)throw new Error(M.message||"Registration failed");return M.requiresVerification||(localStorage.setItem("token",M.token),m(M.token),u(M.user)),M},g=async H=>{const O=await fetch("/api/auth/google",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({credential:H})}),D=await O.text();let M;try{M=D?JSON.parse(D):{}}catch{throw new Error("Server returned an invalid response. Please try again later.")}if(!O.ok)throw new Error(M.message||"Google login failed");return localStorage.setItem("token",M.token),m(M.token),u(M.user),M},w=()=>{localStorage.removeItem("token"),m(null),u(null)},q={user:o,token:d,loading:h,isAuthenticated:!!o,login:b,register:v,googleLogin:g,logout:w,updateProfile:async H=>{const O=await fetch("/api/users/profile",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify(H)});if(!O.ok){const M=await O.json();throw new Error(M.message||"Profile update failed")}const D=await O.json();return u(D),D}};return l.jsx(Eh.Provider,{value:q,children:s})},_h=y.createContext(null),p1=()=>{const s=y.useContext(_h);if(!s)throw new Error("useTheme must be used within a ThemeProvider");return s},g1=({children:s})=>{const[o,u]=y.useState(()=>{const h=localStorage.getItem("theme");return h||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});y.useEffect(()=>{const h=document.documentElement;o==="dark"?h.classList.add("dark"):h.classList.remove("dark"),localStorage.setItem("theme",o)},[o]);const m={theme:o,isDark:o==="dark",toggleTheme:()=>{u(h=>h==="dark"?"light":"dark")},setTheme:u};return l.jsx(_h.Provider,{value:m,children:s})},y1="/api";class v1{constructor(){this.baseUrl=y1}getToken(){return localStorage.getItem("token")}async request(o,u={}){const d=`${this.baseUrl}${o}`,m=this.getToken(),h={...u,headers:{"Content-Type":"application/json",...u.headers}};m&&(h.headers.Authorization=`Bearer ${m}`);const p=await fetch(d,h);if(!p.ok){const b=await p.json().catch(()=>({message:"Request failed"}));throw new Error(b.message||"Request failed")}return p.json()}async login(o,u){return this.request("/auth/login",{method:"POST",body:JSON.stringify({email:o,password:u})})}async register(o){return this.request("/auth/register",{method:"POST",body:JSON.stringify(o)})}async getProfile(){return this.request("/users/profile")}async updateProfile(o){return this.request("/users/profile",{method:"PUT",body:JSON.stringify(o)})}async uploadAvatar(o){const u=new FormData;u.append("avatar",o);const d=`${this.baseUrl}/users/profile/avatar`,m=this.getToken(),h=await fetch(d,{method:"POST",body:u,headers:m?{Authorization:`Bearer ${m}`}:{}});if(!h.ok){const p=await h.json().catch(()=>({message:"Image upload failed"}));throw new Error(p.message||"Image upload failed")}return h.json()}async getUserById(o){return this.request(`/users/${o}`)}async searchUsers(o){const u=new URLSearchParams(o).toString();return this.request(`/users/search?${u}`)}async getRecommendations(){return this.request("/recommendations")}async getSimilarUsers(o){return this.request(`/recommendations/similar/${o}`)}async getConnections(){return this.request("/connections")}async sendConnectionRequest(o){return this.request(`/connections/request/${o}`,{method:"POST"})}async acceptConnection(o){return this.request(`/connections/accept/${o}`,{method:"PUT"})}async rejectConnection(o){return this.request(`/connections/reject/${o}`,{method:"PUT"})}async removeConnection(o){return this.request(`/connections/${o}`,{method:"DELETE"})}async getConnectionStatus(o){return this.request(`/connections/status/${o}`)}async getConversations(){return this.request("/messages/conversations")}async getMessages(o){return this.request(`/messages/${o}`)}async sendMessage(o,u){return this.request(`/messages/${o}`,{method:"POST",body:JSON.stringify({content:u})})}async deleteMessage(o){return this.request(`/messages/${o}`,{method:"DELETE"})}async getInteractionStatus(o){return this.request(`/users/interaction-status/${o}`)}async getBlockedUsers(){return this.request("/users/blocked")}async muteUser(o){return this.request(`/users/mute/${o}`,{method:"PUT"})}async blockUser(o){return this.request(`/users/block/${o}`,{method:"PUT"})}async clearChat(o){return this.request(`/users/clear-chat/${o}`,{method:"PUT"})}async getNotifications(){return this.request("/notifications")}async getUnreadCount(){return this.request("/notifications/unread-count")}async markNotificationRead(o){return this.request(`/notifications/${o}/read`,{method:"PUT"})}async markAllNotificationsRead(){return this.request("/notifications/read-all",{method:"PUT"})}async getDashboardStats(){return this.request("/users/dashboard")}}const ze=new v1;const b1=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x1=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,u,d)=>d?d.toUpperCase():u.toLowerCase()),th=s=>{const o=x1(s);return o.charAt(0).toUpperCase()+o.slice(1)},Th=(...s)=>s.filter((o,u,d)=>!!o&&o.trim()!==""&&d.indexOf(o)===u).join(" ").trim(),j1=s=>{for(const o in s)if(o.startsWith("aria-")||o==="role"||o==="title")return!0};var S1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const N1=y.forwardRef(({color:s="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:d,className:m="",children:h,iconNode:p,...b},v)=>y.createElement("svg",{ref:v,...S1,width:o,height:o,stroke:s,strokeWidth:d?Number(u)*24/Number(o):u,className:Th("lucide",m),...!h&&!j1(b)&&{"aria-hidden":"true"},...b},[...p.map(([g,w])=>y.createElement(g,w)),...Array.isArray(h)?h:[h]]));const W=(s,o)=>{const u=y.forwardRef(({className:d,...m},h)=>y.createElement(N1,{ref:h,iconNode:o,className:Th(`lucide-${b1(th(s))}`,`lucide-${s}`,d),...m}));return u.displayName=th(s),u};const w1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],It=W("arrow-left",w1);const z1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ii=W("arrow-right",z1);const k1=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ah=W("ban",k1);const C1=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Ar=W("bell",C1);const E1=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],_1=W("book-open",E1);const T1=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],A1=W("briefcase",T1);const M1=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],Mh=W("building",M1);const R1=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],O1=W("camera",R1);const D1=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],U1=W("chart-column",D1);const q1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Or=W("check",q1);const H1=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Rh=W("chevron-down",H1);const L1=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],B1=W("chevron-up",L1);const Y1=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Oh=W("circle-check-big",Y1);const G1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],X1=W("circle-question-mark",G1);const Q1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],V1=W("circle-x",Q1);const Z1=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Dh=W("clock",Z1);const K1=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],J1=W("cookie",K1);const $1=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],F1=W("database",$1);const W1=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],I1=W("ellipsis-vertical",W1);const P1=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Uh=W("eye-off",P1);const ev=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Lr=W("eye",ev);const tv=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],qh=W("file-text",tv);const av=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],nv=W("funnel",av);const lv=[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381",key:"pgg06f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m21.5 10.5-8-8",key:"a17d9x"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m8.5 7.5 8 8",key:"1oyaui"}]],iv=W("gavel",lv);const rv=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],sv=W("github",rv);const ov=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Hh=W("globe",ov);const cv=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Rc=W("graduation-cap",cv);const uv=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],dv=W("heart",uv);const fv=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],mv=W("house",fv);const hv=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],pv=W("lightbulb",hv);const gv=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Lh=W("linkedin",gv);const yv=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],Ft=W("loader",yv);const vv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Dr=W("lock",vv);const bv=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],ah=W("log-out",bv);const xv=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ri=W("mail",xv);const jv=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Oc=W("map-pin",jv);const Sv=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],nh=W("menu",Sv);const Nv=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Xt=W("message-circle",Nv);const wv=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],zv=W("mic",wv);const kv=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],gc=W("moon",kv);const Cv=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Ev=W("network",Cv);const _v=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Tv=W("pen-line",_v);const Av=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Mv=W("save",Av);const Rv=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],Ov=W("scale",Rv);const Dv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ja=W("search",Dv);const Uv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],qv=W("send",Uv);const Hv=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],jc=W("settings",Hv);const Lv=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Bv=W("share-2",Lv);const Yv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Gv=W("shield-alert",Yv);const Xv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qv=W("shield-check",Xv);const Vv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Dc=W("shield",Vv);const Zv=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Bh=W("sparkles",Zv);const Kv=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],yc=W("sun",Kv);const Jv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Yh=W("target",Jv);const $v=[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]],Fv=W("thumbs-up",$v);const Wv=[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]],Iv=W("toggle-right",Wv);const Pv=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Gh=W("trash-2",Pv);const eb=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],tb=W("trending-up",eb);const ab=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Xh=W("triangle-alert",ab);const nb=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],lb=W("twitter",nb);const ib=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Br=W("user-check",ib);const rb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],nl=W("user-plus",rb);const sb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],ob=W("user-x",sb);const cb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ni=W("user",cb);const ub=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],yn=W("users",ub);const db=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ll=W("x",db);const fb=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],mb=W("zap",fb),hb=()=>{const{user:s,logout:o,isAuthenticated:u}=Vt(),{theme:d,toggleTheme:m}=p1(),h=Qt(),p=ja(),[b,v]=y.useState(!1),[g,w]=y.useState(!1),[N,q]=y.useState(!1),[H,O]=y.useState(0),[D,M]=y.useState([]),[G,X]=y.useState(!1),Z=y.useRef(null),re=y.useRef(null);y.useEffect(()=>{if(u){$();const F=setInterval($,3e4);return()=>clearInterval(F)}},[u]),y.useEffect(()=>{const F=P=>{Z.current&&!Z.current.contains(P.target)&&q(!1),re.current&&!re.current.contains(P.target)&&w(!1)};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[]);const $=async()=>{try{const F=await ze.getUnreadCount();O(F.count)}catch{}},se=async()=>{X(!0);try{const F=await ze.getNotifications();M(F)}catch{M([])}finally{X(!1)}},K=()=>{N||se(),q(!N),w(!1)},me=async()=>{try{await ze.markAllNotificationsRead(),M(F=>F.map(P=>({...P,read:!0}))),O(0)}catch{}},Ee=async F=>{if(!F.read)try{await ze.markNotificationRead(F._id),M(P=>P.map(_=>_._id===F._id?{..._,read:!0}:_)),O(P=>Math.max(0,P-1))}catch{}q(!1),F.type==="connection_request"||F.type==="connection_accepted"?p("/connections"):F.type==="new_message"&&F.sender?._id&&p(`/messages/${F.sender._id}`)},Ue=F=>{switch(F){case"connection_request":return l.jsx(nl,{size:16});case"connection_accepted":return l.jsx(Oh,{size:16});case"new_message":return l.jsx(Xt,{size:16});default:return l.jsx(Ar,{size:16})}},Ge=F=>{const P=new Date(F),Q=new Date-P,ee=Math.floor(Q/6e4);if(ee<1)return"Just now";if(ee<60)return`${ee}m ago`;const ge=Math.floor(ee/60);return ge<24?`${ge}h ago`:Math.floor(ge/24)===1?"Yesterday":P.toLocaleDateString("en-US",{month:"short",day:"numeric"})},Me=()=>{o(),p("/login")},Le=[{path:"/",label:"Home",icon:mv},{path:"/discover",label:"Discover",icon:Ja},{path:"/connections",label:"Connections",icon:yn},{path:"/messages",label:"Messages",icon:Xt}];return u?l.jsxs("nav",{style:{position:"sticky",top:0,zIndex:100,backgroundColor:"var(--bg-primary)",borderBottom:"1px solid var(--border-color)",backdropFilter:"blur(10px)"},children:[l.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"0 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",height:"4rem",gap:"2rem"},children:[l.jsxs(oe,{to:"/",style:{display:"flex",alignItems:"center",gap:"0.75rem",textDecoration:"none"},children:[l.jsx("div",{style:{width:"2.5rem",height:"2.5rem",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",borderRadius:"0.75rem",fontSize:"1.5rem",fontWeight:800,color:"white"},children:"S"}),l.jsx("span",{style:{fontSize:"1.25rem",fontWeight:700,color:"var(--text-primary)"},children:"StudentNet"})]}),l.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},className:"desktop-nav",children:Le.map(({path:F,label:P,icon:_})=>l.jsxs(oe,{to:F,style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 1rem",color:h.pathname===F?"white":"var(--text-secondary)",textDecoration:"none",borderRadius:"0.5rem",background:h.pathname===F?"linear-gradient(135deg, #3b82f6, #2563eb)":"transparent",transition:"all 0.15s ease"},children:[l.jsx(_,{size:20}),l.jsx("span",{children:P})]},F))}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("button",{onClick:m,"aria-label":"Toggle theme",style:{width:"2.5rem",height:"2.5rem",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-tertiary)",border:"none",borderRadius:"0.5rem",color:"var(--text-secondary)",cursor:"pointer"},children:d==="dark"?l.jsx(yc,{size:20}):l.jsx(gc,{size:20})}),l.jsxs("div",{ref:Z,style:{position:"relative"},children:[l.jsxs("button",{onClick:K,style:{position:"relative",width:"2.5rem",height:"2.5rem",display:"flex",alignItems:"center",justifyContent:"center",background:N?"var(--primary-100)":"var(--bg-tertiary)",border:"none",borderRadius:"0.5rem",color:N?"var(--primary-600)":"var(--text-secondary)",cursor:"pointer",transition:"all 0.15s ease"},children:[l.jsx(Ar,{size:20}),H>0&&l.jsx("span",{style:{position:"absolute",top:"-2px",right:"-2px",minWidth:"1rem",height:"1rem",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",background:"linear-gradient(135deg, #ef4444, #dc2626)",color:"white",fontSize:"0.625rem",fontWeight:600,borderRadius:"9999px"},children:H>9?"9+":H})]}),N&&l.jsxs("div",{style:{position:"absolute",top:"calc(100% + 0.5rem)",right:0,width:"360px",maxHeight:"420px",background:"var(--bg-primary)",border:"1px solid var(--border-color)",borderRadius:"0.75rem",boxShadow:"0 10px 40px var(--shadow-color)",overflow:"hidden",animation:"slideDown 0.2s ease",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem",borderBottom:"1px solid var(--border-color)"},children:[l.jsx("h4",{style:{fontWeight:600,color:"var(--text-primary)",margin:0},children:"Notifications"}),H>0&&l.jsxs("button",{onClick:me,style:{display:"flex",alignItems:"center",gap:"0.35rem",background:"none",border:"none",color:"var(--primary-500)",fontSize:"0.8rem",cursor:"pointer",fontWeight:500},children:[l.jsx(Or,{size:14}),"Mark all read"]})]}),l.jsx("div",{style:{flex:1,overflowY:"auto",maxHeight:"350px"},children:G?l.jsx("div",{style:{padding:"2rem",textAlign:"center",color:"var(--text-muted)"},children:"Loading..."}):D.length===0?l.jsxs("div",{style:{padding:"2rem",textAlign:"center",color:"var(--text-muted)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},children:[l.jsx(Ar,{size:28}),l.jsx("p",{style:{margin:0},children:"No notifications yet"})]}):D.map(F=>l.jsxs("div",{onClick:()=>Ee(F),style:{display:"flex",alignItems:"flex-start",gap:"0.75rem",padding:"0.85rem 1rem",cursor:"pointer",background:F.read?"transparent":"var(--bg-secondary)",borderBottom:"1px solid var(--border-color)",transition:"background 0.15s ease"},onMouseEnter:P=>P.currentTarget.style.background="var(--bg-tertiary)",onMouseLeave:P=>P.currentTarget.style.background=F.read?"transparent":"var(--bg-secondary)",children:[l.jsx("div",{style:{width:"2.25rem",height:"2.25rem",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"9999px",flexShrink:0,background:F.type==="connection_request"?"linear-gradient(135deg, var(--primary-100), var(--primary-200))":F.type==="connection_accepted"?"linear-gradient(135deg, #dcfce7, #bbf7d0)":"linear-gradient(135deg, var(--secondary-100), var(--secondary-200))",color:F.type==="connection_request"?"var(--primary-600)":F.type==="connection_accepted"?"#16a34a":"var(--secondary-600)"},children:Ue(F.type)}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("p",{style:{margin:0,fontSize:"0.85rem",color:"var(--text-primary)",fontWeight:F.read?400:600,lineHeight:1.4},children:F.message}),l.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-muted)"},children:Ge(F.createdAt)})]}),!F.read&&l.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"9999px",background:"var(--primary-500)",flexShrink:0,marginTop:"6px"}})]},F._id))})]})]}),l.jsxs("div",{ref:re,style:{position:"relative"},children:[l.jsx("button",{onClick:()=>{w(!g),q(!1)},style:{background:"none",border:"none",padding:0,cursor:"pointer"},children:l.jsx("div",{style:{width:"2.5rem",height:"2.5rem",borderRadius:"9999px",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",border:"2px solid var(--border-color)",color:"white",fontWeight:600,fontSize:"1rem"},children:s?.avatar?l.jsx("img",{src:s.avatar,alt:s.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):l.jsx("span",{children:s?.name?.charAt(0)||"U"})})}),g&&l.jsxs("div",{style:{position:"absolute",top:"calc(100% + 0.5rem)",right:0,minWidth:"200px",background:"var(--bg-primary)",border:"1px solid var(--border-color)",borderRadius:"0.75rem",boxShadow:"0 10px 40px var(--shadow-color)",overflow:"hidden",animation:"slideDown 0.2s ease"},children:[l.jsxs("div",{style:{padding:"1rem",borderBottom:"1px solid var(--border-color)"},children:[l.jsx("p",{style:{fontWeight:600,color:"var(--text-primary)"},children:s?.name}),l.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:s?.email})]}),l.jsxs(oe,{to:"/profile",onClick:()=>w(!1),style:{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.75rem 1rem",color:"var(--text-secondary)",textDecoration:"none"},children:[l.jsx(ni,{size:16}),l.jsx("span",{children:"My Profile"})]}),l.jsxs("button",{onClick:Me,style:{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.75rem 1rem",background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",textAlign:"left"},children:[l.jsx(ah,{size:16}),l.jsx("span",{children:"Logout"})]})]})]}),l.jsx("button",{onClick:()=>v(!b),className:"mobile-menu-btn",style:{display:"none",background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:b?l.jsx(ll,{size:24}):l.jsx(nh,{size:24})})]})]}),b&&l.jsxs("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"var(--bg-primary)",borderBottom:"1px solid var(--border-color)",padding:"1rem"},children:[Le.map(({path:F,label:P,icon:_})=>l.jsxs(oe,{to:F,onClick:()=>v(!1),style:{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.75rem 1rem",color:h.pathname===F?"var(--text-primary)":"var(--text-secondary)",textDecoration:"none",borderRadius:"0.5rem",background:h.pathname===F?"var(--bg-tertiary)":"transparent"},children:[l.jsx(_,{size:20}),l.jsx("span",{children:P})]},F)),l.jsx("div",{style:{height:"1px",background:"var(--border-color)",margin:"0.5rem 0"}}),l.jsxs(oe,{to:"/profile",onClick:()=>v(!1),style:{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.75rem 1rem",color:"var(--text-secondary)",textDecoration:"none",borderRadius:"0.5rem"},children:[l.jsx(ni,{size:20}),l.jsx("span",{children:"My Profile"})]}),l.jsxs("button",{onClick:Me,style:{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.75rem 1rem",background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",borderRadius:"0.5rem",textAlign:"left"},children:[l.jsx(ah,{size:20}),l.jsx("span",{children:"Logout"})]})]}),l.jsx("style",{children:`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `})]}):l.jsxs("nav",{style:{position:"sticky",top:0,zIndex:100,backgroundColor:"var(--bg-primary)",borderBottom:"1px solid var(--border-color)",backdropFilter:"blur(10px)"},children:[l.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",padding:"0 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between",height:"4rem"},children:[l.jsxs(oe,{to:"/",style:{display:"flex",alignItems:"center",gap:"0.75rem",textDecoration:"none"},children:[l.jsx("div",{style:{width:"2.5rem",height:"2.5rem",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #3b82f6, #8b5cf6)",borderRadius:"0.75rem",fontSize:"1.5rem",fontWeight:800,color:"white"},children:"S"}),l.jsx("span",{style:{fontSize:"1.25rem",fontWeight:700,color:"var(--text-primary)"},children:"StudentNet"})]}),l.jsxs("div",{className:"guest-desktop-actions",style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[l.jsx("button",{onClick:m,"aria-label":"Toggle theme",style:{width:"2.5rem",height:"2.5rem",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--bg-tertiary)",border:"none",borderRadius:"0.5rem",color:"var(--text-secondary)",cursor:"pointer"},children:d==="dark"?l.jsx(yc,{size:20}):l.jsx(gc,{size:20})}),l.jsx(oe,{to:"/login",className:"btn btn-ghost",style:{padding:"0.5rem 1rem",color:"var(--text-secondary)",textDecoration:"none",borderRadius:"0.5rem"},children:"Login"}),l.jsx(oe,{to:"/signup",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.625rem 1.25rem",fontSize:"0.875rem",fontWeight:600,background:"linear-gradient(135deg, #3b82f6, #2563eb)",color:"white",borderRadius:"0.5rem",textDecoration:"none",border:"none"},children:"Sign Up"})]}),l.jsx("button",{onClick:()=>v(!b),className:"guest-mobile-menu-btn",style:{display:"none",background:"none",border:"none",color:"var(--text-primary)",cursor:"pointer"},children:b?l.jsx(ll,{size:24}):l.jsx(nh,{size:24})})]}),b&&l.jsxs("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"var(--bg-primary)",borderBottom:"1px solid var(--border-color)",padding:"1rem",zIndex:50},children:[l.jsxs("button",{onClick:()=>{m(),v(!1)},style:{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.75rem 1rem",background:"none",border:"none",color:"var(--text-secondary)",cursor:"pointer",borderRadius:"0.5rem",textAlign:"left"},children:[d==="dark"?l.jsx(yc,{size:20}):l.jsx(gc,{size:20}),l.jsx("span",{children:d==="dark"?"Light Mode":"Dark Mode"})]}),l.jsx("div",{style:{height:"1px",background:"var(--border-color)",margin:"0.5rem 0"}}),l.jsxs(oe,{to:"/login",onClick:()=>v(!1),style:{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.75rem 1rem",color:"var(--text-secondary)",textDecoration:"none",borderRadius:"0.5rem"},children:[l.jsx(ni,{size:20}),l.jsx("span",{children:"Login"})]}),l.jsxs(oe,{to:"/signup",onClick:()=>v(!1),style:{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.75rem 1rem",color:"var(--primary-500)",textDecoration:"none",borderRadius:"0.5rem",fontWeight:600},children:[l.jsx(nl,{size:20}),l.jsx("span",{children:"Sign Up"})]})]}),l.jsx("style",{children:`
          @media (max-width: 768px) {
            .guest-desktop-actions {
              display: none !important;
            }
            .guest-mobile-menu-btn {
              display: flex !important;
            }
          }
        `})]})},Gt=({children:s})=>{const{pathname:o}=Qt();return y.useEffect(()=>{window.scrollTo(0,0)},[o]),l.jsxs("div",{className:"layout",children:[l.jsx(hb,{}),l.jsx("main",{className:"main-content",children:s||l.jsx(Ty,{})}),l.jsx("footer",{className:"footer-modern",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"footer-grid",children:[l.jsxs("div",{className:"footer-brand-col",children:[l.jsxs("div",{className:"footer-logo-wrapper",children:[l.jsx("div",{className:"brand-logo-modern",children:l.jsx("span",{children:"S"})}),l.jsx("span",{className:"brand-text-modern",children:"StudentNet"})]}),l.jsx("p",{className:"footer-desc",children:"Empowering students to connect, collaborate, and grow their professional network before graduation."}),l.jsxs("div",{className:"social-links",children:[l.jsx("a",{href:"#","aria-label":"Github",children:l.jsx(sv,{size:20})}),l.jsx("a",{href:"#","aria-label":"Twitter",children:l.jsx(lb,{size:20})}),l.jsx("a",{href:"#","aria-label":"LinkedIn",children:l.jsx(Lh,{size:20})}),l.jsx("a",{href:"#","aria-label":"Email",children:l.jsx(ri,{size:20})})]})]}),l.jsxs("div",{className:"footer-links-col",children:[l.jsx("h3",{children:"Platform"}),l.jsx(oe,{to:"/discover",children:"Discover"}),l.jsx(oe,{to:"/messages",children:"Messages"}),l.jsx(oe,{to:"/connections",children:"Connections"})]}),l.jsxs("div",{className:"footer-links-col",children:[l.jsx("h3",{children:"Resources"}),l.jsx(oe,{to:"/help-center",children:"Help Center"}),l.jsx(oe,{to:"/community-guidelines",children:"Community Guidelines"}),l.jsx(oe,{to:"/career-advice",children:"Career Advice"})]}),l.jsxs("div",{className:"footer-links-col",children:[l.jsx("h3",{children:"Legal"}),l.jsx(oe,{to:"/privacy-policy",children:"Privacy Policy"}),l.jsx(oe,{to:"/terms-of-service",children:"Terms of Service"}),l.jsx(oe,{to:"/cookie-policy",children:"Cookie Policy"})]})]}),l.jsxs("div",{className:"footer-bottom",children:[l.jsxs("p",{children:["© ",new Date().getFullYear()," StudentNet. All rights reserved."]}),l.jsx("div",{className:"footer-bottom-links",children:l.jsx("span",{children:"Designed with ❤️ for students"})})]})]})}),l.jsx("style",{children:`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
          padding: 2rem 0;
        }

        /* Modern Footer Redesign */
        .footer-modern {
          background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
          border-top: 1px solid rgba(255,255,255,0.05); /* very subtle border */
          padding: 4rem 0 2rem;
          margin-top: auto;
          position: relative;
          overflow: hidden;
        }
        
        /* Subtle glow effect behind footer */
        .footer-modern::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary-500), transparent);
          opacity: 0.5;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-logo-wrapper {
            justify-content: center;
          }
          .social-links {
            justify-content: center;
          }
        }

        .footer-logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .brand-logo-modern {
          width: 2.75rem;
          height: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 0.75rem;
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .brand-text-modern {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.5px;
        }

        .footer-desc {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          max-width: 90%;
        }

        @media (max-width: 600px) {
          .footer-desc {
            max-width: 100%;
            margin: 0 auto 1.5rem;
          }
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          color: var(--text-secondary);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-links a:hover {
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary-500);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
        }

        .footer-links-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-col h3 {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
        }

        .footer-links-col a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          position: relative;
          width: fit-content;
        }

        @media (max-width: 600px) {
          .footer-links-col a {
            margin: 0 auto;
          }
        }

        .footer-links-col a:hover {
          color: var(--primary-400);
          transform: translateX(3px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        @media (max-width: 600px) {
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `})]})},pb=()=>{const{isAuthenticated:s,user:o}=Vt();return s?l.jsx(yb,{user:o}):l.jsx(gb,{})},gb=()=>l.jsxs("div",{className:"guest-home",children:[l.jsx("section",{className:"hero",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"hero-content",children:[l.jsxs("div",{className:"hero-badge animate-fadeIn",children:[l.jsx(Bh,{size:16}),l.jsx("span",{children:"Smart Student Networking"})]}),l.jsxs("h1",{className:"hero-title animate-slideUp",children:["Connect with ",l.jsx("span",{className:"gradient-text",children:"Like-minded Students"})," Worldwide"]}),l.jsx("p",{className:"hero-description animate-slideUp",children:"Find the perfect teammates for projects, hackathons, research, and startups. Our intelligent matching connects you with students who share your interests and goals."}),l.jsxs("div",{className:"hero-actions animate-slideUp",children:[l.jsxs(oe,{to:"/signup",className:"btn btn-primary btn-lg",children:["Get Started Free",l.jsx(ii,{size:20})]}),l.jsx(oe,{to:"/login",className:"btn btn-outline btn-lg",children:"Sign In"})]}),l.jsxs("div",{className:"hero-stats",children:[l.jsxs("div",{className:"stat",children:[l.jsx("span",{className:"stat-number",children:"1K+"}),l.jsx("span",{className:"stat-label",children:"Students"})]}),l.jsx("div",{className:"stat-divider"}),l.jsxs("div",{className:"stat",children:[l.jsx("span",{className:"stat-number",children:"5+"}),l.jsx("span",{className:"stat-label",children:"Colleges"})]}),l.jsx("div",{className:"stat-divider"}),l.jsxs("div",{className:"stat",children:[l.jsx("span",{className:"stat-number",children:"1K+"}),l.jsx("span",{className:"stat-label",children:"Connections"})]})]})]}),l.jsxs("div",{className:"hero-visual",children:[l.jsxs("div",{className:"visual-card card-1 animate-fadeIn",children:[l.jsx("div",{className:"mini-avatar",children:"🎓"}),l.jsxs("div",{children:[l.jsx("strong",{children:"Sarah"}),l.jsx("p",{children:"ML Enthusiast"})]})]}),l.jsxs("div",{className:"visual-card card-2 animate-fadeIn",children:[l.jsx("div",{className:"mini-avatar",children:"💻"}),l.jsxs("div",{children:[l.jsx("strong",{children:"Alex"}),l.jsx("p",{children:"Full Stack Dev"})]})]}),l.jsxs("div",{className:"visual-card card-3 animate-fadeIn",children:[l.jsx("div",{className:"mini-avatar",children:"🚀"}),l.jsxs("div",{children:[l.jsx("strong",{children:"Mike"}),l.jsx("p",{children:"Startup Founder"})]})]}),l.jsx("div",{className:"connection-line line-1"}),l.jsx("div",{className:"connection-line line-2"}),l.jsx("div",{className:"center-circle",children:l.jsx("span",{children:"You"})})]})]})}),l.jsx("section",{className:"features",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{children:["Why Choose ",l.jsx("span",{className:"gradient-text",children:"StudentNet"}),"?"]}),l.jsx("p",{children:"Everything you need to build your academic and professional network"})]}),l.jsxs("div",{className:"features-grid",children:[l.jsxs("div",{className:"feature-card card hover-lift",children:[l.jsx("div",{className:"feature-icon-wrapper",children:l.jsx(Yh,{size:28})}),l.jsx("h3",{children:"Interest-Based Matching"}),l.jsx("p",{children:"Our algorithm finds students with similar interests, skills, and career goals."})]}),l.jsxs("div",{className:"feature-card card hover-lift",children:[l.jsx("div",{className:"feature-icon-wrapper secondary",children:l.jsx(mb,{size:28})}),l.jsx("h3",{children:"Smart Recommendations"}),l.jsx("p",{children:"Get personalized suggestions based on your profile and activity patterns."})]}),l.jsxs("div",{className:"feature-card card hover-lift",children:[l.jsx("div",{className:"feature-icon-wrapper accent",children:l.jsx(Xt,{size:28})}),l.jsx("h3",{children:"Seamless Communication"}),l.jsx("p",{children:"Connect and chat with potential collaborators directly on the platform."})]}),l.jsxs("div",{className:"feature-card card hover-lift",children:[l.jsx("div",{className:"feature-icon-wrapper",children:l.jsx(Dc,{size:28})}),l.jsx("h3",{children:"Student-Only Network"}),l.jsx("p",{children:"A secure environment exclusively for verified students and academics."})]})]})]})}),l.jsx("section",{className:"cta",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"cta-card",children:[l.jsx("h2",{children:"Ready to Find Your Perfect Match?"}),l.jsx("p",{children:"Join thousands of students already networking on StudentNet"}),l.jsxs(oe,{to:"/signup",className:"btn btn-primary btn-lg",children:["Create Free Account",l.jsx(ii,{size:20})]})]})})}),l.jsx("style",{children:`
        .guest-home {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
          padding: 4rem 0;
          position: relative;
        }

        .hero .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, var(--primary-100), var(--secondary-100));
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--primary-700);
          margin-bottom: 1.5rem;
        }

        .dark .hero-badge {
          background: linear-gradient(135deg, var(--primary-900), var(--secondary-900));
          color: var(--primary-300);
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .stat-divider {
          width: 1px;
          height: 2.5rem;
          background: var(--border-color);
        }

        /* Hero Visual */
        .hero-visual {
          position: relative;
          height: 400px;
        }

        .visual-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          box-shadow: 0 10px 40px var(--shadow-color);
        }

        .card-1 { top: 10%; left: 10%; animation-delay: 0.1s; }
        .card-2 { top: 40%; right: 5%; animation-delay: 0.2s; }
        .card-3 { bottom: 10%; left: 20%; animation-delay: 0.3s; }

        .mini-avatar {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          background: var(--bg-tertiary);
          border-radius: 0.75rem;
        }

        .visual-card strong {
          display: block;
          color: var(--text-primary);
        }

        .visual-card p {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin: 0;
        }

        .center-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 5rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 9999px;
          color: white;
          font-weight: 700;
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }

        .connection-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-500), transparent);
          opacity: 0.3;
        }

        .line-1 {
          width: 120px;
          top: 25%;
          left: 35%;
          transform: rotate(30deg);
        }

        .line-2 {
          width: 100px;
          bottom: 30%;
          left: 40%;
          transform: rotate(-20deg);
        }

        /* Features Section */
        .features {
          padding: 6rem 0;
          background: var(--bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.125rem;
          color: var(--text-muted);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .feature-card {
          text-align: center;
          padding: 2rem;
        }

        .feature-icon-wrapper {
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
          border-radius: 1rem;
          color: var(--primary-600);
        }

        .dark .feature-icon-wrapper {
          background: linear-gradient(135deg, var(--primary-900), var(--primary-800));
          color: var(--primary-400);
        }

        .feature-icon-wrapper.secondary {
          background: linear-gradient(135deg, var(--secondary-100), var(--secondary-200));
          color: var(--secondary-600);
        }

        .dark .feature-icon-wrapper.secondary {
          background: linear-gradient(135deg, var(--secondary-900), var(--secondary-800));
          color: var(--secondary-400);
        }

        .feature-icon-wrapper.accent {
          background: linear-gradient(135deg, var(--accent-100), var(--accent-200));
          color: var(--accent-600);
        }

        .dark .feature-icon-wrapper.accent {
          background: linear-gradient(135deg, var(--accent-900), var(--accent-800));
          color: var(--accent-400);
        }

        .feature-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .feature-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        /* CTA Section */
        .cta {
          padding: 6rem 0;
        }

        .cta-card {
          text-align: center;
          padding: 4rem;
          background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
          border-radius: 2rem;
          color: white;
        }

        .cta-card h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
        }

        .cta-card p {
          font-size: 1.125rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          color: white;
        }

        .cta-card .btn-primary {
          background: white;
          color: var(--primary-600);
        }

        .cta-card .btn-primary:hover {
          background: var(--gray-100);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        @media (max-width: 1024px) {
          .hero .container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-visual {
            display: none;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .hero-actions {
            flex-direction: column;
          }

          .cta-card {
            padding: 2rem;
          }
        }
      `})]}),yb=({user:s})=>{const[o,u]=y.useState({connections:0,messages:0,profileViews:0,pendingRequests:0});return y.useEffect(()=>{(async()=>{try{const m=await ze.getDashboardStats();u(m)}catch{}})()},[]),l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"dashboard",children:[l.jsxs("div",{className:"welcome-section animate-fadeIn",children:[l.jsxs("h1",{children:["Welcome back, ",l.jsx("span",{className:"gradient-text",children:s?.name?.split(" ")[0]||"Student"}),"! 👋"]}),l.jsx("p",{children:"Here's what's happening in your network"})]}),l.jsxs("div",{className:"dashboard-grid",children:[l.jsxs("div",{className:"quick-stats",children:[l.jsxs("div",{className:"stat-card card",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(yn,{size:24})}),l.jsxs("div",{className:"stat-info",children:[l.jsx("span",{className:"stat-value",children:o.connections}),l.jsx("span",{className:"stat-label",children:"Connections"})]})]}),l.jsxs("div",{className:"stat-card card",children:[l.jsx("div",{className:"stat-icon secondary",children:l.jsx(Xt,{size:24})}),l.jsxs("div",{className:"stat-info",children:[l.jsx("span",{className:"stat-value",children:o.messages}),l.jsx("span",{className:"stat-label",children:"Messages"})]})]}),l.jsxs("div",{className:"stat-card card",children:[l.jsx("div",{className:"stat-icon accent",children:l.jsx(Ja,{size:24})}),l.jsxs("div",{className:"stat-info",children:[l.jsx("span",{className:"stat-value",children:o.profileViews}),l.jsx("span",{className:"stat-label",children:"Profile Views"})]})]})]}),l.jsxs("div",{className:"quick-actions card",children:[l.jsx("h3",{children:"Quick Actions"}),l.jsxs("div",{className:"action-buttons",children:[l.jsxs(oe,{to:"/discover",className:"action-btn",children:[l.jsx(Ja,{size:20}),l.jsx("span",{children:"Discover Students"})]}),l.jsxs(oe,{to:"/connections",className:"action-btn",children:[l.jsx(yn,{size:20}),l.jsx("span",{children:"View Connections"})]}),l.jsxs(oe,{to:"/messages",className:"action-btn",children:[l.jsx(Xt,{size:20}),l.jsx("span",{children:"Messages"})]}),l.jsxs(oe,{to:"/profile",className:"action-btn",children:[l.jsx(Bh,{size:20}),l.jsx("span",{children:"Edit Profile"})]})]})]}),l.jsxs("div",{className:"interests-card card",children:[l.jsx("h3",{children:"Your Interests"}),l.jsx("div",{className:"interests-tags",children:s?.interests?.slice(0,6).map((d,m)=>l.jsx("span",{className:"badge",children:d},m))||l.jsx("p",{className:"no-data",children:"No interests added yet"})}),l.jsx(oe,{to:"/profile",className:"edit-link",children:"Edit interests →"})]}),l.jsxs("div",{className:"skills-card card",children:[l.jsx("h3",{children:"Your Skills"}),l.jsx("div",{className:"skills-tags",children:s?.skills?.slice(0,6).map((d,m)=>l.jsx("span",{className:"badge badge-secondary",children:d},m))||l.jsx("p",{className:"no-data",children:"No skills added yet"})}),l.jsx(oe,{to:"/profile",className:"edit-link",children:"Edit skills →"})]}),l.jsxs("div",{className:"career-goals-card card",children:[l.jsx("h3",{children:"Your Career Goals"}),l.jsx("div",{className:"career-goals-tags",children:s?.careerGoals?.slice(0,6).map((d,m)=>l.jsx("span",{className:"badge badge-accent",style:{background:"var(--primary-100)",color:"var(--primary-700)",border:"1px solid var(--primary-200)"},children:d},m))||l.jsx("p",{className:"no-data",children:"No career goals added yet"})}),l.jsx(oe,{to:"/profile",className:"edit-link",children:"Edit career goals →"})]})]})]}),l.jsx("style",{children:`
        .dashboard {
          padding: 1rem 0;
        }

        .welcome-section {
          margin-bottom: 2rem;
        }

        .welcome-section h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .welcome-section p {
          color: var(--text-muted);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .quick-stats {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
          border-radius: 1rem;
          color: var(--primary-600);
        }

        .dark .stat-icon {
          background: linear-gradient(135deg, var(--primary-900), var(--primary-800));
          color: var(--primary-400);
        }

        .stat-icon.secondary {
          background: linear-gradient(135deg, var(--secondary-100), var(--secondary-200));
          color: var(--secondary-600);
        }

        .dark .stat-icon.secondary {
          background: linear-gradient(135deg, var(--secondary-900), var(--secondary-800));
          color: var(--secondary-400);
        }

        .stat-icon.accent {
          background: linear-gradient(135deg, var(--accent-100), var(--accent-200));
          color: var(--accent-600);
        }

        .dark .stat-icon.accent {
          background: linear-gradient(135deg, var(--accent-900), var(--accent-800));
          color: var(--accent-400);
        }

        .stat-value {
          display: block;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .quick-actions {
          grid-column: 1 / -1;
        }

        .quick-actions h3 {
          margin-bottom: 1rem;
        }

        .action-buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem;
          background: var(--bg-tertiary);
          border-radius: 1rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .action-btn:hover {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          color: white;
          transform: translateY(-4px);
        }

        .interests-card,
        .skills-card,
        .career-goals-card {
          grid-column: span 1;
        }

        .interests-card h3,
        .skills-card h3,
        .career-goals-card h3 {
          margin-bottom: 1rem;
        }

        .interests-tags,
        .skills-tags,
        .career-goals-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .edit-link {
          font-size: 0.875rem;
          color: var(--primary-500);
        }

        .no-data {
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .quick-stats {
            grid-template-columns: 1fr;
          }

          .action-buttons {
            grid-template-columns: repeat(2, 1fr);
          }

          .interests-card,
          .skills-card,
          .career-goals-card {
            grid-column: 1;
          }
        }
      `})]})};function vb(s={}){const{nonce:o,locale:u,onScriptLoadSuccess:d,onScriptLoadError:m}=s,[h,p]=y.useState(!1),b=y.useRef(d);b.current=d;const v=y.useRef(m);return v.current=m,y.useEffect(()=>{const g=document.createElement("script");return g.src="https://accounts.google.com/gsi/client",u&&(g.src+=`?hl=${u}`),g.async=!0,g.defer=!0,g.nonce=o,g.onload=()=>{var w;p(!0),(w=b.current)===null||w===void 0||w.call(b)},g.onerror=()=>{var w;p(!1),(w=v.current)===null||w===void 0||w.call(v)},document.body.appendChild(g),()=>{document.body.removeChild(g)}},[o]),h}const Qh=y.createContext(null);function bb({clientId:s,nonce:o,locale:u,onScriptLoadSuccess:d,onScriptLoadError:m,children:h}){const p=vb({nonce:o,onScriptLoadSuccess:d,onScriptLoadError:m,locale:u}),b=y.useMemo(()=>({locale:u,clientId:s,scriptLoadedSuccessfully:p}),[s,p]);return oh.createElement(Qh.Provider,{value:b},h)}function xb(){const s=y.useContext(Qh);if(!s)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return s}function jb(s){var o;return(o=s?.clientId)!==null&&o!==void 0?o:s?.client_id}const Sb={large:40,medium:32,small:20};function Vh({onSuccess:s,onError:o,useOneTap:u,promptMomentNotification:d,type:m="standard",theme:h="outline",size:p="large",text:b,shape:v,logo_alignment:g,width:w,click_listener:N,state:q,containerProps:H,...O}){const D=y.useRef(null),{clientId:M,locale:G,scriptLoadedSuccessfully:X}=xb(),Z=y.useRef(s);Z.current=s;const re=y.useRef(o);re.current=o;const $=y.useRef(d);return $.current=d,y.useEffect(()=>{var se,K,me,Ee,Ue,Ge,Me,Le,F;if(X)return(me=(K=(se=window?.google)===null||se===void 0?void 0:se.accounts)===null||K===void 0?void 0:K.id)===null||me===void 0||me.initialize({client_id:M,callback:P=>{var _;if(!P?.credential)return(_=re.current)===null||_===void 0?void 0:_.call(re);const{credential:Q,select_by:ee}=P;Z.current({credential:Q,clientId:jb(P),select_by:ee})},...O}),(Ge=(Ue=(Ee=window?.google)===null||Ee===void 0?void 0:Ee.accounts)===null||Ue===void 0?void 0:Ue.id)===null||Ge===void 0||Ge.renderButton(D.current,{type:m,theme:h,size:p,text:b,shape:v,logo_alignment:g,width:w,locale:G,click_listener:N,state:q}),u&&((F=(Le=(Me=window?.google)===null||Me===void 0?void 0:Me.accounts)===null||Le===void 0?void 0:Le.id)===null||F===void 0||F.prompt($.current)),()=>{var P,_,Q;u&&((Q=(_=(P=window?.google)===null||P===void 0?void 0:P.accounts)===null||_===void 0?void 0:_.id)===null||Q===void 0||Q.cancel())}},[M,X,u,m,h,p,b,v,g,w,G]),oh.createElement("div",{...H,ref:D,style:{height:Sb[p],...H?.style}})}const Nb=()=>{const[s,o]=y.useState(""),[u,d]=y.useState(""),[m,h]=y.useState(!1),[p,b]=y.useState(""),[v,g]=y.useState(!1),{login:w,googleLogin:N}=Vt(),q=ja(),H=async D=>{D.preventDefault(),b(""),g(!0);try{await w(s,u),q("/")}catch(M){b(M.message||"Failed to login. Please try again.")}finally{g(!1)}},O=async D=>{try{g(!0),b(""),await N(D.credential),q("/")}catch(M){b(M.message||"Google login failed")}finally{g(!1)}};return l.jsxs("div",{className:"auth-page",children:[l.jsxs("div",{className:"auth-container",children:[l.jsx("div",{className:"auth-branding",children:l.jsxs("div",{className:"branding-content",children:[l.jsx("div",{className:"brand-logo",children:l.jsx("span",{children:"S"})}),l.jsxs("h1",{children:["Welcome Back to ",l.jsx("span",{className:"gradient-text",children:"StudentNet"})]}),l.jsx("p",{children:"Connect with like-minded students, collaborate on projects, and grow together."}),l.jsxs("div",{className:"features-list",children:[l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"feature-icon",children:"🎯"}),l.jsxs("div",{children:[l.jsx("h4",{children:"Interest-Based Matching"}),l.jsx("p",{children:"Find students with similar passions"})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"feature-icon",children:"🤝"}),l.jsxs("div",{children:[l.jsx("h4",{children:"Smart Connections"}),l.jsx("p",{children:"Build meaningful relationships"})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx("div",{className:"feature-icon",children:"💬"}),l.jsxs("div",{children:[l.jsx("h4",{children:"Easy Communication"}),l.jsx("p",{children:"Chat and collaborate seamlessly"})]})]})]})]})}),l.jsx("div",{className:"auth-form-container",children:l.jsxs("div",{className:"auth-form-wrapper",children:[l.jsxs("div",{className:"form-header",children:[l.jsx("h2",{children:"Sign In"}),l.jsx("p",{children:"Enter your credentials to access your account"})]}),p&&l.jsx("div",{className:"error-alert animate-slideDown",children:l.jsx("span",{children:p})}),l.jsx("div",{className:"oauth-section",style:{marginBottom:"1.5rem",display:"flex",flexDirection:"column",alignItems:"center"},children:l.jsx(Vh,{onSuccess:O,onError:()=>{b("Google Login Failed")},useOneTap:!0,theme:"filled_blue",shape:"pill"})}),l.jsx("div",{className:"divider",style:{textAlign:"center",margin:"1rem 0 1.5rem",color:"var(--text-muted)",fontSize:"0.875rem"},children:"- OR -"}),l.jsxs("form",{onSubmit:H,className:"auth-form",children:[l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(ri,{size:18,className:"input-icon"}),l.jsx("input",{type:"email",id:"email",className:"input",placeholder:"you@university.edu",value:s,onChange:D=>o(D.target.value),required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"password",children:"Password"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Dr,{size:18,className:"input-icon"}),l.jsx("input",{type:m?"text":"password",id:"password",className:"input",placeholder:"Enter your password",value:u,onChange:D=>d(D.target.value),required:!0}),l.jsx("button",{type:"button",className:"password-toggle",onClick:()=>h(!m),children:m?l.jsx(Uh,{size:18}):l.jsx(Lr,{size:18})})]})]}),l.jsxs("div",{className:"form-options",children:[l.jsxs("label",{className:"checkbox-label",children:[l.jsx("input",{type:"checkbox"}),l.jsx("span",{children:"Remember me"})]}),l.jsx(oe,{to:"/forgot-password",className:"forgot-link",children:"Forgot password?"})]}),l.jsx("button",{type:"submit",className:"btn btn-primary btn-full",disabled:v,children:v?l.jsx(Ft,{size:20,className:"animate-spin"}):l.jsxs(l.Fragment,{children:["Sign In",l.jsx(ii,{size:18})]})})]}),l.jsx("div",{className:"auth-footer",children:l.jsxs("p",{children:["Don't have an account?"," ",l.jsx(oe,{to:"/signup",className:"auth-link",children:"Create one"})]})})]})})]}),l.jsx("style",{children:`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: var(--bg-secondary);
        }

        .auth-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1100px;
          width: 100%;
          min-height: 600px;
          background: var(--bg-primary);
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px var(--shadow-color);
        }

        .auth-branding {
          background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
          padding: 3rem;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .auth-branding::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%);
          animation: pulse 15s ease-in-out infinite;
        }

        .branding-content {
          position: relative;
          z-index: 1;
          color: white;
        }

        .branding-content .brand-logo {
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.2);
          border-radius: 1rem;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .branding-content h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
        }

        .branding-content h1 .gradient-text {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .branding-content > p {
          font-size: 1rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .feature-icon {
          font-size: 1.5rem;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.1);
          border-radius: 0.5rem;
        }

        .feature-item h4 {
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
          color: white;
        }

        .feature-item p {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .auth-form-container {
          padding: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .auth-form-wrapper {
          width: 100%;
          max-width: 400px;
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-header h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: var(--text-muted);
        }

        .error-alert {
          padding: 1rem;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 0.5rem;
          color: #dc2626;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }

        .dark .error-alert {
          background: rgba(220, 38, 38, 0.1);
          border-color: rgba(220, 38, 38, 0.3);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
        }

        .input-wrapper .input {
          padding-left: 3rem;
          width: 100%;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0;
        }

        .password-toggle:hover {
          color: var(--text-primary);
        }

        .form-options {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .checkbox-label input {
          width: 1rem;
          height: 1rem;
          accent-color: var(--primary-500);
        }

        .forgot-link {
          font-size: 0.875rem;
          color: var(--primary-500);
        }

        .forgot-link:hover {
          color: var(--primary-600);
        }

        .btn-full {
          width: 100%;
          padding: 1rem;
        }

        .auth-footer {
          margin-top: 2rem;
          text-align: center;
          color: var(--text-muted);
        }

        .auth-link {
          color: var(--primary-500);
          font-weight: 600;
        }

        .auth-link:hover {
          color: var(--primary-600);
        }

        @media (max-width: 768px) {
          .auth-container {
            grid-template-columns: 1fr;
          }

          .auth-branding {
            display: none;
          }

          .auth-form-container {
            padding: 2rem;
          }
        }
      `})]})},wb=["Artificial Intelligence","Machine Learning","Web Development","Mobile Apps","Data Science","Cybersecurity","Cloud Computing","Blockchain","Game Development","UI/UX Design","DevOps","IoT","Robotics","AR/VR","Open Source","Competitive Programming","Startups","Research","Networking","Public Speaking"],zb=["JavaScript","Python","Java","C++","React","Node.js","TypeScript","Go","Rust","Swift","Kotlin","SQL","MongoDB","Docker","Kubernetes","AWS","Git","Linux","TensorFlow","PyTorch","Figma","Adobe XD"],kb=()=>{const[s,o]=y.useState(1),[u,d]=y.useState({name:"",email:"",password:"",confirmPassword:"",college:"",course:"",year:"",bio:"",location:"",interests:[],skills:[]}),[m,h]=y.useState(!1),[p,b]=y.useState(""),[v,g]=y.useState(!1),{register:w,googleLogin:N}=Vt(),q=ja(),H=$=>{const{name:se,value:K}=$.target;d(me=>({...me,[se]:K}))},O=($,se)=>{d(K=>({...K,[$]:K[$].includes(se)?K[$].filter(me=>me!==se):[...K[$],se]}))},D=()=>{if(b(""),s===1){if(!u.name||!u.email||!u.password||!u.confirmPassword)return b("Please fill in all fields"),!1;if(u.password.length<6)return b("Password must be at least 6 characters"),!1;if(u.password!==u.confirmPassword)return b("Passwords do not match"),!1}return s===2&&(!u.college||!u.course||!u.year)?(b("Please fill in all fields"),!1):s===3&&u.interests.length<3?(b("Please select at least 3 interests"),!1):s===4&&u.skills.length<2?(b("Please select at least 2 skills"),!1):!0},M=()=>{D()&&o($=>$+1)},G=()=>{o($=>$-1),b("")},X=async $=>{if($.preventDefault(),!!D()){g(!0),b("");try{(await w({name:u.name,email:u.email,password:u.password,college:u.college,course:u.course,year:parseInt(u.year),bio:u.bio,location:u.location,interests:u.interests,skills:u.skills}))?.requiresVerification?o(5):q("/")}catch(se){b(se.message||"Registration failed. Please try again.")}finally{g(!1)}}},Z=async $=>{try{g(!0),b(""),await N($.credential),q("/")}catch(se){b(se.message||"Google signup failed")}finally{g(!1)}},re=()=>{switch(s){case 1:return l.jsxs("div",{className:"step-content animate-fadeIn",children:[l.jsx("h3",{children:"Create Your Account"}),l.jsx("p",{children:"Let's start with your basic information"}),l.jsx("div",{className:"oauth-section",style:{marginBottom:"1.5rem",display:"flex",flexDirection:"column",alignItems:"center"},children:l.jsx(Vh,{onSuccess:Z,onError:()=>{b("Google Signup Failed")},useOneTap:!0,theme:"filled_blue",shape:"pill",text:"signup_with"})}),l.jsx("div",{className:"divider",style:{textAlign:"center",margin:"1rem 0 1.5rem",color:"var(--text-muted)",fontSize:"0.875rem"},children:"- OR -"}),l.jsxs("div",{className:"form-fields",children:[l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"name",children:"Full Name"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(ni,{size:18,className:"input-icon"}),l.jsx("input",{type:"text",id:"name",name:"name",className:"input",placeholder:"John Doe",value:u.name,onChange:H})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"email",children:"Email Address"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(ri,{size:18,className:"input-icon"}),l.jsx("input",{type:"email",id:"email",name:"email",className:"input",placeholder:"you@university.edu",value:u.email,onChange:H})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"password",children:"Password"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Dr,{size:18,className:"input-icon"}),l.jsx("input",{type:m?"text":"password",id:"password",name:"password",className:"input",placeholder:"Create a password",value:u.password,onChange:H}),l.jsx("button",{type:"button",className:"password-toggle",onClick:()=>h(!m),children:m?l.jsx(Uh,{size:18}):l.jsx(Lr,{size:18})})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Dr,{size:18,className:"input-icon"}),l.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",className:"input",placeholder:"Confirm your password",value:u.confirmPassword,onChange:H})]})]})]})]});case 2:return l.jsxs("div",{className:"step-content animate-fadeIn",children:[l.jsx("h3",{children:"Academic Information"}),l.jsx("p",{children:"Tell us about your educational background"}),l.jsxs("div",{className:"form-fields",children:[l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"location",children:"Location"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Oc,{size:18,className:"input-icon"}),l.jsx("input",{type:"text",id:"location",name:"location",className:"input",placeholder:"e.g., Delhi, India",value:u.location,onChange:H})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"college",children:"College/University"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Mh,{size:18,className:"input-icon"}),l.jsx("input",{type:"text",id:"college",name:"college",className:"input",placeholder:"Enter your college name",value:u.college,onChange:H})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"course",children:"Course/Program"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Rc,{size:18,className:"input-icon"}),l.jsx("input",{type:"text",id:"course",name:"course",className:"input",placeholder:"e.g., B.Tech Computer Science",value:u.course,onChange:H})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"year",children:"Current Year"}),l.jsxs("select",{id:"year",name:"year",className:"input",value:u.year,onChange:H,children:[l.jsx("option",{value:"",children:"Select your year"}),l.jsx("option",{value:"1",children:"1st Year"}),l.jsx("option",{value:"2",children:"2nd Year"}),l.jsx("option",{value:"3",children:"3rd Year"}),l.jsx("option",{value:"4",children:"4th Year"}),l.jsx("option",{value:"5",children:"5th Year (Integrated)"}),l.jsx("option",{value:"6",children:"Postgraduate"})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{htmlFor:"bio",children:"Bio (Optional)"}),l.jsx("textarea",{id:"bio",name:"bio",className:"input textarea",placeholder:"Tell us a bit about yourself...",value:u.bio,onChange:H,rows:3})]})]})]});case 3:return l.jsxs("div",{className:"step-content animate-fadeIn",children:[l.jsx("h3",{children:"Select Your Interests"}),l.jsx("p",{children:"Choose at least 3 interests to help us find like-minded students"}),l.jsxs("div",{className:"selection-count",children:[u.interests.length," selected"]}),l.jsx("div",{className:"tag-grid",children:wb.map($=>l.jsxs("button",{type:"button",className:`tag-button ${u.interests.includes($)?"selected":""}`,onClick:()=>O("interests",$),children:[u.interests.includes($)&&l.jsx(Or,{size:14}),$]},$))})]});case 4:return l.jsxs("div",{className:"step-content animate-fadeIn",children:[l.jsx("h3",{children:"Select Your Skills"}),l.jsx("p",{children:"Choose at least 2 skills you're proficient in"}),l.jsxs("div",{className:"selection-count",children:[u.skills.length," selected"]}),l.jsx("div",{className:"tag-grid",children:zb.map($=>l.jsxs("button",{type:"button",className:`tag-button ${u.skills.includes($)?"selected":""}`,onClick:()=>O("skills",$),children:[u.skills.includes($)&&l.jsx(Or,{size:14}),$]},$))})]});case 5:return l.jsxs("div",{className:"step-content animate-fadeIn text-center",children:[l.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"1rem",color:"var(--primary-500)"},children:l.jsx(ri,{size:48})}),l.jsx("h3",{children:"Check Your Email"}),l.jsxs("p",{children:["We've sent a verification link to ",l.jsx("strong",{children:u.email}),"."]}),l.jsx("p",{style:{marginTop:"1rem",fontSize:"0.9rem",color:"var(--text-muted)"},children:"Please click the link in the email to verify your account and complete your registration."})]});default:return null}};return l.jsxs("div",{className:"auth-page",children:[l.jsxs("div",{className:"signup-container",children:[l.jsxs("div",{className:"progress-bar",children:[[1,2,3,4].map($=>l.jsxs("div",{className:`progress-step ${s>=$?"active":""}`,children:[l.jsx("div",{className:"step-number",children:$}),l.jsxs("span",{className:"step-label",children:[$===1&&"Account",$===2&&"Academic",$===3&&"Interests",$===4&&"Skills"]})]},$)),l.jsx("div",{className:"progress-line",children:l.jsx("div",{className:"progress-fill",style:{width:`${(s-1)/3*100}%`}})})]}),l.jsxs("div",{className:"signup-card",children:[l.jsxs(oe,{to:"/",className:"back-home",children:[l.jsx(It,{size:18}),"Back to Home"]}),p&&l.jsx("div",{className:"error-alert animate-slideDown",children:l.jsx("span",{children:p})}),l.jsxs("form",{onSubmit:X,children:[re(),l.jsxs("div",{className:"form-actions",children:[s>1&&s<5&&l.jsxs("button",{type:"button",className:"btn btn-ghost",onClick:G,children:[l.jsx(It,{size:18}),"Back"]}),s<4?l.jsxs("button",{type:"button",className:"btn btn-primary",onClick:M,children:["Next",l.jsx(ii,{size:18})]}):s===4?l.jsx("button",{type:"submit",className:"btn btn-primary",disabled:v,children:v?l.jsx(Ft,{size:20,className:"animate-spin"}):l.jsxs(l.Fragment,{children:["Create Account",l.jsx(ii,{size:18})]})}):l.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>q("/login"),style:{width:"100%"},children:"Continue to Login"})]})]}),l.jsx("div",{className:"auth-footer",children:l.jsxs("p",{children:["Already have an account?"," ",l.jsx(oe,{to:"/login",className:"auth-link",children:"Sign in"})]})})]})]}),l.jsx("style",{children:`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: var(--bg-secondary);
        }

        .signup-container {
          width: 100%;
          max-width: 600px;
        }

        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
          position: relative;
          padding: 0 1rem;
        }

        .progress-line {
          position: absolute;
          top: 1rem;
          left: 2.5rem;
          right: 2.5rem;
          height: 3px;
          background: var(--border-color);
          z-index: 0;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          transition: width var(--transition-normal);
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 1;
        }

        .step-number {
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          border: 2px solid var(--border-color);
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all var(--transition-normal);
        }

        .progress-step.active .step-number {
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-color: transparent;
          color: white;
        }

        .step-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .progress-step.active .step-label {
          color: var(--text-primary);
          font-weight: 600;
        }

        .signup-card {
          background: var(--bg-primary);
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px var(--shadow-color);
        }

        .back-home {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          transition: color var(--transition-fast);
        }

        .back-home:hover {
          color: var(--text-primary);
        }

        .error-alert {
          padding: 1rem;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 0.5rem;
          color: #dc2626;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }

        .dark .error-alert {
          background: rgba(220, 38, 38, 0.1);
          border-color: rgba(220, 38, 38, 0.3);
        }

        .step-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .step-content > p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
        }

        .input-wrapper .input {
          padding-left: 3rem;
          width: 100%;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0;
        }

        .password-toggle:hover {
          color: var(--text-primary);
        }

        .textarea {
          resize: vertical;
          min-height: 80px;
        }

        .selection-count {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: var(--bg-tertiary);
          border-radius: 9999px;
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .tag-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          max-height: 300px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .tag-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--bg-tertiary);
          border: 2px solid var(--border-color);
          border-radius: 9999px;
          font-size: 0.875rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tag-button:hover {
          border-color: var(--primary-500);
          color: var(--primary-500);
        }

        .tag-button.selected {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          border-color: transparent;
          color: white;
        }

        .form-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          gap: 1rem;
        }

        .form-actions .btn {
          flex: 1;
        }

        .auth-footer {
          margin-top: 1.5rem;
          text-align: center;
          color: var(--text-muted);
        }

        .auth-link {
          color: var(--primary-500);
          font-weight: 600;
        }

        .auth-link:hover {
          color: var(--primary-600);
        }

        @media (max-width: 640px) {
          .step-label {
            display: none;
          }

          .signup-card {
            padding: 1.5rem;
          }
        }
      `})]})},Cb=()=>{const[s]=o1(),o=s.get("token"),[u,d]=y.useState("verifying"),[m,h]=y.useState(""),p=ja(),{login:b}=Vt();return y.useEffect(()=>{(async()=>{if(!o){d("error"),h("No verification token provided.");return}try{const g=await fetch("/api/auth/verify-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:o})}),w=await g.json();g.ok?(d("success"),h(w.message),w.token?(localStorage.setItem("token",w.token),setTimeout(()=>{window.location.href="/"},2e3)):setTimeout(()=>p("/login"),2e3)):(d("error"),h(w.message||"Verification failed. Token may be invalid or expired."))}catch{d("error"),h("Network error occurred during verification.")}})()},[o,p]),l.jsxs("div",{className:"verify-page",children:[l.jsxs("div",{className:"verify-card card",children:[u==="verifying"&&l.jsxs("div",{className:"state verifying",children:[l.jsx(Ft,{size:48,className:"animate-spin text-primary"}),l.jsx("h2",{children:"Verifying Your Email"}),l.jsx("p",{children:"Please wait while we verify your email address..."})]}),u==="success"&&l.jsxs("div",{className:"state success",children:[l.jsx(Oh,{size:48,className:"text-success"}),l.jsx("h2",{children:"Email Verified!"}),l.jsx("p",{children:m}),l.jsx("p",{className:"redirect-text",children:"Redirecting you shortly..."})]}),u==="error"&&l.jsxs("div",{className:"state error",children:[l.jsx(V1,{size:48,className:"text-danger"}),l.jsx("h2",{children:"Verification Failed"}),l.jsx("p",{children:m}),l.jsx("button",{className:"btn btn-primary",onClick:()=>p("/login"),children:"Go to Login"})]})]}),l.jsx("style",{children:`
                .verify-page {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    background: var(--bg-secondary);
                }

                .verify-card {
                    max-width: 400px;
                    width: 100%;
                    padding: 3rem 2rem;
                    text-align: center;
                }

                .state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    animation: fadeIn 0.3s ease;
                }

                .state h2 {
                    font-size: 1.5rem;
                    color: var(--text-primary);
                }

                .state p {
                    color: var(--text-secondary);
                }

                .text-primary { color: var(--primary-500); }
                .text-success { color: #10b981; }
                .text-danger { color: #ef4444; }

                .redirect-text {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                    font-style: italic;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `})]})};let Eb={data:""},_b=s=>{if(typeof window=="object"){let o=(s?s.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return o.nonce=window.__nonce__,o.parentNode||(s||document.head).appendChild(o),o.firstChild}return s||Eb},Tb=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ab=/\/\*[^]*?\*\/|  +/g,lh=/\n+/g,Ka=(s,o)=>{let u="",d="",m="";for(let h in s){let p=s[h];h[0]=="@"?h[1]=="i"?u=h+" "+p+";":d+=h[1]=="f"?Ka(p,h):h+"{"+Ka(p,h[1]=="k"?"":o)+"}":typeof p=="object"?d+=Ka(p,o?o.replace(/([^,])+/g,b=>h.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,v=>/&/.test(v)?v.replace(/&/g,b):b?b+" "+v:v)):h):p!=null&&(h=/^--/.test(h)?h:h.replace(/[A-Z]/g,"-$&").toLowerCase(),m+=Ka.p?Ka.p(h,p):h+":"+p+";")}return u+(o&&m?o+"{"+m+"}":m)+d},ya={},Zh=s=>{if(typeof s=="object"){let o="";for(let u in s)o+=u+Zh(s[u]);return o}return s},Mb=(s,o,u,d,m)=>{let h=Zh(s),p=ya[h]||(ya[h]=(v=>{let g=0,w=11;for(;g<v.length;)w=101*w+v.charCodeAt(g++)>>>0;return"go"+w})(h));if(!ya[p]){let v=h!==s?s:(g=>{let w,N,q=[{}];for(;w=Tb.exec(g.replace(Ab,""));)w[4]?q.shift():w[3]?(N=w[3].replace(lh," ").trim(),q.unshift(q[0][N]=q[0][N]||{})):q[0][w[1]]=w[2].replace(lh," ").trim();return q[0]})(s);ya[p]=Ka(m?{["@keyframes "+p]:v}:v,u?"":"."+p)}let b=u&&ya.g?ya.g:null;return u&&(ya.g=ya[p]),((v,g,w,N)=>{N?g.data=g.data.replace(N,v):g.data.indexOf(v)===-1&&(g.data=w?v+g.data:g.data+v)})(ya[p],o,d,b),p},Rb=(s,o,u)=>s.reduce((d,m,h)=>{let p=o[h];if(p&&p.call){let b=p(u),v=b&&b.props&&b.props.className||/^go/.test(b)&&b;p=v?"."+v:b&&typeof b=="object"?b.props?"":Ka(b,""):b===!1?"":b}return d+m+(p??"")},"");function Yr(s){let o=this||{},u=s.call?s(o.p):s;return Mb(u.unshift?u.raw?Rb(u,[].slice.call(arguments,1),o.p):u.reduce((d,m)=>Object.assign(d,m&&m.call?m(o.p):m),{}):u,_b(o.target),o.g,o.o,o.k)}let Kh,Sc,Nc;Yr.bind({g:1});let xa=Yr.bind({k:1});function Ob(s,o,u,d){Ka.p=o,Kh=s,Sc=u,Nc=d}function $a(s,o){let u=this||{};return function(){let d=arguments;function m(h,p){let b=Object.assign({},h),v=b.className||m.className;u.p=Object.assign({theme:Sc&&Sc()},b),u.o=/ *go\d+/.test(v),b.className=Yr.apply(u,d)+(v?" "+v:"");let g=s;return s[0]&&(g=b.as||s,delete b.as),Nc&&g[0]&&Nc(b),Kh(g,b)}return m}}var Db=s=>typeof s=="function",Ur=(s,o)=>Db(s)?s(o):s,Ub=(()=>{let s=0;return()=>(++s).toString()})(),Jh=(()=>{let s;return()=>{if(s===void 0&&typeof window<"u"){let o=matchMedia("(prefers-reduced-motion: reduce)");s=!o||o.matches}return s}})(),qb=20,Uc="default",$h=(s,o)=>{let{toastLimit:u}=s.settings;switch(o.type){case 0:return{...s,toasts:[o.toast,...s.toasts].slice(0,u)};case 1:return{...s,toasts:s.toasts.map(p=>p.id===o.toast.id?{...p,...o.toast}:p)};case 2:let{toast:d}=o;return $h(s,{type:s.toasts.find(p=>p.id===d.id)?1:0,toast:d});case 3:let{toastId:m}=o;return{...s,toasts:s.toasts.map(p=>p.id===m||m===void 0?{...p,dismissed:!0,visible:!1}:p)};case 4:return o.toastId===void 0?{...s,toasts:[]}:{...s,toasts:s.toasts.filter(p=>p.id!==o.toastId)};case 5:return{...s,pausedAt:o.time};case 6:let h=o.time-(s.pausedAt||0);return{...s,pausedAt:void 0,toasts:s.toasts.map(p=>({...p,pauseDuration:p.pauseDuration+h}))}}},Mr=[],Fh={toasts:[],pausedAt:void 0,settings:{toastLimit:qb}},Wt={},Wh=(s,o=Uc)=>{Wt[o]=$h(Wt[o]||Fh,s),Mr.forEach(([u,d])=>{u===o&&d(Wt[o])})},Ih=s=>Object.keys(Wt).forEach(o=>Wh(s,o)),Hb=s=>Object.keys(Wt).find(o=>Wt[o].toasts.some(u=>u.id===s)),Gr=(s=Uc)=>o=>{Wh(o,s)},Lb={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Bb=(s={},o=Uc)=>{let[u,d]=y.useState(Wt[o]||Fh),m=y.useRef(Wt[o]);y.useEffect(()=>(m.current!==Wt[o]&&d(Wt[o]),Mr.push([o,d]),()=>{let p=Mr.findIndex(([b])=>b===o);p>-1&&Mr.splice(p,1)}),[o]);let h=u.toasts.map(p=>{var b,v,g;return{...s,...s[p.type],...p,removeDelay:p.removeDelay||((b=s[p.type])==null?void 0:b.removeDelay)||s?.removeDelay,duration:p.duration||((v=s[p.type])==null?void 0:v.duration)||s?.duration||Lb[p.type],style:{...s.style,...(g=s[p.type])==null?void 0:g.style,...p.style}}});return{...u,toasts:h}},Yb=(s,o="blank",u)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:o,ariaProps:{role:"status","aria-live":"polite"},message:s,pauseDuration:0,...u,id:u?.id||Ub()}),ci=s=>(o,u)=>{let d=Yb(o,s,u);return Gr(d.toasterId||Hb(d.id))({type:2,toast:d}),d.id},Fe=(s,o)=>ci("blank")(s,o);Fe.error=ci("error");Fe.success=ci("success");Fe.loading=ci("loading");Fe.custom=ci("custom");Fe.dismiss=(s,o)=>{let u={type:3,toastId:s};o?Gr(o)(u):Ih(u)};Fe.dismissAll=s=>Fe.dismiss(void 0,s);Fe.remove=(s,o)=>{let u={type:4,toastId:s};o?Gr(o)(u):Ih(u)};Fe.removeAll=s=>Fe.remove(void 0,s);Fe.promise=(s,o,u)=>{let d=Fe.loading(o.loading,{...u,...u?.loading});return typeof s=="function"&&(s=s()),s.then(m=>{let h=o.success?Ur(o.success,m):void 0;return h?Fe.success(h,{id:d,...u,...u?.success}):Fe.dismiss(d),m}).catch(m=>{let h=o.error?Ur(o.error,m):void 0;h?Fe.error(h,{id:d,...u,...u?.error}):Fe.dismiss(d)}),s};var Gb=1e3,Xb=(s,o="default")=>{let{toasts:u,pausedAt:d}=Bb(s,o),m=y.useRef(new Map).current,h=y.useCallback((N,q=Gb)=>{if(m.has(N))return;let H=setTimeout(()=>{m.delete(N),p({type:4,toastId:N})},q);m.set(N,H)},[]);y.useEffect(()=>{if(d)return;let N=Date.now(),q=u.map(H=>{if(H.duration===1/0)return;let O=(H.duration||0)+H.pauseDuration-(N-H.createdAt);if(O<0){H.visible&&Fe.dismiss(H.id);return}return setTimeout(()=>Fe.dismiss(H.id,o),O)});return()=>{q.forEach(H=>H&&clearTimeout(H))}},[u,d,o]);let p=y.useCallback(Gr(o),[o]),b=y.useCallback(()=>{p({type:5,time:Date.now()})},[p]),v=y.useCallback((N,q)=>{p({type:1,toast:{id:N,height:q}})},[p]),g=y.useCallback(()=>{d&&p({type:6,time:Date.now()})},[d,p]),w=y.useCallback((N,q)=>{let{reverseOrder:H=!1,gutter:O=8,defaultPosition:D}=q||{},M=u.filter(Z=>(Z.position||D)===(N.position||D)&&Z.height),G=M.findIndex(Z=>Z.id===N.id),X=M.filter((Z,re)=>re<G&&Z.visible).length;return M.filter(Z=>Z.visible).slice(...H?[X+1]:[0,X]).reduce((Z,re)=>Z+(re.height||0)+O,0)},[u]);return y.useEffect(()=>{u.forEach(N=>{if(N.dismissed)h(N.id,N.removeDelay);else{let q=m.get(N.id);q&&(clearTimeout(q),m.delete(N.id))}})},[u,h]),{toasts:u,handlers:{updateHeight:v,startPause:b,endPause:g,calculateOffset:w}}},Qb=xa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Vb=xa`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Zb=xa`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Kb=$a("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Qb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Vb} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${s=>s.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Zb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Jb=xa`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,$b=$a("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${s=>s.secondary||"#e0e0e0"};
  border-right-color: ${s=>s.primary||"#616161"};
  animation: ${Jb} 1s linear infinite;
`,Fb=xa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Wb=xa`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ib=$a("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Fb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Wb} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${s=>s.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Pb=$a("div")`
  position: absolute;
`,ex=$a("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,tx=xa`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ax=$a("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${tx} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,nx=({toast:s})=>{let{icon:o,type:u,iconTheme:d}=s;return o!==void 0?typeof o=="string"?y.createElement(ax,null,o):o:u==="blank"?null:y.createElement(ex,null,y.createElement($b,{...d}),u!=="loading"&&y.createElement(Pb,null,u==="error"?y.createElement(Kb,{...d}):y.createElement(Ib,{...d})))},lx=s=>`
0% {transform: translate3d(0,${s*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ix=s=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s*-150}%,-1px) scale(.6); opacity:0;}
`,rx="0%{opacity:0;} 100%{opacity:1;}",sx="0%{opacity:1;} 100%{opacity:0;}",ox=$a("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,cx=$a("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ux=(s,o)=>{let u=s.includes("top")?1:-1,[d,m]=Jh()?[rx,sx]:[lx(u),ix(u)];return{animation:o?`${xa(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${xa(m)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},dx=y.memo(({toast:s,position:o,style:u,children:d})=>{let m=s.height?ux(s.position||o||"top-center",s.visible):{opacity:0},h=y.createElement(nx,{toast:s}),p=y.createElement(cx,{...s.ariaProps},Ur(s.message,s));return y.createElement(ox,{className:s.className,style:{...m,...u,...s.style}},typeof d=="function"?d({icon:h,message:p}):y.createElement(y.Fragment,null,h,p))});Ob(y.createElement);var fx=({id:s,className:o,style:u,onHeightUpdate:d,children:m})=>{let h=y.useCallback(p=>{if(p){let b=()=>{let v=p.getBoundingClientRect().height;d(s,v)};b(),new MutationObserver(b).observe(p,{subtree:!0,childList:!0,characterData:!0})}},[s,d]);return y.createElement("div",{ref:h,className:o,style:u},m)},mx=(s,o)=>{let u=s.includes("top"),d=u?{top:0}:{bottom:0},m=s.includes("center")?{justifyContent:"center"}:s.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Jh()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${o*(u?1:-1)}px)`,...d,...m}},hx=Yr`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Er=16,px=({reverseOrder:s,position:o="top-center",toastOptions:u,gutter:d,children:m,toasterId:h,containerStyle:p,containerClassName:b})=>{let{toasts:v,handlers:g}=Xb(u,h);return y.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:Er,left:Er,right:Er,bottom:Er,pointerEvents:"none",...p},className:b,onMouseEnter:g.startPause,onMouseLeave:g.endPause},v.map(w=>{let N=w.position||o,q=g.calculateOffset(w,{reverseOrder:s,gutter:d,defaultPosition:o}),H=mx(N,q);return y.createElement(fx,{id:w.id,key:w.id,onHeightUpdate:g.updateHeight,className:w.visible?hx:"",style:H},w.type==="custom"?Ur(w.message,w):m?m(w):y.createElement(dx,{toast:w,position:N}))}))},pt=Fe;const gx=()=>{const{user:s}=Vt(),[o,u]=y.useState([]),[d,m]=y.useState(!0),[h,p]=y.useState(""),[b,v]=y.useState(!1),[g,w]=y.useState({interests:[],skills:[],year:"",college:"",location:""});y.useEffect(()=>{N()},[]);const N=async()=>{m(!0);try{const O=await ze.getRecommendations();u(O)}catch(O){console.error("Failed to fetch recommendations:",O),pt.error("Failed to load recommendations"),u([])}finally{m(!1)}},q=async O=>{try{await ze.sendConnectionRequest(O),u(D=>D.map(M=>M._id===O?{...M,connectionStatus:"pending"}:M)),pt.success("Connection request sent!")}catch(D){console.error("Failed to send connection request:",D),pt.error("Failed to connect. Please try again.")}},H=o.filter(O=>{if(h){const D=h.toLowerCase();if(!((O.name||"").toLowerCase().includes(D)||(O.college||"").toLowerCase().includes(D)||(O.interests||[]).some(G=>G.toLowerCase().includes(D))||(O.skills||[]).some(G=>G.toLowerCase().includes(D))||(O.careerGoals||[]).some(G=>G.toLowerCase().includes(D))))return!1}return!(g.year&&O.year!==parseInt(g.year)||g.college&&!(O.college||"").toLowerCase().includes(g.college.toLowerCase())||g.location&&!(O.location||"").toLowerCase().includes(g.location.toLowerCase()))});return l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"discover-page",children:[l.jsx("div",{className:"page-header",children:l.jsxs("div",{children:[l.jsx("h1",{children:"Discover Students"}),l.jsx("p",{children:"Find and connect with like-minded students"})]})}),l.jsxs("div",{className:"search-bar card",children:[l.jsxs("div",{className:"search-input-wrapper",children:[l.jsx(Ja,{size:20,className:"search-icon"}),l.jsx("input",{type:"text",className:"search-input",placeholder:"Search by name, college, interest, or skill...",value:h,onChange:O=>p(O.target.value)}),h&&l.jsx("button",{className:"clear-search",onClick:()=>p(""),children:l.jsx(ll,{size:18})})]}),l.jsxs("button",{className:`filter-btn btn ${b?"btn-primary":"btn-ghost"}`,onClick:()=>v(!b),children:[l.jsx(nv,{size:18}),"Filters",l.jsx(Rh,{size:16,className:b?"rotate":""})]})]}),b&&l.jsxs("div",{className:"filter-panel card animate-slideDown",children:[l.jsxs("div",{className:"filter-group",children:[l.jsx("label",{children:"Year"}),l.jsxs("select",{className:"input",value:g.year,onChange:O=>w(D=>({...D,year:O.target.value})),children:[l.jsx("option",{value:"",children:"All Years"}),l.jsx("option",{value:"1",children:"1st Year"}),l.jsx("option",{value:"2",children:"2nd Year"}),l.jsx("option",{value:"3",children:"3rd Year"}),l.jsx("option",{value:"4",children:"4th Year"})]})]}),l.jsxs("div",{className:"filter-group",children:[l.jsx("label",{children:"College"}),l.jsx("input",{type:"text",className:"input",placeholder:"Filter by college...",value:g.college,onChange:O=>w(D=>({...D,college:O.target.value}))})]}),l.jsxs("div",{className:"filter-group",children:[l.jsx("label",{children:"Location"}),l.jsx("input",{type:"text",className:"input",placeholder:"Filter by location...",value:g.location,onChange:O=>w(D=>({...D,location:O.target.value}))})]}),l.jsx("button",{className:"btn btn-ghost",onClick:()=>w({interests:[],skills:[],year:"",college:"",location:""}),children:"Clear Filters"})]}),l.jsx("div",{className:"results-info",children:l.jsxs("span",{children:[H.length," students found"]})}),d?l.jsxs("div",{className:"loading-state",children:[l.jsx(Ft,{size:40,className:"animate-spin"}),l.jsx("p",{children:"Finding your matches..."})]}):H.length===0?l.jsxs("div",{className:"empty-state card",children:[l.jsx(Ja,{size:48}),l.jsx("h3",{children:"No students found"}),l.jsx("p",{children:"Try adjusting your search or filters"})]}):l.jsx("div",{className:"students-grid",children:H.map((O,D)=>l.jsx(yx,{student:O,onConnect:q,style:{animationDelay:`${D*.05}s`}},O._id))})]}),l.jsx("style",{children:`
        .discover-page {
          padding: 1rem 0;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .page-header p {
          color: var(--text-muted);
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          margin-bottom: 1rem;
        }

        .search-input-wrapper {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          font-size: 1rem;
          border: 2px solid var(--border-color);
          border-radius: 0.75rem;
          background: var(--bg-secondary);
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary-500);
          background: var(--bg-primary);
        }

        .clear-search {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .filter-btn {
          white-space: nowrap;
        }

        .filter-btn .rotate {
          transform: rotate(180deg);
        }

        .filter-panel {
          display: flex;
          align-items: flex-end;
          gap: 1.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 180px;
        }

        .filter-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .results-info {
          margin-bottom: 1.5rem;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        .loading-state,
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
          color: var(--text-muted);
        }

        .empty-state h3 {
          margin: 1rem 0 0.5rem;
          color: var(--text-primary);
        }

        .students-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .students-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .students-grid {
            grid-template-columns: 1fr;
          }

          .search-bar {
            flex-direction: column;
          }

          .filter-btn {
            width: 100%;
          }
        }
      `})]})},yx=({student:s,onConnect:o,style:u})=>l.jsxs("div",{className:"student-card card animate-slideUp",style:u,children:[l.jsxs("div",{className:"match-badge",children:[l.jsxs("span",{children:[s.matchScore||0,"%"]}),l.jsx("span",{className:"match-label",children:"Match"})]}),l.jsxs("div",{className:"card-header",children:[l.jsx("div",{className:"avatar-wrapper",children:l.jsx("div",{className:"student-avatar",children:s.avatar?l.jsx("img",{src:s.avatar,alt:s.name}):l.jsx("span",{children:s.name.charAt(0)})})}),l.jsx("h3",{className:"student-name",children:s.name}),l.jsxs("div",{className:"student-info",children:[(s.location||s.college)&&l.jsxs("span",{className:"info-item",children:[l.jsx(Oc,{size:14}),s.location?`${s.location} ${s.college?`• ${s.college}`:""}`:s.college]}),(s.course||s.year)&&l.jsxs("span",{className:"info-item",children:[l.jsx(Rc,{size:14}),s.course?`${s.course} ${s.year?`• Year ${s.year}`:""}`:s.year?`Year ${s.year}`:""]})]})]}),s.bio&&l.jsx("p",{className:"student-bio",children:s.bio}),s.interests&&s.interests.length>0&&l.jsxs("div",{className:"card-section",children:[l.jsx("h4",{children:"Interests"}),l.jsxs("div",{className:"tags",children:[s.interests.slice(0,3).map((d,m)=>l.jsx("span",{className:"badge",children:d},m)),s.interests.length>3&&l.jsxs("span",{className:"badge badge-more",children:["+",s.interests.length-3]})]})]}),s.skills&&s.skills.length>0&&l.jsxs("div",{className:"card-section",children:[l.jsx("h4",{children:"Skills"}),l.jsxs("div",{className:"tags",children:[s.skills.slice(0,3).map((d,m)=>l.jsx("span",{className:"badge badge-secondary",children:d},m)),s.skills.length>3&&l.jsxs("span",{className:"badge badge-more",children:["+",s.skills.length-3]})]})]}),s.careerGoals&&s.careerGoals.length>0&&l.jsxs("div",{className:"card-section",children:[l.jsx("h4",{children:"Career Goals"}),l.jsxs("div",{className:"tags",children:[s.careerGoals.slice(0,3).map((d,m)=>l.jsx("span",{className:"badge badge-accent",style:{background:"var(--primary-100)",color:"var(--primary-700)",border:"1px solid var(--primary-200)"},children:d},m)),s.careerGoals.length>3&&l.jsxs("span",{className:"badge badge-more",children:["+",s.careerGoals.length-3]})]})]}),l.jsxs("div",{className:"card-actions",children:[l.jsx(oe,{to:`/profile/${s._id}`,className:"btn btn-ghost",children:"View Profile"}),l.jsxs("button",{className:`btn ${s.connectionStatus==="pending"?"btn-outline":"btn-primary"}`,onClick:()=>o(s._id),disabled:s.connectionStatus==="pending",children:[l.jsx(nl,{size:16}),s.connectionStatus==="pending"?"Pending":"Connect"]})]}),l.jsx("style",{children:`
        .student-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .match-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem;
          background: linear-gradient(135deg, var(--accent-500), var(--accent-600));
          border-radius: 0.5rem;
          color: white;
        }

        .match-badge span:first-child {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .match-label {
          font-size: 0.625rem;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .card-header {
          text-align: center;
          padding-right: 3rem;
        }

        .avatar-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 0.75rem;
        }

        .student-avatar {
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 9999px;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          overflow: hidden;
        }

        .student-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .student-name {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }

        .student-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .student-bio {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .card-section h4 {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .badge-more {
          background: var(--bg-tertiary);
          color: var(--text-muted);
        }

        .card-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
          padding-top: 0.5rem;
          border-top: 1px solid var(--border-color);
        }

        .card-actions .btn {
          flex: 1;
          font-size: 0.875rem;
          padding: 0.625rem;
        }
      `})]}),vx=["Artificial Intelligence","Machine Learning","Web Development","Mobile Apps","Data Science","Cybersecurity","Cloud Computing","Blockchain","Game Development","UI/UX Design","DevOps","IoT","Robotics","AR/VR","Open Source","Competitive Programming","Startups","Research","Networking","Public Speaking"],bx=["Software Engineer","Data Scientist","Product Manager","UX/UI Designer","Machine Learning Engineer","DevOps Engineer","Cloud Architect","Cybersecurity Analyst","Full Stack Developer","Frontend Developer","Backend Developer","Mobile App Developer","Game Developer","Research Scientist","Entrepreneur/Founder","Consultant"],xx=["JavaScript","Python","Java","C++","React","Node.js","TypeScript","Go","Rust","Swift","Kotlin","SQL","MongoDB","Docker","Kubernetes","AWS","Git","Linux","TensorFlow","PyTorch","Figma","Adobe XD"],ih=()=>{const{userId:s}=xh(),{user:o,updateProfile:u,isAuthenticated:d}=Vt(),m=ja(),[h,p]=y.useState(null),[b,v]=y.useState(!1),[g,w]=y.useState(!0),[N,q]=y.useState(!1),[H,O]=y.useState(""),[D,M]=y.useState(null),[G,X]=y.useState(null),[Z,re]=y.useState(!1),[$,se]=y.useState(!1),[K,me]=y.useState({name:"",bio:"",college:"",course:"",year:"",location:"",interests:[],skills:[],careerGoals:[]}),[Ee,Ue]=y.useState(!1),[Ge,Me]=y.useState([]),[Le,F]=y.useState(!1),P=!s||s===o?._id;y.useEffect(()=>{P?(p(o),o&&me({name:o.name||"",bio:o.bio||"",college:o.college||"",course:o.course||"",year:o.year?.toString()||"",location:o.location||"",interests:o.interests||[],skills:o.skills||[],careerGoals:o.careerGoals||[]}),_(),w(!1)):(ee(),ge(),Q())},[s,o,P]);const _=async()=>{try{const Y=await ze.getBlockedUsers();Me(Y)}catch(Y){console.error("Error fetching blocked users:",Y)}},Q=async()=>{try{const Y=await ze.getInteractionStatus(s);Ue(Y.isBlocked)}catch(Y){console.error("Failed to get interaction status:",Y)}},ee=async()=>{w(!0);try{const Y=await ze.getUserById(s);p(Y)}catch(Y){console.error("Failed to fetch profile:",Y),O("Profile not found")}finally{w(!1)}},ge=async()=>{try{const Y=await ze.getConnectionStatus(s);Y.status==="accepted"||Y.status==="pending"?(M(Y.status),X(Y.connectionId||null)):(M(null),X(null))}catch(Y){console.error("Failed to check connection status:",Y)}},xe=async()=>{if(G)try{await ze.removeConnection(G),M(null),X(null),se(!1),pt.success("Connection removed")}catch(Y){console.error("Failed to remove connection:",Y),se(!1),pt.error("Failed to remove connection")}},S=async()=>{re(!0);try{await ze.sendConnectionRequest(s),M("pending"),pt.success("Connection request sent!")}catch(Y){console.error("Connection request failed:",Y),Y.message?.includes("Already connected")?M("accepted"):Y.message?.includes("pending")?M("pending"):pt.error("Failed to connect. Please try again.")}finally{re(!1)}},L=async()=>{try{const Y=await ze.blockUser(s);Ue(Y.blocked)}catch(Y){console.error("Failed to block user:",Y)}},V=Y=>{const{name:je,value:We}=Y.target;me(Fa=>({...Fa,[je]:We}))},A=(Y,je)=>{me(We=>({...We,[Y]:We[Y].includes(je)?We[Y].filter(Fa=>Fa!==je):[...We[Y],je]}))},J=async()=>{if(!K.name?.trim()){pt.error("Name is required");return}if(!K.course?.trim()){pt.error("Course/Program is required");return}q(!0),O("");try{await u({...K,year:parseInt(K.year)||null}),v(!1),pt.success("Profile updated successfully!")}catch(Y){O(Y.message||"Failed to update profile"),pt.error(Y.message||"Failed to update profile")}finally{q(!1)}},ne=async Y=>{const je=Y.target.files[0];if(je){F(!0),O("");try{const We=await ze.uploadAvatar(je);p(We),P?(pt.success("Avatar updated successfully!"),setTimeout(()=>window.location.reload(),1e3)):pt.success("Avatar updated successfully!")}catch(We){O(We.message||"Failed to upload image"),pt.error(We.message||"Failed to upload image")}finally{F(!1)}}},de=()=>{me({name:o.name||"",bio:o.bio||"",college:o.college||"",course:o.course||"",year:o.year?.toString()||"",location:o.location||"",interests:o.interests||[],skills:o.skills||[],careerGoals:o.careerGoals||[]}),v(!1),O("")};if(g)return l.jsxs("div",{className:"loading-container",children:[l.jsx(Ft,{size:40,className:"animate-spin"}),l.jsx("p",{children:"Loading profile..."}),l.jsx("style",{children:`
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            color: var(--text-muted);
          }
        `})]});if(H&&!h)return l.jsxs("div",{className:"error-container container",children:[l.jsxs("div",{className:"error-card card",children:[l.jsx(ni,{size:48}),l.jsx("h2",{children:"Profile Not Found"}),l.jsx("p",{children:"The profile you're looking for doesn't exist."}),l.jsx("button",{className:"btn btn-primary",onClick:()=>m(-1),children:"Go Back"})]}),l.jsx("style",{children:`
          .error-container {
            padding: 4rem 0;
          }
          .error-card {
            max-width: 400px;
            margin: 0 auto;
            text-align: center;
            padding: 3rem;
          }
          .error-card h2 {
            margin: 1rem 0 0.5rem;
          }
          .error-card p {
            margin-bottom: 1.5rem;
          }
        `})]});const te=b?{...h,...K}:h;return l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"profile-page",children:[H&&l.jsxs("div",{className:"error-alert animate-slideDown",children:[l.jsx("span",{children:H}),l.jsx("button",{onClick:()=>O(""),children:l.jsx(ll,{size:16})})]}),l.jsxs("div",{className:"profile-header card",children:[l.jsx("div",{className:"header-background"}),l.jsxs("div",{className:"header-content",children:[l.jsx("div",{className:"avatar-section",children:l.jsxs("div",{className:"profile-avatar",children:[Le?l.jsx(Ft,{size:40,className:"animate-spin"}):te?.avatar?l.jsx("img",{src:te.avatar,alt:te.name}):l.jsx("span",{children:te?.name?.charAt(0)||"U"}),P&&b&&l.jsxs("label",{className:"avatar-edit-btn",children:[l.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:ne,disabled:Le}),l.jsx(O1,{size:16})]})]})}),l.jsxs("div",{className:"header-info",children:[b?l.jsx("input",{type:"text",name:"name",className:"input name-input",value:K.name,onChange:V,placeholder:"Your name"}):l.jsx("h1",{className:"profile-name",children:te?.name}),l.jsxs("div",{className:"profile-meta",children:[l.jsxs("span",{className:"meta-item",children:[l.jsx(ri,{size:16}),te?.email]}),te?.location&&l.jsxs("span",{className:"meta-item",children:[l.jsx(Oc,{size:16}),te?.location]}),te?.college&&l.jsxs("span",{className:"meta-item",children:[l.jsx(Mh,{size:16}),te?.college]}),te?.course&&l.jsxs("span",{className:"meta-item",children:[l.jsx(Rc,{size:16}),te?.course,te?.year&&` • Year ${te.year}`]}),te?.connections&&l.jsxs("span",{className:"meta-item",children:[l.jsx(yn,{size:16}),te.connections.length," Connection",te.connections.length!==1?"s":""]})]})]}),l.jsx("div",{className:"header-actions",children:P?b?l.jsxs(l.Fragment,{children:[l.jsxs("button",{className:"btn btn-ghost",onClick:de,children:[l.jsx(ll,{size:18}),"Cancel"]}),l.jsxs("button",{className:"btn btn-primary",onClick:J,disabled:N,children:[N?l.jsx(Ft,{size:18,className:"animate-spin"}):l.jsx(Mv,{size:18}),"Save Changes"]})]}):l.jsxs("button",{className:"btn action-btn-connect",onClick:()=>v(!0),children:[l.jsx(Tv,{size:18}),"Edit Profile"]}):l.jsxs(l.Fragment,{children:[D==="accepted"&&l.jsxs("button",{className:"btn action-btn-message",onClick:()=>m(`/messages/${s}`),children:[l.jsx(Xt,{size:18}),"Message"]}),D==="accepted"?l.jsxs("button",{className:"btn action-btn-connected",onClick:()=>se(!0),children:[l.jsx(Br,{size:18}),"Connected"]}):D==="pending"?l.jsxs("button",{className:"btn action-btn-pending",disabled:!0,children:[l.jsx(nl,{size:18}),"Pending"]}):l.jsxs("button",{className:"btn action-btn-connect",onClick:S,disabled:Z,children:[Z?l.jsx(Ft,{size:18,className:"animate-spin"}):l.jsx(nl,{size:18}),"Connect"]}),l.jsxs("button",{className:`btn ${Ee?"action-btn-danger-active":"action-btn-danger"}`,onClick:L,children:[l.jsx(Ah,{size:18}),Ee?"Unblock":"Block"]})]})})]})]}),l.jsxs("div",{className:"profile-section card about-card",children:[l.jsx("h2",{className:"section-title",children:"About"}),b?l.jsx("textarea",{name:"bio",className:"input textarea",value:K.bio,onChange:V,placeholder:"Tell us about yourself...",rows:4}):l.jsx("p",{className:"bio-text",children:te?.bio||"No bio yet."})]}),l.jsxs("div",{className:"profile-grid",children:[l.jsx("div",{className:"profile-column",children:b?l.jsxs("div",{className:"profile-section card",children:[l.jsx("h2",{className:"section-title",children:"Academic Info"}),l.jsxs("div",{className:"form-fields",children:[l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Location"}),l.jsx("input",{type:"text",name:"location",className:"input",value:K.location,onChange:V,placeholder:"e.g., Delhi, India"})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"College/University"}),l.jsx("input",{type:"text",name:"college",className:"input",value:K.college,onChange:V,placeholder:"Enter your college"})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Course/Program"}),l.jsx("input",{type:"text",name:"course",className:"input",value:K.course,onChange:V,placeholder:"e.g., B.Tech Computer Science"})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Year"}),l.jsxs("select",{name:"year",className:"input",value:K.year,onChange:V,children:[l.jsx("option",{value:"",children:"Select year"}),l.jsx("option",{value:"1",children:"1st Year"}),l.jsx("option",{value:"2",children:"2nd Year"}),l.jsx("option",{value:"3",children:"3rd Year"}),l.jsx("option",{value:"4",children:"4th Year"}),l.jsx("option",{value:"5",children:"5th Year"}),l.jsx("option",{value:"6",children:"Postgraduate"})]})]})]})]}):l.jsxs("div",{className:"profile-section card",children:[l.jsx("h2",{className:"section-title",children:"Academic Info"}),l.jsxs("div",{className:"academic-details",children:[te?.location?l.jsxs("div",{className:"academic-item",children:[l.jsx("span",{className:"academic-label",children:"Location"}),l.jsx("span",{className:"academic-value",children:te.location})]}):null,te?.college?l.jsxs("div",{className:"academic-item",children:[l.jsx("span",{className:"academic-label",children:"College/University"}),l.jsx("span",{className:"academic-value",children:te.college})]}):null,te?.course?l.jsxs("div",{className:"academic-item",children:[l.jsx("span",{className:"academic-label",children:"Course/Program"}),l.jsx("span",{className:"academic-value",children:te.course})]}):null,te?.year?l.jsxs("div",{className:"academic-item",children:[l.jsx("span",{className:"academic-label",children:"Year"}),l.jsx("span",{className:"academic-value",children:te.year})]}):null,!te?.location&&!te?.college&&!te?.course&&!te?.year&&l.jsx("p",{className:"no-data",children:"No academic information provided."})]})]})}),l.jsxs("div",{className:"profile-column",children:[l.jsxs("div",{className:"profile-section card",children:[l.jsx("h2",{className:"section-title",children:"Interests"}),b?l.jsx("div",{className:"tag-selector",children:vx.map(Y=>l.jsx("button",{type:"button",className:`tag-btn ${K.interests.includes(Y)?"selected":""}`,onClick:()=>A("interests",Y),children:Y},Y))}):l.jsx("div",{className:"tags-display",children:te?.interests?.length>0?te.interests.map((Y,je)=>l.jsx("span",{className:"badge",children:Y},je)):l.jsx("p",{className:"no-data",children:"No interests added yet"})})]}),l.jsxs("div",{className:"profile-section card",children:[l.jsx("h2",{className:"section-title",children:"Skills"}),b?l.jsx("div",{className:"tag-selector",children:xx.map(Y=>l.jsx("button",{type:"button",className:`tag-btn ${K.skills.includes(Y)?"selected":""}`,onClick:()=>A("skills",Y),children:Y},Y))}):l.jsx("div",{className:"tags-display",children:te?.skills?.length>0?te.skills.map((Y,je)=>l.jsx("span",{className:"badge badge-secondary",children:Y},je)):l.jsx("p",{className:"no-data",children:"No skills added yet"})})]}),l.jsxs("div",{className:"profile-section card",children:[l.jsx("h2",{className:"section-title",children:"Career Goals"}),b?l.jsx("div",{className:"tag-selector",children:bx.map(Y=>l.jsx("button",{type:"button",className:`tag-btn ${K.careerGoals.includes(Y)?"selected":""}`,onClick:()=>A("careerGoals",Y),children:Y},Y))}):l.jsx("div",{className:"tags-display",children:te?.careerGoals?.length>0?te.careerGoals.map((Y,je)=>l.jsx("span",{className:"badge badge-accent",style:{background:"var(--primary-100)",color:"var(--primary-700)",border:"1px solid var(--primary-200)"},children:Y},je)):l.jsx("p",{className:"no-data",children:"No career goals added yet"})})]})]})]}),P&&te?.connections?.length>0&&l.jsxs("div",{className:"profile-section card mt-4",style:{marginTop:"1.5rem"},children:[l.jsxs("h2",{className:"section-title",children:["Connections (",te.connections.length,")"]}),l.jsx("div",{className:"connections-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"1rem",marginTop:"1rem"},children:te.connections.map(Y=>l.jsxs("div",{className:"connection-card",onClick:()=>m(`/profile/${Y._id}`),style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",border:"1px solid var(--border-color)",borderRadius:"0.75rem",cursor:"pointer",transition:"all 0.2s ease",backgroundColor:"var(--bg-secondary)",textDecoration:"none"},onMouseOver:je=>{je.currentTarget.style.transform="translateY(-2px)",je.currentTarget.style.borderColor="var(--primary-400)",je.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.1)"},onMouseOut:je=>{je.currentTarget.style.transform="translateY(0)",je.currentTarget.style.borderColor="var(--border-color)",je.currentTarget.style.boxShadow="none"},children:[Y.avatar?l.jsx("img",{src:Y.avatar,style:{width:"3.5rem",height:"3.5rem",borderRadius:"50%",objectFit:"cover"},alt:Y.name}):l.jsx("div",{style:{width:"3.5rem",height:"3.5rem",background:"linear-gradient(135deg, var(--primary-500), var(--secondary-500))",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:"white",flexShrink:0},children:Y.name?.charAt(0)||"U"}),l.jsxs("div",{style:{overflow:"hidden",flex:1},children:[l.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontSize:"1rem"},children:Y.name}),l.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Y.college||Y.email})]})]},Y._id))})]}),P&&Ge.length>0&&l.jsxs("div",{className:"profile-section card mt-4",style:{marginTop:"1.5rem"},children:[l.jsx("h2",{className:"section-title",children:"Blocked Users"}),l.jsx("div",{className:"blocked-users-list",children:Ge.map(Y=>l.jsxs("div",{className:"blocked-user-item",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.75rem 0",borderBottom:"1px solid var(--border-color)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[Y.avatar?l.jsx("img",{src:Y.avatar,style:{width:"2.5rem",height:"2.5rem",borderRadius:"50%",objectFit:"cover"},alt:Y.name}):l.jsx("div",{style:{width:"2.5rem",height:"2.5rem",background:"linear-gradient(135deg, var(--primary-500), var(--secondary-500))",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:"white"},children:Y.name.charAt(0)}),l.jsxs("div",{children:[l.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)"},children:Y.name}),l.jsxs("div",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:[Y.location?`${Y.location} • `:"",Y.college]})]})]}),l.jsx("button",{className:"btn btn-outline",style:{padding:"0.25rem 0.75rem",fontSize:"0.875rem"},onClick:async()=>{try{await ze.blockUser(Y._id),Me(je=>je.filter(We=>We._id!==Y._id))}catch(je){console.error("Failed to unblock user:",je)}},children:"Unblock"})]},Y._id))})]})]}),$&&l.jsx("div",{className:"modal-overlay",onClick:()=>se(!1),children:l.jsxs("div",{className:"modal-content",onClick:Y=>Y.stopPropagation(),children:[l.jsx("div",{className:"modal-icon",children:"⚠️"}),l.jsx("h3",{children:"Remove Connection"}),l.jsxs("p",{children:["Do you want to unfriend ",l.jsx("strong",{children:h?.name}),"? You will no longer be connected."]}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{className:"btn btn-ghost",onClick:()=>se(!1),children:"No, Keep"}),l.jsx("button",{className:"btn btn-danger",onClick:xe,children:"Yes, Unfriend"})]})]})}),l.jsx("style",{children:`
        .profile-page {
          padding: 1rem 0;
          max-width: 900px;
          margin: 0 auto;
        }

        .error-alert {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 0.5rem;
          color: #dc2626;
          margin-bottom: 1.5rem;
        }

        .dark .error-alert {
          background: rgba(220, 38, 38, 0.1);
          border-color: rgba(220, 38, 38, 0.3);
        }

        .error-alert button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }

        /* Profile Header */
        .profile-header {
          position: relative;
          overflow: hidden;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        .header-background {
          height: 120px;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
        }

        .header-content {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 0 2rem 2rem;
          position: relative;
        }

        .avatar-section {
          flex-shrink: 0;
          margin-top: -3.5rem;
        }

        .profile-avatar {
          width: 8rem;
          height: 8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-600), var(--secondary-600));
          border-radius: 9999px;
          font-size: 3rem;
          font-weight: 700;
          color: white;
          border: 4px solid var(--bg-primary);
          box-shadow: 0 4px 20px var(--shadow-color);
          position: relative;
          overflow: hidden;
        }

        .profile-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar-edit-btn {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.5rem;
          background: rgba(0,0,0,0.6);
          border: none;
          color: white;
          cursor: pointer;
        }

        .header-info {
          flex: 1;
          min-width: 0; /* fixes flex children overflowing */
          padding-top: 0.5rem;
        }

        .profile-name {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .name-input {
          font-size: 1.5rem;
          font-weight: 700;
          padding: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .profile-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .header-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        /* Modern Action Buttons */
        .action-btn-connect {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          padding: 0.6rem 1.75rem;
          font-weight: 600;
        }

        .action-btn-connect:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.6);
          background: linear-gradient(135deg, #2563eb, #4f46e5);
        }

        .action-btn-connected {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
          border-radius: 9999px;
          transition: all 0.3s ease;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
        }

        .action-btn-connected:hover {
          background: linear-gradient(135deg, #dc2626, #991b1b);
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
          transform: scale(0.98);
        }

        .action-btn-message {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(10px);
          color: #f8fafc;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 9999px;
          transition: all 0.3s ease;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
        }

        .action-btn-message:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-2px);
        }

        .action-btn-pending {
          background: transparent;
          color: #94a3b8;
          border: 1px solid #64748b;
          border-radius: 9999px;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
          cursor: not-allowed;
          opacity: 0.7;
        }

        .action-btn-danger {
          background: rgba(239, 68, 68, 0.05);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 9999px;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .action-btn-danger:hover {
          background: #ef4444;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
        }

        .action-btn-danger-active {
          background: #ef4444;
          color: white;
          border: 1px solid #ef4444;
          border-radius: 9999px;
          padding: 0.6rem 1.5rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
          transition: all 0.3s ease;
        }

        /* Profile Grid */
        .about-card {
          margin-bottom: 1.5rem;
        }

        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .profile-section {
          margin-bottom: 1.5rem;
        }

        .profile-section:last-child {
          margin-bottom: 0;
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }

        .academic-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .academic-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .academic-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          font-weight: 600;
        }

        .academic-value {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .bio-text {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tags-display {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag-selector {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          max-height: 200px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .tag-btn {
          padding: 0.375rem 0.75rem;
          font-size: 0.8rem;
          background: var(--bg-tertiary);
          border: 2px solid var(--border-color);
          border-radius: 9999px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tag-btn:hover {
          border-color: var(--primary-500);
          color: var(--primary-500);
        }

        .tag-btn.selected {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          border-color: transparent;
          color: white;
        }

        .no-data {
          color: var(--text-muted);
          font-size: 0.875rem;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }

          .header-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .profile-meta {
            justify-content: center;
          }

          .header-actions {
            width: 100%;
            justify-content: center;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 2rem;
          max-width: 400px;
          width: 90%;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: modalSlideUp 0.3s ease;
        }

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .modal-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .modal-content p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }

        .btn-danger {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: white;
          border: none;
        }

        .btn-danger:hover {
          background: linear-gradient(135deg, #b91c1c, #991b1b);
        }
      `})]})},jx=()=>{const{user:s}=Vt(),[o,u]=y.useState("connections"),[d,m]=y.useState([]),[h,p]=y.useState([]),[b,v]=y.useState(!0),[g,w]=y.useState("");y.useEffect(()=>{N()},[]);const N=async()=>{v(!0);try{const M=await ze.getConnections();m(M.connections||[]),p(M.requests||[])}catch{console.log("Using mock data"),m(MOCK_CONNECTIONS),p(MOCK_REQUESTS)}finally{v(!1)}},q=async M=>{try{await ze.acceptConnection(M);const G=h.find(X=>X._id===M);G&&(p(X=>X.filter(Z=>Z._id!==M)),m(X=>[...X,{_id:M,user:G.requester,status:"accepted",createdAt:new Date().toISOString()}]))}catch(G){console.error("Failed to accept request:",G)}},H=async M=>{try{await ze.rejectConnection(M),p(G=>G.filter(X=>X._id!==M))}catch(G){console.error("Failed to reject request:",G)}},O=async M=>{try{await ze.removeConnection(M),m(G=>G.filter(X=>X._id!==M))}catch(G){console.error("Failed to remove connection:",G)}},D=d.filter(M=>M.user.name.toLowerCase().includes(g.toLowerCase())||M.user.college.toLowerCase().includes(g.toLowerCase()));return l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"connections-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsx("h1",{children:"Connections"}),l.jsx("p",{children:"Manage your network and connection requests"})]}),l.jsxs("div",{className:"tabs-container card",children:[l.jsxs("div",{className:"tabs",children:[l.jsxs("button",{className:`tab ${o==="connections"?"active":""}`,onClick:()=>u("connections"),children:[l.jsx(Br,{size:18}),"Connections",l.jsx("span",{className:"tab-count",children:d.length})]}),l.jsxs("button",{className:`tab ${o==="requests"?"active":""}`,onClick:()=>u("requests"),children:[l.jsx(nl,{size:18}),"Requests",h.length>0&&l.jsx("span",{className:"tab-count highlight",children:h.length})]})]}),o==="connections"&&l.jsxs("div",{className:"search-wrapper",children:[l.jsx(Ja,{size:18,className:"search-icon"}),l.jsx("input",{type:"text",className:"search-input",placeholder:"Search connections...",value:g,onChange:M=>w(M.target.value)})]})]}),b?l.jsxs("div",{className:"loading-state",children:[l.jsx(Ft,{size:40,className:"animate-spin"}),l.jsx("p",{children:"Loading..."})]}):o==="connections"?l.jsx(Sx,{connections:D,onRemove:O}):l.jsx(Nx,{requests:h,onAccept:q,onReject:H})]}),l.jsx("style",{children:`
        .connections-page {
          padding: 1rem 0;
          max-width: 800px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .page-header p {
          color: var(--text-muted);
        }

        .tabs-container {
          margin-bottom: 1.5rem;
        }

        .tabs {
          display: flex;
          gap: 0.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 1rem;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: none;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tab:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .tab.active {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          color: white;
        }

        .tab-count {
          padding: 0.15rem 0.5rem;
          font-size: 0.75rem;
          background: var(--bg-tertiary);
          border-radius: 9999px;
        }

        .tab.active .tab-count {
          background: rgba(255,255,255,0.2);
        }

        .tab-count.highlight {
          background: #ef4444;
          color: white;
        }

        .search-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          font-size: 0.9rem;
          border: 2px solid var(--border-color);
          border-radius: 0.5rem;
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary-500);
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
          color: var(--text-muted);
        }
      `})]})},Sx=({connections:s,onRemove:o})=>s.length===0?l.jsxs("div",{className:"empty-state card",children:[l.jsx(yn,{size:48}),l.jsx("h3",{children:"No Connections Yet"}),l.jsx("p",{children:"Start connecting with other students to grow your network"}),l.jsx(oe,{to:"/discover",className:"btn btn-primary",children:"Discover Students"}),l.jsx("style",{children:`
          .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 4rem 2rem;
            text-align: center;
            color: var(--text-muted);
          }
          .empty-state h3 {
            margin: 1rem 0 0.5rem;
            color: var(--text-primary);
          }
          .empty-state .btn {
            margin-top: 1.5rem;
          }
        `})]}):l.jsxs("div",{className:"connections-list",children:[s.map(u=>l.jsxs("div",{className:"connection-card card",children:[l.jsx("div",{className:"connection-avatar",children:u.user.avatar?l.jsx("img",{src:u.user.avatar,alt:u.user.name}):l.jsx("span",{children:u.user.name.charAt(0)})}),l.jsxs("div",{className:"connection-info",children:[l.jsx("h3",{children:u.user.name}),l.jsxs("p",{children:[u.user.college," • ",u.user.course]}),l.jsx("div",{className:"connection-interests",children:u.user.interests?.slice(0,2).map((d,m)=>l.jsx("span",{className:"badge",children:d},m))})]}),l.jsxs("div",{className:"connection-actions",children:[l.jsx(oe,{to:`/messages/${u.user._id}`,className:"btn btn-ghost",children:l.jsx(Xt,{size:18})}),l.jsx(oe,{to:`/profile/${u.user._id}`,className:"btn btn-ghost",children:"View"}),l.jsx("button",{className:"btn btn-ghost danger",onClick:()=>o(u._id),children:l.jsx(ob,{size:18})})]})]},u._id)),l.jsx("style",{children:`
        .connections-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .connection-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }

        .connection-avatar {
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 9999px;
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          flex-shrink: 0;
        }

        .connection-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 9999px;
        }

        .connection-info {
          flex: 1;
          min-width: 0;
        }

        .connection-info h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .connection-info > p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .connection-interests {
          display: flex;
          gap: 0.35rem;
        }

        .connection-actions {
          display: flex;
          gap: 0.5rem;
        }

        .connection-actions .btn {
          padding: 0.5rem 0.75rem;
        }

        .connection-actions .danger:hover {
          color: #ef4444;
        }

        @media (max-width: 640px) {
          .connection-card {
            flex-direction: column;
            text-align: center;
          }

          .connection-interests {
            justify-content: center;
          }
        }
      `})]}),Nx=({requests:s,onAccept:o,onReject:u})=>s.length===0?l.jsxs("div",{className:"empty-state card",children:[l.jsx(Dh,{size:48}),l.jsx("h3",{children:"No Pending Requests"}),l.jsx("p",{children:"You're all caught up! No new connection requests."}),l.jsx("style",{children:`
          .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 4rem 2rem;
            text-align: center;
            color: var(--text-muted);
          }
          .empty-state h3 {
            margin: 1rem 0 0.5rem;
            color: var(--text-primary);
          }
        `})]}):l.jsxs("div",{className:"requests-list",children:[s.map(d=>l.jsxs("div",{className:"request-card card",children:[l.jsx("div",{className:"request-avatar",children:d.requester.avatar?l.jsx("img",{src:d.requester.avatar,alt:d.requester.name}):l.jsx("span",{children:d.requester.name.charAt(0)})}),l.jsxs("div",{className:"request-info",children:[l.jsx("h3",{children:d.requester.name}),l.jsxs("p",{children:[d.requester.college," • ",d.requester.course]}),l.jsx("div",{className:"request-interests",children:d.requester.interests?.slice(0,2).map((m,h)=>l.jsx("span",{className:"badge",children:m},h))})]}),l.jsxs("div",{className:"request-actions",children:[l.jsxs("button",{className:"btn btn-primary",onClick:()=>o(d._id),children:[l.jsx(Or,{size:18}),"Accept"]}),l.jsxs("button",{className:"btn btn-ghost",onClick:()=>u(d._id),children:[l.jsx(ll,{size:18}),"Decline"]})]})]},d._id)),l.jsx("style",{children:`
        .requests-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .request-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }

        .request-avatar {
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          border-radius: 9999px;
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          flex-shrink: 0;
        }

        .request-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 9999px;
        }

        .request-info {
          flex: 1;
          min-width: 0;
        }

        .request-info h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .request-info > p {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .request-interests {
          display: flex;
          gap: 0.35rem;
        }

        .request-actions {
          display: flex;
          gap: 0.5rem;
        }

        @media (max-width: 640px) {
          .request-card {
            flex-direction: column;
            text-align: center;
          }

          .request-interests {
            justify-content: center;
          }

          .request-actions {
            width: 100%;
          }

          .request-actions .btn {
            flex: 1;
          }
        }
      `})]}),rh=()=>{const{userId:s}=xh(),{user:o}=Vt(),u=ja(),[d,m]=y.useState([]),[h,p]=y.useState(null),[b,v]=y.useState([]),[g,w]=y.useState(""),[N,q]=y.useState(!0),[H,O]=y.useState(!1),[D,M]=y.useState(""),[G,X]=y.useState(null),[Z,re]=y.useState(!1),[$,se]=y.useState(!1),[K,me]=y.useState(!1),[Ee,Ue]=y.useState(null),[Ge,Me]=y.useState(null),Le=y.useRef(null),F=y.useRef(null),P=A=>{X(A),setTimeout(()=>X(null),2500)};y.useEffect(()=>{const A=J=>{F.current&&!F.current.contains(J.target)&&re(!1)};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]),y.useEffect(()=>{_()},[]),y.useEffect(()=>{if(s&&!N){const A=d.find(J=>J.user?._id===s);A?(p(A),Q(s),ee(s),m(J=>J.map(ne=>ne._id===A._id?{...ne,unread:0}:ne))):(async()=>{try{const ne=await ze.getUserById(s),de={_id:s,user:{_id:s,name:ne.name,college:ne.college,online:!1},lastMessage:null,unread:0};p(de),v([]),ee(s)}catch(ne){console.error("Failed to load user for messaging:",ne)}})()}},[s,N]),y.useEffect(()=>{ge()},[b]);const _=async()=>{q(!0);try{const A=await ze.getConversations();m(A)}catch(A){console.error("Fetch conversations error:",A),P("Failed to load conversations."),m([])}finally{q(!1)}},Q=async A=>{try{const J=await ze.getMessages(A);v(J)}catch(J){console.error("Fetch messages error:",J),P("Failed to load messages."),v([])}},ee=async A=>{try{const J=await ze.getInteractionStatus(A);se(J.isMuted),me(J.isBlocked)}catch(J){console.error("Failed to fetch interaction status:",J)}},ge=()=>{Le.current&&Le.current.scrollTo({top:Le.current.scrollHeight,behavior:"smooth"})},xe=async A=>{if(A.preventDefault(),!g.trim()||!h)return;const J=g.trim();w(""),O(!0);const ne={_id:`temp-${Date.now()}`,sender:"me",content:J,createdAt:"Just now"};v(de=>[...de,ne]);try{await ze.sendMessage(h.user._id,J),m(de=>de.map(te=>te._id===h._id?{...te,lastMessage:{content:J,createdAt:"Just now",sender:"me"}}:te))}catch(de){console.error("Failed to send message:",de),P(de.message||"Failed to send message"),v(te=>te.filter(Y=>Y._id!==ne._id))}finally{O(!1)}},S=async A=>{Me(A);try{await ze.deleteMessage(A),v(J=>J.filter(ne=>ne._id!==A)),P("🗑️ Message deleted")}catch(J){P(J.message||"Cannot delete this message")}finally{Me(null)}},L=A=>{p(A),Q(A.user._id),ee(A.user._id),m(J=>J.map(ne=>ne._id===A._id?{...ne,unread:0}:ne))},V=d.filter(A=>A.user?.name?.toLowerCase().includes(D.toLowerCase()));return l.jsxs("div",{className:"messages-page",children:[l.jsxs("div",{className:`conversations-sidebar ${h?"hide-mobile":""}`,children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsx("button",{className:"page-back-btn",onClick:()=>u(-1),title:"Go back",children:l.jsx(It,{size:20})}),l.jsx("h2",{children:"Messages"})]}),l.jsxs("div",{className:"search-box",children:[l.jsx(Ja,{size:18,className:"search-icon"}),l.jsx("input",{type:"text",placeholder:"Search conversations...",value:D,onChange:A=>M(A.target.value)})]}),l.jsx("div",{className:"conversations-list",children:N?l.jsx("div",{className:"loading-state",children:l.jsx(Ft,{size:24,className:"animate-spin"})}):V.length===0?l.jsxs("div",{className:"empty-conversations",children:[l.jsx(Xt,{size:32}),l.jsx("p",{children:"No conversations yet"})]}):V.map(A=>l.jsxs("div",{className:`conversation-item ${h?._id===A._id?"active":""}`,onClick:()=>L(A),children:[l.jsxs("div",{className:"conv-avatar",children:[l.jsx("span",{children:A.user.name.charAt(0)}),A.user.online&&l.jsx("div",{className:"online-indicator"})]}),l.jsxs("div",{className:"conv-info",children:[l.jsxs("div",{className:"conv-header",children:[l.jsx("span",{className:"conv-name",children:A.user.name}),l.jsx("span",{className:"conv-time",children:A.lastMessage?.createdAt})]}),l.jsx("p",{className:"conv-preview",children:A.lastMessage?l.jsxs(l.Fragment,{children:[A.lastMessage.sender==="me"&&"You: ",A.lastMessage.content]}):l.jsx("span",{style:{fontStyle:"italic",opacity:.7},children:"Start a conversation"})})]}),A.unread>0&&l.jsx("div",{className:"unread-badge",children:A.unread})]},A._id))})]}),l.jsx("div",{className:`chat-area ${h?"":"hide-mobile"}`,children:h?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"chat-header",children:[l.jsx("button",{className:"back-btn",onClick:()=>p(null),children:l.jsx(It,{size:20})}),l.jsxs("div",{className:"chat-user-info",children:[l.jsxs("div",{className:"chat-avatar",children:[l.jsx("span",{children:h.user.name.charAt(0)}),h.user.online&&l.jsx("div",{className:"online-indicator"})]}),l.jsxs("div",{children:[l.jsx("h3",{children:h.user.name}),l.jsx("span",{className:"chat-status",children:h.user.online?"Online":"Offline"})]})]}),l.jsx("div",{className:"chat-actions",children:l.jsxs("div",{className:"more-menu-wrapper",ref:F,children:[l.jsx("button",{className:"action-btn",onClick:()=>re(!Z),children:l.jsx(I1,{size:18})}),Z&&l.jsxs("div",{className:"more-menu-dropdown",children:[l.jsx("button",{onClick:()=>{u(`/profile/${h.user._id}`),re(!1)},children:"View Profile"}),l.jsx("button",{onClick:async()=>{try{const A=await ze.muteUser(h.user._id);se(A.muted),P(A.muted?"🔇 Notifications muted":"🔔 Notifications unmuted")}catch{P("Failed to update mute status")}re(!1)},children:$?"Unmute Notifications":"Mute Notifications"}),l.jsx("button",{onClick:async()=>{try{const A=await ze.blockUser(h.user._id);me(A.blocked),P(A.blocked?"🚫 User blocked":"✅ User unblocked")}catch{P("Failed to update block status")}re(!1)},children:K?"Unblock User":"Block User"}),l.jsx("button",{onClick:async()=>{try{await ze.clearChat(h.user._id),v([]),m(A=>A.map(J=>J.user._id===h.user._id?{...J,lastMessage:null,unread:0}:J)),P("🗑️ Chat cleared")}catch{P("Failed to clear chat")}re(!1)},children:"Clear Chat"})]})]})})]}),K&&l.jsxs("div",{className:"blocked-banner",style:{padding:"0.75rem",backgroundColor:"var(--bg-tertiary)",textAlign:"center",color:"var(--text-secondary)"},children:["🚫 You have blocked this user. ",l.jsx("button",{onClick:async()=>{try{const A=await ze.blockUser(h.user._id);me(A.blocked),P(A.blocked?"🚫 User blocked":"✅ User unblocked")}catch{P("Failed to update block status")}},style:{background:"none",border:"none",color:"var(--primary-500)",cursor:"pointer",textDecoration:"underline"},children:"Unblock"})]}),l.jsx("div",{className:"messages-container",ref:Le,children:b.length===0?l.jsxs("div",{className:"empty-chat-state",children:[l.jsx("p",{children:"No messages yet."}),l.jsx("p",{className:"empty-chat-subtext",children:"Send a message to start the conversation!"})]}):b.map(A=>l.jsxs("div",{className:`message ${A.sender==="me"?"sent":"received"}`,onMouseEnter:()=>Ue(A._id),onMouseLeave:()=>Ue(null),children:[l.jsxs("div",{className:"message-bubble",children:[l.jsx("p",{children:A.content}),l.jsx("span",{className:"message-time",children:A.createdAt})]}),A.sender==="me"&&Ee===A._id&&!A._id.startsWith("temp-")&&l.jsx("button",{className:"msg-delete-btn",style:{background:"none",border:"none",color:"var(--text-muted)",padding:"0.25rem",cursor:"pointer",marginLeft:"0.25rem",alignSelf:"center"},onClick:()=>S(A._id),disabled:Ge===A._id,title:"Delete message",children:l.jsx(Gh,{size:14})})]},A._id))}),K?l.jsx("div",{className:"message-input-form",style:{justifyContent:"center",color:"var(--text-muted)"},children:"You have blocked this user. Unblock to send messages."}):l.jsxs("form",{className:"message-input-form",onSubmit:xe,children:[l.jsx("input",{type:"text",placeholder:"Type a message...",value:g,onChange:A=>w(A.target.value)}),l.jsx("button",{type:"submit",className:"send-btn",disabled:!g.trim()||H,children:l.jsx(qv,{size:20})})]})]}):l.jsxs("div",{className:"no-conversation-selected",children:[l.jsx(Xt,{size:48}),l.jsx("h3",{children:"Select a conversation"}),l.jsx("p",{children:"Choose a conversation from the sidebar to start messaging"})]})}),G&&l.jsx("div",{className:"msg-toast",children:G}),l.jsx("style",{children:`
        /* FUTURISTIC REDESIGN */
        
        .messages-page {
          display: flex;
          height: 100vh;
          background: radial-gradient(circle at top right, #0a0a0f, #111116);
          position: relative;
          overflow: hidden;
        }
        
        /* Subtle ambient glow behind everything */
        .messages-page::before {
          content: '';
          position: absolute;
          top: -30%; left: -20%;
          width: 70vw; height: 70vw;
          background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        /* Sidebar */
        .conversations-sidebar {
          width: 380px;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          background: rgba(17, 17, 22, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 10;
          box-shadow: 10px 0 30px rgba(0,0,0,0.5);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 1.5rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .page-back-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          flex-shrink: 0;
        }

        .page-back-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.5);
          color: #60a5fa;
          transform: scale(1.1);
        }

        .sidebar-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .search-box {
          padding: 1rem 1.5rem;
          position: relative;
        }

        .search-box .search-icon {
          position: absolute;
          left: 2.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          transition: color 0.3s ease;
        }

        .search-box input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .search-box input:focus {
          outline: none;
          background: rgba(0, 0, 0, 0.2);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15), inset 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .search-box input:focus + .search-icon {
          color: #60a5fa;
        }

        .conversations-list {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 0.5rem;
        }

        .conversations-list::-webkit-scrollbar {
          width: 6px;
        }
        .conversations-list::-webkit-scrollbar-track {
          background: transparent;
        }
        .conversations-list::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }

        .conversation-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1rem 1.25rem;
          cursor: pointer;
          border-radius: 1rem;
          margin-bottom: 0.25rem;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
        }

        .conversation-item:hover {
          background: rgba(255, 255, 255, 0.04);
          transform: translateX(4px);
        }

        .conversation-item.active {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.2);
          box-shadow: inset 0 0 20px rgba(59,130,246,0.05);
        }

        .conv-avatar {
          position: relative;
          width: 3.25rem;
          height: 3.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          border-radius: 1rem;
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
          transform: rotate(-3deg);
          transition: transform 0.3s ease;
        }
        
        .conversation-item:hover .conv-avatar {
          transform: rotate(0deg) scale(1.05);
        }

        .online-indicator {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 14px;
          height: 14px;
          background: #10b981;
          border: 3px solid #111116;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }

        .conv-info {
          flex: 1;
          min-width: 0;
        }

        .conv-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.4rem;
        }

        .conv-name {
          font-weight: 600;
          color: #f8fafc;
          font-size: 1.05rem;
          letter-spacing: 0.3px;
        }

        .conv-time {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
        }

        .conv-preview {
          font-size: 0.85rem;
          color: #94a3b8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .unread-badge {
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }

        /* Chat Area */
        .chat-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: rgba(10, 10, 15, 0.8);
          z-index: 10;
          position: relative;
        }

        .chat-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1rem 2rem;
          background: rgba(17, 17, 22, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .chat-user-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .chat-avatar {
          position: relative;
          width: 2.75rem;
          height: 2.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 0.8rem;
          color: white;
          font-weight: 700;
          box-shadow: 0 2px 10px rgba(99, 102, 241, 0.3);
        }

        .chat-user-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.15rem;
          color: #f8fafc;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .chat-status {
          font-size: 0.75rem;
          color: #10b981;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .chat-user-info h3 + .chat-status::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
        }

        .action-btn {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 50%;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          transform: rotate(90deg);
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        /* Messages */
        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          scroll-behavior: smooth;
        }
        
        .messages-container::-webkit-scrollbar {
          width: 8px;
        }
        .messages-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .messages-container::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }

        .message {
          display: flex;
          max-width: 65%;
          animation: messageSlideIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
          transform: translateY(10px);
        }
        
        @keyframes messageSlideIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .message.sent {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message.received {
          align-self: flex-start;
        }

        .message-bubble {
          padding: 1rem 1.25rem;
          position: relative;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          line-height: 1.6;
          font-size: 0.95rem;
          letter-spacing: 0.3px;
        }

        .message.sent .message-bubble {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          border-radius: 1.5rem 1.5rem 0.25rem 1.5rem;
        }

        .message.received .message-bubble {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.05);
          color: #e2e8f0;
          border-radius: 1.5rem 1.5rem 1.5rem 0.25rem;
        }

        .message-time {
          font-size: 0.65rem;
          opacity: 0.7;
          display: block;
          margin-top: 0.5rem;
          text-align: right;
        }

        /* Message Input */
        .message-input-form {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 2rem;
          background: rgba(17, 17, 22, 0.6);
          backdrop-filter: blur(15px);
          border-top: 1px solid rgba(255,255,255,0.05);
          position: relative;
          z-index: 20;
        }

        .message-input-form input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          background: rgba(30, 41, 59, 0.5);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .message-input-form input:focus {
          outline: none;
          background: rgba(15, 23, 42, 0.8);
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .send-btn {
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.1) rotate(-10deg);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
        }

        .send-btn:disabled {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.3);
          box-shadow: none;
          cursor: not-allowed;
          transform: none;
        }

        /* No Conversation State */
        .no-conversation-selected {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #64748b;
          gap: 1.5rem;
          background: radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%);
        }

        .no-conversation-selected svg {
          opacity: 0.5;
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .no-conversation-selected h3 {
          color: #e2e8f0;
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        /* 3-dots dropdown */
        .more-menu-wrapper {
          position: relative;
        }

        .more-menu-dropdown {
          position: absolute;
          top: 120%;
          right: 0;
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          z-index: 100;
          min-width: 200px;
          overflow: hidden;
          animation: menuPop 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          transform-origin: top right;
        }

        @keyframes menuPop {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .more-menu-dropdown button {
          display: block;
          width: 100%;
          padding: 0.875rem 1.25rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 0.9rem;
          color: #e2e8f0;
          cursor: pointer;
          transition: background 0.2s ease;
          font-weight: 500;
        }

        .more-menu-dropdown button:hover {
          background: rgba(59, 130, 246, 0.2);
          color: #fff;
        }
        
        @media (max-width: 768px) {
          .conversations-sidebar {
            width: 100%;
            position: absolute;
            left: 0; right: 0; top: 0; bottom: 0;
            z-index: 10;
          }
          .conversations-sidebar.hide-mobile { display: none; }
          .chat-area {
            position: absolute;
            left: 0; right: 0; top: 0; bottom: 0;
            z-index: 20;
          }
          .chat-area.hide-mobile { display: none; }
          .message { max-width: 85%; }
        }

        /* Toast Notification */
        .msg-toast {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(30, 41, 59, 0.9);
          backdrop-filter: blur(5px);
          color: white;
          padding: 0.875rem 1.5rem;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 500;
          box-shadow: 0 8px 30px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 999;
          animation: toastFadeIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes toastFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `})]})},wx=[{category:"Account & Profile",icon:l.jsx(jc,{size:20}),questions:[{q:"How do I create an account?",a:`Click the "Sign Up" button on the homepage. You can register using your email address or sign in with Google. You'll need to verify your email before accessing all features.`},{q:"How do I edit my profile?",a:'Navigate to your profile page by clicking your avatar in the navigation bar. Click the "Edit Profile" button to update your bio, skills, university, and other details.'},{q:"Can I change my email address?",a:"Currently, email changes are not supported directly. Please contact our support team for assistance with email updates."},{q:"How do I delete my account?",a:"To delete your account, please contact our support team. We will process your request and remove all associated data within 30 days."}]},{category:"Connections & Networking",icon:l.jsx(yn,{size:20}),questions:[{q:"How do I connect with other students?",a:'Visit the Discover page to find students with similar interests. Click the "Connect" button on their profile card to send a connection request.'},{q:"Can I remove a connection?",a:`Yes. Visit the connected user's profile and click the "Connected" button to disconnect. You can always reconnect later.`},{q:"How does the Discover algorithm work?",a:"Our recommendation engine suggests students based on shared skills, university, interests, and mutual connections to help you find the most relevant peers."}]},{category:"Messaging",icon:l.jsx(Xt,{size:20}),questions:[{q:"How do I send a message?",a:`You can message any of your connections. Go to the Messages page or click "Message" on a connected user's profile to start a conversation.`},{q:"Can I block or mute someone?",a:"Yes. In the message thread, use the options menu to mute notifications or block a user. Blocked users cannot send you messages or view your profile."},{q:"How do I clear a chat?",a:'In the message thread options menu, select "Clear Chat" to remove the conversation history from your view. This action only affects your side.'}]},{category:"Privacy & Safety",icon:l.jsx(Dc,{size:20}),questions:[{q:"Who can see my profile?",a:"Your profile is visible to all registered users on the platform. Non-registered visitors cannot view user profiles."},{q:"How do I report inappropriate behavior?",a:"If you encounter any behavior that violates our Community Guidelines, please block the user and contact our support team with details of the incident."},{q:"Is my data secure?",a:"We use industry-standard encryption and security practices to protect your data. Read our Privacy Policy for detailed information on how we handle your information."}]}],zx=()=>{const[s,o]=y.useState({}),[u,d]=y.useState(""),m=(p,b)=>{const v=`${p}-${b}`;o(g=>({...g,[v]:!g[v]}))},h=wx.map(p=>({...p,questions:p.questions.filter(b=>b.q.toLowerCase().includes(u.toLowerCase())||b.a.toLowerCase().includes(u.toLowerCase()))})).filter(p=>p.questions.length>0);return l.jsxs("div",{className:"info-page",children:[l.jsxs(oe,{to:"/",className:"back-home-btn",children:[l.jsx(It,{size:18})," Back to Home"]}),l.jsxs("div",{className:"info-page-header",children:[l.jsx("div",{className:"info-page-icon",children:l.jsx(X1,{size:36})}),l.jsx("h1",{children:"Help Center"}),l.jsx("p",{className:"info-page-subtitle",children:"Find answers to common questions about StudentNet"})]}),l.jsxs("div",{className:"help-search-bar",children:[l.jsx(Ja,{size:18}),l.jsx("input",{type:"text",placeholder:"Search for help...",value:u,onChange:p=>d(p.target.value)})]}),l.jsxs("div",{className:"info-page-content",children:[h.length===0&&l.jsx("div",{className:"help-no-results",children:l.jsxs("p",{children:['No results found for "',l.jsx("strong",{children:u}),'". Try different keywords.']})}),h.map((p,b)=>l.jsxs("div",{className:"help-category",children:[l.jsxs("div",{className:"help-category-header",children:[p.icon,l.jsx("h2",{children:p.category})]}),l.jsx("div",{className:"help-questions",children:p.questions.map((v,g)=>{const w=`${b}-${g}`,N=s[w];return l.jsxs("div",{className:`help-item ${N?"open":""}`,children:[l.jsxs("button",{className:"help-question",onClick:()=>m(b,g),children:[l.jsx("span",{children:v.q}),N?l.jsx(B1,{size:18}):l.jsx(Rh,{size:18})]}),N&&l.jsx("div",{className:"help-answer",children:l.jsx("p",{children:v.a})})]},g)})})]},b))]}),l.jsxs("div",{className:"info-page-contact",children:[l.jsx("h3",{children:"Still need help?"}),l.jsx("p",{children:"Can't find what you're looking for? Reach out to our support team."}),l.jsx("a",{href:"mailto:support@studentnet.com",className:"info-page-btn",children:"Contact Support"})]}),l.jsx("style",{children:`
        .info-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }
        .info-page-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .info-page-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          color: #fff;
          margin-bottom: 1.25rem;
          box-shadow: 0 8px 30px rgba(59,130,246,0.3);
        }
        .info-page-header h1 {
          font-size: 2.25rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--text-primary), var(--primary-400));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }
        .info-page-subtitle {
          color: var(--text-muted);
          font-size: 1.05rem;
        }
        .help-search-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.08));
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          margin-bottom: 2rem;
          transition: border-color 0.2s;
        }
        .help-search-bar:focus-within {
          border-color: var(--primary-500);
        }
        .help-search-bar svg { color: var(--text-muted); flex-shrink: 0; }
        .help-search-bar input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        .info-page-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .help-category-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
          color: var(--primary-400);
        }
        .help-category-header h2 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }
        .help-questions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .help-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 0.75rem;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .help-item.open {
          border-color: rgba(59,130,246,0.25);
        }
        .help-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          text-align: left;
        }
        .help-question:hover { color: var(--primary-400); }
        .help-question svg { color: var(--text-muted); flex-shrink: 0; }
        .help-answer {
          padding: 0 1.25rem 1rem;
          animation: fadeSlideIn 0.25s ease;
        }
        .help-answer p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.9rem;
          margin: 0;
        }
        .help-no-results {
          text-align: center;
          padding: 2rem;
          color: var(--text-muted);
        }
        .info-page-contact {
          text-align: center;
          margin-top: 3rem;
          padding: 2.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
        }
        .info-page-contact h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .info-page-contact p {
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          font-size: 0.95rem;
        }
        .info-page-btn {
          display: inline-block;
          padding: 0.7rem 1.75rem;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          color: #fff;
          border-radius: 0.6rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .info-page-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59,130,246,0.35);
        }
        .back-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          transition: all 0.2s ease;
        }
        .back-home-btn:hover {
          color: var(--primary-400);
          border-color: rgba(59,130,246,0.3);
          transform: translateX(-3px);
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})},kx=[{icon:l.jsx(dv,{size:22}),title:"Be Respectful & Inclusive",points:["Treat every member with dignity and respect, regardless of background, identity, or opinions.","Embrace diversity — our community thrives because of the variety of perspectives students bring.","Use welcoming and inclusive language in all interactions.","Disagree constructively without resorting to personal attacks or insults."]},{icon:l.jsx(Fv,{size:22}),title:"Keep It Professional",points:["StudentNet is a professional networking platform — maintain a professional tone in messages and profiles.","Share content that adds value: career insights, academic resources, project collaborations, and industry knowledge.","Avoid spam, self-promotion, or irrelevant content that doesn't benefit the community.","Use real information on your profile — misrepresenting your identity or credentials is prohibited."]},{icon:l.jsx(Gv,{size:22}),title:"Protect Privacy",points:["Never share another person's private information (phone number, address, etc.) without their explicit consent.","Do not screenshot or share private messages outside the platform without permission.","Respect others' boundaries — if someone doesn't want to connect or chat, accept their decision gracefully.","Report any doxxing or privacy violations immediately."]},{icon:l.jsx(Ah,{size:22}),title:"Zero Tolerance Policy",points:["Harassment, bullying, hate speech, or threats of any kind result in immediate account suspension.","Discrimination based on race, gender, religion, sexual orientation, disability, or any protected characteristic is strictly prohibited.","Sharing NSFW, violent, or illegal content will lead to permanent ban.","Impersonating other users, faculty, or organizations is grounds for termination."]},{icon:l.jsx(Xt,{size:22}),title:"Messaging Etiquette",points:["Send connection requests with a brief, genuine introduction — not generic copy-pasted messages.","Respond to messages in a timely manner when possible.","Don't send unsolicited promotional messages or link spam.","Use the mute or block feature for unwanted contacts rather than responding confrontationally."]},{icon:l.jsx(yn,{size:22}),title:"Community Contribution",points:["Help fellow students by sharing your knowledge, experiences, and opportunities.","Provide honest and constructive feedback when collaborating on projects.","Report bugs, issues, or policy violations to help us improve the platform.","Be a positive ambassador for the student community — your actions reflect on everyone."]}],Cx=()=>l.jsxs("div",{className:"info-page",children:[l.jsxs(oe,{to:"/",className:"back-home-btn",children:[l.jsx(It,{size:18})," Back to Home"]}),l.jsxs("div",{className:"info-page-header",children:[l.jsx("div",{className:"info-page-icon",children:l.jsx(_1,{size:36})}),l.jsx("h1",{children:"Community Guidelines"}),l.jsx("p",{className:"info-page-subtitle",children:"Our standards for building a safe, supportive, and professional student community"})]}),l.jsx("div",{className:"info-page-intro-card",children:l.jsx("p",{children:"StudentNet is built on trust, respect, and a shared goal of professional growth. These guidelines ensure every student has a positive and safe experience. By using StudentNet, you agree to follow these principles."})}),l.jsx("div",{className:"info-page-content",children:kx.map((s,o)=>l.jsxs("div",{className:"guideline-card",children:[l.jsxs("div",{className:"guideline-card-header",children:[l.jsx("div",{className:"guideline-icon",children:s.icon}),l.jsx("h2",{children:s.title})]}),l.jsx("ul",{children:s.points.map((u,d)=>l.jsx("li",{children:u},d))})]},o))}),l.jsxs("div",{className:"info-page-contact",children:[l.jsx(Xh,{size:24,style:{color:"var(--primary-400)",marginBottom:"0.75rem"}}),l.jsx("h3",{children:"Reporting Violations"}),l.jsx("p",{children:"If you witness or experience any behavior that violates these guidelines, please report it immediately. You can block the user and contact our moderation team."}),l.jsx("a",{href:"mailto:support@studentnet.com",className:"info-page-btn",children:"Report an Issue"})]}),l.jsx("style",{children:`
        .info-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }
        .info-page-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .info-page-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          color: #fff;
          margin-bottom: 1.25rem;
          box-shadow: 0 8px 30px rgba(59,130,246,0.3);
        }
        .info-page-header h1 {
          font-size: 2.25rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--text-primary), var(--primary-400));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }
        .info-page-subtitle {
          color: var(--text-muted);
          font-size: 1.05rem;
        }
        .info-page-intro-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          margin-bottom: 2rem;
        }
        .info-page-intro-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }
        .info-page-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .guideline-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          transition: border-color 0.2s;
        }
        .guideline-card:hover {
          border-color: rgba(59,130,246,0.2);
        }
        .guideline-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .guideline-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 0.6rem;
          background: rgba(59,130,246,0.1);
          color: var(--primary-400);
          flex-shrink: 0;
        }
        .guideline-card-header h2 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }
        .guideline-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .guideline-card li {
          position: relative;
          padding-left: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.9rem;
        }
        .guideline-card li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-500);
          opacity: 0.6;
        }
        .info-page-contact {
          text-align: center;
          margin-top: 3rem;
          padding: 2.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
        }
        .info-page-contact h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .info-page-contact p {
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .info-page-btn {
          display: inline-block;
          padding: 0.7rem 1.75rem;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          color: #fff;
          border-radius: 0.6rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .info-page-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59,130,246,0.35);
        }
        .back-home-btn{display:inline-flex;align-items:center;gap:.5rem;color:var(--text-muted);text-decoration:none;font-size:.9rem;font-weight:500;margin-bottom:1.5rem;padding:.5rem 1rem;border-radius:.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));transition:all .2s ease}
        .back-home-btn:hover{color:var(--primary-400);border-color:rgba(59,130,246,.3);transform:translateX(-3px)}
      `})]}),Ex=[{icon:l.jsx(Ev,{size:22}),title:"Build Your Network Early",description:"Start networking before you need it. A strong professional network is built over time, not overnight.",advice:["Connect with classmates, professors, and alumni — they're your first professional circle.","Attend campus career fairs, workshops, and industry meetups to meet people outside your bubble.",'Follow up after meeting someone new. A simple "Great meeting you!" message goes a long way.',"Offer value first — share articles, introduce connections, or help with projects before asking for favors."]},{icon:l.jsx(qh,{size:22}),title:"Craft a Standout Resume",description:"Your resume is your first impression. Make it count with clarity, impact, and relevance.",advice:['Lead with action verbs and quantify your achievements (e.g., "Increased engagement by 40%").',"Tailor your resume for each application — one size does NOT fit all.","Keep it to one page as a student. Prioritize recent, relevant experience.","Include projects, hackathons, and open-source contributions — they demonstrate real skills.","Proofread ruthlessly. A single typo can cost you an interview."]},{icon:l.jsx(zv,{size:22}),title:"Ace Your Interviews",description:"Preparation is the difference between a good interview and a great one.",advice:["Research the company thoroughly — know their mission, recent news, and products.","Practice the STAR method (Situation, Task, Action, Result) for behavioral questions.","Prepare thoughtful questions to ask the interviewer — it shows genuine interest.","Do mock interviews with friends or mentors. Practice builds confidence.","Send a thank-you email within 24 hours after every interview."]},{icon:l.jsx(Lh,{size:22}),title:"Optimize Your Online Presence",description:"Recruiters are searching for you online. Make sure they find something impressive.",advice:["Keep your LinkedIn profile updated with a professional photo, headline, and summary.","Your StudentNet profile should highlight your skills, projects, and career interests.","Build a personal website or portfolio to showcase your best work.","Be mindful of your public social media presence — employers do check.","Engage with industry content: comment, share, and write posts that demonstrate your expertise."]},{icon:l.jsx(Yh,{size:22}),title:"Set Clear Career Goals",description:"Direction matters more than speed. Know where you're heading.",advice:["Identify your top 3 industries or roles of interest and research them deeply.","Set short-term goals (this semester) and long-term goals (post-graduation).","Find mentors in your target field — their guidance is invaluable.","Be open to internships and part-time roles that build relevant experience.","Reassess your goals every semester. It's okay to pivot as you learn more about yourself."]},{icon:l.jsx(tb,{size:22}),title:"Develop In-Demand Skills",description:"The job market evolves fast. Stay ahead by continuously learning.",advice:["Learn skills that employers value: communication, teamwork, problem-solving, and adaptability.","Take online courses or certifications in your field (Coursera, Udemy, freeCodeCamp).","Contribute to open-source projects or build side projects to apply what you learn.","Learn version control (Git), basic data analysis, and presentation skills regardless of your field.","Soft skills matter just as much as technical skills — practice public speaking and leadership."]}],_x=()=>l.jsxs("div",{className:"info-page",children:[l.jsxs(oe,{to:"/",className:"back-home-btn",children:[l.jsx(It,{size:18})," Back to Home"]}),l.jsxs("div",{className:"info-page-header",children:[l.jsx("div",{className:"info-page-icon",children:l.jsx(A1,{size:36})}),l.jsx("h1",{children:"Career Advice"}),l.jsx("p",{className:"info-page-subtitle",children:"Actionable tips to kickstart your professional journey while you're still in school"})]}),l.jsxs("div",{className:"info-page-intro-card",children:[l.jsx("div",{className:"intro-icon",children:l.jsx(pv,{size:20})}),l.jsx("p",{children:"The best time to start building your career is now. Whether you're a freshman exploring options or a senior preparing for the job market, these tips will help you stand out and succeed."})]}),l.jsx("div",{className:"info-page-content",children:Ex.map((s,o)=>l.jsxs("div",{className:"career-card",children:[l.jsxs("div",{className:"career-card-header",children:[l.jsx("div",{className:"career-icon",children:s.icon}),l.jsxs("div",{children:[l.jsx("h2",{children:s.title}),l.jsx("p",{className:"career-card-desc",children:s.description})]})]}),l.jsx("ul",{children:s.advice.map((u,d)=>l.jsx("li",{children:u},d))})]},o))}),l.jsx("style",{children:`
        .info-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }
        .info-page-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .info-page-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          color: #fff;
          margin-bottom: 1.25rem;
          box-shadow: 0 8px 30px rgba(59,130,246,0.3);
        }
        .info-page-header h1 {
          font-size: 2.25rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--text-primary), var(--primary-400));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }
        .info-page-subtitle {
          color: var(--text-muted);
          font-size: 1.05rem;
        }
        .info-page-intro-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          margin-bottom: 2rem;
        }
        .intro-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 0.5rem;
          background: rgba(59,130,246,0.12);
          color: var(--primary-400);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .info-page-intro-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }
        .info-page-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .career-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          transition: border-color 0.2s;
        }
        .career-card:hover {
          border-color: rgba(59,130,246,0.2);
        }
        .career-card-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .career-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 0.6rem;
          background: rgba(59,130,246,0.1);
          color: var(--primary-400);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .career-card-header h2 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.25rem;
        }
        .career-card-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin: 0;
          line-height: 1.5;
        }
        .career-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .career-card li {
          position: relative;
          padding-left: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.9rem;
        }
        .career-card li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary-500);
          opacity: 0.6;
        }
        .back-home-btn{display:inline-flex;align-items:center;gap:.5rem;color:var(--text-muted);text-decoration:none;font-size:.9rem;font-weight:500;margin-bottom:1.5rem;padding:.5rem 1rem;border-radius:.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));transition:all .2s ease}
        .back-home-btn:hover{color:var(--primary-400);border-color:rgba(59,130,246,.3);transform:translateX(-3px)}
      `})]}),Tx=[{icon:l.jsx(F1,{size:20}),title:"1. Information We Collect",content:[{subtitle:"Account Information",text:"When you register, we collect your name, email address, university, and profile details you choose to provide (bio, skills, interests, profile photo)."},{subtitle:"Usage Data",text:"We automatically collect information about how you interact with the platform, including pages visited, features used, connection activity, and messaging patterns (metadata only, not content)."},{subtitle:"Device Information",text:"We collect browser type, operating system, IP address, and device identifiers to ensure platform security and optimize your experience."}]},{icon:l.jsx(Lr,{size:20}),title:"2. How We Use Your Information",content:[{subtitle:"Platform Operations",text:"To create and manage your account, enable connections and messaging, and provide the core StudentNet experience."},{subtitle:"Personalization",text:"To recommend relevant connections through our Discover feature based on shared skills, interests, university, and network activity."},{subtitle:"Communication",text:"To send you essential notifications including connection requests, messages, and important platform updates."},{subtitle:"Safety & Security",text:"To detect fraud, prevent abuse, enforce our Community Guidelines, and protect the rights of our users."}]},{icon:l.jsx(Bv,{size:20}),title:"3. Information Sharing",content:[{subtitle:"With Other Users",text:"Your profile information (name, university, bio, skills) is visible to other registered StudentNet users. Your email is never publicly displayed."},{subtitle:"Service Providers",text:"We may share data with trusted third-party services that help us operate the platform (hosting, email delivery, analytics). These providers are bound by data protection agreements."},{subtitle:"Legal Requirements",text:"We may disclose your information if required by law, court order, or governmental request, or to protect the safety of our users and platform."},{subtitle:"We Never Sell",text:"StudentNet does not sell your personal information to advertisers or third parties. Period."}]},{icon:l.jsx(Dr,{size:20}),title:"4. Data Security",content:[{subtitle:"Encryption",text:"All data transmitted between your browser and our servers is encrypted using TLS/SSL. Passwords are hashed using industry-standard bcrypt."},{subtitle:"Access Controls",text:"We implement strict access controls and authentication measures to prevent unauthorized access to your data."},{subtitle:"Monitoring",text:"We continuously monitor our systems for vulnerabilities and potential breaches. In the event of a data breach, we will notify affected users within 72 hours."}]},{icon:l.jsx(Br,{size:20}),title:"5. Your Rights",content:[{subtitle:"Access & Portability",text:"You have the right to request a copy of all personal data we hold about you. Contact our support team to make this request."},{subtitle:"Correction",text:"You can update your profile information at any time through your profile settings. For other data corrections, contact support."},{subtitle:"Deletion",text:"You can request complete deletion of your account and associated data. We will process deletion requests within 30 days."},{subtitle:"Opt-Out",text:"You can mute notifications and control your privacy settings within the platform. You can unsubscribe from non-essential emails at any time."}]},{icon:l.jsx(Ar,{size:20}),title:"6. Changes to This Policy",content:[{subtitle:"Updates",text:"We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through a platform notification."},{subtitle:"Effective Date",text:"This policy is effective as of January 1, 2026. Continued use of the platform after changes constitutes acceptance of the updated policy."}]}],Ax=()=>l.jsxs("div",{className:"info-page",children:[l.jsxs(oe,{to:"/",className:"back-home-btn",children:[l.jsx(It,{size:18})," Back to Home"]}),l.jsxs("div",{className:"info-page-header",children:[l.jsx("div",{className:"info-page-icon",children:l.jsx(Dc,{size:36})}),l.jsx("h1",{children:"Privacy Policy"}),l.jsx("p",{className:"info-page-subtitle",children:"How we collect, use, and protect your personal information"})]}),l.jsx("div",{className:"info-page-intro-card",children:l.jsx("p",{children:"Your privacy is a core value at StudentNet. This policy explains what data we collect, how we use it, and the rights you have over your information. We are committed to being transparent about our data practices."})}),l.jsx("div",{className:"info-page-content",children:Tx.map((s,o)=>l.jsxs("div",{className:"policy-section",children:[l.jsxs("div",{className:"policy-section-header",children:[l.jsx("div",{className:"policy-icon",children:s.icon}),l.jsx("h2",{children:s.title})]}),l.jsx("div",{className:"policy-items",children:s.content.map((u,d)=>l.jsxs("div",{className:"policy-item",children:[l.jsx("h4",{children:u.subtitle}),l.jsx("p",{children:u.text})]},d))})]},o))}),l.jsxs("div",{className:"info-page-contact",children:[l.jsx(Gh,{size:24,style:{color:"var(--primary-400)",marginBottom:"0.75rem"}}),l.jsx("h3",{children:"Data Requests"}),l.jsx("p",{children:"To request access, correction, or deletion of your data, please contact our privacy team."}),l.jsx("a",{href:"mailto:privacy@studentnet.com",className:"info-page-btn",children:"Contact Privacy Team"})]}),l.jsx("style",{children:`
        .info-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }
        .info-page-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .info-page-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          color: #fff;
          margin-bottom: 1.25rem;
          box-shadow: 0 8px 30px rgba(59,130,246,0.3);
        }
        .info-page-header h1 {
          font-size: 2.25rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--text-primary), var(--primary-400));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }
        .info-page-subtitle {
          color: var(--text-muted);
          font-size: 1.05rem;
        }
        .info-page-intro-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          margin-bottom: 2rem;
        }
        .info-page-intro-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }
        .info-page-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .policy-section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
          padding: 1.5rem 1.75rem;
          transition: border-color 0.2s;
        }
        .policy-section:hover {
          border-color: rgba(59,130,246,0.2);
        }
        .policy-section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .policy-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 0.6rem;
          background: rgba(59,130,246,0.1);
          color: var(--primary-400);
          flex-shrink: 0;
        }
        .policy-section-header h2 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }
        .policy-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .policy-item h4 {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem;
        }
        .policy-item p {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.9rem;
          margin: 0;
        }
        .info-page-contact {
          text-align: center;
          margin-top: 3rem;
          padding: 2.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color, rgba(255,255,255,0.06));
          border-radius: 1rem;
        }
        .info-page-contact h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .info-page-contact p {
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          font-size: 0.95rem;
        }
        .info-page-btn {
          display: inline-block;
          padding: 0.7rem 1.75rem;
          background: linear-gradient(135deg, var(--primary-500), var(--secondary-500));
          color: #fff;
          border-radius: 0.6rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .info-page-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59,130,246,0.35);
        }
        .back-home-btn{display:inline-flex;align-items:center;gap:.5rem;color:var(--text-muted);text-decoration:none;font-size:.9rem;font-weight:500;margin-bottom:1.5rem;padding:.5rem 1rem;border-radius:.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));transition:all .2s ease}
        .back-home-btn:hover{color:var(--primary-400);border-color:rgba(59,130,246,.3);transform:translateX(-3px)}
      `})]}),Mx=[{icon:l.jsx(Br,{size:20}),title:"1. Eligibility & Account",items:["You must be at least 16 years old. Under 18 requires parental consent.","Provide accurate information. Impersonation is prohibited.","You are responsible for your account security.","One person, one account. Multiple accounts may be suspended."]},{icon:l.jsx(Ov,{size:20}),title:"2. Acceptable Use",items:["Use StudentNet for professional networking, collaboration, and career development.","No commercial solicitation, spam, or advertising without permission.","Comply with all applicable laws and our Community Guidelines.","No automated access (bots, scrapers) without authorization."]},{icon:l.jsx(Hh,{size:20}),title:"3. User Content",items:["You retain ownership of all content you post.","You grant StudentNet a license to display your content as needed to operate the platform.","Do not post illegal, defamatory, or IP-infringing content.","We may remove content that violates these terms without notice."]},{icon:l.jsx(Qv,{size:20}),title:"4. Intellectual Property",items:["StudentNet content and branding are protected by IP laws.","Do not copy, modify, or reverse-engineer any part of the platform.","Report IP infringement by contacting our team."]},{icon:l.jsx(Xh,{size:20}),title:"5. Termination",items:["We may suspend or terminate accounts for violations.","You may delete your account anytime — data removed within 30 days.","Shared chat content may persist in other users' history."]},{icon:l.jsx(iv,{size:20}),title:"6. Limitation of Liability",items:['StudentNet is provided "as is" without warranties.',"We are not responsible for user-posted content accuracy.","Our liability is limited to the maximum extent permitted by law."]},{icon:l.jsx(Dh,{size:20}),title:"7. Changes",items:["We may modify these terms at any time with notice.","Continued use constitutes acceptance. Effective January 1, 2026."]}],Rx=()=>l.jsxs("div",{className:"info-page",children:[l.jsxs(oe,{to:"/",className:"back-home-btn",children:[l.jsx(It,{size:18})," Back to Home"]}),l.jsxs("div",{className:"info-page-header",children:[l.jsx("div",{className:"info-page-icon",children:l.jsx(qh,{size:36})}),l.jsx("h1",{children:"Terms of Service"}),l.jsx("p",{className:"info-page-subtitle",children:"Rules governing your use of StudentNet"})]}),l.jsx("div",{className:"info-page-intro-card",children:l.jsx("p",{children:"By using StudentNet you agree to these terms. If you disagree, do not use the platform."})}),l.jsx("div",{className:"info-page-content",children:Mx.map((s,o)=>l.jsxs("div",{className:"ts-card",children:[l.jsxs("div",{className:"ts-header",children:[l.jsx("div",{className:"ts-ico",children:s.icon}),l.jsx("h2",{children:s.title})]}),l.jsx("ul",{children:s.items.map((u,d)=>l.jsx("li",{children:u},d))})]},o))}),l.jsxs("div",{className:"info-page-contact",children:[l.jsx("h3",{children:"Questions?"}),l.jsx("p",{children:"Contact our legal team for any clarifications."}),l.jsx("a",{href:"mailto:legal@studentnet.com",className:"info-page-btn",children:"Contact Legal"})]}),l.jsx("style",{children:`
      .info-page{max-width:800px;margin:0 auto;padding:2rem 1.5rem 4rem}
      .info-page-header{text-align:center;margin-bottom:2.5rem}
      .info-page-icon{display:inline-flex;align-items:center;justify-content:center;width:72px;height:72px;border-radius:1.25rem;background:linear-gradient(135deg,var(--primary-500),var(--secondary-500));color:#fff;margin-bottom:1.25rem;box-shadow:0 8px 30px rgba(59,130,246,.3)}
      .info-page-header h1{font-size:2.25rem;font-weight:800;background:linear-gradient(135deg,var(--text-primary),var(--primary-400));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.5rem}
      .info-page-subtitle{color:var(--text-muted);font-size:1.05rem}
      .info-page-intro-card{background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));border-radius:1rem;padding:1.5rem 1.75rem;margin-bottom:2rem}
      .info-page-intro-card p{color:var(--text-secondary);line-height:1.7;font-size:.95rem;margin:0}
      .info-page-content{display:flex;flex-direction:column;gap:1.25rem}
      .ts-card{background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));border-radius:1rem;padding:1.5rem 1.75rem;transition:border-color .2s}
      .ts-card:hover{border-color:rgba(59,130,246,.2)}
      .ts-header{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}
      .ts-ico{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:.6rem;background:rgba(59,130,246,.1);color:var(--primary-400);flex-shrink:0}
      .ts-header h2{font-size:1.1rem;font-weight:700;color:var(--text-primary);margin:0}
      .ts-card ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.6rem}
      .ts-card li{position:relative;padding-left:1.25rem;color:var(--text-secondary);line-height:1.6;font-size:.9rem}
      .ts-card li::before{content:'';position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:var(--primary-500);opacity:.6}
      .info-page-contact{text-align:center;margin-top:3rem;padding:2.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));border-radius:1rem}
      .info-page-contact h3{font-size:1.2rem;font-weight:700;color:var(--text-primary);margin-bottom:.5rem}
      .info-page-contact p{color:var(--text-muted);margin-bottom:1.25rem;font-size:.95rem}
      .info-page-btn{display:inline-block;padding:.7rem 1.75rem;background:linear-gradient(135deg,var(--primary-500),var(--secondary-500));color:#fff;border-radius:.6rem;text-decoration:none;font-weight:600;font-size:.9rem;transition:transform .2s,box-shadow .2s}
      .info-page-btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(59,130,246,.35)}
      .back-home-btn{display:inline-flex;align-items:center;gap:.5rem;color:var(--text-muted);text-decoration:none;font-size:.9rem;font-weight:500;margin-bottom:1.5rem;padding:.5rem 1rem;border-radius:.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));transition:all .2s ease}
      .back-home-btn:hover{color:var(--primary-400);border-color:rgba(59,130,246,.3);transform:translateX(-3px)}
    `})]}),Ox=[{icon:l.jsx(Lr,{size:20}),title:"1. What Are Cookies?",items:["Cookies are small text files stored on your device when you visit a website.","They help us remember your preferences, keep you logged in, and understand how you use StudentNet.","Cookies do not contain personal information like your name or email directly, but are linked to your account when you are logged in."]},{icon:l.jsx(jc,{size:20}),title:"2. Essential Cookies",items:["These are necessary for the platform to function and cannot be disabled.","Authentication cookies keep you logged in securely across pages.","Security cookies help protect against cross-site request forgery and other threats.","Session cookies remember your current state (e.g., which page you are viewing)."]},{icon:l.jsx(U1,{size:20}),title:"3. Analytics Cookies",items:["We use analytics to understand how users interact with StudentNet.","These cookies track page views, feature usage, and navigation patterns.","Analytics data is aggregated and anonymized — it is not used to identify individual users.","This information helps us improve the platform and fix usability issues."]},{icon:l.jsx(Iv,{size:20}),title:"4. Preference Cookies",items:["These cookies remember your settings like theme preference (dark/light mode).","They store your language and display preferences for a personalized experience.","Preference cookies improve your experience but are not strictly necessary."]},{icon:l.jsx(Hh,{size:20}),title:"5. Third-Party Cookies",items:["Some third-party services we use (e.g., Google OAuth) may set their own cookies.","These cookies are governed by the respective third party's privacy and cookie policies.","We do not use third-party advertising cookies. StudentNet does not display ads.","We carefully select third-party services that respect user privacy."]},{icon:l.jsx(jc,{size:20}),title:"6. Managing Cookies",items:["You can manage cookies through your browser settings (clear, block, or allow cookies).","Disabling essential cookies may prevent you from logging in or using core features.","Most browsers allow you to set preferences for individual websites.","For more information, visit your browser's help documentation on cookie management."]}],Dx=()=>l.jsxs("div",{className:"info-page",children:[l.jsxs(oe,{to:"/",className:"back-home-btn",children:[l.jsx(It,{size:18})," Back to Home"]}),l.jsxs("div",{className:"info-page-header",children:[l.jsx("div",{className:"info-page-icon",children:l.jsx(J1,{size:36})}),l.jsx("h1",{children:"Cookie Policy"}),l.jsx("p",{className:"info-page-subtitle",children:"How and why we use cookies on StudentNet"})]}),l.jsx("div",{className:"info-page-intro-card",children:l.jsx("p",{children:"StudentNet uses cookies to provide a secure, functional, and personalized experience. This policy explains the types of cookies we use and how you can control them."})}),l.jsx("div",{className:"info-page-content",children:Ox.map((s,o)=>l.jsxs("div",{className:"ck-card",children:[l.jsxs("div",{className:"ck-header",children:[l.jsx("div",{className:"ck-ico",children:s.icon}),l.jsx("h2",{children:s.title})]}),l.jsx("ul",{children:s.items.map((u,d)=>l.jsx("li",{children:u},d))})]},o))}),l.jsxs("div",{className:"info-page-contact",children:[l.jsx("h3",{children:"Questions about cookies?"}),l.jsx("p",{children:"Contact us if you need more information about our cookie practices."}),l.jsx("a",{href:"mailto:privacy@studentnet.com",className:"info-page-btn",children:"Contact Us"})]}),l.jsx("style",{children:`
      .info-page{max-width:800px;margin:0 auto;padding:2rem 1.5rem 4rem}
      .info-page-header{text-align:center;margin-bottom:2.5rem}
      .info-page-icon{display:inline-flex;align-items:center;justify-content:center;width:72px;height:72px;border-radius:1.25rem;background:linear-gradient(135deg,var(--primary-500),var(--secondary-500));color:#fff;margin-bottom:1.25rem;box-shadow:0 8px 30px rgba(59,130,246,.3)}
      .info-page-header h1{font-size:2.25rem;font-weight:800;background:linear-gradient(135deg,var(--text-primary),var(--primary-400));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.5rem}
      .info-page-subtitle{color:var(--text-muted);font-size:1.05rem}
      .info-page-intro-card{background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));border-radius:1rem;padding:1.5rem 1.75rem;margin-bottom:2rem}
      .info-page-intro-card p{color:var(--text-secondary);line-height:1.7;font-size:.95rem;margin:0}
      .info-page-content{display:flex;flex-direction:column;gap:1.25rem}
      .ck-card{background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));border-radius:1rem;padding:1.5rem 1.75rem;transition:border-color .2s}
      .ck-card:hover{border-color:rgba(59,130,246,.2)}
      .ck-header{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}
      .ck-ico{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:.6rem;background:rgba(59,130,246,.1);color:var(--primary-400);flex-shrink:0}
      .ck-header h2{font-size:1.1rem;font-weight:700;color:var(--text-primary);margin:0}
      .ck-card ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.6rem}
      .ck-card li{position:relative;padding-left:1.25rem;color:var(--text-secondary);line-height:1.6;font-size:.9rem}
      .ck-card li::before{content:'';position:absolute;left:0;top:.55em;width:6px;height:6px;border-radius:50%;background:var(--primary-500);opacity:.6}
      .info-page-contact{text-align:center;margin-top:3rem;padding:2.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));border-radius:1rem}
      .info-page-contact h3{font-size:1.2rem;font-weight:700;color:var(--text-primary);margin-bottom:.5rem}
      .info-page-contact p{color:var(--text-muted);margin-bottom:1.25rem;font-size:.95rem}
      .info-page-btn{display:inline-block;padding:.7rem 1.75rem;background:linear-gradient(135deg,var(--primary-500),var(--secondary-500));color:#fff;border-radius:.6rem;text-decoration:none;font-weight:600;font-size:.9rem;transition:transform .2s,box-shadow .2s}
      .info-page-btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(59,130,246,.35)}
      .back-home-btn{display:inline-flex;align-items:center;gap:.5rem;color:var(--text-muted);text-decoration:none;font-size:.9rem;font-weight:500;margin-bottom:1.5rem;padding:.5rem 1rem;border-radius:.5rem;background:var(--bg-secondary);border:1px solid var(--border-color,rgba(255,255,255,.06));transition:all .2s ease}
      .back-home-btn:hover{color:var(--primary-400);border-color:rgba(59,130,246,.3);transform:translateX(-3px)}
    `})]}),Ux="905760595592-tvnb14ih88hceucr2pig6l5trbjehetk.apps.googleusercontent.com",al=({children:s})=>{const{isAuthenticated:o,loading:u}=Vt();return u?l.jsxs("div",{className:"loading-screen",children:[l.jsx("div",{className:"spinner"}),l.jsx("p",{children:"Loading..."}),l.jsx("style",{children:`
          .loading-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            gap: 1rem;
            color: var(--text-muted);
          }
        `})]}):o?s:l.jsx(Tc,{to:"/login",replace:!0})},sh=({children:s})=>{const{isAuthenticated:o,loading:u}=Vt();return u?l.jsxs("div",{className:"loading-screen",children:[l.jsx("div",{className:"spinner"}),l.jsx("p",{children:"Loading..."}),l.jsx("style",{children:`
          .loading-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            gap: 1rem;
            color: var(--text-muted);
          }
        `})]}):o?l.jsx(Tc,{to:"/",replace:!0}):s};function qx(){return l.jsxs(My,{children:[l.jsx(et,{path:"/",element:l.jsx(Gt,{children:l.jsx(pb,{})})}),l.jsx(et,{path:"/help-center",element:l.jsx(Gt,{children:l.jsx(zx,{})})}),l.jsx(et,{path:"/community-guidelines",element:l.jsx(Gt,{children:l.jsx(Cx,{})})}),l.jsx(et,{path:"/career-advice",element:l.jsx(Gt,{children:l.jsx(_x,{})})}),l.jsx(et,{path:"/privacy-policy",element:l.jsx(Gt,{children:l.jsx(Ax,{})})}),l.jsx(et,{path:"/terms-of-service",element:l.jsx(Gt,{children:l.jsx(Rx,{})})}),l.jsx(et,{path:"/cookie-policy",element:l.jsx(Gt,{children:l.jsx(Dx,{})})}),l.jsx(et,{path:"/login",element:l.jsx(sh,{children:l.jsx(Nb,{})})}),l.jsx(et,{path:"/signup",element:l.jsx(sh,{children:l.jsx(kb,{})})}),l.jsx(et,{path:"/verify-email",element:l.jsx(Cb,{})}),l.jsx(et,{path:"/discover",element:l.jsx(al,{children:l.jsx(Gt,{children:l.jsx(gx,{})})})}),l.jsx(et,{path:"/profile",element:l.jsx(al,{children:l.jsx(Gt,{children:l.jsx(ih,{})})})}),l.jsx(et,{path:"/profile/:userId",element:l.jsx(al,{children:l.jsx(Gt,{children:l.jsx(ih,{})})})}),l.jsx(et,{path:"/connections",element:l.jsx(al,{children:l.jsx(Gt,{children:l.jsx(jx,{})})})}),l.jsx(et,{path:"/messages",element:l.jsx(al,{children:l.jsx(rh,{})})}),l.jsx(et,{path:"/messages/:userId",element:l.jsx(al,{children:l.jsx(rh,{})})}),l.jsx(et,{path:"*",element:l.jsx(Tc,{to:"/",replace:!0})})]})}function Hx(){return l.jsx(bb,{clientId:Ux,children:l.jsx(g1,{children:l.jsx(h1,{children:l.jsxs(n1,{children:[l.jsx(qx,{}),l.jsx(px,{position:"top-right"})]})})})})}Mg.createRoot(document.getElementById("root")).render(l.jsx(y.StrictMode,{children:l.jsx(Hx,{})}));
