webpackJsonp([50],{

/***/ 1750:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(2026),
    'onClick': __webpack_require__(2027),
    'static': __webpack_require__(2028),
}

/***/ }),

/***/ 2026:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "最简单的用法。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The simplest usage."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/anchor/demo/basic.md",
    "id": "components-anchor-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Anchor <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Link <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Anchor<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Anchor</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-basic<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Basic</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-fixed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fixed</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#API<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>API<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Anchor-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Anchor</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Link-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Link</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Anchor</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var Link = _antd.Anchor.Link;
  return React.createElement(
    _antd.Anchor,
    null,
    React.createElement(Link, {
      href: "#components-anchor-demo-basic",
      title: "Basic demo"
    }),
    React.createElement(Link, {
      href: "#components-anchor-demo-fixed",
      title: "Fixed demo"
    }),
    React.createElement(
      Link,
      {
        href: "#API",
        title: "API"
      },
      React.createElement(Link, {
        href: "#Anchor-Props",
        title: "Anchor Props"
      }),
      React.createElement(Link, {
        href: "#Link-Props",
        title: "Link Props"
      })
    )
  );
},
  "style": "\n.code-box-demo .ant-affix {\n  z-index: 11;\n}\n"
};

/***/ }),

/***/ 2027:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "点击锚点不记录历史。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Clicking on an anchor does not record history."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "自定义 onClick 事件",
      "en-US": "Customize the onClick event"
    },
    "filename": "components/anchor/demo/onClick.md",
    "id": "components-anchor-demo-onClick"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Anchor <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Link <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Anchor<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> handleClick <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> link<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>link<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Anchor</span> <span class=\"token attr-name\">affix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>handleClick<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-basic<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Basic</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-fixed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fixed</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#API<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>API<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Anchor-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Anchor</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Link-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Link</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Anchor</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var Link = _antd.Anchor.Link;

  var handleClick = function handleClick(e, link) {
    e.preventDefault();
    console.log(link);
  };

  return React.createElement(
    _antd.Anchor,
    {
      affix: false,
      onClick: handleClick
    },
    React.createElement(Link, {
      href: "#components-anchor-demo-basic",
      title: "Basic demo"
    }),
    React.createElement(Link, {
      href: "#components-anchor-demo-fixed",
      title: "Fixed demo"
    }),
    React.createElement(
      Link,
      {
        href: "#API",
        title: "API"
      },
      React.createElement(Link, {
        href: "#Anchor-Props",
        title: "Anchor Props"
      }),
      React.createElement(Link, {
        href: "#Link-Props",
        title: "Link Props"
      })
    )
  );
}
};

/***/ }),

/***/ 2028:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "不浮动，状态不随页面滚动变化。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Do not change state when page is scrolling."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "静态位置",
      "en-US": "Static Anchor"
    },
    "filename": "components/anchor/demo/static.md",
    "id": "components-anchor-demo-static"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Anchor <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Link <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Anchor<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Anchor</span> <span class=\"token attr-name\">affix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-basic<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Basic</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-fixed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fixed</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#API<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>API<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Anchor-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Anchor</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Link-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Link</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Anchor</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var Link = _antd.Anchor.Link;
  return React.createElement(
    _antd.Anchor,
    {
      affix: false
    },
    React.createElement(Link, {
      href: "#components-anchor-demo-basic",
      title: "Basic demo"
    }),
    React.createElement(Link, {
      href: "#components-anchor-demo-fixed",
      title: "Fixed demo"
    }),
    React.createElement(
      Link,
      {
        href: "#API",
        title: "API"
      },
      React.createElement(Link, {
        href: "#Anchor-Props",
        title: "Anchor Props"
      }),
      React.createElement(Link, {
        href: "#Link-Props",
        title: "Link Props"
      })
    )
  );
}
};

/***/ })

});