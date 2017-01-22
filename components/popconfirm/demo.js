webpackJsonp([36,210],{

/***/ 788:
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
	        "The basic example."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/popconfirm/demo/basic.md",
	    "id": "components-popconfirm-demo-basic"
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
	      "highlighted": "import { Popconfirm<span class=\"token punctuation\">,</span> message } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Click on Yes'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">cancel</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Click on No'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Are you sure delete this task?\"</span> onConfirm<span class=\"token operator\">=</span>{confirm} onCancel<span class=\"token operator\">=</span>{cancel} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function confirm() {
	    _antd.message.success('Click on Yes');
	  }

	  function cancel() {
	    _antd.message.error('Click on No');
	  }

	  return React.createElement(
	    _antd.Popconfirm,
	    {
	      title: "Are you sure delete this task?",
	      onConfirm: confirm,
	      onCancel: cancel,
	      okText: "Yes",
	      cancelText: "No"
	    },
	    React.createElement(
	      "a",
	      {
	        href: "#"
	      },
	      "Delete"
	    )
	  );
	}
	};

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可以判断是否需要弹出。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Make it pop up under some conditions."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "条件触发",
	      "en-US": "Conditional trigger"
	    },
	    "filename": "components/popconfirm/demo/dynamic-trigger.md",
	    "id": "components-popconfirm-demo-dynamic-trigger"
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
	      "highlighted": "import { Popconfirm<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Switch</span><span class=\"token punctuation\">,</span> message } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      condition<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>   <span class=\"token operator\">/</span><span class=\"token operator\">/</span> Whether meet the condition<span class=\"token punctuation\">,</span> <span class=\"token keyword\">if</span> <span class=\"token operator\">not</span> show popconfirm<span class=\"token punctuation\">.</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">changeCondition</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ condition<span class=\"token punctuation\">:</span> value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Next step.'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">cancel</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Click on cancel.'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleVisibleChange</span><span class=\"token punctuation\">(</span>visible<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>!visible<span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      return<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    <span class=\"token operator\">/</span><span class=\"token operator\">/</span> Determining condition before show the popconfirm<span class=\"token punctuation\">.</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>condition<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>condition<span class=\"token punctuation\">)</span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;  // next step</span>\n    } <span class=\"token keyword\">else</span> {\n      this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;  // show the popconfirm</span>\n    }\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Are you sure delete this task?\"</span>\n          visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible} onVisibleChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleVisibleChange}\n          onConfirm<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>confirm} onCancel<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>cancel}\n          okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span>\n          cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Delete a task<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        Whether directly execute：<span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> defaultChecked onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>changeCondition} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	        visible: false,
	        condition: true
	      };
	    },
	    changeCondition: function changeCondition(value) {
	      this.setState({
	        condition: value
	      });
	    },
	    confirm: function confirm() {
	      this.setState({
	        visible: false
	      });

	      _antd.message.success('Next step.');
	    },
	    cancel: function cancel() {
	      this.setState({
	        visible: false
	      });

	      _antd.message.error('Click on cancel.');
	    },
	    handleVisibleChange: function handleVisibleChange(visible) {
	      if (!visible) {
	        this.setState({
	          visible: visible
	        });
	        return;
	      } // Determining condition before show the popconfirm.


	      console.log(this.state.condition);

	      if (this.state.condition) {
	        this.confirm(); // next step
	      } else {
	        this.setState({
	          visible: visible
	        }); // show the popconfirm
	      }
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          _antd.Popconfirm,
	          {
	            title: "Are you sure delete this task?",
	            visible: this.state.visible,
	            onVisibleChange: this.handleVisibleChange,
	            onConfirm: this.confirm,
	            onCancel: this.cancel,
	            okText: "Yes",
	            cancelText: "No"
	          },
	          React.createElement(
	            "a",
	            {
	              href: "#"
	            },
	            "Delete a task"
	          )
	        ),
	        React.createElement("br", null),
	        React.createElement("br", null),
	        "Whether directly execute：",
	        React.createElement(_antd.Switch, {
	          defaultChecked: true,
	          onChange: this.changeCondition
	        })
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "okText"
	        ],
	        " 和 ",
	        [
	          "code",
	          "cancelText"
	        ],
	        " 自定义按钮文字。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Set ",
	        [
	          "code",
	          "okText"
	        ],
	        " and ",
	        [
	          "code",
	          "cancelText"
	        ],
	        " props to customise the button's labels."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "国际化",
	      "en-US": "Locale text"
	    },
	    "filename": "components/popconfirm/demo/locale.md",
	    "id": "components-popconfirm-demo-locale"
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
	      "highlighted": "import { Popconfirm } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Are you sure？\"</span> okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Popconfirm,
	    {
	      title: "Are you sure？",
	      okText: "Yes",
	      cancelText: "No"
	    },
	    React.createElement(
	      "a",
	      {
	        href: "#"
	      },
	      "Delete"
	    )
	  );
	}
	};

/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "位置有十二个方向。如需箭头指向目标元素中心，可以设置 ",
	        [
	          "code",
	          "arrowPointAtCenter"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "There are 12 ",
	        [
	          "code",
	          "placement"
	        ],
	        " options available. Use ",
	        [
	          "code",
	          "arrowPointAtCenter"
	        ],
	        " if you want arrow point at the center of target."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "位置",
	      "en-US": "Placement"
	    },
	    "filename": "components/popconfirm/demo/placement.md",
	    "id": "components-popconfirm-demo-placement"
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
	      "highlighted": "import { Popconfirm<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> <span class=\"token string\">'Are you sure delete this task?'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">confirm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Click on Yes.'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"demo\"</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span> whiteSpace<span class=\"token punctuation\">:</span> <span class=\"token string\">'nowrap'</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"topLeft\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>TL<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"top\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Top<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"topRight\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>TR<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span> float<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"leftTop\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>LT<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"left\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Left<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"leftBottom\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>LB<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">304</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"rightTop\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>RT<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"right\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Right<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"rightBottom\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>RB<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span><span class=\"token punctuation\">,</span> clear<span class=\"token punctuation\">:</span> <span class=\"token string\">'both'</span><span class=\"token punctuation\">,</span> whiteSpace<span class=\"token punctuation\">:</span> <span class=\"token string\">'nowrap'</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"bottomLeft\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>BL<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"bottom\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Bottom<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popconfirm placement<span class=\"token operator\">=</span><span class=\"token string\">\"bottomRight\"</span> title<span class=\"token operator\">=</span>{text} onConfirm<span class=\"token operator\">=</span>{confirm} okText<span class=\"token operator\">=</span><span class=\"token string\">\"Yes\"</span> cancelText<span class=\"token operator\">=</span><span class=\"token string\">\"No\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>BR<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var text = 'Are you sure delete this task?';

	  function confirm() {
	    _antd.message.info('Click on Yes.');
	  }

	  return React.createElement(
	    "div",
	    {
	      className: "demo"
	    },
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginLeft: 70,
	          whiteSpace: 'nowrap'
	        }
	      },
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "topLeft",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "TL"
	        )
	      ),
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "top",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Top"
	        )
	      ),
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "topRight",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "TR"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          width: 70,
	          float: 'left'
	        }
	      },
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "leftTop",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "LT"
	        )
	      ),
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "left",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Left"
	        )
	      ),
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "leftBottom",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "LB"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          width: 70,
	          marginLeft: 304
	        }
	      },
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "rightTop",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "RT"
	        )
	      ),
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "right",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Right"
	        )
	      ),
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "rightBottom",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "RB"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginLeft: 70,
	          clear: 'both',
	          whiteSpace: 'nowrap'
	        }
	      },
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "bottomLeft",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "BL"
	        )
	      ),
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "bottom",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Bottom"
	        )
	      ),
	      React.createElement(
	        _antd.Popconfirm,
	        {
	          placement: "bottomRight",
	          title: text,
	          onConfirm: confirm,
	          okText: "Yes",
	          cancelText: "No"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "BR"
	        )
	      )
	    )
	  );
	},
	  "style": "\n.code-box-demo .ant-popover-wrap > a {\n  margin-right: 8px;\n}\n.code-box-demo .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n#components-popconfirm-demo-placement .ant-btn {\n  width: 70px;\n}\n"
	};

/***/ },

/***/ 1054:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(788),
	    'dynamic-trigger': __webpack_require__(789),
	    'locale': __webpack_require__(790),
	    'placement': __webpack_require__(791),
	}

/***/ }

});