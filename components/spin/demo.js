webpackJsonp([25],{

/***/ 1868:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(2346),
    'custom-indicator': __webpack_require__(2347),
    'delayAndDebounce': __webpack_require__(2348),
    'inside': __webpack_require__(2349),
    'nested': __webpack_require__(2350),
    'size': __webpack_require__(2351),
    'tip': __webpack_require__(2352),
}

/***/ }),

/***/ 2346:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "一个简单的 loading 状态。"
      ]
    ],
    "en-US": [
      [
        "p",
        "A simple loading status."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本用法",
      "en-US": "basic Usage"
    },
    "filename": "components/spin/demo/basic.md",
    "id": "components-spin-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(_antd.Spin, null);
}
};

/***/ }),

/***/ 2347:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用自定义指示符。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Use custom loading indicator."
      ]
    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "自定义指示符",
      "en-US": "Custom spinning indicator"
    },
    "filename": "components/spin/demo/custom-indicator.md",
    "id": "components-spin-demo-custom-indicator"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> antIcon <span class=\"token operator\">=</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>loading<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">spin</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">indicator</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>antIcon<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  var antIcon = React.createElement(_antd.Icon, {
    type: "loading",
    style: {
      fontSize: 24
    },
    spin: true
  });
  return React.createElement(_antd.Spin, {
    indicator: antIcon
  });
}
};

/***/ }),

/***/ 2348:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "延迟显示 loading 效果。当 spinning 状态在 ",
        [
          "code",
          "delay"
        ],
        " 时间内结束，则不显示 loading 状态。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Specifies a delay for loading state. If ",
        [
          "code",
          "spinning"
        ],
        " ends during delay, loading status won't appear."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "延迟",
      "en-US": "delay"
    },
    "filename": "components/spin/demo/delayAndDebounce.md",
    "id": "components-spin-demo-delayAndDebounce"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin<span class=\"token punctuation\">,</span> Alert<span class=\"token punctuation\">,</span> Switch <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Card</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span>\n\n  toggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> container <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n        <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Alert</span> <span class=\"token attr-name\">message</span> <span class=\"token attr-name\">title\"</span>\n        <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Further</span> <span class=\"token attr-name\">details</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">context</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">this</span> <span class=\"token attr-name\">alert.\"</span>\n        <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">spinning</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">delay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">500</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>container<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Spin</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Loading state：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>toggle<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Card</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Card);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        loading: false
      }, _this.toggle = function (value) {
        _this.setState({
          loading: value
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Card, [{
      key: "render",
      value: function render() {
        var container = React.createElement(_antd.Alert, {
          message: "Alert message title",
          description: "Further details about the context of this alert.",
          type: "info"
        });
        return React.createElement(
          "div",
          null,
          React.createElement(
            _antd.Spin,
            {
              spinning: this.state.loading,
              delay: 500
            },
            container
          ),
          React.createElement(
            "div",
            {
              style: {
                marginTop: 16
              }
            },
            "Loading state：",
            React.createElement(_antd.Switch, {
              checked: this.state.loading,
              onChange: this.toggle
            })
          )
        );
      }
    }]);

    return Card;
  }(React.Component);

  return React.createElement(Card, null);
}
};

/***/ }),

/***/ 2349:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "放入一个容器中。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Spin in a container."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "容器",
      "en-US": "Inside a container"
    },
    "filename": "components/spin/demo/inside.md",
    "id": "components-spin-demo-inside"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(
    "div",
    {
      className: "example"
    },
    React.createElement(_antd.Spin, null)
  );
},
  "style": ".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.example</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span>,<span class=\"token number\">0</span>,<span class=\"token number\">0</span>,<span class=\"token number\">0.05</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ 2350:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以直接把内容内嵌到 ",
        [
          "code",
          "Spin"
        ],
        " 中，将现有容器变为加载状态。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Embedding content into ",
        [
          "code",
          "Spin"
        ],
        " will alter it into loading state."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "卡片加载中",
      "en-US": "Embedded mode"
    },
    "filename": "components/spin/demo/nested.md",
    "id": "components-spin-demo-nested"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin<span class=\"token punctuation\">,</span> Switch<span class=\"token punctuation\">,</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Card</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span>\n\n  toggle <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">spinning</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n            <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Alert</span> <span class=\"token attr-name\">message</span> <span class=\"token attr-name\">title\"</span>\n            <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Further</span> <span class=\"token attr-name\">details</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">context</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">this</span> <span class=\"token attr-name\">alert.\"</span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Spin</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Loading state：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>toggle<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Card</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Card);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        loading: false
      }, _this.toggle = function (value) {
        _this.setState({
          loading: value
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Card, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            _antd.Spin,
            {
              spinning: this.state.loading
            },
            React.createElement(_antd.Alert, {
              message: "Alert message title",
              description: "Further details about the context of this alert.",
              type: "info"
            })
          ),
          React.createElement(
            "div",
            {
              style: {
                marginTop: 16
              }
            },
            "Loading state：",
            React.createElement(_antd.Switch, {
              checked: this.state.loading,
              onChange: this.toggle
            })
          )
        );
      }
    }]);

    return Card;
  }(React.Component);

  return React.createElement(Card, null);
}
};

/***/ }),

/***/ 2351:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "小的用于文本加载，默认用于卡片容器级加载，大的用于",
        [
          "strong",
          "页面级"
        ],
        "加载。"
      ]
    ],
    "en-US": [
      [
        "p",
        "A small ",
        [
          "code",
          "Spin"
        ],
        " use in loading text, default ",
        [
          "code",
          "Spin"
        ],
        " use in loading card-level block, and large ",
        [
          "code",
          "Spin"
        ],
        " use in loading ",
        [
          "strong",
          "page"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "各种大小",
      "en-US": "Size"
    },
    "filename": "components/spin/demo/size.md",
    "id": "components-spin-demo-size"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(
    "div",
    null,
    React.createElement(_antd.Spin, {
      size: "small"
    }),
    React.createElement(_antd.Spin, null),
    React.createElement(_antd.Spin, {
      size: "large"
    })
  );
},
  "style": "\n.ant-spin {\n  margin-right: 16px;\n}\n"
};

/***/ }),

/***/ 2352:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "自定义描述文案。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Customized description content."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "自定义描述文案",
      "en-US": "Customized description"
    },
    "filename": "components/spin/demo/tip.md",
    "id": "components-spin-demo-tip"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin<span class=\"token punctuation\">,</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">tip</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Loading...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Alert</span> <span class=\"token attr-name\">message</span> <span class=\"token attr-name\">title\"</span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Further</span> <span class=\"token attr-name\">details</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">context</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">this</span> <span class=\"token attr-name\">alert.\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Spin</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(
    _antd.Spin,
    {
      tip: "Loading..."
    },
    React.createElement(_antd.Alert, {
      message: "Alert message title",
      description: "Further details about the context of this alert.",
      type: "info"
    })
  );
}
};

/***/ })

});