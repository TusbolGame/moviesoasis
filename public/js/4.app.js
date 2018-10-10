webpackJsonp([4],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_visitors_vue__ = __webpack_require__(637);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cf81e46_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_visitors_vue__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(50);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(688)
  __webpack_require__(690)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cf81e46"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_visitors_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cf81e46_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_visitors_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cf81e46_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_visitors_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/visitor/visitors.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cf81e46", Component.options)
  } else {
    hotAPI.reload("data-v-1cf81e46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_types__ = __webpack_require__(75);
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




/* harmony default export */ __webpack_exports__["a"] = ({
    props: [],
    components: {},
    methods: {
        flag: function flag(category) {
            if (category == "christian" || category == "islamic") {
                return true;
            }
            return false;
        },
        openDialog: function openDialog(action) {
            this.$refs.modal.open();
        },
        closeDialog: function closeDialog() {
            this.$refs.modal.close();
        }
    },
    created: function created() {
        this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_1__store_types__["c" /* FETCH_VISITORS */]);
    },
    data: function data() {
        return {
            columns: ['id', 'ip', 'remotehost', 'location', 'referrer', 'pageview', 'useragent', 'date', 'time'],
            options: {
                // see the options API
                // skin: "table-hover table-striped table-bordered",
                perPage: 10,
                // footerHeadings: true,
                highlightMatches: true,
                pagination: {
                    chunk: 7,
                    //set dropdown to true to get dropdown instead of pagenation
                    dropdown: false
                },
                sortable: []
            }
        };
    },

    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
        tableData: __WEBPACK_IMPORTED_MODULE_1__store_types__["f" /* GET_VISITORS */]
    })
});

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(689);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(107).default
var update = add("687177f6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-1cf81e46\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./visitors.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-1cf81e46\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./visitors.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)(undefined);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-1cf81e46] {\n    margin-top: 10%;\n    background-color: transparent;\n}\nimg[data-v-1cf81e46] {\n    height: 200px;\n    width: 200px;\n}\n.box-option[data-v-1cf81e46] {\n    height: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n}\n.pointer[data-v-1cf81e46] {\n    cursor: pointer;\n}\ntd input[data-v-1cf81e46] {\n    margin-left: 15px;\n}\ntd a[data-v-1cf81e46] {\n    cursor: pointer;\n}\n.options[data-v-1cf81e46] {\n    cursor: pointer;\n}\n.hidden-overflow[data-v-1cf81e46] {\n    overflow: hidden\n}\n", ""]);

// exports


/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(691);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(107).default
var update = add("0eff4188", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./visitors.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./visitors.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)(undefined);
// imports


// module
exports.push([module.i, "\n.sweet-title > h2 {\n    margin-top: 20px !important;\n    font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card", staticStyle: { margin: "20px 10%" } },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "box box-primary" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "box-body table-responsive hidden-overflow" },
              [
                _vm.tableData.length > 0
                  ? _c("v-client-table", {
                      attrs: {
                        data: _vm.tableData,
                        columns: _vm.columns,
                        options: _vm.options
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "id",
                          fn: function(props) {
                            return _c("strong", {}, [
                              _vm._v(_vm._s(props.index))
                            ])
                          }
                        }
                      ])
                    })
                  : _vm._e()
              ],
              1
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header" }, [
      _c("h3", { staticClass: "box-title text-success" }, [
        _vm._v("All Visitors")
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1cf81e46", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});