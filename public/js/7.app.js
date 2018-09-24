webpackJsonp([7],{

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_category_vue__ = __webpack_require__(618);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4604b5f8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_category_vue__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(50);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(634)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4604b5f8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4604b5f8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_category_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4604b5f8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_category_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/mo/category.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4604b5f8", Component.options)
  } else {
    hotAPI.reload("data-v-4604b5f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mo_mixins; });
var mo_mixins = {
    filters: {
        ucWords: function ucWords(str) {
            return str.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        },
        getThumbnail: function getThumbnail(movieId) {
            return 'https://ytimg.googleusercontent.com/vi/' + movieId + '/mqdefault.jpg';
        }
    },
    methods: {
        isObjectEmpty: function isObjectEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) return false;
            }
            return true;
        },
        embedVideo: function embedVideo(youlink) {
            return youlink.replace('watch?v=', 'embed/') + '?autoplay=1';
        },
        videoCategoryLink: function videoCategoryLink(cat) {
            if (cat == 'religious__muslim') {
                return 'religious/islamic';
            } else if (cat == 'religious__christian') {
                return 'religious/christian';
            } else {
                return cat;
            }
        },
        videoCategory: function videoCategory(cat) {
            if (cat == 'religious__muslim') {
                return 'Islamic';
            } else if (cat == 'religious__christian') {
                return 'Christian';
            } else {
                return cat;
            }
        }
    }
};

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_mixins_mo_mixins__ = __webpack_require__(616);
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
    mixins: [__WEBPACK_IMPORTED_MODULE_1__partials_mixins_mo_mixins__["a" /* mo_mixins */]],
    methods: {
        flag: function flag(category) {
            if (category == "christian" || category == "islamic") {
                return true;
            }
            return false;
        }
    },
    created: function created() {
        this.$store.dispatch('fetchMoviesByCategory', this.category);
    },
    data: function data() {
        return {
            category: this.$route.params.category_name
        };
    },

    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
        movies: 'getMoviesByCategory'
    })
});

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(635);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(107).default
var update = add("21821295", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-4604b5f8\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./category.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-4604b5f8\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./category.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)(undefined);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-4604b5f8] {\n    margin-top: 10%;\n    background-color: transparent;\n}\nimg[data-v-4604b5f8] {\n    height: 200px;\n    width: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 636:
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
    {},
    [
      _c(
        "section",
        {
          staticClass: "content-headerf",
          staticStyle: {
            float: "left !important",
            width: "100%",
            "margin-top": "20px"
          }
        },
        [
          _c("ol", { staticClass: "breadcrumb" }, [
            _c(
              "li",
              [
                _c(
                  "router-link",
                  { attrs: { tag: "a", to: { name: "home" } } },
                  [
                    _c("i", { staticClass: "glyphicon glyphicon-home" }),
                    _vm._v(" Home\n                ")
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.flag(_vm.category.toLowerCase())
              ? _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          tag: "a",
                          to: {
                            name: "category",
                            params: { religious: _vm.movie.enc_id }
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "glyphicon glyphicon-star" }),
                        _vm._v(" Religious\n                ")
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c("li", { staticClass: "active" }, [
              _vm._v(_vm._s(_vm._f("ucWords")(_vm.category)) + " Movies")
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "headings text-center h2",
          staticStyle: { "margin-top": "80px" }
        },
        [
          _vm._v(
            "\n        " + _vm._s(_vm._f("ucWords")(_vm.category)) + "\n    "
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "topic-row-height text-center" }, [
        _c(
          "a",
          {
            staticStyle: { color: "red !important", "font-weight": "bold" },
            attrs: { href: "/" + _vm.category + "/allmovies" }
          },
          [
            _vm._v(
              "All " + _vm._s(_vm._f("ucWords")(_vm.category)) + " Movies here"
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.movies, function(movie, key) {
        return _c(
          "div",
          {
            staticClass: "topic-row-height text-center",
            class: key % 2 == 1 ? "" : "row-even"
          },
          [
            _c(
              "router-link",
              {
                attrs: {
                  tag: "a",
                  to: { name: "movie", params: { movie_id: movie.enc_id } }
                }
              },
              [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm._f("ucWords")(movie.name)) +
                    "\n        "
                )
              ]
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4604b5f8", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});