webpackJsonp([30,211],{

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "典型的页面布局。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Classic page layouts."
	      ]
	    ]
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
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Layout } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { Header<span class=\"token punctuation\">,</span> Footer<span class=\"token punctuation\">,</span> Sider<span class=\"token punctuation\">,</span> Content } <span class=\"token operator\">=</span> Layout<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n<span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Header<span class=\"token operator\">></span>Header<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Header<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Content<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Content<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Footer<span class=\"token operator\">></span>Footer<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Footer<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n\n  <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Header<span class=\"token operator\">></span>Header<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Header<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Sider<span class=\"token operator\">></span>Sider<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Sider<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Content<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Content<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Footer<span class=\"token operator\">></span>Footer<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Footer<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n\n  <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Header<span class=\"token operator\">></span>Header<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Header<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Content<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Content<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Sider<span class=\"token operator\">></span>Sider<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Sider<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Footer<span class=\"token operator\">></span>Footer<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Footer<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n\n  <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Sider<span class=\"token operator\">></span>Sider<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Sider<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Content<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Header<span class=\"token operator\">></span>Header<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Header<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Content<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Content<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Footer<span class=\"token operator\">></span>Footer<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Footer<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Content<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Header = _antd.Layout.Header,
	      Footer = _antd.Layout.Footer,
	      Sider = _antd.Layout.Sider,
	      Content = _antd.Layout.Content;
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Layout,
	      null,
	      React.createElement(
	        Header,
	        null,
	        "Header"
	      ),
	      React.createElement(
	        Content,
	        null,
	        "Content"
	      ),
	      React.createElement(
	        Footer,
	        null,
	        "Footer"
	      )
	    ),
	    React.createElement(
	      _antd.Layout,
	      null,
	      React.createElement(
	        Header,
	        null,
	        "Header"
	      ),
	      React.createElement(
	        _antd.Layout,
	        null,
	        React.createElement(
	          Sider,
	          null,
	          "Sider"
	        ),
	        React.createElement(
	          Content,
	          null,
	          "Content"
	        )
	      ),
	      React.createElement(
	        Footer,
	        null,
	        "Footer"
	      )
	    ),
	    React.createElement(
	      _antd.Layout,
	      null,
	      React.createElement(
	        Header,
	        null,
	        "Header"
	      ),
	      React.createElement(
	        _antd.Layout,
	        null,
	        React.createElement(
	          Content,
	          null,
	          "Content"
	        ),
	        React.createElement(
	          Sider,
	          null,
	          "Sider"
	        )
	      ),
	      React.createElement(
	        Footer,
	        null,
	        "Footer"
	      )
	    ),
	    React.createElement(
	      _antd.Layout,
	      null,
	      React.createElement(
	        Sider,
	        null,
	        "Sider"
	      ),
	      React.createElement(
	        Content,
	        null,
	        React.createElement(
	          Header,
	          null,
	          "Header"
	        ),
	        React.createElement(
	          Content,
	          null,
	          "Content"
	        ),
	        React.createElement(
	          Footer,
	          null,
	          "Footer"
	        )
	      )
	    )
	  );
	},
	  "style": "\n#components-layout-demo-basic .code-box-demo {\n  text-align: center;\n}\n#components-layout-demo-basic .ant-layout-header,\n#components-layout-demo-basic .ant-layout-footer {\n  background: #7dbcea;\n  color: #fff;\n}\n#components-layout-demo-basic .ant-layout-footer {\n  line-height: 1.5;\n}\n#components-layout-demo-basic .ant-layout-sider {\n  background: #3ba0e9;\n  color: #fff;\n  line-height: 120px;\n}\n#components-layout-demo-basic .ant-layout-content {\n  background: rgba(16, 142, 233, 1);\n  color: #fff;\n  min-height: 120px;\n  line-height: 120px;\n}\n#components-layout-demo-basic > .code-box-demo > div > .ant-layout {\n  margin-bottom: 48px;\n}\n#components-layout-demo-basic > .code-box-demo > div > .ant-layout:last-child {\n  margin: 0;\n}\n"
	};

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "要使用自定义触发器，可以设置 ",
	        [
	          "code",
	          "trigger={null}"
	        ],
	        " 来隐藏默认设定。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "If you want to use a customized trigger, you can hide the default one by setting ",
	        [
	          "code",
	          "trigger={null}"
	        ],
	        "."
	      ]
	    ]
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
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Layout<span class=\"token punctuation\">,</span> Menu<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { Header<span class=\"token punctuation\">,</span> Sider<span class=\"token punctuation\">,</span> Content } <span class=\"token operator\">=</span> Layout<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass SiderDemo extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    collapsed<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  toggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      collapsed<span class=\"token punctuation\">:</span> !this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Sider\n          trigger<span class=\"token operator\">=</span>{<span class=\"token keyword\">null</span>}\n          collapsible\n          collapsed<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed}\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"logo\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span> mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span> defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"video-camera\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"upload\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Sider<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Header style<span class=\"token operator\">=</span>{{ background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> }}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Icon\n              className<span class=\"token operator\">=</span><span class=\"token string\">\"trigger\"</span>\n              type<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed <span class=\"token operator\">?</span> <span class=\"token string\">'menu-unfold'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'menu-fold'</span>}\n              onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>toggle}\n            <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Header<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Content style<span class=\"token operator\">=</span>{{ margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'24px 16px'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> minHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">280</span> }}<span class=\"token operator\">></span>\n            Content\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Content<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>SiderDemo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var Header = _antd.Layout.Header,
	      Sider = _antd.Layout.Sider,
	      Content = _antd.Layout.Content;

	  var SiderDemo = function (_React$Component) {
	    _inherits(SiderDemo, _React$Component);

	    function SiderDemo() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, SiderDemo);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        collapsed: false
	      }, _this.toggle = function () {
	        _this.setState({
	          collapsed: !_this.state.collapsed
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    SiderDemo.prototype.render = function render() {
	      return React.createElement(
	        _antd.Layout,
	        null,
	        React.createElement(
	          Sider,
	          {
	            trigger: null,
	            collapsible: true,
	            collapsed: this.state.collapsed
	          },
	          React.createElement("div", {
	            className: "logo"
	          }),
	          React.createElement(
	            _antd.Menu,
	            {
	              theme: "dark",
	              mode: "inline",
	              defaultSelectedKeys: ['1']
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "1"
	              },
	              React.createElement(_antd.Icon, {
	                type: "user"
	              }),
	              React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "nav 1"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              React.createElement(_antd.Icon, {
	                type: "video-camera"
	              }),
	              React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "nav 2"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              React.createElement(_antd.Icon, {
	                type: "upload"
	              }),
	              React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "nav 3"
	              )
	            )
	          )
	        ),
	        React.createElement(
	          _antd.Layout,
	          null,
	          React.createElement(
	            Header,
	            {
	              style: {
	                background: '#fff',
	                padding: 0
	              }
	            },
	            React.createElement(_antd.Icon, {
	              className: "trigger",
	              type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
	              onClick: this.toggle
	            })
	          ),
	          React.createElement(
	            Content,
	            {
	              style: {
	                margin: '24px 16px',
	                padding: 24,
	                background: '#fff',
	                minHeight: 280
	              }
	            },
	            "Content"
	          )
	        )
	      );
	    };

	    return SiderDemo;
	  }(React.Component);

	  return React.createElement(SiderDemo, null);
	},
	  "style": "#components-layout-demo-custom-trigger .trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 16px;\n  cursor: pointer;\n  transition: color .3s;\n}\n\n#components-layout-demo-custom-trigger .trigger:hover {\n  color: #108ee9;\n}\n\n#components-layout-demo-custom-trigger .logo {\n  height: 32px;\n  background: #333;\n  border-radius: 6px;\n  margin: 16px;\n}\n\n#components-layout-demo-custom-trigger .ant-layout-sider-collapsed .anticon {\n  font-size: 16px;\n}\n\n#components-layout-demo-custom-trigger .ant-layout-sider-collapsed .nav-text {\n  display: none;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-custom-trigger</span> <span class=\"token class\">.trigger</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">18</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> color <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-custom-trigger</span> <span class=\"token class\">.trigger</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#108ee9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-custom-trigger</span> <span class=\"token class\">.logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-custom-trigger</span> <span class=\"token class\">.ant-layout-sider-collapsed</span> <span class=\"token class\">.anticon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-custom-trigger</span> <span class=\"token class\">.ant-layout-sider-collapsed</span> <span class=\"token class\">.nav-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "多用在两列式布局。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Be used in the two-columns layout."
	      ]
	    ]
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
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Layout<span class=\"token punctuation\">,</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { Header<span class=\"token punctuation\">,</span> Content<span class=\"token punctuation\">,</span> Footer<span class=\"token punctuation\">,</span> Sider } <span class=\"token operator\">=</span> Layout<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass SiderDemo extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    collapsed<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  onCollapse <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>collapsed<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>collapsed<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ collapsed }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Sider\n          collapsible\n          collapsed<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapsed}\n          onCollapse<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onCollapse}\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"logo\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span> mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span> defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"video-camera\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"upload\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"heart-o\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"team\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Sider<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Header style<span class=\"token operator\">=</span>{{ background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Content style<span class=\"token operator\">=</span>{{ margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'0 16px'</span> }}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Breadcrumb style<span class=\"token operator\">=</span>{{ margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'12px 0'</span> }}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Home<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>List<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>App<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ padding<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> minHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">360</span> }}<span class=\"token operator\">></span>\n              content\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Content<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Footer style<span class=\"token operator\">=</span>{{ textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span> }}<span class=\"token operator\">></span>\n            Ant Design ©<span class=\"token number\">2016</span> Created by Ant UED\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Footer<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>SiderDemo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var Header = _antd.Layout.Header,
	      Content = _antd.Layout.Content,
	      Footer = _antd.Layout.Footer,
	      Sider = _antd.Layout.Sider;

	  var SiderDemo = function (_React$Component) {
	    _inherits(SiderDemo, _React$Component);

	    function SiderDemo() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, SiderDemo);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        collapsed: false
	      }, _this.onCollapse = function (collapsed) {
	        console.log(collapsed);

	        _this.setState({
	          collapsed: collapsed
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    SiderDemo.prototype.render = function render() {
	      return React.createElement(
	        _antd.Layout,
	        null,
	        React.createElement(
	          Sider,
	          {
	            collapsible: true,
	            collapsed: this.state.collapsed,
	            onCollapse: this.onCollapse
	          },
	          React.createElement("div", {
	            className: "logo"
	          }),
	          React.createElement(
	            _antd.Menu,
	            {
	              theme: "dark",
	              mode: "inline",
	              defaultSelectedKeys: ['1']
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "1"
	              },
	              React.createElement(_antd.Icon, {
	                type: "user"
	              }),
	              React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "nav 1"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              React.createElement(_antd.Icon, {
	                type: "video-camera"
	              }),
	              React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "nav 2"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              React.createElement(_antd.Icon, {
	                type: "upload"
	              }),
	              React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "nav 3"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "4"
	              },
	              React.createElement(_antd.Icon, {
	                type: "user"
	              }),
	              React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "nav 4"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "5"
	              },
	              React.createElement(_antd.Icon, {
	                type: "heart-o"
	              }),
	              React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "nav 5"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "6"
	              },
	              React.createElement(_antd.Icon, {
	                type: "team"
	              }),
	              React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "nav 6"
	              )
	            )
	          )
	        ),
	        React.createElement(
	          _antd.Layout,
	          null,
	          React.createElement(Header, {
	            style: {
	              background: '#fff',
	              padding: 0
	            }
	          }),
	          React.createElement(
	            Content,
	            {
	              style: {
	                margin: '0 16px'
	              }
	            },
	            React.createElement(
	              _antd.Breadcrumb,
	              {
	                style: {
	                  margin: '12px 0'
	                }
	              },
	              React.createElement(
	                _antd.Breadcrumb.Item,
	                null,
	                "Home"
	              ),
	              React.createElement(
	                _antd.Breadcrumb.Item,
	                null,
	                "List"
	              ),
	              React.createElement(
	                _antd.Breadcrumb.Item,
	                null,
	                "App"
	              )
	            ),
	            React.createElement(
	              "div",
	              {
	                style: {
	                  padding: 24,
	                  background: '#fff',
	                  minHeight: 360
	                }
	              },
	              "content"
	            )
	          ),
	          React.createElement(
	            Footer,
	            {
	              style: {
	                textAlign: 'center'
	              }
	            },
	            "Ant Design ©2016 Created by Ant UED"
	          )
	        )
	      );
	    };

	    return SiderDemo;
	  }(React.Component);

	  return React.createElement(SiderDemo, null);
	},
	  "style": "#components-layout-demo-side .logo {\n  height: 32px;\n  background: #333;\n  border-radius: 6px;\n  margin: 16px;\n}\n\n#components-layout-demo-side .ant-layout-sider-collapsed .anticon {\n  font-size: 16px;\n}\n\n#components-layout-demo-side .ant-layout-sider-collapsed .nav-text {\n  display: none;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-side</span> <span class=\"token class\">.logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-side</span> <span class=\"token class\">.ant-layout-sider-collapsed</span> <span class=\"token class\">.anticon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-side</span> <span class=\"token class\">.ant-layout-sider-collapsed</span> <span class=\"token class\">.nav-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "多用在同时拥有顶部导航及侧边栏的页面。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Be used in the page which has both the top navigation and the sidebar."
	      ]
	    ]
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
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Layout<span class=\"token punctuation\">,</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { SubMenu } <span class=\"token operator\">=</span> Menu<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { Header<span class=\"token punctuation\">,</span> Content<span class=\"token punctuation\">,</span> Footer<span class=\"token punctuation\">,</span> Sider } <span class=\"token operator\">=</span> Layout<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Layout<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Header className<span class=\"token operator\">=</span><span class=\"token string\">\"header\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"logo\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Menu\n        theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span>\n        mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n        defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'2'</span><span class=\"token punctuation\">]</span>}\n        style<span class=\"token operator\">=</span>{{ lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'64px'</span> }}\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Header<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Content style<span class=\"token operator\">=</span>{{ padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'0 50px'</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Breadcrumb style<span class=\"token operator\">=</span>{{ margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'12px 0'</span> }}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Home<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>List<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>App<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Layout style<span class=\"token operator\">=</span>{{ padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'24px 0'</span><span class=\"token punctuation\">,</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span> }}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Sider width<span class=\"token operator\">=</span>{<span class=\"token number\">200</span>} style<span class=\"token operator\">=</span>{{ background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu\n            mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span>\n            defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>}\n            defaultOpenKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span>}\n            style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> }}\n          <span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub1\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>subnav <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>option1<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>option2<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>option3<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>option4<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub2\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"laptop\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>subnav <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>option5<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>option6<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>option7<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>option8<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub3\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"notification\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>subnav <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>option9<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"10\"</span><span class=\"token operator\">></span>option10<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"11\"</span><span class=\"token operator\">></span>option11<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"12\"</span><span class=\"token operator\">></span>option12<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Sider<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Content style<span class=\"token operator\">=</span>{{ padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'0 24px'</span><span class=\"token punctuation\">,</span> minHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">280</span> }}<span class=\"token operator\">></span>\n          Content\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Content<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Content<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Footer style<span class=\"token operator\">=</span>{{ textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span> }}<span class=\"token operator\">></span>\n      Ant Design ©<span class=\"token number\">2016</span> Created by Ant UED\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Footer<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var SubMenu = _antd.Menu.SubMenu;
	  var Header = _antd.Layout.Header,
	      Content = _antd.Layout.Content,
	      Footer = _antd.Layout.Footer,
	      Sider = _antd.Layout.Sider;
	  return React.createElement(
	    _antd.Layout,
	    null,
	    React.createElement(
	      Header,
	      {
	        className: "header"
	      },
	      React.createElement("div", {
	        className: "logo"
	      }),
	      React.createElement(
	        _antd.Menu,
	        {
	          theme: "dark",
	          mode: "horizontal",
	          defaultSelectedKeys: ['2'],
	          style: {
	            lineHeight: '64px'
	          }
	        },
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "1"
	          },
	          "nav 1"
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "2"
	          },
	          "nav 2"
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "3"
	          },
	          "nav 3"
	        )
	      )
	    ),
	    React.createElement(
	      Content,
	      {
	        style: {
	          padding: '0 50px'
	        }
	      },
	      React.createElement(
	        _antd.Breadcrumb,
	        {
	          style: {
	            margin: '12px 0'
	          }
	        },
	        React.createElement(
	          _antd.Breadcrumb.Item,
	          null,
	          "Home"
	        ),
	        React.createElement(
	          _antd.Breadcrumb.Item,
	          null,
	          "List"
	        ),
	        React.createElement(
	          _antd.Breadcrumb.Item,
	          null,
	          "App"
	        )
	      ),
	      React.createElement(
	        _antd.Layout,
	        {
	          style: {
	            padding: '24px 0',
	            background: '#fff'
	          }
	        },
	        React.createElement(
	          Sider,
	          {
	            width: 200,
	            style: {
	              background: '#fff'
	            }
	          },
	          React.createElement(
	            _antd.Menu,
	            {
	              mode: "inline",
	              defaultSelectedKeys: ['1'],
	              defaultOpenKeys: ['sub1'],
	              style: {
	                height: '100%'
	              }
	            },
	            React.createElement(
	              SubMenu,
	              {
	                key: "sub1",
	                title: React.createElement(
	                  "span",
	                  null,
	                  React.createElement(_antd.Icon, {
	                    type: "user"
	                  }),
	                  "subnav 1"
	                )
	              },
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "1"
	                },
	                "option1"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "2"
	                },
	                "option2"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "3"
	                },
	                "option3"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "4"
	                },
	                "option4"
	              )
	            ),
	            React.createElement(
	              SubMenu,
	              {
	                key: "sub2",
	                title: React.createElement(
	                  "span",
	                  null,
	                  React.createElement(_antd.Icon, {
	                    type: "laptop"
	                  }),
	                  "subnav 2"
	                )
	              },
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "5"
	                },
	                "option5"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "6"
	                },
	                "option6"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "7"
	                },
	                "option7"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "8"
	                },
	                "option8"
	              )
	            ),
	            React.createElement(
	              SubMenu,
	              {
	                key: "sub3",
	                title: React.createElement(
	                  "span",
	                  null,
	                  React.createElement(_antd.Icon, {
	                    type: "notification"
	                  }),
	                  "subnav 3"
	                )
	              },
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "9"
	                },
	                "option9"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "10"
	                },
	                "option10"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "11"
	                },
	                "option11"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "12"
	                },
	                "option12"
	              )
	            )
	          )
	        ),
	        React.createElement(
	          Content,
	          {
	            style: {
	              padding: '0 24px',
	              minHeight: 280
	            }
	          },
	          "Content"
	        )
	      )
	    ),
	    React.createElement(
	      Footer,
	      {
	        style: {
	          textAlign: 'center'
	        }
	      },
	      "Ant Design ©2016 Created by Ant UED"
	    )
	  );
	},
	  "style": "#components-layout-demo-top-side .logo {\n  width: 120px;\n  height: 31px;\n  background: #333;\n  border-radius: 6px;\n  margin: 16px 28px 16px 0;\n  float: left;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-top-side</span> <span class=\"token class\">.logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">31</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">28</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "最基本的『上-中-下』布局。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The most basic \"header-content-footer\" layout."
	      ]
	    ]
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
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Layout<span class=\"token punctuation\">,</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { Header<span class=\"token punctuation\">,</span> Content<span class=\"token punctuation\">,</span> Footer } <span class=\"token operator\">=</span> Layout<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Layout className<span class=\"token operator\">=</span><span class=\"token string\">\"layout\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Header<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"logo\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Menu\n        theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span>\n        mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n        defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'2'</span><span class=\"token punctuation\">]</span>}\n        style<span class=\"token operator\">=</span>{{ lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'64px'</span> }}\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>nav <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Header<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Content style<span class=\"token operator\">=</span>{{ padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'0 50px'</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Breadcrumb style<span class=\"token operator\">=</span>{{ margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'12px 0'</span> }}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Home<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>List<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>App<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span> minHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">280</span> }}<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Content<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Footer style<span class=\"token operator\">=</span>{{ textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span> }}<span class=\"token operator\">></span>\n      Ant Design ©<span class=\"token number\">2016</span> Created by Ant UED\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Footer<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Layout<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Header = _antd.Layout.Header,
	      Content = _antd.Layout.Content,
	      Footer = _antd.Layout.Footer;
	  return React.createElement(
	    _antd.Layout,
	    {
	      className: "layout"
	    },
	    React.createElement(
	      Header,
	      null,
	      React.createElement("div", {
	        className: "logo"
	      }),
	      React.createElement(
	        _antd.Menu,
	        {
	          theme: "dark",
	          mode: "horizontal",
	          defaultSelectedKeys: ['2'],
	          style: {
	            lineHeight: '64px'
	          }
	        },
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "1"
	          },
	          "nav 1"
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "2"
	          },
	          "nav 2"
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "3"
	          },
	          "nav 3"
	        )
	      )
	    ),
	    React.createElement(
	      Content,
	      {
	        style: {
	          padding: '0 50px'
	        }
	      },
	      React.createElement(
	        _antd.Breadcrumb,
	        {
	          style: {
	            margin: '12px 0'
	          }
	        },
	        React.createElement(
	          _antd.Breadcrumb.Item,
	          null,
	          "Home"
	        ),
	        React.createElement(
	          _antd.Breadcrumb.Item,
	          null,
	          "List"
	        ),
	        React.createElement(
	          _antd.Breadcrumb.Item,
	          null,
	          "App"
	        )
	      ),
	      React.createElement(
	        "div",
	        {
	          style: {
	            background: '#fff',
	            padding: 24,
	            minHeight: 280
	          }
	        },
	        "Content"
	      )
	    ),
	    React.createElement(
	      Footer,
	      {
	        style: {
	          textAlign: 'center'
	        }
	      },
	      "Ant Design ©2016 Created by Ant UED"
	    )
	  );
	},
	  "style": "#components-layout-demo-top .logo {\n  width: 120px;\n  height: 31px;\n  background: #333;\n  border-radius: 6px;\n  margin: 16px 24px 16px 0;\n  float: left;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-layout-demo-top</span> <span class=\"token class\">.logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">31</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1050:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(724),
	    'custom-trigger': __webpack_require__(725),
	    'side': __webpack_require__(726),
	    'top-side': __webpack_require__(727),
	    'top': __webpack_require__(728),
	}

/***/ }

});