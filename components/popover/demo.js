webpackJsonp([28,210],{

/***/ 944:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "设置了 ",
	        [
	          "code",
	          "arrowPointAtCenter"
	        ],
	        " 后，箭头将指向目标元素的中心。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The arrow points to the center of the target element, which set ",
	        [
	          "code",
	          "arrowPointAtCenter"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "箭头指向",
	      "en-US": "Arrow pointing"
	    },
	    "filename": "components/popover/demo/arrow-point-at-center.md",
	    "id": "components-popover-demo-arrow-point-at-center"
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
	      "highlighted": "import { Popover<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Title<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> content <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"topLeft\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Align edge <span class=\"token operator\">/</span> 边缘对齐<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"topLeft\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} arrowPointAtCenter<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Arrow points <span class=\"token keyword\">to</span> center <span class=\"token operator\">/</span> 箭头指向中心<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var text = React.createElement(
	    "span",
	    null,
	    "Title"
	  );
	  var content = React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    )
	  );
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Popover,
	      {
	        placement: "topLeft",
	        title: text,
	        content: content
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Align edge / 边缘对齐"
	      )
	    ),
	    React.createElement(
	      _antd.Popover,
	      {
	        placement: "topLeft",
	        title: text,
	        content: content,
	        arrowPointAtCenter: true
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Arrow points to center / 箭头指向中心"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 945:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "最简单的用法，浮层的大小由内容区域决定。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The most basic example. The size of the floating layer depends on the contents region."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/popover/demo/basic.md",
	    "id": "components-popover-demo-basic"
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
	      "highlighted": "import { Popover<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> content <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Popover content<span class=\"token operator\">=</span>{content} title<span class=\"token operator\">=</span><span class=\"token string\">\"Title\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>Hover me<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var content = React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    )
	  );
	  return React.createElement(
	    _antd.Popover,
	    {
	      content: content,
	      title: "Title"
	    },
	    React.createElement(
	      _antd.Button,
	      {
	        type: "primary"
	      },
	      "Hover me"
	    )
	  );
	}
	};

/***/ },

/***/ 946:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "visible"
	        ],
	        " 属性控制浮层显示。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Use ",
	        [
	          "code",
	          "visible"
	        ],
	        " prop to control the display of the card."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "从浮层内关闭",
	      "en-US": "Controlling the close of the dialog"
	    },
	    "filename": "components/popover/demo/control.md",
	    "id": "components-popover-demo-control"
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
	      "highlighted": "import { Popover<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">hide</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleVisibleChange</span><span class=\"token punctuation\">(</span>visible<span class=\"token punctuation\">)</span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ visible }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Popover\n        content<span class=\"token operator\">=</span>{<span class=\"token operator\">&lt;</span>a onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>hide}<span class=\"token operator\">></span>Close<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>}\n        title<span class=\"token operator\">=</span><span class=\"token string\">\"Title\"</span>\n        trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span>\n        visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible}\n        onVisibleChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleVisibleChange}\n      <span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>Cilck me<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	        visible: false
	      };
	    },
	    hide: function hide() {
	      this.setState({
	        visible: false
	      });
	    },
	    handleVisibleChange: function handleVisibleChange(visible) {
	      this.setState({
	        visible: visible
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        _antd.Popover,
	        {
	          content: React.createElement(
	            "a",
	            {
	              onClick: this.hide
	            },
	            "Close"
	          ),
	          title: "Title",
	          trigger: "click",
	          visible: this.state.visible,
	          onVisibleChange: this.handleVisibleChange
	        },
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary"
	          },
	          "Cilck me"
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 947:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "位置有十二个方向。"
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
	        " options available."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "位置",
	      "en-US": "Placement"
	    },
	    "filename": "components/popover/demo/placement.md",
	    "id": "components-popover-demo-placement"
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
	      "highlighted": "import { Popover<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Title<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> content <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> buttonWidth <span class=\"token operator\">=</span> <span class=\"token number\">70</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"demo\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> buttonWidth<span class=\"token punctuation\">,</span> whiteSpace<span class=\"token punctuation\">:</span> <span class=\"token string\">'nowrap'</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"topLeft\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>TL<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"top\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Top<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"topRight\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>TR<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> buttonWidth<span class=\"token punctuation\">,</span> float<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"leftTop\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>LT<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"left\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Left<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"leftBottom\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>LB<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> buttonWidth<span class=\"token punctuation\">,</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>buttonWidth <span class=\"token operator\">*</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> <span class=\"token number\">24</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"rightTop\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>RT<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"right\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Right<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"rightBottom\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>RB<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> buttonWidth<span class=\"token punctuation\">,</span> clear<span class=\"token punctuation\">:</span> <span class=\"token string\">'both'</span><span class=\"token punctuation\">,</span> whiteSpace<span class=\"token punctuation\">:</span> <span class=\"token string\">'nowrap'</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"bottomLeft\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>BL<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"bottom\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Bottom<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Popover placement<span class=\"token operator\">=</span><span class=\"token string\">\"bottomRight\"</span> title<span class=\"token operator\">=</span>{text} content<span class=\"token operator\">=</span>{content} trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>BR<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var text = React.createElement(
	    "span",
	    null,
	    "Title"
	  );
	  var content = React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    )
	  );
	  var buttonWidth = 70;
	  return React.createElement(
	    "div",
	    {
	      className: "demo"
	    },
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginLeft: buttonWidth,
	          whiteSpace: 'nowrap'
	        }
	      },
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "topLeft",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "TL"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "top",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Top"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "topRight",
	          title: text,
	          content: content,
	          trigger: "click"
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
	          width: buttonWidth,
	          float: 'left'
	        }
	      },
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "leftTop",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "LT"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "left",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Left"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "leftBottom",
	          title: text,
	          content: content,
	          trigger: "click"
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
	          width: buttonWidth,
	          marginLeft: buttonWidth * 4 + 24
	        }
	      },
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "rightTop",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "RT"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "right",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Right"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "rightBottom",
	          title: text,
	          content: content,
	          trigger: "click"
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
	          marginLeft: buttonWidth,
	          clear: 'both',
	          whiteSpace: 'nowrap'
	        }
	      },
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "bottomLeft",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "BL"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "bottom",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Bottom"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "bottomRight",
	          title: text,
	          content: content,
	          trigger: "click"
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
	  "style": "\n.code-box-demo .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n#components-popover-demo-placement .ant-btn {\n  width: 70px;\n}\n"
	};

/***/ },

/***/ 948:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "鼠标移入、聚集、点击。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Mouse to click, focus and move in."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "三种触发方式",
	      "en-US": "Three ways to trigger"
	    },
	    "filename": "components/popover/demo/triggerType.md",
	    "id": "components-popover-demo-triggerType"
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
	      "highlighted": "import { Popover<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> content <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>p<span class=\"token operator\">></span>Content<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>p<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popover content<span class=\"token operator\">=</span>{content} title<span class=\"token operator\">=</span><span class=\"token string\">\"Title\"</span> trigger<span class=\"token operator\">=</span><span class=\"token string\">\"hover\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Hover me<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popover content<span class=\"token operator\">=</span>{content} title<span class=\"token operator\">=</span><span class=\"token string\">\"Title\"</span> trigger<span class=\"token operator\">=</span><span class=\"token string\">\"focus\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Focus me<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Popover content<span class=\"token operator\">=</span>{content} title<span class=\"token operator\">=</span><span class=\"token string\">\"Title\"</span> trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Click me<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popover<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var content = React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    )
	  );
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Popover,
	      {
	        content: content,
	        title: "Title",
	        trigger: "hover"
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Hover me"
	      )
	    ),
	    React.createElement(
	      _antd.Popover,
	      {
	        content: content,
	        title: "Title",
	        trigger: "focus"
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Focus me"
	      )
	    ),
	    React.createElement(
	      _antd.Popover,
	      {
	        content: content,
	        title: "Title",
	        trigger: "click"
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Click me"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 1221:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'arrow-point-at-center': __webpack_require__(944),
	    'basic': __webpack_require__(945),
	    'control': __webpack_require__(946),
	    'placement': __webpack_require__(947),
	    'triggerType': __webpack_require__(948),
	}

/***/ }

});