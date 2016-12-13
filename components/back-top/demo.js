webpackJsonp([42,204],{

/***/ 472:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = getRequestAnimationFrame;
	function getRequestAnimationFrame() {
	    if (typeof window === 'undefined') {
	        return function () {};
	    }
	    if (window.requestAnimationFrame) {
	        return window.requestAnimationFrame;
	    }
	    var prefix = ['moz', 'ms', 'webkit'].filter(function (key) {
	        return key + 'RequestAnimationFrame' in window;
	    })[0];
	    return prefix ? window[prefix + 'RequestAnimationFrame'] : function (callback) {
	        return setTimeout(callback, 1000 / 60);
	    };
	}
	module.exports = exports['default'];

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcAnimate = __webpack_require__(29);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _addEventListener = __webpack_require__(138);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _omit = __webpack_require__(23);

	var _omit2 = _interopRequireDefault(_omit);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _getScroll = __webpack_require__(473);

	var _getScroll2 = _interopRequireDefault(_getScroll);

	var _getRequestAnimationFrame = __webpack_require__(472);

	var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reqAnimFrame = (0, _getRequestAnimationFrame2.default)();
	var currentScrollTop = function currentScrollTop() {
	    return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
	};
	var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
	    var cc = c - b;
	    t /= d / 2;
	    if (t < 1) {
	        return cc / 2 * t * t * t + b;
	    } else {
	        return cc / 2 * ((t -= 2) * t * t + 2) + b;
	    }
	};
	function noop() {}
	function getDefaultTarget() {
	    return typeof window !== 'undefined' ? window : null;
	}

	var BackTop = function (_React$Component) {
	    (0, _inherits3.default)(BackTop, _React$Component);

	    function BackTop(props) {
	        (0, _classCallCheck3.default)(this, BackTop);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.scrollToTop = function (e) {
	            var scrollTop = currentScrollTop();
	            var startTime = Date.now();
	            var frameFunc = function frameFunc() {
	                var timestamp = Date.now();
	                var time = timestamp - startTime;
	                _this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
	                if (time < 450) {
	                    reqAnimFrame(frameFunc);
	                }
	            };
	            reqAnimFrame(frameFunc);
	            (_this.props.onClick || noop)(e);
	        };
	        _this.handleScroll = function () {
	            var _this$props = _this.props,
	                visibilityHeight = _this$props.visibilityHeight,
	                _this$props$target = _this$props.target,
	                target = _this$props$target === undefined ? getDefaultTarget : _this$props$target;

	            var scrollTop = (0, _getScroll2.default)(target(), true);
	            _this.setState({
	                visible: scrollTop > visibilityHeight
	            });
	        };
	        _this.state = {
	            visible: false
	        };
	        return _this;
	    }

	    BackTop.prototype.setScrollTop = function setScrollTop(value) {
	        var targetNode = (this.props.target || getDefaultTarget)();
	        if (targetNode === window) {
	            document.body.scrollTop = value;
	            document.documentElement.scrollTop = value;
	        } else {
	            targetNode.scrollTop = value;
	        }
	    };

	    BackTop.prototype.componentDidMount = function componentDidMount() {
	        this.handleScroll();
	        this.scrollEvent = (0, _addEventListener2.default)((this.props.target || getDefaultTarget)(), 'scroll', this.handleScroll);
	    };

	    BackTop.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.scrollEvent) {
	            this.scrollEvent.remove();
	        }
	    };

	    BackTop.prototype.render = function render() {
	        var _props = this.props,
	            _props$prefixCls = _props.prefixCls,
	            prefixCls = _props$prefixCls === undefined ? 'ant-back-top' : _props$prefixCls,
	            _props$className = _props.className,
	            className = _props$className === undefined ? '' : _props$className,
	            children = _props.children;

	        var classString = (0, _classnames2.default)(prefixCls, className);
	        var defaultElement = _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-content' },
	            _react2.default.createElement(_icon2.default, { className: prefixCls + '-icon', type: 'to-top' })
	        );
	        // fix https://fb.me/react-unknown-prop
	        var divProps = (0, _omit2.default)(this.props, ['prefixCls', 'className', 'children', 'visibilityHeight']);
	        var backTopBtn = this.state.visible ? _react2.default.createElement(
	            'div',
	            (0, _extends3.default)({}, divProps, { className: classString, onClick: this.scrollToTop }),
	            children || defaultElement
	        ) : null;
	        return _react2.default.createElement(
	            _rcAnimate2.default,
	            { component: '', transitionName: 'fade' },
	            backTopBtn
	        );
	    };

	    return BackTop;
	}(_react2.default.Component);

	exports.default = BackTop;

	BackTop.defaultProps = {
	    visibilityHeight: 400
	};
	module.exports = exports['default'];

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(935);

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1444),
	    'custom': __webpack_require__(1445),
	}

/***/ },

/***/ 935:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1444:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(661);

	var _backTop = __webpack_require__(660);

	var _backTop2 = _interopRequireDefault(_backTop);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的用法。"]],
	    "en-US": [["p", "The most basic usage."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> BackTop <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BackTop</span> <span class=\"token punctuation\">/></span></span>\n    Scroll down to see the bottom<span class=\"token operator\">-</span>right\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>strong</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'rgba(64, 64, 64, 0.6)'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span> gray <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>strong</span><span class=\"token punctuation\">></span></span>\n    button<span class=\"token punctuation\">.</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_backTop2.default, null),
	      'Scroll down to see the bottom-right',
	      _react2.default.createElement(
	        'strong',
	        { style: { color: 'rgba(64, 64, 64, 0.6)' } },
	        ' gray '
	      ),
	      'button.'
	    );
	  }
	};

/***/ },

/***/ 1445:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(661);

	var _backTop = __webpack_require__(660);

	var _backTop2 = _interopRequireDefault(_backTop);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "可以自定义回到顶部按钮的样式，限制宽高：", ["code", "40px * 40px"], "。"]],
	    "en-US": [["p", "You can customize the style of the button, just note the size limit: no more than ", ["code", "40px * 40px"], "."]]
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
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> BackTop <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BackTop</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-back-top-inner<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>UP<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>BackTop</span><span class=\"token punctuation\">></span></span>\n    Scroll down to see the bottom<span class=\"token operator\">-</span>right\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>strong</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#57c5f7'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span> blue <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>strong</span><span class=\"token punctuation\">></span></span>\n    button<span class=\"token punctuation\">.</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _backTop2.default,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'ant-back-top-inner' },
	          'UP'
	        )
	      ),
	      'Scroll down to see the bottom-right',
	      _react2.default.createElement(
	        'strong',
	        { style: { color: '#57c5f7' } },
	        ' blue '
	      ),
	      'button.'
	    );
	  },
	  "style": "#components-back-top-demo-custom .ant-back-top {\n  bottom: 100px;\n}\n#components-back-top-demo-custom .ant-back-top-inner {\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 4px;\n  background-color: #57c5f7;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-back-top-demo-custom</span> <span class=\"token class\">.ant-back-top</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token id\">#components-back-top-demo-custom</span> <span class=\"token class\">.ant-back-top-inner</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#57c5f7</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">20</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ }

});