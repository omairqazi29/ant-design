webpackJsonp([129,209],{

/***/ 1653:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "开关选择器。"], ["h2", "何时使用"], ["ul", ["li", ["p", "需要表示开关状态/两种状态之间的切换时；"]], ["li", ["p", "和 ", ["code", "checkbox"], "的区别是，切换 ", ["code", "switch"], " 会直接触发状态改变，而 ", ["code", "checkbox"], " 一般用于状态标记，需要和提交操作配合。"]]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "开关",
	    "type": "Data Entry",
	    "title": "Switch",
	    "filename": "components/switch/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Switch"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "checked"], ["td", "指定当前是否选中"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "defaultChecked"], ["td", "初始是否选中"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "onChange"], ["td", "变化时回调函数"], ["td", "Function(checked:Boolean)"], ["td"]], ["tr", ["td", "checkedChildren"], ["td", "选中时的内容"], ["td", "React Node"], ["td"]], ["tr", ["td", "unCheckedChildren"], ["td", "非选中时的内容"], ["td", "React Node"], ["td"]], ["tr", ["td", "size"], ["td", "开关大小，可选值：", ["code", "default"], " ", ["code", "small"]], ["td", "String"], ["td", "default"]]]]]
	};

/***/ }

});