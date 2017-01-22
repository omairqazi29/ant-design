webpackJsonp([8,210],{

/***/ 714:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用于配置一些固定组合。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Using pre & post tabs example."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "前置/后置标签",
	      "en-US": "Pre / Post tab"
	    },
	    "filename": "components/input/demo/addon.md",
	    "id": "components-input-demo-addon"
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
	      "highlighted": "import { Input<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> selectBefore <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"Http://\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">80</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Http://\"</span><span class=\"token operator\">></span>Http<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Https://\"</span><span class=\"token operator\">></span>Https<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> selectAfter <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\".com\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\".com\"</span><span class=\"token operator\">></span><span class=\"token punctuation\">.</span>com<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\".jp\"</span><span class=\"token operator\">></span><span class=\"token punctuation\">.</span>jp<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\".cn\"</span><span class=\"token operator\">></span><span class=\"token punctuation\">.</span>cn<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\".org\"</span><span class=\"token operator\">></span><span class=\"token punctuation\">.</span>org<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input addonBefore<span class=\"token operator\">=</span><span class=\"token string\">\"Http://\"</span> addonAfter<span class=\"token operator\">=</span><span class=\"token string\">\".com\"</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"mysite\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input addonBefore<span class=\"token operator\">=</span>{selectBefore} addonAfter<span class=\"token operator\">=</span>{selectAfter} defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"mysite\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input addonAfter<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"setting\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>} defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"mysite\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Option = _antd.Select.Option;
	  var selectBefore = React.createElement(
	    _antd.Select,
	    {
	      defaultValue: "Http://",
	      style: {
	        width: 80
	      }
	    },
	    React.createElement(
	      Option,
	      {
	        value: "Http://"
	      },
	      "Http://"
	    ),
	    React.createElement(
	      Option,
	      {
	        value: "Https://"
	      },
	      "Https://"
	    )
	  );
	  var selectAfter = React.createElement(
	    _antd.Select,
	    {
	      defaultValue: ".com",
	      style: {
	        width: 70
	      }
	    },
	    React.createElement(
	      Option,
	      {
	        value: ".com"
	      },
	      ".com"
	    ),
	    React.createElement(
	      Option,
	      {
	        value: ".jp"
	      },
	      ".jp"
	    ),
	    React.createElement(
	      Option,
	      {
	        value: ".cn"
	      },
	      ".cn"
	    ),
	    React.createElement(
	      Option,
	      {
	        value: ".org"
	      },
	      ".org"
	    )
	  );
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginBottom: 16
	        }
	      },
	      React.createElement(_antd.Input, {
	        addonBefore: "Http://",
	        addonAfter: ".com",
	        defaultValue: "mysite"
	      })
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginBottom: 16
	        }
	      },
	      React.createElement(_antd.Input, {
	        addonBefore: selectBefore,
	        addonAfter: selectAfter,
	        defaultValue: "mysite"
	      })
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginBottom: 16
	        }
	      },
	      React.createElement(_antd.Input, {
	        addonAfter: React.createElement(_antd.Icon, {
	          type: "setting"
	        }),
	        defaultValue: "mysite"
	      })
	    )
	  );
	}
	};

/***/ },

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        [
	          "code",
	          "autosize"
	        ],
	        " 属性适用于 ",
	        [
	          "code",
	          "textarea"
	        ],
	        " 节点，并且只有高度会自动变化。另外 ",
	        [
	          "code",
	          "autosize"
	        ],
	        " 可以设定为一个对象，指定最小行数和最大行数。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        [
	          "code",
	          "autosize"
	        ],
	        " prop for a ",
	        [
	          "code",
	          "textarea"
	        ],
	        " type of ",
	        [
	          "code",
	          "Input"
	        ],
	        " makes the height to automatically adjust based on the content.\nAn options object can be provided to ",
	        [
	          "code",
	          "autosize"
	        ],
	        " to specify the minimum and maximum number of lines the textarea will automatically adjust."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "适应文本高度的文本域",
	      "en-US": "Autosizing the height to fit the content"
	    },
	    "filename": "components/input/demo/autosize-textarea.md",
	    "id": "components-input-demo-autosize-textarea"
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
	      "highlighted": "import { Input } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Input type<span class=\"token operator\">=</span><span class=\"token string\">\"textarea\"</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Autosize height based on content lines\"</span> autosize <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'24px 0'</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Input type<span class=\"token operator\">=</span><span class=\"token string\">\"textarea\"</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Autosize height with minimum and maximum number of lines\"</span> autosize<span class=\"token operator\">=</span>{{ minRows<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> maxRows<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Input, {
	      type: "textarea",
	      placeholder: "Autosize height based on content lines",
	      autosize: true
	    }),
	    React.createElement("div", {
	      style: {
	        margin: '24px 0'
	      }
	    }),
	    React.createElement(_antd.Input, {
	      type: "textarea",
	      placeholder: "Autosize height with minimum and maximum number of lines",
	      autosize: {
	        minRows: 2,
	        maxRows: 6
	      }
	    })
	  );
	}
	};

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "基本使用。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Basic usage example"
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本使用",
	      "en-US": "Basic usage"
	    },
	    "filename": "components/input/demo/basic.md",
	    "id": "components-input-demo-basic"
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
	      "highlighted": "import { Input } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Basic usage\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Input, {
	    placeholder: "Basic usage"
	  });
	}
	};

/***/ },

/***/ 717:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "输入框的组合展现。"
	      ],
	      [
	        "p",
	        "注意：使用 ",
	        [
	          "code",
	          "compact"
	        ],
	        " 模式时，不需要通过 ",
	        [
	          "code",
	          "Col"
	        ],
	        " 来控制宽度。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Input.Group example"
	      ],
	      [
	        "p",
	        "Note: You don't need ",
	        [
	          "code",
	          "Col"
	        ],
	        " to control the width in the ",
	        [
	          "code",
	          "compact"
	        ],
	        " mode."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "输入框组合",
	      "en-US": "Input Group"
	    },
	    "filename": "components/input/demo/group.md",
	    "id": "components-input-demo-group"
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
	      "highlighted": "import { Input<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">,</span> InputNumber<span class=\"token punctuation\">,</span> DatePicker } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> InputGroup <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> <span class=\"token keyword\">Select</span><span class=\"token punctuation\">.</span>Option<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>InputGroup size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span><span class=\"token string\">\"4\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Input defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"0571\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Input defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"26888888\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>InputGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>InputGroup compact<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'20%'</span> }} defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"0571\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'30%'</span> }} defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"26888888\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>InputGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>InputGroup compact<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"Zhejiang\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Zhejiang\"</span><span class=\"token operator\">></span>Zhejiang<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Jiangsu\"</span><span class=\"token operator\">></span>Jiangsu<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'50%'</span> }} defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"Xihu District, Hangzhou\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>InputGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>InputGroup compact<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"Option1\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Option1\"</span><span class=\"token operator\">></span>Option1<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Option2\"</span><span class=\"token operator\">></span>Option2<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'50%'</span> }} defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"input content\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>InputNumber <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>InputGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>InputGroup compact<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Input style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'50%'</span> }} defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"input content\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>DatePicker <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>InputGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>InputGroup compact<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"Option1-1\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Option1-1\"</span><span class=\"token operator\">></span>Option1<span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Option1-2\"</span><span class=\"token operator\">></span>Option1<span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Select</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"Option2-2\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Option2-1\"</span><span class=\"token operator\">></span>Option2<span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Option value<span class=\"token operator\">=</span><span class=\"token string\">\"Option2-2\"</span><span class=\"token operator\">></span>Option2<span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token keyword\">Select</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>InputGroup<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var InputGroup = _antd.Input.Group;
	  var Option = _antd.Select.Option;
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      InputGroup,
	      {
	        size: "large"
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: "4"
	        },
	        React.createElement(_antd.Input, {
	          defaultValue: "0571"
	        })
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: "8"
	        },
	        React.createElement(_antd.Input, {
	          defaultValue: "26888888"
	        })
	      )
	    ),
	    React.createElement("br", null),
	    React.createElement(
	      InputGroup,
	      {
	        compact: true
	      },
	      React.createElement(_antd.Input, {
	        style: {
	          width: '20%'
	        },
	        defaultValue: "0571"
	      }),
	      React.createElement(_antd.Input, {
	        style: {
	          width: '30%'
	        },
	        defaultValue: "26888888"
	      })
	    ),
	    React.createElement("br", null),
	    React.createElement(
	      InputGroup,
	      {
	        compact: true
	      },
	      React.createElement(
	        _antd.Select,
	        {
	          defaultValue: "Zhejiang"
	        },
	        React.createElement(
	          Option,
	          {
	            value: "Zhejiang"
	          },
	          "Zhejiang"
	        ),
	        React.createElement(
	          Option,
	          {
	            value: "Jiangsu"
	          },
	          "Jiangsu"
	        )
	      ),
	      React.createElement(_antd.Input, {
	        style: {
	          width: '50%'
	        },
	        defaultValue: "Xihu District, Hangzhou"
	      })
	    ),
	    React.createElement("br", null),
	    React.createElement(
	      InputGroup,
	      {
	        compact: true
	      },
	      React.createElement(
	        _antd.Select,
	        {
	          defaultValue: "Option1"
	        },
	        React.createElement(
	          Option,
	          {
	            value: "Option1"
	          },
	          "Option1"
	        ),
	        React.createElement(
	          Option,
	          {
	            value: "Option2"
	          },
	          "Option2"
	        )
	      ),
	      React.createElement(_antd.Input, {
	        style: {
	          width: '50%'
	        },
	        defaultValue: "input content"
	      }),
	      React.createElement(_antd.InputNumber, null)
	    ),
	    React.createElement("br", null),
	    React.createElement(
	      InputGroup,
	      {
	        compact: true
	      },
	      React.createElement(_antd.Input, {
	        style: {
	          width: '50%'
	        },
	        defaultValue: "input content"
	      }),
	      React.createElement(_antd.DatePicker, null)
	    ),
	    React.createElement("br", null),
	    React.createElement(
	      InputGroup,
	      {
	        compact: true
	      },
	      React.createElement(
	        _antd.Select,
	        {
	          defaultValue: "Option1-1"
	        },
	        React.createElement(
	          Option,
	          {
	            value: "Option1-1"
	          },
	          "Option1-1"
	        ),
	        React.createElement(
	          Option,
	          {
	            value: "Option1-2"
	          },
	          "Option1-2"
	        )
	      ),
	      React.createElement(
	        _antd.Select,
	        {
	          defaultValue: "Option2-2"
	        },
	        React.createElement(
	          Option,
	          {
	            value: "Option2-1"
	          },
	          "Option2-1"
	        ),
	        React.createElement(
	          Option,
	          {
	            value: "Option2-2"
	          },
	          "Option2-2"
	        )
	      )
	    ),
	    React.createElement("br", null)
	  );
	}
	};

/***/ },

/***/ 718:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "在输入框上添加前缀或后缀图标。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Add prefix or suffix icons inside input."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "前缀和后缀",
	      "en-US": "prefix and suffix"
	    },
	    "filename": "components/input/demo/presuffix.md",
	    "id": "components-input-demo-presuffix"
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
	      "highlighted": "import { Input<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass App extends React<span class=\"token punctuation\">.</span>Component {\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> {\n    <span class=\"token function\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> {\n      userName<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  emitEmpty <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span>userNameInput<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ userName<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  onChangeUserName <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ userName<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { userName } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> suffix <span class=\"token operator\">=</span> userName <span class=\"token operator\">?</span> <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"close-circle\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>emitEmpty} <span class=\"token operator\">/</span><span class=\"token operator\">></span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Input\n        placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Enter your userName\"</span>\n        prefix<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>}\n        suffix<span class=\"token operator\">=</span>{suffix}\n        value<span class=\"token operator\">=</span>{userName}\n        onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChangeUserName}\n        ref<span class=\"token operator\">=</span>{node <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span>userNameInput <span class=\"token operator\">=</span> node}\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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

	  var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	      _classCallCheck(this, App);

	      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	      _this.emitEmpty = function () {
	        _this.userNameInput.focus();

	        _this.setState({
	          userName: ''
	        });
	      };

	      _this.onChangeUserName = function (e) {
	        _this.setState({
	          userName: e.target.value
	        });
	      };

	      _this.state = {
	        userName: ''
	      };
	      return _this;
	    }

	    App.prototype.render = function render() {
	      var _this2 = this;

	      var userName = this.state.userName;
	      var suffix = userName ? React.createElement(_antd.Icon, {
	        type: "close-circle",
	        onClick: this.emitEmpty
	      }) : null;
	      return React.createElement(_antd.Input, {
	        placeholder: "Enter your userName",
	        prefix: React.createElement(_antd.Icon, {
	          type: "user"
	        }),
	        suffix: suffix,
	        value: userName,
	        onChange: this.onChangeUserName,
	        ref: function ref(node) {
	          return _this2.userNameInput = node;
	        }
	      });
	    };

	    return App;
	  }(React.Component);

	  return React.createElement(App, null);
	},
	  "style": ".anticon-close-circle {\n  cursor: pointer;\n  color: #ccc;\n  transition: color 0.3s;\n  font-size: 12px;\n}\n.anticon-close-circle:hover {\n  color: #999;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.anticon-close-circle</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">cursor</span><span class=\"token punctuation\">:</span> pointer<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#ccc</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">transition</span><span class=\"token punctuation\">:</span> color <span class=\"token number\">0.3</span>s<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.anticon-close-circle</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 719:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "带有搜索按钮的输入框，",
	        [
	          "code",
	          "2.5.0"
	        ],
	        " 时新增。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Example of creating a search box by grouping a standard input with a search button, added in ",
	        [
	          "code",
	          "2.5.0"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "搜索框",
	      "en-US": "Search box"
	    },
	    "filename": "components/input/demo/search-input.md",
	    "id": "components-input-demo-search-input"
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
	      "highlighted": "import { Input } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Search <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">.</span>Search<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Search\n    placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"input search text\"</span>\n    style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> }}\n    onSearch<span class=\"token operator\">=</span>{value <span class=\"token operator\">=</span><span class=\"token operator\">></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span>}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Search = _antd.Input.Search;
	  return React.createElement(Search, {
	    placeholder: "input search text",
	    style: {
	      width: 200
	    },
	    onSearch: function onSearch(value) {
	      return console.log(value);
	    }
	  });
	}
	};

/***/ },

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "我们为 ",
	        [
	          "code",
	          "<Input />"
	        ],
	        " 输入框定义了三种尺寸（大、默认、小），高度分别为 ",
	        [
	          "code",
	          "32px"
	        ],
	        "、",
	        [
	          "code",
	          "28px"
	        ],
	        " 和 ",
	        [
	          "code",
	          "22px"
	        ],
	        "。"
	      ],
	      [
	        "p",
	        "注意： 在表单里面，我们只使用大尺寸的输入框。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "There are three sizes of an Input box: ",
	        [
	          "code",
	          "large"
	        ],
	        " (32px)、",
	        [
	          "code",
	          "default"
	        ],
	        " (28px) and ",
	        [
	          "code",
	          "small"
	        ],
	        " (22px). "
	      ],
	      [
	        "p",
	        "Note: Inside of forms, only the large size is used."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "三种大小",
	      "en-US": "Three sizes of Input"
	    },
	    "filename": "components/input/demo/size.md",
	    "id": "components-input-demo-size"
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
	      "highlighted": "import { Input } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"example-input\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Input size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"large size\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Input placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"default size\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Input size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"small size\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    {
	      className: "example-input"
	    },
	    React.createElement(_antd.Input, {
	      size: "large",
	      placeholder: "large size"
	    }),
	    React.createElement(_antd.Input, {
	      placeholder: "default size"
	    }),
	    React.createElement(_antd.Input, {
	      size: "small",
	      placeholder: "small size"
	    })
	  );
	},
	  "style": ".example-input .ant-input {\n  width: 200px;\n  margin: 0 8px 8px 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.example-input</span> <span class=\"token class\">.ant-input</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">8</span>px <span class=\"token number\">8</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用于多行输入，指定 ",
	        [
	          "code",
	          "type"
	        ],
	        " 为一个特殊的 ",
	        [
	          "code",
	          "textarea"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "For multi-line user input cases, an input whose ",
	        [
	          "code",
	          "type"
	        ],
	        " prop has the value of ",
	        [
	          "code",
	          "\"textarea\""
	        ],
	        " can be used."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "文本域",
	      "en-US": "Textarea"
	    },
	    "filename": "components/input/demo/textarea.md",
	    "id": "components-input-demo-textarea"
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
	      "highlighted": "import { Input } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Input type<span class=\"token operator\">=</span><span class=\"token string\">\"textarea\"</span> rows<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Input, {
	    type: "textarea",
	    rows: 4
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
	        "结合 ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "/components/tooltip"
	          },
	          "Tooltip"
	        ],
	        " 组件，实现一个数值输入框，方便内容超长时的全量展现。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "You can use the Input in conjunction with ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "/components/tooltip"
	          },
	          "Tooltip"
	        ],
	        " component to create a Numeric Input, which can provide a good experience for extra-long content display."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "输入时格式化展示",
	      "en-US": "Format Tooltip Input"
	    },
	    "filename": "components/input/demo/tooltip.md",
	    "id": "components-input-demo-tooltip"
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
	      "highlighted": "import { Input<span class=\"token punctuation\">,</span> Tooltip } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">formatNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n  value <span class=\"token operator\">+=</span> <span class=\"token string\">''</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">const</span> list <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">split</span><span class=\"token punctuation\">(</span><span class=\"token string\">'.'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">const</span> prefix <span class=\"token operator\">=</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">charAt</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'-'</span> <span class=\"token operator\">?</span> <span class=\"token string\">'-'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  let num <span class=\"token operator\">=</span> prefix <span class=\"token operator\">?</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  let result <span class=\"token operator\">=</span> <span class=\"token string\">''</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token keyword\">while</span> <span class=\"token punctuation\">(</span>num<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span> {\n    result <span class=\"token operator\">=</span> `<span class=\"token punctuation\">,</span>${num<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token operator\">-</span><span class=\"token number\">3</span><span class=\"token punctuation\">)</span>}${result}`<span class=\"token comment\" spellcheck=\"true\">;</span>\n    num <span class=\"token operator\">=</span> num<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> num<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>num<span class=\"token punctuation\">)</span> {\n    result <span class=\"token operator\">=</span> num <span class=\"token operator\">+</span> result<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  return `${prefix}${result}${list<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">?</span> `<span class=\"token punctuation\">.</span>${list<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span>}` <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span>}`<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nclass NumericInput extends React<span class=\"token punctuation\">.</span>Component {\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> { value } <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> reg <span class=\"token operator\">=</span> <span class=\"token operator\">/</span><span class=\"token operator\">^</span><span class=\"token operator\">-</span><span class=\"token operator\">?</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span>|<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token operator\">-</span><span class=\"token number\">9</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token operator\">-</span><span class=\"token number\">9</span><span class=\"token punctuation\">]</span><span class=\"token operator\">*</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>\\<span class=\"token punctuation\">.</span><span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token operator\">-</span><span class=\"token number\">9</span><span class=\"token punctuation\">]</span><span class=\"token operator\">*</span><span class=\"token punctuation\">)</span><span class=\"token operator\">?</span>$<span class=\"token operator\">/</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>!<span class=\"token function\">isNaN</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> reg<span class=\"token punctuation\">.</span><span class=\"token function\">test</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> || value <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">''</span> || value <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }\n\n  <span class=\"token operator\">/</span><span class=\"token operator\">/</span> <span class=\"token string\">'.'</span> at the end <span class=\"token operator\">or</span> only <span class=\"token string\">'-'</span> <span class=\"token keyword\">in</span> the input box<span class=\"token punctuation\">.</span>\n  onBlur <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> { value } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">charAt</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'.'</span> || value <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>{ value<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>onBlur<span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onBlur</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { value } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>props<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> title <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value <span class=\"token operator\">?</span>\n      <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"numeric-input-title\"</span><span class=\"token operator\">></span>\n        {value !<span class=\"token operator\">==</span> <span class=\"token string\">'-'</span> <span class=\"token operator\">?</span> <span class=\"token function\">formatNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'-'</span>}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Tooltip\n          trigger<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'focus'</span><span class=\"token punctuation\">]</span>}\n          title<span class=\"token operator\">=</span>{title}\n          placement<span class=\"token operator\">=</span><span class=\"token string\">\"topLeft\"</span>\n          overlayClassName<span class=\"token operator\">=</span><span class=\"token string\">\"numeric-input\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Input\n            {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>this<span class=\"token punctuation\">.</span>props}\n            onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange}\n            onBlur<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onBlur}\n            placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"input a number\"</span>\n            maxLength<span class=\"token operator\">=</span><span class=\"token string\">\"25\"</span>\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nclass NumericInputDemo extends React<span class=\"token punctuation\">.</span>Component {\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> {\n    <span class=\"token function\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> { value<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span> }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { value } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"numeric-input-demo\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>NumericInput value<span class=\"token operator\">=</span>{value} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>NumericInputDemo <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  function formatNumber(value) {
	    value += '';
	    var list = value.split('.');
	    var prefix = list[0].charAt(0) === '-' ? '-' : '';
	    var num = prefix ? list[0].slice(1) : list[0];
	    var result = '';

	    while (num.length > 3) {
	      result = "," + num.slice(-3) + result;
	      num = num.slice(0, num.length - 3);
	    }

	    if (num) {
	      result = num + result;
	    }

	    return "" + prefix + result + (list[1] ? "." + list[1] : '');
	  }

	  var NumericInput = function (_React$Component) {
	    _inherits(NumericInput, _React$Component);

	    function NumericInput() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, NumericInput);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onChange = function (e) {
	        var value = e.target.value;
	        var reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;

	        if (!isNaN(value) && reg.test(value) || value === '' || value === '-') {
	          _this.props.onChange(value);
	        }
	      }, _this.onBlur = function () {
	        var value = _this.props.value;

	        if (value.charAt(value.length - 1) === '.' || value === '-') {
	          _this.props.onChange({
	            value: value.slice(0, -1)
	          });
	        }

	        if (_this.props.onBlur) {
	          _this.props.onBlur();
	        }
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    } // '.' at the end or only '-' in the input box.


	    NumericInput.prototype.render = function render() {
	      var value = this.props.value;
	      var title = value ? React.createElement(
	        "span",
	        {
	          className: "numeric-input-title"
	        },
	        value !== '-' ? formatNumber(value) : '-'
	      ) : '';
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Tooltip,
	          {
	            trigger: ['focus'],
	            title: title,
	            placement: "topLeft",
	            overlayClassName: "numeric-input"
	          },
	          React.createElement(_antd.Input, _extends({}, this.props, {
	            onChange: this.onChange,
	            onBlur: this.onBlur,
	            placeholder: "input a number",
	            maxLength: "25"
	          }))
	        )
	      );
	    };

	    return NumericInput;
	  }(React.Component);

	  var NumericInputDemo = function (_React$Component2) {
	    _inherits(NumericInputDemo, _React$Component2);

	    function NumericInputDemo(props) {
	      _classCallCheck(this, NumericInputDemo);

	      var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

	      _this2.onChange = function (value) {
	        _this2.setState({
	          value: value
	        });
	      };

	      _this2.state = {
	        value: ''
	      };
	      return _this2;
	    }

	    NumericInputDemo.prototype.render = function render() {
	      var value = this.state.value;
	      return React.createElement(
	        "div",
	        {
	          className: "numeric-input-demo"
	        },
	        React.createElement(NumericInput, {
	          value: value,
	          onChange: this.onChange
	        })
	      );
	    };

	    return NumericInputDemo;
	  }(React.Component);

	  return React.createElement(NumericInputDemo, null);
	},
	  "style": "/* to prevent the arrow overflow the popup container,\nor the height is not enough when content is empty */\n.numeric-input .ant-tooltip-inner {\n  min-width: 32px;\n  min-height: 37px;\n}\n\n.numeric-input .numeric-input-title {\n  font-size: 14px;\n}\n\n.numeric-input-demo {\n  width: 120px;\n}",
	  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* to prevent the arrow overflow the popup container,\nor the height is not enough when content is empty */</span>\n<span class=\"token selector\"><span class=\"token class\">.numeric-input</span> <span class=\"token class\">.ant-tooltip-inner</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">min-width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">37</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.numeric-input</span> <span class=\"token class\">.numeric-input-title</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">14</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.numeric-input-demo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1044:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'addon': __webpack_require__(714),
	    'autosize-textarea': __webpack_require__(715),
	    'basic': __webpack_require__(716),
	    'group': __webpack_require__(717),
	    'presuffix': __webpack_require__(718),
	    'search-input': __webpack_require__(719),
	    'size': __webpack_require__(720),
	    'textarea': __webpack_require__(721),
	    'tooltip': __webpack_require__(722),
	}

/***/ }

});