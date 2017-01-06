webpackJsonp([115,209],{

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "双栏穿梭选择框。"], ["h2", "何时使用"], ["p", "用直观的方式在两栏中移动元素，完成选择行为。"], ["p", "选择一个或以上的选项后，点击对应的方向键，可以把选中的选项移动到另一栏。\n其中，左边一栏为 ", ["code", "source"], "，右边一栏为 ", ["code", "target"], "，API 的设计也反应了这两个概念。"]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "穿梭框",
	    "type": "Data Entry",
	    "cols": 1,
	    "title": "Transfer",
	    "filename": "components/transfer/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#注意"
	  }, "注意"]]],
	  "api": ["section", ["h2", "API"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "dataSource"], ["td", "数据源，其中的数据将会被渲染到左边一栏中，", ["code", "targetKeys"], " 中指定的除外。"], ["td", "Array"], ["td", "[]"]], ["tr", ["td", "render"], ["td", "每行数据渲染函数，该函数的入参为 ", ["code", "dataSource"], " 中的项，返回值为 React element"], ["td", "Function(record)"], ["td"]], ["tr", ["td", "targetKeys"], ["td", "显示在右侧框数据的key集合"], ["td", "string[]"], ["td", "[]"]], ["tr", ["td", "selectedKeys"], ["td", "设置哪些项应该被选中"], ["td", "string[]"], ["td", "[]"]], ["tr", ["td", "onChange"], ["td", "选项在两栏之间转移时的回调函数"], ["td", "(targetKeys, direction, moveKeys): void"], ["td"]], ["tr", ["td", "onSelectChange"], ["td", "选中项发生改变时的回调函数"], ["td", "(sourceSelectedKeys, targetSelectedKeys): void"], ["td"]], ["tr", ["td", "listStyle"], ["td", "两个穿梭框的自定义样式"], ["td", "Object"], ["td"]], ["tr", ["td", "className"], ["td", "自定义类"], ["td", "String"], ["td"]], ["tr", ["td", "titles"], ["td", "标题集合,顺序从左至右"], ["td", "Array"], ["td", "['', '']"]], ["tr", ["td", "operations"], ["td", "操作文案集合,顺序从上至下"], ["td", "Array"], ["td", "[]"]], ["tr", ["td", "showSearch"], ["td", "是否显示搜索框"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "filterOption"], ["td", "接收 ", ["code", "inputValue"], " ", ["code", "option"], " 两个参数，当 ", ["code", "option"], " 符合筛选条件时，应返回 ", ["code", "true"], "，反之则返回 ", ["code", "false"], "。"], ["td", "(inputValue, option): boolean"], ["td"]], ["tr", ["td", "searchPlaceholder"], ["td", "搜索框的默认值"], ["td", "string"], ["td", "'请输入搜索内容'"]], ["tr", ["td", "notFoundContent"], ["td", "当列表为空时显示的内容"], ["td", "React.ReactNode"], ["td", "'列表为空'"]], ["tr", ["td", "footer"], ["td", "底部渲染函数"], ["td", "(props): React.ReactNode"], ["td"]], ["tr", ["td", "lazy"], ["td", "Transfer 使用了 ", ["a", {
	    "title": null,
	    "href": "https://github.com/loktar00/react-lazy-load"
	  }, "react-lazy-load"], " 优化性能，这里可以设置相关参数"], ["td", "Object"], ["td", ["code", "{ height: 32, offset: 32 }"]]]]], ["h2", "注意"], ["p", "按照 React 的", ["a", {
	    "title": null,
	    "href": "http://facebook.github.io/react/docs/multiple-components.html#dynamic-children"
	  }, "规范"], "，所有的组件数组必须绑定 key。在 Transfer 中，", ["code", "dataSource"], "里的数据值需要指定 ", ["code", "key"], " 值。对于 ", ["code", "dataSource"], " 默认将每列数据的 ", ["code", "key"], " 属性作为唯一的标识。"], ["p", "如果你的数据没有这个属性，务必使用 ", ["code", "rowKey"], " 来指定数据列的主键。"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// 比如你的数据主键是 uid</span>\n<span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span> <span class=\"token attr-name\">rowKey</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>record <span class=\"token operator\">=</span><span class=\"token operator\">></span> record<span class=\"token punctuation\">.</span>uid<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>"
	  }, ["code", "// 比如你的数据主键是 uid\nreturn <Transfer rowKey={record => record.uid} />;"]]]
	};

/***/ }

});