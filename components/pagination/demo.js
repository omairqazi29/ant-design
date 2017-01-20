webpackJsonp([9,210],{

/***/ 928:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "基础分页。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Basic pagination."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/pagination/demo/basic.md",
	    "id": "components-pagination-demo-basic"
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
	      "highlighted": "import { Pagination } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Pagination defaultCurrent<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} total<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Pagination, {
	    defaultCurrent: 1,
	    total: 50
	  });
	}
	};

/***/ },

/***/ 929:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "改变每页显示条目数。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Change ",
	        [
	          "code",
	          "pageSize"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "改变",
	      "en-US": "Changer"
	    },
	    "filename": "components/pagination/demo/changer.md",
	    "id": "components-pagination-demo-changer"
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
	      "highlighted": "import { Pagination } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onShowSizeChange</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">,</span> pageSize<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">,</span> pageSize<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Pagination showSizeChanger onShowSizeChange<span class=\"token operator\">=</span>{onShowSizeChange} defaultCurrent<span class=\"token operator\">=</span>{<span class=\"token number\">3</span>} total<span class=\"token operator\">=</span>{<span class=\"token number\">500</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onShowSizeChange(current, pageSize) {
	    console.log(current, pageSize);
	  }

	  return React.createElement(_antd.Pagination, {
	    showSizeChanger: true,
	    onShowSizeChange: onShowSizeChange,
	    defaultCurrent: 3,
	    total: 500
	  });
	}
	};

/***/ },

/***/ 930:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "受控制的页码。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Controlled page number."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 8,
	    "title": {
	      "zh-CN": "受控",
	      "en-US": "Controlled"
	    },
	    "filename": "components/pagination/demo/controlled.md",
	    "id": "components-pagination-demo-controlled"
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
	      "highlighted": "import { Pagination } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> Container <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span>{\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return {\n      current<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>page<span class=\"token punctuation\">)</span> {\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>page<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      current<span class=\"token punctuation\">:</span> page<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token operator\">&lt;</span>Pagination current<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>onChange} total<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }<span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Container <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Container = React.createClass({
	    displayName: "Container",
	    getInitialState: function getInitialState() {
	      return {
	        current: 3
	      };
	    },
	    onChange: function onChange(page) {
	      console.log(page);
	      this.setState({
	        current: page
	      });
	    },
	    render: function render() {
	      return React.createElement(_antd.Pagination, {
	        current: this.state.current,
	        onChange: this.onChange,
	        total: 50
	      });
	    }
	  });
	  return React.createElement(Container, null);
	}
	};

/***/ },

/***/ 931:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "快速跳转到某一页。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Jump to a page directly."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "跳转",
	      "en-US": "Jumper"
	    },
	    "filename": "components/pagination/demo/jump.md",
	    "id": "components-pagination-demo-jump"
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
	      "highlighted": "import { Pagination } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>pageNumber<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Page: '</span><span class=\"token punctuation\">,</span> pageNumber<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Pagination showQuickJumper defaultCurrent<span class=\"token operator\">=</span>{<span class=\"token number\">2</span>} total<span class=\"token operator\">=</span>{<span class=\"token number\">500</span>} onChange<span class=\"token operator\">=</span>{onChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function onChange(pageNumber) {
	    console.log('Page: ', pageNumber);
	  }

	  return React.createElement(_antd.Pagination, {
	    showQuickJumper: true,
	    defaultCurrent: 2,
	    total: 500,
	    onChange: onChange
	  });
	}
	};

/***/ },

/***/ 932:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "迷你版本。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Mini size pagination."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "迷你",
	      "en-US": "Mini size"
	    },
	    "filename": "components/pagination/demo/mini.md",
	    "id": "components-pagination-demo-mini"
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
	      "highlighted": "import { Pagination } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">showTotal</span><span class=\"token punctuation\">(</span>total<span class=\"token punctuation\">)</span> {\n  return `Total ${total} items`<span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Pagination size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> total<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Pagination size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> total<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} showSizeChanger showQuickJumper <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Pagination size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> total<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} showTotal<span class=\"token operator\">=</span>{showTotal} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function showTotal(total) {
	    return "Total " + total + " items";
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Pagination, {
	      size: "small",
	      total: 50
	    }),
	    React.createElement("br", null),
	    React.createElement(_antd.Pagination, {
	      size: "small",
	      total: 50,
	      showSizeChanger: true,
	      showQuickJumper: true
	    }),
	    React.createElement("br", null),
	    React.createElement(_antd.Pagination, {
	      size: "small",
	      total: 50,
	      showTotal: showTotal
	    })
	  );
	}
	};

/***/ },

/***/ 933:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "更多分页。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "More pages."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "更多",
	      "en-US": "More"
	    },
	    "filename": "components/pagination/demo/more.md",
	    "id": "components-pagination-demo-more"
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
	      "highlighted": "import { Pagination } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Pagination defaultCurrent<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>} total<span class=\"token operator\">=</span>{<span class=\"token number\">500</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Pagination, {
	    defaultCurrent: 1,
	    total: 500
	  });
	}
	};

/***/ },

/***/ 934:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "简单的翻页。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Simple mode."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "简洁",
	      "en-US": "Simple mode"
	    },
	    "filename": "components/pagination/demo/simple.md",
	    "id": "components-pagination-demo-simple"
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
	      "highlighted": "import { Pagination } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Pagination simple defaultCurrent<span class=\"token operator\">=</span>{<span class=\"token number\">2</span>} total<span class=\"token operator\">=</span>{<span class=\"token number\">50</span>} <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(_antd.Pagination, {
	    simple: true,
	    defaultCurrent: 2,
	    total: 50
	  });
	}
	};

/***/ },

/***/ 935:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "通过设置 ",
	        [
	          "code",
	          "showTotal"
	        ],
	        " 展示总共有多少数据。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "You can show the total number of data by setting ",
	        [
	          "code",
	          "showTotal"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 9,
	    "title": {
	      "zh-CN": "总数",
	      "en-US": "Total number"
	    },
	    "filename": "components/pagination/demo/total.md",
	    "id": "components-pagination-demo-total"
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
	      "highlighted": "import { Pagination } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n<span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Pagination\n    total<span class=\"token operator\">=</span>{<span class=\"token number\">85</span>}\n    showTotal<span class=\"token operator\">=</span>{total <span class=\"token operator\">=</span><span class=\"token operator\">></span> `Total ${total} items`}\n    pageSize<span class=\"token operator\">=</span>{<span class=\"token number\">20</span>}\n    defaultCurrent<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>br <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Pagination\n    total<span class=\"token operator\">=</span>{<span class=\"token number\">85</span>}\n    showTotal<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span>total<span class=\"token punctuation\">,</span> range<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> `${range<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span>}<span class=\"token operator\">-</span>${range<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span>} of ${total} items`}\n    pageSize<span class=\"token operator\">=</span>{<span class=\"token number\">20</span>}\n    defaultCurrent<span class=\"token operator\">=</span>{<span class=\"token number\">1</span>}\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(_antd.Pagination, {
	      total: 85,
	      showTotal: function showTotal(total) {
	        return "Total " + total + " items";
	      },
	      pageSize: 20,
	      defaultCurrent: 1
	    }),
	    React.createElement("br", null),
	    React.createElement(_antd.Pagination, {
	      total: 85,
	      showTotal: function showTotal(total, range) {
	        return range[0] + "-" + range[1] + " of " + total + " items";
	      },
	      pageSize: 20,
	      defaultCurrent: 1
	    })
	  );
	}
	};

/***/ },

/***/ 1219:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(928),
	    'changer': __webpack_require__(929),
	    'controlled': __webpack_require__(930),
	    'jump': __webpack_require__(931),
	    'mini': __webpack_require__(932),
	    'more': __webpack_require__(933),
	    'simple': __webpack_require__(934),
	    'total': __webpack_require__(935),
	}

/***/ }

});