webpackJsonp([24,210],{

/***/ 1153:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": [
	    [
	      "p",
	      "页面横向空间有限时使用。侧边导航默认收起，点击底部按钮时展开。"
	    ]
	  ],
	  "meta": {
	    "order": 4,
	    "title": "可收起展开的侧边导航",
	    "filename": "docs/spec/layout/demo/aside-collapse.md",
	    "id": "docs-spec-layout-demo-aside-collapse"
	  },
	  "toc": [
	    "ul"
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport BrowserDemo from <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> AsideCollapse <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      collapse<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onCollapseChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      collapse<span class=\"token punctuation\">:</span> !this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapse<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> collapse <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapse<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span>{collapse <span class=\"token operator\">?</span> <span class=\"token string\">\"layout-aside layout-aside-collapse\"</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">\"layout-aside\"</span>}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>aside className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-sider\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-logo\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span> theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span> defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'user'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              {!collapse <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>导航一<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              {!collapse <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>导航二<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"laptop\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"laptop\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              {!collapse <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>导航三<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"notification\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"notification\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              {!collapse <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>导航四<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"folder\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"folder\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              {!collapse <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"nav-text\"</span><span class=\"token operator\">></span>导航五<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"aside-action\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onCollapseChange}<span class=\"token operator\">></span>\n            {collapse <span class=\"token operator\">?</span> <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"right\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span> <span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"left\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>aside<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-main\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-header\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-container\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>首页<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>应用列表<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>某应用<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-content\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">220</span> }}<span class=\"token operator\">></span>\n                内容区域\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-footer\"</span><span class=\"token operator\">></span>\n          Ant Design 版权所有 © <span class=\"token number\">2015</span> 由蚂蚁金服体验技术部支持\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>BrowserDemo<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>AsideCollapse <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BrowserDemo<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _BrowserDemo = __webpack_require__(77);

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
	                "导航一"
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
	                "导航二"
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
	                "导航三"
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
	                "导航四"
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
	                "导航五"
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
	                "首页"
	              ),
	              React.createElement(
	                _antd.Breadcrumb.Item,
	                null,
	                "应用列表"
	              ),
	              React.createElement(
	                _antd.Breadcrumb.Item,
	                null,
	                "某应用"
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
	                "内容区域"
	              )
	            )
	          ),
	          React.createElement(
	            "div",
	            {
	              className: "layout-footer"
	            },
	            "Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持"
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

/***/ 1154:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": [
	    [
	      "p",
	      "顶级导航在侧边栏。"
	    ],
	    [
	      "p",
	      "侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。"
	    ]
	  ],
	  "meta": {
	    "order": 2,
	    "title": "侧边导航",
	    "filename": "docs/spec/layout/demo/aside.md",
	    "id": "docs-spec-layout-demo-aside"
	  },
	  "toc": [
	    "ul"
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport BrowserDemo from <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>BrowserDemo<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-aside\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>aside className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-sider\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-logo\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span> theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span>\n          defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>} defaultOpenKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub1\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>导航一<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub2\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"laptop\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>导航二<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">7</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub3\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"notification\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>导航三<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">9</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"10\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">10</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"11\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">11</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"12\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>aside<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-main\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-header\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-container\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>首页<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>应用列表<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>某应用<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-content\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">590</span> }}<span class=\"token operator\">></span>\n              内容区域\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-footer\"</span><span class=\"token operator\">></span>\n        Ant Design 版权所有 © <span class=\"token number\">2015</span> 由蚂蚁金服体验技术部支持\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BrowserDemo<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _BrowserDemo = __webpack_require__(77);

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
	                "导航一"
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "1"
	              },
	              "选项1"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "选项2"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "选项3"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "4"
	              },
	              "选项4"
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
	                "导航二"
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "5"
	              },
	              "选项5"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "6"
	              },
	              "选项6"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "7"
	              },
	              "选项7"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "8"
	              },
	              "选项8"
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
	                "导航三"
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "9"
	              },
	              "选项9"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "10"
	              },
	              "选项10"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "11"
	              },
	              "选项11"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "12"
	              },
	              "选项12"
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
	              "首页"
	            ),
	            React.createElement(
	              _antd.Breadcrumb.Item,
	              null,
	              "应用列表"
	            ),
	            React.createElement(
	              _antd.Breadcrumb.Item,
	              null,
	              "某应用"
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
	              "内容区域"
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "layout-footer"
	          },
	          "Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持"
	        )
	      )
	    )
	  );
	},
	  "style": ".layout-aside {\n  position: relative;\n  min-height: 100%;\n}\n\n.layout-aside .layout-logo {\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px;\n}\n\n.layout-aside .layout-sider {\n  width: 224px;\n  background: #404040;\n  position: absolute;\n  overflow: auto;\n  padding-bottom: 24px;\n  height: 100%;\n}\n\n.layout-aside .layout-sider > .menu {\n  margin-bottom: 20px;\n}\n\n.layout-aside .layout-header {\n  background: #fff;\n  height: 64px;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.layout-aside .layout-main {\n  margin-left: 224px;\n}\n\n.layout-aside .layout-container {\n  margin: 12px 16px 24px;\n}\n\n.layout-aside .layout-content {\n  background: #fff;\n  padding: 24px;\n  margin-top: 12px;\n  border-radius: 4px;\n}\n\n.layout-aside .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n  background: #fff;\n  border-top: 1px solid #e9e9e9;\n  width: 100%;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> auto<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-main</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1155:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": [
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
	  "meta": {
	    "order": 3,
	    "title": "吊顶规范",
	    "filename": "docs/spec/layout/demo/ceiling.md",
	    "id": "docs-spec-layout-demo-ceiling"
	  },
	  "toc": [
	    "ul"
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Breadcrumb } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport BrowserDemo from <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>BrowserDemo<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-ceiling-demo\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-ceiling\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>ul className<span class=\"token operator\">=</span><span class=\"token string\">\"right\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>xxx<span class=\"token variable\">@example</span><span class=\"token punctuation\">.</span>com<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>|<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>帮助中心<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>|<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>li<span class=\"token operator\">></span>客服<span class=\"token operator\">/</span>投诉电话：<span class=\"token number\">400</span><span class=\"token operator\">-</span><span class=\"token number\">826</span><span class=\"token operator\">-</span><span class=\"token number\">7710</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>li<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ul<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-header\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-logo\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BrowserDemo<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _BrowserDemo = __webpack_require__(77);

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
	              "帮助中心"
	            ),
	            React.createElement(
	              "li",
	              null,
	              "|"
	            ),
	            React.createElement(
	              "li",
	              null,
	              "客服/投诉电话：400-826-7710"
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

/***/ 1156:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": [
	    [
	      "p",
	      "顶级导航在头部，次级导航在侧边栏。"
	    ]
	  ],
	  "meta": {
	    "order": 1,
	    "title": "顶部导航 + 侧边栏",
	    "filename": "docs/spec/layout/demo/top-aside.md",
	    "id": "docs-spec-layout-demo-top-aside"
	  },
	  "toc": [
	    "ul"
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport BrowserDemo from <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>BrowserDemo<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-topaside\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-header\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-logo\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span> mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n            defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'2'</span><span class=\"token punctuation\">]</span>} style<span class=\"token operator\">=</span>{{lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'64px'</span>}}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>导航一<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>导航二<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>导航三<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-subheader\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n            defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>} style<span class=\"token operator\">=</span>{{marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">124</span>}}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>二级导航<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>二级导航<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>二级导航<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>首页<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>应用列表<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>某应用<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-container\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>aside className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-sider\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span> defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>} defaultOpenKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub1\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>导航一<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub2\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"laptop\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>导航二<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">7</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub3\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"notification\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>导航三<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">9</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"10\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">10</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"11\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">11</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n                <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"12\"</span><span class=\"token operator\">></span>选项<span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>aside<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-content\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{clear<span class=\"token punctuation\">:</span> <span class=\"token string\">'both'</span>}}<span class=\"token operator\">></span>内容区域<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-footer\"</span><span class=\"token operator\">></span>\n        Ant Design 版权所有 © <span class=\"token number\">2015</span> 由蚂蚁金服体验技术部支持\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BrowserDemo<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _BrowserDemo = __webpack_require__(77);

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
	              "导航一"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "导航二"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "导航三"
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
	              "二级导航"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "二级导航"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "二级导航"
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
	            "首页"
	          ),
	          React.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            "应用列表"
	          ),
	          React.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            "某应用"
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
	                    "导航一"
	                  )
	                },
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "1"
	                  },
	                  "选项1"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "2"
	                  },
	                  "选项2"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "3"
	                  },
	                  "选项3"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "4"
	                  },
	                  "选项4"
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
	                    "导航二"
	                  )
	                },
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "5"
	                  },
	                  "选项5"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "6"
	                  },
	                  "选项6"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "7"
	                  },
	                  "选项7"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "8"
	                  },
	                  "选项8"
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
	                    "导航三"
	                  )
	                },
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "9"
	                  },
	                  "选项9"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "10"
	                  },
	                  "选项10"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "11"
	                  },
	                  "选项11"
	                ),
	                React.createElement(
	                  _antd.Menu.Item,
	                  {
	                    key: "12"
	                  },
	                  "选项12"
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
	                "内容区域"
	              )
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "layout-footer"
	          },
	          "Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持"
	        )
	      )
	    )
	  );
	},
	  "style": ".layout-topaside {\n  height: 100%;\n}\n\n.layout-topaside .layout-wrapper {\n  padding: 0 50px;\n}\n\n.layout-topaside .layout-header {\n  background: #404040;\n  height: 64px;\n}\n\n.layout-topaside .layout-logo {\n  width: 120px;\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px 16px 0;\n  float: left;\n}\n\n.layout-topaside .layout-subheader {\n  height: 48px;\n  border-bottom: 1px solid #e9e9e9;\n  background: #fff;\n  margin-bottom: 12px;\n}\n\n.layout-topaside .layout-container {\n  background: #fff;\n  margin: 12px 0 0;\n  position: relative;\n  padding: 24px 0;\n  overflow: hidden;\n  border-radius: 4px;\n}\n\n.layout-topaside .layout-sider {\n  width: 224px;\n  float: left;\n}\n\n.layout-topaside .layout-content {\n  border-left: 1px solid #e9e9e9;\n  padding: 0 24px;\n  overflow: auto;\n  position: relative;\n  left: -1px;\n}\n\n.layout-topaside .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-subheader</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">48</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">0</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-sider</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> auto<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">1</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1157:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": [
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
	  "meta": {
	    "order": 0,
	    "title": "顶部导航",
	    "filename": "docs/spec/layout/demo/top.md",
	    "id": "docs-spec-layout-demo-top"
	  },
	  "toc": [
	    "ul"
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Breadcrumb } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nimport BrowserDemo from <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>BrowserDemo<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-top\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-header\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-logo\"</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu theme<span class=\"token operator\">=</span><span class=\"token string\">\"dark\"</span> mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n            defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'2'</span><span class=\"token punctuation\">]</span>} style<span class=\"token operator\">=</span>{{lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'64px'</span>}}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>导航一<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>导航二<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>导航三<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-subheader\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n            defaultSelectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>} style<span class=\"token operator\">=</span>{{marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">124</span>}}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>二级导航<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>二级导航<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>二级导航<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-wrapper\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>首页<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>应用列表<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>某应用<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Breadcrumb<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-container\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">210</span> }}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"layout-footer\"</span><span class=\"token operator\">></span>\n      Ant Design 版权所有 © <span class=\"token number\">2015</span> 由蚂蚁金服体验技术部支持\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BrowserDemo<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var _BrowserDemo = __webpack_require__(77);

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
	              "导航一"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "导航二"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "导航三"
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
	              "二级导航"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "二级导航"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "二级导航"
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
	            "首页"
	          ),
	          React.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            "应用列表"
	          ),
	          React.createElement(
	            _antd.Breadcrumb.Item,
	            null,
	            "某应用"
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
	        "Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持"
	      )
	    )
	  );
	},
	  "style": ".layout-top {\n  height: 100%;\n}\n\n.layout-top .layout-wrapper {\n  padding: 0 50px;\n}\n\n.layout-top .layout-header {\n  background: #404040;\n  height: 64px;\n}\n\n.layout-top .layout-logo {\n  width: 120px;\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px 16px 0;\n  float: left;\n}\n\n.layout-top .layout-subheader {\n  height: 48px;\n  border-bottom: 1px solid #e9e9e9;\n  background: #fff;\n  margin-bottom: 12px;\n}\n\n.layout-top .layout-container {\n  background: #fff;\n  margin: 12px 0 0;\n  position: relative;\n  padding-top: 24px;\n  overflow: hidden;\n  border-radius: 4px;\n}\n\n.layout-top .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-top</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-subheader</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">48</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">0</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1240:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'aside-collapse': __webpack_require__(1153),
	    'aside': __webpack_require__(1154),
	    'ceiling': __webpack_require__(1155),
	    'top-aside': __webpack_require__(1156),
	    'top': __webpack_require__(1157),
	}

/***/ }

});