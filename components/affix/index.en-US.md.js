webpackJsonp([201,204],{

/***/ 1350:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "Make an element sticky to viewport."], ["h2", "When To Use"], ["p", "When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions."], ["p", "Please note that Affix should not cover other content on the page, especially when the size of the viewport is small."]],
	  "meta": {
	    "category": "Components",
	    "type": "Navigation",
	    "title": "Affix",
	    "filename": "components/affix/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "offsetTop"], ["td", "Pixels to offset from top when calculating position of scroll"], ["td", "Number"], ["td", "0"]], ["tr", ["td", "offsetBottom"], ["td", "Pixels to offset from bottom when calculating position of scroll"], ["td", "Number"], ["td", "-"]], ["tr", ["td", "onChange"], ["td", "Callback when affix state is changed"], ["td", "Function(affixed)"], ["td", "-"]]]], ["p", ["strong", "Note:"], " Children of ", ["code", "Affix"], " can not be ", ["code", "position: absolute"], ", but you can set ", ["code", "Affix"], " as ", ["code", "position: absolute"], ":"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Affix</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> position<span class=\"token punctuation\">:</span> <span class=\"token string\">'absolute'</span><span class=\"token punctuation\">,</span> top<span class=\"token punctuation\">:</span> y<span class=\"token punctuation\">,</span> left<span class=\"token punctuation\">:</span> x<span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token operator\">...</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Affix</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Affix style={{ position: 'absolute', top: y, left: x}}>\n  ...\n</Affix>"]]]
	};

/***/ }

});