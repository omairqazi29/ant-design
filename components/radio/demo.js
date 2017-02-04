webpackJsonp([21,211],{

/***/ 810:
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
	        "The simplest use."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/radio/demo/basic.md",
	    "id": "components-radio-demo-basic"
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
	      "highlighted": "import { Radio } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Radio<span class=\"token operator\">></span>Radio<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Radio,
	    null,
	    "Radio"
	  );
	}
	};

/***/ },

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "Radio 不可用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Radio unavailable."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "不可用",
	      "en-US": "disabled"
	    },
	    "filename": "components/radio/demo/disable.md",
	    "id": "components-radio-demo-disable"
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
	      "highlighted": "import { Radio<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">toggleDisabled</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      disabled<span class=\"token punctuation\">:</span> !this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio defaultChecked<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>} disabled<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled}<span class=\"token operator\">></span>Disabled<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio defaultChecked disabled<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled}<span class=\"token operator\">></span>Disabled<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>toggleDisabled}<span class=\"token operator\">></span>\n            Toggle disabled\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        disabled: true
	      };
	    },
	    toggleDisabled: function toggleDisabled() {
	      this.setState({
	        disabled: !this.state.disabled
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Radio,
	          {
	            defaultChecked: false,
	            disabled: this.state.disabled
	          },
	          "Disabled"
	        ),
	        React.createElement("br", null),
	        React.createElement(
	          _antd.Radio,
	          {
	            defaultChecked: true,
	            disabled: this.state.disabled
	          },
	          "Disabled"
	        ),
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
	              type: "primary",
	              onClick: this.toggleDisabled
	            },
	            "Toggle disabled"
	          )
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "按钮样式的单选组合。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The combination of radio button style."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "按钮样式",
	      "en-US": "radio style"
	    },
	    "filename": "components/radio/demo/radiobutton.md",
	    "id": "components-radio-demo-radiobutton"
	  },
	  "description": [
	    "section"
	  ],
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
	      "highlighted": "import { Radio } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RadioButton <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Button<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RadioGroup <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`radio checked<span class=\"token punctuation\">:</span>${e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RadioGroup onChange<span class=\"token operator\">=</span>{onChange} defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>Hangzhou<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"b\"</span><span class=\"token operator\">></span>Shanghai<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"c\"</span><span class=\"token operator\">></span>Beijing<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"d\"</span><span class=\"token operator\">></span>Chengdu<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioGroup<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RadioGroup onChange<span class=\"token operator\">=</span>{onChange} defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>Hangzhou<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"b\"</span> disabled<span class=\"token operator\">></span>Shanghai<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"c\"</span><span class=\"token operator\">></span>Beijing<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"d\"</span><span class=\"token operator\">></span>Chengdu<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioGroup<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RadioGroup disabled onChange<span class=\"token operator\">=</span>{onChange} defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>Hangzhou<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"b\"</span><span class=\"token operator\">></span>Shanghai<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"c\"</span><span class=\"token operator\">></span>Beijing<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"d\"</span><span class=\"token operator\">></span>Chengdu<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioGroup<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var RadioButton = _antd.Radio.Button;
	  var RadioGroup = _antd.Radio.Group;

	  function onChange(e) {
	    console.log("radio checked:" + e.target.value);
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        RadioGroup,
	        {
	          onChange: onChange,
	          defaultValue: "a"
	        },
	        React.createElement(
	          RadioButton,
	          {
	            value: "a"
	          },
	          "Hangzhou"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "b"
	          },
	          "Shanghai"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "c"
	          },
	          "Beijing"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "d"
	          },
	          "Chengdu"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginTop: 16
	        }
	      },
	      React.createElement(
	        RadioGroup,
	        {
	          onChange: onChange,
	          defaultValue: "a"
	        },
	        React.createElement(
	          RadioButton,
	          {
	            value: "a"
	          },
	          "Hangzhou"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "b",
	            disabled: true
	          },
	          "Shanghai"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "c"
	          },
	          "Beijing"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "d"
	          },
	          "Chengdu"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginTop: 16
	        }
	      },
	      React.createElement(
	        RadioGroup,
	        {
	          disabled: true,
	          onChange: onChange,
	          defaultValue: "a"
	        },
	        React.createElement(
	          RadioButton,
	          {
	            value: "a"
	          },
	          "Hangzhou"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "b"
	          },
	          "Shanghai"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "c"
	          },
	          "Beijing"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "d"
	          },
	          "Chengdu"
	        )
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "垂直的 RadioGroup，配合更多输入框选项。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Vertical RadioGroup, with more radios."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "RadioGroup 垂直",
	      "en-US": "Vertical RadioGroup"
	    },
	    "filename": "components/radio/demo/radiogroup-more.md",
	    "id": "components-radio-demo-radiogroup-more"
	  },
	  "description": [
	    "section"
	  ],
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
	      "highlighted": "import { Radio<span class=\"token punctuation\">,</span> Input } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RadioGroup <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      value<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'radio checked'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      value<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> radioStyle <span class=\"token operator\">=</span> {\n      display<span class=\"token punctuation\">:</span> <span class=\"token string\">'block'</span><span class=\"token punctuation\">,</span>\n      height<span class=\"token punctuation\">:</span> <span class=\"token string\">'30px'</span><span class=\"token punctuation\">,</span>\n      lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'30px'</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>RadioGroup onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange} value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio style<span class=\"token operator\">=</span>{radioStyle} value<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>}<span class=\"token operator\">></span>Option A<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio style<span class=\"token operator\">=</span>{radioStyle} value<span class=\"token operator\">=</span>{<span class=\"token number\">2</span>}<span class=\"token operator\">></span>Option B<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio style<span class=\"token operator\">=</span>{radioStyle} value<span class=\"token operator\">=</span>{<span class=\"token number\">3</span>}<span class=\"token operator\">></span>Option C<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio style<span class=\"token operator\">=</span>{radioStyle} value<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>\n          More<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n          {this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token number\">4</span> <span class=\"token operator\">?</span> <span class=\"token operator\">&lt;</span>Input style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span>}\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioGroup<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var RadioGroup = _antd.Radio.Group;
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        value: 1
	      };
	    },
	    onChange: function onChange(e) {
	      console.log('radio checked', e.target.value);
	      this.setState({
	        value: e.target.value
	      });
	    },
	    render: function render() {
	      var radioStyle = {
	        display: 'block',
	        height: '30px',
	        lineHeight: '30px'
	      };
	      return React.createElement(
	        RadioGroup,
	        {
	          onChange: this.onChange,
	          value: this.state.value
	        },
	        React.createElement(
	          _antd.Radio,
	          {
	            style: radioStyle,
	            value: 1
	          },
	          "Option A"
	        ),
	        React.createElement(
	          _antd.Radio,
	          {
	            style: radioStyle,
	            value: 2
	          },
	          "Option B"
	        ),
	        React.createElement(
	          _antd.Radio,
	          {
	            style: radioStyle,
	            value: 3
	          },
	          "Option C"
	        ),
	        React.createElement(
	          _antd.Radio,
	          {
	            style: radioStyle,
	            value: 4
	          },
	          "More...",
	          this.state.value === 4 ? React.createElement(_antd.Input, {
	            style: {
	              width: 100,
	              marginLeft: 10
	            }
	          }) : null
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 814:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "一组互斥的 Radio 配合使用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A set of mutually exclusive Radio with the use of"
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "RadioGroup 组合",
	      "en-US": "RadioGroup group"
	    },
	    "filename": "components/radio/demo/radiogroup.md",
	    "id": "components-radio-demo-radiogroup"
	  },
	  "description": [
	    "section"
	  ],
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
	      "highlighted": "import { Radio } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RadioGroup <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      value<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'radio checked'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      value<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>RadioGroup onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange} value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio value<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>}<span class=\"token operator\">></span>A<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio value<span class=\"token operator\">=</span>{<span class=\"token number\">2</span>}<span class=\"token operator\">></span>B<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio value<span class=\"token operator\">=</span>{<span class=\"token number\">3</span>}<span class=\"token operator\">></span>C<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Radio value<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>D<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Radio<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioGroup<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var RadioGroup = _antd.Radio.Group;
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        value: 1
	      };
	    },
	    onChange: function onChange(e) {
	      console.log('radio checked', e.target.value);
	      this.setState({
	        value: e.target.value
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        RadioGroup,
	        {
	          onChange: this.onChange,
	          value: this.state.value
	        },
	        React.createElement(
	          _antd.Radio,
	          {
	            value: 1
	          },
	          "A"
	        ),
	        React.createElement(
	          _antd.Radio,
	          {
	            value: 2
	          },
	          "B"
	        ),
	        React.createElement(
	          _antd.Radio,
	          {
	            value: 3
	          },
	          "C"
	        ),
	        React.createElement(
	          _antd.Radio,
	          {
	            value: 4
	          },
	          "D"
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "大中小三种组合，可以和表单输入框进行对应配合。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "There are three sizes available: large, medium, and small. It can coordinate with input box."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "大小",
	      "en-US": "Size"
	    },
	    "filename": "components/radio/demo/size.md",
	    "id": "components-radio-demo-size"
	  },
	  "description": [
	    "section"
	  ],
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
	      "highlighted": "import { Radio } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RadioButton <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Button<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> RadioGroup <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RadioGroup defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>Hangzhou<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"b\"</span><span class=\"token operator\">></span>Shanghai<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"c\"</span><span class=\"token operator\">></span>Beijing<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"d\"</span><span class=\"token operator\">></span>Chengdu<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioGroup<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RadioGroup defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>Hangzhou<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"b\"</span><span class=\"token operator\">></span>Shanghai<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"c\"</span><span class=\"token operator\">></span>Beijing<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"d\"</span><span class=\"token operator\">></span>Chengdu<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioGroup<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>RadioGroup defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"a\"</span><span class=\"token operator\">></span>Hangzhou<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"b\"</span><span class=\"token operator\">></span>Shanghai<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"c\"</span><span class=\"token operator\">></span>Beijing<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>RadioButton value<span class=\"token operator\">=</span><span class=\"token string\">\"d\"</span><span class=\"token operator\">></span>Chengdu<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioButton<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>RadioGroup<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var RadioButton = _antd.Radio.Button;
	  var RadioGroup = _antd.Radio.Group;
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        RadioGroup,
	        {
	          defaultValue: "a",
	          size: "large"
	        },
	        React.createElement(
	          RadioButton,
	          {
	            value: "a"
	          },
	          "Hangzhou"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "b"
	          },
	          "Shanghai"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "c"
	          },
	          "Beijing"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "d"
	          },
	          "Chengdu"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginTop: 16
	        }
	      },
	      React.createElement(
	        RadioGroup,
	        {
	          defaultValue: "a"
	        },
	        React.createElement(
	          RadioButton,
	          {
	            value: "a"
	          },
	          "Hangzhou"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "b"
	          },
	          "Shanghai"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "c"
	          },
	          "Beijing"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "d"
	          },
	          "Chengdu"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginTop: 16
	        }
	      },
	      React.createElement(
	        RadioGroup,
	        {
	          defaultValue: "a",
	          size: "small"
	        },
	        React.createElement(
	          RadioButton,
	          {
	            value: "a"
	          },
	          "Hangzhou"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "b"
	          },
	          "Shanghai"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "c"
	          },
	          "Beijing"
	        ),
	        React.createElement(
	          RadioButton,
	          {
	            value: "d"
	          },
	          "Chengdu"
	        )
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 1061:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(810),
	    'disable': __webpack_require__(811),
	    'radiobutton': __webpack_require__(812),
	    'radiogroup-more': __webpack_require__(813),
	    'radiogroup': __webpack_require__(814),
	    'size': __webpack_require__(815),
	}

/***/ }

});