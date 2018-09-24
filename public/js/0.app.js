webpackJsonp([0],{

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

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_download_vue__ = __webpack_require__(700);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05b0db8e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_download_vue__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(50);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(701)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05b0db8e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_download_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05b0db8e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_download_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05b0db8e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_download_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/mo/download.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05b0db8e", Component.options)
  } else {
    hotAPI.reload("data-v-05b0db8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_mixins_mo_mixins__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_plugins_movieThumbnail__ = __webpack_require__(705);
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
    components: { movieThumbnail: __WEBPACK_IMPORTED_MODULE_2__partials_plugins_movieThumbnail__["a" /* default */] },
    methods: {},
    created: function created() {
        this.$store.dispatch('fetchDownloadMovieInfo', this.movieId);
    },
    data: function data() {
        return {
            movieId: this.$route.params.movie_id
        };
    },

    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])({
        movie: 'getDownloadMovie'
    })
});

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(702);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(107).default
var update = add("0f18e728", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-05b0db8e\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./download.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-05b0db8e\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./download.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)(undefined);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-05b0db8e] {\n    margin-top: 10%;\n    background-color: transparent;\n}\nimg[data-v-05b0db8e] {\n    height: 200px;\n    width: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.isObjectEmpty(_vm.movie)
    ? _c(
        "div",
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
                _vm._m(0),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "a",
                    {
                      attrs: {
                        href:
                          "/category/" +
                          _vm
                            .videoCategoryLink(_vm.movie.movieDetail.category)
                            .toLowerCase()
                      }
                    },
                    [
                      _c("i", { staticClass: "glyphicon glyphicon-expand" }),
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.videoCategory(
                              _vm.movie.movieDetail.category.toLowerCase()
                            )
                          ) +
                          " Movies\n                "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "active" }, [
                  _vm._v(_vm._s(_vm._f("ucWords")(_vm.movie.movieDetail.name)))
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("movie-thumbnail", {
            attrs: {
              title: _vm.movie.title,
              thumbnail: _vm._f("getThumbnail")(_vm.movie.movieId)
            }
          }),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._l(_vm.movie.downloadLinks, function(video, index) {
            return _c("div", [
              _c(
                "div",
                { staticClass: " topic-row-height row-even text-center" },
                [
                  _c("strong", [_vm._v(" " + _vm._s(video.format) + " ")]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "size", staticStyle: { color: "blue" } },
                    [_vm._v(_vm._s(video.size))]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [
                _c(
                  "a",
                  {
                    staticClass: "rnd-link text-center mime",
                    staticStyle: {
                      width: "auto",
                      padding: "10px",
                      "font-size": "15px",
                      "font-weight": "bold"
                    },
                    attrs: { href: video.link1 }
                  },
                  [_vm._v("Download Link 1")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center" }, [
                _c(
                  "a",
                  {
                    staticClass: "rnd-link text-center mime",
                    staticStyle: {
                      width: "auto",
                      padding: "10px",
                      "font-size": "15px",
                      "font-weight": "bold"
                    },
                    attrs: { href: video.link2 }
                  },
                  [_vm._v("Download Link 2")]
                )
              ])
            ])
          })
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "/" } }, [
        _c("i", { staticClass: "glyphicon glyphicon-home" }),
        _vm._v(" Home")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { attrs: { align: "center" } }, [
      _c("strong", [_vm._v("List of available formats for download:")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "text-center", staticStyle: { color: "red" } },
      [
        _c("strong", [_vm._v("NOTE:")]),
        _vm._v(
          " If you find it difficult downloading this video with Opera on your mobile phone, try  using UC Browser, Ucweb, Mozilla or the phone default browser."
        ),
        _c("br"),
        _c("br")
      ]
    )
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-05b0db8e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 704:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    name: "movieThumbnail",
    props: ['title', 'thumbnail']
});

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_movieThumbnail_vue__ = __webpack_require__(704);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69da3a7e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_movieThumbnail_vue__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(50);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(706)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-69da3a7e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_movieThumbnail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69da3a7e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_movieThumbnail_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69da3a7e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_movieThumbnail_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/plugins/movieThumbnail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69da3a7e", Component.options)
  } else {
    hotAPI.reload("data-v-69da3a7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(707);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(107).default
var update = add("704e6480", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-69da3a7e\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./movieThumbnail.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-69da3a7e\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./movieThumbnail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "headings text-center h2",
        staticStyle: { "margin-top": "80px" }
      },
      [_c("strong", [_vm._v(_vm._s(_vm.title))])]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "img profile-user-img img-responsive img-rounded movie-image",
        staticStyle: {
          border: "0px !important",
          width: "200px",
          height: "300px",
          "margin-left": "auto",
          "margin-right": "auto"
        },
        attrs: { border: "0", align: "center" }
      },
      [
        _c("img", {
          staticClass:
            "profile-user-img img-responsive img-rounded movie-image text-center",
          staticStyle: { height: "300px" },
          attrs: {
            id: "carimage4",
            src: _vm.thumbnail,
            border: "0",
            hspace: "0",
            vspace: "0"
          }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-69da3a7e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});