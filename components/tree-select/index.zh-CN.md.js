webpackJsonp([108,202],{

/***/ 981:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "树型选择控件。"], ["h2", "何时使用"], ["p", "类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。"]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "树选择",
	    "type": "Data Entry",
	    "title": "TreeSelect",
	    "filename": "components/tree-select/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Tree props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "value"], ["td", "指定当前选中的条目"], ["td", "通常: String/Array", ["string"], ". 设置 labelInValue: {value: String, label: React.Node}/Array<{value, label}>. 设置 treeCheckStrictly(halfChecked 默认为 false): {value: String, label: React.Node, halfChecked}/Array<{value, label, halfChecked}>."], ["td", "-"]], ["tr", ["td", "labelInValue"], ["td", "是否把 label 嵌入到 value 里，设置后参考以上 value 类型写法"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "defaultValue"], ["td", "指定默认选中的条目"], ["td", "String/Array", ["string"]], ["td", "-"]], ["tr", ["td", "multiple"], ["td", "支持多选（当设置 treeCheckable 时自动变为true）"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "onSelect"], ["td", "被选中时调用"], ["td", "function(value, node, extra)"], ["td", "-"]], ["tr", ["td", "onChange"], ["td", "选中树节点时调用此函数"], ["td", "function(value, label, extra)"], ["td", "-"]], ["tr", ["td", "allowClear"], ["td", "显示清除按钮"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "onSearch"], ["td", "文本框值变化时回调"], ["td", "function(value: String)"], ["td", "-"]], ["tr", ["td", "placeholder"], ["td", "选择框默认文字"], ["td", "String"], ["td", "-"]], ["tr", ["td", "searchPlaceholder"], ["td", "搜索框默认文字"], ["td", "String"], ["td", "-"]], ["tr", ["td", "dropdownStyle"], ["td", "下拉菜单的样式"], ["td", "Object"], ["td", "-"]], ["tr", ["td", "dropdownMatchSelectWidth"], ["td", "下拉菜单和选择器同宽"], ["td", "Boolean"], ["td", "true"]], ["tr", ["td", "size"], ["td", "选择框大小，可选 ", ["code", "large"], " ", ["code", "small"]], ["td", "String"], ["td", "default"]], ["tr", ["td", "showSearch"], ["td", "在下拉中显示搜索框(仅在单选模式下生效)"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "disabled"], ["td", "是否禁用"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "showCheckedStrategy"], ["td", ["code", "TreeSelect.SHOW_ALL"], ": 显示所有选中节点(包括父节点). ", ["code", "TreeSelect.SHOW_PARENT"], ": 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点."], ["td", "enum{TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }"], ["td", "TreeSelect.SHOW_CHILD"]], ["tr", ["td", "treeDefaultExpandAll"], ["td", "默认展开所有树节点"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "treeCheckable"], ["td", "显示 checkbox"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "treeCheckStrictly"], ["td", "checkable 状态下节点选择完全受控（父子节点选中状态不再关联）"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "filterTreeNode"], ["td", "是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值"], ["td", "Boolean/Function(inputValue: string, treeNode: TreeNode) (函数需要返回bool值)"], ["td", "Function"]], ["tr", ["td", "treeNodeFilterProp"], ["td", "输入项过滤对应的 treeNode 属性"], ["td", "String"], ["td", "'value'"]], ["tr", ["td", "treeNodeLabelProp"], ["td", "作为显示的 prop 设置"], ["td", "String"], ["td", "'title'"]], ["tr", ["td", "treeData"], ["td", "treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）"], ["td", "array<{value, label, children, ", "[disabled, selectable]", "}>"], ["td", "[]"]], ["tr", ["td", "treeDataSimpleMode"], ["td", "使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: ", "[{id:1, pid:0, value:'1', label:\"test1\",...},...]", ", ", ["code", "pId"], " 是父节点的 id)"], ["td", "Boolean/Object{id: 'id', pId: 'pId', rootPId: null}"], ["td", "false"]], ["tr", ["td", "loadData"], ["td", "异步加载数据"], ["td", "function(node)"], ["td", "-"]], ["tr", ["td", "getPopupContainer"], ["td", "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。", ["a", {
	    "title": null,
	    "href": "http://codepen.io/anon/pen/xVBOVQ?editors=001"
	  }, "示例"]], ["td", "Function(triggerNode)"], ["td", "() => document.body"]]]], ["h3", "TreeNode props"], ["blockquote", ["p", "建议使用 treeData 来代替 TreeNode，免去手工构造麻烦"]], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "disabled"], ["td", "是否禁用"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "key"], ["td", "此项必须设置（其值在整个树范围内唯一）"], ["td", "String"], ["td", "-"]], ["tr", ["td", "value"], ["td", "默认根据此属性值进行筛选（其值在整个树范围内唯一）"], ["td", "String"], ["td", "-"]], ["tr", ["td", "title"], ["td", "树节点显示的内容"], ["td", "String/element"], ["td", "'---'"]], ["tr", ["td", "isLeaf"], ["td", "是否是叶子节点"], ["td", "Boolean"], ["td", "false"]]]]]
	};

/***/ }

});