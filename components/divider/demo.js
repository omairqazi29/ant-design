webpackJsonp([48],{

/***/ 1673:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'horizontal': __webpack_require__(1978),
    'vertical': __webpack_require__(1979),
}

/***/ }),

/***/ 1978:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "默认为水平分割线，可在中间加入文字。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Divider default type is ",
        [
          "code",
          "horizontal"
        ],
        ". Support inner text inside Divider."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "水平分割线",
      "en-US": "Horizontal"
    },
    "filename": "components/divider/demo/horizontal.md",
    "id": "components-divider-demo-horizontal"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Divider <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet<span class=\"token punctuation\">,</span> consectetur adipiscing elit<span class=\"token punctuation\">.</span> Sed nonne merninisti licere mihi ista probare<span class=\"token punctuation\">,</span> quae sunt a te dicta<span class=\"token operator\">?</span> Refert tamen<span class=\"token punctuation\">,</span> quo modo<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Divider</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet<span class=\"token punctuation\">,</span> consectetur adipiscing elit<span class=\"token punctuation\">.</span> Sed nonne merninisti licere mihi ista probare<span class=\"token punctuation\">,</span> quae sunt a te dicta<span class=\"token operator\">?</span> Refert tamen<span class=\"token punctuation\">,</span> quo modo<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Divider</span><span class=\"token punctuation\">></span></span>With Text<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Divider</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet<span class=\"token punctuation\">,</span> consectetur adipiscing elit<span class=\"token punctuation\">.</span> Sed nonne merninisti licere mihi ista probare<span class=\"token punctuation\">,</span> quae sunt a te dicta<span class=\"token operator\">?</span> Refert tamen<span class=\"token punctuation\">,</span> quo modo<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Divider</span> <span class=\"token attr-name\">dashed</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Lorem ipsum dolor sit amet<span class=\"token punctuation\">,</span> consectetur adipiscing elit<span class=\"token punctuation\">.</span> Sed nonne merninisti licere mihi ista probare<span class=\"token punctuation\">,</span> quae sunt a te dicta<span class=\"token operator\">?</span> Refert tamen<span class=\"token punctuation\">,</span> quo modo<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(36);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."
    ),
    React.createElement(_antd.Divider, null),
    React.createElement(
      "p",
      null,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."
    ),
    React.createElement(
      _antd.Divider,
      null,
      "With Text"
    ),
    React.createElement(
      "p",
      null,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."
    ),
    React.createElement(_antd.Divider, {
      dashed: true
    }),
    React.createElement(
      "p",
      null,
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."
    )
  );
}
};

/***/ }),

/***/ 1979:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用 ",
        [
          "code",
          "type=\"vertical\""
        ],
        " 设置为行内的垂直分割线。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Use ",
        [
          "code",
          "type=\"vertical\""
        ],
        " make it vertical."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "垂直分割线",
      "en-US": "Vertical"
    },
    "filename": "components/divider/demo/vertical.md",
    "id": "components-divider-demo-vertical"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Divider <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    Text\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Divider</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Divider</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(36);

  return React.createElement(
    "div",
    null,
    "Text",
    React.createElement(_antd.Divider, {
      type: "vertical"
    }),
    React.createElement(
      "a",
      {
        href: "#"
      },
      "Link"
    ),
    React.createElement(_antd.Divider, {
      type: "vertical"
    }),
    React.createElement(
      "a",
      {
        href: "#"
      },
      "Link"
    )
  );
}
};

/***/ })

});