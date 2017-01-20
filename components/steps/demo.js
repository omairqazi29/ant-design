webpackJsonp([13,210],{

/***/ 1003:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 Steps 的 ",
	        [
	          "code",
	          "status"
	        ],
	        " 属性来指定当前步骤的状态。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "By using ",
	        [
	          "code",
	          "status"
	        ],
	        " of ",
	        [
	          "code",
	          "Steps"
	        ],
	        ", you can specify the state for current step."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "步骤运行错误",
	      "en-US": "Error status"
	    },
	    "filename": "components/steps/demo/error.md",
	    "id": "components-steps-demo-error"
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
	      "highlighted": "import { Steps } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token keyword\">Step</span> <span class=\"token operator\">=</span> Steps<span class=\"token punctuation\">.</span><span class=\"token keyword\">Step</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Steps current<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} status<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Finished\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"In Process\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Waiting\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Steps<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Step = _antd.Steps.Step;
	  return React.createElement(
	    _antd.Steps,
	    {
	      current: 1,
	      status: "error"
	    },
	    React.createElement(Step, {
	      title: "Finished",
	      description: "This is a description"
	    }),
	    React.createElement(Step, {
	      title: "In Process",
	      description: "This is a description"
	    }),
	    React.createElement(Step, {
	      title: "Waiting",
	      description: "This is a description"
	    })
	  );
	}
	};

/***/ },

/***/ 1004:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "通过设置 ",
	        [
	          "code",
	          "Steps.Step"
	        ],
	        " 的 ",
	        [
	          "code",
	          "icon"
	        ],
	        " 属性，可以启用自定义图标。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "You can use your own custom icons by setting the property ",
	        [
	          "code",
	          "icon"
	        ],
	        " for ",
	        [
	          "code",
	          "Steps.Step"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "带图标的步骤条",
	      "en-US": "With icon"
	    },
	    "filename": "components/steps/demo/icon.md",
	    "id": "components-steps-demo-icon"
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
	      "highlighted": "import { Steps<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token keyword\">Step</span> <span class=\"token operator\">=</span> Steps<span class=\"token punctuation\">.</span><span class=\"token keyword\">Step</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Steps<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> status<span class=\"token operator\">=</span><span class=\"token string\">\"finish\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Login\"</span> icon<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> status<span class=\"token operator\">=</span><span class=\"token string\">\"finish\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Verification\"</span> icon<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"solution\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> status<span class=\"token operator\">=</span><span class=\"token string\">\"process\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Pay\"</span> icon<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"credit-card\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> status<span class=\"token operator\">=</span><span class=\"token string\">\"wait\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Done\"</span> icon<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"smile-o\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Steps<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Step = _antd.Steps.Step;
	  return React.createElement(
	    _antd.Steps,
	    null,
	    React.createElement(Step, {
	      status: "finish",
	      title: "Login",
	      icon: React.createElement(_antd.Icon, {
	        type: "user"
	      })
	    }),
	    React.createElement(Step, {
	      status: "finish",
	      title: "Verification",
	      icon: React.createElement(_antd.Icon, {
	        type: "solution"
	      })
	    }),
	    React.createElement(Step, {
	      status: "process",
	      title: "Pay",
	      icon: React.createElement(_antd.Icon, {
	        type: "credit-card"
	      })
	    }),
	    React.createElement(Step, {
	      status: "wait",
	      title: "Done",
	      icon: React.createElement(_antd.Icon, {
	        type: "smile-o"
	      })
	    })
	  );
	}
	};

/***/ },

/***/ 1005:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "简单的步骤条。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The most basic step bar."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本用法",
	      "en-US": "Basic"
	    },
	    "filename": "components/steps/demo/simple.md",
	    "id": "components-steps-demo-simple"
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
	      "highlighted": "import { Steps } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token keyword\">Step</span> <span class=\"token operator\">=</span> Steps<span class=\"token punctuation\">.</span><span class=\"token keyword\">Step</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Steps current<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Finished\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description.\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"In Progress\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description.\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Waiting\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description.\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Steps<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Step = _antd.Steps.Step;
	  return React.createElement(
	    _antd.Steps,
	    {
	      current: 1
	    },
	    React.createElement(Step, {
	      title: "Finished",
	      description: "This is a description."
	    }),
	    React.createElement(Step, {
	      title: "In Progress",
	      description: "This is a description."
	    }),
	    React.createElement(Step, {
	      title: "Waiting",
	      description: "This is a description."
	    })
	  );
	}
	};

/***/ },

/***/ 1006:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "迷你版的步骤条，通过设置 ",
	        [
	          "code",
	          "<Steps size=\"small\">"
	        ],
	        " 启用."
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "By setting like this: ",
	        [
	          "code",
	          "<Steps size=\"small\">"
	        ],
	        ", you can get a mini version."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "迷你版",
	      "en-US": "Mini version"
	    },
	    "filename": "components/steps/demo/small-size.md",
	    "id": "components-steps-demo-small-size"
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
	      "highlighted": "import { Steps } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token keyword\">Step</span> <span class=\"token operator\">=</span> Steps<span class=\"token punctuation\">.</span><span class=\"token keyword\">Step</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Steps size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> current<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Finished\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"In Progress\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Waiting\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Steps<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Step = _antd.Steps.Step;
	  return React.createElement(
	    _antd.Steps,
	    {
	      size: "small",
	      current: 1
	    },
	    React.createElement(Step, {
	      title: "Finished"
	    }),
	    React.createElement(Step, {
	      title: "In Progress"
	    }),
	    React.createElement(Step, {
	      title: "Waiting"
	    })
	  );
	}
	};

/***/ },

/***/ 1007:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "通常配合内容及按钮使用，表示一个流程的处理进度。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Cooperate with the content and buttons, to represent the progress of a process."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "步骤切换",
	      "en-US": "Switch Step"
	    },
	    "filename": "components/steps/demo/step-next.md",
	    "id": "components-steps-demo-step-next"
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
	      "highlighted": "import { Steps<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> message } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token keyword\">Step</span> <span class=\"token operator\">=</span> Steps<span class=\"token punctuation\">.</span><span class=\"token keyword\">Step</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> steps <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>{\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'First'</span><span class=\"token punctuation\">,</span>\n  content<span class=\"token punctuation\">:</span> <span class=\"token string\">'First-content'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Second'</span><span class=\"token punctuation\">,</span>\n  content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Second-content'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span> {\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Last'</span><span class=\"token punctuation\">,</span>\n  content<span class=\"token punctuation\">:</span> <span class=\"token string\">'Last-content'</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass App extends React<span class=\"token punctuation\">.</span>Component {\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> {\n    <span class=\"token function\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> {\n      current<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">next</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> current <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ current }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">prev</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> current <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ current }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { current } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Steps current<span class=\"token operator\">=</span>{current}<span class=\"token operator\">></span>\n          {steps<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>title} title<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>title} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">)</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Steps<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"steps-content\"</span><span class=\"token operator\">></span>{steps<span class=\"token punctuation\">[</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span>content}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"steps-action\"</span><span class=\"token operator\">></span>\n          {\n            this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current <span class=\"token operator\">&lt;</span> steps<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span>\n            <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span>\n            <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">next</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span><span class=\"token keyword\">Next</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          }\n          {\n            this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current <span class=\"token operator\">==</span><span class=\"token operator\">=</span> steps<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span>\n            <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span>\n            <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Processing complete!'</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>Done<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          }\n          {\n            this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current <span class=\"token operator\">></span> <span class=\"token number\">0</span>\n            <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span>\n            <span class=\"token operator\">&lt;</span>Button style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> }} type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> onClick<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">prev</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>\n              Previous\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          }\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var Step = _antd.Steps.Step;
	  var steps = [{
	    title: 'First',
	    content: 'First-content'
	  }, {
	    title: 'Second',
	    content: 'Second-content'
	  }, {
	    title: 'Last',
	    content: 'Last-content'
	  }];

	  var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	      _classCallCheck(this, App);

	      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	      _this.state = {
	        current: 0
	      };
	      return _this;
	    }

	    App.prototype.next = function next() {
	      var current = this.state.current + 1;
	      this.setState({
	        current: current
	      });
	    };

	    App.prototype.prev = function prev() {
	      var current = this.state.current - 1;
	      this.setState({
	        current: current
	      });
	    };

	    App.prototype.render = function render() {
	      var _this2 = this;

	      var current = this.state.current;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Steps,
	          {
	            current: current
	          },
	          steps.map(function (item) {
	            return React.createElement(Step, {
	              key: item.title,
	              title: item.title
	            });
	          })
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "steps-content"
	          },
	          steps[this.state.current].content
	        ),
	        React.createElement(
	          "div",
	          {
	            className: "steps-action"
	          },
	          this.state.current < steps.length - 1 && React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              onClick: function onClick() {
	                return _this2.next();
	              }
	            },
	            "Next"
	          ),
	          this.state.current === steps.length - 1 && React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              onClick: function onClick() {
	                return _antd.message.success('Processing complete!');
	              }
	            },
	            "Done"
	          ),
	          this.state.current > 0 && React.createElement(
	            _antd.Button,
	            {
	              style: {
	                marginLeft: 8
	              },
	              type: "ghost",
	              onClick: function onClick() {
	                return _this2.prev();
	              }
	            },
	            "Previous"
	          )
	        )
	      );
	    };

	    return App;
	  }(React.Component);

	  return React.createElement(App, null);
	},
	  "style": ".steps-content {\n  margin-top: 16px;\n  border: 1px dashed #e9e9e9;\n  border-radius: 6px;\n  background-color: #fafafa;\n  min-height: 200px;\n  text-align: center;\n  padding-top: 80px;\n}\n\n.steps-action {\n  margin-top: 24px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.steps-content</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px dashed <span class=\"token hexcode\">#e9e9e9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fafafa</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">80</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.steps-action</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1008:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "简单的竖直方向的小型步骤条。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A simple mini version step bar in the vertical direction."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "竖直方向的小型步骤条",
	      "en-US": "Vertical mini version"
	    },
	    "filename": "components/steps/demo/vertical-small.md",
	    "id": "components-steps-demo-vertical-small"
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
	      "highlighted": "import { Steps } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token keyword\">Step</span> <span class=\"token operator\">=</span> Steps<span class=\"token punctuation\">.</span><span class=\"token keyword\">Step</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Steps direction<span class=\"token operator\">=</span><span class=\"token string\">\"vertical\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> current<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Finished\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description.\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"In Progress\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description.\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Waiting\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description.\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Steps<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Step = _antd.Steps.Step;
	  return React.createElement(
	    _antd.Steps,
	    {
	      direction: "vertical",
	      size: "small",
	      current: 1
	    },
	    React.createElement(Step, {
	      title: "Finished",
	      description: "This is a description."
	    }),
	    React.createElement(Step, {
	      title: "In Progress",
	      description: "This is a description."
	    }),
	    React.createElement(Step, {
	      title: "Waiting",
	      description: "This is a description."
	    })
	  );
	}
	};

/***/ },

/***/ 1009:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "简单的竖直方向的步骤条。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A simple step bar in the vertical direction."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "竖直方向的步骤条",
	      "en-US": "Vertical"
	    },
	    "filename": "components/steps/demo/vertical.md",
	    "id": "components-steps-demo-vertical"
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
	      "highlighted": "import { Steps } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token keyword\">Step</span> <span class=\"token operator\">=</span> Steps<span class=\"token punctuation\">.</span><span class=\"token keyword\">Step</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Steps direction<span class=\"token operator\">=</span><span class=\"token string\">\"vertical\"</span> current<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Finished\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description.\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"In Progress\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description.\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Step</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Waiting\"</span> description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a description.\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Steps<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Step = _antd.Steps.Step;
	  return React.createElement(
	    _antd.Steps,
	    {
	      direction: "vertical",
	      current: 1
	    },
	    React.createElement(Step, {
	      title: "Finished",
	      description: "This is a description."
	    }),
	    React.createElement(Step, {
	      title: "In Progress",
	      description: "This is a description."
	    }),
	    React.createElement(Step, {
	      title: "Waiting",
	      description: "This is a description."
	    })
	  );
	}
	};

/***/ },

/***/ 1228:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'error': __webpack_require__(1003),
	    'icon': __webpack_require__(1004),
	    'simple': __webpack_require__(1005),
	    'small-size': __webpack_require__(1006),
	    'step-next': __webpack_require__(1007),
	    'vertical-small': __webpack_require__(1008),
	    'vertical': __webpack_require__(1009),
	}

/***/ }

});