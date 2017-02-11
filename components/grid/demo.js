webpackJsonp([4,211],{

/***/ 854:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "从堆叠到水平排列。"
	      ],
	      [
	        "p",
	        "使用单一的一组 ",
	        [
	          "code",
	          "Row"
	        ],
	        " 和 ",
	        [
	          "code",
	          "Col"
	        ],
	        " 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 ",
	        [
	          "code",
	          "Row"
	        ],
	        " 内。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "From the stack to the horizontal arrangement."
	      ],
	      [
	        "p",
	        "You can create a basic grid system by using a single set of ",
	        [
	          "code",
	          "Row"
	        ],
	        " and",
	        [
	          "code",
	          "Col"
	        ],
	        " grid assembly, all of the columns (Col) must be placed in ",
	        [
	          "code",
	          "Row"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基础栅格",
	      "en-US": "Basic Grid"
	    },
	    "filename": "components/grid/demo/basic.md",
	    "id": "components-grid-demo-basic"
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
	      "highlighted": "import { Row<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">12</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">12</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">12</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	      _antd.Row,
	      null,
	      React.createElement(
	        _antd.Col,
	        {
	          span: 12
	        },
	        "col-12"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 12
	        },
	        "col-12"
	      )
	    ),
	    React.createElement(
	      _antd.Row,
	      null,
	      React.createElement(
	        _antd.Col,
	        {
	          span: 8
	        },
	        "col-8"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 8
	        },
	        "col-8"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 8
	        },
	        "col-8"
	      )
	    ),
	    React.createElement(
	      _antd.Row,
	      null,
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6
	        },
	        "col-6"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6
	        },
	        "col-6"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6
	        },
	        "col-6"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6
	        },
	        "col-6"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 855:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "Flex 子元素垂直对齐。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Flex child elements vertically aligned."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "Flex 对齐",
	      "en-US": "Flex Alignment"
	    },
	    "filename": "components/grid/demo/flex-align.md",
	    "id": "components-grid-demo-flex-align"
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
	      "highlighted": "import { Row<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> DemoBox <span class=\"token operator\">=</span> props <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>p className<span class=\"token operator\">=</span>{`height<span class=\"token operator\">-</span>${props<span class=\"token punctuation\">.</span>value}`}<span class=\"token operator\">></span>{props<span class=\"token punctuation\">.</span>children}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Align Top<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row type<span class=\"token operator\">=</span><span class=\"token string\">\"flex\"</span> justify<span class=\"token operator\">=</span><span class=\"token string\">\"center\"</span> align<span class=\"token operator\">=</span><span class=\"token string\">\"top\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">100</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">120</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">80</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Align Center<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row type<span class=\"token operator\">=</span><span class=\"token string\">\"flex\"</span> justify<span class=\"token operator\">=</span><span class=\"token string\">\"space-around\"</span> align<span class=\"token operator\">=</span><span class=\"token string\">\"middle\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">100</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">120</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">80</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Align Bottom<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row type<span class=\"token operator\">=</span><span class=\"token string\">\"flex\"</span> justify<span class=\"token operator\">=</span><span class=\"token string\">\"space-between\"</span> align<span class=\"token operator\">=</span><span class=\"token string\">\"bottom\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">100</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">120</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>DemoBox value<span class=\"token operator\">=</span>{<span class=\"token number\">80</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>DemoBox<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var DemoBox = function DemoBox(props) {
	    return React.createElement(
	      "p",
	      {
	        className: "height-" + props.value
	      },
	      props.children
	    );
	  };

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "p",
	      null,
	      "Align Top"
	    ),
	    React.createElement(
	      _antd.Row,
	      {
	        type: "flex",
	        justify: "center",
	        align: "top"
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 100
	          },
	          "col-4"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 50
	          },
	          "col-4"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 120
	          },
	          "col-4"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 80
	          },
	          "col-4"
	        )
	      )
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Align Center"
	    ),
	    React.createElement(
	      _antd.Row,
	      {
	        type: "flex",
	        justify: "space-around",
	        align: "middle"
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 100
	          },
	          "col-4"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 50
	          },
	          "col-4"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 120
	          },
	          "col-4"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 80
	          },
	          "col-4"
	        )
	      )
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Align Bottom"
	    ),
	    React.createElement(
	      _antd.Row,
	      {
	        type: "flex",
	        justify: "space-between",
	        align: "bottom"
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 100
	          },
	          "col-4"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 50
	          },
	          "col-4"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 120
	          },
	          "col-4"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        React.createElement(
	          DemoBox,
	          {
	            value: 80
	          },
	          "col-4"
	        )
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 856:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "通过 Flex 布局的 Order 来改变元素的排序。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "To change the element sort by Flex layout order."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "Flex 排序",
	      "en-US": "Flex Order"
	    },
	    "filename": "components/grid/demo/flex-order.md",
	    "id": "components-grid-demo-flex-order"
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
	      "highlighted": "import { Row<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row type<span class=\"token operator\">=</span><span class=\"token string\">\"flex\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>} order<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span><span class=\"token number\">1</span> col<span class=\"token operator\">-</span>order<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>} order<span class=\"token operator\">=</span>{<span class=\"token number\">3</span>}<span class=\"token operator\">></span><span class=\"token number\">2</span> col<span class=\"token operator\">-</span>order<span class=\"token operator\">-</span><span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>} order<span class=\"token operator\">=</span>{<span class=\"token number\">2</span>}<span class=\"token operator\">></span><span class=\"token number\">3</span> col<span class=\"token operator\">-</span>order<span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>} order<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>}<span class=\"token operator\">></span><span class=\"token number\">4</span> col<span class=\"token operator\">-</span>order<span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	      _antd.Row,
	      {
	        type: "flex"
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6,
	          order: 4
	        },
	        "1 col-order-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6,
	          order: 3
	        },
	        "2 col-order-3"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6,
	          order: 2
	        },
	        "3 col-order-2"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6,
	          order: 1
	        },
	        "4 col-order-1"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 857:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "Flex 布局基础。"
	      ],
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "row-flex"
	        ],
	        " 定义 ",
	        [
	          "code",
	          "flex"
	        ],
	        " 布局，其子元素根据不同的值 ",
	        [
	          "code",
	          "start"
	        ],
	        ",",
	        [
	          "code",
	          "center"
	        ],
	        ",",
	        [
	          "code",
	          "end"
	        ],
	        ",",
	        [
	          "code",
	          "space-between"
	        ],
	        ",",
	        [
	          "code",
	          "space-around"
	        ],
	        "，分别定义其在父节点里面的排版方式。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Use ",
	        [
	          "code",
	          "row-flex"
	        ],
	        " define",
	        [
	          "code",
	          "flex"
	        ],
	        " layout, its child elements depending on the value of the ",
	        [
	          "code",
	          "start"
	        ],
	        ",",
	        [
	          "code",
	          "center"
	        ],
	        ", ",
	        [
	          "code",
	          "end"
	        ],
	        ",",
	        [
	          "code",
	          "space-between"
	        ],
	        ", ",
	        [
	          "code",
	          "space-around"
	        ],
	        ", which are defined in its parent node layout mode."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "Flex 布局",
	      "en-US": "Flex Layout"
	    },
	    "filename": "components/grid/demo/flex.md",
	    "id": "components-grid-demo-flex"
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
	      "highlighted": "import { Row<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>sub<span class=\"token operator\">-</span>element align left<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row type<span class=\"token operator\">=</span><span class=\"token string\">\"flex\"</span> justify<span class=\"token operator\">=</span><span class=\"token string\">\"start\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>sub<span class=\"token operator\">-</span>element align center<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row type<span class=\"token operator\">=</span><span class=\"token string\">\"flex\"</span> justify<span class=\"token operator\">=</span><span class=\"token string\">\"center\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>sub<span class=\"token operator\">-</span>element align right<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row type<span class=\"token operator\">=</span><span class=\"token string\">\"flex\"</span> justify<span class=\"token operator\">=</span><span class=\"token string\">\"end\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>sub<span class=\"token operator\">-</span>element monospaced arrangement<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row type<span class=\"token operator\">=</span><span class=\"token string\">\"flex\"</span> justify<span class=\"token operator\">=</span><span class=\"token string\">\"space-between\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>sub<span class=\"token operator\">-</span>element align full<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row type<span class=\"token operator\">=</span><span class=\"token string\">\"flex\"</span> justify<span class=\"token operator\">=</span><span class=\"token string\">\"space-around\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	      "p",
	      null,
	      "sub-element align left"
	    ),
	    React.createElement(
	      _antd.Row,
	      {
	        type: "flex",
	        justify: "start"
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      )
	    ),
	    React.createElement(
	      "p",
	      null,
	      "sub-element align center"
	    ),
	    React.createElement(
	      _antd.Row,
	      {
	        type: "flex",
	        justify: "center"
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      )
	    ),
	    React.createElement(
	      "p",
	      null,
	      "sub-element align right"
	    ),
	    React.createElement(
	      _antd.Row,
	      {
	        type: "flex",
	        justify: "end"
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      )
	    ),
	    React.createElement(
	      "p",
	      null,
	      "sub-element monospaced arrangement"
	    ),
	    React.createElement(
	      _antd.Row,
	      {
	        type: "flex",
	        justify: "space-between"
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      )
	    ),
	    React.createElement(
	      "p",
	      null,
	      "sub-element align full"
	    ),
	    React.createElement(
	      _antd.Row,
	      {
	        type: "flex",
	        justify: "space-around"
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 4
	        },
	        "col-4"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 858:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "栅格常常需要和间隔进行配合，你可以使用 ",
	        [
	          "code",
	          "Row"
	        ],
	        " 的 ",
	        [
	          "code",
	          "gutter"
	        ],
	        " 属性，我们推荐使用 ",
	        [
	          "code",
	          "(16+8n)px"
	        ],
	        " 作为栅格间隔。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "You can use the ",
	        [
	          "code",
	          "gutter"
	        ],
	        " property of ",
	        [
	          "code",
	          "Row"
	        ],
	        " as grid spacing, we recommend set it to ",
	        [
	          "code",
	          "(16 + 8n) px"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "区块间隔",
	      "en-US": "Grid Gutter"
	    },
	    "filename": "components/grid/demo/gutter.md",
	    "id": "components-grid-demo-gutter"
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
	      "highlighted": "import { Row<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"gutter-example\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row gutter<span class=\"token operator\">=</span>{<span class=\"token number\">16</span>}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col className<span class=\"token operator\">=</span><span class=\"token string\">\"gutter-row\"</span> span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"gutter-box\"</span><span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col className<span class=\"token operator\">=</span><span class=\"token string\">\"gutter-row\"</span> span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"gutter-box\"</span><span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col className<span class=\"token operator\">=</span><span class=\"token string\">\"gutter-row\"</span> span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"gutter-box\"</span><span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col className<span class=\"token operator\">=</span><span class=\"token string\">\"gutter-row\"</span> span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"gutter-box\"</span><span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    {
	      className: "gutter-example"
	    },
	    React.createElement(
	      _antd.Row,
	      {
	        gutter: 16
	      },
	      React.createElement(
	        _antd.Col,
	        {
	          className: "gutter-row",
	          span: 6
	        },
	        React.createElement(
	          "div",
	          {
	            className: "gutter-box"
	          },
	          "col-6"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          className: "gutter-row",
	          span: 6
	        },
	        React.createElement(
	          "div",
	          {
	            className: "gutter-box"
	          },
	          "col-6"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          className: "gutter-row",
	          span: 6
	        },
	        React.createElement(
	          "div",
	          {
	            className: "gutter-box"
	          },
	          "col-6"
	        )
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          className: "gutter-row",
	          span: 6
	        },
	        React.createElement(
	          "div",
	          {
	            className: "gutter-box"
	          },
	          "col-6"
	        )
	      )
	    )
	  );
	},
	  "style": ".gutter-example .ant-row > div {\n  background: transparent;\n  border: 0;\n}\n.gutter-box {\n  background: #00A0E9;\n  padding: 5px 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.gutter-example</span> <span class=\"token class\">.ant-row</span> > div </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> transparent<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.gutter-box</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#00A0E9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">5</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 859:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "列偏移。"
	      ],
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "offset"
	        ],
	        " 可以将列向右侧偏。例如，",
	        [
	          "code",
	          "offset={4}"
	        ],
	        " 将元素向右侧偏移了 4 个列（column）的宽度。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        [
	          "code",
	          "Offset"
	        ],
	        " can set the column to the right side. For example, using ",
	        [
	          "code",
	          "offset = {4}"
	        ],
	        " can set the element shifted to the right four columns width."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "左右偏移",
	      "en-US": "Column offset"
	    },
	    "filename": "components/grid/demo/offset.md",
	    "id": "components-grid-demo-offset"
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
	      "highlighted": "import { Row<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>} offset<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">8</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>} offset<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span> col<span class=\"token operator\">-</span>offset<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>} offset<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span> col<span class=\"token operator\">-</span>offset<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">12</span>} offset<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">12</span> col<span class=\"token operator\">-</span>offset<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	      _antd.Row,
	      null,
	      React.createElement(
	        _antd.Col,
	        {
	          span: 8
	        },
	        "col-8"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 8,
	          offset: 8
	        },
	        "col-8"
	      )
	    ),
	    React.createElement(
	      _antd.Row,
	      null,
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6,
	          offset: 6
	        },
	        "col-6 col-offset-6"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6,
	          offset: 6
	        },
	        "col-6 col-offset-6"
	      )
	    ),
	    React.createElement(
	      _antd.Row,
	      null,
	      React.createElement(
	        _antd.Col,
	        {
	          span: 12,
	          offset: 6
	        },
	        "col-12 col-offset-6"
	      )
	    )
	  );
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
	        "可以简单配置几种等分栅格和间距。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "A simple playground for column count and gutter."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "栅格配置器",
	      "en-US": "Playground"
	    },
	    "filename": "components/grid/demo/playground.md",
	    "id": "components-grid-demo-playground"
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
	      "highlighted": "import { Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Slider } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass App extends React<span class=\"token punctuation\">.</span>Component {\n  gutters <span class=\"token operator\">=</span> {}<span class=\"token comment\" spellcheck=\"true\">;</span>\n  colCounts <span class=\"token operator\">=</span> {}<span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token function\">super</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> {\n      gutterKey<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      colCountKey<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token punctuation\">[</span><span class=\"token number\">8</span><span class=\"token punctuation\">,</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> <span class=\"token number\">24</span><span class=\"token punctuation\">,</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span> <span class=\"token number\">40</span><span class=\"token punctuation\">,</span> <span class=\"token number\">48</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> { this<span class=\"token punctuation\">.</span>gutters<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> value<span class=\"token comment\" spellcheck=\"true\">; });</span>\n    <span class=\"token punctuation\">[</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> <span class=\"token number\">12</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> { this<span class=\"token punctuation\">.</span>colCounts<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> value<span class=\"token comment\" spellcheck=\"true\">; });</span>\n  }\n  onGutterChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>gutterKey<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ gutterKey }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  onColCountChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>colCountKey<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ colCountKey }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { gutterKey<span class=\"token punctuation\">,</span> colCountKey } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> cols <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> colCount <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>colCounts<span class=\"token punctuation\">[</span>colCountKey<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    let colCode <span class=\"token operator\">=</span> <span class=\"token string\">''</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span>let i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token comment\" spellcheck=\"true\">; i &lt; colCount; i++) {</span>\n      cols<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>Col key<span class=\"token operator\">=</span>{i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>} span<span class=\"token operator\">=</span>{<span class=\"token number\">24</span> <span class=\"token operator\">/</span> colCount}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>Column<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n      colCode <span class=\"token operator\">+=</span> `  <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{${<span class=\"token number\">24</span> <span class=\"token operator\">/</span> colCount}} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\\n`<span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> }}<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>span style<span class=\"token operator\">=</span>{{ marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> }}<span class=\"token operator\">></span>Gutter <span class=\"token punctuation\">(</span>px<span class=\"token punctuation\">)</span><span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'50%'</span> }}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Slider\n              min<span class=\"token operator\">=</span>{<span class=\"token number\">0</span>}\n              max<span class=\"token operator\">=</span>{Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>gutters<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span>}\n              value<span class=\"token operator\">=</span>{gutterKey}\n              onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onGutterChange}\n              marks<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>gutters}\n              <span class=\"token keyword\">step</span><span class=\"token operator\">=</span>{<span class=\"token keyword\">null</span>}\n            <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>span style<span class=\"token operator\">=</span>{{ marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> }}<span class=\"token operator\">></span>Column Count<span class=\"token punctuation\">:</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token string\">'50%'</span> }}<span class=\"token operator\">></span>\n            <span class=\"token operator\">&lt;</span>Slider\n              min<span class=\"token operator\">=</span>{<span class=\"token number\">0</span>}\n              max<span class=\"token operator\">=</span>{Object<span class=\"token punctuation\">.</span><span class=\"token function\">keys</span><span class=\"token punctuation\">(</span>this<span class=\"token punctuation\">.</span>colCounts<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span>}\n              value<span class=\"token operator\">=</span>{colCountKey}\n              onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onColCountChange}\n              marks<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>colCounts}\n              <span class=\"token keyword\">step</span><span class=\"token operator\">=</span>{<span class=\"token keyword\">null</span>}\n            <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Row gutter<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>gutters<span class=\"token punctuation\">[</span>gutterKey<span class=\"token punctuation\">]</span>}<span class=\"token operator\">></span>{cols}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>pre<span class=\"token operator\">></span>{`<span class=\"token operator\">&lt;</span>Row gutter<span class=\"token operator\">=</span>{${this<span class=\"token punctuation\">.</span>gutters<span class=\"token punctuation\">[</span>gutterKey<span class=\"token punctuation\">]</span>}}<span class=\"token operator\">></span>\\n${colCode}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>`}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>pre<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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

	    function App() {
	      _classCallCheck(this, App);

	      var _this = _possibleConstructorReturn(this, _React$Component.call(this));

	      _this.gutters = {};
	      _this.colCounts = {};

	      _this.onGutterChange = function (gutterKey) {
	        _this.setState({
	          gutterKey: gutterKey
	        });
	      };

	      _this.onColCountChange = function (colCountKey) {
	        _this.setState({
	          colCountKey: colCountKey
	        });
	      };

	      _this.state = {
	        gutterKey: 1,
	        colCountKey: 2
	      };
	      [8, 16, 24, 32, 40, 48].forEach(function (value, i) {
	        _this.gutters[i] = value;
	      });
	      [2, 3, 4, 6, 8, 12].forEach(function (value, i) {
	        _this.colCounts[i] = value;
	      });
	      return _this;
	    }

	    App.prototype.render = function render() {
	      var _state = this.state,
	          gutterKey = _state.gutterKey,
	          colCountKey = _state.colCountKey;
	      var cols = [];
	      var colCount = this.colCounts[colCountKey];
	      var colCode = '';

	      for (var i = 0; i < colCount; i++) {
	        cols.push(React.createElement(
	          _antd.Col,
	          {
	            key: i.toString(),
	            span: 24 / colCount
	          },
	          React.createElement(
	            "div",
	            null,
	            "Column"
	          )
	        ));
	        colCode += "  <Col span={" + 24 / colCount + "} />\n";
	      }

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
	          React.createElement(
	            "span",
	            {
	              style: {
	                marginRight: 6
	              }
	            },
	            "Gutter (px): "
	          ),
	          React.createElement(
	            "div",
	            {
	              style: {
	                width: '50%'
	              }
	            },
	            React.createElement(_antd.Slider, {
	              min: 0,
	              max: Object.keys(this.gutters).length - 1,
	              value: gutterKey,
	              onChange: this.onGutterChange,
	              marks: this.gutters,
	              step: null
	            })
	          ),
	          React.createElement(
	            "span",
	            {
	              style: {
	                marginRight: 6
	              }
	            },
	            "Column Count:"
	          ),
	          React.createElement(
	            "div",
	            {
	              style: {
	                width: '50%'
	              }
	            },
	            React.createElement(_antd.Slider, {
	              min: 0,
	              max: Object.keys(this.colCounts).length - 1,
	              value: colCountKey,
	              onChange: this.onColCountChange,
	              marks: this.colCounts,
	              step: null
	            })
	          )
	        ),
	        React.createElement(
	          _antd.Row,
	          {
	            gutter: this.gutters[gutterKey]
	          },
	          cols
	        ),
	        React.createElement(
	          "pre",
	          null,
	          "<Row gutter={" + this.gutters[gutterKey] + "}>\n" + colCode + "</Row>"
	        )
	      );
	    };

	    return App;
	  }(React.Component);

	  return React.createElement(App, null);
	},
	  "style": "#components-grid-demo-playground [class^=\"ant-col-\"] {\n  background: transparent;\n  border: 0;\n}\n#components-grid-demo-playground [class^=\"ant-col-\"] > div {\n  background: #00A0E9;\n  height: 120px;\n  line-height: 120px;\n  font-size: 13px;\n}\n#components-grid-demo-playground pre {\n  background: #f9f9f9;\n  border-radius: 6px;\n  font-size: 13px;\n  padding: 8px 16px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-grid-demo-playground</span> <span class=\"token attribute\">[class^=\"ant-col-\"]</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> transparent<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token id\">#components-grid-demo-playground</span> <span class=\"token attribute\">[class^=\"ant-col-\"]</span> > div </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#00A0E9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">13</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token id\">#components-grid-demo-playground</span> pre </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#f9f9f9</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">6</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">13</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 861:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        [
	          "code",
	          "span"
	        ],
	        " ",
	        [
	          "code",
	          "pull"
	        ],
	        " ",
	        [
	          "code",
	          "push"
	        ],
	        " ",
	        [
	          "code",
	          "offset"
	        ],
	        " ",
	        [
	          "code",
	          "order"
	        ],
	        " 属性可以通过内嵌到 ",
	        [
	          "code",
	          "xs"
	        ],
	        " ",
	        [
	          "code",
	          "sm"
	        ],
	        " ",
	        [
	          "code",
	          "md"
	        ],
	        " ",
	        [
	          "code",
	          "lg"
	        ],
	        " 属性中来使用。"
	      ],
	      [
	        "p",
	        "其中 ",
	        [
	          "code",
	          "xs={6}"
	        ],
	        " 相当于 ",
	        [
	          "code",
	          "xs={{ span: 6 }}"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        [
	          "code",
	          "Span"
	        ],
	        " ",
	        [
	          "code",
	          "pull"
	        ],
	        " ",
	        [
	          "code",
	          "push"
	        ],
	        " ",
	        [
	          "code",
	          "offset"
	        ],
	        " ",
	        [
	          "code",
	          "order"
	        ],
	        " property can be embedded into ",
	        [
	          "code",
	          "xs"
	        ],
	        " ",
	        [
	          "code",
	          "sm"
	        ],
	        " ",
	        [
	          "code",
	          "md"
	        ],
	        " ",
	        [
	          "code",
	          "lg"
	        ],
	        " properties to use,\nwhere ",
	        [
	          "code",
	          "xs = {6}"
	        ],
	        " is equivalent to ",
	        [
	          "code",
	          "xs = {{span: 6}}"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "其他属性的响应式",
	      "en-US": "More responsive"
	    },
	    "filename": "components/grid/demo/reponsive-more.md",
	    "id": "components-grid-demo-reponsive-more"
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
	      "highlighted": "import { Row<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Col xs<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> }} lg<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span> }}<span class=\"token operator\">></span>Col<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Col xs<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">11</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> }} lg<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span> }}<span class=\"token operator\">></span>Col<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Col xs<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> }} lg<span class=\"token operator\">=</span>{{ span<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span> offset<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span> }}<span class=\"token operator\">></span>Col<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Row,
	    null,
	    React.createElement(
	      _antd.Col,
	      {
	        xs: {
	          span: 5,
	          offset: 1
	        },
	        lg: {
	          span: 6,
	          offset: 2
	        }
	      },
	      "Col"
	    ),
	    React.createElement(
	      _antd.Col,
	      {
	        xs: {
	          span: 11,
	          offset: 1
	        },
	        lg: {
	          span: 6,
	          offset: 2
	        }
	      },
	      "Col"
	    ),
	    React.createElement(
	      _antd.Col,
	      {
	        xs: {
	          span: 5,
	          offset: 1
	        },
	        lg: {
	          span: 6,
	          offset: 2
	        }
	      },
	      "Col"
	    )
	  );
	}
	};

/***/ },

/***/ 862:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "参照 Bootstrap 的 ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "http://getbootstrap.com/css/#grid-media-queries"
	          },
	          "响应式设计"
	        ],
	        "，预设四个响应尺寸：",
	        [
	          "code",
	          "xs"
	        ],
	        " ",
	        [
	          "code",
	          "sm"
	        ],
	        " ",
	        [
	          "code",
	          "md"
	        ],
	        " ",
	        [
	          "code",
	          "lg"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Referring to the Bootstrap ",
	        "[responsive design]",
	        " (",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "http://getbootstrap.com/css/#grid-media-queries"
	          },
	          "http://getbootstrap.com/css/#grid-media-queries"
	        ],
	        "), here preset four dimensions: ",
	        [
	          "code",
	          "xs"
	        ],
	        " ",
	        [
	          "code",
	          "sm"
	        ],
	        " ",
	        [
	          "code",
	          "md"
	        ],
	        " ",
	        [
	          "code",
	          "lg"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "响应式布局",
	      "en-US": "Responsive"
	    },
	    "filename": "components/grid/demo/reponsive.md",
	    "id": "components-grid-demo-reponsive"
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
	      "highlighted": "import { Row<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Col xs<span class=\"token operator\">=</span>{<span class=\"token number\">2</span>} sm<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>} md<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>} lg<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>}<span class=\"token operator\">></span>Col<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Col xs<span class=\"token operator\">=</span>{<span class=\"token number\">20</span>} sm<span class=\"token operator\">=</span>{<span class=\"token number\">16</span>} md<span class=\"token operator\">=</span>{<span class=\"token number\">12</span>} lg<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>}<span class=\"token operator\">></span>Col<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Col xs<span class=\"token operator\">=</span>{<span class=\"token number\">2</span>} sm<span class=\"token operator\">=</span>{<span class=\"token number\">4</span>} md<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>} lg<span class=\"token operator\">=</span>{<span class=\"token number\">8</span>}<span class=\"token operator\">></span>Col<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Row,
	    null,
	    React.createElement(
	      _antd.Col,
	      {
	        xs: 2,
	        sm: 4,
	        md: 6,
	        lg: 8
	      },
	      "Col"
	    ),
	    React.createElement(
	      _antd.Col,
	      {
	        xs: 20,
	        sm: 16,
	        md: 12,
	        lg: 8
	      },
	      "Col"
	    ),
	    React.createElement(
	      _antd.Col,
	      {
	        xs: 2,
	        sm: 4,
	        md: 6,
	        lg: 8
	      },
	      "Col"
	    )
	  );
	}
	};

/***/ },

/***/ 863:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "列排序。"
	      ],
	      [
	        "p",
	        "通过使用 ",
	        [
	          "code",
	          "push"
	        ],
	        " 和 ",
	        [
	          "code",
	          "pull"
	        ],
	        " 类就可以很容易的改变列（column）的顺序。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "By using ",
	        [
	          "code",
	          "push"
	        ],
	        " and",
	        [
	          "code",
	          "pull"
	        ],
	        " class you can easily change column order."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "栅格排序",
	      "en-US": "Grid sort"
	    },
	    "filename": "components/grid/demo/sort.md",
	    "id": "components-grid-demo-sort"
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
	      "highlighted": "import { Row<span class=\"token punctuation\">,</span> Col } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Row<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">18</span>} push<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">18</span> col<span class=\"token operator\">-</span>push<span class=\"token operator\">-</span><span class=\"token number\">6</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Col span<span class=\"token operator\">=</span>{<span class=\"token number\">6</span>} pull<span class=\"token operator\">=</span>{<span class=\"token number\">18</span>}<span class=\"token operator\">></span>col<span class=\"token operator\">-</span><span class=\"token number\">6</span> col<span class=\"token operator\">-</span>pull<span class=\"token operator\">-</span><span class=\"token number\">18</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Col<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Row<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	      _antd.Row,
	      null,
	      React.createElement(
	        _antd.Col,
	        {
	          span: 18,
	          push: 6
	        },
	        "col-18 col-push-6"
	      ),
	      React.createElement(
	        _antd.Col,
	        {
	          span: 6,
	          pull: 18
	        },
	        "col-6 col-pull-18"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 1224:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(854),
	    'flex-align': __webpack_require__(855),
	    'flex-order': __webpack_require__(856),
	    'flex': __webpack_require__(857),
	    'gutter': __webpack_require__(858),
	    'offset': __webpack_require__(859),
	    'playground': __webpack_require__(860),
	    'reponsive-more': __webpack_require__(861),
	    'reponsive': __webpack_require__(862),
	    'sort': __webpack_require__(863),
	}

/***/ }

});