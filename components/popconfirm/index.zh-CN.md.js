webpackJsonp([142,202],{

/***/ 847:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "点击元素，弹出气泡式的确认框。"], ["h2", "何时使用"], ["p", "目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。"], ["p", "和 ", ["code", "confirm"], " 弹出的全屏居中模态对话框相比，交互形式更轻量。"]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "气泡确认框",
	    "type": "Feedback",
	    "title": "Popconfirm",
	    "filename": "components/popconfirm/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "placement"], ["td", "气泡框位置，可选 ", ["code", "top/left/right/bottom"], " ", ["code", "topLeft/topRight/bottomLeft/bottomRight"], " ", ["code", "leftTop/leftBottom/rightTop/rightBottom"]], ["td", "string"], ["td", "top"]], ["tr", ["td", "title"], ["td", "确认框的描述"], ["td", "React.Element"], ["td", "无"]], ["tr", ["td", "onConfirm"], ["td", "点击确认的回调"], ["td", "function"], ["td", "无"]], ["tr", ["td", "onCancel"], ["td", "点击取消的回调"], ["td", "function"], ["td", "无"]], ["tr", ["td", "onVisibleChange"], ["td", "显示隐藏的回调"], ["td", "function(visible)"], ["td", "无"]], ["tr", ["td", "okText"], ["td", "确认按钮文字"], ["td", "String"], ["td", "确定"]], ["tr", ["td", "cancelText"], ["td", "取消按钮文字"], ["td", "String"], ["td", "取消"]], ["tr", ["td", "openClassName"], ["td", "气泡框展现时触发器添加的类名，可用于打开浮层时高亮触发器"], ["td", "string"], ["td", "ant-popover-open"]], ["tr", ["td", "arrowPointAtCenter"], ["td", "箭头是否指向目标元素中心，", ["code", "antd@1.11+"], " 支持"], ["td", "Boolean"], ["td", ["code", "false"]]]]]]
	};

/***/ }

});