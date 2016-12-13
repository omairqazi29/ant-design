webpackJsonp([20,204],{

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Input = __webpack_require__(30);

	var _Input2 = _interopRequireDefault(_Input);

	var _Group = __webpack_require__(57);

	var _Group2 = _interopRequireDefault(_Group);

	var _Search = __webpack_require__(58);

	var _Search2 = _interopRequireDefault(_Search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Input2.default.Group = _Group2.default;
	_Input2.default.Search = _Search2.default;
	exports.default = _Input2.default;
	module.exports = exports['default'];

/***/ },

/***/ 30:
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

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _calculateNodeHeight = __webpack_require__(59);

	var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _omit = __webpack_require__(23);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fixControlledValue(value) {
	    if (typeof value === 'undefined' || value === null) {
	        return '';
	    }
	    return value;
	}
	function onNextFrame(cb) {
	    if (window.requestAnimationFrame) {
	        return window.requestAnimationFrame(cb);
	    }
	    return window.setTimeout(cb, 1);
	}
	function clearNextFrameAction(nextFrameId) {
	    if (window.cancelAnimationFrame) {
	        window.cancelAnimationFrame(nextFrameId);
	    } else {
	        window.clearTimeout(nextFrameId);
	    }
	}
	;

	var Input = function (_Component) {
	    (0, _inherits3.default)(Input, _Component);

	    function Input() {
	        (0, _classCallCheck3.default)(this, Input);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));

	        _this.state = {
	            textareaStyles: null
	        };
	        _this.handleKeyDown = function (e) {
	            var _this$props = _this.props,
	                onPressEnter = _this$props.onPressEnter,
	                onKeyDown = _this$props.onKeyDown;

	            if (e.keyCode === 13 && onPressEnter) {
	                onPressEnter(e);
	            }
	            if (onKeyDown) {
	                onKeyDown(e);
	            }
	        };
	        _this.handleTextareaChange = function (e) {
	            if (!('value' in _this.props)) {
	                _this.resizeTextarea();
	            }
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange(e);
	            }
	        };
	        _this.resizeTextarea = function () {
	            var _this$props2 = _this.props,
	                type = _this$props2.type,
	                autosize = _this$props2.autosize;

	            if (type !== 'textarea' || !autosize || !_this.refs.input) {
	                return;
	            }
	            var minRows = autosize ? autosize.minRows : null;
	            var maxRows = autosize ? autosize.maxRows : null;
	            var textareaStyles = (0, _calculateNodeHeight2.default)(_this.refs.input, false, minRows, maxRows);
	            _this.setState({ textareaStyles: textareaStyles });
	        };
	        return _this;
	    }

	    Input.prototype.componentDidMount = function componentDidMount() {
	        this.resizeTextarea();
	    };

	    Input.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        // Re-render with the new content then recalculate the height as required.
	        if (this.props.value !== nextProps.value) {
	            if (this.nextFrameActionId) {
	                clearNextFrameAction(this.nextFrameActionId);
	            }
	            this.nextFrameActionId = onNextFrame(this.resizeTextarea);
	        }
	    };

	    Input.prototype.focus = function focus() {
	        this.refs.input.focus();
	    };

	    Input.prototype.renderLabledInput = function renderLabledInput(children) {
	        var _classNames;

	        var props = this.props;
	        // Not wrap when there is not addons
	        if (props.type === 'textarea' || !props.addonBefore && !props.addonAfter) {
	            return children;
	        }
	        var wrapperClassName = props.prefixCls + '-group';
	        var addonClassName = wrapperClassName + '-addon';
	        var addonBefore = props.addonBefore ? _react2.default.createElement(
	            'span',
	            { className: addonClassName },
	            props.addonBefore
	        ) : null;
	        var addonAfter = props.addonAfter ? _react2.default.createElement(
	            'span',
	            { className: addonClassName },
	            props.addonAfter
	        ) : null;
	        var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, props.prefixCls + '-wrapper', true), (0, _defineProperty3.default)(_classNames, wrapperClassName, addonBefore || addonAfter), _classNames));
	        return _react2.default.createElement(
	            'span',
	            { className: className },
	            addonBefore,
	            children,
	            addonAfter
	        );
	    };

	    Input.prototype.renderInput = function renderInput() {
	        var _classNames2;

	        var props = (0, _objectAssign2.default)({}, this.props);
	        // Fix https://fb.me/react-unknown-prop
	        var otherProps = (0, _omit2.default)(this.props, ['prefixCls', 'onPressEnter', 'autosize', 'addonBefore', 'addonAfter']);
	        var prefixCls = props.prefixCls;
	        if (!props.type) {
	            return props.children;
	        }
	        var inputClassName = (0, _classnames2.default)(prefixCls, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-sm', props.size === 'small'), (0, _defineProperty3.default)(_classNames2, prefixCls + '-lg', props.size === 'large'), _classNames2), props.className);
	        if ('value' in props) {
	            otherProps.value = fixControlledValue(props.value);
	            // Input elements must be either controlled or uncontrolled,
	            // specify either the value prop, or the defaultValue prop, but not both.
	            delete otherProps.defaultValue;
	        }
	        switch (props.type) {
	            case 'textarea':
	                return _react2.default.createElement('textarea', (0, _extends3.default)({}, otherProps, { style: (0, _objectAssign2.default)({}, props.style, this.state.textareaStyles), className: inputClassName, onKeyDown: this.handleKeyDown, onChange: this.handleTextareaChange, ref: 'input' }));
	            default:
	                return _react2.default.createElement('input', (0, _extends3.default)({}, otherProps, { className: inputClassName, onKeyDown: this.handleKeyDown, ref: 'input' }));
	        }
	    };

	    Input.prototype.render = function render() {
	        return this.renderLabledInput(this.renderInput());
	    };

	    return Input;
	}(_react.Component);

	exports.default = Input;

	Input.defaultProps = {
	    disabled: false,
	    prefixCls: 'ant-input',
	    type: 'text',
	    autosize: false
	};
	Input.propTypes = {
	    type: _react.PropTypes.string,
	    id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	    size: _react.PropTypes.oneOf(['small', 'default', 'large']),
	    disabled: _react.PropTypes.bool,
	    value: _react.PropTypes.any,
	    defaultValue: _react.PropTypes.any,
	    className: _react.PropTypes.string,
	    addonBefore: _react.PropTypes.node,
	    addonAfter: _react.PropTypes.node,
	    prefixCls: _react.PropTypes.string,
	    autosize: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	    onPressEnter: _react.PropTypes.func,
	    onKeyDown: _react.PropTypes.func
	};
	module.exports = exports['default'];

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(8);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Group = function Group(props) {
	    var _classNames;

	    var _props$prefixCls = props.prefixCls,
	        prefixCls = _props$prefixCls === undefined ? 'ant-input-group' : _props$prefixCls,
	        _props$className = props.className,
	        className = _props$className === undefined ? '' : _props$className;

	    var cls = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-lg', props.size === 'large'), (0, _defineProperty3.default)(_classNames, prefixCls + '-sm', props.size === 'small'), _classNames), className);
	    return _react2.default.createElement(
	        'span',
	        { className: cls, style: props.style },
	        props.children
	    );
	};
	exports.default = Group;
	module.exports = exports['default'];

/***/ },

/***/ 58:
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

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Input = __webpack_require__(30);

	var _Input2 = _interopRequireDefault(_Input);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Search = function (_React$Component) {
	    (0, _inherits3.default)(Search, _React$Component);

	    function Search() {
	        (0, _classCallCheck3.default)(this, Search);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));

	        _this.onSearch = function () {
	            var onSearch = _this.props.onSearch;

	            if (onSearch) {
	                onSearch(_this.input.refs.input.value);
	            }
	            _this.input.refs.input.focus();
	        };
	        return _this;
	    }

	    Search.prototype.render = function render() {
	        var _this2 = this;

	        var _splitObject = (0, _splitObject4.default)(this.props, ['className', 'prefixCls', 'style']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            className = _splitObject2$.className,
	            prefixCls = _splitObject2$.prefixCls,
	            style = _splitObject2$.style,
	            others = _splitObject2[1];

	        delete others.onSearch;
	        var wrapperCls = (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-wrapper', true), className);
	        return _react2.default.createElement(
	            'div',
	            { className: wrapperCls, style: style },
	            _react2.default.createElement(_Input2.default, (0, _extends3.default)({ className: prefixCls, onPressEnter: this.onSearch, ref: function ref(node) {
	                    return _this2.input = node;
	                } }, others)),
	            _react2.default.createElement(_icon2.default, { className: prefixCls + '-icon', onClick: this.onSearch, type: 'search' })
	        );
	    };

	    return Search;
	}(_react2.default.Component);

	exports.default = Search;

	Search.defaultProps = {
	    prefixCls: 'ant-input-search',
	    onSearch: function onSearch() {}
	};
	module.exports = exports['default'];

/***/ },

/***/ 59:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = calculateNodeHeight;
	// Thanks to https://github.com/andreypopp/react-textarea-autosize/
	/**
	 * calculateNodeHeight(uiTextNode, useCache = false)
	 */
	var HIDDEN_TEXTAREA_STYLE = '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
	var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
	var computedStyleCache = {};
	var hiddenTextarea = void 0;
	function calculateNodeStyling(node) {
	    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	    var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
	    if (useCache && computedStyleCache[nodeRef]) {
	        return computedStyleCache[nodeRef];
	    }
	    var style = window.getComputedStyle(node);
	    var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
	    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
	    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
	    var sizingStyle = SIZING_STYLE.map(function (name) {
	        return name + ':' + style.getPropertyValue(name);
	    }).join(';');
	    var nodeInfo = {
	        sizingStyle: sizingStyle,
	        paddingSize: paddingSize,
	        borderSize: borderSize,
	        boxSizing: boxSizing
	    };
	    if (useCache && nodeRef) {
	        computedStyleCache[nodeRef] = nodeInfo;
	    }
	    return nodeInfo;
	}
	function calculateNodeHeight(uiTextNode) {
	    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	    if (!hiddenTextarea) {
	        hiddenTextarea = document.createElement('textarea');
	        document.body.appendChild(hiddenTextarea);
	    }
	    // Copy all CSS properties that have an impact on the height of the content in
	    // the textbox

	    var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
	        paddingSize = _calculateNodeStyling.paddingSize,
	        borderSize = _calculateNodeStyling.borderSize,
	        boxSizing = _calculateNodeStyling.boxSizing,
	        sizingStyle = _calculateNodeStyling.sizingStyle;
	    // Need to have the overflow attribute to hide the scrollbar otherwise
	    // text-lines will not calculated properly as the shadow will technically be
	    // narrower for content


	    hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
	    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
	    var minHeight = -Infinity;
	    var maxHeight = Infinity;
	    var height = hiddenTextarea.scrollHeight;
	    if (boxSizing === 'border-box') {
	        // border-box: add border, since height = content + padding + border
	        height = height + borderSize;
	    } else if (boxSizing === 'content-box') {
	        // remove padding, since height = content
	        height = height - paddingSize;
	    }
	    if (minRows !== null || maxRows !== null) {
	        // measure height of a textarea with a single row
	        hiddenTextarea.value = '';
	        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
	        if (minRows !== null) {
	            minHeight = singleRowHeight * minRows;
	            if (boxSizing === 'border-box') {
	                minHeight = minHeight + paddingSize + borderSize;
	            }
	            height = Math.max(minHeight, height);
	        }
	        if (maxRows !== null) {
	            maxHeight = singleRowHeight * maxRows;
	            if (boxSizing === 'border-box') {
	                maxHeight = maxHeight + paddingSize + borderSize;
	            }
	            height = Math.min(maxHeight, height);
	        }
	    }
	    return { height: height, minHeight: minHeight, maxHeight: maxHeight };
	}
	module.exports = exports['default'];

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'addon': __webpack_require__(1572),
	    'autosize-textarea': __webpack_require__(1573),
	    'basic': __webpack_require__(1574),
	    'group': __webpack_require__(1575),
	    'search-input': __webpack_require__(1576),
	    'size': __webpack_require__(1577),
	    'textarea': __webpack_require__(1578),
	    'tooltip': __webpack_require__(1579),
	}

/***/ },

/***/ 1572:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style5 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _style6 = __webpack_require__(34);

	var _select = __webpack_require__(31);

	var _select2 = _interopRequireDefault(_select);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用于配置一些固定组合。"]],
	    "en-US": [["p", "Using pre & post tabs example."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "前置/后置标签",
	      "en-US": "Pre / Post tab"
	    },
	    "filename": "components/input/demo/addon.md",
	    "id": "components-input-demo-addon"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> selectBefore <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">80</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Http<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Https://<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Https<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> selectAfter <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">70</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>com<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.jp<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>jp<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.cn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>cn<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.org<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>org<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">addonAfter</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>mysite<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>selectBefore<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">addonAfter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>selectAfter<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>mysite<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonAfter={&lt;Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>setting<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"mysite\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Option = _select2.default.Option;var selectBefore = _react2.default.createElement(
	      _select2.default,
	      { defaultValue: 'Http://', style: { width: 80 } },
	      _react2.default.createElement(
	        Option,
	        { value: 'Http://' },
	        'Http://'
	      ),
	      _react2.default.createElement(
	        Option,
	        { value: 'Https://' },
	        'Https://'
	      )
	    );var selectAfter = _react2.default.createElement(
	      _select2.default,
	      { defaultValue: '.com', style: { width: 70 } },
	      _react2.default.createElement(
	        Option,
	        { value: '.com' },
	        '.com'
	      ),
	      _react2.default.createElement(
	        Option,
	        { value: '.jp' },
	        '.jp'
	      ),
	      _react2.default.createElement(
	        Option,
	        { value: '.cn' },
	        '.cn'
	      ),
	      _react2.default.createElement(
	        Option,
	        { value: '.org' },
	        '.org'
	      )
	    );return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { style: { marginBottom: 16 } },
	        _react2.default.createElement(_input2.default, { addonBefore: 'Http://', addonAfter: '.com', defaultValue: 'mysite' })
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { marginBottom: 16 } },
	        _react2.default.createElement(_input2.default, { addonBefore: selectBefore, addonAfter: selectAfter, defaultValue: 'mysite' })
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: { marginBottom: 16 } },
	        _react2.default.createElement(_input2.default, { addonAfter: _react2.default.createElement(_icon2.default, { type: 'setting' }), defaultValue: 'mysite' })
	      )
	    );
	  }
	};

/***/ },

/***/ 1573:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", ["code", "autosize"], " 属性适用于 ", ["code", "textarea"], " 节点，并且只有高度会自动变化。另外 ", ["code", "autosize"], " 可以设定为一个对象，指定最小行数和最大行数。"]],
	    "en-US": [["p", ["code", "autosize"], " prop for a ", ["code", "textarea"], " type of ", ["code", "Input"], " makes the height to automatically adjust based on the content.\nAn options object can be provided to ", ["code", "autosize"], " to specify the minimum and maximum number of lines the textarea will automatically adjust."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "适应文本高度的文本域",
	      "en-US": "Autosizing the height to fit the content"
	    },
	    "filename": "components/input/demo/autosize-textarea.md",
	    "id": "components-input-demo-autosize-textarea"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>textarea<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Autosize</span> <span class=\"token attr-name\">height</span> <span class=\"token attr-name\">based</span> <span class=\"token attr-name\">on</span> <span class=\"token attr-name\">content</span> <span class=\"token attr-name\">lines\"</span> <span class=\"token attr-name\">autosize</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'24px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>textarea<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Autosize</span> <span class=\"token attr-name\">height</span> <span class=\"token attr-name\">with</span> <span class=\"token attr-name\">minimum</span> <span class=\"token attr-name\">and</span> <span class=\"token attr-name\">maximum</span> <span class=\"token attr-name\">number</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">lines\"</span> <span class=\"token attr-name\">autosize</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> minRows<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> maxRows<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_input2.default, { type: 'textarea', placeholder: 'Autosize height based on content lines', autosize: true }),
	      _react2.default.createElement('div', { style: { margin: '24px 0' } }),
	      _react2.default.createElement(_input2.default, { type: 'textarea', placeholder: 'Autosize height with minimum and maximum number of lines', autosize: { minRows: 2, maxRows: 6 } })
	    );
	  }
	};

/***/ },

/***/ 1574:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "基本使用。"]],
	    "en-US": [["p", "Basic usage example"]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本使用",
	      "en-US": "Basic usage"
	    },
	    "filename": "components/input/demo/basic.md",
	    "id": "components-input-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Basic</span> <span class=\"token attr-name\">usage\"</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_input2.default, { placeholder: 'Basic usage' });
	  }
	};

/***/ },

/***/ 1575:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(62);

	var _col = __webpack_require__(49);

	var _col2 = _interopRequireDefault(_col);

	var _style4 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "输入框的组合展现。"]],
	    "en-US": [["p", "Input.Group example"]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "输入框组合",
	      "en-US": "Input Group"
	    },
	    "filename": "components/input/demo/group.md",
	    "id": "components-input-demo-group"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Col <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> InputGroup <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputGroup</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0571<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>26888888<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InputGroup</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var InputGroup = _input2.default.Group;return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        InputGroup,
	        { size: 'large' },
	        _react2.default.createElement(
	          _col2.default,
	          { span: '4' },
	          _react2.default.createElement(_input2.default, { defaultValue: '0571' })
	        ),
	        _react2.default.createElement(
	          _col2.default,
	          { span: '8' },
	          _react2.default.createElement(_input2.default, { defaultValue: '26888888' })
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 1576:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "带有搜索按钮的输入框，", ["code", "2.5.0"], " 时新增。"]],
	    "en-US": [["p", "Example of creating a search box by grouping a standard input with a search button, added in ", ["code", "2.5.0"], "."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "搜索框",
	      "en-US": "Search box"
	    },
	    "filename": "components/input/demo/search-input.md",
	    "id": "components-input-demo-search-input"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Search <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">.</span>Search<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Search</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">search</span> <span class=\"token attr-name\">text\"</span> <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value <span class=\"token operator\">=</span><span class=\"token operator\">></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var Search = _input2.default.Search;return _react2.default.createElement(Search, { placeholder: 'input search text', onSearch: function onSearch(value) {
	        return console.log(value);
	      } });
	  }
	};

/***/ },

/***/ 1577:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "我们为 ", ["code", "<Input />"], " 输入框定义了三种尺寸（大、默认、小），高度分别为 ", ["code", "32px"], "、", ["code", "28px"], " 和 ", ["code", "22px"], "。"], ["p", "注意： 在表单里面，我们只使用大尺寸的输入框。"]],
	    "en-US": [["p", "There are three sizes of an Input box: ", ["code", "large"], " (32px)、", ["code", "default"], " (28px) and ", ["code", "small"], " (22px). "], ["p", "Note: Inside of forms, only the large size is used."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "三种大小",
	      "en-US": "Three sizes of Input"
	    },
	    "filename": "components/input/demo/size.md",
	    "id": "components-input-demo-size"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large</span> <span class=\"token attr-name\">size\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default</span> <span class=\"token attr-name\">size\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small</span> <span class=\"token attr-name\">size\"</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'example-input' },
	      _react2.default.createElement(_input2.default, { size: 'large', placeholder: 'large size' }),
	      _react2.default.createElement(_input2.default, { placeholder: 'default size' }),
	      _react2.default.createElement(_input2.default, { size: 'small', placeholder: 'small size' })
	    );
	  },
	  "style": ".example-input .ant-input {\n  width: 200px;\n  margin: 0 8px 8px 0;\n}",
	  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.example-input</span> <span class=\"token class\">.ant-input</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">8</span>px <span class=\"token number\">8</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ },

/***/ 1578:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "用于多行输入，指定 ", ["code", "type"], " 为一个特殊的 ", ["code", "textarea"], "。"]],
	    "en-US": [["p", "For multi-line user input cases, an input whose ", ["code", "type"], " prop has the value of ", ["code", "\"textarea\""], " can be used."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "文本域",
	      "en-US": "Textarea"
	    },
	    "filename": "components/input/demo/textarea.md",
	    "id": "components-input-demo-textarea"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>textarea<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rows</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">4</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    return _react2.default.createElement(_input2.default, { type: 'textarea', rows: 4 });
	  }
	};

/***/ },

/***/ 1579:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(149);

	var _tooltip = __webpack_require__(120);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _style4 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

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

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "结合 ", ["a", {
	      "title": null,
	      "href": "/components/tooltip"
	    }, "Tooltip"], " 组件，实现一个数值输入框，方便内容超长时的全量展现。"]],
	    "en-US": [["p", "You can use the Input in conjunction with ", ["a", {
	      "title": null,
	      "href": "/components/tooltip"
	    }, "Tooltip"], " component to create a Numeric Input, which can provide a good experience for extra-long content display."]]
	  },
	  "meta": {
	    "order": 7,
	    "title": {
	      "zh-CN": "数值输入框",
	      "en-US": "Numeric Input"
	    },
	    "filename": "components/input/demo/tooltip.md",
	    "id": "components-input-demo-tooltip"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Tooltip <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">formatNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  value <span class=\"token operator\">+</span><span class=\"token operator\">=</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> list <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">split</span><span class=\"token punctuation\">(</span><span class=\"token string\">'.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> prefix <span class=\"token operator\">=</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">charAt</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token string\">'-'</span> <span class=\"token operator\">?</span> <span class=\"token string\">'-'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">let</span> num <span class=\"token operator\">=</span> prefix <span class=\"token operator\">?</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">let</span> result <span class=\"token operator\">=</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">while</span> <span class=\"token punctuation\">(</span>num<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    result <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`,</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>num<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token operator\">-</span><span class=\"token number\">3</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>result<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n    num <span class=\"token operator\">=</span> num<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> num<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>num<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    result <span class=\"token operator\">=</span> num <span class=\"token operator\">+</span> result<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>prefix<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>result<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">${list[1] ? `</span></span><span class=\"token punctuation\">.</span>$<span class=\"token punctuation\">{</span>list<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span><span class=\"token template-string\"><span class=\"token string\">` : ''}`</span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">NumericInput</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> reg <span class=\"token operator\">=</span> <span class=\"token regex\">/^-?(0|[1-9][0-9]*)(\\.[0-9]*)?$/</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token operator\">!</span><span class=\"token function\">isNaN</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">&amp;&amp;</span> reg<span class=\"token punctuation\">.</span><span class=\"token function\">test</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">||</span> value <span class=\"token operator\">===</span> <span class=\"token string\">''</span> <span class=\"token operator\">||</span> value <span class=\"token operator\">===</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// '.' at the end or only '-' in the input box.</span>\n  onBlur <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">charAt</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token string\">'.'</span> <span class=\"token operator\">||</span> value <span class=\"token operator\">===</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>onBlur<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onBlur</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> title <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value <span class=\"token operator\">?</span>\n      <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>numeric-input-title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>value <span class=\"token operator\">!==</span> <span class=\"token string\">'-'</span> <span class=\"token operator\">?</span> <span class=\"token function\">formatNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span>\n          <span class=\"token attr-name\">trigger</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'focus'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>title<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>topLeft<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">overlayClassName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>numeric-input<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token operator\">&lt;</span>Input\n            <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">}</span>\n            onChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span>\n            onBlur<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onBlur<span class=\"token punctuation\">}</span>\n            placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"input a number\"</span>\n            maxLength<span class=\"token operator\">=</span><span class=\"token string\">\"25\"</span>\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">NumericInputDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>numeric-input-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NumericInput</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NumericInputDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function formatNumber(value) {
	      value += '';var list = value.split('.');var prefix = list[0].charAt(0) === '-' ? '-' : '';var num = prefix ? list[0].slice(1) : list[0];var result = '';while (num.length > 3) {
	        result = ',' + num.slice(-3) + result;num = num.slice(0, num.length - 3);
	      }if (num) {
	        result = num + result;
	      }return '' + prefix + result + (list[1] ? '.' + list[1] : '');
	    }
	    var NumericInput = function (_React$Component) {
	      (0, _inherits3.default)(NumericInput, _React$Component);

	      function NumericInput() {
	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, NumericInput);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onChange = function (e) {
	          var value = e.target.value;
	          var reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;if (!isNaN(value) && reg.test(value) || value === '' || value === '-') {
	            _this.props.onChange(value);
	          }
	        }, _this.onBlur = function () {
	          var value = _this.props.value;
	          if (value.charAt(value.length - 1) === '.' || value === '-') {
	            _this.props.onChange({ value: value.slice(0, -1) });
	          }if (_this.props.onBlur) {
	            _this.props.onBlur();
	          }
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	      } // '.' at the end or only '-' in the input box.


	      NumericInput.prototype.render = function render() {
	        var value = this.props.value;

	        var title = value ? _react2.default.createElement(
	          'span',
	          { className: 'numeric-input-title' },
	          value !== '-' ? formatNumber(value) : '-'
	        ) : '';
	        return _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _tooltip2.default,
	            { trigger: ['focus'], title: title, placement: 'topLeft', overlayClassName: 'numeric-input' },
	            _react2.default.createElement(_input2.default, (0, _extends3.default)({}, this.props, { onChange: this.onChange, onBlur: this.onBlur, placeholder: 'input a number', maxLength: '25' }))
	          )
	        );
	      };

	      return NumericInput;
	    }(_react2.default.Component);

	    var NumericInputDemo = function (_React$Component2) {
	      (0, _inherits3.default)(NumericInputDemo, _React$Component2);

	      function NumericInputDemo(props) {
	        (0, _classCallCheck3.default)(this, NumericInputDemo);

	        var _this2 = (0, _possibleConstructorReturn3.default)(this, _React$Component2.call(this, props));

	        _this2.onChange = function (value) {
	          _this2.setState({ value: value });
	        };

	        _this2.state = { value: '' };
	        return _this2;
	      }

	      NumericInputDemo.prototype.render = function render() {
	        var value = this.state.value;
	        return _react2.default.createElement(
	          'div',
	          { className: 'numeric-input-demo' },
	          _react2.default.createElement(NumericInput, { value: value, onChange: this.onChange })
	        );
	      };

	      return NumericInputDemo;
	    }(_react2.default.Component);

	    return _react2.default.createElement(NumericInputDemo, null);
	  },
	  "style": "/* to prevent the arrow overflow the popup container, \nor the height is not enough when content is empty */\n.numeric-input .ant-tooltip-inner {\n  min-width: 32px;\n  min-height: 37px;\n}\n\n.numeric-input .numeric-input-title {\n  font-size: 14px;\n}\n\n.numeric-input-demo {\n  width: 120px;\n}",
	  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* to prevent the arrow overflow the popup container, \nor the height is not enough when content is empty */</span>\n<span class=\"token selector\"><span class=\"token class\">.numeric-input</span> <span class=\"token class\">.ant-tooltip-inner</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">min-width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">37</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.numeric-input</span> <span class=\"token class\">.numeric-input-title</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">14</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.numeric-input-demo</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
	};

/***/ }

});