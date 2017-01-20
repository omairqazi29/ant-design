webpackJsonp([17,210],{

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "简单的徽章展示。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Simplest Usage."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/badge/demo/basic.md",
	    "id": "components-badge-demo-basic"
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
	      "highlighted": "import { Badge } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Badge count<span class=\"token operator\">=</span>{<span class=\"token number\">5</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"head-example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Badge<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Badge,
	    {
	      count: 5
	    },
	    React.createElement("a", {
	      href: "#",
	      className: "head-example"
	    })
	  );
	},
	  "style": "\n.ant-badge:not(.ant-badge-status) {\n  margin-right: 16px;\n}\n.head-example {\n  width: 42px;\n  height: 42px;\n  border-radius: 6px;\n  background: #eee;\n  display: inline-block;\n}\n"
	};

/***/ },

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "展示动态变化的效果。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The count will be animated as it changes."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "动态",
	      "en-US": "Dynamic"
	    },
	    "filename": "components/badge/demo/change.md",
	    "id": "components-badge-demo-change"
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
	      "highlighted": "import { Badge<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> <span class=\"token keyword\">Switch</span> } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> ButtonGroup <span class=\"token operator\">=</span> Button<span class=\"token punctuation\">.</span>Group<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Test <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      count<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span>\n      show<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">increase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> count <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>count <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ count }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">decline</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    let count <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>count <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>count <span class=\"token operator\">&lt;</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> {\n      count <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ count }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>show<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ show }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Badge count<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>count}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"head-example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Badge<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>ButtonGroup<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>decline}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"minus\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"ghost\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>increase}<span class=\"token operator\">></span>\n              <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"plus\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ButtonGroup<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>Badge dot<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>show}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"head-example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Badge<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token keyword\">Switch</span> onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Test <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var ButtonGroup = _antd.Button.Group;
	  var Test = React.createClass({
	    displayName: "Test",
	    getInitialState: function getInitialState() {
	      return {
	        count: 5,
	        show: true
	      };
	    },
	    increase: function increase() {
	      var count = this.state.count + 1;
	      this.setState({
	        count: count
	      });
	    },
	    decline: function decline() {
	      var count = this.state.count - 1;

	      if (count < 0) {
	        count = 0;
	      }

	      this.setState({
	        count: count
	      });
	    },
	    onChange: function onChange(show) {
	      this.setState({
	        show: show
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "div",
	          null,
	          React.createElement(
	            _antd.Badge,
	            {
	              count: this.state.count
	            },
	            React.createElement("a", {
	              href: "#",
	              className: "head-example"
	            })
	          ),
	          React.createElement(
	            ButtonGroup,
	            null,
	            React.createElement(
	              _antd.Button,
	              {
	                type: "ghost",
	                onClick: this.decline
	              },
	              React.createElement(_antd.Icon, {
	                type: "minus"
	              })
	            ),
	            React.createElement(
	              _antd.Button,
	              {
	                type: "ghost",
	                onClick: this.increase
	              },
	              React.createElement(_antd.Icon, {
	                type: "plus"
	              })
	            )
	          )
	        ),
	        React.createElement(
	          "div",
	          {
	            style: {
	              marginTop: 10
	            }
	          },
	          React.createElement(
	            _antd.Badge,
	            {
	              dot: this.state.show
	            },
	            React.createElement("a", {
	              href: "#",
	              className: "head-example"
	            })
	          ),
	          React.createElement(_antd.Switch, {
	            onChange: this.onChange
	          })
	        )
	      );
	    }
	  });
	  return React.createElement(Test, null);
	}
	};

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "没有具体的数字。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "This will simply display a red badge, without a specific count."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "讨嫌的小红点",
	      "en-US": "Red badge"
	    },
	    "filename": "components/badge/demo/dot.md",
	    "id": "components-badge-demo-dot"
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
	      "highlighted": "import { Badge<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Badge dot<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"notification\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Badge<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Badge dot<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Link something<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Badge<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Badge,
	      {
	        dot: true
	      },
	      React.createElement(_antd.Icon, {
	        type: "notification"
	      })
	    ),
	    React.createElement(
	      _antd.Badge,
	      {
	        dot: true
	      },
	      React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        "Link something"
	      )
	    )
	  );
	},
	  "style": "\n.anticon-notification {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n  font-size: 16px;\n}\n"
	};

/***/ },

/***/ 744:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用 a 标签进行包裹即可。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The badge can be wrapped with ",
	        [
	          "code",
	          "a"
	        ],
	        " tag to make it linkable."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "可点击",
	      "en-US": "Clickable"
	    },
	    "filename": "components/badge/demo/link.md",
	    "id": "components-badge-demo-link"
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
	      "highlighted": "import { Badge } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge count<span class=\"token operator\">=</span>{<span class=\"token number\">5</span>}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>span className<span class=\"token operator\">=</span><span class=\"token string\">\"head-example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Badge<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "a",
	    {
	      href: "#"
	    },
	    React.createElement(
	      _antd.Badge,
	      {
	        count: 5
	      },
	      React.createElement("span", {
	        className: "head-example"
	      })
	    )
	  );
	}
	};

/***/ },

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "不包裹任何元素即是独立使用，可自定样式展现。"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "在右上角的 badge 则限定为红色。"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Used in standalone when children is empty."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "独立使用",
	      "en-US": "Standalone"
	    },
	    "filename": "components/badge/demo/no-wrapper.md",
	    "id": "components-badge-demo-no-wrapper"
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
	      "highlighted": "import { Badge } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Badge count<span class=\"token operator\">=</span>{<span class=\"token number\">25</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Badge count<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>} style<span class=\"token operator\">=</span>{{ backgroundColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#999'</span><span class=\"token punctuation\">,</span> borderColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#d9d9d9'</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Badge count<span class=\"token operator\">=</span>{<span class=\"token number\">109</span>} style<span class=\"token operator\">=</span>{{ backgroundColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#87d068'</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Badge, {
	      count: 25
	    }),
	    React.createElement(_antd.Badge, {
	      count: 4,
	      style: {
	        backgroundColor: '#fff',
	        color: '#999',
	        borderColor: '#d9d9d9'
	      }
	    }),
	    React.createElement(_antd.Badge, {
	      count: 109,
	      style: {
	        backgroundColor: '#87d068'
	      }
	    })
	  );
	}
	};

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "超过 ",
	        [
	          "code",
	          "overflowCount"
	        ],
	        " 的会显示为 ",
	        [
	          "code",
	          "${overflowCount}+"
	        ],
	        "，默认的 ",
	        [
	          "code",
	          "overflowCount"
	        ],
	        " 为 ",
	        [
	          "code",
	          "99"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        [
	          "code",
	          "${overflowCount}+"
	        ],
	        " is displayed when count is larger than ",
	        [
	          "code",
	          "overflowCount"
	        ],
	        ". The default value of ",
	        [
	          "code",
	          "overflowCount"
	        ],
	        " is ",
	        [
	          "code",
	          "99"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "封顶数字",
	      "en-US": "Overflow Count"
	    },
	    "filename": "components/badge/demo/overflow.md",
	    "id": "components-badge-demo-overflow"
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
	      "highlighted": "import { Badge } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Badge count<span class=\"token operator\">=</span>{<span class=\"token number\">99</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"head-example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Badge<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Badge count<span class=\"token operator\">=</span>{<span class=\"token number\">100</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"head-example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Badge<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Badge count<span class=\"token operator\">=</span>{<span class=\"token number\">99</span>} overflowCount<span class=\"token operator\">=</span>{<span class=\"token number\">10</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"head-example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Badge<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Badge count<span class=\"token operator\">=</span>{<span class=\"token number\">1000</span>} overflowCount<span class=\"token operator\">=</span>{<span class=\"token number\">999</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span> className<span class=\"token operator\">=</span><span class=\"token string\">\"head-example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Badge<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Badge,
	      {
	        count: 99
	      },
	      React.createElement("a", {
	        href: "#",
	        className: "head-example"
	      })
	    ),
	    React.createElement(
	      _antd.Badge,
	      {
	        count: 100
	      },
	      React.createElement("a", {
	        href: "#",
	        className: "head-example"
	      })
	    ),
	    React.createElement(
	      _antd.Badge,
	      {
	        count: 99,
	        overflowCount: 10
	      },
	      React.createElement("a", {
	        href: "#",
	        className: "head-example"
	      })
	    ),
	    React.createElement(
	      _antd.Badge,
	      {
	        count: 1000,
	        overflowCount: 999
	      },
	      React.createElement("a", {
	        href: "#",
	        className: "head-example"
	      })
	    )
	  );
	}
	};

/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用于表示状态的小圆点。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Standalone badge with status."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "状态点",
	      "en-US": "Status"
	    },
	    "filename": "components/badge/demo/status.md",
	    "id": "components-badge-demo-status"
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
	      "highlighted": "import { Badge } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge status<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge status<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge status<span class=\"token operator\">=</span><span class=\"token string\">\"default\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge status<span class=\"token operator\">=</span><span class=\"token string\">\"processing\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge status<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge status<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span> text<span class=\"token operator\">=</span><span class=\"token string\">\"Success\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge status<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span> text<span class=\"token operator\">=</span><span class=\"token string\">\"Error\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge status<span class=\"token operator\">=</span><span class=\"token string\">\"default\"</span> text<span class=\"token operator\">=</span><span class=\"token string\">\"Default\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge status<span class=\"token operator\">=</span><span class=\"token string\">\"processing\"</span> text<span class=\"token operator\">=</span><span class=\"token string\">\"Processing\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Badge status<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span> text<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Badge, {
	      status: "success"
	    }),
	    React.createElement(_antd.Badge, {
	      status: "error"
	    }),
	    React.createElement(_antd.Badge, {
	      status: "default"
	    }),
	    React.createElement(_antd.Badge, {
	      status: "processing"
	    }),
	    React.createElement(_antd.Badge, {
	      status: "warning"
	    }),
	    React.createElement("br", null),
	    React.createElement(_antd.Badge, {
	      status: "success",
	      text: "Success"
	    }),
	    React.createElement("br", null),
	    React.createElement(_antd.Badge, {
	      status: "error",
	      text: "Error"
	    }),
	    React.createElement("br", null),
	    React.createElement(_antd.Badge, {
	      status: "default",
	      text: "Default"
	    }),
	    React.createElement("br", null),
	    React.createElement(_antd.Badge, {
	      status: "processing",
	      text: "Processing"
	    }),
	    React.createElement("br", null),
	    React.createElement(_antd.Badge, {
	      status: "warning",
	      text: "Warning"
	    })
	  );
	}
	};

/***/ },

/***/ 1200:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(741),
	    'change': __webpack_require__(742),
	    'dot': __webpack_require__(743),
	    'link': __webpack_require__(744),
	    'no-wrapper': __webpack_require__(745),
	    'overflow': __webpack_require__(746),
	    'status': __webpack_require__(747),
	}

/***/ }

});