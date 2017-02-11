webpackJsonp([24,211],{

/***/ 777:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "包含标题、内容、操作区域。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A basic card containing a title, content and an extra corner content."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "典型卡片",
	      "en-US": "Basic card"
	    },
	    "filename": "components/card/demo/basic.md",
	    "id": "components-card-demo-basic"
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
	      "highlighted": "import { Card } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Card title<span class=\"token operator\">=</span><span class=\"token string\">\"Card title\"</span> extra<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>More<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>} style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Card<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Card,
	    {
	      title: "Card title",
	      extra: React.createElement(
	        "a",
	        {
	          href: "#"
	        },
	        "More"
	      ),
	      style: {
	        width: 300
	      }
	    },
	    React.createElement(
	      "p",
	      null,
	      "Card content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Card content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Card content"
	    )
	  );
	}
	};

/***/ },

/***/ 778:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "在灰色背景上使用无边框的卡片。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A borderless card on a gray background."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "无边框",
	      "en-US": "No border"
	    },
	    "filename": "components/card/demo/border-less.md",
	    "id": "components-card-demo-border-less"
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
	      "highlighted": "import { Card } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#ECECEC'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'30px'</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Card title<span class=\"token operator\">=</span><span class=\"token string\">\"Card title\"</span> bordered<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>} style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Card<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    {
	      style: {
	        background: '#ECECEC',
	        padding: '30px'
	      }
	    },
	    React.createElement(
	      _antd.Card,
	      {
	        title: "Card title",
	        bordered: false,
	        style: {
	          width: 300
	        }
	      },
	      React.createElement(
	        "p",
	        null,
	        "Card content"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Card content"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Card content"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "在系统概览页面常常和栅格进行配合。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Cards usually cooperate with grid layout in overview page."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "栅格卡片",
	      "en-US": "Grid card"
	    },
	    "filename": "components/card/demo/grid.md",
	    "id": "components-card-demo-grid"
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
	      "highlighted": "import { Card<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Row } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#ECECEC'</span><span class=\"token punctuation\">,</span> padding<span class=\"token punctuation\">:</span> <span class=\"token string\">'30px'</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Card title<span class=\"token operator\">=</span><span class=\"token string\">\"Card title\"</span> bordered<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Card<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Card title<span class=\"token operator\">=</span><span class=\"token string\">\"Card title\"</span> bordered<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Card<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span><span class=\"token string\">\"8\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Card title<span class=\"token operator\">=</span><span class=\"token string\">\"Card title\"</span> bordered<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Card<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    {
	      style: {
	        background: '#ECECEC',
	        padding: '30px'
	      }
	    },
	    React.createElement(
	      _antd.Row,
	      null,
	      React.createElement(
	        _antd.Col,
	        {
	          span: "8"
	        },
	        React.createElement(
	          _antd.Card,
	          {
	            title: "Card title",
	            bordered: false
	          },
	          "Card content"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: "8"
	        },
	        React.createElement(
	          _antd.Card,
	          {
	            title: "Card title",
	            bordered: false
	          },
	          "Card content"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: "8"
	        },
	        React.createElement(
	          _antd.Card,
	          {
	            title: "Card title",
	            bordered: false
	          },
	          "Card content"
	        )
	      )
	    )
	  );
	},
	  "style": "/* Increase grid spacing of 16px  */\n.code-box-demo .ant-row {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n.code-box-demo .ant-row > div {\n  padding: 0 8px;\n}",
	  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* Increase grid spacing of 16px  */</span>\n<span class=\"token selector\"><span class=\"token class\">.code-box-demo</span> <span class=\"token class\">.ant-row</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.code-box-demo</span> <span class=\"token class\">.ant-row</span> > div </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "数据读入前会有文本块样式。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Shows a loading indicator while the contents of the card is being fetched."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "预加载的卡片",
	      "en-US": "Loading card"
	    },
	    "filename": "components/card/demo/loading.md",
	    "id": "components-card-demo-loading"
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
	      "highlighted": "import { Card } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Card loading title<span class=\"token operator\">=</span><span class=\"token string\">\"Card title\"</span> style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'34%'</span> }}<span class=\"token operator\">></span>\n    Whatever content\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Card<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Card,
	    {
	      loading: true,
	      title: "Card title",
	      style: {
	        width: '34%'
	      }
	    },
	    "Whatever content"
	  );
	}
	};

/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可以调整默认边距，设定宽度。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Customizing default width and margin."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "更灵活的内容展示",
	      "en-US": "Customized content"
	    },
	    "filename": "components/card/demo/no-padding.md",
	    "id": "components-card-demo-no-padding"
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
	      "highlighted": "import { Card } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Card style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">240</span> }} bodyStyle<span class=\"token operator\">=</span>{{ padding<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"custom-image\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>img alt<span class=\"token operator\">=</span><span class=\"token string\">\"example\"</span> width<span class=\"token operator\">=</span><span class=\"token string\">\"100%\"</span> src<span class=\"token operator\">=</span><span class=\"token string\">\"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"custom-card\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span>Europe Street beat<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>www<span class=\"token punctuation\">.</span>instagram<span class=\"token punctuation\">.</span>com<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Card<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Card,
	    {
	      style: {
	        width: 240
	      },
	      bodyStyle: {
	        padding: 0
	      }
	    },
	    React.createElement(
	      "div",
	      {
	        className: "custom-image"
	      },
	      React.createElement("img", {
	        alt: "example",
	        width: "100%",
	        src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
	      })
	    ),
	    React.createElement(
	      "div",
	      {
	        className: "custom-card"
	      },
	      React.createElement(
	        "h3",
	        null,
	        "Europe Street beat"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "www.instagram.com"
	      )
	    )
	  );
	},
	  "style": ".custom-image img {\n  display: block;\n}\n.custom-card {\n  padding: 10px 16px;\n}\n.custom-card p {\n  color: #999;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.custom-image</span> img </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> block<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.custom-card</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">10</span>px <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.custom-card</span> p </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "只包含内容区域。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A simple card only containing a content area."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "简洁卡片",
	      "en-US": "Simple card"
	    },
	    "filename": "components/card/demo/simple.md",
	    "id": "components-card-demo-simple"
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
	      "highlighted": "import { Card } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Card style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> }}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Card content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Card<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Card,
	    {
	      style: {
	        width: 300
	      }
	    },
	    React.createElement(
	      "p",
	      null,
	      "Card content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Card content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Card content"
	    )
	  );
	}
	};

/***/ },

/***/ 1216:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(777),
	    'border-less': __webpack_require__(778),
	    'grid': __webpack_require__(779),
	    'loading': __webpack_require__(780),
	    'no-padding': __webpack_require__(781),
	    'simple': __webpack_require__(782),
	}

/***/ }

});