!function t(e,n,o){function s(i,u){if(!n[i]){if(!e[i]){var a="function"==typeof require&&require;if(!u&&a)return a(i,!0);if(r)return r(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var c=n[i]={exports:{}};e[i][0].call(c.exports,(function(t){return s(e[i][1][t]||t)}),c,c.exports,t,e,n,o)}return n[i].exports}for(var r="function"==typeof require&&require,i=0;i<o.length;i++)s(o[i]);return s}({1:[function(t,e,n){"use strict";e.exports={getWindow:function(){return window},getDocument:function(){return document},getNavigator:function(){return navigator}}},{}],2:[function(t,e,n){"use strict";var o=t(1),s=t(3);function r(){var t=o.getWindow(),e=o.getDocument(),n=o.getNavigator();return!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch||n.maxTouchPoints>0||n.msMaxTouchPoints>0)}e.exports=s(r),e.exports.original=r},{1:1,3:3}],3:[function(t,e,n){"use strict";e.exports=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}},{}],4:[function(t,e,n){},{}],5:[function(t,e,n){"use strict";var o=function(t,e){this._target=t,this._tests={},this.addTests(e)},s=o.prototype;s.addTests=function(t){this._tests=Object.assign(this._tests,t)},s._supports=function(t){return void 0!==this._tests[t]&&("function"==typeof this._tests[t]&&(this._tests[t]=this._tests[t]()),this._tests[t])},s._addClass=function(t,e){e=e||"no-",this._supports(t)?this._target.classList.add(t):this._target.classList.add(e+t)},s.htmlClass=function(){var t;for(t in this._target.classList.remove("no-js"),this._target.classList.add("js"),this._tests)this._tests.hasOwnProperty(t)&&this._addClass(t)},e.exports=o},{}],6:[function(t,e,n){"use strict";function o(t,e){this._target=t||document.body,this._attr=e||"data-focus-method",this._focusMethod=this._lastFocusMethod=!1,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onTouchStart=this._onTouchStart.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onWindowBlur=this._onWindowBlur.bind(this),this._bindEvents()}var s=o.prototype;s._bindEvents=function(){this._target.addEventListener("keydown",this._onKeyDown,!0),this._target.addEventListener("mousedown",this._onMouseDown,!0),this._target.addEventListener("touchstart",this._onTouchStart,!0),this._target.addEventListener("focus",this._onFocus,!0),this._target.addEventListener("blur",this._onBlur,!0),window.addEventListener("blur",this._onWindowBlur)},s._onKeyDown=function(t){this._focusMethod="key"},s._onMouseDown=function(t){"touch"!==this._focusMethod&&(this._focusMethod="mouse")},s._onTouchStart=function(t){this._focusMethod="touch"},s._onFocus=function(t){this._focusMethod||(this._focusMethod=this._lastFocusMethod),t.target.setAttribute(this._attr,this._focusMethod),this._lastFocusMethod=this._focusMethod,this._focusMethod=!1},s._onBlur=function(t){t.target.removeAttribute(this._attr)},s._onWindowBlur=function(t){this._focusMethod=!1},e.exports=o},{}],7:[function(t,e,n){"use strict";t(4);var o=t(5),s=t(8);e.exports=new o(document.documentElement,s),e.exports.FeatureDetect=o;var r=t(6);document.addEventListener&&document.addEventListener("DOMContentLoaded",(function(){new r}))},{4:4,5:5,6:6,8:8}],8:[function(t,e,n){"use strict";var o=t(2);e.exports={touch:o,"progressive-image":!0}},{2:2}],9:[function(t,e,n){"use strict";var o={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};e.exports=t(12)(o)},{12:12}],10:[function(t,e,n){"use strict";e.exports={browser:{safari:!1,chrome:!1,firefox:!1,ie:!1,opera:!1,android:!1,edge:!1,version:{name:"",major:0,minor:0,patch:0,documentMode:!1}},os:{osx:!1,ios:!1,android:!1,windows:!1,linux:!1,fireos:!1,chromeos:!1,version:{name:"",major:0,minor:0,patch:0}}}},{}],11:[function(t,e,n){"use strict";e.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(t){return t.ua.indexOf("Edge")>-1||"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"===t.ua}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(t){return t.ua.indexOf("Firefox")>-1&&-1===t.ua.indexOf("Opera")},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(t){return t.ua.indexOf("Safari")>-1&&t.vendor.indexOf("Apple")>-1},version:"Version"},{name:"ie",test:function(t){return t.ua.indexOf("IE")>-1||t.ua.indexOf("Trident")>-1},version:["MSIE","rv"],parseDocumentMode:function(){var t=!1;return document.documentMode&&(t=parseInt(document.documentMode,10)),t}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(t){return t.platform.indexOf("Win")>-1},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(t){return t.platform.indexOf("Mac")>-1}},{name:"ios",test:function(t){return t.ua.indexOf("iPhone")>-1||t.ua.indexOf("iPad")>-1},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(t){return t.platform.indexOf("Linux")>-1&&-1===t.ua.indexOf("Android")}},{name:"fireos",test:function(t){return t.ua.indexOf("Firefox")>-1&&t.ua.indexOf("Mobile")>-1},version:"rv"},{name:"android",userAgent:"Android"},{name:"chromeos",userAgent:"CrOS"}]}},{}],12:[function(t,e,n){"use strict";var o=t(10),s=t(11);function r(t,e){if("function"==typeof t.parseVersion)return t.parseVersion(e);var n,o=t.version||t.userAgent;"string"==typeof o&&(o=[o]);for(var s,r=o.length,i=0;i<r;i++)if((s=e.match((n=o[i],new RegExp(n+"[a-zA-Z\\s/:]+([0-9_.]+)","i"))))&&s.length>1)return s[1].replace(/_/g,".")}function i(t,e,n){for(var o,s,i=t.length,u=0;u<i;u++)if("function"==typeof t[u].test?!0===t[u].test(n)&&(o=t[u].name):n.ua.indexOf(t[u].userAgent)>-1&&(o=t[u].name),o){if(e[o]=!0,"string"==typeof(s=r(t[u],n.ua))){var a=s.split(".");e.version.name=s,a&&a.length>0&&(e.version.major=parseInt(a[0]||0),e.version.minor=parseInt(a[1]||0),e.version.patch=parseInt(a[2]||0))}else"edge"===o&&(e.version.name="12.0.0",e.version.major="12",e.version.minor="0",e.version.patch="0");return"function"==typeof t[u].parseDocumentMode&&(e.version.documentMode=t[u].parseDocumentMode()),e}return e}e.exports=function(t){var e={};return e.browser=i(s.browser,o.browser,t),e.os=i(s.os,o.os,t),e}},{10:10,11:11}],13:[function(t,e,n){"use strict";var o=t(7),s=t(9),r={initialize:function(){return o.addTests({"reduced-motion":window.matchMedia("(prefers-reduced-motion)").matches,ie:s.browser.ie,edge:s.browser.edge,"trial-support":function(){let t=!1;return s.os.osx?((s.os.version.major>10||10===s.os.version.major&&s.os.version.minor>14||10===s.os.version.major&&14===s.os.version.minor&&s.os.version.patch>=4)&&(s.browser.safari||s.browser.chrome)&&(t=!0),(s.os.version.major>10||10===s.os.version.major&&s.os.version.minor>=14)&&s.browser.firefox&&(t=!0)):s.os.ios&&(s.os.version.major>12||12===s.os.version.major&&s.os.version.minor>=2)&&(t=!0),t}()}),o.htmlClass(),this}};e.exports=r.initialize()},{7:7,9:9}]},{},[13]);