webpackJsonp([17,211],{

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "最简单的下拉菜单。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The most basic dropdown menu."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/dropdown/demo/basic.md",
	    "id": "components-dropdown-demo-basic"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Menu<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a target<span class=\"token operator\">=</span><span class=\"token string\">\"_blank\"</span> rel<span class=\"token operator\">=</span><span class=\"token string\">\"noopener noreferrer\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"http://www.alipay.com/\"</span><span class=\"token operator\">></span>1st menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a target<span class=\"token operator\">=</span><span class=\"token string\">\"_blank\"</span> rel<span class=\"token operator\">=</span><span class=\"token string\">\"noopener noreferrer\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"http://www.taobao.com/\"</span><span class=\"token operator\">></span>2nd menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a target<span class=\"token operator\">=</span><span class=\"token string\">\"_blank\"</span> rel<span class=\"token operator\">=</span><span class=\"token string\">\"noopener noreferrer\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"http://www.tmall.com/\"</span><span class=\"token operator\">></span>3d menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Dropdown overlay<span class=\"token operator\">=</span>{menu}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-dropdown-link\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>\n      Hover me <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Dropdown<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var menu = React.createElement(
	    _antd.Menu,
	    null,
	    React.createElement(
	      _antd.Menu.Item,
	      null,
	      React.createElement(
	        "a",
	        {
	          target: "_blank",
	          rel: "noopener noreferrer",
	          href: "http://www.alipay.com/"
	        },
	        "1st menu item"
	      )
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      null,
	      React.createElement(
	        "a",
	        {
	          target: "_blank",
	          rel: "noopener noreferrer",
	          href: "http://www.taobao.com/"
	        },
	        "2nd menu item"
	      )
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      null,
	      React.createElement(
	        "a",
	        {
	          target: "_blank",
	          rel: "noopener noreferrer",
	          href: "http://www.tmall.com/"
	        },
	        "3d menu item"
	      )
	    )
	  );
	  return React.createElement(
	    _antd.Dropdown,
	    {
	      overlay: menu
	    },
	    React.createElement(
	      "a",
	      {
	        className: "ant-dropdown-link",
	        href: "#"
	      },
	      "Hover me ",
	      React.createElement(_antd.Icon, {
	        type: "down"
	      })
	    )
	  );
	}
	};

/***/ },

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "左边是按钮，右边是额外的相关功能菜单。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A button is on the left, and a related functional menu is on the right."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "带下拉框的按钮",
	      "en-US": "Button with dropdown menu"
	    },
	    "filename": "components/dropdown/demo/dropdown-button.md",
	    "id": "components-dropdown-demo-dropdown-button"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">handleButtonClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Click on left button.'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click left button'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">handleMenuClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Click on menu item.'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Menu onClick<span class=\"token operator\">=</span>{handleMenuClick}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>1st menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>2nd menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>3d menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Dropdown<span class=\"token punctuation\">.</span>Button onClick<span class=\"token operator\">=</span>{handleButtonClick} overlay<span class=\"token operator\">=</span>{menu}<span class=\"token operator\">></span>\n      Dropdown\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Dropdown<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Dropdown<span class=\"token punctuation\">.</span>Button\n      onClick<span class=\"token operator\">=</span>{handleButtonClick} overlay<span class=\"token operator\">=</span>{menu}\n      disabled\n      style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }}\n    <span class=\"token operator\">></span>\n      Dropdown\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Dropdown<span class=\"token punctuation\">.</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Dropdown overlay<span class=\"token operator\">=</span>{menu}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }}<span class=\"token operator\">></span>\n        Button <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Dropdown<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function handleButtonClick(e) {
	    _antd.message.info('Click on left button.');

	    console.log('click left button', e);
	  }

	  function handleMenuClick(e) {
	    _antd.message.info('Click on menu item.');

	    console.log('click', e);
	  }

	  var menu = React.createElement(
	    _antd.Menu,
	    {
	      onClick: handleMenuClick
	    },
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "1"
	      },
	      "1st menu item"
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "2"
	      },
	      "2nd menu item"
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "3"
	      },
	      "3d menu item"
	    )
	  );
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Dropdown.Button,
	      {
	        onClick: handleButtonClick,
	        overlay: menu
	      },
	      "Dropdown"
	    ),
	    React.createElement(
	      _antd.Dropdown.Button,
	      {
	        onClick: handleButtonClick,
	        overlay: menu,
	        disabled: true,
	        style: {
	          marginLeft: 8
	        }
	      },
	      "Dropdown"
	    ),
	    React.createElement(
	      _antd.Dropdown,
	      {
	        overlay: menu
	      },
	      React.createElement(
	        _antd.Button,
	        {
	          style: {
	            marginLeft: 8
	          }
	        },
	        "Button ",
	        React.createElement(_antd.Icon, {
	          type: "down"
	        })
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "An event will be triggered when you click menu items, in which you can make different operations according to item's key."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "触发事件",
	      "en-US": "Click event"
	    },
	    "filename": "components/dropdown/demo/event.md",
	    "id": "components-dropdown-demo-event"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> onClick <span class=\"token operator\">=</span> function <span class=\"token punctuation\">(</span>{ key }<span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span>`Click on item ${key}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Menu onClick<span class=\"token operator\">=</span>{onClick}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>1st menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>2nd memu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>3d menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Dropdown overlay<span class=\"token operator\">=</span>{menu}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-dropdown-link\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>\n      Hover me<span class=\"token punctuation\">,</span> Click menu item <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Dropdown<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var onClick = function onClick(_ref) {
	    var key = _ref.key;

	    _antd.message.info("Click on item " + key);
	  };

	  var menu = React.createElement(
	    _antd.Menu,
	    {
	      onClick: onClick
	    },
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "1"
	      },
	      "1st menu item"
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "2"
	      },
	      "2nd memu item"
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "3"
	      },
	      "3d menu item"
	    )
	  );
	  return React.createElement(
	    _antd.Dropdown,
	    {
	      overlay: menu
	    },
	    React.createElement(
	      "a",
	      {
	        className: "ant-dropdown-link",
	        href: "#"
	      },
	      "Hover me, Click menu item ",
	      React.createElement(_antd.Icon, {
	        type: "down"
	      })
	    )
	  );
	}
	};

/***/ },

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "分割线和不可用菜单项。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Divider and disabled menu item."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "其他元素",
	      "en-US": "Other elements"
	    },
	    "filename": "components/dropdown/demo/item.md",
	    "id": "components-dropdown-demo-item"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Menu<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"0\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a target<span class=\"token operator\">=</span><span class=\"token string\">\"_blank\"</span> rel<span class=\"token operator\">=</span><span class=\"token string\">\"noopener noreferrer\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"http://www.alipay.com/\"</span><span class=\"token operator\">></span>1st menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a target<span class=\"token operator\">=</span><span class=\"token string\">\"_blank\"</span> rel<span class=\"token operator\">=</span><span class=\"token string\">\"noopener noreferrer\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"http://www.taobao.com/\"</span><span class=\"token operator\">></span>2nd menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Divider <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span> disabled<span class=\"token operator\">></span>3d menu item（disabled）<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Dropdown overlay<span class=\"token operator\">=</span>{menu}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-dropdown-link\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>\n      Hover me <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Dropdown<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var menu = React.createElement(
	    _antd.Menu,
	    null,
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "0"
	      },
	      React.createElement(
	        "a",
	        {
	          target: "_blank",
	          rel: "noopener noreferrer",
	          href: "http://www.alipay.com/"
	        },
	        "1st menu item"
	      )
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "1"
	      },
	      React.createElement(
	        "a",
	        {
	          target: "_blank",
	          rel: "noopener noreferrer",
	          href: "http://www.taobao.com/"
	        },
	        "2nd menu item"
	      )
	    ),
	    React.createElement(_antd.Menu.Divider, null),
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "3",
	        disabled: true
	      },
	      "3d menu item（disabled）"
	    )
	  );
	  return React.createElement(
	    _antd.Dropdown,
	    {
	      overlay: menu
	    },
	    React.createElement(
	      "a",
	      {
	        className: "ant-dropdown-link",
	        href: "#"
	      },
	      "Hover me ",
	      React.createElement(_antd.Icon, {
	        type: "down"
	      })
	    )
	  );
	}
	};

/***/ },

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "默认是点击关闭菜单，可以关闭此功能。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The default is to close the menu when you click on menu items, this feature can be turned off."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "菜单隐藏方式",
	      "en-US": "The way of hiding menu."
	    },
	    "filename": "components/dropdown/demo/overlay-visible.md",
	    "id": "components-dropdown-demo-overlay-visible"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> OverlayVisible <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleMenuClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>key <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleVisibleChange</span><span class=\"token punctuation\">(</span>flag<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible<span class=\"token punctuation\">:</span> flag }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Menu onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleMenuClick}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Clicking me will <span class=\"token operator\">not</span> close the menu<span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Clicking me will <span class=\"token operator\">not</span> close the menu also<span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Clicking me will close the menu<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Dropdown overlay<span class=\"token operator\">=</span>{menu}\n        onVisibleChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleVisibleChange}\n        visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible}\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-dropdown-link\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>\n          Hover me <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Dropdown<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>OverlayVisible <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var OverlayVisible = React.createClass({
	    displayName: "OverlayVisible",
	    getInitialState: function getInitialState() {
	      return {
	        visible: false
	      };
	    },
	    handleMenuClick: function handleMenuClick(e) {
	      if (e.key === '3') {
	        this.setState({
	          visible: false
	        });
	      }
	    },
	    handleVisibleChange: function handleVisibleChange(flag) {
	      this.setState({
	        visible: flag
	      });
	    },
	    render: function render() {
	      var menu = React.createElement(
	        _antd.Menu,
	        {
	          onClick: this.handleMenuClick
	        },
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "1"
	          },
	          "Clicking me will not close the menu."
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "2"
	          },
	          "Clicking me will not close the menu also."
	        ),
	        React.createElement(
	          _antd.Menu.Item,
	          {
	            key: "3"
	          },
	          "Clicking me will close the menu"
	        )
	      );
	      return React.createElement(
	        _antd.Dropdown,
	        {
	          overlay: menu,
	          onVisibleChange: this.handleVisibleChange,
	          visible: this.state.visible
	        },
	        React.createElement(
	          "a",
	          {
	            className: "ant-dropdown-link",
	            href: "#"
	          },
	          "Hover me ",
	          React.createElement(_antd.Icon, {
	            type: "down"
	          })
	        )
	      );
	    }
	  });
	  return React.createElement(OverlayVisible, null);
	}
	};

/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "传入的菜单里有多个层级。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The menu has multiple levels."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "多级菜单",
	      "en-US": "Cascading menu"
	    },
	    "filename": "components/dropdown/demo/sub-menu.md",
	    "id": "components-dropdown-demo-sub-menu"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Menu<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>1st menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>2nd menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>SubMenu title<span class=\"token operator\">=</span><span class=\"token string\">\"sub menu\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>3d menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>4th menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>SubMenu<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Dropdown overlay<span class=\"token operator\">=</span>{menu}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-dropdown-link\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>\n      Cascading menu <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Dropdown<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var SubMenu = _antd.Menu.SubMenu;
	  var menu = React.createElement(
	    _antd.Menu,
	    null,
	    React.createElement(
	      _antd.Menu.Item,
	      null,
	      "1st menu item"
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      null,
	      "2nd menu item"
	    ),
	    React.createElement(
	      SubMenu,
	      {
	        title: "sub menu"
	      },
	      React.createElement(
	        _antd.Menu.Item,
	        null,
	        "3d menu item"
	      ),
	      React.createElement(
	        _antd.Menu.Item,
	        null,
	        "4th menu item"
	      )
	    )
	  );
	  return React.createElement(
	    _antd.Dropdown,
	    {
	      overlay: menu
	    },
	    React.createElement(
	      "a",
	      {
	        className: "ant-dropdown-link",
	        href: "#"
	      },
	      "Cascading menu ",
	      React.createElement(_antd.Icon, {
	        type: "down"
	      })
	    )
	  );
	}
	};

/***/ },

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "默认是移入触发菜单，可以点击触发。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The default trigger mode is ",
	        [
	          "code",
	          "hover"
	        ],
	        ", you can change it to ",
	        [
	          "code",
	          "click"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "触发方式",
	      "en-US": "Trigger mode"
	    },
	    "filename": "components/dropdown/demo/trigger.md",
	    "id": "components-dropdown-demo-trigger"
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
	      "highlighted": "import { Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Menu<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"0\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"http://www.alipay.com/\"</span><span class=\"token operator\">></span>1st menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"http://www.taobao.com/\"</span><span class=\"token operator\">></span>2nd menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Divider <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Menu<span class=\"token punctuation\">.</span>Item key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>3d menu item<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Menu<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Dropdown overlay<span class=\"token operator\">=</span>{menu} trigger<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'click'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-dropdown-link\"</span> href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>\n      Click me <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"down\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Dropdown<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var menu = React.createElement(
	    _antd.Menu,
	    null,
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "0"
	      },
	      React.createElement(
	        "a",
	        {
	          href: "http://www.alipay.com/"
	        },
	        "1st menu item"
	      )
	    ),
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "1"
	      },
	      React.createElement(
	        "a",
	        {
	          href: "http://www.taobao.com/"
	        },
	        "2nd menu item"
	      )
	    ),
	    React.createElement(_antd.Menu.Divider, null),
	    React.createElement(
	      _antd.Menu.Item,
	      {
	        key: "3"
	      },
	      "3d menu item"
	    )
	  );
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Dropdown,
	      {
	        overlay: menu,
	        trigger: ['click']
	      },
	      React.createElement(
	        "a",
	        {
	          className: "ant-dropdown-link",
	          href: "#"
	        },
	        "Click me ",
	        React.createElement(_antd.Icon, {
	          type: "down"
	        })
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 1211:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(818),
	    'dropdown-button': __webpack_require__(819),
	    'event': __webpack_require__(820),
	    'item': __webpack_require__(821),
	    'overlay-visible': __webpack_require__(822),
	    'sub-menu': __webpack_require__(823),
	    'trigger': __webpack_require__(824),
	}

/***/ }

});