webpackJsonp([48],{

/***/ 1756:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'badge': __webpack_require__(2035),
    'basic': __webpack_require__(2036),
    'dynamic': __webpack_require__(2037),
    'type': __webpack_require__(2038),
}

/***/ }),

/***/ 2035:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通常用于消息提示。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Usually used for messages remind."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "带徽标的头像",
      "en-US": "With Badge"
    },
    "filename": "components/avatar/demo/badge.md",
    "id": "components-avatar-demo-badge"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Avatar<span class=\"token punctuation\">,</span> Badge <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>square<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">dot</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>square<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "span",
      {
        style: {
          marginRight: 24
        }
      },
      React.createElement(
        _antd.Badge,
        {
          count: 1
        },
        React.createElement(_antd.Avatar, {
          shape: "square",
          icon: "user"
        })
      )
    ),
    React.createElement(
      "span",
      null,
      React.createElement(
        _antd.Badge,
        {
          dot: true
        },
        React.createElement(_antd.Avatar, {
          shape: "square",
          icon: "user"
        })
      )
    )
  );
}
};

/***/ }),

/***/ 2036:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "头像有三种尺寸，两种形状可选。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Three sizes and two shapes are available."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/avatar/demo/basic.md",
    "id": "components-avatar-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Avatar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">64</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>square<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">64</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>square<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>square<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>square<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement(_antd.Avatar, {
        size: 64,
        icon: "user"
      }),
      React.createElement(_antd.Avatar, {
        size: "large",
        icon: "user"
      }),
      React.createElement(_antd.Avatar, {
        icon: "user"
      }),
      React.createElement(_antd.Avatar, {
        size: "small",
        icon: "user"
      })
    ),
    React.createElement(
      "div",
      null,
      React.createElement(_antd.Avatar, {
        shape: "square",
        size: 64,
        icon: "user"
      }),
      React.createElement(_antd.Avatar, {
        shape: "square",
        size: "large",
        icon: "user"
      }),
      React.createElement(_antd.Avatar, {
        shape: "square",
        icon: "user"
      }),
      React.createElement(_antd.Avatar, {
        shape: "square",
        size: "small",
        icon: "user"
      })
    )
  );
},
  "style": "\n#components-avatar-demo-basic .ant-avatar {\n  margin-top: 16px;\n  margin-right: 16px;\n}\n"
};

/***/ }),

/***/ 2037:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。"
      ]
    ],
    "en-US": [
      [
        "p",
        "For letter type Avatar, when the letters are too long to display, the font size can be automatically adjusted according to the width of the Avatar."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "自动调整字符大小",
      "en-US": "Autoset Font Size"
    },
    "filename": "components/avatar/demo/dynamic.md",
    "id": "components-avatar-demo-dynamic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Avatar<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> UserList <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'U'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Lucy'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tom'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Edward'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> colorList <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'#f56a00'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#7265e6'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#ffbf00'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'#00a2ae'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Autoset</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      user<span class=\"token punctuation\">:</span> UserList<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      color<span class=\"token punctuation\">:</span> colorList<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  changeUser <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> index <span class=\"token operator\">=</span> UserList<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>user<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      user<span class=\"token punctuation\">:</span> index <span class=\"token operator\">&lt;</span> UserList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span> <span class=\"token operator\">?</span> UserList<span class=\"token punctuation\">[</span>index <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span> UserList<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      color<span class=\"token punctuation\">:</span> index <span class=\"token operator\">&lt;</span> colorList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span> <span class=\"token operator\">?</span> colorList<span class=\"token punctuation\">[</span>index <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span> colorList<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> backgroundColor<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>color<span class=\"token punctuation\">,</span> verticalAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'middle'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>user<span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Avatar</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> verticalAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'middle'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>changeUser<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Change\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Autoset</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var UserList = ['U', 'Lucy', 'Tom', 'Edward'];
  var colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

  var Autoset = function (_React$Component) {
    _inherits(Autoset, _React$Component);

    function Autoset(props) {
      _classCallCheck(this, Autoset);

      var _this = _possibleConstructorReturn(this, (Autoset.__proto__ || Object.getPrototypeOf(Autoset)).call(this, props));

      _this.changeUser = function () {
        var index = UserList.indexOf(_this.state.user);

        _this.setState({
          user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
          color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0]
        });
      };

      _this.state = {
        user: UserList[0],
        color: colorList[0]
      };
      return _this;
    }

    _createClass(Autoset, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            _antd.Avatar,
            {
              style: {
                backgroundColor: this.state.color,
                verticalAlign: 'middle'
              },
              size: "large"
            },
            this.state.user
          ),
          React.createElement(
            _antd.Button,
            {
              size: "small",
              style: {
                marginLeft: 16,
                verticalAlign: 'middle'
              },
              onClick: this.changeUser
            },
            "Change"
          )
        );
      }
    }]);

    return Autoset;
  }(React.Component);

  return React.createElement(Autoset, null);
}
};

/***/ }),

/***/ 2038:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "类型",
      "en-US": "Type"
    },
    "filename": "components/avatar/demo/type.md",
    "id": "components-avatar-demo-type"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Avatar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span><span class=\"token punctuation\">></span></span>U<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Avatar</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span><span class=\"token punctuation\">></span></span>USER<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Avatar</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#f56a00'</span><span class=\"token punctuation\">,</span> backgroundColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fde3cf'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>U<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Avatar</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> backgroundColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#87d068'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">icon</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(0);

  var ReactDOM = __webpack_require__(8);

  var _antd = __webpack_require__(30);

  return React.createElement(
    "div",
    null,
    React.createElement(_antd.Avatar, {
      icon: "user"
    }),
    React.createElement(
      _antd.Avatar,
      null,
      "U"
    ),
    React.createElement(
      _antd.Avatar,
      null,
      "USER"
    ),
    React.createElement(_antd.Avatar, {
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    }),
    React.createElement(
      _antd.Avatar,
      {
        style: {
          color: '#f56a00',
          backgroundColor: '#fde3cf'
        }
      },
      "U"
    ),
    React.createElement(_antd.Avatar, {
      style: {
        backgroundColor: '#87d068'
      },
      icon: "user"
    })
  );
},
  "style": "\n#components-avatar-demo-type .ant-avatar {\n  margin-top: 16px;\n  margin-right: 16px;\n}\n"
};

/***/ })

});