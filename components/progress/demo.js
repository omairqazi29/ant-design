webpackJsonp([14,210],{

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "会动的进度条才是好进度条。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A dynamic progress bar is better."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "进度圈动态展示",
	      "en-US": "Dynamic circular progress bar"
	    },
	    "filename": "components/progress/demo/circle-dynamic.md",
	    "id": "components-progress-demo-circle-dynamic"
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
	      "highlighted": "import { Progress<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> ButtonGroup <span class=\"token operator\">=</span> Button<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> MyProgress <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      percent<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">increase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    let percent <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>percent <span class=\"token operator\">+</span> <span class=\"token number\">10</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>percent <span class=\"token operator\">></span> <span class=\"token number\">100</span><span class=\"token punctuation\">)</span> {\n      percent <span class=\"token operator\">=</span> <span class=\"token number\">100</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ percent }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">decline</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    let percent <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>percent <span class=\"token operator\">-</span> <span class=\"token number\">10</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>percent <span class=\"token operator\">&lt;</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n      percent <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ percent }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Progress type<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> percent<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>percent} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>ButtonGroup<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>decline} icon<span class=\"token operator\">=</span><span class=\"token string\">\"minus\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>increase} icon<span class=\"token operator\">=</span><span class=\"token string\">\"plus\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ButtonGroup<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>MyProgress <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var ButtonGroup = _antd.Button.Group;
	  var MyProgress = React.createClass({
	    displayName: "MyProgress",
	    getInitialState: function getInitialState() {
	      return {
	        percent: 0
	      };
	    },
	    increase: function increase() {
	      var percent = this.state.percent + 10;

	      if (percent > 100) {
	        percent = 100;
	      }

	      this.setState({
	        percent: percent
	      });
	    },
	    decline: function decline() {
	      var percent = this.state.percent - 10;

	      if (percent < 0) {
	        percent = 0;
	      }

	      this.setState({
	        percent: percent
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_antd.Progress, {
	          type: "circle",
	          percent: this.state.percent
	        }),
	        React.createElement(
	          ButtonGroup,
	          null,
	          React.createElement(_antd.Button, {
	            type: "ghost",
	            onClick: this.decline,
	            icon: "minus"
	          }),
	          React.createElement(_antd.Button, {
	            type: "ghost",
	            onClick: this.increase,
	            icon: "plus"
	          })
	        )
	      );
	    }
	  });
	  return React.createElement(MyProgress, null);
	}
	};

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "小一号的圈形进度。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A smaller circular progress bar."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "小型进度圈",
	      "en-US": "Mini size circular progress bar"
	    },
	    "filename": "components/progress/demo/circle-mini.md",
	    "id": "components-progress-demo-circle-mini"
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
	      "highlighted": "import { Progress } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress type<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> percent<span class=\"token operator\">=</span>{<span class=\"token number\">30</span>} width<span class=\"token operator\">=</span>{<span class=\"token number\">80</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress type<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> percent<span class=\"token operator\">=</span>{<span class=\"token number\">70</span>} width<span class=\"token operator\">=</span>{<span class=\"token number\">80</span>} status<span class=\"token operator\">=</span><span class=\"token string\">\"exception\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress type<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> percent<span class=\"token operator\">=</span>{<span class=\"token number\">100</span>} width<span class=\"token operator\">=</span>{<span class=\"token number\">80</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Progress, {
	      type: "circle",
	      percent: 30,
	      width: 80
	    }),
	    React.createElement(_antd.Progress, {
	      type: "circle",
	      percent: 70,
	      width: 80,
	      status: "exception"
	    }),
	    React.createElement(_antd.Progress, {
	      type: "circle",
	      percent: 100,
	      width: 80
	    })
	  );
	}
	};

/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "圈形的进度。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A circular progress bar."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "进度圈",
	      "en-US": "Circular progress bar"
	    },
	    "filename": "components/progress/demo/circle.md",
	    "id": "components-progress-demo-circle"
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
	      "highlighted": "import { Progress } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress type<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> percent<span class=\"token operator\">=</span>{<span class=\"token number\">75</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress type<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> percent<span class=\"token operator\">=</span>{<span class=\"token number\">70</span>} status<span class=\"token operator\">=</span><span class=\"token string\">\"exception\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress type<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> percent<span class=\"token operator\">=</span>{<span class=\"token number\">100</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Progress, {
	      type: "circle",
	      percent: 75
	    }),
	    React.createElement(_antd.Progress, {
	      type: "circle",
	      percent: 70,
	      status: "exception"
	    }),
	    React.createElement(_antd.Progress, {
	      type: "circle",
	      percent: 100
	    })
	  );
	},
	  "style": "\n.ant-progress-circle-wrap,\n.ant-progress-line-wrap {\n  margin-right: 8px;\n  margin-bottom: 5px;\n}\n"
	};

/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "会动的进度条才是好进度条。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A dynamic progress bar is better."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "动态展示",
	      "en-US": "Dynamic"
	    },
	    "filename": "components/progress/demo/dynamic.md",
	    "id": "components-progress-demo-dynamic"
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
	      "highlighted": "import { Progress<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> ButtonGroup <span class=\"token operator\">=</span> Button<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> MyProgress <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      percent<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">increase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    let percent <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>percent <span class=\"token operator\">+</span> <span class=\"token number\">10</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>percent <span class=\"token operator\">></span> <span class=\"token number\">100</span><span class=\"token punctuation\">)</span> {\n      percent <span class=\"token operator\">=</span> <span class=\"token number\">100</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ percent }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">decline</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    let percent <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>percent <span class=\"token operator\">-</span> <span class=\"token number\">10</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>percent <span class=\"token operator\">&lt;</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n      percent <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ percent }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Progress percent<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>percent} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>ButtonGroup<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>decline} icon<span class=\"token operator\">=</span><span class=\"token string\">\"minus\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>increase} icon<span class=\"token operator\">=</span><span class=\"token string\">\"plus\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ButtonGroup<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>MyProgress <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var ButtonGroup = _antd.Button.Group;
	  var MyProgress = React.createClass({
	    displayName: "MyProgress",
	    getInitialState: function getInitialState() {
	      return {
	        percent: 0
	      };
	    },
	    increase: function increase() {
	      var percent = this.state.percent + 10;

	      if (percent > 100) {
	        percent = 100;
	      }

	      this.setState({
	        percent: percent
	      });
	    },
	    decline: function decline() {
	      var percent = this.state.percent - 10;

	      if (percent < 0) {
	        percent = 0;
	      }

	      this.setState({
	        percent: percent
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_antd.Progress, {
	          percent: this.state.percent
	        }),
	        React.createElement(
	          ButtonGroup,
	          null,
	          React.createElement(_antd.Button, {
	            type: "ghost",
	            onClick: this.decline,
	            icon: "minus"
	          }),
	          React.createElement(_antd.Button, {
	            type: "ghost",
	            onClick: this.increase,
	            icon: "plus"
	          })
	        )
	      );
	    }
	  });
	  return React.createElement(MyProgress, null);
	}
	};

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        [
	          "code",
	          "format"
	        ],
	        " 属性指定格式。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "You can custom text format by setting ",
	        [
	          "code",
	          "format"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "自定义文字格式",
	      "en-US": "Custom text format"
	    },
	    "filename": "components/progress/demo/format.md",
	    "id": "components-progress-demo-format"
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
	      "highlighted": "import { Progress } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress type<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> percent<span class=\"token operator\">=</span>{<span class=\"token number\">75</span>} format<span class=\"token operator\">=</span>{percent <span class=\"token operator\">=</span><span class=\"token operator\">></span> `${percent} Days`} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress type<span class=\"token operator\">=</span><span class=\"token string\">\"circle\"</span> percent<span class=\"token operator\">=</span>{<span class=\"token number\">100</span>} format<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token string\">'Done'</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Progress, {
	      type: "circle",
	      percent: 75,
	      format: function format(percent) {
	        return percent + " Days";
	      }
	    }),
	    React.createElement(_antd.Progress, {
	      type: "circle",
	      percent: 100,
	      format: function format() {
	        return 'Done';
	      }
	    })
	  );
	},
	  "style": "\n.ant-progress-circle,\n.ant-progress-line {\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n"
	};

/***/ },

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "适合放在较狭窄的区域内。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Appropriate for a narrow area."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "小型进度条",
	      "en-US": "Mini size progress bar"
	    },
	    "filename": "components/progress/demo/line-mini.md",
	    "id": "components-progress-demo-line-mini"
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
	      "highlighted": "import { Progress } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">170</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress percent<span class=\"token operator\">=</span>{<span class=\"token number\">30</span>} strokeWidth<span class=\"token operator\">=</span>{<span class=\"token number\">5</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress percent<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} strokeWidth<span class=\"token operator\">=</span>{<span class=\"token number\">5</span>} status<span class=\"token operator\">=</span><span class=\"token string\">\"active\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress percent<span class=\"token operator\">=</span>{<span class=\"token number\">70</span>} strokeWidth<span class=\"token operator\">=</span>{<span class=\"token number\">5</span>} status<span class=\"token operator\">=</span><span class=\"token string\">\"exception\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress percent<span class=\"token operator\">=</span>{<span class=\"token number\">100</span>} strokeWidth<span class=\"token operator\">=</span>{<span class=\"token number\">5</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    {
	      style: {
	        width: 170
	      }
	    },
	    React.createElement(_antd.Progress, {
	      percent: 30,
	      strokeWidth: 5
	    }),
	    React.createElement(_antd.Progress, {
	      percent: 50,
	      strokeWidth: 5,
	      status: "active"
	    }),
	    React.createElement(_antd.Progress, {
	      percent: 70,
	      strokeWidth: 5,
	      status: "exception"
	    }),
	    React.createElement(_antd.Progress, {
	      percent: 100,
	      strokeWidth: 5
	    })
	  );
	}
	};

/***/ },

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "标准的进度条。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A standard progress bar."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "进度条",
	      "en-US": "Progress bar"
	    },
	    "filename": "components/progress/demo/line.md",
	    "id": "components-progress-demo-line"
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
	      "highlighted": "import { Progress } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress percent<span class=\"token operator\">=</span>{<span class=\"token number\">30</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress percent<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} status<span class=\"token operator\">=</span><span class=\"token string\">\"active\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress percent<span class=\"token operator\">=</span>{<span class=\"token number\">70</span>} status<span class=\"token operator\">=</span><span class=\"token string\">\"exception\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress percent<span class=\"token operator\">=</span>{<span class=\"token number\">100</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Progress percent<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} showInfo<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Progress, {
	      percent: 30
	    }),
	    React.createElement(_antd.Progress, {
	      percent: 50,
	      status: "active"
	    }),
	    React.createElement(_antd.Progress, {
	      percent: 70,
	      status: "exception"
	    }),
	    React.createElement(_antd.Progress, {
	      percent: 100
	    }),
	    React.createElement(_antd.Progress, {
	      percent: 50,
	      showInfo: false
	    })
	  );
	}
	};

/***/ },

/***/ 1056:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'circle-dynamic': __webpack_require__(801),
	    'circle-mini': __webpack_require__(802),
	    'circle': __webpack_require__(803),
	    'dynamic': __webpack_require__(804),
	    'format': __webpack_require__(805),
	    'line-mini': __webpack_require__(806),
	    'line': __webpack_require__(807),
	}

/***/ }

});