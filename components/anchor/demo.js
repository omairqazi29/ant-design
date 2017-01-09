webpackJsonp([48,209],{

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1362),
	    'fixed': __webpack_require__(1363),
	}

/***/ },

/***/ 1362:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(393);

	var _anchor = __webpack_require__(392);

	var _anchor2 = _interopRequireDefault(_anchor);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的用法。"]],
	    "en-US": [["p", "The simplest usage."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/anchor/demo/basic.md",
	    "id": "components-anchor-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Anchor <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Link <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Anchor<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Anchor</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-basic<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Basic</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-fixed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fixed</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#API<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>API<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Anchor-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Anchor</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Link-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Link</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Anchor</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Link = _anchor2.default.Link;
	    return _react2.default.createElement(
	      _anchor2.default,
	      null,
	      _react2.default.createElement(Link, { href: '#components-anchor-demo-basic', title: 'Basic demo' }),
	      _react2.default.createElement(Link, { href: '#components-anchor-demo-fixed', title: 'Fixed demo' }),
	      _react2.default.createElement(
	        Link,
	        { href: '#API', title: 'API' },
	        _react2.default.createElement(Link, { href: '#Anchor-Props', title: 'Anchor Props' }),
	        _react2.default.createElement(Link, { href: '#Link-Props', title: 'Link Props' })
	      )
	    );
	  },
	  "style": "\n.code-box-demo .ant-affix {\n  z-index: 11;\n}\n"
	};

/***/ },

/***/ 1363:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(393);

	var _anchor = __webpack_require__(392);

	var _anchor2 = _interopRequireDefault(_anchor);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "不浮动，状态不随页面滚动变化。"]],
	    "en-US": [["p", "Do not change state when page is scrolling."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "固定",
	      "en-US": "Fixed Anchor"
	    },
	    "filename": "components/anchor/demo/fixed.md",
	    "id": "components-anchor-demo-fixed"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Anchor <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Link <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Anchor<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Anchor</span> <span class=\"token attr-name\">affix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-basic<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Basic</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-fixed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fixed</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#API<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>API<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Anchor-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Anchor</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Link-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Link</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Anchor</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Link = _anchor2.default.Link;
	    return _react2.default.createElement(
	      _anchor2.default,
	      { affix: false },
	      _react2.default.createElement(Link, { href: '#components-anchor-demo-basic', title: 'Basic demo' }),
	      _react2.default.createElement(Link, { href: '#components-anchor-demo-fixed', title: 'Fixed demo' }),
	      _react2.default.createElement(
	        Link,
	        { href: '#API', title: 'API' },
	        _react2.default.createElement(Link, { href: '#Anchor-Props', title: 'Anchor Props' }),
	        _react2.default.createElement(Link, { href: '#Link-Props', title: 'Link Props' })
	      )
	    );
	  }
	};

/***/ }

});