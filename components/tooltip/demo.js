webpackJsonp([43,210],{

/***/ 1079:
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
	        "By specifying ",
	        [
	          "code",
	          "arrowPointAtCenter"
	        ],
	        " prop, the arrow will point to the center of the target element."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "箭头指向",
	      "en-US": "Arrow pointing at the center"
	    },
	    "filename": "components/tooltip/demo/arrow-point-at-center.md",
	    "id": "components-tooltip-demo-arrow-point-at-center"
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
	      "highlighted": "import { Tooltip<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"topLeft\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Prompt Text\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Align edge <span class=\"token operator\">/</span> 边缘对齐<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"topLeft\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Prompt Text\"</span> arrowPointAtCenter<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Arrow points <span class=\"token keyword\">to</span> center <span class=\"token operator\">/</span> 箭头指向中心<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	      _antd.Tooltip,
	      {
	        placement: "topLeft",
	        title: "Prompt Text"
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Align edge / 边缘对齐"
	      )
	    ),
	    React.createElement(
	      _antd.Tooltip,
	      {
	        placement: "topLeft",
	        title: "Prompt Text",
	        arrowPointAtCenter: true
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Arrow points to center / 箭头指向中心"
	      )
	    )
	  );
	},
	  "style": "\n.code-box-demo .ant-btn {\n  margin-right: 1em;\n  margin-bottom: 1em;\n}\n"
	};

/***/ },

/***/ 1080:
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
	        "The simplest usage."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/tooltip/demo/basic.md",
	    "id": "components-tooltip-demo-basic"
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
	      "highlighted": "import { Tooltip } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Tooltip title<span class=\"token operator\">=</span><span class=\"token string\">\"prompt text\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>Tooltip will show when mouse enter<span class=\"token punctuation\">.</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Tooltip,
	    {
	      title: "prompt text"
	    },
	    React.createElement(
	      "span",
	      null,
	      "Tooltip will show when mouse enter."
	    )
	  );
	}
	};

/***/ },

/***/ 1081:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "位置有 12 个方向。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The ToolTip has 12 placements choice."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "位置",
	      "en-US": "Placement"
	    },
	    "filename": "components/tooltip/demo/placement.md",
	    "id": "components-tooltip-demo-placement"
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
	      "highlighted": "import { Tooltip } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> <span class=\"token operator\">&lt;</span>span<span class=\"token operator\">></span>prompt text<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>span<span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">60</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"topLeft\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>TL<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"top\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Top<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"topRight\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>TR<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">60</span><span class=\"token punctuation\">,</span> float<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"leftTop\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>LT<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"left\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Left<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"leftBottom\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>LB<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">60</span><span class=\"token punctuation\">,</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">270</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"rightTop\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>RT<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"right\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Right<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"rightBottom\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>RB<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">60</span><span class=\"token punctuation\">,</span> clear<span class=\"token punctuation\">:</span> <span class=\"token string\">'both'</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"bottomLeft\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>BL<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"bottom\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>Bottom<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tooltip placement<span class=\"token operator\">=</span><span class=\"token string\">\"bottomRight\"</span> title<span class=\"token operator\">=</span>{text}<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"#\"</span><span class=\"token operator\">></span>BR<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var text = React.createElement(
	    "span",
	    null,
	    "prompt text"
	  );
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginLeft: 60
	        }
	      },
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "topLeft",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "TL"
	        )
	      ),
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "top",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "Top"
	        )
	      ),
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "topRight",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "TR"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          width: 60,
	          float: 'left'
	        }
	      },
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "leftTop",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "LT"
	        )
	      ),
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "left",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "Left"
	        )
	      ),
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "leftBottom",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "LB"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          width: 60,
	          marginLeft: 270
	        }
	      },
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "rightTop",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "RT"
	        )
	      ),
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "right",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "Right"
	        )
	      ),
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "rightBottom",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "RB"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginLeft: 60,
	          clear: 'both'
	        }
	      },
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "bottomLeft",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "BL"
	        )
	      ),
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "bottom",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "Bottom"
	        )
	      ),
	      React.createElement(
	        _antd.Tooltip,
	        {
	          placement: "bottomRight",
	          title: text
	        },
	        React.createElement(
	          "a",
	          {
	            href: "#"
	          },
	          "BR"
	        )
	      )
	    )
	  );
	},
	  "style": "\n#components-tooltip-demo-placement .code-box-demo a {\n  display: inline-block;\n  line-height: 32px;\n  height: 32px;\n  width: 60px;\n  font-size: 14px;\n  text-align: center;\n  background: #f5f5f5;\n  margin-right: 1em;\n  margin-bottom: 1em;\n  border-radius: 6px;\n}\n"
	};

/***/ },

/***/ 1238:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'arrow-point-at-center': __webpack_require__(1079),
	    'basic': __webpack_require__(1080),
	    'placement': __webpack_require__(1081),
	}

/***/ }

});