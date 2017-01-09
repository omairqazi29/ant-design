webpackJsonp([27,209],{

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1691),
	    'checkable': __webpack_require__(1692),
	    'colorful': __webpack_require__(1693),
	    'control': __webpack_require__(1694),
	    'hot-tags': __webpack_require__(1695),
	}

/***/ },

/***/ 1691:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(209);

	var _tag = __webpack_require__(208);

	var _tag2 = _interopRequireDefault(_tag);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "基本标签的用法，可以通过添加 ", ["code", "closable"], " 变为可关闭标签。可关闭标签具有 ", ["code", "onClose"], " ", ["code", "afterClose"], " 两个事件。"]],
	    "en-US": [["p", "Usage of basic Tag, and it could be closable by set ", ["code", "closable"], " property. Closable Tag supports ", ["code", "onClose"], " ", ["code", "afterClose"], " events."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Clicked! But prevent default.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span><span class=\"token punctuation\">></span></span>Tag <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>log<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Tag <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">afterClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>log<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Tag <span class=\"token number\">3</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://github.com/ant-design/ant-design/issues/1862<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>preventDefault<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Prevent Default<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function log(e) {
	      console.log(e);
	    }function preventDefault(e) {
	      e.preventDefault();console.log('Clicked! But prevent default.');
	    }return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _tag2.default,
	        null,
	        'Tag 1'
	      ),
	      _react2.default.createElement(
	        _tag2.default,
	        { closable: true, onClose: log },
	        'Tag 2'
	      ),
	      _react2.default.createElement(
	        _tag2.default,
	        { closable: true, afterClose: log },
	        'Tag 3'
	      ),
	      _react2.default.createElement(
	        _tag2.default,
	        { closable: true },
	        _react2.default.createElement(
	          'a',
	          { href: 'https://github.com/ant-design/ant-design/issues/1862' },
	          'Link'
	        )
	      ),
	      _react2.default.createElement(
	        _tag2.default,
	        { closable: true, onClose: preventDefault },
	        'Prevent Default'
	      )
	    );
	  }
	};

/***/ },

/***/ 1692:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(8);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style2 = __webpack_require__(209);

	var _tag = __webpack_require__(208);

	var _tag2 = _interopRequireDefault(_tag);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可通过 Tag.CheckableTag 实现类似 Checkbox 的效果，该组件为完全受控组件，不支持非受控用法。"]],
	    "en-US": [["p", "Tag.CheckableTag works like Checkbox, and it is an absolute controlled component and has no uncontrolled mode."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> CheckableTag <span class=\"token operator\">=</span> Tag<span class=\"token punctuation\">.</span>CheckableTag<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">UncontrolledCheckableTag</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> checked<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>checked<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> checked <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>CheckableTag <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">}</span> checked<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">}</span> onChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CheckableTag</span><span class=\"token punctuation\">></span></span>Unchecked<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>CheckableTag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CheckableTag</span> <span class=\"token attr-name\">checked</span><span class=\"token punctuation\">></span></span>Checked<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>CheckableTag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>UncontrolledCheckableTag</span><span class=\"token punctuation\">></span></span>Uncontrolled<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>UncontrolledCheckableTag</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var CheckableTag = _tag2.default.CheckableTag;
	    var UncontrolledCheckableTag = function (_React$Component) {
	      (0, _inherits3.default)(UncontrolledCheckableTag, _React$Component);

	      function UncontrolledCheckableTag() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, UncontrolledCheckableTag);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { checked: false }, _this.handleChange = function (checked) {
	          _this.setState({ checked: checked });
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      UncontrolledCheckableTag.prototype.render = function render() {
	        return _react2.default.createElement(CheckableTag, (0, _extends3.default)({}, this.props, { checked: this.state.checked, onChange: this.handleChange }));
	      };

	      return UncontrolledCheckableTag;
	    }(_react2.default.Component);

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        CheckableTag,
	        null,
	        'Unchecked'
	      ),
	      _react2.default.createElement(
	        CheckableTag,
	        { checked: true },
	        'Checked'
	      ),
	      _react2.default.createElement(
	        UncontrolledCheckableTag,
	        null,
	        'Uncontrolled'
	      )
	    );
	  }
	};

/***/ },

/***/ 1693:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(209);

	var _tag = __webpack_require__(208);

	var _tag2 = _interopRequireDefault(_tag);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "基本标签可以通过 ", ["code", "color"], " 设置背景色，以提供视觉暗示区分不同目的的标签。"]],
	    "en-US": [["p", "We can set the background color of basic Tag by ", ["code", "color"], ", and it's helpful to tell different Tags."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "多彩标签",
	      "en-US": "Colorful"
	    },
	    "filename": "components/tag/demo/colorful.md",
	    "id": "components-tag-demo-colorful"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#f50<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#f50<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#87d068<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#87d068<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#108ee9<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#108ee9<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _tag2.default,
	        { color: '#f50' },
	        '#f50'
	      ),
	      _react2.default.createElement(
	        _tag2.default,
	        { color: '#87d068' },
	        '#87d068'
	      ),
	      _react2.default.createElement(
	        _tag2.default,
	        { color: '#108ee9' },
	        '#108ee9'
	      )
	    );
	  }
	};

/***/ },

/***/ 1694:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(12);

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(18);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(129);

	var _tooltip = __webpack_require__(110);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _style8 = __webpack_require__(209);

	var _tag = __webpack_require__(208);

	var _tag2 = _interopRequireDefault(_tag);

	var _toConsumableArray2 = __webpack_require__(75);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用数组生成一组标签，可以动态添加和删除，通过监听删除动画结束的事件 ", ["code", "afterClose"], " 实现。"]],
	    "en-US": [["p", "Generating a set of Tags by array, you can add and remove dynamically.\nIt's based on ", ["code", "afterClose"], " event, which will be triggered while the close animation end."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTagGroup</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Unremovable'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 2'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 3'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleClose <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>removedTag<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tags <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> tag <span class=\"token operator\">!==</span> removedTag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  showInput <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleInputChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputValue<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  handleInputConfirm <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> inputValue <span class=\"token operator\">=</span> state<span class=\"token punctuation\">.</span>inputValue<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> tags <span class=\"token operator\">=</span> state<span class=\"token punctuation\">.</span>tags<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>inputValue <span class=\"token operator\">&amp;&amp;</span> tags<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      tags <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>tags<span class=\"token punctuation\">,</span> inputValue<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      tags<span class=\"token punctuation\">,</span>\n      inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  saveInputRef <span class=\"token operator\">=</span> input <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input <span class=\"token operator\">=</span> input\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> tags<span class=\"token punctuation\">,</span> inputVisible<span class=\"token punctuation\">,</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> isLongTag <span class=\"token operator\">=</span> tag<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">const</span> tagElem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">closable</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>index <span class=\"token operator\">!==</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">afterClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleClose</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>isLongTag <span class=\"token operator\">?</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>tag<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">...`</span></span> <span class=\"token punctuation\">:</span> tag<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">return</span> isLongTag <span class=\"token operator\">?</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>tagElem<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">:</span> tagElem<span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>saveInputRef<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">78</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>inputValue<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>dashed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>showInput<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token operator\">+</span> New <span class=\"token class-name\">Tag</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableTagGroup</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var EditableTagGroup = function (_React$Component) {
	      (0, _inherits3.default)(EditableTagGroup, _React$Component);

	      function EditableTagGroup() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, EditableTagGroup);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { tags: ['Unremovable', 'Tag 2', 'Tag 3'], inputVisible: false, inputValue: '' }, _this.handleClose = function (removedTag) {
	          var tags = _this.state.tags.filter(function (tag) {
	            return tag !== removedTag;
	          });console.log(tags);_this.setState({ tags: tags });
	        }, _this.showInput = function () {
	          _this.setState({ inputVisible: true }, function () {
	            return _this.input.focus();
	          });
	        }, _this.handleInputChange = function (e) {
	          _this.setState({ inputValue: e.target.value });
	        }, _this.handleInputConfirm = function () {
	          var state = _this.state;var inputValue = state.inputValue;var tags = state.tags;if (inputValue && tags.indexOf(inputValue) === -1) {
	            tags = [].concat((0, _toConsumableArray3.default)(tags), [inputValue]);
	          }console.log(tags);_this.setState({ tags: tags, inputVisible: false, inputValue: '' });
	        }, _this.saveInputRef = function (input) {
	          return _this.input = input;
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      EditableTagGroup.prototype.render = function render() {
	        var _this2 = this;

	        var _state = this.state,
	            tags = _state.tags,
	            inputVisible = _state.inputVisible,
	            inputValue = _state.inputValue;
	        return _react2.default.createElement(
	          'div',
	          null,
	          tags.map(function (tag, index) {
	            var isLongTag = tag.length > 20;var tagElem = _react2.default.createElement(
	              _tag2.default,
	              { key: tag, closable: index !== 0, afterClose: function afterClose() {
	                  return _this2.handleClose(tag);
	                } },
	              isLongTag ? tag.slice(0, 20) + '...' : tag
	            );return isLongTag ? _react2.default.createElement(
	              _tooltip2.default,
	              { title: tag },
	              tagElem
	            ) : tagElem;
	          }),
	          inputVisible && _react2.default.createElement(_input2.default, { ref: this.saveInputRef, type: 'text', size: 'small', style: { width: 78 }, value: inputValue, onChange: this.handleInputChange, onBlur: this.handleInputConfirm, onPressEnter: this.handleInputConfirm }),
	          !inputVisible && _react2.default.createElement(
	            _button2.default,
	            { size: 'small', type: 'dashed', onClick: this.showInput },
	            '+ New Tag'
	          )
	        );
	      };

	      return EditableTagGroup;
	    }(_react2.default.Component);

	    return _react2.default.createElement(EditableTagGroup, null);
	  }
	};

/***/ },

/***/ 1695:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _toConsumableArray2 = __webpack_require__(75);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style2 = __webpack_require__(209);

	var _tag = __webpack_require__(208);

	var _tag2 = _interopRequireDefault(_tag);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "选择你感兴趣的话题。"]],
	    "en-US": [["p", "Select your favourite topics."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> CheckableTag <span class=\"token operator\">=</span> Tag<span class=\"token punctuation\">.</span>CheckableTag<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> tagsFromServer <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Movie'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Books'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Music'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">HotTags</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    selectedTags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> checked<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> selectedTags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> nextSelectedTags <span class=\"token operator\">=</span> checked <span class=\"token operator\">?</span>\n            <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>selectedTags<span class=\"token punctuation\">,</span> tag<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span>\n            selectedTags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>t <span class=\"token operator\">=</span><span class=\"token operator\">></span> t <span class=\"token operator\">!==</span> tag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'You are interested in: '</span><span class=\"token punctuation\">,</span> nextSelectedTags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedTags<span class=\"token punctuation\">:</span> nextSelectedTags <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> selectedTags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>strong</span><span class=\"token punctuation\">></span></span>Hots<span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>strong</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tagsFromServer<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CheckableTag</span>\n            <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">checked={selectedTags.indexOf(tag)</span> <span class=\"token punctuation\">></span></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span>\n            onChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>checked <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> checked<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token operator\">></span>\n            <span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>CheckableTag</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>HotTags</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var CheckableTag = _tag2.default.CheckableTag;var tagsFromServer = ['Movie', 'Books', 'Music'];
	    var HotTags = function (_React$Component) {
	      (0, _inherits3.default)(HotTags, _React$Component);

	      function HotTags() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, HotTags);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { selectedTags: [] }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      }

	      HotTags.prototype.handleChange = function handleChange(tag, checked) {
	        var selectedTags = this.state.selectedTags;
	        var nextSelectedTags = checked ? [].concat((0, _toConsumableArray3.default)(selectedTags), [tag]) : selectedTags.filter(function (t) {
	          return t !== tag;
	        });console.log('You are interested in: ', nextSelectedTags);this.setState({ selectedTags: nextSelectedTags });
	      };

	      HotTags.prototype.render = function render() {
	        var _this2 = this;

	        var selectedTags = this.state.selectedTags;
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'strong',
	            null,
	            'Hots: '
	          ),
	          tagsFromServer.map(function (tag) {
	            return _react2.default.createElement(
	              CheckableTag,
	              { key: tag, checked: selectedTags.indexOf(tag) > -1, onChange: function onChange(checked) {
	                  return _this2.handleChange(tag, checked);
	                } },
	              tag
	            );
	          })
	        );
	      };

	      return HotTags;
	    }(_react2.default.Component);

	    return _react2.default.createElement(HotTags, null);
	  }
	};

/***/ }

});