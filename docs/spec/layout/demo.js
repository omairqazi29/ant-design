webpackJsonp([24,209],{

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'aside-collapse': __webpack_require__(1789),
	    'aside': __webpack_require__(1790),
	    'ceiling': __webpack_require__(1791),
	    'top-aside': __webpack_require__(1792),
	    'top': __webpack_require__(1793),
	}

/***/ },

/***/ 1789:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(83);

	var _breadcrumb = __webpack_require__(82);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _style5 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style6 = __webpack_require__(31);

	var _menu = __webpack_require__(30);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _BrowserDemo = __webpack_require__(153);

	var _BrowserDemo2 = _interopRequireDefault(_BrowserDemo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": [["p", "页面横向空间有限时使用。侧边导航默认收起，点击底部按钮时展开。"]],
	  "meta": {
	    "order": 4,
	    "title": "可收起展开的侧边导航",
	    "filename": "docs/spec/layout/demo/aside-collapse.md",
	    "id": "docs-spec-layout-demo-aside-collapse"
	  },
	  "toc": ["ul"],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> BrowserDemo <span class=\"token keyword\">from</span> <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> AsideCollapse <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      collapse<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onCollapseChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      collapse<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapse<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> collapse <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>collapse<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>collapse <span class=\"token operator\">?</span> <span class=\"token string\">\"layout-aside layout-aside-collapse\"</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">\"layout-aside\"</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>aside</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-sider<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-logo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dark<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'user'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>collapse <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航一<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>setting<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>setting<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>collapse <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航二<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>laptop<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>laptop<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>collapse <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航三<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>notification<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>notification<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>collapse <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航四<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>folder<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>folder<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>collapse <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>nav-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航五<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>aside-action<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onCollapseChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span>collapse <span class=\"token operator\">?</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> <span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>aside</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-main<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-header<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>首页<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>应用列表<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>某应用<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-content<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">220</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                内容区域\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-footer<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          Ant Design 版权所有 © <span class=\"token number\">2015</span> 由蚂蚁金服体验技术部支持\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BrowserDemo</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AsideCollapse</span> <span class=\"token punctuation\">/></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>BrowserDemo</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;var AsideCollapse = _react2.default.createClass({
	      displayName: 'AsideCollapse',
	      getInitialState: function getInitialState() {
	        return { collapse: true };
	      },
	      onCollapseChange: function onCollapseChange() {
	        this.setState({ collapse: !this.state.collapse
	        });
	      },
	      render: function render() {
	        var collapse = this.state.collapse;return _react2.default.createElement(
	          'div',
	          { className: collapse ? "layout-aside layout-aside-collapse" : "layout-aside" },
	          _react2.default.createElement(
	            'aside',
	            { className: 'layout-sider' },
	            _react2.default.createElement('div', { className: 'layout-logo' }),
	            _react2.default.createElement(
	              _menu2.default,
	              { mode: 'inline', theme: 'dark', defaultSelectedKeys: ['user'] },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: 'user' },
	                _react2.default.createElement(_icon2.default, { type: 'user' }),
	                !collapse && _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  '\u5BFC\u822A\u4E00'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: 'setting' },
	                _react2.default.createElement(_icon2.default, { type: 'setting' }),
	                !collapse && _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  '\u5BFC\u822A\u4E8C'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: 'laptop' },
	                _react2.default.createElement(_icon2.default, { type: 'laptop' }),
	                !collapse && _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  '\u5BFC\u822A\u4E09'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: 'notification' },
	                _react2.default.createElement(_icon2.default, { type: 'notification' }),
	                !collapse && _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  '\u5BFC\u822A\u56DB'
	                )
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: 'folder' },
	                _react2.default.createElement(_icon2.default, { type: 'folder' }),
	                !collapse && _react2.default.createElement(
	                  'span',
	                  { className: 'nav-text' },
	                  '\u5BFC\u822A\u4E94'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'aside-action', onClick: this.onCollapseChange },
	              collapse ? _react2.default.createElement(_icon2.default, { type: 'right' }) : _react2.default.createElement(_icon2.default, { type: 'left' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-main' },
	            _react2.default.createElement('div', { className: 'layout-header' }),
	            _react2.default.createElement(
	              'div',
	              { className: 'layout-container' },
	              _react2.default.createElement(
	                _breadcrumb2.default,
	                null,
	                _react2.default.createElement(
	                  _breadcrumb2.default.Item,
	                  null,
	                  '\u9996\u9875'
	                ),
	                _react2.default.createElement(
	                  _breadcrumb2.default.Item,
	                  null,
	                  '\u5E94\u7528\u5217\u8868'
	                ),
	                _react2.default.createElement(
	                  _breadcrumb2.default.Item,
	                  null,
	                  '\u67D0\u5E94\u7528'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'layout-content' },
	                _react2.default.createElement(
	                  'div',
	                  { style: { height: 220 } },
	                  '\u5185\u5BB9\u533A\u57DF'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'layout-footer' },
	              'Ant Design \u7248\u6743\u6240\u6709 \xA9 2015 \u7531\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\u652F\u6301'
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(
	      _BrowserDemo2.default,
	      null,
	      _react2.default.createElement(AsideCollapse, null)
	    );
	  },
	  "style": ".layout-aside {\n  position: relative;\n  min-height: 100%;\n}\n\n.layout-aside .layout-logo {\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px;\n  transition: all .3s;\n}\n\n.layout-aside-collapse .layout-logo {\n  width: 32px;\n  margin: 16px;\n  transition: all .3s;\n}\n\n.layout-aside .layout-sider {\n  width: 224px;\n  background: #404040;\n  position: absolute;\n  overflow: visible;\n  padding-bottom: 24px;\n  height: 100%;\n  transition: all .3s;\n}\n\n.layout-aside-collapse .layout-sider {\n  width: 64px;\n  transition: all .3s;\n}\n\n.layout-aside .layout-sider > .menu {\n  margin-bottom: 20px;\n}\n\n.layout-aside .layout-sider > .menu > .menu-item {\n  margin: 16px 0;\n}\n\n.layout-aside .layout-sider > .menu > .menu-item .nav-text {\n  vertical-align: baseline;\n  display: inline-block;\n}\n\n.layout-aside .layout-sider > .menu > .menu-item > .anticon {\n  transition: font-size .3s;\n}\n\n.layout-aside-collapse .layout-sider > .menu > .menu-item {\n  transition: all 0s ease;\n}\n\n.layout-aside-collapse .layout-sider > .menu > .menu-item > .anticon {\n  font-size: 16px;\n  display: inline-block;\n}\n\n.layout-aside-collapse .layout-sider > .menu > .menu-item .nav-text {\n  display: none;\n}\n\n.layout-aside-collapse .layout-sider > .menu > .menu-item:hover {\n  background: #2db7f5;\n  color: #fff;\n  transition: all 0s ease;\n}\n\n.layout-aside-collapse .layout-sider > .menu > .menu-item:hover .nav-text {\n  display: inline-block;\n  vertical-align: top;\n  background: #2db7f5;\n  color: #fff;\n  padding-right: 16px;\n  border-radius: 0 5px 5px 0;\n}\n\n/* 实际使用中需要改成 position: fixed */\n.layout-aside .aside-action {\n  height: 42px;\n  width: 224px;\n  position: absolute;\n  bottom: 0;\n  background: #656565;\n  color: #fff;\n  text-align: center;\n  line-height: 42px;\n  cursor: pointer;\n  transition: all .3s;\n}\n\n.layout-aside-collapse .aside-action {\n  width: 64px;\n  transition: all .3s;\n}\n\n.layout-aside .layout-header {\n  background: #fff;\n  height: 64px;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.layout-aside .layout-main {\n  margin-left: 224px;\n  transition: all .3s;\n}\n\n.layout-aside-collapse .layout-main {\n  margin-left: 64px;\n  transition: all .3s;\n}\n\n.layout-aside .layout-container {\n  margin: 12px 16px 24px;\n}\n\n.layout-aside .layout-content {\n  background: #fff;\n  padding: 24px;\n  margin-top: 12px;\n  border-radius: 4px;\n}\n\n.layout-aside .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n  background: #fff;\n  border-top: 1px solid #e9e9e9;\n  width: 100%;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> visible<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> <span class=\"token class\">.nav-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> baseline<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> > <span class=\"token class\">.anticon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> font-size <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">0</span>s ease<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> > <span class=\"token class\">.anticon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span> <span class=\"token class\">.nav-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#2db7f5</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">0</span>s ease<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> > <span class=\"token class\">.menu-item</span><span class=\"token pseudo-class\">:hover</span> <span class=\"token class\">.nav-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> top<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#2db7f5</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">5</span>px <span class=\"token number\">5</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/* 实际使用中需要改成 position: fixed */</span>\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.aside-action</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">42</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#656565</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">42</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.aside-action</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-main</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside-collapse</span> <span class=\"token class\">.layout-main</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> all <span class=\"token number\">.3</span>s<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1790:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(83);

	var _breadcrumb = __webpack_require__(82);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _style5 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style6 = __webpack_require__(31);

	var _menu = __webpack_require__(30);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _BrowserDemo = __webpack_require__(153);

	var _BrowserDemo2 = _interopRequireDefault(_BrowserDemo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": [["p", "顶级导航在侧边栏。"], ["p", "侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。"]],
	  "meta": {
	    "order": 2,
	    "title": "侧边导航",
	    "filename": "docs/spec/layout/demo/aside.md",
	    "id": "docs-spec-layout-demo-aside"
	  },
	  "toc": ["ul"],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> BrowserDemo <span class=\"token keyword\">from</span> <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BrowserDemo</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-aside<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>aside</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-sider<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-logo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dark<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultOpenKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>导航一<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">4</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>laptop<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>导航二<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>5<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">5</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>7<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">7</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">8</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub3<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>notification<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>导航三<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>9<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">9</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>10<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">10</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>11<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">11</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>12<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">12</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>aside</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-main<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-header<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>首页<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>应用列表<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>某应用<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-content<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">590</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              内容区域\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-footer<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        Ant Design 版权所有 © <span class=\"token number\">2015</span> 由蚂蚁金服体验技术部支持\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>BrowserDemo</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;return _react2.default.createElement(
	      _BrowserDemo2.default,
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'layout-aside' },
	        _react2.default.createElement(
	          'aside',
	          { className: 'layout-sider' },
	          _react2.default.createElement('div', { className: 'layout-logo' }),
	          _react2.default.createElement(
	            _menu2.default,
	            { mode: 'inline', theme: 'dark', defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'] },
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub1', title: _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_icon2.default, { type: 'user' }),
	                  '\u5BFC\u822A\u4E00'
	                ) },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '1' },
	                '\u9009\u98791'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '2' },
	                '\u9009\u98792'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '3' },
	                '\u9009\u98793'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '4' },
	                '\u9009\u98794'
	              )
	            ),
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub2', title: _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_icon2.default, { type: 'laptop' }),
	                  '\u5BFC\u822A\u4E8C'
	                ) },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '5' },
	                '\u9009\u98795'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '6' },
	                '\u9009\u98796'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '7' },
	                '\u9009\u98797'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '8' },
	                '\u9009\u98798'
	              )
	            ),
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub3', title: _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_icon2.default, { type: 'notification' }),
	                  '\u5BFC\u822A\u4E09'
	                ) },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '9' },
	                '\u9009\u98799'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '10' },
	                '\u9009\u987910'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '11' },
	                '\u9009\u987911'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '12' },
	                '\u9009\u987912'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'layout-main' },
	          _react2.default.createElement('div', { className: 'layout-header' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-container' },
	            _react2.default.createElement(
	              _breadcrumb2.default,
	              null,
	              _react2.default.createElement(
	                _breadcrumb2.default.Item,
	                null,
	                '\u9996\u9875'
	              ),
	              _react2.default.createElement(
	                _breadcrumb2.default.Item,
	                null,
	                '\u5E94\u7528\u5217\u8868'
	              ),
	              _react2.default.createElement(
	                _breadcrumb2.default.Item,
	                null,
	                '\u67D0\u5E94\u7528'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'layout-content' },
	              _react2.default.createElement(
	                'div',
	                { style: { height: 590 } },
	                '\u5185\u5BB9\u533A\u57DF'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-footer' },
	            'Ant Design \u7248\u6743\u6240\u6709 \xA9 2015 \u7531\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\u652F\u6301'
	          )
	        )
	      )
	    );
	  },
	  "style": ".layout-aside {\n  position: relative;\n  min-height: 100%;\n}\n\n.layout-aside .layout-logo {\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px;\n}\n\n.layout-aside .layout-sider {\n  width: 224px;\n  background: #404040;\n  position: absolute;\n  overflow: auto;\n  padding-bottom: 24px;\n  height: 100%;\n}\n\n.layout-aside .layout-sider > .menu {\n  margin-bottom: 20px;\n}\n\n.layout-aside .layout-header {\n  background: #fff;\n  height: 64px;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.layout-aside .layout-main {\n  margin-left: 224px;\n}\n\n.layout-aside .layout-container {\n  margin: 12px 16px 24px;\n}\n\n.layout-aside .layout-content {\n  background: #fff;\n  padding: 24px;\n  margin-top: 12px;\n  border-radius: 4px;\n}\n\n.layout-aside .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n  background: #fff;\n  border-top: 1px solid #e9e9e9;\n  width: 100%;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> auto<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-sider</span> > <span class=\"token class\">.menu</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-main</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-aside</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1791:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _BrowserDemo = __webpack_require__(153);

	var _BrowserDemo2 = _interopRequireDefault(_BrowserDemo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": [["p", "吊顶一般用于跨系统/应用场景，可以放置统一的登录/帮助信息。"], ["p", "吊顶背景深色，高度 ", ["code", "30px"], "，和浅色调的主导航配合使用。"]],
	  "meta": {
	    "order": 3,
	    "title": "吊顶规范",
	    "filename": "docs/spec/layout/demo/ceiling.md",
	    "id": "docs-spec-layout-demo-ceiling"
	  },
	  "toc": ["ul"],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> BrowserDemo <span class=\"token keyword\">from</span> <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BrowserDemo</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-ceiling-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-ceiling<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-wrapper<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>xxx@example<span class=\"token punctuation\">.</span>com<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span><span class=\"token operator\">|</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>帮助中心<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span><span class=\"token operator\">|</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>客服<span class=\"token operator\">/</span>投诉电话：<span class=\"token number\">400</span><span class=\"token operator\">-</span><span class=\"token number\">826</span><span class=\"token operator\">-</span><span class=\"token number\">7710</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-header<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-wrapper<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-logo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>BrowserDemo</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _BrowserDemo2.default,
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'layout-ceiling-demo' },
	        _react2.default.createElement(
	          'div',
	          { className: 'layout-ceiling' },
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-wrapper' },
	            _react2.default.createElement(
	              'ul',
	              { className: 'right' },
	              _react2.default.createElement(
	                'li',
	                null,
	                'xxx@example.com'
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                '|'
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                '\u5E2E\u52A9\u4E2D\u5FC3'
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                '|'
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                '\u5BA2\u670D/\u6295\u8BC9\u7535\u8BDD\uFF1A400-826-7710'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'layout-header' },
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-wrapper' },
	            _react2.default.createElement('div', { className: 'layout-logo' })
	          )
	        )
	      )
	    );
	  },
	  "style": ".layout-ceiling-demo {\n  height: 100%;\n}\n\n.layout-ceiling {\n  font-size: 12px;\n  height: 30px;\n  line-height: 30px;\n  background-color: #242736;\n  color: #ddd;\n}\n\n.layout-ceiling .right {\n  float: right;\n}\n\n.layout-ceiling ul li {\n  display: inline-block;\n  margin: 0 4px;\n}\n\n.layout-ceiling-demo .layout-wrapper {\n  padding: 0 50px;\n}\n\n.layout-ceiling-demo .layout-header {\n  background: #fff;\n  height: 64px;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.layout-ceiling-demo .layout-logo {\n  width: 120px;\n  height: 32px;\n  background: #eee;\n  border-radius: 4px;\n  margin: 16px 24px 16px 0;\n  float: left;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-ceiling-demo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#242736</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#ddd</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling</span> <span class=\"token class\">.right</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> right<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling</span> ul li </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> inline-block<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling-demo</span> <span class=\"token class\">.layout-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling-demo</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-ceiling-demo</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#eee</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1792:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(14);

	var _icon = __webpack_require__(9);

	var _icon2 = _interopRequireDefault(_icon);

	var _style5 = __webpack_require__(83);

	var _breadcrumb = __webpack_require__(82);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _style6 = __webpack_require__(31);

	var _menu = __webpack_require__(30);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _BrowserDemo = __webpack_require__(153);

	var _BrowserDemo2 = _interopRequireDefault(_BrowserDemo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": [["p", "顶级导航在头部，次级导航在侧边栏。"]],
	  "meta": {
	    "order": 1,
	    "title": "顶部导航 + 侧边栏",
	    "filename": "docs/spec/layout/demo/top-aside.md",
	    "id": "docs-spec-layout-demo-top-aside"
	  },
	  "toc": ["ul"],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> BrowserDemo <span class=\"token keyword\">from</span> <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BrowserDemo</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-topaside<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-header<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-wrapper<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-logo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dark<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'2'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'64px'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航一<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航二<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航三<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-subheader<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-wrapper<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">124</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>二级导航<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>二级导航<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>二级导航<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-wrapper<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>首页<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>应用列表<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>某应用<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>aside</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-sider<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inline<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultOpenKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>导航一<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">4</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>laptop<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>导航二<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>5<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">5</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>7<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">7</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">8</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub3<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>notification<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>导航三<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>9<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">9</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>10<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">10</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>11<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">11</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>12<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>选项<span class=\"token number\">12</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>aside</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-content<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>clear<span class=\"token punctuation\">:</span> <span class=\"token string\">'both'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>内容区域<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-footer<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        Ant Design 版权所有 © <span class=\"token number\">2015</span> 由蚂蚁金服体验技术部支持\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>BrowserDemo</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;return _react2.default.createElement(
	      _BrowserDemo2.default,
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'layout-topaside' },
	        _react2.default.createElement(
	          'div',
	          { className: 'layout-header' },
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-wrapper' },
	            _react2.default.createElement('div', { className: 'layout-logo' }),
	            _react2.default.createElement(
	              _menu2.default,
	              { theme: 'dark', mode: 'horizontal', defaultSelectedKeys: ['2'], style: { lineHeight: '64px' } },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '1' },
	                '\u5BFC\u822A\u4E00'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '2' },
	                '\u5BFC\u822A\u4E8C'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '3' },
	                '\u5BFC\u822A\u4E09'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'layout-subheader' },
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-wrapper' },
	            _react2.default.createElement(
	              _menu2.default,
	              { mode: 'horizontal', defaultSelectedKeys: ['1'], style: { marginLeft: 124 } },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '1' },
	                '\u4E8C\u7EA7\u5BFC\u822A'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '2' },
	                '\u4E8C\u7EA7\u5BFC\u822A'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '3' },
	                '\u4E8C\u7EA7\u5BFC\u822A'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'layout-wrapper' },
	          _react2.default.createElement(
	            _breadcrumb2.default,
	            null,
	            _react2.default.createElement(
	              _breadcrumb2.default.Item,
	              null,
	              '\u9996\u9875'
	            ),
	            _react2.default.createElement(
	              _breadcrumb2.default.Item,
	              null,
	              '\u5E94\u7528\u5217\u8868'
	            ),
	            _react2.default.createElement(
	              _breadcrumb2.default.Item,
	              null,
	              '\u67D0\u5E94\u7528'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-container' },
	            _react2.default.createElement(
	              'aside',
	              { className: 'layout-sider' },
	              _react2.default.createElement(
	                _menu2.default,
	                { mode: 'inline', defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'] },
	                _react2.default.createElement(
	                  SubMenu,
	                  { key: 'sub1', title: _react2.default.createElement(
	                      'span',
	                      null,
	                      _react2.default.createElement(_icon2.default, { type: 'user' }),
	                      '\u5BFC\u822A\u4E00'
	                    ) },
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '1' },
	                    '\u9009\u98791'
	                  ),
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '2' },
	                    '\u9009\u98792'
	                  ),
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '3' },
	                    '\u9009\u98793'
	                  ),
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '4' },
	                    '\u9009\u98794'
	                  )
	                ),
	                _react2.default.createElement(
	                  SubMenu,
	                  { key: 'sub2', title: _react2.default.createElement(
	                      'span',
	                      null,
	                      _react2.default.createElement(_icon2.default, { type: 'laptop' }),
	                      '\u5BFC\u822A\u4E8C'
	                    ) },
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '5' },
	                    '\u9009\u98795'
	                  ),
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '6' },
	                    '\u9009\u98796'
	                  ),
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '7' },
	                    '\u9009\u98797'
	                  ),
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '8' },
	                    '\u9009\u98798'
	                  )
	                ),
	                _react2.default.createElement(
	                  SubMenu,
	                  { key: 'sub3', title: _react2.default.createElement(
	                      'span',
	                      null,
	                      _react2.default.createElement(_icon2.default, { type: 'notification' }),
	                      '\u5BFC\u822A\u4E09'
	                    ) },
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '9' },
	                    '\u9009\u98799'
	                  ),
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '10' },
	                    '\u9009\u987910'
	                  ),
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '11' },
	                    '\u9009\u987911'
	                  ),
	                  _react2.default.createElement(
	                    _menu2.default.Item,
	                    { key: '12' },
	                    '\u9009\u987912'
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'layout-content' },
	              _react2.default.createElement(
	                'div',
	                { style: { height: 240 } },
	                _react2.default.createElement(
	                  'div',
	                  { style: { clear: 'both' } },
	                  '\u5185\u5BB9\u533A\u57DF'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-footer' },
	            'Ant Design \u7248\u6743\u6240\u6709 \xA9 2015 \u7531\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\u652F\u6301'
	          )
	        )
	      )
	    );
	  },
	  "style": ".layout-topaside {\n  height: 100%;\n}\n\n.layout-topaside .layout-wrapper {\n  padding: 0 50px;\n}\n\n.layout-topaside .layout-header {\n  background: #404040;\n  height: 64px;\n}\n\n.layout-topaside .layout-logo {\n  width: 120px;\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px 16px 0;\n  float: left;\n}\n\n.layout-topaside .layout-subheader {\n  height: 48px;\n  border-bottom: 1px solid #e9e9e9;\n  background: #fff;\n  margin-bottom: 12px;\n}\n\n.layout-topaside .layout-container {\n  background: #fff;\n  margin: 12px 0 0;\n  position: relative;\n  padding: 24px 0;\n  overflow: hidden;\n  border-radius: 4px;\n}\n\n.layout-topaside .layout-sider {\n  width: 224px;\n  float: left;\n}\n\n.layout-topaside .layout-content {\n  border-left: 1px solid #e9e9e9;\n  padding: 0 24px;\n  overflow: auto;\n  position: relative;\n  left: -1px;\n}\n\n.layout-topaside .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-subheader</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">48</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">0</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-sider</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">224</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> auto<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">1</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-topaside</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1793:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(83);

	var _breadcrumb = __webpack_require__(82);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _style4 = __webpack_require__(31);

	var _menu = __webpack_require__(30);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _BrowserDemo = __webpack_require__(153);

	var _BrowserDemo2 = _interopRequireDefault(_BrowserDemo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": [["p", "一二级导航都在顶部。"], ["p", "顶部导航在页面布局上采用的是上下的结构，一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。"], ["blockquote", ["p", ["code", "<BrowserDemo />"], " 做演示用，无须复制。"]]],
	  "meta": {
	    "order": 0,
	    "title": "顶部导航",
	    "filename": "docs/spec/layout/demo/top.md",
	    "id": "docs-spec-layout-demo-top"
	  },
	  "toc": ["ul"],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Breadcrumb <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> BrowserDemo <span class=\"token keyword\">from</span> <span class=\"token string\">'site/theme/template/BrowserDemo'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BrowserDemo</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-top<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-header<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-wrapper<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-logo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dark<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'2'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'64px'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航一<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航二<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>导航三<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-subheader<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-wrapper<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">defaultSelectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">124</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>二级导航<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>二级导航<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>二级导航<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-wrapper<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>首页<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>应用列表<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>某应用<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">210</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>layout-footer<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Ant Design 版权所有 © <span class=\"token number\">2015</span> 由蚂蚁金服体验技术部支持\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>BrowserDemo</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _BrowserDemo2.default,
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'layout-top' },
	        _react2.default.createElement(
	          'div',
	          { className: 'layout-header' },
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-wrapper' },
	            _react2.default.createElement('div', { className: 'layout-logo' }),
	            _react2.default.createElement(
	              _menu2.default,
	              { theme: 'dark', mode: 'horizontal', defaultSelectedKeys: ['2'], style: { lineHeight: '64px' } },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '1' },
	                '\u5BFC\u822A\u4E00'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '2' },
	                '\u5BFC\u822A\u4E8C'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '3' },
	                '\u5BFC\u822A\u4E09'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'layout-subheader' },
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-wrapper' },
	            _react2.default.createElement(
	              _menu2.default,
	              { mode: 'horizontal', defaultSelectedKeys: ['1'], style: { marginLeft: 124 } },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '1' },
	                '\u4E8C\u7EA7\u5BFC\u822A'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '2' },
	                '\u4E8C\u7EA7\u5BFC\u822A'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '3' },
	                '\u4E8C\u7EA7\u5BFC\u822A'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'layout-wrapper' },
	          _react2.default.createElement(
	            _breadcrumb2.default,
	            null,
	            _react2.default.createElement(
	              _breadcrumb2.default.Item,
	              null,
	              '\u9996\u9875'
	            ),
	            _react2.default.createElement(
	              _breadcrumb2.default.Item,
	              null,
	              '\u5E94\u7528\u5217\u8868'
	            ),
	            _react2.default.createElement(
	              _breadcrumb2.default.Item,
	              null,
	              '\u67D0\u5E94\u7528'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'layout-container' },
	            _react2.default.createElement('div', { style: { height: 210 } })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'layout-footer' },
	          'Ant Design \u7248\u6743\u6240\u6709 \xA9 2015 \u7531\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\u652F\u6301'
	        )
	      )
	    );
	  },
	  "style": ".layout-top {\n  height: 100%;\n}\n\n.layout-top .layout-wrapper {\n  padding: 0 50px;\n}\n\n.layout-top .layout-header {\n  background: #404040;\n  height: 64px;\n}\n\n.layout-top .layout-logo {\n  width: 120px;\n  height: 32px;\n  background: #333;\n  border-radius: 4px;\n  margin: 16px 24px 16px 0;\n  float: left;\n}\n\n.layout-top .layout-subheader {\n  height: 48px;\n  border-bottom: 1px solid #e9e9e9;\n  background: #fff;\n  margin-bottom: 12px;\n}\n\n.layout-top .layout-container {\n  background: #fff;\n  margin: 12px 0 0;\n  position: relative;\n  padding-top: 24px;\n  overflow: hidden;\n  border-radius: 4px;\n}\n\n.layout-top .layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.layout-top</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-header</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#404040</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-logo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#333</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px <span class=\"token number\">24</span>px <span class=\"token number\">16</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-subheader</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">48</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px <span class=\"token number\">0</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> relative<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.layout-top</span> <span class=\"token class\">.layout-footer</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">64</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ }

});