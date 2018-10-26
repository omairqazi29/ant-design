webpackJsonp([2],{

/***/ 1880:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(2449),
    'card-top': __webpack_require__(2450),
    'card': __webpack_require__(2451),
    'custom-add-trigger': __webpack_require__(2452),
    'custom-tab-bar': __webpack_require__(2453),
    'disabled': __webpack_require__(2457),
    'editable-card': __webpack_require__(2458),
    'extra': __webpack_require__(2459),
    'icon': __webpack_require__(2460),
    'position': __webpack_require__(2461),
    'size': __webpack_require__(2462),
    'slide': __webpack_require__(2463),
}

/***/ }),

/***/ 2449:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>callback<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ }),

/***/ 2450:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>card-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>card<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">Title</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">Title</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">Title</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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
          tab: "Tab Title 1",
          key: "1"
        },
        React.createElement(
          "p",
          null,
          "Content of Tab Pane 1"
        ),
        React.createElement(
          "p",
          null,
          "Content of Tab Pane 1"
        ),
        React.createElement(
          "p",
          null,
          "Content of Tab Pane 1"
        )
      ),
      React.createElement(
        TabPane,
        {
          tab: "Tab Title 2",
          key: "2"
        },
        React.createElement(
          "p",
          null,
          "Content of Tab Pane 2"
        ),
        React.createElement(
          "p",
          null,
          "Content of Tab Pane 2"
        ),
        React.createElement(
          "p",
          null,
          "Content of Tab Pane 2"
        )
      ),
      React.createElement(
        TabPane,
        {
          tab: "Tab Title 3",
          key: "3"
        },
        React.createElement(
          "p",
          null,
          "Content of Tab Pane 3"
        ),
        React.createElement(
          "p",
          null,
          "Content of Tab Pane 3"
        ),
        React.createElement(
          "p",
          null,
          "Content of Tab Pane 3"
        )
      )
    )
  );
},
  "style": ".card-container > .ant-tabs-card > .ant-tabs-content {\n  height: 120px;\n  margin-top: -16px;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {\n  background: #fff;\n  padding: 16px;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-bar {\n  border-color: #fff;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {\n  border-color: transparent;\n  background: transparent;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {\n  border-color: #fff;\n  background: #fff;\n}\n#components-tabs-demo-card-top .code-box-demo {\n  background: #F5F5F5;\n  overflow: hidden;\n  padding: 24px;\n}\n",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-content</span> > <span class=\"token class\">.ant-tabs-tabpane</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-bar</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-bar</span> <span class=\"token class\">.ant-tabs-tab</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-color</span><span class=\"token punctuation\">:</span> transparent<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> transparent<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.card-container</span> > <span class=\"token class\">.ant-tabs-card</span> > <span class=\"token class\">.ant-tabs-bar</span> <span class=\"token class\">.ant-tabs-tab-active</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2451:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>callback<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>card<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ }),

/***/ 2452:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>newTabIndex <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 1'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab Pane 1'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 2'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab Pane 2'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      activeKey<span class=\"token punctuation\">:</span> panes<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">,</span>\n      panes<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>activeKey<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onEdit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">,</span> action<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">[</span>action<span class=\"token punctuation\">]</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  add <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> activeKey <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`newTab</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>newTabIndex<span class=\"token operator\">++</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n    panes<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'New Tab'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'New Tab Pane'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> panes<span class=\"token punctuation\">,</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  remove <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> activeKey <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> lastIndex<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">.</span>key <span class=\"token operator\">===</span> targetKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        lastIndex <span class=\"token operator\">=</span> i <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> pane<span class=\"token punctuation\">.</span>key <span class=\"token operator\">!==</span> targetKey<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>lastIndex <span class=\"token operator\">>=</span> <span class=\"token number\">0</span> <span class=\"token operator\">&amp;&amp;</span> activeKey <span class=\"token operator\">===</span> targetKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      activeKey <span class=\"token operator\">=</span> panes<span class=\"token punctuation\">[</span>lastIndex<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> panes<span class=\"token punctuation\">,</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>add<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>ADD<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span>\n          <span class=\"token attr-name\">hideAdd</span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">activeKey</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-card<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">onEdit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onEdit<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var TabPane = _antd.Tabs.TabPane;

  var Demo = function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo(props) {
      _classCallCheck(this, Demo);

      var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

      _initialiseProps.call(_this);

      _this.newTabIndex = 0;
      var panes = [{
        title: 'Tab 1',
        content: 'Content of Tab Pane 1',
        key: '1'
      }, {
        title: 'Tab 2',
        content: 'Content of Tab Pane 2',
        key: '2'
      }];
      _this.state = {
        activeKey: panes[0].key,
        panes: panes
      };
      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
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
    }]);

    return Demo;
  }(React.Component);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onChange = function (activeKey) {
      _this2.setState({
        activeKey: activeKey
      });
    };

    this.onEdit = function (targetKey, action) {
      _this2[action](targetKey);
    };

    this.add = function () {
      var panes = _this2.state.panes;
      var activeKey = "newTab" + _this2.newTabIndex++;
      panes.push({
        title: 'New Tab',
        content: 'New Tab Pane',
        key: activeKey
      });

      _this2.setState({
        panes: panes,
        activeKey: activeKey
      });
    };

    this.remove = function (targetKey) {
      var activeKey = _this2.state.activeKey;
      var lastIndex = void 0;

      _this2.state.panes.forEach(function (pane, i) {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });

      var panes = _this2.state.panes.filter(function (pane) {
        return pane.key !== targetKey;
      });

      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
      }

      _this2.setState({
        panes: panes,
        activeKey: activeKey
      });
    };
  };

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ 2453:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用 react-sticky 组件实现吸顶效果。"
      ]
    ],
    "en-US": [
      [
        "p",
        "use react-sticky."
      ]
    ]
  },
  "meta": {
    "order": 12,
    "title": {
      "zh-CN": "自定义页签头",
      "en-US": "Customized bar of tab"
    },
    "filename": "components/tabs/demo/custom-tab-bar.md",
    "id": "components-tabs-demo-custom-tab-bar"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> StickyContainer<span class=\"token punctuation\">,</span> Sticky <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-sticky'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> renderTabBar <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">,</span> DefaultTabBar<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sticky</span> <span class=\"token attr-name\">bottomOffset</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">80</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> style <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>DefaultTabBar <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span> style<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span>style<span class=\"token punctuation\">,</span> zIndex<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Sticky</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>StickyContainer</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">renderTabBar</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>renderTabBar<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>StickyContainer</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _antd = __webpack_require__(30);

  var _reactSticky = __webpack_require__(2454);

  var TabPane = _antd.Tabs.TabPane;

  var renderTabBar = function renderTabBar(props, DefaultTabBar) {
    return React.createElement(
      _reactSticky.Sticky,
      {
        bottomOffset: 80
      },
      function (_ref) {
        var style = _ref.style;
        return React.createElement(DefaultTabBar, _extends({}, props, {
          style: _extends({}, style, {
            zIndex: 1,
            background: '#fff'
          })
        }));
      }
    );
  };

  return React.createElement(
    _reactSticky.StickyContainer,
    null,
    React.createElement(
      _antd.Tabs,
      {
        defaultActiveKey: "1",
        renderTabBar: renderTabBar
      },
      React.createElement(
        TabPane,
        {
          tab: "Tab 1",
          key: "1",
          style: {
            height: 200
          }
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
}
};

/***/ }),

/***/ 2454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickyContainer = exports.Sticky = undefined;

var _Sticky = __webpack_require__(2455);

var _Sticky2 = _interopRequireDefault(_Sticky);

var _Container = __webpack_require__(2456);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Sticky = _Sticky2.default;
exports.StickyContainer = _Container2.default;
exports.default = _Sticky2.default;

/***/ }),

/***/ 2455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sticky = function (_Component) {
  _inherits(Sticky, _Component);

  function Sticky() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sticky);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isSticky: false,
      wasSticky: false,
      style: {}
    }, _this.handleContainerEvent = function (_ref2) {
      var distanceFromTop = _ref2.distanceFromTop,
          distanceFromBottom = _ref2.distanceFromBottom,
          eventSource = _ref2.eventSource;

      var parent = _this.context.getParent();

      var preventingStickyStateChanges = false;
      if (_this.props.relative) {
        preventingStickyStateChanges = eventSource !== parent;
        distanceFromTop = -(eventSource.scrollTop + eventSource.offsetTop) + _this.placeholder.offsetTop;
      }

      var placeholderClientRect = _this.placeholder.getBoundingClientRect();
      var contentClientRect = _this.content.getBoundingClientRect();
      var calculatedHeight = contentClientRect.height;

      var bottomDifference = distanceFromBottom - _this.props.bottomOffset - calculatedHeight;

      var wasSticky = !!_this.state.isSticky;
      var isSticky = preventingStickyStateChanges ? wasSticky : distanceFromTop <= -_this.props.topOffset && distanceFromBottom > -_this.props.bottomOffset;

      distanceFromBottom = (_this.props.relative ? parent.scrollHeight - parent.scrollTop : distanceFromBottom) - calculatedHeight;

      var style = !isSticky ? {} : {
        position: "fixed",
        top: bottomDifference > 0 ? _this.props.relative ? parent.offsetTop - parent.offsetParent.scrollTop : 0 : bottomDifference,
        left: placeholderClientRect.left,
        width: placeholderClientRect.width
      };

      if (!_this.props.disableHardwareAcceleration) {
        style.transform = "translateZ(0)";
      }

      _this.setState({
        isSticky: isSticky,
        wasSticky: wasSticky,
        distanceFromTop: distanceFromTop,
        distanceFromBottom: distanceFromBottom,
        calculatedHeight: calculatedHeight,
        style: style
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sticky, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.context.subscribe) throw new TypeError("Expected Sticky to be mounted within StickyContainer");

      this.context.subscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.unsubscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.placeholder.style.paddingBottom = this.props.disableCompensation ? 0 : (this.state.isSticky ? this.state.calculatedHeight : 0) + "px";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var element = _react2.default.cloneElement(this.props.children({
        isSticky: this.state.isSticky,
        wasSticky: this.state.wasSticky,
        distanceFromTop: this.state.distanceFromTop,
        distanceFromBottom: this.state.distanceFromBottom,
        calculatedHeight: this.state.calculatedHeight,
        style: this.state.style
      }), {
        ref: function ref(content) {
          _this2.content = _reactDom2.default.findDOMNode(content);
        }
      });

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("div", { ref: function ref(placeholder) {
            return _this2.placeholder = placeholder;
          } }),
        element
      );
    }
  }]);

  return Sticky;
}(_react.Component);

Sticky.propTypes = {
  topOffset: _propTypes2.default.number,
  bottomOffset: _propTypes2.default.number,
  relative: _propTypes2.default.bool,
  children: _propTypes2.default.func.isRequired
};
Sticky.defaultProps = {
  relative: false,
  topOffset: 0,
  bottomOffset: 0,
  disableCompensation: false,
  disableHardwareAcceleration: false
};
Sticky.contextTypes = {
  subscribe: _propTypes2.default.func,
  unsubscribe: _propTypes2.default.func,
  getParent: _propTypes2.default.func
};
exports.default = Sticky;

/***/ }),

/***/ 2456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _raf = __webpack_require__(52);

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_PureComponent) {
  _inherits(Container, _PureComponent);

  function Container() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), _this), _this.events = ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"], _this.subscribers = [], _this.rafHandle = null, _this.subscribe = function (handler) {
      _this.subscribers = _this.subscribers.concat(handler);
    }, _this.unsubscribe = function (handler) {
      _this.subscribers = _this.subscribers.filter(function (current) {
        return current !== handler;
      });
    }, _this.notifySubscribers = function (evt) {
      if (!_this.framePending) {
        var currentTarget = evt.currentTarget;


        _this.rafHandle = (0, _raf2.default)(function () {
          _this.framePending = false;

          var _this$node$getBoundin = _this.node.getBoundingClientRect(),
              top = _this$node$getBoundin.top,
              bottom = _this$node$getBoundin.bottom;

          _this.subscribers.forEach(function (handler) {
            return handler({
              distanceFromTop: top,
              distanceFromBottom: bottom,
              eventSource: currentTarget === window ? document.body : _this.node
            });
          });
        });
        _this.framePending = true;
      }
    }, _this.getParent = function () {
      return _this.node;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Container, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe,
        getParent: this.getParent
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return window.addEventListener(event, _this2.notifySubscribers);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (this.rafHandle) {
        _raf2.default.cancel(this.rafHandle);
        this.rafHandle = null;
      }

      this.events.forEach(function (event) {
        return window.removeEventListener(event, _this3.notifySubscribers);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement("div", _extends({}, this.props, {
        ref: function ref(node) {
          return _this4.node = node;
        },
        onScroll: this.notifySubscribers,
        onTouchStart: this.notifySubscribers,
        onTouchMove: this.notifySubscribers,
        onTouchEnd: this.notifySubscribers
      }));
    }
  }]);

  return Container;
}(_react.PureComponent);

Container.childContextTypes = {
  subscribe: _propTypes2.default.func,
  unsubscribe: _propTypes2.default.func,
  getParent: _propTypes2.default.func
};
exports.default = Container;

/***/ }),

/***/ 2457:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">disabled</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Tab <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ }),

/***/ 2458:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "只有卡片样式的页签支持新增和关闭选项。\n使用 ",
        [
          "code",
          "closable={false}"
        ],
        " 禁止关闭。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Only card type Tabs support adding & closable.\n+Use ",
        [
          "code",
          "closable={false}"
        ],
        " to disable close."
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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>newTabIndex <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 1'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab 1'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 2'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab 2'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tab 3'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of Tab 3'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span> closable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      activeKey<span class=\"token punctuation\">:</span> panes<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">,</span>\n      panes<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>activeKey<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onEdit <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">,</span> action<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">[</span>action<span class=\"token punctuation\">]</span><span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  add <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> activeKey <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`newTab</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>newTabIndex<span class=\"token operator\">++</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n    panes<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'New Tab'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Content of new Tab'</span><span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">:</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> panes<span class=\"token punctuation\">,</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  remove <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>targetKey<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> activeKey <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> lastIndex<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>pane<span class=\"token punctuation\">.</span>key <span class=\"token operator\">===</span> targetKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        lastIndex <span class=\"token operator\">=</span> i <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> panes <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> pane<span class=\"token punctuation\">.</span>key <span class=\"token operator\">!==</span> targetKey<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>lastIndex <span class=\"token operator\">>=</span> <span class=\"token number\">0</span> <span class=\"token operator\">&amp;&amp;</span> activeKey <span class=\"token operator\">===</span> targetKey<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      activeKey <span class=\"token operator\">=</span> panes<span class=\"token punctuation\">[</span>lastIndex<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> panes<span class=\"token punctuation\">,</span> activeKey <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">activeKey</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>activeKey<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>editable-card<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">onEdit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onEdit<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>panes<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>pane <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">closable</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>closable<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>pane<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var TabPane = _antd.Tabs.TabPane;

  var Demo = function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo(props) {
      _classCallCheck(this, Demo);

      var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

      _initialiseProps.call(_this);

      _this.newTabIndex = 0;
      var panes = [{
        title: 'Tab 1',
        content: 'Content of Tab 1',
        key: '1'
      }, {
        title: 'Tab 2',
        content: 'Content of Tab 2',
        key: '2'
      }, {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        closable: false
      }];
      _this.state = {
        activeKey: panes[0].key,
        panes: panes
      };
      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
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
                key: pane.key,
                closable: pane.closable
              },
              pane.content
            );
          })
        );
      }
    }]);

    return Demo;
  }(React.Component);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onChange = function (activeKey) {
      _this2.setState({
        activeKey: activeKey
      });
    };

    this.onEdit = function (targetKey, action) {
      _this2[action](targetKey);
    };

    this.add = function () {
      var panes = _this2.state.panes;
      var activeKey = "newTab" + _this2.newTabIndex++;
      panes.push({
        title: 'New Tab',
        content: 'Content of new Tab',
        key: activeKey
      });

      _this2.setState({
        panes: panes,
        activeKey: activeKey
      });
    };

    this.remove = function (targetKey) {
      var activeKey = _this2.state.activeKey;
      var lastIndex = void 0;

      _this2.state.panes.forEach(function (pane, i) {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });

      var panes = _this2.state.panes.filter(function (pane) {
        return pane.key !== targetKey;
      });

      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
      }

      _this2.setState({
        panes: panes,
        activeKey: activeKey
      });
    };
  };

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ 2459:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> operations <span class=\"token operator\">=</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Extra Action<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">tabBarExtraContent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>operations<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ }),

/***/ 2460:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>apple<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>Tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n      Tab <span class=\"token number\">1</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab={&lt;span</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>android<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>Tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>\n      Tab <span class=\"token number\">2</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ }),

/***/ 2461:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs<span class=\"token punctuation\">,</span> Select <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    tabPosition<span class=\"token punctuation\">:</span> <span class=\"token string\">'top'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  changeTabPosition <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>tabPosition<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> tabPosition <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Tab position：\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tabPosition<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>changeTabPosition<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>top<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>top<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>bottom<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>left<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>right<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">tabPosition</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tabPosition<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> Tab <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var TabPane = _antd.Tabs.TabPane;
  var Option = _antd.Select.Option;

  var Demo = function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Demo);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        tabPosition: 'top'
      }, _this.changeTabPosition = function (tabPosition) {
        _this.setState({
          tabPosition: tabPosition
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
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
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ 2462:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Large size tabs are usally used in page header, and small size could be used in Modal."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "大小",
      "en-US": "Size"
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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs<span class=\"token punctuation\">,</span> Radio <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TabPane <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> size<span class=\"token punctuation\">:</span> <span class=\"token string\">'small'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> size<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> size <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Group</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Small<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Large<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>size<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var TabPane = _antd.Tabs.TabPane;

  var Demo = function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Demo);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        size: 'small'
      }, _this.onChange = function (e) {
        _this.setState({
          size: e.target.value
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var size = this.state.size;
        return React.createElement(
          "div",
          null,
          React.createElement(
            _antd.Radio.Group,
            {
              value: size,
              onChange: this.onChange,
              style: {
                marginBottom: 16
              }
            },
            React.createElement(
              _antd.Radio.Button,
              {
                value: "small"
              },
              "Small"
            ),
            React.createElement(
              _antd.Radio.Button,
              {
                value: "default"
              },
              "Default"
            ),
            React.createElement(
              _antd.Radio.Button,
              {
                value: "large"
              },
              "Large"
            )
          ),
          React.createElement(
            _antd.Tabs,
            {
              defaultActiveKey: "1",
              size: size
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
          )
        );
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ 2463:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以左右、上下滑动，容纳更多标签。"
      ]
    ],
    "en-US": [
      [
        "p",
        "In order to fit in more tabs, they can slide left and right (or up and down)."
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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tabs<span class=\"token punctuation\">,</span> Radio <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TabPane <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">.</span>TabPane<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">SlidingTabsDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      mode<span class=\"token punctuation\">:</span> <span class=\"token string\">'top'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleModeChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> mode <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mode <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> mode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Group</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleModeChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>mode<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>top<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Horizontal<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Radio.Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Vertical<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Radio.Group</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span>\n          <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">tabPosition</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>mode<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">:</span> <span class=\"token number\">220</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">4\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">4</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">5\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>5<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">5</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">6\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">7\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>7<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">7</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">8\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">8</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">9\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>9<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">9</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">10\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>10<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">10</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">11\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>11<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Content <span class=\"token keyword\">of</span> tab <span class=\"token number\">11</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SlidingTabsDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var TabPane = _antd.Tabs.TabPane;

  var SlidingTabsDemo = function (_React$Component) {
    _inherits(SlidingTabsDemo, _React$Component);

    function SlidingTabsDemo(props) {
      _classCallCheck(this, SlidingTabsDemo);

      var _this = _possibleConstructorReturn(this, (SlidingTabsDemo.__proto__ || Object.getPrototypeOf(SlidingTabsDemo)).call(this, props));

      _this.handleModeChange = function (e) {
        var mode = e.target.value;

        _this.setState({
          mode: mode
        });
      };

      _this.state = {
        mode: 'top'
      };
      return _this;
    }

    _createClass(SlidingTabsDemo, [{
      key: "render",
      value: function render() {
        var mode = this.state.mode;
        return React.createElement(
          "div",
          null,
          React.createElement(
            _antd.Radio.Group,
            {
              onChange: this.handleModeChange,
              value: mode,
              style: {
                marginBottom: 8
              }
            },
            React.createElement(
              _antd.Radio.Button,
              {
                value: "top"
              },
              "Horizontal"
            ),
            React.createElement(
              _antd.Radio.Button,
              {
                value: "left"
              },
              "Vertical"
            )
          ),
          React.createElement(
            _antd.Tabs,
            {
              defaultActiveKey: "1",
              tabPosition: mode,
              style: {
                height: 220
              }
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
            ),
            React.createElement(
              TabPane,
              {
                tab: "Tab 10",
                key: "10"
              },
              "Content of tab 10"
            ),
            React.createElement(
              TabPane,
              {
                tab: "Tab 11",
                key: "11"
              },
              "Content of tab 11"
            )
          )
        );
      }
    }]);

    return SlidingTabsDemo;
  }(React.Component);

  return React.createElement(SlidingTabsDemo, null);
}
};

/***/ })

});