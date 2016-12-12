webpackJsonp([161,204],{

/***/ 1504:
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
	    "className": "bisheng-toc-h2",
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Input"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "type"], ["td", "The type of input, ", ["code", "text"], " or ", ["code", "textarea"]], ["td", "string"], ["td", ["code", "text"]]], ["tr", ["td", "id"], ["td", "The ID for input"], ["td", "string"], ["td"]], ["tr", ["td", "value"], ["td", "The input content value"], ["td", "string"], ["td"]], ["tr", ["td", "defaultValue"], ["td", "The initial input content"], ["td", "string"], ["td"]], ["tr", ["td", "size"], ["td", "The size of the input box. Note: in the context of a form, the ", ["code", "large"], " size is used. Available: ", ["code", "large"], " ", ["code", "default"], " ", ["code", "small"]], ["td", "string"], ["td", ["code", "default"]]], ["tr", ["td", "disabled"], ["td", "Tell if the input is disabled."], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "addonBefore"], ["td", "The label text displayed before (on the left side of) the input field."], ["td", "React.Node"], ["td"]], ["tr", ["td", "addonAfter"], ["td", "The label text displayed after (on the right side of) the input field."], ["td", "React.Node"], ["td"]], ["tr", ["td", "onPressEnter"], ["td", "The callback function that is triggered when pressing Enter key."], ["td", "function(e)"], ["td"]], ["tr", ["td", "autosize"], ["td", "Height autosize feature, available when type=\"textarea\", can be set to ", ["code", "true|false"], " or a object ", ["code", "{ minRows: 2, maxRows: 6 }"]], ["td", "boolean or object"], ["td", "false"]]]], ["blockquote", ["p", "When ", ["code", "Input"], " is used in a ", ["code", "Form.Item"], " context, if the ", ["code", "Form.Item"], " has the ", ["code", "id"], " and ", ["code", "options"], " props defined\nthen ", ["code", "value"], ", ", ["code", "defaultValue"], ", and ", ["code", "id"], " props are automatically set."]], ["h4", "Input.Search"], ["p", ["code", "Added in 2.5.0"]], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "onSearch"], ["td", "The callback function that is triggered when you click on the search-icon or press Enter key."], ["td", "function(value)"], ["td"]]]], ["p", "Support all props of ", ["code", "Input"], "."], ["h4", "Input.Group"], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "size"], ["td", "The size of ", ["code", "Input.Group"], " specifies the size of the included ", ["code", "Input"], " fields. Available: ", ["code", "large"], " ", ["code", "default"], " ", ["code", "small"]], ["td", "string"], ["td", ["code", "default"]]]]], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input.Group</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Input.Group</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Input.Group>\n  <Input />\n  <Input />\n</Input.Group>"]]]
	};

/***/ }

});