webpackJsonp([39,210],{

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "定时切换下一张。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Timing of scrolling to the next card/picture."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "自动切换",
	      "en-US": "Scroll automatically"
	    },
	    "filename": "components/carousel/demo/autoplay.md",
	    "id": "components-carousel-demo-autoplay"
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
	      "highlighted": "import { Carousel } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Carousel autoplay<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Carousel<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Carousel,
	    {
	      autoplay: true
	    },
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "1"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "2"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "3"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "4"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 780:
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
	        "Basic usage."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/carousel/demo/basic.md",
	    "id": "components-carousel-demo-basic"
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
	      "highlighted": "import { Carousel } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">,</span> c<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>a<span class=\"token punctuation\">,</span> b<span class=\"token punctuation\">,</span> c<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Carousel afterChange<span class=\"token operator\">=</span>{onChange}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Carousel<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onChange(a, b, c) {
	    console.log(a, b, c);
	  }

	  return React.createElement(
	    _antd.Carousel,
	    {
	      afterChange: onChange
	    },
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "1"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "2"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "3"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "4"
	      )
	    )
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
	        "切换效果为渐显。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Slides use fade for transition."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "渐显",
	      "en-US": "Fade in"
	    },
	    "filename": "components/carousel/demo/fade.md",
	    "id": "components-carousel-demo-fade"
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
	      "highlighted": "import { Carousel } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Carousel effect<span class=\"token operator\">=</span><span class=\"token string\">\"fade\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Carousel<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Carousel,
	    {
	      effect: "fade"
	    },
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "1"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "2"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "3"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "4"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "垂直显示。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Vertical pagination."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "垂直",
	      "en-US": "Vertical"
	    },
	    "filename": "components/carousel/demo/vertical.md",
	    "id": "components-carousel-demo-vertical"
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
	      "highlighted": "import { Carousel } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Carousel vertical<span class=\"token operator\">=</span><span class=\"token string\">\"true\"</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">3</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>h3<span class=\"token operator\">></span><span class=\"token number\">4</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h3<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Carousel<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    _antd.Carousel,
	    {
	      vertical: "true"
	    },
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "1"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "2"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "3"
	      )
	    ),
	    React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h3",
	        null,
	        "4"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 1205:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'autoplay': __webpack_require__(779),
	    'basic': __webpack_require__(780),
	    'fade': __webpack_require__(781),
	    'vertical': __webpack_require__(782),
	}

/***/ }

});