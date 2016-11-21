webpackJsonp([140,202],{

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "点击/鼠标移入元素，弹出气泡式的卡片浮层。"], ["h2", "何时使用"], ["p", "当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。"], ["p", "和 ", ["code", "Tooltip"], " 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。"]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "气泡卡片",
	    "type": "Data Display",
	    "title": "Popover",
	    "filename": "components/popover/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "trigger"], ["td", "触发行为，可选 ", ["code", "hover/focus/click"]], ["td", "string"], ["td", "hover"]], ["tr", ["td", "placement"], ["td", "气泡框位置，可选 ", ["code", "top/left/right/bottom"], " ", ["code", "topLeft/topRight/bottomLeft/bottomRight"], " ", ["code", "leftTop/leftBottom/rightTop/rightBottom"]], ["td", "string"], ["td", "top"]], ["tr", ["td", "title"], ["td", "卡片标题"], ["td", "React.Element"], ["td", "无"]], ["tr", ["td", "content"], ["td", "卡片内容"], ["td", "React.Element"], ["td", "无"]], ["tr", ["td", "overlayClassName"], ["td", "卡片类名"], ["td", "string"], ["td", "无"]], ["tr", ["td", "overlayStyle"], ["td", "卡片样式"], ["td", "object"], ["td", "无"]], ["tr", ["td", "visible"], ["td", "用于手动控制浮层显隐"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "onVisibleChange"], ["td", "显示隐藏改变的回调"], ["td", "function"], ["td", "无"]], ["tr", ["td", "getTooltipContainer"], ["td", "菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。", ["a", {
	    "title": null,
	    "href": "http://codepen.io/anon/pen/xVBOVQ?editors=001"
	  }, "示例"]], ["td", "Function(triggerNode)"], ["td", "() => document.body"]], ["tr", ["td", "openClassName"], ["td", "气泡框展现时触发器添加的类名，可用于打开浮层时高亮触发器"], ["td", "string"], ["td", "ant-popover-open"]], ["tr", ["td", "arrowPointAtCenter"], ["td", "箭头是否指向目标元素中心，", ["code", "antd@1.11+"], " 支持"], ["td", "Boolean"], ["td", ["code", "false"]]]]]]
	};

/***/ }

});