webpackJsonp([33,210],{

/***/ 1073:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "基本的时间轴。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Basic timeline."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本用法",
	      "en-US": "Basic"
	    },
	    "filename": "components/timeline/demo/basic.md",
	    "id": "components-timeline-demo-basic"
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
	      "highlighted": "import { Timeline } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Timeline<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Timeline,
	    null,
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      "Create a services site 2015-09-01"
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      "Solve initial network problems 2015-09-01"
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      "Technical testing 2015-09-01"
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      "Network problems being solved 2015-09-01"
	    )
	  );
	}
	};

/***/ },

/***/ 1074:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Set the color of circles. ",
	        [
	          "code",
	          "green"
	        ],
	        " means completed or success status, ",
	        [
	          "code",
	          "red"
	        ],
	        " means warning or error, and ",
	        [
	          "code",
	          "blue"
	        ],
	        " means ongoing or other default status."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "圆圈颜色",
	      "en-US": "Color"
	    },
	    "filename": "components/timeline/demo/color.md",
	    "id": "components-timeline-demo-color"
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
	      "highlighted": "import { Timeline } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Timeline<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item color<span class=\"token operator\">=</span><span class=\"token string\">\"green\"</span><span class=\"token operator\">></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item color<span class=\"token operator\">=</span><span class=\"token string\">\"green\"</span><span class=\"token operator\">></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item color<span class=\"token operator\">=</span><span class=\"token string\">\"red\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Solve initial network problems <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Solve initial network problems <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Solve initial network problems <span class=\"token number\">3</span> <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Technical testing <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Technical testing <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Technical testing <span class=\"token number\">3</span> <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Timeline,
	    null,
	    React.createElement(
	      _antd.Timeline.Item,
	      {
	        color: "green"
	      },
	      "Create a services site 2015-09-01"
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      {
	        color: "green"
	      },
	      "Create a services site 2015-09-01"
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      {
	        color: "red"
	      },
	      React.createElement(
	        "p",
	        null,
	        "Solve initial network problems 1"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Solve initial network problems 2"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Solve initial network problems 3 2015-09-01"
	      )
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      React.createElement(
	        "p",
	        null,
	        "Technical testing 1"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Technical testing 2"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Technical testing 3 2015-09-01"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 1075:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可以设置为图标或其他自定义元素。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Set a node as an icon or other custom element."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "自定义时间轴点",
	      "en-US": "Custom"
	    },
	    "filename": "components/timeline/demo/custom.md",
	    "id": "components-timeline-demo-custom"
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
	      "highlighted": "import { Timeline<span class=\"token punctuation\">,</span> Icon } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Timeline<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item dot<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"clock-circle-o\"</span> style<span class=\"token operator\">=</span>{{ fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span> }} <span class=\"token operator\">/</span><span class=\"token operator\">></span>} color<span class=\"token operator\">=</span><span class=\"token string\">\"red\"</span><span class=\"token operator\">></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Timeline,
	    null,
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      "Create a services site 2015-09-01"
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      "Solve initial network problems 2015-09-01"
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      {
	        dot: React.createElement(_antd.Icon, {
	          type: "clock-circle-o",
	          style: {
	            fontSize: '16px'
	          }
	        }),
	        color: "red"
	      },
	      "Technical testing 2015-09-01"
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      "Network problems being solved 2015-09-01"
	    )
	  );
	}
	};

/***/ },

/***/ 1076:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "在最后位置添加一个幽灵节点，表示时间轴未完成，还在记录过程中。可以指定 ",
	        [
	          "code",
	          "pending={true}"
	        ],
	        " 或者 ",
	        [
	          "code",
	          "pending={一个 React 元素}"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "When the timeline is incomplete and ongoing, put a ghost node at last. set ",
	        [
	          "code",
	          "pending={true}"
	        ],
	        " or ",
	        [
	          "code",
	          "pending={a React Element}"
	        ],
	        "。"
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "最后一个",
	      "en-US": "Last node"
	    },
	    "filename": "components/timeline/demo/pending.md",
	    "id": "components-timeline-demo-pending"
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
	      "highlighted": "import { Timeline } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Timeline pending<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>See more<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token punctuation\">.</span>Item<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Timeline<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Timeline,
	    {
	      pending: React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        "See more"
	      )
	    },
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      "Create a services site 2015-09-01"
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      "Solve initial network problems 2015-09-01"
	    ),
	    React.createElement(
	      _antd.Timeline.Item,
	      null,
	      "Technical testing 2015-09-01"
	    )
	  );
	}
	};

/***/ },

/***/ 1237:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1073),
	    'color': __webpack_require__(1074),
	    'custom': __webpack_require__(1075),
	    'pending': __webpack_require__(1076),
	}

/***/ }

});