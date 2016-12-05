webpackJsonp([15,201],{

/***/ 853:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(118);

	var _progress = __webpack_require__(117);

	var _progress2 = _interopRequireDefault(_progress);

	var _style4 = __webpack_require__(11);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "会动的进度条才是好进度条。"]],
	    "en-US": [["p", "A dynamic progress bar is better."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "进度圈动态展示",
	      "en-US": "Dynamic circular progress bar"
	    },
	    "filename": "components/progress/demo/circle-dynamic.md",
	    "id": "components-progress-demo-circle-dynamic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Progress<span class=\"token punctuation\" >,</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> ButtonGroup <span class=\"token operator\" >=</span> Button<span class=\"token punctuation\" >.</span>Group<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> MyProgress <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      percent<span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >increase</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >let</span> percent <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>percent <span class=\"token operator\" >+</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>percent <span class=\"token operator\" >></span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      percent <span class=\"token operator\" >=</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> percent <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >decline</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >let</span> percent <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>percent <span class=\"token operator\" >-</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>percent <span class=\"token operator\" >&lt;</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      percent <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> percent <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>percent<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>decline<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>minus<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>increase<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>plus<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MyProgress</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var ButtonGroup = _button2.default.Group;var MyProgress = _react2.default.createClass({
	      displayName: 'MyProgress',
	      getInitialState: function getInitialState() {
	        return { percent: 0 };
	      },
	      increase: function increase() {
	        var percent = this.state.percent + 10;if (percent > 100) {
	          percent = 100;
	        }this.setState({ percent: percent });
	      },
	      decline: function decline() {
	        var percent = this.state.percent - 10;if (percent < 0) {
	          percent = 0;
	        }this.setState({ percent: percent });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_progress2.default, { type: 'circle', percent: this.state.percent }),
	          _react2.default.createElement(
	            ButtonGroup,
	            null,
	            _react2.default.createElement(_button2.default, { type: 'ghost', onClick: this.decline, icon: 'minus' }),
	            _react2.default.createElement(_button2.default, { type: 'ghost', onClick: this.increase, icon: 'plus' })
	          )
	        );
	      }
	    });return _react2.default.createElement(MyProgress, null);
	  }
	};

/***/ },

/***/ 854:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(118);

	var _progress = __webpack_require__(117);

	var _progress2 = _interopRequireDefault(_progress);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "小一号的圈形进度。"]],
	    "en-US": [["p", "A smaller circular progress bar."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "小型进度圈",
	      "en-US": "Mini size circular progress bar"
	    },
	    "filename": "components/progress/demo/circle-mini.md",
	    "id": "components-progress-demo-circle-mini"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Progress <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >80</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >70</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >80</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>exception<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >width</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >80</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_progress2.default, { type: 'circle', percent: 30, width: 80 }),
	      _react2.default.createElement(_progress2.default, { type: 'circle', percent: 70, width: 80, status: 'exception' }),
	      _react2.default.createElement(_progress2.default, { type: 'circle', percent: 100, width: 80 })
	    );
	  }
	};

/***/ },

/***/ 855:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(118);

	var _progress = __webpack_require__(117);

	var _progress2 = _interopRequireDefault(_progress);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "圈形的进度。"]],
	    "en-US": [["p", "A circular progress bar."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "进度圈",
	      "en-US": "Circular progress bar"
	    },
	    "filename": "components/progress/demo/circle.md",
	    "id": "components-progress-demo-circle"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Progress <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >75</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >70</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>exception<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_progress2.default, { type: 'circle', percent: 75 }),
	      _react2.default.createElement(_progress2.default, { type: 'circle', percent: 70, status: 'exception' }),
	      _react2.default.createElement(_progress2.default, { type: 'circle', percent: 100 })
	    );
	  },
	  "style": "\n.ant-progress-circle-wrap,\n.ant-progress-line-wrap {\n  margin-right: 8px;\n  margin-bottom: 5px;\n}\n"
	};

/***/ },

/***/ 856:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(118);

	var _progress = __webpack_require__(117);

	var _progress2 = _interopRequireDefault(_progress);

	var _style4 = __webpack_require__(11);

	var _button = __webpack_require__(9);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "会动的进度条才是好进度条。"]],
	    "en-US": [["p", "A dynamic progress bar is better."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "动态展示",
	      "en-US": "Dynamic"
	    },
	    "filename": "components/progress/demo/dynamic.md",
	    "id": "components-progress-demo-dynamic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Progress<span class=\"token punctuation\" >,</span> Button <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> ButtonGroup <span class=\"token operator\" >=</span> Button<span class=\"token punctuation\" >.</span>Group<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> MyProgress <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      percent<span class=\"token punctuation\" >:</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >increase</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >let</span> percent <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>percent <span class=\"token operator\" >+</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>percent <span class=\"token operator\" >></span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      percent <span class=\"token operator\" >=</span> <span class=\"token number\" >100</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> percent <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >decline</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >let</span> percent <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>percent <span class=\"token operator\" >-</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>percent <span class=\"token operator\" >&lt;</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      percent <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> percent <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>percent<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>decline<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>minus<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Button</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>ghost<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>increase<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >icon</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>plus<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ButtonGroup</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MyProgress</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var ButtonGroup = _button2.default.Group;var MyProgress = _react2.default.createClass({
	      displayName: 'MyProgress',
	      getInitialState: function getInitialState() {
	        return { percent: 0 };
	      },
	      increase: function increase() {
	        var percent = this.state.percent + 10;if (percent > 100) {
	          percent = 100;
	        }this.setState({ percent: percent });
	      },
	      decline: function decline() {
	        var percent = this.state.percent - 10;if (percent < 0) {
	          percent = 0;
	        }
	        this.setState({ percent: percent });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_progress2.default, { percent: this.state.percent }),
	          _react2.default.createElement(
	            ButtonGroup,
	            null,
	            _react2.default.createElement(_button2.default, { type: 'ghost', onClick: this.decline, icon: 'minus' }),
	            _react2.default.createElement(_button2.default, { type: 'ghost', onClick: this.increase, icon: 'plus' })
	          )
	        );
	      }
	    });return _react2.default.createElement(MyProgress, null);
	  }
	};

/***/ },

/***/ 857:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(118);

	var _progress = __webpack_require__(117);

	var _progress2 = _interopRequireDefault(_progress);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", ["code", "format"], " 属性指定格式。"]],
	    "en-US": [["p", "You can custom text format by setting ", ["code", "format"], "."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "自定义文字格式",
	      "en-US": "Custom text format"
	    },
	    "filename": "components/progress/demo/format.md",
	    "id": "components-progress-demo-format"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Progress <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >75</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >format</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>percent <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token template-string\" ><span class=\"token string\" >`</span><span class=\"token interpolation\" ><span class=\"token interpolation-punctuation punctuation\" >${</span>percent<span class=\"token interpolation-punctuation punctuation\" >}</span></span><span class=\"token string\" > Days`</span></span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>circle<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >format</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token string\" >'Done'</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_progress2.default, { type: 'circle', percent: 75, format: function format(percent) {
	          return percent + ' Days';
	        } }),
	      _react2.default.createElement(_progress2.default, { type: 'circle', percent: 100, format: function format() {
	          return 'Done';
	        } })
	    );
	  },
	  "style": "\n.ant-progress-circle,\n.ant-progress-line {\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n"
	};

/***/ },

/***/ 858:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(118);

	var _progress = __webpack_require__(117);

	var _progress2 = _interopRequireDefault(_progress);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "适合放在较狭窄的区域内。"]],
	    "en-US": [["p", "Appropriate for a narrow area."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "小型进度条",
	      "en-US": "Mini size progress bar"
	    },
	    "filename": "components/progress/demo/line-mini.md",
	    "id": "components-progress-demo-line-mini"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Progress <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >170</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >strokeWidth</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >50</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >strokeWidth</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>active<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >70</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >strokeWidth</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>exception<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >strokeWidth</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >5</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      { style: { width: 170 } },
	      _react2.default.createElement(_progress2.default, { percent: 30, strokeWidth: 5 }),
	      _react2.default.createElement(_progress2.default, { percent: 50, strokeWidth: 5, status: 'active' }),
	      _react2.default.createElement(_progress2.default, { percent: 70, strokeWidth: 5, status: 'exception' }),
	      _react2.default.createElement(_progress2.default, { percent: 100, strokeWidth: 5 })
	    );
	  }
	};

/***/ },

/***/ 859:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(118);

	var _progress = __webpack_require__(117);

	var _progress2 = _interopRequireDefault(_progress);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "标准的进度条。"]],
	    "en-US": [["p", "A standard progress bar."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "进度条",
	      "en-US": "Progress bar"
	    },
	    "filename": "components/progress/demo/line.md",
	    "id": "components-progress-demo-line"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Progress <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >30</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >50</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>active<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >70</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >status</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>exception<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >100</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Progress</span> <span class=\"token attr-name\" >percent</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token number\" >50</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >showInfo</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token boolean\" >false</span><span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_progress2.default, { percent: 30 }),
	      _react2.default.createElement(_progress2.default, { percent: 50, status: 'active' }),
	      _react2.default.createElement(_progress2.default, { percent: 70, status: 'exception' }),
	      _react2.default.createElement(_progress2.default, { percent: 100 }),
	      _react2.default.createElement(_progress2.default, { percent: 50, showInfo: false })
	    );
	  }
	};

/***/ },

/***/ 1208:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'circle-dynamic': __webpack_require__(853),
	    'circle-mini': __webpack_require__(854),
	    'circle': __webpack_require__(855),
	    'dynamic': __webpack_require__(856),
	    'format': __webpack_require__(857),
	    'line-mini': __webpack_require__(858),
	    'line': __webpack_require__(859),
	}

/***/ }

});