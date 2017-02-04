webpackJsonp([28,211],{

/***/ 1057:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "基本标签的用法，可以通过添加 ",
	        [
	          "code",
	          "closable"
	        ],
	        " 变为可关闭标签。可关闭标签具有 ",
	        [
	          "code",
	          "onClose"
	        ],
	        " ",
	        [
	          "code",
	          "afterClose"
	        ],
	        " 两个事件。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Usage of basic Tag, and it could be closable by set ",
	        [
	          "code",
	          "closable"
	        ],
	        " property. Closable Tag supports ",
	        [
	          "code",
	          "onClose"
	        ],
	        " ",
	        [
	          "code",
	          "afterClose"
	        ],
	        " events."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/tag/demo/basic.md",
	    "id": "components-tag-demo-basic"
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
	      "highlighted": "import { Tag } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nfunction <span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nfunction <span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> {\n  e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Clicked! But prevent default.'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Tag<span class=\"token operator\">></span>Tag <span class=\"token number\">1</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Tag<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>a href<span class=\"token operator\">=</span><span class=\"token string\">\"https://github.com/ant-design/ant-design/issues/1862\"</span><span class=\"token operator\">></span>Link<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>a<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Tag closable onClose<span class=\"token operator\">=</span>{log}<span class=\"token operator\">></span>Tag <span class=\"token number\">2</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Tag closable onClose<span class=\"token operator\">=</span>{preventDefault}<span class=\"token operator\">></span>Prevent <span class=\"token keyword\">Default</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function log(e) {
	    console.log(e);
	  }

	  function preventDefault(e) {
	    e.preventDefault();
	    console.log('Clicked! But prevent default.');
	  }

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Tag,
	      null,
	      "Tag 1"
	    ),
	    React.createElement(
	      _antd.Tag,
	      null,
	      React.createElement(
	        "a",
	        {
	          href: "https://github.com/ant-design/ant-design/issues/1862"
	        },
	        "Link"
	      )
	    ),
	    React.createElement(
	      _antd.Tag,
	      {
	        closable: true,
	        onClose: log
	      },
	      "Tag 2"
	    ),
	    React.createElement(
	      _antd.Tag,
	      {
	        closable: true,
	        onClose: preventDefault
	      },
	      "Prevent Default"
	    )
	  );
	}
	};

/***/ },

/***/ 1058:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "可通过 Tag.CheckableTag 实现类似 Checkbox 的效果，该组件为完全受控组件，不支持非受控用法。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Tag.CheckableTag works like Checkbox, and it is an absolute controlled component and has no uncontrolled mode."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "可选择",
	      "en-US": "Checkable"
	    },
	    "filename": "components/tag/demo/checkable.md",
	    "id": "components-tag-demo-checkable"
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
	      "highlighted": "import { Tag } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> CheckableTag <span class=\"token operator\">=</span> Tag<span class=\"token punctuation\">.</span>CheckableTag<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass UncontrolledCheckableTag extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> { checked<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> }<span class=\"token comment\" spellcheck=\"true\">;</span>\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>checked<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ checked }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    return <span class=\"token operator\">&lt;</span>CheckableTag {<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>this<span class=\"token punctuation\">.</span>props} checked<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked} onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleChange} <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>CheckableTag<span class=\"token operator\">></span>Unchecked<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>CheckableTag<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>CheckableTag checked<span class=\"token operator\">></span>Checked<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>CheckableTag<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>UncontrolledCheckableTag<span class=\"token operator\">></span>Uncontrolled<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>UncontrolledCheckableTag<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var CheckableTag = _antd.Tag.CheckableTag;

	  var UncontrolledCheckableTag = function (_React$Component) {
	    _inherits(UncontrolledCheckableTag, _React$Component);

	    function UncontrolledCheckableTag() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, UncontrolledCheckableTag);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        checked: false
	      }, _this.handleChange = function (checked) {
	        _this.setState({
	          checked: checked
	        });
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    UncontrolledCheckableTag.prototype.render = function render() {
	      return React.createElement(CheckableTag, _extends({}, this.props, {
	        checked: this.state.checked,
	        onChange: this.handleChange
	      }));
	    };

	    return UncontrolledCheckableTag;
	  }(React.Component);

	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      CheckableTag,
	      null,
	      "Unchecked"
	    ),
	    React.createElement(
	      CheckableTag,
	      {
	        checked: true
	      },
	      "Checked"
	    ),
	    React.createElement(
	      UncontrolledCheckableTag,
	      null,
	      "Uncontrolled"
	    )
	  );
	}
	};

/***/ },

/***/ 1059:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。"
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "预设色彩在 ",
	          [
	            "code",
	            "antd@2.7.0"
	          ],
	          " 之后支持。"
	        ]
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "After ",
	        [
	          "code",
	          "antd@2.7.0"
	        ],
	        ", We preset a series of colorful tag style for different situation usage.\nAnd you can always set it to a hex color string for custom color."
	      ],
	      [
	        "blockquote",
	        [
	          "p",
	          "Preset colors are supported after ",
	          [
	            "code",
	            "antd@2.7.0"
	          ],
	          "."
	        ]
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "多彩标签",
	      "en-US": "Colorful Tag"
	    },
	    "filename": "components/tag/demo/colorful.md",
	    "id": "components-tag-demo-colorful"
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
	      "highlighted": "import { Tag } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"pink\"</span><span class=\"token operator\">></span>pink<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"red\"</span><span class=\"token operator\">></span>red<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"orange\"</span><span class=\"token operator\">></span>orange<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"yellow\"</span><span class=\"token operator\">></span>yellow<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"green\"</span><span class=\"token operator\">></span>green<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"cyan\"</span><span class=\"token operator\">></span>cyan<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"blue\"</span><span class=\"token operator\">></span>blue<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"purple\"</span><span class=\"token operator\">></span>purple<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"pink-inverse\"</span><span class=\"token operator\">></span>pink<span class=\"token operator\">-</span>inverse<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"red-inverse\"</span><span class=\"token operator\">></span>red<span class=\"token operator\">-</span>inverse<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"orange-inverse\"</span><span class=\"token operator\">></span>orange<span class=\"token operator\">-</span>inverse<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"yellow-inverse\"</span><span class=\"token operator\">></span>yellow<span class=\"token operator\">-</span>inverse<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"green-inverse\"</span><span class=\"token operator\">></span>green<span class=\"token operator\">-</span>inverse<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"cyan-inverse\"</span><span class=\"token operator\">></span>cyan<span class=\"token operator\">-</span>inverse<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"blue-inverse\"</span><span class=\"token operator\">></span>blue<span class=\"token operator\">-</span>inverse<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"purple-inverse\"</span><span class=\"token operator\">></span>purple<span class=\"token operator\">-</span>inverse<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>div style<span class=\"token operator\">=</span>{{ marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">24</span> }}<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"#f50\"</span><span class=\"token operator\">></span>#f50<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"#2db7f5\"</span><span class=\"token operator\">></span>#2db7f5<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"#87d068\"</span><span class=\"token operator\">></span>#87d068<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Tag color<span class=\"token operator\">=</span><span class=\"token string\">\"#108ee9\"</span><span class=\"token operator\">></span>#108ee9<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
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
	      "div",
	      null,
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "pink"
	        },
	        "pink"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "red"
	        },
	        "red"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "orange"
	        },
	        "orange"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "yellow"
	        },
	        "yellow"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "green"
	        },
	        "green"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "cyan"
	        },
	        "cyan"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "blue"
	        },
	        "blue"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "purple"
	        },
	        "purple"
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginTop: 24
	        }
	      },
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "pink-inverse"
	        },
	        "pink-inverse"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "red-inverse"
	        },
	        "red-inverse"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "orange-inverse"
	        },
	        "orange-inverse"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "yellow-inverse"
	        },
	        "yellow-inverse"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "green-inverse"
	        },
	        "green-inverse"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "cyan-inverse"
	        },
	        "cyan-inverse"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "blue-inverse"
	        },
	        "blue-inverse"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "purple-inverse"
	        },
	        "purple-inverse"
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginTop: 24
	        }
	      },
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "#f50"
	        },
	        "#f50"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "#2db7f5"
	        },
	        "#2db7f5"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "#87d068"
	        },
	        "#87d068"
	      ),
	      React.createElement(
	        _antd.Tag,
	        {
	          color: "#108ee9"
	        },
	        "#108ee9"
	      )
	    )
	  );
	},
	  "style": ".ant-tag {\n  margin-bottom: 8px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.ant-tag</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1060:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "用数组生成一组标签，可以动态添加和删除，通过监听删除动画结束的事件 ",
	        [
	          "code",
	          "afterClose"
	        ],
	        " 实现。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Generating a set of Tags by array, you can add and remove dynamically.\nIt's based on ",
	        [
	          "code",
	          "afterClose"
	        ],
	        " event, which will be triggered while the close animation end."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "动态添加和删除",
	      "en-US": "Add & Remove Dynamically"
	    },
	    "filename": "components/tag/demo/control.md",
	    "id": "components-tag-demo-control"
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
	      "highlighted": "import { Tag<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Button } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass EditableTagGroup extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Unremovable'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 2'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 3'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  handleClose <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>removedTag<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> tags <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> tag !<span class=\"token operator\">==</span> removedTag<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ tags }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  showInput <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> }<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span>input<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleInputChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ inputValue<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  handleInputConfirm <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> inputValue <span class=\"token operator\">=</span> state<span class=\"token punctuation\">.</span>inputValue<span class=\"token comment\" spellcheck=\"true\">;</span>\n    let tags <span class=\"token operator\">=</span> state<span class=\"token punctuation\">.</span>tags<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>inputValue <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> tags<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">==</span><span class=\"token operator\">=</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> {\n      tags <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>tags<span class=\"token punctuation\">,</span> inputValue<span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    }\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{\n      tags<span class=\"token punctuation\">,</span>\n      inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  saveInputRef <span class=\"token operator\">=</span> input <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span>input <span class=\"token operator\">=</span> input\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { tags<span class=\"token punctuation\">,</span> inputVisible<span class=\"token punctuation\">,</span> inputValue } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        {tags<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n          <span class=\"token keyword\">const</span> isLongTag <span class=\"token operator\">=</span> tag<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">20</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n          <span class=\"token keyword\">const</span> tagElem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Tag key<span class=\"token operator\">=</span>{tag} closable<span class=\"token operator\">=</span>{index !<span class=\"token operator\">==</span> <span class=\"token number\">0</span>} afterClose<span class=\"token operator\">=</span>{<span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">handleClose</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">)</span>}<span class=\"token operator\">></span>\n              {isLongTag <span class=\"token operator\">?</span> `${tag<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span>}<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>` <span class=\"token punctuation\">:</span> tag}\n            <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tag<span class=\"token operator\">></span>\n          <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n          return isLongTag <span class=\"token operator\">?</span> <span class=\"token operator\">&lt;</span>Tooltip title<span class=\"token operator\">=</span>{tag}<span class=\"token operator\">></span>{tagElem}<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Tooltip<span class=\"token operator\">></span> <span class=\"token punctuation\">:</span> tagElem<span class=\"token comment\" spellcheck=\"true\">;</span>\n        }<span class=\"token punctuation\">)</span>}\n        {inputVisible <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token operator\">&lt;</span>Input\n            ref<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>saveInputRef}\n            type<span class=\"token operator\">=</span><span class=\"token string\">\"text\"</span> size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span>\n            style<span class=\"token operator\">=</span>{{ width<span class=\"token punctuation\">:</span> <span class=\"token number\">78</span> }}\n            value<span class=\"token operator\">=</span>{inputValue}\n            onChange<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleInputChange}\n            onBlur<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleInputConfirm}\n            onPressEnter<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>handleInputConfirm}\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token punctuation\">)</span>}\n        {!inputVisible <span class=\"token operator\">&amp;</span><span class=\"token operator\">&amp;</span> <span class=\"token operator\">&lt;</span>Button size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"dashed\"</span> onClick<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>showInput}<span class=\"token operator\">></span><span class=\"token operator\">+</span> New Tag<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>EditableTagGroup <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var EditableTagGroup = function (_React$Component) {
	    _inherits(EditableTagGroup, _React$Component);

	    function EditableTagGroup() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, EditableTagGroup);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        tags: ['Unremovable', 'Tag 2', 'Tag 3'],
	        inputVisible: false,
	        inputValue: ''
	      }, _this.handleClose = function (removedTag) {
	        var tags = _this.state.tags.filter(function (tag) {
	          return tag !== removedTag;
	        });

	        console.log(tags);

	        _this.setState({
	          tags: tags
	        });
	      }, _this.showInput = function () {
	        _this.setState({
	          inputVisible: true
	        }, function () {
	          return _this.input.focus();
	        });
	      }, _this.handleInputChange = function (e) {
	        _this.setState({
	          inputValue: e.target.value
	        });
	      }, _this.handleInputConfirm = function () {
	        var state = _this.state;
	        var inputValue = state.inputValue;
	        var tags = state.tags;

	        if (inputValue && tags.indexOf(inputValue) === -1) {
	          tags = [].concat(_toConsumableArray(tags), [inputValue]);
	        }

	        console.log(tags);

	        _this.setState({
	          tags: tags,
	          inputVisible: false,
	          inputValue: ''
	        });
	      }, _this.saveInputRef = function (input) {
	        return _this.input = input;
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    EditableTagGroup.prototype.render = function render() {
	      var _this2 = this;

	      var _state = this.state,
	          tags = _state.tags,
	          inputVisible = _state.inputVisible,
	          inputValue = _state.inputValue;
	      return React.createElement(
	        "div",
	        null,
	        tags.map(function (tag, index) {
	          var isLongTag = tag.length > 20;
	          var tagElem = React.createElement(
	            _antd.Tag,
	            {
	              key: tag,
	              closable: index !== 0,
	              afterClose: function afterClose() {
	                return _this2.handleClose(tag);
	              }
	            },
	            isLongTag ? tag.slice(0, 20) + "..." : tag
	          );
	          return isLongTag ? React.createElement(
	            _antd.Tooltip,
	            {
	              title: tag
	            },
	            tagElem
	          ) : tagElem;
	        }),
	        inputVisible && React.createElement(_antd.Input, {
	          ref: this.saveInputRef,
	          type: "text",
	          size: "small",
	          style: {
	            width: 78
	          },
	          value: inputValue,
	          onChange: this.handleInputChange,
	          onBlur: this.handleInputConfirm,
	          onPressEnter: this.handleInputConfirm
	        }),
	        !inputVisible && React.createElement(
	          _antd.Button,
	          {
	            size: "small",
	            type: "dashed",
	            onClick: this.showInput
	          },
	          "+ New Tag"
	        )
	      );
	    };

	    return EditableTagGroup;
	  }(React.Component);

	  return React.createElement(EditableTagGroup, null);
	}
	};

/***/ },

/***/ 1061:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "选择你感兴趣的话题。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Select your favourite topics."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "热门标签",
	      "en-US": "Hot Tags"
	    },
	    "filename": "components/tag/demo/hot-tags.md",
	    "id": "components-tag-demo-hot-tags"
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
	      "highlighted": "import { Tag } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> CheckableTag <span class=\"token operator\">=</span> Tag<span class=\"token punctuation\">.</span>CheckableTag<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token keyword\">const</span> tagsFromServer <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Movie'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Books'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Music'</span><span class=\"token punctuation\">]</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nclass HotTags extends React<span class=\"token punctuation\">.</span>Component {\n  state <span class=\"token operator\">=</span> {\n    selectedTags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  }<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> checked<span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { selectedTags } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token keyword\">const</span> nextSelectedTags <span class=\"token operator\">=</span> checked <span class=\"token operator\">?</span>\n            <span class=\"token punctuation\">[</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>selectedTags<span class=\"token punctuation\">,</span> tag<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span>\n            selectedTags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>t <span class=\"token operator\">=</span><span class=\"token operator\">></span> t !<span class=\"token operator\">==</span> tag<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'You are interested in: '</span><span class=\"token punctuation\">,</span> nextSelectedTags<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    this<span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>{ selectedTags<span class=\"token punctuation\">:</span> nextSelectedTags }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n    <span class=\"token keyword\">const</span> { selectedTags } <span class=\"token operator\">=</span> this<span class=\"token punctuation\">.</span>state<span class=\"token comment\" spellcheck=\"true\">;</span>\n    return <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>strong<span class=\"token operator\">></span>Hots<span class=\"token punctuation\">:</span> <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>strong<span class=\"token operator\">></span>\n        {tagsFromServer<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n          <span class=\"token operator\">&lt;</span>CheckableTag\n            key<span class=\"token operator\">=</span>{tag}\n            checked<span class=\"token operator\">=</span>{selectedTags<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span>}\n            onChange<span class=\"token operator\">=</span>{checked <span class=\"token operator\">=</span><span class=\"token operator\">></span> this<span class=\"token punctuation\">.</span><span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> checked<span class=\"token punctuation\">)</span>}\n          <span class=\"token operator\">></span>\n            {tag}\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>CheckableTag<span class=\"token operator\">></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>}\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  }\n}\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>HotTags <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	  var CheckableTag = _antd.Tag.CheckableTag;
	  var tagsFromServer = ['Movie', 'Books', 'Music'];

	  var HotTags = function (_React$Component) {
	    _inherits(HotTags, _React$Component);

	    function HotTags() {
	      var _temp, _this, _ret;

	      _classCallCheck(this, HotTags);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	        selectedTags: []
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    HotTags.prototype.handleChange = function handleChange(tag, checked) {
	      var selectedTags = this.state.selectedTags;
	      var nextSelectedTags = checked ? [].concat(_toConsumableArray(selectedTags), [tag]) : selectedTags.filter(function (t) {
	        return t !== tag;
	      });
	      console.log('You are interested in: ', nextSelectedTags);
	      this.setState({
	        selectedTags: nextSelectedTags
	      });
	    };

	    HotTags.prototype.render = function render() {
	      var _this2 = this;

	      var selectedTags = this.state.selectedTags;
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "strong",
	          null,
	          "Hots: "
	        ),
	        tagsFromServer.map(function (tag) {
	          return React.createElement(
	            CheckableTag,
	            {
	              key: tag,
	              checked: selectedTags.indexOf(tag) > -1,
	              onChange: function onChange(checked) {
	                return _this2.handleChange(tag, checked);
	              }
	            },
	            tag
	          );
	        })
	      );
	    };

	    return HotTags;
	  }(React.Component);

	  return React.createElement(HotTags, null);
	}
	};

/***/ },

/***/ 1236:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1057),
	    'checkable': __webpack_require__(1058),
	    'colorful': __webpack_require__(1059),
	    'control': __webpack_require__(1060),
	    'hot-tags': __webpack_require__(1061),
	}

/***/ }

});