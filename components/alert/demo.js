webpackJsonp([18,206],{

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'banner': __webpack_require__(1347),
	    'basic': __webpack_require__(1348),
	    'closable': __webpack_require__(1349),
	    'close-text': __webpack_require__(1350),
	    'description': __webpack_require__(1351),
	    'icon': __webpack_require__(1352),
	    'style': __webpack_require__(1353),
	}

/***/ },

/***/ 1347:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(94);

	var _alert = __webpack_require__(93);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用作顶部公告时，默认有图标，", ["code", "type"], " 为 'warning'，并有特殊样式。"]],
	    "en-US": [["p", "When ", ["code", "Alert"], " is used as banner, it has particular style, Icon and ", ["code", "type"], "(warning) are specified by default."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "顶部公告",
	      "en-US": "Banner"
	    },
	    "filename": "components/alert/demo/banner.md",
	    "id": "components-alert-demo-banner"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">text\"</span> <span class=\"token attr-name\">banner</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Very</span> <span class=\"token attr-name\">long</span> <span class=\"token attr-name\">warning</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">warning</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text\"</span> <span class=\"token attr-name\">banner</span> <span class=\"token attr-name\">closable</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_alert2.default, { message: 'Warning text', banner: true }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_alert2.default, { message: 'Very long warning text warning text text text text text text text', banner: true, closable: true })
	    );
	  }
	};

/***/ },

/***/ 1348:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(94);

	var _alert = __webpack_require__(93);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的用法，适用于简短的警告提示。"]],
	    "en-US": [["p", "The simplest usage for short messages."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/alert/demo/basic.md",
	    "id": "components-alert-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_alert2.default, { message: 'Success Text', type: 'success' });
	  }
	};

/***/ },

/***/ 1349:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(94);

	var _alert = __webpack_require__(93);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "显示关闭按钮，点击可关闭警告提示。"]],
	    "en-US": [["p", "To show close button."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "可关闭的警告提示",
	      "en-US": "Closable"
	    },
	    "filename": "components/alert/demo/closable.md",
	    "id": "components-alert-demo-closable"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> onClose <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> <span class=\"token string\">'I was closed.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">TextW</span> <span class=\"token attr-name\">arning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">TextWarning</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">closable</span>\n    <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onClose<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">closable</span>\n    <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onClose<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var onClose = function onClose(e) {
	      console.log(e, 'I was closed.');
	    };return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_alert2.default, { message: 'Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text', type: 'warning', closable: true, onClose: onClose }),
	      _react2.default.createElement(_alert2.default, { message: 'Error Text', description: 'Error Description Error Description Error Description Error Description Error Description Error Description', type: 'error', closable: true, onClose: onClose })
	    );
	  }
	};

/***/ },

/***/ 1350:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(94);

	var _alert = __webpack_require__(93);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以自定义关闭，自定义的文字会替换原先的关闭 ", ["code", "Icon"], "。"]],
	    "en-US": [["p", "Replace the default icon with customized text."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "自定义关闭",
	      "en-US": "Customized Close Text"
	    },
	    "filename": "components/alert/demo/close-text.md",
	    "id": "components-alert-demo-close-text"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">closeText</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Close</span> <span class=\"token attr-name\">Now\"</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_alert2.default, { message: 'Info Text', type: 'info', closeText: 'Close Now' });
	  }
	};

/***/ },

/***/ 1351:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(94);

	var _alert = __webpack_require__(93);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "含有辅助性文字介绍的警告提示。"]],
	    "en-US": [["p", "Additional description for alert message."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "含有辅助性文字介绍",
	      "en-US": "Description"
	    },
	    "filename": "components/alert/demo/description.md",
	    "id": "components-alert-demo-description"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Success</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Success</span> <span class=\"token attr-name\">Description\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Info</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Info</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Info</span> <span class=\"token attr-name\">Description\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Description\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_alert2.default, { message: 'Success Text', description: 'Success Description Success Description Success Description', type: 'success' }),
	      _react2.default.createElement(_alert2.default, { message: 'Info Text', description: 'Info Description Info Description Info Description Info Description', type: 'info' }),
	      _react2.default.createElement(_alert2.default, { message: 'Warning Text', description: 'Warning Description Warning Description Warning Description Warning Description', type: 'warning' }),
	      _react2.default.createElement(_alert2.default, { message: 'Error Text', description: 'Error Description Error Description Error Description Error Description', type: 'error' })
	    );
	  }
	};

/***/ },

/***/ 1352:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(94);

	var _alert = __webpack_require__(93);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可口的图标让信息类型更加醒目。"]],
	    "en-US": [["p", "Decent icon make information more clear and more friendly."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "图标",
	      "en-US": "Icon"
	    },
	    "filename": "components/alert/demo/icon.md",
	    "id": "components-alert-demo-icon"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Tips\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Informational</span> <span class=\"token attr-name\">Notes\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success</span> <span class=\"token attr-name\">tips\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Detailed</span> <span class=\"token attr-name\">description</span> <span class=\"token attr-name\">and</span> <span class=\"token attr-name\">advices</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">successful</span> <span class=\"token attr-name\">copywriting.\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">showIcon</span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Informational</span> <span class=\"token attr-name\">Notes\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Additional</span> <span class=\"token attr-name\">description</span> <span class=\"token attr-name\">and</span> <span class=\"token attr-name\">informations</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">copywriting.\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">showIcon</span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>This</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">a</span> <span class=\"token attr-name\">warning</span> <span class=\"token attr-name\">notice</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">copywriting.\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">showIcon</span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>This</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">an</span> <span class=\"token attr-name\">error</span> <span class=\"token attr-name\">message</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">copywriting.\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">showIcon</span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_alert2.default, { message: 'Success Tips', type: 'success', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Informational Notes', type: 'info', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Warning', type: 'warning', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Error', type: 'error', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'success tips', description: 'Detailed description and advices about successful copywriting.', type: 'success', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Informational Notes', description: 'Additional description and informations about copywriting.', type: 'info', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Warning', description: 'This is a warning notice about copywriting.', type: 'warning', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Error', description: 'This is an error message about copywriting.', type: 'error', showIcon: true })
	    );
	  }
	};

/***/ },

/***/ 1353:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(94);

	var _alert = __webpack_require__(93);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "共有四种样式 ", ["code", "success"], "、", ["code", "info"], "、", ["code", "warning"], "、", ["code", "error"], "。"]],
	    "en-US": [["p", "There are 4 types of Alert: ", ["code", "success"], ", ", ["code", "info"], ", ", ["code", "warning"], ", ", ["code", "error"], "."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "四种样式",
	      "en-US": "More types"
	    },
	    "filename": "components/alert/demo/style.md",
	    "id": "components-alert-demo-style"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_alert2.default, { message: 'Success Text', type: 'success' }),
	      _react2.default.createElement(_alert2.default, { message: 'Info Text', type: 'info' }),
	      _react2.default.createElement(_alert2.default, { message: 'Warning Text', type: 'warning' }),
	      _react2.default.createElement(_alert2.default, { message: 'Error Text', type: 'error' })
	    );
	  }
	};

/***/ }

});