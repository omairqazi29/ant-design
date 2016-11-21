webpackJsonp([141,202],{

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "The floating card popped by clicking or hovering."], ["h2", "When To Use"], ["p", "A simple popup menu to provide extra information or operations."], ["p", "Comparing with ", ["code", "Tooltip"], ", besides information ", ["code", "Popover"], " card can also provide action elements like links and buttons."]],
	  "meta": {
	    "category": "Components",
	    "type": "Data Display",
	    "title": "Popover",
	    "filename": "components/popover/index.en-US.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#When-To-Use"
	  }, "When To Use"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["table", ["thead", ["tr", ["th", "Param"], ["th", "Description"], ["th", "Type"], ["th", "Default value"]]], ["tbody", ["tr", ["td", "trigger"], ["td", "triggering mode: can be hover, focus, or click."], ["td", "string"], ["td", "hover"]], ["tr", ["td", "placement"], ["td", "position of the card，optional ", ["code", "top/left/right/bottom"], " ", ["code", "topLeft/topRight/bottomLeft/bottomRight"], " ", ["code", "leftTop/leftBottom/rightTop/rightBottom"]], ["td", "string"], ["td", "top"]], ["tr", ["td", "title"], ["td", "title of the card"], ["td", "React.Element"], ["td", "none"]], ["tr", ["td", "content"], ["td", "content of the card"], ["td", "React.Element"], ["td", "none"]], ["tr", ["td", "overlayClassName"], ["td", "class name of the card"], ["td", "string"], ["td", "none"]], ["tr", ["td", "overlayStyle"], ["td", "style of the card"], ["td", "object"], ["td", "none"]], ["tr", ["td", "visible"], ["td", "make the float card visible or not"], ["td", "boolean"], ["td", "false"]], ["tr", ["td", "onVisibleChange"], ["td", "callback of the visible attribute changed"], ["td", "function"], ["td", "none"]], ["tr", ["td", "getTooltipContainer"], ["td", "rendered to the root of the menu. Default rendered to the body dom. If gets any problem of the menu while scrolling. Try to make the root the dom scrolled, and make it position relative. ", ["a", {
	    "title": null,
	    "href": "http://codepen.io/anon/pen/xVBOVQ?editors=001"
	  }, "Sample"]], ["td", "Function(triggerNode)"], ["td", "() => document.body"]], ["tr", ["td", "openClassName"], ["td", "class name of the trigger, using for highlighting the trigger while triggered"], ["td", "string"], ["td", "ant-popover-open"]], ["tr", ["td", "arrowPointAtCenter"], ["td", "whether arrow pointed at the center of target, supported after ", ["code", "antd@1.11+"]], ["td", "Boolean"], ["td", ["code", "false"]]]]]]
	};

/***/ }

});