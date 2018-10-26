webpackJsonp([16],{

/***/ 1841:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(2274),
    'changer': __webpack_require__(2275),
    'controlled': __webpack_require__(2276),
    'itemRender': __webpack_require__(2277),
    'jump': __webpack_require__(2278),
    'mini': __webpack_require__(2279),
    'more': __webpack_require__(2280),
    'simple': __webpack_require__(2281),
    'total': __webpack_require__(2282),
}

/***/ }),

/***/ 2274:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(_antd.Pagination, {
    defaultCurrent: 1,
    total: 50
  });
}
};

/***/ }),

/***/ 2275:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onShowSizeChange</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">,</span> pageSize<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">,</span> pageSize<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">showSizeChanger</span> <span class=\"token attr-name\">onShowSizeChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onShowSizeChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">3</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">500</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ }),

/***/ 2276:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    current<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>page<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>page<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      current<span class=\"token punctuation\">:</span> page<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">current</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>current<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _antd = __webpack_require__(30);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        current: 3
      }, _this.onChange = function (page) {
        console.log(page);

        _this.setState({
          current: page
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        return React.createElement(_antd.Pagination, {
          current: this.state.current,
          onChange: this.onChange,
          total: 50
        });
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ }),

/***/ 2277:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "修改上一步和下一步为文字链接。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Use text link for prev and next button."
      ]
    ]
  },
  "meta": {
    "order": 10,
    "title": {
      "zh-CN": "上一步和下一步",
      "en-US": "Prev and next"
    },
    "filename": "components/pagination/demo/itemRender.md",
    "id": "components-pagination-demo-itemRender"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">itemRender</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">,</span> originalElement<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>type <span class=\"token operator\">===</span> <span class=\"token string\">'prev'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span><span class=\"token punctuation\">></span></span>Previous<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>type <span class=\"token operator\">===</span> <span class=\"token string\">'next'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span><span class=\"token punctuation\">></span></span>Next<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> originalElement<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">500</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">itemRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>itemRender<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return React.createElement(
        "a",
        null,
        "Previous"
      );
    }

    if (type === 'next') {
      return React.createElement(
        "a",
        null,
        "Next"
      );
    }

    return originalElement;
  }

  return React.createElement(_antd.Pagination, {
    total: 500,
    itemRender: itemRender
  });
}
};

/***/ }),

/***/ 2278:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>pageNumber<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Page: '</span><span class=\"token punctuation\">,</span> pageNumber<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">showQuickJumper</span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">500</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ }),

/***/ 2279:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">showTotal</span><span class=\"token punctuation\">(</span>total<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token template-string\"><span class=\"token string\">`Total </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>total<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> items`</span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">showSizeChanger</span> <span class=\"token attr-name\">showQuickJumper</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">showTotal</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>showTotal<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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
    React.createElement(_antd.Pagination, {
      size: "small",
      total: 50,
      showSizeChanger: true,
      showQuickJumper: true
    }),
    React.createElement(_antd.Pagination, {
      size: "small",
      total: 50,
      showTotal: showTotal
    })
  );
},
  "style": "\n#components-pagination-demo-mini .ant-pagination:not(:last-child) {\n  margin-bottom: 24px;\n}\n"
};

/***/ }),

/***/ 2280:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">6</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">500</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(_antd.Pagination, {
    defaultCurrent: 6,
    total: 500
  });
}
};

/***/ }),

/***/ 2281:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">simple</span> <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">50</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(_antd.Pagination, {
    simple: true,
    defaultCurrent: 2,
    total: 50
  });
}
};

/***/ }),

/***/ 2282:
/***/ (function(module, exports, __webpack_require__) {

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
          "href": "#zh-CN",
          "title": "zh-CN"
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
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Pagination <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span>\n      <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">85</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">showTotal</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>total <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`Total </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>total<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> items`</span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">pageSize</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">20</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span>\n      <span class=\"token attr-name\">total</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">85</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">showTotal</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>total<span class=\"token punctuation\">,</span> range<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>range<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>range<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> of </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>total<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> items`</span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">pageSize</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">20</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">defaultCurrent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

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

/***/ })

});