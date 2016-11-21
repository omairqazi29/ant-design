webpackJsonp([176,202],{

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "级联选择框。"], ["h2", "何时使用"], ["ul", ["li", ["p", "需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。"]], ["li", ["p", "从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。"]], ["li", ["p", "比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。"]]]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Entry",
	    "title": "Cascader",
	    "subtitle": "级联选择",
	    "filename": "components/cascader/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Cascader</span> <span class=\"token attr-name\" >options</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span>{options}</span> <span class=\"token attr-name\" >onChange</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span>{onChange}</span> <span class=\"token punctuation\" >/></span></span>"
	  }, ["code", "<Cascader options={options} onChange={onChange} />"]], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "options"], ["td", "可选项数据源"], ["td", "Object"], ["td", "-"]], ["tr", ["td", "defaultValue"], ["td", "默认的选中项"], ["td", "Array"], ["td", "[]"]], ["tr", ["td", "value"], ["td", "指定选中项"], ["td", "Array"], ["td", "-"]], ["tr", ["td", "onChange"], ["td", "选择完成后的回调"], ["td", ["code", "function(value, selectedOptions)"]], ["td", "-"]], ["tr", ["td", "displayRender"], ["td", "选择后展示的渲染函数"], ["td", ["code", "function(label, selectedOptions)"]], ["td", ["code", "label => label.join(' / ')"]]], ["tr", ["td", "style"], ["td", "自定义样式"], ["td", "String"], ["td", "-"]], ["tr", ["td", "className"], ["td", "自定义类名"], ["td", "String"], ["td", "-"]], ["tr", ["td", "popupClassName"], ["td", "自定义浮层类名"], ["td", "String"], ["td", "-"]], ["tr", ["td", "popupPlacement"], ["td", "浮层预设位置：", ["code", "bottomLeft"], " ", ["code", "bottomRight"], " ", ["code", "topLeft"], " ", ["code", "topRight"]], ["td", "Enum"], ["td", ["code", "bottomLeft"]]], ["tr", ["td", "placeholder"], ["td", "输入框占位文本"], ["td", "String"], ["td", "'请选择'"]], ["tr", ["td", "size"], ["td", "输入框大小，可选 ", ["code", "large"], " ", ["code", "default"], " ", ["code", "small"]], ["td", "String"], ["td", ["code", "default"]]], ["tr", ["td", "disabled"], ["td", "禁用"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "allowClear"], ["td", "是否支持清除"], ["td", "Boolean"], ["td", "true"]], ["tr", ["td", "expandTrigger"], ["td", "次级菜单的展开方式，可选 'click' 和 'hover'"], ["td", "String"], ["td", "'click'"]], ["tr", ["td", "changeOnSelect"], ["td", "当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "showSearch"], ["td", "在选择框中显示搜索框"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "notFoundContent"], ["td", "当下拉列表为空时显示的内容"], ["td", "String"], ["td", "'Not Found'"]], ["tr", ["td", "getPopupContainer"], ["td", "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。", ["a", {
	    "title": null,
	    "href": "http://codepen.io/anon/pen/xVBOVQ?editors=001"
	  }, "示例"]], ["td", "Function(triggerNode)"], ["td", "() => document.body"]]]], ["p", ["code", "showSearch"], " 为对象时，其中的字段："], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "filter"], ["td", "接收 ", ["code", "inputValue"], " ", ["code", "path"], " 两个参数，当 ", ["code", "path"], " 符合筛选条件时，应返回 true，反之则返回 false。"], ["td", ["code", "function(inputValue, path): boolean"]], ["td"]], ["tr", ["td", "render"], ["td", "用于渲染 filter 后的选项"], ["td", ["code", "function(inputValue, path): React.ReactNode"]], ["td"]], ["tr", ["td", "sort"], ["td", "用于排序 filter 后的选项"], ["td", ["code", "function(a, b, inputValue)"]], ["td"]], ["tr", ["td", "matchInputWidth"], ["td", "搜索结果列表是否与输入框同宽"], ["td", "boolean"], ["td"]]]], ["style", "\n.ant-cascader-picker {\n  width: 220px;\n}\n"]]
	};

/***/ }

});