webpackJsonp([35,210],{

/***/ 968:
/***/ function(module, exports, __webpack_require__) {

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
	    "filename": "components/rate/demo/basic.md",
	    "id": "components-rate-demo-basic"
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
	      "highlighted": "import { Rate } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Rate <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Rate, null);
	}
	};

/***/ },

/***/ 969:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "只读，无法进行鼠标交互。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Read only, can't use mouse to interact."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "只读",
	      "en-US": "Read only"
	    },
	    "filename": "components/rate/demo/disabled.md",
	    "id": "components-rate-demo-disabled"
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
	      "highlighted": "import { Rate } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Rate disabled defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">2</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Rate, {
	    disabled: true,
	    defaultValue: 2
	  });
	}
	};

/***/ },

/***/ 970:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "支持选中半星。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Support select half star."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "半星",
	      "en-US": "Half star"
	    },
	    "filename": "components/rate/demo/half.md",
	    "id": "components-rate-demo-half"
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
	      "highlighted": "import { Rate } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Rate allowHalf defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">2.5</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Rate, {
	    allowHalf: true,
	    defaultValue: 2.5
	  });
	}
	};

/***/ },

/***/ 971:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "给评分组件加上文案展示。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Add copywriting in rate components."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "文案展现",
	      "en-US": "Show copywriting"
	    },
	    "filename": "components/rate/demo/text.md",
	    "id": "components-rate-demo-text"
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
	      "highlighted": "import { Rate } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Rater <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      value<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n      count<span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { value } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Rate onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange} value<span class=\"token operator\">=</span>{value} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        {value <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-rate-text\"</span><span class=\"token operator\">></span>{value} stars<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Rater <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Rater = React.createClass({
	    displayName: "Rater",
	    getInitialState: function getInitialState() {
	      return {
	        value: 3,
	        count: null
	      };
	    },
	    handleChange: function handleChange(value) {
	      this.setState({
	        value: value
	      });
	    },
	    render: function render() {
	      var value = this.state.value;
	      return React.createElement(
	        "span",
	        null,
	        React.createElement(_antd.Rate, {
	          onChange: this.handleChange,
	          value: value
	        }),
	        value && React.createElement(
	          "span",
	          {
	            className: "ant-rate-text"
	          },
	          value,
	          " stars"
	        )
	      );
	    }
	  });
	  return React.createElement(Rater, null);
	}
	};

/***/ },

/***/ 1224:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(968),
	    'disabled': __webpack_require__(969),
	    'half': __webpack_require__(970),
	    'text': __webpack_require__(971),
	}

/***/ }

});