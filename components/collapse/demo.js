webpackJsonp([31,211],{

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "手风琴，每次只打开一个tab。默认打开第一个。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "手风琴",
	      "en-US": "Accordion"
	    },
	    "filename": "components/collapse/demo/accordion.md",
	    "id": "components-collapse-demo-accordion"
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
	      "highlighted": "import { Collapse } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Panel <span class=\"token operator\">=</span> Collapse<span class=\"token punctuation\">.</span>Panel<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> `\n  A dog is a type of domesticated animal<span class=\"token punctuation\">.</span>\n  Known <span class=\"token keyword\">for</span> its loyalty <span class=\"token operator\">and</span> faithfulness<span class=\"token punctuation\">,</span>\n  it can be found as a welcome guest <span class=\"token keyword\">in</span> many households across the world<span class=\"token punctuation\">.</span>\n`<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Collapse accordion<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span>{<span class=\"token string\">'This is panel header 1'</span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span>{<span class=\"token string\">'This is panel header 2'</span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span>{<span class=\"token string\">'This is panel header 3'</span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Collapse<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Panel = _antd.Collapse.Panel;
	  var text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";
	  return React.createElement(
	    _antd.Collapse,
	    {
	      accordion: true
	    },
	    React.createElement(
	      Panel,
	      {
	        header: 'This is panel header 1',
	        key: "1"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    ),
	    React.createElement(
	      Panel,
	      {
	        header: 'This is panel header 2',
	        key: "2"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    ),
	    React.createElement(
	      Panel,
	      {
	        header: 'This is panel header 3',
	        key: "3"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可以同时展开多个面板，这个例子默认展开了第一个。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "More than one panel can be expanded at a time, the first panel is initialized to be active in this case."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "折叠面板",
	      "en-US": "Collapse"
	    },
	    "filename": "components/collapse/demo/basic.md",
	    "id": "components-collapse-demo-basic"
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
	      "highlighted": "import { Collapse } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Panel <span class=\"token operator\">=</span> Collapse<span class=\"token punctuation\">.</span>Panel<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> `\n  A dog is a type of domesticated animal<span class=\"token punctuation\">.</span>\n  Known <span class=\"token keyword\">for</span> its loyalty <span class=\"token operator\">and</span> faithfulness<span class=\"token punctuation\">,</span>\n  it can be found as a welcome guest <span class=\"token keyword\">in</span> many households across the world<span class=\"token punctuation\">.</span>\n`<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Collapse defaultActiveKey<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>} onChange<span class=\"token operator\">=</span>{callback}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span><span class=\"token string\">\"This is panel header 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span><span class=\"token string\">\"This is panel header 2\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span><span class=\"token string\">\"This is panel header 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Collapse<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Panel = _antd.Collapse.Panel;

	  function callback(key) {
	    console.log(key);
	  }

	  var text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";
	  return React.createElement(
	    _antd.Collapse,
	    {
	      defaultActiveKey: ['1'],
	      onChange: callback
	    },
	    React.createElement(
	      Panel,
	      {
	        header: "This is panel header 1",
	        key: "1"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    ),
	    React.createElement(
	      Panel,
	      {
	        header: "This is panel header 2",
	        key: "2"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    ),
	    React.createElement(
	      Panel,
	      {
	        header: "This is panel header 3",
	        key: "3"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "一套没有边框的简洁样式。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A borderless style of Collapse."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "简洁风格",
	      "en-US": "Borderless"
	    },
	    "filename": "components/collapse/demo/borderless.md",
	    "id": "components-collapse-demo-borderless"
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
	      "highlighted": "import { Collapse } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Panel <span class=\"token operator\">=</span> Collapse<span class=\"token punctuation\">.</span>Panel<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> `\n  A dog is a type of domesticated animal<span class=\"token punctuation\">.</span>\n  Known <span class=\"token keyword\">for</span> its loyalty <span class=\"token operator\">and</span> faithfulness<span class=\"token punctuation\">,</span>\n  it can be found as a welcome guest <span class=\"token keyword\">in</span> many households across the world<span class=\"token punctuation\">.</span>\n`<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Collapse bordered<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>} defaultActiveKey<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span><span class=\"token string\">\"This is panel header 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span><span class=\"token string\">\"This is panel header 2\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span><span class=\"token string\">\"This is panel header 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Collapse<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Panel = _antd.Collapse.Panel;
	  var text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";
	  return React.createElement(
	    _antd.Collapse,
	    {
	      bordered: false,
	      defaultActiveKey: ['1']
	    },
	    React.createElement(
	      Panel,
	      {
	        header: "This is panel header 1",
	        key: "1"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    ),
	    React.createElement(
	      Panel,
	      {
	        header: "This is panel header 2",
	        key: "2"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    ),
	    React.createElement(
	      Panel,
	      {
	        header: "This is panel header 3",
	        key: "3"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "自定义各个面板的背景色、圆角和边距。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Customize the background, border and margin styles for each panel."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "自定义面板",
	      "en-US": "Custom Panel"
	    },
	    "filename": "components/collapse/demo/custom.md",
	    "id": "components-collapse-demo-custom"
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
	      "highlighted": "import { Collapse } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Panel <span class=\"token operator\">=</span> Collapse<span class=\"token punctuation\">.</span>Panel<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> `\n  A dog is a type of domesticated animal<span class=\"token punctuation\">.</span>\n  Known <span class=\"token keyword\">for</span> its loyalty <span class=\"token operator\">and</span> faithfulness<span class=\"token punctuation\">,</span>\n  it can be found as a welcome guest <span class=\"token keyword\">in</span> many households across the world<span class=\"token punctuation\">.</span>\n`<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> customPanelStyle <span class=\"token operator\">=</span> {\n  background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#f7f7f7'</span><span class=\"token punctuation\">,</span>\n  borderRadius<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span>\n  marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span>\n  border<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Collapse bordered<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>} defaultActiveKey<span class=\"token operator\">=</span>{<span class=\"token punctuation\">[</span><span class=\"token string\">'1'</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span><span class=\"token string\">\"This is panel header 1\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span> style<span class=\"token operator\">=</span>{customPanelStyle}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span><span class=\"token string\">\"This is panel header 2\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span> style<span class=\"token operator\">=</span>{customPanelStyle}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span><span class=\"token string\">\"This is panel header 3\"</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span> style<span class=\"token operator\">=</span>{customPanelStyle}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Collapse<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Panel = _antd.Collapse.Panel;
	  var text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";
	  var customPanelStyle = {
	    background: '#f7f7f7',
	    borderRadius: 4,
	    marginBottom: 24,
	    border: 0
	  };
	  return React.createElement(
	    _antd.Collapse,
	    {
	      bordered: false,
	      defaultActiveKey: ['1']
	    },
	    React.createElement(
	      Panel,
	      {
	        header: "This is panel header 1",
	        key: "1",
	        style: customPanelStyle
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    ),
	    React.createElement(
	      Panel,
	      {
	        header: "This is panel header 2",
	        key: "2",
	        style: customPanelStyle
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    ),
	    React.createElement(
	      Panel,
	      {
	        header: "This is panel header 3",
	        key: "3",
	        style: customPanelStyle
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "嵌套折叠面板。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        [
	          "code",
	          "Collapse"
	        ],
	        " is nested inside the ",
	        [
	          "code",
	          "Collapse"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "面板嵌套",
	      "en-US": "Nested panel"
	    },
	    "filename": "components/collapse/demo/mix.md",
	    "id": "components-collapse-demo-mix"
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
	      "highlighted": "import { Collapse } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> Panel <span class=\"token operator\">=</span> Collapse<span class=\"token punctuation\">.</span>Panel<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> `\n  A dog is a type of domesticated animal<span class=\"token punctuation\">.</span>\n  Known <span class=\"token keyword\">for</span> its loyalty <span class=\"token operator\">and</span> faithfulness<span class=\"token punctuation\">,</span>\n  it can be found as a welcome guest <span class=\"token keyword\">in</span> many households across the world<span class=\"token punctuation\">.</span>\n`<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Collapse onChange<span class=\"token operator\">=</span>{callback}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span>{<span class=\"token string\">'This is panel header 1'</span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Collapse defaultActiveKey<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span>{<span class=\"token string\">'This is panel nest panel'</span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"1\"</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Collapse<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span>{<span class=\"token string\">'This is panel header 2'</span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"2\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Panel header<span class=\"token operator\">=</span>{<span class=\"token string\">'This is panel header 3'</span>} key<span class=\"token operator\">=</span><span class=\"token string\">\"3\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>{text}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Panel<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Collapse<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Panel = _antd.Collapse.Panel;

	  function callback(key) {
	    console.log(key);
	  }

	  var text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";
	  return React.createElement(
	    _antd.Collapse,
	    {
	      onChange: callback
	    },
	    React.createElement(
	      Panel,
	      {
	        header: 'This is panel header 1',
	        key: "1"
	      },
	      React.createElement(
	        _antd.Collapse,
	        {
	          defaultActiveKey: "1"
	        },
	        React.createElement(
	          Panel,
	          {
	            header: 'This is panel nest panel',
	            key: "1"
	          },
	          React.createElement(
	            "p",
	            null,
	            text
	          )
	        )
	      )
	    ),
	    React.createElement(
	      Panel,
	      {
	        header: 'This is panel header 2',
	        key: "2"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    ),
	    React.createElement(
	      Panel,
	      {
	        header: 'This is panel header 3',
	        key: "3"
	      },
	      React.createElement(
	        "p",
	        null,
	        text
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 1043:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'accordion': __webpack_require__(650),
	    'basic': __webpack_require__(651),
	    'borderless': __webpack_require__(652),
	    'custom': __webpack_require__(653),
	    'mix': __webpack_require__(654),
	}

/***/ }

});