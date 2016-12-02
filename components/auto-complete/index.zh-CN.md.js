webpackJsonp([192,202],{

/***/ 1375:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "输入框自动完成功能。"], ["h2", "何时使用"], ["p", "需要自动完成时。"]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "自动完成",
	    "type": "Data Entry",
	    "cols": 1,
	    "title": "AutoComplete",
	    "filename": "components/auto-complete/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >const</span> dataSource <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'12345'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'23456'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'34567'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>AutoComplete</span> <span class=\"token attr-name\" >dataSource</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>dataSource<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "const dataSource = ['12345', '23456', '34567'];\n<AutoComplete dataSource={dataSource} />"]], ["p", "因为 ", ["code", "AutoComplete"], " 是基于 ", ["code", "Select"], " 封装的，所以除了以下 API 外，", ["code", "AutoComplete"], " 跟 ", ["code", "Select"], " 拥有一样的 API。"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "dataSource"], ["td", "自动完成的数据源"], ["td", "Array"], ["td"]], ["tr", ["td", "value"], ["td", "指定当前选中的条目"], ["td", "String/Array", ["string"], "/{key: String, label: React.Node}/Array<{key, label}>"], ["td", "无"]], ["tr", ["td", "defaultValue"], ["td", "指定默认选中的条目"], ["td", "String/Array", ["string"], "/{key: String, label: React.Node}/Array<{key, label}>"], ["td", "无"]], ["tr", ["td", "allowClear"], ["td", "支持清除, 单选模式有效"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "onChange"], ["td", "选中 option，或 input 的 value 变化时，调用此函数"], ["td", "function(value)"], ["td", "无"]], ["tr", ["td", "onSelect"], ["td", "被选中时调用，参数为选中项的 value 值"], ["td", "function(value, option)"], ["td", "无"]], ["tr", ["td", "disabled"], ["td", "是否禁用"], ["td", "boolean"], ["td", "false"]]]]]
	};

/***/ }

});