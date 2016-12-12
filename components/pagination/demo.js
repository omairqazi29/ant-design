webpackJsonp([8,204],{

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1552),
	    'changer': __webpack_require__(1553),
	    'controlled': __webpack_require__(1554),
	    'jump': __webpack_require__(1555),
	    'mini': __webpack_require__(1556),
	    'more': __webpack_require__(1557),
	    'simple': __webpack_require__(1558),
	    'total': __webpack_require__(1559),
	}

/***/ },

/***/ 1552:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(80);

	var _pagination = __webpack_require__(79);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "基础分页。"]],
	    "en-US": [["p", "Basic pagination."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/pagination/demo/basic.md",
	    "id": "components-pagination-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_pagination2.default, { defaultCurrent: 1, total: 50 });
	  }
	};

/***/ },

/***/ 1553:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(80);

	var _pagination = __webpack_require__(79);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "改变每页显示条目数。"]],
	    "en-US": [["p", "Change ", ["code", "pageSize"], "."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "改变",
	      "en-US": "Changer"
	    },
	    "filename": "components/pagination/demo/changer.md",
	    "id": "components-pagination-demo-changer"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onShowSizeChange</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">,</span> pageSize<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">,</span> pageSize<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">showSizeChanger</span> <span class=\"token attr-name\">onShowSizeChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onShowSizeChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">3</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">500</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function onShowSizeChange(current, pageSize) {
	      console.log(current, pageSize);
	    }return _react2.default.createElement(_pagination2.default, { showSizeChanger: true, onShowSizeChange: onShowSizeChange, defaultCurrent: 3, total: 500 });
	  }
	};

/***/ },

/***/ 1554:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(80);

	var _pagination = __webpack_require__(79);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "受控制的页码。"]],
	    "en-US": [["p", "Controlled page number."]]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "受控",
	      "en-US": "Controlled"
	    },
	    "filename": "components/pagination/demo/controlled.md",
	    "id": "components-pagination-demo-controlled"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Container <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      current<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>page<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>page<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      current<span class=\"token punctuation\">:</span> page<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">current</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Container</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Container = _react2.default.createClass({
	      displayName: 'Container',
	      getInitialState: function getInitialState() {
	        return { current: 3
	        };
	      },
	      onChange: function onChange(page) {
	        console.log(page);
	        this.setState({ current: page });
	      },
	      render: function render() {
	        return _react2.default.createElement(_pagination2.default, { current: this.state.current, onChange: this.onChange, total: 50 });
	      }
	    });return _react2.default.createElement(Container, null);
	  }
	};

/***/ },

/***/ 1555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(80);

	var _pagination = __webpack_require__(79);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "快速跳转到某一页。"]],
	    "en-US": [["p", "Jump to a page directly."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "跳转",
	      "en-US": "Jumper"
	    },
	    "filename": "components/pagination/demo/jump.md",
	    "id": "components-pagination-demo-jump"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>pageNumber<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Page: '</span><span class=\"token punctuation\">,</span> pageNumber<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">showQuickJumper</span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">500</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function onChange(pageNumber) {
	      console.log('Page: ', pageNumber);
	    }return _react2.default.createElement(_pagination2.default, { showQuickJumper: true, defaultCurrent: 2, total: 500, onChange: onChange });
	  }
	};

/***/ },

/***/ 1556:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(80);

	var _pagination = __webpack_require__(79);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "迷你版本。"]],
	    "en-US": [["p", "Mini size pagination."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "迷你",
	      "en-US": "Mini size"
	    },
	    "filename": "components/pagination/demo/mini.md",
	    "id": "components-pagination-demo-mini"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">showTotal</span><span class=\"token punctuation\">(</span>total<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token template-string\"><span class=\"token string\">`Total </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>total<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> items`</span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">showSizeChanger</span> <span class=\"token attr-name\">showQuickJumper</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">showTotal</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>showTotal<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function showTotal(total) {
	      return 'Total ' + total + ' items';
	    }return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_pagination2.default, { size: 'small', total: 50 }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_pagination2.default, { size: 'small', total: 50, showSizeChanger: true, showQuickJumper: true }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_pagination2.default, { size: 'small', total: 50, showTotal: showTotal })
	    );
	  }
	};

/***/ },

/***/ 1557:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(80);

	var _pagination = __webpack_require__(79);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "更多分页。"]],
	    "en-US": [["p", "More pages."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "更多",
	      "en-US": "More"
	    },
	    "filename": "components/pagination/demo/more.md",
	    "id": "components-pagination-demo-more"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">500</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_pagination2.default, { defaultCurrent: 1, total: 500 });
	  }
	};

/***/ },

/***/ 1558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(80);

	var _pagination = __webpack_require__(79);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "简单的翻页。"]],
	    "en-US": [["p", "Simple mode."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "简洁",
	      "en-US": "Simple mode"
	    },
	    "filename": "components/pagination/demo/simple.md",
	    "id": "components-pagination-demo-simple"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">simple</span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_pagination2.default, { simple: true, defaultCurrent: 2, total: 50 });
	  }
	};

/***/ },

/***/ 1559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(80);

	var _pagination = __webpack_require__(79);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "通过设置 ", ["code", "showTotal"], " 展示总共有多少数据。"]],
	    "en-US": [["p", "You can show the total number of data by setting ", ["code", "showTotal"], "."]]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "总数",
	      "en-US": "Total number"
	    },
	    "filename": "components/pagination/demo/total.md",
	    "id": "components-pagination-demo-total"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span>\n    <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">85</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">showTotal</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>total <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`Total </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>total<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> items`</span></span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">pageSize</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">20</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span>\n    <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">85</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">showTotal</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>total<span class=\"token punctuation\">,</span> range<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>range<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>range<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> of </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>total<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> items`</span></span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">pageSize</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">20</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_pagination2.default, { total: 85, showTotal: function showTotal(total) {
	          return 'Total ' + total + ' items';
	        }, pageSize: 20, defaultCurrent: 1 }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_pagination2.default, { total: 85, showTotal: function showTotal(total, range) {
	          return range[0] + '-' + range[1] + ' of ' + total + ' items';
	        }, pageSize: 20, defaultCurrent: 1 })
	    );
	  }
	};

/***/ }

});