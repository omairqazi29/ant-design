webpackJsonp([137,209],{

/***/ 900:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "类似 Select2 的选择器。"], ["h2", "何时使用"], ["ul", ["li", ["p", "弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。"]], ["li", ["p", "当选项少时（少于 5 项），建议直接将选项平铺，使用 ", ["a", {
	    "title": null,
	    "href": "/components/radio/"
	  }, "Radio"], " 是更好的选择。"]]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "选择器",
	    "type": "Data Entry",
	    "title": "Select",
	    "filename": "components/select/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lucy<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>lucy<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Select>\n  <Option value=\"lucy\">lucy</Option>\n</Select>"]], ["h3", "Select props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "value"], ["td", "指定当前选中的条目"], ["td", "string/Array", ["string"]], ["td", "-"]], ["tr", ["td", "defaultValue"], ["td", "指定默认选中的条目"], ["td", "string/Array", ["string"]], ["td", "-"]], ["tr", ["td", "multiple"], ["td", "支持多选"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "allowClear"], ["td", "支持清除, 单选模式有效"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "filterOption"], ["td", "是否根据输入项进行筛选。当其为一个函数时，会接收 ", ["code", "inputValue"], " ", ["code", "option"], " 两个参数，当 ", ["code", "option"], " 符合筛选条件时，应返回 ", ["code", "true"], "，反之则返回 ", ["code", "false"], "。"], ["td", "boolean or function(inputValue, option)"], ["td", "true"]], ["tr", ["td", "tags"], ["td", "可以把随意输入的条目作为 tag，输入项不需要与下拉选项匹配"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "onSelect"], ["td", "被选中时调用，参数为选中项的 value 值"], ["td", "function(value, option)"], ["td", "-"]], ["tr", ["td", "onDeselect"], ["td", "取消选中时调用，参数为选中项的 option value 值，仅在 multiple 或 tags 模式下生效"], ["td", "function(value)"], ["td", "-"]], ["tr", ["td", "onChange"], ["td", "选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数"], ["td", "function(value)"], ["td", "-"]], ["tr", ["td", "onSearch"], ["td", "文本框值变化时回调"], ["td", "function(value: String)"], ["td"]], ["tr", ["td", "onBlur"], ["td", "失去焦点的时回调"], ["td", "function"], ["td", "-"]], ["tr", ["td", "onFocus"], ["td", "获得焦点时回调"], ["td", "function"], ["td", "-"]], ["tr", ["td", "placeholder"], ["td", "选择框默认文字"], ["td", "string"], ["td", "-"]], ["tr", ["td", "notFoundContent"], ["td", "当下拉列表为空时显示的内容"], ["td", "string"], ["td", "'Not Found'"]], ["tr", ["td", "dropdownMatchSelectWidth"], ["td", "下拉菜单和选择器同宽"], ["td", "boolean"], ["td", "true"]], ["tr", ["td", "optionFilterProp"], ["td", "搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索"], ["td", "string"], ["td", "value"]], ["tr", ["td", "optionLabelProp"], ["td", "回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 ", ["code", "value"], "。"], ["td", "string"], ["td", ["code", "children"], " （combobox 模式下为 ", ["code", "value"], "）"]], ["tr", ["td", "combobox"], ["td", "输入框自动提示模式"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "size"], ["td", "选择框大小，可选 ", ["code", "large"], " ", ["code", "small"]], ["td", "String"], ["td", "default"]], ["tr", ["td", "showSearch"], ["td", "在选择框中显示搜索框"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "disabled"], ["td", "是否禁用"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "defaultActiveFirstOption"], ["td", "是否默认高亮第一个选项。"], ["td", "boolean"], ["td", "true"]], ["tr", ["td", "dropdownStyle"], ["td", "下拉菜单的 style 属性"], ["td", "object"], ["td", "-"]], ["tr", ["td", "dropdownClassName"], ["td", "下拉菜单的 className 属性"], ["td", "string"], ["td", "-"]], ["tr", ["td", "getPopupContainer"], ["td", "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。", ["a", {
	    "title": null,
	    "href": "http://codepen.io/anon/pen/xVBOVQ?editors=001"
	  }, "示例"]], ["td", "Function(triggerNode)"], ["td", "() => document.body"]], ["tr", ["td", "labelInValue"], ["td", "是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 ", ["code", "string"], " 变为 ", ["code", "{key: String, label: React.Node}"], " 的格式"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "tokenSeparators"], ["td", "在 tags 和 multiple 模式下自动分词的分隔符"], ["td", "string[]?"], ["td"]]]], ["h3", "Option props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "disabled"], ["td", "是否禁用"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "key"], ["td", "如果 react 需要你设置此项，此项值与 value 的值相同，然后可以省略 value 设置"], ["td", "String"], ["td"]], ["tr", ["td", "value"], ["td", "默认根据此属性值进行筛选"], ["td", "String"], ["td", "-"]], ["tr", ["td", "title"], ["td", "选中该 Option 后，Select 的 title"], ["td", "String"], ["td", "-"]]]], ["h3", "OptGroup props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "label"], ["td", "组名"], ["td", "String/React.Element"], ["td", "无"]], ["tr", ["td", "key"], ["td"], ["td", "String"], ["td", "-"]]]]]
	};

/***/ }

});