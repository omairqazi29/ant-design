webpackJsonp([23,204],{

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

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Breadcrumb = __webpack_require__(474);

	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

	var _BreadcrumbItem = __webpack_require__(273);

	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Breadcrumb2.default.Item = _BreadcrumbItem2.default;
	exports.default = _Breadcrumb2.default;
	module.exports = exports['default'];

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(389);

/***/ },

/***/ 247:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

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

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BreadcrumbItem = function (_React$Component) {
	    (0, _inherits3.default)(BreadcrumbItem, _React$Component);

	    function BreadcrumbItem() {
	        (0, _classCallCheck3.default)(this, BreadcrumbItem);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    BreadcrumbItem.prototype.render = function render() {
	        var _splitObject = (0, _splitObject4.default)(this.props, ['prefixCls', 'separator', 'children']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            prefixCls = _splitObject2$.prefixCls,
	            separator = _splitObject2$.separator,
	            children = _splitObject2$.children,
	            restProps = _splitObject2[1];

	        var link = void 0;
	        if ('href' in this.props) {
	            link = _react2.default.createElement(
	                'a',
	                (0, _extends3.default)({ className: prefixCls + '-link' }, restProps),
	                children
	            );
	        } else {
	            link = _react2.default.createElement(
	                'span',
	                (0, _extends3.default)({ className: prefixCls + '-link' }, restProps),
	                children
	            );
	        }
	        return _react2.default.createElement(
	            'span',
	            null,
	            link,
	            _react2.default.createElement(
	                'span',
	                { className: prefixCls + '-separator' },
	                separator
	            )
	        );
	    };

	    return BreadcrumbItem;
	}(_react2.default.Component);

	exports.default = BreadcrumbItem;

	BreadcrumbItem.defaultProps = {
	    prefixCls: 'ant-breadcrumb',
	    separator: '/'
	};
	BreadcrumbItem.propTypes = {
	    prefixCls: _react2.default.PropTypes.string,
	    separator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
	    href: _react2.default.PropTypes.string
	};
	module.exports = exports['default'];

/***/ },

/***/ 389:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(65);

	var _warning2 = _interopRequireDefault(_warning);

	var _BreadcrumbItem = __webpack_require__(273);

	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;
	function getBreadcrumbName(route, params) {
	    if (!route.breadcrumbName) {
	        return null;
	    }
	    var paramsKeys = Object.keys(params).join('|');
	    var name = route.breadcrumbName.replace(new RegExp(':(' + paramsKeys + ')', 'g'), function (replacement, key) {
	        return params[key] || replacement;
	    });
	    return name;
	}
	function defaultItemRender(route, params, routes, paths) {
	    var isLastItem = routes.indexOf(route) === routes.length - 1;
	    var name = getBreadcrumbName(route, params);
	    return isLastItem ? _react2.default.createElement(
	        'span',
	        null,
	        name
	    ) : _react2.default.createElement(
	        'a',
	        { href: '#/' + paths.join('/') },
	        name
	    );
	}

	var Breadcrumb = function (_React$Component) {
	    (0, _inherits3.default)(Breadcrumb, _React$Component);

	    function Breadcrumb() {
	        (0, _classCallCheck3.default)(this, Breadcrumb);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Breadcrumb.prototype.componentDidMount = function componentDidMount() {
	        var props = this.props;
	        (0, _warning2.default)(!('linkRender' in props || 'nameRender' in props), '`linkRender` and `nameRender` are removed, please use `itemRender` instead, ' + 'see: http://u.ant.design/item-render.');
	    };

	    Breadcrumb.prototype.render = function render() {
	        var crumbs = void 0;
	        var _props = this.props,
	            separator = _props.separator,
	            prefixCls = _props.prefixCls,
	            routes = _props.routes,
	            _props$params = _props.params,
	            params = _props$params === undefined ? {} : _props$params,
	            children = _props.children,
	            _props$itemRender = _props.itemRender,
	            itemRender = _props$itemRender === undefined ? defaultItemRender : _props$itemRender;

	        if (routes && routes.length > 0) {
	            (function () {
	                var paths = [];
	                crumbs = routes.map(function (route) {
	                    route.path = route.path || '';
	                    var path = route.path.replace(/^\//, '');
	                    Object.keys(params).forEach(function (key) {
	                        path = path.replace(':' + key, params[key]);
	                    });
	                    if (path) {
	                        paths.push(path);
	                    }
	                    if (route.breadcrumbName) {
	                        return _react2.default.createElement(
	                            _BreadcrumbItem2.default,
	                            { separator: separator, key: route.breadcrumbName },
	                            itemRender(route, params, routes, paths)
	                        );
	                    }
	                    return null;
	                });
	            })();
	        } else if (children) {
	            crumbs = _react2.default.Children.map(children, function (element, index) {
	                return (0, _react.cloneElement)(element, {
	                    separator: separator,
	                    key: index
	                });
	            });
	        }
	        return _react2.default.createElement(
	            'div',
	            { className: prefixCls },
	            crumbs
	        );
	    };

	    return Breadcrumb;
	}(_react2.default.Component);

	exports.default = Breadcrumb;

	Breadcrumb.defaultProps = {
	    prefixCls: 'ant-breadcrumb',
	    separator: '/'
	};
	Breadcrumb.propTypes = {
	    prefixCls: _react2.default.PropTypes.string,
	    separator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
	    routes: _react2.default.PropTypes.array,
	    params: _react2.default.PropTypes.object,
	    linkRender: _react2.default.PropTypes.func,
	    nameRender: _react2.default.PropTypes.func
	};
	module.exports = exports['default'];

/***/ },

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1458),
	    'router': __webpack_require__(1459),
	    'separator': __webpack_require__(1460),
	    'withIcon': __webpack_require__(1461),
	}

/***/ },

/***/ 1458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(141);

	var _breadcrumb = __webpack_require__(140);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的用法。"]],
	    "en-US": [["p", "The simplest use"]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic Usage"
	    },
	    "filename": "components/breadcrumb/demo/basic.md",
	    "id": "components-breadcrumb-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Breadcrumb <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application Center<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>An Application<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _breadcrumb2.default,
	      null,
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        'Home'
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '' },
	          'Application Center'
	        )
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: '' },
	          'Application List'
	        )
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        'An Application'
	      )
	    );
	  }
	};

/***/ },

/***/ 1459:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(141);

	var _breadcrumb = __webpack_require__(140);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _style4 = __webpack_require__(103);

	var _alert = __webpack_require__(102);

	var _alert2 = _interopRequireDefault(_alert);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(64);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "和 ", ["code", "react-router@2+"], " 进行结合使用。"]],
	    "en-US": [["p", "Used together with ", ["code", "react-router@2+"], "."]]
	  },
	  "meta": {
	    "order": 2,
	    "iframe": true,
	    "title": {
	      "zh-CN": "路由",
	      "en-US": "React Router Integration"
	    },
	    "filename": "components/breadcrumb/demo/router.md",
	    "id": "components-breadcrumb-demo-router"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Router<span class=\"token punctuation\">,</span> Route<span class=\"token punctuation\">,</span> Link<span class=\"token punctuation\">,</span> hashHistory <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-router'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Breadcrumb<span class=\"token punctuation\">,</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Apps <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>app-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application1<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/1/detail<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Detail<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps/2/detail<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Detail<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Home <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> routes<span class=\"token punctuation\">,</span> params<span class=\"token punctuation\">,</span> children <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-nav<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/apps<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">{</span>children <span class=\"token operator\">||</span> <span class=\"token string\">'Home Page'</span><span class=\"token punctuation\">}</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Click</span> <span class=\"token attr-name\">the</span> <span class=\"token attr-name\">navigation</span> <span class=\"token attr-name\">above</span> <span class=\"token attr-name\">to</span> <span class=\"token attr-name\"><span class=\"token namespace\">switch:</span>\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span> <span class=\"token attr-name\">routes</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>routes<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">params</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>params<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Router</span> <span class=\"token attr-name\">history</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>hashHistory<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Route</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>home<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">breadcrumbName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Home<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">path</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>Home<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Route</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>apps<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">breadcrumbName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Application</span> <span class=\"token attr-name\">List\"</span> <span class=\"token attr-name\">path</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>apps<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>Apps<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Route</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>app<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">breadcrumbName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Application:id<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">path</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>:id<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Route</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>detail<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">breadcrumbName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Detail<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">path</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>detail<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Route</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Route</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Route</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Router</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Apps = function Apps() {
	      return _react2.default.createElement(
	        'ul',
	        { className: 'app-list' },
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apps/1' },
	            'Application1'
	          ),
	          '\uFF1A',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apps/1/detail' },
	            'Detail'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apps/2' },
	            'Application2'
	          ),
	          '\uFF1A',
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apps/2/detail' },
	            'Detail'
	          )
	        )
	      );
	    };var Home = function Home(_ref) {
	      var routes = _ref.routes,
	          params = _ref.params,
	          children = _ref.children;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'demo-nav' },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            'Home'
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/apps' },
	            'Application List'
	          )
	        ),
	        children || 'Home Page',
	        _react2.default.createElement(_alert2.default, { style: { margin: '16px 0' }, message: 'Click the navigation above to switch:' }),
	        _react2.default.createElement(_breadcrumb2.default, { routes: routes, params: params })
	      );
	    };
	    return _react2.default.createElement(
	      _reactRouter.Router,
	      { history: _reactRouter.hashHistory },
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { name: 'home', breadcrumbName: 'Home', path: '/', component: Home },
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { name: 'apps', breadcrumbName: 'Application List', path: 'apps', component: Apps },
	          _react2.default.createElement(
	            _reactRouter.Route,
	            { name: 'app', breadcrumbName: 'Application:id', path: ':id' },
	            _react2.default.createElement(_reactRouter.Route, { name: 'detail', breadcrumbName: 'Detail', path: 'detail' })
	          )
	        )
	      )
	    );
	  },
	  "style": "#components-breadcrumb-demo-router iframe {\n  height: 180px;\n}\n.demo-nav {\n  height: 30px;\n  line-height: 30px;\n  margin-bottom: 15px;\n  background: #f8f8f8;\n}\n.demo-nav a {\n  line-height: 30px;\n  padding: 0 10px;\n}\n.app-list {\n  margin-top: 15px;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token id\">#components-breadcrumb-demo-router</span> iframe </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">180</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.demo-nav</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">15</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#f8f8f8</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.demo-nav</span> a </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">30</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">10</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.app-list</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">15</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>",
	  "src": "/demo-0.9632229703434578.html"
	};

/***/ },

/***/ 1460:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(141);

	var _breadcrumb = __webpack_require__(140);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "使用 ", ["code", "separator=\">\""], " 可以自定义分隔符。"]],
	    "en-US": [["p", "The separator can be customized by setting the separator property: separator=\">\""]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "分隔符",
	      "en-US": "Configuring the Separator"
	    },
	    "filename": "components/breadcrumb/demo/separator.md",
	    "id": "components-breadcrumb-demo-separator"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Breadcrumb <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span> <span class=\"token attr-name\">separator=\"</span><span class=\"token punctuation\">></span><span class=\"token attr-name\">\"</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application Center<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Application List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>An Application<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _breadcrumb2.default,
	      { separator: '>' },
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        'Home'
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        { href: '' },
	        'Application Center'
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        { href: '' },
	        'Application List'
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        'An Application'
	      )
	    );
	  }
	};

/***/ },

/***/ 1461:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(141);

	var _breadcrumb = __webpack_require__(140);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _style4 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "图标放在文字前面。"]],
	    "en-US": [["p", "The icon should be placed in front of the text."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "带有图标的",
	      "en-US": "With an Icon"
	    },
	    "filename": "components/breadcrumb/demo/withIcon.md",
	    "id": "components-breadcrumb-demo-withIcon"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Breadcrumb<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>home<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>Application List<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n      Application\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Breadcrumb</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      _breadcrumb2.default,
	      null,
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        { href: '' },
	        _react2.default.createElement(_icon2.default, { type: 'home' })
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        { href: '' },
	        _react2.default.createElement(_icon2.default, { type: 'user' }),
	        _react2.default.createElement(
	          'span',
	          null,
	          'Application List'
	        )
	      ),
	      _react2.default.createElement(
	        _breadcrumb2.default.Item,
	        null,
	        'Application'
	      )
	    );
	  }
	};

/***/ }

});