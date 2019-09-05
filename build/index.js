/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_alignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-alignment */ "./src/text-alignment/index.js");
//import './heading';
//import './background';
 //import './block-alignment';

/***/ }),

/***/ "./src/text-alignment/icon.js":
/*!************************************!*\
  !*** ./src/text-alignment/icon.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  width: "20px",
  height: "20px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m46.242 82.672c-0.019532-0.10547-0.019532-0.20703-0.019532-0.3125v-0.35938c0 0.22656 0.011719 0.44531 0.019532 0.67188z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m53.777 82v0.35938c0 0.10547 0 0.20703-0.019532 0.3125 0.007813-0.22656 0.019532-0.44531 0.019532-0.67188z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m71.129 91.223c0 2.0859-1.6992 3.7773-3.7773 3.7773h-8.1289c-3.5977 0-6.8633-1.4727-9.2227-3.8516-2.3594 2.3789-5.6289 3.8516-9.2227 3.8516h-8.1289c-2.0781 0-3.7773-1.6914-3.7773-3.7773 0-2.0859 1.6992-3.7773 3.7773-3.7773h8.1289c3.0039 0 5.4453-2.4453 5.4453-5.4453v0.35938c0 0.10547 0 0.20703 0.019532 0.3125-0.007813-0.22656-0.019532-0.44531-0.019532-0.67188v-28.227h-4.7188c-2.0859 0-3.7773-1.6914-3.7773-3.7773 0-2.0859 1.6914-3.7773 3.7773-3.7773h4.7188v-28.219c0-3.0039-2.4453-5.4453-5.4453-5.4453h-8.1289c-2.0781 0-3.7773-1.6914-3.7773-3.7773 0-2.0859 1.6992-3.7773 3.7773-3.7773h8.1289c3.5938 0 6.8633 1.4727 9.2227 3.8516 2.3594-2.3789 5.6289-3.8516 9.2227-3.8516h8.1289c2.0781 0 3.7773 1.6914 3.7773 3.7773 0 2.0859-1.6992 3.7773-3.7773 3.7773h-8.1289c-3.0039 0-5.4453 2.4453-5.4453 5.4453v28.219h4.7188c2.0859 0 3.7773 1.6914 3.7773 3.7773 0 2.0859-1.6914 3.7773-3.7773 3.7773h-4.7188v28.227c0 0.22656-0.007813 0.44531-0.019532 0.67188 0.019532-0.10547 0.019532-0.20703 0.019532-0.3125v-0.35938c0 3.0039 2.4453 5.4453 5.4453 5.4453h8.1289c2.0781 0 3.7773 1.6914 3.7773 3.7773z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m53.777 82v0.35938c0 0.10547 0 0.20703-0.019532 0.3125 0.007813-0.22656 0.019532-0.44531 0.019532-0.67188z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m46.242 82.672c-0.019532-0.10547-0.019532-0.20703-0.019532-0.3125v-0.35938c0 0.22656 0.011719 0.44531 0.019532 0.67188z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/text-alignment/index.js":
/*!*************************************!*\
  !*** ./src/text-alignment/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/text-alignment/icon.js");

//import classnames from 'classnames';
 //import './style.scss';
//import './editor.scss';
//const { Component } = wp.element;

var registerBlockType = wp.blocks.registerBlockType; //const { Button, CheckboxControl, RadioControl, RangeControl, TextControll, TextareaControll, ToggleCOntrol, SelectControl } = wp.components;

var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;
var __ = wp.i18n.__; //const { something } = wp.data;

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('azad/azad-heading', {
  title: __('Azad Heading'),
  description: __('Azad heading is a '),
  keywords: __('Block '),
  icon: {
    background: 'rgba(254, 243, 224, 0.52)',
    src: 'editor-alignleft'
  },
  category: 'azad-gutenberg',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'div'
    },
    textAlignment: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        content = _props$attributes.content,
        textAlignment = _props$attributes.textAlignment,
        setAttributes = props.setAttributes,
        className = props.className;

    var onChangeContent = function onChangeContent(newContent) {
      setAttributes({
        content: newContent
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      value: textAlignment,
      onChange: function onChange(textAlignment) {
        return setAttributes({
          textAlignment: textAlignment
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "div" //className={className}
      ,
      onChange: onChangeContent,
      style: {
        textAlign: textAlignment
      },
      value: content,
      placeholder: __('Write here please...')
    }));
  },
  save: function save(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "div",
      value: props.attributes.content
    }));
  }
}));

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map