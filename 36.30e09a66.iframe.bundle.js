(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{912:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_route",(function(){return Route})),__webpack_require__.d(__webpack_exports__,"ion_route_redirect",(function(){return RouteRedirect})),__webpack_require__.d(__webpack_exports__,"ion_router",(function(){return Router})),__webpack_require__.d(__webpack_exports__,"ion_router_link",(function(){return RouterLink}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52),_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(43),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(53),_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(938),Route=function(){function e(e){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.ionRouteDataChanged=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionRouteDataChanged",7),this.url=""}return e.prototype.onUpdate=function(e){this.ionRouteDataChanged.emit(e)},e.prototype.onComponentProps=function(e,t){if(e!==t){var r=e?Object.keys(e):[],n=t?Object.keys(t):[];if(r.length===n.length)for(var a=0,o=r;a<o.length;a++){var i=o[a];if(e[i]!==t[i])return void this.onUpdate(e)}else this.onUpdate(e)}},e.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(e,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!1,configurable:!0}),e}(),RouteRedirect=function(){function e(e){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.ionRouteRedirectChanged=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionRouteRedirectChanged",7)}return e.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},e.prototype.connectedCallback=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(e,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!1,configurable:!0}),e}(),generatePath=function(e){return"/"+e.filter((function(e){return e.length>0})).join("/")},writePath=function(e,t,r,n,a,o,i){var s=function(e,t,r){var n=generatePath(e);return t&&(n="#"+n),void 0!==r&&(n+="?"+r),n}(Object(tslib__WEBPACK_IMPORTED_MODULE_0__.e)(Object(tslib__WEBPACK_IMPORTED_MODULE_0__.e)([],parsePath(t).segments),n),r,i);"forward"===a?e.pushState(o,"",s):e.replaceState(o,"",s)},parsePath=function(e){var r,t=[""];if(null!=e){var n=e.indexOf("?");n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),0===(t=e.split("/").map((function(e){return e.trim()})).filter((function(e){return e.length>0}))).length&&(t=[""])}return{segments:t,queryString:r}},writeNavState=function(e,t,r,n,a,o){return void 0===a&&(a=!1),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var i,s,u,h;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(c){switch(c.label){case 0:return c.trys.push([0,6,,7]),i=searchNavNode(e),n>=t.length||!i?[2,a]:[4,new Promise((function(e){return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.c)(i,e)}))];case 1:return c.sent(),s=t[n],[4,i.setRouteId(s.id,s.params,r,o)];case 2:return(u=c.sent()).changed&&(r="root",a=!0),[4,writeNavState(u.element,t,r,n+1,a,o)];case 3:return a=c.sent(),u.markVisible?[4,u.markVisible()]:[3,5];case 4:c.sent(),c.label=5;case 5:return[2,a];case 6:return h=c.sent(),console.error(h),[2,!1];case 7:return[2]}}))}))},readNavState=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var t,r,n,a;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(o){switch(o.label){case 0:t=[],n=e,o.label=1;case 1:return(r=searchNavNode(n))?[4,r.getRouteId()]:[3,3];case 2:return(a=o.sent())?(n=a.element,a.element=void 0,t.push(a),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:t,outlet:r}]}}))}))},QUERY=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",searchNavNode=function(e){if(e){if(e.matches(QUERY))return e;var t=e.querySelector(QUERY);return null!=t?t:void 0}},findRouteRedirect=function(e,t){return t.find((function(t){return function(e,t){var r=t.from;if(void 0===t.to)return!1;if(r.length>e.length)return!1;for(var a=0;a<r.length;a++){var o=r[a];if("*"===o)return!0;if(o!==e[a])return!1}return r.length===e.length}(e,t)}))},matchesIDs=function(e,t){for(var r=Math.min(e.length,t.length),n=0;n<r&&e[n].toLowerCase()===t[n].id;n++);return n},matchesPath=function(e,t){for(var a,r=new RouterSegments(e),n=!1,o=0;o<t.length;o++){var i=t[o].path;if(""===i[0])n=!0;else{for(var s=0,u=i;s<u.length;s++){var h=u[s],c=r.next();if(":"===h[0]){if(""===c)return null;((a=a||[])[o]||(a[o]={}))[h.slice(1)]=c}else if(c!==h)return null}n=!1}}return!n||n===(""===r.next())?a?t.map((function(e,t){return{id:e.id,path:e.path,params:mergeParams(e.params,a[t]),beforeEnter:e.beforeEnter,beforeLeave:e.beforeLeave}})):t:null},mergeParams=function(e,t){return e||t?Object.assign(Object.assign({},e),t):void 0},routerPathToChain=function(e,t){for(var r=null,n=0,a=0,o=t;a<o.length;a++){var i=o[a],s=matchesPath(e,i);if(null!==s){var u=computePriority(s);u>n&&(n=u,r=s)}}return r},computePriority=function(e){for(var t=1,r=1,n=0,a=e;n<a.length;n++)for(var i=0,s=a[n].path;i<s.length;i++){var u=s[i];":"===u[0]?t+=Math.pow(1,r):""!==u&&(t+=Math.pow(2,r)),r++}return t},RouterSegments=function(){function e(e){this.path=e.slice()}return e.prototype.next=function(){return this.path.length>0?this.path.shift():""},e}(),readProp=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},readRedirects=function(e){return Array.from(e.children).filter((function(e){return"ION-ROUTE-REDIRECT"===e.tagName})).map((function(e){var t=readProp(e,"to");return{from:parsePath(readProp(e,"from")).segments,to:null==t?void 0:parsePath(t)}}))},readRoutes=function(e){return flattenRouterTree(readRouteNodes(e))},readRouteNodes=function(e){return Array.from(e.children).filter((function(e){return"ION-ROUTE"===e.tagName&&e.component})).map((function(e){var t=readProp(e,"component");return{path:parsePath(readProp(e,"url")).segments,id:t.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:readRouteNodes(e)}}))},flattenRouterTree=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var a=n[r];flattenNode([],t,a)}return t},flattenNode=function(e,t,r){if((e=e.slice()).push({id:r.id,path:r.path,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter}),0!==r.children.length)for(var n=0,a=r.children;n<a.length;n++){var o=a[n];flattenNode(e,t,o)}else t.push(e)},Router=function(){function e(e){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.ionRouteWillChange=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return e.prototype.componentWillLoad=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e,t,r;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(n){switch(n.label){case 0:return[4,searchNavNode(document.body)?Promise.resolve():new Promise((function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})}))];case 1:return n.sent(),[4,this.runGuards(this.getPath())];case 2:return!0===(e=n.sent())?[3,5]:"object"!=typeof e?[3,4]:(t=e.redirect,r=parsePath(t),this.setPath(r.segments,"root",r.queryString),[4,this.writeNavStateRoot(r.segments,"root")]);case 3:n.sent(),n.label=4;case 4:return[3,7];case 5:return[4,this.onRoutesChanged()];case 6:n.sent(),n.label=7;case 7:return[2]}}))}))},e.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_2__.n)(this.onRoutesChanged.bind(this),100))},e.prototype.onPopState=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e,t,r;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(n){switch(n.label){case 0:return e=this.historyDirection(),t=this.getPath(),[4,this.runGuards(t)];case 1:if(!0!==(r=n.sent())){if("object"!=typeof r)return[2,!1];t=parsePath(r.redirect).segments}return[2,this.writeNavStateRoot(t,e)]}}))}))},e.prototype.onBackButton=function(e){var t=this;e.detail.register(0,(function(e){t.back(),e()}))},e.prototype.canTransition=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(t){switch(t.label){case 0:return[4,this.runGuards()];case 1:return!0!==(e=t.sent())?"object"==typeof e?[2,e.redirect]:[2,!1]:[2,!0]}}))}))},e.prototype.push=function(e,t,r){return void 0===t&&(t="forward"),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var n,a;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(o){switch(o.label){case 0:return e.startsWith(".")&&(e=new URL(e,window.location.href).pathname),n=parsePath(e),[4,this.runGuards(n.segments)];case 1:if(!0!==(a=o.sent())){if("object"!=typeof a)return[2,!1];n=parsePath(a.redirect)}return this.setPath(n.segments,t,n.queryString),[2,this.writeNavStateRoot(n.segments,t,r)]}}))}))},e.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},e.prototype.printDebug=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(e){return function(e){console.group("[ion-core] ROUTES["+e.length+"]");for(var t=function(e){var t=[];e.forEach((function(e){return t.push.apply(t,e.path)}));var r=e.map((function(e){return e.id}));console.debug("%c "+generatePath(t),"font-weight: bold; padding-left: 20px","=>\t","("+r.join(", ")+")")},r=0,n=e;r<n.length;r++)t(n[r]);console.groupEnd()}(readRoutes(this.el)),function(e){console.group("[ion-core] REDIRECTS["+e.length+"]");for(var t=0,r=e;t<r.length;t++){var n=r[t];n.to&&console.debug("FROM: ","$c "+generatePath(n.from),"font-weight: bold"," TO: ","$c "+generatePath(n.to.segments),"font-weight: bold")}console.groupEnd()}(readRedirects(this.el)),[2]}))}))},e.prototype.navChanged=function(e){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var t,r,n,a,o,i;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(s){switch(s.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,readNavState(window.document.body)];case 1:return t=s.sent(),r=t.ids,n=t.outlet,a=readRoutes(this.el),(o=function(e,t){for(var r=null,n=0,a=e.map((function(e){return e.id})),o=0,i=t;o<i.length;o++){var s=i[o],u=matchesIDs(a,s);u>n&&(r=s,n=u)}return r?r.map((function(t,r){return{id:t.id,path:t.path,params:mergeParams(t.params,e[r]&&e[r].params)}})):null}(r,a))?(i=function(e){for(var t=[],r=0,n=e;r<n.length;r++)for(var a=n[r],o=0,i=a.path;o<i.length;o++){var s=i[o];if(":"===s[0]){var u=a.params&&a.params[s.slice(1)];if(!u)return null;t.push(u)}else""!==s&&t.push(s)}return t}(o))?(this.setPath(i,e),[4,this.safeWriteNavState(n,o,"root",i,null,r.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",r.map((function(e){return e.id}))),[2,!1]);case 2:return s.sent(),[2,!0]}}))}))},e.prototype.onRedirectChanged=function(){var e=this.getPath();e&&findRouteRedirect(e,readRedirects(this.el))&&this.writeNavStateRoot(e,"root")},e.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),"root")},e.prototype.historyDirection=function(){var e,t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,null===(e=t.document.location)||void 0===e?void 0:e.href));var r=t.history.state,n=this.lastState;return this.lastState=r,r>n||r>=n&&n>0?"forward":r<n?"back":"root"},e.prototype.writeNavStateRoot=function(e,t,r){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var n,a,o,i,s,u,h,c;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(f){return e?(n=readRedirects(this.el),a=findRouteRedirect(e,n),o=null,a&&(i=a.to,s=i.segments,u=i.queryString,this.setPath(s,t,u),o=a.from,e=s),h=readRoutes(this.el),(c=routerPathToChain(e,h))?[2,this.safeWriteNavState(document.body,c,t,e,o,0,r)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])}))}))},e.prototype.safeWriteNavState=function(e,t,r,n,a,o,i){return void 0===o&&(o=0),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var s,u,h;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(c){switch(c.label){case 0:return[4,this.lock()];case 1:s=c.sent(),u=!1,c.label=2;case 2:return c.trys.push([2,4,,5]),[4,this.writeNavState(e,t,r,n,a,o,i)];case 3:return u=c.sent(),[3,5];case 4:return h=c.sent(),console.error(h),[3,5];case 5:return s(),[2,u]}}))}))},e.prototype.lock=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var e,t;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(r){switch(r.label){case 0:return e=this.waitPromise,this.waitPromise=new Promise((function(e){return t=e})),void 0===e?[3,2]:[4,e];case 1:r.sent(),r.label=2;case 2:return[2,t]}}))}))},e.prototype.runGuards=function(e,t){return void 0===e&&(e=this.getPath()),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var r,n,a,o,i,s,u;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(h){switch(h.label){case 0:return void 0===t&&(t=parsePath(this.previousPath).segments),e&&t?(r=readRoutes(this.el),n=routerPathToChain(t,r),(a=n&&n[n.length-1].beforeLeave)?[4,a()]:[3,2]):[2,!0];case 1:return i=h.sent(),[3,3];case 2:i=!0,h.label=3;case 3:return!1===(o=i)||"object"==typeof o?[2,o]:(s=routerPathToChain(e,r),[2,!(u=s&&s[s.length-1].beforeEnter)||u()])}}))}))},e.prototype.writeNavState=function(e,t,r,n,a,o,i){return void 0===o&&(o=0),Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var s,u;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(h){switch(h.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(s=this.routeChangeEvent(n,a))&&this.ionRouteWillChange.emit(s),[4,writeNavState(e,t,r,o,!1,i)]);case 1:return u=h.sent(),this.busy=!1,s&&this.ionRouteDidChange.emit(s),[2,u]}}))}))},e.prototype.setPath=function(e,t,r){this.state++,writePath(window.history,this.root,this.useHash,e,t,this.state,r)},e.prototype.getPath=function(){return function(e,t,r){var n=parsePath(t).segments,a=r?e.hash.slice(1):e.pathname;return function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return null;return t.length===e.length?[""]:t.slice(e.length)}(n,parsePath(a).segments)}(window.location,this.root,this.useHash)},e.prototype.routeChangeEvent=function(e,t){var r=this.previousPath,n=generatePath(e);return this.previousPath=n,n===r?null:{from:r,redirectedFrom:t?generatePath(t):null,to:n}},Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.k)(this)},enumerable:!1,configurable:!0}),e}(),RouterLink=function(){function e(e){var t=this;Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.o)(this,e),this.routerDirection="forward",this.onClick=function(e){Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.d)(t.href,e,t.routerDirection,t.routerAnimation)}}return e.prototype.render=function(){var e,t=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_3__.b)(this),r={href:this.href,rel:this.rel,target:this.target};return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.c,{onClick:this.onClick,class:Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.color,(e={},e[t]=!0,e["ion-activatable"]=!0,e))},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("a",Object.assign({},r),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__.j)("slot",null)))},e}();RouterLink.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},938:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),hostContext=function(r,t){return null!==t.closest(r)},createColorClasses=function(r,t){var e;return"string"==typeof r&&r.length>0?Object.assign(((e={"ion-color":!0})["ion-color-"+r]=!0,e),t):t},getClassMap=function(r){var t={};return function(r){return void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter((function(r){return null!=r})).map((function(r){return r.trim()})).filter((function(r){return""!==r})):[]}(r).forEach((function(r){return t[r]=!0})),t},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(r,t,e,n){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var o;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(a){return null!=r&&"#"!==r[0]&&!SCHEME.test(r)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(r,e,n)]):[2,!1]}))}))}}}]);