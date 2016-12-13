webpackJsonp([35,204],{

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

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.scrollTo = exports.easeInOutCubic = exports.reqAnimFrame = undefined;

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	exports.getDefaultTarget = getDefaultTarget;
	exports.getOffsetTop = getOffsetTop;

	var _getScroll = __webpack_require__(473);

	var _getScroll2 = _interopRequireDefault(_getScroll);

	var _getRequestAnimationFrame = __webpack_require__(472);

	var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reqAnimFrame = exports.reqAnimFrame = (0, _getRequestAnimationFrame2.default)();
	var easeInOutCubic = exports.easeInOutCubic = function easeInOutCubic(t, b, c, d) {
	    var cc = c - b;
	    t /= d / 2;
	    if (t < 1) {
	        return cc / 2 * t * t * t + b;
	    }
	    return cc / 2 * ((t -= 2) * t * t + 2) + b;
	};
	function getDefaultTarget() {
	    return typeof window !== 'undefined' ? window : null;
	}
	function getOffsetTop(element) {
	    if (!element) {
	        return 0;
	    }
	    if (!element.getClientRects().length) {
	        return 0;
	    }
	    var rect = element.getBoundingClientRect();
	    if (rect.width || rect.height) {
	        var doc = element.ownerDocument;
	        var docElem = doc.documentElement;
	        return rect.top - docElem.clientTop;
	    }
	    return rect.top;
	}
	function _scrollTo(href) {
	    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDefaultTarget;
	    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	    var scrollTop = (0, _getScroll2.default)(target(), true);
	    var targetElement = document.getElementById(href.substring(1));
	    if (!targetElement) {
	        return;
	    }
	    var offsetTop = getOffsetTop(targetElement);
	    var targetScrollTop = scrollTop + offsetTop;
	    var startTime = Date.now();
	    var frameFunc = function frameFunc() {
	        var timestamp = Date.now();
	        var time = timestamp - startTime;
	        window.scrollTo(window.pageXOffset, easeInOutCubic(time, scrollTop, targetScrollTop, 450));
	        if (time < 450) {
	            reqAnimFrame(frameFunc);
	        } else {
	            callback();
	        }
	    };
	    reqAnimFrame(frameFunc);
	    history.pushState(null, '', href);
	}
	exports.scrollTo = _scrollTo;

	var AnchorHelper = function () {
	    function AnchorHelper() {
	        (0, _classCallCheck3.default)(this, AnchorHelper);

	        this.links = [];
	        this.currentAnchor = null;
	        this._activeAnchor = '';
	    }

	    AnchorHelper.prototype.addLink = function addLink(link) {
	        if (this.links.indexOf(link) === -1) {
	            this.links.push(link);
	        }
	    };

	    AnchorHelper.prototype.getCurrentActiveAnchor = function getCurrentActiveAnchor() {
	        return this.currentAnchor;
	    };

	    AnchorHelper.prototype.setActiveAnchor = function setActiveAnchor(component) {
	        this.currentAnchor = component;
	    };

	    AnchorHelper.prototype.getCurrentAnchor = function getCurrentAnchor() {
	        var bounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

	        var activeAnchor = '';
	        if (typeof document === 'undefined') {
	            return activeAnchor;
	        }
	        var linksPositions = this.links.map(function (section) {
	            var target = document.getElementById(section.substring(1));
	            if (target && getOffsetTop(target) < bounds) {
	                var top = getOffsetTop(target);
	                if (top <= bounds) {
	                    return {
	                        section: section,
	                        top: top,
	                        bottom: top + target.clientHeight
	                    };
	                }
	            }
	            return null;
	        }).filter(function (section) {
	            return section !== null;
	        });
	        if (linksPositions.length) {
	            var maxSection = linksPositions.reduce(function (prev, curr) {
	                return curr.top > prev.top ? curr : prev;
	            });
	            return maxSection.section;
	        }
	        return '';
	    };

	    AnchorHelper.prototype.scrollTo = function scrollTo(href) {
	        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDefaultTarget;
	        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	        _scrollTo(href, target, callback);
	    };

	    return AnchorHelper;
	}();

	exports.default = AnchorHelper;

/***/ },

/***/ 656:
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

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _addEventListener = __webpack_require__(138);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _AnchorLink = __webpack_require__(1871);

	var _AnchorLink2 = _interopRequireDefault(_AnchorLink);

	var _affix = __webpack_require__(272);

	var _affix2 = _interopRequireDefault(_affix);

	var _anchorHelper = __webpack_require__(655);

	var _anchorHelper2 = _interopRequireDefault(_anchorHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Anchor = function (_React$Component) {
	    (0, _inherits3.default)(Anchor, _React$Component);

	    function Anchor(props) {
	        (0, _classCallCheck3.default)(this, Anchor);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.handleScroll = function () {
	            _this.setState({
	                activeAnchor: _this.anchorHelper.getCurrentAnchor(_this.props.bounds)
	            });
	        };
	        _this.updateInk = function () {
	            var activeAnchor = _this.anchorHelper.getCurrentActiveAnchor();
	            if (activeAnchor) {
	                _this.refs.ink.style.top = activeAnchor.offsetTop + activeAnchor.clientHeight / 2 - 4.5 + 'px';
	            }
	        };
	        _this.clickAnchorLink = function (href, component) {
	            _this._avoidInk = true;
	            _this.refs.ink.style.top = component.offsetTop + component.clientHeight / 2 - 4.5 + 'px';
	            _this.anchorHelper.scrollTo(href, _anchorHelper.getDefaultTarget, function () {
	                _this._avoidInk = false;
	            });
	        };
	        _this.renderAnchorLink = function (child) {
	            var href = child.props.href;

	            if (href) {
	                _this.anchorHelper.addLink(href);
	                return _react2.default.cloneElement(child, {
	                    onClick: _this.clickAnchorLink,
	                    prefixCls: _this.props.prefixCls,
	                    bounds: _this.props.bounds,
	                    affix: _this.props.affix
	                });
	            }
	            return child;
	        };
	        _this.state = {
	            activeAnchor: null,
	            animated: true
	        };
	        _this.anchorHelper = new _anchorHelper2.default();
	        return _this;
	    }

	    Anchor.prototype.getChildContext = function getChildContext() {
	        return {
	            anchorHelper: this.anchorHelper
	        };
	    };

	    Anchor.prototype.componentDidMount = function componentDidMount() {
	        this.handleScroll();
	        this.updateInk();
	        this.scrollEvent = (0, _addEventListener2.default)((this.props.target || _anchorHelper.getDefaultTarget)(), 'scroll', this.handleScroll);
	    };

	    Anchor.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.scrollEvent) {
	            this.scrollEvent.remove();
	        }
	    };

	    Anchor.prototype.componentDidUpdate = function componentDidUpdate() {
	        if (!this._avoidInk) {
	            this.updateInk();
	        }
	    };

	    Anchor.prototype.render = function render() {
	        var _classNames;

	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            offsetTop = _props.offsetTop,
	            style = _props.style,
	            _props$className = _props.className,
	            className = _props$className === undefined ? '' : _props$className,
	            affix = _props.affix;
	        var _state = this.state,
	            activeAnchor = _state.activeAnchor,
	            animated = _state.animated;

	        var inkClass = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-ink-ball', true), (0, _defineProperty3.default)(_classNames, 'animated', animated), (0, _defineProperty3.default)(_classNames, 'visible', !!activeAnchor), _classNames));
	        var wrapperClass = (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-wrapper', true), className);
	        var anchorClass = (0, _classnames2.default)(prefixCls, {
	            'fixed': !affix
	        });
	        var anchorContent = _react2.default.createElement(
	            'div',
	            { className: wrapperClass, style: style },
	            _react2.default.createElement(
	                'div',
	                { className: anchorClass },
	                _react2.default.createElement(
	                    'div',
	                    { className: prefixCls + '-ink' },
	                    _react2.default.createElement('span', { className: inkClass, ref: 'ink' })
	                ),
	                _react2.default.Children.map(this.props.children, this.renderAnchorLink)
	            )
	        );
	        return !affix ? anchorContent : _react2.default.createElement(
	            _affix2.default,
	            { offsetTop: offsetTop },
	            anchorContent
	        );
	    };

	    return Anchor;
	}(_react2.default.Component);

	exports.default = Anchor;

	Anchor.Link = _AnchorLink2.default;
	Anchor.defaultProps = {
	    prefixCls: 'ant-anchor',
	    affix: true
	};
	Anchor.childContextTypes = {
	    anchorHelper: _react2.default.PropTypes.any
	};
	module.exports = exports['default'];

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(933);

/***/ },

/***/ 744:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1436),
	    'fixed': __webpack_require__(1437),
	}

/***/ },

/***/ 933:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1436:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(657);

	var _anchor = __webpack_require__(656);

	var _anchor2 = _interopRequireDefault(_anchor);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的用法。"]],
	    "en-US": [["p", "The simplest usage."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/anchor/demo/basic.md",
	    "id": "components-anchor-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Anchor <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Link <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Anchor<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Anchor</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-basic<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Basic</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-fixed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fixed</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#API<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>API<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Anchor-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Anchor</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Link-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Link</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Anchor</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Link = _anchor2.default.Link;
	    return _react2.default.createElement(
	      _anchor2.default,
	      null,
	      _react2.default.createElement(Link, { href: '#components-anchor-demo-basic', title: 'Basic demo' }),
	      _react2.default.createElement(Link, { href: '#components-anchor-demo-fixed', title: 'Fixed demo' }),
	      _react2.default.createElement(
	        Link,
	        { href: '#API', title: 'API' },
	        _react2.default.createElement(Link, { href: '#Anchor-Props', title: 'Anchor Props' }),
	        _react2.default.createElement(Link, { href: '#Link-Props', title: 'Link Props' })
	      )
	    );
	  },
	  "style": "\n.code-box-demo .ant-affix {\n  z-index: 11;\n}\n"
	};

/***/ },

/***/ 1437:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(657);

	var _anchor = __webpack_require__(656);

	var _anchor2 = _interopRequireDefault(_anchor);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "不浮动，状态不随页面滚动变化。"]],
	    "en-US": [["p", "Do not change state when page is scrolling."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "固定",
	      "en-US": "Fixed Anchor"
	    },
	    "filename": "components/anchor/demo/fixed.md",
	    "id": "components-anchor-demo-fixed"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Anchor <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Link <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Anchor<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Anchor</span> <span class=\"token attr-name\">affix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-basic<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Basic</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#components-anchor-demo-fixed<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Fixed</span> <span class=\"token attr-name\">demo\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#API<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>API<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Anchor-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Anchor</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#Link-Props<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Link</span> <span class=\"token attr-name\">Props\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Anchor</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Link = _anchor2.default.Link;
	    return _react2.default.createElement(
	      _anchor2.default,
	      { affix: false },
	      _react2.default.createElement(Link, { href: '#components-anchor-demo-basic', title: 'Basic demo' }),
	      _react2.default.createElement(Link, { href: '#components-anchor-demo-fixed', title: 'Fixed demo' }),
	      _react2.default.createElement(
	        Link,
	        { href: '#API', title: 'API' },
	        _react2.default.createElement(Link, { href: '#Anchor-Props', title: 'Anchor Props' }),
	        _react2.default.createElement(Link, { href: '#Link-Props', title: 'Link Props' })
	      )
	    );
	  }
	};

/***/ },

/***/ 1871:
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

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _anchorHelper = __webpack_require__(655);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AnchorLink = function (_React$Component) {
	    (0, _inherits3.default)(AnchorLink, _React$Component);

	    function AnchorLink() {
	        (0, _classCallCheck3.default)(this, AnchorLink);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));

	        _this.renderAnchorLink = function (child) {
	            var href = child.props.href;

	            if (href) {
	                _this.context.anchorHelper.addLink(href);
	                return _react2.default.cloneElement(child, {
	                    onClick: _this.props.onClick,
	                    prefixCls: _this.props.prefixCls,
	                    affix: _this.props.affix
	                });
	            }
	            return child;
	        };
	        _this.refsTo = function (component) {
	            _this._component = component;
	        };
	        _this.scrollTo = function (e) {
	            e.preventDefault();
	            var _this$props = _this.props,
	                onClick = _this$props.onClick,
	                href = _this$props.href;
	            var anchorHelper = _this.context.anchorHelper;

	            if (onClick) {
	                onClick(href, _this._component);
	            } else {
	                e.stopPreventDefault();
	                var scrollToFn = anchorHelper ? anchorHelper.scrollTo : _anchorHelper.scrollTo;
	                scrollToFn(href);
	            }
	        };
	        return _this;
	    }

	    AnchorLink.prototype.setActiveAnchor = function setActiveAnchor() {
	        var _props = this.props,
	            bounds = _props.bounds,
	            href = _props.href,
	            affix = _props.affix;
	        var anchorHelper = this.context.anchorHelper;

	        var active = affix && anchorHelper && anchorHelper.getCurrentAnchor(bounds) === href;
	        if (active && anchorHelper) {
	            anchorHelper.setActiveAnchor(this._component);
	        }
	    };

	    AnchorLink.prototype.componentDidMount = function componentDidMount() {
	        this.setActiveAnchor();
	    };

	    AnchorLink.prototype.componentDidUpdate = function componentDidUpdate() {
	        this.setActiveAnchor();
	    };

	    AnchorLink.prototype.render = function render() {
	        var _classNames;

	        var _props2 = this.props,
	            prefixCls = _props2.prefixCls,
	            href = _props2.href,
	            children = _props2.children,
	            title = _props2.title,
	            bounds = _props2.bounds,
	            affix = _props2.affix;
	        var anchorHelper = this.context.anchorHelper;

	        var active = affix && anchorHelper && anchorHelper.getCurrentAnchor(bounds) === href;
	        var cls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-link', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-link-active', active), _classNames));
	        return _react2.default.createElement(
	            'div',
	            { className: cls },
	            _react2.default.createElement(
	                'a',
	                { ref: this.refsTo, className: prefixCls + '-link-title', onClick: this.scrollTo, href: href, title: typeof title === 'string' ? title : '' },
	                title
	            ),
	            _react2.default.Children.map(children, this.renderAnchorLink)
	        );
	    };

	    return AnchorLink;
	}(_react2.default.Component);

	exports.default = AnchorLink;

	AnchorLink.contextTypes = {
	    anchorHelper: _react2.default.PropTypes.any
	};
	AnchorLink.defaultProps = {
	    href: '#',
	    prefixCls: 'ant-anchor'
	};
	module.exports = exports['default'];

/***/ }

});