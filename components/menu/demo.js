webpackJsonp([21,202],{

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _icon = __webpack_require__(10);

	var _icon2 = _interopRequireDefault(_icon);

	var _style4 = __webpack_require__(35);

	var _menu = __webpack_require__(34);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "水平的顶部导航菜单。"]],
	    "en-US": [["p", "Horizontal top navigation menu."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "顶部导航",
	      "en-US": "Top Navigation"
	    },
	    "filename": "components/menu/demo/horizontal.md",
	    "id": "components-menu-demo-horizontal"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Menu<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> SubMenu <span class=\"token operator\" >=</span> Menu<span class=\"token punctuation\" >.</span>SubMenu<span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> MenuItemGroup <span class=\"token operator\" >=</span> Menu<span class=\"token punctuation\" >.</span>ItemGroup<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> App <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      current<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'mail'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleClick</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'click '</span><span class=\"token punctuation\" >,</span> e<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      current<span class=\"token punctuation\" >:</span> e<span class=\"token punctuation\" >.</span>key<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleClick<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >selectedKeys</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>current<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >mode</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>horizontal<span class=\"token punctuation\" >\"</span></span>\n      <span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mail<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mail<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>Navigation One\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>app<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >disabled</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>appstore<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>Navigation Two\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>Navigation Three <span class=\"token operator\" >-</span> Submenu<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItemGroup</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Item</span> <span class=\"token attr-name\" >1\"</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting:1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting:2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItemGroup</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItemGroup</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Item</span> <span class=\"token attr-name\" >2\"</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting:3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >3</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting:4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItemGroup</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>alipay<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>a</span> <span class=\"token attr-name\" >href</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>https://ant.design<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >target</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>_blank<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >rel</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>noopener</span> <span class=\"token attr-name\" >noreferrer\"</span><span class=\"token punctuation\" >></span></span>Navigation Four <span class=\"token operator\" >-</span> Link<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>a</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>App</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;
	    var MenuItemGroup = _menu2.default.ItemGroup;var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { current: 'mail' };
	      },
	      handleClick: function handleClick(e) {
	        console.log('click ', e);this.setState({ current: e.key });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          _menu2.default,
	          { onClick: this.handleClick, selectedKeys: [this.state.current], mode: 'horizontal' },
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: 'mail' },
	            _react2.default.createElement(_icon2.default, { type: 'mail' }),
	            'Navigation One'
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: 'app', disabled: true },
	            _react2.default.createElement(_icon2.default, { type: 'appstore' }),
	            'Navigation Two'
	          ),
	          _react2.default.createElement(
	            SubMenu,
	            { title: _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(_icon2.default, { type: 'setting' }),
	                'Navigation Three - Submenu'
	              ) },
	            _react2.default.createElement(
	              MenuItemGroup,
	              { title: 'Item 1' },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: 'setting:1' },
	                'Option 1'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: 'setting:2' },
	                'Option 2'
	              )
	            ),
	            _react2.default.createElement(
	              MenuItemGroup,
	              { title: 'Item 2' },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: 'setting:3' },
	                'Option 3'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: 'setting:4' },
	                'Option 4'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: 'alipay' },
	            _react2.default.createElement(
	              'a',
	              { href: 'https://ant.design', target: '_blank', rel: 'noopener noreferrer' },
	              'Navigation Four - Link'
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _icon = __webpack_require__(10);

	var _icon2 = _interopRequireDefault(_icon);

	var _style4 = __webpack_require__(35);

	var _menu = __webpack_require__(34);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。"], ["blockquote", ["p", "该用法要求 antd@2.0+"]]],
	    "en-US": [["p", "Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact."], ["blockquote", ["p", "This demo is for antd@2.0+."]]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "只展开当前父级菜单",
	      "en-US": "Open current submenu only"
	    },
	    "filename": "components/menu/demo/sider-current.md",
	    "id": "components-menu-demo-sider-current"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Menu<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> SubMenu <span class=\"token operator\" >=</span> Menu<span class=\"token punctuation\" >.</span>SubMenu<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Sider <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      current<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n      openKeys<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleClick</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'Clicked: '</span><span class=\"token punctuation\" >,</span> e<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> current<span class=\"token punctuation\" >:</span> e<span class=\"token punctuation\" >.</span>key <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >onOpenChange</span><span class=\"token punctuation\" >(</span>openKeys<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> state <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> latestOpenKey <span class=\"token operator\" >=</span> openKeys<span class=\"token punctuation\" >.</span><span class=\"token function\" >find</span><span class=\"token punctuation\" >(</span>key <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token operator\" >!</span><span class=\"token punctuation\" >(</span>state<span class=\"token punctuation\" >.</span>openKeys<span class=\"token punctuation\" >.</span><span class=\"token function\" >indexOf</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >></span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >const</span> latestCloseKey <span class=\"token operator\" >=</span> state<span class=\"token punctuation\" >.</span>openKeys<span class=\"token punctuation\" >.</span><span class=\"token function\" >find</span><span class=\"token punctuation\" >(</span>key <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token operator\" >!</span><span class=\"token punctuation\" >(</span>openKeys<span class=\"token punctuation\" >.</span><span class=\"token function\" >indexOf</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >)</span> <span class=\"token operator\" >></span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >let</span> nextOpenKeys <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>latestOpenKey<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      nextOpenKeys <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >getAncestorKeys</span><span class=\"token punctuation\" >(</span>latestOpenKey<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >concat</span><span class=\"token punctuation\" >(</span>latestOpenKey<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>latestCloseKey<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      nextOpenKeys <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >getAncestorKeys</span><span class=\"token punctuation\" >(</span>latestCloseKey<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span> openKeys<span class=\"token punctuation\" >:</span> nextOpenKeys <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >getAncestorKeys</span><span class=\"token punctuation\" >(</span>key<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >const</span> map <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n      sub3<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'sub2'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> map<span class=\"token punctuation\" >[</span>key<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >||</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span>\n        <span class=\"token attr-name\" >mode</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>inline<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token attr-name\" >openKeys</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>openKeys<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >selectedKeys</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>current<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >240</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >onOpenChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>onOpenChange<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleClick<span class=\"token punctuation\" >}</span></span>\n      <span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mail<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation One<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >3</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>appstore<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation Two<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >5</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>6<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Submenu<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>7<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >7</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >8</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub4<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation Three<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>9<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >9</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>10<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >10</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>11<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >11</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>12<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >12</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Sider</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;var Sider = _react2.default.createClass({
	      displayName: 'Sider',
	      getInitialState: function getInitialState() {
	        return { current: '1', openKeys: [] };
	      },
	      handleClick: function handleClick(e) {
	        console.log('Clicked: ', e);
	        this.setState({ current: e.key });
	      },
	      onOpenChange: function onOpenChange(openKeys) {
	        var state = this.state;var latestOpenKey = openKeys.find(function (key) {
	          return !(state.openKeys.indexOf(key) > -1);
	        });var latestCloseKey = state.openKeys.find(function (key) {
	          return !(openKeys.indexOf(key) > -1);
	        });var nextOpenKeys = [];if (latestOpenKey) {
	          nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	        }if (latestCloseKey) {
	          nextOpenKeys = this.getAncestorKeys(latestCloseKey);
	        }this.setState({ openKeys: nextOpenKeys });
	      },
	      getAncestorKeys: function getAncestorKeys(key) {
	        var map = { sub3: ['sub2'] };return map[key] || [];
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          _menu2.default,
	          { mode: 'inline', openKeys: this.state.openKeys, selectedKeys: [this.state.current], style: { width: 240 }, onOpenChange: this.onOpenChange, onClick: this.handleClick },
	          _react2.default.createElement(
	            SubMenu,
	            { key: 'sub1', title: _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(_icon2.default, { type: 'mail' }),
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'Navigation One'
	                )
	              ) },
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '1' },
	              'Option 1'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '2' },
	              'Option 2'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '3' },
	              'Option 3'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '4' },
	              'Option 4'
	            )
	          ),
	          _react2.default.createElement(
	            SubMenu,
	            { key: 'sub2', title: _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(_icon2.default, { type: 'appstore' }),
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'Navigation Two'
	                )
	              ) },
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '5' },
	              'Option 5'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '6' },
	              'Option 6'
	            ),
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub3', title: 'Submenu' },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '7' },
	                'Option 7'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '8' },
	                'Option 8'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            SubMenu,
	            { key: 'sub4', title: _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(_icon2.default, { type: 'setting' }),
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'Navigation Three'
	                )
	              ) },
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '9' },
	              'Option 9'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '10' },
	              'Option 10'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '11' },
	              'Option 11'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '12' },
	              'Option 12'
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(Sider, null);
	  }
	};

/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _icon = __webpack_require__(10);

	var _icon2 = _interopRequireDefault(_icon);

	var _style4 = __webpack_require__(35);

	var _menu = __webpack_require__(34);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "垂直菜单，子菜单内嵌在菜单区域。"]],
	    "en-US": [["p", "Vertical menu with inline submenus."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "内嵌菜单",
	      "en-US": "Vertical menu with inline children"
	    },
	    "filename": "components/menu/demo/sider.md",
	    "id": "components-menu-demo-sider"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Menu<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> SubMenu <span class=\"token operator\" >=</span> Menu<span class=\"token punctuation\" >.</span>SubMenu<span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> MenuItemGroup <span class=\"token operator\" >=</span> Menu<span class=\"token punctuation\" >.</span>ItemGroup<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Sider <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      current<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'1'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleClick</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'click '</span><span class=\"token punctuation\" >,</span> e<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      current<span class=\"token punctuation\" >:</span> e<span class=\"token punctuation\" >.</span>key<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleClick<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >240</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >defaultOpenKeys</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'sub1'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >selectedKeys</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>current<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n        <span class=\"token attr-name\" >mode</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>inline<span class=\"token punctuation\" >\"</span></span>\n      <span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mail<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation One<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItemGroup</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Item</span> <span class=\"token attr-name\" >1\"</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItemGroup</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItemGroup</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Item</span> <span class=\"token attr-name\" >2\"</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >3</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItemGroup</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>appstore<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation Two<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >5</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>6<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Submenu<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>7<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >7</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >8</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub4<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation Three<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>9<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >9</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>10<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >10</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>11<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >11</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>12<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >12</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Sider</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;
	    var MenuItemGroup = _menu2.default.ItemGroup;var Sider = _react2.default.createClass({
	      displayName: 'Sider',
	      getInitialState: function getInitialState() {
	        return { current: '1' };
	      },
	      handleClick: function handleClick(e) {
	        console.log('click ', e);this.setState({ current: e.key });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          _menu2.default,
	          { onClick: this.handleClick, style: { width: 240 }, defaultOpenKeys: ['sub1'], selectedKeys: [this.state.current], mode: 'inline' },
	          _react2.default.createElement(
	            SubMenu,
	            { key: 'sub1', title: _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(_icon2.default, { type: 'mail' }),
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'Navigation One'
	                )
	              ) },
	            _react2.default.createElement(
	              MenuItemGroup,
	              { title: 'Item 1' },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '1' },
	                'Option 1'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '2' },
	                'Option 2'
	              )
	            ),
	            _react2.default.createElement(
	              MenuItemGroup,
	              { title: 'Item 2' },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '3' },
	                'Option 3'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '4' },
	                'Option 4'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            SubMenu,
	            { key: 'sub2', title: _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(_icon2.default, { type: 'appstore' }),
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'Navigation Two'
	                )
	              ) },
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '5' },
	              'Option 5'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '6' },
	              'Option 6'
	            ),
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub3', title: 'Submenu' },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '7' },
	                'Option 7'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '8' },
	                'Option 8'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            SubMenu,
	            { key: 'sub4', title: _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(_icon2.default, { type: 'setting' }),
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'Navigation Three'
	                )
	              ) },
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '9' },
	              'Option 9'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '10' },
	              'Option 10'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '11' },
	              'Option 11'
	            ),
	            _react2.default.createElement(
	              _menu2.default.Item,
	              { key: '12' },
	              'Option 12'
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(Sider, null);
	  }
	};

/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(14);

	var _icon = __webpack_require__(10);

	var _icon2 = _interopRequireDefault(_icon);

	var _style5 = __webpack_require__(78);

	var _switch = __webpack_require__(77);

	var _switch2 = _interopRequireDefault(_switch);

	var _style6 = __webpack_require__(35);

	var _menu = __webpack_require__(34);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "展示动态切换模式。"]],
	    "en-US": [["p", "Show the dynamic switching mode (between 'inline' and 'vertical')."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "切换菜单类型",
	      "en-US": "Switch the menu type"
	    },
	    "filename": "components/menu/demo/switch-mode.md",
	    "id": "components-menu-demo-switch-mode"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Menu<span class=\"token punctuation\" >,</span> Icon<span class=\"token punctuation\" >,</span> Switch <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> SubMenu <span class=\"token operator\" >=</span> Menu<span class=\"token punctuation\" >.</span>SubMenu<span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> MenuItemGroup <span class=\"token operator\" >=</span> Menu<span class=\"token punctuation\" >.</span>ItemGroup<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Sider <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      mode<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'inline'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >changeMode</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      mode<span class=\"token punctuation\" >:</span> value <span class=\"token operator\" >?</span> <span class=\"token string\" >'vertical'</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >'inline'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>changeMode<span class=\"token punctuation\" >}</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span>\n          <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >240</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n          <span class=\"token attr-name\" >defaultOpenKeys</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'sub1'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n          <span class=\"token attr-name\" >mode</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>mode<span class=\"token punctuation\" >}</span></span>\n        <span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mail<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation One<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItemGroup</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Item</span> <span class=\"token attr-name\" >1\"</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItemGroup</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItemGroup</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Item</span> <span class=\"token attr-name\" >2\"</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >3</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItemGroup</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>appstore<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation Two<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >5</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>6<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Submenu<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>7<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >7</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >8</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub4<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation Three<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>9<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >9</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>10<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >10</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>11<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >11</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>12<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >12</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Sider</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;var MenuItemGroup = _menu2.default.ItemGroup;var Sider = _react2.default.createClass({
	      displayName: 'Sider',
	      getInitialState: function getInitialState() {
	        return { mode: 'inline' };
	      },
	      changeMode: function changeMode(value) {
	        this.setState({ mode: value ? 'vertical' : 'inline' });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_switch2.default, { onChange: this.changeMode }),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _menu2.default,
	            { style: { width: 240 }, defaultOpenKeys: ['sub1'], mode: this.state.mode },
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub1', title: _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_icon2.default, { type: 'mail' }),
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Navigation One'
	                  )
	                ) },
	              _react2.default.createElement(
	                MenuItemGroup,
	                { title: 'Item 1' },
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '1' },
	                  'Option 1'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '2' },
	                  'Option 2'
	                )
	              ),
	              _react2.default.createElement(
	                MenuItemGroup,
	                { title: 'Item 2' },
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '3' },
	                  'Option 3'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '4' },
	                  'Option 4'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub2', title: _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_icon2.default, { type: 'appstore' }),
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Navigation Two'
	                  )
	                ) },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '5' },
	                'Option 5'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '6' },
	                'Option 6'
	              ),
	              _react2.default.createElement(
	                SubMenu,
	                { key: 'sub3', title: 'Submenu' },
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '7' },
	                  'Option 7'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '8' },
	                  'Option 8'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub4', title: _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_icon2.default, { type: 'setting' }),
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Navigation Three'
	                  )
	                ) },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '9' },
	                'Option 9'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '10' },
	                'Option 10'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '11' },
	                'Option 11'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '12' },
	                'Option 12'
	              )
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(Sider, null);
	  }
	};

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(14);

	var _icon = __webpack_require__(10);

	var _icon2 = _interopRequireDefault(_icon);

	var _style5 = __webpack_require__(78);

	var _switch = __webpack_require__(77);

	var _switch2 = _interopRequireDefault(_switch);

	var _style6 = __webpack_require__(35);

	var _menu = __webpack_require__(34);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "内建了两套主题 ", ["code", "light|dark"], "，默认 ", ["code", "light"], "。"]],
	    "en-US": [["p", "There are two built-in themes: 'light' and 'dark'. The default value is 'light'."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "主题",
	      "en-US": "Menu Themes"
	    },
	    "filename": "components/menu/demo/theme.md",
	    "id": "components-menu-demo-theme"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Menu<span class=\"token punctuation\" >,</span> Icon<span class=\"token punctuation\" >,</span> Switch <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> SubMenu <span class=\"token operator\" >=</span> Menu<span class=\"token punctuation\" >.</span>SubMenu<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >const</span> Sider <span class=\"token operator\" >=</span> React<span class=\"token punctuation\" >.</span><span class=\"token function\" >createClass</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  <span class=\"token function\" >getInitialState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >{</span>\n      theme<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'light'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >changeTheme</span><span class=\"token punctuation\" >(</span>value<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      theme<span class=\"token punctuation\" >:</span> value <span class=\"token operator\" >?</span> <span class=\"token string\" >'dark'</span> <span class=\"token punctuation\" >:</span> <span class=\"token string\" >'light'</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >handleClick</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'click '</span><span class=\"token punctuation\" >,</span> e<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >setState</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n      current<span class=\"token punctuation\" >:</span> e<span class=\"token punctuation\" >.</span>key<span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n  <span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >return</span> <span class=\"token punctuation\" >(</span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Switch</span> <span class=\"token attr-name\" >onChange</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>changeTheme<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >checkedChildren</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Dark<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >unCheckedChildren</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Light<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span> <span class=\"token punctuation\" >/></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >theme</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>theme<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>handleClick<span class=\"token punctuation\" >}</span></span>\n          <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >240</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span>\n          <span class=\"token attr-name\" >defaultOpenKeys</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token string\" >'sub1'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n          <span class=\"token attr-name\" >selectedKeys</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >[</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>state<span class=\"token punctuation\" >.</span>current<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >}</span></span>\n          <span class=\"token attr-name\" >mode</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>inline<span class=\"token punctuation\" >\"</span></span>\n        <span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mail<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation One<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >3</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>appstore<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigtion Two<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >5</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>6<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Submenu<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>7<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >7</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n              <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >8</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub4<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation Three<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>9<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >9</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>10<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >10</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>11<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >11</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n            <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>12<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >12</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n          <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Sider</span> <span class=\"token punctuation\" >/></span></span><span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;var Sider = _react2.default.createClass({
	      displayName: 'Sider',
	      getInitialState: function getInitialState() {
	        return {
	          theme: 'light' };
	      },
	      changeTheme: function changeTheme(value) {
	        this.setState({ theme: value ? 'dark' : 'light' });
	      },
	      handleClick: function handleClick(e) {
	        console.log('click ', e);this.setState({ current: e.key });
	      },
	      render: function render() {
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_switch2.default, { onChange: this.changeTheme, checkedChildren: 'Dark', unCheckedChildren: 'Light' }),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _menu2.default,
	            { theme: this.state.theme, onClick: this.handleClick, style: { width: 240 }, defaultOpenKeys: ['sub1'], selectedKeys: [this.state.current], mode: 'inline' },
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub1', title: _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_icon2.default, { type: 'mail' }),
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Navigation One'
	                  )
	                ) },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '1' },
	                'Option 1'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '2' },
	                'Option 2'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '3' },
	                'Option 3'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '4' },
	                'Option 4'
	              )
	            ),
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub2', title: _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_icon2.default, { type: 'appstore' }),
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Navigtion Two'
	                  )
	                ) },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '5' },
	                'Option 5'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '6' },
	                'Option 6'
	              ),
	              _react2.default.createElement(
	                SubMenu,
	                { key: 'sub3', title: 'Submenu' },
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '7' },
	                  'Option 7'
	                ),
	                _react2.default.createElement(
	                  _menu2.default.Item,
	                  { key: '8' },
	                  'Option 8'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              SubMenu,
	              { key: 'sub4', title: _react2.default.createElement(
	                  'span',
	                  null,
	                  _react2.default.createElement(_icon2.default, { type: 'setting' }),
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Navigation Three'
	                  )
	                ) },
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '9' },
	                'Option 9'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '10' },
	                'Option 10'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '11' },
	                'Option 11'
	              ),
	              _react2.default.createElement(
	                _menu2.default.Item,
	                { key: '12' },
	                'Option 12'
	              )
	            )
	          )
	        );
	      }
	    });return _react2.default.createElement(Sider, null);
	  }
	};

/***/ },

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(14);

	var _icon = __webpack_require__(10);

	var _icon2 = _interopRequireDefault(_icon);

	var _style4 = __webpack_require__(35);

	var _menu = __webpack_require__(34);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "子菜单是弹出的形式。"]],
	    "en-US": [["p", "Submenus open as pop-ups."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "垂直菜单",
	      "en-US": "Vertical menu"
	    },
	    "filename": "components/menu/demo/vertical.md",
	    "id": "components-menu-demo-vertical"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Menu<span class=\"token punctuation\" >,</span> Icon <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >from</span> <span class=\"token string\" >'antd'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> SubMenu <span class=\"token operator\" >=</span> Menu<span class=\"token punctuation\" >.</span>SubMenu<span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >const</span> MenuItemGroup <span class=\"token operator\" >=</span> Menu<span class=\"token punctuation\" >.</span>ItemGroup<span class=\"token punctuation\" >;</span>\n\n<span class=\"token keyword\" >function</span> <span class=\"token function\" >handleClick</span><span class=\"token punctuation\" >(</span>e<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'click'</span><span class=\"token punctuation\" >,</span> e<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n<span class=\"token punctuation\" >}</span>\n\nReactDOM<span class=\"token punctuation\" >.</span><span class=\"token function\" >render</span><span class=\"token punctuation\" >(</span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu</span> <span class=\"token attr-name\" >onClick</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span>handleClick<span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >style</span><span class=\"token script language-javascript\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >{</span><span class=\"token punctuation\" >{</span> width<span class=\"token punctuation\" >:</span> <span class=\"token number\" >240</span> <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span></span> <span class=\"token attr-name\" >mode</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>vertical<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub1<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>mail<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation One<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItemGroup</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Item</span> <span class=\"token attr-name\" >1\"</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>1<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >1</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>2<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >2</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItemGroup</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>MenuItemGroup</span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Iteom</span> <span class=\"token attr-name\" >2\"</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>3<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >3</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >4</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>MenuItemGroup</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub2<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>appstore<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation Two<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>5<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >5</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>6<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >6</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub3<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Submenu<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>7<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >7</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n        <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>8<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >8</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>SubMenu</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>sub4<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >title={&lt;span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>icon</span> <span class=\"token attr-name\" >type</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>setting<span class=\"token punctuation\" >\"</span></span> <span class=\"token punctuation\" >/></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>span</span><span class=\"token punctuation\" >></span></span>Navigation Three<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>span</span><span class=\"token punctuation\" >></span></span><span class=\"token punctuation\" >}</span><span class=\"token operator\" >></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>9<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >9</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>10<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >10</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>11<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >11</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n      <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>Menu.Item</span> <span class=\"token attr-name\" >key</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>12<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Option <span class=\"token number\" >12</span><span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu.Item</span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>SubMenu</span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>Menu</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token punctuation\" >,</span> mountNode<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;
	    var MenuItemGroup = _menu2.default.ItemGroup;function handleClick(e) {
	      console.log('click', e);
	    }return _react2.default.createElement(
	      _menu2.default,
	      { onClick: handleClick, style: { width: 240 }, mode: 'vertical' },
	      _react2.default.createElement(
	        SubMenu,
	        { key: 'sub1', title: _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(_icon2.default, { type: 'mail' }),
	            _react2.default.createElement(
	              'span',
	              null,
	              'Navigation One'
	            )
	          ) },
	        _react2.default.createElement(
	          MenuItemGroup,
	          { title: 'Item 1' },
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '1' },
	            'Option 1'
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '2' },
	            'Option 2'
	          )
	        ),
	        _react2.default.createElement(
	          MenuItemGroup,
	          { title: 'Iteom 2' },
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '3' },
	            'Option 3'
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '4' },
	            'Option 4'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        SubMenu,
	        { key: 'sub2', title: _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(_icon2.default, { type: 'appstore' }),
	            _react2.default.createElement(
	              'span',
	              null,
	              'Navigation Two'
	            )
	          ) },
	        _react2.default.createElement(
	          _menu2.default.Item,
	          { key: '5' },
	          'Option 5'
	        ),
	        _react2.default.createElement(
	          _menu2.default.Item,
	          { key: '6' },
	          'Option 6'
	        ),
	        _react2.default.createElement(
	          SubMenu,
	          { key: 'sub3', title: 'Submenu' },
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '7' },
	            'Option 7'
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '8' },
	            'Option 8'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        SubMenu,
	        { key: 'sub4', title: _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement('icon', { type: 'setting' }),
	            _react2.default.createElement(
	              'span',
	              null,
	              'Navigation Three'
	            )
	          ) },
	        _react2.default.createElement(
	          _menu2.default.Item,
	          { key: '9' },
	          'Option 9'
	        ),
	        _react2.default.createElement(
	          _menu2.default.Item,
	          { key: '10' },
	          'Option 10'
	        ),
	        _react2.default.createElement(
	          _menu2.default.Item,
	          { key: '11' },
	          'Option 11'
	        ),
	        _react2.default.createElement(
	          _menu2.default.Item,
	          { key: '12' },
	          'Option 12'
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 1208:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'horizontal': __webpack_require__(801),
	    'sider-current': __webpack_require__(802),
	    'sider': __webpack_require__(803),
	    'switch-mode': __webpack_require__(804),
	    'theme': __webpack_require__(805),
	    'vertical': __webpack_require__(806),
	}

/***/ }

});