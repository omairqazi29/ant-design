webpackJsonp([42,211],{

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "自定义输入组件。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Customize Input Component"
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "自定义输入组件",
	      "en-US": "Customize Input Component"
	    },
	    "filename": "components/auto-complete/demo/antd.md",
	    "id": "components-auto-complete-demo-antd"
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
	      "highlighted": "import { AutoComplete } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onSelect'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> Complete <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      dataSource<span class=\"token punctuation\">:</span> !value <span class=\"token operator\">?</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        value<span class=\"token punctuation\">,</span>\n        value <span class=\"token operator\">+</span> value<span class=\"token punctuation\">,</span>\n        value <span class=\"token operator\">+</span> value <span class=\"token operator\">+</span> value<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleKeyPress</span><span class=\"token punctuation\">(</span>ev<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'handleKeyPress'</span><span class=\"token punctuation\">,</span> ev<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { dataSource } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>AutoComplete\n        dataSource<span class=\"token operator\">=</span>{dataSource}\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }}\n        onSelect<span class=\"token operator\">=</span>{onSelect}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n        placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"input here\"</span>\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>textarea onKeyPress<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleKeyPress} style<span class=\"token operator\">=</span>{{ height<span class=\"token punctuation\">:</span> <span class=\"token number\">50</span> }}<span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>AutoComplete<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Complete <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onSelect(value) {
	    console.log('onSelect', value);
	  }

	  var Complete = React.createClass({
	    displayName: "Complete",
	    getInitialState: function getInitialState() {
	      return {
	        dataSource: []
	      };
	    },
	    handleChange: function handleChange(value) {
	      this.setState({
	        dataSource: !value ? [] : [value, value + value, value + value + value]
	      });
	    },
	    handleKeyPress: function handleKeyPress(ev) {
	      console.log('handleKeyPress', ev);
	    },
	    render: function render() {
	      var dataSource = this.state.dataSource;
	      return React.createElement(
	        _antd.AutoComplete,
	        {
	          dataSource: dataSource,
	          style: {
	            width: 200
	          },
	          onSelect: onSelect,
	          onChange: this.handleChange,
	          placeholder: "input here"
	        },
	        React.createElement("textarea", {
	          onKeyPress: this.handleKeyPress,
	          style: {
	            height: 50
	          }
	        })
	      );
	    }
	  });
	  return React.createElement(Complete, null);
	}
	};

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "基本使用。通过 dataSource 设置自动完成的数据源"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Basic Usage, set datasource of autocomplete with ",
	        [
	          "code",
	          "dataSource"
	        ],
	        " property."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本使用",
	      "en-US": "Basic Usage"
	    },
	    "filename": "components/auto-complete/demo/basic.md",
	    "id": "components-auto-complete-demo-basic"
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
	      "highlighted": "import { AutoComplete } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onSelect'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> Complete <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      dataSource<span class=\"token punctuation\">:</span> !value <span class=\"token operator\">?</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        value<span class=\"token punctuation\">,</span>\n        value <span class=\"token operator\">+</span> value<span class=\"token punctuation\">,</span>\n        value <span class=\"token operator\">+</span> value <span class=\"token operator\">+</span> value<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { dataSource } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>AutoComplete\n        dataSource<span class=\"token operator\">=</span>{dataSource}\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }}\n        onSelect<span class=\"token operator\">=</span>{onSelect}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n        placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"input here\"</span>\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Complete <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onSelect(value) {
	    console.log('onSelect', value);
	  }

	  var Complete = React.createClass({
	    displayName: "Complete",
	    getInitialState: function getInitialState() {
	      return {
	        dataSource: []
	      };
	    },
	    handleChange: function handleChange(value) {
	      this.setState({
	        dataSource: !value ? [] : [value, value + value, value + value + value]
	      });
	    },
	    render: function render() {
	      var dataSource = this.state.dataSource;
	      return React.createElement(_antd.AutoComplete, {
	        dataSource: dataSource,
	        style: {
	          width: 200
	        },
	        onSelect: onSelect,
	        onChange: this.handleChange,
	        placeholder: "input here"
	      });
	    }
	  });
	  return React.createElement(Complete, null);
	}
	};

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "也可以直接传 ",
	        [
	          "code",
	          "AutoComplete.Option"
	        ],
	        " 作为 ",
	        [
	          "code",
	          "AutoComplete"
	        ],
	        " 的 ",
	        [
	          "code",
	          "children"
	        ],
	        "，而非使用 ",
	        [
	          "code",
	          "dataSource"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "You could pass ",
	        [
	          "code",
	          "AutoComplete.Option"
	        ],
	        " as children of ",
	        [
	          "code",
	          "AutoComplete"
	        ],
	        ", instead of using ",
	        [
	          "code",
	          "dataSource"
	        ],
	        "。"
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "自定义选项",
	      "en-US": "Customized"
	    },
	    "filename": "components/auto-complete/demo/options.md",
	    "id": "components-auto-complete-demo-options"
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
	      "highlighted": "import { AutoComplete } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> AutoComplete<span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Complete <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      result<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    let result<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!value || value<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">>=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n      result <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    } <span class=\"token keyword\">else</span> {\n      result <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'gmail.com'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'163.com'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'qq.com'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>domain <span class=\"token operator\">=</span><span class=\"token operator\">></span> `${value}@${domain}`<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ result }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { result } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> result<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>email<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n      return <span class=\"token operator\">&lt;</span>Option key<span class=\"token operator\">=</span>{email}<span class=\"token operator\">></span>{email}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>AutoComplete\n        style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n        placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"input here\"</span>\n      <span class=\"token operator\">></span>\n        {children}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>AutoComplete<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Complete <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.AutoComplete.Option;
	  var Complete = React.createClass({
	    displayName: "Complete",
	    getInitialState: function getInitialState() {
	      return {
	        result: []
	      };
	    },
	    handleChange: function handleChange(value) {
	      var result = void 0;

	      if (!value || value.indexOf('@') >= 0) {
	        result = [];
	      } else {
	        result = ['gmail.com', '163.com', 'qq.com'].map(function (domain) {
	          return value + "@" + domain;
	        });
	      }

	      this.setState({
	        result: result
	      });
	    },
	    render: function render() {
	      var result = this.state.result;
	      var children = result.map(function (email) {
	        return React.createElement(
	          Option,
	          {
	            key: email
	          },
	          email
	        );
	      });
	      return React.createElement(
	        _antd.AutoComplete,
	        {
	          style: {
	            width: 200
	          },
	          onChange: this.handleChange,
	          placeholder: "input here"
	        },
	        children
	      );
	    }
	  });
	  return React.createElement(Complete, null);
	}
	};

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://ant.design/docs/spec/reaction#Lookup-Patterns"
	          },
	          "查询模式: 不确定类目"
	        ],
	        " 示例。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Demonstration of ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://ant.design/docs/spec/reaction#Lookup-Patterns"
	          },
	          "Lookup Patterns: Uncertain Category"
	        ],
	        ".\nBasic Usage, set datasource of autocomplete with ",
	        [
	          "code",
	          "dataSource"
	        ],
	        " property."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "查询模式 - 不确定类目",
	      "en-US": "Lookup-Patterns - Uncertain Category"
	    },
	    "filename": "components/auto-complete/demo/uncertain-category.md",
	    "id": "components-auto-complete-demo-uncertain-category"
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
	      "highlighted": "import { Icon<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> AutoComplete } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> AutoComplete<span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> InputGroup <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onSelect'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">getRandomInt</span><span class=\"token punctuation\">(</span>max<span class=\"token punctuation\">,</span> min <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n    return Math<span class=\"token punctuation\">.</span><span class=\"token function\">floor</span><span class=\"token punctuation\">(</span>Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token punctuation\">(</span>max <span class=\"token operator\">-</span> min <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> min<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">searchResult</span><span class=\"token punctuation\">(</span>query<span class=\"token punctuation\">)</span> {\n  return <span class=\"token punctuation\">(</span>new <span class=\"token function\">Array</span><span class=\"token punctuation\">(</span><span class=\"token function\">getRandomInt</span><span class=\"token punctuation\">(</span><span class=\"token number\">5</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token string\">'.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">split</span><span class=\"token punctuation\">(</span><span class=\"token string\">'.'</span><span class=\"token punctuation\">)</span>\n    <span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">,</span> idx<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>{\n      query<span class=\"token punctuation\">,</span>\n      category<span class=\"token punctuation\">:</span> `${query}${idx}`<span class=\"token punctuation\">,</span>\n      count<span class=\"token punctuation\">:</span> <span class=\"token function\">getRandomInt</span><span class=\"token punctuation\">(</span><span class=\"token number\">200</span><span class=\"token punctuation\">,</span> <span class=\"token number\">100</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">renderOption</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> {\n  return <span class=\"token operator\">&lt;</span>Option key<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>category} text<span class=\"token operator\">=</span>{item<span class=\"token punctuation\">.</span>category}<span class=\"token operator\">></span>\n    {item<span class=\"token punctuation\">.</span>query} 在\n    <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span>{`https<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span>s<span class=\"token punctuation\">.</span>taobao<span class=\"token punctuation\">.</span>com<span class=\"token operator\">/</span>search<span class=\"token operator\">?</span>q<span class=\"token operator\">=</span>${item<span class=\"token punctuation\">.</span>query}`} target<span class=\"token operator\">=</span><span class=\"token string\">\"_blank\"</span><span class=\"token operator\">></span>{item<span class=\"token punctuation\">.</span>category}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span> 区块中\n    <span class=\"token operator\">&lt;</span>span style<span class=\"token operator\">=</span>{{float<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span>}}<span class=\"token operator\">></span>约 {item<span class=\"token punctuation\">.</span>count} 个结果<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> Complete <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n        dataSource<span class=\"token punctuation\">:</span> <span class=\"token function\">searchResult</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { dataSource } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"global-search-wrapper\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> }}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>AutoComplete\n          className<span class=\"token operator\">=</span><span class=\"token string\">\"global-search\"</span>\n          size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span>\n          style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span>}}\n          dataSource<span class=\"token operator\">=</span>{dataSource<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>renderOption<span class=\"token punctuation\">)</span>}\n          onSelect<span class=\"token operator\">=</span>{onSelect}\n          onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange}\n          placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"input here\"</span>\n          optionLabelProp<span class=\"token operator\">=</span><span class=\"token string\">\"text\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Input suffix<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Button className<span class=\"token operator\">=</span><span class=\"token string\">\"search-btn\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>AutoComplete<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Complete <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.AutoComplete.Option;
	  var InputGroup = _antd.Input.Group;

	  function onSelect(value) {
	    console.log('onSelect', value);
	  }

	  function getRandomInt(max) {
	    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  }

	  function searchResult(query) {
	    return new Array(getRandomInt(5)).join('.').split('.').map(function (item, idx) {
	      return {
	        query: query,
	        category: "" + query + idx,
	        count: getRandomInt(200, 100)
	      };
	    });
	  }

	  function renderOption(item) {
	    return React.createElement(
	      Option,
	      {
	        key: item.category,
	        text: item.category
	      },
	      item.query,
	      " 在",
	      React.createElement(
	        "a",
	        {
	          href: "https://s.taobao.com/search?q=" + item.query,
	          target: "_blank"
	        },
	        item.category
	      ),
	      " 区块中",
	      React.createElement(
	        "span",
	        {
	          style: {
	            float: 'right'
	          }
	        },
	        "约 ",
	        item.count,
	        " 个结果"
	      )
	    );
	  }

	  var Complete = React.createClass({
	    displayName: "Complete",
	    getInitialState: function getInitialState() {
	      return {
	        dataSource: []
	      };
	    },
	    handleChange: function handleChange(value) {
	      if (value) {
	        this.setState({
	          dataSource: searchResult(value)
	        });
	      }
	    },
	    render: function render() {
	      var dataSource = this.state.dataSource;
	      return React.createElement(
	        "div",
	        {
	          className: "global-search-wrapper",
	          style: {
	            width: 300
	          }
	        },
	        React.createElement(
	          _antd.AutoComplete,
	          {
	            className: "global-search",
	            size: "large",
	            style: {
	              width: '100%'
	            },
	            dataSource: dataSource.map(renderOption),
	            onSelect: onSelect,
	            onChange: this.handleChange,
	            placeholder: "input here",
	            optionLabelProp: "text"
	          },
	          React.createElement(_antd.Input, {
	            suffix: React.createElement(
	              _antd.Button,
	              {
	                className: "search-btn",
	                size: "large",
	                type: "primary"
	              },
	              React.createElement(_antd.Icon, {
	                type: "search"
	              })
	            )
	          })
	        )
	      );
	    }
	  });
	  return React.createElement(Complete, null);
	},
	  "style": ".global-search-wrapper {\n  padding-right: 50px;\n}\n\n.global-search {\n  width: 100%;\n}\n\n.global-search.ant-select-auto-complete .ant-input {\n  height: 40px;\n  padding: 11px 12px;\n}\n\n.global-search.ant-select-auto-complete .ant-select-selection__placeholder {\n  top: 20px;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\n.global-search .search-btn {\n  font-size: 18px;\n}\n\n.global-search.ant-select-auto-complete .ant-select-selection--single {\n  margin-right: -50px;\n}\n\n.global-search.ant-select-auto-complete .ant-input-preSuffix-wrapper .ant-input:not(:last-child) {\n  padding-right: 62px;\n}\n\n.global-search.ant-select-auto-complete .ant-input-preSuffix-wrapper .ant-input-suffix {\n  right: 0;\n}\n\n.global-search.ant-select-auto-complete .ant-input-preSuffix-wrapper .ant-input-suffix button {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.global-search-wrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.global-search</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.global-search.ant-select-auto-complete</span> <span class=\"token class\">.ant-input</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">11</span>px <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.global-search.ant-select-auto-complete</span> <span class=\"token class\">.ant-select-selection__placeholder</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.global-search</span> <span class=\"token class\">.search-btn</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">18</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.global-search.ant-select-auto-complete</span> <span class=\"token class\">.ant-select-selection--single</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.global-search.ant-select-auto-complete</span> <span class=\"token class\">.ant-input-preSuffix-wrapper</span> <span class=\"token class\">.ant-input</span><span class=\"token pseudo-class\">:not(:last-child)</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">62</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.global-search.ant-select-auto-complete</span> <span class=\"token class\">.ant-input-preSuffix-wrapper</span> <span class=\"token class\">.ant-input-suffix</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.global-search.ant-select-auto-complete</span> <span class=\"token class\">.ant-input-preSuffix-wrapper</span> <span class=\"token class\">.ant-input-suffix</span> button </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border-top-left-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-bottom-left-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1210:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'antd': __webpack_require__(736),
	    'basic': __webpack_require__(737),
	    'options': __webpack_require__(738),
	    'uncertain-category': __webpack_require__(739),
	}

/***/ }

});