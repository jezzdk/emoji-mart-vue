(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory();
	else
		root["EmojiMart"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.frequently = exports.store = exports.emojiIndex = exports.Category = exports.Emoji = exports.Picker = undefined;

	var _components = __webpack_require__(1);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _components.Picker;
	  }
	});
	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _components.Emoji;
	  }
	});
	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _components.Category;
	  }
	});

	var _emojiIndex = __webpack_require__(143);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	var _store = __webpack_require__(123);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(124);

	var _frequently2 = _interopRequireDefault(_frequently);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.emojiIndex = _emojiIndex2.default;
	exports.store = _store2.default;
	exports.frequently = _frequently2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Skins = exports.Search = exports.Preview = exports.Picker = exports.Emoji = exports.Category = exports.Anchors = undefined;

	var _anchors = __webpack_require__(2);

	var _anchors2 = _interopRequireDefault(_anchors);

	var _category = __webpack_require__(24);

	var _category2 = _interopRequireDefault(_category);

	var _emoji = __webpack_require__(31);

	var _emoji2 = _interopRequireDefault(_emoji);

	var _picker = __webpack_require__(113);

	var _picker2 = _interopRequireDefault(_picker);

	var _preview = __webpack_require__(129);

	var _preview2 = _interopRequireDefault(_preview);

	var _search = __webpack_require__(139);

	var _search2 = _interopRequireDefault(_search);

	var _skins = __webpack_require__(133);

	var _skins2 = _interopRequireDefault(_skins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Anchors = _anchors2.default;
	exports.Category = _category2.default;
	exports.Emoji = _emoji2.default;
	exports.Picker = _picker2.default;
	exports.Preview = _preview2.default;
	exports.Search = _search2.default;
	exports.Skins = _skins2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(3)
	__webpack_require__(8)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(11),
	  /* template */
	  __webpack_require__(23),
	  /* scopeId */
	  "data-v-a6b35c6a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jess/Sites/emoji-mart-vue/src/components/anchors.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] anchors.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a6b35c6a", Component.options)
	  } else {
	    hotAPI.reload("data-v-a6b35c6a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("50b2bf42", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a6b35c6a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./anchors.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a6b35c6a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./anchors.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.emoji-mart-anchors[data-v-a6b35c6a] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 6px;\n  color: #858585;\n  line-height: 0;\n}\n.emoji-mart-anchor[data-v-a6b35c6a] {\n  position: relative;\n  flex: 1;\n  text-align: center;\n  padding: 12px 4px;\n  overflow: hidden;\n  transition: color .1s ease-out;\n}\n.emoji-mart-anchor[data-v-a6b35c6a]:hover,\n.emoji-mart-anchor-selected[data-v-a6b35c6a] {\n  color: #464646;\n}\n.emoji-mart-anchor-selected .emoji-mart-anchor-bar[data-v-a6b35c6a] {\n  bottom: 0;\n}\n.emoji-mart-anchor-bar[data-v-a6b35c6a] {\n  position: absolute;\n  bottom: -3px; left: 0;\n  width: 100%; height: 3px;\n  background-color: #464646;\n}\n.emoji-mart-anchors i[data-v-a6b35c6a] {\n  display: inline-block;\n  width: 100%;\n  max-width: 22px;\n}\n\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function(useSourceMap) {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if(item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
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

	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}

		if (useSourceMap && typeof btoa === 'function') {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
			});

			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}

		return [content].join('\n');
	}

	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

		return '/*# ' + data + ' */';
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(7)

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


/***/ },
/* 7 */
/***/ function(module, exports) {

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


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("1bad9b33", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a6b35c6a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./anchors.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a6b35c6a\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./anchors.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.emoji-mart-anchors svg {\n  fill: currentColor;\n  max-height: 18px;\n}\n\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

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
	    var computed = Object.create(options.computed || null)
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	    options.computed = computed
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _svgs = __webpack_require__(12);

	var svgs = _interopRequireWildcard(_svgs);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = {
	  props: {
	    i18n: {
	      type: Object,
	      required: true
	    },
	    color: {
	      type: String
	    },
	    categories: {
	      type: Array,
	      required: true
	    },
	    activeCategory: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  data: function data() {
	    return {
	      assets: { svgs: svgs }
	    };
	  }
	}; //
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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _activity = __webpack_require__(13);

	Object.defineProperty(exports, 'activity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_activity).default;
	  }
	});

	var _flags = __webpack_require__(14);

	Object.defineProperty(exports, 'flags', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_flags).default;
	  }
	});

	var _foods = __webpack_require__(15);

	Object.defineProperty(exports, 'foods', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_foods).default;
	  }
	});

	var _nature = __webpack_require__(16);

	Object.defineProperty(exports, 'nature', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_nature).default;
	  }
	});

	var _objects = __webpack_require__(17);

	Object.defineProperty(exports, 'objects', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_objects).default;
	  }
	});

	var _people = __webpack_require__(18);

	Object.defineProperty(exports, 'people', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_people).default;
	  }
	});

	var _places = __webpack_require__(19);

	Object.defineProperty(exports, 'places', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_places).default;
	  }
	});

	var _recent = __webpack_require__(20);

	Object.defineProperty(exports, 'recent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_recent).default;
	  }
	});

	var _symbols = __webpack_require__(21);

	Object.defineProperty(exports, 'symbols', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_symbols).default;
	  }
	});

	var _custom = __webpack_require__(22);

	Object.defineProperty(exports, 'custom', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_custom).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"></path></svg>"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"></path></svg>"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"></path></svg>"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"></path><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"></path></svg>"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"></path><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"></path></svg>"

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"></path></svg>"

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"></path><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"></path></svg>"

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"></path><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"></path></svg>"

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" height=\"24\" width=\"24\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"></path></svg>"

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><g transform=\"translate(2.000000, 1.000000)\"><rect id=\"Rectangle\" x=\"8\" y=\"0\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect></g></svg>"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "emoji-mart-anchors"
	  }, [_vm._l((_vm.categories), function(category) {
	    return [_c('span', {
	      class: {
	        'emoji-mart-anchor': true, 'emoji-mart-anchor-selected': category.name == _vm.activeCategory.name
	      },
	      style: ({
	        'color': (category.name == _vm.activeCategory.name ? _vm.color : '')
	      }),
	      attrs: {
	        "title": _vm.i18n.categories[category.slug]
	      },
	      on: {
	        "click": function($event) {
	          _vm.$emit('click', category)
	        }
	      }
	    }, [_c('i', {
	      domProps: {
	        "innerHTML": _vm._s(_vm.assets.svgs[category.slug])
	      }
	    }), _vm._v(" "), _c('span', {
	      staticClass: "emoji-mart-anchor-bar",
	      style: ({
	        backgroundColor: _vm.color
	      })
	    })])]
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a6b35c6a", module.exports)
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(25)
	__webpack_require__(27)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(29),
	  /* template */
	  __webpack_require__(112),
	  /* scopeId */
	  "data-v-088c9161",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jess/Sites/emoji-mart-vue/src/components/category.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] category.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-088c9161", Component.options)
	  } else {
	    hotAPI.reload("data-v-088c9161", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("1a3e86d2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-088c9161\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./category.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-088c9161\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./category.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.emoji-mart-category[data-v-088c9161] {\n  position: relative;\n}\n.emoji-mart-category-label[data-v-088c9161] {\n  position: sticky;\n  top: 0;\n}\n.emoji-mart-category .emoji-mart-emoji[data-v-088c9161]:before {\n  z-index: 0;\n  content: \"\";\n  position: absolute;\n  top: 0; left: 0;\n  width: 100%; height: 100%;\n  background-color: #f4f4f4;\n  border-radius: 100%;\n  opacity: 0;\n}\n.emoji-mart-category .emoji-mart-emoji[data-v-088c9161]:hover:before {\n  opacity: 1;\n}\n.emoji-mart-category-label[data-v-088c9161] {\n  z-index: 2;\n  position: relative;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.emoji-mart-category-label span[data-v-088c9161] {\n  display: block;\n  width: 100%;\n  font-weight: 500;\n  padding: 5px 6px;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, .95);\n}\n.emoji-mart-no-results[data-v-088c9161] {\n  font-size: 14px;\n  text-align: center;\n  padding-top: 70px;\n  color: #858585;\n}\n.emoji-mart-no-results .emoji-mart-category-label[data-v-088c9161] {\n  display: none;\n}\n.emoji-mart-no-results .emoji-mart-no-results-label[data-v-088c9161] {\n  margin-top: .2em;\n}\n.emoji-mart-no-results .emoji-mart-emoji[data-v-088c9161]:hover:before {\n  content: none;\n}\n\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("42dfba6c", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-088c9161\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./category.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-088c9161\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./category.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.emoji-mart-category .emoji-mart-emoji span {\n  z-index: 1;\n  position: relative;\n  text-align: center;\n  cursor: default;\n}\n\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _data = __webpack_require__(30);

	var _data2 = _interopRequireDefault(_data);

	var _emoji = __webpack_require__(31);

	var _emoji2 = _interopRequireDefault(_emoji);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


	exports.default = {
	  props: {
	    i18n: {
	      type: Object,
	      required: true
	    },
	    emojisToShowFilter: {
	      type: Function
	    },
	    emojis: {
	      type: Array
	    },
	    hasStickyPosition: {
	      type: Boolean,
	      default: true
	    },
	    name: {
	      type: String,
	      required: true
	    },
	    slug: {
	      type: String,
	      required: true
	    },
	    emojiProps: {
	      type: Object,
	      required: true
	    }
	  },
	  computed: {
	    filteredEmojis: function filteredEmojis() {
	      var _this = this;

	      if (this.emojisToShowFilter) {
	        return this.emojis.filter(function (emoji) {
	          return _this.emojisToShowFilter(_data2.default.emojis[emoji] || emoji);
	        });
	      }

	      return this.emojis;
	    },
	    isVisible: function isVisible() {
	      return !!this.emojis;
	    },
	    isSearch: function isSearch() {
	      return this.name == 'Search';
	    },
	    hasResults: function hasResults() {
	      return this.filteredEmojis.length > 0;
	    }
	  },
	  components: {
	    Emoji: _emoji2.default
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={categories:[{name:"Smileys & People",emojis:["grinning","grin","joy","rolling_on_the_floor_laughing","smiley","smile","sweat_smile","laughing","wink","blush","yum","sunglasses","heart_eyes","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","relaxed","slightly_smiling_face","hugging_face","star-struck","thinking_face","face_with_raised_eyebrow","neutral_face","expressionless","no_mouth","face_with_rolling_eyes","smirk","persevere","disappointed_relieved","open_mouth","zipper_mouth_face","hushed","sleepy","tired_face","sleeping","relieved","stuck_out_tongue","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","drooling_face","unamused","sweat","pensive","confused","upside_down_face","money_mouth_face","astonished","white_frowning_face","slightly_frowning_face","confounded","disappointed","worried","triumph","cry","sob","frowning","anguished","fearful","weary","exploding_head","grimacing","cold_sweat","scream","flushed","zany_face","dizzy_face","rage","angry","face_with_symbols_on_mouth","mask","face_with_thermometer","face_with_head_bandage","nauseated_face","face_vomiting","sneezing_face","innocent","face_with_cowboy_hat","clown_face","lying_face","shushing_face","face_with_hand_over_mouth","face_with_monocle","nerd_face","smiling_imp","imp","japanese_ogre","japanese_goblin","skull","skull_and_crossbones","ghost","alien","space_invader","robot_face","hankey","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","see_no_evil","hear_no_evil","speak_no_evil","baby","child","boy","girl","adult","man","woman","older_adult","older_man","older_woman","male-doctor","female-doctor","male-student","female-student","male-teacher","female-teacher","male-judge","female-judge","male-farmer","female-farmer","male-cook","female-cook","male-mechanic","female-mechanic","male-factory-worker","female-factory-worker","male-office-worker","female-office-worker","male-scientist","female-scientist","male-technologist","female-technologist","male-singer","female-singer","male-artist","female-artist","male-pilot","female-pilot","male-astronaut","female-astronaut","male-firefighter","female-firefighter","cop","male-police-officer","female-police-officer","sleuth_or_spy","male-detective","female-detective","guardsman","male-guard","female-guard","construction_worker","male-construction-worker","female-construction-worker","prince","princess","man_with_turban","man-wearing-turban","woman-wearing-turban","man_with_gua_pi_mao","person_with_headscarf","bearded_person","person_with_blond_hair","blond-haired-man","blond-haired-woman","man_in_tuxedo","bride_with_veil","pregnant_woman","breast-feeding","angel","santa","mrs_claus","mage","female_mage","male_mage","fairy","female_fairy","male_fairy","vampire","female_vampire","male_vampire","merperson","mermaid","merman","elf","female_elf","male_elf","genie","female_genie","male_genie","zombie","female_zombie","male_zombie","person_frowning","man-frowning","woman-frowning","person_with_pouting_face","man-pouting","woman-pouting","no_good","man-gesturing-no","woman-gesturing-no","ok_woman","man-gesturing-ok","woman-gesturing-ok","information_desk_person","man-tipping-hand","woman-tipping-hand","raising_hand","man-raising-hand","woman-raising-hand","bow","man-bowing","woman-bowing","face_palm","man-facepalming","woman-facepalming","shrug","man-shrugging","woman-shrugging","massage","man-getting-massage","woman-getting-massage","haircut","man-getting-haircut","woman-getting-haircut","walking","man-walking","woman-walking","runner","man-running","woman-running","dancer","man_dancing","dancers","man-with-bunny-ears-partying","woman-with-bunny-ears-partying","person_in_steamy_room","woman_in_steamy_room","man_in_steamy_room","person_climbing","woman_climbing","man_climbing","person_in_lotus_position","woman_in_lotus_position","man_in_lotus_position","bath","sleeping_accommodation","man_in_business_suit_levitating","speaking_head_in_silhouette","bust_in_silhouette","busts_in_silhouette","fencer","horse_racing","skier","snowboarder","golfer","man-golfing","woman-golfing","surfer","man-surfing","woman-surfing","rowboat","man-rowing-boat","woman-rowing-boat","swimmer","man-swimming","woman-swimming","person_with_ball","man-bouncing-ball","woman-bouncing-ball","weight_lifter","man-lifting-weights","woman-lifting-weights","bicyclist","man-biking","woman-biking","mountain_bicyclist","man-mountain-biking","woman-mountain-biking","racing_car","racing_motorcycle","person_doing_cartwheel","man-cartwheeling","woman-cartwheeling","wrestlers","man-wrestling","woman-wrestling","water_polo","man-playing-water-polo","woman-playing-water-polo","handball","man-playing-handball","woman-playing-handball","juggling","man-juggling","woman-juggling","couple","two_men_holding_hands","two_women_holding_hands","couplekiss","woman-kiss-man","man-kiss-man","woman-kiss-woman","couple_with_heart","woman-heart-man","man-heart-man","woman-heart-woman","family","man-woman-boy","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-boy","man-boy-boy","man-girl","man-girl-boy","man-girl-girl","woman-boy","woman-boy-boy","woman-girl","woman-girl-boy","woman-girl-girl","selfie","muscle","point_left","point_right","point_up","point_up_2","middle_finger","point_down","v","crossed_fingers","spock-hand","the_horns","call_me_hand","raised_hand_with_fingers_splayed","hand","ok_hand","+1","-1","fist","facepunch","left-facing_fist","right-facing_fist","raised_back_of_hand","wave","i_love_you_hand_sign","writing_hand","clap","open_hands","raised_hands","palms_up_together","pray","handshake","nail_care","ear","nose","footprints","eyes","eye","eye-in-speech-bubble","brain","tongue","lips","kiss","cupid","heart","heartbeat","broken_heart","two_hearts","sparkling_heart","heartpulse","blue_heart","green_heart","yellow_heart","orange_heart","purple_heart","black_heart","gift_heart","revolving_hearts","heart_decoration","heavy_heart_exclamation_mark_ornament","love_letter","zzz","anger","bomb","boom","sweat_drops","dash","dizzy","speech_balloon","left_speech_bubble","right_anger_bubble","thought_balloon","hole","eyeglasses","dark_sunglasses","necktie","shirt","jeans","scarf","gloves","coat","socks","dress","kimono","bikini","womans_clothes","purse","handbag","pouch","shopping_bags","school_satchel","mans_shoe","athletic_shoe","high_heel","sandal","boot","crown","womans_hat","tophat","mortar_board","billed_cap","helmet_with_white_cross","prayer_beads","lipstick","ring","gem"]},{name:"Animals & Nature",emojis:["monkey_face","monkey","gorilla","dog","dog2","poodle","wolf","fox_face","cat","cat2","lion_face","tiger","tiger2","leopard","horse","racehorse","unicorn_face","zebra_face","deer","cow","ox","water_buffalo","cow2","pig","pig2","boar","pig_nose","ram","sheep","goat","dromedary_camel","camel","giraffe_face","elephant","rhinoceros","mouse","mouse2","rat","hamster","rabbit","rabbit2","chipmunk","hedgehog","bat","bear","koala","panda_face","feet","turkey","chicken","rooster","hatching_chick","baby_chick","hatched_chick","bird","penguin","dove_of_peace","eagle","duck","owl","frog","crocodile","turtle","lizard","snake","dragon_face","dragon","sauropod","t-rex","whale","whale2","dolphin","fish","tropical_fish","blowfish","shark","octopus","shell","crab","shrimp","squid","snail","butterfly","bug","ant","bee","beetle","cricket","spider","spider_web","scorpion","bouquet","cherry_blossom","white_flower","rosette","rose","wilted_flower","hibiscus","sunflower","blossom","tulip","seedling","evergreen_tree","deciduous_tree","palm_tree","cactus","ear_of_rice","herb","shamrock","four_leaf_clover","maple_leaf","fallen_leaf","leaves"]},{name:"Food & Drink",emojis:["grapes","melon","watermelon","tangerine","lemon","banana","pineapple","apple","green_apple","pear","peach","cherries","strawberry","kiwifruit","tomato","coconut","avocado","eggplant","potato","carrot","corn","hot_pepper","cucumber","broccoli","mushroom","peanuts","chestnut","bread","croissant","baguette_bread","pretzel","pancakes","cheese_wedge","meat_on_bone","poultry_leg","cut_of_meat","bacon","hamburger","fries","pizza","hotdog","sandwich","taco","burrito","stuffed_flatbread","egg","fried_egg","shallow_pan_of_food","stew","bowl_with_spoon","green_salad","popcorn","canned_food","bento","rice_cracker","rice_ball","rice","curry","ramen","spaghetti","sweet_potato","oden","sushi","fried_shrimp","fish_cake","dango","dumpling","fortune_cookie","takeout_box","icecream","shaved_ice","ice_cream","doughnut","cookie","birthday","cake","pie","chocolate_bar","candy","lollipop","custard","honey_pot","baby_bottle","glass_of_milk","coffee","tea","sake","champagne","wine_glass","cocktail","tropical_drink","beer","beers","clinking_glasses","tumbler_glass","cup_with_straw","chopsticks","knife_fork_plate","fork_and_knife","spoon","hocho","amphora"]},{name:"Activities",emojis:["jack_o_lantern","christmas_tree","fireworks","sparkler","sparkles","balloon","tada","confetti_ball","tanabata_tree","bamboo","dolls","flags","wind_chime","rice_scene","ribbon","gift","reminder_ribbon","admission_tickets","ticket","medal","trophy","sports_medal","first_place_medal","second_place_medal","third_place_medal","soccer","baseball","basketball","volleyball","football","rugby_football","tennis","8ball","bowling","cricket_bat_and_ball","field_hockey_stick_and_ball","ice_hockey_stick_and_puck","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","boxing_glove","martial_arts_uniform","goal_net","dart","golf","ice_skate","fishing_pole_and_fish","running_shirt_with_sash","ski","sled","curling_stone","video_game","joystick","game_die","spades","hearts","diamonds","clubs","black_joker","mahjong","flower_playing_cards"]},{name:"Travel & Places",emojis:["earth_africa","earth_americas","earth_asia","globe_with_meridians","world_map","japan","snow_capped_mountain","mountain","volcano","mount_fuji","camping","beach_with_umbrella","desert","desert_island","national_park","stadium","classical_building","building_construction","house_buildings","cityscape","derelict_house_building","house","house_with_garden","office","post_office","european_post_office","hospital","bank","hotel","love_hotel","convenience_store","school","department_store","factory","japanese_castle","european_castle","wedding","tokyo_tower","statue_of_liberty","church","mosque","synagogue","shinto_shrine","kaaba","fountain","tent","foggy","night_with_stars","sunrise_over_mountains","sunrise","city_sunset","city_sunrise","bridge_at_night","hotsprings","milky_way","carousel_horse","ferris_wheel","roller_coaster","barber","circus_tent","performing_arts","frame_with_picture","art","slot_machine","steam_locomotive","railway_car","bullettrain_side","bullettrain_front","train2","metro","light_rail","station","tram","monorail","mountain_railway","train","bus","oncoming_bus","trolleybus","minibus","ambulance","fire_engine","police_car","oncoming_police_car","taxi","oncoming_taxi","car","oncoming_automobile","blue_car","truck","articulated_lorry","tractor","bike","scooter","motor_scooter","busstop","motorway","railway_track","fuelpump","rotating_light","traffic_light","vertical_traffic_light","construction","octagonal_sign","anchor","boat","canoe","speedboat","passenger_ship","ferry","motor_boat","ship","airplane","small_airplane","airplane_departure","airplane_arriving","seat","helicopter","suspension_railway","mountain_cableway","aerial_tramway","satellite","rocket","flying_saucer","bellhop_bell","door","bed","couch_and_lamp","toilet","shower","bathtub","hourglass","hourglass_flowing_sand","watch","alarm_clock","stopwatch","timer_clock","mantelpiece_clock","clock12","clock1230","clock1","clock130","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","clock10","clock1030","clock11","clock1130","new_moon","waxing_crescent_moon","first_quarter_moon","moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","crescent_moon","new_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","thermometer","sunny","full_moon_with_face","sun_with_face","star","star2","stars","cloud","partly_sunny","thunder_cloud_and_rain","mostly_sunny","barely_sunny","partly_sunny_rain","rain_cloud","snow_cloud","lightning","tornado","fog","wind_blowing_face","cyclone","rainbow","closed_umbrella","umbrella","umbrella_with_rain_drops","umbrella_on_ground","zap","snowflake","snowman","snowman_without_snow","comet","fire","droplet","ocean"]},{name:"Objects",emojis:["mute","speaker","sound","loud_sound","loudspeaker","mega","postal_horn","bell","no_bell","musical_score","musical_note","notes","studio_microphone","level_slider","control_knobs","microphone","headphones","radio","saxophone","guitar","musical_keyboard","trumpet","violin","drum_with_drumsticks","iphone","calling","phone","telephone_receiver","pager","fax","battery","electric_plug","computer","desktop_computer","printer","keyboard","three_button_mouse","trackball","minidisc","floppy_disk","cd","dvd","movie_camera","film_frames","film_projector","clapper","tv","camera","camera_with_flash","video_camera","vhs","mag","mag_right","microscope","telescope","satellite_antenna","candle","bulb","flashlight","izakaya_lantern","notebook_with_decorative_cover","closed_book","book","green_book","blue_book","orange_book","books","notebook","ledger","page_with_curl","scroll","page_facing_up","newspaper","rolled_up_newspaper","bookmark_tabs","bookmark","label","moneybag","yen","dollar","euro","pound","money_with_wings","credit_card","chart","currency_exchange","heavy_dollar_sign","email","e-mail","incoming_envelope","envelope_with_arrow","outbox_tray","inbox_tray","package","mailbox","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","postbox","ballot_box_with_ballot","pencil2","black_nib","lower_left_fountain_pen","lower_left_ballpoint_pen","lower_left_paintbrush","lower_left_crayon","memo","briefcase","file_folder","open_file_folder","card_index_dividers","date","calendar","spiral_note_pad","spiral_calendar_pad","card_index","chart_with_upwards_trend","chart_with_downwards_trend","bar_chart","clipboard","pushpin","round_pushpin","paperclip","linked_paperclips","straight_ruler","triangular_ruler","scissors","card_file_box","file_cabinet","wastebasket","lock","unlock","lock_with_ink_pen","closed_lock_with_key","key","old_key","hammer","pick","hammer_and_pick","hammer_and_wrench","dagger_knife","crossed_swords","gun","bow_and_arrow","shield","wrench","nut_and_bolt","gear","compression","alembic","scales","link","chains","syringe","pill","smoking","coffin","funeral_urn","moyai","oil_drum","crystal_ball","shopping_trolley"]},{name:"Symbols",emojis:["atm","put_litter_in_its_place","potable_water","wheelchair","mens","womens","restroom","baby_symbol","wc","passport_control","customs","baggage_claim","left_luggage","warning","children_crossing","no_entry","no_entry_sign","no_bicycles","no_smoking","do_not_litter","non-potable_water","no_pedestrians","no_mobile_phones","underage","radioactive_sign","biohazard_sign","arrow_up","arrow_upper_right","arrow_right","arrow_lower_right","arrow_down","arrow_lower_left","arrow_left","arrow_upper_left","arrow_up_down","left_right_arrow","leftwards_arrow_with_hook","arrow_right_hook","arrow_heading_up","arrow_heading_down","arrows_clockwise","arrows_counterclockwise","back","end","on","soon","top","place_of_worship","atom_symbol","om_symbol","star_of_david","wheel_of_dharma","yin_yang","latin_cross","orthodox_cross","star_and_crescent","peace_symbol","menorah_with_nine_branches","six_pointed_star","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","twisted_rightwards_arrows","repeat","repeat_one","arrow_forward","fast_forward","black_right_pointing_double_triangle_with_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","arrow_backward","rewind","black_left_pointing_double_triangle_with_vertical_bar","arrow_up_small","arrow_double_up","arrow_down_small","arrow_double_down","double_vertical_bar","black_square_for_stop","black_circle_for_record","eject","cinema","low_brightness","high_brightness","signal_strength","vibration_mode","mobile_phone_off","female_sign","male_sign","medical_symbol","recycle","fleur_de_lis","trident","name_badge","beginner","o","white_check_mark","ballot_box_with_check","heavy_check_mark","heavy_multiplication_x","x","negative_squared_cross_mark","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","curly_loop","loop","part_alternation_mark","eight_spoked_asterisk","eight_pointed_black_star","sparkle","bangbang","interrobang","question","grey_question","grey_exclamation","exclamation","wavy_dash","copyright","registered","tm","hash","keycap_star","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","100","capital_abcd","abcd","1234","symbols","abc","a","ab","b","cl","cool","free","information_source","id","m","new","ng","o2","ok","parking","sos","up","vs","koko","sa","u6708","u6709","u6307","ideograph_advantage","u5272","u7121","u7981","accept","u7533","u5408","u7a7a","congratulations","secret","u55b6","u6e80","black_small_square","white_small_square","white_medium_square","black_medium_square","white_medium_small_square","black_medium_small_square","black_large_square","white_large_square","large_orange_diamond","large_blue_diamond","small_orange_diamond","small_blue_diamond","small_red_triangle","small_red_triangle_down","diamond_shape_with_a_dot_inside","radio_button","black_square_button","white_square_button","white_circle","black_circle","red_circle","large_blue_circle"]},{name:"Flags",emojis:["checkered_flag","cn","crossed_flags","de","es","flag-ac","flag-ad","flag-ae","flag-af","flag-ag","flag-ai","flag-al","flag-am","flag-ao","flag-aq","flag-ar","flag-as","flag-at","flag-au","flag-aw","flag-ax","flag-az","flag-ba","flag-bb","flag-bd","flag-be","flag-bf","flag-bg","flag-bh","flag-bi","flag-bj","flag-bl","flag-bm","flag-bn","flag-bo","flag-bq","flag-br","flag-bs","flag-bt","flag-bv","flag-bw","flag-by","flag-bz","flag-ca","flag-cc","flag-cd","flag-cf","flag-cg","flag-ch","flag-ci","flag-ck","flag-cl","flag-cm","flag-co","flag-cp","flag-cr","flag-cu","flag-cv","flag-cw","flag-cx","flag-cy","flag-cz","flag-dg","flag-dj","flag-dk","flag-dm","flag-do","flag-dz","flag-ea","flag-ec","flag-ee","flag-eg","flag-eh","flag-england","flag-er","flag-et","flag-eu","flag-fi","flag-fj","flag-fk","flag-fm","flag-fo","flag-ga","flag-gd","flag-ge","flag-gf","flag-gg","flag-gh","flag-gi","flag-gl","flag-gm","flag-gn","flag-gp","flag-gq","flag-gr","flag-gs","flag-gt","flag-gu","flag-gw","flag-gy","flag-hk","flag-hm","flag-hn","flag-hr","flag-ht","flag-hu","flag-ic","flag-id","flag-ie","flag-il","flag-im","flag-in","flag-io","flag-iq","flag-ir","flag-is","flag-je","flag-jm","flag-jo","flag-ke","flag-kg","flag-kh","flag-ki","flag-km","flag-kn","flag-kp","flag-kw","flag-ky","flag-kz","flag-la","flag-lb","flag-lc","flag-li","flag-lk","flag-lr","flag-ls","flag-lt","flag-lu","flag-lv","flag-ly","flag-ma","flag-mc","flag-md","flag-me","flag-mf","flag-mg","flag-mh","flag-mk","flag-ml","flag-mm","flag-mn","flag-mo","flag-mp","flag-mq","flag-mr","flag-ms","flag-mt","flag-mu","flag-mv","flag-mw","flag-mx","flag-my","flag-mz","flag-na","flag-nc","flag-ne","flag-nf","flag-ng","flag-ni","flag-nl","flag-no","flag-np","flag-nr","flag-nu","flag-nz","flag-om","flag-pa","flag-pe","flag-pf","flag-pg","flag-ph","flag-pk","flag-pl","flag-pm","flag-pn","flag-pr","flag-ps","flag-pt","flag-pw","flag-py","flag-qa","flag-re","flag-ro","flag-rs","flag-rw","flag-sa","flag-sb","flag-sc","flag-scotland","flag-sd","flag-se","flag-sg","flag-sh","flag-si","flag-sj","flag-sk","flag-sl","flag-sm","flag-sn","flag-so","flag-sr","flag-ss","flag-st","flag-sv","flag-sx","flag-sy","flag-sz","flag-ta","flag-tc","flag-td","flag-tf","flag-tg","flag-th","flag-tj","flag-tk","flag-tl","flag-tm","flag-tn","flag-to","flag-tr","flag-tt","flag-tv","flag-tw","flag-tz","flag-ua","flag-ug","flag-um","flag-un","flag-uy","flag-uz","flag-va","flag-vc","flag-ve","flag-vg","flag-vi","flag-vn","flag-vu","flag-wales","flag-wf","flag-ws","flag-xk","flag-ye","flag-yt","flag-za","flag-zm","flag-zw","fr","gb","it","jp","kr","rainbow-flag","ru","triangular_flag_on_post","us","waving_black_flag","waving_white_flag"]}],emojis:{"100":{name:"Hundred Points Symbol",unified:"1F4AF",non_qualified:null,sheet_x:25,sheet_y:26,short_names:["100"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"100,hundred,points,symbol,score,perfect,numbers,century,exam,quiz,test,pass"},"1234":{name:"Input Symbol for Numbers",unified:"1F522",non_qualified:null,sheet_x:27,sheet_y:36,short_names:["1234"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"1234,input,symbol,for,numbers,blue-square"},monkey_face:{name:"Monkey Face",unified:"1F435",non_qualified:null,sheet_x:13,sheet_y:31,short_names:["monkey_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":o)"],search:"monkey,face,animal,nature,circus,:o)"},grinning:{name:"Grinning Face",unified:"1F600",non_qualified:null,sheet_x:30,sheet_y:24,short_names:["grinning"],text:":D",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grinning,face,smile,happy,joy,:d,grin"},earth_africa:{name:"Earth Globe Europe-Africa",unified:"1F30D",non_qualified:null,sheet_x:6,sheet_y:5,short_names:["earth_africa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"earth,africa,globe,europe,world,international"},checkered_flag:{name:"Chequered FLAG",unified:"1F3C1",non_qualified:null,sheet_x:9,sheet_y:27,short_names:["checkered_flag"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"checkered,flag,chequered,contest,finishline,race,gokart"},mute:{name:"Speaker with Cancellation Stroke",unified:"1F507",non_qualified:null,sheet_x:27,sheet_y:9,short_names:["mute"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mute,speaker,with,cancellation,stroke,sound,volume,silence,quiet"},jack_o_lantern:{name:"Jack-O-Lantern",unified:"1F383",non_qualified:null,sheet_x:8,sheet_y:17,short_names:["jack_o_lantern"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"jack,o,lantern,halloween,light,pumpkin,creepy,fall"},atm:{name:"Automated Teller Machine",unified:"1F3E7",non_qualified:null,sheet_x:12,sheet_y:4,short_names:["atm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"atm,automated,teller,machine,money,sales,cash,blue-square,payment,bank"},grapes:{name:"Grapes",unified:"1F347",non_qualified:null,sheet_x:7,sheet_y:9,short_names:["grapes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grapes,fruit,food,wine"},earth_americas:{name:"Earth Globe Americas",unified:"1F30E",non_qualified:null,sheet_x:6,sheet_y:6,short_names:["earth_americas"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"earth,americas,globe,world,usa,international"},grin:{name:"Grinning Face with Smiling Eyes",unified:"1F601",non_qualified:null,sheet_x:30,sheet_y:25,short_names:["grin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grin,grinning,face,with,smiling,eyes,happy,smile,joy,kawaii"},melon:{name:"Melon",unified:"1F348",non_qualified:null,sheet_x:7,sheet_y:10,short_names:["melon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"melon,fruit,nature,food"},triangular_flag_on_post:{name:"Triangular Flag on POST",unified:"1F6A9",non_qualified:null,sheet_x:35,sheet_y:14,short_names:["triangular_flag_on_post"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"triangular,flag,on,post,mark,milestone,place"},monkey:{name:"Monkey",unified:"1F412",non_qualified:null,sheet_x:12,sheet_y:48,short_names:["monkey"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"monkey,animal,nature,banana,circus"},christmas_tree:{name:"Christmas Tree",unified:"1F384",non_qualified:null,sheet_x:8,sheet_y:18,short_names:["christmas_tree"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"christmas,tree,festival,vacation,december,xmas,celebration"},put_litter_in_its_place:{name:"Put Litter in Its Place Symbol",unified:"1F6AE",non_qualified:null,sheet_x:35,sheet_y:19,short_names:["put_litter_in_its_place"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"put,litter,in,its,place,symbol,blue-square,sign,human,info"},speaker:{name:"Speaker",unified:"1F508",non_qualified:null,sheet_x:27,sheet_y:10,short_names:["speaker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"speaker,sound,volume,silence,broadcast"},earth_asia:{name:"Earth Globe Asia-Australia",unified:"1F30F",non_qualified:null,sheet_x:6,sheet_y:7,short_names:["earth_asia"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"earth,asia,globe,australia,world,east,international"},crossed_flags:{name:"Crossed FLAGS",unified:"1F38C",non_qualified:null,sheet_x:8,sheet_y:31,short_names:["crossed_flags"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crossed,flags,japanese,nation,country,border"},joy:{name:"Face with Tears of Joy",unified:"1F602",non_qualified:null,sheet_x:30,sheet_y:26,short_names:["joy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"joy,face,with,tears,of,cry,weep,happy,happytears,haha"},sound:{name:"Speaker with One Sound Wave",unified:"1F509",non_qualified:null,sheet_x:27,sheet_y:11,short_names:["sound"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sound,speaker,with,one,wave,volume,broadcast"},watermelon:{name:"Watermelon",unified:"1F349",non_qualified:null,sheet_x:7,sheet_y:11,short_names:["watermelon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"watermelon,fruit,food,picnic,summer"},gorilla:{name:"Gorilla",unified:"1F98D",non_qualified:null,sheet_x:42,sheet_y:37,short_names:["gorilla"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"gorilla,animal,nature,circus"},fireworks:{name:"Fireworks",unified:"1F386",non_qualified:null,sheet_x:8,sheet_y:25,short_names:["fireworks"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fireworks,photo,festival,carnival,congratulations"},potable_water:{name:"Potable Water Symbol",unified:"1F6B0",non_qualified:null,sheet_x:35,sheet_y:21,short_names:["potable_water"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"potable,water,symbol,blue-square,liquid,restroom,cleaning,faucet"},wheelchair:{name:"Wheelchair Symbol",unified:"267F",non_qualified:null,sheet_x:48,sheet_y:10,short_names:["wheelchair"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wheelchair,symbol,blue-square,disabled,a11y,accessibility"},rolling_on_the_floor_laughing:{name:"Rolling on the Floor Laughing",unified:"1F923",non_qualified:null,sheet_x:38,sheet_y:26,short_names:["rolling_on_the_floor_laughing"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"rolling,on,the,floor,laughing"},loud_sound:{name:"Speaker with Three Sound Waves",unified:"1F50A",non_qualified:null,sheet_x:27,sheet_y:12,short_names:["loud_sound"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"loud,sound,speaker,with,three,waves,volume,noise,noisy,broadcast"},waving_black_flag:{name:"Waving Black FLAG",unified:"1F3F4",non_qualified:null,sheet_x:12,sheet_y:19,short_names:["waving_black_flag"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"waving,black,flag"},tangerine:{name:"Tangerine",unified:"1F34A",non_qualified:null,sheet_x:7,sheet_y:12,short_names:["tangerine"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tangerine,food,fruit,nature,orange"},dog:{name:"Dog Face",unified:"1F436",non_qualified:null,sheet_x:13,sheet_y:32,short_names:["dog"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dog,face,animal,friend,nature,woof,puppy,pet,faithful"},sparkler:{name:"Firework Sparkler",unified:"1F387",non_qualified:null,sheet_x:8,sheet_y:26,short_names:["sparkler"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sparkler,firework,stars,night,shine"},globe_with_meridians:{name:"Globe with Meridians",unified:"1F310",non_qualified:null,sheet_x:6,sheet_y:8,short_names:["globe_with_meridians"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"globe,with,meridians,earth,international,world,internet,interweb,i18n"},smiley:{name:"Smiling Face with Open Mouth",unified:"1F603",non_qualified:null,sheet_x:30,sheet_y:27,short_names:["smiley"],text:":)",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["=)","=-)"],search:"smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,:),smile,funny,=),=-)"},loudspeaker:{name:"Public Address Loudspeaker",unified:"1F4E2",non_qualified:null,sheet_x:26,sheet_y:25,short_names:["loudspeaker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"loudspeaker,public,address,volume,sound"},sparkles:{name:"Sparkles",unified:"2728",non_qualified:null,sheet_x:49,sheet_y:48,short_names:["sparkles"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sparkles,stars,shine,shiny,cool,awesome,good,magic"},"dog2":{name:"Dog",unified:"1F415",non_qualified:null,sheet_x:12,sheet_y:51,short_names:["dog2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dog2,dog,animal,nature,friend,doge,pet,faithful"},waving_white_flag:{name:"Waving White FLAG",unified:"1F3F3-FE0F",non_qualified:"1F3F3",sheet_x:12,sheet_y:15,short_names:["waving_white_flag"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"waving,white,flag"},world_map:{name:"World Map",unified:"1F5FA-FE0F",non_qualified:"1F5FA",sheet_x:30,sheet_y:18,short_names:["world_map"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"world,map,location,direction"},lemon:{name:"Lemon",unified:"1F34B",non_qualified:null,sheet_x:7,sheet_y:13,short_names:["lemon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lemon,fruit,nature"},mens:{name:"Mens Symbol",unified:"1F6B9",non_qualified:null,sheet_x:36,sheet_y:29,short_names:["mens"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mens,symbol,toilet,restroom,wc,blue-square,gender,male"},womens:{name:"Womens Symbol",unified:"1F6BA",non_qualified:null,sheet_x:36,sheet_y:30,short_names:["womens"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"womens,symbol,purple-square,woman,female,toilet,loo,restroom,gender"},"rainbow-flag":{name:"Rainbow FLAG",unified:"1F3F3-FE0F-200D-1F308",non_qualified:"1F3F3-200D-1F308",sheet_x:12,sheet_y:14,short_names:["rainbow-flag"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"rainbow,flag"},smile:{name:"Smiling Face with Open Mouth and Smiling Eyes",unified:"1F604",non_qualified:null,sheet_x:30,sheet_y:28,short_names:["smile"],text:":)",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["C:","c:",":D",":-D"],search:"smile,smiling,face,with,open,mouth,and,eyes,happy,joy,funny,haha,laugh,like,:d,:),c:,:-d"},banana:{name:"Banana",unified:"1F34C",non_qualified:null,sheet_x:7,sheet_y:14,short_names:["banana"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"banana,fruit,food,monkey"},mega:{name:"Cheering Megaphone",unified:"1F4E3",non_qualified:null,sheet_x:26,sheet_y:26,short_names:["mega"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mega,cheering,megaphone,sound,speaker,volume"},japan:{name:"Silhouette of Japan",unified:"1F5FE",non_qualified:null,sheet_x:30,sheet_y:22,short_names:["japan"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"japan,silhouette,of,nation,country,japanese,asia"},poodle:{name:"Poodle",unified:"1F429",non_qualified:null,sheet_x:13,sheet_y:19,short_names:["poodle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"poodle,dog,animal,101,nature,pet"},balloon:{name:"Balloon",unified:"1F388",non_qualified:null,sheet_x:8,sheet_y:27,short_names:["balloon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"balloon,party,celebration,birthday,circus"},"flag-ac":{name:"Ascension Island FLAG",unified:"1F1E6-1F1E8",non_qualified:null,sheet_x:0,sheet_y:31,short_names:["flag-ac"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ac,ascension,island"},sweat_smile:{name:"Smiling Face with Open Mouth and Cold Sweat",unified:"1F605",non_qualified:null,sheet_x:30,sheet_y:29,short_names:["sweat_smile"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sweat,smile,smiling,face,with,open,mouth,and,cold,hot,happy,laugh,relief"},pineapple:{name:"Pineapple",unified:"1F34D",non_qualified:null,sheet_x:7,sheet_y:15,short_names:["pineapple"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pineapple,fruit,nature,food"},restroom:{name:"Restroom",unified:"1F6BB",non_qualified:null,sheet_x:36,sheet_y:31,short_names:["restroom"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"restroom,blue-square,toilet,refresh,wc,gender"},postal_horn:{name:"Postal Horn",unified:"1F4EF",non_qualified:null,sheet_x:26,sheet_y:38,short_names:["postal_horn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"postal,horn,instrument,music"},wolf:{name:"Wolf Face",unified:"1F43A",non_qualified:null,sheet_x:13,sheet_y:36,short_names:["wolf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wolf,face,animal,nature,wild"},tada:{name:"Party Popper",unified:"1F389",non_qualified:null,sheet_x:8,sheet_y:28,short_names:["tada"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tada,party,popper,congratulations,birthday,magic,circus,celebration"},snow_capped_mountain:{name:"Snow Capped Mountain",unified:"1F3D4-FE0F",non_qualified:"1F3D4",sheet_x:11,sheet_y:37,short_names:["snow_capped_mountain"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"snow,capped,mountain"},laughing:{name:"Smiling Face with Open Mouth and Tightly-Closed Eyes",unified:"1F606",non_qualified:null,sheet_x:30,sheet_y:30,short_names:["laughing","satisfied"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":>",":->"],search:"laughing,satisfied,smiling,face,with,open,mouth,and,tightly,closed,eyes,happy,joy,lol,haha,glad,xd,laugh,:>,:->"},apple:{name:"Red Apple",unified:"1F34E",non_qualified:null,sheet_x:7,sheet_y:16,short_names:["apple"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"apple,red,fruit,mac,school"},"flag-ad":{name:"Andorra FLAG",unified:"1F1E6-1F1E9",non_qualified:null,sheet_x:0,sheet_y:32,short_names:["flag-ad"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ad,andorra"},fox_face:{name:"Fox Face",unified:"1F98A",non_qualified:null,sheet_x:42,sheet_y:34,short_names:["fox_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"fox,face,animal,nature"},confetti_ball:{name:"Confetti Ball",unified:"1F38A",non_qualified:null,sheet_x:8,sheet_y:29,short_names:["confetti_ball"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"confetti,ball,festival,party,birthday,circus"},bell:{name:"Bell",unified:"1F514",non_qualified:null,sheet_x:27,sheet_y:22,short_names:["bell"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bell,sound,notification,christmas,xmas,chime"},mountain:{name:"Mountain",unified:"26F0-FE0F",non_qualified:"26F0",sheet_x:48,sheet_y:38,short_names:["mountain"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"mountain,photo,nature,environment"},baby_symbol:{name:"Baby Symbol",unified:"1F6BC",non_qualified:null,sheet_x:36,sheet_y:32,short_names:["baby_symbol"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"baby,symbol,orange-square,child"},wc:{name:"Water Closet",unified:"1F6BE",non_qualified:null,sheet_x:36,sheet_y:34,short_names:["wc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wc,water,closet,toilet,restroom,blue-square"},wink:{name:"Winking Face",unified:"1F609",non_qualified:null,sheet_x:30,sheet_y:33,short_names:["wink"],text:";)",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[";)",";-)"],search:"wink,winking,face,happy,mischievous,secret,;),smile,eye,;-)"},no_bell:{name:"Bell with Cancellation Stroke",unified:"1F515",non_qualified:null,sheet_x:27,sheet_y:23,short_names:["no_bell"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,bell,with,cancellation,stroke,sound,volume,mute,quiet,silent"},green_apple:{name:"Green Apple",unified:"1F34F",non_qualified:null,sheet_x:7,sheet_y:17,short_names:["green_apple"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"green,apple,fruit,nature"},tanabata_tree:{name:"Tanabata Tree",unified:"1F38B",non_qualified:null,sheet_x:8,sheet_y:30,short_names:["tanabata_tree"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tanabata,tree,plant,nature,branch,summer"},"flag-ae":{name:"United Arab Emirates FLAG",unified:"1F1E6-1F1EA",non_qualified:null,sheet_x:0,sheet_y:33,short_names:["flag-ae"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ae,united,arab,emirates"},volcano:{name:"Volcano",unified:"1F30B",non_qualified:null,sheet_x:6,sheet_y:3,short_names:["volcano"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"volcano,photo,nature,disaster"},cat:{name:"Cat Face",unified:"1F431",non_qualified:null,sheet_x:13,sheet_y:27,short_names:["cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cat,face,animal,meow,nature,pet,kitten"},"flag-af":{name:"Afghanistan FLAG",unified:"1F1E6-1F1EB",non_qualified:null,sheet_x:0,sheet_y:34,short_names:["flag-af"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,af,afghanistan"},musical_score:{name:"Musical Score",unified:"1F3BC",non_qualified:null,sheet_x:9,sheet_y:22,short_names:["musical_score"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"musical,score,treble,clef,compose"},blush:{name:"Smiling Face with Smiling Eyes",unified:"1F60A",non_qualified:null,sheet_x:30,sheet_y:34,short_names:["blush"],text:":)",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blush,smiling,face,with,eyes,smile,happy,flushed,crush,embarrassed,shy,joy"},pear:{name:"Pear",unified:"1F350",non_qualified:null,sheet_x:7,sheet_y:18,short_names:["pear"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pear,fruit,nature,food"},bamboo:{name:"Pine Decoration",unified:"1F38D",non_qualified:null,sheet_x:8,sheet_y:32,short_names:["bamboo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bamboo,pine,decoration,plant,nature,vegetable,panda,pine_decoration"},passport_control:{name:"Passport Control",unified:"1F6C2",non_qualified:null,sheet_x:36,sheet_y:43,short_names:["passport_control"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"passport,control,custom,blue-square"},mount_fuji:{name:"Mount Fuji",unified:"1F5FB",non_qualified:null,sheet_x:30,sheet_y:19,short_names:["mount_fuji"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mount,fuji,photo,mountain,nature,japanese"},"cat2":{name:"Cat",unified:"1F408",non_qualified:null,sheet_x:12,sheet_y:38,short_names:["cat2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cat2,cat,animal,meow,pet,cats"},musical_note:{name:"Musical Note",unified:"1F3B5",non_qualified:null,sheet_x:9,sheet_y:15,short_names:["musical_note"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"musical,note,score,tone,sound"},dolls:{name:"Japanese Dolls",unified:"1F38E",non_qualified:null,sheet_x:8,sheet_y:33,short_names:["dolls"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dolls,japanese,toy,kimono"},lion_face:{name:"Lion Face",unified:"1F981",non_qualified:null,sheet_x:42,sheet_y:25,short_names:["lion_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lion,face"},camping:{name:"Camping",unified:"1F3D5-FE0F",non_qualified:"1F3D5",sheet_x:11,sheet_y:38,short_names:["camping"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"camping,photo,outdoors,tent"},"flag-ag":{name:"Antigua & Barbuda FLAG",unified:"1F1E6-1F1EC",non_qualified:null,sheet_x:0,sheet_y:35,short_names:["flag-ag"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ag,antigua,&,barbuda"},customs:{name:"Customs",unified:"1F6C3",non_qualified:null,sheet_x:36,sheet_y:44,short_names:["customs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"customs,passport,border,blue-square"},yum:{name:"Face Savouring Delicious Food",unified:"1F60B",non_qualified:null,sheet_x:30,sheet_y:35,short_names:["yum"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"yum,face,savouring,delicious,food,happy,joy,tongue,smile,silly,yummy,nom"},peach:{name:"Peach",unified:"1F351",non_qualified:null,sheet_x:7,sheet_y:19,short_names:["peach"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"peach,fruit,nature,food"},tiger:{name:"Tiger Face",unified:"1F42F",non_qualified:null,sheet_x:13,sheet_y:25,short_names:["tiger"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tiger,face,animal,cat,danger,wild,nature,roar"},notes:{name:"Multiple Musical Notes",unified:"1F3B6",non_qualified:null,sheet_x:9,sheet_y:16,short_names:["notes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"notes,multiple,musical,music,score"},flags:{name:"Carp Streamer",unified:"1F38F",non_qualified:null,sheet_x:8,sheet_y:34,short_names:["flags"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flags,carp,streamer,fish,japanese,koinobori,banner"},beach_with_umbrella:{name:"Beach with Umbrella",unified:"1F3D6-FE0F",non_qualified:"1F3D6",sheet_x:11,sheet_y:39,short_names:["beach_with_umbrella"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"beach,with,umbrella"},cherries:{name:"Cherries",unified:"1F352",non_qualified:null,sheet_x:7,sheet_y:20,short_names:["cherries"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cherries,food,fruit"},"flag-ai":{name:"Anguilla FLAG",unified:"1F1E6-1F1EE",non_qualified:null,sheet_x:0,sheet_y:36,short_names:["flag-ai"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ai,anguilla"},baggage_claim:{name:"Baggage Claim",unified:"1F6C4",non_qualified:null,sheet_x:36,sheet_y:45,short_names:["baggage_claim"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"baggage,claim,blue-square,airport,transport"},sunglasses:{name:"Smiling Face with Sunglasses",unified:"1F60E",non_qualified:null,sheet_x:30,sheet_y:38,short_names:["sunglasses"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["8)"],search:"sunglasses,smiling,face,with,cool,smile,summer,beach,sunglass,8)"},left_luggage:{name:"Left Luggage",unified:"1F6C5",non_qualified:null,sheet_x:36,sheet_y:46,short_names:["left_luggage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"left,luggage,blue-square,travel"},wind_chime:{name:"Wind Chime",unified:"1F390",non_qualified:null,sheet_x:8,sheet_y:35,short_names:["wind_chime"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wind,chime,nature,ding,spring,bell"},strawberry:{name:"Strawberry",unified:"1F353",non_qualified:null,sheet_x:7,sheet_y:21,short_names:["strawberry"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"strawberry,fruit,food,nature"},desert:{name:"Desert",unified:"1F3DC-FE0F",non_qualified:"1F3DC",sheet_x:11,sheet_y:45,short_names:["desert"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"desert,photo,warm,saharah"},studio_microphone:{name:"Studio Microphone",unified:"1F399-FE0F",non_qualified:"1F399",sheet_x:8,sheet_y:41,short_names:["studio_microphone"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"studio,microphone,sing,recording,artist,talkshow"},"flag-al":{name:"Albania FLAG",unified:"1F1E6-1F1F1",non_qualified:null,sheet_x:0,sheet_y:37,short_names:["flag-al"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,al,albania"},"tiger2":{name:"Tiger",unified:"1F405",non_qualified:null,sheet_x:12,sheet_y:35,short_names:["tiger2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tiger2,tiger,animal,nature,roar"},heart_eyes:{name:"Smiling Face with Heart-Shaped Eyes",unified:"1F60D",non_qualified:null,sheet_x:30,sheet_y:37,short_names:["heart_eyes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heart,eyes,smiling,face,with,shaped,love,like,affection,valentines,infatuation,crush"},desert_island:{name:"Desert Island",unified:"1F3DD-FE0F",non_qualified:"1F3DD",sheet_x:11,sheet_y:46,short_names:["desert_island"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"desert,island,photo,tropical,mojito"},kiwifruit:{name:"Kiwifruit",unified:"1F95D",non_qualified:null,sheet_x:42,sheet_y:9,short_names:["kiwifruit"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"kiwifruit"},rice_scene:{name:"Moon Viewing Ceremony",unified:"1F391",non_qualified:null,sheet_x:8,sheet_y:36,short_names:["rice_scene"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rice,scene,moon,viewing,ceremony,photo,japan,asia,tsukimi"},kissing_heart:{name:"Face Throwing a Kiss",unified:"1F618",non_qualified:null,sheet_x:30,sheet_y:48,short_names:["kissing_heart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":*",":-*"],search:"kissing,heart,face,throwing,a,kiss,love,like,affection,valentines,infatuation,:*,:-*"},warning:{name:"Warning Sign",unified:"26A0-FE0F",non_qualified:"26A0",sheet_x:48,sheet_y:20,short_names:["warning"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"warning,sign,exclamation,wip,alert,error,problem,issue"},"flag-am":{name:"Armenia FLAG",unified:"1F1E6-1F1F2",non_qualified:null,sheet_x:0,sheet_y:38,short_names:["flag-am"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,am,armenia"},leopard:{name:"Leopard",unified:"1F406",non_qualified:null,sheet_x:12,sheet_y:36,short_names:["leopard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"leopard,animal,nature"},level_slider:{name:"Level Slider",unified:"1F39A-FE0F",non_qualified:"1F39A",sheet_x:8,sheet_y:42,short_names:["level_slider"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"level,slider,scale"},horse:{name:"Horse Face",unified:"1F434",non_qualified:null,sheet_x:13,sheet_y:30,short_names:["horse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"horse,face,animal,brown,nature"},children_crossing:{name:"Children Crossing",unified:"1F6B8",non_qualified:null,sheet_x:36,sheet_y:28,short_names:["children_crossing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"children,crossing,school,warning,danger,sign,driving,yellow-diamond"},ribbon:{name:"Ribbon",unified:"1F380",non_qualified:null,sheet_x:8,sheet_y:14,short_names:["ribbon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ribbon,decoration,pink,girl,bowtie"},national_park:{name:"National Park",unified:"1F3DE-FE0F",non_qualified:"1F3DE",sheet_x:11,sheet_y:47,short_names:["national_park"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"national,park,photo,environment,nature"},control_knobs:{name:"Control Knobs",unified:"1F39B-FE0F",non_qualified:"1F39B",sheet_x:8,sheet_y:43,short_names:["control_knobs"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"control,knobs,dial"},kissing:{name:"Kissing Face",unified:"1F617",non_qualified:null,sheet_x:30,sheet_y:47,short_names:["kissing"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kissing,face,love,like,3,valentines,infatuation,kiss"},tomato:{name:"Tomato",unified:"1F345",non_qualified:null,sheet_x:7,sheet_y:7,short_names:["tomato"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tomato,fruit,vegetable,nature,food"},"flag-ao":{name:"Angola FLAG",unified:"1F1E6-1F1F4",non_qualified:null,sheet_x:0,sheet_y:39,short_names:["flag-ao"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ao,angola"},stadium:{name:"Stadium",unified:"1F3DF-FE0F",non_qualified:"1F3DF",sheet_x:11,sheet_y:48,short_names:["stadium"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"stadium,photo,place,sports,concert,venue"},"flag-aq":{name:"Antarctica FLAG",unified:"1F1E6-1F1F6",non_qualified:null,sheet_x:0,sheet_y:40,short_names:["flag-aq"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,aq,antarctica"},gift:{name:"Wrapped Present",unified:"1F381",non_qualified:null,sheet_x:8,sheet_y:15,short_names:["gift"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gift,wrapped,present,birthday,christmas,xmas"},no_entry:{name:"No Entry",unified:"26D4",non_qualified:null,sheet_x:48,sheet_y:35,short_names:["no_entry"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,entry,limit,security,privacy,bad,denied,stop,circle"},kissing_smiling_eyes:{name:"Kissing Face with Smiling Eyes",unified:"1F619",non_qualified:null,sheet_x:30,sheet_y:49,short_names:["kissing_smiling_eyes"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kissing,smiling,eyes,face,with,affection,valentines,infatuation,kiss"},coconut:{name:"Coconut",unified:"1F965",non_qualified:null,sheet_x:42,sheet_y:17,short_names:["coconut"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"coconut"},racehorse:{name:"Horse",unified:"1F40E",non_qualified:null,sheet_x:12,sheet_y:44,short_names:["racehorse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"racehorse,horse,animal,gamble,luck"},microphone:{name:"Microphone",unified:"1F3A4",non_qualified:null,sheet_x:8,sheet_y:50,short_names:["microphone"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"microphone,sound,music,pa,sing,talkshow"},classical_building:{name:"Classical Building",unified:"1F3DB-FE0F",non_qualified:"1F3DB",sheet_x:11,sheet_y:44,short_names:["classical_building"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"classical,building,art,culture,history"},no_entry_sign:{name:"No Entry Sign",unified:"1F6AB",non_qualified:null,sheet_x:35,sheet_y:16,short_names:["no_entry_sign"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,entry,sign,forbid,stop,limit,denied,disallow,circle"},reminder_ribbon:{name:"Reminder Ribbon",unified:"1F397-FE0F",non_qualified:"1F397",sheet_x:8,sheet_y:40,short_names:["reminder_ribbon"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"reminder,ribbon,sports,cause,support,awareness"},kissing_closed_eyes:{name:"Kissing Face with Closed Eyes",unified:"1F61A",non_qualified:null,sheet_x:30,sheet_y:50,short_names:["kissing_closed_eyes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kissing,closed,eyes,face,with,love,like,affection,valentines,infatuation,kiss"},unicorn_face:{name:"Unicorn Face",unified:"1F984",non_qualified:null,sheet_x:42,sheet_y:28,short_names:["unicorn_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"unicorn,face"},"flag-ar":{name:"Argentina FLAG",unified:"1F1E6-1F1F7",non_qualified:null,sheet_x:0,sheet_y:41,short_names:["flag-ar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ar,argentina"},headphones:{name:"Headphone",unified:"1F3A7",non_qualified:null,sheet_x:9,sheet_y:1,short_names:["headphones"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"headphones,headphone,music,score,gadgets"},avocado:{name:"Avocado",unified:"1F951",non_qualified:null,sheet_x:41,sheet_y:49,short_names:["avocado"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"avocado,fruit,food"},relaxed:{name:"White Smiling Face",unified:"263A-FE0F",non_qualified:"263A",sheet_x:47,sheet_y:41,short_names:["relaxed"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"relaxed,white,smiling,face,blush,massage,happiness"},zebra_face:{name:"Zebra Face",unified:"1F993",non_qualified:null,sheet_x:42,sheet_y:43,short_names:["zebra_face"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"zebra,face"},eggplant:{name:"Aubergine",unified:"1F346",non_qualified:null,sheet_x:7,sheet_y:8,short_names:["eggplant"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"eggplant,aubergine,vegetable,nature,food"},radio:{name:"Radio",unified:"1F4FB",non_qualified:null,sheet_x:26,sheet_y:50,short_names:["radio"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"radio,communication,music,podcast,program"},building_construction:{name:"Building Construction",unified:"1F3D7-FE0F",non_qualified:"1F3D7",sheet_x:11,sheet_y:40,short_names:["building_construction"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"building,construction,wip,working,progress"},"flag-as":{name:"American Samoa FLAG",unified:"1F1E6-1F1F8",non_qualified:null,sheet_x:0,sheet_y:42,short_names:["flag-as"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,as,american,samoa"},admission_tickets:{name:"Admission Tickets",unified:"1F39F-FE0F",non_qualified:"1F39F",sheet_x:8,sheet_y:45,short_names:["admission_tickets"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"admission,tickets"},no_bicycles:{name:"No Bicycles",unified:"1F6B3",non_qualified:null,sheet_x:35,sheet_y:24,short_names:["no_bicycles"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,bicycles,cyclist,prohibited,circle"},no_smoking:{name:"No Smoking Symbol",unified:"1F6AD",non_qualified:null,sheet_x:35,sheet_y:18,short_names:["no_smoking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,smoking,symbol,cigarette,blue-square,smell,smoke"},slightly_smiling_face:{name:"Slightly Smiling Face",unified:"1F642",non_qualified:null,sheet_x:31,sheet_y:38,short_names:["slightly_smiling_face"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":)","(:",":-)"],search:"slightly,smiling,face,smile,:),(:,:-)"},"flag-at":{name:"Austria FLAG",unified:"1F1E6-1F1F9",non_qualified:null,sheet_x:0,sheet_y:43,short_names:["flag-at"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,at,austria"},ticket:{name:"Ticket",unified:"1F3AB",non_qualified:null,sheet_x:9,sheet_y:5,short_names:["ticket"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ticket,event,concert,pass"},saxophone:{name:"Saxophone",unified:"1F3B7",non_qualified:null,sheet_x:9,sheet_y:17,short_names:["saxophone"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"saxophone,music,instrument,jazz,blues"},deer:{name:"Deer",unified:"1F98C",non_qualified:null,sheet_x:42,sheet_y:36,short_names:["deer"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"deer,animal,nature,horns,venison"},house_buildings:{name:"House Buildings",unified:"1F3D8-FE0F",non_qualified:"1F3D8",sheet_x:11,sheet_y:41,short_names:["house_buildings"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"house,buildings"},potato:{name:"Potato",unified:"1F954",non_qualified:null,sheet_x:42,sheet_y:0,short_names:["potato"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"potato,food,tuber,vegatable,starch"},guitar:{name:"Guitar",unified:"1F3B8",non_qualified:null,sheet_x:9,sheet_y:18,short_names:["guitar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"guitar,music,instrument"},carrot:{name:"Carrot",unified:"1F955",non_qualified:null,sheet_x:42,sheet_y:1,short_names:["carrot"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"carrot,vegetable,food,orange"},cityscape:{name:"Cityscape",unified:"1F3D9-FE0F",non_qualified:"1F3D9",sheet_x:11,sheet_y:42,short_names:["cityscape"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"cityscape,photo,night life,urban"},"flag-au":{name:"Australia FLAG",unified:"1F1E6-1F1FA",non_qualified:null,sheet_x:0,sheet_y:44,short_names:["flag-au"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,au,australia"},do_not_litter:{name:"Do Not Litter Symbol",unified:"1F6AF",non_qualified:null,sheet_x:35,sheet_y:20,short_names:["do_not_litter"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"do,not,litter,symbol,trash,bin,garbage,circle"},hugging_face:{name:"Hugging Face",unified:"1F917",non_qualified:null,sheet_x:37,sheet_y:31,short_names:["hugging_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"hugging,face"},cow:{name:"Cow Face",unified:"1F42E",non_qualified:null,sheet_x:13,sheet_y:24,short_names:["cow"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cow,face,beef,ox,animal,nature,moo,milk"},medal:{name:"Medal",unified:"1F396-FE0F",non_qualified:"1F396",sheet_x:8,sheet_y:39,short_names:["medal"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"medal"},musical_keyboard:{name:"Musical Keyboard",unified:"1F3B9",non_qualified:null,sheet_x:9,sheet_y:19,short_names:["musical_keyboard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"musical,keyboard,piano,instrument,compose"},corn:{name:"Ear of Maize",unified:"1F33D",non_qualified:null,sheet_x:6,sheet_y:51,short_names:["corn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"corn,ear,of,maize,food,vegetable,plant"},derelict_house_building:{name:"Derelict House Building",unified:"1F3DA-FE0F",non_qualified:"1F3DA",sheet_x:11,sheet_y:43,short_names:["derelict_house_building"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"derelict,house,building"},"non-potable_water":{name:"Non-Potable Water Symbol",unified:"1F6B1",non_qualified:null,sheet_x:35,sheet_y:22,short_names:["non-potable_water"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"non,potable,water,symbol,drink,faucet,tap,circle"},trophy:{name:"Trophy",unified:"1F3C6",non_qualified:null,sheet_x:10,sheet_y:19,short_names:["trophy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"trophy,win,award,contest,place,ftw,ceremony"},"flag-aw":{name:"Aruba FLAG",unified:"1F1E6-1F1FC",non_qualified:null,sheet_x:0,sheet_y:45,short_names:["flag-aw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,aw,aruba"},"star-struck":{name:"Grinning Face with Star Eyes",unified:"1F929",non_qualified:null,sheet_x:38,sheet_y:49,short_names:["star-struck","grinning_face_with_star_eyes"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"star,struck,grinning,face,with,eyes"},ox:{name:"Ox",unified:"1F402",non_qualified:null,sheet_x:12,sheet_y:32,short_names:["ox"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ox,animal,cow,beef"},trumpet:{name:"Trumpet",unified:"1F3BA",non_qualified:null,sheet_x:9,sheet_y:20,short_names:["trumpet"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"trumpet,music,brass"},hot_pepper:{name:"Hot Pepper",unified:"1F336-FE0F",non_qualified:"1F336",sheet_x:6,sheet_y:44,short_names:["hot_pepper"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"hot,pepper,food,spicy,chilli,chili"},sports_medal:{name:"Sports Medal",unified:"1F3C5",non_qualified:null,sheet_x:10,sheet_y:18,short_names:["sports_medal"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"sports,medal"},"flag-ax":{name:"Åland Islands FLAG",unified:"1F1E6-1F1FD",non_qualified:null,sheet_x:0,sheet_y:46,short_names:["flag-ax"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ax,åland,islands"},water_buffalo:{name:"Water Buffalo",unified:"1F403",non_qualified:null,sheet_x:12,sheet_y:33,short_names:["water_buffalo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"water,buffalo,animal,nature,ox,cow"},no_pedestrians:{name:"No Pedestrians",unified:"1F6B7",non_qualified:null,sheet_x:36,sheet_y:27,short_names:["no_pedestrians"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,pedestrians,rules,crossing,walking,circle"},thinking_face:{name:"Thinking Face",unified:"1F914",non_qualified:null,sheet_x:37,sheet_y:28,short_names:["thinking_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"thinking,face"},house:{name:"House Building",unified:"1F3E0",non_qualified:null,sheet_x:11,sheet_y:49,short_names:["house"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"house,building,home"},no_mobile_phones:{name:"No Mobile Phones",unified:"1F4F5",non_qualified:null,sheet_x:26,sheet_y:44,short_names:["no_mobile_phones"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,mobile,phones,iphone,mute,circle"},"flag-az":{name:"Azerbaijan FLAG",unified:"1F1E6-1F1FF",non_qualified:null,sheet_x:0,sheet_y:47,short_names:["flag-az"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,az,azerbaijan"},first_place_medal:{name:"First Place Medal",unified:"1F947",non_qualified:null,sheet_x:41,sheet_y:42,short_names:["first_place_medal"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"first,place,medal"},house_with_garden:{name:"House with Garden",unified:"1F3E1",non_qualified:null,sheet_x:11,sheet_y:50,short_names:["house_with_garden"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"house,with,garden,home,plant,nature"},violin:{name:"Violin",unified:"1F3BB",non_qualified:null,sheet_x:9,sheet_y:21,short_names:["violin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"violin,music,instrument,orchestra,symphony"},face_with_raised_eyebrow:{name:"Face with One Eyebrow Raised",unified:"1F928",non_qualified:null,sheet_x:38,sheet_y:48,short_names:["face_with_raised_eyebrow","face_with_one_eyebrow_raised"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"face,with,raised,eyebrow,one"},cucumber:{name:"Cucumber",unified:"1F952",non_qualified:null,sheet_x:41,sheet_y:50,short_names:["cucumber"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"cucumber,fruit,food,pickle"},"cow2":{name:"Cow",unified:"1F404",non_qualified:null,sheet_x:12,sheet_y:34,short_names:["cow2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cow2,cow,beef,ox,animal,nature,moo,milk"},"flag-ba":{name:"Bosnia & Herzegovina FLAG",unified:"1F1E7-1F1E6",non_qualified:null,sheet_x:0,sheet_y:48,short_names:["flag-ba"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"flag,ba,bosnia,&,herzegovina"},pig:{name:"Pig Face",unified:"1F437",non_qualified:null,sheet_x:13,sheet_y:33,short_names:["pig"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pig,face,animal,oink,nature"},drum_with_drumsticks:{name:"Drum with Drumsticks",unified:"1F941",non_qualified:null,sheet_x:41,sheet_y:37,short_names:["drum_with_drumsticks"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"drum,with,drumsticks"},underage:{name:"No One Under Eighteen Symbol",unified:"1F51E",non_qualified:null,sheet_x:27,sheet_y:32,short_names:["underage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"underage,no,one,under,eighteen,symbol,18,drink,pub,night,minor,circle"},broccoli:{name:"Broccoli",unified:"1F966",non_qualified:null,sheet_x:42,sheet_y:18,short_names:["broccoli"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"broccoli"},office:{name:"Office Building",unified:"1F3E2",non_qualified:null,sheet_x:11,sheet_y:51,short_names:["office"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"office,building,bureau,work"},second_place_medal:{name:"Second Place Medal",unified:"1F948",non_qualified:null,sheet_x:41,sheet_y:43,short_names:["second_place_medal"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"second,place,medal"},neutral_face:{name:"Neutral Face",unified:"1F610",non_qualified:null,sheet_x:30,sheet_y:40,short_names:["neutral_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":|",":-|"],search:"neutral,face,indifference,meh,:|,:-|"},third_place_medal:{name:"Third Place Medal",unified:"1F949",non_qualified:null,sheet_x:41,sheet_y:44,short_names:["third_place_medal"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"third,place,medal"},mushroom:{name:"Mushroom",unified:"1F344",non_qualified:null,sheet_x:7,sheet_y:6,short_names:["mushroom"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mushroom,plant,vegetable"},"flag-bb":{name:"Barbados FLAG",unified:"1F1E7-1F1E7",non_qualified:null,sheet_x:0,sheet_y:49,short_names:["flag-bb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bb,barbados"},radioactive_sign:{name:"Radioactive Sign",unified:"2622-FE0F",non_qualified:"2622",sheet_x:47,sheet_y:33,short_names:["radioactive_sign"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"radioactive,sign"},"pig2":{name:"Pig",unified:"1F416",non_qualified:null,sheet_x:13,sheet_y:0,short_names:["pig2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pig2,pig,animal,nature"},expressionless:{name:"Expressionless Face",unified:"1F611",non_qualified:null,sheet_x:30,sheet_y:41,short_names:["expressionless"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"expressionless,face,indifferent,-_-,meh,deadpan"},iphone:{name:"Mobile Phone",unified:"1F4F1",non_qualified:null,sheet_x:26,sheet_y:40,short_names:["iphone"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"iphone,mobile,phone,technology,apple,gadgets,dial"},post_office:{name:"Japanese Post Office",unified:"1F3E3",non_qualified:null,sheet_x:12,sheet_y:0,short_names:["post_office"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"post,office,japanese,building,envelope,communication"},european_post_office:{name:"European Post Office",unified:"1F3E4",non_qualified:null,sheet_x:12,sheet_y:1,short_names:["european_post_office"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"european,post,office,building,email"},soccer:{name:"Soccer Ball",unified:"26BD",non_qualified:null,sheet_x:48,sheet_y:26,short_names:["soccer"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"soccer,ball,sports,football"},boar:{name:"Boar",unified:"1F417",non_qualified:null,sheet_x:13,sheet_y:1,short_names:["boar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"boar,animal,nature"},peanuts:{name:"Peanuts",unified:"1F95C",non_qualified:null,sheet_x:42,sheet_y:8,short_names:["peanuts"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"peanuts,food,nut"},calling:{name:"Mobile Phone with Rightwards Arrow at Left",unified:"1F4F2",non_qualified:null,sheet_x:26,sheet_y:41,short_names:["calling"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"calling,mobile,phone,with,rightwards,arrow,at,left,iphone,incoming"},biohazard_sign:{name:"Biohazard Sign",unified:"2623-FE0F",non_qualified:"2623",sheet_x:47,sheet_y:34,short_names:["biohazard_sign"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"biohazard,sign"},"flag-bd":{name:"Bangladesh FLAG",unified:"1F1E7-1F1E9",non_qualified:null,sheet_x:0,sheet_y:50,short_names:["flag-bd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bd,bangladesh"},no_mouth:{name:"Face Without Mouth",unified:"1F636",non_qualified:null,sheet_x:31,sheet_y:26,short_names:["no_mouth"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"no,mouth,face,without,hellokitty"},face_with_rolling_eyes:{name:"Face with Rolling Eyes",unified:"1F644",non_qualified:null,sheet_x:31,sheet_y:40,short_names:["face_with_rolling_eyes"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"face,with,rolling,eyes"},phone:{name:"Black Telephone",unified:"260E-FE0F",non_qualified:"260E",sheet_x:47,sheet_y:21,short_names:["phone","telephone"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"phone,telephone,black,technology,communication,dial"},pig_nose:{name:"Pig Nose",unified:"1F43D",non_qualified:null,sheet_x:13,sheet_y:39,short_names:["pig_nose"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pig,nose,animal,oink"},chestnut:{name:"Chestnut",unified:"1F330",non_qualified:null,sheet_x:6,sheet_y:38,short_names:["chestnut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chestnut,food,squirrel"},arrow_up:{name:"Upwards Black Arrow",unified:"2B06-FE0F",non_qualified:"2B06",sheet_x:50,sheet_y:18,short_names:["arrow_up"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,up,upwards,black,blue-square,continue,top,direction"},hospital:{name:"Hospital",unified:"1F3E5",non_qualified:null,sheet_x:12,sheet_y:2,short_names:["hospital"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hospital,building,health,surgery,doctor"},"flag-be":{name:"Belgium FLAG",unified:"1F1E7-1F1EA",non_qualified:null,sheet_x:0,sheet_y:51,short_names:["flag-be"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,be,belgium"},baseball:{name:"Baseball",unified:"26BE",non_qualified:null,sheet_x:48,sheet_y:27,short_names:["baseball"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"baseball,sports,balls"},smirk:{name:"Smirking Face",unified:"1F60F",non_qualified:null,sheet_x:30,sheet_y:39,short_names:["smirk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smirk,smirking,face,smile,mean,prank,smug,sarcasm"},arrow_upper_right:{name:"North East Arrow",unified:"2197-FE0F",non_qualified:"2197",sheet_x:46,sheet_y:36,short_names:["arrow_upper_right"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,upper,right,north,east,blue-square,point,direction,diagonal,northeast"},"flag-bf":{name:"Burkina Faso FLAG",unified:"1F1E7-1F1EB",non_qualified:null,sheet_x:1,sheet_y:0,short_names:["flag-bf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bf,burkina,faso"},basketball:{name:"Basketball and Hoop",unified:"1F3C0",non_qualified:null,sheet_x:9,sheet_y:26,short_names:["basketball"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"basketball,and,hoop,sports,balls,nba"},ram:{name:"Ram",unified:"1F40F",non_qualified:null,sheet_x:12,sheet_y:45,short_names:["ram"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ram,animal,sheep,nature"},bank:{name:"Bank",unified:"1F3E6",non_qualified:null,sheet_x:12,sheet_y:3,short_names:["bank"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bank,building,money,sales,cash,business,enterprise"},bread:{name:"Bread",unified:"1F35E",non_qualified:null,sheet_x:7,sheet_y:32,short_names:["bread"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bread,food,wheat,breakfast,toast"},telephone_receiver:{name:"Telephone Receiver",unified:"1F4DE",non_qualified:null,sheet_x:26,sheet_y:21,short_names:["telephone_receiver"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"telephone,receiver,technology,communication,dial"},croissant:{name:"Croissant",unified:"1F950",non_qualified:null,sheet_x:41,sheet_y:48,short_names:["croissant"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"croissant,food,bread,french"},pager:{name:"Pager",unified:"1F4DF",non_qualified:null,sheet_x:26,sheet_y:22,short_names:["pager"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pager,bbcall,oldschool,90s"},sheep:{name:"Sheep",unified:"1F411",non_qualified:null,sheet_x:12,sheet_y:47,short_names:["sheep"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sheep,animal,nature,wool,shipit"},arrow_right:{name:"Black Rightwards Arrow",unified:"27A1-FE0F",non_qualified:"27A1",sheet_x:50,sheet_y:12,short_names:["arrow_right"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,right,black,rightwards,blue-square,next"},persevere:{name:"Persevering Face",unified:"1F623",non_qualified:null,sheet_x:31,sheet_y:7,short_names:["persevere"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"persevere,persevering,face,sick,no,upset,oops"},"flag-bg":{name:"Bulgaria FLAG",unified:"1F1E7-1F1EC",non_qualified:null,sheet_x:1,sheet_y:1,short_names:["flag-bg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bg,bulgaria"},volleyball:{name:"Volleyball",unified:"1F3D0",non_qualified:null,sheet_x:11,sheet_y:33,short_names:["volleyball"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"volleyball,sports,balls"},hotel:{name:"Hotel",unified:"1F3E8",non_qualified:null,sheet_x:12,sheet_y:5,short_names:["hotel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hotel,building,accomodation,checkin"},arrow_lower_right:{name:"South East Arrow",unified:"2198-FE0F",non_qualified:"2198",sheet_x:46,sheet_y:37,short_names:["arrow_lower_right"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,lower,right,south,east,blue-square,direction,diagonal,southeast"},goat:{name:"Goat",unified:"1F410",non_qualified:null,sheet_x:12,sheet_y:46,short_names:["goat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"goat,animal,nature"},"flag-bh":{name:"Bahrain FLAG",unified:"1F1E7-1F1ED",non_qualified:null,sheet_x:1,sheet_y:2,short_names:["flag-bh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bh,bahrain"},love_hotel:{name:"Love Hotel",unified:"1F3E9",non_qualified:null,sheet_x:12,sheet_y:6,short_names:["love_hotel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"love,hotel,like,affection,dating"},disappointed_relieved:{name:"Disappointed but Relieved Face",unified:"1F625",non_qualified:null,sheet_x:31,sheet_y:9,short_names:["disappointed_relieved"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"disappointed,relieved,but,face,phew,sweat,nervous"},baguette_bread:{name:"Baguette Bread",unified:"1F956",non_qualified:null,sheet_x:42,sheet_y:2,short_names:["baguette_bread"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"baguette,bread,food,french"},football:{name:"American Football",unified:"1F3C8",non_qualified:null,sheet_x:10,sheet_y:26,short_names:["football"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"football,american,sports,balls,nfl"},fax:{name:"Fax Machine",unified:"1F4E0",non_qualified:null,sheet_x:26,sheet_y:23,short_names:["fax"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fax,machine,communication,technology"},convenience_store:{name:"Convenience Store",unified:"1F3EA",non_qualified:null,sheet_x:12,sheet_y:7,short_names:["convenience_store"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"convenience,store,building,shopping,groceries"},dromedary_camel:{name:"Dromedary Camel",unified:"1F42A",non_qualified:null,sheet_x:13,sheet_y:20,short_names:["dromedary_camel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dromedary,camel,animal,hot,desert,hump"},arrow_down:{name:"Downwards Black Arrow",unified:"2B07-FE0F",non_qualified:"2B07",sheet_x:50,sheet_y:19,short_names:["arrow_down"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,down,downwards,black,blue-square,direction,bottom"},battery:{name:"Battery",unified:"1F50B",non_qualified:null,sheet_x:27,sheet_y:13,short_names:["battery"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"battery,power,energy,sustain"},rugby_football:{name:"Rugby Football",unified:"1F3C9",non_qualified:null,sheet_x:10,sheet_y:27,short_names:["rugby_football"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rugby,football,sports,team"},pretzel:{name:"Pretzel",unified:"1F968",non_qualified:null,sheet_x:42,sheet_y:20,short_names:["pretzel"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"pretzel"},open_mouth:{name:"Face with Open Mouth",unified:"1F62E",non_qualified:null,sheet_x:31,sheet_y:18,short_names:["open_mouth"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":o",":-o",":O",":-O"],search:"open,mouth,face,with,surprise,impressed,wow,whoa,:o,:-o"},"flag-bi":{name:"Burundi FLAG",unified:"1F1E7-1F1EE",non_qualified:null,sheet_x:1,sheet_y:3,short_names:["flag-bi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bi,burundi"},"flag-bj":{name:"Benin FLAG",unified:"1F1E7-1F1EF",non_qualified:null,sheet_x:1,sheet_y:4,short_names:["flag-bj"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bj,benin"},pancakes:{name:"Pancakes",unified:"1F95E",non_qualified:null,sheet_x:42,sheet_y:10,short_names:["pancakes"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"pancakes,food,breakfast,flapjacks,hotcakes"},school:{name:"School",unified:"1F3EB",non_qualified:null,sheet_x:12,sheet_y:8,short_names:["school"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"school,building,student,education,learn,teach"},tennis:{name:"Tennis Racquet and Ball",unified:"1F3BE",non_qualified:null,sheet_x:9,sheet_y:24,short_names:["tennis"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tennis,racquet,and,ball,sports,balls,green"},zipper_mouth_face:{name:"Zipper-Mouth Face",unified:"1F910",non_qualified:null,sheet_x:37,sheet_y:24,short_names:["zipper_mouth_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"zipper,mouth,face,sealed,secret"},camel:{name:"Bactrian Camel",unified:"1F42B",non_qualified:null,sheet_x:13,sheet_y:21,short_names:["camel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"camel,bactrian,animal,nature,hot,desert,hump"},arrow_lower_left:{name:"South West Arrow",unified:"2199-FE0F",non_qualified:"2199",sheet_x:46,sheet_y:38,short_names:["arrow_lower_left"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,lower,left,south,west,blue-square,direction,diagonal,southwest"},electric_plug:{name:"Electric Plug",unified:"1F50C",non_qualified:null,sheet_x:27,sheet_y:14,short_names:["electric_plug"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"electric,plug,charger,power"},cheese_wedge:{name:"Cheese Wedge",unified:"1F9C0",non_qualified:null,sheet_x:42,sheet_y:48,short_names:["cheese_wedge"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"cheese,wedge"},hushed:{name:"Hushed Face",unified:"1F62F",non_qualified:null,sheet_x:31,sheet_y:19,short_names:["hushed"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hushed,face,woo,shh"},computer:{name:"Personal Computer",unified:"1F4BB",non_qualified:null,sheet_x:25,sheet_y:38,short_names:["computer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"computer,personal,technology,laptop,screen,display,monitor"},giraffe_face:{name:"Giraffe Face",unified:"1F992",non_qualified:null,sheet_x:42,sheet_y:42,short_names:["giraffe_face"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"giraffe,face"},"8ball":{name:"Billiards",unified:"1F3B1",non_qualified:null,sheet_x:9,sheet_y:11,short_names:["8ball"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"8ball,billiards,pool,hobby,game,luck,magic"},"flag-bl":{name:"St. Barthélemy FLAG",unified:"1F1E7-1F1F1",non_qualified:null,sheet_x:1,sheet_y:5,short_names:["flag-bl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bl,st.,barthélemy"},arrow_left:{name:"Leftwards Black Arrow",unified:"2B05-FE0F",non_qualified:"2B05",sheet_x:50,sheet_y:17,short_names:["arrow_left"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,left,leftwards,black,blue-square,previous,back"},department_store:{name:"Department Store",unified:"1F3EC",non_qualified:null,sheet_x:12,sheet_y:9,short_names:["department_store"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"department,store,building,shopping,mall"},meat_on_bone:{name:"Meat on Bone",unified:"1F356",non_qualified:null,sheet_x:7,sheet_y:24,short_names:["meat_on_bone"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"meat,on,bone,good,food,drumstick"},arrow_upper_left:{name:"North West Arrow",unified:"2196-FE0F",non_qualified:"2196",sheet_x:46,sheet_y:35,short_names:["arrow_upper_left"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,upper,left,north,west,blue-square,point,direction,diagonal,northwest"},"flag-bm":{name:"Bermuda FLAG",unified:"1F1E7-1F1F2",non_qualified:null,sheet_x:1,sheet_y:6,short_names:["flag-bm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bm,bermuda"},sleepy:{name:"Sleepy Face",unified:"1F62A",non_qualified:null,sheet_x:31,sheet_y:14,short_names:["sleepy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sleepy,face,tired,rest,nap"},bowling:{name:"Bowling",unified:"1F3B3",non_qualified:null,sheet_x:9,sheet_y:13,short_names:["bowling"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bowling,sports,fun,play"},factory:{name:"Factory",unified:"1F3ED",non_qualified:null,sheet_x:12,sheet_y:10,short_names:["factory"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"factory,building,industry,pollution,smoke"},desktop_computer:{name:"Desktop Computer",unified:"1F5A5-FE0F",non_qualified:"1F5A5",sheet_x:29,sheet_y:51,short_names:["desktop_computer"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"desktop,computer,technology,computing,screen"},elephant:{name:"Elephant",unified:"1F418",non_qualified:null,sheet_x:13,sheet_y:2,short_names:["elephant"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"elephant,animal,nature,nose,th,circus"},rhinoceros:{name:"Rhinoceros",unified:"1F98F",non_qualified:null,sheet_x:42,sheet_y:39,short_names:["rhinoceros"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"rhinoceros,animal,nature,horn"},arrow_up_down:{name:"Up Down Arrow",unified:"2195-FE0F",non_qualified:"2195",sheet_x:46,sheet_y:34,short_names:["arrow_up_down"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,up,down,blue-square,direction,way,vertical"},cricket_bat_and_ball:{name:"Cricket Bat and Ball",unified:"1F3CF",non_qualified:null,sheet_x:11,sheet_y:32,short_names:["cricket_bat_and_ball"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"cricket,bat,and,ball"},printer:{name:"Printer",unified:"1F5A8-FE0F",non_qualified:"1F5A8",sheet_x:30,sheet_y:0,short_names:["printer"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"printer,paper,ink"},poultry_leg:{name:"Poultry Leg",unified:"1F357",non_qualified:null,sheet_x:7,sheet_y:25,short_names:["poultry_leg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"poultry,leg,food,meat,drumstick,bird,chicken,turkey"},tired_face:{name:"Tired Face",unified:"1F62B",non_qualified:null,sheet_x:31,sheet_y:15,short_names:["tired_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tired,face,sick,whine,upset,frustrated"},japanese_castle:{name:"Japanese Castle",unified:"1F3EF",non_qualified:null,sheet_x:12,sheet_y:12,short_names:["japanese_castle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"japanese,castle,photo,building"},"flag-bn":{name:"Brunei FLAG",unified:"1F1E7-1F1F3",non_qualified:null,sheet_x:1,sheet_y:7,short_names:["flag-bn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"flag,bn,brunei"},field_hockey_stick_and_ball:{name:"Field Hockey Stick and Ball",unified:"1F3D1",non_qualified:null,sheet_x:11,sheet_y:34,short_names:["field_hockey_stick_and_ball"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"field,hockey,stick,and,ball"},sleeping:{name:"Sleeping Face",unified:"1F634",non_qualified:null,sheet_x:31,sheet_y:24,short_names:["sleeping"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sleeping,face,tired,sleepy,night,zzz"},left_right_arrow:{name:"Left Right Arrow",unified:"2194-FE0F",non_qualified:"2194",sheet_x:46,sheet_y:33,short_names:["left_right_arrow"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"left,right,arrow,shape,direction,horizontal,sideways"},keyboard:{name:"Keyboard",unified:"2328-FE0F",non_qualified:"2328",sheet_x:46,sheet_y:43,short_names:["keyboard"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"keyboard,technology,computer,type,input,text"},european_castle:{name:"European Castle",unified:"1F3F0",non_qualified:null,sheet_x:12,sheet_y:13,short_names:["european_castle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"european,castle,building,royalty,history"},mouse:{name:"Mouse Face",unified:"1F42D",non_qualified:null,sheet_x:13,sheet_y:23,short_names:["mouse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mouse,face,animal,nature,cheese_wedge,rodent"},"flag-bo":{name:"Bolivia FLAG",unified:"1F1E7-1F1F4",non_qualified:null,sheet_x:1,sheet_y:8,short_names:["flag-bo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bo,bolivia"},cut_of_meat:{name:"Cut of Meat",unified:"1F969",non_qualified:null,sheet_x:42,sheet_y:21,short_names:["cut_of_meat"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"cut,of,meat"},ice_hockey_stick_and_puck:{name:"Ice Hockey Stick and Puck",unified:"1F3D2",non_qualified:null,sheet_x:11,sheet_y:35,short_names:["ice_hockey_stick_and_puck"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"ice,hockey,stick,and,puck"},"mouse2":{name:"Mouse",unified:"1F401",non_qualified:null,sheet_x:12,sheet_y:31,short_names:["mouse2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mouse2,mouse,animal,nature,rodent"},three_button_mouse:{name:"Three Button Mouse",unified:"1F5B1-FE0F",non_qualified:"1F5B1",sheet_x:30,sheet_y:1,short_names:["three_button_mouse"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"three,button,mouse"},leftwards_arrow_with_hook:{name:"Leftwards Arrow with Hook",unified:"21A9-FE0F",non_qualified:"21A9",sheet_x:46,sheet_y:39,short_names:["leftwards_arrow_with_hook"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"leftwards,arrow,with,hook,back,return,blue-square,undo,enter"},bacon:{name:"Bacon",unified:"1F953",non_qualified:null,sheet_x:41,sheet_y:51,short_names:["bacon"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"bacon,food,breakfast,pork,pig,meat"},relieved:{name:"Relieved Face",unified:"1F60C",non_qualified:null,sheet_x:30,sheet_y:36,short_names:["relieved"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"relieved,face,relaxed,phew,massage,happiness"},"flag-bq":{name:"Caribbean Netherlands FLAG",unified:"1F1E7-1F1F6",non_qualified:null,sheet_x:1,sheet_y:9,short_names:["flag-bq"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bq,caribbean,netherlands"},wedding:{name:"Wedding",unified:"1F492",non_qualified:null,sheet_x:24,sheet_y:44,short_names:["wedding"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wedding,love,like,affection,couple,marriage,bride,groom"},tokyo_tower:{name:"Tokyo Tower",unified:"1F5FC",non_qualified:null,sheet_x:30,sheet_y:20,short_names:["tokyo_tower"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tokyo,tower,photo,japanese"},arrow_right_hook:{name:"Rightwards Arrow with Hook",unified:"21AA-FE0F",non_qualified:"21AA",sheet_x:46,sheet_y:40,short_names:["arrow_right_hook"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,right,hook,rightwards,with,blue-square,return,rotate,direction"},hamburger:{name:"Hamburger",unified:"1F354",non_qualified:null,sheet_x:7,sheet_y:22,short_names:["hamburger"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hamburger,meat,fast food,beef,cheeseburger,mcdonalds,burger king"},stuck_out_tongue:{name:"Face with Stuck-out Tongue",unified:"1F61B",non_qualified:null,sheet_x:30,sheet_y:51,short_names:["stuck_out_tongue"],text:":p",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":p",":-p",":P",":-P",":b",":-b"],search:"stuck,out,tongue,face,with,prank,childish,playful,mischievous,smile,:p,:-p,:b,:-b"},trackball:{name:"Trackball",unified:"1F5B2-FE0F",non_qualified:"1F5B2",sheet_x:30,sheet_y:2,short_names:["trackball"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"trackball,technology,trackpad"},"flag-br":{name:"Brazil FLAG",unified:"1F1E7-1F1F7",non_qualified:null,sheet_x:1,sheet_y:10,short_names:["flag-br"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,br,brazil"},rat:{name:"Rat",unified:"1F400",non_qualified:null,sheet_x:12,sheet_y:30,short_names:["rat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rat,animal,mouse,rodent"},table_tennis_paddle_and_ball:{name:"Table Tennis Paddle and Ball",unified:"1F3D3",non_qualified:null,sheet_x:11,sheet_y:36,short_names:["table_tennis_paddle_and_ball"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"table,tennis,paddle,and,ball"},minidisc:{name:"Minidisc",unified:"1F4BD",non_qualified:null,sheet_x:25,sheet_y:40,short_names:["minidisc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"minidisc,technology,record,data,disk,90s"},stuck_out_tongue_winking_eye:{name:"Face with Stuck-out Tongue and Winking Eye",unified:"1F61C",non_qualified:null,sheet_x:31,sheet_y:0,short_names:["stuck_out_tongue_winking_eye"],text:";p",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[";p",";-p",";b",";-b",";P",";-P"],search:"stuck,out,tongue,winking,eye,face,with,and,prank,childish,playful,mischievous,smile,wink,;p,;-p,;b,;-b"},fries:{name:"French Fries",unified:"1F35F",non_qualified:null,sheet_x:7,sheet_y:33,short_names:["fries"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fries,french,chips,snack,fast food"},badminton_racquet_and_shuttlecock:{name:"Badminton Racquet and Shuttlecock",unified:"1F3F8",non_qualified:null,sheet_x:12,sheet_y:22,short_names:["badminton_racquet_and_shuttlecock"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"badminton,racquet,and,shuttlecock"},statue_of_liberty:{name:"Statue of Liberty",unified:"1F5FD",non_qualified:null,sheet_x:30,sheet_y:21,short_names:["statue_of_liberty"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"statue,of,liberty,american,newyork"},"flag-bs":{name:"Bahamas FLAG",unified:"1F1E7-1F1F8",non_qualified:null,sheet_x:1,sheet_y:11,short_names:["flag-bs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bs,bahamas"},arrow_heading_up:{name:"Arrow Pointing Rightwards Then Curving Upwards",unified:"2934-FE0F",non_qualified:"2934",sheet_x:50,sheet_y:15,short_names:["arrow_heading_up"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,heading,up,pointing,rightwards,then,curving,upwards,blue-square,direction,top"},hamster:{name:"Hamster Face",unified:"1F439",non_qualified:null,sheet_x:13,sheet_y:35,short_names:["hamster"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hamster,face,animal,nature"},stuck_out_tongue_closed_eyes:{name:"Face with Stuck-out Tongue and Tightly-Closed Eyes",unified:"1F61D",non_qualified:null,sheet_x:31,sheet_y:1,short_names:["stuck_out_tongue_closed_eyes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"stuck,out,tongue,closed,eyes,face,with,and,tightly,prank,playful,mischievous,smile"},pizza:{name:"Slice of Pizza",unified:"1F355",non_qualified:null,sheet_x:7,sheet_y:23,short_names:["pizza"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pizza,slice,of,food,party"},boxing_glove:{name:"Boxing Glove",unified:"1F94A",non_qualified:null,sheet_x:41,sheet_y:45,short_names:["boxing_glove"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"boxing,glove,sports,fighting"},floppy_disk:{name:"Floppy Disk",unified:"1F4BE",non_qualified:null,sheet_x:25,sheet_y:41,short_names:["floppy_disk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"floppy,disk,oldschool,technology,save,90s,80s"},arrow_heading_down:{name:"Arrow Pointing Rightwards Then Curving Downwards",unified:"2935-FE0F",non_qualified:"2935",sheet_x:50,sheet_y:16,short_names:["arrow_heading_down"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,heading,down,pointing,rightwards,then,curving,downwards,blue-square,direction,bottom"},"flag-bt":{name:"Bhutan FLAG",unified:"1F1E7-1F1F9",non_qualified:null,sheet_x:1,sheet_y:12,short_names:["flag-bt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bt,bhutan"},rabbit:{name:"Rabbit Face",unified:"1F430",non_qualified:null,sheet_x:13,sheet_y:26,short_names:["rabbit"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rabbit,face,animal,nature,pet,spring,magic,bunny"},church:{name:"Church",unified:"26EA",non_qualified:null,sheet_x:48,sheet_y:37,short_names:["church"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"church,building,religion,christ"},drooling_face:{name:"Drooling Face",unified:"1F924",non_qualified:null,sheet_x:38,sheet_y:27,short_names:["drooling_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"drooling,face"},"flag-bv":{name:"Bouvet Island FLAG",unified:"1F1E7-1F1FB",non_qualified:null,sheet_x:1,sheet_y:13,short_names:["flag-bv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bv,bouvet,island"},mosque:{name:"Mosque",unified:"1F54C",non_qualified:null,sheet_x:28,sheet_y:15,short_names:["mosque"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"mosque,islam,worship,minaret"},"rabbit2":{name:"Rabbit",unified:"1F407",non_qualified:null,sheet_x:12,sheet_y:37,short_names:["rabbit2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rabbit2,rabbit,animal,nature,pet,magic,spring"},hotdog:{name:"Hot Dog",unified:"1F32D",non_qualified:null,sheet_x:6,sheet_y:35,short_names:["hotdog"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"hotdog,hot,dog,food,frankfurter"},martial_arts_uniform:{name:"Martial Arts Uniform",unified:"1F94B",non_qualified:null,sheet_x:41,sheet_y:46,short_names:["martial_arts_uniform"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"martial,arts,uniform,judo,karate,taekwondo"},arrows_clockwise:{name:"Clockwise Downwards and Upwards Open Circle Arrows",unified:"1F503",non_qualified:null,sheet_x:27,sheet_y:5,short_names:["arrows_clockwise"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrows,clockwise,downwards,and,upwards,open,circle,sync,cycle,round,repeat"},cd:{name:"Optical Disc",unified:"1F4BF",non_qualified:null,sheet_x:25,sheet_y:42,short_names:["cd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cd,optical,disc,technology,dvd,disk,90s"},arrows_counterclockwise:{name:"Anticlockwise Downwards and Upwards Open Circle Arrows",unified:"1F504",non_qualified:null,sheet_x:27,sheet_y:6,short_names:["arrows_counterclockwise"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrows,counterclockwise,anticlockwise,downwards,and,upwards,open,circle,blue-square,sync,cycle"},sandwich:{name:"Sandwich",unified:"1F96A",non_qualified:null,sheet_x:42,sheet_y:22,short_names:["sandwich"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"sandwich"},chipmunk:{name:"Chipmunk",unified:"1F43F-FE0F",non_qualified:"1F43F",sheet_x:13,sheet_y:41,short_names:["chipmunk"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"chipmunk,animal,nature,rodent,squirrel"},synagogue:{name:"Synagogue",unified:"1F54D",non_qualified:null,sheet_x:28,sheet_y:16,short_names:["synagogue"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"synagogue,judaism,worship,temple,jewish"},unamused:{name:"Unamused Face",unified:"1F612",non_qualified:null,sheet_x:30,sheet_y:42,short_names:["unamused"],text:":(",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"unamused,face,indifference,bored,straight face,serious,sarcasm"},goal_net:{name:"Goal Net",unified:"1F945",non_qualified:null,sheet_x:41,sheet_y:41,short_names:["goal_net"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"goal,net,sports"},"flag-bw":{name:"Botswana FLAG",unified:"1F1E7-1F1FC",non_qualified:null,sheet_x:1,sheet_y:14,short_names:["flag-bw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bw,botswana"},dvd:{name:"Dvd",unified:"1F4C0",non_qualified:null,sheet_x:25,sheet_y:43,short_names:["dvd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dvd,cd,disk,disc"},hedgehog:{name:"Hedgehog",unified:"1F994",non_qualified:null,sheet_x:42,sheet_y:44,short_names:["hedgehog"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"hedgehog"},dart:{name:"Direct Hit",unified:"1F3AF",non_qualified:null,sheet_x:9,sheet_y:9,short_names:["dart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dart,direct,hit,game,play,bar"},taco:{name:"Taco",unified:"1F32E",non_qualified:null,sheet_x:6,sheet_y:36,short_names:["taco"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"taco,food,mexican"},back:{name:"Back with Leftwards Arrow Above",unified:"1F519",non_qualified:null,sheet_x:27,sheet_y:27,short_names:["back"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"back,with,leftwards,arrow,above,words,return"},"flag-by":{name:"Belarus FLAG",unified:"1F1E7-1F1FE",non_qualified:null,sheet_x:1,sheet_y:15,short_names:["flag-by"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,by,belarus"},shinto_shrine:{name:"Shinto Shrine",unified:"26E9-FE0F",non_qualified:"26E9",sheet_x:48,sheet_y:36,short_names:["shinto_shrine"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"shinto,shrine,temple,japan,kyoto"},movie_camera:{name:"Movie Camera",unified:"1F3A5",non_qualified:null,sheet_x:8,sheet_y:51,short_names:["movie_camera"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"movie,camera,film,record"},sweat:{name:"Face with Cold Sweat",unified:"1F613",non_qualified:null,sheet_x:30,sheet_y:43,short_names:["sweat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sweat,face,with,cold,hot,sad,tired,exercise"},burrito:{name:"Burrito",unified:"1F32F",non_qualified:null,sheet_x:6,sheet_y:37,short_names:["burrito"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"burrito,food,mexican"},"flag-bz":{name:"Belize FLAG",unified:"1F1E7-1F1FF",non_qualified:null,sheet_x:1,sheet_y:16,short_names:["flag-bz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,bz,belize"},pensive:{name:"Pensive Face",unified:"1F614",non_qualified:null,sheet_x:30,sheet_y:44,short_names:["pensive"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pensive,face,sad,depressed,upset"},kaaba:{name:"Kaaba",unified:"1F54B",non_qualified:null,sheet_x:28,sheet_y:14,short_names:["kaaba"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"kaaba,mecca,mosque,islam"},film_frames:{name:"Film Frames",unified:"1F39E-FE0F",non_qualified:"1F39E",sheet_x:8,sheet_y:44,short_names:["film_frames"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"film,frames"},bat:{name:"Bat",unified:"1F987",non_qualified:null,sheet_x:42,sheet_y:31,short_names:["bat"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"bat,animal,nature,blind,vampire"},golf:{name:"Flag in Hole",unified:"26F3",non_qualified:null,sheet_x:48,sheet_y:41,short_names:["golf"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"golf,flag,in,hole,sports,business,summer"},end:{name:"End with Leftwards Arrow Above",unified:"1F51A",non_qualified:null,sheet_x:27,sheet_y:28,short_names:["end"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"end,with,leftwards,arrow,above,words"},film_projector:{name:"Film Projector",unified:"1F4FD-FE0F",non_qualified:"1F4FD",sheet_x:27,sheet_y:0,short_names:["film_projector"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"film,projector,video,tape,record,movie"},bear:{name:"Bear Face",unified:"1F43B",non_qualified:null,sheet_x:13,sheet_y:37,short_names:["bear"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bear,face,animal,nature,wild"},ice_skate:{name:"Ice Skate",unified:"26F8-FE0F",non_qualified:"26F8",sheet_x:48,sheet_y:45,short_names:["ice_skate"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"ice,skate,sports"},fountain:{name:"Fountain",unified:"26F2",non_qualified:null,sheet_x:48,sheet_y:40,short_names:["fountain"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fountain,photo,summer,water,fresh"},confused:{name:"Confused Face",unified:"1F615",non_qualified:null,sheet_x:30,sheet_y:45,short_names:["confused"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":\\",":-\\",":/",":-/"],search:"confused,face,indifference,huh,weird,hmmm,:/,:\\,:-\\,:-/"},"flag-ca":{name:"Canada FLAG",unified:"1F1E8-1F1E6",non_qualified:null,sheet_x:1,sheet_y:17,short_names:["flag-ca"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ca,canada"},on:{name:"On with Exclamation Mark with Left Right Arrow Above",unified:"1F51B",non_qualified:null,sheet_x:27,sheet_y:29,short_names:["on"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"on,with,exclamation,mark,left,right,arrow,above,words"},stuffed_flatbread:{name:"Stuffed Flatbread",unified:"1F959",non_qualified:null,sheet_x:42,sheet_y:5,short_names:["stuffed_flatbread"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"stuffed,flatbread,food,gyro"},soon:{name:"Soon with Rightwards Arrow Above",unified:"1F51C",non_qualified:null,sheet_x:27,sheet_y:30,short_names:["soon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"soon,with,rightwards,arrow,above,words"},upside_down_face:{name:"Upside-Down Face",unified:"1F643",non_qualified:null,sheet_x:31,sheet_y:39,short_names:["upside_down_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"upside,down,face,flipped,silly,smile"},fishing_pole_and_fish:{name:"Fishing Pole and Fish",unified:"1F3A3",non_qualified:null,sheet_x:8,sheet_y:49,short_names:["fishing_pole_and_fish"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fishing,pole,and,fish,food,hobby,summer"},tent:{name:"Tent",unified:"26FA",non_qualified:null,sheet_x:49,sheet_y:12,short_names:["tent"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tent,photo,camping,outdoors"},clapper:{name:"Clapper Board",unified:"1F3AC",non_qualified:null,sheet_x:9,sheet_y:6,short_names:["clapper"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clapper,board,movie,film,record"},egg:{name:"Egg",unified:"1F95A",non_qualified:null,sheet_x:42,sheet_y:6,short_names:["egg"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"egg,food,chicken,breakfast"},"flag-cc":{name:"Cocos (keeling) Islands FLAG",unified:"1F1E8-1F1E8",non_qualified:null,sheet_x:1,sheet_y:18,short_names:["flag-cc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cc,cocos,(keeling),islands"},koala:{name:"Koala",unified:"1F428",non_qualified:null,sheet_x:13,sheet_y:18,short_names:["koala"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"koala,animal,nature"},foggy:{name:"Foggy",unified:"1F301",non_qualified:null,sheet_x:5,sheet_y:45,short_names:["foggy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"foggy,photo,mountain"},tv:{name:"Television",unified:"1F4FA",non_qualified:null,sheet_x:26,sheet_y:49,short_names:["tv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tv,television,technology,program,oldschool,show"},panda_face:{name:"Panda Face",unified:"1F43C",non_qualified:null,sheet_x:13,sheet_y:38,short_names:["panda_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"panda,face,animal,nature"},fried_egg:{name:"Cooking",unified:"1F373",non_qualified:null,sheet_x:8,sheet_y:1,short_names:["fried_egg","cooking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fried,egg,cooking,food,breakfast,kitchen"},top:{name:"Top with Upwards Arrow Above",unified:"1F51D",non_qualified:null,sheet_x:27,sheet_y:31,short_names:["top"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"top,with,upwards,arrow,above,words,blue-square"},"flag-cd":{name:"Congo - Kinshasa FLAG",unified:"1F1E8-1F1E9",non_qualified:null,sheet_x:1,sheet_y:19,short_names:["flag-cd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cd,congo,kinshasa"},money_mouth_face:{name:"Money-Mouth Face",unified:"1F911",non_qualified:null,sheet_x:37,sheet_y:25,short_names:["money_mouth_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"money,mouth,face,rich,dollar"},running_shirt_with_sash:{name:"Running Shirt with Sash",unified:"1F3BD",non_qualified:null,sheet_x:9,sheet_y:23,short_names:["running_shirt_with_sash"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"running,shirt,with,sash,play,pageant"},astonished:{name:"Astonished Face",unified:"1F632",non_qualified:null,sheet_x:31,sheet_y:22,short_names:["astonished"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"astonished,face,xox,surprised,poisoned"},feet:{name:"Paw Prints",unified:"1F43E",non_qualified:null,sheet_x:13,sheet_y:40,short_names:["feet","paw_prints"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"feet,paw,prints"},camera:{name:"Camera",unified:"1F4F7",non_qualified:null,sheet_x:26,sheet_y:46,short_names:["camera"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"camera,gadgets,photography"},"flag-cf":{name:"Central African Republic FLAG",unified:"1F1E8-1F1EB",non_qualified:null,sheet_x:1,sheet_y:20,short_names:["flag-cf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cf,central,african,republic"},place_of_worship:{name:"Place of Worship",unified:"1F6D0",non_qualified:null,sheet_x:37,sheet_y:5,short_names:["place_of_worship"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"place,of,worship,religion,church,temple,prayer"},night_with_stars:{name:"Night with Stars",unified:"1F303",non_qualified:null,sheet_x:5,sheet_y:47,short_names:["night_with_stars"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"night,with,stars,evening,city,downtown"},ski:{name:"Ski and Ski Boot",unified:"1F3BF",non_qualified:null,sheet_x:9,sheet_y:25,short_names:["ski"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ski,and,boot,sports,winter,cold,snow"},shallow_pan_of_food:{name:"Shallow Pan of Food",unified:"1F958",non_qualified:null,sheet_x:42,sheet_y:4,short_names:["shallow_pan_of_food"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shallow,pan,of,food,cooking,casserole,paella"},camera_with_flash:{name:"Camera with Flash",unified:"1F4F8",non_qualified:null,sheet_x:26,sheet_y:47,short_names:["camera_with_flash"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"camera,with,flash"},sunrise_over_mountains:{name:"Sunrise over Mountains",unified:"1F304",non_qualified:null,sheet_x:5,sheet_y:48,short_names:["sunrise_over_mountains"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sunrise,over,mountains,view,vacation,photo"},turkey:{name:"Turkey",unified:"1F983",non_qualified:null,sheet_x:42,sheet_y:27,short_names:["turkey"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"turkey,animal,bird"},white_frowning_face:{name:"White Frowning Face",unified:"2639-FE0F",non_qualified:"2639",sheet_x:47,sheet_y:40,short_names:["white_frowning_face"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"white,frowning,face"},"flag-cg":{name:"Congo - Brazzaville FLAG",unified:"1F1E8-1F1EC",non_qualified:null,sheet_x:1,sheet_y:21,short_names:["flag-cg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cg,congo,brazzaville"},stew:{name:"Pot of Food",unified:"1F372",non_qualified:null,sheet_x:8,sheet_y:0,short_names:["stew"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"stew,pot,of,food,meat,soup"},sled:{name:"Sled",unified:"1F6F7",non_qualified:null,sheet_x:37,sheet_y:22,short_names:["sled"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"sled"},atom_symbol:{name:"Atom Symbol",unified:"269B-FE0F",non_qualified:"269B",sheet_x:48,sheet_y:18,short_names:["atom_symbol"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"atom,symbol,science,physics,chemistry"},curling_stone:{name:"Curling Stone",unified:"1F94C",non_qualified:null,sheet_x:41,sheet_y:47,short_names:["curling_stone"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"curling,stone"},slightly_frowning_face:{name:"Slightly Frowning Face",unified:"1F641",non_qualified:null,sheet_x:31,sheet_y:37,short_names:["slightly_frowning_face"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"slightly,frowning,face,disappointed,sad,upset"},sunrise:{name:"Sunrise",unified:"1F305",non_qualified:null,sheet_x:5,sheet_y:49,short_names:["sunrise"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sunrise,morning,view,vacation,photo"},om_symbol:{name:"Om Symbol",unified:"1F549-FE0F",non_qualified:"1F549",sheet_x:28,sheet_y:12,short_names:["om_symbol"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"om,symbol"},chicken:{name:"Chicken",unified:"1F414",non_qualified:null,sheet_x:12,sheet_y:50,short_names:["chicken"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chicken,animal,cluck,nature,bird"},bowl_with_spoon:{name:"Bowl with Spoon",unified:"1F963",non_qualified:null,sheet_x:42,sheet_y:15,short_names:["bowl_with_spoon"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"bowl,with,spoon"},"flag-ch":{name:"Switzerland FLAG",unified:"1F1E8-1F1ED",non_qualified:null,sheet_x:1,sheet_y:22,short_names:["flag-ch"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ch,switzerland"},video_camera:{name:"Video Camera",unified:"1F4F9",non_qualified:null,sheet_x:26,sheet_y:48,short_names:["video_camera"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"video,camera,film,record"},video_game:{name:"Video Game",unified:"1F3AE",non_qualified:null,sheet_x:9,sheet_y:8,short_names:["video_game"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"video,game,play,console,ps4,controller"},rooster:{name:"Rooster",unified:"1F413",non_qualified:null,sheet_x:12,sheet_y:49,short_names:["rooster"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rooster,animal,nature,chicken"},vhs:{name:"Videocassette",unified:"1F4FC",non_qualified:null,sheet_x:26,sheet_y:51,short_names:["vhs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"vhs,videocassette,record,video,oldschool,90s,80s"},city_sunset:{name:"Cityscape at Dusk",unified:"1F306",non_qualified:null,sheet_x:5,sheet_y:50,short_names:["city_sunset"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"city,sunset,cityscape,at,dusk,photo,evening,sky,buildings"},confounded:{name:"Confounded Face",unified:"1F616",non_qualified:null,sheet_x:30,sheet_y:46,short_names:["confounded"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"confounded,face,confused,sick,unwell,oops,:s"},green_salad:{name:"Green Salad",unified:"1F957",non_qualified:null,sheet_x:42,sheet_y:3,short_names:["green_salad"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"green,salad,food,healthy,lettuce"},star_of_david:{name:"Star of David",unified:"2721-FE0F",non_qualified:"2721",sheet_x:49,sheet_y:47,short_names:["star_of_david"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"star,of,david,judaism"},"flag-ci":{name:"Côte D’ivoire FLAG",unified:"1F1E8-1F1EE",non_qualified:null,sheet_x:1,sheet_y:23,short_names:["flag-ci"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ci,côte,d’ivoire"},popcorn:{name:"Popcorn",unified:"1F37F",non_qualified:null,sheet_x:8,sheet_y:13,short_names:["popcorn"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"popcorn,food,movie theater,films,snack"},city_sunrise:{name:"Sunset over Buildings",unified:"1F307",non_qualified:null,sheet_x:5,sheet_y:51,short_names:["city_sunrise"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"city,sunrise,sunset,over,buildings,photo,good morning,dawn"},disappointed:{name:"Disappointed Face",unified:"1F61E",non_qualified:null,sheet_x:31,sheet_y:2,short_names:["disappointed"],text:":(",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["):",":(",":-("],search:"disappointed,face,sad,upset,depressed,:(,):,:-("},mag:{name:"Left-Pointing Magnifying Glass",unified:"1F50D",non_qualified:null,sheet_x:27,sheet_y:15,short_names:["mag"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mag,left,pointing,magnifying,glass,search,zoom,find,detective"},hatching_chick:{name:"Hatching Chick",unified:"1F423",non_qualified:null,sheet_x:13,sheet_y:13,short_names:["hatching_chick"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hatching,chick,animal,chicken,egg,born,baby,bird"},joystick:{name:"Joystick",unified:"1F579-FE0F",non_qualified:"1F579",sheet_x:29,sheet_y:20,short_names:["joystick"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"joystick,game,play"},wheel_of_dharma:{name:"Wheel of Dharma",unified:"2638-FE0F",non_qualified:"2638",sheet_x:47,sheet_y:39,short_names:["wheel_of_dharma"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"wheel,of,dharma,hinduism,buddhism,sikhism,jainism"},"flag-ck":{name:"Cook Islands FLAG",unified:"1F1E8-1F1F0",non_qualified:null,sheet_x:1,sheet_y:24,short_names:["flag-ck"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ck,cook,islands"},canned_food:{name:"Canned Food",unified:"1F96B",non_qualified:null,sheet_x:42,sheet_y:23,short_names:["canned_food"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"canned,food"},worried:{name:"Worried Face",unified:"1F61F",non_qualified:null,sheet_x:31,sheet_y:3,short_names:["worried"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"worried,face,concern,nervous,:("},baby_chick:{name:"Baby Chick",unified:"1F424",non_qualified:null,sheet_x:13,sheet_y:14,short_names:["baby_chick"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"baby,chick,animal,chicken,bird"},"flag-cl":{name:"Chile FLAG",unified:"1F1E8-1F1F1",non_qualified:null,sheet_x:1,sheet_y:25,short_names:["flag-cl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cl,chile"},game_die:{name:"Game Die",unified:"1F3B2",non_qualified:null,sheet_x:9,sheet_y:12,short_names:["game_die"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"game,die,dice,random,tabletop,play,luck"},mag_right:{name:"Right-Pointing Magnifying Glass",unified:"1F50E",non_qualified:null,sheet_x:27,sheet_y:16,short_names:["mag_right"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mag,right,pointing,magnifying,glass,search,zoom,find,detective"},yin_yang:{name:"Yin Yang",unified:"262F-FE0F",non_qualified:"262F",sheet_x:47,sheet_y:38,short_names:["yin_yang"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"yin,yang,balance"},bridge_at_night:{name:"Bridge at Night",unified:"1F309",non_qualified:null,sheet_x:6,sheet_y:1,short_names:["bridge_at_night"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bridge,at,night,photo,sanfrancisco"},spades:{name:"Black Spade Suit",unified:"2660-FE0F",non_qualified:"2660",sheet_x:48,sheet_y:4,short_names:["spades"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"spades,black,spade,suit,poker,cards,suits,magic"},hatched_chick:{name:"Front-Facing Baby Chick",unified:"1F425",non_qualified:null,sheet_x:13,sheet_y:15,short_names:["hatched_chick"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hatched,chick,front,facing,baby,animal,chicken,bird"},"flag-cm":{name:"Cameroon FLAG",unified:"1F1E8-1F1F2",non_qualified:null,sheet_x:1,sheet_y:26,short_names:["flag-cm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cm,cameroon"},latin_cross:{name:"Latin Cross",unified:"271D-FE0F",non_qualified:"271D",sheet_x:49,sheet_y:46,short_names:["latin_cross"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"latin,cross,christianity"},triumph:{name:"Face with Look of Triumph",unified:"1F624",non_qualified:null,sheet_x:31,sheet_y:8,short_names:["triumph"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"triumph,face,with,look,of,gas,phew,proud,pride"},hotsprings:{name:"Hot Springs",unified:"2668-FE0F",non_qualified:"2668",sheet_x:48,sheet_y:8,short_names:["hotsprings"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"hotsprings,hot,springs,bath,warm,relax"},bento:{name:"Bento Box",unified:"1F371",non_qualified:null,sheet_x:7,sheet_y:51,short_names:["bento"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bento,box,food,japanese"},microscope:{name:"Microscope",unified:"1F52C",non_qualified:null,sheet_x:27,sheet_y:46,short_names:["microscope"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"microscope,laboratory,experiment,zoomin,science,study"},cry:{name:"Crying Face",unified:"1F622",non_qualified:null,sheet_x:31,sheet_y:6,short_names:["cry"],text:":'(",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":'("],search:"cry,crying,face,tears,sad,depressed,upset,:'("},bird:{name:"Bird",unified:"1F426",non_qualified:null,sheet_x:13,sheet_y:16,short_names:["bird"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bird,animal,nature,fly,tweet,spring"},cn:{name:"China FLAG",unified:"1F1E8-1F1F3",non_qualified:null,sheet_x:1,sheet_y:27,short_names:["cn","flag-cn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cn,flag,china,chinese,prc,country,nation,banner"},telescope:{name:"Telescope",unified:"1F52D",non_qualified:null,sheet_x:27,sheet_y:47,short_names:["telescope"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"telescope,stars,space,zoom,science,astronomy"},rice_cracker:{name:"Rice Cracker",unified:"1F358",non_qualified:null,sheet_x:7,sheet_y:26,short_names:["rice_cracker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rice,cracker,food,japanese"},hearts:{name:"Black Heart Suit",unified:"2665-FE0F",non_qualified:"2665",sheet_x:48,sheet_y:6,short_names:["hearts"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"hearts,black,heart,suit,poker,cards,magic,suits"},orthodox_cross:{name:"Orthodox Cross",unified:"2626-FE0F",non_qualified:"2626",sheet_x:47,sheet_y:35,short_names:["orthodox_cross"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"orthodox,cross,suppedaneum,religion"},milky_way:{name:"Milky Way",unified:"1F30C",non_qualified:null,sheet_x:6,sheet_y:4,short_names:["milky_way"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"milky,way,photo,space,stars"},rice_ball:{name:"Rice Ball",unified:"1F359",non_qualified:null,sheet_x:7,sheet_y:27,short_names:["rice_ball"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rice,ball,food,japanese"},satellite_antenna:{name:"Satellite Antenna",unified:"1F4E1",non_qualified:null,sheet_x:26,sheet_y:24,short_names:["satellite_antenna"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"satellite,antenna"},"flag-co":{name:"Colombia FLAG",unified:"1F1E8-1F1F4",non_qualified:null,sheet_x:1,sheet_y:28,short_names:["flag-co"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,co,colombia"},carousel_horse:{name:"Carousel Horse",unified:"1F3A0",non_qualified:null,sheet_x:8,sheet_y:46,short_names:["carousel_horse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"carousel,horse,photo,carnival"},sob:{name:"Loudly Crying Face",unified:"1F62D",non_qualified:null,sheet_x:31,sheet_y:17,short_names:["sob"],text:":'(",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sob,loudly,crying,face,cry,tears,sad,upset,depressed"},diamonds:{name:"Black Diamond Suit",unified:"2666-FE0F",non_qualified:"2666",sheet_x:48,sheet_y:7,short_names:["diamonds"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"diamonds,black,diamond,suit,poker,cards,magic,suits"},star_and_crescent:{name:"Star and Crescent",unified:"262A-FE0F",non_qualified:"262A",sheet_x:47,sheet_y:36,short_names:["star_and_crescent"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"star,and,crescent,islam"},penguin:{name:"Penguin",unified:"1F427",non_qualified:null,sheet_x:13,sheet_y:17,short_names:["penguin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"penguin,animal,nature"},dove_of_peace:{name:"Dove of Peace",unified:"1F54A-FE0F",non_qualified:"1F54A",sheet_x:28,sheet_y:13,short_names:["dove_of_peace"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"dove,of,peace"},"flag-cp":{name:"Clipperton Island FLAG",unified:"1F1E8-1F1F5",non_qualified:null,sheet_x:1,sheet_y:29,short_names:["flag-cp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"flag,cp,clipperton,island"},ferris_wheel:{name:"Ferris Wheel",unified:"1F3A1",non_qualified:null,sheet_x:8,sheet_y:47,short_names:["ferris_wheel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ferris,wheel,photo,carnival,londoneye"},clubs:{name:"Black Club Suit",unified:"2663-FE0F",non_qualified:"2663",sheet_x:48,sheet_y:5,short_names:["clubs"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"clubs,black,club,suit,poker,cards,magic,suits"},peace_symbol:{name:"Peace Symbol",unified:"262E-FE0F",non_qualified:"262E",sheet_x:47,sheet_y:37,short_names:["peace_symbol"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"peace,symbol,hippie"},candle:{name:"Candle",unified:"1F56F-FE0F",non_qualified:"1F56F",sheet_x:28,sheet_y:42,short_names:["candle"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"candle,fire,wax"},frowning:{name:"Frowning Face with Open Mouth",unified:"1F626",non_qualified:null,sheet_x:31,sheet_y:10,short_names:["frowning"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"frowning,face,with,open,mouth,aw,what"},rice:{name:"Cooked Rice",unified:"1F35A",non_qualified:null,sheet_x:7,sheet_y:28,short_names:["rice"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rice,cooked,food,china,asian"},"flag-cr":{name:"Costa Rica FLAG",unified:"1F1E8-1F1F7",non_qualified:null,sheet_x:1,sheet_y:30,short_names:["flag-cr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cr,costa,rica"},roller_coaster:{name:"Roller Coaster",unified:"1F3A2",non_qualified:null,sheet_x:8,sheet_y:48,short_names:["roller_coaster"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"roller,coaster,carnival,playground,photo,fun"},menorah_with_nine_branches:{name:"Menorah with Nine Branches",unified:"1F54E",non_qualified:null,sheet_x:28,sheet_y:17,short_names:["menorah_with_nine_branches"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"menorah,with,nine,branches"},black_joker:{name:"Playing Card Black Joker",unified:"1F0CF",non_qualified:null,sheet_x:0,sheet_y:15,short_names:["black_joker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,joker,playing,card,poker,cards,game,play,magic"},eagle:{name:"Eagle",unified:"1F985",non_qualified:null,sheet_x:42,sheet_y:29,short_names:["eagle"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"eagle,animal,nature,bird"},curry:{name:"Curry and Rice",unified:"1F35B",non_qualified:null,sheet_x:7,sheet_y:29,short_names:["curry"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"curry,and,rice,food,spicy,hot,indian"},bulb:{name:"Electric Light Bulb",unified:"1F4A1",non_qualified:null,sheet_x:25,sheet_y:7,short_names:["bulb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bulb,electric,light,electricity,idea"},anguished:{name:"Anguished Face",unified:"1F627",non_qualified:null,sheet_x:31,sheet_y:11,short_names:["anguished"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["D:"],search:"anguished,face,stunned,nervous,d:"},"flag-cu":{name:"Cuba FLAG",unified:"1F1E8-1F1FA",non_qualified:null,sheet_x:1,sheet_y:31,short_names:["flag-cu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cu,cuba"},barber:{name:"Barber Pole",unified:"1F488",non_qualified:null,sheet_x:24,sheet_y:34,short_names:["barber"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"barber,pole,hair,salon,style"},duck:{name:"Duck",unified:"1F986",non_qualified:null,sheet_x:42,sheet_y:30,short_names:["duck"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"duck,animal,nature,bird,mallard"},six_pointed_star:{name:"Six Pointed Star with Middle Dot",unified:"1F52F",non_qualified:null,sheet_x:27,sheet_y:49,short_names:["six_pointed_star"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"six,pointed,star,with,middle,dot,purple-square,religion,jewish,hexagram"},ramen:{name:"Steaming Bowl",unified:"1F35C",non_qualified:null,sheet_x:7,sheet_y:30,short_names:["ramen"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ramen,steaming,bowl,food,japanese,noodle,chopsticks"},flashlight:{name:"Electric Torch",unified:"1F526",non_qualified:null,sheet_x:27,sheet_y:40,short_names:["flashlight"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flashlight,electric,torch,dark,camping,sight,night"},mahjong:{name:"Mahjong Tile Red Dragon",unified:"1F004",non_qualified:null,sheet_x:0,sheet_y:14,short_names:["mahjong"],text:"",added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mahjong,tile,red,dragon,game,play,chinese,kanji"},fearful:{name:"Fearful Face",unified:"1F628",non_qualified:null,sheet_x:31,sheet_y:12,short_names:["fearful"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fearful,face,scared,terrified,nervous,oops,huh"},aries:{name:"Aries",unified:"2648",non_qualified:null,sheet_x:47,sheet_y:44,short_names:["aries"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"aries,sign,purple-square,zodiac,astrology"},spaghetti:{name:"Spaghetti",unified:"1F35D",non_qualified:null,sheet_x:7,sheet_y:31,short_names:["spaghetti"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"spaghetti,food,italian,noodle"},circus_tent:{name:"Circus Tent",unified:"1F3AA",non_qualified:null,sheet_x:9,sheet_y:4,short_names:["circus_tent"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"circus,tent,festival,carnival,party"},izakaya_lantern:{name:"Izakaya Lantern",unified:"1F3EE",non_qualified:null,sheet_x:12,sheet_y:11,short_names:["izakaya_lantern","lantern"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"izakaya,lantern,light,paper,halloween,spooky"},"flag-cv":{name:"Cape Verde FLAG",unified:"1F1E8-1F1FB",non_qualified:null,sheet_x:1,sheet_y:32,short_names:["flag-cv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cv,cape,verde"},weary:{name:"Weary Face",unified:"1F629",non_qualified:null,sheet_x:31,sheet_y:13,short_names:["weary"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"weary,face,tired,sleepy,sad,frustrated,upset"},flower_playing_cards:{name:"Flower Playing Cards",unified:"1F3B4",non_qualified:null,sheet_x:9,sheet_y:14,short_names:["flower_playing_cards"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flower,playing,cards,game,sunset,red"},owl:{name:"Owl",unified:"1F989",non_qualified:null,sheet_x:42,sheet_y:33,short_names:["owl"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"owl,animal,nature,bird,hoot"},performing_arts:{name:"Performing Arts",unified:"1F3AD",non_qualified:null,sheet_x:9,sheet_y:7,short_names:["performing_arts"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"performing,arts,acting,theater,drama"},frog:{name:"Frog Face",unified:"1F438",non_qualified:null,sheet_x:13,sheet_y:34,short_names:["frog"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"frog,face,animal,nature,croak,toad"},"flag-cw":{name:"Curaçao FLAG",unified:"1F1E8-1F1FC",non_qualified:null,sheet_x:1,sheet_y:33,short_names:["flag-cw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cw,curaçao"},notebook_with_decorative_cover:{name:"Notebook with Decorative Cover",unified:"1F4D4",non_qualified:null,sheet_x:26,sheet_y:11,short_names:["notebook_with_decorative_cover"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"notebook,with,decorative,cover,classroom,notes,record,paper,study"},exploding_head:{name:"Shocked Face with Exploding Head",unified:"1F92F",non_qualified:null,sheet_x:39,sheet_y:3,short_names:["exploding_head","shocked_face_with_exploding_head"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"exploding,head,shocked,face,with"},taurus:{name:"Taurus",unified:"2649",non_qualified:null,sheet_x:47,sheet_y:45,short_names:["taurus"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"taurus,purple-square,sign,zodiac,astrology"},sweet_potato:{name:"Roasted Sweet Potato",unified:"1F360",non_qualified:null,sheet_x:7,sheet_y:34,short_names:["sweet_potato"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sweet,potato,roasted,food,nature"},closed_book:{name:"Closed Book",unified:"1F4D5",non_qualified:null,sheet_x:26,sheet_y:12,short_names:["closed_book"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"closed,book,read,library,knowledge,textbook,learn"},gemini:{name:"Gemini",unified:"264A",non_qualified:null,sheet_x:47,sheet_y:46,short_names:["gemini"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gemini,sign,zodiac,purple-square,astrology"},frame_with_picture:{name:"Frame with Picture",unified:"1F5BC-FE0F",non_qualified:"1F5BC",sheet_x:30,sheet_y:3,short_names:["frame_with_picture"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"frame,with,picture"},"flag-cx":{name:"Christmas Island FLAG",unified:"1F1E8-1F1FD",non_qualified:null,sheet_x:1,sheet_y:34,short_names:["flag-cx"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cx,christmas,island"},grimacing:{name:"Grimacing Face",unified:"1F62C",non_qualified:null,sheet_x:31,sheet_y:16,short_names:["grimacing"],text:"",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grimacing,face,grimace,teeth"},crocodile:{name:"Crocodile",unified:"1F40A",non_qualified:null,sheet_x:12,sheet_y:40,short_names:["crocodile"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crocodile,animal,nature,reptile,lizard,alligator"},oden:{name:"Oden",unified:"1F362",non_qualified:null,sheet_x:7,sheet_y:36,short_names:["oden"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"oden,food,japanese"},"flag-cy":{name:"Cyprus FLAG",unified:"1F1E8-1F1FE",non_qualified:null,sheet_x:1,sheet_y:35,short_names:["flag-cy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cy,cyprus"},book:{name:"Open Book",unified:"1F4D6",non_qualified:null,sheet_x:26,sheet_y:13,short_names:["book","open_book"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"book,open"},turtle:{name:"Turtle",unified:"1F422",non_qualified:null,sheet_x:13,sheet_y:12,short_names:["turtle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"turtle,animal,slow,nature,tortoise"},art:{name:"Artist Palette",unified:"1F3A8",non_qualified:null,sheet_x:9,sheet_y:2,short_names:["art"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"art,artist,palette,design,paint,draw,colors"},sushi:{name:"Sushi",unified:"1F363",non_qualified:null,sheet_x:7,sheet_y:37,short_names:["sushi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sushi,food,fish,japanese,rice"},cold_sweat:{name:"Face with Open Mouth and Cold Sweat",unified:"1F630",non_qualified:null,sheet_x:31,sheet_y:20,short_names:["cold_sweat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cold,sweat,face,with,open,mouth,and,nervous"},cancer:{name:"Cancer",unified:"264B",non_qualified:null,sheet_x:47,sheet_y:47,short_names:["cancer"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cancer,sign,zodiac,purple-square,astrology"},fried_shrimp:{name:"Fried Shrimp",unified:"1F364",non_qualified:null,sheet_x:7,sheet_y:38,short_names:["fried_shrimp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fried,shrimp,food,animal,appetizer,summer"},slot_machine:{name:"Slot Machine",unified:"1F3B0",non_qualified:null,sheet_x:9,sheet_y:10,short_names:["slot_machine"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"slot,machine,bet,gamble,vegas,fruit machine,luck,casino"},scream:{name:"Face Screaming in Fear",unified:"1F631",non_qualified:null,sheet_x:31,sheet_y:21,short_names:["scream"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"scream,face,screaming,in,fear,munch,scared,omg"},green_book:{name:"Green Book",unified:"1F4D7",non_qualified:null,sheet_x:26,sheet_y:14,short_names:["green_book"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"green,book,read,library,knowledge,study"},leo:{name:"Leo",unified:"264C",non_qualified:null,sheet_x:47,sheet_y:48,short_names:["leo"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"leo,sign,purple-square,zodiac,astrology"},"flag-cz":{name:"Czechia FLAG",unified:"1F1E8-1F1FF",non_qualified:null,sheet_x:1,sheet_y:36,short_names:["flag-cz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,cz,czechia"},lizard:{name:"Lizard",unified:"1F98E",non_qualified:null,sheet_x:42,sheet_y:38,short_names:["lizard"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lizard,animal,nature,reptile"},virgo:{name:"Virgo",unified:"264D",non_qualified:null,sheet_x:47,sheet_y:49,short_names:["virgo"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"virgo,sign,zodiac,purple-square,astrology"},steam_locomotive:{name:"Steam Locomotive",unified:"1F682",non_qualified:null,sheet_x:34,sheet_y:10,short_names:["steam_locomotive"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"steam,locomotive,transportation,vehicle,train"},de:{name:"Germany FLAG",unified:"1F1E9-1F1EA",non_qualified:null,sheet_x:1,sheet_y:37,short_names:["de","flag-de"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"de,flag,germany,german,nation,country,banner"},flushed:{name:"Flushed Face",unified:"1F633",non_qualified:null,sheet_x:31,sheet_y:23,short_names:["flushed"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flushed,face,blush,shy,flattered"},blue_book:{name:"Blue Book",unified:"1F4D8",non_qualified:null,sheet_x:26,sheet_y:15,short_names:["blue_book"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blue,book,read,library,knowledge,learn,study"},snake:{name:"Snake",unified:"1F40D",non_qualified:null,sheet_x:12,sheet_y:43,short_names:["snake"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"snake,animal,evil,nature,hiss,python"},fish_cake:{name:"Fish Cake with Swirl Design",unified:"1F365",non_qualified:null,sheet_x:7,sheet_y:39,short_names:["fish_cake"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fish,cake,with,swirl,design,food,japan,sea,beach,narutomaki,pink,kamaboko,surimi,ramen"},railway_car:{name:"Railway Car",unified:"1F683",non_qualified:null,sheet_x:34,sheet_y:11,short_names:["railway_car"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"railway,car,transportation,vehicle"},dango:{name:"Dango",unified:"1F361",non_qualified:null,sheet_x:7,sheet_y:35,short_names:["dango"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dango,food,dessert,sweet,japanese,barbecue,meat"},orange_book:{name:"Orange Book",unified:"1F4D9",non_qualified:null,sheet_x:26,sheet_y:16,short_names:["orange_book"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"orange,book,read,library,knowledge,textbook,study"},libra:{name:"Libra",unified:"264E",non_qualified:null,sheet_x:47,sheet_y:50,short_names:["libra"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"libra,sign,purple-square,zodiac,astrology"},dragon_face:{name:"Dragon Face",unified:"1F432",non_qualified:null,sheet_x:13,sheet_y:28,short_names:["dragon_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dragon,face,animal,myth,nature,chinese,green"},"flag-dg":{name:"Diego Garcia FLAG",unified:"1F1E9-1F1EC",non_qualified:null,sheet_x:1,sheet_y:38,short_names:["flag-dg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,dg,diego,garcia"},zany_face:{name:"Grinning Face with One Large and One Small Eye",unified:"1F92A",non_qualified:null,sheet_x:38,sheet_y:50,short_names:["zany_face","grinning_face_with_one_large_and_one_small_eye"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"zany,face,grinning,with,one,large,and,small,eye"},books:{name:"Books",unified:"1F4DA",non_qualified:null,sheet_x:26,sheet_y:17,short_names:["books"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"books,literature,library,study"},dragon:{name:"Dragon",unified:"1F409",non_qualified:null,sheet_x:12,sheet_y:39,short_names:["dragon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dragon,animal,myth,nature,chinese,green"},"flag-dj":{name:"Djibouti FLAG",unified:"1F1E9-1F1EF",non_qualified:null,sheet_x:1,sheet_y:39,short_names:["flag-dj"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,dj,djibouti"},dumpling:{name:"Dumpling",unified:"1F95F",non_qualified:null,sheet_x:42,sheet_y:11,short_names:["dumpling"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"dumpling"},dizzy_face:{name:"Dizzy Face",unified:"1F635",non_qualified:null,sheet_x:31,sheet_y:25,short_names:["dizzy_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dizzy,face,spent,unconscious,xox"},scorpius:{name:"Scorpius",unified:"264F",non_qualified:null,sheet_x:47,sheet_y:51,short_names:["scorpius"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"scorpius,sign,zodiac,purple-square,astrology,scorpio"},bullettrain_side:{name:"High-Speed Train",unified:"1F684",non_qualified:null,sheet_x:34,sheet_y:12,short_names:["bullettrain_side"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bullettrain,side,high,speed,train,transportation,vehicle"},bullettrain_front:{name:"High-Speed Train with Bullet Nose",unified:"1F685",non_qualified:null,sheet_x:34,sheet_y:13,short_names:["bullettrain_front"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bullettrain,front,high,speed,train,with,bullet,nose,transportation,vehicle,fast,public,travel"},notebook:{name:"Notebook",unified:"1F4D3",non_qualified:null,sheet_x:26,sheet_y:10,short_names:["notebook"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"notebook,stationery,record,notes,paper,study"},fortune_cookie:{name:"Fortune Cookie",unified:"1F960",non_qualified:null,sheet_x:42,sheet_y:12,short_names:["fortune_cookie"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"fortune,cookie"},sagittarius:{name:"Sagittarius",unified:"2650",non_qualified:null,sheet_x:48,sheet_y:0,short_names:["sagittarius"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sagittarius,sign,zodiac,purple-square,astrology"},sauropod:{name:"Sauropod",unified:"1F995",non_qualified:null,sheet_x:42,sheet_y:45,short_names:["sauropod"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"sauropod"},"flag-dk":{name:"Denmark FLAG",unified:"1F1E9-1F1F0",non_qualified:null,sheet_x:1,sheet_y:40,short_names:["flag-dk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,dk,denmark"},rage:{name:"Pouting Face",unified:"1F621",non_qualified:null,sheet_x:31,sheet_y:5,short_names:["rage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rage,pouting,face,angry,mad,hate,despise"},ledger:{name:"Ledger",unified:"1F4D2",non_qualified:null,sheet_x:26,sheet_y:9,short_names:["ledger"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ledger,notes,paper"},angry:{name:"Angry Face",unified:"1F620",non_qualified:null,sheet_x:31,sheet_y:4,short_names:["angry"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[">:(",">:-("],search:"angry,face,mad,annoyed,frustrated,>:(,>:-("},"t-rex":{name:"T-Rex",unified:"1F996",non_qualified:null,sheet_x:42,sheet_y:46,short_names:["t-rex"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"t,rex"},capricorn:{name:"Capricorn",unified:"2651",non_qualified:null,sheet_x:48,sheet_y:1,short_names:["capricorn"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"capricorn,sign,zodiac,purple-square,astrology"},takeout_box:{name:"Takeout Box",unified:"1F961",non_qualified:null,sheet_x:42,sheet_y:13,short_names:["takeout_box"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"takeout,box"},"flag-dm":{name:"Dominica FLAG",unified:"1F1E9-1F1F2",non_qualified:null,sheet_x:1,sheet_y:41,short_names:["flag-dm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,dm,dominica"},"train2":{name:"Train",unified:"1F686",non_qualified:null,sheet_x:34,sheet_y:14,short_names:["train2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"train2,train,transportation,vehicle"},page_with_curl:{name:"Page with Curl",unified:"1F4C3",non_qualified:null,sheet_x:25,sheet_y:46,short_names:["page_with_curl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"page,with,curl,documents,office,paper"},whale:{name:"Spouting Whale",unified:"1F433",non_qualified:null,sheet_x:13,sheet_y:29,short_names:["whale"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"whale,spouting,animal,nature,sea,ocean"},face_with_symbols_on_mouth:{name:"Serious Face with Symbols Covering Mouth",unified:"1F92C",non_qualified:null,sheet_x:39,sheet_y:0,short_names:["face_with_symbols_on_mouth","serious_face_with_symbols_covering_mouth"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"face,with,symbols,on,mouth,serious,covering"},"flag-do":{name:"Dominican Republic FLAG",unified:"1F1E9-1F1F4",non_qualified:null,sheet_x:1,sheet_y:42,short_names:["flag-do"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,do,dominican,republic"},metro:{name:"Metro",unified:"1F687",non_qualified:null,sheet_x:34,sheet_y:15,short_names:["metro"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"metro,transportation,blue-square,mrt,underground,tube"},icecream:{name:"Soft Ice Cream",unified:"1F366",non_qualified:null,sheet_x:7,sheet_y:40,short_names:["icecream"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"icecream,soft,ice,cream,food,hot,dessert,summer"},aquarius:{name:"Aquarius",unified:"2652",non_qualified:null,sheet_x:48,sheet_y:2,short_names:["aquarius"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"aquarius,sign,purple-square,zodiac,astrology"},"flag-dz":{name:"Algeria FLAG",unified:"1F1E9-1F1FF",non_qualified:null,sheet_x:1,sheet_y:43,short_names:["flag-dz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,dz,algeria"},"whale2":{name:"Whale",unified:"1F40B",non_qualified:null,sheet_x:12,sheet_y:41,short_names:["whale2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"whale2,whale,animal,nature,sea,ocean"},mask:{name:"Face with Medical Mask",unified:"1F637",non_qualified:null,sheet_x:31,sheet_y:27,short_names:["mask"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mask,face,with,medical,sick,ill,disease"},scroll:{name:"Scroll",unified:"1F4DC",non_qualified:null,sheet_x:26,sheet_y:19,short_names:["scroll"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"scroll,documents,ancient,history,paper"},shaved_ice:{name:"Shaved Ice",unified:"1F367",non_qualified:null,sheet_x:7,sheet_y:41,short_names:["shaved_ice"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"shaved,ice,hot,dessert,summer"},pisces:{name:"Pisces",unified:"2653",non_qualified:null,sheet_x:48,sheet_y:3,short_names:["pisces"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pisces,purple-square,sign,zodiac,astrology"},light_rail:{name:"Light Rail",unified:"1F688",non_qualified:null,sheet_x:34,sheet_y:16,short_names:["light_rail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"light,rail,transportation,vehicle"},dolphin:{name:"Dolphin",unified:"1F42C",non_qualified:null,sheet_x:13,sheet_y:22,short_names:["dolphin","flipper"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dolphin,flipper,animal,nature,fish,sea,ocean,fins,beach"},face_with_thermometer:{name:"Face with Thermometer",unified:"1F912",non_qualified:null,sheet_x:37,sheet_y:26,short_names:["face_with_thermometer"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"face,with,thermometer,sick,temperature,cold,fever"},"flag-ea":{name:"Ceuta & Melilla FLAG",unified:"1F1EA-1F1E6",non_qualified:null,sheet_x:1,sheet_y:44,short_names:["flag-ea"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ea,ceuta,&,melilla"},ophiuchus:{name:"Ophiuchus",unified:"26CE",non_qualified:null,sheet_x:48,sheet_y:31,short_names:["ophiuchus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ophiuchus,sign,purple-square,constellation,astrology"},station:{name:"Station",unified:"1F689",non_qualified:null,sheet_x:34,sheet_y:17,short_names:["station"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"station,transportation,vehicle,public"},ice_cream:{name:"Ice Cream",unified:"1F368",non_qualified:null,sheet_x:7,sheet_y:42,short_names:["ice_cream"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ice,cream,food,hot,dessert"},page_facing_up:{name:"Page Facing Up",unified:"1F4C4",non_qualified:null,sheet_x:25,sheet_y:47,short_names:["page_facing_up"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"page,facing,up,documents,office,paper,information"},doughnut:{name:"Doughnut",unified:"1F369",non_qualified:null,sheet_x:7,sheet_y:43,short_names:["doughnut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"doughnut,food,dessert,snack,sweet,donut"},face_with_head_bandage:{name:"Face with Head-Bandage",unified:"1F915",non_qualified:null,sheet_x:37,sheet_y:29,short_names:["face_with_head_bandage"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"face,with,head,bandage,injured,clumsy,hurt"},fish:{name:"Fish",unified:"1F41F",non_qualified:null,sheet_x:13,sheet_y:9,short_names:["fish"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fish,animal,food,nature"},newspaper:{name:"Newspaper",unified:"1F4F0",non_qualified:null,sheet_x:26,sheet_y:39,short_names:["newspaper"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"newspaper,press,headline"},tram:{name:"Tram",unified:"1F68A",non_qualified:null,sheet_x:34,sheet_y:18,short_names:["tram"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tram,transportation,vehicle"},"flag-ec":{name:"Ecuador FLAG",unified:"1F1EA-1F1E8",non_qualified:null,sheet_x:1,sheet_y:45,short_names:["flag-ec"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ec,ecuador"},twisted_rightwards_arrows:{name:"Twisted Rightwards Arrows",unified:"1F500",non_qualified:null,sheet_x:27,sheet_y:2,short_names:["twisted_rightwards_arrows"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"twisted,rightwards,arrows,blue-square,shuffle,music,random"},"flag-ee":{name:"Estonia FLAG",unified:"1F1EA-1F1EA",non_qualified:null,sheet_x:1,sheet_y:46,short_names:["flag-ee"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ee,estonia"},cookie:{name:"Cookie",unified:"1F36A",non_qualified:null,sheet_x:7,sheet_y:44,short_names:["cookie"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cookie,food,snack,oreo,chocolate,sweet,dessert"},monorail:{name:"Monorail",unified:"1F69D",non_qualified:null,sheet_x:34,sheet_y:37,short_names:["monorail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"monorail,transportation,vehicle"},tropical_fish:{name:"Tropical Fish",unified:"1F420",non_qualified:null,sheet_x:13,sheet_y:10,short_names:["tropical_fish"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tropical,fish,animal,swim,ocean,beach,nemo"},rolled_up_newspaper:{name:"Rolled Up Newspaper",unified:"1F5DE-FE0F",non_qualified:"1F5DE",sheet_x:30,sheet_y:12,short_names:["rolled_up_newspaper"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"rolled,up,newspaper"},nauseated_face:{name:"Nauseated Face",unified:"1F922",non_qualified:null,sheet_x:38,sheet_y:25,short_names:["nauseated_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"nauseated,face,vomit,gross,green,sick,throw up,ill"},repeat:{name:"Clockwise Rightwards and Leftwards Open Circle Arrows",unified:"1F501",non_qualified:null,sheet_x:27,sheet_y:3,short_names:["repeat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"repeat,clockwise,rightwards,and,leftwards,open,circle,arrows,loop,record"},bookmark_tabs:{name:"Bookmark Tabs",unified:"1F4D1",non_qualified:null,sheet_x:26,sheet_y:8,short_names:["bookmark_tabs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bookmark,tabs,favorite,save,order,tidy"},repeat_one:{name:"Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay",unified:"1F502",non_qualified:null,sheet_x:27,sheet_y:4,short_names:["repeat_one"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"repeat,one,clockwise,rightwards,and,leftwards,open,circle,arrows,with,circled,overlay,blue-square,loop"},"flag-eg":{name:"Egypt FLAG",unified:"1F1EA-1F1EC",non_qualified:null,sheet_x:1,sheet_y:47,short_names:["flag-eg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,eg,egypt"},mountain_railway:{name:"Mountain Railway",unified:"1F69E",non_qualified:null,sheet_x:34,sheet_y:38,short_names:["mountain_railway"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mountain,railway,transportation,vehicle"},birthday:{name:"Birthday Cake",unified:"1F382",non_qualified:null,sheet_x:8,sheet_y:16,short_names:["birthday"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"birthday,cake,food,dessert"},blowfish:{name:"Blowfish",unified:"1F421",non_qualified:null,sheet_x:13,sheet_y:11,short_names:["blowfish"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blowfish,animal,nature,food,sea,ocean"},face_vomiting:{name:"Face with Open Mouth Vomiting",unified:"1F92E",non_qualified:null,sheet_x:39,sheet_y:2,short_names:["face_vomiting","face_with_open_mouth_vomiting"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"face,vomiting,with,open,mouth"},arrow_forward:{name:"Black Right-Pointing Triangle",unified:"25B6-FE0F",non_qualified:"25B6",sheet_x:47,sheet_y:10,short_names:["arrow_forward"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,forward,black,right,pointing,triangle,blue-square,direction,play"},bookmark:{name:"Bookmark",unified:"1F516",non_qualified:null,sheet_x:27,sheet_y:24,short_names:["bookmark"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bookmark,favorite,label,save"},"flag-eh":{name:"Western Sahara FLAG",unified:"1F1EA-1F1ED",non_qualified:null,sheet_x:1,sheet_y:48,short_names:["flag-eh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,eh,western,sahara"},shark:{name:"Shark",unified:"1F988",non_qualified:null,sheet_x:42,sheet_y:32,short_names:["shark"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shark,animal,nature,fish,sea,ocean,jaws,fins,beach"},train:{name:"Tram Car",unified:"1F68B",non_qualified:null,sheet_x:34,sheet_y:19,short_names:["train"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"train,tram,car,transportation,vehicle,carriage,public,travel"},sneezing_face:{name:"Sneezing Face",unified:"1F927",non_qualified:null,sheet_x:38,sheet_y:47,short_names:["sneezing_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"sneezing,face,gesundheit,sneeze,sick,allergy"},cake:{name:"Shortcake",unified:"1F370",non_qualified:null,sheet_x:7,sheet_y:50,short_names:["cake"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cake,shortcake,food,dessert"},bus:{name:"Bus",unified:"1F68C",non_qualified:null,sheet_x:34,sheet_y:20,short_names:["bus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bus,car,vehicle,transportation"},pie:{name:"Pie",unified:"1F967",non_qualified:null,sheet_x:42,sheet_y:19,short_names:["pie"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"pie"},innocent:{name:"Smiling Face with Halo",unified:"1F607",non_qualified:null,sheet_x:30,sheet_y:31,short_names:["innocent"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"innocent,smiling,face,with,halo,angel,heaven"},fast_forward:{name:"Black Right-Pointing Double Triangle",unified:"23E9",non_qualified:null,sheet_x:46,sheet_y:45,short_names:["fast_forward"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fast,forward,black,right,pointing,double,triangle,blue-square,play,speed,continue"},label:{name:"Label",unified:"1F3F7-FE0F",non_qualified:"1F3F7",sheet_x:12,sheet_y:21,short_names:["label"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"label,sale,tag"},octopus:{name:"Octopus",unified:"1F419",non_qualified:null,sheet_x:13,sheet_y:3,short_names:["octopus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"octopus,animal,creature,ocean,sea,nature,beach"},"flag-er":{name:"Eritrea FLAG",unified:"1F1EA-1F1F7",non_qualified:null,sheet_x:1,sheet_y:49,short_names:["flag-er"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,er,eritrea"},black_right_pointing_double_triangle_with_vertical_bar:{name:"Black Right Pointing Double Triangle with Vertical Bar",unified:"23ED-FE0F",non_qualified:"23ED",sheet_x:46,sheet_y:49,short_names:["black_right_pointing_double_triangle_with_vertical_bar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"black,right,pointing,double,triangle,with,vertical,bar"},chocolate_bar:{name:"Chocolate Bar",unified:"1F36B",non_qualified:null,sheet_x:7,sheet_y:45,short_names:["chocolate_bar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chocolate,bar,food,snack,dessert,sweet"},oncoming_bus:{name:"Oncoming Bus",unified:"1F68D",non_qualified:null,sheet_x:34,sheet_y:21,short_names:["oncoming_bus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"oncoming,bus,vehicle,transportation"},shell:{name:"Spiral Shell",unified:"1F41A",non_qualified:null,sheet_x:13,sheet_y:4,short_names:["shell"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"shell,spiral,nature,sea,beach"},face_with_cowboy_hat:{name:"Face with Cowboy Hat",unified:"1F920",non_qualified:null,sheet_x:38,sheet_y:23,short_names:["face_with_cowboy_hat"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"face,with,cowboy,hat"},moneybag:{name:"Money Bag",unified:"1F4B0",non_qualified:null,sheet_x:25,sheet_y:27,short_names:["moneybag"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"moneybag,money,bag,dollar,payment,coins,sale"},es:{name:"Spain FLAG",unified:"1F1EA-1F1F8",non_qualified:null,sheet_x:1,sheet_y:50,short_names:["es","flag-es"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"es,flag,spain,nation,country,banner"},crab:{name:"Crab",unified:"1F980",non_qualified:null,sheet_x:42,sheet_y:24,short_names:["crab"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"crab,animal,crustacean"},yen:{name:"Banknote with Yen Sign",unified:"1F4B4",non_qualified:null,sheet_x:25,sheet_y:31,short_names:["yen"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"yen,banknote,with,sign,money,sales,japanese,dollar,currency"},"flag-et":{name:"Ethiopia FLAG",unified:"1F1EA-1F1F9",non_qualified:null,sheet_x:1,sheet_y:51,short_names:["flag-et"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,et,ethiopia"},clown_face:{name:"Clown Face",unified:"1F921",non_qualified:null,sheet_x:38,sheet_y:24,short_names:["clown_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"clown,face"},black_right_pointing_triangle_with_double_vertical_bar:{name:"Black Right Pointing Triangle with Double Vertical Bar",unified:"23EF-FE0F",non_qualified:"23EF",sheet_x:46,sheet_y:51,short_names:["black_right_pointing_triangle_with_double_vertical_bar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"black,right,pointing,triangle,with,double,vertical,bar"},trolleybus:{name:"Trolleybus",unified:"1F68E",non_qualified:null,sheet_x:34,sheet_y:22,short_names:["trolleybus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"trolleybus,bart,transportation,vehicle"},candy:{name:"Candy",unified:"1F36C",non_qualified:null,sheet_x:7,sheet_y:46,short_names:["candy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"candy,snack,dessert,sweet,lolly"},lying_face:{name:"Lying Face",unified:"1F925",non_qualified:null,sheet_x:38,sheet_y:28,short_names:["lying_face"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"lying,face,lie,pinocchio"},arrow_backward:{name:"Black Left-Pointing Triangle",unified:"25C0-FE0F",non_qualified:"25C0",sheet_x:47,sheet_y:11,short_names:["arrow_backward"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"arrow,backward,black,left,pointing,triangle,blue-square,direction"},dollar:{name:"Banknote with Dollar Sign",unified:"1F4B5",non_qualified:null,sheet_x:25,sheet_y:32,short_names:["dollar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dollar,banknote,with,sign,money,sales,bill,currency"},shrimp:{name:"Shrimp",unified:"1F990",non_qualified:null,sheet_x:42,sheet_y:40,short_names:["shrimp"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shrimp,animal,ocean,nature,seafood"},minibus:{name:"Minibus",unified:"1F690",non_qualified:null,sheet_x:34,sheet_y:24,short_names:["minibus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"minibus,vehicle,car,transportation"},"flag-eu":{name:"European Union FLAG",unified:"1F1EA-1F1FA",non_qualified:null,sheet_x:2,sheet_y:0,short_names:["flag-eu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,eu,european,union"},lollipop:{name:"Lollipop",unified:"1F36D",non_qualified:null,sheet_x:7,sheet_y:47,short_names:["lollipop"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lollipop,food,snack,candy,sweet"},squid:{name:"Squid",unified:"1F991",non_qualified:null,sheet_x:42,sheet_y:41,short_names:["squid"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"squid,animal,nature,ocean,sea"},euro:{name:"Banknote with Euro Sign",unified:"1F4B6",non_qualified:null,sheet_x:25,sheet_y:33,short_names:["euro"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"euro,banknote,with,sign,money,sales,dollar,currency"},"flag-fi":{name:"Finland FLAG",unified:"1F1EB-1F1EE",non_qualified:null,sheet_x:2,sheet_y:1,short_names:["flag-fi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fi,finland"},ambulance:{name:"Ambulance",unified:"1F691",non_qualified:null,sheet_x:34,sheet_y:25,short_names:["ambulance"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ambulance,health,911,hospital"},custard:{name:"Custard",unified:"1F36E",non_qualified:null,sheet_x:7,sheet_y:48,short_names:["custard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"custard,dessert,food"},shushing_face:{name:"Face with Finger Covering Closed Lips",unified:"1F92B",non_qualified:null,sheet_x:38,sheet_y:51,short_names:["shushing_face","face_with_finger_covering_closed_lips"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"shushing,face,with,finger,covering,closed,lips"},rewind:{name:"Black Left-Pointing Double Triangle",unified:"23EA",non_qualified:null,sheet_x:46,sheet_y:46,short_names:["rewind"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rewind,black,left,pointing,double,triangle,play,blue-square"},black_left_pointing_double_triangle_with_vertical_bar:{name:"Black Left Pointing Double Triangle with Vertical Bar",unified:"23EE-FE0F",non_qualified:"23EE",sheet_x:46,sheet_y:50,short_names:["black_left_pointing_double_triangle_with_vertical_bar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"black,left,pointing,double,triangle,with,vertical,bar"},face_with_hand_over_mouth:{name:"Smiling Face with Smiling Eyes and Hand Covering Mouth",unified:"1F92D",non_qualified:null,sheet_x:39,sheet_y:1,short_names:["face_with_hand_over_mouth","smiling_face_with_smiling_eyes_and_hand_covering_mouth"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"face,with,hand,over,mouth,smiling,eyes,and,covering"},"flag-fj":{name:"Fiji FLAG",unified:"1F1EB-1F1EF",non_qualified:null,sheet_x:2,sheet_y:2,short_names:["flag-fj"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fj,fiji"},honey_pot:{name:"Honey Pot",unified:"1F36F",non_qualified:null,sheet_x:7,sheet_y:49,short_names:["honey_pot"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"honey,pot,bees,sweet,kitchen"},snail:{name:"Snail",unified:"1F40C",non_qualified:null,sheet_x:12,sheet_y:42,short_names:["snail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"snail,slow,animal,shell"},pound:{name:"Banknote with Pound Sign",unified:"1F4B7",non_qualified:null,sheet_x:25,sheet_y:34,short_names:["pound"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pound,banknote,with,sign,british,sterling,money,sales,bills,uk,england,currency"},fire_engine:{name:"Fire Engine",unified:"1F692",non_qualified:null,sheet_x:34,sheet_y:26,short_names:["fire_engine"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fire,engine,transportation,cars,vehicle"},baby_bottle:{name:"Baby Bottle",unified:"1F37C",non_qualified:null,sheet_x:8,sheet_y:10,short_names:["baby_bottle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"baby,bottle,food,container,milk"},"flag-fk":{name:"Falkland Islands FLAG",unified:"1F1EB-1F1F0",non_qualified:null,sheet_x:2,sheet_y:3,short_names:["flag-fk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fk,falkland,islands"},butterfly:{name:"Butterfly",unified:"1F98B",non_qualified:null,sheet_x:42,sheet_y:35,short_names:["butterfly"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"butterfly,animal,insect,nature,caterpillar"},money_with_wings:{name:"Money with Wings",unified:"1F4B8",non_qualified:null,sheet_x:25,sheet_y:35,short_names:["money_with_wings"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"money,with,wings,dollar,bills,payment,sale"},face_with_monocle:{name:"Face with Monocle",unified:"1F9D0",non_qualified:null,sheet_x:42,sheet_y:49,short_names:["face_with_monocle"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"face,with,monocle"},police_car:{name:"Police Car",unified:"1F693",non_qualified:null,sheet_x:34,sheet_y:27,short_names:["police_car"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"police,car,vehicle,cars,transportation,law,legal,enforcement"},arrow_up_small:{name:"Up-Pointing Small Red Triangle",unified:"1F53C",non_qualified:null,sheet_x:28,sheet_y:10,short_names:["arrow_up_small"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,up,small,pointing,red,triangle,blue-square,direction,point,forward,top"},"flag-fm":{name:"Micronesia FLAG",unified:"1F1EB-1F1F2",non_qualified:null,sheet_x:2,sheet_y:4,short_names:["flag-fm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fm,micronesia"},glass_of_milk:{name:"Glass of Milk",unified:"1F95B",non_qualified:null,sheet_x:42,sheet_y:7,short_names:["glass_of_milk"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"glass,of,milk"},credit_card:{name:"Credit Card",unified:"1F4B3",non_qualified:null,sheet_x:25,sheet_y:30,short_names:["credit_card"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"credit,card,money,sales,dollar,bill,payment,shopping"},oncoming_police_car:{name:"Oncoming Police Car",unified:"1F694",non_qualified:null,sheet_x:34,sheet_y:28,short_names:["oncoming_police_car"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"oncoming,police,car,vehicle,law,legal,enforcement,911"},bug:{name:"Bug",unified:"1F41B",non_qualified:null,sheet_x:13,sheet_y:5,short_names:["bug"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bug,animal,insect,nature,worm"},nerd_face:{name:"Nerd Face",unified:"1F913",non_qualified:null,sheet_x:37,sheet_y:27,short_names:["nerd_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"nerd,face,nerdy,geek,dork"},arrow_double_up:{name:"Black Up-Pointing Double Triangle",unified:"23EB",non_qualified:null,sheet_x:46,sheet_y:47,short_names:["arrow_double_up"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,double,up,black,pointing,triangle,blue-square,direction,top"},chart:{name:"Chart with Upwards Trend and Yen Sign",unified:"1F4B9",non_qualified:null,sheet_x:25,sheet_y:36,short_names:["chart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chart,with,upwards,trend,and,yen,sign,green-square,graph,presentation,stats"},"flag-fo":{name:"Faroe Islands FLAG",unified:"1F1EB-1F1F4",non_qualified:null,sheet_x:2,sheet_y:5,short_names:["flag-fo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,fo,faroe,islands"},ant:{name:"Ant",unified:"1F41C",non_qualified:null,sheet_x:13,sheet_y:6,short_names:["ant"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ant,animal,insect,nature,bug"},arrow_down_small:{name:"Down-Pointing Small Red Triangle",unified:"1F53D",non_qualified:null,sheet_x:28,sheet_y:11,short_names:["arrow_down_small"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,down,small,pointing,red,triangle,blue-square,direction,bottom"},smiling_imp:{name:"Smiling Face with Horns",unified:"1F608",non_qualified:null,sheet_x:30,sheet_y:32,short_names:["smiling_imp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smiling,imp,face,with,horns,devil"},taxi:{name:"Taxi",unified:"1F695",non_qualified:null,sheet_x:34,sheet_y:29,short_names:["taxi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"taxi,uber,vehicle,cars,transportation"},coffee:{name:"Hot Beverage",unified:"2615",non_qualified:null,sheet_x:47,sheet_y:24,short_names:["coffee"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"coffee,hot,beverage,caffeine,latte,espresso"},fr:{name:"France FLAG",unified:"1F1EB-1F1F7",non_qualified:null,sheet_x:2,sheet_y:6,short_names:["fr","flag-fr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fr,flag,france,banner,nation,french,country"},oncoming_taxi:{name:"Oncoming Taxi",unified:"1F696",non_qualified:null,sheet_x:34,sheet_y:30,short_names:["oncoming_taxi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"oncoming,taxi,vehicle,cars,uber"},arrow_double_down:{name:"Black Down-Pointing Double Triangle",unified:"23EC",non_qualified:null,sheet_x:46,sheet_y:48,short_names:["arrow_double_down"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"arrow,double,down,black,pointing,triangle,blue-square,direction,bottom"},imp:{name:"Imp",unified:"1F47F",non_qualified:null,sheet_x:22,sheet_y:51,short_names:["imp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"imp,devil,angry,horns"},currency_exchange:{name:"Currency Exchange",unified:"1F4B1",non_qualified:null,sheet_x:25,sheet_y:28,short_names:["currency_exchange"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"currency,exchange,money,sales,dollar,travel"},tea:{name:"Teacup Without Handle",unified:"1F375",non_qualified:null,sheet_x:8,sheet_y:3,short_names:["tea"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tea,teacup,without,handle,drink,bowl,breakfast,green,british"},bee:{name:"Honeybee",unified:"1F41D",non_qualified:null,sheet_x:13,sheet_y:7,short_names:["bee","honeybee"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bee,honeybee"},heavy_dollar_sign:{name:"Heavy Dollar Sign",unified:"1F4B2",non_qualified:null,sheet_x:25,sheet_y:29,short_names:["heavy_dollar_sign"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heavy,dollar,sign,money,sales,payment,currency,buck"},car:{name:"Automobile",unified:"1F697",non_qualified:null,sheet_x:34,sheet_y:31,short_names:["car","red_car"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"car,red,automobile"},sake:{name:"Sake Bottle and Cup",unified:"1F376",non_qualified:null,sheet_x:8,sheet_y:4,short_names:["sake"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sake,bottle,and,cup,wine,drink,drunk,beverage,japanese,alcohol,booze"},"flag-ga":{name:"Gabon FLAG",unified:"1F1EC-1F1E6",non_qualified:null,sheet_x:2,sheet_y:7,short_names:["flag-ga"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ga,gabon"},beetle:{name:"Lady Beetle",unified:"1F41E",non_qualified:null,sheet_x:13,sheet_y:8,short_names:["beetle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"beetle,lady,animal,insect,nature,ladybug"},japanese_ogre:{name:"Japanese Ogre",unified:"1F479",non_qualified:null,sheet_x:22,sheet_y:40,short_names:["japanese_ogre"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"japanese,ogre,monster,red,mask,halloween,scary,creepy,devil,demon"},double_vertical_bar:{name:"Double Vertical Bar",unified:"23F8-FE0F",non_qualified:"23F8",sheet_x:47,sheet_y:4,short_names:["double_vertical_bar"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"double,vertical,bar"},champagne:{name:"Bottle with Popping Cork",unified:"1F37E",non_qualified:null,sheet_x:8,sheet_y:12,short_names:["champagne"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"champagne,bottle,with,popping,cork,drink,wine,celebration"},japanese_goblin:{name:"Japanese Goblin",unified:"1F47A",non_qualified:null,sheet_x:22,sheet_y:41,short_names:["japanese_goblin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"japanese,goblin,red,evil,mask,monster,scary,creepy"},black_square_for_stop:{name:"Black Square for Stop",unified:"23F9-FE0F",non_qualified:"23F9",sheet_x:47,sheet_y:5,short_names:["black_square_for_stop"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"black,square,for,stop"},oncoming_automobile:{name:"Oncoming Automobile",unified:"1F698",non_qualified:null,sheet_x:34,sheet_y:32,short_names:["oncoming_automobile"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"oncoming,automobile,car,vehicle,transportation"},email:{name:"Envelope",unified:"2709-FE0F",non_qualified:"2709",sheet_x:49,sheet_y:17,short_names:["email","envelope"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"email,envelope,letter,postal,inbox,communication"},cricket:{name:"Cricket",unified:"1F997",non_qualified:null,sheet_x:42,sheet_y:47,short_names:["cricket"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"cricket,sports"},gb:{name:"United Kingdom FLAG",unified:"1F1EC-1F1E7",non_qualified:null,sheet_x:2,sheet_y:8,short_names:["gb","uk","flag-gb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gb,uk,flag,united,kingdom"},black_circle_for_record:{name:"Black Circle for Record",unified:"23FA-FE0F",non_qualified:"23FA",sheet_x:47,sheet_y:6,short_names:["black_circle_for_record"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"black,circle,for,record"},"flag-gd":{name:"Grenada FLAG",unified:"1F1EC-1F1E9",non_qualified:null,sheet_x:2,sheet_y:9,short_names:["flag-gd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gd,grenada"},spider:{name:"Spider",unified:"1F577-FE0F",non_qualified:"1F577",sheet_x:29,sheet_y:18,short_names:["spider"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"spider,animal,arachnid"},blue_car:{name:"Recreational Vehicle",unified:"1F699",non_qualified:null,sheet_x:34,sheet_y:33,short_names:["blue_car"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blue,car,recreational,vehicle,transportation"},skull:{name:"Skull",unified:"1F480",non_qualified:null,sheet_x:23,sheet_y:0,short_names:["skull"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"skull,dead,skeleton,creepy,death"},"e-mail":{name:"E-Mail Symbol",unified:"1F4E7",non_qualified:null,sheet_x:26,sheet_y:30,short_names:["e-mail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"e,mail,symbol,communication,inbox"},wine_glass:{name:"Wine Glass",unified:"1F377",non_qualified:null,sheet_x:8,sheet_y:5,short_names:["wine_glass"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wine,glass,drink,beverage,drunk,alcohol,booze"},spider_web:{name:"Spider Web",unified:"1F578-FE0F",non_qualified:"1F578",sheet_x:29,sheet_y:19,short_names:["spider_web"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"spider,web,animal,insect,arachnid,silk"},cocktail:{name:"Cocktail Glass",unified:"1F378",non_qualified:null,sheet_x:8,sheet_y:6,short_names:["cocktail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cocktail,glass,drink,drunk,alcohol,beverage,booze,mojito"},skull_and_crossbones:{name:"Skull and Crossbones",unified:"2620-FE0F",non_qualified:"2620",sheet_x:47,sheet_y:32,short_names:["skull_and_crossbones"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"skull,and,crossbones,poison,danger,deadly,scary,death,pirate,evil"},"flag-ge":{name:"Georgia FLAG",unified:"1F1EC-1F1EA",non_qualified:null,sheet_x:2,sheet_y:10,short_names:["flag-ge"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ge,georgia"},eject:{name:"Eject",unified:"23CF-FE0F",non_qualified:"23CF",sheet_x:46,sheet_y:44,short_names:["eject"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"eject"},truck:{name:"Delivery Truck",unified:"1F69A",non_qualified:null,sheet_x:34,sheet_y:34,short_names:["truck"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"truck,delivery,cars,transportation"},incoming_envelope:{name:"Incoming Envelope",unified:"1F4E8",non_qualified:null,sheet_x:26,sheet_y:31,short_names:["incoming_envelope"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"incoming,envelope,email,inbox"},tropical_drink:{name:"Tropical Drink",unified:"1F379",non_qualified:null,sheet_x:8,sheet_y:7,short_names:["tropical_drink"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tropical,drink,beverage,cocktail,summer,beach,alcohol,booze,mojito"},scorpion:{name:"Scorpion",unified:"1F982",non_qualified:null,sheet_x:42,sheet_y:26,short_names:["scorpion"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"scorpion,animal,arachnid"},cinema:{name:"Cinema",unified:"1F3A6",non_qualified:null,sheet_x:9,sheet_y:0,short_names:["cinema"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cinema,blue-square,record,film,movie,curtain,stage,theater"},articulated_lorry:{name:"Articulated Lorry",unified:"1F69B",non_qualified:null,sheet_x:34,sheet_y:35,short_names:["articulated_lorry"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"articulated,lorry,vehicle,cars,transportation,express"},envelope_with_arrow:{name:"Envelope with Downwards Arrow Above",unified:"1F4E9",non_qualified:null,sheet_x:26,sheet_y:32,short_names:["envelope_with_arrow"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"envelope,with,arrow,downwards,above,email,communication"},ghost:{name:"Ghost",unified:"1F47B",non_qualified:null,sheet_x:22,sheet_y:42,short_names:["ghost"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ghost,halloween,spooky,scary"},"flag-gf":{name:"French Guiana FLAG",unified:"1F1EC-1F1EB",non_qualified:null,sheet_x:2,sheet_y:11,short_names:["flag-gf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gf,french,guiana"},bouquet:{name:"Bouquet",unified:"1F490",non_qualified:null,sheet_x:24,sheet_y:42,short_names:["bouquet"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bouquet,flowers,nature,spring"},tractor:{name:"Tractor",unified:"1F69C",non_qualified:null,sheet_x:34,sheet_y:36,short_names:["tractor"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tractor,vehicle,car,farming,agriculture"},beer:{name:"Beer Mug",unified:"1F37A",non_qualified:null,sheet_x:8,sheet_y:8,short_names:["beer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"beer,mug,relax,beverage,drink,drunk,party,pub,summer,alcohol,booze"},outbox_tray:{name:"Outbox Tray",unified:"1F4E4",non_qualified:null,sheet_x:26,sheet_y:27,short_names:["outbox_tray"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"outbox,tray,inbox,email"},low_brightness:{name:"Low Brightness Symbol",unified:"1F505",non_qualified:null,sheet_x:27,sheet_y:7,short_names:["low_brightness"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"low,brightness,symbol,sun,afternoon,warm,summer"},alien:{name:"Extraterrestrial Alien",unified:"1F47D",non_qualified:null,sheet_x:22,sheet_y:49,short_names:["alien"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"alien,extraterrestrial,ufo,paul,weird,outer_space"},"flag-gg":{name:"Guernsey FLAG",unified:"1F1EC-1F1EC",non_qualified:null,sheet_x:2,sheet_y:12,short_names:["flag-gg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gg,guernsey"},cherry_blossom:{name:"Cherry Blossom",unified:"1F338",non_qualified:null,sheet_x:6,sheet_y:46,short_names:["cherry_blossom"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cherry,blossom,nature,plant,spring,flower"},inbox_tray:{name:"Inbox Tray",unified:"1F4E5",non_qualified:null,sheet_x:26,sheet_y:28,short_names:["inbox_tray"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"inbox,tray,email,documents"},"flag-gh":{name:"Ghana FLAG",unified:"1F1EC-1F1ED",non_qualified:null,sheet_x:2,sheet_y:13,short_names:["flag-gh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gh,ghana"},bike:{name:"Bicycle",unified:"1F6B2",non_qualified:null,sheet_x:35,sheet_y:23,short_names:["bike"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bike,bicycle,sports,exercise,hipster"},space_invader:{name:"Alien Monster",unified:"1F47E",non_qualified:null,sheet_x:22,sheet_y:50,short_names:["space_invader"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"space,invader,alien,monster,game,arcade,play"},beers:{name:"Clinking Beer Mugs",unified:"1F37B",non_qualified:null,sheet_x:8,sheet_y:9,short_names:["beers"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"beers,clinking,beer,mugs,relax,beverage,drink,drunk,party,pub,summer,alcohol,booze"},high_brightness:{name:"High Brightness Symbol",unified:"1F506",non_qualified:null,sheet_x:27,sheet_y:8,short_names:["high_brightness"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"high,brightness,symbol,sun,light"},package:{name:"Package",unified:"1F4E6",non_qualified:null,sheet_x:26,sheet_y:29,short_names:["package"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"package,mail,gift,cardboard,box,moving"},scooter:{name:"Scooter",unified:"1F6F4",non_qualified:null,sheet_x:37,sheet_y:19,short_names:["scooter"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"scooter"},white_flower:{name:"White Flower",unified:"1F4AE",non_qualified:null,sheet_x:25,sheet_y:25,short_names:["white_flower"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,flower,japanese,spring"},clinking_glasses:{name:"Clinking Glasses",unified:"1F942",non_qualified:null,sheet_x:41,sheet_y:38,short_names:["clinking_glasses"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"clinking,glasses,beverage,drink,party,alcohol,celebrate,cheers"},robot_face:{name:"Robot Face",unified:"1F916",non_qualified:null,sheet_x:37,sheet_y:30,short_names:["robot_face"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"robot,face"},signal_strength:{name:"Antenna with Bars",unified:"1F4F6",non_qualified:null,sheet_x:26,sheet_y:45,short_names:["signal_strength"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"signal,strength,antenna,with,bars,blue-square,reception,phone,internet,connection,wifi,bluetooth"},"flag-gi":{name:"Gibraltar FLAG",unified:"1F1EC-1F1EE",non_qualified:null,sheet_x:2,sheet_y:14,short_names:["flag-gi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gi,gibraltar"},"flag-gl":{name:"Greenland FLAG",unified:"1F1EC-1F1F1",non_qualified:null,sheet_x:2,sheet_y:15,short_names:["flag-gl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gl,greenland"},motor_scooter:{name:"Motor Scooter",unified:"1F6F5",non_qualified:null,sheet_x:37,sheet_y:20,short_names:["motor_scooter"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"motor,scooter,vehicle,vespa,sasha"},mailbox:{name:"Closed Mailbox with Raised Flag",unified:"1F4EB",non_qualified:null,sheet_x:26,sheet_y:34,short_names:["mailbox"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mailbox,closed,with,raised,flag,email,inbox,communication"},vibration_mode:{name:"Vibration Mode",unified:"1F4F3",non_qualified:null,sheet_x:26,sheet_y:42,short_names:["vibration_mode"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"vibration,mode,orange-square,phone"},hankey:{name:"Pile of Poo",unified:"1F4A9",non_qualified:null,sheet_x:25,sheet_y:15,short_names:["hankey","poop","shit"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hankey,poop,shit,pile,of,poo"},rosette:{name:"Rosette",unified:"1F3F5-FE0F",non_qualified:"1F3F5",sheet_x:12,sheet_y:20,short_names:["rosette"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"rosette,flower,decoration,military"},tumbler_glass:{name:"Tumbler Glass",unified:"1F943",non_qualified:null,sheet_x:41,sheet_y:39,short_names:["tumbler_glass"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"tumbler,glass,drink,beverage,drunk,alcohol,liquor,booze,bourbon,scotch,whisky,shot"},cup_with_straw:{name:"Cup with Straw",unified:"1F964",non_qualified:null,sheet_x:42,sheet_y:16,short_names:["cup_with_straw"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"cup,with,straw"},"flag-gm":{name:"Gambia FLAG",unified:"1F1EC-1F1F2",non_qualified:null,sheet_x:2,sheet_y:16,short_names:["flag-gm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gm,gambia"},mailbox_closed:{name:"Closed Mailbox with Lowered Flag",unified:"1F4EA",non_qualified:null,sheet_x:26,sheet_y:33,short_names:["mailbox_closed"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mailbox,closed,with,lowered,flag,email,communication,inbox"},mobile_phone_off:{name:"Mobile Phone off",unified:"1F4F4",non_qualified:null,sheet_x:26,sheet_y:43,short_names:["mobile_phone_off"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mobile,phone,off,mute,orange-square,silence,quiet"},busstop:{name:"Bus Stop",unified:"1F68F",non_qualified:null,sheet_x:34,sheet_y:23,short_names:["busstop"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"busstop,bus,stop,transportation,wait"},smiley_cat:{name:"Smiling Cat Face with Open Mouth",unified:"1F63A",non_qualified:null,sheet_x:31,sheet_y:30,short_names:["smiley_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smiley,cat,smiling,face,with,open,mouth,animal,cats,happy,smile"},rose:{name:"Rose",unified:"1F339",non_qualified:null,sheet_x:6,sheet_y:47,short_names:["rose"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rose,flowers,valentines,love,spring"},motorway:{name:"Motorway",unified:"1F6E3-FE0F",non_qualified:"1F6E3",sheet_x:37,sheet_y:11,short_names:["motorway"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"motorway,road,cupertino,interstate,highway"},smile_cat:{name:"Grinning Cat Face with Smiling Eyes",unified:"1F638",non_qualified:null,sheet_x:31,sheet_y:28,short_names:["smile_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smile,cat,grinning,face,with,smiling,eyes,animal,cats"},"flag-gn":{name:"Guinea FLAG",unified:"1F1EC-1F1F3",non_qualified:null,sheet_x:2,sheet_y:17,short_names:["flag-gn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gn,guinea"},wilted_flower:{name:"Wilted Flower",unified:"1F940",non_qualified:null,sheet_x:41,sheet_y:36,short_names:["wilted_flower"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"wilted,flower,plant,nature"},mailbox_with_mail:{name:"Open Mailbox with Raised Flag",unified:"1F4EC",non_qualified:null,sheet_x:26,sheet_y:35,short_names:["mailbox_with_mail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mailbox,with,mail,open,raised,flag,email,inbox,communication"},chopsticks:{name:"Chopsticks",unified:"1F962",non_qualified:null,sheet_x:42,sheet_y:14,short_names:["chopsticks"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"chopsticks"},female_sign:{name:"Female Sign",unified:"2640-FE0F",non_qualified:"2640",sheet_x:47,sheet_y:42,short_names:["female_sign"],text:"",added_in:"1.1",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"female,sign"},mailbox_with_no_mail:{name:"Open Mailbox with Lowered Flag",unified:"1F4ED",non_qualified:null,sheet_x:26,sheet_y:36,short_names:["mailbox_with_no_mail"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mailbox,with,no,mail,open,lowered,flag,email,inbox"},knife_fork_plate:{name:"Knife Fork Plate",unified:"1F37D-FE0F",non_qualified:"1F37D",sheet_x:8,sheet_y:11,short_names:["knife_fork_plate"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"knife,fork,plate"},hibiscus:{name:"Hibiscus",unified:"1F33A",non_qualified:null,sheet_x:6,sheet_y:48,short_names:["hibiscus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hibiscus,plant,vegetable,flowers,beach"},"flag-gp":{name:"Guadeloupe FLAG",unified:"1F1EC-1F1F5",non_qualified:null,sheet_x:2,sheet_y:18,short_names:["flag-gp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gp,guadeloupe"},railway_track:{name:"Railway Track",unified:"1F6E4-FE0F",non_qualified:"1F6E4",sheet_x:37,sheet_y:12,short_names:["railway_track"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"railway,track,train,transportation"},male_sign:{name:"Male Sign",unified:"2642-FE0F",non_qualified:"2642",sheet_x:47,sheet_y:43,short_names:["male_sign"],text:"",added_in:"1.1",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"male,sign"},joy_cat:{name:"Cat Face with Tears of Joy",unified:"1F639",non_qualified:null,sheet_x:31,sheet_y:29,short_names:["joy_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"joy,cat,face,with,tears,of,animal,cats,haha,happy"},fuelpump:{name:"Fuel Pump",unified:"26FD",non_qualified:null,sheet_x:49,sheet_y:13,short_names:["fuelpump"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fuelpump,fuel,pump,gas station,petroleum"},sunflower:{name:"Sunflower",unified:"1F33B",non_qualified:null,sheet_x:6,sheet_y:49,short_names:["sunflower"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sunflower,nature,plant,fall"},postbox:{name:"Postbox",unified:"1F4EE",non_qualified:null,sheet_x:26,sheet_y:37,short_names:["postbox"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"postbox,email,letter,envelope"},"flag-gq":{name:"Equatorial Guinea FLAG",unified:"1F1EC-1F1F6",non_qualified:null,sheet_x:2,sheet_y:19,short_names:["flag-gq"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gq,equatorial,guinea"},heart_eyes_cat:{name:"Smiling Cat Face with Heart-Shaped Eyes",unified:"1F63B",non_qualified:null,sheet_x:31,sheet_y:31,short_names:["heart_eyes_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heart,eyes,cat,smiling,face,with,shaped,animal,love,like,affection,cats,valentines"},fork_and_knife:{name:"Fork and Knife",unified:"1F374",non_qualified:null,sheet_x:8,sheet_y:2,short_names:["fork_and_knife"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fork,and,knife,cutlery,kitchen"},medical_symbol:{name:"Medical Symbol",unified:"2695-FE0F",non_qualified:"2695",sheet_x:48,sheet_y:14,short_names:["medical_symbol","staff_of_aesculapius"],text:"",added_in:"4.1",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"medical,symbol,staff,of,aesculapius"},recycle:{name:"Black Universal Recycling Symbol",unified:"267B-FE0F",non_qualified:"267B",sheet_x:48,sheet_y:9,short_names:["recycle"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"recycle,black,universal,recycling,symbol,arrow,environment,garbage,trash"},spoon:{name:"Spoon",unified:"1F944",non_qualified:null,sheet_x:41,sheet_y:40,short_names:["spoon"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"spoon,cutlery,kitchen,tableware"},blossom:{name:"Blossom",unified:"1F33C",non_qualified:null,sheet_x:6,sheet_y:50,short_names:["blossom"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blossom,nature,flowers,yellow"},rotating_light:{name:"Police Cars Revolving Light",unified:"1F6A8",non_qualified:null,sheet_x:35,sheet_y:13,short_names:["rotating_light"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rotating,light,police,cars,revolving,ambulance,911,emergency,alert,error,pinged,law,legal"},smirk_cat:{name:"Cat Face with Wry Smile",unified:"1F63C",non_qualified:null,sheet_x:31,sheet_y:32,short_names:["smirk_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smirk,cat,face,with,wry,smile,animal,cats"},ballot_box_with_ballot:{name:"Ballot Box with Ballot",unified:"1F5F3-FE0F",non_qualified:"1F5F3",sheet_x:30,sheet_y:17,short_names:["ballot_box_with_ballot"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"ballot,box,with"},"flag-gr":{name:"Greece FLAG",unified:"1F1EC-1F1F7",non_qualified:null,sheet_x:2,sheet_y:20,short_names:["flag-gr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gr,greece"},kissing_cat:{name:"Kissing Cat Face with Closed Eyes",unified:"1F63D",non_qualified:null,sheet_x:31,sheet_y:33,short_names:["kissing_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kissing,cat,face,with,closed,eyes,animal,cats,kiss"},"pencil2":{name:"Pencil",unified:"270F-FE0F",non_qualified:"270F",sheet_x:49,sheet_y:42,short_names:["pencil2"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"pencil2,pencil,stationery,write,paper,writing,school,study"},traffic_light:{name:"Horizontal Traffic Light",unified:"1F6A5",non_qualified:null,sheet_x:35,sheet_y:10,short_names:["traffic_light"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"traffic,light,horizontal,transportation,signal"},fleur_de_lis:{name:"Fleur De Lis",unified:"269C-FE0F",non_qualified:"269C",sheet_x:48,sheet_y:19,short_names:["fleur_de_lis"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"fleur,de,lis,decorative,scout"},tulip:{name:"Tulip",unified:"1F337",non_qualified:null,sheet_x:6,sheet_y:45,short_names:["tulip"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tulip,flowers,plant,nature,summer,spring"},hocho:{name:"Hocho",unified:"1F52A",non_qualified:null,sheet_x:27,sheet_y:44,short_names:["hocho","knife"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hocho,knife,blade,cutlery,kitchen,weapon"},"flag-gs":{name:"South Georgia & South Sandwich Islands FLAG",unified:"1F1EC-1F1F8",non_qualified:null,sheet_x:2,sheet_y:21,short_names:["flag-gs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gs,south,georgia,&,sandwich,islands"},seedling:{name:"Seedling",unified:"1F331",non_qualified:null,sheet_x:6,sheet_y:39,short_names:["seedling"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"seedling,plant,nature,grass,lawn,spring"},amphora:{name:"Amphora",unified:"1F3FA",non_qualified:null,sheet_x:12,sheet_y:24,short_names:["amphora"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"amphora,vase,jar"},scream_cat:{name:"Weary Cat Face",unified:"1F640",non_qualified:null,sheet_x:31,sheet_y:36,short_names:["scream_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"scream,cat,weary,face,animal,cats,munch,scared"},vertical_traffic_light:{name:"Vertical Traffic Light",unified:"1F6A6",non_qualified:null,sheet_x:35,sheet_y:11,short_names:["vertical_traffic_light"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"vertical,traffic,light,transportation,driving"},black_nib:{name:"Black Nib",unified:"2712-FE0F",non_qualified:"2712",sheet_x:49,sheet_y:43,short_names:["black_nib"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"black,nib,pen,stationery,writing,write"},"flag-gt":{name:"Guatemala FLAG",unified:"1F1EC-1F1F9",non_qualified:null,sheet_x:2,sheet_y:22,short_names:["flag-gt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gt,guatemala"},trident:{name:"Trident Emblem",unified:"1F531",non_qualified:null,sheet_x:27,sheet_y:51,short_names:["trident"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"trident,emblem,weapon,spear"},"flag-gu":{name:"Guam FLAG",unified:"1F1EC-1F1FA",non_qualified:null,sheet_x:2,sheet_y:23,short_names:["flag-gu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gu,guam"},name_badge:{name:"Name Badge",unified:"1F4DB",non_qualified:null,sheet_x:26,sheet_y:18,short_names:["name_badge"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"name,badge,fire,forbid"},construction:{name:"Construction Sign",unified:"1F6A7",non_qualified:null,sheet_x:35,sheet_y:12,short_names:["construction"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"construction,sign,wip,progress,caution,warning"},lower_left_fountain_pen:{name:"Lower Left Fountain Pen",unified:"1F58B-FE0F",non_qualified:"1F58B",sheet_x:29,sheet_y:29,short_names:["lower_left_fountain_pen"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"lower,left,fountain,pen"},evergreen_tree:{name:"Evergreen Tree",unified:"1F332",non_qualified:null,sheet_x:6,sheet_y:40,short_names:["evergreen_tree"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"evergreen,tree,plant,nature"},crying_cat_face:{name:"Crying Cat Face",unified:"1F63F",non_qualified:null,sheet_x:31,sheet_y:35,short_names:["crying_cat_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crying,cat,face,animal,tears,weep,sad,cats,upset,cry"},"flag-gw":{name:"Guinea-Bissau FLAG",unified:"1F1EC-1F1FC",non_qualified:null,sheet_x:2,sheet_y:24,short_names:["flag-gw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gw,guinea,bissau"},lower_left_ballpoint_pen:{name:"Lower Left Ballpoint Pen",unified:"1F58A-FE0F",non_qualified:"1F58A",sheet_x:29,sheet_y:28,short_names:["lower_left_ballpoint_pen"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"lower,left,ballpoint,pen"},pouting_cat:{name:"Pouting Cat Face",unified:"1F63E",non_qualified:null,sheet_x:31,sheet_y:34,short_names:["pouting_cat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pouting,cat,face,animal,cats"},deciduous_tree:{name:"Deciduous Tree",unified:"1F333",non_qualified:null,sheet_x:6,sheet_y:41,short_names:["deciduous_tree"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"deciduous,tree,plant,nature"},octagonal_sign:{name:"Octagonal Sign",unified:"1F6D1",non_qualified:null,sheet_x:37,sheet_y:6,short_names:["octagonal_sign"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"octagonal,sign"},beginner:{name:"Japanese Symbol for Beginner",unified:"1F530",non_qualified:null,sheet_x:27,sheet_y:50,short_names:["beginner"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"beginner,japanese,symbol,for,badge,shield"},"flag-gy":{name:"Guyana FLAG",unified:"1F1EC-1F1FE",non_qualified:null,sheet_x:2,sheet_y:25,short_names:["flag-gy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,gy,guyana"},lower_left_paintbrush:{name:"Lower Left Paintbrush",unified:"1F58C-FE0F",non_qualified:"1F58C",sheet_x:29,sheet_y:30,short_names:["lower_left_paintbrush"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"lower,left,paintbrush"},o:{name:"Heavy Large Circle",unified:"2B55",non_qualified:null,sheet_x:50,sheet_y:23,short_names:["o"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"o,heavy,large,circle,round"},palm_tree:{name:"Palm Tree",unified:"1F334",non_qualified:null,sheet_x:6,sheet_y:42,short_names:["palm_tree"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"palm,tree,plant,vegetable,nature,summer,beach,mojito,tropical"},anchor:{name:"Anchor",unified:"2693",non_qualified:null,sheet_x:48,sheet_y:12,short_names:["anchor"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"anchor,ship,ferry,sea,boat"},see_no_evil:{name:"See-No-Evil Monkey",unified:"1F648",non_qualified:null,sheet_x:32,sheet_y:43,short_names:["see_no_evil"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"see,no,evil,monkey,animal,nature,haha"},boat:{name:"Sailboat",unified:"26F5",non_qualified:null,sheet_x:48,sheet_y:43,short_names:["boat","sailboat"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"boat,sailboat"},white_check_mark:{name:"White Heavy Check Mark",unified:"2705",non_qualified:null,sheet_x:49,sheet_y:15,short_names:["white_check_mark"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,check,mark,heavy,green-square,ok,agree,vote,election,answer,tick"},"flag-hk":{name:"Hong Kong Sar China FLAG",unified:"1F1ED-1F1F0",non_qualified:null,sheet_x:2,sheet_y:26,short_names:["flag-hk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,hk,hong,kong,sar,china"},lower_left_crayon:{name:"Lower Left Crayon",unified:"1F58D-FE0F",non_qualified:"1F58D",sheet_x:29,sheet_y:31,short_names:["lower_left_crayon"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"lower,left,crayon"},hear_no_evil:{name:"Hear-No-Evil Monkey",unified:"1F649",non_qualified:null,sheet_x:32,sheet_y:44,short_names:["hear_no_evil"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hear,no,evil,monkey,animal,nature"},cactus:{name:"Cactus",unified:"1F335",non_qualified:null,sheet_x:6,sheet_y:43,short_names:["cactus"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cactus,vegetable,plant,nature"},ear_of_rice:{name:"Ear of Rice",unified:"1F33E",non_qualified:null,sheet_x:7,sheet_y:0,short_names:["ear_of_rice"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ear,of,rice,nature,plant"},speak_no_evil:{name:"Speak-No-Evil Monkey",unified:"1F64A",non_qualified:null,sheet_x:32,sheet_y:45,short_names:["speak_no_evil"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"speak,no,evil,monkey,animal,nature,omg"},"flag-hm":{name:"Heard & Mcdonald Islands FLAG",unified:"1F1ED-1F1F2",non_qualified:null,sheet_x:2,sheet_y:27,short_names:["flag-hm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,hm,heard,&,mcdonald,islands"},ballot_box_with_check:{name:"Ballot Box with Check",unified:"2611-FE0F",non_qualified:"2611",sheet_x:47,sheet_y:22,short_names:["ballot_box_with_check"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"ballot,box,with,check,ok,agree,confirm,black-square,vote,election,yes,tick"},canoe:{name:"Canoe",unified:"1F6F6",non_qualified:null,sheet_x:37,sheet_y:21,short_names:["canoe"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"canoe,boat,paddle,water,ship"},memo:{name:"Memo",unified:"1F4DD",non_qualified:null,sheet_x:26,sheet_y:20,short_names:["memo","pencil"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"memo,pencil,write,documents,stationery,paper,writing,legal,exam,quiz,test,study,compose"},herb:{name:"Herb",unified:"1F33F",non_qualified:null,sheet_x:7,sheet_y:1,short_names:["herb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"herb,vegetable,plant,medicine,weed,grass,lawn"},"flag-hn":{name:"Honduras FLAG",unified:"1F1ED-1F1F3",non_qualified:null,sheet_x:2,sheet_y:28,short_names:["flag-hn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,hn,honduras"},heavy_check_mark:{name:"Heavy Check Mark",unified:"2714-FE0F",non_qualified:"2714",sheet_x:49,sheet_y:44,short_names:["heavy_check_mark"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"heavy,check,mark,ok,nike,answer,yes,tick"},briefcase:{name:"Briefcase",unified:"1F4BC",non_qualified:null,sheet_x:25,sheet_y:39,short_names:["briefcase"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"briefcase,business,documents,work,law,legal,job,career"},speedboat:{name:"Speedboat",unified:"1F6A4",non_qualified:null,sheet_x:35,sheet_y:9,short_names:["speedboat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"speedboat,ship,transportation,vehicle,summer"},baby:{name:"Baby",unified:"1F476",non_qualified:null,sheet_x:22,sheet_y:10,short_names:["baby"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F476-1F3FB",non_qualified:null,image:"1f476-1f3fb.png",sheet_x:22,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F476-1F3FC",non_qualified:null,image:"1f476-1f3fc.png",sheet_x:22,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F476-1F3FD",non_qualified:null,image:"1f476-1f3fd.png",sheet_x:22,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F476-1F3FE",non_qualified:null,image:"1f476-1f3fe.png",sheet_x:22,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F476-1F3FF",non_qualified:null,image:"1f476-1f3ff.png",sheet_x:22,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"baby,child,boy,girl,toddler"},heavy_multiplication_x:{name:"Heavy Multiplication X",unified:"2716-FE0F",non_qualified:"2716",sheet_x:49,sheet_y:45,short_names:["heavy_multiplication_x"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"heavy,multiplication,x,math,calculation"},child:{name:"Child",unified:"1F9D2",non_qualified:null,sheet_x:43,sheet_y:4,short_names:["child"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D2-1F3FB",non_qualified:null,image:"1f9d2-1f3fb.png",sheet_x:43,sheet_y:5,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F9D2-1F3FC",non_qualified:null,image:"1f9d2-1f3fc.png",sheet_x:43,sheet_y:6,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F9D2-1F3FD",non_qualified:null,image:"1f9d2-1f3fd.png",sheet_x:43,sheet_y:7,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F9D2-1F3FE",non_qualified:null,image:"1f9d2-1f3fe.png",sheet_x:43,sheet_y:8,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F9D2-1F3FF",non_qualified:null,image:"1f9d2-1f3ff.png",sheet_x:43,sheet_y:9,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"child"},shamrock:{name:"Shamrock",unified:"2618-FE0F",non_qualified:"2618",sheet_x:47,sheet_y:25,short_names:["shamrock"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"shamrock,vegetable,plant,nature,irish,clover"},passenger_ship:{name:"Passenger Ship",unified:"1F6F3-FE0F",non_qualified:"1F6F3",sheet_x:37,sheet_y:18,short_names:["passenger_ship"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"passenger,ship,yacht,cruise,ferry"},"flag-hr":{name:"Croatia FLAG",unified:"1F1ED-1F1F7",non_qualified:null,sheet_x:2,sheet_y:29,short_names:["flag-hr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,hr,croatia"},file_folder:{name:"File Folder",unified:"1F4C1",non_qualified:null,sheet_x:25,sheet_y:44,short_names:["file_folder"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"file,folder,documents,business,office"},x:{name:"Cross Mark",unified:"274C",non_qualified:null,sheet_x:50,sheet_y:1,short_names:["x"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"x,cross,mark,no,delete,remove,cancel"},four_leaf_clover:{name:"Four Leaf Clover",unified:"1F340",non_qualified:null,sheet_x:7,sheet_y:2,short_names:["four_leaf_clover"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"four,leaf,clover,vegetable,plant,nature,lucky,irish"},open_file_folder:{name:"Open File Folder",unified:"1F4C2",non_qualified:null,sheet_x:25,sheet_y:45,short_names:["open_file_folder"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"open,file,folder,documents,load"},boy:{name:"Boy",unified:"1F466",non_qualified:null,sheet_x:15,sheet_y:42,short_names:["boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F466-1F3FB",non_qualified:null,image:"1f466-1f3fb.png",sheet_x:15,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F466-1F3FC",non_qualified:null,image:"1f466-1f3fc.png",sheet_x:15,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F466-1F3FD",non_qualified:null,image:"1f466-1f3fd.png",sheet_x:15,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F466-1F3FE",non_qualified:null,image:"1f466-1f3fe.png",sheet_x:15,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F466-1F3FF",non_qualified:null,image:"1f466-1f3ff.png",sheet_x:15,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"boy,man,male,guy,teenager"},ferry:{name:"Ferry",unified:"26F4-FE0F",non_qualified:"26F4",sheet_x:48,sheet_y:42,short_names:["ferry"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"ferry,boat,ship,yacht"},"flag-ht":{name:"Haiti FLAG",unified:"1F1ED-1F1F9",non_qualified:null,sheet_x:2,sheet_y:30,short_names:["flag-ht"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ht,haiti"},girl:{name:"Girl",unified:"1F467",non_qualified:null,sheet_x:15,sheet_y:48,short_names:["girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F467-1F3FB",non_qualified:null,image:"1f467-1f3fb.png",sheet_x:15,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F467-1F3FC",non_qualified:null,image:"1f467-1f3fc.png",sheet_x:15,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F467-1F3FD",non_qualified:null,image:"1f467-1f3fd.png",sheet_x:15,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F467-1F3FE",non_qualified:null,image:"1f467-1f3fe.png",sheet_x:16,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F467-1F3FF",non_qualified:null,image:"1f467-1f3ff.png",sheet_x:16,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"girl,female,woman,teenager"},negative_squared_cross_mark:{name:"Negative Squared Cross Mark",unified:"274E",non_qualified:null,sheet_x:50,sheet_y:2,short_names:["negative_squared_cross_mark"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"negative,squared,cross,mark,x,green-square,no,deny"},"flag-hu":{name:"Hungary FLAG",unified:"1F1ED-1F1FA",non_qualified:null,sheet_x:2,sheet_y:31,short_names:["flag-hu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,hu,hungary"},card_index_dividers:{name:"Card Index Dividers",unified:"1F5C2-FE0F",non_qualified:"1F5C2",sheet_x:30,sheet_y:4,short_names:["card_index_dividers"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"card,index,dividers,organizing,business,stationery"},maple_leaf:{name:"Maple Leaf",unified:"1F341",non_qualified:null,sheet_x:7,sheet_y:3,short_names:["maple_leaf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"maple,leaf,nature,plant,vegetable,ca,fall"},motor_boat:{name:"Motor Boat",unified:"1F6E5-FE0F",non_qualified:"1F6E5",sheet_x:37,sheet_y:13,short_names:["motor_boat"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"motor,boat,ship"},"flag-ic":{name:"Canary Islands FLAG",unified:"1F1EE-1F1E8",non_qualified:null,sheet_x:2,sheet_y:32,short_names:["flag-ic"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ic,canary,islands"},fallen_leaf:{name:"Fallen Leaf",unified:"1F342",non_qualified:null,sheet_x:7,sheet_y:4,short_names:["fallen_leaf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fallen,leaf,nature,plant,vegetable,leaves"},adult:{name:"Adult",unified:"1F9D1",non_qualified:null,sheet_x:42,sheet_y:50,short_names:["adult"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D1-1F3FB",non_qualified:null,image:"1f9d1-1f3fb.png",sheet_x:42,sheet_y:51,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F9D1-1F3FC",non_qualified:null,image:"1f9d1-1f3fc.png",sheet_x:43,sheet_y:0,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F9D1-1F3FD",non_qualified:null,image:"1f9d1-1f3fd.png",sheet_x:43,sheet_y:1,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F9D1-1F3FE",non_qualified:null,image:"1f9d1-1f3fe.png",sheet_x:43,sheet_y:2,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F9D1-1F3FF",non_qualified:null,image:"1f9d1-1f3ff.png",sheet_x:43,sheet_y:3,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"adult"},ship:{name:"Ship",unified:"1F6A2",non_qualified:null,sheet_x:34,sheet_y:42,short_names:["ship"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ship,transportation,titanic,deploy"},heavy_plus_sign:{name:"Heavy Plus Sign",unified:"2795",non_qualified:null,sheet_x:50,sheet_y:9,short_names:["heavy_plus_sign"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heavy,plus,sign,math,calculation,addition,more,increase"},date:{name:"Calendar",unified:"1F4C5",non_qualified:null,sheet_x:25,sheet_y:48,short_names:["date"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"date,calendar,schedule"},man:{name:"Man",unified:"1F468",non_qualified:null,sheet_x:18,sheet_y:11,short_names:["man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F468-1F3FB",non_qualified:null,image:"1f468-1f3fb.png",sheet_x:18,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F468-1F3FC",non_qualified:null,image:"1f468-1f3fc.png",sheet_x:18,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F468-1F3FD",non_qualified:null,image:"1f468-1f3fd.png",sheet_x:18,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F468-1F3FE",non_qualified:null,image:"1f468-1f3fe.png",sheet_x:18,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F468-1F3FF",non_qualified:null,image:"1f468-1f3ff.png",sheet_x:18,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"man,mustache,father,dad,guy,classy,sir,moustache"},"flag-id":{name:"Indonesia FLAG",unified:"1F1EE-1F1E9",non_qualified:null,sheet_x:2,sheet_y:33,short_names:["flag-id"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,id,indonesia"},leaves:{name:"Leaf Fluttering in Wind",unified:"1F343",non_qualified:null,sheet_x:7,sheet_y:5,short_names:["leaves"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"leaves,leaf,fluttering,in,wind,nature,plant,tree,vegetable,grass,lawn,spring"},heavy_minus_sign:{name:"Heavy Minus Sign",unified:"2796",non_qualified:null,sheet_x:50,sheet_y:10,short_names:["heavy_minus_sign"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heavy,minus,sign,math,calculation,subtract,less"},calendar:{name:"Tear-off Calendar",unified:"1F4C6",non_qualified:null,sheet_x:25,sheet_y:49,short_names:["calendar"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"calendar,tear,off,schedule,date,planning"},airplane:{name:"Airplane",unified:"2708-FE0F",non_qualified:"2708",sheet_x:49,sheet_y:16,short_names:["airplane"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"airplane,vehicle,transportation,flight,fly"},spiral_note_pad:{name:"Spiral Note Pad",unified:"1F5D2-FE0F",non_qualified:"1F5D2",sheet_x:30,sheet_y:8,short_names:["spiral_note_pad"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"spiral,note,pad"},heavy_division_sign:{name:"Heavy Division Sign",unified:"2797",non_qualified:null,sheet_x:50,sheet_y:11,short_names:["heavy_division_sign"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heavy,division,sign,divide,math,calculation"},small_airplane:{name:"Small Airplane",unified:"1F6E9-FE0F",non_qualified:"1F6E9",sheet_x:37,sheet_y:14,short_names:["small_airplane"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"small,airplane,flight,transportation,fly,vehicle"},woman:{name:"Woman",unified:"1F469",non_qualified:null,sheet_x:20,sheet_y:23,short_names:["woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F469-1F3FB",non_qualified:null,image:"1f469-1f3fb.png",sheet_x:20,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F469-1F3FC",non_qualified:null,image:"1f469-1f3fc.png",sheet_x:20,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F469-1F3FD",non_qualified:null,image:"1f469-1f3fd.png",sheet_x:20,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F469-1F3FE",non_qualified:null,image:"1f469-1f3fe.png",sheet_x:20,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F469-1F3FF",non_qualified:null,image:"1f469-1f3ff.png",sheet_x:20,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"woman,female,girls,lady"},"flag-ie":{name:"Ireland FLAG",unified:"1F1EE-1F1EA",non_qualified:null,sheet_x:2,sheet_y:34,short_names:["flag-ie"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ie,ireland"},curly_loop:{name:"Curly Loop",unified:"27B0",non_qualified:null,sheet_x:50,sheet_y:13,short_names:["curly_loop"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"curly,loop,scribble,draw,shape,squiggle"},"flag-il":{name:"Israel FLAG",unified:"1F1EE-1F1F1",non_qualified:null,sheet_x:2,sheet_y:35,short_names:["flag-il"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,il,israel"},airplane_departure:{name:"Airplane Departure",unified:"1F6EB",non_qualified:null,sheet_x:37,sheet_y:15,short_names:["airplane_departure"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"airplane,departure"},spiral_calendar_pad:{name:"Spiral Calendar Pad",unified:"1F5D3-FE0F",non_qualified:"1F5D3",sheet_x:30,sheet_y:9,short_names:["spiral_calendar_pad"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"spiral,calendar,pad"},older_adult:{name:"Older Adult",unified:"1F9D3",non_qualified:null,sheet_x:43,sheet_y:10,short_names:["older_adult"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D3-1F3FB",non_qualified:null,image:"1f9d3-1f3fb.png",sheet_x:43,sheet_y:11,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F9D3-1F3FC",non_qualified:null,image:"1f9d3-1f3fc.png",sheet_x:43,sheet_y:12,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F9D3-1F3FD",non_qualified:null,image:"1f9d3-1f3fd.png",sheet_x:43,sheet_y:13,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F9D3-1F3FE",non_qualified:null,image:"1f9d3-1f3fe.png",sheet_x:43,sheet_y:14,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F9D3-1F3FF",non_qualified:null,image:"1f9d3-1f3ff.png",sheet_x:43,sheet_y:15,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"older,adult"},airplane_arriving:{name:"Airplane Arriving",unified:"1F6EC",non_qualified:null,sheet_x:37,sheet_y:16,short_names:["airplane_arriving"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"airplane,arriving"},card_index:{name:"Card Index",unified:"1F4C7",non_qualified:null,sheet_x:25,sheet_y:50,short_names:["card_index"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"card,index,business,stationery"},loop:{name:"Double Curly Loop",unified:"27BF",non_qualified:null,sheet_x:50,sheet_y:14,short_names:["loop"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"loop,double,curly,tape,cassette"},older_man:{name:"Older Man",unified:"1F474",non_qualified:null,sheet_x:21,sheet_y:50,short_names:["older_man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F474-1F3FB",non_qualified:null,image:"1f474-1f3fb.png",sheet_x:21,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F474-1F3FC",non_qualified:null,image:"1f474-1f3fc.png",sheet_x:22,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F474-1F3FD",non_qualified:null,image:"1f474-1f3fd.png",sheet_x:22,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F474-1F3FE",non_qualified:null,image:"1f474-1f3fe.png",sheet_x:22,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F474-1F3FF",non_qualified:null,image:"1f474-1f3ff.png",sheet_x:22,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"older,man,human,male,men,old,elder,senior"},"flag-im":{name:"Isle of Man FLAG",unified:"1F1EE-1F1F2",non_qualified:null,sheet_x:2,sheet_y:36,short_names:["flag-im"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,im,isle,of,man"},"flag-in":{name:"India FLAG",unified:"1F1EE-1F1F3",non_qualified:null,sheet_x:2,sheet_y:37,short_names:["flag-in"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,in,india"},chart_with_upwards_trend:{name:"Chart with Upwards Trend",unified:"1F4C8",non_qualified:null,sheet_x:25,sheet_y:51,short_names:["chart_with_upwards_trend"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chart,with,upwards,trend,graph,presentation,stats,recovery,business,economics,money,sales,good,success"},part_alternation_mark:{name:"Part Alternation Mark",unified:"303D-FE0F",non_qualified:"303D",sheet_x:50,sheet_y:25,short_names:["part_alternation_mark"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"part,alternation,mark,graph,presentation,stats,business,economics,bad"},seat:{name:"Seat",unified:"1F4BA",non_qualified:null,sheet_x:25,sheet_y:37,short_names:["seat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"seat,sit,airplane,transport,bus,flight,fly"},older_woman:{name:"Older Woman",unified:"1F475",non_qualified:null,sheet_x:22,sheet_y:4,short_names:["older_woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F475-1F3FB",non_qualified:null,image:"1f475-1f3fb.png",sheet_x:22,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F475-1F3FC",non_qualified:null,image:"1f475-1f3fc.png",sheet_x:22,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F475-1F3FD",non_qualified:null,image:"1f475-1f3fd.png",sheet_x:22,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F475-1F3FE",non_qualified:null,image:"1f475-1f3fe.png",sheet_x:22,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F475-1F3FF",non_qualified:null,image:"1f475-1f3ff.png",sheet_x:22,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"older,woman,human,female,women,lady,old,elder,senior"},eight_spoked_asterisk:{name:"Eight Spoked Asterisk",unified:"2733-FE0F",non_qualified:"2733",sheet_x:49,sheet_y:49,short_names:["eight_spoked_asterisk"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"eight,spoked,asterisk,star,sparkle,green-square"},chart_with_downwards_trend:{name:"Chart with Downwards Trend",unified:"1F4C9",non_qualified:null,sheet_x:26,sheet_y:0,short_names:["chart_with_downwards_trend"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"chart,with,downwards,trend,graph,presentation,stats,recession,business,economics,money,sales,bad,failure"},"flag-io":{name:"British Indian Ocean Territory FLAG",unified:"1F1EE-1F1F4",non_qualified:null,sheet_x:2,sheet_y:38,short_names:["flag-io"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,io,british,indian,ocean,territory"},"male-doctor":{name:"Male Doctor",unified:"1F468-200D-2695-FE0F",non_qualified:"1F468-200D-2695",sheet_x:17,sheet_y:43,short_names:["male-doctor"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-2695-FE0F",image:"1f468-1f3fb-200d-2695-fe0f.png",sheet_x:17,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-2695-FE0F",image:"1f468-1f3fc-200d-2695-fe0f.png",sheet_x:17,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-2695-FE0F",image:"1f468-1f3fd-200d-2695-fe0f.png",sheet_x:17,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-2695-FE0F",image:"1f468-1f3fe-200d-2695-fe0f.png",sheet_x:17,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-2695-FE0F",image:"1f468-1f3ff-200d-2695-fe0f.png",sheet_x:17,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"male,doctor"},helicopter:{name:"Helicopter",unified:"1F681",non_qualified:null,sheet_x:34,sheet_y:9,short_names:["helicopter"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"helicopter,transportation,vehicle,fly"},"female-doctor":{name:"Female Doctor",unified:"1F469-200D-2695-FE0F",non_qualified:"1F469-200D-2695",sheet_x:20,sheet_y:1,short_names:["female-doctor"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-2695-FE0F",image:"1f469-1f3fb-200d-2695-fe0f.png",sheet_x:20,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-2695-FE0F",image:"1f469-1f3fc-200d-2695-fe0f.png",sheet_x:20,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-2695-FE0F",image:"1f469-1f3fd-200d-2695-fe0f.png",sheet_x:20,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-2695-FE0F",image:"1f469-1f3fe-200d-2695-fe0f.png",sheet_x:20,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-2695-FE0F",image:"1f469-1f3ff-200d-2695-fe0f.png",sheet_x:20,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,doctor"},suspension_railway:{name:"Suspension Railway",unified:"1F69F",non_qualified:null,sheet_x:34,sheet_y:39,short_names:["suspension_railway"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"suspension,railway,vehicle,transportation"},bar_chart:{name:"Bar Chart",unified:"1F4CA",non_qualified:null,sheet_x:26,sheet_y:1,short_names:["bar_chart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bar,chart,graph,presentation,stats"},"flag-iq":{name:"Iraq FLAG",unified:"1F1EE-1F1F6",non_qualified:null,sheet_x:2,sheet_y:39,short_names:["flag-iq"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,iq,iraq"},eight_pointed_black_star:{name:"Eight Pointed Black Star",unified:"2734-FE0F",non_qualified:"2734",sheet_x:49,sheet_y:50,short_names:["eight_pointed_black_star"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"eight,pointed,black,star,orange-square,shape,polygon"},mountain_cableway:{name:"Mountain Cableway",unified:"1F6A0",non_qualified:null,sheet_x:34,sheet_y:40,short_names:["mountain_cableway"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mountain,cableway,transportation,vehicle,ski"},"male-student":{name:"Male Student",unified:"1F468-200D-1F393",non_qualified:null,sheet_x:16,sheet_y:14,short_names:["male-student"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F393",image:"1f468-1f3fb-200d-1f393.png",sheet_x:16,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F393",image:"1f468-1f3fc-200d-1f393.png",sheet_x:16,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F393",image:"1f468-1f3fd-200d-1f393.png",sheet_x:16,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F393",image:"1f468-1f3fe-200d-1f393.png",sheet_x:16,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F393",image:"1f468-1f3ff-200d-1f393.png",sheet_x:16,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,student"},clipboard:{name:"Clipboard",unified:"1F4CB",non_qualified:null,sheet_x:26,sheet_y:2,short_names:["clipboard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clipboard,stationery,documents"},"flag-ir":{name:"Iran FLAG",unified:"1F1EE-1F1F7",non_qualified:null,sheet_x:2,sheet_y:40,short_names:["flag-ir"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ir,iran"},sparkle:{name:"Sparkle",unified:"2747-FE0F",non_qualified:"2747",sheet_x:50,sheet_y:0,short_names:["sparkle"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"sparkle,stars,green-square,awesome,good,fireworks"},"female-student":{name:"Female Student",unified:"1F469-200D-1F393",non_qualified:null,sheet_x:18,sheet_y:29,short_names:["female-student"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F393",image:"1f469-1f3fb-200d-1f393.png",sheet_x:18,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F393",image:"1f469-1f3fc-200d-1f393.png",sheet_x:18,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F393",image:"1f469-1f3fd-200d-1f393.png",sheet_x:18,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F393",image:"1f469-1f3fe-200d-1f393.png",sheet_x:18,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F393",image:"1f469-1f3ff-200d-1f393.png",sheet_x:18,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,student"},pushpin:{name:"Pushpin",unified:"1F4CC",non_qualified:null,sheet_x:26,sheet_y:3,short_names:["pushpin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pushpin,stationery,mark,here"},aerial_tramway:{name:"Aerial Tramway",unified:"1F6A1",non_qualified:null,sheet_x:34,sheet_y:41,short_names:["aerial_tramway"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"aerial,tramway,transportation,vehicle,ski"},"flag-is":{name:"Iceland FLAG",unified:"1F1EE-1F1F8",non_qualified:null,sheet_x:2,sheet_y:41,short_names:["flag-is"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,is,iceland"},bangbang:{name:"Double Exclamation Mark",unified:"203C-FE0F",non_qualified:"203C",sheet_x:46,sheet_y:29,short_names:["bangbang"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"bangbang,double,exclamation,mark,surprise"},interrobang:{name:"Exclamation Question Mark",unified:"2049-FE0F",non_qualified:"2049",sheet_x:46,sheet_y:30,short_names:["interrobang"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"interrobang,exclamation,question,mark,wat,punctuation,surprise"},satellite:{name:"Satellite",unified:"1F6F0-FE0F",non_qualified:"1F6F0",sheet_x:37,sheet_y:17,short_names:["satellite"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"satellite,communication,future,radio,space"},it:{name:"Italy FLAG",unified:"1F1EE-1F1F9",non_qualified:null,sheet_x:2,sheet_y:42,short_names:["it","flag-it"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"it,flag,italy,nation,country,banner"},"male-teacher":{name:"Male Teacher",unified:"1F468-200D-1F3EB",non_qualified:null,sheet_x:16,sheet_y:32,short_names:["male-teacher"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3EB",image:"1f468-1f3fb-200d-1f3eb.png",sheet_x:16,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3EB",image:"1f468-1f3fc-200d-1f3eb.png",sheet_x:16,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3EB",image:"1f468-1f3fd-200d-1f3eb.png",sheet_x:16,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3EB",image:"1f468-1f3fe-200d-1f3eb.png",sheet_x:16,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3EB",image:"1f468-1f3ff-200d-1f3eb.png",sheet_x:16,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,teacher"},round_pushpin:{name:"Round Pushpin",unified:"1F4CD",non_qualified:null,sheet_x:26,sheet_y:4,short_names:["round_pushpin"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"round,pushpin,stationery,location,map,here"},"flag-je":{name:"Jersey FLAG",unified:"1F1EF-1F1EA",non_qualified:null,sheet_x:2,sheet_y:43,short_names:["flag-je"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,je,jersey"},question:{name:"Black Question Mark Ornament",unified:"2753",non_qualified:null,sheet_x:50,sheet_y:3,short_names:["question"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"question,black,mark,ornament,doubt,confused"},rocket:{name:"Rocket",unified:"1F680",non_qualified:null,sheet_x:34,sheet_y:8,short_names:["rocket"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rocket,launch,ship,staffmode,nasa,outer space,outer_space,fly"},"female-teacher":{name:"Female Teacher",unified:"1F469-200D-1F3EB",non_qualified:null,sheet_x:18,sheet_y:47,short_names:["female-teacher"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3EB",image:"1f469-1f3fb-200d-1f3eb.png",sheet_x:18,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3EB",image:"1f469-1f3fc-200d-1f3eb.png",sheet_x:18,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3EB",image:"1f469-1f3fd-200d-1f3eb.png",sheet_x:18,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3EB",image:"1f469-1f3fe-200d-1f3eb.png",sheet_x:18,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3EB",image:"1f469-1f3ff-200d-1f3eb.png",sheet_x:19,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,teacher"},paperclip:{name:"Paperclip",unified:"1F4CE",non_qualified:null,sheet_x:26,sheet_y:5,short_names:["paperclip"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"paperclip,documents,stationery"},linked_paperclips:{name:"Linked Paperclips",unified:"1F587-FE0F",non_qualified:"1F587",sheet_x:29,sheet_y:27,short_names:["linked_paperclips"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"linked,paperclips"},flying_saucer:{name:"Flying Saucer",unified:"1F6F8",non_qualified:null,sheet_x:37,sheet_y:23,short_names:["flying_saucer"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"flying,saucer"},"male-judge":{name:"Male Judge",unified:"1F468-200D-2696-FE0F",non_qualified:"1F468-200D-2696",sheet_x:17,sheet_y:49,short_names:["male-judge"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-2696-FE0F",image:"1f468-1f3fb-200d-2696-fe0f.png",sheet_x:17,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-2696-FE0F",image:"1f468-1f3fc-200d-2696-fe0f.png",sheet_x:17,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-2696-FE0F",image:"1f468-1f3fd-200d-2696-fe0f.png",sheet_x:18,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-2696-FE0F",image:"1f468-1f3fe-200d-2696-fe0f.png",sheet_x:18,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-2696-FE0F",image:"1f468-1f3ff-200d-2696-fe0f.png",sheet_x:18,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"male,judge"},grey_question:{name:"White Question Mark Ornament",unified:"2754",non_qualified:null,sheet_x:50,sheet_y:4,short_names:["grey_question"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grey,question,white,mark,ornament,doubts,gray,huh,confused"},"flag-jm":{name:"Jamaica FLAG",unified:"1F1EF-1F1F2",non_qualified:null,sheet_x:2,sheet_y:44,short_names:["flag-jm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,jm,jamaica"},bellhop_bell:{name:"Bellhop Bell",unified:"1F6CE-FE0F",non_qualified:"1F6CE",sheet_x:37,sheet_y:3,short_names:["bellhop_bell"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"bellhop,bell,service"},straight_ruler:{name:"Straight Ruler",unified:"1F4CF",non_qualified:null,sheet_x:26,sheet_y:6,short_names:["straight_ruler"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"straight,ruler,stationery,calculate,length,math,school,drawing,architect,sketch"},"flag-jo":{name:"Jordan FLAG",unified:"1F1EF-1F1F4",non_qualified:null,sheet_x:2,sheet_y:45,short_names:["flag-jo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,jo,jordan"},"female-judge":{name:"Female Judge",unified:"1F469-200D-2696-FE0F",non_qualified:"1F469-200D-2696",sheet_x:20,sheet_y:7,short_names:["female-judge"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-2696-FE0F",image:"1f469-1f3fb-200d-2696-fe0f.png",sheet_x:20,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-2696-FE0F",image:"1f469-1f3fc-200d-2696-fe0f.png",sheet_x:20,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-2696-FE0F",image:"1f469-1f3fd-200d-2696-fe0f.png",sheet_x:20,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-2696-FE0F",image:"1f469-1f3fe-200d-2696-fe0f.png",sheet_x:20,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-2696-FE0F",image:"1f469-1f3ff-200d-2696-fe0f.png",sheet_x:20,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,judge"},grey_exclamation:{name:"White Exclamation Mark Ornament",unified:"2755",non_qualified:null,sheet_x:50,sheet_y:5,short_names:["grey_exclamation"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"grey,exclamation,white,mark,ornament,surprise,punctuation,gray,wow,warning"},door:{name:"Door",unified:"1F6AA",non_qualified:null,sheet_x:35,sheet_y:15,short_names:["door"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"door,house,entry,exit"},"male-farmer":{name:"Male Farmer",unified:"1F468-200D-1F33E",non_qualified:null,sheet_x:16,sheet_y:2,short_names:["male-farmer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F33E",image:"1f468-1f3fb-200d-1f33e.png",sheet_x:16,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F33E",image:"1f468-1f3fc-200d-1f33e.png",sheet_x:16,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F33E",image:"1f468-1f3fd-200d-1f33e.png",sheet_x:16,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F33E",image:"1f468-1f3fe-200d-1f33e.png",sheet_x:16,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F33E",image:"1f468-1f3ff-200d-1f33e.png",sheet_x:16,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,farmer"},jp:{name:"Japan FLAG",unified:"1F1EF-1F1F5",non_qualified:null,sheet_x:2,sheet_y:46,short_names:["jp","flag-jp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"jp,flag,japan,japanese,nation,country,banner"},triangular_ruler:{name:"Triangular Ruler",unified:"1F4D0",non_qualified:null,sheet_x:26,sheet_y:7,short_names:["triangular_ruler"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"triangular,ruler,stationery,math,architect,sketch"},exclamation:{name:"Heavy Exclamation Mark Symbol",unified:"2757",non_qualified:null,sheet_x:50,sheet_y:6,short_names:["exclamation","heavy_exclamation_mark"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"exclamation,heavy,mark,symbol,heavy_exclamation_mark,danger,surprise,punctuation,wow,warning"},bed:{name:"Bed",unified:"1F6CF-FE0F",non_qualified:"1F6CF",sheet_x:37,sheet_y:4,short_names:["bed"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"bed,sleep,rest"},"female-farmer":{name:"Female Farmer",unified:"1F469-200D-1F33E",non_qualified:null,sheet_x:18,sheet_y:17,short_names:["female-farmer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F33E",image:"1f469-1f3fb-200d-1f33e.png",sheet_x:18,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F33E",image:"1f469-1f3fc-200d-1f33e.png",sheet_x:18,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F33E",image:"1f469-1f3fd-200d-1f33e.png",sheet_x:18,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F33E",image:"1f469-1f3fe-200d-1f33e.png",sheet_x:18,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F33E",image:"1f469-1f3ff-200d-1f33e.png",sheet_x:18,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,farmer"},scissors:{name:"Black Scissors",unified:"2702-FE0F",non_qualified:"2702",sheet_x:49,sheet_y:14,short_names:["scissors"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"scissors,black,stationery,cut"},wavy_dash:{name:"Wavy Dash",unified:"3030-FE0F",non_qualified:"3030",sheet_x:50,sheet_y:24,short_names:["wavy_dash"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"wavy,dash,draw,line,moustache,mustache,squiggle,scribble"},"flag-ke":{name:"Kenya FLAG",unified:"1F1F0-1F1EA",non_qualified:null,sheet_x:2,sheet_y:47,short_names:["flag-ke"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ke,kenya"},"flag-kg":{name:"Kyrgyzstan FLAG",unified:"1F1F0-1F1EC",non_qualified:null,sheet_x:2,sheet_y:48,short_names:["flag-kg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kg,kyrgyzstan"},couch_and_lamp:{name:"Couch and Lamp",unified:"1F6CB-FE0F",non_qualified:"1F6CB",sheet_x:36,sheet_y:47,short_names:["couch_and_lamp"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"couch,and,lamp,read,chill"},"male-cook":{name:"Male Cook",unified:"1F468-200D-1F373",non_qualified:null,sheet_x:16,sheet_y:8,short_names:["male-cook"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F373",image:"1f468-1f3fb-200d-1f373.png",sheet_x:16,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F373",image:"1f468-1f3fc-200d-1f373.png",sheet_x:16,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F373",image:"1f468-1f3fd-200d-1f373.png",sheet_x:16,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F373",image:"1f468-1f3fe-200d-1f373.png",sheet_x:16,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F373",image:"1f468-1f3ff-200d-1f373.png",sheet_x:16,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,cook"},card_file_box:{name:"Card File Box",unified:"1F5C3-FE0F",non_qualified:"1F5C3",sheet_x:30,sheet_y:5,short_names:["card_file_box"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"card,file,box,business,stationery"},copyright:{name:"Copyright Sign",unified:"00A9-FE0F",non_qualified:"00A9",sheet_x:0,sheet_y:12,short_names:["copyright"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:false,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"copyright,sign,ip,license,circle,law,legal"},file_cabinet:{name:"File Cabinet",unified:"1F5C4-FE0F",non_qualified:"1F5C4",sheet_x:30,sheet_y:6,short_names:["file_cabinet"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"file,cabinet,filing,organizing"},registered:{name:"Registered Sign",unified:"00AE-FE0F",non_qualified:"00AE",sheet_x:0,sheet_y:13,short_names:["registered"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:false,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"registered,sign,alphabet,circle"},"flag-kh":{name:"Cambodia FLAG",unified:"1F1F0-1F1ED",non_qualified:null,sheet_x:2,sheet_y:49,short_names:["flag-kh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kh,cambodia"},"female-cook":{name:"Female Cook",unified:"1F469-200D-1F373",non_qualified:null,sheet_x:18,sheet_y:23,short_names:["female-cook"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F373",image:"1f469-1f3fb-200d-1f373.png",sheet_x:18,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F373",image:"1f469-1f3fc-200d-1f373.png",sheet_x:18,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F373",image:"1f469-1f3fd-200d-1f373.png",sheet_x:18,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F373",image:"1f469-1f3fe-200d-1f373.png",sheet_x:18,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F373",image:"1f469-1f3ff-200d-1f373.png",sheet_x:18,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,cook"},toilet:{name:"Toilet",unified:"1F6BD",non_qualified:null,sheet_x:36,sheet_y:33,short_names:["toilet"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"toilet,restroom,wc,washroom,bathroom,potty"},wastebasket:{name:"Wastebasket",unified:"1F5D1-FE0F",non_qualified:"1F5D1",sheet_x:30,sheet_y:7,short_names:["wastebasket"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"wastebasket,bin,trash,rubbish,garbage,toss"},"flag-ki":{name:"Kiribati FLAG",unified:"1F1F0-1F1EE",non_qualified:null,sheet_x:2,sheet_y:50,short_names:["flag-ki"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ki,kiribati"},shower:{name:"Shower",unified:"1F6BF",non_qualified:null,sheet_x:36,sheet_y:35,short_names:["shower"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"shower,clean,water,bathroom"},"male-mechanic":{name:"Male Mechanic",unified:"1F468-200D-1F527",non_qualified:null,sheet_x:17,sheet_y:19,short_names:["male-mechanic"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F527",image:"1f468-1f3fb-200d-1f527.png",sheet_x:17,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F527",image:"1f468-1f3fc-200d-1f527.png",sheet_x:17,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F527",image:"1f468-1f3fd-200d-1f527.png",sheet_x:17,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F527",image:"1f468-1f3fe-200d-1f527.png",sheet_x:17,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F527",image:"1f468-1f3ff-200d-1f527.png",sheet_x:17,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,mechanic"},tm:{name:"Trade Mark Sign",unified:"2122-FE0F",non_qualified:"2122",sheet_x:46,sheet_y:31,short_names:["tm"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"tm,trade,mark,sign,trademark,brand,law,legal"},hash:{name:"Hash Key",unified:"0023-FE0F-20E3",non_qualified:"0023-20E3",sheet_x:0,sheet_y:0,short_names:["hash"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"hash,key,symbol,blue-square,twitter"},"flag-km":{name:"Comoros FLAG",unified:"1F1F0-1F1F2",non_qualified:null,sheet_x:2,sheet_y:51,short_names:["flag-km"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,km,comoros"},bathtub:{name:"Bathtub",unified:"1F6C1",non_qualified:null,sheet_x:36,sheet_y:42,short_names:["bathtub"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bathtub,clean,shower,bathroom"},"female-mechanic":{name:"Female Mechanic",unified:"1F469-200D-1F527",non_qualified:null,sheet_x:19,sheet_y:29,short_names:["female-mechanic"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F527",image:"1f469-1f3fb-200d-1f527.png",sheet_x:19,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F527",image:"1f469-1f3fc-200d-1f527.png",sheet_x:19,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F527",image:"1f469-1f3fd-200d-1f527.png",sheet_x:19,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F527",image:"1f469-1f3fe-200d-1f527.png",sheet_x:19,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F527",image:"1f469-1f3ff-200d-1f527.png",sheet_x:19,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,mechanic"},lock:{name:"Lock",unified:"1F512",non_qualified:null,sheet_x:27,sheet_y:20,short_names:["lock"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lock,security,password,padlock"},"male-factory-worker":{name:"Male Factory Worker",unified:"1F468-200D-1F3ED",non_qualified:null,sheet_x:16,sheet_y:38,short_names:["male-factory-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3ED",image:"1f468-1f3fb-200d-1f3ed.png",sheet_x:16,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3ED",image:"1f468-1f3fc-200d-1f3ed.png",sheet_x:16,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3ED",image:"1f468-1f3fd-200d-1f3ed.png",sheet_x:16,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3ED",image:"1f468-1f3fe-200d-1f3ed.png",sheet_x:16,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3ED",image:"1f468-1f3ff-200d-1f3ed.png",sheet_x:16,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,factory,worker"},"flag-kn":{name:"St. Kitts & Nevis FLAG",unified:"1F1F0-1F1F3",non_qualified:null,sheet_x:3,sheet_y:0,short_names:["flag-kn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kn,st.,kitts,&,nevis"},hourglass:{name:"Hourglass",unified:"231B",non_qualified:null,sheet_x:46,sheet_y:42,short_names:["hourglass"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hourglass,time,clock,oldschool,limit,exam,quiz,test"},keycap_star:{name:"Keycap Star",unified:"002A-FE0F-20E3",non_qualified:"002A-20E3",sheet_x:0,sheet_y:1,short_names:["keycap_star"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"keycap,star"},unlock:{name:"Open Lock",unified:"1F513",non_qualified:null,sheet_x:27,sheet_y:21,short_names:["unlock"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"unlock,open,lock,privacy,security"},"flag-kp":{name:"North Korea FLAG",unified:"1F1F0-1F1F5",non_qualified:null,sheet_x:3,sheet_y:1,short_names:["flag-kp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kp,north,korea"},"female-factory-worker":{name:"Female Factory Worker",unified:"1F469-200D-1F3ED",non_qualified:null,sheet_x:19,sheet_y:1,short_names:["female-factory-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3ED",image:"1f469-1f3fb-200d-1f3ed.png",sheet_x:19,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3ED",image:"1f469-1f3fc-200d-1f3ed.png",sheet_x:19,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3ED",image:"1f469-1f3fd-200d-1f3ed.png",sheet_x:19,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3ED",image:"1f469-1f3fe-200d-1f3ed.png",sheet_x:19,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3ED",image:"1f469-1f3ff-200d-1f3ed.png",sheet_x:19,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,factory,worker"},zero:{name:"Keycap 0",unified:"0030-FE0F-20E3",non_qualified:"0030-20E3",sheet_x:0,sheet_y:2,short_names:["zero"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"zero,keycap,0,numbers,blue-square,null"},lock_with_ink_pen:{name:"Lock with Ink Pen",unified:"1F50F",non_qualified:null,sheet_x:27,sheet_y:17,short_names:["lock_with_ink_pen"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lock,with,ink,pen,security,secret"},hourglass_flowing_sand:{name:"Hourglass with Flowing Sand",unified:"23F3",non_qualified:null,sheet_x:47,sheet_y:3,short_names:["hourglass_flowing_sand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hourglass,flowing,sand,with,oldschool,time,countdown"},one:{name:"Keycap 1",unified:"0031-FE0F-20E3",non_qualified:"0031-20E3",sheet_x:0,sheet_y:3,short_names:["one"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"one,keycap,1,blue-square,numbers"},kr:{name:"South Korea FLAG",unified:"1F1F0-1F1F7",non_qualified:null,sheet_x:3,sheet_y:2,short_names:["kr","flag-kr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kr,flag,south,korea,nation,country,banner"},watch:{name:"Watch",unified:"231A",non_qualified:null,sheet_x:46,sheet_y:41,short_names:["watch"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"watch,time,accessories"},"male-office-worker":{name:"Male Office Worker",unified:"1F468-200D-1F4BC",non_qualified:null,sheet_x:17,sheet_y:13,short_names:["male-office-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F4BC",image:"1f468-1f3fb-200d-1f4bc.png",sheet_x:17,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F4BC",image:"1f468-1f3fc-200d-1f4bc.png",sheet_x:17,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F4BC",image:"1f468-1f3fd-200d-1f4bc.png",sheet_x:17,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F4BC",image:"1f468-1f3fe-200d-1f4bc.png",sheet_x:17,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F4BC",image:"1f468-1f3ff-200d-1f4bc.png",sheet_x:17,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,office,worker"},closed_lock_with_key:{name:"Closed Lock with Key",unified:"1F510",non_qualified:null,sheet_x:27,sheet_y:18,short_names:["closed_lock_with_key"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"closed,lock,with,key,security,privacy"},"female-office-worker":{name:"Female Office Worker",unified:"1F469-200D-1F4BC",non_qualified:null,sheet_x:19,sheet_y:23,short_names:["female-office-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F4BC",image:"1f469-1f3fb-200d-1f4bc.png",sheet_x:19,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F4BC",image:"1f469-1f3fc-200d-1f4bc.png",sheet_x:19,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F4BC",image:"1f469-1f3fd-200d-1f4bc.png",sheet_x:19,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F4BC",image:"1f469-1f3fe-200d-1f4bc.png",sheet_x:19,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F4BC",image:"1f469-1f3ff-200d-1f4bc.png",sheet_x:19,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,office,worker"},two:{name:"Keycap 2",unified:"0032-FE0F-20E3",non_qualified:"0032-20E3",sheet_x:0,sheet_y:4,short_names:["two"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"two,keycap,2,numbers,prime,blue-square"},alarm_clock:{name:"Alarm Clock",unified:"23F0",non_qualified:null,sheet_x:47,sheet_y:0,short_names:["alarm_clock"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"alarm,clock,time,wake"},key:{name:"Key",unified:"1F511",non_qualified:null,sheet_x:27,sheet_y:19,short_names:["key"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"key,lock,door,password"},"flag-kw":{name:"Kuwait FLAG",unified:"1F1F0-1F1FC",non_qualified:null,sheet_x:3,sheet_y:3,short_names:["flag-kw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kw,kuwait"},stopwatch:{name:"Stopwatch",unified:"23F1-FE0F",non_qualified:"23F1",sheet_x:47,sheet_y:1,short_names:["stopwatch"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"stopwatch,time,deadline"},"male-scientist":{name:"Male Scientist",unified:"1F468-200D-1F52C",non_qualified:null,sheet_x:17,sheet_y:25,short_names:["male-scientist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F52C",image:"1f468-1f3fb-200d-1f52c.png",sheet_x:17,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F52C",image:"1f468-1f3fc-200d-1f52c.png",sheet_x:17,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F52C",image:"1f468-1f3fd-200d-1f52c.png",sheet_x:17,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F52C",image:"1f468-1f3fe-200d-1f52c.png",sheet_x:17,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F52C",image:"1f468-1f3ff-200d-1f52c.png",sheet_x:17,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,scientist"},three:{name:"Keycap 3",unified:"0033-FE0F-20E3",non_qualified:"0033-20E3",sheet_x:0,sheet_y:5,short_names:["three"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"three,keycap,3,numbers,prime,blue-square"},"flag-ky":{name:"Cayman Islands FLAG",unified:"1F1F0-1F1FE",non_qualified:null,sheet_x:3,sheet_y:4,short_names:["flag-ky"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ky,cayman,islands"},old_key:{name:"Old Key",unified:"1F5DD-FE0F",non_qualified:"1F5DD",sheet_x:30,sheet_y:11,short_names:["old_key"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"old,key,lock,door,password"},"flag-kz":{name:"Kazakhstan FLAG",unified:"1F1F0-1F1FF",non_qualified:null,sheet_x:3,sheet_y:5,short_names:["flag-kz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,kz,kazakhstan"},hammer:{name:"Hammer",unified:"1F528",non_qualified:null,sheet_x:27,sheet_y:42,short_names:["hammer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"hammer,tools,build,create"},"female-scientist":{name:"Female Scientist",unified:"1F469-200D-1F52C",non_qualified:null,sheet_x:19,sheet_y:35,short_names:["female-scientist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F52C",image:"1f469-1f3fb-200d-1f52c.png",sheet_x:19,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F52C",image:"1f469-1f3fc-200d-1f52c.png",sheet_x:19,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F52C",image:"1f469-1f3fd-200d-1f52c.png",sheet_x:19,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F52C",image:"1f469-1f3fe-200d-1f52c.png",sheet_x:19,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F52C",image:"1f469-1f3ff-200d-1f52c.png",sheet_x:19,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,scientist"},timer_clock:{name:"Timer Clock",unified:"23F2-FE0F",non_qualified:"23F2",sheet_x:47,sheet_y:2,short_names:["timer_clock"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"timer,clock,alarm"},four:{name:"Keycap 4",unified:"0034-FE0F-20E3",non_qualified:"0034-20E3",sheet_x:0,sheet_y:6,short_names:["four"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"four,keycap,4,numbers,blue-square"},"male-technologist":{name:"Male Technologist",unified:"1F468-200D-1F4BB",non_qualified:null,sheet_x:17,sheet_y:7,short_names:["male-technologist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F4BB",image:"1f468-1f3fb-200d-1f4bb.png",sheet_x:17,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F4BB",image:"1f468-1f3fc-200d-1f4bb.png",sheet_x:17,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F4BB",image:"1f468-1f3fd-200d-1f4bb.png",sheet_x:17,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F4BB",image:"1f468-1f3fe-200d-1f4bb.png",sheet_x:17,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F4BB",image:"1f468-1f3ff-200d-1f4bb.png",sheet_x:17,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,technologist"},mantelpiece_clock:{name:"Mantelpiece Clock",unified:"1F570-FE0F",non_qualified:"1F570",sheet_x:28,sheet_y:43,short_names:["mantelpiece_clock"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"mantelpiece,clock,time"},five:{name:"Keycap 5",unified:"0035-FE0F-20E3",non_qualified:"0035-20E3",sheet_x:0,sheet_y:7,short_names:["five"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"five,keycap,5,numbers,blue-square,prime"},"flag-la":{name:"Laos FLAG",unified:"1F1F1-1F1E6",non_qualified:null,sheet_x:3,sheet_y:6,short_names:["flag-la"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,la,laos"},pick:{name:"Pick",unified:"26CF-FE0F",non_qualified:"26CF",sheet_x:48,sheet_y:32,short_names:["pick"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"pick,tools,dig"},"flag-lb":{name:"Lebanon FLAG",unified:"1F1F1-1F1E7",non_qualified:null,sheet_x:3,sheet_y:7,short_names:["flag-lb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lb,lebanon"},"clock12":{name:"Clock Face Twelve Oclock",unified:"1F55B",non_qualified:null,sheet_x:28,sheet_y:29,short_names:["clock12"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock12,clock,face,twelve,oclock,time,noon,midnight,midday,late,early,schedule"},hammer_and_pick:{name:"Hammer and Pick",unified:"2692-FE0F",non_qualified:"2692",sheet_x:48,sheet_y:11,short_names:["hammer_and_pick"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"hammer,and,pick,tools,build,create"},six:{name:"Keycap 6",unified:"0036-FE0F-20E3",non_qualified:"0036-20E3",sheet_x:0,sheet_y:8,short_names:["six"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"six,keycap,6,numbers,blue-square"},"female-technologist":{name:"Female Technologist",unified:"1F469-200D-1F4BB",non_qualified:null,sheet_x:19,sheet_y:17,short_names:["female-technologist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F4BB",image:"1f469-1f3fb-200d-1f4bb.png",sheet_x:19,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F4BB",image:"1f469-1f3fc-200d-1f4bb.png",sheet_x:19,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F4BB",image:"1f469-1f3fd-200d-1f4bb.png",sheet_x:19,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F4BB",image:"1f469-1f3fe-200d-1f4bb.png",sheet_x:19,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F4BB",image:"1f469-1f3ff-200d-1f4bb.png",sheet_x:19,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,technologist"},hammer_and_wrench:{name:"Hammer and Wrench",unified:"1F6E0-FE0F",non_qualified:"1F6E0",sheet_x:37,sheet_y:8,short_names:["hammer_and_wrench"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"hammer,and,wrench,tools,build,create"},"flag-lc":{name:"St. Lucia FLAG",unified:"1F1F1-1F1E8",non_qualified:null,sheet_x:3,sheet_y:8,short_names:["flag-lc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lc,st.,lucia"},"clock1230":{name:"Clock Face Twelve-Thirty",unified:"1F567",non_qualified:null,sheet_x:28,sheet_y:41,short_names:["clock1230"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock1230,clock,face,twelve,thirty,time,late,early,schedule"},seven:{name:"Keycap 7",unified:"0037-FE0F-20E3",non_qualified:"0037-20E3",sheet_x:0,sheet_y:9,short_names:["seven"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"seven,keycap,7,numbers,blue-square,prime"},"male-singer":{name:"Male Singer",unified:"1F468-200D-1F3A4",non_qualified:null,sheet_x:16,sheet_y:20,short_names:["male-singer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3A4",image:"1f468-1f3fb-200d-1f3a4.png",sheet_x:16,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3A4",image:"1f468-1f3fc-200d-1f3a4.png",sheet_x:16,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3A4",image:"1f468-1f3fd-200d-1f3a4.png",sheet_x:16,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3A4",image:"1f468-1f3fe-200d-1f3a4.png",sheet_x:16,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3A4",image:"1f468-1f3ff-200d-1f3a4.png",sheet_x:16,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,singer"},eight:{name:"Keycap 8",unified:"0038-FE0F-20E3",non_qualified:"0038-20E3",sheet_x:0,sheet_y:10,short_names:["eight"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"eight,keycap,8,blue-square,numbers"},"flag-li":{name:"Liechtenstein FLAG",unified:"1F1F1-1F1EE",non_qualified:null,sheet_x:3,sheet_y:9,short_names:["flag-li"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,li,liechtenstein"},dagger_knife:{name:"Dagger Knife",unified:"1F5E1-FE0F",non_qualified:"1F5E1",sheet_x:30,sheet_y:13,short_names:["dagger_knife"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"dagger,knife"},"clock1":{name:"Clock Face One Oclock",unified:"1F550",non_qualified:null,sheet_x:28,sheet_y:18,short_names:["clock1"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock1,clock,face,one,oclock,time,late,early,schedule"},"female-singer":{name:"Female Singer",unified:"1F469-200D-1F3A4",non_qualified:null,sheet_x:18,sheet_y:35,short_names:["female-singer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3A4",image:"1f469-1f3fb-200d-1f3a4.png",sheet_x:18,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3A4",image:"1f469-1f3fc-200d-1f3a4.png",sheet_x:18,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3A4",image:"1f469-1f3fd-200d-1f3a4.png",sheet_x:18,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3A4",image:"1f469-1f3fe-200d-1f3a4.png",sheet_x:18,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3A4",image:"1f469-1f3ff-200d-1f3a4.png",sheet_x:18,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,singer"},"male-artist":{name:"Male Artist",unified:"1F468-200D-1F3A8",non_qualified:null,sheet_x:16,sheet_y:26,short_names:["male-artist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3A8",image:"1f468-1f3fb-200d-1f3a8.png",sheet_x:16,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3A8",image:"1f468-1f3fc-200d-1f3a8.png",sheet_x:16,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3A8",image:"1f468-1f3fd-200d-1f3a8.png",sheet_x:16,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3A8",image:"1f468-1f3fe-200d-1f3a8.png",sheet_x:16,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3A8",image:"1f468-1f3ff-200d-1f3a8.png",sheet_x:16,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,artist"},crossed_swords:{name:"Crossed Swords",unified:"2694-FE0F",non_qualified:"2694",sheet_x:48,sheet_y:13,short_names:["crossed_swords"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"crossed,swords,weapon"},nine:{name:"Keycap 9",unified:"0039-FE0F-20E3",non_qualified:"0039-20E3",sheet_x:0,sheet_y:11,short_names:["nine"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"nine,keycap,9,blue-square,numbers"},"flag-lk":{name:"Sri Lanka FLAG",unified:"1F1F1-1F1F0",non_qualified:null,sheet_x:3,sheet_y:10,short_names:["flag-lk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lk,sri,lanka"},"clock130":{name:"Clock Face One-Thirty",unified:"1F55C",non_qualified:null,sheet_x:28,sheet_y:30,short_names:["clock130"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock130,clock,face,one,thirty,time,late,early,schedule"},"clock2":{name:"Clock Face Two Oclock",unified:"1F551",non_qualified:null,sheet_x:28,sheet_y:19,short_names:["clock2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock2,clock,face,two,oclock,time,late,early,schedule"},gun:{name:"Pistol",unified:"1F52B",non_qualified:null,sheet_x:27,sheet_y:45,short_names:["gun"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gun,pistol,violence,weapon,revolver"},keycap_ten:{name:"Keycap Ten",unified:"1F51F",non_qualified:null,sheet_x:27,sheet_y:33,short_names:["keycap_ten"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"keycap,ten,numbers,10,blue-square"},"female-artist":{name:"Female Artist",unified:"1F469-200D-1F3A8",non_qualified:null,sheet_x:18,sheet_y:41,short_names:["female-artist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3A8",image:"1f469-1f3fb-200d-1f3a8.png",sheet_x:18,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3A8",image:"1f469-1f3fc-200d-1f3a8.png",sheet_x:18,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3A8",image:"1f469-1f3fd-200d-1f3a8.png",sheet_x:18,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3A8",image:"1f469-1f3fe-200d-1f3a8.png",sheet_x:18,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3A8",image:"1f469-1f3ff-200d-1f3a8.png",sheet_x:18,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,artist"},"flag-lr":{name:"Liberia FLAG",unified:"1F1F1-1F1F7",non_qualified:null,sheet_x:3,sheet_y:11,short_names:["flag-lr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lr,liberia"},"clock230":{name:"Clock Face Two-Thirty",unified:"1F55D",non_qualified:null,sheet_x:28,sheet_y:31,short_names:["clock230"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock230,clock,face,two,thirty,time,late,early,schedule"},bow_and_arrow:{name:"Bow and Arrow",unified:"1F3F9",non_qualified:null,sheet_x:12,sheet_y:23,short_names:["bow_and_arrow"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"bow,and,arrow,sports"},"male-pilot":{name:"Male Pilot",unified:"1F468-200D-2708-FE0F",non_qualified:"1F468-200D-2708",sheet_x:18,sheet_y:3,short_names:["male-pilot"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-2708-FE0F",image:"1f468-1f3fb-200d-2708-fe0f.png",sheet_x:18,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-2708-FE0F",image:"1f468-1f3fc-200d-2708-fe0f.png",sheet_x:18,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-2708-FE0F",image:"1f468-1f3fd-200d-2708-fe0f.png",sheet_x:18,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-2708-FE0F",image:"1f468-1f3fe-200d-2708-fe0f.png",sheet_x:18,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-2708-FE0F",image:"1f468-1f3ff-200d-2708-fe0f.png",sheet_x:18,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"male,pilot"},"flag-ls":{name:"Lesotho FLAG",unified:"1F1F1-1F1F8",non_qualified:null,sheet_x:3,sheet_y:12,short_names:["flag-ls"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ls,lesotho"},"flag-lt":{name:"Lithuania FLAG",unified:"1F1F1-1F1F9",non_qualified:null,sheet_x:3,sheet_y:13,short_names:["flag-lt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lt,lithuania"},capital_abcd:{name:"Input Symbol for Latin Capital Letters",unified:"1F520",non_qualified:null,sheet_x:27,sheet_y:34,short_names:["capital_abcd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"capital,abcd,input,symbol,for,latin,letters,alphabet,words,blue-square"},"female-pilot":{name:"Female Pilot",unified:"1F469-200D-2708-FE0F",non_qualified:"1F469-200D-2708",sheet_x:20,sheet_y:13,short_names:["female-pilot"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-2708-FE0F",image:"1f469-1f3fb-200d-2708-fe0f.png",sheet_x:20,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-2708-FE0F",image:"1f469-1f3fc-200d-2708-fe0f.png",sheet_x:20,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-2708-FE0F",image:"1f469-1f3fd-200d-2708-fe0f.png",sheet_x:20,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-2708-FE0F",image:"1f469-1f3fe-200d-2708-fe0f.png",sheet_x:20,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-2708-FE0F",image:"1f469-1f3ff-200d-2708-fe0f.png",sheet_x:20,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,pilot"},"clock3":{name:"Clock Face Three Oclock",unified:"1F552",non_qualified:null,sheet_x:28,sheet_y:20,short_names:["clock3"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock3,clock,face,three,oclock,time,late,early,schedule"},shield:{name:"Shield",unified:"1F6E1-FE0F",non_qualified:"1F6E1",sheet_x:37,sheet_y:9,short_names:["shield"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"shield,protection,security"},"male-astronaut":{name:"Male Astronaut",unified:"1F468-200D-1F680",non_qualified:null,sheet_x:17,sheet_y:31,short_names:["male-astronaut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F680",image:"1f468-1f3fb-200d-1f680.png",sheet_x:17,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F680",image:"1f468-1f3fc-200d-1f680.png",sheet_x:17,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F680",image:"1f468-1f3fd-200d-1f680.png",sheet_x:17,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F680",image:"1f468-1f3fe-200d-1f680.png",sheet_x:17,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F680",image:"1f468-1f3ff-200d-1f680.png",sheet_x:17,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,astronaut"},abcd:{name:"Input Symbol for Latin Small Letters",unified:"1F521",non_qualified:null,sheet_x:27,sheet_y:35,short_names:["abcd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"abcd,input,symbol,for,latin,small,letters,blue-square,alphabet"},"clock330":{name:"Clock Face Three-Thirty",unified:"1F55E",non_qualified:null,sheet_x:28,sheet_y:32,short_names:["clock330"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock330,clock,face,three,thirty,time,late,early,schedule"},"flag-lu":{name:"Luxembourg FLAG",unified:"1F1F1-1F1FA",non_qualified:null,sheet_x:3,sheet_y:14,short_names:["flag-lu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lu,luxembourg"},wrench:{name:"Wrench",unified:"1F527",non_qualified:null,sheet_x:27,sheet_y:41,short_names:["wrench"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"wrench,tools,diy,ikea,fix,maintainer"},nut_and_bolt:{name:"Nut and Bolt",unified:"1F529",non_qualified:null,sheet_x:27,sheet_y:43,short_names:["nut_and_bolt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"nut,and,bolt,handy,tools,fix"},"clock4":{name:"Clock Face Four Oclock",unified:"1F553",non_qualified:null,sheet_x:28,sheet_y:21,short_names:["clock4"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock4,clock,face,four,oclock,time,late,early,schedule"},"female-astronaut":{name:"Female Astronaut",unified:"1F469-200D-1F680",non_qualified:null,sheet_x:19,sheet_y:41,short_names:["female-astronaut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F680",image:"1f469-1f3fb-200d-1f680.png",sheet_x:19,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F680",image:"1f469-1f3fc-200d-1f680.png",sheet_x:19,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F680",image:"1f469-1f3fd-200d-1f680.png",sheet_x:19,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F680",image:"1f469-1f3fe-200d-1f680.png",sheet_x:19,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F680",image:"1f469-1f3ff-200d-1f680.png",sheet_x:19,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,astronaut"},"flag-lv":{name:"Latvia FLAG",unified:"1F1F1-1F1FB",non_qualified:null,sheet_x:3,sheet_y:15,short_names:["flag-lv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,lv,latvia"},gear:{name:"Gear",unified:"2699-FE0F",non_qualified:"2699",sheet_x:48,sheet_y:17,short_names:["gear"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"gear,cog"},"male-firefighter":{name:"Male Firefighter",unified:"1F468-200D-1F692",non_qualified:null,sheet_x:17,sheet_y:37,short_names:["male-firefighter"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F692",image:"1f468-1f3fb-200d-1f692.png",sheet_x:17,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F692",image:"1f468-1f3fc-200d-1f692.png",sheet_x:17,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F692",image:"1f468-1f3fd-200d-1f692.png",sheet_x:17,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F692",image:"1f468-1f3fe-200d-1f692.png",sheet_x:17,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F692",image:"1f468-1f3ff-200d-1f692.png",sheet_x:17,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"male,firefighter"},"flag-ly":{name:"Libya FLAG",unified:"1F1F1-1F1FE",non_qualified:null,sheet_x:3,sheet_y:16,short_names:["flag-ly"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ly,libya"},symbols:{name:"Input Symbol for Symbols",unified:"1F523",non_qualified:null,sheet_x:27,sheet_y:37,short_names:["symbols"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"symbols,input,symbol,for,blue-square,music,note,ampersand,percent,glyphs,characters"},"clock430":{name:"Clock Face Four-Thirty",unified:"1F55F",non_qualified:null,sheet_x:28,sheet_y:33,short_names:["clock430"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock430,clock,face,four,thirty,time,late,early,schedule"},"flag-ma":{name:"Morocco FLAG",unified:"1F1F2-1F1E6",non_qualified:null,sheet_x:3,sheet_y:17,short_names:["flag-ma"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ma,morocco"},compression:{name:"Compression",unified:"1F5DC-FE0F",non_qualified:"1F5DC",sheet_x:30,sheet_y:10,short_names:["compression"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"compression"},"female-firefighter":{name:"Female Firefighter",unified:"1F469-200D-1F692",non_qualified:null,sheet_x:19,sheet_y:47,short_names:["female-firefighter"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F692",image:"1f469-1f3fb-200d-1f692.png",sheet_x:19,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F692",image:"1f469-1f3fc-200d-1f692.png",sheet_x:19,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F692",image:"1f469-1f3fd-200d-1f692.png",sheet_x:19,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F692",image:"1f469-1f3fe-200d-1f692.png",sheet_x:19,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F692",image:"1f469-1f3ff-200d-1f692.png",sheet_x:20,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"female,firefighter"},abc:{name:"Input Symbol for Latin Letters",unified:"1F524",non_qualified:null,sheet_x:27,sheet_y:38,short_names:["abc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"abc,input,symbol,for,latin,letters,blue-square,alphabet"},"clock5":{name:"Clock Face Five Oclock",unified:"1F554",non_qualified:null,sheet_x:28,sheet_y:22,short_names:["clock5"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock5,clock,face,five,oclock,time,late,early,schedule"},"clock530":{name:"Clock Face Five-Thirty",unified:"1F560",non_qualified:null,sheet_x:28,sheet_y:34,short_names:["clock530"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock530,clock,face,five,thirty,time,late,early,schedule"},a:{name:"Negative Squared Latin Capital Letter a",unified:"1F170-FE0F",non_qualified:"1F170",sheet_x:0,sheet_y:16,short_names:["a"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"a,negative,squared,latin,capital,letter,red-square,alphabet"},alembic:{name:"Alembic",unified:"2697-FE0F",non_qualified:"2697",sheet_x:48,sheet_y:16,short_names:["alembic"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"alembic,distilling,science,experiment,chemistry"},"flag-mc":{name:"Monaco FLAG",unified:"1F1F2-1F1E8",non_qualified:null,sheet_x:3,sheet_y:18,short_names:["flag-mc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mc,monaco"},cop:{name:"Police Officer",unified:"1F46E",non_qualified:null,sheet_x:20,sheet_y:45,short_names:["cop"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F46E-1F3FB",non_qualified:null,image:"1f46e-1f3fb.png",sheet_x:20,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F46E-1F3FC",non_qualified:null,image:"1f46e-1f3fc.png",sheet_x:20,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F46E-1F3FD",non_qualified:null,image:"1f46e-1f3fd.png",sheet_x:20,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F46E-1F3FE",non_qualified:null,image:"1f46e-1f3fe.png",sheet_x:20,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F46E-1F3FF",non_qualified:null,image:"1f46e-1f3ff.png",sheet_x:20,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F46E-200D-2642-FE0F",search:"cop,police,officer"},scales:{name:"Scales",unified:"2696-FE0F",non_qualified:"2696",sheet_x:48,sheet_y:15,short_names:["scales"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"scales"},"clock6":{name:"Clock Face Six Oclock",unified:"1F555",non_qualified:null,sheet_x:28,sheet_y:23,short_names:["clock6"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock6,clock,face,six,oclock,time,late,early,schedule,dawn,dusk"},"flag-md":{name:"Moldova FLAG",unified:"1F1F2-1F1E9",non_qualified:null,sheet_x:3,sheet_y:19,short_names:["flag-md"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,md,moldova"},ab:{name:"Negative Squared Ab",unified:"1F18E",non_qualified:null,sheet_x:0,sheet_y:20,short_names:["ab"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ab,negative,squared,red-square,alphabet"},"male-police-officer":{name:"Male Police Officer",unified:"1F46E-200D-2642-FE0F",non_qualified:"1F46E-200D-2642",sheet_x:20,sheet_y:39,short_names:["male-police-officer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F46E-1F3FB-200D-2642-FE0F",image:"1f46e-1f3fb-200d-2642-fe0f.png",sheet_x:20,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F46E-1F3FC-200D-2642-FE0F",image:"1f46e-1f3fc-200d-2642-fe0f.png",sheet_x:20,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F46E-1F3FD-200D-2642-FE0F",image:"1f46e-1f3fd-200d-2642-fe0f.png",sheet_x:20,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F46E-1F3FE-200D-2642-FE0F",image:"1f46e-1f3fe-200d-2642-fe0f.png",sheet_x:20,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F46E-1F3FF-200D-2642-FE0F",image:"1f46e-1f3ff-200d-2642-fe0f.png",sheet_x:20,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F46E",search:"male,police,officer"},link:{name:"Link Symbol",unified:"1F517",non_qualified:null,sheet_x:27,sheet_y:25,short_names:["link"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"link,symbol,rings,url"},"flag-me":{name:"Montenegro FLAG",unified:"1F1F2-1F1EA",non_qualified:null,sheet_x:3,sheet_y:20,short_names:["flag-me"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,me,montenegro"},"clock630":{name:"Clock Face Six-Thirty",unified:"1F561",non_qualified:null,sheet_x:28,sheet_y:35,short_names:["clock630"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock630,clock,face,six,thirty,time,late,early,schedule"},b:{name:"Negative Squared Latin Capital Letter B",unified:"1F171-FE0F",non_qualified:"1F171",sheet_x:0,sheet_y:17,short_names:["b"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"b,negative,squared,latin,capital,letter,red-square,alphabet"},"female-police-officer":{name:"Female Police Officer",unified:"1F46E-200D-2640-FE0F",non_qualified:"1F46E-200D-2640",sheet_x:20,sheet_y:33,short_names:["female-police-officer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F46E-1F3FB-200D-2640-FE0F",image:"1f46e-1f3fb-200d-2640-fe0f.png",sheet_x:20,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F46E-1F3FC-200D-2640-FE0F",image:"1f46e-1f3fc-200d-2640-fe0f.png",sheet_x:20,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F46E-1F3FD-200D-2640-FE0F",image:"1f46e-1f3fd-200d-2640-fe0f.png",sheet_x:20,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F46E-1F3FE-200D-2640-FE0F",image:"1f46e-1f3fe-200d-2640-fe0f.png",sheet_x:20,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F46E-1F3FF-200D-2640-FE0F",image:"1f46e-1f3ff-200d-2640-fe0f.png",sheet_x:20,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,police,officer"},"clock7":{name:"Clock Face Seven Oclock",unified:"1F556",non_qualified:null,sheet_x:28,sheet_y:24,short_names:["clock7"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock7,clock,face,seven,oclock,time,late,early,schedule"},cl:{name:"Squared Cl",unified:"1F191",non_qualified:null,sheet_x:0,sheet_y:21,short_names:["cl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cl,squared,alphabet,words,red-square"},sleuth_or_spy:{name:"Sleuth or Spy",unified:"1F575-FE0F",non_qualified:"1F575",sheet_x:29,sheet_y:11,short_names:["sleuth_or_spy"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F575-1F3FB",non_qualified:null,image:"1f575-1f3fb.png",sheet_x:29,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F575-1F3FC",non_qualified:null,image:"1f575-1f3fc.png",sheet_x:29,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F575-1F3FD",non_qualified:null,image:"1f575-1f3fd.png",sheet_x:29,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F575-1F3FE",non_qualified:null,image:"1f575-1f3fe.png",sheet_x:29,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F575-1F3FF",non_qualified:null,image:"1f575-1f3ff.png",sheet_x:29,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false}},obsoleted_by:"1F575-FE0F-200D-2642-FE0F",search:"sleuth,or,spy"},"flag-mf":{name:"St. Martin FLAG",unified:"1F1F2-1F1EB",non_qualified:null,sheet_x:3,sheet_y:21,short_names:["flag-mf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mf,st.,martin"},chains:{name:"Chains",unified:"26D3-FE0F",non_qualified:"26D3",sheet_x:48,sheet_y:34,short_names:["chains"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"chains,lock,arrest"},syringe:{name:"Syringe",unified:"1F489",non_qualified:null,sheet_x:24,sheet_y:35,short_names:["syringe"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"syringe,health,hospital,drugs,blood,medicine,needle,doctor,nurse"},"male-detective":{name:"Male Detective",unified:"1F575-FE0F-200D-2642-FE0F",non_qualified:null,sheet_x:29,sheet_y:5,short_names:["male-detective"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F575-1F3FB-200D-2642-FE0F",image:"1f575-1f3fb-200d-2642-fe0f.png",sheet_x:29,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F575-1F3FC-200D-2642-FE0F",image:"1f575-1f3fc-200d-2642-fe0f.png",sheet_x:29,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F575-1F3FD-200D-2642-FE0F",image:"1f575-1f3fd-200d-2642-fe0f.png",sheet_x:29,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F575-1F3FE-200D-2642-FE0F",image:"1f575-1f3fe-200d-2642-fe0f.png",sheet_x:29,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F575-1F3FF-200D-2642-FE0F",image:"1f575-1f3ff-200d-2642-fe0f.png",sheet_x:29,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F575-FE0F",search:"male,detective"},cool:{name:"Squared Cool",unified:"1F192",non_qualified:null,sheet_x:0,sheet_y:22,short_names:["cool"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cool,squared,words,blue-square"},"clock730":{name:"Clock Face Seven-Thirty",unified:"1F562",non_qualified:null,sheet_x:28,sheet_y:36,short_names:["clock730"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock730,clock,face,seven,thirty,time,late,early,schedule"},"flag-mg":{name:"Madagascar FLAG",unified:"1F1F2-1F1EC",non_qualified:null,sheet_x:3,sheet_y:22,short_names:["flag-mg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mg,madagascar"},free:{name:"Squared Free",unified:"1F193",non_qualified:null,sheet_x:0,sheet_y:23,short_names:["free"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"free,squared,blue-square,words"},"flag-mh":{name:"Marshall Islands FLAG",unified:"1F1F2-1F1ED",non_qualified:null,sheet_x:3,sheet_y:23,short_names:["flag-mh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mh,marshall,islands"},"clock8":{name:"Clock Face Eight Oclock",unified:"1F557",non_qualified:null,sheet_x:28,sheet_y:25,short_names:["clock8"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock8,clock,face,eight,oclock,time,late,early,schedule"},pill:{name:"Pill",unified:"1F48A",non_qualified:null,sheet_x:24,sheet_y:36,short_names:["pill"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pill,health,medicine,doctor,pharmacy,drug"},"female-detective":{name:"Female Detective",unified:"1F575-FE0F-200D-2640-FE0F",non_qualified:null,sheet_x:28,sheet_y:51,short_names:["female-detective"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F575-1F3FB-200D-2640-FE0F",image:"1f575-1f3fb-200d-2640-fe0f.png",sheet_x:29,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F575-1F3FC-200D-2640-FE0F",image:"1f575-1f3fc-200d-2640-fe0f.png",sheet_x:29,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F575-1F3FD-200D-2640-FE0F",image:"1f575-1f3fd-200d-2640-fe0f.png",sheet_x:29,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F575-1F3FE-200D-2640-FE0F",image:"1f575-1f3fe-200d-2640-fe0f.png",sheet_x:29,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F575-1F3FF-200D-2640-FE0F",image:"1f575-1f3ff-200d-2640-fe0f.png",sheet_x:29,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,detective"},"clock830":{name:"Clock Face Eight-Thirty",unified:"1F563",non_qualified:null,sheet_x:28,sheet_y:37,short_names:["clock830"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock830,clock,face,eight,thirty,time,late,early,schedule"},guardsman:{name:"Guardsman",unified:"1F482",non_qualified:null,sheet_x:23,sheet_y:31,short_names:["guardsman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F482-1F3FB",non_qualified:null,image:"1f482-1f3fb.png",sheet_x:23,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F482-1F3FC",non_qualified:null,image:"1f482-1f3fc.png",sheet_x:23,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F482-1F3FD",non_qualified:null,image:"1f482-1f3fd.png",sheet_x:23,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F482-1F3FE",non_qualified:null,image:"1f482-1f3fe.png",sheet_x:23,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F482-1F3FF",non_qualified:null,image:"1f482-1f3ff.png",sheet_x:23,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F482-200D-2642-FE0F",search:"guardsman,uk,gb,british,male,guy,royal"},information_source:{name:"Information Source",unified:"2139-FE0F",non_qualified:"2139",sheet_x:46,sheet_y:32,short_names:["information_source"],text:"",added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"information,source,blue-square,alphabet,letter"},"flag-mk":{name:"Macedonia FLAG",unified:"1F1F2-1F1F0",non_qualified:null,sheet_x:3,sheet_y:24,short_names:["flag-mk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mk,macedonia"},smoking:{name:"Smoking Symbol",unified:"1F6AC",non_qualified:null,sheet_x:35,sheet_y:17,short_names:["smoking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"smoking,symbol,kills,tobacco,cigarette,joint,smoke"},id:{name:"Squared Id",unified:"1F194",non_qualified:null,sheet_x:0,sheet_y:24,short_names:["id"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"id,squared,purple-square,words"},"clock9":{name:"Clock Face Nine Oclock",unified:"1F558",non_qualified:null,sheet_x:28,sheet_y:26,short_names:["clock9"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock9,clock,face,nine,oclock,time,late,early,schedule"},"flag-ml":{name:"Mali FLAG",unified:"1F1F2-1F1F1",non_qualified:null,sheet_x:3,sheet_y:25,short_names:["flag-ml"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ml,mali"},coffin:{name:"Coffin",unified:"26B0-FE0F",non_qualified:"26B0",sheet_x:48,sheet_y:24,short_names:["coffin"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"coffin,vampire,dead,die,death,rip,graveyard,cemetery,casket,funeral,box"},"male-guard":{name:"Male Guard",unified:"1F482-200D-2642-FE0F",non_qualified:"1F482-200D-2642",sheet_x:23,sheet_y:25,short_names:["male-guard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F482-1F3FB-200D-2642-FE0F",image:"1f482-1f3fb-200d-2642-fe0f.png",sheet_x:23,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F482-1F3FC-200D-2642-FE0F",image:"1f482-1f3fc-200d-2642-fe0f.png",sheet_x:23,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F482-1F3FD-200D-2642-FE0F",image:"1f482-1f3fd-200d-2642-fe0f.png",sheet_x:23,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F482-1F3FE-200D-2642-FE0F",image:"1f482-1f3fe-200d-2642-fe0f.png",sheet_x:23,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F482-1F3FF-200D-2642-FE0F",image:"1f482-1f3ff-200d-2642-fe0f.png",sheet_x:23,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F482",search:"male,guard"},m:{name:"Circled Latin Capital Letter M",unified:"24C2-FE0F",non_qualified:"24C2",sheet_x:47,sheet_y:7,short_names:["m"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"m,circled,latin,capital,letter,alphabet,blue-circle"},funeral_urn:{name:"Funeral Urn",unified:"26B1-FE0F",non_qualified:"26B1",sheet_x:48,sheet_y:25,short_names:["funeral_urn"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"funeral,urn,dead,die,death,rip,ashes"},"female-guard":{name:"Female Guard",unified:"1F482-200D-2640-FE0F",non_qualified:"1F482-200D-2640",sheet_x:23,sheet_y:19,short_names:["female-guard"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F482-1F3FB-200D-2640-FE0F",image:"1f482-1f3fb-200d-2640-fe0f.png",sheet_x:23,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F482-1F3FC-200D-2640-FE0F",image:"1f482-1f3fc-200d-2640-fe0f.png",sheet_x:23,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F482-1F3FD-200D-2640-FE0F",image:"1f482-1f3fd-200d-2640-fe0f.png",sheet_x:23,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F482-1F3FE-200D-2640-FE0F",image:"1f482-1f3fe-200d-2640-fe0f.png",sheet_x:23,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F482-1F3FF-200D-2640-FE0F",image:"1f482-1f3ff-200d-2640-fe0f.png",sheet_x:23,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,guard"},"flag-mm":{name:"Myanmar (burma) FLAG",unified:"1F1F2-1F1F2",non_qualified:null,sheet_x:3,sheet_y:26,short_names:["flag-mm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mm,myanmar,(burma)"},"clock930":{name:"Clock Face Nine-Thirty",unified:"1F564",non_qualified:null,sheet_x:28,sheet_y:38,short_names:["clock930"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock930,clock,face,nine,thirty,time,late,early,schedule"},moyai:{name:"Moyai",unified:"1F5FF",non_qualified:null,sheet_x:30,sheet_y:23,short_names:["moyai"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"moyai,rock,easter island,moai"},new:{name:"Squared New",unified:"1F195",non_qualified:null,sheet_x:0,sheet_y:25,short_names:["new"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"new,squared,blue-square,words,start"},"flag-mn":{name:"Mongolia FLAG",unified:"1F1F2-1F1F3",non_qualified:null,sheet_x:3,sheet_y:27,short_names:["flag-mn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mn,mongolia"},construction_worker:{name:"Construction Worker",unified:"1F477",non_qualified:null,sheet_x:22,sheet_y:28,short_names:["construction_worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F477-1F3FB",non_qualified:null,image:"1f477-1f3fb.png",sheet_x:22,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F477-1F3FC",non_qualified:null,image:"1f477-1f3fc.png",sheet_x:22,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F477-1F3FD",non_qualified:null,image:"1f477-1f3fd.png",sheet_x:22,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F477-1F3FE",non_qualified:null,image:"1f477-1f3fe.png",sheet_x:22,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F477-1F3FF",non_qualified:null,image:"1f477-1f3ff.png",sheet_x:22,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F477-200D-2642-FE0F",search:"construction,worker"},"clock10":{name:"Clock Face Ten Oclock",unified:"1F559",non_qualified:null,sheet_x:28,sheet_y:27,short_names:["clock10"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock10,clock,face,ten,oclock,time,late,early,schedule"},"clock1030":{name:"Clock Face Ten-Thirty",unified:"1F565",non_qualified:null,sheet_x:28,sheet_y:39,short_names:["clock1030"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock1030,clock,face,ten,thirty,time,late,early,schedule"},ng:{name:"Squared Ng",unified:"1F196",non_qualified:null,sheet_x:0,sheet_y:26,short_names:["ng"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ng,squared,blue-square,words,shape,icon"},"male-construction-worker":{name:"Male Construction Worker",unified:"1F477-200D-2642-FE0F",non_qualified:"1F477-200D-2642",sheet_x:22,sheet_y:22,short_names:["male-construction-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F477-1F3FB-200D-2642-FE0F",image:"1f477-1f3fb-200d-2642-fe0f.png",sheet_x:22,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F477-1F3FC-200D-2642-FE0F",image:"1f477-1f3fc-200d-2642-fe0f.png",sheet_x:22,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F477-1F3FD-200D-2642-FE0F",image:"1f477-1f3fd-200d-2642-fe0f.png",sheet_x:22,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F477-1F3FE-200D-2642-FE0F",image:"1f477-1f3fe-200d-2642-fe0f.png",sheet_x:22,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F477-1F3FF-200D-2642-FE0F",image:"1f477-1f3ff-200d-2642-fe0f.png",sheet_x:22,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F477",search:"male,construction,worker"},"flag-mo":{name:"Macau Sar China FLAG",unified:"1F1F2-1F1F4",non_qualified:null,sheet_x:3,sheet_y:28,short_names:["flag-mo"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mo,macau,sar,china"},oil_drum:{name:"Oil Drum",unified:"1F6E2-FE0F",non_qualified:"1F6E2",sheet_x:37,sheet_y:10,short_names:["oil_drum"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"oil,drum,barrell"},"o2":{name:"Negative Squared Latin Capital Letter O",unified:"1F17E-FE0F",non_qualified:"1F17E",sheet_x:0,sheet_y:18,short_names:["o2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"o2,negative,squared,latin,capital,letter,o,alphabet,red-square"},"female-construction-worker":{name:"Female Construction Worker",unified:"1F477-200D-2640-FE0F",non_qualified:"1F477-200D-2640",sheet_x:22,sheet_y:16,short_names:["female-construction-worker"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F477-1F3FB-200D-2640-FE0F",image:"1f477-1f3fb-200d-2640-fe0f.png",sheet_x:22,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F477-1F3FC-200D-2640-FE0F",image:"1f477-1f3fc-200d-2640-fe0f.png",sheet_x:22,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F477-1F3FD-200D-2640-FE0F",image:"1f477-1f3fd-200d-2640-fe0f.png",sheet_x:22,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F477-1F3FE-200D-2640-FE0F",image:"1f477-1f3fe-200d-2640-fe0f.png",sheet_x:22,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F477-1F3FF-200D-2640-FE0F",image:"1f477-1f3ff-200d-2640-fe0f.png",sheet_x:22,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,construction,worker"},"clock11":{name:"Clock Face Eleven Oclock",unified:"1F55A",non_qualified:null,sheet_x:28,sheet_y:28,short_names:["clock11"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock11,clock,face,eleven,oclock,time,late,early,schedule"},crystal_ball:{name:"Crystal Ball",unified:"1F52E",non_qualified:null,sheet_x:27,sheet_y:48,short_names:["crystal_ball"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crystal,ball,disco,party,magic,circus,fortune_teller"},"flag-mp":{name:"Northern Mariana Islands FLAG",unified:"1F1F2-1F1F5",non_qualified:null,sheet_x:3,sheet_y:29,short_names:["flag-mp"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mp,northern,mariana,islands"},"flag-mq":{name:"Martinique FLAG",unified:"1F1F2-1F1F6",non_qualified:null,sheet_x:3,sheet_y:30,short_names:["flag-mq"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mq,martinique"},prince:{name:"Prince",unified:"1F934",non_qualified:null,sheet_x:39,sheet_y:28,short_names:["prince"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F934-1F3FB",non_qualified:null,image:"1f934-1f3fb.png",sheet_x:39,sheet_y:29,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F934-1F3FC",non_qualified:null,image:"1f934-1f3fc.png",sheet_x:39,sheet_y:30,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F934-1F3FD",non_qualified:null,image:"1f934-1f3fd.png",sheet_x:39,sheet_y:31,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F934-1F3FE",non_qualified:null,image:"1f934-1f3fe.png",sheet_x:39,sheet_y:32,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F934-1F3FF",non_qualified:null,image:"1f934-1f3ff.png",sheet_x:39,sheet_y:33,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"prince,boy,man,male,crown,royal,king"},ok:{name:"Squared Ok",unified:"1F197",non_qualified:null,sheet_x:0,sheet_y:27,short_names:["ok"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ok,squared,good,agree,yes,blue-square"},"clock1130":{name:"Clock Face Eleven-Thirty",unified:"1F566",non_qualified:null,sheet_x:28,sheet_y:40,short_names:["clock1130"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"clock1130,clock,face,eleven,thirty,time,late,early,schedule"},shopping_trolley:{name:"Shopping Trolley",unified:"1F6D2",non_qualified:null,sheet_x:37,sheet_y:7,short_names:["shopping_trolley"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"shopping,trolley"},"flag-mr":{name:"Mauritania FLAG",unified:"1F1F2-1F1F7",non_qualified:null,sheet_x:3,sheet_y:31,short_names:["flag-mr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mr,mauritania"},princess:{name:"Princess",unified:"1F478",non_qualified:null,sheet_x:22,sheet_y:34,short_names:["princess"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F478-1F3FB",non_qualified:null,image:"1f478-1f3fb.png",sheet_x:22,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F478-1F3FC",non_qualified:null,image:"1f478-1f3fc.png",sheet_x:22,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F478-1F3FD",non_qualified:null,image:"1f478-1f3fd.png",sheet_x:22,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F478-1F3FE",non_qualified:null,image:"1f478-1f3fe.png",sheet_x:22,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F478-1F3FF",non_qualified:null,image:"1f478-1f3ff.png",sheet_x:22,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"princess,girl,woman,female,blond,crown,royal,queen"},new_moon:{name:"New Moon Symbol",unified:"1F311",non_qualified:null,sheet_x:6,sheet_y:9,short_names:["new_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"new,moon,symbol,nature,twilight,planet,space,night,evening,sleep"},parking:{name:"Negative Squared Latin Capital Letter P",unified:"1F17F-FE0F",non_qualified:"1F17F",sheet_x:0,sheet_y:19,short_names:["parking"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"parking,negative,squared,latin,capital,letter,p,cars,blue-square,alphabet"},sos:{name:"Squared Sos",unified:"1F198",non_qualified:null,sheet_x:0,sheet_y:28,short_names:["sos"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sos,squared,help,red-square,words,emergency,911"},man_with_turban:{name:"Man with Turban",unified:"1F473",non_qualified:null,sheet_x:21,sheet_y:44,short_names:["man_with_turban"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F473-1F3FB",non_qualified:null,image:"1f473-1f3fb.png",sheet_x:21,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F473-1F3FC",non_qualified:null,image:"1f473-1f3fc.png",sheet_x:21,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F473-1F3FD",non_qualified:null,image:"1f473-1f3fd.png",sheet_x:21,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F473-1F3FE",non_qualified:null,image:"1f473-1f3fe.png",sheet_x:21,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F473-1F3FF",non_qualified:null,image:"1f473-1f3ff.png",sheet_x:21,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F473-200D-2642-FE0F",search:"man,with,turban,male,indian,hinduism,arabs"},"flag-ms":{name:"Montserrat FLAG",unified:"1F1F2-1F1F8",non_qualified:null,sheet_x:3,sheet_y:32,short_names:["flag-ms"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ms,montserrat"},waxing_crescent_moon:{name:"Waxing Crescent Moon Symbol",unified:"1F312",non_qualified:null,sheet_x:6,sheet_y:10,short_names:["waxing_crescent_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"waxing,crescent,moon,symbol,nature,twilight,planet,space,night,evening,sleep"},up:{name:"Squared Up with Exclamation Mark",unified:"1F199",non_qualified:null,sheet_x:0,sheet_y:29,short_names:["up"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"up,squared,with,exclamation,mark,blue-square,above,high"},first_quarter_moon:{name:"First Quarter Moon Symbol",unified:"1F313",non_qualified:null,sheet_x:6,sheet_y:11,short_names:["first_quarter_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"first,quarter,moon,symbol,nature,twilight,planet,space,night,evening,sleep"},"flag-mt":{name:"Malta FLAG",unified:"1F1F2-1F1F9",non_qualified:null,sheet_x:3,sheet_y:33,short_names:["flag-mt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mt,malta"},"man-wearing-turban":{name:"Man Wearing Turban",unified:"1F473-200D-2642-FE0F",non_qualified:"1F473-200D-2642",sheet_x:21,sheet_y:38,short_names:["man-wearing-turban"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F473-1F3FB-200D-2642-FE0F",image:"1f473-1f3fb-200d-2642-fe0f.png",sheet_x:21,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F473-1F3FC-200D-2642-FE0F",image:"1f473-1f3fc-200d-2642-fe0f.png",sheet_x:21,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F473-1F3FD-200D-2642-FE0F",image:"1f473-1f3fd-200d-2642-fe0f.png",sheet_x:21,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F473-1F3FE-200D-2642-FE0F",image:"1f473-1f3fe-200d-2642-fe0f.png",sheet_x:21,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F473-1F3FF-200D-2642-FE0F",image:"1f473-1f3ff-200d-2642-fe0f.png",sheet_x:21,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F473",search:"man,wearing,turban"},moon:{name:"Waxing Gibbous Moon Symbol",unified:"1F314",non_qualified:null,sheet_x:6,sheet_y:12,short_names:["moon","waxing_gibbous_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"moon,waxing,gibbous,symbol"},"woman-wearing-turban":{name:"Woman Wearing Turban",unified:"1F473-200D-2640-FE0F",non_qualified:"1F473-200D-2640",sheet_x:21,sheet_y:32,short_names:["woman-wearing-turban"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F473-1F3FB-200D-2640-FE0F",image:"1f473-1f3fb-200d-2640-fe0f.png",sheet_x:21,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F473-1F3FC-200D-2640-FE0F",image:"1f473-1f3fc-200d-2640-fe0f.png",sheet_x:21,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F473-1F3FD-200D-2640-FE0F",image:"1f473-1f3fd-200d-2640-fe0f.png",sheet_x:21,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F473-1F3FE-200D-2640-FE0F",image:"1f473-1f3fe-200d-2640-fe0f.png",sheet_x:21,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F473-1F3FF-200D-2640-FE0F",image:"1f473-1f3ff-200d-2640-fe0f.png",sheet_x:21,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,wearing,turban"},vs:{name:"Squared Vs",unified:"1F19A",non_qualified:null,sheet_x:0,sheet_y:30,short_names:["vs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"vs,squared,words,orange-square"},"flag-mu":{name:"Mauritius FLAG",unified:"1F1F2-1F1FA",non_qualified:null,sheet_x:3,sheet_y:34,short_names:["flag-mu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mu,mauritius"},man_with_gua_pi_mao:{name:"Man with Gua Pi Mao",unified:"1F472",non_qualified:null,sheet_x:21,sheet_y:26,short_names:["man_with_gua_pi_mao"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F472-1F3FB",non_qualified:null,image:"1f472-1f3fb.png",sheet_x:21,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F472-1F3FC",non_qualified:null,image:"1f472-1f3fc.png",sheet_x:21,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F472-1F3FD",non_qualified:null,image:"1f472-1f3fd.png",sheet_x:21,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F472-1F3FE",non_qualified:null,image:"1f472-1f3fe.png",sheet_x:21,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F472-1F3FF",non_qualified:null,image:"1f472-1f3ff.png",sheet_x:21,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"man,with,gua,pi,mao,male,boy,chinese"},koko:{name:"Squared Katakana Koko",unified:"1F201",non_qualified:null,sheet_x:5,sheet_y:29,short_names:["koko"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"koko,squared,katakana,blue-square,here,japanese,destination"},full_moon:{name:"Full Moon Symbol",unified:"1F315",non_qualified:null,sheet_x:6,sheet_y:13,short_names:["full_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"full,moon,symbol,nature,yellow,twilight,planet,space,night,evening,sleep"},"flag-mv":{name:"Maldives FLAG",unified:"1F1F2-1F1FB",non_qualified:null,sheet_x:3,sheet_y:35,short_names:["flag-mv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mv,maldives"},person_with_headscarf:{name:"Person with Headscarf",unified:"1F9D5",non_qualified:null,sheet_x:43,sheet_y:22,short_names:["person_with_headscarf"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D5-1F3FB",non_qualified:null,image:"1f9d5-1f3fb.png",sheet_x:43,sheet_y:23,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F9D5-1F3FC",non_qualified:null,image:"1f9d5-1f3fc.png",sheet_x:43,sheet_y:24,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F9D5-1F3FD",non_qualified:null,image:"1f9d5-1f3fd.png",sheet_x:43,sheet_y:25,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F9D5-1F3FE",non_qualified:null,image:"1f9d5-1f3fe.png",sheet_x:43,sheet_y:26,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F9D5-1F3FF",non_qualified:null,image:"1f9d5-1f3ff.png",sheet_x:43,sheet_y:27,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"person,with,headscarf"},waning_gibbous_moon:{name:"Waning Gibbous Moon Symbol",unified:"1F316",non_qualified:null,sheet_x:6,sheet_y:14,short_names:["waning_gibbous_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"waning,gibbous,moon,symbol,nature,twilight,planet,space,night,evening,sleep,waxing_gibbous_moon"},sa:{name:"Squared Katakana Sa",unified:"1F202-FE0F",non_qualified:"1F202",sheet_x:5,sheet_y:30,short_names:["sa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"sa,squared,katakana,japanese,blue-square"},"flag-mw":{name:"Malawi FLAG",unified:"1F1F2-1F1FC",non_qualified:null,sheet_x:3,sheet_y:36,short_names:["flag-mw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mw,malawi"},last_quarter_moon:{name:"Last Quarter Moon Symbol",unified:"1F317",non_qualified:null,sheet_x:6,sheet_y:15,short_names:["last_quarter_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"last,quarter,moon,symbol,nature,twilight,planet,space,night,evening,sleep"},"u6708":{name:"Squared Cjk Unified Ideograph-6708",unified:"1F237-FE0F",non_qualified:"1F237",sheet_x:5,sheet_y:38,short_names:["u6708"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"u6708,squared,cjk,unified,ideograph,6708,chinese,month,moon,japanese,orange-square,kanji"},bearded_person:{name:"Bearded Person",unified:"1F9D4",non_qualified:null,sheet_x:43,sheet_y:16,short_names:["bearded_person"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D4-1F3FB",non_qualified:null,image:"1f9d4-1f3fb.png",sheet_x:43,sheet_y:17,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F9D4-1F3FC",non_qualified:null,image:"1f9d4-1f3fc.png",sheet_x:43,sheet_y:18,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F9D4-1F3FD",non_qualified:null,image:"1f9d4-1f3fd.png",sheet_x:43,sheet_y:19,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F9D4-1F3FE",non_qualified:null,image:"1f9d4-1f3fe.png",sheet_x:43,sheet_y:20,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F9D4-1F3FF",non_qualified:null,image:"1f9d4-1f3ff.png",sheet_x:43,sheet_y:21,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"bearded,person"},"flag-mx":{name:"Mexico FLAG",unified:"1F1F2-1F1FD",non_qualified:null,sheet_x:3,sheet_y:37,short_names:["flag-mx"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mx,mexico"},"u6709":{name:"Squared Cjk Unified Ideograph-6709",unified:"1F236",non_qualified:null,sheet_x:5,sheet_y:37,short_names:["u6709"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u6709,squared,cjk,unified,ideograph,6709,orange-square,chinese,have,kanji"},person_with_blond_hair:{name:"Person with Blond Hair",unified:"1F471",non_qualified:null,sheet_x:21,sheet_y:20,short_names:["person_with_blond_hair"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F471-1F3FB",non_qualified:null,image:"1f471-1f3fb.png",sheet_x:21,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F471-1F3FC",non_qualified:null,image:"1f471-1f3fc.png",sheet_x:21,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F471-1F3FD",non_qualified:null,image:"1f471-1f3fd.png",sheet_x:21,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F471-1F3FE",non_qualified:null,image:"1f471-1f3fe.png",sheet_x:21,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F471-1F3FF",non_qualified:null,image:"1f471-1f3ff.png",sheet_x:21,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F471-200D-2642-FE0F",search:"person,with,blond,hair"},waning_crescent_moon:{name:"Waning Crescent Moon Symbol",unified:"1F318",non_qualified:null,sheet_x:6,sheet_y:16,short_names:["waning_crescent_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"waning,crescent,moon,symbol,nature,twilight,planet,space,night,evening,sleep"},"flag-my":{name:"Malaysia FLAG",unified:"1F1F2-1F1FE",non_qualified:null,sheet_x:3,sheet_y:38,short_names:["flag-my"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,my,malaysia"},"u6307":{name:"Squared Cjk Unified Ideograph-6307",unified:"1F22F",non_qualified:null,sheet_x:5,sheet_y:32,short_names:["u6307"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u6307,squared,cjk,unified,ideograph,6307,chinese,point,green-square,kanji"},"blond-haired-man":{name:"Blond Haired Man",unified:"1F471-200D-2642-FE0F",non_qualified:"1F471-200D-2642",sheet_x:21,sheet_y:14,short_names:["blond-haired-man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F471-1F3FB-200D-2642-FE0F",image:"1f471-1f3fb-200d-2642-fe0f.png",sheet_x:21,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F471-1F3FC-200D-2642-FE0F",image:"1f471-1f3fc-200d-2642-fe0f.png",sheet_x:21,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F471-1F3FD-200D-2642-FE0F",image:"1f471-1f3fd-200d-2642-fe0f.png",sheet_x:21,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F471-1F3FE-200D-2642-FE0F",image:"1f471-1f3fe-200d-2642-fe0f.png",sheet_x:21,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F471-1F3FF-200D-2642-FE0F",image:"1f471-1f3ff-200d-2642-fe0f.png",sheet_x:21,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F471",search:"blond,haired,man"},crescent_moon:{name:"Crescent Moon",unified:"1F319",non_qualified:null,sheet_x:6,sheet_y:17,short_names:["crescent_moon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crescent,moon,night,sleep,sky,evening,magic"},"flag-mz":{name:"Mozambique FLAG",unified:"1F1F2-1F1FF",non_qualified:null,sheet_x:3,sheet_y:39,short_names:["flag-mz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,mz,mozambique"},new_moon_with_face:{name:"New Moon with Face",unified:"1F31A",non_qualified:null,sheet_x:6,sheet_y:18,short_names:["new_moon_with_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"new,moon,with,face,nature,twilight,planet,space,night,evening,sleep"},"flag-na":{name:"Namibia FLAG",unified:"1F1F3-1F1E6",non_qualified:null,sheet_x:3,sheet_y:40,short_names:["flag-na"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,na,namibia"},"blond-haired-woman":{name:"Blond Haired Woman",unified:"1F471-200D-2640-FE0F",non_qualified:"1F471-200D-2640",sheet_x:21,sheet_y:8,short_names:["blond-haired-woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F471-1F3FB-200D-2640-FE0F",image:"1f471-1f3fb-200d-2640-fe0f.png",sheet_x:21,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F471-1F3FC-200D-2640-FE0F",image:"1f471-1f3fc-200d-2640-fe0f.png",sheet_x:21,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F471-1F3FD-200D-2640-FE0F",image:"1f471-1f3fd-200d-2640-fe0f.png",sheet_x:21,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F471-1F3FE-200D-2640-FE0F",image:"1f471-1f3fe-200d-2640-fe0f.png",sheet_x:21,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F471-1F3FF-200D-2640-FE0F",image:"1f471-1f3ff-200d-2640-fe0f.png",sheet_x:21,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"blond,haired,woman"},ideograph_advantage:{name:"Circled Ideograph Advantage",unified:"1F250",non_qualified:null,sheet_x:5,sheet_y:42,short_names:["ideograph_advantage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ideograph,advantage,circled,chinese,kanji,obtain,get,circle"},first_quarter_moon_with_face:{name:"First Quarter Moon with Face",unified:"1F31B",non_qualified:null,sheet_x:6,sheet_y:19,short_names:["first_quarter_moon_with_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"first,quarter,moon,with,face,nature,twilight,planet,space,night,evening,sleep"},man_in_tuxedo:{name:"Man in Tuxedo",unified:"1F935",non_qualified:null,sheet_x:39,sheet_y:34,short_names:["man_in_tuxedo"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F935-1F3FB",non_qualified:null,image:"1f935-1f3fb.png",sheet_x:39,sheet_y:35,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F935-1F3FC",non_qualified:null,image:"1f935-1f3fc.png",sheet_x:39,sheet_y:36,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F935-1F3FD",non_qualified:null,image:"1f935-1f3fd.png",sheet_x:39,sheet_y:37,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F935-1F3FE",non_qualified:null,image:"1f935-1f3fe.png",sheet_x:39,sheet_y:38,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F935-1F3FF",non_qualified:null,image:"1f935-1f3ff.png",sheet_x:39,sheet_y:39,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"man,in,tuxedo,couple,marriage,wedding,groom"},"flag-nc":{name:"New Caledonia FLAG",unified:"1F1F3-1F1E8",non_qualified:null,sheet_x:3,sheet_y:41,short_names:["flag-nc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nc,new,caledonia"},"u5272":{name:"Squared Cjk Unified Ideograph-5272",unified:"1F239",non_qualified:null,sheet_x:5,sheet_y:40,short_names:["u5272"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u5272,squared,cjk,unified,ideograph,5272,cut,divide,chinese,kanji,pink-square"},"flag-ne":{name:"Niger FLAG",unified:"1F1F3-1F1EA",non_qualified:null,sheet_x:3,sheet_y:42,short_names:["flag-ne"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ne,niger"},last_quarter_moon_with_face:{name:"Last Quarter Moon with Face",unified:"1F31C",non_qualified:null,sheet_x:6,sheet_y:20,short_names:["last_quarter_moon_with_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"last,quarter,moon,with,face,nature,twilight,planet,space,night,evening,sleep"},"u7121":{name:"Squared Cjk Unified Ideograph-7121",unified:"1F21A",non_qualified:null,sheet_x:5,sheet_y:31,short_names:["u7121"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u7121,squared,cjk,unified,ideograph,7121,nothing,chinese,kanji,japanese,orange-square"},bride_with_veil:{name:"Bride with Veil",unified:"1F470",non_qualified:null,sheet_x:21,sheet_y:2,short_names:["bride_with_veil"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F470-1F3FB",non_qualified:null,image:"1f470-1f3fb.png",sheet_x:21,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F470-1F3FC",non_qualified:null,image:"1f470-1f3fc.png",sheet_x:21,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F470-1F3FD",non_qualified:null,image:"1f470-1f3fd.png",sheet_x:21,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F470-1F3FE",non_qualified:null,image:"1f470-1f3fe.png",sheet_x:21,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F470-1F3FF",non_qualified:null,image:"1f470-1f3ff.png",sheet_x:21,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"bride,with,veil,couple,marriage,wedding,woman"},"u7981":{name:"Squared Cjk Unified Ideograph-7981",unified:"1F232",non_qualified:null,sheet_x:5,sheet_y:33,short_names:["u7981"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u7981,squared,cjk,unified,ideograph,7981,kanji,japanese,chinese,forbidden,limit,restricted,red-square"},pregnant_woman:{name:"Pregnant Woman",unified:"1F930",non_qualified:null,sheet_x:39,sheet_y:4,short_names:["pregnant_woman"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F930-1F3FB",non_qualified:null,image:"1f930-1f3fb.png",sheet_x:39,sheet_y:5,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F930-1F3FC",non_qualified:null,image:"1f930-1f3fc.png",sheet_x:39,sheet_y:6,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F930-1F3FD",non_qualified:null,image:"1f930-1f3fd.png",sheet_x:39,sheet_y:7,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F930-1F3FE",non_qualified:null,image:"1f930-1f3fe.png",sheet_x:39,sheet_y:8,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F930-1F3FF",non_qualified:null,image:"1f930-1f3ff.png",sheet_x:39,sheet_y:9,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"pregnant,woman,baby"},thermometer:{name:"Thermometer",unified:"1F321-FE0F",non_qualified:"1F321",sheet_x:6,sheet_y:25,short_names:["thermometer"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"thermometer,weather,temperature,hot,cold"},"flag-nf":{name:"Norfolk Island FLAG",unified:"1F1F3-1F1EB",non_qualified:null,sheet_x:3,sheet_y:43,short_names:["flag-nf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nf,norfolk,island"},sunny:{name:"Black Sun with Rays",unified:"2600-FE0F",non_qualified:"2600",sheet_x:47,sheet_y:16,short_names:["sunny"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"sunny,black,sun,with,rays,weather,nature,brightness,summer,beach,spring"},accept:{name:"Circled Ideograph Accept",unified:"1F251",non_qualified:null,sheet_x:5,sheet_y:43,short_names:["accept"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"accept,circled,ideograph,ok,good,chinese,kanji,agree,yes,orange-circle"},"flag-ng":{name:"Nigeria FLAG",unified:"1F1F3-1F1EC",non_qualified:null,sheet_x:3,sheet_y:44,short_names:["flag-ng"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ng,nigeria"},"breast-feeding":{name:"Breast-Feeding",unified:"1F931",non_qualified:null,sheet_x:39,sheet_y:10,short_names:["breast-feeding"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F931-1F3FB",non_qualified:null,image:"1f931-1f3fb.png",sheet_x:39,sheet_y:11,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F931-1F3FC",non_qualified:null,image:"1f931-1f3fc.png",sheet_x:39,sheet_y:12,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F931-1F3FD",non_qualified:null,image:"1f931-1f3fd.png",sheet_x:39,sheet_y:13,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F931-1F3FE",non_qualified:null,image:"1f931-1f3fe.png",sheet_x:39,sheet_y:14,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F931-1F3FF",non_qualified:null,image:"1f931-1f3ff.png",sheet_x:39,sheet_y:15,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"breast,feeding"},full_moon_with_face:{name:"Full Moon with Face",unified:"1F31D",non_qualified:null,sheet_x:6,sheet_y:21,short_names:["full_moon_with_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"full,moon,with,face,nature,twilight,planet,space,night,evening,sleep"},"flag-ni":{name:"Nicaragua FLAG",unified:"1F1F3-1F1EE",non_qualified:null,sheet_x:3,sheet_y:45,short_names:["flag-ni"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ni,nicaragua"},"u7533":{name:"Squared Cjk Unified Ideograph-7533",unified:"1F238",non_qualified:null,sheet_x:5,sheet_y:39,short_names:["u7533"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u7533,squared,cjk,unified,ideograph,7533,chinese,japanese,kanji,orange-square"},angel:{name:"Baby Angel",unified:"1F47C",non_qualified:null,sheet_x:22,sheet_y:43,short_names:["angel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F47C-1F3FB",non_qualified:null,image:"1f47c-1f3fb.png",sheet_x:22,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F47C-1F3FC",non_qualified:null,image:"1f47c-1f3fc.png",sheet_x:22,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F47C-1F3FD",non_qualified:null,image:"1f47c-1f3fd.png",sheet_x:22,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F47C-1F3FE",non_qualified:null,image:"1f47c-1f3fe.png",sheet_x:22,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F47C-1F3FF",non_qualified:null,image:"1f47c-1f3ff.png",sheet_x:22,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"angel,baby,heaven,wings,halo"},sun_with_face:{name:"Sun with Face",unified:"1F31E",non_qualified:null,sheet_x:6,sheet_y:22,short_names:["sun_with_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sun,with,face,nature,morning,sky"},santa:{name:"Father Christmas",unified:"1F385",non_qualified:null,sheet_x:8,sheet_y:19,short_names:["santa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F385-1F3FB",non_qualified:null,image:"1f385-1f3fb.png",sheet_x:8,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F385-1F3FC",non_qualified:null,image:"1f385-1f3fc.png",sheet_x:8,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F385-1F3FD",non_qualified:null,image:"1f385-1f3fd.png",sheet_x:8,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F385-1F3FE",non_qualified:null,image:"1f385-1f3fe.png",sheet_x:8,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F385-1F3FF",non_qualified:null,image:"1f385-1f3ff.png",sheet_x:8,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"santa,father,christmas,festival,man,male,xmas,father christmas"},"u5408":{name:"Squared Cjk Unified Ideograph-5408",unified:"1F234",non_qualified:null,sheet_x:5,sheet_y:35,short_names:["u5408"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u5408,squared,cjk,unified,ideograph,5408,japanese,chinese,join,kanji,red-square"},"flag-nl":{name:"Netherlands FLAG",unified:"1F1F3-1F1F1",non_qualified:null,sheet_x:3,sheet_y:46,short_names:["flag-nl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nl,netherlands"},mrs_claus:{name:"Mother Christmas",unified:"1F936",non_qualified:null,sheet_x:39,sheet_y:40,short_names:["mrs_claus","mother_christmas"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F936-1F3FB",non_qualified:null,image:"1f936-1f3fb.png",sheet_x:39,sheet_y:41,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F936-1F3FC",non_qualified:null,image:"1f936-1f3fc.png",sheet_x:39,sheet_y:42,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F936-1F3FD",non_qualified:null,image:"1f936-1f3fd.png",sheet_x:39,sheet_y:43,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F936-1F3FE",non_qualified:null,image:"1f936-1f3fe.png",sheet_x:39,sheet_y:44,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F936-1F3FF",non_qualified:null,image:"1f936-1f3ff.png",sheet_x:39,sheet_y:45,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"mrs,claus,mother,christmas,woman,female,xmas,mother christmas"},"u7a7a":{name:"Squared Cjk Unified Ideograph-7a7a",unified:"1F233",non_qualified:null,sheet_x:5,sheet_y:34,short_names:["u7a7a"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u7a7a,squared,cjk,unified,ideograph,7a7a,kanji,japanese,chinese,empty,sky,blue-square"},star:{name:"White Medium Star",unified:"2B50",non_qualified:null,sheet_x:50,sheet_y:22,short_names:["star"],text:"",added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"star,white,medium,night,yellow"},"flag-no":{name:"Norway FLAG",unified:"1F1F3-1F1F4",non_qualified:null,sheet_x:3,sheet_y:47,short_names:["flag-no"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,no,norway"},mage:{name:"Mage",unified:"1F9D9",non_qualified:null,sheet_x:44,sheet_y:42,short_names:["mage"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D9-1F3FB",non_qualified:null,image:"1f9d9-1f3fb.png",sheet_x:44,sheet_y:43,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D9-1F3FB-200D-2640-FE0F"},"1F3FC":{unified:"1F9D9-1F3FC",non_qualified:null,image:"1f9d9-1f3fc.png",sheet_x:44,sheet_y:44,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D9-1F3FC-200D-2640-FE0F"},"1F3FD":{unified:"1F9D9-1F3FD",non_qualified:null,image:"1f9d9-1f3fd.png",sheet_x:44,sheet_y:45,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D9-1F3FD-200D-2640-FE0F"},"1F3FE":{unified:"1F9D9-1F3FE",non_qualified:null,image:"1f9d9-1f3fe.png",sheet_x:44,sheet_y:46,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D9-1F3FE-200D-2640-FE0F"},"1F3FF":{unified:"1F9D9-1F3FF",non_qualified:null,image:"1f9d9-1f3ff.png",sheet_x:44,sheet_y:47,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D9-1F3FF-200D-2640-FE0F"}},obsoleted_by:"1F9D9-200D-2640-FE0F",search:"mage"},"star2":{name:"Glowing Star",unified:"1F31F",non_qualified:null,sheet_x:6,sheet_y:23,short_names:["star2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"star2,glowing,star,night,sparkle,awesome,good,magic"},"flag-np":{name:"Nepal FLAG",unified:"1F1F3-1F1F5",non_qualified:null,sheet_x:3,sheet_y:48,short_names:["flag-np"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,np,nepal"},congratulations:{name:"Circled Ideograph Congratulation",unified:"3297-FE0F",non_qualified:"3297",sheet_x:50,sheet_y:26,short_names:["congratulations"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"congratulations,circled,ideograph,congratulation,chinese,kanji,japanese,red-circle"},"flag-nr":{name:"Nauru FLAG",unified:"1F1F3-1F1F7",non_qualified:null,sheet_x:3,sheet_y:49,short_names:["flag-nr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nr,nauru"},stars:{name:"Shooting Star",unified:"1F320",non_qualified:null,sheet_x:6,sheet_y:24,short_names:["stars"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"stars,shooting,star,night,photo"},female_mage:{name:"Female Mage",unified:"1F9D9-200D-2640-FE0F",non_qualified:"1F9D9-200D-2640",sheet_x:44,sheet_y:30,short_names:["female_mage"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D9-1F3FB-200D-2640-FE0F",image:"1f9d9-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:31,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D9-1F3FB"},"1F3FC":{unified:"1F9D9-1F3FC-200D-2640-FE0F",image:"1f9d9-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:32,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D9-1F3FC"},"1F3FD":{unified:"1F9D9-1F3FD-200D-2640-FE0F",image:"1f9d9-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:33,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D9-1F3FD"},"1F3FE":{unified:"1F9D9-1F3FE-200D-2640-FE0F",image:"1f9d9-1f3fe-200d-2640-fe0f.png",sheet_x:44,sheet_y:34,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D9-1F3FE"},"1F3FF":{unified:"1F9D9-1F3FF-200D-2640-FE0F",image:"1f9d9-1f3ff-200d-2640-fe0f.png",sheet_x:44,sheet_y:35,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D9-1F3FF"}},obsoletes:"1F9D9",search:"female,mage"},secret:{name:"Circled Ideograph Secret",unified:"3299-FE0F",non_qualified:"3299",sheet_x:50,sheet_y:27,short_names:["secret"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"secret,circled,ideograph,privacy,chinese,sshh,kanji,red-circle"},"flag-nu":{name:"Niue FLAG",unified:"1F1F3-1F1FA",non_qualified:null,sheet_x:3,sheet_y:50,short_names:["flag-nu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nu,niue"},"u55b6":{name:"Squared Cjk Unified Ideograph-55b6",unified:"1F23A",non_qualified:null,sheet_x:5,sheet_y:41,short_names:["u55b6"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u55b6,squared,cjk,unified,ideograph,55b6,japanese,opening hours,orange-square"},male_mage:{name:"Male Mage",unified:"1F9D9-200D-2642-FE0F",non_qualified:"1F9D9-200D-2642",sheet_x:44,sheet_y:36,short_names:["male_mage"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D9-1F3FB-200D-2642-FE0F",image:"1f9d9-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:37,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F9D9-1F3FC-200D-2642-FE0F",image:"1f9d9-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:38,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F9D9-1F3FD-200D-2642-FE0F",image:"1f9d9-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:39,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F9D9-1F3FE-200D-2642-FE0F",image:"1f9d9-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:40,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F9D9-1F3FF-200D-2642-FE0F",image:"1f9d9-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:41,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"male,mage"},cloud:{name:"Cloud",unified:"2601-FE0F",non_qualified:"2601",sheet_x:47,sheet_y:17,short_names:["cloud"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"cloud,weather,sky"},"flag-nz":{name:"New Zealand FLAG",unified:"1F1F3-1F1FF",non_qualified:null,sheet_x:3,sheet_y:51,short_names:["flag-nz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,nz,new,zealand"},partly_sunny:{name:"Sun Behind Cloud",unified:"26C5",non_qualified:null,sheet_x:48,sheet_y:29,short_names:["partly_sunny"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"partly,sunny,sun,behind,cloud,weather,nature,cloudy,morning,fall,spring"},fairy:{name:"Fairy",unified:"1F9DA",non_qualified:null,sheet_x:45,sheet_y:8,short_names:["fairy"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DA-1F3FB",non_qualified:null,image:"1f9da-1f3fb.png",sheet_x:45,sheet_y:9,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoleted_by:"1F9DA-1F3FB-200D-2640-FE0F"},"1F3FC":{unified:"1F9DA-1F3FC",non_qualified:null,image:"1f9da-1f3fc.png",sheet_x:45,sheet_y:10,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoleted_by:"1F9DA-1F3FC-200D-2640-FE0F"},"1F3FD":{unified:"1F9DA-1F3FD",non_qualified:null,image:"1f9da-1f3fd.png",sheet_x:45,sheet_y:11,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoleted_by:"1F9DA-1F3FD-200D-2640-FE0F"},"1F3FE":{unified:"1F9DA-1F3FE",non_qualified:null,image:"1f9da-1f3fe.png",sheet_x:45,sheet_y:12,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoleted_by:"1F9DA-1F3FE-200D-2640-FE0F"},"1F3FF":{unified:"1F9DA-1F3FF",non_qualified:null,image:"1f9da-1f3ff.png",sheet_x:45,sheet_y:13,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoleted_by:"1F9DA-1F3FF-200D-2640-FE0F"}},obsoleted_by:"1F9DA-200D-2640-FE0F",search:"fairy"},"u6e80":{name:"Squared Cjk Unified Ideograph-6e80",unified:"1F235",non_qualified:null,sheet_x:5,sheet_y:36,short_names:["u6e80"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"u6e80,squared,cjk,unified,ideograph,6e80,full,chinese,japanese,red-square,kanji"},black_small_square:{name:"Black Small Square",unified:"25AA-FE0F",non_qualified:"25AA",sheet_x:47,sheet_y:8,short_names:["black_small_square"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"black,small,square,shape,icon"},thunder_cloud_and_rain:{name:"Thunder Cloud and Rain",unified:"26C8-FE0F",non_qualified:"26C8",sheet_x:48,sheet_y:30,short_names:["thunder_cloud_and_rain"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"thunder,cloud,and,rain"},female_fairy:{name:"Female Fairy",unified:"1F9DA-200D-2640-FE0F",non_qualified:"1F9DA-200D-2640",sheet_x:44,sheet_y:48,short_names:["female_fairy"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DA-1F3FB-200D-2640-FE0F",image:"1f9da-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:49,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DA-1F3FB"},"1F3FC":{unified:"1F9DA-1F3FC-200D-2640-FE0F",image:"1f9da-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:50,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DA-1F3FC"},"1F3FD":{unified:"1F9DA-1F3FD-200D-2640-FE0F",image:"1f9da-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:51,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DA-1F3FD"},"1F3FE":{unified:"1F9DA-1F3FE-200D-2640-FE0F",image:"1f9da-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:0,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DA-1F3FE"},"1F3FF":{unified:"1F9DA-1F3FF-200D-2640-FE0F",image:"1f9da-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:1,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DA-1F3FF"}},obsoletes:"1F9DA",search:"female,fairy"},"flag-om":{name:"Oman FLAG",unified:"1F1F4-1F1F2",non_qualified:null,sheet_x:4,sheet_y:0,short_names:["flag-om"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,om,oman"},white_small_square:{name:"White Small Square",unified:"25AB-FE0F",non_qualified:"25AB",sheet_x:47,sheet_y:9,short_names:["white_small_square"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"white,small,square,shape,icon"},"flag-pa":{name:"Panama FLAG",unified:"1F1F5-1F1E6",non_qualified:null,sheet_x:4,sheet_y:1,short_names:["flag-pa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pa,panama"},mostly_sunny:{name:"Mostly Sunny",unified:"1F324-FE0F",non_qualified:"1F324",sheet_x:6,sheet_y:26,short_names:["mostly_sunny","sun_small_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"mostly,sunny,sun,small,cloud"},male_fairy:{name:"Male Fairy",unified:"1F9DA-200D-2642-FE0F",non_qualified:"1F9DA-200D-2642",sheet_x:45,sheet_y:2,short_names:["male_fairy"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DA-1F3FB-200D-2642-FE0F",image:"1f9da-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:3,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F9DA-1F3FC-200D-2642-FE0F",image:"1f9da-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:4,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F9DA-1F3FD-200D-2642-FE0F",image:"1f9da-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:5,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F9DA-1F3FE-200D-2642-FE0F",image:"1f9da-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:6,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F9DA-1F3FF-200D-2642-FE0F",image:"1f9da-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:7,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"male,fairy"},barely_sunny:{name:"Barely Sunny",unified:"1F325-FE0F",non_qualified:"1F325",sheet_x:6,sheet_y:27,short_names:["barely_sunny","sun_behind_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"barely,sunny,sun,behind,cloud"},white_medium_square:{name:"White Medium Square",unified:"25FB-FE0F",non_qualified:"25FB",sheet_x:47,sheet_y:12,short_names:["white_medium_square"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"white,medium,square,shape,stone,icon"},"flag-pe":{name:"Peru FLAG",unified:"1F1F5-1F1EA",non_qualified:null,sheet_x:4,sheet_y:2,short_names:["flag-pe"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pe,peru"},vampire:{name:"Vampire",unified:"1F9DB",non_qualified:null,sheet_x:45,sheet_y:26,short_names:["vampire"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DB-1F3FB",non_qualified:null,image:"1f9db-1f3fb.png",sheet_x:45,sheet_y:27,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoleted_by:"1F9DB-1F3FB-200D-2640-FE0F"},"1F3FC":{unified:"1F9DB-1F3FC",non_qualified:null,image:"1f9db-1f3fc.png",sheet_x:45,sheet_y:28,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoleted_by:"1F9DB-1F3FC-200D-2640-FE0F"},"1F3FD":{unified:"1F9DB-1F3FD",non_qualified:null,image:"1f9db-1f3fd.png",sheet_x:45,sheet_y:29,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoleted_by:"1F9DB-1F3FD-200D-2640-FE0F"},"1F3FE":{unified:"1F9DB-1F3FE",non_qualified:null,image:"1f9db-1f3fe.png",sheet_x:45,sheet_y:30,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoleted_by:"1F9DB-1F3FE-200D-2640-FE0F"},"1F3FF":{unified:"1F9DB-1F3FF",non_qualified:null,image:"1f9db-1f3ff.png",sheet_x:45,sheet_y:31,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoleted_by:"1F9DB-1F3FF-200D-2640-FE0F"}},obsoleted_by:"1F9DB-200D-2640-FE0F",search:"vampire"},female_vampire:{name:"Female Vampire",unified:"1F9DB-200D-2640-FE0F",non_qualified:"1F9DB-200D-2640",sheet_x:45,sheet_y:14,short_names:["female_vampire"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DB-1F3FB-200D-2640-FE0F",image:"1f9db-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:15,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DB-1F3FB"},"1F3FC":{unified:"1F9DB-1F3FC-200D-2640-FE0F",image:"1f9db-1f3fc-200d-2640-fe0f.png",sheet_x:45,sheet_y:16,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DB-1F3FC"},"1F3FD":{unified:"1F9DB-1F3FD-200D-2640-FE0F",image:"1f9db-1f3fd-200d-2640-fe0f.png",sheet_x:45,sheet_y:17,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DB-1F3FD"},"1F3FE":{unified:"1F9DB-1F3FE-200D-2640-FE0F",image:"1f9db-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:18,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DB-1F3FE"},"1F3FF":{unified:"1F9DB-1F3FF-200D-2640-FE0F",image:"1f9db-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:19,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DB-1F3FF"}},obsoletes:"1F9DB",search:"female,vampire"},partly_sunny_rain:{name:"Partly Sunny Rain",unified:"1F326-FE0F",non_qualified:"1F326",sheet_x:6,sheet_y:28,short_names:["partly_sunny_rain","sun_behind_rain_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"partly,sunny,rain,sun,behind,cloud"},"flag-pf":{name:"French Polynesia FLAG",unified:"1F1F5-1F1EB",non_qualified:null,sheet_x:4,sheet_y:3,short_names:["flag-pf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pf,french,polynesia"},black_medium_square:{name:"Black Medium Square",unified:"25FC-FE0F",non_qualified:"25FC",sheet_x:47,sheet_y:13,short_names:["black_medium_square"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"black,medium,square,shape,button,icon"},white_medium_small_square:{name:"White Medium Small Square",unified:"25FD",non_qualified:null,sheet_x:47,sheet_y:14,short_names:["white_medium_small_square"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,medium,small,square,shape,stone,icon,button"},rain_cloud:{name:"Rain Cloud",unified:"1F327-FE0F",non_qualified:"1F327",sheet_x:6,sheet_y:29,short_names:["rain_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"rain,cloud"},"flag-pg":{name:"Papua New Guinea FLAG",unified:"1F1F5-1F1EC",non_qualified:null,sheet_x:4,sheet_y:4,short_names:["flag-pg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pg,papua,new,guinea"},male_vampire:{name:"Male Vampire",unified:"1F9DB-200D-2642-FE0F",non_qualified:"1F9DB-200D-2642",sheet_x:45,sheet_y:20,short_names:["male_vampire"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DB-1F3FB-200D-2642-FE0F",image:"1f9db-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:21,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F9DB-1F3FC-200D-2642-FE0F",image:"1f9db-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:22,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F9DB-1F3FD-200D-2642-FE0F",image:"1f9db-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:23,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F9DB-1F3FE-200D-2642-FE0F",image:"1f9db-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:24,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F9DB-1F3FF-200D-2642-FE0F",image:"1f9db-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:25,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"male,vampire"},"flag-ph":{name:"Philippines FLAG",unified:"1F1F5-1F1ED",non_qualified:null,sheet_x:4,sheet_y:5,short_names:["flag-ph"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ph,philippines"},merperson:{name:"Merperson",unified:"1F9DC",non_qualified:null,sheet_x:45,sheet_y:44,short_names:["merperson"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DC-1F3FB",non_qualified:null,image:"1f9dc-1f3fb.png",sheet_x:45,sheet_y:45,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DC-1F3FB-200D-2642-FE0F"},"1F3FC":{unified:"1F9DC-1F3FC",non_qualified:null,image:"1f9dc-1f3fc.png",sheet_x:45,sheet_y:46,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DC-1F3FC-200D-2642-FE0F"},"1F3FD":{unified:"1F9DC-1F3FD",non_qualified:null,image:"1f9dc-1f3fd.png",sheet_x:45,sheet_y:47,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DC-1F3FD-200D-2642-FE0F"},"1F3FE":{unified:"1F9DC-1F3FE",non_qualified:null,image:"1f9dc-1f3fe.png",sheet_x:45,sheet_y:48,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DC-1F3FE-200D-2642-FE0F"},"1F3FF":{unified:"1F9DC-1F3FF",non_qualified:null,image:"1f9dc-1f3ff.png",sheet_x:45,sheet_y:49,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DC-1F3FF-200D-2642-FE0F"}},obsoleted_by:"1F9DC-200D-2642-FE0F",search:"merperson"},black_medium_small_square:{name:"Black Medium Small Square",unified:"25FE",non_qualified:null,sheet_x:47,sheet_y:15,short_names:["black_medium_small_square"],text:"",added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,medium,small,square,icon,shape,button"},snow_cloud:{name:"Snow Cloud",unified:"1F328-FE0F",non_qualified:"1F328",sheet_x:6,sheet_y:30,short_names:["snow_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"snow,cloud"},lightning:{name:"Lightning",unified:"1F329-FE0F",non_qualified:"1F329",sheet_x:6,sheet_y:31,short_names:["lightning","lightning_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"lightning,cloud"},black_large_square:{name:"Black Large Square",unified:"2B1B",non_qualified:null,sheet_x:50,sheet_y:20,short_names:["black_large_square"],text:"",added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,large,square,shape,icon,button"},mermaid:{name:"Mermaid",unified:"1F9DC-200D-2640-FE0F",non_qualified:"1F9DC-200D-2640",sheet_x:45,sheet_y:32,short_names:["mermaid"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DC-1F3FB-200D-2640-FE0F",image:"1f9dc-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:33,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F9DC-1F3FC-200D-2640-FE0F",image:"1f9dc-1f3fc-200d-2640-fe0f.png",sheet_x:45,sheet_y:34,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F9DC-1F3FD-200D-2640-FE0F",image:"1f9dc-1f3fd-200d-2640-fe0f.png",sheet_x:45,sheet_y:35,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F9DC-1F3FE-200D-2640-FE0F",image:"1f9dc-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:36,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F9DC-1F3FF-200D-2640-FE0F",image:"1f9dc-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:37,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"mermaid"},"flag-pk":{name:"Pakistan FLAG",unified:"1F1F5-1F1F0",non_qualified:null,sheet_x:4,sheet_y:6,short_names:["flag-pk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pk,pakistan"},merman:{name:"Merman",unified:"1F9DC-200D-2642-FE0F",non_qualified:"1F9DC-200D-2642",sheet_x:45,sheet_y:38,short_names:["merman"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DC-1F3FB-200D-2642-FE0F",image:"1f9dc-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:39,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DC-1F3FB"},"1F3FC":{unified:"1F9DC-1F3FC-200D-2642-FE0F",image:"1f9dc-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:40,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DC-1F3FC"},"1F3FD":{unified:"1F9DC-1F3FD-200D-2642-FE0F",image:"1f9dc-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:41,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DC-1F3FD"},"1F3FE":{unified:"1F9DC-1F3FE-200D-2642-FE0F",image:"1f9dc-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:42,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DC-1F3FE"},"1F3FF":{unified:"1F9DC-1F3FF-200D-2642-FE0F",image:"1f9dc-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:43,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DC-1F3FF"}},obsoletes:"1F9DC",search:"merman"},white_large_square:{name:"White Large Square",unified:"2B1C",non_qualified:null,sheet_x:50,sheet_y:21,short_names:["white_large_square"],text:"",added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,large,square,shape,icon,stone,button"},tornado:{name:"Tornado",unified:"1F32A-FE0F",non_qualified:"1F32A",sheet_x:6,sheet_y:32,short_names:["tornado","tornado_cloud"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"tornado,cloud,weather,cyclone,twister"},"flag-pl":{name:"Poland FLAG",unified:"1F1F5-1F1F1",non_qualified:null,sheet_x:4,sheet_y:7,short_names:["flag-pl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pl,poland"},elf:{name:"Elf",unified:"1F9DD",non_qualified:null,sheet_x:46,sheet_y:10,short_names:["elf"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DD-1F3FB",non_qualified:null,image:"1f9dd-1f3fb.png",sheet_x:46,sheet_y:11,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DD-1F3FB-200D-2642-FE0F"},"1F3FC":{unified:"1F9DD-1F3FC",non_qualified:null,image:"1f9dd-1f3fc.png",sheet_x:46,sheet_y:12,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DD-1F3FC-200D-2642-FE0F"},"1F3FD":{unified:"1F9DD-1F3FD",non_qualified:null,image:"1f9dd-1f3fd.png",sheet_x:46,sheet_y:13,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DD-1F3FD-200D-2642-FE0F"},"1F3FE":{unified:"1F9DD-1F3FE",non_qualified:null,image:"1f9dd-1f3fe.png",sheet_x:46,sheet_y:14,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DD-1F3FE-200D-2642-FE0F"},"1F3FF":{unified:"1F9DD-1F3FF",non_qualified:null,image:"1f9dd-1f3ff.png",sheet_x:46,sheet_y:15,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DD-1F3FF-200D-2642-FE0F"}},obsoleted_by:"1F9DD-200D-2642-FE0F",search:"elf"},fog:{name:"Fog",unified:"1F32B-FE0F",non_qualified:"1F32B",sheet_x:6,sheet_y:33,short_names:["fog"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"fog,weather"},large_orange_diamond:{name:"Large Orange Diamond",unified:"1F536",non_qualified:null,sheet_x:28,sheet_y:4,short_names:["large_orange_diamond"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"large,orange,diamond,shape,jewel,gem"},"flag-pm":{name:"St. Pierre & Miquelon FLAG",unified:"1F1F5-1F1F2",non_qualified:null,sheet_x:4,sheet_y:8,short_names:["flag-pm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pm,st.,pierre,&,miquelon"},"flag-pn":{name:"Pitcairn Islands FLAG",unified:"1F1F5-1F1F3",non_qualified:null,sheet_x:4,sheet_y:9,short_names:["flag-pn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pn,pitcairn,islands"},wind_blowing_face:{name:"Wind Blowing Face",unified:"1F32C-FE0F",non_qualified:"1F32C",sheet_x:6,sheet_y:34,short_names:["wind_blowing_face"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"wind,blowing,face"},female_elf:{name:"Female Elf",unified:"1F9DD-200D-2640-FE0F",non_qualified:"1F9DD-200D-2640",sheet_x:45,sheet_y:50,short_names:["female_elf"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DD-1F3FB-200D-2640-FE0F",image:"1f9dd-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:51,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F9DD-1F3FC-200D-2640-FE0F",image:"1f9dd-1f3fc-200d-2640-fe0f.png",sheet_x:46,sheet_y:0,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F9DD-1F3FD-200D-2640-FE0F",image:"1f9dd-1f3fd-200d-2640-fe0f.png",sheet_x:46,sheet_y:1,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F9DD-1F3FE-200D-2640-FE0F",image:"1f9dd-1f3fe-200d-2640-fe0f.png",sheet_x:46,sheet_y:2,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F9DD-1F3FF-200D-2640-FE0F",image:"1f9dd-1f3ff-200d-2640-fe0f.png",sheet_x:46,sheet_y:3,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"female,elf"},large_blue_diamond:{name:"Large Blue Diamond",unified:"1F537",non_qualified:null,sheet_x:28,sheet_y:5,short_names:["large_blue_diamond"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"large,blue,diamond,shape,jewel,gem"},male_elf:{name:"Male Elf",unified:"1F9DD-200D-2642-FE0F",non_qualified:"1F9DD-200D-2642",sheet_x:46,sheet_y:4,short_names:["male_elf"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9DD-1F3FB-200D-2642-FE0F",image:"1f9dd-1f3fb-200d-2642-fe0f.png",sheet_x:46,sheet_y:5,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DD-1F3FB"},"1F3FC":{unified:"1F9DD-1F3FC-200D-2642-FE0F",image:"1f9dd-1f3fc-200d-2642-fe0f.png",sheet_x:46,sheet_y:6,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DD-1F3FC"},"1F3FD":{unified:"1F9DD-1F3FD-200D-2642-FE0F",image:"1f9dd-1f3fd-200d-2642-fe0f.png",sheet_x:46,sheet_y:7,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DD-1F3FD"},"1F3FE":{unified:"1F9DD-1F3FE-200D-2642-FE0F",image:"1f9dd-1f3fe-200d-2642-fe0f.png",sheet_x:46,sheet_y:8,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DD-1F3FE"},"1F3FF":{unified:"1F9DD-1F3FF-200D-2642-FE0F",image:"1f9dd-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:9,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9DD-1F3FF"}},obsoletes:"1F9DD",search:"male,elf"},small_orange_diamond:{name:"Small Orange Diamond",unified:"1F538",non_qualified:null,sheet_x:28,sheet_y:6,short_names:["small_orange_diamond"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"small,orange,diamond,shape,jewel,gem"},"flag-pr":{name:"Puerto Rico FLAG",unified:"1F1F5-1F1F7",non_qualified:null,sheet_x:4,sheet_y:10,short_names:["flag-pr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pr,puerto,rico"},cyclone:{name:"Cyclone",unified:"1F300",non_qualified:null,sheet_x:5,sheet_y:44,short_names:["cyclone"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cyclone,weather,swirl,blue,cloud,vortex,spiral,whirlpool,spin,tornado,hurricane,typhoon"},rainbow:{name:"Rainbow",unified:"1F308",non_qualified:null,sheet_x:6,sheet_y:0,short_names:["rainbow"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"rainbow,nature,happy,unicorn_face,photo,sky,spring"},small_blue_diamond:{name:"Small Blue Diamond",unified:"1F539",non_qualified:null,sheet_x:28,sheet_y:7,short_names:["small_blue_diamond"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"small,blue,diamond,shape,jewel,gem"},genie:{name:"Genie",unified:"1F9DE",non_qualified:null,sheet_x:46,sheet_y:18,short_names:["genie"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DE-200D-2642-FE0F",search:"genie"},"flag-ps":{name:"Palestinian Territories FLAG",unified:"1F1F5-1F1F8",non_qualified:null,sheet_x:4,sheet_y:11,short_names:["flag-ps"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ps,palestinian,territories"},small_red_triangle:{name:"Up-Pointing Red Triangle",unified:"1F53A",non_qualified:null,sheet_x:28,sheet_y:8,short_names:["small_red_triangle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"small,red,triangle,up,pointing,shape,direction,top"},closed_umbrella:{name:"Closed Umbrella",unified:"1F302",non_qualified:null,sheet_x:5,sheet_y:46,short_names:["closed_umbrella"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"closed,umbrella,weather,rain,drizzle"},female_genie:{name:"Female Genie",unified:"1F9DE-200D-2640-FE0F",non_qualified:"1F9DE-200D-2640",sheet_x:46,sheet_y:16,short_names:["female_genie"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"female,genie"},"flag-pt":{name:"Portugal FLAG",unified:"1F1F5-1F1F9",non_qualified:null,sheet_x:4,sheet_y:12,short_names:["flag-pt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pt,portugal"},"flag-pw":{name:"Palau FLAG",unified:"1F1F5-1F1FC",non_qualified:null,sheet_x:4,sheet_y:13,short_names:["flag-pw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,pw,palau"},small_red_triangle_down:{name:"Down-Pointing Red Triangle",unified:"1F53B",non_qualified:null,sheet_x:28,sheet_y:9,short_names:["small_red_triangle_down"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"small,red,triangle,down,pointing,shape,direction,bottom"},umbrella:{name:"Umbrella",unified:"2602-FE0F",non_qualified:"2602",sheet_x:47,sheet_y:18,short_names:["umbrella"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"umbrella,rainy,weather,spring"},male_genie:{name:"Male Genie",unified:"1F9DE-200D-2642-FE0F",non_qualified:"1F9DE-200D-2642",sheet_x:46,sheet_y:17,short_names:["male_genie"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoletes:"1F9DE",search:"male,genie"},zombie:{name:"Zombie",unified:"1F9DF",non_qualified:null,sheet_x:46,sheet_y:21,short_names:["zombie"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9DF-200D-2642-FE0F",search:"zombie"},"flag-py":{name:"Paraguay FLAG",unified:"1F1F5-1F1FE",non_qualified:null,sheet_x:4,sheet_y:14,short_names:["flag-py"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,py,paraguay"},diamond_shape_with_a_dot_inside:{name:"Diamond Shape with a Dot Inside",unified:"1F4A0",non_qualified:null,sheet_x:25,sheet_y:6,short_names:["diamond_shape_with_a_dot_inside"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"diamond,shape,with,a,dot,inside,jewel,blue,gem,crystal,fancy"},umbrella_with_rain_drops:{name:"Umbrella with Rain Drops",unified:"2614",non_qualified:null,sheet_x:47,sheet_y:23,short_names:["umbrella_with_rain_drops"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"umbrella,with,rain,drops"},radio_button:{name:"Radio Button",unified:"1F518",non_qualified:null,sheet_x:27,sheet_y:26,short_names:["radio_button"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"radio,button,input,old,music,circle"},female_zombie:{name:"Female Zombie",unified:"1F9DF-200D-2640-FE0F",non_qualified:"1F9DF-200D-2640",sheet_x:46,sheet_y:19,short_names:["female_zombie"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"female,zombie"},"flag-qa":{name:"Qatar FLAG",unified:"1F1F6-1F1E6",non_qualified:null,sheet_x:4,sheet_y:15,short_names:["flag-qa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,qa,qatar"},umbrella_on_ground:{name:"Umbrella on Ground",unified:"26F1-FE0F",non_qualified:"26F1",sheet_x:48,sheet_y:39,short_names:["umbrella_on_ground"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"umbrella,on,ground"},black_square_button:{name:"Black Square Button",unified:"1F532",non_qualified:null,sheet_x:28,sheet_y:0,short_names:["black_square_button"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,square,button,shape,input,frame"},zap:{name:"High Voltage Sign",unified:"26A1",non_qualified:null,sheet_x:48,sheet_y:21,short_names:["zap"],text:"",added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"zap,high,voltage,sign,thunder,weather,lightning bolt,fast"},male_zombie:{name:"Male Zombie",unified:"1F9DF-200D-2642-FE0F",non_qualified:"1F9DF-200D-2642",sheet_x:46,sheet_y:20,short_names:["male_zombie"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoletes:"1F9DF",search:"male,zombie"},"flag-re":{name:"Réunion FLAG",unified:"1F1F7-1F1EA",non_qualified:null,sheet_x:4,sheet_y:16,short_names:["flag-re"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,re,réunion"},"flag-ro":{name:"Romania FLAG",unified:"1F1F7-1F1F4",non_qualified:null,sheet_x:4,sheet_y:17,short_names:["flag-ro"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ro,romania"},snowflake:{name:"Snowflake",unified:"2744-FE0F",non_qualified:"2744",sheet_x:49,sheet_y:51,short_names:["snowflake"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"snowflake,winter,season,cold,weather,christmas,xmas"},white_square_button:{name:"White Square Button",unified:"1F533",non_qualified:null,sheet_x:28,sheet_y:1,short_names:["white_square_button"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,square,button,shape,input"},person_frowning:{name:"Person Frowning",unified:"1F64D",non_qualified:null,sheet_x:33,sheet_y:30,short_names:["person_frowning"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64D-1F3FB",non_qualified:null,image:"1f64d-1f3fb.png",sheet_x:33,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F64D-1F3FC",non_qualified:null,image:"1f64d-1f3fc.png",sheet_x:33,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F64D-1F3FD",non_qualified:null,image:"1f64d-1f3fd.png",sheet_x:33,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F64D-1F3FE",non_qualified:null,image:"1f64d-1f3fe.png",sheet_x:33,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F64D-1F3FF",non_qualified:null,image:"1f64d-1f3ff.png",sheet_x:33,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F64D-200D-2640-FE0F",search:"person,frowning"},"flag-rs":{name:"Serbia FLAG",unified:"1F1F7-1F1F8",non_qualified:null,sheet_x:4,sheet_y:18,short_names:["flag-rs"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,rs,serbia"},"man-frowning":{name:"Man Frowning",unified:"1F64D-200D-2642-FE0F",non_qualified:"1F64D-200D-2642",sheet_x:33,sheet_y:24,short_names:["man-frowning"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64D-1F3FB-200D-2642-FE0F",image:"1f64d-1f3fb-200d-2642-fe0f.png",sheet_x:33,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64D-1F3FC-200D-2642-FE0F",image:"1f64d-1f3fc-200d-2642-fe0f.png",sheet_x:33,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64D-1F3FD-200D-2642-FE0F",image:"1f64d-1f3fd-200d-2642-fe0f.png",sheet_x:33,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64D-1F3FE-200D-2642-FE0F",image:"1f64d-1f3fe-200d-2642-fe0f.png",sheet_x:33,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64D-1F3FF-200D-2642-FE0F",image:"1f64d-1f3ff-200d-2642-fe0f.png",sheet_x:33,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,frowning"},white_circle:{name:"Medium White Circle",unified:"26AA",non_qualified:null,sheet_x:48,sheet_y:22,short_names:["white_circle"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"white,circle,medium,shape,round"},snowman:{name:"Snowman",unified:"2603-FE0F",non_qualified:"2603",sheet_x:47,sheet_y:19,short_names:["snowman"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"snowman,winter,season,cold,weather,christmas,xmas,frozen,without_snow"},snowman_without_snow:{name:"Snowman Without Snow",unified:"26C4",non_qualified:null,sheet_x:48,sheet_y:28,short_names:["snowman_without_snow"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"snowman,without,snow"},ru:{name:"Russia FLAG",unified:"1F1F7-1F1FA",non_qualified:null,sheet_x:4,sheet_y:19,short_names:["ru","flag-ru"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ru,flag,russia,russian,federation,nation,country,banner"},black_circle:{name:"Medium Black Circle",unified:"26AB",non_qualified:null,sheet_x:48,sheet_y:23,short_names:["black_circle"],text:"",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"black,circle,medium,shape,button,round"},"woman-frowning":{name:"Woman Frowning",unified:"1F64D-200D-2640-FE0F",non_qualified:"1F64D-200D-2640",sheet_x:33,sheet_y:18,short_names:["woman-frowning"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64D-1F3FB-200D-2640-FE0F",image:"1f64d-1f3fb-200d-2640-fe0f.png",sheet_x:33,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64D-1F3FC-200D-2640-FE0F",image:"1f64d-1f3fc-200d-2640-fe0f.png",sheet_x:33,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64D-1F3FD-200D-2640-FE0F",image:"1f64d-1f3fd-200d-2640-fe0f.png",sheet_x:33,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64D-1F3FE-200D-2640-FE0F",image:"1f64d-1f3fe-200d-2640-fe0f.png",sheet_x:33,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64D-1F3FF-200D-2640-FE0F",image:"1f64d-1f3ff-200d-2640-fe0f.png",sheet_x:33,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F64D",search:"woman,frowning"},"flag-rw":{name:"Rwanda FLAG",unified:"1F1F7-1F1FC",non_qualified:null,sheet_x:4,sheet_y:20,short_names:["flag-rw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,rw,rwanda"},comet:{name:"Comet",unified:"2604-FE0F",non_qualified:"2604",sheet_x:47,sheet_y:20,short_names:["comet"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"comet,space"},person_with_pouting_face:{name:"Person with Pouting Face",unified:"1F64E",non_qualified:null,sheet_x:33,sheet_y:48,short_names:["person_with_pouting_face"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64E-1F3FB",non_qualified:null,image:"1f64e-1f3fb.png",sheet_x:33,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F64E-1F3FC",non_qualified:null,image:"1f64e-1f3fc.png",sheet_x:33,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F64E-1F3FD",non_qualified:null,image:"1f64e-1f3fd.png",sheet_x:33,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F64E-1F3FE",non_qualified:null,image:"1f64e-1f3fe.png",sheet_x:34,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F64E-1F3FF",non_qualified:null,image:"1f64e-1f3ff.png",sheet_x:34,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F64E-200D-2640-FE0F",search:"person,with,pouting,face"},red_circle:{name:"Large Red Circle",unified:"1F534",non_qualified:null,sheet_x:28,sheet_y:2,short_names:["red_circle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"red,circle,large,shape,error,danger"},large_blue_circle:{name:"Large Blue Circle",unified:"1F535",non_qualified:null,sheet_x:28,sheet_y:3,short_names:["large_blue_circle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"large,blue,circle,shape,icon,button"},"man-pouting":{name:"Man Pouting",unified:"1F64E-200D-2642-FE0F",non_qualified:"1F64E-200D-2642",sheet_x:33,sheet_y:42,short_names:["man-pouting"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64E-1F3FB-200D-2642-FE0F",image:"1f64e-1f3fb-200d-2642-fe0f.png",sheet_x:33,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64E-1F3FC-200D-2642-FE0F",image:"1f64e-1f3fc-200d-2642-fe0f.png",sheet_x:33,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64E-1F3FD-200D-2642-FE0F",image:"1f64e-1f3fd-200d-2642-fe0f.png",sheet_x:33,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64E-1F3FE-200D-2642-FE0F",image:"1f64e-1f3fe-200d-2642-fe0f.png",sheet_x:33,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64E-1F3FF-200D-2642-FE0F",image:"1f64e-1f3ff-200d-2642-fe0f.png",sheet_x:33,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,pouting"},"flag-sa":{name:"Saudi Arabia FLAG",unified:"1F1F8-1F1E6",non_qualified:null,sheet_x:4,sheet_y:21,short_names:["flag-sa"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sa,saudi,arabia"},fire:{name:"Fire",unified:"1F525",non_qualified:null,sheet_x:27,sheet_y:39,short_names:["fire"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"fire,hot,cook,flame"},"woman-pouting":{name:"Woman Pouting",unified:"1F64E-200D-2640-FE0F",non_qualified:"1F64E-200D-2640",sheet_x:33,sheet_y:36,short_names:["woman-pouting"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64E-1F3FB-200D-2640-FE0F",image:"1f64e-1f3fb-200d-2640-fe0f.png",sheet_x:33,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64E-1F3FC-200D-2640-FE0F",image:"1f64e-1f3fc-200d-2640-fe0f.png",sheet_x:33,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64E-1F3FD-200D-2640-FE0F",image:"1f64e-1f3fd-200d-2640-fe0f.png",sheet_x:33,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64E-1F3FE-200D-2640-FE0F",image:"1f64e-1f3fe-200d-2640-fe0f.png",sheet_x:33,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64E-1F3FF-200D-2640-FE0F",image:"1f64e-1f3ff-200d-2640-fe0f.png",sheet_x:33,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F64E",search:"woman,pouting"},"flag-sb":{name:"Solomon Islands FLAG",unified:"1F1F8-1F1E7",non_qualified:null,sheet_x:4,sheet_y:22,short_names:["flag-sb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sb,solomon,islands"},droplet:{name:"Droplet",unified:"1F4A7",non_qualified:null,sheet_x:25,sheet_y:13,short_names:["droplet"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"droplet,water,drip,faucet,spring"},no_good:{name:"Face with No Good Gesture",unified:"1F645",non_qualified:null,sheet_x:32,sheet_y:1,short_names:["no_good"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F645-1F3FB",non_qualified:null,image:"1f645-1f3fb.png",sheet_x:32,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F645-1F3FC",non_qualified:null,image:"1f645-1f3fc.png",sheet_x:32,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F645-1F3FD",non_qualified:null,image:"1f645-1f3fd.png",sheet_x:32,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F645-1F3FE",non_qualified:null,image:"1f645-1f3fe.png",sheet_x:32,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F645-1F3FF",non_qualified:null,image:"1f645-1f3ff.png",sheet_x:32,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F645-200D-2640-FE0F",search:"no,good,face,with,gesture"},"flag-sc":{name:"Seychelles FLAG",unified:"1F1F8-1F1E8",non_qualified:null,sheet_x:4,sheet_y:23,short_names:["flag-sc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sc,seychelles"},ocean:{name:"Water Wave",unified:"1F30A",non_qualified:null,sheet_x:6,sheet_y:2,short_names:["ocean"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ocean,water,wave,sea,nature,tsunami,disaster"},"man-gesturing-no":{name:"Man Gesturing No",unified:"1F645-200D-2642-FE0F",non_qualified:"1F645-200D-2642",sheet_x:31,sheet_y:47,short_names:["man-gesturing-no"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F645-1F3FB-200D-2642-FE0F",image:"1f645-1f3fb-200d-2642-fe0f.png",sheet_x:31,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F645-1F3FC-200D-2642-FE0F",image:"1f645-1f3fc-200d-2642-fe0f.png",sheet_x:31,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F645-1F3FD-200D-2642-FE0F",image:"1f645-1f3fd-200d-2642-fe0f.png",sheet_x:31,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F645-1F3FE-200D-2642-FE0F",image:"1f645-1f3fe-200d-2642-fe0f.png",sheet_x:31,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F645-1F3FF-200D-2642-FE0F",image:"1f645-1f3ff-200d-2642-fe0f.png",sheet_x:32,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,gesturing,no"},"flag-sd":{name:"Sudan FLAG",unified:"1F1F8-1F1E9",non_qualified:null,sheet_x:4,sheet_y:24,short_names:["flag-sd"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sd,sudan"},"woman-gesturing-no":{name:"Woman Gesturing No",unified:"1F645-200D-2640-FE0F",non_qualified:"1F645-200D-2640",sheet_x:31,sheet_y:41,short_names:["woman-gesturing-no"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F645-1F3FB-200D-2640-FE0F",image:"1f645-1f3fb-200d-2640-fe0f.png",sheet_x:31,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F645-1F3FC-200D-2640-FE0F",image:"1f645-1f3fc-200d-2640-fe0f.png",sheet_x:31,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F645-1F3FD-200D-2640-FE0F",image:"1f645-1f3fd-200d-2640-fe0f.png",sheet_x:31,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F645-1F3FE-200D-2640-FE0F",image:"1f645-1f3fe-200d-2640-fe0f.png",sheet_x:31,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F645-1F3FF-200D-2640-FE0F",image:"1f645-1f3ff-200d-2640-fe0f.png",sheet_x:31,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F645",search:"woman,gesturing,no"},"flag-se":{name:"Sweden FLAG",unified:"1F1F8-1F1EA",non_qualified:null,sheet_x:4,sheet_y:25,short_names:["flag-se"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,se,sweden"},"flag-sg":{name:"Singapore FLAG",unified:"1F1F8-1F1EC",non_qualified:null,sheet_x:4,sheet_y:26,short_names:["flag-sg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sg,singapore"},ok_woman:{name:"Face with Ok Gesture",unified:"1F646",non_qualified:null,sheet_x:32,sheet_y:19,short_names:["ok_woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F646-1F3FB",non_qualified:null,image:"1f646-1f3fb.png",sheet_x:32,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F646-1F3FC",non_qualified:null,image:"1f646-1f3fc.png",sheet_x:32,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F646-1F3FD",non_qualified:null,image:"1f646-1f3fd.png",sheet_x:32,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F646-1F3FE",non_qualified:null,image:"1f646-1f3fe.png",sheet_x:32,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F646-1F3FF",non_qualified:null,image:"1f646-1f3ff.png",sheet_x:32,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F646-200D-2640-FE0F",search:"ok,woman,face,with,gesture,women,girl,female,pink,human"},"flag-sh":{name:"St. Helena FLAG",unified:"1F1F8-1F1ED",non_qualified:null,sheet_x:4,sheet_y:27,short_names:["flag-sh"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sh,st.,helena"},"man-gesturing-ok":{name:"Man Gesturing Ok",unified:"1F646-200D-2642-FE0F",non_qualified:"1F646-200D-2642",sheet_x:32,sheet_y:13,short_names:["man-gesturing-ok"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F646-1F3FB-200D-2642-FE0F",image:"1f646-1f3fb-200d-2642-fe0f.png",sheet_x:32,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F646-1F3FC-200D-2642-FE0F",image:"1f646-1f3fc-200d-2642-fe0f.png",sheet_x:32,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F646-1F3FD-200D-2642-FE0F",image:"1f646-1f3fd-200d-2642-fe0f.png",sheet_x:32,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F646-1F3FE-200D-2642-FE0F",image:"1f646-1f3fe-200d-2642-fe0f.png",sheet_x:32,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F646-1F3FF-200D-2642-FE0F",image:"1f646-1f3ff-200d-2642-fe0f.png",sheet_x:32,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,gesturing,ok"},"flag-si":{name:"Slovenia FLAG",unified:"1F1F8-1F1EE",non_qualified:null,sheet_x:4,sheet_y:28,short_names:["flag-si"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,si,slovenia"},"woman-gesturing-ok":{name:"Woman Gesturing Ok",unified:"1F646-200D-2640-FE0F",non_qualified:"1F646-200D-2640",sheet_x:32,sheet_y:7,short_names:["woman-gesturing-ok"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F646-1F3FB-200D-2640-FE0F",image:"1f646-1f3fb-200d-2640-fe0f.png",sheet_x:32,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F646-1F3FC-200D-2640-FE0F",image:"1f646-1f3fc-200d-2640-fe0f.png",sheet_x:32,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F646-1F3FD-200D-2640-FE0F",image:"1f646-1f3fd-200d-2640-fe0f.png",sheet_x:32,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F646-1F3FE-200D-2640-FE0F",image:"1f646-1f3fe-200d-2640-fe0f.png",sheet_x:32,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F646-1F3FF-200D-2640-FE0F",image:"1f646-1f3ff-200d-2640-fe0f.png",sheet_x:32,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F646",search:"woman,gesturing,ok"},information_desk_person:{name:"Information Desk Person",unified:"1F481",non_qualified:null,sheet_x:23,sheet_y:13,short_names:["information_desk_person"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F481-1F3FB",non_qualified:null,image:"1f481-1f3fb.png",sheet_x:23,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F481-1F3FC",non_qualified:null,image:"1f481-1f3fc.png",sheet_x:23,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F481-1F3FD",non_qualified:null,image:"1f481-1f3fd.png",sheet_x:23,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F481-1F3FE",non_qualified:null,image:"1f481-1f3fe.png",sheet_x:23,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F481-1F3FF",non_qualified:null,image:"1f481-1f3ff.png",sheet_x:23,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F481-200D-2640-FE0F",search:"information,desk,person"},"flag-sj":{name:"Svalbard & Jan Mayen FLAG",unified:"1F1F8-1F1EF",non_qualified:null,sheet_x:4,sheet_y:29,short_names:["flag-sj"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sj,svalbard,&,jan,mayen"},"man-tipping-hand":{name:"Man Tipping Hand",unified:"1F481-200D-2642-FE0F",non_qualified:"1F481-200D-2642",sheet_x:23,sheet_y:7,short_names:["man-tipping-hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F481-1F3FB-200D-2642-FE0F",image:"1f481-1f3fb-200d-2642-fe0f.png",sheet_x:23,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F481-1F3FC-200D-2642-FE0F",image:"1f481-1f3fc-200d-2642-fe0f.png",sheet_x:23,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F481-1F3FD-200D-2642-FE0F",image:"1f481-1f3fd-200d-2642-fe0f.png",sheet_x:23,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F481-1F3FE-200D-2642-FE0F",image:"1f481-1f3fe-200d-2642-fe0f.png",sheet_x:23,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F481-1F3FF-200D-2642-FE0F",image:"1f481-1f3ff-200d-2642-fe0f.png",sheet_x:23,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,tipping,hand"},"flag-sk":{name:"Slovakia FLAG",unified:"1F1F8-1F1F0",non_qualified:null,sheet_x:4,sheet_y:30,short_names:["flag-sk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sk,slovakia"},"flag-sl":{name:"Sierra Leone FLAG",unified:"1F1F8-1F1F1",non_qualified:null,sheet_x:4,sheet_y:31,short_names:["flag-sl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sl,sierra,leone"},"woman-tipping-hand":{name:"Woman Tipping Hand",unified:"1F481-200D-2640-FE0F",non_qualified:"1F481-200D-2640",sheet_x:23,sheet_y:1,short_names:["woman-tipping-hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F481-1F3FB-200D-2640-FE0F",image:"1f481-1f3fb-200d-2640-fe0f.png",sheet_x:23,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F481-1F3FC-200D-2640-FE0F",image:"1f481-1f3fc-200d-2640-fe0f.png",sheet_x:23,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F481-1F3FD-200D-2640-FE0F",image:"1f481-1f3fd-200d-2640-fe0f.png",sheet_x:23,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F481-1F3FE-200D-2640-FE0F",image:"1f481-1f3fe-200d-2640-fe0f.png",sheet_x:23,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F481-1F3FF-200D-2640-FE0F",image:"1f481-1f3ff-200d-2640-fe0f.png",sheet_x:23,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F481",search:"woman,tipping,hand"},"flag-sm":{name:"San Marino FLAG",unified:"1F1F8-1F1F2",non_qualified:null,sheet_x:4,sheet_y:32,short_names:["flag-sm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sm,san,marino"},raising_hand:{name:"Happy Person Raising One Hand",unified:"1F64B",non_qualified:null,sheet_x:33,sheet_y:6,short_names:["raising_hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64B-1F3FB",non_qualified:null,image:"1f64b-1f3fb.png",sheet_x:33,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F64B-1F3FC",non_qualified:null,image:"1f64b-1f3fc.png",sheet_x:33,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F64B-1F3FD",non_qualified:null,image:"1f64b-1f3fd.png",sheet_x:33,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F64B-1F3FE",non_qualified:null,image:"1f64b-1f3fe.png",sheet_x:33,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F64B-1F3FF",non_qualified:null,image:"1f64b-1f3ff.png",sheet_x:33,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F64B-200D-2640-FE0F",search:"raising,hand,happy,person,one"},"flag-sn":{name:"Senegal FLAG",unified:"1F1F8-1F1F3",non_qualified:null,sheet_x:4,sheet_y:33,short_names:["flag-sn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sn,senegal"},"man-raising-hand":{name:"Man Raising Hand",unified:"1F64B-200D-2642-FE0F",non_qualified:"1F64B-200D-2642",sheet_x:33,sheet_y:0,short_names:["man-raising-hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64B-1F3FB-200D-2642-FE0F",image:"1f64b-1f3fb-200d-2642-fe0f.png",sheet_x:33,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64B-1F3FC-200D-2642-FE0F",image:"1f64b-1f3fc-200d-2642-fe0f.png",sheet_x:33,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64B-1F3FD-200D-2642-FE0F",image:"1f64b-1f3fd-200d-2642-fe0f.png",sheet_x:33,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64B-1F3FE-200D-2642-FE0F",image:"1f64b-1f3fe-200d-2642-fe0f.png",sheet_x:33,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64B-1F3FF-200D-2642-FE0F",image:"1f64b-1f3ff-200d-2642-fe0f.png",sheet_x:33,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,raising,hand"},"flag-so":{name:"Somalia FLAG",unified:"1F1F8-1F1F4",non_qualified:null,sheet_x:4,sheet_y:34,short_names:["flag-so"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,so,somalia"},"woman-raising-hand":{name:"Woman Raising Hand",unified:"1F64B-200D-2640-FE0F",non_qualified:"1F64B-200D-2640",sheet_x:32,sheet_y:46,short_names:["woman-raising-hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64B-1F3FB-200D-2640-FE0F",image:"1f64b-1f3fb-200d-2640-fe0f.png",sheet_x:32,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64B-1F3FC-200D-2640-FE0F",image:"1f64b-1f3fc-200d-2640-fe0f.png",sheet_x:32,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64B-1F3FD-200D-2640-FE0F",image:"1f64b-1f3fd-200d-2640-fe0f.png",sheet_x:32,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64B-1F3FE-200D-2640-FE0F",image:"1f64b-1f3fe-200d-2640-fe0f.png",sheet_x:32,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64B-1F3FF-200D-2640-FE0F",image:"1f64b-1f3ff-200d-2640-fe0f.png",sheet_x:32,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F64B",search:"woman,raising,hand"},"flag-sr":{name:"Suriname FLAG",unified:"1F1F8-1F1F7",non_qualified:null,sheet_x:4,sheet_y:35,short_names:["flag-sr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sr,suriname"},bow:{name:"Person Bowing Deeply",unified:"1F647",non_qualified:null,sheet_x:32,sheet_y:37,short_names:["bow"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F647-1F3FB",non_qualified:null,image:"1f647-1f3fb.png",sheet_x:32,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F647-1F3FC",non_qualified:null,image:"1f647-1f3fc.png",sheet_x:32,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F647-1F3FD",non_qualified:null,image:"1f647-1f3fd.png",sheet_x:32,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F647-1F3FE",non_qualified:null,image:"1f647-1f3fe.png",sheet_x:32,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F647-1F3FF",non_qualified:null,image:"1f647-1f3ff.png",sheet_x:32,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F647-200D-2642-FE0F",search:"bow,person,bowing,deeply"},"man-bowing":{name:"Man Bowing",unified:"1F647-200D-2642-FE0F",non_qualified:"1F647-200D-2642",sheet_x:32,sheet_y:31,short_names:["man-bowing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F647-1F3FB-200D-2642-FE0F",image:"1f647-1f3fb-200d-2642-fe0f.png",sheet_x:32,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F647-1F3FC-200D-2642-FE0F",image:"1f647-1f3fc-200d-2642-fe0f.png",sheet_x:32,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F647-1F3FD-200D-2642-FE0F",image:"1f647-1f3fd-200d-2642-fe0f.png",sheet_x:32,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F647-1F3FE-200D-2642-FE0F",image:"1f647-1f3fe-200d-2642-fe0f.png",sheet_x:32,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F647-1F3FF-200D-2642-FE0F",image:"1f647-1f3ff-200d-2642-fe0f.png",sheet_x:32,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F647",search:"man,bowing"},"flag-ss":{name:"South Sudan FLAG",unified:"1F1F8-1F1F8",non_qualified:null,sheet_x:4,sheet_y:36,short_names:["flag-ss"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ss,south,sudan"},"woman-bowing":{name:"Woman Bowing",unified:"1F647-200D-2640-FE0F",non_qualified:"1F647-200D-2640",sheet_x:32,sheet_y:25,short_names:["woman-bowing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F647-1F3FB-200D-2640-FE0F",image:"1f647-1f3fb-200d-2640-fe0f.png",sheet_x:32,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F647-1F3FC-200D-2640-FE0F",image:"1f647-1f3fc-200d-2640-fe0f.png",sheet_x:32,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F647-1F3FD-200D-2640-FE0F",image:"1f647-1f3fd-200d-2640-fe0f.png",sheet_x:32,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F647-1F3FE-200D-2640-FE0F",image:"1f647-1f3fe-200d-2640-fe0f.png",sheet_x:32,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F647-1F3FF-200D-2640-FE0F",image:"1f647-1f3ff-200d-2640-fe0f.png",sheet_x:32,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,bowing"},"flag-st":{name:"São Tomé & Príncipe FLAG",unified:"1F1F8-1F1F9",non_qualified:null,sheet_x:4,sheet_y:37,short_names:["flag-st"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,st,são,tomé,&,príncipe"},face_palm:{name:"Face Palm",unified:"1F926",non_qualified:null,sheet_x:38,sheet_y:41,short_names:["face_palm"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F926-1F3FB",non_qualified:null,image:"1f926-1f3fb.png",sheet_x:38,sheet_y:42,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F926-1F3FC",non_qualified:null,image:"1f926-1f3fc.png",sheet_x:38,sheet_y:43,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F926-1F3FD",non_qualified:null,image:"1f926-1f3fd.png",sheet_x:38,sheet_y:44,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F926-1F3FE",non_qualified:null,image:"1f926-1f3fe.png",sheet_x:38,sheet_y:45,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F926-1F3FF",non_qualified:null,image:"1f926-1f3ff.png",sheet_x:38,sheet_y:46,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false}},search:"face,palm"},"flag-sv":{name:"El Salvador FLAG",unified:"1F1F8-1F1FB",non_qualified:null,sheet_x:4,sheet_y:38,short_names:["flag-sv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sv,el,salvador"},"man-facepalming":{name:"Man Facepalming",unified:"1F926-200D-2642-FE0F",non_qualified:"1F926-200D-2642",sheet_x:38,sheet_y:35,short_names:["man-facepalming"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F926-1F3FB-200D-2642-FE0F",image:"1f926-1f3fb-200d-2642-fe0f.png",sheet_x:38,sheet_y:36,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F926-1F3FC-200D-2642-FE0F",image:"1f926-1f3fc-200d-2642-fe0f.png",sheet_x:38,sheet_y:37,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F926-1F3FD-200D-2642-FE0F",image:"1f926-1f3fd-200d-2642-fe0f.png",sheet_x:38,sheet_y:38,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F926-1F3FE-200D-2642-FE0F",image:"1f926-1f3fe-200d-2642-fe0f.png",sheet_x:38,sheet_y:39,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F926-1F3FF-200D-2642-FE0F",image:"1f926-1f3ff-200d-2642-fe0f.png",sheet_x:38,sheet_y:40,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,facepalming"},"flag-sx":{name:"Sint Maarten FLAG",unified:"1F1F8-1F1FD",non_qualified:null,sheet_x:4,sheet_y:39,short_names:["flag-sx"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sx,sint,maarten"},"flag-sy":{name:"Syria FLAG",unified:"1F1F8-1F1FE",non_qualified:null,sheet_x:4,sheet_y:40,short_names:["flag-sy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sy,syria"},"woman-facepalming":{name:"Woman Facepalming",unified:"1F926-200D-2640-FE0F",non_qualified:"1F926-200D-2640",sheet_x:38,sheet_y:29,short_names:["woman-facepalming"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F926-1F3FB-200D-2640-FE0F",image:"1f926-1f3fb-200d-2640-fe0f.png",sheet_x:38,sheet_y:30,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F926-1F3FC-200D-2640-FE0F",image:"1f926-1f3fc-200d-2640-fe0f.png",sheet_x:38,sheet_y:31,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F926-1F3FD-200D-2640-FE0F",image:"1f926-1f3fd-200d-2640-fe0f.png",sheet_x:38,sheet_y:32,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F926-1F3FE-200D-2640-FE0F",image:"1f926-1f3fe-200d-2640-fe0f.png",sheet_x:38,sheet_y:33,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F926-1F3FF-200D-2640-FE0F",image:"1f926-1f3ff-200d-2640-fe0f.png",sheet_x:38,sheet_y:34,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,facepalming"},shrug:{name:"Shrug",unified:"1F937",non_qualified:null,sheet_x:40,sheet_y:6,short_names:["shrug"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F937-1F3FB",non_qualified:null,image:"1f937-1f3fb.png",sheet_x:40,sheet_y:7,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F937-1F3FC",non_qualified:null,image:"1f937-1f3fc.png",sheet_x:40,sheet_y:8,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F937-1F3FD",non_qualified:null,image:"1f937-1f3fd.png",sheet_x:40,sheet_y:9,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F937-1F3FE",non_qualified:null,image:"1f937-1f3fe.png",sheet_x:40,sheet_y:10,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F937-1F3FF",non_qualified:null,image:"1f937-1f3ff.png",sheet_x:40,sheet_y:11,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false}},search:"shrug"},"flag-sz":{name:"Swaziland FLAG",unified:"1F1F8-1F1FF",non_qualified:null,sheet_x:4,sheet_y:41,short_names:["flag-sz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,sz,swaziland"},"flag-ta":{name:"Tristan Da Cunha FLAG",unified:"1F1F9-1F1E6",non_qualified:null,sheet_x:4,sheet_y:42,short_names:["flag-ta"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ta,tristan,da,cunha"},"man-shrugging":{name:"Man Shrugging",unified:"1F937-200D-2642-FE0F",non_qualified:"1F937-200D-2642",sheet_x:40,sheet_y:0,short_names:["man-shrugging"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F937-1F3FB-200D-2642-FE0F",image:"1f937-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:1,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F937-1F3FC-200D-2642-FE0F",image:"1f937-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:2,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F937-1F3FD-200D-2642-FE0F",image:"1f937-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:3,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F937-1F3FE-200D-2642-FE0F",image:"1f937-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:4,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F937-1F3FF-200D-2642-FE0F",image:"1f937-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:5,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,shrugging"},"woman-shrugging":{name:"Woman Shrugging",unified:"1F937-200D-2640-FE0F",non_qualified:"1F937-200D-2640",sheet_x:39,sheet_y:46,short_names:["woman-shrugging"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F937-1F3FB-200D-2640-FE0F",image:"1f937-1f3fb-200d-2640-fe0f.png",sheet_x:39,sheet_y:47,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F937-1F3FC-200D-2640-FE0F",image:"1f937-1f3fc-200d-2640-fe0f.png",sheet_x:39,sheet_y:48,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F937-1F3FD-200D-2640-FE0F",image:"1f937-1f3fd-200d-2640-fe0f.png",sheet_x:39,sheet_y:49,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F937-1F3FE-200D-2640-FE0F",image:"1f937-1f3fe-200d-2640-fe0f.png",sheet_x:39,sheet_y:50,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F937-1F3FF-200D-2640-FE0F",image:"1f937-1f3ff-200d-2640-fe0f.png",sheet_x:39,sheet_y:51,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,shrugging"},"flag-tc":{name:"Turks & Caicos Islands FLAG",unified:"1F1F9-1F1E8",non_qualified:null,sheet_x:4,sheet_y:43,short_names:["flag-tc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tc,turks,&,caicos,islands"},massage:{name:"Face Massage",unified:"1F486",non_qualified:null,sheet_x:24,sheet_y:10,short_names:["massage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F486-1F3FB",non_qualified:null,image:"1f486-1f3fb.png",sheet_x:24,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F486-1F3FC",non_qualified:null,image:"1f486-1f3fc.png",sheet_x:24,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F486-1F3FD",non_qualified:null,image:"1f486-1f3fd.png",sheet_x:24,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F486-1F3FE",non_qualified:null,image:"1f486-1f3fe.png",sheet_x:24,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F486-1F3FF",non_qualified:null,image:"1f486-1f3ff.png",sheet_x:24,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F486-200D-2640-FE0F",search:"massage,face"},"flag-td":{name:"Chad FLAG",unified:"1F1F9-1F1E9",non_qualified:null,sheet_x:4,sheet_y:44,short_names:["flag-td"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,td,chad"},"man-getting-massage":{name:"Man Getting Massage",unified:"1F486-200D-2642-FE0F",non_qualified:"1F486-200D-2642",sheet_x:24,sheet_y:4,short_names:["man-getting-massage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F486-1F3FB-200D-2642-FE0F",image:"1f486-1f3fb-200d-2642-fe0f.png",sheet_x:24,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F486-1F3FC-200D-2642-FE0F",image:"1f486-1f3fc-200d-2642-fe0f.png",sheet_x:24,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F486-1F3FD-200D-2642-FE0F",image:"1f486-1f3fd-200d-2642-fe0f.png",sheet_x:24,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F486-1F3FE-200D-2642-FE0F",image:"1f486-1f3fe-200d-2642-fe0f.png",sheet_x:24,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F486-1F3FF-200D-2642-FE0F",image:"1f486-1f3ff-200d-2642-fe0f.png",sheet_x:24,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,getting,massage"},"flag-tf":{name:"French Southern Territories FLAG",unified:"1F1F9-1F1EB",non_qualified:null,sheet_x:4,sheet_y:45,short_names:["flag-tf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tf,french,southern,territories"},"woman-getting-massage":{name:"Woman Getting Massage",unified:"1F486-200D-2640-FE0F",non_qualified:"1F486-200D-2640",sheet_x:23,sheet_y:50,short_names:["woman-getting-massage"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F486-1F3FB-200D-2640-FE0F",image:"1f486-1f3fb-200d-2640-fe0f.png",sheet_x:23,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F486-1F3FC-200D-2640-FE0F",image:"1f486-1f3fc-200d-2640-fe0f.png",sheet_x:24,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F486-1F3FD-200D-2640-FE0F",image:"1f486-1f3fd-200d-2640-fe0f.png",sheet_x:24,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F486-1F3FE-200D-2640-FE0F",image:"1f486-1f3fe-200d-2640-fe0f.png",sheet_x:24,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F486-1F3FF-200D-2640-FE0F",image:"1f486-1f3ff-200d-2640-fe0f.png",sheet_x:24,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F486",search:"woman,getting,massage"},"flag-tg":{name:"Togo FLAG",unified:"1F1F9-1F1EC",non_qualified:null,sheet_x:4,sheet_y:46,short_names:["flag-tg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tg,togo"},haircut:{name:"Haircut",unified:"1F487",non_qualified:null,sheet_x:24,sheet_y:28,short_names:["haircut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F487-1F3FB",non_qualified:null,image:"1f487-1f3fb.png",sheet_x:24,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F487-1F3FC",non_qualified:null,image:"1f487-1f3fc.png",sheet_x:24,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F487-1F3FD",non_qualified:null,image:"1f487-1f3fd.png",sheet_x:24,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F487-1F3FE",non_qualified:null,image:"1f487-1f3fe.png",sheet_x:24,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F487-1F3FF",non_qualified:null,image:"1f487-1f3ff.png",sheet_x:24,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F487-200D-2640-FE0F",search:"haircut"},"flag-th":{name:"Thailand FLAG",unified:"1F1F9-1F1ED",non_qualified:null,sheet_x:4,sheet_y:47,short_names:["flag-th"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,th,thailand"},"man-getting-haircut":{name:"Man Getting Haircut",unified:"1F487-200D-2642-FE0F",non_qualified:"1F487-200D-2642",sheet_x:24,sheet_y:22,short_names:["man-getting-haircut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F487-1F3FB-200D-2642-FE0F",image:"1f487-1f3fb-200d-2642-fe0f.png",sheet_x:24,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F487-1F3FC-200D-2642-FE0F",image:"1f487-1f3fc-200d-2642-fe0f.png",sheet_x:24,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F487-1F3FD-200D-2642-FE0F",image:"1f487-1f3fd-200d-2642-fe0f.png",sheet_x:24,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F487-1F3FE-200D-2642-FE0F",image:"1f487-1f3fe-200d-2642-fe0f.png",sheet_x:24,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F487-1F3FF-200D-2642-FE0F",image:"1f487-1f3ff-200d-2642-fe0f.png",sheet_x:24,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,getting,haircut"},"flag-tj":{name:"Tajikistan FLAG",unified:"1F1F9-1F1EF",non_qualified:null,sheet_x:4,sheet_y:48,short_names:["flag-tj"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tj,tajikistan"},"flag-tk":{name:"Tokelau FLAG",unified:"1F1F9-1F1F0",non_qualified:null,sheet_x:4,sheet_y:49,short_names:["flag-tk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tk,tokelau"},"woman-getting-haircut":{name:"Woman Getting Haircut",unified:"1F487-200D-2640-FE0F",non_qualified:"1F487-200D-2640",sheet_x:24,sheet_y:16,short_names:["woman-getting-haircut"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F487-1F3FB-200D-2640-FE0F",image:"1f487-1f3fb-200d-2640-fe0f.png",sheet_x:24,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F487-1F3FC-200D-2640-FE0F",image:"1f487-1f3fc-200d-2640-fe0f.png",sheet_x:24,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F487-1F3FD-200D-2640-FE0F",image:"1f487-1f3fd-200d-2640-fe0f.png",sheet_x:24,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F487-1F3FE-200D-2640-FE0F",image:"1f487-1f3fe-200d-2640-fe0f.png",sheet_x:24,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F487-1F3FF-200D-2640-FE0F",image:"1f487-1f3ff-200d-2640-fe0f.png",sheet_x:24,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F487",search:"woman,getting,haircut"},walking:{name:"Pedestrian",unified:"1F6B6",non_qualified:null,sheet_x:36,sheet_y:21,short_names:["walking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6B6-1F3FB",non_qualified:null,image:"1f6b6-1f3fb.png",sheet_x:36,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F6B6-1F3FC",non_qualified:null,image:"1f6b6-1f3fc.png",sheet_x:36,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F6B6-1F3FD",non_qualified:null,image:"1f6b6-1f3fd.png",sheet_x:36,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F6B6-1F3FE",non_qualified:null,image:"1f6b6-1f3fe.png",sheet_x:36,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F6B6-1F3FF",non_qualified:null,image:"1f6b6-1f3ff.png",sheet_x:36,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F6B6-200D-2642-FE0F",search:"walking,pedestrian"},"flag-tl":{name:"Timor-Leste FLAG",unified:"1F1F9-1F1F1",non_qualified:null,sheet_x:4,sheet_y:50,short_names:["flag-tl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tl,timor,leste"},"man-walking":{name:"Man Walking",unified:"1F6B6-200D-2642-FE0F",non_qualified:"1F6B6-200D-2642",sheet_x:36,sheet_y:15,short_names:["man-walking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B6-1F3FB-200D-2642-FE0F",image:"1f6b6-1f3fb-200d-2642-fe0f.png",sheet_x:36,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B6-1F3FC-200D-2642-FE0F",image:"1f6b6-1f3fc-200d-2642-fe0f.png",sheet_x:36,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B6-1F3FD-200D-2642-FE0F",image:"1f6b6-1f3fd-200d-2642-fe0f.png",sheet_x:36,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B6-1F3FE-200D-2642-FE0F",image:"1f6b6-1f3fe-200d-2642-fe0f.png",sheet_x:36,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B6-1F3FF-200D-2642-FE0F",image:"1f6b6-1f3ff-200d-2642-fe0f.png",sheet_x:36,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6B6",search:"man,walking"},"flag-tm":{name:"Turkmenistan FLAG",unified:"1F1F9-1F1F2",non_qualified:null,sheet_x:4,sheet_y:51,short_names:["flag-tm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tm,turkmenistan"},"woman-walking":{name:"Woman Walking",unified:"1F6B6-200D-2640-FE0F",non_qualified:"1F6B6-200D-2640",sheet_x:36,sheet_y:9,short_names:["woman-walking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B6-1F3FB-200D-2640-FE0F",image:"1f6b6-1f3fb-200d-2640-fe0f.png",sheet_x:36,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B6-1F3FC-200D-2640-FE0F",image:"1f6b6-1f3fc-200d-2640-fe0f.png",sheet_x:36,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B6-1F3FD-200D-2640-FE0F",image:"1f6b6-1f3fd-200d-2640-fe0f.png",sheet_x:36,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B6-1F3FE-200D-2640-FE0F",image:"1f6b6-1f3fe-200d-2640-fe0f.png",sheet_x:36,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B6-1F3FF-200D-2640-FE0F",image:"1f6b6-1f3ff-200d-2640-fe0f.png",sheet_x:36,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,walking"},"flag-tn":{name:"Tunisia FLAG",unified:"1F1F9-1F1F3",non_qualified:null,sheet_x:5,sheet_y:0,short_names:["flag-tn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tn,tunisia"},runner:{name:"Runner",unified:"1F3C3",non_qualified:null,sheet_x:9,sheet_y:46,short_names:["runner","running"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C3-1F3FB",non_qualified:null,image:"1f3c3-1f3fb.png",sheet_x:9,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F3C3-1F3FC",non_qualified:null,image:"1f3c3-1f3fc.png",sheet_x:9,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F3C3-1F3FD",non_qualified:null,image:"1f3c3-1f3fd.png",sheet_x:9,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F3C3-1F3FE",non_qualified:null,image:"1f3c3-1f3fe.png",sheet_x:9,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F3C3-1F3FF",non_qualified:null,image:"1f3c3-1f3ff.png",sheet_x:9,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F3C3-200D-2642-FE0F",search:"runner,running"},"flag-to":{name:"Tonga FLAG",unified:"1F1F9-1F1F4",non_qualified:null,sheet_x:5,sheet_y:1,short_names:["flag-to"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,to,tonga"},"man-running":{name:"Man Running",unified:"1F3C3-200D-2642-FE0F",non_qualified:"1F3C3-200D-2642",sheet_x:9,sheet_y:40,short_names:["man-running"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C3-1F3FB-200D-2642-FE0F",image:"1f3c3-1f3fb-200d-2642-fe0f.png",sheet_x:9,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C3-1F3FC-200D-2642-FE0F",image:"1f3c3-1f3fc-200d-2642-fe0f.png",sheet_x:9,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C3-1F3FD-200D-2642-FE0F",image:"1f3c3-1f3fd-200d-2642-fe0f.png",sheet_x:9,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C3-1F3FE-200D-2642-FE0F",image:"1f3c3-1f3fe-200d-2642-fe0f.png",sheet_x:9,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C3-1F3FF-200D-2642-FE0F",image:"1f3c3-1f3ff-200d-2642-fe0f.png",sheet_x:9,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3C3",search:"man,running"},"flag-tr":{name:"Turkey FLAG",unified:"1F1F9-1F1F7",non_qualified:null,sheet_x:5,sheet_y:2,short_names:["flag-tr"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tr,turkey"},"flag-tt":{name:"Trinidad & Tobago FLAG",unified:"1F1F9-1F1F9",non_qualified:null,sheet_x:5,sheet_y:3,short_names:["flag-tt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tt,trinidad,&,tobago"},"woman-running":{name:"Woman Running",unified:"1F3C3-200D-2640-FE0F",non_qualified:"1F3C3-200D-2640",sheet_x:9,sheet_y:34,short_names:["woman-running"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C3-1F3FB-200D-2640-FE0F",image:"1f3c3-1f3fb-200d-2640-fe0f.png",sheet_x:9,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C3-1F3FC-200D-2640-FE0F",image:"1f3c3-1f3fc-200d-2640-fe0f.png",sheet_x:9,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C3-1F3FD-200D-2640-FE0F",image:"1f3c3-1f3fd-200d-2640-fe0f.png",sheet_x:9,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C3-1F3FE-200D-2640-FE0F",image:"1f3c3-1f3fe-200d-2640-fe0f.png",sheet_x:9,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C3-1F3FF-200D-2640-FE0F",image:"1f3c3-1f3ff-200d-2640-fe0f.png",sheet_x:9,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,running"},"flag-tv":{name:"Tuvalu FLAG",unified:"1F1F9-1F1FB",non_qualified:null,sheet_x:5,sheet_y:4,short_names:["flag-tv"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tv,tuvalu"},dancer:{name:"Dancer",unified:"1F483",non_qualified:null,sheet_x:23,sheet_y:37,short_names:["dancer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F483-1F3FB",non_qualified:null,image:"1f483-1f3fb.png",sheet_x:23,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F483-1F3FC",non_qualified:null,image:"1f483-1f3fc.png",sheet_x:23,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F483-1F3FD",non_qualified:null,image:"1f483-1f3fd.png",sheet_x:23,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F483-1F3FE",non_qualified:null,image:"1f483-1f3fe.png",sheet_x:23,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F483-1F3FF",non_qualified:null,image:"1f483-1f3ff.png",sheet_x:23,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"dancer,female,girl,woman,fun"},"flag-tw":{name:"Taiwan FLAG",unified:"1F1F9-1F1FC",non_qualified:null,sheet_x:5,sheet_y:5,short_names:["flag-tw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tw,taiwan"},man_dancing:{name:"Man Dancing",unified:"1F57A",non_qualified:null,sheet_x:29,sheet_y:21,short_names:["man_dancing"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F57A-1F3FB",non_qualified:null,image:"1f57a-1f3fb.png",sheet_x:29,sheet_y:22,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F57A-1F3FC",non_qualified:null,image:"1f57a-1f3fc.png",sheet_x:29,sheet_y:23,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F57A-1F3FD",non_qualified:null,image:"1f57a-1f3fd.png",sheet_x:29,sheet_y:24,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F57A-1F3FE",non_qualified:null,image:"1f57a-1f3fe.png",sheet_x:29,sheet_y:25,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F57A-1F3FF",non_qualified:null,image:"1f57a-1f3ff.png",sheet_x:29,sheet_y:26,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"man,dancing,male,boy,fun,dancer"},dancers:{name:"Woman with Bunny Ears",unified:"1F46F",non_qualified:null,sheet_x:21,sheet_y:1,short_names:["dancers"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,obsoleted_by:"1F46F-200D-2640-FE0F",search:"dancers,woman,with,bunny,ears"},"flag-tz":{name:"Tanzania FLAG",unified:"1F1F9-1F1FF",non_qualified:null,sheet_x:5,sheet_y:6,short_names:["flag-tz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,tz,tanzania"},"flag-ua":{name:"Ukraine FLAG",unified:"1F1FA-1F1E6",non_qualified:null,sheet_x:5,sheet_y:7,short_names:["flag-ua"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ua,ukraine"},"man-with-bunny-ears-partying":{name:"Man with Bunny Ears Partying",unified:"1F46F-200D-2642-FE0F",non_qualified:"1F46F-200D-2642",sheet_x:21,sheet_y:0,short_names:["man-with-bunny-ears-partying"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,with,bunny,ears,partying"},"woman-with-bunny-ears-partying":{name:"Woman with Bunny Ears Partying",unified:"1F46F-200D-2640-FE0F",non_qualified:"1F46F-200D-2640",sheet_x:20,sheet_y:51,short_names:["woman-with-bunny-ears-partying"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoletes:"1F46F",search:"woman,with,bunny,ears,partying"},"flag-ug":{name:"Uganda FLAG",unified:"1F1FA-1F1EC",non_qualified:null,sheet_x:5,sheet_y:8,short_names:["flag-ug"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ug,uganda"},"flag-um":{name:"U.s. Outlying Islands FLAG",unified:"1F1FA-1F1F2",non_qualified:null,sheet_x:5,sheet_y:9,short_names:["flag-um"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,um,u.s.,outlying,islands"},person_in_steamy_room:{name:"Person in Steamy Room",unified:"1F9D6",non_qualified:null,sheet_x:43,sheet_y:40,short_names:["person_in_steamy_room"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D6-1F3FB",non_qualified:null,image:"1f9d6-1f3fb.png",sheet_x:43,sheet_y:41,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D6-1F3FB-200D-2642-FE0F"},"1F3FC":{unified:"1F9D6-1F3FC",non_qualified:null,image:"1f9d6-1f3fc.png",sheet_x:43,sheet_y:42,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D6-1F3FC-200D-2642-FE0F"},"1F3FD":{unified:"1F9D6-1F3FD",non_qualified:null,image:"1f9d6-1f3fd.png",sheet_x:43,sheet_y:43,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D6-1F3FD-200D-2642-FE0F"},"1F3FE":{unified:"1F9D6-1F3FE",non_qualified:null,image:"1f9d6-1f3fe.png",sheet_x:43,sheet_y:44,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D6-1F3FE-200D-2642-FE0F"},"1F3FF":{unified:"1F9D6-1F3FF",non_qualified:null,image:"1f9d6-1f3ff.png",sheet_x:43,sheet_y:45,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D6-1F3FF-200D-2642-FE0F"}},obsoleted_by:"1F9D6-200D-2642-FE0F",search:"person,in,steamy,room"},woman_in_steamy_room:{name:"Woman in Steamy Room",unified:"1F9D6-200D-2640-FE0F",non_qualified:"1F9D6-200D-2640",sheet_x:43,sheet_y:28,short_names:["woman_in_steamy_room"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D6-1F3FB-200D-2640-FE0F",image:"1f9d6-1f3fb-200d-2640-fe0f.png",sheet_x:43,sheet_y:29,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F9D6-1F3FC-200D-2640-FE0F",image:"1f9d6-1f3fc-200d-2640-fe0f.png",sheet_x:43,sheet_y:30,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F9D6-1F3FD-200D-2640-FE0F",image:"1f9d6-1f3fd-200d-2640-fe0f.png",sheet_x:43,sheet_y:31,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F9D6-1F3FE-200D-2640-FE0F",image:"1f9d6-1f3fe-200d-2640-fe0f.png",sheet_x:43,sheet_y:32,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F9D6-1F3FF-200D-2640-FE0F",image:"1f9d6-1f3ff-200d-2640-fe0f.png",sheet_x:43,sheet_y:33,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,in,steamy,room"},"flag-un":{name:"United Nations FLAG",unified:"1F1FA-1F1F3",non_qualified:null,sheet_x:5,sheet_y:10,short_names:["flag-un"],text:"",added_in:"6.0",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"flag,un,united,nations"},us:{name:"United States FLAG",unified:"1F1FA-1F1F8",non_qualified:null,sheet_x:5,sheet_y:11,short_names:["us","flag-us"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"us,flag,united,states,america,nation,country,banner"},man_in_steamy_room:{name:"Man in Steamy Room",unified:"1F9D6-200D-2642-FE0F",non_qualified:"1F9D6-200D-2642",sheet_x:43,sheet_y:34,short_names:["man_in_steamy_room"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D6-1F3FB-200D-2642-FE0F",image:"1f9d6-1f3fb-200d-2642-fe0f.png",sheet_x:43,sheet_y:35,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D6-1F3FB"},"1F3FC":{unified:"1F9D6-1F3FC-200D-2642-FE0F",image:"1f9d6-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:36,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D6-1F3FC"},"1F3FD":{unified:"1F9D6-1F3FD-200D-2642-FE0F",image:"1f9d6-1f3fd-200d-2642-fe0f.png",sheet_x:43,sheet_y:37,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D6-1F3FD"},"1F3FE":{unified:"1F9D6-1F3FE-200D-2642-FE0F",image:"1f9d6-1f3fe-200d-2642-fe0f.png",sheet_x:43,sheet_y:38,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D6-1F3FE"},"1F3FF":{unified:"1F9D6-1F3FF-200D-2642-FE0F",image:"1f9d6-1f3ff-200d-2642-fe0f.png",sheet_x:43,sheet_y:39,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D6-1F3FF"}},obsoletes:"1F9D6",search:"man,in,steamy,room"},person_climbing:{name:"Person Climbing",unified:"1F9D7",non_qualified:null,sheet_x:44,sheet_y:6,short_names:["person_climbing"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D7-1F3FB",non_qualified:null,image:"1f9d7-1f3fb.png",sheet_x:44,sheet_y:7,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D7-1F3FB-200D-2640-FE0F"},"1F3FC":{unified:"1F9D7-1F3FC",non_qualified:null,image:"1f9d7-1f3fc.png",sheet_x:44,sheet_y:8,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D7-1F3FC-200D-2640-FE0F"},"1F3FD":{unified:"1F9D7-1F3FD",non_qualified:null,image:"1f9d7-1f3fd.png",sheet_x:44,sheet_y:9,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D7-1F3FD-200D-2640-FE0F"},"1F3FE":{unified:"1F9D7-1F3FE",non_qualified:null,image:"1f9d7-1f3fe.png",sheet_x:44,sheet_y:10,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D7-1F3FE-200D-2640-FE0F"},"1F3FF":{unified:"1F9D7-1F3FF",non_qualified:null,image:"1f9d7-1f3ff.png",sheet_x:44,sheet_y:11,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D7-1F3FF-200D-2640-FE0F"}},obsoleted_by:"1F9D7-200D-2640-FE0F",search:"person,climbing"},"flag-uy":{name:"Uruguay FLAG",unified:"1F1FA-1F1FE",non_qualified:null,sheet_x:5,sheet_y:12,short_names:["flag-uy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,uy,uruguay"},woman_climbing:{name:"Woman Climbing",unified:"1F9D7-200D-2640-FE0F",non_qualified:"1F9D7-200D-2640",sheet_x:43,sheet_y:46,short_names:["woman_climbing"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D7-1F3FB-200D-2640-FE0F",image:"1f9d7-1f3fb-200d-2640-fe0f.png",sheet_x:43,sheet_y:47,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D7-1F3FB"},"1F3FC":{unified:"1F9D7-1F3FC-200D-2640-FE0F",image:"1f9d7-1f3fc-200d-2640-fe0f.png",sheet_x:43,sheet_y:48,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D7-1F3FC"},"1F3FD":{unified:"1F9D7-1F3FD-200D-2640-FE0F",image:"1f9d7-1f3fd-200d-2640-fe0f.png",sheet_x:43,sheet_y:49,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D7-1F3FD"},"1F3FE":{unified:"1F9D7-1F3FE-200D-2640-FE0F",image:"1f9d7-1f3fe-200d-2640-fe0f.png",sheet_x:43,sheet_y:50,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D7-1F3FE"},"1F3FF":{unified:"1F9D7-1F3FF-200D-2640-FE0F",image:"1f9d7-1f3ff-200d-2640-fe0f.png",sheet_x:43,sheet_y:51,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D7-1F3FF"}},obsoletes:"1F9D7",search:"woman,climbing"},"flag-uz":{name:"Uzbekistan FLAG",unified:"1F1FA-1F1FF",non_qualified:null,sheet_x:5,sheet_y:13,short_names:["flag-uz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,uz,uzbekistan"},man_climbing:{name:"Man Climbing",unified:"1F9D7-200D-2642-FE0F",non_qualified:"1F9D7-200D-2642",sheet_x:44,sheet_y:0,short_names:["man_climbing"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D7-1F3FB-200D-2642-FE0F",image:"1f9d7-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:1,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F9D7-1F3FC-200D-2642-FE0F",image:"1f9d7-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:2,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F9D7-1F3FD-200D-2642-FE0F",image:"1f9d7-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:3,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F9D7-1F3FE-200D-2642-FE0F",image:"1f9d7-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:4,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F9D7-1F3FF-200D-2642-FE0F",image:"1f9d7-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:5,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,climbing"},"flag-va":{name:"Vatican City FLAG",unified:"1F1FB-1F1E6",non_qualified:null,sheet_x:5,sheet_y:14,short_names:["flag-va"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,va,vatican,city"},person_in_lotus_position:{name:"Person in Lotus Position",unified:"1F9D8",non_qualified:null,sheet_x:44,sheet_y:24,short_names:["person_in_lotus_position"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D8-1F3FB",non_qualified:null,image:"1f9d8-1f3fb.png",sheet_x:44,sheet_y:25,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D8-1F3FB-200D-2640-FE0F"},"1F3FC":{unified:"1F9D8-1F3FC",non_qualified:null,image:"1f9d8-1f3fc.png",sheet_x:44,sheet_y:26,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D8-1F3FC-200D-2640-FE0F"},"1F3FD":{unified:"1F9D8-1F3FD",non_qualified:null,image:"1f9d8-1f3fd.png",sheet_x:44,sheet_y:27,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D8-1F3FD-200D-2640-FE0F"},"1F3FE":{unified:"1F9D8-1F3FE",non_qualified:null,image:"1f9d8-1f3fe.png",sheet_x:44,sheet_y:28,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D8-1F3FE-200D-2640-FE0F"},"1F3FF":{unified:"1F9D8-1F3FF",non_qualified:null,image:"1f9d8-1f3ff.png",sheet_x:44,sheet_y:29,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoleted_by:"1F9D8-1F3FF-200D-2640-FE0F"}},obsoleted_by:"1F9D8-200D-2640-FE0F",search:"person,in,lotus,position"},"flag-vc":{name:"St. Vincent & Grenadines FLAG",unified:"1F1FB-1F1E8",non_qualified:null,sheet_x:5,sheet_y:15,short_names:["flag-vc"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,vc,st.,vincent,&,grenadines"},"flag-ve":{name:"Venezuela FLAG",unified:"1F1FB-1F1EA",non_qualified:null,sheet_x:5,sheet_y:16,short_names:["flag-ve"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ve,venezuela"},woman_in_lotus_position:{name:"Woman in Lotus Position",unified:"1F9D8-200D-2640-FE0F",non_qualified:"1F9D8-200D-2640",sheet_x:44,sheet_y:12,short_names:["woman_in_lotus_position"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D8-1F3FB-200D-2640-FE0F",image:"1f9d8-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:13,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D8-1F3FB"},"1F3FC":{unified:"1F9D8-1F3FC-200D-2640-FE0F",image:"1f9d8-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:14,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D8-1F3FC"},"1F3FD":{unified:"1F9D8-1F3FD-200D-2640-FE0F",image:"1f9d8-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:15,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D8-1F3FD"},"1F3FE":{unified:"1F9D8-1F3FE-200D-2640-FE0F",image:"1f9d8-1f3fe-200d-2640-fe0f.png",sheet_x:44,sheet_y:16,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D8-1F3FE"},"1F3FF":{unified:"1F9D8-1F3FF-200D-2640-FE0F",image:"1f9d8-1f3ff-200d-2640-fe0f.png",sheet_x:44,sheet_y:17,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F9D8-1F3FF"}},obsoletes:"1F9D8",search:"woman,in,lotus,position"},man_in_lotus_position:{name:"Man in Lotus Position",unified:"1F9D8-200D-2642-FE0F",non_qualified:"1F9D8-200D-2642",sheet_x:44,sheet_y:18,short_names:["man_in_lotus_position"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F9D8-1F3FB-200D-2642-FE0F",image:"1f9d8-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:19,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F9D8-1F3FC-200D-2642-FE0F",image:"1f9d8-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:20,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F9D8-1F3FD-200D-2642-FE0F",image:"1f9d8-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:21,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F9D8-1F3FE-200D-2642-FE0F",image:"1f9d8-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:22,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F9D8-1F3FF-200D-2642-FE0F",image:"1f9d8-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:23,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,in,lotus,position"},"flag-vg":{name:"British Virgin Islands FLAG",unified:"1F1FB-1F1EC",non_qualified:null,sheet_x:5,sheet_y:17,short_names:["flag-vg"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,vg,british,virgin,islands"},"flag-vi":{name:"U.s. Virgin Islands FLAG",unified:"1F1FB-1F1EE",non_qualified:null,sheet_x:5,sheet_y:18,short_names:["flag-vi"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,vi,u.s.,virgin,islands"},bath:{name:"Bath",unified:"1F6C0",non_qualified:null,sheet_x:36,sheet_y:36,short_names:["bath"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6C0-1F3FB",non_qualified:null,image:"1f6c0-1f3fb.png",sheet_x:36,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F6C0-1F3FC",non_qualified:null,image:"1f6c0-1f3fc.png",sheet_x:36,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F6C0-1F3FD",non_qualified:null,image:"1f6c0-1f3fd.png",sheet_x:36,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F6C0-1F3FE",non_qualified:null,image:"1f6c0-1f3fe.png",sheet_x:36,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F6C0-1F3FF",non_qualified:null,image:"1f6c0-1f3ff.png",sheet_x:36,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"bath,clean,shower,bathroom"},sleeping_accommodation:{name:"Sleeping Accommodation",unified:"1F6CC",non_qualified:null,sheet_x:36,sheet_y:48,short_names:["sleeping_accommodation"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6CC-1F3FB",non_qualified:null,image:"1f6cc-1f3fb.png",sheet_x:36,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F6CC-1F3FC",non_qualified:null,image:"1f6cc-1f3fc.png",sheet_x:36,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F6CC-1F3FD",non_qualified:null,image:"1f6cc-1f3fd.png",sheet_x:36,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F6CC-1F3FE",non_qualified:null,image:"1f6cc-1f3fe.png",sheet_x:37,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F6CC-1F3FF",non_qualified:null,image:"1f6cc-1f3ff.png",sheet_x:37,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"sleeping,accommodation"},"flag-vn":{name:"Vietnam FLAG",unified:"1F1FB-1F1F3",non_qualified:null,sheet_x:5,sheet_y:19,short_names:["flag-vn"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,vn,vietnam"},man_in_business_suit_levitating:{name:"Man in Business Suit Levitating",unified:"1F574-FE0F",non_qualified:"1F574",sheet_x:28,sheet_y:45,short_names:["man_in_business_suit_levitating"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F574-1F3FB",non_qualified:null,image:"1f574-1f3fb.png",sheet_x:28,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F574-1F3FC",non_qualified:null,image:"1f574-1f3fc.png",sheet_x:28,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F574-1F3FD",non_qualified:null,image:"1f574-1f3fd.png",sheet_x:28,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F574-1F3FE",non_qualified:null,image:"1f574-1f3fe.png",sheet_x:28,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F574-1F3FF",non_qualified:null,image:"1f574-1f3ff.png",sheet_x:28,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"man,in,business,suit,levitating"},"flag-vu":{name:"Vanuatu FLAG",unified:"1F1FB-1F1FA",non_qualified:null,sheet_x:5,sheet_y:20,short_names:["flag-vu"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,vu,vanuatu"},"flag-wf":{name:"Wallis & Futuna FLAG",unified:"1F1FC-1F1EB",non_qualified:null,sheet_x:5,sheet_y:21,short_names:["flag-wf"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,wf,wallis,&,futuna"},speaking_head_in_silhouette:{name:"Speaking Head in Silhouette",unified:"1F5E3-FE0F",non_qualified:"1F5E3",sheet_x:30,sheet_y:14,short_names:["speaking_head_in_silhouette"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"speaking,head,in,silhouette"},bust_in_silhouette:{name:"Bust in Silhouette",unified:"1F464",non_qualified:null,sheet_x:15,sheet_y:40,short_names:["bust_in_silhouette"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bust,in,silhouette,user,person,human"},"flag-ws":{name:"Samoa FLAG",unified:"1F1FC-1F1F8",non_qualified:null,sheet_x:5,sheet_y:22,short_names:["flag-ws"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ws,samoa"},busts_in_silhouette:{name:"Busts in Silhouette",unified:"1F465",non_qualified:null,sheet_x:15,sheet_y:41,short_names:["busts_in_silhouette"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"busts,in,silhouette,user,person,human,group,team"},"flag-xk":{name:"Kosovo FLAG",unified:"1F1FD-1F1F0",non_qualified:null,sheet_x:5,sheet_y:23,short_names:["flag-xk"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,xk,kosovo"},fencer:{name:"Fencer",unified:"1F93A",non_qualified:null,sheet_x:40,sheet_y:48,short_names:["fencer"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"fencer"},"flag-ye":{name:"Yemen FLAG",unified:"1F1FE-1F1EA",non_qualified:null,sheet_x:5,sheet_y:24,short_names:["flag-ye"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,ye,yemen"},"flag-yt":{name:"Mayotte FLAG",unified:"1F1FE-1F1F9",non_qualified:null,sheet_x:5,sheet_y:25,short_names:["flag-yt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,yt,mayotte"},horse_racing:{name:"Horse Racing",unified:"1F3C7",non_qualified:null,sheet_x:10,sheet_y:20,short_names:["horse_racing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C7-1F3FB",non_qualified:null,image:"1f3c7-1f3fb.png",sheet_x:10,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3C7-1F3FC",non_qualified:null,image:"1f3c7-1f3fc.png",sheet_x:10,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3C7-1F3FD",non_qualified:null,image:"1f3c7-1f3fd.png",sheet_x:10,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3C7-1F3FE",non_qualified:null,image:"1f3c7-1f3fe.png",sheet_x:10,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3C7-1F3FF",non_qualified:null,image:"1f3c7-1f3ff.png",sheet_x:10,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"horse,racing,animal,betting,competition,gambling,luck"},"flag-za":{name:"South Africa FLAG",unified:"1F1FF-1F1E6",non_qualified:null,sheet_x:5,sheet_y:26,short_names:["flag-za"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,za,south,africa"},skier:{name:"Skier",unified:"26F7-FE0F",non_qualified:"26F7",sheet_x:48,sheet_y:44,short_names:["skier"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"skier,sports,winter,snow"},"flag-zm":{name:"Zambia FLAG",unified:"1F1FF-1F1F2",non_qualified:null,sheet_x:5,sheet_y:27,short_names:["flag-zm"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,zm,zambia"},snowboarder:{name:"Snowboarder",unified:"1F3C2",non_qualified:null,sheet_x:9,sheet_y:28,short_names:["snowboarder"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C2-1F3FB",non_qualified:null,image:"1f3c2-1f3fb.png",sheet_x:9,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3C2-1F3FC",non_qualified:null,image:"1f3c2-1f3fc.png",sheet_x:9,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3C2-1F3FD",non_qualified:null,image:"1f3c2-1f3fd.png",sheet_x:9,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3C2-1F3FE",non_qualified:null,image:"1f3c2-1f3fe.png",sheet_x:9,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3C2-1F3FF",non_qualified:null,image:"1f3c2-1f3ff.png",sheet_x:9,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true}},search:"snowboarder,sports,winter"},golfer:{name:"Golfer",unified:"1F3CC-FE0F",non_qualified:"1F3CC",sheet_x:11,sheet_y:24,short_names:["golfer"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CC-1F3FB",non_qualified:null,image:"1f3cc-1f3fb.png",sheet_x:11,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CC-1F3FC",non_qualified:null,image:"1f3cc-1f3fc.png",sheet_x:11,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CC-1F3FD",non_qualified:null,image:"1f3cc-1f3fd.png",sheet_x:11,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CC-1F3FE",non_qualified:null,image:"1f3cc-1f3fe.png",sheet_x:11,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CC-1F3FF",non_qualified:null,image:"1f3cc-1f3ff.png",sheet_x:11,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoleted_by:"1F3CC-FE0F-200D-2642-FE0F",search:"golfer"},"flag-zw":{name:"Zimbabwe FLAG",unified:"1F1FF-1F1FC",non_qualified:null,sheet_x:5,sheet_y:28,short_names:["flag-zw"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"flag,zw,zimbabwe"},"man-golfing":{name:"Man Golfing",unified:"1F3CC-FE0F-200D-2642-FE0F",non_qualified:null,sheet_x:11,sheet_y:18,short_names:["man-golfing"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CC-1F3FB-200D-2642-FE0F",image:"1f3cc-1f3fb-200d-2642-fe0f.png",sheet_x:11,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CC-1F3FC-200D-2642-FE0F",image:"1f3cc-1f3fc-200d-2642-fe0f.png",sheet_x:11,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CC-1F3FD-200D-2642-FE0F",image:"1f3cc-1f3fd-200d-2642-fe0f.png",sheet_x:11,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CC-1F3FE-200D-2642-FE0F",image:"1f3cc-1f3fe-200d-2642-fe0f.png",sheet_x:11,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CC-1F3FF-200D-2642-FE0F",image:"1f3cc-1f3ff-200d-2642-fe0f.png",sheet_x:11,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3CC-FE0F",search:"man,golfing"},"flag-england":{name:"England FLAG",unified:"1F3F4-E0067-E0062-E0065-E006E-E0067-E007F",non_qualified:null,sheet_x:12,sheet_y:16,short_names:["flag-england"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"flag,england"},"woman-golfing":{name:"Woman Golfing",unified:"1F3CC-FE0F-200D-2640-FE0F",non_qualified:null,sheet_x:11,sheet_y:12,short_names:["woman-golfing"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CC-1F3FB-200D-2640-FE0F",image:"1f3cc-1f3fb-200d-2640-fe0f.png",sheet_x:11,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CC-1F3FC-200D-2640-FE0F",image:"1f3cc-1f3fc-200d-2640-fe0f.png",sheet_x:11,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CC-1F3FD-200D-2640-FE0F",image:"1f3cc-1f3fd-200d-2640-fe0f.png",sheet_x:11,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CC-1F3FE-200D-2640-FE0F",image:"1f3cc-1f3fe-200d-2640-fe0f.png",sheet_x:11,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CC-1F3FF-200D-2640-FE0F",image:"1f3cc-1f3ff-200d-2640-fe0f.png",sheet_x:11,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,golfing"},"flag-scotland":{name:"Scotland FLAG",unified:"1F3F4-E0067-E0062-E0073-E0063-E0074-E007F",non_qualified:null,sheet_x:12,sheet_y:17,short_names:["flag-scotland"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"flag,scotland"},"flag-wales":{name:"Wales FLAG",unified:"1F3F4-E0067-E0062-E0077-E006C-E0073-E007F",non_qualified:null,sheet_x:12,sheet_y:18,short_names:["flag-wales"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"flag,wales"},surfer:{name:"Surfer",unified:"1F3C4",non_qualified:null,sheet_x:10,sheet_y:12,short_names:["surfer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C4-1F3FB",non_qualified:null,image:"1f3c4-1f3fb.png",sheet_x:10,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F3C4-1F3FC",non_qualified:null,image:"1f3c4-1f3fc.png",sheet_x:10,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F3C4-1F3FD",non_qualified:null,image:"1f3c4-1f3fd.png",sheet_x:10,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F3C4-1F3FE",non_qualified:null,image:"1f3c4-1f3fe.png",sheet_x:10,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F3C4-1F3FF",non_qualified:null,image:"1f3c4-1f3ff.png",sheet_x:10,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F3C4-200D-2642-FE0F",search:"surfer"},"man-surfing":{name:"Man Surfing",unified:"1F3C4-200D-2642-FE0F",non_qualified:"1F3C4-200D-2642",sheet_x:10,sheet_y:6,short_names:["man-surfing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C4-1F3FB-200D-2642-FE0F",image:"1f3c4-1f3fb-200d-2642-fe0f.png",sheet_x:10,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C4-1F3FC-200D-2642-FE0F",image:"1f3c4-1f3fc-200d-2642-fe0f.png",sheet_x:10,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C4-1F3FD-200D-2642-FE0F",image:"1f3c4-1f3fd-200d-2642-fe0f.png",sheet_x:10,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C4-1F3FE-200D-2642-FE0F",image:"1f3c4-1f3fe-200d-2642-fe0f.png",sheet_x:10,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C4-1F3FF-200D-2642-FE0F",image:"1f3c4-1f3ff-200d-2642-fe0f.png",sheet_x:10,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3C4",search:"man,surfing"},"woman-surfing":{name:"Woman Surfing",unified:"1F3C4-200D-2640-FE0F",non_qualified:"1F3C4-200D-2640",sheet_x:10,sheet_y:0,short_names:["woman-surfing"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C4-1F3FB-200D-2640-FE0F",image:"1f3c4-1f3fb-200d-2640-fe0f.png",sheet_x:10,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C4-1F3FC-200D-2640-FE0F",image:"1f3c4-1f3fc-200d-2640-fe0f.png",sheet_x:10,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C4-1F3FD-200D-2640-FE0F",image:"1f3c4-1f3fd-200d-2640-fe0f.png",sheet_x:10,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C4-1F3FE-200D-2640-FE0F",image:"1f3c4-1f3fe-200d-2640-fe0f.png",sheet_x:10,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C4-1F3FF-200D-2640-FE0F",image:"1f3c4-1f3ff-200d-2640-fe0f.png",sheet_x:10,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,surfing"},rowboat:{name:"Rowboat",unified:"1F6A3",non_qualified:null,sheet_x:35,sheet_y:3,short_names:["rowboat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6A3-1F3FB",non_qualified:null,image:"1f6a3-1f3fb.png",sheet_x:35,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6A3-1F3FC",non_qualified:null,image:"1f6a3-1f3fc.png",sheet_x:35,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6A3-1F3FD",non_qualified:null,image:"1f6a3-1f3fd.png",sheet_x:35,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6A3-1F3FE",non_qualified:null,image:"1f6a3-1f3fe.png",sheet_x:35,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6A3-1F3FF",non_qualified:null,image:"1f6a3-1f3ff.png",sheet_x:35,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false}},obsoleted_by:"1F6A3-200D-2642-FE0F",search:"rowboat"},"man-rowing-boat":{name:"Man Rowing Boat",unified:"1F6A3-200D-2642-FE0F",non_qualified:"1F6A3-200D-2642",sheet_x:34,sheet_y:49,short_names:["man-rowing-boat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6A3-1F3FB-200D-2642-FE0F",image:"1f6a3-1f3fb-200d-2642-fe0f.png",sheet_x:34,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6A3-1F3FC-200D-2642-FE0F",image:"1f6a3-1f3fc-200d-2642-fe0f.png",sheet_x:34,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6A3-1F3FD-200D-2642-FE0F",image:"1f6a3-1f3fd-200d-2642-fe0f.png",sheet_x:35,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6A3-1F3FE-200D-2642-FE0F",image:"1f6a3-1f3fe-200d-2642-fe0f.png",sheet_x:35,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6A3-1F3FF-200D-2642-FE0F",image:"1f6a3-1f3ff-200d-2642-fe0f.png",sheet_x:35,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6A3",search:"man,rowing,boat"},"woman-rowing-boat":{name:"Woman Rowing Boat",unified:"1F6A3-200D-2640-FE0F",non_qualified:"1F6A3-200D-2640",sheet_x:34,sheet_y:43,short_names:["woman-rowing-boat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6A3-1F3FB-200D-2640-FE0F",image:"1f6a3-1f3fb-200d-2640-fe0f.png",sheet_x:34,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6A3-1F3FC-200D-2640-FE0F",image:"1f6a3-1f3fc-200d-2640-fe0f.png",sheet_x:34,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6A3-1F3FD-200D-2640-FE0F",image:"1f6a3-1f3fd-200d-2640-fe0f.png",sheet_x:34,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6A3-1F3FE-200D-2640-FE0F",image:"1f6a3-1f3fe-200d-2640-fe0f.png",sheet_x:34,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6A3-1F3FF-200D-2640-FE0F",image:"1f6a3-1f3ff-200d-2640-fe0f.png",sheet_x:34,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,rowing,boat"},swimmer:{name:"Swimmer",unified:"1F3CA",non_qualified:null,sheet_x:10,sheet_y:40,short_names:["swimmer"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3CA-1F3FB",non_qualified:null,image:"1f3ca-1f3fb.png",sheet_x:10,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F3CA-1F3FC",non_qualified:null,image:"1f3ca-1f3fc.png",sheet_x:10,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F3CA-1F3FD",non_qualified:null,image:"1f3ca-1f3fd.png",sheet_x:10,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F3CA-1F3FE",non_qualified:null,image:"1f3ca-1f3fe.png",sheet_x:10,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F3CA-1F3FF",non_qualified:null,image:"1f3ca-1f3ff.png",sheet_x:10,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F3CA-200D-2642-FE0F",search:"swimmer"},"man-swimming":{name:"Man Swimming",unified:"1F3CA-200D-2642-FE0F",non_qualified:"1F3CA-200D-2642",sheet_x:10,sheet_y:34,short_names:["man-swimming"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CA-1F3FB-200D-2642-FE0F",image:"1f3ca-1f3fb-200d-2642-fe0f.png",sheet_x:10,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CA-1F3FC-200D-2642-FE0F",image:"1f3ca-1f3fc-200d-2642-fe0f.png",sheet_x:10,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CA-1F3FD-200D-2642-FE0F",image:"1f3ca-1f3fd-200d-2642-fe0f.png",sheet_x:10,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CA-1F3FE-200D-2642-FE0F",image:"1f3ca-1f3fe-200d-2642-fe0f.png",sheet_x:10,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CA-1F3FF-200D-2642-FE0F",image:"1f3ca-1f3ff-200d-2642-fe0f.png",sheet_x:10,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3CA",search:"man,swimming"},"woman-swimming":{name:"Woman Swimming",unified:"1F3CA-200D-2640-FE0F",non_qualified:"1F3CA-200D-2640",sheet_x:10,sheet_y:28,short_names:["woman-swimming"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CA-1F3FB-200D-2640-FE0F",image:"1f3ca-1f3fb-200d-2640-fe0f.png",sheet_x:10,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CA-1F3FC-200D-2640-FE0F",image:"1f3ca-1f3fc-200d-2640-fe0f.png",sheet_x:10,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CA-1F3FD-200D-2640-FE0F",image:"1f3ca-1f3fd-200d-2640-fe0f.png",sheet_x:10,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CA-1F3FE-200D-2640-FE0F",image:"1f3ca-1f3fe-200d-2640-fe0f.png",sheet_x:10,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CA-1F3FF-200D-2640-FE0F",image:"1f3ca-1f3ff-200d-2640-fe0f.png",sheet_x:10,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,swimming"},person_with_ball:{name:"Person with Ball",unified:"26F9-FE0F",non_qualified:"26F9",sheet_x:49,sheet_y:6,short_names:["person_with_ball"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"26F9-1F3FB",non_qualified:null,image:"26f9-1f3fb.png",sheet_x:49,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"26F9-1F3FC",non_qualified:null,image:"26f9-1f3fc.png",sheet_x:49,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"26F9-1F3FD",non_qualified:null,image:"26f9-1f3fd.png",sheet_x:49,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"26F9-1F3FE",non_qualified:null,image:"26f9-1f3fe.png",sheet_x:49,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"26F9-1F3FF",non_qualified:null,image:"26f9-1f3ff.png",sheet_x:49,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false}},obsoleted_by:"26F9-FE0F-200D-2642-FE0F",search:"person,with,ball"},"man-bouncing-ball":{name:"Man Bouncing Ball",unified:"26F9-FE0F-200D-2642-FE0F",non_qualified:null,sheet_x:49,sheet_y:0,short_names:["man-bouncing-ball"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"26F9-1F3FB-200D-2642-FE0F",image:"26f9-1f3fb-200d-2642-fe0f.png",sheet_x:49,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"26F9-1F3FC-200D-2642-FE0F",image:"26f9-1f3fc-200d-2642-fe0f.png",sheet_x:49,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"26F9-1F3FD-200D-2642-FE0F",image:"26f9-1f3fd-200d-2642-fe0f.png",sheet_x:49,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"26F9-1F3FE-200D-2642-FE0F",image:"26f9-1f3fe-200d-2642-fe0f.png",sheet_x:49,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"26F9-1F3FF-200D-2642-FE0F",image:"26f9-1f3ff-200d-2642-fe0f.png",sheet_x:49,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"26F9-FE0F",search:"man,bouncing,ball"},"woman-bouncing-ball":{name:"Woman Bouncing Ball",unified:"26F9-FE0F-200D-2640-FE0F",non_qualified:null,sheet_x:48,sheet_y:46,short_names:["woman-bouncing-ball"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"26F9-1F3FB-200D-2640-FE0F",image:"26f9-1f3fb-200d-2640-fe0f.png",sheet_x:48,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"26F9-1F3FC-200D-2640-FE0F",image:"26f9-1f3fc-200d-2640-fe0f.png",sheet_x:48,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"26F9-1F3FD-200D-2640-FE0F",image:"26f9-1f3fd-200d-2640-fe0f.png",sheet_x:48,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"26F9-1F3FE-200D-2640-FE0F",image:"26f9-1f3fe-200d-2640-fe0f.png",sheet_x:48,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"26F9-1F3FF-200D-2640-FE0F",image:"26f9-1f3ff-200d-2640-fe0f.png",sheet_x:48,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,bouncing,ball"},weight_lifter:{name:"Weight Lifter",unified:"1F3CB-FE0F",non_qualified:"1F3CB",sheet_x:11,sheet_y:6,short_names:["weight_lifter"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CB-1F3FB",non_qualified:null,image:"1f3cb-1f3fb.png",sheet_x:11,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CB-1F3FC",non_qualified:null,image:"1f3cb-1f3fc.png",sheet_x:11,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CB-1F3FD",non_qualified:null,image:"1f3cb-1f3fd.png",sheet_x:11,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CB-1F3FE",non_qualified:null,image:"1f3cb-1f3fe.png",sheet_x:11,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CB-1F3FF",non_qualified:null,image:"1f3cb-1f3ff.png",sheet_x:11,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false}},obsoleted_by:"1F3CB-FE0F-200D-2642-FE0F",search:"weight,lifter"},"man-lifting-weights":{name:"Man Lifting Weights",unified:"1F3CB-FE0F-200D-2642-FE0F",non_qualified:null,sheet_x:11,sheet_y:0,short_names:["man-lifting-weights"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CB-1F3FB-200D-2642-FE0F",image:"1f3cb-1f3fb-200d-2642-fe0f.png",sheet_x:11,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CB-1F3FC-200D-2642-FE0F",image:"1f3cb-1f3fc-200d-2642-fe0f.png",sheet_x:11,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CB-1F3FD-200D-2642-FE0F",image:"1f3cb-1f3fd-200d-2642-fe0f.png",sheet_x:11,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CB-1F3FE-200D-2642-FE0F",image:"1f3cb-1f3fe-200d-2642-fe0f.png",sheet_x:11,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CB-1F3FF-200D-2642-FE0F",image:"1f3cb-1f3ff-200d-2642-fe0f.png",sheet_x:11,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3CB-FE0F",search:"man,lifting,weights"},"woman-lifting-weights":{name:"Woman Lifting Weights",unified:"1F3CB-FE0F-200D-2640-FE0F",non_qualified:null,sheet_x:10,sheet_y:46,short_names:["woman-lifting-weights"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CB-1F3FB-200D-2640-FE0F",image:"1f3cb-1f3fb-200d-2640-fe0f.png",sheet_x:10,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CB-1F3FC-200D-2640-FE0F",image:"1f3cb-1f3fc-200d-2640-fe0f.png",sheet_x:10,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CB-1F3FD-200D-2640-FE0F",image:"1f3cb-1f3fd-200d-2640-fe0f.png",sheet_x:10,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CB-1F3FE-200D-2640-FE0F",image:"1f3cb-1f3fe-200d-2640-fe0f.png",sheet_x:10,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CB-1F3FF-200D-2640-FE0F",image:"1f3cb-1f3ff-200d-2640-fe0f.png",sheet_x:10,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,lifting,weights"},bicyclist:{name:"Bicyclist",unified:"1F6B4",non_qualified:null,sheet_x:35,sheet_y:37,short_names:["bicyclist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6B4-1F3FB",non_qualified:null,image:"1f6b4-1f3fb.png",sheet_x:35,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F6B4-1F3FC",non_qualified:null,image:"1f6b4-1f3fc.png",sheet_x:35,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F6B4-1F3FD",non_qualified:null,image:"1f6b4-1f3fd.png",sheet_x:35,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F6B4-1F3FE",non_qualified:null,image:"1f6b4-1f3fe.png",sheet_x:35,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F6B4-1F3FF",non_qualified:null,image:"1f6b4-1f3ff.png",sheet_x:35,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F6B4-200D-2642-FE0F",search:"bicyclist"},"man-biking":{name:"Man Biking",unified:"1F6B4-200D-2642-FE0F",non_qualified:"1F6B4-200D-2642",sheet_x:35,sheet_y:31,short_names:["man-biking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B4-1F3FB-200D-2642-FE0F",image:"1f6b4-1f3fb-200d-2642-fe0f.png",sheet_x:35,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B4-1F3FC-200D-2642-FE0F",image:"1f6b4-1f3fc-200d-2642-fe0f.png",sheet_x:35,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B4-1F3FD-200D-2642-FE0F",image:"1f6b4-1f3fd-200d-2642-fe0f.png",sheet_x:35,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B4-1F3FE-200D-2642-FE0F",image:"1f6b4-1f3fe-200d-2642-fe0f.png",sheet_x:35,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B4-1F3FF-200D-2642-FE0F",image:"1f6b4-1f3ff-200d-2642-fe0f.png",sheet_x:35,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6B4",search:"man,biking"},"woman-biking":{name:"Woman Biking",unified:"1F6B4-200D-2640-FE0F",non_qualified:"1F6B4-200D-2640",sheet_x:35,sheet_y:25,short_names:["woman-biking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B4-1F3FB-200D-2640-FE0F",image:"1f6b4-1f3fb-200d-2640-fe0f.png",sheet_x:35,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B4-1F3FC-200D-2640-FE0F",image:"1f6b4-1f3fc-200d-2640-fe0f.png",sheet_x:35,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B4-1F3FD-200D-2640-FE0F",image:"1f6b4-1f3fd-200d-2640-fe0f.png",sheet_x:35,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B4-1F3FE-200D-2640-FE0F",image:"1f6b4-1f3fe-200d-2640-fe0f.png",sheet_x:35,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B4-1F3FF-200D-2640-FE0F",image:"1f6b4-1f3ff-200d-2640-fe0f.png",sheet_x:35,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,biking"},mountain_bicyclist:{name:"Mountain Bicyclist",unified:"1F6B5",non_qualified:null,sheet_x:36,sheet_y:3,short_names:["mountain_bicyclist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6B5-1F3FB",non_qualified:null,image:"1f6b5-1f3fb.png",sheet_x:36,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FC":{unified:"1F6B5-1F3FC",non_qualified:null,image:"1f6b5-1f3fc.png",sheet_x:36,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FD":{unified:"1F6B5-1F3FD",non_qualified:null,image:"1f6b5-1f3fd.png",sheet_x:36,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FE":{unified:"1F6B5-1F3FE",non_qualified:null,image:"1f6b5-1f3fe.png",sheet_x:36,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true},"1F3FF":{unified:"1F6B5-1F3FF",non_qualified:null,image:"1f6b5-1f3ff.png",sheet_x:36,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true}},obsoleted_by:"1F6B5-200D-2642-FE0F",search:"mountain,bicyclist"},"man-mountain-biking":{name:"Man Mountain Biking",unified:"1F6B5-200D-2642-FE0F",non_qualified:"1F6B5-200D-2642",sheet_x:35,sheet_y:49,short_names:["man-mountain-biking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B5-1F3FB-200D-2642-FE0F",image:"1f6b5-1f3fb-200d-2642-fe0f.png",sheet_x:35,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B5-1F3FC-200D-2642-FE0F",image:"1f6b5-1f3fc-200d-2642-fe0f.png",sheet_x:35,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B5-1F3FD-200D-2642-FE0F",image:"1f6b5-1f3fd-200d-2642-fe0f.png",sheet_x:36,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B5-1F3FE-200D-2642-FE0F",image:"1f6b5-1f3fe-200d-2642-fe0f.png",sheet_x:36,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B5-1F3FF-200D-2642-FE0F",image:"1f6b5-1f3ff-200d-2642-fe0f.png",sheet_x:36,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6B5",search:"man,mountain,biking"},"woman-mountain-biking":{name:"Woman Mountain Biking",unified:"1F6B5-200D-2640-FE0F",non_qualified:"1F6B5-200D-2640",sheet_x:35,sheet_y:43,short_names:["woman-mountain-biking"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B5-1F3FB-200D-2640-FE0F",image:"1f6b5-1f3fb-200d-2640-fe0f.png",sheet_x:35,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B5-1F3FC-200D-2640-FE0F",image:"1f6b5-1f3fc-200d-2640-fe0f.png",sheet_x:35,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B5-1F3FD-200D-2640-FE0F",image:"1f6b5-1f3fd-200d-2640-fe0f.png",sheet_x:35,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B5-1F3FE-200D-2640-FE0F",image:"1f6b5-1f3fe-200d-2640-fe0f.png",sheet_x:35,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B5-1F3FF-200D-2640-FE0F",image:"1f6b5-1f3ff-200d-2640-fe0f.png",sheet_x:35,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,mountain,biking"},racing_car:{name:"Racing Car",unified:"1F3CE-FE0F",non_qualified:"1F3CE",sheet_x:11,sheet_y:31,short_names:["racing_car"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"racing,car,sports,race,fast,formula,f1"},racing_motorcycle:{name:"Racing Motorcycle",unified:"1F3CD-FE0F",non_qualified:"1F3CD",sheet_x:11,sheet_y:30,short_names:["racing_motorcycle"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"racing,motorcycle"},person_doing_cartwheel:{name:"Person Doing Cartwheel",unified:"1F938",non_qualified:null,sheet_x:40,sheet_y:24,short_names:["person_doing_cartwheel"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F938-1F3FB",non_qualified:null,image:"1f938-1f3fb.png",sheet_x:40,sheet_y:25,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F938-1F3FC",non_qualified:null,image:"1f938-1f3fc.png",sheet_x:40,sheet_y:26,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F938-1F3FD",non_qualified:null,image:"1f938-1f3fd.png",sheet_x:40,sheet_y:27,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F938-1F3FE",non_qualified:null,image:"1f938-1f3fe.png",sheet_x:40,sheet_y:28,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F938-1F3FF",non_qualified:null,image:"1f938-1f3ff.png",sheet_x:40,sheet_y:29,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false}},search:"person,doing,cartwheel"},"man-cartwheeling":{name:"Man Cartwheeling",unified:"1F938-200D-2642-FE0F",non_qualified:"1F938-200D-2642",sheet_x:40,sheet_y:18,short_names:["man-cartwheeling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F938-1F3FB-200D-2642-FE0F",image:"1f938-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:19,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F938-1F3FC-200D-2642-FE0F",image:"1f938-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:20,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F938-1F3FD-200D-2642-FE0F",image:"1f938-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:21,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F938-1F3FE-200D-2642-FE0F",image:"1f938-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:22,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F938-1F3FF-200D-2642-FE0F",image:"1f938-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:23,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,cartwheeling"},"woman-cartwheeling":{name:"Woman Cartwheeling",unified:"1F938-200D-2640-FE0F",non_qualified:"1F938-200D-2640",sheet_x:40,sheet_y:12,short_names:["woman-cartwheeling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F938-1F3FB-200D-2640-FE0F",image:"1f938-1f3fb-200d-2640-fe0f.png",sheet_x:40,sheet_y:13,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F938-1F3FC-200D-2640-FE0F",image:"1f938-1f3fc-200d-2640-fe0f.png",sheet_x:40,sheet_y:14,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F938-1F3FD-200D-2640-FE0F",image:"1f938-1f3fd-200d-2640-fe0f.png",sheet_x:40,sheet_y:15,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F938-1F3FE-200D-2640-FE0F",image:"1f938-1f3fe-200d-2640-fe0f.png",sheet_x:40,sheet_y:16,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F938-1F3FF-200D-2640-FE0F",image:"1f938-1f3ff-200d-2640-fe0f.png",sheet_x:40,sheet_y:17,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,cartwheeling"},wrestlers:{name:"Wrestlers",unified:"1F93C",non_qualified:null,sheet_x:40,sheet_y:51,short_names:["wrestlers"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,search:"wrestlers"},"man-wrestling":{name:"Man Wrestling",unified:"1F93C-200D-2642-FE0F",non_qualified:"1F93C-200D-2642",sheet_x:40,sheet_y:50,short_names:["man-wrestling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,wrestling"},"woman-wrestling":{name:"Woman Wrestling",unified:"1F93C-200D-2640-FE0F",non_qualified:"1F93C-200D-2640",sheet_x:40,sheet_y:49,short_names:["woman-wrestling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,wrestling"},water_polo:{name:"Water Polo",unified:"1F93D",non_qualified:null,sheet_x:41,sheet_y:12,short_names:["water_polo"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93D-1F3FB",non_qualified:null,image:"1f93d-1f3fb.png",sheet_x:41,sheet_y:13,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93D-1F3FC",non_qualified:null,image:"1f93d-1f3fc.png",sheet_x:41,sheet_y:14,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93D-1F3FD",non_qualified:null,image:"1f93d-1f3fd.png",sheet_x:41,sheet_y:15,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93D-1F3FE",non_qualified:null,image:"1f93d-1f3fe.png",sheet_x:41,sheet_y:16,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93D-1F3FF",non_qualified:null,image:"1f93d-1f3ff.png",sheet_x:41,sheet_y:17,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false}},search:"water,polo"},"man-playing-water-polo":{name:"Man Playing Water Polo",unified:"1F93D-200D-2642-FE0F",non_qualified:"1F93D-200D-2642",sheet_x:41,sheet_y:6,short_names:["man-playing-water-polo"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93D-1F3FB-200D-2642-FE0F",image:"1f93d-1f3fb-200d-2642-fe0f.png",sheet_x:41,sheet_y:7,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93D-1F3FC-200D-2642-FE0F",image:"1f93d-1f3fc-200d-2642-fe0f.png",sheet_x:41,sheet_y:8,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93D-1F3FD-200D-2642-FE0F",image:"1f93d-1f3fd-200d-2642-fe0f.png",sheet_x:41,sheet_y:9,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93D-1F3FE-200D-2642-FE0F",image:"1f93d-1f3fe-200d-2642-fe0f.png",sheet_x:41,sheet_y:10,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93D-1F3FF-200D-2642-FE0F",image:"1f93d-1f3ff-200d-2642-fe0f.png",sheet_x:41,sheet_y:11,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,playing,water,polo"},"woman-playing-water-polo":{name:"Woman Playing Water Polo",unified:"1F93D-200D-2640-FE0F",non_qualified:"1F93D-200D-2640",sheet_x:41,sheet_y:0,short_names:["woman-playing-water-polo"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93D-1F3FB-200D-2640-FE0F",image:"1f93d-1f3fb-200d-2640-fe0f.png",sheet_x:41,sheet_y:1,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93D-1F3FC-200D-2640-FE0F",image:"1f93d-1f3fc-200d-2640-fe0f.png",sheet_x:41,sheet_y:2,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93D-1F3FD-200D-2640-FE0F",image:"1f93d-1f3fd-200d-2640-fe0f.png",sheet_x:41,sheet_y:3,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93D-1F3FE-200D-2640-FE0F",image:"1f93d-1f3fe-200d-2640-fe0f.png",sheet_x:41,sheet_y:4,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93D-1F3FF-200D-2640-FE0F",image:"1f93d-1f3ff-200d-2640-fe0f.png",sheet_x:41,sheet_y:5,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,playing,water,polo"},handball:{name:"Handball",unified:"1F93E",non_qualified:null,sheet_x:41,sheet_y:30,short_names:["handball"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93E-1F3FB",non_qualified:null,image:"1f93e-1f3fb.png",sheet_x:41,sheet_y:31,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93E-1F3FC",non_qualified:null,image:"1f93e-1f3fc.png",sheet_x:41,sheet_y:32,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93E-1F3FD",non_qualified:null,image:"1f93e-1f3fd.png",sheet_x:41,sheet_y:33,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93E-1F3FE",non_qualified:null,image:"1f93e-1f3fe.png",sheet_x:41,sheet_y:34,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93E-1F3FF",non_qualified:null,image:"1f93e-1f3ff.png",sheet_x:41,sheet_y:35,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false}},search:"handball"},"man-playing-handball":{name:"Man Playing Handball",unified:"1F93E-200D-2642-FE0F",non_qualified:"1F93E-200D-2642",sheet_x:41,sheet_y:24,short_names:["man-playing-handball"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93E-1F3FB-200D-2642-FE0F",image:"1f93e-1f3fb-200d-2642-fe0f.png",sheet_x:41,sheet_y:25,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93E-1F3FC-200D-2642-FE0F",image:"1f93e-1f3fc-200d-2642-fe0f.png",sheet_x:41,sheet_y:26,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93E-1F3FD-200D-2642-FE0F",image:"1f93e-1f3fd-200d-2642-fe0f.png",sheet_x:41,sheet_y:27,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93E-1F3FE-200D-2642-FE0F",image:"1f93e-1f3fe-200d-2642-fe0f.png",sheet_x:41,sheet_y:28,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93E-1F3FF-200D-2642-FE0F",image:"1f93e-1f3ff-200d-2642-fe0f.png",sheet_x:41,sheet_y:29,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,playing,handball"},"woman-playing-handball":{name:"Woman Playing Handball",unified:"1F93E-200D-2640-FE0F",non_qualified:"1F93E-200D-2640",sheet_x:41,sheet_y:18,short_names:["woman-playing-handball"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93E-1F3FB-200D-2640-FE0F",image:"1f93e-1f3fb-200d-2640-fe0f.png",sheet_x:41,sheet_y:19,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93E-1F3FC-200D-2640-FE0F",image:"1f93e-1f3fc-200d-2640-fe0f.png",sheet_x:41,sheet_y:20,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93E-1F3FD-200D-2640-FE0F",image:"1f93e-1f3fd-200d-2640-fe0f.png",sheet_x:41,sheet_y:21,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93E-1F3FE-200D-2640-FE0F",image:"1f93e-1f3fe-200d-2640-fe0f.png",sheet_x:41,sheet_y:22,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93E-1F3FF-200D-2640-FE0F",image:"1f93e-1f3ff-200d-2640-fe0f.png",sheet_x:41,sheet_y:23,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,playing,handball"},juggling:{name:"Juggling",unified:"1F939",non_qualified:null,sheet_x:40,sheet_y:42,short_names:["juggling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F939-1F3FB",non_qualified:null,image:"1f939-1f3fb.png",sheet_x:40,sheet_y:43,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F939-1F3FC",non_qualified:null,image:"1f939-1f3fc.png",sheet_x:40,sheet_y:44,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F939-1F3FD",non_qualified:null,image:"1f939-1f3fd.png",sheet_x:40,sheet_y:45,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F939-1F3FE",non_qualified:null,image:"1f939-1f3fe.png",sheet_x:40,sheet_y:46,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F939-1F3FF",non_qualified:null,image:"1f939-1f3ff.png",sheet_x:40,sheet_y:47,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"juggling"},"man-juggling":{name:"Man Juggling",unified:"1F939-200D-2642-FE0F",non_qualified:"1F939-200D-2642",sheet_x:40,sheet_y:36,short_names:["man-juggling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F939-1F3FB-200D-2642-FE0F",image:"1f939-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:37,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F939-1F3FC-200D-2642-FE0F",image:"1f939-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:38,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F939-1F3FD-200D-2642-FE0F",image:"1f939-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:39,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F939-1F3FE-200D-2642-FE0F",image:"1f939-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:40,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F939-1F3FF-200D-2642-FE0F",image:"1f939-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:41,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"man,juggling"},"woman-juggling":{name:"Woman Juggling",unified:"1F939-200D-2640-FE0F",non_qualified:"1F939-200D-2640",sheet_x:40,sheet_y:30,short_names:["woman-juggling"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F939-1F3FB-200D-2640-FE0F",image:"1f939-1f3fb-200d-2640-fe0f.png",sheet_x:40,sheet_y:31,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F939-1F3FC-200D-2640-FE0F",image:"1f939-1f3fc-200d-2640-fe0f.png",sheet_x:40,sheet_y:32,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F939-1F3FD-200D-2640-FE0F",image:"1f939-1f3fd-200d-2640-fe0f.png",sheet_x:40,sheet_y:33,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F939-1F3FE-200D-2640-FE0F",image:"1f939-1f3fe-200d-2640-fe0f.png",sheet_x:40,sheet_y:34,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F939-1F3FF-200D-2640-FE0F",image:"1f939-1f3ff-200d-2640-fe0f.png",sheet_x:40,sheet_y:35,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},search:"woman,juggling"},couple:{name:"Man and Woman Holding Hands",unified:"1F46B",non_qualified:null,sheet_x:20,sheet_y:30,short_names:["couple","man_and_woman_holding_hands"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"couple,man,and,woman,holding,hands,pair,people,human,love,date,dating,like,affection,valentines,marriage"},two_men_holding_hands:{name:"Two Men Holding Hands",unified:"1F46C",non_qualified:null,sheet_x:20,sheet_y:31,short_names:["two_men_holding_hands"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"two,men,holding,hands,pair,couple,love,like,bromance,friendship,people,human"},two_women_holding_hands:{name:"Two Women Holding Hands",unified:"1F46D",non_qualified:null,sheet_x:20,sheet_y:32,short_names:["two_women_holding_hands"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"two,women,holding,hands,pair,friendship,couple,love,like,female,people,human"},couplekiss:{name:"Kiss",unified:"1F48F",non_qualified:null,sheet_x:24,sheet_y:41,short_names:["couplekiss"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,obsoleted_by:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",search:"couplekiss,kiss"},"woman-kiss-man":{name:"Woman Kiss Man",unified:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",non_qualified:"1F469-200D-2764-200D-1F48B-200D-1F468",sheet_x:20,sheet_y:21,short_names:["woman-kiss-man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoletes:"1F48F",search:"woman,kiss,man"},"man-kiss-man":{name:"Man Kiss Man",unified:"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",non_qualified:"1F468-200D-2764-200D-1F48B-200D-1F468",sheet_x:18,sheet_y:10,short_names:["man-kiss-man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"man,kiss"},"woman-kiss-woman":{name:"Woman Kiss Woman",unified:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",non_qualified:"1F469-200D-2764-200D-1F48B-200D-1F469",sheet_x:20,sheet_y:22,short_names:["woman-kiss-woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"woman,kiss"},couple_with_heart:{name:"Couple with Heart",unified:"1F491",non_qualified:null,sheet_x:24,sheet_y:43,short_names:["couple_with_heart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,obsoleted_by:"1F469-200D-2764-FE0F-200D-1F468",search:"couple,with,heart"},"woman-heart-man":{name:"Woman Heart Man",unified:"1F469-200D-2764-FE0F-200D-1F468",non_qualified:"1F469-200D-2764-200D-1F468",sheet_x:20,sheet_y:19,short_names:["woman-heart-man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoletes:"1F491",search:"woman,heart,man"},"man-heart-man":{name:"Man Heart Man",unified:"1F468-200D-2764-FE0F-200D-1F468",non_qualified:"1F468-200D-2764-200D-1F468",sheet_x:18,sheet_y:9,short_names:["man-heart-man"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"man,heart"},"woman-heart-woman":{name:"Woman Heart Woman",unified:"1F469-200D-2764-FE0F-200D-1F469",non_qualified:"1F469-200D-2764-200D-1F469",sheet_x:20,sheet_y:20,short_names:["woman-heart-woman"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,search:"woman,heart"},family:{name:"Family",unified:"1F46A",non_qualified:null,sheet_x:20,sheet_y:29,short_names:["family","man-woman-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:true,obsoleted_by:"1F468-200D-1F469-200D-1F466",search:"family,man,woman,boy"},"man-woman-boy":{name:"Man Woman Boy",unified:"1F468-200D-1F469-200D-1F466",non_qualified:null,sheet_x:17,sheet_y:2,short_names:["man-woman-boy","family"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,obsoletes:"1F46A",search:"man,woman,boy,family"},"man-woman-girl":{name:"Man Woman Girl",unified:"1F468-200D-1F469-200D-1F467",non_qualified:null,sheet_x:17,sheet_y:4,short_names:["man-woman-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,woman,girl"},"man-woman-girl-boy":{name:"Man Woman Girl Boy",unified:"1F468-200D-1F469-200D-1F467-200D-1F466",non_qualified:null,sheet_x:17,sheet_y:5,short_names:["man-woman-girl-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,woman,girl,boy"},"man-woman-boy-boy":{name:"Man Woman Boy Boy",unified:"1F468-200D-1F469-200D-1F466-200D-1F466",non_qualified:null,sheet_x:17,sheet_y:3,short_names:["man-woman-boy-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,woman,boy"},"man-woman-girl-girl":{name:"Man Woman Girl Girl",unified:"1F468-200D-1F469-200D-1F467-200D-1F467",non_qualified:null,sheet_x:17,sheet_y:6,short_names:["man-woman-girl-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,woman,girl"},"man-man-boy":{name:"Man Man Boy",unified:"1F468-200D-1F468-200D-1F466",non_qualified:null,sheet_x:16,sheet_y:49,short_names:["man-man-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,boy"},"man-man-girl":{name:"Man Man Girl",unified:"1F468-200D-1F468-200D-1F467",non_qualified:null,sheet_x:16,sheet_y:51,short_names:["man-man-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,girl"},"man-man-girl-boy":{name:"Man Man Girl Boy",unified:"1F468-200D-1F468-200D-1F467-200D-1F466",non_qualified:null,sheet_x:17,sheet_y:0,short_names:["man-man-girl-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,girl,boy"},"man-man-boy-boy":{name:"Man Man Boy Boy",unified:"1F468-200D-1F468-200D-1F466-200D-1F466",non_qualified:null,sheet_x:16,sheet_y:50,short_names:["man-man-boy-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,boy"},"man-man-girl-girl":{name:"Man Man Girl Girl",unified:"1F468-200D-1F468-200D-1F467-200D-1F467",non_qualified:null,sheet_x:17,sheet_y:1,short_names:["man-man-girl-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"man,girl"},"woman-woman-boy":{name:"Woman Woman Boy",unified:"1F469-200D-1F469-200D-1F466",non_qualified:null,sheet_x:19,sheet_y:12,short_names:["woman-woman-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"woman,boy"},"woman-woman-girl":{name:"Woman Woman Girl",unified:"1F469-200D-1F469-200D-1F467",non_qualified:null,sheet_x:19,sheet_y:14,short_names:["woman-woman-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"woman,girl"},"woman-woman-girl-boy":{name:"Woman Woman Girl Boy",unified:"1F469-200D-1F469-200D-1F467-200D-1F466",non_qualified:null,sheet_x:19,sheet_y:15,short_names:["woman-woman-girl-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"woman,girl,boy"},"woman-woman-boy-boy":{name:"Woman Woman Boy Boy",unified:"1F469-200D-1F469-200D-1F466-200D-1F466",non_qualified:null,sheet_x:19,sheet_y:13,short_names:["woman-woman-boy-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"woman,boy"},"woman-woman-girl-girl":{name:"Woman Woman Girl Girl",unified:"1F469-200D-1F469-200D-1F467-200D-1F467",non_qualified:null,sheet_x:19,sheet_y:16,short_names:["woman-woman-girl-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"woman,girl"},"man-boy":{name:"Man Boy",unified:"1F468-200D-1F466",non_qualified:null,sheet_x:16,sheet_y:45,short_names:["man-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,boy"},"man-boy-boy":{name:"Man Boy Boy",unified:"1F468-200D-1F466-200D-1F466",non_qualified:null,sheet_x:16,sheet_y:44,short_names:["man-boy-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,boy"},"man-girl":{name:"Man Girl",unified:"1F468-200D-1F467",non_qualified:null,sheet_x:16,sheet_y:48,short_names:["man-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,girl"},"man-girl-boy":{name:"Man Girl Boy",unified:"1F468-200D-1F467-200D-1F466",non_qualified:null,sheet_x:16,sheet_y:46,short_names:["man-girl-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,girl,boy"},"man-girl-girl":{name:"Man Girl Girl",unified:"1F468-200D-1F467-200D-1F467",non_qualified:null,sheet_x:16,sheet_y:47,short_names:["man-girl-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"man,girl"},"woman-boy":{name:"Woman Boy",unified:"1F469-200D-1F466",non_qualified:null,sheet_x:19,sheet_y:8,short_names:["woman-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,boy"},"woman-boy-boy":{name:"Woman Boy Boy",unified:"1F469-200D-1F466-200D-1F466",non_qualified:null,sheet_x:19,sheet_y:7,short_names:["woman-boy-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,boy"},"woman-girl":{name:"Woman Girl",unified:"1F469-200D-1F467",non_qualified:null,sheet_x:19,sheet_y:11,short_names:["woman-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,girl"},"woman-girl-boy":{name:"Woman Girl Boy",unified:"1F469-200D-1F467-200D-1F466",non_qualified:null,sheet_x:19,sheet_y:9,short_names:["woman-girl-boy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,girl,boy"},"woman-girl-girl":{name:"Woman Girl Girl",unified:"1F469-200D-1F467-200D-1F467",non_qualified:null,sheet_x:19,sheet_y:10,short_names:["woman-girl-girl"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"woman,girl"},selfie:{name:"Selfie",unified:"1F933",non_qualified:null,sheet_x:39,sheet_y:22,short_names:["selfie"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F933-1F3FB",non_qualified:null,image:"1f933-1f3fb.png",sheet_x:39,sheet_y:23,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F933-1F3FC",non_qualified:null,image:"1f933-1f3fc.png",sheet_x:39,sheet_y:24,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F933-1F3FD",non_qualified:null,image:"1f933-1f3fd.png",sheet_x:39,sheet_y:25,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F933-1F3FE",non_qualified:null,image:"1f933-1f3fe.png",sheet_x:39,sheet_y:26,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F933-1F3FF",non_qualified:null,image:"1f933-1f3ff.png",sheet_x:39,sheet_y:27,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"selfie,camera,phone"},muscle:{name:"Flexed Biceps",unified:"1F4AA",non_qualified:null,sheet_x:25,sheet_y:16,short_names:["muscle"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F4AA-1F3FB",non_qualified:null,image:"1f4aa-1f3fb.png",sheet_x:25,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F4AA-1F3FC",non_qualified:null,image:"1f4aa-1f3fc.png",sheet_x:25,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F4AA-1F3FD",non_qualified:null,image:"1f4aa-1f3fd.png",sheet_x:25,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F4AA-1F3FE",non_qualified:null,image:"1f4aa-1f3fe.png",sheet_x:25,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F4AA-1F3FF",non_qualified:null,image:"1f4aa-1f3ff.png",sheet_x:25,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"muscle,flexed,biceps,arm,flex,hand,summer,strong"},point_left:{name:"White Left Pointing Backhand Index",unified:"1F448",non_qualified:null,sheet_x:14,sheet_y:19,short_names:["point_left"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F448-1F3FB",non_qualified:null,image:"1f448-1f3fb.png",sheet_x:14,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F448-1F3FC",non_qualified:null,image:"1f448-1f3fc.png",sheet_x:14,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F448-1F3FD",non_qualified:null,image:"1f448-1f3fd.png",sheet_x:14,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F448-1F3FE",non_qualified:null,image:"1f448-1f3fe.png",sheet_x:14,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F448-1F3FF",non_qualified:null,image:"1f448-1f3ff.png",sheet_x:14,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"point,left,white,pointing,backhand,index,direction,fingers,hand"},point_right:{name:"White Right Pointing Backhand Index",unified:"1F449",non_qualified:null,sheet_x:14,sheet_y:25,short_names:["point_right"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F449-1F3FB",non_qualified:null,image:"1f449-1f3fb.png",sheet_x:14,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F449-1F3FC",non_qualified:null,image:"1f449-1f3fc.png",sheet_x:14,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F449-1F3FD",non_qualified:null,image:"1f449-1f3fd.png",sheet_x:14,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F449-1F3FE",non_qualified:null,image:"1f449-1f3fe.png",sheet_x:14,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F449-1F3FF",non_qualified:null,image:"1f449-1f3ff.png",sheet_x:14,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"point,right,white,pointing,backhand,index,fingers,hand,direction"},point_up:{name:"White Up Pointing Index",unified:"261D-FE0F",non_qualified:"261D",sheet_x:47,sheet_y:26,short_names:["point_up"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"261D-1F3FB",non_qualified:null,image:"261d-1f3fb.png",sheet_x:47,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"261D-1F3FC",non_qualified:null,image:"261d-1f3fc.png",sheet_x:47,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"261D-1F3FD",non_qualified:null,image:"261d-1f3fd.png",sheet_x:47,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"261D-1F3FE",non_qualified:null,image:"261d-1f3fe.png",sheet_x:47,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"261D-1F3FF",non_qualified:null,image:"261d-1f3ff.png",sheet_x:47,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"point,up,white,pointing,index,hand,fingers,direction"},"point_up_2":{name:"White Up Pointing Backhand Index",unified:"1F446",non_qualified:null,sheet_x:14,sheet_y:7,short_names:["point_up_2"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F446-1F3FB",non_qualified:null,image:"1f446-1f3fb.png",sheet_x:14,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F446-1F3FC",non_qualified:null,image:"1f446-1f3fc.png",sheet_x:14,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F446-1F3FD",non_qualified:null,image:"1f446-1f3fd.png",sheet_x:14,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F446-1F3FE",non_qualified:null,image:"1f446-1f3fe.png",sheet_x:14,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F446-1F3FF",non_qualified:null,image:"1f446-1f3ff.png",sheet_x:14,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"point,up,2,white,pointing,backhand,index,fingers,hand,direction"},middle_finger:{name:"Reversed Hand with Middle Finger Extended",unified:"1F595",non_qualified:null,sheet_x:29,sheet_y:38,short_names:["middle_finger","reversed_hand_with_middle_finger_extended"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F595-1F3FB",non_qualified:null,image:"1f595-1f3fb.png",sheet_x:29,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F595-1F3FC",non_qualified:null,image:"1f595-1f3fc.png",sheet_x:29,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F595-1F3FD",non_qualified:null,image:"1f595-1f3fd.png",sheet_x:29,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F595-1F3FE",non_qualified:null,image:"1f595-1f3fe.png",sheet_x:29,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F595-1F3FF",non_qualified:null,image:"1f595-1f3ff.png",sheet_x:29,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"middle,finger,reversed,hand,with,extended"},point_down:{name:"White Down Pointing Backhand Index",unified:"1F447",non_qualified:null,sheet_x:14,sheet_y:13,short_names:["point_down"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F447-1F3FB",non_qualified:null,image:"1f447-1f3fb.png",sheet_x:14,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F447-1F3FC",non_qualified:null,image:"1f447-1f3fc.png",sheet_x:14,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F447-1F3FD",non_qualified:null,image:"1f447-1f3fd.png",sheet_x:14,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F447-1F3FE",non_qualified:null,image:"1f447-1f3fe.png",sheet_x:14,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F447-1F3FF",non_qualified:null,image:"1f447-1f3ff.png",sheet_x:14,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"point,down,white,pointing,backhand,index,fingers,hand,direction"},v:{name:"Victory Hand",unified:"270C-FE0F",non_qualified:"270C",sheet_x:49,sheet_y:30,short_names:["v"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"270C-1F3FB",non_qualified:null,image:"270c-1f3fb.png",sheet_x:49,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"270C-1F3FC",non_qualified:null,image:"270c-1f3fc.png",sheet_x:49,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"270C-1F3FD",non_qualified:null,image:"270c-1f3fd.png",sheet_x:49,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"270C-1F3FE",non_qualified:null,image:"270c-1f3fe.png",sheet_x:49,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"270C-1F3FF",non_qualified:null,image:"270c-1f3ff.png",sheet_x:49,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"v,victory,hand,fingers,ohyeah,peace,two"},crossed_fingers:{name:"Hand with Index and Middle Fingers Crossed",unified:"1F91E",non_qualified:null,sheet_x:38,sheet_y:11,short_names:["crossed_fingers","hand_with_index_and_middle_fingers_crossed"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91E-1F3FB",non_qualified:null,image:"1f91e-1f3fb.png",sheet_x:38,sheet_y:12,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91E-1F3FC",non_qualified:null,image:"1f91e-1f3fc.png",sheet_x:38,sheet_y:13,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91E-1F3FD",non_qualified:null,image:"1f91e-1f3fd.png",sheet_x:38,sheet_y:14,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91E-1F3FE",non_qualified:null,image:"1f91e-1f3fe.png",sheet_x:38,sheet_y:15,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91E-1F3FF",non_qualified:null,image:"1f91e-1f3ff.png",sheet_x:38,sheet_y:16,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"crossed,fingers,hand,with,index,and,middle,good,lucky"},"spock-hand":{name:"Raised Hand with Part Between Middle and Ring Fingers",unified:"1F596",non_qualified:null,sheet_x:29,sheet_y:44,short_names:["spock-hand"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F596-1F3FB",non_qualified:null,image:"1f596-1f3fb.png",sheet_x:29,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F596-1F3FC",non_qualified:null,image:"1f596-1f3fc.png",sheet_x:29,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F596-1F3FD",non_qualified:null,image:"1f596-1f3fd.png",sheet_x:29,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F596-1F3FE",non_qualified:null,image:"1f596-1f3fe.png",sheet_x:29,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F596-1F3FF",non_qualified:null,image:"1f596-1f3ff.png",sheet_x:29,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"spock,hand,raised,with,part,between,middle,and,ring,fingers"},the_horns:{name:"Sign of the Horns",unified:"1F918",non_qualified:null,sheet_x:37,sheet_y:32,short_names:["the_horns","sign_of_the_horns"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F918-1F3FB",non_qualified:null,image:"1f918-1f3fb.png",sheet_x:37,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F918-1F3FC",non_qualified:null,image:"1f918-1f3fc.png",sheet_x:37,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F918-1F3FD",non_qualified:null,image:"1f918-1f3fd.png",sheet_x:37,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F918-1F3FE",non_qualified:null,image:"1f918-1f3fe.png",sheet_x:37,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F918-1F3FF",non_qualified:null,image:"1f918-1f3ff.png",sheet_x:37,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"the,horns,sign,of"},call_me_hand:{name:"Call Me Hand",unified:"1F919",non_qualified:null,sheet_x:37,sheet_y:38,short_names:["call_me_hand"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F919-1F3FB",non_qualified:null,image:"1f919-1f3fb.png",sheet_x:37,sheet_y:39,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F919-1F3FC",non_qualified:null,image:"1f919-1f3fc.png",sheet_x:37,sheet_y:40,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F919-1F3FD",non_qualified:null,image:"1f919-1f3fd.png",sheet_x:37,sheet_y:41,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F919-1F3FE",non_qualified:null,image:"1f919-1f3fe.png",sheet_x:37,sheet_y:42,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F919-1F3FF",non_qualified:null,image:"1f919-1f3ff.png",sheet_x:37,sheet_y:43,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"call,me,hand,hands,gesture"},raised_hand_with_fingers_splayed:{name:"Raised Hand with Fingers Splayed",unified:"1F590-FE0F",non_qualified:"1F590",sheet_x:29,sheet_y:32,short_names:["raised_hand_with_fingers_splayed"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F590-1F3FB",non_qualified:null,image:"1f590-1f3fb.png",sheet_x:29,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F590-1F3FC",non_qualified:null,image:"1f590-1f3fc.png",sheet_x:29,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F590-1F3FD",non_qualified:null,image:"1f590-1f3fd.png",sheet_x:29,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F590-1F3FE",non_qualified:null,image:"1f590-1f3fe.png",sheet_x:29,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F590-1F3FF",non_qualified:null,image:"1f590-1f3ff.png",sheet_x:29,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"raised,hand,with,fingers,splayed,palm"},hand:{name:"Raised Hand",unified:"270B",non_qualified:null,sheet_x:49,sheet_y:24,short_names:["hand","raised_hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"270B-1F3FB",non_qualified:null,image:"270b-1f3fb.png",sheet_x:49,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"270B-1F3FC",non_qualified:null,image:"270b-1f3fc.png",sheet_x:49,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"270B-1F3FD",non_qualified:null,image:"270b-1f3fd.png",sheet_x:49,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"270B-1F3FE",non_qualified:null,image:"270b-1f3fe.png",sheet_x:49,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"270B-1F3FF",non_qualified:null,image:"270b-1f3ff.png",sheet_x:49,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"hand,raised"},ok_hand:{name:"Ok Hand Sign",unified:"1F44C",non_qualified:null,sheet_x:14,sheet_y:43,short_names:["ok_hand"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44C-1F3FB",non_qualified:null,image:"1f44c-1f3fb.png",sheet_x:14,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44C-1F3FC",non_qualified:null,image:"1f44c-1f3fc.png",sheet_x:14,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44C-1F3FD",non_qualified:null,image:"1f44c-1f3fd.png",sheet_x:14,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44C-1F3FE",non_qualified:null,image:"1f44c-1f3fe.png",sheet_x:14,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44C-1F3FF",non_qualified:null,image:"1f44c-1f3ff.png",sheet_x:14,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"ok,hand,sign,fingers,limbs,perfect,okay"},"+1":{name:"Thumbs Up Sign",unified:"1F44D",non_qualified:null,sheet_x:14,sheet_y:49,short_names:["+1","thumbsup"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44D-1F3FB",non_qualified:null,image:"1f44d-1f3fb.png",sheet_x:14,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44D-1F3FC",non_qualified:null,image:"1f44d-1f3fc.png",sheet_x:14,sheet_y:51,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44D-1F3FD",non_qualified:null,image:"1f44d-1f3fd.png",sheet_x:15,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44D-1F3FE",non_qualified:null,image:"1f44d-1f3fe.png",sheet_x:15,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44D-1F3FF",non_qualified:null,image:"1f44d-1f3ff.png",sheet_x:15,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"+1,thumbsup,thumbs,up,sign,yes,awesome,good,agree,accept,cool,hand,like"},"-1":{name:"Thumbs Down Sign",unified:"1F44E",non_qualified:null,sheet_x:15,sheet_y:3,short_names:["-1","thumbsdown"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44E-1F3FB",non_qualified:null,image:"1f44e-1f3fb.png",sheet_x:15,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44E-1F3FC",non_qualified:null,image:"1f44e-1f3fc.png",sheet_x:15,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44E-1F3FD",non_qualified:null,image:"1f44e-1f3fd.png",sheet_x:15,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44E-1F3FE",non_qualified:null,image:"1f44e-1f3fe.png",sheet_x:15,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44E-1F3FF",non_qualified:null,image:"1f44e-1f3ff.png",sheet_x:15,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:",1,thumbsdown,thumbs,down,sign,no,dislike,hand"},fist:{name:"Raised Fist",unified:"270A",non_qualified:null,sheet_x:49,sheet_y:18,short_names:["fist"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"270A-1F3FB",non_qualified:null,image:"270a-1f3fb.png",sheet_x:49,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"270A-1F3FC",non_qualified:null,image:"270a-1f3fc.png",sheet_x:49,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"270A-1F3FD",non_qualified:null,image:"270a-1f3fd.png",sheet_x:49,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"270A-1F3FE",non_qualified:null,image:"270a-1f3fe.png",sheet_x:49,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"270A-1F3FF",non_qualified:null,image:"270a-1f3ff.png",sheet_x:49,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"fist,raised,fingers,hand,grasp"},facepunch:{name:"Fisted Hand Sign",unified:"1F44A",non_qualified:null,sheet_x:14,sheet_y:31,short_names:["facepunch","punch"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44A-1F3FB",non_qualified:null,image:"1f44a-1f3fb.png",sheet_x:14,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44A-1F3FC",non_qualified:null,image:"1f44a-1f3fc.png",sheet_x:14,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44A-1F3FD",non_qualified:null,image:"1f44a-1f3fd.png",sheet_x:14,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44A-1F3FE",non_qualified:null,image:"1f44a-1f3fe.png",sheet_x:14,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44A-1F3FF",non_qualified:null,image:"1f44a-1f3ff.png",sheet_x:14,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"facepunch,punch,fisted,hand,sign,angry,violence,fist,hit,attack"},"left-facing_fist":{name:"Left-Facing Fist",unified:"1F91B",non_qualified:null,sheet_x:37,sheet_y:50,short_names:["left-facing_fist"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91B-1F3FB",non_qualified:null,image:"1f91b-1f3fb.png",sheet_x:37,sheet_y:51,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91B-1F3FC",non_qualified:null,image:"1f91b-1f3fc.png",sheet_x:38,sheet_y:0,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91B-1F3FD",non_qualified:null,image:"1f91b-1f3fd.png",sheet_x:38,sheet_y:1,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91B-1F3FE",non_qualified:null,image:"1f91b-1f3fe.png",sheet_x:38,sheet_y:2,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91B-1F3FF",non_qualified:null,image:"1f91b-1f3ff.png",sheet_x:38,sheet_y:3,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"left,facing,fist"},"right-facing_fist":{name:"Right-Facing Fist",unified:"1F91C",non_qualified:null,sheet_x:38,sheet_y:4,short_names:["right-facing_fist"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91C-1F3FB",non_qualified:null,image:"1f91c-1f3fb.png",sheet_x:38,sheet_y:5,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91C-1F3FC",non_qualified:null,image:"1f91c-1f3fc.png",sheet_x:38,sheet_y:6,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91C-1F3FD",non_qualified:null,image:"1f91c-1f3fd.png",sheet_x:38,sheet_y:7,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91C-1F3FE",non_qualified:null,image:"1f91c-1f3fe.png",sheet_x:38,sheet_y:8,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91C-1F3FF",non_qualified:null,image:"1f91c-1f3ff.png",sheet_x:38,sheet_y:9,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"right,facing,fist"},raised_back_of_hand:{name:"Raised Back of Hand",unified:"1F91A",non_qualified:null,sheet_x:37,sheet_y:44,short_names:["raised_back_of_hand"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91A-1F3FB",non_qualified:null,image:"1f91a-1f3fb.png",sheet_x:37,sheet_y:45,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91A-1F3FC",non_qualified:null,image:"1f91a-1f3fc.png",sheet_x:37,sheet_y:46,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91A-1F3FD",non_qualified:null,image:"1f91a-1f3fd.png",sheet_x:37,sheet_y:47,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91A-1F3FE",non_qualified:null,image:"1f91a-1f3fe.png",sheet_x:37,sheet_y:48,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91A-1F3FF",non_qualified:null,image:"1f91a-1f3ff.png",sheet_x:37,sheet_y:49,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"raised,back,of,hand,fingers,backhand"},wave:{name:"Waving Hand Sign",unified:"1F44B",non_qualified:null,sheet_x:14,sheet_y:37,short_names:["wave"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44B-1F3FB",non_qualified:null,image:"1f44b-1f3fb.png",sheet_x:14,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44B-1F3FC",non_qualified:null,image:"1f44b-1f3fc.png",sheet_x:14,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44B-1F3FD",non_qualified:null,image:"1f44b-1f3fd.png",sheet_x:14,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44B-1F3FE",non_qualified:null,image:"1f44b-1f3fe.png",sheet_x:14,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44B-1F3FF",non_qualified:null,image:"1f44b-1f3ff.png",sheet_x:14,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"wave,waving,hand,sign,hands,gesture,goodbye,solong,farewell,hello,hi,palm"},i_love_you_hand_sign:{name:"I Love You Hand Sign",unified:"1F91F",non_qualified:null,sheet_x:38,sheet_y:17,short_names:["i_love_you_hand_sign"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91F-1F3FB",non_qualified:null,image:"1f91f-1f3fb.png",sheet_x:38,sheet_y:18,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91F-1F3FC",non_qualified:null,image:"1f91f-1f3fc.png",sheet_x:38,sheet_y:19,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91F-1F3FD",non_qualified:null,image:"1f91f-1f3fd.png",sheet_x:38,sheet_y:20,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91F-1F3FE",non_qualified:null,image:"1f91f-1f3fe.png",sheet_x:38,sheet_y:21,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91F-1F3FF",non_qualified:null,image:"1f91f-1f3ff.png",sheet_x:38,sheet_y:22,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"i,love,you,hand,sign"},writing_hand:{name:"Writing Hand",unified:"270D-FE0F",non_qualified:"270D",sheet_x:49,sheet_y:36,short_names:["writing_hand"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"270D-1F3FB",non_qualified:null,image:"270d-1f3fb.png",sheet_x:49,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"270D-1F3FC",non_qualified:null,image:"270d-1f3fc.png",sheet_x:49,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"270D-1F3FD",non_qualified:null,image:"270d-1f3fd.png",sheet_x:49,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"270D-1F3FE",non_qualified:null,image:"270d-1f3fe.png",sheet_x:49,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"270D-1F3FF",non_qualified:null,image:"270d-1f3ff.png",sheet_x:49,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},search:"writing,hand,lower_left_ballpoint_pen,stationery,write,compose"},clap:{name:"Clapping Hands Sign",unified:"1F44F",non_qualified:null,sheet_x:15,sheet_y:9,short_names:["clap"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44F-1F3FB",non_qualified:null,image:"1f44f-1f3fb.png",sheet_x:15,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44F-1F3FC",non_qualified:null,image:"1f44f-1f3fc.png",sheet_x:15,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44F-1F3FD",non_qualified:null,image:"1f44f-1f3fd.png",sheet_x:15,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44F-1F3FE",non_qualified:null,image:"1f44f-1f3fe.png",sheet_x:15,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44F-1F3FF",non_qualified:null,image:"1f44f-1f3ff.png",sheet_x:15,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"clap,clapping,hands,sign,praise,applause,congrats,yay"},open_hands:{name:"Open Hands Sign",unified:"1F450",non_qualified:null,sheet_x:15,sheet_y:15,short_names:["open_hands"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F450-1F3FB",non_qualified:null,image:"1f450-1f3fb.png",sheet_x:15,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F450-1F3FC",non_qualified:null,image:"1f450-1f3fc.png",sheet_x:15,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F450-1F3FD",non_qualified:null,image:"1f450-1f3fd.png",sheet_x:15,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F450-1F3FE",non_qualified:null,image:"1f450-1f3fe.png",sheet_x:15,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F450-1F3FF",non_qualified:null,image:"1f450-1f3ff.png",sheet_x:15,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"open,hands,sign,fingers,butterfly"},raised_hands:{name:"Person Raising Both Hands in Celebration",unified:"1F64C",non_qualified:null,sheet_x:33,sheet_y:12,short_names:["raised_hands"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64C-1F3FB",non_qualified:null,image:"1f64c-1f3fb.png",sheet_x:33,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64C-1F3FC",non_qualified:null,image:"1f64c-1f3fc.png",sheet_x:33,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64C-1F3FD",non_qualified:null,image:"1f64c-1f3fd.png",sheet_x:33,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64C-1F3FE",non_qualified:null,image:"1f64c-1f3fe.png",sheet_x:33,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64C-1F3FF",non_qualified:null,image:"1f64c-1f3ff.png",sheet_x:33,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"raised,hands,person,raising,both,in,celebration,gesture,hooray,yea"},palms_up_together:{name:"Palms Up Together",unified:"1F932",non_qualified:null,sheet_x:39,sheet_y:16,short_names:["palms_up_together"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F932-1F3FB",non_qualified:null,image:"1f932-1f3fb.png",sheet_x:39,sheet_y:17,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F932-1F3FC",non_qualified:null,image:"1f932-1f3fc.png",sheet_x:39,sheet_y:18,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F932-1F3FD",non_qualified:null,image:"1f932-1f3fd.png",sheet_x:39,sheet_y:19,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F932-1F3FE",non_qualified:null,image:"1f932-1f3fe.png",sheet_x:39,sheet_y:20,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F932-1F3FF",non_qualified:null,image:"1f932-1f3ff.png",sheet_x:39,sheet_y:21,added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},search:"palms,up,together"},pray:{name:"Person with Folded Hands",unified:"1F64F",non_qualified:null,sheet_x:34,sheet_y:2,short_names:["pray"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64F-1F3FB",non_qualified:null,image:"1f64f-1f3fb.png",sheet_x:34,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64F-1F3FC",non_qualified:null,image:"1f64f-1f3fc.png",sheet_x:34,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64F-1F3FD",non_qualified:null,image:"1f64f-1f3fd.png",sheet_x:34,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64F-1F3FE",non_qualified:null,image:"1f64f-1f3fe.png",sheet_x:34,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64F-1F3FF",non_qualified:null,image:"1f64f-1f3ff.png",sheet_x:34,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"pray,person,with,folded,hands,please,hope,wish,namaste,highfive"},handshake:{name:"Handshake",unified:"1F91D",non_qualified:null,sheet_x:38,sheet_y:10,short_names:["handshake"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"handshake,agreement,shake"},nail_care:{name:"Nail Polish",unified:"1F485",non_qualified:null,sheet_x:23,sheet_y:44,short_names:["nail_care"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F485-1F3FB",non_qualified:null,image:"1f485-1f3fb.png",sheet_x:23,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F485-1F3FC",non_qualified:null,image:"1f485-1f3fc.png",sheet_x:23,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F485-1F3FD",non_qualified:null,image:"1f485-1f3fd.png",sheet_x:23,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F485-1F3FE",non_qualified:null,image:"1f485-1f3fe.png",sheet_x:23,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F485-1F3FF",non_qualified:null,image:"1f485-1f3ff.png",sheet_x:23,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"nail,care,polish,beauty,manicure,finger,fashion"},ear:{name:"Ear",unified:"1F442",non_qualified:null,sheet_x:13,sheet_y:45,short_names:["ear"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F442-1F3FB",non_qualified:null,image:"1f442-1f3fb.png",sheet_x:13,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F442-1F3FC",non_qualified:null,image:"1f442-1f3fc.png",sheet_x:13,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F442-1F3FD",non_qualified:null,image:"1f442-1f3fd.png",sheet_x:13,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F442-1F3FE",non_qualified:null,image:"1f442-1f3fe.png",sheet_x:13,sheet_y:49,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F442-1F3FF",non_qualified:null,image:"1f442-1f3ff.png",sheet_x:13,sheet_y:50,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"ear,face,hear,sound,listen"},nose:{name:"Nose",unified:"1F443",non_qualified:null,sheet_x:13,sheet_y:51,short_names:["nose"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F443-1F3FB",non_qualified:null,image:"1f443-1f3fb.png",sheet_x:14,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F443-1F3FC",non_qualified:null,image:"1f443-1f3fc.png",sheet_x:14,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F443-1F3FD",non_qualified:null,image:"1f443-1f3fd.png",sheet_x:14,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F443-1F3FE",non_qualified:null,image:"1f443-1f3fe.png",sheet_x:14,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F443-1F3FF",non_qualified:null,image:"1f443-1f3ff.png",sheet_x:14,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},search:"nose,smell,sniff"},footprints:{name:"Footprints",unified:"1F463",non_qualified:null,sheet_x:15,sheet_y:39,short_names:["footprints"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"footprints,feet,tracking,walking,beach"},eyes:{name:"Eyes",unified:"1F440",non_qualified:null,sheet_x:13,sheet_y:42,short_names:["eyes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"eyes,look,watch,stalk,peek,see"},eye:{name:"Eye",unified:"1F441-FE0F",non_qualified:"1F441",sheet_x:13,sheet_y:44,short_names:["eye"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"eye,face,look,see,watch,stare"},"eye-in-speech-bubble":{name:"Eye in Speech Bubble",unified:"1F441-FE0F-200D-1F5E8-FE0F",non_qualified:null,sheet_x:13,sheet_y:43,short_names:["eye-in-speech-bubble"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:false,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,search:"eye,in,speech,bubble"},brain:{name:"Brain",unified:"1F9E0",non_qualified:null,sheet_x:46,sheet_y:22,short_names:["brain"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"brain"},tongue:{name:"Tongue",unified:"1F445",non_qualified:null,sheet_x:14,sheet_y:6,short_names:["tongue"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tongue,mouth,playful"},lips:{name:"Mouth",unified:"1F444",non_qualified:null,sheet_x:14,sheet_y:5,short_names:["lips"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lips,mouth,kiss"},kiss:{name:"Kiss Mark",unified:"1F48B",non_qualified:null,sheet_x:24,sheet_y:37,short_names:["kiss"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kiss,mark,face,lips,love,like,affection,valentines"},cupid:{name:"Heart with Arrow",unified:"1F498",non_qualified:null,sheet_x:24,sheet_y:50,short_names:["cupid"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"cupid,heart,with,arrow,love,like,affection,valentines"},heart:{name:"Heavy Black Heart",unified:"2764-FE0F",non_qualified:"2764",sheet_x:50,sheet_y:8,short_names:["heart"],text:"<3",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,emoticons:["<3"],search:"heart,heavy,black,love,like,valentines,<3"},heartbeat:{name:"Beating Heart",unified:"1F493",non_qualified:null,sheet_x:24,sheet_y:45,short_names:["heartbeat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heartbeat,beating,heart,love,like,affection,valentines,pink"},broken_heart:{name:"Broken Heart",unified:"1F494",non_qualified:null,sheet_x:24,sheet_y:46,short_names:["broken_heart"],text:"</3",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["</3"],search:"broken,heart,sad,sorry,break,heartbreak,</3"},two_hearts:{name:"Two Hearts",unified:"1F495",non_qualified:null,sheet_x:24,sheet_y:47,short_names:["two_hearts"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"two,hearts,love,like,affection,valentines,heart"},sparkling_heart:{name:"Sparkling Heart",unified:"1F496",non_qualified:null,sheet_x:24,sheet_y:48,short_names:["sparkling_heart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sparkling,heart,love,like,affection,valentines"},heartpulse:{name:"Growing Heart",unified:"1F497",non_qualified:null,sheet_x:24,sheet_y:49,short_names:["heartpulse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heartpulse,growing,heart,like,love,affection,valentines,pink"},blue_heart:{name:"Blue Heart",unified:"1F499",non_qualified:null,sheet_x:24,sheet_y:51,short_names:["blue_heart"],text:"<3",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"blue,heart,love,like,affection,valentines"},green_heart:{name:"Green Heart",unified:"1F49A",non_qualified:null,sheet_x:25,sheet_y:0,short_names:["green_heart"],text:"<3",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"green,heart,love,like,affection,valentines"},yellow_heart:{name:"Yellow Heart",unified:"1F49B",non_qualified:null,sheet_x:25,sheet_y:1,short_names:["yellow_heart"],text:"<3",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"yellow,heart,love,like,affection,valentines"},orange_heart:{name:"Orange Heart",unified:"1F9E1",non_qualified:null,sheet_x:46,sheet_y:23,short_names:["orange_heart"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"orange,heart"},purple_heart:{name:"Purple Heart",unified:"1F49C",non_qualified:null,sheet_x:25,sheet_y:2,short_names:["purple_heart"],text:"<3",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"purple,heart,love,like,affection,valentines"},black_heart:{name:"Black Heart",unified:"1F5A4",non_qualified:null,sheet_x:29,sheet_y:50,short_names:["black_heart"],text:"",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"black,heart,evil"},gift_heart:{name:"Heart with Ribbon",unified:"1F49D",non_qualified:null,sheet_x:25,sheet_y:3,short_names:["gift_heart"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gift,heart,with,ribbon,love,valentines"},revolving_hearts:{name:"Revolving Hearts",unified:"1F49E",non_qualified:null,sheet_x:25,sheet_y:4,short_names:["revolving_hearts"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"revolving,hearts,love,like,affection,valentines"},heart_decoration:{name:"Heart Decoration",unified:"1F49F",non_qualified:null,sheet_x:25,sheet_y:5,short_names:["heart_decoration"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"heart,decoration,purple-square,love,like"},heavy_heart_exclamation_mark_ornament:{name:"Heavy Heart Exclamation Mark Ornament",unified:"2763-FE0F",non_qualified:"2763",sheet_x:50,sheet_y:7,short_names:["heavy_heart_exclamation_mark_ornament"],text:"",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"heavy,heart,exclamation,mark,ornament"},love_letter:{name:"Love Letter",unified:"1F48C",non_qualified:null,sheet_x:24,sheet_y:38,short_names:["love_letter"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"love,letter,email,like,affection,envelope,valentines"},zzz:{name:"Sleeping Symbol",unified:"1F4A4",non_qualified:null,sheet_x:25,sheet_y:10,short_names:["zzz"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"zzz,sleeping,symbol,sleepy,tired,dream"},anger:{name:"Anger Symbol",unified:"1F4A2",non_qualified:null,sheet_x:25,sheet_y:8,short_names:["anger"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"anger,symbol,angry,mad"},bomb:{name:"Bomb",unified:"1F4A3",non_qualified:null,sheet_x:25,sheet_y:9,short_names:["bomb"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bomb,boom,explode,explosion,terrorism"},boom:{name:"Collision Symbol",unified:"1F4A5",non_qualified:null,sheet_x:25,sheet_y:11,short_names:["boom","collision"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"boom,collision,symbol,bomb,explode,explosion,blown"},sweat_drops:{name:"Splashing Sweat Symbol",unified:"1F4A6",non_qualified:null,sheet_x:25,sheet_y:12,short_names:["sweat_drops"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sweat,drops,splashing,symbol,water,drip,oops"},dash:{name:"Dash Symbol",unified:"1F4A8",non_qualified:null,sheet_x:25,sheet_y:14,short_names:["dash"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dash,symbol,wind,air,fast,shoo,fart,smoke,puff"},dizzy:{name:"Dizzy Symbol",unified:"1F4AB",non_qualified:null,sheet_x:25,sheet_y:22,short_names:["dizzy"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dizzy,symbol,star,sparkle,shoot,magic"},speech_balloon:{name:"Speech Balloon",unified:"1F4AC",non_qualified:null,sheet_x:25,sheet_y:23,short_names:["speech_balloon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"speech,balloon,bubble,words,message,talk,chatting"},left_speech_bubble:{name:"Left Speech Bubble",unified:"1F5E8-FE0F",non_qualified:"1F5E8",sheet_x:30,sheet_y:15,short_names:["left_speech_bubble"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"left,speech,bubble,words,message,talk,chatting"},right_anger_bubble:{name:"Right Anger Bubble",unified:"1F5EF-FE0F",non_qualified:"1F5EF",sheet_x:30,sheet_y:16,short_names:["right_anger_bubble"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"right,anger,bubble,caption,speech,thinking,mad"},thought_balloon:{name:"Thought Balloon",unified:"1F4AD",non_qualified:null,sheet_x:25,sheet_y:24,short_names:["thought_balloon"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"thought,balloon,bubble,cloud,speech,thinking,dream"},hole:{name:"Hole",unified:"1F573-FE0F",non_qualified:"1F573",sheet_x:28,sheet_y:44,short_names:["hole"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"hole,embarrassing"},eyeglasses:{name:"Eyeglasses",unified:"1F453",non_qualified:null,sheet_x:15,sheet_y:23,short_names:["eyeglasses"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"eyeglasses,fashion,accessories,eyesight,nerdy,dork,geek"},dark_sunglasses:{name:"Dark Sunglasses",unified:"1F576-FE0F",non_qualified:"1F576",sheet_x:29,sheet_y:17,short_names:["dark_sunglasses"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"dark,sunglasses,face,cool,accessories"},necktie:{name:"Necktie",unified:"1F454",non_qualified:null,sheet_x:15,sheet_y:24,short_names:["necktie"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"necktie,shirt,suitup,formal,fashion,cloth,business"},shirt:{name:"T-Shirt",unified:"1F455",non_qualified:null,sheet_x:15,sheet_y:25,short_names:["shirt","tshirt"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"shirt,tshirt,t"},jeans:{name:"Jeans",unified:"1F456",non_qualified:null,sheet_x:15,sheet_y:26,short_names:["jeans"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"jeans,fashion,shopping"},scarf:{name:"Scarf",unified:"1F9E3",non_qualified:null,sheet_x:46,sheet_y:25,short_names:["scarf"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"scarf"},gloves:{name:"Gloves",unified:"1F9E4",non_qualified:null,sheet_x:46,sheet_y:26,short_names:["gloves"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"gloves"},coat:{name:"Coat",unified:"1F9E5",non_qualified:null,sheet_x:46,sheet_y:27,short_names:["coat"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"coat"},socks:{name:"Socks",unified:"1F9E6",non_qualified:null,sheet_x:46,sheet_y:28,short_names:["socks"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"socks"},dress:{name:"Dress",unified:"1F457",non_qualified:null,sheet_x:15,sheet_y:27,short_names:["dress"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"dress,clothes,fashion,shopping"},kimono:{name:"Kimono",unified:"1F458",non_qualified:null,sheet_x:15,sheet_y:28,short_names:["kimono"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"kimono,dress,fashion,women,female,japanese"},bikini:{name:"Bikini",unified:"1F459",non_qualified:null,sheet_x:15,sheet_y:29,short_names:["bikini"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"bikini,swimming,female,woman,girl,fashion,beach,summer"},womans_clothes:{name:"Womans Clothes",unified:"1F45A",non_qualified:null,sheet_x:15,sheet_y:30,short_names:["womans_clothes"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"womans,clothes,fashion,shopping_bags,female"},purse:{name:"Purse",unified:"1F45B",non_qualified:null,sheet_x:15,sheet_y:31,short_names:["purse"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"purse,fashion,accessories,money,sales,shopping"},handbag:{name:"Handbag",unified:"1F45C",non_qualified:null,sheet_x:15,sheet_y:32,short_names:["handbag"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"handbag,fashion,accessory,accessories,shopping"},pouch:{name:"Pouch",unified:"1F45D",non_qualified:null,sheet_x:15,sheet_y:33,short_names:["pouch"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"pouch,bag,accessories,shopping"},shopping_bags:{name:"Shopping Bags",unified:"1F6CD-FE0F",non_qualified:"1F6CD",sheet_x:37,sheet_y:2,short_names:["shopping_bags"],text:"",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"shopping,bags"},school_satchel:{name:"School Satchel",unified:"1F392",non_qualified:null,sheet_x:8,sheet_y:37,short_names:["school_satchel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"school,satchel,student,education,bag,backpack"},mans_shoe:{name:"Mans Shoe",unified:"1F45E",non_qualified:null,sheet_x:15,sheet_y:34,short_names:["mans_shoe","shoe"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mans,shoe,fashion,male"},athletic_shoe:{name:"Athletic Shoe",unified:"1F45F",non_qualified:null,sheet_x:15,sheet_y:35,short_names:["athletic_shoe"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"athletic,shoe,shoes,sports,sneakers"},high_heel:{name:"High-Heeled Shoe",unified:"1F460",non_qualified:null,sheet_x:15,sheet_y:36,short_names:["high_heel"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"high,heel,heeled,shoe,fashion,shoes,female,pumps,stiletto"},sandal:{name:"Womans Sandal",unified:"1F461",non_qualified:null,sheet_x:15,sheet_y:37,short_names:["sandal"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"sandal,womans,shoes,fashion,flip flops"},boot:{name:"Womans Boots",unified:"1F462",non_qualified:null,sheet_x:15,sheet_y:38,short_names:["boot"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"boot,womans,boots,shoes,fashion"},crown:{name:"Crown",unified:"1F451",non_qualified:null,sheet_x:15,sheet_y:21,short_names:["crown"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"crown,king,kod,leader,royalty,lord"},womans_hat:{name:"Womans Hat",unified:"1F452",non_qualified:null,sheet_x:15,sheet_y:22,short_names:["womans_hat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"womans,hat,fashion,accessories,female,lady,spring"},tophat:{name:"Top Hat",unified:"1F3A9",non_qualified:null,sheet_x:9,sheet_y:3,short_names:["tophat"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"tophat,top,hat,magic,gentleman,classy,circus"},mortar_board:{name:"Graduation Cap",unified:"1F393",non_qualified:null,sheet_x:8,sheet_y:38,short_names:["mortar_board"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"mortar,board,graduation,cap,school,college,degree,university,hat,legal,learn,education"},billed_cap:{name:"Billed Cap",unified:"1F9E2",non_qualified:null,sheet_x:46,sheet_y:24,short_names:["billed_cap"],text:"",added_in:"10.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"billed,cap"},helmet_with_white_cross:{name:"Helmet with White Cross",unified:"26D1-FE0F",non_qualified:"26D1",sheet_x:48,sheet_y:33,short_names:["helmet_with_white_cross"],text:"",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,search:"helmet,with,white,cross"},prayer_beads:{name:"Prayer Beads",unified:"1F4FF",non_qualified:null,sheet_x:27,sheet_y:1,short_names:["prayer_beads"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"prayer,beads,dhikr,religious"},lipstick:{name:"Lipstick",unified:"1F484",non_qualified:null,sheet_x:23,sheet_y:43,short_names:["lipstick"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"lipstick,female,girl,fashion,woman"},ring:{name:"Ring",unified:"1F48D",non_qualified:null,sheet_x:24,sheet_y:39,short_names:["ring"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"ring,wedding,propose,marriage,valentines,diamond,fashion,jewelry,gem,engagement"},gem:{name:"Gem Stone",unified:"1F48E",non_qualified:null,sheet_x:24,sheet_y:40,short_names:["gem"],text:"",added_in:"6.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,search:"gem,stone,blue,ruby,diamond,jewelry"}},skins:{"skin-tone-2":{name:"Emoji Modifier Fitzpatrick Type-1-2",unified:"1F3FB",non_qualified:null,sheet_x:12,sheet_y:25,short_names:["skin-tone-2"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skin,tone,2,emoji,modifier,fitzpatrick,type,1"},"skin-tone-3":{name:"Emoji Modifier Fitzpatrick Type-3",unified:"1F3FC",non_qualified:null,sheet_x:12,sheet_y:26,short_names:["skin-tone-3"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skin,tone,3,emoji,modifier,fitzpatrick,type"},"skin-tone-4":{name:"Emoji Modifier Fitzpatrick Type-4",unified:"1F3FD",non_qualified:null,sheet_x:12,sheet_y:27,short_names:["skin-tone-4"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skin,tone,4,emoji,modifier,fitzpatrick,type"},"skin-tone-5":{name:"Emoji Modifier Fitzpatrick Type-5",unified:"1F3FE",non_qualified:null,sheet_x:12,sheet_y:28,short_names:["skin-tone-5"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skin,tone,5,emoji,modifier,fitzpatrick,type"},"skin-tone-6":{name:"Emoji Modifier Fitzpatrick Type-6",unified:"1F3FF",non_qualified:null,sheet_x:12,sheet_y:29,short_names:["skin-tone-6"],text:"",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,search:"skin,tone,6,emoji,modifier,fitzpatrick,type"}},short_names:{satisfied:"laughing",grinning_face_with_star_eyes:"star-struck",face_with_one_eyebrow_raised:"face_with_raised_eyebrow",telephone:"phone",cooking:"fried_egg",paw_prints:"feet","flag-cn":"cn",lantern:"izakaya_lantern",shocked_face_with_exploding_head:"exploding_head",open_book:"book","flag-de":"de",grinning_face_with_one_large_and_one_small_eye:"zany_face",serious_face_with_symbols_covering_mouth:"face_with_symbols_on_mouth",flipper:"dolphin",face_with_open_mouth_vomiting:"face_vomiting","flag-es":"es",face_with_finger_covering_closed_lips:"shushing_face",smiling_face_with_smiling_eyes_and_hand_covering_mouth:"face_with_hand_over_mouth","flag-fr":"fr",honeybee:"bee",red_car:"car",envelope:"email",uk:"gb","flag-gb":"gb",poop:"hankey",shit:"hankey",staff_of_aesculapius:"medical_symbol",knife:"hocho",sailboat:"boat",pencil:"memo","flag-it":"it","flag-jp":"jp",heavy_exclamation_mark:"exclamation","flag-kr":"kr",waxing_gibbous_moon:"moon",mother_christmas:"mrs_claus",sun_small_cloud:"mostly_sunny",sun_behind_cloud:"barely_sunny",sun_behind_rain_cloud:"partly_sunny_rain",lightning_cloud:"lightning",tornado_cloud:"tornado","flag-ru":"ru",running:"runner","flag-us":"us",man_and_woman_holding_hands:"couple","man-woman-boy":"family",family:"man-woman-boy",reversed_hand_with_middle_finger_extended:"middle_finger",hand_with_index_and_middle_fingers_crossed:"crossed_fingers",sign_of_the_horns:"the_horns",raised_hand:"hand",thumbsup:"+1",thumbsdown:"-1",punch:"facepunch",collision:"boom",tshirt:"shirt",shoe:"mans_shoe"}};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(32)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(34),
	  /* template */
	  __webpack_require__(111),
	  /* scopeId */
	  "data-v-d5950a1a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jess/Sites/emoji-mart-vue/src/components/emoji.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] emoji.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d5950a1a", Component.options)
	  } else {
	    hotAPI.reload("data-v-d5950a1a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("1c73feb4", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d5950a1a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./emoji.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d5950a1a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./emoji.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.emoji-mart-emoji[data-v-d5950a1a] {\n  position: relative;\n  display: inline-block;\n  font-size: 0;\n}\n\n", ""]);

	// exports


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _data = __webpack_require__(30);

	var _data2 = _interopRequireDefault(_data);

	var _utils = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//


	var SHEET_COLUMNS = 49;

	exports.default = {
	  props: {
	    backgroundImageFn: {
	      type: Function,
	      default: function _default(set, sheetSize) {
	        return 'https://unpkg.com/emoji-datasource-' + set + '@' + ('^4.0.0') + '/img/' + set + '/sheets/' + sheetSize + '.png';
	      }
	    },
	    native: {
	      type: Boolean,
	      default: false
	    },
	    forceSize: {
	      type: Boolean,
	      default: false
	    },
	    skin: {
	      type: Number,
	      default: 1
	    },
	    sheetSize: {
	      type: Number,
	      default: 64
	    },
	    set: {
	      type: String,
	      default: 'apple'
	    },
	    size: {
	      type: Number,
	      default: 24
	    },
	    emoji: {
	      type: [String, Object],
	      required: true
	    }
	  },
	  computed: {
	    data: function data() {
	      return (0, _utils.getData)(this.emoji, this.skin, this.set);
	    },
	    sanitizedData: function sanitizedData() {
	      return (0, _utils.getSanitizedData)(this.emoji, this.skin, this.set);
	    },
	    isNative: function isNative() {
	      return this.native;
	    },
	    isCustom: function isCustom() {
	      return this.data.custom;
	    },
	    hasEmoji: function hasEmoji() {
	      return this.data['has_img_' + this.set];
	    },
	    nativeEmoji: function nativeEmoji() {
	      if (this.data.unified) {
	        return (0, _utils.unifiedToNative)(this.data.unified);
	      } else {
	        return '';
	      }
	    },
	    nativeEmojiStyles: function nativeEmojiStyles() {
	      var styles = { fontSize: this.size + 'px' };

	      if (this.forceSize) {
	        styles.display = 'inline-block';
	        styles.width = this.size + 'px';
	        styles.height = this.size + 'px';
	      }

	      return styles;
	    },
	    fallbackEmojiStyles: function fallbackEmojiStyles() {
	      if (this.isCustom) {
	        return this.customEmojiStyles;
	      } else if (this.hasEmoji) {
	        return {
	          display: 'inline-block',
	          width: this.size + 'px',
	          height: this.size + 'px',
	          backgroundImage: 'url(' + this.backgroundImageFn(this.set, this.sheetSize) + ')',
	          backgroundSize: 100 * SHEET_COLUMNS + '%',
	          backgroundPosition: this.getPosition()
	        };
	      } else {
	        return null;
	      }
	    },
	    customEmojiStyles: function customEmojiStyles() {
	      return {
	        display: 'inline-block',
	        width: this.size + 'px',
	        height: this.size + 'px',
	        backgroundImage: 'url(' + this.data.imageUrl + ')',
	        backgroundSize: '100%'
	      };
	    }
	  },
	  methods: {
	    getPosition: function getPosition() {
	      var multiply = 100 / (SHEET_COLUMNS - 1),
	          x = multiply * this.data.sheet_x,
	          y = multiply * this.data.sheet_y;

	      return x + '% ' + y + '%';
	    },
	    onClick: function onClick() {
	      this.$emit('click', this.sanitizedData);
	    },
	    onMouseEnter: function onMouseEnter() {
	      this.$emit('mouseenter', this.sanitizedData);
	    },
	    onMouseLeave: function onMouseLeave() {
	      this.$emit('mouseleave', this.sanitizedData);
	    }
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unifiedToNative = exports.deepMerge = exports.intersect = exports.getSanitizedData = exports.getData = undefined;

	var _typeof2 = __webpack_require__(36);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _from = __webpack_require__(68);

	var _from2 = _interopRequireDefault(_from);

	var _set = __webpack_require__(84);

	var _set2 = _interopRequireDefault(_set);

	var _stringify = __webpack_require__(99);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _assign = __webpack_require__(101);

	var _assign2 = _interopRequireDefault(_assign);

	var _fromCodePoint = __webpack_require__(105);

	var _fromCodePoint2 = _interopRequireDefault(_fromCodePoint);

	var _toConsumableArray2 = __webpack_require__(109);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _buildSearch = __webpack_require__(110);

	var _buildSearch2 = _interopRequireDefault(_buildSearch);

	var _data = __webpack_require__(30);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
	var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

	function unifiedToNative(unified) {
	  var unicodes = unified.split('-'),
	      codePoints = unicodes.map(function (u) {
	    return '0x' + u;
	  });

	  return _fromCodePoint2.default.apply(String, (0, _toConsumableArray3.default)(codePoints));
	}

	function sanitize(emoji) {
	  var name = emoji.name;
	  var short_names = emoji.short_names;
	  var skin_tone = emoji.skin_tone;
	  var skin_variations = emoji.skin_variations;
	  var emoticons = emoji.emoticons;
	  var unified = emoji.unified;
	  var custom = emoji.custom;
	  var imageUrl = emoji.imageUrl;
	  var id = emoji.id || short_names[0];
	  var colons = ':' + id + ':';

	  if (custom) {
	    return {
	      id: id,
	      name: name,
	      colons: colons,
	      emoticons: emoticons,
	      custom: custom,
	      imageUrl: imageUrl
	    };
	  }

	  if (skin_tone) {
	    colons += ':skin-tone-' + skin_tone + ':';
	  }

	  return {
	    id: id,
	    name: name,
	    colons: colons,
	    emoticons: emoticons,
	    unified: unified.toLowerCase(),
	    skin: skin_tone || (skin_variations ? 1 : null),
	    native: unifiedToNative(unified)
	  };
	}

	function getSanitizedData() {
	  return sanitize(getData.apply(undefined, arguments));
	}

	function cloneEmoji(emoji) {
	  if (typeof emoji === 'string') {
	    return emoji;
	  }

	  return (0, _assign2.default)({}, emoji);
	}

	function getData(_emoji, skin, set) {
	  var emoji = cloneEmoji(_emoji);
	  var emojiData = {};

	  if (typeof emoji == 'string') {
	    var matches = emoji.match(COLONS_REGEX);

	    if (matches) {
	      emoji = matches[1];

	      if (matches[2]) {
	        skin = parseInt(matches[2]);
	      }
	    }

	    if (_data2.default.short_names.hasOwnProperty(emoji)) {
	      emoji = _data2.default.short_names[emoji];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji)) {
	      emojiData = _data2.default.emojis[emoji];
	    }
	  } else if (emoji.custom) {
	    emojiData = emoji;

	    emojiData.search = (0, _buildSearch2.default)({
	      short_names: emoji.short_names,
	      name: emoji.name,
	      keywords: emoji.keywords,
	      emoticons: emoji.emoticons
	    });

	    emojiData.search = emojiData.search.join(',');
	  } else if (emoji.id) {
	    if (_data2.default.short_names.hasOwnProperty(emoji.id)) {
	      emoji.id = _data2.default.short_names[emoji.id];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji.id)) {
	      emojiData = _data2.default.emojis[emoji.id];
	      skin || (skin = emoji.skin);
	    }
	  }

	  emojiData.emoticons || (emojiData.emoticons = []);
	  emojiData.variations || (emojiData.variations = []);

	  if (emojiData.skin_variations && skin > 1 && set) {
	    emojiData = JSON.parse((0, _stringify2.default)(emojiData));

	    var skinKey = SKINS[skin - 1],
	        variationData = emojiData.skin_variations[skinKey];

	    if (!variationData.variations && emojiData.variations) {
	      delete emojiData.variations;
	    }

	    if (variationData['has_img_' + set]) {
	      emojiData.skin_tone = skin;

	      for (var k in variationData) {
	        var v = variationData[k];
	        emojiData[k] = v;
	      }
	    }
	  }

	  if (emojiData.variations && emojiData.variations.length) {
	    emojiData = JSON.parse((0, _stringify2.default)(emojiData));
	    emojiData.unified = emojiData.variations.shift();
	  }

	  return emojiData;
	}

	function intersect(a, b) {
	  var aSet = new _set2.default(a),
	      bSet = new _set2.default(b),
	      intersection = null;

	  intersection = new _set2.default([].concat((0, _toConsumableArray3.default)(aSet)).filter(function (x) {
	    return bSet.has(x);
	  }));

	  return (0, _from2.default)(intersection);
	}

	function deepMerge(a, b) {
	  var o = {};

	  for (var key in a) {
	    var originalValue = a[key],
	        value = originalValue;

	    if (b.hasOwnProperty(key)) {
	      value = b[key];
	    }

	    if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
	      value = deepMerge(originalValue, value);
	    }

	    o[key] = value;
	  }

	  return o;
	}

	exports.getData = getData;
	exports.getSanitizedData = getSanitizedData;
	exports.intersect = intersect;
	exports.deepMerge = deepMerge;
	exports.unifiedToNative = unifiedToNative;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Symbol = __webpack_require__(37)["default"];

	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};

	exports.__esModule = true;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(39);
	__webpack_require__(67);
	module.exports = __webpack_require__(46).Symbol;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(40)
	  , global         = __webpack_require__(41)
	  , has            = __webpack_require__(42)
	  , DESCRIPTORS    = __webpack_require__(43)
	  , $export        = __webpack_require__(45)
	  , redefine       = __webpack_require__(49)
	  , $fails         = __webpack_require__(44)
	  , shared         = __webpack_require__(52)
	  , setToStringTag = __webpack_require__(53)
	  , uid            = __webpack_require__(55)
	  , wks            = __webpack_require__(54)
	  , keyOf          = __webpack_require__(56)
	  , $names         = __webpack_require__(61)
	  , enumKeys       = __webpack_require__(62)
	  , isArray        = __webpack_require__(63)
	  , anObject       = __webpack_require__(64)
	  , toIObject      = __webpack_require__(57)
	  , createDesc     = __webpack_require__(51)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(66)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 40 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 42 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(44)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(41)
	  , core      = __webpack_require__(46)
	  , ctx       = __webpack_require__(47)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 46 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(48);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(50);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(40)
	  , createDesc = __webpack_require__(51);
	module.exports = __webpack_require__(43) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(41)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(40).setDesc
	  , has = __webpack_require__(42)
	  , TAG = __webpack_require__(54)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(52)('wks')
	  , uid    = __webpack_require__(55)
	  , Symbol = __webpack_require__(41).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(40)
	  , toIObject = __webpack_require__(57);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(58)
	  , defined = __webpack_require__(60);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(59);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(57)
	  , getNames  = __webpack_require__(40).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(40);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(59);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(65);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 67 */
/***/ function(module, exports) {

	

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	__webpack_require__(76);
	module.exports = __webpack_require__(46).Array.from;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(71)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(73)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(72)
	  , defined   = __webpack_require__(60);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(66)
	  , $export        = __webpack_require__(45)
	  , redefine       = __webpack_require__(49)
	  , hide           = __webpack_require__(50)
	  , has            = __webpack_require__(42)
	  , Iterators      = __webpack_require__(74)
	  , $iterCreate    = __webpack_require__(75)
	  , setToStringTag = __webpack_require__(53)
	  , getProto       = __webpack_require__(40).getProto
	  , ITERATOR       = __webpack_require__(54)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(40)
	  , descriptor     = __webpack_require__(51)
	  , setToStringTag = __webpack_require__(53)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(50)(IteratorPrototype, __webpack_require__(54)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(47)
	  , $export     = __webpack_require__(45)
	  , toObject    = __webpack_require__(77)
	  , call        = __webpack_require__(78)
	  , isArrayIter = __webpack_require__(79)
	  , toLength    = __webpack_require__(80)
	  , getIterFn   = __webpack_require__(81);
	$export($export.S + $export.F * !__webpack_require__(83)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(60);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(64);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(74)
	  , ITERATOR   = __webpack_require__(54)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(72)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(82)
	  , ITERATOR  = __webpack_require__(54)('iterator')
	  , Iterators = __webpack_require__(74);
	module.exports = __webpack_require__(46).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(59)
	  , TAG = __webpack_require__(54)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(54)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(70);
	__webpack_require__(86);
	__webpack_require__(90);
	__webpack_require__(97);
	module.exports = __webpack_require__(46).Set;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	var Iterators = __webpack_require__(74);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(88)
	  , step             = __webpack_require__(89)
	  , Iterators        = __webpack_require__(74)
	  , toIObject        = __webpack_require__(57);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(73)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(91);

	// 23.2 Set Objects
	__webpack_require__(96)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(40)
	  , hide         = __webpack_require__(50)
	  , redefineAll  = __webpack_require__(92)
	  , ctx          = __webpack_require__(47)
	  , strictNew    = __webpack_require__(93)
	  , defined      = __webpack_require__(60)
	  , forOf        = __webpack_require__(94)
	  , $iterDefine  = __webpack_require__(73)
	  , step         = __webpack_require__(89)
	  , ID           = __webpack_require__(55)('id')
	  , $has         = __webpack_require__(42)
	  , isObject     = __webpack_require__(65)
	  , setSpecies   = __webpack_require__(95)
	  , DESCRIPTORS  = __webpack_require__(43)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;

	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(49);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(47)
	  , call        = __webpack_require__(78)
	  , isArrayIter = __webpack_require__(79)
	  , anObject    = __webpack_require__(64)
	  , toLength    = __webpack_require__(80)
	  , getIterFn   = __webpack_require__(81);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(46)
	  , $           = __webpack_require__(40)
	  , DESCRIPTORS = __webpack_require__(43)
	  , SPECIES     = __webpack_require__(54)('species');

	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(40)
	  , global         = __webpack_require__(41)
	  , $export        = __webpack_require__(45)
	  , fails          = __webpack_require__(44)
	  , hide           = __webpack_require__(50)
	  , redefineAll    = __webpack_require__(92)
	  , forOf          = __webpack_require__(94)
	  , strictNew      = __webpack_require__(93)
	  , isObject       = __webpack_require__(65)
	  , setToStringTag = __webpack_require__(53)
	  , DESCRIPTORS    = __webpack_require__(43);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    C = wrapper(function(target, iterable){
	      strictNew(target, C, NAME);
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(45);

	$export($export.P, 'Set', {toJSON: __webpack_require__(98)('Set')});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(94)
	  , classof = __webpack_require__(82);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(46);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	module.exports = __webpack_require__(46).Object.assign;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(45);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(104)});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(40)
	  , toObject = __webpack_require__(77)
	  , IObject  = __webpack_require__(58);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(44)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107);
	module.exports = __webpack_require__(46).String.fromCodePoint;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(45)
	  , toIndex        = __webpack_require__(108)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(72)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(68);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (data) {
	  var search = [];

	  var addToSearch = function addToSearch(strings, split) {
	    if (!strings) {
	      return;
	    }

	    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
	      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
	        s = s.toLowerCase();

	        if (search.indexOf(s) == -1) {
	          search.push(s);
	        }
	      });
	    });
	  };

	  addToSearch(data.short_names, true);
	  addToSearch(data.name, true);
	  addToSearch(data.keywords, false);
	  addToSearch(data.emoticons, false);

	  return search;
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "emoji-mart-emoji",
	    on: {
	      "mouseenter": _vm.onMouseEnter,
	      "mouseleave": _vm.onMouseLeave,
	      "click": _vm.onClick
	    }
	  }, [(_vm.isNative && !_vm.isCustom) ? _c('span', {
	    staticClass: "emoji-native",
	    style: (this.nativeEmojiStyles)
	  }, [_vm._v(_vm._s(_vm.nativeEmoji))]) : _c('span', {
	    staticClass: "emoji-fallback",
	    style: (this.fallbackEmojiStyles)
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d5950a1a", module.exports)
	  }
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.isVisible && (_vm.isSearch || _vm.hasResults)) ? _c('div', {
	    class: {
	      'emoji-mart-category': true, 'emoji-mart-no-results': !_vm.hasResults
	    }
	  }, [_c('div', {
	    staticClass: "emoji-mart-category-label"
	  }, [_c('span', [_vm._v(_vm._s(_vm.i18n.categories[_vm.slug]))])]), _vm._v(" "), _vm._l((_vm.filteredEmojis), function(emoji) {
	    return _c('emoji', {
	      key: emoji.id || emoji,
	      attrs: {
	        "emoji": emoji,
	        "native": _vm.emojiProps.native,
	        "skin": _vm.emojiProps.skin,
	        "set": _vm.emojiProps.set,
	        "size": _vm.emojiProps.size,
	        "sheet-size": _vm.emojiProps.sheetSize,
	        "force-size": _vm.emojiProps.forceSize,
	        "background-image-fn": _vm.emojiProps.backgroundImageFn
	      },
	      on: {
	        "click": _vm.emojiProps.onClick,
	        "mouseenter": _vm.emojiProps.onEnter,
	        "mouseleave": _vm.emojiProps.onLeave
	      }
	    })
	  }), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.hasResults),
	      expression: "!hasResults"
	    }]
	  }, [_c('emoji', {
	    attrs: {
	      "size": _vm.emojiProps.size,
	      "emoji": "sleuth_or_spy",
	      "native": _vm.emojiProps.native,
	      "skin": _vm.emojiProps.skin,
	      "set": _vm.emojiProps.set,
	      "sheet-size": _vm.emojiProps.sheetSize,
	      "background-image-fn": _vm.emojiProps.backgroundImageFn
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "emoji-mart-no-results-label"
	  }, [_vm._v(_vm._s(_vm.i18n.notfound))])], 1)], 2) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-088c9161", module.exports)
	  }
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(114)
	__webpack_require__(116)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(118),
	  /* template */
	  __webpack_require__(149),
	  /* scopeId */
	  "data-v-da9b689e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jess/Sites/emoji-mart-vue/src/components/picker.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] picker.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-da9b689e", Component.options)
	  } else {
	    hotAPI.reload("data-v-da9b689e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(115);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("3692e8ae", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-da9b689e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./picker.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-da9b689e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./picker.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.emoji-mart,\n.emoji-mart * {\n  box-sizing: border-box;\n  line-height: 1.15;\n}\n.emoji-mart .emoji-mart-emoji {\n  padding: 6px;\n}\n\n", ""]);

	// exports


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(117);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("510baa35", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-da9b689e\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./picker.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-da9b689e\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./picker.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.emoji-mart[data-v-da9b689e] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  display: inline-block;\n  color: #222427;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  background: #fff;\n}\n.emoji-mart-bar[data-v-da9b689e] {\n  border: 0 solid #d9d9d9;\n}\n.emoji-mart-bar[data-v-da9b689e]:first-child {\n  border-bottom-width: 1px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.emoji-mart-bar[data-v-da9b689e]:last-child {\n  border-top-width: 1px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.emoji-mart-scroll[data-v-da9b689e] {\n  position: relative;\n  overflow-y: scroll;\n  height: 270px;\n  padding: 0 6px 6px 6px;\n\n  /* Fix for rendering sticky positioned category labels on Chrome */\n  z-index: 0;\n}\n\n", ""]);

	// exports


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(109);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getIterator2 = __webpack_require__(119);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(101);

	var _assign2 = _interopRequireDefault(_assign);

	__webpack_require__(122);

	var _data = __webpack_require__(30);

	var _data2 = _interopRequireDefault(_data);

	var _store = __webpack_require__(123);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(124);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _utils = __webpack_require__(35);

	var _anchors = __webpack_require__(2);

	var _anchors2 = _interopRequireDefault(_anchors);

	var _category = __webpack_require__(24);

	var _category2 = _interopRequireDefault(_category);

	var _emoji2 = __webpack_require__(31);

	var _emoji3 = _interopRequireDefault(_emoji2);

	var _preview = __webpack_require__(129);

	var _preview2 = _interopRequireDefault(_preview);

	var _search = __webpack_require__(139);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


	var RECENT_CATEGORY = { name: 'Recent', emojis: [] };
	var CUSTOM_CATEGORY = { name: 'Custom', emojis: [] };

	var CATEGORIES = [];

	var I18N = {
	  search: 'Search',
	  notfound: 'No Emoji Found',
	  categories: {
	    search: 'Search Results',
	    recent: 'Frequently Used',
	    people: 'Smileys & People',
	    nature: 'Animals & Nature',
	    foods: 'Food & Drink',
	    activity: 'Activities',
	    places: 'Travel & Places',
	    objects: 'Objects',
	    symbols: 'Symbols',
	    flags: 'Flags',
	    custom: 'Custom'
	  }
	};

	function makeCustomEmoji(emoji) {
	  return (0, _assign2.default)({}, emoji, {
	    id: emoji.short_names[0],
	    custom: true
	  });
	}

	function measureScrollbar() {
	  var div = document.createElement('div');

	  div.style.width = '100px';
	  div.style.height = '100px';
	  div.style.overflow = 'scroll';
	  div.style.position = 'absolute';
	  div.style.top = '-9999px';

	  document.body.appendChild(div);

	  var scrollbarWidth = div.offsetWidth - div.clientWidth;

	  document.body.removeChild(div);

	  return scrollbarWidth;
	}

	exports.default = {
	  props: {
	    perLine: {
	      type: Number,
	      default: 9
	    },
	    emojiSize: {
	      type: Number,
	      default: 24
	    },
	    title: {
	      type: String,
	      default: 'Emoji Mart™'
	    },
	    emoji: {
	      type: String,
	      default: 'department_store'
	    },
	    color: {
	      type: String,
	      default: '#ae65c5'
	    },
	    /*set: {
	      type: String,
	      default: 'apple'
	    },*/
	    skin: {
	      type: Number,
	      default: 1
	    },
	    /*native: {
	      type: Boolean,
	      default: false
	    },*/
	    backgroundImageFn: {
	      type: Function
	    },
	    sheetSize: {
	      type: Number,
	      default: 64
	    },
	    emojisToShowFilter: {
	      type: Function
	    },
	    include: {
	      type: Array
	    },
	    exclude: {
	      type: Array
	    },
	    autoFocus: {
	      type: Boolean,
	      default: false
	    },
	    custom: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    i18n: {
	      type: Object,
	      default: function _default() {
	        return I18N;
	      }
	    },
	    hidePreviewBar: {
	      type: Boolean,
	      default: false
	    },
	    hideSearchBar: {
	      type: Boolean,
	      default: false
	    },
	    hideCategoriesBar: {
	      type: Boolean,
	      default: false
	    },
	    infiniteScroll: {
	      type: Boolean,
	      default: true
	    }
	  },
	  data: function data() {
	    var customEmojis = this.custom.map(makeCustomEmoji),
	        recentEmojis = _frequently2.default.get(this.perLine);

	    if (recentEmojis.length) {
	      recentEmojis = recentEmojis.map(function (id) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = (0, _getIterator3.default)(customEmojis), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var customEmoji = _step.value;

	            if (customEmoji.id === id) {
	              return customEmoji;
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        return id;
	      });
	    }

	    return {
	      activeSkin: _store2.default.get('skin') || this.skin,
	      categories: [],
	      activeCategory: null,
	      previewEmoji: null,
	      searchEmojis: null,
	      customEmojis: customEmojis,
	      recentEmojis: recentEmojis,
	      set: 'apple',
	      native: true
	    };
	  },

	  computed: {
	    emojiProps: function emojiProps() {
	      return {
	        native: this.native,
	        skin: this.activeSkin,
	        size: this.emojiSize,
	        set: this.set,
	        sheetSize: this.sheetSize,
	        forceSize: this.native,
	        backgroundImageFn: this.backgroundImageFn,
	        onEnter: this.onEmojiEnter.bind(this),
	        onLeave: this.onEmojiLeave.bind(this),
	        onClick: this.onEmojiClick.bind(this)
	      };
	    },
	    skinProps: function skinProps() {
	      return {
	        skin: this.activeSkin,
	        onChange: this.onSkinChange.bind(this)
	      };
	    },
	    calculateWidth: function calculateWidth() {
	      return this.perLine * (this.emojiSize + 12) + 12 + 2 + measureScrollbar();
	    },
	    filteredCategories: function filteredCategories() {
	      var _this = this;

	      return this.categories.filter(function (category) {
	        var isIncluded = _this.include && _this.include.length ? _this.include.indexOf(category.slug) > -1 : true;
	        var isExcluded = _this.exclude && _this.exclude.length ? _this.exclude.indexOf(category.slug) > -1 : false;
	        var hasEmojis = category.emojis.length > 0;

	        if (_this.emojisToShowFilter) {
	          hasEmojis = category.emojis.some(function (emoji) {
	            return _this.emojisToShowFilter(_data2.default.emojis[emoji] || emoji);
	          });
	        }

	        return isIncluded && !isExcluded && hasEmojis;
	      });
	    }
	  },
	  created: function created() {
	    var _categories;

	    RECENT_CATEGORY.emojis = this.recentEmojis;
	    CUSTOM_CATEGORY.emojis = this.customEmojis;

	    this.categories.push(RECENT_CATEGORY);
	    (_categories = this.categories).push.apply(_categories, (0, _toConsumableArray3.default)(_data2.default.categories));
	    this.categories.push(CUSTOM_CATEGORY);

	    this.categories[0].first = true;
	    this.activeCategory = this.filteredCategories[0];

	    this.categories = this.categories.map(function (category) {
	      switch (category.name) {
	        case 'Smileys & People':
	          category.slug = 'people';
	          break;
	        case 'Activities':
	          category.slug = 'activity';
	          break;
	        case 'Food & Drink':
	          category.slug = 'foods';
	          break;
	        case 'Animals & Nature':
	          category.slug = 'nature';
	          break;
	        case 'Travel & Places':
	          category.slug = 'places';
	          break;
	        default:
	          category.slug = category.name.toLowerCase();
	      }
	      return category;
	    });
	  },

	  methods: {
	    onScroll: function onScroll() {
	      if (this.infiniteScroll && !this.waitingForPaint) {
	        this.waitingForPaint = true;
	        window.requestAnimationFrame(this.onScrollPaint.bind(this));
	      }
	    },
	    onScrollPaint: function onScrollPaint() {
	      this.waitingForPaint = false;

	      var scrollTop = this.$refs.scroll.scrollTop,
	          activeCategory = this.filteredCategories[0];

	      for (var i = 0, l = this.filteredCategories.length; i < l; i++) {
	        var category = this.filteredCategories[i],
	            component = this.$refs.categories[i];

	        if (component && component.$el.offsetTop > scrollTop) {
	          break;
	        }

	        activeCategory = category;
	      }

	      this.activeCategory = activeCategory;
	    },
	    onAnchorClick: function onAnchorClick(category) {
	      var _this2 = this;

	      var i = this.categories.indexOf(category),
	          component = this.$refs.categories[i],
	          scrollToComponent = function scrollToComponent() {
	        if (component) {
	          var top = component.$el.offsetTop;

	          if (category.first) {
	            top = 0;
	          }

	          _this2.$refs.scroll.scrollTop = top;
	        }
	      };

	      if (this.searchEmojis) {
	        this.onSearch(null);
	        this.$refs.search.clear();

	        this.$nextTick(scrollToComponent);
	      } else if (this.infiniteScroll) {
	        scrollToComponent();
	      } else {
	        this.activeCategory = this.categories[i];
	      }
	    },
	    onSearch: function onSearch(emojis) {
	      this.searchEmojis = emojis;
	    },
	    onEmojiEnter: function onEmojiEnter(emoji) {
	      if (emoji.custom) {
	        // Use Array.prototype.find() when it is more widely supported.
	        var customEmoji = this.customEmojis.filter(function (_emoji) {
	          return _emoji.id === emoji.id;
	        })[0];
	        emoji = (0, _assign2.default)({}, emoji, customEmoji);
	      }

	      this.previewEmoji = emoji;
	    },
	    onEmojiLeave: function onEmojiLeave(emoji) {
	      this.previewEmoji = null;
	    },
	    onEmojiClick: function onEmojiClick(emoji) {
	      this.$emit('click', emoji);
	      _frequently2.default.add(emoji);
	    },
	    onSkinChange: function onSkinChange(skin) {
	      this.activeSkin = skin;
	      _store2.default.update({ skin: skin });
	    }
	  },
	  components: {
	    Anchors: _anchors2.default,
	    Category: _category2.default,
	    Emoji: _emoji3.default,
	    Preview: _preview2.default,
	    Search: _search2.default
	  }
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	__webpack_require__(70);
	module.exports = __webpack_require__(121);

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(64)
	  , get      = __webpack_require__(81);
	module.exports = __webpack_require__(46).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';

	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	// MIT license

	var isWindowAvailable = typeof window !== 'undefined';

	isWindowAvailable && function () {
	  var lastTime = 0;
	  var vendors = ['ms', 'moz', 'webkit', 'o'];

	  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	  }

	  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = window.setTimeout(function () {
	      callback(currTime + timeToCall);
	    }, timeToCall);

	    lastTime = currTime + timeToCall;
	    return id;
	  };

	  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
	    clearTimeout(id);
	  };
	}();

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(99);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NAMESPACE = 'emoji-mart';

	var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;

	function update(state) {
	  for (var key in state) {
	    var value = state[key];
	    set(key, value);
	  }
	}

	function set(key, value) {
	  if (!isLocalStorageSupported) return;
	  try {
	    window.localStorage[NAMESPACE + '.' + key] = (0, _stringify2.default)(value);
	  } catch (e) {}
	}

	function get(key) {
	  if (!isLocalStorageSupported) return;
	  try {
	    var value = window.localStorage[NAMESPACE + '.' + key];
	  } catch (e) {
	    return;
	  }

	  if (value) {
	    return JSON.parse(value);
	  }
	}

	function setNamespace(namespace) {
	  NAMESPACE = namespace;
	}

	exports.default = { update: update, set: set, get: get, setNamespace: setNamespace };

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(125);

	var _keys2 = _interopRequireDefault(_keys);

	var _toConsumableArray2 = __webpack_require__(109);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _store = __webpack_require__(123);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];

	var frequently = _store2.default.get('frequently');
	var defaults = {};

	function add(emoji) {
	  var id = emoji.id;


	  frequently || (frequently = defaults);
	  frequently[id] || (frequently[id] = 0);
	  frequently[id] += 1;

	  _store2.default.set('last', id);
	  _store2.default.set('frequently', frequently);
	}

	function get(perLine) {
	  if (!frequently) {
	    defaults = {};

	    // Use Array.prototype.fill() when it is more widely supported.
	    return [].concat((0, _toConsumableArray3.default)(Array(perLine))).map(function (_, i) {
	      defaults[DEFAULTS[i]] = perLine - i;
	      return DEFAULTS[i];
	    });
	  }

	  var quantity = perLine * 4,
	      sorted = (0, _keys2.default)(frequently).sort(function (a, b) {
	    return frequently[a] - frequently[b];
	  }).reverse(),
	      sliced = sorted.slice(0, quantity),
	      last = _store2.default.get('last');

	  if (last && sliced.indexOf(last) == -1) {
	    sliced.pop();
	    sliced.push(last);
	  }

	  return sliced;
	}

	exports.default = { add: add, get: get };

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(127);
	module.exports = __webpack_require__(46).Object.keys;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(77);

	__webpack_require__(128)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(45)
	  , core    = __webpack_require__(46)
	  , fails   = __webpack_require__(44);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(130)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(132),
	  /* template */
	  __webpack_require__(138),
	  /* scopeId */
	  "data-v-8aa04796",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jess/Sites/emoji-mart-vue/src/components/preview.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] preview.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8aa04796", Component.options)
	  } else {
	    hotAPI.reload("data-v-8aa04796", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("7ca2f92e", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8aa04796\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-8aa04796\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preview.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.emoji-mart-preview[data-v-8aa04796] {\n  position: relative;\n  height: 70px;\n}\n.emoji-mart-preview-emoji[data-v-8aa04796],\n.emoji-mart-preview-data[data-v-8aa04796],\n.emoji-mart-preview-skins[data-v-8aa04796] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.emoji-mart-preview-emoji[data-v-8aa04796] {\n  left: 12px;\n}\n.emoji-mart-preview-data[data-v-8aa04796] {\n  left: 68px; right: 12px;\n  word-break: break-all;\n}\n.emoji-mart-preview-skins[data-v-8aa04796] {\n  right: 30px;\n  text-align: right;\n}\n.emoji-mart-preview-name[data-v-8aa04796] {\n  font-size: 14px;\n}\n.emoji-mart-preview-shortname[data-v-8aa04796] {\n  font-size: 12px;\n  color: #888;\n}\n.emoji-mart-preview-shortname + .emoji-mart-preview-shortname[data-v-8aa04796],\n.emoji-mart-preview-shortname + .emoji-mart-preview-emoticon[data-v-8aa04796],\n.emoji-mart-preview-emoticon + .emoji-mart-preview-emoticon[data-v-8aa04796] {\n  margin-left: .5em;\n}\n.emoji-mart-preview-emoticon[data-v-8aa04796] {\n  font-size: 11px;\n  color: #bbb;\n}\n.emoji-mart-title span[data-v-8aa04796] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.emoji-mart-title .emoji-mart-emoji[data-v-8aa04796] {\n  padding: 0;\n}\n.emoji-mart-title-label[data-v-8aa04796] {\n  color: #999A9C;\n  font-size: 26px;\n  font-weight: 300;\n}\n\n", ""]);

	// exports


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emoji = __webpack_require__(31);

	var _emoji2 = _interopRequireDefault(_emoji);

	var _skins = __webpack_require__(133);

	var _skins2 = _interopRequireDefault(_skins);

	var _utils = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    title: {
	      type: String,
	      required: true
	    },
	    emoji: {
	      type: [String, Object]
	    },
	    idleEmoji: {
	      type: [String, Object],
	      required: true
	    },
	    emojiProps: {
	      type: Object,
	      required: true
	    },
	    skinProps: {
	      type: Object,
	      required: true
	    }
	  },
	  computed: {
	    data: function data() {
	      if (this.emoji && this.emoji.custom) {
	        return this.emoji;
	      } else if (this.emoji) {
	        return (0, _utils.getData)(this.emoji);
	      } else {
	        return {};
	      }
	    },
	    emojiShortNames: function emojiShortNames() {
	      return this.data.short_names;
	    },
	    emojiEmoticons: function emojiEmoticons() {
	      return this.data.emoticons;
	    }
	  },
	  components: {
	    Emoji: _emoji2.default,
	    Skins: _skins2.default
	  }
	}; //
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

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(134)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(136),
	  /* template */
	  __webpack_require__(137),
	  /* scopeId */
	  "data-v-a9a7c57a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jess/Sites/emoji-mart-vue/src/components/skins.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] skins.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a9a7c57a", Component.options)
	  } else {
	    hotAPI.reload("data-v-a9a7c57a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(135);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("bf50c1dc", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a9a7c57a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./skins.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a9a7c57a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./skins.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.emoji-mart-skin-swatches[data-v-a9a7c57a] {\n  font-size: 0;\n  padding: 2px 0;\n  border: 1px solid #d9d9d9;\n  border-radius: 12px;\n  background-color: #fff;\n}\n.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch[data-v-a9a7c57a] {\n  width: 16px;\n  padding: 0 2px;\n}\n.emoji-mart-skin-swatches-opened .emoji-mart-skin-swatch-selected[data-v-a9a7c57a]:after {\n  opacity: .75;\n}\n.emoji-mart-skin-swatch[data-v-a9a7c57a] {\n  display: inline-block;\n  width: 0;\n  vertical-align: middle;\n  transition-property: width, padding;\n  transition-duration: .125s;\n  transition-timing-function: ease-out;\n}\n.emoji-mart-skin-swatch[data-v-a9a7c57a]:nth-child(1) { transition-delay: 0s\n}\n.emoji-mart-skin-swatch[data-v-a9a7c57a]:nth-child(2) { transition-delay: .03s\n}\n.emoji-mart-skin-swatch[data-v-a9a7c57a]:nth-child(3) { transition-delay: .06s\n}\n.emoji-mart-skin-swatch[data-v-a9a7c57a]:nth-child(4) { transition-delay: .09s\n}\n.emoji-mart-skin-swatch[data-v-a9a7c57a]:nth-child(5) { transition-delay: .12s\n}\n.emoji-mart-skin-swatch[data-v-a9a7c57a]:nth-child(6) { transition-delay: .15s\n}\n.emoji-mart-skin-swatch-selected[data-v-a9a7c57a] {\n  position: relative;\n  width: 16px;\n  padding: 0 2px;\n}\n.emoji-mart-skin-swatch-selected[data-v-a9a7c57a]:after {\n  content: \"\";\n  position: absolute;\n  top: 50%; left: 50%;\n  width: 4px; height: 4px;\n  margin: -2px 0 0 -2px;\n  background-color: #fff;\n  border-radius: 100%;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity .2s ease-out;\n}\n.emoji-mart-skin[data-v-a9a7c57a] {\n  display: inline-block;\n  width: 100%; padding-top: 100%;\n  max-width: 12px;\n  border-radius: 100%;\n}\n.emoji-mart-skin-tone-1[data-v-a9a7c57a] { background-color: #ffc93a\n}\n.emoji-mart-skin-tone-2[data-v-a9a7c57a] { background-color: #fadcbc\n}\n.emoji-mart-skin-tone-3[data-v-a9a7c57a] { background-color: #e0bb95\n}\n.emoji-mart-skin-tone-4[data-v-a9a7c57a] { background-color: #bf8f68\n}\n.emoji-mart-skin-tone-5[data-v-a9a7c57a] { background-color: #9b643d\n}\n.emoji-mart-skin-tone-6[data-v-a9a7c57a] { background-color: #594539\n}\n\n", ""]);

	// exports


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(109);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


	exports.default = {
	  props: {
	    skin: {
	      type: Number,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      opened: false
	    };
	  },

	  computed: {
	    skinTones: function skinTones() {
	      // Use Array.prototype.fill() when it is more widely supported.
	      return [].concat((0, _toConsumableArray3.default)(Array(6))).map(function (_, i) {
	        return i + 1;
	      });
	    }
	  },
	  methods: {
	    onClick: function onClick(skinTone) {
	      var _this = this;

	      if (this.opened) {
	        this.$nextTick(function () {
	          _this.$emit('change', skinTone);
	        });
	      }

	      this.opened = !this.opened;
	    }
	  }
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: {
	      'emoji-mart-skin-swatches': true, 'emoji-mart-skin-swatches-opened': _vm.opened
	    }
	  }, [_vm._l((_vm.skinTones), function(skinTone) {
	    return [_c('span', {
	      class: {
	        'emoji-mart-skin-swatch': true, 'emoji-mart-skin-swatch-selected': _vm.skin == skinTone
	      }
	    }, [_c('span', {
	      class: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone,
	      on: {
	        "click": function($event) {
	          _vm.onClick(skinTone)
	        }
	      }
	    })])]
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a9a7c57a", module.exports)
	  }
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "emoji-mart-preview"
	  }, [(_vm.emoji) ? [_c('div', {
	    staticClass: "emoji-mart-preview-emoji"
	  }, [_c('emoji', {
	    attrs: {
	      "emoji": _vm.emoji,
	      "native": _vm.emojiProps.native,
	      "skin": _vm.emojiProps.skin,
	      "set": _vm.emojiProps.set,
	      "size": 38,
	      "sheet-size": _vm.emojiProps.sheetSize,
	      "force-size": _vm.emojiProps.forceSize,
	      "background-image-fn": _vm.emojiProps.backgroundImageFn
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "emoji-mart-preview-data"
	  }, [_c('div', {
	    staticClass: "emoji-mart-preview-name"
	  }, [_vm._v(_vm._s(_vm.emoji.name))]), _vm._v(" "), _c('div', {
	    staticClass: "emoji-mart-preview-shortnames"
	  }, _vm._l((_vm.emojiShortNames), function(name) {
	    return _c('span', {
	      staticClass: "emoji-mart-preview-shortname"
	    }, [_vm._v(":" + _vm._s(name) + ":")])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "emoji-mart-preview-emoticons"
	  }, _vm._l((_vm.emojiEmoticons), function(emoticon) {
	    return _c('span', {
	      staticClass: "emoji-mart-preview-emoticon"
	    }, [_vm._v(_vm._s(emoticon))])
	  }))])] : [_c('div', {
	    staticClass: "emoji-mart-preview-emoji"
	  }, [_c('emoji', {
	    attrs: {
	      "emoji": _vm.idleEmoji,
	      "native": _vm.emojiProps.native,
	      "skin": _vm.emojiProps.skin,
	      "set": _vm.emojiProps.set,
	      "size": 38,
	      "sheet-size": _vm.emojiProps.sheetSize,
	      "force-size": _vm.emojiProps.forceSize,
	      "background-image-fn": _vm.emojiProps.backgroundImageFn
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "emoji-mart-preview-data"
	  }, [_c('span', {
	    staticClass: "emoji-mart-title-label"
	  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
	    staticClass: "emoji-mart-preview-skins"
	  }, [_c('skins', {
	    attrs: {
	      "skin": _vm.skinProps.skin
	    },
	    on: {
	      "change": _vm.skinProps.onChange
	    }
	  })], 1)]], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-8aa04796", module.exports)
	  }
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(140)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(142),
	  /* template */
	  __webpack_require__(148),
	  /* scopeId */
	  "data-v-85e0e86a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/jess/Sites/emoji-mart-vue/src/components/search.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] search.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-85e0e86a", Component.options)
	  } else {
	    hotAPI.reload("data-v-85e0e86a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(6)("9a9a16b0", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-85e0e86a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./search.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-85e0e86a\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./search.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)(undefined);
	// imports


	// module
	exports.push([module.id, "\n.emoji-mart-search[data-v-85e0e86a] {\n  margin-top: 6px;\n  padding: 0 6px;\n}\n.emoji-mart-search input[data-v-85e0e86a] {\n  font-size: 16px;\n  display: block;\n  width: 100%;\n  padding: .2em .6em;\n  border-radius: 25px;\n  border: 1px solid #d9d9d9;\n  outline: 0;\n}\n\n", ""]);

	// exports


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _emojiIndex = __webpack_require__(143);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    i18n: {
	      type: Object,
	      required: true
	    },
	    maxResults: {
	      type: Number,
	      default: 75
	    },
	    autoFocus: {
	      type: Boolean,
	      default: false
	    },
	    emojisToShowFilter: {
	      type: Function
	    },
	    include: {
	      type: Array
	    },
	    exclude: {
	      type: Array
	    },
	    custom: {
	      type: Array
	    }
	  },
	  methods: {
	    onInput: function onInput(e) {
	      this.$emit('search', _emojiIndex2.default.search(e.target.value, {
	        emojisToShowFilter: this.emojisToShowFilter,
	        maxResults: this.maxResults,
	        include: this.include,
	        exclude: this.exclude,
	        custom: this.custom
	      }));
	    },
	    clear: function clear() {
	      this.$el.value = '';
	    }
	  },
	  mounted: function mounted() {
	    if (this.autoFocus) {
	      this.$el.focus();
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _toConsumableArray2 = __webpack_require__(109);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _getIterator2 = __webpack_require__(119);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _data = __webpack_require__(30);

	var _data2 = _interopRequireDefault(_data);

	var _ = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var extend = __webpack_require__(144)._extend;

	var index = {};
	var emojisList = {};
	var emoticonsList = {};
	var previousInclude = [];
	var previousExclude = [];

	for (var emoji in _data2.default.emojis) {
	  var emojiData = _data2.default.emojis[emoji];
	  var short_names = emojiData.short_names;
	  var emoticons = emojiData.emoticons;
	  var id = short_names[0];

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = (0, _getIterator3.default)(emoticons || []), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var emoticon = _step.value;

	      if (!emoticonsList[emoticon]) {
	        emoticonsList[emoticon] = id;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  emojisList[id] = (0, _.getSanitizedData)(id);
	}

	function search(value) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var emojisToShowFilter = _ref.emojisToShowFilter;
	  var maxResults = _ref.maxResults;
	  var include = _ref.include;
	  var exclude = _ref.exclude;
	  var _ref$custom = _ref.custom;
	  var custom = _ref$custom === undefined ? [] : _ref$custom;

	  maxResults || (maxResults = 75);
	  include || (include = []);
	  exclude || (exclude = []);

	  if (custom.length) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = (0, _getIterator3.default)(custom), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var _emoji = _step2.value;

	        _data2.default.emojis[_emoji.id] = (0, _.getData)(_emoji);
	        emojisList[_emoji.id] = (0, _.getSanitizedData)(_emoji);
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }

	    _data2.default.categories.push({
	      name: 'Custom',
	      emojis: custom.map(function (emoji) {
	        return emoji.id;
	      })
	    });
	  }

	  var results = null,
	      pool = _data2.default.emojis;

	  if (value.length) {
	    if (value == '-' || value == '-1') {
	      return [emojisList['-1']];
	    }

	    var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
	        allResults = [];

	    if (values.length > 2) {
	      values = [values[0], values[1]];
	    }

	    if (include.length || exclude.length) {
	      pool = {};

	      if (include && include.length && previousInclude != include.sort().join(',')) {
	        previousInclude = include.sort().join(',');
	        index = {};
	      }

	      if (exclude && exclude.length && previousExclude != exclude.sort().join(',')) {
	        previousExclude = exclude.sort().join(',');
	        index = {};
	      }

	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(_data2.default.categories), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var category = _step3.value;

	          var isIncluded = include && include.length ? include.indexOf(category.name.toLowerCase()) > -1 : true;
	          var isExcluded = exclude && exclude.length ? exclude.indexOf(category.name.toLowerCase()) > -1 : false;
	          if (!isIncluded || isExcluded) {
	            continue;
	          }

	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            for (var _iterator4 = (0, _getIterator3.default)(category.emojis), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var emojiId = _step4.value;

	              pool[emojiId] = _data2.default.emojis[emojiId];
	            }
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    } else if (previousInclude.length || previousExclude.length) {
	      index = {};
	    }

	    allResults = values.map(function (value) {
	      var aPool = pool,
	          aIndex = index,
	          length = 0;

	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;

	      try {
	        for (var _iterator5 = (0, _getIterator3.default)(value.split('')), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var char = _step5.value;

	          length++;

	          aIndex[char] || (aIndex[char] = {});
	          aIndex = aIndex[char];

	          if (!aIndex.results) {
	            (function () {
	              var scores = {};

	              aIndex.results = [];
	              aIndex.pool = {};

	              for (var id in aPool) {
	                var _emoji2 = aPool[id];
	                var _search = _emoji2.search;
	                var sub = value.substr(0, length);
	                var subIndex = _search.indexOf(sub);

	                if (subIndex != -1) {
	                  var score = subIndex + 1;
	                  if (sub == id) score = 0;

	                  aIndex.results.push(emojisList[id]);
	                  aIndex.pool[id] = _emoji2;

	                  scores[id] = score;
	                }
	              }

	              aIndex.results.sort(function (a, b) {
	                var aScore = scores[a.id],
	                    bScore = scores[b.id];

	                return aScore - bScore;
	              });
	            })();
	          }

	          aPool = aIndex.pool;
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }

	      return aIndex.results;
	    }).filter(function (a) {
	      return a;
	    });

	    if (allResults.length > 1) {
	      results = _.intersect.apply(undefined, (0, _toConsumableArray3.default)(allResults));
	    } else if (allResults.length) {
	      results = allResults[0];
	    } else {
	      results = [];
	    }
	  }

	  if (results) {
	    if (emojisToShowFilter) {
	      results = results.filter(function (result) {
	        return emojisToShowFilter(_data2.default.emojis[result.id].unified);
	      });
	    }

	    if (results && results.length > maxResults) {
	      results = results.slice(0, maxResults);
	    }
	  }

	  return results;
	}

	exports.default = { search: search, emojis: emojisList, emoticons: emoticonsList };

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(146);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(147);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(145)))

/***/ },
/* 145 */
/***/ function(module, exports) {

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


/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 147 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "emoji-mart-search"
	  }, [_c('input', {
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.i18n.search
	    },
	    on: {
	      "input": _vm.onInput
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-85e0e86a", module.exports)
	  }
	}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "emoji-mart",
	    style: ({
	      width: _vm.calculateWidth + 'px'
	    })
	  }, [(!_vm.hideCategoriesBar) ? _c('div', {
	    staticClass: "emoji-mart-bar"
	  }, [_c('anchors', {
	    attrs: {
	      "i18n": _vm.i18n,
	      "color": _vm.color,
	      "categories": _vm.filteredCategories,
	      "active-category": _vm.activeCategory
	    },
	    on: {
	      "click": _vm.onAnchorClick
	    }
	  })], 1) : _vm._e(), _vm._v(" "), (!_vm.hideSearchBar) ? _c('search', {
	    ref: "search",
	    attrs: {
	      "i18n": _vm.i18n,
	      "emojis-to-show-filter": _vm.emojisToShowFilter,
	      "include": _vm.include,
	      "exclude": _vm.exclude,
	      "custom": _vm.customEmojis,
	      "auto-focus": _vm.autoFocus
	    },
	    on: {
	      "search": _vm.onSearch
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    ref: "scroll",
	    staticClass: "emoji-mart-scroll",
	    on: {
	      "scroll": _vm.onScroll
	    }
	  }, [_c('category', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.searchEmojis),
	      expression: "searchEmojis"
	    }],
	    attrs: {
	      "i18n": _vm.i18n,
	      "emojis-to-show-filter": _vm.emojisToShowFilter,
	      "name": "Search",
	      "slug": "search",
	      "emojis": _vm.searchEmojis,
	      "native": _vm.native,
	      "custom": _vm.customEmojis,
	      "emoji-props": _vm.emojiProps
	    }
	  }), _vm._v(" "), (_vm.infiniteScroll) ? _vm._l((_vm.filteredCategories), function(category) {
	    return _c('category', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (!_vm.searchEmojis),
	        expression: "!searchEmojis"
	      }],
	      key: category.name,
	      ref: "categories",
	      refInFor: true,
	      attrs: {
	        "i18n": _vm.i18n,
	        "emojis-to-show-filter": _vm.emojisToShowFilter,
	        "name": category.name,
	        "slug": category.slug,
	        "emojis": category.emojis,
	        "native": _vm.native,
	        "custom": _vm.customEmojis,
	        "emoji-props": _vm.emojiProps
	      }
	    })
	  }) : (_vm.activeCategory) ? _c('category', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.searchEmojis),
	      expression: "!searchEmojis"
	    }],
	    key: _vm.activeCategory.name,
	    ref: "categories",
	    attrs: {
	      "i18n": _vm.i18n,
	      "emojis-to-show-filter": _vm.emojisToShowFilter,
	      "name": _vm.activeCategory.name,
	      "slug": _vm.activeCategory.slug,
	      "emojis": _vm.activeCategory.emojis,
	      "native": _vm.native,
	      "custom": _vm.customEmojis,
	      "emoji-props": _vm.emojiProps
	    }
	  }) : _vm._e()], 2), _vm._v(" "), (!_vm.hidePreviewBar) ? _c('div', {
	    staticClass: "emoji-mart-bar"
	  }, [_c('preview', {
	    attrs: {
	      "title": _vm.title,
	      "emoji": _vm.previewEmoji,
	      "idle-emoji": _vm.emoji,
	      "emoji-props": _vm.emojiProps,
	      "skin-props": _vm.skinProps
	    }
	  })], 1) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-da9b689e", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;