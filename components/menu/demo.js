webpackJsonp([23,211],{

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "水平的顶部导航菜单。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Horizontal top navigation menu."
	      ]
	    ]
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> MenuItemGroup <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>ItemGroup<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      current<span class=\"token punctuation\">:</span> <span class=\"token string\">'mail'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click '</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      current<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Menu\n        onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleClick}\n        selectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">]</span>}\n        mode<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"mail\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"mail\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Navigation One\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"app\"</span> disabled<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"appstore\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Navigation Two\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>SubMenu title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Navigation Three <span class=\"token operator\">-</span> Submenu<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>MenuItemGroup title<span class=\"token operator\">=</span><span class=\"token string\">\"Item 1\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"setting:1\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"setting:2\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>MenuItemGroup<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>MenuItemGroup title<span class=\"token operator\">=</span><span class=\"token string\">\"Item 2\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"setting:3\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"setting:4\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>MenuItemGroup<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"alipay\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"https://ant.design\"</span> target<span class=\"token operator\">=</span><span class=\"token string\">\"_blank\"</span> rel<span class=\"token operator\">=</span><span class=\"token string\">\"noopener noreferrer\"</span><span class=\"token operator\">></span>Navigation Four <span class=\"token operator\">-</span> Link<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var SubMenu = _antd.Menu.SubMenu;
	  var MenuItemGroup = _antd.Menu.ItemGroup;
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        current: 'mail'
	      };
	    },
	    handleClick: function handleClick(e) {
	      console.log('click ', e);
	      this.setState({
	        current: e.key
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        _antd.Menu,
	        {
	          onClick: this.handleClick,
	          selectedKeys: [this.state.current],
	          mode: "horizontal"
	        },
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "mail"
	          },
	          React.createElement(_antd.Icon, {
	            type: "mail"
	          }),
	          "Navigation One"
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "app",
	            disabled: true
	          },
	          React.createElement(_antd.Icon, {
	            type: "appstore"
	          }),
	          "Navigation Two"
	        ),
	        React.createElement(
	          SubMenu,
	          {
	            title: React.createElement(
	              "span",
	              null,
	              React.createElement(_antd.Icon, {
	                type: "setting"
	              }),
	              "Navigation Three - Submenu"
	            )
	          },
	          React.createElement(
	            MenuItemGroup,
	            {
	              title: "Item 1"
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "setting:1"
	              },
	              "Option 1"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "setting:2"
	              },
	              "Option 2"
	            )
	          ),
	          React.createElement(
	            MenuItemGroup,
	            {
	              title: "Item 2"
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "setting:3"
	              },
	              "Option 3"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "setting:4"
	              },
	              "Option 4"
	            )
	          )
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "alipay"
	          },
	          React.createElement(
	            "a",
	            {
	              href: "https://ant.design",
	              target: "_blank",
	              rel: "noopener noreferrer"
	            },
	            "Navigation Four - Link"
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "该用法要求 antd@2.0+"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact."
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "This demo is for antd@2.0+."
	        ]
	      ]
	    ]
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Sider <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      current<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n      openKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Clicked: '</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ current<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>key }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onOpenChange</span><span class=\"token punctuation\">(</span>openKeys<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> latestOpenKey <span class=\"token operator\">=</span> openKeys<span class=\"token punctuation\">.</span><span class=\"token function\">find</span><span class=\"token punctuation\">(</span>key <span class=\"token operator\">=</span><span class=\"token operator\">></span> !<span class=\"token punctuation\">(</span>state<span class=\"token punctuation\">.</span>openKeys<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> latestCloseKey <span class=\"token operator\">=</span> state<span class=\"token punctuation\">.</span>openKeys<span class=\"token punctuation\">.</span><span class=\"token function\">find</span><span class=\"token punctuation\">(</span>key <span class=\"token operator\">=</span><span class=\"token operator\">></span> !<span class=\"token punctuation\">(</span>openKeys<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n    let nextOpenKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>latestOpenKey<span class=\"token punctuation\">)</span> {\n      nextOpenKeys <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span><span class=\"token function\">getAncestorKeys</span><span class=\"token punctuation\">(</span>latestOpenKey<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>latestOpenKey<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>latestCloseKey<span class=\"token punctuation\">)</span> {\n      nextOpenKeys <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span><span class=\"token function\">getAncestorKeys</span><span class=\"token punctuation\">(</span>latestCloseKey<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ openKeys<span class=\"token punctuation\">:</span> nextOpenKeys }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getAncestorKeys</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> map <span class=\"token operator\">=</span> {\n      sub3<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'sub2'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return map<span class=\"token punctuation\">[</span>key<span class=\"token punctuation\">]</span> || <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Menu\n        mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span>\n        openKeys<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>openKeys}\n        selectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">]</span>}\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }}\n        onOpenChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onOpenChange}\n        onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleClick}\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub1\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"mail\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation One<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub2\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"appstore\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation Two<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub3\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Submenu\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">7</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub4\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation Three<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">9</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"10\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">10</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"11\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">11</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"12\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Sider <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var SubMenu = _antd.Menu.SubMenu;
	  var Sider = React.createClass({
	    displayName: "Sider",
	    getInitialState: function getInitialState() {
	      return {
	        current: '1',
	        openKeys: []
	      };
	    },
	    handleClick: function handleClick(e) {
	      console.log('Clicked: ', e);
	      this.setState({
	        current: e.key
	      });
	    },
	    onOpenChange: function onOpenChange(openKeys) {
	      var state = this.state;
	      var latestOpenKey = openKeys.find(function (key) {
	        return !(state.openKeys.indexOf(key) > -1);
	      });
	      var latestCloseKey = state.openKeys.find(function (key) {
	        return !(openKeys.indexOf(key) > -1);
	      });
	      var nextOpenKeys = [];

	      if (latestOpenKey) {
	        nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	      }

	      if (latestCloseKey) {
	        nextOpenKeys = this.getAncestorKeys(latestCloseKey);
	      }

	      this.setState({
	        openKeys: nextOpenKeys
	      });
	    },
	    getAncestorKeys: function getAncestorKeys(key) {
	      var map = {
	        sub3: ['sub2']
	      };
	      return map[key] || [];
	    },
	    render: function render() {
	      return React.createElement(
	        _antd.Menu,
	        {
	          mode: "inline",
	          openKeys: this.state.openKeys,
	          selectedKeys: [this.state.current],
	          style: {
	            width: 240
	          },
	          onOpenChange: this.onOpenChange,
	          onClick: this.handleClick
	        },
	        React.createElement(
	          SubMenu,
	          {
	            key: "sub1",
	            title: React.createElement(
	              "span",
	              null,
	              React.createElement(_antd.Icon, {
	                type: "mail"
	              }),
	              React.createElement(
	                "span",
	                null,
	                "Navigation One"
	              )
	            )
	          },
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "1"
	            },
	            "Option 1"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "2"
	            },
	            "Option 2"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "3"
	            },
	            "Option 3"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "4"
	            },
	            "Option 4"
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
	                type: "appstore"
	              }),
	              React.createElement(
	                "span",
	                null,
	                "Navigation Two"
	              )
	            )
	          },
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "5"
	            },
	            "Option 5"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "6"
	            },
	            "Option 6"
	          ),
	          React.createElement(
	            SubMenu,
	            {
	              key: "sub3",
	              title: "Submenu"
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "7"
	              },
	              "Option 7"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "8"
	              },
	              "Option 8"
	            )
	          )
	        ),
	        React.createElement(
	          SubMenu,
	          {
	            key: "sub4",
	            title: React.createElement(
	              "span",
	              null,
	              React.createElement(_antd.Icon, {
	                type: "setting"
	              }),
	              React.createElement(
	                "span",
	                null,
	                "Navigation Three"
	              )
	            )
	          },
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "9"
	            },
	            "Option 9"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "10"
	            },
	            "Option 10"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "11"
	            },
	            "Option 11"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "12"
	            },
	            "Option 12"
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(Sider, null);
	}
	};

/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "垂直菜单，子菜单内嵌在菜单区域。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Vertical menu with inline submenus."
	      ]
	    ]
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> MenuItemGroup <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>ItemGroup<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Sider <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      current<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click '</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      current<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Menu onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleClick}\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }}\n        defaultOpenKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span>}\n        selectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">]</span>}\n        mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span>\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub1\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"mail\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation One<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>MenuItemGroup title<span class=\"token operator\">=</span><span class=\"token string\">\"Item 1\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>MenuItemGroup<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>MenuItemGroup title<span class=\"token operator\">=</span><span class=\"token string\">\"Item 2\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>MenuItemGroup<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub2\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"appstore\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation Two<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub3\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Submenu\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">7</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub4\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation Three<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">9</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"10\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">10</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"11\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">11</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"12\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Sider <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var SubMenu = _antd.Menu.SubMenu;
	  var MenuItemGroup = _antd.Menu.ItemGroup;
	  var Sider = React.createClass({
	    displayName: "Sider",
	    getInitialState: function getInitialState() {
	      return {
	        current: '1'
	      };
	    },
	    handleClick: function handleClick(e) {
	      console.log('click ', e);
	      this.setState({
	        current: e.key
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        _antd.Menu,
	        {
	          onClick: this.handleClick,
	          style: {
	            width: 240
	          },
	          defaultOpenKeys: ['sub1'],
	          selectedKeys: [this.state.current],
	          mode: "inline"
	        },
	        React.createElement(
	          SubMenu,
	          {
	            key: "sub1",
	            title: React.createElement(
	              "span",
	              null,
	              React.createElement(_antd.Icon, {
	                type: "mail"
	              }),
	              React.createElement(
	                "span",
	                null,
	                "Navigation One"
	              )
	            )
	          },
	          React.createElement(
	            MenuItemGroup,
	            {
	              title: "Item 1"
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "1"
	              },
	              "Option 1"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "Option 2"
	            )
	          ),
	          React.createElement(
	            MenuItemGroup,
	            {
	              title: "Item 2"
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "Option 3"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "4"
	              },
	              "Option 4"
	            )
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
	                type: "appstore"
	              }),
	              React.createElement(
	                "span",
	                null,
	                "Navigation Two"
	              )
	            )
	          },
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "5"
	            },
	            "Option 5"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "6"
	            },
	            "Option 6"
	          ),
	          React.createElement(
	            SubMenu,
	            {
	              key: "sub3",
	              title: "Submenu"
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "7"
	              },
	              "Option 7"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "8"
	              },
	              "Option 8"
	            )
	          )
	        ),
	        React.createElement(
	          SubMenu,
	          {
	            key: "sub4",
	            title: React.createElement(
	              "span",
	              null,
	              React.createElement(_antd.Icon, {
	                type: "setting"
	              }),
	              React.createElement(
	                "span",
	                null,
	                "Navigation Three"
	              )
	            )
	          },
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "9"
	            },
	            "Option 9"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "10"
	            },
	            "Option 10"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "11"
	            },
	            "Option 11"
	          ),
	          React.createElement(
	            _antd.Menu.Item,
	            {
	              key: "12"
	            },
	            "Option 12"
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(Sider, null);
	}
	};

/***/ },

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "展示动态切换模式。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Show the dynamic switching mode (between 'inline' and 'vertical')."
	      ]
	    ]
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Switch</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> MenuItemGroup <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>ItemGroup<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Sider <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      mode<span class=\"token punctuation\">:</span> <span class=\"token string\">'inline'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">changeMode</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      mode<span class=\"token punctuation\">:</span> value <span class=\"token operator\">?</span> <span class=\"token string\">'vertical'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'inline'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>changeMode} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu\n          style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }}\n          defaultOpenKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span>}\n          mode<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mode}\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub1\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"mail\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation One<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>MenuItemGroup title<span class=\"token operator\">=</span><span class=\"token string\">\"Item 1\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>MenuItemGroup<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>MenuItemGroup title<span class=\"token operator\">=</span><span class=\"token string\">\"Item 2\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>MenuItemGroup<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub2\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"appstore\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation Two<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub3\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Submenu\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">7</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub4\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation Three<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">9</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"10\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">10</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"11\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">11</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"12\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Sider <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var SubMenu = _antd.Menu.SubMenu;
	  var MenuItemGroup = _antd.Menu.ItemGroup;
	  var Sider = React.createClass({
	    displayName: "Sider",
	    getInitialState: function getInitialState() {
	      return {
	        mode: 'inline'
	      };
	    },
	    changeMode: function changeMode(value) {
	      this.setState({
	        mode: value ? 'vertical' : 'inline'
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_antd.Switch, {
	          onChange: this.changeMode
	        }),
	        React.createElement("br", null),
	        React.createElement("br", null),
	        React.createElement(
	          _antd.Menu,
	          {
	            style: {
	              width: 240
	            },
	            defaultOpenKeys: ['sub1'],
	            mode: this.state.mode
	          },
	          React.createElement(
	            SubMenu,
	            {
	              key: "sub1",
	              title: React.createElement(
	                "span",
	                null,
	                React.createElement(_antd.Icon, {
	                  type: "mail"
	                }),
	                React.createElement(
	                  "span",
	                  null,
	                  "Navigation One"
	                )
	              )
	            },
	            React.createElement(
	              MenuItemGroup,
	              {
	                title: "Item 1"
	              },
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "1"
	                },
	                "Option 1"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "2"
	                },
	                "Option 2"
	              )
	            ),
	            React.createElement(
	              MenuItemGroup,
	              {
	                title: "Item 2"
	              },
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "3"
	                },
	                "Option 3"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "4"
	                },
	                "Option 4"
	              )
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
	                  type: "appstore"
	                }),
	                React.createElement(
	                  "span",
	                  null,
	                  "Navigation Two"
	                )
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "5"
	              },
	              "Option 5"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "6"
	              },
	              "Option 6"
	            ),
	            React.createElement(
	              SubMenu,
	              {
	                key: "sub3",
	                title: "Submenu"
	              },
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "7"
	                },
	                "Option 7"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "8"
	                },
	                "Option 8"
	              )
	            )
	          ),
	          React.createElement(
	            SubMenu,
	            {
	              key: "sub4",
	              title: React.createElement(
	                "span",
	                null,
	                React.createElement(_antd.Icon, {
	                  type: "setting"
	                }),
	                React.createElement(
	                  "span",
	                  null,
	                  "Navigation Three"
	                )
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "9"
	              },
	              "Option 9"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "10"
	              },
	              "Option 10"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "11"
	              },
	              "Option 11"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "12"
	              },
	              "Option 12"
	            )
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(Sider, null);
	}
	};

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "内建了两套主题 ",
	        [
	          "code",
	          "light|dark"
	        ],
	        "，默认 ",
	        [
	          "code",
	          "light"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "There are two built-in themes: 'light' and 'dark'. The default value is 'light'."
	      ]
	    ]
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Switch</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Sider <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      theme<span class=\"token punctuation\">:</span> <span class=\"token string\">'dark'</span><span class=\"token punctuation\">,</span>\n      current<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">changeTheme</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      theme<span class=\"token punctuation\">:</span> value <span class=\"token operator\">?</span> <span class=\"token string\">'dark'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'light'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click '</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      current<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span>\n          checked<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>theme <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'dark'</span>}\n          onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>changeTheme}\n          checkedChildren<span class=\"token operator\">=</span><span class=\"token string\">\"Dark\"</span>\n          unCheckedChildren<span class=\"token operator\">=</span><span class=\"token string\">\"Light\"</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu\n          theme<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>theme}\n          onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleClick}\n          style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }}\n          defaultOpenKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'sub1'</span><span class=\"token punctuation\">]</span>}\n          selectedKeys<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">]</span>}\n          mode<span class=\"token operator\">=</span><span class=\"token string\">\"inline\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub1\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"mail\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation One<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub2\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"appstore\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigtion Two<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub3\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Submenu\"</span><span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">7</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub4\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation Three<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">9</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"10\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">10</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"11\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">11</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"12\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Sider <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var SubMenu = _antd.Menu.SubMenu;
	  var Sider = React.createClass({
	    displayName: "Sider",
	    getInitialState: function getInitialState() {
	      return {
	        theme: 'dark',
	        current: '1'
	      };
	    },
	    changeTheme: function changeTheme(value) {
	      this.setState({
	        theme: value ? 'dark' : 'light'
	      });
	    },
	    handleClick: function handleClick(e) {
	      console.log('click ', e);
	      this.setState({
	        current: e.key
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_antd.Switch, {
	          checked: this.state.theme === 'dark',
	          onChange: this.changeTheme,
	          checkedChildren: "Dark",
	          unCheckedChildren: "Light"
	        }),
	        React.createElement("br", null),
	        React.createElement("br", null),
	        React.createElement(
	          _antd.Menu,
	          {
	            theme: this.state.theme,
	            onClick: this.handleClick,
	            style: {
	              width: 240
	            },
	            defaultOpenKeys: ['sub1'],
	            selectedKeys: [this.state.current],
	            mode: "inline"
	          },
	          React.createElement(
	            SubMenu,
	            {
	              key: "sub1",
	              title: React.createElement(
	                "span",
	                null,
	                React.createElement(_antd.Icon, {
	                  type: "mail"
	                }),
	                React.createElement(
	                  "span",
	                  null,
	                  "Navigation One"
	                )
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "1"
	              },
	              "Option 1"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "2"
	              },
	              "Option 2"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "3"
	              },
	              "Option 3"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "4"
	              },
	              "Option 4"
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
	                  type: "appstore"
	                }),
	                React.createElement(
	                  "span",
	                  null,
	                  "Navigtion Two"
	                )
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "5"
	              },
	              "Option 5"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "6"
	              },
	              "Option 6"
	            ),
	            React.createElement(
	              SubMenu,
	              {
	                key: "sub3",
	                title: "Submenu"
	              },
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "7"
	                },
	                "Option 7"
	              ),
	              React.createElement(
	                _antd.Menu.Item,
	                {
	                  key: "8"
	                },
	                "Option 8"
	              )
	            )
	          ),
	          React.createElement(
	            SubMenu,
	            {
	              key: "sub4",
	              title: React.createElement(
	                "span",
	                null,
	                React.createElement(_antd.Icon, {
	                  type: "setting"
	                }),
	                React.createElement(
	                  "span",
	                  null,
	                  "Navigation Three"
	                )
	              )
	            },
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "9"
	              },
	              "Option 9"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "10"
	              },
	              "Option 10"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "11"
	              },
	              "Option 11"
	            ),
	            React.createElement(
	              _antd.Menu.Item,
	              {
	                key: "12"
	              },
	              "Option 12"
	            )
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(Sider, null);
	}
	};

/***/ },

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "子菜单是弹出的形式。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Submenus open as pop-ups."
	      ]
	    ]
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> MenuItemGroup <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>ItemGroup<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">handleClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Menu onClick<span class=\"token operator\">=</span>{handleClick} style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }} mode<span class=\"token operator\">=</span><span class=\"token string\">\"vertical\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub1\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"mail\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation One<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>MenuItemGroup title<span class=\"token operator\">=</span><span class=\"token string\">\"Item 1\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>MenuItemGroup<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>MenuItemGroup title<span class=\"token operator\">=</span><span class=\"token string\">\"Iteom 2\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>MenuItemGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub2\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"appstore\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation Two<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub3\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Submenu\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">7</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>SubMenu key<span class=\"token operator\">=</span><span class=\"token string\">\"sub4\"</span> title<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>icon type<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Navigation Three<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">9</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"10\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">10</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"11\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">11</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"12\"</span><span class=\"token operator\">></span>Option <span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var SubMenu = _antd.Menu.SubMenu;
	  var MenuItemGroup = _antd.Menu.ItemGroup;

	  function handleClick(e) {
	    console.log('click', e);
	  }

	  return React.createElement(
	    _antd.Menu,
	    {
	      onClick: handleClick,
	      style: {
	        width: 240
	      },
	      mode: "vertical"
	    },
	    React.createElement(
	      SubMenu,
	      {
	        key: "sub1",
	        title: React.createElement(
	          "span",
	          null,
	          React.createElement(_antd.Icon, {
	            type: "mail"
	          }),
	          React.createElement(
	            "span",
	            null,
	            "Navigation One"
	          )
	        )
	      },
	      React.createElement(
	        MenuItemGroup,
	        {
	          title: "Item 1"
	        },
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "1"
	          },
	          "Option 1"
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "2"
	          },
	          "Option 2"
	        )
	      ),
	      React.createElement(
	        MenuItemGroup,
	        {
	          title: "Iteom 2"
	        },
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "3"
	          },
	          "Option 3"
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "4"
	          },
	          "Option 4"
	        )
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
	            type: "appstore"
	          }),
	          React.createElement(
	            "span",
	            null,
	            "Navigation Two"
	          )
	        )
	      },
	      React.createElement(
	        _antd.Menu.Item,
	        {
	          key: "5"
	        },
	        "Option 5"
	      ),
	      React.createElement(
	        _antd.Menu.Item,
	        {
	          key: "6"
	        },
	        "Option 6"
	      ),
	      React.createElement(
	        SubMenu,
	        {
	          key: "sub3",
	          title: "Submenu"
	        },
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "7"
	          },
	          "Option 7"
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "8"
	          },
	          "Option 8"
	        )
	      )
	    ),
	    React.createElement(
	      SubMenu,
	      {
	        key: "sub4",
	        title: React.createElement(
	          "span",
	          null,
	          React.createElement("icon", {
	            type: "setting"
	          }),
	          React.createElement(
	            "span",
	            null,
	            "Navigation Three"
	          )
	        )
	      },
	      React.createElement(
	        _antd.Menu.Item,
	        {
	          key: "9"
	        },
	        "Option 9"
	      ),
	      React.createElement(
	        _antd.Menu.Item,
	        {
	          key: "10"
	        },
	        "Option 10"
	      ),
	      React.createElement(
	        _antd.Menu.Item,
	        {
	          key: "11"
	        },
	        "Option 11"
	      ),
	      React.createElement(
	        _antd.Menu.Item,
	        {
	          key: "12"
	        },
	        "Option 12"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 1053:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'horizontal': __webpack_require__(745),
	    'sider-current': __webpack_require__(746),
	    'sider': __webpack_require__(747),
	    'switch-mode': __webpack_require__(748),
	    'theme': __webpack_require__(749),
	    'vertical': __webpack_require__(750),
	}

/***/ }

});