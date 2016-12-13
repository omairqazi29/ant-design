webpackJsonp([5,204],{

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

/***/ 40:
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

	var _rcCheckbox = __webpack_require__(190);

	var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Group = __webpack_require__(142);

	var _Group2 = _interopRequireDefault(_Group);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _PureRenderMixin = __webpack_require__(19);

	var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Checkbox = function (_React$Component) {
	    (0, _inherits3.default)(Checkbox, _React$Component);

	    function Checkbox() {
	        (0, _classCallCheck3.default)(this, Checkbox);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Checkbox.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _PureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
	    };

	    Checkbox.prototype.render = function render() {
	        var _splitObject = (0, _splitObject4.default)(this.props, ['prefixCls', 'style', 'children', 'className', 'indeterminate', 'onMouseEnter', 'onMouseLeave']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            prefixCls = _splitObject2$.prefixCls,
	            style = _splitObject2$.style,
	            children = _splitObject2$.children,
	            className = _splitObject2$.className,
	            indeterminate = _splitObject2$.indeterminate,
	            onMouseEnter = _splitObject2$.onMouseEnter,
	            onMouseLeave = _splitObject2$.onMouseLeave,
	            restProps = _splitObject2[1];

	        var classString = (0, _classnames2.default)(className, (0, _defineProperty3.default)({}, prefixCls + '-wrapper', true));
	        var checkboxClass = (0, _classnames2.default)((0, _defineProperty3.default)({}, prefixCls + '-indeterminate', indeterminate));
	        return _react2.default.createElement(
	            'label',
	            { className: classString, style: style, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
	            _react2.default.createElement(_rcCheckbox2.default, (0, _extends3.default)({}, restProps, { prefixCls: prefixCls, className: checkboxClass, children: null })),
	            children !== undefined ? _react2.default.createElement(
	                'span',
	                null,
	                children
	            ) : null
	        );
	    };

	    return Checkbox;
	}(_react2.default.Component);

	exports.default = Checkbox;

	Checkbox.Group = _Group2.default;
	Checkbox.defaultProps = {
	    prefixCls: 'ant-checkbox',
	    indeterminate: false
	};
	module.exports = exports['default'];

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(86);

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

/***/ 86:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

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

	var _index = __webpack_require__(40);

	var _index2 = _interopRequireDefault(_index);

	var _PureRenderMixin = __webpack_require__(19);

	var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CheckboxGroup = function (_React$Component) {
	    (0, _inherits3.default)(CheckboxGroup, _React$Component);

	    function CheckboxGroup(props) {
	        (0, _classCallCheck3.default)(this, CheckboxGroup);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.toggleOption = function (option) {
	            var optionIndex = _this.state.value.indexOf(option.value);
	            var value = [].concat((0, _toConsumableArray3.default)(_this.state.value));
	            if (optionIndex === -1) {
	                value.push(option.value);
	            } else {
	                value.splice(optionIndex, 1);
	            }
	            if (!('value' in _this.props)) {
	                _this.setState({ value: value });
	            }
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange(value);
	            }
	        };
	        _this.state = {
	            value: props.value || props.defaultValue || []
	        };
	        return _this;
	    }

	    CheckboxGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if ('value' in nextProps) {
	            this.setState({
	                value: nextProps.value || []
	            });
	        }
	    };

	    CheckboxGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _PureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
	    };

	    CheckboxGroup.prototype.getOptions = function getOptions() {
	        var options = this.props.options;
	        // https://github.com/Microsoft/TypeScript/issues/7960

	        return options.map(function (option) {
	            if (typeof option === 'string') {
	                return {
	                    label: option,
	                    value: option
	                };
	            }
	            return option;
	        });
	    };

	    CheckboxGroup.prototype.render = function render() {
	        var _this2 = this;

	        var prefixCls = this.props.prefixCls;

	        var options = this.getOptions().map(function (option) {
	            return _react2.default.createElement(
	                _index2.default,
	                { disabled: 'disabled' in option ? option.disabled : _this2.props.disabled, checked: _this2.state.value.indexOf(option.value) !== -1, onChange: function onChange() {
	                        return _this2.toggleOption(option);
	                    }, className: prefixCls + '-item', key: option.value },
	                option.label
	            );
	        });
	        return _react2.default.createElement(
	            'div',
	            { className: prefixCls },
	            options
	        );
	    };

	    return CheckboxGroup;
	}(_react2.default.Component);

	exports.default = CheckboxGroup;

	CheckboxGroup.defaultProps = {
	    options: [],
	    prefixCls: 'ant-checkbox-group'
	};
	CheckboxGroup.propTypes = {
	    defaultValue: _react2.default.PropTypes.array,
	    value: _react2.default.PropTypes.array,
	    options: _react2.default.PropTypes.array.isRequired,
	    onChange: _react2.default.PropTypes.func
	};
	module.exports = exports['default'];

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _toConsumableArray2 = __webpack_require__(61);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

	var _list = __webpack_require__(488);

	var _list2 = _interopRequireDefault(_list);

	var _operation = __webpack_require__(489);

	var _operation2 = _interopRequireDefault(_operation);

	var _search = __webpack_require__(295);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}
	var defaultTitles = ['', ''];

	var Transfer = function (_React$Component) {
	    (0, _inherits3.default)(Transfer, _React$Component);

	    function Transfer(props) {
	        (0, _classCallCheck3.default)(this, Transfer);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.moveTo = function (direction) {
	            var _this$props = _this.props,
	                _this$props$targetKey = _this$props.targetKeys,
	                targetKeys = _this$props$targetKey === undefined ? [] : _this$props$targetKey,
	                onChange = _this$props.onChange;
	            var _this$state = _this.state,
	                sourceSelectedKeys = _this$state.sourceSelectedKeys,
	                targetSelectedKeys = _this$state.targetSelectedKeys;

	            var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys;
	            // move items to target box
	            var newTargetKeys = direction === 'right' ? moveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
	                return moveKeys.indexOf(targetKey) === -1;
	            });
	            // empty checked keys
	            var oppositeDirection = direction === 'right' ? 'left' : 'right';
	            _this.setState((0, _defineProperty3.default)({}, _this.getSelectedKeysName(oppositeDirection), []));
	            _this.handleSelectChange(oppositeDirection, []);
	            if (onChange) {
	                onChange(newTargetKeys, direction, moveKeys);
	            }
	        };
	        _this.moveToLeft = function () {
	            return _this.moveTo('left');
	        };
	        _this.moveToRight = function () {
	            return _this.moveTo('right');
	        };
	        _this.handleSelectAll = function (direction, filteredDataSource, checkAll) {
	            var holder = checkAll ? [] : filteredDataSource.map(function (item) {
	                return item.key;
	            });
	            _this.handleSelectChange(direction, holder);
	            if (!_this.props.selectedKeys) {
	                _this.setState((0, _defineProperty3.default)({}, _this.getSelectedKeysName(direction), holder));
	            }
	        };
	        _this.handleLeftSelectAll = function (filteredDataSource, checkAll) {
	            return _this.handleSelectAll('left', filteredDataSource, checkAll);
	        };
	        _this.handleRightSelectAll = function (filteredDataSource, checkAll) {
	            return _this.handleSelectAll('right', filteredDataSource, checkAll);
	        };
	        _this.handleFilter = function (direction, e) {
	            _this.setState((0, _defineProperty3.default)({}, direction + 'Filter', e.target.value));
	        };
	        _this.handleLeftFilter = function (e) {
	            return _this.handleFilter('left', e);
	        };
	        _this.handleRightFilter = function (e) {
	            return _this.handleFilter('right', e);
	        };
	        _this.handleClear = function (direction) {
	            _this.setState((0, _defineProperty3.default)({}, direction + 'Filter', ''));
	        };
	        _this.handleLeftClear = function () {
	            return _this.handleClear('left');
	        };
	        _this.handleRightClear = function () {
	            return _this.handleClear('right');
	        };
	        _this.handleSelect = function (direction, selectedItem, checked) {
	            var _this$state2 = _this.state,
	                sourceSelectedKeys = _this$state2.sourceSelectedKeys,
	                targetSelectedKeys = _this$state2.targetSelectedKeys;

	            var holder = direction === 'left' ? [].concat((0, _toConsumableArray3.default)(sourceSelectedKeys)) : [].concat((0, _toConsumableArray3.default)(targetSelectedKeys));
	            var index = holder.indexOf(selectedItem.key);
	            if (index > -1) {
	                holder.splice(index, 1);
	            }
	            if (checked) {
	                holder.push(selectedItem.key);
	            }
	            _this.handleSelectChange(direction, holder);
	            if (!_this.props.selectedKeys) {
	                _this.setState((0, _defineProperty3.default)({}, _this.getSelectedKeysName(direction), holder));
	            }
	        };
	        _this.handleLeftSelect = function (selectedItem, checked) {
	            return _this.handleSelect('left', selectedItem, checked);
	        };
	        _this.handleRightSelect = function (selectedItem, checked) {
	            return _this.handleSelect('right', selectedItem, checked);
	        };
	        var _props$selectedKeys = props.selectedKeys,
	            selectedKeys = _props$selectedKeys === undefined ? [] : _props$selectedKeys,
	            _props$targetKeys = props.targetKeys,
	            targetKeys = _props$targetKeys === undefined ? [] : _props$targetKeys;

	        _this.state = {
	            leftFilter: '',
	            rightFilter: '',
	            sourceSelectedKeys: selectedKeys.filter(function (key) {
	                return targetKeys.indexOf(key) === -1;
	            }),
	            targetSelectedKeys: selectedKeys.filter(function (key) {
	                return targetKeys.indexOf(key) > -1;
	            })
	        };
	        return _this;
	    }

	    Transfer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var _this2 = this;

	        var _state = this.state,
	            sourceSelectedKeys = _state.sourceSelectedKeys,
	            targetSelectedKeys = _state.targetSelectedKeys;

	        if (nextProps.targetKeys !== this.props.targetKeys || nextProps.dataSource !== this.props.dataSource) {
	            (function () {
	                var existInDateSourcekey = function existInDateSourcekey(key) {
	                    return dataSource.some(function (item) {
	                        return item.key === key;
	                    });
	                };
	                // clear key nolonger existed
	                // clear checkedKeys according to targetKeys


	                // clear cached splited dataSource
	                _this2.splitedDataSource = null;
	                var dataSource = nextProps.dataSource,
	                    _nextProps$targetKeys = nextProps.targetKeys,
	                    targetKeys = _nextProps$targetKeys === undefined ? [] : _nextProps$targetKeys;
	                _this2.setState({
	                    sourceSelectedKeys: sourceSelectedKeys.filter(existInDateSourcekey).filter(function (data) {
	                        return targetKeys.filter(function (key) {
	                            return key === data;
	                        }).length === 0;
	                    }),
	                    targetSelectedKeys: targetSelectedKeys.filter(existInDateSourcekey).filter(function (data) {
	                        return targetKeys.filter(function (key) {
	                            return key === data;
	                        }).length > 0;
	                    })
	                });
	            })();
	        }
	        if (nextProps.selectedKeys) {
	            (function () {
	                var targetKeys = nextProps.targetKeys;
	                _this2.setState({
	                    sourceSelectedKeys: nextProps.selectedKeys.filter(function (key) {
	                        return targetKeys.indexOf(key) === -1;
	                    }),
	                    targetSelectedKeys: nextProps.selectedKeys.filter(function (key) {
	                        return targetKeys.indexOf(key) > -1;
	                    })
	                });
	            })();
	        }
	    };

	    Transfer.prototype.splitDataSource = function splitDataSource(props) {
	        if (this.splitedDataSource) {
	            return this.splitedDataSource;
	        }
	        var rowKey = props.rowKey,
	            dataSource = props.dataSource,
	            _props$targetKeys2 = props.targetKeys,
	            targetKeys = _props$targetKeys2 === undefined ? [] : _props$targetKeys2;

	        if (rowKey) {
	            dataSource.forEach(function (record) {
	                record.key = rowKey(record);
	            });
	        }
	        var leftDataSource = dataSource.filter(function (_ref) {
	            var key = _ref.key;
	            return targetKeys.indexOf(key) === -1;
	        });
	        var rightDataSource = [];
	        targetKeys.forEach(function (targetKey) {
	            var targetItem = dataSource.filter(function (record) {
	                return record.key === targetKey;
	            })[0];
	            if (targetItem) {
	                rightDataSource.push(targetItem);
	            }
	        });
	        this.splitedDataSource = {
	            leftDataSource: leftDataSource,
	            rightDataSource: rightDataSource
	        };
	        return this.splitedDataSource;
	    };

	    Transfer.prototype.handleSelectChange = function handleSelectChange(direction, holder) {
	        var _state2 = this.state,
	            sourceSelectedKeys = _state2.sourceSelectedKeys,
	            targetSelectedKeys = _state2.targetSelectedKeys;

	        var onSelectChange = this.props.onSelectChange;
	        if (!onSelectChange) {
	            return;
	        }
	        if (direction === 'left') {
	            onSelectChange(holder, targetSelectedKeys);
	        } else {
	            onSelectChange(sourceSelectedKeys, holder);
	        }
	    };

	    Transfer.prototype.getTitles = function getTitles() {
	        var props = this.props,
	            context = this.context;

	        if (props.titles) {
	            return props.titles;
	        }
	        var transferLocale = context && context.antLocale && context.antLocale.Transfer;
	        if (transferLocale) {
	            return transferLocale.titles || [];
	        }
	        return defaultTitles;
	    };

	    Transfer.prototype.getSelectedKeysName = function getSelectedKeysName(direction) {
	        return direction === 'left' ? 'sourceSelectedKeys' : 'targetSelectedKeys';
	    };

	    Transfer.prototype.render = function render() {
	        var _props = this.props,
	            _props$prefixCls = _props.prefixCls,
	            prefixCls = _props$prefixCls === undefined ? 'ant-transfer' : _props$prefixCls,
	            _props$operations = _props.operations,
	            operations = _props$operations === undefined ? [] : _props$operations,
	            showSearch = _props.showSearch,
	            notFoundContent = _props.notFoundContent,
	            searchPlaceholder = _props.searchPlaceholder,
	            body = _props.body,
	            footer = _props.footer,
	            listStyle = _props.listStyle,
	            _props$className = _props.className,
	            className = _props$className === undefined ? '' : _props$className,
	            filterOption = _props.filterOption,
	            render = _props.render,
	            lazy = _props.lazy;
	        var _state3 = this.state,
	            leftFilter = _state3.leftFilter,
	            rightFilter = _state3.rightFilter,
	            sourceSelectedKeys = _state3.sourceSelectedKeys,
	            targetSelectedKeys = _state3.targetSelectedKeys;

	        var _splitDataSource = this.splitDataSource(this.props),
	            leftDataSource = _splitDataSource.leftDataSource,
	            rightDataSource = _splitDataSource.rightDataSource;

	        var leftActive = targetSelectedKeys.length > 0;
	        var rightActive = sourceSelectedKeys.length > 0;
	        var cls = (0, _classnames2.default)(className, prefixCls);
	        var titles = this.getTitles();
	        return _react2.default.createElement(
	            'div',
	            { className: cls },
	            _react2.default.createElement(_list2.default, { titleText: titles[0], dataSource: leftDataSource, filter: leftFilter, filterOption: filterOption, style: listStyle, checkedKeys: sourceSelectedKeys, handleFilter: this.handleLeftFilter, handleClear: this.handleLeftClear, handleSelect: this.handleLeftSelect, handleSelectAll: this.handleLeftSelectAll, render: render, showSearch: showSearch, searchPlaceholder: searchPlaceholder, notFoundContent: notFoundContent, body: body, footer: footer, prefixCls: prefixCls + '-list', lazy: lazy }),
	            _react2.default.createElement(_operation2.default, { rightActive: rightActive, rightArrowText: operations[0], moveToRight: this.moveToRight, leftActive: leftActive, leftArrowText: operations[1], moveToLeft: this.moveToLeft, className: prefixCls + '-operation' }),
	            _react2.default.createElement(_list2.default, { titleText: titles[1], dataSource: rightDataSource, filter: rightFilter, filterOption: filterOption, style: listStyle, checkedKeys: targetSelectedKeys, handleFilter: this.handleRightFilter, handleClear: this.handleRightClear, handleSelect: this.handleRightSelect, handleSelectAll: this.handleRightSelectAll, render: render, showSearch: showSearch, searchPlaceholder: searchPlaceholder, notFoundContent: notFoundContent, body: body, footer: footer, prefixCls: prefixCls + '-list', lazy: lazy })
	        );
	    };

	    return Transfer;
	}(_react2.default.Component);
	// For high-level customized Transfer @dqaria


	exports.default = Transfer;
	Transfer.List = _list2.default;
	Transfer.Operation = _operation2.default;
	Transfer.Search = _search2.default;
	Transfer.defaultProps = {
	    dataSource: [],
	    render: noop,
	    showSearch: false
	};
	Transfer.propTypes = {
	    prefixCls: _react.PropTypes.string,
	    dataSource: _react.PropTypes.array,
	    render: _react.PropTypes.func,
	    targetKeys: _react.PropTypes.array,
	    onChange: _react.PropTypes.func,
	    height: _react.PropTypes.number,
	    listStyle: _react.PropTypes.object,
	    className: _react.PropTypes.string,
	    titles: _react.PropTypes.array,
	    operations: _react.PropTypes.array,
	    showSearch: _react.PropTypes.bool,
	    filterOption: _react.PropTypes.func,
	    searchPlaceholder: _react.PropTypes.string,
	    notFoundContent: _react.PropTypes.node,
	    body: _react.PropTypes.func,
	    footer: _react.PropTypes.func,
	    rowKey: _react.PropTypes.func,
	    lazy: _react.PropTypes.object
	};
	Transfer.contextTypes = {
	    antLocale: _react.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(394);

	__webpack_require__(56);

	__webpack_require__(14);

	__webpack_require__(21);

/***/ },

/***/ 295:
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

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Search = function (_React$Component) {
	    (0, _inherits3.default)(Search, _React$Component);

	    function Search() {
	        (0, _classCallCheck3.default)(this, Search);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));

	        _this.handleChange = function (e) {
	            var onChange = _this.props.onChange;
	            if (onChange) {
	                onChange(e);
	            }
	        };
	        _this.handleClear = function (e) {
	            e.preventDefault();
	            var handleClear = _this.props.handleClear;
	            if (handleClear) {
	                handleClear(e);
	            }
	        };
	        return _this;
	    }

	    Search.prototype.render = function render() {
	        var _props = this.props,
	            placeholder = _props.placeholder,
	            value = _props.value,
	            prefixCls = _props.prefixCls;

	        var icon = value && value.length > 0 ? _react2.default.createElement(
	            'a',
	            { href: '#', className: prefixCls + '-action', onClick: this.handleClear },
	            _react2.default.createElement(_icon2.default, { type: 'cross-circle' })
	        ) : _react2.default.createElement(
	            'span',
	            { className: prefixCls + '-action' },
	            _react2.default.createElement(_icon2.default, { type: 'search' })
	        );
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_input2.default, { placeholder: placeholder, className: prefixCls, value: value, ref: 'input', onChange: this.handleChange }),
	            icon
	        );
	    };

	    return Search;
	}(_react2.default.Component);

	exports.default = Search;

	Search.defaultProps = {
	    placeholder: ''
	};
	module.exports = exports['default'];

/***/ },

/***/ 394:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 487:
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

	var _PureRenderMixin = __webpack_require__(19);

	var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _reactLazyLoad = __webpack_require__(462);

	var _reactLazyLoad2 = _interopRequireDefault(_reactLazyLoad);

	var _checkbox = __webpack_require__(40);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isRenderResultPlainObject(result) {
	    return result && !_react2.default.isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
	}

	var Item = function (_React$Component) {
	    (0, _inherits3.default)(Item, _React$Component);

	    function Item() {
	        (0, _classCallCheck3.default)(this, Item);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));

	        _this.matchFilter = function (text) {
	            var _this$props = _this.props,
	                filter = _this$props.filter,
	                filterOption = _this$props.filterOption,
	                item = _this$props.item;

	            if (filterOption) {
	                return filterOption(filter, item);
	            }
	            return text.indexOf(filter) >= 0;
	        };
	        return _this;
	    }

	    Item.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _PureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
	    };

	    Item.prototype.render = function render() {
	        var _classNames;

	        var _props = this.props,
	            render = _props.render,
	            filter = _props.filter,
	            item = _props.item,
	            lazy = _props.lazy,
	            checked = _props.checked,
	            prefixCls = _props.prefixCls,
	            onClick = _props.onClick;

	        var renderResult = render(item);
	        var renderedText = void 0;
	        var renderedEl = void 0;
	        if (isRenderResultPlainObject(renderResult)) {
	            renderedText = renderResult.value;
	            renderedEl = renderResult.label;
	        } else {
	            renderedText = renderResult;
	            renderedEl = renderResult;
	        }
	        if (filter && filter.trim() && !this.matchFilter(renderedText)) {
	            return null;
	        }
	        var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-content-item', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-content-item-disabled', item.disabled), _classNames));
	        var lazyProps = (0, _objectAssign2.default)({
	            height: 32,
	            offset: 500,
	            throttle: 0,
	            debounce: false
	        }, lazy);
	        return _react2.default.createElement(
	            _reactLazyLoad2.default,
	            lazyProps,
	            _react2.default.createElement(
	                'li',
	                { className: className, title: renderedText, onClick: item.disabled ? undefined : function () {
	                        return onClick(item);
	                    } },
	                _react2.default.createElement(_checkbox2.default, { checked: checked, disabled: item.disabled }),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    renderedEl
	                )
	            )
	        );
	    };

	    return Item;
	}(_react2.default.Component);

	exports.default = Item;
	module.exports = exports['default'];

/***/ },

/***/ 488:
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

	var _search = __webpack_require__(295);

	var _search2 = _interopRequireDefault(_search);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _rcAnimate = __webpack_require__(29);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _PureRenderMixin = __webpack_require__(19);

	var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

	var _objectAssign = __webpack_require__(9);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _item = __webpack_require__(487);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}

	var TransferList = function (_React$Component) {
	    (0, _inherits3.default)(TransferList, _React$Component);

	    function TransferList(props) {
	        (0, _classCallCheck3.default)(this, TransferList);

	        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

	        _this.handleSelect = function (selectedItem) {
	            var checkedKeys = _this.props.checkedKeys;

	            var result = checkedKeys.some(function (key) {
	                return key === selectedItem.key;
	            });
	            _this.props.handleSelect(selectedItem, !result);
	        };
	        _this.handleFilter = function (e) {
	            _this.props.handleFilter(e);
	        };
	        _this.handleClear = function () {
	            _this.props.handleClear();
	        };
	        _this.state = {
	            mounted: false
	        };
	        return _this;
	    }

	    TransferList.prototype.componentDidMount = function componentDidMount() {
	        var _this2 = this;

	        this.timer = setTimeout(function () {
	            _this2.setState({
	                mounted: true
	            });
	        }, 0);
	    };

	    TransferList.prototype.componentWillUnmount = function componentWillUnmount() {
	        clearTimeout(this.timer);
	    };

	    TransferList.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _PureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
	    };

	    TransferList.prototype.getCheckStatus = function getCheckStatus(filteredDataSource) {
	        var checkedKeys = this.props.checkedKeys;

	        if (checkedKeys.length === 0) {
	            return 'none';
	        } else if (filteredDataSource.every(function (item) {
	            return checkedKeys.indexOf(item.key) >= 0;
	        })) {
	            return 'all';
	        }
	        return 'part';
	    };

	    TransferList.prototype.renderCheckbox = function renderCheckbox(_ref) {
	        var _classNames,
	            _this3 = this;

	        var prefixCls = _ref.prefixCls,
	            filteredDataSource = _ref.filteredDataSource,
	            checked = _ref.checked,
	            checkPart = _ref.checkPart,
	            disabled = _ref.disabled,
	            checkable = _ref.checkable;

	        var checkAll = !checkPart && checked;
	        var checkboxCls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-checkbox', true), (0, _defineProperty3.default)(_classNames, prefixCls + '-checkbox-indeterminate', checkPart), (0, _defineProperty3.default)(_classNames, prefixCls + '-checkbox-checked', checkAll), (0, _defineProperty3.default)(_classNames, prefixCls + '-checkbox-disabled', disabled), _classNames));
	        return _react2.default.createElement(
	            'span',
	            { ref: 'checkbox', className: checkboxCls, onClick: function onClick() {
	                    return _this3.props.handleSelectAll(filteredDataSource, checkAll);
	                } },
	            typeof checkable !== 'boolean' ? checkable : null
	        );
	    };

	    TransferList.prototype.render = function render() {
	        var _this4 = this;

	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            dataSource = _props.dataSource,
	            titleText = _props.titleText,
	            filter = _props.filter,
	            checkedKeys = _props.checkedKeys,
	            lazy = _props.lazy,
	            filterOption = _props.filterOption,
	            _props$body = _props.body,
	            body = _props$body === undefined ? noop : _props$body,
	            _props$footer = _props.footer,
	            footer = _props$footer === undefined ? noop : _props$footer,
	            showSearch = _props.showSearch,
	            _props$render = _props.render,
	            render = _props$render === undefined ? noop : _props$render,
	            style = _props.style;
	        var _props2 = this.props,
	            searchPlaceholder = _props2.searchPlaceholder,
	            notFoundContent = _props2.notFoundContent;
	        // Custom Layout

	        var footerDom = footer((0, _objectAssign2.default)({}, this.props));
	        var bodyDom = body((0, _objectAssign2.default)({}, this.props));
	        var listCls = (0, _classnames2.default)(prefixCls, (0, _defineProperty3.default)({}, prefixCls + '-with-footer', !!footerDom));
	        var filteredDataSource = [];
	        var showItems = dataSource.map(function (item) {
	            if (!item.disabled) {
	                filteredDataSource.push(item);
	            }
	            var checked = checkedKeys.indexOf(item.key) >= 0;
	            return _react2.default.createElement(_item2.default, { key: item.key, item: item, lazy: lazy, render: render, filter: filter, filterOption: filterOption, checked: checked, prefixCls: prefixCls, onClick: _this4.handleSelect });
	        });
	        var unit = '';
	        var antLocale = this.context.antLocale;
	        if (antLocale && antLocale.Transfer) {
	            var transferLocale = antLocale.Transfer;
	            unit = dataSource.length > 1 ? transferLocale.itemsUnit : transferLocale.itemUnit;
	            searchPlaceholder = searchPlaceholder || transferLocale.searchPlaceholder;
	            notFoundContent = notFoundContent || transferLocale.notFoundContent;
	        }
	        var checkStatus = this.getCheckStatus(filteredDataSource);
	        var outerPrefixCls = prefixCls.replace('-list', '');
	        var search = showSearch ? _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-body-search-wrapper' },
	            _react2.default.createElement(_search2.default, { prefixCls: prefixCls + '-search', onChange: this.handleFilter, handleClear: this.handleClear, placeholder: searchPlaceholder || 'Search', value: filter })
	        ) : null;
	        var listBody = bodyDom || _react2.default.createElement(
	            'div',
	            { className: showSearch ? prefixCls + '-body ' + prefixCls + '-body-with-search' : prefixCls + '-body' },
	            search,
	            _react2.default.createElement(
	                _rcAnimate2.default,
	                { component: 'ul', className: prefixCls + '-content', transitionName: this.state.mounted ? prefixCls + '-content-item-highlight' : '', transitionLeave: false },
	                showItems
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: prefixCls + '-body-not-found' },
	                notFoundContent || 'Not Found'
	            )
	        );
	        var listFooter = footerDom ? _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-footer' },
	            footerDom
	        ) : null;
	        var renderedCheckbox = this.renderCheckbox({
	            prefixCls: outerPrefixCls,
	            checked: checkStatus === 'all',
	            checkPart: checkStatus === 'part',
	            checkable: _react2.default.createElement('span', { className: outerPrefixCls + '-checkbox-inner' }),
	            filteredDataSource: filteredDataSource,
	            disabled: false
	        });
	        return _react2.default.createElement(
	            'div',
	            { className: listCls, style: style },
	            _react2.default.createElement(
	                'div',
	                { className: prefixCls + '-header' },
	                renderedCheckbox,
	                _react2.default.createElement(
	                    'span',
	                    { className: prefixCls + '-header-selected' },
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        (checkedKeys.length > 0 ? checkedKeys.length + '/' : '') + dataSource.length,
	                        ' ',
	                        unit
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: prefixCls + '-header-title' },
	                        titleText
	                    )
	                )
	            ),
	            listBody,
	            listFooter
	        );
	    };

	    return TransferList;
	}(_react2.default.Component);

	exports.default = TransferList;

	TransferList.defaultProps = {
	    dataSource: [],
	    titleText: '',
	    showSearch: false,
	    render: noop
	};
	TransferList.contextTypes = {
	    antLocale: _react2.default.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },

/***/ 489:
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

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}

	var TransferOperation = function (_React$Component) {
	    (0, _inherits3.default)(TransferOperation, _React$Component);

	    function TransferOperation() {
	        (0, _classCallCheck3.default)(this, TransferOperation);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    TransferOperation.prototype.render = function render() {
	        var _props = this.props,
	            moveToLeft = _props.moveToLeft,
	            moveToRight = _props.moveToRight,
	            leftArrowText = _props.leftArrowText,
	            rightArrowText = _props.rightArrowText,
	            leftActive = _props.leftActive,
	            rightActive = _props.rightActive,
	            className = _props.className;

	        var moveToLeftButton = _react2.default.createElement(
	            _button2.default,
	            { type: 'primary', size: 'small', disabled: !leftActive, onClick: moveToLeft },
	            _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(_icon2.default, { type: 'left' }),
	                leftArrowText
	            )
	        );
	        var moveToRightButton = _react2.default.createElement(
	            _button2.default,
	            { type: 'primary', size: 'small', disabled: !rightActive, onClick: moveToRight },
	            _react2.default.createElement(
	                'span',
	                null,
	                rightArrowText,
	                _react2.default.createElement(_icon2.default, { type: 'right' })
	            )
	        );
	        return _react2.default.createElement(
	            'div',
	            { className: className },
	            moveToLeftButton,
	            moveToRightButton
	        );
	    };

	    return TransferOperation;
	}(_react2.default.Component);

	exports.default = TransferOperation;

	TransferOperation.defaultProps = {
	    leftArrowText: '',
	    rightArrowText: '',
	    moveToLeft: noop,
	    moveToRight: noop
	};
	module.exports = exports['default'];

/***/ },

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'advanced': __webpack_require__(1780),
	    'basic': __webpack_require__(1781),
	    'custom-item': __webpack_require__(1782),
	    'large-data': __webpack_require__(1783),
	    'search': __webpack_require__(1784),
	}

/***/ },

/***/ 1780:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(238);

	var _transfer = __webpack_require__(237);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _style4 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。"]],
	    "en-US": [["p", "Advanced Usage of Transfer."], ["p", "You can customize the labels of the transfer buttons, the width and height of the columns, and what should be displayed in the footer."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "高级用法",
	      "en-US": "Advanced"
	    },
	    "filename": "components/transfer/demo/advanced.md",
	    "id": "components-transfer-demo-advanced"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mockData<span class=\"token punctuation\">,</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">renderFooter</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> float<span class=\"token punctuation\">:</span> <span class=\"token string\">'right'</span><span class=\"token punctuation\">,</span> margin<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>getMock<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        reload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">listStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n          width<span class=\"token punctuation\">:</span> <span class=\"token number\">250</span><span class=\"token punctuation\">,</span>\n          height<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">operations</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'to right'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'to left'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>item<span class=\"token punctuation\">.</span>title<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>item<span class=\"token punctuation\">.</span>description<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>renderFooter<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { mockData: [], targetKeys: [] };
	      },
	      componentDidMount: function componentDidMount() {
	        this.getMock();
	      },
	      getMock: function getMock() {
	        var targetKeys = [];var mockData = [];for (var i = 0; i < 20; i++) {
	          var data = { key: i.toString(), title: 'content' + (i + 1), description: 'description of content' + (i + 1), chosen: Math.random() * 2 > 1 };if (data.chosen) {
	            targetKeys.push(data.key);
	          }mockData.push(data);
	        }this.setState({
	          mockData: mockData,
	          targetKeys: targetKeys });
	      },
	      handleChange: function handleChange(targetKeys) {
	        this.setState({ targetKeys: targetKeys });
	      },
	      renderFooter: function renderFooter() {
	        return _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost', size: 'small', style: { float: 'right', margin: 5 }, onClick: this.getMock },
	          'reload'
	        );
	      },
	      render: function render() {
	        return _react2.default.createElement(_transfer2.default, { dataSource: this.state.mockData, showSearch: true, listStyle: { width: 250, height: 300 }, operations: ['to right', 'to left'], targetKeys: this.state.targetKeys, onChange: this.handleChange, render: function render(item) {
	            return item.title + '-' + item.description;
	          }, footer: this.renderFooter });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1781:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(238);

	var _transfer = __webpack_require__(237);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _toConsumableArray2 = __webpack_require__(61);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最基本的用法，展示了 ", ["code", "dataSource"], "、", ["code", "targetKeys"], "、每行的渲染函数 ", ["code", "render"], " 以及回调函数 ", ["code", "onChange"], " 的用法。"]],
	    "en-US": [["p", "The most basic usage of ", ["code", "Transfer"], " involves providing the source data and target keys arrays, plus the rendering and change callback functions."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本用法",
	      "en-US": "Basic"
	    },
	    "filename": "components/transfer/demo/basic.md",
	    "id": "components-transfer-demo-basic"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    disabled<span class=\"token punctuation\">:</span> i <span class=\"token operator\">%</span> <span class=\"token number\">3</span> <span class=\"token operator\">&lt;</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> mockData\n        <span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">+</span>item<span class=\"token punctuation\">.</span>key <span class=\"token operator\">%</span> <span class=\"token number\">3</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      targetKeys<span class=\"token punctuation\">,</span>\n      selectedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>nextTargetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys<span class=\"token punctuation\">:</span> nextTargetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'targetKeys: '</span><span class=\"token punctuation\">,</span> targetKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'direction: '</span><span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'moveKeys: '</span><span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleSelectChange</span><span class=\"token punctuation\">(</span>sourceSelectedKeys<span class=\"token punctuation\">,</span> targetSelectedKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>sourceSelectedKeys<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span>targetSelectedKeys<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'sourceSelectedKeys: '</span><span class=\"token punctuation\">,</span> sourceSelectedKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'targetSelectedKeys: '</span><span class=\"token punctuation\">,</span> targetSelectedKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> state <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">titles</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'Source'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Target'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">selectedKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>state<span class=\"token punctuation\">.</span>selectedKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onSelectChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSelectChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var mockData = [];
	    for (var i = 0; i < 20; i++) {
	      mockData.push({ key: i.toString(),
	        title: 'content' + (i + 1), description: 'description of content' + (i + 1), disabled: i % 3 < 1 });
	    }var targetKeys = mockData.filter(function (item) {
	      return +item.key % 3 > 1;
	    }).map(function (item) {
	      return item.key;
	    });var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { targetKeys: targetKeys, selectedKeys: [] };
	      },
	      handleChange: function handleChange(nextTargetKeys, direction, moveKeys) {
	        this.setState({ targetKeys: nextTargetKeys });console.log('targetKeys: ', targetKeys);console.log('direction: ', direction);console.log('moveKeys: ', moveKeys);
	      },
	      handleSelectChange: function handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
	        this.setState({ selectedKeys: [].concat((0, _toConsumableArray3.default)(sourceSelectedKeys), (0, _toConsumableArray3.default)(targetSelectedKeys)) });console.log('sourceSelectedKeys: ', sourceSelectedKeys);
	        console.log('targetSelectedKeys: ', targetSelectedKeys);
	      },
	      render: function render() {
	        var state = this.state;return _react2.default.createElement(_transfer2.default, { dataSource: mockData, titles: ['Source', 'Target'], targetKeys: state.targetKeys, selectedKeys: state.selectedKeys, onChange: this.handleChange, onSelectChange: this.handleSelectChange, render: function render(item) {
	            return item.title;
	          } });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1782:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(238);

	var _transfer = __webpack_require__(237);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "自定义渲染每一个 Transfer Item，可用于渲染复杂数据。"]],
	    "en-US": [["p", "Custom each Transfer Item, and in this way you can render a complex datasource."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "自定义渲染行数据",
	      "en-US": "Custom datasource"
	    },
	    "filename": "components/transfer/demo/custom-item.md",
	    "id": "components-transfer-demo-custom-item"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mockData<span class=\"token punctuation\">,</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">,</span> direction<span class=\"token punctuation\">,</span> moveKeys<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">renderItem</span><span class=\"token punctuation\">(</span>item<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> customLabel <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom-item<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span> <span class=\"token operator\">-</span> <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      label<span class=\"token punctuation\">:</span> customLabel<span class=\"token punctuation\">,</span>  <span class=\"token comment\" spellcheck=\"true\">// for displayed item</span>\n      value<span class=\"token punctuation\">:</span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">,</span>   <span class=\"token comment\" spellcheck=\"true\">// for title and filter matching</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">listStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n          width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n          height<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>renderItem<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { mockData: [], targetKeys: [] };
	      },
	      componentDidMount: function componentDidMount() {
	        this.getMock();
	      },
	      getMock: function getMock() {
	        var targetKeys = [];var mockData = [];for (var i = 0; i < 20; i++) {
	          var data = { key: i.toString(), title: 'content' + (i + 1), description: 'description of content' + (i + 1), chosen: Math.random() * 2 > 1 };if (data.chosen) {
	            targetKeys.push(data.key);
	          }
	          mockData.push(data);
	        }this.setState({ mockData: mockData, targetKeys: targetKeys });
	      },
	      handleChange: function handleChange(targetKeys, direction, moveKeys) {
	        console.log(targetKeys, direction, moveKeys);this.setState({ targetKeys: targetKeys });
	      },
	      renderItem: function renderItem(item) {
	        var customLabel = _react2.default.createElement(
	          'span',
	          { className: 'custom-item' },
	          item.title,
	          ' - ',
	          item.description
	        );return { label: customLabel, // for displayed item
	          value: item.title };
	      },
	      render: function render() {
	        return _react2.default.createElement(_transfer2.default, { dataSource: this.state.mockData, listStyle: { width: 300, height: 300 }, targetKeys: this.state.targetKeys, onChange: this.handleChange, render: this.renderItem });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ },

/***/ 1783:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "meta": {}
	};

/***/ },

/***/ 1784:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(238);

	var _transfer = __webpack_require__(237);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "带搜索框的穿梭框，可以自定义搜索函数。"]],
	    "en-US": [["p", "Transfer with a search box."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "带搜索框",
	      "en-US": "Search"
	    },
	    "filename": "components/transfer/demo/search.md",
	    "id": "components-transfer-demo-search"
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
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Transfer <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      mockData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      targetKeys<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">getMock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetKeys <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> mockData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`description of content</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i <span class=\"token operator\">+</span> <span class=\"token number\">1</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n        chosen<span class=\"token punctuation\">:</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">></span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>chosen<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        targetKeys<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      mockData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> mockData<span class=\"token punctuation\">,</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">filterOption</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> option<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>targetKeys<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> targetKeys <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Transfer</span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>mockData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">filterOption</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>filterOption<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">targetKeys</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>targetKeys<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">render</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var App = _react2.default.createClass({
	      displayName: 'App',
	      getInitialState: function getInitialState() {
	        return { mockData: [], targetKeys: [] };
	      },
	      componentDidMount: function componentDidMount() {
	        this.getMock();
	      },
	      getMock: function getMock() {
	        var targetKeys = [];var mockData = [];for (var i = 0; i < 20; i++) {
	          var data = { key: i.toString(), title: 'content' + (i + 1), description: 'description of content' + (i + 1), chosen: Math.random() * 2 > 1 };if (data.chosen) {
	            targetKeys.push(data.key);
	          }mockData.push(data);
	        }this.setState({ mockData: mockData, targetKeys: targetKeys });
	      },
	      filterOption: function filterOption(inputValue, option) {
	        return option.description.indexOf(inputValue) > -1;
	      },
	      handleChange: function handleChange(targetKeys) {
	        this.setState({ targetKeys: targetKeys });
	      },
	      render: function render() {
	        return _react2.default.createElement(_transfer2.default, { dataSource: this.state.mockData, showSearch: true, filterOption: this.filterOption, targetKeys: this.state.targetKeys, onChange: this.handleChange, render: function render(item) {
	            return item.title;
	          } });
	      }
	    });return _react2.default.createElement(App, null);
	  }
	};

/***/ }

});