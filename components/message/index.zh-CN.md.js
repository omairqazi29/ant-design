webpackJsonp([149,201],{

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["section", ["p", "全局展示操作反馈信息。"], ["h2", "何时使用"], ["ul", ["li", ["p", "可提供成功、警告和错误等反馈信息。"]], ["li", ["p", "顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。"]]]],
	  "meta": {
	    "category": "Components",
	    "subtitle": "全局提示",
	    "type": "Feedback",
	    "noinstant": true,
	    "title": "Message",
	    "filename": "components/message/index.zh-CN.md"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#何时使用"
	  }, "何时使用"]], ["li", ["a", {
	    "href": "#API"
	  }, "API"]]],
	  "api": ["section", ["h2", "API"], ["ul", ["li", ["p", ["code", "message.success(content, duration)"]]], ["li", ["p", ["code", "message.error(content, duration)"]]], ["li", ["p", ["code", "message.info(content, duration)"]]], ["li", ["p", ["code", "message.warning(content, duration)"]]], ["li", ["p", ["code", "message.warn(content, duration)"]]], ["li", ["p", ["code", "message.loading(content, duration)"]]]], ["p", "组件提供了四个静态方法，参数如下："], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "content"], ["td", "提示内容"], ["td", "React.Element or String"], ["td", "-"]], ["tr", ["td", "duration"], ["td", "自动关闭的延时，单位秒"], ["td", "number"], ["td", "1.5"]]]], ["p", "还提供了全局配置和全局销毁方法："], ["ul", ["li", ["p", ["code", "message.config(options)"]]], ["li", ["p", ["code", "message.destroy()"]]]], ["pre", {
	    "lang": "js",
	    "highlighted": "message<span class=\"token punctuation\" >.</span><span class=\"token function\" >config</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  top<span class=\"token punctuation\" >:</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >,</span>\n  duration<span class=\"token punctuation\" >:</span> <span class=\"token number\" >2</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }, ["code", "message.config({\n  top: 100,\n  duration: 2,\n});"]], ["table", ["thead", ["tr", ["th", "参数"], ["th", "说明"], ["th", "类型"], ["th", "默认值"]]], ["tbody", ["tr", ["td", "top"], ["td", "消息距离顶部的位置"], ["td", "Number"], ["td", "24px"]], ["tr", ["td", "duration"], ["td", "默认自动关闭延时，单位秒"], ["td", "Number"], ["td", "1.5"]]]]]
	};

/***/ }

});