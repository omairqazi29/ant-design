webpackJsonp([158,202],{

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "通过鼠标或键盘输入内容，是最基础的表单域的包装。"], ["h2", "何时使用"], ["ul", ["li", ["p", "需要用户输入表单域内容时。"]], ["li", ["p", "提供组合型输入框，带搜索的输入框，还可以进行大小选择。"]]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "输入框",
	    "type": "Data Entry",
	    "title": "Input",
	    "filename": "components/input/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Input"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "可选值"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "type"], ["td", "【必须】声明 input 类型，同原生 input 标签的 type 属性。另外提供 ", ["code", "type=\"textarea\""], "。"], ["td", "string"], ["td"], ["td", "'text'"]], ["tr", ["td", "id"], ["td", "id"], ["td", "number 或 string"], ["td"], ["td"]], ["tr", ["td", "value"], ["td", "value 值"], ["td", "any"], ["td"], ["td"]], ["tr", ["td", "defaultValue"], ["td", "设置初始默认值"], ["td", "any"], ["td"], ["td"]], ["tr", ["td", "size"], ["td", "控件大小，默认值为 default 。注：标准表单内的输入框大小限制为 large。"], ["td", "string"], ["td", "{'large','default','small'}"], ["td", "'default'"]], ["tr", ["td", "disabled"], ["td", "是否禁用状态，默认为 false"], ["td", "bool"], ["td"], ["td", "false"]], ["tr", ["td", "addonBefore"], ["td", "带标签的 input，设置前置标签"], ["td", "node"], ["td"], ["td"]], ["tr", ["td", "addonAfter"], ["td", "带标签的 input，设置后置标签"], ["td", "node"], ["td"], ["td"]], ["tr", ["td", "onPressEnter"], ["td", "按下回车的回调"], ["td", "function(e)"], ["td"], ["td"]], ["tr", ["td", "autosize"], ["td", "自适应内容高度，只对 ", ["code", "type=\"textarea\""], " 有效"], ["td", "bool or object"], ["td", ["code", "true"], " or ", ["code", "{ minRows: 2, maxRows: 6 }"]], ["td", "false"]]]], ["blockquote", ["p", "如果 ", ["code", "Input"], " 在 ", ["code", "Form.Item"], " 内，并且 ", ["code", "Form.Item"], " 设置了 ", ["code", "id"], " 和 ", ["code", "options"], " 属性，则 ", ["code", "value"], " ", ["code", "defaultValue"], " 和 ", ["code", "id"], " 属性会被自动设置。"]], ["h4", "Input.Group"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "可选值"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "size"], ["td", ["code", "Input.Group"], " 中所有的 ", ["code", "Input"], " 的大小"], ["td", "string"], ["td", "{'large','default','small'}"], ["td", "'default'"]]]], ["pre", {
	    "lang": "html",
	    "highlighted": "&lt;Input.Group className={string}>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Input</span> <span class=\"token punctuation\" >/></span></span>\n&lt;/Input.Group>"
	  }, ["code", "<Input.Group className={string}>\n  <Input />\n  <Input />\n</Input.Group>"]]]
	};

/***/ }

});