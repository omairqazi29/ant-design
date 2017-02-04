webpackJsonp([3,211],{

/***/ 1044:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "默认选中第一项。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Default activate first tab."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/tabs/demo/basic.md",
	    "id": "components-tabs-demo-basic"
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
	      "highlighted": "import { Tabs } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Tabs defaultActiveKey<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span> onChange<span class=\"token operator\">=</span>{callback}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Content of Tab Pane <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 2\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Content of Tab Pane <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Content of Tab Pane <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;

	  function callback(key) {
	    console.log(key);
	  }

	  return React.createElement(
	    _antd.Tabs,
	    {
	      defaultActiveKey: "1",
	      onChange: callback
	    },
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 1",
	        key: "1"
	      },
	      "Content of Tab Pane 1"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 2",
	        key: "2"
	      },
	      "Content of Tab Pane 2"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 3",
	        key: "3"
	      },
	      "Content of Tab Pane 3"
	    )
	  );
	}
	};

/***/ },

/***/ 1045:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用于容器顶部，需要一点额外的样式覆盖。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Should be used at the top of container, needs to override styles."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 10,
	    "title": {
	      "zh-CN": "卡片式页签容器",
	      "en-US": "Container of card type Tab"
	    },
	    "filename": "components/tabs/demo/card-top.md",
	    "id": "components-tabs-demo-card-top"
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
	      "highlighted": "import { Tabs } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"card-container\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Tabs type<span class=\"token operator\">=</span><span class=\"token string\">\"card\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Content of Tab Pane <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 2\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Content of Tab Pane <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Content of Tab Pane <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;
	  return React.createElement(
	    "div",
	    {
	      className: "card-container"
	    },
	    React.createElement(
	      _antd.Tabs,
	      {
	        type: "card"
	      },
	      React.createElement(
	        TabPane,
	        {
	          tab: "Tab 1",
	          key: "1"
	        },
	        "Content of Tab Pane 1"
	      ),
	      React.createElement(
	        TabPane,
	        {
	          tab: "Tab 2",
	          key: "2"
	        },
	        "Content of Tab Pane 2"
	      ),
	      React.createElement(
	        TabPane,
	        {
	          tab: "Tab 3",
	          key: "3"
	        },
	        "Content of Tab Pane 3"
	      )
	    )
	  );
	},
	  "style": "#components-tabs-demo-card-top .code-box-demo {\n  background: #ECECEC;\n  overflow: hidden;\n  padding: 24px;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-content {\n  height: 120px;\n  margin-top: -16px;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {\n  background: #fff;\n  padding: 16px;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {\n  border-color: transparent;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {\n  border-color: #fff;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-tabs-demo-card-top</span> <span class=\"token class\">.code-box-demo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#ECECEC</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-content</span> > <span class=\"token class\">.ant-tabs-tabpane</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-bar</span> <span class=\"token class\">.ant-tabs-tab</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-color</span><span class=\"token punctuation\">:</span> transparent<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-bar</span> <span class=\"token class\">.ant-tabs-tab-active</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1046:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "另一种样式的页签，不提供对应的垂直样式。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Another type Tabs, which doesn't support vertical mode."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "卡片式页签",
	      "en-US": "Card type tab"
	    },
	    "filename": "components/tabs/demo/card.md",
	    "id": "components-tabs-demo-card"
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
	      "highlighted": "import { Tabs } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Tabs onChange<span class=\"token operator\">=</span>{callback} type<span class=\"token operator\">=</span><span class=\"token string\">\"card\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Content of Tab Pane <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 2\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Content of Tab Pane <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Content of Tab Pane <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;

	  function callback(key) {
	    console.log(key);
	  }

	  return React.createElement(
	    _antd.Tabs,
	    {
	      onChange: callback,
	      type: "card"
	    },
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 1",
	        key: "1"
	      },
	      "Content of Tab Pane 1"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 2",
	        key: "2"
	      },
	      "Content of Tab Pane 2"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 3",
	        key: "3"
	      },
	      "Content of Tab Pane 3"
	    )
	  );
	}
	};

/***/ },

/***/ 1047:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "隐藏默认的页签增加图标，给自定义触发器绑定事件。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Hide default plus icon, and bind event for customized trigger."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 11,
	    "title": {
	      "zh-CN": "自定义新增页签触发器",
	      "en-US": "Customized trigger of new tab"
	    },
	    "filename": "components/tabs/demo/custom-add-trigger.md",
	    "id": "components-tabs-demo-custom-add-trigger"
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
	      "highlighted": "import { Tabs<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span>newTabIndex <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n      { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 1'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab Pane 1'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span> }<span class=\"token punctuation\">,</span>\n      { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 2'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab Pane 2'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span> }<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return {\n      activeKey<span class=\"token punctuation\">:</span> panes<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">,</span>\n      panes<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>activeKey<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ activeKey }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onEdit</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">,</span> action<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">[</span>action<span class=\"token punctuation\">]</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">add</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> activeKey <span class=\"token operator\">=</span> `newTab${this<span class=\"token punctuation\">.</span>newTabIndex<span class=\"token operator\">+</span><span class=\"token operator\">+</span>}`<span class=\"token comment\" spellcheck=\"true\">;</span>\n    panes<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{ title<span class=\"token punctuation\">:</span> <span class=\"token string\">'New Tab'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'New Tab Pane'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> activeKey }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ panes<span class=\"token punctuation\">,</span> activeKey }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">remove</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span> {\n    let activeKey <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey<span class=\"token comment\" spellcheck=\"true\">;</span>\n    let lastIndex<span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">.</span>key <span class=\"token operator\">==</span><span class=\"token operator\">=</span> targetKey<span class=\"token punctuation\">)</span> {\n        lastIndex <span class=\"token operator\">=</span> i <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> pane<span class=\"token punctuation\">.</span>key !<span class=\"token operator\">==</span> targetKey<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>lastIndex <span class=\"token operator\">>=</span> <span class=\"token number\">0</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> activeKey <span class=\"token operator\">==</span><span class=\"token operator\">=</span> targetKey<span class=\"token punctuation\">)</span> {\n      activeKey <span class=\"token operator\">=</span> panes<span class=\"token punctuation\">[</span>lastIndex<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ panes<span class=\"token punctuation\">,</span> activeKey }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>add}<span class=\"token operator\">></span>ADD<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Tabs\n          hideAdd\n          onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange}\n          activeKey<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey}\n          type<span class=\"token operator\">=</span><span class=\"token string\">\"editable-card\"</span>\n          onEdit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onEdit}\n        <span class=\"token operator\">></span>\n          {this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span>{pane<span class=\"token punctuation\">.</span>title} key<span class=\"token operator\">=</span>{pane<span class=\"token punctuation\">.</span>key}<span class=\"token operator\">></span>{pane<span class=\"token punctuation\">.</span>content}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span><span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;
	  var Demo = React.createClass({
	    displayName: "Demo",
	    getInitialState: function getInitialState() {
	      this.newTabIndex = 0;
	      var panes = [{
	        title: 'Tab 1',
	        content: 'Content of Tab Pane 1',
	        key: '1'
	      }, {
	        title: 'Tab 2',
	        content: 'Content of Tab Pane 2',
	        key: '2'
	      }];
	      return {
	        activeKey: panes[0].key,
	        panes: panes
	      };
	    },
	    onChange: function onChange(activeKey) {
	      this.setState({
	        activeKey: activeKey
	      });
	    },
	    onEdit: function onEdit(targetKey, action) {
	      this[action](targetKey);
	    },
	    add: function add() {
	      var panes = this.state.panes;
	      var activeKey = "newTab" + this.newTabIndex++;
	      panes.push({
	        title: 'New Tab',
	        content: 'New Tab Pane',
	        key: activeKey
	      });
	      this.setState({
	        panes: panes,
	        activeKey: activeKey
	      });
	    },
	    remove: function remove(targetKey) {
	      var activeKey = this.state.activeKey;
	      var lastIndex = void 0;
	      this.state.panes.forEach(function (pane, i) {
	        if (pane.key === targetKey) {
	          lastIndex = i - 1;
	        }
	      });
	      var panes = this.state.panes.filter(function (pane) {
	        return pane.key !== targetKey;
	      });

	      if (lastIndex >= 0 && activeKey === targetKey) {
	        activeKey = panes[lastIndex].key;
	      }

	      this.setState({
	        panes: panes,
	        activeKey: activeKey
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "div",
	          {
	            style: {
	              marginBottom: 16
	            }
	          },
	          React.createElement(
	            _antd.Button,
	            {
	              onClick: this.add
	            },
	            "ADD"
	          )
	        ),
	        React.createElement(
	          _antd.Tabs,
	          {
	            hideAdd: true,
	            onChange: this.onChange,
	            activeKey: this.state.activeKey,
	            type: "editable-card",
	            onEdit: this.onEdit
	          },
	          this.state.panes.map(function (pane) {
	            return React.createElement(
	              TabPane,
	              {
	                tab: pane.title,
	                key: pane.key
	              },
	              pane.content
	            );
	          })
	        )
	      );
	    }
	  });
	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 1048:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "禁用某一项。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Disabled a tab."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "禁用",
	      "en-US": "Disabled"
	    },
	    "filename": "components/tabs/demo/disabled.md",
	    "id": "components-tabs-demo-disabled"
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
	      "highlighted": "import { Tabs } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Tabs defaultActiveKey<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Tab <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 2\"</span> disabled key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Tab <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Tab <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;
	  return React.createElement(
	    _antd.Tabs,
	    {
	      defaultActiveKey: "1"
	    },
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 1",
	        key: "1"
	      },
	      "Tab 1"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 2",
	        disabled: true,
	        key: "2"
	      },
	      "Tab 2"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 3",
	        key: "3"
	      },
	      "Tab 3"
	    )
	  );
	}
	};

/***/ },

/***/ 1049:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "只有卡片样式的页签支持新增和关闭选项。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Only card type Tabs support adding & closeable."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "新增和关闭页签",
	      "en-US": "Add & close tab"
	    },
	    "filename": "components/tabs/demo/editable-card.md",
	    "id": "components-tabs-demo-editable-card"
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
	      "highlighted": "import { Tabs } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span>newTabIndex <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n      { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 1'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab 1'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span> }<span class=\"token punctuation\">,</span>\n      { title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 2'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab 2'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span> }<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return {\n      activeKey<span class=\"token punctuation\">:</span> panes<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">,</span>\n      panes<span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>activeKey<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ activeKey }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onEdit</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">,</span> action<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">[</span>action<span class=\"token punctuation\">]</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">add</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> activeKey <span class=\"token operator\">=</span> `newTab${this<span class=\"token punctuation\">.</span>newTabIndex<span class=\"token operator\">+</span><span class=\"token operator\">+</span>}`<span class=\"token comment\" spellcheck=\"true\">;</span>\n    panes<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>{ title<span class=\"token punctuation\">:</span> <span class=\"token string\">'New Tab'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of new Tab'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> activeKey }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ panes<span class=\"token punctuation\">,</span> activeKey }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">remove</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span> {\n    let activeKey <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey<span class=\"token comment\" spellcheck=\"true\">;</span>\n    let lastIndex<span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">.</span>key <span class=\"token operator\">==</span><span class=\"token operator\">=</span> targetKey<span class=\"token punctuation\">)</span> {\n        lastIndex <span class=\"token operator\">=</span> i <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      }\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> pane<span class=\"token punctuation\">.</span>key !<span class=\"token operator\">==</span> targetKey<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>lastIndex <span class=\"token operator\">>=</span> <span class=\"token number\">0</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> activeKey <span class=\"token operator\">==</span><span class=\"token operator\">=</span> targetKey<span class=\"token punctuation\">)</span> {\n      activeKey <span class=\"token operator\">=</span> panes<span class=\"token punctuation\">[</span>lastIndex<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ panes<span class=\"token punctuation\">,</span> activeKey }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Tabs\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange}\n        activeKey<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey}\n        type<span class=\"token operator\">=</span><span class=\"token string\">\"editable-card\"</span>\n        onEdit<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onEdit}\n      <span class=\"token operator\">></span>\n        {this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span>{pane<span class=\"token punctuation\">.</span>title} key<span class=\"token operator\">=</span>{pane<span class=\"token punctuation\">.</span>key}<span class=\"token operator\">></span>{pane<span class=\"token punctuation\">.</span>content}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span><span class=\"token punctuation\">)</span>}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;
	  var Demo = React.createClass({
	    displayName: "Demo",
	    getInitialState: function getInitialState() {
	      this.newTabIndex = 0;
	      var panes = [{
	        title: 'Tab 1',
	        content: 'Content of Tab 1',
	        key: '1'
	      }, {
	        title: 'Tab 2',
	        content: 'Content of Tab 2',
	        key: '2'
	      }];
	      return {
	        activeKey: panes[0].key,
	        panes: panes
	      };
	    },
	    onChange: function onChange(activeKey) {
	      this.setState({
	        activeKey: activeKey
	      });
	    },
	    onEdit: function onEdit(targetKey, action) {
	      this[action](targetKey);
	    },
	    add: function add() {
	      var panes = this.state.panes;
	      var activeKey = "newTab" + this.newTabIndex++;
	      panes.push({
	        title: 'New Tab',
	        content: 'Content of new Tab',
	        key: activeKey
	      });
	      this.setState({
	        panes: panes,
	        activeKey: activeKey
	      });
	    },
	    remove: function remove(targetKey) {
	      var activeKey = this.state.activeKey;
	      var lastIndex = void 0;
	      this.state.panes.forEach(function (pane, i) {
	        if (pane.key === targetKey) {
	          lastIndex = i - 1;
	        }
	      });
	      var panes = this.state.panes.filter(function (pane) {
	        return pane.key !== targetKey;
	      });

	      if (lastIndex >= 0 && activeKey === targetKey) {
	        activeKey = panes[lastIndex].key;
	      }

	      this.setState({
	        panes: panes,
	        activeKey: activeKey
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        _antd.Tabs,
	        {
	          onChange: this.onChange,
	          activeKey: this.state.activeKey,
	          type: "editable-card",
	          onEdit: this.onEdit
	        },
	        this.state.panes.map(function (pane) {
	          return React.createElement(
	            TabPane,
	            {
	              tab: pane.title,
	              key: pane.key
	            },
	            pane.content
	          );
	        })
	      );
	    }
	  });
	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 1050:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可以在页签右边添加附加操作。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "You can add extra actions to the right of Tabs."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "附加内容",
	      "en-US": "Extra content"
	    },
	    "filename": "components/tabs/demo/extra.md",
	    "id": "components-tabs-demo-extra"
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
	      "highlighted": "import { Tabs<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> operations <span class=\"token operator\">=</span> <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Extra Action<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Tabs tabBarExtraContent<span class=\"token operator\">=</span>{operations}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 2\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;
	  var operations = React.createElement(
	    _antd.Button,
	    null,
	    "Extra Action"
	  );
	  return React.createElement(
	    _antd.Tabs,
	    {
	      tabBarExtraContent: operations
	    },
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 1",
	        key: "1"
	      },
	      "Content of tab 1"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 2",
	        key: "2"
	      },
	      "Content of tab 2"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 3",
	        key: "3"
	      },
	      "Content of tab 3"
	    )
	  );
	}
	};

/***/ },

/***/ 1051:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "有图标的标签。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The Tab with Icon."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "图标",
	      "en-US": "Icon"
	    },
	    "filename": "components/tabs/demo/icon.md",
	    "id": "components-tabs-demo-icon"
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
	      "highlighted": "import { Tabs<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Tabs defaultActiveKey<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"apple\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Tab <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n      Tab <span class=\"token number\">1</span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"android\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>Tab <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>\n      Tab <span class=\"token number\">2</span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;
	  return React.createElement(
	    _antd.Tabs,
	    {
	      defaultActiveKey: "2"
	    },
	    React.createElement(
	      TabPane,
	      {
	        tab: React.createElement(
	          "span",
	          null,
	          React.createElement(_antd.Icon, {
	            type: "apple"
	          }),
	          "Tab 1"
	        ),
	        key: "1"
	      },
	      "Tab 1"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: React.createElement(
	          "span",
	          null,
	          React.createElement(_antd.Icon, {
	            type: "android"
	          }),
	          "Tab 2"
	        ),
	        key: "2"
	      },
	      "Tab 2"
	    )
	  );
	}
	};

/***/ },

/***/ 1052:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "有四个位置，",
	        [
	          "code",
	          "tabPosition=\"left|right|top|bottom\""
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Tab's position: left, right, top or bottom."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "位置",
	      "en-US": "Position"
	    },
	    "filename": "components/tabs/demo/position.md",
	    "id": "components-tabs-demo-position"
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
	      "highlighted": "import { Tabs<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Select</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Demo <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      tabPosition<span class=\"token punctuation\">:</span> <span class=\"token string\">'top'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">changeTabPosition</span><span class=\"token punctuation\">(</span>tabPosition<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ tabPosition }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n          Tab position：\n          <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tabPosition} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>changeTabPosition}\n            dropdownMatchSelectWidth<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}\n          <span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"top\"</span><span class=\"token operator\">></span>top<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"bottom\"</span><span class=\"token operator\">></span>bottom<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"left\"</span><span class=\"token operator\">></span>left<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"right\"</span><span class=\"token operator\">></span>right<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Tabs tabPosition<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tabPosition}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Content of Tab <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 2\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Content of Tab <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Content of Tab <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Demo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;
	  var Option = _antd.Select.Option;
	  var Demo = React.createClass({
	    displayName: "Demo",
	    getInitialState: function getInitialState() {
	      return {
	        tabPosition: 'top'
	      };
	    },
	    changeTabPosition: function changeTabPosition(tabPosition) {
	      this.setState({
	        tabPosition: tabPosition
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "div",
	          {
	            style: {
	              marginBottom: 16
	            }
	          },
	          "Tab position：",
	          React.createElement(
	            _antd.Select,
	            {
	              value: this.state.tabPosition,
	              onChange: this.changeTabPosition,
	              dropdownMatchSelectWidth: false
	            },
	            React.createElement(
	              Option,
	              {
	                value: "top"
	              },
	              "top"
	            ),
	            React.createElement(
	              Option,
	              {
	                value: "bottom"
	              },
	              "bottom"
	            ),
	            React.createElement(
	              Option,
	              {
	                value: "left"
	              },
	              "left"
	            ),
	            React.createElement(
	              Option,
	              {
	                value: "right"
	              },
	              "right"
	            )
	          )
	        ),
	        React.createElement(
	          _antd.Tabs,
	          {
	            tabPosition: this.state.tabPosition
	          },
	          React.createElement(
	            TabPane,
	            {
	              tab: "Tab 1",
	              key: "1"
	            },
	            "Content of Tab 1"
	          ),
	          React.createElement(
	            TabPane,
	            {
	              tab: "Tab 2",
	              key: "2"
	            },
	            "Content of Tab 2"
	          ),
	          React.createElement(
	            TabPane,
	            {
	              tab: "Tab 3",
	              key: "3"
	            },
	            "Content of Tab 3"
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(Demo, null);
	}
	};

/***/ },

/***/ 1053:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用在弹出框等较狭窄的容器内。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Small size can be used in Modal."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "迷你型",
	      "en-US": "Mini tab"
	    },
	    "filename": "components/tabs/demo/size.md",
	    "id": "components-tabs-demo-size"
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
	      "highlighted": "import { Tabs } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Tabs defaultActiveKey<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 2\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;
	  return React.createElement(
	    _antd.Tabs,
	    {
	      defaultActiveKey: "2",
	      size: "small"
	    },
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 1",
	        key: "1"
	      },
	      "Content of tab 1"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 2",
	        key: "2"
	      },
	      "Content of tab 2"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 3",
	        key: "3"
	      },
	      "Content of tab 3"
	    )
	  );
	}
	};

/***/ },

/***/ 1054:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可以左右滑动，容纳更多标签。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Tab can be slide to left or right, which is used for a lot of tabs."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "滑动",
	      "en-US": "Slide"
	    },
	    "filename": "components/tabs/demo/slide.md",
	    "id": "components-tabs-demo-slide"
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
	      "highlighted": "import { Tabs } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Tabs defaultActiveKey<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 2\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 4\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 5\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"5\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">5</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 6\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"6\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 7\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"7\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">7</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 8\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>TabPane tab<span class=\"token operator\">=</span><span class=\"token string\">\"Tab 9\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"9\"</span><span class=\"token operator\">></span>Content of tab <span class=\"token number\">9</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>TabPane<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tabs<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var TabPane = _antd.Tabs.TabPane;
	  return React.createElement(
	    _antd.Tabs,
	    {
	      defaultActiveKey: "1"
	    },
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 1",
	        key: "1"
	      },
	      "Content of tab 1"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 2",
	        key: "2"
	      },
	      "Content of tab 2"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 3",
	        key: "3"
	      },
	      "Content of tab 3"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 4",
	        key: "4"
	      },
	      "Content of tab 4"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 5",
	        key: "5"
	      },
	      "Content of tab 5"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 6",
	        key: "6"
	      },
	      "Content of tab 6"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 7",
	        key: "7"
	      },
	      "Content of tab 7"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 8",
	        key: "8"
	      },
	      "Content of tab 8"
	    ),
	    React.createElement(
	      TabPane,
	      {
	        tab: "Tab 9",
	        key: "9"
	      },
	      "Content of tab 9"
	    )
	  );
	}
	};

/***/ },

/***/ 1235:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1044),
	    'card-top': __webpack_require__(1045),
	    'card': __webpack_require__(1046),
	    'custom-add-trigger': __webpack_require__(1047),
	    'disabled': __webpack_require__(1048),
	    'editable-card': __webpack_require__(1049),
	    'extra': __webpack_require__(1050),
	    'icon': __webpack_require__(1051),
	    'position': __webpack_require__(1052),
	    'size': __webpack_require__(1053),
	    'slide': __webpack_require__(1054),
	}

/***/ }

});