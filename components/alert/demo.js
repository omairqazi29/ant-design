webpackJsonp([28],{

/***/ 1627:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'banner': __webpack_require__(1886),
    'basic': __webpack_require__(1887),
    'closable': __webpack_require__(1888),
    'close-text': __webpack_require__(1889),
    'description': __webpack_require__(1890),
    'icon': __webpack_require__(1891),
    'style': __webpack_require__(1892),
}

/***/ }),

/***/ 1886:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "页面顶部通告形式，默认有图标且",
        [
          "code",
          "type"
        ],
        " 为 'warning'。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Display Alert as a banner at top of page."
      ]
    ]
  },
  "meta": {
    "order": 6,
    "iframe": 250,
    "title": {
      "zh-CN": "顶部公告",
      "en-US": "Banner"
    },
    "filename": "components/alert/demo/banner.md",
    "id": "components-alert-demo-banner"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">text\"</span> <span class=\"token attr-name\">banner</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Very</span> <span class=\"token attr-name\">long</span> <span class=\"token attr-name\">warning</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">warning</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text\"</span> <span class=\"token attr-name\">banner</span> <span class=\"token attr-name\">closable</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">showIcon</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">without</span> <span class=\"token attr-name\">icon\"</span> <span class=\"token attr-name\">banner</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">text\"</span> <span class=\"token attr-name\">banner</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(36);

  return React.createElement(
    "div",
    null,
    React.createElement(_antd.Alert, {
      message: "Warning text",
      banner: true
    }),
    React.createElement("br", null),
    React.createElement(_antd.Alert, {
      message: "Very long warning text warning text text text text text text text",
      banner: true,
      closable: true
    }),
    React.createElement("br", null),
    React.createElement(_antd.Alert, {
      showIcon: false,
      message: "Warning text without icon",
      banner: true
    }),
    React.createElement("br", null),
    React.createElement(_antd.Alert, {
      type: "error",
      message: "Error text",
      banner: true
    })
  );
},
  "src": "/demo-0.5093792264355639.html"
};

/***/ }),

/***/ 1887:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "最简单的用法，适用于简短的警告提示。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The simplest usage for short messages."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/alert/demo/basic.md",
    "id": "components-alert-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(36);

  return React.createElement(_antd.Alert, {
    message: "Success Text",
    type: "success"
  });
},
  "style": "\n.ant-alert {\n  margin-bottom: 16px;\n}\n"
};

/***/ }),

/***/ 1888:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "显示关闭按钮，点击可关闭警告提示。"
      ]
    ],
    "en-US": [
      [
        "p",
        "To show close button."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "可关闭的警告提示",
      "en-US": "Closable"
    },
    "filename": "components/alert/demo/closable.md",
    "id": "components-alert-demo-closable"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> onClose <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> <span class=\"token string\">'I was closed.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">TextW</span> <span class=\"token attr-name\">arning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">TextWarning</span> <span class=\"token attr-name\">Text\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">closable</span>\n      <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onClose<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Text\"</span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">closable</span>\n      <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onClose<span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(36);

  var onClose = function onClose(e) {
    console.log(e, 'I was closed.');
  };

  return React.createElement(
    "div",
    null,
    React.createElement(_antd.Alert, {
      message: "Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",
      type: "warning",
      closable: true,
      onClose: onClose
    }),
    React.createElement(_antd.Alert, {
      message: "Error Text",
      description: "Error Description Error Description Error Description Error Description Error Description Error Description",
      type: "error",
      closable: true,
      onClose: onClose
    })
  );
}
};

/***/ }),

/***/ 1889:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以自定义关闭，自定义的文字会替换原先的关闭 ",
        [
          "code",
          "Icon"
        ],
        "。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Replace the default icon with customized text."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "自定义关闭",
      "en-US": "Customized Close Text"
    },
    "filename": "components/alert/demo/close-text.md",
    "id": "components-alert-demo-close-text"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">closeText</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Close</span> <span class=\"token attr-name\">Now\"</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(36);

  return React.createElement(_antd.Alert, {
    message: "Info Text",
    type: "info",
    closeText: "Close Now"
  });
}
};

/***/ }),

/***/ 1890:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "含有辅助性文字介绍的警告提示。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Additional description for alert message."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "含有辅助性文字介绍",
      "en-US": "Description"
    },
    "filename": "components/alert/demo/description.md",
    "id": "components-alert-demo-description"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Text\"</span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Success</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Success</span> <span class=\"token attr-name\">Description\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Text\"</span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Info</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Info</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Info</span> <span class=\"token attr-name\">Description\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Text\"</span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Description\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Text\"</span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(36);

  return React.createElement(
    "div",
    null,
    React.createElement(_antd.Alert, {
      message: "Success Text",
      description: "Success Description Success Description Success Description",
      type: "success"
    }),
    React.createElement(_antd.Alert, {
      message: "Info Text",
      description: "Info Description Info Description Info Description Info Description",
      type: "info"
    }),
    React.createElement(_antd.Alert, {
      message: "Warning Text",
      description: "Warning Description Warning Description Warning Description Warning Description",
      type: "warning"
    }),
    React.createElement(_antd.Alert, {
      message: "Error Text",
      description: "Error Description Error Description Error Description Error Description",
      type: "error"
    })
  );
}
};

/***/ }),

/***/ 1891:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可口的图标让信息类型更加醒目。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Decent icon make information more clear and more friendly."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "图标",
      "en-US": "Icon"
    },
    "filename": "components/alert/demo/icon.md",
    "id": "components-alert-demo-icon"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Tips\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Informational</span> <span class=\"token attr-name\">Notes\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Tips\"</span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Detailed</span> <span class=\"token attr-name\">description</span> <span class=\"token attr-name\">and</span> <span class=\"token attr-name\">advices</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">successful</span> <span class=\"token attr-name\">copywriting.\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">showIcon</span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Informational</span> <span class=\"token attr-name\">Notes\"</span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Additional</span> <span class=\"token attr-name\">description</span> <span class=\"token attr-name\">and</span> <span class=\"token attr-name\">informations</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">copywriting.\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">showIcon</span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>This</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">a</span> <span class=\"token attr-name\">warning</span> <span class=\"token attr-name\">notice</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">copywriting.\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">showIcon</span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>This</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">an</span> <span class=\"token attr-name\">error</span> <span class=\"token attr-name\">message</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">copywriting.\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">showIcon</span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(36);

  return React.createElement(
    "div",
    null,
    React.createElement(_antd.Alert, {
      message: "Success Tips",
      type: "success",
      showIcon: true
    }),
    React.createElement(_antd.Alert, {
      message: "Informational Notes",
      type: "info",
      showIcon: true
    }),
    React.createElement(_antd.Alert, {
      message: "Warning",
      type: "warning",
      showIcon: true
    }),
    React.createElement(_antd.Alert, {
      message: "Error",
      type: "error",
      showIcon: true
    }),
    React.createElement(_antd.Alert, {
      message: "Success Tips",
      description: "Detailed description and advices about successful copywriting.",
      type: "success",
      showIcon: true
    }),
    React.createElement(_antd.Alert, {
      message: "Informational Notes",
      description: "Additional description and informations about copywriting.",
      type: "info",
      showIcon: true
    }),
    React.createElement(_antd.Alert, {
      message: "Warning",
      description: "This is a warning notice about copywriting.",
      type: "warning",
      showIcon: true
    }),
    React.createElement(_antd.Alert, {
      message: "Error",
      description: "This is an error message about copywriting.",
      type: "error",
      showIcon: true
    })
  );
}
};

/***/ }),

/***/ 1892:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "共有四种样式 ",
        [
          "code",
          "success"
        ],
        "、",
        [
          "code",
          "info"
        ],
        "、",
        [
          "code",
          "warning"
        ],
        "、",
        [
          "code",
          "error"
        ],
        "。"
      ]
    ],
    "en-US": [
      [
        "p",
        "There are 4 types of Alert: ",
        [
          "code",
          "success"
        ],
        ", ",
        [
          "code",
          "info"
        ],
        ", ",
        [
          "code",
          "warning"
        ],
        ", ",
        [
          "code",
          "error"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "四种样式",
      "en-US": "More types"
    },
    "filename": "components/alert/demo/style.md",
    "id": "components-alert-demo-style"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(36);

  return React.createElement(
    "div",
    null,
    React.createElement(_antd.Alert, {
      message: "Success Text",
      type: "success"
    }),
    React.createElement(_antd.Alert, {
      message: "Info Text",
      type: "info"
    }),
    React.createElement(_antd.Alert, {
      message: "Warning Text",
      type: "warning"
    }),
    React.createElement(_antd.Alert, {
      message: "Error Text",
      type: "error"
    })
  );
}
};

/***/ })

});