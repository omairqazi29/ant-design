webpackJsonp([183,200],{

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "To trigger an operation."], ["h2", "When To Use"], ["p", "A button means an operation(or a series of operations). Click a button will trigger corresponding business logic."]],
	  "meta": {
	    "category": "Components",
	    "type": "General",
	    "title": "Button",
	    "filename": "components/button/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["p", "To get a customized button, just set ", ["code", "type"], "/", ["code", "shape"], "/", ["code", "size"], "/", ["code", "loading"], "/", ["code", "disabled"], "."], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "type"], ["td", "can be set to ", ["code", "primary"], " ", ["code", "ghost"], " ", ["code", "dashed"], " or omitted"], ["td", "string"], ["td", "-"]], ["tr", ["td", "htmlType"], ["td", "to set the original ", ["code", "type"], " of ", ["code", "button"], ", see: ", ["a", {
	    "title": null,
	    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type"
	  }, "MDN"]], ["td", "string"], ["td", ["code", "button"]]], ["tr", ["td", "icon"], ["td", "set the icon of button, see: Icon component"], ["td", "string"], ["td", "-"]], ["tr", ["td", "shape"], ["td", "can be set to ", ["code", "circle"], " ", ["code", "circle-outline"], " or omitted"], ["td", "string"], ["td", "-"]], ["tr", ["td", "size"], ["td", "can be set to ", ["code", "small"], " ", ["code", "large"], " or omitted"], ["td", "string"], ["td", ["code", "default"]]], ["tr", ["td", "loading"], ["td", "to set the loading status of button"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "onClick"], ["td", "set the handler to handle ", ["code", "click"], " event"], ["td", "function"], ["td", "-"]]]], ["p", ["code", "<Button>Hello world!</Button>"], " will be rendered into ", ["code", "<button>Hello world!</button>"], ", and all the properties which are not listed above will be transferred to the ", ["code", "<button>"], " tag."], ["style", "\n[id^=\"components-button-demo-\"] .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n"]]
	};

/***/ }

});