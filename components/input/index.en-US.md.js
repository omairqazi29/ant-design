webpackJsonp([159,202],{

/***/ 1511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "A basic widget for getting the user input is a text field.\nKeyboard and mouse can be used for providing or changing data."], ["h2", "When To Use"], ["ul", ["li", ["p", "A user input in a form field is needed."]], ["li", ["p", "A search input is required."]]]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "title": "Input",
	    "filename": "components/input/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Input"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Available Values"], ["th", "Default"]]], ["tbody", ["tr", ["td", "type"], ["td", "The type of input. For a multi-line input, the 'textarea' value can be used."], ["td", "string"], ["td", "'text' or 'textarea'"], ["td", "'text'"]], ["tr", ["td", "id"], ["td", "The identifier."], ["td", "number or string"], ["td"], ["td"]], ["tr", ["td", "value"], ["td", "The content value."], ["td", "any"], ["td"], ["td"]], ["tr", ["td", "defaultValue"], ["td", "The initial value."], ["td", "any"], ["td"], ["td"]], ["tr", ["td", "size"], ["td", "The size of the input box. The implicit value is 'default'. Note: in the context of a form, the 'large' size is used."], ["td", "string"], ["td", "{'large','default','small'}"], ["td", "'default'"]], ["tr", ["td", "disabled"], ["td", "Tell if the input is disabled."], ["td", "bool"], ["td"], ["td", "false"]], ["tr", ["td", "addonBefore"], ["td", "The label text displayed before (on the left side of) the input field."], ["td", "node"], ["td"], ["td"]], ["tr", ["td", "addonAfter"], ["td", "The label text displayed after (on the right side of) the input field."], ["td", "node"], ["td"], ["td"]], ["tr", ["td", "onPressEnter"], ["td", "The callback function that is triggered when pressing Enter key."], ["td", "function(e)"], ["td"], ["td"]], ["tr", ["td", "autosize"], ["td", "Height autosize feature, available when type=\"textarea\"."], ["td", "bool or object"], ["td", ["code", "true"], " or ", ["code", "{ minRows: 2, maxRows: 6 }"]], ["td", "false"]]]], ["blockquote", ["p", "When ", ["code", "Input"], " is used in a ", ["code", "Form.Item"], " context, if the ", ["code", "Form.Item"], " has the ", ["code", "id"], " and ", ["code", "options"], " props defined\nthen ", ["code", "value"], ", ", ["code", "defaultValue"], ", and ", ["code", "id"], " props are automatically set."]], ["h4", "Input.Search"], ["p", ["code", "Added in 2.5.0"]], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Available Values"], ["th", "Default"]]], ["tbody", ["tr", ["td", "onSearch"], ["td", "The callback function that is triggered when you click on the search-icon or press Enter key."], ["td", "function(value)"], ["td"], ["td"]]]], ["p", "Support all props of ", ["code", "Input"], "."], ["h4", "Input.Group"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Available Values"], ["th", "Default"]]], ["tbody", ["tr", ["td", "size"], ["td", "The size of ", ["code", "Input.Group"], " specifies the size of the included ", ["code", "Input"], " fields."], ["td", "string"], ["td", "{'large','default','small'}"], ["td", "'default'"]]]], ["pre", {
	    "lang": "html",
	    "highlighted": "&lt;Input.Group className={string}>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token punctuation\" >/></span></span>\n&lt;/Input.Group>"
	  }, ["code", "<Input.Group className={string}>\n  <Input />\n  <Input />\n</Input.Group>"]]]
	};

/***/ }

});