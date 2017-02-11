webpackJsonp([47,211],{

/***/ 742:
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
	        "The most basic usage."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/back-top/demo/basic.md",
	    "id": "components-back-top-demo-basic"
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
	      "highlighted": "import { BackTop } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>BackTop <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    Scroll down <span class=\"token keyword\">to</span> see the bottom<span class=\"token operator\">-</span>right\n    <span class=\"token operator\">&lt;</span>strong style<span class=\"token operator\">=</span>{{ color<span class=\"token punctuation\">:</span> <span class=\"token string\">'rgba(64, 64, 64, 0.6)'</span> }}<span class=\"token operator\">></span> gray <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>strong<span class=\"token operator\">></span>\n    button<span class=\"token punctuation\">.</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.BackTop, null),
	    "Scroll down to see the bottom-right",
	    React.createElement(
	      "strong",
	      {
	        style: {
	          color: 'rgba(64, 64, 64, 0.6)'
	        }
	      },
	      " gray "
	    ),
	    "button."
	  );
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
	        "可以自定义回到顶部按钮的样式，限制宽高：",
	        [
	          "code",
	          "40px * 40px"
	        ],
	        "。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "You can customize the style of the button, just note the size limit: no more than ",
	        [
	          "code",
	          "40px * 40px"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "自定义样式",
	      "en-US": "Custom style"
	    },
	    "filename": "components/back-top/demo/custom.md",
	    "id": "components-back-top-demo-custom"
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
	      "highlighted": "import { BackTop } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>BackTop<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"ant-back-top-inner\"</span><span class=\"token operator\">></span>UP<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>BackTop<span class=\"token operator\">></span>\n    Scroll down <span class=\"token keyword\">to</span> see the bottom<span class=\"token operator\">-</span>right\n    <span class=\"token operator\">&lt;</span>strong style<span class=\"token operator\">=</span>{{ color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#57c5f7'</span> }}<span class=\"token operator\">></span> blue <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>strong<span class=\"token operator\">></span>\n    button<span class=\"token punctuation\">.</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	      _antd.BackTop,
	      null,
	      React.createElement(
	        "div",
	        {
	          className: "ant-back-top-inner"
	        },
	        "UP"
	      )
	    ),
	    "Scroll down to see the bottom-right",
	    React.createElement(
	      "strong",
	      {
	        style: {
	          color: '#57c5f7'
	        }
	      },
	      " blue "
	    ),
	    "button."
	  );
	},
	  "style": "#components-back-top-demo-custom .ant-back-top {\n  bottom: 100px;\n}\n#components-back-top-demo-custom .ant-back-top-inner {\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 4px;\n  background-color: #57c5f7;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-back-top-demo-custom</span> <span class=\"token class\">.ant-back-top</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token id\">#components-back-top-demo-custom</span> <span class=\"token class\">.ant-back-top-inner</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#57c5f7</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1211:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(742),
	    'custom': __webpack_require__(743),
	}

/***/ }

});