webpackJsonp([27,204],{

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

	var _rcAnimate = __webpack_require__(29);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}

	var Alert = function (_React$Component) {
	    (0, _inherits3.default)(Alert, _React$Component);

	    function Alert(props) {
	        (0, _classCallCheck3.default)(this, Alert);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.handleClose = function (e) {
	            e.preventDefault();
	            var dom = _reactDom2.default.findDOMNode(_this);
	            dom.style.height = dom.offsetHeight + 'px';
	            // Magic code
	            // 重复一次后才能正确设置 height
	            dom.style.height = dom.offsetHeight + 'px';
	            _this.setState({
	                closing: false
	            });
	            (_this.props.onClose || noop)(e);
	        };
	        _this.animationEnd = function () {
	            _this.setState({
	                closed: true,
	                closing: true
	            });
	        };
	        _this.state = {
	            closing: true,
	            closed: false
	        };
	        return _this;
	    }

	    Alert.prototype.render = function render() {
	        var _classNames;

	        var _props = this.props,
	            closable = _props.closable,
	            description = _props.description,
	            type = _props.type,
	            _props$prefixCls = _props.prefixCls,
	            prefixCls = _props$prefixCls === undefined ? 'ant-alert' : _props$prefixCls,
	            message = _props.message,
	            closeText = _props.closeText,
	            showIcon = _props.showIcon,
	            banner = _props.banner,
	            _props$className = _props.className,
	            className = _props$className === undefined ? '' : _props$className,
	            style = _props.style;
	        // banner模式默认有 Icon

	        showIcon = showIcon || banner;
	        // banner模式默认为警告
	        type = banner ? 'warning' : type;
	        var iconType = '';
	        switch (type) {
	            case 'success':
	                iconType = 'check-circle';
	                break;
	            case 'info':
	                iconType = 'info-circle';
	                break;
	            case 'error':
	                iconType = 'cross-circle';
	                break;
	            case 'warning':
	                iconType = 'exclamation-circle';
	                break;
	            default:
	                iconType = 'default';
	        }
	        // use outline icon in alert with description
	        if (!!description) {
	            iconType += '-o';
	        }
	        var alertCls = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3.default)(_classNames, prefixCls + '-close', !this.state.closing), (0, _defineProperty3.default)(_classNames, prefixCls + '-with-description', !!description), (0, _defineProperty3.default)(_classNames, prefixCls + '-no-icon', !showIcon), (0, _defineProperty3.default)(_classNames, prefixCls + '-banner', !!banner), _classNames), className);
	        // closeable when closeText is assigned
	        if (closeText) {
	            closable = true;
	        }
	        var closeIcon = closable ? _react2.default.createElement(
	            'a',
	            { onClick: this.handleClose, className: prefixCls + '-close-icon' },
	            closeText || _react2.default.createElement(_icon2.default, { type: 'cross' })
	        ) : null;
	        return this.state.closed ? null : _react2.default.createElement(
	            _rcAnimate2.default,
	            { component: '', showProp: 'data-show', transitionName: prefixCls + '-slide-up', onEnd: this.animationEnd },
	            _react2.default.createElement(
	                'div',
	                { 'data-show': this.state.closing, className: alertCls, style: style },
	                showIcon ? _react2.default.createElement(_icon2.default, { className: prefixCls + '-icon', type: iconType }) : null,
	                _react2.default.createElement(
	                    'span',
	                    { className: prefixCls + '-message' },
	                    message
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { className: prefixCls + '-description' },
	                    description
	                ),
	                closeIcon
	            )
	        );
	    };

	    return Alert;
	}(_react2.default.Component);

	exports.default = Alert;

	Alert.defaultProps = {
	    type: 'info'
	};
	module.exports = exports['default'];

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(247);

/***/ },

/***/ 247:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'banner': __webpack_require__(1427),
	    'basic': __webpack_require__(1428),
	    'closable': __webpack_require__(1429),
	    'close-text': __webpack_require__(1430),
	    'description': __webpack_require__(1431),
	    'icon': __webpack_require__(1432),
	    'style': __webpack_require__(1433),
	}

/***/ },

/***/ 1427:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(103);

	var _alert = __webpack_require__(102);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用作顶部公告时，默认有图标，", ["code", "type"], " 为 'warning'，并有特殊样式。"]],
	    "en-US": [["p", "When ", ["code", "Alert"], " is used as banner, it has particular style, Icon and ", ["code", "type"], "(warning) are specified by default."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "顶部公告",
	      "en-US": "Banner"
	    },
	    "filename": "components/alert/demo/banner.md",
	    "id": "components-alert-demo-banner"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">text\"</span> <span class=\"token attr-name\">banner</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Very</span> <span class=\"token attr-name\">long</span> <span class=\"token attr-name\">warning</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">warning</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">text\"</span> <span class=\"token attr-name\">banner</span> <span class=\"token attr-name\">closable</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_alert2.default, { message: 'Warning text', banner: true }),
	      _react2.default.createElement('br', null),
	      _react2.default.createElement(_alert2.default, { message: 'Very long warning text warning text text text text text text text', banner: true, closable: true })
	    );
	  }
	};

/***/ },

/***/ 1428:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(103);

	var _alert = __webpack_require__(102);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的用法，适用于简短的警告提示。"]],
	    "en-US": [["p", "The simplest usage for short messages."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/alert/demo/basic.md",
	    "id": "components-alert-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_alert2.default, { message: 'Success Text', type: 'success' });
	  }
	};

/***/ },

/***/ 1429:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(103);

	var _alert = __webpack_require__(102);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "显示关闭按钮，点击可关闭警告提示。"]],
	    "en-US": [["p", "To show close button."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "可关闭的警告提示",
	      "en-US": "Closable"
	    },
	    "filename": "components/alert/demo/closable.md",
	    "id": "components-alert-demo-closable"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> onClose <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> <span class=\"token string\">'I was closed.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">TextW</span> <span class=\"token attr-name\">arning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Text</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">TextWarning</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">closable</span>\n    <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onClose<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">closable</span>\n    <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onClose<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var onClose = function onClose(e) {
	      console.log(e, 'I was closed.');
	    };return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_alert2.default, { message: 'Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text', type: 'warning', closable: true, onClose: onClose }),
	      _react2.default.createElement(_alert2.default, { message: 'Error Text', description: 'Error Description Error Description Error Description Error Description Error Description Error Description', type: 'error', closable: true, onClose: onClose })
	    );
	  }
	};

/***/ },

/***/ 1430:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(103);

	var _alert = __webpack_require__(102);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以自定义关闭，自定义的文字会替换原先的关闭 ", ["code", "Icon"], "。"]],
	    "en-US": [["p", "Replace the default icon with customized text."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "自定义关闭",
	      "en-US": "Customized Close Text"
	    },
	    "filename": "components/alert/demo/close-text.md",
	    "id": "components-alert-demo-close-text"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">closeText</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Close</span> <span class=\"token attr-name\">Now\"</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_alert2.default, { message: 'Info Text', type: 'info', closeText: 'Close Now' });
	  }
	};

/***/ },

/***/ 1431:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(103);

	var _alert = __webpack_require__(102);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "含有辅助性文字介绍的警告提示。"]],
	    "en-US": [["p", "Additional description for alert message."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "含有辅助性文字介绍",
	      "en-US": "Description"
	    },
	    "filename": "components/alert/demo/description.md",
	    "id": "components-alert-demo-description"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Success</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Success</span> <span class=\"token attr-name\">Description\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Info</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Info</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Info</span> <span class=\"token attr-name\">Description\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Warning</span> <span class=\"token attr-name\">Description\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Text\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description</span> <span class=\"token attr-name\">Error</span> <span class=\"token attr-name\">Description\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_alert2.default, { message: 'Success Text', description: 'Success Description Success Description Success Description', type: 'success' }),
	      _react2.default.createElement(_alert2.default, { message: 'Info Text', description: 'Info Description Info Description Info Description Info Description', type: 'info' }),
	      _react2.default.createElement(_alert2.default, { message: 'Warning Text', description: 'Warning Description Warning Description Warning Description Warning Description', type: 'warning' }),
	      _react2.default.createElement(_alert2.default, { message: 'Error Text', description: 'Error Description Error Description Error Description Error Description', type: 'error' })
	    );
	  }
	};

/***/ },

/***/ 1432:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(103);

	var _alert = __webpack_require__(102);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可口的图标让信息类型更加醒目。"]],
	    "en-US": [["p", "Decent icon make information more clear and more friendly."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "图标",
	      "en-US": "Icon"
	    },
	    "filename": "components/alert/demo/icon.md",
	    "id": "components-alert-demo-icon"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Tips\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Informational</span> <span class=\"token attr-name\">Notes\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success</span> <span class=\"token attr-name\">tips\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Detailed</span> <span class=\"token attr-name\">description</span> <span class=\"token attr-name\">and</span> <span class=\"token attr-name\">advices</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">successful</span> <span class=\"token attr-name\">copywriting.\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">showIcon</span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Informational</span> <span class=\"token attr-name\">Notes\"</span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Additional</span> <span class=\"token attr-name\">description</span> <span class=\"token attr-name\">and</span> <span class=\"token attr-name\">informations</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">copywriting.\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">showIcon</span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>This</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">a</span> <span class=\"token attr-name\">warning</span> <span class=\"token attr-name\">notice</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">copywriting.\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">showIcon</span>\n  <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n    <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>This</span> <span class=\"token attr-name\">is</span> <span class=\"token attr-name\">an</span> <span class=\"token attr-name\">error</span> <span class=\"token attr-name\">message</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">copywriting.\"</span>\n    <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">showIcon</span>\n  <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_alert2.default, { message: 'Success Tips', type: 'success', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Informational Notes', type: 'info', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Warning', type: 'warning', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Error', type: 'error', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'success tips', description: 'Detailed description and advices about successful copywriting.', type: 'success', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Informational Notes', description: 'Additional description and informations about copywriting.', type: 'info', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Warning', description: 'This is a warning notice about copywriting.', type: 'warning', showIcon: true }),
	      _react2.default.createElement(_alert2.default, { message: 'Error', description: 'This is an error message about copywriting.', type: 'error', showIcon: true })
	    );
	  }
	};

/***/ },

/***/ 1433:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(103);

	var _alert = __webpack_require__(102);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "共有四种样式 ", ["code", "success"], "、", ["code", "info"], "、", ["code", "warning"], "、", ["code", "error"], "。"]],
	    "en-US": [["p", "There are 4 types of Alert: ", ["code", "success"], ", ", ["code", "info"], ", ", ["code", "warning"], ", ", ["code", "error"], "."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "四种样式",
	      "en-US": "More types"
	    },
	    "filename": "components/alert/demo/style.md",
	    "id": "components-alert-demo-style"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error</span> <span class=\"token attr-name\">Text\"</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_alert2.default, { message: 'Success Text', type: 'success' }),
	      _react2.default.createElement(_alert2.default, { message: 'Info Text', type: 'info' }),
	      _react2.default.createElement(_alert2.default, { message: 'Warning Text', type: 'warning' }),
	      _react2.default.createElement(_alert2.default, { message: 'Error Text', type: 'error' })
	    );
	  }
	};

/***/ }

});