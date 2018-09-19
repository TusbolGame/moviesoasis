webpackJsonp([11],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(719);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4aaa6b65_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(11);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(720)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4aaa6b65"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4aaa6b65_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4aaa6b65_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/mo/home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4aaa6b65", Component.options)
  } else {
    hotAPI.reload("data-v-4aaa6b65", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
    created: function created() {}
});

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(721);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(14).default
var update = add("4a36c1c2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-4aaa6b65\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-4aaa6b65\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-4aaa6b65] {\n    margin-top: 10%;\n    background-color: transparent;\n}\nimg[data-v-4aaa6b65] {\n    height: 200px;\n    width: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-center" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "topic-row-height row-even" }, [
      _vm._v(
        "\n        Download all latest Yoruba movies of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "yoruba" } }
            }
          },
          [_vm._v("\n            YORUBA MOVIES\n        ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download all latest nigeria nollywood movies of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "english" } }
            }
          },
          [_vm._v("\n            NOLLYWOOD MOVIES\n        ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download all latest hausa movies of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "hausa" } }
            }
          },
          [_vm._v("\n            HAUSA MOVIES\n        ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download all latest ghanian movies of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "ghanaian" } }
            }
          },
          [_vm._v("\n            GHANAIAN MOVIES\n        ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download all latest Indian movies of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "indian" } }
            }
          },
          [
            _vm._v("\n            INDIAN MOVIES "),
            _c(
              "span",
              { staticStyle: { color: "red", "font-weight": "bold" } },
              [_vm._v("(new)")]
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download latest religious preaches of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "religious" } }
            }
          },
          [_vm._v("\n            RELIGIOUS PREACHES\n        ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download all latest comedy movies of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "comedy" } }
            }
          },
          [_vm._v("\n            COMEDY\n        ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download latest wrestling clips of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "wrestling" } }
            }
          },
          [_vm._v("\n            WRESTLING\n        ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download all latest football highlight clips of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: {
                name: "category",
                params: { category_name: "football_highlight" }
              }
            }
          },
          [_vm._v("\n            FOOTBALL HIGHLIGHT\n        ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download all latest documentary of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "documentary" } }
            }
          },
          [_vm._v("\n            DOCUMENTARY\n        ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download latest technological discovery clips of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "technology" } }
            }
          },
          [_vm._v("\n            TECHNOLOGIES\n        ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download tutorials how how to do things from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "topic-row-height" },
      [
        _c(
          "router-link",
          {
            attrs: {
              tag: "a",
              to: { name: "category", params: { category_name: "how_tos" } }
            }
          },
          [
            _vm._v("\n            HOW TOs  "),
            _c(
              "span",
              { staticStyle: { color: "red", "font-weight": "bold" } },
              [_vm._v("(new)")]
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download latest Yoruba dubbed movies of different format from here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "topic-row-height" }, [
      _vm._v("\n        YORUBA DURBBED MOVIES\n    ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: " topic-row-height row-even" }, [
      _vm._v(
        "\n        Download latest music both mp3 & mp4 format for here for free.\n    "
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "topic-row-height" }, [
      _vm._v("\n        MUSIC\n    ")
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { margin: "30px 10%", "font-size": "1.4em" } },
      [_c("strong", [_vm._v("Download latest movies")])]
    )
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4aaa6b65", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});