webpackJsonp([157,209],{

/***/ 1538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "为页面和功能提供导航的菜单列表。"], ["h2", "何时使用"], ["p", "导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。"], ["p", "更多布局和导航的范例可以参考：", ["a", {
	    "title": null,
	    "href": "/docs/spec/layout"
	  }, "常用布局"], "。"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>菜单项<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>子菜单<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>子菜单项<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<Menu>\n  <Menu.Item>菜单项</Menu.Item>\n  <SubMenu title=\"子菜单\">\n    <Menu.Item>子菜单项</Menu.Item>\n  </SubMenu>\n</Menu>"]]],
	  "meta": {
	    "category": "Components",
	    "cols": 1,
	    "type": "Navigation",
	    "title": "Menu",
	    "subtitle": "导航菜单",
	    "filename": "components/menu/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Menu props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "theme"], ["td", "主题颜色"], ["td", "String: ", ["code", "light"], " ", ["code", "dark"]], ["td", ["code", "light"]]], ["tr", ["td", "mode"], ["td", "菜单类型，现在支持垂直、水平、和内嵌模式三种"], ["td", "String: ", ["code", "vertical"], " ", ["code", "horizontal"], " ", ["code", "inline"]], ["td", ["code", "vertical"]]], ["tr", ["td", "selectedKeys"], ["td", "当前选中的菜单项 key 数组"], ["td", "Array"], ["td"]], ["tr", ["td", "defaultSelectedKeys"], ["td", "初始选中的菜单项 key 数组"], ["td", "Array"], ["td"]], ["tr", ["td", "openKeys"], ["td", "当前展开的 SubMenu 菜单项 key 数组"], ["td", "Array"], ["td"]], ["tr", ["td", "defaultOpenKeys"], ["td", "初始展开的 SubMenu 菜单项 key 数组"], ["td"], ["td"]], ["tr", ["td", "onOpenChange"], ["td", "SubMenu 展开/关闭的回调"], ["td", "Function(openKeys: string[])"], ["td", "noop"]], ["tr", ["td", "onSelect"], ["td", "被选中时调"], ["td", "Function({ item, key, selectedKeys })"], ["td", "无"]], ["tr", ["td", "onDeselect"], ["td", "取消选中时调用，仅在 multiple 生效"], ["td", "Function({ item, key, selectedKeys })"], ["td", "-"]], ["tr", ["td", "onClick"], ["td", "点击 menuitem 调用此函数，参数为 {item, key, keyPath}"], ["td", "function"], ["td", "-"]], ["tr", ["td", "style"], ["td", "根节点样式"], ["td", "Object"], ["td"]], ["tr", ["td", "inlineIndent"], ["td", "inline 模式的菜单缩进宽度"], ["td", "number"], ["td", "24"]]]], ["blockquote", ["p", "More options in ", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/menu#api"
	  }, "rc-menu"]]], ["h3", "Menu.Item props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "disabled"], ["td", "是否禁用"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "key"], ["td", "item 的唯一标志"], ["td", "String"], ["td"]]]], ["h3", "Menu.SubMenu props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "disabled"], ["td", "是否禁用"], ["td", "Boolean"], ["td", "false"]], ["tr", ["td", "key"], ["td", "唯一标志"], ["td", "String"], ["td"]], ["tr", ["td", "title"], ["td", "子菜单项值"], ["td", "String or React.Element"], ["td"]], ["tr", ["td", "children"], ["td", "子菜单的菜单项"], ["td", "(MenuItem or SubMenu)[]"], ["td"]], ["tr", ["td", "onTitleClick"], ["td", "点击子菜单标题"], ["td", "Function({ eventKey, domEvent })"], ["td"]]]], ["h3", "Menu.ItemGroup props"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "title"], ["td", "分组标题"], ["td", "String or React.Element"], ["td"]], ["tr", ["td", "children"], ["td", "分组的菜单项"], ["td", "MenuItem[]"], ["td"]]]], ["h3", "Menu.Divider"], ["p", "菜单项分割线，只用在弹出菜单内。"]]
	};

/***/ }

});