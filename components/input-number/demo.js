webpackJsonp([38,210],{

/***/ 858:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "数字输入框。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Numeric-only input box."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/input-number/demo/basic.md",
	    "id": "components-input-number-demo-basic"
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
	      "highlighted": "import { InputNumber } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'changed'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>InputNumber min<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">10</span>} defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">3</span>} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onChange(value) {
	    console.log('changed', value);
	  }

	  return React.createElement(_antd.InputNumber, {
	    min: 1,
	    max: 10,
	    defaultValue: 3,
	    onChange: onChange
	  });
	}
	};

/***/ },

/***/ 859:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "和原生的数字输入框一样，value 的精度由 step 的小数位数决定。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "小数",
	      "en-US": "Decimals"
	    },
	    "filename": "components/input-number/demo/digit.md",
	    "id": "components-input-number-demo-digit"
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
	      "highlighted": "import { InputNumber } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'changed'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>InputNumber min<span class=\"token operator\">=</span>{<span class=\"token number\">0</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">10</span>} <span class=\"token keyword\">step</span><span class=\"token operator\">=</span>{<span class=\"token number\">0.1</span>} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onChange(value) {
	    console.log('changed', value);
	  }

	  return React.createElement(_antd.InputNumber, {
	    min: 0,
	    max: 10,
	    step: 0.1,
	    onChange: onChange
	  });
	}
	};

/***/ },

/***/ 860:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "点击按钮切换可用状态。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Click the button to toggle between available and disabled states."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "不可用",
	      "en-US": "Disabled"
	    },
	    "filename": "components/input-number/demo/disabled.md",
	    "id": "components-input-number-demo-disabled"
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
	      "highlighted": "import { InputNumber<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Test <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">toggle</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      disabled<span class=\"token punctuation\">:</span> !this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>InputNumber min<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">10</span>} disabled<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled} defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">3</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>toggle} type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>Toggle disabled<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Test <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Test = React.createClass({
	    displayName: "Test",
	    getInitialState: function getInitialState() {
	      return {
	        disabled: true
	      };
	    },
	    toggle: function toggle() {
	      this.setState({
	        disabled: !this.state.disabled
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(_antd.InputNumber, {
	          min: 1,
	          max: 10,
	          disabled: this.state.disabled,
	          defaultValue: 3
	        }),
	        React.createElement(
	          "div",
	          {
	            style: {
	              marginTop: 20
	            }
	          },
	          React.createElement(
	            _antd.Button,
	            {
	              onClick: this.toggle,
	              type: "primary"
	            },
	            "Toggle disabled"
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(Test, null);
	}
	};

/***/ },

/***/ 861:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "三种大小的数字输入框，当 size 分别为 ",
	        [
	          "code",
	          "large"
	        ],
	        " 和 ",
	        [
	          "code",
	          "small"
	        ],
	        " 时，输入框高度为 ",
	        [
	          "code",
	          "32px"
	        ],
	        " 和 ",
	        [
	          "code",
	          "22px"
	        ],
	        " ，默认高度为 ",
	        [
	          "code",
	          "28px"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "There are three sizes available to a numeric input box. By default, the size is ",
	        [
	          "code",
	          "28px"
	        ],
	        ". The two additional sizes are ",
	        [
	          "code",
	          "large"
	        ],
	        " and ",
	        [
	          "code",
	          "small"
	        ],
	        " which means ",
	        [
	          "code",
	          "32px"
	        ],
	        " and ",
	        [
	          "code",
	          "22px"
	        ],
	        ", respectively."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "三种大小",
	      "en-US": "Sizes"
	    },
	    "filename": "components/input-number/demo/size.md",
	    "id": "components-input-number-demo-size"
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
	      "highlighted": "import { InputNumber } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'changed'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>InputNumber size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> min<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">100000</span>} defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">3</span>} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>InputNumber min<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">100000</span>} defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">3</span>} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>InputNumber size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> min<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} max<span class=\"token operator\">=</span>{<span class=\"token number\">100000</span>} defaultValue<span class=\"token operator\">=</span>{<span class=\"token number\">3</span>} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onChange(value) {
	    console.log('changed', value);
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.InputNumber, {
	      size: "large",
	      min: 1,
	      max: 100000,
	      defaultValue: 3,
	      onChange: onChange
	    }),
	    React.createElement(_antd.InputNumber, {
	      min: 1,
	      max: 100000,
	      defaultValue: 3,
	      onChange: onChange
	    }),
	    React.createElement(_antd.InputNumber, {
	      size: "small",
	      min: 1,
	      max: 100000,
	      defaultValue: 3,
	      onChange: onChange
	    })
	  );
	},
	  "style": ".ant-input-number {\n  margin-right: 10px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.ant-input-number</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">10</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1211:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(858),
	    'digit': __webpack_require__(859),
	    'disabled': __webpack_require__(860),
	    'size': __webpack_require__(861),
	}

/***/ }

});