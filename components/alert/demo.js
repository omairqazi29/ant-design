webpackJsonp([18,210],{

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用作顶部公告时，默认有图标，",
	        [
	          "code",
	          "type"
	        ],
	        " 为 'warning'，并有特殊样式。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "When ",
	        [
	          "code",
	          "Alert"
	        ],
	        " is used as banner, it has particular style, Icon and ",
	        [
	          "code",
	          "type"
	        ],
	        "(warning) are specified by default."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
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
	      "highlighted": "import { Alert } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Warning text\"</span> banner <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Very long warning text warning text text text text text text text\"</span> banner closable <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

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
	    })
	  );
	}
	};

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Alert } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Success Text\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Alert, {
	    message: "Success Text",
	    type: "success"
	  });
	}
	};

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Alert } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> onClose <span class=\"token operator\">=</span> function <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> <span class=\"token string\">'I was closed.'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text\"</span>\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span>\n    closable\n    onClose<span class=\"token operator\">=</span>{onClose}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Error Text\"</span>\n    description<span class=\"token operator\">=</span><span class=\"token string\">\"Error Description Error Description Error Description Error Description Error Description Error Description\"</span>\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n    closable\n    onClose<span class=\"token operator\">=</span>{onClose}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

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

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Alert } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Info Text\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span> closeText<span class=\"token operator\">=</span><span class=\"token string\">\"Close Now\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Alert, {
	    message: "Info Text",
	    type: "info",
	    closeText: "Close Now"
	  });
	}
	};

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Alert } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert\n    message<span class=\"token operator\">=</span><span class=\"token string\">\"Success Text\"</span>\n    description<span class=\"token operator\">=</span><span class=\"token string\">\"Success Description Success Description Success Description\"</span>\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert\n    message<span class=\"token operator\">=</span><span class=\"token string\">\"Info Text\"</span>\n    description<span class=\"token operator\">=</span><span class=\"token string\">\"Info Description Info Description Info Description Info Description\"</span>\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert\n    message<span class=\"token operator\">=</span><span class=\"token string\">\"Warning Text\"</span>\n    description<span class=\"token operator\">=</span><span class=\"token string\">\"Warning Description Warning Description Warning Description Warning Description\"</span>\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert\n    message<span class=\"token operator\">=</span><span class=\"token string\">\"Error Text\"</span>\n    description<span class=\"token operator\">=</span><span class=\"token string\">\"Error Description Error Description Error Description Error Description\"</span>\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

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

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Alert } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Success Tips\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span> showIcon <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Informational Notes\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span> showIcon <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span> showIcon <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Error\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span> showIcon <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert\n    message<span class=\"token operator\">=</span><span class=\"token string\">\"success tips\"</span>\n    description<span class=\"token operator\">=</span><span class=\"token string\">\"Detailed description and advices about successful copywriting.\"</span>\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span>\n    showIcon\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert\n    message<span class=\"token operator\">=</span><span class=\"token string\">\"Informational Notes\"</span>\n    description<span class=\"token operator\">=</span><span class=\"token string\">\"Additional description and informations about copywriting.\"</span>\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span>\n    showIcon\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert\n    message<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span>\n    description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a warning notice about copywriting.\"</span>\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span>\n    showIcon\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert\n    message<span class=\"token operator\">=</span><span class=\"token string\">\"Error\"</span>\n    description<span class=\"token operator\">=</span><span class=\"token string\">\"This is an error message about copywriting.\"</span>\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n    showIcon\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

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
	      message: "success tips",
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

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

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
	      "highlighted": "import { Alert } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Success Text\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Info Text\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Warning Text\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Error Text\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

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

/***/ },

/***/ 1196:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'banner': __webpack_require__(720),
	    'basic': __webpack_require__(721),
	    'closable': __webpack_require__(722),
	    'close-text': __webpack_require__(723),
	    'description': __webpack_require__(724),
	    'icon': __webpack_require__(725),
	    'style': __webpack_require__(726),
	}

/***/ }

});