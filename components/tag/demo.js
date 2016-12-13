webpackJsonp([16,204],{

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

/***/ 291:
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

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _rcAnimate = __webpack_require__(29);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _omit = __webpack_require__(23);

	var _omit2 = _interopRequireDefault(_omit);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _warning = __webpack_require__(65);

	var _warning2 = _interopRequireDefault(_warning);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	var _CheckableTag = __webpack_require__(1878);

	var _CheckableTag2 = _interopRequireDefault(_CheckableTag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tag = function (_React$Component) {
	    (0, _inherits3.default)(Tag, _React$Component);

	    function Tag(props) {
	        (0, _classCallCheck3.default)(this, Tag);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.close = function (e) {
	            var onClose = _this.props.onClose;
	            if (onClose) {
	                onClose(e);
	            }
	            if (e.defaultPrevented) {
	                return;
	            }
	            var dom = _reactDom2.default.findDOMNode(_this);
	            dom.style.width = dom.getBoundingClientRect().width + 'px';
	            // It's Magic Code, don't know why
	            dom.style.width = dom.getBoundingClientRect().width + 'px';
	            _this.setState({
	                closing: true
	            });
	        };
	        _this.animationEnd = function (_, existed) {
	            if (!existed && !_this.state.closed) {
	                _this.setState({
	                    closed: true,
	                    closing: false
	                });
	                var afterClose = _this.props.afterClose;
	                if (afterClose) {
	                    afterClose();
	                }
	            }
	        };
	        (0, _warning2.default)(!/blue|red|green|yellow/.test(props.color || ''), '`Tag[color=red|green|blue|yellow]` is deprecated, ' + 'please set color by `#abc` or `rgb(a, b, c)` instead.');
	        _this.state = {
	            closing: false,
	            closed: false
	        };
	        return _this;
	    }

	    Tag.prototype.render = function render() {
	        var _classNames;

	        var _splitObject = (0, _splitObject4.default)(this.props, ['prefixCls', 'closable', 'color', 'className', 'children', 'style']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            prefixCls = _splitObject2$.prefixCls,
	            closable = _splitObject2$.closable,
	            color = _splitObject2$.color,
	            className = _splitObject2$.className,
	            children = _splitObject2$.children,
	            style = _splitObject2$.style,
	            otherProps = _splitObject2[1];

	        var closeIcon = closable ? _react2.default.createElement(_icon2.default, { type: 'cross', onClick: this.close }) : '';
	        var classString = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-' + color, !!color), (0, _defineProperty3.default)(_classNames, prefixCls + '-has-color', !!color), (0, _defineProperty3.default)(_classNames, prefixCls + '-close', this.state.closing), _classNames), className);
	        // fix https://fb.me/react-unknown-prop
	        var divProps = (0, _omit2.default)(otherProps, ['onClose', 'afterClose']);
	        var tagStyle = (0, _objectAssign2.default)({
	            backgroundColor: /blue|red|green|yellow/.test(color) ? null : color
	        }, style);
	        var tag = this.state.closed ? null : _react2.default.createElement(
	            'div',
	            (0, _extends3.default)({ 'data-show': !this.state.closing }, divProps, { className: classString, style: tagStyle }),
	            _react2.default.createElement(
	                'span',
	                { className: prefixCls + '-text' },
	                children
	            ),
	            closeIcon
	        );
	        return _react2.default.createElement(
	            _rcAnimate2.default,
	            { component: '', showProp: 'data-show', transitionName: prefixCls + '-zoom', transitionAppear: true, onEnd: this.animationEnd },
	            tag
	        );
	    };

	    return Tag;
	}(_react2.default.Component);

	exports.default = Tag;

	Tag.CheckableTag = _CheckableTag2.default;
	Tag.defaultProps = {
	    prefixCls: 'ant-tag',
	    closable: false
	};
	module.exports = exports['default'];

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(952);

/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1753),
	    'checkable': __webpack_require__(1754),
	    'colorful': __webpack_require__(1755),
	    'control': __webpack_require__(1756),
	    'hot-tags': __webpack_require__(1757),
	}

/***/ },

/***/ 952:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 1753:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(292);

	var _tag = __webpack_require__(291);

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

/***/ 1754:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style2 = __webpack_require__(292);

	var _tag = __webpack_require__(291);

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

/***/ 1755:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(292);

	var _tag = __webpack_require__(291);

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

/***/ 1756:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(21);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(149);

	var _tooltip = __webpack_require__(120);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _style8 = __webpack_require__(292);

	var _tag = __webpack_require__(291);

	var _tag2 = _interopRequireDefault(_tag);

	var _toConsumableArray2 = __webpack_require__(61);

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

/***/ 1757:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _toConsumableArray2 = __webpack_require__(61);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _style2 = __webpack_require__(292);

	var _tag = __webpack_require__(291);

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

/***/ },

/***/ 1878:
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

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CheckableTag = function (_React$Component) {
	    (0, _inherits3.default)(CheckableTag, _React$Component);

	    function CheckableTag() {
	        (0, _classCallCheck3.default)(this, CheckableTag);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));

	        _this.handleClick = function () {
	            var _this$props = _this.props,
	                checked = _this$props.checked,
	                onChange = _this$props.onChange;

	            if (onChange) {
	                onChange(!checked);
	            }
	        };
	        return _this;
	    }

	    CheckableTag.prototype.render = function render() {
	        var _classNames;

	        var _splitObject = (0, _splitObject4.default)(this.props, ['prefixCls', 'className', 'checked']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            _splitObject2$$prefix = _splitObject2$.prefixCls,
	            prefixCls = _splitObject2$$prefix === undefined ? 'ant-tag' : _splitObject2$$prefix,
	            _splitObject2$$classN = _splitObject2$.className,
	            className = _splitObject2$$classN === undefined ? '' : _splitObject2$$classN,
	            checked = _splitObject2$.checked,
	            restProps = _splitObject2[1];

	        var cls = (0, _classnames2.default)(prefixCls, (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-checkable', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-checkable-checked', checked), _classNames), className);
	        delete restProps.onChange;
	        return _react2.default.createElement('div', (0, _extends3.default)({}, restProps, { className: cls, onClick: this.handleClick }));
	    };

	    return CheckableTag;
	}(_react2.default.Component);

	exports.default = CheckableTag;
	module.exports = exports['default'];

/***/ }

});