webpackJsonp([5],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_dashboard_vue__ = __webpack_require__(623);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14c955e6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dashboard_vue__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(50);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(653)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14c955e6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_dashboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14c955e6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dashboard_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_14c955e6_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dashboard_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14c955e6", Component.options)
  } else {
    hotAPI.reload("data-v-14c955e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_highcharts__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_highcharts__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var asyncData = {
    name: 'Tokyo',
    marker: {
        symbol: 'square'
    },
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
        y: 26.5,
        marker: {
            symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
        }
    }, 23.3, 18.3, 13.9, 9.6]
};
/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        VueHighcharts: __WEBPACK_IMPORTED_MODULE_0_vue2_highcharts___default.a
    },
    methods: {
        flag: function flag(category) {
            if (category == "christian" || category == "islamic") {
                return true;
            }
            return false;
        },
        load: function load() {
            var lineCharts = this.$refs.lineCharts;
            lineCharts.delegateMethod('showLoading', 'Loading...');
            setTimeout(function () {
                lineCharts.addSeries(asyncData);
                lineCharts.hideLoading();
            }, 2000);
        }
    },
    mounted: function mounted() {
        this.load();
        // this.$bot.getBots(0)
        //     .then((data) => {
        //         console.log(data.data.data);
        //         this.movies = data.data.data;
        //     })
    },
    data: function data() {
        return {
            visitors: {},
            adminUrl: '',
            options: {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'Monthly Average Temperature'
                },
                subtitle: {
                    text: 'Source: WorldClimate.com'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Temperature'
                    },
                    labels: {
                        formatter: function formatter() {
                            return this.value + '°';
                        }
                    }
                },
                tooltip: {
                    crosshairs: true,
                    shared: true
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    spline: {
                        marker: {
                            radius: 4,
                            lineColor: '#666666',
                            lineWidth: 1
                        }
                    }
                },
                series: []
            }
        };
    },

    computed: {}
});

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(654);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(107).default
var update = add("c975ac5a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-14c955e6\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-14c955e6\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)(undefined);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-14c955e6] {\n    margin-top: 10%;\n    background-color: transparent;\n}\nimg[data-v-14c955e6] {\n    height: 200px;\n    width: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueHighcharts"] = factory();
	else
		root["VueHighcharts"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debug__ = __webpack_require__(2);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    classname: {
      type: String,
      default: 'vue-highcharts'
    },
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    options: Object,
    highcharts: Object
  },
  name: 'VueHighcharts',
  data: function data() {
    return {
      chart: null
    };
  },
  mounted: function mounted() {
    if (!this.getChart() && this.options) {
      this.init();
    }
  },


  methods: {
    getChart: function getChart() {
      return this.chart;
    },
    addSeries: function addSeries(options) {
      this.delegateMethod('addSeries', options);
    },
    removeSeries: function removeSeries() {
      while (this.getChart().series.length !== 0) {
        this.getChart().series[0].remove();
      }
    },
    mergeOption: function mergeOption(options) {
      this.delegateMethod('update', options);
    },
    showLoading: function showLoading(txt) {
      this.getChart().showLoading(txt);
    },
    hideLoading: function hideLoading() {
      this.getChart().hideLoading();
    },
    delegateMethod: function delegateMethod(name) {
      var _getChart;

      if (!this.getChart()) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__debug__["a" /* warn */])('Cannot call [$name] before the chart is initialized. Set prop [options] first.', this);
        return;
      }

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_getChart = this.getChart())[name].apply(_getChart, args);
    },
    init: function init() {
      if (!this.getChart() && this.options) {
        var _Highcharts = this.highcharts || __WEBPACK_IMPORTED_MODULE_0_highcharts___default.a;
        if (_Highcharts.product == 'Highstock') {
          this.chart = new _Highcharts.stockChart(this.$el, this.options);
        } else {
          this.chart = new _Highcharts.Chart(this.$el, this.options);
        }
      }
    }
  },

  watch: {
    options: function options(_options) {
      if (!this.getChart() && _options) {
        this.init();
      } else {
        this.getChart().update(this.options);
      }
    }
  },

  beforeDestroy: function beforeDestroy() {
    if (this.getChart()) {
      this.getChart().destroy();
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return warn; });
/**
 * Created by superman on 17/2/15.
 */

// copy from vue/src/core/util/debug.js
//https://github.com/vuejs/vue/blob/dev/src/core/util/debug.js

var warn = function warn() {};

if (process.env.NODE_ENV !== 'production') {
    var hasConsole = typeof console !== 'undefined';

    warn = function warn(msg, vm) {
        if (hasConsole) {
            console.error('[Vue warn]: ' + msg + (vm ? formatLocation(formatComponentName(vm)) : ''));
        }
    };

    var formatComponentName = function formatComponentName(vm) {
        if (vm.$root === vm) {
            return 'root instance';
        }
        var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
        return name ? 'component <' + name + '>' : 'anonymous component';
    };

    var formatLocation = function formatLocation(str) {
        if (str === 'anonymous component') {
            str += '-use the "name" option for better debugging messages.';
        }
        return str;
    };
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7)))

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueHighcharts_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueHighcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VueHighcharts_vue__);
/**
 * Created by superman on 2017/2/19.
 */



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__VueHighcharts_vue___default.a);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\n.vue-highcharts {\n  width: 100%;\n  display: inline-block;\n  margin: 2em auto;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);\n  padding: 1.5em 0em;\n  background: #fff;\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
 Highcharts JS v6.0.6 (2018-02-05)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(S,L){"object"===typeof module&&module.exports?module.exports=S.document?L(S):L:S.Highcharts=L(S)})("undefined"!==typeof window?window:this,function(S){var L=function(){var a="undefined"===typeof S?window:S,B=a.document,H=a.navigator&&a.navigator.userAgent||"",G=B&&B.createElementNS&&!!B.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,n=/(edge|msie|trident)/i.test(H)&&!a.opera,l=-1!==H.indexOf("Firefox"),f=-1!==H.indexOf("Chrome"),t=l&&4>parseInt(H.split("Firefox/")[1],
10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",version:"6.0.6",deg2rad:2*Math.PI/360,doc:B,hasBidiBug:t,hasTouch:B&&void 0!==B.documentElement.ontouchstart,isMS:n,isWebKit:-1!==H.indexOf("AppleWebKit"),isFirefox:l,isChrome:f,isSafari:!f&&-1!==H.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(H),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:G,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},
charts:[]}}();(function(a){a.timers=[];var B=a.charts,H=a.doc,G=a.win;a.error=function(n,l){n=a.isNumber(n)?"Highcharts error #"+n+": www.highcharts.com/errors/"+n:n;if(l)throw Error(n);G.console&&console.log(n)};a.Fx=function(a,l,f){this.options=l;this.elem=a;this.prop=f};a.Fx.prototype={dSetter:function(){var a=this.paths[0],l=this.paths[1],f=[],t=this.now,q=a.length,v;if(1===t)f=this.toD;else if(q===l.length&&1>t)for(;q--;)v=parseFloat(a[q]),f[q]=isNaN(v)?l[q]:t*parseFloat(l[q]-v)+v;else f=l;this.elem.attr("d",
f,null,!0)},update:function(){var a=this.elem,l=this.prop,f=this.now,t=this.options.step;if(this[l+"Setter"])this[l+"Setter"]();else a.attr?a.element&&a.attr(l,f,null,!0):a.style[l]=f+this.unit;t&&t.call(a,f,this)},run:function(n,l,f){var t=this,q=t.options,v=function(a){return v.stopped?!1:t.step(a)},u=G.requestAnimationFrame||function(a){setTimeout(a,13)},b=function(){for(var d=0;d<a.timers.length;d++)a.timers[d]()||a.timers.splice(d--,1);a.timers.length&&u(b)};n===l?(delete q.curAnim[this.prop],
q.complete&&0===a.keys(q.curAnim).length&&q.complete.call(this.elem)):(this.startTime=+new Date,this.start=n,this.end=l,this.unit=f,this.now=this.start,this.pos=0,v.elem=this.elem,v.prop=this.prop,v()&&1===a.timers.push(v)&&u(b))},step:function(n){var l=+new Date,f,t=this.options,q=this.elem,v=t.complete,u=t.duration,b=t.curAnim;q.attr&&!q.element?n=!1:n||l>=u+this.startTime?(this.now=this.end,this.pos=1,this.update(),f=b[this.prop]=!0,a.objectEach(b,function(a){!0!==a&&(f=!1)}),f&&v&&v.call(q),n=
!1):(this.pos=t.easing((l-this.startTime)/u),this.now=this.start+(this.end-this.start)*this.pos,this.update(),n=!0);return n},initPath:function(n,l,f){function t(a){var b,c;for(g=a.length;g--;)b="M"===a[g]||"L"===a[g],c=/[a-zA-Z]/.test(a[g+3]),b&&c&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])}function q(a,b){for(;a.length<c;){a[0]=b[c-a.length];var d=a.slice(0,e);[].splice.apply(a,[0,0].concat(d));r&&(d=a.slice(a.length-e),[].splice.apply(a,[a.length,0].concat(d)),g--)}a[0]="M"}function v(a,b){for(var g=
(c-a.length)/e;0<g&&g--;)m=a.slice().splice(a.length/z-e,e*z),m[0]=b[c-e-g*e],k&&(m[e-6]=m[e-2],m[e-5]=m[e-1]),[].splice.apply(a,[a.length/z,0].concat(m)),r&&g--}l=l||"";var u,b=n.startX,d=n.endX,k=-1<l.indexOf("C"),e=k?7:3,c,m,g;l=l.split(" ");f=f.slice();var r=n.isArea,z=r?2:1,K;k&&(t(l),t(f));if(b&&d){for(g=0;g<b.length;g++)if(b[g]===d[0]){u=g;break}else if(b[0]===d[d.length-b.length+g]){u=g;K=!0;break}void 0===u&&(l=[])}l.length&&a.isNumber(u)&&(c=f.length+u*z*e,K?(q(l,f),v(f,l)):(q(f,l),v(l,
f)));return[l,f]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.merge=function(){var n,l=arguments,f,t={},q=function(f,n){"object"!==typeof f&&(f={});a.objectEach(n,function(b,d){!a.isObject(b,!0)||a.isClass(b)||a.isDOMElement(b)?f[d]=n[d]:f[d]=q(f[d]||{},b)});return f};!0===l[0]&&(t=l[1],l=Array.prototype.slice.call(l,2));f=l.length;for(n=0;n<f;n++)t=q(t,l[n]);return t};a.pInt=function(a,
l){return parseInt(a,l||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(n,l){return!!n&&"object"===typeof n&&(!l||!a.isArray(n))};a.isDOMElement=function(n){return a.isObject(n)&&"number"===typeof n.nodeType};a.isClass=function(n){var l=n&&n.constructor;return!(!a.isObject(n,!0)||a.isDOMElement(n)||!l||!l.name||"Object"===l.name)};a.isNumber=function(a){return"number"===
typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,l){for(var f=a.length;f--;)if(a[f]===l){a.splice(f,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(n,l,f){var t;a.isString(l)?a.defined(f)?n.setAttribute(l,f):n&&n.getAttribute&&(t=n.getAttribute(l)):a.defined(l)&&a.isObject(l)&&a.objectEach(l,function(a,f){n.setAttribute(f,a)});return t};a.splat=function(n){return a.isArray(n)?n:[n]};a.syncTimeout=function(a,l,f){if(l)return setTimeout(a,l,f);a.call(0,
f)};a.extend=function(a,l){var f;a||(a={});for(f in l)a[f]=l[f];return a};a.pick=function(){var a=arguments,l,f,t=a.length;for(l=0;l<t;l++)if(f=a[l],void 0!==f&&null!==f)return f};a.css=function(n,l){a.isMS&&!a.svg&&l&&void 0!==l.opacity&&(l.filter="alpha(opacity\x3d"+100*l.opacity+")");a.extend(n.style,l)};a.createElement=function(n,l,f,t,q){n=H.createElement(n);var v=a.css;l&&a.extend(n,l);q&&v(n,{padding:0,border:"none",margin:0});f&&v(n,f);t&&t.appendChild(n);return n};a.extendClass=function(n,
l){var f=function(){};f.prototype=new n;a.extend(f.prototype,l);return f};a.pad=function(a,l,f){return Array((l||2)+1-String(a).length).join(f||0)+a};a.relativeLength=function(a,l,f){return/%$/.test(a)?l*parseFloat(a)/100+(f||0):parseFloat(a)};a.wrap=function(a,l,f){var t=a[l];a[l]=function(){var a=Array.prototype.slice.call(arguments),v=arguments,u=this;u.proceed=function(){t.apply(u,arguments.length?arguments:v)};a.unshift(t);a=f.apply(this,a);u.proceed=null;return a}};a.formatSingle=function(n,
l,f){var t=/\.([0-9])/,q=a.defaultOptions.lang;/f$/.test(n)?(f=(f=n.match(t))?f[1]:-1,null!==l&&(l=a.numberFormat(l,f,q.decimalPoint,-1<n.indexOf(",")?q.thousandsSep:""))):l=(f||a.time).dateFormat(n,l);return l};a.format=function(n,l,f){for(var t="{",q=!1,v,u,b,d,k=[],e;n;){t=n.indexOf(t);if(-1===t)break;v=n.slice(0,t);if(q){v=v.split(":");u=v.shift().split(".");d=u.length;e=l;for(b=0;b<d;b++)e&&(e=e[u[b]]);v.length&&(e=a.formatSingle(v.join(":"),e,f));k.push(e)}else k.push(v);n=n.slice(t+1);t=(q=
!q)?"}":"{"}k.push(n);return k.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(n,l,f,t,q){var v,u=n;f=a.pick(f,1);v=n/f;l||(l=q?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===f?l=a.grep(l,function(a){return 0===a%1}):.1>=f&&(l=[1/f])));for(t=0;t<l.length&&!(u=l[t],q&&u*f>=n||!q&&v<=(l[t]+(l[t+1]||l[t]))/2);t++);return u=a.correctFloat(u*f,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,l){var f=
a.length,t,q;for(q=0;q<f;q++)a[q].safeI=q;a.sort(function(a,f){t=l(a,f);return 0===t?a.safeI-f.safeI:t});for(q=0;q<f;q++)delete a[q].safeI};a.arrayMin=function(a){for(var l=a.length,f=a[0];l--;)a[l]<f&&(f=a[l]);return f};a.arrayMax=function(a){for(var l=a.length,f=a[0];l--;)a[l]>f&&(f=a[l]);return f};a.destroyObjectProperties=function(n,l){a.objectEach(n,function(a,t){a&&a!==l&&a.destroy&&a.destroy();delete n[t]})};a.discardElement=function(n){var l=a.garbageBin;l||(l=a.createElement("div"));n&&l.appendChild(n);
l.innerHTML=""};a.correctFloat=function(a,l){return parseFloat(a.toPrecision(l||14))};a.setAnimation=function(n,l){l.renderer.globalAnimation=a.pick(n,l.options.chart.animation,!0)};a.animObject=function(n){return a.isObject(n)?a.merge(n):{duration:n?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(n,l,f,t){n=+n||0;l=+l;var q=a.defaultOptions.lang,v=(n.toString().split(".")[1]||"").split("e")[0].length,u,
b,d=n.toString().split("e");-1===l?l=Math.min(v,20):a.isNumber(l)?l&&d[1]&&0>d[1]&&(u=l+ +d[1],0<=u?(d[0]=(+d[0]).toExponential(u).split("e")[0],l=u):(d[0]=d[0].split(".")[0]||0,n=20>l?(d[0]*Math.pow(10,d[1])).toFixed(l):0,d[1]=0)):l=2;b=(Math.abs(d[1]?d[0]:n)+Math.pow(10,-Math.max(l,v)-1)).toFixed(l);v=String(a.pInt(b));u=3<v.length?v.length%3:0;f=a.pick(f,q.decimalPoint);t=a.pick(t,q.thousandsSep);n=(0>n?"-":"")+(u?v.substr(0,u)+t:"");n+=v.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+t);l&&(n+=f+b.slice(-l));
d[1]&&0!==+n&&(n+="e"+d[1]);return n};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(n,l,f){if("width"===l)return Math.min(n.offsetWidth,n.scrollWidth)-a.getStyle(n,"padding-left")-a.getStyle(n,"padding-right");if("height"===l)return Math.min(n.offsetHeight,n.scrollHeight)-a.getStyle(n,"padding-top")-a.getStyle(n,"padding-bottom");G.getComputedStyle||a.error(27,!0);if(n=G.getComputedStyle(n,void 0))n=n.getPropertyValue(l),a.pick(f,"opacity"!==l)&&(n=a.pInt(n));
return n};a.inArray=function(n,l){return(a.indexOfPolyfill||Array.prototype.indexOf).call(l,n)};a.grep=function(n,l){return(a.filterPolyfill||Array.prototype.filter).call(n,l)};a.find=Array.prototype.find?function(a,l){return a.find(l)}:function(a,l){var f,t=a.length;for(f=0;f<t;f++)if(l(a[f],f))return a[f]};a.map=function(a,l){for(var f=[],t=0,q=a.length;t<q;t++)f[t]=l.call(a[t],a[t],t,a);return f};a.keys=function(n){return(a.keysPolyfill||Object.keys).call(void 0,n)};a.reduce=function(n,l,f){return(a.reducePolyfill||
Array.prototype.reduce).call(n,l,f)};a.offset=function(a){var l=H.documentElement;a=a.parentElement?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(G.pageYOffset||l.scrollTop)-(l.clientTop||0),left:a.left+(G.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}};a.stop=function(n,l){for(var f=a.timers.length;f--;)a.timers[f].elem!==n||l&&l!==a.timers[f].prop||(a.timers[f].stopped=!0)};a.each=function(n,l,f){return(a.forEachPolyfill||Array.prototype.forEach).call(n,l,f)};a.objectEach=function(a,
l,f){for(var t in a)a.hasOwnProperty(t)&&l.call(f,a[t],t,a)};a.addEvent=function(n,l,f){var t,q,v=n.addEventListener||a.addEventListenerPolyfill;n.hcEvents&&!Object.prototype.hasOwnProperty.call(n,"hcEvents")&&(q={},a.objectEach(n.hcEvents,function(a,b){q[b]=a.slice(0)}),n.hcEvents=q);t=n.hcEvents=n.hcEvents||{};v&&v.call(n,l,f,!1);t[l]||(t[l]=[]);t[l].push(f);return function(){a.removeEvent(n,l,f)}};a.removeEvent=function(n,l,f){function t(b,k){var e=n.removeEventListener||a.removeEventListenerPolyfill;
e&&e.call(n,b,k,!1)}function q(){var b,k;n.nodeName&&(l?(b={},b[l]=!0):b=u,a.objectEach(b,function(a,b){if(u[b])for(k=u[b].length;k--;)t(b,u[b][k])}))}var v,u=n.hcEvents,b;u&&(l?(v=u[l]||[],f?(b=a.inArray(f,v),-1<b&&(v.splice(b,1),u[l]=v),t(l,f)):(q(),u[l]=[])):(q(),n.hcEvents={}))};a.fireEvent=function(n,l,f,t){var q;q=n.hcEvents;var v,u;f=f||{};if(H.createEvent&&(n.dispatchEvent||n.fireEvent))q=H.createEvent("Events"),q.initEvent(l,!0,!0),a.extend(q,f),n.dispatchEvent?n.dispatchEvent(q):n.fireEvent(l,
q);else if(q)for(q=q[l]||[],v=q.length,f.target||a.extend(f,{preventDefault:function(){f.defaultPrevented=!0},target:n,type:l}),l=0;l<v;l++)(u=q[l])&&!1===u.call(n,f)&&f.preventDefault();t&&!f.defaultPrevented&&t(f)};a.animate=function(n,l,f){var t,q="",v,u,b;a.isObject(f)||(b=arguments,f={duration:b[2],easing:b[3],complete:b[4]});a.isNumber(f.duration)||(f.duration=400);f.easing="function"===typeof f.easing?f.easing:Math[f.easing]||Math.easeInOutSine;f.curAnim=a.merge(l);a.objectEach(l,function(b,
k){a.stop(n,k);u=new a.Fx(n,f,k);v=null;"d"===k?(u.paths=u.initPath(n,n.d,l.d),u.toD=l.d,t=0,v=1):n.attr?t=n.attr(k):(t=parseFloat(a.getStyle(n,k))||0,"opacity"!==k&&(q="px"));v||(v=b);v&&v.match&&v.match("px")&&(v=v.replace(/px/g,""));u.run(t,v,q)})};a.seriesType=function(n,l,f,t,q){var v=a.getOptions(),u=a.seriesTypes;v.plotOptions[n]=a.merge(v.plotOptions[l],f);u[n]=a.extendClass(u[l]||function(){},t);u[n].prototype.type=n;q&&(u[n].prototype.pointClass=a.extendClass(a.Point,q));return u[n]};a.uniqueKey=
function(){var a=Math.random().toString(36).substring(2,9),l=0;return function(){return"highcharts-"+a+"-"+l++}}();G.jQuery&&(G.jQuery.fn.highcharts=function(){var n=[].slice.call(arguments);if(this[0])return n[0]?(new (a[a.isString(n[0])?n.shift():"Chart"])(this[0],n[0],n[1]),this):B[a.attr(this[0],"data-highcharts-chart")]})})(L);(function(a){var B=a.each,H=a.isNumber,G=a.map,n=a.merge,l=a.pInt;a.Color=function(f){if(!(this instanceof a.Color))return new a.Color(f);this.init(f)};a.Color.prototype=
{parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[l(a[1]),l(a[2]),l(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[l(a[1]),l(a[2]),l(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(f){var l,q,v,u;if((this.input=f=this.names[f&&f.toLowerCase?f.toLowerCase():""]||f)&&f.stops)this.stops=G(f.stops,
function(b){return new a.Color(b[1])});else if(f&&f.charAt&&"#"===f.charAt()&&(l=f.length,f=parseInt(f.substr(1),16),7===l?q=[(f&16711680)>>16,(f&65280)>>8,f&255,1]:4===l&&(q=[(f&3840)>>4|(f&3840)>>8,(f&240)>>4|f&240,(f&15)<<4|f&15,1])),!q)for(v=this.parsers.length;v--&&!q;)u=this.parsers[v],(l=u.regex.exec(f))&&(q=u.parse(l));this.rgba=q||[]},get:function(a){var f=this.input,q=this.rgba,l;this.stops?(l=n(f),l.stops=[].concat(l.stops),B(this.stops,function(q,b){l.stops[b]=[l.stops[b][0],q.get(a)]})):
l=q&&H(q[0])?"rgb"===a||!a&&1===q[3]?"rgb("+q[0]+","+q[1]+","+q[2]+")":"a"===a?q[3]:"rgba("+q.join(",")+")":f;return l},brighten:function(a){var f,q=this.rgba;if(this.stops)B(this.stops,function(q){q.brighten(a)});else if(H(a)&&0!==a)for(f=0;3>f;f++)q[f]+=l(255*a),0>q[f]&&(q[f]=0),255<q[f]&&(q[f]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,l){var q=this.rgba,f=a.rgba;f.length&&q&&q.length?(a=1!==f[3]||1!==q[3],l=(a?"rgba(":"rgb(")+Math.round(f[0]+(q[0]-
f[0])*(1-l))+","+Math.round(f[1]+(q[1]-f[1])*(1-l))+","+Math.round(f[2]+(q[2]-f[2])*(1-l))+(a?","+(f[3]+(q[3]-f[3])*(1-l)):"")+")"):l=a.input||"none";return l}};a.color=function(f){return new a.Color(f)}})(L);(function(a){var B,H,G=a.addEvent,n=a.animate,l=a.attr,f=a.charts,t=a.color,q=a.css,v=a.createElement,u=a.defined,b=a.deg2rad,d=a.destroyObjectProperties,k=a.doc,e=a.each,c=a.extend,m=a.erase,g=a.grep,r=a.hasTouch,z=a.inArray,K=a.isArray,y=a.isFirefox,I=a.isMS,A=a.isObject,D=a.isString,x=a.isWebKit,
E=a.merge,C=a.noop,J=a.objectEach,F=a.pick,h=a.pInt,p=a.removeEvent,M=a.stop,O=a.svg,N=a.SVG_NS,P=a.symbolSizes,Q=a.win;B=a.SVGElement=function(){return this};c(B.prototype,{opacity:1,SVG_NS:N,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,h){this.element="span"===h?v(h):k.createElementNS(this.SVG_NS,h);this.renderer=a},animate:function(w,h,b){h=a.animObject(F(h,this.renderer.globalAnimation,
!0));0!==h.duration?(b&&(h.complete=b),n(this,w,h)):(this.attr(w,null,b),h.step&&h.step.call(this));return this},colorGradient:function(w,h,b){var p=this.renderer,c,g,m,d,r,N,R,x,k,C,z=[],O;w.radialGradient?g="radialGradient":w.linearGradient&&(g="linearGradient");g&&(m=w[g],r=p.gradients,R=w.stops,C=b.radialReference,K(m)&&(w[g]=m={x1:m[0],y1:m[1],x2:m[2],y2:m[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===g&&C&&!u(m.gradientUnits)&&(d=m,m=E(m,p.getRadialAttr(C,d),{gradientUnits:"userSpaceOnUse"})),
J(m,function(a,w){"id"!==w&&z.push(w,a)}),J(R,function(a){z.push(a)}),z=z.join(","),r[z]?C=r[z].attr("id"):(m.id=C=a.uniqueKey(),r[z]=N=p.createElement(g).attr(m).add(p.defs),N.radAttr=d,N.stops=[],e(R,function(w){0===w[1].indexOf("rgba")?(c=a.color(w[1]),x=c.get("rgb"),k=c.get("a")):(x=w[1],k=1);w=p.createElement("stop").attr({offset:w[0],"stop-color":x,"stop-opacity":k}).add(N);N.stops.push(w)})),O="url("+p.url+"#"+C+")",b.setAttribute(h,O),b.gradient=z,w.toString=function(){return O})},applyTextOutline:function(w){var h=
this.element,b,p,c,g,d;-1!==w.indexOf("contrast")&&(w=w.replace(/contrast/g,this.renderer.getContrast(h.style.fill)));w=w.split(" ");p=w[w.length-1];if((c=w[0])&&"none"!==c&&a.svg){this.fakeTS=!0;w=[].slice.call(h.getElementsByTagName("tspan"));this.ySetter=this.xSetter;c=c.replace(/(^[\d\.]+)(.*?)$/g,function(a,w,h){return 2*w+h});for(d=w.length;d--;)b=w[d],"highcharts-text-outline"===b.getAttribute("class")&&m(w,h.removeChild(b));g=h.firstChild;e(w,function(a,w){0===w&&(a.setAttribute("x",h.getAttribute("x")),
w=h.getAttribute("y"),a.setAttribute("y",w||0),null===w&&h.setAttribute("y",0));a=a.cloneNode(1);l(a,{"class":"highcharts-text-outline",fill:p,stroke:p,"stroke-width":c,"stroke-linejoin":"round"});h.insertBefore(a,g)})}},attr:function(a,h,b,p){var w,c=this.element,e,g=this,m,d;"string"===typeof a&&void 0!==h&&(w=a,a={},a[w]=h);"string"===typeof a?g=(this[a+"Getter"]||this._defaultGetter).call(this,a,c):(J(a,function(w,h){m=!1;p||M(this,h);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(h)&&
(e||(this.symbolAttr(a),e=!0),m=!0);!this.rotation||"x"!==h&&"y"!==h||(this.doTransform=!0);m||(d=this[h+"Setter"]||this._defaultSetter,d.call(this,w,h,c),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(h)&&this.updateShadows(h,w,d))},this),this.afterSetters());b&&b.call(this);return g},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,h,b){for(var w=this.shadows,p=w.length;p--;)b.call(w[p],"height"===a?Math.max(h-
(w[p].cutHeight||0),0):"d"===a?this.d:h,a,w[p])},addClass:function(a,h){var w=this.attr("class")||"";-1===w.indexOf(a)&&(h||(a=(w+(w?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==z(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var w=this;e("x y r start end width height innerR anchorX anchorY".split(" "),function(h){w[h]=F(a[h],w[h])});w.attr({d:w.renderer.symbols[w.symbolName](w.x,
w.y,w.width,w.height,w)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,h){var w;h=h||a.strokeWidth||0;w=Math.round(h)%2/2;a.x=Math.floor(a.x||this.x||0)+w;a.y=Math.floor(a.y||this.y||0)+w;a.width=Math.floor((a.width||this.width||0)-2*w);a.height=Math.floor((a.height||this.height||0)-2*w);u(a.strokeWidth)&&(a.strokeWidth=h);return a},css:function(a){var w=this.styles,b={},p=this.element,e,g="",m,d=!w,r=["textOutline","textOverflow",
"width"];a&&a.color&&(a.fill=a.color);w&&J(a,function(a,h){a!==w[h]&&(b[h]=a,d=!0)});d&&(w&&(a=c(w,b)),e=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===p.nodeName.toLowerCase()&&h(a.width),this.styles=a,e&&!O&&this.renderer.forExport&&delete a.width,p.namespaceURI===this.SVG_NS?(m=function(a,w){return"-"+w.toLowerCase()},J(a,function(a,w){-1===z(w,r)&&(g+=w.replace(/([A-Z])/g,m)+":"+a+";")}),g&&l(p,"style",g)):q(p,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),
a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,h){var w=this,b=w.element;r&&"click"===a?(b.ontouchstart=function(a){w.touchEventFired=Date.now();a.preventDefault();h.call(b,a)},b.onclick=function(a){(-1===Q.navigator.userAgent.indexOf("Android")||1100<Date.now()-(w.touchEventFired||0))&&h.call(b,a)}):b["on"+a]=h;return this},setRadialReference:function(a){var w=this.renderer.gradients[this.element.gradient];
this.element.radialReference=a;w&&w.radAttr&&w.animate(this.renderer.getRadialAttr(a,w.radAttr));return this},translate:function(a,h){return this.attr({translateX:a,translateY:h})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,h=this.translateY||0,b=this.scaleX,p=this.scaleY,c=this.inverted,e=this.rotation,g=this.matrix,m=this.element;c&&(a+=this.width,h+=this.height);a=["translate("+a+","+h+")"];u(g)&&a.push("matrix("+g.join(",")+
")");c?a.push("rotate(90) scale(-1,1)"):e&&a.push("rotate("+e+" "+F(this.rotationOriginX,m.getAttribute("x"),0)+" "+F(this.rotationOriginY,m.getAttribute("y")||0)+")");(u(b)||u(p))&&a.push("scale("+F(b,1)+" "+F(p,1)+")");a.length&&m.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,h,b){var w,p,c,e,g={};p=this.renderer;c=p.alignedObjects;var d,r;if(a){if(this.alignOptions=a,this.alignByTranslate=h,!b||D(b))this.alignTo=
w=b||"renderer",m(c,this),c.push(this),b=null}else a=this.alignOptions,h=this.alignByTranslate,w=this.alignTo;b=F(b,p[w],p);w=a.align;p=a.verticalAlign;c=(b.x||0)+(a.x||0);e=(b.y||0)+(a.y||0);"right"===w?d=1:"center"===w&&(d=2);d&&(c+=(b.width-(a.width||0))/d);g[h?"translateX":"x"]=Math.round(c);"bottom"===p?r=1:"middle"===p&&(r=2);r&&(e+=(b.height-(a.height||0))/r);g[h?"translateY":"y"]=Math.round(e);this[this.placed?"animate":"attr"](g);this.placed=!0;this.alignAttr=g;return this},getBBox:function(a,
h){var w,p=this.renderer,g,m=this.element,d=this.styles,r,N=this.textStr,x,k=p.cache,C=p.cacheKeys,E;h=F(h,this.rotation);g=h*b;r=d&&d.fontSize;u(N)&&(E=N.toString(),-1===E.indexOf("\x3c")&&(E=E.replace(/[0-9]/g,"0")),E+=["",h||0,r,d&&d.width,d&&d.textOverflow].join());E&&!a&&(w=k[E]);if(!w){if(m.namespaceURI===this.SVG_NS||p.forExport){try{(x=this.fakeTS&&function(a){e(m.querySelectorAll(".highcharts-text-outline"),function(w){w.style.display=a})})&&x("none"),w=m.getBBox?c({},m.getBBox()):{width:m.offsetWidth,
height:m.offsetHeight},x&&x("")}catch(W){}if(!w||0>w.width)w={width:0,height:0}}else w=this.htmlGetBBox();p.isSVG&&(a=w.width,p=w.height,d&&"11px"===d.fontSize&&17===Math.round(p)&&(w.height=p=14),h&&(w.width=Math.abs(p*Math.sin(g))+Math.abs(a*Math.cos(g)),w.height=Math.abs(p*Math.cos(g))+Math.abs(a*Math.sin(g))));if(E&&0<w.height){for(;250<C.length;)delete k[C.shift()];k[E]||C.push(E);k[E]=w}}return w},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},
fadeOut:function(a){var w=this;w.animate({opacity:0},{duration:a||150,complete:function(){w.attr({y:-9999})}})},add:function(a){var w=this.renderer,h=this.element,b;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&w.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)b=this.zIndexSetter();b||(a?a.element:w.box).appendChild(h);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var w=a.parentNode;w&&w.removeChild(a)},destroy:function(){var a=
this,h=a.element||{},b=a.renderer.isSVG&&"SPAN"===h.nodeName&&a.parentGroup,p=h.ownerSVGElement,c=a.clipPath;h.onclick=h.onmouseout=h.onmouseover=h.onmousemove=h.point=null;M(a);c&&p&&(e(p.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var h=a.getAttribute("clip-path"),w=c.element.id;(-1<h.indexOf("(#"+w+")")||-1<h.indexOf('("#'+w+'")'))&&a.removeAttribute("clip-path")}),a.clipPath=c.destroy());if(a.stops){for(p=0;p<a.stops.length;p++)a.stops[p]=a.stops[p].destroy();a.stops=null}a.safeRemoveChild(h);
for(a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)h=b.parentGroup,a.safeRemoveChild(b.div),delete b.div,b=h;a.alignTo&&m(a.renderer.alignedObjects,a);J(a,function(h,w){delete a[w]});return null},shadow:function(a,h,b){var w=[],p,c,g=this.element,e,m,d,r;if(!a)this.destroyShadows();else if(!this.shadows){m=F(a.width,3);d=(a.opacity||.15)/m;r=this.parentInverted?"(-1,-1)":"("+F(a.offsetX,1)+", "+F(a.offsetY,1)+")";for(p=1;p<=m;p++)c=g.cloneNode(0),e=2*m+1-2*p,l(c,{isShadow:"true",stroke:a.color||
"#000000","stroke-opacity":d*p,"stroke-width":e,transform:"translate"+r,fill:"none"}),b&&(l(c,"height",Math.max(l(c,"height")-e,0)),c.cutHeight=e),h?h.element.appendChild(c):g.parentNode&&g.parentNode.insertBefore(c,g),w.push(c);this.shadows=w}return this},destroyShadows:function(){e(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=
F(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,h,b){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[h]!==a&&(b.setAttribute(h,a),this[h]=a)},dashstyleSetter:function(a){var w,b=this["stroke-width"];"inherit"===b&&(b=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash",
"8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(w=a.length;w--;)a[w]=h(a[w])*b;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,h,b){this[h]=a;b.setAttribute(h,a)},titleSetter:function(a){var h=this.element.getElementsByTagName("title")[0];h||(h=k.createElementNS(this.SVG_NS,
"title"),this.element.appendChild(h));h.firstChild&&h.removeChild(h.firstChild);h.appendChild(k.createTextNode(String(F(a),"").replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,h,b){"string"===typeof a?b.setAttribute(h,a):a&&this.colorGradient(a,h,b)},visibilitySetter:function(a,h,b){"inherit"===a?b.removeAttribute(h):this[h]!==a&&b.setAttribute(h,
a);this[h]=a},zIndexSetter:function(a,b){var p=this.renderer,w=this.parentGroup,c=(w||p).element||p.box,g,e=this.element,m,d,p=c===p.box;g=this.added;var r;u(a)&&(e.zIndex=a,a=+a,this[b]===a&&(g=!1),this[b]=a);if(g){(a=this.zIndex)&&w&&(w.handleZ=!0);b=c.childNodes;for(r=b.length-1;0<=r&&!m;r--)if(w=b[r],g=w.zIndex,d=!u(g),w!==e)if(0>a&&d&&!p&&!r)c.insertBefore(e,b[r]),m=!0;else if(h(g)<=a||d&&(!u(a)||0<=a))c.insertBefore(e,b[r+1]||null),m=!0;m||(c.insertBefore(e,b[p?3:0]||null),m=!0)}return m},_defaultSetter:function(a,
h,b){b.setAttribute(h,a)}});B.prototype.yGetter=B.prototype.xGetter;B.prototype.translateXSetter=B.prototype.translateYSetter=B.prototype.rotationSetter=B.prototype.verticalAlignSetter=B.prototype.rotationOriginXSetter=B.prototype.rotationOriginYSetter=B.prototype.scaleXSetter=B.prototype.scaleYSetter=B.prototype.matrixSetter=function(a,h){this[h]=a;this.doTransform=!0};B.prototype["stroke-widthSetter"]=B.prototype.strokeSetter=function(a,h,b){this[h]=a;this.stroke&&this["stroke-width"]?(B.prototype.fillSetter.call(this,
this.stroke,"stroke",b),b.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===h&&0===a&&this.hasStroke&&(b.removeAttribute("stroke"),this.hasStroke=!1)};H=a.SVGRenderer=function(){this.init.apply(this,arguments)};c(H.prototype,{Element:B,SVG_NS:N,init:function(a,h,b,p,c,g){var w;p=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(p));w=p.element;a.appendChild(w);l(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&l(w,"xmlns",
this.SVG_NS);this.isSVG=!0;this.box=w;this.boxWrapper=p;this.alignedObjects=[];this.url=(y||x)&&k.getElementsByTagName("base").length?Q.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(k.createTextNode("Created with Highcharts 6.0.6"));this.defs=this.createElement("defs").add();this.allowHTML=g;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(h,
b,!1);var e;y&&a.getBoundingClientRect&&(h=function(){q(a,{left:0,top:0});e=a.getBoundingClientRect();q(a,{left:Math.ceil(e.left)-e.left+"px",top:Math.ceil(e.top)-e.top+"px"})},h(),this.unSubPixelFix=G(Q,"resize",h))},getStyle:function(a){return this.style=c({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=
this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();d(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var h=new this.Element;h.init(this,a);return h},draw:C,getRadialAttr:function(a,h){return{cx:a[0]-a[2]/2+h.cx*a[2],cy:a[1]-a[2]/2+h.cy*a[2],r:h.r*a[2]}},getSpanWidth:function(a){return a.getBBox(!0).width},applyEllipsis:function(a,h,b,p){var c=a.rotation,w=b,g,e=0,m=
b.length,d=function(a){h.removeChild(h.firstChild);a&&h.appendChild(k.createTextNode(a))},r;a.rotation=0;w=this.getSpanWidth(a,h);if(r=w>p){for(;e<=m;)g=Math.ceil((e+m)/2),w=b.substring(0,g)+"\u2026",d(w),w=this.getSpanWidth(a,h),e===m?e=m+1:w>p?m=g-1:e=g;0===m&&d("")}a.rotation=c;return r},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var b=a.element,p=this,c=p.forExport,w=F(a.textStr,"").toString(),m=-1!==w.indexOf("\x3c"),d=b.childNodes,
r,x,C,E,y=l(b,"x"),M=a.styles,f=a.textWidth,P=M&&M.lineHeight,A=M&&M.textOutline,u=M&&"ellipsis"===M.textOverflow,D=M&&"nowrap"===M.whiteSpace,v=M&&M.fontSize,I,t,K=d.length,M=f&&!a.added&&this.box,Q=function(a){var c;c=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:v||p.style.fontSize||12;return P?h(P):p.fontMetrics(c,a.getAttribute("style")?a:b).h},n=function(a,h){J(p.escapes,function(b,p){h&&-1!==z(b,h)||(a=a.toString().replace(new RegExp(b,"g"),p))});return a};I=[w,u,D,P,A,v,f].join();
if(I!==a.textCache){for(a.textCache=I;K--;)b.removeChild(d[K]);m||A||u||f||-1!==w.indexOf(" ")?(r=/<.*class="([^"]+)".*>/,x=/<.*style="([^"]+)".*>/,C=/<.*href="([^"]+)".*>/,M&&M.appendChild(b),w=m?w.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[w],w=g(w,function(a){return""!==a}),e(w,function(h,w){var g,m=0;h=h.replace(/^\s+|\s+$/g,
"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");g=h.split("|||");e(g,function(h){if(""!==h||1===g.length){var e={},d=k.createElementNS(p.SVG_NS,"tspan"),z,M;r.test(h)&&(z=h.match(r)[1],l(d,"class",z));x.test(h)&&(M=h.match(x)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),l(d,"style",M));C.test(h)&&!c&&(l(d,"onclick",'location.href\x3d"'+h.match(C)[1]+'"'),l(d,"class","highcharts-anchor"),q(d,{cursor:"pointer"}));h=n(h.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==h){d.appendChild(k.createTextNode(h));
m?e.dx=0:w&&null!==y&&(e.x=y);l(d,e);b.appendChild(d);!m&&t&&(!O&&c&&q(d,{display:"block"}),l(d,"dy",Q(d)));if(f){e=h.replace(/([^\^])-/g,"$1- ").split(" ");z=1<g.length||w||1<e.length&&!D;var P=[],A,J=Q(d),F=a.rotation;for(u&&(E=p.applyEllipsis(a,d,h,f));!u&&z&&(e.length||P.length);)a.rotation=0,A=p.getSpanWidth(a,d),h=A>f,void 0===E&&(E=h),h&&1!==e.length?(d.removeChild(d.firstChild),P.unshift(e.pop())):(e=P,P=[],e.length&&!D&&(d=k.createElementNS(N,"tspan"),l(d,{dy:J,x:y}),M&&l(d,"style",M),b.appendChild(d)),
A>f&&(f=A)),e.length&&d.appendChild(k.createTextNode(e.join(" ").replace(/- /g,"-")));a.rotation=F}m++}}});t=t||b.childNodes.length}),E&&a.attr("title",n(a.textStr,["\x26lt;","\x26gt;"])),M&&M.removeChild(b),A&&a.applyTextOutline&&a.applyTextOutline(A)):b.appendChild(k.createTextNode(n(w)))}},getContrast:function(a){a=t(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,h,b,p,e,g,d,m,r){var w=this.label(a,h,b,r,null,null,null,null,"button"),x=0;w.attr(E({padding:8,r:2},e));var N,
k,C,z;e=E({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},e);N=e.style;delete e.style;g=E(e,{fill:"#e6e6e6"},g);k=g.style;delete g.style;d=E(e,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},d);C=d.style;delete d.style;m=E(e,{style:{color:"#cccccc"}},m);z=m.style;delete m.style;G(w.element,I?"mouseover":"mouseenter",function(){3!==x&&w.setState(1)});G(w.element,I?"mouseout":"mouseleave",function(){3!==x&&w.setState(x)});w.setState=
function(a){1!==a&&(w.state=x=a);w.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);w.attr([e,g,d,m][a||0]).css([N,k,C,z][a||0])};w.attr(e).css(c({cursor:"default"},N));return w.on("click",function(a){3!==x&&p.call(w,a)})},crispLine:function(a,h){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-h%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+h%2/2);return a},path:function(a){var h={fill:"none"};K(a)?h.d=a:A(a)&&c(h,
a);return this.createElement("path").attr(h)},circle:function(a,h,b){a=A(a)?a:{x:a,y:h,r:b};h=this.createElement("circle");h.xSetter=h.ySetter=function(a,h,b){b.setAttribute("c"+h,a)};return h.attr(a)},arc:function(a,h,b,p,c,e){A(a)?(p=a,h=p.y,b=p.r,a=p.x):p={innerR:p,start:c,end:e};a=this.symbol("arc",a,h,b,b,p);a.r=b;return a},rect:function(a,h,b,p,c,e){c=A(a)?a.r:c;var g=this.createElement("rect");a=A(a)?a:void 0===a?{}:{x:a,y:h,width:Math.max(b,0),height:Math.max(p,0)};void 0!==e&&(a.strokeWidth=
e,a=g.crisp(a));a.fill="none";c&&(a.r=c);g.rSetter=function(a,h,b){l(b,{rx:a,ry:a})};return g.attr(a)},setSize:function(a,h,b){var p=this.alignedObjects,c=p.length;this.width=a;this.height=h;for(this.boxWrapper.animate({width:a,height:h},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:F(b,!0)?void 0:0});c--;)p[c].align()},g:function(a){var h=this.createElement("g");return a?h.attr({"class":"highcharts-"+a}):h},image:function(a,h,b,p,e){var g={preserveAspectRatio:"none"};
1<arguments.length&&c(g,{x:h,y:b,width:p,height:e});g=this.createElement("image").attr(g);g.element.setAttributeNS?g.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):g.element.setAttribute("hc-svg-href",a);return g},symbol:function(a,h,b,p,g,d){var m=this,w,r=/^url\((.*?)\)$/,x=r.test(a),N=!x&&(this.symbols[a]?a:"circle"),C=N&&this.symbols[N],E=u(h)&&C&&C.call(this.symbols,Math.round(h),Math.round(b),p,g,d),z,O;C?(w=this.path(E),w.attr("fill","none"),c(w,{symbolName:N,x:h,y:b,width:p,
height:g}),d&&c(w,d)):x&&(z=a.match(r)[1],w=this.image(z),w.imgwidth=F(P[z]&&P[z].width,d&&d.width),w.imgheight=F(P[z]&&P[z].height,d&&d.height),O=function(){w.attr({width:w.width,height:w.height})},e(["width","height"],function(a){w[a+"Setter"]=function(a,h){var b={},p=this["img"+h],c="width"===h?"translateX":"translateY";this[h]=a;u(p)&&(this.element&&this.element.setAttribute(h,p),this.alignByTranslate||(b[c]=((this[h]||0)-p)/2,this.attr(b)))}}),u(h)&&w.attr({x:h,y:b}),w.isImg=!0,u(w.imgwidth)&&
u(w.imgheight)?O():(w.attr({width:0,height:0}),v("img",{onload:function(){var a=f[m.chartIndex];0===this.width&&(q(this,{position:"absolute",top:"-999em"}),k.body.appendChild(this));P[z]={width:this.width,height:this.height};w.imgwidth=this.width;w.imgheight=this.height;w.element&&O();this.parentNode&&this.parentNode.removeChild(this);m.imgCount--;if(!m.imgCount&&a&&a.onload)a.onload()},src:z}),this.imgCount++));return w},symbols:{circle:function(a,h,b,p){return this.arc(a+b/2,h+p/2,b/2,p/2,{start:0,
end:2*Math.PI,open:!1})},square:function(a,h,b,p){return["M",a,h,"L",a+b,h,a+b,h+p,a,h+p,"Z"]},triangle:function(a,h,b,p){return["M",a+b/2,h,"L",a+b,h+p,a,h+p,"Z"]},"triangle-down":function(a,h,b,p){return["M",a,h,"L",a+b,h,a+b/2,h+p,"Z"]},diamond:function(a,h,b,p){return["M",a+b/2,h,"L",a+b,h+p/2,a+b/2,h+p,a,h+p/2,"Z"]},arc:function(a,h,b,p,c){var e=c.start,g=c.r||b,d=c.r||p||b,m=c.end-.001;b=c.innerR;p=F(c.open,.001>Math.abs(c.end-c.start-2*Math.PI));var r=Math.cos(e),w=Math.sin(e),x=Math.cos(m),
m=Math.sin(m);c=.001>c.end-e-Math.PI?0:1;g=["M",a+g*r,h+d*w,"A",g,d,0,c,1,a+g*x,h+d*m];u(b)&&g.push(p?"M":"L",a+b*x,h+b*m,"A",b,b,0,c,0,a+b*r,h+b*w);g.push(p?"":"Z");return g},callout:function(a,h,b,p,c){var e=Math.min(c&&c.r||0,b,p),g=e+6,d=c&&c.anchorX;c=c&&c.anchorY;var m;m=["M",a+e,h,"L",a+b-e,h,"C",a+b,h,a+b,h,a+b,h+e,"L",a+b,h+p-e,"C",a+b,h+p,a+b,h+p,a+b-e,h+p,"L",a+e,h+p,"C",a,h+p,a,h+p,a,h+p-e,"L",a,h+e,"C",a,h,a,h,a+e,h];d&&d>b?c>h+g&&c<h+p-g?m.splice(13,3,"L",a+b,c-6,a+b+6,c,a+b,c+6,a+b,
h+p-e):m.splice(13,3,"L",a+b,p/2,d,c,a+b,p/2,a+b,h+p-e):d&&0>d?c>h+g&&c<h+p-g?m.splice(33,3,"L",a,c+6,a-6,c,a,c-6,a,h+e):m.splice(33,3,"L",a,p/2,d,c,a,p/2,a,h+e):c&&c>p&&d>a+g&&d<a+b-g?m.splice(23,3,"L",d+6,h+p,d,h+p+6,d-6,h+p,a+e,h+p):c&&0>c&&d>a+g&&d<a+b-g&&m.splice(3,3,"L",d-6,h,d,h-6,d+6,h,b-e,h);return m}},clipRect:function(h,b,p,c){var e=a.uniqueKey(),g=this.createElement("clipPath").attr({id:e}).add(this.defs);h=this.rect(h,b,p,c,0).add(g);h.id=e;h.clipPath=g;h.count=0;return h},text:function(a,
h,b,p){var c={};if(p&&(this.allowHTML||!this.forExport))return this.html(a,h,b);c.x=Math.round(h||0);b&&(c.y=Math.round(b));if(a||0===a)c.text=a;a=this.createElement("text").attr(c);p||(a.xSetter=function(a,h,b){var p=b.getElementsByTagName("tspan"),c,e=b.getAttribute(h),g;for(g=0;g<p.length;g++)c=p[g],c.getAttribute(h)===e&&c.setAttribute(h,a);b.setAttribute(h,a)});return a},fontMetrics:function(a,b){a=a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?h(a):/em/.test(a)?
parseFloat(a)*(b?this.fontMetrics(null,b.parentNode).f:16):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,h,p){var c=a;h&&p&&(c=Math.max(c*Math.cos(h*b),4));return{x:-a/3*Math.sin(h*b),y:c}},label:function(h,b,g,d,m,r,x,N,C){var w=this,k=w.g("button"!==C&&"label"),z=k.text=w.text("",0,0,x).attr({zIndex:1}),O,M,y=0,f=3,q=0,P,A,l,J,F,D={},v,I,t=/^url\((.*?)\)$/.test(d),K=t,Q,n,R,T;C&&k.addClass("highcharts-"+C);K=t;Q=function(){return(v||0)%2/2};n=function(){var a=
z.element.style,h={};M=(void 0===P||void 0===A||F)&&u(z.textStr)&&z.getBBox();k.width=(P||M.width||0)+2*f+q;k.height=(A||M.height||0)+2*f;I=f+w.fontMetrics(a&&a.fontSize,z).b;K&&(O||(k.box=O=w.symbols[d]||t?w.symbol(d):w.rect(),O.addClass(("button"===C?"":"highcharts-label-box")+(C?" highcharts-"+C+"-box":"")),O.add(k),a=Q(),h.x=a,h.y=(N?-I:0)+a),h.width=Math.round(k.width),h.height=Math.round(k.height),O.attr(c(h,D)),D={})};R=function(){var a=q+f,h;h=N?0:I;u(P)&&M&&("center"===F||"right"===F)&&(a+=
{center:.5,right:1}[F]*(P-M.width));if(a!==z.x||h!==z.y)z.attr("x",a),void 0!==h&&z.attr("y",h);z.x=a;z.y=h};T=function(a,h){O?O.attr(a,h):D[a]=h};k.onAdd=function(){z.add(k);k.attr({text:h||0===h?h:"",x:b,y:g});O&&u(m)&&k.attr({anchorX:m,anchorY:r})};k.widthSetter=function(h){P=a.isNumber(h)?h:null};k.heightSetter=function(a){A=a};k["text-alignSetter"]=function(a){F=a};k.paddingSetter=function(a){u(a)&&a!==f&&(f=k.padding=a,R())};k.paddingLeftSetter=function(a){u(a)&&a!==q&&(q=a,R())};k.alignSetter=
function(a){a={left:0,center:.5,right:1}[a];a!==y&&(y=a,M&&k.attr({x:l}))};k.textSetter=function(a){void 0!==a&&z.textSetter(a);n();R()};k["stroke-widthSetter"]=function(a,h){a&&(K=!0);v=this["stroke-width"]=a;T(h,a)};k.strokeSetter=k.fillSetter=k.rSetter=function(a,h){"r"!==h&&("fill"===h&&a&&(K=!0),k[h]=a);T(h,a)};k.anchorXSetter=function(a,h){m=k.anchorX=a;T(h,Math.round(a)-Q()-l)};k.anchorYSetter=function(a,h){r=k.anchorY=a;T(h,a-J)};k.xSetter=function(a){k.x=a;y&&(a-=y*((P||M.width)+2*f));l=
Math.round(a);k.attr("translateX",l)};k.ySetter=function(a){J=k.y=Math.round(a);k.attr("translateY",J)};var U=k.css;return c(k,{css:function(a){if(a){var h={};a=E(a);e(k.textProps,function(b){void 0!==a[b]&&(h[b]=a[b],delete a[b])});z.css(h)}return U.call(k,a)},getBBox:function(){return{width:M.width+2*f,height:M.height+2*f,x:M.x-f,y:M.y-f}},shadow:function(a){a&&(n(),O&&O.shadow(a));return k},destroy:function(){p(k.element,"mouseenter");p(k.element,"mouseleave");z&&(z=z.destroy());O&&(O=O.destroy());
B.prototype.destroy.call(k);k=w=n=R=T=null}})}});a.Renderer=H})(L);(function(a){var B=a.attr,H=a.createElement,G=a.css,n=a.defined,l=a.each,f=a.extend,t=a.isFirefox,q=a.isMS,v=a.isWebKit,u=a.pick,b=a.pInt,d=a.SVGRenderer,k=a.win,e=a.wrap;f(a.SVGElement.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=f(this.styles,a);G(this.element,
a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,e=this.element,g=this.translateX||0,d=this.translateY||0,k=this.x||0,f=this.y||0,y=this.textAlign||"left",q={left:0,center:.5,right:1}[y],A=this.styles,D=A&&A.whiteSpace;G(e,{marginLeft:g,marginTop:d});this.shadows&&l(this.shadows,function(a){G(a,{marginLeft:g+1,marginTop:d+1})});this.inverted&&l(e.childNodes,
function(b){a.invertChild(b,e)});if("SPAN"===e.tagName){var A=this.rotation,x=this.textWidth&&b(this.textWidth),E=[A,y,e.innerHTML,this.textAlign].join(),C;(C=x!==this.oldTextWidth)&&!(C=x>this.oldTextWidth)&&((C=this.textPxLength)||(G(e,{width:"",whiteSpace:D||"nowrap"}),C=e.offsetWidth),C=C>x);C&&/[ \-]/.test(e.textContent||e.innerText)&&(G(e,{width:x+"px",display:"block",whiteSpace:D||"normal"}),this.oldTextWidth=x);E!==this.cTT&&(D=a.fontMetrics(e.style.fontSize).b,n(A)&&A!==(this.oldRotation||
0)&&this.setSpanRotation(A,q,D),this.getSpanCorrection(this.textPxLength||e.offsetWidth,D,q,A,y));G(e,{left:k+(this.xCorr||0)+"px",top:f+(this.yCorr||0)+"px"});this.cTT=E;this.oldRotation=A}}else this.alignOnAdd=!0},setSpanRotation:function(a,b,e){var c={},g=this.renderer.getTransformKey();c[g]=c.transform="rotate("+a+"deg)";c[g+(t?"Origin":"-origin")]=c.transformOrigin=100*b+"% "+e+"px";G(this.element,c)},getSpanCorrection:function(a,b,e){this.xCorr=-a*e;this.yCorr=-b}});f(d.prototype,{getTransformKey:function(){return q&&
!/Edge/.test(k.navigator.userAgent)?"-ms-transform":v?"-webkit-transform":t?"MozTransform":k.opera?"-o-transform":""},html:function(a,b,g){var c=this.createElement("span"),d=c.element,m=c.renderer,k=m.isSVG,q=function(a,b){l(["opacity","visibility"],function(c){e(a,c+"Setter",function(a,c,e,g){a.call(this,c,e,g);b[e]=c})})};c.textSetter=function(a){a!==d.innerHTML&&delete this.bBox;this.textStr=a;d.innerHTML=u(a,"");c.doTransform=!0};k&&q(c,c.element.style);c.xSetter=c.ySetter=c.alignSetter=c.rotationSetter=
function(a,b){"align"===b&&(b="textAlign");c[b]=a;c.doTransform=!0};c.attr({text:a,x:Math.round(b),y:Math.round(g)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});d.style.whiteSpace="nowrap";c.css=c.htmlCss;c.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};k&&(c.add=function(a){var b,e=m.box.parentNode,g=[];if(this.parentGroup=a){if(b=a.div,!b){for(;a;)g.push(a),a=a.parentGroup;l(g.reverse(),function(a){function d(h,
b){a[b]=h;"translateX"===b?m.left=h+"px":m.top=h+"px";a.doTransform=!0}var m,h=B(a.element,"class");h&&(h={className:h});b=a.div=a.div||H("div",h,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},b||e);m=b.style;f(a,{classSetter:function(a){return function(h){this.element.setAttribute("class",h);a.className=h}}(b),on:function(){g[0].div&&c.on.apply({element:g[0].div},arguments);return a},
translateXSetter:d,translateYSetter:d});q(a,m)})}}else b=e;b.appendChild(d);c.added=!0;c.alignOnAdd&&c.htmlUpdateTransform();return c});return c}})})(L);(function(a){var B=a.defined,H=a.each,G=a.extend,n=a.merge,l=a.pick,f=a.timeUnits,t=a.win;a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(f){var q=l(f&&f.useUTC,!0),u=this;this.options=f=n(!0,this.options||{},f);this.Date=f.Date||t.Date;this.timezoneOffset=(this.useUTC=q)&&f.timezoneOffset;this.getTimezoneOffset=
this.timezoneOffsetFunction();(this.variableTimezone=!(q&&!f.getTimezoneOffset&&!f.timezone))||this.timezoneOffset?(this.get=function(a,d){var b=d.getTime(),e=b-u.getTimezoneOffset(d);d.setTime(e);a=d["getUTC"+a]();d.setTime(b);return a},this.set=function(b,d,k){var e;if(-1!==a.inArray(b,["Milliseconds","Seconds","Minutes"]))d["set"+b](k);else e=u.getTimezoneOffset(d),e=d.getTime()-e,d.setTime(e),d["setUTC"+b](k),b=u.getTimezoneOffset(d),e=d.getTime()+b,d.setTime(e)}):q?(this.get=function(a,d){return d["getUTC"+
a]()},this.set=function(a,d,k){return d["setUTC"+a](k)}):(this.get=function(a,d){return d["get"+a]()},this.set=function(a,d,k){return d["set"+a](k)})},makeTime:function(f,v,u,b,d,k){var e,c,m;this.useUTC?(e=this.Date.UTC.apply(0,arguments),c=this.getTimezoneOffset(e),e+=c,m=this.getTimezoneOffset(e),c!==m?e+=m-c:c-36E5!==this.getTimezoneOffset(e-36E5)||a.isSafari||(e-=36E5)):e=(new this.Date(f,v,l(u,1),l(b,0),l(d,0),l(k,0))).getTime();return e},timezoneOffsetFunction:function(){var f=this,l=this.options,
u=t.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(l.timezone){if(u)return function(a){return 6E4*-u.tz(a,l.timezone).utcOffset()};a.error(25)}return this.useUTC&&l.getTimezoneOffset?function(a){return 6E4*l.getTimezoneOffset(a)}:function(){return 6E4*(f.timezoneOffset||0)}},dateFormat:function(f,l,u){if(!a.defined(l)||isNaN(l))return a.defaultOptions.lang.invalidDate||"";f=a.pick(f,"%Y-%m-%d %H:%M:%S");var b=this,d=new this.Date(l),k=this.get("Hours",d),
e=this.get("Day",d),c=this.get("Date",d),m=this.get("Month",d),g=this.get("FullYear",d),r=a.defaultOptions.lang,z=r.weekdays,q=r.shortWeekdays,y=a.pad,d=a.extend({a:q?q[e]:z[e].substr(0,3),A:z[e],d:y(c),e:y(c,2," "),w:e,b:r.shortMonths[m],B:r.months[m],m:y(m+1),y:g.toString().substr(2,2),Y:g,H:y(k),k:k,I:y(k%12||12),l:k%12||12,M:y(b.get("Minutes",d)),p:12>k?"AM":"PM",P:12>k?"am":"pm",S:y(d.getSeconds()),L:y(Math.round(l%1E3),3)},a.dateFormats);a.objectEach(d,function(a,c){for(;-1!==f.indexOf("%"+
c);)f=f.replace("%"+c,"function"===typeof a?a.call(b,l):a)});return u?f.substr(0,1).toUpperCase()+f.substr(1):f},getTimeTicks:function(a,v,u,b){var d=this,k=[],e={},c,m=new d.Date(v),g=a.unitRange,r=a.count||1,z;if(B(v)){d.set("Milliseconds",m,g>=f.second?0:r*Math.floor(d.get("Milliseconds",m)/r));g>=f.second&&d.set("Seconds",m,g>=f.minute?0:r*Math.floor(d.get("Seconds",m)/r));g>=f.minute&&d.set("Minutes",m,g>=f.hour?0:r*Math.floor(d.get("Minutes",m)/r));g>=f.hour&&d.set("Hours",m,g>=f.day?0:r*Math.floor(d.get("Hours",
m)/r));g>=f.day&&d.set("Date",m,g>=f.month?1:r*Math.floor(d.get("Date",m)/r));g>=f.month&&(d.set("Month",m,g>=f.year?0:r*Math.floor(d.get("Month",m)/r)),c=d.get("FullYear",m));g>=f.year&&d.set("FullYear",m,c-c%r);g===f.week&&d.set("Date",m,d.get("Date",m)-d.get("Day",m)+l(b,1));c=d.get("FullYear",m);b=d.get("Month",m);var q=d.get("Date",m),y=d.get("Hours",m);v=m.getTime();d.variableTimezone&&(z=u-v>4*f.month||d.getTimezoneOffset(v)!==d.getTimezoneOffset(u));m=m.getTime();for(v=1;m<u;)k.push(m),m=
g===f.year?d.makeTime(c+v*r,0):g===f.month?d.makeTime(c,b+v*r):!z||g!==f.day&&g!==f.week?z&&g===f.hour&&1<r?d.makeTime(c,b,q,y+v*r):m+g*r:d.makeTime(c,b,q+v*r*(g===f.day?1:7)),v++;k.push(m);g<=f.hour&&1E4>k.length&&H(k,function(a){0===a%18E5&&"000000000"===d.dateFormat("%H%M%S%L",a)&&(e[a]="day")})}k.info=G(a,{higherRanks:e,totalRange:g*r});return k}}})(L);(function(a){var B=a.color,H=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,
chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},
borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",
backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:B("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(B){a.defaultOptions=H(!0,a.defaultOptions,B);a.time.update(H(a.defaultOptions.global,
a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(H(a.defaultOptions.global,a.defaultOptions.time));a.dateFormat=function(B,n,l){return a.time.dateFormat(B,n,l)}})(L);(function(a){var B=a.correctFloat,H=a.defined,G=a.destroyObjectProperties,n=a.isNumber,l=a.merge,f=a.pick,t=a.deg2rad;a.Tick=function(a,f,l,b){this.axis=a;this.pos=f;this.type=l||"";this.isNewLabel=this.isNew=!0;l||
b||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,v=a.options,u=a.chart,b=a.categories,d=a.names,k=this.pos,e=v.labels,c=a.tickPositions,m=k===c[0],g=k===c[c.length-1],d=b?f(b[k],d[k],k):k,b=this.label,c=c.info,r;a.isDatetimeAxis&&c&&(r=v.dateTimeLabelFormats[c.higherRanks[k]||c.unitName]);this.isFirst=m;this.isLast=g;v=a.labelFormatter.call({axis:a,chart:u,isFirst:m,isLast:g,dateTimeLabelFormat:r,value:a.isLog?B(a.lin2log(d)):d,pos:k});if(H(b))b&&b.attr({text:v});else{if(this.label=
b=H(v)&&e.enabled?u.renderer.text(v,0,0,e.useHTML).css(l(e.style)).add(a.labelGroup):null)b.textPxLength=b.getBBox().width;this.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var l=this.axis,q=l.options.labels,b=a.x,d=l.chart.chartWidth,k=l.chart.spacing,e=f(l.labelLeft,Math.min(l.pos,k[3])),k=f(l.labelRight,Math.max(l.isRadial?0:l.pos+l.len,d-k[1])),c=this.label,m=this.rotation,g={left:0,center:.5,right:1}[l.labelAlign||
c.attr("align")],r=c.getBBox().width,z=l.getSlotWidth(),K=z,y=1,I,A={};if(m||!1===q.overflow)0>m&&b-g*r<e?I=Math.round(b/Math.cos(m*t)-e):0<m&&b+g*r>k&&(I=Math.round((d-b)/Math.cos(m*t)));else if(d=b+(1-g)*r,b-g*r<e?K=a.x+K*(1-g)-e:d>k&&(K=k-a.x+K*g,y=-1),K=Math.min(z,K),K<z&&"center"===l.labelAlign&&(a.x+=y*(z-K-g*(z-Math.min(r,K)))),r>K||l.autoRotation&&(c.styles||{}).width)I=K;I&&(A.width=I,(q.style||{}).textOverflow||(A.textOverflow="ellipsis"),c.css(A))},getPosition:function(a,f,l,b){var d=this.axis,
k=d.chart,e=b&&k.oldChartHeight||k.chartHeight;return{x:a?d.translate(f+l,null,null,b)+d.transB:d.left+d.offset+(d.opposite?(b&&k.oldChartWidth||k.chartWidth)-d.right-d.left:0),y:a?e-d.bottom+d.offset-(d.opposite?d.height:0):e-d.translate(f+l,null,null,b)-d.transB}},getLabelPosition:function(a,f,l,b,d,k,e,c){var m=this.axis,g=m.transA,r=m.reversed,z=m.staggerLines,q=m.tickRotCorr||{x:0,y:0},y=d.y,u=b||m.reserveSpaceDefault?0:-m.labelOffset*("center"===m.labelAlign?.5:1);H(y)||(y=0===m.side?l.rotation?
-8:-l.getBBox().height:2===m.side?q.y+8:Math.cos(l.rotation*t)*(q.y-l.getBBox(!1,0).height/2));a=a+d.x+u+q.x-(k&&b?k*g*(r?-1:1):0);f=f+y-(k&&!b?k*g*(r?1:-1):0);z&&(l=e/(c||1)%z,m.opposite&&(l=z-l-1),f+=m.labelOffset/z*l);return{x:a,y:Math.round(f)}},getMarkPath:function(a,f,l,b,d,k){return k.crispLine(["M",a,f,"L",a+(d?0:-l),f+(d?l:0)],b)},renderGridLine:function(a,f,l){var b=this.axis,d=b.options,k=this.gridLine,e={},c=this.pos,m=this.type,g=b.tickmarkOffset,r=b.chart.renderer,z=m?m+"Grid":"grid",
q=d[z+"LineWidth"],y=d[z+"LineColor"],d=d[z+"LineDashStyle"];k||(e.stroke=y,e["stroke-width"]=q,d&&(e.dashstyle=d),m||(e.zIndex=1),a&&(e.opacity=0),this.gridLine=k=r.path().attr(e).addClass("highcharts-"+(m?m+"-":"")+"grid-line").add(b.gridGroup));if(!a&&k&&(a=b.getPlotLinePath(c+g,k.strokeWidth()*l,a,!0)))k[this.isNew?"attr":"animate"]({d:a,opacity:f})},renderMark:function(a,l,u){var b=this.axis,d=b.options,k=b.chart.renderer,e=this.type,c=e?e+"Tick":"tick",m=b.tickSize(c),g=this.mark,r=!g,z=a.x;
a=a.y;var q=f(d[c+"Width"],!e&&b.isXAxis?1:0),d=d[c+"Color"];m&&(b.opposite&&(m[0]=-m[0]),r&&(this.mark=g=k.path().addClass("highcharts-"+(e?e+"-":"")+"tick").add(b.axisGroup),g.attr({stroke:d,"stroke-width":q})),g[r?"attr":"animate"]({d:this.getMarkPath(z,a,m[0],g.strokeWidth()*u,b.horiz,k),opacity:l}))},renderLabel:function(a,l,u,b){var d=this.axis,k=d.horiz,e=d.options,c=this.label,m=e.labels,g=m.step,d=d.tickmarkOffset,r=!0,z=a.x;a=a.y;c&&n(z)&&(c.xy=a=this.getLabelPosition(z,a,c,k,m,d,b,g),this.isFirst&&
!this.isLast&&!f(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!f(e.showLastLabel,1)?r=!1:!k||m.step||m.rotation||l||0===u||this.handleOverflow(a),g&&b%g&&(r=!1),r&&n(a.y)?(a.opacity=u,c[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(c.attr("y",-9999),this.isNewLabel=!0))},render:function(a,l,u){var b=this.axis,d=b.horiz,k=this.getPosition(d,this.pos,b.tickmarkOffset,l),e=k.x,c=k.y,b=d&&e===b.pos+b.len||!d&&c===b.pos?-1:1;u=f(u,1);this.isActive=!0;this.renderGridLine(l,u,b);this.renderMark(k,
u,b);this.renderLabel(k,l,u,a);this.isNew=!1},destroy:function(){G(this,this.axis)}}})(L);var V=function(a){var B=a.addEvent,H=a.animObject,G=a.arrayMax,n=a.arrayMin,l=a.color,f=a.correctFloat,t=a.defaultOptions,q=a.defined,v=a.deg2rad,u=a.destroyObjectProperties,b=a.each,d=a.extend,k=a.fireEvent,e=a.format,c=a.getMagnitude,m=a.grep,g=a.inArray,r=a.isArray,z=a.isNumber,K=a.isString,y=a.merge,I=a.normalizeTickInterval,A=a.objectEach,D=a.pick,x=a.removeEvent,E=a.splat,C=a.syncTimeout,J=a.Tick,F=function(){this.init.apply(this,
arguments)};a.extend(F.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",
style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",
textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,b){var h=b.isX,p=this;p.chart=a;p.horiz=a.inverted&&!p.isZAxis?!h:h;p.isXAxis=h;p.coll=p.coll||(h?"xAxis":"yAxis");p.opposite=b.opposite;p.side=b.side||(p.horiz?
p.opposite?0:2:p.opposite?1:3);p.setOptions(b);var c=this.options,e=c.type;p.labelFormatter=c.labels.formatter||p.defaultLabelFormatter;p.userOptions=b;p.minPixelPadding=0;p.reversed=c.reversed;p.visible=!1!==c.visible;p.zoomEnabled=!1!==c.zoomEnabled;p.hasNames="category"===e||!0===c.categories;p.categories=c.categories||p.hasNames;p.names=p.names||[];p.plotLinesAndBandsGroups={};p.isLog="logarithmic"===e;p.isDatetimeAxis="datetime"===e;p.positiveValuesOnly=p.isLog&&!p.allowNegativeLog;p.isLinked=
q(c.linkedTo);p.ticks={};p.labelEdge=[];p.minorTicks={};p.plotLinesAndBands=[];p.alternateBands={};p.len=0;p.minRange=p.userMinRange=c.minRange||c.maxZoom;p.range=c.range;p.offset=c.offset||0;p.stacks={};p.oldStacks={};p.stacksTouched=0;p.max=null;p.min=null;p.crosshair=D(c.crosshair,E(a.options.tooltip.crosshairs)[h?0:1],!1);b=p.options.events;-1===g(p,a.axes)&&(h?a.axes.splice(a.xAxis.length,0,p):a.axes.push(p),a[p.coll].push(p));p.series=p.series||[];a.inverted&&!p.isZAxis&&h&&void 0===p.reversed&&
(p.reversed=!0);A(b,function(a,h){B(p,h,a)});p.lin2log=c.linearToLogConverter||p.lin2log;p.isLog&&(p.val2lin=p.log2lin,p.lin2val=p.lin2log)},setOptions:function(a){this.options=y(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],y(t[this.coll],a))},defaultLabelFormatter:function(){var h=this.axis,b=this.value,c=h.chart.time,g=h.categories,d=this.dateTimeLabelFormat,
m=t.lang,r=m.numericSymbols,m=m.numericSymbolMagnitude||1E3,x=r&&r.length,k,f=h.options.labels.format,h=h.isLog?Math.abs(b):h.tickInterval;if(f)k=e(f,this,c);else if(g)k=b;else if(d)k=c.dateFormat(d,b);else if(x&&1E3<=h)for(;x--&&void 0===k;)c=Math.pow(m,x+1),h>=c&&0===10*b%c&&null!==r[x]&&0!==b&&(k=a.numberFormat(b/c,-1)+r[x]);void 0===k&&(k=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return k},getSeriesExtremes:function(){var a=this,p=a.chart;a.hasVisibleSeries=!1;a.dataMin=
a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();b(a.series,function(h){if(h.visible||!p.options.chart.ignoreHiddenSeries){var b=h.options,c=b.threshold,e;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=c&&(c=null);if(a.isXAxis)b=h.xData,b.length&&(h=n(b),e=G(b),z(h)||h instanceof Date||(b=m(b,z),h=n(b),e=G(b)),b.length&&(a.dataMin=Math.min(D(a.dataMin,b[0],h),h),a.dataMax=Math.max(D(a.dataMax,b[0],e),e)));else if(h.getExtremes(),e=h.dataMax,h=h.dataMin,q(h)&&q(e)&&
(a.dataMin=Math.min(D(a.dataMin,h),h),a.dataMax=Math.max(D(a.dataMax,e),e)),q(c)&&(a.threshold=c),!b.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,c,e,g,d){var h=this.linkedParent||this,p=1,m=0,r=e?h.oldTransA:h.transA;e=e?h.oldMin:h.min;var x=h.minPixelPadding;g=(h.isOrdinal||h.isBroken||h.isLog&&g)&&h.lin2val;r||(r=h.transA);c&&(p*=-1,m=h.len);h.reversed&&(p*=-1,m-=p*(h.sector||h.len));b?(a=(a*p+m-x)/r+e,g&&(a=h.lin2val(a))):(g&&(a=h.val2lin(a)),a=z(e)?p*(a-e)*
r+m+p*x+(z(d)?r*d:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,e,g){var h=this.chart,p=this.left,d=this.top,m,r,x=c&&h.oldChartHeight||h.chartHeight,k=c&&h.oldChartWidth||h.chartWidth,N;m=this.transB;var f=function(a,h,b){if(a<h||a>b)e?a=Math.min(Math.max(h,a),b):N=!0;return a};g=D(g,this.translate(a,null,null,c));g=Math.min(Math.max(-1E5,
g),1E5);a=c=Math.round(g+m);m=r=Math.round(x-g-m);z(g)?this.horiz?(m=d,r=x-this.bottom,a=c=f(a,p,p+this.width)):(a=p,c=k-this.right,m=r=f(m,d,d+this.height)):(N=!0,e=!1);return N&&!e?null:h.renderer.crispLine(["M",a,m,"L",c,r],b||1)},getLinearTickPositions:function(a,b,c){var h,p=f(Math.floor(b/a)*a);c=f(Math.ceil(c/a)*a);var e=[],g;f(p+a)===p&&(g=20);if(this.single)return[b];for(b=p;b<=c;){e.push(b);b=f(b+a,g);if(b===h)break;h=b}return e},getMinorTickInterval:function(){var a=this.options;return!0===
a.minorTicks?D(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,p=a.options,c=a.tickPositions,e=a.minorTickInterval,g=[],d=a.pointRangePadding||0,m=a.min-d,d=a.max+d,r=d-m;if(r&&r/e<a.len/3)if(a.isLog)b(this.paddedTicks,function(h,b,p){b&&g.push.apply(g,a.getLogTickPositions(e,p[b-1],p[b],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())g=g.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e),m,d,p.startOfWeek));
else for(p=m+(c[0]-m)%e;p<=d&&p!==g[0];p+=e)g.push(p);0!==g.length&&a.trimTicks(g);return g},adjustForMinRange:function(){var a=this.options,p=this.min,c=this.max,e,g,d,m,r,x,k,f;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(q(a.min)||q(a.max)?this.minRange=null:(b(this.series,function(a){x=a.xData;for(m=k=a.xIncrement?1:x.length-1;0<m;m--)if(r=x[m]-x[m-1],void 0===d||r<d)d=r}),this.minRange=Math.min(5*d,this.dataMax-this.dataMin)));c-p<this.minRange&&(g=this.dataMax-this.dataMin>=this.minRange,
f=this.minRange,e=(f-c+p)/2,e=[p-e,D(a.min,p-e)],g&&(e[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),p=G(e),c=[p+f,D(a.max,p+f)],g&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=n(c),c-p<f&&(e[0]=c-f,e[1]=D(a.min,c-f),p=G(e)));this.min=p;this.max=c},getClosest:function(){var a;this.categories?a=1:b(this.series,function(h){var b=h.closestPointRange,p=h.visible||!h.chart.options.chart.ignoreHiddenSeries;!h.noSharedTooltip&&q(b)&&p&&(a=q(a)?Math.min(a,b):b)});return a},nameToX:function(a){var h=
r(this.categories),b=h?this.categories:this.names,c=a.options.x,e;a.series.requireSorting=!1;q(c)||(c=!1===this.options.uniqueNames?a.series.autoIncrement():h?g(a.name,b):D(b["s"+a.name],-1));-1===c?h||(e=b.length):e=c;void 0!==e&&(this.names[e]=a.name,this.names["s"+a.name]=e);return e},updateNames:function(){var a=this,p=this.names,c=p.length;if(0<c){for(;c--;)delete p["s"+p[c]];p.length=0;this.minRange=this.userMinRange;b(this.series||[],function(h){h.xIncrement=null;if(!h.points||h.isDirtyData)h.processData(),
h.generatePoints();b(h.points,function(b,p){var c;b.options&&(c=a.nameToX(b),void 0!==c&&c!==b.x&&(b.x=c,h.xData[p]=c))})})}},setAxisTranslation:function(a){var h=this,c=h.max-h.min,e=h.axisPointRange||0,g,d=0,m=0,r=h.linkedParent,x=!!h.categories,k=h.transA,f=h.isXAxis;if(f||x||e)g=h.getClosest(),r?(d=r.minPointOffset,m=r.pointRangePadding):b(h.series,function(a){var b=x?1:f?D(a.options.pointRange,g,0):h.axisPointRange||0;a=a.options.pointPlacement;e=Math.max(e,b);h.single||(d=Math.max(d,K(a)?0:
b/2),m=Math.max(m,"on"===a?0:b))}),r=h.ordinalSlope&&g?h.ordinalSlope/g:1,h.minPointOffset=d*=r,h.pointRangePadding=m*=r,h.pointRange=Math.min(e,c),f&&(h.closestPointRange=g);a&&(h.oldTransA=k);h.translationSlope=h.transA=k=h.options.staticScale||h.len/(c+m||1);h.transB=h.horiz?h.left:h.bottom;h.minPixelPadding=k*d},minFromRange:function(){return this.max-this.range},setTickInterval:function(h){var p=this,e=p.chart,g=p.options,d=p.isLog,m=p.log2lin,r=p.isDatetimeAxis,x=p.isXAxis,C=p.isLinked,E=g.maxPadding,
l=g.minPadding,y=g.tickInterval,A=g.tickPixelInterval,J=p.categories,F=p.threshold,u=p.softThreshold,t,v,n,K;r||J||C||this.getTickAmount();n=D(p.userMin,g.min);K=D(p.userMax,g.max);C?(p.linkedParent=e[p.coll][g.linkedTo],e=p.linkedParent.getExtremes(),p.min=D(e.min,e.dataMin),p.max=D(e.max,e.dataMax),g.type!==p.linkedParent.options.type&&a.error(11,1)):(!u&&q(F)&&(p.dataMin>=F?(t=F,l=0):p.dataMax<=F&&(v=F,E=0)),p.min=D(n,t,p.dataMin),p.max=D(K,v,p.dataMax));d&&(p.positiveValuesOnly&&!h&&0>=Math.min(p.min,
D(p.dataMin,p.min))&&a.error(10,1),p.min=f(m(p.min),15),p.max=f(m(p.max),15));p.range&&q(p.max)&&(p.userMin=p.min=n=Math.max(p.dataMin,p.minFromRange()),p.userMax=K=p.max,p.range=null);k(p,"foundExtremes");p.beforePadding&&p.beforePadding();p.adjustForMinRange();!(J||p.axisPointRange||p.usePercentage||C)&&q(p.min)&&q(p.max)&&(m=p.max-p.min)&&(!q(n)&&l&&(p.min-=m*l),!q(K)&&E&&(p.max+=m*E));z(g.softMin)&&!z(p.userMin)&&(p.min=Math.min(p.min,g.softMin));z(g.softMax)&&!z(p.userMax)&&(p.max=Math.max(p.max,
g.softMax));z(g.floor)&&(p.min=Math.max(p.min,g.floor));z(g.ceiling)&&(p.max=Math.min(p.max,g.ceiling));u&&q(p.dataMin)&&(F=F||0,!q(n)&&p.min<F&&p.dataMin>=F?p.min=F:!q(K)&&p.max>F&&p.dataMax<=F&&(p.max=F));p.tickInterval=p.min===p.max||void 0===p.min||void 0===p.max?1:C&&!y&&A===p.linkedParent.options.tickPixelInterval?y=p.linkedParent.tickInterval:D(y,this.tickAmount?(p.max-p.min)/Math.max(this.tickAmount-1,1):void 0,J?1:(p.max-p.min)*A/Math.max(p.len,A));x&&!h&&b(p.series,function(a){a.processData(p.min!==
p.oldMin||p.max!==p.oldMax)});p.setAxisTranslation(!0);p.beforeSetTickPositions&&p.beforeSetTickPositions();p.postProcessTickInterval&&(p.tickInterval=p.postProcessTickInterval(p.tickInterval));p.pointRange&&!y&&(p.tickInterval=Math.max(p.pointRange,p.tickInterval));h=D(g.minTickInterval,p.isDatetimeAxis&&p.closestPointRange);!y&&p.tickInterval<h&&(p.tickInterval=h);r||d||y||(p.tickInterval=I(p.tickInterval,null,c(p.tickInterval),D(g.allowDecimals,!(.5<p.tickInterval&&5>p.tickInterval&&1E3<p.max&&
9999>p.max)),!!this.tickAmount));this.tickAmount||(p.tickInterval=p.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions;b=this.getMinorTickInterval();var e=a.tickPositioner,g=a.startOnTick,d=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&q(this.min)&&!this.tickAmount&&(parseInt(this.min,
10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,e&&(e=e.apply(this,[this.min,
this.max])))&&(this.tickPositions=b=e);this.paddedTicks=b.slice(0);this.trimTicks(b,g,d);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),c||e||this.adjustTickAmount())},trimTicks:function(a,b,c){var h=a[0],e=a[a.length-1],p=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==h)this.min=h;else for(;this.min-p>a[0];)a.shift();if(c)this.max=e;else for(;this.max+p<a[a.length-1];)a.pop();0===a.length&&q(h)&&!this.options.tickPositions&&a.push((e+h)/2)}},alignToOthers:function(){var a=
{},c,e=this.options;!1===this.chart.options.chart.alignTicks||!1===e.alignTicks||this.isLog||b(this.chart[this.coll],function(h){var b=h.options,b=[h.horiz?b.left:b.top,b.width,b.height,b.pane].join();h.series.length&&(a[b]?c=!0:a[b]=1)});return c},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!q(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=
b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,e=this.finalTickAmt,g=b&&b.length,d=D(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(g<c){for(;b.length<c;)b.length%2||this.min===d?b.push(f(b[b.length-1]+a)):b.unshift(f(b[0]-a));this.transA*=(g-1)/(c-1);this.min=b[0];this.max=b[b.length-1]}else g>c&&(this.tickInterval*=2,this.setTickPositions());if(q(e)){for(a=c=b.length;a--;)(3===e&&1===a%2||2>=e&&0<a&&a<c-1)&&b.splice(a,
1);this.finalTickAmt=void 0}}},setScale:function(){var a,c;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();c=this.len!==this.oldAxisLength;b(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});c||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=
this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=c||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,c,e,g,m){var h=this,p=h.chart;e=D(e,!0);b(h.series,function(a){delete a.kdTree});m=d(m,{min:a,max:c});k(h,"setExtremes",m,function(){h.userMin=a;h.userMax=c;h.eventArgs=m;e&&p.redraw(g)})},zoom:function(a,b){var h=this.dataMin,c=this.dataMax,e=this.options,g=Math.min(h,D(e.min,h)),e=Math.max(c,D(e.max,c));if(a!==this.min||
b!==this.max)this.allowZoomOutside||(q(h)&&(a<g&&(a=g),a>e&&(a=e)),q(c)&&(b<g&&(b=g),b>e&&(b=e))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,c=this.options,e=c.offsets||[0,0,0,0],g=this.horiz,d=this.width=Math.round(a.relativeLength(D(c.width,b.plotWidth-e[3]+e[1]),b.plotWidth)),m=this.height=Math.round(a.relativeLength(D(c.height,b.plotHeight-e[0]+e[2]),b.plotHeight)),r=this.top=Math.round(a.relativeLength(D(c.top,
b.plotTop+e[0]),b.plotHeight,b.plotTop)),c=this.left=Math.round(a.relativeLength(D(c.left,b.plotLeft+e[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-m-r;this.right=b.chartWidth-d-c;this.len=Math.max(g?d:m,0);this.pos=g?c:r},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?f(b(this.min)):this.min,max:a?f(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,h=this.lin2log,c=b?
h(this.min):this.min,b=b?h(this.max):this.max;null===a?a=c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(D(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,h=b[a+"Length"],c=D(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&h)return"inside"===b[a+"Position"]&&(h=-h),[h,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,c=this.horiz,e=this.tickInterval,g=e,d=this.len/(((this.categories?1:0)+this.max-this.min)/e),m,r=a.rotation,x=this.labelMetrics(),k,f=Number.MAX_VALUE,C,E=function(a){a/=d||1;a=1<a?Math.ceil(a):1;return a*e};c?(C=!a.staggerLines&&!a.step&&(q(r)?[r]:d<D(a.autoRotationLimit,80)&&a.autoRotation))&&b(C,function(a){var b;if(a===r||a&&-90<=a&&90>=a)k=E(Math.abs(x.h/Math.sin(v*a))),b=k+
Math.abs(a/360),b<f&&(f=b,m=a,g=k)}):a.step||(g=E(x.h));this.autoRotation=C;this.labelRotation=D(m,r);return g},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),g=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/e||!b&&(c.style&&parseInt(c.style.width,10)||g&&g-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,c=a.renderer,e=this.tickPositions,g=this.ticks,
d=this.options.labels,m=this.horiz,r=this.getSlotWidth(),x=Math.max(1,Math.round(r-2*(d.padding||5))),k={},f=this.labelMetrics(),C=d.style&&d.style.textOverflow,E,z,l=0,y;K(d.rotation)||(k.rotation=d.rotation||0);b(e,function(a){(a=g[a])&&a.label&&a.label.textPxLength>l&&(l=a.label.textPxLength)});this.maxLabelLength=l;if(this.autoRotation)l>x&&l>f.h?k.rotation=this.labelRotation:this.labelRotation=0;else if(r&&(E=x,!C))for(z="clip",x=e.length;!m&&x--;)if(y=e[x],y=g[y].label)y.styles&&"ellipsis"===
y.styles.textOverflow?y.css({textOverflow:"clip"}):y.textPxLength>r&&y.css({width:r+"px"}),y.getBBox().height>this.len/e.length-(f.h-f.f)&&(y.specificTextOverflow="ellipsis");k.rotation&&(E=l>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight,C||(z="ellipsis"));if(this.labelAlign=d.align||this.autoLabelAlign(this.labelRotation))k.align=this.labelAlign;b(e,function(a){var b=(a=g[a])&&a.label;b&&(b.attr(k),!E||d.style&&d.style.width||!(E<b.textPxLength||"SPAN"===b.element.tagName)||b.css({width:E,textOverflow:b.specificTextOverflow||
z}),delete b.specificTextOverflow,a.rotation=k.rotation)});this.tickRotCorr=c.rotCorr(f.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||q(this.min)&&q(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,h=this.horiz,c=this.opposite,e=this.options.title,g;this.axisTitle||((g=e.textAlign)||(g=(h?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[e.align]),
this.axisTitle=b.text(e.text,0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation||0,align:g}).addClass("highcharts-axis-title").css(e.style).add(this.axisGroup),this.axisTitle.isNew=!0);e.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new J(this,a)},getOffset:function(){var a=this,c=a.chart,e=c.renderer,g=a.options,d=a.tickPositions,m=a.ticks,r=a.horiz,x=a.side,k=c.inverted&&!a.isZAxis?
[1,0,3,2][x]:x,f,E,C=0,z,l=0,y=g.title,F=g.labels,J=0,u=c.axisOffset,c=c.clipOffset,t=[-1,1,1,-1][x],I=g.className,n=a.axisParent,v=this.tickSize("tick");f=a.hasData();a.showAxis=E=f||D(g.showEmpty,!0);a.staggerLines=a.horiz&&F.staggerLines;a.axisGroup||(a.gridGroup=e.g("grid").attr({zIndex:g.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(I||"")).add(n),a.axisGroup=e.g("axis").attr({zIndex:g.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(I||"")).add(n),a.labelGroup=
e.g("axis-labels").attr({zIndex:F.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(I||"")).add(n));f||a.isLinked?(b(d,function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),a.reserveSpaceDefault=0===x||2===x||{1:"left",3:"right"}[x]===a.labelAlign,D(F.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&b(d,function(a){J=Math.max(m[a].getLabelSize(),J)}),a.staggerLines&&(J*=a.staggerLines),a.labelOffset=J*(a.opposite?-1:1)):A(m,function(a,b){a.destroy();delete m[b]});
y&&y.text&&!1!==y.enabled&&(a.addTitle(E),E&&!1!==y.reserveSpace&&(a.titleOffset=C=a.axisTitle.getBBox()[r?"height":"width"],z=y.offset,l=q(z)?0:D(y.margin,r?5:10)));a.renderLine();a.offset=t*D(g.offset,u[x]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};e=0===x?-a.labelMetrics().h:2===x?a.tickRotCorr.y:0;l=Math.abs(J)+l;J&&(l=l-e+t*(r?D(F.y,a.tickRotCorr.y+8*t):F.x));a.axisTitleMargin=D(z,l);u[x]=Math.max(u[x],a.axisTitleMargin+C+t*a.offset,l,f&&d.length&&v?v[0]+t*a.offset:0);g=g.offset?0:2*Math.floor(a.axisLine.strokeWidth()/
2);c[k]=Math.max(c[k],g)},getLinePath:function(a){var b=this.chart,c=this.opposite,h=this.offset,e=this.horiz,g=this.left+(c?this.width:0)+h,h=b.chartHeight-this.bottom-(c?this.height:0)+h;c&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:g,e?h:this.top,"L",e?b.chartWidth-this.right:g,e?h:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,
"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,e=this.len,g=this.options.title,d=a?b:c,m=this.opposite,r=this.offset,x=g.x||0,k=g.y||0,f=this.axisTitle,E=this.chart.renderer.fontMetrics(g.style&&g.style.fontSize,f),f=Math.max(f.getBBox(null,0).height-E.h-1,0),e={low:d+(a?0:e),middle:d+e/2,high:d+(a?e:0)}[g.align],b=(a?c+this.height:b)+(a?1:-1)*(m?-1:1)*this.axisTitleMargin+[-f,f,E.f,-f][this.side];return{x:a?e+x:b+(m?this.width:
0)+r+x,y:a?b+k-(m?this.height:0)+r:e+k}},renderMinorTick:function(a){var b=this.chart.hasRendered&&z(this.oldMin),c=this.minorTicks;c[a]||(c[a]=new J(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,e=this.ticks,h=this.chart.hasRendered&&z(this.oldMin);if(!c||a>=this.min&&a<=this.max)e[a]||(e[a]=new J(this,a)),h&&e[a].isNew&&e[a].render(b,!0,.1),e[a].render(b)},render:function(){var c=this,e=c.chart,g=c.options,d=c.isLog,m=c.lin2log,
r=c.isLinked,x=c.tickPositions,k=c.axisTitle,f=c.ticks,E=c.minorTicks,l=c.alternateBands,y=g.stackLabels,F=g.alternateGridColor,q=c.tickmarkOffset,D=c.axisLine,u=c.showAxis,t=H(e.renderer.globalAnimation),I,n;c.labelEdge.length=0;c.overlap=!1;b([f,E,l],function(a){A(a,function(a){a.isActive=!1})});if(c.hasData()||r)c.minorTickInterval&&!c.categories&&b(c.getMinorTickPositions(),function(a){c.renderMinorTick(a)}),x.length&&(b(x,function(a,b){c.renderTick(a,b)}),q&&(0===c.min||c.single)&&(f[-1]||(f[-1]=
new J(c,-1,null,!0)),f[-1].render(-1))),F&&b(x,function(b,h){n=void 0!==x[h+1]?x[h+1]+q:c.max-q;0===h%2&&b<c.max&&n<=c.max+(e.polar?-q:q)&&(l[b]||(l[b]=new a.PlotLineOrBand(c)),I=b+q,l[b].options={from:d?m(I):I,to:d?m(n):n,color:F},l[b].render(),l[b].isActive=!0)}),c._addedPlotLB||(b((g.plotLines||[]).concat(g.plotBands||[]),function(a){c.addPlotBandOrLine(a)}),c._addedPlotLB=!0);b([f,E,l],function(a){var b,c=[],h=t.duration;A(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,c.push(b))});
C(function(){for(b=c.length;b--;)a[c[b]]&&!a[c[b]].isActive&&(a[c[b]].destroy(),delete a[c[b]])},a!==l&&e.hasRendered&&h?h:0)});D&&(D[D.isPlaced?"animate":"attr"]({d:this.getLinePath(D.strokeWidth())}),D.isPlaced=!0,D[u?"show":"hide"](!0));k&&u&&(g=c.getTitlePosition(),z(g.y)?(k[k.isNew?"attr":"animate"](g),k.isNew=!1):(k.attr("y",-9999),k.isNew=!0));y&&y.enabled&&c.renderStackTotals();c.isDirty=!1},redraw:function(){this.visible&&(this.render(),b(this.plotLinesAndBands,function(a){a.render()}));
b(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var c=this,e=c.stacks,h=c.plotLinesAndBands,d;a||x(c);A(e,function(a,b){u(a);e[b]=null});b([c.ticks,c.minorTicks,c.alternateBands],function(a){u(a)});if(h)for(a=h.length;a--;)h[a].destroy();b("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){c[a]&&(c[a]=c[a].destroy())});for(d in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[d]=
c.plotLinesAndBandsGroups[d].destroy();A(c,function(a,b){-1===g(b,c.keepProps)&&delete c[b]})},drawCrosshair:function(a,b){var c,e=this.crosshair,g=D(e.snap,!0),h,d=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(q(b)||!g)?(g?q(b)&&(h=this.isXAxis?b.plotX:this.len-b.plotY):h=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),q(h)&&(c=this.getPlotLinePath(b&&(this.isXAxis?b.x:D(b.stackY,b.y)),null,null,null,h)||null),q(c)?(b=this.categories&&!this.isRadial,d||(this.cross=
d=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+e.className).attr({zIndex:D(e.zIndex,2)}).add(),d.attr({stroke:e.color||(b?l("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":D(e.width,1)}).css({"pointer-events":"none"}),e.dashStyle&&d.attr({dashstyle:e.dashStyle})),d.show().attr({d:c}),b&&!e.width&&d.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&
this.cross.hide()}});return a.Axis=F}(L);(function(a){var B=a.Axis,H=a.getMagnitude,G=a.normalizeTickInterval,n=a.timeUnits;B.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};B.prototype.normalizeTimeTickInterval=function(a,f){var l=f||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];f=l[l.length-
1];var q=n[f[0]],v=f[1],u;for(u=0;u<l.length&&!(f=l[u],q=n[f[0]],v=f[1],l[u+1]&&a<=(q*v[v.length-1]+n[l[u+1][0]])/2);u++);q===n.year&&a<5*q&&(v=[1,2,5]);a=G(a/q,v,"year"===f[0]?Math.max(H(a/q),1):1);return{unitRange:q,count:a,unitName:f[0]}}})(L);(function(a){var B=a.Axis,H=a.getMagnitude,G=a.map,n=a.normalizeTickInterval,l=a.pick;B.prototype.getLogTickPositions=function(a,t,q,v){var f=this.options,b=this.len,d=this.lin2log,k=this.log2lin,e=[];v||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),
e=this.getLinearTickPositions(a,t,q);else if(.08<=a)for(var b=Math.floor(t),c,m,g,r,z,f=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];b<q+1&&!z;b++)for(m=f.length,c=0;c<m&&!z;c++)g=k(d(b)*f[c]),g>t&&(!v||r<=q)&&void 0!==r&&e.push(r),r>q&&(z=!0),r=g;else t=d(t),q=d(q),a=v?this.getMinorTickInterval():f.tickInterval,a=l("auto"===a?null:a,this._minorAutoInterval,f.tickPixelInterval/(v?5:1)*(q-t)/((v?b/this.tickPositions.length:b)||1)),a=n(a,null,H(a)),e=G(this.getLinearTickPositions(a,t,q),k),v||
(this._minorAutoInterval=a/5);v||(this.tickInterval=a);return e};B.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};B.prototype.lin2log=function(a){return Math.pow(10,a)}})(L);(function(a,B){var H=a.arrayMax,G=a.arrayMin,n=a.defined,l=a.destroyObjectProperties,f=a.each,t=a.erase,q=a.merge,v=a.pick;a.PlotLineOrBand=function(a,b){this.axis=a;b&&(this.options=b,this.id=b.id)};a.PlotLineOrBand.prototype={render:function(){var f=this,b=f.axis,d=b.horiz,k=f.options,e=k.label,c=f.label,m=k.to,
g=k.from,r=k.value,l=n(g)&&n(m),t=n(r),y=f.svgElem,I=!y,A=[],D=k.color,x=v(k.zIndex,0),E=k.events,A={"class":"highcharts-plot-"+(l?"band ":"line ")+(k.className||"")},C={},J=b.chart.renderer,F=l?"bands":"lines",h=b.log2lin;b.isLog&&(g=h(g),m=h(m),r=h(r));t?(A={stroke:D,"stroke-width":k.width},k.dashStyle&&(A.dashstyle=k.dashStyle)):l&&(D&&(A.fill=D),k.borderWidth&&(A.stroke=k.borderColor,A["stroke-width"]=k.borderWidth));C.zIndex=x;F+="-"+x;(D=b.plotLinesAndBandsGroups[F])||(b.plotLinesAndBandsGroups[F]=
D=J.g("plot-"+F).attr(C).add());I&&(f.svgElem=y=J.path().attr(A).add(D));if(t)A=b.getPlotLinePath(r,y.strokeWidth());else if(l)A=b.getPlotBandPath(g,m,k);else return;I&&A&&A.length?(y.attr({d:A}),E&&a.objectEach(E,function(a,b){y.on(b,function(a){E[b].apply(f,[a])})})):y&&(A?(y.show(),y.animate({d:A})):(y.hide(),c&&(f.label=c=c.destroy())));e&&n(e.text)&&A&&A.length&&0<b.width&&0<b.height&&!A.flat?(e=q({align:d&&l&&"center",x:d?!l&&4:10,verticalAlign:!d&&l&&"middle",y:d?l?16:10:l?6:-4,rotation:d&&
!l&&90},e),this.renderLabel(e,A,l,x)):c&&c.hide();return f},renderLabel:function(a,b,d,k){var e=this.label,c=this.axis.chart.renderer;e||(e={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(d?"band":"line")+"-label "+(a.className||"")},e.zIndex=k,this.label=e=c.text(a.text,0,0,a.useHTML).attr(e).add(),e.css(a.style));k=b.xBounds||[b[1],b[4],d?b[6]:b[1]];b=b.yBounds||[b[2],b[5],d?b[7]:b[2]];d=G(k);c=G(b);e.align(a,!1,{x:d,y:c,width:H(k)-d,height:H(b)-c});e.show()},destroy:function(){t(this.axis.plotLinesAndBands,
this);delete this.axis;l(this)}};a.extend(B.prototype,{getPlotBandPath:function(a,b){var d=this.getPlotLinePath(b,null,null,!0),k=this.getPlotLinePath(a,null,null,!0),e=[],c=this.horiz,m=1,g;a=a<this.min&&b<this.min||a>this.max&&b>this.max;if(k&&d)for(a&&(g=k.toString()===d.toString(),m=0),a=0;a<k.length;a+=6)c&&d[a+1]===k[a+1]?(d[a+1]+=m,d[a+4]+=m):c||d[a+2]!==k[a+2]||(d[a+2]+=m,d[a+5]+=m),e.push("M",k[a+1],k[a+2],"L",k[a+4],k[a+5],d[a+4],d[a+5],d[a+1],d[a+2],"z"),e.flat=g;return e},addPlotBand:function(a){return this.addPlotBandOrLine(a,
"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(f,b){var d=(new a.PlotLineOrBand(this,f)).render(),k=this.userOptions;d&&(b&&(k[b]=k[b]||[],k[b].push(f)),this.plotLinesAndBands.push(d));return d},removePlotBandOrLine:function(a){for(var b=this.plotLinesAndBands,d=this.options,k=this.userOptions,e=b.length;e--;)b[e].id===a&&b[e].destroy();f([d.plotLines||[],k.plotLines||[],d.plotBands||[],k.plotBands||[]],function(b){for(e=b.length;e--;)b[e].id===
a&&t(b,b[e])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(L,V);(function(a){var B=a.each,H=a.extend,G=a.format,n=a.isNumber,l=a.map,f=a.merge,t=a.pick,q=a.splat,v=a.syncTimeout,u=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,d){this.chart=a;this.options=d;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=d.split&&!a.inverted;this.shared=d.shared||this.split},
cleanSplit:function(a){B(this.chart.series,function(b){var d=b&&b.tt;d&&(!d.isActive||a?b.tt=d.destroy():d.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,d=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,d.shape||"callout",null,null,d.useHTML,null,"tooltip").attr({padding:d.padding,r:d.borderRadius}),this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).shadow(d.shadow)),this.label.attr({zIndex:8}).add());return this.label},
update:function(a){this.destroy();f(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,f(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,d,k,e){var b=this,m=b.now,g=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(a-m.x)||1<Math.abs(d-m.y)),r=b.followPointer||1<b.len;H(m,{x:g?(2*m.x+a)/
3:a,y:g?(m.y+d)/2:d,anchorX:r?void 0:g?(2*m.anchorX+k)/3:k,anchorY:r?void 0:g?(m.anchorY+e)/2:e});b.getLabel().attr(m);g&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){b&&b.move(a,d,k,e)},32))},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=t(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=v(function(){b.getLabel()[a?"fadeOut":"hide"]();b.isHidden=!0},a))},getAnchor:function(a,d){var b,e=this.chart,c=e.inverted,m=e.plotTop,g=e.plotLeft,r=0,f=
0,t,y;a=q(a);b=a[0].tooltipPos;this.followPointer&&d&&(void 0===d.chartX&&(d=e.pointer.normalize(d)),b=[d.chartX-e.plotLeft,d.chartY-m]);b||(B(a,function(a){t=a.series.yAxis;y=a.series.xAxis;r+=a.plotX+(!c&&y?y.left-g:0);f+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!c&&t?t.top-m:0)}),r/=a.length,f/=a.length,b=[c?e.plotWidth-f:r,this.shared&&!c&&1<a.length&&d?d.chartY-m:c?e.plotHeight-r:f]);return l(b,Math.round)},getPosition:function(a,d,k){var b=this.chart,c=this.distance,m={},g=b.inverted&&
k.h||0,r,f=["y",b.chartHeight,d,k.plotY+b.plotTop,b.plotTop,b.plotTop+b.plotHeight],l=["x",b.chartWidth,a,k.plotX+b.plotLeft,b.plotLeft,b.plotLeft+b.plotWidth],y=!this.followPointer&&t(k.ttBelow,!b.inverted===!!k.negative),q=function(a,b,e,d,h,p){var r=e<d-c,x=d+c+e<b,k=d-c-e;d+=c;if(y&&x)m[a]=d;else if(!y&&r)m[a]=k;else if(r)m[a]=Math.min(p-e,0>k-g?k:k-g);else if(x)m[a]=Math.max(h,d+g+e>b?d:d+g);else return!1},A=function(a,b,e,g){var h;g<c||g>b-c?h=!1:m[a]=g<e/2?1:g>b-e/2?b-e-2:g-e/2;return h},D=
function(a){var b=f;f=l;l=b;r=a},x=function(){!1!==q.apply(0,f)?!1!==A.apply(0,l)||r||(D(!0),x()):r?m.x=m.y=0:(D(!0),x())};(b.inverted||1<this.len)&&D();x();return m},defaultFormatter:function(a){var b=this.points||q(this),k;k=[a.tooltipFooterHeaderFormatter(b[0])];k=k.concat(a.bodyFormatter(b));k.push(a.tooltipFooterHeaderFormatter(b[0],!0));return k},refresh:function(a,d){var b,e=this.options,c,m=a,g,r={},f=[];b=e.formatter||this.defaultFormatter;var r=this.shared,l;e.enabled&&(clearTimeout(this.hideTimer),
this.followPointer=q(m)[0].series.tooltipOptions.followPointer,g=this.getAnchor(m,d),d=g[0],c=g[1],!r||m.series&&m.series.noSharedTooltip?r=m.getLabelConfig():(B(m,function(a){a.setState("hover");f.push(a.getLabelConfig())}),r={x:m[0].category,y:m[0].y},r.points=f,m=m[0]),this.len=f.length,r=b.call(r,this),l=m.series,this.distance=t(l.tooltipOptions.distance,16),!1===r?this.hide():(b=this.getLabel(),this.isHidden&&b.attr({opacity:1}).show(),this.split?this.renderSplit(r,q(a)):(e.style.width||b.css({width:this.chart.spacingBox.width}),
b.attr({text:r&&r.join?r.join(""):r}),b.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+t(m.colorIndex,l.colorIndex)),b.attr({stroke:e.borderColor||m.color||l.color||"#666666"}),this.updatePosition({plotX:d,plotY:c,negative:m.negative,ttBelow:m.ttBelow,h:g[2]||0})),this.isHidden=!1))},renderSplit:function(b,d){var k=this,e=[],c=this.chart,m=c.renderer,g=!0,r=this.options,f=0,l=this.getLabel();a.isString(b)&&(b=[!1,b]);B(b.slice(0,d.length+1),function(a,b){if(!1!==a){b=d[b-1]||
{isHeader:!0,plotX:d[0].plotX};var z=b.series||k,y=z.tt,x=b.series||{},E="highcharts-color-"+t(b.colorIndex,x.colorIndex,"none");y||(z.tt=y=m.label(null,null,null,"callout",null,null,r.useHTML).addClass("highcharts-tooltip-box "+E).attr({padding:r.padding,r:r.borderRadius,fill:r.backgroundColor,stroke:r.borderColor||b.color||x.color||"#333333","stroke-width":r.borderWidth}).add(l));y.isActive=!0;y.attr({text:a});y.css(r.style).shadow(r.shadow);a=y.getBBox();x=a.width+y.strokeWidth();b.isHeader?(f=
a.height,x=Math.max(0,Math.min(b.plotX+c.plotLeft-x/2,c.chartWidth-x))):x=b.plotX+c.plotLeft-t(r.distance,16)-x;0>x&&(g=!1);a=(b.series&&b.series.yAxis&&b.series.yAxis.pos)+(b.plotY||0);a-=c.plotTop;e.push({target:b.isHeader?c.plotHeight+f:a,rank:b.isHeader?1:0,size:z.tt.getBBox().height+1,point:b,x:x,tt:y})}});this.cleanSplit();a.distribute(e,c.plotHeight+f);B(e,function(a){var b=a.point,e=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:g||b.isHeader?a.x:b.plotX+c.plotLeft+t(r.distance,
16),y:a.pos+c.plotTop,anchorX:b.isHeader?b.plotX+c.plotLeft:b.plotX+e.xAxis.pos,anchorY:b.isHeader?a.pos+c.plotTop-15:b.plotY+e.yAxis.pos})})},updatePosition:function(a){var b=this.chart,k=this.getLabel(),k=(this.options.positioner||this.getPosition).call(this,k.width,k.height,a);this.move(Math.round(k.x),Math.round(k.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getDateFormat:function(a,d,k,e){var b=this.chart.time,m=b.dateFormat("%m-%d %H:%M:%S.%L",d),g,r,f={millisecond:15,second:12,minute:9,hour:6,
day:3},l="millisecond";for(r in u){if(a===u.week&&+b.dateFormat("%w",d)===k&&"00:00:00.000"===m.substr(6)){r="week";break}if(u[r]>a){r=l;break}if(f[r]&&m.substr(f[r])!=="01-01 00:00:00.000".substr(f[r]))break;"week"!==r&&(l=r)}r&&(g=e[r]);return g},getXDateFormat:function(a,d,k){d=d.dateTimeLabelFormats;var b=k&&k.closestPointRange;return(b?this.getDateFormat(b,a.x,k.options.startOfWeek,d):d.day)||d.year},tooltipFooterHeaderFormatter:function(a,d){d=d?"footer":"header";var b=a.series,e=b.tooltipOptions,
c=e.xDateFormat,m=b.xAxis,g=m&&"datetime"===m.options.type&&n(a.key),r=e[d+"Format"];g&&!c&&(c=this.getXDateFormat(a,e,m));g&&c&&B(a.point&&a.point.tooltipDateKeys||["key"],function(a){r=r.replace("{point."+a+"}","{point."+a+":"+c+"}")});return G(r,{point:a,series:b},this.chart.time)},bodyFormatter:function(a){return l(a,function(a){var b=a.series.tooltipOptions;return(b[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,b[(a.point.formatPrefix||"point")+"Format"])})}}})(L);
(function(a){var B=a.addEvent,H=a.attr,G=a.charts,n=a.color,l=a.css,f=a.defined,t=a.each,q=a.extend,v=a.find,u=a.fireEvent,b=a.isNumber,d=a.isObject,k=a.offset,e=a.pick,c=a.splat,m=a.Tooltip;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,b){this.options=b;this.chart=a;this.runChartClick=b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};m&&(a.tooltip=new m(a,b.tooltip),this.followTouchMove=e(b.tooltip.followTouchMove,!0));this.setDOMEvents()},
zoomOption:function(a){var b=this.chart,c=b.options.chart,g=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(g=e(c.pinchType,g));this.zoomX=a=/x/.test(g);this.zoomY=g=/y/.test(g);this.zoomHor=a&&!b||g&&b;this.zoomVert=g&&!b||a&&b;this.hasZoom=a||g},normalize:function(a,b){var c;c=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=k(this.chart.container));return q(a,{chartX:Math.round(c.pageX-b.left),chartY:Math.round(c.pageY-b.top)})},getCoordinates:function(a){var b=
{xAxis:[],yAxis:[]};t(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,b,c){var e;t(a,function(a){var g=!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(c,g);if((g=d(a,!0))&&!(g=!d(e,!0)))var g=e.distX-a.distX,m=e.dist-a.dist,r=(a.series.group&&a.series.group.zIndex)-(e.series.group&&e.series.group.zIndex),g=0<(0!==g&&b?g:0!==m?m:0!==r?r:e.series.index>
a.series.index?-1:1);g&&(e=a)});return e},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var c=a.series,g=c.xAxis,c=c.yAxis,d=e(a.clientX,a.plotX);if(g&&c)return b?{chartX:g.len+g.pos-d,chartY:c.len+c.pos-a.plotY}:{chartX:d+g.pos,chartY:a.plotY+c.pos}},getHoverData:function(b,c,m,k,f,l,A){var g,x=[],r=A&&A.isBoosting;k=!(!k||!b);A=c&&!c.stickyTracking?[c]:a.grep(m,function(a){return a.visible&&!(!f&&a.directTouch)&&
e(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(g=k?b:this.findNearestKDPoint(A,f,l))&&g.series;g&&(f&&!c.noSharedTooltip?(A=a.grep(m,function(a){return a.visible&&!(!f&&a.directTouch)&&e(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),t(A,function(a){var b=v(a.points,function(a){return a.x===g.x&&!a.isNull});d(b)&&(r&&(b=a.getPoint(b)),x.push(b))})):x.push(g));return{hoverPoint:g,hoverSeries:c,hoverPoints:x}},runPointActions:function(b,c){var g=this.chart,d=g.tooltip&&g.tooltip.options.enabled?
g.tooltip:void 0,m=d?d.shared:!1,r=c||g.hoverPoint,k=r&&r.series||g.hoverSeries,k=this.getHoverData(r,k,g.series,!!c||k&&k.directTouch&&this.isDirectTouch,m,b,{isBoosting:g.isBoosting}),f,r=k.hoverPoint;f=k.hoverPoints;c=(k=k.hoverSeries)&&k.tooltipOptions.followPointer;m=m&&k&&!k.noSharedTooltip;if(r&&(r!==g.hoverPoint||d&&d.isHidden)){t(g.hoverPoints||[],function(b){-1===a.inArray(b,f)&&b.setState()});t(f||[],function(a){a.setState("hover")});if(g.hoverSeries!==k)k.onMouseOver();g.hoverPoint&&g.hoverPoint.firePointEvent("mouseOut");
if(!r.series)return;r.firePointEvent("mouseOver");g.hoverPoints=f;g.hoverPoint=r;d&&d.refresh(m?f:r,b)}else c&&d&&!d.isHidden&&(r=d.getAnchor([{}],b),d.updatePosition({plotX:r[0],plotY:r[1]}));this.unDocMouseMove||(this.unDocMouseMove=B(g.container.ownerDocument,"mousemove",function(b){var c=G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));t(g.axes,function(c){var g=e(c.crosshair.snap,!0),d=g?a.find(f,function(a){return a.series[c.coll]===c}):void 0;d||!g?c.drawCrosshair(b,d):c.hideCrosshair()})},
reset:function(a,b){var e=this.chart,g=e.hoverSeries,d=e.hoverPoint,m=e.hoverPoints,k=e.tooltip,r=k&&k.shared?m:d;a&&r&&t(c(r),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)k&&r&&(k.refresh(r),d&&(d.setState(d.state,!0),t(e.axes,function(a){a.crosshair&&a.drawCrosshair(null,d)})));else{if(d)d.onMouseOut();m&&t(m,function(a){a.setState()});if(g)g.onMouseOut();k&&k.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(e.axes,function(a){a.hideCrosshair()});this.hoverX=
e.hoverPoints=e.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,e;t(c.series,function(g){e=a||g.getPlotBox();g.xAxis&&g.xAxis.zoomEnabled&&g.group&&(g.group.attr(e),g.markerGroup&&(g.markerGroup.attr(e),g.markerGroup.clip(b?c.clipRect:null)),g.dataLabelsGroup&&g.dataLabelsGroup.attr(e))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=
this.chart,c=b.options.chart,e=a.chartX,g=a.chartY,d=this.zoomHor,m=this.zoomVert,k=b.plotLeft,x=b.plotTop,f=b.plotWidth,l=b.plotHeight,q,F=this.selectionMarker,h=this.mouseDownX,p=this.mouseDownY,t=c.panKey&&a[c.panKey+"Key"];F&&F.touch||(e<k?e=k:e>k+f&&(e=k+f),g<x?g=x:g>x+l&&(g=x+l),this.hasDragged=Math.sqrt(Math.pow(h-e,2)+Math.pow(p-g,2)),10<this.hasDragged&&(q=b.isInsidePlot(h-k,p-x),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&q&&!t&&!F&&(this.selectionMarker=F=b.renderer.rect(k,x,d?1:f,
m?1:l,0).attr({fill:c.selectionMarkerFill||n("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),F&&d&&(e-=h,F.attr({width:Math.abs(e),x:(0<e?0:e)+h})),F&&m&&(e=g-p,F.attr({height:Math.abs(e),y:(0<e?0:e)+p})),q&&!F&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var c=this,e=this.chart,g=this.hasPinched;if(this.selectionMarker){var d={originalEvent:a,xAxis:[],yAxis:[]},m=this.selectionMarker,k=m.attr?m.attr("x"):m.x,D=m.attr?m.attr("y"):m.y,x=m.attr?m.attr("width"):
m.width,E=m.attr?m.attr("height"):m.height,C;if(this.hasDragged||g)t(e.axes,function(b){if(b.zoomEnabled&&f(b.min)&&(g||c[{xAxis:"zoomX",yAxis:"zoomY"}[b.coll]])){var e=b.horiz,h="touchend"===a.type?b.minPixelPadding:0,m=b.toValue((e?k:D)+h),e=b.toValue((e?k+x:D+E)-h);d[b.coll].push({axis:b,min:Math.min(m,e),max:Math.max(m,e)});C=!0}}),C&&u(e,"selection",d,function(a){e.zoom(q(a,g?{animation:!1}:null))});b(e.index)&&(this.selectionMarker=this.selectionMarker.destroy());g&&this.scaleGroups()}e&&b(e.index)&&
(l(e.container,{cursor:e._cursor}),e.cancelClick=10<this.hasDragged,e.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){2!==a.button&&(a=this.normalize(a),this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||
b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;f(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-
c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var c;a;){if(c=H(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},
onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,e=b.plotLeft,g=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",q(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(q(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-e,a.chartY-g)&&u(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container,e=c.ownerDocument;c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};
c.onclick=function(a){b.onContainerClick(a)};this.unbindContainerMouseLeave=B(c,"mouseleave",b.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=B(e,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=B(e,"touchend",b.onDocumentTouchEnd)))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();
a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(L);(function(a){var B=a.charts,H=a.each,G=a.extend,n=a.map,l=a.noop,f=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,f,l,n,b,d){this.zoomHor&&this.pinchTranslateDirection(!0,a,f,l,n,b,d);this.zoomVert&&this.pinchTranslateDirection(!1,a,f,l,n,
b,d)},pinchTranslateDirection:function(a,f,l,n,b,d,k,e){var c=this.chart,m=a?"x":"y",g=a?"X":"Y",r="chart"+g,q=a?"width":"height",t=c["plot"+(a?"Left":"Top")],y,v,A=e||1,D=c.inverted,x=c.bounds[a?"h":"v"],E=1===f.length,C=f[0][r],J=l[0][r],F=!E&&f[1][r],h=!E&&l[1][r],p;l=function(){!E&&20<Math.abs(C-F)&&(A=e||Math.abs(J-h)/Math.abs(C-F));v=(t-J)/A+C;y=c["plot"+(a?"Width":"Height")]/A};l();f=v;f<x.min?(f=x.min,p=!0):f+y>x.max&&(f=x.max-y,p=!0);p?(J-=.8*(J-k[m][0]),E||(h-=.8*(h-k[m][1])),l()):k[m]=
[J,h];D||(d[m]=v-t,d[q]=y);d=D?1/A:A;b[q]=y;b[m]=f;n[D?a?"scaleY":"scaleX":"scale"+g]=A;n["translate"+g]=d*t+(J-d*C)},pinch:function(a){var q=this,t=q.chart,u=q.pinchDown,b=a.touches,d=b.length,k=q.lastValidTouch,e=q.hasZoom,c=q.selectionMarker,m={},g=1===d&&(q.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||q.runChartClick),r={};1<d&&(q.initiated=!0);e&&q.initiated&&!g&&a.preventDefault();n(b,function(a){return q.normalize(a)});"touchstart"===a.type?(H(b,function(a,b){u[b]={chartX:a.chartX,
chartY:a.chartY}}),k.x=[u[0].chartX,u[1]&&u[1].chartX],k.y=[u[0].chartY,u[1]&&u[1].chartY],H(t.axes,function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,e=a.toPixels(f(a.options.min,a.dataMin)),d=a.toPixels(f(a.options.max,a.dataMax)),g=Math.max(e,d);b.min=Math.min(a.pos,Math.min(e,d)-c);b.max=Math.max(a.pos+a.len,g+c)}}),q.res=!0):q.followTouchMove&&1===d?this.runPointActions(q.normalize(a)):u.length&&(c||(q.selectionMarker=c=G({destroy:l,touch:!0},t.plotBox)),q.pinchTranslate(u,
b,m,c,r,k),q.hasPinched=e,q.scaleGroups(m,r),q.res&&(q.res=!1,this.reset(!1,0)))},touch:function(l,q){var n=this.chart,t,b;if(n.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=n.index;1===l.touches.length?(l=this.normalize(l),(b=n.isInsidePlot(l.chartX-n.plotLeft,l.chartY-n.plotTop))&&!n.openMenu?(q&&this.runPointActions(l),"touchmove"===l.type&&(q=this.pinchDown,t=q[0]?4<=Math.sqrt(Math.pow(q[0].chartX-l.chartX,2)+Math.pow(q[0].chartY-l.chartY,2)):!1),f(t,
!0)&&this.pinch(l)):q&&this.reset()):2===l.touches.length&&this.pinch(l)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(f){B[a.hoverChartIndex]&&B[a.hoverChartIndex].pointer.drop(f)}})})(L);(function(a){var B=a.addEvent,H=a.charts,G=a.css,n=a.doc,l=a.extend,f=a.noop,t=a.Pointer,q=a.removeEvent,v=a.win,u=a.wrap;if(!a.hasTouch&&(v.PointerEvent||v.MSPointerEvent)){var b={},d=!!v.PointerEvent,k=function(){var c=
[];c.item=function(a){return this[a]};a.objectEach(b,function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},e=function(b,e,d,l){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!H[a.hoverChartIndex]||(l(b),l=H[a.hoverChartIndex].pointer,l[e]({type:d,target:b.currentTarget,preventDefault:f,touches:k()}))};l(t.prototype,{onContainerPointerDown:function(a){e(a,"onContainerTouchStart","touchstart",function(a){b[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},
onContainerPointerMove:function(a){e(a,"onContainerTouchMove","touchmove",function(a){b[a.pointerId]={pageX:a.pageX,pageY:a.pageY};b[a.pointerId].target||(b[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){e(a,"onDocumentTouchEnd","touchend",function(a){delete b[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,d?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,d?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(n,d?
"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});u(t.prototype,"init",function(a,b,e){a.call(this,b,e);this.hasZoom&&G(b.container,{"-ms-touch-action":"none","touch-action":"none"})});u(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(B)});u(t.prototype,"destroy",function(a){this.batchMSEvents(q);a.call(this)})}})(L);(function(a){var B=a.addEvent,H=a.css,G=a.discardElement,n=a.defined,l=a.each,f=a.isFirefox,t=a.marginNames,q=a.merge,
v=a.pick,u=a.setAnimation,b=a.stableSort,d=a.win,k=a.wrap;a.Legend=function(a,b){this.init(a,b)};a.Legend.prototype={init:function(a,b){this.chart=a;this.setOptions(b);b.enabled&&(this.render(),B(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var b=v(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=q(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=b-5;this.itemHeight=
this.maxItemWidth=0;this.symbolWidth=v(a.symbolWidth,16);this.pages=[]},update:function(a,b){var c=this.chart;this.setOptions(q(!0,this.options,a));this.destroy();c.isDirtyLegend=c.isDirtyBox=!0;v(b,!0)&&c.redraw()},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");var c=this.options,e=a.legendItem,d=a.legendLine,k=a.legendSymbol,f=this.itemHiddenStyle.color,c=b?c.itemStyle.color:f,l=b?a.color||f:f,q=a.options&&a.options.marker,A={fill:l};e&&e.css({fill:c,
color:c});d&&d.attr({stroke:l});k&&(q&&k.isMarker&&(A=a.pointAttribs(),b||(A.stroke=A.fill=f)),k.attr(A))},positionItem:function(a){var b=this.options,e=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,k=d[0],d=d[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?k:this.legendWidth-k-2*e-4,d);f&&(f.x=k,f.y=d)},destroyItem:function(a){var b=a.checkbox;l(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&G(a.checkbox)},destroy:function(){function a(a){this[a]&&
(this[a]=this[a].destroy())}l(this.getAllItems(),function(b){l(["legendItem","legendGroup"],a,b)});l("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,b,d=this.clipHeight||this.legendHeight,g=this.titleHeight;a&&(b=a.translateY,l(this.allItems,function(c){var e=c.checkbox,m;e&&(m=b+g+e.y+(this.scrollOffset||0)+3,H(e,{left:a.translateX+c.checkboxOffset+e.x-20+"px",top:m+"px",display:m>b-6&&m<b+d-6?
"":"none"}))},this))},renderTitle:function(){var a=this.options,b=this.padding,d=a.title,g=0;d.text&&(this.title||(this.title=this.chart.renderer.label(d.text,b-3,b-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(d.style).add(this.group)),a=this.title.getBBox(),g=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:g}));this.titleHeight=g},setText:function(b){var c=this.options;b.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,b,this.chart.time):c.labelFormatter.call(b)})},
renderItem:function(a){var b=this.chart,e=b.renderer,d=this.options,k="horizontal"===d.layout,f=this.symbolWidth,l=d.symbolPadding,y=this.itemStyle,n=this.itemHiddenStyle,A=this.padding,D=k?v(d.itemDistance,20):0,x=!d.rtl,E=d.width,C=d.itemMarginBottom||0,J=this.itemMarginTop,F=a.legendItem,h=!a.series,p=!h&&a.series.drawLegendSymbol?a.series:a,t=p.options,u=this.createCheckboxForItem&&t&&t.showCheckbox,t=f+l+D+(u?20:0),N=d.useHTML,P=a.options.className;F||(a.legendGroup=e.g("legend-item").addClass("highcharts-"+
p.type+"-series highcharts-color-"+a.colorIndex+(P?" "+P:"")+(h?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=F=e.text("",x?f+l:-l,this.baseline||0,N).css(q(a.visible?y:n)).attr({align:x?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(f=y.fontSize,this.fontMetrics=e.fontMetrics(f,F),this.baseline=this.fontMetrics.f+3+J,F.attr("y",this.baseline)),this.symbolHeight=d.symbolHeight||this.fontMetrics.f,p.drawLegendSymbol(this,a),this.setItemEvents&&
this.setItemEvents(a,F,N),u&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);y.width||F.css({width:(d.itemWidth||d.width||b.spacingBox.width)-t});this.setText(a);e=F.getBBox();y=a.checkboxOffset=d.itemWidth||a.legendItemWidth||e.width+t;this.itemHeight=e=Math.round(a.legendItemHeight||e.height||this.symbolHeight);k&&this.itemX-A+y>(E||b.spacingBox.width-2*A-d.x)&&(this.itemX=A,this.itemY+=J+this.lastLineHeight+C,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,y);
this.lastItemY=J+this.itemY+C;this.lastLineHeight=Math.max(e,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];k?this.itemX+=y:(this.itemY+=J+e+C,this.lastLineHeight=e);this.offsetWidth=E||Math.max((k?this.itemX-A-(a.checkbox?0:D):y)+A,this.offsetWidth)},getAllItems:function(){var a=[];l(this.chart.series,function(b){var c=b&&b.options;b&&v(c.showInLegend,n(c.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===c.legendType?b.data:b)))});return a},getAlignment:function(){var a=
this.options;return a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,b){var c=this.chart,e=this.options,d=this.getAlignment();d&&l([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(g,m){g.test(d)&&!n(a[m])&&(c[t[m]]=Math.max(c[t[m]],c.legend[(m+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][m]*e[m%2?"x":"y"]+v(e.margin,12)+b[m]+(0===m?c.titleOffset+c.options.title.margin:0)))})},render:function(){var a=this,c=a.chart,d=c.renderer,
g=a.group,k,f,n,y,t=a.box,A=a.options,D=a.padding;a.itemX=D;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;g||(a.group=g=d.g("legend").attr({zIndex:7}).add(),a.contentGroup=d.g().attr({zIndex:1}).add(g),a.scrollGroup=d.g().add(a.contentGroup));a.renderTitle();k=a.getAllItems();b(k,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});A.reversed&&k.reverse();a.allItems=k;a.display=f=!!k.length;a.lastLineHeight=0;l(k,function(b){a.renderItem(b)});n=
(A.width||a.offsetWidth)+D;y=a.lastItemY+a.lastLineHeight+a.titleHeight;y=a.handleOverflow(y);y+=D;t||(a.box=t=d.rect().addClass("highcharts-legend-box").attr({r:A.borderRadius}).add(g),t.isNew=!0);t.attr({stroke:A.borderColor,"stroke-width":A.borderWidth||0,fill:A.backgroundColor||"none"}).shadow(A.shadow);0<n&&0<y&&(t[t.isNew?"attr":"animate"](t.crisp.call({},{x:0,y:0,width:n,height:y},t.strokeWidth())),t.isNew=!1);t[f?"show":"hide"]();a.legendWidth=n;a.legendHeight=y;l(k,function(b){a.positionItem(b)});
f&&(d=c.spacingBox,/(lth|ct|rth)/.test(a.getAlignment())&&(d=q(d,{y:d.y+c.titleOffset+c.options.title.margin})),g.align(q(A,{width:n,height:y}),!0,d));c.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,e=this.chart,d=e.renderer,k=this.options,f=k.y,q=this.padding,e=e.spacingBox.height+("top"===k.verticalAlign?-f:f)-q,f=k.maxHeight,y,n=this.clipRect,A=k.navigation,t=v(A.animation,!0),x=A.arrowSize||12,E=this.nav,C=this.pages,J,F=this.allItems,h=function(a){"number"===typeof a?
n.attr({height:a}):n&&(b.clipRect=n.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+q+"px,9999px,"+(q+a)+"px,0)":"auto")};"horizontal"!==k.layout||"middle"===k.verticalAlign||k.floating||(e/=2);f&&(e=Math.min(e,f));C.length=0;a>e&&!1!==A.enabled?(this.clipHeight=y=Math.max(e-20-this.titleHeight-q,0),this.currentPage=v(this.currentPage,1),this.fullHeight=a,l(F,function(a,b){var c=a._legendItemPos[1],e=Math.round(a.legendItem.getBBox().height),d=C.length;
if(!d||c-C[d-1]>y&&(J||c)!==C[d-1])C.push(J||c),d++;a.pageIx=d-1;J&&(F[b-1].pageIx=d-1);b===F.length-1&&c+e-C[d-1]>y&&(C.push(c),a.pageIx=d);c!==J&&(J=c)}),n||(n=b.clipRect=d.clipRect(0,q,9999,0),b.contentGroup.clip(n)),h(y),E||(this.nav=E=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,x,x).on("click",function(){b.scroll(-1,t)}).add(E),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation").css(A.style).add(E),this.down=d.symbol("triangle-down",0,0,x,x).on("click",
function(){b.scroll(1,t)}).add(E)),b.scroll(0),a=e):E&&(h(),this.nav=E.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,b){var c=this.pages,d=c.length;a=this.currentPage+a;var e=this.clipHeight,k=this.options.navigation,f=this.pager,l=this.padding;a>d&&(a=d);0<a&&(void 0!==b&&u(b,this.chart),this.nav.attr({translateX:l,translateY:e+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),
f.attr({text:a+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===d?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?k.inactiveColor:k.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===d?k.inactiveColor:k.activeColor}).css({cursor:a===d?"default":"pointer"}),this.scrollOffset=-c[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin=
{drawRectangle:function(a,b){var c=a.symbolHeight,d=a.options.squareSymbol;b.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-c)/2:0,a.baseline-c+1,d?c:a.symbolWidth,c,v(a.options.symbolRadius,c/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,d=b.marker,e=a.symbolWidth,k=a.symbolHeight,f=k/2,l=this.chart.renderer,y=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var n;n={"stroke-width":b.lineWidth||0};b.dashStyle&&
(n.dashstyle=b.dashStyle);this.legendLine=l.path(["M",0,a,"L",e,a]).addClass("highcharts-graph").attr(n).add(y);d&&!1!==d.enabled&&(b=Math.min(v(d.radius,f),f),0===this.symbol.indexOf("url")&&(d=q(d,{width:k,height:k}),b=0),this.legendSymbol=d=l.symbol(this.symbol,e/2-b,a-b,2*b,2*b,d).addClass("highcharts-point").add(y),d.isMarker=!0)}};(/Trident\/7\.0/.test(d.navigator.userAgent)||f)&&k(a.Legend.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)})})(L);
(function(a){var B=a.addEvent,H=a.animate,G=a.animObject,n=a.attr,l=a.doc,f=a.Axis,t=a.createElement,q=a.defaultOptions,v=a.discardElement,u=a.charts,b=a.css,d=a.defined,k=a.each,e=a.extend,c=a.find,m=a.fireEvent,g=a.grep,r=a.isNumber,z=a.isObject,K=a.isString,y=a.Legend,I=a.marginNames,A=a.merge,D=a.objectEach,x=a.Pointer,E=a.pick,C=a.pInt,J=a.removeEvent,F=a.seriesTypes,h=a.splat,p=a.syncTimeout,M=a.win,O=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new O(a,
b,c)};e(O.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(K(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var d,e,h=b.series,g=b.plotOptions||{};b.series=null;d=A(q,b);for(e in d.plotOptions)d.plotOptions[e].tooltip=g[e]&&A(g[e].tooltip)||void 0;d.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;d.series=b.series=h;this.userOptions=b;e=d.chart;h=e.events;this.margin=[];this.spacing=[];this.bounds=
{h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.time=b.time&&a.keys(b.time).length?new a.Time(b.time):a.time;this.hasCartesianSeries=e.showAxes;var k=this;k.index=u.length;u.push(k);a.chartCount++;h&&D(h,function(a,b){B(k,b,a)});k.xAxis=[];k.yAxis=[];k.pointCount=k.colorCounter=k.symbolCounter=0;k.firstRender()},initSeries:function(b){var c=this.options.chart;(c=F[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,
b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,c){var d=c?b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,d=this.series,h=this.pointer,g=this.legend,f=this.isDirtyLegend,p,x,l=this.hasCartesianSeries,E=this.isDirtyBox,r,C=this.renderer,q=C.isHidden(),y=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);q&&this.temporaryDisplay();
this.layOutTitles();for(b=d.length;b--;)if(r=d[b],r.options.stacking&&(p=!0,r.isDirty)){x=!0;break}if(x)for(b=d.length;b--;)r=d[b],r.options.stacking&&(r.isDirty=!0);k(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),f=!0);a.isDirtyData&&m(a,"updatedData")});f&&g.options.enabled&&(g.render(),this.isDirtyLegend=!1);p&&this.getStacks();l&&k(c,function(a){a.updateNames();a.setScale()});this.getMargins();l&&(k(c,function(a){a.isDirty&&(E=!0)}),k(c,function(a){var b=
a.min+","+a.max;a.extKey!==b&&(a.extKey=b,y.push(function(){m(a,"afterSetExtremes",e(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(E||p)&&a.redraw()}));E&&this.drawChartBox();m(this,"predraw");k(d,function(a){(E||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});h&&h.reset(!0);C.draw();m(this,"redraw");m(this,"render");q&&this.temporaryDisplay(!0);k(y,function(a){a.call()})},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var d,e=this.series,h;d=c(this.axes,b)||
c(this.series,b);for(h=0;!d&&h<e.length;h++)d=c(e[h].points||[],b);return d},getAxes:function(){var a=this,b=this.options,c=b.xAxis=h(b.xAxis||{}),b=b.yAxis=h(b.yAxis||{});k(c,function(a,b){a.index=b;a.isX=!0});k(b,function(a,b){a.index=b});c=c.concat(b);k(c,function(b){new f(a,b)})},getSelectedPoints:function(){var a=[];k(this.series,function(b){a=a.concat(g(b.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return g(this.series,function(a){return a.selected})},
setTitle:function(a,b,c){var d=this,e=d.options,h;h=e.title=A({style:{color:"#333333",fontSize:e.isStock?"16px":"18px"}},e.title,a);e=e.subtitle=A({style:{color:"#666666"}},e.subtitle,b);k([["title",a,h],["subtitle",b,e]],function(a,b){var c=a[0],e=d[c],h=a[1];a=a[2];e&&h&&(d[c]=e=e.destroy());a&&!e&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},
layOutTitles:function(a){var b=0,c,d=this.renderer,h=this.spacingBox;k(["title","subtitle"],function(a){var c=this[a],g=this.options[a];a="title"===a?-3:g.verticalAlign?0:b+2;var k;c&&(k=g.style.fontSize,k=d.fontMetrics(k,c).b,c.css({width:(g.width||h.width+g.widthAdjust)+"px"}).align(e({y:a+k},g),!1,"spacingBox"),g.floating||g.verticalAlign||(b=Math.ceil(b+c.getBBox(g.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&E(a,
!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,c=b.width,b=b.height,e=this.renderTo;d(c)||(this.containerWidth=a.getStyle(e,"width"));d(b)||(this.containerHeight=a.getStyle(e,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),
delete c.hcOrigStyle),c.hcOrigDetached&&(l.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){l.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,l.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;
if(c===l.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,d=c.chart,h,g;b=this.renderTo;var k=a.uniqueKey(),m;b||(this.renderTo=b=d.renderTo);K(b)&&(this.renderTo=b=l.getElementById(b));b||a.error(13,!0);h=C(n(b,"data-highcharts-chart"));r(h)&&u[h]&&u[h].hasRendered&&u[h].destroy();n(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();
h=this.chartWidth;g=this.chartHeight;m=e({position:"relative",overflow:"hidden",width:h+"px",height:g+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=t("div",{id:k},m,b);this._cursor=b.style.cursor;this.renderer=new (a[d.renderer]||a.Renderer)(b,h,g,null,d.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=
this.spacing,c=this.margin,e=this.titleOffset;this.resetMargins();e&&!d(c[0])&&(this.plotTop=Math.max(this.plotTop,e+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.adjustPlotArea&&this.adjustPlotArea();a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&k(a.axes,function(a){a.visible&&
a.getOffset()});k(I,function(e,h){d(c[h])||(a[e]+=b[h])});a.setChartSize()},reflow:function(b){var c=this,e=c.options.chart,h=c.renderTo,g=d(e.width)&&d(e.height),k=e.width||a.getStyle(h,"width"),e=e.height||a.getStyle(h,"height"),h=b?b.target:M;if(!g&&!c.isPrinting&&k&&e&&(h===M||h===l)){if(k!==c.containerWidth||e!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=p(function(){c.container&&c.setSize(void 0,void 0,!1)},b?100:0);c.containerWidth=k;c.containerHeight=e}},initReflow:function(){var a=
this,b;b=B(M,"resize",function(b){a.reflow(b)});B(a,"destroy",b)},setSize:function(c,d,e){var h=this,g=h.renderer;h.isResizing+=1;a.setAnimation(e,h);h.oldChartHeight=h.chartHeight;h.oldChartWidth=h.chartWidth;void 0!==c&&(h.options.chart.width=c);void 0!==d&&(h.options.chart.height=d);h.getChartSize();c=g.globalAnimation;(c?H:b)(h.container,{width:h.chartWidth+"px",height:h.chartHeight+"px"},c);h.setChartSize(!0);g.setSize(h.chartWidth,h.chartHeight,e);k(h.axes,function(a){a.isDirty=!0;a.setScale()});
h.isDirtyLegend=!0;h.isDirtyBox=!0;h.layOutTitles();h.getMargins();h.redraw(e);h.oldChartHeight=null;m(h,"resize");p(function(){h&&m(h,"endResize",null,function(){--h.isResizing})},G(c).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,h=this.chartHeight,e=this.options.chart,g=this.spacing,m=this.clipOffset,p,f,x,l;this.plotLeft=p=Math.round(this.plotLeft);this.plotTop=f=Math.round(this.plotTop);this.plotWidth=x=Math.max(0,Math.round(d-p-this.marginRight));
this.plotHeight=l=Math.max(0,Math.round(h-f-this.marginBottom));this.plotSizeX=b?l:x;this.plotSizeY=b?x:l;this.plotBorderWidth=e.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:g[3],y:g[0],width:d-g[3]-g[1],height:h-g[0]-g[2]};this.plotBox=c.plotBox={x:p,y:f,width:x,height:l};d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,m[3])/2);c=Math.ceil(Math.max(d,m[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,m[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-
Math.max(d,m[2])/2-c))};a||k(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;k(["margin","spacing"],function(c){var d=b[c],h=z(d)?d:[d,d,d,d];k(["Top","Right","Bottom","Left"],function(d,e){a[c][e]=E(b[c+d],h[e])})});k(I,function(b,c){a[b]=E(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,d=this.chartHeight,h=this.chartBackground,
e=this.plotBackground,g=this.plotBorder,k,m=this.plotBGImage,p=a.backgroundColor,f=a.plotBackgroundColor,x=a.plotBackgroundImage,l,E=this.plotLeft,r=this.plotTop,C=this.plotWidth,q=this.plotHeight,y=this.plotBox,F=this.clipRect,A=this.clipBox,n="animate";h||(this.chartBackground=h=b.rect().addClass("highcharts-background").add(),n="attr");k=a.borderWidth||0;l=k+(a.shadow?8:0);p={fill:p||"none"};if(k||h["stroke-width"])p.stroke=a.borderColor,p["stroke-width"]=k;h.attr(p).shadow(a.shadow);h[n]({x:l/
2,y:l/2,width:c-l-k%2,height:d-l-k%2,r:a.borderRadius});n="animate";e||(n="attr",this.plotBackground=e=b.rect().addClass("highcharts-plot-background").add());e[n](y);e.attr({fill:f||"none"}).shadow(a.plotShadow);x&&(m?m.animate(y):this.plotBGImage=b.image(x,E,r,C,q).add());F?F.animate({width:A.width,height:A.height}):this.clipRect=b.clipRect(A);n="animate";g||(n="attr",this.plotBorder=g=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());g.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||
0,fill:"none"});g[n](g.crisp({x:E,y:r,width:C,height:q},-g.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,h,e;k(["inverted","angular","polar"],function(g){c=F[b.type||b.defaultSeriesType];e=b[g]||c&&c.prototype[g];for(h=d&&d.length;!e&&h--;)(c=F[d[h].type])&&c.prototype[g]&&(e=!0);a[g]=e})},linkSeries:function(){var a=this,b=a.series;k(b,function(a){a.linkedSeries.length=0});k(b,function(b){var c=b.options.linkedTo;K(c)&&(c=":previous"===
c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=E(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){k(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&k(b.items,function(c){var d=e(b.style,c.style),h=C(d.left)+a.plotLeft,g=C(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,h,g).attr({zIndex:2}).css(d).add()})},render:function(){var a=
this.axes,b=this.renderer,c=this.options,d,h,e;this.setTitle();this.legend=new y(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;d=this.plotHeight=Math.max(this.plotHeight-21,0);k(a,function(a){a.setScale()});this.getAxisMargins();h=1.1<c/this.plotWidth;e=1.05<d/this.plotHeight;if(h||e)k(a,function(a){(a.horiz&&h||!a.horiz&&e)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&k(a,function(a){a.visible&&
a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=A(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(M.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),
this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,d=b.series,h=b.container,e,g=h&&h.parentNode;m(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");J(b);for(e=c.length;e--;)c[e]=c[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=d.length;e--;)d[e]=d[e].destroy();k("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});h&&(h.innerHTML="",J(h),g&&v(h));D(b,function(a,c){delete b[c]})},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();m(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();k(b.series||[],function(b){a.initSeries(b)});a.linkSeries();m(a,"beforeRender");x&&(a.pointer=new x(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){k([this.callback].concat(this.callbacks),
function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);m(this,"load");m(this,"render");d(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(L);(function(a){var B,H=a.each,G=a.extend,n=a.erase,l=a.fireEvent,f=a.format,t=a.isArray,q=a.isNumber,v=a.pick,u=a.removeEvent;a.Point=B=function(){};a.Point.prototype={init:function(a,d,k){this.series=a;this.color=a.color;this.applyOptions(d,k);a.options.colorByPoint?(d=a.options.colors||a.chart.options.colors,this.color=
this.color||d[a.colorCounter],d=d.length,k=a.colorCounter,a.colorCounter++,a.colorCounter===d&&(a.colorCounter=0)):k=a.colorIndex;this.colorIndex=v(this.colorIndex,k);a.chart.pointCount++;return this},applyOptions:function(a,d){var b=this.series,e=b.options.pointValKey||b.pointValKey;a=B.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;e&&(this.y=this[e]);this.isNull=v(this.isValid&&!this.isValid(),null===this.x||!q(this.y,!0));
this.selected&&(this.state="select");"name"in this&&void 0===d&&b.xAxis&&b.xAxis.hasNames&&(this.x=b.xAxis.nameToX(this));void 0===this.x&&b&&(this.x=void 0===d?b.autoIncrement(this):d);return this},optionsToObject:function(a){var b={},k=this.series,e=k.options.keys,c=e||k.pointArrayMap||["y"],m=c.length,g=0,f=0;if(q(a)||null===a)b[c[0]]=a;else if(t(a))for(!e&&a.length>m&&(k=typeof a[0],"string"===k?b.name=a[0]:"number"===k&&(b.x=a[0]),g++);f<m;)e&&void 0===a[g]||(b[c[f]]=a[g]),g++,f++;else"object"===
typeof a&&(b=a,a.dataLabels&&(k._hasPointLabels=!0),a.marker&&(k._hasPointMarkers=!0));return b},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=
this.series,d=a.zones,a=a.zoneAxis||"y",k=0,e;for(e=d[k];this[a]>=e.value;)e=d[++k];e&&e.color&&!this.options.color&&(this.color=e.color);return e},destroy:function(){var a=this.series.chart,d=a.hoverPoints,k;a.pointCount--;d&&(this.setState(),n(d,this),d.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(k in this)this[k]=null},destroyElements:function(){for(var a=["graphic",
"dataLabel","dataLabelUpper","connector","shadowGroup"],d,k=6;k--;)d=a[k],this[d]&&(this[d]=this[d].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,k=b.tooltipOptions,e=v(k.valueDecimals,""),c=k.valuePrefix||"",m=k.valueSuffix||"";H(b.pointArrayMap||["y"],function(b){b=
"{point."+b;if(c||m)a=a.replace(b+"}",c+b+"}"+m);a=a.replace(b+"}",b+":,."+e+"f}")});return f(a,{point:this,series:this.series},b.chart.time)},firePointEvent:function(a,d,k){var b=this,c=this.series.options;(c.point.events[a]||b.options&&b.options.events&&b.options.events[a])&&this.importEvents();"click"===a&&c.allowPointSelect&&(k=function(a){b.select&&b.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});l(this,a,d,k)},visible:!0}})(L);(function(a){var B=a.addEvent,H=a.animObject,G=a.arrayMax,n=a.arrayMin,
l=a.correctFloat,f=a.defaultOptions,t=a.defaultPlotOptions,q=a.defined,v=a.each,u=a.erase,b=a.extend,d=a.fireEvent,k=a.grep,e=a.isArray,c=a.isNumber,m=a.isString,g=a.merge,r=a.objectEach,z=a.pick,K=a.removeEvent,y=a.splat,I=a.SVGElement,A=a.syncTimeout,D=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},
enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},
select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,c){var d=this,e,g=a.series,h;d.chart=a;d.options=c=d.setOptions(c);d.linkedSeries=[];d.bindAxes();b(d,{name:c.name,state:"",visible:!1!==c.visible,selected:!0===c.selected});e=c.events;r(e,function(a,b){B(d,b,a)});if(e&&e.click||c.point&&c.point.events&&
c.point.events.click||c.allowPointSelect)a.runTrackerClick=!0;d.getColor();d.getSymbol();v(d.parallelArrays,function(a){d[a+"Data"]=[]});d.setData(c.data,!1);d.isCartesian&&(a.hasCartesianSeries=!0);g.length&&(h=g[g.length-1]);d._i=z(h&&h._i,-1)+1;a.orderSeries(this.insert(g))},insert:function(a){var b=this.options.index,d;if(c(b)){for(d=a.length;d--;)if(b>=z(a[d].options.index,a[d]._i)){a.splice(d+1,0,this);break}-1===d&&a.unshift(this);d+=1}else a.push(this);return z(d,a.length-1)},bindAxes:function(){var b=
this,c=b.options,d=b.chart,e;v(b.axisTypes||[],function(g){v(d[g],function(a){e=a.options;if(c[g]===e.index||void 0!==c[g]&&c[g]===e.id||void 0===c[g]&&0===e.index)b.insert(a.series),b[g]=a,a.isDirty=!0});b[g]||b.optionalAxis===g||a.error(18,!0)})},updateParallelArrays:function(a,b){var d=a.series,e=arguments,g=c(b)?function(c){var e="y"===c&&d.toYData?d.toYData(a):a[c];d[c+"Data"][b]=e}:function(a){Array.prototype[b].apply(d[a+"Data"],Array.prototype.slice.call(e,2))};v(d.parallelArrays,g)},autoIncrement:function(){var a=
this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,e=this.chart.time,b=z(b,a.pointStart,0);this.pointInterval=c=z(this.pointInterval,a.pointInterval,1);d&&(a=new e.Date(b),"day"===d?e.set("Date",a,e.get("Date",a)+c):"month"===d?e.set("Month",a,e.get("Month",a)+c):"year"===d&&e.set("FullYear",a,e.get("FullYear",a)+c),c=a.getTime()-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options,d=c.plotOptions,e=(b.userOptions||{}).plotOptions||{},h=d[this.type];this.userOptions=
a;b=g(h,d.series,a);this.tooltipOptions=g(f.tooltip,f.plotOptions.series&&f.plotOptions.series.tooltip,f.plotOptions[this.type].tooltip,c.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=z(a.stickyTracking,e[this.type]&&e[this.type].stickyTracking,e.series&&e.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===h.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=(b.zones||[]).slice();!b.negativeColor&&
!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&q(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getName:function(){return this.name||"Series "+(this.index+1)},getCyclic:function(a,b,c){var d,e=this.chart,h=this.userOptions,g=a+"Index",k=a+"Counter",m=c?c.length:z(e.options.chart[a+"Count"],e[a+"Count"]);b||(d=z(h[g],h["_"+g]),
q(d)||(e.series.length||(e[k]=0),h["_"+g]=d=e[k]%m,e[k]+=1),c&&(b=c[d]));void 0!==d&&(this[g]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(b,d,g,k){var f=this,h=f.points,p=h&&h.length||0,l,x=f.options,r=
f.chart,E=null,q=f.xAxis,y=x.turboThreshold,C=this.xData,n=this.yData,A=(l=f.pointArrayMap)&&l.length;b=b||[];l=b.length;d=z(d,!0);if(!1!==k&&l&&p===l&&!f.cropped&&!f.hasGroupedData&&f.visible)v(b,function(a,b){h[b].update&&a!==x.data[b]&&h[b].update(a,!1,null,!1)});else{f.xIncrement=null;f.colorCounter=0;v(this.parallelArrays,function(a){f[a+"Data"].length=0});if(y&&l>y){for(g=0;null===E&&g<l;)E=b[g],g++;if(c(E))for(g=0;g<l;g++)C[g]=this.autoIncrement(),n[g]=b[g];else if(e(E))if(A)for(g=0;g<l;g++)E=
b[g],C[g]=E[0],n[g]=E.slice(1,A+1);else for(g=0;g<l;g++)E=b[g],C[g]=E[0],n[g]=E[1];else a.error(12)}else for(g=0;g<l;g++)void 0!==b[g]&&(E={series:f},f.pointClass.prototype.applyOptions.apply(E,[b[g]]),f.updateParallelArrays(E,g));n&&m(n[0])&&a.error(14,!0);f.data=[];f.options.data=f.userOptions.data=b;for(g=p;g--;)h[g]&&h[g].destroy&&h[g].destroy();q&&(q.minRange=q.userMinRange);f.isDirty=r.isDirtyBox=!0;f.isDirtyData=!!h;g=!1}"point"===x.legendType&&(this.processData(),this.generatePoints());d&&
r.redraw(g)},processData:function(b){var c=this.xData,d=this.yData,e=c.length,g;g=0;var h,k,f=this.xAxis,m,l=this.options;m=l.cropThreshold;var x=this.getExtremesFromAll||l.getExtremesFromAll,r=this.isCartesian,l=f&&f.val2lin,q=f&&f.isLog,y=this.requireSorting,n,A;if(r&&!this.isDirty&&!f.isDirty&&!this.yAxis.isDirty&&!b)return!1;f&&(b=f.getExtremes(),n=b.min,A=b.max);if(r&&this.sorted&&!x&&(!m||e>m||this.forceCrop))if(c[e-1]<n||c[0]>A)c=[],d=[];else if(c[0]<n||c[e-1]>A)g=this.cropData(this.xData,
this.yData,n,A),c=g.xData,d=g.yData,g=g.start,h=!0;for(m=c.length||1;--m;)e=q?l(c[m])-l(c[m-1]):c[m]-c[m-1],0<e&&(void 0===k||e<k)?k=e:0>e&&y&&(a.error(15),y=!1);this.cropped=h;this.cropStart=g;this.processedXData=c;this.processedYData=d;this.closestPointRange=k},cropData:function(a,b,c,d){var e=a.length,h=0,g=e,k=z(this.cropShoulder,1),f;for(f=0;f<e;f++)if(a[f]>=c){h=Math.max(0,f-k);break}for(c=f;c<e;c++)if(a[c]>d){g=c+k;break}return{xData:a.slice(h,g),yData:b.slice(h,g),start:h,end:g}},generatePoints:function(){var a=
this.options,b=a.data,c=this.data,d,e=this.processedXData,h=this.processedYData,g=this.pointClass,k=e.length,f=this.cropStart||0,m,l=this.hasGroupedData,a=a.keys,r,q=[],n;c||l||(c=[],c.length=b.length,c=this.data=c);a&&l&&(this.options.keys=!1);for(n=0;n<k;n++)m=f+n,l?(r=(new g).init(this,[e[n]].concat(y(h[n]))),r.dataGroup=this.groupMap[n]):(r=c[m])||void 0===b[m]||(c[m]=r=(new g).init(this,b[m],e[n])),r&&(r.index=m,q[n]=r);this.options.keys=a;if(c&&(k!==(d=c.length)||l))for(n=0;n<d;n++)n!==f||l||
(n+=k),c[n]&&(c[n].destroyElements(),c[n].plotX=void 0);this.data=c;this.points=q},getExtremes:function(a){var b=this.yAxis,d=this.processedXData,g,k=[],h=0;g=this.xAxis.getExtremes();var f=g.min,m=g.max,l,x,r,q;a=a||this.stackedYData||this.processedYData||[];g=a.length;for(q=0;q<g;q++)if(x=d[q],r=a[q],l=(c(r,!0)||e(r))&&(!b.positiveValuesOnly||r.length||0<r),x=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[q+1]||x)>=f&&(d[q-1]||x)<=m,l&&x)if(l=r.length)for(;l--;)"number"===
typeof r[l]&&(k[h++]=r[l]);else k[h++]=r;this.dataMin=n(k);this.dataMax=G(k)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,d=this.xAxis,e=d.categories,g=this.yAxis,h=this.points,k=h.length,f=!!this.modifyValue,m=a.pointPlacement,r="between"===m||c(m),n=a.threshold,y=a.startFromThreshold?n:0,A,t,D,v,u=Number.MAX_VALUE;"between"===m&&(m=.5);c(m)&&(m*=z(a.pointRange||d.pointRange));for(a=0;a<k;a++){var I=h[a],K=I.x,B=I.y;t=I.low;var G=
b&&g.stacks[(this.negStacks&&B<(y?0:n)?"-":"")+this.stackKey],H;g.positiveValuesOnly&&null!==B&&0>=B&&(I.isNull=!0);I.plotX=A=l(Math.min(Math.max(-1E5,d.translate(K,0,0,0,1,m,"flags"===this.type)),1E5));b&&this.visible&&!I.isNull&&G&&G[K]&&(v=this.getStackIndicator(v,K,this.index),H=G[K],B=H.points[v.key],t=B[0],B=B[1],t===y&&v.key===G[K].base&&(t=z(n,g.min)),g.positiveValuesOnly&&0>=t&&(t=null),I.total=I.stackTotal=H.total,I.percentage=H.total&&I.y/H.total*100,I.stackY=B,H.setOffset(this.pointXOffset||
0,this.barW||0));I.yBottom=q(t)?Math.min(Math.max(-1E5,g.translate(t,0,1,0,1)),1E5):null;f&&(B=this.modifyValue(B,I));I.plotY=t="number"===typeof B&&Infinity!==B?Math.min(Math.max(-1E5,g.translate(B,0,1,0,1)),1E5):void 0;I.isInside=void 0!==t&&0<=t&&t<=g.len&&0<=A&&A<=d.len;I.clientX=r?l(d.translate(K,0,0,0,1,m)):A;I.negative=I.y<(n||0);I.category=e&&void 0!==e[I.x]?e[I.x]:I.x;I.isNull||(void 0!==D&&(u=Math.min(u,Math.abs(A-D))),D=A);I.zone=this.zones.length&&I.getZone()}this.closestPointRangePx=
u},getValidPoints:function(a,b){var c=this.chart;return k(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,e=b.inverted,h=this.clipBox,g=h||b.clipBox,k=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,c.xAxis,c.yAxis].join(),m=b[k],f=b[k+"m"];m||(a&&(g.width=0,e&&(g.x=b.plotSizeX),b[k+"m"]=f=d.clipRect(e?b.plotSizeX+99:-99,e?-b.plotLeft:-b.plotTop,99,e?b.chartWidth:
b.chartHeight)),b[k]=m=d.clipRect(g),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=1);!1!==c.clip&&(this.group.clip(a||h?m:b.clipRect),this.markerGroup.clip(f),this.sharedClipKey=k);a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),0===m.count.length&&k&&b[k]&&(h||(b[k]=b[k].destroy()),b[k+"m"]&&(b[k+"m"]=b[k+"m"].destroy())))},animate:function(a){var b=this.chart,c=H(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&
a.animate({width:b.plotSizeX,x:0},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();d(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,d,e,h,g=this.options.marker,k,m,f,l=this[this.specialGroup]||this.markerGroup,r,q=z(g.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=g.enabledThreshold*g.radius);if(!1!==g.enabled||this._hasPointMarkers)for(c=0;c<a.length;c++)d=
a[c],h=d.graphic,k=d.marker||{},m=!!d.marker,e=q&&void 0===k.enabled||k.enabled,f=d.isInside,e&&!d.isNull?(e=z(k.symbol,this.symbol),r=this.markerAttribs(d,d.selected&&"select"),h?h[f?"show":"hide"](!0).animate(r):f&&(0<r.width||d.hasImage)&&(d.graphic=h=b.renderer.symbol(e,r.x,r.y,r.width,r.height,m?k:g).add(l)),h&&h.attr(this.pointAttribs(d,d.selected&&"select")),h&&h.addClass(d.getClassName(),!0)):h&&(d.graphic=h.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},
e=d.symbol||c.symbol,h=z(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],h=z(b&&b.radius,c&&c.radius,h+(c&&c.radiusPlus||0)));a.hasImage=e&&0===e.indexOf("url");a.hasImage&&(h=0);a={x:Math.floor(a.plotX)-h,y:a.plotY-h};h&&(a.width=a.height=2*h);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,e=d&&d.marker||{},h=this.color,g=d&&d.color,k=a&&a.color,d=z(e.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;h=g||a||k||h;a=e.fillColor||c.fillColor||h;h=e.lineColor||
c.lineColor||h;b&&(c=c.states[b],b=e.states&&e.states[b]||{},d=z(b.lineWidth,c.lineWidth,d+z(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,h=b.lineColor||c.lineColor||h);return{stroke:h,"stroke-width":d,fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(D.navigator.userAgent),e,g,h=a.data||[],k,m;d(a,"destroy");K(a);v(a.axisTypes||[],function(b){(m=a[b])&&m.series&&(u(m.series,a),m.isDirty=m.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);
for(g=h.length;g--;)(k=h[g])&&k.destroy&&k.destroy();a.points=null;clearTimeout(a.animationTimeout);r(a,function(a,b){a instanceof I&&!a.survive&&(e=c&&"group"===b?"hide":"destroy",a[e]())});b.hoverSeries===a&&(b.hoverSeries=null);u(b.series,a);b.orderSeries();r(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var d=this,e=d.options,h=e.step,g,k=[],m=[],f;a=a||d.points;(g=a.reversed)&&a.reverse();(h={right:1,center:2}[h]||h&&3)&&g&&(h=4-h);!e.connectNulls||b||c||(a=this.getValidPoints(a));
v(a,function(g,l){var p=g.plotX,r=g.plotY,x=a[l-1];(g.leftCliff||x&&x.rightCliff)&&!c&&(f=!0);g.isNull&&!q(b)&&0<l?f=!e.connectNulls:g.isNull&&!b?f=!0:(0===l||f?l=["M",g.plotX,g.plotY]:d.getPointSpline?l=d.getPointSpline(a,g,l):h?(l=1===h?["L",x.plotX,r]:2===h?["L",(x.plotX+p)/2,x.plotY,"L",(x.plotX+p)/2,r]:["L",p,x.plotY],l.push("L",p,r)):l=["L",p,r],m.push(g.x),h&&m.push(g.x),k.push.apply(k,l),f=!1)});k.xMap=m;return d.graphPath=k},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||
this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];v(this.zones,function(c,e){d.push(["zone-graph-"+e,"highcharts-graph highcharts-zone-graph-"+e+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});v(d,function(d,e){var h=d[0],g=a[h];g?(g.endX=a.preventGraphAnimation?null:c.xMap,g.animate({d:c})):c.length&&(a[h]=a.chart.renderer.path(c).addClass(d[1]).attr({zIndex:1}).add(a.group),g={stroke:d[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&
a.color||"none"},d[3]?g.dashstyle=d[3]:"square"!==b.linecap&&(g["stroke-linecap"]=g["stroke-linejoin"]="round"),g=a[h].attr(g).shadow(2>e&&b.shadow));g&&(g.startX=c.xMap,g.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,d=this.zones,e,h,g=this.clips||[],k,m=this.graph,f=this.area,l=Math.max(b.chartWidth,b.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],q,n,y=b.inverted,A,t,D,u,I=!1;d.length&&(m||f)&&r&&void 0!==r.min&&(n=r.reversed,A=r.horiz,m&&m.hide(),f&&f.hide(),
q=r.getExtremes(),v(d,function(d,p){e=n?A?b.plotWidth:0:A?0:r.toPixels(q.min);e=Math.min(Math.max(z(h,e),0),l);h=Math.min(Math.max(Math.round(r.toPixels(z(d.value,q.max),!0)),0),l);I&&(e=h=r.toPixels(q.max));t=Math.abs(e-h);D=Math.min(e,h);u=Math.max(e,h);r.isXAxis?(k={x:y?u:D,y:0,width:t,height:l},A||(k.x=b.plotHeight-k.x)):(k={x:0,y:y?u:D,width:l,height:t},A&&(k.y=b.plotWidth-k.y));y&&c.isVML&&(k=r.isXAxis?{x:0,y:n?D:u,height:k.width,width:b.chartWidth}:{x:k.y-b.plotLeft-b.spacingBox.x,y:0,width:k.height,
height:b.chartHeight});g[p]?g[p].animate(k):(g[p]=c.clipRect(k),m&&a["zone-graph-"+p].clip(g[p]),f&&a["zone-area-"+p].clip(g[p]));I=d.value>q.max}),this.clips=g)},invertGroups:function(a){function b(){v(["group","markerGroup"],function(b){c[b]&&(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,e;c.xAxis&&(e=B(d,"resize",b),B(c,"destroy",e),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,e){var g=
this[a],k=!g;k&&(this[a]=g=this.chart.renderer.g().attr({zIndex:d||.1}).add(e));g.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(q(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(g.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);g.attr({visibility:c})[k?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);
return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,e=!!a.animate&&b.renderer.isSVG&&H(d.animation).duration,g=a.visible?"inherit":"hidden",k=d.zIndex,m=a.hasRendered,f=b.seriesGroup,l=b.inverted;c=a.plotGroup("group","series",g,k,f);a.markerGroup=a.plotGroup("markerGroup","markers",g,k,f);e&&a.animate(!0);c.inverted=a.isCartesian?l:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();
a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(l);!1===d.clip||a.sharedClipKey||m||c.clip(b.clipRect);e&&a.animate();m||(a.animationTimeout=A(function(){a.afterAnimate()},e));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,e=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:z(d&&d.left,a.plotLeft),translateY:z(e&&e.top,
a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:e?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,d,e){var g,h;if(h=c&&c.length)return g=b.kdAxisArray[d%e],c.sort(function(a,b){return a[g]-b[g]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),d+1,e),right:a(c.slice(h+
1),d+1,e)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;A(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,h,m){var f=b.point,l=d.kdAxisArray[h%m],p,r,n=f;r=q(a[e])&&q(f[e])?Math.pow(a[e]-f[e],2):null;p=q(a[g])&&q(f[g])?Math.pow(a[g]-f[g],2):null;p=(r||0)+(p||0);f.dist=q(p)?Math.sqrt(p):Number.MAX_VALUE;f.distX=q(r)?Math.sqrt(r):Number.MAX_VALUE;
l=a[l]-f[l];p=0>l?"left":"right";r=0>l?"right":"left";b[p]&&(p=c(a,b[p],h+1,m),n=p[k]<n[k]?p:f);b[r]&&Math.sqrt(l*l)<n[k]&&(a=c(a,b[r],h+1,m),n=a[k]<n[k]?a:n);return n}var d=this,e=this.kdAxisArray[0],g=this.kdAxisArray[1],k=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(L);(function(a){var B=a.Axis,H=a.Chart,G=a.correctFloat,n=a.defined,l=a.destroyObjectProperties,f=a.each,t=
a.format,q=a.objectEach,v=a.pick,u=a.Series;a.StackItem=function(a,d,k,e,c){var b=a.chart.inverted;this.axis=a;this.isNegative=k;this.options=d;this.x=e;this.total=null;this.points={};this.stack=c;this.rightCliff=this.leftCliff=0;this.alignOptions={align:d.align||(b?k?"left":"right":"center"),verticalAlign:d.verticalAlign||(b?"middle":k?"bottom":"top"),y:v(d.y,b?4:k?14:-6),x:v(d.x,b?k?-6:6:0)};this.textAlign=d.textAlign||(b?k?"right":"left":"center")};a.StackItem.prototype={destroy:function(){l(this,
this.axis)},render:function(a){var b=this.axis.chart,k=this.options,e=k.format,e=e?t(e,this,b.time):k.formatter.call(this);this.label?this.label.attr({text:e,visibility:"hidden"}):this.label=b.renderer.text(e,null,null,k.useHTML).css(k.style).attr({align:this.textAlign,rotation:k.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,d){var b=this.axis,e=b.chart,c=b.translate(b.usePercentage?100:this.total,0,0,0,1),b=b.translate(0),b=Math.abs(c-b);a=e.xAxis[0].translate(this.x)+a;c=this.getStackBox(e,
this,a,c,d,b);if(d=this.label)d.align(this.alignOptions,null,c),c=d.alignAttr,d[!1===this.options.crop||e.isInsidePlot(c.x,c.y)?"show":"hide"](!0)},getStackBox:function(a,d,k,e,c,m){var b=d.axis.reversed,f=a.inverted;a=a.plotHeight;d=d.isNegative&&!b||!d.isNegative&&b;return{x:f?d?e:e-m:k,y:f?a-k-c:d?a-e-m:a-e,width:f?m:c,height:f?c:m}}};H.prototype.getStacks=function(){var a=this;f(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});f(a.series,function(b){!b.options.stacking||
!0!==b.visible&&!1!==a.options.chart.ignoreHiddenSeries||(b.stackKey=b.type+v(b.options.stack,""))})};B.prototype.buildStacks=function(){var a=this.series,d=v(this.options.reversedStacks,!0),k=a.length,e;if(!this.isXAxis){this.usePercentage=!1;for(e=k;e--;)a[d?e:k-e-1].setStackedPoints();for(e=0;e<k;e++)a[e].modifyStacks()}};B.prototype.renderStackTotals=function(){var a=this.chart,d=a.renderer,k=this.stacks,e=this.stackTotalGroup;e||(this.stackTotalGroup=e=d.g("stack-labels").attr({visibility:"visible",
zIndex:6}).add());e.translate(a.plotLeft,a.plotTop);q(k,function(a){q(a,function(a){a.render(e)})})};B.prototype.resetStacks=function(){var a=this,d=a.stacks;a.isXAxis||q(d,function(b){q(b,function(d,c){d.touched<a.stacksTouched?(d.destroy(),delete b[c]):(d.total=null,d.cumulative=null)})})};B.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),q(a,function(a){q(a,function(a){a.cumulative=a.total})}))};u.prototype.setStackedPoints=function(){if(this.options.stacking&&
(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var b=this.processedXData,d=this.processedYData,k=[],e=d.length,c=this.options,f=c.threshold,g=v(c.startFromThreshold&&f,0),l=c.stack,c=c.stacking,q=this.stackKey,t="-"+q,y=this.negStacks,u=this.yAxis,A=u.stacks,D=u.oldStacks,x,E,C,J,F,h,p;u.stacksTouched+=1;for(F=0;F<e;F++)h=b[F],p=d[F],x=this.getStackIndicator(x,h,this.index),J=x.key,C=(E=y&&p<(g?0:f))?t:q,A[C]||(A[C]={}),A[C][h]||(D[C]&&D[C][h]?(A[C][h]=D[C][h],A[C][h].total=
null):A[C][h]=new a.StackItem(u,u.options.stackLabels,E,h,l)),C=A[C][h],null!==p?(C.points[J]=C.points[this.index]=[v(C.cumulative,g)],n(C.cumulative)||(C.base=J),C.touched=u.stacksTouched,0<x.index&&!1===this.singleStacks&&(C.points[J][0]=C.points[this.index+","+h+",0"][0])):C.points[J]=C.points[this.index]=null,"percent"===c?(E=E?q:t,y&&A[E]&&A[E][h]?(E=A[E][h],C.total=E.total=Math.max(E.total,C.total)+Math.abs(p)||0):C.total=G(C.total+(Math.abs(p)||0))):C.total=G(C.total+(p||0)),C.cumulative=v(C.cumulative,
g)+(p||0),null!==p&&(C.points[J].push(C.cumulative),k[F]=C.cumulative);"percent"===c&&(u.usePercentage=!0);this.stackedYData=k;u.oldStacks={}}};u.prototype.modifyStacks=function(){var a=this,d=a.stackKey,k=a.yAxis.stacks,e=a.processedXData,c,m=a.options.stacking;a[m+"Stacker"]&&f([d,"-"+d],function(b){for(var d=e.length,g,f;d--;)if(g=e[d],c=a.getStackIndicator(c,g,a.index,b),f=(g=k[b]&&k[b][g])&&g.points[c.key])a[m+"Stacker"](f,g,d)})};u.prototype.percentStacker=function(a,d,k){d=d.total?100/d.total:
0;a[0]=G(a[0]*d);a[1]=G(a[1]*d);this.stackedYData[k]=a[1]};u.prototype.getStackIndicator=function(a,d,k,e){!n(a)||a.x!==d||e&&a.key!==e?a={x:d,index:0,key:e}:a.index++;a.key=[k,d,a.index].join();return a}})(L);(function(a){var B=a.addEvent,H=a.animate,G=a.Axis,n=a.createElement,l=a.css,f=a.defined,t=a.each,q=a.erase,v=a.extend,u=a.fireEvent,b=a.inArray,d=a.isNumber,k=a.isObject,e=a.isArray,c=a.merge,m=a.objectEach,g=a.pick,r=a.Point,z=a.Series,K=a.seriesTypes,y=a.setAnimation,I=a.splat;v(a.Chart.prototype,
{addSeries:function(a,b,c){var d,e=this;a&&(b=g(b,!0),u(e,"addSeries",{options:a},function(){d=e.initSeries(a);e.isDirtyLegend=!0;e.linkSeries();b&&e.redraw(c)}));return d},addAxis:function(a,b,d,e){var k=b?"xAxis":"yAxis",f=this.options;a=c(a,{index:this[k].length,isX:b});b=new G(this,a);f[k]=I(f[k]||{});f[k].push(a);g(d,!0)&&this.redraw(e);return b},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,g=function(){d&&l(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+
"px",height:b.plotHeight+"px"})};d||(b.loadingDiv=d=n("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=n("span",{className:"highcharts-loading-inner"},null,d),B(b,"redraw",g));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;l(d,v(e.style,{zIndex:10}));l(b.loadingSpan,e.labelStyle);b.loadingShown||(l(d,{opacity:0,display:""}),H(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));b.loadingShown=!0;g()},hideLoading:function(){var a=
this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",H(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){l(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),update:function(a,e,k){var l=this,r={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},q=a.chart,n,h,p=[];if(q){c(!0,l.options.chart,q);"className"in q&&l.setClassName(q.className);if("inverted"in q||"polar"in q)l.propFromSeries(),n=!0;"alignTicks"in q&&(n=!0);m(q,function(a,c){-1!==b("chart."+c,l.propsRequireUpdateSeries)&&(h=!0);-1!==b(c,l.propsRequireDirtyBox)&&
(l.isDirtyBox=!0)});"style"in q&&l.renderer.setStyle(q.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&c(!0,this.options.plotOptions,a.plotOptions);m(a,function(a,c){if(l[c]&&"function"===typeof l[c].update)l[c].update(a,!1);else if("function"===typeof l[r[c]])l[r[c]](a);"chart"!==c&&-1!==b(c,l.propsRequireUpdateSeries)&&(h=!0)});t("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(t(I(a[b]),function(a,c){(c=f(a.id)&&l.get(a.id)||l[b][c])&&c.coll===b&&(c.update(a,
!1),k&&(c.touched=!0));if(!c&&k)if("series"===b)l.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)l.addAxis(a,"xAxis"===b,!1).touched=!0}),k&&t(l[b],function(a){a.touched?delete a.touched:p.push(a)}))});t(p,function(a){a.remove(!1)});n&&t(l.axes,function(a){a.update({},!1)});h&&t(l.series,function(a){a.update({},!1)});a.loading&&c(!0,l.options.loading,a.loading);n=q&&q.width;q=q&&q.height;d(n)&&n!==l.chartWidth||d(q)&&q!==l.chartHeight?l.setSize(n,q):g(e,!0)&&l.redraw()},setSubtitle:function(a){this.setTitle(void 0,
a)}});v(r.prototype,{update:function(a,b,c,d){function e(){f.applyOptions(a);null===f.y&&h&&(f.graphic=h.destroy());k(a,!0)&&(h&&h.element&&a&&a.marker&&void 0!==a.marker.symbol&&(f.graphic=h.destroy()),a&&a.dataLabels&&f.dataLabel&&(f.dataLabel=f.dataLabel.destroy()),f.connector&&(f.connector=f.connector.destroy()));l=f.index;m.updateParallelArrays(f,l);q.data[l]=k(q.data[l],!0)||k(a,!0)?f.options:a;m.isDirty=m.isDirtyData=!0;!m.fixedBox&&m.hasCartesianSeries&&(r.isDirtyBox=!0);"point"===q.legendType&&
(r.isDirtyLegend=!0);b&&r.redraw(c)}var f=this,m=f.series,h=f.graphic,l,r=m.chart,q=m.options;b=g(b,!0);!1===d?e():f.firePointEvent("update",{options:a},e)},remove:function(a,c){this.series.removePoint(b(this,this.series.data),a,c)}});v(z.prototype,{addPoint:function(a,b,c,d){var e=this.options,k=this.data,f=this.chart,h=this.xAxis,h=h&&h.hasNames&&h.names,m=e.data,l,r,q=this.xData,n,y;b=g(b,!0);l={series:this};this.pointClass.prototype.applyOptions.apply(l,[a]);y=l.x;n=q.length;if(this.requireSorting&&
y<q[n-1])for(r=!0;n&&q[n-1]>y;)n--;this.updateParallelArrays(l,"splice",n,0,0);this.updateParallelArrays(l,n);h&&l.name&&(h[y]=l.name);m.splice(n,0,a);r&&(this.data.splice(n,0,null),this.processData());"point"===e.legendType&&this.generatePoints();c&&(k[0]&&k[0].remove?k[0].remove(!1):(k.shift(),this.updateParallelArrays(l,"shift"),m.shift()));this.isDirtyData=this.isDirty=!0;b&&f.redraw(d)},removePoint:function(a,b,c){var d=this,e=d.data,k=e[a],f=d.points,h=d.chart,m=function(){f&&f.length===e.length&&
f.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(k||{series:d},"splice",a,1);k&&k.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};y(c,h);b=g(b,!0);k?k.firePointEvent("remove",null,m):m()},remove:function(a,b,c){function d(){e.destroy();k.isDirtyLegend=k.isDirtyBox=!0;k.linkSeries();g(a,!0)&&k.redraw(b)}var e=this,k=e.chart;!1!==c?u(e,"remove",null,d):d()},update:function(a,b){var d=this,e=d.chart,k=d.userOptions,f=d.oldType||d.type,m=a.type||k.type||e.options.chart.type,
h=K[f].prototype,l,r=["group","markerGroup","dataLabelsGroup"],q=["navigatorSeries","baseSeries"],n=d.finishedAnimating&&{animation:!1};if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,b);q=r.concat(q);t(q,function(a){q[a]=d[a];delete d[a]});a=c(k,n,{index:d.index,pointStart:d.xData[0]},{data:d.options.data},a);d.remove(!1,null,!1);for(l in h)d[l]=void 0;v(d,K[m||f].prototype);t(q,function(a){d[a]=q[a]});d.init(e,a);a.zIndex!==k.zIndex&&t(r,function(b){d[b]&&d[b].attr({zIndex:a.zIndex})});
d.oldType=f;e.linkSeries();g(b,!0)&&e.redraw(!1)}});v(G.prototype,{update:function(a,b){var d=this.chart;a=d.options[this.coll][this.options.index]=c(this.userOptions,a);this.destroy(!0);this.init(d,v(a,{events:void 0}));d.isDirtyBox=!0;g(b,!0)&&d.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,k=d.length;k--;)d[k]&&d[k].remove(!1);q(b.axes,this);q(b[c],this);e(b.options[c])?b.options[c].splice(this.options.index,1):delete b.options[c];t(b[c],function(a,b){a.options.index=
b});this.destroy();b.isDirtyBox=!0;g(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(L);(function(a){var B=a.color,H=a.each,G=a.map,n=a.pick,l=a.Series,f=a.seriesType;f("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(f){var l=[],t=[],u=this.xAxis,b=this.yAxis,d=b.stacks[this.stackKey],k={},e=this.index,c=b.series,m=c.length,g,r=n(b.options.reversedStacks,!0)?1:-1,z;f=f||this.points;
if(this.options.stacking){for(z=0;z<f.length;z++)f[z].leftNull=f[z].rightNull=null,k[f[z].x]=f[z];a.objectEach(d,function(a,b){null!==a.total&&t.push(b)});t.sort(function(a,b){return a-b});g=G(c,function(){return this.visible});H(t,function(a,c){var f=0,q,n;if(k[a]&&!k[a].isNull)l.push(k[a]),H([-1,1],function(b){var f=1===b?"rightNull":"leftNull",l=0,y=d[t[c+b]];if(y)for(z=e;0<=z&&z<m;)q=y.points[z],q||(z===e?k[a][f]=!0:g[z]&&(n=d[a].points[z])&&(l-=n[1]-n[0])),z+=r;k[a][1===b?"rightCliff":"leftCliff"]=
l});else{for(z=e;0<=z&&z<m;){if(q=d[a].points[z]){f=q[1];break}z+=r}f=b.translate(f,0,1,0,1);l.push({isNull:!0,plotX:u.translate(a,0,0,0,1),x:a,plotY:f,yBottom:f})}})}return l},getGraphPath:function(a){var f=l.prototype.getGraphPath,t=this.options,u=t.stacking,b=this.yAxis,d,k,e=[],c=[],m=this.index,g,r=b.stacks[this.stackKey],z=t.threshold,B=b.getThreshold(t.threshold),y,t=t.connectNulls||"percent"===u,I=function(d,f,k){var l=a[d];d=u&&r[l.x].points[m];var q=l[k+"Null"]||0;k=l[k+"Cliff"]||0;var n,
y,l=!0;k||q?(n=(q?d[0]:d[1])+k,y=d[0]+k,l=!!q):!u&&a[f]&&a[f].isNull&&(n=y=z);void 0!==n&&(c.push({plotX:g,plotY:null===n?B:b.getThreshold(n),isNull:l,isCliff:!0}),e.push({plotX:g,plotY:null===y?B:b.getThreshold(y),doCurve:!1}))};a=a||this.points;u&&(a=this.getStackPoints(a));for(d=0;d<a.length;d++)if(k=a[d].isNull,g=n(a[d].rectPlotX,a[d].plotX),y=n(a[d].yBottom,B),!k||t)t||I(d,d-1,"left"),k&&!u&&t||(c.push(a[d]),e.push({x:d,plotX:g,plotY:y})),t||I(d,d+1,"right");d=f.call(this,c,!0,!0);e.reversed=
!0;k=f.call(this,e,!0,!0);k.length&&(k[0]="L");k=d.concat(k);f=f.call(this,c,!1,t);k.xMap=d.xMap;this.areaPath=k;return f},drawGraph:function(){this.areaPath=[];l.prototype.drawGraph.apply(this);var a=this,f=this.areaPath,v=this.options,u=[["area","highcharts-area",this.color,v.fillColor]];H(this.zones,function(b,d){u.push(["zone-area-"+d,"highcharts-area highcharts-zone-area-"+d+" "+b.className,b.color||a.color,b.fillColor||v.fillColor])});H(u,function(b){var d=b[0],k=a[d];k?(k.endX=a.preventGraphAnimation?
null:f.xMap,k.animate({d:f})):(k=a[d]=a.chart.renderer.path(f).addClass(b[1]).attr({fill:n(b[3],B(b[2]).setOpacity(n(v.fillOpacity,.75)).get()),zIndex:0}).add(a.group),k.isArea=!0);k.startX=f.xMap;k.shiftUnit=v.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(L);(function(a){var B=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,n){var l=G.plotX,f=G.plotY,t=a[n-1];n=a[n+1];var q,v,u,b;if(t&&!t.isNull&&!1!==t.doCurve&&!G.isCliff&&n&&!n.isNull&&!1!==n.doCurve&&
!G.isCliff){a=t.plotY;u=n.plotX;n=n.plotY;var d=0;q=(1.5*l+t.plotX)/2.5;v=(1.5*f+a)/2.5;u=(1.5*l+u)/2.5;b=(1.5*f+n)/2.5;u!==q&&(d=(b-v)*(u-l)/(u-q)+f-b);v+=d;b+=d;v>a&&v>f?(v=Math.max(a,f),b=2*f-v):v<a&&v<f&&(v=Math.min(a,f),b=2*f-v);b>n&&b>f?(b=Math.max(n,f),v=2*f-b):b<n&&b<f&&(b=Math.min(n,f),v=2*f-b);G.rightContX=u;G.rightContY=b}G=["C",B(t.rightContX,t.plotX),B(t.rightContY,t.plotY),B(q,l),B(v,f),l,f];t.rightContX=t.rightContY=null;return G}})})(L);(function(a){var B=a.seriesTypes.area.prototype,
H=a.seriesType;H("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:B.getStackPoints,getGraphPath:B.getGraphPath,drawGraph:B.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(L);(function(a){var B=a.animObject,H=a.color,G=a.each,n=a.extend,l=a.isNumber,f=a.merge,t=a.pick,q=a.Series,v=a.seriesType,u=a.svg;v("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},
select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){q.prototype.init.apply(this,arguments);var a=this,d=a.chart;d.hasRendered&&G(d.series,function(b){b.type===a.type&&(b.isDirty=!0)})},getColumnMetrics:function(){var a=this,d=a.options,f=a.xAxis,
e=a.yAxis,c=f.reversed,m,g={},l=0;!1===d.grouping?l=1:G(a.chart.series,function(b){var c=b.options,d=b.yAxis,f;b.type!==a.type||!b.visible&&a.chart.options.chart.ignoreHiddenSeries||e.len!==d.len||e.pos!==d.pos||(c.stacking?(m=b.stackKey,void 0===g[m]&&(g[m]=l++),f=g[m]):!1!==c.grouping&&(f=l++),b.columnIndex=f)});var q=Math.min(Math.abs(f.transA)*(f.ordinalSlope||d.pointRange||f.closestPointRange||f.tickInterval||1),f.len),n=q*d.groupPadding,y=(q-2*n)/(l||1),d=Math.min(d.maxPointWidth||f.len,t(d.pointWidth,
y*(1-2*d.pointPadding)));a.columnMetrics={width:d,offset:(y-d)/2+(n+((a.columnIndex||0)+(c?1:0))*y-q/2)*(c?-1:1)};return a.columnMetrics},crispCol:function(a,d,f,e){var b=this.chart,k=this.borderWidth,g=-(k%2?.5:0),k=k%2?.5:1;b.inverted&&b.renderer.isVML&&(k+=1);this.options.crisp&&(f=Math.round(a+f)+g,a=Math.round(a)+g,f-=a);e=Math.round(d+e)+k;g=.5>=Math.abs(d)&&.5<e;d=Math.round(d)+k;e-=d;g&&e&&(--d,e+=1);return{x:a,y:d,width:f,height:e}},translate:function(){var a=this,d=a.chart,f=a.options,e=
a.dense=2>a.closestPointRange*a.xAxis.transA,e=a.borderWidth=t(f.borderWidth,e?0:1),c=a.yAxis,l=f.threshold,g=a.translatedThreshold=c.getThreshold(l),r=t(f.minPointLength,5),n=a.getColumnMetrics(),u=n.width,y=a.barW=Math.max(u,1+2*e),v=a.pointXOffset=n.offset;d.inverted&&(g-=.5);f.pointPadding&&(y=Math.ceil(y));q.prototype.translate.apply(a);G(a.points,function(b){var e=t(b.yBottom,g),f=999+Math.abs(e),f=Math.min(Math.max(-f,b.plotY),c.len+f),k=b.plotX+v,m=y,q=Math.min(f,e),n,h=Math.max(f,e)-q;r&&
Math.abs(h)<r&&(h=r,n=!c.reversed&&!b.negative||c.reversed&&b.negative,b.y===l&&a.dataMax<=l&&c.min<l&&(n=!n),q=Math.abs(q-g)>r?e-r:g-(n?r:0));b.barX=k;b.pointWidth=u;b.tooltipPos=d.inverted?[c.len+c.pos-d.plotLeft-f,a.xAxis.len-k-m/2,h]:[k+m/2,f+c.pos-d.plotTop,h];b.shapeType="rect";b.shapeArgs=a.crispCol.apply(a,b.isNull?[k,g,m,0]:[k,q,m,h])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},
pointAttribs:function(a,d){var b=this.options,e,c=this.pointAttrToOptions||{};e=c.stroke||"borderColor";var l=c["stroke-width"]||"borderWidth",g=a&&a.color||this.color,r=a&&a[e]||b[e]||this.color||g,q=a&&a[l]||b[l]||this[l]||0,c=b.dashStyle;a&&this.zones.length&&(g=a.getZone(),g=a.options.color||g&&g.color||this.color);d&&(a=f(b.states[d],a.options.states&&a.options.states[d]||{}),d=a.brightness,g=a.color||void 0!==d&&H(g).brighten(a.brightness).get()||g,r=a[e]||r,q=a[l]||q,c=a.dashStyle||c);e={fill:g,
stroke:r,"stroke-width":q};c&&(e.dashstyle=c);return e},drawPoints:function(){var a=this,d=this.chart,k=a.options,e=d.renderer,c=k.animationLimit||250,m;G(a.points,function(b){var g=b.graphic;if(l(b.plotY)&&null!==b.y){m=b.shapeArgs;if(g)g[d.pointCount<c?"animate":"attr"](f(m));else b.graphic=g=e[b.shapeType](m).add(b.group||a.group);k.borderRadius&&g.attr({r:k.borderRadius});g.attr(a.pointAttribs(b,b.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);g.addClass(b.getClassName(),
!0)}else g&&(b.graphic=g.destroy())})},animate:function(a){var b=this,f=this.yAxis,e=b.options,c=this.chart.inverted,l={},g=c?"translateX":"translateY",r;u&&(a?(l.scaleY=.001,a=Math.min(f.pos+f.len,Math.max(f.pos,f.toPixels(e.threshold))),c?l.translateX=a-f.len:l.translateY=a,b.group.attr(l)):(r=b.group.attr(g),b.group.animate({scaleY:1},n(B(b.options.animation),{step:function(a,c){l[g]=r+c.pos*(f.pos-r);b.group.attr(l)}})),b.animate=null))},remove:function(){var a=this,d=a.chart;d.hasRendered&&G(d.series,
function(b){b.type===a.type&&(b.isDirty=!0)});q.prototype.remove.apply(a,arguments)}})})(L);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(L);(function(a){var B=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&B.prototype.drawGraph.call(this)}})})(L);(function(a){var B=a.deg2rad,H=a.isNumber,G=a.pick,n=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,f=this.chart,t=2*(a.slicedOffset||0),q=f.plotWidth-2*t,f=f.plotHeight-2*t,v=a.center,v=[G(v[0],"50%"),G(v[1],"50%"),a.size||"100%",a.innerSize||0],u=Math.min(q,
f),b,d;for(b=0;4>b;++b)d=v[b],a=2>b||2===b&&/%$/.test(d),v[b]=n(d,[q,f,u,v[2]][b])+(a?t:0);v[3]>v[2]&&(v[3]=v[2]);return v},getStartAndEndRadians:function(a,f){a=H(a)?a:0;f=H(f)&&f>a&&360>f-a?f:a+360;return{start:B*(a+-90),end:B*(f+-90)}}}})(L);(function(a){var B=a.addEvent,H=a.CenteredSeriesMixin,G=a.defined,n=a.each,l=a.extend,f=H.getStartAndEndRadians,t=a.inArray,q=a.noop,v=a.pick,u=a.Point,b=a.Series,d=a.seriesType,k=a.setAnimation;d("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,
enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var b=this,
d=b.points,e=b.startAngleRad;a||(n(d,function(a){var c=a.graphic,d=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:e,end:e}),c.animate({r:d.r,start:d.start,end:d.end},b.options.animation))}),b.animate=null)},updateTotals:function(){var a,b=0,d=this.points,g=d.length,f,k=this.options.ignoreHiddenPoint;for(a=0;a<g;a++)f=d[a],b+=k&&!f.visible?0:f.isNull?0:f.y;this.total=b;for(a=0;a<g;a++)f=d[a],f.percentage=0<b&&(f.visible||!k)?f.y/b*100:0,f.total=b},generatePoints:function(){b.prototype.generatePoints.call(this);
this.updateTotals()},translate:function(a){this.generatePoints();var b=0,d=this.options,e=d.slicedOffset,k=e+(d.borderWidth||0),l,q,n,t=f(d.startAngle,d.endAngle),u=this.startAngleRad=t.start,t=(this.endAngleRad=t.end)-u,D=this.points,x,E=d.dataLabels.distance,d=d.ignoreHiddenPoint,C,B=D.length,F;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){n=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(n)*(a[2]/2+d.labelDistance)};for(C=0;C<B;C++){F=D[C];
F.labelDistance=v(F.options.dataLabels&&F.options.dataLabels.distance,E);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,F.labelDistance);l=u+b*t;if(!d||F.visible)b+=F.percentage/100;q=u+b*t;F.shapeType="arc";F.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*l)/1E3,end:Math.round(1E3*q)/1E3};n=(q+l)/2;n>1.5*Math.PI?n-=2*Math.PI:n<-Math.PI/2&&(n+=2*Math.PI);F.slicedTranslation={translateX:Math.round(Math.cos(n)*e),translateY:Math.round(Math.sin(n)*e)};q=Math.cos(n)*a[2]/
2;x=Math.sin(n)*a[2]/2;F.tooltipPos=[a[0]+.7*q,a[1]+.7*x];F.half=n<-Math.PI/2||n>Math.PI/2?1:0;F.angle=n;l=Math.min(k,F.labelDistance/5);F.labelPos=[a[0]+q+Math.cos(n)*F.labelDistance,a[1]+x+Math.sin(n)*F.labelDistance,a[0]+q+Math.cos(n)*l,a[1]+x+Math.sin(n)*l,a[0]+q,a[1]+x,0>F.labelDistance?"center":F.half?"right":"left",n]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,d,g,f,k,q=a.options.shadow;q&&!a.shadowGroup&&(a.shadowGroup=b.g("shadow").add(a.group));n(a.points,function(c){g=
c.graphic;if(c.isNull)g&&(c.graphic=g.destroy());else{k=c.shapeArgs;d=c.getTranslate();var e=c.shadowGroup;q&&!e&&(e=c.shadowGroup=b.g("shadow").add(a.shadowGroup));e&&e.attr(d);f=a.pointAttribs(c,c.selected&&"select");g?g.setRadialReference(a.center).attr(f).animate(l(k,d)):(c.graphic=g=b[c.shapeType](k).setRadialReference(a.center).attr(d).add(a.group),c.visible||g.attr({visibility:"hidden"}),g.attr(f).attr({"stroke-linejoin":"round"}).shadow(q,e));g.addClass(c.getClassName())}})},searchPoint:q,
sortByAngle:function(a,b){a.sort(function(a,c){return void 0!==a.angle&&(c.angle-a.angle)*b})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:H.getCenter,getSymbol:q},{init:function(){u.prototype.init.apply(this,arguments);var a=this,b;a.name=v(a.name,"Slice");b=function(b){a.slice("select"===b.type)};B(a,"select",b);B(a,"unselect",b);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,b){var c=this,d=c.series,e=d.chart,f=d.options.ignoreHiddenPoint;
b=v(b,f);a!==c.visible&&(c.visible=c.options.visible=a=void 0===a?!c.visible:a,d.options.data[t(c,d.data)]=c.options,n(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)}),c.legendItem&&e.legend.colorizeItem(c,a),a||"hover"!==c.state||c.setState(""),f&&(d.isDirty=!0),b&&e.redraw())},slice:function(a,b,d){var c=this.series;k(d,c.chart);v(b,!0);this.sliced=this.options.sliced=G(a)?a:!this.sliced;c.options.data[t(this,c.data)]=this.options;this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var b=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(b.x,b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r-1,start:b.start,end:b.end})}})})(L);(function(a){var B=a.addEvent,H=a.arrayMax,G=a.defined,n=a.each,l=a.extend,f=a.format,t=a.map,q=a.merge,v=a.noop,u=a.pick,b=a.relativeLength,d=
a.Series,k=a.seriesTypes,e=a.stableSort;a.distribute=function(a,b){function c(a,b){return a.target-b.target}var d,f=!0,k=a,l=[],m;m=0;for(d=a.length;d--;)m+=a[d].size;if(m>b){e(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(m=d=0;m<=b;)m+=a[d].size,d++;l=a.splice(d-1,a.length)}e(a,c);for(a=t(a,function(a){return{size:a.size,targets:[a.target],align:u(a.align,.5)}});f;){for(d=a.length;d--;)f=a[d],m=(Math.min.apply(0,f.targets)+Math.max.apply(0,f.targets))/2,f.pos=Math.min(Math.max(0,m-f.size*
f.align),b-f.size);d=a.length;for(f=!1;d--;)0<d&&a[d-1].pos+a[d-1].size>a[d].pos&&(a[d-1].size+=a[d].size,a[d-1].targets=a[d-1].targets.concat(a[d].targets),a[d-1].align=.5,a[d-1].pos+a[d-1].size>b&&(a[d-1].pos=b-a[d-1].size),a.splice(d,1),f=!0)}d=0;n(a,function(a){var b=0;n(a.targets,function(){k[d].pos=a.pos+b;b+=k[d].size;d++})});k.push.apply(k,l);e(k,c)};d.prototype.drawDataLabels=function(){function b(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===
b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}var d=this,e=d.chart,k=d.options,l=k.dataLabels,t=d.points,y,v,A=d.hasRendered||0,D,x,E=u(l.defer,!!k.animation),C=e.renderer;if(l.enabled||d._hasPointLabels)d.dlProcessOptions&&d.dlProcessOptions(l),x=d.plotGroup("dataLabelsGroup","data-labels",E&&!A?"hidden":"visible",l.zIndex||6),E&&(x.attr({opacity:+A}),A||B(d,"afterAnimate",function(){d.visible&&x.show(!0);x[k.animation?"animate":"attr"]({opacity:1},
{duration:200})})),v=l,n(t,function(c){var g,h=c.dataLabel,m,n,r=c.connector,t=!h,A;y=c.dlOptions||c.options&&c.options.dataLabels;(g=u(y&&y.enabled,v.enabled)&&!c.isNull)&&(g=!0===b(c,y||l));g&&(l=q(v,y),m=c.getLabelConfig(),A=l[c.formatPrefix+"Format"]||l.format,D=G(A)?f(A,m,e.time):(l[c.formatPrefix+"Formatter"]||l.formatter).call(m,l),A=l.style,m=l.rotation,A.color=u(l.color,A.color,d.color,"#000000"),"contrast"===A.color&&(c.contrastColor=C.getContrast(c.color||d.color),A.color=l.inside||0>u(c.labelDistance,
l.distance)||k.stacking?c.contrastColor:"#000000"),k.cursor&&(A.cursor=k.cursor),n={fill:l.backgroundColor,stroke:l.borderColor,"stroke-width":l.borderWidth,r:l.borderRadius||0,rotation:m,padding:l.padding,zIndex:1},a.objectEach(n,function(a,b){void 0===a&&delete n[b]}));!h||g&&G(D)?g&&G(D)&&(h?n.text=D:(h=c.dataLabel=m?C.text(D,0,-9999).addClass("highcharts-data-label"):C.label(D,0,-9999,l.shape,null,null,l.useHTML,null,"data-label"),h.addClass(" highcharts-data-label-color-"+c.colorIndex+" "+(l.className||
"")+(l.useHTML?"highcharts-tracker":""))),h.attr(n),h.css(A).shadow(l.shadow),h.added||h.add(x),d.alignDataLabel(c,h,l,null,t)):(c.dataLabel=h=h.destroy(),r&&(c.connector=r.destroy()))})};d.prototype.alignDataLabel=function(a,b,d,e,f){var c=this.chart,g=c.inverted,k=u(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=u(a.plotY,-9999),n=b.getBBox(),q,r=d.rotation,t=d.align,v=this.visible&&(a.series.forceDL||c.isInsidePlot(k,Math.round(m),g)||e&&c.isInsidePlot(k,g?e.x+1:e.y+e.height-1,g)),z="justify"===u(d.overflow,
"justify");if(v&&(q=d.style.fontSize,q=c.renderer.fontMetrics(q,b).b,e=l({x:g?this.yAxis.len-m:k,y:Math.round(g?this.xAxis.len-k:m),width:0,height:0},e),l(d,{width:n.width,height:n.height}),r?(z=!1,k=c.renderer.rotCorr(q,r),k={x:e.x+d.x+e.width/2+k.x,y:e.y+d.y+{top:0,middle:.5,bottom:1}[d.verticalAlign]*e.height},b[f?"attr":"animate"](k).attr({align:t}),m=(r+720)%360,m=180<m&&360>m,"left"===t?k.y-=m?n.height:0:"center"===t?(k.x-=n.width/2,k.y-=n.height/2):"right"===t&&(k.x-=n.width,k.y-=m?0:n.height)):
(b.align(d,null,e),k=b.alignAttr),z?a.isLabelJustified=this.justifyDataLabel(b,d,k,n,e,f):u(d.crop,!0)&&(v=c.isInsidePlot(k.x,k.y)&&c.isInsidePlot(k.x+n.width,k.y+n.height)),d.shape&&!r))b[f?"attr":"animate"]({anchorX:g?c.plotWidth-a.plotY:a.plotX,anchorY:g?c.plotHeight-a.plotX:a.plotY});v||(b.attr({y:-9999}),b.placed=!1)};d.prototype.justifyDataLabel=function(a,b,d,e,f,k){var c=this.chart,g=b.align,l=b.verticalAlign,m,n,q=a.box?0:a.padding||0;m=d.x+q;0>m&&("right"===g?b.align="left":b.x=-m,n=!0);
m=d.x+e.width-q;m>c.plotWidth&&("left"===g?b.align="right":b.x=c.plotWidth-m,n=!0);m=d.y+q;0>m&&("bottom"===l?b.verticalAlign="top":b.y=-m,n=!0);m=d.y+e.height-q;m>c.plotHeight&&("top"===l?b.verticalAlign="bottom":b.y=c.plotHeight-m,n=!0);n&&(a.placed=!k,a.align(b,null,f));return n};k.pie&&(k.pie.prototype.drawDataLabels=function(){var b=this,e=b.data,g,f=b.chart,k=b.options.dataLabels,l=u(k.connectorPadding,10),q=u(k.connectorWidth,1),t=f.plotWidth,v=f.plotHeight,D,x=b.center,E=x[2]/2,C=x[1],B,F,
h,p,M=[[],[]],O,N,P,L,w=[0,0,0,0];b.visible&&(k.enabled||b._hasPointLabels)&&(n(e,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),d.prototype.drawDataLabels.apply(b),n(e,function(a){a.dataLabel&&a.visible&&(M[a.half].push(a),a.dataLabel._pos=null)}),n(M,function(c,d){var e,m,q=c.length,r=[],y;if(q)for(b.sortByAngle(c,d-.5),0<b.maxLabelDistance&&(e=Math.max(0,C-E-b.maxLabelDistance),m=Math.min(C+
E+b.maxLabelDistance,f.plotHeight),n(c,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,C-E-a.labelDistance),a.bottom=Math.min(C+E+a.labelDistance,f.plotHeight),y=a.dataLabel.getBBox().height||21,a.positionsIndex=r.push({target:a.labelPos[1]-a.top+y/2,size:y,rank:a.y})-1)}),a.distribute(r,m+y-e)),L=0;L<q;L++)g=c[L],m=g.positionsIndex,h=g.labelPos,B=g.dataLabel,P=!1===g.visible?"hidden":"inherit",N=e=h[1],r&&G(r[m])&&(void 0===r[m].pos?P="hidden":(p=r[m].size,N=g.top+r[m].pos)),delete g.positionIndex,
O=k.justify?x[0]+(d?-1:1)*(E+g.labelDistance):b.getX(N<g.top+2||N>g.bottom-2?e:N,d,g),B._attr={visibility:P,align:h[6]},B._pos={x:O+k.x+({left:l,right:-l}[h[6]]||0),y:N+k.y-10},h.x=O,h.y=N,u(k.crop,!0)&&(F=B.getBBox().width,e=null,O-F<l?(e=Math.round(F-O+l),w[3]=Math.max(e,w[3])):O+F>t-l&&(e=Math.round(O+F-t+l),w[1]=Math.max(e,w[1])),0>N-p/2?w[0]=Math.max(Math.round(-N+p/2),w[0]):N+p/2>v&&(w[2]=Math.max(Math.round(N+p/2-v),w[2])),B.sideOverflow=e)}),0===H(w)||this.verifyDataLabelOverflow(w))&&(this.placeDataLabels(),
q&&n(this.points,function(a){var c;D=a.connector;if((B=a.dataLabel)&&B._pos&&a.visible&&0<a.labelDistance){P=B._attr.visibility;if(c=!D)a.connector=D=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex).add(b.dataLabelsGroup),D.attr({"stroke-width":q,stroke:k.connectorColor||a.color||"#666666"});D[c?"attr":"animate"]({d:b.connectorPath(a.labelPos)});D.attr("visibility",P)}else D&&(a.connector=D.destroy())}))},k.pie.prototype.connectorPath=function(a){var b=
a.x,c=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},k.pie.prototype.placeDataLabels=function(){n(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),
b.moved=!0):b&&b.attr({y:-9999}))},this)},k.pie.prototype.alignDataLabel=v,k.pie.prototype.verifyDataLabelOverflow=function(a){var c=this.center,d=this.options,e=d.center,f=d.minSize||80,k,l=null!==d.size;l||(null!==e[0]?k=Math.max(c[2]-Math.max(a[1],a[3]),f):(k=Math.max(c[2]-a[1]-a[3],f),c[0]+=(a[3]-a[1])/2),null!==e[1]?k=Math.max(Math.min(k,c[2]-Math.max(a[0],a[2])),f):(k=Math.max(Math.min(k,c[2]-a[0]-a[2]),f),c[1]+=(a[0]-a[2])/2),k<c[2]?(c[2]=k,c[3]=Math.min(b(d.innerSize||0,k),k),this.translate(c),
this.drawDataLabels&&this.drawDataLabels()):l=!0);return l});k.column&&(k.column.prototype.alignDataLabel=function(a,b,e,f,k){var c=this.chart.inverted,g=a.series,l=a.dlBox||a.shapeArgs,m=u(a.below,a.plotY>u(this.translatedThreshold,g.yAxis.len)),n=u(e.inside,!!this.options.stacking);l&&(f=q(l),0>f.y&&(f.height+=f.y,f.y=0),l=f.y+f.height-g.yAxis.len,0<l&&(f.height-=l),c&&(f={x:g.yAxis.len-f.y-f.height,y:g.xAxis.len-f.x-f.width,width:f.height,height:f.width}),n||(c?(f.x+=m?0:f.width,f.width=0):(f.y+=
m?f.height:0,f.height=0)));e.align=u(e.align,!c||n?"center":m?"right":"left");e.verticalAlign=u(e.verticalAlign,c||n?"middle":m?"top":"bottom");d.prototype.alignDataLabel.call(this,a,b,e,f,k);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(L);(function(a){var B=a.Chart,H=a.each,G=a.objectEach,n=a.pick;a=a.addEvent;a(B.prototype,"render",function(){var a=[];H(this.labelCollectors||[],function(f){a=a.concat(f())});H(this.yAxis||[],function(f){f.options.stackLabels&&
!f.options.stackLabels.allowOverlap&&G(f.stacks,function(f){G(f,function(f){a.push(f.label)})})});H(this.series||[],function(f){var l=f.options.dataLabels,q=f.dataLabelCollections||["dataLabel"];(l.enabled||f._hasPointLabels)&&!l.allowOverlap&&f.visible&&H(q,function(l){H(f.points,function(f){f[l]&&(f[l].labelrank=n(f.labelrank,f.shapeArgs&&f.shapeArgs.height),a.push(f[l]))})})});this.hideOverlappingLabels(a)});B.prototype.hideOverlappingLabels=function(a){var f=a.length,l,n,v,u,b,d,k,e,c,m=function(a,
b,c,d,e,f,k,l){return!(e>a+c||e+k<a||f>b+d||f+l<b)};for(n=0;n<f;n++)if(l=a[n])l.oldOpacity=l.opacity,l.newOpacity=1,l.width||(v=l.getBBox(),l.width=v.width,l.height=v.height);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(n=0;n<f;n++)for(v=a[n],l=n+1;l<f;++l)if(u=a[l],v&&u&&v!==u&&v.placed&&u.placed&&0!==v.newOpacity&&0!==u.newOpacity&&(b=v.alignAttr,d=u.alignAttr,k=v.parentGroup,e=u.parentGroup,c=2*(v.box?0:v.padding||0),b=m(b.x+k.translateX,b.y+k.translateY,v.width-c,v.height-
c,d.x+e.translateX,d.y+e.translateY,u.width-c,u.height-c)))(v.labelrank<u.labelrank?v:u).newOpacity=0;H(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(L);(function(a){var B=a.addEvent,H=a.Chart,G=a.createElement,n=a.css,l=a.defaultOptions,f=a.defaultPlotOptions,t=a.each,q=a.extend,v=a.fireEvent,u=a.hasTouch,b=a.inArray,d=a.isObject,k=a.Legend,e=a.merge,
c=a.pick,m=a.Point,g=a.Series,r=a.seriesTypes,z=a.svg,K;K=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};t(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(t(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});
if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(n).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,k=f.renderer,l=f.options.tooltip.snap,h=a.tracker,m,n=function(){if(f.hoverSeries!==a)a.onMouseOver()},q="rgba(192,192,192,"+(z?.0001:.002)+")";if(e&&!c)for(m=e+1;m--;)"M"===d[m]&&d.splice(m+1,0,d[m+1]-l,d[m+2],"L"),(m&&"M"===d[m]||m===e)&&d.splice(m,
0,"L",d[m-2]+l,d[m-1]);h?h.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:q,fill:c?q:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),zIndex:2}).add(a.group),t([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){g.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",n)}))}};r.column&&(r.column.prototype.drawTracker=K.drawTrackerPoint);
r.pie&&(r.pie.prototype.drawTracker=K.drawTrackerPoint);r.scatter&&(r.scatter.prototype.drawTracker=K.drawTrackerPoint);q(k.prototype,{setItemEvents:function(a,b,c){var d=this,f=d.chart.renderer.boxWrapper,g="highcharts-legend-"+(a instanceof m?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");f.addClass(g);b.css(d.options.itemHoverStyle)}).on("mouseout",function(){b.css(e(a.visible?d.itemStyle:d.itemHiddenStyle));f.removeClass(g);a.setState()}).on("click",
function(b){var c=function(){a.setVisible&&a.setVisible()};f.removeClass(g);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):v(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);B(a.checkbox,"click",function(b){v(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});l.legend.itemStyle.cursor=
"pointer";q(H.prototype,{showResetZoom:function(){var a=this,b=l.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,f)},zoomOut:function(){var a=this;v(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,e=this.pointer,
f=!1,g;!a||a.resetSelection?(t(this.axes,function(a){b=a.zoom()}),e.initiated=!1):t(a.xAxis.concat(a.yAxis),function(a){var c=a.axis;e[c.isXAxis?"zoomX":"zoomY"]&&(b=c.zoom(a.min,a.max),c.displayBtn&&(f=!0))});g=this.resetZoomButton;f&&!g?this.showResetZoom():!f&&d(g)&&(this.resetZoomButton=g.destroy());b&&this.redraw(c(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,e;d&&t(d,function(a){a.setState()});t("xy"===b?[1,0]:[1],function(b){b=
c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",g=c[d],h=(b.pointRange||0)/2,k=b.getExtremes(),l=b.toValue(g-f,!0)+h,m=b.toValue(g+b.len-f,!0)-h,n=m<l,g=n?m:l,l=n?l:m,m=Math.min(k.dataMin,h?k.min:b.toValue(b.toPixels(k.min)-b.minPixelPadding)),h=Math.max(k.dataMax,h?k.max:b.toValue(b.toPixels(k.max)+b.minPixelPadding)),n=m-g;0<n&&(l+=n,g=m);n=l-h;0<n&&(l=h,g-=n);b.series.length&&g!==k.min&&l!==k.max&&(b.setExtremes(g,l,!1,!1,{trigger:"pan"}),e=!0);c[d]=
f});e&&c.redraw(!1);n(c.container,{cursor:"move"})}});q(m.prototype,{select:function(a,d){var e=this,f=e.series,g=f.chart;a=c(a,!e.selected);e.firePointEvent(a?"select":"unselect",{accumulate:d},function(){e.selected=e.options.selected=a;f.options.data[b(e,f.data)]=e.options;e.setState(a&&"select");d||t(g.getSelectedPoints(),function(a){a.selected&&a!==e&&(a.selected=a.options.selected=!1,f.options.data[b(a,f.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=
this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");t(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=e(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){B(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var d=Math.floor(this.plotX),
e=this.plotY,g=this.series,k=g.options.states[a||"normal"]||{},l=f[g.type].marker&&g.options.marker,m=l&&!1===l.enabled,n=l&&l.states&&l.states[a||"normal"]||{},h=!1===n.enabled,p=g.stateMarkerGraphic,r=this.marker||{},t=g.chart,u=g.halo,v,y=l&&g.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===k.enabled||a&&(h||m&&!1===n.enabled)||a&&r.states&&r.states[a]&&!1===r.states[a].enabled)){y&&(v=g.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+
this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(g.pointAttribs(this,a),c(t.options.chart.animation,k.animation)),v&&this.graphic.animate(v,c(t.options.chart.animation,n.animation,l.animation)),p&&p.hide();else{if(a&&n){l=r.symbol||g.symbol;p&&p.currentSymbol!==l&&(p=p.destroy());if(p)p[b?"animate":"attr"]({x:v.x,y:v.y});else l&&(g.stateMarkerGraphic=p=t.renderer.symbol(l,v.x,v.y,v.width,v.height).add(g.markerGroup),p.currentSymbol=l);p&&p.attr(g.pointAttribs(this,
a))}p&&(p[a&&t.isInsidePlot(d,e,t.inverted)?"show":"hide"](),p.element.point=this)}(d=k.halo)&&d.size?(u||(g.halo=u=t.renderer.path().add((this.graphic||p).parentGroup)),u.show()[b?"animate":"attr"]({d:this.haloPath(d.size)}),u.attr({"class":"highcharts-halo highcharts-color-"+c(this.colorIndex,g.colorIndex)}),u.point=this,u.attr(q({fill:this.color||g.color,"fill-opacity":d.opacity,zIndex:-1},d.attributes))):u&&u.point&&u.point.haloPath&&u.animate({d:u.point.haloPath(0)},null,u.hide);this.state=a}},
haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});q(g.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&v(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&v(this,"mouseOut");!c||this.stickyTracking||
c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,d=b.options,e=b.graph,f=d.states,g=d.lineWidth,d=0;a=a||"";if(b.state!==a&&(t([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!f[a]||!1!==f[a].enabled)&&(a&&(g=f[a].lineWidth||g+(f[a].lineWidthPlus||0)),e&&!e.dashstyle))for(g={"stroke-width":g},e.animate(g,c(f[a||"normal"]&&f[a||"normal"].animation,
b.chart.options.chart.animation));b["zone-graph-"+d];)b["zone-graph-"+d].attr(g),d+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";t(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&
t(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});t(c.linkedSeries,function(b){b.setVisible(a,!1)});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();v(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);v(this,a?"select":"unselect")},drawTracker:K.drawTrackerGraph})})(L);(function(a){var B=a.Chart,H=a.each,G=a.inArray,n=a.isArray,l=a.isObject,f=a.pick,t=a.splat;
B.prototype.setResponsive=function(f){var l=this.options.responsive,n=[],b=this.currentResponsive;l&&l.rules&&H(l.rules,function(b){void 0===b._id&&(b._id=a.uniqueKey());this.matchResponsiveRule(b,n,f)},this);var d=a.merge.apply(0,a.map(n,function(b){return a.find(l.rules,function(a){return a._id===b}).chartOptions})),n=n.toString()||void 0;n!==(b&&b.ruleIds)&&(b&&this.update(b.undoOptions,f),n?(this.currentResponsive={ruleIds:n,mergedOptions:d,undoOptions:this.currentOptions(d)},this.update(d,f)):
this.currentResponsive=void 0)};B.prototype.matchResponsiveRule=function(a,l){var n=a.condition;(n.callback||function(){return this.chartWidth<=f(n.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=f(n.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=f(n.minWidth,0)&&this.chartHeight>=f(n.minHeight,0)}).call(this)&&l.push(a._id)};B.prototype.currentOptions=function(f){function q(b,d,f,e){var c;a.objectEach(b,function(a,b){if(!e&&-1<G(b,["series","xAxis","yAxis"]))for(a=t(a),f[b]=[],c=0;c<a.length;c++)d[b][c]&&
(f[b][c]={},q(a[c],d[b][c],f[b][c],e+1));else l(a)?(f[b]=n(a)?[]:{},q(a,d[b]||{},f[b],e+1)):f[b]=d[b]||null})}var u={};q(f,this.options,u,0);return u}})(L);return L});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.classname,
    style: (_vm.styles)
  })
},staticRenderFns: []}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("0812d0de", content, true);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { margin: "20px 30px 0px 3%" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "boxj box-primaryj",
        staticStyle: { margin: "20px 3% 0px 3%", width: "94%" }
      },
      [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c("vue-highcharts", {
                ref: "lineCharts",
                attrs: { options: _vm.options }
              }),
              _vm._v(" "),
              _c("vue-highcharts", {
                ref: "lineCharts",
                attrs: { options: _vm.options }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-12" },
            [
              _c("vue-highcharts", {
                ref: "lineCharts",
                attrs: { options: _vm.options }
              }),
              _vm._v(" "),
              _c("vue-highcharts", {
                ref: "lineCharts",
                attrs: { options: _vm.options }
              })
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Dashboard")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-12" }, [
        _c("div", { staticClass: "info-box" }, [
          _c("span", { staticClass: "info-box-icon bg-aqua" }, [
            _c("i", { staticClass: "fa fa-envelope-o" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-box-content" }, [
            _c("span", { staticClass: "info-box-text" }, [_vm._v("Visitors")]),
            _vm._v(" "),
            _c("span", { staticClass: "info-box-number" }, [_vm._v("1,410")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-12" }, [
        _c("div", { staticClass: "info-box" }, [
          _c("span", { staticClass: "info-box-icon bg-green" }, [
            _c("i", { staticClass: "fa fa-flag-o" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-box-content" }, [
            _c("span", { staticClass: "info-box-text" }, [_vm._v("Pageview")]),
            _vm._v(" "),
            _c("span", { staticClass: "info-box-number" }, [_vm._v("410")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-12" }, [
        _c("div", { staticClass: "info-box" }, [
          _c("span", { staticClass: "info-box-icon bg-yellow" }, [
            _c("i", { staticClass: "fa fa-files-o" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-box-content" }, [
            _c("span", { staticClass: "info-box-text" }, [_vm._v("Crawlers")]),
            _vm._v(" "),
            _c("span", { staticClass: "info-box-number" }, [_vm._v("13,648")])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6 col-xs-12" }, [
        _c("div", { staticClass: "info-box" }, [
          _c("span", { staticClass: "info-box-icon bg-red" }, [
            _c("i", { staticClass: "fa fa-star-o" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-box-content" }, [
            _c("span", { staticClass: "info-box-text" }, [
              _vm._v("Online Users")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "info-box-number" }, [_vm._v("93,139")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14c955e6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});