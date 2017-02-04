webpackJsonp([25,211],{

/***/ 1006:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "页面横向空间有限时使用。侧边导航默认收起，点击底部按钮时展开。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "This pattern is used when the horizontal space is limited. By default, Aside navigation is collapsed. You can click the button at the bottom to expand it."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "可收起展开的侧边导航",
	      "en-US": "Collapsed aside"
	    },
	    "filename": "docs/spec/layout/demo/aside-collapse.md",
	    "id": "docs-spec-layout-demo-aside-collapse"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport BrowserDemo from <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> AsideCollapse <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      collapse<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onCollapseChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      collapse<span class=\"token punctuation\">:</span> !this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapse<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> collapse <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapse<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span>{collapse <span class=\"token operator\">?</span> <span class=\"token string\">\"layout-aside layout-aside-collapse\"</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">\"layout-aside\"</span>}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>aside className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-sider\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-logo\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span> theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span> defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'user'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              {!collapse <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              {!collapse <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"laptop\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"laptop\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              {!collapse <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"notification\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"notification\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              {!collapse <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"folder\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"folder\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              {!collapse <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"aside-action\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onCollapseChange}<span class=\"token operator\">></span>\n            {collapse <span class=\"token operator\">?</span> <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"right\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span> <span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"left\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>aside<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-main\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-header\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-container\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Home<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>App list<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Any app<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-content\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">220</span> }}<span class=\"token operator\">></span>\n                Contents\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-footer\"</span><span class=\"token operator\">></span>\n            Ant Design all rights reserved © <span class=\"token number\">2015</span> Created by Ant UED\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>BrowserDemo<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>AsideCollapse <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BrowserDemo<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _BrowserDemo = __webpack_require__(88);

	  var _BrowserDemo2 = _interopRequireDefault(_BrowserDemo);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  var SubMenu = _antd.Menu.SubMenu;
	  var AsideCollapse = React.createClass({
	    displayName: "AsideCollapse",
	    getInitialState: function getInitialState() {
	      return {
	        collapse: true
	      };
	    },
	    onCollapseChange: function onCollapseChange() {
	      this.setState({
	        collapse: !this.state.collapse
	      });
	    },
	    render: function render() {
	      var collapse = this.state.collapse;
	      return React.createElement(
	        "div",
	        {
	          className: collapse ? "layout-aside layout-aside-collapse" : "layout-aside"
	        },
	        React.createElement(
	          "aside",
	          {
	            className: "layout-sider"
	          },
	          React.createElement("div", {
	            className: "layout-logo"
	          }),
	          React.createElement(
	            _antd.Menu,
	            {
	              mode: "inline",
	              theme: "dark",
	              defaultSelectedKeys: ['user']
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "user"
	              },
	              React.createElement(_antd.Icon, {
	                type: "user"
	              }),
	              !collapse && React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "Navigation 1"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "setting"
	              },
	              React.createElement(_antd.Icon, {
	                type: "setting"
	              }),
	              !collapse && React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "Navigation 2"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "laptop"
	              },
	              React.createElement(_antd.Icon, {
	                type: "laptop"
	              }),
	              !collapse && React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "Navigation 3"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "notification"
	              },
	              React.createElement(_antd.Icon, {
	                type: "notification"
	              }),
	              !collapse && React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "Navigation 4"
	              )
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "folder"
	              },
	              React.createElement(_antd.Icon, {
	                type: "folder"
	              }),
	              !collapse && React.createElement(
	                "span",
	                {
	                  className: "nav-text"
	                },
	                "Navigation 5"
	              )
	            )
	          ),
	          React.createElement(
	            "div",
	            {
	              className: "aside-action",
	              onClick: this.onCollapseChange
	            },
	            collapse ? React.createElement(_antd.Icon, {
	              type: "right"
	            }) : React.createElement(_antd.Icon, {
	              type: "left"
	            })
	          )
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "layout-main"
	          },
	          React.createElement("div", {
	            className: "layout-header"
	          }),
	          React.createElement(
	            "div",
	            {
	              className: "layout-container"
	            },
	            React.createElement(
	              _antd.Breadcrumb,
	              null,
	              React.createElement(
	                _antd.Breadcrumb.Item,
	                null,
	                "Home"
	              ),
	              React.createElement(
	                _antd.Breadcrumb.Item,
	                null,
	                "App list"
	              ),
	              React.createElement(
	                _antd.Breadcrumb.Item,
	                null,
	                "Any app"
	              )
	            ),
	            React.createElement(
	              "div",
	              {
	                className: "layout-content"
	              },
	              React.createElement(
	                "div",
	                {
	                  style: {
	                    height: 220
	                  }
	                },
	                "Contents"
	              )
	            )
	          ),
	          React.createElement(
	            "div",
	            {
	              className: "layout-footer"
	            },
	            "Ant Design all rights reserved © 2015 Created by Ant UED"
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(
	    _BrowserDemo2.default,
	    null,
	    React.createElement(AsideCollapse, null)
	  );
	},
	  "style": ".layout-aside {\n  position: relative;\n  min-height: 100%;\n}\n\n.layout-aside .layout-logo {\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px;\n  transition: all .3s;\n}\n\n.layout-aside-collapse .layout-logo {\n  width: 32px;\n  margin: 16px;\n  transition: all .3s;\n}\n\n.layout-aside .layout-sider {\n  width: 224px;\n  background: #404040;\n  position: absolute;\n  overflow: visible;\n  padding-bottom: 24px;\n  height: 100%;\n  transition: all .3s;\n}\n\n.layout-aside-collapse .layout-sider {\n  width: 64px;\n  transition: all .3s;\n}\n\n.layout-aside .layout-sider > .menu {\n  margin-bottom: 20px;\n}\n\n.layout-aside .layout-sider > .menu > .menu-item {\n  margin: 16px 0;\n}\n\n.layout-aside .layout-sider > .menu > .menu-item .nav-text {\n  vertical-align: baseline;\n  display: inline-block;\n}\n\n.layout-aside .layout-sider > .menu > .menu-item > .anticon {\n  transition: font-size .3s;\n}\n\n.layout-aside-collapse .layout-sider > .menu > .menu-item {\n  transition: all 0s ease;\n}\n\n.layout-aside-collapse .layout-sider > .menu > .menu-item > .anticon {\n  font-size: 16px;\n  display: inline-block;\n}\n\n.layout-aside-collapse .layout-sider > .menu > .menu-item .nav-text {\n  display: none;\n}\n\n.layout-aside-collapse .layout-sider > .menu > .menu-item:hover {\n  background: #2db7f5;\n  color: #fff;\n  transition: all 0s ease;\n}\n\n.layout-aside-collapse .layout-sider > .menu > .menu-item:hover .nav-text {\n  display: inline-block;\n  vertical-align: top;\n  background: #2db7f5;\n  color: #fff;\n  padding-right: 16px;\n  border-radius: 0 5px 5px 0;\n}\n\n/* 实际使用中需要改成 position: fixed */\n.layout-aside .aside-action {\n  height: 42px;\n  width: 224px;\n  position: absolute;\n  bottom: 0;\n  background: #656565;\n  color: #fff;\n  text-align: center;\n  line-height: 42px;\n  cursor: pointer;\n  transition: all .3s;\n}\n\n.layout-aside-collapse .aside-action {\n  width: 64px;\n  transition: all .3s;\n}\n\n.layout-aside .layout-header {\n  background: #fff;\n  height: 64px;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.layout-aside .layout-main {\n  margin-left: 224px;\n  transition: all .3s;\n}\n\n.layout-aside-collapse .layout-main {\n  margin-left: 64px;\n  transition: all .3s;\n}\n\n.layout-aside .layout-container {\n  margin: 12px 16px 24px;\n}\n\n.layout-aside .layout-content {\n  background: #fff;\n  padding: 24px;\n  margin-top: 12px;\n  border-radius: 4px;\n}\n\n.layout-aside .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n  background: #fff;\n  border-top: 1px solid #e9e9e9;\n  width: 100%;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> visible<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> <span class=\"token class\">.nav-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> baseline<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> > <span class=\"token class\">.anticon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> font-size <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">0</span>s ease<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> > <span class=\"token class\">.anticon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> <span class=\"token class\">.nav-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#2db7f5</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">0</span>s ease<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span><span class=\"token pseudo-class\">:hover</span> <span class=\"token class\">.nav-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> top<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#2db7f5</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">5</span>px <span class=\"token number\">5</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/* 实际使用中需要改成 position: fixed */</span>\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.aside-action</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">42</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#656565</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">42</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.aside-action</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-main</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-main</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1007:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "顶级导航在侧边栏。"
	      ],
	      [
	        "p",
	        "侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Aside top level navigation"
	      ],
	      [
	        "p",
	        "A left-right structure of page layouts is used to Aside navigation, Generally, the mainnav is placed on the left side of the page, and the secondary menu is placed on the top of the working area. Contents will adapt the layout to the viewing area to improve the horizontal space usage, while the layout of the whole page is not stable."
	      ],
	      [
	        "p",
	        "The level of the aisde navigation is scalable. The first, second, and third level navigations could be present more fluently and relevantly, and aside navigation can be fixed, allowing the user to quickly switch and spot the current position, improving the user experience. However, this navigation occupies some horizontal space of the contents."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "侧边导航",
	      "en-US": "Aside"
	    },
	    "filename": "docs/spec/layout/demo/aside.md",
	    "id": "docs-spec-layout-demo-aside"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport BrowserDemo from <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>BrowserDemo<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-aside\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>aside className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-sider\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-logo\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span> theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span>\n          defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>} defaultOpenKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub1\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>item <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>item <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>item <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>item <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub2\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"laptop\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>item <span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>item <span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>item <span class=\"token number\">7</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>item <span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub3\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"notification\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>item <span class=\"token number\">9</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"10\"</span><span class=\"token operator\">></span>item <span class=\"token number\">10</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"11\"</span><span class=\"token operator\">></span>item <span class=\"token number\">11</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"12\"</span><span class=\"token operator\">></span>item <span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>aside<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-main\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-header\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-container\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Home<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>App list<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Any App<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-content\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">590</span> }}<span class=\"token operator\">></span>\n              Contents\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-footer\"</span><span class=\"token operator\">></span>\n          Ant Design all rights reserved © <span class=\"token number\">2015</span> Created by Ant UED\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BrowserDemo<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _BrowserDemo = __webpack_require__(88);

	  var _BrowserDemo2 = _interopRequireDefault(_BrowserDemo);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  var SubMenu = _antd.Menu.SubMenu;
	  return React.createElement(
	    _BrowserDemo2.default,
	    null,
	    React.createElement(
	      "div",
	      {
	        className: "layout-aside"
	      },
	      React.createElement(
	        "aside",
	        {
	          className: "layout-sider"
	        },
	        React.createElement("div", {
	          className: "layout-logo"
	        }),
	        React.createElement(
	          _antd.Menu,
	          {
	            mode: "inline",
	            theme: "dark",
	            defaultSelectedKeys: ['1'],
	            defaultOpenKeys: ['sub1']
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
	                "Navigation 1"
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "1"
	              },
	              "item 1"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "item 2"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "item 3"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "4"
	              },
	              "item 4"
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
	                "Navigation 2"
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "5"
	              },
	              "item 5"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "6"
	              },
	              "item 6"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "7"
	              },
	              "item 7"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "8"
	              },
	              "item 8"
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
	                "Navigation 3"
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "9"
	              },
	              "item 9"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "10"
	              },
	              "item 10"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "11"
	              },
	              "item 11"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "12"
	              },
	              "item 12"
	            )
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        {
	          className: "layout-main"
	        },
	        React.createElement("div", {
	          className: "layout-header"
	        }),
	        React.createElement(
	          "div",
	          {
	            className: "layout-container"
	          },
	          React.createElement(
	            _antd.Breadcrumb,
	            null,
	            React.createElement(
	              _antd.Breadcrumb.Item,
	              null,
	              "Home"
	            ),
	            React.createElement(
	              _antd.Breadcrumb.Item,
	              null,
	              "App list"
	            ),
	            React.createElement(
	              _antd.Breadcrumb.Item,
	              null,
	              "Any App"
	            )
	          ),
	          React.createElement(
	            "div",
	            {
	              className: "layout-content"
	            },
	            React.createElement(
	              "div",
	              {
	                style: {
	                  height: 590
	                }
	              },
	              "Contents"
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "layout-footer"
	          },
	          "Ant Design all rights reserved © 2015 Created by Ant UED"
	        )
	      )
	    )
	  );
	},
	  "style": ".layout-aside {\n  position: relative;\n  min-height: 100%;\n}\n\n.layout-aside .layout-logo {\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px;\n}\n\n.layout-aside .layout-sider {\n  width: 224px;\n  background: #404040;\n  position: absolute;\n  overflow: auto;\n  padding-bottom: 24px;\n  height: 100%;\n}\n\n.layout-aside .layout-sider > .menu {\n  margin-bottom: 20px;\n}\n\n.layout-aside .layout-header {\n  background: #fff;\n  height: 64px;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.layout-aside .layout-main {\n  margin-left: 224px;\n}\n\n.layout-aside .layout-container {\n  margin: 12px 16px 24px;\n}\n\n.layout-aside .layout-content {\n  background: #fff;\n  padding: 24px;\n  margin-top: 12px;\n  border-radius: 4px;\n}\n\n.layout-aside .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n  background: #fff;\n  border-top: 1px solid #e9e9e9;\n  width: 100%;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> auto<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-main</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1008:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "吊顶一般用于跨系统/应用场景，可以放置统一的登录/帮助信息。"
	      ],
	      [
	        "p",
	        "吊顶背景深色，高度 ",
	        [
	          "code",
	          "30px"
	        ],
	        "，和浅色调的主导航配合使用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Generally, ceiling is used for cross system/applications, where you can put uniform login/help information on top of the page."
	      ],
	      [
	        "p",
	        "Background color of a ceiling is a dark color, height is ",
	        [
	          "code",
	          "30px"
	        ],
	        ", and a light color foreground for the mainnav should be used."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "吊顶规范",
	      "en-US": "Ceiling"
	    },
	    "filename": "docs/spec/layout/demo/ceiling.md",
	    "id": "docs-spec-layout-demo-ceiling"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Breadcrumb } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport BrowserDemo from <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>BrowserDemo<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-ceiling-demo\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-ceiling\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>ul className<span class=\"token operator\">=</span><span class=\"token string\">\"right\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>xxx<span class=\"token variable\">@example</span><span class=\"token punctuation\">.</span>com<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>|<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>Help Center<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>|<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>Custom Service<span class=\"token operator\">/</span>Complaint Center phone：<span class=\"token number\">400</span><span class=\"token operator\">-</span><span class=\"token number\">826</span><span class=\"token operator\">-</span><span class=\"token number\">7710</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ul<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-header\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-logo\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BrowserDemo<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _BrowserDemo = __webpack_require__(88);

	  var _BrowserDemo2 = _interopRequireDefault(_BrowserDemo);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  return React.createElement(
	    _BrowserDemo2.default,
	    null,
	    React.createElement(
	      "div",
	      {
	        className: "layout-ceiling-demo"
	      },
	      React.createElement(
	        "div",
	        {
	          className: "layout-ceiling"
	        },
	        React.createElement(
	          "div",
	          {
	            className: "layout-wrapper"
	          },
	          React.createElement(
	            "ul",
	            {
	              className: "right"
	            },
	            React.createElement(
	              "li",
	              null,
	              "xxx@example.com"
	            ),
	            React.createElement(
	              "li",
	              null,
	              "|"
	            ),
	            React.createElement(
	              "li",
	              null,
	              "Help Center"
	            ),
	            React.createElement(
	              "li",
	              null,
	              "|"
	            ),
	            React.createElement(
	              "li",
	              null,
	              "Custom Service/Complaint Center phone：400-826-7710"
	            )
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        {
	          className: "layout-header"
	        },
	        React.createElement(
	          "div",
	          {
	            className: "layout-wrapper"
	          },
	          React.createElement("div", {
	            className: "layout-logo"
	          })
	        )
	      )
	    )
	  );
	},
	  "style": ".layout-ceiling-demo {\n  height: 100%;\n}\n\n.layout-ceiling {\n  font-size: 12px;\n  height: 30px;\n  line-height: 30px;\n  background-color: #242736;\n  color: #ddd;\n}\n\n.layout-ceiling .right {\n  float: right;\n}\n\n.layout-ceiling ul li {\n  display: inline-block;\n  margin: 0 4px;\n}\n\n.layout-ceiling-demo .layout-wrapper {\n  padding: 0 50px;\n}\n\n.layout-ceiling-demo .layout-header {\n  background: #fff;\n  height: 64px;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.layout-ceiling-demo .layout-logo {\n  width: 120px;\n  height: 32px;\n  background: #eee;\n  border-radius: 4px;\n  margin: 16px 24px 16px 0;\n  float: left;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-ceiling-demo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#242736</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#ddd</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling</span> <span class=\"token class\">.right</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> right<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling</span> ul li </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling-demo</span> <span class=\"token class\">.layout-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling-demo</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling-demo</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#eee</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1009:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "顶级导航在头部，次级导航在侧边栏。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The top navigation is placed on the top, and the secondary navigation is placed on the aside."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "顶部导航 + 侧边栏",
	      "en-US": "Top aside"
	    },
	    "filename": "docs/spec/layout/demo/top-aside.md",
	    "id": "docs-spec-layout-demo-top-aside"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport BrowserDemo from <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>BrowserDemo<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-topaside\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-header\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-logo\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span> mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n            defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'2'</span><span class=\"token punctuation\">]</span>} style<span class=\"token operator\">=</span>{{lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'64px'</span>}}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-subheader\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n            defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>} style<span class=\"token operator\">=</span>{{marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">124</span>}}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>The second level navigation<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>The second level navigation<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>The second level navigation<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Home<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>App list<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Any app<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-container\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>aside className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-sider\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span> defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>} defaultOpenKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub1\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>item <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>item <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>item <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>item <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub2\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"laptop\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>item <span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>item <span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>item <span class=\"token number\">7</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>item <span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub3\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"notification\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>item <span class=\"token number\">9</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"10\"</span><span class=\"token operator\">></span>item <span class=\"token number\">10</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"11\"</span><span class=\"token operator\">></span>item <span class=\"token number\">11</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"12\"</span><span class=\"token operator\">></span>item <span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>aside<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-content\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{clear<span class=\"token punctuation\">:</span> <span class=\"token string\">'both'</span>}}<span class=\"token operator\">></span>Contents<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-footer\"</span><span class=\"token operator\">></span>\n          Ant Design all rights reserved © <span class=\"token number\">2015</span> Created by Ant UED\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BrowserDemo<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _BrowserDemo = __webpack_require__(88);

	  var _BrowserDemo2 = _interopRequireDefault(_BrowserDemo);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  var SubMenu = _antd.Menu.SubMenu;
	  return React.createElement(
	    _BrowserDemo2.default,
	    null,
	    React.createElement(
	      "div",
	      {
	        className: "layout-topaside"
	      },
	      React.createElement(
	        "div",
	        {
	          className: "layout-header"
	        },
	        React.createElement(
	          "div",
	          {
	            className: "layout-wrapper"
	          },
	          React.createElement("div", {
	            className: "layout-logo"
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
	              "Navigation 1"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "Navigation 2"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "Navigation 3"
	            )
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        {
	          className: "layout-subheader"
	        },
	        React.createElement(
	          "div",
	          {
	            className: "layout-wrapper"
	          },
	          React.createElement(
	            _antd.Menu,
	            {
	              mode: "horizontal",
	              defaultSelectedKeys: ['1'],
	              style: {
	                marginLeft: 124
	              }
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "1"
	              },
	              "The second level navigation"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "The second level navigation"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "The second level navigation"
	            )
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        {
	          className: "layout-wrapper"
	        },
	        React.createElement(
	          _antd.Breadcrumb,
	          null,
	          React.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            "Home"
	          ),
	          React.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            "App list"
	          ),
	          React.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            "Any app"
	          )
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "layout-container"
	          },
	          React.createElement(
	            "aside",
	            {
	              className: "layout-sider"
	            },
	            React.createElement(
	              _antd.Menu,
	              {
	                mode: "inline",
	                defaultSelectedKeys: ['1'],
	                defaultOpenKeys: ['sub1']
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
	                    "Navigation 1"
	                  )
	                },
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "1"
	                  },
	                  "item 1"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "2"
	                  },
	                  "item 2"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "3"
	                  },
	                  "item 3"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "4"
	                  },
	                  "item 4"
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
	                    "Navigation 2"
	                  )
	                },
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "5"
	                  },
	                  "item 5"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "6"
	                  },
	                  "item 6"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "7"
	                  },
	                  "item 7"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "8"
	                  },
	                  "item 8"
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
	                    "Navigation 3"
	                  )
	                },
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "9"
	                  },
	                  "item 9"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "10"
	                  },
	                  "item 10"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "11"
	                  },
	                  "item 11"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "12"
	                  },
	                  "item 12"
	                )
	              )
	            )
	          ),
	          React.createElement(
	            "div",
	            {
	              className: "layout-content"
	            },
	            React.createElement(
	              "div",
	              {
	                style: {
	                  height: 240
	                }
	              },
	              React.createElement(
	                "div",
	                {
	                  style: {
	                    clear: 'both'
	                  }
	                },
	                "Contents"
	              )
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "layout-footer"
	          },
	          "Ant Design all rights reserved © 2015 Created by Ant UED"
	        )
	      )
	    )
	  );
	},
	  "style": ".layout-topaside {\n  height: 100%;\n}\n\n.layout-topaside .layout-wrapper {\n  padding: 0 50px;\n}\n\n.layout-topaside .layout-header {\n  background: #404040;\n  height: 64px;\n}\n\n.layout-topaside .layout-logo {\n  width: 120px;\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px 16px 0;\n  float: left;\n}\n\n.layout-topaside .layout-subheader {\n  height: 48px;\n  border-bottom: 1px solid #e9e9e9;\n  background: #fff;\n  margin-bottom: 12px;\n}\n\n.layout-topaside .layout-container {\n  background: #fff;\n  margin: 12px 0 0;\n  position: relative;\n  padding: 24px 0;\n  overflow: hidden;\n  border-radius: 4px;\n}\n\n.layout-topaside .layout-sider {\n  width: 224px;\n  float: left;\n}\n\n.layout-topaside .layout-content {\n  border-left: 1px solid #e9e9e9;\n  padding: 0 24px;\n  overflow: auto;\n  position: relative;\n  left: -1px;\n}\n\n.layout-topaside .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-subheader</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">48</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">0</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-sider</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> auto<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">1</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1010:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "一二级导航都在顶部。"
	      ],
	      [
	        "p",
	        "顶部导航在页面布局上采用的是上下的结构，一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          [
	            "code",
	            "<BrowserDemo />"
	          ],
	          " 做演示用，无须复制。"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The first and second level nav are both on the top."
	      ],
	      [
	        "p",
	        "A top-bottom structure of page layouts is used for top navigation. Generally, the mainnav is placed at the top of the page, and includes the logo, the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it. \nWe always put contents in a fixed size navigation (eg: ",
	        [
	          "code",
	          "1200px"
	        ],
	        "), the layout of the whole page is stable, it's not affected by viewing area."
	      ],
	      [
	        "p",
	        "Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites. This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited, this pattern is not suitable for cases when the first level navigation contains many elements or links."
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          [
	            "code",
	            "<BrowserDemo />"
	          ],
	          " This is for demo, don't need to copy."
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "顶部导航",
	      "en-US": "Top"
	    },
	    "filename": "docs/spec/layout/demo/top.md",
	    "id": "docs-spec-layout-demo-top"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Breadcrumb } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport BrowserDemo from <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>BrowserDemo<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-top\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-header\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-logo\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span> mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n            defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'2'</span><span class=\"token punctuation\">]</span>} style<span class=\"token operator\">=</span>{{lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'64px'</span>}}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Navigation <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-subheader\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n            defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>} style<span class=\"token operator\">=</span>{{marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">124</span>}}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>The second level navigation<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>The second level navigation<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>The second level navigation<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Home<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>App list<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Any app<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-container\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">210</span> }}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-footer\"</span><span class=\"token operator\">></span>\n        Ant Design all rights reserved © <span class=\"token number\">2015</span> Created by Ant UED\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BrowserDemo<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _BrowserDemo = __webpack_require__(88);

	  var _BrowserDemo2 = _interopRequireDefault(_BrowserDemo);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  return React.createElement(
	    _BrowserDemo2.default,
	    null,
	    React.createElement(
	      "div",
	      {
	        className: "layout-top"
	      },
	      React.createElement(
	        "div",
	        {
	          className: "layout-header"
	        },
	        React.createElement(
	          "div",
	          {
	            className: "layout-wrapper"
	          },
	          React.createElement("div", {
	            className: "layout-logo"
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
	              "Navigation 1"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "Navigation 2"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "Navigation 3"
	            )
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        {
	          className: "layout-subheader"
	        },
	        React.createElement(
	          "div",
	          {
	            className: "layout-wrapper"
	          },
	          React.createElement(
	            _antd.Menu,
	            {
	              mode: "horizontal",
	              defaultSelectedKeys: ['1'],
	              style: {
	                marginLeft: 124
	              }
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "1"
	              },
	              "The second level navigation"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "The second level navigation"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "The second level navigation"
	            )
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        {
	          className: "layout-wrapper"
	        },
	        React.createElement(
	          _antd.Breadcrumb,
	          null,
	          React.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            "Home"
	          ),
	          React.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            "App list"
	          ),
	          React.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            "Any app"
	          )
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "layout-container"
	          },
	          React.createElement("div", {
	            style: {
	              height: 210
	            }
	          })
	        )
	      ),
	      React.createElement(
	        "div",
	        {
	          className: "layout-footer"
	        },
	        "Ant Design all rights reserved © 2015 Created by Ant UED"
	      )
	    )
	  );
	},
	  "style": ".layout-top {\n  height: 100%;\n}\n\n.layout-top .layout-wrapper {\n  padding: 0 50px;\n}\n\n.layout-top .layout-header {\n  background: #404040;\n  height: 64px;\n}\n\n.layout-top .layout-logo {\n  width: 120px;\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px 16px 0;\n  float: left;\n}\n\n.layout-top .layout-subheader {\n  height: 48px;\n  border-bottom: 1px solid #e9e9e9;\n  background: #fff;\n  margin-bottom: 12px;\n}\n\n.layout-top .layout-container {\n  background: #fff;\n  margin: 12px 0 0;\n  position: relative;\n  padding-top: 24px;\n  overflow: hidden;\n  border-radius: 4px;\n}\n\n.layout-top .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-top</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-subheader</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">48</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">0</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1078:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'aside-collapse': __webpack_require__(1006),
	    'aside': __webpack_require__(1007),
	    'ceiling': __webpack_require__(1008),
	    'top-aside': __webpack_require__(1009),
	    'top': __webpack_require__(1010),
	}

/***/ }

});