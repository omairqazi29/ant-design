webpackJsonp([20,211],{

/***/ 996:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "一个简单的 loading 状态。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A simple loading status."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本用法",
	      "en-US": "basic Usage"
	    },
	    "filename": "components/spin/demo/basic.md",
	    "id": "components-spin-demo-basic"
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
	      "highlighted": "import { Spin } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Spin <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Spin, null);
	}
	};

/***/ },

/***/ 997:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "延迟显示 loading 效果。当 spinning 状态在 ",
	        [
	          "code",
	          "delay"
	        ],
	        " 时间内结束，则不显示 loading 状态。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Specifies a delay for loading state. If ",
	        [
	          "code",
	          "spinning"
	        ],
	        " ends during delay, loading status won't appear."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "延迟",
	      "en-US": "delay"
	    },
	    "filename": "components/spin/demo/delayAndDebounce.md",
	    "id": "components-spin-demo-delayAndDebounce"
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
	      "highlighted": "import { Spin<span class=\"token punctuation\">,</span> Alert<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Switch</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Card <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return { loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">toggle</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ loading<span class=\"token punctuation\">:</span> value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> container <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Alert\n        message<span class=\"token operator\">=</span><span class=\"token string\">\"Alert message title\"</span>\n        description<span class=\"token operator\">=</span><span class=\"token string\">\"Further details about the context of this alert.\"</span>\n        type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span>\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Spin spinning<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading} delay<span class=\"token operator\">=</span>{<span class=\"token number\">500</span>} <span class=\"token operator\">></span>{container}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Spin<span class=\"token operator\">></span>\n        Loading state：<span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>toggle} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Card <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Card = React.createClass({
	    displayName: "Card",
	    getInitialState: function getInitialState() {
	      return {
	        loading: false
	      };
	    },
	    toggle: function toggle(value) {
	      this.setState({
	        loading: value
	      });
	    },
	    render: function render() {
	      var container = React.createElement(_antd.Alert, {
	        message: "Alert message title",
	        description: "Further details about the context of this alert.",
	        type: "info"
	      });
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Spin,
	          {
	            spinning: this.state.loading,
	            delay: 500
	          },
	          container
	        ),
	        "Loading state：",
	        React.createElement(_antd.Switch, {
	          checked: this.state.loading,
	          onChange: this.toggle
	        })
	      );
	    }
	  });
	  return React.createElement(Card, null);
	},
	  "style": ".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.example</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span>,<span class=\"token number\">0</span>,<span class=\"token number\">0</span>,<span class=\"token number\">0.05</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 998:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "放入一个容器中。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Spin in a container."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "容器",
	      "en-US": "Inside a container"
	    },
	    "filename": "components/spin/demo/inside.md",
	    "id": "components-spin-demo-inside"
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
	      "highlighted": "import { Spin } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"example\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Spin <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    {
	      className: "example"
	    },
	    React.createElement(_antd.Spin, null)
	  );
	},
	  "style": ".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.example</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span>,<span class=\"token number\">0</span>,<span class=\"token number\">0</span>,<span class=\"token number\">0.05</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 999:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可以直接把内容内嵌到 ",
	        [
	          "code",
	          "Spin"
	        ],
	        " 中，将现有容器变为加载状态。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Embedding content into ",
	        [
	          "code",
	          "Spin"
	        ],
	        " will alter it into loading state."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "卡片加载中",
	      "en-US": "Embedded mode"
	    },
	    "filename": "components/spin/demo/nested.md",
	    "id": "components-spin-demo-nested"
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
	      "highlighted": "import { Spin<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Switch</span><span class=\"token punctuation\">,</span> Alert } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Card <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return { loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">toggle</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ loading<span class=\"token punctuation\">:</span> value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> container <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Alert\n        message<span class=\"token operator\">=</span><span class=\"token string\">\"Alert message title\"</span>\n        description<span class=\"token operator\">=</span><span class=\"token string\">\"Further details about the context of this alert.\"</span>\n        type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span>\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Spin spinning<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading}<span class=\"token operator\">></span>{container}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Spin<span class=\"token operator\">></span>\n        Loading state：<span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> checked<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>toggle} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Card <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Card = React.createClass({
	    displayName: "Card",
	    getInitialState: function getInitialState() {
	      return {
	        loading: false
	      };
	    },
	    toggle: function toggle(value) {
	      this.setState({
	        loading: value
	      });
	    },
	    render: function render() {
	      var container = React.createElement(_antd.Alert, {
	        message: "Alert message title",
	        description: "Further details about the context of this alert.",
	        type: "info"
	      });
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Spin,
	          {
	            spinning: this.state.loading
	          },
	          container
	        ),
	        "Loading state：",
	        React.createElement(_antd.Switch, {
	          checked: this.state.loading,
	          onChange: this.toggle
	        })
	      );
	    }
	  });
	  return React.createElement(Card, null);
	}
	};

/***/ },

/***/ 1000:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "小的用于文本加载，默认用于卡片容器级加载，大的用于",
	        [
	          "strong",
	          "页面级"
	        ],
	        "加载。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A small ",
	        [
	          "code",
	          "Spin"
	        ],
	        " use in loading text, default ",
	        [
	          "code",
	          "Spin"
	        ],
	        " use in loading card-level block, and large ",
	        [
	          "code",
	          "Spin"
	        ],
	        " use in loading ",
	        [
	          "strong",
	          "page"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "各种大小",
	      "en-US": "Size"
	    },
	    "filename": "components/spin/demo/size.md",
	    "id": "components-spin-demo-size"
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
	      "highlighted": "import { Spin } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Spin size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Spin <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Spin size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Spin, {
	      size: "small"
	    }),
	    React.createElement(_antd.Spin, null),
	    React.createElement(_antd.Spin, {
	      size: "large"
	    })
	  );
	},
	  "style": "\n.ant-spin {\n  margin-right: 16px;\n}\n"
	};

/***/ },

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "自定义描述文案。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Customized description content."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "自定义描述文案",
	      "en-US": "Customized description"
	    },
	    "filename": "components/spin/demo/tip.md",
	    "id": "components-spin-demo-tip"
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
	      "highlighted": "import { Spin<span class=\"token punctuation\">,</span> Alert } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Spin tip<span class=\"token operator\">=</span><span class=\"token string\">\"Loading...\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Alert\n      message<span class=\"token operator\">=</span><span class=\"token string\">\"Alert message title\"</span>\n      description<span class=\"token operator\">=</span><span class=\"token string\">\"Further details about the context of this alert.\"</span>\n      type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Spin<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Spin,
	    {
	      tip: "Loading..."
	    },
	    React.createElement(_antd.Alert, {
	      message: "Alert message title",
	      description: "Further details about the context of this alert.",
	      type: "info"
	    })
	  );
	}
	};

/***/ },

/***/ 1231:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(996),
	    'delayAndDebounce': __webpack_require__(997),
	    'inside': __webpack_require__(998),
	    'nested': __webpack_require__(999),
	    'size': __webpack_require__(1000),
	    'tip': __webpack_require__(1001),
	}

/***/ }

});