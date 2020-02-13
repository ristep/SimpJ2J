(this["webpackJsonprp-food-online"] = this["webpackJsonprp-food-online"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Caveat|Gloria+Hallelujah|Noto+Serif:400,400i,700,700i|Open+Sans+Condensed:300|Roboto+Mono:300,300i,400,400i,500,500i,700&display=swap&subset=cyrillic,cyrillic-ext,latin-ext);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Caveat|Gloria+Hallelujah|Noto+Serif:400,400i,700,700i|Open+Sans+Condensed:300|Roboto+Mono:300,300i,400,400i,500,500i,700|Tangerine&display=swap&subset=cyrillic,cyrillic-ext,latin-ext);", ""]);
var getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./appBacground.jpg */ "./src/appBacground.jpg"));
// Module
exports.push([module.i, "body {\n\tbackground-image: url(" + ___CSS_LOADER_URL___0___ + ");\n\tbackground-color: #cccccc;\n }\n \n.App { \n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\twidth: 100%;\n\theight: 60vh;\n\t-webkit-user-select: none;\n\t        user-select: none;\n}\n\n.flex-container {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: left;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CartBox/index.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/CartBox/index.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* The Modal (background) */\n.modal {\n  position: fixed; \n  padding-top: 28px; \n  padding-bottom: 200px; \n  left: 0;\n\ttop: 0;\n\toverflow: auto;\n  width: 100%; \n  height: 100%;\n\tbackground-color: rgba(0,0,0,0.6); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modalContent {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n\tpadding: 0px;\n  border: 1px #888;\n  width: 92%;\n\tbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n\tborder-top-left-radius: 16px;\n\tborder-bottom-right-radius: 16px ;\n}\n\n.modalContent.opening{\n\tanimation: animateOpen 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n.modalContent.closing{\n\tanimation: animateClose 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;\n}\n\n@keyframes animateOpen {\n\t0% {\n\t\t/* transform: scaleY(0); */\n\t\topacity: 0;\n\t\ttop: -100%;\n  }\n  100% {\n    /* transform: scaleY(1); */\n\t\topacity: 1;\n\t\ttop: 0%;\n  }\t\n}\n@keyframes animateClose {\n\t\t0% {\n\t\t\t/* transform: scaleY(1); */\n\t\t\topacity: 1;\n\t\t\ttop: 0%;\n\t\t}\n\t\t100% {\n\t\t\t/* transform: scaleY(0); */\n\t\t\topacity: 0;\n\t\t\ttop: -100%;\n\t\t}\n}\n\n.modalHeader {\n\tfont-family: 'Caveat', cursive;\n\tfont-size: 22px;\n\tfont-weight: 800;\n\ttext-transform: uppercase;\n\tpadding-left: 12px;\n\tpadding-right: 12px;\n\tpadding-bottom: 1px;\n\tpadding-top: 1px;\n  background-color: #CBA47C;\n\tcolor: white;\n\tborder-top-left-radius: 16px;\n}\n\n/* .modalBody {\n\tpadding: 2px 16px;\n} */\n\n.modalSummary {\n\tflex: 0 1;\n\tflex-wrap: nowrap;\n\tdirection: rtl;\n\tbackground-color: rgb(251, 253, 253);\n\theight: 33px;\n\tborder: 1px whitesmoke;\n\tbox-shadow: 0 1px 2px 0 rgba(0,0,0,0.24),0 2px 5px 0 rgba(0,0,0,0.19);\n}\n\n.button {\n\t/* position: relative; */\n\tborder: none;\n\tcolor: white;\n\tpadding-top: 8px;\n\tpadding-bottom: 8px;\n\tpadding-left: 22px;\n\tpadding-right: 22px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  cursor: pointer;\n\ttransition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\n\tborder-top-left-radius: 16px;\n\tborder-bottom-right-radius: 16px ;\n\tbox-shadow: 0 1px 2px 0 rgba(0,0,0,0.24),0 2px 5px 0 rgba(0,0,0,0.19);\n\tmargin-left: 2px;\n}\n.button:hover{ \n\tbox-shadow: 0 2px 6px 0 rgba(0,0,0,0.24),0 7px 15px 0 rgba(0,0,0,0.19);\n}\t\n.button:focus{\n\toutline: none;\t\n}\n.button:active {\n\tbox-shadow: 0 0 0 0, 0 0 0 0 ;\n}\n.close {\n\tbackground-color : rgb(198, 201, 52);\n} \n\n.cartTinyButton {\n\tborder: none;\n\tcolor: white;\n\tbackground-color: burlywood;\n\tpadding-right: 10px;\n\tpadding-left: 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  cursor: pointer;\n\ttransition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\n\tborder-bottom-left-radius: 10px;\n\tborder-top-right-radius: 10px ;\n\tbox-shadow: 0 1px 2px 0 rgba(0,0,0,0.24),0 2px 5px 0 rgba(0,0,0,0.19);\n\tmargin: 2px;\n}\n\n.cartBoxPrice {\n\tfloat: right;\n\tpadding-right: 12px;\n\tfont-family: 'Caveat', cursive;\n\tfont-size: 24px;\n\tfont-weight: 600;\n\tcolor: maroon;\n}\n\n.empty {\n\tfloat: center;\n\tbackground-color: rgb(255, 81, 0);\n\tmargin-right: 8px;\n\tborder-bottom-left-radius: 16px;\n\tborder-top-right-radius: 16px ;\n\tborder-top-left-radius: 0;\n\tborder-bottom-right-radius: 0;\n}\n.placeOrder{\n\tbackground-color: orange;\n}\n.cartRow {\n\tborder:#888;\n\tborder-style: dashed;\n\tborder-width: 0 0 1px 0;\n}\n.cartSummary {\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tfont-family: 'Caveat', cursive;\n\tfont-weight: 700;\n\tfont-size: 28px;\n\tpadding-right: 12px;\n\tcolor:maroon;\n}\n/* \nfont-family: 'Caveat', cursive;\nfont-family: 'Noto Serif', serif;\nfont-family: 'Open Sans Condensed', sans-serif;\nfont-family: 'Gloria Hallelujah', cursive;\nfont-family: 'Roboto Mono', monospace; \n*/", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CartButton/index.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/CartButton/index.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.CartButton {\n\tposition: relative;\n\tborder: none;\n\tbackground-color : #975C3F;\n\tcolor: white;\n\tpadding-top: 8px;\n\tpadding-bottom: 8px;\n\tpadding-left: 22px;\n\tpadding-right: 22px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  cursor: pointer;\n\ttransition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\n\tborder-top-left-radius: 16px;\n\tborder-bottom-right-radius: 16px ;\n\tbox-shadow: 0 1px 2px 0 rgba(0,0,0,0.24),0 2px 5px 0 rgba(0,0,0,0.19);\n}\n.CartButton:hover{ \n\tbox-shadow: 0 2px 6px 0 rgba(0,0,0,0.24),0 7px 15px 0 rgba(0,0,0,0.19);\n}\t\n.CartButton:focus{\n\toutline: none;\t\n}\n.CartButton:active {\n\ttransition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\n\tbox-shadow: 0 0 0 0, 0 0 0 0 ;\n}\n.quantity{\n\tfont-family: 'Roboto Mono', monospace; \n\tcolor: #c44a41;\n}\n.title {\n\tfont-family: 'Caveat', cursive;\n\tfont-size: 22px;\n\tfont-weight: 800;\n\ttext-transform: uppercase;\n\tcolor: #868686;\n}\n.description {\n\tfont-family: 'Open Sans Condensed', sans-serif;\n\tfont-size: 18px;\n\ttext-shadow: 4px 4px 4px #aaa;\n\tcolor: #4d0303;\n}\n\n/* \nfont-family: 'Caveat', cursive;\nfont-family: 'Noto Serif', serif;\nfont-family: 'Open Sans Condensed', sans-serif;\nfont-family: 'Gloria Hallelujah', cursive;\nfont-family: 'Roboto Mono', monospace; \n*/\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FoodBox/index.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/FoodBox/index.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".box {\n\tmargin-left: 14px;\n\tmargin-top: 14px;\n\ttransition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\n  display: flex;\n  flex-flow: column;\n\twidth: 320px;\n\theight: auto;\n\tborder-bottom-right-radius: 16px;\n\tbox-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.2);\n}\n\n.boxTop{\n\tdisplay: flex;\n\talign-items: flex-end;\n\tborder-top-left-radius: 16px;\n\tmin-height: 258px;\n}\n\n.box:hover {\n\tbox-shadow: 0px 16px 10px -4px rgba(0, 0, 0, 0.2);\n\ttransform: scale(1.005, 1.005);\n}\n\n/* .box .row {\n  border: 1px grey;\n} */\n\n.box .row.header {\n  flex-grow: 0;\n  flex-shrink: 1;\n  flex-basis: auto;\n}\n\n.box .row.content {\n\tflex: 1 1 auto;\n\tbackground-color: antiquewhite;\n\tpadding-left: 1.2ex;\n\tpadding-right: 0.8ex;\n\tpadding-top: 1ex;\n\tpadding-bottom: 1ex;\n}\n\n.box .row.footer {\n\tflex: 0 1;\n\tdirection: rtl;\n\tbackground-color: whitesmoke;\n\theight: 28px;\n\tborder-bottom-right-radius: 16px;\n}\n\n.addButton {\n\tposition: relative;\n\tborder: none;\n\tbackground-color : #c44a41;\n\tcolor: white;\n\tpadding-top: 4px;\n\tpadding-bottom: 4px;\n\tpadding-left: 18px;\n\tpadding-right: 18px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  cursor: pointer;\n\ttransition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\n\tborder-top-left-radius: 16px;\n\tborder-bottom-right-radius: 16px ;\n\tbox-shadow: 0 1px 2px 0 rgba(0,0,0,0.24),0 2px 5px 0 rgba(0,0,0,0.19);\n}\n.addButton:hover{ \n\tbox-shadow: 0 2px 6px 0 rgba(0,0,0,0.24),0 7px 15px 0 rgba(0,0,0,0.19);\n}\t\n.addButton:focus{\n\toutline: none;\t\n}\n.addButton.cnt {\n\tcolor: black;\n\tbackground-color: white;\n}\n.addButton:active {\n\ttransition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\n\tbox-shadow: 0 0 0 0, 0 0 0 0 ;\n}\n.quantity{\n\tfont-family: 'Roboto Mono', monospace; \n\tcolor: #c44a41;\n}\n\n.title {\n\tfont-family: 'Caveat', cursive;\n\tfont-size: 22px;\n\tfont-weight: 800;\n\ttext-transform: uppercase;\n\tcolor: #868686;\n}\n.foodBoxprice {\n\tfloat: left;\n\tpadding-left: 12px;\n\tfont-family: 'Caveat', cursive;\n\tfont-size: 18px;\n\tfont-weight: 800;\n\tcolor: maroon;\n}\n\n.description {\n\tfont-family: 'Open Sans Condensed', sans-serif;\n\tfont-size: 18px;\n\ttext-shadow: 4px 4px 4px #aaa;\n\tcolor: #4d0303;\n}\n\n/* \nfont-family: 'Caveat', cursive;\nfont-family: 'Noto Serif', serif;\nfont-family: 'Open Sans Condensed', sans-serif;\nfont-family: 'Gloria Hallelujah', cursive;\nfont-family: 'Roboto Mono', monospace; \n*/\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/elements/popupModal/index.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/elements/popupModal/index.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* ----------------------------------------------\n * Generated by Animista on 2019-11-26 13:53:35\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n @keyframes tiltInFwdTr {\n  0% {\n    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);\n    opacity: 1;\n  }\n}\n\n @keyframes bounceInRight {\n  0% {\n    transform: translateX(600px);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  38% {\n    transform: translateX(0);\n    animation-timing-function: ease-out;\n    opacity: 1;\n  }\n  55% {\n    transform: translateX(68px);\n    animation-timing-function: ease-in;\n  }\n  72% {\n    transform: translateX(0);\n    animation-timing-function: ease-out;\n  }\n  81% {\n    transform: translateX(32px);\n    animation-timing-function: ease-in;\n  }\n  90% {\n    transform: translateX(0);\n    animation-timing-function: ease-out;\n  }\n  95% {\n    transform: translateX(8px);\n    animation-timing-function: ease-in;\n  }\n  100% {\n    transform: translateX(0);\n    animation-timing-function: ease-out;\n  }\n}\n\n@keyframes scaleInCenter {\n  0% {\n    transform: scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInCenter {\n  0% {\n    transform: rotate(-360deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slideInEllipticTopFwd {\n  0% {\n    transform: translateY(-600px) rotateX(-30deg) scale(0);\n    transform-origin: 50% 100%;\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0) rotateX(0) scale(1);\n    transform-origin: 50% 1400px;\n    opacity: 1;\n  }\n}\n\n@keyframes bounceOutTop {\n  0% {\n    transform: translateY(0);\n    animation-timing-function: ease-out;\n  }\n  5% {\n    transform: translateY(-30px);\n    animation-timing-function: ease-in;\n  }\n  15% {\n    transform: translateY(0);\n    animation-timing-function: ease-out;\n  }\n  25% {\n    transform: translateY(-38px);\n    animation-timing-function: ease-in;\n  }\n  38% {\n    transform: translateY(0);\n    animation-timing-function: ease-out;\n  }\n  52% {\n    transform: translateY(-75px);\n    animation-timing-function: ease-in;\n  }\n  70% {\n    transform: translateY(0);\n    animation-timing-function: ease-out;\n  }\n  85% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-800px);\n    opacity: 0;\n  }\n}\n\n@keyframes rollOutBlurredTop {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-800px) rotate(-720deg);\n    filter: blur(50px);\n    opacity: 0;\n  }\n}\n\n@keyframes scaleOutCenter {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0);\n    opacity: 1;\n  }\n}\n\n@keyframes slideOutEllipticTopBck {\n  0% {\n    transform: translateY(0) rotateX(0) scale(1);\n    transform-origin: 50% 1400px;\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-600px) rotateX(-30deg) scale(0);\n    transform-origin: 50% 100%;\n    opacity: 1;\n  }\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/product/index.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/product/index.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".box {\n\tmargin-left: 14px;\n\tmargin-top: 14px;\n\ttransition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\n  display: flex;\n  flex-flow: column;\n\twidth: 320px;\n\theight: auto;\n\tborder-bottom-right-radius: 16px;\n\tbox-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.2);\n}\n\n.boxTop{\n\tdisplay: flex;\n\talign-items: flex-end;\n\tborder-top-left-radius: 16px;\n\tmin-height: 258px;\n}\n\n.box:hover {\n\tbox-shadow: 0px 16px 10px -4px rgba(0, 0, 0, 0.2);\n\ttransform: scale(1.005, 1.005);\n}\n\n/* .box .row {\n  border: 1px grey;\n} */\n\n.box .row.header {\n  flex-grow: 0;\n  flex-shrink: 1;\n  flex-basis: auto;\n}\n\n.box .row.content {\n\tflex: 1 1 auto;\n\tbackground-color: antiquewhite;\n\tpadding-left: 1.2ex;\n\tpadding-right: 0.8ex;\n\tpadding-top: 1ex;\n\tpadding-bottom: 1ex;\n}\n\n.box .row.footer {\n\tflex: 0 1;\n\tdirection: rtl;\n\tbackground-color: whitesmoke;\n\theight: 28px;\n\tborder-bottom-right-radius: 16px;\n}\n\n.addButton {\n\tposition: relative;\n\tborder: none;\n\tbackground-color : #c44a41;\n\tcolor: white;\n\tpadding-top: 4px;\n\tpadding-bottom: 4px;\n\tpadding-left: 18px;\n\tpadding-right: 18px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  cursor: pointer;\n\ttransition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\n\tborder-top-left-radius: 16px;\n\tborder-bottom-right-radius: 16px ;\n\tbox-shadow: 0 1px 2px 0 rgba(0,0,0,0.24),0 2px 5px 0 rgba(0,0,0,0.19);\n}\n.addButton:hover{ \n\tbox-shadow: 0 2px 6px 0 rgba(0,0,0,0.24),0 7px 15px 0 rgba(0,0,0,0.19);\n}\t\n.addButton:focus{\n\toutline: none;\t\n}\n.addButton.cnt {\n\tcolor: black;\n\tbackground-color: white;\n}\n.addButton:active {\n\ttransition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\n\tbox-shadow: 0 0 0 0, 0 0 0 0 ;\n}\n.quantity{\n\tfont-family: 'Roboto Mono', monospace; \n\tcolor: #c44a41;\n}\n\n.title {\n\tfont-family: 'Caveat', cursive;\n\tfont-size: 22px;\n\tfont-weight: 800;\n\ttext-transform: uppercase;\n\tcolor: #868686;\n}\n.foodBoxprice {\n\tfloat: left;\n\tpadding-left: 12px;\n\tfont-family: 'Caveat', cursive;\n\tfont-size: 18px;\n\tfont-weight: 800;\n\tcolor: maroon;\n}\n\n.description {\n\tfont-family: 'Open Sans Condensed', sans-serif;\n\tfont-size: 18px;\n\ttext-shadow: 4px 4px 4px #aaa;\n\tcolor: #4d0303;\n}\n\n/* \nfont-family: 'Caveat', cursive;\nfont-family: 'Noto Serif', serif;\nfont-family: 'Open Sans Condensed', sans-serif;\nfont-family: 'Gloria Hallelujah', cursive;\nfont-family: 'Roboto Mono', monospace; \n*/\n", ""]);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_appNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/appNavbar */ "./src/components/appNavbar.jsx");
/* harmony import */ var components_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/about */ "./src/components/about.jsx");
/* harmony import */ var components_setings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/setings */ "./src/components/setings.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux/actions */ "./src/redux/actions.js");
/* harmony import */ var redux_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux/selectors */ "./src/redux/selectors.js");
/* harmony import */ var components_CartBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CartBox */ "./src/components/CartBox/index.jsx");
/* harmony import */ var hookrouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hookrouter */ "./node_modules/hookrouter/dist/index.js");
/* harmony import */ var hookrouter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hookrouter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var pages_home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pages/home */ "./src/pages/home.jsx");
/* harmony import */ var pages_pruducts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pages/pruducts */ "./src/pages/pruducts.jsx");
/* harmony import */ var pages_NotFound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pages/NotFound */ "./src/pages/NotFound.jsx");
/* harmony import */ var pages_setings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pages/setings */ "./src/pages/setings.jsx");
/* harmony import */ var pages_product__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pages/product */ "./src/pages/product/index.jsx");
var _jsxFileName = "/home/riste/react/rp-food-online/src/App.jsx";















const routes = {
  '/': () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pages_home__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }),
  '/home': () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pages_home__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }),
  '/products': () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pages_pruducts__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }),
  // '/product/:id': ({id}) => <ProductPage id={id} />,
  '/product/:variant': ({
    variant
  }) => product => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pages_product__WEBPACK_IMPORTED_MODULE_14__["default"], {
    product: product,
    variant: variant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }),
  '/setings': () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pages_setings__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }),
  '/people': () => 'We are happy people',
  '/company': () => 'Our company is nice' // '/products/:id': ({id}) => <ProductDetails id={id} />

};

function App() {
  // const userToken = useSelector(getUserToken);
  const foodsAll = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(redux_selectors__WEBPACK_IMPORTED_MODULE_7__["getFoodsAll"]); //obtained data from server

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const routeResult = Object(hookrouter__WEBPACK_IMPORTED_MODULE_9__["useRoutes"])(routes);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    onTokenClick();
    setTimeout(function () {
      onClickSelectFoods();
    }, 1000);
  }, []);

  const onTokenClick = () => {
    dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_6__["fetchToken"])({
      userName: 'mavro',
      password: 'mavro'
    }));
  };

  const onClickSelectFoods = () => {
    dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_6__["fetchJsonData"])({
      dataSet: 'foodsAll',
      jsonQuery: {
        sqlStatement: "select",
        table: "Foods",
        fields: ["id", "title", "description", "size", "price", "imgFileName"]
      }
    }));
  };

  const onZelkaClick = () => {
    dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_6__["fetchJsonData"])({
      dataSet: 'Zelka',
      jsonQuery: {
        sqlStatement: "select",
        table: "food",
        fields: ["id", "title", "description"],
        keyData: {
          id: 1
        }
      }
    }));
  };

  const openCartBox = () => {
    console.log('ahha');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "App-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_appNavbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, routeResult || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pages_NotFound__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_setings__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_about__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CartBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/appBacground.jpg":
/*!******************************!*\
  !*** ./src/appBacground.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/appBacground.543f78d1.jpg";

/***/ }),

/***/ "./src/components/CartBox/index.css":
/*!******************************************!*\
  !*** ./src/components/CartBox/index.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CartBox/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CartBox/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CartBox/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/CartBox/index.jsx":
/*!******************************************!*\
  !*** ./src/components/CartBox/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/selectors */ "./src/redux/selectors.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions */ "./src/redux/actions.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/components/CartBox/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/riste/react/rp-food-online/src/components/CartBox/index.jsx";



 // import ReactJson from "react-json-view";



const CartBox = () => {
  const boxState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(redux_selectors__WEBPACK_IMPORTED_MODULE_2__["getCartBoxState"]);
  const [rend, setRend] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    itemCount,
    amount,
    items
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(redux_selectors__WEBPACK_IMPORTED_MODULE_2__["getCartDataSet"]);
  const [anime, setAnime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('closed');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (boxState) setRend(true);
    setAnime(boxState ? 'opening' : 'closing');
  }, [boxState]);

  const animationEnd = () => {
    if (!boxState) setRend(false);
  };

  return rend && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal",
    onAnimationEnd: () => animationEnd(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalContent " + anime,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Shopping Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    align: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "$", amount.toFixed(2)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalSummary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "close button",
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["closeCartBox"])()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Close"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "placeOrder button",
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["closeCartBox"])()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Place an order"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "empty button",
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["clearCart"])()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Empty Cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalBody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, [...items.map((item, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cartRow",
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "cartTinyButton itemRemove",
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["removeFromCart"])(i)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Remove"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "cartTinyButton minus",
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["addCartItemQuantity"])({
      index: i,
      quantity: -1
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "cartTinyButton plus",
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["addCartItemQuantity"])({
      index: i,
      quantity: 1
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "+")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cartBoxPrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, item.quantity > 1 ? item.quantity + ' x $' + item.price.toFixed(2) + ' = ' : '', " $", (item.price * item.quantity).toFixed(2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, item.description)))], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "cartSummary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, itemCount, " Items,    Amount: $", amount.toFixed(2), " ")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartBox);

/***/ }),

/***/ "./src/components/CartButton/index.css":
/*!*********************************************!*\
  !*** ./src/components/CartButton/index.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CartButton/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CartButton/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/CartButton/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/CartButton/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/CartButton/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/selectors */ "./src/redux/selectors.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions */ "./src/redux/actions.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/components/CartButton/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/riste/react/rp-food-online/src/components/CartButton/index.jsx";






const CartButton = () => {
  const {
    itemCount,
    amount
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(redux_selectors__WEBPACK_IMPORTED_MODULE_2__["getCartDataSet"]);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "CartButton",
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["toggleCartBox"])()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Shopping Cart ", itemCount, " items for $", amount.toFixed(2));
};

/* harmony default export */ __webpack_exports__["default"] = (CartButton);

/***/ }),

/***/ "./src/components/FoodBox/index.css":
/*!******************************************!*\
  !*** ./src/components/FoodBox/index.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FoodBox/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FoodBox/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/FoodBox/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/FoodBox/index.jsx":
/*!******************************************!*\
  !*** ./src/components/FoodBox/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/FoodBox/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dataModules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dataModules */ "./src/dataModules/index.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux/actions */ "./src/redux/actions.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/components/FoodBox/index.jsx";






const Box = props => {
  const {
    id,
    title,
    description,
    size,
    imgFileName,
    price
  } = props;
  const [quantity, setQuantity] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); // console.log(props);	

  var topStyle = {
    backgroundImage: 'url(' + dataModules__WEBPACK_IMPORTED_MODULE_3__["imgUrl"] + 'background.png)'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "boxTop",
    style: topStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      maxWidth: "100%"
    },
    src: dataModules__WEBPACK_IMPORTED_MODULE_3__["imgUrl"] + imgFileName,
    alt: "Image?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "addButton",
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_4__["addToCart"])({ ...props,
      quantity
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Add to cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "addButton cnt",
    onClick: () => setQuantity(quantity < 12 ? quantity + 1 : quantity),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "quantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, " ", quantity.toString().padStart(2, '0'), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "addButton cnt",
    onClick: () => setQuantity(quantity > 0 ? quantity - 1 : quantity),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "foodBoxprice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "$", (price * quantity).toFixed(2))));
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./src/components/about.jsx":
/*!**********************************!*\
  !*** ./src/components/about.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions.js");
/* harmony import */ var elements_topBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elements/topBanner */ "./src/elements/topBanner.jsx");
/* harmony import */ var elements_bottomBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! elements/bottomBanner */ "./src/elements/bottomBanner.jsx");
/* harmony import */ var elements_bodyBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! elements/bodyBanner */ "./src/elements/bodyBanner.jsx");
/* harmony import */ var elements_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! elements/button */ "./src/elements/button.jsx");
/* harmony import */ var elements_popupModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! elements/popupModal */ "./src/elements/popupModal/index.jsx");
/* harmony import */ var redux_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux/selectors */ "./src/redux/selectors.js");
/* harmony import */ var hooks_winSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hooks/winSize */ "./src/hooks/winSize.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/components/about.jsx";









 //import { setState } from 'expect/build/jestMatchersObject';

const AboutDialog = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const aboutDialogState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(redux_selectors__WEBPACK_IMPORTED_MODULE_8__["getAboutDialogState"]);
  const winSize = Object(hooks_winSize__WEBPACK_IMPORTED_MODULE_9__["default"])(); //const  [ rem, setRem ] = useState()

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_popupModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showModal: aboutDialogState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_topBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "About on foodOnLine!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_bodyBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Sir=", winSize.width, " Visina=", winSize.height)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_bottomBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["closeAboutDialog"])()),
    red: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Close")));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutDialog);

/***/ }),

/***/ "./src/components/appNavbar.jsx":
/*!**************************************!*\
  !*** ./src/components/appNavbar.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions */ "./src/redux/actions.js");
/* harmony import */ var elements_navBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elements/navBar */ "./src/elements/navBar.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var redux_reducers_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux/reducers/theme */ "./src/redux/reducers/theme.js");
/* harmony import */ var _CartButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartButton */ "./src/components/CartButton/index.jsx");
var _jsxFileName = "/home/riste/react/rp-food-online/src/components/appNavbar.jsx";






 // import { navigate } from 'hookrouter';

const AppNavBar = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const color = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(redux_reducers_theme__WEBPACK_IMPORTED_MODULE_5__["getColors"]);
  const Link = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].a`
		display: block;
		color: white;
		text-align: center;
		padding: 0px 14px 0px 14px; 
		text-decoration: none;
		user-select: none;
		float: left;
		&.running{
			background-color: ${color.button.green};
		}
		:hover{
				background-color: ${color.button.red};
		}
	`;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_navBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["goHome"])()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["navigateToUrl"])('/setings')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Setings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["navigateToUrl"])('/products')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    style: {
      float: 'right'
    },
    onClick: () => dispatch(Object(redux_actions__WEBPACK_IMPORTED_MODULE_2__["openAboutDialog"])()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "About"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppNavBar);

/***/ }),

/***/ "./src/components/setings.jsx":
/*!************************************!*\
  !*** ./src/components/setings.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions.js");
/* harmony import */ var elements_topBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! elements/topBanner */ "./src/elements/topBanner.jsx");
/* harmony import */ var elements_bottomBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! elements/bottomBanner */ "./src/elements/bottomBanner.jsx");
/* harmony import */ var elements_bodyBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! elements/bodyBanner */ "./src/elements/bodyBanner.jsx");
/* harmony import */ var elements_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! elements/button */ "./src/elements/button.jsx");
/* harmony import */ var elements_popupModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! elements/popupModal */ "./src/elements/popupModal/index.jsx");
/* harmony import */ var redux_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux/selectors */ "./src/redux/selectors.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/components/setings.jsx";
 //import ReactJson from 'react-json-view';










const Seting = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const settingsDialog = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(redux_selectors__WEBPACK_IMPORTED_MODULE_8__["getSettingsDialogState"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_popupModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showModal: settingsDialog,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_topBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Setings dialog!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_bodyBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_bottomBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(elements_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["closeSettingsDialog"])()),
    red: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Close")));
};

/* harmony default export */ __webpack_exports__["default"] = (Seting);

/***/ }),

/***/ "./src/dataModules/index.js":
/*!**********************************!*\
  !*** ./src/dataModules/index.js ***!
  \**********************************/
/*! exports provided: getToken, getJsonData, imgUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJsonData", function() { return getJsonData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgUrl", function() { return imgUrl; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axParams = {
  baseURL: "http://192.168.100.8/SimpJ2J/",
  headers: {
    "Authorization": "dummy-key",
    "Content-type": "application/json"
  }
};
const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(axParams);
const getToken = args => {
  const {
    url = 'tokenizer/',
    userName,
    password,
    callBack,
    callError
  } = args; //console.log(url);

  const fetchToken = () => {
    Axios.post(url, {
      name: userName,
      password: password
    }).then(response => {
      //console.log(response)
      callBack({
        timeStamp: Date.now(),
        ...response.data
      });
    }).catch(error => {
      console.log(error);
      callError(error);
    });
  };

  fetchToken();
};
const getJsonData = args => {
  const {
    request,
    auToken,
    callBack
  } = args;

  const fetchData = async () => {
    const dtj = await Axios.post("", request, {
      headers: {
        Authorization: auToken
      }
    });
    callBack(dtj.data);
  };

  fetchData();
};
const imgUrl = axParams.baseURL + 'images/';

/***/ }),

/***/ "./src/elements/bodyBanner.jsx":
/*!*************************************!*\
  !*** ./src/elements/bodyBanner.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_reducers_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/reducers/theme */ "./src/redux/reducers/theme.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/elements/bodyBanner.jsx";

 //import ReactJson from 'react-json-view';



const Body = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
	height: fit-content;
	display: contents;
`;

const BodyBanner = props => {
  const color = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(redux_reducers_theme__WEBPACK_IMPORTED_MODULE_3__["getColors"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, {
    style: {
      backgroundColor: color.background
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (BodyBanner);

/***/ }),

/***/ "./src/elements/bottomBanner.jsx":
/*!***************************************!*\
  !*** ./src/elements/bottomBanner.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_reducers_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/reducers/theme */ "./src/redux/reducers/theme.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/elements/bottomBanner.jsx";

 //import ReactJson from 'react-json-view';



const BottomBannerStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	line-height:40px;
	text-align: center;
	text-shadow: 20px;
	width:100%;
  height:42px;
  background-color:#94A74D;
  position:absolute;
	bottom:0px;
	box-shadow: 0px -1px 3px -1px rgba(0,0,0,0.66);
	`;

const BottomBanner = props => {
  const color = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(redux_reducers_theme__WEBPACK_IMPORTED_MODULE_3__["getColors"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomBannerStyled, {
    style: {
      backgroundColor: color.primary
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (BottomBanner);

/***/ }),

/***/ "./src/elements/button.jsx":
/*!*********************************!*\
  !*** ./src/elements/button.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_reducers_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/reducers/theme */ "./src/redux/reducers/theme.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/elements/button.jsx";

 //import ReactJson from 'react-json-view';



const ButtonS = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  border: none;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  /* font-size: 16px; */
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
	transition-duration: 0.4s;
	border-radius:4px;
	box-shadow: 0 1px 2px 0 rgba(0,0,0,0.24),0 2px 5px 0 rgba(0,0,0,0.19);
	:hover{ 
		box-shadow: 0 2px 6px 0 rgba(0,0,0,0.24),0 7px 15px 0 rgba(0,0,0,0.19);
	}	
	:focus{
		outline: none;	
	}
`;

const Button = props => {
  const {
    green,
    blue,
    red
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(redux_reducers_theme__WEBPACK_IMPORTED_MODULE_3__["getButtonColors"]);
  var stl = {
    backgroundColor: green
  };

  if (props.blue) {
    stl.backgroundColor = blue;
  }

  ;

  if (props.red) {
    stl.backgroundColor = red;
  }

  ;

  if (props.disabled) {
    stl = { ...stl,
      backgroundColor: '#fff',
      color: '#c0c0c0',
      boxShadow: " 0 0 0 0"
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonS, Object.assign({
    style: stl
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/elements/navBar.jsx":
/*!*********************************!*\
  !*** ./src/elements/navBar.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_reducers_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/reducers/theme */ "./src/redux/reducers/theme.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/elements/navBar.jsx";




const AppNavStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
position: relative;
height: 32px;
line-height:32px;
text-align: center;
font-size: 16px;
color: white;
box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.66);
`;

const NavBar = props => {
  const color = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(redux_reducers_theme__WEBPACK_IMPORTED_MODULE_3__["getColors"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppNavStyled, {
    style: {
      backgroundColor: color.primary
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/elements/popupModal/index.css":
/*!*******************************************!*\
  !*** ./src/elements/popupModal/index.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/elements/popupModal/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/elements/popupModal/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/elements/popupModal/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/elements/popupModal/index.jsx":
/*!*******************************************!*\
  !*** ./src/elements/popupModal/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_reducers_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/reducers/theme */ "./src/redux/reducers/theme.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/elements/popupModal/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/elements/popupModal/index.jsx";





const PopupOuter = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.2);
`;
const PopupInner = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 6px;
  box-shadow: 10px 10px 5px rgba(9, 9, 9, 0.2);
  user-select: none;
`;
const fadeInArr = ["tiltInFwdTr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both", "bounceInRight 1.1s both", "scaleInCenter 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both", "rotateInCenter 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both", "slideInEllipticTopFwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"];
const fadeOutArr = ["bounceOutTop 1.5s both", "scaleOutCenter 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both", "rollOutBlurredTop 0.6s cubic-bezier(0.755, 0.050, 0.855, 0.060) both", "slideOutEllipticTopBck 0.7s ease-in both"];

const PopupModal = ({
  showModal: show,
  children
}) => {
  const color = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(redux_reducers_theme__WEBPACK_IMPORTED_MODULE_2__["getColors"]);
  const [rend, setRend] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [anime, setAnime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (show) setRend(true);
    const fadeIn = Math.floor(Math.random() * fadeInArr.length);
    const fadeOut = Math.floor(Math.random() * fadeOutArr.length);
    setAnime(show ? fadeInArr[fadeIn] : fadeOutArr[fadeOut]);
  }, [show]);

  const animationEnd = () => {
    if (!show) setRend(false);
  };

  return rend && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopupOuter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopupInner, {
    style: {
      animation: `${anime}`,
      backgroundColor: color.background
    },
    onAnimationEnd: () => animationEnd(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (PopupModal);

/***/ }),

/***/ "./src/elements/topBanner.jsx":
/*!************************************!*\
  !*** ./src/elements/topBanner.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_reducers_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/reducers/theme */ "./src/redux/reducers/theme.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/elements/topBanner.jsx";




const TopBannerStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
position: relative;
height: 60px;
line-height:40px;
text-align: center;
text-shadow: 20px;
font-size: 26px;
color: white;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.66);
`;

const TopBanner = props => {
  const color = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(redux_reducers_theme__WEBPACK_IMPORTED_MODULE_3__["getColors"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBannerStyled, {
    style: {
      backgroundColor: color.primary
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (TopBanner);

/***/ }),

/***/ "./src/hooks/winSize.js":
/*!******************************!*\
  !*** ./src/hooks/winSize.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useWinSize() {
  const [windowSize, setWindowSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: window.innerWidth,
    height: window.innerHeight
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    ;
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}

/* harmony default export */ __webpack_exports__["default"] = (useWinSize);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/index.jsx";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pages/NotFound.jsx":
/*!********************************!*\
  !*** ./src/pages/NotFound.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/riste/react/rp-food-online/src/pages/NotFound.jsx";


const PageNotFound = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Page not found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Wrong URL!"));
};

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/pages/home.jsx":
/*!****************************!*\
  !*** ./src/pages/home.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hookrouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hookrouter */ "./node_modules/hookrouter/dist/index.js");
/* harmony import */ var hookrouter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hookrouter__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/riste/react/rp-food-online/src/pages/home.jsx";



const HomePage = () => {
  Object(hookrouter__WEBPACK_IMPORTED_MODULE_1__["useTitle"])('Home');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Ajdee"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/pages/product/index.css":
/*!*************************************!*\
  !*** ./src/pages/product/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/product/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/product/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/product/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/product/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/product/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/pages/product/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dataModules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dataModules */ "./src/dataModules/index.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux/actions */ "./src/redux/actions.js");
var _jsxFileName = "/home/riste/react/rp-food-online/src/pages/product/index.jsx";






const ProductPage = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Aman de"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.product), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "variant=", props.variant));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

/***/ }),

/***/ "./src/pages/pruducts.jsx":
/*!********************************!*\
  !*** ./src/pages/pruducts.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/selectors */ "./src/redux/selectors.js");
/* harmony import */ var components_FoodBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/FoodBox */ "./src/components/FoodBox/index.jsx");
/* harmony import */ var react_favicon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-favicon */ "./node_modules/react-favicon/dist/react-favicon.js");
/* harmony import */ var react_favicon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_favicon__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/riste/react/rp-food-online/src/pages/pruducts.jsx";
 // import './App.css';






function ProductsPage() {
  // const userToken = useSelector(getUserToken);
  const foodsAll = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(redux_selectors__WEBPACK_IMPORTED_MODULE_2__["getFoodsAll"]); //obtained data from server

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_favicon__WEBPACK_IMPORTED_MODULE_4___default.a, {
    url: "../pizzaFab.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), [...foodsAll.data.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_FoodBox__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
    render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Ajdee test")
  }, x, {
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })))]);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductsPage);

/***/ }),

/***/ "./src/pages/setings.jsx":
/*!*******************************!*\
  !*** ./src/pages/setings.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hookrouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hookrouter */ "./node_modules/hookrouter/dist/index.js");
/* harmony import */ var hookrouter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hookrouter__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/riste/react/rp-food-online/src/pages/setings.jsx";



const SetingsPage = () => {
  Object(hookrouter__WEBPACK_IMPORTED_MODULE_1__["useTitle"])('Setings');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Setings Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Routing is OK??"));
};

/* harmony default export */ __webpack_exports__["default"] = (SetingsPage);

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: GO_HOME, NAVIGATE_TO_URL, OPEN_SETTINGS_DIALOG, CLOSE_SETTINGS_DIALOG, OPEN_ABOUT_DIALOG, CLOSE_ABOUT_DIALOG, OPEN_CLEAR_ALERT, CLOSE_CLEAR_ALERT, OPEN_CART_BOX, CLOSE_CART_BOX, TOGGLE_CART_BOX, FETCH_TOKEN_REQUEST, FETCH_TOKEN_SUCCESS, FETCH_TOKEN_ERROR, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, ADD_CART_ITEM_QUANTITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO_HOME", function() { return GO_HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATE_TO_URL", function() { return NAVIGATE_TO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SETTINGS_DIALOG", function() { return OPEN_SETTINGS_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SETTINGS_DIALOG", function() { return CLOSE_SETTINGS_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_ABOUT_DIALOG", function() { return OPEN_ABOUT_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_ABOUT_DIALOG", function() { return CLOSE_ABOUT_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_CLEAR_ALERT", function() { return OPEN_CLEAR_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_CLEAR_ALERT", function() { return CLOSE_CLEAR_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_CART_BOX", function() { return OPEN_CART_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_CART_BOX", function() { return CLOSE_CART_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_BOX", function() { return TOGGLE_CART_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOKEN_REQUEST", function() { return FETCH_TOKEN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOKEN_SUCCESS", function() { return FETCH_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOKEN_ERROR", function() { return FETCH_TOKEN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DATA_REQUEST", function() { return FETCH_DATA_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DATA_SUCCESS", function() { return FETCH_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DATA_ERROR", function() { return FETCH_DATA_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART", function() { return REMOVE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CART", function() { return CLEAR_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_ITEM_QUANTITY", function() { return ADD_CART_ITEM_QUANTITY; });
// Pages swich actions 
const GO_HOME = "GO_HOME";
const NAVIGATE_TO_URL = "NAVIGATE_TO_URL"; // UI state action types

const OPEN_SETTINGS_DIALOG = "OPEN_SETTINGS_DIALOG";
const CLOSE_SETTINGS_DIALOG = "CLOSE_SETTINGS_DIALOG";
const OPEN_ABOUT_DIALOG = "OPEN_ABOUT_DIALOG";
const CLOSE_ABOUT_DIALOG = "CLOSE_ABOUT_DIALOG";
const OPEN_CLEAR_ALERT = "OPEN_CLEAR_ALERT";
const CLOSE_CLEAR_ALERT = "CLOSE_CLEAR_ALERT";
const OPEN_CART_BOX = 'OPEN_CART_BOX';
const CLOSE_CART_BOX = 'CLOSE_CART_BOX';
const TOGGLE_CART_BOX = 'TOGGLE_CART_BOX'; // Get Token API

const FETCH_TOKEN_REQUEST = 'FETCH_TOKEN_REQUEST';
const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';
const FETCH_TOKEN_ERROR = 'FETCH_TOKEN_ERROR'; // get data 

const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'; // cart actionTypes

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const ADD_CART_ITEM_QUANTITY = 'ADD_CART_ITEM_QUANTITY';

/***/ }),

/***/ "./src/redux/actions.js":
/*!******************************!*\
  !*** ./src/redux/actions.js ***!
  \******************************/
/*! exports provided: goHome, navigateToUrl, openSettingsDialog, closeSettingsDialog, openAboutDialog, closeAboutDialog, openClearAlert, closeClearAlert, openCartBox, closeCartBox, toggleCartBox, fetchTokenRequest, fetchTokenSucces, fetchTokenError, fetchToken, fetchDataRequest, fetchDataSucces, fetchDataError, fetchJsonData, addToCart, removeFromCart, clearCart, addCartItemQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goHome", function() { return goHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToUrl", function() { return navigateToUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSettingsDialog", function() { return openSettingsDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSettingsDialog", function() { return closeSettingsDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAboutDialog", function() { return openAboutDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAboutDialog", function() { return closeAboutDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openClearAlert", function() { return openClearAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeClearAlert", function() { return closeClearAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCartBox", function() { return openCartBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeCartBox", function() { return closeCartBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCartBox", function() { return toggleCartBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTokenRequest", function() { return fetchTokenRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTokenSucces", function() { return fetchTokenSucces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTokenError", function() { return fetchTokenError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchToken", function() { return fetchToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataRequest", function() { return fetchDataRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataSucces", function() { return fetchDataSucces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataError", function() { return fetchDataError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchJsonData", function() { return fetchJsonData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartItemQuantity", function() { return addCartItemQuantity; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var dataModules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dataModules */ "./src/dataModules/index.js");

 // Route actions

const goHome = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GO_HOME"]
});
const navigateToUrl = url => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["NAVIGATE_TO_URL"],
  payload: url
}); // UI Actions

const openSettingsDialog = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["OPEN_SETTINGS_DIALOG"]
});
const closeSettingsDialog = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLOSE_SETTINGS_DIALOG"]
});
const openAboutDialog = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["OPEN_ABOUT_DIALOG"]
});
const closeAboutDialog = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLOSE_ABOUT_DIALOG"]
});
const openClearAlert = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["OPEN_CLEAR_ALERT"]
});
const closeClearAlert = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLOSE_CLEAR_ALERT"]
});
const openCartBox = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["OPEN_CART_BOX"]
});
const closeCartBox = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLOSE_CART_BOX"]
});
const toggleCartBox = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_CART_BOX"]
}); // token actions async

const fetchTokenRequest = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TOKEN_REQUEST"]
});
const fetchTokenSucces = tokenData => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TOKEN_SUCCESS"],
  payload: tokenData
});
const fetchTokenError = errInfo => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_TOKEN_ERROR"],
  payload: errInfo
});
const fetchToken = unpas => {
  return function (dispatch) {
    dispatch(fetchTokenRequest());
    Object(dataModules__WEBPACK_IMPORTED_MODULE_1__["getToken"])({ ...unpas,
      callBack: udat => dispatch(fetchTokenSucces(udat)),
      callError: err => dispatch(fetchTokenError(err))
    });
  };
}; // fetch JsonData

const fetchDataRequest = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_DATA_REQUEST"]
});
const fetchDataSucces = JsonData => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_DATA_SUCCESS"],
  payload: JsonData
});
const fetchDataError = errInfo => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_DATA_ERROR"],
  payload: errInfo
});
const fetchJsonData = args => {
  const {
    dataSet,
    jsonQuery
  } = args;
  return function (dispatch, getState) {
    dispatch(fetchDataRequest());
    Object(dataModules__WEBPACK_IMPORTED_MODULE_1__["getJsonData"])({
      auToken: getState().userToken.tokenData.auToken,
      request: jsonQuery,
      callBack: udat => dispatch(fetchDataSucces({
        dataSet,
        ...udat
      }))
    });
  };
}; // cart Actions

const addToCart = item => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
  payload: item
});
const removeFromCart = item => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["REMOVE_FROM_CART"],
  payload: item
});
const clearCart = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CART"]
});
const addCartItemQuantity = quant => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_CART_ITEM_QUANTITY"],
  payload: quant
});

/***/ }),

/***/ "./src/redux/reducers/cartList.js":
/*!****************************************!*\
  !*** ./src/redux/reducers/cartList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");



const initialState = () => ({
  itemCount: 0,
  amount: 0,
  items: []
});

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState(), action) => Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART"]:
      {
        const {
          price,
          quantity
        } = action.payload;
        const count = draft.items.length;
        draft.itemCount = draft.itemCount + 1;
        draft.amount = draft.amount + action.payload.quantity * action.payload.price;
        draft.items.push({ ...action.payload,
          amount: quantity * price,
          index: count
        });
        break;
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_CART"]:
      {
        draft.itemCount--;
        draft.amount -= draft.items[action.payload].amount;
        draft.items.splice(action.payload, 1);
        break;
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_CART_ITEM_QUANTITY"]:
      {
        const {
          index,
          quantity
        } = action.payload;
        draft.amount = draft.amount - draft.items[index].amount;
        draft.items[index].quantity += quantity;
        if (draft.items[index].quantity < 0) draft.items[index].quantity = 0;
        draft.items[index].amount = draft.items[index].price * draft.items[index].quantity;
        draft.amount = draft.amount + draft.items[index].amount;
        break;
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLEAR_CART"]:
      {
        draft = initialState();
        break;
      }

    default:
      return draft;
  }

  return draft;
}));

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _uiState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiState */ "./src/redux/reducers/uiState.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./src/redux/reducers/theme.js");
/* harmony import */ var _userToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userToken */ "./src/redux/reducers/userToken.js");
/* harmony import */ var _jsonData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsonData */ "./src/redux/reducers/jsonData.js");
/* harmony import */ var _cartList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cartList */ "./src/redux/reducers/cartList.js");
/* harmony import */ var _navi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navi */ "./src/redux/reducers/navi.jsx");







/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  naviRouter: _navi__WEBPACK_IMPORTED_MODULE_6__["default"],
  uiState: _uiState__WEBPACK_IMPORTED_MODULE_1__["default"],
  theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
  userToken: _userToken__WEBPACK_IMPORTED_MODULE_3__["default"],
  jsonData: _jsonData__WEBPACK_IMPORTED_MODULE_4__["default"],
  cartList: _cartList__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/redux/reducers/jsonData.js":
/*!****************************************!*\
  !*** ./src/redux/reducers/jsonData.js ***!
  \****************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actionTypes */ "./src/redux/actionTypes.js");


const initialState = () => {
  return {
    isFetching: false,
    foodsAll: {
      dataSet: "",
      OK: false,
      error: false,
      message: 'empty',
      Sql: "",
      count: 0,
      data: []
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState(), action) => Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_DATA_REQUEST"]:
      {
        draft.isFetching = true;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_DATA_SUCCESS"]:
      {
        draft.isFetching = false;
        draft[action.payload.dataSet] = action.payload;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_DATA_ERROR"]:
      {
        draft.isFetching = false;
        break;
      }

    default:
      return draft;
  }
}));

/***/ }),

/***/ "./src/redux/reducers/navi.jsx":
/*!*************************************!*\
  !*** ./src/redux/reducers/navi.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var hookrouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hookrouter */ "./node_modules/hookrouter/dist/index.js");
/* harmony import */ var hookrouter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hookrouter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");




const initialState = () => ({
  url: "/home",
  history: []
});

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState(), action) => Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["GO_HOME"]:
      {
        draft.url = '/home';
        draft.history.push(draft.url);
        Object(hookrouter__WEBPACK_IMPORTED_MODULE_1__["navigate"])('/home');
        break;
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__["NAVIGATE_TO_URL"]:
      {
        draft.url = action.payload;
        Object(hookrouter__WEBPACK_IMPORTED_MODULE_1__["navigate"])(draft.url);
        draft.history.push(draft.url);
        break;
      }

    default:
      return draft;
  }

  return draft;
}));

/***/ }),

/***/ "./src/redux/reducers/theme.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/theme.js ***!
  \*************************************/
/*! exports provided: getColors, getButtonColors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColors", function() { return getColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonColors", function() { return getButtonColors; });
//import { green } from "ansi-colors";
const initialState = {
  color: {
    primaryDark: '#303F9F',
    primary: '#3F51B5',
    primaryLight: '#C5CAE9',
    textIcon: '#FFFFFF',
    secondary: '#03DAC5',
    primaryText: '#212121',
    secondaryText: '#FFFFFF',
    devider: '#BDBDBD',
    accent: '#FF5722',
    background: '#F9F8F9',
    surface: '#F1F8E9',
    button: {
      green: '#009688',
      blue: '#0288D1',
      red: '#FF5722'
    }
  },
  fonts: {},
  sizes: {}
};
const getColors = state => state.theme.color;
const getButtonColors = state => state.theme.color.button;
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    // case OPEN_SETTINGS_DIALOG:{
    // 	return { ...state, settingsDialog:true };
    // }	
    // case CLOSE_SETTINGS_DIALOG:{
    // 	return { ...state, settingsDialog:false };
    // }	
    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/reducers/uiState.js":
/*!***************************************!*\
  !*** ./src/redux/reducers/uiState.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actionTypes */ "./src/redux/actionTypes.js");


const initialState = {
  settingsDialogState: false,
  clearWorldAlertState: false,
  aboutDialogState: false,
  cartBoxIsOpen: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["OPEN_SETTINGS_DIALOG"]:
      {
        draft.settingsDialogState = true;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLOSE_SETTINGS_DIALOG"]:
      {
        draft.settingsDialogState = false;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["OPEN_ABOUT_DIALOG"]:
      {
        draft.aboutDialogState = true;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLOSE_ABOUT_DIALOG"]:
      {
        draft.aboutDialogState = false;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["OPEN_CLEAR_ALERT"]:
      {
        draft.clearWorldAlertState = true;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLOSE_CLEAR_ALERT"]:
      {
        draft.clearWorldAlertState = false;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["OPEN_CART_BOX"]:
      {
        draft.cartBoxIsOpen = true;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CLOSE_CART_BOX"]:
      {
        draft.cartBoxIsOpen = false;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_CART_BOX"]:
      {
        draft.cartBoxIsOpen = !draft.cartBoxIsOpen;
        break;
      }

    default:
      return draft;
  }

  return draft;
}));

/***/ }),

/***/ "./src/redux/reducers/userToken.js":
/*!*****************************************!*\
  !*** ./src/redux/reducers/userToken.js ***!
  \*****************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actionTypes */ "./src/redux/actionTypes.js");


const initialState = () => {
  return {
    isFetching: false,
    isValid: false,
    hasError: true,
    tokenData: {
      timeStump: undefined,
      id: undefined,
      name: "",
      email: "",
      first_name: "",
      second_name: "",
      role: "",
      jti: "",
      auToken: undefined
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState(), action) => Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  // console.log(action);
  switch (action.type) {
    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_TOKEN_REQUEST"]:
      {
        draft.isFetching = true;
        draft.isValid = false;
        draft.hasError = true; //console.log(action.type);

        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_TOKEN_SUCCESS"]:
      {
        draft.isFetching = false;
        draft.isValid = true;
        draft.hasError = false;
        draft.tokenData = action.payload;
        break;
      }

    case redux_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_TOKEN_ERROR"]:
      {
        draft.isFetching = false;
        draft.hasError = true;
        draft.isValid = false;
        break;
      }

    default:
      return draft;
  }
}));

/***/ }),

/***/ "./src/redux/selectors.js":
/*!********************************!*\
  !*** ./src/redux/selectors.js ***!
  \********************************/
/*! exports provided: getSettingsDialogState, getAboutDialogState, getUserToken, getAuToken, getJsonData, getDataSet, getFoodsAll, getCartDataSet, getCartAmount, getCartItemCount, getCartBoxState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingsDialogState", function() { return getSettingsDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAboutDialogState", function() { return getAboutDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserToken", function() { return getUserToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuToken", function() { return getAuToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJsonData", function() { return getJsonData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSet", function() { return getDataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFoodsAll", function() { return getFoodsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartDataSet", function() { return getCartDataSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartAmount", function() { return getCartAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartItemCount", function() { return getCartItemCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartBoxState", function() { return getCartBoxState; });
// UI state selectors
const getSettingsDialogState = state => state.uiState.settingsDialogState;
const getAboutDialogState = state => state.uiState.aboutDialogState; // userToken Selectos

const getUserToken = state => state.userToken;
const getAuToken = state => state.tokenData.auToken; // data Selectors

const getJsonData = state => state.jsonData;
const getDataSet = state => state.jsonData.Zelka;
const getFoodsAll = state => state.jsonData.foodsAll; // cartDataSet

const getCartDataSet = state => state.cartList;
const getCartAmount = state => state.cartList.amount;
const getCartItemCount = state => state.cartList.itemCount;
const getCartBoxState = state => state.uiState.cartBoxIsOpen;

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/redux/reducers/index.js");




const composeEnhancers = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])({// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"],
/* preloadedState, */
composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]) // other store enhancers 
));
/* harmony default export */ __webpack_exports__["default"] = (store); // import thunkMiddleware from 'redux-thunk'
// import { applyMiddleware, createStore, compose } from "redux";
// import combineReducers from "./reducers";
// const preloadedState  = {};
// const store = createStore(
// 	combineReducers,
// 	preloadedState,
// 	compose(
//   	applyMiddleware(
//     	thunkMiddleware, // lets us dispatch() functions
//    // 	loggerMiddleware // neat middleware that logs actions
// 		),
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	)	
// );

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 1:
/*!***************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.jsx ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/riste/react/rp-food-online/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/riste/react/rp-food-online/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/riste/react/rp-food-online/src/index.jsx */"./src/index.jsx");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map