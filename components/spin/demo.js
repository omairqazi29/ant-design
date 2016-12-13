webpackJsonp([13,204],{

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

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

	var _rcSwitch = __webpack_require__(159);

	var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Switch = function (_React$Component) {
	    (0, _inherits3.default)(Switch, _React$Component);

	    function Switch() {
	        (0, _classCallCheck3.default)(this, Switch);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Switch.prototype.render = function render() {
	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            size = _props.size,
	            _props$className = _props.className,
	            className = _props$className === undefined ? '' : _props$className;

	        var classes = (0, _classnames2.default)(className, (0, _defineProperty3.default)({}, prefixCls + '-small', size === 'small'));
	        return _react2.default.createElement(_rcSwitch2.default, (0, _extends3.default)({}, this.props, { className: classes }));
	    };

	    return Switch;
	}(_react2.default.Component);

	exports.default = Switch;

	Switch.defaultProps = {
	    prefixCls: 'ant-switch',
	    size: 'default'
	};
	Switch.propTypes = {
	    prefixCls: _react.PropTypes.string,
	    size: _react.PropTypes.oneOf(['small', 'default']),
	    className: _react.PropTypes.string
	};
	module.exports = exports['default'];

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(88);

/***/ },

/***/ 88:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

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

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _slicedToArray2 = __webpack_require__(15);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _rcAnimate = __webpack_require__(29);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _isCssAnimationSupported = __webpack_require__(206);

	var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	var _omit = __webpack_require__(23);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Spin = function (_React$Component) {
	    (0, _inherits3.default)(Spin, _React$Component);

	    function Spin(props) {
	        (0, _classCallCheck3.default)(this, Spin);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        var spinning = props.spinning;
	        _this.state = {
	            spinning: spinning
	        };
	        return _this;
	    }

	    Spin.prototype.isNestedPattern = function isNestedPattern() {
	        return !!(this.props && this.props.children);
	    };

	    Spin.prototype.componentDidMount = function componentDidMount() {
	        if (!(0, _isCssAnimationSupported2.default)()) {
	            // Show text in IE8/9
	            (0, _reactDom.findDOMNode)(this).className += ' ' + this.props.prefixCls + '-show-text';
	        }
	    };

	    Spin.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.debounceTimeout) {
	            clearTimeout(this.debounceTimeout);
	        }
	    };

	    Spin.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _this2 = this;

	        var currentSpinning = this.props.spinning;
	        var spinning = nextProps.spinning;
	        if (this.debounceTimeout) {
	            clearTimeout(this.debounceTimeout);
	        }
	        if (currentSpinning && !spinning) {
	            this.debounceTimeout = setTimeout(function () {
	                return _this2.setState({ spinning: spinning });
	            }, 300);
	        } else {
	            this.setState({ spinning: spinning });
	        }
	    };

	    Spin.prototype.render = function render() {
	        var _classNames;

	        var _splitObject = (0, _splitObject4.default)(this.props, ['className', 'size', 'prefixCls', 'tip']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            className = _splitObject2$.className,
	            size = _splitObject2$.size,
	            prefixCls = _splitObject2$.prefixCls,
	            tip = _splitObject2$.tip,
	            restProps = _splitObject2[1];

	        var spinning = this.state.spinning;

	        var spinClassName = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3.default)(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3.default)(_classNames, prefixCls + '-spinning', spinning), (0, _defineProperty3.default)(_classNames, prefixCls + '-show-text', !!this.props.tip), _classNames), className);
	        // fix https://fb.me/react-unknown-prop
	        var divProps = (0, _omit2.default)(restProps, ['spinning']);
	        var spinElement = _react2.default.createElement(
	            'div',
	            (0, _extends3.default)({}, divProps, { className: spinClassName }),
	            _react2.default.createElement(
	                'span',
	                { className: prefixCls + '-dot' },
	                _react2.default.createElement('i', null),
	                _react2.default.createElement('i', null),
	                _react2.default.createElement('i', null),
	                _react2.default.createElement('i', null)
	            ),
	            tip ? _react2.default.createElement(
	                'div',
	                { className: prefixCls + '-text' },
	                tip
	            ) : null
	        );
	        if (this.isNestedPattern()) {
	            var _classNames2;

	            var containerClassName = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-container', true), (0, _defineProperty3.default)(_classNames2, prefixCls + '-blur', spinning), _classNames2));
	            return _react2.default.createElement(
	                _rcAnimate2.default,
	                (0, _extends3.default)({}, divProps, { component: 'div', className: prefixCls + '-nested-loading', transitionName: 'fade' }),
	                spinning && _react2.default.createElement(
	                    'div',
	                    { key: 'loading' },
	                    spinElement
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: containerClassName, key: 'container' },
	                    this.props.children
	                )
	            );
	        }
	        return spinElement;
	    };

	    return Spin;
	}(_react2.default.Component);

	exports.default = Spin;

	Spin.defaultProps = {
	    prefixCls: 'ant-spin',
	    spinning: true,
	    size: 'default'
	};
	Spin.propTypes = {
	    prefixCls: _react.PropTypes.string,
	    className: _react.PropTypes.string,
	    spinning: _react.PropTypes.bool,
	    size: _react.PropTypes.oneOf(['small', 'default', 'large'])
	};
	module.exports = exports['default'];

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(254);

/***/ },

/***/ 206:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var animation = void 0;
	function isCssAnimationSupported() {
	    if (animation !== undefined) {
	        return animation;
	    }
	    var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
	    var elm = document.createElement('div');
	    if (elm.style.animationName !== undefined) {
	        animation = true;
	    }
	    if (animation !== undefined) {
	        for (var i = 0; i < domPrefixes.length; i++) {
	            if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
	                animation = true;
	                break;
	            }
	        }
	    }
	    animation = animation || false;
	    return animation;
	}
	exports.default = isCssAnimationSupported;
	module.exports = exports['default'];

/***/ },

/***/ 247:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 254:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 776:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1695),
	    'inside': __webpack_require__(1696),
	    'nested': __webpack_require__(1697),
	    'size': __webpack_require__(1698),
	    'tip': __webpack_require__(1699),
	}

/***/ },

/***/ 1695:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(148);

	var _spin = __webpack_require__(147);

	var _spin2 = _interopRequireDefault(_spin);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "一个简单的 loading 状态。"]],
	    "en-US": [["p", "A simple loading status."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_spin2.default, null);
	  }
	};

/***/ },

/***/ 1696:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(148);

	var _spin = __webpack_require__(147);

	var _spin2 = _interopRequireDefault(_spin);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "放入一个容器中。"]],
	    "en-US": [["p", "Spin in a container."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'example' },
	      _react2.default.createElement(_spin2.default, null)
	    );
	  },
	  "style": ".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.example</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span>,<span class=\"token number\">0</span>,<span class=\"token number\">0</span>,<span class=\"token number\">0.05</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px <span class=\"token number\">50</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1697:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(71);

	var _switch = __webpack_require__(70);

	var _switch2 = _interopRequireDefault(_switch);

	var _style5 = __webpack_require__(148);

	var _spin = __webpack_require__(147);

	var _spin2 = _interopRequireDefault(_spin);

	var _style6 = __webpack_require__(103);

	var _alert = __webpack_require__(102);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以直接把内容内嵌到 ", ["code", "Spin"], " 中，将现有容器变为加载状态。"]],
	    "en-US": [["p", "Embedding content into ", ["code", "Spin"], " will alter it into loading state."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin<span class=\"token punctuation\">,</span> Switch<span class=\"token punctuation\">,</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Card <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">toggle</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> container <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Alert</span> <span class=\"token attr-name\">message</span> <span class=\"token attr-name\">title\"</span>\n        <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Further</span> <span class=\"token attr-name\">details</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">context</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">this</span> <span class=\"token attr-name\">alert.\"</span>\n        <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">spinning</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>container<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Spin</span><span class=\"token punctuation\">></span></span>\n        Loading state：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>toggle<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Card</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Card = _react2.default.createClass({
	      displayName: 'Card',
	      getInitialState: function getInitialState() {
	        return {
	          loading: false };
	      },
	      toggle: function toggle(value) {
	        this.setState({ loading: value });
	      },
	      render: function render() {
	        var container = _react2.default.createElement(_alert2.default, { message: 'Alert message title', description: 'Further details about the context of this alert.', type: 'info' });return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _spin2.default,
	            { spinning: this.state.loading },
	            container
	          ),
	          'Loading state\uFF1A',
	          _react2.default.createElement(_switch2.default, { checked: this.state.loading, onChange: this.toggle })
	        );
	      }
	    });return _react2.default.createElement(Card, null);
	  }
	};

/***/ },

/***/ 1698:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(148);

	var _spin = __webpack_require__(147);

	var _spin2 = _interopRequireDefault(_spin);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "小的用于文本加载，默认用于卡片容器级加载，大的用于", ["strong", "页面级"], "加载。"]],
	    "en-US": [["p", "A small ", ["code", "Spin"], " use in loading text, default ", ["code", "Spin"], " use in loading card-level block, and large ", ["code", "Spin"], " use in loading ", ["strong", "page"], "."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_spin2.default, { size: 'small' }),
	      _react2.default.createElement(_spin2.default, null),
	      _react2.default.createElement(_spin2.default, { size: 'large' })
	    );
	  },
	  "style": "\n.ant-spin {\n  margin-right: 16px;\n}\n"
	};

/***/ },

/***/ 1699:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(148);

	var _spin = __webpack_require__(147);

	var _spin2 = _interopRequireDefault(_spin);

	var _style4 = __webpack_require__(103);

	var _alert = __webpack_require__(102);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义描述文案。"]],
	    "en-US": [["p", "Customized description content."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Spin<span class=\"token punctuation\">,</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">tip</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Loading...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Alert</span> <span class=\"token attr-name\">message</span> <span class=\"token attr-name\">title\"</span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Further</span> <span class=\"token attr-name\">details</span> <span class=\"token attr-name\">about</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">context</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">this</span> <span class=\"token attr-name\">alert.\"</span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Spin</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _spin2.default,
	      { tip: 'Loading...' },
	      _react2.default.createElement(_alert2.default, { message: 'Alert message title', description: 'Further details about the context of this alert.', type: 'info' })
	    );
	  }
	};

/***/ }

});