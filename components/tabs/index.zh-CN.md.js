webpackJsonp([125,209],{

/***/ 965:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "选项卡切换组件。"], ["h2", "何时使用"], ["p", "提供平级的区域将大块内容进行收纳和展现，保持界面整洁。"], ["p", "Ant Design 依次提供了三级选项卡，分别用于不同的场景。"], ["ul", ["li", ["p", "卡片式的页签，提供可关闭的样式，常用于容器顶部。"]], ["li", ["p", "标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。"]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "/components/radio/#components-radio-demo-radiobutton"
	  }, "RadioButton"], " 可作为更次级的页签来使用。"]]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "标签页",
	    "type": "Navigation",
	    "title": "Tabs",
	    "filename": "components/tabs/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["h3", "Tabs"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "activeKey"], ["td", "当前激活 tab 面板的 key"], ["td", "string"], ["td", "无"]], ["tr", ["td", "defaultActiveKey"], ["td", "初始化选中面板的 key，如果没有设置 activeKey"], ["td", "string"], ["td", "第一个面板"]], ["tr", ["td", "onChange"], ["td", "切换面板的回调"], ["td", "Function"], ["td", "无"]], ["tr", ["td", "onTabClick"], ["td", "tab 被点击的回调"], ["td", "Function"], ["td", "无"]], ["tr", ["td", "tabBarExtraContent"], ["td", "tab bar 上额外的元素"], ["td", "React.ReactNode"], ["td", "无"]], ["tr", ["td", "type"], ["td", "页签的基本样式，可选 ", ["code", "line"], "、", ["code", "card"], " ", ["code", "editable-card"], " 类型"], ["td", "string"], ["td", "'line'"]], ["tr", ["td", "size"], ["td", "大小，提供 ", ["code", "default"], " 和 ", ["code", "small"], " 两种大小，仅当 ", ["code", "type=\"line\""], " 时生效。"], ["td", "string"], ["td", "'default'"]], ["tr", ["td", "tabPosition"], ["td", "页签位置，可选值有 ", ["code", "top"], " ", ["code", "right"], " ", ["code", "bottom"], " ", ["code", "left"]], ["td", "string"], ["td", "'top'"]], ["tr", ["td", "onEdit"], ["td", "新增和删除页签的回调，在 ", ["code", "type=\"editable-card\""], " 时有效"], ["td", "(targetKey, action): void"], ["td", "无"]], ["tr", ["td", "hideAdd"], ["td", "是否隐藏加号图标，在 ", ["code", "type=\"editable-card\""], " 时有效"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "animated"], ["td", "是否使用动画切换 Tabs，在 ", ["code", "tabPosition=top|bottom"], " 时有效"], ["td", "boolean"], ["td", "true"]]]], ["h3", "Tabs.TabPane"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "key"], ["td", "对应 activeKey"], ["td", "string"], ["td", "无"]], ["tr", ["td", "tab"], ["td", "选项卡头显示文字"], ["td", "React.ReactNode"], ["td", "无"]]]]]
	};

/***/ }

});