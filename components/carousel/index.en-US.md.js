webpackJsonp([179,202],{

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "A carousel component. Scales with its container."], ["h2", "When To Use"], ["ul", ["li", ["p", "When there is a group of content on the same level."]], ["li", ["p", "When there is insufficient content space, it can be used to save space in the form of a resolving door."]], ["li", ["p", "Commonly used in a carousel for a group of pictures/cards."]]]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Display",
	    "title": "Carousel",
	    "filename": "components/carousel/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "effect"], ["td", "Animation effect, either ", ["code", "scrollx"], " or ", ["code", "fade"]], ["td", "String"], ["td", "scrollx"]], ["tr", ["td", "dots"], ["td", "Should we show the dots at the bottom of the gallery"], ["td", "Boolean"], ["td", "true"]], ["tr", ["td", "vertical"], ["td", "Whether to use a vertical display"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "autoplay"], ["td", "Whether to scroll automatically"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "easing"], ["td", "Transition name"], ["td", "String"], ["td", "linear"]], ["tr", ["td", "beforeChange"], ["td", "Callback function called before the current index changes"], ["td", "function(from, to)"]], ["tr", ["td", "afterChange"], ["td", "Callback function called after the current index changes"], ["td", "function(current)"]]]], ["p", "For more info on the parameters, refer to the ", ["a", {
	    "title": null,
	    "href": "https://github.com/akiran/react-slick"
	  }, "https://github.com/akiran/react-slick"]], ["style", "\n.ant-carousel .slick-slide {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  color: #fff;\n  overflow: hidden;\n}\n"]]
	};

/***/ }

});