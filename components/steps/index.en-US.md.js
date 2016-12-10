webpackJsonp([129,204],{

/***/ 911:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", ["code", "Steps"], " is a navigation bar that guides users through the steps of a task. "], ["h2", "When To Use"], ["p", "When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier."]],
	  "meta": {
	    "category": "Components",
	    "type": "Navigation",
	    "cols": 1,
	    "title": "Steps",
	    "filename": "components/steps/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Steps</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Step</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>first</span> <span class=\"token attr-name\">step\"</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Step</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>second</span> <span class=\"token attr-name\">step\"</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Step</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>third</span> <span class=\"token attr-name\">step\"</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Steps</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Steps>\n  <Step title=\"first step\" />\n  <Step title=\"second step\" />\n  <Step title=\"third step\" />\n</Steps>"]], ["h3", "Steps"], ["p", "The whole of the step bar."], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "current"], ["td", "to set the current step, counting from 0. You can overwrite this state by using ", ["code", "status"], " of ", ["code", "Step"]], ["td", "Number"], ["td", "0"]], ["tr", ["td", "status"], ["td", "to specify the status of current step, can be set to one of the following values: ", ["code", "wait"], " ", ["code", "process"], " ", ["code", "finish"], " ", ["code", "error"]], ["td", "String"], ["td", ["code", "process"]]], ["tr", ["td", "size"], ["td", "to specify the size of the step bar, ", ["code", "default"], " and ", ["code", "small"], " are currently supported"], ["td", "String"], ["td", ["code", "default"]]], ["tr", ["td", "direction"], ["td", "to specify the direction of the step bar, ", ["code", "horizontal"], " and ", ["code", "vertical"], " are currently supported"], ["td", "String"], ["td", "horizontal"]]]], ["h3", "Steps.Step"], ["p", "A single step in the step bar."], ["table", ["thead", ["tr", ["th", "Property"], ["th", "Description"], ["th", "Type"], ["th", "Default"]]], ["tbody", ["tr", ["td", "status"], ["td", "to specify the status. It will be automatically set by ", ["code", "current"], " of ", ["code", "Steps"], " if not configured. Optional values are: ", ["code", "wait"], " ", ["code", "process"], " ", ["code", "finish"], " ", ["code", "error"]], ["td", "String"], ["td", "wait"]], ["tr", ["td", "title"], ["td", "title of the step"], ["td", "React.ReactNode"], ["td", "-"]], ["tr", ["td", "description"], ["td", "detail of the step, optional property"], ["td", "React.ReactNode"], ["td", "-"]], ["tr", ["td", "icon"], ["td", "icon of the step, optional property"], ["td", "string or React.ReactNode"], ["td", "-"]]]]]
	};

/***/ }

});