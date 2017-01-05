webpackJsonp([17,209],{

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1375),
	    'change': __webpack_require__(1376),
	    'dot': __webpack_require__(1377),
	    'link': __webpack_require__(1378),
	    'no-wrapper': __webpack_require__(1379),
	    'overflow': __webpack_require__(1380),
	    'status': __webpack_require__(1381),
	}

/***/ },

/***/ 1375:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(145);

	var _badge = __webpack_require__(144);

	var _badge2 = _interopRequireDefault(_badge);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "简单的徽章展示。"]],
	    "en-US": [["p", "Simplest Usage."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/badge/demo/basic.md",
	    "id": "components-badge-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Badge <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>head-example<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _badge2.default,
	      { count: 5 },
	      _react2.default.createElement('a', { href: '#', className: 'head-example' })
	    );
	  },
	  "style": "\n.ant-badge:not(.ant-badge-status) {\n  margin-right: 16px;\n}\n.head-example {\n  width: 42px;\n  height: 42px;\n  border-radius: 6px;\n  background: #eee;\n  display: inline-block;\n}\n"
	};

/***/ },

/***/ 1376:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(68);

	var _switch = __webpack_require__(67);

	var _switch2 = _interopRequireDefault(_switch);

	var _style6 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style7 = __webpack_require__(145);

	var _badge = __webpack_require__(144);

	var _badge2 = _interopRequireDefault(_badge);

	var _style8 = __webpack_require__(11);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "展示动态变化的效果。"]],
	    "en-US": [["p", "The count will be animated as it changes."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "动态",
	      "en-US": "Dynamic"
	    },
	    "filename": "components/badge/demo/change.md",
	    "id": "components-badge-demo-change"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Badge<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Switch <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> ButtonGroup <span class=\"token operator\">=</span> Button<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Test <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      count<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span>\n      show<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">increase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> count <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>count <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> count <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">decline</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> count <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>count <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>count <span class=\"token operator\">&lt;</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      count <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> count <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>show<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> show <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>count<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>head-example<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ButtonGroup</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>decline<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>minus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>increase<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ButtonGroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">dot</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>show<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>head-example<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Test</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var ButtonGroup = _button2.default.Group;var Test = _react2.default.createClass({
	      displayName: 'Test',
	      getInitialState: function getInitialState() {
	        return { count: 5, show: true };
	      },
	      increase: function increase() {
	        var count = this.state.count + 1;this.setState({ count: count });
	      },
	      decline: function decline() {
	        var count = this.state.count - 1;if (count < 0) {
	          count = 0;
	        }this.setState({ count: count });
	      },
	      onChange: function onChange(show) {
	        this.setState({
	          show: show
	        });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              _badge2.default,
	              { count: this.state.count },
	              _react2.default.createElement('a', { href: '#', className: 'head-example' })
	            ),
	            _react2.default.createElement(
	              ButtonGroup,
	              null,
	              _react2.default.createElement(
	                _button2.default,
	                { type: 'ghost', onClick: this.decline },
	                _react2.default.createElement(_icon2.default, { type: 'minus' })
	              ),
	              _react2.default.createElement(
	                _button2.default,
	                { type: 'ghost', onClick: this.increase },
	                _react2.default.createElement(_icon2.default, { type: 'plus' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { marginTop: 10 } },
	            _react2.default.createElement(
	              _badge2.default,
	              { dot: this.state.show },
	              _react2.default.createElement('a', { href: '#', className: 'head-example' })
	            ),
	            _react2.default.createElement(_switch2.default, { onChange: this.onChange })
	          )
	        );
	      }
	    });return _react2.default.createElement(Test, null);
	  }
	};

/***/ },

/***/ 1377:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(145);

	var _badge = __webpack_require__(144);

	var _badge2 = _interopRequireDefault(_badge);

	var _style4 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "没有具体的数字。"]],
	    "en-US": [["p", "This will simply display a red badge, without a specific count."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "讨嫌的小红点",
	      "en-US": "Red badge"
	    },
	    "filename": "components/badge/demo/dot.md",
	    "id": "components-badge-demo-dot"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Badge<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">dot</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>notification<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">dot</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link something<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _badge2.default,
	        { dot: true },
	        _react2.default.createElement(_icon2.default, { type: 'notification' })
	      ),
	      _react2.default.createElement(
	        _badge2.default,
	        { dot: true },
	        _react2.default.createElement(
	          'a',
	          { href: '#' },
	          'Link something'
	        )
	      )
	    );
	  },
	  "style": "\n.anticon-notification {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  font-size: 16px;\n}\n"
	};

/***/ },

/***/ 1378:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(145);

	var _badge = __webpack_require__(144);

	var _badge2 = _interopRequireDefault(_badge);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用 a 标签进行包裹即可。"]],
	    "en-US": [["p", "The badge can be wrapped with ", ["code", "a"], " tag to make it linkable."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "可点击",
	      "en-US": "Clickable"
	    },
	    "filename": "components/badge/demo/link.md",
	    "id": "components-badge-demo-link"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Badge <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>head-example<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'a',
	      { href: '#' },
	      _react2.default.createElement(
	        _badge2.default,
	        { count: 5 },
	        _react2.default.createElement('span', { className: 'head-example' })
	      )
	    );
	  }
	};

/***/ },

/***/ 1379:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(145);

	var _badge = __webpack_require__(144);

	var _badge2 = _interopRequireDefault(_badge);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "不包裹任何元素即是独立使用，可自定样式展现。"], ["blockquote", ["p", "在右上角的 badge 则限定为红色。"]]],
	    "en-US": [["p", "Used in standalone when children is empty."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "独立使用",
	      "en-US": "Standalone"
	    },
	    "filename": "components/badge/demo/no-wrapper.md",
	    "id": "components-badge-demo-no-wrapper"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Badge <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">25</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">4</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> backgroundColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#999'</span><span class=\"token punctuation\">,</span> borderColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#d9d9d9'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">109</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> backgroundColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#87d068'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_badge2.default, { count: 25 }),
	      _react2.default.createElement(_badge2.default, { count: 4, style: { backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9'
	        } }),
	      _react2.default.createElement(_badge2.default, { count: 109, style: { backgroundColor: '#87d068' } })
	    );
	  }
	};

/***/ },

/***/ 1380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(145);

	var _badge = __webpack_require__(144);

	var _badge2 = _interopRequireDefault(_badge);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "超过 ", ["code", "overflowCount"], " 的会显示为 ", ["code", "${overflowCount}+"], "，默认的 ", ["code", "overflowCount"], " 为 ", ["code", "99"], "。"]],
	    "en-US": [["p", ["code", "${overflowCount}+"], " is displayed when count is larger than ", ["code", "overflowCount"], ". The default value of ", ["code", "overflowCount"], " is ", ["code", "99"], "."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "封顶数字",
	      "en-US": "Overflow Count"
	    },
	    "filename": "components/badge/demo/overflow.md",
	    "id": "components-badge-demo-overflow"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Badge <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">99</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>head-example<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">100</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>head-example<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">99</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">overflowCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">10</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>head-example<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1000</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">overflowCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">999</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>head-example<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _badge2.default,
	        { count: 99 },
	        _react2.default.createElement('a', { href: '#', className: 'head-example' })
	      ),
	      _react2.default.createElement(
	        _badge2.default,
	        { count: 100 },
	        _react2.default.createElement('a', { href: '#', className: 'head-example' })
	      ),
	      _react2.default.createElement(
	        _badge2.default,
	        { count: 99, overflowCount: 10 },
	        _react2.default.createElement('a', { href: '#', className: 'head-example' })
	      ),
	      _react2.default.createElement(
	        _badge2.default,
	        { count: 1000, overflowCount: 999 },
	        _react2.default.createElement('a', { href: '#', className: 'head-example' })
	      )
	    );
	  }
	};

/***/ },

/***/ 1381:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(145);

	var _badge = __webpack_require__(144);

	var _badge2 = _interopRequireDefault(_badge);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用于表示状态的小圆点。"]],
	    "en-US": [["p", "Standalone badge with status."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "状态点",
	      "en-US": "Status"
	    },
	    "filename": "components/badge/demo/status.md",
	    "id": "components-badge-demo-status"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Badge <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>processing<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Default<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>processing<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Processing<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_badge2.default, { status: 'success' }),
	      _react2.default.createElement(_badge2.default, { status: 'error' }),
	      _react2.default.createElement(_badge2.default, { status: 'default' }),
	      _react2.default.createElement(_badge2.default, { status: 'processing' }),
	      _react2.default.createElement(_badge2.default, { status: 'warning' }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_badge2.default, { status: 'success', text: 'Success' }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_badge2.default, { status: 'error', text: 'Error' }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_badge2.default, { status: 'default', text: 'Default' }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_badge2.default, { status: 'processing', text: 'Processing' }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_badge2.default, { status: 'warning', text: 'Warning' })
	    );
	  }
	};

/***/ }

});