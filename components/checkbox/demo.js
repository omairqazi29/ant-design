webpackJsonp([32,211],{

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "简单的 checkbox。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Basic usage of checkbox."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本用法",
	      "en-US": "Basic"
	    },
	    "filename": "components/checkbox/demo/basic.md",
	    "id": "components-checkbox-demo-basic"
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
	      "highlighted": "import { Checkbox } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>`checked <span class=\"token operator\">=</span> ${e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Checkbox onChange<span class=\"token operator\">=</span>{onChange}<span class=\"token operator\">></span>Checkbox<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Checkbox<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onChange(e) {
	    console.log("checked = " + e.target.checked);
	  }

	  return React.createElement(
	    _antd.Checkbox,
	    {
	      onChange: onChange
	    },
	    "Checkbox"
	  );
	}
	};

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "在实现全选效果时，你可能会用到 ",
	        [
	          "code",
	          "indeterminate"
	        ],
	        " 属性。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The ",
	        [
	          "code",
	          "indeterminate"
	        ],
	        " property can help you to achieve a 'check all' effect."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "全选",
	      "en-US": "Check all"
	    },
	    "filename": "components/checkbox/demo/check-all.md",
	    "id": "components-checkbox-demo-check-all"
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
	      "highlighted": "import { Checkbox } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> CheckboxGroup <span class=\"token operator\">=</span> Checkbox<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> plainOptions <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Apple'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Pear'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> defaultCheckedList <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Apple'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      checkedList<span class=\"token punctuation\">:</span> defaultCheckedList<span class=\"token punctuation\">,</span>\n      indeterminate<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      checkAll<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ borderBottom<span class=\"token punctuation\">:</span> <span class=\"token string\">'1px solid #E9E9E9'</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Checkbox\n            indeterminate<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>indeterminate}\n            onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onCheckAllChange}\n            checked<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checkAll}\n          <span class=\"token operator\">></span>\n            Check all\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Checkbox<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>CheckboxGroup options<span class=\"token operator\">=</span>{plainOptions} value<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checkedList} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>checkedList<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      checkedList<span class=\"token punctuation\">,</span>\n      indeterminate<span class=\"token punctuation\">:</span> !!checkedList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token punctuation\">(</span>checkedList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">&lt;</span> plainOptions<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      checkAll<span class=\"token punctuation\">:</span> checkedList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">==</span><span class=\"token operator\">=</span> plainOptions<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onCheckAllChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      checkedList<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked <span class=\"token operator\">?</span> plainOptions <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      indeterminate<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      checkAll<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var CheckboxGroup = _antd.Checkbox.Group;
	  var plainOptions = ['Apple', 'Pear', 'Orange'];
	  var defaultCheckedList = ['Apple', 'Orange'];
	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        checkedList: defaultCheckedList,
	        indeterminate: true,
	        checkAll: false
	      };
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "div",
	          {
	            style: {
	              borderBottom: '1px solid #E9E9E9'
	            }
	          },
	          React.createElement(
	            _antd.Checkbox,
	            {
	              indeterminate: this.state.indeterminate,
	              onChange: this.onCheckAllChange,
	              checked: this.state.checkAll
	            },
	            "Check all"
	          )
	        ),
	        React.createElement("br", null),
	        React.createElement(CheckboxGroup, {
	          options: plainOptions,
	          value: this.state.checkedList,
	          onChange: this.onChange
	        })
	      );
	    },
	    onChange: function onChange(checkedList) {
	      this.setState({
	        checkedList: checkedList,
	        indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
	        checkAll: checkedList.length === plainOptions.length
	      });
	    },
	    onCheckAllChange: function onCheckAllChange(e) {
	      this.setState({
	        checkedList: e.target.checked ? plainOptions : [],
	        indeterminate: false,
	        checkAll: e.target.checked
	      });
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "联动 checkbox。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Communicated with other components."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "受控的 Checkbox",
	      "en-US": "Controlled Checkbox"
	    },
	    "filename": "components/checkbox/demo/controller.md",
	    "id": "components-checkbox-demo-controller"
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
	      "highlighted": "import { Checkbox<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      checked<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> label <span class=\"token operator\">=</span> `${this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked <span class=\"token operator\">?</span> <span class=\"token string\">'Checked'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'Unchecked'</span>}<span class=\"token operator\">-</span>${this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled <span class=\"token operator\">?</span> <span class=\"token string\">'Disabled'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'Enabled'</span>}`<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>p style<span class=\"token operator\">=</span>{{ marginBottom<span class=\"token punctuation\">:</span> <span class=\"token string\">'20px'</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Checkbox checked<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked}\n            disabled<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled}\n            onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange}\n          <span class=\"token operator\">></span>\n            {label}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Checkbox<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span>\n            onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>toggleChecked}\n          <span class=\"token operator\">></span>\n            {!this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked <span class=\"token operator\">?</span> <span class=\"token string\">'Check'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'Uncheck'</span>}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Button style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token string\">'10px'</span> }}\n            type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span>\n            onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>toggleDisable}\n          <span class=\"token operator\">></span>\n            {!this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled <span class=\"token operator\">?</span> <span class=\"token string\">'Disable'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'Enable'</span>}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">toggleChecked</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ checked<span class=\"token punctuation\">:</span> !this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">toggleDisable</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ disabled<span class=\"token punctuation\">:</span> !this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>disabled }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'checked = '</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      checked<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	        checked: true,
	        disabled: false
	      };
	    },
	    render: function render() {
	      var label = (this.state.checked ? 'Checked' : 'Unchecked') + "-" + (this.state.disabled ? 'Disabled' : 'Enabled');
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "p",
	          {
	            style: {
	              marginBottom: '20px'
	            }
	          },
	          React.createElement(
	            _antd.Checkbox,
	            {
	              checked: this.state.checked,
	              disabled: this.state.disabled,
	              onChange: this.onChange
	            },
	            label
	          )
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement(
	            _antd.Button,
	            {
	              type: "primary",
	              size: "small",
	              onClick: this.toggleChecked
	            },
	            !this.state.checked ? 'Check' : 'Uncheck'
	          ),
	          React.createElement(
	            _antd.Button,
	            {
	              style: {
	                marginLeft: '10px'
	              },
	              type: "primary",
	              size: "small",
	              onClick: this.toggleDisable
	            },
	            !this.state.disabled ? 'Disable' : 'Enable'
	          )
	        )
	      );
	    },
	    toggleChecked: function toggleChecked() {
	      this.setState({
	        checked: !this.state.checked
	      });
	    },
	    toggleDisable: function toggleDisable() {
	      this.setState({
	        disabled: !this.state.disabled
	      });
	    },
	    onChange: function onChange(e) {
	      console.log('checked = ', e.target.checked);
	      this.setState({
	        checked: e.target.checked
	      });
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "checkbox 不可用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Disabled checkbox."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "不可用",
	      "en-US": "Disabled"
	    },
	    "filename": "components/checkbox/demo/disabled.md",
	    "id": "components-checkbox-demo-disabled"
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
	      "highlighted": "import { Checkbox } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Checkbox defaultChecked<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>} disabled <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Checkbox defaultChecked disabled <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Checkbox, {
	      defaultChecked: false,
	      disabled: true
	    }),
	    React.createElement("br", null),
	    React.createElement(_antd.Checkbox, {
	      defaultChecked: true,
	      disabled: true
	    })
	  );
	}
	};

/***/ },

/***/ 648:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "方便的从数组生成 Checkbox 组。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Generate a group of checkboxes from an array."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "Checkbox 组",
	      "en-US": "Checkbox Group"
	    },
	    "filename": "components/checkbox/demo/group.md",
	    "id": "components-checkbox-demo-group"
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
	      "highlighted": "import { Checkbox } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> CheckboxGroup <span class=\"token operator\">=</span> Checkbox<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>checkedValues<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'checked = '</span><span class=\"token punctuation\">,</span> checkedValues<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> plainOptions <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Apple'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Pear'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  { label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Apple'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Apple'</span> }<span class=\"token punctuation\">,</span>\n  { label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Pear'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Pear'</span> }<span class=\"token punctuation\">,</span>\n  { label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Orange'</span> }<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> optionsWithDisabled <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  { label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Apple'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Apple'</span> }<span class=\"token punctuation\">,</span>\n  { label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Pear'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Pear'</span> }<span class=\"token punctuation\">,</span>\n  { label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'Orange'</span><span class=\"token punctuation\">,</span> disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>CheckboxGroup options<span class=\"token operator\">=</span>{plainOptions} defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'Apple'</span><span class=\"token punctuation\">]</span>} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>CheckboxGroup options<span class=\"token operator\">=</span>{options} defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'Pear'</span><span class=\"token punctuation\">]</span>} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>CheckboxGroup options<span class=\"token operator\">=</span>{optionsWithDisabled} disabled defaultValue<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'Apple'</span><span class=\"token punctuation\">]</span>} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var CheckboxGroup = _antd.Checkbox.Group;

	  function onChange(checkedValues) {
	    console.log('checked = ', checkedValues);
	  }

	  var plainOptions = ['Apple', 'Pear', 'Orange'];
	  var options = [{
	    label: 'Apple',
	    value: 'Apple'
	  }, {
	    label: 'Pear',
	    value: 'Pear'
	  }, {
	    label: 'Orange',
	    value: 'Orange'
	  }];
	  var optionsWithDisabled = [{
	    label: 'Apple',
	    value: 'Apple'
	  }, {
	    label: 'Pear',
	    value: 'Pear'
	  }, {
	    label: 'Orange',
	    value: 'Orange',
	    disabled: false
	  }];
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(CheckboxGroup, {
	      options: plainOptions,
	      defaultValue: ['Apple'],
	      onChange: onChange
	    }),
	    React.createElement("br", null),
	    React.createElement(CheckboxGroup, {
	      options: options,
	      defaultValue: ['Pear'],
	      onChange: onChange
	    }),
	    React.createElement("br", null),
	    React.createElement(CheckboxGroup, {
	      options: optionsWithDisabled,
	      disabled: true,
	      defaultValue: ['Apple'],
	      onChange: onChange
	    })
	  );
	}
	};

/***/ },

/***/ 1039:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(644),
	    'check-all': __webpack_require__(645),
	    'controller': __webpack_require__(646),
	    'disabled': __webpack_require__(647),
	    'group': __webpack_require__(648),
	}

/***/ }

});