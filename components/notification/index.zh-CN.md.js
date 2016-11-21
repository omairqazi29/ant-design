webpackJsonp([146,202],{

/***/ 816:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "全局展示通知提醒信息。"], ["h2", "何时使用"], ["p", "在系统右上角显示通知提醒信息。经常用于以下情况："], ["ul", ["li", ["p", "较为复杂的通知内容。"]], ["li", ["p", "带有交互的通知，给出用户下一步的行动点。"]], ["li", ["p", "系统主动推送。"]]]],
	  "meta": {
	    "category": "Components",
	    "type": "Feedback",
	    "noinstant": true,
	    "title": "Notification",
	    "subtitle": "通知提醒框",
	    "filename": "components/notification/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["ul", ["li", ["p", ["code", "notification.success(config)"]]], ["li", ["p", ["code", "notification.error(config)"]]], ["li", ["p", ["code", "notification.info(config)"]]], ["li", ["p", ["code", "notification.warning(config)"]]], ["li", ["p", ["code", "notification.warn(config)"]]], ["li", ["p", ["code", "notification.close(key: String)"]]], ["li", ["p", ["code", "notification.destroy()"]]]], ["p", "config 参数如下："], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "message"], ["td", "通知提醒标题，必选"], ["td", "React.Node"], ["td", "-"]], ["tr", ["td", "description"], ["td", "通知提醒内容，必选"], ["td", "React.Node"], ["td", "-"]], ["tr", ["td", "btn"], ["td", "自定义关闭按钮"], ["td", "React.Node"], ["td", "-"]], ["tr", ["td", "icon"], ["td", "自定义图标"], ["td", "React.Node"], ["td", "-"]], ["tr", ["td", "key"], ["td", "当前通知唯一标志"], ["td", "String"], ["td", "-"]], ["tr", ["td", "onClose"], ["td", "点击默认关闭按钮时触发的回调函数"], ["td", "Function"], ["td", "-"]], ["tr", ["td", "duration"], ["td", "默认 4.5 秒后自动关闭，配置为 null 则不自动关闭"], ["td", "Number"], ["td", "4.5"]]]], ["p", "还提供了一个全局配置方法，在调用前提前配置，全局一次生效。"], ["ul", ["li", ["p", ["code", "notification.config(options)"]]]], ["pre", {
	    "lang": "js",
	    "highlighted": "notification<span class=\"token punctuation\" >.</span><span class=\"token function\" >config</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  top<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span>\n  duration<span class=\"token punctuation\" >:</span> <span class=\"token number\" >3</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }, ["code", "notification.config({\n  top: 100,\n  duration: 3,\n});"]], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "top"], ["td", "消息距离顶部的位置"], ["td", "Number"], ["td", "24px"]], ["tr", ["td", "duration"], ["td", "默认自动关闭延时，单位秒"], ["td", "Number"], ["td", "4.5"]]]]]
	};

/***/ }

});