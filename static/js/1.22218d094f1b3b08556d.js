webpackJsonp([1],{"/F6v":function(e,t,n){"use strict";var i=n("5t6O"),r=n("FPGH"),a=n("TMLl");t.now=function(){return a.performance&&a.performance.now?a.performance.now():i()-r.navigationStart}},"0xDb":function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return c});var i=n("//Fk"),r=n.n(i),a=n("M75F"),o=n.n(a),s=n("MxEV"),u=(n.n(s),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:600,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new r.a(function(i){setTimeout(function(){o()(document.documentElement,"scrollTop",e,t,"easeInOutSine",i)},n)})}),l=function(e){return e.toLowerCase().replace(" ","-")},c=function(e){return new Date(e).toString().split(" ").slice(0,4).join(" ").replace(/( \d+)$/,",$1")}},"2wza":function(e,t,n){"use strict";var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"post"}},[n("article",{staticClass:"post"},[n("header",{staticClass:"post__header"},[n("h2",{staticClass:"post__title"},[e._v(e._s(e.detail.title))]),e._v(" "),n("div",{staticClass:"post__subtitle"},[n("span",{staticClass:"date"},[e._v(e._s(e._f("formatTime")(e.detail.displayDate)))])])]),e._v(" "),n("section",{staticClass:"post__body rte",domProps:{innerHTML:e._s(e.detail.comments)}}),e._v(" "),e.loading?n("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)])},staticRenderFns:[]};t.a=i},"5t6O":function(e,t,n){"use strict";e.exports=Date.now||function(){return(new Date).getTime()}},"8i2B":function(e,t,n){"use strict";var i=n("7+uW"),r=n("XLE1");const a=`${n("J6wa").a.clsPrefix}spin-fullscreen`;r.a.newInstance=(e=>{const t=e||{},n=new i.default({data:Object.assign({},t,{}),render(e){let t="";return t=this.render?e(r.a,{props:{fix:!0,fullscreen:!0}},[this.render(e)]):e(r.a,{props:{size:"large",fix:!0,fullscreen:!0}}),e("div",{class:`${a} ${a}-wrapper`},[t])}}),o=n.$mount();document.body.appendChild(o.$el);const s=n.$children[0];return{show(){s.visible=!0},remove(e){s.visible=!1,setTimeout(function(){s.$parent.$destroy(),void 0!==document.getElementsByClassName(`${a}`)[0]&&document.body.removeChild(document.getElementsByClassName(`${a}`)[0]),e()},500)},component:s}}),t.a=r.a},"9bBU":function(e,t,n){n("mClu");var i=n("FeBl").Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},C4MV:function(e,t,n){e.exports={default:n("9bBU"),__esModule:!0}},DbWr:function(e,t,n){"use strict";var i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.fullscreenVisible?n("div",{class:e.classes},[n("div",{class:e.mainClasses},[n("div",{class:e.dotClasses},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])]),e._v(" "),n("div",{class:e.textClasses},[e._t("default")],2)])]):e._e()])},staticRenderFns:[]};t.a=i},Dk1v:function(e,t){e.exports={_from:"scrollto-with-animation@4.5.2",_id:"scrollto-with-animation@4.5.2",_inBundle:!1,_integrity:"sha1-WoS10aHtlDvlRiVULXcxk9bBGd4=",_location:"/scrollto-with-animation",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"scrollto-with-animation@4.5.2",name:"scrollto-with-animation",escapedName:"scrollto-with-animation",rawSpec:"4.5.2",saveSpec:null,fetchSpec:"4.5.2"},_requiredBy:["#DEV:/","#USER"],_resolved:"https://registry.npmjs.org/scrollto-with-animation/-/scrollto-with-animation-4.5.2.tgz",_shasum:"5a84b5d1a1ed943be54625542d773193d6c119de",_spec:"scrollto-with-animation@4.5.2",_where:"/Users/yuanchanglong/Research/chubao-web",author:{name:"David Sancho",email:"dsnxmoreno@gmail.com",url:"https://github.com/davesnx"},bugs:{url:"https://github.com/davesnx/scrollto-with-animation/issues"},bundleDependencies:!1,dependencies:{"animation-frame":"^0.3.0"},deprecated:!1,description:"Animated Scroll with requestAnimationFrame. For smooth animate scrollTo defining the easing, running at 60FPS and cross-browser",devDependencies:{"babel-cli":"^6.9.0","babel-loader":"^6.2.2","babel-preset-es2015":"^6.3.13","babel-preset-stage-2":"^6.3.13","jasmine-core":"^2.3.4","json-loader":"^0.5.4",karma:"^0.13.9","karma-chrome-launcher":"^0.2.1","karma-cli":"0.1.0","karma-coverage":"^0.5.3","karma-jasmine":"^0.3.6","karma-phantomjs-launcher":"^0.2.1","karma-sourcemap-loader":"^0.3.6","karma-spec-reporter":"0.0.22","karma-story-reporter":"^0.3.1","karma-webpack":"^1.7.0",phantomjs:"^1.9.18","pre-push":"^0.1.1",webpack:"^1.12.13"},files:["src","lib","dist","README.md"],homepage:"https://github.com/davesnx/scrollto-with-animation#readme",keywords:["animation","scrollTo","60fps","cross-browser","requestAnimationFrame","easeInQuad","browserify"],license:"MIT",main:"lib/index.js",name:"scrollto-with-animation","pre-commit":["test"],repository:{type:"git",url:"git+https://github.com/davesnx/scrollto-with-animation.git"},scripts:{build:"npm run clean && npm run compile:prod && npm run minify:prod",clean:"rm -rf dist/* && rm -rf lib/","compile:dev":"NODE_ENV=dev babel src --watch --out-dir lib","compile:prod":"NODE_ENV=prod babel src --out-dir lib","minify:dev":"NODE_ENV=dev webpack --watch","minify:prod":"NODE_ENV=prod webpack -p",prepublish:"npm run build",test:"NODE_ENV=prod karma start test/karma.config.js --single-run","test:dev":"NODE_ENV=prod karma start test/karma.config.js --auto-watch"},standard:{parser:"babel-eslint",global:["jasmine","it","describe","beforeEach","afterEach","expect","spyOn"]},version:"4.5.2"}},"E+8a":function(e,t,n){"use strict";var i=n("TMLl");try{i.top.name,i=i.top}catch(e){}t.request=i.requestAnimationFrame,t.cancel=i.cancelAnimationFrame||i.cancelRequestAnimationFrame,t.supported=!1;for(var r=["Webkit","Moz","ms","O"],a=0;a<r.length&&!t.request;a++)t.request=i[r[a]+"RequestAnimationFrame"],t.cancel=i[r[a]+"CancelAnimationFrame"]||i[r[a]+"CancelRequestAnimationFrame"];t.request&&t.request.call(null,function(){t.supported=!0})},FPGH:function(e,t,n){"use strict";var i=n("5t6O");t.navigationStart=i()},I1lA:function(e,t,n){"use strict";var i=n("E+8a"),r=n("5t6O"),a=n("/F6v"),o=n("TMLl"),s=i.request,u=i.cancel;function l(e){if(!(this instanceof l))return new l(e);e||(e={}),"number"==typeof e&&(e={frameRate:e}),null!=e.useNative||(e.useNative=!0),this.options=e,this.frameRate=e.frameRate||l.FRAME_RATE,this._frameLength=1e3/this.frameRate,this._isCustomFrameRate=this.frameRate!==l.FRAME_RATE,this._timeoutId=null,this._callbacks={},this._lastTickTime=0,this._tickCounter=0}e.exports=l,l.FRAME_RATE=60,l.shim=function(e){var t=new l(e);return o.requestAnimationFrame=function(e){return t.request(e)},o.cancelAnimationFrame=function(e){return t.cancel(e)},t},l.prototype.request=function(e){var t=this;if(++this._tickCounter,i.supported&&this.options.useNative&&!this._isCustomFrameRate)return s(e);if(!e)throw new TypeError("Not enough arguments");if(null==this._timeoutId){var n=this._frameLength+this._lastTickTime-r();n<0&&(n=0),this._timeoutId=setTimeout(function(){t._lastTickTime=r(),t._timeoutId=null,++t._tickCounter;var e=t._callbacks;for(var n in t._callbacks={},e)e[n]&&(i.supported&&t.options.useNative?s(e[n]):e[n](a.now()))},n)}return this._callbacks[this._tickCounter]=e,this._tickCounter},l.prototype.cancel=function(e){i.supported&&this.options.useNative&&u(e),delete this._callbacks[e]}},LIaf:function(e,t,n){"use strict";var i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"disqus_thread"}})},staticRenderFns:[]};t.a=i},M75F:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rAF=void 0;var i=o(n("XcWz")),r=o(n("ma6j")),a=n("Dk1v");function o(e){return e&&e.__esModule?e:{default:e}}var s=new r.default,u=a.name+"@"+a.version,l=u+": Transition not found - "+a.repository.url,c=u+": callback transition don't look like a valid equation - "+a.repository.url,d=u+": Transition isn't string or Function - "+a.repository.url,f="undefined"!=typeof document?document:{},m="undefined"!=typeof window?window:{},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"scrollTop",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"easeInQuad",o=arguments[5],u=void 0,m="scrollTop"===t?e.scrollTop:e.scrollLeft,h=n-m,p=+new Date,v=!0,b=void 0,g=void 0;if("string"==typeof a||null===a)g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"easeInQuad",t=i.default[e];if(void 0===t)throw new Error(l);return t}(a);else{if("function"!=typeof a)throw new Error(d);g=function(e){if(4!==e.length)throw new Error(c);return e}(a)}u=s.request(function i(){var a=+new Date,l=Math.floor(g(a-p,m,h,r));b&&n===e[t]?(v=!1,o&&(o("animation-cancel"),s.cancel(u))):(e[t]=l,b=l),a>p+r&&(e[t]=n,v=!1,o&&(o("animation-end"),s.cancel(u))),v&&(u=s.request(i))})};m!=={}&&(m.scrollToWithAnimation=h),t.default=h,t.rAF=s},MxEV:function(e,t){e.exports=function(e){return e.charAt(0).toUpperCase()+e.substring(1)},e.exports.words=function(e){return e.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g,function(e){return e.toUpperCase()})}},Phro:function(e,t,n){"use strict";var i=n("8i2B");let r;function a(e){return r=r||i.a.newInstance({render:e})}i.a.show=function(e={}){var t;a("render"in(t=e)?t.render:void 0).show(t)},i.a.hide=function(){if(!r)return!1;a().remove(()=>{r=null})},t.a=i.a},Rm94:function(e,t,n){"use strict";t.d=function(e,t){for(let n=0;n<t.length;n++)if(e===t[n])return!0;return!1},t.c=function(e){return/^[A-Za-z]+$/.test(e)||/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/.test(e)||/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/.test(e)||/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/.test(e)},t.b=function(e){if(r)return 0;if(e||void 0===a){const e=document.createElement("div");e.style.width="100%",e.style.height="200px";const t=document.createElement("div"),n=t.style;n.position="absolute",n.top=0,n.left=0,n.pointerEvents="none",n.visibility="hidden",n.width="200px",n.height="150px",n.overflow="hidden",t.appendChild(e),document.body.appendChild(t);const i=e.offsetWidth;t.style.overflow="scroll";let r=e.offsetWidth;i===r&&(r=t.clientWidth),document.body.removeChild(t),a=i-r}return a},t.a=function(e,t,n){n="string"==typeof t?[t]:t;let i=e.$parent,r=i.$options.name;for(;i&&(!r||n.indexOf(r)<0);)(i=i.$parent)&&(r=i.$options.name);return i};var i=n("7+uW");n("XNC2");const r=i.default.prototype.$isServer;let a;!r&&document.addEventListener,!r&&document.removeEventListener},ScLh:function(e,t,n){"use strict";var i=n("Phro"),r=n("gyMJ"),a=n("d9EC"),o=n("0xDb");t.a={name:"blog-post",resource:"BlogPost",components:{VueDisqus:a.a,Spin:i.a},data:function(){return{postId:this.$route.params.id,detail:{},commentsReady:!1,loading:!0}},watch:{post:function(e,t){e!==t&&this.post&&(this.commentsReady=!1,this.$getResource("post",e).then(this.showComments))}},methods:{kebabify:o.a,prettyDate:o.b,showComments:function(){var e=this;setTimeout(function(){e.commentsReady=!0},1e3)},getNewsDetail:function(){var e=this;this.loading=!0,r.a.get("/content/getNewsDetail",{id:this.postId,typeId:"BJiXCENFH"}).then(function(t){var n=t.data;"success"===n.state&&(e.detail=n.news),e.loading=!1}).catch(function(){e.loading=!1})}},beforeMount:function(){this.getNewsDetail()}}},TMLl:function(e,t){var n;n="undefined"!=typeof window?window:"undefined"!=typeof self?self:this,e.exports=n},XBoT:function(e,t,n){"use strict";var i=n("bOdI"),r=n.n(i),a=n("J6wa"),o=n("Rm94"),s=n("g/3W"),u=a.a.clsPrefix+"spin";t.a={name:a.a.namePrefix+"Spin",mixins:[s.a],props:{size:{validator:function(e){return Object(o.d)(e,["small","large"])}},fix:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1}},data:function(){return{showText:!1,visible:!1}},computed:{classes:function(){var e;return[""+u,(e={},r()(e,u+"-"+this.size,!!this.size),r()(e,u+"-fix",this.fix),r()(e,u+"-show-text",this.showText),r()(e,u+"-fullscreen",this.fullscreen),e)]},mainClasses:function(){return u+"-main"},dotClasses:function(){return u+"-dot"},textClasses:function(){return u+"-text"},fullscreenVisible:function(){return!this.fullscreen||this.visible}},watch:{visible:function(e){e?this.addScrollEffect():this.removeScrollEffect()}},mounted:function(){this.showText=void 0!==this.$slots.default}}},XLE1:function(e,t,n){"use strict";var i=n("XBoT"),r=n("DbWr"),a=n("VU/8")(i.a,r.a,!1,null,null,null);t.a=a.exports},XNC2:function(e,t,n){"use strict";var i={th:3,mi:6,bi:9,tr:12},r={zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0,abbrLabel:{th:"k",mi:"m",bi:"b",tr:"t"}},a=1e12,o=1e9,s=1e6,u=1e3;function l(e,t,n,i){var r=e.toString().split("."),a=t-(i||0),o=2===r.length?Math.min(Math.max(r[1].length,a),t):a,s=Math.pow(10,o),u=(n(e+"e+"+o)/s).toFixed(o);if(i>t-o){var l=new RegExp("\\.?0{1,"+(i-(t-o))+"}$");u=u.replace(l,"")}return u}function c(e,t,n,r){var c=Math.abs(t),d=!1,f=!1,m="",h="",p=!1,v=void 0,b=void 0;n=n||"",t=t||0,~n.indexOf("(")?(d=!0,n=n.replace(/[(|)]/g,"")):(~n.indexOf("+")||~n.indexOf("-"))&&(b=~n.indexOf("+")?n.indexOf("+"):t<0?n.indexOf("-"):-1,n=n.replace(/[+|-]/g,"")),~n.indexOf("a")&&(v=!!(v=n.match(/a(k|m|b|t)?/))&&v[1],~n.indexOf(" a")&&(m=" "),n=n.replace(new RegExp(m+"a[kmbt]?"),""),c>=a&&!v||"t"===v?(m+=e.abbrLabel.tr,t/=a):c<a&&c>=o&&!v||"b"===v?(m+=e.abbrLabel.bi,t/=o):c<o&&c>=s&&!v||"m"===v?(m+=e.abbrLabel.mi,t/=s):(c<s&&c>=u&&!v||"k"===v)&&(m+=e.abbrLabel.th,t/=u)),~n.indexOf("[.]")&&(f=!0,n=n.replace("[.]","."));var g=t.toString().split(".")[0],w=n.split(".")[1],_=n.indexOf(","),y=(n.split(".")[0].split(",")[0].match(/0/g)||[]).length;if(w?(g=(h=~w.indexOf("[")?l(t,(w=(w=w.replace("]","")).split("["))[0].length+w[1].length,r,w[1].length):l(t,w.length,r)).split(".")[0],h=~h.indexOf(".")?"."+h.split(".")[1]:"",f&&0==+h.slice(1)&&(h="")):g=l(t,0,r),m&&!v&&+g>=1e3&&m!==i.trillion&&(g=""+ +g/1e3,m=i.million),~g.indexOf("-")&&(g=g.slice(1),p=!0),g.length<y)for(var x=y-g.length;x>0;x--)g="0"+g;_>-1&&(g=g.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),n.indexOf(".")||(g="");var E=g+h+(m||"");return d?E=(d&&p?"(":"")+E+(d&&p?")":""):b>=0?E=0===b?(p?"-":"+")+E:E+(p?"-":"+"):p&&(E="-"+E),E}function d(e,t){Object.keys(t).forEach(function(n){e[n]=t[n]})}var f={},m={};function h(e,t,n){return function(e,t,n){t=t||f.defaultFormat,n=n||Math.round;var i=void 0,r=void 0;if(0===e&&null!==f.zeroFormat)i=f.zeroFormat;else if(null===e&&null!==f.nullFormat)i=f.nullFormat;else{for(var a in m)if(m[a]&&t.match(m[a].regexp)){r=m[a].format;break}i=(r=r||c.bind(null,f))(e,t,n,h)}return i}(0===e||void 0===e?0:null===e||function(e){return"number"==typeof e&&isNaN(e)}(e)?null:"string"==typeof e?f.zeroFormat&&e===f.zeroFormat?0:f.nullFormat&&e===f.nullFormat||!e.replace(/[^0-9]+/g,"").length?null:+e:+e||null,t,n)}d(f,r),h.options=f,h._numberToFormat=c.bind(null,f),h.register=function(e,t){m[e]=t},h.unregister=function(e){m[e]=null},h.setOptions=function(e){d(f,e)},h.reset=function(){d(f,r)},h.register("percentage",{regexp:/%/,format:function(e,t,n,i){var r=~t.indexOf(" %")?" ":"",a=void 0;return i.options.scalePercentBy100&&(e*=100),t=t.replace(/\s?%/,""),~(a=i._numberToFormat(e,t,n)).indexOf(")")?((a=a.split("")).splice(-1,0,r+"%"),a=a.join("")):a=a+r+"%",a}}),t.a=h},XcWz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={linearTween:function(e,t,n,i){return n*e/i+t},easeInQuad:function(e,t,n,i){return n*(e/=i)*e+t},easeOutQuad:function(e,t,n,i){return-n*(e/=i)*(e-2)+t},easeInOutQuad:function(e,t,n,i){return(e/=i/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,i){return n*(e/=i)*e*e+t},easeOutCubic:function(e,t,n,i){return e/=i,n*(--e*e*e+1)+t},easeInOutCubic:function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,i){return n*(e/=i)*e*e*e+t},easeOutQuart:function(e,t,n,i){return e/=i,-n*(--e*e*e*e-1)+t},easeInOutQuart:function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e*e+t:-n/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,i){return n*(e/=i)*e*e*e*e+t},easeOutQuint:function(e,t,n,i){return e/=i,n*(--e*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e*e*e+t:n/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,i){return-n*Math.cos(e/i*(Math.PI/2))+n+t},easeOutSine:function(e,t,n,i){return n*Math.sin(e/i*(Math.PI/2))+t},easeInOutSine:function(e,t,n,i){return-n/2*(Math.cos(Math.PI*e/i)-1)+t},easeInExpo:function(e,t,n,i){return n*Math.pow(2,10*(e/i-1))+t},easeOutExpo:function(e,t,n,i){return n*(1-Math.pow(2,-10*e/i))+t},easeInOutExpo:function(e,t,n,i){return(e/=i/2)<1?n/2*Math.pow(2,10*(e-1))+t:(e--,n/2*(2-Math.pow(2,-10*e))+t)},easeInCirc:function(e,t,n,i){return e/=i,-n*(Math.sqrt(1-e*e)-1)+t},easeOutCirc:function(e,t,n,i){return e/=i,e--,n*Math.sqrt(1-e*e)+t},easeInOutCirc:function(e,t,n,i){return(e/=i/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+t:(e-=2,n/2*(Math.sqrt(1-e*e)+1)+t)}}},bOdI:function(e,t,n){"use strict";t.__esModule=!0;var i,r=n("C4MV"),a=(i=r)&&i.__esModule?i:{default:i};t.default=function(e,t,n){return t in e?(0,a.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},d9EC:function(e,t,n){"use strict";var i=n("gNKr"),r=n("LIaf"),a=n("VU/8")(i.a,r.a,!1,null,null,null);t.a=a.exports},"g/3W":function(e,t,n){"use strict";var i=n("Rm94");t.a={methods:{checkScrollBar(){let e=window.innerWidth;if(!e){const t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.bodyIsOverflowing&&(this.scrollBarWidth=Object(i.b)())},setScrollBar(){this.bodyIsOverflowing&&void 0!==this.scrollBarWidth&&(document.body.style.paddingRight=`${this.scrollBarWidth}px`)},resetScrollBar(){document.body.style.paddingRight=""},addScrollEffect(){this.checkScrollBar(),this.setScrollBar(),document.body.style.overflow="hidden"},removeScrollEffect(){document.body.style.overflow="",this.resetScrollBar()}}}},gNKr:function(e,t,n){"use strict";t.a={name:"vue-disqus",props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},mounted:function(){window.DISQUS?this.reset(window.DISQUS):this.init()},methods:{reset:function(e){var t=this;e.reset({reload:!0,config:function(){t.setBaseConfig(this)}})},init:function(){var e=this,t=this;window.disqus_config=function(){t.setBaseConfig(this)},setTimeout(function(){var t=document,n=t.createElement("script");n.setAttribute("id","embed-disqus"),n.setAttribute("data-timestamp",+new Date),n.type="text/javascript",n.async=!0,n.src="//"+e.shortname+".disqus.com/embed.js",(t.head||t.body).appendChild(n)},0)},setBaseConfig:function(e){var t=this;e.page.identifier=this.identifier||this.$route.path||window.location.pathname,e.page.url=this.url||this.$el.baseURI,this.title&&(e.page.title=this.title),this.remote_auth_s3&&(e.page.remote_auth_s3=this.remote_auth_s3),this.api_key&&(e.page.api_key=this.api_key),this.sso_config&&(e.sso=this.sso_config),this.language&&(e.language=this.language),e.callbacks.onReady=[function(){t.$emit("ready")}]}}}},kz3K:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("ScLh"),r=n("2wza"),a=n("VU/8")(i.a,r.a,!1,null,null,null);t.default=a.exports},mClu:function(e,t,n){var i=n("kM2E");i(i.S+i.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},ma6j:function(e,t,n){
/**
 * An even better animation frame.
 *
 * @copyright Oleg Slobodskoi 2016
 * @website https://github.com/kof/animationFrame
 * @license MIT
 */
e.exports=n("I1lA")}});