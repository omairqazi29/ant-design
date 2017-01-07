webpackJsonp([30,209],{

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1511),
	    'custom-trigger': __webpack_require__(1512),
	    'side': __webpack_require__(1513),
	    'top-side': __webpack_require__(1514),
	    'top': __webpack_require__(1515),
	}

/***/ },

/***/ 1511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(202);

	var _layout = __webpack_require__(201);

	var _layout2 = _interopRequireDefault(_layout);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "典型的页面布局。"]],
	    "en-US": [["p", "Classic page layouts."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本结构",
	      "en-US": "Basic Structure"
	    },
	    "filename": "components/layout/demo/basic.md",
	    "id": "components-layout-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Layout <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Header<span class=\"token punctuation\">,</span> Footer<span class=\"token punctuation\">,</span> Sider<span class=\"token punctuation\">,</span> Content <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Layout<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Header</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Header</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Footer</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Footer</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Header</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Header</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sider</span><span class=\"token punctuation\">></span></span>Sider<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sider</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Footer</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Footer</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Header</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Header</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sider</span><span class=\"token punctuation\">></span></span>Sider<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sider</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Footer</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Footer</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sider</span><span class=\"token punctuation\">></span></span>Sider<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sider</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Header</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Header</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Footer</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Footer</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Header = _layout2.default.Header,
	        Footer = _layout2.default.Footer,
	        Sider = _layout2.default.Sider,
	        Content = _layout2.default.Content;
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _layout2.default,
	        null,
	        _react2.default.createElement(
	          Header,
	          null,
	          'Header'
	        ),
	        _react2.default.createElement(
	          Content,
	          null,
	          'Content'
	        ),
	        _react2.default.createElement(
	          Footer,
	          null,
	          'Footer'
	        )
	      ),
	      _react2.default.createElement(
	        _layout2.default,
	        null,
	        _react2.default.createElement(
	          Header,
	          null,
	          'Header'
	        ),
	        _react2.default.createElement(
	          _layout2.default,
	          null,
	          _react2.default.createElement(
	            Sider,
	            null,
	            'Sider'
	          ),
	          _react2.default.createElement(
	            Content,
	            null,
	            'Content'
	          )
	        ),
	        _react2.default.createElement(
	          Footer,
	          null,
	          'Footer'
	        )
	      ),
	      _react2.default.createElement(
	        _layout2.default,
	        null,
	        _react2.default.createElement(
	          Header,
	          null,
	          'Header'
	        ),
	        _react2.default.createElement(
	          _layout2.default,
	          null,
	          _react2.default.createElement(
	            Content,
	            null,
	            'Content'
	          ),
	          _react2.default.createElement(
	            Sider,
	            null,
	            'Sider'
	          )
	        ),
	        _react2.default.createElement(
	          Footer,
	          null,
	          'Footer'
	        )
	      ),
	      _react2.default.createElement(
	        _layout2.default,
	        null,
	        _react2.default.createElement(
	          Sider,
	          null,
	          'Sider'
	        ),
	        _react2.default.createElement(
	          Content,
	          null,
	          _react2.default.createElement(
	            Header,
	            null,
	            'Header'
	          ),
	          _react2.default.createElement(
	            Content,
	            null,
	            'Content'
	          ),
	          _react2.default.createElement(
	            Footer,
	            null,
	            'Footer'
	          )
	        )
	      )
	    );
	  },
	  "style": "\n#components-layout-demo-basic .code-box-demo {\n  text-align: center;\n}\n#components-layout-demo-basic .ant-layout-header,\n#components-layout-demo-basic .ant-layout-footer {\n  background: #7dbcea;\n  color: #fff;\n}\n#components-layout-demo-basic .ant-layout-footer {\n  line-height: 1.5;\n}\n#components-layout-demo-basic .ant-layout-sider {\n  background: #3ba0e9;\n  color: #fff;\n  line-height: 120px;\n}\n#components-layout-demo-basic .ant-layout-content {\n  background: rgba(16, 142, 233, 1);\n  color: #fff;\n  min-height: 120px;\n  line-height: 120px;\n}\n#components-layout-demo-basic > .code-box-demo > div > .ant-layout {\n  margin-bottom: 48px;\n}\n#components-layout-demo-basic > .code-box-demo > div > .ant-layout:last-child {\n  margin: 0;\n}\n"
	};

/***/ },

/***/ 1512:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(31);

	var _menu = __webpack_require__(30);

	var _menu2 = _interopRequireDefault(_menu);

	var _style5 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style6 = __webpack_require__(202);

	var _layout = __webpack_require__(201);

	var _layout2 = _interopRequireDefault(_layout);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "要使用自定义触发器，可以设置 ", ["code", "trigger={null}"], " 来隐藏默认设定。"]],
	    "en-US": [["p", "If you want to use a customized trigger, you can hide the default one by setting ", ["code", "trigger={null}"], "."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "自定义触发器",
	      "en-US": "Custom trigger"
	    },
	    "filename": "components/layout/demo/custom-trigger.md",
	    "id": "components-layout-demo-custom-trigger"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Layout<span class=\"token punctuation\">,</span> Menu<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Header<span class=\"token punctuation\">,</span> Sider<span class=\"token punctuation\">,</span> Content <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Layout<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">SiderDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    collapsed<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  toggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      collapsed<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sider</span>\n          <span class=\"token attr-name\">trigger</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">collapsible</span>\n          <span class=\"token attr-name\">collapsed</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>logo<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dark<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>video-camera<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sider</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Header</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span>\n              <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>trigger<span class=\"token punctuation\">\"</span></span>\n              <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed <span class=\"token operator\">?</span> <span class=\"token string\">'menu-unfold'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'menu-fold'</span><span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>toggle<span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Header</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'24px 16px'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> minHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">280</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            Content\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SiderDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Header = _layout2.default.Header,
	        Sider = _layout2.default.Sider,
	        Content = _layout2.default.Content;

	    var SiderDemo = function (_React$Component) {
	      (0, _inherits3.default)(SiderDemo, _React$Component);

	      function SiderDemo() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, SiderDemo);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { collapsed: false
	        }, _this.toggle = function () {
	          _this.setState({ collapsed: !_this.state.collapsed });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      SiderDemo.prototype.render = function render() {
	        return _react2.default.createElement(
	          _layout2.default,
	          null,
	          _react2.default.createElement(
	            Sider,
	            { trigger: null, collapsible: true, collapsed: this.state.collapsed },
	            _react2.default.createElement('div', { className: 'logo' }),
	            _react2.default.createElement(
	              _menu2.default,
	              { theme: 'dark', mode: 'inline', defaultSelectedKeys: ['1'] },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '1' },
	                _react2.default.createElement(_icon2.default, { type: 'user' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  'nav 1'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '2' },
	                _react2.default.createElement(_icon2.default, { type: 'video-camera' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  'nav 2'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '3' },
	                _react2.default.createElement(_icon2.default, { type: 'upload' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  'nav 3'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _layout2.default,
	            null,
	            _react2.default.createElement(
	              Header,
	              { style: { background: '#fff', padding: 0 } },
	              _react2.default.createElement(_icon2.default, { className: 'trigger', type: this.state.collapsed ? 'menu-unfold' : 'menu-fold', onClick: this.toggle })
	            ),
	            _react2.default.createElement(
	              Content,
	              { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 } },
	              'Content'
	            )
	          )
	        );
	      };

	      return SiderDemo;
	    }(_react2.default.Component);

	    return _react2.default.createElement(SiderDemo, null);
	  },
	  "style": "#components-layout-demo-custom-trigger .trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 16px;\n  cursor: pointer;\n  transition: color .3s;\n}\n\n#components-layout-demo-custom-trigger .trigger:hover {\n  color: #108ee9;\n}\n\n#components-layout-demo-custom-trigger .logo {\n  height: 32px;\n  background: #333;\n  border-radius: 6px;\n  margin: 16px;\n}\n\n#components-layout-demo-custom-trigger .ant-layout-sider-collapsed .anticon {\n\tfont-size: 16px;\n}\n\n#components-layout-demo-custom-trigger .ant-layout-sider-collapsed .nav-text {\n\tdisplay: none;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-custom-trigger</span> <span class=\"token class\">.trigger</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">18</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> color <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-custom-trigger</span> <span class=\"token class\">.trigger</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#108ee9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-custom-trigger</span> <span class=\"token class\">.logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-custom-trigger</span> <span class=\"token class\">.ant-layout-sider-collapsed</span> <span class=\"token class\">.anticon</span> </span><span class=\"token punctuation\">{</span>\n\t<span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-custom-trigger</span> <span class=\"token class\">.ant-layout-sider-collapsed</span> <span class=\"token class\">.nav-text</span> </span><span class=\"token punctuation\">{</span>\n\t<span class=\"token property\">display</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1513:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(83);

	var _breadcrumb = __webpack_require__(82);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _style6 = __webpack_require__(31);

	var _menu = __webpack_require__(30);

	var _menu2 = _interopRequireDefault(_menu);

	var _style7 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style8 = __webpack_require__(202);

	var _layout = __webpack_require__(201);

	var _layout2 = _interopRequireDefault(_layout);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "多用在两列式布局。"]],
	    "en-US": [["p", "Be used in the two-columns layout."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "侧边布局",
	      "en-US": "Sider"
	    },
	    "filename": "components/layout/demo/side.md",
	    "id": "components-layout-demo-side"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Layout<span class=\"token punctuation\">,</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Header<span class=\"token punctuation\">,</span> Content<span class=\"token punctuation\">,</span> Footer<span class=\"token punctuation\">,</span> Sider <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Layout<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">SiderDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    collapsed<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  onCollapse <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>collapsed<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>collapsed<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> collapsed <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sider</span>\n          <span class=\"token attr-name\">collapsible</span>\n          <span class=\"token attr-name\">collapsed</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onCollapse</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onCollapse<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>logo<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dark<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>video-camera<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">4</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>5<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>heart-o<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">5</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>team<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sider</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Header</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'0 16px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'12px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>App<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> minHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">360</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              content\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Footer</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            Ant Design ©<span class=\"token number\">2016</span> Created by Ant UED\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Footer</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SiderDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Header = _layout2.default.Header,
	        Content = _layout2.default.Content,
	        Footer = _layout2.default.Footer,
	        Sider = _layout2.default.Sider;

	    var SiderDemo = function (_React$Component) {
	      (0, _inherits3.default)(SiderDemo, _React$Component);

	      function SiderDemo() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, SiderDemo);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { collapsed: false }, _this.onCollapse = function (collapsed) {
	          console.log(collapsed);_this.setState({ collapsed: collapsed });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      SiderDemo.prototype.render = function render() {
	        return _react2.default.createElement(
	          _layout2.default,
	          null,
	          _react2.default.createElement(
	            Sider,
	            { collapsible: true, collapsed: this.state.collapsed, onCollapse: this.onCollapse },
	            _react2.default.createElement('div', { className: 'logo' }),
	            _react2.default.createElement(
	              _menu2.default,
	              { theme: 'dark', mode: 'inline', defaultSelectedKeys: ['1'] },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '1' },
	                _react2.default.createElement(_icon2.default, { type: 'user' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  'nav 1'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '2' },
	                _react2.default.createElement(_icon2.default, { type: 'video-camera' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  'nav 2'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '3' },
	                _react2.default.createElement(_icon2.default, { type: 'upload' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  'nav 3'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '4' },
	                _react2.default.createElement(_icon2.default, { type: 'user' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  'nav 4'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '5' },
	                _react2.default.createElement(_icon2.default, { type: 'heart-o' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  'nav 5'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '6' },
	                _react2.default.createElement(_icon2.default, { type: 'team' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  'nav 6'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _layout2.default,
	            null,
	            _react2.default.createElement(Header, { style: { background: '#fff', padding: 0 } }),
	            _react2.default.createElement(
	              Content,
	              { style: { margin: '0 16px' } },
	              _react2.default.createElement(
	                _breadcrumb2.default,
	                { style: { margin: '12px 0' } },
	                _react2.default.createElement(
	                  _breadcrumb2.default.Item,
	                  null,
	                  'Home'
	                ),
	                _react2.default.createElement(
	                  _breadcrumb2.default.Item,
	                  null,
	                  'List'
	                ),
	                _react2.default.createElement(
	                  _breadcrumb2.default.Item,
	                  null,
	                  'App'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: { padding: 24, background: '#fff', minHeight: 360 } },
	                'content'
	              )
	            ),
	            _react2.default.createElement(
	              Footer,
	              { style: { textAlign: 'center' } },
	              'Ant Design \xA92016 Created by Ant UED'
	            )
	          )
	        );
	      };

	      return SiderDemo;
	    }(_react2.default.Component);

	    return _react2.default.createElement(SiderDemo, null);
	  },
	  "style": "#components-layout-demo-side .logo {\n  height: 32px;\n  background: #333;\n  border-radius: 6px;\n  margin: 16px;\n}\n\n#components-layout-demo-side .ant-layout-sider-collapsed .anticon {\n\tfont-size: 16px;\n}\n\n#components-layout-demo-side .ant-layout-sider-collapsed .nav-text {\n\tdisplay: none;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-side</span> <span class=\"token class\">.logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-side</span> <span class=\"token class\">.ant-layout-sider-collapsed</span> <span class=\"token class\">.anticon</span> </span><span class=\"token punctuation\">{</span>\n\t<span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-side</span> <span class=\"token class\">.ant-layout-sider-collapsed</span> <span class=\"token class\">.nav-text</span> </span><span class=\"token punctuation\">{</span>\n\t<span class=\"token property\">display</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1514:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style6 = __webpack_require__(83);

	var _breadcrumb = __webpack_require__(82);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _style7 = __webpack_require__(202);

	var _layout = __webpack_require__(201);

	var _layout2 = _interopRequireDefault(_layout);

	var _style8 = __webpack_require__(31);

	var _menu = __webpack_require__(30);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "多用在同时拥有顶部导航及侧边栏的页面。"]],
	    "en-US": [["p", "Be used in the page which has both the top navigation and the sidebar."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "顶部-侧边布局",
	      "en-US": "Header-Sider"
	    },
	    "filename": "components/layout/demo/top-side.md",
	    "id": "components-layout-demo-top-side"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Layout<span class=\"token punctuation\">,</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> SubMenu <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Header<span class=\"token punctuation\">,</span> Content<span class=\"token punctuation\">,</span> Footer<span class=\"token punctuation\">,</span> Sider <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Layout<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Header</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>header<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>logo<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span>\n        <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dark<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'2'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'64px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Header</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'0 50px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'12px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>App<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'24px 0'</span><span class=\"token punctuation\">,</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sider</span> <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">200</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span>\n            <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">defaultOpenKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>subnav <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option1<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option3<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>laptop<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>subnav <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>5<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option5<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>7<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option7<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option8<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub3<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>notification<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>subnav <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>9<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option9<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>10<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option10<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>11<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option11<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>12<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>option12<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sider</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'0 24px'</span><span class=\"token punctuation\">,</span> minHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">280</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Content\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Footer</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Ant Design ©<span class=\"token number\">2016</span> Created by Ant UED\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Footer</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;
	    var Header = _layout2.default.Header,
	        Content = _layout2.default.Content,
	        Footer = _layout2.default.Footer,
	        Sider = _layout2.default.Sider;
	    return _react2.default.createElement(
	      _layout2.default,
	      null,
	      _react2.default.createElement(
	        Header,
	        { className: 'header' },
	        _react2.default.createElement('div', { className: 'logo' }),
	        _react2.default.createElement(
	          _menu2.default,
	          { theme: 'dark', mode: 'horizontal', defaultSelectedKeys: ['2'], style: { lineHeight: '64px' } },
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '1' },
	            'nav 1'
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '2' },
	            'nav 2'
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '3' },
	            'nav 3'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        Content,
	        { style: { padding: '0 50px' } },
	        _react2.default.createElement(
	          _breadcrumb2.default,
	          { style: { margin: '12px 0' } },
	          _react2.default.createElement(
	            _breadcrumb2.default.Item,
	            null,
	            'Home'
	          ),
	          _react2.default.createElement(
	            _breadcrumb2.default.Item,
	            null,
	            'List'
	          ),
	          _react2.default.createElement(
	            _breadcrumb2.default.Item,
	            null,
	            'App'
	          )
	        ),
	        _react2.default.createElement(
	          _layout2.default,
	          { style: { padding: '24px 0', background: '#fff' } },
	          _react2.default.createElement(
	            Sider,
	            { width: 200 },
	            _react2.default.createElement(
	              _menu2.default,
	              { mode: 'inline', defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'] },
	              _react2.default.createElement(
	                SubMenu,
	                { key: 'sub1', title: _react2.default.createElement(
	                    'span',
	                    null,
	                    _react2.default.createElement(_icon2.default, { type: 'user' }),
	                    'subnav 1'
	                  ) },
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '1' },
	                  'option1'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '2' },
	                  'option2'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '3' },
	                  'option3'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '4' },
	                  'option4'
	                )
	              ),
	              _react2.default.createElement(
	                SubMenu,
	                { key: 'sub2', title: _react2.default.createElement(
	                    'span',
	                    null,
	                    _react2.default.createElement(_icon2.default, { type: 'laptop' }),
	                    'subnav 2'
	                  ) },
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '5' },
	                  'option5'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '6' },
	                  'option6'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '7' },
	                  'option7'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '8' },
	                  'option8'
	                )
	              ),
	              _react2.default.createElement(
	                SubMenu,
	                { key: 'sub3', title: _react2.default.createElement(
	                    'span',
	                    null,
	                    _react2.default.createElement(_icon2.default, { type: 'notification' }),
	                    'subnav 3'
	                  ) },
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '9' },
	                  'option9'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '10' },
	                  'option10'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '11' },
	                  'option11'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '12' },
	                  'option12'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            Content,
	            { style: { padding: '0 24px', minHeight: 280 } },
	            'Content'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        Footer,
	        { style: { textAlign: 'center' } },
	        'Ant Design \xA92016 Created by Ant UED'
	      )
	    );
	  },
	  "style": "#components-layout-demo-top-side .logo {\n  width: 120px;\n  height: 31px;\n  background: #333;\n  border-radius: 6px;\n  margin: 16px 28px 16px 0;\n  float: left;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-top-side</span> <span class=\"token class\">.logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">31</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">28</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1515:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(83);

	var _breadcrumb = __webpack_require__(82);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _style5 = __webpack_require__(31);

	var _menu = __webpack_require__(30);

	var _menu2 = _interopRequireDefault(_menu);

	var _style6 = __webpack_require__(202);

	var _layout = __webpack_require__(201);

	var _layout2 = _interopRequireDefault(_layout);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最基本的『上-中-下』布局。"]],
	    "en-US": [["p", "The most basic \"header-content-footer\" layout."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "上中下布局",
	      "en-US": "Header-Content-Footer"
	    },
	    "filename": "components/layout/demo/top.md",
	    "id": "components-layout-demo-top"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Layout<span class=\"token punctuation\">,</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Header<span class=\"token punctuation\">,</span> Content<span class=\"token punctuation\">,</span> Footer <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Layout<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Layout</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Header</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>logo<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span>\n        <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dark<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'2'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'64px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>nav <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Header</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Content</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'0 50px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'12px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>App<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span> minHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">280</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Content</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Footer</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Ant Design ©<span class=\"token number\">2016</span> Created by Ant UED\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Footer</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Layout</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Header = _layout2.default.Header,
	        Content = _layout2.default.Content,
	        Footer = _layout2.default.Footer;
	    return _react2.default.createElement(
	      _layout2.default,
	      { className: 'layout' },
	      _react2.default.createElement(
	        Header,
	        null,
	        _react2.default.createElement('div', { className: 'logo' }),
	        _react2.default.createElement(
	          _menu2.default,
	          { theme: 'dark', mode: 'horizontal', defaultSelectedKeys: ['2'], style: { lineHeight: '64px' } },
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '1' },
	            'nav 1'
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '2' },
	            'nav 2'
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '3' },
	            'nav 3'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        Content,
	        { style: { padding: '0 50px' } },
	        _react2.default.createElement(
	          _breadcrumb2.default,
	          { style: { margin: '12px 0'
	            } },
	          _react2.default.createElement(
	            _breadcrumb2.default.Item,
	            null,
	            'Home'
	          ),
	          _react2.default.createElement(
	            _breadcrumb2.default.Item,
	            null,
	            'List'
	          ),
	          _react2.default.createElement(
	            _breadcrumb2.default.Item,
	            null,
	            'App'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { background: '#fff', padding: 24, minHeight: 280 } },
	          'Content'
	        )
	      ),
	      _react2.default.createElement(
	        Footer,
	        { style: { textAlign: 'center' } },
	        'Ant Design \xA92016 Created by Ant UED'
	      )
	    );
	  },
	  "style": "#components-layout-demo-top .logo {\n  width: 120px;\n  height: 31px;\n  background: #333;\n  border-radius: 6px;\n  margin: 16px 24px 16px 0;\n  float: left;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-top</span> <span class=\"token class\">.logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">31</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ }

});